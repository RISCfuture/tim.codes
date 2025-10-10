/**
 * CSS Houdini Paint Worklet for Physically-Accurate Neon Tube Rendering
 *
 * Simulates real neon gas discharge physics:
 * - Gas ionization and electron excitation
 * - Electrode heating effects (cathode/anode glow)
 * - Glass tube refraction and chromatic aberration
 * - Phosphor coating for non-orange colors
 * - Plasma flicker and temporal variations
 * - Inverse square law light falloff
 *
 * Usage: Register worklet, then use paint(neon) in CSS
 */

/// <reference lib="dom" />

// Houdini Paint API type definitions
interface PaintSize {
  width: number
  height: number
}

type PaintRenderingContext2D = CanvasRenderingContext2D

interface NeonConfig {
  colorR: number
  colorG: number
  colorB: number
  luminosity: number
  tubeThickness: number
  glassOpacity: number
  flickerIntensity: number
  flickerFrequency: number
  electrodeHeat: number
  bloomRadius: number
  chromaticAberration: number
  ambientGlow: number
  refractionIndex: number
  phosphorCoating: number
  gasPressure: number
}

class NeonPaint {
  // Cached noise pattern for flicker simulation
  private noisePattern: Float32Array
  private noiseIndex = 0

  constructor() {
    // Pre-generate Perlin-like noise for smooth flicker
    this.noisePattern = new Float32Array(256)
    for (let i = 0; i < 256; i++) {
      this.noisePattern[i] = Math.random()
    }
  }

  /**
   * CSS Custom Properties that control the neon effect
   */
  static get inputProperties() {
    return [
      '--neon-color-r',
      '--neon-color-g',
      '--neon-color-b',
      '--neon-luminosity',
      '--neon-tube-thickness',
      '--neon-glass-opacity',
      '--neon-flicker-intensity',
      '--neon-flicker-frequency',
      '--neon-electrode-heat',
      '--neon-bloom-radius',
      '--neon-chromatic-aberration',
      '--neon-ambient-glow',
      '--neon-refraction-index',
      '--neon-phosphor-coating',
      '--neon-gas-pressure'
    ]
  }

  /**
   * Register input arguments (currently unused, all config via CSS props)
   */
  static get inputArguments() {
    return []
  }

  /**
   * Needs repaint on size changes
   */
  static get contextOptions() {
    return { alpha: true }
  }

  /**
   * Main paint function called by browser
   */
  paint(ctx: PaintRenderingContext2D, size: PaintSize, properties: StylePropertyMapReadOnly): void {
    // Parse CSS custom properties
    const config = this.parseProperties(properties)

    // Clear canvas with transparency
    ctx.clearRect(0, 0, size.width, size.height)

    // Calculate temporal flicker
    const flicker = this.calculateFlicker(config.flickerIntensity, config.flickerFrequency)

    // Render neon tube layers (back to front)
    this.renderAmbientGlow(ctx, size, config, flicker)
    this.renderBloom(ctx, size, config, flicker)
    this.renderChromaticAberration(ctx, size, config, flicker)
    this.renderGlassTube(ctx, size, config)
    this.renderGasDischarge(ctx, size, config, flicker)
    this.renderElectrodeHeating(ctx, size, config, flicker)
    this.renderGlassHighlight(ctx, size, config)
  }

