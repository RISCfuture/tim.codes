import i18n from '@/i18n'

export default function formatYear(year: number): string {
  return i18n.d(new Date(year, 1), 'yearOnly')
}
