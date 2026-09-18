import { OfficialPdfPage } from '../geographyPdf/types';
import { biologyCh1And2Pages } from './ch1And2';
import { biologyCh3Pages } from './ch3';
import { biologyCh4Pages } from './ch4';
import { biologyCh5Pages } from './ch5';
import { biologyCh6Pages } from './ch6';

export const biologyPdfPages: OfficialPdfPage[] = [
  ...biologyCh1And2Pages,
  ...biologyCh3Pages,
  ...biologyCh4Pages,
  ...biologyCh5Pages,
  ...biologyCh6Pages,
];

export const biologyOfficialPdfPages = biologyPdfPages;
export const biologyOfficialPages = biologyPdfPages;
export const TOTAL_BIOLOGY_PDF_PAGES = biologyPdfPages.length;
export const BIOLOGY_TOTAL_PAGES = biologyPdfPages.length;
