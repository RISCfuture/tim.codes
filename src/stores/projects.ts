import { defineStore } from 'pinia'
import { partition, shuffle } from 'lodash-es'
import { projects } from '@/data/projects'
import { type Project, ProjectCategory } from '@/types/projects'

function shuffledWithFeaturedFirst(sectionProjects: Project[]): Project[] {
  const [featured, minor] = partition(sectionProjects, 'featured')
  return [...shuffle(featured), ...shuffle(minor)]
}

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    sections: Object.values(ProjectCategory).map((category) => ({
      category,
      projects: shuffledWithFeaturedFirst(
        projects.filter((project) => project.category === category),
      ),
    })),
  }),
})
