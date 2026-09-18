import { OfficialPdfPage } from './types';
import { prefaceAndTocPages } from './prefaceAndToc';
import { chapters1to2Pages } from './chapters1to2';
import { chapters3to4Pages } from './chapters3to4';
import { chapters5to6Pages } from './chapters5to6';
import { chapters7to8Pages } from './chapters7to8';

export * from './types';

// Complete collection of all MoE official PDF pages (all text, tables, formulas, figures & reviews)
export const officialPdfPages: OfficialPdfPage[] = [
  ...prefaceAndTocPages,
  ...chapters1to2Pages,
  ...chapters3to4Pages,
  ...chapters5to6Pages,
  ...chapters7to8Pages,
];

export const geographyPdfPages = officialPdfPages;
export const geographyOfficialPdfPages = officialPdfPages;
export const TOTAL_GEOGRAPHY_PDF_PAGES = officialPdfPages.length;
export const TOTAL_PDF_PAGES = officialPdfPages.length;

export function getPdfPageByNumber(pageNumber: number): OfficialPdfPage | undefined {
  return officialPdfPages.find((p) => p.pdfPageNumber === pageNumber);
}

export function getPagesByChapter(chapterNumber: number): OfficialPdfPage[] {
  return officialPdfPages.filter((p) => p.chapterNumber === chapterNumber);
}

export function searchPdfPages(query: string): OfficialPdfPage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return officialPdfPages.filter(
    (p) =>
      p.titleEn.toLowerCase().includes(q) ||
      p.titleAm.toLowerCase().includes(q) ||
      p.contentEn.toLowerCase().includes(q) ||
      p.contentAm.toLowerCase().includes(q) ||
      (p.subtopicEn && p.subtopicEn.toLowerCase().includes(q)) ||
      (p.sectionRef && p.sectionRef.toLowerCase().includes(q))
  );
}
