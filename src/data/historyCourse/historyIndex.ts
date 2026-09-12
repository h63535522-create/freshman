import { Course } from '../../types';
import { historyChapter1 } from './chapter1';
import { historyChapter2 } from './chapter2';
import { historyChapter3 } from './chapter3';
import { historyChapter4 } from './chapter4';
import { historyChapter5 } from './chapter5';
import { historyChapter6 } from './chapter6';
import { historyChapter7 } from './chapter7';

export const historyCourse: Course = {
  id: 'hist1012',
  code: 'Hist 1012',
  englishTitle: 'History of Ethiopia and the Horn',
  amharicTitle: 'የኢትዮጵያ እና የአፍሪካ ቀንድ ታሪክ',
  badge: '7 Units (MoSHE)',
  descriptionEn: 'Official Ethiopian Ministry of Science and Higher Education (MoSHE 2020) History module for university freshman students: Introduction to History and Historiography; Peoples and Cultures to the End of the 16th Century; Politics, Economy, and Socio-Cultural Processes (13th to 16th Centuries); Internal Dynamics and External Relations (16th to early 19th Centuries); Internal Developments and External Relations (1800 to 1941, including State Building, Battle of Adwa, and Fascist Resistance); and Contemporary Ethiopia (1941 to 1995, including Post-WWII Diplomacy, the Derg Regime, and the 1995 FDRE Constitution).',
  descriptionAm: 'የኢ.ፌ.ዲ.ሪ የሳይንስ እና ከፍተኛ ትምህርት ሚኒስቴር (MoSHE) ይፋዊ የአንደኛ ዓመት የኢትዮጵያና የአፍሪካ ቀንድ ታሪክ ሞጁል፡ የታሪክና የታሪክ አጻጻፍ (ሂስቶሪዮግራፊ) መግቢያ፤ የህዝቦችና የባህሎች እድገት እስከ ፲፮ኛው መ.ክ.ዘ፤ መንግስታት፣ ኢኮኖሚና ማህበራዊ ሂደቶች (ከ፲፫ኛው እስከ ፲፮ኛው መ.ክ.ዘ)፤ የውስጥ እንቅስቃሴዎችና የውጭ ግንኙነቶች (ከ፲፮ኛው እስከ ፲፱ኛው መ.ክ.ዘ መጀመሪያ)፤ የዘመናዊት ኢትዮጵያ ምስረታ፣ የዓድዋ ድል እና የፀረ-ፋሽስት ተጋድሎ (1800–1941)፤ እንዲሁም ከነጻነት መልስ እስከ ፲፱፻፹፯ የኢፌዴሪ ህገ-መንግስት ድረስ የተካሄዱ ታሪካዊ ክስተቶች።',
  creditHours: 3,
  stream: 'Common',
  semester: 'Semester 1 or 2',
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'History_of_Ethiopia_and_the_Horn_MoSHE_2020.pdf',
    title: 'History of Ethiopia and the Horn Student Module (Hist 1012)',
    authorOrCommittee: 'Surafel Gelgelo (Ph.D.), Deressa Debu (Ph.D.), Dereje Hinew (Ph.D.), Meseret Worku (M.A.) - MoSHE',
    publishedYear: '2020',
    totalUnitsOrChapters: 7
  },
  metadata: {
    courseCode: 'Hist 1012',
    creditHours: 3,
    targetAudience: 'University Freshman Students (Common Course)',
    publishedYear: '2020',
    totalChapters: 7
  },
  chapters: [
    historyChapter1,
    historyChapter2,
    historyChapter3,
    historyChapter4,
    historyChapter5,
    historyChapter6,
    historyChapter7
  ]
};
