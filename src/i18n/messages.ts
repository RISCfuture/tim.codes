import i18n from '@/i18n'
import { DEFAULT_LOCALE, detectLocale, type SupportedLocale } from '@/i18n/locales'
import type { DefaultLocaleMessageSchema, LocaleMessages } from 'vue-i18n'

type LocaleMessage = LocaleMessages<DefaultLocaleMessageSchema>

// Dynamic importers for the on-demand locales. `en` is omitted: it is the
// fallback and ships eagerly (see `index.ts`). Each entry becomes its own
// async chunk, loaded only when its language is selected.
const localeLoaders: Record<
  Exclude<SupportedLocale, typeof DEFAULT_LOCALE>,
  () => Promise<{ default: LocaleMessage }>
> = {
  de: () => import('@/i18n/strings/de'),
  es: () => import('@/i18n/strings/es'),
  fr: () => import('@/i18n/strings/fr'),
  ja: () => import('@/i18n/strings/ja'),
  ru: () => import('@/i18n/strings/ru'),
  zh: () => import('@/i18n/strings/zh'),
}

/**
 * Ensures the message bundle backing `locale` is loaded and registered. The
 * eager fallback (`en`) and any already-loaded locale resolve immediately;
 * others are fetched as a separate chunk.
 */
export async function loadLocaleMessages(locale: SupportedLocale): Promise<void> {
  if (locale === DEFAULT_LOCALE || i18n.global.availableLocales.includes(locale)) return

  const { default: messages } = await localeLoaders[locale]()
  i18n.global.setLocaleMessage(locale, messages)
}

/**
 * Loads the detected locale's messages, then activates it. Call once before
 * mounting so the first paint renders in the user's language rather than
 * flashing the English fallback.
 */
export async function setupI18n(): Promise<void> {
  const locale = detectLocale()
  await loadLocaleMessages(locale)
  i18n.global.locale.value = locale
}
