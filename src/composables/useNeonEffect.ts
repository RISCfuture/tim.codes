/**
 * Vue Composable for Physically-Accurate Neon Effects
 *
 * Provides progressive enhancement for neon lighting:
 * - Detects CSS Paint API (Houdini) support
 * - Registers neon paint worklet
 * - Manages flicker animations
 * - Handles warm-up effects
 * - Respects accessibility preferences
 *
 * Usage:
 *   const { applyNeon, isSupported } = useNeonEffect()
 *   applyNeon(elementRef, { color: [237, 68, 76], luminosity: 0.8 })
 */

import { ref, onMounted, onUnmounted, type Ref } from 'vue'

interface NeonConfig {
  // Core properties
  color?: [number, number, number] // RGB values [0-255]
  luminosity?: number // 0-1
  flicker?: number // 0-1 intensity

  // Physical properties
  tubeThickness?: number // pixels
  bloomRadius?: number // pixels
  ambientGlow?: number // pixels

  // Advanced
  electrodeHeat?: number // multiplier (1.0 = none, higher = more)
  chromaticAberration?: number // 0-1
  phosphorCoating?: number // 0-1
  gasPressure?: number // multiplier (1.0 = normal)

  // Behavior
  warmUpDuration?: number // milliseconds
  enableFlicker?: boolean // animate flicker
  flickerFrequency?: number // Hz
}

interface NeonEffectReturn {
  isSupported: Ref<boolean>
  isWorkletReady: Ref<boolean>
  applyNeon: (element: Ref<HTMLElement | undefined>, config: NeonConfig) => void
  removeNeon: (element: Ref<HTMLElement | undefined>) => void
  updateConfig: (element: Ref<HTMLElement | undefined>, config: Partial<NeonConfig>) => void
}

// Global state (shared across all instances)
let workletRegistered = false
let workletPromise: Promise<void> | null = null
const flickerAnimations = new Map<HTMLElement, number>()

