import { Course, Chapter } from '../types';
import { logicAndCriticalThinkingCourse } from './logicCourse';
import { physicsCourse } from './physicsCourse/physicsIndex';
import { anthropologyCourse as fullAnthropologyCourse } from './anthropologyCourse/anthropologyIndex';
import { entrepreneurshipCourse } from './entrepreneurshipCourse/entrepreneurshipIndex';
import { historyCourse as fullHistoryCourse } from './historyCourse/historyIndex';
import { geographyCourse as fullGeographyCourse } from './geographyCourse/geographyIndex';
import { mathCourse as fullMathCourse } from './mathCourse/mathIndex';
import { appliedMathCourse as fullAppliedMathCourse } from './mathCourse/appliedMathIndex';

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
  badge: '7 Chapters (PDF)',
  descriptionEn: 'National MoE freshman module introducing Fourth Industrial Revolution innovations: AI, Data Science, IoT, Cybersecurity, Cloud, AR/VR/Robotics, Nanotechnology, and Emerging Trends.',
  descriptionAm: 'አራተኛው የኢንዱስትሪ አብዮት ያመጣቸውን አዳዲስ ቴክኖሎጂዎች፡ አርቴፊሻል ኢንተለጀንስ (AI)፣ ዳታ ሳይንስ፣ IoT፣ ሳይበር ደህንነት፣ ሮቦቲክስ፣ ናኖቴክኖሎጂ እና የወደፊት አዝማሚያዎችን የሚያጠና ሞጁል።',
  semester: 'Semester 2',
  stream: 'Common',
  creditHours: 3,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Emerging_Technologies_MoE_2019.pdf',
    title: 'Introduction to Emerging Technologies Module',
    authorOrCommittee: 'National ICT and Emerging Tech Curriculum Committee',
    publishedYear: '2019',
    totalUnitsOrChapters: 7
  },
  metadata: { courseCode: 'EmTe 1012', creditHours: 3, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(601, 1, 'Introduction to Emerging Technologies & Industrial Revolutions', 'የአዳዲስ ቴክኖሎጂዎችና የኢንዱስትሪ አብዮቶች መግቢያ', 'Emerging technologies are radical innovations reshaping society. The Fourth Industrial Revolution (4IR) fuses physical, digital, and biological spheres.', 'አዳዲስ ቴክኖሎጂዎች ማህበረሰብን የሚቀይሩ ፈጠራዎች ናቸው። አራተኛው የኢንዱስትሪ አብዮት (4IR) አካላዊ፣ ዲጂታል እና ባዮሎጂካዊ ዓለሞችን ያጣምራል።', 'MoE Emerging Tech Team', [{ termEn: '4IR', termAm: 'አራተኛው የኢንዱስትሪ አብዮት', defEn: 'Technological era marked by cyber-physical systems, AI, and smart automation.', defAm: 'በሰው ሰራሽ አስተውሎትና በስማርት አውቶሜሽን የሚመራው የዘመናችን አብዮት።' }], ['Steam power led 1IR, electricity 2IR, computers 3IR, and AI/IoT leads 4IR.'], ['የእንፋሎት ኃይል 1IR፣ ኤሌክትሪክ 2IR፣ ኮምፒውተሮች 3IR፣ እና AI/IoT 4IRን መርተዋል።'], [], []),
    makePdfChapter(602, 2, 'Data Science and Big Data Analytics', 'ዳታ ሳይንስ እና ቢግ ዳታ ትንተና', 'Data science extracts meaningful knowledge from vast datasets using math, statistics, and machine learning, characterized by Volume, Velocity, Variety, Veracity, and Value.', 'ዳታ ሳይንስ ከግዙፍ መረጃዎች (Big Data) ጠቃሚ እውቀትን በስሌትና በማሽን ለርኒንግ የሚያወጣ ዘርፍ ሲሆን በ5ቱ Vዎች (መጠን፣ ፍጥነት፣ አይነት፣ ትክክለኛነት፣ ዋጋ) ይገለጻል።', 'MoE Emerging Tech Team', [{ termEn: 'Big Data', termAm: 'ቢግ ዳታ', defEn: 'Extremely large datasets requiring advanced computational tools to analyze.', defAm: 'በተለመደው መንገድ ለመተንተን የማይቻሉ እጅግ ግዙፍ መረጃዎች ስብስብ።' }], ['Data-driven decision making powers modern national economies.'], ['በመረጃ ላይ የተመሰረተ ውሳኔ ሰጪነት ዘመናዊ ኢኮኖሚን ይመራል።'], [], []),
    makePdfChapter(603, 3, 'Artificial Intelligence and Machine Learning', 'ሰው ሰራሽ አስተውሎት (AI) እና ማሽን ለርኒንግ', 'AI enables machines to simulate human cognitive functions including learning, reasoning, perception, problem solving, and language comprehension.', 'ሰው ሰራሽ አስተውሎት (AI) ማሽኖች እንደ ሰው እንዲያስቡ፣ እንዲማሩ፣ ቋንቋ እንዲረዱ እና ችግሮችን እንዲፈቱ የሚያስችል ቴክኖሎጂ ነው።', 'MoE Emerging Tech Team', [{ termEn: 'Machine Learning', termAm: 'ማሽን ለርኒንግ', defEn: 'Subfield of AI focusing on algorithms that learn patterns directly from data.', defAm: 'ማሽኖች ካለፉ መረጃዎች ተነስተው በራሳቸው እንዲማሩ የሚያስችል የAI ንዑስ ዘርፍ።' }], ['Narrow AI excels at specific tasks; General AI simulates human intelligence.'], ['ጠባብ AI ለአንድ ስራ የተሰራ ሲሆን፣ አጠቃላይ AI እንደ ሰው ልጅ ያስባል።'], [], []),
    makePdfChapter(604, 4, 'Internet of Things (IoT) and Smart Systems', 'የእቃዎች በይነመረብ (IoT) እና ስማርት ስርአቶች', 'IoT connects physical objects embedded with sensors, software, and network connectivity, enabling data exchange in smart cities, agriculture, and healthcare.', 'IoT እቃዎች በሴንሰር እና በኢንተርኔት ተገናኝተው መረጃ እንዲለዋወጡ የሚያደርግ ሲሆን በስማርት ከተሞች፣ በግብርና እና በህክምና ስራ ላይ ይውላል።', 'MoE Emerging Tech Team', [{ termEn: 'Sensors and Actuators', termAm: 'ሴንሰሮችና አንቀሳቃሾች', defEn: 'Hardware components collecting environmental data and executing actions.', defAm: 'የአካባቢን መረጃ የሚሰበስቡና ትእዛዝን ወደ ተግባር የሚቀይሩ አካላት።' }], ['Smart agriculture in Ethiopia optimizes water and fertilizer delivery.'], ['ስማርት ግብርና በኢትዮጵያ የውሃና ማዳበሪያ አጠቃቀምን ያሻሽላል።'], [], []),
    makePdfChapter(605, 5, 'Cybersecurity and Digital Privacy', 'የሳይበር ደህንነት እና ዲጂታል ግላዊነት', 'Cybersecurity protects computer systems, networks, and confidential data from digital attacks, malware, unauthorized access, and identity theft.', 'የሳይበር ደህንነት የኮምፒውተር ስርአቶችን፣ ኔትወርኮችን እና ሚስጥራዊ መረጃዎችን ከጠላፊዎችና ከቫይረስ ጥቃት የሚከላከል የሳይንስ ዘርፍ ነው።', 'MoE Emerging Tech Team', [{ termEn: 'Encryption', termAm: 'ምስጠራ', defEn: 'Encoding information so only authorized parties with keys can read it.', defAm: 'መረጃን ቁልፍ ባላቸው አካላት ብቻ እንዲነበብ አድርጎ የመቀየር ሂደት።' }], ['Defending critical infrastructure is essential for digital sovereignty.'], ['ወሳኝ ሀገራዊ መዋቅሮችን ከሳይበር ጥቃት መጠበቅ ለሉዓላዊነት አስፈላጊ ነው።'], [], []),
    makePdfChapter(606, 6, 'Augmented Reality (AR), Virtual Reality (VR) and Robotics', 'AR፣ VR እና ሮቦቲክስ', 'Immersive extended reality (XR) creates interactive simulated experiences, while robotics combines mechanical engineering and AI to automate complex physical tasks.', 'ምናባዊ እውነታ (VR) እና የተጨመረ እውነታ (AR) ህያው ተሞክሮዎችን ሲፈጥሩ፣ ሮቦቲክስ ውስብስብ ስራዎችን በራስ-ሰር ያከናውናል።', 'MoE Emerging Tech Team', [{ termEn: 'Virtual Reality', termAm: 'ምናባዊ እውነታ (VR)', defEn: 'Computer-generated simulation replacing real-world sensory environment.', defAm: 'እውነተኛውን ዓለም የሚተካ በኮምፒውተር የሚፈጠር ምናባዊ ተሞክሮ።' }], ['AR/VR revolutionizes medical training, remote surgery, and engineering.'], ['AR/VR የህክምና ስልጠናን እና የምህንድስና ዲዛይንን አሻሽሏል።'], [], []),
    makePdfChapter(607, 7, 'Other Emerging Technologies, Nanotechnology & Future Trends', 'ሌሎች አዳዲስ ቴክኖሎጂዎች፣ ናኖቴክኖሎጂ እና የወደፊት አዝማሚያዎች', 'Nanotechnology, biotechnology, quantum computing, blockchain, and additive manufacturing (3D printing) converging into future digital society.', 'ናኖቴክኖሎጂ፣ ባዮቴክኖሎጂ፣ ኳንተም ኮምፒውቲንግ፣ ብሎክቼይን እና 3D ፕሪንቲንግ የወደፊቱን የቴክኖሎጂ ዓለም ይቀርፃሉ።', 'MoE Emerging Tech Team', [{ termEn: 'Nanotechnology', termAm: 'ናኖቴክኖሎጂ', defEn: 'Manipulation of matter on an atomic and molecular scale (1 to 100 nanometers).', defAm: 'ቁስ አካላትን በአቶሚክና ሞለኪውላዊ ልኬት (ከ1 እስከ 100 ናኖሜትር) የመቆጣጠር ቴክኖሎጂ።' }, { termEn: 'Quantum Computing', termAm: 'ኳንተም ኮምፒውቲንግ', defEn: 'Computation harnessing quantum mechanics superposition and entanglement.', defAm: 'የኳንተም ፊዚክስ መርሆችን በመጠቀም እጅግ ፈጣን ስሌት የሚያከናውን የኮምፒውተር ቴክኖሎጂ።' }], ['Emerging technologies converge to solve global energy, health, and climate challenges.'], ['አዳዲስ ቴክኖሎጂዎች ተቀናጅተው ዓለም አቀፍ የሃይል፣ የጤና እና የአየር ንብረት ችግሮችን ይፈታሉ።'], [], [])
  ]
};

