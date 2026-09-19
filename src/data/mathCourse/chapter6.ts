import { Chapter } from '../../types';

export const mathChapter6: Chapter = {
  id: 706,
  number: 6,
  title: {
    en: 'Chapter 6: Sequences and Series',
    am: 'ምዕራፍ ፮፡ ቅደም-ተከተሎች እና ድምሮች (Sequences & Series)'
  },
  universityAuthor: 'Tibebe-selassie T/mariam (Addis Ababa University / MoSHE)',
  overview: {
    en: 'In-depth analysis of infinite processes: Sequences and their limits, bounded and monotonic sequences, infinite series and sequence of partial sums, geometric series, telescoping series, the Divergence Test, Integral Test, p-series test, Direct and Limit Comparison Tests, Alternating Series Test (Leibniz’s Rule), and Ratio and Root Tests.',
    am: 'የወሰን-አልባ ሂደቶች ጥናት፡ ቅደም-ተከተሎች እና ወሰኖቻቸው፣ የተገደቡ እና ሞኖቶኒክ ቅደም-ተከተሎች፣ ወሰን-አልባ ድምሮች (Series) እና የከፊል ድምሮች ቅደም-ተከተል፣ የጂኦሜትሪክ ድምር፣ ቴሌስኮፒንግ ድምር፣ የመለያየት መፈተሻ (Divergence test)፣ የኢንተግራል መፈተሻ፣ የp-ድምር መፈተሻ፣ የቀጥታና የወሰን ንጽጽር መፈተሻዎች፣ የተለዋዋጭ ምልክት ድምሮች (Leibniz test) እና የንጽጽር ምጣኔና ስር መፈተሻዎች (Ratio & Root Tests)።'
  },
  learningOutcomes: [
    {
      en: 'Determine the convergence or divergence of infinite sequences {a_n} using limit laws and the Squeeze Theorem.',
      am: 'የቅደም-ተከተሎችን {a_n} መሰብሰብ (Convergence) ወይም መበተን (Divergence) በወሰን ህጎች መወሰን።'
    },
    {
      en: 'Apply the Monotone Convergence Theorem to establish convergence of bounded monotonic sequences.',
      am: 'የተገደቡና ሞኖቶኒክ የሆኑ ቅደም-ተከተሎችን መሰብሰብ በሞኖቶን ቴዎረም ማረጋገጥ።'
    },
    {
      en: 'Calculate the sum of convergent geometric series (S = a / (1 - r) for |r| < 1) and telescoping series.',
      am: 'የጂኦሜትሪክ ድምርን (S = a / (1 - r) ለ |r| < 1) እና የቴሌስኮፒንግ ድምርን ውጤት ማስላት።'
    },
    {
      en: 'Execute convergence tests for non-negative series: Divergence Test, Integral Test, p-Series, and Comparison Tests.',
      am: 'አሉታዊ ያልሆኑ ድምሮችን በመለያየት፣ በኢንተግራል፣ በp-ድምር እና በንጽጽር መፈተሻዎች መገምገም።'
    },
    {
      en: 'Distinguish between absolute and conditional convergence using the Alternating Series Test and the Ratio/Root Tests.',
      am: 'ፍጹም (Absolute) እና ቅድመ-ሁኔታዊ (Conditional) መሰብሰብን በተለዋዋጭ ድምር፣ በሬሾ እና በሩት መፈተሻዎች መለየት።'
    }
  ],
  sections: [
    {
      id: 'math-6-1',
      number: '6.1',
      title: {
        en: '6.1 Sequences and Convergence Limits',
        am: '፮.፩ ቅደም-ተከተሎች እና የመሰብሰብ ወሰኖች'
      },
      paragraphs: [
        {
          id: 'math-p6-1',
          en: 'A sequence is a function f: ℕ → ℝ, denoted {a_n}_{n=1}^∞ = {a₁, a₂, a₃, ...}. A sequence converges to L, lim_{n→∞} a_n = L, if for every ε > 0 there exists an integer N such that for all n > N, |a_n - L| < ε. If no such finite limit exists, the sequence diverges. The Monotone Convergence Theorem states that every bounded, monotonic sequence converges.',
          am: 'ቅደም-ተከተል (Sequence) ከሙሉ አዎንታዊ ቁጥሮች ℕ ወደ እውነተኛ ቁጥሮች ℝ የሚሄድ ፈንክሽን ነው፡ {a_n}። አንድ ቅደም-ተከተል ወደ L ይሰበሰባል (Converges) የሚባለው n ወደ ወሰን-አልባ ሲያመራ a_n ወደ L ሲጠጋ ነው። ወሰን ከሌለው ይበተናል (Diverges)። ማንኛውም የተገደበና ሞኖቶኒክ የሆነ ቅደም-ተከተል ይሰበሰባል።',
          highlightTerms: [
            { en: 'Sequence', am: 'ቅደም-ተከተል' },
            { en: 'Convergence', am: 'መሰብሰብ (ኮንቨርጀንስ)' },
            { en: 'Monotone Convergence Theorem', am: 'የሞኖቶን መሰብሰብ ቴዎረም' }
          ]
        }
      ]
    },
    {
      id: 'math-6-2',
      number: '6.2',
      title: {
        en: '6.2 Infinite Series and Partial Sums',
        am: '፮.፪ ወሰን-አልባ ድምሮች እና የከፊል ድምሮች ቅደም-ተከተል'
      },
      paragraphs: [
        {
          id: 'math-p6-2',
          en: 'An infinite series is the sum of terms of a sequence: ∑_{n=1}^∞ a_n. The n-th partial sum is s_n = ∑_{k=1}^n a_k. The series converges to S if lim_{n→∞} s_n = S. The geometric series ∑_{n=0}^∞ a r^n converges to S = a / (1 - r) if and only if |r| < 1; if |r| ≥ 1, it diverges. The Divergence Test states: If lim_{n→∞} a_n ≠ 0 (or does not exist), then ∑ a_n diverges.',
          am: 'ወሰን-አልባ ድምር (Infinite Series) ማለት የቅደም-ተከተል አባላት ድምር ነው፡ ∑ a_n። የከፊል ድምር s_n = a₁ + ... + a_n ሲሆን s_n ወደ S ሲጠጋ ድምሩ ይሰበሰባል እንላለን። የጂኦሜትሪክ ድምር ለ |r| < 1 ብቻ ይሰበሰባል (S = a / (1 - r))፤ |r| ≥ 1 ሲሆን ይበተናል። የመለያየት መፈተሻ፡ lim a_n ≠ 0 ከሆነ ድምሩ የግድ ይበተናል።',
          highlightTerms: [
            { en: 'Infinite Series', am: 'ወሰን-አልባ ድምር' },
            { en: 'Partial Sums', am: 'የከፊል ድምሮች' },
            { en: 'Geometric Series', am: 'የጂኦሜትሪክ ድምር' },
            { en: 'Divergence Test', am: 'የመለያየት መፈተሻ' }
          ]
        }
      ]
    },
    {
      id: 'math-6-3',
      number: '6.3',
      title: {
        en: '6.3 Tests for Convergence and Absolute Convergence',
        am: '፮.፫ የመሰብሰብ መፈተሻዎች እና ፍጹም መሰብሰብ'
      },
      paragraphs: [
        {
          id: 'math-p6-3',
          en: 'p-Series Test: ∑ 1/n^p converges if p > 1, and diverges if p ≤ 1 (e.g., the Harmonic series ∑ 1/n diverges). Alternating Series Test: ∑ (-1)^(n-1) b_n converges if b_{n+1} ≤ b_n and lim b_n = 0. Ratio Test: Let L = lim_{n→∞} |a_{n+1} / a_n|. If L < 1, the series converges absolutely; if L > 1, it diverges; if L = 1, the test is inconclusive. A series converges absolutely if ∑ |a_n| converges.',
          am: 'የ p-ድምር መፈተሻ፡ ∑ 1/n^p ለ p > 1 ይሰበሰባል፣ ለ p ≤ 1 ይበተናል (ለምሳሌ ሃርሞኒክ ድምር ∑ 1/n ይበተናል)። የተለዋዋጭ ምልክት መፈተሻ፡ b_{n+1} ≤ b_n እና lim b_n = 0 ከሆነ ይሰበሰባል። የሬሾ መፈተሻ፡ L = lim |a_{n+1} / a_n| ሲሆን L < 1 ፍጹም ይሰበሰባል፣ L > 1 ይበተናል፣ L = 1 አይወስንም።',
          highlightTerms: [
            { en: 'p-Series Test', am: 'የ p-ድምር መፈተሻ' },
            { en: 'Alternating Series Test', am: 'የተለዋዋጭ ምልክት መፈተሻ' },
            { en: 'Ratio Test', am: 'የሬሾ መፈተሻ' },
            { en: 'Absolute Convergence', am: 'ፍጹም መሰብሰብ' }
          ]
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-706-1',
      title: {
        en: 'Core Summary of Sequences and Series',
        am: 'የቅደም-ተከተሎች እና ድምሮች ዋና ማጠቃለያ'
      },
      bullets: [
        {
          en: 'A sequence is an ordered list; a series is the sum of a sequence.',
          am: 'ቅደም-ተከተል የተደረደረ ዝርዝር ሲሆን ድምር ደግሞ የቅደም-ተከተሉ አባላት ድምር ነው።'
        },
        {
          en: 'Geometric series converges to a / (1 - r) if and only if |r| < 1.',
          am: 'የጂኦሜትሪክ ድምር የሚሰበሰበው |r| < 1 ሲሆን ብቻ ነው።'
        },
        {
          en: 'Divergence test: If lim a_n ≠ 0, the series diverges; if lim a_n = 0, no conclusion can be made.',
          am: 'የመለያየት መፈተሻ፡ lim a_n ≠ 0 ከሆነ ይበተናል፤ lim a_n = 0 ከሆነ ግን ሌላ መፈተሻ ያስፈልጋል።'
        },
        {
          en: 'The harmonic series ∑ 1/n diverges despite terms approaching 0.',
          am: 'የሃርሞኒክ ድምር ∑ 1/n አባላቱ ወደ 0 ቢጠጉም እንኳ ይበተናል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-706-1',
      number: 1,
      question: {
        en: 'If lim_{n→∞} a_n = 0, does the infinite series ∑ a_n necessarily converge?',
        am: 'lim_{n→∞} a_n = 0 ከሆነ ወሰን-አልባ ድምሩ ∑ a_n የግድ ይሰበሰባል?'
      },
      answer: {
        en: 'No. The condition lim_{n→∞} a_n = 0 is a necessary condition for convergence, but not a sufficient condition. The foremost counterexample is the Harmonic Series ∑_{n=1}^∞ 1/n, where terms 1/n approach 0, yet the series diverges to infinity.',
        am: 'አይሰበሰብም። lim a_n = 0 መሆን ለመሰብሰብ አስፈላጊ ቅድመ-ሁኔታ እንጂ በቂ አይደለም። ዋነኛው ተቃራኒ ምሳሌ የሃርሞኒክ ድምር ∑ 1/n ነው፤ 1/n ወደ 0 ቢጠጋም ድምሩ ግን ወደ ወሰን-አልባ ይበተናል።'
      },
      explanation: {
        en: 'The Divergence Test only concludes divergence if lim a_n ≠ 0; it can never prove convergence.',
        am: 'የመለያየት መፈተሻ lim a_n ≠ 0 ከሆነ መበተኑን ብቻ ይወስናል፤ ፈጽሞ መሰብሰብን ሊያረጋግጥ አይችልም።'
      },
      category: 'conceptual'
    }
  ],
  quizzes: [
    {
      id: 'quiz-706-1',
      question: {
        en: 'What is the sum of the infinite geometric series 4 + 2 + 1 + 1/2 + 1/4 + ...?',
        am: 'የወሰን-አልባ ጂኦሜትሪክ ድምር 4 + 2 + 1 + 1/2 + 1/4 + ... ድምር ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: '8', am: '8' } },
        { id: 'b', text: { en: '6', am: '6' } },
        { id: 'c', text: { en: '7.5', am: '7.5' } },
        { id: 'd', text: { en: 'Diverges', am: 'ይበተናል' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'First term a = 4, common ratio r = 2/4 = 1/2. Since |r| = 1/2 < 1, the series converges: S = a / (1 - r) = 4 / (1 - 1/2) = 4 / 0.5 = 8.',
        am: 'የመጀመሪያ አባል a = 4፣ የጋራ ሬሾ r = 1/2 ነው። |r| < 1 ስለሆነ ድምሩ ይሰበሰባል፡ S = 4 / (1 - 1/2) = 8።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-706-1',
      termEn: 'Harmonic Series',
      termAm: 'ሃርሞኒክ ድምር',
      defEn: 'The divergent infinite series ∑ 1/n whose terms decrease to zero.',
      defAm: 'አባላቱ ወደ ዜሮ እየቀነሱ የሚሄዱ ነገር ግን ድምሩ የሚበተን ድምር ∑ 1/n።',
      chapter: 6
    }
  ]
};
