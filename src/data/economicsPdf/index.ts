import { OfficialPdfPage } from '../geographyPdf/types';
import { economicsIntroAndCh1Pages } from './introAndChapter1';
import { economicsCh2Pages } from './chapter2';
import { economicsCh3Pages } from './chapter3';
import { economicsCh4Pages } from './chapter4';
import { economicsCh5Pages } from './chapter5';
import { economicsCh6Pages } from './chapter6';

export const economicsPdfPages: OfficialPdfPage[] = [
  ...economicsIntroAndCh1Pages,
  ...economicsCh2Pages,
  ...economicsCh3Pages,
  ...economicsCh4Pages,
  ...economicsCh5Pages,
  ...economicsCh6Pages,
];

export const economicsOfficialPdfPages = economicsPdfPages;
export const economicsOfficialPages = economicsPdfPages;
export const TOTAL_ECONOMICS_PDF_PAGES = economicsPdfPages.length;
export const ECONOMICS_TOTAL_PAGES = economicsPdfPages.length;
