import { Chapter } from '../../types';

export const unit1: Chapter = {
  id: 101,
  number: 1,
  title: {
    en: 'Unit 1: Study Skills',
    am: 'ክፍል 1፡ የጥናት ክህሎቶች'
  },
  universityAuthor: 'Dr. Tekle Ferede (Jimma University) & Writing Team',
  overview: {
    en: 'Unit 1 familiarizes university students with essential academic practices: taking effective notes during lectures, critical academic reading techniques, modal verbs for giving advice, and mastering the present perfect tense.',
    am: 'ይህ የመጀመሪያ ክፍል የዩኒቨርሲቲ ተማሪዎችን ከአካዳሚክ የጥናት ልምዶች ጋር ያስተዋውቃል፡ በንግግር ትምህርት (ሌክቸር) ወቅት ውጤታማ ማስታወሻ መያዝ፣ የአካዳሚክ ንባብ ስልቶች፣ ምክር ለመስጠት የሚያገለግሉ ሞዳል ቃላት፣ እና የቅርብ ሀላፊ ጊዜ (Present Perfect) አጠቃቀምን ያጠቃልላል።'
  },
  learningOutcomes: [
    {
      en: 'Understand the nature of university lectures and apply effective note-taking techniques.',
      am: 'የዩኒቨርሲቲ ንግግር ትምህርቶችን (ሌክቸር) ምንነት መረዳትና የማስታወሻ አያያዝ ስልቶችን በተግባር መጠቀም።'
    },
    {
      en: 'Give strong and mild advice using modal verbs (should, ought to, had better) and imperative infinitives.',
      am: 'ሞዳል ግሶችን (should, ought to, had better) እና ትዕዛዛዊ ኢንፊኒቲቮችን በመጠቀም ምክር መስጠት።'
    },
    {
      en: 'Distinguish between different purposes of reading (skimming, scanning, detailed study, and leisure reading).',
      am: 'የተለያዩ የንባብ አይነቶችንና ዓላማዎችን (ስኪሚንግ፣ ስካኒንግ፣ ጥልቅ ጥናት እና የመዝናኛ ንባብ) መለየት።'
    },
    {
      en: 'Use the present perfect tense correctly in contrast with the simple past tense.',
      am: 'የቅርብ ሀላፊ ጊዜን (Present Perfect) ከቀላል ሀላፊ ጊዜ (Simple Past) ጋር በማነጻጸር በትክክል መጠቀም።'
    }
  ],
  sections: [
    {
      id: 'sec-1-1',
      number: '1.1',
      title: {
        en: 'Listening & Note Taking: What is a Lecture?',
        am: 'ማዳመጥ እና ማስታወሻ መያዝ፡ የንግግር ትምህርት (ሌክቸር) ምንድን ነው?'
      },
      paragraphs: [
        {
          id: 'u1-p1',
          subheading: {
            en: 'The Nature of University Lectures',
            am: 'የዩኒቨርሲቲ ንግግር ትምህርት (ሌክቸር) ባህሪ'
          },
          en: 'While studying at university, you will be exposed to a vast amount of information in relation to your field of study. This information will reach you mainly through reading and listening to lectures. However, spoken language is transient—it disappears as soon as it is spoken. It is impossible for anyone to remember all the information heard in a lecture without recording it.',
          am: 'በዩኒቨርሲቲ ትምህርትህ ወቅት ከትምህርት መስክህ ጋር የተያያዙ እጅግ በርካታ መረጃዎች ይቀርቡልሃል። እነዚህ መረጃዎች በዋናነት የሚደርሱህ በንባብ እና የንግግር ትምህርቶችን (ሌክቸሮችን) በማዳመጥ ነው። ሆኖም የንግግር ቋንቋ ጊዜያዊ (transient) ነው—ከተነገረ በኋላ ወዲያውኑ ይጠፋል። ማንም ሰው በሌክቸር የሰማውን መረጃ በሙሉ ያለ ማስታወሻ ሊያስታውስ አይችልም።',
          highlightTerms: [
            {
              en: 'Transient',
              am: 'ጊዜያዊ / ቶሎ የሚያልፍ',
              defEn: 'Lasting only for a short time; impermanent.',
              defAm: 'ለአጭር ጊዜ ብቻ የሚቆይ፣ የማይዘልቅ።'
            },
            {
              en: 'Lecture',
              am: 'የንግግር ትምህርት (ሌክቸር)',
              defEn: 'An educational talk to an audience, especially to students in a university.',
              defAm: 'በዩኒቨርሲቲ ለመማር ለተሰበሰቡ ተማሪዎች በመምህር የሚሰጥ ትምህርታዊ ገለፃ።'
            }
          ]
        },
        {
          id: 'u1-p2',
          subheading: {
            en: 'Essential Principles of Note-Taking',
            am: 'ውጤታማ የማስታወሻ አያያዝ ዋና መርሆዎች'
          },
          en: 'When taking notes, remember three crucial rules: First, do not try to write down everything that the lecturer says verbatim; focus only on the main points and important details. Second, do not write in complete grammatical sentences; use concise phrases and bullet points. Third, make active use of abbreviations and symbols (such as e.g., i.e., &, →, w/o) instead of writing words in full.',
          am: 'ማስታወሻ ስትይዝ ሦስት ቁልፍ መርሆዎችን አስታውስ፡ አንደኛ፣ መምህሩ የሚናገረውን ቃል በቃል (verbatim) ለመጻፍ አትሞክር፤ ዋና ዋና ነጥቦች እና አስፈላጊ ዝርዝሮች ላይ ብቻ አተኩር። ሁለተኛ፣ ሙሉ ሰዋሰዋዊ አረፍተ ነገሮችን ከመጻፍ ይልቅ አጫጭር ሀረጎችንና ነጥቦችን ተጠቀም። ሦስተኛ፣ ቃላትን ሙሉ በሙሉ ከመጻፍ ይልቅ ምህፃረ ቃላትን እና ምልክቶችን (እንደ e.g., i.e., &, →, w/o የመሳሰሉትን) ተጠቀም።',
          note: {
            en: 'Verbatim means word-for-word. Trying to capture every word will cause you to lag behind the lecturer.',
            am: 'ቬርባቲም ማለት ቃል በቃል ማለት ነው። ሁሉንም ቃል ለመጻፍ መሞከር ከመምህሩ ንግግር ወደ ኋላ እንድትቀር ያደርግሃል።'
          }
        },
        {
          id: 'u1-p3',
          subheading: {
            en: 'Before, During, and After the Lecture',
            am: 'ከሌክቸር በፊት፣ በወቅቱ እና ከሌክቸር በኋላ'
          },
          en: 'Effective note-taking occurs in three phases: Before the lecture, read about the subject in advance to understand key terminology. During the lecture, sit near the front of the hall to minimize distractions, listen carefully to the introductory overview, and watch for verbal cues (e.g., "The main point is...", "Furthermore..."). Immediately after the lecture, review and expand your notes while your memory is fresh.',
          am: 'ውጤታማ ማስታወሻ አያያዝ በሦስት ደረጃዎች ይከናወናል፡ ከሌክቸር በፊት፣ ቁልፍ ፅንሰ ሀሳቦችን ለመረዳት ስለ ርዕሱ አስቀድመህ አንብብ። በሌክቸሩ ወቅት፣ ትኩረትን የሚከፋፍሉ ነገሮችን ለመቀነስ ወደ ፊት ወንበር ተቀመጥ፣ መግቢያውን በትኩረት አዳምጥ፣ እና የመምህሩን የትኩረት ምልክቶች (ለምሳሌ፡ "ዋናው ነጥብ...", "ከዚህ በተጨማሪ...") አስተውል። ከሌክቸሩ በኋላ ወዲያውኑ፣ ትውስታህ ትኩስ ሳለ ማስታወሻህን ከልስና አሟላ።'
        }
      ]
    },
    {
      id: 'sec-1-2',
      number: '1.2',
      title: {
        en: 'Grammar Focus: Modals & Infinitives for Giving Advice',
        am: 'የሰዋሰው ትኩረት፡ ምክር ለመስጠት የሚያገለግሉ ሞዳሎች እና ኢንፊኒቲቮች'
      },
      paragraphs: [
        {
          id: 'u1-p4',
          subheading: {
            en: 'Degrees of Advice: Should, Ought to, and Had Better',
            am: 'የምክር ጥንካሬ ደረጃዎች፡ Should, Ought to, እና Had Better'
          },
          en: 'English offers multiple ways to give advice. "Should" and "ought to" express standard recommendations (e.g., "You should study in the library; you ought to review daily"). "Had better" is used for strong, urgent advice where negative consequences will follow if not obeyed (e.g., "You had better not be late for the exam, or you will fail"). Infinitives and imperatives (e.g., "Try to read before class; Sit near the front") are also practical advisory tools.',
          am: 'እንግሊዝኛ ምክር ለመስጠት የተለያዩ አማራጮችን ይሰጠናል። "Should" እና "Ought to" መደበኛ ምክርን ይገልጻሉ (ለምሳሌ፡ "You should study in the library; you ought to review daily")። "Had better" ደግሞ ምክሩ ካልተተገበረ መጥፎ ውጤት እንደሚመጣ የሚያስጠነቅቅ ጠንካራ ምክር ነው (ለምሳሌ፡ "You had better not be late for the exam, or you will fail")። በተጨማሪም ቀጥተኛ ትዕዛዛዊ ኢንፊኒቲቮች (ለምሳሌ፡ "Try to read...", "Sit near...") ጠቃሚ የምክር መስጫ መንገዶች ናቸው።',
          note: {
            en: 'Negative of had better is "had better not" (never "had not better").',
            am: 'የhad better አፍራሽ ቅርፅ "had better not" እንጂ በጭራሽ "had not better" አይደለም።'
          }
        }
      ]
    },
    {
      id: 'sec-1-3',
      number: '1.3',
      title: {
        en: 'Reading for Study: Academic Purposes and Techniques',
        am: 'ለንባብና ጥናት ክህሎት፡ የአካዳሚክ ዓላማዎች እና ቴክኒኮች'
      },
      paragraphs: [
        {
          id: 'u1-p5',
          subheading: {
            en: 'The Central Role of Academic Reading',
            am: 'የአካዳሚክ ንባብ ማዕከላዊ ሚና'
          },
          en: 'Reading is the foundational tool of academic study at university. It is likely to be the primary route through which you gather discipline-specific knowledge, understand scholarly models and theories, and unlock doors to professional careers. Academic reading requires you to assimilate ideas into your own worldview, enabling you to express critical opinions in seminars and exams.',
          am: 'ንባብ በዩኒቨርሲቲ የአካዳሚክ ጥናት ዋነኛው መሳሪያ ነው። የሙያ መስክህን እውቀት የምትገበይበት፣ የንድፈ ሀሳቦችን እና ሞዴሎችን ምንነት የምትረዳበት፣ እና የወደፊት የስራ ዕድልህን የምትከፍትበት ቀዳሚው መንገድ ነው። አካዳሚክ ንባብ ያገኘኸውን መረጃ ከራስህ የአስተሳሰብ እይታ ጋር እንድታዋህድ (assimilate) እና በሴሚናርና ፈተናዎች ላይ ሀሳብህን እንድትገልጽ ይጠይቅሃል።'
        },
        {
          id: 'u1-p6',
          subheading: {
            en: 'Varying Reading Approaches by Purpose',
            am: 'የንባብ ስልትን እንደ ዓላማው መቀያየር'
          },
          en: 'Skilled university students adjust their reading strategy based on their goal: (a) Detailed close study is used for textbooks to absorb complex conceptual frameworks; (b) Scanning is used to locate specific facts or figures without reading everything; (c) Skimming is used to grasp the general gist or headings quickly; (d) Leisure reading allows relaxed reading without needing to memorize details.',
          am: 'ብልህ የዩኒቨርሲቲ ተማሪዎች የንባብ ስልታቸውን እንደ ንባቡ ዓላማ ይቀያይራሉ፡ (ሀ) ጥልቅ ንባብ (Detailed study) ለመማሪያ መጽሐፍት ውስብስብ ፅንሰ ሀሳቦችን ለመረዳት ያገለግላል፤ (ለ) ስካኒንግ (Scanning) የተወሰኑ መረጃዎችን ወይም ቁጥሮችን በፍጥነት ፈልጎ ለማግኘት ያገለግላል፤ (ሐ) ስኪሚንግ (Skimming) አጠቃላይ ይዘቱን በጨረፍታ ለመረዳት ይጠቅማል፤ (መ) የመዝናኛ ንባብ (Leisure reading) ደግሞ ያለ ሀሳብ ታሪኩን ለማጣጣም ይነበባል።'
        }
      ]
    },
    {
      id: 'sec-1-4',
      number: '1.4',
      title: {
        en: 'Grammar Focus: The Present Perfect Tense',
        am: 'የሰዋሰው ትኩረት፡ የቅርብ ሀላፊ ጊዜ (Present Perfect Tense)'
      },
      paragraphs: [
        {
          id: 'u1-p7',
          subheading: {
            en: 'Form and Core Functions',
            am: 'ቅርፅ እና ዋና ተግባራት'
          },
          en: 'The present perfect tense is constructed using "have" or "has" + past participle (V3). It is used for: (1) Past actions that have a direct result or relevance to the present (e.g., "I have lost my key; I cannot enter"); (2) Actions that started in the past and continue into the present (e.g., "Classes have already started"); (3) Life experiences at unspecified times (e.g., "I have never been to Moyale").',
          am: 'የቅርብ ሀላፊ ጊዜ (Present Perfect) የሚዋቀረው "have/has" + ያለፈ ጊዜ ግስ (past participle) በመጠቀም ነው። የሚጠቅመውም፡ (1) ባለፈው የተፈጸመ ግን አሁን ላይ ተፅዕኖ ያለው ድርጊት (ለምሳሌ፡ "ቁልፌ ጠፍቷል፤ መግባት አልችልም")፤ (2) ባለፈው ተጀምሮ አሁንም የቀጠለ ድርጊት፤ (3) የተወሰነ ጊዜ ሳይገለጽ በህይወት ውስጥ የተከናወነ ልምድ (ለምሳሌ፡ "ወደ ሞያሌ ሄጄ አላውቅም")።'
        },
        {
          id: 'u1-p8',
          subheading: {
            en: 'Contrasting Present Perfect with Simple Past',
            am: 'የቅርብ ሀላፊን ከቀላል ሀላፊ ጊዜ ጋር ማነጻጸር'
          },
          en: 'The essential distinction lies in time specificity: The simple past ALWAYS specifies or implies a definite finished time (e.g., "I read this book last year"; "She bought a car three years ago"). The present perfect focuses strictly on the occurrence and outcome of the action without a fixed past timestamp (e.g., "I have already read this book"). Never use definite past time markers with the present perfect.',
          am: 'ዋናው ልዩነት የጊዜው ግልጽ መሆን ላይ ነው፡ ቀላል ሀላፊ ጊዜ (Simple Past) ሁልጊዜ የተወሰነና ያለቀ የጊዜ ምልክት አለው (ለምሳሌ፡ "ባለፈው አመት አነበብኩት"፤ "ከሦስት አመት በፊት መኪና ገዛች")። የቅርብ ሀላፊ ጊዜ ግን ድርጊቱ መከናወኑ እና ውጤቱ ላይ ብቻ ያተኩራል (ለምሳሌ፡ "መጽሐፉን አንብቤዋለሁ")። የተወሰነ ያለፈ የጊዜ ገላጭን ከPresent Perfect ጋር አትጠቀም።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 's1-1',
      title: {
        en: 'Core Lecture Strategies',
        am: 'የሌክቸር ዋና ስልቶች'
      },
      bullets: [
        {
          en: 'Lectures present transient spoken information; active note-taking is essential for retention.',
          am: 'ሌክቸር በፍጥነት የሚያልፍ የንግግር መረጃ ስለሆነ ንቁ ማስታወሻ መያዝ ለመማር ወሳኝ ነው።'
        },
        {
          en: 'Write concepts, abbreviations, and key cues rather than attempting verbatim transcription.',
          am: 'ቃል በቃል ለመጻፍ ከመታገል ይልቅ ፅንሰ ሀሳቦችን፣ ምህፃረ ቃላትን እና ቁልፍ ነጥቦችን ያዝ።'
        },
        {
          en: 'Review notes within 24 hours of the lecture to consolidate memory.',
          am: 'ትውስታን ለማጠናከር ማስታወሻህን በ24 ሰዓታት ውስጥ ከልስ።'
        }
      ]
    },
    {
      id: 's1-2',
      title: {
        en: 'Advice Modals & Present Perfect Rules',
        am: 'የምክር ሞዳሎች እና የPresent Perfect ህጎች'
      },
      bullets: [
        {
          en: '"Should" and "ought to" give advice; "had better" indicates strong warning of negative outcomes.',
          am: '"Should" እና "ought to" መደበኛ ምክር ይሰጣሉ፤ "had better" መዘዝ እንዳይመጣ ጠንካራ ማስጠንቀቂያ ይዟል።'
        },
        {
          en: 'Present perfect uses have/has + V3 for unspecified past actions with present relevance.',
          am: 'Present Perfect have/has + V3 በመጠቀም የተወሰነ ጊዜ ሳይገለጽ አሁን ላይ ትርጉም ላለው ድርጊት ያገለግላል።'
        },
        {
          en: 'Simple past specifies WHEN the action occurred (e.g., yesterday, in 2018).',
          am: 'Simple Past ድርጊቱ መቼ እንደተፈጸመ በግልጽ ያሳያል (ለምሳሌ፡ ትናንት፣ በ2018)።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'q1-1',
      number: 1,
      question: {
        en: 'Why is spoken language during a lecture described as "transient"?',
        am: 'በሌክቸር ወቅት የንግግር ቋንቋ ለምን "ጊዜያዊ (transient)" ተብሎ ተገለጸ?'
      },
      answer: {
        en: 'Because spoken words vanish the moment they are uttered, unlike printed texts which remain permanently available on a page.',
        am: 'ምክንያቱም የተነገረ ቃል እንደታተመ ጽሑፍ በወረቀት ላይ ቋሚ ሆኖ ከመቆየት ይልቅ እንደተነገረ ወዲያውኑ ስለሚጠፋ ነው።'
      },
      explanation: {
        en: 'This is why university students must develop rapid, structured note-taking skills to capture ideas before they fade from immediate working memory.',
        am: 'ስለዚህ የዩኒቨርሲቲ ተማሪዎች ሀሳቡ ከአዕምሮአቸው ሳይጠፋ ለመመዝገብ ፈጣን የማስታወሻ አያያዝ ክህሎት ማዳበር አለባቸው።'
      },
      category: 'conceptual'
    },
    {
      id: 'q1-2',
      number: 2,
      question: {
        en: 'What is the grammatical and semantic difference between "You should study" and "You had better study"?',
        am: 'በ"You should study" እና "You had better study" መካከል ያለው ሰዋሰዋዊና የትርጉም ልዩነት ምንድን ነው?'
      },
      answer: {
        en: '"You should study" offers a standard recommendation, whereas "You had better study" conveys an urgent, strong warning implying negative consequences if neglected.',
        am: '"You should study" መደበኛ ምክር ሲሆን፤ "You had better study" ግን ካልተፈጸመ መጥፎ መዘዝ እንደሚመጣ የሚያስጠነቅቅ ጠንካራ ምክር ነው።'
      },
      explanation: {
        en: 'For example, if you say "You had better bring an umbrella," it implies that if you do not, you will get completely soaked by heavy rain.',
        am: 'ለምሳሌ "You had better bring an umbrella" ሲባል ጃንጥላ ካልያዝክ በከባድ ዝናብ ልትርስስ እንደምትችል ያሳስባል።'
      },
      category: 'exam_mcq'
    },
    {
      id: 'q1-3',
      number: 3,
      question: {
        en: 'Which sentence is grammatically correct? A) I have seen that film yesterday. B) I saw that film yesterday.',
        am: 'የትኛው አረፍተ ነገር ሰዋሰዋዊ ትክክለኛነት አለው? ሀ) I have seen that film yesterday. ለ) I saw that film yesterday.'
      },
      answer: {
        en: 'Sentence B ("I saw that film yesterday") is correct.',
        am: 'አረፍተ ነገር ለ ("I saw that film yesterday") ትክክል ነው።'
      },
      explanation: {
        en: 'The present perfect cannot be combined with definite past time expressions such as "yesterday", "last year", or "two hours ago". Definite past times mandate the simple past tense.',
        am: 'የቅርብ ሀላፊ ጊዜ (Present Perfect) እንደ "yesterday"፣ "last year" ካሉ ያለፉ የተወሰኑ የጊዜ ገላጮች ጋር አብሮ አይሄድም። እንደዚህ ላሉ ጊዜያት ቀላል ሀላፊ ጊዜ (Simple Past) ብቻ ጥቅም ላይ ይውላል።'
      },
      category: 'exam_mcq'
    }
  ],
  quizzes: [
    {
      id: 'qz1-1',
      question: {
        en: 'The airline allows only two pieces of luggage. You _______ pack too much or you will have to pay extra charges.',
        am: 'አየር መንገዱ ሁለት ሻንጣዎችን ብቻ ይፈቅዳል። ከመጠን በላይ ______ አለበለዚያ ተጨማሪ ክፍያ ትከፍላለህ።'
      },
      options: [
        { id: 'opt-a', text: { en: 'had better not', am: 'had better not' } },
        { id: 'opt-b', text: { en: 'better not to', am: 'better not to' } },
        { id: 'opt-c', text: { en: 'had not better', am: 'had not better' } },
        { id: 'opt-d', text: { en: 'ought not pack', am: 'ought not pack' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'The negative of the modal idiom "had better" is always "had better not" followed by bare infinitive.',
        am: 'የ"had better" አፍራሽ ቅርጽ ሁልጊዜ "had better not" ተብሎ ከግሱ ቀጥተኛ ቅርፅ ጋር ይጣመራል።'
      }
    },
    {
      id: 'qz1-2',
      question: {
        en: 'In the sentence "We have lived in this campus dormitory since October", the present perfect expresses:',
        am: 'በአረፍተ ነገሩ "We have lived in this campus dormitory since October" ውስጥ ያለው የቅርብ ሀላፊ ጊዜ ምን ያሳያል?',
        },
      options: [
        { id: 'opt-a', text: { en: 'An action completed in the distant past with no present link', am: 'በሩቅ ዘመን ያለቀ እና አሁን ላይ ምንም ግንኙነት የሌለው ድርጊት' } },
        { id: 'opt-b', text: { en: 'An action that began in the past and still continues into the present', am: 'ባለፈው የተጀመረና አሁንም ድረስ የቀጠለ ድርጊት' } },
        { id: 'opt-c', text: { en: 'A routine habit carried out every day', am: 'በየቀኑ የሚደረግ ልማድ' } },
        { id: 'opt-d', text: { en: 'An impossible imaginary condition', am: 'የማይቻል ምናባዊ ሁኔታ' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'With the preposition "since", the present perfect indicates that living in the dorm began in October and continues right now.',
        am: 'ከ"since" ጋር ሲጣመር ድርጊቱ በጥቅምት ወር እንደተጀመረና አሁንም ድረስ እየኖሩበት እንደሆነ ያሳያል።'
      }
    },
    {
      id: 'qz1-3',
      question: {
        en: 'Glancing rapidly across a page to find a specific telephone number or date is known as:',
        am: 'የተወሰነ የስልክ ቁጥር ወይም ቀን በፍጥነት ፈልጎ ለማግኘት በገጹ ላይ ማማተር ምን ይባላል?',
      },
      options: [
        { id: 'opt-a', text: { en: 'Skimming', am: 'ስኪሚንግ (Skimming)' } },
        { id: 'opt-b', text: { en: 'Scanning', am: 'ስካኒንግ (Scanning)' } },
        { id: 'opt-c', text: { en: 'Critical reading', am: 'ጥልቅ ንባብ (Critical reading)' } },
        { id: 'opt-d', text: { en: 'Escapism', am: 'የመዝናኛ ንባብ (Escapism)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Scanning means searching a text specifically for a single piece of predefined information, whereas skimming means looking over text to get a general impression.',
        am: 'ስካኒንግ ማለት አንድን የተወሰነ መረጃ ብቻ ፈልጎ ለማውጣት የሚደረግ ንባብ ሲሆን፤ ስኪሚንግ ግን አጠቃላይ ይዘቱን ለመቃኘት ነው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc1-1',
      termEn: 'Transient',
      termAm: 'ጊዜያዊ (ቶሎ የሚያልፍ)',
      phoneticAm: 'ትራንዚየንት',
      defEn: 'Lasting only for a short time; impermanent like spoken words in a lecture.',
      defAm: 'ለአጭር ጊዜ ብቻ የሚቆይ፤ እንደ ንግግር ቶሎ የሚጠፋ።',
      exampleEn: 'Spoken language is transient, so you must take notes.',
      exampleAm: 'የንግግር ቋንቋ ጊዜያዊ ስለሆነ ማስታወሻ መያዝ አለብህ።',
      chapter: 1
    },
    {
      id: 'fc1-2',
      termEn: 'Verbatim',
      termAm: 'ቃል በቃል',
      phoneticAm: 'ቬርባቲም',
      defEn: 'Using exactly the same words as originally spoken or written.',
      defAm: 'የተነገረውን ወይም የተጻፈውን ልክ እንዳለ ቃል በቃል መውሰድ።',
      exampleEn: 'Do not try to copy the lecturer verbatim.',
      exampleAm: 'የመምህሩን ንግግር ቃል በቃል ለመገልበጥ አትሞክር።',
      chapter: 1
    },
    {
      id: 'fc1-3',
      termEn: 'Had better',
      termAm: 'ቢሆን ይሻላል (ጠንካራ ማስጠንቀቂያ)',
      phoneticAm: 'ሃድ ቤተር',
      defEn: 'A modal structure expressing strong recommendation with warned consequences.',
      defAm: 'መጥፎ መዘዝ እንዳይመጣ ጠንካራ ምክር ለመስጠት የሚያገለግል የሰዋሰው መዋቅር።',
      exampleEn: 'You had better review your notes before the quiz.',
      exampleAm: 'ከፈተናው በፊት ማስታወሻህን ብትከልስ ይሻላል።',
      chapter: 1
    }
  ]
};
