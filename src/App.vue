<script setup lang="ts">
import { RouterView } from 'vue-router'
import ErrorBoundary from '@/components/ErrorBoundary.vue'
import NeonFilters from '@/components/NeonFilters.vue'
</script>

<template>
  <NeonFilters />
  <ErrorBoundary>
    <RouterView />
  </ErrorBoundary>
</template>
