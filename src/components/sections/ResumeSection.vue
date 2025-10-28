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

.resume {
  padding: 0 15px;
  overflow-x: hidden;

  @include mq(ipad) {
    padding: 0 20px;
  }
}

h1 {
  position: relative;
  margin-bottom: 12px;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;

  @include mq(ipad) {
    margin-bottom: 30px;
    font-size: 32px;
    letter-spacing: -1px;
  }

  &::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    content: '';
    background: linear-gradient(90deg, currentcolor 0%, transparent 100%);
    border-radius: 2px;
  }
}

#header-name {
  display: none;
}

#header-jobs {
  background: var(--resume-jobs-gradient);
  background-clip: text;
  filter: drop-shadow(0 0 15px rgb(245 183 0 / 30%)) drop-shadow(0 0 30px rgb(245 183 0 / 15%));
  -webkit-text-fill-color: transparent;

  &::after {
    background: var(--resume-jobs-gradient);
    box-shadow:
      0 0 15px rgb(245 183 0 / 40%),
      0 0 30px rgb(245 183 0 / 20%);
  }
}

#header-supporting-experience {
  background: var(--resume-supporting-gradient);
  background-clip: text;
  filter: drop-shadow(0 0 15px rgb(0 161 228 / 30%)) drop-shadow(0 0 30px rgb(0 161 228 / 15%));
  -webkit-text-fill-color: transparent;

  &::after {
    background: var(--resume-supporting-gradient);
    box-shadow:
      0 0 15px rgb(0 161 228 / 40%),
      0 0 30px rgb(0 161 228 / 20%);
  }
}

#header-education {
  background: var(--resume-education-gradient);
  background-clip: text;
  filter: drop-shadow(0 0 15px rgb(220 0 115 / 30%)) drop-shadow(0 0 30px rgb(220 0 115 / 15%));
  -webkit-text-fill-color: transparent;

  &::after {
    background: var(--resume-education-gradient);
    box-shadow:
      0 0 15px rgb(220 0 115 / 40%),
      0 0 30px rgb(220 0 115 / 20%);
  }
}

.address {
  margin-bottom: 15px;
  font-size: 11px;
  font-style: italic;
  color: var(--text-color-secondary);
  text-align: center;
  transition: color 0.3s ease;

  @include mq(ipad) {
    margin-bottom: 30px;
    font-size: 14px;
  }
}

.objective {
  position: relative;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 13px;
  line-height: 1.4;
  color: var(--text-color);
  text-align: center;
  background: var(--card-bg);
  border-radius: 6px;
  box-shadow: var(--card-shadow);
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    content: '';
    background: var(--header-color-resume-gradient);
    border-radius: 6px 0 0 6px;
  }

  @include mq(ipad) {
    padding: 25px;
    margin-bottom: 50px;
    font-size: 18px;
    line-height: 1.6;
    border-radius: 8px;
  }

  strong {
    display: block;
    margin-bottom: 6px;
    font-size: 11px;
    color: var(--text-color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.8px;

    @include mq(ipad) {
      margin-bottom: 10px;
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
}

ul {
  padding: 0;
  margin: 0 0 30px;
  list-style: none;

  @include mq(ipad) {
    margin: 0 0 50px;
  }
}

#supporting-experience {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-bottom: 30px;

  @include mq(ipad) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 15px;
    margin-bottom: 50px;
  }

  li {
    padding: 10px 12px;
    font-size: 12px;
    background: linear-gradient(
      135deg,
      rgb(0 161 228 / 4%) 0%,
      rgb(0 161 228 / 8%) 50%,
      rgb(0 161 228 / 4%) 100%
    );
    border-radius: 6px;
    box-shadow:
      0 2px 8px rgb(0 0 0 / 8%),
      inset 0 0 25px rgb(0 161 228 / 3%);
    transition:
      transform 0.2s ease,
      box-shadow 0.3s ease,
      background 0.3s ease;

    @include mq(ipad) {
      padding: 15px 20px;
      font-size: 14px;
      border-radius: 8px;
    }

    &:hover {
      background: linear-gradient(
        135deg,
        rgb(0 161 228 / 6%) 0%,
        rgb(0 161 228 / 12%) 50%,
        rgb(0 161 228 / 6%) 100%
      );
      box-shadow:
        0 8px 24px rgb(0 161 228 / 15%),
        0 0 35px rgb(0 161 228 / 10%),
        inset 0 0 35px rgb(0 161 228 / 5%);
      transform: translateY(-2px);
    }

    &::before {
      margin-right: 8px;
      font-weight: bold;
      content: '▸';
      background: var(--resume-supporting-gradient);
      background-clip: text;
      filter: drop-shadow(0 0 8px rgb(0 161 228 / 40%));
      -webkit-text-fill-color: transparent;
    }
  }
}

