import { Chapter } from '../../types';

export const chapter2: Chapter = {
  id: 102,
  number: 2,
  title: {
    en: 'Chapter 2: Basic Concepts of Logic',
    am: 'ምዕራፍ ፪፡ የአመክንዮ መሰረታዊ ፅንሰ-ሀሳቦች'
  },
  universityAuthor: 'Mr. Teklay G. (Aksum University) - MoSHE 2019',
  overview: {
    en: 'Logic is the organized body of knowledge or science that evaluates arguments. It develops methods and principles to evaluate whether premises adequately support conclusions and to guide the construction of reliable arguments.',
    am: 'ስነ-አመክንዮ ክርክሮችን (Arguments) የሚገመግም የተደራጀ የዕውቀት ሳይንስ ነው። መነሻ ሀሳቦች ድምዳሜን በአግባቡ የሚደግፉ መሆናቸውን ለመመዘንና ትክክለኛ ክርክሮችን ለመገንባት የሚያስችሉ መርሆዎችን ያቀርባል።'
  },
  learningOutcomes: [
    {
      en: 'Identify the components of an argument: premises, conclusion, and inferential claim.',
      am: 'የአንድ ክርክር ክፍሎችን (መነሻ ሀሳብ፣ ድምዳሜ እና የማያያዣ ጥያቄ) ለይቶ ማወቅ።'
    },
    {
      en: 'Distinguish argumentative passages from non-argumentative passages (explanations, reports, conditional statements).',
      am: 'አመክንዮአዊ ክርክሮችን ክርክር ካልሆኑ ጽሑፎች (ማብራሪያዎች፣ ሪፖርቶች፣ ቅድመ-ሁኔታዊ ዓረፍተ-ነገሮች) መለየት።'
    },
    {
      en: 'Differentiate deductive arguments (validity/soundness) from inductive arguments (strength/cogency).',
      am: 'አስገዳጅ አመክንዮን (ህጋዊነትና እውነተኝነት) ከአመላካች አመክንዮ (ብርታትና አሳማኝነት) መለየት።'
    }
  ],
  sections: [
    {
      id: 'phil-sec-2-1',
      number: '2.1',
      title: {
        en: 'Lesson 1: Arguments, Premises, and Conclusions',
        am: 'ትምህርት ፩፡ ክርክሮች፣ መነሻዎች እና ድምዳሜዎች'
      },
      paragraphs: [
        {
          id: 'phil-p-2-1',
          subheading: {
            en: 'What is an Argument in Logic?',
            am: 'በስነ-አመክንዮ ውስጥ ክርክር (Argument) ማለት ምን ማለት ነው?'
          },
          en: 'In logic, an argument is not a mere verbal fight. It is a technical term defined as a group of statements, one or more of which (premises) are claimed to provide support or evidence for another statement (the conclusion). A statement is a declarative sentence that has a truth-value (either true or false), contrasting with questions, commands, or exclamations which lack truth-values.',
          am: 'በስነ-አመክንዮ ክርክር ማለት የቃላት ንትርክ አይደለም። አንድ ወይም ከዚያ በላይ የሆኑ መነሻ ሀሳቦች (Premises) ለአንድ ድምዳሜ (Conclusion) እንደ ማስረጃ ወይም ድጋፍ ሆነው የሚቀርቡበት የተዋቀረ ዓረፍተ-ነገር ስብስብ ነው። ዓረፍተ-ነገር በስነ-አመክንዮ እውነት ወይም ውሸት ሊሆን የሚችል ገላጭ ዓረፍተ-ነገር (Statement) መሆን አለበት፤ ጥያቄዎችና ትእዛዞች እውነት/ሀሰት ስለማይባሉ ክርክር መገንባት አይችሉም።',
          highlightTerms: [
            {
              en: 'Argument',
              am: 'ክርክር/አመክንዮ',
              defEn: 'A group of statements where premises are claimed to support or prove a conclusion.',
              defAm: 'መነሻዎቹ ድምዳሜውን ይደግፋሉ ተብለው የቀረቡ የዓረፍተ-ነገሮች ስብስብ።'
            },
            {
              en: 'Premise',
              am: 'መነሻ ሀሳብ',
              defEn: 'A statement that sets forth reasons or evidence for accepting a conclusion.',
              defAm: 'ድምዳሜው እንዲቀበል ማስረጃ ወይም ምክንያት ሆኖ የሚቀርብ ዓረፍተ-ነገር።'
            },
            {
              en: 'Conclusion',
              am: 'ድምዳሜ',
              defEn: 'The statement claimed to follow from and be established by the premises.',
              defAm: 'ከቀረቡት መነሻ ማስረጃዎች ይከተላል ተብሎ የተደረሰበት ዋና ሀሳብ።'
            }
          ]
        },
        {
          id: 'phil-p-2-2',
          subheading: {
            en: 'Indicator Words: Premise vs Conclusion',
            am: 'የመነሻ እና የድምዳሜ አመልካች ቃላት'
          },
          en: 'Indicator words provide clues to the structure of arguments. Conclusion indicators include: "therefore", "thus", "hence", "consequently", "so", "it follows that", "as a result". Premise indicators include: "since", "because", "for", "in that", "given that", "owing to", and "inasmuch as". The phrase "for this reason" is unique: what precedes it is a premise and what follows it is the conclusion.',
          am: 'አመልካች ቃላት በአመክንዮ ውስጥ የመነሻና የድምዳሜውን ቦታ ለመለየት ይጠቅማሉ። የድምዳሜ አመልካቾች፡ "ስለዚህ (therefore)"፣ "በመሆኑም (thus)"፣ "በዚህም ምክንያት (hence)"፣ "ውጤቱም" ናቸው። የመነሻ አመልካቾች፡ "ምክንያቱም (because)"፣ "ከ... አንፃር (since)"፣ "በመሆኑ (given that)"፣ "ከ... የተነሳ (owing to)" ናቸው። "በዚህ ምክንያት (for this reason)" የሚለው ቃል ደግሞ ልዩ ነው፡ ከቃሉ በፊት ያለው መነሻ ሲሆን ከቃሉ በኋላ የሚመጣው ድምዳሜ ነው።'
        }
      ]
    },
    {
      id: 'phil-sec-2-2',
      number: '2.2',
      title: {
        en: 'Lesson 2: Recognizing Arguments and Non-Arguments',
        am: 'ትምህርት ፪፡ ክርክሮችን እና ክርክር ያልሆኑ ጽሑፎችን መለየት'
      },
      paragraphs: [
        {
          id: 'phil-p-2-3',
          subheading: {
            en: 'Factual Claim and Inferential Claim',
            am: 'እውነታዊ ጥያቄ (Factual Claim) እና የማያያዣ ጥያቄ (Inferential Claim)'
          },
          en: 'For a passage to be an argument, two conditions must be fulfilled: (1) A factual claim—at least one statement must claim to present evidence; and (2) An inferential claim—there must be a claim that this evidence implies or supports something. An inferential claim can be explicit (marked by indicators like "therefore") or implicit (inferred from context).',
          am: 'አንድ ጽሑፍ ክርክር ለመባል ሁለት መስፈርቶችን ማሟላት አለበት፡ (1) የእውነታ ጥያቄ (Factual claim) — ቢያንስ አንዱ ዓረፍተ-ነገር ማስረጃ ሊያቀርብ ይገባል፤ እና (2) የማያያዣ ጥያቄ (Inferential claim) — የቀረበው ማስረጃ ድምዳሜውን ያረጋግጣል የሚል ግንኙነት መኖር አለበት። ይህ የማያያዣ ግንኙነት ግልጽ (explicit) ወይም በይዘቱ ውስጥ የተደበቀ (implicit) ሊሆን ይችላል።'
        },
        {
          id: 'phil-p-2-4',
          subheading: {
            en: 'Non-Argumentative Passages: Warnings, Reports, Explanations, Conditionals',
            am: 'ክርክር ያልሆኑ ጽሑፎች፡ ማስጠንቀቂያዎች፣ ሪፖርቶች፣ ማብራሪያዎች እና ቅድመ-ሁኔታዎች'
          },
          en: 'Non-argumentative passages lack an inferential claim: (1) Warnings and Advice; (2) Statements of belief or opinion; (3) Reports; (4) Expository passages (expanding a topic sentence rather than proving it); (5) Illustrations (showing how something is done rather than proving it); (6) Explanations (composed of explanandum—the accepted fact, and explanans—the cause shedding light on why it happened); and (7) Conditional statements ("if A, then B"). A single conditional statement is NOT an argument, although it expresses sufficient and necessary conditions.',
          am: 'ክርክር ያልሆኑ ጽሑፎች የማያያዣ ጥያቄ (Inferential claim) የላቸውም፡ (1) ማስጠንቀቂያዎችና ምክሮች፤ (2) የግል እምነትና አመለካከት መግለጫዎች፤ (3) ሪፖርቶችና ዜናዎች፤ (4) ገላጭ ጽሑፎች (አንድን ርዕስ የሚያብራሩ እንጂ ለማስረዳት የማይከራከሩ)፤ (5) ምሳሌዎች (አንድ ነገር እንዴት እንደሚሰራ የሚያሳዩ)፤ (6) ማብራሪያዎች (የተረጋገጠን እውነታ [Explanandum] በምክንያት [Explanans] የሚያስረዱ)፤ እና (7) ቅድመ-ሁኔታዊ ዓረፍተ-ነገሮች ("ከሆነ... ይሆናል")። ነጠላ ቅድመ-ሁኔታዊ ዓረፍተ-ነገር በራሱ ክርክር ሊሆን አይችልም።'
        }
      ]
    },
    {
      id: 'phil-sec-2-3',
      number: '2.3',
      title: {
        en: 'Lesson 3: Deductive vs. Inductive Arguments',
        am: 'ትምህርት ፫፡ አስገዳጅ (Deductive) እና አመላካች (Inductive) አመክንዮ'
      },
      paragraphs: [
        {
          id: 'phil-p-2-5',
          subheading: {
            en: 'Deduction (Necessity) vs Induction (Probability)',
            am: 'አስገዳጅነት (የግድ መሆን) እና አመላካችነት (ዕድል/Probability)'
          },
          en: 'A deductive argument claims that it is impossible for the premises to be true and the conclusion false (strict necessity). An inductive argument claims that it is improbable for the premises to be true and the conclusion false (probabilistic reasoning).',
          am: 'አስገዳጅ አመክንዮ (Deductive argument) መነሻዎቹ እውነት ከሆኑ ድምዳሜው ሀሰት መሆን በፍጹም አይችልም (Strict necessity) የሚል ነው። በአንጻሩ አመላካች አመክንዮ (Inductive argument) መነሻዎቹ እውነት ከሆኑ ድምዳሜው እውነት የመሆን ዕድሉ ከፍተኛ ነው (Probability) እንጂ ሙሉ በሙሉ እርግጠኛ አይደለም።',
          highlightTerms: [
            {
              en: 'Deductive Argument',
              am: 'አስገዳጅ አመክንዮ',
              defEn: 'Argument where the conclusion is claimed to follow with strict certainty and necessity.',
              defAm: 'መነሻዎቹ እውነት ከሆኑ ድምዳሜው የግድ እውነት መሆን ያለበት ክርክር።'
            },
            {
              en: 'Inductive Argument',
              am: 'አመላካች አመክንዮ',
              defEn: 'Argument where premises provide probable (rather than conclusive) support for the conclusion.',
              defAm: 'መነሻዎቹ ለድምዳሜው እውነት መሆን ከፍተኛ ዕድልና አዝማሚያ የሚያሳዩበት ክርክር።'
            }
          ]
        },
        {
          id: 'phil-p-2-6',
          subheading: {
            en: 'Deductive and Inductive Argument Forms',
            am: 'የአስገዳጅ እና የአመላካች አመክንዮ ቅርፆች'
          },
          en: 'Deductive forms include: (1) Arguments based on mathematics (arithmetic/geometry); (2) Arguments from definition; (3) Syllogisms: Categorical (all/no/some), Hypothetical (if-then), and Disjunctive (either-or). Inductive forms include: (1) Predictions about the future; (2) Arguments from analogy; (3) Inductive generalizations (sample to population); (4) Arguments from authority; (5) Arguments from signs; and (6) Causal inferences.',
          am: 'የአስገዳጅ አመክንዮ ቅርፆች፡ (1) በሂሳብ ስሌት ላይ የተመሰረቱ፤ (2) በትርጉም ፍቺ ላይ የተመሰረቱ፤ (3) ሲሎጂዝም (Syllogisms)፡ ምድባዊ (Categorical)፣ ቅድመ-ሁኔታዊ (Hypothetical) እና አማራጭ (Disjunctive) ናቸው። የአመላካች አመክንዮ ቅርፆች ደግሞ፡ (1) ስለወደፊቱ የሚደረግ ትንበያ (Prediction)፤ (2) አምሳያ/አናሎጂ (Analogy)፤ (3) አጠቃላይ ድምዳሜ (Inductive generalization)፤ (4) ከባለሙያ ምስክርነት (Authority)፤ (5) ከመረጃ ምልክቶች (Signs)፤ እና (6) ከምክንያትና ውጤት (Causal inferences) የሚነሱ ናቸው።'
        }
      ]
    },
    {
      id: 'phil-sec-2-4',
      number: '2.4',
      title: {
        en: 'Lesson 4: Evaluating Arguments (Validity, Soundness, Strength, Cogency)',
        am: 'ትምህርት ፬፡ ክርክሮችን መገምገም (ህጋዊነት፣ እውነተኝነት፣ ብርታትና አሳማኝነት)'
      },
      paragraphs: [
        {
          id: 'phil-p-2-7',
          subheading: {
            en: 'Evaluating Deductive Arguments: Validity and Soundness',
            am: 'አስገዳጅ ክርክሮችን መገምገም፡ ህጋዊነት (Validity) እና እውነተኝነት (Soundness)'
          },
          en: 'A deductive argument is Valid if, assuming the premises are true, it is impossible for the conclusion to be false; otherwise it is Invalid. Validity is about structure, not factual truth! A Sound argument = A Valid argument + All True premises. If an argument is invalid, or contains even one false premise, it is Unsound.',
          am: 'አስገዳጅ አመክንዮ ህጋዊ (Valid) የሚባለው መነሻዎቹ እውነት ናቸው ተብለው ቢታሰቡ ድምዳሜው ውሸት ሊሆን የማይችልበት መዋቅር ሲኖረው ነው። ህጋዊነት የመዋቅር ጥያቄ እንጂ የነጠላ ዓረፍተ-ነገሮች የእውነት ይዘት አይደለም! ሙሉ እውነተኛ ክርክር (Sound argument) = ህጋዊ መዋቅር (Valid) + ሁሉም መነሻዎች እውነት (True premises) ሲሆኑ ነው። ክርክሩ ህጋዊ ካልሆነ ወይም አንዱ መነሻ ውሸት ከሆነ እውነተኝነት የጎደለው (Unsound) ይባላል።'
        },
        {
          id: 'phil-p-2-8',
          subheading: {
            en: 'Evaluating Inductive Arguments: Strength and Cogency',
            am: 'አመላካች ክርክሮችን መገምገም፡ ብርታት (Strength) እና አሳማኝነት (Cogency)'
          },
          en: 'An inductive argument is Strong if, assuming the premises are true, it is improbable for the conclusion to be false; otherwise it is Weak. A Cogent argument = A Strong argument + All True premises (and does not ignore crucial conflicting evidence). Otherwise it is Uncogent.',
          am: 'አመላካች አመክንዮ ጠንካራ (Strong) የሚባለው መነሻዎቹ እውነት ከሆኑ ድምዳሜው እውነት የመሆን ዕድሉ ከ50% በላይ ከፍተኛ ሲሆን ነው፤ ይህ ካልሆነ ደካማ (Weak) ይባላል። አሳማኝ አመክንዮ (Cogent argument) = ጠንካራ መዋቅር (Strong) + ሁሉም መነሻዎች በተጨባጭ እውነት (True premises) ሲሆኑ እና ወሳኝ ተቃራኒ መረጃዎች ያልተሸሸጉበት መሆን አለበት።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-102-1',
      title: {
        en: 'Summary of Chapter 2: Foundations of Logic',
        am: 'የምዕራፍ ፪ ማጠቃለያ፡ የአመክንዮ መሰረታዊ ህጎች'
      },
      bullets: [
        {
          en: 'An argument consists of premises providing evidence for a single conclusion.',
          am: 'አንድ ክርክር ለአንድ ድምዳሜ ማስረጃ የሚሰጡ መነሻ ሀሳቦችን ይይዛል።'
        },
        {
          en: 'Statements have truth-values (true/false); questions, commands, and suggestions are not statements.',
          am: 'ዓረፍተ-ነገሮች እውነት ወይም ሀሰት ሊሆኑ ይችላሉ፤ ጥያቄዎችና ትእዛዞች ግን እውነት/ሀሰት አይባሉም።'
        },
        {
          en: 'Deductive arguments aim for strict necessity; evaluated by Validity and Soundness.',
          am: 'አስገዳጅ አመክንዮዎች የግድ እውነት ወደመሆን የሚያመሩ ሲሆን በህጋዊነት (Validity) እና በእውነተኝነት (Soundness) ይለካሉ።'
        },
        {
          en: 'Inductive arguments aim for probability; evaluated by Strength and Cogency.',
          am: 'አመላካች አመክንዮዎች በዕድል/አዝማሚያ ላይ የተመሰረቱ ሲሆን በብርታት (Strength) እና በአሳማኝነት (Cogency) ይገመገማሉ።'
        },
        {
          en: 'Sound = Valid + True Premises. Cogent = Strong + True Premises.',
          am: 'ሙሉ እውነተኛ (Sound) = ህጋዊ + እውነት መነሻዎች። አሳማኝ (Cogent) = ጠንካራ + እውነት መነሻዎች።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-102-1',
      number: 1,
      question: {
        en: 'Can a deductive argument have false premises and a false conclusion and still be valid?',
        am: 'አንድ አስገዳጅ ክርክር ውሸት መነሻዎችና ውሸት ድምዳሜ ኖሮት ህጋዊ (Valid) ሊሆን ይችላል?'
      },
      answer: {
        en: 'Yes! Validity is strictly a structural relationship. For example: "All Americans are Ethiopians (F). All Egyptians are Americans (F). Thus, all Egyptians are Ethiopians (F)." The structure is completely valid because IF the premises were true, the conclusion would necessarily follow.',
        am: 'አዎን! ህጋዊነት የመዋቅር ግንኙነት ብቻ ነው። ለምሳሌ፡ "ሁሉም አሜሪካውያን ኢትዮጵያውያን ናቸው (ውሸት)። ሁሉም ግብፃውያን አሜሪካውያን ናቸው (ውሸት)። ስለዚህ ሁሉም ግብፃውያን ኢትዮጵያውያን ናቸው (ውሸት)።" ይህ ክርክር መነሻዎቹ እውነት ቢሆኑ ድምዳሜው የግድ እውነት ስለሚሆን ሙሉ በሙሉ ህጋዊ (Valid) ነው።'
      },
      explanation: {
        en: 'The ONLY combination that guarantees an argument is INVALID is True premises leading to an actually False conclusion.',
        am: 'ክርክርን በእርግጠኝነት ኢ-ህጋዊ (Invalid) የሚያደርገው ብቸኛው ሁኔታ እውነት መነሻዎች ኖረውት ወደ ውሸት ድምዳሜ ሲያመራ ብቻ ነው።'
      },
      category: 'conceptual'
    },
    {
      id: 'qna-102-2',
      number: 2,
      question: {
        en: 'How does an explanation differ from an argument in logic?',
        am: 'በስነ-አመክንዮ ውስጥ ማብራሪያ (Explanation) ከክርክር (Argument) በምን ይለያል?'
      },
      answer: {
        en: 'An explanation takes an accepted fact (explanandum) and shows WHY or HOW it happened using the explanans (cause). An argument aims to PROVE that a disputed claim is true by offering evidence.',
        am: 'ማብራሪያ አስቀድሞ የታወቀን እውነታ (Explanandum) ለምን ወይም እንዴት እንደተከሰተ በምክንያት (Explanans) ያስረዳል። ክርክር ግን ያልተረጋገጠን ድምዳሜ በማስረጃዎች እውነት መሆኑን ለማሳመን ይጥራል።'
      },
      explanation: {
        en: 'In explanations we move backward from an accepted fact to its cause, whereas in arguments we move forward from premises to establish a conclusion.',
        am: 'በማብራሪያ ከታወቀ እውነታ ወደ ኋላ ወደ መንስኤው እንጓዛለን፤ በክርክር ግን ከመነሻ ማስረጃ ወደ ፊት ድምዳሜን ለማረጋገጥ እንጓዛለን።'
      },
      category: 'discussion'
    },
    {
      id: 'qna-102-3',
      number: 3,
      question: {
        en: 'Why is a single conditional statement ("If you study, then you pass") not an argument?',
        am: 'ነጠላ ቅድመ-ሁኔታዊ ዓረፍተ-ነገር ("ካጠናህ፣ ፈተናውን ታልፋለህ") ለምን እንደ ክርክር አይቆጠርም?'
      },
      answer: {
        en: 'Because there is no claim that either the antecedent ("you study") or the consequent ("you pass") is factually true. It only states a conditional relationship, without asserting evidence to establish a conclusion.',
        am: 'ምክንያቱም ቅድመ-ሁኔታውም ("ማጥናትህ") ሆነ ውጤቱ ("ማለፍህ") በተጨባጭ እውነት ናቸው የሚል ማረጋገጫ የለም። የሚያሳየው የሁለት ነገሮችን ሁኔታዊ ትስስር እንጂ ድምዳሜን የሚያረጋግጥ ማስረጃ አያቀርብም።'
      },
      explanation: {
        en: 'A conditional statement can serve as a premise or conclusion inside an argument, but by itself, it is not an argument.',
        am: 'ቅድመ-ሁኔታዊ ዓረፍተ-ነገር በአንድ ክርክር ውስጥ እንደ መነሻ ወይም ድምዳሜ ሊያገለግል ይችላል እንጂ ለብቻው ክርክር አይሆንም።'
      },
      category: 'exam_mcq'
    }
  ],
  quizzes: [
    {
      id: 'quiz-102-1',
      question: {
        en: 'Which of the following is a CONCLUSION indicator word?',
        am: 'ከሚከተሉት ውስጥ የድምዳሜ (Conclusion) አመልካች ቃል የቱ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Because', am: 'ምክንያቱም' } },
        { id: 'b', text: { en: 'Inasmuch as', am: 'ከ... አንፃር' } },
        { id: 'c', text: { en: 'Consequently', am: 'በዚህም ምክንያት / በመሆኑም' } },
        { id: 'd', text: { en: 'Given that', am: 'ከቀረበው አንፃር' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: '"Consequently", "therefore", "thus", and "hence" signal that a conclusion is following.',
        am: '"Consequently", "therefore", "thus" እና "hence" ድምዳሜ መከተሉን የሚያመለክቱ ቃላት ናቸው።'
      }
    },
    {
      id: 'quiz-102-2',
      question: {
        en: 'What makes a deductive argument "Sound"?',
        am: 'አንድን አስገዳጅ ክርክር እውነተኛ (Sound) የሚያደርገው ምንድን ነው?'
      },
      options: [
        { id: 'a', text: { en: 'It is strong and has probable premises', am: 'ጠንካራ መሆኑና መነሻዎቹ ዕድል ያላቸው መሆኑ' } },
        { id: 'b', text: { en: 'It is valid and all its premises are factually true', am: 'ህጋዊ (Valid) መሆኑና ሁሉም መነሻዎቹ እውነት መሆናቸው' } },
        { id: 'c', text: { en: 'It uses emotional appeal effectively', am: 'ስሜታዊ አሳማኝነትን በአግባቡ መጠቀሙ' } },
        { id: 'd', text: { en: 'It has at least three premises and two conclusions', am: 'ሶስት መነሻዎችና ሁለት ድምዳሜዎች መያዙ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'A Sound argument requires both structural validity AND factually true premises.',
        am: 'እውነተኛ ክርክር (Sound) መዋቅራዊ ህጋዊነትን (Validity) እና የመነሻዎችን ተጨባጭ እውነትነት ያሟላ ነው።'
      }
    },
    {
      id: 'quiz-102-3',
      question: {
        en: 'Which form of inductive argument reasons from a small observed sample to a claim about an entire population?',
        am: 'ከተወሰነ ናሙና ተነስቶ ስለ አጠቃላይ ህዝብ ወይም ቡድን ድምዳሜ ላይ የሚደርሰው የአመላካች አመክንዮ አይነት የቱ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Argument from Analogy', am: 'አምሳያዊ አመክንዮ (Analogy)' } },
        { id: 'b', text: { en: 'Inductive Generalization', am: 'አመላካች አጠቃላይ ድምዳሜ (Inductive Generalization)' } },
        { id: 'c', text: { en: 'Categorical Syllogism', am: 'ምድባዊ ሲሎጂዝም' } },
        { id: 'd', text: { en: 'Causal Inference', am: 'ምክንያትና ውጤት' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Inductive generalization proceeds from the traits of a selected sample to claims about the whole group.',
        am: 'አመላካች አጠቃላይ ድምዳሜ ከተመረጠ ናሙና ተነስቶ ስለ አጠቃላይ ቡድኑ ባህሪ ይደመድማል።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-102-1',
      termEn: 'Argument',
      termAm: 'ክርክር',
      defEn: 'A group of statements in which premises are claimed to support a conclusion.',
      defAm: 'መነሻዎቹ ድምዳሜውን ይደግፋሉ ተብለው የቀረቡ የዓረፍተ-ነገሮች ስብስብ።',
      chapter: 2
    },
    {
      id: 'fc-102-2',
      termEn: 'Validity',
      termAm: 'ህጋዊነት',
      defEn: 'Structural property of deductive arguments where true premises guarantee a true conclusion.',
      defAm: 'መነሻዎቹ እውነት ቢሆኑ ድምዳሜው ውሸት ሊሆን የማይችልበት የአስገዳጅ አመክንዮ መዋቅራዊ ባህሪ።',
      chapter: 2
    },
    {
      id: 'fc-102-3',
      termEn: 'Soundness',
      termAm: 'እውነተኝነት',
      defEn: 'A valid deductive argument that contains all factually true premises.',
      defAm: 'ህጋዊ መዋቅር ያለውና ሁሉም መነሻዎቹ እውነት የሆኑበት አስገዳጅ አመክንዮ።',
      chapter: 2
    },
    {
      id: 'fc-102-4',
      termEn: 'Cogency',
      termAm: 'አሳማኝነት',
      defEn: 'A strong inductive argument possessing all true premises and no suppressed evidence.',
      defAm: 'ጠንካራ መዋቅር ያለው እና ሁሉም መነሻዎቹ እውነት የሆኑበት አመላካች አመክንዮ።',
      chapter: 2
    }
  ]
};
