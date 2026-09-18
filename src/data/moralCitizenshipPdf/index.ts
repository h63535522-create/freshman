import { OfficialPdfPage } from '../geographyPdf/types';
import { moralCitizenshipIntroAndCh1Part1Pages } from './introAndChapter1Part1';
import { moralCitizenshipCh1Part2Pages } from './chapter1Part2';
import { moralCitizenshipCh2Part1Pages } from './chapter2Part1';
import { moralCitizenshipCh2Part2Pages } from './chapter2Part2';
import { moralCitizenshipCh3Pages } from './chapter3';
import { moralCitizenshipCh4Pages } from './chapter4';
import { moralCitizenshipCh5Pages } from './chapter5';
import { moralCitizenshipCh6Pages } from './chapter6';

export const moralCitizenshipPdfPages: OfficialPdfPage[] = [
  ...moralCitizenshipIntroAndCh1Part1Pages,
  ...moralCitizenshipCh1Part2Pages,
  ...moralCitizenshipCh2Part1Pages,
  ...moralCitizenshipCh2Part2Pages,
  ...moralCitizenshipCh3Pages,
  ...moralCitizenshipCh4Pages,
  ...moralCitizenshipCh5Pages,
  ...moralCitizenshipCh6Pages,
];

export const moralCitizenshipOfficialPdfPages = moralCitizenshipPdfPages;
export const moralCitizenshipOfficialPages = moralCitizenshipPdfPages;
export const TOTAL_MORAL_CITIZENSHIP_PDF_PAGES = moralCitizenshipPdfPages.length;
export const MORAL_CITIZENSHIP_TOTAL_PAGES = moralCitizenshipPdfPages.length;
