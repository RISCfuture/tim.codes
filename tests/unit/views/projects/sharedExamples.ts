import { shallowMount, VueClass, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import {
  Language,
  Library,
  Project,
  ProjectType,
  WebsiteType
} from '@/store/types/projects'
import AbstractProject from '@/views/projects/AbstractProject'

export default function itBehavesLikeAnAbstractProject<ComponentType extends AbstractProject>(
  componentType: VueClass<ComponentType>
) {
  describe('AbstractProject.vue', () => {
    let component: Wrapper<ComponentType>
    let project: Project

    beforeEach(() => {
      project = {
        type: ProjectType.APP,
        identifier: 'ident',
        websites: [{ type: WebsiteType.LIVE, url: 'https://test.host' }],
        languages: [Language.C],
        libraries: [Library.BOOTSTRAP],
        featured: true
      }

      component = shallowMount(componentType, {
        propsData: { project },
        mocks: {
          $t: (key: string) => `translated: ${key}`
        }
      })
    })

    describe('i18nData', () => {
      it('returns the localized data', () => {
        expect(component.vm.i18nData).to.eql('translated: projects.ident')
      })
    })

    describe('i18nType', () => {
      it('returns the localized type', () => {
        expect(component.vm.i18nType).to.eql('translated: project.type.app')
      })
    })

    describe('i18nLanguages', () => {
      it('returns the localized type', () => {
        expect(component.vm.i18nLanguages).to.eql(['translated: project.language.c'])
      })
    })

    describe('i18nLibraries', () => {
      it('returns the localized type', () => {
        expect(component.vm.i18nLibraries).to.eql(['translated: project.library.bootstrap'])
      })
    })

    describe('i18nWebsiteType', () => {
      it('returns the localized type', () => {
        expect(component.vm.i18nWebsiteType(WebsiteType.LIVE)).to.eql('translated: project.website_type.live')
      })
    })
  })
}
