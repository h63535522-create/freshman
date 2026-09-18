import { OfficialPdfPage } from '../geographyPdf/types';
import { english2IntroAndUnit1Pages } from './introAndUnit1';
import { english2Unit2Pages } from './unit2';
import { english2Unit3And4Pages } from './unit3And4';
import { english2Unit5AndSupplementsPages } from './unit5AndSupplements';

export * from '../geographyPdf/types';

// Complete collection of all 97 official MoE Communicative English Language Skills II (EnLa 102 / FLEn 1012) PDF pages
export const english2OfficialPdfPages: OfficialPdfPage[] = [
  ...english2IntroAndUnit1Pages,
  ...english2Unit2Pages,
  ...english2Unit3And4Pages,
  ...english2Unit5AndSupplementsPages,
];

export const TOTAL_ENGLISH2_PDF_PAGES = english2OfficialPdfPages.length;

export function getEnglish2PdfPageByNumber(pageNumber: number): OfficialPdfPage | undefined {
  return english2OfficialPdfPages.find((p) => p.pdfPageNumber === pageNumber);
}

export function getEnglish2PagesByChapter(chapterNumber: number): OfficialPdfPage[] {
  return english2OfficialPdfPages.filter((p) => p.chapterNumber === chapterNumber);
}

export function searchEnglish2PdfPages(query: string): OfficialPdfPage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return english2OfficialPdfPages.filter(
    (p) =>
      p.titleEn.toLowerCase().includes(q) ||
      p.titleAm.toLowerCase().includes(q) ||
      p.contentEn.toLowerCase().includes(q) ||
      p.contentAm.toLowerCase().includes(q) ||
      (p.subtopicEn && p.subtopicEn.toLowerCase().includes(q)) ||
      (p.sectionRef && p.sectionRef.toLowerCase().includes(q))
  );
}
