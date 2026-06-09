<script setup lang="ts">
import { RouterView } from 'vue-router'
import ErrorBoundary from '@/components/ErrorBoundary.vue'
import NeonFilters from '@/components/NeonFilters.vue'
import { useLocalizedHead } from '@/composables/useLocalizedHead'

useLocalizedHead()
</script>

<template>
  <NeonFilters />
  <ErrorBoundary>
    <RouterView />
  </ErrorBoundary>
</template>
