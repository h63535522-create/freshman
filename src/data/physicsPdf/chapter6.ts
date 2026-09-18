import { OfficialPdfPage } from '../geographyPdf/types';
import { physicsChapter6Part1Pages } from './chapter6Part1';
import { physicsChapter6Part2Pages } from './chapter6Part2';

export const physicsChapter6Pages: OfficialPdfPage[] = [
  ...physicsChapter6Part1Pages,
  ...physicsChapter6Part2Pages
];