.references {
  padding: 20px;
  margin-top: 50px;
  font-style: italic;
  color: var(--text-color-secondary);
  text-align: center;
  background: var(--bg-color-secondary);
  border-radius: 8px;
  transition: color 0.3s ease;
}

@media only print {
  .resume {
    padding: 0;
    color: #000;
    background: #fff;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 16px;
    color: #000 !important;
    text-shadow: none !important;
    background: none !important;
    background-clip: unset !important;
    filter: none !important;
    -webkit-text-fill-color: unset !important;

    &::after {
      display: none;
    }
  }

  #header-name {
    display: block;
    margin-bottom: 5px;
    font-size: 24px;
    text-align: center;
  }

  .objective {
    padding: 8px;
    margin-bottom: 15px;
    font-size: 12px;
    line-height: 1.4;
    color: #000;
    background: #f5f5f5;
    border: none;
    border-radius: 0;
    box-shadow: none;

    &::before {
      display: none;
    }

    strong {
      color: #000;
    }
  }

  #supporting-experience {
    grid-template-columns: 1fr;
    gap: 4px;
    margin-bottom: 15px;

    li {
      padding: 4px 8px;
      font-size: 11px;
      color: #000;
      background: #f5f5f5;
      border-radius: 0;
      box-shadow: none;
      transform: none;

      &::before {
        color: #000;
        text-shadow: none !important;
        background: none !important;
        background-clip: unset !important;
        filter: none !important;
        -webkit-text-fill-color: unset !important;
      }

      &:hover {
        background: #f5f5f5;
        box-shadow: none;
        transform: none;
      }
    }
  }

  .address,
  .address span {
    margin-bottom: 10px;
    font-size: 11px;
    color: #000;
  }

  .references {
    padding: 8px;
    margin-top: 15px;
    font-size: 11px;
    color: #000;
    background: #f5f5f5;
    border-radius: 0;
  }
}
</style>

<style lang="scss">
@use '@/assets/styles/breakpoints' as *;
@use '@/assets/styles/cards' as *;

.history {
  display: grid;
  gap: 8px;

  @include mq(ipad) {
    gap: 20px;
  }
}

