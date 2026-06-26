import { rgbToHex, type Rgb } from './color'

/** One emission line: wavelength in nm with relative radiant intensity (arbitrary units). */
export interface SpectralLine {
  nm: number
  intensity: number
}

interface Xyz {
  x: number
  y: number
  z: number
}

/** Piecewise Gaussian lobe used by the Wyman et al. (2013) CMF fit. */
function gaussianLobe(x: number, mu: number, sigmaLow: number, sigmaHigh: number): number {
  const t = (x - mu) / (x < mu ? sigmaLow : sigmaHigh)
  return Math.exp(-0.5 * t * t)
}

// CIE 1931 2° color-matching functions, analytic multi-lobe Gaussian fit from
// Wyman, Sloan & Shirley, "Simple Analytic Approximations to the CIE XYZ Color
// Matching Functions", Journal of Computer Graphics Techniques 2(2), 2013.
function cieX(nm: number): number {
  return (
    1.056 * gaussianLobe(nm, 599.8, 37.9, 31.0) +
    0.362 * gaussianLobe(nm, 442.0, 16.0, 26.7) -
    0.065 * gaussianLobe(nm, 501.1, 20.4, 26.2)
  )
}

function cieY(nm: number): number {
  return 0.821 * gaussianLobe(nm, 568.8, 46.9, 40.5) + 0.286 * gaussianLobe(nm, 530.9, 16.3, 31.1)
}

function cieZ(nm: number): number {
  return 1.217 * gaussianLobe(nm, 437.0, 11.8, 36.0) + 0.681 * gaussianLobe(nm, 459.0, 26.0, 13.8)
}

function spectrumToXyz(lines: SpectralLine[]): Xyz {
  const acc: Xyz = { x: 0, y: 0, z: 0 }
  for (const { nm, intensity } of lines) {
    acc.x += intensity * cieX(nm)
    acc.y += intensity * cieY(nm)
    acc.z += intensity * cieZ(nm)
  }
  return acc
}

/** Linear-light value (0–1) → 8-bit sRGB channel. */
function linearToSrgbChannel(value: number): number {
  const clamped = Math.max(0, Math.min(1, value))
  const c = clamped <= 0.0031308 ? 12.92 * clamped : 1.055 * clamped ** (1 / 2.4) - 0.055
  return c * 255
}

/**
 * Lift negative channels (desaturate toward white) then normalize so the
 * brightest channel is 1. Returns [r, g, b] in linear-light [0, 1].
 */
function gamutNormalize(r: number, g: number, b: number): [number, number, number] {
  const min = Math.min(r, g, b)
  const lifted = min < 0 ? [r - min, g - min, b - min] : [r, g, b]
  const max = Math.max(...lifted)
  return max > 0 ? [lifted[0] / max, lifted[1] / max, lifted[2] / max] : [0, 0, 0]
}

/**
 * CIE XYZ (D65) → full-brightness sRGB. Out-of-gamut colors are desaturated
 * toward white (clamp negatives by lifting all channels), then normalized so the
 * brightest channel is fully on — i.e. the color of the tube at full glow.
 */
function xyzToTubeSrgb({ x, y, z }: Xyz): Rgb {
  const [r, g, b] = gamutNormalize(
    3.2406 * x - 1.5372 * y - 0.4986 * z,
    -0.9689 * x + 1.8758 * y + 0.0415 * z,
    0.0557 * x - 0.204 * y + 1.057 * z,
  )
  return {
    r: linearToSrgbChannel(r),
    g: linearToSrgbChannel(g),
    b: linearToSrgbChannel(b),
  }
}

/** Full-brightness sRGB tube color for a single monochromatic wavelength. */
export function wavelengthToSrgb(nm: number): string {
  return rgbToHex(xyzToTubeSrgb(spectrumToXyz([{ nm, intensity: 1 }])))
}

/** Full-brightness sRGB tube color for an emission-line spectrum. */
export function spectrumToSrgb(lines: SpectralLine[]): string {
  return rgbToHex(xyzToTubeSrgb(spectrumToXyz(lines)))
}
