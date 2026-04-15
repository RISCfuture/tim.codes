import { fileURLToPath, URL } from 'node:url'

import { type UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import legacy from '@vitejs/plugin-legacy'

// Base config shared with vitest
export const baseConfig: UserConfig = {
  plugins: [vue(), vueDevTools({ launchEditor: 'rubymine' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
  },
}

// https://vite.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const buildPlugins = []

  if (command === 'build' && mode !== 'test' && !process.env.CYPRESS) {
    buildPlugins.push(
      legacy({
        targets: ['defaults', 'iOS >= 12', 'Safari >= 12'],
      }),
    )
  }

  // Inject a Content-Security-Policy <meta> tag at build time.
  // Skipped in dev to avoid breaking Vite HMR / Vue DevTools.
  // Loaded via dynamic import (and wrapped in try/catch) so tools that
  // probe this config under CJS (e.g. knip via jiti) don't blow up on
  // the plugin's ESM-only `exports` field. The real Vite build always
  // runs via ESM so the import succeeds there.
  if (command === 'build') {
    try {
      const { default: csp } = await import('vite-plugin-csp-guard')
      buildPlugins.push(
        csp({
          dev: { run: false },
          build: { sri: false },
          policy: {
            'default-src': ["'self'"],
            'script-src': ["'self'"],
            'style-src': ["'self'"],
            'style-src-attr': ["'unsafe-inline'"], // covers Vue :style bindings
            'img-src': ["'self'", 'data:', 'blob:'],
            'font-src': ["'self'"],
            'connect-src': [
              "'self'",
              'https://*.ingest.sentry.io',
              'https://*.sentry.io',
            ],
            'worker-src': ["'self'", 'blob:'], // Sentry Replay worker
            'child-src': ["'self'", 'blob:'], // Safari <=15.4 fallback
            'object-src': ["'none'"],
            'base-uri': ["'self'"],
            'form-action': ["'self'"],
          },
        }),
      )
    } catch (err) {
      // Static-analysis tools (knip) invoke this config under CJS and
      // cannot resolve the plugin's ESM-only exports; swallow that error
      // so those tools keep working. Re-throw anything unexpected so the
      // actual build still fails loudly on real problems.
      const msg = err instanceof Error ? err.message : String(err)
      if (!msg.includes('No "exports" main defined')) throw err
    }
  }

  return {
    ...baseConfig,
    plugins: [...(baseConfig.plugins || []), ...buildPlugins],
  }
})
