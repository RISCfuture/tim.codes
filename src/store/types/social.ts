/**
 * A social media page.
 */

export interface Profile {

  /** A unique identifier for the social media network (used to make an i18n key). */
  identifier: string;

  /** The URL for the social media profile page. */
  website: string;
}
