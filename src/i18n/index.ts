import Vue from 'vue'
import VueI18n from 'vue-i18n'

import messages from '@/i18n/messages'
import dateTimeFormats from '@/i18n/dateTimeFormats'

Vue.use(VueI18n)

export default new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages,
  dateTimeFormats
})