export function useNeonEffect(): NeonEffectReturn {
  const isSupported = ref(false)
  const isWorkletReady = ref(false)

  /**
   * Check for CSS Paint API support
   */
  const checkSupport = (): boolean => {
    if (typeof window === 'undefined') return false

    // Check for Paint Worklet support
    if ('paintWorklet' in CSS) {
      return true
    }

    return false
  }

  /**
   * Register the paint worklet (once globally)
   */
  const registerWorklet = async (): Promise<void> => {
    if (workletRegistered) return
    if (workletPromise) return workletPromise

    workletPromise = (async () => {
      try {
        // Dynamically load and register the worklet
        const workletUrl = new URL('../assets/worklets/neon-paint.worklet.ts', import.meta.url)

        // Check if CSS Paint API is available
        if ('paintWorklet' in CSS) {
          // In production, Vite will handle the worklet file
          // For development, we need to handle it specially
          if (import.meta.env.DEV) {
            // Development: Use raw worklet URL
            await (
              CSS as unknown as { paintWorklet: { addModule: (url: string) => Promise<void> } }
            ).paintWorklet.addModule(workletUrl.href)
          } else {
            // Production: Vite will bundle it
            await (
              CSS as unknown as { paintWorklet: { addModule: (url: string) => Promise<void> } }
            ).paintWorklet.addModule(workletUrl.href)
          }

          workletRegistered = true
          isWorkletReady.value = true
        }
      } catch (error) {
        console.warn('Failed to register neon paint worklet:', error)
        isWorkletReady.value = false
      }
    })()

    return workletPromise
  }

  /**
   * Apply CSS custom properties for neon configuration
   */
  const applyConfig = (element: HTMLElement, config: NeonConfig): void => {
    const {
      color = [255, 75, 43],
      luminosity = 0.85,
      flicker = 0.08,
      tubeThickness = 4,
      bloomRadius = 20,
      ambientGlow = 40,
      electrodeHeat = 1.3,
      chromaticAberration = 0.3,
      phosphorCoating = 0,
      gasPressure = 1.0,
      warmUpDuration = 800,
      enableFlicker = true,
      flickerFrequency = 60
    } = config

    // Set CSS custom properties
    element.style.setProperty('--neon-color-r', color[0].toString())
    element.style.setProperty('--neon-color-g', color[1].toString())
    element.style.setProperty('--neon-color-b', color[2].toString())
    element.style.setProperty('--neon-luminosity', luminosity.toString())
    element.style.setProperty('--neon-flicker-intensity', flicker.toString())
    element.style.setProperty('--neon-tube-thickness', `${tubeThickness}px`)
    element.style.setProperty('--neon-bloom-radius', `${bloomRadius}px`)
    element.style.setProperty('--neon-ambient-glow', `${ambientGlow}px`)
    element.style.setProperty('--neon-electrode-heat', electrodeHeat.toString())
    element.style.setProperty('--neon-chromatic-aberration', chromaticAberration.toString())
    element.style.setProperty('--neon-phosphor-coating', phosphorCoating.toString())
    element.style.setProperty('--neon-gas-pressure', gasPressure.toString())
    element.style.setProperty('--neon-warm-up-duration', `${warmUpDuration}ms`)
    element.style.setProperty('--neon-flicker-frequency', flickerFrequency.toString())

    // Enable flicker animation if supported and requested
    if (enableFlicker && !prefersReducedMotion()) {
      startFlickerAnimation(element, flickerFrequency)
    }
  }

  /**
   * Check for reduced motion preference
   */
  const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  /**
   * Start flicker animation using requestAnimationFrame
   */
  const startFlickerAnimation = (element: HTMLElement, frequency: number): void => {
    // Don't start if already animating
    if (flickerAnimations.has(element)) return

    // For browsers with Houdini support, the worklet handles flicker internally
    // For fallback mode, we animate the opacity
    if (!isSupported.value) {
      let lastTime = performance.now()
      let phase = 0

      const animate = (currentTime: number): void => {
        const deltaTime = currentTime - lastTime
        lastTime = currentTime

        // Update phase based on frequency
        phase += (deltaTime / 1000) * frequency * Math.PI * 2

        // Get flicker intensity from CSS variable
        const flickerIntensity = parseFloat(
          getComputedStyle(element).getPropertyValue('--neon-flicker-intensity') || '0.08'
        )

        // Calculate flicker (subtle variation)
        const flicker = 1.0 - Math.sin(phase) * flickerIntensity * 0.1

        // Apply to opacity
        element.style.opacity = flicker.toString()

        // Continue animation
        const animationId = requestAnimationFrame(animate)
        flickerAnimations.set(element, animationId)
      }

      const initialAnimationId = requestAnimationFrame(animate)
      flickerAnimations.set(element, initialAnimationId)
    }
  }

  /**
   * Stop flicker animation
   */
  const stopFlickerAnimation = (element: HTMLElement): void => {
    const animationId = flickerAnimations.get(element)
    if (animationId !== undefined) {
      cancelAnimationFrame(animationId)
      flickerAnimations.delete(element)
      element.style.opacity = '1'
    }
  }

  /**
   * Apply neon effect to an element
   */
  const applyNeon = async (
    elementRef: Ref<HTMLElement | undefined>,
    config: NeonConfig
  ): Promise<void> => {
    const element = elementRef.value
    if (!element) return

    // Add data attribute
    element.setAttribute('data-neon', '')

    // Apply configuration
    applyConfig(element, config)

    // If supported, register worklet
    if (isSupported.value && !workletRegistered) {
      await registerWorklet()
    }

    // Add class for enhanced mode if worklet is ready
    if (isSupported.value && isWorkletReady.value) {
      element.classList.add('neon-enhanced')
    }

    // Trigger warm-up effect
    element.classList.add('neon-warming-up')
    const warmUpDuration = config.warmUpDuration || 800
    setTimeout(() => {
      element.classList.remove('neon-warming-up')
      element.classList.add('neon-active')
    }, warmUpDuration)
  }

  /**
   * Remove neon effect from element
   */
  const removeNeon = (elementRef: Ref<HTMLElement | undefined>): void => {
    const element = elementRef.value
    if (!element) return

    element.removeAttribute('data-neon')
    element.classList.remove('neon-enhanced', 'neon-active', 'neon-warming-up')
    stopFlickerAnimation(element)

    // Clear custom properties
    const neonProps = [
      '--neon-color-r',
      '--neon-color-g',
      '--neon-color-b',
      '--neon-luminosity',
      '--neon-flicker-intensity',
      '--neon-tube-thickness',
      '--neon-bloom-radius',
      '--neon-ambient-glow',
      '--neon-electrode-heat',
      '--neon-chromatic-aberration',
      '--neon-phosphor-coating',
      '--neon-gas-pressure',
      '--neon-warm-up-duration',
      '--neon-flicker-frequency'
    ]

    neonProps.forEach((prop) => element.style.removeProperty(prop))
  }

  /**
   * Update configuration for existing neon element
   */
  const updateConfig = (
    elementRef: Ref<HTMLElement | undefined>,
    config: Partial<NeonConfig>
  ): void => {
    const element = elementRef.value
    if (!element || !element.hasAttribute('data-neon')) return

    // Get current config from CSS properties
    const currentConfig: NeonConfig = {
      color: [
        parseFloat(getComputedStyle(element).getPropertyValue('--neon-color-r') || '255'),
        parseFloat(getComputedStyle(element).getPropertyValue('--neon-color-g') || '75'),
        parseFloat(getComputedStyle(element).getPropertyValue('--neon-color-b') || '43')
      ],
      luminosity: parseFloat(
        getComputedStyle(element).getPropertyValue('--neon-luminosity') || '0.85'
      ),
      flicker: parseFloat(
        getComputedStyle(element).getPropertyValue('--neon-flicker-intensity') || '0.08'
      )
    }

    // Merge with new config
    const mergedConfig = { ...currentConfig, ...config }

    // Re-apply
    applyConfig(element, mergedConfig)
  }

  /**
   * Initialize on mount
   */
  onMounted(() => {
    isSupported.value = checkSupport()

    // Pre-register worklet if supported (for faster first paint)
    if (isSupported.value) {
      registerWorklet()
    }
  })

  /**
   * Cleanup on unmount
   */
  onUnmounted(() => {
    // Stop all flicker animations for this component
    flickerAnimations.forEach((animationId, element) => {
      cancelAnimationFrame(animationId)
      flickerAnimations.delete(element)
    })
  })

  return {
    isSupported,
    isWorkletReady,
    applyNeon,
    removeNeon,
    updateConfig
  }
}

// Export preset configurations for common neon colors
export const NeonPresets = {
  trueNeon: {
    color: [255, 75, 43] as [number, number, number],
    phosphorCoating: 0
  },
  argonBlue: {
    color: [147, 176, 255] as [number, number, number],
    phosphorCoating: 0.3
  },
  mercuryBlue: {
    color: [66, 200, 255] as [number, number, number],
    phosphorCoating: 0
  },
  heliumGold: {
    color: [255, 215, 100] as [number, number, number],
    phosphorCoating: 0
  },
  xenonWhite: {
    color: [180, 200, 255] as [number, number, number],
    phosphorCoating: 0
  },
  kryptonGreen: {
    color: [200, 255, 210] as [number, number, number],
    phosphorCoating: 0
  }
}
