<template>
  <li>
    <i18n-t tag="h2" keypath="resume.jobs.headerFormat">
      <template #title
        ><span class="title">{{ title }}</span></template
      >
      <template #company>{{ company }}</template>
      <template #location>{{ location }}</template>
      <template #timeRange
        ><span class="time-range">{{ timeRange }}</span>
      </template>
    </i18n-t>

    <p>{{ t(`resume.jobs.identifiers.${job.identifier}.description`) }}</p>
  </li>
</template>

<script setup lang="ts">
import type { Job } from '@/types/resume'
import { computed } from 'vue'
import useFormatYear from '@/hooks/formatYear'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const formatYear = useFormatYear()

const props = defineProps<{ job: Job }>()

const timeRange = computed(() => {
  const start = formatYear(props.job.startYear)
  const end = props.job.endYear ? formatYear(props.job.endYear) : t('resume.present')
  return t('resume.timeRange', { start, end })
})
const title = computed(() => t(`resume.jobs.identifiers.${props.job.identifier}.title`))
const company = computed(() => t(`resume.jobs.identifiers.${props.job.identifier}.company`))
const location = computed(() => t(`resume.jobs.locations.${props.job.location}`))
</script>
