import type { Career } from '@/types/bio'

export const careers: Career[] = [
  {
    i18nKey: 'bio.occupation.dev',
    accomplishments: [
      { i18nKey: 'bio.accomplishment.dev.adept' },
      { i18nKey: 'bio.accomplishment.dev.google' },
      { i18nKey: 'bio.accomplishment.dev.OMG' },
      { i18nKey: 'bio.accomplishment.dev.square' },
      { i18nKey: 'bio.accomplishment.dev.scribd' },
      { i18nKey: 'bio.accomplishment.dev.amazon' }
    ],
    inline: false
  },
  {
    i18nKey: 'bio.occupation.ATP',
    accomplishments: [
      { i18nKey: 'bio.accomplishment.ATP.AMEL', year: 2023 },
      { i18nKey: 'bio.accomplishment.ATP.ASEL', year: 2023 },
      { i18nKey: 'bio.accomplishment.ATP.B737', year: 2023 },
      { i18nKey: 'bio.accomplishment.ATP.SF50', year: 2023 }
    ],
    inline: false
  },
  {
    i18nKey: 'bio.occupation.CPL',
    accomplishments: [
      { i18nKey: 'bio.accomplishment.CPL.ASES', year: 2014 },
      { i18nKey: 'bio.accomplishment.CPL.AMES', year: 2019 },
      { i18nKey: 'bio.accomplishment.CPL.GLI', year: 2019 }
    ],
    inline: false
  },
  {
    i18nKey: 'bio.occupation.flightInstructor',
    accomplishments: [
      { i18nKey: 'bio.accomplishment.flightInstructor.ASE', year: 2021 },
      { i18nKey: 'bio.accomplishment.flightInstructor.IFR-A', year: 2021 }
    ],
    inline: false
  },
  {
    i18nKey: 'bio.occupation.groundInstructor',
    accomplishments: [
      { i18nKey: 'bio.accomplishment.groundInstructor.advanced', year: 2021 },
      { i18nKey: 'bio.accomplishment.groundInstructor.instrument', year: 2021 }
    ],
    inline: true
  }
]
