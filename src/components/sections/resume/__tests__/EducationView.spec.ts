import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EducationView from '../EducationView.vue'
import i18n from '@/i18n'
import { Degree, type Education } from '@/types/resume'

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
    const wrapper = mount(EducationView, {
      props: { education },
      global: {
        plugins: [i18n]
      }
    })

    expect(wrapper.text()).toEqual(
      'B.S., Computer Science and Physics Beloit College; Beloit, WI; 2001–2005'
    )
  })
})
