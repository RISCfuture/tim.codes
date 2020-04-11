import { expect } from 'chai'
import getter from '../../support/vuexGetters'
import {
  Degree,
  Education,
  Job,
  JobLocation
} from '@/store/types/resume'
import makeResumeModule, { ResumeState } from '@/store/resume'

const jobs: Job[] = [
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
const education: Education[] = [
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
const resume = makeResumeModule(jobs, education)

describe('Vuex: Resume', () => {
  context('[getters]', () => {
    let getJobs: () => Job[]
    let getEducation: () => Education[]

    beforeEach(() => {
      getJobs = getter<ResumeState, Job[]>(resume, 'jobs')
      getEducation = getter<ResumeState, Education[]>(resume, 'education')
    })

    describe('jobs', () => {
      it('returns jobs by end year', () => {
        expect(getJobs().map(j => j.endYear)).to.eql([2007, 2006])
      })
    })

    describe('education', () => {
      it('returns degrees by end year', () => {
        expect(getEducation().map(j => j.endYear)).to.eql([2008, 2005])
      })
    })
  })
})
