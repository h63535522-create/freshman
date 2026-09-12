import { Course } from '../../types';
import { entrepreneurshipChapter1 } from './chapter1';
import { entrepreneurshipChapter2 } from './chapter2';
import { entrepreneurshipChapter3 } from './chapter3';
import { entrepreneurshipChapter4 } from './chapter4';
import { entrepreneurshipChapter5 } from './chapter5';
import { entrepreneurshipChapter6 } from './chapter6';

export const entrepreneurshipCourse: Course = {
  id: 'mgmt1012',
  code: 'Mgmt 1012',
  englishTitle: 'Entrepreneurship',
  amharicTitle: 'ስራ ፈጠራና ቢዝነስ አመራር',
  badge: '6 Units (MoSHE)',
  descriptionEn: 'Official Ethiopian Ministry of Science and Higher Education (MoSHE 2019) Entrepreneurship module for university freshman students: Nature of Entrepreneurship and historical evolution, Business Planning and Opportunity Evaluation, Business Formation and Ethiopian MSE Development, Product/Service Development and Intellectual Property Rights (EIPO), Marketing Strategy and Customer Retention, and Business Financing including Lease Financing and Indigenous Institutions (Equib and Edir).',
  descriptionAm: 'የኢ.ፌ.ዲ.ሪ የሳይንስ እና ከፍተኛ ትምህርት ሚኒስቴር (MoSHE) ይፋዊ የአንደኛ ዓመት ስራ ፈጠራ ሞጁል፡ የስራ ፈጠራ ምንነትና ታሪካዊ እድገት፣ የቢዝነስ እቅድ ዝግጅትና የአጋጣሚዎች ግምገማ፣ የቢዝነስ ምስረታና የኢትዮጵያ አነስተኛና ጥቃቅን ኢንተርፕራይዞች (አጥኢ) ልማት፣ የምርት ልማትና የአዕምሯዊ ንብረት ጥበቃ ህግጋት (EIPO)፣ የገበያ ስትራቴጂና የደንበኞች አያያዝ፣ እንዲሁም የቢዝነስ ፋይናንስ፣ የሊዝ ፋይናንስ እና አገር በቀል ተቋማት (እቁብና እድgroup)።',
  creditHours: 3,
  stream: 'Common',
  semester: 'Semester 1 or 2',
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Entrepreneurship_Student_Module_MoSHE_2019.pdf',
    title: 'Entrepreneurship Student Module (Mgmt 1012)',
    authorOrCommittee: 'Bantie Workie (PhD), Mulugeta Chane (MBA), Mustefa Mohammed (MBA), Teshale Birhanu (PhD) - MoSHE',
    publishedYear: '2019',
    totalUnitsOrChapters: 6
  },
  metadata: {
    courseCode: 'Mgmt 1012',
    creditHours: 3,
    targetAudience: 'University Freshman Students (Common Course)',
    publishedYear: '2019',
    totalChapters: 6
  },
  chapters: [
    entrepreneurshipChapter1,
    entrepreneurshipChapter2,
    entrepreneurshipChapter3,
    entrepreneurshipChapter4,
    entrepreneurshipChapter5,
    entrepreneurshipChapter6
  ]
};
