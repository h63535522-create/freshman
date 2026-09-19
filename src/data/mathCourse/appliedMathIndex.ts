import { Course } from '../../types';
import { mathChapter1 } from './chapter1';
import { mathChapter2 } from './chapter2';
import { mathChapter3 } from './chapter3';
import { mathChapter4 } from './chapter4';
import { mathChapter5 } from './chapter5';

export const appliedMathCourse: Course = {
  id: 'math1014',
  code: 'Math 1014B',
  englishTitle: 'Applied Mathematics I (Math 1014B)',
  amharicTitle: 'አፕላይድ ሒሳብ ፩ቢ (Math 1014B)',
  badge: '5 Chapters (97 Pages PDF)',
  descriptionEn: 'Official AASTU Department of Mathematics Freshman Engineering & Applied Science Curriculum: Vectors & Vector Spaces (Ch 1), Matrices & Linear Systems (Ch 2), Limits & Continuity (Ch 3), Derivatives & Applications (Ch 4), and Integrations & Arc Length (Ch 5).',
  descriptionAm: 'በአዲስ አበባ ሳይንስና ቴክኖሎጂ ዩኒቨርሲቲ (AASTU) የሂሳብ ትምህርት ክፍል የተዘጋጀ ይፋዊ የምህንድስና እና አፕላይድ ሳይንስ ሞጁል፡ ቬክተሮች፣ ማትሪክስ፣ ወሰኖች፣ ዲሪቬቲቭ፣ ኢንተግራል እና የከርቭ ርዝመትን ያካተተ ሙሉ 97 ገጾች።',
  semester: 'Semester 2',
  stream: 'Natural Science',
  creditHours: 4,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Applied_Mathematics_1B_Math1014_AASTU.pdf',
    title: 'Lectures for Applied Mathematics-IB (Math 1014 / Math 1014B)',
    authorOrCommittee: 'AASTU Department of Mathematics (Engineering & Applied Sciences)',
    publishedYear: '2022',
    totalUnitsOrChapters: 5
  },
  metadata: {
    courseCode: 'Math 1014B',
    creditHours: 4,
    academicYear: 'Freshman Year (Semester II)',
    totalChapters: 5,
    author: 'Department of Mathematics, AASTU'
  },
  chapters: [
    mathChapter1,
    mathChapter2,
    mathChapter3,
    mathChapter4,
    mathChapter5
  ]
};
