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
      <theme-toggle />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ThemeToggle from '@/components/ThemeToggle.vue'
import ProfileView from '@/components/sections/bio/ProfileView.vue'
import { useSocialStore } from '@/stores/social'

const { t, d } = useI18n()
const socialStore = useSocialStore()

const copyrightYear = d(new Date(), 'yearOnly')
const profiles = socialStore.profiles
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;
@use '@/assets/styles/cards' as *;
@use '@/assets/styles/responsive' as *;

footer {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    'social'
    'info';
  @include footer-component;
  @include gap-scale(8px, 30px, 30px);
  @include padding-scale(10px 10px 10px, 40px 20px 20px, 40px 20px 20px);
}

.social-icons {
  grid-area: social;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  @include gap-scale-2x(10px);
}

.footer-content {
  grid-area: info;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  @include gap-scale(8px, 20px, 20px);
  @include font-scale-fixed(10px, 12px, 12px);

  @include mq(iphone) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
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
