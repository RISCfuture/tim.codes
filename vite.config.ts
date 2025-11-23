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
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: true
  }
}

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => ({
  ...baseConfig,
  plugins: [
    ...(baseConfig.plugins || []),
    // Only use legacy plugin when building for production (not during Cypress/Vitest tests)
    // Disable if CYPRESS environment variable is set
    ...(command === 'build' && mode !== 'test' && !process.env.CYPRESS
      ? [
          legacy({
            targets: ['defaults', 'iOS >= 12', 'Safari >= 12']
          })
        ]
      : [])
  ]
}))
