import { OfficialPdfPage } from '../geographyPdf/types';
import { physicalFitnessIntroAndUnit1Pages } from './introAndUnit1';
import { physicalFitnessUnit2Pages } from './unit2';
import { physicalFitnessUnit3Pages } from './unit3';
import { physicalFitnessUnit4Pages } from './unit4';
import { physicalFitnessUnit5AndFinalPages } from './unit5AndFinal';

export const physicalFitnessPdfPages: OfficialPdfPage[] = [
  ...physicalFitnessIntroAndUnit1Pages,
  ...physicalFitnessUnit2Pages,
  ...physicalFitnessUnit3Pages,
  ...physicalFitnessUnit4Pages,
  ...physicalFitnessUnit5AndFinalPages,
];

export const physicalFitnessOfficialPdfPages = physicalFitnessPdfPages;
export const physicalFitnessOfficialPages = physicalFitnessPdfPages;
export const TOTAL_PHYSICAL_FITNESS_PDF_PAGES = physicalFitnessPdfPages.length;
export const PHYSICAL_FITNESS_TOTAL_PAGES = physicalFitnessPdfPages.length;

