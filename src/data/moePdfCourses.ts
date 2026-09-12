import { Course, Chapter } from '../types';
import { logicAndCriticalThinkingCourse } from './logicCourse';
import { physicsCourse } from './physicsCourse/physicsIndex';
import { anthropologyCourse as fullAnthropologyCourse } from './anthropologyCourse/anthropologyIndex';
import { entrepreneurshipCourse } from './entrepreneurshipCourse/entrepreneurshipIndex';
import { historyCourse as fullHistoryCourse } from './historyCourse/historyIndex';
import { geographyCourse as fullGeographyCourse } from './geographyCourse/geographyIndex';

// Helper to create valid Chapter data structure for modular MoE courses
function makePdfChapter(
  id: number,
  number: number,
  titleEn: string,
  titleAm: string,
  overviewEn: string,
  overviewAm: string,
  author: string,
  coreConcepts: { termEn: string; termAm: string; defEn: string; defAm: string }[],
  summaryBulletsEn: string[],
  summaryBulletsAm: string[],
  qnaItems: { qEn: string; qAm: string; aEn: string; aAm: string; expEn: string; expAm: string }[],
  quizItems: {
    qEn: string;
    qAm: string;
    opts: { id: string; en: string; am: string }[];
    correctId: string;
    expEn: string;
    expAm: string;
  }[]
): Chapter {
  return {
    id,
    number,
    title: { en: titleEn, am: titleAm },
    universityAuthor: author,
    overview: { en: overviewEn, am: overviewAm },
    learningOutcomes: [
      {
        en: `Understand the core theoretical frameworks of ${titleEn}.`,
        am: `የ${titleAm}ን መሰረታዊ ንድፈ-ሀሳባዊ ማዕቀፎች መረዳት።`
      },
      {
        en: `Analyze and apply foundational principles to Ethiopian and global contexts.`,
        am: `መሰረታዊ መርሆችን በኢትዮጵያ እና በዓለም አቀፍ ሁኔታዎች ላይ መተንተን እና መተግበር።`
      },
      {
        en: `Evaluate key concepts and demonstrate mastery through critical problem solving.`,
        am: `ቁልፍ ፅንሰ-ሀሳቦችን መገምገም እና በችግር አፈታት ጥልቅ ግንዛቤን ማሳየት።`
      }
    ],
    sections: [
      {
        id: `sec-${id}-1`,
        number: `${number}.1`,
        title: {
          en: `Foundations of ${titleEn}`,
          am: `የ${titleAm} መሰረታዊ መርሆች`
        },
        paragraphs: [
          {
            id: `p-${id}-1`,
            en: overviewEn,
            am: overviewAm,
            highlightTerms: coreConcepts.map((c) => ({
              en: c.termEn,
              am: c.termAm,
              defEn: c.defEn,
              defAm: c.defAm
            }))
          },
          {
            id: `p-${id}-2`,
            en: `In the standardized MoE university curriculum, this unit provides essential competency for all freshman undergraduate students in Ethiopian universities. It bridges academic inquiry with practical problem-solving in the Ethiopian socio-economic development landscape.`,
            am: `በደረጃ በወጣው የትምህርት ሚኒስቴር (MoE) የዩኒቨርሲቲ ሞጁል ውስጥ ይህ ምዕራፍ በኢትዮጵያ ዩኒቨርሲቲዎች ላሉ የመጀመሪያ ዓመት ተማሪዎች ወሳኝ ብቃትን ያሰርፃል። የአካዳሚክ ምርምርን ከአገራዊ ማህበራዊና ኢኮኖሚያዊ ልማት ጋር ያዛምዳል።`
          }
        ]
      }
    ],
    summaries: [
      {
        id: `sum-${id}-1`,
        title: {
          en: `Key Takeaways for Chapter ${number}`,
          am: `የምዕራፍ ${number} ዋና ዋና ነጥቦች`
        },
        bullets: summaryBulletsEn.map((en, idx) => ({
          en,
          am: summaryBulletsAm[idx] || en
        }))
      }
    ],
    qna: qnaItems.map((q, idx) => ({
      id: `qna-${id}-${idx + 1}`,
      number: idx + 1,
      question: { en: q.qEn, am: q.qAm },
      answer: { en: q.aEn, am: q.aAm },
      explanation: { en: q.expEn, am: q.expAm },
      category: 'conceptual'
    })),
    quizzes: quizItems.map((qz, idx) => ({
      id: `quiz-${id}-${idx + 1}`,
      question: { en: qz.qEn, am: qz.qAm },
      options: qz.opts.map((o) => ({
        id: o.id,
        text: { en: o.en, am: o.am }
      })),
      correctOptionId: qz.correctId,
      explanation: { en: qz.expEn, am: qz.expAm }
    })),
    flashcards: coreConcepts.map((c, idx) => ({
      id: `fc-${id}-${idx + 1}`,
      termEn: c.termEn,
      termAm: c.termAm,
      defEn: c.defEn,
      defAm: c.defAm,
      chapter: number
    }))
  };
}

// 1. Logic and Critical Thinking (LoCT 1011 / Phil 1011) - Full 6-Chapter Interactive Curriculum
export const logicCourse: Course = logicAndCriticalThinkingCourse;

// 2. Geography of Ethiopia and the Horn (GeES 1011) - Full 8-Chapter Interactive MoE Curriculum
export const geographyCourse: Course = fullGeographyCourse;

// 3. History of Ethiopia and the Horn (Hist 1012) - Full 7-Chapter Interactive Curriculum
export const historyCourse: Course = fullHistoryCourse;

