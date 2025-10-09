<template>
  <header :class="route.name">
    <div class="header-content">
      <h1>Tim Morgan</h1>
      <ul role="tablist">
        <li id="home-tab" role="tab" :class="{ active: route.name === 'bio' }">
          <a
            href="/"
            :aria-label="t('header.links.home')"
            :aria-selected="route.name === 'home'"
            @click.prevent="navigate({ name: 'bio' })"
          >
            <home-image id="home-image" />
            <span class="tab-label">{{ t('header.links.home') }}</span>
          </a>
        </li>
        <li id="projects-tab" role="tab" :class="{ active: route.name === 'projects' }">
          <a
            href="/projects"
            :aria-label="t('header.links.projects')"
            :aria-selected="route.name === 'projects'"
            @click.prevent="navigate({ name: 'projects' })"
          >
            <projects-image id="projects-image" />
            <span class="tab-label">{{ t('header.links.projects') }}</span>
          </a>
        </li>
        <li id="resume-tab" role="tab" :class="{ active: route.name === 'resume' }">
          <a
            href="/resume"
            :aria-label="t('header.links.resume')"
            :aria-selected="route.name === 'resume'"
            @click.prevent="navigate({ name: 'resume' })"
          >
            <resume-image id="resume-image" />
            <span class="tab-label">{{ t('header.links.resume') }}</span>
          </a>
        </li>
      </ul>
    </div>
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
@use '@/assets/styles/breakpoints' as *;
@use '@/assets/styles/vars' as *;
@use '@/assets/styles/glow' as *;
@use '@/assets/styles/gradients' as *;
@use '@/assets/styles/interactions' as *;
@use '@/assets/styles/responsive' as *;
@use '@/assets/styles/accents' as *;

header {
  position: relative;
  color: var(--header-text-color);
  @include gradient-header-overlay;
  @include transition-slow(background, color);
  overflow: visible;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: var(--header-color-home-gradient);
    transition: opacity 0.6s ease;
    z-index: 0;
  }

  // Default glowing bottom border (overridden by themed versions)
  &::after {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 4px;
    content: '';
    background: rgba(255, 255, 255, 1);
    box-shadow:
      0 0 8px 4px rgba(255, 255, 255, 1),
      0 0 16px 6px rgba(255, 255, 255, 1),
      0 0 24px 8px rgba(255, 255, 255, 0.9),
      0 2px 30px 10px rgba(255, 255, 255, 0.4);
    transition:
      background 0.6s ease,
      box-shadow 0.6s ease;
    pointer-events: none;
    z-index: 2;
  }
}

.header-content {
  position: relative;
  z-index: 1;
  @include flex-column-to-row;
  align-items: center;
  @include padding-scale(12px 15px, 30px, 20px 60px);

  @include mq(large) {
    justify-content: space-between;
  }
}

h1 {
  font-family: Inter, sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  @include text-glow-title;
  @include transition-standard(text-shadow);
  @include margin-scale(0 0 10px 0, 0 0 20px 0, 0);
  @include font-scale-fixed(24px, 42px, 48px);
  @include letter-spacing-scale(1.5px, 2px, 2px);

  &:hover {
    @include text-glow-title-hover;
  }
}

ul {
  display: flex;
  align-items: flex-end;
  padding: 0;
  margin: 0;
  list-style: none;
  @include gap-scale(0, 0, 8px);
}

li {
  position: relative;
  @include glow-indicator(3px, rgba(255, 255, 255, 0.8));

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    @include transition-standard(color, transform);
    @include gap-scale(4px, 10px, 12px);
    @include padding-scale(8px 12px 10px, 16px 30px 20px, 20px 40px 24px);
  }

  svg {
    display: block;
    margin: 0 auto;
    @include filter-glow-basic;
    @include transition-standard(filter, transform);
    @include svg-size-scale(24px, 48px, 64px);
  }

  .tab-label {
    font-family: Inter, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0.5;
    @include transition-standard(opacity, text-shadow);
    @include font-scale-fixed(9px, 13px, 14px);
    @include letter-spacing-scale(0.8px, 1px, 1px);
  }

  &:hover a {
    color: rgba(255, 255, 255, 0.9);
  }

  &:hover svg {
    @include filter-glow-hover;
    transform: translateY(-2px);
  }

  &:hover .tab-label {
    opacity: 0.8;
  }

  // Active tab styling
  &.active a {
    color: #fff;
  }

  &.active .tab-label {
    opacity: 1;
  }
}

// Color-specific effects
header.bio {
  &::before {
    background: var(--header-color-home-gradient);
  }

  #home-tab.active svg {
    @include filter-glow-active(118, 169, 185);
  }

  #home-tab.active::after {
    background: rgba(118, 169, 185, 1);
    @include box-glow-md(118, 169, 185);
  }

  &::after {
    background: rgba(118, 169, 185, 1);
    @include border-glow-lg(118, 169, 185);
  }
}

header.projects {
  &::before {
    background: var(--header-color-projects-gradient);
  }

  #projects-tab.active svg {
    @include filter-glow-active(237, 68, 76);
  }

  #projects-tab.active::after {
    background: rgba(237, 68, 76, 1);
    @include box-glow-md(237, 68, 76);
  }

  &::after {
    background: rgba(237, 68, 76, 1);
    @include border-glow-lg(237, 68, 76);
  }
}

header.resume {
  &::before {
    background: var(--header-color-resume-gradient);
  }

  #resume-tab.active svg {
    @include filter-glow-active(122, 187, 128);
  }

  #resume-tab.active::after {
    background: rgba(122, 187, 128, 1);
    @include box-glow-md(122, 187, 128);
  }

  &::after {
    background: rgba(122, 187, 128, 1);
    @include border-glow-lg(122, 187, 128);
  }
}
</style>
