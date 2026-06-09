import { test, expect } from '@playwright/test'
import { contrastRatio, hexToRgb, type Rgb } from '../src/utils/color'
import { NEON_PALETTE, type NeonSection } from '../src/utils/neonSpectra'

// axe-core cannot evaluate this header: its backgrounds live on pseudo-elements
// (the cross-fading gradient layers), so axe reports every text node as
// "incomplete" and never checks a ratio. Instead we read the real computed text
// colours in the browser and verify WCAG contrast against the actual spectral
// background gradient — the same palette the unit tests derive and guard.

const routes: { hash: string; section: NeonSection }[] = [
  { hash: '#/', section: 'bio' },
  { hash: '#/projects', section: 'projects' },
  { hash: '#/resume', section: 'resume' },
]

/** Parse a computed `rgb(...)` / `rgba(...)` string into channels + alpha. */
function parseColor(css: string): { rgb: Rgb; alpha: number } {
  const nums = (css.match(/[\d.]+/gu) ?? []).map((value) => Number(value))
  return { rgb: { r: nums[0], g: nums[1], b: nums[2] }, alpha: nums[3] ?? 1 }
}

/** Composite a translucent foreground over an opaque background. */
function composite(fg: Rgb, alpha: number, bg: Rgb): Rgb {
  return {
    r: fg.r * alpha + bg.r * (1 - alpha),
    g: fg.g * alpha + bg.g * (1 - alpha),
    b: fg.b * alpha + bg.b * (1 - alpha),
  }
}

/** Lowest contrast of a (possibly translucent) text colour against either stop
 * of the section's background gradient — the real-world worst case. */
function worstContrast(cssColor: string, section: NeonSection): number {
  const { rgb, alpha } = parseColor(cssColor)
  const ratios = NEON_PALETTE[section].background.map((stop) => {
    const bg = hexToRgb(stop)
    return contrastRatio(composite(rgb, alpha, bg), bg)
  })
  return Math.min(...ratios)
}

for (const { hash, section } of routes) {
  test(`header text meets WCAG AA on ${section}`, async ({ page }) => {
    await page.goto(`/${hash}`)
    await page.locator('header h1').waitFor()

    // Large bold title — WCAG AA large-text threshold is 3:1.
    const titleColor = await page
      .locator('header h1')
      .evaluate((el) => getComputedStyle(el).color)
    expect(worstContrast(titleColor, section)).toBeGreaterThanOrEqual(3)

    // Small bold nav labels — WCAG AA normal-text threshold is 4.5:1.
    const labelColors = await page
      .locator('header .tab-label')
      .evaluateAll((els) => els.map((el) => getComputedStyle(el).color))
    expect(labelColors.length).toBeGreaterThan(0)
    for (const color of labelColors) {
      expect(worstContrast(color, section)).toBeGreaterThanOrEqual(4.5)
    }
  })
}
