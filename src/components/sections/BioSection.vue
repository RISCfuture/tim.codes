<template>
  <div id="bio" data-cy="navigation-root-home">
    <table id="career-list">
      <career-view v-for="career in careers" :key="career.i18nKey" :career="career" />
    </table>
    <div id="social-icons">
      <profile-view v-for="profile in profiles" :key="profile.identifier" :profile="profile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CareerView from '@/components/sections/bio/CareerView.vue'
import ProfileView from '@/components/sections/bio/ProfileView.vue'
import { useBioStore } from '@/stores/bio'
import { useSocialStore } from '@/stores/social'

const bioStore = useBioStore()
const socialStore = useSocialStore()

const careers = bioStore.careers
const profiles = socialStore.profiles
</script>

<style lang="scss" scoped>
#bio {
  display: grid;
  grid-template:
    '.' '.'
    min-content 1fr / auto;
  gap: 1px;
  height: 100%;
}

#career-list {
  margin-right: auto;
  margin-left: auto;
}

#social-icons {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 30px 0;
}
</style>
