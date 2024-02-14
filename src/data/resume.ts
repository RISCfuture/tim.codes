import { Degree, type Education, type Job, JobLocation } from '@/types/resume'

export const jobs: Job[] = [
  {
    identifier: 'amazon',
    startYear: 2005,
    endYear: 2006,
    location: JobLocation.SEATTLE,
    projects: []
  },
  {
    identifier: 'tickle',
    startYear: 2006,
    endYear: 2007,
    location: JobLocation.SF,
    projects: ['leo', 'filter']
  },
  {
    identifier: 'scribd',
    startYear: 2007,
    endYear: 2010,
    location: JobLocation.SF,
    projects: ['jumpfrog']
  },
  {
    identifier: 'recurly',
    startYear: 2010,
    endYear: 2012,
    location: JobLocation.SF,
    projects: ['gateway']
  },
  {
    identifier: 'square',
    startYear: 2012,
    endYear: 2018,
    location: JobLocation.SF,
    projects: ['squash', 'shuttle', 'other']
  },
  {
    identifier: 'OMG',
    startYear: 2019,
    endYear: 2020,
    location: JobLocation.SF,
    projects: []
  },
  {
    identifier: 'google',
    startYear: 2020,
    endYear: 2021,
    location: JobLocation.SF,
    projects: []
  },
  {
    identifier: 'trusted',
    startYear: 2021,
    endYear: 2022,
    location: JobLocation.SF,
    projects: ['messaging']
  },
  {
    identifier: 'occupier',
    startYear: 2022,
    endYear: 2024,
    location: JobLocation.SF,
    projects: []
  },
  {
    identifier: 'adept',
    startYear: 2024,
    endYear: null,
    location: JobLocation.SF,
    projects: []
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