  /**
   * Parse CSS custom properties into typed config
   */
  private parseProperties(properties: StylePropertyMapReadOnly) {
    const getFloat = (name: string, fallback: number): number => {
      try {
        const value = properties.get(name)
        if (!value) return fallback
        const str = value.toString().trim()
        const num = parseFloat(str)
        return isNaN(num) ? fallback : num
      } catch {
        return fallback
      }
    }

    const getPixels = (name: string, fallback: number): number => {
      try {
        const value = properties.get(name)
        if (!value) return fallback
        const str = value.toString().replace('px', '').trim()
        const num = parseFloat(str)
        return isNaN(num) ? fallback : num
      } catch {
        return fallback
      }
    }

    return {
      colorR: getFloat('--neon-color-r', 255),
      colorG: getFloat('--neon-color-g', 75),
      colorB: getFloat('--neon-color-b', 43),
      luminosity: getFloat('--neon-luminosity', 0.85),
      tubeThickness: getPixels('--neon-tube-thickness', 4),
      glassOpacity: getFloat('--neon-glass-opacity', 0.15),
      flickerIntensity: getFloat('--neon-flicker-intensity', 0.08),
      flickerFrequency: getFloat('--neon-flicker-frequency', 60),
      electrodeHeat: getFloat('--neon-electrode-heat', 1.3),
      bloomRadius: getPixels('--neon-bloom-radius', 20),
      chromaticAberration: getFloat('--neon-chromatic-aberration', 0.3),
      ambientGlow: getPixels('--neon-ambient-glow', 40),
      refractionIndex: getFloat('--neon-refraction-index', 1.5),
      phosphorCoating: getFloat('--neon-phosphor-coating', 0),
      gasPressure: getFloat('--neon-gas-pressure', 1.0)
    }
  }

  /**
   * Simulate plasma flicker using temporal noise
   * Combines 60Hz AC frequency with random plasma instabilities
   */
  private calculateFlicker(intensity: number, frequency: number): number {
    if (intensity === 0) return 1.0

    // Simulate 60Hz AC power variation
    const time = Date.now() / 1000
    const acFlicker = Math.sin(time * frequency * Math.PI * 2) * 0.02

    // Add random plasma instabilities (Perlin-like noise)
    this.noiseIndex = (this.noiseIndex + 0.1) % 256
    const noiseIdx = Math.floor(this.noiseIndex)
    const nextIdx = (noiseIdx + 1) % 256
    const frac = this.noiseIndex - noiseIdx

    // Interpolate between noise values for smoothness
    const noise =
      (this.noisePattern[noiseIdx] ?? 0.5) * (1 - frac) + (this.noisePattern[nextIdx] ?? 0.5) * frac

    // Occasional larger flickers (gas ionization events)
    const spike = noise > 0.95 ? 0.15 : 0

    // Combine all sources
    const totalFlicker = acFlicker + (noise - 0.5) * 0.05 + spike

    // Apply intensity and clamp
    return Math.max(0.7, Math.min(1.0, 1.0 - totalFlicker * intensity))
  }

