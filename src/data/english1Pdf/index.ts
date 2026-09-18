import { OfficialPdfPage } from '../geographyPdf/types';
import { english1PrefaceAndUnit1Pages } from './prefaceAndUnit1';
import { english1Unit2And3Pages } from './unit2And3';
import { english1Unit4And5Pages } from './unit4And5';

export * from '../geographyPdf/types';

// Complete collection of all 78 official MoE Communicative English Language Skills I (FLEn 1011) PDF pages
export const english1OfficialPdfPages: OfficialPdfPage[] = [
  ...english1PrefaceAndUnit1Pages,
  ...english1Unit2And3Pages,
  ...english1Unit4And5Pages,
];

export const TOTAL_ENGLISH1_PDF_PAGES = english1OfficialPdfPages.length;

export function getEnglish1PdfPageByNumber(pageNumber: number): OfficialPdfPage | undefined {
  return english1OfficialPdfPages.find((p) => p.pdfPageNumber === pageNumber);
}

export function getEnglish1PagesByChapter(chapterNumber: number): OfficialPdfPage[] {
  return english1OfficialPdfPages.filter((p) => p.chapterNumber === chapterNumber);
}

export function searchEnglish1PdfPages(query: string): OfficialPdfPage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return english1OfficialPdfPages.filter(
    (p) =>
      p.titleEn.toLowerCase().includes(q) ||
      p.titleAm.toLowerCase().includes(q) ||
      p.contentEn.toLowerCase().includes(q) ||
      p.contentAm.toLowerCase().includes(q) ||
      (p.subtopicEn && p.subtopicEn.toLowerCase().includes(q)) ||
      (p.sectionRef && p.sectionRef.toLowerCase().includes(q))
  );
}
