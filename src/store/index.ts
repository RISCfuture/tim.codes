import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import makeBioModule from '@/store/bio'
import { careers } from '@/store/data/bio'
import makeProjectsModule from '@/store/projects'
import { projects } from '@/store/data/projects'
import makeResumeModule from '@/store/resume'
import { education, jobs } from '@/store/data/resume'
import makeSocialModule from '@/store/social'
import { profiles } from '@/store/data/social'

Vue.use(Vuex)

const state: () => {} = () => ({})

const options: StoreOptions<{}> = {
  state,
  modules: {
    bio: makeBioModule(careers),
    projects: makeProjectsModule(projects),
    resume: makeResumeModule(jobs, education),
    social: makeSocialModule(profiles)
  }
}

export default new Vuex.Store(options)