// 4. Emerging Technologies (EmTe 1012)
export const emergingTechCourse: Course = {
  id: 'emte1012',
  code: 'EmTe 1012',
  englishTitle: 'Introduction to Emerging Technologies',
  amharicTitle: 'አዳዲስ እና ተስፈኛ ቴክኖሎጂዎች መግቢያ',
  badge: '6 Chapters (PDF)',
  descriptionEn: 'National MoE freshman module introducing Fourth Industrial Revolution innovations: AI, Data Science, IoT, Cybersecurity, Cloud, and AR/VR/Robotics.',
  descriptionAm: 'አራተኛው የኢንዱስትሪ አብዮት ያመጣቸውን አዳዲስ ቴክኖሎጂዎች፡ አርቴፊሻል ኢንተለጀንስ (AI)፣ ዳታ ሳይንስ፣ IoT፣ ሳይበር ደህንነት እና ሮቦቲክስን የሚያጠና ሞጁል።',
  semester: 'Semester 2',
  stream: 'Common',
  creditHours: 3,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Emerging_Technologies_MoE_2019.pdf',
    title: 'Introduction to Emerging Technologies Module',
    authorOrCommittee: 'National ICT and Emerging Tech Curriculum Committee',
    publishedYear: '2019',
    totalUnitsOrChapters: 6
  },
  metadata: { courseCode: 'EmTe 1012', creditHours: 3, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(601, 1, 'Introduction to Emerging Technologies & Industrial Revolutions', 'የአዳዲስ ቴክኖሎጂዎችና የኢንዱስትሪ አብዮቶች መግቢያ', 'Emerging technologies are radical innovations reshaping society. The Fourth Industrial Revolution (4IR) fuses physical, digital, and biological spheres.', 'አዳዲስ ቴክኖሎጂዎች ማህበረሰብን የሚቀይሩ ፈጠራዎች ናቸው። አራተኛው የኢንዱስትሪ አብዮት (4IR) አካላዊ፣ ዲጂታል እና ባዮሎጂካዊ ዓለሞችን ያጣምራል።', 'MoE Emerging Tech Team', [{ termEn: '4IR', termAm: 'አራተኛው የኢንዱስትሪ አብዮት', defEn: 'Technological era marked by cyber-physical systems, AI, and smart automation.', defAm: 'በሰው ሰራሽ አስተውሎትና በስማርት አውቶሜሽን የሚመራው የዘመናችን አብዮት።' }], ['Steam power led 1IR, electricity 2IR, computers 3IR, and AI/IoT leads 4IR.'], ['የእንፋሎት ኃይል 1IR፣ ኤሌክትሪክ 2IR፣ ኮምፒውተሮች 3IR፣ እና AI/IoT 4IRን መርተዋል።'], [], []),
    makePdfChapter(602, 2, 'Data Science and Big Data Analytics', 'ዳታ ሳይንስ እና ቢግ ዳታ ትንተና', 'Data science extracts meaningful knowledge from vast datasets using math, statistics, and machine learning, characterized by Volume, Velocity, Variety, Veracity, and Value.', 'ዳታ ሳይንስ ከግዙፍ መረጃዎች (Big Data) ጠቃሚ እውቀትን በስሌትና በማሽን ለርኒንግ የሚያወጣ ዘርፍ ሲሆን በ5ቱ Vዎች (መጠን፣ ፍጥነት፣ አይነት፣ ትክክለኛነት፣ ዋጋ) ይገለጻል።', 'MoE Emerging Tech Team', [{ termEn: 'Big Data', termAm: 'ቢግ ዳታ', defEn: 'Extremely large datasets requiring advanced computational tools to analyze.', defAm: 'በተለመደው መንገድ ለመተንተን የማይቻሉ እጅግ ግዙፍ መረጃዎች ስብስብ።' }], ['Data-driven decision making powers modern national economies.'], ['በመረጃ ላይ የተመሰረተ ውሳኔ ሰጪነት ዘመናዊ ኢኮኖሚን ይመራል።'], [], []),
    makePdfChapter(603, 3, 'Artificial Intelligence and Machine Learning', 'ሰው ሰራሽ አስተውሎት (AI) እና ማሽን ለርኒንግ', 'AI enables machines to simulate human cognitive functions including learning, reasoning, perception, problem solving, and language comprehension.', 'ሰው ሰራሽ አስተውሎት (AI) ማሽኖች እንደ ሰው እንዲያስቡ፣ እንዲማሩ፣ ቋንቋ እንዲረዱ እና ችግሮችን እንዲፈቱ የሚያስችል ቴክኖሎጂ ነው።', 'MoE Emerging Tech Team', [{ termEn: 'Machine Learning', termAm: 'ማሽን ለርኒንግ', defEn: 'Subfield of AI focusing on algorithms that learn patterns directly from data.', defAm: 'ማሽኖች ካለፉ መረጃዎች ተነስተው በራሳቸው እንዲማሩ የሚያስችል የAI ንዑስ ዘርፍ።' }], ['Narrow AI excels at specific tasks; General AI simulates human intelligence.'], ['ጠባብ AI ለአንድ ስራ የተሰራ ሲሆን፣ አጠቃላይ AI እንደ ሰው ልጅ ያስባል።'], [], []),
    makePdfChapter(604, 4, 'Internet of Things (IoT) and Smart Systems', 'የእቃዎች በይነመረብ (IoT) እና ስማርት ስርአቶች', 'IoT connects physical objects embedded with sensors, software, and network connectivity, enabling data exchange in smart cities, agriculture, and healthcare.', 'IoT እቃዎች በሴንሰር እና በኢንተርኔት ተገናኝተው መረጃ እንዲለዋወጡ የሚያደርግ ሲሆን በስማርት ከተሞች፣ በግብርና እና በህክምና ስራ ላይ ይውላል።', 'MoE Emerging Tech Team', [{ termEn: 'Sensors and Actuators', termAm: 'ሴንሰሮችና አንቀሳቃሾች', defEn: 'Hardware components collecting environmental data and executing actions.', defAm: 'የአካባቢን መረጃ የሚሰበስቡና ትእዛዝን ወደ ተግባር የሚቀይሩ አካላት።' }], ['Smart agriculture in Ethiopia optimizes water and fertilizer delivery.'], ['ስማርት ግብርና በኢትዮጵያ የውሃና ማዳበሪያ አጠቃቀምን ያሻሽላል።'], [], []),
    makePdfChapter(605, 5, 'Cybersecurity and Digital Privacy', 'የሳይበር ደህንነት እና ዲጂታል ግላዊነት', 'Cybersecurity protects computer systems, networks, and confidential data from digital attacks, malware, unauthorized access, and identity theft.', 'የሳይበር ደህንነት የኮምፒውተር ስርአቶችን፣ ኔትወርኮችን እና ሚስጥራዊ መረጃዎችን ከጠላፊዎችና ከቫይረስ ጥቃት የሚከላከል የሳይንስ ዘርፍ ነው።', 'MoE Emerging Tech Team', [{ termEn: 'Encryption', termAm: 'ምስጠራ', defEn: 'Encoding information so only authorized parties with keys can read it.', defAm: 'መረጃን ቁልፍ ባላቸው አካላት ብቻ እንዲነበብ አድርጎ የመቀየር ሂደት።' }], ['Defending critical infrastructure is essential for digital sovereignty.'], ['ወሳኝ ሀገራዊ መዋቅሮችን ከሳይበር ጥቃት መጠበቅ ለሉዓላዊነት አስፈላጊ ነው።'], [], []),
    makePdfChapter(606, 6, 'Augmented Reality (AR), Virtual Reality (VR) and Robotics', 'AR፣ VR እና ሮቦቲክስ', 'Immersive extended reality (XR) creates interactive simulated experiences, while robotics combines mechanical engineering and AI to automate complex physical tasks.', 'ምናባዊ እውነታ (VR) እና የተጨመረ እውነታ (AR) ህያው ተሞክሮዎችን ሲፈጥሩ፣ ሮቦቲክስ ውስብስብ ስራዎችን በራስ-ሰር ያከናውናል።', 'MoE Emerging Tech Team', [{ termEn: 'Virtual Reality', termAm: 'ምናባዊ እውነታ (VR)', defEn: 'Computer-generated simulation replacing real-world sensory environment.', defAm: 'እውነተኛውን ዓለም የሚተካ በኮምፒውተር የሚፈጠር ምናባዊ ተሞክሮ።' }], ['AR/VR revolutionizes medical training, remote surgery, and engineering.'], ['AR/VR የህክምና ስልጠናን እና የምህንድስና ዲዛይንን አሻሽሏል።'], [], [])
  ]
};

