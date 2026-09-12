import { Chapter } from '../../types';

export const chapter3: Chapter = {
  id: 103,
  number: 3,
  title: {
    en: 'Chapter 3: Logic and Language',
    am: 'ምዕራፍ ፫፡ ስነ-አመክንዮ እና ቋንቋ'
  },
  universityAuthor: 'Mr. Adane T. (Mekelle University) - MoSHE 2019',
  overview: {
    en: 'Language is the fundamental medium of reasoning. Clarifying terms, identifying cognitive vs. emotive meaning, resolving vagueness and ambiguity, and mastering definitions are essential tools for logical evaluation and error-free discourse.',
    am: 'ቋንቋ የአመክንዮ መሰረታዊ ማስተላለፊያ መሳሪያ ነው። ቃላትን ማጥራት፣ እውነታዊ (Cognitive) እና ስሜታዊ (Emotive) ይዘቶችን መለየት፣ ግልጽነት ማጣትንና አሻሚነትን መፍታት፣ እንዲሁም ትክክለኛ ፍቺዎችን ማወቅ ከአመክንዮ ስህተቶች የፀዳ ክርክር ለማድረግ ቁልፍ ናቸው።'
  },
  learningOutcomes: [
    {
      en: 'Distinguish cognitive meaning from emotive meaning and identify disguised value claims.',
      am: 'እውነታዊ ይዘትን ከስሜታዊ ይዘት መለየት እና በስሜት የተሸፈኑ የእሴት ጥያቄዎችን ማጋለጥ።'
    },
    {
      en: 'Differentiate vagueness from ambiguity, and verbal disputes from factual disputes.',
      am: 'ግልጽነት ማጣትን (Vagueness) ከአሻሚነት (Ambiguity)፣ እንዲሁም የቃላት ንትርክን (Verbal dispute) ከእውነታ አለመግባባት መለየት።'
    },
    {
      en: 'Master intension and extension of terms, and the 5 types and techniques of definitions.',
      am: 'የቃላትን ጥልቀት (Intension) እና ስፋት (Extension)፣ እንዲሁም አምስቱን የፍቺ አይነቶችና ዘዴዎች ጠንቅቆ መረዳት።'
    }
  ],
  sections: [
    {
      id: 'phil-sec-3-1',
      number: '3.1',
      title: {
        en: 'Lesson 1: Philosophy of Language: An Overview',
        am: 'ትምህርት ፩፡ የቋንቋ ፍልስፍና አጠቃላይ እይታ'
      },
      paragraphs: [
        {
          id: 'phil-p-3-1',
          subheading: {
            en: 'Semiotics, Syntax, and Chomsky\'s Universal Grammar',
            am: 'ሴሚዮቲክስ፣ ሰዋሰው እና የቾምስኪ ሁለንተናዊ ሰዋሰው'
          },
          en: 'Philosophy of Language investigates the nature of meaning, linguistic usage, and the relationship between language and reality. Semiotics is the study of sign processes in communication. Linguist Noam Chomsky highlighted that humans are born with an innate "Universal Grammar", distinguishing internal cognitive language (I-languages) from social speech community utterances (E-languages). Semantic Holism holds that meaning cannot be isolated in a single word or sentence, but belongs to the whole language.',
          am: 'የቋንቋ ፍልስፍና ስለ ትርጉም ምንነት፣ የቋንቋ አጠቃቀም እና በቋንቋና በእውነታ መካከል ያለውን ግንኙነት ይመረምራል። ሴሚዮቲክስ የምልክቶች ጥናት ነው። ኖአም ቾምስኪ የሰው ልጅ ሲወለድ አብሮት የሚፈጠር "ሁለንተናዊ ሰዋሰው" (Universal Grammar) እንዳለው ገልጿል። ሴማንቲክ ሆሊዝም ደግሞ ትርጉም በአንድ ነጠላ ቃል ውስጥ ሳይሆን በአጠቃላይ ቋንቋው ስርዓት ውስጥ ብቻ እንደሚገኝ ያስረዳል።'
        }
      ]
    },
    {
      id: 'phil-sec-3-2',
      number: '3.2',
      title: {
        en: 'Lesson 2: Logic and Meaning (Cognitive vs Emotive, Intension vs Extension)',
        am: 'ትምህርት ፪፡ አመክንዮ እና ትርጉም (እውነታዊ እና ስሜታዊ፣ ጥልቀት እና ስፋት)'
      },
      paragraphs: [
        {
          id: 'phil-p-3-2',
          subheading: {
            en: 'Cognitive Meaning vs. Emotive Meaning',
            am: 'እውነታዊ ፍቺ (Cognitive) እና ስሜታዊ ፍቺ (Emotive)'
          },
          en: 'Terminology that conveys factual information has cognitive meaning. Terminology that expresses or evokes feelings has emotive meaning. Emotively charged words (e.g. "bloodlust", "slaughtered", "cruel") often conceal an implicit value claim. For logic, we must disengage the factual and value claims from emotional coloring.',
          am: 'ተጨባጭ መረጃን የሚያስተላልፉ ቃላት እውነታዊ ፍቺ (Cognitive meaning) አላቸው። ስሜትን የሚቀሰቅሱ ቃላት ደግሞ ስሜታዊ ፍቺ (Emotive meaning) አላቸው። በስሜት የታጀቡ ቃላት (ለምሳሌ "ጭካኔ"፣ "አረመኔያዊ") ብዙውን ጊዜ የተደበቀ የእሴት አቋምን ይይዛሉ። በስነ-አመክንዮ ውስጥ ተጨባጩን ማስረጃ ከስሜታዊ ቅብ መለየት ይኖርብናል።'
        },
        {
          id: 'phil-p-3-3',
          subheading: {
            en: 'Vagueness vs. Ambiguity & Types of Disputes',
            am: 'ግልጽነት ማጣት (Vagueness) እና አሻሚነት (Ambiguity)፣ እንዲሁም የአለመግባባት አይነቶች'
          },
          en: 'A term is Vague if there are borderline cases where it is hazy whether it applies (e.g., "rich", "tall", "poor"). A term is Ambiguous if it allows multiple distinct meanings in a given context (e.g., "light", "bank", "right"). Disputes over meaning are Verbal Disputes; disputes over facts are Factual Disputes.',
          am: 'አንድ ቃል ግልጽ ያልሆነ (Vague) የሚባለው ወሰኑ የደበዘዘ ሲሆን ነው (ለምሳሌ "ሀብታም"፣ "ረጅም"፣ "ደሃ" - ምን ያህል ሲሆን ነው ሀብታም የሚባለው?)። አሻሚ (Ambiguous) የሚባለው ደግሞ ሁለት ወይም ከዚያ በላይ የተለያዩ ትርጉሞች ሲኖሩት ነው (ለምሳሌ "ቀላል"፣ "ባንክ"፣ "መብት")። በቃላት ትርጉም የሚፈጠር አለመግባባት የቃላት ንትርክ (Verbal dispute) ሲሆን፣ በተጨባጭ ሁኔታዎች የሚፈጠር ደግሞ የእውነታ አለመግባባት (Factual dispute) ይባላል።'
        },
        {
          id: 'phil-p-3-4',
          subheading: {
            en: 'Intension (Connotation) and Extension (Denotation)',
            am: 'ጥልቀት/ውስጣዊ ባህሪ (Intension) እና ስፋት/ተጨባጭ አባላት (Extension)'
          },
          en: 'A term\'s Intension (connotation) consists of the attributes or qualities it connotes. Its Extension (denotation) consists of the class members it denotes. For example, "cat" connotes being furry, feline, and four-legged (intension) and denotes all actual cats in the universe (extension). Intension determines extension. As intension increases (more attributes added), extension decreases (class size shrinks).',
          am: 'የአንድ ቃል ውስጣዊ ጥልቀት (Intension/Connotation) ቃሉ የሚያመለክታቸውን ባህሪያት ይይዛል። ስፋቱ (Extension/Denotation) ደግሞ በዚያ ክፍል ስር ያሉትን ተጨባጭ አባላት ያመለክታል። ለምሳሌ "ድመት" የሚለው ቃል ጥልቀቱ አራት እግር ያላት፣ ጸጉራም እንስሳ መሆን ሲሆን፣ ስፋቱ ደግሞ በዓለም ያሉትን ድመቶች ሁሉ ያጠቃልላል። የባህሪያት ብዛት ሲጨምር (Increasing intension) የአባላቱ ቁጥር ይቀንሳል (Decreasing extension)።'
        }
      ]
    },
    {
      id: 'phil-sec-3-3',
      number: '3.3',
      title: {
        en: 'Lesson 3 & 4: Types and Techniques of Definitions',
        am: 'ትምህርት ፫ እና ፬፡ የፍቺ አይነቶች እና ዘዴዎች'
      },
      paragraphs: [
        {
          id: 'phil-p-3-5',
          subheading: {
            en: 'Five Types of Definitions',
            am: 'አምስቱ የፍቺ አይነቶች'
          },
          en: 'A definition consists of the definiendum (the word being defined) and the definiens (the words doing the defining). The 5 types are: (1) Stipulative (assigns a meaning for the first time or coins a new word, e.g. "tigon"); (2) Lexical (reports existing conventional dictionary meaning); (3) Précising (reduces vagueness for specific legal or scientific contexts, e.g. legal definition of "poor"); (4) Theoretical (formulates an explanatory theory, e.g. "heat" as kinetic molecular energy); and (5) Persuasive (uses emotionally charged language to influence attitudes).',
          am: 'ማንኛውም ፍቺ ተበያኝ (Definiendum - የሚፈታው ቃል) እና በያኝ (Definiens - የሚያብራራው ቃል) አለው። አምስቱ አይነቶች፡ (1) ስምምነታዊ/Stipulative (አዲስ ቃል መፍጠር ወይም አዲስ ትርጉም መስጠት)፤ (2) መዝገበ-ቃላታዊ/Lexical (የተለመደውን ትርጉም ማሳወቅ)፤ (3) ወሰን ገላጭ/Précising (አሻሚነትን በመቀነስ ለህግ ወይም ለሳይንስ ወሰን መደንገግ)፤ (4) ንድፈ-ሀሳባዊ/Theoretical (ሳይንሳዊ ማብራሪያ መስጠት፣ ለምሳሌ ሙቀትን በሞለኪውሎች እንቅስቃሴ መግለጽ)፤ እና (5) አሳማኝ/Persuasive (ስሜታዊ ቃላትን በመጠቀም አመለካከትን ለመቀየር የሚደረግ)።'
        },
        {
          id: 'phil-p-3-6',
          subheading: {
            en: 'Techniques of Definition: Extensional vs Intensional',
            am: 'የፍቺ ዘዴዎች፡ ስፋታዊ (Extensional) እና ጥልቀታዊ (Intensional)'
          },
          en: 'Extensional techniques indicate class members: Demonstrative/Ostensive (pointing), Enumerative (naming individuals), and Subclass (naming categories). Intensional techniques indicate qualities: Synonymous (single synonym), Etymological (word ancestry/roots), Operational (experimental test procedure), and Genus and Difference (combining a larger class genus with the specific distinguishing attribute difference: Species = Difference + Genus).',
          am: 'ስፋታዊ ዘዴዎች አባላትን ይጠቁማሉ፡ በእጅ በማሳየት (Demonstrative)፣ ስሞችን በመዘርዘር (Enumerative)፣ እና ንዑሳን ክፍሎችን በመጥቀስ (Subclass)። ጥልቀታዊ ዘዴዎች ደግሞ ባህሪን ያብራራሉ፡ አቻ ቃል (Synonymous)፣ የስነ-ቃል አመጣጥ (Etymological)፣ ተግባራዊ ሙከራ (Operational)፣ እና በወገንና ልዩነት መበየን (Genus and Difference - ዝርያ = ልዩ ባህሪ + ወገን፣ ለምሳሌ በረዶ = የቀዘቀዘ [ልዩነት] + ውሃ [ወገን])።'
        }
      ]
    },
    {
      id: 'phil-sec-3-4',
      number: '3.4',
      title: {
        en: 'Lesson 5: Eight Rules for Lexical Definitions',
        am: 'ትምህርት ፭፡ የመዝገበ-ቃላት ፍቺዎች ስምንቱ ህጎች'
      },
      paragraphs: [
        {
          id: 'phil-p-3-7',
          subheading: {
            en: 'Criteria for a Proper Lexical Definition',
            am: 'ትክክለኛ የመዝገበ-ቃላት ፍቺ መስፈርቶች'
          },
          en: 'A good lexical definition must conform to 8 rules: 1. Conform to proper grammar; 2. Convey the essential meaning of the word; 3. Be neither too broad nor too narrow (e.g. defining bird as "flying animal" is too narrow by excluding ostriches, and too broad by including bats); 4. Avoid circularity; 5. Not be negative when it can be affirmative; 6. Avoid figurative, obscure, vague, or ambiguous language (e.g. "Camel is the ship of the desert" is figurative); 7. Avoid affective terminology; and 8. Indicate the appropriate context.',
          am: 'ጥሩ መዝገበ-ቃላታዊ ፍቺ ስምንት ህጎችን ማክበር አለበት፡ ፩. የሰዋሰው ህግን መጠበቅ፤ ፪. ዋናውን የቃሉን ባህሪ መግለጽ፤ ፫. ከመጠን በላይ የሰፋ ወይም የጠበበ አለመሆን (ለምሳሌ ወፍን "የሚበር እንስሳ" ማለት ሰጎንን ስለሚያስቀር የጠበበ፣ የሌሊት ወፍን ስለሚጨምር የሰፋ ነው)፤ ፬. ዙሪያ ጥምጥም/ተደጋጋሚ (Circular) አለመሆን፤ ፭. አዎንታዊ መሆን ሲችል አሉታዊ አለመሆን፤ ፮. ምሳሌያዊ፣ ጨለማ፣ ግልጽ ያልሆነ ወይም አሻሚ ቋንቋ አለመጠቀም (ለምሳሌ "ግመል የበረሃ መርከብ ነው" የሚል ቅኔያዊ አገላለጽ ፍቺ አይሆንም)፤ ፯. ስሜት ቀስቃሽ ቃላትን አለመጠቀም፤ እና ፰. አውዱን በግልጽ ማመላከት።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-103-1',
      title: {
        en: 'Summary of Chapter 3: Logic, Meaning, and Definitions',
        am: 'የምዕራፍ ፫ ማጠቃለያ፡ አመክንዮ፣ ትርጉም እና ፍቺዎች'
      },
      bullets: [
        {
          en: 'Cognitive meaning conveys factual information; emotive meaning evokes feelings and value claims.',
          am: 'እውነታዊ ፍቺ መረጃን ይሰጣል፤ ስሜታዊ ፍቺ ግን ስሜትንና የእሴት አመለካከትን ያንፀባርቃል።'
        },
        {
          en: 'Vagueness involves blurred borderline cases; ambiguity involves multiple discrete meanings.',
          am: 'ግልጽነት ማጣት ወሰን የሌለው ብዥታ ሲሆን፤ አሻሚነት ግን ሁለት የተለያዩ ትርጉሞች መኖር ነው።'
        },
        {
          en: 'Intension (connotation) determines extension (denotation).',
          am: 'የቃል ውስጣዊ ጥልቀት (Intension) ውጫዊ ስፋቱንና አባላቱን (Extension) ይወስናል።'
        },
        {
          en: 'The 5 types of definitions are Stipulative, Lexical, Précising, Theoretical, and Persuasive.',
          am: 'አምስቱ የፍቺ አይነቶች፡ ስምምነታዊ፣ መዝገበ-ቃላታዊ፣ ወሰን-ገላጭ፣ ንድፈ-ሀሳባዊ፣ እና አሳማኝ ናቸው።'
        },
        {
          en: 'Genus and Difference is the most effective intensional definitional technique: Species = Difference + Genus.',
          am: 'በወገንና በልዩነት መበየን ውጤታማው ዘዴ ነው፡ ዝርያ = ልዩ ባህሪ + ወገን።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-103-1',
      number: 1,
      question: {
        en: 'What is the difference between a verbal dispute and a factual dispute?',
        am: 'በቃላት ንትርክ (Verbal dispute) እና በእውነታ አለመግባባት (Factual dispute) መካከል ያለው ልዩነት ምንድን ነው?'
      },
      answer: {
        en: 'A verbal dispute arises from ambiguity or vagueness in language and can be resolved by clarifying definitions. A factual dispute arises from disagreement over real-world empirical facts and can only be resolved by verifying evidence.',
        am: 'የቃላት ንትርክ የሚፈጠረው በቃላት አሻሚነት ወይም ብዥታ ምክንያት ሲሆን ትክክለኛ ፍቺዎችን በማብራራት ይፈታል። የእውነታ አለመግባባት ግን በተጨባጭ መረጃዎች ላይ ባለ ልዩነት ስለሚፈጠር በማስረጃ በማጣራት ብቻ ይፈታል።'
      },
      explanation: {
        en: 'For example, arguing whether an action was "abusive" or "discipline" is often a verbal dispute over definition, while arguing whether a theft actually occurred is a factual dispute.',
        am: 'ለምሳሌ አንድ ድርጊት "ቅጣት" ወይስ "ጥቃት" ነው ብሎ መሟገት የቃላት አለመግባባት ሲሆን፣ ስርቆት ተፈጽሟል ወይስ አልተፈጸመም የሚለው ግን የእውነታ ጥያቄ ነው።'
      },
      category: 'conceptual'
    },
    {
      id: 'qna-103-2',
      number: 2,
      question: {
        en: 'Why does an increase in intension usually lead to a decrease in extension?',
        am: 'የአንድ ቃል ጥልቀት (Intension) ሲጨምር ስፋቱ (Extension) ለምን ይቀንሳል?'
      },
      answer: {
        en: 'Because adding more specific attributes or conditions to a term restricts the number of real-world entities that can satisfy all those attributes. For instance: Animal -> Mammal -> Feline -> Tiger.',
        am: 'ምክንያቱም ተጨማሪ ዝርዝር ባህሪያት በተጨመሩ ቁጥር ሁሉንም መስፈርቶች የሚያሟሉ ተጨባጭ አባላት ቁጥር እየጠበበ ስለሚሄድ ነው። ለምሳሌ፡ እንስሳ -> አጥቢ -> የድመት ወገን -> ነብር።'
      },
      explanation: {
        en: 'A term that requires more qualifications applies to fewer individuals.',
        am: 'ብዙ ቅድመ-ሁኔታዎች የተሰጡት ቃል ጥቂት አባላትን ብቻ ያካትታል።'
      },
      category: 'conceptual'
    }
  ],
  quizzes: [
    {
      id: 'quiz-103-1',
      question: {
        en: 'Which type of definition is used when a new word is coined for the very first time?',
        am: 'አዲስ ቃል ለመጀመሪያ ጊዜ ተፈጥሮ ትርጉም ሲሰጠው የሚፈጠረው የፍቺ አይነት የቱ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Lexical definition', am: 'መዝገበ-ቃላታዊ ፍቺ' } },
        { id: 'b', text: { en: 'Stipulative definition', am: 'ስምምነታዊ ፍቺ (Stipulative)' } },
        { id: 'c', text: { en: 'Précising definition', am: 'ወሰን ገላጭ ፍቺ' } },
        { id: 'd', text: { en: 'Persuasive definition', am: 'አሳማኝ ፍቺ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'A stipulative definition assigns a meaning to a word for the first time or coins a new word (such as "tigon").',
        am: 'ስምምነታዊ ፍቺ (Stipulative) ለአዲስ ቃል ለመጀመሪያ ጊዜ ትርጉም መስጠት ነው።'
      }
    },
    {
      id: 'quiz-103-2',
      question: {
        en: 'What rule of lexical definition is violated by: "Camel means the ship of the desert"?',
        am: '"ግመል ማለት የበረሃ መርከብ ነው" የሚለው አገላለጽ የትኛውን የመዝገበ-ቃላት ፍቺ ህግ ይጥሳል?'
      },
      options: [
        { id: 'a', text: { en: 'It is circular', am: 'ዙሪያ ጥምጥም ነው' } },
        { id: 'b', text: { en: 'It is figurative / metaphorical', am: 'ምሳሌያዊ/ቅኔያዊ (Figurative) ቋንቋ ተጠቅሟል' } },
        { id: 'c', text: { en: 'It is too narrow', am: 'በጣም የጠበበ ነው' } },
        { id: 'd', text: { en: 'It is grammatically incorrect', am: 'የሰዋሰው ስህተት አለበት' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Rule 6 states that a lexical definition should avoid figurative or metaphorical expressions.',
        am: 'ህግ ፮ እንደሚያስረዳው ፍቺ ምሳሌያዊና ዘይቤያዊ ቋንቋን ማስወገድ አለበት።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-103-1',
      termEn: 'Cognitive Meaning',
      termAm: 'እውነታዊ ፍቺ',
      defEn: 'Language used to convey objective facts and informative content.',
      defAm: 'ተጨባጭ መረጃንና እውነታን ለማስተላለፍ የሚያገለግል የቋንቋ ይዘት።',
      chapter: 3
    },
    {
      id: 'fc-103-2',
      termEn: 'Emotive Meaning',
      termAm: 'ስሜታዊ ፍቺ',
      defEn: 'Language that expresses or evokes feelings, attitudes, and value judgments.',
      defAm: 'ስሜትን፣ አመለካከትንና የእሴት ድምዳሜን የሚቀሰቅስ የቋንቋ ይዘት።',
      chapter: 3
    },
    {
      id: 'fc-103-3',
      termEn: 'Vagueness',
      termAm: 'ግልጽነት ማጣት',
      defEn: 'Linguistic defect where borderline cases make meaning hazy and imprecise.',
      defAm: 'የቃሉ ወሰን ባለመታወቁ ምክንያት የሚፈጠር የትርጉም ብዥታ።',
      chapter: 3
    },
    {
      id: 'fc-103-4',
      termEn: 'Ambiguity',
      termAm: 'አሻሚነት',
      defEn: 'Linguistic defect where a word or phrase has two or more clearly distinct meanings.',
      defAm: 'አንድ ቃል በአንድ አውድ ውስጥ ሁለት ወይም ከዚያ በላይ የተለያዩ ትርጉሞች ሲኖሩት።',
      chapter: 3
    }
  ]
};
