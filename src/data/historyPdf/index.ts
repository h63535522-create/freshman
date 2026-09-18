import { OfficialPdfPage } from '../geographyPdf/types';
import { historyIntroAndUnit1Pages } from './introAndUnit1';
import { historyUnit2Pages } from './unit2';
import { historyUnit3Pages } from './unit3';
import { historyUnit4Pages } from './unit4';
import { historyUnit5Pages } from './unit5';
import { historyUnit6Pages } from './unit6';
import { historyUnit7Pages } from './unit7';

export * from '../geographyPdf/types';

// Complete collection of all MoE official History (Hist. 102) PDF pages
export const historyOfficialPdfPages: OfficialPdfPage[] = [
  ...historyIntroAndUnit1Pages,
  ...historyUnit2Pages,
  ...historyUnit3Pages,
  ...historyUnit4Pages,
  ...historyUnit5Pages,
  ...historyUnit6Pages,
  ...historyUnit7Pages,
];

export const TOTAL_HISTORY_PDF_PAGES = historyOfficialPdfPages.length;

export function getHistoryPdfPageByNumber(pageNumber: number): OfficialPdfPage | undefined {
  return historyOfficialPdfPages.find((p) => p.pdfPageNumber === pageNumber);
}

export function getHistoryPagesByChapter(chapterNumber: number): OfficialPdfPage[] {
  return historyOfficialPdfPages.filter((p) => p.chapterNumber === chapterNumber);
}

export function searchHistoryPdfPages(query: string): OfficialPdfPage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return historyOfficialPdfPages.filter(
    (p) =>
      p.titleEn.toLowerCase().includes(q) ||
      p.titleAm.toLowerCase().includes(q) ||
      p.contentEn.toLowerCase().includes(q) ||
      p.contentAm.toLowerCase().includes(q) ||
      (p.subtopicEn && p.subtopicEn.toLowerCase().includes(q)) ||
      (p.sectionRef && p.sectionRef.toLowerCase().includes(q))
  );
}
