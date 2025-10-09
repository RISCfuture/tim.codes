<template>
  <li ref="elementRef" :class="{ visible: isVisible }">
    <i18n-t tag="h2" keypath="resume.jobs.headerFormat">
      <template #title><span class="title">{{ title }}</span></template>
      <template #company>{{ company }}</template>
      <template #location>{{ location }}</template>
      <template #timeRange><span class="time-range">{{ timeRange }}</span></template>
    </i18n-t>

    <p>{{ t(`resume.jobs.identifiers.${job.identifier}.description`) }}</p>
  </li>
</template>

<script setup lang="ts">
import type { Job } from '@/types/resume'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t, d } = useI18n()

const props = defineProps<{ job: Job }>()

const timeRange = computed(() => {
  const start = d(new Date(props.job.startYear, 1), 'yearOnly')
  const end = props.job.endYear
    ? d(new Date(props.job.endYear, 1), 'yearOnly')
    : t('resume.present')
  return t('resume.timeRange', { start, end })
})
const title = computed(() => t(`resume.jobs.identifiers.${props.job.identifier}.title`))
const company = computed(() => t(`resume.jobs.identifiers.${props.job.identifier}.company`))
const location = computed(() => t(`resume.jobs.locations.${props.job.location}`))

const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 })
</script>
