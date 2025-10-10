<template>
  <div
    ref="elementRef"
    class="career-callout"
    :class="{ visible: isVisible, [`theme-${themeColor}`]: true }"
  >
    <div class="category-badge">
      {{ category }}
    </div>
    <div class="accomplishments">
      <p v-if="career.inline" class="inline-text">
        {{ inlineAccomplishments }}
      </p>
      <ul v-else class="accomplishment-list">
        <li v-for="accomplishment in accomplishments" :key="accomplishment">
          {{ accomplishment }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Career } from '@/types/bio'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { list } from '@/i18n/functions'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useI18n()

const props = defineProps<{ career: Career }>()

const category = computed(() => t(props.career.i18nKey))
const accomplishments = computed(() => props.career.accomplishments.map((a) => t(a.i18nKey)))
const inlineAccomplishments = computed(() => list(accomplishments.value, 'standard-narrow'))

// Rotate through theme colors based on career type
const themeColor = computed(() => {
  switch (props.career.i18nKey) {
    case 'bio.occupation.dev':
      return 'dev'
    case 'bio.occupation.ATP':
    case 'bio.occupation.CPL':
      return 'pilot'
    case 'bio.occupation.flightInstructor':
    case 'bio.occupation.groundInstructor':
      return 'instructor'
    default:
      return 'dev'
  }
})

const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 })
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;
@use '@/assets/styles/glow' as *;
@use '@/assets/styles/gradients' as *;
@use '@/assets/styles/interactions' as *;
@use '@/assets/styles/responsive' as *;
@use '@/assets/styles/accents' as *;
@use '@/assets/styles/cards' as *;
@use '@/assets/styles/neon' as *;

.career-callout {
  position: relative;
  overflow-wrap: break-word;
  word-wrap: break-word;
  @include grid-1-to-2(240px, 300px, 50px);
  @include scroll-animation-fade-up;
  @include padding-scale(20px 0, 35px 0, 35px 0);
  @include transition-bounce(opacity, transform);

  @include mq(ipad) {
    gap: 50px;
    transform: translateX(-30px);

    &.visible {
      transform: translateX(0);
    }
  }

  @include mq(large) {
    grid-template-columns: minmax(260px, 320px) 1fr;
    gap: 60px;
  }

  &:not(:last-child) {
    @include divider-line(2px, bottom);
  }

  // Color theme variables - Gas-based neon colors
  &.theme-dev {
    --theme-color: #93b0ff; // Argon-Mercury (435.8nm)
    --theme-color-light: #b0c8ff;
    --theme-gradient: linear-gradient(135deg, #93b0ff 0%, #7a96e6 100%);
    --theme-glow: var(--neon-gas-argon-blue);
  }

  &.theme-pilot {
    --theme-color: #ff4b2b; // True Neon (640.2nm)
    --theme-color-light: #ff6e52;
    --theme-gradient: linear-gradient(135deg, #ff4b2b 0%, #e63e23 100%);
    --theme-glow: var(--neon-gas-true-neon);
  }

  &.theme-instructor {
    --theme-color: #c8ffd2; // Krypton (557.7nm)
    --theme-color-light: #deffea;
    --theme-gradient: linear-gradient(135deg, #c8ffd2 0%, #a8e6b3 100%);
    --theme-glow: var(--neon-gas-krypton);
  }
}

.category-badge {
  position: relative;
  line-height: 1.1;
  @include badge-component;
  @include padding-scale(0 0 0 15px, 0 30px 0 0, 0 30px 0 0);
  @include font-scale-clamp(20px, 28px, 3vw, 38px);
  @include letter-spacing-scale(-0.5px, -1px, -1px);
  @include text-align-responsive(left, right, right);

  // Use CSS custom properties for dynamic neon color based on theme
  color: var(--theme-color);

  @include mq(ipad) {
    text-shadow:
      0 0 15px rgba(var(--theme-glow), 0.4),
      0 0 30px rgba(var(--theme-glow), 0.2),
      0 0 45px rgba(var(--theme-glow), 0.1);
  }

  @include mq(large) {
    font-size: clamp(32px, 3vw, 42px);
  }

  .career-callout:hover & {
    text-shadow:
      0 0 20px rgba(var(--theme-glow), 0.6),
      0 0 40px rgba(var(--theme-glow), 0.3),
      0 0 60px rgba(var(--theme-glow), 0.15);
  }

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 100%;
    content: '';
    background: var(--theme-gradient);
    border-radius: 4px;
    @include accent-glow-themed-sm;
    @include transition-bounce(height, box-shadow);

    @include mq(ipad) {
      left: auto;
      right: 0;
      height: 70%;
    }
  }

  .career-callout:hover &::before {
    height: 100%;
    @include accent-glow-themed-md;
  }
}

.accomplishments {
  display: flex;
  align-items: center;
  padding: 0;

  @include mq(ipad) {
    padding: 8px 0;
  }
}

.inline-text {
  margin: 0;
  font-weight: 400;
  color: var(--text-color);
  @include transition-standard(color, text-shadow);
  @include font-scale-clamp(15px, 22px, 2.5vw, 32px);
  @include line-height-scale(1.4, 1.5, 1.5);

  @include mq(large) {
    font-size: clamp(24px, 2.5vw, 34px);
  }

  .career-callout:hover & {
    text-shadow:
      0 0 10px rgba(var(--theme-glow), 0.3),
      0 0 20px rgba(var(--theme-glow), 0.15);
  }
}

.accomplishment-list {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;

  li {
    font-weight: 400;
    @include list-item-card;
    @include padding-scale(6px 12px, 10px 18px, 10px 18px);
    @include margin-scale(0 0 6px 0, 0 0 10px 0, 0 0 10px 0);
    @include font-scale-clamp(15px, 22px, 2.5vw, 32px);
    @include line-height-scale(1.4, 1.5, 1.5);
    @include border-radius-scale(6px, 8px, 8px);

    @include mq(large) {
      font-size: clamp(24px, 2.5vw, 34px);
    }
  }
}
</style>
