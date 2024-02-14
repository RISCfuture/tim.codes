import { describe, it, expect, vi } from 'vitest'
import ResumeSection from '../ResumeSection.vue'
import { mount } from '@vue/test-utils'
import i18n from '@/i18n'
import { createTestingPinia } from '@pinia/testing'

const resume = {
  jobs: [],
  education: []
}

describe('ResumeSection.vue', () => {
  describe('addressLine1', () => {
    it('returns a formatted address', () => {
      const pinia = createTestingPinia({
        initialState: { resume },
        createSpy: vi.fn
      })

      const wrapper = mount(ResumeSection, {
        global: {
          plugins: [i18n, pinia]
        }
      })

      expect(wrapper.get('.address').text()).toBeTruthy()
      expect(wrapper.get('#supporting-experience').text()).toBeTruthy()
    })
  })
})
