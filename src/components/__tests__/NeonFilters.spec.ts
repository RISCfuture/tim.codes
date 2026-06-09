import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import NeonFilters from '../NeonFilters.vue'

/** Returns the lowercased tag names of all descendant elements. */
const childTags = (el: Element | null) =>
  [...(el?.querySelectorAll('*') ?? [])].map((n) => n.tagName.toLowerCase())

describe('NeonFilters', () => {
  it('renders one neon filter hidden from assistive tech', () => {
    const { container } = render(NeonFilters)
    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('aria-hidden')).toBe('true')
    expect(container.querySelector('filter#neon')).not.toBeNull()
  })

  it('models a light bloom: blurred copies merged under the crisp source', () => {
    const { container } = render(NeonFilters)
    const tags = childTags(container.querySelector('filter#neon'))
    expect(tags).toContain('fegaussianblur')
    expect(tags).toContain('femerge')
    expect(tags).toContain('fecomponenttransfer')
  })
})
