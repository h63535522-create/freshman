import { Course } from '../../types';
import { anthropologyChapter1 } from './chapter1';
import { anthropologyChapter2 } from './chapter2';
import { anthropologyChapter3 } from './chapter3';
import { anthropologyChapter4 } from './chapter4';
import { anthropologyChapter5 } from './chapter5';
import { anthropologyChapter6 } from './chapter6';

export const anthropologyCourse: Course = {
  id: 'anth1012',
  code: 'Anth 1012',
  englishTitle: 'Social Anthropology',
  amharicTitle: 'ማህበራዊ አንትሮፖሎጂ',
  badge: '6 Units (MoSHE)',
  descriptionEn: 'Official Ethiopian Ministry of Science and Higher Education (MoSHE 2019) Social Anthropology module for university freshman students: introducing anthropology, human diversity and evolution, culture and society, marginalization and gender vulnerability, ethnicity and inter-ethnic relations, and customary justice and indigenous knowledge systems in Ethiopia.',
  descriptionAm: 'የኢ.ፌ.ዲ.ሪ የሳይንስ እና ከፍተኛ ትምህርት ሚኒስቴር (MoSHE) ይፋዊ የአንደኛ ዓመት ማህበራዊ አንትሮፖሎጂ ሞጁል፡ የአንትሮፖሎጂ ምንነት፣ የሰው ልጅ ልዩነትና ዝግመተ-ለውጥ፣ ባህልና ማህበረሰብ፣ መገለልና ተጋላጭነት፣ ብሔርተኝነትና የብሔረሰቦች ግንኙነት፣ እንዲሁም ባህላዊ ፍትህና የሀገር በቀል እውቀት ስርአቶች በኢትዮጵያ።',
  creditHours: 3,
  stream: 'Common',
  semester: 'Semester 1 or 2',
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Social_Anthropology_Freshman_Module_MoSHE_2019.pdf',
    title: 'Social Anthropology Student Module (Anth 1012)',
    authorOrCommittee: 'National Anthropology Curriculum Committee (MoSHE)',
    publishedYear: '2019',
    totalUnitsOrChapters: 6
  },
  metadata: {
    courseCode: 'Anth 1012',
    creditHours: 3,
    targetAudience: 'University Freshman Students (Common Course)',
    publishedYear: '2019',
    totalChapters: 6
  },
  chapters: [
    anthropologyChapter1,
    anthropologyChapter2,
    anthropologyChapter3,
    anthropologyChapter4,
    anthropologyChapter5,
    anthropologyChapter6
  ]
};
