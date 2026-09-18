import { OfficialPdfPage } from '../geographyPdf/types';
import { physicsChapter2Part1Pages } from './chapter2Part1';
import { physicsChapter2Part2Pages } from './chapter2Part2';

export const physicsChapter2Pages: OfficialPdfPage[] = [
  ...physicsChapter2Part1Pages,
  ...physicsChapter2Part2Pages
];
