import { GetterTree, Module } from 'vuex'
import { Project } from '@/store/types/projects'
import RootState from '@/store/root'

export interface ProjectsState {
  projects: Project[];
}

export default function makeProjectsModule(projects: Project[]): Module<ProjectsState, RootState> {
  const state: () => ProjectsState = () => ({ projects })

  const getters: GetterTree<ProjectsState, RootState> = {
    featuredProjects(s: ProjectsState): Project[] {
      return s.projects.filter(p => p.featured)
    },
    minorProjects(s: ProjectsState): Project[] {
      return s.projects.filter(p => !p.featured)
    }
  }

  return { state, getters }
}
