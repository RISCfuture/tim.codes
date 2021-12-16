/* eslint-disable import/extensions,import/no-unresolved */

import { LocaleMessages } from 'vue-i18n'
import merge from 'lodash-es/merge'

import base from '../base'
import enPrivate from './private'

const en: LocaleMessages = {
  bio: {
    occupation: {
      web_dev: 'Web Developer',
      pilot: 'Commercial Pilot',
      ground_instructor: 'Ground Instructor'
    },
    accomplishment: {
      pilot: {
        asel: 'Airplane Single-Engine Land',
        ases: 'Airplane Single-Engine Sea',
        amel: 'Airplane Multi-Engine Land',
        ames: 'Airplane Multi-Engine Sea',
        ia: 'Instrument Airplane',
        gli: 'Glider'
      },
      ground_instructor: {
        advanced: 'Advanced',
        instrument: 'Instrument'
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
  footer: {
    text: 'All content, code, and images (except logomarks) copyright ©2011–{year} Tim Morgan. All rights reserved. {link}',
    link_text: 'View the source for this website on GitHub.'
  },
  project: {
    type: {
      app: 'app',
      gem: 'gem',
      library: 'library',
      tool: 'tool',
      website: 'website'
    },
    website_type: {
      download: 'download',
      live: 'live',
      source: 'source'
    },
    language: {
      c: 'C',
      css: 'CSS',
      es5: 'ES5',
      es2015: 'ES2015',
      html: 'HTML',
      objective_c: 'Objective-C',
      ruby: 'Ruby',
      swift: 'Swift',
      typescript: 'TypeScript'
    },
    library: {
      bootstrap: 'Bootstrap',
      jquery: 'jQuery',
      rails: 'Ruby on Rails',
      stimulus: 'Stimulus + Turbo + Hotwire',
      swiftui: 'SwiftUI',
      vuejs: 'Vue.js'
    }
  },
  projects: {
    '1ma': {
      description: 'A website that loads telemetry from my airplane, N171MA, and displays it in an engaging graphical way.',
      achievements: [
        'Custom data loader written in C',
        'Compelling data visualization using HighCharts',
        'Mapbox integration for geolocated data',
        'Sophisticated telemetry processing and merging from multiple sensors'
      ]
    },
    avfacts: {
      description: 'The website that powers my aviation podcast',
      achievements: [
        'Custom Active Storage handlers for processing audio files for podcast distribution',
        'Admin user interface for writing, performing, and releasing new episodes',
        'Generates and syndicates podcast RSS feed'
      ]
    },
    bad_behavior: {
      description: 'Scans your digital pilot logbook for potential violations of federal aviation regulations'
    },
    fart: {
      description: 'Simple questionnaire to help pilots evaluate the risk level of a proposed flight.'
    },
    flyweight: {
      description: 'A website that allows passengers to provide me with weight and balance information in a discrete manner.'
    },
    hearts: {
      description: 'Generates “emoji-art” from images'
    },
    icrashedmyplane: {
      description: 'An engaging way to navigate NTSB 830 regulations after you crash your plane',
      achievements: [
        'Seemingly simple front-end powered by sophisticated tree-walking algorithms',
        'Extensive use of Vue transitions for a fluid app-like experience',
        'Responsive design and dark mode support'
      ]
    },
    learnmorsecode: {
      description: 'A fun, affirming, and slightly pushy tool to teach Morse code',
      achievements: [
        'All Morse code audio and pictographs are generated programmatically; no assets are used',
        'Extensive use of Vue transitions for a fluid app-like experience',
        'Responsive design and dark mode support'
      ]
    },
    logtensafe: {
      description: 'Website and Cocoa Mac OS X app for backing up digital pilot logbooks automatically'
    },
    metar_decoder: {
      description: 'Decodes the “Remarks” section of a METAR into human-readable text'
    },
    ranked: {
      description: 'Rank arbitrary lists of things using an Elo algorithm',
      achievements: [
        'No back-end ranking storage; all state encoded into the URL',
        'Stable and versatile ranking algorithm'
      ]
    },
    sf50_told: {
      description: 'SwiftUI app that calculates performance data for the Cirrus SF50 VisionJet',
      achievements: [
        'Mathematical model of SF50 takeoff and landing performance',
        'Usable in high-connectivity as well as low-connectivity (in-flight) environments',
        'On-device parsing and storage of FAA aeronautical data'
      ]
    },
    swiftmetar: {
      description: 'Swift library that parses METAR and TAF weather information'
    },
    swiftnasr: {
      description: 'Swift library that loads and parses FAA Aeronautical Data Distribution (FADDS) files'
    }
  },
  resume: {
    present: 'Present',
    address: {
      country: 'USA',
      omitted: '[omitted]'
    },
    objective: {
      header: 'Objective:',
      content: 'Staff engineer at a software-comes-first firm in need of passionate '
        + 'programmers and fast learners. Especially excited by web and applications '
        + 'programming.'
    },

    summary: {
      header: 'Summary',
      content: 'Experienced, fast, disciplined and thorough programmer with strong '
        + 'focus on design-oriented coding and complete documentation. Comfortable '
        + 'in many languages (Ruby, JavaScript/Node, Swift, Objective-C, CSS/HTML), '
        + 'libraries (Ruby on Rails, Vue.js, jQuery, Cocoa), and tools (Webpack, '
        + 'Capistrano, Sidekiq, Git).'
    },

    accomplishments: {
      header: 'Selected Accomplishments',
      content: [
        'Built and open-sourced two major tools for Square: Squash and Shuttle.',
        'Premier Ruby on Rails developer at the one of the busiest Rails websites; '
        + 'extensive experience with a full range of web technologies, front-to-back.',
        'Designed and developed numerous personal websites using Ruby on Rails and '
        + 'Vue.js.',
        'Designed and developed an asynchronous Rails 3.0 website for communicating '
        + 'with a variety of payment gateways using EM-HTTP.',
        'Designed and implemented in C++ a model of flight physics for a computer '
        + 'simulation as part of a team of six specialists. Also designed a model '
        + 'of physical G-force effects whose realism is unprecedented in the industry.'
      ]
    },
    jobs: {
      header: 'Professional History',
      identifiers: {
        amazon: {
          title: 'Software Development Engineer II',
          company: 'Amazon.com',
          description: 'Programmer for the Transportation team, responsible for '
            + 'implementing web-based visibility services and Oracle back-ends for '
            + 'inbound and outbound freight.'
        },
        tickle: {
          title: 'Software Engineer',
          company: 'Tickle.com',
          description: 'Lead developer for the international Tickle.com websites '
            + '(a J2EE/Spring website) and a Ruby on Rails ad-serving system.'
        },
        scribd: {
          title: 'Senior Developer',
          company: 'Scribd',
          description: 'Primary Ruby on Rails back-end developer for Scribd.com; '
            + 'website features, database optimizations, proper Rails style, and '
            + 'expert advice.'
        },
        recurly: {
          title: 'Senior Developer',
          company: 'Recurly',
          description: 'Expert Ruby on Rails developer; wrote second-generation '
            + 'payment gateway in Rails. Back-end refactoring, architecture, design.'
        },
        square: {
          title: 'Software Engineer — Tools',
          company: 'Square',
          description: 'Inaugural internal tools developer for Square, with a focus '
            + 'on Ruby on Rails. Designed, built, and launched major engineering '
            + 'projects that were used internally and open-sourced.'
        },
        omg: {
          title: 'Staff Software Engineer',
          company: 'One Medical Group',
          description: 'Software engineer on the New Services team. Developing '
            + 'new features and products in Ruby on Rails and Angular 2.'
        },
        google: {
          title: 'Senior Software Engineer',
          company: 'Google',
          description: 'Software engineer on the Cloud Identity team, which manages access '
            + 'control for internal and external HTTP and streaming connections.'
        },
        trusted: {
          title: 'Software Engineer',
          company: 'Trusted Health',
          description: 'Software engineer for the Works team, building software to help nurse '
          + 'staffing agencies and hospitals fill nursing shifts.'
        }
      }
    },
    supporting_experience: {
      header: 'Supporting Experience',
      content: [
        'Certified commercial pilot (2013) (private 2007).',
        'Wrote over twenty feature articles and over 100 news articles for Inside '
        + 'Mac Games as their Senior Writer specializing in flight simulators and '
        + 'audio hardware.',
        'Founded and ran the Beloit College Filmmaking Club, and as president, '
        + 'spearheaded the creation of three feature-length documentaries on and '
        + 'off campus.'
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
