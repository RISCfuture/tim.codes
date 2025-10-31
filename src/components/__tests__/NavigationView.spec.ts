import { describe, expect, it, vi } from 'vitest'
import NavigationView from '../NavigationView.vue'
import i18n from '@/i18n'
import { fireEvent, render, screen } from '@testing-library/vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(function () {
    return { name: 'projects' }
  }),
  useRouter: vi.fn(function () {
    return { push: vi.fn() }
  })
}))

describe('NavigationView', () => {
  it('shifts left when clicking a link left of the current page', async () => {
    const { emitted } = render(NavigationView, {
      global: {
        plugins: [i18n]
      }
    })

    const homeTab = screen.getByRole('link', { name: 'Home' })
    console.log(homeTab.textContent)
    await fireEvent.click(homeTab)

    expect(emitted()).toHaveProperty('set-transition')
    expect(emitted()['set-transition']![0]).toEqual(['shift-left'])
  })

  it('shifts right when clicking a link right of the current page', async () => {
    const { emitted } = render(NavigationView, {
      global: {
        plugins: [i18n]
      }
    })

    const homeTab = screen.getByRole('link', { name: 'Résumé' })
    await fireEvent.click(homeTab)

    expect(emitted()).toHaveProperty('set-transition')
    expect(emitted()['set-transition']![0]).toEqual(['shift-right'])
  })
})
