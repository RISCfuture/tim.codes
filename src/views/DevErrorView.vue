<template>
  <div class="dev-error-view">
    <h1>Error Boundary Preview</h1>
    <p>Click to trigger an error and see the error boundary:</p>
    <button @click="triggerError">Trigger Error</button>
    <div v-if="shouldThrow">{{ throwError() }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const shouldThrow = ref(false)

function throwError(): never {
  throw new Error('Intentional error for testing')
}

function triggerError() {
  shouldThrow.value = true
}
</script>

<style scoped>
.dev-error-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  font-family: Titilium, sans-serif;
  color: var(--text-color);
  background: var(--bg-color);
}

h1 {
  margin-bottom: 16px;
}

p {
  margin-bottom: 24px;
  opacity: 0.8;
}

button {
  padding: 12px 24px;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-color);
  cursor: pointer;
  background: var(--bg-color-secondary, #f0f0f0);
  border: 2px solid var(--border-color, #ccc);
  border-radius: 8px;
}

button:hover {
  border-color: var(--link-color, #00a1e4);
}
</style>
