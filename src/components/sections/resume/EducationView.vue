<template>
  <i18n-t tag="li" keypath="resume.education.format">
    <template #degreeConcentration>
      <span class="degree">{{
        t('resume.education.degreeConcentration', {
          degree,
          concentrations
        })
      }}</span>
    </template>
    <template #institution>{{ institution }}</template>
    <template #location>{{ location }}</template>
    <template #timeRange>{{ timeRange }}</template>
  </i18n-t>
</template>

<script setup lang="ts">
import type { Education } from '@/types/resume'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import useFormatYear from '@/hooks/formatYear'
import { list } from '@/i18n/functions'

const { t } = useI18n()
const formatYear = useFormatYear()

const props = defineProps<{ education: Education }>()

const timeRange = computed(() => {
  const start = formatYear(props.education.startYear)
  const end = props.education.endYear ? formatYear(props.education.endYear) : t('resume.present')
  return t('resume.timeRange', { start, end })
})
const concentrations = computed(() => {
  const concentrations = props.education.concentrations.map((c) =>
    t(`resume.education.concentration.${c}`)
  )
  return list(concentrations)
})
const degree = computed(() => t(`resume.education.degree.${props.education.degree}`))
const institution = computed(() =>
  t(`resume.education.institution.${props.education.institution}.name`)
)
const location = computed(() =>
  t(`resume.education.institution.${props.education.institution}.location`)
)
</script>

<style lang="scss">
.degree {
  font-weight: bold;
}
</style>
