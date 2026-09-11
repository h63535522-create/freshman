import { Chapter } from '../../types';

export const chapter7: Chapter = {
  id: 7,
  number: 7,
  title: {
    en: 'Psychological Disorders and Treatment Techniques',
    am: 'ስነ-ልቦናዊ ችግሮች እና የህክምና ዘዴዎች (Disorders & Treatments)'
  },
  universityAuthor: 'Aemero Asmamaw (University of Gondar)',
  overview: {
    en: 'Explores mental health disorders, their diagnostic criteria (abnormality, maladaptiveness, personal distress), etiological perspectives (biological, psychodynamic, learning, cognitive), major classifications (mood disorders, anxiety disorders, personality disorders), and psychotherapy approaches and modalities.',
    am: 'የአእምሮ ጤና እክሎችን፣ የመለያ መስፈርቶችን (ያልተለመደ መሆን፣ አኗኗርን ማወክ፣ የግል ስቃይ)፣ አራቱን መንስኤዎች፣ ዋና ዋና የህመም ዓይነቶችን (የስሜት፣ የጭንቀትና የስብዕና መታወክ) እና የስነ-ልቦና ህክምና (ሳይኮቴራፒ) ዘዴዎችን ይተነትናል።'
  },
  learningOutcomes: [
    { en: 'Identify the 3 criteria for psychological disorders: Abnormality, Maladaptiveness, and Personal Distress', am: 'ሦስቱን የበሽታ መለያ መስፈርቶች (ያልተለመደነት፣ የአኗኗር መስተጓጎል እና የግል ጭንቀት) መለየት' },
    { en: 'Contrast Biological, Psychoanalytic, Learning, and Cognitive causes of psychopathology', am: 'ባዮሎጂካል፣ ስነ-ተንታኝ፣ የመማር እና አስተውሎታዊ የበሽታ መንስኤዎችን ማነፃፀር' },
    { en: 'Differentiate Mood Disorders: Major Depression, Dysthymia, and Bipolar I & II', am: 'የስሜት መዛባቶችን (ከባድ ድብርት፣ ዳይስቲሚያ፣ ባይፖላር) መለየት' },
    { en: 'Recognize Anxiety Disorders: Panic Disorder, Agoraphobia, Phobias, OCD, PTSD, and GAD', am: 'የጭንቀት በሽታዎችን (ድንጋጤ፣ አጎራፎቢያ፣ ፎቢያ፣ ኦሲዲ፣ ፒቲኤስዲ) ማወቅ' },
    { en: 'Describe 9 personality disorders and core psychotherapy modalities (Individual, Group, Family)', am: '9ኙን የስብዕና መዛባቶች እና የሳይኮቴራፒ ህክምና ዓይነቶችን ማብራራት' }
  ],
  sections: [
    {
      id: 'sec-7-1',
      number: '7.1',
      title: {
        en: 'Nature and Criteria of Psychological Disorders',
        am: 'የስነ-ልቦናዊ መታወክ ምንነት እና መለያ መስፈርቶች'
      },
      paragraphs: [
        {
          id: 'p-7-1-1',
          subheading: { en: 'Definition of Psychological Disorder', am: 'የስነ-ልቦናዊ መታወክ ትርጓሜ' },
          en: 'A psychological disorder is a condition characterized by abnormal thoughts, feelings, and behaviors. Psychopathology is the scientific study of psychological disorders, including symptoms, etiology (causes), and treatment.',
          am: 'ስነ-ልቦናዊ መታወክ ማለት ባልተለመዱ እና ጎጂ በሆኑ አስተሳሰቦች፣ ስሜቶች እና ድርጊቶች የሚገለጽ የአእምሮ ጤና ችግር ነው። ሳይኮፓቶሎጂ የእነዚህን ችግሮች ምልክቶች፣ መንስኤዎች እና ህክምናዎች የሚያጠና ሳይንስ ነው።'
        },
        {
          id: 'p-7-1-2',
          subheading: { en: 'The Three Universal Diagnostic Criteria', am: 'ሦስቱ ዓለም አቀፍ የመለያ መስፈርቶች' },
          en: '1. Abnormality: The behavior deviates significantly from statistical averages or qualitative cultural norms of society.\n2. Maladaptiveness: The behavior impairs or disrupts the individual’s daily social, academic, or occupational functioning.\n3. Personal Distress: The individual suffers subjective emotional pain, profound anxiety, or feelings of despair.',
          am: '1. ያልተለመደነት (Abnormality)፡ ድርጊቱ ከህብረተሰቡ ባህል፣ ደንብ ወይም አማካይ ሁኔታ በእጅጉ ያፈነገጠ ሲሆን።\n2. አኗኗርን ማወክ (Maladaptiveness)፡ ግለሰቡ ትምህርቱን፣ ስራውን ወይም ማህበራዊ ህይወቱን እንዳይመራ ሲያስተጓጉልበት።\n3. የግል ስቃይ (Personal Distress)፡ በግለሰቡ ላይ ከፍተኛ የውስጥ ጭንቀት፣ ስቃይ ወይም የተስፋ መቁረጥ ስሜት ሲፈጥር።'
        }
      ]
    },
    {
      id: 'sec-7-2',
      number: '7.2',
      title: {
        en: 'Major Categories of Psychological Disorders',
        am: 'ዋና ዋና የስነ-ልቦናዊ መታወክ ዓይነቶች'
      },
      paragraphs: [
        {
          id: 'p-7-2-1',
          subheading: { en: '1. Mood Disorders', am: '1. የስሜት መዛባቶች (Mood Disorders)' },
          en: '• Major Depressive Disorder: Chronic despair, profound sadness, loss of interest in all pleasures (anhedonia), sleep disturbances, worthlessness, and suicidal thoughts.\n• Dysthymia: Chronic, milder low mood lasting two or more years.\n• Bipolar Disorder: Severe cycling between manic episodes (racing thoughts, grandiose delusions, hyper-energy) and deep depressive crashes.',
          am: '• ከባድ ድብርት (Major Depression)፡ ጥልቅ የሀዘን ስሜት፣ ለምንም ነገር ፍላጎት ማጣት፣ እንቅልፍ ማጣት፣ ተስፋ መቁረጥ እና የራስን ህይወት የማጥፋት ሀሳብ።\n• ዳይስቲሚያ (Dysthymia)፡ ቀለል ያለ ነገር ግን ለሁለት ዓመትና ከዚያ በላይ የሚቆይ ተደጋጋሚ የድብርት ስሜት።\n• ባይፖላር (Bipolar)፡ በከፍተኛ የደስታና የኃይል ንረት (ሜኒያ) እና በጥልቅ ድብርት መካከል መወዛወዝ።'
        },
        {
          id: 'p-7-2-2',
          subheading: { en: '2. Anxiety Disorders', am: '2. የጭንቀት በሽታዎች (Anxiety Disorders)' },
          en: '• Panic Disorder: Sudden terrifying panic attacks with heart palpitations, dizziness, and fear of impending death.\n• Agoraphobia: Intense fear of public places or crowds where escape would be difficult.\n• Phobias: Irrational, intense fears of specific objects or social evaluation (Social Phobia).\n• OCD: Intrusive persistent thoughts (obsessions) compelling repetitive rituals (compulsions, e.g., excessive hand washing).\n• PTSD: Reliving severe trauma through intrusive flashbacks, nightmares, and emotional numbing.',
          am: '• የድንጋጤ መታወክ (Panic Disorder)፡ በድንገት የሚመጣ ከፍተኛ ፍርሃት፣ የልብ ምት መናር፣ ማዞር እና "ልሞት ነው" የሚል ስሜት።\n• አጎራፎቢያ (Agoraphobia)፡ ከሰው መሃል መውጣት ወይም ማምለጥ የማይቻልበትን ቦታ መፍራት።\n• ፎቢያ (Phobias)፡ ምክንያታዊ ያልሆነ ከባድ ፍርሃት (ለምሳሌ ከፍታ፣ ጨለማ ወይም ማህበራዊ መድረክ)።\n• ኦሲዲ (OCD)፡ የማይቆጣጠሩት አስጨናቂ ሀሳብ (Obsession) እና ያንን ለማብረድ የሚደረግ ተደጋጋሚ ድርጊት (Compulsion - እጅን ደጋግሞ መታጠብ)።\n• ፒቲኤስዲ (PTSD)፡ ከአስከፊ አደጋ በኋላ የሚከሰት አስፈሪ ቅዠት፣ ድንጋጤ እና ትዝታ።'
        },
        {
          id: 'p-7-2-3',
          subheading: { en: '3. Personality Disorders', am: '3. የስብዕና መዛባቶች (Personality Disorders)' },
          en: 'Rigid, inflexible patterns of thinking and behaving. Includes:\n• Paranoid: Pervasive distrust and suspiciousness of others\' motives.\n• Antisocial: Callous disregard for others\' rights, deceitfulness, zero remorse.\n• Borderline: Extreme emotional instability, fear of abandonment, volatile relationships.\n• Narcissistic: Grandiose self-importance, extreme need for admiration, zero empathy.',
          am: 'ግትር እና ጤናማ ያልሆነ የአስተሳሰብና የባህሪ ልምምድ ነው፡\n• ፓራኖይድ፡ በሰዎች ላይ ጥርጣሬ እና አለማመን።\n• አንቲሶሻል፡ የሌሎችን መብት መጣስ፣ ማታለል፣ ምንም የፀፀት ስሜት አለመሰማት።\n• ቦርደርላይን፡ የስሜት አለመረጋጋት፣ መተው እንዳይደርስበት መፍራት፣ ፈጣን የቁጣና የፍቅር መወዛወዝ።\n• ናርሲሲስቲክ፡ የራስን ክብር አጋኖ ማየት፣ አድናቆትን አጥብቆ መፈለግ፣ ለሌሎች አለማዘን።'
        }
      ]
    },
    {
      id: 'sec-7-3',
      number: '7.3',
      title: {
        en: 'Psychotherapy Approaches and Modalities',
        am: 'የሳይኮቴራፒ ህክምና አቀራረቦች እና ዘዴዎች'
      },
      paragraphs: [
        {
          id: 'p-7-3-1',
          subheading: { en: 'Therapeutic Approaches: Cognitive, Behavioral, Dynamic', am: 'የህክምና አቀራረቦች፡ ኮግኒቲቭ፣ ባህሪያዊ እና ዳይናሚክ' },
          en: '• Cognitive Therapy: Identifies and restructures distorted, irrational self-talk (highly effective for depression).\n• Behavioral Therapy: Uses conditioning, systematic desensitization, and exposure to extinguish phobias.\n• Psychodynamic Therapy: Uncovers unconscious conflicts originating in childhood traumas.\n• Eclectic / Integrationist: Combining multiple methodologies tailored to the individual client.',
          am: '• ኮግኒቲቭ ቴራፒ፡ የተዛቡ እና አሉታዊ የአስተሳሰብ ልማዶችን በማረም ስሜትን ማስተካከል (ለድብርት እጅግ ፍቱን ነው)።\n• ባህሪያዊ ቴራፒ፡ ፍርሃትን እና ፎቢያን ቀስ በቀስ በማላመድ (Desensitization) ማከም።\n• ሳይኮዳይናሚክ ቴራፒ፡ በልጅነት የተፈጠሩ ድብቅ የውስጥ ግጭቶችን ፈልፍሎ በማውጣት ማከም።\n• ቅይጥ (Eclectic)፡ እንደ ታካሚው ችግር የተለያዩ ዘዴዎችን አቀናጅቶ መጠቀም።'
        },
        {
          id: 'p-7-3-2',
          subheading: { en: 'Treatment Modalities: Individual, Group, Family', am: 'የህክምና አደረጃጀት፡ የግል፣ የቡድን እና የቤተሰብ' },
          en: '• Individual Therapy: One-on-one relationship focusing deeply on private issues.\n• Group Therapy: Meeting with peers suffering similar struggles; delivers powerful validation, shared empathy, and social practice.\n• Couples and Family Therapy: Healing communication breakdowns and resolving relational dynamics as a supportive unit.',
          am: '• የግል ቴራፒ፡ በሀኪሙና በታካሚው መካከል የሚደረግ ምስጢራዊ የቀጥታ ግንኙነት።\n• የቡድን ቴራፒ፡ ተመሳሳይ ችግር ካለባቸው ሰዎች ጋር በመገናኘት ብቸኝነትን ማስወገድ እና ልምድ መጋራት።\n• የቤተሰብ ቴራፒ፡ በቤተሰብ ወይም በባልና ሚስት መካከል ያለውን የተግባቦት መዛባት በጋራ ማከም።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-7-1',
      title: { en: 'The 3 Diagnostic Criteria', am: 'ሦስቱ የበሽታ መለያ መስፈርቶች' },
      bullets: [
        { en: 'Abnormality: Deviation from statistical and cultural norms.', am: 'ያልተለመደነት፡ ከህብረተሰብ ባህልና ደንብ ማፈንገጥ።' },
        { en: 'Maladaptiveness: Disruption of work, school, or daily life.', am: 'የአኗኗር መስተጓጎል፡ ትምህርትንና ስራን ማወክ።' },
        { en: 'Personal Distress: Subjective emotional pain and suffering.', am: 'የግል ስቃይ፡ ውስጣዊ ስቃይና ስነ-ልቦናዊ ሰቆቃ።' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-7-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'Why is behavior that merely deviates from the norm not enough by itself to diagnose a psychological disorder?',
        am: 'አንድ ባህሪ ከህብረተሰቡ ደንብ ስለራቀ ብቻ የስነ-ልቦና በሽታ ነው ለማለት የማይበቃው ለምንድን ነው?'
      },
      answer: {
        en: 'Because cultural norms differ widely, and unusual behavior might simply represent creative non-conformity or individual eccentricity. A true disorder also requires maladaptiveness (harming one\'s functioning) and personal distress.',
        am: 'ምክንያቱም የባህል ልዩነቶች ስላሉ እና የተለየ ባህሪ የፈጠራ ወይም የግል ነጻነት መገለጫ ሊሆን ስለሚችል ነው። እውነተኛ የስነ-ልቦና በሽታ ለመባል የአኗኗር መስተጓጎል (Maladaptiveness) እና የግል ስቃይ (Personal Distress) አብረው መታየት አለባቸው።'
      },
      explanation: {
        en: 'A genius artist or a dedicated monk may live in unconventional ways without being mentally disordered.',
        am: 'አንድ አርቲስት ወይም ባህታዊ ከህብረተሰቡ የተለየ ህይወት ሊመራ ይችላል፤ ይህ ግን የአእምሮ ህመምተኛ አያደርገውም።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-7-1',
      question: {
        en: 'An individual repeatedly checks that the front door is locked twenty times an hour because of terrifying thoughts of burglary. What condition is this?',
        am: 'አንድ ሰው ሌባ ይገባብኛል በሚል አስጨናቂ ፍርሃት የተነሳ ቤቱን በሰዓት 20 ጊዜ ሄዶ መቆለፉን የሚያረጋግጥ ከሆነ ችግሩ ምን ይባላል?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Generalized Anxiety Disorder', am: 'አጠቃላይ የጭንቀት መታወክ' } },
        { id: 'opt-b', text: { en: 'Obsessive-Compulsive Disorder (OCD)', am: 'ኦብሴሲቭ-ኮምፐልሲቭ ዲስኦርደር (OCD)' } },
        { id: 'opt-c', text: { en: 'Dysthymia', am: 'ዳይስቲሚያ' } },
        { id: 'opt-d', text: { en: 'Antisocial Personality', am: 'አንቲሶሻል ስብዕና' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The recurring thought of burglary is the obsession; the repetitive checking of the lock is the compulsion designed to neutralize anxiety.',
        am: 'የሌባው ፍርሃት ኦብሴሽን (Obsession) ሲሆን፣ ሄዶ ደጋግሞ መቆለፍ ደግሞ ኮምፐልሽን (Compulsion) ይባላል።'
      }
    }
  ],
  matching: [
    {
      id: 'm-7-1',
      concept: { en: 'Major Depression', am: 'ከባድ ድብርት' },
      definition: { en: 'Profound sadness, loss of pleasure, fatigue, suicidal ideation', am: 'ጥልቅ ሀዘን፣ ፍላጎት ማጣት፣ ድካም እና ራስን የማጥፋት ሀሳብ' }
    },
    {
      id: 'm-7-2',
      concept: { en: 'Bipolar Disorder', am: 'ባይፖላር ዲስኦርደር' },
      definition: { en: 'Cycling between manic grandiosity and depressive despair', am: 'በሜኒያ የደስታ ንረት እና በጥልቅ ድብርት መካከል መወዛወዝ' }
    },
    {
      id: 'm-7-3',
      concept: { en: 'Panic Attack', am: 'የድንጋጤ ጥቃት' },
      definition: { en: 'Acute terror, chest tightness, palpitations resembling heart attack', am: 'ድንገተኛ አስፈሪ ፍርሃት፣ የልብ ምት እና የደረት ህመም' }
    }
  ],
  flashcards: [
    {
      id: 'fc-7-1',
      termEn: 'Psychopathology',
      termAm: 'ሳይኮፓቶሎጂ',
      defEn: 'The scientific study of psychological disorders, their causes, and treatments.',
      defAm: 'የስነ-ልቦናዊ መታወኮችን፣ መንስኤዎቻቸውን እና ህክምናዎቻቸውን የሚያጠና ሳይንስ።',
      chapter: 7
    },
    {
      id: 'fc-7-2',
      termEn: 'Maladaptiveness',
      termAm: 'የአኗኗር መስተጓጎል',
      defEn: 'Behavior that disrupts everyday social, educational, or work responsibilities.',
      defAm: 'የዕለት ተዕለት የትምህርት፣ የስራ ወይም የማህበራዊ ሀላፊነትን የሚያስተጓጉል ባህሪ።',
      chapter: 7
    }
  ]
};
