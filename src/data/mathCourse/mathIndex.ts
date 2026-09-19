import { Course } from '../../types';
import { mathChapter1 } from './chapter1';
import { mathChapter2 } from './chapter2';
import { mathChapter3 } from './chapter3';
import { mathChapter4 } from './chapter4';
import { mathChapter5 } from './chapter5';
import { mathChapter6 } from './chapter6';

export const mathCourse: Course = {
  id: 'math1011',
  code: 'Math 1011',
  englishTitle: 'Mathematics (Vectors, Matrices, Calculus, Sequences & Series)',
  amharicTitle: 'ሒሳብ (ቬክተሮች፣ ማትሪክስ፣ ካልኩለስ እና ቅደም-ተከተሎች)',
  badge: '6 Chapters (168 Pages PDF)',
  descriptionEn: 'Official Ethiopian University curriculum by Tibebe-selassie T/mariam (Department of Mathematics, AAU): Vectors and vector spaces, matrices and linear systems, limits and continuity, derivatives and applications, integrals and applications, and infinite sequences and series.',
  descriptionAm: 'በጥበበ-ሥላሴ ተ/ማርያም (የአዲስ አበባ ዩኒቨርሲቲ የሂሳብ ትምህርት ክፍል) የተዘጋጀ ይፋዊ የኢትዮጵያ ዩኒቨርሲቲ ሞጁል፡ ቬክተሮች፣ ማትሪክስ፣ ወሰኖች፣ ዲሪቬቲቭ፣ ኢንተግራል እንዲሁም ቅደም-ተከተሎችንና ድምሮችን በዝርዝር ያካተተ።',
  semester: 'Semester 1 or 2',
  stream: 'Natural Science',
  creditHours: 4,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Applied_Mathematics_MoE_Ethiopia.pdf',
    title: 'Mathematics Student Module',
    authorOrCommittee: 'Tibebe-selassie T/mariam (Department of Mathematics, AAU / MoSHE)',
    publishedYear: '2020',
    totalUnitsOrChapters: 6
  },
  metadata: {
    courseCode: 'Math 1011',
    creditHours: 4,
    academicYear: 'Freshman Year',
    totalChapters: 6,
    author: 'Tibebe-selassie T/mariam (AAU)'
  },
  chapters: [
    mathChapter1,
    mathChapter2,
    mathChapter3,
    mathChapter4,
    mathChapter5,
    mathChapter6
  ]
};
