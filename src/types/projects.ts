/**
 * The general category of a {@link Project}'s codebase.
 */

export enum ProjectType {
  /** A site hosted on the web. */
  WEBSITE = 'website',

  /** A library for some other programming language. */
  LIBRARY = 'library',

  /** A desktop or mobile application. */
  APP = 'app',

  /** A command-line tool. */
  TOOL = 'tool',

  /** An extension loaded by a host application. */
  PLUGIN = 'plugin',
}

/**
 * The topic a {@link Project} is grouped under on the Projects page, in display order.
 */
export enum ProjectCategory {
  /** Apps, websites, and tools for pilots. */
  AVIATION_APPS = 'aviationApps',

  /** General-audience apps and games. */
  APPS = 'apps',

  /** Libraries that parse or compute aviation and geospatial data. */
  AVIATION_LIBRARIES = 'aviationLibraries',

  /** Libraries and tools for other developers. */
  DEVELOPER_TOOLS = 'developerTools',
}

/**
 * The types of websites associated with a {@link Project}.
 */
export enum WebsiteType {
  /** The live website powered by the project codebase. */
  LIVE = 'live',

  /** A page describing the project, such as an app's product page. */
  MARKETING = 'marketing',

  /** The source code for the project. */
  SOURCE = 'source',

  /** The location where the app can be downloaded. */
  DOWNLOAD = 'download',

  /** The API reference or other documentation for the project. */
  DOCS = 'docs',
}

/**
 * A programming language a {@link Project} can be written in.
 */

export enum Language {
  RUBY = 'ruby' /** < Ruby */,
  TYPESCRIPT = 'typeScript' /** < TypeScript */,
  HTML = 'HTML' /** < HTML */,
  CSS = 'CSS' /** < CSS, Sass, SCSS */,
  SWIFT = 'swift' /** < Swift */,
  CPP = 'cpp' /** < C++ */,
}

/**
 * Some primary libraries a {@link Project} can utilize.
 */

export enum Library {
  RAILS = 'rails' /** < Ruby on Rails (Ruby) */,
  SWIFTUI = 'swiftUI' /** < SwiftUI (Swift) */,
  VUEJS = 'vueJS' /** < Vue.js (JavaScript) */,
  VAPOR = 'vapor' /** < Vapor (Swift) */,
}

/**
 * A website associated with a {@link Project}.
 */

interface Website {
  /** The website type. */
  type: WebsiteType

  /** The URL for the website. */
  url: string
}

/**
 * A project is something I've worked on whose codebase is publicly accessible
 * to people who are interested.
 */

export interface Project {
  /** The project type. */
  type: ProjectType

  /** The section the project is listed under. */
  category: ProjectCategory

  /**
   * An internal unique identifier for this project, used as a key and to form
   * an i18n key.
   */
  identifier: string

  /** The websites for this project. */
  websites: Website[]

  /** The languages this project is written in. */
  languages: Language[]

  /** The major libraries this project uses. */
  libraries: Library[]

  /** If true, the project is shown prominently and at the head of the list. */
  featured: boolean

  /** If true, the project was majority vibe-coded with AI assistance; otherwise it is marked trad-coded. */
  vibeCoded: boolean
}
