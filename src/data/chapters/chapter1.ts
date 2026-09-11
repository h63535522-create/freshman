import { Chapter } from '../../types';

export const chapter1: Chapter = {
  id: 1,
  number: 1,
  title: {
    en: 'Essence of Psychology',
    am: 'የስነ-ልቦና መሰረታዊ ይዘት እና ምንነት'
  },
  universityAuthor: 'Koye Kassa (Bahir Dar University)',
  overview: {
    en: 'This chapter acquaints freshman students with the science of psychology, defining behavior and mental processes, exploring the four primary scientific goals, tracing the historical evolution from structuralism to modern perspectives, and detailing empirical research methodologies.',
    am: 'ይህ ምዕራፍ የአንደኛ ዓመት ዩኒቨርሲቲ ተማሪዎችን የስነ-ልቦና ሳይንስ ፅንሰ-ሀሳብ ያስተዋውቃል፤ ባህሪንና የአዕምሮ ሂደቶችን ይተረጉማል፤ አራቱን ዋና ዋና የሳይንስ ግቦች፣ ከመዋቅራዊነት እስከ ዘመናዊ አመለካከቶች ድረስ ያለውን የታሪክ ሂደት እና የስነ-ልቦና ምርምር ዘዴዎችን በዝርዝር ያብራራል።'
  },
  learningOutcomes: [
    { en: 'Define psychology and related scientific concepts accurately', am: 'ስነ-ልቦናንና ተዛማጅ ሳይንሳዊ ፅንሰ-ሀሳቦችን በትክክል መተርጎም' },
    { en: 'Identify the historical roots and the father of modern psychology (Wilhelm Wundt, 1879)', am: 'የስነ-ልቦና ታሪካዊ መነሻና የዘመናዊ ስነ-ልቦና አባት (ዊልሄልም ቩንት፣ 1879) ማወቅ' },
    { en: 'Differentiate the four goals of psychology: description, explanation, prediction, and control', am: 'አራቱን የስነ-ልቦና ግቦች (መግለጽ፣ ማብራራት፣ መተንበይ እና መቆጣጠር) መለየት' },
    { en: 'Compare and contrast the 5 early schools of thought and 6 modern perspectives', am: 'አምስቱን የቀደሙ አስተሳሰቦች እና ስድስቱን ዘመናዊ አመለካከቶች ማነፃፀር' },
    { en: 'Understand the major research methods and the 5 scientific steps', am: 'ዋና ዋና የምርምር ዘዴዎችን እና አምስቱን ሳይንሳዊ ደረጃዎች መረዳት' }
  ],
  sections: [
    {
      id: 'sec-1-1',
      number: '1.1',
      title: {
        en: 'Definition of Psychology and Related Concepts',
        am: 'የስነ-ልቦና ትርጓሜ እና ተዛማጅ ፅንሰ-ሀሳቦች'
      },
      paragraphs: [
        {
          id: 'p-1-1-1',
          subheading: { en: 'Etymology of Psychology', am: 'የስነ-ልቦና ስርወ-ቃል አመጣጥ' },
          en: 'The word "psychology" is derived from two Greek words: "psyche", which refers to mind, soul, or spirit, and "logos", meaning study, knowledge, or discourse. Therefore, epistemologically, psychology refers to the study of the mind, soul, or spirit. It is universally symbolized by the Greek letter Ψ (psi, pronounced "psy").',
          am: '"ሳይኮሎጂ" (ስነ-ልቦና) የሚለው ቃል የመጣው ከሁለት የግሪክ ቃላት ነው፡ "ሳይኪ" (psyche) ማለት አዕምሮ፣ ነፍስ ወይም መንፈስ ሲሆን "ሎጎስ" (logos) ማለት ደግሞ ጥናት፣ እውቀት ወይም ንግግር ማለት ነው። ስለዚህ በስርወ-ቃሉ ስነ-ልቦና ማለት የአዕምሮ ወይም የነፍስ ጥናት ማለት ነው። በዓለም አቀፍ ደረጃ በግሪክ ፊደል Ψ (ፕሳይ) ይወከላል።',
          highlightTerms: [
            { en: 'Psyche', am: 'ሳይኪ (አዕምሮ/ነፍስ)', defEn: 'Greek word meaning soul, spirit, or mind.', defAm: 'ነፍስ፣ መንፈስ ወይም አእምሮ የሚል ትርጉም ያለው የግሪክ ቃል' },
            { en: 'Logos', am: 'ሎጎስ (ጥናት/እውቀት)', defEn: 'Greek word meaning study, discourse, or reason.', defAm: 'ጥናት፣ ምርምር ወይም ሳይንሳዊ እውቀት ማለት ነው' }
          ]
        },
        {
          id: 'p-1-1-2',
          subheading: { en: 'Modern Scientific Definition', am: 'ዘመናዊ ሳይንሳዊ ትርጓሜ' },
          en: 'Nowadays, most scholars agree on the standard scientific definition: "Psychology is the scientific study of human behavior and the underlying mental processes." This definition encompasses three critical aspects: Science, Behavior, and Mental Processes.',
          am: 'በአሁኑ ጊዜ አብዛኛዎቹ ምሁራን በሚከተለው ሳይንሳዊ ትርጓሜ ይስማማሉ፡ "ስነ-ልቦና ማለት የሰው ልጅ ባህሪ እና ከበስተጀርባ ያሉትን የአዕምሮ ሂደቶች በሳይንሳዊ መንገድ ማጥናት ነው።" ይህ ትርጓሜ ሦስት ዋና ዋና አካላትን ያካትታል፡ ሳይንስ፣ ባህሪ እና የአዕምሮ ሂደቶች።'
        },
        {
          id: 'p-1-1-3',
          subheading: { en: 'The Three Core Pillars', am: 'ሦስቱ ዋና ምሰሶዎች' },
          en: '1. Science: Psychologists do not study behavior through common sense or personal intuition; they employ empirical procedures, systematic observation, and objective data collection.\n2. Behavior: All outward or overt actions and reactions (talking, facial expressions, body movement, social interactions).\n3. Mental Processes: Covert, internal mental activities (thinking, reasoning, feeling, dreaming, and remembering) that cannot be seen directly.',
          am: '1. ሳይንስ፡ የስነ-ልቦና ባለሙያዎች ባህሪን በደመ-ነፍስ ወይም በግምት ሳይሆን በተጨባጭ መረጃ፣ በስርዓት በተደራጀ ምልከታ እና በሳይንሳዊ ሙከራ ያጠናሉ።\n2. ባህሪ፡ በግልጽ የሚታዩ ውጫዊ ድርጊቶች እና ምላሾች (መናገር፣ የፊት ገጽታ፣ እንቅስቃሴ፣ ተግባቦት) ናቸው።\n3. የአዕምሮ ሂደቶች፡ በዓይን በቀጥታ የማይታዩ የውስጥ አስተሳሰቦች፣ ስሜቶች፣ ትውስታዎች እና የምክንያት ማመንጨት ሂደቶች ናቸው።'
        }
      ]
    },
    {
      id: 'sec-1-2',
      number: '1.2',
      title: {
        en: 'The Four Goals of Psychology',
        am: 'አራቱ የስነ-ልቦና ዋና ግቦች'
      },
      paragraphs: [
        {
          id: 'p-1-2-1',
          subheading: { en: '1. Description (መግለጽ)', am: '1. መግለጽ (Description)' },
          en: 'Description involves observing a behavior and noting everything about it systematically. It answers questions such as: "What is happening?", "Where does it happen?", "To whom does it happen?", and "Under what conditions does it occur?". Example: A university instructor notes that a freshman student sits alone, misses lectures, and avoids participation.',
          am: 'መግለጽ ማለት ባህሪን በጥልቀት መመልከት እና የተከሰተውን ሁሉ በዝርዝር መመዝገብ ነው። የሚመልሳቸው ጥያቄዎች፡ "ምን እየተከሰተ ነው?", "የት ነው የሚከሰተው?", "በማን ላይ ነው የሚደርሰው?", እና "በምን ሁኔታዎች ስር ይታያል?". ምሳሌ፡ አንድ የዩኒቨርሲቲ መምህር አንዲት ተማሪ ብቻዋን እንደምትቀመጥ፣ ክፍለ-ጊዜ እንደምታቋርጥ እና እንደማትሳተፍ ያስተውላል።'
        },
        {
          id: 'p-1-2-2',
          subheading: { en: '2. Explanation (ማስረዳት / ምክንያቱን ማወቅ)', am: '2. ማስረዳት (Explanation)' },
          en: 'Explanation is the search for why the behavior is occurring. It links observations to underlying psychological and environmental mechanisms to build explanatory theories. Example: Investigating why the student withdrew, discovering severe loneliness and adjustment challenges away from family.',
          am: 'ማስረዳት ማለት ባህሪው "ለምን ተከሰተ?" ለሚለው ጥያቄ ምክንያቶችን መፈለግ ነው። ይህም የተመለከቱትን እውነታዎች ከተፈጥሮአዊ፣ ስነ-ልቦናዊ እና ማህበራዊ ምክንያቶች ጋር በማገናኘት ፅንሰ-ሀሳቦችን ለመገንባት ያግዛል። ምሳሌ፡ ተማሪዋ ከቤተሰቧ ርቃ በመምጣቷ የገጠማት የብቸኝነት እና የመላመድ ችግር ባህሪውን እንዳመጣው ማረጋገጥ።'
        },
        {
          id: 'p-1-2-3',
          subheading: { en: '3. Prediction (መተንበይ)', am: '3. መተንበይ (Prediction)' },
          en: 'Prediction involves determining what will happen in the future under similar circumstances based on past empirical findings. Example: Predicting that if unaddressed, severe academic distress will lead to exam failure and university dropout.',
          am: 'መተንበይ ማለት ቀደም ባሉ ሳይንሳዊ ጥናቶች ላይ በመመስረት ወደፊት ምን ሊከሰት እንደሚችል መገመት ነው። ምሳሌ፡ ለተማሪዋ ተገቢው የካውንስሊንግ እገዛ ካልተደረገላት ውጤቷ ወድቆ ከዩኒቨርሲቲ ልትሰናበት እንደምትችል አስቀድሞ መተንበይ።'
        },
        {
          id: 'p-1-2-4',
          subheading: { en: '4. Control / Intervention (መቆጣጠር / ማሻሻል)', am: '4. መቆጣጠር / ማሻሻል (Control)' },
          en: 'Control means modifying, altering, or preventing undesirable behaviors into desirable adaptive patterns (e.g., teaching study skills, managing anxiety). In experimental research, control also refers to holding extraneous variables constant (e.g., controlling for family socio-economic status when examining IQ and grades).',
          am: 'መቆጣጠር ማለት ጎጂ ወይም የማይፈለግን ባህሪ ወደ መልካም እና ውጤታማ ባህሪ መለወጥ ወይም ማሻሻል ነው (ለምሳሌ፡ የጭንቀት አስተዳደርና የጥናት ክህሎት ማስተማር)። በምርምር ውስጥ ደግሞ የውጭ ተፅዕኖ ፈጣሪዎችን (ለምሳሌ የኢኮኖሚ ደረጃን) ቋሚ አድርጎ መቆጣጠርን ያመለክታል።'
        }
      ]
    },
    {
      id: 'sec-1-3',
      number: '1.3',
      title: {
        en: 'Historical Background and Schools of Psychology',
        am: 'የስነ-ልቦና ታሪካዊ አመጣጥ እና አስተሳሰቦች'
      },
      paragraphs: [
        {
          id: 'p-1-3-1',
          subheading: { en: 'The Birth of Psychology (1879)', am: 'የሳይንሳዊ ስነ-ልቦና መወለድ (1879)' },
          en: 'Psychology as an independent science began in 1879 in Leipzig, Germany, when Wilhelm Wundt established the first formal psychology laboratory. Wundt is revered as the "Father of Modern Psychology." He pioneered the method of "Objective Introspection"—systematically training subjects to examine and describe their own conscious mental experiences in response to precise stimuli.',
          am: 'ስነ-ልቦና ራሱን የቻለ ሳይንስ ሆኖ የተመሰረተው በ1879 እ.ኤ.አ. ላይፕዚግ፣ ጀርመን ውስጥ ዊልሄልም ቩንት የመጀመሪያውን የስነ-ልቦና ቤተ-ሙከራ (ላብራቶሪ) ሲያቋቁም ነው። ቩንት "የዘመናዊ ስነ-ልቦና አባት" በመባል ይታወቃል። "ኦብጀክቲቭ ኢንትሮስፔክሽን" (ራስን በራስ የማስተዋል ሳይንሳዊ ዘዴ) ፈር ቀዳጅ ነው።'
        },
        {
          id: 'p-1-3-2',
          subheading: { en: 'Early Schools: Structuralism & Functionalism', am: 'ቀዳሚ አስተሳሰቦች፡ መዋቅራዊነት እና ተግባራዊነት' },
          en: '• Structuralism: Founded by Edward Titchener (Wundt\'s student). Viewed psychology as the study of the structure of the conscious mind, breaking consciousness into 3 basic building blocks: sensations, feelings, and images.\n• Functionalism: Founded by William James (the first American psychologist). Emphasized the function and adaptive value of the mind—how mental processes allow humans to survive, work, and adapt to changing environments.',
          am: '• ስትራክቸራሊዝም (መዋቅራዊነት)፡ በኤድዋርድ ቲቸነር የተመሰረተ። አእምሮን ወደ መሠረታዊ ህዋሳቱ (ስሜቶች፣ ምስሎች፣ ስሜታዊ ንዝረቶች) በመከፋፈል መዋቅሩን ማጥናት ላይ ያተኮረ ነበር።\n• ፈንክሽናሊዝም (ተግባራዊነት)፡ በዊሊያም ጄምስ የተመሰረተ። የአእምሮ መዋቅር ሳይሆን ተግባሩ—የሰው ልጅ ከአካባቢው ጋር እንዴት ተስማምቶ እንደሚኖርና እንደሚተርፍ—ላይ ያተኮረ ነበር።'
        },
        {
          id: 'p-1-3-3',
          subheading: { en: 'Gestalt, Behaviorism, and Psychoanalysis', am: 'ጌስታታልት፣ ባህሪይነት እና ስነ-ተንታኝነት' },
          en: '• Gestalt Psychology: Founded by Max Wertheimer in Germany. Famous for the maxim: "The whole is greater than the sum of its parts." Mind perceives organized wholes, patterns, and configurations rather than isolated sensations.\n• Behaviorism: Founded by John B. Watson, later championed by B.F. Skinner. Rejected the study of unobservable consciousness and introspection; insisted psychology must focus solely on observable, measurable behavior (the "black box" model).\n• Psychoanalysis: Founded by Sigmund Freud in Vienna. Maintained that unconscious motives, suppressed childhood traumas, and conflicts between biological drives (id) and social demands dictate human behavior.',
          am: '• ጌስታልት ሳይኮሎጂ፡ በማክስ ቨርትሃይመር የተመሰረተ። "አጠቃላይ ድምር ከክፍሎቹ ድምር ይበልጣል" የሚል መርህ አለው። አእምሮ ነገሮችን እንደ ሙሉ ቅርፅ እንጂ እንደ ተበታተነ ክፍል አይመለከትም።\n• ቢሄቪየሪዝም (ባህሪይነት)፡ በጆን ቢ. ዋትሰን እና ቢ.ኤፍ. ስኪነር የተመሰረተ። የማይታየውን ህሊና ትቶ፣ የሚታይንና የሚለካን ውጫዊ ባህሪ ብቻ ማጥናት አለበት ይላል (ብላክ ቦክስ አካሄድ)።\n• ሳይኮአናሊሲስ (ስነ-ተንታኝነት)፡ በሲግመንድ ፍሮይድ የተመሰረተ። የሰው ልጅ ድርጊት የሚመራው ባለማወቅ አእምሮ (Unconscious Mind) ውስጥ በተደበቁ የልጅነት ጠባሳዎችና የወሲብ/የጥቃት ዝንባሌዎች ነው ይላል።'
        },
        {
          id: 'p-1-3-4',
          subheading: { en: 'Modern Perspectives in Psychology', am: 'ዘመናዊ የስነ-ልቦና አመለካከቶች' },
          en: '1. Psychodynamic: Freud\'s legacy, focusing on the unconscious, early childhood, and inner conflicts.\n2. Behavioral: Conditioning, reinforcement, and environmental consequences shaping actions.\n3. Humanistic: "Third Force" (Rogers & Maslow); emphasizes free will, human potential, and self-actualization.\n4. Cognitive: Focuses on mental processes—memory, problem solving, decision making, and language.\n5. Biological: How the brain, neurotransmitters (e.g., dopamine), genes, and nervous system influence feelings and actions.\n6. Sociocultural: How social groups, cultural norms, and ethnic traditions shape individual behavior.',
          am: '1. ሳይኮዳይናሚክ፡ ከፍሮይድ የተወረሰ፤ የውስጥ ግጭቶችንና የልጅነት ልምዶችን ይመረምራል።\n2. ባህሪያዊ፡ ማጠናከሪያ (Reinforcement) እና ቅጣት ባህሪን እንዴት እንደሚቀርጹ ይመረምራል።\n3. ሂውማኒስቲክ (ሰብአዊነት)፡ ሮጀርስና ማስሎው፤ የሰውን ነፃ ምርጫ እና የራስን አቅም ማሳደግ (Self-actualization) ላይ ያተኩራል።\n4. ኮግኒቲቭ (አስተውሎታዊ)፡ ማሰብ፣ ማስታወስ፣ ችግር መፍታት እና ቋንቋ እንዴት እንደሚሰሩ ይመረምራል።\n5. ባዮሎጂካል፡ አንጎል፣ ኒውሮትራንስሚተሮች እና ጂኖች በባህሪ ላይ ያላቸውን ሚና ይመረምራል።\n6. ማህበራዊ-ባህላዊ፡ የባህል ደንቦች፣ እሴቶች እና ማህበራዊ ቡድኖች በባህሪያችን ላይ ያላቸውን ተፅዕኖ ይመረምራል።'
        }
      ]
    },
    {
      id: 'sec-1-4',
      number: '1.4',
      title: {
        en: 'Subfields and Branches of Psychology',
        am: 'የስነ-ልቦና ዘርፎች እና የስራ መስኮች'
      },
      paragraphs: [
        {
          id: 'p-1-4-1',
          subheading: { en: 'Major Applied and Academic Branches', am: 'ዋና ዋና የተግባር እና የአካዳሚክ ዘርፎች' },
          en: '• Developmental Psychology: Lifespan physical, cognitive, and emotional milestones.\n• Personality Psychology: Enduring traits, self-concept, and individual differences.\n• Social Psychology: Interpersonal interactions, prejudice, conformity, and group dynamics.\n• Industrial/Organizational Psychology: Worker motivation, workplace efficiency, and organizational leadership.\n• Educational Psychology: Learning techniques, classroom management, and curriculum design.\n• Clinical Psychology: Diagnosing and treating severe psychological disorders.\n• Counseling Psychology: Assisting people with milder everyday adjustment and personal problems.',
          am: '• የእድገት ስነ-ልቦና፡ ከውልደት እስከ እርጅና ያለውን የአካል፣ የአዕምሮ እና የስሜት ለውጥ ያጠናል።\n• የስብዕና ስነ-ልቦና፡ ቋሚ የሰው ባህሪያትን፣ ስብዕናንና የግለሰብ ልዩነቶችን ይመረምራል።\n• የማህበራዊ ስነ-ልቦና፡ ማህበራዊ ግንኙነቶችን፣ አመለካከቶችን እና የቡድን ተፅዕኖን ያጠናል።\n• የኢንዱስትሪ/ድርጅታዊ ስነ-ልቦና፡ በስራ ቦታ ምርታማነትንና የሰራተኞችን ተነሳሽነት ለማሳደግ ይሰራል።\n• የትምህርት ስነ-ልቦና፡ የማስተማር እና የመማር ሂደትን፣ ስርአተ-ትምህርትን ለማሻሻል ያገለግላል።\n• ክሊኒካል ስነ-ልቦና፡ ከባድ የአእምሮ ህመሞችን በመመርመር እና በማከም ላይ ያተኩራል።\n• የምክር (ካውንስሊንግ) ስነ-ልቦና፡ ቀለል ያሉ የህይወትና የመላመድ ችግሮችን ለመፍታት ያግዛል።'
        }
      ]
    },
    {
      id: 'sec-1-5',
      number: '1.5',
      title: {
        en: 'Research Methods and Scientific Steps',
        am: 'የምርምር ዘዴዎች እና ሳይንሳዊ ደረጃዎች'
      },
      paragraphs: [
        {
          id: 'p-1-5-1',
          subheading: { en: 'Three Main Research Methods', am: 'ሦስቱ ዋና የምርምር ዘዴዎች' },
          en: '1. Descriptive Research: Observes and records behavior without manipulating variables. Includes Naturalistic Observation (observing subjects in natural habitats, risk of observer bias), Case Studies (in-depth examination of one individual, cannot generalize), and Surveys (large sample, risk of response bias).\n2. Correlational Research: Measures the statistical relationship between two variables. Crucial rule: Correlation does NOT prove causation!\n3. Experimental Research: The ONLY method that can prove cause-and-effect. Involves an Independent Variable (manipulated cause), Dependent Variable (measured effect), Experimental Group (receives treatment), and Control Group (comparison baseline).',
          am: '1. ገላጭ ምርምር (Descriptive)፡ ተፈጥሮአዊ ምልከታ፣ የታሪክ ጥናት (Case Study) እና መጠይቆችን ያካትታል። ተለዋዋጮችን አይቀይርም።\n2. ተዛምዷዊ ምርምር (Correlational)፡ በሁለት ነገሮች መካከል ያለውን ዝምድና ይመረምራል። ዋና መርህ፡ ተዛምዶ መንስኤነትን (Causation) አያረጋግጥም!\n3. የሙከራ ምርምር (Experimental)፡ መንስኤና ውጤትን (Cause-and-Effect) የሚያረጋግጥ ብቸኛው ዘዴ ነው። ራሱን የቻለ ተለዋዋጭ (Independent Variable) እና ጥገኛ ተለዋዋጭ (Dependent Variable) ይይዛል።'
        },
        {
          id: 'p-1-5-2',
          subheading: { en: 'The Five Steps of Scientific Research', am: 'አምስቱ የሳይንሳዊ ምርምር ደረጃዎች' },
          en: 'Step 1: Defining the Problem (Noticing an unexplained phenomenon).\nStep 2: Formulating the Hypothesis (An educated, testable prediction).\nStep 3: Testing the Hypothesis (Gathering empirical data using rigorous methods).\nStep 4: Drawing Conclusions (Analyzing results to accept or reject the hypothesis).\nStep 5: Reporting Results (Publishing findings for replication and scientific scrutiny).',
          am: 'ደረጃ 1፡ ችግሩን መለየት (ትኩረት የሳበ ክስተትን ማስተዋል)።\nደረጃ 2፡ መላ-ምት (Hypothesis) ማመንጨት (ሊፈተሽ የሚችል ግምት)።\nደረጃ 3፡ መላ-ምቱን በሳይንሳዊ መረጃ መፈተሽ (መረጃ ማሰባሰብ)።\nደረጃ 4፡ ድምዳሜ ላይ መድረስ (መላ-ምቱ ትክክል መሆኑን ወይም አለመሆኑን መወሰን)።\nደረጃ 5፡ ውጤቱን ለህዝብ ይፋ ማድረግ (ሌሎች እንዲማሩበትና እንዲደግሙት ማቅረብ)።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-1-1',
      title: { en: 'Foundations & Definitions', am: 'መሰረታዊ ፅንሰ-ሀሳቦችና ትርጓሜ' },
      bullets: [
        { en: 'Psychology is the scientific study of human behavior and mental processes.', am: 'ስነ-ልቦና ማለት የሰው ልጅ ባህሪ እና የአእምሮ ሂደቶች ሳይንሳዊ ጥናት ነው።' },
        { en: 'The term originates from Greek "psyche" (mind/soul) and "logos" (study). Symbol: Ψ.', am: 'ቃሉ የመጣው ከግሪክ "ሳይኪ" (አእምሮ/ነፍስ) እና "ሎጎስ" (ጥናት) ሲሆን ምልክቱ Ψ ነው።' },
        { en: 'Wilhelm Wundt established the first psychology laboratory in 1879 in Leipzig, Germany.', am: 'ዊልሄልም ቩንት በ1879 በጀርመን የመጀመሪያውን የስነ-ልቦና ቤተ-ሙከራ በማቋቋም አባት ሆነ።' }
      ]
    },
    {
      id: 'sum-1-2',
      title: { en: 'Four Goals of Psychology', am: 'አራቱ የስነ-ልቦና ግቦች' },
      bullets: [
        { en: 'Description: What is happening? (Observing and recording facts).', am: 'መግለጽ (Description)፡ ምን እየተከሰተ ነው? (ባህሪን መመዝገብ)' },
        { en: 'Explanation: Why is it happening? (Discovering underlying causes and theories).', am: 'ማስረዳት (Explanation)፡ ለምን ተከሰተ? (ምክንያቶችን መረዳት)' },
        { en: 'Prediction: When will it happen again? (Forecasting future behavioral patterns).', am: 'መተንበይ (Prediction)፡ መቼ እና እንዴት ሊደገም ይችላል?' },
        { en: 'Control: How can it be changed? (Modifying maladaptive into adaptive behavior).', am: 'መቆጣጠር (Control)፡ ባህሪን ወደ መልካም አቅጣጫ መለወጥ እና ማሻሻል።' }
      ]
    },
    {
      id: 'sum-1-3',
      title: { en: 'Research Methods Matrix', am: 'የምርምር ዘዴዎች ማጠቃለያ' },
      bullets: [
        { en: 'Descriptive: Naturalistic observation, case study, surveys (No manipulation).', am: 'ገላጭ፡ ተፈጥሮአዊ ምልከታ፣ የታሪክ ጥናት፣ ሰርቬይ (ያለ ጣልቃ ገብነት)' },
        { en: 'Correlational: Identifies relationships; NEVER establishes cause-and-effect.', am: 'ተዛምዷዊ፡ ቁርኝትን ያሳያል እንጂ መንስኤና ውጤትን አያረጋግጥም።' },
        { en: 'Experimental: Manipulates IV to measure DV; proves causality through control groups.', am: 'የሙከራ፡ ራሱን የቻለ ተለዋዋጭን በመቀያየር መንስኤና ውጤትን ያረጋግጣል።' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-1-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'Why is Wilhelm Wundt acknowledged as the "Father of Modern Psychology"?',
        am: 'ዊልሄልም ቩንት "የዘመናዊ ስነ-ልቦና አባት" ተብሎ የሚታወቀው ለምንድን ነው?'
      },
      answer: {
        en: 'Because in 1879 he established the very first laboratory devoted exclusively to psychological research in Leipzig, Germany, shifting psychology from philosophical speculation to an empirical, experimental science.',
        am: 'በ1879 እ.ኤ.አ በጀርመን ላይፕዚግ ከተማ ለስነ-ልቦና ምርምር ብቻ የተከለለ የመጀመሪያውን ቤተ-ሙከራ በማቋቋም ስነ-ልቦናን ከፍልስፍና ግምት ወደ ተጨባጭ የሙከራ ሳይንስ ስላሸጋገረው ነው።'
      },
      explanation: {
        en: 'Prior to Wundt, discussions of the mind belonged strictly to philosophers. Wundt applied objective introspection and controlled laboratory measurements, earning psychology its recognition as an independent science.',
        am: 'ከቩንት በፊት የአእምሮ ጉዳይ የፈላስፎች የንድፈ-ሀሳብ ክርክር ብቻ ነበር። ቩንት ሳይንሳዊ ቤተ-ሙከራ እና ልኬትን በመጠቀም ራሱን የቻለ ሳይንስ እንዲሆን አስችሏል።'
      }
    },
    {
      id: 'q-1-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'A psychologist is studying the effect of tutorial support on Ethiopian university students\' grades. She assigns one section to receive weekly tutoring and another section to receive no tutoring. What is the independent variable and the dependent variable?',
        am: 'አንድ ተመራማሪ የማጠናከሪያ ትምህርት (Tutorial) በተማሪዎች ውጤት ላይ ያለውን ተፅዕኖ ለማጥናት ተማሪዎችን በሁለት ቡድን ከፈለ። የማጠናከሪያ ትምህርቱ እና የተማሪዎቹ ውጤት ምን አይነት ተለዋዋጮች ናቸው?'
      },
      answer: {
        en: 'The Independent Variable (IV) is Tutorial Support (manipulated factor). The Dependent Variable (DV) is Students\' Academic Performance / Grades (measured outcome).',
        am: 'ራሱን የቻለ ተለዋዋጭ (IV) የማጠናከሪያ ትምህርቱ ሲሆን፣ ጥገኛ ተለዋዋጭ (DV) ደግሞ የተማሪዎቹ የትምህርት ውጤት ነው።'
      },
      explanation: {
        en: 'The researcher directly changes (manipulates) whether students receive tutoring or not. The resulting grade changes depend on this intervention, making grades the dependent variable.',
        am: 'ተመራማሪው ሆን ብሎ የሚቆጣጠረው የማጠናከሪያ ትምህርቱን (IV) ሲሆን፣ በሱ ምክንያት የሚለካውና የሚቀየረው ውጤት ጥገኛ ተለዋዋጭ (DV) ይባላል።'
      }
    },
    {
      id: 'q-1-3',
      number: 3,
      category: 'case_study',
      question: {
        en: 'How do Behaviorism and Psychoanalysis fundamentally differ in their approach to studying the human being?',
        am: 'ባህሪይነት (Behaviorism) እና ስነ-ተንታኝነት (Psychoanalysis) የሰውን ልጅ በማጥናት ረገድ ያላቸው መሠረታዊ ልዩነት ምንድነው?'
      },
      answer: {
        en: 'Behaviorism (Watson, Skinner) focuses solely on observable, measurable behavior and external environmental stimuli, rejecting the unobservable mind. In stark contrast, Psychoanalysis (Freud) emphasizes the hidden, unconscious mind, repressed childhood conflicts, and biological drives.',
        am: 'ባህሪይነት (ዋትሰን፣ ስኪነር) የሚታየውንና የሚለካውን ውጫዊ ባህሪ ብቻ ያጠናል፤ ህሊናን እንደ "ጥቁር ሳጥን" ይቆጥራል። በተቃራኒው ስነ-ተንታኝነት (ፍሮይድ) በድብቁ አእምሮ (Unconscious) እና በልጅነት ጠባሳዎች ላይ ያተኩራል።'
      },
      explanation: {
        en: 'Watson believed that studying consciousness was unscientific because it cannot be seen or weighed, while Freud believed the conscious mind is only the tip of the mental iceberg.',
        am: 'ዋትሰን የማይታየውን አእምሮ ማጥናት ሳይንሳዊ አይደለም ሲል፣ ፍሮይድ ደግሞ የሚታየው ባህሪ ከውቅያኖስ ላይ እንደሚታይ የበረዶ ጫፍ ጥቂት ብቻ ነው፣ ዋናው ሀይል የተደበቀው አእምሮ ነው ብሏል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-1-1',
      question: {
        en: 'Which school of early psychology claimed that "the whole is greater than the sum of its parts"?',
        am: '"አጠቃላይ ድምር ከክፍሎቹ ድምር ይበልጣል" የሚለውን መርህ ያራመደው የቀደመው የስነ-ልቦና ትምህርት ቤት የቱ ነው?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Structuralism', am: 'መዋቅራዊነት (Structuralism)' } },
        { id: 'opt-b', text: { en: 'Functionalism', am: 'ተግባራዊነት (Functionalism)' } },
        { id: 'opt-c', text: { en: 'Gestalt Psychology', am: 'ጌስታልት ሳይኮሎጂ (Gestalt Psychology)' } },
        { id: 'opt-d', text: { en: 'Behaviorism', am: 'ባህሪይነት (Behaviorism)' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Max Wertheimer and Gestalt psychologists argued that psychological experiences cannot be understood simply by breaking them into isolated sensations; our minds perceive complete, organized patterns.',
        am: 'ማክስ ቨርትሃይመር እና የጌስታልት ሳይኮሎጂስቶች አእምሮ ነገሮችን እንደ ሙሉ ቅርጽና ስርዓት እንጂ እንደ ተበታተኑ ስሜቶች አይመለከትም ብለዋል።'
      }
    },
    {
      id: 'quiz-1-2',
      question: {
        en: 'Which research method is the ONLY one capable of determining cause-and-effect relationships?',
        am: 'የመንስኤ እና የውጤት (Cause-and-effect) ግንኙነትን በእርግጠኝነት ማረጋገጥ የሚችለው ብቸኛው የምርምር ዘዴ የትኛው ነው?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Naturalistic Observation', am: 'ተፈጥሮአዊ ምልከታ (Naturalistic Observation)' } },
        { id: 'opt-b', text: { en: 'Correlational Research', am: 'ተዛምዷዊ ጥናት (Correlational Research)' } },
        { id: 'opt-c', text: { en: 'Case Study', am: 'የግለሰብ ታሪክ ጥናት (Case Study)' } },
        { id: 'opt-d', text: { en: 'Experimental Research', am: 'የሙከራ ምርምር (Experimental Research)' } }
      ],
      correctOptionId: 'opt-d',
      explanation: {
        en: 'Only experiments involve systematically manipulating an independent variable while controlling extraneous variables to observe direct effects on the dependent variable.',
        am: 'የሙከራ ምርምር ብቻ ራሱን የቻለ ተለዋዋጭን ሆን ብሎ በመለዋወጥ እና ሌሎች ጣልቃ ገቦችን በመቆጣጠር ቀጥተኛ መንስኤና ውጤትን ያረጋግጣል።'
      }
    }
  ],
  matching: [
    {
      id: 'm-1-1',
      concept: { en: 'Wilhelm Wundt (1879)', am: 'ዊልሄልም ቩንት (1879)' },
      definition: { en: 'Father of modern psychology; First laboratory in Leipzig, Germany', am: 'የዘመናዊ ስነ-ልቦና አባት፤ የመጀመሪያው ላብራቶሪ መስራች' }
    },
    {
      id: 'm-1-2',
      concept: { en: 'Edward Titchener', am: 'ኤድዋርድ ቲቸነር' },
      definition: { en: 'Founded Structuralism; studied elements of conscious experience', am: 'መዋቅራዊነትን መስርቷል፤ የአዕምሮን ህዋሳት አጥንቷል' }
    },
    {
      id: 'm-1-3',
      concept: { en: 'William James', am: 'ዊሊያም ጄምስ' },
      definition: { en: 'Founded Functionalism; authored first psychology textbook', am: 'ተግባራዊነትን መስርቷል፤ የመጀመሪያውን የስነ-ልቦና መጽሐፍ ጽፏል' }
    },
    {
      id: 'm-1-4',
      concept: { en: 'John B. Watson', am: 'ጆን ቢ. ዋትሰን' },
      definition: { en: 'Founded Behaviorism; focused strictly on observable actions', am: 'ባህሪይነትን መስርቷል፤ በሚታይ ውጫዊ ተግባር ላይ ብቻ አተኩሯል' }
    },
    {
      id: 'm-1-5',
      concept: { en: 'Sigmund Freud', am: 'ሲግመንድ ፍሮይድ' },
      definition: { en: 'Founded Psychoanalysis; emphasized the unconscious mind & libido', am: 'ስነ-ተንታኝነትን መስርቷል፤ ባለማወቅ አእምሮ ላይ አተኩሯል' }
    }
  ],
  flashcards: [
    {
      id: 'fc-1-1',
      termEn: 'Psychology',
      termAm: 'ስነ-ልቦና (ሳይኮሎጂ)',
      phoneticAm: 'Sene-Libona',
      defEn: 'The scientific study of human behavior and underlying mental processes.',
      defAm: 'የሰው ልጅ ባህሪ እና ከበስተጀርባ ያሉትን የአዕምሮ ሂደቶች በሳይንሳዊ መንገድ ማጥናት።',
      exampleEn: 'Psychologists examine both overt actions and covert thoughts.',
      exampleAm: 'የስነ-ልቦና ባለሙያዎች የሚታዩ ድርጊቶችንና የውስጥ ሀሳቦችን ይመረምራሉ።',
      chapter: 1
    },
    {
      id: 'fc-1-2',
      termEn: 'Objective Introspection',
      termAm: 'ኦብጀክቲቭ ኢንትሮስፔክሽን',
      phoneticAm: 'Objective Introspection',
      defEn: 'A research technique developed by Wundt to scientifically examine one’s own conscious mental experiences.',
      defAm: 'ቩንት የፈጠረው የራስን የህሊና እና የስሜት ልምዶች በሳይንሳዊ መንገድ የመመርመሪያ ስልት።',
      exampleEn: 'Subjects described their immediate sensory feelings to a sound stimulus.',
      exampleAm: 'ተሳታፊዎች ለድምፅ ንዝረት የነበራቸውን ፈጣን ስሜት በዝርዝር አስረድተዋል።',
      chapter: 1
    },
    {
      id: 'fc-1-3',
      termEn: 'Independent Variable',
      termAm: 'ራሱን የቻለ ተለዋዋጭ',
      phoneticAm: 'Rasun Yechale Telewawoch',
      defEn: 'The factor in an experiment that is manipulated by the researcher to observe its effect.',
      defAm: 'በምርምር ውስጥ ተመራማሪው ውጤቱን ለማየት ሆን ብሎ የሚቀያይረው መንስኤ።',
      exampleEn: 'The amount of study hours given before an examination.',
      exampleAm: 'ከፈተና በፊት ለተማሪዎች የተመደበው የጥናት ሰዓት መጠን።',
      chapter: 1
    },
    {
      id: 'fc-1-4',
      termEn: 'Dependent Variable',
      termAm: 'ጥገኛ ተለዋዋጭ',
      phoneticAm: 'Tigenya Telewawoch',
      defEn: 'The measurable outcome or behavior in an experiment that changes in response to the independent variable.',
      defAm: 'በራሱ የቻለው ተለዋዋጭ ለውጥ ምክንያት የሚለካው ወይም የሚመጣው ውጤት።',
      exampleEn: 'The exam score achieved by the students.',
      exampleAm: 'ተማሪዎቹ በፈተና ያገኙት የመጨረሻ የነጥብ ውጤት።',
      chapter: 1
    }
  ]
};
