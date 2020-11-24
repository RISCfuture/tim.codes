<template>
  <header :class="$route.name">
    <ul>
      <li>
        <a :alt="$t('header.links.home')"
           @click="navigate({name: 'home'})"
           data-cy="menu-home">
          <home-image id="home-image" />
        </a>
      </li>
      <li>
        <a :alt="$t('header.links.projects')"
           @click="navigate({name: 'projects'})"
           data-cy="menu-projects">
          <projects-image id="projects-image" />
        </a>
      </li>
      <li>
        <a :alt="$t('header.links.resume')"
           @click="navigate({name: 'resume'})"
           data-cy="menu-resume">
          <resume-image id="resume-image" />
        </a>
      </li>
    </ul>
    <h1>Tim Morgan</h1>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import { default as HomeImage } from './images/Home.vue'
  import { default as ProjectsImage } from './images/Projects.vue'
  import { default as ResumeImage } from './images/Resume.vue'

  @Component({
    components: { HomeImage, ProjectsImage, ResumeImage }
  })
  export default class Navigation extends Vue {
    navigate(destination: { name: string }): void {
      if (destination.name === this.$route.name) return

      let shiftRight = false
      if (this.$route.name === 'home') shiftRight = true
      else if (this.$route.name === 'projects') shiftRight = (destination.name === 'resume')

      this.$emit('set-transition', shiftRight ? 'shift-right' : 'shift-left')
      this.$router.push(destination)
    }
  }
</script>

<style scoped lang="scss">
  @import '~mq-sass/stylesheets/mq-sass';
  @import '~@/assets/styles/vars';

  header {
    background-color: $header-color-home;
    color: $header-text-color;
    transition: background-color 0.5s;

    &.home {
      background-color: $header-color-home;
    }

    &.projects {
      background-color: $header-color-projects;
    }

    &.resume {
      background-color: $header-color-resume;
    }

    h1 {
      font-weight: bold;
      text-align: center;

      @include mq(iphone) {
        font-size: 18px;
      }
      @include mq(ipad) {
        font-size: 24px;
      }
      @include mq(large) {
        font-size: 48px;
      }
    }

    ul {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;

      li {
        list-style-type: none;
        padding: 0;
        @include mq(iphone) {
          margin: 0 10px;
        }
        @include mq(ipad) {
          margin: 0 25px;
        }
        @include mq(large) {
          margin: 0 50px;
        }

        a {
          cursor: pointer;
        }

        svg {

          transition: transform 0.4s cubic-bezier(0.54, 0.59, 0.52, 1.1);
          @include mq(iphone) {
            height: auto;
            width: 40px;
          }
          @include mq(ipad) {
            height: auto;
            width: 60px;
          }
          @include mq(large) {
            height: auto;
            width: 100px;
          }
        }
      }
    }

    &.home #home-image {
      transform: scale(1.2);
    }

    &.projects #projects-image {
      transform: scale(1.2);
    }

    &.resume #resume-image {
      transform: scale(1.2);
    }
  }
</style>
