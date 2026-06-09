import { describe, it, expect } from 'vitest'
import { wavelengthToSrgb, spectrumToSrgb } from '../spectralColor'
import { hexToRgb } from '../color'

describe('spectralColor', () => {
  it('maps long wavelengths to red', () => {
    const { r, g, b } = hexToRgb(wavelengthToSrgb(700))
    expect(r).toBe(255)
    expect(r).toBeGreaterThan(g)
    expect(r).toBeGreaterThan(b)
    expect(b).toBeLessThan(80)
  })

  it('maps ~530nm to green', () => {
    const { r, g, b } = hexToRgb(wavelengthToSrgb(530))
    expect(g).toBe(255)
    expect(g).toBeGreaterThan(r)
    expect(g).toBeGreaterThan(b)
  })

  it('maps ~460nm to blue', () => {
    const { r, g, b } = hexToRgb(wavelengthToSrgb(460))
    expect(b).toBe(255)
    expect(b).toBeGreaterThan(r)
    expect(b).toBeGreaterThan(g)
  })

  it('always returns a valid 6-digit hex and is deterministic', () => {
    const a = spectrumToSrgb([
      { nm: 640, intensity: 1 },
      { nm: 550, intensity: 0.3 },
    ])
    const b = spectrumToSrgb([
      { nm: 640, intensity: 1 },
      { nm: 550, intensity: 0.3 },
    ])
    expect(a).toMatch(/^#[0-9a-f]{6}$/u)
    expect(a).toBe(b)
  })
})
