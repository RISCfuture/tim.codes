import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import i18n from '@/i18n'
import JobView from '../JobView.vue'
import { type Job, JobLocation } from '@/types/resume'

const job: Job = {
  identifier: 'amazon',
  startYear: 2005,
  endYear: 2006,
  location: JobLocation.SEATTLE,
  projects: []
}

describe('JobView.vue', () => {
  it('renders', () => {
    const wrapper = mount(JobView, {
      props: { job },
      global: {
        plugins: [i18n]
      }
    })

    expect(wrapper.text()).toContain(
      '2005–2006 Software Development Engineer II, Amazon.com (Seattle)'
    )
  })
})
