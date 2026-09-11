import { Chapter } from '../../types';

export const chapter3: Chapter = {
  id: 3,
  number: 3,
  title: {
    en: 'Learning and Theories of Learning',
    am: 'መማር እና የመማር ንድፈ-ሀሳቦች (Learning & Theories)'
  },
  universityAuthor: 'Aemero Asmamaw (University of Gondar)',
  overview: {
    en: 'Covers the psychological foundations of human learning: definitions, characteristics, and principles; factors influencing learning; classical conditioning (Pavlov); operant conditioning (Skinner); social learning theory (Bandura); and cognitive learning theories (Tolman\'s latent learning and Köhler\'s insight learning).',
    am: 'የሰው ልጅ የመማር ሳይንሳዊ መሰረቶችን፣ መርሆዎችን እና ተፅዕኖ ፈጣሪ ሁኔታዎችን ያብራራል፤ የፓቭሎቭ ክላሲካል ኮንዲሽኒንግ፣ የስኪነር ኦፔራንት ኮንዲሽኒንግ እና የማጠናከሪያ ሰንጠረዦች፣ የባንዱራ ማህበራዊ መማር እና የእውቀት (ኮግኒቲቭ) የመማር ንድፈ-ሀሳቦችን ያጠቃልላል።'
  },
  learningOutcomes: [
    { en: 'Define learning as a relatively permanent change in behavior resulting from practice or experience', am: 'መማር ማለት በልምምድ ወይም በተሞክሮ የሚገኝ ዘላቂ የባህሪ ለውጥ መሆኑን መተርጎም' },
    { en: 'Identify the 9 characteristics and 8 principles of effective learning', am: '9ኙን የመማር መገለጫዎች እና 8ቱን የመማር መርሆዎች መለየት' },
    { en: 'Analyze Classical Conditioning (UCS, UCR, CS, CR, extinction, generalization, discrimination)', am: 'ክላሲካል ኮንዲሽኒንግን (UCS, UCR, CS, CR) እና መርሆዎቹን መተንተን' },
    { en: 'Master Operant Conditioning: Positive/Negative Reinforcement, 4 Intermittent Schedules, and Shaping', am: 'ኦፔራንት ኮንዲሽኒንግን፡ አዎንታዊ/አሉታዊ ማጠናከሪያዎችን እና የማጠናከሪያ ሰንጠረዦችን መቆጣጠር' },
    { en: 'Explain Bandura’s Social Learning (4 conditions) and Cognitive Learning (Latent & Insight)', am: 'የባንዱራ ማህበራዊ መማርን እንዲሁም ድብቅ (Latent) እና ጥልቅ (Insight) መማርን ማስረዳት' }
  ],
  sections: [
    {
      id: 'sec-3-1',
      number: '3.1',
      title: {
        en: 'Definition, Characteristics and Principles of Learning',
        am: 'የመማር ትርጓሜ፣ መገለጫዎች እና መርሆዎች'
      },
      paragraphs: [
        {
          id: 'p-3-1-1',
          subheading: { en: 'Scientific Definition of Learning', am: 'ሳይንሳዊ የመማር ትርጓሜ' },
          en: 'Learning is defined as "a relatively permanent change in behavior occurring as a result of experience or practice." This definition highlights four essential attributes:\n1. It represents a definite change in behavior.\n2. The change is relatively permanent and enduring.\n3. It explicitly EXCLUDES temporary changes caused by fatigue, illness, drugs, or biological maturation.\n4. It stems directly from interaction with the environment (practice or experience).',
          am: 'መማር ማለት "በልምምድ ወይም በተሞክሮ ምክንያት የሚመጣ በአንፃራዊነት ዘላቂ የሆነ የባህሪ ለውጥ" ነው። ዋና መገለጫዎቹ፡\n1. ግልጽ የባህሪ ለውጥ መኖሩ።\n2. ለውጡ በአንፃራዊነት ቋሚ መሆኑ።\n3. በድካም፣ በህመም፣ በአደንዛዥ እፅ ወይም በእድገት (Maturation) የሚመጡ ጊዜያዊ ለውጦችን አይጨምርም።\n4. ለውጡ የተገኘው ከተግባራዊ ልምምድ ወይም ተሞክሮ መሆኑ ነው።'
        },
        {
          id: 'p-3-1-2',
          subheading: { en: 'Principles of Effective Learning', am: 'ውጤታማ የመማር መርሆዎች' },
          en: 'Key principles include: Readiness (learners grasp best when physically and emotionally prepared); Exercise/Practice (regular meaningful practice ensures retention); Effect (pleasant consequences strengthen learning, unpleasant consequences weaken it); Primacy (first impressions are strong); Recency (recent material is recalled best); and Distributed Learning (spaced review outperforms cramming).',
          am: 'ዋና መርሆዎች፡ ዝግጁነት (አእምሮአዊና አካላዊ ዝግጁነት ውጤታማ ያደርጋል)፤ ልምምድ (ትርጉም ያለው ድግግሞሽ ትውስታን ያጠነክራል)፤ ውጤት (አስደሳች ውጤት ባህሪን ያጠናክራል፣ ህመም ግን ያዳክማል)፤ ቅድሚያ (መጀመሪያ የተማሩት በጥልቀት ይታወሳል)፤ እና የቅርብ ጊዜነት (በቅርቡ የተከለሰ ቶሎ ይታወሳል)።'
        }
      ]
    },
    {
      id: 'sec-3-2',
      number: '3.2',
      title: {
        en: 'Behavioral Theories: Classical and Operant Conditioning',
        am: 'ባህሪያዊ ንድፈ-ሀሳቦች፡ ክላሲካል እና ኦፔራንት ኮንዲሽኒንግ'
      },
      paragraphs: [
        {
          id: 'p-3-2-1',
          subheading: { en: 'Pavlov’s Classical Conditioning', am: 'የኢቫን ፓቭሎቭ ክላሲካል ኮንዲሽኒንግ' },
          en: 'Ivan Pavlov discovered classical conditioning when dogs learned to associate the sound of a bell with meat powder:\n• Unconditioned Stimulus (UCS): Meat powder (naturally triggers salivation).\n• Unconditioned Response (UCR): Natural salivation to meat.\n• Conditioned Stimulus (CS): Neutral bell sound paired repeatedly with meat.\n• Conditioned Response (CR): Learned salivation elicited solely by the bell.\nKey phenomena: Stimulus Generalization (reacting similarly to a door chime), Discrimination (salivating only to the exact bell), Extinction (stopping when bell is unreinforced), and Spontaneous Recovery.',
          am: 'ኢቫን ፓቭሎቭ ውሾች የደወል ድምፅን ከስጋ ጋር እንዲያዛምዱ በማድረግ ክላሲካል ኮንዲሽኒንግን አገኘ፡\n• ተፈጥሮአዊ ማነቃቂያ (UCS)፡ ስጋ (ያለ ትምህርት ምራቅ የሚያስወጣ)።\n• ተፈጥሮአዊ ምላሽ (UCR)፡ ለስጋው የሚወጣ ተፈጥሮአዊ ምራቅ።\n• የተላመደ ማነቃቂያ (CS)፡ ደወል (ከስጋው ጋር በተደጋጋሚ የተጣመረ)።\n• የተላመደ ምላሽ (CR)፡ ደወሉን ብቻ ሰምቶ የሚወጣ የተማረ ምራቅ።\nዋና መርሆዎች፡ አጠቃላይ ማድረግ (Generalization)፣ መለየት (Discrimination)፣ መጥፋት (Extinction) እና ድንገተኛ መልሶ መምጣት (Spontaneous Recovery)።'
        },
        {
          id: 'p-3-2-2',
          subheading: { en: 'Skinner’s Operant Conditioning', am: 'የቢ.ኤፍ. ስኪነር ኦፔራንት ኮንዲሽኒንግ' },
          en: 'B.F. Skinner emphasized that voluntary behavior is shaped by its environmental consequences (reinforcement vs. punishment).\n• Positive Reinforcement: Adding a desirable stimulus (praise, bonus, high grades) increases behavior.\n• Negative Reinforcement: Removing an aversive stimulus (stopping loud nagging when you clean) increases behavior. (Not punishment!).\n• Positive Punishment: Adding an unpleasant stimulus (scolding) decreases behavior.\n• Negative Punishment: Removing a pleasant privilege (grounding, losing car keys) decreases behavior.\n• Shaping: Reinforcing successive approximations to build complex new skills.',
          am: 'ቢ.ኤፍ. ስኪነር የሰው ልጅ ፈቃደኛ ባህሪ የሚቀረፀው በሚከተለው ውጤት (ማጠናከሪያ ወይም ቅጣት) መሆኑን አሳይቷል፡\n• አዎንታዊ ማጠናከሪያ፡ ተፈላጊ ሽልማትን በመስጠት (ምስጋና፣ ውጤት) ባህሪው እንዲደገም ማድረግ።\n• አሉታዊ ማጠናከሪያ፡ የሚያስጨንቅን ነገር በማስወገድ (ለምሳሌ፡ ካጠኑ ወቀሳው ይቆማል) ባህሪው እንዲጨምር ማድረግ (ቅጣት አይደለም!)።\n• አዎንታዊ ቅጣት፡ የሚያስቀይም ነገር በመጨመር (ተግሳጽ) ባህሪን መቀነስ።\n• አሉታዊ ቅጣት፡ ተወዳጅ መብትን በመንጠቅ ባህሪን ማስቀረት።\n• ቅርፅ ማስያዝ (Shaping)፡ ደረጃ በደረጃ የተቃረቡ ድርጊቶችን እያበረታቱ አዲስ ውስብስብ ባህሪን ማስተማር።'
        },
        {
          id: 'p-3-2-3',
          subheading: { en: 'Schedules of Reinforcement', am: 'የማጠናከሪያ ሰንጠረዦች' },
          en: '1. Fixed-Ratio (FR): Reinforcement delivered after a specific, fixed number of responses (e.g., getting paid for every 5 shirts produced). Post-reinforcement pause.\n2. Variable-Ratio (VR): Reinforcement delivered after an unpredictable average number of responses (e.g., gambling, slot machines). Yields highest, most extinction-resistant rate!\n3. Fixed-Interval (FI): Reinforced after a fixed passage of time (e.g., studying only right before weekly Friday tests).\n4. Variable-Interval (VI): Reinforced after varying, unpredictable time intervals (e.g., pop quizzes). Produces steady, moderate response rates.',
          am: '1. ቋሚ-ቁጥር (Fixed-Ratio)፡ ከተወሰነ ቋሚ የምላሽ ብዛት በኋላ የሚሰጥ (ለምሳሌ፡ በየ5ቱ ሸሚዝ የሚከፈል ደመወዝ)።\n2. ተለዋዋጭ-ቁጥር (Variable-Ratio)፡ በማይታወቅ አማካይ ብዛት የሚሰጥ (ለምሳሌ፡ ሎተሪ፣ ቁማር)። በጣም ጠንካራ እና ፈጽሞ የማይጠፋ ባህሪ ይፈጥራል!\n3. ቋሚ-ጊዜ (Fixed-Interval)፡ ቋሚ ጊዜ ካለፈ በኋላ የሚሰጥ (ለምሳሌ፡ በየሳምንቱ አርብ የሚሰጥ ፈተና)።\n4. ተለዋዋጭ-ጊዜ (Variable-Interval)፡ በማይታወቅ ጊዜ የሚሰጥ (ለምሳሌ፡ ድንገተኛ ፈተና)። የማያቋርጥ ጥናት ያስከትላል።'
        }
      ]
    },
    {
      id: 'sec-3-3',
      number: '3.3',
      title: {
        en: 'Social and Cognitive Theories of Learning',
        am: 'ማህበራዊ እና አስተውሎታዊ የመማር ንድፈ-ሀሳቦች'
      },
      paragraphs: [
        {
          id: 'p-3-3-1',
          subheading: { en: 'Bandura’s Social Cognitive Theory', am: 'የአልበርት ባንዱራ ማህበራዊ ኮግኒቲቭ ንድፈ-ሀሳብ' },
          en: 'Albert Bandura showed that humans learn predominantly through observational learning (modeling) by watching others. Observational learning requires 4 cognitive processes:\n1. Attention: Noticing the model.\n2. Retention: Storing the model\'s actions in memory via rehearsal.\n3. Motor Reproduction: Physical capability to perform the observed behavior.\n4. Motivation: Having a reason/reinforcement to execute the behavior.\nSelf-efficacy—the student\'s belief in their ability to succeed—is critical.',
          am: 'አልበርት ባንዱራ ሰዎች አብዛኛውን ባህሪያቸውን የሚማሩት ሌሎችን በመመልከት እና አርአያ (Model) በማድረግ መሆኑን አስረድቷል። ይህም 4 ቅድመ-ሁኔታዎችን ይፈልጋል፡\n1. ትኩረት (Attention)፡ አርአያውን መመልከት።\n2. ማስታወስ (Retention)፡ ያዩትን በአእምሮ ማቆየት።\n3. በተግባር ማሳየት (Motor Reproduction)፡ የተመለከቱትን ለመስራት የሚያስችል አካላዊ ብቃት መኖር።\n4. ተነሳሽነት (Motivation)፡ ድርጊቱን ለመፈፀም ፍላጎት ወይም ሽልማት መኖር።\nየራስ አቅም እምነት (Self-efficacy) ለተማሪዎች ስኬት ወሳኝ ነው።'
        },
        {
          id: 'p-3-3-2',
          subheading: { en: 'Cognitive Learning: Latent & Insight Learning', am: 'ኮግኒቲቭ መማር፡ ድብቅ እና ጥልቅ መማር' },
          en: '• Latent Learning (Edward Tolman): Learning that occurs without reinforcement and is not immediately demonstrated until a reward is provided. Tolman\'s maze rats formed a "cognitive map" of the maze without food rewards and demonstrated it as soon as food was introduced on day 11.\n• Insight Learning (Wolfgang Köhler): A sudden reorganization of perceptions that solves a problem in a flash of understanding (the "Aha!" experience), common in creative and higher-order human thinking.',
          am: '• ድብቅ መማር (Latent Learning - ኤድዋርድ ቶልማን)፡ ያለ ሽልማት የተማሩት ነገር ግን ሽልማት እስኪቀርብ ድረስ በግልጽ የማይታይ መማር። አይጦች በማዝ ውስጥ ሲዞሩ የአካባቢውን ካርታ በአእምሯቸው ይዘው ምግብ ሲቀርብላቸው ወዲያውኑ ተጠቅመውበታል።\n• ጥልቅ መማር (Insight Learning - ቮልፍጋንግ ኮህለር)፡ የችግርን አካላት አቀናጅቶ በቅጽበት መፍትሄ ላይ መድረስ ("አገኘሁት!" ወይም Aha! ስሜት)።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-3-1',
      title: { en: 'Learning Core Concept', am: 'የመማር ቁልፍ ፅንሰ-ሀሳብ' },
      bullets: [
        { en: 'Relatively permanent behavioral change produced by experience/practice.', am: 'በልምምድ ወይም በተሞክሮ የሚመጣ ዘላቂ የባህሪ ለውጥ።' },
        { en: 'Excludes temporary biological changes (fatigue, illness, drug intoxication, physical maturation).', am: 'ድካምን፣ ህመምን፣ ስካርንና ተፈጥሮአዊ የአካል እድገትን አያጠቃልልም።' }
      ]
    },
    {
      id: 'sum-3-2',
      title: { en: 'Classical vs. Operant Conditioning', am: 'ክላሲካል እና ኦፔራንት ንፅፅር' },
      bullets: [
        { en: 'Classical (Pavlov): Involuntary, reflexive responses linked to paired stimuli.', am: 'ክላሲካል፡ ኢ-ፈቃደኛ እና ተፈጥሮአዊ ምላሾችን ከማነቃቂያ ጋር ማጣመር።' },
        { en: 'Operant (Skinner): Voluntary behaviors controlled by reinforcing or punishing consequences.', am: 'ኦፔራንት፡ ፈቃደኛ ድርጊቶችን በውጤት (ማጠናከሪያ/ቅጣት) መቅረፅ።' },
        { en: 'Variable-Ratio reinforcement produces the most persistent behavior.', am: 'ተለዋዋጭ-ቁጥር ማጠናከሪያ (VR) ለመጥፋት የማይበገር ፅኑ ባህሪ ይፈጥራል።' }
      ]
    },
    {
      id: 'sum-3-3',
      title: { en: 'Social & Cognitive Breakthroughs', am: 'ማህበራዊ እና ኮግኒቲቭ ድምዳሜዎች' },
      bullets: [
        { en: 'Observational Learning (Bandura): Attention, Retention, Motor Reproduction, Motivation.', am: 'የምልከታ መማር፡ ትኩረት፣ ማስታወስ፣ ማባዛት እና ተነሳሽነት።' },
        { en: 'Latent Learning (Tolman): Stored knowledge demonstrated when incentives arise.', am: 'ድብቅ መማር፡ እውቀት ተቀምጦ ማበረታቻ ሲመጣ በተግባር ይታያል።' },
        { en: 'Insight Learning (Köhler): Sudden problem resolution without trial-and-error.', am: 'ጥልቅ መማር፡ ያለ ብዙ ሙከራና ስህተት ድንገት መፍትሄን መረዳት።' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-3-1',
      number: 1,
      category: 'case_study',
      question: {
        en: 'A one-year-old toddler sticks a toy into an electrical outlet, receives an electric shock, and cries in terror. Later, whenever his mother brings him the toy, he cries and refuses to touch it. Identify the UCS, UCR, CS, and CR in this scenario.',
        am: 'አንድ የአንድ ዓመት ህፃን መጫወቻውን ከኤሌክትሪክ ሶኬት ጋር ሲነካ ንዝረት አግኝቶት በፍርሀት አለቀሰ። ከዚያ በኋላ እናቱ ያን መጫወቻ ስትሰጠው ፈርቶ ያለቅሳል። በዚህ ሁኔታ ውስጥ UCS, UCR, CS እና CR የትኞቹ ናቸው?'
      },
      answer: {
        en: '• UCS (Unconditioned Stimulus): Electric shock (natural painful stimulus).\n• UCR (Unconditioned Response): Pain, crying, and fright triggered by the shock.\n• CS (Conditioned Stimulus): The toy (previously neutral, now associated with shock).\n• CR (Conditioned Response): Fear and crying at the sight of the toy alone.',
        am: '• UCS (ተፈጥሮአዊ ማነቃቂያ)፡ የኤሌክትሪክ ንዝረት።\n• UCR (ተፈጥሮአዊ ምላሽ)፡ በንዝረቱ ምክንያት የተፈጠረ ህመም እና ልቅሶ።\n• CS (የተላመደ ማነቃቂያ)፡ መጫወቻው (ቀደም ሲል ገለልተኛ የነበረ)።\n• CR (የተላመደ ምላሽ)፡ መጫወቻውን በማየት ብቻ የሚፈጠር ፍርሃትና ልቅሶ።'
      },
      explanation: {
        en: 'The painful physical shock naturally evoked fear. Through contiguity and pairing, the previously innocent toy acquired the power to elicit the exact same fearful emotional response.',
        am: 'የኤሌክትሪኩ ህመም ተፈጥሮአዊ ፍርሀት አስከትሏል። መጫወቻው ከህመሙ ጋር በመጣመሩ ምክንያት ህፃኑ መጫወቻውን ባየ ቁጥር ፍርሀት እንዲሰማው ተምሯል።'
      }
    },
    {
      id: 'q-3-2',
      number: 2,
      category: 'conceptual',
      question: {
        en: 'What is the critical difference between Negative Reinforcement and Punishment in operant conditioning?',
        am: 'በኦፔራንት ኮንዲሽኒንግ ውስጥ በአሉታዊ ማጠናከሪያ (Negative Reinforcement) እና በቅጣት (Punishment) መካከል ያለው ወሳኝ ልዩነት ምንድነው?'
      },
      answer: {
        en: 'Negative reinforcement STRENGTHENS or INCREASES a behavior by removing an unpleasant condition (e.g., buckling a seatbelt to stop an annoying beeping sound). Punishment WEAKENS or DECREASES a behavior (e.g., receiving a fine for speeding).',
        am: 'አሉታዊ ማጠናከሪያ የሚያስጠላን ነገር በማስወገድ ባህሪው እንዲጨምር ወይም እንዲደገም ያደርጋል (ለምሳሌ፡ የሚያበሳጭ ጩኸት እንዲቆም ቀበቶ ማሰር)። ቅጣት ግን ባህሪው እንዲቀንስ ወይም እንዲጠፋ ያደርጋል (ለምሳሌ፡ ፍጥነት በማብዛት መቀጣት)።'
      },
      explanation: {
        en: 'Students often confuse the word "negative" with punishment. In psychological science, "reinforcement" always means increasing behavior, while "negative" simply refers to subtraction or removal.',
        am: 'ተማሪዎች "አሉታዊ" የሚለውን ቃል ከቅጣት ጋር ያምታቱታል። በሳይኮሎጂ ውስጥ ማጠናከሪያ ምንጊዜም ባህሪን ይጨምራል፤ አሉታዊ ማለት ደግሞ የሆነን ነገር ማስወገድ ማለት ነው።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-3-1',
      question: {
        en: 'Which schedule of reinforcement produces the highest rate of responding and is the most resistant to extinction (e.g., slot machines)?',
        am: 'በጣም ከፍተኛ የምላሽ መጠን የሚያስገኘውና ለመጥፋት (Extinction) እጅግ የማይበገረው የማጠናከሪያ ሰንጠረዥ የትኛው ነው (ለምሳሌ፡ የቁማር ማሽኖች)?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Fixed-Ratio (FR)', am: 'ቋሚ-ቁጥር (FR)' } },
        { id: 'opt-b', text: { en: 'Fixed-Interval (FI)', am: 'ቋሚ-ጊዜ (FI)' } },
        { id: 'opt-c', text: { en: 'Variable-Ratio (VR)', am: 'ተለዋዋጭ-ቁጥር (VR)' } },
        { id: 'opt-d', text: { en: 'Variable-Interval (VI)', am: 'ተለዋዋጭ-ጊዜ (VI)' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Variable-Ratio (VR) rewards after an unpredictable number of attempts. Because the subject never knows which attempt will yield reward, they persist steadily.',
        am: 'ተለዋዋጭ-ቁጥር (VR) በማይታወቅ የሙከራ ብዛት ስለሚሸልም፣ ተሳታፊው መቼ እንደሚሸለም ስለማያውቅ ያለማቋረጥ ጥረቱን ይቀጥላል።'
      }
    }
  ],
  matching: [
    {
      id: 'm-3-1',
      concept: { en: 'Ivan Pavlov', am: 'ኢቫን ፓቭሎቭ' },
      definition: { en: 'Discovered Classical Conditioning with salivary reflexes in dogs', am: 'የውሾች ምራቅን በማጥናት ክላሲካል ኮንዲሽኒንግን ያገኘ' }
    },
    {
      id: 'm-3-2',
      concept: { en: 'B.F. Skinner', am: 'ቢ.ኤፍ. ስኪነር' },
      definition: { en: 'Operant Conditioning; Reinforcement schedules & Skinner box', am: 'ኦፔራንት ኮንዲሽኒንግ እና የማጠናከሪያ ሰንጠረዦች ፈጣሪ' }
    },
    {
      id: 'm-3-3',
      concept: { en: 'Albert Bandura', am: 'አልበርት ባንዱራ' },
      definition: { en: 'Social Learning Theory; Observational learning & modeling', am: 'የማህበራዊ መማር ንድፈ-ሀሳብ፤ አርአያን መመልከት' }
    },
    {
      id: 'm-3-4',
      concept: { en: 'Wolfgang Köhler', am: 'ቮልፍጋንግ ኮህለር' },
      definition: { en: 'Insight Learning; chimpanzees solving problems with sudden insight', am: 'ጥልቅ መማር፤ ቺምፓንዚዎች በድንገት ችግር ሲፈቱ ያጠና' }
    }
  ],
  flashcards: [
    {
      id: 'fc-3-1',
      termEn: 'Learning',
      termAm: 'መማር (ለርኒንግ)',
      defEn: 'A relatively permanent change in behavior resulting from experience or practice.',
      defAm: 'በልምምድ ወይም በተሞክሮ ምክንያት የሚመጣ በአንፃራዊነት ዘላቂ የሆነ የባህሪ ለውጥ።',
      chapter: 3
    },
    {
      id: 'fc-3-2',
      termEn: 'Positive Reinforcement',
      termAm: 'አዎንታዊ ማጠናከሪያ',
      defEn: 'Strengthening behavior by presenting a desirable stimulus following the response.',
      defAm: 'ተፈላጊ ሽልማት በመስጠት ባህሪው እንዲደገም የማጠናከር ሂደት።',
      chapter: 3
    },
    {
      id: 'fc-3-3',
      termEn: 'Shaping',
      termAm: 'ቅርፅ ማስያዝ (ሼፒንግ)',
      defEn: 'Operant procedure of reinforcing successive approximations of a desired behavior.',
      defAm: 'ደረጃ በደረጃ ወደ ተፈለገው ባህሪ የተቃረቡ ድርጊቶችን እያበረታቱ አዲስ ባህሪ ማስተማር።',
      chapter: 3
    }
  ]
};
