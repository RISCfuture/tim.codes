import en from '@/i18n/strings/en'
import { createI18n } from 'vue-i18n'
import datetimeFormats from '@/i18n/datetimeFormats'

// Only the fallback locale (`en`) ships in the initial bundle. Every other
// locale is fetched on demand via `loadLocaleMessages` in `messages.ts`, so
// unused languages don't weigh down first load. The active locale is resolved
// and loaded by `setupI18n` before the app mounts.
export default createI18n({
  locale: 'en',
  legacy: false,
  globalInjection: false,
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  messages: { en },
  datetimeFormats,
})
