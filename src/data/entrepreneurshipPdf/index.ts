import { OfficialPdfPage } from '../geographyPdf/types';
import { entrepreneurshipIntroAndChapter1Pages } from './introAndChapter1';
import { entrepreneurshipChapter2Pages } from './chapter2';
import { entrepreneurshipChapter3Pages } from './chapter3';
import { entrepreneurshipChapter4Pages } from './chapter4';
import { entrepreneurshipChapter5Pages } from './chapter5';
import { entrepreneurshipChapter6Pages } from './chapter6';

export * from '../geographyPdf/types';

// Complete collection of all MoE official Entrepreneurship (Mgmt 1012) PDF pages
export const entrepreneurshipOfficialPdfPages: OfficialPdfPage[] = [
  ...entrepreneurshipIntroAndChapter1Pages,
  ...entrepreneurshipChapter2Pages,
  ...entrepreneurshipChapter3Pages,
  ...entrepreneurshipChapter4Pages,
  ...entrepreneurshipChapter5Pages,
  ...entrepreneurshipChapter6Pages,
];

export const TOTAL_ENTREPRENEURSHIP_PDF_PAGES = entrepreneurshipOfficialPdfPages.length;

export function getEntrepreneurshipPdfPageByNumber(pageNumber: number): OfficialPdfPage | undefined {
  return entrepreneurshipOfficialPdfPages.find((p) => p.pdfPageNumber === pageNumber);
}

export function getEntrepreneurshipPagesByChapter(chapterNumber: number): OfficialPdfPage[] {
  return entrepreneurshipOfficialPdfPages.filter((p) => p.chapterNumber === chapterNumber);
}

export function searchEntrepreneurshipPdfPages(query: string): OfficialPdfPage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return entrepreneurshipOfficialPdfPages.filter(
    (p) =>
      p.titleEn.toLowerCase().includes(q) ||
      p.titleAm.toLowerCase().includes(q) ||
      p.contentEn.toLowerCase().includes(q) ||
      p.contentAm.toLowerCase().includes(q) ||
      (p.subtopicEn && p.subtopicEn.toLowerCase().includes(q)) ||
      (p.sectionRef && p.sectionRef.toLowerCase().includes(q))
  );
}
