import { Chapter } from '../../types';

export const chapter11: Chapter = {
  id: 11,
  number: 11,
  title: {
    en: 'Social Skills',
    am: 'ማህበራዊ ክህሎቶች (Social Skills)'
  },
  universityAuthor: 'Habtamu Disasa (Dilla University)',
  overview: {
    en: 'Explores essential competencies for harmonious human interaction: Cultural Diversity & Multiculturalism, Gender and Social Inclusion, Interpersonal Communication, Social Influences (Conformity, Compliance, Obedience), Peer Pressure Navigation, Assertiveness, Conflict Resolution (Win-Win vs. Win-Lose vs. Lose-Lose), Teamwork, and Overcoming Adolescent Risky Behavior.',
    am: 'ከሰዎች ጋር በሰላም ለመኖር የሚያስፈልጉ ማህበራዊ ክህሎቶችን ይመረምራል፤ የባህል ብዝሃነት፣ የፆታ እኩልነት፣ የተግባቦት ጥበብ፣ የአቻ ግፊትን መቋቋም፣ ግልጽነትና ቆራጥነት (Assertiveness)፣ የግጭት አፈታት ስልቶች (አሸናፊ-አሸናፊ)፣ የቡድን ስራ እና አደገኛ ባህሪያትን ማሸነፍን ያብራራል።'
  },
  learningOutcomes: [
    { en: 'Understand multiculturalism, diversity management, and intercultural empathy in Ethiopia', am: 'የባህል ብዝሃነትን፣ ልዩነትን ማስተናገድን እና የጋራ መከባበርን በኢትዮጵያ አውድ መረዳት' },
    { en: 'Differentiate biological sex from gender institutions (individual, interactional, structural)', am: 'ተፈጥሮአዊ ፆታን (Sex) ከማህበራዊ ፆታ (Gender) መለየት' },
    { en: 'Analyze non-verbal communication cues and the 3 types of social influence', am: 'የሰውነት ቋንቋን እና ሦስቱን የማህበራዊ ተፅዕኖ ዓይነቶች መተንተን' },
    { en: 'Apply assertive communication and resistance strategies against toxic peer pressure', am: 'ቆራጥ ተግባቦትን (Assertiveness) እና አሉታዊ የአቻ ግፊትን መቋቋሚያ ስልቶችን መጠቀም' },
    { en: 'Distinguish Win-Win, Win-Lose, and Lose-Lose conflict resolution strategies', am: 'አሸናፊ-አሸናፊ፣ አሸናፊ-ተሸናፊ እና ተሸናፊ-ተሸናፊ የግጭት አፈታት ስልቶችን መለየት' }
  ],
  sections: [
    {
      id: 'sec-11-1',
      number: '11.1',
      title: {
        en: 'Cultural Diversity, Multiculturalism & Inclusion',
        am: 'የባህል ብዝሃነት፣ ብዙሀ-ባህላዊነት እና ማካተት'
      },
      paragraphs: [
        {
          id: 'p-11-1-1',
          subheading: { en: 'Diversity in the Ethiopian Context', am: 'ብዝሃነት በኢትዮጵያ አውድ' },
          en: 'Diversity is the defining reality of modern society. Ethiopia is rich with diverse ethnic groups, languages, traditions, and faiths. Culture provides the lens through which we interpret reality. Ethnocentrism (using our own culture as the sole benchmark to judge others) creates division; multiculturalism embraces and honors differences while finding common ground.',
          am: 'ብዝሃነት የዘመናዊ ማህበረሰብ እውነተኛ መገለጫ ነው። ኢትዮጵያ በብዙ ቋንቋዎች፣ ባህሎች፣ ብሔረሰቦች እና እምነቶች የበለፀገች ሀገር ናት። የራስን ባህል ብቻ እንደ ብቸኛ ትክክለኛ መለኪያ አድርጎ መቁጠር መለያየትን ያመጣል፤ ብዙሀ-ባህላዊነት ግን ልዩነቶችን እያከበረ የጋራ ሰላምን ይገነባል።'
        },
        {
          id: 'p-11-1-2',
          subheading: { en: 'Gender and Social Inclusion', am: 'የስርዓተ-ፆታ እኩልነት እና ማካተት' },
          en: 'While "sex" designates biological and anatomical differences, "gender" represents socially learned expectations, roles, and structural divisions. True development requires empowering women across education, economic enterprise, governance, and legal systems.',
          am: '"ሴክስ" (Sex) ተፈጥሮአዊ የአካልና የባዮሎጂ ልዩነት ሲሆን፣ "ጀንደር" (Gender) ግን በማህበረሰብ የሚሰጥ ሚና እና አመለካከት ነው። እውነተኛ ሀገራዊ እድገት ሴቶችን በትምህርት፣ በኢኮኖሚ፣ በአመራርና በህግ ስርዓት ውስጥ ሙሉ በሙሉ ማካተትን ይሻል።'
        }
      ]
    },
    {
      id: 'sec-11-2',
      number: '11.2',
      title: {
        en: 'Social Influence, Peer Pressure & Assertiveness',
        am: 'ማህበራዊ ተፅዕኖ፣ የአቻ ግፊት እና ቆራጥነት'
      },
      paragraphs: [
        {
          id: 'p-11-2-1',
          subheading: { en: 'Conformity, Compliance, and Peer Pressure', am: 'ተገዢነት፣ መከተል እና የአቻ ግፊት' },
          en: '• Conformity: Changing beliefs or behaviors to match group standards.\n• Compliance: Yielding to a direct request.\n• Obedience: Complying with an explicit order from an authority figure.\n• Peer Pressure: Influence exerted by friends. Can be positive (encouraging study habits) or negative (pushing towards alcohol, drugs, or academic dishonesty).',
          am: '• መከተል (Conformity)፡ ከቡድኑ ጋር ለመመሳሰል ባህሪን መቀየር።\n• ተገዢነት (Compliance)፡ የቀረበን ቀጥተኛ ጥያቄ ተቀብሎ መስማማት።\n• ታዛዥነት (Obedience)፡ ባለስልጣን ወይም መሪ ያዘዘውን መፈፀም።\n• የአቻ ግፊት (Peer Pressure)፡ ከጓደኞች የሚመጣ ተፅዕኖ ሲሆን፤ አዎንታዊ (ለትምህርት መበረታታት) ወይም አሉታዊ (ለሱስ መጋለጥ) ሊሆን ይችላል።'
        },
        {
          id: 'p-11-2-2',
          subheading: { en: 'Strategies to Handle Negative Peer Pressure', am: 'አሉታዊ የአቻ ግፊትን የመቋቋሚያ ስልቶች' },
          en: '1. Check in with personal values and potential long-term consequences.\n2. Use the "Delay Tactic" ("Let me think about that and get back to you").\n3. Practice firm, clear refusal ("No thanks", "I do not drink").\n4. Use a supportive buddy system.\n5. Give yourself permission to walk away from uncomfortable scenes.',
          am: '1. የራስህን ዋና እሴቶች እና የድርጊቱን የረጅም ጊዜ መዘዝ አስብ።\n2. ጊዜ የመግዣ ዘዴን ተጠቀም ("ላስብበትና መልስ እሰጥሃለሁ")።\n3. ግልጽና የማያወላውል እምቢተኝነትን ተለማመድ ("አመሰግናለሁ፣ አልጠጣም")።\n4. የሚደግፍህ እና ተመሳሳይ አቋም ያለው ጓደኛ ያዝ።\n5. የማይመች ሁኔታ ካጋጠመህ ከዚያ ቦታ የመራቅ መብትህን ተጠቀም።'
        },
        {
          id: 'p-11-2-3',
          subheading: { en: 'Assertiveness: Direct and Respectful Communication', am: 'ቆራጥነት (Assertiveness)፡ ግልጽ እና አክባሪ ተግባቦት' },
          en: 'Assertiveness is expressing your opinions, feelings, and needs directly and honestly while respecting the dignity and rights of others. It avoids both PASSIVE behavior (suppressing your thoughts, leading to low self-esteem) and AGGRESSIVE behavior (violating and bulldozing others).',
          am: 'ቆራጥነት (Assertiveness) ማለት የሌሎችን ክብርና መብት ሳይነኩ የራስን ስሜት፣ እምነት እና ፍላጎት በግልጽና በቅንነት መናገር ነው። ተገዢ ከመሆን (ስሜትን አፍኖ መያዝ) እና ጠበኛ ከመሆን (በሌሎች ላይ መጮህና መበደል) የራቀ ሚዛናዊ የአኗኗር ጥበብ ነው።'
        }
      ]
    },
    {
      id: 'sec-11-3',
      number: '11.3',
      title: {
        en: 'Conflict Resolution and Teamwork',
        am: 'የግጭት አፈታት ስልቶች እና የቡድን ስራ'
      },
      paragraphs: [
        {
          id: 'p-11-3-1',
          subheading: { en: 'Three Approaches to Conflict Resolution', am: 'ሦስቱ የግጭት አፈታት ስልቶች' },
          en: 'Conflict is a natural friction of human life. The three resolution frameworks:\n• Win-Lose: One party triumphs while the other is defeated, leaving lingering resentment.\n• Lose-Lose: Both parties compromise down or mutually destroy value.\n• Win-Win (Collaborative): Reframing the dispute as "We together versus the Problem", uncovering creative solutions meeting the underlying interests of both sides.',
          am: 'ግጭት በሰው ልጆች ግንኙነት ውስጥ ተፈጥሮአዊ ክስተት ነው። ሦስቱ የአፈታት መንገዶች፡\n• አሸናፊ-ተሸናፊ (Win-Lose)፡ አንዱ አሸንፎ ሌላው ሲሸነፍ፤ ቂምና ቁጣን ያስከትላል።\n• ተሸናፊ-ተሸናፊ (Lose-Lose)፡ ሁለቱም ወገኖች ተጎጂ ሆነው ሲወጡ።\n• አሸናፊ-አሸናፊ (Win-Win)፡ ግጭቱን እንደ ጦርነት ሳይሆን እንደ የጋራ ችግር በመመልከት ሁለቱንም የሚያረካ የጋራ መፍትሄ መፍጠር።'
        },
        {
          id: 'p-11-3-2',
          subheading: { en: 'Hallmarks of Effective Teamwork', am: 'ውጤታማ የቡድን ስራ መገለጫዎች' },
          en: 'Teams succeed when they cultivate:\n• Complementary skills matching task requirements.\n• Shared vision and joint mutual accountability.\n• Psychological safety and candid, honest communication.\n• Shared joy in mutual accomplishments.',
          am: 'ውጤታማ ቡድን የሚገነባው በሚከተሉት ነው፡\n• የተለያየ ተሰጥኦ ያላቸው አባላትን ማቀናጀት።\n• የጋራ ግብ እና የጋራ ተጠያቂነት መኖር።\n• አባላት ሀሳባቸውን በነጻነት የሚገልጹበት ግልጽነት እና እምነት።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-11-1',
      title: { en: 'Social Skills Highlights', am: 'የማህበራዊ ክህሎቶች ማጠቃለያ' },
      bullets: [
        { en: 'Multiculturalism values diverse contributions within an inclusive context.', am: 'ብዙሀ-ባህላዊነት የሁሉንም እኩል አስተዋፅዖ ያከብራል።' },
        { en: 'Assertiveness: Confident, direct honesty without infringing on others.', am: 'ቆራጥነት፡ የሌሎችን መብት ሳይነኩ የራስን ሀሳብ በግልጽ መናገር።' },
        { en: 'Win-Win Conflict Resolution: "We together vs. the problem".', am: 'አሸናፊ-አሸናፊ ግጭት አፈታት፡ "እኛ በጋራ ከችግሩ ጋር" የሚል መርህ።' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-11-1',
      number: 1,
      category: 'case_study',
      question: {
        en: 'Analyze the interaction between Obsan and Challachew in Section 11.6. Why is Obsan\'s response considered a masterclass in assertiveness and emotional self-control?',
        am: 'በክፍል 11.6 የቀረበውን የኦብሰን እና የጨላጨውን ምልልስ ተንትነው። የኦብሰን ምላሽ የስሜት ቁጥጥር እና የቆራጥነት (Assertiveness) ማሳያ የሆነው ለምንድን ነው?'
      },
      answer: {
        en: 'When Challachew responded with hostile insult ("I am coming from your mother\'s womb"), Obsan did not react aggressively with violence or insults, nor did he shrink away in passive shame. Instead, he calmly reframed the hostility with grace and polite dignity: "Okay, you are my brother. I wish you good time." He preserved his self-respect, defused the provocation, and demonstrated superior emotional intelligence.',
        am: 'ጨላጨው "ከእናትህ ማህፀን ነው የመጣሁት" ብሎ በስድብ ሲያጠቃው፣ ኦብሰን በቁጣ ከመማታት ወይም ከመሳደብ ተቆጥቧል፤ አልተሸማቀቀምም። ይልቁንም በታላቅ ጨዋነትና መረጋጋት "እንግዲያው ወንድሜ ነህ፣ መልካም ጊዜ ይሁንልህ" በማለት ክብሩን ጠብቆ ቁጣውን አበርዷል። ይህ ከፍተኛ ስሜታዊ ብስለትን ያሳያል።'
      },
      explanation: {
        en: 'Assertiveness maintains personal dignity without mirroring the toxic hostility of an aggressor.',
        am: 'ቆራጥነት የስድብን ኃይል ሳያንፀባርቁ የራስን ሰላምና ክብር የማስጠበቅ ጥበብ ነው።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-11-1',
      question: {
        en: 'Which conflict resolution approach seeks to reframe disputes as "We together versus the Problem" to satisfy both parties?',
        am: 'ክርክርን "እኛ በጋራ ከችግሩ ጋር" በሚል እይታ በመመልከት ሁለቱንም ወገኖች የሚያረካ መፍትሄ የሚፈልገው የትኛው ነው?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Win-Lose Strategy', am: 'አሸናፊ-ተሸናፊ ስልት' } },
        { id: 'opt-b', text: { en: 'Lose-Lose Strategy', am: 'ተሸናፊ-ተሸናፊ ስልት' } },
        { id: 'opt-c', text: { en: 'Win-Win (Collaborative) Strategy', am: 'አሸናፊ-አሸናፊ (የትብብር) ስልት' } },
        { id: 'opt-d', text: { en: 'Avoidance Strategy', am: 'የመሸሽ ስልት' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'The Win-Win collaborative model strives to maximize mutual goals through empathetic problem-solving.',
        am: 'አሸናፊ-አሸናፊ ስልት ሁለቱንም ተጠቃሚ የሚያደርግ የጋራ መፍትሄ ያበጃል።'
      }
    }
  ],
  matching: [
    {
      id: 'm-11-1',
      concept: { en: 'Conformity', am: 'መከተል (ኮንፎርሚቲ)' },
      definition: { en: 'Yielding to real or imagined group social pressure', am: 'ከቡድኑ ጋር ለመስማማት አቋምን ማስተካከል' }
    },
    {
      id: 'm-11-2',
      concept: { en: 'Assertiveness', am: 'ቆራጥነት (አሰርቲቭነስ)' },
      definition: { en: 'Direct, honest expression respecting self and others', am: 'የራስንና የሌሎችን ክብር የጠበቀ ግልጽ ተግባቦት' }
    }
  ],
  flashcards: [
    {
      id: 'fc-11-1',
      termEn: 'Assertiveness',
      termAm: 'ቆራጥነት',
      defEn: 'Communicating feelings, beliefs, and limits honestly and respectfully.',
      defAm: 'የራስን ስሜትና አቋም በግልጽ፣ በቅንነት እና የሌሎችን ክብር በጠበቀ መልኩ መግለጽ።',
      chapter: 11
    }
  ]
};
