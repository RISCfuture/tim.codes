<template>
  <li ref="elementRef" :class="{ visible: isVisible }">
    <i18n-t keypath="resume.education.format">
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
  </li>
</template>

<script setup lang="ts">
import type { Education } from '@/types/resume'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { list } from '@/i18n/functions'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t, d } = useI18n()

const props = defineProps<{ education: Education }>()

const timeRange = computed(() => {
  const start = d(new Date(props.education.startYear, 1), 'yearOnly')
  const end = props.education.endYear
    ? d(new Date(props.education.endYear, 1), 'yearOnly')
    : t('resume.present')
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

const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 })
</script>

<style lang="scss">
.degree {
  font-weight: bold;
}
</style>