// 5. Applied Mathematics I (Math 1014B) - Full 5-Chapter / 97-Page Official AASTU Curriculum
export const appliedMathCourse: Course = fullAppliedMathCourse;

// 6. Mathematics (Math 1011) - Full 6-Chapter Interactive Curriculum
export const mathCourse: Course = fullMathCourse;

// 6. Social Anthropology (Anth 1012) - Full 6-Unit Interactive Curriculum
export const anthropologyCourse: Course = fullAnthropologyCourse;

// 7. Moral and Citizenship Education (MCED 1011 / MCDE 1012)
export const civicsCourse: Course = {
  id: 'mcde1012',
  code: 'MCED 1011',
  englishTitle: 'Moral and Citizenship Education',
  amharicTitle: 'የስነ-ምግባር እና የዜግነት ትምህርት',
  badge: '6 Chapters (PDF)',
  descriptionEn: 'National MoE/MoSHE standardized freshman module: Ethics, morality, normative ethical theories, ethical decision-making, state, government, citizenship, constitution, human rights, and social values in Ethiopia.',
  descriptionAm: 'የኢትዮጵያ ሳይንስና ከፍተኛ ትምህርት ሚኒስቴር (MoSHE) ይፋዊ ሞጁል፡ ስነ-ምግባር፣ የስነ-ምግባር ንድፈ-ሀሳቦች፣ የውሳኔ አሰጣጥ፣ መንግስትና ዜግነት፣ ህገ-መንግስት፣ ሰብአዊ መብቶች እና አገራዊ ማህበራዊ እሴቶችን የሚያጠና።',
  semester: 'Semester 1 or 2',
  stream: 'Common',
  creditHours: 3,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Moral_and_Citizenship_Education_MoE_2019.pdf',
    title: 'Moral and Citizenship Education Student Module (MCED 1011)',
    authorOrCommittee: 'Shewit Gebrezgabher & Gebretsadik Awgichew (MoSHE / MoE)',
    publishedYear: '2019',
    totalUnitsOrChapters: 6
  },
  metadata: { courseCode: 'MCED 1011', creditHours: 3, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(901, 1, 'Understanding Civics and Ethics', 'ስነ-ዜጋ እና ስነ-ምግባርን መረዳት', 'Civics and ethics cultivate competent, informed, and active citizens with moral integrity, examining ethical principles, legal frameworks, and moral philosophy.', 'ስነ-ዜጋ እና ስነ-ምግባር እውቀትና ንቁ ተሳትፎ ያላቸውን፣ በስነ-ምግባር የታነጹ ዜጎችን ለማፍራት የሚያስችሉ መሰረታዊ መርሆችን፣ የህግ ማዕቀፎችን እና የፍልስፍና እሳቤዎችን ያጠናል።', 'Shewit Gebrezgabher & Gebretsadik Awgichew (MoSHE)', [{ termEn: 'Civic Education', termAm: 'የዜግነት ትምህርት', defEn: 'Education cultivating active, responsible, and informed participation in democratic governance.', defAm: 'ዜጎች በዲሞክራሲያዊ አስተዳደር ውስጥ ንቁ፣ ኃላፊነት የሚሰማቸውና የተገነዘቡ ተሳታፊ እንዲሆኑ የሚያዘጋጅ ትምህርት።' }, { termEn: 'Moral Integrity', termAm: 'የሞራል ታማኝነት', defEn: 'Consistency between moral beliefs, professed values, and actual ethical conduct.', defAm: 'በሞራል እምነት፣ በሚታወጁ እሴቶችና በተግባራዊ የስነ-ምግባር ምግባር መካከል ያለው ስምምነት።' }], ['Civics cultivates public duty and democratic responsibility.', 'Ethics provides rational guidance for navigating human action and moral choices.'], ['የዜግነት ትምህርት የህዝባዊ ኃላፊነትንና ዲሞክራሲያዊ ግዴታን ያዳብራል።', 'ስነ-ምግባር ለሰው ልጅ ተግባራትና ለሞራል ምርጫዎች ምክንያታዊ መመሪያን ይሰጣል።'], [], []),
    makePdfChapter(902, 2, 'Approaches to Ethics and Normative Theories', 'የስነ-ምግባር አቀራረቦችና ንድፈ-ሀሳቦች', 'Normative ethical frameworks: Teleological (utilitarianism, egoism), Deontological (Kantian duties, rights theory), and Virtue Ethics (Aristotelian character development).', 'የስነ-ምግባር ንድፈ-ሀሳቦች፡ ጥቅም-ተኮር (ዩቲሊታሪያኒዝም፣ ኢጎኢዝም)፣ ግዴታ-ተኮር (ካንትና የሰብአዊ መብት ንድፈ-ሀሳብ)፣ እና በጎ ምግባር-ተኮር (የአሪስቶትል ስብዕና ግንባታ)።', 'Shewit Gebrezgabher & Gebretsadik Awgichew (MoSHE)', [{ termEn: 'Deontology', termAm: 'ግዴታ-ተኮር ስነ-ምግባር', defEn: 'Duty-based normative theory holding that actions are intrinsically right or wrong regardless of consequences.', defAm: 'ተግባራት ከውጤታቸው ባሻገር በባህሪያቸው በራሳቸው ትክክል ወይም ስህተት እንደሆኑ የሚያስተምር የስነ-ምግባር ንድፈ-ሀሳብ።' }, { termEn: 'Utilitarianism', termAm: 'ጥቅም-ተኮር ስነ-ምግባር (ዩቲሊታሪያኒዝም)', defEn: 'Consequentialist theory asserting the right action produces the greatest good for the greatest number.', defAm: 'ለብዙሃኑ የላቀውን ጥቅም የሚያስገኝ ተግባር ትክክለኛ ነው የሚል የውጤት-ተኮር ስነ-ምግባር እሳቤ።' }], ['Kant’s categorical imperative mandates treating humans as ends in themselves.', 'Virtue ethics focuses on cultivating internal habits of excellence and character.'], ['የካንት ፍጹም ትዕዛዝ ሰውን በራሱ እንደ ግብ እንጂ እንደ መጠቀሚያ እንዳንመለከት ያዛል።', 'በጎ ምግባር-ተኮር ስነ-ምግባር ውስጣዊ የመልካምነት ልማዶችንና ስብዕናን በማነጽ ላይ ያተኩራል።'], [], []),
    makePdfChapter(903, 3, 'Ethical Decision Making and Moral Judgments', 'ስነ-ምግባራዊ ውሳኔ አሰጣጥ እና የሞራል ፍርዶች', 'Systematic frameworks for ethical reasoning, analyzing moral dilemmas, applying ethical principles, and evaluating consequences in public and professional life.', 'ስነ-ምግባራዊ ችግሮችን ለመፍታት፣ የሞራል ውስብስቦችን ለመተንተን እና በመንግስታዊና በሙያዊ ህይወት ውስጥ ምክንያታዊ ውሳኔ ለመስጠት የሚያስችሉ ስልታዊ ማዕቀፎች።', 'Shewit Gebrezgabher & Gebretsadik Awgichew (MoSHE)', [{ termEn: 'Moral Dilemma', termAm: 'የሞራል ውስብስብ (ዳይሌማ)', defEn: 'Situation requiring a choice between two conflicting moral obligations where neither can be fully resolved without sacrificing the other.', defAm: 'ሁለት እርስ በእርስ የሚጋጩ የሞራል ግዴታዎች አጋጥመው አንዱን ለመፈጸም ሌላውን መስዋዕት ማድረግ የሚያስገድድ ሁኔታ።' }], ['Ethical decision making integrates moral principles, empathy, and consequence awareness.', 'Professional codes of conduct establish standard boundaries for occupational integrity.'], ['ስነ-ምግባራዊ ውሳኔ አሰጣጥ የሞራል መርሆችን፣ ርህራሄንና የውጤት ግንዛቤን ያጣምራል።', 'የሙያ ስነ-ምግባር ደንቦች ለሙያዊ ታማኝነት መደበኛ ወሰኖችን ያስቀምጣሉ።'], [], []),
    makePdfChapter(904, 4, 'State, Government and Citizenship', 'መንግስት፣ አስተዳደር እና ዜግነት', 'The concepts of statehood, sovereignty, forms and organs of government, constitutional democracy, theories of citizenship, and citizen rights and obligations.', 'የመንግስት ምንነት፣ ሉዓላዊነት፣ የመንግስት አካላትና ቅርጾች፣ ህገ-መንግስታዊ ዲሞክራሲ፣ የዜግነት ንድፈ-ሀሳቦች፣ እና የዜጎች መብትና ግዴታዎች ጥናት።', 'Shewit Gebrezgabher & Gebretsadik Awgichew (MoSHE)', [{ termEn: 'Rule of Law', termAm: 'የህግ የበላይነት', defEn: 'Principle ensuring that all citizens, leaders, and public institutions are equally accountable to the law.', defAm: 'ሁሉም ዜጎች፣ መሪዎችና የመንግስት ተቋማት በእኩልነት ለህግ ተገዥና ተጠያቂ መሆናቸውን የሚያረጋግጥ መርህ።' }, { termEn: 'Sovereignty', termAm: 'ሉዓላዊነት', defEn: 'Supreme authority within a territorial boundary, free from external control.', defAm: 'አንድ ሀገር በወሰኗ ውስጥ ያላት የበላይ ስልጣንና ከውጭ ጣልቃ ገብነት ነፃ የመሆን መብት።' }], ['Separation of powers into legislative, executive, and judicial branches prevents autocracy.', 'Active citizenship requires civic vigilance, public participation, and community responsibility.'], ['ስልጣንን በህግ አውጪ፣ አስፈጻሚ እና ተርጓሚ መክፈል አምባገነንነትን ይከላከላል።', 'ንቁ ዜግነት የህዝብ ተሳትፎን፣ የማህበረሰብ ኃላፊነትንና ንቁ ንቃተ-ህሊናን ይጠይቃል።'], [], []),
    makePdfChapter(905, 5, 'Constitution, Constitutionalism and Democracy', 'ህገ-መንግስት፣ ህገ-መንግስታዊነት እና ዲሞክራሲ', 'Constitutional development in Ethiopia, core constitutional principles, limits of sovereign state power, democratic participation, and protection of institutional legitimacy.', 'የኢትዮጵያ የህገ-መንግስት ታሪክ፣ መሰረታዊ ህገ-መንግስታዊ መርሆች፣ የመንግስት ስልጣን ወሰን፣ ዲሞክራሲያዊ ተሳትፎ እና የተቋማት ህጋዊነት ጥበቃ።', 'Shewit Gebrezgabher & Gebretsadik Awgichew (MoSHE)', [{ termEn: 'Constitutionalism', termAm: 'ህገ-መንግስታዊነት', defEn: 'Political philosophy requiring government authority to be derived from and limited by fundamental law.', defAm: 'የመንግስት ስልጣን ከህገ-መንግስት የሚመነጭና በህግ የተገደበ መሆን እንዳለበት የሚያስተምር የፖለቲካ ፍልስፍና።' }], ['A written constitution serves as the supreme law of the democratic state.', 'Constitutionalism safeguards individual freedoms against majoritarian or authoritarian overreach.'], ['የተጻፈ ህገ-መንግስት የዲሞክራሲያዊ ሀገር የበላይ ህግ ሆኖ ያገለግላል።', 'ህገ-መንግስታዊነት የግለሰብ ነፃነቶችን ከአምባገነናዊ ጭቆና ይጠብቃል።'], [], []),
    makePdfChapter(906, 6, 'Human Rights, Peace and Social Values', 'ሰብአዊ መብቶች፣ ሰላም እና ማህበራዊ እሴቶች', 'Generations of human rights, Ethiopian constitutional rights provisions, conflict transformation, sustainable peacebuilding, tolerance, and shared civic patriotism.', 'የሰብአዊ መብት ትውልዶች፣ የኢትዮጵያ ህገ-መንግስት የመብት ድንጋጌዎች፣ የግጭት አፈታትና ሽግግር፣ ዘላቂ ሰላም ግንባታ፣ መቻቻልና የጋራ አገራዊ ፍቅር።', 'Shewit Gebrezgabher & Gebretsadik Awgichew (MoSHE)', [{ termEn: 'Inalienable Rights', termAm: 'የማይገፈፉ መብቶች', defEn: 'Rights inherent to every human being that cannot be legitimately taken away or transferred.', defAm: 'እያንዳንዱ ሰው ሰው በመሆኑ ብቻ የሚያገኛቸውና በማንም ሊወሰዱ የማይችሉ መሰረታዊ መብቶች።' }, { termEn: 'Peacebuilding', termAm: 'ሰላም ግንባታ', defEn: 'Constructive measures undertaken to transform structural causes of conflict and cultivate lasting coexistence.', defAm: 'የግጭቶችን ስር የሰደዱ መንስኤዎች በማስወገድ ዘላቂ አብሮ መኖርን የሚያሰፍኑ ገንቢ ተግባራት።' }], ['Human rights are universal, inalienable, indivisible, and interdependent.', 'Enduring national prosperity rests on justice, mutual respect, and participatory peace.'], ['ሰብአዊ መብቶች ዓለም አቀፋዊ፣ የማይገፈፉ፣ የማይከፋፈሉ እና እርስ በእርስ የተሳሰሩ ናቸው።', 'ዘላቂ ሀገራዊ ብልጽግና በፍትህ፣ በመከባበርና በአሳታፊ ሰላም ላይ የተመሰረተ ነው።'], [], [])
  ]
};

