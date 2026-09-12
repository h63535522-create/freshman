import { Chapter, Course } from '../types';
import { allChapters as psychologyChapters, courseMetadata as psychologyMetadata } from './chaptersIndex';
import { allEnglishUnits as englishChapters, englishCourseMetadata } from './englishUnits/englishIndex';
import { unit1 as eng2U1 } from './englishUnits2/unit1';
import { unit2 as eng2U2 } from './englishUnits2/unit2';
import { unit3 as eng2U3 } from './englishUnits2/unit3';
import { unit4 as eng2U4 } from './englishUnits2/unit4';
import { unit5 as eng2U5 } from './englishUnits2/unit5';
import { moePdfCoursesList } from './moePdfCourses';

export type { Course };

export const english2Chapters: Chapter[] = [eng2U1, eng2U2, eng2U3, eng2U4, eng2U5];

export const english2CourseMetadata = {
  courseCode: 'FLEn 1012',
  titleEn: 'Communicative English Language Skills II',
  titleAm: 'ተግባቦታዊ የእንግሊዝኛ ቋንቋ ክህሎት ፪',
  author: 'Dr. Abiy Yigzaw (Jan. 2020)',
  institution: 'Federal Democratic Republic of Ethiopia - Ministry of Education (MoE)',
  creditHours: 3,
  year: 'Freshman Second Semester'
};

export const allCourses: Course[] = [
  {
    id: 'flen1011',
    code: 'FLEn 1011',
    englishTitle: 'Communicative English Language Skills I',
    amharicTitle: 'ተግባቦታዊ የእንግሊዝኛ ቋንቋ ክህሎት ፩',
    badge: '5 Units (PDF)',
    descriptionEn: 'University study skills, note-taking, reading comprehension, grammar mechanics, and academic vocabulary.',
    descriptionAm: 'የዩኒቨርሲቲ ጥናት ክህሎቶች፣ ማስታወሻ አያያዝ፣ ጥልቅ ንባብ፣ ሰዋሰው እና የቃላት እውቀት።',
    semester: 'Semester 1',
    stream: 'Common',
    creditHours: 3,
    hasInteractiveContent: true,
    pdfModule: {
      filename: 'Communicative_English_Language_Skills_I_MoE_2019.pdf',
      title: 'Communicative English Language Skills I Module',
      authorOrCommittee: 'MoE National English Panel',
      publishedYear: '2019',
      totalUnitsOrChapters: 5
    },
    chapters: englishChapters,
    metadata: englishCourseMetadata
  },
  {
    id: 'flen1012',
    code: 'FLEn 1012',
    englishTitle: 'Communicative English Language Skills II',
    amharicTitle: 'ተግባቦታዊ የእንግሊዝኛ ቋንቋ ክህሎት ፪',
    badge: '5 Units (PDF)',
    descriptionEn: 'Life Skills, Future of Science (Dr. Aklilu Lemma & Endod at Adwa), River Murray crisis, Indigenous Knowledge (Benjamin Mkapa & Afar fossils by Dr. Berhane Asfaw), and Cultural Heritage.',
    descriptionAm: 'የህይወት ክህሎት፣ የሳይንስ የወደፊት እጣ (ዶ/ር አክሊሉ ለማና ዕንድድ)፣ የአካባቢ ጥበቃ (የሙሬይ ወንዝ)፣ አገር በቀል እውቀት (ቤንጃሚን ምካፓ እና የአፋር ቅሪተ-አካላት)፣ እና ባህላዊ ቅርሶች።',
    semester: 'Semester 2',
    stream: 'Common',
    creditHours: 3,
    hasInteractiveContent: true,
    pdfModule: {
      filename: 'Communicative_English_Language_Skills_II_MoE_2020.pdf',
      title: 'Communicative English Language Skills II Module',
      authorOrCommittee: 'Dr. Abiy Yigzaw (MoE)',
      publishedYear: '2020',
      totalUnitsOrChapters: 5
    },
    chapters: english2Chapters,
    metadata: english2CourseMetadata
  },
  {
    id: 'psyc1011',
    code: 'Psyc 1011',
    englishTitle: 'General Psychology & Life Skills',
    amharicTitle: 'አጠቃላይ ስነ-ልቦና እና የህይወት ክህሎት',
    badge: '11 Chapters (PDF)',
    descriptionEn: 'Scientific study of human behavior, cognition, learning, motivation, personality, and life skills in Ethiopian higher education.',
    descriptionAm: 'የሰው ልጅ ባህሪ፣ አዕምሮ፣ ትምህርት፣ ስብዕና እና የህይወት ክህሎት ሳይንሳዊ ጥናት።',
    semester: 'Semester 1 or 2',
    stream: 'Common',
    creditHours: 3,
    hasInteractiveContent: true,
    pdfModule: {
      filename: 'General_Psychology_MoE_2019.pdf',
      title: 'General Psychology Student Module',
      authorOrCommittee: 'National Psychology Curriculum Committee',
      publishedYear: '2019',
      totalUnitsOrChapters: 11
    },
    chapters: psychologyChapters,
    metadata: psychologyMetadata
  },
  ...moePdfCoursesList
];
