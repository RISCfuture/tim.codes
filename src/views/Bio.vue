<template>
  <table data-cy="navigation-root-home">
    <career v-for="career in careers" :key="career.i18nKey" :career="career" />
  </table>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Getter } from 'vuex-class'

  import Career from './home/Career.vue'
  import * as Types from '@/store/types/bio'

  @Component({
    components: { Career }
  })
  export default class Bio extends Vue {
    @Getter public careers!: Types.Career[]
  }
</script>

<style scoped lang="scss">
  table {
    margin-left: auto;
    margin-right: auto;
    max-width: 480px;
  }
</style>
