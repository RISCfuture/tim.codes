<template>
  <header :class="String(route.name)">
    <div class="header-content">
      <h1 data-testid="site-title">Tim Morgan</h1>
      <nav :aria-label="t('header.nav')">
        <ul role="tablist">
          <li id="home-tab" role="tab" :class="{ active: route.name === 'bio' }">
            <a
              href="/"
              :aria-label="t('header.links.home')"
              :aria-selected="route.name === 'bio'"
              @click.prevent="navigate({ name: 'bio' })"
            >
              <home-image id="home-image" />
              <span class="tab-label" data-testid="nav-tab-label">{{ t('header.links.home') }}</span>
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
              <span class="tab-label" data-testid="nav-tab-label">{{ t('header.links.projects') }}</span>
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
              <span class="tab-label" data-testid="nav-tab-label">{{ t('header.links.resume') }}</span>
            </a>
          </li>
        </ul>
      </nav>
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
  void router.push(destination)
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
@use '@/assets/styles/neon' as *;

header {
  position: relative;
  overflow: visible;
  color: var(--header-text-color);

  @include gradient-header-overlay;
  @include transition-slow(background, color);
  @include neon-flicker;

  // Bio background layer
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: var(--header-color-home-gradient);
    opacity: 1;
    transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  // Projects background layer
  .header-content::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100%;
    margin-left: calc(-1 * (100vw - 100%) / 2);
    content: '';
    background: var(--header-color-projects-gradient);
    opacity: 0;
    transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  // Resume background layer
  .header-content::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100%;
    margin-left: calc(-1 * (100vw - 100%) / 2);
    content: '';
    background: var(--header-color-resume-gradient);
    opacity: 0;
    transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  // Glowing neon tube border (colour set per section below).
  &::after {
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 4px;
    pointer-events: none;
    content: '';
    background: #fff;
    opacity: var(--neon-intensity);
    transition: background 1.2s cubic-bezier(0.4, 0, 0.2, 1);
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
  opacity: var(--neon-intensity);

  @include neon-text(#fff);
  @include margin-scale(0 0 10px 0, 0 0 20px 0, 0);
  @include font-scale-fixed(24px, 42px, 48px);
  @include letter-spacing-scale(1.5px, 2px, 2px);
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
    color: rgb(255 255 255 / 60%);
    text-decoration: none;
    cursor: pointer;

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
    color: rgb(255 255 255 / 85%);
    text-transform: uppercase;

    @include transition-standard(color, text-shadow);
    @include font-scale-fixed(9px, 13px, 14px);
    @include letter-spacing-scale(0.8px, 1px, 1px);
  }

  &:hover a {
    color: rgb(255 255 255 / 90%);
  }

  &:hover svg {
    @include filter-glow-hover;

    transform: translateY(-2px);
  }

  &:hover .tab-label {
    color: #fff;
  }

  // Active tab styling
  &.active a {
    color: #fff;
  }

  &.active .tab-label {
    color: #fff;
  }
}

// Color-specific effects - Gas-based neon colors
header.bio {
  background-color: var(--neon-bio-bg-1);

  &::before {
    opacity: 1;
  }

  .header-content::before,
  .header-content::after {
    opacity: 0;
  }

  #home-tab.active svg {
    filter: drop-shadow(0 2px 4px rgb(0 0 0 / 30%)) drop-shadow(0 0 12px var(--neon-bio-tube))
      drop-shadow(0 0 24px var(--neon-bio-tube));
  }

  #home-tab.active::after {
    background: var(--neon-bio-core);
    box-shadow:
      0 0 20px var(--neon-bio-tube),
      0 0 40px color-mix(in srgb, var(--neon-bio-tube) 50%, transparent),
      0 0 60px color-mix(in srgb, var(--neon-bio-tube) 25%, transparent);
  }

  &::after {
    @include neon-line(var(--neon-bio-tube));
  }
}

header.projects {
  background-color: var(--neon-projects-bg-1);

  &::before {
    opacity: 0;
  }

  .header-content::before {
    opacity: 1;
  }

  .header-content::after {
    opacity: 0;
  }

  #projects-tab.active svg {
    filter: drop-shadow(0 2px 4px rgb(0 0 0 / 30%)) drop-shadow(0 0 12px var(--neon-projects-tube))
      drop-shadow(0 0 24px var(--neon-projects-tube));
  }

  #projects-tab.active::after {
    background: var(--neon-projects-core);
    box-shadow:
      0 0 20px var(--neon-projects-tube),
      0 0 40px color-mix(in srgb, var(--neon-projects-tube) 50%, transparent),
      0 0 60px color-mix(in srgb, var(--neon-projects-tube) 25%, transparent);
  }

  &::after {
    @include neon-line(var(--neon-projects-tube));
  }
}

header.resume {
  background-color: var(--neon-resume-bg-1);

  &::before {
    opacity: 0;
  }

  .header-content::before {
    opacity: 0;
  }

  .header-content::after {
    opacity: 1;
  }

  #resume-tab.active svg {
    filter: drop-shadow(0 2px 4px rgb(0 0 0 / 30%)) drop-shadow(0 0 12px var(--neon-resume-tube))
      drop-shadow(0 0 24px var(--neon-resume-tube));
  }

  #resume-tab.active::after {
    background: var(--neon-resume-core);
    box-shadow:
      0 0 20px var(--neon-resume-tube),
      0 0 40px color-mix(in srgb, var(--neon-resume-tube) 50%, transparent),
      0 0 60px color-mix(in srgb, var(--neon-resume-tube) 25%, transparent);
  }

  &::after {
    @include neon-line(var(--neon-resume-tube));
  }
}

// High-contrast / forced-colors: drop the soft neon glow for solid, legible
// affordances (WCAG 1.4.11).
@media (prefers-contrast: more), (forced-colors: active) {
  h1 {
    filter: none;
  }

  header::after,
  li.active::after {
    background: CanvasText;
    box-shadow: none;
    filter: none;
  }
}
</style>
