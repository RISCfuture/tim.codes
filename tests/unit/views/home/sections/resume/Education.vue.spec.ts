import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import useI18n from '../../../../../support/useI18n'
import Education from '@/views/home/sections/resume/Education.vue'
import * as Resume from '@/store/types/resume'
import { Degree } from '@/store/types/resume'

const localVue = createLocalVue()
const i18n = useI18n(localVue)

describe('Education.vue', () => {
  let wrapper: Wrapper<Education>
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
    wrapper = shallowMount(Education, {
      propsData: { education },
      localVue,
      i18n
    })
  })

  describe('content', () => {
    it('returns the textual content', () => {
      expect(wrapper.vm.content).to.
        eql('<span class="degree">B.S., Computer Science and Physics</span> '
          + 'Beloit College; Beloit, WI; 2001–2005')
    })
  })
})
