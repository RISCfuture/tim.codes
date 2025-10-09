<template>
  <div id="bio" data-cy="navigation-root-home">
    <div class="hero-section">
      <div class="career-grid">
        <career-view v-for="career in careers" :key="career.i18nKey" :career="career" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CareerView from '@/components/sections/bio/CareerView.vue'
import { useBioStore } from '@/stores/bio'

const bioStore = useBioStore()
const careers = bioStore.careers
</script>

<style lang="scss" scoped>
@use '@/assets/styles/breakpoints' as *;

#bio {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 15px;
  overflow-x: hidden;

  @include mq(ipad) {
    padding: 40px 20px;
  }
}

.hero-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.career-grid {
  width: 100%;
  max-width: 900px;
  display: grid;
  gap: 0;
}
</style>
