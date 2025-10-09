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
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;

  @include mq(ipad) {
    margin-top: 40px;
    padding: 0 20px;
  }

  @include mq(large) {
    margin-top: 60px;
    padding: 0 40px;
  }
}
</style>
