<template>
  <li v-html="content" />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  import formatYear from './formatYear'
  import * as Resume from '@/store/types/resume'
  import { list } from '@/i18n/globalizer'

  @Component
  export default class Education extends Vue {
    @Prop({ type: Object, required: true }) public education!: Resume.Education

    get content(): string {
      const degree = this.$t(`resume.education.degree.${this.education.degree}`)
      const concentration = this.concentrations
      const institution = this.$t(`resume.education.institution.${this.education.institution}.name`)
      const location = this.$t(`resume.education.institution.${this.education.institution}.location`)
      const { timeRange } = this
      return <string> this.$t('resume.education.format', {
        degree, concentration, institution, location, timeRange
      })
    }

    private get timeRange(): string {
      const start = formatYear(this.education.startYear)
      const end = this.education.endYear ? formatYear(this.education.endYear) : this.$t('resume.present')
      return <string> this.$t('resume.time_range', { start, end })
    }

    private get concentrations(): string {
      const concentrations = this.education.concentrations.
          map(c => <string> this.$t(`resume.education.concentration.${c}`))
      return list(concentrations)
    }
  }
</script>

<style lang="scss">
  .degree {
    font-weight: bold;
  }
</style>
