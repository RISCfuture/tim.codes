<template>
  <slot v-if="!error" />
  <div v-else class="error-boundary" :data-theme="theme">
    <div class="error-content">
      <h1 class="error-title">Something went wrong</h1>
      <p class="error-message">An unexpected error occurred. Please try reloading the page.</p>
      <button class="reload-button" @click="reload">Reload Page</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const error = ref<Error | null>(null)
const theme = ref<'light' | 'dark'>('light')

// Sync theme with document
function syncTheme() {
  theme.value = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}
syncTheme()

// Catch errors from child components
onErrorCaptured((err) => {
  error.value = err
  return false // Stop propagation
})

function reload() {
  window.location.reload()
}
</script>

<style scoped>
/*
 * Inline styles for robustness - works even if external CSS fails to load.
 */
.error-boundary {
  --bg: #1a1a1a;
  --text: #e8e8e8;
  --accent-r: 255;
  --accent-g: 75;
  --accent-b: 43;
  --button-bg: #2a2a2a;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  font-family:
    Titilium,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  color: var(--text);
  background: var(--bg);
}

.error-boundary[data-theme='light'] {
  --bg: #fff;
  --text: #1a1a1a;
  --button-bg: #f0f0f0;
}

.error-content {
  max-width: 500px;
  text-align: center;
}

.error-title {
  margin: 0 0 16px;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: rgb(var(--accent-r) var(--accent-g) var(--accent-b));
  text-shadow:
    0 0 4px rgb(255 255 255 / 80%),
    0 0 8px rgb(var(--accent-r) var(--accent-g) var(--accent-b) / 90%),
    0 0 20px rgb(var(--accent-r) var(--accent-g) var(--accent-b) / 50%),
    0 0 40px rgb(var(--accent-r) var(--accent-g) var(--accent-b) / 25%);
}

.error-message {
  margin: 0 0 32px;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
}

.reload-button {
  padding: 12px 32px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  cursor: pointer;
  background: var(--button-bg);
  border: 2px solid rgb(var(--accent-r) var(--accent-g) var(--accent-b) / 60%);
  border-radius: 8px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.reload-button:hover {
  border-color: rgb(var(--accent-r) var(--accent-g) var(--accent-b));
  box-shadow: 0 0 12px rgb(var(--accent-r) var(--accent-g) var(--accent-b) / 30%);
  transform: translateY(-2px);
}

.reload-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgb(var(--accent-r) var(--accent-g) var(--accent-b) / 40%);
}

@media (prefers-reduced-motion: reduce) {
  .reload-button {
    transition: none;
  }
}
</style>
