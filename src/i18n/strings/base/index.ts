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
    icrashedmyplane: { name: 'I Crashed My Plane' },
    learnmorsecode: { name: 'Learn Morse Code' },
    ranked: { name: 'Ranked.' },
    logtensafe: { name: 'LogTenSafe' },
    bad_behavior: { name: 'BadBehavior' },
    metar_decoder: { name: 'METAR Decoder' },
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
