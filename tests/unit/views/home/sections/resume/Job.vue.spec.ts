import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import useI18n from '../../../../../support/useI18n'
import Job from '@/views/home/sections/resume/Job.vue'
import * as Resume from '@/store/types/resume'
import { JobLocation } from '@/store/types/resume'

const localVue = createLocalVue()
const i18n = useI18n(localVue)

describe('Job.vue', () => {
  let wrapper: Wrapper<Job>
  let job: Resume.Job

  beforeEach(() => {
    job = {
      identifier: 'omg',
      startYear: 2019,
      endYear: 2020,
      location: JobLocation.SF
    }
    wrapper = shallowMount(Job, {
      propsData: { job },
      localVue,
      i18n
    })
  })

  describe('header', () => {
    it('returns the textual header', () => {
      expect(wrapper.vm.header).to.
        eql('<span class="time-range">2019–2020</span> <span class="title">'
          + 'Staff Software Engineer</span>, One Medical Group (San Francisco)')
    })
  })
})
