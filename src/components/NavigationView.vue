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
@use '@/assets/styles/neon' as *;

header {
  position: relative;
  color: var(--header-text-color);
  @include gradient-header-overlay;
  @include transition-slow(background, color);
  overflow: visible;

  // Bio background layer
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: var(--header-color-home-gradient);
    opacity: 1;
    transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  // Projects background layer
  .header-content::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    content: '';
    background: var(--header-color-projects-gradient);
    opacity: 0;
    transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
    margin-left: calc(-1 * (100vw - 100%) / 2);
  }

  // Resume background layer
  .header-content::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    content: '';
    background: var(--header-color-resume-gradient);
    opacity: 0;
    transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
    margin-left: calc(-1 * (100vw - 100%) / 2);
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
      background 1.2s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 2;
    animation: neon-border-pulse 3s ease-in-out infinite;
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
  @include neon-text(255, 255, 255, 0.5);
  @include transition-standard(text-shadow);
  @include margin-scale(0 0 10px 0, 0 0 20px 0, 0);
  @include font-scale-fixed(24px, 42px, 48px);
  @include letter-spacing-scale(1.5px, 2px, 2px);

  // Intense flicker effect using existing neon system
  --neon-flicker-intensity: 0.2;
  animation: neon-flicker calc(1s / var(--neon-flicker-frequency)) infinite ease-in-out;

  &:hover {
    // Increase luminosity on hover
    --neon-luminosity: 0.7;
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

// Color-specific effects - Gas-based neon colors
header.bio {
  &::before {
    opacity: 1;
  }

  .header-content::before,
  .header-content::after {
    opacity: 0;
  }

  #home-tab.active svg {
    @include filter-glow-active(147, 176, 255); // Argon-Mercury (435.8nm)
  }

  #home-tab.active::after {
    // Use neon glow for tab indicator
    background: rgb(var(--neon-gas-argon-blue));
    box-shadow:
      0 0 20px rgba(var(--neon-gas-argon-blue), 0.9),
      0 0 40px rgba(var(--neon-gas-argon-blue), 0.5),
      0 0 60px rgba(var(--neon-gas-argon-blue), 0.25);
  }

  &::after {
    // Use physically-accurate neon for header border
    @include neon-line-shadow(147, 176, 255, 4px, 1.9);
  }
}

header.projects {
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
    @include filter-glow-active(255, 75, 43); // True Neon (640.2nm)
  }

  #projects-tab.active::after {
    // Use neon glow for tab indicator
    background: rgb(var(--neon-gas-true-neon));
    box-shadow:
      0 0 20px rgba(var(--neon-gas-true-neon), 0.9),
      0 0 40px rgba(var(--neon-gas-true-neon), 0.5),
      0 0 60px rgba(var(--neon-gas-true-neon), 0.25);
  }

  &::after {
    // Use physically-accurate neon for header border
    @include neon-line-shadow(255, 75, 43, 4px, 1.9);
  }
}

header.resume {
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
    @include filter-glow-active(200, 255, 210); // Krypton (557.7nm)
  }

  #resume-tab.active::after {
    // Use neon glow for tab indicator
    background: rgb(var(--neon-gas-krypton));
    box-shadow:
      0 0 20px rgba(var(--neon-gas-krypton), 0.9),
      0 0 40px rgba(var(--neon-gas-krypton), 0.5),
      0 0 60px rgba(var(--neon-gas-krypton), 0.25);
  }

  &::after {
    // Use physically-accurate neon for header border
    @include neon-line-shadow(200, 255, 210, 4px, 1.9);
  }
}

// Pulse animation for neon border
@keyframes neon-border-pulse {
  0%,
  100% {
    filter: brightness(1);
  }

  50% {
    filter: brightness(1.15);
  }
}

// Respect reduced motion preference
@media (prefers-reduced-motion: reduce) {
  header::after {
    animation: none !important;
  }

  h1 {
    animation: none !important;
  }
}
</style>
