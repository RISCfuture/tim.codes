/**
 * Accomplishments appear on the home page, indicating prominent jobs I've had
 * or licenses/awards I've acquired.
 */

interface Accomplishment {
  /** This i18n key is associated with the text of the accomplishment. */
  i18nKey: string

  /**
   * The year I achieved this accomplishment. Only shown if
   * {@link Career#inline} is false.
   */
  year?: number
}

/**
 * A career is a grouping of related accomplishments, such as a job history in
 * a particular field.
 */

export interface Career {
  /** This i18n key is associated with the title for the accomplishment group. */
  i18nKey: string

  /** The list of accomplishments associated with this career. */
  accomplishments: Accomplishment[]

  /**
   * If true, the accomplishments are shown as a single comma-delimited list. If
   * false, the accomplishments are shown each to its own line (with year).
   */
  inline: boolean
}
