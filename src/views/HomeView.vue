<template>
  <div class="container">
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <div role="status" aria-live="polite" aria-atomic="true" class="sr-only">
      {{ themeAnnouncement }}
    </div>

    <navigation-view @set-transition="transitionName = $event" />
    <div id="main-content">
      <content-view :transition-name="transitionName" />
      <footer-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import NavigationView from '@/components/NavigationView.vue'
import ContentView from '@/components/ContentView.vue'
import FooterView from '@/components/FooterView.vue'
import { useThemeStore } from '@/stores/theme'

const transitionName = ref('shift-right')
const themeStore = useThemeStore()

const themeAnnouncement = computed(() =>
  themeStore.theme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled'
)

// Announce theme changes
let announcementTimeout: ReturnType<typeof setTimeout> | null = null
watch(
  () => themeStore.theme,
  () => {
    // Clear previous timeout to prevent multiple announcements
    if (announcementTimeout) {
      clearTimeout(announcementTimeout)
    }
    // Short delay to ensure the announcement is made
    announcementTimeout = setTimeout(() => {
      announcementTimeout = null
    }, 100)
  }
)
</script>

<style lang="scss">
@use '@/assets/styles/breakpoints' as *;
@use '@/assets/styles/vars' as *;

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  z-index: 100;
  padding: 8px 16px;
  font-weight: 600;
  color: var(--header-text-color);
  background-color: var(--header-color-home);
  border-radius: 0 0 4px;
  transition: top 0.2s ease;

  &:focus {
    top: 0;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  border-width: 0;
  clip-path: inset(50%);
}

@media only print {
  html,
  body {
    width: 100%;
    height: auto;
    overflow: visible;
    color: #000;
    background: #fff;
  }

  .container {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
  }

  header {
    display: none;
  }

  footer {
    display: none;
  }

  .skip-link,
  .sr-only {
    display: none;
  }

  #main-content {
    overflow: visible;

    article {
      max-width: 100%;
      padding: 0;
      margin: 0;
      color: #000;
      background: #fff;
    }
  }

  // Reset all CSS custom properties to professional black and white
  * {
    color: #000 !important;
    text-shadow: none !important;
    background-clip: unset !important;
    box-shadow: none !important;
    filter: none !important;
    -webkit-text-fill-color: unset !important;
  }
}
</style>
