<template>
  <div class="container">
    <navigation-view @set-transition="transitionName = $event" />
    <content-view :transition-name="transitionName" />
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

@media only print {
  header {
    display: none;
  }

  footer {
    display: none;
  }
}
</style>
