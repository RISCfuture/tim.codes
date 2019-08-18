interface Accomplishment {
  i18nKey: string;
  year?: number;
}

export interface Career {
  i18nKey: string;
  accomplishments: Accomplishment[];
  inline: boolean;
}
