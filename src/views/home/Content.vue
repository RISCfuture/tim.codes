<template>
  <article>
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
  </article>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component
  export default class Content extends Vue {
    @Prop({ type: String, required: true }) transitionName!: string
  }
</script>

<style scoped lang="scss">
  @import '~mq-sass/stylesheets/mq-sass';
  @import '~@/assets/styles/vars';

  article {
    margin-left: auto;
    margin-right: auto;
    @include mq(iphone) {
      margin-top: 20px;
    }
    @include mq(large) {
      margin-top: 60px;
    }

    @include mq(iphone) {
      max-width: 480px;
    }
    @include mq(large) {
      max-width: 960px;
    }
  }
</style>
