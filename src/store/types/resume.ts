export interface TimeRanged {
  startYear: number;
  endYear: number | null;
}

export enum JobLocation {
  SF = 'sf',
  SEATTLE = 'seattle'
}

export interface Job extends TimeRanged {
  identifier: string;
  location: JobLocation;
}

export enum Degree {
  BS = 'bs'
}

export interface Education extends TimeRanged {
  identifier: string;
  degree: Degree;
  concentrations: string[];
  institution: string;
}
