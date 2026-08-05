/**
 * Client-side routes that need a static file in `dist` so a direct navigation
 * resolves server-side. The build emits a copy of the shell at each one, and a
 * router test keeps this list in step with the routes themselves.
 *
 * `/` is absent because `dist/index.html` already answers it.
 */
export const prerenderPaths = ['/projects', '/resume'] as const
