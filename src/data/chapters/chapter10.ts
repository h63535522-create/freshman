import { Chapter } from '../../types';

export const chapter10: Chapter = {
  id: 10,
  number: 10,
  title: {
    en: 'Academic Skills',
    am: 'የአካዳሚክ (የትምህርት) ክህሎቶች (Academic Skills)'
  },
  universityAuthor: 'Habtamu Disasa (Dilla University)',
  overview: {
    en: 'Equips freshman students with essential university survival strategies: Time Management (10 strategies), Note-Taking Methods (Cornell, Outlining, Charting), 21 Test-Taking Strategies & SQ3R, Cognitive Reframing for Test Anxiety, SMART Goal Setting, and Career Management Skills (CMS).',
    am: 'የዩኒቨርሲቲ ተማሪዎችን ለከፍተኛ ውጤት የሚያበቁ የአካዳሚክ ክህሎቶችን ያብራራል፤ የጊዜ አስተዳደር (10 ስልቶች)፣ የማስታወሻ አያያዝ (ኮርኔል፣ አውትላይን፣ ቻርት)፣ የፈተና አወሳሰድና SQ3R፣ የፈተና ጭንቀትን በ3 ደረጃዎች ማሸነፍ፣ የSMART ግብ አቀማመጥ እና የሙያ እድገትን ያጠቃልላል።'
  },
  learningOutcomes: [
    { en: 'Apply Chapman’s 10 rules of effective university time management', am: '10ሩን የዩኒቨርሲቲ የጊዜ አስተዳደር ስልቶች መተግበር' },
    { en: 'Master 3 note-taking systems: Cornell Method, Outlining, and Charting', am: 'ሦስቱን የማስታወሻ አያያዝ ዘዴዎች (ኮርኔል፣ አውትላይን፣ ቻርት) መቆጣጠር' },
    { en: 'Implement the SQ3R study system and 21 test-taking strategies', am: 'የSQ3R የጥናት ዘዴን እና 21ዱን የፈተና ዝግጅት ስልቶች መተግበር' },
    { en: 'Overcome test anxiety through the 3-step cognitive realistic thinking protocol', am: 'የፈተና ጭንቀትን በ3ቱ ምክንያታዊ የአስተሳሰብ እርከኖች ማሸነፍ' },
    { en: 'Formulate SMART academic goals and understand Career Management Skills (CMS)', am: 'የSMART ግቦችን ማዘጋጀት እና የሙያ አስተዳደር ክህሎቶችን (CMS) መረዳት' }
  ],
  sections: [
    {
      id: 'sec-10-1',
      number: '10.1',
      title: {
        en: 'Time Management Strategies',
        am: 'የጊዜ አጠቃቀም ስልቶች'
      },
      paragraphs: [
        {
          id: 'p-10-1-1',
          subheading: { en: 'Time as a Non-Renewable Resource', am: 'ጊዜ እንደማይተካ ውድ ሀብት' },
          en: 'Time is a communal, non-renewable resource that cannot be regained once lost. Good time management does not mean being frantically busy every minute; it means deliberately choosing how to spend your hours—balancing academics, social life, rest, and personal recreation with minimum stress.',
          am: 'ጊዜ አንድ ጊዜ ካለፈ በኋላ የማይመለስ የሰው ልጆች የጋራ ሀብት ነው። ጥሩ የጊዜ አጠቃቀም ማለት ሁልጊዜ በስራ መጠመድ ማለት ሳይሆን፣ ጊዜያችንን እንዴት እንደምናውለው በዕቅድ መምራት—ትምህርትን፣ እረፍትን እና ማህበራዊ ህይወትን ያለ ጭንቀት ማመጣጠን ነው።'
        },
        {
          id: 'p-10-1-2',
          subheading: { en: 'Chapman’s 10 Time-Management Strategies', am: '10ሩ የጊዜ አስተዳደር ስልቶች' },
          en: '1. Know how you spend time (audit daily habits).\n2. Set priorities (urgent vs. important).\n3. Use a planning tool (calendars/to-do lists).\n4. Get organized.\n5. Schedule time appropriately.\n6. Delegate and get help from others.\n7. Stop procrastinating (tackle difficult tasks first).\n8. Manage external time wasters (social media, gossip).\n9. Avoid multitasking (monotasking produces deeper focus).\n10. Stay healthy (sleep, nutrition, exercise).',
          am: '1. ጊዜህን የት እንደምታውለው እወቅ።\n2. ለነገሮች ቅድሚያ ስጥ።\n3. የዕቅድ ማስታወሻ መዝገብ ተጠቀም።\n4. ራስህንና መማሪያህን አደራጅ።\n5. ፕሮግራምህን በትክክል አውጣ።\n6. ስራዎችን አካፍልና እገዛ ጠይቅ።\n7. ነገ እሰራዋለሁ ማለትን (ማዘግየትን) አስወግድ።\n8. የጊዜ ሌቦችን (ማህበራዊ ሚዲያ፣ ወሬ) ተቆጣጠር።\n9. ብዙ ነገር በአንድ ጊዜ ከመስራት ተቆጠብ።\n10. ጤናህን ጠብቅ (እንቅልፍ፣ ምግብ፣ ስፖርት)።'
        }
      ]
    },
    {
      id: 'sec-10-2',
      number: '10.2',
      title: {
        en: 'Note-Taking and the SQ3R Study Method',
        am: 'የማስታወሻ አያያዝ እና የSQ3R የጥናት ዘዴ'
      },
      paragraphs: [
        {
          id: 'p-10-2-1',
          subheading: { en: 'Three Common Note-Taking Systems', am: 'ሦስቱ የማስታወሻ አያያዝ ዘዴዎች' },
          en: '• Cornell Method: Splits the page into 3 sections: Cue Column (left for questions & keywords), Note-taking Area (right for detailed lecture facts), and Summary (bottom for 2-sentence overview).\n• Outlining: Bulleted hierarchy indenting main ideas and sub-points.\n• Charting: Tabular columns comparing dates, theories, researchers, and definitions.',
          am: '• የኮርኔል ዘዴ (Cornell)፡ ገጹን ለሦስት ይከፍላል፡ የጥያቄና ቁልፍ ቃላት መስመር (በግራ)፣ ዝርዝር ማስታወሻ (በቀኝ)፣ እና አጭር ማጠቃለያ (ከስር)።\n• አውትላይኒንግ (Outlining)፡ ዋና ዋና ሀሳቦችን በነጥብ እና ንዑስ ነጥቦች ደረጃ በደረጃ ማስቀመጥ።\n• ቻርቲንግ (Charting)፡ በሰንጠረዥ ንፅፅሮችን፣ ቀናትን፣ ተመራማሪዎችንና ትርጓሜዎችን ማስቀመጥ።'
        },
        {
          id: 'p-10-2-2',
          subheading: { en: 'The SQ3R Reading Mastery Method', am: 'የSQ3R የንባብ ማስተርያ ዘዴ' },
          en: '• S - Survey: Skim headings, summaries, and figures before reading.\n• Q - Question: Turn headings into questions (e.g., "What is Classical Conditioning?").\n• R - Read: Read actively seeking the answers to your questions.\n• R - Recite: Close the book and explain the concept aloud in your own words.\n• R - Review: Periodic spaced review to reinforce long-term memory traces.',
          am: '• S (Survey - አሰሳ)፡ ከማንበብ በፊት ርዕሶችን፣ ስዕሎችንና ማጠቃለያዎችን በፍጥነት ማየት።\n• Q (Question - ጥያቄ)፡ ርዕሶችን ወደ ጥያቄ መቀየር ("ክላሲካል ኮንዲሽኒንግ ምንድነው?").\n• R (Read - ንባብ)፡ ለጥያቄዎችህ መልስ ለማግኘት በትኩረት ማንበብ።\n• R (Recite - ማሰማት)፡ መጽሐፉን ዘግተህ የተረዳኸውን በራስህ አነጋገር ጮክ ብለህ መናገር።\n• R (Review - መከለስ)፡ የተማርከውን በየጊዜው በመከለስ ትውስታህን ማደስ።'
        }
      ]
    },
    {
      id: 'sec-10-3',
      number: '10.3',
      title: {
        en: 'Overcoming Test Anxiety: Realistic Thinking & SMART Goals',
        am: 'የፈተና ጭንቀትን ማሸነፍ እና የSMART ግቦች'
      },
      paragraphs: [
        {
          id: 'p-10-3-1',
          subheading: { en: 'Three Steps of Realistic Thinking for Test Anxiety', am: 'የፈተና ጭንቀትን በ3 ደረጃዎች ማሸነፍ' },
          en: 'Test anxiety is driven by negative catastrophic self-talk ("I am going to fail!"). Reframing protocol:\nStep 1: Pay attention to your inner self-talk.\nStep 2: Identify automatic catastrophic thoughts ("I didn\'t understand this slide, so I\'m doomed").\nStep 3: Challenge thinking traps with balanced evidence ("I passed past tests, I studied faithfully, and I can answer one question at a time").',
          am: 'የፈተና ጭንቀት የሚመነጨው ከአሉታዊ የውስጥ ንግግር ነው ("ልወድቅ ነው!")። ማስተካከያ 3 ደረጃዎች፡\nደረጃ 1፡ የውስጥ ንግግርህን አስተውል።\nደረጃ 2፡ ጭንቀት የሚፈጥሩ አውቶማቲክ የተዛቡ ሀሳቦችን ለይ።\nደረጃ 3፡ አስጨናቂ ሀሳቦችህን በተጨባጭ ማስረጃ ፈትሽ ("ያጠናሁት አለ፣ ቀደም ባሉት ፈተናዎች አልፌያለሁ፣ ተረጋግቼ አንድ በአንድ መስራት እችላለሁ")።'
        },
        {
          id: 'p-10-3-2',
          subheading: { en: 'SMART Goal Framework', am: 'የSMART ግብ መርሆዎች' },
          en: 'Goals must be: S - Specific, M - Measurable, A - Action-oriented, R - Realistic, and T - Time-bound (e.g., "I will study Psychology for 90 minutes every Monday and Wednesday to achieve an A grade this semester").',
          am: 'ግቦች SMART መሆን አለባቸው፡ S - ግልጽ (Specific)፣ M - የሚለካ (Measurable)፣ A - የተግባር (Action)፣ R - ተጨባጭ (Realistic)፣ እና T - የጊዜ ገደብ ያለው (Time-bound)።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-10-1',
      title: { en: 'Academic Success Toolkit', am: 'የአካዳሚክ ስኬት ማጠቃለያ' },
      bullets: [
        { en: 'Time management: prioritize high-value tasks, avoid multi-tasking and procrastination.', am: 'የጊዜ አጠቃቀም፡ ለዋና ነገሮች ቅድሚያ ስጥ፣ ማዘግየትን አስወግድ።' },
        { en: 'Cornell notes: Cues + Notes + Summary structure for active study.', am: 'የኮርኔል ዘዴ፡ ጥያቄ + ዝርዝር ማስታወሻ + ማጠቃለያ።' },
        { en: 'SQ3R: Survey, Question, Read, Recite, Review.', am: 'SQ3R፡ ዳሰሳ፣ ጥያቄ፣ ንባብ፣ ማሰማት፣ ክለሳ።' },
        { en: 'SMART goals: Specific, Measurable, Action-oriented, Realistic, Time-bound.', am: 'SMART፡ ግልጽ፣ የሚለካ፣ የተግባር፣ ተጨባጭ፣ እና ጊዜ ያለው።' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-10-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'Explain how the Ethiopian proverb "A hyena in urgency catches the horn" (ጅብ ችኮላ ቀንድ ይነክሳል) relates to exam preparation and test anxiety.',
        am: '"ጅብ ችኮላ ቀንድ ይነክሳል" የሚለው የኢትዮጵያውያን ተረት ከፈተና ዝግጅት እና ከፈተና ጭንቀት ጋር እንዴት ይዛመዳል?'
      },
      answer: {
        en: 'Cramming at the last minute and panicking causes rushed, erratic thinking. Just like the hyena biting the worthless horn in blind urgency, a rushing student misreads test instructions and misses easy questions. Calm, planned, spaced study ensures thorough retention and avoids careless failures.',
        am: 'በመጨረሻው ሰዓት ተቻኩሎ ለማጥናት መሞከር እና በፈተና ወቅት መደናገጥ አእምሮን ያዛባል። ልክ ጅብ በችኮላ ቀንድ እንደሚነክሰው፣ የተቻኮለ ተማሪም የፈተና ጥያቄዎችን በስህተት አንብቦ ቀላል ነጥቦችን ያጣል። ቀደም ብሎ በዕቅድ ማጥናት የፈተና ፍርሃትንና ኪሳራን ያስቀራል።'
      },
      explanation: {
        en: 'Spaced practice spread over weeks eliminates panic-driven cognitive breakdown.',
        am: 'በጊዜ የተከፋፈለ ጥናት ድንጋጤንና ስህተትን ያስቀራል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-10-1',
      question: {
        en: 'What does the Cornell note-taking method include on the left-hand margin of the page?',
        am: 'በኮርኔል የማስታወሻ አያያዝ ዘዴ መሰረት በገጹ የግራ ክፍል ምን ይመዘገባል?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Personal drawings and doodles', am: 'ስዕሎችና ንድፎች' } },
        { id: 'opt-b', text: { en: 'Cue column: Study questions, keywords, and prompts', am: 'የጥያቄ፣ ቁልፍ ቃላት እና ማስታወሻ ፍንጮች' } },
        { id: 'opt-c', text: { en: 'Full word-for-word lecture transcripts', am: 'የመምህሩ ቃል በቃል ንግግር' } },
        { id: 'opt-d', text: { en: 'Course textbook page numbers only', am: 'የመጽሐፍ ገጽ ቁጥር ብቻ' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The Cornell Cue Column houses study questions and prompts for self-testing.',
        am: 'የኮርኔል የግራ ክፍል ራስን ለመፈተሽ የሚያገለግሉ ቁልፍ ቃላትና ጥያቄዎች የሚጻፉበት ነው።'
      }
    }
  ],
  matching: [
    {
      id: 'm-10-1',
      concept: { en: 'Survey (in SQ3R)', am: 'ዳሰሳ (በSQ3R ውስጥ)' },
      definition: { en: 'Skimming headings and figures prior to detailed reading', am: 'ከማንበብ በፊት ርዕሶችንና ዋና ነጥቦችን ማየት' }
    },
    {
      id: 'm-10-2',
      concept: { en: 'Recite (in SQ3R)', am: 'ማሰማት (በSQ3R ውስጥ)' },
      definition: { en: 'Explaining concepts aloud in your own words with closed book', am: 'መጽሐፉን ዘግቶ በራስ አነጋገር ጮክ ብሎ መናገር' }
    }
  ],
  flashcards: [
    {
      id: 'fc-10-1',
      termEn: 'SQ3R',
      termAm: 'ኤስ ኪው 3 አር (SQ3R)',
      defEn: 'Survey, Question, Read, Recite, Review study methodology.',
      defAm: 'ዳሰሳ፣ ጥያቄ፣ ንባብ፣ ማሰማት እና ክለሳን የያዘ ጥልቅ የጥናት ስልት።',
      chapter: 10
    }
  ]
};
