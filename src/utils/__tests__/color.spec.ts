import { describe, it, expect } from 'vitest'
import { hexToRgb, rgbToHex, relativeLuminance, contrastRatio, darkenToLuminance } from '../color'

describe('color', () => {
  it('round-trips hex and rgb', () => {
    expect(hexToRgb('#ff8800')).toEqual({ r: 255, g: 136, b: 0 })
    expect(rgbToHex({ r: 255, g: 136, b: 0 })).toBe('#ff8800')
    expect(hexToRgb('#fff')).toEqual({ r: 255, g: 255, b: 255 })
  })

  it('computes WCAG relative luminance at the extremes', () => {
    expect(relativeLuminance({ r: 255, g: 255, b: 255 })).toBeCloseTo(1, 5)
    expect(relativeLuminance({ r: 0, g: 0, b: 0 })).toBeCloseTo(0, 5)
  })

  it('computes the canonical 21:1 contrast for black on white', () => {
    expect(contrastRatio({ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 })).toBeCloseTo(21, 1)
  })

  it('darkens a color to a target luminance while preserving hue family', () => {
    const dark = darkenToLuminance({ r: 0, g: 255, b: 0 }, 0.14)
    expect(relativeLuminance(dark)).toBeCloseTo(0.14, 2)
    expect(dark.g).toBeGreaterThan(dark.r)
    expect(dark.g).toBeGreaterThan(dark.b)
  })
})
