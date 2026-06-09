/** The languages the site is translated into, keyed by primary language subtag. */
export const SUPPORTED_LOCALES = ['en', 'de', 'es', 'fr', 'ja', 'ru', 'zh'] as const

/** A locale the site ships translations for. */
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

/** The locale used when nothing else matches, and the source for fallback translations. */
export const DEFAULT_LOCALE = 'en' satisfies SupportedLocale

const STORAGE_KEY = 'locale'

/** The Open Graph locale tag (e.g. `fr_FR`) for each supported language. */
const openGraphLocales: Record<SupportedLocale, string> = {
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  ja: 'ja_JP',
  ru: 'ru_RU',
  zh: 'zh_CN',
}

/** Whether the given code is one of the supported locales. */
export function isSupportedLocale(code: string): code is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(code)
}

/** Maps a locale to its Open Graph locale tag, defaulting to US English. */
export function openGraphLocale(code: string): string {
  return openGraphLocales[isSupportedLocale(code) ? code : DEFAULT_LOCALE]
}

/**
 * Resolves an arbitrary BCP-47 language tag to a {@link SupportedLocale}. An
 * exact match wins; otherwise the first supported locale sharing the primary
 * subtag (e.g. `fr-CA` → `fr`) is used.
 *
 * @param tag A BCP-47 language tag such as `en-US`, `de`, or `fr-CA`.
 * @returns The best-matching supported locale, or `null` if none matches.
 */
export function matchLocale(tag: string): SupportedLocale | null {
  const normalized = tag.toLowerCase()
  const exact = SUPPORTED_LOCALES.find((locale) => locale.toLowerCase() === normalized)
  if (exact) return exact

  const primary = normalized.split('-')[0]
  return SUPPORTED_LOCALES.find((locale) => locale.toLowerCase().split('-')[0] === primary) ?? null
}

/**
 * Determines the locale to use: a persisted choice if one is set, then each of
 * the browser's preferred languages, then {@link DEFAULT_LOCALE}.
 */
export function detectLocale(): SupportedLocale {
  const stored = readStoredLocale()
  if (stored) return stored

  const languages = navigator.languages.length > 0 ? navigator.languages : [navigator.language]
  for (const tag of languages) {
    const matched = matchLocale(tag)
    if (matched) return matched
  }

  return DEFAULT_LOCALE
}

/** Reads a persisted locale choice, or `null` if none/unsupported/unavailable. */
function readStoredLocale(): SupportedLocale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? matchLocale(stored) : null
  } catch {
    // localStorage can throw in private-browsing / sandboxed contexts.
    return null
  }
}

/** Persists the chosen locale, ignoring storage failures. */
export function storeLocale(code: SupportedLocale): void {
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Ignore: persistence is best-effort.
  }
}

/**
 * The selectable options for the locale switcher, each labelled with its own
 * autonym (e.g. `Deutsch`, `Français`), which is the convention for language
 * pickers.
 */
export function localeOptions(): { value: SupportedLocale; label: string }[] {
  return SUPPORTED_LOCALES.map((locale) => ({ value: locale, label: autonym(locale) }))
}

function autonym(locale: SupportedLocale): string {
  const name = new Intl.DisplayNames([locale], {
    type: 'language',
    languageDisplay: 'standard',
  }).of(locale)
  if (!name) return locale
  // Intl returns lowercase autonyms in some languages (e.g. "français").
  return name.charAt(0).toLocaleUpperCase(locale) + name.slice(1)
}
