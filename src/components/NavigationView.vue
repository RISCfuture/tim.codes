<template>
  <header :class="route.name">
    <ul role="tablist">
      <li id="home-tab" role="tab">
        <a
          href="/"
          :aria-label="t('header.links.home')"
          :aria-selected="route.name === 'home'"
          @click.prevent="navigate({ name: 'bio' })"
        >
          <home-image id="home-image" />
        </a>
      </li>
      <li id="projects-tab" role="tab">
        <a
          href="/projects"
          :aria-label="t('header.links.projects')"
          :aria-selected="route.name === 'projects'"
          @click.prevent="navigate({ name: 'projects' })"
        >
          <projects-image id="projects-image" />
        </a>
      </li>
      <li id="resume-tab" role="tab">
        <a
          href="/resume"
          :aria-label="t('header.links.resume')"
          :aria-selected="route.name === 'resume'"
          @click.prevent="navigate({ name: 'resume' })"
        >
          <resume-image id="resume-image" />
        </a>
      </li>
    </ul>
    <h1>Tim Morgan</h1>
  </header>
</template>

<script setup lang="ts">
import HomeImage from '@/components/images/HomeImage.vue'
import ProjectsImage from '@/components/images/ProjectsImage.vue'
import ResumeImage from '@/components/images/ResumeImage.vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const emit = defineEmits(['set-transition'])

function navigate(destination: { name: string }) {
  if (destination.name === route.name) return

  let shiftRight = false
  if (route.name === 'bio') shiftRight = true
  else if (route.name === 'projects') shiftRight = destination.name === 'resume'

  emit('set-transition', shiftRight ? 'shift-right' : 'shift-left')
  router.push(destination)
}
</script>

<style scoped lang="scss">
@import 'mq-sass/stylesheets/mq-sass';
@import '@/assets/styles/vars';

header {
  color: $header-text-color;
  background-color: $header-color-home;
  transition: background-color 0.5s;

  h1 {
    @include mq(iphone) {
      padding: 10px 0;
      font-size: 18px;
    }

    @include mq(ipad) {
      padding: 10px 0;
      font-size: 24px;
    }

    @include mq(large) {
      padding: 20px 0;
      font-size: 48px;
    }

    margin: 0;
    font-weight: bold;
    text-align: center;
    background-color: rgb(0 0 0 / 20%);
  }

  ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: center;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin: 0;
      list-style-type: none;

      @include mq(iphone) {
        padding: 5px 10px;
      }

      @include mq(ipad) {
        padding: 10px 25px;
      }

      @include mq(large) {
        padding: 20px 50px;
      }

      a {
        cursor: pointer;
      }

      svg {
        @include mq(iphone) {
          width: 40px;
          height: auto;
        }

        @include mq(ipad) {
          width: 60px;
          height: auto;
        }

        @include mq(large) {
          width: 100px;
          height: auto;
        }

        transition: transform 0.4s cubic-bezier(0.54, 0.59, 0.52, 1.1);
      }
    }
  }

  &.bio {
    background-color: $header-color-home;

    #home-tab {
      background-color: rgb(0 0 0 / 20%);
    }

    #home-image {
      transform: scale(1.2);
    }
  }

  &.projects {
    background-color: $header-color-projects;

    #projects-tab {
      background-color: rgb(0 0 0 / 20%);
    }

    #projects-image {
      transform: scale(1.2);
    }
  }

  &.resume {
    background-color: $header-color-resume;

    #resume-tab {
      background-color: rgb(0 0 0 / 20%);
    }

    #resume-image {
      transform: scale(1.2);
    }
  }
}
</style>
