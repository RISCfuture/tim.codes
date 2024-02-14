import { describe, expect, it } from 'vitest'
import EducationView from '../EducationView.vue'
import i18n from '@/i18n'
import { Degree, type Education } from '@/types/resume'
import { render, screen } from '@testing-library/vue'

const education: Education = {
  identifier: 'bs',
  degree: Degree.BS,
  concentrations: ['cs', 'physics'],
  institution: 'beloit',
  startYear: 2001,
  endYear: 2005
}

describe('EducationView.vue', () => {
  it('renders', () => {
    render(EducationView, {
      props: { education },
      global: {
        plugins: [i18n]
      }
    })

    expect(
      screen.findByText('B.S., Computer Science and Physics Beloit College; Beloit, WI; 2001–2005')
    ).toBeTruthy()
  })
})
