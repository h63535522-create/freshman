import { Course } from '../../types';
import { unit1 } from './unit1';
import { unit2 } from './unit2';
import { unit3 } from './unit3';
import { unit4 } from './unit4';
import { unit5 } from './unit5';

export const communicativeEnglish2Course: Course = {
  id: 'flen1012',
  code: 'FLEn 1012',
  englishTitle: 'Communicative English Language Skills II',
  amharicTitle: 'ተግባቦታዊ የእንግሊዝኛ ቋንቋ ክህሎት ፪',
  badge: '5 Units',
  descriptionEn: 'Ethiopian University Freshman Second Semester Curriculum by Dr. Abiy Yigzaw (Jan. 2020), featuring Life Skills, Future of Science (Dr. Aklilu Lemma & Endod at Adwa), Environmental Protection (River Murray crisis), Indigenous Knowledge (Benjamin Mkapa & Dr. Berhane Asfaw on 6M-year human evolution in Afar), and Cultural Heritage (UNESCO sites & relative clauses).',
  descriptionAm: 'የኢትዮጵያ ዩኒቨርሲቲዎች የአንደኛ ዓመት የሁለተኛ ሴሚስተር ሞጁል በዶ/ር አብይ ይግዛው (ጥር 2012 ዓ.ም)፡ የህይወት ክህሎቶችን፣ የሳይንስ የወደፊት እጣ (ዶ/ር አክሊሉ ለማና ዕንድድ)፣ የአካባቢ ጥበቃን (የሙሬይ ወንዝ ቀውስ)፣ የአገር በቀል እውቀትን (ቤንጃሚን ምካፓ እና ዶ/ር በርhane አስፋው በአፋር የ6 ሚሊዮን ዓመታት የሰው ልጅ ዝግመተ-ለውጥ) እና ባህላዊ ቅርሶችን (የዩኔስኮ ቅርሶችና ሰዋሰው) ያካተተ።',
  chapters: [unit1, unit2, unit3, unit4, unit5],
  metadata: {
    courseCode: 'FLEn 1012',
    titleEn: 'Communicative English Language Skills II',
    titleAm: 'ተግባቦታዊ የእንግሊዝኛ ቋንቋ ክህሎት ፪',
    author: 'Dr. Abiy Yigzaw (Jan. 2020)',
    institution: 'Federal Democratic Republic of Ethiopia - Ministry of Science and Higher Education (MoSHE)',
    creditHours: 3,
    year: 'Freshman Second Semester'
  }
};
