import { OfficialPdfPage } from './types';
import { mathCh4Part1Pages } from './ch4Part1';
import { mathCh4Part2Pages } from './ch4Part2';

export const mathCh4Pages: OfficialPdfPage[] = [
  ...mathCh4Part1Pages,
  ...mathCh4Part2Pages
];
