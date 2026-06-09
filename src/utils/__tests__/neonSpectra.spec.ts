import { describe, it, expect } from 'vitest'
import { NEON_PALETTE, type NeonSection } from '../neonSpectra'
import { contrastRatio, hexToRgb, relativeLuminance } from '../color'

const WHITE = { r: 255, g: 255, b: 255 }
const sections = Object.keys(NEON_PALETTE) as NeonSection[]

describe('NEON_PALETTE', () => {
  it('derives the expected hue family per section', () => {
    const bio = hexToRgb(NEON_PALETTE.bio.tube)
    expect(bio.b).toBeGreaterThan(bio.r) // blue-dominant
    const projects = hexToRgb(NEON_PALETTE.projects.tube)
    expect(projects.r).toBeGreaterThan(projects.b) // red-dominant
    const resume = hexToRgb(NEON_PALETTE.resume.tube)
    expect(resume.g).toBeGreaterThan(resume.r) // green-dominant
    expect(resume.g).toBeGreaterThan(resume.b)
  })

  it.each(sections)('passes WCAG AA for white text on %s backgrounds', (section) => {
    for (const stop of NEON_PALETTE[section].background) {
      expect(contrastRatio(WHITE, hexToRgb(stop))).toBeGreaterThanOrEqual(4.5)
    }
  })

  it.each(sections)('gives the %s active-indicator core ≥3:1 vs its background', (section) => {
    const { core, background } = NEON_PALETTE[section]
    let darkest = background[0]
    for (const stop of background) {
      if (relativeLuminance(hexToRgb(stop)) < relativeLuminance(hexToRgb(darkest))) {
        darkest = stop
      }
    }
    expect(contrastRatio(hexToRgb(core), hexToRgb(darkest))).toBeGreaterThanOrEqual(3)
  })
})