// 5. Mathematics for Natural Sciences / Social Sciences (Math 1011)
export const mathCourse: Course = {
  id: 'math1011',
  code: 'Math 1011',
  englishTitle: 'Mathematics for Freshman Students',
  amharicTitle: 'የመጀመሪያ ዓመት ሒሳብ',
  badge: '5 Chapters (PDF)',
  descriptionEn: 'National MoE freshman module: Propositional logic, set theory, functions and relations, polynomial and rational functions, and analytic geometry.',
  descriptionAm: 'የአመክንዮ ሂሳብ፣ የሴት ንድፈ-ሀሳብ፣ ፈንክሽኖች፣ ፖሊኖሚያል፣ እና አናሊቲክ ጂኦሜትሪን የሚያስተምር የMoE ሞጁል።',
  semester: 'Semester 1',
  stream: 'Common',
  creditHours: 3,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Mathematics_for_Natural_Sciences_MoE_2019.pdf',
    title: 'Mathematics Student Module',
    authorOrCommittee: 'National Mathematics Committee (MoE)',
    publishedYear: '2019',
    totalUnitsOrChapters: 5
  },
  metadata: { courseCode: 'Math 1011', creditHours: 3, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(701, 1, 'Propositional Logic and Set Theory', 'የመግለጫዎች አመክንዮ እና የሴት ንድፈ-ሀሳብ', 'Logic provides formal symbolic tools for mathematical reasoning, truth tables, and set operations including union, intersection, and complements.', 'ስነ-አመክንዮ ለሂሳባዊ ማረጋገጫዎች መደበኛ ምልክቶችን ሲሰጥ፣ የሴት ስራዎች ህብረት፣ መቆራረጥ እና ማሟያን ያጠናል።', 'MoE Math Team', [{ termEn: 'Truth Table', termAm: 'የእውነት ሠንጠረዥ', defEn: 'Mathematical table used to determine functional values of logical propositions.', defAm: 'የአመክንዮ መግለጫዎችን እውነተኝነት ለመወሰን የሚያገለግል ሠንጠረዥ።' }], ['Compound statements use connectives: NOT, AND, OR, IF...THEN, and IFF.'], ['ውሁድ ዓረፍተ-ነገሮች አገናኞችን ይጠቀማሉ: አይደለም፣ እና፣ ወይም፣ ከሆነ...ያኔ።'], [], []),
    makePdfChapter(702, 2, 'Relations and Functions', 'ዝምድናዎች እና ፈንክሽኖች', 'A function is a special relation where each input element in domain maps to exactly one output value in the codomain.', 'ፈንክሽን ማለት በግቤት (Domain) ውስጥ ላለ ለእያንዳንዱ አባል በትክክል አንድ ውጤት (Range) የሚሰጥ ልዩ ዝምድና ነው።', 'MoE Math Team', [{ termEn: 'Injective Function', termAm: 'አንድ ለአንድ ፈንክሽን', defEn: 'Function where distinct domain inputs produce distinct range outputs.', defAm: 'የተለያዩ ግቤቶች የተለያዩ ውጤቶችን የሚያስገኙበት ፈንክሽን።' }], ['One-to-one and onto functions possess inverses.'], ['አንድ-ለአንድ እና ሙሉ። ፈንክሽኖች ግልባጭ (Inverse) አላቸው።'], [], []),
    makePdfChapter(703, 3, 'Polynomial and Rational Functions', 'ፖሊኖሚያል እና ረሽናል ፈንክሽኖች', 'Investigating roots, zeroes, synthetic division, and asymptotes of polynomial expressions and rational fractions.', 'የፖሊኖሚያል እና የክፍልፋይ (ረሽናል) ፈንክሽኖች ዜሮዎችን፣ ማካፈልን እና አስምፕቶቶችን መመርመር።', 'MoE Math Team', [{ termEn: 'Asymptote', termAm: 'አስምፕቶት', defEn: 'Line that a curve approaches arbitrarily closely as coordinates tend to infinity.', defAm: 'አንድ ኩርባ መስመር ወደ ወሰን-አልባ ሲጓዝ እየተጠጋው የሚሄድ መስመር።' }], ['Rational functions have vertical and horizontal asymptotes.'], ['ረሽናል ፈንክሽኖች ቋሚና አግድም አስምፕቶቶች አሏቸው።'], [], []),
    makePdfChapter(704, 4, 'Exponential and Logarithmic Functions', 'ኤክስፖኔንሻል እና ሎጋሪዝሚክ ፈንክሽኖች', 'Exponential models describe population growth and decay, while logarithmic functions serve as their natural mathematical inverses.', 'ኤክስፖኔንሻል ፈንክሽኖች የህዝብ እድገትና የተፈጥሮ ቅነሳን ሲገልጹ፣ ሎጋሪዝም የተፈጥሮ ግልባጫቸው ነው።', 'MoE Math Team', [{ termEn: 'Logarithm', termAm: 'ሎጋሪዝም', defEn: 'Exponent to which base must be raised to produce that number.', defAm: 'መሰረቱ የተፈለገውን ቁጥር ለመስጠት ሊረባበት የሚገባው ገላጭ።' }], ['Logarithm rules simplify complex multiplication and exponentiation.'], ['የሎጋሪዝም ህጎች ውስብስብ ማባዛትና ማርባትን ያቃልላሉ።'], [], []),
    makePdfChapter(705, 5, 'Trigonometric Functions and Analytic Geometry', 'ትሪጎኖሜትሪ እና አናሊቲክ ጂኦሜትሪ', 'Circles, parabolas, ellipses, and hyperbolas analyzed algebraically in the Cartesian coordinate plane alongside trigonometric identities.', 'ክቦች፣ ፓራቦላ፣ ኤሊፕስ እና ሀይፐርቦላ በካርቴዥያን የቁጥር አውድ ውስጥ ከትሪጎኖሜትሪ ህጎች ጋር ይተነተናሉ።', 'MoE Math Team', [{ termEn: 'Conic Sections', termAm: 'የሾጣጣ ቅጾች', defEn: 'Curves obtained by the intersection of a cone with a flat plane.', defAm: 'አንድ ሾጣጣ ቅርፅ ከጠፍጣፋ ወለል ጋር ሲቆራረጥ የሚፈጠሩ ኩርባዎች።' }], ['Analytic geometry bridges algebraic formulas with geometric figures.'], ['አናሊቲክ ጂኦሜትሪ አልጀብራን ከስዕላዊ ቅርጾች ጋር ያገናኛል።'], [], [])
  ]
};

