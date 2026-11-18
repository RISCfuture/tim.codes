import { ref, type Ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

/** The height of one implicit row in the fallback masonry grid (`grid-auto-rows`). */
const MASONRY_ROW_PX = 4

function supportsNativeMasonry(): boolean {
  return typeof CSS !== 'undefined' && CSS.supports('display', 'grid-lanes')
}

/**
 * Sizes a masonry item for browsers without `display: grid-lanes`. It measures the element
 * (including its bottom margin, which stands in for the row gap) and returns how many
 * {@link MASONRY_ROW_PX}-tall grid rows it should span. Where grid-lanes is supported, the
 * span stays `undefined` and the browser packs the items itself.
 */
export function useMasonrySpan(elementRef: Ref<HTMLElement | null>) {
  const rowSpan = ref<number>()
  if (supportsNativeMasonry()) return { rowSpan }

  useResizeObserver(elementRef, ([entry]) => {
    const element = elementRef.value
    if (!element) return
    // oxlint-disable-next-line unicorn/prefer-number-coercion -- Number('20px') is NaN
    const marginBottom = Number.parseFloat(getComputedStyle(element).marginBottom)
    rowSpan.value = Math.ceil((entry.borderBoxSize[0].blockSize + marginBottom) / MASONRY_ROW_PX)
  })

  return { rowSpan }
}
