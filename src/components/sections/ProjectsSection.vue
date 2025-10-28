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

.projects {
  width: 100%;
}

.featured,
.minor {
  display: grid;
  grid-auto-rows: auto;
  gap: 30px;
  margin-bottom: 60px;

  @include mq(iphone) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  @include mq(ipad) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @include mq(large) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

.minor {
  @include mq(large) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

<style lang="scss">
@use 'sass:math';
@use '@/assets/styles/breakpoints' as *;

$height: 12px;
$padding: 3px;

article > .projects {
  h1,
  p {
    color: var(--text-color);
    transition: color 0.3s ease;
  }

  ul.tags li {
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
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &.type {
      background-color: var(--tag-type-bg);
    }

    &.language {
      background-color: var(--tag-language-bg);
    }

    &.library {
      background-color: var(--tag-library-bg);
    }
  }

  ul.websites li,
  ul.websites li a {
    font-family: Inter, sans-serif;
    font-weight: 300;
  }

  ul.websites li {
    display: inline-block;
    padding: 0;
    margin: 6px;
    color: var(--link-color);
    list-style: none;
    border-bottom: 1px solid var(--link-color);
    transition:
      color 0.2s ease,
      border-color 0.2s ease,
      transform 0.2s ease;
  }

  ul.achievements li {
    margin: 8px 0;
    font-family: Inter, sans-serif;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.5;
    color: var(--text-color);
    list-style: none;
    transition: color 0.3s ease;

    &::before {
      margin-right: 8px;
      font-weight: bold;
      color: var(--header-color-projects);
      text-shadow:
        0 0 8px rgb(237 68 76 / 40%),
        0 0 16px rgb(237 68 76 / 20%);
      content: '▸';
    }
  }

  ul.tags {
    padding: 0;
    margin: 0;
    font-size: $height;
    line-height: $height;

    li:hover {
      box-shadow:
        0 2px 4px rgb(0 0 0 / 20%),
        0 0 8px 1px rgb(255 255 255 / 20%);
      transform: translateY(-2px);
    }
  }

  ul.websites {
    padding: 0;
    margin: 0;

    li:hover {
      color: var(--link-hover-color);
      text-shadow: 0 0 8px rgb(237 68 76 / 40%);
      border-color: var(--link-hover-color);
      border-bottom-width: 2px;
      box-shadow: 0 2px 6px rgb(237 68 76 / 30%);
      transform: translateX(2px);
    }
  }

  ul.achievements {
    padding: 0;
    margin: 15px 0 0;
  }
}
</style>
