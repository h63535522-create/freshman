import { OfficialPdfPage } from '../geographyPdf/types';
import { globalAffairsIntroAndCh1Part1Pages } from './introAndChapter1Part1';
import { globalAffairsCh1Part2Pages } from './chapter1Part2';
import { globalAffairsCh2Part1Pages } from './chapter2Part1';
import { globalAffairsCh2Part2Pages } from './chapter2Part2';
import { globalAffairsCh3Part1Pages } from './chapter3Part1';
import { globalAffairsCh3Part2Pages } from './chapter3Part2';
import { globalAffairsCh4Part1Pages } from './chapter4Part1';
import { globalAffairsCh4Part2Pages } from './chapter4Part2';
import { globalAffairsCh5Part1Pages } from './chapter5Part1';
import { globalAffairsCh5Part2Pages } from './chapter5Part2';

export const globalAffairsPdfPages: OfficialPdfPage[] = [
  ...globalAffairsIntroAndCh1Part1Pages,
  ...globalAffairsCh1Part2Pages,
  ...globalAffairsCh2Part1Pages,
  ...globalAffairsCh2Part2Pages,
  ...globalAffairsCh3Part1Pages,
  ...globalAffairsCh3Part2Pages,
  ...globalAffairsCh4Part1Pages,
  ...globalAffairsCh4Part2Pages,
  ...globalAffairsCh5Part1Pages,
  ...globalAffairsCh5Part2Pages,
];

export const globalAffairsOfficialPdfPages = globalAffairsPdfPages;
export const globalAffairsOfficialPages = globalAffairsPdfPages;
export const TOTAL_GLOBAL_AFFAIRS_PDF_PAGES = globalAffairsPdfPages.length;
export const GLOBAL_AFFAIRS_TOTAL_PAGES = globalAffairsPdfPages.length;
