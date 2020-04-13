import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import useI18n from '../../../support/useI18n'
import Education from '@/views/resume/Education.vue'
import * as Resume from '@/store/types/resume'
import { Degree } from '@/store/types/resume'

const localVue = createLocalVue()
const i18n = useI18n(localVue)

describe('Education.vue', () => {
  let component: Wrapper<Education>
  let education: Resume.Education

  beforeEach(() => {
    education = {
      identifier: 'bs',
      degree: Degree.BS,
      concentrations: ['cs', 'physics'],
      institution: 'beloit',
      startYear: 2001,
      endYear: 2005
    }
    component = shallowMount(Education, {
      propsData: { education },
      localVue,
      i18n
    })
  })

  describe('content', () => {
    it('returns the textual content', () => {
      expect(component.vm.content).to.
        eql('<span class="degree">B.S., Computer Science and Physics</span> '
          + 'Beloit College; Beloit, WI; 2001–2005')
    })
  })
})
