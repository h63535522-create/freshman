import { OfficialPdfPage } from '../geographyPdf/types';
import { psychologyIntroAndChapter1Pages } from './introAndChapter1';
import { psychologyChapter2Pages } from './chapter2';
import { psychologyChapter3Pages } from './chapter3';
import { psychologyChapter4Pages } from './chapter4';
import { psychologyChapter5Pages } from './chapter5';
import { psychologyChapter6Pages } from './chapter6';
import { psychologyChapter7Pages } from './chapter7';
import { psychologyChapter8Pages } from './chapter8';
import { psychologyChapter9Pages } from './chapter9';
import { psychologyChapter10Pages } from './chapter10';
import { psychologyChapter11Pages } from './chapter11';

export * from '../geographyPdf/types';

// Complete collection of all MoE official General Psychology (Psyc 1011) PDF pages (175 Pages)
export const psychologyOfficialPdfPages: OfficialPdfPage[] = [
  ...psychologyIntroAndChapter1Pages,
  ...psychologyChapter2Pages,
  ...psychologyChapter3Pages,
  ...psychologyChapter4Pages,
  ...psychologyChapter5Pages,
  ...psychologyChapter6Pages,
  ...psychologyChapter7Pages,
  ...psychologyChapter8Pages,
  ...psychologyChapter9Pages,
  ...psychologyChapter10Pages,
  ...psychologyChapter11Pages,
];

export const TOTAL_PSYCHOLOGY_PDF_PAGES = psychologyOfficialPdfPages.length;

export function getPsychologyPdfPageByNumber(pageNumber: number): OfficialPdfPage | undefined {
  return psychologyOfficialPdfPages.find((p) => p.pdfPageNumber === pageNumber);
}

export function getPsychologyPagesByChapter(chapterNumber: number): OfficialPdfPage[] {
  return psychologyOfficialPdfPages.filter((p) => p.chapterNumber === chapterNumber);
}

export function searchPsychologyPdfPages(query: string): OfficialPdfPage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return psychologyOfficialPdfPages.filter(
    (p) =>
      p.titleEn.toLowerCase().includes(q) ||
      p.titleAm.toLowerCase().includes(q) ||
      p.contentEn.toLowerCase().includes(q) ||
      p.contentAm.toLowerCase().includes(q) ||
      (p.subtopicEn && p.subtopicEn.toLowerCase().includes(q)) ||
      (p.sectionRef && p.sectionRef.toLowerCase().includes(q))
  );
}
