/**
 * Abstract interface for jobs and educational institutions, both of which I
 * attended/held for a range of time.
 */

export interface TimeRanged {

  /** The year I started the job or started at the university. */
  startYear: number;

  /** The year I quit the job or matriculated from/quit the university. */
  endYear: number | null;
}

/**
 * A location where I held a job (used to make an i18n key).
 */

export enum JobLocation {

  /** San Francisco, CA */
  SF = 'sf',

  /** Seattle, WA */
  SEATTLE = 'seattle'
}

/**
 * A position I held at a company.
 */

export interface Job extends TimeRanged {

  /** A unique identifier for the job (used to make an i18n key). */
  identifier: string;

  /** Where I held the job. */
  location: JobLocation;
}

/**
 * An educational degree.
 */

export enum Degree {

  /** Bachelor of Science */
  BS = 'bs'
}

/**
 * An educational institution I attended.
 */

export interface Education extends TimeRanged {

  /** A unique identifier for the institution (used to make an i18n key). */
  identifier: string;

  /** The degree I earned. */
  degree: Degree;

  /** The concentration(s) for that degree (as an i18n key fragment). */
  concentrations: string[];

  /** The institution I attended (as an i18n key fragment). */
  institution: string;
}
