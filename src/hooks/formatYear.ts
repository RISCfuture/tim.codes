import { useI18n } from 'vue-i18n'

export default function useFormatYear() {
  const { d } = useI18n()

  return (year: number) => d(new Date(year, 1), { year: 'numeric' })
}
