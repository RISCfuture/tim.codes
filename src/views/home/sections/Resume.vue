<template>
  <div class="resume" data-cy="navigation-root-resume">
    <h1 id="header-name">Tim Morgan</h1>
    <div class="address">
      <span v-html="addressLine1" /><br />
      {{addressLine2}}
    </div>

    <p class="objective">
      <strong>{{$t('resume.objective.header')}}</strong>
      {{$t('resume.objective.content')}}
    </p>

    <h1 id="header-summary">{{$t('resume.summary.header')}}</h1>
    <p>{{$t('resume.summary.content')}}</p>

    <h1 id="header-accomplishments">{{$t('resume.accomplishments.header')}}</h1>
    <ul>
      <li v-for="accomplishment in accomplishments" :key="accomplishment">{{accomplishment}}</li>
    </ul>

    <h1 id="header-jobs">{{$t('resume.jobs.header')}}</h1>
    <ul class="history">
      <job v-for="job in jobs" :job="job" :key="job.identifier" />
    </ul>

    <h1 id="header-supporting-experience">{{$t('resume.supporting_experience.header')}}</h1>
    <ul>
      <li v-for="item in supportingExperience" :key="item">{{item}}</li>
    </ul>

    <h1 id="header-education">{{$t('resume.education.header')}}</h1>
    <ul class="history">
      <education v-for="ed in education" :education="ed" :key="ed.identifier" />
    </ul>

    <p class="references">References available upon request.</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Getter } from 'vuex-class'

  import Job from './resume/Job.vue'
  import Education from './resume/Education.vue'
  import * as ResumeTypes from '@/store/types/resume'
  import { ResumeBullets } from '@/i18n/strings/types'

  @Component({
    components: { Job, Education }
  })
  export default class Resume extends Vue {
    @Getter public jobs!: ResumeTypes.Job[]

    @Getter public education!: ResumeTypes.Education[]

    get addressLine1(): string {
      const parts = this.addressParts(['street', 'city', 'zip', 'country'])
      return parts.join(' | ')
    }

    get addressLine2(): string {
      const parts = this.addressParts(['phone', 'email'])
      return parts.join(' | ')
    }

    private addressParts(parts: string[]): string[] {
      return parts.map(part => (this.$te(`resume.address.${part}`)
            ? <string> this.$t(`resume.address.${part}`)
            : <string> this.$t('resume.address.omitted')))
    }

    get accomplishments(): string[] {
      return (<ResumeBullets>(<unknown> this.$t('resume.accomplishments'))).content
    }

    get supportingExperience(): string[] {
      return (<ResumeBullets>(<unknown> this.$t('resume.supporting_experience'))).content
    }
  }
</script>

<style scoped lang="scss">
  @import 'node_modules/mq-sass/stylesheets/mq-sass';

  h1 {
    font-size: 16px;
    font-weight: 500;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style-type: none;
      margin: 0 0 0.5em;
      padding: 0;
    }
  }

  .address {
    font-style: italic;
    font-weight: normal;
  }

  .references {
    font-style: italic;
    text-align: center;
  }

  @media only screen {
    h1 {
      font-family: Inter, sans-serif;
      font-weight: bold;
      transform-origin: left center;

      @include mq(iphone) {
        opacity: 1;
        padding: 0;
      }
      @include mq(ipad) {
        opacity: 0.2;
        padding: 15px 0;
        transform: scale(3) translate(-5px, 10px);
      }
      @include mq(large) {
        opacity: 0.2;
        padding: 15px 0;
        transform: scale(4) translate(-5px, 5px);
      }
    }

    #header-name { display: none; }
    #header-summary { color: #f5b700; }
    #header-accomplishments { color: #00a1e4; }
    #header-jobs { color: #dc0073; }
    #header-supporting-experience { color: #7abb80; }
    #header-education { color: #fff; }
  }

  @media only print {
    *,
    h1 { font-size: 16px; }

    .address,
    .address span { font-size: 12px; }
  }
</style>

<style lang="scss">
  ul.history li {
    h2 {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 0;

      .title {
        font-weight: bold;
      }

      .time-range {
        font-style: italic;
      }
    }

    p {
      margin-top: 0;
    }
  }

  @media only print {
    ul.history li h2 { font-size: 16px; }
  }
</style>
