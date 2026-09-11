import { Chapter } from '../../types';

export const chapter5: Chapter = {
  id: 5,
  number: 5,
  title: {
    en: 'Motivation and Emotions',
    am: 'ተነሳሽነት እና ስሜቶች (Motivation & Emotions)'
  },
  universityAuthor: 'Koye Kassa (Bahir Dar University)',
  overview: {
    en: 'Analyzes the forces that initiate, direct, and sustain human behavior. Contrasts intrinsic and extrinsic motivation, presents 6 major motivational theories (including Maslow\'s Hierarchy of Needs), details 4 motivational conflict types, explores the 3 elements of emotion, and contrasts the James-Lange, Cannon-Bard, and Schachter-Singer theories.',
    am: 'የሰውን ልጅ ባህሪ የሚቀሰቅሱ፣ የሚመሩ እና የሚያስቀጥሉ ሀይሎችን ይመረምራል፤ ውስጣዊና ውጫዊ ተነሳሽነትን፣ የማስሎውን የፍላጎት ደረጃዎች ጨምሮ 6 የንድፈ-ሀሳብ አቀራረቦችን፣ 4ቱን የተነሳሽነት ግጭቶች እና 3ቱን የስሜት ንድፈ-ሀሳቦች ያብራራል።'
  },
  learningOutcomes: [
    { en: 'Define motivation (Latin: movere) and distinguish intrinsic vs. extrinsic motivation', am: 'ተነሳሽነትን መተርጎም እና ውስጣዊን ከውጫዊ ተነሳሽነት መለየት' },
    { en: 'Master Maslow’s Hierarchy of Needs (Physiological, Safety, Belongingness, Esteem, Self-Actualization)', am: 'የማስሎውን የፍላጎት እርከኖች (አካላዊ፣ ደህንነት፣ ፍቅር፣ ክብር፣ እና የራስን አቅም ማሳካት) መቆጣጠር' },
    { en: 'Differentiate the 4 types of motivational conflicts (Approach-Approach, Avoidance-Avoidance, etc.)', am: 'አራቱን የተነሳሽነት ግጭቶች መለየት' },
    { en: 'Analyze the 3 elements of emotion: Physiological, Behavioral, and Subjective Cognitive', am: 'ሦስቱን የስሜት አካላት (አካላዊ፣ ባህሪያዊ እና አእምሮአዊ) መተንተን' },
    { en: 'Compare James-Lange, Cannon-Bard, and Schachter-Singer two-factor theories of emotion', am: 'የጄምስ-ላንግ፣ የካኖን-ባርድ እና የሻክተር-ሲንገር የስሜት ንድፈ-ሀሳቦችን ማወዳደር' }
  ],
  sections: [
    {
      id: 'sec-5-1',
      number: '5.1',
      title: {
        en: 'The Nature and Theories of Motivation',
        am: 'የተነሳሽነት ምንነት እና ንድፈ-ሀሳቦች'
      },
      paragraphs: [
        {
          id: 'p-5-1-1',
          subheading: { en: 'Intrinsic vs. Extrinsic Motivation', am: 'ውስጣዊ እና ውጫዊ ተነሳሽነት' },
          en: 'Motivation (from Latin "movere", to move) is the internal state that activates and directs behavior toward a goal.\n• Intrinsic Motivation: Driven by internal personal enjoyment and love for the task itself (e.g., an Ethiopian teacher volunteering evening classes because she loves teaching).\n• Extrinsic Motivation: Driven by external tangible rewards or avoiding punishment (e.g., studying solely to secure a high grade or salary bonus).',
          am: 'ተነሳሽነት ("ሞቬሬ" ከሚል የላቲን ቃል የተገኘ) ባህሪን ቀስቅሶ ወደ ግብ የሚመራ ውስጣዊ ሀይል ነው።\n• ውስጣዊ ተነሳሽነት፡ ከራስ ፍላጎትና ደስታ የሚመነጭ (ለምሳሌ፡ አንድ መምህር ማስተማርን ስለሚወድ ብቻ ተጨማሪ ሰዓት ተማሪዎችን ሲያግዝ)።\n• ውጫዊ ተነሳሽነት፡ ከውጭ በሚገኝ ክፍያ፣ ውጤት ወይም ማዕረግ የሚመራ (ለምሳሌ፡ ለደመወዝ ወይም ጥሩ ውጤት ለማግኘት ብቻ ማጥናት)።'
        },
        {
          id: 'p-5-1-2',
          subheading: { en: 'Maslow’s Hierarchy of Needs', am: 'የአብርሃም ማስሎው የፍላጎት እርከኖች' },
          en: 'Abraham Maslow proposed that human needs are arranged in a five-tier pyramid. Lower biological needs must be satisfied before higher needs can emerge:\n1. Physiological Needs: Air, food, water, sleep, shelter.\n2. Safety Needs: Security, stability, freedom from fear.\n3. Love & Belongingness: Friendship, intimacy, family, community affiliation.\n4. Esteem Needs: Self-respect, status, mastery, recognition.\n5. Self-Actualization: Achieving one\'s fullest personal potential ("becoming everything one is capable of becoming").',
          am: 'አብርሃም ማስሎው የሰው ልጅ ፍላጎቶች በአምስት እርከኖች እንደሚደረደሩ አስረድቷል፤ የታችኞቹ ካልተሟሉ የላይኞቹ አይነቃቁም፡\n1. አካላዊ ፍላጎት፡ አየር፣ ምግብ፣ ውሃ፣ እንቅልፍ፣ መጠለያ።\n2. የደህንነት ፍላጎት፡ ጥበቃ፣ ሰላም፣ ከስጋት ነጻ መሆን።\n3. የፍቅር እና የባለቤትነት ፍላጎት፡ ጓደኝነት፣ ቤተሰብ፣ ፍቅር፣ ማህበራዊ ትስስር።\n4. የክብር ፍላጎት፡ ራስን ማክበር፣ በሌሎች ዘንድ እውቅና እና አድናቆት ማግኘት።\n5. የራስን አቅም ማሳካት (Self-Actualization)፡ የራስን የተፈጥሮ ተሰጥኦ ወደ ላቀ ደረጃ ማድረስ።'
        },
        {
          id: 'p-5-1-3',
          subheading: { en: 'Four Types of Motivational Conflicts', am: 'አራቱ የተነሳሽነት ግጭቶች' },
          en: '• Approach-Approach: Choosing between two equally desirable options (e.g., attending a favorite music concert or an exciting football derby).\n• Avoidance-Avoidance: Choosing between two painful alternatives (e.g., studying all night or facing course dismissal).\n• Approach-Avoidance: A single goal with both appealing and unappealing attributes (e.g., eating delicious cake while on a strict health diet).\n• Multiple Approach-Avoidance: Choosing between alternatives where each has mixed pros and cons (e.g., choosing between an elite job in a remote harsh desert vs. a low-paying job near family).',
          am: '• አቀራራቢ-አቀራራቢ (Approach-Approach)፡ ከሁለት ተወዳጅ ነገሮች አንዱን መምረጥ (የእግር ኳስ ጨዋታ ወይስ የሙዚቃ ኮንሰርት መሄድ)።\n• አራራቂ-አራራቂ (Avoidance-Avoidance)፡ ከሁለት አስቸጋሪ ነገሮች አንዱን መምረጥ (ሌሊቱን ሙሉ መማር ወይስ ከትምህርት መባረር)።\n• አቀራራቢ-አራራቂ (Approach-Avoidance)፡ አንድ ነገር ሁለቱንም ጥሩና መጥፎ ገጽታ ሲይዝ (ጣፋጭ ምግብ መብላት ፈለጉ ግን ውፍረትን መፍራት)።\n• ዘርፈ-ብዙ ግጭት (Multiple Approach-Avoidance)፡ ከተለያዩ አማራጮች እያንዳንዳቸው የየራሳቸው ጠቀሜታና ጉዳት ሲኖራቸው መምረጥ።'
        }
      ]
    },
    {
      id: 'sec-5-2',
      number: '5.2',
      title: {
        en: 'The Nature and Theories of Emotion',
        am: 'የስሜቶች ምንነት እና ንድፈ-ሀሳቦች'
      },
      paragraphs: [
        {
          id: 'p-5-2-1',
          subheading: { en: 'The Three Elements of Emotion', am: 'ሦስቱ የስሜት ክፍሎች' },
          en: 'Emotion is a subjective conscious experience characterized by:\n1. Physiological Arousal: Autonomic nervous system activation (racing heart, dilated pupils, sweaty palms).\n2. Behavioral Expression: Facial expressions, body postures, vocal tone (smiles, frowns, fight-or-flight).\n3. Subjective Cognitive Appraisal: Mental labeling and evaluation of the feeling based on context.',
          am: 'ስሜት (Emotion) በውስጡ ሦስት ክፍሎችን የያዘ ንቃተ-ህሊናዊ ልምምድ ነው፡\n1. አካላዊ ንዝረት (Physiological)፡ የልብ ምት መጨመር፣ ማላብ፣ የደም ግፊት መናር።\n2. ባህሪያዊ መገለጫ (Behavioral)፡ የፊት ገጽታ፣ የሰውነት አቋም፣ ድምፅ (መሳቅ፣ ማልቀስ፣ መሸሽ)።\n3. አስተውሎታዊ ትርጉም (Cognitive Appraisal)፡ ሁኔታውን ገምግሞ ለስሜቱ ስም መስጠት (ፍርሃት፣ ደስታ፣ ንዴት)።'
        },
        {
          id: 'p-5-2-2',
          subheading: { en: 'Contrasting the Three Major Theories of Emotion', am: 'ሦስቱን የስሜት ንድፈ-ሀሳቦች ማነፃፀር' },
          en: '1. James-Lange Theory: Bodily arousal PRECEDED the emotion. "We see a bear, we run and our heart pounds, therefore we feel fear."\n2. Cannon-Bard Theory: Arousal and emotional feeling happen SIMULTANEOUSLY. Sensory signals reach the thalamus, which fires concurrently to the cortex (emotion) and autonomic system (arousal).\n3. Schachter-Singer Two-Factor Theory: Emotion requires both physiological arousal AND a cognitive environmental label. Arousal provides the intensity, but cognition labels the emotion based on social cues.',
          am: '1. የጄምስ-ላንግ ንድፈ-ሀሳብ፡ አካላዊ ምላሹ ይቀድማል፤ ከዚያ ስሜቱ ይመጣል ("ድብ ስናይ እንሮጣለን፣ ልባችን ይመታል፤ ስለዚህ ፈራን")።\n2. የካኖን-ባርድ ንድፈ-ሀሳብ፡ አካላዊ ለውጡ እና ስሜቱ በአንድ ጊዜ አብረው ይከሰታሉ። ታላመስ ምልክቱን ወደ አእምሮና ወደ አካል በእኩል ቅጽበት ይልካል ("በአንድ ጊዜ ፈራሁም፣ ሮጥሁም")።\n3. የሻክተር-ሲንገር ሁለት-ምክንያት ንድፈ-ሀሳብ፡ አካላዊ ንዝረት ይከሰታል፤ አእምሮ ደግሞ አካባቢውን አይቶ ትርጉም ይሰጣል ("ልቤ እየመታ ነው፣ አጠገቤ የሚያስፈራ ውሻ አለ፤ ስለዚህ ፍርሃት ነው")።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-5-1',
      title: { en: 'Maslow Hierarchy Summary', am: 'የማስሎው እርከኖች ማጠቃለያ' },
      bullets: [
        { en: 'Tier 1: Physiological (food, water, sleep).', am: 'እርከን 1፡ አካላዊ ፍላጎት (ምግብ፣ ውሃ፣ እንቅልፍ)' },
        { en: 'Tier 2: Safety & Security.', am: 'እርከን 2፡ ደህንነት እና ጥበቃ' },
        { en: 'Tier 3: Love & Belongingness.', am: 'እርከን 3፡ ፍቅር እና ማህበራዊ ህብረት' },
        { en: 'Tier 4: Esteem & Respect.', am: 'እርከን 4፡ ክብር እና እውቅና' },
        { en: 'Tier 5: Self-Actualization.', am: 'እርከን 5፡ የራስን አቅም ማሳካት' }
      ]
    },
    {
      id: 'sum-5-2',
      title: { en: 'Emotion Theories at a Glance', am: 'የስሜት ንድፈ-ሀሳቦች በጨረፍታ' },
      bullets: [
        { en: 'James-Lange: Stimulus -> Physiological Arousal -> Emotional Feeling.', am: 'ጄምስ-ላንግ፡ ማነቃቂያ -> አካላዊ ለውጥ -> ስሜት።' },
        { en: 'Cannon-Bard: Stimulus -> Simultaneous Sub-cortical firing (Arousal + Emotion).', am: 'ካኖን-ባርድ፡ ማነቃቂያ -> አካላዊ ለውጥ እና ስሜት በአንድ ጊዜ።' },
        { en: 'Schachter-Singer: Stimulus -> Arousal + Cognitive Appraisal -> Emotion.', am: 'ሻክተር-ሲንገር፡ ማነቃቂያ -> አካላዊ ንዝረት + አእምሮአዊ ትርጉም -> ስሜት።' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-5-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'A freshman student encounters a snarling wild dog on the university campus. According to the James-Lange theory, what sequence of events produces his fear?',
        am: 'አንድ ተማሪ በካምፓስ ውስጥ አደገኛ ውሻ አጋጠመው። እንደ ጄምስ-ላንግ ንድፈ-ሀሳብ ከሆነ ፍርሃቱ የሚፈጠረው በምን ቅደም ተከተል ነው?'
      },
      answer: {
        en: 'First, the sight of the snarling dog stimulates sympathetic bodily arousal (racing heart, adrenaline surge, trembling legs). Next, the brain registers these physical changes and interprets them as fear. In short: "I tremble, therefore I am afraid."',
        am: 'በመጀመሪያ የውሻው መታየት የልብ ምት መጨመርን እና የሰውነት መንቀጥቀጥን (አካላዊ ምላሽ) ያመጣል። ከዚያ አእምሮ ይህንን አካላዊ ለውጥ አይቶ "እየተንቀጠቀጥኩ ነው፣ ስለዚህ ፈርቻለሁ" ብሎ ስሜቱን ይፈጥራል።'
      },
      explanation: {
        en: 'James-Lange insists that psychological emotion is a consequence of bodily reaction, not the cause of it.',
        am: 'የጄምስ-ላንግ መርህ ስሜት የሚመጣው ከአካላዊ ምላሽ በኋላ ነው ይላል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-5-1',
      question: {
        en: 'At what tier of Maslow\'s hierarchy do feelings of friendship, intimacy, and belongingness reside?',
        am: 'በማስሎው የፍላጎት እርከን መሰረት ጓደኝነት፣ ቅርርብ እና የባለቤትነት ስሜት በስንተኛው እርከን ላይ ይገኛሉ?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Physiological Needs', am: 'አካላዊ ፍላጎት' } },
        { id: 'opt-b', text: { en: 'Safety Needs', am: 'የደህንነት ፍላጎት' } },
        { id: 'opt-c', text: { en: 'Love and Belongingness Needs', am: 'የፍቅር እና የባለቤትነት ፍላጎት' } },
        { id: 'opt-d', text: { en: 'Self-Actualization', am: 'የራስን አቅም ማሳካት' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Once physiological and safety needs are met, social belongingness and love form the third tier of Maslow\'s pyramid.',
        am: 'አካላዊ እና የደህንነት ፍላጎት ከተሟላ በኋላ ማህበራዊ ፍቅር እና ባለቤትነት በ3ኛው እርከን ይቀመጣሉ።'
      }
    }
  ],
  matching: [
    {
      id: 'm-5-1',
      concept: { en: 'Approach-Approach Conflict', am: 'አቀራራቢ-አቀራራቢ ግጭት' },
      definition: { en: 'Choosing between two equally attractive goals', am: 'ከሁለት ተወዳጅ አማራጮች አንዱን መምረጥ' }
    },
    {
      id: 'm-5-2',
      concept: { en: 'Avoidance-Avoidance Conflict', am: 'አራራቂ-አራራቂ ግጭት' },
      definition: { en: 'Choosing between two equally undesirable alternatives', am: 'ከሁለት አስቸጋሪ አማራጮች አንዱን መምረጥ' }
    },
    {
      id: 'm-5-3',
      concept: { en: 'Homeostasis', am: 'ሆሚዮስታሲስ (ተፈጥሮአዊ ሚዛን)' },
      definition: { en: 'The body’s tendency to maintain internal physiological balance', am: 'የሰውነት ውስጣዊ ተፈጥሮአዊ ሚዛኑን ጠብቆ የማቆየት አዝማሚያ' }
    }
  ],
  flashcards: [
    {
      id: 'fc-5-1',
      termEn: 'Intrinsic Motivation',
      termAm: 'ውስጣዊ ተነሳሽነት',
      defEn: 'Engaging in an activity for personal satisfaction and enjoyment rather than external reward.',
      defAm: 'ለራስ እርካታና ደስታ ሲባል ብቻ በድርጊቱ የመሳተፍ ፍላጎት።',
      chapter: 5
    },
    {
      id: 'fc-5-2',
      termEn: 'Self-Actualization',
      termAm: 'የራስን አቅም ማሳካት',
      defEn: 'The highest motive: realizing personal potential and striving for self-fulfillment.',
      defAm: 'የሰውን ልጅ የተፈጥሮ አቅምና ተሰጥኦ ወደ ላቀ ደረጃ የማድረስ የመጨረሻ ግብ።',
      chapter: 5
    }
  ]
};
