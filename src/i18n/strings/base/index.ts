import { LocaleMessages } from 'vue-i18n'
import merge from 'lodash-es/merge'

import basePrivate from './private'

const base: LocaleMessages = {
  bio: {
    accomplishment: {
      web_dev: {
        omg: 'One Medical',
        square: 'Square',
        recurly: 'Recurly',
        scribd: 'Scribd'
      }
    }
  },
  social: {
    website: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      facebook: 'Facebook',
      youtube: 'YouTube',
      mixer: 'Mixer'
    }
  },
  projects: {
    '1ma': { name: 'One Mike Alpha' },
    avfacts: { name: 'AvFacts' },
    ranked: { name: 'Ranked.' },
    logtensafe: { name: 'LogTenSafe' },
    also: { name: 'also.fm' },
    find_or_create_on_scopes: { name: 'find_or_create_on_scopes' },
    configoro: { name: 'Configoro' },
    bad_behavior: { name: 'BadBehavior' },
    metar_decoder: { name: 'METAR Decoder' },
    unicode_scanner: { name: 'UnicodeScanner' },
    hearts: { name: 'Hearts' }
  },
  resume: {
    time_range: '{start}–{end}',
    address: {
      street: '',
      city: 'San Francisco, CA',
      zip: '',
      phone: '',
      email: 'resume@timothymorgan.info'
    },
    jobs: {
      header_format: '<span class="time-range">{timeRange}</span> <span class="title">{title}</span>, {company} ({location})',
      locations: {
        sf: 'San Francisco',
        seattle: 'Seattle'
      }
    },
    education: {
      format: '<span class="degree">{degree}, {concentration}</span> {institution}; {location}; {timeRange}',
      degree: {
        bs: 'B.S.'
      },
      institution: {
        beloit: {
          name: 'Beloit College',
          location: 'Beloit, WI'
        }
      }
    }
  }
}

export default merge({}, base, basePrivate)
