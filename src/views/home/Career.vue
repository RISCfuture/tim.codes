<template>
  <tr>
    <td class="category">{{category}}</td>
    <td class="accomplishments">
      <ul>
        <li v-for="accomplishment in accomplishments" :key="accomplishment">{{accomplishment}}</li>
      </ul>
    </td>
  </tr>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  import * as Types from '@/store/types/bio'

  @Component
  export default class Career extends Vue {
    @Prop({ type: Object, required: true }) public career!: Types.Career

    get category(): string {
      return <string> this.$t(this.career.i18nKey)
    }

    get accomplishments(): string[] {
      return this.career.accomplishments.map(a => <string> this.$t(a.i18nKey))
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/vars';

  td {
    color: $alt-text-color;
    font-size: 150%;
    padding-bottom: 10px;
    vertical-align: top;
  }

  td.category {
    font-weight: bold;
    padding-right: 10px;
    text-align: right;
    white-space: nowrap;
  }

  td.accomplishments {
    text-align: left;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
</style>
