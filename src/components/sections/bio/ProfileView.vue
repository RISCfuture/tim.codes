<template>
  <div class="social-icon">
    <a :href="profile.website" target="_blank" rel="noopener noreferrer">
      <img :alt="alt" :src="iconURL" />
    </a>
  </div>
</template>

<script setup lang="ts">
import facebook from '@/assets/images/social/facebook.svg'
import github from '@/assets/images/social/github.svg'
import instagram from '@/assets/images/social/instagram.svg'
import linkedin from '@/assets/images/social/linkedin@3x.png'
import mastodon from '@/assets/images/social/mastodon.svg'
import quora from '@/assets/images/social/quora.svg'
import threads from '@/assets/images/social/threads.svg'
import twitch from '@/assets/images/social/twitch.svg'
import twitter from '@/assets/images/social/twitter.svg'
import youtube from '@/assets/images/social/youtube.svg'
import type { Profile } from '@/types/social'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const images: Record<string, string> = {
  facebook,
  github,
  instagram,
  linkedin,
  mastodon,
  quora,
  threads,
  twitch,
  twitter,
  youtube
}

const props = defineProps<{ profile: Profile }>()

const iconURL = computed(() => images[props.profile.identifier])
const alt = computed(() => t(`social.website.${props.profile.identifier}`))
</script>

<style lang="scss" scoped>
@use '@/assets/styles/breakpoints' as *;

img {
  width: 20px;
  height: auto;
  filter: grayscale(0.3);
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    filter 0.3s ease;

  @include mq(ipad) {
    width: 32px;
  }
}

.social-icon {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 0 4px;
  transition: transform 0.3s ease;

  @include mq(ipad) {
    padding: 0 20px;
  }

  &:hover {
    transform: translateY(-4px);
  }

  &:hover img {
    filter: grayscale(0) drop-shadow(0 0 8px rgb(255 255 255 / 60%));
    transform: scale(1.3) rotate(5deg);
    transform-origin: center;
  }

  &:active {
    transform: translateY(-2px) scale(0.95);
  }

  a:focus-visible {
    outline: none;

    img {
      border-radius: 4px;
      box-shadow: var(--focus-ring);
    }
  }
}
</style>