ul.history li {
  padding: 12px;
  overflow-wrap: break-word;
  border-radius: 6px;
  opacity: 0;
  transform: translateY(20px) scale(0.98);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out,
    box-shadow 0.3s ease,
    background 0.3s ease;

  @include mq(ipad) {
    padding: 25px;
    border-radius: 12px;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  &:hover {
    transform: translateY(-2px) scale(1);
  }

  h2 {
    margin: 0 0 6px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.25;
    color: var(--text-color);
    word-spacing: 0.1em;
    transition:
      color 0.3s ease,
      text-shadow 0.3s ease;

    @include mq(ipad) {
      margin: 0 0 12px;
      font-size: 18px;
      line-height: 1.4;
      word-spacing: 0.15em;
    }

    .title {
      font-weight: 700;
      color: var(--resume-jobs-color);
      text-shadow:
        0 0 10px rgb(245 183 0 / 30%),
        0 0 20px rgb(245 183 0 / 15%);
    }

    .resume li:hover & .title {
      text-shadow:
        0 0 15px rgb(245 183 0 / 50%),
        0 0 30px rgb(245 183 0 / 25%);
    }

    .time-range {
      display: block;
      margin-top: 2px;
      font-size: 11px;
      font-style: italic;
      font-weight: normal;
      color: var(--text-color-secondary);

      @include mq(ipad) {
        margin-top: 4px;
        font-size: 14px;
      }

      @include mq(large) {
        display: inline;
        margin-top: 0;
        margin-left: 12px;

        &::before {
          margin: 0 8px;
          content: '•';
        }
      }
    }
  }

  p {
    margin: 0;
    font-size: 13px;
    line-height: 1.4;
    color: var(--text-color);
    transition: color 0.3s ease;

    @include mq(ipad) {
      font-size: 15px;
      line-height: 1.6;
    }
  }
}

// Jobs section cards - yellow/orange gradient
#header-jobs ~ ul.history li {
  background: linear-gradient(
    135deg,
    rgb(245 183 0 / 4%) 0%,
    rgb(245 183 0 / 8%) 50%,
    rgb(245 183 0 / 4%) 100%
  );
  border-left: 4px solid #f5b700;
  box-shadow:
    0 2px 8px rgb(0 0 0 / 8%),
    inset 0 0 30px rgb(245 183 0 / 3%);
}

// Education section cards - pink gradient
#header-education ~ ul.history li {
  background: linear-gradient(
    135deg,
    rgb(220 0 115 / 4%) 0%,
    rgb(220 0 115 / 8%) 50%,
    rgb(220 0 115 / 4%) 100%
  );
  border-left: 4px solid #dc0073;
  box-shadow:
    0 2px 8px rgb(0 0 0 / 8%),
    inset 0 0 30px rgb(220 0 115 / 3%);

  h2 .title {
    color: var(--resume-education-color);
  }
}

#header-jobs ~ ul.history li:hover {
  background: linear-gradient(
    135deg,
    rgb(245 183 0 / 6%) 0%,
    rgb(245 183 0 / 12%) 50%,
    rgb(245 183 0 / 6%) 100%
  );
  box-shadow:
    0 8px 24px rgb(245 183 0 / 15%),
    0 0 40px rgb(245 183 0 / 10%),
    inset 0 0 40px rgb(245 183 0 / 5%);
}

#header-education ~ ul.history li:hover {
  background: linear-gradient(
    135deg,
    rgb(220 0 115 / 6%) 0%,
    rgb(220 0 115 / 12%) 50%,
    rgb(220 0 115 / 6%) 100%
  );
  box-shadow:
    0 8px 24px rgb(220 0 115 / 15%),
    0 0 40px rgb(220 0 115 / 10%),
    inset 0 0 40px rgb(220 0 115 / 5%);
}

@media only print {
  .history {
    gap: 8px;
    margin-bottom: 15px;
  }

  ul.history li {
    padding: 8px;
    color: #000;
    background: #f5f5f5 !important;
    border: none !important;
    border-radius: 0;
    box-shadow: none !important;
    opacity: 1;
    transform: none;

    h2 {
      margin-bottom: 4px;
      font-size: 13px;
      color: #000;
      text-shadow: none !important;

      .title {
        color: #000 !important;
        text-shadow: none !important;
      }

      .time-range {
        font-size: 11px;
        color: #000;
      }
    }

    p {
      font-size: 11px;
      line-height: 1.3;
      color: #000;
    }
  }

  #header-jobs ~ ul.history li,
  #header-education ~ ul.history li {
    background: #f5f5f5 !important;
    border: none !important;
    box-shadow: none !important;

    &:hover {
      background: #f5f5f5 !important;
      box-shadow: none !important;
      transform: none;
    }
  }
}
</style>