// 6. Social Anthropology (Anth 1012) - Full 6-Unit Interactive Curriculum
export const anthropologyCourse: Course = fullAnthropologyCourse;

// 7. Moral and Civic Education (MCDE 1012)
export const civicsCourse: Course = {
  id: 'mcde1012',
  code: 'MCDE 1012',
  englishTitle: 'Moral and Civic Education',
  amharicTitle: 'ስነ-ምግባር እና የዜግነት ትምህርት',
  badge: '6 Chapters (PDF)',
  descriptionEn: 'National MoE module: Ethics, morality, state and society, constitutional democracy, human rights, and rule of law in Ethiopia.',
  descriptionAm: 'ስነ-ምግባር፣ መንግስትና ማህበረሰብ፣ ህገ-መንግስታዊ ዲሞክራሲ፣ ሰብአዊ መብቶች እና የህግ የበላይነትን የሚያስተምር የMoE ሞጁል።',
  semester: 'Semester 2',
  stream: 'Common',
  creditHours: 3,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Moral_and_Civic_Education_MoE_2019.pdf',
    title: 'Moral and Civic Education Student Module',
    authorOrCommittee: 'National Civic and Ethical Studies Curriculum Committee',
    publishedYear: '2019',
    totalUnitsOrChapters: 6
  },
  metadata: { courseCode: 'MCDE 1012', creditHours: 3, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(901, 1, 'Understanding Ethics, Morality and Civic Life', 'ስነ-ምግባር እና የዜግነት ህይወት መረዳት', 'Ethics investigates moral principles guiding right conduct; civics studies citizen rights, duties, and participatory governance.', 'ስነ-ምግባር ትክክለኛ የሰው ልጅ ባህሪን ሲያጠና፣ ዜግነት የመብት፣ ግዴታ እና የማህበረሰብ ተሳትፎን ይመረምራል።', 'MoE Civics Team', [{ termEn: 'Civic Engagement', termAm: 'የዜግነት ተሳትፎ', defEn: 'Active participation of citizens in public decision-making.', defAm: 'ዜጎች በሀገራዊ እና ማህበራዊ ውሳኔዎች ላይ በንቃት መሳተፋቸው።' }], ['Moral integrity builds a transparent, corruption-free society.'], ['የስነ-ምግባር ታማኝነት ከሙስና የጸዳ ማህበረሰብ ይገነባል።'], [], []),
    makePdfChapter(902, 2, 'Ethical Theories and Moral Principles', 'የስነ-ምግባር ንድፈ-ሀሳቦች እና መርሆች', 'Utilitarianism, deontology, virtue ethics, and ethical egoism examined as frameworks for resolving real-world moral dilemmas.', 'ጥቅም-ተኮር፣ ግዴታ-ተኮር እና በጎ ምግባር-ተኮር የስነ-ምግባር ንድፈ-ሀሳቦች የሰዎችን ውሳኔ ይመራሉ::', 'MoE Civics Team', [{ termEn: 'Deontology', termAm: 'ግዴታ-ተኮር ስነ-ምግባር', defEn: 'Duty-based ethics asserting actions are inherently right or wrong.', defAm: 'ተግባራት ከውጤታቸው ባሻገር በራሳቸው ትክክል ወይም ስህተት ናቸው የሚል ንድፈ-ሀሳብ።' }], ['Virtue ethics emphasizes character development over rigid rules.'], ['በጎ-ምግባር ከህጎች ይልቅ የሰውን መልካም ስብዕና ማዳበር ላይ ያተኩራል።'], [], []),
    makePdfChapter(903, 3, 'Society, State and Government', 'ማህበረሰብ፣ መንግስትና አስተዳደር', 'The social contract theory explains the legitimacy of government in protecting sovereignty, order, and citizen welfare.', 'የማህበራዊ ውል ንድፈ-ሀሳብ የመንግስትን ህጋዊነት፣ ሉዓላዊነትን ማስጠበቅ እና የህዝብ ደህንነትን ማረጋገጥ ያስረዳል::', 'MoE Civics Team', [{ termEn: 'Rule of Law', termAm: 'የህግ የበላይነት', defEn: 'Principle that all citizens and institutions are accountable to law.', defAm: 'ሁሉም ዜጎችና ባለስልጣናት በህግ ፊት እኩል ተጠያቂ መሆናቸውን የሚያረጋግጥ መርህ።' }], ['Separation of powers prevents autocratic abuse.'], ['የስልጣን ክፍፍል የአምባገነንነትን አደጋ ይከላከላል።'], [], []),
    makePdfChapter(904, 4, 'Constitution and Constitutionalism in Ethiopia', 'ህገ-መንግስት እና ህገ-መንግስታዊነት በኢትዮጵያ', 'Constitutional history from the 1931 written constitution to the 1995 FDRE Constitution establishing federalism and bill of rights.', 'ከ1923 ዓ.ም ጀምሮ እስከ 1987 ዓ.ም የኢፌዲሪ ህገ-መንግስት ድረስ የነበረው ታሪካዊ ጉዞና የፌዴራሊዝም መዋቅር።', 'MoE Civics Team', [{ termEn: 'Constitutionalism', termAm: 'ህገ-መንግስታዊነት', defEn: 'Adherence to constitutional principles limiting arbitrary government power.', defAm: 'የመንግስት ስልጣን በህገ-መንግስቱ ገደብ መሰረት ብቻ እንዲሰራ ማድረግ።' }], ['The constitution is the supreme law of the land.'], ['ህገ-መንግስቱ የሀገሪቱ የበላይ ህግ ነው።'], [], []),
    makePdfChapter(905, 5, 'Human Rights and Fundamental Freedoms', 'ሰብአዊ መብቶች እና መሰረታዊ ነፃነቶች', 'Civil, political, economic, social, and cultural rights enshrined in Universal Declaration of Human Rights and regional charters.', 'በዓለም አቀፍ የሰብአዊ መብቶች ድንጋጌዎችና በአህጉራዊ ቻርተሮች እውቅና ያገኙ የዜጎች መብቶች።', 'MoE Civics Team', [{ termEn: 'Inherent Rights', termAm: 'የተፈጥሮ መብቶች', defEn: 'Rights born with every human being regardless of nationality or creed.', defAm: 'ማንኛውም ሰው ሰው በመሆኑ ብቻ የሚያገኛቸው የማይገፈፉ መብቶች።' }], ['Human rights are universal, inalienable, and indivisible.'], ['ሰብአዊ መብቶች ዓለም አቀፋዊ፣ የማይገፈፉ እና የማይከፋፈሉ ናቸው።'], [], []),
    makePdfChapter(906, 6, 'Peacebuilding, Conflict Resolution and Good Governance', 'ሰላም ግንባታ፣ ግጭት አፈታትና መልካም አስተዳደር', 'Transforming destructive disputes through dialogue, restorative justice, democratic tolerance, and institutional accountability.', 'ግጭቶችን በውይይት፣ በእርቅ እና በዲሞክራሲያዊ መቻቻል ወደ ዘላቂ ሰላም የመቀየር ሂደት።', 'MoE Civics Team', [{ termEn: 'Good Governance', termAm: 'መልካም አስተዳደር', defEn: 'Transparent, accountable, inclusive, and effective state management.', defAm: 'ግልፅነት፣ ተጠያቂነት፣ አሳታፊነትና ቅልጥፍና የተሞላበት የመንግስት አሰራር።' }], ['Sustainable development requires enduring national peace.'], ['ዘላቂ ልማት ያለ አስተማማኝ ሰላም እውን ሊሆን አይችልም።'], [], [])
  ]
};

