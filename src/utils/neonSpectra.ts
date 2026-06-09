import { darkenToLuminance, hexToRgb, rgbToHex, type Rgb } from './color'
import { spectrumToSrgb, type SpectralLine } from './spectralColor'

// Emission lines: strongest visible persistent lines per the NIST Atomic Spectra
// Database (ASD). Intensities are approximate relative strengths — exact values
// are pinned by neonSpectra.spec.ts so the palette is reproducible, not eyeballed.

/** Neon (Ne I): the dense red-orange line cluster that gives classic neon its color. */
const NEON: SpectralLine[] = [
  { nm: 585.2, intensity: 0.5 },
  { nm: 588.2, intensity: 0.3 },
  { nm: 594.5, intensity: 0.25 },
  { nm: 597.5, intensity: 0.2 },
  { nm: 603.0, intensity: 0.35 },
  { nm: 607.4, intensity: 0.35 },
  { nm: 614.3, intensity: 0.45 },
  { nm: 616.4, intensity: 0.3 },
  { nm: 621.7, intensity: 0.4 },
  { nm: 626.6, intensity: 0.45 },
  { nm: 633.4, intensity: 0.55 },
  { nm: 638.3, intensity: 0.6 },
  { nm: 640.2, intensity: 1.0 },
  { nm: 650.7, intensity: 0.5 },
  { nm: 659.9, intensity: 0.3 },
  { nm: 692.9, intensity: 0.15 },
  { nm: 703.2, intensity: 0.15 },
]

/** Argon + mercury (clear glass): the classic blue/violet sign fill. */
const ARGON_MERCURY: SpectralLine[] = [
  { nm: 404.7, intensity: 0.4 }, // Hg violet
  { nm: 415.9, intensity: 0.3 }, // Ar
  { nm: 420.1, intensity: 0.4 }, // Ar
  { nm: 425.9, intensity: 0.35 }, // Ar
  { nm: 430.0, intensity: 0.35 }, // Ar
  { nm: 433.4, intensity: 0.3 }, // Ar
  { nm: 435.8, intensity: 1.0 }, // Hg blue (dominant)
  { nm: 451.1, intensity: 0.4 }, // Ar
]

/** Mercury lines used for the green tube (before glass filtering). */
const MERCURY: SpectralLine[] = [
  { nm: 404.7, intensity: 0.4 },
  { nm: 435.8, intensity: 1.0 },
  { nm: 491.6, intensity: 0.3 },
  { nm: 546.1, intensity: 1.0 }, // green line
  { nm: 577.0, intensity: 0.5 },
  { nm: 579.1, intensity: 0.5 },
]

/**
 * Green neon is real mercury discharge viewed through green-tinted glass. Model
 * the glass as a Gaussian transmission window centered on the 546.1nm Hg green
 * line, so that line dominates the result.
 */
function greenGlassFiltered(lines: SpectralLine[]): SpectralLine[] {
  const center = 540
  const sigma = 22
  return lines.map(({ nm, intensity }) => {
    const t = (nm - center) / sigma
    return { nm, intensity: intensity * Math.exp(-0.5 * t * t) }
  })
}

const MERCURY_GREEN_GLASS = greenGlassFiltered(MERCURY)

/** One section's derived neon colors. */
export interface NeonColor {
  /** Full-brightness spectral tube/glow color. */
  tube: string
  /** White-hot tube core (used for text and the active indicator — high luminance). */
  core: string
  /** Darkened background gradient: [top, bottom]. White text passes WCAG AA on both. */
  background: [string, string]
}

/** Mix a color toward white by `t` (0–1) in sRGB space, for the white-hot core. */
function towardWhite(rgb: Rgb, t: number): Rgb {
  return {
    r: rgb.r + (255 - rgb.r) * t,
    g: rgb.g + (255 - rgb.g) * t,
    b: rgb.b + (255 - rgb.b) * t,
  }
}

function deriveColor(spectrum: SpectralLine[]): NeonColor {
  const tubeHex = spectrumToSrgb(spectrum)
  const tube = hexToRgb(tubeHex)
  return {
    tube: tubeHex,
    core: rgbToHex(towardWhite(tube, 0.7)),
    background: [rgbToHex(darkenToLuminance(tube, 0.04)), rgbToHex(darkenToLuminance(tube, 0.07))],
  }
}

/** The spectrally-derived neon palette, keyed by section. */
export const NEON_PALETTE = {
  bio: deriveColor(ARGON_MERCURY),
  projects: deriveColor(NEON),
  resume: deriveColor(MERCURY_GREEN_GLASS),
} as const

export type NeonSection = keyof typeof NEON_PALETTE
