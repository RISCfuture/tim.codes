import { ref, nextTick, type Ref } from 'vue'
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px', triggerOnce = true } = options

  const elementRef: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)
  const reducedMotion = usePreferredReducedMotion()

  if (reducedMotion.value === 'reduce') {
    isVisible.value = true
    return { elementRef, isVisible }
  }

  const { stop } = useIntersectionObserver(
    elementRef,
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (triggerOnce) stop()
        } else if (!triggerOnce) {
          isVisible.value = false
        }
      })
    },
    { threshold, rootMargin },
  )

  void nextTick(() => {
    if (elementRef.value) {
      const rect = elementRef.value.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const isInViewport = rect.top < windowHeight && rect.bottom > 0
      if (isInViewport) {
        isVisible.value = true
        if (triggerOnce) stop()
      }
    }
  })

  return { elementRef, isVisible }
}
