<template>
  <div ref="elementRef" class="project-card" :class="{ visible: isVisible }">
    <h1>
      <a v-if="project.websites[0]?.url" :href="project.websites[0].url" @click="handleLinkClick(project.websites[0].type)">{{ i18nData.name }}</a>
      <span v-else>{{ i18nData.name }}</span>
    </h1>
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
        <a :href="website.url" @click="handleLinkClick(website.type)">{{ i18nWebsiteType(website.type) }}</a>
      </li>
    </ul>
    <ul v-if="i18nData.achievements && i18nData.achievements.length > 0" class="achievements">
      <li v-for="(achievement, index) in i18nData.achievements" :key="index">
        {{ achievement }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useProject from '@/components/sections/projects/useProject'
import type { Project, WebsiteType } from '@/types/projects'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useProjectMetrics } from '@/composables/useProjectMetrics'

const props = defineProps<{ project: Project }>()

const { trackProjectClick } = useProjectMetrics()

function handleLinkClick(linkType: WebsiteType) {
  trackProjectClick(props.project.identifier, linkType, true)
}

const { i18nData, i18nType, i18nLanguages, i18nLibraries, i18nWebsiteType } = useProject(
  props.project
)

const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 })
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin: 0;
  background: linear-gradient(
    135deg,
    rgb(237 68 76 / 4%) 0%,
    rgb(237 68 76 / 8%) 50%,
    rgb(237 68 76 / 4%) 100%
  );
  border-radius: 12px;
  box-shadow:
    0 2px 8px rgb(0 0 0 / 8%),
    inset 0 0 30px rgb(237 68 76 / 3%);
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out,
    box-shadow 0.3s ease,
    background 0.3s ease,
    text-shadow 0.3s ease;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
    background: linear-gradient(
      135deg,
      rgb(237 68 76 / 10%) 0%,
      transparent 50%,
      rgb(237 68 76 / 5%) 100%
    );
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgb(237 68 76 / 6%) 0%,
      rgb(237 68 76 / 12%) 50%,
      rgb(237 68 76 / 6%) 100%
    );
    box-shadow:
      0 8px 24px rgb(237 68 76 / 15%),
      0 0 40px rgb(237 68 76 / 10%),
      inset 0 0 40px rgb(237 68 76 / 5%);
    transform: translateY(-4px) scale(1);

    &::before {
      opacity: 1;
    }
  }
}

h1 {
  margin-top: 0;
  text-align: center;
  transition:
    color 0.2s ease,
    text-shadow 0.3s ease;

  a {
    position: relative;
    text-shadow:
      0 0 10px rgb(237 68 76 / 20%),
      0 0 20px rgb(237 68 76 / 10%);

    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      content: '';
      background: linear-gradient(90deg, #ed444c, #f27078);
      box-shadow: 0 0 8px rgb(237 68 76 / 50%);
      transition: width 0.3s ease;
    }

    &:hover {
      text-shadow:
        0 0 15px rgb(237 68 76 / 40%),
        0 0 30px rgb(237 68 76 / 20%);
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
