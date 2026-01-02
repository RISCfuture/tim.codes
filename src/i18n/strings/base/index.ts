import merge from 'lodash-es/merge'

import basePrivate from './private'
import type { DefaultLocaleMessageSchema, LocaleMessages } from 'vue-i18n'

const base: LocaleMessages<DefaultLocaleMessageSchema> = {
  bio: {
    accomplishment: {
      dev: {
        adept: 'Adept',
        amazon: 'Amazon',
        google: 'Google',
        OMG: 'One Medical',
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
      mastodon: 'Mastodon',
      quora: 'Quora',
      threads: 'Threads',
      twitch: 'Twitch',
      twitter: 'Twitter',
      youtube: 'YouTube'
    }
  },
  projects: {
    badBehavior: { name: 'BadBehavior' },
    closestNDB: { name: 'Closest NDB' },
    FART: { name: 'Flight Assessment of Risk Tool' },
    flyweight: { name: 'FlyWeight' },
    fourtiles: { name: 'Fourtiles' },
    ICrashedMyPlane: { name: 'I Crashed My Plane' },
    learnMorseCode: { name: 'Learn Morse Code' },
    SF50Told: { name: 'SF50 TOLD' },
    swiftMETAR: { name: 'SwiftMETAR' },
    swiftNASR: { name: 'SwiftNASR' }
  },
  resume: {
    timeRange: '{start}–{end}',
    address: {
      street: '',
      city: 'San Francisco, CA',
      zip: '',
      phone: '',
      email: "resume{'@'}timothymorgan.info"
    },
    jobs: {
      headerFormat: '{timeRange} {title}, {company} ({location})',
      locations: {
        sf: 'San Francisco',
        seattle: 'Seattle'
      }
    },
    education: {
      degreeConcentration: '{degree}, {concentrations}',
      format: '{degreeConcentration} {institution}; {location}; {timeRange}',
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
