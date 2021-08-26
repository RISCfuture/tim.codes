/* eslint-disable import/prefer-default-export */

import { Career } from '@/store/types/bio'

export const careers: Career[] = [
  {
    i18nKey: 'bio.occupation.web_dev',
    accomplishments: [
      { i18nKey: 'bio.accomplishment.web_dev.trusted' },
      { i18nKey: 'bio.accomplishment.web_dev.google' },
      { i18nKey: 'bio.accomplishment.web_dev.omg' },
      { i18nKey: 'bio.accomplishment.web_dev.square' },
      { i18nKey: 'bio.accomplishment.web_dev.recurly' },
      { i18nKey: 'bio.accomplishment.web_dev.scribd' }
    ],
    inline: true
  },
  {
    i18nKey: 'bio.occupation.pilot',
    accomplishments: [
      { i18nKey: 'bio.accomplishment.pilot.asel', year: 2013 },
      { i18nKey: 'bio.accomplishment.pilot.ases', year: 2014 },
      { i18nKey: 'bio.accomplishment.pilot.amel', year: 2015 },
      { i18nKey: 'bio.accomplishment.pilot.ames', year: 2019 },
      { i18nKey: 'bio.accomplishment.pilot.ia', year: 2012 },
      { i18nKey: 'bio.accomplishment.pilot.gli', year: 2019 }
    ],
    inline: false
  },
  {
    i18nKey: 'bio.occupation.ground_instructor',
    accomplishments: [
      { i18nKey: 'bio.accomplishment.ground_instructor.advanced', year: 2021 },
      { i18nKey: 'bio.accomplishment.ground_instructor.instrument', year: 2021 }
    ],
    inline: true
  }
]
