// Mock localStorage for tests
const localStorageMock = {
  getItem: function (key: string): string | null {
    return this[key] || null
  },
  setItem: function (key: string, value: string) {
    this[key] = value
  },
  removeItem: function (key: string) {
    delete this[key]
  },
  clear: function () {
    const keys = Object.keys(this)
    keys.forEach((key) => {
      if (typeof this[key] !== 'function') {
        delete this[key]
      }
    })
  }
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
})

// Mock window.matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true
  })
})

// Mock IntersectionObserver for tests
global.IntersectionObserver = class IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []

  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit
  ) {}

  observe() {
    // Mock implementation - do nothing
  }

  unobserve() {
    // Mock implementation - do nothing
  }

  disconnect() {
    // Mock implementation - do nothing
  }

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}
