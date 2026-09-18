import { OfficialPdfPage } from '../geographyPdf/types';
import { anthropologyIntroAndUnit1Pages } from './introAndUnit1';
import { anthropologyUnit2Pages } from './unit2';
import { anthropologyUnit3Pages } from './unit3';
import { anthropologyUnit4Pages } from './unit4';
import { anthropologyUnit5Pages } from './unit5';
import { anthropologyUnit6Pages } from './unit6';
import { anthropologyUnit7Pages } from './unit7';

export * from '../geographyPdf/types';

// Complete collection of all MoE official Anthropology PDF pages with titles, subtitles and full bilingual text
export const anthropologyOfficialPdfPages: OfficialPdfPage[] = [
  ...anthropologyIntroAndUnit1Pages,
  ...anthropologyUnit2Pages,
  ...anthropologyUnit3Pages,
  ...anthropologyUnit4Pages,
  ...anthropologyUnit5Pages,
  ...anthropologyUnit6Pages,
  ...anthropologyUnit7Pages,
];

export const TOTAL_ANTHROPOLOGY_PDF_PAGES = anthropologyOfficialPdfPages.length;

export function getAnthropologyPdfPageByNumber(pageNumber: number): OfficialPdfPage | undefined {
  return anthropologyOfficialPdfPages.find((p) => p.pdfPageNumber === pageNumber);
}

export function getAnthropologyPagesByChapter(chapterNumber: number): OfficialPdfPage[] {
  return anthropologyOfficialPdfPages.filter((p) => p.chapterNumber === chapterNumber);
}

export function searchAnthropologyPdfPages(query: string): OfficialPdfPage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return anthropologyOfficialPdfPages.filter(
    (p) =>
      p.titleEn.toLowerCase().includes(q) ||
      p.titleAm.toLowerCase().includes(q) ||
      p.contentEn.toLowerCase().includes(q) ||
      p.contentAm.toLowerCase().includes(q) ||
      (p.subtopicEn && p.subtopicEn.toLowerCase().includes(q)) ||
      (p.sectionRef && p.sectionRef.toLowerCase().includes(q))
  );
}
