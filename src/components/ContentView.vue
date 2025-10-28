<template>
  <article aria-role="tabpanel">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </article>
</template>

<script setup lang="ts">
defineProps<{ transitionName: string }>()
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;
@use '@/assets/styles/vars' as *;

article {
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  padding: 0;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  overflow-x: hidden;

  @include mq(ipad) {
    padding: 0 20px;
    margin-top: 40px;
  }

  @include mq(large) {
    padding: 0 40px;
    margin-top: 60px;
  }
}
</style>
