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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(245, 183, 0, 0.3))
    drop-shadow(0 0 30px rgba(245, 183, 0, 0.15));

  &::after {
    background: var(--resume-jobs-gradient);
    box-shadow:
      0 0 15px rgba(245, 183, 0, 0.4),
      0 0 30px rgba(245, 183, 0, 0.2);
  }
}

#header-supporting-experience {
  background: var(--resume-supporting-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(0, 161, 228, 0.3))
    drop-shadow(0 0 30px rgba(0, 161, 228, 0.15));

  &::after {
    background: var(--resume-supporting-gradient);
    box-shadow:
      0 0 15px rgba(0, 161, 228, 0.4),
      0 0 30px rgba(0, 161, 228, 0.2);
  }
}

#header-education {
  background: var(--resume-education-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(220, 0, 115, 0.3))
    drop-shadow(0 0 30px rgba(220, 0, 115, 0.15));

  &::after {
    background: var(--resume-education-gradient);
    box-shadow:
      0 0 15px rgba(220, 0, 115, 0.4),
      0 0 30px rgba(220, 0, 115, 0.2);
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
      rgba(0, 161, 228, 0.04) 0%,
      rgba(0, 161, 228, 0.08) 50%,
      rgba(0, 161, 228, 0.04) 100%
    );
    border-radius: 6px;
    box-shadow:
      0 2px 8px rgba(0, 0, 0, 0.08),
      inset 0 0 25px rgba(0, 161, 228, 0.03);
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
        rgba(0, 161, 228, 0.06) 0%,
        rgba(0, 161, 228, 0.12) 50%,
        rgba(0, 161, 228, 0.06) 100%
      );
      box-shadow:
        0 8px 24px rgba(0, 161, 228, 0.15),
        0 0 35px rgba(0, 161, 228, 0.1),
        inset 0 0 35px rgba(0, 161, 228, 0.05);
      transform: translateY(-2px);
    }

    &::before {
      margin-right: 8px;
      font-weight: bold;
      background: var(--resume-supporting-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 8px rgba(0, 161, 228, 0.4));
      content: '▸';
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
  }

  h1 {
    margin-bottom: 15px;
    font-size: 18px;

    &::after {
      display: none;
    }
  }

  .objective {
    padding: 10px;
    font-size: 14px;
    border-left-width: 2px;
    box-shadow: none;
  }

  #supporting-experience {
    grid-template-columns: 1fr;
    gap: 5px;

    li {
      padding: 5px 10px;
      font-size: 12px;
      box-shadow: none;
    }
  }

  .address,
  .address span {
    font-size: 12px;
  }

  .references {
    padding: 10px;
    font-size: 12px;
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

// Jobs section cards - yellow/orange gradient
#header-jobs ~ ul.history li {
  background: linear-gradient(
    135deg,
    rgba(245, 183, 0, 0.04) 0%,
    rgba(245, 183, 0, 0.08) 50%,
    rgba(245, 183, 0, 0.04) 100%
  );
  border-left: 4px solid #f5b700;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 0 30px rgba(245, 183, 0, 0.03);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(245, 183, 0, 0.06) 0%,
      rgba(245, 183, 0, 0.12) 50%,
      rgba(245, 183, 0, 0.06) 100%
    );
    box-shadow:
      0 8px 24px rgba(245, 183, 0, 0.15),
      0 0 40px rgba(245, 183, 0, 0.1),
      inset 0 0 40px rgba(245, 183, 0, 0.05);
  }
}

ul.history li {
  padding: 12px;
  border-radius: 6px;
  opacity: 0;
  transform: translateY(20px) scale(0.98);
  overflow-wrap: break-word;
  word-wrap: break-word;
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
        0 0 10px rgba(245, 183, 0, 0.3),
        0 0 20px rgba(245, 183, 0, 0.15);
    }

    .resume li:hover & .title {
      text-shadow:
        0 0 15px rgba(245, 183, 0, 0.5),
        0 0 30px rgba(245, 183, 0, 0.25);
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

// Education section cards - pink gradient
#header-education ~ ul.history li {
  background: linear-gradient(
    135deg,
    rgba(220, 0, 115, 0.04) 0%,
    rgba(220, 0, 115, 0.08) 50%,
    rgba(220, 0, 115, 0.04) 100%
  );
  border-left: 4px solid #dc0073;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 0 30px rgba(220, 0, 115, 0.03);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(220, 0, 115, 0.06) 0%,
      rgba(220, 0, 115, 0.12) 50%,
      rgba(220, 0, 115, 0.06) 100%
    );
    box-shadow:
      0 8px 24px rgba(220, 0, 115, 0.15),
      0 0 40px rgba(220, 0, 115, 0.1),
      inset 0 0 40px rgba(220, 0, 115, 0.05);
  }

  h2 .title {
    color: var(--resume-education-color);
  }
}

@media only print {
  .history {
    gap: 10px;
  }

  ul.history li {
    padding: 10px;
    border-left-width: 2px;
    box-shadow: none;
    opacity: 1;
    transform: none;

    h2 {
      margin-bottom: 5px;
      font-size: 14px;

      .time-range {
        font-size: 12px;
      }
    }

    p {
      font-size: 12px;
    }
  }
}
</style>