// 8. Inclusiveness (SNIE 1012)
export const inclusivenessCourse: Course = {
  id: 'snie1012',
  code: 'SNIE 1012',
  englishTitle: 'Inclusiveness',
  amharicTitle: 'አካታችነት እና ልዩ ፍላጎት ትምህርት',
  badge: '5 Chapters (PDF)',
  descriptionEn: 'National MoE module on understanding disabilities, promoting inclusive learning cultures, removing physical/pedagogical barriers, and policy frameworks.',
  descriptionAm: 'የአካል ጉዳተኝነትን እና ልዩ ፍላጎቶችን መረዳት፣ አካታች ማህበራዊና ትምህርታዊ ባህልን ማሳደግ እና የፖሊሲ ማዕቀፎችን የሚያጠና የMoE ሞጁል።',
  semester: 'Semester 2',
  stream: 'Common',
  creditHours: 2,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Inclusiveness_Student_Module_MoE_2019.pdf',
    title: 'Inclusiveness Student Module',
    authorOrCommittee: 'Special Needs Education National Committee',
    publishedYear: '2019',
    totalUnitsOrChapters: 5
  },
  metadata: { courseCode: 'SNIE 1012', creditHours: 2, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(1001, 1, 'Understanding Disabilities and Vulnerabilities', 'የአካል ጉዳተኝነትንና ተጋላጭነትን መረዳት', 'Distinguishing impairment, disability, and handicap; medical vs social models of disability; types of physical and intellectual differences.', 'የአካል ጉዳትን ከማህበራዊ እንቅፋት መለየት፤ የህክምና እና የማህበራዊ ሞዴሎች ንጽጽር።', 'MoE Special Needs Team', [{ termEn: 'Social Model', termAm: 'ማህበራዊ ሞዴል', defEn: 'Disability is created by societal barriers rather than individual impairment.', defAm: 'ጉዳተኝነት በግለሰቡ ችግር ሳይሆን በማህበረሰቡ እንቅፋቶች የሚፈጠር መሆኑን የሚገልጽ እይታ።' }], ['Language and attitudes shape inclusion.'], ['የምንጠቀማቸው ቃላትና አመለካከቶች ለአካታችነት ወሳኝ ናቸው።'], [], []),
    makePdfChapter(1002, 2, 'Assessment and Identification of Diverse Needs', 'ልዩ ፍላጎቶችን መመዘንና መለየት', 'Identifying sensory, learning, emotional, speech, and gifted needs early through pedagogical screening.', 'የመስማት፣ የማየት፣ የመማር እና ልዩ ተሰጥኦ ያላቸውን ተማሪዎች በቅድሚያ መለየት።', 'MoE Special Needs Team', [{ termEn: 'Assistive Tech', termAm: 'አጋዥ ቴክኖሎጂ', defEn: 'Devices and tools increasing functional independence for persons with disabilities.', defAm: 'የአካል ጉዳተኞችን ነፃነትና ተሳትፎ የሚያሳድጉ የቴክኖሎጂ መሳሪያዎች።' }], ['Universal Design for Learning (UDL) reaches all learners.'], ['ሁለንተናዊ የትምህርት ዲዛይን (UDL) ሁሉንም ተማሪዎች በእኩል ያሳትፋል።'], [], []),
    makePdfChapter(1003, 3, 'Promoting an Inclusive Campus Culture', 'አካታች የካምፓስ ባህልን ማሳደግ', 'Fostering empathy, peer mentoring, non-discriminatory university environments, and equal social participation.', 'መከባበርን፣ የእርስ በእርስ ድጋፍን እና ከአድልዎ የጸዳ የዩኒቨርሲቲ ህይወትን ማበረታታት።', 'MoE Special Needs Team', [{ termEn: 'Peer Mentoring', termAm: 'የእኩዮች ድጋፍ', defEn: 'Students supporting classmates with disabilities in study and campus navigation.', defAm: 'ተማሪዎች የአካል ጉዳት ያለባቸውን የክፍል ጓደኞቻቸውን የሚያግዙበት ስርአት።' }], ['Accessibility is a fundamental right, not an act of charity.'], ['ተደራሽነት መሰረታዊ መብት እንጂ የበጎ አድራጎት ስጦታ አይደለም።'], [], []),
    makePdfChapter(1004, 4, 'Barrier-Free Physical and Pedagogical Environments', 'ከእንቅፋት የጸዳ ምቹ አካባቢ መፍጠር', 'Ramps, tactile paths, sign language interpreters, accessible textbooks, and flexible assessment modalities.', 'የተደራሹ ህንጻዎች፣ የምልክት ቋንቋ፣ የብሬል መጽሐፍት እና ተስማሚ የፈተና ዘዴዎችን ማዘጋጀት።', 'MoE Special Needs Team', [{ termEn: 'Reasonable Accommodation', termAm: 'ተገቢ ማስተካከያ', defEn: 'Necessary adjustments ensuring equal opportunity in education and work.', defAm: 'ተማሪዎች እኩል እንዲሳተፉ የሚያስችሉ ተገቢ የተቋም ማስተካከያዎች።' }], ['Designing environments for the most vulnerable improves life for everyone.'], ['ለተጋላጮች ምቹ የሆነ አካባቢ ለሁሉም ሰው ምቹ ነው።'], [], []),
    makePdfChapter(1005, 5, 'Legal Policies and Frameworks on Inclusion', 'የአካታችነት ህጋዊ ፖሊሲዎችና ድንጋጌዎች', 'UN Convention on the Rights of Persons with Disabilities (CRPD) and Ethiopian higher education proclamation guarantees.', 'የተባበሩት መንግስታት የአካል ጉዳተኞች መብት ኮንቬንሽን እና የኢትዮጵያ የከፍተኛ ትምህርት አዋጅ።', 'MoE Special Needs Team', [{ termEn: 'UN CRPD', termAm: 'የተመድ የአካል ጉዳተኞች ኮንቬንሽን', defEn: 'International human rights treaty protecting rights and dignity of disabled.', defAm: 'የአካል ጉዳተኞችን ክብርና መብት የሚጠብቅ ዓለም አቀፍ የሰብአዊ መብት ስምምነት።' }], ['Legislation mandates equitable university admission and retention.'], ['ህጉ ፍትሃዊ የከፍተኛ ትምህርት እድል እንዲሰጥ ያስገድዳል።'], [], [])
  ]
};

