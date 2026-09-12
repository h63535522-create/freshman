export type ViewMode = 'side-by-side' | 'english' | 'amharic';
export type ActiveTab = 'reader' | 'summary' | 'summaries' | 'qna' | 'exercises' | 'flashcards' | 'dashboard';

export interface BilingualText {
  en: string;
  am: string;
}

export interface KeyTerm {
  en: string;
  am: string;
  defEn?: string;
  defAm?: string;
}

export interface ParagraphBlock {
  id: string;
  subheading?: BilingualText;
  en: string;
  am: string;
  highlightTerms?: KeyTerm[];
  note?: BilingualText;
}

export interface Section {
  id: string;
  number: string;
  title: BilingualText;
  paragraphs: ParagraphBlock[];
}

export interface QAItem {
  id: string;
  number: number;
  question: BilingualText;
  answer: BilingualText;
  explanation: BilingualText;
  category: 'conceptual' | 'exam_mcq' | 'case_study' | 'discussion';
}

export interface SummaryNote {
  id: string;
  title: BilingualText;
  bullets: BilingualText[];
}

export interface QuizOption {
  id: string;
  text: BilingualText;
}

export interface QuizExercise {
  id: string;
  number?: number;
  question: BilingualText;
  options: QuizOption[];
  correctOptionId: string;
  explanation: BilingualText;
}

export interface MatchingPair {
  id: string;
  concept: BilingualText;
  definition: BilingualText;
}

export interface FlashcardItem {
  id: string;
  termEn: string;
  termAm: string;
  phoneticAm?: string;
  defEn: string;
  defAm: string;
  exampleEn?: string;
  exampleAm?: string;
  chapter: number;
}

export interface Chapter {
  id: number;
  number: number;
  title: BilingualText;
  universityAuthor: string;
  overview: BilingualText;
  learningOutcomes: BilingualText[];
  sections: Section[];
  coreConcepts?: Array<{
    termEn: string;
    termAm: string;
    defEn?: string;
    defAm?: string;
  }>;
  summaries: SummaryNote[];
  qna: QAItem[];
  quizzes: QuizExercise[];
  matching?: MatchingPair[];
  flashcards: FlashcardItem[];
}

export interface GlossaryTerm {
  id: string;
  english: string;
  amharic: string;
  category: string;
  definitionEn: string;
  definitionAm: string;
  chapter: number;
}

export type QuizQuestion = QuizExercise;
export type Flashcard = FlashcardItem;
export type QuestionAnswer = QAItem;

export interface Course {
  id: string;
  code: string;
  englishTitle: string;
  amharicTitle: string;
  badge: string;
  descriptionEn: string;
  descriptionAm: string;
  chapters: Chapter[];
  metadata: any;
  semester?: 'Semester 1' | 'Semester 2' | 'Semester 1 or 2';
  stream?: 'Common' | 'Natural Science' | 'Social Science';
  creditHours?: number;
  pdfModule?: {
    filename: string;
    title: string;
    authorOrCommittee: string;
    publishedYear: string;
    totalUnitsOrChapters: number;
  };
  hasInteractiveContent?: boolean;
}
