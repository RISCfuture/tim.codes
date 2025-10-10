<template>
  <div ref="elementRef" class="project-card" :class="{ visible: isVisible }">
    <h1>
      <a :href="project.websites[0].url">{{ i18nData.name }}</a>
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
        <a :href="website.url">{{ i18nWebsiteType(website.type) }}</a>
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
import type { Project } from '@/types/projects'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const props = defineProps<{ project: Project }>()

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
    rgba(237, 68, 76, 0.04) 0%,
    rgba(237, 68, 76, 0.08) 50%,
    rgba(237, 68, 76, 0.04) 100%
  );
  border-radius: 12px;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 0 30px rgba(237, 68, 76, 0.03);
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
    content: '';
    background: linear-gradient(
      135deg,
      rgba(237, 68, 76, 0.1) 0%,
      transparent 50%,
      rgba(237, 68, 76, 0.05) 100%
    );
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(237, 68, 76, 0.06) 0%,
      rgba(237, 68, 76, 0.12) 50%,
      rgba(237, 68, 76, 0.06) 100%
    );
    box-shadow:
      0 8px 24px rgba(237, 68, 76, 0.15),
      0 0 40px rgba(237, 68, 76, 0.1),
      inset 0 0 40px rgba(237, 68, 76, 0.05);
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
      0 0 10px rgba(237, 68, 76, 0.2),
      0 0 20px rgba(237, 68, 76, 0.1);

    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      content: '';
      background: linear-gradient(90deg, #ed444c, #f27078);
      box-shadow: 0 0 8px rgba(237, 68, 76, 0.5);
      transition: width 0.3s ease;
    }

    &:hover {
      text-shadow:
        0 0 15px rgba(237, 68, 76, 0.4),
        0 0 30px rgba(237, 68, 76, 0.2);
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
