import '@/assets/fonts/TitilliumWeb-Regular.ttf'
import '@/assets/fonts/TitilliumWeb-Italic.ttf'
import '@/assets/fonts/TitilliumWeb-SemiBold.ttf'
import '@/assets/fonts/TitilliumWeb-SemiBoldItalic.ttf'
import '@/assets/fonts/TitilliumWeb-Bold.ttf'
import '@/assets/fonts/Inter-Bold-slnt=0.ttf'
import '@/assets/fonts/Inter-Light-slnt=0.ttf'

import 'normalize.css/normalize.css'
import '@/assets/styles/fonts.scss'
import '@/assets/styles/layout.scss'
import '@/assets/styles/transitions.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Sentry from '@sentry/vue'
import { createSentryPiniaPlugin } from '@sentry/vue'

import App from './App.vue'
import router from './router'
import i18n from '@/i18n'
import { setupI18n } from '@/i18n/messages'

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- Vue app type mismatch with Sentry
const app = createApp(App)

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Vite env types are loosely typed
const sentryDSN: string = import.meta.env.VITE_SENTRY_DSN
Sentry.init({
  app,
  dsn: sentryDSN,
  sendDefaultPii: true,
  integrations: [
    Sentry.vueIntegration({
      tracingOptions: {
        trackComponents: true,
      },
    }),
    Sentry.browserTracingIntegration({ router }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  enableLogs: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  ignoreErrors: [
    // Browser-extension content scripts inject WebExtension messaging into
    // the page; their failures are not our code and are unfixable here.
    // Sentry TIM-DOT-CODES-6.
    /runtime\.sendMessage/u,
    // vite-plugin-pwa's injected SW registration throws InvalidStateError
    // when Chrome registers during prerender. No elegant in-plugin or
    // newer-version fix exists, so we filter the noise. Sentry
    // TIM-DOT-CODES-5.
    /Failed to register a ServiceWorker/u,
  ],
})

// Recover from stale-deploy chunk failures: after a redeploy, hashed assets
// referenced by an already-loaded page 404, and Vite emits `vite:preloadError`.
// Reload once to pick up the current index.html and assets; the sessionStorage
// guard prevents a reload loop if the asset is genuinely missing. Sentry
// TIM-DOT-CODES-7.
window.addEventListener('vite:preloadError', () => {
  if (sessionStorage.getItem('vitePreloadReloaded')) return
  sessionStorage.setItem('vitePreloadReloaded', 'true')
  window.location.reload()
})

const pinia = createPinia()
pinia.use(createSentryPiniaPlugin())
app.use(pinia)

app.use(router)
app.use(i18n)

// Load the active locale's strings before mounting so the first paint renders
// in the user's language (non-`en` locales are fetched as separate chunks).
await setupI18n()

app.mount('#app')

// A successful mount means the current assets loaded; clear the guard so a
// future stale-deploy `vite:preloadError` can reload again.
sessionStorage.removeItem('vitePreloadReloaded')
