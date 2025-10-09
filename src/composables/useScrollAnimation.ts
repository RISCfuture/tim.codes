import { onMounted, onUnmounted, ref, nextTick, type Ref } from 'vue'

export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Composable for scroll-triggered animations using Intersection Observer
 * @param options - Configuration options for the intersection observer
 * @returns ref to attach to the element and isVisible ref for reactive state
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
  } = options

  const elementRef: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (triggerOnce && observer && entry.target) {
              observer.unobserve(entry.target)
            }
          } else if (!triggerOnce) {
            isVisible.value = false
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(elementRef.value)

    // Check immediately if element is already in viewport on page load
    nextTick(() => {
      if (elementRef.value) {
        const rect = elementRef.value.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight

        // Check if element is in viewport (with some tolerance for the rootMargin)
        const isInViewport = rect.top < windowHeight && rect.bottom > 0

        if (isInViewport) {
          isVisible.value = true
          if (triggerOnce && observer) {
            observer.unobserve(elementRef.value)
          }
        }
      }
    })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible,
  }
}
