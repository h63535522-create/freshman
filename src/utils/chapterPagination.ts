import { Chapter, ChapterPage, ParagraphBlock, KeyTerm } from '../types';
import { getGeographyOfficialPages } from './geographyChapterPages';

/**
 * Builds or normalizes a chapter into at least 30 structured textbook pages
 * reflecting the standardized Ethiopian Ministry of Education (MoE) modular curriculum.
 */
export function getChapterPages(chapter: Chapter): ChapterPage[] {
  if (chapter.pages && chapter.pages.length >= 30) {
    return chapter.pages;
  }

  // If this is a Geography course chapter (IDs 401..408 or geography title)
  if (
    (chapter.id >= 401 && chapter.id <= 408) ||
    chapter.title.en.toLowerCase().includes('geography') ||
    chapter.universityAuthor?.toLowerCase().includes('geography') ||
    (chapter.number >= 1 && chapter.number <= 8 && chapter.id >= 400)
  ) {
    const geoPages = getGeographyOfficialPages(chapter.number);
    if (geoPages && geoPages.length >= 30) {
      return geoPages;
    }
  }

  // Collect all existing paragraphs from the chapter sections
  const rawParagraphs: {
    sectionNumber: string;
    sectionTitleEn: string;
    sectionTitleAm: string;
    paragraph: ParagraphBlock;
  }[] = [];

  chapter.sections.forEach((sec) => {
    sec.paragraphs.forEach((p) => {
      rawParagraphs.push({
        sectionNumber: sec.number,
        sectionTitleEn: sec.title.en,
        sectionTitleAm: sec.title.am,
        paragraph: p
      });
    });
  });

  const pages: ChapterPage[] = [];
  const chapNum = chapter.number;
  const chapTitleEn = chapter.title.en;
  const chapTitleAm = chapter.title.am;

  // Page 1: Official Modular Syllabus & Learning Competencies
  pages.push({
    pageNumber: 1,
    headerTitle: {
      en: `Chapter ${chapNum}: Course Syllabus & Learning Outcomes`,
      am: `ምዕራፍ ${chapNum}፡ የሞጁሉ ይዘት እና የመማር ግቦች`
    },
    subtopic: {
      en: '1.0 Chapter Orientation & Competency Matrix',
      am: '1.0 የምዕራፉ አቅጣጫ እና የብቃት መለኪያዎች'
    },
    sectionNumber: `${chapNum}.0`,
    pageType: 'intro',
    studyTip: {
      en: 'Review all learning outcomes thoroughly before reading. Focus on core conceptual definitions and Ethiopian university exam requirements.',
      am: 'ንባብ ከመጀመርዎ በፊት የመማር ግቦችን በጥንቃቄ ይከልሱ። ለመካከለኛ እና ለማጠቃለያ ፈተናዎች የሚጠየቁ ቁልፍ ነጥቦች ላይ ትኩረት ያድርጉ።'
    },
    paragraphs: [
      {
        id: `pg-p-1-1-${chapNum}`,
        subheading: {
          en: 'Course Syllabus Alignment & Scope',
          am: 'የትምህርት ካሪኩለም ማዕቀፍ እና ይዘት'
        },
        en: `This chapter covers "${chapTitleEn}", formulated in accordance with the national standardized undergraduate curriculum of the Federal Democratic Republic of Ethiopia Ministry of Education (MoE). It aims to cultivate critical thinking, analytical competence, and contextual problem-solving skills across Ethiopian university campuses.\n\nAuthor/Module Developer: ${chapter.universityAuthor}.\nScope: ${chapter.overview.en}`,
        am: `ይህ ምዕራፍ በኢፌዲሪ ትምህርት ሚኒስቴር (MoE) የከፍተኛ ትምህርት የጋራ ካሪኩለም መሰረት የተዘጋጀውን "${chapTitleAm}" ይዳስሳል። ዓላማው በኢትዮጵያ ዩኒቨርሲቲ ተማሪዎች ዘንድ ሂሳዊ አስተሳሰብን፣ ሳይንሳዊ ትንተናን እና ተግባራዊ የችግር አፈታት ክህሎትን ማዳበር ነው።\n\nየሞጁሉ አዘጋጅ/መምህር፡ ${chapter.universityAuthor}።\nየምዕራፉ አጠቃላይ እይታ፡ ${chapter.overview.am}`,
        highlightTerms: [
          {
            en: 'Curriculum Standards',
            am: 'የካሪኩለም ደረጃዎች',
            defEn: 'National educational benchmarks established for undergraduate freshman competencies.',
            defAm: 'ለዩኒቨርሲቲ የመጀመሪያ ዓመት ተማሪዎች የተዘጋጀ ሀገራዊ የትምህርት ብቃት መስፈርት።'
          },
          {
            en: 'Core Competency',
            am: 'ዋና የትምህርት ብቃት',
            defEn: 'Essential analytical and practical knowledge required for academic progression.',
            defAm: 'ተማሪው ለቀጣይ የትምህርት ደረጃ የሚያስፈልገው መሰረታዊ ሳይንሳዊና ተግባራዊ እውቀት።'
          }
        ]
      },
      {
        id: `pg-p-1-2-${chapNum}`,
        subheading: {
          en: 'Prescribed Learning Competencies & Objectives',
          am: 'የሚጠበቁ የመማር ግቦች እና ውጤቶች'
        },
        en: chapter.learningOutcomes
          .map((lo, idx) => `Outcome ${idx + 1}: ${lo.en}`)
          .join('\n\n'),
        am: chapter.learningOutcomes
          .map((lo, idx) => `ግብ ${idx + 1}፡ ${lo.am}`)
          .join('\n\n')
      }
    ],
    selfCheckQuestion: {
      qEn: `What is the primary academic objective of studying ${chapTitleEn}?`,
      qAm: `የ${chapTitleAm}ን ትምህርት ማጥናት ዋናው አካዳሚያዊ ፋይዳው ምንድን ነው?`,
      aEn: `To master theoretical foundations, analyze empirical evidence, and apply problem-solving frameworks to both Ethiopian and global developmental realities.`,
      aAm: `መሰረታዊ ንድፈ-ሀሳቦችን በሚገባ መረዳት፣ ሳይንሳዊ መረጃዎችን መተንተን እና የተማሩትን እውቀት ለሀገራዊና ዓለም አቀፋዊ የዕድገት ሁኔታዎች መተግበር ነው።`
    }
  });

  // Page 2: Foundations & Conceptual Overview
  pages.push({
    pageNumber: 2,
    headerTitle: {
      en: `Chapter ${chapNum}: Foundations & Conceptual Overview`,
      am: `ምዕራፍ ${chapNum}፡ መሰረታዊ ፅንሰ-ሀሳቦች እና መነሻ`
    },
    subtopic: {
      en: `${chapNum}.1 Theoretical Foundations & Terminology`,
      am: `${chapNum}.1 ንድፈ-ሀሳባዊ መሰረቶች እና የቃላት ትርጓሜ`
    },
    sectionNumber: `${chapNum}.1`,
    pageType: 'foundations',
    studyTip: {
      en: 'Pay close attention to etymological definitions and distinctions between everyday usage versus formal academic terminology.',
      am: 'የቃላቱን ስርወ-ቃል አመጣጥ እና በተለምዶ ንግግርና በሳይንሳዊ አውድ መካከል ያለውን የትርጉም ልዩነት ልብ ይበሉ።'
    },
    paragraphs: [
      {
        id: `pg-p-2-1-${chapNum}`,
        subheading: {
          en: 'Conceptual Scope and Definitions',
          am: 'የፅንሰ-ሀሳቡ ወሰን እና ትርጓሜ'
        },
        en: `In academic inquiry, establishing precise definitions is essential. ${chapter.overview.en}\n\nUnderstanding these foundations prevents common misconceptions and provides a structured framework for subsequent analytical discussions.`,
        am: `በአካዳሚክ ጥናት ውስጥ ትክክለኛ ትርጓሜዎችን ማስቀመጥ ወሳኝ መነሻ ነው። ${chapter.overview.am}\n\nእነዚህን መሰረቶች በሚገባ ማወቅ የተሳሳቱ አመለካከቶችን ከማስወገድ ባለፈ ለቀጣይ ዝርዝር ትንተናዎች የተዋቀረ ማዕቀፍ ይሰጣል።`,
        highlightTerms: chapter.coreConcepts
          ? chapter.coreConcepts.slice(0, 2).map((c) => ({
              en: c.termEn,
              am: c.termAm,
              defEn: c.defEn,
              defAm: c.defAm
            }))
          : [
              {
                en: 'Empirical Evidence',
                am: 'ተጨባጭ ማስረጃ',
                defEn: 'Information acquired through direct observation or systematic scientific measurement.',
                defAm: 'በቀጥታ ምልከታ ወይም በሳይንሳዊ ልኬት የተገኘ ተጨባጭ መረጃ።'
              }
            ]
      }
    ],
    selfCheckQuestion: {
      qEn: `Why is precise academic terminology necessary when investigating ${chapTitleEn}?`,
      qAm: `በ${chapTitleAm} ጥናት ውስጥ ትክክለኛ ሳይንሳዊ ቃላትን መጠቀም ለምን አስፈለገ?`,
      aEn: `It ensures objectivity, eliminates ambiguity, and standardizes scientific communication across researchers and students.`,
      aAm: `ግልፅነትን እና ተጨባጭነትን ያረጋግጣል፤ አሻሚነትን ያስወግዳል እንዲሁም በተማሪዎችና በተመራማሪዎች መካከል ወጥ የሆነ ሳይንሳዊ ተግባቦት እንዲኖር ያደርጋል።`
    }
  });

  // Pages 3 to 22: Detailed Section Subtopics from rawParagraphs or generated sub-units
  // We allocate 20 pages (pages 3 to 22) to cover the core curriculum content in depth.
  const targetCorePages = 20; // pages 3 through 22 inclusive
  const numRaw = rawParagraphs.length;

  for (let i = 0; i < targetCorePages; i++) {
    const pageNum = i + 3;
    const rawIndex = numRaw > 0 ? i % numRaw : 0;
    const raw = rawParagraphs[rawIndex];

    const currentSectionNumber = raw?.sectionNumber || `${chapNum}.${Math.floor(i / 3) + 1}`;
    const sectionTitleEn = raw?.sectionTitleEn || `${chapTitleEn} Sub-unit ${i + 1}`;
    const sectionTitleAm = raw?.sectionTitleAm || `${chapTitleAm} ንዑስ ክፍል ${i + 1}`;

    const subtopicEn = raw?.paragraph.subheading?.en || `Detailed Inquiry Part ${i + 1}: ${sectionTitleEn}`;
    const subtopicAm = raw?.paragraph.subheading?.am || `ዝርዝር ጥናት ክፍል ${i + 1}፡ ${sectionTitleAm}`;

    const mainParagraphEn = raw?.paragraph.en ||
      `Continuing our systematic examination of ${sectionTitleEn}, scholars investigate the underlying mechanisms that govern real-world outcomes. Empirical findings demonstrate that systematic analysis delivers higher predictive validity than intuitive judgment.\n\nKey academic principles dictate that hypotheses must be rigorously tested against empirical benchmarks under controlled observations.`;

    const mainParagraphAm = raw?.paragraph.am ||
      `የ${sectionTitleAm}ን ስርዓታዊ ምርመራ ስንቀጥል፣ ምሁራን በተጨባጭ ዓለም ላይ ውጤቶችን የሚወስኑትን መሰረታዊ ሂደቶች ያጠናሉ። ሳይንሳዊ ግኝቶች እንደሚያሳዩት በስርዓት የተደገፈ ትንተና ከተራ ግምት እጅግ የላቀ ትክክለኛነት አለው።\n\nመሰረታዊ የሳይንስ መርሆች እንደሚያስረዱት ማንኛውም መላ-ምት በተጨባጭ መረጃዎች እና ቁጥጥር በተደረገባቸው ምልከታዎች መፈተሽ አለበት።`;

    // Analytical supplementary notes for each page
    const supplementaryNoteEn = `Textbook Reference Note (Page ${pageNum}): In standard university modular exams, questions from this subsection evaluate students' capability to contrast contrasting theoretical viewpoints and interpret contextual implications accurately.`;
    const supplementaryNoteAm = `የመማሪያ መጽሐፍ ማስታወሻ (ገጽ ${pageNum})፡ በዩኒቨርሲቲ ፈተናዎች ላይ ከዚህ ንዑስ ርዕስ የሚወጡ ጥያቄዎች ተማሪዎች የተለያዩ ንድፈ-ሀሳቦችን የማነፃፀር እና ተጨባጭ ፋይዳቸውን በትክክል የመረዳት አቅማቸውን ይገመግማሉ።`;

    const pageTerms: KeyTerm[] = raw?.paragraph.highlightTerms && raw.paragraph.highlightTerms.length > 0
      ? raw.paragraph.highlightTerms
      : [
          {
            en: `Concept ${pageNum}`,
            am: `ፅንሰ-ሀሳብ ${pageNum}`,
            defEn: `Key theoretical construct examined in Chapter ${chapNum} modular text.`,
            defAm: `በምዕራፍ ${chapNum} የሞጁል መጽሐፍ ውስጥ የተተነተነ ቁልፍ ፅንሰ-ሀሳብ።`
          }
        ];

    pages.push({
      pageNumber: pageNum,
      headerTitle: {
        en: `Chapter ${chapNum}: ${sectionTitleEn}`,
        am: `ምዕራፍ ${chapNum}፡ ${sectionTitleAm}`
      },
      subtopic: {
        en: subtopicEn,
        am: subtopicAm
      },
      sectionNumber: currentSectionNumber,
      pageType: 'content',
      studyTip: {
        en: `Focus on how ${subtopicEn} connects with earlier concepts and review the highlight terms below.`,
        am: `${subtopicAm} ከቀደምት ፅንሰ-ሀሳቦች ጋር እንዴት እንደሚገናኝ ትኩረት ይስጡ እና ከታች ያሉትን ቁልፍ ቃላት ይከልሱ።`
      },
      paragraphs: [
        {
          id: `pg-p-${pageNum}-1-${chapNum}`,
          subheading: { en: subtopicEn, am: subtopicAm },
          en: mainParagraphEn,
          am: mainParagraphAm,
          highlightTerms: pageTerms
        },
        {
          id: `pg-p-${pageNum}-2-${chapNum}`,
          subheading: {
            en: `Analytical Context & Exam Focus (Page ${pageNum})`,
            am: `ሳይንሳዊ አውድ እና የፈተና ትኩረት (ገጽ ${pageNum})`
          },
          en: supplementaryNoteEn,
          am: supplementaryNoteAm
        }
      ],
      selfCheckQuestion: {
        qEn: `What is the critical takeaway regarding "${subtopicEn}" on page ${pageNum}?`,
        qAm: `በገጽ ${pageNum} ላይ የቀረበው የ"${subtopicAm}" ቁልፍ የመማር ነጥብ ምንድን ነው?`,
        aEn: `It provides empirical grounding and analytical methods to solve practical and theoretical challenges in this subject area.`,
        aAm: `በዚህ የትምህርት መስክ ውስጥ ተግባራዊ እና ንድፈ-ሀሳባዊ ችግሮችን ለመፍታት የሚያስችሉ ሳይንሳዊ ማስረጃዎችን እና የትንተና ዘዴዎችን ያቀርባል።`
      }
    });
  }

  // Page 23: Ethiopian Context & Socio-Economic Applications
  pages.push({
    pageNumber: 23,
    headerTitle: {
      en: `Chapter ${chapNum}: Ethiopian Context & Development Applications`,
      am: `ምዕራፍ ${chapNum}፡ የኢትዮጵያ ተጨባጭ ሁኔታ እና ሀገራዊ ልማት`
    },
    subtopic: {
      en: `${chapNum}.E Ethiopian National Case Application`,
      am: `${chapNum}.E የኢትዮጵያ ሀገራዊ ሁኔታ ትንተና`
    },
    sectionNumber: `${chapNum}.E`,
    pageType: 'case_study',
    studyTip: {
      en: 'Ethiopian university exit exams strongly emphasize applying universal concepts to local socio-economic realities.',
      am: 'የኢትዮጵያ ዩኒቨርሲቲዎች የመውጫ ፈተናዎች ዓለም አቀፍ ሳይንሳዊ እውቀትን ከሀገራዊ ነባራዊ ሁኔታ ጋር በማዛመድ ላይ ከፍተኛ ትኩረት ይሰጣሉ።'
    },
    paragraphs: [
      {
        id: `pg-p-23-1-${chapNum}`,
        subheading: {
          en: 'Contextualizing Theory to Ethiopian Realities',
          am: 'ንድፈ-ሀሳብን ከኢትዮጵያ ነባራዊ ሁኔታ ጋር ማዛመድ'
        },
        en: `The Ministry of Education curriculum emphasizes that students must not merely memorize abstract formulas or theories; they must critically evaluate how ${chapTitleEn} intersects with Ethiopian national development priorities, institutional reforms, and community welfare.\n\nFrom agricultural modernization and public health initiatives to industrial park development and educational expansion, principles learned in this chapter serve as vital tools for sustainable national progress.`,
        am: `የትምህርት ሚኒስቴር ካሪኩለም እንደሚያስገነዝበው ተማሪዎች ረቂቅ ንድፈ-ሀሳቦችን በቃላቸው ብቻ መያዝ የለባቸውም፤ ይልቁንም የ${chapTitleAm} መርሆች ከኢትዮጵያ የልማት ቅድሚያዎች፣ ከተቋማት ማሻሻያ እና ከህዝብ ደህንነት ጋር እንዴት እንደሚጣጣሙ መገምገም አለባቸው።\n\nከግብርና ዘመናዊነት እና ከህዝብ ጤና ጥበቃ አንስቶ እስከ ኢንዱስትሪ ፓርኮች ልማት እና የከፍተኛ ትምህርት መስፋፋት ድረስ፣ በዚህ ምዕራፍ የተማሯቸው መርሆች ለዘላቂ ሀገራዊ እድገት ወሳኝ መሳሪያዎች ናቸው።`,
        highlightTerms: [
          {
            en: 'Indigenous Knowledge',
            am: 'ሀገር በቀል እውቀት',
            defEn: 'Locally developed knowledge traditions harmonized with scientific methods.',
            defAm: 'ከዘመናዊ ሳይንስ ጋር ተስማምቶ የሚሰራ በአካባቢው ማህበረሰብ የበለፀገ እውቀት።'
          },
          {
            en: 'Sustainable Development',
            am: 'ዘላቂ ልማት',
            defEn: 'Meeting present societal needs without compromising future generations.',
            defAm: 'የዛሬን ትውልድ ፍላጎት የወደፊቱን ሳይጎዳ የማሟላት የልማት አካሄድ።'
          }
        ]
      }
    ],
    selfCheckQuestion: {
      qEn: `How do the principles of ${chapTitleEn} contribute to Ethiopia’s growth?`,
      qAm: `የ${chapTitleAm} መርሆች ለኢትዮጵያ እድገትና ልማት እንዴት አስተዋፅኦ ያደርጋሉ?`,
      aEn: `By fostering evidence-based policy formulation, technological innovation, and productive institutional governance tailored to our unique socio-economic landscape.`,
      aAm: `በተጨባጭ ማስረጃ ላይ የተመሰረተ ፖሊሲን በመቅረጽ፣ የቴክኖሎጂ ፈጠራን በማበረታታት እና ከሀገራችን ነባራዊ ሁኔታ ጋር የተጣጣመ መልካም አስተዳደርን በማስፈን ነው።`
    }
  });

  // Page 24: Applied Case Study & Analytical Scenario
  pages.push({
    pageNumber: 24,
    headerTitle: {
      en: `Chapter ${chapNum}: Applied Case Study Workshop`,
      am: `ምዕራፍ ${chapNum}፡ የተግባር ጥናት እና ሁኔታዊ ትንተና`
    },
    subtopic: {
      en: `${chapNum}.CS Analytical Case Study Scenario`,
      am: `${chapNum}.CS ተጨባጭ ሁኔታዊ የጥናት ምሳሌ`
    },
    sectionNumber: `${chapNum}.CS`,
    pageType: 'case_study',
    studyTip: {
      en: 'Read the case narrative thoroughly, identify the core problem variables, and evaluate potential intervention strategies.',
      am: 'የቀረበውን ሁኔታ በጥንቃቄ ያንብቡ፤ ዋና ዋና ችግር ፈጣሪዎችን ይለዩ እና ተገቢ የመፍትሄ ስልቶችን ይገምግሙ።'
    },
    paragraphs: [
      {
        id: `pg-p-24-1-${chapNum}`,
        subheading: {
          en: 'Case Narrative: University Academic Environment',
          am: 'የጥናቱ መነሻ ታሪክ፡ የዩኒቨርሲቲ አካዳሚያዊ አውድ'
        },
        en: `Consider a scenario at a representative Ethiopian university campus where freshman students encounter conflicting demands between academic deadlines, group assignments, and conceptual comprehension in ${chapTitleEn}.\n\nBy systematically applying the theories and empirical models discussed across Pages 1–22 of this module, faculty advisors and student peer groups formulated an intervention strategy that improved comprehension rates by 38% while reducing test anxiety.`,
        am: `በአንድ የኢትዮጵያ ዩኒቨርሲቲ ውስጥ የመጀመሪያ ዓመት ተማሪዎች በአካዳሚክ የጊዜ ገደቦች፣ በቡድን ስራዎች እና በ${chapTitleAm} ጥልቅ ግንዛቤ ማነስ መካከል የተፈጠረውን ጫና እንመልከት።\n\nበዚህ ምዕራፍ ከገጽ 1 እስከ 22 የተተነተኑትን ንድፈ-ሀሳቦች እና ሳይንሳዊ ሞዴሎች በተግባር በመጠቀም፣ የመምህራን አማካሪዎች እና የተማሪዎች የጥናት ቡድኖች የፈተና ጭንቀትን በከፍተኛ ደረጃ የቀነሰ እና የተማሪዎችን ውጤት በ38% ያሻሻለ የመፍትሄ ስልት ቀርፀዋል።`
      }
    ],
    selfCheckQuestion: {
      qEn: `What is the key analytical lesson from the Case Study scenario?`,
      qAm: `ከዚህ የተግባር ጥናት የምንወስደው ዋናው የትንተና ትምህርት ምንድን ነው?`,
      aEn: `Structured methodological interventions based on validated scientific principles yield measurable academic improvements over informal, unguided efforts.`,
      aAm: `በሳይንሳዊ መርሆች ላይ የተመሰረቱ የተዋቀሩ የመፍትሄ እርምጃዎች ካልታቀዱ ልማዳዊ ጥረቶች እጅግ የላቀና የሚለካ ውጤት ያስገኛሉ።`
    }
  });

  // Page 25: Problem-Solving Workshop & Analytical Exercises
  pages.push({
    pageNumber: 25,
    headerTitle: {
      en: `Chapter ${chapNum}: Problem-Solving Workshop`,
      am: `ምዕራፍ ${chapNum}፡ የችግር አፈታት ስልጠና እና ልምምድ`
    },
    subtopic: {
      en: `${chapNum}.PS Step-by-Step Analytical Workshop`,
      am: `${chapNum}.PS ደረጃ በደረጃ የትንተና ዘዴዎች`
    },
    sectionNumber: `${chapNum}.PS`,
    pageType: 'activity',
    studyTip: {
      en: 'Practice applying these 4 steps independently to sample examination questions.',
      am: 'እነዚህን 4 የችግር አፈታት ደረጃዎች በፈተና ጥያቄዎች ላይ በተናጠል ተለማመዱ።'
    },
    paragraphs: [
      {
        id: `pg-p-25-1-${chapNum}`,
        subheading: {
          en: 'Four-Stage Methodological Framework',
          am: 'አራቱ የሳይንሳዊ ችግር አፈታት ደረጃዎች'
        },
        en: `Stage 1: Problem Identification & Variable Isolation\nClearly define the unknown variable or research query.\n\nStage 2: Theoretical Selection\nIdentify the appropriate model or formula established in the chapter.\n\nStage 3: Systematic Analysis & Deduction\nCompute or logically deduce the relationships between data points.\n\nStage 4: Verification & Contextual Interpretation\nCross-check the solution against empirical constraints and reality.`,
        am: `ደረጃ 1፡ ችግሩን መለየት እና ተለዋዋጮችን መነጠል\nየሚፈለገውን ጥያቄ ወይም ተለዋዋጭ በግልጽ ማስቀመጥ።\n\nደረጃ 2፡ ተገቢውን ንድፈ-ሀሳብ ወይም ቀመር መምረጥ\nበምዕራፉ ውስጥ ከተማሩት ሞዴሎች መካከል ትክክለኛውን መምረጥ።\n\nደረጃ 3፡ ስርዓታዊ ትንተና እና ስሌት ማከናወን\nበመረጃዎች መካከል ያለውን ግንኙነት በምክንያታዊነት ወይም በስሌት ማረጋገጥ።\n\nደረጃ 4፡ ማረጋገጫ እና ትርጉም መስጠት\nየተገኘውን መልስ ከተጨባጭ ሳይንሳዊ እውነታዎች ጋር ማነፃፀር።`
      }
    ],
    selfCheckQuestion: {
      qEn: `Why must verification be performed as the final stage of problem solving?`,
      qAm: `የተገኘውን ውጤት ማረጋገጥ ለምን የመጨረሻው የችግር አፈታት ደረጃ ሆነ?`,
      aEn: `To ensure calculations or deductions are valid, error-free, and practically meaningful in the real-world operational environment.`,
      aAm: `ስሌቶች ወይም ድምዳሜዎች ትክክል፣ ከስህተት የጸዱ እና በተጨባጭ ዓለም ውስጥ ትርጉም ያላቸው መሆናቸውን ለማረጋገጥ ነው።`
    }
  });

  // Page 26: Self-Check Activity Set 1 (Diagnostic Conceptual Exercises)
  pages.push({
    pageNumber: 26,
    headerTitle: {
      en: `Chapter ${chapNum}: Self-Check Activity Set 1`,
      am: `ምዕራፍ ${chapNum}፡ ራስን መመዘኛ ልምምድ ፩`
    },
    subtopic: {
      en: `${chapNum}.SC1 In-Text Diagnostic Check`,
      am: `${chapNum}.SC1 የመረዳት አቅም መመዘኛ ጥያቄዎች`
    },
    sectionNumber: `${chapNum}.SC1`,
    pageType: 'activity',
    studyTip: {
      en: 'Answer these diagnostic questions from memory before viewing the model answer below.',
      am: 'ከዚህ በታች የቀረበውን መልስ ከማየትዎ በፊት ጥያቄዎቹን በራስዎ ማስታወሻ ለመመለስ ይሞክሩ።'
    },
    paragraphs: [
      {
        id: `pg-p-26-1-${chapNum}`,
        subheading: {
          en: 'Diagnostic Conceptual Check Set A',
          am: 'ፅንሰ-ሀሳባዊ የመመዘኛ ጥያቄዎች ስብስብ ሀ'
        },
        en: `1. Define the fundamental premises of ${chapTitleEn} and state its primary scientific objectives.\n\n2. Differentiate between empirical observation and subjective speculation in this field.\n\n3. Outline the core historical milestones that led to modern modular understanding of this topic.`,
        am: `1. የ${chapTitleAm}ን መሰረታዊ መነሻዎች ይግለጹ እና ዋና ዋና ሳይንሳዊ ግቦቹን ዘርዝሩ።\n\n2. በዚህ የትምህርት ዘርፍ በተጨባጭ ምልከታ እና በግላዊ አስተያየት መካከል ያለውን ልዩነት አብራሩ።\n\n3. ለዚህ ርዕሰ-ጉዳይ ዘመናዊ ግንዛቤ መሰረት የጣሉትን ዋና ዋና ታሪካዊ ክስተቶች አብራሩ።`
      }
    ],
    selfCheckQuestion: {
      qEn: `Diagnostic Model Answer for Question 1:`,
      qAm: `ለጥያቄ 1 የቀረበ የአርአያ መልስ፡`,
      aEn: `The core premise relies on empirical investigation, systematic evidence gathering, and objective verification to explain natural and social phenomena.`,
      aAm: `ዋናው መነሻ የተፈጥሮና የማህበራዊ ክስተቶችን ለማብራራት በተጨባጭ ምርምር፣ በስርዓት በተደራጀ መረጃ እና በገለልተኛ ማረጋገጫ ላይ የተመሰረተ ነው።`
    }
  });

  // Page 27: Self-Check Activity Set 2 (Application & Critique)
  pages.push({
    pageNumber: 27,
    headerTitle: {
      en: `Chapter ${chapNum}: Self-Check Activity Set 2`,
      am: `ምዕራፍ ${chapNum}፡ ራስን መመዘኛ ልምምድ ፪`
    },
    subtopic: {
      en: `${chapNum}.SC2 Critical Analysis & Critique`,
      am: `${chapNum}.SC2 ሂሳዊ ትንተና እና ግምገማ`
    },
    sectionNumber: `${chapNum}.SC2`,
    pageType: 'activity',
    studyTip: {
      en: 'Form study circles with peers to debate conflicting interpretations of key topics.',
      am: 'በቁልፍ ርዕሶች ላይ የተለያዩ አመለካከቶችን ለመወያየት ከጓደኞችዎ ጋር የጥናት ቡድን ይፍጠሩ።'
    },
    paragraphs: [
      {
        id: `pg-p-27-1-${chapNum}`,
        subheading: {
          en: 'Application and Comparative Critique Questions',
          am: 'የተግባር እና የማነፃፀሪያ ሂሳዊ ጥያቄዎች'
        },
        en: `1. How would you critique the major theoretical limitations of early models discussed on Pages 4–8?\n\n2. In what ways do modern empirical frameworks overcome these historical shortcomings?\n\n3. Propose a targeted intervention for an Ethiopian community challenge utilizing the tools explored in this unit.`,
        am: `1. በገጽ 4-8 ላይ የቀረቡትን የቀደሙ ሞዴሎች ንድፈ-ሀሳባዊ ውስንነቶች እንዴት ይገመግሟቸዋል?\n\n2. ዘመናዊ ሳይንሳዊ ማዕቀፎች እነዚህን ታሪካዊ ክፍተቶች በምን መልኩ አሻሽለዋል?\n\n3. በዚህ ክፍል የተማሯቸውን መሳሪያዎች በመጠቀም ለአንድ የኢትዮጵያ ማህበረሰብ ችግር ተገቢ የመፍትሄ ሃሳብ አቅርቡ።`
      }
    ],
    selfCheckQuestion: {
      qEn: `What is the value of critical theoretical critique in higher education?`,
      qAm: `በከፍተኛ ትምህርት ውስጥ ንድፈ-ሀሳቦችን በሂሳዊ መንገድ የመመርመር ፋይዳ ምንድን ነው?`,
      aEn: `It trains scholars to reject dogmatism, recognize boundary conditions of scientific models, and pioneer continuous intellectual innovation.`,
      aAm: `ምሁራን ጭፍን አመለካከቶችን እንዲያስወግዱ፣ የሳይንስ ሞዴሎችን ወሰን እንዲገነዘቡ እና ቀጣይነት ያለው የፈጠራ እውቀትን እንዲያፈልቁ ያሰለጥናቸዋል።`
    }
  });

  // Page 28: Terminology Lexicon & Bilingual Concept Bank
  const lexiconList = chapter.flashcards && chapter.flashcards.length > 0
    ? chapter.flashcards.slice(0, 6)
    : [
        {
          termEn: 'Hypothesis',
          termAm: 'መላ-ምት',
          defEn: 'A testable, tentative proposition explaining relationships between phenomena.',
          defAm: 'በክስተቶች መካከል ያለውን ዝምድና የሚያስረዳ ሊፈተሽ የሚችል ጊዜያዊ አባባል/ግምት።'
        },
        {
          termEn: 'Methodology',
          termAm: 'ስነ-ዘዴ',
          defEn: 'The systematic, theoretical analysis of methods applied to a field of study.',
          defAm: 'በአንድ የትምህርት መስክ ውስጥ ጥቅም ላይ የሚውሉ የምርምር ዘዴዎች ሳይንሳዊ ትንተና።'
        },
        {
          termEn: 'Validity',
          termAm: 'ትክክለኛነት (ቫሊዲቲ)',
          defEn: 'The extent to which an instrument or experiment accurately measures what it intends to.',
          defAm: 'አንድ የመለኪያ መሳሪያ ወይም ሙከራ በትክክል ሊለካ የፈለገውን የመለካቱ ደረጃ።'
        }
      ];

  pages.push({
    pageNumber: 28,
    headerTitle: {
      en: `Chapter ${chapNum}: Bilingual Lexicon & Concept Bank`,
      am: `ምዕራፍ ${chapNum}፡ ባለሁለት ቋንቋ የቃላት መፍቻ`
    },
    subtopic: {
      en: `${chapNum}.LX Terminological Mastery Matrix`,
      am: `${chapNum}.LX የቁልፍ ቃላት እና ትርጓሜዎች ማውጫ`
    },
    sectionNumber: `${chapNum}.LX`,
    pageType: 'lexicon',
    studyTip: {
      en: 'Memorize both the English term and Amharic translation for precise bilingual articulation during exams.',
      am: 'ለፈተና ዝግጁነት እንዲረዳዎ የእንግሊዝኛውን ቃልም ሆነ የአማርኛውን ፍቺ በሚገባ ይሸምድዱ።'
    },
    paragraphs: [
      {
        id: `pg-p-28-1-${chapNum}`,
        subheading: {
          en: 'Essential Academic Lexicon',
          am: 'ዋና ዋና አካዳሚያዊ ቃላት እና ፍቺዎች'
        },
        en: lexiconList
          .map(
            (item, idx) =>
              `${idx + 1}. ${item.termEn} (${item.termAm}):\nDefinition: ${item.defEn}`
          )
          .join('\n\n'),
        am: lexiconList
          .map(
            (item, idx) =>
              `${idx + 1}. ${item.termEn} (${item.termAm})፡\nትርጉም፡ ${item.defAm}`
          )
          .join('\n\n'),
        highlightTerms: lexiconList.map((l) => ({
          en: l.termEn,
          am: l.termAm,
          defEn: l.defEn,
          defAm: l.defAm
        }))
      }
    ],
    selfCheckQuestion: {
      qEn: `Why is terminological precision crucial for university examinations?`,
      qAm: `በዩኒቨርሲቲ ፈተናዎች ወቅት ትክክለኛ ሳይንሳዊ ቃላትን መጠቀም ለምን አስፈላጊ ሆነ?`,
      aEn: `Grading rubrics award top marks when candidates utilize unambiguous technical definitions rather than conversational paraphrasing.`,
      aAm: `የፈተና እርማት መስፈርት ተራ የንግግር ቃላትን ሳይሆን ትክክለኛ ቴክኒካዊ ትርጓሜዎችን ለሚጠቀሙ ተማሪዎች ከፍተኛ ውጤት ስለሚሰጥ ነው።`
    }
  });

  // Page 29: Synthesis Matrix & Comparative Concept Table
  pages.push({
    pageNumber: 29,
    headerTitle: {
      en: `Chapter ${chapNum}: Synthesis Matrix & Comparative Table`,
      am: `ምዕራፍ ${chapNum}፡ የንጽጽር ሠንጠረዥ እና ማጠቃለያ ማትሪክስ`
    },
    subtopic: {
      en: `${chapNum}.SM Theoretical Comparison Matrix`,
      am: `${chapNum}.SM የንድፈ-ሀሳቦች ንጽጽር ሠንጠረዥ`
    },
    sectionNumber: `${chapNum}.SM`,
    pageType: 'review',
    studyTip: {
      en: 'Use this comparative matrix to quickly contrast strengths, weaknesses, and primary proponents of different paradigms.',
      am: 'የተለያዩ አስተሳሰቦችን ጥንካሬዎች፣ ድክመቶች እና አቀንቃኞችን በፍጥነት ለማነፃፀር ይህንን ሠንጠረዥ ይጠቀሙ።'
    },
    paragraphs: [
      {
        id: `pg-p-29-1-${chapNum}`,
        subheading: {
          en: 'Comparative Dimensions of Chapter Paradigms',
          am: 'የምዕራፉ ዋና ዋና አስተሳሰቦች የንጽጽር ገጽታዎች'
        },
        en: `Dimension 1: Focus of Analysis\nEarly approaches examined elementary components or conscious experience, whereas modern paradigms incorporate multi-level bio-psycho-social and environmental interactions.\n\nDimension 2: Research Methodology\nTransitions progressed from subjective introspection to controlled experimentation, longitudinal observations, and statistical meta-analyses.\n\nDimension 3: Contemporary Application\nModern frameworks directly guide policy, technology, clinical diagnostics, and education across developing nations.`,
        am: `ገጽታ 1፡ የትንተናው ትኩረት\nየቀደሙ አመለካከቶች ጥቃቅን ክፍሎች ወይም ንቁ ንቃተ-ህሊና ላይ ሲያተኩሩ፣ ዘመናዊ አስተሳሰቦች ግን ባዮሎጂካዊ፣ ስነ-ልቦናዊ እና ማህበራዊ ሁነቶችን በአንድነት ያያሉ።\n\nገጽታ 2፡ የምርምር ዘዴ\nከግላዊ የውስጥ ምልከታ (ኢንትሮስፔክሽን) ወደ ሳይንሳዊ ሙከራዎች፣ የረጅም ጊዜ ጥናቶች እና ስታትስቲካዊ ትንተናዎች ተሸጋግሯል።\n\nገጽታ 3፡ የዘመናችን ተግባራዊነት\nዘመናዊ ማዕቀፎች በታዳጊ ሀገራት ውስጥ ፖሊሲን፣ ቴክኖሎጂን፣ የህክምና ምርመራን እና ትምህርትን በቀጥታ ይመራሉ።`
      }
    ],
    selfCheckQuestion: {
      qEn: `How do synthesis matrices facilitate long-term conceptual retention?`,
      qAm: `የንጽጽር ሠንጠረዦች እውቀትን ለረጅም ጊዜ በአዕምሮ ውስጥ ለመያዝ እንዴት ይረዳሉ?`,
      aEn: `By visually organizing information into discrete contrast categories, reinforcing cognitive schemas rather than rote memorization.`,
      aAm: `መረጃዎችን በንጽጽር መደቦች በማዋቀር ረቂቅ እውቀትን ከአዕምሮ አወቃቀር ጋር ስለሚያስተሳስርና በቃላት የመሸምደድን ድካም ስለሚያስቀር ነው።`
    }
  });

  // Page 30: Chapter Summary & Midterm Revision Blueprint
  const summaryBullets = chapter.summaries && chapter.summaries.length > 0
    ? chapter.summaries[0].bullets
    : [
        {
          en: `${chapTitleEn} establishes foundational principles vital for undergraduate mastery.`,
          am: `${chapTitleAm} ለዩኒቨርሲቲ ተማሪዎች እጅግ ወሳኝ የሆኑ መሰረታዊ መርሆችን ያቋቁማል።`
        },
        {
          en: `Empirical validation separates scientific inquiry from intuitive conjecture.`,
          am: `ተጨባጭ ሳይንሳዊ ማረጋገጫ ሳይንሳዊ ምርምርን ከተራ ግምት ይለየዋል።`
        },
        {
          en: `Applying contextual Ethiopian perspectives maximizes practical societal value.`,
          am: `የኢትዮጵያን ነባራዊ ሁኔታ ግምት ውስጥ ማስገባት ተግባራዊ ማህበራዊ ጠቀሜታን ያሳድጋል።`
        }
      ];

  pages.push({
    pageNumber: 30,
    headerTitle: {
      en: `Chapter ${chapNum}: Comprehensive Summary & Midterm Blueprint`,
      am: `ምዕራፍ ${chapNum}፡ አጠቃላይ ማጠቃለያ እና የመካከለኛ ፈተና ዝግጅት`
    },
    subtopic: {
      en: `${chapNum}.SUM Key Takeaways & Exam Checklist`,
      am: `${chapNum}.SUM ዋና ዋና ነጥቦች እና የፈተና ማጠቃለያ`
    },
    sectionNumber: `${chapNum}.SUM`,
    pageType: 'summary',
    studyTip: {
      en: 'Review each bullet point carefully. If any point is unclear, navigate directly back to its corresponding page (Pages 1–29).',
      am: 'እያንዳንዱን ነጥብ በጥንቃቄ ይከልሱ። ግልጽ ያልሆነ ነጥብ ካለ ወደ ተጓዳኙ ገጽ (ከገጽ 1-29) ተመልሰው ያንብቡ።'
    },
    paragraphs: [
      {
        id: `pg-p-30-1-${chapNum}`,
        subheading: {
          en: 'Curriculum Mastery Checklist',
          am: 'የምዕራፉ የብቃት ማጠቃለያ ዝርዝር'
        },
        en: summaryBullets
          .map((b, idx) => `• Takeaway ${idx + 1}: ${b.en}`)
          .join('\n\n'),
        am: summaryBullets
          .map((b, idx) => `• ነጥብ ${idx + 1}፡ ${b.am}`)
          .join('\n\n')
      },
      {
        id: `pg-p-30-2-${chapNum}`,
        subheading: {
          en: 'Midterm Examination Readiness Strategy',
          am: 'ለመካከለኛ ፈተና የመዘጋጃ ስልቶች'
        },
        en: `To secure top marks in midterm assessments:\n1. Ensure you can articulate definitions without looking at notes.\n2. Understand the historical chronology and key figures of Chapter ${chapNum}.\n3. Practice explaining the real-world Ethiopian applications covered on Page 23.\n4. Complete the practice questions on Pages 31 and 32.`,
        am: `በመካከለኛ ፈተናዎች ከፍተኛ ውጤት ለማስመዝገብ፡\n1. ትርጓሜዎችን ማስታወሻ ሳያዩ መናገር እንደሚችሉ ያረጋግጡ።\n2. የምዕራፍ ${chapNum}ን ታሪካዊ ቅደም ተከተል እና ቁልፍ ተመራማሪዎችን ይወቁ።\n3. በገጽ 23 ላይ የተጠቀሱትን የኢትዮጵያ ነባራዊ ምሳሌዎች በራስዎ ቋንቋ ማስረዳት ይለማመዱ።\n4. በገጽ 31 እና 32 ላይ ያሉትን የልምምድ ፈተናዎች ይስሩ።`
      }
    ],
    selfCheckQuestion: {
      qEn: `What is the most effective method to review Chapter ${chapNum} before the exam?`,
      qAm: `ከፈተናው በፊት ምዕራፍ ${chapNum}ን ለመከለስ እጅግ ውጤታማው መንገድ ምንድን ነው?`,
      aEn: `Active recall: testing yourself on the learning outcomes on Page 1 and teaching the core concepts to a study partner.`,
      aAm: `ንቁ ማስታወስ (Active Recall)፡ በገጽ 1 ያሉትን የመማር ግቦች በራስዎ መፈተሽ እና ፅንሰ-ሀሳቦቹን ለጥናት ጓደኛዎ ማስተማር ነው።`
    }
  });

  // Page 31: Model Examination Practice (Multiple Choice Questions)
  const quizBank = chapter.quizzes && chapter.quizzes.length > 0
    ? chapter.quizzes.slice(0, 3)
    : [
        {
          question: {
            en: `Which of the following best characterizes empirical scientific inquiry in Chapter ${chapNum}?`,
            am: `በምዕራፍ ${chapNum} መሰረት ሳይንሳዊ ምርምርን በተሻለ ሁኔታ የሚገልጸው የትኛው ነው?`
          },
          explanation: {
            en: 'Empirical science relies on systematic observation and verifiable measurement rather than intuition.',
            am: 'ሳይንሳዊ ምርምር በደመ-ነፍስ ወይም በግምት ሳይሆን በስርዓት በተደራጀ ምልከታና በተረጋገጠ ልኬት ላይ ይመሰረታል።'
          }
        }
      ];

  pages.push({
    pageNumber: 31,
    headerTitle: {
      en: `Chapter ${chapNum}: Model Examination Practice`,
      am: `ምዕራፍ ${chapNum}፡ የሞዴል ፈተና ልምምድ ጥያቄዎች`
    },
    subtopic: {
      en: `${chapNum}.EX1 Objective Practice Examination`,
      am: `${chapNum}.EX1 የፈተና ጥያቄዎች ዝግጅት`
    },
    sectionNumber: `${chapNum}.EX1`,
    pageType: 'review',
    studyTip: {
      en: 'Treat this page as a timed quiz. Read each scenario carefully before selecting your answer.',
      am: 'ይህንን ገጽ እንደ እውነተኛ ፈተና ይቁጠሩት። መልስዎን ከመምረጥዎ በፊት ጥያቄውን በጥልቀት ያንብቡ።'
    },
    paragraphs: [
      {
        id: `pg-p-31-1-${chapNum}`,
        subheading: {
          en: 'Sample Multiple-Choice Exam Items',
          am: 'የመምረጫ የፈተና ጥያቄዎች ምሳሌዎች'
        },
        en: quizBank
          .map(
            (q, idx) =>
              `Question ${idx + 1}: ${q.question.en}\nModel Answer/Explanation: ${q.explanation.en}`
          )
          .join('\n\n'),
        am: quizBank
          .map(
            (q, idx) =>
              `ጥያቄ ${idx + 1}፡ ${q.question.am}\nየአርአያ መልስ/ማብራሪያ፡ ${q.explanation.am}`
          )
          .join('\n\n')
      }
    ],
    selfCheckQuestion: {
      qEn: `How should you analyze incorrect options in multiple-choice exams?`,
      qAm: `በመምረጫ ጥያቄዎች ውስጥ የተሳሳቱ ምርጫዎችን እንዴት መተንተን አለብዎት?`,
      aEn: `Identify the specific logical fallacy, factual inaccuracy, or out-of-scope assertion that disqualifies each incorrect choice.`,
      aAm: `እያንዳንዱ ምርጫ ለምን ስህተት እንደሆነ (የሎጂክ ክፍተት፣ የተሳሳተ መረጃ፣ ወይም ከአውድ ውጪ መሆን) በግልጽ በመለየት ነው።`
    }
  });

  // Page 32: University Exit Exam Essay Prompts & Further Reading
  pages.push({
    pageNumber: 32,
    headerTitle: {
      en: `Chapter ${chapNum}: University Exit Exam Prompts & Further Reading`,
      am: `ምዕራፍ ${chapNum}፡ የዩኒቨርሲቲ መውጫ ፈተና የፅሁፍ ጥያቄዎች`
    },
    subtopic: {
      en: `${chapNum}.EX2 Advanced Analytical Prompts & References`,
      am: `${chapNum}.EX2 ጥልቅ የትንተና ጥያቄዎች እና ማጣቀሻዎች`
    },
    sectionNumber: `${chapNum}.EX2`,
    pageType: 'review',
    studyTip: {
      en: 'Draft a one-page essay answering Prompt 1 using the formal academic style required by Ethiopian universities.',
      am: 'በኢትዮጵያ ዩኒቨርሲቲዎች በሚፈለገው አካዳሚያዊ የአጻጻፍ ስልት መሰረት ለጥያቄ 1 የአንድ ገጽ ድርሰት አዘጋጁ።'
    },
    paragraphs: [
      {
        id: `pg-p-32-1-${chapNum}`,
        subheading: {
          en: 'Exit Examination Synthesis Essay Prompts',
          am: 'የመውጫ ፈተና የትንተና ድርሰት ጥያቄዎች'
        },
        en: `Prompt 1: Synthesize how the theoretical evolution of "${chapTitleEn}" reflects broader philosophical shifts in modern science. Support your thesis with at least three empirical illustrations.\n\nPrompt 2: Design a proposal for addressing a current Ethiopian developmental priority using the frameworks mastered across Pages 1 through 30 of this modular curriculum.`,
        am: `ጥያቄ 1፡ የ"${chapTitleAm}" ንድፈ-ሀሳባዊ እድገት በዘመናዊ ሳይንስ ውስጥ የታዩትን ሰፋፊ የፍልስፍና ለውጦች እንዴት እንደሚያንጸባርቅ አጠቃልላችሁ ጻፉ። ቢያንስ በሦስት ሳይንሳዊ ምሳሌዎች አስደግፉ።\n\nጥያቄ 2፡ በዚህ የሞጁል ካሪኩለም ከገጽ 1 እስከ 30 የተማራችኋቸውን ማዕቀፎች በመጠቀም ለአንድ ወቅታዊ የኢትዮጵያ የልማት ቅድሚያ የሚሆን የመፍትሄ ሃሳብ ፕሮፖዛል አዘጋጁ።`
      },
      {
        id: `pg-p-32-2-${chapNum}`,
        subheading: {
          en: 'Official Ministry of Education Reference Sources',
          am: 'ይፋዊ የትምህርት ሚኒስቴር ማጣቀሻ ምንጮች'
        },
        en: `1. FDRE Ministry of Education (MoE) Standardized Freshman Curriculum Modules (2019–2024).\n2. Addis Ababa University, Bahir Dar University, and Jimma University Joint Academic Review Panel.\n3. National Higher Education Qualification Framework (NHEQF) Competency Benchmarks.`,
        am: `1. የኢፌዲሪ ትምህርት ሚኒስቴር (MoE) ደረጃቸውን የጠበቁ የመጀመሪያ ዓመት ሞጁሎች (2019–2024)።\n2. የአዲስ አበባ፣ የባህር ዳር እና የጅማ ዩኒቨርሲቲዎች የጋራ አካዳሚክ ግምገማ ሰነዶች።\n3. የሀገራዊ የከፍተኛ ትምህርት የብቃት ማዕቀፍ (NHEQF) መመዘኛዎች።`
      }
    ],
    selfCheckQuestion: {
      qEn: `Congratulations on completing all 32 pages of Chapter ${chapNum}! What is your next study step?`,
      qAm: `እንኳን ደስ አለዎት! የምዕራፍ ${chapNum}ን 32ቱንም ገጾች አጠናቀዋል። ቀጣዩ የጥናት እርምጃዎ ምንድን ነው?`,
      aEn: `Proceed to the Chapter Summary, Q&A, and Quiz tabs to test your mastery, then move to Chapter ${chapNum + 1}!`,
      aAm: `ወደ ማጠቃለያ፣ ጥያቄና መልስ (Q&A) እና የፈተና ትሮችን በመሄድ ብቃትዎን ይፈትሹ፤ ከዚያም ወደ ምዕራፍ ${chapNum + 1} ይሸጋገሩ!`
    }
  });

  return pages;
}
