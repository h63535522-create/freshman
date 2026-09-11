import { Chapter } from '../../types';

export const chapter6: Chapter = {
  id: 6,
  number: 6,
  title: {
    en: 'Personality',
    am: 'ስብዕና (Personality)'
  },
  universityAuthor: 'Koye Kassa (Bahir Dar University)',
  overview: {
    en: 'Investigates the psychological architecture of individual uniqueness: the Freudian psychoanalytic structure (Id, Ego, Superego) and 8 defense mechanisms; the Trait Perspective featuring the Big Five (OCEAN) taxonomy; and the Humanistic perspective of Carl Rogers (Real vs. Ideal self, unconditional positive regard, and the fully functioning person).',
    am: 'የግለሰብን ልዩ ባህሪ እና ስብዕና ይመረምራል፤ የሲግመንድ ፍሮይድ የስብዕና መዋቅር (ኢድ፣ ኢጎ፣ ሱፐርኢጎ) እና 8ቱ የስነ-ልቦና መከላከያ ዘዴዎች፤ የባህሪ ልኬት (Big Five OCEAN)፤ እና የካርል ሮጀርስ ሰብአዊነት ንድፈ-ሀሳብ (እውነተኛና ተመራጭ ማንነት፣ ቅድመ-ሁኔታ የሌለው አክብሮት) ይተነተናሉ።'
  },
  learningOutcomes: [
    { en: 'Define personality (Latin: persona) and distinguish it from character and temperament', am: 'ስብዕናን መተርጎም እና ከባህሪይ (Character) እንዲሁም ተፈጥሮአዊ ቅልጥፍና (Temperament) መለየት' },
    { en: 'Analyze Freud’s tripartite structure: Id (Pleasure Principle), Ego (Reality Principle), and Superego', am: 'የፍሮይድን ሦስት የስብዕና ክፍሎች (ኢድ፣ ኢጎ እና ሱፐርኢጎ) መተንተን' },
    { en: 'Identify and apply the 8 Freudian defense mechanisms to real-life cases', am: '8ቱን የስነ-ልቦና መከላከያ ዘዴዎች በህይወት ምሳሌዎች መለየትና መረዳት' },
    { en: 'Master the Big Five personality traits using the acronym OCEAN', am: 'አምስቱን ታላላቅ የስብዕና መገለጫዎች (OCEAN) ማወቅ' },
    { en: 'Evaluate Carl Rogers’ Self-Concept, Real vs. Ideal Self, and Unconditional Positive Regard', am: 'የካርል ሮጀርስን እውነተኛ እና ተመራጭ ማንነት እንዲሁም ፍፁም ፍቅርን መገምገም' }
  ],
  sections: [
    {
      id: 'sec-6-1',
      number: '6.1',
      title: {
        en: 'Meaning and Definitions of Personality',
        am: 'የስብዕና ምንነት እና ትርጓሜ'
      },
      paragraphs: [
        {
          id: 'p-6-1-1',
          subheading: { en: 'Etymology and Definition', am: 'ስርወ-ቃል እና ሳይንሳዊ ትርጓሜ' },
          en: 'The word "personality" originates from the Latin "persona", referring to theatrical masks worn by ancient Greek actors. In modern psychology, personality is defined as the unique pattern of enduring thoughts, feelings, and actions that characterize an individual over time and across situations.',
          am: '"ፐርሰናሊቲ" (ስብዕና) የመጣው "ፐርሶና" ከሚለው የላቲን ቃል ሲሆን በጥንታዊ ግሪክ ተዋንያን ፊታቸው ላይ ያደርጉት የነበረውን ጭምብል ያመለክታል፤ በስነ-ልቦና ግን አንድን ግለሰብ ከሌሎች የሚለይ ዘላቂ የአስተሳሰብ፣ የስሜት እና የተግባር ድምር ውጤት ነው።'
        },
        {
          id: 'p-6-1-2',
          subheading: { en: 'Personality vs. Character and Temperament', am: 'ስብዕና፣ ስነ-ምግባር (Character) እና ተፈጥሮአዊ ቅልጥፍና (Temperament)' },
          en: 'Personality must not be confused with "character" (value judgments regarding morals and ethical behavior) or "temperament" (inborn biological reactivity such as infant irritability or calmness). Both character and temperament feed into the broader construct of personality.',
          am: 'ስብዕና ከስነ-ምግባር (የሞራልና የቅንነት ግምገማ) ወይም ከተፈጥሮአዊ ዝንባሌ (ከተወለድንበት ጊዜ ጀምሮ የሚታይ ፈጣን የመቆጣት ወይም የመረጋጋት ባህሪ) ጋር መምታታት የለበትም።'
        }
      ]
    },
    {
      id: 'sec-6-2',
      number: '6.2',
      title: {
        en: 'Psychoanalytic Theory: Structure and Defense Mechanisms',
        am: 'የስነ-ተንታኝነት ንድፈ-ሀሳብ፡ መዋቅር እና የመከላከያ ዘዴዎች'
      },
      paragraphs: [
        {
          id: 'p-6-2-1',
          subheading: { en: 'The Tripartite Mind: Id, Ego, Superego', am: 'ሦስቱ የአእምሮ ክፍሎች፡ ኢድ፣ ኢጎ፣ ሱፐርኢጎ' },
          en: '• Id (It): Primitive, amoral, unconscious reservoir of biological drives (hunger, thirst, sex/libido, aggression). Operates on the Pleasure Principle ("If it feels good, do it now!").\n• Ego (I): Rational executive mediator between Id impulses and reality constraints. Operates on the Reality Principle ("Do it only if you can get away with it without punishment").\n• Superego (Above the self): Moral compass developed through parental rules and social norms. Comprises the Ego-Ideal (standards of excellence) and Conscience (source of guilt and pride).',
          am: '• ኢድ (Id - ተፈጥሮአዊ ፍላጎት)፡ ሙሉ በሙሉ ባለማወቅ አእምሮ ውስጥ ያለ፣ የደመ-ነፍስ (የረሃብ፣ የወሲብ፣ የጥቃት) ምንጭ ነው። የሚመራው በደስታ መርህ ነው ("ደስ ካለህ አሁኑኑ አድርገው!")።\n• ኢጎ (Ego - አእምሮአዊ ፈፃሚ)፡ በኢድ ፍላጎትና በህብረተሰብ እውነታ መካከል የሚያስማማ ምክንያታዊ አካል ነው። የሚመራው በእውነታ መርህ ነው ("ቅጣት የማያመጣ ከሆነ ብቻ ፈፅመው")።\n• ሱፐርኢጎ (Superego - ህሊና/የሞራል ዳኛ)፡ ከቤተሰብ እና ከህብረተሰብ የተማርናቸው የሞራል እሴቶች ናቸው። ጥፋት ሲሰራ የጥፋተኝነት ስሜት፣ መልካም ሲሰራ ደግሞ የኩራት ስሜት ይሰጠናል።'
        },
        {
          id: 'p-6-2-2',
          subheading: { en: 'The Eight Freudian Psychological Defense Mechanisms', am: 'ስምንቱ የስነ-ልቦና መከላከያ ዘዴዎች' },
          en: '1. Repression: Unconsciously pushing distressing thoughts out of awareness (e.g., an Ethiopian husband defeated in an argument never mentions it again).\n2. Denial: Refusing to admit an obvious painful reality (e.g., Mr. Geremew denying his severe alcoholism).\n3. Regression: Reverting to childish coping mechanisms (e.g., a stressed college student sucking their thumb or curling into a fetal posture).\n4. Rationalization: Manufacturing socially acceptable excuses for failure (e.g., blaming "knowledge over grades" after failing an exam).\n5. Displacement: Diverting anger toward a safer, less threatening target (e.g., yelling at your younger sibling after being reprimanded by the boss).\n6. Projection: Attributing one\'s own unacceptable traits to others (e.g., a cheating student accusing classmates of dishonesty).\n7. Reaction Formation: Behaving in a manner diametrically opposite to genuine feelings (e.g., acting excessively polite to someone you despise).\n8. Sublimation: Channeling unacceptable aggressive or sexual energy into productive, admired pursuits (e.g., an aggressive individual excelling in football or martial arts).',
          am: '1. መጨቆን (Repression)፡ አስጨናቂ ሀሳቦችን ባለማወቅ ወደ ድብቁ አእምሮ ገፍትሮ መደበቅ (ያፈረበትን ሽንፈት ፈጽሞ አለማንሳት)።\n2. መካድ (Denial)፡ እውነታውን ለመቀበል ፈጽሞ እምቢ ማለት (አቶ ገረመው ሱሰኛነታቸውን አምነው አለመቀበላቸው)።\n3. ወደ ኋላ መመለስ (Regression)፡ ወደ ህፃንነት ባህሪ መመለስ (ጭንቀት ሲበዛ ጣት መጥባት ወይም ማልቀስ)።\n4. ምክንያት ማበጀት (Rationalization)፡ ለስህተት ተቀባይነት ያለው ሰበብ መደርደር (ፈተና ወድቆ "እኔ የምፈልገው እውቀት እንጂ ውጤት አይደለም" ማለት)።\n5. ቁጣን ማዛወር (Displacement)፡ ቁጣን በማያስፈራ ሰው ላይ መወጣት (በአለቃ ተበሳጭቶ ቤተሰብን መቆጣት)።\n6. በሌሎች ላይ ማላከክ (Projection)፡ የራስን መጥፎ ባህሪ በሌላው ላይ መለጠፍ (የሚሰርቅ ሰው ሌላውን "ሌባ" ብሎ መክሰስ)።\n7. ተቃራኒ ባህሪ ማሳየት (Reaction Formation)፡ በውስጥ ካለው ስሜት ፍጹም ተቃራኒ የሆነ ባህሪ ማሳየት።\n8. ማላቅ (Sublimation)፡ አሉታዊ ሀይልን ወደ ገንቢ እና የተመሰገነ ስራ መለወጥ (ኃይለኛ ቁጣ ያለበት ሰው ወደ ስፖርት ወይም ቦክስ መቀየር)።'
        }
      ]
    },
    {
      id: 'sec-6-3',
      number: '6.3',
      title: {
        en: 'Trait Theory & Humanistic Perspective',
        am: 'የባህሪ ልኬት (OCEAN) እና ሰብአዊነት አቀራረብ'
      },
      paragraphs: [
        {
          id: 'p-6-3-1',
          subheading: { en: 'The Big Five Model (OCEAN)', am: 'አምስቱ ታላላቅ የስብዕና መለኪያዎች (OCEAN)' },
          en: 'Trait theorists measure stable, enduring behavioral dimensions using the acronym OCEAN:\n• Openness: Curiosity, imagination, willingness to try new experiences vs. conventional predictability.\n• Conscientiousness: Organization, self-discipline, punctuality, dependability vs. unreliability and chaos.\n• Extraversion: Outgoing, sociable, assertive energy vs. introverted reserved quietness.\n• Agreeableness: Compassionate, trusting, warm, cooperative vs. antagonistic, irritable, and rude.\n• Neuroticism: Emotional instability, anxiety, vulnerability to distress vs. calm emotional resilience.',
          am: 'የስብዕና መለኪያ ንድፈ-ሀሳብ በአምስት መለኪያዎች (OCEAN) ይጠቃለላል፡\n• ኦ (Openness - ግልፅነት)፡ ለአዳዲስ ነገሮች እና ልምዶች ዝግጁ መሆን።\n• ሲ (Conscientiousness - ሀላፊነት አዋቂነት)፡ የተደራጀ፣ ታታሪ እና በሰዓት የሚገኝ መሆን።\n• ኢ (Extraversion - ማህበራዊነት)፡ ተግባቢ፣ ደስተኛ እና ከሰዎች ጋር መቀላቀል የሚወድ።\n• ኤ (Agreeableness - ተግባቢነትና ቸርነት)፡ ቅን፣ አዛኝ እና ተግባቢ መሆን።\n• ኤን (Neuroticism - ስሜታዊ አለመረጋጋት)፡ ለጭንቀትና ፍርሀት ተጋላጭ መሆን በተቃራኒው መረጋጋት።'
        },
        {
          id: 'p-6-3-2',
          subheading: { en: 'Carl Rogers: Real Self, Ideal Self, and Positive Regard', am: 'ካርል ሮጀርስ፡ እውነተኛ ማንነት እና ፍፁም አክብሮት' },
          en: 'Carl Rogers stressed the Self-Concept—the perception of who we are:\n• Real Self: Who we actually are in abilities and daily life.\n• Ideal Self: Who we aspire or feel pressured to be.\nA large gap between real and ideal selves breeds neurosis and anxiety.\n• Unconditional Positive Regard: Love and acceptance without conditions (e.g., Tirhas’ parents supporting any career choice) fosters a fully functioning person.\n• Conditional Positive Regard: Love contingent on fulfilling demands (e.g., Chaltu pressured to become a physician or risk parental rejection) inhibits authentic self-actualization.',
          am: 'ካርል ሮጀርስ የራስ ማንነት እይታን (Self-Concept) አጉልቷል፡\n• እውነተኛ ማንነት (Real Self)፡ በእርግጥ ያለን ተጨባጭ ማንነትና አቅም።\n• ተመራጭ ማንነት (Ideal Self)፡ መሆን የምንፈልገው ወይም እንድንሆን የምንገደደው ማንነት።\nበእውነተኛው እና በተመራጩ ማንነት መካከል ሰፊ ክፍተት ሲፈጠር ጭንቀትና ስነ-ልቦናዊ መቃወስ ይከተላል።\n• ያለቅድመ-ሁኔታ የሚሰጥ ፍቅር (Unconditional Positive Regard)፡ ያለምንም መስፈርት የሚሰጥ አክብሮት እና ፍቅር (ለምሳሌ የጥርስ ወላጆች የመረጠችውን እንድትማር መፍቀዳቸው)።\n• በቅድመ-ሁኔታ የተገደበ ፍቅር (Conditional)፡ ወላጆች የፈለጉትን ካልሆነች እንደማይወዷት የተነገራት የጫልቱ ታሪክ የራስን አቅም እንዳታሳድግ ያግዳታል።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-6-1',
      title: { en: 'Freudian Architecture', am: 'የፍሮይድ የስብዕና መዋቅር' },
      bullets: [
        { en: 'Id: Unconscious, pleasure principle, libido drives.', am: 'ኢድ፡ ባለማወቅ አእምሮ፣ የደስታ መርህ፣ የደመ-ነፍስ ፍላጎት።' },
        { en: 'Ego: Conscious mediator, reality principle.', am: 'ኢጎ፡ ምክንያታዊ አስማሚ፣ የእውነታ መርህ።' },
        { en: 'Superego: Moral compass, ego-ideal and conscience.', am: 'ሱፐርኢጎ፡ የሞራል ዳኛ፣ ከፍተኛ እሴት እና ህሊና።' }
      ]
    },
    {
      id: 'sum-6-2',
      title: { en: 'The OCEAN Model', am: 'የOCEAN ሞዴል' },
      bullets: [
        { en: 'O - Openness to Experience', am: 'O - ለአዳዲስ ልምዶች ግልፅ መሆን' },
        { en: 'C - Conscientiousness', am: 'C - ጥንቁቅነትና ሀላፊነት አዋቂነት' },
        { en: 'E - Extraversion', am: 'E - ማህበራዊነትና ወገንተኝነት' },
        { en: 'A - Agreeableness', am: 'A - ቅንነትና ተባባሪነት' },
        { en: 'N - Neuroticism', am: 'N - ስሜታዊ አለመረጋጋት' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-6-1',
      number: 1,
      category: 'case_study',
      question: {
        en: 'Compare the parenting received by Tirhas and Chaltu from Chapter 6. How does this illustrate Rogers’ theory of positive regard?',
        am: 'በምዕራፍ 6 የተገለጹትን የጥርስ እና የጫልቱን አስተዳደግ አወዳድር። ይህ የካርል ሮጀርስን የአክብሮትና ፍቅር (Positive Regard) ንድፈ-ሀሳብ እንዴት ያብራራል?'
      },
      answer: {
        en: 'Tirhas received Unconditional Positive Regard: her parents assured her they would love and support her regardless of whether she chose mathematics or programming. This enabled her to develop into a fully functioning person with congruence between real and ideal self. In contrast, Chaltu received Conditional Positive Regard: her parents made it clear love was contingent on her becoming a medical doctor, producing intense anxiety and alienation from her authentic self.',
        am: 'ጥርስ ያለቅድመ-ሁኔታ የሚሰጥ ፍቅር አግኝታለች፡ ወላጆቿ የመረጠችውን ሙያ ብትከተልም እንደሚወዷት አረጋግጠውላታል። ይህም የተረጋጋ ስብዕና እንዲኖራት አድርጓል። ጫልቱ ግን በቅድመ-ሁኔታ የተገደበ ፍቅር አጋጠማት፡ ሀኪም ካልሆነች እንደማይወዷት ስለተሰማት የራሷን እውነተኛ ፍላጎት አፍና በጭንቀት እንድትኖር ተገዳለች።'
      },
      explanation: {
        en: 'Unconditional positive regard permits an individual to explore their full organic potential without terror of abandonment.',
        am: 'ያለቅድመ-ሁኔታ የሚሰጥ ፍቅር ግለሰቡ ሳይፈራ የራሱን ሙሉ አቅም እንዲያወጣ ነጻነት ይሰጠዋል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-6-1',
      question: {
        en: 'Which Freudian defense mechanism involves attributing one’s own unacceptable impulses or desires onto another person?',
        am: 'የራስን ተቀባይነት የሌለውን መጥፎ ስሜትና ጥፋት በሌላ ንፁህ ሰው ላይ ማላከክ የትኛው የመከላከያ ዘዴ ነው?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Regression', am: 'ወደ ኋላ መመለስ (Regression)' } },
        { id: 'opt-b', text: { en: 'Projection', am: 'በሌሎች ላይ ማላከክ (Projection)' } },
        { id: 'opt-c', text: { en: 'Sublimation', am: 'ማላቅ (Sublimation)' } },
        { id: 'opt-d', text: { en: 'Rationalization', am: 'ምክንያት ማበጀት (Rationalization)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Projection allows the ego to relieve anxiety by seeing its own unacceptable faults reflected in someone else.',
        am: 'ማላከክ (Projection) ኢጎ የራሱን ጉድለትና ክፉ ምኞት በሌላ ሰው ላይ በመለጠፍ ጭንቀቱን የሚያስተነፍስበት መንገድ ነው።'
      }
    }
  ],
  matching: [
    {
      id: 'm-6-1',
      concept: { en: 'Id', am: 'ኢድ' },
      definition: { en: 'Pleasure Principle; primitive unconscious drives', am: 'የደስታ መርህ፤ ደመ-ነፍሳዊ ፍላጎቶች' }
    },
    {
      id: 'm-6-2',
      concept: { en: 'Ego', am: 'ኢጎ' },
      definition: { en: 'Reality Principle; conscious mediator and executive', am: 'የእውነታ መርህ፤ ምክንያታዊ አስማሚ' }
    },
    {
      id: 'm-6-3',
      concept: { en: 'Superego', am: 'ሱፐርኢጎ' },
      definition: { en: 'Moral center; conscience and ego-ideal', am: 'የሞራል ዳኛ፤ ህሊና እና ቅጣት' }
    }
  ],
  flashcards: [
    {
      id: 'fc-6-1',
      termEn: 'Personality',
      termAm: 'ስብዕና',
      defEn: 'The unique, enduring pattern of thoughts, feelings, and actions characterizing a person.',
      defAm: 'አንድን ሰው ከሌሎች የሚለይ ዘላቂ የአስተሳሰብ፣ የስሜት እና የተግባር ድምር ውጤት።',
      chapter: 6
    },
    {
      id: 'fc-6-2',
      termEn: 'Sublimation',
      termAm: 'ማላቅ (ሰብሊሜሽን)',
      defEn: 'Channeling aggressive or sexual impulses into socially valued activities.',
      defAm: 'አሉታዊ የጥቃት ወይም የወሲብ ሀይልን ወደ ገንቢ እና የተመሰገነ ማህበራዊ ስራ መለወጥ።',
      chapter: 6
    }
  ]
};
