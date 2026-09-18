import { OfficialPdfPage } from '../geographyPdf/types';
import { physicsChapter4Part1Pages } from './chapter4Part1';
import { physicsChapter4Part2Pages } from './chapter4Part2';

export const physicsChapter4Pages: OfficialPdfPage[] = [
  ...physicsChapter4Part1Pages,
  ...physicsChapter4Part2Pages
];
