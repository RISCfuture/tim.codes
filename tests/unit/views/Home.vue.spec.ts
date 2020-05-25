import { shallowMount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import RouterMock from '../../support/mocks/RouterMock'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  let component: Wrapper<Home>
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
    it('shifts left when clicking a link left of the current page', () => {
      component = shallowMount(Home, {
        mocks: {
          ...mocks,
          $route: { name: 'projects' }
        },
        stubs: ['router-view']
      })
      component.vm.navigate({ name: 'home' })

      expect(routerMock.location).to.eql({ name: 'home' })
      expect(component.vm.transitionName).to.eql('shift-left')
    })

    it('shifts right when clicking a link right of the current page', () => {
      component = shallowMount(Home, {
        mocks: {
          ...mocks,
          $route: { name: 'projects' }
        },
        stubs: ['router-view']
      })
      component.vm.navigate({ name: 'resume' })

      expect(routerMock.location).to.eql({ name: 'resume' })
      expect(component.vm.transitionName).to.eql('shift-right')
    })
  })
})
