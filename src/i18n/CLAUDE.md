# i18n — Translation directives

This site is fully localized with vue-i18n. Every new or modified user-facing
string must be localized into all supported locales.

Supported locales: `en` (base locale) plus `de`, `es`, `fr`, `ja`, `ru`,
`zh` (Simplified). Locales are keyed by primary language subtag;
`detectLocale()` in `locales.ts` matches a stored preference and then each of
the browser's preferred languages (e.g. `fr-FR` → `fr`), and a footer switcher
(`LocaleSwitcher.vue`, labelled with `Intl.DisplayNames` autonyms via
`localeOptions()`) lets users override the browser default.

## Where strings live

- `strings/base/index.ts` — locale-agnostic values shared by every locale
  (proper nouns: company/project/library/language/institution names, plus
  format templates). Don't translate these.
- `strings/en/index.ts` — the English source of truth and the canonical key
  structure. Add new keys here first.
- `strings/<locale>/index.ts` — each non-English locale mirrors the `en`
  structure, `import en from '../en'`, and `export default merge({}, en, <locale>)`.
  The `merge` backfills personal/base data and any untranslated keys, so a
  missing translation falls back to English rather than breaking.

When you add a string: add it to `en`, then add the translation to all other
locale files. When you add a whole locale, add it to `SUPPORTED_LOCALES` in
`locales.ts`; the compiler then forces matching entries in `messages.ts`
(`localeLoaders`) and `datetimeFormats.ts`.

## How to translate

- **Keep aviation and technical jargon in English** unless there is a
  widely-used, standard native equivalent that real practitioners use. Don't
  over-reach. When unsure, search the web (forums, blogs, and the target
  country's civil-aviation authority) for real-world usage before translating.
  Protocol/file-format acronyms (METAR, CSV, NMEA, etc.) usually stay English.
- **Don't misattribute credential-issuing authorities.** Tim holds **FAA (US)**
  pilot certificates. Translating a certificate to the local standard term
  (e.g. German "Verkehrspilot", French "Pilote de ligne") wrongly implies an
  LBA/DGAC/EASA-issued licence. Attribute these to the FAA — "FAA ATP",
  "FAA CPL", "FAA CFI", or the researched local convention for denoting a US
  credential — or keep the English. The same caution applies to any
  authority-specific credential.
- **Proper nouns stay in English**: the name "Tim Morgan", company/product/
  library/language names, institutions.
- **Job titles stay in English** by default (e.g. "Staff Software Engineer",
  "Founding Software Engineer", "Software Development Engineer II"). Only
  translate a title if it maps cleanly and unambiguously; keep the résumé's
  titles internally consistent rather than mixing languages.
- **Preserve every interpolation placeholder** exactly (`{year}`, `{link}`,
  `{start}`, `{timeRange}`, etc.) and keep arrays (`achievements`,
  `supportingExperience.content`) at the same length.
- **Don't embed list conjunctions** ("and"/"et"/"、") inside strings —
  multi-item lists are joined at runtime by the `Intl.ListFormat`-based
  `list()` helper in `functions.ts`.
- **Mind layout for length-variant locales.** Navigation labels and the bio
  "category badges" are space-constrained; German and Russian run long, CJK is
  compact. Prefer concise standard terms and verify the rendered page (run
  `pnpm dev` and switch locales via the footer switcher) when a translation's
  length differs greatly from English — check mobile widths too.
