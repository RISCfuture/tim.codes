import Cldr from 'cldrjs'
import likelySubtags from 'cldr-data/supplemental/likelySubtags.json'
import listsEn from 'cldr-data/main/en/listPatterns.json'
import { initial, intersection, last } from 'lodash-es'
import VueI18n from './index'

const availableI18nLocales = VueI18n.availableLocales
const availableCLDRLocales = ['en']
const availableLocales = intersection(availableCLDRLocales, availableI18nLocales)
const CLDRLocale = availableLocales.includes(VueI18n.locale) ? VueI18n.locale : 'en'
// TODO: this isn't a perfect strategy; ideally we would match the CLDR locale to the (fallback?)
//  locale used for each particular translated string. but we don't have access to that information
//  on a call-by-call basis

interface CLDRStringPattern {
  start: string;
  middle: string;
  end: string;

  [count: string]: string;
}
Cldr.load(likelySubtags, listsEn)
const CLDR = new Cldr(CLDRLocale) // TODO add other locales as they are supported

function listConstantLength(template: string, items: string[]): string {
  let output = template
  items.forEach((item, index) => {
    output = output.replace(`{${index}}`, item)
  })
  return output
}

function listMiddle(items: string[], template: string): string {
  if (items.length === 1) return items[0]
  return template.replace('{0}', items[0]).replace('{1}', listMiddle(items.slice(1), template))
}

function listStartAndMiddle(
  items: string[],
  startTemplate: string,
  middleTemplate: string
): string {
  return startTemplate.
    replace('{0}', items[0]).
    replace('{1}', listMiddle(items.slice(1), middleTemplate))
}

// eslint-disable-next-line import/prefer-default-export
export function list(items: string[], type = 'standard'): string {
  if (items.length === 1) return items[0]

  const pattern: CLDRStringPattern = CLDR.main(`listPatterns/listPattern-type-${type}`)
      || CLDR.main('listPatterns/listPattern-type-standard')

  if (pattern[items.length.toString()]) {
    return listConstantLength(pattern[items.length.toString()], items)
  }

  const firstAndMiddle = listStartAndMiddle(
    initial(items),
    pattern.start,
    pattern.middle
  )
  return pattern.end.replace('{0}', firstAndMiddle).replace('{1}', last(items)!)
}
