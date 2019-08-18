import { GetterTree, Module } from 'vuex'
import { Education, Job, TimeRanged } from '@/store/types/resume'

export interface ResumeState {
  jobs: Job[];
  education: Education[];
}

export default function makeResumeModule(
  jobs: Job[],
  education: Education[]
): Module<ResumeState, {}> {
  const state: () => ResumeState = () => ({ jobs, education })

  function byEndYear(a: TimeRanged, b: TimeRanged) {
    if (a.startYear === b.startYear) {
      if (!b.endYear && a.endYear) return -1 // b is ongoing, should come first
      if (b.endYear && !a.endYear) return 1 // a is ongoing, should come first
      return 0 // both ongoing
    }
    return b.startYear - a.startYear // sort descending by start year
  }

  const getters: GetterTree<ResumeState, {}> = {
    jobs(s: ResumeState): Job[] {
      return s.jobs.sort(byEndYear)
    },

    education(s: ResumeState): Education[] {
      return s.education.sort(byEndYear)
    }
  }

  return { state, getters }
}
