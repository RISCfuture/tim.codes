import moment from 'moment'

export default function formatYear(year: number): string {
  return moment({ year }).format('YYYY')
}
