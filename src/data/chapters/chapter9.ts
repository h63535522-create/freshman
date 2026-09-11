import { Chapter } from '../../types';

export const chapter9: Chapter = {
  id: 9,
  number: 9,
  title: {
    en: 'Intra-Personal and Interpersonal Skills',
    am: 'የውስጠ-ግለሰብ እና የግለሰቦች ግንኙነት ክህሎት'
  },
  universityAuthor: 'Habtamu Disasa (Dilla University)',
  overview: {
    en: 'Explores internal mastery and social connectivity: Self-Concept, Self-Awareness, Self-Esteem vs. Self-Confidence, Self-Control, Anger Management, Emotional Intelligence (EQ), Stress & Resilience, Critical vs. Creative Thinking, and the 7-Step Problem Solving Framework.',
    am: 'የውስጥ ማንነትን መግራት እና ከሰዎች ጋር የመግባባት ጥበብን ይመረምራል፤ ራስን ማወቅ፣ በራስ መተማመን፣ ራስን መቆጣጠር፣ የቁጣ አስተዳደር፣ ስሜታዊ ብልህነት (EQ)፣ ጭንቀትን መቋቋም እና ጥንካሬ (Resilience)፣ ሂሳዊ እና የፈጠራ አስተሳሰብ እንዲሁም 7ቱን የችግር አፈታት ደረጃዎች ያብራራል።'
  },
  learningOutcomes: [
    { en: 'Differentiate Self-Concept, Self-Awareness, Self-Esteem, and Self-Confidence', am: 'የራስ እይታን፣ ራስን ማወቅን፣ ለራስ ክብር መስጠትን እና በራስ መተማመንን መለየት' },
    { en: 'Apply psychological strategies for Self-Control and Anger Management', am: 'ራስን ለመቆጣጠር እና ቁጣን ለማስተዳደር የሚረዱ ሳይንሳዊ ዘዴዎችን መተግበር' },
    { en: 'Master the 5 domains of Emotional Intelligence (EQ)', am: 'አምስቱን የስሜታዊ ብልህነት (EQ) ዘርፎች ማወቅ' },
    { en: 'Distinguish Problem-Focused from Emotion-Focused coping with stress and define Resilience (APA)', am: 'ችግር-ተኮር እና ስሜት-ተኮር የጭንቀት መቋቋሚያ ዘዴዎችን እንዲሁም ጥንካሬን (Resilience) መረዳት' },
    { en: 'Contrast Critical vs. Creative Thinking and apply the 7 steps of Problem Solving', am: 'ሂሳዊ እና የፈጠራ አስተሳሰብን ማነፃፀር እና 7ቱን የችግር መፍቻ ደረጃዎች መተግበር' }
  ],
  sections: [
    {
      id: 'sec-9-1',
      number: '9.1',
      title: {
        en: 'Self-Concept, Awareness, Esteem & Confidence',
        am: 'የራስ እይታ፣ ራስን ማወቅ፣ ለራስ ክብር መስጠት እና በራስ መተማመን'
      },
      paragraphs: [
        {
          id: 'p-9-1-1',
          subheading: { en: 'Self-Concept and Self-Awareness', am: 'የራስ እይታ (Self-Concept) እና ራስን ማወቅ (Self-Awareness)' },
          en: '• Self-Concept: The totality of beliefs, thoughts, and attitudes an individual holds regarding their physical, academic, social, and moral being.\n• Self-Awareness: Clear, conscious understanding of one\'s strengths, weaknesses, motivations, values, and emotional triggers. High self-awareness is the single best predictor of personal success.',
          am: '• የራስ እይታ (Self-Concept)፡ አንድ ሰው ስለ ራሱ አካላዊ፣ ትምህርታዊ፣ ማህበራዊ እና ስነ-ምግባራዊ ማንነት ያለው አጠቃላይ አመለካከት ነው።\n• ራስን ማወቅ (Self-Awareness)፡ የራስን ጥንካሬዎች፣ ድክመቶች፣ ስሜቶችና ፍላጎቶች በግልጽ የመረዳት ብቃት ነው። ለህይወት ስኬት ዋነኛው መተንበያ ነው።'
        },
        {
          id: 'p-9-1-2',
          subheading: { en: 'Self-Esteem vs. Self-Confidence and Courage', am: 'ለራስ ክብር መስጠት፣ በራስ መተማመን እና ድፍረት' },
          en: '• Self-Esteem (Latin: aestimare): The evaluative emotional appraisal of our worth (competence-based vs. virtue/moral worth).\n• Self-Confidence (Latin: fidere, to trust): Trust in our ability to perform specific tasks successfully.\n• Courage: While confidence operates in the realm of the KNOWN, courage takes over in the UNKNOWN and fearsome.',
          am: '• ለራስ ክብር መስጠት (Self-Esteem)፡ ለራሳችን የምንሰጠው ዋጋ እና ስሜታዊ ክብር ነው።\n• በራስ መተማመን (Self-Confidence)፡ በታወቁ ነገሮች ላይ ባለን ችሎታ ማመን ሲሆን፤\n• ድፍረት (Courage)፡ እርግጠኛ ባልሆንበት እና በሚያስፈራው አዲስ ፈተና ውስጥ ወደፊት የመራመድ ላቀ ኃይል ነው።'
        }
      ]
    },
    {
      id: 'sec-9-2',
      number: '9.2',
      title: {
        en: 'Self-Control, Anger Management, and Emotional Intelligence',
        am: 'ራስን መግዛት፣ የቁጣ አስተዳደር እና ስሜታዊ ብልህነት'
      },
      paragraphs: [
        {
          id: 'p-9-2-1',
          subheading: { en: 'Anger Management Techniques', am: 'የቁጣ አስተዳደር ዘዴዎች' },
          en: 'Anger signals feelings of vulnerability and being devalued. Key cognitive techniques:\n1. Never trust your judgment when angry (anger amplifies negative distortion).\n2. Strive to understand the other person\'s perspective.\n3. Focus on repairing and problem-solving rather than blaming.\n4. Remember your deepest personal values.\n5. Don\'t vent blindly; practice calm self-regulation.',
          am: 'ቁጣ የዋጋ ቢስነት እና የተጋላጭነት ስሜት ነፀብራቅ ነው። ቁልፍ የመቆጣጠሪያ ዘዴዎች፡\n1. በንዴት ውስጥ ሆነው ፍርድ አይስጡ (ቁጣ እውነታውን ያዛባል)።\n2. የሌላውን ሰው እይታ ለመረዳት ይሞክሩ።\n3. ከመውቀስ ይልቅ ችግሩን በማስተካከል ላይ ያተኩሩ።\n4. ጥልቅ የሆኑትን መልካም እሴቶቻችሁን አስታውሱ።\n5. በደመ-ነፍስ ከመጮህ ይልቅ ራስን ማረጋጋትን ይለማመዱ።'
        },
        {
          id: 'p-9-2-2',
          subheading: { en: 'Emotional Intelligence (EQ/EI)', am: 'ስሜታዊ ብልህነት (EQ)' },
          en: 'EQ is the ability to identify, assess, and manage one’s own emotions and the emotions of others. It spans 5 domains:\n• Personal Competences: Self-awareness, Self-regulation, and Self-motivation.\n• Social Competences: Social awareness (Empathy) and Social skills (Relationship management).',
          am: 'ስሜታዊ ብልህነት (EQ) የራስን እና የሌሎችን ስሜት የመለየት፣ የመገምገም እና የማስተዳደር ችሎታ ነው። 5 ዘርፎች አሉት፡\n• የግል ብቃቶች፡ ራስን ማወቅ፣ ራስን መቆጣጠር፣ እና ራስን ማነሳሳት።\n• ማህበራዊ ብቃቶች፡ ማህበራዊ ንቃት (አዛኝነት/Empathy) እና ማህበራዊ ክህሎት (ግንኙነትን መምራት)።'
        }
      ]
    },
    {
      id: 'sec-9-3',
      number: '9.3',
      title: {
        en: 'Stress Coping, Resilience, and Thinking Skills',
        am: 'ጭንቀትን መቋቋም፣ ጥንካሬ እና የአስተሳሰብ ክህሎቶች'
      },
      paragraphs: [
        {
          id: 'p-9-3-1',
          subheading: { en: 'Problem-Focused vs. Emotion-Focused Coping & Resilience', am: 'ችግር-ተኮር እና ስሜት-ተኮር መቋቋሚያ እና ጥንካሬ' },
          en: '• Problem-Focused: Directly modifying or eliminating the stressor (e.g., studying hard to pass an upcoming test).\n• Emotion-Focused: Regulating emotional responses when the situation cannot be changed (e.g., mindfulness, seeking social support).\n• Resilience (APA): The process of "bouncing back" and adapting well in the face of adversity, trauma, tragedy, or significant stress.',
          am: '• ችግር-ተኮር መቋቋሚያ፡ ችግሩን በቀጥታ ፊት ለፊት ለመፍታት እርምጃ መውሰድ (ለምሳሌ ፈተናን ለማለፍ ጠንክሮ ማጥናት)።\n• ስሜት-ተኮር መቋቋሚያ፡ ሁኔታውን መቀየር በማይቻልበት ጊዜ ስሜትን ማረጋጋት (ለምሳሌ ጸሎት፣ ማሰላሰል፣ ከጓደኛ መጽናናት)።\n• ጥንካሬ (Resilience)፡ ከከባድ መከራ፣ ሀዘን እና ፈተና በኋላ መልሶ የማገገም እና ጠንክሮ የመውጣት አቅም ነው።'
        },
        {
          id: 'p-9-3-2',
          subheading: { en: 'Critical vs. Creative Thinking', am: 'ሂሳዊ አስተሳሰብ እና የፈጠራ አስተሳሰብ' },
          en: '• Critical Thinking: Analytic, convergent, vertical, logic-driven, testing hypotheses, seeking the correct answer ("Yes, but...").\n• Creative Thinking: Generative, divergent, lateral, intuition-driven, forming hypotheses, exploring possibilities ("Yes, and...").',
          am: '• ሂሳዊ አስተሳሰብ፡ ተንታኝ፣ አገናዛቢ፣ አመክንዮአዊ፣ መላ-ምትን የሚፈትሽ፣ ትክክለኛውን መልስ የሚፈልግ ("አዎ ግን...")።\n• የፈጠራ አስተሳሰብ፡ አፍላቂ፣ አዳዲስ አማራጮችን የሚከፍት፣ ውስጣዊ ስሜትን የሚጠቀም ("አዎ ደግሞ...")።'
        },
        {
          id: 'p-9-3-3',
          subheading: { en: '7 Steps in Problem Solving', am: '7ቱ የችግር አፈታት ደረጃዎች' },
          en: '1. Recognize/identify the problem.\n2. Define and represent it mentally.\n3. Develop solution strategy alternatives.\n4. Organize knowledge and avail resources.\n5. Allocate mental/physical energy.\n6. Monitor progress toward the goal.\n7. Evaluate solution accuracy.',
          am: '1. ችግሩን መለየት።\n2. ችግሩን በአእምሮ በግልጽ መተርጎም።\n3. አማራጭ የመፍትሄ ስልቶችን ማመንጨት።\n4. አስፈላጊውን እውቀትና ግብዓት ማደራጀት።\n5. ሀይልና ጊዜን መመደብ።\n6. ሂደቱን መከታተል።\n7. የመጨረሻውን ውጤት ትክክለኛነት መገምገም።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-9-1',
      title: { en: 'Core Summary of Chapter 9', am: 'የምዕራፍ 9 ዋና ማጠቃለያ' },
      bullets: [
        { en: 'Self-Awareness is knowing oneself; Self-Esteem is valuing oneself; Self-Confidence is trusting oneself.', am: 'ራስን ማወቅ ማንነትን መረዳት ነው፤ ለራስ ክብር መስጠት ዋጋን ማወቅ ነው፤ በራስ መተማመን በችሎታ መታመን ነው።' },
        { en: 'Emotional Intelligence encompasses personal competencies (self-regulation) and social competences (empathy).', am: 'ስሜታዊ ብልህነት የግል ብቃትንና ማህበራዊ አዛኝነትን ያጣምራል።' },
        { en: 'Problem-focused coping targets the cause of stress; emotion-focused coping soothes the emotional toll.', am: 'ችግር-ተኮር መቋቋሚያ መንስኤውን ያነጣጥራል፤ ስሜት-ተኮር ደግሞ ስቃዩን ያበርዳል።' },
        { en: 'Resilience is the learned capability to bounce back from adversity.', am: 'ጥንካሬ (Resilience) ከመከራ በኋላ መልሶ የማገገም ችሎታ ነው።' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-9-1',
      number: 1,
      category: 'discussion',
      question: {
        en: 'In the chapter appetizer, a young girl discovers her mother put poison in the family porridge to kill the father. The girl said: "If I tell you the reason, my mother will die. If I keep quiet, my father will die." Analyze the girl’s dilemma using critical thinking and problem-solving.',
        am: 'በምዕራፉ መግቢያ ላይ እናቷ ለባሏ በገንፎ ውስጥ መርዝ ስትጨምር ያየችው ልጅ "ምክንያቱን ከተናገርኩ እናቴ ትሞታለች፤ ዝም ካልኩ አባቴ ይሞታል" አለች። ይህንን ከባድ ችግር በሂሳዊ አስተሳሰብና በችግር ፈቺነት ተንትነው።'
      },
      answer: {
        en: 'The girl faces an ill-defined crisis with severe ethical consequences. By speaking up ("Do not allow my father to eat the porridge"), she saved her father\'s life immediately. By phrasing it as a cryptic warning rather than an open accusation, she prevented immediate lethal violence, demonstrating early lateral thinking under severe acute stress.',
        am: 'ልጅቷ በጣም ከባድ እና ውስብስብ አጣብቂኝ ገጠማት። "አባቴ ገንፎውን እንዳይበላ ከልክሉልኝ" በማለቷ የአባቷን ህይወት በቅጽበት አተረፈች። ወዲያውኑ እናቷን በግልጽ ሳታጋልጥ ምግብ መብላቱን ማስቆሟ ከፍተኛ አእምሮአዊ ብልሃትን ያሳያል።'
      },
      explanation: {
        en: 'Effective problem-solving first prioritizes immediate physical safety (preventing poisoning) while assessing complex interpersonal fallout.',
        am: 'በችግር አፈታት ወቅት በመጀመሪያ ለሰው ህይወት ቅድሚያ መስጠት ወሳኝ ነው።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-9-1',
      question: {
        en: 'What is the APA definition of Resilience?',
        am: 'እንደ አሜሪካ ስነ-ልቦና ማህበር (APA) ትርጓሜ፣ ጥንካሬ (Resilience) ምንድን ነው?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Never feeling sadness, grief, or anger', am: 'መቼም ቢሆን አለማዘን ወይም አለመቆጣት' } },
        { id: 'opt-b', text: { en: 'The process of adapting well in the face of adversity and "bouncing back"', am: 'ከመከራ እና ከፈተና በኋላ መልሶ የማገገም እና የመውጣት ሂደት' } },
        { id: 'opt-c', text: { en: 'Avoiding any challenging situations in life', am: 'ፈተና ከሚበዛባቸው ሁኔታዎች ሁሉ መሸሽ' } },
        { id: 'opt-d', text: { en: 'Suppressing all emotions completely', am: 'ሁሉንም ስሜቶች አምቆ መያዝ' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Resilience is defined by the APA as adapting well in the face of adversity, trauma, or stress—"bouncing back."',
        am: 'ጥንካሬ (Resilience) ከመከራና ከፈተና በኋላ መልሶ ጠንክሮ የማገገም ሂደት ነው።'
      }
    }
  ],
  matching: [
    {
      id: 'm-9-1',
      concept: { en: 'Critical Thinking', am: 'ሂሳዊ አስተሳሰብ' },
      definition: { en: 'Convergent, analytical, logic-driven, hypothesis testing', am: 'ተንታኝ፣ አመክንዮአዊ፣ መላ-ምትን የሚፈትሽ' }
    },
    {
      id: 'm-9-2',
      concept: { en: 'Creative Thinking', am: 'የፈጠራ አስተሳሰብ' },
      definition: { en: 'Divergent, generative, lateral, intuition-driven', am: 'አፍላቂ፣ አማራጮችን የሚከፍት፣ ውስጣዊ ስሜትን የሚጠቀም' }
    }
  ],
  flashcards: [
    {
      id: 'fc-9-1',
      termEn: 'Emotional Intelligence (EQ)',
      termAm: 'ስሜታዊ ብልህነት',
      defEn: 'The ability to perceive, understand, manage, and utilize emotions constructively.',
      defAm: 'የራስንና የሌሎችን ስሜት የመረዳት እና በበጎ መንገድ የማስተዳደር ብቃት።',
      chapter: 9
    },
    {
      id: 'fc-9-2',
      termEn: 'Resilience',
      termAm: 'ጥንካሬ / ማገገም (ሪዚሊየንስ)',
      defEn: 'The capacity to recover quickly from difficulties; bouncing back.',
      defAm: 'ከከባድ ፈተና እና መከራ በኋላ መልሶ የማገገም ጥንካሬ።',
      chapter: 9
    }
  ]
};
