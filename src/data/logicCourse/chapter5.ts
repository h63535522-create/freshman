import { Chapter } from '../../types';

export const chapter5: Chapter = {
  id: 105,
  number: 5,
  title: {
    en: 'Chapter 5: Informal Fallacies',
    am: 'ምዕራፍ ፭፡ ኢ-መደበኛ የተሳሳቱ አመክንዮዎች (Fallacies)'
  },
  universityAuthor: 'Mr. Zelalem M. (Haramaya University) - MoSHE 2019',
  overview: {
    en: 'A fallacy is a defect in an argument that consists of something other than merely false premises. This chapter covers the 22 major informal fallacies categorized into fallacies of relevance, weak induction, presumption, ambiguity, and grammatical analogy.',
    am: 'የተሳሳተ አመክንዮ (Fallacy) ከመነሻዎች ሀሰትነት ባሻገር በአመክንዮው የማገናዘብ ሂደት ውስጥ የሚፈጠር እንከን ነው። ይህ ምዕራፍ በይዘትና በአቀራረብ የሚከሰቱ ፳፪ (22) ኢ-መደበኛ የተሳሳቱ አመክንዮዎችን በአምስት ዋና ዋና ክፍሎች መድቦ ያብራራል።'
  },
  learningOutcomes: [
    {
      en: 'Distinguish formal fallacies (structural) from informal fallacies (content-based).',
      am: 'መደበኛ (የመዋቅር ስህተት) እና ኢ-መደበኛ (የይዘት ስህተት) የአመክንዮ እንከኖችን መለየት።'
    },
    {
      en: 'Identify the eight fallacies of relevance (Ad Hominem, Straw Man, Red Herring, etc.).',
      am: 'ስምንቱን የተገቢነት እንከኖች (በሰው ላይ ማነጣጠር፣ የተዛባ ምስል መፍጠር፣ አቅጣጫ ማስቀየስ ወዘተ) ለይቶ ማወቅ።'
    },
    {
      en: 'Master fallacies of weak induction, presumption, ambiguity, and grammatical analogy.',
      am: 'የደካማ ማገናዘብ፣ የቅድመ-ግምት፣ የአሻሚነት እና የሰዋሰዋዊ አምሳያ እንከኖችን ጠንቅቆ መረዳት።'
    }
  ],
  sections: [
    {
      id: 'phil-sec-5-1',
      number: '5.1',
      title: {
        en: 'Lesson 1 & 2: Fallacies in General and Fallacies of Relevance',
        am: 'ትምህርት ፩ እና ፪፡ ስለ ተሳሳቱ አመክንዮዎች አጠቃላይ እይታ እና የተገቢነት እንከኖች'
      },
      paragraphs: [
        {
          id: 'phil-p-5-1',
          subheading: {
            en: 'Formal vs. Informal Fallacies',
            am: 'መደበኛ (Formal) እና ኢ-መደበኛ (Informal) እንከኖች'
          },
          en: 'A fallacy is a mistake in reasoning that creates the illusion that an argument is sound or valid when it is not. Formal fallacies occur in deductive arguments through structural defects (e.g. affirming the consequent). Informal fallacies occur in both deduction and induction, arising from defects in the meaning of words, emotional manipulation, or irrelevant content.',
          am: 'ተሳሳተ አመክንዮ (Fallacy) ክርክሩ ትክክል እንደሆነ የሚያስመስል የማታለያ ስህተት ነው። መደበኛ እንከኖች (Formal fallacies) በአስገዳጅ አመክንዮ መዋቅር ላይ ብቻ የሚከሰቱ ሲሆን፤ ኢ-መደበኛ እንከኖች (Informal fallacies) ግን በይዘት፣ በስሜታዊ ጫና ወይም በቃላት ብዥታ ምክንያት የሚከሰቱ ናቸው።'
        },
        {
          id: 'phil-p-5-2',
          subheading: {
            en: 'The Eight Fallacies of Relevance',
            am: 'ስምንቱ የተገቢነት እንከኖች (Fallacies of Relevance)'
          },
          en: 'In fallacies of relevance, the premises are psychologically relevant but logically irrelevant to the conclusion: 1. Appeal to Force (Ad Baculum - using threats); 2. Appeal to Pity (Ad Misericordiam); 3. Appeal to the People (Ad Populum - mob mentality, Bandwagon, Vanity, Snobbery); 4. Argument Against the Person (Ad Hominem - Abusive, Circumstantial, Tu Quoque); 5. Accident (misapplying a general rule to an exception); 6. Straw Man (distorting the opponent\'s argument); 7. Missing the Point (Ignoratio Elenchi); and 8. Red Herring (diverting attention to a different topic).',
          am: 'የተገቢነት እንከኖች መነሻዎቻቸው ለድምዳሜው በስሜት ቢቀርቡም በአመክንዮ ግን የማይገናኙ ናቸው፡ ፩. በጉልበት ማስገደድ (Appeal to Force)፤ ፪. ርህራሄን መማጸን (Appeal to Pity)፤ ፫. የህዝብን ስሜት መማጸን (Ad Populum - ብዙሃን ተከታይነት፣ ከንቱ ውዳሴ፣ እና ልሂቅነት)፤ ፬. በሰውየው ማንነት ላይ ማነጣጠር (Ad Hominem - ስድብ፣ ሁኔታዊ ጥቃት፣ እና "አንተስ/Tu Quoque")፤ ፭. አደጋ/Accident (አጠቃላይ ህግን በልዩ ሁኔታ ላይ በስህተት መጫን)፤ ፮. የተዛባ ገለፃ (Straw Man - የተቃራኒን ሀሳብ አዛብቶ ማጥቃት)፤ ፯. ዋናውን ነጥብ መሳት (Missing the Point)፤ እና ፰. አቅጣጫ ማስቀየስ (Red Herring - ትኩረትን ወደ ሌላ ርዕስ መሳብ)።'
        }
      ]
    },
    {
      id: 'phil-sec-5-2',
      number: '5.2',
      title: {
        en: 'Lesson 3: Fallacies of Weak Induction',
        am: 'ትምህርት ፫፡ የደካማ ማገናዘብ እንከኖች (Weak Induction)'
      },
      paragraphs: [
        {
          id: 'phil-p-5-3',
          subheading: {
            en: 'Six Fallacies of Weak Induction',
            am: 'ስድስቱ የደካማ ማገናዘብ እንከኖች'
          },
          en: 'In weak induction, the connection between premises and conclusion is too weak to justify belief: (1) Appeal to Unqualified Authority (Ad Verecundiam - citing an authority outside their field); (2) Appeal to Ignorance (Ad Ignorantiam - asserting something is true because it hasn\'t been disproven); (3) Hasty Generalization (Converse Accident - generalizing from a small, non-random sample); (4) False Cause (Post hoc ergo propter hoc [temporal succession mistaken for cause], Non causa pro causa, and Oversimplified Cause); (5) Slippery Slope (assuming an unsubstantiated chain reaction); and (6) Weak Analogy (relying on irrelevant similarities).',
          am: 'በደካማ ማገናዘብ ውስጥ በመነሻና በድምዳሜ መካከል ያለው ትስስር እጅግ ደካማ ነው፡ (1) ያልሰለጠነ ባለስልጣንን መጥቀስ (Ad Verecundiam - ከሙያው ውጪ የሆነን ሰው ምስክር ማድረግ)፤ (2) ባለማወቅ ላይ መመስረት (Ad Ignorantiam - ስላልተስተባበለ ብቻ እውነት ነው ማለት)፤ (3) የቸኮለ አጠቃላይ ድምዳሜ (Hasty Generalization - ጥቂት ናሙና ይዞ በመላው ላይ መፍረድ)፤ (4) የተሳሳተ መንስኤ/False Cause ("ከዚህ በኋላ ስለሆነ በዚህ ምክንያት ነው" ማለት እና መንስኤን ማቃለል)፤ (5) ተንሸራታች ዳገት/Slippery Slope (አንዱ ነገር ከተጀመረ ያለማስረጃ ወደ ከፋ ጥፋት ያመራል ማለት)፤ እና (6) ደካማ አምሳያ/Weak Analogy (የማይመሳሰሉ ነገሮችን በማወዳደር መደምደም)።'
        }
      ]
    },
    {
      id: 'phil-sec-5-3',
      number: '5.3',
      title: {
        en: 'Lesson 4 & 5: Fallacies of Presumption, Ambiguity, and Analogy',
        am: 'ትምህርት ፬ እና ፭፡ የቅድመ-ግምት፣ የአሻሚነት እና የሰዋሰዋዊ አምሳያ እንከኖች'
      },
      paragraphs: [
        {
          id: 'phil-p-5-4',
          subheading: {
            en: 'Fallacies of Presumption',
            am: 'የቅድመ-ግምት እንከኖች (Presumption)'
          },
          en: 'These fallacies presume what they purport to prove: (1) Begging the Question (Petitio Principii - leaving out a shaky key premise, restating the premise in the conclusion, or circular reasoning); (2) Complex Question (asking two questions disguised as one, e.g. "Have you stopped cheating?"); (3) False Dichotomy (presenting an either-or choice as exhaustive when other options exist); and (4) Suppressed Evidence (ignoring crucial evidence that outweighs the argument).',
          am: 'እነዚህ እንከኖች ሊያረጋግጡ የሚገባውን ነገር አስቀድመው እውነት እንደሆነ አድርገው ይወስዳሉ፡ (1) ጥያቄን ማሸሽ/Begging the Question (ያልተረጋገጠን ቁልፍ መነሻ መደበቅ፣ ወይም ዙሪያ ጥምጥም አመክንዮ)፤ (2) ድርብ ጥያቄ/Complex Question (ሁለት ጥያቄዎችን በአንድ ጠቅልሎ አጣብቂኝ ውስጥ መክተት፣ ለምሳሌ "መስረቅህን አቁመሃል?")፤ (3) የተሳሳተ ሁለትዮሽ/False Dichotomy (ሌሎች አማራጮች እያሉ "ወይ ይሄ አሊያም ያ" ብሎ ማስቀመጥ)፤ እና (4) የተሸሸገ ማስረጃ/Suppressed Evidence (ውጤቱን የሚቀይር ቁልፍ መረጃን መደበቅ)።'
        },
        {
          id: 'phil-p-5-5',
          subheading: {
            en: 'Fallacies of Ambiguity and Grammatical Analogy',
            am: 'የአሻሚነት እና የሰዋሰዋዊ አምሳያ እንከኖች'
          },
          en: 'Fallacies of Ambiguity arise from linguistic confusion: Equivocation (a word shifts meaning between premises and conclusion) and Amphiboly (faulty syntax or punctuation creates ambiguity). Fallacies of Grammatical Analogy: Composition (illegitimately transferring attributes of parts to the whole) and Division (illegitimately transferring attributes of the whole to its individual parts).',
          am: 'የአሻሚነት እንከኖች ከቋንቋ ድክመት ይነሳሉ፡ ኢኩቮኬሽን (Equivocation - አንድ ቃል በክርክሩ ውስጥ ሁለት ትርጉም ሲይዝ) እና አምፊቦሊ (Amphiboly - በሰዋሰው ግድፈት ምክንያት ዓረፍተ-ነገሩ ሁለት መልክ ሲኖረው)። የሰዋሰዋዊ አምሳያ እንከኖች፡ ውህደት/Composition (የክፍሎችን ባህሪ ሙሉ በሙሉ ወደ ሙሉው አካል መጫን) እና ክፍፍል/Division (የሙሉውን ባህሪ ወደ እያንዳንዱ ነጠላ ክፍል በስህተት ማስተላለፍ)።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-105-1',
      title: {
        en: 'Summary of Chapter 5: Complete Taxonomy of Informal Fallacies',
        am: 'የምዕራፍ ፭ ማጠቃለያ፡ የኢ-መደበኛ አመክንዮ እንከኖች ሙሉ ምደባ'
      },
      bullets: [
        {
          en: 'Formal fallacies affect the structure of deductive arguments; informal fallacies affect content and meaning.',
          am: 'መደበኛ እንከኖች የአስገዳጅ አመክንዮ መዋቅር ላይ ሲሆኑ፤ ኢ-መደበኛ ግን በይዘትና በትርጉም ላይ ያተኩራሉ።'
        },
        {
          en: 'Relevance fallacies include Ad Hominem, Straw Man, Red Herring, Ad Populum, and Ad Baculum.',
          am: 'የተገቢነት እንከኖች በሰው ላይ ማነጣጠር፣ የተዛባ ምስል መፍጠር፣ አቅጣጫ ማስቀየስ እና ማስገደድን ይይዛሉ።'
        },
        {
          en: 'Weak induction fallacies include Hasty Generalization, False Cause, Slippery Slope, and Weak Analogy.',
          am: 'ደካማ ማገናዘብ የቸኮለ ድምዳሜን፣ የተሳሳተ መንስኤን፣ ተንሸራታች ዳገትና ደካማ አምሳያን ያጠቃልላል።'
        },
        {
          en: 'Presumption fallacies include Begging the Question and False Dichotomy.',
          am: 'የቅድመ-ግምት እንከኖች ጥያቄን ማሸሽና የተሳሳተ ሁለትዮሽ (False dichotomy) ናቸው።'
        },
        {
          en: 'Grammatical analogy includes Composition (part to whole) and Division (whole to part).',
          am: 'ሰዋሰዋዊ አምሳያ ውህደት (ከክፍል ወደ ሙሉ) እና ክፍፍልን (ከሙሉ ወደ ክፍል) ያካትታል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-105-1',
      number: 1,
      question: {
        en: 'How do Straw Man and Red Herring differ from each other?',
        am: 'የተዛባ ምስል (Straw Man) እና አቅጣጫ ማስቀየስ (Red Herring) በምን ይለያያሉ?'
      },
      answer: {
        en: 'In Straw Man, the arguer distorts or exaggerates the opponent\'s argument and attacks that distortion. In Red Herring, the arguer completely ignores the opponent\'s argument and introduces a different, distracting topic to lead the discussion astray.',
        am: 'በተዛባ ምስል (Straw Man) ውስጥ አከራካሪው የተቃራኒውን ወገን ሃሳብ አዛብቶና አጋኖ ያንን የተዛባ ምስል ያጠቃል። በአቅጣጫ ማስቀየስ (Red Herring) ግን የተቃራኒውን ሃሳብ ችላ ብሎ ትኩረትን ወደ ሌላ ርዕስ በመውሰድ ውይይቱን ያሳስታል።'
      },
      explanation: {
        en: 'Straw Man knocks down a caricature; Red Herring changes the scent and chases an irrelevant trail.',
        am: 'Straw Man የተዛባ ገለፃን አዘጋጅቶ ያፈርሳል፤ Red Herring ደግሞ ርዕሱን ቀይሮ ወደ ሌላ አቅጣጫ ይሸሻል።'
      },
      category: 'conceptual'
    },
    {
      id: 'qna-105-2',
      number: 2,
      question: {
        en: 'What is the fallacy of Composition, and how does it differ from Hasty Generalization?',
        am: 'የውህደት እንከን (Composition) ምንድን ነው? ከቸኮለ ድምዳሜ (Hasty Generalization) በምን ይለያል?'
      },
      answer: {
        en: 'Composition transfers an attribute from the individual parts to the whole object (e.g., "every atom in chalk is invisible, so chalk is invisible"). Hasty generalization moves from specific members of a class to a general claim about all members (sample to population).',
        am: 'ውህደት (Composition) የአንድን ነገር የክፍሎች ባህሪ ወደ ሙሉው አካል ያዛውራል (ለምሳሌ "እያንዳንዱ አቶም አይታይም፤ ስለዚህ ጠመኔው አይታይም")። የቸኮለ ድምዳሜ ግን ከተወሰኑ ናሙናዎች ተነስቶ ስለ ሙሉው ቡድን አባላት መደምደም ነው።'
      },
      explanation: {
        en: 'Composition is part-to-whole; Hasty Generalization is member-to-class (distributive).',
        am: 'Composition ከክፍል ወደ ሙሉ አካል ሲሆን፤ Hasty Generalization ግን ከናሙና አባላት ወደ አጠቃላይ ክፍል ነው።'
      },
      category: 'discussion'
    }
  ],
  quizzes: [
    {
      id: 'quiz-105-1',
      question: {
        en: 'An arguer says: "Either you buy me a luxury car or I will divorce you." Which fallacy is committed?',
        am: '"ወይ የቅንጦት መኪና ትገዛልኛለህ አሊያም እፈታሃለሁ" የሚል ሰው የትኛውን እንከን ፈጽሟል?'
      },
      options: [
        { id: 'a', text: { en: 'Slippery Slope', am: 'ተንሸራታች ዳገት' } },
        { id: 'b', text: { en: 'False Dichotomy', am: 'የተሳሳተ ሁለትዮሽ (False Dichotomy)' } },
        { id: 'c', text: { en: 'Equivocation', am: 'ኢኩቮኬሽን' } },
        { id: 'd', text: { en: 'Appeal to Pity', am: 'ርህራሄን መማጸን' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'False dichotomy presents two extreme alternatives as if they are the only ones available, ignoring other viable choices.',
        am: 'የተሳሳተ ሁለትዮሽ ሌሎች በርካታ አማራጮች እያሉ ሁለቱን ብቻ ብቸኛ አማራጭ አድርጎ ያቀርባል።'
      }
    },
    {
      id: 'quiz-105-2',
      question: {
        en: 'A patient tells a doctor: "You cannot advise me to stop smoking because you smoke yourself!" Which fallacy is this?',
        am: 'ታካሚው ለሀኪሙ "አንተ ራስህ ሲጋራ እያጨስክ እኔን አታጭስ ልትለኝ አትችልም!" ቢለው የትኛው እንከን ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Ad Hominem: Tu Quoque ("You too")', am: 'አድ ሆሚነም፡ ቱ ኩዎክዌ ("አንተስ/አንቺስ")' } },
        { id: 'b', text: { en: 'Straw Man', am: 'የተዛባ ምስል' } },
        { id: 'c', text: { en: 'Accident', am: 'አደጋ (Accident)' } },
        { id: 'd', text: { en: 'Complex Question', am: 'ድርብ ጥያቄ' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Tu Quoque attempts to discredit an argument by citing hypocrisy or inconsistency in the speaker\'s personal life rather than addressing the argument\'s evidence.',
        am: 'Tu Quoque የመከራከሪያውን ማስረጃ ከመመርመር ይልቅ የተናጋሪውን ግብዝነት በመጥቀስ ክርክሩን ውድቅ ለማድረግ የሚሞክር ጥቃት ነው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-105-1',
      termEn: 'Ad Hominem',
      termAm: 'በሰው ላይ ማነጣጠር',
      defEn: 'Attacking the person presenting the argument rather than the argument itself.',
      defAm: 'የክርክሩን ይዘት ከመመርመር ይልቅ በተከራካሪው ግለሰብ ማንነት ላይ ማጥቃት።',
      chapter: 5
    },
    {
      id: 'fc-105-2',
      termEn: 'Straw Man',
      termAm: 'የተዛባ ምስል',
      defEn: 'Distorting an opponent\'s argument to make it easier to attack and refute.',
      defAm: 'የተቃራኒን ክርክር አዛብቶና አጋኖ በማቅረብ በቀላሉ ለማፍረስ መሞከር።',
      chapter: 5
    },
    {
      id: 'fc-105-3',
      termEn: 'False Cause',
      termAm: 'የተሳሳተ መንስኤ',
      defEn: 'Assuming a causal connection between events based solely on correlation or temporal succession.',
      defAm: 'ሁለት ነገሮች በቅደም ተከተል ስለተከሰቱ ብቻ አንዱ የሌላው መንስኤ ነው ብሎ ማመን።',
      chapter: 5
    },
    {
      id: 'fc-105-4',
      termEn: 'Equivocation',
      termAm: 'ኢኩቮኬሽን (የቃል መምታታት)',
      defEn: 'Using a word or phrase with two different meanings in the same argument.',
      defAm: 'አንድን ቃል በአንድ ክርክር ውስጥ በሁለት የተለያዩ ትርጉሞች መጠቀም።',
      chapter: 5
    }
  ]
};
