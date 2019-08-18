import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import useVuex from '../../support/useVuex'
import useI18n from '../../support/useI18n'
import Resume from '@/views/Resume.vue'
import { Degree, JobLocation } from '@/store/types/resume'
import makeResumeModule from '@/store/resume'

const jobs = [
  {
    identifier: 'amazon',
    startYear: 2005,
    endYear: 2006,
    location: JobLocation.SEATTLE
  },
  {
    identifier: 'tickle',
    startYear: 2006,
    endYear: 2007,
    location: JobLocation.SF
  }
]
const education = [
  {
    identifier: 'bs',
    degree: Degree.BS,
    concentrations: ['cs', 'physics'],
    institution: 'beloit',
    startYear: 2001,
    endYear: 2005
  },
  {
    identifier: 'ma',
    degree: Degree.BS,
    concentrations: ['cs', 'physics'],
    institution: 'beloit',
    startYear: 2005,
    endYear: 2008
  }
]

const localVue = createLocalVue()
const store = useVuex(localVue, {
  state() { return {} },
  modules: {
    resume: makeResumeModule(jobs, education)
  }
})
const i18n = useI18n(localVue)

describe('Resume.vue', () => {
  let component: Wrapper<Resume>

  beforeEach(() => {
    component = shallowMount(Resume, {
      propsData: { jobs, education },
      localVue,
      store,
      i18n
    })
  })

  describe('addressLine1', () => {
    it('returns the textual address line', () => {
      expect(component.vm.addressLine1).to
        .contain('94107 | USA')
    })
  })

  describe('addressLine2', () => {
    it('returns the textual address line', () => {
      expect(component.vm.addressLine2).to
        .contain(' | resume@timothymorgan.info')
    })
  })

  describe('accomplishments', () => {
    it('returns the list of accomplishments', () => {
      expect(component.vm.accomplishments).to.be.an('array').that.is.not.empty
    })
  })

  describe('supportingExperience', () => {
    it('returns the list', () => {
      expect(component.vm.supportingExperience).to.be.an('array').that.is.not.empty
    })
  })
})
