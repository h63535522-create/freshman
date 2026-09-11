import { Chapter } from '../types';
import { allChapters as psychologyChapters, courseMetadata as psychologyMetadata } from './chaptersIndex';
import { allEnglishUnits as englishChapters, englishCourseMetadata } from './englishUnits/englishIndex';

export interface Course {
  id: string; // 'psyc1011' | 'flen1011'
  code: string;
  englishTitle: string;
  amharicTitle: string;
  badge: string;
  descriptionEn: string;
  descriptionAm: string;
  chapters: Chapter[];
  metadata: any;
}

export const allCourses: Course[] = [
  {
    id: 'psyc1011',
    code: 'Psyc 1011',
    englishTitle: 'General Psychology & Life Skills',
    amharicTitle: 'አጠቃላይ ስነ-ልቦና እና የህይወት ክህሎት',
    badge: '11 Chapters',
    descriptionEn: 'Scientific study of human behavior, cognition, learning, motivation, personality, and life skills.',
    descriptionAm: 'የሰው ልጅ ባህሪ፣ አዕምሮ፣ ትምህርት፣ ስብዕና እና የህይወት ክህሎት ሳይንሳዊ ጥናት።',
    chapters: psychologyChapters,
    metadata: psychologyMetadata
  },
  {
    id: 'flen1011',
    code: 'FLEn 1011',
    englishTitle: 'Communicative English Language Skills I',
    amharicTitle: 'ተግባቦታዊ የእንግሊዝኛ ቋንቋ ክህሎት ፩',
    badge: '5 Units',
    descriptionEn: 'University study skills, note-taking, reading comprehension, grammar mechanics, and vocabulary.',
    descriptionAm: 'የዩኒቨርሲቲ ጥናት ክህሎቶች፣ ማስታወሻ አያያዝ፣ ጥልቅ ንባብ፣ ሰዋሰው እና የቃላት እውቀት።',
    chapters: englishChapters,
    metadata: englishCourseMetadata
  }
];
