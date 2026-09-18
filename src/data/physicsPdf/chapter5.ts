import { OfficialPdfPage } from '../geographyPdf/types';
import { physicsChapter5Part1Pages } from './chapter5Part1';
import { physicsChapter5Part2Pages } from './chapter5Part2';

export const physicsChapter5Pages: OfficialPdfPage[] = [
  ...physicsChapter5Part1Pages,
  ...physicsChapter5Part2Pages
];
