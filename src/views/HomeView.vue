<template>
  <div class="container">
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <navigation-view @set-transition="transitionName = $event" />
    <main id="main-content">
      <content-view :transition-name="transitionName" />
    </main>
    <footer-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationView from '@/components/NavigationView.vue'
import ContentView from '@/components/ContentView.vue'
import FooterView from '@/components/FooterView.vue'

const transitionName = ref('shift-right')
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

  .skip-link {
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
