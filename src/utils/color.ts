/** An sRGB color with 8-bit channels (0–255). */
export interface Rgb {
  r: number
  g: number
  b: number
}

/** Parse a `#rgb` or `#rrggbb` hex string into 8-bit sRGB channels. */
export function hexToRgb(hex: string): Rgb {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? `${h[0]}${h[0]}${h[1]}${h[1]}${h[2]}${h[2]}` : h
  return {
    r: Number.parseInt(full.slice(0, 2), 16),
    g: Number.parseInt(full.slice(2, 4), 16),
    b: Number.parseInt(full.slice(4, 6), 16),
  }
}

function toHexChannel(value: number): string {
  return Math.round(Math.max(0, Math.min(255, value)))
    .toString(16)
    .padStart(2, '0')
}

/** Format 8-bit sRGB channels as a lowercase `#rrggbb` string. */
export function rgbToHex({ r, g, b }: Rgb): string {
  return `#${toHexChannel(r)}${toHexChannel(g)}${toHexChannel(b)}`
}

/** Convert an 8-bit sRGB channel to linear-light (0–1), per the sRGB transfer function. */
function srgbToLinear(channel: number): number {
  const c = channel / 255
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

/** Convert a linear-light value (0–1) back to an 8-bit sRGB channel. */
function linearToSrgb(value: number): number {
  const clamped = Math.max(0, Math.min(1, value))
  const c = clamped <= 0.0031308 ? 12.92 * clamped : 1.055 * clamped ** (1 / 2.4) - 0.055
  return c * 255
}

/** WCAG 2.1 relative luminance of an sRGB color (0 = black, 1 = white). */
export function relativeLuminance({ r, g, b }: Rgb): number {
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b)
}

/** WCAG 2.1 contrast ratio between two sRGB colors (≥ 1). */
export function contrastRatio(a: Rgb, b: Rgb): number {
  const la = relativeLuminance(a)
  const lb = relativeLuminance(b)
  const hi = Math.max(la, lb)
  const lo = Math.min(la, lb)
  return (hi + 0.05) / (lo + 0.05)
}

/**
 * Scale a color in linear-light space so its relative luminance equals
 * `targetLuminance`, preserving hue/chroma. No-op if already dark enough.
 */
export function darkenToLuminance(rgb: Rgb, targetLuminance: number): Rgb {
  const luminance = relativeLuminance(rgb)
  if (luminance <= targetLuminance || luminance === 0) return rgb
  const scale = targetLuminance / luminance
  return {
    r: linearToSrgb(srgbToLinear(rgb.r) * scale),
    g: linearToSrgb(srgbToLinear(rgb.g) * scale),
    b: linearToSrgb(srgbToLinear(rgb.b) * scale),
  }
}
