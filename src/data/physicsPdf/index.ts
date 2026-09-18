import { OfficialPdfPage } from '../geographyPdf/types';
import { physicsIntroAndChapter1Pages } from './introAndChapter1';
import { physicsChapter2Pages } from './chapter2';
import { physicsChapter3Pages } from './chapter3';
import { physicsChapter4Pages } from './chapter4';
import { physicsChapter5Pages } from './chapter5';
import { physicsChapter6Pages } from './chapter6';

export * from '../geographyPdf/types';

export const physicsOfficialPdfPages: OfficialPdfPage[] = [
  ...physicsIntroAndChapter1Pages,
  ...physicsChapter2Pages,
  ...physicsChapter3Pages,
  ...physicsChapter4Pages,
  ...physicsChapter5Pages,
  ...physicsChapter6Pages
];

export const TOTAL_PHYSICS_PDF_PAGES = physicsOfficialPdfPages.length;

export function getPhysicsPdfPageByNumber(pageNumber: number): OfficialPdfPage | undefined {
  return physicsOfficialPdfPages.find((p) => p.pdfPageNumber === pageNumber);
}

export function getPhysicsPagesByChapter(chapterNumber: number): OfficialPdfPage[] {
  return physicsOfficialPdfPages.filter((p) => p.chapterNumber === chapterNumber);
}

export function searchPhysicsPdfPages(query: string): OfficialPdfPage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return physicsOfficialPdfPages.filter(
    (p) =>
      p.titleEn.toLowerCase().includes(q) ||
      p.titleAm.toLowerCase().includes(q) ||
      p.contentEn.toLowerCase().includes(q) ||
      p.contentAm.toLowerCase().includes(q) ||
      (p.subtopicEn && p.subtopicEn.toLowerCase().includes(q)) ||
      (p.sectionRef && p.sectionRef.toLowerCase().includes(q))
  );
}
