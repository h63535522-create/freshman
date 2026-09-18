import { OfficialPdfPage } from '../geographyPdf/types';
import { inclusivenessIntroAndChapter1Pages } from './introAndChapter1';
import { inclusivenessChapter2Pages } from './chapter2';
import { inclusivenessChapter3Pages } from './chapter3';
import { inclusivenessChapter4Pages } from './chapter4';
import { inclusivenessChapter5Pages } from './chapter5';
import { inclusivenessChapters6to8Pages } from './chapters6to8';

export const inclusivenessPdfPages: OfficialPdfPage[] = [
  ...inclusivenessIntroAndChapter1Pages,
  ...inclusivenessChapter2Pages,
  ...inclusivenessChapter3Pages,
  ...inclusivenessChapter4Pages,
  ...inclusivenessChapter5Pages,
  ...inclusivenessChapters6to8Pages
];

export const inclusivenessOfficialPdfPages = inclusivenessPdfPages;
export const TOTAL_INCLUSIVENESS_PDF_PAGES = inclusivenessPdfPages.length;
export const INCLUSIVENESS_TOTAL_PAGES = inclusivenessPdfPages.length;
