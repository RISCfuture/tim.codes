<template>
  <li>
    <h2 v-html="header" />
    <p>{{ $t(`resume.jobs.identifiers.${job.identifier}.description`) }}</p>
  </li>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  import formatYear from './formatYear'
  import * as Resume from '@/store/types/resume'

  @Component
  export default class Job extends Vue {
    @Prop({ type: Object, required: true }) public job!: Resume.Job

    get header(): string {
      const { timeRange } = this
      const title = this.$t(`resume.jobs.identifiers.${this.job.identifier}.title`)
      const company = this.$t(`resume.jobs.identifiers.${this.job.identifier}.company`)
      const location = this.$t(`resume.jobs.locations.${this.job.location}`)
      return <string> this.$t('resume.jobs.header_format', {
        timeRange, title, company, location
      })
    }

    private get timeRange(): string {
      const start = formatYear(this.job.startYear)
      const end = this.job.endYear ? formatYear(this.job.endYear) : this.$t('resume.present')
      return <string> this.$t('resume.time_range', { start, end })
    }
  }
</script>
