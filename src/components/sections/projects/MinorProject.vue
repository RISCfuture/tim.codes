<template>
  <div ref="elementRef" class="minor-project-card" :class="{ visible: isVisible }">
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
  trackProjectClick(props.project.identifier, linkType, false)
}

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
    rgb(237 68 76 / 3%) 0%,
    rgb(237 68 76 / 6%) 50%,
    rgb(237 68 76 / 3%) 100%
  );
  border-radius: 10px;
  box-shadow:
    0 2px 8px rgb(0 0 0 / 8%),
    inset 0 0 25px rgb(237 68 76 / 2%);
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
      rgb(237 68 76 / 5%) 0%,
      rgb(237 68 76 / 10%) 50%,
      rgb(237 68 76 / 5%) 100%
    );
    box-shadow:
      0 8px 24px rgb(237 68 76 / 12%),
      0 0 35px rgb(237 68 76 / 8%),
      inset 0 0 35px rgb(237 68 76 / 4%);
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
      0 0 8px rgb(237 68 76 / 15%),
      0 0 16px rgb(237 68 76 / 8%);

    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      content: '';
      background: linear-gradient(90deg, #ed444c, #f27078);
      box-shadow: 0 0 6px rgb(237 68 76 / 40%);
      transition: width 0.3s ease;
    }

    &:hover {
      text-shadow:
        0 0 12px rgb(237 68 76 / 30%),
        0 0 24px rgb(237 68 76 / 15%);
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
