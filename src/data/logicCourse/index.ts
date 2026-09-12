import { Course } from '../../types';
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter5 } from './chapter5';
import { chapter6 } from './chapter6';

export const logicAndCriticalThinkingCourse: Course = {
  id: 'loct1011',
  code: 'Phil 1011 / LoCT 1011',
  englishTitle: 'Logic and Critical Thinking',
  amharicTitle: 'ስነ-አመክንዮ እና ሂሳዊ አስተሳሰብ',
  badge: 'MoSHE Official Freshman Module',
  descriptionEn: 'The complete Ministry of Science and Higher Education (MoSHE) freshman common course covering Philosophy, Logic, Meaning and Definition, Critical Thinking Standards, 22 Informal Fallacies, and Categorical Propositions.',
  descriptionAm: 'የኢ.ፌ.ዲ.ሪ የሳይንስ እና ከፍተኛ ትምህርት ሚኒስቴር (MoSHE) ይፋዊ የአንደኛ ዓመት የጋራ ኮርስ፡ ፍልስፍና፣ የአመክንዮ መሰረቶች፣ ቋንቋና ፍቺ፣ የሂሳዊ አስተሳሰብ መስፈርቶች፣ ፳፪ቱ የተሳሳቱ አመክንዮዎች (Fallacies) እና ምድባዊ ዓረፍተ-ነገሮችን የያዘ የተሟላ ሞጁል።',
  semester: 'Semester 1 or 2',
  stream: 'Common',
  creditHours: 3,
  pdfModule: {
    filename: 'Logic_and_Critical_thinking_module.pdf',
    title: 'Logic and Critical Thinking Module (Phil 1011)',
    authorOrCommittee: 'Ministry of Science and Higher Education (MoSHE) Expert Committee',
    publishedYear: '2019',
    totalUnitsOrChapters: 6
  },
  hasInteractiveContent: true,
  metadata: {
    version: '2019 MoSHE Standard Edition',
    targetAudience: 'All Higher Education Freshman Students in Ethiopia',
    language: 'English with full Amharic translations',
    totalChapters: 6,
    totalInteractiveLessons: 24,
    totalPracticeQuestions: 36,
    totalFlashcards: 32
  },
  chapters: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6
  ]
};
