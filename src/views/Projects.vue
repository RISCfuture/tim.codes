<template>
  <div class="projects">
    <div class="featured">
      <featured-project v-for="project in featuredProjects"
                        :key="project.identifier"
                        :project="project" />
    </div>

    <div class="minor">
      <minor-project v-for="project in minorProjects"
                     :key="project.identifier"
                     :project="project" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Getter } from 'vuex-class'
  import Component from 'vue-class-component'

  import FeaturedProject from './projects/FeaturedProject.vue'
  import MinorProject from './projects/MinorProject.vue'
  import { Project } from '@/store/types/projects'

  @Component({
    components: { FeaturedProject, MinorProject }
  })
  export default class Projects extends Vue {
    @Getter public featuredProjects!: Project[]

    @Getter public minorProjects!: Project[]
  }
</script>

<style scoped lang="scss">
  @import '~mq-sass/stylesheets/mq-sass';

  .featured,
  .minor {
    flex-flow: row wrap;
    justify-content: space-evenly;

    @include mq(iphone) { display: block; }
    @include mq(ipad) { display: block; }
    @include mq(large) { display: flex; }
  }

  .featured {
    margin-bottom: 50px;
  }

  .minor {
    justify-content: flex-start;
  }
</style>

<style lang="scss">
  @import '~@/assets/vars';

  $yellow: #f5b700;
  $blue: #00a1e4;
  $red: #dc0073;
  $text-color: darken(desaturate($header-color-projects, 75%), 20%);

  $height: 12px;
  $padding: 3px;

  article > .projects {
    h1,
    p {
      color: $text-color;
    }

    ul.tags {
      font-size: $height;
      line-height: $height;
      margin: 0;
      padding: 0;

      li {
        border-radius: ($height + $padding*2)/2 - $padding;
        color: #fff;
        display: inline-block;
        font-family: Inter, sans-serif;
        font-weight: 300;
        letter-spacing: -0.5px;
        list-style: none;
        margin: 3px;
        padding: $padding;
        text-transform: lowercase;
      }

      li.type {
        background-color: $red;
      }

      li.language {
        background-color: $yellow;
      }

      li.library {
        background-color: $blue;
      }
    }

    ul.websites {
      margin: 0;
      padding: 0;

      li {
        border-bottom: 1px solid $blue;

        color: $blue;
        display: inline-block;

        list-style: none;
        margin: 6px;
        padding: 0;
      }

      li,
      li a {
        font-family: Inter, sans-serif;
        font-weight: 300;
      }
    }
  }
</style>
