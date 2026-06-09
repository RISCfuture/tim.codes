import en from '@/i18n/datetimeFormats/en'
import type { SupportedLocale } from '@/i18n/locales'

// The format options are locale-independent; `Intl` localizes the output per
// locale (e.g. `ja`/`zh` render the year with 年). Each supported language
// reuses the same option set.
const datetimeFormats: Record<SupportedLocale, Record<string, Intl.DateTimeFormatOptions>> = {
  en,
  de: en,
  es: en,
  fr: en,
  ja: en,
  ru: en,
  zh: en,
}
export default datetimeFormats
