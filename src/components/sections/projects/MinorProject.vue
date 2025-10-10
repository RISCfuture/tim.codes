<template>
  <div ref="elementRef" class="minor-project-card" :class="{ visible: isVisible }">
    <h1>
      <a v-if="project.websites[0]?.url" :href="project.websites[0].url">{{ i18nData.name }}</a>
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

.minor-project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0;
  background: linear-gradient(
    135deg,
    rgba(237, 68, 76, 0.03) 0%,
    rgba(237, 68, 76, 0.06) 50%,
    rgba(237, 68, 76, 0.03) 100%
  );
  border-radius: 10px;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 0 25px rgba(237, 68, 76, 0.02);
  opacity: 0;
  transform: translateY(20px) scale(0.96);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out,
    box-shadow 0.3s ease,
    background 0.3s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(237, 68, 76, 0.05) 0%,
      rgba(237, 68, 76, 0.1) 50%,
      rgba(237, 68, 76, 0.05) 100%
    );
    box-shadow:
      0 8px 24px rgba(237, 68, 76, 0.12),
      0 0 35px rgba(237, 68, 76, 0.08),
      inset 0 0 35px rgba(237, 68, 76, 0.04);
    transform: translateY(-3px) scale(1);
  }
}

h1 {
  margin-top: 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition:
    color 0.2s ease,
    text-shadow 0.3s ease;

  @include mq(iphone) {
    font-size: 14px;
  }

  a {
    position: relative;
    text-shadow:
      0 0 8px rgba(237, 68, 76, 0.15),
      0 0 16px rgba(237, 68, 76, 0.08);

    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      content: '';
      background: linear-gradient(90deg, #ed444c, #f27078);
      box-shadow: 0 0 6px rgba(237, 68, 76, 0.4);
      transition: width 0.3s ease;
    }

    &:hover {
      text-shadow:
        0 0 12px rgba(237, 68, 76, 0.3),
        0 0 24px rgba(237, 68, 76, 0.15);
    }

    &:hover::after {
      width: 100%;
    }
  }
}

p {
  font-size: 14px;

  @include mq(iphone) {
    font-size: 12px;
  }
}

ul {
  font-size: 12px;
}
</style>