// 9. General Physics (Phys 1011) - Full 7 Chapters MoE Curriculum
export { physicsCourse };

// 10. Physical Fitness and Health (SpSc 1011)
export const sportsCourse: Course = {
  id: 'spsc1011',
  code: 'SpSc 1011',
  englishTitle: 'Physical Fitness and Health',
  amharicTitle: 'አካላዊ ብቃትና ጤናማ አኗኗር',
  badge: '5 Chapters (PDF)',
  descriptionEn: 'National MoE module: Principles of physical fitness, cardiovascular endurance, strength training, balanced nutrition, and lifestyle stress management.',
  descriptionAm: 'የአካል ብቃት መርሆች፣ የልብና የደም ዝውውር ብቃት፣ የተመጣጠነ ምግብ እና ውጥረትን መቆጣጠር የሚያስተምር የMoE ሞጁል።',
  semester: 'Semester 1',
  stream: 'Common',
  creditHours: 2,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Physical_Fitness_Student_Module_MoE_2019.pdf',
    title: 'Physical Fitness Student Module',
    authorOrCommittee: 'National Sport Science Committee',
    publishedYear: '2019',
    totalUnitsOrChapters: 5
  },
  metadata: { courseCode: 'SpSc 1011', creditHours: 2, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(1201, 1, 'Concepts of Physical Fitness and Wellness', 'የአካላዊ ብቃትና ደህንነት ፅንሰ-ሀሳቦች', 'Physical fitness is the ability to perform daily tasks vigorously without undue fatigue. Wellness embraces physical, emotional, and social health.', 'አካላዊ ብቃት የዕለት ተዕለት ተግባራትን ያለምንም ድካም በንቃት የማከናወን ችሎታ ነው።', 'MoE Sports Team', [{ termEn: 'Aerobic Fitness', termAm: 'ኤሮቢክ ብቃት', defEn: 'Cardiovascular capacity to deliver oxygen during sustained activity.', defAm: 'ሰውነት ለረጅም ጊዜ በሚቆይ እንቅስቃሴ ወቅት ኦክስጅንን በብቃት የመጠቀም አቅም።' }], ['Regular exercise prevents hypokinetic chronic diseases.'], ['ቀጣይነት ያለው የአካል ብቃት እንቅስቃሴ ስር የሰደዱ በሽታዎችን ይከላከላል።'], [], []),
    makePdfChapter(1202, 2, 'Health-Related Components of Fitness', 'ከጤና ጋር የተያያዙ የአካል ብቃት ክፍሎች', 'Cardiorespiratory endurance, muscular strength, muscular endurance, flexibility, and body composition.', 'የልብና የመተንፈሻ አካላት ብቃት፣ የጡንቻ ጥንካሬ፣ ተለዋዋጭነት (Flexibility) እና የሰውነት ክብደት ስብጥር።', 'MoE Sports Team', [{ termEn: 'Flexibility', termAm: 'ተለዋዋጭነት', defEn: 'Range of motion available around a given joint.', defAm: 'የመገጣጠሚያዎች ያለምንም ህመም በተሟላ ሁኔታ የመተጣጠፍ አቅም።' }], ['Stretching improves posture and prevents sports injuries.'], ['የመገጣጠሚያዎች ማፍታታት (Stretching) ጉዳቶችን ይከላከላል።'], [], []),
    makePdfChapter(1203, 3, 'Principles of Exercise Training (FITT)', 'የስልጠና መርሆች (FITT)', 'Frequency, Intensity, Time, and Type (FITT), overload principle, specificity, and progressive adaptation.', 'የስልጠና ድግግሞሽ፣ ጥንካሬ፣ ጊዜ እና አይነት (FITT)፣ እና ቀስ በቀስ የማዳበር መርሆች።', 'MoE Sports Team', [{ termEn: 'FITT Principle', termAm: 'የFITT መርህ', defEn: 'Prescription formula: Frequency, Intensity, Time, Type.', defAm: 'የስልጠና ማዘዣ ቀመር፡ ድግግሞሽ፣ ጥንካሬ፣ ጊዜ እና አይነት።' }], ['Progressive overload triggers bodily fitness adaptations.'], ['ደረጃ በደረጃ ሸክምን መጨመር የሰውነትን ብቃት ያሳድጋል።'], [], []),
    makePdfChapter(1204, 4, 'Nutrition, Weight Management and Energy Balance', 'ስነ-ምግብ፣ የክብደት ቁጥጥር እና የሃይል ሚዛን', 'Macronutrients (proteins, carbs, fats), micronutrients, hydration, caloric intake vs expenditure, and healthy BMI.', 'ካርቦሃይድሬት፣ ፕሮቲን፣ ስብ፣ ቫይታሚኖች፣ የውሃ አጠቃቀም እና ጤናማ የሰውነት ክብደት ቁጥጥር።', 'MoE Sports Team', [{ termEn: 'Caloric Balance', termAm: 'የካሎሪ ሚዛን', defEn: 'Balance between energy consumed through food and energy expended.', defAm: 'በምግብ የሚገኘው ካሎሪና በስራ የሚቃጠለው ሃይል ሚዛናዊነት።' }], ['Hydration is critical before, during, and after physical exercise.'], ['ከስፖርት በፊት፣ በወቅቱ እና በኋላ በቂ ውሃ መጠጣት አስፈላጊ ነው።'], [], []),
    makePdfChapter(1205, 5, 'Stress Management and Active Lifestyle', 'ውጥረትን መቆጣጠር እና ንቁ አኗኗር', 'Using physical activity to reduce cortisol levels, promote endorphin release, and improve mental focus and sleep quality.', 'የአካል ብቃት እንቅስቃሴን በመጠቀም የአዕምሮ ውጥረትን መቀነስና ጥልቅ እንቅልፍን ማግኘት።', 'MoE Sports Team', [{ termEn: 'Endorphins', termAm: 'ኢንዶርፊን', defEn: 'Neurochemicals released during exercise elevating mood and reducing pain.', defAm: 'በእንቅስቃሴ ወቅት የሚመነጩ ህመምን የሚቀንሱና ደስታን የሚጨምሩ ኬሚካሎች።' }], ['Active students demonstrate higher academic productivity.'], ['ንቁ የአካል ብቃት እንቅስቃሴ ያላቸው ተማሪዎች የተሻለ የትምህርት ውጤት ያስመዘግባሉ።'], [], [])
  ]
};

