import merge from 'lodash-es/merge'

import base from '../base'
import enPrivate from './private'
import type { DefaultLocaleMessageSchema, LocaleMessages } from 'vue-i18n'

const en: LocaleMessages<DefaultLocaleMessageSchema> = {
  bio: {
    occupation: {
      flightInstructor: 'Flight Instructor',
      groundInstructor: 'Ground Instructor',
      ATP: 'Airline Transport Pilot',
      CPL: 'Commercial Pilot',
      dev: 'Web Developer'
    },
    accomplishment: {
      ATP: {
        AMEL: 'Airplane Multi-Engine Land',
        ASEL: 'Airplane Single-Engine Land',
        SF50: 'Cirrus SF50 Vision Jet',
        B737: 'Boeing 737 NG'
      },
      CPL: {
        AMES: 'Airplane Multi-Engine Sea',
        ASES: 'Airplane Single-Engine Sea',
        GLI: 'Glider'
      },
      groundInstructor: {
        advanced: 'Advanced',
        instrument: 'Instrument'
      },
      flightInstructor: {
        ASE: 'Airplane Single-Engine',
        'IFR-A': 'Instrument Airplane'
      }
    }
  },
  header: {
    links: {
      home: 'Home',
      projects: 'Projects',
      resume: 'Résumé'
    }
  },
  theme: {
    toggle: 'Toggle dark mode'
  },
  footer: {
    text: 'All content, code, and images (except logomarks) copyright ©2011–{year} Tim Morgan. All rights reserved. {link}',
    linkText: 'View the source for this website on GitHub.'
  },
  project: {
    type: {
      app: 'app',
      gem: 'gem',
      library: 'library',
      tool: 'tool',
      website: 'website'
    },
    websiteType: {
      download: 'download',
      live: 'live',
      source: 'source'
    },
    language: {
      C: 'C',
      CSS: 'CSS',
      ES5: 'ES5',
      ES2015: 'ES2015',
      HTML: 'HTML',
      objectiveC: 'Objective-C',
      ruby: 'Ruby',
      swift: 'Swift',
      typeScript: 'TypeScript'
    },
    library: {
      bootstrap: 'Bootstrap',
      jQuery: 'jQuery',
      rails: 'Ruby on Rails',
      stimulus: 'Stimulus + Turbo + Hotwire',
      swiftUI: 'SwiftUI',
      vueJS: 'Vue.js'
    }
  },
  projects: {
    badBehavior: {
      description:
        'Scans your digital pilot logbook for potential violations of federal aviation regulations',
      achievements: [
        'Automatically adapts to custom fields in LogTen Pro databases',
        'Validates complex 12-month IFR currency grace periods'
      ]
    },
    closestNDB: {
      description:
        'A useless but entertaining web page that tells you where the closest non-directional beacon is from your current location',
      achievements: [
        'Displays distance and bearing to 300+ remaining NDBs worldwide using your GPS location',
        'Animated ADF instrument with rotating needle and authentic Morse code rendering'
      ]
    },
    FART: {
      description:
        'Simple questionnaire to help pilots evaluate the risk level of a proposed flight',
      achievements: [
        'Calculates personalized risk scores using a standardized FAA questionnaire',
        'Native iOS and macOS apps from a single codebase with adaptive interfaces'
      ]
    },
    flyweight: {
      description:
        'A website that allows passengers to provide me with weight and balance information in a discrete manner',
      achievements: [
        'Real-time updates when passengers add their weight using WebSocket connections',
        'Automatically purges all passenger data one week after each flight',
        'No account required for passengers'
      ]
    },
    fourtiles: {
      description: 'A fun game where you make words by combining tiles.',
      achievements: [
        '4,000 unique puzzles automatically generated from five words split into four tiles each',
        'Automatically saves progress locally and resumes games when you return',
        'Smooth animations and engaging visual feedback for tile combinations'
      ]
    },
    ICrashedMyPlane: {
      description: 'An engaging way to navigate NTSB 830 regulations after you crash your plane',
      achievements: [
        'Seemingly simple front-end powered by sophisticated tree-walking algorithms',
        'Extensive use of Vue transitions for a fluid app-like experience',
        'Responsive design and dark mode support'
      ]
    },
    learnMorseCode: {
      description: 'A fun, affirming, and slightly pushy tool to teach Morse code',
      achievements: [
        'All Morse code audio and pictographs are generated programmatically; no assets are used',
        'Extensive use of Vue transitions for a fluid app-like experience',
        'Responsive design and dark mode support'
      ]
    },
    SF50Told: {
      description: 'SwiftUI app that calculates performance data for the Cirrus SF50 Vision Jet',
      achievements: [
        'Mathematical model of SF50 takeoff and landing performance',
        'Usable in high-connectivity as well as low-connectivity (in-flight) environments',
        'On-device parsing and storage of FAA aeronautical data'
      ]
    },
    swiftMETAR: {
      description: 'Swift library that parses METAR and TAF weather information',
      achievements: [
        'Strong typing and strict parsing of METAR and TAF strings',
        'Parses 49 different METAR remark types from tornadic activity to ice accretion'
      ]
    },
    swiftNASR: {
      description:
        'Swift library that loads and parses FAA Aeronautical Data Distribution (FADDS) files',
      achievements: [
        'Automatically adapts to FAA format changes by reading layout specification files',
        'Provides type-safe access to 50+ aviation data types (fuel specs, ARFF classes, etc.)'
      ]
    }
  },
  resume: {
    present: 'Present',
    references: 'References available upon request.',
    address: {
      country: 'USA',
      omitted: '[omitted]'
    },
    objective: {
      header: 'Objective:',
      content:
        'Software engineer at a small- to medium-sized startup in need of ' +
        'passionate programmers and fast learners. Especially excited by web and ' +
        'application development, code quality, and making things better.'
    },
    jobProjects: {
      trusted: {
        messaging: {
          title: 'Trusted Messaging',
          description: 'interchange between Sunshine and Front for support conversations'
        }
      },
      square: {
        squash: {
          title: 'Squash',
          description: 'error tracking and stacktrace analysis, open-sourced'
        },
        shuttle: {
          title: 'Shuttle',
          description: 'i18n pipeline and translator software, open-sourced'
        },
        other: {
          title: 'numerous internal user-facing websites'
        }
      },
      recurly: {
        gateway: {
          title: 'Recurly Gateway',
          description: 'Chase Orbital gateway for payment processing'
        }
      },
      scribd: {
        jumpfrog: {
          title: 'Jumpfrog',
          description: 'error tracking and stacktrace analysis'
        }
      },
      tickle: {
        leo: {
          title: 'Leo',
          description: 'ad-serving platform and ad analysis'
        },
        filter: {
          title: 'objectionable content filtering system'
        }
      }
    },
    jobs: {
      header: 'Professional History',
      identifiers: {
        amazon: {
          title: 'Software Development Engineer II',
          company: 'Amazon.com',
          description:
            'Programmer for the Transportation team, responsible for ' +
            'implementing web-based visibility services and Oracle back-ends for ' +
            'inbound and outbound freight.'
        },
        tickle: {
          title: 'Software Engineer',
          company: 'Tickle.com',
          description:
            'Wrote payment processing for the international Tickle.com ' +
            'websites, rewrote an ad-serving system in Rails.'
        },
        scribd: {
          title: 'Senior Developer',
          company: 'Scribd',
          description:
            'Back-end developer for Scribd.com; storefront, payment ' +
            'processing, website features, database optimizations, proper Rails ' +
            'style, and expert advice.'
        },
        recurly: {
          title: 'Senior Developer',
          company: 'Recurly',
          description:
            'Expert Ruby on Rails developer; wrote second-generation ' +
            'payment gateway in Rails. Back-end refactoring, architecture, design.'
        },
        square: {
          title: 'Software Engineer — Tools',
          company: 'Square',
          description:
            'Inaugural internal tools developer for Square, with a ' +
            'focus on developer tooling and localization infrastructure. Designed, ' +
            'built, and launched major engineering projects that were used ' +
            'internally and open-sourced.'
        },
        OMG: {
          title: 'Staff Software Engineer',
          company: 'One Medical Group',
          description:
            'Software engineer on the New Services team, developing ' +
            'new features and products for the onboarding flow.'
        },
        google: {
          title: 'Senior Software Engineer',
          company: 'Google',
          description:
            'Software engineer on the Cloud Identity team, which manages ' +
            'access control for internal and external HTTP and streaming connections.'
        },
        trusted: {
          title: 'Software Engineer',
          company: 'Trusted Health',
          description:
            'Software engineer for the Clinician Data team, building ' +
            'software to improve messaging between nurses and operations staff, ' +
            'as well as improving the nurse onboarding experience.'
        },
        occupier: {
          title: 'Staff Software Engineer',
          company: 'Occupier',
          description:
            'Staff software engineer on the Lease Admin team, ' +
            'responsible for building features to help clients manage their lease ' +
            'portfolio.'
        },
        adept: {
          title: 'Software Engineer',
          company: 'Adept',
          description:
            'Engineering lead responsible for building internal tooling that assisted ' +
            'researchers and employees with AI analysis and fine-tuning.'
        }
      }
    },
    supportingExperience: {
      header: 'Supporting Experience',
      content: [
        'Certified airline transport pilot (2024) (private 2007).',
        'Wrote over twenty feature articles and over 100 news articles for Inside ' +
          'Mac Games as their Senior Writer specializing in flight simulators and ' +
          'audio hardware.',
        'Founded and ran the Beloit College Filmmaking Club, and as president, ' +
          'spearheaded the creation of three feature-length documentaries on and ' +
          'off campus.'
      ]
    },
    education: {
      header: 'Education',
      concentration: {
        cs: 'Computer Science',
        physics: 'Physics'
      }
    }
  }
}

export default merge({}, base, en, enPrivate)
