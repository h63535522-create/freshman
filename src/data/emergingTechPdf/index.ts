import { OfficialPdfPage } from '../geographyPdf/types';
import { emergingTechIntroAndChapter1Pages } from './introAndChapter1';
import { emergingTechChapter2Pages } from './chapter2';
import { emergingTechChapter3Pages } from './chapter3';
import { emergingTechChapter4Pages } from './chapter4';
import { emergingTechChapter5Pages } from './chapter5';
import { emergingTechChapter6And7Pages } from './chapter6And7';

export const emergingTechPdfPages: OfficialPdfPage[] = [
  ...emergingTechIntroAndChapter1Pages,
  ...emergingTechChapter2Pages,
  ...emergingTechChapter3Pages,
  ...emergingTechChapter4Pages,
  ...emergingTechChapter5Pages,
  ...emergingTechChapter6And7Pages,
];

export const emergingTechOfficialPdfPages = emergingTechPdfPages;
export const emergingTechOfficialPages = emergingTechPdfPages;
export const TOTAL_EMERGING_TECH_PDF_PAGES = emergingTechPdfPages.length;
export const EMERGING_TECH_TOTAL_PAGES = emergingTechPdfPages.length;
