<template>
  <div class="projects">
    <div class="featured">
      <featured-project
        v-for="project in featuredProjects"
        :key="project.identifier"
        :project="project"
      />
    </div>

    <div class="minor">
      <minor-project
        v-for="project in minorProjects"
        :key="project.identifier"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FeaturedProject from '@/components/sections/projects/FeaturedProject.vue'
import MinorProject from '@/components/sections/projects/MinorProject.vue'
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()

const featuredProjects = projectsStore.featuredProjects
const minorProjects = projectsStore.minorProjects
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;

.featured,
.minor {
  flex-flow: row wrap;
  justify-content: space-around;

  @include mq(iphone) {
    display: block;
  }

  @include mq(ipad) {
    display: block;
  }

  @include mq(large) {
    display: flex;
  }
}

.featured {
  margin-bottom: 50px;
}

.minor {
  justify-content: flex-start;
}
</style>

<style lang="scss">
@use 'sass:color';
@use 'sass:math';
@use '@/assets/styles/vars' as *;

$yellow: #f5b700;
$blue: #00a1e4;
$red: #dc0073;
$text-color: color.adjust($header-color-projects, $saturation: -75%, $lightness: -20%);
$height: 12px;
$padding: 3px;

article > .projects {
  h1,
  p {
    color: $text-color;
  }

  ul.tags {
    padding: 0;
    margin: 0;
    font-size: $height;
    line-height: $height;

    li {
      display: inline-block;
      padding: $padding;
      margin: 3px;
      font-family: Inter, sans-serif;
      font-weight: 300;
      color: #fff;
      text-transform: lowercase;
      letter-spacing: -0.5px;
      list-style: none;
      border-radius: math.div($height + $padding * 2, 2) - $padding;
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
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      padding: 0;
      margin: 6px;
      color: $blue;
      list-style: none;
      border-bottom: 1px solid $blue;
    }

    li,
    li a {
      font-family: Inter, sans-serif;
      font-weight: 300;
    }
  }
}
</style>
