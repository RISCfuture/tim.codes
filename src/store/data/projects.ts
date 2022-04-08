/* eslint-disable import/prefer-default-export */

import {
  Language, Library, Project, ProjectType, WebsiteType
} from '@/store/types/projects'

export const projects: Project[] = [
  {
    type: ProjectType.WEBSITE,
    identifier: '1ma',
    websites: [
      {
        url: 'https://github.com/RISCfuture/OneMikeAlpha',
        type: WebsiteType.SOURCE
      },
      {
        url: 'https://github.com/RISCfuture/1MA-Avidyne-R9-Data-Loader',
        type: WebsiteType.SOURCE
      }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS, Language.C],
    libraries: [Library.RAILS, Library.VUEJS],
    featured: false
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'avfacts',
    websites: [
      { url: 'https://avfacts.org', type: WebsiteType.LIVE },
      { url: 'https://github.com/RISCfuture/AvFacts', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.VUEJS],
    featured: true
  },
  {
    type: ProjectType.TOOL,
    identifier: 'bad_behavior',
    websites: [
      {
        url: 'https://github.com/RISCfuture/BadBehavior',
        type: WebsiteType.SOURCE
      }
    ],
    languages: [Language.SWIFT],
    libraries: [],
    featured: false
  },
  {
    type: ProjectType.APP,
    identifier: 'fart',
    websites: [
      {
        url: 'https://github.com/RISCfuture/FART',
        type: WebsiteType.SOURCE
      },
      {
        url: 'https://apps.apple.com/us/app/flight-assessment-of-risk-tool/id1570992859',
        type: WebsiteType.DOWNLOAD
      }
    ],
    languages: [Language.SWIFT],
    libraries: [Library.SWIFTUI],
    featured: false
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'flyweight',
    websites: [
      {
        url: 'https://github.com/RISCfuture/FlyWeight',
        type: WebsiteType.SOURCE
      },
      {
        url: 'https://flyweight.org',
        type: WebsiteType.LIVE
      }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.STIMULUS],
    featured: false
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'closest_ndb',
    websites: [
      {
        url: 'https://github.com/RISCfuture/closest-ndb',
        type: WebsiteType.SOURCE
      },
      {
        url: 'https://riscfuture.github.io/closest-ndb',
        type: WebsiteType.LIVE
      }
    ],
    languages: [Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.VUEJS],
    featured: false
  },
  {
    type: ProjectType.TOOL,
    identifier: 'hearts',
    websites: [
      { url: 'https://github.com/RISCfuture/hearts', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY],
    libraries: [],
    featured: false
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'icrashedmyplane',
    websites: [
      { url: 'https://icrashedmyplane.com', type: WebsiteType.LIVE },
      { url: 'https://github.com/RISCfuture/I-Crashed-My-Plane', type: WebsiteType.SOURCE }
    ],
    languages: [Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.VUEJS],
    featured: true
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'learnmorsecode',
    websites: [
      { url: 'https://learnmorse.codes', type: WebsiteType.LIVE },
      { url: 'https://github.com/RISCfuture/learnmorse.codes', type: WebsiteType.SOURCE }
    ],
    languages: [Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.VUEJS],
    featured: true
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'logtensafe',
    websites: [
      { url: 'https://logtensafe.com', type: WebsiteType.LIVE },
      { url: 'https://github.com/LogTenSafe/website', type: WebsiteType.SOURCE },
      { url: 'https://github.com/LogTenSafe/MacOSX', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY, Language.ES5, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.JQUERY, Library.BOOTSTRAP],
    featured: false
  },
  {
    type: ProjectType.TOOL,
    identifier: 'metar_decoder',
    websites: [
      {
        url: 'https://github.com/RISCfuture/METAR-Decoder',
        type: WebsiteType.SOURCE
      }
    ],
    languages: [Language.OBJECTIVE_C],
    libraries: [],
    featured: false
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'ranked',
    websites: [
      { url: 'https://r4nked.herokuapp.com', type: WebsiteType.LIVE },
      { url: 'https://github.com/RISCfuture/ranked', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.VUEJS],
    featured: false
  },
  {
    type: ProjectType.APP,
    identifier: 'sf50_told',
    websites: [
      {
        url: 'https://github.com/RISCfuture/SF50-TOLD',
        type: WebsiteType.SOURCE
      },
      {
        url: 'https://apps.apple.com/us/app/sf50-told/id1552835232',
        type: WebsiteType.DOWNLOAD
      },
      {
        url: 'https://apps.apple.com/us/app/sr22-g2-told/id1553162654',
        type: WebsiteType.DOWNLOAD
      }
    ],
    languages: [Language.SWIFT],
    libraries: [Library.SWIFTUI],
    featured: true
  },
  {
    type: ProjectType.LIBRARY,
    identifier: 'swiftmetar',
    websites: [
      { url: 'https://github.com/RISCfuture/SwiftMETAR', type: WebsiteType.SOURCE }
    ],
    languages: [Language.SWIFT],
    libraries: [],
    featured: false
  },
  {
    type: ProjectType.LIBRARY,
    identifier: 'swiftnasr',
    websites: [
      { url: 'https://github.com/RISCfuture/SwiftNASR', type: WebsiteType.SOURCE }
    ],
    languages: [Language.SWIFT],
    libraries: [],
    featured: false
  }
]
