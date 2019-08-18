export enum ProjectType {
  WEBSITE = 'website',
  GEM = 'gem',
  LIBRARY = 'library',
  APP = 'app',
  TOOL = 'tool'
}

export enum WebsiteType {
  LIVE = 'live',
  SOURCE = 'source'
}

export enum Language {
  RUBY = 'ruby',
  ES5 = 'es5',
  ES2015 = 'es2015',
  TYPESCRIPT = 'typescript',
  HTML = 'html',
  CSS = 'css',
  SWIFT = 'swift',
  OBJECTIVE_C = 'objective_c',
  C = 'c'
}

export enum Library {
  RAILS = 'rails',
  VUEJS = 'vuejs',
  JQUERY = 'jquery',
  BOOTSTRAP = 'bootstrap'
}

interface Website {
  type: WebsiteType;
  url: string;
}

export interface Project {
  type: ProjectType;
  identifier: string;
  websites: Website[];
  languages: Language[];
  libraries: Library[];
  featured: boolean;
}
