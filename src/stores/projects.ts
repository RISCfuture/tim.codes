import { defineStore } from 'pinia'
import { partition, shuffle } from 'lodash-es'
import { projects } from '@/data/projects'
import type { Project } from '@/types/projects'

function shuffledWithFeaturedFirst(sectionProjects: Project[]): Project[] {
  const [featured, minor] = partition(sectionProjects, 'featured')
  return [...shuffle(featured), ...shuffle(minor)]
}

export const useProjectsStore = defineStore('projects', {
  state: () => {
    const [vibeCoded, tradCoded] = partition(projects, 'vibeCoded')
    return {
      vibeCoded: shuffledWithFeaturedFirst(vibeCoded),
      tradCoded: shuffledWithFeaturedFirst(tradCoded),
    }
  },
})
