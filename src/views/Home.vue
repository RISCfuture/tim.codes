<template>
  <div class="container">
    <header :class="$route.name">
      <ul>
        <li>
          <a data-cy="menu-home"
             @click="navigate({name: 'home'})"
             :alt="$t('header.links.home')">
            <home-image id="home-image" />
          </a>
        </li>
        <li>
          <a data-cy="menu-projects"
             @click="navigate({name: 'projects'})"
             :alt="$t('header.links.projects')">
            <projects-image id="projects-image" />
          </a>
        </li>
        <li>
          <a data-cy="menu-resume"
             @click="navigate({name: 'resume'})"
             :alt="$t('header.links.resume')">
            <resume-image id="resume-image" />
          </a>
        </li>
      </ul>
      <h1>Tim Morgan</h1>
    </header>
    <article>
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
    </article>
    <footer>
      {{$t('footer.text', {year: copyrightYear})}}
      <a href="https://github.com/RISCfuture/riscfuture.github.io">{{$t('footer.link_text')}}</a>
    </footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import moment from 'moment'

  import { default as HomeImage } from './home/images/Home.vue'
  import { default as ProjectsImage } from './home/images/Projects.vue'
  import { default as ResumeImage } from './home/images/Resume.vue'

  @Component({
    components: { HomeImage, ProjectsImage, ResumeImage }
  })
  export default class Home extends Vue {
    copyrightYear = moment().format('YYYY')

    transitionName = 'shift-right'

    navigate(destination: { name: string }): void {
      let shiftRight = false
      if (this.$route.name === 'home') shiftRight = true
      else if (this.$route.name === 'projects') shiftRight = (destination.name === 'resume')

      this.transitionName = (shiftRight ? 'shift-right' : 'shift-left')
      this.$router.push(destination)
    }
  }
</script>

<style lang="scss">
  @import '~mq-sass/stylesheets/mq-sass';
  @import '~@/assets/vars';

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

  article {
    margin-left: auto;
    margin-right: auto;
    @include mq(iphone) {
      margin-top: 20px;
    }
    @include mq(large) {
      margin-top: 60px;
    }

    @include mq(iphone) {
      max-width: 480px;
    }
    @include mq(large) {
      max-width: 960px;
    }
  }

  footer {
    font-size: 12px;
    padding: 5px 10px;
  }

  .shift-right-enter-active,
  .shift-right-leave-active,
  .shift-left-enter-active,
  .shift-left-leave-active {
    transition: transform 0.25s;
  }

  .shift-right-enter-active,
  .shift-left-enter-active {
    transition-timing-function: ease-out;
  }

  .shift-right-leave-active,
  .shift-left-leave-active {
    transition-timing-function: ease-in;
  }

  .shift-right-enter {
    transform: translateX(150%);
  }

  .shift-right-leave-to {
    transform: translateX(-150%);
  }

  .shift-left-enter {
    transform: translateX(-150%);
  }

  .shift-left-leave-to {
    transform: translateX(150%);
  }

  @media only print {
    header {
      display: none;
    }

    footer {
      display: none;
    }
  }
</style>
