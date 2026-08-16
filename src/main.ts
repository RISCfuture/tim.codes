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
import { recoverFromPreloadErrors } from '@/utils/preloadRecovery'

recoverFromPreloadErrors()

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
    // Native in-app browsers (WKWebView wrappers) inject a bridge script that
    // calls `window.webkit.messageHandlers`; it throws when that handler is
    // absent. Not our code and unfixable here. Sentry TIM-DOT-CODES-8.
    /messageHandlers/u,
    // Microsoft's Outlook SafeLinks crawler rejects a promise from its own
    // injected instrumentation while previewing a link. It arrives without a
    // stacktrace from an Azure address, never from a visitor. Sentry
    // TIM-DOT-CODES-C.
    /Object Not Found Matching Id/u,
  ],
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
