import { defineStore } from 'pinia'
import { projects } from '@/data/projects'

export const useProjectsStore = defineStore('projects', {
  state: () => ({ projects }),

  getters: {
    tradCodedFeatured: (state) =>
      state.projects.filter((project) => !project.vibeCoded && project.featured),
    tradCodedMinor: (state) =>
      state.projects.filter((project) => !project.vibeCoded && !project.featured),
    vibeCodedFeatured: (state) =>
      state.projects.filter((project) => project.vibeCoded && project.featured),
    vibeCodedMinor: (state) =>
      state.projects.filter((project) => project.vibeCoded && !project.featured),
  },
})
