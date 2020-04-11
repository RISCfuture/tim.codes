import { expect, use } from 'chai'

import chaiEach from 'chai-each'

import getter from '../../support/vuexGetters'
import {
  Language,
  Library, Project,
  ProjectType,
  WebsiteType
} from '@/store/types/projects'
import makeProjectsModule, { ProjectsState } from '@/store/projects'

use(chaiEach)

const projects: Project[] = [
  {
    type: ProjectType.WEBSITE,
    identifier: '1ma',
    websites: [
      {
        url: 'https://github.com/RISCfuture/OneMikeAlpha',
        type: WebsiteType.SOURCE
      },
      {
        url: 'https://github.com/RISCfuture/1MA-Avidyne-R9-Data-Loader',
        type: WebsiteType.SOURCE
      }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS, Language.C],
    libraries: [Library.RAILS, Library.VUEJS],
    featured: true
  },
  {
    type: ProjectType.TOOL,
    identifier: 'metar_decoder',
    websites: [
      {
        url: 'https://github.com/RISCfuture/METAR-Decoder',
        type: WebsiteType.SOURCE
      }
    ],
    languages: [Language.OBJECTIVE_C],
    libraries: [],
    featured: false
  }
]
const module = makeProjectsModule(projects)

describe('Vuex: Projects', () => {
  context('[getters]', () => {
    let featuredProjects: () => Project[]
    let minorProjects: () => Project[]

    beforeEach(() => {
      featuredProjects = getter<ProjectsState, Project[]>(module, 'featuredProjects')
      minorProjects = getter<ProjectsState, Project[]>(module, 'minorProjects')
    })

    describe('featuredProjects', () => {
      it('returns featured projects', () => {
        expect(featuredProjects()).to.each.have.property('featured').that.equals(true)
      })
    })

    describe('minorProjects', () => {
      it('returns minor projects', () => {
        expect(minorProjects()).to.each.have.property('featured').that.equals(false)
      })
    })
  })
})
