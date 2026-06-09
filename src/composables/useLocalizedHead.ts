import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { openGraphLocale } from '@/i18n/locales'

function setMetaContent(selector: string, content: string): void {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

/**
 * Keeps page-level metadata in sync with the active locale: the `<html lang>`
 * attribute, the meta/Open Graph/Twitter descriptions, and `og:locale`. Call
 * once from a root component.
 */
export function useLocalizedHead(): void {
  const { t, locale } = useI18n({ useScope: 'global' })

  watchEffect(() => {
    document.documentElement.lang = locale.value

    const description = t('meta.description')
    setMetaContent('meta[name="description"]', description)
    setMetaContent('meta[property="og:description"]', description)
    setMetaContent('meta[property="twitter:description"]', description)
    setMetaContent('meta[property="og:locale"]', openGraphLocale(locale.value))
  })
}