export const moralCitizenshipCourse = civicsCourse;

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

// 13. Introduction to Economics (Econ 1011)
export const economicsCourse: Course = {
  id: 'econ1011',
  code: 'Econ 1011',
  englishTitle: 'Introduction to Economics',
  amharicTitle: 'የኢኮኖሚክስ መግቢያ',
  badge: '6 Chapters (PDF)',
  descriptionEn: 'National MoSHE/MoE freshman module: Nature and methods of economics, theory of demand and supply, consumer behavior, production and cost analysis, market structures, and macroeconomic fundamentals in Ethiopia.',
  descriptionAm: 'የኢትዮጵያ ሳይንስና ከፍተኛ ትምህርት ሚኒስቴር (MoSHE) ይፋዊ ሞጁል፡ የኢኮኖሚክስ ምንነትና ተፈጥሮ፣ የፍላጎትና አቅርቦት ንድፈ-ሀሳብ፣ የተጠቃሚዎች ባህሪ፣ የምርትና የወጪ ትንተና፣ የገበያ መዋቅሮች እና የማክሮ ኢኮኖሚክስ መሰረታዊ ፅንሰ-ሀሳቦች።',
  semester: 'Semester 1 or 2',
  stream: 'Common',
  creditHours: 3,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'Introduction_to_Economics_MoE_2019.pdf',
    title: 'Introduction to Economics Student Module (Econ 1011)',
    authorOrCommittee: 'Ministry of Science and Higher Education (MoSHE)',
    publishedYear: '2019',
    totalUnitsOrChapters: 6
  },
  metadata: { courseCode: 'Econ 1011', creditHours: 3, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(
      1401,
      1,
      'Theory of Scarcity, Choice and Economic Systems',
      'የእጥረት፣ ምርጫ እና የኢኮኖሚ ስርአቶች ንድፈ-ሀሳብ',
      'Economics is the study of allocating scarce resources to satisfy unlimited human wants. Scarcity necessitates choice, creating opportunity cost illustrated by the Production Possibility Frontier (PPF).',
      'ኢኮኖሚክስ ያልተገደበ የሰዎችን ፍላጎት ውስን በሆኑ ሀብቶች እንዴት ማርካት እንደሚቻል የሚያጠና የማህበራዊ ሳይንስ ዘርፍ ነው። እጥረት ምርጫን ያስከትላል፤ ምርጫ ደግሞ የእድል ዋጋን (Opportunity Cost) በምርት አቅም ወሰን (PPF) ያስከትላል።',
      'MoSHE National Economics Committee',
      [
        { termEn: 'Scarcity', termAm: 'እጥረት', defEn: 'Fundamental economic problem where society has insufficient productive resources to fulfill all human desires.', defAm: 'የሰው ልጅ ካለው ያልተገደበ ፍላጎት አንጻር የሚገኙት የተፈጥሮና ሰው ሰራሽ ሀብቶች ውስን መሆን።' },
        { termEn: 'Opportunity Cost', termAm: 'የእድል ዋጋ (ኦፖርቹኒቲ ኮስት)', defEn: 'The value of the next best alternative forgone when a decision is made.', defAm: 'አንድን አማራጭ ለመምረጥ ሲባል የተተወው ቀጣዩ ምርጥ አማራጭ ዋጋ።' },
        { termEn: 'PPF Curve', termAm: 'የምርት አቅም ወሰን ከርቭ', defEn: 'Graph showing maximum combination of two goods an economy can produce given fixed resources and technology.', defAm: 'በአንድ ኢኮኖሚ ውስጥ ባሉ ውስን ሀብቶችና ቴክኖሎጂ ሊመረቱ የሚችሉትን የሁለት ምርቶች ከፍተኛ ጥምረት የሚያሳይ ግራፍ።' }
      ],
      [
        'Microeconomics examines individual economic agents (households, firms); Macroeconomics examines aggregate economy-wide phenomena.',
        'Economic systems resolve the three core questions (What, How, For Whom) via traditional, command, free market, or mixed frameworks.'
      ],
      [
        'ማይክሮ ኢኮኖሚክስ የግለሰብና ድርጅቶችን ውሳኔዎች ያጠናል፤ ማክሮ ኢኮኖሚክስ አጠቃላይ ሀገራዊ ምጣኔ-ሀብትን ይተነትናል።',
        'የኢኮኖሚ ስርአቶች ሶስቱን መሰረታዊ ጥያቄዎች (ምን፣ እንዴት፣ ለማን) በባህላዊ፣ በትዕዛዝ፣ በነፃ ገበያ ወይም በድብልቅ ስርአት ይፈታሉ።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1402,
      2,
      'Theory of Demand and Supply and Market Equilibrium',
      'የፍላጎትና አቅርቦት ንድፈ-ሀሳብ እና የገበያ ሚዛን',
      'Market interactions governed by the Law of Demand (inverse price-quantity relation) and Law of Supply (direct price-quantity relation), establishing equilibrium price and quantity.',
      'የገበያ እንቅስቃሴዎች በፍላጎት ህግ (በዋጋና በፍላጎት መጠን መካከል ያለው የተገላቢጦሽ ዝምድና) እና በአቅርቦት ህግ (በዋጋና በአቅርቦት መጠን መካከል ያለው ቀጥተኛ ዝምድና) የሚመሩ ሲሆን የገበያ ሚዛንን ያመጣሉ።',
      'MoSHE National Economics Committee',
      [
        { termEn: 'Law of Demand', termAm: 'የፍላጎት ህግ', defEn: 'Other things remaining constant (ceteris paribus), as price rises, quantity demanded falls.', defAm: 'ሌሎች ሁኔታዎች ሳይለወጡ (ሴተሪስ ፓሪቡስ)፣ የአንድ እቃ ዋጋ ሲጨምር የሚፈለገው መጠን ይቀንሳል።' },
        { termEn: 'Law of Supply', termAm: 'የአቅርቦት ህግ', defEn: 'Other things remaining constant, as price rises, quantity supplied rises.', defAm: 'ሌሎች ሁኔታዎች ሳይለወጡ፣ የአንድ እቃ ዋጋ ሲጨምር ወደ ገበያ የሚቀርበው መጠን ይጨምራል።' },
        { termEn: 'Price Elasticity of Demand', termAm: 'የፍላጎት የዋጋ ተለዋዋጭነት (ኤላስቲክነት)', defEn: 'Measurement of the responsiveness of quantity demanded to changes in the price of the commodity.', defAm: 'የአንድ እቃ ዋጋ ሲቀያየር የሸማቾች የፍላጎት መጠን ምን ያህል ምላሽ እንደሚሰጥ የሚለካበት መንገድ።' }
      ],
      [
        'Market equilibrium occurs at the intersection of demand and supply curves where Quantity Demanded equals Quantity Supplied.',
        'Elasticity measures behavioral sensitivity of consumers and producers to price and income shifts.'
      ],
      [
        'የገበያ ሚዛን የሚፈጠረው የፍላጎትና የአቅርቦት ከርቮች በሚገናኙበትና የሚፈለገው መጠን ከሚቀርበው መጠን ጋር እኩል በሚሆንበት ነጥብ ላይ ነው።',
        'የዋጋ ተለዋዋጭነት (Elasticity) የሸማቾችንና የአምራቾችን የዋጋና የገቢ ለውጥ ምላሽ ይለካል።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1403,
      3,
      'Theory of Consumer Behavior: Utility and Indifference Curves',
      'የተጠቃሚዎች ባህሪ ንድፈ-ሀሳብ፡ እርካታ እና ኢንዲፈረንስ ከርቭ',
      'Analysis of consumer choice optimization through Cardinal Utility (Total & Marginal Utility, Law of Diminishing Marginal Utility) and Ordinal Utility (Indifference Curves, Budget Constraints).',
      'የተጠቃሚዎች ምርጫና እርካታ ማመቻቸት በቁጥር በሚለካ እርካታ (ጠቅላላና የትርፍ እርካታ፣ የቀነሰ የትርፍ እርካታ ህግ) እና በደረጃ በሚቀመጥ እርካታ (ኢንዲፈረንስ ከርቮችና የበጀት ወሰን) ትንተና።',
      'MoSHE National Economics Committee',
      [
        { termEn: 'Marginal Utility (MU)', termAm: 'የትርፍ እርካታ (ማርጂናል ዩቲሊቲ)', defEn: 'The additional satisfaction derived from consuming one more unit of a good or service.', defAm: 'አንድ ተጨማሪ እቃ ወይም አገልግሎት በመጠቀም የሚገኝ ተጨማሪ እርካታ።' },
        { termEn: 'Law of Diminishing Marginal Utility', termAm: 'የቀነሰ የትርፍ እርካታ ህግ', defEn: 'As consumption of a specific good increases, the marginal utility obtained from each subsequent unit decreases.', defAm: 'የአንድን እቃ አጠቃቀም እየጨመርን ስንሄድ ከእያንዳንዱ ተጨማሪ እቃ የሚገኘው እርካታ እየቀነሰ ይሄዳል የሚል ህግ።' },
        { termEn: 'Indifference Curve', termAm: 'ኢንዲፈረንስ ከርቭ', defEn: 'A curve depicting all bundles of two commodities that yield identical levels of satisfaction to the consumer.', defAm: 'ለሸማቹ እኩል የሆነ የእርካታ መጠን የሚያስገኙ የሁለት ምርቶች ጥምረቶችን የሚያሳይ ኩርባ።' }
      ],
      [
        'Consumer equilibrium is achieved when the marginal rate of substitution equals the price ratio (MRSxy = Px / Py).',
        'Budget constraints define the maximum affordable combinations given consumer income and prevailing commodity prices.'
      ],
      [
        'የተጠቃሚ ሚዛን የሚገኘው የሸቀጦች የመተካካት ምጣኔ (MRS) ከዋጋ ንፅፅር ጋር እኩል ሲሆን ነው (MRSxy = Px / Py)።',
        'የበጀት ወሰን ሸማቹ ባለው ገቢና በገበያው የዋጋ መጠን ሊገዛቸው የሚችላቸውን ምርጥ ጥምረቶች ይወስናል።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1404,
      4,
      'Theory of Production and Cost',
      'የምርት እና የወጪ ንድፈ-ሀሳብ',
      'Production functions examine how input factors (labor, capital, land) transform into output. Explores Short-Run (Law of Diminishing Returns, Fixed vs Variable Costs) and Long-Run (Isoquants, Returns to Scale).',
      'የምርት ፈንክሽን የምርት ግብአቶች (ጉልበት፣ ካፒታል፣ መሬት) ወደ ተጨባጭ ምርት እንዴት እንደሚቀየሩ ያጠናል። የአጭር ጊዜ (የቀነሰ ምርት ህግ፣ ቋሚና ተለዋዋጭ ወጪዎች) እና የረጅም ጊዜ (አይሶኳንት፣ የመጠን ምርታማነት) ትንተና።',
      'MoSHE National Economics Committee',
      [
        { termEn: 'Production Function', termAm: 'የምርት ፈንክሽን', defEn: 'Technical relationship showing the maximum output producible from a given set of factor inputs.', defAm: 'ከተሰጡ የምርት ግብአቶች ሊገኝ የሚችለውን ከፍተኛ የምርት መጠን የሚያሳይ ቴክኒካዊ ዝምድና።' },
        { termEn: 'Law of Diminishing Marginal Returns', termAm: 'የቀነሰ የትርፍ ምርት ህግ', defEn: 'In short run, adding variable units of an input to fixed inputs eventually yields progressively smaller increases in output.', defAm: 'በአጭር ጊዜ ውስጥ በቋሚ ግብአት ላይ ተጨማሪ ተለዋዋጭ ግብአት (እንደ ጉልበት) እየጨመሩ ሲሄዱ ውሎ አድሮ የሚገኘው ተጨማሪ ምርት ይቀንሳል።' },
        { termEn: 'Marginal Cost (MC)', termAm: 'የትርፍ ወጪ (ማርጂናል ኮስት)', defEn: 'The change in total cost resulting from manufacturing one additional unit of output.', defAm: 'አንድ ተጨማሪ ምርት ለማምረት የሚወጣ ተጨማሪ ወጪ።' }
      ],
      [
        'Total Cost is partitioned into Fixed Costs (independent of output) and Variable Costs (varying directly with output).',
        'Long-run average cost curves reflect economies of scale, constant returns, and diseconomies of scale.'
      ],
      [
        'ጠቅላላ ወጪ በቋሚ ወጪዎች (ከምርት መጠን ጋር የማይቀያየሩ) እና ተለዋዋጭ ወጪዎች (ከምርት መጠን ጋር የሚቀያየሩ) ይከፈላል።',
        'የረጅም ጊዜ አማካኝ ወጪ ከርቭ የመጠን ቁጠባንና (Economies of Scale) የመጠን ኪሳራን ያሳያል።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1405,
      5,
      'Market Structure and Imperfect Competition',
      'የገበያ መዋቅር እና ውድድር',
      'Examination of market classifications: Perfect Competition (price takers, zero economic profit in long run), Pure Monopoly (single seller, barriers to entry), Monopolistic Competition, and Oligopoly.',
      'የገበያ አይነቶች ምደባ፡ ፍጹም ፉክክር ያለበት ገበያ (ዋጋ ተቀባዮች፣ በረጅም ጊዜ መደበኛ ትርፍ ብቻ)፣ ሞኖፖሊ (አንድ ሻጭ፣ የገበያ መግቢያ እንቅፋቶች)፣ ሞኖፖሊያዊ ውድድር እና ኦሊጎፖሊ (ጥቂት ግዙፍ ሻጮች)።',
      'MoSHE National Economics Committee',
      [
        { termEn: 'Perfect Competition', termAm: 'ፍጹም ፉክክር ያለበት ገበያ', defEn: 'Market structure with numerous buyers and sellers, homogeneous products, perfect information, and free entry and exit.', defAm: 'በርካታ ገዢዎችና ሻጮች ያሉበት፣ ተመሳሳይ ምርት የሚሸጥበት እና ነፃ የገበያ መግቢያና መውጫ ያለው የገበያ አይነት።' },
        { termEn: 'Monopoly', termAm: 'ሞኖፖሊ', defEn: 'Market structure where a single firm produces a unique good without close substitutes, protected by entry barriers.', defAm: 'ተቀራራቢ ተካካይ የሌለው ምርት በአንድ አምራች ብቻ የሚቀርብበትና ወደ ገበያው ለመግባት ከፍተኛ እንቅፋት ያለበት ገበያ።' },
        { termEn: 'Profit Maximization Rule', termAm: 'የትርፍ ማሳደጊያ መርህ', defEn: 'Condition where firm produces output level where Marginal Revenue equals Marginal Cost (MR = MC).', defAm: 'አንድ ድርጅት ትርፉን ወደ ላቀ ደረጃ ለማድረስ የሚያመርተው የትርፍ ገቢ ከትርፍ ወጪ ጋር እኩል በሚሆንበት ነጥብ ላይ ነው (MR = MC)።' }
      ],
      [
        'Profit maximization for all competitive and non-competitive firms occurs where Marginal Revenue equals Marginal Cost (MR = MC).',
        'Oligopoly is characterized by strategic mutual interdependence among a small number of dominant firms.'
      ],
      [
        'ለሁሉም ድርጅቶች ትርፍን የማሳደጊያ ወርቃማ ህግ ማርጂናል ሬቨኑ ከማርጂናል ኮስት ጋር እኩል መሆን ነው (MR = MC)።',
        'ኦሊጎፖሊ በጥቂት ግዙፍ ድርጅቶች መካከል ባለው ስትራቴጂካዊ የእርስ በእርስ ጥገኝነት ይታወቃል።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1406,
      6,
      'Fundamental Concepts of Macroeconomics',
      'የማክሮ ኢኮኖሚክስ መሰረታዊ ፅንሰ-ሀሳቦች',
      'Macroeconomic goals, Gross Domestic Product (GDP) measurement (Expenditure, Income, Value-Added approaches), nominal vs real GDP, business cycles, unemployment categories, and inflation causes.',
      'የማክሮ ኢኮኖሚክስ ግቦች፣ ጠቅላላ የአገር ውስጥ ምርት (GDP) ስሌት (የወጪ፣ የገቢ፣ የተጨመረ እሴት ዘዴዎች)፣ የኢኮኖሚ ዑደት፣ የስራ አጥነት አይነቶች እና የዋጋ ግሽበት መንስኤዎች።',
      'MoSHE National Economics Committee',
      [
        { termEn: 'Gross Domestic Product (GDP)', termAm: 'ጠቅላላ የአገር ውስጥ ምርት (GDP)', defEn: 'Monetary market value of all final goods and services produced within a country borders in a given year.', defAm: 'በአንድ ሀገር ወሰን ውስጥ በአንድ አመት ውስጥ የተመረቱ የመጨረሻ እቃዎችና አገልግሎቶች የገበያ ዋጋ ድምር።' },
        { termEn: 'Inflation', termAm: 'የዋጋ ግሽበት', defEn: 'A continuous, sustained increase in the general price level of goods and services over time.', defAm: 'በአጠቃላይ የሸቀጦችና አገልግሎቶች የገበያ ዋጋ ላይ የሚታይ ቀጣይነት ያለው ጭማሪ።' },
        { termEn: 'Fiscal Policy', termAm: 'የፊስካል ፖሊሲ', defEn: 'Government taxation and spending policies used to influence national macroeconomic activity.', defAm: 'መንግስት የታክስና የመንግስት ወጪዎችን በመጠቀም አጠቃላይ ኢኮኖሚውን የሚመራበት ፖሊሲ።' }
      ],
      [
        'Nominal GDP values output at current prices; Real GDP is adjusted for inflation using constant base-year prices.',
        'Macroeconomic policy uses monetary tools (National Bank interest rates and money supply) and fiscal tools (taxes, government expenditure).'
      ],
      [
        'ኖሚናል ጂዲፒ ምርትን በወቅቱ የገበያ ዋጋ ሲለካ፤ ሪል ጂዲፒ ደግሞ የዋጋ ግሽበትን በቋሚ ዋጋ በማስተካከል ትክክለኛውን እድገት ይለካል።',
        'የማክሮ ኢኮኖሚክስ ፖሊሲ የገንዘብ ፖሊሲን (የወለድ ምጣኔና የገንዘብ መጠን) እና የፊስካል ፖሊሲን (ታክስና የመንግስት ወጪ) ይጠቀማል።'
      ],
      [],
      []
    )
  ]
};

// 14. General Biology (Biol 1012)
export const biologyCourse: Course = {
  id: 'biol1012',
  code: 'Biol 1012',
  englishTitle: 'General Biology',
  amharicTitle: 'አጠቃላይ ባዮሎጂ',
  badge: '6 Chapters (PDF)',
  descriptionEn:
    'Comprehensive university module covering introduction to biological sciences, macromolecules, cell structure and membrane transport, cellular metabolism and metabolic disorders, Mendelian and molecular genetics, evolutionary theories, ecology, and conservation of natural resources in Ethiopia.',
  descriptionAm:
    'የባዮሎጂ ሳይንስ መግቢያ፣ ማክሮሞለኪውሎች፣ የሴል አወቃቀር እና የሽፋን ዝውውር፣ ሴሉላር ሜታቦሊዝም እና የሜታቦሊክ መታወክ፣ ሜንዴሊያን እና ሞለኪውላዊ ጄኔቲክስ፣ የዝግመተ-ለውጥ ንድፈ-ሀሳቦች፣ ኢኮሎጂ እና በኢትዮጵያ የተፈጥሮ ሀብት ጥበቃን ያካተተ ይፋዊ የዩኒቨርሲቲ ሞጁል።',
  semester: 'Semester 2',
  stream: 'Natural Science',
  creditHours: 3,
  hasInteractiveContent: true,
  pdfModule: {
    filename: 'General_Biology_Biol_1012_MoE.pdf',
    title: 'General Biology Student Module (Biol 1012)',
    authorOrCommittee: 'Ministry of Science and Higher Education (MoSHE)',
    publishedYear: '2020',
    totalUnitsOrChapters: 6
  },
  metadata: { courseCode: 'Biol 1012', creditHours: 3, academicYear: 'Freshman Year' },
  chapters: [
    makePdfChapter(
      1501,
      1,
      'Introduction to Biology',
      'የባዮሎጂ ሳይንስ መግቢያ',
      'Nature of science, branches of biology, the scientific method, microscopy advancements, and ethical principles in biological inquiry.',
      'የሳይንስ ምንነት፣ የባዮሎጂ ቅርንጫፎች፣ ሳይንሳዊ የምርምር ዘዴ፣ የማይክሮስኮፕ እድገት እና በባዮሎጂ ጥናት ውስጥ የስነ-ምግባር መርሆች።',
      'MoSHE Biology Curriculum Committee',
      [
        { termEn: 'Scientific Method', termAm: 'ሳይንሳዊ የምርምር ዘዴ', defEn: 'Systematic approach to research involving observation, hypothesis formulation, experimentation, and conclusion.', defAm: 'ምልከታን፣ መላ-ምትን፣ ሙከራንና ድምዳሜን ያካተተ ስልታዊ የምርምር አካሄድ።' },
        { termEn: 'Cell Theory', termAm: 'የሴል ንድፈ-ሀሳብ', defEn: 'Fundamental biological theory stating that all living things are composed of cells, the cell is basic unit of life, and cells arise from pre-existing cells.', defAm: 'ሁሉም ህያዋን ከሴል እንደተገነቡ፣ ሴል የህይወት መሰረት እንደሆነና አዳዲስ ሴሎች ከነባር ሴሎች እንደሚገኙ የሚገልጽ ንድፈ-ሀሳብ።' }
      ],
      [
        'Biology is the scientific study of living organisms and their vital biological processes.',
        'The scientific method relies on empirical testing and falsifiable hypotheses.'
      ],
      [
        'ባዮሎጂ ስለ ህያዋን ፍጥረታት እና የህይወት ሂደቶች የሚያጠና የተፈጥሮ ሳይንስ ነው።',
        'ሳይንሳዊ ዘዴ በተጨባጭ ሙከራና በሚፈተሽ መላ-ምት ላይ የተመሰረተ ነው።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1502,
      2,
      'Biological Macromolecules',
      'ባዮሎጂካል ማክሮሞለኪውሎች',
      'Structure and functions of carbohydrates (monosaccharides, polysaccharides), lipids (triglycerides, phospholipids), proteins (peptide bonds, four protein structures), and nucleic acids (DNA, RNA).',
      'የካርቦሃይድሬቶች፣ የሊፒዶች፣ የፕሮቲኖች (አራት ደረጃዎች) እና የኒውክሊክ አሲዶች (DNA እና RNA) መዋቅር እና ስነ-ህይወታዊ ተግባራት።',
      'MoSHE Biology Curriculum Committee',
      [
        { termEn: 'Peptide Bond', termAm: 'ፔፕታይድ ቦንድ', defEn: 'Covalent chemical bond formed between two amino acid molecules when the carboxyl group of one reacts with the amino group of the other.', defAm: 'በአንድ አሚኖ አሲድ ካርቦክሲል እና በሌላው አሚኖ ቡድን መካከል የሚፈጠር ጠንካራ የኮቫለንት ቦንድ።' },
        { termEn: 'Phospholipids', termAm: 'ፎስፎሊፒዶች', defEn: 'Amphipathic lipid molecules forming the structural basis of cellular membranes with hydrophilic phosphate heads and hydrophobic fatty acid tails.', defAm: 'ውሃ-ወዳድ ራስ እና ውሃ-ጠል ጭራ ያላቸው የሴል ሽፋንን የሚገነቡ ቅባቶች።' }
      ],
      [
        'Macromolecules are polymers formed by dehydration condensation reactions of repeating monomers.',
        'Proteins carry out structural, enzymatic, transport, and defensive functions determined by their 3D conformations.'
      ],
      [
        'ማክሮሞለኪውሎች ከሞኖመሮች በኮንደንሴሽን ምላሽ የሚገነቡ ትላልቅ ፖሊመሮች ናቸው።',
        'የፕሮቲኖች ተግባር የሚወሰነው በሚኖራቸው ባለ 3-ልኬት ቅርጽ ነው።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1503,
      3,
      'Cellular Biology',
      'የሴል ባዮሎጂ',
      'Cell theory, differences between prokaryotic and eukaryotic cells, cytoplasmic organelles (nucleus, ER, Golgi, lysosomes, mitochondria, chloroplasts), cell membrane architecture, and active/passive transport.',
      'የሴል ንድፈ-ሀሳብ፣ በፕሮካሪዮትና ዩካሪዮት መካከል ያለው ልዩነት፣ የሴል ኦርጋኔሎች፣ የሴል ሽፋን አወቃቀር እና የንጥረ-ነገሮች ማጓጓዝ መንገዶች።',
      'MoSHE Biology Curriculum Committee',
      [
        { termEn: 'Fluid Mosaic Model', termAm: 'ፍሉይድ ሞዛይክ ሞዴል', defEn: 'Model describing the plasma membrane as a dynamic, fluid phospholipid bilayer with embedded functional proteins.', defAm: 'የፕላዝማ ሽፋን ተለዋዋጭና ፈሳሽ መሰል የፎስፎሊፒድ ድርብ ንጣፍ ከነፕሮቲኖቹ መሆኑን የሚገልጽ ሞዴል።' },
        { termEn: 'Endosymbiosis', termAm: 'ኢንዶሲምባዮሲስ', defEn: 'Evolutionary theory stating that eukaryotic organelles like mitochondria and chloroplasts originated as free-living prokaryotic endosymbionts.', defAm: 'ማይቶኮንድሪያ እና ክሎሮፕላስት ከጥንታዊ ባክቴሪያዎች ጋር አብሮ በመኖር ወደ ሴል ኦርጋኔል እንደተቀየሩ የሚያስረዳ ንድፈ-ሀሳብ።' }
      ],
      [
        'Eukaryotic cells are compartmentalized with membrane-bound organelles performing specialized metabolic functions.',
        'Selective permeability regulates cellular homeostasis via passive diffusion, osmosis, facilitated diffusion, and active transport.'
      ],
      [
        'የዩካሪዮት ሴሎች በሽፋን የተከለሉ ልዩ ልዩ ተግባራትን የሚያከናውኑ ኦርጋኔሎች አሏቸው።',
        'የሴል ሽፋን ወደ ሴል የሚገቡና የሚወጡ ንጥረ-ነገሮችን በመቆጣጠር የሴል ውስጣዊ ሚዛንን (homeostasis) ይጠብቃል።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1504,
      4,
      'Cellular Metabolism and Metabolic Disorders',
      'ሴሉላር ሜታቦሊዝም እና የሜታቦሊክ መታወክ',
      'Catabolism vs anabolism, enzyme kinetics, glycolysis 10 enzymatic reactions, TCA cycle, electron transport chain, photosynthesis (light & Calvin cycle, C4/CAM), and inherited/acquired metabolic disorders.',
      'ካታቦሊዝም እና አናቦሊዝም፣ የኢንዛይም አሰራር፣ አስሩ የግላይኮሊሲስ ደረጃዎች፣ የክሬብስ ዑደት፣ ETC፣ ፎቶሲንተሲስ (የብርሃንና የካልቪን ዑደት) እና የሜታቦሊክ መታወክ በሽታዎች።',
      'MoSHE Biology Curriculum Committee',
      [
        { termEn: 'Glycolysis', termAm: 'ግላይኮሊሲስ', defEn: 'The 10-step anaerobic catabolic pathway in cytosol breaking down glucose into two pyruvate molecules yielding net 2 ATP and 2 NADH.', defAm: 'በሳይቶፕላዝም ውስጥ አንድ ግሉኮስ ተሰባብሮ ወደ ሁለት ፓይሩቬት የሚቀየርበት እና 2 ATP/2 NADH የሚያስገኝ ሂደት።' },
        { termEn: 'Rubisco', termAm: 'ሩቢስኮ', defEn: 'Key enzyme of the Calvin cycle catalyzing carbon fixation by attaching CO2 to ribulose-1,5-bisphosphate.', defAm: 'በፎቶሲንተሲስ የካልቪን ዑደት ውስጥ CO2ን በማሰር ስኳር እንዲመረት የሚያፋጥን ወሳኝ ኢንዛይም።' }
      ],
      [
        'Cellular respiration oxidizes organic substrates through glycolysis, pyruvate transition, TCA cycle, and oxidative phosphorylation.',
        'Metabolic disorders stem from genetic enzyme defects (e.g. PKU, Gaucher) or acquired lifestyle imbalances.'
      ],
      [
        'ሴሉላር ሬስፒሬሽን ግሉኮስን በግላይኮሊሲስ፣ በክሬብስ ዑደትና በETC በማቃጠል ATP ያመነጫል።',
        'የሜታቦሊክ ህመሞች በዘረ-መል የኢንዛይም ጉድለት (እንደ PKU) ወይም በኑሮ ዘይቤ ምክንያት ይከሰታሉ።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1505,
      5,
      'Genetics and Evolution',
      'ጄኔቲክስ እና ዝግመተ-ለውጥ',
      'Mendelian genetics, laws of segregation and independent assortment, molecular genetics (DNA replication, transcription, translation, genetic code), mutations, genetic engineering, ABO/Rh blood groups, and Darwinian natural selection.',
      'የሜንዴሊያን ውርስ ህጎች፣ ሞለኪውላር ጄኔቲክስ (የዲኤንኤ ቅጂ፣ ትራንስክሪፕሽን፣ ትራንስሌሽን)፣ ሚውቴሽኖች፣ ጄኔቲክ ኢንጂነሪንግ፣ የABO የደም ቡድኖች እና የዳርዊን የተፈጥሮ ምርጫ።',
      'MoSHE Biology Curriculum Committee',
      [
        { termEn: 'Natural Selection', termAm: 'የተፈጥሮ ምርጫ', defEn: 'Evolutionary mechanism where organisms with traits better adapted to their environment tend to survive and reproduce more successfully.', defAm: 'ለአካባቢያቸው ይበልጥ ተስማሚ የሆኑ ባህሪያት ያላቸው ፍጥረታት በህይወት የመቆየትና የመራባት እድላቸው የሰፋ የሚሆንበት የዝግመተ-ለውጥ መርህ።' },
        { termEn: 'Semi-Conservative Replication', termAm: 'ከፊል-ጠባቂ የዲኤንኤ ቅጂ', defEn: 'Mechanism of DNA duplication where each new double helix retains one parent template strand and one newly synthesized strand.', defAm: 'አዲስ የሚሰራው የዲኤንኤ ሞለኪውል አንዱን የወላጅ ሰንሰለትና አንዱን አዲስ ሰንሰለት የሚይዝበት መንገድ።' }
      ],
      [
        'The Central Dogma describes directional flow of genetic information: DNA to mRNA (transcription) to protein (translation).',
        'Evolution by natural selection operates on phenotypic variations produced by mutations and recombination within gene pools.'
      ],
      [
        'የሴንትራል ዶግማ መርህ የዘረ-መል መረጃ ከዲኤንኤ ወደ አርኤንኤ ከዚያም ወደ ፕሮቲን እንደሚተላለፍ ያስረዳል።',
        'ዝግመተ-ለውጥ በሚውቴሽንና በመራባት በሚፈጠሩ የዘረ-መል ልዩነቶች ላይ የተፈጥሮ ምርጫን በማካሄድ ይከናወናል።'
      ],
      [],
      []
    ),
    makePdfChapter(
      1506,
      6,
      'Ecology and Conservation of Natural Resources',
      'ኢኮሎጂ እና የተፈጥሮ ሀብት ጥበቃ',
      'Levels of ecological organization, energy flow and food webs, biogeochemical cycles (N, C, H2O), ecological pyramids, population ecology, species interactions, Ethiopian endemic biodiversity, threats, and conservation strategies (In-situ, Ex-situ, CRGE, Green Legacy).',
      'የኢኮሎጂ አደረጃጀት፣ የሀይል ፍሰት እና የምግብ ድር፣ ባዮጂኦኬሚካላዊ ዑደቶች፣ የህዝብ ብዛት እድገት፣ የኢትዮጵያ ብርቅዬ ብዝሃ-ህይወት፣ አደጋዎች እና የጥበቃ ስልቶች (In-situ፣ Ex-situ፣ CRGE፣ አረንጓዴ አሻራ)።',
      'MoSHE Biology Curriculum Committee',
      [
        { termEn: 'Endemism', termAm: 'ብርቅዬነት (ኢንደሚዝም)', defEn: 'Ecological state of a species being uniquely native to a defined geographical location and nowhere else in the world.', defAm: 'አንድ የዱር እንስሳ ወይም ተክል በአንድ በተወሰነ መልክዓ-ምድራዊ ክልል ብቻ ተወስኖ መገኘት።' },
        { termEn: 'Trophic Level', termAm: 'የትሮፊክ ደረጃ', defEn: 'The hierarchical position an organism occupies in a food web, defined by how many energy transfers separate it from primary producers.', defAm: 'አንድ ህያው ፍጡር በምግብ ሰንሰለት ወይም ድር ውስጥ የሚይዘው የአመጋገብ ደረጃ።' }
      ],
      [
        'Only approximately 10% of chemical energy transfers between sequential trophic levels; 90% is dissipated as metabolic heat.',
        'Ethiopia possesses extraordinary endemic species (Walia Ibex, Ethiopian Wolf, Mountain Nyala) requiring active in-situ habitat conservation and community participation.'
      ],
      [
        'ከአንዱ ትሮፊክ ደረጃ ወደ ቀጣዩ የሚተላለፈው 10% የሚሆነው ሀይል ብቻ ነው፤ 90% በሙቀት መልክ ይባክናል።',
        'ኢትዮጵያ በዓለም ብርቅዬ የሆኑ በርካታ ዝርያዎች (ዋሊያ፣ ቀይ ቀበሮ፣ የደጋ አጋዘን) ያሏት ሲሆን ማህበረሰቡን ያሳተፈ የጥበቃ ስራ ይሻሉ።'
      ],
      [],
      []
    )
  ]
};

// Array of all 15 MoE PDF courses (including both Applied Mathematics & Freshman Mathematics)
export const moePdfCoursesList: Course[] = [
  appliedMathCourse,
  mathCourse,
  logicCourse,
  geographyCourse,
  historyCourse,
  emergingTechCourse,
  anthropologyCourse,
  civicsCourse,
  inclusivenessCourse,
  physicsCourse,
  sportsCourse,
  globalTrendsCourse,
  entrepreneurshipCourse,
  economicsCourse,
  biologyCourse
];

// Re-export with legacy alias to maintain backward compatibility if needed
export const moshePdfCoursesList = moePdfCoursesList;

