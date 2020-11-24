<template>
  <div class="container">
    <navigation @set-transition="transitionName = $event" />
    <content-view :transition-name="transitionName" />
    <footer-view />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Navigation from '@/views/home/Navigation.vue'
  import Content from '@/views/home/Content.vue'
  import Footer from '@/views/home/Footer.vue'

  @Component({
    components: { FooterView: Footer, ContentView: Content, Navigation }
  })
  export default class Home extends Vue {
    transitionName = 'shift-right'
  }
</script>

<style lang="scss">
  @import '~mq-sass/stylesheets/mq-sass';
  @import '~@/assets/styles/vars';

  @media only print {
    header {
      display: none;
    }

    footer {
      display: none;
    }
  }
</style>
