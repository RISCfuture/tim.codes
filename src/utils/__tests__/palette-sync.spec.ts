import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, it, expect } from 'vitest'
import { NEON_PALETTE, type NeonSection } from '../neonSpectra'

const scss = readFileSync(
  path.resolve(import.meta.dirname, '../../assets/styles/_neon-palette.scss'),
  'utf8',
)

function cssVar(name: string): string | undefined {
  return new RegExp(`--${name}:\\s*(#[0-9a-f]{6});`, 'u').exec(scss)?.[1]
}

describe('_neon-palette.scss', () => {
  const sections = Object.keys(NEON_PALETTE) as NeonSection[]

  it.each(sections)('bakes %s tube/core matching the TS derivation', (section) => {
    expect(cssVar(`neon-${section}-tube`)).toBe(NEON_PALETTE[section].tube)
    expect(cssVar(`neon-${section}-core`)).toBe(NEON_PALETTE[section].core)
  })

  it.each(sections)('bakes %s background stops matching the TS derivation', (section) => {
    expect(cssVar(`neon-${section}-bg-1`)).toBe(NEON_PALETTE[section].background[0])
    expect(cssVar(`neon-${section}-bg-2`)).toBe(NEON_PALETTE[section].background[1])
  })
})
