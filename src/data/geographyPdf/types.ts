export interface OfficialPdfPage {
  pdfPageNumber: number; // 1 to 175
  bookPageLabel: string; // "Cover", "ii", "iii", "iv", "v", "vi", "vii", "1", "2", ... "168"
  chapterNumber?: number; // 1 to 8, undefined for Cover/Preface/TOC/References
  sectionRef?: string; // e.g. "1.1", "2.4.3", "Preface", "TOC"
  titleEn: string;
  titleAm: string;
  subtopicEn?: string;
  subtopicAm?: string;
  pageType: 'cover' | 'preface' | 'toc' | 'content' | 'table' | 'activity' | 'review' | 'references' | 'intro' | 'case_study' | 'summary';
  contentEn: string;
  contentAm: string;
  tables?: {
    id: string;
    caption: string;
    headers: string[];
    rows: (string | number)[][];
    source?: string;
    note?: string;
  }[];
  activities?: {
    title: string;
    questions: string[];
  }[];
  reviewQuestions?: {
    title: string;
    questions: string[];
  }[];
  figures?: {
    id: string;
    caption: string;
    source?: string;
    description: string;
  }[];
  formulas?: {
    name: string;
    formula: string;
    explanation: string;
  }[];
}
