<template>
  <div class="social-icon">
    <a :href="profile.website" target="_blank">
      <img :alt="alt" :src="iconURL" />
    </a>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import * as Types from '@/store/types/social'

  import facebook from '@/assets/images/social/facebook.svg'
  import github from '@/assets/images/social/github.svg'
  import instagram from '@/assets/images/social/instagram.svg'
  import linkedin from '@/assets/images/social/linkedin@3x.png'
  import quora from '@/assets/images/social/quora.svg'
  import twitch from '@/assets/images/social/twitch.svg'
  import twitter from '@/assets/images/social/twitter.svg'
  import youtube from '@/assets/images/social/youtube.svg'

  const images: Record<string, string> = {
    facebook,
    github,
    instagram,
    linkedin,
    quora,
    twitch,
    twitter,
    youtube
  }

  @Component
  export default class Profile extends Vue {
    @Prop({ type: Object, required: true }) profile!: Types.Profile

    get iconURL(): string {
      return images[this.profile.identifier]
    }

    get alt(): string {
      return <string> this.$t(`social.website.${this.profile.identifier}`)
    }
  }
</script>

<style lang="scss" scoped>
  .social-icon {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 0 20px;
    transition: padding 0.25s;

    &:hover {
      padding: 0 30px;
    }

    &:hover img {
      transform: scale(1.5);
      transform-origin: center;
    }

    img {
      height: auto;
      transition: transform 0.25s;
      width: 32px;
    }
  }
</style>
