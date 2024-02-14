import { describe, expect, it, vi } from 'vitest'
import ResumeSection from '../ResumeSection.vue'
import i18n from '@/i18n'
import { createTestingPinia } from '@pinia/testing'
import { render, screen } from '@testing-library/vue'

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

      render(ResumeSection, {
        global: {
          plugins: [i18n, pinia]
        }
      })

      expect(screen.findByText('.address')).toBeTruthy()
      expect(screen.findByText('#supporting-experience')).toBeTruthy()
    })
  })
})
