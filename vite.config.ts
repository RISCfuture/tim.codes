import { fileURLToPath, URL } from 'node:url'

import { type UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

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
export default defineConfig(({ command, mode }) => {
  const buildPlugins = []

  if (command === 'build' && mode !== 'test' && !process.env.CYPRESS) {
    buildPlugins.push(
      VitePWA({
        registerType: 'autoUpdate',
        manifest: false,
        injectRegister: 'script',
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest,woff,woff2}'],
          navigateFallback: 'index.html',
          navigateFallbackDenylist: [/^\/api/, /\.map$/],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
        },
      }),
    )
  }

  return {
    ...baseConfig,
    plugins: [...(baseConfig.plugins || []), ...buildPlugins],
  }
})
