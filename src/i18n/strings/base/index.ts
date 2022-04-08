/* eslint-disable import/extensions,import/no-unresolved */

import { LocaleMessages } from 'vue-i18n'
import merge from 'lodash-es/merge'

import basePrivate from './private'

const base: LocaleMessages = {
  bio: {
    accomplishment: {
      web_dev: {
        amazon: 'Amazon',
        google: 'Google',
        omg: 'One Medical',
        recurly: 'Recurly',
        scribd: 'Scribd',
        square: 'Square',
        tickle: 'Tickle.com',
        trusted: 'Trusted Health'
      }
    }
  },
  social: {
    website: {
      facebook: 'Facebook',
      github: 'GitHub',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      quora: 'Quora',
      twitch: 'Twitch',
      twitter: 'Twitter',
      youtube: 'YouTube'
    }
  },
  projects: {
    '1ma': { name: 'One Mike Alpha' },
    avfacts: { name: 'AvFacts' },
    bad_behavior: { name: 'BadBehavior' },
    closest_ndb: { name: 'Closest NDB' },
    fart: { name: 'Flight Assessment of Risk Tool' },
    flyweight: { name: 'FlyWeight' },
    hearts: { name: 'Hearts' },
    icrashedmyplane: { name: 'I Crashed My Plane' },
    learnmorsecode: { name: 'Learn Morse Code' },
    logtensafe: { name: 'LogTenSafe' },
    metar_decoder: { name: 'METAR Decoder' },
    ranked: { name: 'Ranked.' },
    sf50_told: { name: 'SF50 TOLD' },
    swiftmetar: { name: 'SwiftMETAR' },
    swiftnasr: { name: 'SwiftNASR' }
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
