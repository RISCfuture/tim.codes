import { LocaleMessages } from 'vue-i18n'
import en from '@/i18n/strings/en'

const messages: LocaleMessages = { en, 'en-us': en }
// necessary because $te does not check fallbacks
export default messages
