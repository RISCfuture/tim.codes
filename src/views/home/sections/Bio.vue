<template>
  <div id="bio" data-cy="navigation-root-home">
    <table id="career-list">
      <career :career="career" :key="career.i18nKey" v-for="career in careers" />
    </table>
    <div id="social-icons">
      <profile v-for="profile in profiles" :profile="profile" :key="profile.identifier" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Getter } from 'vuex-class'

  import Career from './bio/Career.vue'
  import * as Types from '@/store/types/bio'
  import ProfileView from '@/views/home/sections/bio/Profile.vue'
  import { Profile } from '@/store/types/social'

  @Component({
    components: { Profile: ProfileView, Career }
  })
  export default class Bio extends Vue {
    @Getter public careers!: Types.Career[]

    @Getter public profiles!: Profile[]
  }
</script>

<style lang="scss" scoped>
  #bio {
    display: grid;
    gap: 1px 1px;
    grid-template:
      "." "."
      min-content 1fr / auto;
    height: 100%;
  }

  #career-list {
    margin-left: auto;
    margin-right: auto;
    max-width: 480px;
  }

  #social-icons {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
</style>
