import { Chapter } from '../../types';

export const unit1: Chapter = {
  id: 201,
  number: 1,
  title: {
    en: 'Unit 1: Life Skills',
    am: 'ክፍል 1፡ የህይወት ክህሎቶች'
  },
  universityAuthor: 'Dr. Abiy Yigzaw (Bahir Dar University)',
  overview: {
    en: 'Unit 1 explores the foundational concepts of Life Skills, personal responsibility, interpersonal communication, Alfred Adler\'s theory of human kinship and belonging, active and passive voices in academic and laboratory reporting, and four creative models of essay conclusions (embedded, retrospective, reflective, and projective).',
    am: 'ይህ የመጀመሪያ ክፍል የህይወት ክህሎቶች (Life Skills) ምንነትን፣ የግል ኃላፊነትን፣ የሰዎች ግንኙነትን፣ የአልፍሬድ አድለር የሰው ልጅ አብሮ የመኖር እና የመደጋገፍ ንድፈ-ሀሳብን፣ በአካዳሚክ እና በቤተ-ሙከራ ሪፖርቶች ውስጥ የአድራጊ እና ተደራጊ (Active & Passive) ድምጾችን አጠቃቀም፣ እንዲሁም አራቱን የድርሰት ማጠቃለያ ስልቶች ይዳስሳል።'
  },
  learningOutcomes: [
    {
      en: 'Define life skills according to WHO and TACADE frameworks and evaluate their role in personal empowerment.',
      am: 'የህይወት ክህሎቶችን በዓለም ጤና ድርጅት (WHO) እና TACADE መመዘኛዎች መተርጎም እና በግል ብቃት ላይ ያላቸውን ሚና መገምገም።'
    },
    {
      en: 'Understand Alfred Adler\'s psychological concept of innate kinship and the psychological need for belonging.',
      am: 'የአልፍሬድ አድለርን ተፈጥሯዊ የመደጋገፍ እና የአባልነት ስሜት የስነ-ልቦና ፅንሰ-ሀሳብ መረዳት።'
    },
    {
      en: 'Transform sentences accurately between Active and Passive voices across multiple tenses for lab and academic reports.',
      am: 'ለቤተ-ሙከራ እና ለአካዳሚክ ሪፖርቶች አረፍተ ነገሮችን በተለያዩ ጊዜያት ከአድራጊ (Active) ወደ ተደራጊ (Passive) መቀየር።'
    },
    {
      en: 'Construct the four distinct types of essay conclusions: embedded, retrospective, reflective, and projective.',
      am: 'አራቱን የተለያዩ የድርሰት ማጠቃለያ አይነቶች (የተካተተ፣ ወደኋላ ተመልካች፣ አሰላሳይ እና የወደፊት ተመልካች) መጻፍ።'
    }
  ],
  sections: [
    {
      id: 'sec-201-1',
      number: '1.1',
      title: {
        en: 'Reading: The Concept of Life Skills & Personal Responsibility',
        am: 'ንባብ፡ የህይወት ክህሎት ምንነት እና የግል ኃላፊነት'
      },
      paragraphs: [
        {
          id: 'u1-2-p1',
          subheading: {
            en: 'Defining Life Skills',
            am: 'የህይወት ክህሎቶች ትርጉም'
          },
          en: 'While many experts discuss the importance of life skills, many still question what exactly represents such skills. In practice, the term is used to refer to livelihood skills (how to set up a business), practical self-care skills (planning healthy meals or personal hygiene), and skills to deal with risk situations such as asserting "no" in the face of peer pressure. Crucially, life skills involve personally responsible choices that maximize personal well-being and fulfillment within the givens of human existence.',
          am: 'በርካታ ባለሙያዎች ስለ ህይወት ክህሎት አስፈላጊነት ሲወያዩ፣ ምንነቱን በተመለከተ የተለያዩ እይታዎች አሉ። በተግባር ደረጃ ቃሉ ለኑሮ መተዳደሪያ ክህሎቶች (ንግድ መጀመር)፣ ተግባራዊ የራስ-እንክብካቤ (የተመጣጠነ ምግብ ማዘጋጀት እና የግል ንጽህና)፣ እና አስቸጋሪ ሁኔታዎችን መቋቋም (የእኩዮች ጫናን "አይሆንም" ማለት) ያጠቃልላል። ከሁሉ በላይ ግን የህይወት ክህሎት ሰዎች በህይወታቸው የግል ደህንነታቸውን የሚያረጋግጡ ኃላፊነት የተሞላባቸው ምርጫዎችን እንዲያደርጉ ያስችላቸዋል።',
          highlightTerms: [
            {
              en: 'Life Skills',
              am: 'የህይወት ክህሎት',
              defEn: 'Abilities for adaptive and positive behavior that enable individuals to deal effectively with everyday demands and challenges.',
              defAm: 'ግለሰቦች የእለት ተእለት ኑሯቸውን ፈተናዎች በአግባቡ እንዲወጡ የሚያስችሏቸው አወንታዊ ባህሪያት እና ብቃቶች።'
            },
            {
              en: 'Personal Responsibility',
              am: 'የግል ኃላፊነት',
              defEn: 'Assuming accountability for one\'s well-being and making conscious choices rather than avoiding life\'s outcomes.',
              defAm: 'ለራስ ደህንነትና ለሚደረጉ ውሳኔዎች ሙሉ ተጠያቂነትን በግንዛቤ መውሰድ።'
            }
          ]
        },
        {
          id: 'u1-2-p2',
          subheading: {
            en: 'Institutional Frameworks (WHO & TACADE)',
            am: 'የተቋማት ትርጓሜ (WHO እና TACADE)'
          },
          en: 'The World Health Organization (WHO, 1994) defines life skills as abilities that enable individuals to deal effectively with the demands and challenges of everyday life. This generic set includes decision-making, problem-solving, self-awareness, critical thinking, and communication skills. TACADE (1990) views life skills as personal and social competencies required by young people to function confidently and competently with themselves, with peers, and with the wider community.',
          am: 'የዓለም ጤና ድርጅት (WHO, 1994) የህይወት ክህሎቶችን ሰዎች የእለት ተእለት ኑሮ ፈተናዎችን በብቃት እንዲቋቋሙ የሚያስችሉ ብቃቶች ሲል ይገልጻቸዋል። እነዚህም ውሳኔ የመስጠት፣ ችግር የመፍታት፣ ራስን የማወቅ፣ ሂሳዊ አስተሳሰብ እና የተግባቦት ክህሎቶችን ያጠቃልላሉ። TACADE (1990) ደግሞ ወጣቶች ከራሳቸው፣ ከጓደኞቻቸው እና ከማህበረሰቡ ጋር በልበ-ሙሉነትና በብቃት እንዲኖሩ የሚያስፈልጓቸው ማህበራዊና ግላዊ ብቃቶች እንደሆኑ ያስረዳል።'
        },
        {
          id: 'u1-2-p3',
          subheading: {
            en: 'Alfred Adler and the Need for Belonging',
            am: 'አልፍሬድ አድለር እና የአባልነት ስሜት ፍላጎት'
          },
          en: 'Renowned psychologist Alfred Adler (1870–1937) concluded that as part of human nature, there exists a strong innate potential for kinship and belonging to the human race. Each person is born with a natural desire to belong to a group—family or culture—and to contribute to its collective well-being. When this need for belonging is met, interpersonal connectedness, social interest, cooperation, and equality emerge. Conversely, when the need is frustrated, an individual may become aloof, manipulative, and self-centered.',
          am: 'ታዋቂው የስነ-ልቦና ምሁር አልፍሬድ አድለር (1870–1937) በሰው ልጅ ተፈጥሮ ውስጥ የመደጋገፍ እና የማህበረሰብ አባል የመሆን ጠንካራ ተፈጥሯዊ ዝንባሌ እንዳለ አረጋግጧል። እያንዳንዱ ሰው የቤተሰብ ወይም የባህል አካል ለመሆን እና ለጋራ ደህንነት አስተዋፅኦ ለማድረግ ተፈጥሯዊ ፍላጎት አለው። ይህ የአባልነት ፍላጎት ሲሟላ የሰዎች ትስስር፣ ማህበራዊ ፍላጎት፣ ትብብር እና እኩልነት ያብባሉ። ፍላጎቱ ሳይሟላ ሲቀር ግን ግለሰቡ ራሱን የሚያገል፣ አታላይ እና ራስ ወዳድ ሊሆን ይችላል።',
          highlightTerms: [
            {
              en: 'Belongingness',
              am: 'የአባልነት ስሜት',
              defEn: 'The psychological feeling of being welcomed, accepted, and connected to a group without fear of hostility.',
              defAm: 'በአንድ ቡድን ወይም ማህበረሰብ ውስጥ ተቀባይነት የማግኘት እና የመተሳሰር ስነ-ልቦናዊ ስሜት።'
            }
          ]
        }
      ]
    },
    {
      id: 'sec-201-2',
      number: '1.2',
      title: {
        en: 'Writing Focus: Four Types of Essay Conclusions',
        am: 'የጽሑፍ ትኩረት፡ አራቱ የድርሰት ማጠቃለያ አይነቶች'
      },
      paragraphs: [
        {
          id: 'u1-2-p4',
          subheading: {
            en: 'Beyond Simple Summaries',
            am: 'ከተለመደው ማጠቃለያ ባሻገር'
          },
          en: 'An essay conclusion should typically be no longer than one paragraph. While many students assume conclusions merely repeat what was said, professional writing employs four distinct concluding paradigms: (1) Embedded Conclusion (integrating the final reflection organically into the narrative resolution), (2) Retrospective Conclusion (looking back with hindsight to re-evaluate what came before), (3) Reflective Conclusion (broadening thought to explore universal lessons and personal growth), and (4) Projective Conclusion (forecasting future developments, unresolved threats, or calls to action).',
          am: 'የድርሰት ማጠቃለያ አብዛኛውን ጊዜ ከአንድ አንቀጽ መብለጥ የለበትም። ብዙ ተማሪዎች ማጠቃለያ ማለት የተባለውን መድገም ብቻ እንደሆነ ቢያስቡም፣ ሙያዊ ጽሑፍ አራት የተለያዩ የማጠቃለያ ስልቶችን ይጠቀማል፡ (1) የተካተተ ማጠቃለያ (በታሪኩ መጨረሻ ላይ የሚዋቀር)፣ (2) ወደኋላ ተመልካች ማጠቃለያ (ያለፈውን በትዝታና በአዲስ እውቀት መገምገም)፣ (3) አሰላሳይ ማጠቃለያ (ከድርሰቱ የተገኙ ዓለም አቀፍ ትምህርቶችን ማሰላሰል)፣ እና (4) የወደፊት ተመልካች ማጠቃለያ (ወደፊት ሊፈጠሩ የሚችሉ ሁኔታዎችን ወይም ስጋቶችን መተንበይ)።'
        }
      ]
    },
    {
      id: 'sec-201-3',
      number: '1.3',
      title: {
        en: 'Grammar Focus: Active and Passive Voices in Academic Writing',
        am: 'የሰዋሰው ትኩረት፡ አድራጊ እና ተደራጊ ድምፆች በአካዳሚክ ጽሑፍ ውስጥ'
      },
      paragraphs: [
        {
          id: 'u1-2-p5',
          subheading: {
            en: 'Why Passive Voice Matters for Science & Reports',
            am: 'የተደራጊ ድምፅ (Passive) ለሳይንስ እና ለሪፖርቶች ለምን ያስፈልጋል?'
          },
          en: 'Academic laboratory reports and formal summaries frequently rely on the passive voice ("Be + Past Participle") because the focus is on the action, process, or scientific phenomenon rather than the individual performing it. For instance, in an experiment, "The specimen was heated to 100°C" is more objective than "I heated the specimen." The module analyzes the historic Oscars ceremony text to demonstrate passive transformations across present simple, continuous, past, and modal forms.',
          am: 'የአካዳሚክ ቤተ-ሙከራ ሪፖርቶች እና መደበኛ ጽሑፎች በተደራጊ ድምፅ (Passive Voice: Be + V3) ላይ ይመሰረታሉ፤ ምክንያቱም ትኩረቱ ድርጊቱን በፈጸመው ሰው ላይ ሳይሆን በሂደቱ፣ በውጤቱ ወይም በሳይንሳዊ ክስተቱ ላይ ስለሆነ ነው። ለምሳሌ "The specimen was heated to 100°C" (ናሙናው እስከ 100 ዲግሪ ሴልሺየስ ድረስ እንዲሞቅ ተደረገ) የሚለው አገላለጽ "I heated the specimen" ከሚለው የበለጠ ገለልተኛና ሳይንሳዊ ነው። ሞጁሉ ይህንን በኦስካር ሽልማት ታሪክ ጽሑፍ በኩል በተለያዩ ጊዜያት ያብራራል።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 's201-1',
      title: {
        en: 'Life Skills Key Dimensions',
        am: 'የህይወት ክህሎት ቁልፍ ገጽታዎች'
      },
      bullets: [
        {
          en: 'Personal Skills: Building meaningful relationships, peer pressure resistance, and self-awareness.',
          am: 'የግል ክህሎት፡ ትርጉም ያለው ግንኙነት መመስረት፣ የእኩዮች ጫናን መቋቋም እና ራስን ማወቅ።'
        },
        {
          en: 'Home Management Skills: Budgeting, nutrition, hygiene, and safe domestic management.',
          am: 'የቤት አስተዳደር ክህሎት፡ በጀት መቆጣጠር፣ የተመጣጠነ ምግብ፣ ንጽህና እና ጤናማ ኑሮ።'
        },
        {
          en: 'Self-Reliance Skills: Critical thinking, independent decision-making, and constructive conflict resolution.',
          am: 'የራስ-መቻል ክህሎት፡ ሂሳዊ አስተሳሰብ፣ ገለልተኛ ውሳኔ የመስጠት እና ግጭትን በሰላማዊ መንገድ የመፍታት ችሎታ።'
        }
      ]
    },
    {
      id: 's201-2',
      title: {
        en: 'The Four Essay Conclusion Styles',
        am: 'አራቱ የድርሰት ማጠቃለያ ስልቶች'
      },
      bullets: [
        {
          en: 'Embedded: Ends naturally at the chronological conclusion of a personal narrative.',
          am: 'የተካተተ (Embedded)፡ በግል ታሪክ ፍጻሜ ላይ ያለ ተጨማሪ ሰው ሰራሽ ማጠቃለያ ተፈጥሯዊ መደምደሚያ ላይ መድረስ።'
        },
        {
          en: 'Retrospective: Looks back using hindsight gained from current maturity or distance.',
          am: 'ወደኋላ ተመልካች (Retrospective)፡ ያለፈውን ወቅት አሁን በተገኘ የብስለት እይታ መገምገም።'
        },
        {
          en: 'Reflective: Considers broader societal lessons, emotional themes, and life insights.',
          am: 'አሰላሳይ (Reflective)፡ አጠቃላይ ማህበራዊ ትምህርቶችን፣ እሴቶችን እና ግንዛቤዎችን ማሰላሰል።'
        },
        {
          en: 'Projective: Warns of future consequences or predicts upcoming societal developments.',
          am: 'የወደፊት ተመልካች (Projective)፡ የወደፊት ስጋቶችን ወይም ሊከተሉ የሚችሉ ውጤቶችን መተንበይ።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'q201-1',
      number: 1,
      question: {
        en: 'According to Alfred Adler, what happens to an individual when their innate need for belonging is not met?',
        am: 'እንደ አልፍሬድ አድለር ገለጻ፣ የአንድ ሰው ተፈጥሯዊ የአባልነት ስሜት ሳይሟላ ሲቀር ምን ይከሰታል?'
      },
      answer: {
        en: 'When the need for belonging is frustrated, a person may become aloof, manipulative, and self-centered rather than cooperative and empathetic.',
        am: 'የአባልነት ፍላጎት ሳይሟላ ሲቀር ሰውየው ተባባሪና አዛኝ ከመሆን ይልቅ ራሱን የሚያገል፣ አታላይ እና ራስ-ወዳድ ይሆናል።'
      },
      explanation: {
        en: 'Adler posited that human beings have a biological and psychological drive to belong; thwarted belongingness breeds defensive antisocial adaptations.',
        am: 'አድለር የሰው ልጅ ማህበራዊ ፍጡር እንደሆነና አብሮ የመኖር ፍላጎቱ ሲደናቀፍ ወደ ፀረ-ማህበራዊ ባህሪያት እንደሚሸጋገር አስረድቷል።'
      },
      category: 'conceptual'
    },
    {
      id: 'q201-2',
      number: 2,
      question: {
        en: 'Which type of conclusion is best suited for projecting the future negative consequences of an unresolved social issue like youth violence?',
        am: 'እንደ ወጣቶች ጥቃት ያሉ ያልተፈቱ ማህበራዊ ችግሮች ወደፊት ሊያስከትሉ የሚችሉትን አደጋ ለመተንበይ የትኛው የማጠቃለያ አይነት ተመራጭ ነው?'
      },
      answer: {
        en: 'The Projective Conclusion.',
        am: 'የወደፊት ተመልካች ማጠቃለያ (Projective Conclusion)።'
      },
      explanation: {
        en: 'A projective conclusion projects forward in time to demonstrate future outcomes, warn society, or call for systematic intervention.',
        am: 'የፕሮጀክቲቭ ማጠቃለያ ጊዜውን ወደፊት አሻግሮ በመመልከት መጪውን አደጋ በማስጠንቀቅ ማህበረሰቡ መፍትሄ እንዲያበጅ ጥሪ ያቀርባል።'
      },
      category: 'exam_mcq'
    }
  ],
  quizzes: [
    {
      id: 'qz201-1',
      question: {
        en: 'Which of the following is categorized as a "Home Management Skill" in the module?',
        am: 'በሞጁሉ ውስጥ "የቤት አስተዳደር ክህሎት" ተብሎ የተመደበው የትኛው ነው?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Budgeting and family nutrition', am: 'በጀት መቆጣጠር እና የቤተሰብ ምግብ አመጋገብ' } },
        { id: 'opt-b', text: { en: 'Resisting negative peer pressure', am: 'የእኩዮችን አሉታዊ ጫና መቋቋም' } },
        { id: 'opt-c', text: { en: 'Assertive public speaking', am: 'በልበ-ሙሉነት ለህዝብ ንግግር ማድረግ' } },
        { id: 'opt-d', text: { en: 'Road and vehicle safety', am: 'የመንገድና የተሽከርካሪ ደህንነት' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Home management skills encompass practical household responsibilities including budgeting, nutrition, and hygiene.',
        am: 'የቤት አስተዳደር ክህሎት እንደ በጀት፣ ምግብ ማዘጋጀት እና ንጽህና ያሉ ተግባራዊ የቤተሰብ ኃላፊነቶችን ያካትታል።'
      }
    },
    {
      id: 'qz201-2',
      question: {
        en: 'Change to passive voice: "The committee has chosen the best movie."',
        am: '"The committee has chosen the best movie" የሚለውን ወደ ተደራጊ (passive) ቀይር፡'
      },
      options: [
        { id: 'opt-a', text: { en: 'The best movie was chosen by the committee.', am: 'The best movie was chosen by the committee.' } },
        { id: 'opt-b', text: { en: 'The best movie has been chosen by the committee.', am: 'The best movie has been chosen by the committee.' } },
        { id: 'opt-c', text: { en: 'The best movie is being chosen by the committee.', am: 'The best movie is being chosen by the committee.' } },
        { id: 'opt-d', text: { en: 'The best movie will be chosen by the committee.', am: 'The best movie will be chosen by the committee.' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The active tense is Present Perfect ("has chosen"), so the passive counterpart requires "has been chosen".',
        am: 'አረፍተ ነገሩ Present Perfect ስለሆነ ተደራጊ ቅርፁ "has been chosen" ይሆናል።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc201-1',
      termEn: 'Personal Responsibility',
      termAm: 'የግል ኃላፊነት',
      phoneticAm: 'ፐርሰናል ሪስፖንሲቢሊቲ',
      defEn: 'Accountability for one\'s well-being and choices within the conditions of life.',
      defAm: 'ለራስ ምርጫና ደህንነት ሙሉ ተጠያቂነትን የመውሰድ ጥበብ።',
      exampleEn: 'Exercising personal responsibility helps students overcome difficult university challenges.',
      exampleAm: 'የግል ኃላፊነትን መውሰድ ተማሪዎች አስቸጋሪ የዩኒቨርሲቲ ፈተናዎችን እንዲያልፉ ይረዳል።',
      chapter: 1
    },
    {
      id: 'fc201-2',
      termEn: 'Projective Conclusion',
      termAm: 'የወደፊት ተመልካች ማጠቃለያ',
      phoneticAm: 'ፕሮጀክቲቭ ኮንክሉዥን',
      defEn: 'An essay conclusion that forecasts future outcomes or trends of a described issue.',
      defAm: 'የአንድን ጉዳይ የወደፊት ውጤት ወይም አዝማሚያ የሚተነብይ የድርሰት ማጠቃለያ።',
      exampleEn: 'The essay ended with a projective conclusion warning about climate degradation.',
      exampleAm: 'ድርሰቱ ስለ አየር ንብረት መበላሸት በሚያስጠነቅቅ የወደፊት ተመልካች ማጠቃለያ ተደመደመ።',
      chapter: 1
    }
  ]
};
