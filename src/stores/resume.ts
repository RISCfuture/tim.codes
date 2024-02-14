import { defineStore } from 'pinia'
import type { TimeRanged } from '@/types/resume'
import { education, jobs } from '@/data/resume'

function byEndYear(a: TimeRanged, b: TimeRanged) {
  if (a.startYear === b.startYear) {
    if (!b.endYear && a.endYear) return -1 // b is ongoing, should come first
    if (b.endYear && !a.endYear) return 1 // a is ongoing, should come first
    return 0 // both ongoing
  }
  return b.startYear - a.startYear // sort descending by start year
}

export const useResumeStore = defineStore('resume', {
  state: () => ({ jobs, education }),

  getters: {
    sortedJobs: (state) => state.jobs.sort(byEndYear),
    sortedEducation: (state) => state.education.sort(byEndYear)
  }
})
