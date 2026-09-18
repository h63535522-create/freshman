import { OfficialPdfPage } from '../geographyPdf/types';
import { logicCoverAndTocPages } from './coverAndToc';
import { logicChapter1Pages } from './chapter1';
import { logicChapter2Part1Pages } from './chapter2Part1';
import { logicChapter2Part2Pages } from './chapter2Part2';
import { logicChapter3Part1Pages } from './chapter3Part1';
import { logicChapter3Part2Pages } from './chapter3Part2';
import { logicChapter4Pages } from './chapter4';
import { logicChapter5Pages } from './chapter5';
import { logicChapter6Pages } from './chapter6';

export const logicOfficialPdfPages: OfficialPdfPage[] = [
  ...logicCoverAndTocPages,
  ...logicChapter1Pages,
  ...logicChapter2Part1Pages,
  ...logicChapter2Part2Pages,
  ...logicChapter3Part1Pages,
  ...logicChapter3Part2Pages,
  ...logicChapter4Pages,
  ...logicChapter5Pages,
  ...logicChapter6Pages,
];

export const TOTAL_LOGIC_PDF_PAGES = logicOfficialPdfPages.length;

export const logicCourseMeta = {
  id: 'logic',
  titleEn: 'Logic and Critical Thinking (Phil 1011)',
  titleAm: 'አመክንዮ እና ሂሳዊ አስተሳሰብ (Phil 1011)',
  moduleCode: 'Phil 1011',
  authorEn: 'Ministry of Science and Higher Education (MoSHE) / FDRE',
  authorAm: 'የሳይንስና ከፍተኛ ትምህርት ሚኒስቴር / የኢ.ፌ.ዲ.ሪ',
  totalPages: logicOfficialPdfPages.length,
  chaptersCount: 6,
};
