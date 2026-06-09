<template>
  <footer>
    <div class="social-icons">
      <profile-view v-for="profile in profiles" :key="profile.identifier" :profile="profile" />
    </div>
    <div class="footer-content">
      <div class="copyright">
        {{ t('footer.text', { year: copyrightYear }) }}
        <a href="https://github.com/RISCfuture/tim.codes">{{ t('footer.linkText') }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProfileView from '@/components/sections/bio/ProfileView.vue'
import { useSocialStore } from '@/stores/social'

const { t, d } = useI18n()
const socialStore = useSocialStore()

const copyrightYear = d(new Date(), 'yearOnly')
const profiles = socialStore.profiles
</script>

<style scoped lang="scss">
@use '@/assets/styles/cards' as *;
@use '@/assets/styles/responsive' as *;

footer {
  display: grid;
  grid-template-areas:
    'social'
    'info';
  grid-template-rows: auto auto;

  @include footer-component;
  @include gap-scale(6px, 12px, 12px);
  @include padding-scale(8px 10px 10px, 16px 20px 16px, 16px 20px 16px);
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  grid-area: social;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  @include gap-scale-2x(10px);
}

.footer-content {
  grid-area: info;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;

  @include font-scale-fixed(10px, 12px, 12px);
}

.copyright {
  color: var(--footer-text);
}

@media only print {
  footer {
    display: none !important;
  }
}
</style>
