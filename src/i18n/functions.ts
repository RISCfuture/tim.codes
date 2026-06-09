import i18n from './index'

const listTypes: Record<string, Intl.ListFormatType | undefined> = {
  standard: 'conjunction',
  or: 'disjunction',
  unit: 'unit',
}

const listStyles: Record<string, Intl.ListFormatStyle | undefined> = {
  short: 'short',
  narrow: 'narrow',
}

/**
 * Joins items into a localized, human-readable list (e.g. "one, two, and
 * three") in the active locale. `type` accepts CLDR list-pattern names —
 * `standard`, `or`, or `unit`, optionally suffixed with `-short` or `-narrow`
 * (e.g. `standard-narrow`).
 */
export function list(items: string[], type = 'standard'): string {
  const [base = '', style = ''] = type.split('-')
  return new Intl.ListFormat(i18n.global.locale.value, {
    type: listTypes[base] ?? 'conjunction',
    style: listStyles[style] ?? 'long',
  }).format(items)
}
