import { Chapter } from '../../types';

export const mathChapter3: Chapter = {
  id: 703,
  number: 3,
  title: {
    en: 'Chapter 3: Limits and Continuity',
    am: 'ምዕራፍ ፫፡ ወሰኖች እና ቀጣይነት (Limits & Continuity)'
  },
  universityAuthor: 'Tibebe-selassie T/mariam (Addis Ababa University / MoSHE)',
  overview: {
    en: 'Rigorous foundations of calculus: Intuitive concept and formal (ε, δ)-definition of limit, one-sided limits, algebraic limit laws, the Squeeze Theorem, trigonometric limits, continuity at a point and on intervals, the Intermediate Value Theorem (IVT), limits at infinity, and asymptotes.',
    am: 'የካልኩለስ መሰረት፡ የወሰን (Limit) ምንነት እና መደበኛ የ (ε, δ) ትርጉም፣ የአንድ አቅጣጫ ወሰኖች፣ የወሰን ህጎች፣ የስኩዊዝ ቴዎረም (Squeeze Theorem)፣ የትሪጎኖሜትሪ ወሰኖች፣ በአንድ ነጥብና በክፍተት ላይ ያለ ቀጣይነት (Continuity)፣ የመካከለኛ ዋጋ ቴዎረም (IVT)፣ በወሰን-አልባ ላይ ያሉ ወሰኖች እና አስምፕቶቶች።'
  },
  learningOutcomes: [
    {
      en: 'Evaluate limits algebraically using direct substitution, factoring, rationalization, and standard limit theorems.',
      am: 'ቀጥታ በመተካት፣ በማባዛት፣ ራሽናላይዝ በማድረግ እና በመደበኛ ቴዎረሞች ወሰኖችን ማስላት።'
    },
    {
      en: 'Apply one-sided limits to determine whether two-sided limits exist and identify points of discontinuity.',
      am: 'የሁለት አቅጣጫ ወሰን መኖሩን ለመወሰንና የማቋረጥ ነጥቦችን ለመለየት የአንድ አቅጣጫ ወሰኖችን መተግበር።'
    },
    {
      en: 'Utilize the Squeeze (Sandwich) Theorem to compute trigonometric limits such as lim_{x→0} (sin x)/x = 1.',
      am: 'የስኩዊዝ ቴዎረምን በመጠቀም የትሪጎኖሜትሪ ወሰኖችን (ለምሳሌ lim_{x→0} (sin x)/x = 1) ማስላት።'
    },
    {
      en: 'Test functions for continuity using the three-part definition and apply the Intermediate Value Theorem to guarantee roots.',
      am: 'በሶስቱ መስፈርቶች የፈንክሽን ቀጣይነትን ማረጋገጥ እና የ IVT ቴዎረምን በመጠቀም የስር መኖርን ማረጋገጥ።'
    },
    {
      en: 'Determine infinite limits and limits at infinity to identify vertical, horizontal, and oblique asymptotes.',
      am: 'አግድም፣ ቀጥታ እና ተዳፋት አስምፕቶቶችን ለመለየት ወሰን-አልባ ወሰኖችን መተንተን።'
    }
  ],
  sections: [
    {
      id: 'math-3-1',
      number: '3.1',
      title: {
        en: '3.1 Intuitive Concept and Formal Definition of Limits',
        am: '፫.፩ የወሰን (Limit) ምንነት እና መደበኛ ትርጓሜ'
      },
      paragraphs: [
        {
          id: 'math-p3-1',
          en: 'We say lim_{x→c} f(x) = L if the values of f(x) get arbitrarily close to L as x approaches c from either side (with x ≠ c). Formally, for every ε > 0, there exists a δ > 0 such that if 0 < |x - c| < δ, then |f(x) - L| < ε. The limit describes the behavior of f(x) near c, irrespective of whether f(c) is defined.',
          am: 'x ወደ c ሲጠጋ (x ≠ c) የ f(x) ዋጋ ወደ L የሚጠጋ ከሆነ lim_{x→c} f(x) = L እንላለን። በመደበኛ አገላለጽ፡ ለማንኛውም ε > 0፣ 0 < |x - c| < δ ሲሆን |f(x) - L| < ε የሚሆን δ > 0 አለ። ወሰን f(c) ቢገለጽም ባይገለጽም በ c አቅራቢያ ያለውን ባህሪ ይገልጻል።',
          highlightTerms: [
            { en: 'Limit', am: 'ወሰን (Limit)' },
            { en: 'Epsilon-Delta Definition', am: 'የኤፕሲሎን-ዴልታ ትርጓሜ' }
          ]
        }
      ]
    },
    {
      id: 'math-3-2',
      number: '3.2',
      title: {
        en: '3.2 One-Sided Limits and Limit Laws',
        am: '፫.፪ የአንድ አቅጣጫ ወሰኖች እና የወሰን ህጎች'
      },
      paragraphs: [
        {
          id: 'math-p3-2',
          en: 'The two-sided limit lim_{x→c} f(x) = L exists if and only if both one-sided limits exist and are equal: lim_{x→c⁻} f(x) = lim_{x→c⁺} f(x) = L. Basic limit laws state that limits preserve sums, differences, products, quotients (provided denominator limit ≠ 0), and scalar multiples.',
          am: 'የሁለት አቅጣጫ ወሰን lim_{x→c} f(x) = L ሊኖር የሚችለው ሁለቱ የአንድ አቅጣጫ ወሰኖች ኖረው እኩል ሲሆኑ ብቻ ነው፡ lim_{x→c⁻} f(x) = lim_{x→c⁺} f(x) = L። የወሰን ህጎች መደመርን፣ መቀነስን፣ ማባዛትንና ማካፈልን (የታችኛው ዜሮ ካልሆነ) ይጠብቃሉ።',
          highlightTerms: [
            { en: 'Left-hand limit', am: 'የግራ አቅጣጫ ወሰን' },
            { en: 'Right-hand limit', am: 'የቀኝ አቅጣጫ ወሰን' },
            { en: 'Limit Laws', am: 'የወሰን ህጎች' }
          ]
        }
      ]
    },
    {
      id: 'math-3-3',
      number: '3.3',
      title: {
        en: '3.3 Continuity and the Intermediate Value Theorem (IVT)',
        am: '፫.፫ ቀጣይነት እና የመካከለኛ ዋጋ ቴዎረም'
      },
      paragraphs: [
        {
          id: 'math-p3-3',
          en: 'A function f is continuous at x = c if: 1) f(c) is defined; 2) lim_{x→c} f(x) exists; and 3) lim_{x→c} f(x) = f(c). If any condition fails, f has a discontinuity (removable, jump, or essential/infinite). The Intermediate Value Theorem (IVT) states that if f is continuous on [a, b] and k is any number between f(a) and f(b), then there exists at least one c ∈ (a, b) such that f(c) = k.',
          am: 'ፈንክሽን f በ x = c ላይ ቀጣይ (Continuous) የሚባለው፡ 1) f(c) የተተረጎመ ሲሆን፤ 2) lim_{x→c} f(x) ሲኖር፤ እና 3) lim_{x→c} f(x) = f(c) ሲሆን ነው። አንዱ ካልተሟላ ያቋርጣል። የመካከለኛ ዋጋ ቴዎረም (IVT) f በ [a, b] ላይ ቀጣይ ከሆነና k በ f(a) እና f(b) መካከል ካለ f(c) = k የሚሆን ቢያንስ አንድ c ∈ (a, b) አለ ይላል።',
          highlightTerms: [
            { en: 'Continuity', am: 'ቀጣይነት' },
            { en: 'Discontinuity', am: 'ማቋረጥ (ክፍተት)' },
            { en: 'Intermediate Value Theorem', am: 'የመካከለኛ ዋጋ ቴዎረም' }
          ]
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-703-1',
      title: {
        en: 'Core Summary of Limits and Continuity',
        am: 'የወሰኖች እና የቀጣይነት ዋና ማጠቃለያ'
      },
      bullets: [
        {
          en: 'lim_{x→c} f(x) = L iff left-hand and right-hand limits both equal L.',
          am: 'የግራና የቀኝ ወሰኖች ሁለቱም ከ L ጋር እኩል ሲሆኑ ብቻ ወሰኑ L ይሆናል።'
        },
        {
          en: 'Indeterminate forms 0/0 require factoring, conjugation, or algebraic simplification.',
          am: 'የማይወሰኑ ቅጾች 0/0 ማጣራት፣ ማባዛት ወይም ራሽናላይዝ ማድረግን ይሻሉ።'
        },
        {
          en: 'Squeeze Theorem: If g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L.',
          am: 'የስኩዊዝ ቴዎረም፡ g(x) ≤ f(x) ≤ h(x) እና lim g = lim h = L ከሆነ lim f = L ይሆናል።'
        },
        {
          en: 'Continuity requires: defined value, existing limit, and limit equals value.',
          am: 'ቀጣይነት፡ የተተረጎመ ዋጋ፣ የሚኖር ወሰን እና ወሰኑ ከዋጋው ጋር እኩል መሆንን ይጠይቃል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-703-1',
      number: 1,
      question: {
        en: 'What is the fundamental limit lim_{x→0} (sin x)/x, and how is it derived?',
        am: 'መሰረታዊው ወሰን lim_{x→0} (sin x)/x ስንት ነው፣ እና እንዴት ይገኛል?'
      },
      answer: {
        en: 'lim_{x→0} (sin x)/x = 1 (where x is measured in radians). It is proven using the unit circle and the Squeeze Theorem: for 0 < |x| < π/2, cos x < (sin x)/x < 1. Taking the limit as x → 0 from both sides gives 1.',
        am: 'lim_{x→0} (sin x)/x = 1 (x በሬዲያን ሲለካ)። የሚረጋገጠው በዩኒት ክበብ እና በስኩዊዝ ቴዎረም ነው፡ cos x < (sin x)/x < 1 በመሆኑ ወሰኑ 1 ይሆናል።'
      },
      explanation: {
        en: 'This foundational limit is indispensable for deriving the derivative of sin x.',
        am: 'ይህ መሰረታዊ ወሰን የ sin x ን ዲሪቬቲቭ ለማስላት እጅግ ወሳኝ ነው።'
      },
      category: 'conceptual'
    }
  ],
  quizzes: [
    {
      id: 'quiz-703-1',
      question: {
        en: 'What is lim_{x→2} (x² - 4) / (x - 2)?',
        am: 'lim_{x→2} (x² - 4) / (x - 2) ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: '4', am: '4' } },
        { id: 'b', text: { en: '0', am: '0' } },
        { id: 'c', text: { en: 'Undefined', am: 'አይገለጽም' } },
        { id: 'd', text: { en: '2', am: '2' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Direct substitution yields 0/0. Factoring: (x - 2)(x + 2)/(x - 2) = x + 2 for x ≠ 2. As x → 2, 2 + 2 = 4.',
        am: 'ቀጥታ መተካት 0/0 ይሰጣል። በፋክተሪንግ፡ (x - 2)(x + 2)/(x - 2) = x + 2። x → 2 ሲሆን 2 + 2 = 4 ይሆናል።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-703-1',
      termEn: 'Intermediate Value Theorem',
      termAm: 'የመካከለኛ ዋጋ ቴዎረም',
      defEn: 'A continuous function on [a, b] attains every value between f(a) and f(b).',
      defAm: 'በ [a, b] ላይ ቀጣይ የሆነ ፈንክሽን በ f(a) እና f(b) መካከል ያለውን ማንኛውንም እሴት ያገኛል።',
      chapter: 3
    }
  ]
};
