import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NavigationView from '../NavigationView.vue'
import i18n from '@/i18n'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({ name: 'projects' })),
  useRouter: vi.fn(() => ({ push: vi.fn() }))
}))

describe('NavigationView', () => {
  it('shifts left when clicking a link left of the current page', () => {
    const wrapper = mount(NavigationView, {
      global: {
        plugins: [i18n]
      }
    })

    wrapper.find('[data-cy="menu-home"]').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('set-transition')
    expect(wrapper.emitted()['set-transition'][0]).toEqual(['shift-left'])
  })

  it('shifts right when clicking a link right of the current page', () => {
    const wrapper = mount(NavigationView, {
      global: {
        plugins: [i18n]
      }
    })

    wrapper.find('[data-cy="menu-resume"]').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('set-transition')
    expect(wrapper.emitted()['set-transition'][0]).toEqual(['shift-right'])
  })
})
