import { shallowMount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import Career from '@/views/home/Career.vue'

describe('Career.vue', () => {
  let component: Wrapper<Career>
  let career

  beforeEach(() => {
    career = {
      i18nKey: 'careerKey',
      accomplishments: [
        { i18nKey: 'accomplishment1', year: 2019 },
        { i18nKey: 'accomplishment2', year: 2020 }
      ],
      inline: true
    }
    component = shallowMount(Career, {
      propsData: { career },
      mocks: {
        $t: (key: string) => `translated: ${key}`
      }
    })
  })

  describe('category', () => {
    it('returns the localized category', () => {
      expect(component.vm.category).to.eql('translated: careerKey')
    })
  })

  describe('accomplishments', () => {
    it('returns the localized accomplishments', () => {
      expect(component.vm.accomplishments).to.eql([
        'translated: accomplishment1',
        'translated: accomplishment2'
      ])
    })
  })
})
