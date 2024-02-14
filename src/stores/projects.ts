import { defineStore } from 'pinia'
import { projects } from '@/data/projects'

export const useProjectsStore = defineStore('projects', {
  state: () => ({ projects }),

  getters: {
    featuredProjects: (state) => state.projects.filter((project) => project.featured),
    minorProjects: (state) => state.projects.filter((project) => !project.featured)
  }
})
