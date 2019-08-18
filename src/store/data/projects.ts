/* eslint-disable import/prefer-default-export */

import {
  Language, Library,
  Project,
  ProjectType,
  WebsiteType
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
    featured: true
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
    type: ProjectType.WEBSITE,
    identifier: 'ranked',
    websites: [
      { url: 'https://r4nked.herokuapp.com', type: WebsiteType.LIVE },
      { url: 'https://github.com/RISCfuture/ranked', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY, Language.TYPESCRIPT, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.VUEJS],
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
    type: ProjectType.WEBSITE,
    identifier: 'also',
    websites: [
      { url: 'https://also.fm', type: WebsiteType.LIVE },
      { url: 'https://github.com/RISCfuture/also.fm', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY, Language.ES5, Language.HTML, Language.CSS],
    libraries: [Library.RAILS, Library.JQUERY],
    featured: false
  },
  {
    type: ProjectType.GEM,
    identifier: 'find_or_create_on_scopes',
    websites: [
      {
        url: 'https://github.com/RISCfuture/find_or_create_on_scopes',
        type: WebsiteType.SOURCE
      }
    ],
    languages: [Language.RUBY],
    libraries: [],
    featured: false
  },
  {
    type: ProjectType.GEM,
    identifier: 'configoro',
    websites: [
      { url: 'https://github.com/RISCfuture/Configoro', type: WebsiteType.SOURCE }
    ],
    languages: [Language.RUBY],
    libraries: [],
    featured: false
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
    type: ProjectType.GEM,
    identifier: 'unicode_scanner',
    websites: [
      {
        url: 'https://github.com/RISCfuture/unicode_scanner',
        type: WebsiteType.SOURCE
      }
    ],
    languages: [Language.RUBY],
    libraries: [],
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
  }
]
