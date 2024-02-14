import { describe, expect, it } from 'vitest'
import i18n from '@/i18n'
import JobView from '../JobView.vue'
import { type Job, JobLocation } from '@/types/resume'
import { render, screen } from '@testing-library/vue'

const job: Job = {
  identifier: 'amazon',
  startYear: 2005,
  endYear: 2006,
  location: JobLocation.SEATTLE,
  projects: []
}

describe('JobView.vue', () => {
  it('renders', () => {
    render(JobView, {
      props: { job },
      global: {
        plugins: [i18n]
      }
    })

    expect(
      screen.findByText('2005–2006 Software Development Engineer II, Amazon.com (Seattle)')
    ).toBeTruthy()
  })
})
