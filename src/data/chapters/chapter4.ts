import { Chapter } from '../../types';

export const chapter4: Chapter = {
  id: 4,
  number: 4,
  title: {
    en: 'Memory and Forgetting',
    am: 'ትውስታ እና መርሳት (Memory & Forgetting)'
  },
  universityAuthor: 'Aemero Asmamaw (University of Gondar)',
  overview: {
    en: 'Examines human information retention and retrieval: the 3 core processes (encoding, storage, retrieval); Atkinson-Shiffrin 3-stage model (Sensory, STM/Working Memory, LTM); subsystems of explicit and implicit memory; serial position effect; factors affecting recall; Hermann Ebbinghaus’s forgetting curve; and 5 psychological theories of forgetting.',
    am: 'የመረጃ ማከማቸት እና መልሶ ማስታወስ ሂደቶችን ያብራራል፤ ሦስቱ ደረጃዎች (ኢንኮዲንግ፣ ማከማቸት፣ መልሶ ማውጣት)፤ የአትኪንሰን-ሺፍሪን ሞዴል (ሴንሰሪ፣ አጭር-ጊዜ እና ረጅም-ጊዜ ትውስታ)፤ ሄርማን ኤቢንግሃውስ የመርሳት ኩርባ፤ እና 5ቱን የመርሳት ንድፈ-ሀሳቦች ያጠቃልላል።'
  },
  learningOutcomes: [
    { en: 'Identify the 3 memory processes: Encoding, Storage, and Retrieval', am: 'ሦስቱን የትውስታ ሂደቶች (ኢንኮዲንግ፣ ማከማቸት እና መልሶ ማውጣት) መለየት' },
    { en: 'Describe the Atkinson-Shiffrin model (Sensory, Short-Term, and Long-Term Memory)', am: 'የአትኪንሰን-ሺፍሪን ሞዴል (ሴንሰሪ፣ አጭር-ጊዜ እና ረጅም-ጊዜ ትውስታ) መግለጽ' },
    { en: 'Explain George Miller’s "Magic Number 7 ± 2" and the power of Chunking', am: 'የጆርጅ ሚለርን "አስማታዊ ቁጥር 7 ± 2" እና መረጃን መቧደን (Chunking) ማስረዳት' },
    { en: 'Differentiate Declarative (Semantic vs. Episodic) and Procedural Memory', am: 'ግልጽ ትውስታን (ትርጉማዊ እና ክስተታዊ) ከሂደታዊ (ተግባራዊ) ትውስታ መለየት' },
    { en: 'Analyze the Serial Position Effect and evaluate the 5 theories of forgetting', am: 'የቅደም ተከተል ተፅዕኖን እና አምስቱን የመርሳት ንድፈ-ሀሳቦች መተንተን' }
  ],
  sections: [
    {
      id: 'sec-4-1',
      number: '4.1',
      title: {
        en: 'Meaning and Core Processes of Memory',
        am: 'የትውስታ ምንነት እና ሦስቱ መሰረታዊ ሂደቶች'
      },
      paragraphs: [
        {
          id: 'p-4-1-1',
          subheading: { en: 'Definition and Information Processing Analogy', am: 'የትውስታ ትርጓሜ እና የኮምፒውተር ንፅፅር' },
          en: 'Memory is the retention of information over time—recording the past for present and future use. Like a computer, human memory involves receiving input, converting it into a usable code, permanently storing it, and retrieving it onto the active conscious screen.',
          am: 'ትውስታ ማለት መረጃን ለረጅም ጊዜ አቆይቶ የማቆየት እና ወደፊት የመጠቀም ችሎታ ነው። ልክ እንደ ኮምፒውተር አእምሯችን መረጃን ይቀበላል፣ ወደ ሚረዳው ኮድ ይቀይራል፣ ቋሚ ማከማቻ ውስጥ ያስቀምጣል፣ እና በሚፈለግበት ጊዜ መልሶ ያወጣዋል።'
        },
        {
          id: 'p-4-1-2',
          subheading: { en: 'The Three Memory Processes', am: 'ሦስቱ የትውስታ ሂደቶች' },
          en: '1. Encoding: Transforming sensory input into a usable neural code that can be stored.\n2. Storage: Maintaining the encoded memory trace (engram) over time in the nervous system.\n3. Retrieval: Accessing and bringing stored information back into conscious awareness for use.',
          am: '1. ኢንኮዲንግ (Encoding)፡ የስሜት መረጃዎችን ወደ ሚቀመጥ የነርቭ ኮድ የመቀየር ሂደት።\n2. ማከማቸት (Storage)፡ የተመዘገበውን መረጃ በነርቭ ስርዓት ውስጥ ጠብቆ የማቆየት ሂደት።\n3. መልሶ ማውጣት (Retrieval)፡ የተቀመጠውን መረጃ ፈልጎ ወደ ህሊና የማምጣትና የመጠቀም ሂደት።'
        }
      ]
    },
    {
      id: 'sec-4-2',
      number: '4.2',
      title: {
        en: 'Stages and Structure of Memory (Atkinson-Shiffrin Model)',
        am: 'የትውስታ ደረጃዎችና መዋቅር (የአትኪንሰን-ሺፍሪን ሞዴል)'
      },
      paragraphs: [
        {
          id: 'p-4-2-1',
          subheading: { en: '1. Sensory Memory (የስሜት ትውስታ)', am: '1. የስሜት ትውስታ (Sensory Memory)' },
          en: 'The initial holding bin. Retains virtually all sensory input for a fraction of a second:\n• Iconic Memory: Visual images persist for ~0.5 to 1 second.\n• Echoic Memory: Auditory echoes linger for 2 to 4 seconds.\nInformation not attended to instantly decays and is forgotten.',
          am: 'የመጀመሪያው የመረጃ መቀበያ መጋዘን። ሁሉንም የስሜት መረጃዎች ለቅጽበት ያቆያል፡\n• አይኮኒክ (የእይታ ትውስታ)፡ የታዩ ምስሎች ከ0.5 እስከ 1 ሰከንድ ይቆያሉ።\n• ኤኮይክ (የድምፅ ትውስታ)፡ የተሰሙ ድምፆች ከ2 እስከ 4 ሰከንዶች ይቆያሉ።\nትኩረት ያልተሰጠው መረጃ ወዲያውኑ ይጠፋል።'
        },
        {
          id: 'p-4-2-2',
          subheading: { en: '2. Short-Term Memory (STM) & Working Memory', am: '2. አጭር-ጊዜ ትውስታ (STM) እና የስራ ትውስታ' },
          en: 'Holds the conscious contents of attention for about 15–30 seconds. Characterized by:\n• Active Workspace: Manipulating ideas for reasoning and problem solving.\n• Limited Capacity: George Miller (1956) discovered the "magic number 7 ± 2" (5 to 9 items).\n• Chunking: Expanding capacity by grouping items into meaningful units (e.g., memorizing phone numbers as 0911-23-45-67 rather than 10 isolated digits).\n• Maintenance Rehearsal: Repeating data to prevent displacement.',
          am: 'ትኩረት የተሰጠውን መረጃ ለ15 እስከ 30 ሰከንዶች የሚያቆይ ንቁ የስራ ክፍል ነው፡\n• ንቁ የስራ ጠረጴዛ፡ ለማሰብ እና ችግር ለመፍታት ያገለግላል።\n• ውስን አቅም፡ ጆርጅ ሚለር እንዳረጋገጠው በውስጡ መያዝ የሚችለው "አስማታዊ ቁጥር 7 ± 2" (ከ5 እስከ 9 ነገሮች ብቻ) ነው።\n• መቧደን (Chunking)፡ የተበታተኑ ቁጥሮችን ወደ ትርጉም ያላቸው ቡድኖች በመቀየር የመያዝ አቅምን ማሳደግ (ለምሳሌ የስልክ ቁጥርን ከፋፍሎ ማስታወስ)።\n• ድግግሞሽ (Rehearsal)፡ በህሊና በመደጋገም መረጃው እንዳይጠፋ ማቆየት።'
        },
        {
          id: 'p-4-2-3',
          subheading: { en: '3. Long-Term Memory (LTM) Subsystems', am: '3. የረጅም-ጊዜ ትውስታ (LTM) ዘርፎች' },
          en: 'Virtually unlimited capacity, permanent storage lasting days, years, or a lifetime.\n• Declarative / Explicit Memory (Conscious recall):\n  - Semantic Memory: General factual knowledge, concepts, math, language meanings independent of context.\n  - Episodic Memory: Autobiographical events, personal experiences (your high school graduation, what you ate yesterday).\n• Non-Declarative / Implicit Memory (Unconscious execution):\n  - Procedural Memory: Motor skills and habits ("how to" ride a bicycle, tie shoes, play piano).',
          am: 'ወሰን የሌለው አቅም ያለው እና ለዓመታት ወይም ለዕድሜ ልክ የሚቆይ ቋሚ ማከማቻ ነው።\n• ግልጽ ትውስታ (Declarative/Explicit - በቃላት የሚገለጽ)፡\n  - ሴማንቲክ (ትርጉማዊ)፡ አጠቃላይ የዓለም እውነታዎች፣ ሂሳብ፣ ሳይንሳዊ እውቀት።\n  - ኤፒሶዲክ (ክስተታዊ)፡ የግል የህይወት ታሪክ፣ ያሳለፍናቸው ልዩ ቀናት እና ትዝታዎች።\n• ድብቅ ትውስታ (Implicit/Procedural - ያለ ንቃተ-ህሊና የሚሰራ)፡\n  - የክህሎት ትውስታ (ቢስክሌት መንዳት፣ መዋኘት፣ ጫማ ማሰር)።'
        },
        {
          id: 'p-4-2-4',
          subheading: { en: 'Serial Position Effect', am: 'የቅደም ተከተል ተፅዕኖ (Serial Position Effect)' },
          en: 'When recalling a list of items, accuracy forms a U-shaped curve:\n• Primacy Effect: Superior recall for items at the BEGINNING of the list (transferred to LTM through undivided rehearsal).\n• Recency Effect: Superior recall for items at the END of the list (still residing in active STM).\nItems in the middle are poorly recalled due to STM overload and interference.',
          am: 'የቃላትን ዝርዝር ስናስታውስ የU-ቅርፅ ያለው ኩርባ ይፈጠራል፡\n• የቅድሚያ ተፅዕኖ (Primacy Effect)፡ በዝርዝሩ መጀመሪያ ላይ ያሉ ቃላት በደንብ ይታወሳሉ (ወደ LTM ስለተሸጋገሩ)።\n• የቅርብ ጊዜ ተፅዕኖ (Recency Effect)፡ በዝርዝሩ መጨረሻ ላይ ያሉ ቃላት ወዲያውኑ ይታወሳሉ (ገና በSTM ውስጥ ስላሉ)።\nበመሃል ያሉት ግን በቦታ ጥበት ምክንያት ይረሳሉ።'
        }
      ]
    },
    {
      id: 'sec-4-3',
      number: '4.3',
      title: {
        en: 'Forgetting: Ebbinghaus Curve & 5 Theories',
        am: 'መርሳት፡ የኤቢንግሃውስ ኩርባ እና 5ቱ ንድፈ-ሀሳቦች'
      },
      paragraphs: [
        {
          id: 'p-4-3-1',
          subheading: { en: 'Hermann Ebbinghaus & The Forgetting Curve', am: 'ሄርማን ኤቢንግሃውስ እና የመርሳት ኩርባ' },
          en: 'Hermann Ebbinghaus (1885) pioneered the scientific study of memory using nonsense syllables (e.g., FIW, BOZ). He proved that forgetting is most rapid immediately after learning (especially within the first hour), then levels off gradually over days and weeks.',
          am: 'ጀርመናዊው ሄርማን ኤቢንግሃውስ ትርጉም የሌላቸውን ቃላት (ለምሳሌ፡ FIW, BOZ) በማጥናት የመርሳት ኩርባን ፈጠረ። መርሳት ትምህርቱ በተጠናቀቀ በመጀመሪያው አንድ ሰዓት ውስጥ እጅግ በጣም ፈጣን መሆኑን እና ቀስ በቀስ እየረጋ እንደሚሄድ አረጋገጠ።'
        },
        {
          id: 'p-4-3-2',
          subheading: { en: 'The Five Theories of Forgetting', am: 'አምስቱ የመርሳት ንድፈ-ሀሳቦች' },
          en: '1. Decay Theory: Physical memory traces (engrams) gradually fade over time if not refreshed.\n2. Interference Theory:\n   • Proactive: Older learned info disrupts retrieval of newer info (calling a new partner by your ex\'s name!).\n   • Retroactive: New info disrupts recall of previously learned info.\n3. Displacement Theory: In STM, new incoming items push out existing chunks beyond capacity.\n4. Motivated Forgetting (Repression): Freud\'s defense mechanism—unconsciously blocking painful or traumatic memories.\n5. Cue-Dependent Forgetting: Inability to locate memories in LTM due to lack of effective retrieval cues (e.g., state-dependent recall).',
          am: '1. የመጥፋት ንድፈ-ሀሳብ (Decay)፡ በጊዜ ሂደት ካልተደጋገመ የነርቭ ፈለጉ ይደበዝዛል።\n2. የጣልቃ ገብነት ንድፈ-ሀሳብ (Interference)፡\n   • ፕሮአክቲቭ፡ አሮጌ እውቀት አዲሱን እንዳናስታውስ ሲከለክል (አዲሱን ስልክ በአሮጌው ማምታታት)።\n   • ሬትሮአክቲቭ፡ አዲሱ እውቀት አሮጌውን እንዳናስታውስ ሲጋርድ።\n3. የመተካት ንድፈ-ሀሳብ (Displacement)፡ በአጭር-ጊዜ ትውስታ ውስጥ አዲስ መረጃ አሮጌውን ገፍትሮ ሲያወጣ።\n4. ተነሳሽነታዊ መርሳት (Repression)፡ በፍሮይድ አመለካከት የሚያሰቃዩ አሰቃቂ ትዝታዎችን ባለማወቅ መደበቅ።\n5. የምልክት እጦት (Cue-Dependent)፡ የማስታወሻ ፍንጭ ወይም ምልክት በማጣት ምክንያት መርሳት።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-4-1',
      title: { en: 'Memory Model Summary', am: 'የትውስታ ሞዴል ማጠቃለያ' },
      bullets: [
        { en: 'Sensory Memory: Holds huge amounts of data for 1–4 seconds (Iconic & Echoic).', am: 'ሴንሰሪ ትውስታ፡ ብዙ መረጃን ከ1 እስከ 4 ሰከንድ ብቻ ያቆያል።' },
        { en: 'Short-Term Memory: Holds 7 ± 2 chunks for ~30s; active workspace.', am: 'አጭር-ጊዜ ትውስታ፡ 7 ± 2 ነገሮችን ለ30 ሰከንድ ይይዛል፤ የስራ ክፍል ነው።' },
        { en: 'Long-Term Memory: Unlimited capacity; Semantic (facts), Episodic (events), Procedural (skills).', am: 'ረጅም-ጊዜ ትውስታ፡ ወሰን የለውም፤ ሴማንቲክ (እውነታ)፣ ኤፒሶዲክ (ታሪክ)፣ ፕሮሲጀራል (ክህሎት)።' }
      ]
    },
    {
      id: 'sum-4-2',
      title: { en: 'Interference Rules', am: 'የጣልቃ ገብነት ህጎች' },
      bullets: [
        { en: 'Proactive: OLD interferes with NEW.', am: 'ፕሮአክቲቭ፡ አሮጌው አዲሱን ይጋርዳል።' },
        { en: 'Retroactive: NEW interferes with OLD.', am: 'ሬትሮአክቲቭ፡ አዲሱ አሮጌውን ያጠፋል።' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-4-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'A freshman student studies English grammar in the morning and Psychology in the afternoon. During the evening test on Psychology, she finds English grammar rules repeatedly confusing her psychology definitions. What type of interference is this?',
        am: 'አንዲት ተማሪ ጠዋት የእንግሊዝኛ ሰዋሰው፣ ከሰዓት ደግሞ ስነ-ልቦና አጠናች። ማታ የስነ-ልቦና ፈተና ስትወስድ የጠዋቱ የእንግሊዝኛ ህግ የስነ-ልቦና ትርጓሜዋን እያደናቀፈባት ተቸገረች። ይህ ምን አይነት ጣልቃ ገብነት (Interference) ነው?'
      },
      answer: {
        en: 'This is Proactive Interference, because previously learned information (morning English) interferes with the recall of newly learned information (afternoon Psychology).',
        am: 'ይህ ፕሮአክቲቭ ጣልቃ ገብነት (Proactive Interference) ነው፤ ምክንያቱም ቀደም ብሎ የተጠናው የጠዋቱ መረጃ በኋላ የተጠናውን አዲሱን መረጃ እንዳታስታውስ እያደናቀፈ ስለሆነ ነው።'
      },
      explanation: {
        en: 'Proactive = Past forward. When old memories disrupt new learning, it is proactive interference.',
        am: 'አሮጌው መረጃ ወደ ፊት መጥቶ አዲሱን ሲያደናቅፍ ፕሮአክቲቭ ይባላል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-4-1',
      question: {
        en: 'According to George Miller, what is the average storage capacity of human short-term memory?',
        am: 'እንደ ጆርጅ ሚለር ጥናት፣ የሰው ልጅ አጭር-ጊዜ ትውስታ (STM) አማካይ የማከማቸት አቅም ስንት ነው?'
      },
      options: [
        { id: 'opt-a', text: { en: '3 to 5 items', am: 'ከ3 እስከ 5 ነገሮች' } },
        { id: 'opt-b', text: { en: '7 ± 2 items (5 to 9 chunks)', am: '7 ± 2 ነገሮች (ከ5 እስከ 9 ቡድኖች)' } },
        { id: 'opt-c', text: { en: '15 to 20 items', am: 'ከ15 እስከ 20 ነገሮች' } },
        { id: 'opt-d', text: { en: 'Unlimited items', am: 'ወሰን የሌለው' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Miller published "The Magical Number Seven, Plus or Minus Two" demonstrating that short-term memory capacity ranges between 5 and 9 chunks.',
        am: 'ሚለር ባደረገው ዝነኛ ጥናት የአጭር-ጊዜ ትውስታ አቅም ከ5 እስከ 9 (7 ± 2) ቡድኖች ብቻ እንደሆነ አረጋግጧል።'
      }
    }
  ],
  matching: [
    {
      id: 'm-4-1',
      concept: { en: 'Semantic Memory', am: 'ሴማንቲክ (ትርጉማዊ) ትውስታ' },
      definition: { en: 'General facts, academic concepts, and mathematical laws', am: 'አጠቃላይ እውነታዎች፣ የትምህርት ፅንሰ-ሀሳቦች እና የሂሳብ ህጎች' }
    },
    {
      id: 'm-4-2',
      concept: { en: 'Episodic Memory', am: 'ኤፒሶዲክ (ክስተታዊ) ትውስታ' },
      definition: { en: 'Autobiographical events and personal past experiences', am: 'የግል የህይወት ታሪክ እና ያሳለፍናቸው ሁነቶች' }
    },
    {
      id: 'm-4-3',
      concept: { en: 'Procedural Memory', am: 'ፕሮሲጀራል (ክህሎታዊ) ትውስታ' },
      definition: { en: 'Motor habits and "how-to" skills like riding a bike', am: 'የእንቅስቃሴ ልምዶች እና ቢስክሌት የመንዳት አይነት ክህሎት' }
    }
  ],
  flashcards: [
    {
      id: 'fc-4-1',
      termEn: 'Chunking',
      termAm: 'መቧደን (ቻንኪንግ)',
      defEn: 'Grouping individual bits of information into larger meaningful units to expand STM capacity.',
      defAm: 'የአጭር-ጊዜ ትውስታን አቅም ለማሳደግ የተበታተኑ መረጃዎችን ወደ ትርጉም ያላቸው ቡድኖች የማደራጀት ዘዴ።',
      chapter: 4
    },
    {
      id: 'fc-4-2',
      termEn: 'Primacy Effect',
      termAm: 'የቅድሚያ ተፅዕኖ',
      defEn: 'Tendency to remember words at the beginning of a list because of transfer to LTM.',
      defAm: 'በዝርዝር መጀመሪያ ላይ ያሉ ቃላት በደንብ ተደጋግመው ወደ LTM ስለሚገቡ በደንብ የመታወስ አዝማሚያ።',
      chapter: 4
    }
  ]
};
