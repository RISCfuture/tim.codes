/**
 * The general category of a {@link Project}'s codebase.
 */

export enum ProjectType {

  /** A site hosted on the web. */
  WEBSITE = 'website',

  /** A Ruby gem. */
  GEM = 'gem',

  /** A library for some other programming language. */
  LIBRARY = 'library',

  /** A desktop or mobile application. */
  APP = 'app',

  /** A command-line tool. */
  TOOL = 'tool'
}

/**
 * The types of websites associated with a {@link Project}.
 */
export enum WebsiteType {

  /** The live website powered by the project codebase. */
  LIVE = 'live',

  /** The source code for the project. */
  SOURCE = 'source',

  /** The location where the app can be downloaded. */
  DOWNLOAD = 'download'
}

/**
 * A programming language a {@link Project} can be written in.
 */

export enum Language {
  RUBY = 'ruby', /** < Ruby */
  ES5 = 'es5', /** < Traditional JavaScript */
  ES2015 = 'es2015', /** < ECMAScript (5, 6, 2014, Next, ...) */
  TYPESCRIPT = 'typescript', /** < TypeScript */
  HTML = 'html', /** < HTML */
  CSS = 'css', /** < CSS, Sass, SCSS */
  SWIFT = 'swift', /** < Swift */
  OBJECTIVE_C = 'objective_c', /** < Objective-C */
  C = 'c' /** < C */
}

/**
 * Some primary libraries a {@link Project} can utilize.
 */

export enum Library {
  BOOTSTRAP = 'bootstrap', /** < Bootstrap (JavaScript) */
  JQUERY = 'jquery', /** < jQuery (JavaScript) */
  RAILS = 'rails', /** < Ruby on Rails (Ruby) */
  STIMULUS = 'stimulus', /** < Stimulus (JavaScript) */
  SWIFTUI = 'swiftui', /** < SwiftUI (Swift) */
  VUEJS = 'vuejs' /** < Vue.js (JavaScript) */
}

/**
 * A website associated with a {@link Project}.
 */

interface Website {

  /** The website type. */
  type: WebsiteType;

  /** The URL for the website. */
  url: string;
}

/**
 * A project is something I've worked on whose codebase is publicly accessible
 * to people who are interested.
 */

export interface Project {

  /** The project type. */
  type: ProjectType;

  /**
   * An internal unique identifier for this project, used as a key and to form
   * an i18n key.
   */
  identifier: string;

  /** The websites for this project. */
  websites: Website[];

  /** The languages this project is written in. */
  languages: Language[];

  /** The major libraries this project uses. */
  libraries: Library[];

  /** If true, the project is shown prominently and at the head of the list. */
  featured: boolean;
}
