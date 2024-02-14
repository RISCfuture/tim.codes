import { Language, Library, type Project, ProjectType, WebsiteType } from '@/types/projects'

export const projects: Project[] = [
  // {
  //   type: ProjectType.WEBSITE,
  //   identifier: '1MA',
  //   websites: [
  //     {
  //       url: 'https://github.com/RISCfuture/OneMikeAlpha',
  //       type: WebsiteType.SOURCE,
  //     },
  //     {
  //       url: 'https://github.com/RISCfuture/1MA-Avidyne-R9-Data-Loader',
  //       type: WebsiteType.SOURCE,
  //     },
  //   ],
  //   languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS, Language.C],
  //   libraries: [Library.RAILS, Library.VUEJS],
  //   featured: false,
  // },
  {
    type: ProjectType.WEBSITE,
    identifier: 'avFacts',
    websites: [
      { url: 'https://avfacts.org', type: WebsiteType.LIVE },
      { url: 'https://github.com/AvFacts/Backend', type: WebsiteType.SOURCE },
      { url: 'https://github.com/AvFacts/Frontend', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.VUEJS],
    featured: false
  },
  {
    type: ProjectType.TOOL,
    identifier: 'badBehavior',
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
    identifier: 'FART',
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
        url: 'https://github.com/FlyWeight-org/Backend',
        type: WebsiteType.SOURCE
      },
      {
        url: 'https://github.com/FlyWeight-org/Frontend',
        type: WebsiteType.SOURCE
      },
      {
        url: 'https://flyweight.org',
        type: WebsiteType.LIVE
      }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.VUEJS],
    featured: true
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'closestNDB',
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
    websites: [{ url: 'https://github.com/RISCfuture/hearts', type: WebsiteType.SOURCE }],
    languages: [Language.SWIFT],
    libraries: [],
    featured: false
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'ICrashedMyPlane',
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
    identifier: 'learnMorseCode',
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
    identifier: 'logTenSafe',
    websites: [
      { url: 'https://logtensafe.com', type: WebsiteType.LIVE },
      { url: 'https://github.com/LogTenSafe/Backend', type: WebsiteType.SOURCE },
      { url: 'https://github.com/LogTenSafe/Front-end', type: WebsiteType.SOURCE },
      { url: 'https://github.com/LogTenSafe/macOS', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.VUEJS, Library.BOOTSTRAP],
    featured: false
  },
  // {
  //   type: ProjectType.TOOL,
  //   identifier: 'METARDecoder',
  //   websites: [
  //     {
  //       url: 'https://github.com/RISCfuture/METAR-Decoder',
  //       type: WebsiteType.SOURCE,
  //     },
  //   ],
  //   languages: [Language.OBJECTIVE_C],
  //   libraries: [],
  //   featured: false,
  // },
  {
    type: ProjectType.WEBSITE,
    identifier: 'ranked',
    websites: [
      { url: 'https://r4nked.github.io', type: WebsiteType.LIVE },
      { url: 'https://github.com/r4nked/Backend', type: WebsiteType.SOURCE },
      { url: 'https://github.com/r4nked/Frontend', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.VUEJS],
    featured: false
  },
  {
    type: ProjectType.APP,
    identifier: 'SF50Told',
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
    identifier: 'swiftMETAR',
    websites: [{ url: 'https://github.com/RISCfuture/SwiftMETAR', type: WebsiteType.SOURCE }],
    languages: [Language.SWIFT],
    libraries: [],
    featured: false
  },
  {
    type: ProjectType.LIBRARY,
    identifier: 'swiftNASR',
    websites: [{ url: 'https://github.com/RISCfuture/SwiftNASR', type: WebsiteType.SOURCE }],
    languages: [Language.SWIFT],
    libraries: [],
    featured: false
  },
  {
    type: ProjectType.WEBSITE,
    identifier: 'greenie',
    websites: [
      { url: 'https://github.com/Greenie-app/Backend', type: WebsiteType.SOURCE },
      { url: 'https://github.com/Greenie-app/Frontend', type: WebsiteType.SOURCE },
      { url: 'https://greenie.app', type: WebsiteType.LIVE }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.VUEJS],
    featured: true
  }
]
