<template>
  <div class="projects">
    <section
      v-for="section in projectsStore.sections"
      :key="section.category"
      class="project-section"
      :class="kebabCase(section.category)"
    >
      <h2 class="section-header">{{ t(`projects.sections.${section.category}`) }}</h2>
      <div class="masonry">
        <project-card
          v-for="project in section.projects"
          :key="project.identifier"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { kebabCase } from 'lodash-es'
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/sections/projects/ProjectCard.vue'
import { useProjectsStore } from '@/stores/projects'

const { t } = useI18n()
const projectsStore = useProjectsStore()
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;

.projects {
  width: 100%;
}

.section-header {
  position: relative;
  margin-bottom: 45px;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1px;
  background-clip: text;
  transition: color 0.3s ease;
  -webkit-text-fill-color: transparent;

  @include mq(iphone) {
    margin-bottom: 35px;
    font-size: 18px;
    letter-spacing: -0.5px;
  }

  &::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    content: '';
    border-radius: 2px;
  }
}

.aviation-apps {
  --section-accent-rgb: 0 161 228;
  --section-gradient: var(--projects-aviation-apps-gradient);
}

.apps {
  --section-accent-rgb: 156 39 176;
  --section-gradient: var(--projects-apps-gradient);
}

.aviation-libraries {
  --section-accent-rgb: 0 137 123;
  --section-gradient: var(--projects-aviation-libraries-gradient);
}

.developer-tools {
  --section-accent-rgb: 220 0 115;
  --section-gradient: var(--projects-developer-tools-gradient);
}

.section-header {
  background-image: var(--section-gradient);
  filter: drop-shadow(0 0 15px rgb(var(--section-accent-rgb) / 30%))
    drop-shadow(0 0 30px rgb(var(--section-accent-rgb) / 15%));

  &::after {
    background: var(--section-gradient);
    box-shadow:
      0 0 15px rgb(var(--section-accent-rgb) / 40%),
      0 0 30px rgb(var(--section-accent-rgb) / 20%);
  }
}

.project-section {
  margin-bottom: 60px;

  @include mq(iphone) {
    margin-bottom: 40px;
  }
}

.masonry {
  --masonry-gap: 20px;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 4px;
  grid-auto-flow: row dense;
  column-gap: var(--masonry-gap);
  align-items: start;

  @include mq(ipad) {
    --masonry-gap: 24px;

    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include mq(large) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @supports (display: grid-lanes) {
    display: grid-lanes;
    grid-auto-rows: auto;
    gap: var(--masonry-gap);
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
