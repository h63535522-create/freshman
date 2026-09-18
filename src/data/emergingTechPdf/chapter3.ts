import { OfficialPdfPage } from '../geographyPdf/types';

export const emergingTechChapter3Pages: OfficialPdfPage[] = [
  // Page 36: Chapter 3 Intro & What is AI (Book Page 35)
  {
    pdfPageNumber: 36,
    bookPageLabel: '35',
    chapterNumber: 3,
    sectionRef: '3.1',
    titleEn: 'Chapter 3: Artificial Intelligence (AI) — Definition and Foundations',
    titleAm: 'ምዕራፍ 3፡ አርቴፊሻል ኢንተለጀንስ (ሰው ሰራሽ አስተውሎት) — ትርጓሜ እና መሰረተ-ሀሳቦች',
    subtopicEn: 'Chapter Objectives & "Man-Made Thinking Power" Concept',
    subtopicAm: 'የምዕራፉ አላማዎች እና የሰው ሰራሽ አስተውሎት ምንነት',
    pageType: 'content',
    contentEn: `Chapter 3: Artificial Intelligence (AI)

Introduction
In the previous chapter you have studied about data science, how data acquisition, analyzed and stored. Basic concepts of big data were also studied. In this chapter, artificial intelligence, history, types, and applications in different sectors are studied. Finally, some tools and platforms, as well as a real sample of AI applications, are discussed.

After completing this chapter, the students will be able to:
➢ Explain what artificial intelligence (AI) is.
➢ Describe the eras of AI.
➢ Explain the types and approaches of AI.
➢ Describe the applications of AI in health, agriculture, business and education.
➢ List the factors that influenced the advancement of AI in recent years.
➢ Understand the relationship between the human’s way of thinking and AI systems.
➢ Identify AI research focus areas.
➢ Identify real-world AI applications, some platforms, and tools.

3.1. What is Artificial Intelligence (AI)
Artificial Intelligence is composed of two words: Artificial and Intelligence.

Activity 3.1:
➢ How do you define the word Artificial? And the word Intelligence?

Artificial defines "man-made," and intelligence defines "thinking power", or “the ability to learn and solve problems” hence Artificial Intelligence means "a man-made thinking power."
So, we can define Artificial Intelligence (AI) as the branch of computer science by which we can create intelligent machines which can behave like a human, think like humans, and are able to make decisions.
Intelligence, as we know, is the ability to acquire and apply knowledge. Knowledge is the information acquired through experience. Experience is the knowledge gained through exposure (training). Summing the terms up, we get artificial intelligence as the “copy of something natural (i.e., human beings) WHO is capable of acquiring and applying the information it has gained through exposure.”`,
    contentAm: `ምዕራፍ 3፡ አርቴፊሻል ኢንተለጀንስ (ሰው ሰራሽ አስተውሎት - AI)

መግቢያ
ባለፈው ምዕራፍ ስለ ዳታ ሳይንስና ቢግ ዳታ ተምረናል። በዚህ ምዕራፍ ስለ ሰው ሰራሽ አስተውሎት፣ ታሪኩ፣ አይነቶቹ፣ በየዘርፉ ስላለው አተገባበር እና ፕላትፎርሞች እንማራለን።

ይህንን ምዕራፍ ካጠናቀቁ በኋላ ተማሪዎች፡
➢ AI ምን እንደሆነ ያብራራሉ።
➢ የAIን ዘመናትና ታሪክ ይገልጻሉ።
➢ የAI አይነቶችንና አቀራረቦችን ይለያሉ።
➢ በጤና፣ ግብርና፣ ንግድና ትምህርት ውስጥ ያለውን አተገባበር ያብራራሉ።
➢ የሰው ልጅ አስተሳሰብ ከAI ስርአቶች ጋር ያለውን ግንኙነት ይረዳሉ።

3.1. አርቴፊሻል ኢንተለጀንስ ምንድን ነው?
አርቴፊሻል ኢንተለጀንስ ከሁለት ቃላት የተዋቀረ ነው፡ አርቴፊሻል (ሰው ሰራሽ) እና ኢንተለጀንስ (አስተውሎት / የማሰብና የመማር አቅም)። ስለዚህ AI ማለት "ሰው ሰራሽ የማሰብ አቅም" ማለት ነው።
በኮምፒውተር ሳይንስ ትርጓሜ፡ እንደ ሰው የሚያስቡ፣ እንደ ሰው የሚሰሩ እና በራሳቸው ውሳኔ መስጠት የሚችሉ አስተዋይ ማሽኖችን የመፍጠር የሳይንስ ዘርፍ ነው።`
  },

  // Page 37: Intelligence Components & AI Agents (Book Page 36)
  {
    pdfPageNumber: 37,
    bookPageLabel: '36',
    chapterNumber: 3,
    sectionRef: '3.1',
    titleEn: 'Components of Intelligence & Intelligent Agent Architecture',
    titleAm: 'የአስተውሎት ክፍሎች እና የአስተዋይ ወኪል (Agent) አወቃቀር',
    subtopicEn: 'Reasoning, Learning, Problem Solving, Perception, Linguistic Intelligence, and Sensors/Effectors',
    subtopicAm: 'ምክንያታዊነት፣ መማር፣ ችግር መፍታት፣ ግንዛቤ እና ሴንሰር/ተግባሪ አካላት',
    pageType: 'content',
    contentEn: `Activity 3.2:
➢ What do you think to make the machine think and make a decision like human beings do?

Artificial Intelligence exists when a machine can have human-based skills such as learning, reasoning, and solving problems. With Artificial Intelligence you do not need to preprogram a machine to do some work, despite that you can create a machine with programmed algorithms which can work with its own intelligence.

Intelligence is composed of:
➢ Reasoning
➢ Learning
➢ Problem Solving
➢ Perception
➢ Linguistic Intelligence

An AI system is composed of an agent and its environment. An agent (e.g., human or robot) is anything that can perceive its environment through sensors and acts upon that environment through effectors. Intelligent agents must be able to set goals and achieve them. In classical planning problems, the agent can assume that it is the only system acting in the world, allowing the agent to be certain of the consequences of its actions. However, if the agent is not the only actor, then it requires that the agent can reason under uncertainty. This calls for an agent that cannot only assess its environment and make predictions but also evaluate its predictions and adapt based on its assessment. Machine perception is the ability to use input from sensors (such as cameras, microphones, sensors, etc.) to deduce aspects of the world (e.g., Computer Vision).

High-profile examples of AI include autonomous vehicles (such as drones and self-driving cars), medical diagnosis, creating art (such as poetry), proving mathematical theorems, playing games (such as Chess or Go), search engines (such as Google search), and online assistants (such as Siri).`,
    contentAm: `አስተውሎት (Intelligence) የሚከተሉትን ያጠቃልላል፡
➢ ምክንያታዊነት (Reasoning)
➢ መማር (Learning)
➢ ችግር መፍታት (Problem Solving)
➢ ግንዛቤ (Perception)
➢ የቋንቋ አስተውሎት (Linguistic Intelligence)

የAI ወኪል (Agent) እና አካባቢ (Environment)፡
አንድ የAI ወኪል (ሰው ወይም ሮቦት) አካባቢውን በሴንሰሮች (Sensors) አማካኝነት ይረዳል፣ በኤፌክተሮች (Effectors / Actuators) ደግሞ እርምጃ ይወስዳል። ማሽኑ እርግጠኛ ባልሆነ ሁኔታ ውስጥ ውሳኔ መስጠት እና ትንበያዎችን እያስተካከለ መላመድ አለበት።`
  },

  // Page 38: AI, Machine Learning, and Deep Learning (Book Page 37)
  {
    pdfPageNumber: 38,
    bookPageLabel: '37',
    chapterNumber: 3,
    sectionRef: '3.1',
    titleEn: 'AI, Machine Learning (ML), and Deep Learning (DL) Hierarchy',
    titleAm: 'AI፣ ማሽን ለርኒንግ (ML) እና ዲፕ ለርኒንግ (DL) ተዋረድ',
    subtopicEn: 'Arthur Samuel 1959, GPUs, Big Data Synergy, and Hierarchical Neural Networks',
    subtopicAm: 'አርተር ሳሙኤል (1959)፣ GPUዎች፣ የቢግ ዳታ ውህደት እና ባለብዙ ንብርብር ኒውራል ኔትወርኮች',
    pageType: 'content',
    figures: [
      { id: 'fig-3.1', caption: 'Figure 3.1 Artificial Intelligence (AI), Machine Learning (ML) and Deep Learning (DL)', description: 'Concentric circles showing Deep Learning inside Machine Learning inside Artificial Intelligence.' }
    ],
    contentEn: `AI deals with the area of developing computing systems that are capable of performing tasks that humans are very good at, for example recognizing objects, recognizing and making sense of speech, and decision making in a constrained environment.

The advent of Big Data, driven by the arrival of the internet, smart mobile and social media has enabled AI algorithms, in particular from Machine Learning and Deep Learning, to leverage Big Data and perform their tasks more optimally. This combined with cheaper and more powerful hardware such as Graphical Processing Units (GPUs) has enabled AI to evolve into more complex architectures. Machine Learning is an advanced form of AI where the machine can learn as it goes rather than having every action programmed by humans.

Many times, students get confused between Machine Learning and Artificial Intelligence (see Figure 3.1), but Machine learning, a fundamental concept of AI research since the field’s inception, is the study of computer algorithms that improve automatically through experience. The term machine learning was introduced by Arthur Samuel in 1959. Neural networks are biologically inspired networks that extract features from the data in a hierarchical fashion. The field of neural networks with several hidden layers is called deep learning.

[Figure 3.1 Artificial Intelligence (AI), Machine Learning (ML) and Deep Learning (DL)]`,
    contentAm: `ተማሪዎች ብዙ ጊዜ በAI፣ በማሽን ለርኒንግ እና በዲፕ ለርኒንግ መካከል ይምታታሉ (ምስል 3.1 ይመልከቱ)፡
• አርቴፊሻል ኢንተለጀንስ (AI)፡ አጠቃላይ ሰው ሰራሽ አስተውሎትን የሚወክል ሰፊ ጃንጥላ ነው።
• ማሽን ለርኒንግ (ML)፡ የAI ንዑስ ዘርፍ ሲሆን ማሽኖች ካለፉ መረጃዎችና ልምዶች በራሳቸው እንዲማሩ የሚያስችል አልጎሪዝም ነው። ቃሉ በ1959 በአርተር ሳሙኤል (Arthur Samuel) ተፈጠረ።
• ዲፕ ለርኒንግ (DL)፡ የማሽን ለርኒንግ ንዑስ ክፍል ሆኖ በሰው አዕምሮ የነርቭ ሴሎች አሰራር ተመስርቶ የተሰራ ባለብዙ ድብቅ ንብርብሮች (hidden layers) ያሉት ኒውራል ኔትወርክ ነው።

የቢግ ዳታ መምጣት እና ኃይለኛ የግራፊክስ ፕሮሰሰሮች (GPUs) ለAI ፈጣን እድገት ትልቁን አስተዋጽኦ አበርክተዋል።

[ምስል 3.1 AI፣ ማሽን ለርኒንግ እና ዲፕ ለርኒንግ]`
  },

  // Page 39: Need & Goals of Artificial Intelligence (Book Page 38)
  {
    pdfPageNumber: 39,
    bookPageLabel: '38',
    chapterNumber: 3,
    sectionRef: '3.1.1',
    titleEn: 'Need and Goals of Artificial Intelligence',
    titleAm: 'የሰው ሰራሽ አስተውሎት አስፈላጊነት እና ግቦች',
    subtopicEn: 'Expert Systems, Complex Problem Solving, Replicating Human Cognition',
    subtopicAm: 'ኤክስፐርት ሲስተሞች፣ ውስብስብ ችግሮችን መፍታት እና የሰው ልጅን ማሰብ መኮረጅ',
    pageType: 'content',
    contentEn: `3.1.1. Need for Artificial Intelligence
Activity 3.3:
➢ Why do we need AI at this time?
1. To create expert systems that exhibit intelligent behavior with the capability to learn, demonstrate, explain and advise its users.
2. Helping machines find solutions to complex problems like humans do and applying them as algorithms in a computer-friendly manner.

3.1.2. Goals of Artificial Intelligence
Activity 3.4:
➢ You have learned about AI and the need for it. What do you think is the main goal of the advancement in AI?

Following are the main goals of Artificial Intelligence:
1. Replicate human intelligence
2. Solve Knowledge-intensive tasks
3. An intelligent connection of perception and action
4. Building a machine which can perform tasks that requires human intelligence such as:
   ✓ Proving a theorem
   ✓ Playing chess
   ✓ Planning surgical operations
   ✓ Driving a car in traffic
5. Creating some system which can exhibit intelligent behavior, learn new things by itself, demonstrate, explain, and can advise its user.

3.1.3. What Comprises Artificial Intelligence?
Activity 3.5:
➢ To make a machine learn and make a decision like humans do, AI requires the knowledge of some disciplines. Write down some disciplines which AI requires?`,
    contentAm: `3.1.1. የሰው ሰራሽ አስተውሎት አስፈላጊነት
1. በራሳቸው መማር፣ ማብራራት እና ለተጠቃሚዎች ምክር መስጠት የሚችሉ ኤክስፐርት ሲስተሞችን ለመፍጠር።
2. ማሽኖች እንደ ሰው ውስብስብ ችግሮችን እንዲፈቱና በአልጎሪዝም መልክ እንዲተገብሩ ለማስቻል።

3.1.2. የሰው ሰራሽ አስተውሎት ዋና ዋና ግቦች
1. የሰው ልጅን አስተውሎት መኮረጅ (Replicate human intelligence)
2. ከፍተኛ እውቀት የሚጠይቁ ተግባራትን መፍታት
3. ግንዛቤንና እርምጃን በአስተዋይ መንገድ ማስተሳሰር
4. የሰው ልጅን አእምሮ የሚጠይቁ ስራዎችን የሚሰሩ ማሽኖችን መገንባት፡
   ✓ የሂሳብ ቴዎረሞችን ማረጋገጥ
   ✓ ቼዝ መጫወት
   ✓ የቀዶ ጥገና ስራዎችን ማቀድ
   ✓ በመንገድ ትራፊክ ውስጥ መኪና መንዳት
5. በራሱ አዳዲስ ነገሮችን የሚማር፣ የሚያብራራና ምክር የሚሰጥ ስርአት መፍጠር።`
  },

  // Page 40: Multidisciplinary Nature & Advantages of AI (Book Page 39)
  {
    pdfPageNumber: 40,
    bookPageLabel: '39',
    chapterNumber: 3,
    sectionRef: '3.1.3',
    titleEn: 'Multidisciplinary Nature of AI & Key Advantages',
    titleAm: 'የAI ሁለገብ የትምህርት ዘርፎች እና ዋና ዋና ጥቅሞች',
    subtopicEn: 'Maths, Biology, Psychology, Sociology, CS, Neuroscience, Statistics & AI Benefits',
    subtopicAm: 'ሂሳብ፣ ባዮሎጂ፣ ሳይኮሎጂ፣ ሶሺዮሎጂ፣ ኮምፒውተር ሳይንስ፣ ኒውሮሳይንስ፣ ስታቲስቲክስ',
    pageType: 'content',
    figures: [
      { id: 'fig-3.2', caption: 'Figure 3.2 Artificial Intelligence is multidisciplinary', description: 'Diagram showing AI connected to Maths, Philosophy, Biology, Neuron Science, Psychology, Computer Science, and Sociology.' }
    ],
    contentEn: `To achieve the above factors for a machine or software, Artificial Intelligence requires the following disciplines (see Figure 3.2):
✓ Mathematics
✓ Biology
✓ Psychology
✓ Sociology
✓ Computer Science
✓ Neurons Study (Neuroscience)
✓ Statistics
✓ Philosophy

[Figure 3.2 Artificial Intelligence is multidisciplinary]

3.1.4. Advantages of Artificial Intelligence
Activity 3.6:
➢ What do we get from using AI technology instead of previous reactive technology?`,
    contentAm: `አርቴፊሻል ኢንተለጀንስ የበርካታ የትምህርት ዘርፎች ውህደት ነው (ምስል 3.2 ይመልከቱ)፡
✓ ሂሳብ (Mathematics)
✓ ባዮሎጂ (Biology)
✓ ስነ-ልቦና (Psychology)
✓ ሶሺዮሎጂ (Sociology)
✓ ኮምፒውተር ሳይንስ (Computer Science)
✓ ኒውሮሳይንስ (Neuron Science)
✓ ስታቲስቲክስ (Statistics)
✓ ፍልስፍና (Philosophy)

[ምስል 3.2 AI ሁለገብ የትምህርት መስክ ነው]`
  },

  // Page 41: Advantages & Disadvantages of AI (Book Page 40)
  {
    pdfPageNumber: 41,
    bookPageLabel: '40',
    chapterNumber: 3,
    sectionRef: '3.1.4',
    titleEn: 'Advantages and Disadvantages of Artificial Intelligence',
    titleAm: 'የሰው ሰራሽ አስተውሎት ጥቅሞች እና ጉዳቶች',
    subtopicEn: 'High Accuracy, Speed, Risky Areas, Digital Assistants, Public Utilities, and Superintelligence Threat',
    subtopicAm: 'ከፍተኛ ትክክለኛነት፣ ፍጥነት፣ ለአደገኛ ቦታዎች መዋል፣ ዲጂታል ረዳት እና የህልውና ስጋት',
    pageType: 'content',
    contentEn: `Following are some main advantages of Artificial Intelligence:
➢ High Accuracy with fewer errors: AI machines or systems are prone to fewer errors and high accuracy as it takes decisions as per pre-experience or information.
➢ High-Speed: AI systems can be of very high-speed and fast-decision making, because of that AI systems can beat a chess champion in the Chess game.
➢ High reliability: AI machines are highly reliable and can perform the same action multiple times with high accuracy.
➢ Useful for risky areas: AI machines can be helpful in situations such as defusing a bomb, exploring the ocean floor, where employing a human can be risky.
➢ Digital Assistant: AI can provide digital assistance to users, such as recommending products on e-commerce websites according to customer preferences.
➢ Useful as a public utility: Self-driving cars, facial recognition for security, natural language processing for search engines, spelling checkers, Siri, and translation services.

3.1.5. Disadvantages of Artificial Intelligence
Activity 3.7:
➢ Write down some disadvantages of AI?

One of the key features that distinguishes humans from everything else is intelligence. But many people (including Elon Musk) believe that the advancement in technology can create a superintelligence that can threaten human existence. Every technology has trade-offs.`,
    contentAm: `የሰው ሰራሽ አስተውሎት ዋና ዋና ጥቅሞች፡
➢ ከፍተኛ ትክክለኛነትና አነስተኛ ስህተት፡ ካለፈው ልምድ ተነስቶ ስለሚወስን ስህተቱ አነስተኛ ነው።
➢ ፈጣን ውሳኔ ሰጪነት፡ በአይን ጥቅሻ ውስጥ ሚሊዮኖችን አማራጮች በማስላት የዓለም ቼዝ ሻምፒዮንን ማሸነፍ ይችላል።
➢ ከፍተኛ አስተማማኝነት፡ አንድን ተግባር ደጋግሞ ያለምንም ድካም በትክክል ያከናውናል።
➢ ለአደገኛ ቦታዎች መዋል፡ ፈንጂ ማክሸፍ፣ የውቅያኖስ ጥልቀትን መመርመር።
➢ ዲጂታል ረዳቶች፡ በኦንላይን ግዢ እና በስልክ ላይ ለተጠቃሚዎች አገልግሎት መስጠት።
➢ ለህዝብ አገልግሎቶች፡ ራስ-ገዝ መኪና፣ የፊት ለይቶ ማወቂያ (Facial recognition)፣ የቋንቋ ተርጓሚዎች።

3.1.5. የሰው ሰራሽ አስተውሎት ጉዳቶች
ኤሎን መስክን ጨምሮ በርካታ ተመራማሪዎች የAI ልዕለ-አስተውሎት (Superintelligence) መፈጠር የሰውን ልጅ ህልውና ሊያሰጋ እንደሚችል ያስጠነቅቃሉ።`
  },

  // Page 42: Disadvantages & History of AI Intro (Book Page 41)
  {
    pdfPageNumber: 42,
    bookPageLabel: '41',
    chapterNumber: 3,
    sectionRef: '3.1.5',
    titleEn: 'Disadvantages of AI & Historical Milestones',
    titleAm: 'የAI ጉዳቶች እና የAI ታሪክ መጀመሪያ',
    subtopicEn: 'High Cost, Boxed Thinking, Emotionless, Dependency, Lack of Creativity & Greek Myths',
    subtopicAm: 'ውድ ወጪ፣ ከሰለጠነበት ውጭ አለማሰብ፣ ስሜት አልባነት፣ ጥገኝነት እና የግሪክ አፈ-ታሪኮች',
    pageType: 'content',
    contentEn: `Following are the disadvantages of AI:
➢ High Cost: The hardware and software requirements of AI are very costly as it requires lots of maintenance to meet current world requirements.
➢ Can't think out of the box: Even as we make smarter machines with AI, they cannot work out of the box; the robot will only do that work for which it is trained or programmed.
➢ No feelings and emotions: AI machines can be outstanding performers, but they lack feelings, cannot build emotional attachments, and may be harmful if proper care is not taken.
➢ Increase dependence on machines: People are getting more dependent on devices and may lose some mental capabilities.
➢ No Original Creativity: While humans are creative and can imagine new ideas, AI machines cannot beat human intelligence in genuine originality and imagination.

3.2. History of AI
Activity 3.8:
➢ Do you think AI is old technology? If your answer is yes, why? Can you name the person who coined the term AI? And when?

Artificial Intelligence is not a new word and not a new technology for researchers. This technology is much older than you would imagine. Even ancient Greek and Egyptian myths contained concepts of mechanical men. The journey from initial concepts to contemporary development spans several historic milestones.`,
    contentAm: `የሰው ሰራሽ አስተውሎት ጉዳቶች፡
➢ ከፍተኛ ወጪ፡ የሃርድዌር እና የሶፍትዌር ጥገናው እጅግ ውድ ነው።
➢ ከታነጸበት ውጭ ማሰብ አለመቻል (Can't think out of the box)፡ የሰለጠነበትን ስራ ብቻ ይሰራል፤ አዲስ ያልታሰበ ሁኔታ ሲፈጠር ይደናገራል።
➢ ስሜት እና ርህራሄ የለውም (No feelings)፡ የሰውን ልጅ ስሜት አይጋራም።
➢ በማሽን ላይ ጥገኛ መሆን፡ ሰዎች የአእምሮ አቅማቸውን እንዳይጠቀሙ ያደርጋል።
➢ እውነተኛ የፈጠራ ችሎታ ማጣት፡ AI ያለፉ መረጃዎችን ያቀናብራል እንጂ እንደ ሰው ልጅ ተፈጥሯዊ ፈጠራ የለውም።

3.2. የAI ታሪክ
የሰው ሰራሽ አስተውሎት ፅንሰ-ሀሳብ በጥንታዊ ግሪክ እና ግብፅ አፈ-ታሪኮች ውስጥ ሜካኒካል ሰዎችን ከማሰብ ጀምሮ የቆየ ጥልቅ ታሪክ አለው።`
  },

  // Page 43: History Timeline & Maturation Era (Book Page 42)
  {
    pdfPageNumber: 43,
    bookPageLabel: '42',
    chapterNumber: 3,
    sectionRef: '3.2',
    titleEn: 'History of AI: Timeline (1943–2015) & Maturation Era',
    titleAm: 'የAI ታሪክ፡ የታሪክ መስመር (1943–2015) እና የብስለት ዘመን',
    subtopicEn: 'McCulloch & Pitts 1943, Hebbian Learning 1949, Alan Turing 1950 Turing Test',
    subtopicAm: 'ማኩሎክና ፒትስ 1943፣ ሄቢያን ለርኒንግ 1949፣ አላን ቱሪንግ እና የቱሪንግ ፈተና 1950',
    pageType: 'content',
    figures: [
      { id: 'fig-3.3', caption: 'Figure 3.3 History of Artificial Intelligence (AI)', description: 'Timeline from 1943 artificial neurons to 1950 Turing Machine, 1956 Dartmouth, 1966 ELIZA, 1972 WABOT-1, 1974-80 First Winter, 1980 Expert Systems, 1987-93 Second Winter, 1997 Deep Blue, 2002 Roomba, 2011 Watson, 2012 Google Now, 2014 Eugene Goostman, 2015 Echo.' }
    ],
    contentEn: `[Figure 3.3 History of Artificial Intelligence (AI) Timeline:
1943: Evolution of artificial neurons
1950: Turing Machine
1956: Birth of AI: Dartmouth Conference
1966: First Chatbot: ELIZA
1972: First Intelligence Robot: WABOT-1
1974-1980: First AI Winter
1980: Expert System
1987-1993: Second AI Winter
1997: IBM Deep Blue beats world chess champion
2002: AI in Home: Roomba
2011: IBM Watson wins quiz show
2012: Google Now
2014: Chatbot Eugene Goostman wins Turing test
2015: Amazon Echo]

A. Maturation of Artificial Intelligence (1943-1952)
➢ The year 1943: The first work now recognized as AI was done by Warren McCulloch and Walter Pitts in 1943. They proposed a model of artificial neurons.
➢ The year 1949: Donald Hebb demonstrated an updating rule for modifying the connection strength between neurons, now called Hebbian learning.
➢ The year 1950: Alan Turing, an English mathematician who pioneered machine learning, published "Computing Machinery and Intelligence" proposing the Turing test to test whether a machine can exhibit intelligent behavior equivalent to human intelligence.

B. The birth of Artificial Intelligence (1952-1956)`,
    contentAm: `የAI ታሪክ የታሪክ መስመር (ምስል 3.3)፡

ሀ. የሰው ሰራሽ አስተውሎት ጥንስስና ብስለት (1943-1952)፡
➢ 1943 ዓ.ም. (እ.ኤ.አ.)፡ ዋረን ማኩሎክ እና ዋልተር ፒትስ ሰው ሰራሽ የነርቭ ሞዴልን (artificial neurons) አቀረቡ።
➢ 1949 ዓ.ም.፡ ዶናልድ ሄብ የነርቭ ሴሎችን ግንኙነት ማጠናከሪያ ህግ (Hebbian learning) አገኘ።
➢ 1950 ዓ.ም.፡ እንግሊዛዊው የሂሳብ ሊቅ አላን ቱሪንግ "Computing Machinery and Intelligence" በሚል ጽሑፉ ማሽኖች እንደ ሰው ማሰብ መቻላቸውን የሚለካውን "የቱሪንግ ፈተና" (Turing Test) ይፋ አደረገ።

[ምስል 3.3 የሰው ሰራሽ አስተውሎት ታሪክ መስመር]`
  },

  // Page 44: Birth of AI, Golden Years, Winters & Boom (Book Page 43)
  {
    pdfPageNumber: 44,
    bookPageLabel: '43',
    chapterNumber: 3,
    sectionRef: '3.2',
    titleEn: 'Birth of AI, Golden Years, AI Winters & Expert Systems',
    titleAm: 'የAI መወለድ፣ ወርቃማው ዘመን፣ የAI ክረምቶች እና ኤክስፐርት ሲስተሞች',
    subtopicEn: 'Dartmouth 1956, Logic Theorist, ELIZA 1966, WABOT-1 1972, AI Winters, Deep Blue 1997',
    subtopicAm: 'ዳርትማውዝ 1956፣ ኤሊዛ ቻትቦት፣ ዋቦት-1 ሮቦት፣ የመጀመሪያውና ሁለተኛው የAI ክረምት፣ ዲፕ ብሉ',
    pageType: 'content',
    contentEn: `B. The birth of Artificial Intelligence (1952-1956)
➢ The year 1955: Allen Newell and Herbert A. Simon created the "first artificial intelligence program" named "Logic Theorist", which proved 38 of 52 mathematical theorems.
➢ The year 1956: The term "Artificial Intelligence" was first adopted by American computer scientist John McCarthy at the Dartmouth Conference, coining AI as an academic field.

C. The golden years - Early enthusiasm (1956-1974)
➢ The year 1966: Joseph Weizenbaum created the first chatbot, ELIZA.
➢ The year 1972: The first intelligent humanoid robot, WABOT-1, was built in Japan.

D. The first AI winter (1974-1980)
➢ During 1974–1980, scientists faced severe funding shortages and decreased public interest due to unmet expectations.

E. A boom of AI (1980-1987)
➢ The year 1980: AI returned with "Expert Systems" that emulated human expert decision-making. The American Association of Artificial Intelligence held its first conference at Stanford.

F. The second AI winter (1987-1993)
➢ Investors and governments stopped funding AI research due to high costs and inefficient results.

G. The emergence of intelligent agents (1993-2011)
➢ The year 1997: IBM Deep Blue defeated world chess champion Garry Kasparov, becoming the first computer to beat a reigning world champion.`,
    contentAm: `ለ. የAI መወለድ (1952-1956)፡
➢ 1955፡ አሌን ኒውል እና ኸርበርት ሳይመን "Logic Theorist" የተባለውን የመጀመሪያውን የAI ፕሮግራም ሰሩ።
➢ 1956፡ ጆን ማካርቲ በዳርትማውዝ ኮንፈረንስ ላይ "Artificial Intelligence" የሚለውን ስያሜ ሰጠ፤ የትምህርት መስክም አደረገው።

ሐ. ወርቃማው ዘመን (1956-1974)፡
➢ 1966፡ ጆሴፍ ዊዘንባም የመጀመሪያውን ቻትቦት ELIZA ፈጠረ።
➢ 1972፡ በጃፓን የመጀመሪያው ሂውማኖይድ ሮቦት WABOT-1 ተሰራ።

መ. የመጀመሪያው የAI ክረምት (1974-1980)፡ የመንግስት የገንዘብ ድጋፍ ተቋረጠ።

ሠ. የኤክስፐርት ሲስተሞች ዘመን (1980-1987)፡ ኤክስፐርት ሲስተሞች ገበያውን ተቆጣጠሩ።

ረ. ሁለተኛው የAI ክረምት (1987-1993)፡ ወጪ በመብዛቱ ድጋፍ ቀንሷል።

ሰ. አስተዋይ ወኪሎች መምጣት (1993-2011)፡
➢ 1997፡ የIBM ዲፕ ብሉ (Deep Blue) የዓለም የቼዝ ሻምፒዮን ጋሪ ካስፓሮቭን አሸነፈ።`
  },

  // Page 45: Modern Era & Levels of AI (Book Page 44)
  {
    pdfPageNumber: 45,
    bookPageLabel: '44',
    chapterNumber: 3,
    sectionRef: '3.3',
    titleEn: 'Modern AI Era (2011–Present) & Levels of AI (Stage 1)',
    titleAm: 'ዘመናዊው የAI ዘመን (2011–አሁን) እና የAI ደረጃዎች (ደረጃ 1)',
    subtopicEn: 'Roomba 2002, Watson 2011, Duplex 2018 & Stage 1: Rule-Based Systems',
    subtopicAm: 'ሩምባ፣ ዋትሰን፣ ዱፕሌክስ እና ደረጃ 1፡ በህግጋት የሚመሩ ስርአቶች',
    pageType: 'content',
    contentEn: `➢ The year 2002: AI entered homes with Roomba, the autonomous vacuum cleaner.
➢ The year 2006: AI entered business through Facebook, Twitter, and Netflix.

H. Deep learning, big data and artificial general intelligence (2011-present)
➢ The year 2011: IBM Watson won Jeopardy!, proving it could understand natural language and answer complex riddles.
➢ The year 2012: Google launched "Google Now" predictive features.
➢ The year 2014: Chatbot "Eugene Goostman" won a competition in the Turing test.
➢ The year 2018: IBM's "Project Debater" debated complex topics with master debaters.
➢ Google demonstrated "Duplex", an AI virtual assistant that booked a salon appointment over the phone without the receptionist noticing it was a machine.

3.3. Levels of AI
Activity 3.9:
➢ What do you think are the stages AI passed through to reach its current development?

Stage 1 – Rule-Based Systems
The most common uses of AI today fit in this bracket, covering everything from business software (Robotic Process Automation) and domestic appliances to aircraft autopilots.`,
    contentAm: `ዘመናዊው የAI ዘመን (2011–አሁን)፡
➢ 2011፡ የIBM ዋትሰን የJeopardy! ጥያቄና መልስ ውድድርን አሸነፈ።
➢ 2014፡ ዩጂን ጉስትማን የተባለው ቻትቦት የቱሪንግን ፈተና አለፈ።
➢ 2018፡ ጎግል ዱፕሌክስ (Duplex) በስልክ ደውሎ የፀጉር ቤት ቀጠሮ ያለምንም እንከን አስያዘ።

3.3. የAI ደረጃዎች (Levels of AI)
ደረጃ 1 – በህግጋት የሚመሩ ስርአቶች (Rule-Based Systems)፡
በቅድሚያ በተቀመጡ ህግጋት የሚሰሩ ስርአቶች (የቤት እቃዎች፣ አውቶፓይለት፣ RPA)።`
  },

  // Page 46: Stages 2 to 6: Context Awareness to Superintelligence (Book Page 45)
  {
    pdfPageNumber: 46,
    bookPageLabel: '45',
    chapterNumber: 3,
    sectionRef: '3.3',
    titleEn: 'Stages of AI: Context Awareness, AGI & Superintelligence',
    titleAm: 'የAI ደረጃዎች፡ የዐውድ ግንዛቤ፣ AGI እና ልዕለ-አስተውሎት (ASI)',
    subtopicEn: 'Chatbots, AlphaGo, Reasoning Machines, Artificial General Intelligence, Artificial Superintelligence',
    subtopicAm: 'ቻትቦቶች፣ አልፋጎ፣ የማሰብ ማሽኖች፣ አጠቃላይ AI እና ልዕለ-አስተውሎት',
    pageType: 'content',
    contentEn: `Stage 2 – Context Awareness and Retention
➢ Algorithms that develop information about the specific domain they are applied in. They are trained on the knowledge and experience of the best humans, and their knowledge base can be updated as new queries arise (e.g., chatbots and robo-advisors).

Stage 3 – Domain-Specific Expertise
➢ Going beyond the capability of humans, these systems build up expertise in a specific context taking in massive volumes of information. Examples include cancer diagnosis systems and Google DeepMind’s AlphaGo.

Stage 4 – Reasoning Machines
➢ These algorithms have the ability to attribute mental states to themselves and others—a sense of beliefs, intentions, and knowledge. They can negotiate with humans and other machines.

Stage 5 – Self Aware Systems / Artificial General Intelligence (AGI)
➢ Systems with human-like intelligence across all domains—the goal of leading researchers.

Stage 6 – Artificial Superintelligence (ASI)
➢ AI algorithms that outsmart even the most intelligent humans in every domain, capable of solving existential challenges.`,
    contentAm: `ደረጃ 2 – የዐውድ ግንዛቤ እና ማስታወስ (Context Awareness and Retention)፡
ለአንድ የተወሰነ ዘርፍ የሚሰሩ እና አዳዲስ ጥያቄዎችን የሚመልሱ (ቻትቦቶች)።

ደረጃ 3 – የዘርፍ ልዩ እውቀት (Domain-Specific Expertise)፡
ከሰው ልጅ አቅም በላይ በሆነ ፍጥነት በአንድ ሙያ የላቀ እውቀት ማዳበር (የካንሰር ምርመራ፣ AlphaGo)።

ደረጃ 4 – ምክንያታዊ ማሽኖች (Reasoning Machines)፡
እምነትን፣ ፍላጎትንና እውቀትን መረዳት እና መደራደር የሚችሉ ማሽኖች።

ደረጃ 5 – አጠቃላይ ሰው ሰራሽ አስተውሎት (AGI)፡
በማንኛውም መስክ ልክ እንደ ሰው ልጅ ማሰብና መማር የሚችል ስርአት።

ደረጃ 6 – ልዕለ-አስተውሎት (Artificial Superintelligence - ASI)፡
በሁሉም መስክ እጅግ ብልህ የሆኑ የሰው ልጆችን የሚበልጥ አቅም።`
  },

  // Page 47: Stage 7 Singularity & Seven Layers of Maturity (Book Page 46)
  {
    pdfPageNumber: 47,
    bookPageLabel: '46',
    chapterNumber: 3,
    sectionRef: '3.3',
    titleEn: 'Stage 7: Singularity & Transcendence — Seven Layers of AI Maturity',
    titleAm: 'ደረጃ 7፡ ሲንጉላሪቲ እና የበላይነት — ሰባቱ የAI ብስለት እርከኖች',
    subtopicEn: 'Ray Kurzweil 2045 Prediction, Hive Mind & Figure 3.4 Maturity Model',
    subtopicAm: 'ሬይ ከርዝዌል (2045)፣ የጋራ ህሊና እና ምስል 3.4 የብስለት ሞዴል',
    pageType: 'content',
    figures: [
      { id: 'fig-3.4', caption: 'Figure 3.4 The seven layers of AI maturity', description: 'Layer 1 Perception, Layer 2 Notification, Layer 3 Suggestion, Layer 4 Automation, Layer 5 Prediction, Layer 6 Prevention, Layer 7 Situational Awareness.' }
    ],
    contentEn: `Stage 7 – Singularity and Transcendence
➢ The idea that development provided by ASI leads to a massive expansion in human capability. Human augmentation could connect our brains to each other and to the internet, creating a “hive mind” that shares ideas, solves problems collectively, and even gives others access to our dreams.
Some proponents of singularity such as Ray Kurzweil, Google’s Director of Engineering, suggest we could see it happen by 2045 as a result of exponential technological progress. Others argue human consciousness could never be digitized.

[Figure 3.4 The seven layers of AI maturity:
1. Perception: What's happening now?
2. Notification: What do I need to know?
3. Suggestion: What do you recommend?
4. Automation: What should I always do?
5. Prediction: What can I expect to happen?
6. Prevention: What can I avoid?
7. Situational Awareness: What do I need to do right now?]`,
    contentAm: `ደረጃ 7 – ሲንጉላሪቲ እና ህሊናዊ ልዕልና (Singularity and Transcendence)፡
የሰው ልጅ አእምሮ ከኮምፒውተር ጋር ተጣምሮ የጋራ ህሊና (hive mind) የሚፈጥርበት ፅንሰ-ሀሳብ ነው። ሬይ ከርዝዌል ይህ በ2045 እውን ሊሆን እንደሚችል ይተነብያል።

ሰባቱ የAI ብስለት እርከኖች (ምስል 3.4)፡
1. ግንዛቤ (Perception)፡ አሁን ምን እየተካሄደ ነው?
2. ማሳወቂያ (Notification)፡ ምን ማወቅ አለብኝ?
3. አስተያየት (Suggestion)፡ ምን ትመክራለህ?
4. አውቶሜሽን (Automation)፡ ምን ላከናውን?
5. ትንበያ (Prediction)፡ ምን ሊከሰት ይችላል?
6. መከላከል (Prevention)፡ ምን ማስቀረት እችላለሁ?
7. ሁኔታዊ ንቃት (Situational Awareness)፡ አሁን ምን ማድረግ አለብኝ?

[ምስል 3.4 ሰባቱ የAI ብስለት እርከኖች]`
  },

  // Page 48: Types of AI: Capabilities (Narrow AI) (Book Page 47)
  {
    pdfPageNumber: 48,
    bookPageLabel: '47',
    chapterNumber: 3,
    sectionRef: '3.4',
    titleEn: 'Types of AI: Capabilities vs Functionality — Narrow AI',
    titleAm: 'የAI አይነቶች፡ በአቅምና በተግባር — ጠባብ AI (Narrow AI)',
    subtopicEn: 'Type-1 (Capabilities) vs Type-2 (Functionality) & Weak AI Examples',
    subtopicAm: 'አይነት-1 (በአቅም) እና አይነት-2 (በተግባር)፤ ደካማ/ጠባብ AI ምሳሌዎች',
    pageType: 'content',
    figures: [
      { id: 'fig-3.5', caption: 'Figure 3.5 types of Artificial Intelligence (AI)', description: 'Diagram showing Type-1 (Narrow, General, Strong) and Type-2 (Reactive Machines, Limited Memory, Theory of Mind, Self-Awareness).' }
    ],
    contentEn: `3.4. Types of AI
Activity 3.10:
➢ Since AI is making a machine intelligent, based on the strength of intelligence and functionality, list down some types or classification of AI?

Artificial Intelligence can be divided into two main categorizations: based on capabilities and based on functionality, as shown in Figure 3.5.

[Figure 3.5 Types of Artificial Intelligence (AI):
Type-1 (Capabilities): Narrow AI, General AI, Strong AI
Type-2 (Functionality): Reactive Machines, Limited Memory, Theory of Mind, Self Awareness]

A. Based on Capabilities
1. Weak AI or Narrow AI:
➢ Narrow AI is a type of AI which is able to perform a dedicated task with intelligence. The most common and currently available AI is Narrow AI.
➢ Narrow AI cannot perform beyond its field or limitations, as it is only trained for one specific task. Hence it is also termed as weak AI. Narrow AI can fail in unpredictable ways if it goes beyond its limits.
➢ Apple Siri is a good example of Narrow AI, but it operates with a limited pre-defined range of functions.`,
    contentAm: `3.4. የAI አይነቶች (Types of AI)
AI በሁለት ዋና ዋና መንገዶች ይመደባል (ምስል 3.5)፡
1. በአቅም ደረጃ (Based on Capabilities)፡ Narrow AI፣ General AI፣ Strong AI
2. በተግባር አሰራር (Based on Functionality)፡ Reactive Machines፣ Limited Memory፣ Theory of Mind፣ Self Awareness

ሀ. በአቅም ደረጃ፡
1. ጠባብ AI ወይም ደካማ AI (Narrow / Weak AI)፡
አንድን የተወሰነ ተግባር ብቻ በብልሃት የሚያከናውን ነው። በአሁኑ ዘመን የምንጠቀምባቸው ሁሉም የAI ስርአቶች ጠባብ AI ናቸው። ከሰለጠነበት ወሰን ውጭ መስራት አይችልም። ምሳሌ፡ አፕል ሲሪ (Apple Siri)።

[ምስል 3.5 የሰው ሰራሽ አስተውሎት አይነቶች]`
  },

  // Page 49: General AI, Super AI & Functionality Types (Book Page 48)
  {
    pdfPageNumber: 49,
    bookPageLabel: '48',
    chapterNumber: 3,
    sectionRef: '3.4',
    titleEn: 'General AI, Super AI & Functionality-Based AI',
    titleAm: 'አጠቃላይ AI፣ ልዕለ AI እና በተግባር ላይ የተመሰረተ AI',
    subtopicEn: 'Human-Level General AI, Hypothetical Super AI, and Reactive Machines',
    subtopicAm: 'እንደ ሰው የሚያስብ አጠቃላይ AI፣ ግምታዊ ልዕለ AI እና ምላሽ ሰጪ ማሽኖች',
    pageType: 'content',
    contentEn: `➢ IBM's Watson supercomputer also comes under Narrow AI, combining an Expert system with Machine learning and NLP.
➢ Examples of Narrow AI: Google Translate, chess software, e-commerce purchase recommendations, self-driving cars, speech recognition, and image classification.

2. General AI:
➢ General AI could perform any intellectual task with efficiency equal to a human.
➢ Currently, no system exists under General AI. It may arrive in the next 20 or so years, but faces challenges with hardware, massive energy consumption, and catastrophic forgetting in deep neural networks.

3. Super AI:
➢ Super AI is a level of intelligence where machines surpass human intelligence across all cognitive tasks, general wisdom, creativity, and problem-solving.
➢ Super AI remains a hypothetical concept.

B. Based on Functionality
1. Reactive Machines`,
    contentAm: `የቀጠለ ጠባብ AI ምሳሌዎች፡ የGoogle Translate የቋንቋ ትርጉም፣ የቼዝ ኮምፒውተሮች፣ የዕቃ ምክረ-ሀሳቦች።

2. አጠቃላይ AI (General AI)፡
ማንኛውንም አእምሯዊ ስራ ልክ እንደ ሰው ልጅ በእኩል ብቃት ማከናወን የሚችል ነው። በአሁኑ ሰዓት እንዲህ አይነት ስርአት የለም፤ ወደፊት በሚቀጥሉት 20 ዓመታት ውስጥ ሊመጣ ይችላል ተብሎ ይታሰባል።

3. ልዕለ AI (Super AI)፡
በሁሉም አእምሯዊ መስኮች፣ ጥበብና ፈጠራ የሰውን ልጅ አቅም በብዙ እጥፍ የሚበልጥ ምናባዊ የAI ደረጃ ነው።

ለ. በተግባር አሰራር ላይ የተመሰረተ AI፡
1. ምላሽ ሰጪ ማሽኖች (Reactive Machines)`
  },

  // Page 50: Reactive, Limited Memory, Theory of Mind, Self-Awareness (Book Page 49)
  {
    pdfPageNumber: 50,
    bookPageLabel: '49',
    chapterNumber: 3,
    sectionRef: '3.4',
    titleEn: 'Functionality Types of AI & Human Cognitive Stages',
    titleAm: 'የAI ተግባራዊ አይነቶች እና የሰው ልጅ የአስተሳሰብ ደረጃዎች',
    subtopicEn: 'Deep Blue, Self-Driving Cars, Social Interaction AI, Sentient Machines & Cognitive Process',
    subtopicAm: 'ዲፕ ብሉ፣ ራስ-ገዝ መኪና፣ ማህበራዊ ግንኙነት ያለው AI እና የህሊናዊ አስተሳሰብ ሂደት',
    pageType: 'content',
    contentEn: `1. Reactive Machines:
➢ Purely reactive machines are the most basic types of AI.
➢ They do not store memories or past experiences for future actions.
➢ They focus only on current scenarios and react with the best possible move. Examples: IBM's Deep Blue and Google's AlphaGo.

2. Limited Memory:
➢ Can store past experiences or real-time sensor data for a short period.
➢ Examples: Self-driving cars storing recent speed of nearby vehicles, distances, and speed limits to navigate roads safely.

3. Theory of Mind:
➢ Machines that understand human emotions, beliefs, and interact socially like humans. Currently under research.

4. Self-Awareness:
➢ The future hypothetical stage where machines have their own consciousness, sentiments, and self-awareness, surpassing human minds.

3.4.1. How humans think
Activity 3.11:
➢ Does future intelligence need to mimic how humans think?

Human cognitive process consists of three main stages:
1. Observe and input information into the brain.
2. Interpret and evaluate the input received from the environment.
3. Make decisions as a reaction towards evaluated input.`,
    contentAm: `1. ምላሽ ሰጪ ማሽኖች (Reactive Machines)፡
ቀደም ሲል የተከሰተውን የማያስታውሱና አሁን ባለው ሁኔታ ላይ ብቻ ተመስርተው ምላሽ የሚሰጡ ናቸው (ምሳሌ፡ IBM Deep Blue፣ Google AlphaGo)።

2. ውስን ማህደረ-ትውስታ ያላቸው (Limited Memory)፡
የቅርብ ጊዜ መረጃዎችን ለጥቂት ጊዜ አከማችተው ለውሳኔ የሚጠቀሙ ናቸው (ምሳሌ፡ ራስ-ገዝ መኪኖች የአካባቢውን መኪኖች ፍጥነትና ርቀት የሚያስታውሱበት መንገድ)።

3. የአእምሮ ንድፈ-ሀሳብ (Theory of Mind)፡
የሰውን ስሜት፣ እምነትና ባህሪ ተረድተው ማህበራዊ ግንኙነት ማድረግ የሚችሉ (በምርምር ላይ ያሉ)።

4. ራስን ማወቅ (Self-Awareness)፡
የራሳቸው ህሊናና ስሜት ያላቸው ልዕለ ማሽኖች (ግምታዊ)።

3.4.1. የሰው ልጅ እንዴት ያስባል?
የሰው ልጅ አስተሳሰብ በ3 ደረጃዎች ይከናወናል፡
1. መረጃን በስሜት ህዋሳት መመልከትና መቀበል
2. የተቀበሉትን መረጃ መገምገም እና መተርጎም
3. በተገመገመው መረጃ መሰረት ውሳኔ መስጠትና እርምጃ መውሰድ`
  },

  // Page 51: Mapping Human Thinking to AI Architecture (Book Page 50)
  {
    pdfPageNumber: 51,
    bookPageLabel: '50',
    chapterNumber: 3,
    sectionRef: '3.4.2',
    titleEn: 'Mapping Human Thinking to AI System Architecture',
    titleAm: 'የሰው ልጅ አስተሳሰብን ከAI አወቃቀር ጋር ማዛመድ',
    subtopicEn: 'Sensing Layer, Interpretation Layer, and Interacting Layer',
    subtopicAm: 'የስሜት ህዋስ ንብርብር፣ የትርጉምና ግምገማ ንብርብር፣ የእርምጃና መስተጋብር ንብርብር',
    pageType: 'content',
    contentEn: `3.4.2. Mapping human thinking to artificial intelligence components
Activity 3.12:
➢ Is it possible to map the way of human thinking to artificial intelligence components? If your answer is yes, why?

Because AI is the science of simulating human thinking, it is possible to map the human thinking stages to the layers or components of AI systems:

1. Sensing Layer (First Stage - Input):
In humans, information is acquired through sensory organs (eyes, ears, skin, nose, tongue).
In AI models, this is represented by the Sensing Layer: cameras for computer vision, microphones for speech recognition, and IoT sensors.

2. Interpretation Layer (Second Stage - Reasoning):
In humans, the brain interprets, evaluates, and reasons about gathered inputs.
In AI, this is represented by the Interpretation Layer: machine learning algorithms, deep neural networks, and inference engines that reason over data.

3. Interacting Layer (Third Stage - Action):
In humans, motor organs (hands, legs, vocal cords) take action.
In AI, the Interacting Layer performs actions: robotic arms, autonomous steering, speech generation, and actuator control.`,
    contentAm: `3.4.2. የሰው ልጅ አስተሳሰብን ከAI አወቃቀር ጋር ማዛመድ

AI የሰውን ልጅ አስተሳሰብ የመኮረጅ ሳይንስ ስለሆነ የሰው አስተሳሰብ ደረጃዎች ከAI ስርአት ጋር በቀጥታ ይዛመዳሉ፡

1. የስሜት ህዋስ ንብርብር (Sensing Layer)፡
በሰው ልጅ ላይ አይን፣ ጆሮና ቆዳ መረጃ እንደሚሰበስቡት ሁሉ፤ በAI ውስጥ ካሜራ፣ ማይክሮፎንና ሴንሰሮች መረጃን ከአካባቢው ይሰበስባሉ።

2. የትርጉምና ግምገማ ንብርብር (Interpretation Layer)፡
የሰው አእምሮ መረጃን እንደሚተነትነው ሁሉ፤ በAI ውስጥ የማሽን ለርኒንግ አልጎሪዝሞችና ኒውራል ኔትወርኮች መረጃውን ይመረምራሉ፣ ምክንያታዊ ድምዳሜ ላይ ይደርሳሉ።

3. የእርምጃና መስተጋብር ንብርብር (Interacting Layer)፡
የሰው እጅና እግር እርምጃ እንደሚወስዱት ሁሉ፤ በAI ውስጥ የሮቦት እጆች፣ ስፒከሮች እና አንቀሳቃሾች (actuators) ትእዛዙን ወደ ተግባር ይለውጣሉ።`
  },

  // Page 52: Influencers of AI: Big Data (Book Page 51)
  {
    pdfPageNumber: 52,
    bookPageLabel: '51',
    chapterNumber: 3,
    sectionRef: '3.5',
    titleEn: 'Influencers of AI & Big Data Landscape',
    titleAm: 'የAI ፈጣን እድገት አነሳሾች እና የቢግ ዳታ ገጽታ',
    subtopicEn: 'Four Accelerators: Big Data, Processing Speed/GPUs, Cloud APIs, Data Science',
    subtopicAm: 'አራቱ አፋጣኝ ምክንያቶች፡ ቢግ ዳታ፣ የኮምፒውተር ፍጥነት/ቺፖች፣ ክላውድ እና ዳታ ሳይንስ',
    pageType: 'content',
    contentEn: `3.5. Influencers of artificial intelligence
Activity 3.13:
➢ List down some influential factors that accelerate the rise of AI?

The following influencers of AI are described in this section:
➢ Big data: Structured data versus unstructured data
➢ Advancements in computer processing speed and new chip architectures
➢ Cloud computing and APIs
➢ The emergence of data science

3.5.1. Big Data
Activity 3.14:
➢ From chapter two, what is big data? Where do you get big data?

Big data refers to huge amounts of data requiring innovative processing to draw insights, automate processes, and aid decision-making. Big data includes both structured databases and rapidly growing semi-structured and unstructured formats (word processing, video, images, audio, streams, and social media). Figure 3.6 depicts the rapid change of the data landscape.`,
    contentAm: `3.5. ለAI እድገት መፋጠን ምክንያት የሆኑ አበይት ጉዳዮች (Influencers)፡
1. ቢግ ዳታ (Big Data)፡ የተዋቀሩ እና ያልተዋቀሩ ግዙፍ መረጃዎች መብዛት
2. የኮምፒውተር ፕሮሰሲንግ ፍጥነትና አዳዲስ ቺፖች (GPUs, TPUs)
3. ክላውድ ኮምፒውቲንግ እና ኤፒአይ (Cloud & APIs)
4. የዳታ ሳይንስ ብቅ ማለት

3.5.1. ቢግ ዳታ፡
የማህበራዊ ሚዲያ፣ የቪዲዮ፣ የድምጽና የሰነዶች መብዛት ለAI አልጎሪዝሞች ከፍተኛ የምግብ (የስልጠና) ግብዓት ሆነዋል።`
  },

  // Page 53: Big Data Landscape & Structured vs Unstructured (Book Page 52)
  {
    pdfPageNumber: 53,
    bookPageLabel: '52',
    chapterNumber: 3,
    sectionRef: '3.5.1.1',
    titleEn: 'Data Landscape & Structured vs. Unstructured Data',
    titleAm: 'የዳታ ገጽታ እና የተዋቀረ ከያልተዋቀረ መረጃ ንጽጽር',
    subtopicEn: 'Exponential Growth of Unstructured Real-World Human Data',
    subtopicAm: 'የማህበራዊ ሚዲያ መረጃዎች እና ያልተዋቀረ መረጃ ፈጣን እድገት',
    pageType: 'content',
    figures: [
      { id: 'fig-3.6', caption: 'Figure 3.6 Current changes in the data landscape', description: 'Infographic showing Facebook 100 PB Hadoop, Netflix 1B hours, Amazon Linux DBs, PayPal $315M, Twitter 400M tweets, YouTube 72 hours video uploaded per minute.' }
    ],
    contentEn: `[Figure 3.6 Current changes in the data landscape:
• Facebook's Hadoop cluster contains over 100 PB
• Netflix: 1 billion hours of video monthly
• Amazon owns 3 largest Linux DBs (24.7 TB)
• PayPal processes over $315M in payments per day
• Twitter: 400,000,000 tweets per day
• Facebook: 350 million images daily
• eBay processes over 1 billion transactions daily
• Amazon Cloud: 500,000 transactions per second
• YouTube: 72 hours of video uploaded every minute]

3.5.1.1. Structured data versus unstructured data
Activity 3.15:
➢ What do structured and unstructured data mean? Which one is the primary influencer of AI?

Traditionally, computers primarily process structured data—information in organized relational databases searchable by simple SQL statements. But real-world data generated by humans (spoken words, social posts, images) is unstructured. Unstructured data is growing exponentially (Figure 3.7) and constitutes the vast majority of the world's information, necessitating AI systems capable of perceiving and understanding human patterns.`,
    contentAm: `የዘመኑ የዳታ ገጽታ (ምስል 3.6)፡
• ፌስቡክ፡ ከ100 ፔታባይት በላይ ዳታ
• ትዊተር፡ በቀን 400 ሚሊዮን ትዊቶች
• ዩቲዩብ፡ በደቂቃ 72 ሰዓታት የሚረዝም ቪዲዮ ይጫናል
• አማዞን፡ በሰከንድ 500,000 የክፍያ ዝውውሮች

3.5.1.1. የተዋቀረ እና ያልተዋቀረ መረጃ፡
የተለመዱ ኮምፒውተሮች የተዋቀረ ሰንጠረዥን ብቻ ያውቃሉ። የሰው ልጅ ግን የሚግባባው ባልተዋቀረ ቋንቋ፣ ድምጽና ምስል ነው። የዚህ ያልተዋቀረ መረጃ በከፍተኛ ፍጥነት ማደግ አርቴፊሻል ኢንተለጀንስን የግድ አስፈላጊ አድርጎታል።

[ምስል 3.6 የዳታ ገጽታ ለውጥ]`
  },

  // Page 54: Hardware, Chip Architectures & Hadoop (Book Page 53)
  {
    pdfPageNumber: 54,
    bookPageLabel: '53',
    chapterNumber: 3,
    sectionRef: '3.5.1.2',
    titleEn: 'Computer Processing Speed, Brain-like Chips & Distributed Systems',
    titleAm: 'የኮምፒውተር ፍጥነት፣ እንደ አእምሮ የሚሰሩ ቺፖች እና የተከፋፈሉ ስርአቶች',
    subtopicEn: 'Figure 3.7 Growth Graph, Google GFS/MapReduce, and Neuromorphic Hardware',
    subtopicAm: 'ምስል 3.7 ያልተዋቀረ መረጃ እድገት፣ ጎግል MapReduce እና ኒውሮሞርፊክ ቺፖች',
    pageType: 'content',
    figures: [
      { id: 'fig-3.7', caption: 'Figure 3.7 The comparison between the growth of structured and unstructured data', description: 'Area chart showing exponential growth of unstructured data from 2009 to 2017 compared to flat structured data line.' }
    ],
    contentEn: `[Figure 3.7 The comparison between the growth of structured and unstructured data]

In the last few years, the availability of larger volumes and sources of data is enabling capabilities in AI that could not be used in the past due to lack of data availability, limited sample sizes, and an inability to analyze massive amounts of data in milliseconds.

3.5.1.2. Advancements in computer processing speed, new chip architectures, and big data file systems
Activity 3.16:
➢ Why did advancements in computer processing speed and architecture influence AI?

Significant advancements in computer processing and memory speeds enable us to make sense of information generated by big data more quickly. In the past, statisticians were limited to sample data sets. High speeds enable working with massive real-time datasets.
The release of Google's MapReduce and Google File System (GFS) papers led to Apache Hadoop, allowing distributed storage and processing across commodity clusters. Furthermore, chip manufacturers like IBM and Intel are prototyping "brain-like" neuromorphic chips that mimic biological neurons and synapses.`,
    contentAm: `[ምስል 3.7 የተዋቀረና ያልተዋቀረ መረጃ እድገት ንጽጽር]

3.5.1.2. የኮምፒውተር ፍጥነት እና አዳዲስ ቺፖች፡
ቀደም ሲል የነበሩ ተመራማሪዎች ውስን የናሙና መረጃዎችን ብቻ ለመተንተን ይገደዱ ነበር። አሁን ግን የHadoop የተከፋፈለ አሰራር እና ኃይለኛ የኮምፒውተር ቺፖች ግዙፍ መረጃዎችን በሰከንዶች ውስጥ ለማስላት አስችለዋል። IBM እና Intel የአእምሮን የነርቭ ሴሎች አሰራር የሚኮርጁ ኒውሮሞርፊክ (Brain-like) ቺፖችን እያመረቱ ነው።`
  },

  // Page 55: Cloud Computing, APIs & Data Science Emergence (Book Page 54)
  {
    pdfPageNumber: 55,
    bookPageLabel: '54',
    chapterNumber: 3,
    sectionRef: '3.5.2',
    titleEn: 'Cloud Computing, AI APIs & Cloud Platforms',
    titleAm: 'ክላውድ ኮምፒውቲንግ፣ የAI ኤፒአይዎች እና የክላውድ ፕላትፎርሞች',
    subtopicEn: 'IBM Cloud, AWS, Azure, Google Cloud Platform & API Abstractions',
    subtopicAm: 'የIBM ክላውድ፣ AWS፣ ማይክሮሶፍት አዙር፣ ጎግል ክላውድ እና የኤፒአይ አሰራር',
    pageType: 'content',
    contentEn: `3.5.2. Cloud computing and application programming interfaces
Activity 3.17:
➢ What is the cloud? What do you know about cloud computing?

Cloud computing is a general term describing the delivery of on-demand services over the internet on a pay-per-use basis. Services include data analysis, social media, video storage, e-commerce, and AI capabilities supported by cloud infrastructure.

Application Programming Interfaces (APIs) expose capabilities and services, enabling software components to communicate easily. APIs abstract underlying complexities, allowing developers to inject AI capabilities into applications with minimal overhead.

All significant companies deliver AI services via cloud APIs:
➢ IBM delivers Watson AI services over IBM Cloud.
➢ Amazon delivers AI services over Amazon Web Services (AWS).
➢ Microsoft delivers AI tools over MS Azure cloud.
➢ Google delivers AI services on Google Cloud Platform (GCP).

These services benefit from cloud scalability, accessibility, rapid deployment, flexible billing, and simplified management.`,
    contentAm: `3.5.2. ክላውድ ኮምፒውቲንግ እና ኤፒአይ (APIs)
ክላውድ ኮምፒውቲንግ በኢንተርኔት አማካኝነት እንደ ፍላጎት መጠን የሚቀርብ የኮምፒውተር አገልግሎት ነው።
የመተግበሪያ ፕሮግራሚንግ በይነገጽ (APIs) ገንቢዎች ውስብስብ የAI አልጎሪዝሞችን በቀላሉ በመተግበሪያዎቻቸው ውስጥ እንዲያካትቱ ያስችላቸዋል፡
➢ IBM ዋትሰንን በIBM Cloud ያቀርባል።
➢ አማዞን የAI አገልግሎቶችን በAWS ያቀርባል።
➢ ማይክሮሶፍት የAI መሳሪያዎችን በAzure ያቀርባል።
➢ ጎግል የAI አገልግሎቶችን በGoogle Cloud Platform (GCP) ያቀርባል።`
  },

  // Page 56: Applications of AI: Agriculture & Healthcare (Book Page 55)
  {
    pdfPageNumber: 56,
    bookPageLabel: '55',
    chapterNumber: 3,
    sectionRef: '3.6',
    titleEn: 'Emergence of Data Science & AI in Agriculture and Healthcare',
    titleAm: 'የዳታ ሳይንስ ብቅ ማለት እና AI በግብርና እና ጤና ጥበቃ',
    subtopicEn: 'Pattern Discovery, Agricultural Robotics, Crop Monitoring, Faster Diagnostics',
    subtopicAm: 'የስርዓተ-ንድፍ ግኝት፣ የግብርና ሮቦቶች፣ የሰብል ቁጥጥር እና ፈጣን የህክምና ምርመራ',
    pageType: 'content',
    contentEn: `3.5.3. The emergence of data science
Data science combines statistics, data analysis, machine learning, and domain knowledge to extract insights from structured or unstructured data. Once sufficient volume is collected, patterns emerge, and data scientists use machine learning and AI algorithms on these patterns to solve complex problems.

3.6. Applications of AI
Artificial Intelligence has diverse applications in modern society, making daily life more comfortable and efficient.

Activity 3.18:
➢ Write down some applications of AI in health, agriculture, education, and business?

1. AI in Agriculture:
➢ Agriculture requires intensive resources, labor, money, and time. Today, digital agriculture uses AI for agricultural robotics, soil and crop monitoring, weed control, and predictive crop yield analysis to maximize harvest while reducing chemical waste.

2. AI in Healthcare:
➢ Healthcare industries apply AI to make faster and more accurate diagnoses than humans. AI helps doctors diagnose diseases, detect anomalies in medical imaging, and alert medical teams when patient vitals deteriorate before hospitalization is needed.

3. AI in Education:`,
    contentAm: `3.5.3. የዳታ ሳይንስ ብቅ ማለት፡
ዳታ ሳይንስ ስታቲስቲክስንና ማሽን ለርኒንግን በማጣመር ከግዙፍ መረጃዎች ውስጥ ቅጦችንና እውቀቶችን በማውጣት AIን ያጠናክራል።

3.6. የሰው ሰራሽ አስተውሎት (AI) አተገባበር በየዘርፉ፡
1. AI በግብርና (Agriculture)፡
የግብርና ሮቦቲክስ፣ የአፈርና የሰብል ጤንነት ክትትል፣ የአረም ማጥፊያ እና የምርት መጠን ትንበያ።
2. AI በጤና ጥበቃ (Healthcare)፡
ፈጣንና ትክክለኛ የበሽታ ምርመራ፣ የኤክስሬይና የኤምአርአይ ምስሎችን መተንተን፣ እና የታካሚዎች ሁኔታ ሲያሽቆለቁል አስቀድሞ ማስጠንቀቂያ መስጠት።`
  },

  // Page 57: Applications: Education, Finance, Gaming, Security, Transport (Book Page 56)
  {
    pdfPageNumber: 57,
    bookPageLabel: '56',
    chapterNumber: 3,
    sectionRef: '3.6',
    titleEn: 'AI Applications: Education, Finance, Gaming, Security, Social Media, Travel',
    titleAm: 'የAI አተገባበር፡ ትምህርት፣ ፋይናንስ፣ ጌሚንግ፣ የዳታ ደህንነት፣ ማህበራዊ ሚዲያ፣ ትራንስፖርት',
    subtopicEn: 'Virtual Tutors, Algorithmic Trading, Cyber Defense, Hashtag Analytics, Chatbots',
    subtopicAm: 'ቨርቹዋል አስተማሪዎች፣ አውቶሜትድ ንግድ፣ ሳይበር መከላከያ፣ የትራፊክ ቁጥጥር',
    pageType: 'content',
    contentEn: `3. AI in Education:
➢ AI automates grading so teachers have more time to mentor students. AI chatbots serve as teaching assistants, and personal virtual tutors provide customized learning anytime and anywhere.

4. AI in Finance and E-commerce:
➢ Automation, chatbots, adaptive intelligence, algorithmic trading, and fraud detection. E-commerce systems recommend products by size, color, and purchase history.

5. AI in Gaming:
➢ Strategic game intelligence in chess, Go, and video games where machines calculate millions of moves.

6. AI in Data Security:
➢ Cyber defense tools such as AEG bot and AI2 Platform detect malware, security breaches, and software vulnerabilities in real-time.

7. AI in Social Media:
➢ Storing, filtering, and organizing billions of user profiles on Facebook, Twitter, and Snapchat; analyzing trends, hashtags, and preferences.

8. AI in Travel & Transport:
➢ Autonomous route optimization, hotel and flight booking chatbots, and smart scheduling.

9. AI in the Automotive Industry`,
    contentAm: `3. AI በትምህርት፡ የፈተና ውጤቶችን በራስ-ሰር ማረም፣ ቨርቹዋል ረዳት አስተማሪዎች እና ለተማሪው ፍጥነት የሚመጥኑ የትምህርት ፕሮግራሞች።
4. AI በፋይናንስና ንግድ፡ አውቶሜትድ ግብይት፣ የማጭበርበር ድርጊቶችን መከላከል እና የደንበኞች የዕቃ ምርጫ ምክረ-ሀሳብ።
5. AI በጨዋታዎች (Gaming)፡ በቼዝ እና በቪዲዮ ጌሞች ውስጥ ብልህ ተፎካካሪዎችን መፍጠር።
6. AI በመረጃ ደህንነት (Data Security)፡ የሳይበር ጥቃቶችንና ተንኮል አዘል ሶፍትዌሮችን አስቀድሞ መከላከል (AEG bot)።
7. AI በማህበራዊ ሚዲያ፡ የቢሊዮኖችን ተጠቃሚዎች ፎቶዎች፣ ጽሑፎች እና ሃሽታጎች ማደራጀት።
8. AI በትራንስፖርት፡ የተመቻቹ የበረራና የጉዞ መስመሮችን ማቀድ።`
  },

  // Page 58: Automotive, Robotics, Entertainment & AI Platforms (Book Page 57)
  {
    pdfPageNumber: 58,
    bookPageLabel: '57',
    chapterNumber: 3,
    sectionRef: '3.7',
    titleEn: 'Automotive AI, Robotics, Entertainment & AI Platform Concepts',
    titleAm: 'የአውቶሞቲቭ AI፣ ሮቦቲክስ፣ መዝናኛ እና የAI ፕላትፎርሞች ፅንሰ-ሀሳብ',
    subtopicEn: 'TeslaBot, Humanoids Erica & Sophia, Netflix Recommendation, and Enterprise Platforms',
    subtopicAm: 'ቴስላቦት፣ ሂውማኖይድ ሮቦቶች ኤሪካ እና ሶፊያ፣ የኔትፍሊክስ ምክረ-ሀሳብ እና የቢዝነስ ፕላትፎርሞች',
    pageType: 'content',
    contentEn: `9. AI in the Automotive Industry:
➢ Virtual assistants such as TeslaBot; self-driving cars navigating complex traffic safely.

10. AI in Robotics:
➢ Creating intelligent robots that adapt to dynamic environments without rigid pre-programming. Humanoid robots like Erica and Sophia can converse and express facial emotions.

11. AI in Entertainment:
➢ Recommendation algorithms on Netflix, Spotify, and Amazon personalizing movies, series, and music playlists.

3.7. AI tools and platforms
Activity 3.19:
➢ What is a platform? Why do we need platforms? List down some platforms you have used.

Enterprises face repetitive, tedious workflows. To cut operational costs and reduce human error, businesses utilize AI automation tools. Choosing the right AI platform allows companies to streamline operations and unlock data value.`,
    contentAm: `9. AI በአውቶሞቲቭ ኢንዱስትሪ፡ ቴስላቦት (TeslaBot)፣ በራሳቸው የሚነዱ መኪኖች።
10. AI በሮቦቲክስ፡ ያለ ቅድመ-ፕሮግራም ከአካባቢው ተምረው የሚሰሩ ሮቦቶች፤ እንደ ኤሪካ (Erica) እና ሶፊያ (Sophia) ያሉ ሂውማኖይድ ሮቦቶች።
11. AI በመዝናኛ፡ በኔትፍሊክስና አማዞን ላይ የፊልምና የሙዚቃ ምርጫዎችን የሚመክሩ አልጎሪዝሞች።

3.7. የAI መሳሪያዎች እና ፕላትፎርሞች
ንግዶች ድግግሞሽ የበዛባቸውን ስራዎች በአውቶሜሽን በማከናወን ወጪን ለመቀነስና ስህተትን ለማስወገድ የAI ፕላትፎርሞችን ይጠቀማሉ።`
  },

  // Page 59: AI Platforms Definition & Capabilities (Book Page 58)
  {
    pdfPageNumber: 59,
    bookPageLabel: '58',
    chapterNumber: 3,
    sectionRef: '3.7',
    titleEn: 'AI Platform Architectures: Vision, NLP, Speech, Predictive Analytics',
    titleAm: 'የAI ፕላትፎርሞች አወቃቀር፡ ቪዥን፣ የቋንቋ ማቀነባበሪያ፣ ድምጽና ትንበያ',
    subtopicEn: 'Hardware/Software Frameworks, Drag-and-Drop Workflows, and PaaS Evolution',
    subtopicAm: 'የሃርድዌር/ሶፍትዌር ማዕቀፍ፣ ያለ ኮድ የሚሰሩ ሞዴሎች እና የPaaS እድገት',
    pageType: 'content',
    contentEn: `AI platforms are defined as hardware architecture or software frameworks that allow software to run, simulating human cognitive functions such as learning, reasoning, and problem-solving.

Capabilities of AI Platforms:
• Image recognition: Identifying faces and objects (e.g., criminal detection in law enforcement).
• Natural Language Processing (NLP): Information retrieval, text mining, question answering, and machine translation.
• Voice recognition: Distinguishing vocal biometric signatures.
• Recommendation and Predictive Analytics: Forecasting consumer preferences and demand.

AI platforms enable both developers and non-technical users to build intelligent applications using pre-built models and drag-and-drop workflows, expanding Platform as a Service (PaaS) into intelligent cloud services.`,
    contentAm: `የAI ፕላትፎርሞች ትርጓሜ፡
የሰው ልጅ አእምሯዊ ተግባራትን የሚመስሉ ስራዎችን የሚያከናውኑ የሃርድዌር ወይም የሶፍትዌር ማዕቀፎች ናቸው።

የAI ፕላትፎርሞች ዋና ዋና አቅሞች፡
• ምስል ለይቶ ማወቅ (Image Recognition)፡ ወንጀለኞችን ወይም ቁሳቁሶችን በካሜራ መለየት።
• የተፈጥሮ ቋንቋ ማቀነባበሪያ (NLP)፡ የሰውን ጽሑፍ መረዳት፣ መተርጎም እና ጥያቄዎችን መመለስ።
• የድምጽ ለይቶ ማወቂያ (Voice Recognition)፡ የሰውን ድምጽ ለይቶ መረዳት።
• የትንበያ ትንተና (Predictive Analytics)፡ ወደፊት የሚገዙ እቃዎችንና ሁኔታዎችን መተንበይ።`
  },

  // Page 60: AI Tools List & Sample Applications: Commuting, Email, Social (Book Page 59)
  {
    pdfPageNumber: 60,
    bookPageLabel: '59',
    chapterNumber: 3,
    sectionRef: '3.8',
    titleEn: 'Popular AI Platforms & Real-World Samples: Commuting, Email, Social',
    titleAm: 'ታዋቂ የAI ፕላትፎርሞች እና የዕለት ተዕለት አተገባበር፡ ትራንስፖርት፣ ኢሜይል፣ ማህበራዊ ሚዲያ',
    subtopicEn: 'TensorFlow, Watson, Azure, Google Cloud; Uber/Lyft, Spam Filters, Face Tagging',
    subtopicAm: 'ቴንሰርፍሎው፣ ዋትሰን፣ አዙር፤ ኡበር፣ የኢሜይል ማጣሪያ እና የፊት ታግ ማድረግ',
    pageType: 'content',
    contentEn: `Activity 3.20:
➢ What is a tool? List down some AI tools?

Common AI Tools & Categories:
✓ Search and optimization
✓ Logic
✓ Probabilistic methods for uncertain reasoning
✓ Classifiers and statistical learning methods
✓ Neural networks
✓ Control theory
✓ Specialized languages

Leading AI Platforms:
Microsoft Azure Machine Learning, Google Cloud Prediction API, IBM Watson, TensorFlow, Infosys Nia, Wipro HOLMES, API.AI, Premonition, Rainbird, Ayasdi, MindMeld, and Meya.

3.8. Sample AI applications
I. Commuting:
➢ Google’s AI-Powered Predictions for route traffic.
➢ Ridesharing Apps like Uber and Lyft optimizing pricing and pick-ups.
➢ Commercial Flights using AI Autopilot for navigation.

II. Email:
➢ Spam Filters classifying junk mail.
➢ Smart Email Categorization (Primary, Social, Promotions).

III. Social Networking:
➢ Facebook automatic facial tagging on uploaded photos.`,
    contentAm: `ዋና ዋና የAI ፕላትፎርሞች፡
ማይክሮሶፍት Azure ML፣ Google Cloud Prediction API፣ IBM Watson፣ TensorFlow፣ Infosys Nia፣ Wipro HOLMES።

3.8. የዕለት ተዕለት የAI አተገባበር ምሳሌዎች፡
1. የጉዞና ትራንስፖርት (Commuting)፡
  - የGoogle Maps የትራፊክ መጨናነቅ ትንበያ
  - የUber እና Lyft የታክሲ አሰማራ ዘዴ
  - የአውሮፕላን አውቶፓይለት ስርአቶች
2. ኢሜይል (Email)፡
  - አላስፈላጊ ኢሜይሎችን ማጣሪያ (Spam Filters)
  - ኢሜይሎችን በምድብ መለየት (Smart Categorization)
3. ማህበራዊ ሚዲያ (Social Networking)፡
  - ፌስቡክ ፎቶ ሲጫን የሰዎችን ፊት ለይቶ ታግ እንዲደረጉ ማቅረቡ።`
  },

  // Page 61: Sample Applications: Pinterest, Instagram, Snapchat, Shopping, Voice (Book Page 60)
  {
    pdfPageNumber: 61,
    bookPageLabel: '60',
    chapterNumber: 3,
    sectionRef: '3.8',
    titleEn: 'Sample AI: Pinterest, Instagram, Snapchat, Amazon & Voice-to-Text',
    titleAm: 'የዕለት ተዕለት AI፡ ፒንተረስት፣ ኢንስታግራም፣ ስናፕቻት፣ አማዞን እና የድምጽ ረዳቶች',
    subtopicEn: 'Computer Vision Pins, Emoji Semantics, Lenses Filters, Collaborative Filtering',
    subtopicAm: 'የምስል ንጽጽር፣ የኢሞጂ ትርጉም፣ የስናፕቻት ማጣሪያዎች እና የአማዞን ምክረ-ሀሳብ',
    pageType: 'content',
    contentEn: `➢ Pinterest: Uses computer vision to recognize objects in pins and recommend visually similar content, alongside spam detection.
➢ Instagram: Machine learning interprets emoji semantics and content contextual meaning.
➢ Snapchat: Facial recognition lenses tracking facial geometry to apply animated real-time digital masks.

IV. Online Shopping:
➢ Search: Amazon search algorithms ranking products instantaneously.
➢ Recommendations: Neural network collaborative filtering recommending items "customers who viewed this also viewed."

V. Mobile Use:
➢ Voice-to-Text: On-device speech recognition converting audio to text.
➢ Smart Personal Assistants:
  • Siri and Google Assistant managing calendars, making phone calls, and conducting internet queries.`,
    contentAm: `• ፒንተረስት (Pinterest)፡ በኮምፒውተር ቪዥን አማካኝነት ተመሳሳይ ምስሎችን ፈልጎ ያቀርባል።
• ኢንስታግራም (Instagram)፡ የኢሞጂዎችንና የጽሑፎችን ትርጉም በማሽን ለርኒንግ ይለያል።
• ስናፕቻት (Snapchat)፡ የፊትን ቅርጽ ተከትለው የሚሰሩ አኒሜሽኖችንና ሌንሶችን ያቀርባል።

4. የኦንላይን ግዢ (Online Shopping)፡
  - የአማዞን ፈጣን የዕቃ ፍለጋና የሸማቾች ምርጫ ምክረ-ሀሳብ።

5. የሞባይል ስልኮች አጠቃቀም፡
  - ድምጽን ወደ ጽሑፍ መቀየር (Voice-to-Text)
  - ስማርት የግል ረዳቶች፡ አፕል ሲሪ (Siri) እና ጎግል አሲስታንት (Google Assistant)።`
  },

  // Page 62: Alexa, Echo, Cortana Ecosystem (Book Page 61)
  {
    pdfPageNumber: 62,
    bookPageLabel: '61',
    chapterNumber: 3,
    sectionRef: '3.8',
    titleEn: 'Smart Assistants Ecosystem: Alexa, Echo & Cortana',
    titleAm: 'የስማርት ረዳቶች ስነ-ምህዳር፡ አሌክሳ፣ ኤኮ እና ኮርታና',
    subtopicEn: 'Amazon Echo Smart Speakers, Natural Language Control, Smart Home Automation',
    subtopicAm: 'የአማዞን ኤኮ ስማርት ስፒከሮች፣ የተፈጥሮ ቋንቋ ትዕዛዝ እና የስማርት ቤት ቁጥጥር',
    pageType: 'content',
    contentEn: `• Amazon Alexa & Echo Smart Speakers:
  - Alexa is an AI voice assistant accepting natural language voice commands to create to-do lists, order items, set alarms, and answer questions.
  - Echo and Dot smart speakers integrate Alexa into living spaces to play music, hail rides, order food, and control smart home appliances.
• Microsoft Cortana:
  - Pre-loaded assistant on Windows computing environments aiding daily productivity.`,
    contentAm: `• አማዞን አሌክሳ (Alexa) እና ኤኮ (Echo) ስማርት ስፒከሮች፡
  - በድምጽ ትእዛዝ ሙዚቃ ማጫወት፣ እቃዎችን ማዘዝ፣ ታክሲ መጥራት እና የቤት እቃዎችን መቆጣጠር ያስችላሉ።
• ማይክሮሶፍት ኮርታና (Cortana)፡
  - በዊንዶውስ ኮምፒውተሮች ላይ ተጭኖ ለተጠቃሚዎች ስራቸውን የሚያቀላጥፍ ረዳት ነው።`
  },

  // Page 63: Chapter Three Review Questions (Book Page 62)
  {
    pdfPageNumber: 63,
    bookPageLabel: '62',
    chapterNumber: 3,
    sectionRef: 'Review',
    titleEn: 'Chapter Three Review Questions',
    titleAm: 'የምዕራፍ ሦስት ክለሳ ጥያቄዎች',
    subtopicEn: '16 Review Questions Covering Definitions, Eras, Types, Components, and Applications',
    subtopicAm: 'ስለ AI ምንነት፣ ታሪክ፣ አይነቶች እና አተገባበር የቀረቡ 16 አጠቃላይ ጥያቄዎች',
    pageType: 'review',
    reviewQuestions: [
      {
        title: 'Chapter Three Review Questions',
        questions: [
          '1. Briefly explain intelligence? What is it composed of?',
          '2. Define artificial intelligence?',
          '3. Why do we need artificial intelligence?',
          '4. Write down the driving factors which accelerated the rise of AI?',
          '5. List down disciplines which artificial intelligence requires?',
          '6. Write the pros and cons of AI?',
          '7. Who coined the term AI for the first time?',
          '8. Who is Alan Turing? What is his contribution to AI?',
          '9. What are the seven stages of AI? Briefly explain each of them?',
          '10. Based on the level of strength we can classify AI into three, briefly explain each of them?',
          '11. Based on the functionality we can classify AI into four, briefly explain each of them?',
          '12. Briefly explain the mapping of human thinking to artificial intelligence components?',
          '13. Why does big data influence the rise of AI?',
          '14. Write down some applications of AI in agriculture, health, education, and business?',
          '15. List down some well-known AI tools and platforms?',
          '16. List down some concrete examples of AI in social media, online shopping, and mobile phone usage?'
        ]
      }
    ],
    contentEn: `Chapter Three Review Questions

1. Briefly explain intelligence? What it is composed of?
2. Define artificial intelligence?
3. Why we need artificial intelligence?
4. Write down the driving factors which accelerated the rise of AI?
5. List down disciplines which artificial intelligence requires?
6. Write the pros and cons of AI?
7. Who coined the term AI for the first time?
8. Who is Alan Turing? What is his contribution to AI?
9. What are the seven stages of AI? Briefly explain each of them?
10. Based on the level of strength we can classify AI into three, briefly explain each of them?
11. Based on the functionality we can classify AI into four, briefly explain each of them?
12. Briefly explain the mapping of human thinking to artificial intelligence components?
13. Why big data influence the rise of AI?
14. Write down some applications of AI in agriculture, health, education, and business?
15. List down some well-known AI tools and platforms?
16. List down some concrete examples of AI in social media, online shopping, and mobile phone usage?`,
    contentAm: `የምዕራፍ ሦስት ክለሳ ጥያቄዎች

1. አስተውሎት (intelligence) ምንድን ነው? ከምንስ የተዋቀረ ነው?
2. ሰው ሰራሽ አስተውሎትን (AI) ይተርጉሙ?
3. ሰው ሰራሽ አስተውሎት ለምን አስፈለገን?
4. የAIን ፈጣን መነሳት ያፋጠኑ ዋና ዋና ምክንያቶችን ጻፉ?
5. AI የሚጠይቃቸውን የትምህርት ዘርፎች ዘርዝሩ?
6. የAI ጥቅሞችንና ጉዳቶችን አብራሩ?
7. የAIን ስያሜ ለመጀመሪያ ጊዜ ያወጣው ማን ነው?
8. አላን ቱሪንግ ማን ነው? ለAI ያበረከተውስ አስተዋጽኦ ምንድን ነው?
9. ሰባቱ የAI ደረጃዎች ምንድን ናቸው?
10. በአቅም ደረጃ AIን በሦስት ከፍለን አብራሩ (Narrow, General, Super AI)?
11. በተግባር አሰራር AIን በአራት ከፍለን አብራሩ (Reactive, Limited Memory, Theory of Mind, Self-Awareness)?
12. የሰው ልጅ አስተሳሰብን ከAI ክፍሎች ጋር አዛምዳችሁ አብራሩ?
13. ቢግ ዳታ ለAI እድገት ያለው ሚና ምንድን ነው?
14. የAIን አተገባበር በግብርና፣ በጤና፣ በትምህርትና በንግድ ዘርዝሩ?
15. ታዋቂ የAI ፕላትፎርሞችን ጥቀሱ?
16. በማህበራዊ ሚዲያ፣ በኦንላይን ግዢ እና በሞባይል ስልኮች ላይ ያሉ የAI ምሳሌዎችን አብራሩ?`
  }
];