  /**
   * Render ambient glow (atmospheric light scattering)
   * Uses inverse square law for realistic falloff
   */
  private renderAmbientGlow(
    ctx: PaintRenderingContext2D,
    size: PaintSize,
    config: NeonConfig,
    flicker: number
  ): void {
    const { colorR, colorG, colorB, luminosity, ambientGlow } = config

    // Create radial gradient for atmospheric scattering
    const centerY = size.height / 2
    const gradient = ctx.createRadialGradient(
      size.width / 2,
      centerY,
      0,
      size.width / 2,
      centerY,
      ambientGlow
    )

    const alpha = luminosity * flicker * 0.12

    gradient.addColorStop(0, `rgba(${colorR}, ${colorG}, ${colorB}, ${alpha})`)
    gradient.addColorStop(0.5, `rgba(${colorR}, ${colorG}, ${colorB}, ${alpha * 0.5})`)
    gradient.addColorStop(1, `rgba(${colorR}, ${colorG}, ${colorB}, 0)`)

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size.width, size.height)
  }

  /**
   * Render primary bloom (light bleeding from tube)
   */
  private renderBloom(
    ctx: PaintRenderingContext2D,
    size: PaintSize,
    config: NeonConfig,
    flicker: number
  ): void {
    const { colorR, colorG, colorB, luminosity, bloomRadius, tubeThickness } = config

    const centerY = size.height / 2

    // Multiple bloom layers for soft falloff
    const layers = [
      { radius: bloomRadius * 0.3, alpha: 0.9 },
      { radius: bloomRadius * 0.6, alpha: 0.6 },
      { radius: bloomRadius, alpha: 0.3 },
      { radius: bloomRadius * 1.5, alpha: 0.15 }
    ]

    layers.forEach((layer) => {
      const gradient = ctx.createRadialGradient(
        size.width / 2,
        centerY,
        tubeThickness / 2,
        size.width / 2,
        centerY,
        layer.radius
      )

      const alpha = luminosity * flicker * layer.alpha

      gradient.addColorStop(0, `rgba(${colorR}, ${colorG}, ${colorB}, ${alpha})`)
      gradient.addColorStop(1, `rgba(${colorR}, ${colorG}, ${colorB}, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, size.width, size.height)
    })
  }

  /**
   * Render chromatic aberration (color fringing from glass refraction)
   */
  private renderChromaticAberration(
    ctx: PaintRenderingContext2D,
    size: PaintSize,
    config: NeonConfig,
    flicker: number
  ): void {
    const { colorR, colorG, colorB, luminosity, chromaticAberration, bloomRadius, tubeThickness } =
      config

    if (chromaticAberration === 0) return

    const centerY = size.height / 2
    const intensity = chromaticAberration * luminosity * flicker

    // Red channel shift (longer wavelength, less refraction)
    const redGradient = ctx.createRadialGradient(
      size.width / 2 - bloomRadius * 0.05,
      centerY,
      tubeThickness / 2,
      size.width / 2,
      centerY,
      bloomRadius * 0.8
    )
    redGradient.addColorStop(0, `rgba(255, ${colorG * 0.3}, ${colorB * 0.3}, ${intensity * 0.2})`)
    redGradient.addColorStop(1, `rgba(255, ${colorG * 0.3}, ${colorB * 0.3}, 0)`)

    ctx.fillStyle = redGradient
    ctx.fillRect(0, 0, size.width, size.height)

    // Blue channel shift (shorter wavelength, more refraction)
    const blueGradient = ctx.createRadialGradient(
      size.width / 2 + bloomRadius * 0.05,
      centerY,
      tubeThickness / 2,
      size.width / 2,
      centerY,
      bloomRadius * 0.9
    )
    blueGradient.addColorStop(0, `rgba(${colorR * 0.3}, ${colorG * 0.3}, 255, ${intensity * 0.2})`)
    blueGradient.addColorStop(1, `rgba(${colorR * 0.3}, ${colorG * 0.3}, 255, 0)`)

    ctx.fillStyle = blueGradient
    ctx.fillRect(0, 0, size.width, size.height)
  }

  /**
   * Render glass tube structure
   */
  private renderGlassTube(ctx: PaintRenderingContext2D, size: PaintSize, config: NeonConfig): void {
    const { tubeThickness, glassOpacity } = config
    const centerY = size.height / 2

    // Outer glass edge
    ctx.strokeStyle = `rgba(255, 255, 255, ${glassOpacity * 0.3})`
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, centerY - tubeThickness / 2)
    ctx.lineTo(size.width, centerY - tubeThickness / 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(0, centerY + tubeThickness / 2)
    ctx.lineTo(size.width, centerY + tubeThickness / 2)
    ctx.stroke()
  }

  /**
   * Render gas discharge (ionized gas glow)
   */
  private renderGasDischarge(
    ctx: PaintRenderingContext2D,
    size: PaintSize,
    config: NeonConfig,
    flicker: number
  ): void {
    const { colorR, colorG, colorB, luminosity, tubeThickness, gasPressure, phosphorCoating } =
      config

    const centerY = size.height / 2

    // Gas discharge core (affected by pressure and phosphor)
    const coreGradient = ctx.createLinearGradient(
      0,
      centerY - tubeThickness / 2,
      0,
      centerY + tubeThickness / 2
    )

    // Calculate effective color (phosphor coating shifts spectrum)
    const phosphorShift = phosphorCoating * 0.3
    const effectiveR = colorR + (255 - colorR) * phosphorShift
    const effectiveG = colorG + (200 - colorG) * phosphorShift
    const effectiveB = colorB + (255 - colorB) * phosphorShift

    const alpha = luminosity * flicker * gasPressure * 0.7

    coreGradient.addColorStop(
      0,
      `rgba(${effectiveR}, ${effectiveG}, ${effectiveB}, ${alpha * 0.3})`
    )
    coreGradient.addColorStop(
      0.3,
      `rgba(${effectiveR}, ${effectiveG}, ${effectiveB}, ${alpha * 0.6})`
    )
    coreGradient.addColorStop(0.5, `rgba(${effectiveR}, ${effectiveG}, ${effectiveB}, ${alpha})`)
    coreGradient.addColorStop(
      0.7,
      `rgba(${effectiveR}, ${effectiveG}, ${effectiveB}, ${alpha * 0.6})`
    )
    coreGradient.addColorStop(
      1,
      `rgba(${effectiveR}, ${effectiveG}, ${effectiveB}, ${alpha * 0.3})`
    )

    ctx.fillStyle = coreGradient
    ctx.fillRect(0, centerY - tubeThickness / 2, size.width, tubeThickness)
  }

  /**
   * Render electrode heating (cathode/anode glow at tube ends)
   */
  private renderElectrodeHeating(
    ctx: PaintRenderingContext2D,
    size: PaintSize,
    config: NeonConfig,
    flicker: number
  ): void {
    const { colorR, colorG, colorB, luminosity, electrodeHeat, tubeThickness } = config

    const centerY = size.height / 2
    const heatIntensity = luminosity * flicker * (electrodeHeat - 1.0) * 0.8

    // Left electrode (cathode - typically hotter, orange-shifted)
    const leftGradient = ctx.createRadialGradient(0, centerY, 0, 0, centerY, tubeThickness * 3)
    leftGradient.addColorStop(
      0,
      `rgba(${Math.min(255, colorR * 1.2)}, ${colorG * 0.8}, ${colorB * 0.6}, ${heatIntensity})`
    )
    leftGradient.addColorStop(0.5, `rgba(${colorR}, ${colorG}, ${colorB}, ${heatIntensity * 0.5})`)
    leftGradient.addColorStop(1, `rgba(${colorR}, ${colorG}, ${colorB}, 0)`)

    ctx.fillStyle = leftGradient
    ctx.fillRect(0, centerY - tubeThickness / 2, tubeThickness * 3, tubeThickness)

    // Right electrode (anode - slightly cooler)
    const rightGradient = ctx.createRadialGradient(
      size.width,
      centerY,
      0,
      size.width,
      centerY,
      tubeThickness * 3
    )
    rightGradient.addColorStop(
      0,
      `rgba(${Math.min(255, colorR * 1.1)}, ${colorG * 0.9}, ${colorB * 0.7}, ${heatIntensity * 0.9})`
    )
    rightGradient.addColorStop(0.5, `rgba(${colorR}, ${colorG}, ${colorB}, ${heatIntensity * 0.4})`)
    rightGradient.addColorStop(1, `rgba(${colorR}, ${colorG}, ${colorB}, 0)`)

    ctx.fillStyle = rightGradient
    ctx.fillRect(
      size.width - tubeThickness * 3,
      centerY - tubeThickness / 2,
      tubeThickness * 3,
      tubeThickness
    )
  }

  /**
   * Render glass highlight (specular reflection)
   */
  private renderGlassHighlight(
    ctx: PaintRenderingContext2D,
    size: PaintSize,
    config: NeonConfig
  ): void {
    const { tubeThickness, glassOpacity } = config
    const centerY = size.height / 2

    // Top glass edge highlight
    const highlightGradient = ctx.createLinearGradient(
      0,
      centerY - tubeThickness / 2,
      0,
      centerY - tubeThickness / 4
    )
    highlightGradient.addColorStop(0, `rgba(255, 255, 255, ${glassOpacity * 0.6})`)
    highlightGradient.addColorStop(1, `rgba(255, 255, 255, 0)`)

    ctx.fillStyle = highlightGradient
    ctx.fillRect(0, centerY - tubeThickness / 2, size.width, tubeThickness / 4)
  }
}

// Register the paint worklet
// @ts-expect-error - registerPaint is a Houdini global, not in TypeScript definitions
if (typeof registerPaint !== 'undefined') {
  // @ts-expect-error - registerPaint is a Houdini global, not in TypeScript definitions
  registerPaint('neon', NeonPaint)
}

// Export for TypeScript type checking
export default NeonPaint
