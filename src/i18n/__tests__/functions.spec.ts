import { describe, it, expect } from 'vitest'
import { list } from '../functions'

describe('list', () => {
  it('returns a localized list', () => {
    expect(list(['one', 'two', 'three'])).toEqual('one, two, and three')
    expect(list(['one', 'two'])).toEqual('one and two')
  })
})
