import VueI18n from 'vue-i18n'
import Vue from 'vue'
import en from '@/i18n/strings/en'

export default function useI18n(localVue: typeof Vue): VueI18n {
  localVue.use(VueI18n)
  return new VueI18n({
    locale: 'en',
    messages: { en }
  })
}
