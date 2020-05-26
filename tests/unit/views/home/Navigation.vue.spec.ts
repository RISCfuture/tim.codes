import { shallowMount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import RouterMock from '../../../support/mocks/RouterMock'
import Navigation from '@/views/home/Navigation.vue'

describe('Navigation.vue', () => {
  let wrapper: Wrapper<Navigation>
  let routerMock: RouterMock
  let mocks: Record<string, unknown>

  beforeEach(() => {
    routerMock = new RouterMock()
    mocks = {
      $router: routerMock,
      $t: (key: string) => `translated: ${key}`
    }
  })

  describe('navigate', () => {
    it('shifts left when clicking a link left of the current page', async () => {
      wrapper = shallowMount(Navigation, {
        mocks: {
          ...mocks,
          $route: { name: 'projects' }
        },
        stubs: ['router-view']
      })
      wrapper.vm.navigate({ name: 'home' })

      await wrapper.vm.$nextTick()

      expect(routerMock.location).to.eql({ name: 'home' })
      expect(wrapper.emitted().setTransition).not.to.be.undefined
      expect(wrapper.emitted().setTransition![0]).to.eql(['shift-left'])
    })

    it('shifts right when clicking a link right of the current page', async () => {
      wrapper = shallowMount(Navigation, {
        mocks: {
          ...mocks,
          $route: { name: 'projects' }
        },
        stubs: ['router-view']
      })
      wrapper.vm.navigate({ name: 'resume' })

      await wrapper.vm.$nextTick()

      expect(routerMock.location).to.eql({ name: 'resume' })
      expect(wrapper.emitted().setTransition).not.to.be.undefined
      expect(wrapper.emitted().setTransition![0]).to.eql(['shift-right'])
    })
  })
})
