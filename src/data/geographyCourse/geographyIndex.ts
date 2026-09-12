import { Course } from '../../types';
import { geographyChapter1 } from './chapter1';
import { geographyChapter2 } from './chapter2';
import { geographyChapter3 } from './chapter3';
import { geographyChapter4 } from './chapter4';
import { geographyChapter5 } from './chapter5';
import { geographyChapter6 } from './chapter6';
import { geographyChapter7 } from './chapter7';
import { geographyChapter8 } from './chapter8';

export const geographyCourse: Course = {
  id: 'gees1011',
  code: 'GeES 1011',
  englishTitle: 'Geography of Ethiopia and the Horn',
  amharicTitle: 'የኢትዮጵያ እና የአፍሪካ ቀንድ ጂኦግራፊ',
  badge: '8 Chapters (MoE)',
  descriptionEn: 'Official Ethiopian Ministry of Education (MoE) Geography module for university freshman students: Introduction, Location, Shape and Size; Geology and Geological Processes; Topography and Relief; Drainage Systems and Water Resources; Climate and Agro-Ecological Zones; Soils, Natural Vegetation, and Wildlife; Population Dynamics; and Economic Activities (Agriculture, Industry, Infrastructure, Trade, and Tourism).',
  descriptionAm: 'የኢ.ፌ.ዲ.ሪ የትምህርት ሚኒስቴር (MoE) ይፋዊ የአንደኛ ዓመት የኢትዮጵያና የአፍሪካ ቀንድ ጂኦግራፊ ሞጁል፡ መገኛ፣ ቅርፅና ስፋት፤ የጂኦሎጂ ታሪክና አለቶች፤ የመሬት ገጽታና አቀማመጥ፤ የውሃ ሀብትና ተፋሰሶች፤ አየር ንብረት፤ አፈር፣ የተፈጥሮ እፅዋትና የዱር አራዊት፤ የስነ-ህዝብ ሁኔታ፤ እንዲሁም የኢኮኖሚ እንቅስቃሴዎች (ግብርና፣ ማኑፋክቸሪንግ፣ ትራንስፖርት፣ ንግድና ቱሪዝም)።',
  creditHours: 3,
  stream: 'Common',
  semester: 'Semester 1',
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Geography_of_Ethiopia_and_the_Horn_MoE_2019.pdf',
    title: 'Geography of Ethiopia and the Horn Student Module (GeES 1011)',
    authorOrCommittee: 'Dr. Teferi Mekonnen (AAU), Mr. Nigatu Gebremedhin (Wolkite Univ.), Dr. Alem-meta Assefa (Wollo Univ.), Dr. Binyam Moreda (Hawassa Univ.) - MoE',
    publishedYear: '2019',
    totalUnitsOrChapters: 8
  },
  metadata: {
    courseCode: 'GeES 1011',
    creditHours: 3,
    targetAudience: 'University Freshman Students (Common Course)',
    publishedYear: '2019',
    totalChapters: 8
  },
  chapters: [
    geographyChapter1,
    geographyChapter2,
    geographyChapter3,
    geographyChapter4,
    geographyChapter5,
    geographyChapter6,
    geographyChapter7,
    geographyChapter8
  ]
};
