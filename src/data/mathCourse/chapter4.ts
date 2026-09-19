import { Chapter } from '../../types';

export const mathChapter4: Chapter = {
  id: 704,
  number: 4,
  title: {
    en: 'Chapter 4: Derivatives and Applications',
    am: 'ምዕራፍ ፬፡ ዲሪቬቲቭ እና አተገባበሩ (Derivatives & Applications)'
  },
  universityAuthor: 'Tibebe-selassie T/mariam (Addis Ababa University / MoSHE)',
  overview: {
    en: 'Comprehensive differential calculus: Definition of derivative as instantaneous rate of change and tangent slope, differentiability vs continuity, power, product, quotient and chain rules, implicit differentiation, higher-order derivatives, Rolle’s and Mean Value Theorems, monotonicity, concavity, curve sketching, and applied optimization.',
    am: 'የዲፈረንሺያል ካልኩለስ ጥናት፡ የዲሪቬቲቭ ትርጉም እንደ ቅጽበታዊ የለውጥ ምጣኔና የታንጀንት ቁልቁለት፣ ዲፈረንሺያብሊቲና ቀጣይነት፣ የኃይል፣ የብዜት፣ የማካፈል እና የሰንሰለት ህጎች (Chain rule)፣ ስውር ዲፈረንሺዬሽን፣ የሮልስ እና የመካከለኛ ዋጋ ቴዎረሞች (MVT)፣ ማነስና መብለጥ፣ የግራፍ ኩርባ አወሳሰን እና ማመቻቸት (Optimization)።'
  },
  learningOutcomes: [
    {
      en: 'Define the derivative using the limit difference quotient and interpret it geometrically and physically.',
      am: 'ዲሪቬቲቭን በልዩነት ኮሸንት ወሰን መተርጎም እንዲሁም በጂኦሜትሪና በፊዚክስ መተርጎም (ቅጽበታዊ ፍጥነት)።'
    },
    {
      en: 'Master differentiation techniques including the Product Rule, Quotient Rule, Chain Rule, and Implicit Differentiation.',
      am: 'የዲፈረንሺዬሽን ህጎችን (የብዜት፣ የማካፈል፣ የሰንሰለት እና ስውር ዲፈረንሺዬሽን) ጠንቅቆ መተግበር።'
    },
    {
      en: 'Apply Rolle’s Theorem and the Mean Value Theorem (MVT) to establish mathematical properties of functions.',
      am: 'የሮልስ ቴዎረም እና የመካከለኛ ዋጋ ቴዎረምን (MVT) በመጠቀም የፈንክሽን ባህሪያትን ማረጋገጥ።'
    },
    {
      en: 'Use first and second derivatives to determine intervals of increase/decrease, local extrema, concavity, and inflection points.',
      am: 'የመጀመሪያ እና ሁለተኛ ዲሪቬቲቭን በመጠቀም የፈንክሽን ማደግ/መቀነስ፣ ከፍተኛ/ዝቅተኛ ነጥቦችን እና ኩርባዎችን መወሰን።'
    },
    {
      en: 'Formulate and solve real-world optimization problems (maximum profit, minimal cost, optimal design).',
      am: 'ተግባራዊ የማመቻቸት (Optimization) ችግሮችን (ከፍተኛ ትርፍ፣ ዝቅተኛ ወጪ፣ ተመራጭ ንድፍ) መቅረጽና መፍታት።'
    }
  ],
  sections: [
    {
      id: 'math-4-1',
      number: '4.1',
      title: {
        en: '4.1 The Derivative as Instantaneous Rate of Change',
        am: '፬.፩ ዲሪቬቲቭ እንደ ቅጽበታዊ የለውጥ ምጣኔ'
      },
      paragraphs: [
        {
          id: 'math-p4-1',
          en: 'The derivative of f at x is defined by f\'(x) = lim_{h→0} [f(x + h) - f(x)] / h, provided this limit exists. Geometrically, f\'(c) represents the slope of the tangent line to the curve y = f(x) at point (c, f(c)). Physically, if s(t) is position at time t, then v(t) = s\'(t) is instantaneous velocity and a(t) = v\'(t) = s\'\'(t) is acceleration.',
          am: 'የ f ዲሪቬቲቭ በ x ላይ f\'(x) = lim_{h→0} [f(x + h) - f(x)] / h ተብሎ ይተረጎማል፣ ወሰኑ እስካለ ድረስ። በጂኦሜትሪ f\'(c) በነጥብ (c, f(c)) ላይ ያለውን የታንጀንት መስመር ቁልቁለት ይወክላል። በፊዚክስ ደግሞ ቅጽበታዊ ፍጥነትን እና ፍጥንጥነትን ይወክላል።',
          highlightTerms: [
            { en: 'Derivative', am: 'ዲሪቬቲቭ' },
            { en: 'Tangent Line Slope', am: 'የታንጀንት መስመር ቁልቁለት' },
            { en: 'Instantaneous Rate of Change', am: 'ቅጽበታዊ የለውጥ ምጣኔ' }
          ]
        }
      ]
    },
    {
      id: 'math-4-2',
      number: '4.2',
      title: {
        en: '4.2 Rules of Differentiation and the Chain Rule',
        am: '፬.፪ የዲፈረንሺዬሽን ህጎች እና የሰንሰለት ህግ (Chain Rule)'
      },
      paragraphs: [
        {
          id: 'math-p4-2',
          en: 'Key differentiation formulas: Power Rule: d/dx(x^n) = n x^(n-1); Product Rule: (fg)\' = f\'g + fg\'; Quotient Rule: (f/g)\' = (f\'g - fg\') / g²; Chain Rule: If y = f(u) and u = g(x), then dy/dx = (dy/du) · (du/dx). Furthermore, d/dx(e^x) = e^x, d/dx(ln x) = 1/x, d/dx(sin x) = cos x, and d/dx(cos x) = -sin x.',
          am: 'ዋና ዋና ቀመሮች፡ የኃይል ህግ፡ d/dx(x^n) = n x^(n-1)፤ የብዜት ህግ፡ (fg)\' = f\'g + fg\'፤ የማካፈል ህግ፡ (f/g)\' = (f\'g - fg\') / g²፤ የሰንሰለት ህግ (Chain Rule)፡ dy/dx = (dy/du) · (du/dx)። እንዲሁም d/dx(e^x) = e^x፣ d/dx(ln x) = 1/x፣ d/dx(sin x) = cos x ናቸው።',
          highlightTerms: [
            { en: 'Product Rule', am: 'የብዜት ህግ' },
            { en: 'Quotient Rule', am: 'የማካፈል ህግ' },
            { en: 'Chain Rule', am: 'የሰንሰለት ህግ' }
          ]
        }
      ]
    },
    {
      id: 'math-4-3',
      number: '4.3',
      title: {
        en: '4.3 Mean Value Theorem and Curve Sketching',
        am: '፬.፫ የመካከለኛ ዋጋ ቴዎረም እና የግራፍ ኩርባዎች'
      },
      paragraphs: [
        {
          id: 'math-p4-3',
          en: 'The Mean Value Theorem (MVT) guarantees that if f is continuous on [a, b] and differentiable on (a, b), then there is at least one c ∈ (a, b) where f\'(c) = [f(b) - f(a)] / (b - a). If f\'(x) > 0 on an interval, f is strictly increasing; if f\'(x) < 0, f is strictly decreasing. Critical points occur where f\'(x) = 0 or does not exist. The sign of f\'\'(x) determines concavity (f\'\' > 0 concave up; f\'\' < 0 concave down).',
          am: 'የመካከለኛ ዋጋ ቴዎረም (MVT) f በ [a, b] ላይ ቀጣይና በ (a, b) ላይ ዲፈረንሺየብል ከሆነ f\'(c) = [f(b) - f(a)] / (b - a) የሚሆን c ∈ (a, b) አለ ይላል። f\'(x) > 0 ከሆነ ፈንክሽኑ ይጨምራል፤ f\'(x) < 0 ከሆነ ይቀንሳል። f\'\'(x) > 0 ወደ ላይ ክፍት ሲሆን f\'\'(x) < 0 ወደ ታች ክፍት (Concave down) ይሆናል።',
          highlightTerms: [
            { en: 'Mean Value Theorem', am: 'የመካከለኛ ዋጋ ቴዎረም' },
            { en: 'Critical Point', am: 'ወሳኝ ነጥብ' },
            { en: 'Concavity', am: 'ኮንካቪቲ (ኩርባነት)' }
          ]
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-704-1',
      title: {
        en: 'Core Summary of Differential Calculus',
        am: 'የዲፈረንሺያል ካልኩለስ ዋና ማጠቃለያ'
      },
      bullets: [
        {
          en: 'Differentiability implies continuity, but the converse is not true (e.g., |x| at x = 0).',
          am: 'ዲፈረንሺያብሊቲ ቀጣይነትን ያረጋግጣል፣ ነገር ግን ተቃራኒው ሁልጊዜ እውነት አይደለም (|x| በ x = 0 ላይ)።'
        },
        {
          en: 'Chain Rule enables differentiation of composite functions: d/dx[f(g(x))] = f\'(g(x)) g\'(x).',
          am: 'የሰንሰለት ህግ ውሁድ ፈንክሽኖችን ለማስላት ያስችላል፡ d/dx[f(g(x))] = f\'(g(x)) g\'(x)።'
        },
        {
          en: 'First derivative test finds local extrema; second derivative test determines concavity and inflection points.',
          am: 'የመጀመሪያ ዲሪቬቲቭ ከፍተኛ/ዝቅተኛ ነጥቦችን ሲለይ ሁለተኛ ዲሪቬቲቭ ኮንካቪቲን ይወስናል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-704-1',
      number: 1,
      question: {
        en: 'Does continuity at a point guarantee differentiability at that point?',
        am: 'በአንድ ነጥብ ላይ ቀጣይ መሆን በዚያ ነጥብ ላይ ዲፈረንሺየብል መሆንን ያረጋግጣል?'
      },
      answer: {
        en: 'No, continuity does not guarantee differentiability. A classic counterexample is f(x) = |x| at x = 0: f is continuous everywhere, but at x = 0 the left-hand derivative is -1 while the right-hand derivative is +1, so the derivative does not exist (a sharp corner).',
        am: 'አያረጋግጥም። ቁልፍ ምሳሌ f(x) = |x| በ x = 0 ላይ ነው፡ በሁሉም ቦታ ቀጣይ ቢሆንም በ x = 0 ላይ የግራ ዲሪቬቲቭ -1 እና የቀኝ ዲሪቬቲቭ +1 ስለሆነ ዲሪቬቲቭ የለውም (ሹል ማዕዘን ስላለው)።'
      },
      explanation: {
        en: 'Every differentiable function is continuous, but not every continuous function is differentiable.',
        am: 'ማንኛውም ዲፈረንሺየብል የሆነ ፈንክሽን ቀጣይ ነው፤ ነገር ግን ማንኛውም ቀጣይ የሆነ ፈንክሽን ዲፈረንሺየብል አይደለም።'
      },
      category: 'conceptual'
    }
  ],
  quizzes: [
    {
      id: 'quiz-704-1',
      question: {
        en: 'What is the derivative of f(x) = 3x⁴ - 5x² + 7?',
        am: 'የ f(x) = 3x⁴ - 5x² + 7 ዲሪቬቲቭ ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: 'f\'(x) = 12x³ - 10x', am: 'f\'(x) = 12x³ - 10x' } },
        { id: 'b', text: { en: 'f\'(x) = 12x³ - 10x + 7', am: 'f\'(x) = 12x³ - 10x + 7' } },
        { id: 'c', text: { en: 'f\'(x) = 4x³ - 2x', am: 'f\'(x) = 4x³ - 2x' } },
        { id: 'd', text: { en: 'f\'(x) = 12x⁴ - 10x²', am: 'f\'(x) = 12x⁴ - 10x²' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Applying the Power Rule: d/dx(3x⁴) = 12x³, d/dx(-5x²) = -10x, and d/dx(7) = 0. Hence f\'(x) = 12x³ - 10x.',
        am: 'በኃይል ህግ መሰረት፡ d/dx(3x⁴) = 12x³፣ d/dx(-5x²) = -10x፣ እና d/dx(7) = 0። ስለዚህ f\'(x) = 12x³ - 10x ነው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-704-1',
      termEn: 'Mean Value Theorem (MVT)',
      termAm: 'የመካከለኛ ዋጋ ቴዎረም (MVT)',
      defEn: 'Guarantees that at some point between a and b, the instantaneous rate equals the average rate of change.',
      defAm: 'በ a እና b መካከል ባለ ነጥብ ላይ ቅጽበታዊ የለውጥ ምጣኔ ከአማካይ የለውጥ ምጣኔ ጋር እኩል እንደሚሆን ያረጋግጣል።',
      chapter: 4
    }
  ]
};
