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

  // Color theme variables
  &.theme-dev {
    --theme-color: #76a9b9;
    --theme-color-light: #9ac5d1;
    --theme-gradient: linear-gradient(135deg, #76a9b9 0%, #5a8a9a 100%);
    --theme-glow: 118, 169, 185;
  }

  &.theme-pilot {
    --theme-color: #ed444c;
    --theme-color-light: #f27078;
    --theme-gradient: linear-gradient(135deg, #ed444c 0%, #c93640 100%);
    --theme-glow: 237, 68, 76;
  }

  &.theme-instructor {
    --theme-color: #7abb80;
    --theme-color-light: #9cd0a1;
    --theme-gradient: linear-gradient(135deg, #7abb80 0%, #5fa066 100%);
    --theme-glow: 122, 187, 128;
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

  @include mq(ipad) {
    @include text-glow-themed-md;
  }

  @include mq(large) {
    font-size: clamp(32px, 3vw, 42px);
  }

  .career-callout:hover & {
    @include text-glow-themed-lg;
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
    @include text-glow-themed-sm;
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
