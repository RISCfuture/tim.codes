import messages from '@/i18n/messages'
import { createI18n } from 'vue-i18n'
import datetimeFormats from '@/i18n/datetimeFormats'

export default createI18n({
  locale: navigator.language,
  legacy: false,
  globalInjection: false,
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  messages,
  datetimeFormats
})
