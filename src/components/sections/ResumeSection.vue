<template>
  <div class="resume" data-cy="navigation-root-resume">
    <h1 id="header-name">Tim Morgan</h1>
    <div class="address">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-html="addressLine1" /><br />
      {{ addressLine2 }}
    </div>

    <p class="objective">
      <strong>{{ t('resume.objective.header') }}</strong>
      {{ t('resume.objective.content') }}
    </p>

    <h1 id="header-jobs">
      {{ t('resume.jobs.header') }}
    </h1>
    <ul class="history">
      <job-view v-for="job in jobs" :key="job.identifier" :job="job" />
    </ul>

    <h1 id="header-supporting-experience">
      {{ t('resume.supportingExperience.header') }}
    </h1>
    <ul id="supporting-experience">
      <li v-for="item in supportingExperience" :key="item">
        {{ item }}
      </li>
    </ul>

    <h1 id="header-education">
      {{ t('resume.education.header') }}
    </h1>
    <ul class="history">
      <education-view v-for="ed in education" :key="ed.identifier" :education="ed" />
    </ul>

    <p class="references">
      {{ t('resume.references') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ResumeBullets } from '@/i18n/strings/types'
import JobView from '@/components/sections/resume/JobView.vue'
import EducationView from '@/components/sections/resume/EducationView.vue'

const { t, te, tm } = useI18n()

const resumeStore = useResumeStore()
const jobs = resumeStore.sortedJobs
const education = resumeStore.sortedEducation

function addressParts(parts: string[]) {
  return parts.map((part) =>
    te(`resume.address.${part}`, 'en') ? t(`resume.address.${part}`) : t('resume.address.omitted')
  )
}

const addressLine1 = computed(() => {
  const parts = addressParts(['street', 'city', 'zip', 'country'])
  return parts.join(' | ')
})

const addressLine2 = computed(() => {
  const parts = addressParts(['phone', 'email'])
  return parts.join(' | ')
})

const supportingExperience = computed(
  () => (tm('resume.supportingExperience') as ResumeBullets).content
)
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as *;

h1 {
  font-size: 16px;
  font-weight: 500;
}

ul {
  padding: 0;
  margin: 0;

  li {
    padding: 0;
    margin: 0 0 0.5em;
    list-style-type: none;
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
    @include mq(iphone) {
      padding: 0;
      opacity: 1;
    }

    @include mq(ipad) {
      padding: 15px 0;
      opacity: 0.2;
      transform: scale(3) translate(-5px, 10px);
    }

    @include mq(large) {
      padding: 15px 0;
      opacity: 0.2;
      transform: scale(4) translate(-5px, 5px);
    }

    font-family: Inter, sans-serif;
    font-weight: bold;
    transform-origin: left center;
  }

  #header-name {
    display: none;
  }

  #header-jobs {
    color: #f5b700;
  }

  #header-supporting-experience {
    color: #00a1e4;
  }

  #header-education {
    color: #dc0073;
  }

  #header-num1 {
    color: #7abb80;
  }
}

@media only print {
  *,
  h1 {
    font-size: 16px;
  }

  .address,
  .address span {
    font-size: 12px;
  }
}
</style>

<style lang="scss">
ul.history li {
  h2 {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500;

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
  ul.history li h2 {
    font-size: 16px;
  }
}
</style>
