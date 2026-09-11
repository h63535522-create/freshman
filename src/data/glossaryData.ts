import { GlossaryTerm } from '../types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'g-1',
    english: 'Psychology',
    amharic: 'ስነ-ልቦና (ሳይኮሎጂ)',
    category: 'Foundations',
    definitionEn: 'The scientific study of human behavior and mental processes.',
    definitionAm: 'የሰው ልጅ ባህሪ እና ከበስተጀርባ ያሉትን የአዕምሮ ሂደቶች በሳይንሳዊ መንገድ ማጥናት።',
    chapter: 1
  },
  {
    id: 'g-2',
    english: 'Objective Introspection',
    amharic: 'ኦብጀክቲቭ ኢንትሮስፔክሽን (ራስን ማስተዋል)',
    category: 'Foundations',
    definitionEn: 'A process developed by Wilhelm Wundt of examining and measuring one’s own mental thoughts and conscious activities.',
    definitionAm: 'ዊልሄልም ቩንት የፈጠረው የራስን የህሊና እና የስሜት ልምዶች በሳይንሳዊ መንገድ የመመርመሪያ ስልት።',
    chapter: 1
  },
  {
    id: 'g-3',
    english: 'Independent Variable',
    amharic: 'ራሱን የቻለ ተለዋዋጭ',
    category: 'Research',
    definitionEn: 'The variable that is systematically manipulated by the experimenter to see if it causes changes in the dependent variable.',
    definitionAm: 'በሙከራ ምርምር ውስጥ ተመራማሪው ውጤቱን ለማየት ሆን ብሎ የሚቀያይረው መንስኤ።',
    chapter: 1
  },
  {
    id: 'g-4',
    english: 'Dependent Variable',
    amharic: 'ጥገኛ ተለዋዋጭ',
    category: 'Research',
    definitionEn: 'The variable that is measured and whose value is expected to depend on changes in the independent variable.',
    definitionAm: 'በራሱ የቻለው ተለዋዋጭ ለውጥ ምክንያት የሚለካው ወይም የሚመጣው ውጤት።',
    chapter: 1
  },
  {
    id: 'g-5',
    english: 'Sensation',
    amharic: 'ስሜት (ሴንሴሽን)',
    category: 'Sensation & Perception',
    definitionEn: 'The detection of raw environmental physical energy by sensory receptor cells and its conversion into neural impulses.',
    definitionAm: 'የስሜት ህዋሳት ከአካባቢ የሚመጣን አካላዊ ጉልበት የመቀበልና ወደ ነርቭ መልዕክት የመቀየር ሂደት።',
    chapter: 2
  },
  {
    id: 'g-6',
    english: 'Perception',
    amharic: 'ግንዛቤ (ፐርሴፕሽን)',
    category: 'Sensation & Perception',
    definitionEn: 'The mental process that organizes and interprets sensations into meaningful experiences.',
    definitionAm: 'አእምሮ የስሜት መረጃዎችን አቀናጅቶ ትርጉም የሚሰጥበት የስነ-ልቦና ሂደት።',
    chapter: 2
  },
  {
    id: 'g-7',
    english: 'Absolute Threshold (Limen)',
    amharic: 'ፍፁማዊ ደፍ (ሊመን)',
    category: 'Sensation & Perception',
    definitionEn: 'The lowest level of a stimulus that can be detected 50 percent of the time.',
    definitionAm: 'ማነቃቂያን በ50% ዕድል ለማስተዋል የሚያስፈልግ አነስተኛው የጉልበት ወይም የጥንካሬ መጠን።',
    chapter: 2
  },
  {
    id: 'g-8',
    english: 'Weber’s Law',
    amharic: 'የዌበር ህግ',
    category: 'Sensation & Perception',
    definitionEn: 'The principle that the just noticeable difference (JND) is a constant proportion of the initial stimulus.',
    definitionAm: 'የልዩነት ደፍ ከመነሻው ማነቃቂያ ጋር ቋሚ የመቶኛ ንፅፅር አለው የሚል መርህ።',
    chapter: 2
  },
  {
    id: 'g-9',
    english: 'Sensory Adaptation',
    amharic: 'የስሜት መላመድ',
    category: 'Sensation & Perception',
    definitionEn: 'Diminished sensitivity to a stimulus as a consequence of constant, unchanging stimulation.',
    definitionAm: 'ላልተለወጠ እና ቋሚ ለሆነ ማነቃቂያ የስሜት ህዋሳት የሚሰጡት ምላሽ እየቀነሰ መሄዱ።',
    chapter: 2
  },
  {
    id: 'g-10',
    english: 'Classical Conditioning',
    amharic: 'ክላሲካል ኮንዲሽኒንግ',
    category: 'Learning',
    definitionEn: 'Learning where a neutral stimulus acquires the ability to produce a response by being repeatedly paired with an unconditioned stimulus.',
    definitionAm: 'ተፈጥሮአዊ ያልሆነ ማነቃቂያ ከተፈጥሮአዊ ማነቃቂያ ጋር በመጣመር ተፈጥሮአዊ ምላሽን እንዲሰጥ የማድረግ መማር።',
    chapter: 3
  },
  {
    id: 'g-11',
    english: 'Operant Conditioning',
    amharic: 'ኦፔራንት ኮንዲሽኒንግ',
    category: 'Learning',
    definitionEn: 'Learning in which voluntary behavior is strengthened or weakened by reinforcing or punishing consequences.',
    definitionAm: 'ፈቃደኛ ባህሪ በሚያስከትለው ውጤት (ማጠናከሪያ ወይም ቅጣት) አማካኝነት የሚቀረፅበት መማር።',
    chapter: 3
  },
  {
    id: 'g-12',
    english: 'Shaping',
    amharic: 'ቅርፅ ማስያዝ (ሼፒንግ)',
    category: 'Learning',
    definitionEn: 'An operant conditioning procedure reinforcing successive approximations toward a desired target behavior.',
    definitionAm: 'ደረጃ በደረጃ ወደ ተፈለገው ባህሪ የተቃረቡ ድርጊቶችን እያበረታቱ አዲስ ውስብስብ ባህሪን የማስተማር ዘዴ።',
    chapter: 3
  },
  {
    id: 'g-13',
    english: 'Latent Learning',
    amharic: 'ድብቅ መማር',
    category: 'Learning',
    definitionEn: 'Learning that occurs without reinforcement and is not exhibited until an incentive is provided.',
    definitionAm: 'ያለ ማጠናከሪያ የተገኘ ነገር ግን ማበረታቻ እስኪቀርብ ድረስ በግልጽ የማይታይ መማር።',
    chapter: 3
  },
  {
    id: 'g-14',
    english: 'Chunking',
    amharic: 'መቧደን (ቻንኪንግ)',
    category: 'Memory',
    definitionEn: 'Combining small pieces of information into larger meaningful clusters to expand working memory capacity.',
    definitionAm: 'የአጭር-ጊዜ ትውስታን አቅም ለማሳደግ የተበታተኑ መረጃዎችን ወደ ትርጉም ያላቸው ቡድኖች የማደራጀት ስልት።',
    chapter: 4
  },
  {
    id: 'g-15',
    english: 'Serial Position Effect',
    amharic: 'የቅደም ተከተል ተፅዕኖ',
    category: 'Memory',
    definitionEn: 'The tendency to recall the first (primacy) and last (recency) items in a list more accurately than middle items.',
    definitionAm: 'በዝርዝር ውስጥ መጀመሪያና መጨረሻ ላይ ያሉትን ቃላት ከመሃል ካሉት በበለጠ የማስታወስ አዝማሚያ።',
    chapter: 4
  },
  {
    id: 'g-16',
    english: 'Homeostasis',
    amharic: 'ሆሚዮስታሲስ (ተፈጥሮአዊ ሚዛን)',
    category: 'Motivation',
    definitionEn: 'The biological tendency of the body to maintain balanced and stable internal physiological conditions.',
    definitionAm: 'የሰውነት ውስጣዊ አካላዊ ሚዛኑን ጠብቆ የማቆየት ተፈጥሮአዊ ሂደት።',
    chapter: 5
  },
  {
    id: 'g-17',
    english: 'Self-Actualization',
    amharic: 'የራስን አቅም ማሳካት',
    category: 'Motivation & Personality',
    definitionEn: 'Maslow\'s highest developmental goal: the realization and fulfillment of one\'s ultimate human potential.',
    definitionAm: 'በማስሎው የፍላጎት እርከን አናት ላይ ያለ የሰውን ልጅ የተፈጥሮ አቅምና ተሰጥኦ ወደ ላቀ ደረጃ የማድረስ ግብ።',
    chapter: 5
  },
  {
    id: 'g-18',
    english: 'Id, Ego, Superego',
    amharic: 'ኢድ፣ ኢጎ፣ ሱፐርኢጎ',
    category: 'Personality',
    definitionEn: 'Freud\'s psychoanalytic personality components: pleasure-driven id, reality-driven ego, and moral-driven superego.',
    definitionAm: 'የፍሮይድ ሦስቱ የስብዕና ክፍሎች፡ የደስታ ምንጩ ኢድ፣ ምክንያታዊው ኢጎ፣ እና የሞራል ዳኛው ሱፐርኢጎ።',
    chapter: 6
  },
  {
    id: 'g-19',
    english: 'Unconditional Positive Regard',
    amharic: 'ያለቅድመ-ሁኔታ የሚሰጥ ፍቅርና አክብሮት',
    category: 'Personality',
    definitionEn: 'Carl Rogers\' concept of total acceptance, warmth, and love granted to an individual with no attached conditions.',
    definitionAm: 'ካርል ሮጀርስ እንዳለው ያለምንም መስፈርትና ገደብ ለሰው ልጅ የሚሰጥ እውነተኛ ፍቅርና አክብሮት።',
    chapter: 6
  },
  {
    id: 'g-20',
    english: 'Psychotherapy',
    amharic: 'ሳይኮቴራፒ (የስነ-ልቦና ህክምና)',
    category: 'Clinical',
    definitionEn: 'Psychological intervention and counseling delivered by trained therapists to treat mental distress.',
    definitionAm: 'የሰለጠኑ የስነ-ልቦና ሀኪሞች የአእምሮና የባህሪ ችግሮችን በምክርና በሳይንሳዊ ስልት የሚያክሙበት ሂደት።',
    chapter: 7
  },
  {
    id: 'g-21',
    english: 'Resilience',
    amharic: 'ጥንካሬ እና ማገገም (ሪዚሊየንስ)',
    category: 'Life Skills',
    definitionEn: 'The capacity to successfully adapt and bounce back in the face of adversity, trauma, and hardship.',
    definitionAm: 'ከከባድ መከራ፣ ጭንቀትና ፈተና በኋላ መልሶ የማገገም እና የመቆም ጥንካሬ።',
    chapter: 9
  },
  {
    id: 'g-22',
    english: 'Assertiveness',
    amharic: 'ቆራጥነት (አሰርቲቭነስ)',
    category: 'Social Skills',
    definitionEn: 'Expressing thoughts, feelings, and limits directly and honestly without infringing upon the rights of others.',
    definitionAm: 'የሌሎችን ክብርና መብት ሳይጥሱ የራስን አቋም፣ ስሜትና እምነት በግልጽ የመናገር ጥበብ።',
    chapter: 11
  },
  {
    id: 'g-en-1',
    english: 'Transient',
    amharic: 'ጊዜያዊ (ቶሎ የሚያልፍ)',
    category: 'Study Skills',
    definitionEn: 'Lasting only for a short time; impermanent like spoken words in a lecture.',
    definitionAm: 'ለአጭር ጊዜ ብቻ የሚቆይ፤ እንደ ንግግር ቶሎ የሚጠፋ።',
    chapter: 1
  },
  {
    id: 'g-en-2',
    english: 'Verbatim',
    amharic: 'ቃል በቃል',
    category: 'Study Skills',
    definitionEn: 'In exactly the same words as were used originally.',
    definitionAm: 'የተነገረውን ወይም የተጻፈውን ልክ እንዳለ ቃል በቃል መውሰድ።',
    chapter: 1
  },
  {
    id: 'g-en-3',
    english: 'Skimming',
    amharic: 'ስኪሚንግ (በጨረፍታ መቃኘት)',
    category: 'Study Skills',
    definitionEn: 'Reading quickly to get the main idea or general overview of a text.',
    definitionAm: 'የአንድን ጽሑፍ አጠቃላይ ዋና ሀሳብ በጨረፍታ ለመረዳት በፍጥነት የማንበብ ዘዴ።',
    chapter: 1
  },
  {
    id: 'g-en-4',
    english: 'Scanning',
    amharic: 'ስካኒንግ (ነጥብ ፈልጎ ማውጣት)',
    category: 'Study Skills',
    definitionEn: 'Reading rapidly in order to find specific facts or pieces of information.',
    definitionAm: 'የተወሰነ ቁጥር፣ ስም ወይም መረጃን ብቻ ፈልጎ ለማግኘት የሚደረግ ፈጣን ንባብ።',
    chapter: 1
  },
  {
    id: 'g-en-5',
    english: 'Sportsmanship',
    amharic: 'ስፖርታዊ ጨዋነት',
    category: 'Health & Fitness',
    definitionEn: 'Fair, generous, and polite behavior shown toward opponents in athletic sports.',
    definitionAm: 'በስፖርት ውድድር ወቅት ለተጋጣሚ የሚታይ ፍትሃዊ እና ጨዋ አክብሮት።',
    chapter: 2
  },
  {
    id: 'g-en-6',
    english: 'Conditionals',
    amharic: 'የቅድመ-ሁኔታ አረፍተ ነገሮች',
    category: 'Grammar',
    definitionEn: 'Grammatical structures expressing hypothetical or real conditions and their consequences.',
    definitionAm: 'አንድ ሁኔታ ቢፈጠር ሊከተል የሚችለውን ውጤት የሚገልጹ አረፍተ ነገሮች።',
    chapter: 2
  },
  {
    id: 'g-en-7',
    english: 'Egalitarianism',
    amharic: 'እኩልነት (ኢጋሊታሪያኒዝም)',
    category: 'Cultural Values',
    definitionEn: 'The belief that all people are fundamentally equal and deserve equal rights and opportunities.',
    definitionAm: 'ሁሉም የሰው ልጆች በእኩልነት ሊኖሩና እኩል ዕድል ሊኖራቸው ይገባል የሚል መርህ።',
    chapter: 3
  },
  {
    id: 'g-en-8',
    english: 'Intentional Community',
    amharic: 'ሆን ተብሎ የተመሰረተ ማህበረሰብ',
    category: 'Cultural Values',
    definitionEn: 'A planned residential community designed to have a high degree of social cohesion and teamwork around shared ideals.',
    definitionAm: 'በጋራ መርሆዎችና እሴቶች ዙሪያ የተሰባሰበ ሆን ተብሎ የተመሰረተ ህብረተሰብ።',
    chapter: 3
  },
  {
    id: 'g-en-9',
    english: 'Denotation',
    amharic: 'ቀጥተኛ ፍቺ (ዲኖቴሽን)',
    category: 'Vocabulary',
    definitionEn: 'The literal, objective dictionary meaning of a word, devoid of emotional feelings.',
    definitionAm: 'የአንድ ቃል ቀጥተኛ እና ገለልተኛ የመዝገበ-ቃላት ፍቺ።',
    chapter: 4
  },
  {
    id: 'g-en-10',
    english: 'Connotation',
    amharic: 'ተጓዳኝ ፍቺ (ኮኖቴሽን)',
    category: 'Vocabulary',
    definitionEn: 'The emotional attitude, cultural impression, or nuance invoked by a word.',
    definitionAm: 'አንድ ቃል ከቀጥተኛ ፍቺው ባሻገር በአዕምሮ ውስጥ የሚፈጥረው ስሜት።',
    chapter: 4
  },
  {
    id: 'g-en-11',
    english: 'Population Density',
    amharic: 'የህዝብ ጥግግት',
    category: 'Population',
    definitionEn: 'The measurement of population per unit area, typically per square kilometer or mile.',
    definitionAm: 'በአንድ የተወሰነ የመሬት ስፋት ላይ የሚኖሩ ሰዎች ብዛት ጥምርታ።',
    chapter: 5
  },
  {
    id: 'g-en-12',
    english: 'Population Pyramid',
    amharic: 'የስነ-ህዝብ ፒራሚድ',
    category: 'Population',
    definitionEn: 'A graphical illustration of the distribution of a population by age groups and sex.',
    definitionAm: 'የአንድን ሀገር ህዝብ በዕድሜ ክልልና በፆታ የሚያሳይ የግራፍ ሰንጠረዥ።',
    chapter: 5
  },
  {
    id: 'g-en-13',
    english: 'Collocation',
    amharic: 'የቃላት ቅንጅት (ኮሎኬሽን)',
    category: 'Vocabulary',
    definitionEn: 'A predictable sequence or habitual pairing of words that co-occur naturally in English.',
    definitionAm: 'በእንግሊዝኛ በተፈጥሮ አብረው የሚጣመሩ ቃላት ስብስብ (ለምሳሌ make an effort)።',
    chapter: 5
  },
  {
    id: 'g-en-14',
    english: 'Passive Voice',
    amharic: 'ተደራጊ ድምፅ (ፓሲቭ ቮይስ)',
    category: 'Grammar',
    definitionEn: 'A grammatical voice where the grammatical subject receives the action performed by the verb.',
    definitionAm: 'ባለቤቱ የድርጊቱ ፈጻሚ ሳይሆን ተቀባይ የሚሆንበት የአረፍተ ነገር ቅርፅ (be + V3)።',
    chapter: 5
  }
];
