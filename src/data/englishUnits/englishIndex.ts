import { Chapter } from '../../types';
import { unit1 } from './unit1';
import { unit2 } from './unit2';
import { unit3 } from './unit3';
import { unit4 } from './unit4';
import { unit5 } from './unit5';

export const allEnglishUnits: Chapter[] = [
  unit1,
  unit2,
  unit3,
  unit4,
  unit5
];

export const englishCourseMetadata = {
  courseCode: 'FLEn 1011',
  englishTitle: 'Communicative English Language Skills I',
  amharicTitle: 'ተግባቦታዊ የእንግሊዝኛ ቋንቋ ክህሎት ፩',
  institution: 'Federal Democratic Republic of Ethiopia - Ministry of Science and Higher Education (MoSHE)',
  institutionAmharic: 'የኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የሳይንስ እና ከፍተኛ ትምህርት ሚኒስቴር',
  academicLevel: 'Ethiopian University Freshman Course (የመጀመሪያ ዓመት ኮርስ)',
  publicationDate: 'September 2019',
  contributors: [
    { name: 'Dr. Tekle Ferede', university: 'Jimma University', chapters: 'Unit 1 & Unit 5' },
    { name: 'Dr. Yinager Teklesellassie', university: 'Bahir Dar University', chapters: 'Unit 2 & Unit 4' },
    { name: 'Dr. Geremew Lemu', university: 'Addis Ababa University', chapters: 'Unit 3 & Unit 5' }
  ]
};
