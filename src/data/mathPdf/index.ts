import { OfficialPdfPage } from './types';
import { mathCh1Pages } from './ch1';
import { mathCh2Pages } from './ch2';
import { mathCh3Pages } from './ch3';
import { mathCh4Pages } from './ch4';
import { mathCh5Pages } from './ch5';
import { mathCh6Pages } from './ch6';

// Official 97-page Applied Mathematics-IB (Math 1014 / Math 1014B) from AASTU
export const appliedMathOfficialPdfPages: OfficialPdfPage[] = [
  ...mathCh1Pages,
  ...mathCh2Pages,
  ...mathCh3Pages,
  ...mathCh4Pages,
  ...mathCh5Pages
];

export const TOTAL_APPLIED_MATH_PDF_PAGES = 97;

// Full Math 1011 including Chapter 6
export const mathOfficialPdfPages: OfficialPdfPage[] = [
  ...mathCh1Pages,
  ...mathCh2Pages,
  ...mathCh3Pages,
  ...mathCh4Pages,
  ...mathCh5Pages,
  ...mathCh6Pages
];

export const TOTAL_MATH_PDF_PAGES = 97; // Default to the 97-page Applied Math document
export * from './types';
