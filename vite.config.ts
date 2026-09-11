import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { type Plugin, type Rollup, type UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

import { prerenderPaths } from './src/router/prerenderPaths.ts'

/**
 * Lazily-loaded components each shell's own route renders, keyed by the file that serves it. The
 * router reaches these through dynamic imports, so nothing in the entry HTML points at them until
 * the app has booted and resolved the route.
 */
const routeComponents: Record<string, string[]> = {
  'index.html': ['views/HomeView.vue', 'components/sections/BioSection.vue'],
  'projects.html': ['views/HomeView.vue', 'components/sections/ProjectsSection.vue'],
  'resume.html': ['views/HomeView.vue', 'components/sections/ResumeSection.vue'],
  '404.html': ['views/NotFoundView.vue'],
}

// Wraps the preload tags one shell carries so the copies can swap in their own.
const ROUTE_PRELOADS = '<!--route-preloads-->'

/**
 * Copies the built shell to `404.html` and to each client-side route, so the server answers real
 * routes with a 200 and everything else with a 404 instead of handing the app to anything that
 * asks. Each copy carries a `modulepreload` for its own route's chunks, which starts those
 * downloads alongside the entry bundle rather than a round trip later, once the router has run.
 *
 * Routes are emitted flat (`projects.html`, not `projects/index.html`) because Cloudflare's
 * `auto-trailing-slash` serves the flat form at `/projects` directly, while a directory makes it
 * redirect to `/projects/` first.
 *
 * The copies are made in `closeBundle`, after VitePWA has written its precache manifest, which
 * keeps these duplicates out of the service worker. `index.html` itself is finished earlier, in
 * `transformIndexHtml`, so that the manifest records the bytes actually served at `/`.
 */
function emitRouteShells(outDir = 'dist'): Plugin {
  const preloadTags = new Map<string, string>()
  let base = '/'

  return {
    name: 'emit-route-shells',
    apply: 'build',
    enforce: 'post',

    configResolved(config) {
      base = config.base
    },

    transformIndexHtml: {
      order: 'post',
      handler(html, { bundle }) {
        if (!bundle) return html

        for (const [shell, components] of Object.entries(routeComponents)) {
          preloadTags.set(shell, modulePreloads(routeChunks(bundle, components), html, base))
        }

        return html.replace('</head>', `${wrapPreloads(preloadTags.get('index.html'))}</head>`)
      },
    },

    closeBundle() {
      const shell = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      const copies = ['404.html', ...prerenderPaths.map((path) => `${path.slice(1)}.html`)]

      for (const copy of copies) {
        writeFileSync(resolve(outDir, copy), withPreloadsFor(shell, copy), 'utf8')
      }
    },
  }

  function withPreloadsFor(shell: string, copy: string): string {
    const tags = wrapPreloads(preloadTags.get(copy))
    const marked = new RegExp(`${ROUTE_PRELOADS}[\\s\\S]*?${ROUTE_PRELOADS}`, 'u')

    return marked.test(shell) ? shell.replace(marked, tags) : shell
  }
}

function wrapPreloads(tags = ''): string {
  return `${ROUTE_PRELOADS}${tags}${ROUTE_PRELOADS}`
}

/**
 * Names every chunk the given components need, dependencies first, so a browser reading the tags
 * top to bottom starts the deepest fetches soonest.
 */
function routeChunks(bundle: Rollup.OutputBundle, components: string[]): string[] {
  const chunks = Object.values(bundle).filter(isChunk)
  const visited = new Set<string>()
  const ordered: string[] = []

  function collect(chunk: Rollup.OutputChunk): void {
    if (visited.has(chunk.fileName)) return
    visited.add(chunk.fileName)

    for (const name of chunk.imports) {
      const dependency = bundle[name]
      if (dependency && isChunk(dependency)) collect(dependency)
    }

    ordered.push(chunk.fileName)
  }

  for (const component of components) {
    const chunk = chunks.find(({ facadeModuleId }) => facadeModuleId?.endsWith(component))
    if (chunk) collect(chunk)
  }

  return ordered
}

function isChunk(output: Rollup.OutputAsset | Rollup.OutputChunk): output is Rollup.OutputChunk {
  return output.type === 'chunk'
}

/** Preload tags for the chunks the shell doesn't already load, matching Vite's own markup. */
function modulePreloads(fileNames: string[], html: string, base: string): string {
  return fileNames
    .filter((fileName) => !html.includes(fileName))
    .map((fileName) => `<link rel="modulepreload" crossorigin href="${base}${fileName}">`)
    .join('')
}

// Base config shared with vitest
export const baseConfig: UserConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // vue-i18n's bundler build reads these to tree-shake what this app can't reach: the Options API
  // (`createI18n` runs with `legacy: false`), the global component and `v-t` directive
  // registrations `app.use` would add, and the production devtools hook. The two components that
  // render `<i18n-t>` import `I18nT` themselves, which keeps it out of the entry chunk.
  //
  // `__INTLIFY_DROP_MESSAGE_COMPILER__` stays off. Dropping the compiler needs message catalogs
  // pre-compiled to AST, which only `@intlify/unplugin-vue-i18n` produces; the plain string
  // catalogs in `src/i18n/strings` would throw "unhandled node type" on every lookup.
  define: {
    __INTLIFY_JIT_COMPILATION__: 'true',
    __INTLIFY_DROP_MESSAGE_COMPILER__: 'false',
    __VUE_I18N_FULL_INSTALL__: 'false',
    __VUE_I18N_LEGACY_API__: 'false',
    __INTLIFY_PROD_DEVTOOLS__: 'false',
  },
  build: {
    sourcemap: 'hidden',
  },
}

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const buildPlugins = []

  if (command === 'build' && mode !== 'test' && !process.env.CYPRESS) {
    buildPlugins.push(
      VitePWA({
        registerType: 'autoUpdate',
        manifest: false,
        injectRegister: false,
        workbox: {
          // Bundle the Workbox runtime into `sw.js`. Loading it as a separate
          // chunk makes the worker reach for `importScripts` and `script.src`,
          // both Trusted Types sinks, which violates the
          // `require-trusted-types-for 'script'` directive the site reports on.
          // Sentry TIM-DOT-CODES-A.
          inlineWorkboxRuntime: true,
          globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest,woff,woff2}'],
          navigateFallback: 'index.html',
          navigateFallbackDenylist: [/^\/api/, /\.map$/],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
        },
      }),
      emitRouteShells(),
    )
  }

  return {
    ...baseConfig,
    plugins: [
      ...(baseConfig.plugins || []),
      command === 'serve' && vueDevTools({ launchEditor: process.env.VITE_LAUNCH_EDITOR }),
      ...buildPlugins,
    ].filter(Boolean),
  }
})
