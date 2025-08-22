<template>
  <div>
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
  </div>
</template>

<script setup lang="ts">
import useProject from '@/components/sections/projects/useProject'
import type { Project } from '@/types/projects'

const props = defineProps<{ project: Project }>()

const { i18nData, i18nType, i18nLanguages, i18nLibraries, i18nWebsiteType } = useProject(
  props.project
)
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;

div {
  margin-bottom: 20px;

  @include mq(large) {
    max-width: calc(33% - 40px);
    margin: 20px;
  }
}

h1 {
  font-size: 14px;
  font-weight: bold;
}

p,
ul {
  font-size: 12px;
}
</style>
