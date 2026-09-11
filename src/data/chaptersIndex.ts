import { Chapter } from '../types';
import { chapter1 } from './chapters/chapter1';
import { chapter2 } from './chapters/chapter2';
import { chapter3 } from './chapters/chapter3';
import { chapter4 } from './chapters/chapter4';
import { chapter5 } from './chapters/chapter5';
import { chapter6 } from './chapters/chapter6';
import { chapter7 } from './chapters/chapter7';
import { chapter8 } from './chapters/chapter8';
import { chapter9 } from './chapters/chapter9';
import { chapter10 } from './chapters/chapter10';
import { chapter11 } from './chapters/chapter11';

export const allChapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
  chapter10,
  chapter11
];

export const courseMetadata = {
  courseCode: 'Psyc 1011',
  englishTitle: 'General Psychology & Life Skills',
  amharicTitle: 'አጠቃላይ ስነ-ልቦና እና የህይወት ክህሎት',
  institution: 'Federal Democratic Republic of Ethiopia - Ministry of Science and Higher Education (MoSHE)',
  institutionAmharic: 'የኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የሳይንስ እና ከፍተኛ ትምህርት ሚኒስቴር',
  academicLevel: 'Ethiopian University Freshman Course (የመጀመሪያ ዓመት ኮርስ)',
  editor: 'Belay Tefera, Ph.D. (Addis Ababa University)',
  publicationDate: 'September 2019',
  contributors: [
    { name: 'Koye Kassa', university: 'Bahir Dar University', chapters: 'Chapter 1, 5, 6' },
    { name: 'Belay Tefera', university: 'Addis Ababa University', chapters: 'Chapter 2 (Editor & Revised)' },
    { name: 'Aemero Asmamaw', university: 'University of Gondar', chapters: 'Chapter 3, 4, 7' },
    { name: 'Habtamu Disasa', university: 'Dilla University', chapters: 'Chapter 8, 9, 10, 11' }
  ]
};
