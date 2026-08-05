<template>
  <div class="not-found-view">
    <h1>{{ t('notFound.title') }}</h1>
    <p>{{ t('notFound.message') }}</p>
    <router-link to="/">{{ t('notFound.homeLink') }}</router-link>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.not-found-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  font-family: Titilium, sans-serif;
  color: var(--text-color);
  text-align: center;
  background: var(--bg-color);
}

h1 {
  margin-bottom: 16px;
}

p {
  max-width: 32rem;
  margin-bottom: 24px;
  opacity: 0.8;
}

a {
  color: var(--link-color, #00a1e4);
}
</style>
