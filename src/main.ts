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
import { useThemeStore } from '@/stores/theme'

const app = createApp(App)

const sentryDSN = import.meta.env.VITE_SENTRY_DSN
Sentry.init({
  app,
  dsn: sentryDSN,
  sendDefaultPii: true,
  integrations: [
    Sentry.vueIntegration({
      tracingOptions: {
        trackComponents: true
      }
    }),
    Sentry.browserTracingIntegration({ router }),
    Sentry.replayIntegration()
  ],
  tracesSampleRate: 1.0,
  enableLogs: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
})

const pinia = createPinia()
pinia.use(createSentryPiniaPlugin())
app.use(pinia)

app.use(router)
app.use(i18n)

// Initialize theme before mounting
const themeStore = useThemeStore()
themeStore.initializeTheme()

app.mount('#app')
