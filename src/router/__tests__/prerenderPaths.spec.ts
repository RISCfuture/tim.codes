import { describe, expect, it } from 'vitest'

import router from '../index'
import { prerenderPaths } from '../prerenderPaths'

/**
 * Production serves unmatched paths as 404s rather than falling back to the
 * app, so a route without a static file behind it is unreachable by direct
 * navigation. The build emits those files from `prerenderPaths`; this keeps the
 * list honest when a route is added.
 */
describe('prerenderPaths', () => {
  it('covers every route the router declares', () => {
    const declared = router
      .getRoutes()
      .map(({ path }) => path)
      .filter((path) => path !== '/' && !path.includes(':') && !path.startsWith('/dev/'))

    expect(declared.toSorted()).toEqual(prerenderPaths.toSorted())
  })
})
