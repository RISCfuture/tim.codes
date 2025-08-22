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
  margin-right: auto;
  margin-left: auto;

  @include mq(iphone) {
    max-width: 480px;
    margin-top: 20px;
  }

  @include mq(large) {
    max-width: 960px;
    margin-top: 60px;
  }
}
</style>
