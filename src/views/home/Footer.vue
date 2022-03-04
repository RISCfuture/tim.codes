<template>
  <footer>
    {{ $t('footer.text', {year: copyrightYear}) }}
    <a href="https://github.com/RISCfuture/tim.codes">{{ $t('footer.link_text') }}</a>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Footer extends Vue {
    get copyrightYear(): string { return this.$d(new Date(), 'yearOnly') }
  }
</script>

<style scoped lang="scss">
  footer {
    font-size: 12px;
    padding: 5px 10px;
    text-align: center;
  }
</style>