// 11. Global Trends (GlTr 1012)
export const globalTrendsCourse: Course = {
  id: 'gltr1012',
  code: 'GlTr 1012',
  englishTitle: 'Global Trends',
  amharicTitle: 'ዓለም አቀፍ አዝማሚያዎችና ግንኙነቶች',
  badge: '6 Chapters (PDF)',
  descriptionEn: 'National MoE module: International relations theory, foreign policy, diplomacy, African regional integration, global political economy, and contemporary security.',
  descriptionAm: 'የዓለም አቀፍ ግንኙነት ንድፈ-ሀሳብ፣ የውጭ ፖሊሲ፣ ዲፕሎማሲ፣ የአፍሪካ ቀጠናዊ ውህደት፣ እና ዓለም አቀፍ ኢኮኖሚን የሚያጠና የMoE ሞጁል።',
  semester: 'Semester 2',
  stream: 'Common',
  creditHours: 3,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Global_Trends_Student_Module_MoE_2019.pdf',
    title: 'Global Trends Student Module',
    authorOrCommittee: 'National International Relations Curriculum Team',
    publishedYear: '2019',
    totalUnitsOrChapters: 6
  },
  metadata: { courseCode: 'GlTr 1012', creditHours: 3, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(1301, 1, 'Understanding International Relations and Global Trends', 'የዓለም አቀፍ ግንኙነትና አዝማሚያዎች መግቢያ', 'Core IR theories: Realism, Liberalism, Constructivism, and Marxism analyzing the anarchic international system.', 'የዓለም አቀፍ ግንኙነት ንድፈ-ሀሳቦች፡ ሪያሊዝም፣ ሊበራሊዝም እና ኮንስትራክቲቪዝም በዓለም አቀፍ መድረክ።', 'MoE IR Team', [{ termEn: 'Anarchy in IR', termAm: 'አናርኪ በዓለም አቀፍ ግንኙነት', defEn: 'Absence of an overarching global central government above sovereign states.', defAm: 'ከሉዓላዊ ሀገራት በላይ የበላይ የሆነ ዓለም አቀፍ መንግስት አለመኖር።' }], ['States act rationally in pursuit of national security.'], ['ሀገራት ለብሔራዊ ደህንነታቸው ሲሉ በምክንያታዊነት ይሰራሉ።'], [], []),
    makePdfChapter(1302, 2, 'Foreign Policy, National Interest and Diplomacy', 'የውጭ ፖሊሲ፣ ብሔራዊ ጥቅም እና ዲፕሎማሲ', 'Instruments of foreign policy: Bilateral diplomacy, economic sanctions, international alliances, and soft power.', 'የውጭ ፖሊሲ መሳሪያዎች፡ የሁለትዮሽ ዲፕሎማሲ፣ የኢኮኖሚ ማዕቀብ፣ ህብረት እና ለስላሳ ኃይል (Soft Power)።', 'MoE IR Team', [{ termEn: 'Soft Power', termAm: 'ለስላሳ ኃይል', defEn: 'Ability to attract and co-opt rather than coerce through military might.', defAm: 'በጉልበት ሳይሆን በባህልና በመልካም እሴቶች ተቀባይነትን የማግኘት ዲፕሎማሲ።' }], ['National interest guides all strategic international engagements.'], ['ብሔራዊ ጥቅም የሁሉንም የውጭ ግንኙነቶች አቅጣጫ ይመራል።'], [], []),
    makePdfChapter(1303, 3, 'Regionalism and African Integration (AU, IGAD)', 'ቀጠናዊነት እና የአፍሪካ ውህደት (AU, IGAD)', 'The African Union, AfCFTA, and IGAD fostering economic integration, collective security, and political solidarity in the Horn.', 'የአፍሪካ ህብረት፣ ነፃ የንግድ ቀጠና (AfCFTA) እና ኢጋድ በቀጠናው ሰላምና ኢኮኖሚያዊ ውህደት ለመፍጠር የሚሰሩት ስራ።', 'MoE IR Team', [{ termEn: 'AfCFTA', termAm: 'የአፍሪካ ነፃ የንግድ ቀጠና', defEn: 'Single continental market for goods and services across 54 African nations.', defAm: '54 የአፍሪካ ሀገራትን የሚያስተሳስር ነፃ የጋራ የገበያ ቀጠና።' }], ['Addis Ababa acts as the diplomatic capital of the African continent.'], ['አዲስ አበባ የአፍሪካ አህጉር ዲፕሎማሲያዊ መዲና ናት።'], [], []),
    makePdfChapter(1304, 4, 'Global Security Issues and Transnational Threats', 'ዓለም አቀፍ የደህንነት ስጋቶች', 'Transnational terrorism, climate change induced displacement, cyber conflicts, and pandemics.', 'ድንበር ዘለል ሽብርተኝነት፣ የአየር ንብረት ለውጥ ስጋቶች፣ የሳይበር ጦርነት እና ወረርሽኞች።', 'MoE IR Team', [{ termEn: 'Human Security', termAm: 'የሰው ልጅ ደህንነት', defEn: 'Security paradigm prioritizing individual freedom from fear and want.', defAm: 'ከወታደራዊ ደህንነት ባሻገር የዜጎችን ረሃብ፣ ህመም እና ስጋት ማስወገድ ላይ ያተኮረ እይታ።' }], ['Contemporary threats transcend national borders and require multilateral solutions.'], ['የዘመናችን ስጋቶች ድንበር ተሻጋሪ በመሆናቸው የጋራ ጥረትን ይጠይቃሉ።'], [], []),
    makePdfChapter(1305, 5, 'International Political Economy and Globalization', 'ዓለም አቀፍ ፖለቲካል ኢኮኖሚ እና ግሎባላይዜሽን', 'World Trade Organization (WTO), IMF, World Bank, and trade flows shaping North-South socio-economic divides.', 'የዓለም ንግድ ድርጅት (WTO)፣ አይኤምኤፍ፣ ዓለም ባንክ እና የንግድ ፍሰት በዓለም አቀፍ ምጣኔ-ሀብት ላይ ያላቸው ተፅዕኖ።', 'MoE IR Team', [{ termEn: 'Globalization', termAm: 'ግሎባላይዜሽን', defEn: 'Growing worldwide interdependence of economies, cultures, and populations.', defAm: 'የዓለም ሀገራት በኢኮኖሚ፣ በባህልና በመረጃ እርስ በእርስ የመተሳሰራቸው ሂደት።' }], ['Developing nations negotiate equitable trade terms in global commerce.'], ['ታዳጊ ሀገራት በዓለም ንግድ ፍትሃዊ ተጠቃሚነትን ለማግኘት ይታገላሉ።'], [], []),
    makePdfChapter(1306, 6, 'Ethiopia in Global Affairs and South-South Cooperation', 'ኢትዮጵያ በዓለም አቀፍ መድረክ እና ደቡብ-ደቡብ ትብብር', 'Ethiopia’s founding role in the UN and OAU, peacekeeping missions, climate leadership, and BRICS+ membership.', 'የኢትዮጵያ የተመድ እና የOAU መስራችነት ሚና፣ የሰላም አስከባሪ ተልዕኮዎች እና የBRICS+ አባልነት።', 'MoE IR Team', [{ termEn: 'Multilateralism', termAm: 'ባለብዙ-ወገን ዲፕሎማሲ', defEn: 'Alliance of multiple countries pursuing common international goals.', defAm: 'በርካታ ሀገራት ለጋራ አላማ በጋራ የሚሰሩበት የዲፕሎማሲ መንገድ።' }], ['Ethiopia maintains a prominent voice in peacekeeping and African unity.'], ['ኢትዮጵያ በሰላም ማስከበርና በአፍሪካ አንድነት ግንባር ቀደም ድምፅ ናት።'], [], [])
  ]
};

// 12. Entrepreneurship (Mgmt 1012) - Full 6 Units Interactive MoE Curriculum
export { entrepreneurshipCourse };

// Array of all 12 additional MoE PDF courses
export const moePdfCoursesList: Course[] = [
  logicCourse,
  geographyCourse,
  historyCourse,
  emergingTechCourse,
  mathCourse,
  anthropologyCourse,
  civicsCourse,
  inclusivenessCourse,
  physicsCourse,
  sportsCourse,
  globalTrendsCourse,
  entrepreneurshipCourse
];

// Re-export with legacy alias to maintain backward compatibility if needed
export const moshePdfCoursesList = moePdfCoursesList;
