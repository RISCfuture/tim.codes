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
@import 'mq-sass/stylesheets/mq-sass';
@import '@/assets/styles/vars';

article {
  @include mq(iphone) {
    max-width: 480px;
    margin-top: 20px;
  }

  @include mq(large) {
    max-width: 960px;
    margin-top: 60px;
  }

  margin-right: auto;
  margin-left: auto;
}
</style>
