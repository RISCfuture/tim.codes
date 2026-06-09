<template>
  <svg class="neon-filter-defs" aria-hidden="true" focusable="false" width="0" height="0">
    <defs>
      <!--
        One colour-agnostic neon filter, applied via `filter: url(#neon)`. It
        operates on SourceGraphic, so the glow inherits each element's own
        (theme-aware) colour — one filter serves every section and theme. The
        bloom models light spreading from the tube; the crisp source sits on top
        so the glyph/bar stays legible.
      -->
      <filter
        id="neon"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        color-interpolation-filters="sRGB"
      >
        <!-- Soft coloured bloom: two blurred copies of the source. -->
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.6" result="blurNear" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blurFar" />
        <feMerge result="bloom">
          <feMergeNode in="blurFar" />
          <feMergeNode in="blurNear" />
        </feMerge>

        <!-- Dim the bloom so light spills without washing out the tube. -->
        <feComponentTransfer in="bloom" result="softBloom">
          <feFuncA type="linear" slope="0.45" />
        </feComponentTransfer>

        <!-- Crisp tube (letters / bar) on top of its own glow. -->
        <feMerge>
          <feMergeNode in="softBloom" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
</template>

<style scoped lang="scss">
.neon-filter-defs {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
