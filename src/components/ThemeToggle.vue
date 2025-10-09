<template>
  <button
    class="theme-toggle"
    :aria-label="t('theme.toggle')"
    :aria-pressed="isDark"
    @click="toggleTheme"
  >
    <transition name="icon-fade" mode="out-in">
      <svg
        v-if="isDark"
        key="moon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg
        v-else
        key="sun"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    </transition>
  </button>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const themeStore = useThemeStore()
const { t } = useI18n()

const isDark = computed(() => themeStore.theme === 'dark')

function toggleTheme() {
  themeStore.toggleTheme()
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/interactions' as *;
@use '@/assets/styles/accents' as *;

.theme-toggle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;
  background: transparent;
  border: 2px solid currentcolor;
  border-radius: 50%;
  @include transition-fast(transform, background-color, border-color);

  &:hover {
    background-color: var(--header-overlay-hover);
    @include hover-scale(1.1);
    box-shadow: 0 0 12px 2px rgba(255, 255, 255, 0.3);
  }

  @include focus-ring-enhanced(255, 255, 255);

  &:active {
    @include active-scale-down;
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;
    color: var(--header-text-color);
  }
}

.icon-fade {
  @include icon-fade-transition;
}
</style>
