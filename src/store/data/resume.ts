import {
  Degree, Education, Job, JobLocation
} from '@/store/types/resume'

export const jobs: Job[] = [
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
  },
  {
    identifier: 'scribd',
    startYear: 2007,
    endYear: 2010,
    location: JobLocation.SF
  },
  {
    identifier: 'recurly',
    startYear: 2010,
    endYear: 2012,
    location: JobLocation.SF
  },
  {
    identifier: 'square',
    startYear: 2012,
    endYear: 2018,
    location: JobLocation.SF
  },
  {
    identifier: 'omg', startYear: 2019, endYear: 2020, location: JobLocation.SF
  }
]

export const education: Education[] = [
  {
    identifier: 'bs',
    degree: Degree.BS,
    concentrations: ['cs', 'physics'],
    institution: 'beloit',
    startYear: 2001,
    endYear: 2005
  }
]
