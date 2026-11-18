<template>
  <div
    ref="elementRef"
    class="project-card"
    :class="{ featured: project.featured, visible: isVisible }"
    :style="rowSpanStyle"
  >
    <h1>
      <a
        v-if="project.websites[0]?.url"
        :href="project.websites[0].url"
        @click="handleLinkClick(project.websites[0].type)"
        >{{ i18nData.name }}</a
      >
      <span v-else>{{ i18nData.name }}</span>
    </h1>
    <div class="details">
      <p>{{ i18nData.description }}</p>
      <ul class="tags">
        <li class="type">
          {{ i18nType }}
        </li>
        <li v-for="language in i18nLanguages" :key="language" class="language">
          {{ language }}
        </li>
        <li v-for="library in i18nLibraries" :key="library" class="library">
          {{ library }}
        </li>
      </ul>
      <ul class="websites">
        <li v-for="website in project.websites" :key="website.url">
          <a :href="website.url" @click="handleLinkClick(website.type)">{{
            i18nWebsiteType(website.type)
          }}</a>
        </li>
      </ul>
    </div>
    <ul v-if="project.featured && i18nData.achievements?.length" class="achievements">
      <li v-for="(achievement, index) in i18nData.achievements" :key="index">
        {{ achievement }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useProject from '@/components/sections/projects/useProject'
import type { Project, WebsiteType } from '@/types/projects'
import { useMasonrySpan } from '@/composables/useMasonrySpan'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useProjectMetrics } from '@/composables/useProjectMetrics'

const props = defineProps<{ project: Project }>()

const { trackProjectClick } = useProjectMetrics()

function handleLinkClick(linkType: WebsiteType) {
  trackProjectClick(props.project.identifier, linkType, props.project.featured)
}

const { i18nData, i18nType, i18nLanguages, i18nLibraries, i18nWebsiteType } = useProject(
  props.project,
)

const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 })
const { rowSpan } = useMasonrySpan(elementRef)
const rowSpanStyle = computed(() =>
  rowSpan.value ? { gridRowEnd: `span ${String(rowSpan.value)}` } : {},
)
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;

.project-card {
  position: relative;
  box-sizing: border-box;
  padding: 18px 20px;
  margin: 0 0 var(--masonry-gap);
  background: rgb(var(--section-accent-rgb) / 3%);
  border: 1px solid rgb(var(--section-accent-rgb) / 12%);
  border-radius: 10px;
  opacity: 0;
  transform: translateY(20px) scale(0.96);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out,
    box-shadow 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease;

  @supports (display: grid-lanes) {
    margin-bottom: 0;
  }

  &.visible {
    opacity: 1;
    transform: none;
  }

  &:hover {
    background: rgb(var(--section-accent-rgb) / 7%);
    border-color: rgb(var(--section-accent-rgb) / 30%);
    box-shadow:
      0 8px 24px rgb(var(--section-accent-rgb) / 12%),
      0 0 30px rgb(var(--section-accent-rgb) / 8%);
    transform: translateY(-3px);
  }
}

h1 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;

  a {
    position: relative;

    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      content: '';
      background: var(--section-gradient);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

p {
  margin: 0 0 10px;
  font-size: 14px;
  line-height: 1.45;
}

.featured {
  display: grid;
  grid-template-areas:
    'title'
    'details'
    'achievements';
  column-gap: 32px;
  padding: 28px 32px 24px;
  background: linear-gradient(
    135deg,
    rgb(var(--section-accent-rgb) / 9%) 0%,
    rgb(var(--section-accent-rgb) / 4%) 100%
  );
  border-color: rgb(var(--section-accent-rgb) / 30%);
  border-radius: 16px;
  box-shadow:
    0 4px 16px rgb(var(--section-accent-rgb) / 12%),
    0 0 40px rgb(var(--section-accent-rgb) / 8%);

  @include mq(ipad) {
    grid-column: span 2;
  }

  @include mq(large) {
    grid-template-areas:
      'title title'
      'details achievements';
    grid-template-columns: 1fr 1fr;
  }

  &::before {
    position: absolute;
    top: -1px;
    right: 16px;
    left: 16px;
    height: 3px;
    content: '';
    background: var(--section-gradient);
    border-radius: 0 0 3px 3px;
    box-shadow: 0 0 12px rgb(var(--section-accent-rgb) / 50%);
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgb(var(--section-accent-rgb) / 13%) 0%,
      rgb(var(--section-accent-rgb) / 6%) 100%
    );
    border-color: rgb(var(--section-accent-rgb) / 45%);
    box-shadow:
      0 10px 32px rgb(var(--section-accent-rgb) / 20%),
      0 0 50px rgb(var(--section-accent-rgb) / 12%);
    transform: translateY(-4px);
  }

  h1 {
    grid-area: title;
    margin-bottom: 12px;
    font-size: 26px;
    letter-spacing: -0.5px;
  }

  .details {
    grid-area: details;
  }

  p {
    font-size: 16px;
  }

  .achievements {
    grid-area: achievements;

    @include mq(large) {
      margin-top: 0;
    }
  }
}
</style>
