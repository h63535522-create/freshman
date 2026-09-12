import { Course } from '../../types';
import { physicsChapter1 } from './chapter1';
import { physicsChapter2 } from './chapter2';
import { physicsChapter3 } from './chapter3';
import { physicsChapter4 } from './chapter4';
import { physicsChapter5 } from './chapter5';
import { physicsChapter6 } from './chapter6';
import { physicsChapter7 } from './chapter7';

export const physicsCourse: Course = {
  id: 'phys1011',
  code: 'Phys 1011',
  englishTitle: 'General Physics',
  amharicTitle: 'አጠቃላይ ፊዚክስ',
  badge: '7 Chapters (MoSHE)',
  descriptionEn: 'Official Ethiopian Ministry of Science and Higher Education (MoSHE 2019) General Physics module for university freshman natural science students: vectors, kinematics, Newton’s laws, work and energy, fluid mechanics, heat and thermodynamics, oscillations, optics, electromagnetism, electronics, and cross-cutting interdisciplinary applications.',
  descriptionAm: 'የኢ.ፌ.ዲ.ሪ የሳይንስ እና ከፍተኛ ትምህርት ሚኒስቴር (MoSHE) ይፋዊ የአንደኛ ዓመት የተፈጥሮ ሳይንስ ፊዚክስ ሞጁል፡ ቬክተሮች፣ እንቅስቃሴ፣ የኒውተን ህጎች፣ ስራና ኃይል፣ የፈሳሾች ሜካኒክስ፣ ሙቀትና ቴርሞዳይናሚክስ፣ ንዝረትና ኦፕቲክስ፣ ኤሌክትሮማግኔቲዝም፣ ኤሌክትሮኒክስ እና ሁለገብ ተግባራዊ አተገባበሮች።',
  creditHours: 3,
  stream: 'Natural Science',
  semester: 'Semester 1 or 2',
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'General_Physics_Student_Module_MoSHE_2019.pdf',
    title: 'General Physics Student Module (Phys 1011)',
    authorOrCommittee: 'National Physics Curriculum Committee (MoSHE)',
    publishedYear: '2019',
    totalUnitsOrChapters: 7
  },
  metadata: {
    courseCode: 'Phys 1011',
    creditHours: 3,
    targetAudience: 'University Freshman Natural Science Students',
    publishedYear: '2019',
    totalChapters: 7
  },
  chapters: [
    physicsChapter1,
    physicsChapter2,
    physicsChapter3,
    physicsChapter4,
    physicsChapter5,
    physicsChapter6,
    physicsChapter7
  ]
};
