import { shallowMount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import Career from '@/views/home/sections/bio/Career.vue'

describe('Career.vue', () => {
  let wrapper: Wrapper<Career>
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
    wrapper = shallowMount(Career, {
      propsData: { career },
      mocks: {
        $t: (key: string) => `translated: ${key}`
      }
    })
  })

  describe('category', () => {
    it('returns the localized category', () => {
      expect(wrapper.vm.category).to.eql('translated: careerKey')
    })
  })

  describe('accomplishments', () => {
    it('returns the localized accomplishments', () => {
      expect(wrapper.vm.accomplishments).to.eql([
        'translated: accomplishment1',
        'translated: accomplishment2'
      ])
    })
  })
})
