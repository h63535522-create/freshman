import { Chapter } from '../../types';

export const chapter6: Chapter = {
  id: 106,
  number: 6,
  title: {
    en: 'Chapter 6: Categorical Propositions',
    am: 'ምዕራፍ ፮፡ ምድባዊ ዓረፍተ-ነገሮች (Categorical Propositions)'
  },
  universityAuthor: 'Mr. Adane T. (Mekelle University) - MoSHE 2019',
  overview: {
    en: 'A categorical proposition relates two classes (Subject and Predicate) based on inclusion or exclusion. This chapter details standard forms (A, E, I, O), quantity, quality, distribution, Venn diagrams, Boolean vs. Aristotelian squares of opposition, and operations of conversion, obversion, and contraposition.',
    am: 'ምድባዊ ዓረፍተ-ነገር (Categorical Proposition) ባለቤትና ማሰሪያ ክፍሎችን በመደመር ወይም በማግለል ያዛምዳል። ይህ ምዕራፍ አራቱን መደበኛ ቅርፆች (A, E, I, O)፣ ጥራት፣ መጠን፣ ስርጭት (Distribution)፣ የቬን ዲያግራም፣ የቦሊያን እና የአሪስጣጣሊስ የተቃርኖ ካሬ፣ እንዲሁም የመቀየር (Conversion)፣ የተቃራኒ (Obversion) እና የቁልፍ ልውውጥ (Contraposition) ስራዎችን በዝርዝር ያትታል።'
  },
  learningOutcomes: [
    {
      en: 'Identify the four components: Quantifier, Subject term, Copula, and Predicate term.',
      am: 'አራቱን ክፍሎች (መጠን አመልካች፣ ባለቤት፣ አያያዥ ቃል፣ እና ማሰሪያ ክፍል) ለይቶ ማወቅ።'
    },
    {
      en: 'Determine Quality, Quantity, and Distribution for A, E, I, and O propositions.',
      am: 'ለአራቱም ምድባዊ ቅርፆች (A, E, I, O) ጥራትን፣ መጠንን እና ስርጭትን (Distribution) መወሰን።'
    },
    {
      en: 'Test immediate inferences using Venn diagrams, the Square of Opposition, and validate Conversion, Obversion, and Contraposition.',
      am: 'ቅጽበታዊ ድምዳሜዎችን በቬን ዲያግራም እና በተቃርኖ ካሬ መፈተሽ እንዲሁም ልውውጦችን ማረጋገጥ።'
    }
  ],
  sections: [
    {
      id: 'phil-sec-6-1',
      number: '6.1',
      title: {
        en: 'Lesson 1: Standard-Forms and Components of Categorical Propositions',
        am: 'ትምህርት ፩፡ መደበኛ ቅርፆች እና ክፍሎች'
      },
      paragraphs: [
        {
          id: 'phil-p-6-1',
          subheading: {
            en: 'The Four Standard Forms',
            am: 'አራቱ መደበኛ ቅርፆች'
          },
          en: 'A categorical proposition asserts that either all or part of the class denoted by the subject term (S) is included in or excluded from the class denoted by the predicate term (P). There are exactly 4 standard forms: (1) All S are P (Universal Affirmative - total inclusion); (2) No S are P (Universal Negative - total exclusion); (3) Some S are P (Particular Affirmative - partial inclusion); and (4) Some S are not P (Particular Negative - partial exclusion). In logic, "some" means "at least one".',
          am: 'ምድባዊ ዓረፍተ-ነገር በባለቤት (S) እና በማሰሪያ (P) ክፍሎች መካከል ያለውን ግንኙነት ያሳያል። አራት መደበኛ ቅርፆች አሉት፡ (1) All S are P (ሁሉ አቀፍ አዎንታዊ — ሙሉ ማካተት)፤ (2) No S are P (ሁሉ አቀፍ አሉታዊ — ሙሉ ማግለል)፤ (3) Some S are P (ውስን አዎንታዊ — ከፊል ማካተት)፤ እና (4) Some S are not P (ውስን አሉታዊ — ከፊል ማግለል)። በስነ-አመክንዮ "Some" (አንዳንዶች) ማለት "ቢያንስ አንዱ" ማለት ነው።'
        },
        {
          id: 'phil-p-6-2',
          subheading: {
            en: 'The Four Components',
            am: 'አራቱ ክፍሎች'
          },
          en: 'Every standard-form categorical proposition has 4 components in strict order: Quantifier + Subject Term + Copula + Predicate Term. Quantifiers: "All", "No", "Some". Copula: "are", "are not" (the linking verb). Example: "All [Quantifier] members of EMA [Subject] are [Copula] medical doctors [Predicate]."',
          am: 'እያንዳንዱ መደበኛ ምድባዊ ዓረፍተ-ነገር አራት ክፍሎች አሉት፡ መጠን አመልካች (Quantifier) + ባለቤት (Subject Term) + አያያዥ (Copula) + ማሰሪያ (Predicate Term)። መጠን አመልካቾች፡ "ሁሉም"፣ "ምንም"፣ "አንዳንዶች"። አያያዥ፡ "ናቸው" ወይም "አይደሉም"።'
        }
      ]
    },
    {
      id: 'phil-sec-6-2',
      number: '6.2',
      title: {
        en: 'Lesson 2: Quality, Quantity, and Distribution',
        am: 'ትምህርት ፪፡ ጥራት፣ መጠን እና ስርጭት (Distribution)'
      },
      paragraphs: [
        {
          id: 'phil-p-6-3',
          subheading: {
            en: 'Quality and Quantity: A, E, I, O Letter Names',
            am: 'ጥራት፣ መጠን እና የA, E, I, O ፊደላት ስያሜ'
          },
          en: 'Quality is Affirmative (inclusion) or Negative (exclusion). Quantity is Universal (refers to the entire subject class) or Particular (refers to part of the class). Logicians denote these with 4 letters: A (Universal Affirmative: All S are P); E (Universal Negative: No S are P); I (Particular Affirmative: Some S are P); and O (Particular Negative: Some S are not P).',
          am: 'ጥራት (Quality) አዎንታዊ ወይም አሉታዊ ሲሆን፤ መጠን (Quantity) ደግሞ ሁሉ አቀፍ (Universal) ወይም ውስን/ከፊል (Particular) ነው። በስነ-አመክንዮ በአራት ፊደላት ይጠራሉ፡ A (ሁሉ አቀፍ አዎንታዊ)፤ E (ሁሉ አቀፍ አሉታዊ)፤ I (ከፊል አዎንታዊ)፤ እና O (ከፊል አሉታዊ)።'
        },
        {
          id: 'phil-p-6-4',
          subheading: {
            en: 'Distribution of Terms',
            am: 'የቃላት ስርጭት (Distribution)'
          },
          en: 'A term is Distributed if the proposition makes an assertion about every member of that class; otherwise it is Undistributed. The distribution rule is: Proposition A distributes S only; Proposition E distributes both S and P; Proposition I distributes neither S nor P (None); Proposition O distributes P only.',
          am: 'አንድ ቃል ተሰራጭቷል (Distributed) የሚባለው ዓረፍተ-ነገሩ ስለዚያ ክፍል አባላት በሙሉ ያለ አንዳች ልዩነት ሲናገር ብቻ ነው። ህጉ፡ A ባለቤትን (S) ብቻ ያሰራጫል፤ E ሁለቱንም (S እና P) ያሰራጫል፤ I የትኛውንም (None) አያሰራጭም፤ O ማሰሪያውን (P) ብቻ ያሰራጫል።'
        }
      ]
    },
    {
      id: 'phil-sec-6-3',
      number: '6.3',
      title: {
        en: 'Lesson 3: Venn Diagrams and Squares of Opposition',
        am: 'ትምህርት ፫፡ የቬን ዲያግራም እና የተቃርኖ ካሬዎች'
      },
      paragraphs: [
        {
          id: 'phil-p-6-5',
          subheading: {
            en: 'Venn Diagram Representation',
            am: 'በቬን ዲያግራም የመወከል ህግ'
          },
          en: 'In John Venn\'s two-circle diagram: Shading an area indicates that it is completely empty (no members exist). Placing an "X" indicates that at least one member exists in that region. For A (All S are P), shade S outside P. For E (No S are P), shade the overlap of S and P. For I (Some S are P), place an X in the overlap. For O (Some S are not P), place an X in S outside P.',
          am: 'በጆን ቬን ባለሁለት ክብ ዲያግራም ውስጥ፡ ቦታውን ማጥቆር (Shading) ያ ቦታ ባዶ መሆኑንና አባል እንደሌለው ያሳያል። "X" ምልክት ማስቀመጥ ደግሞ በዚያ ክልል ቢያንስ አንድ አባል መኖሩን ያሳያል። ለA ከP ውጪ ያለውን የS ክፍል ማጥቆር፤ ለE የሁለቱ መገናኛ ማጥቆር፤ ለI በመገናኛው ውስጥ X ማድረግ፤ ለO ከP ውጪ ባለው የS ክፍል ውስጥ X ማድረግ ነው።'
        },
        {
          id: 'phil-p-6-6',
          subheading: {
            en: 'Modern (Boolean) vs. Traditional (Aristotelian) Squares of Opposition',
            am: 'የዘመናዊ (ቦሊያን) እና ባህላዊ (አሪስጣጣሊስ) የተቃርኖ ካሬዎች'
          },
          en: 'In the Modern (Boolean) Square, universal statements (A and E) lack existential import (they do not assume things actually exist); thus only the Contradictory relation holds (A opposite O, E opposite I), while other relations are logically undetermined. In the Traditional (Aristotelian) Square, existential import is granted to universals: Contradictory (opposite truth value); Contrary (A and E cannot both be true, at least one is false); Subcontrary (I and O cannot both be false, at least one is true); and Subalternation (truth trickles down from universal to particular, falsity floats up from particular to universal).',
          am: 'በዘመናዊው (ቦሊያን) ካሬ ውስጥ አጠቃላይ አረፍተ-ነገሮች (A እና E) ነገሩ በተጨባጭ አለመኖሩን ስለማያረጋግጡ የተቃርኖ ግንኙነት (Contradictory - A ከ O፣ E ከ I ተቃራኒ) ብቻ ይሰራል። በባህላዊው (አሪስጣጣሊስ) ካሬ ውስጥ ግን ነገሮች አሉ ተብለው ስለሚታሰቡ፡ Contradictory (ተቃራኒ)፤ Contrary (A እና E ሁለቱም እውነት ሊሆኑ አይችሉም)፤ Subcontrary (I እና O ሁለቱም ውሸት ሊሆኑ አይችሉም)፤ እና Subalternation (እውነት ከላይ ወደ ታች ይወርዳል፣ ውሸት ከታች ወደ ላይ ይወጣል) ተግባራዊ ይሆናሉ።'
        }
      ]
    },
    {
      id: 'phil-sec-6-4',
      number: '6.4',
      title: {
        en: 'Lesson 4: Operations: Conversion, Obversion, and Contraposition',
        am: 'ትምህርት ፬፡ የልውውጥ ስራዎች፡ ኮንቨርሽን፣ ኦብቨርሽን እና ኮንትራፖዚሽን'
      },
      paragraphs: [
        {
          id: 'phil-p-6-7',
          subheading: {
            en: 'Conversion, Obversion, and Contraposition',
            am: 'የሶስቱ አመክንዮአዊ ልውውጦች ህጎች'
          },
          en: '1. Conversion: Switch subject and predicate. Valid for E and I statements. For A and O, it is logically invalid (commits the fallacy of Illicit Conversion). 2. Obversion: Change quality (affirmative to negative or vice versa) and replace the predicate with its term complement (non-P). Obversion is VALID for all four propositions (A, E, I, O) preserving exact truth value. 3. Contraposition: Switch subject and predicate AND replace both with their term complements (non-P and non-S). Valid for A and O statements. For E and I, it is invalid (commits the fallacy of Illicit Contraposition).',
          am: '፩. ኮንቨርሽን (Conversion)፡ የባለቤትና ማሰሪያውን ቦታ ማቀያየር ነው። ለE እና ለI ሁልጊዜ ህጋዊ (Valid) ሲሆን፣ ለA እና ለO ግን ህገ-ወጥ ልውውጥ (Illicit Conversion) ስህተት ይፈጥራል። ፪. ኦብቨርሽን (Obversion)፡ ጥራትን መቀየር (አዎንታዊ ወደ አሉታዊ) እና ማሰሪያውን በተቃራኒው (Term complement - non-P) መተካት ነው። ኦብቨርሽን ለአራቱም (A, E, I, O) ሁልጊዜ ህጋዊና እውነተኛ ነው። ፫. ኮንትራፖዚሽን (Contraposition)፡ ቦታ ማቀያየር እና ሁለቱንም በተቃራኒ ቃሎቻቸው መተካት ነው። ለA እና ለO ህጋዊ ሲሆን፣ ለE እና ለI ግን ህገ-ወጥ (Illicit Contraposition) ነው።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-106-1',
      title: {
        en: 'Summary of Chapter 6: Categorical Logic and Immediate Inferences',
        am: 'የምዕራፍ ፮ ማጠቃለያ፡ ምድባዊ አመክንዮ እና ቅጽበታዊ ድምዳሜዎች'
      },
      bullets: [
        {
          en: 'The 4 standard forms: A (All S are P), E (No S are P), I (Some S are P), O (Some S are not P).',
          am: 'አራቱ መደበኛ ቅርፆች፡ A (ሁሉም S, P ናቸው)፣ E (ምንም S, P አይደለም)፣ I (አንዳንዶች S, P ናቸው)፣ O (አንዳንዶች S, P አይደሉም)።'
        },
        {
          en: 'Distribution: A distributes S; E distributes S and P; I distributes None; O distributes P.',
          am: 'ስርጭት፡ A ባለቤቱን፤ E ሁለቱንም፤ I የትኛውንም፤ O ማሰሪያውን ያሰራጫል።'
        },
        {
          en: 'Conversion is valid for E and I. Contraposition is valid for A and O. Obversion is valid for all four.',
          am: 'ኮንቨርሽን ለE እና I፤ ኮንትራፖዚሽን ለA እና O፤ ኦብቨርሽን ደግሞ ለአራቱም ህጋዊ ናቸው።'
        },
        {
          en: 'The Aristotelian square recognizes existential import, enabling contrary, subcontrary, and subalternation inferences.',
          am: 'የአሪስጣጣሊስ ካሬ ህልውናን ግምት ውስጥ በማስገባት አራት አይነት የተቃርኖ ግንኙነቶችን ያረጋግጣል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-106-1',
      number: 1,
      question: {
        en: 'Which terms are distributed in proposition O ("Some S are not P")?',
        am: 'በዓረፍተ-ነገር O ("Some S are not P") ውስጥ የትኛው ቃል ነው የተሰራጨው (Distributed)?'
      },
      answer: {
        en: 'Only the Predicate term (P) is distributed. The subject term (S) is undistributed.',
        am: 'ማሰሪያው ክፍል (P) ብቻ የተሰራጨ (Distributed) ሲሆን፣ ባለቤቱ (S) ግን አልተሰራጨቀ (Undistributed) ነው።'
      },
      explanation: {
        en: 'Proposition O says that at least one member of S is entirely excluded from the entire class of P; thus it makes an assertion about every member of P.',
        am: 'ዓረፍተ-ነገር O ቢያንስ አንዱ የS አባል ከመላው የP ክፍል ውጪ መሆኑን ስለሚገልጽ ስለ ሙሉው የP አባላት ይናገራል።'
      },
      category: 'exam_mcq'
    },
    {
      id: 'qna-106-2',
      number: 2,
      question: {
        en: 'Why is the conversion of an A proposition ("All S are P" to "All P are S") an illicit conversion?',
        am: 'የA ዓረፍተ-ነገር ልውውጥ ("ሁሉም S, P ናቸው" ወደ "ሁሉም P, S ናቸው") ለምን ህገ-ወጥ (Illicit) ሆነ?'
      },
      answer: {
        en: 'Because the original proposition distributes S but not P. Converting it distributes P, making an unwarranted universal claim about P. For example: "All cats are animals" is True, but "All animals are cats" is False.',
        am: 'ምክንያቱም የመጀመሪያው ዓረፍተ-ነገር Sን ያሰራጫል እንጂ Pን አያሰራጭም። ሲቀየር ግን በስህተት Pን በማሰራጨት ያልተረጋገጠ አጠቃላይ ድምዳሜ ይሰጣል። ለምሳሌ፡ "ሁሉም ድመቶች እንስሳት ናቸው" እውነት ሲሆን፣ "ሁሉም እንስሳት ድመቶች ናቸው" ግን ውሸት ነው።'
      },
      explanation: {
        en: 'Conversion on A yields an undetermined truth-value, creating the formal fallacy of illicit conversion.',
        am: 'በA ላይ የሚደረግ ልውውጥ እውነተኝነትን ስለማያረጋግጥ ህገ-ወጥ ልውውጥ የተሰኘውን መደበኛ ስህተት ይፈጥራል።'
      },
      category: 'conceptual'
    }
  ],
  quizzes: [
    {
      id: 'quiz-106-1',
      question: {
        en: 'What is the obverse of: "All horses are animals"?',
        am: '"ሁሉም ፈረሶች እንስሳት ናቸው" የሚለው ዓረፍተ-ነገር ኦብቨርስ (Obverse) የቱ ነው?',
      },
      options: [
        { id: 'a', text: { en: 'No horses are animals', am: 'ምንም ፈረሶች እንስሳት አይደሉም' } },
        { id: 'b', text: { en: 'No horses are non-animals', am: 'ምንም ፈረሶች እንስሳ-ያልሆኑ አይደሉም' } },
        { id: 'c', text: { en: 'All animals are horses', am: 'ሁሉም እንስሳት ፈረሶች ናቸው' } },
        { id: 'd', text: { en: 'Some horses are not animals', am: 'አንዳንዶች ፈረሶች እንስሳት አይደሉም' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Obversion changes the quality (All -> No) and replaces the predicate with its term complement (animals -> non-animals).',
        am: 'ኦብቨርሽን ጥራቱን ይቀይራል (ሁሉም ወደ ምንም) እንዲሁም ማሰሪያውን በተቃራኒ ቃሉ (non-animals) ይተካል።'
      }
    },
    {
      id: 'quiz-106-2',
      question: {
        en: 'In traditional logic, if an A proposition is True, what is the truth value of the corresponding E proposition according to the Contrary relation?',
        am: 'በባህላዊ አመክንዮ የA ዓረፍተ-ነገር እውነት (True) ከሆነ፣ የE ዓረፍተ-ነገር እሴት ምን ይሆናል?'
      },
      options: [
        { id: 'a', text: { en: 'True', am: 'እውነት' } },
        { id: 'b', text: { en: 'False', am: 'ውሸት (False)' } },
        { id: 'c', text: { en: 'Undetermined', am: 'ያልተወሰነ' } },
        { id: 'd', text: { en: 'Invalid', am: 'ኢ-ህጋዊ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'The contrary relation dictates that A and E cannot both be true (at least one is false). If A is True, E must be False.',
        am: 'የተቃራኒ (Contrary) ህግ እንደሚደነግገው A እና E ሁለቱም እውነት ሊሆኑ አይችሉም። ስለዚህ A እውነት ከሆነ E የግድ ውሸት (False) ይሆናል።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-106-1',
      termEn: 'Quantifier',
      termAm: 'መጠን አመልካች',
      defEn: 'Words specifying quantity: "All", "No", and "Some" (meaning at least one).',
      defAm: 'መጠንን የሚገልጹ ቃላት፡ "ሁሉም"፣ "ምንም" እና "አንዳንዶች" (ቢያንስ አንዱ)።',
      chapter: 6
    },
    {
      id: 'fc-106-2',
      termEn: 'Distribution',
      termAm: 'ስርጭት',
      defEn: 'An attribute of a term referring to all members of its denoted class.',
      defAm: 'ዓረፍተ-ነገሩ ስለ አንድ ክፍል አባላት በሙሉ ያለልዩነት የሚናገርበት ሁኔታ።',
      chapter: 6
    },
    {
      id: 'fc-106-3',
      termEn: 'Obversion',
      termAm: 'ኦብቨርሽን',
      defEn: 'Valid logical operation changing quality and replacing predicate with its complement.',
      defAm: 'ጥራትን በመቀየርና ማሰሪያውን በተቃራኒ ቃል በመተካት የሚከናወን ሁልጊዜ ትክክለኛ ልውውጥ።',
      chapter: 6
    },
    {
      id: 'fc-106-4',
      termEn: 'Contraposition',
      termAm: 'ኮንትራፖዚሽን',
      defEn: 'Operation switching subject and predicate and replacing both with term complements.',
      defAm: 'ባለቤትና ማሰሪያን በማቀያየርና ሁለቱንም በተቃራኒ ቃሎቻቸው በመተካት የሚደረግ ልውውጥ።',
      chapter: 6
    }
  ]
};
