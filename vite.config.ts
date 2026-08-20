import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { type Plugin, type UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

import { prerenderPaths } from './src/router/prerenderPaths.ts'

/**
 * Copies the built shell to `404.html` and to each client-side route, so the
 * server answers real routes with a 200 and everything else with a 404 instead
 * of handing the app to anything that asks.
 *
 * Routes are emitted flat (`projects.html`, not `projects/index.html`) because
 * Cloudflare's `auto-trailing-slash` serves the flat form at `/projects`
 * directly, while a directory makes it redirect to `/projects/` first.
 *
 * Runs in `closeBundle`, after VitePWA has written its precache manifest, which
 * keeps these duplicates out of the service worker.
 */
function emitRouteShells(outDir = 'dist'): Plugin {
  return {
    name: 'emit-route-shells',
    apply: 'build',
    enforce: 'post',
    closeBundle() {
      const shell = resolve(outDir, 'index.html')
      copyFileSync(shell, resolve(outDir, '404.html'))

      for (const path of prerenderPaths) {
        copyFileSync(shell, resolve(outDir, `${path.replace(/^\//, '')}.html`))
      }
    },
  }
}

// Base config shared with vitest
export const baseConfig: UserConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
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
