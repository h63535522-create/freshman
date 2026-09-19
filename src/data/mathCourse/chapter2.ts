import { Chapter } from '../../types';

export const mathChapter2: Chapter = {
  id: 702,
  number: 2,
  title: {
    en: 'Chapter 2: Matrices and Systems of Linear Equations',
    am: 'ምዕራፍ ፪፡ ማትሪክስ እና የመስመራዊ እኩልታዎች ስርአት'
  },
  universityAuthor: 'Tibebe-selassie T/mariam (Addis Ababa University / MoSHE)',
  overview: {
    en: 'Matrix definitions, special matrices, matrix algebra, elementary row operations, row echelon forms (REF and RREF), matrix rank, determinants, matrix inverses, and systematic solution methods (Gaussian Elimination, Gauss-Jordan, and Cramer’s Rule).',
    am: 'የማትሪክስ ምንነት፣ ልዩ ማትሪክሶች፣ አልጀብራ፣ የረድፍ ስራዎች (Elementary Row Operations)፣ የኤቼሎን ቅጾች (REF እና RREF)፣ የማትሪክስ ደረጃ (Rank)፣ ዲተርሚናንት፣ ግልባጭ ማትሪክስ (Inverse)፣ እና የመስመራዊ እኩልታዎች መፍትሔ ስልቶች (የጋውስ ማጣሪያ፣ ጋውስ-ጆርዳን እና የክሬመርስ ህግ)።'
  },
  learningOutcomes: [
    {
      en: 'Classify matrices (square, diagonal, symmetric, skew-symmetric, orthogonal) and compute transposes and traces.',
      am: 'ማትሪክሶችን መመደብ (ስኩዌር፣ ዳያጎናል፣ ሲሜትሪክ፣ ኦርቶጎናል) እንዲሁም ትራንስፖዝ እና ትሬስ ማስላት።'
    },
    {
      en: 'Perform matrix addition, scalar multiplication, and matrix multiplication adhering to dimension compatibility.',
      am: 'የማትሪክስ መደመር፣ በእስካላር ማባዛት እና የማትሪክስ ብዜትን በልኬት ህግ መሰረት ማከናወን።'
    },
    {
      en: 'Transform augmented matrices to REF and RREF using elementary row operations to determine system consistency.',
      am: 'የተጨመረ ማትሪክስን ወደ REF እና RREF በመቀየር የስርአቱን መፍትሔ ሁኔታ (አንድ፣ ወሰን-አልባ፣ ወይም መፍትሔ የሌለው) መወሰን።'
    },
    {
      en: 'Evaluate determinants using cofactor expansion and determinant row properties.',
      am: 'ዲተርሚናንትን በኮፋክተር መስፋፋት እና በረድፍ ባህሪያት ማስላት።'
    },
    {
      en: 'Calculate matrix inverses via the Gauss-Jordan method and the adjoint formula, and solve systems using Cramer’s Rule.',
      am: 'የማትሪክስ ግልባጭን (Inverse) በጋውስ-ጆርዳን እና በአድጆይንት ቀመር ማስላት እንዲሁም በክሬመርስ ህግ መፍትሔ መፈለግ።'
    }
  ],
  sections: [
    {
      id: 'math-2-1',
      number: '2.1',
      title: {
        en: '2.1 Definition of Matrices and Matrix Types',
        am: '፪.፩ የማትሪክስ ምንነት እና አይነቶች'
      },
      paragraphs: [
        {
          id: 'math-p2-1',
          en: 'An m × n matrix is a rectangular array of numbers arranged into m horizontal rows and n vertical columns: A = [a_ij]. When m = n, it is called a square matrix. Notable types include: Zero matrix (all entries zero), Identity matrix I_n (1s along main diagonal, 0s elsewhere), Diagonal matrix, Upper/Lower Triangular matrices, Symmetric matrix (Aᵀ = A), and Skew-symmetric matrix (Aᵀ = -A).',
          am: 'm × n ማትሪክስ በ m አግድም ረድፎች እና በ n ቀጥታ አምዶች የተደረደሩ ቁጥሮች ስብስብ ነው፡ A = [a_ij]። m = n ሲሆን ስኩዌር ማትሪክስ ይባላል። ዋና ዋና አይነቶች፡ ዜሮ ማትሪክስ፣ መታወቂያ ማትሪክስ (Identity matrix I_n)፣ ዳያጎናል፣ ትሪያንጉላር፣ ሲሜትሪክ (Aᵀ = A) እና ስኪው-ሲሜትሪክ (Aᵀ = -A) ናቸው።',
          highlightTerms: [
            { en: 'Matrix Dimension', am: 'የማትሪክስ ልኬት' },
            { en: 'Identity Matrix', am: 'መታወቂያ ማትሪክስ' },
            { en: 'Symmetric Matrix', am: 'ሲሜትሪክ ማትሪክስ' }
          ]
        }
      ]
    },
    {
      id: 'math-2-2',
      number: '2.2',
      title: {
        en: '2.2 Matrix Algebra: Addition, Multiplication and Transpose',
        am: '፪.፪ ማትሪክስ አልጀብራ፡ መደመር፣ ማባዛት እና ትራንስፖዝ'
      },
      paragraphs: [
        {
          id: 'math-p2-2',
          en: 'Two matrices can be added or subtracted if and only if they have the same dimensions. Matrix multiplication AB is defined if and only if the number of columns in A equals the number of rows in B: if A is m × k and B is k × n, then AB is m × n with (AB)_ij = ∑_{r=1}^k a_ir b_rj. Matrix multiplication is associative (A(BC) = (AB)C) and distributive, but generally non-commutative (AB ≠ BA).',
          am: 'ሁለት ማትሪክሶች ሊደመሩ የሚችሉት እኩል ልኬት ሲኖራቸው ብቻ ነው። የማትሪክስ ብዜት AB የሚሰላው የ A አምዶች ብዛት ከ B ረድፎች ጋር እኩል ሲሆን ብቻ ነው፡ A የ m × k እና B የ k × n ሲሆኑ AB የ m × n ይሆናል። የማትሪክስ ብዜት የማጣመርና የማከፋፈል ባህሪ ቢኖረውም የመቀያየር ባህሪ ግን የለውም (AB ≠ BA)።',
          highlightTerms: [
            { en: 'Matrix Multiplication', am: 'የማትሪክስ ማባዛት' },
            { en: 'Non-Commutative', am: 'የማይቀያየር (AB ≠ BA)' }
          ]
        }
      ]
    },
    {
      id: 'math-2-3',
      number: '2.3',
      title: {
        en: '2.3 Systems of Linear Equations and Row Echelon Forms',
        am: '፪.፫ የመስመራዊ እኩልታዎች እና የረድፍ ኤቼሎን ቅጾች'
      },
      paragraphs: [
        {
          id: 'math-p2-3',
          en: 'A system of m linear equations in n variables can be written in matrix form AX = B. By writing the augmented matrix [A | B], elementary row operations (swapping rows, multiplying a row by a non-zero constant, adding a multiple of one row to another) reduce the matrix to Row Echelon Form (REF) or Reduced Row Echelon Form (RREF). A system is consistent if and only if rank(A) = rank([A | B]). If consistent and rank = n, there is a unique solution; if rank < n, infinitely many solutions exist.',
          am: 'የመስመራዊ እኩልታዎች ስርአት በማትሪክስ ቅጽ AX = B ይጻፋል። የተጨመረውን ማትሪክስ [A | B] በመጠቀም በመሰረታዊ የረድፍ ስራዎች ወደ REF ወይም RREF ይቀየራል። ስርአቱ መፍትሔ የሚኖረው (Consistent) rank(A) = rank([A | B]) ሲሆን ብቻ ነው። rank = n ሲሆን አንድ መፍትሔ ብቻ ሲኖረው፣ rank < n ሲሆን ወሰን-አልባ መፍትሔዎች አሉት።',
          highlightTerms: [
            { en: 'Row Echelon Form (REF)', am: 'የረድፍ ኤቼሎን ቅጽ' },
            { en: 'Matrix Rank', am: 'የማትሪክስ ደረጃ (Rank)' },
            { en: 'System Consistency', am: 'የስርአቱ መፍትሔ መኖር' }
          ]
        }
      ]
    },
    {
      id: 'math-2-4',
      number: '2.4',
      title: {
        en: '2.4 Determinants, Inverses and Cramer’s Rule',
        am: '፪.፬ ዲተርሚናንት፣ ግልባጭ ማትሪክስ እና የክሬመርስ ህግ'
      },
      paragraphs: [
        {
          id: 'math-p2-4',
          en: 'The determinant det(A) is a scalar assigned to square matrices. A is invertible (non-singular) if and only if det(A) ≠ 0. The inverse matrix is given by A⁻¹ = (1/det(A)) adj(A), where adj(A) is the transpose of the cofactor matrix. Cramer’s Rule provides explicit solutions for square invertible systems: x_i = det(A_i) / det(A), where A_i replaces the i-th column of A with the constant column B.',
          am: 'ዲተርሚናንት ለስኩዌር ማትሪክስ የሚሰጥ የእስካላር እሴት ነው። ማትሪክስ A ግልባጭ (Inverse) የሚኖረው det(A) ≠ 0 ሲሆን ብቻ ነው። A⁻¹ = (1/det(A)) adj(A) ነው። የክሬመርስ ህግ ደግሞ መፍትሔውን በቀጥታ x_i = det(A_i) / det(A) በማድረግ ያሰላል።',
          highlightTerms: [
            { en: 'Determinant', am: 'ዲተርሚናንት' },
            { en: 'Matrix Inverse', am: 'ግልባጭ ማትሪክስ' },
            { en: 'Cramer\'s Rule', am: 'የክሬመርስ ህግ' }
          ]
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-702-1',
      title: {
        en: 'Core Summary of Matrices and Linear Systems',
        am: 'የማትሪክስ እና የመስመራዊ እኩልታዎች ዋና ማጠቃለያ'
      },
      bullets: [
        {
          en: 'Matrix multiplication is defined only when inner dimensions match, and AB ≠ BA in general.',
          am: 'የማትሪክስ ብዜት የሚሰላው የውስጥ ልኬቶች እኩል ሲሆኑ ብቻ ሲሆን በአጠቃላይ AB ≠ BA ነው።'
        },
        {
          en: 'Elementary row operations preserve the solution set of linear systems.',
          am: 'መሰረታዊ የረድፍ ስራዎች የመስመራዊ እኩልታዎችን መፍትሔ ሳይቀይሩ ያቆዩታል።'
        },
        {
          en: 'A linear system has: 1) a unique solution, 2) infinitely many solutions, or 3) no solution (inconsistent).',
          am: 'አንድ የመስመራዊ ስርአት፡ 1) አንድ መፍትሔ፣ 2) ወሰን-አልባ መፍትሔ፣ ወይም 3) ምንም መፍትሔ የሌለው ሊሆን ይችላል።'
        },
        {
          en: 'A square matrix A is invertible iff det(A) ≠ 0 iff rank(A) = n iff RREF(A) = I_n.',
          am: 'ስኩዌር ማትሪክስ ግልባጭ የሚኖረው det(A) ≠ 0 ሲሆን፣ ወይም rank(A) = n፣ ወይም RREF(A) = I_n ሲሆን ነው።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-702-1',
      number: 1,
      question: {
        en: 'When is a square matrix A guaranteed to be invertible?',
        am: 'አንድ ስኩዌር ማትሪክስ A ግልባጭ (Inverse) እንደሚኖረው መቼ በእርግጠኝነት ማወቅ ይቻላል?'
      },
      answer: {
        en: 'A square matrix A of size n × n is invertible (non-singular) if and only if any of the following equivalent conditions hold: 1) det(A) ≠ 0; 2) rank(A) = n; 3) The reduced row echelon form of A is the identity matrix I_n; 4) The homogeneous system AX = 0 has only the trivial solution X = 0.',
        am: 'አንድ n × n ስኩዌር ማትሪክስ A ግልባጭ የሚኖረው፡ 1) det(A) ≠ 0 ሲሆን፤ 2) rank(A) = n ሲሆን፤ 3) RREF ቅጹ መታወቂያ ማትሪክስ I_n ሲሆን፤ 4) AX = 0 የዜሮ መፍትሔ ብቻ ሲኖረው ነው።'
      },
      explanation: {
        en: 'By the Invertible Matrix Theorem, all these statements are mathematically equivalent.',
        am: 'በግልባጭ ማትሪክስ ቴዎረም መሰረት እነዚህ ሁሉ ሁኔታዎች እኩልና ተዛማጅ ናቸው።'
      },
      category: 'conceptual'
    }
  ],
  quizzes: [
    {
      id: 'quiz-702-1',
      question: {
        en: 'What is the determinant of the 2×2 matrix A = [[3, 2], [1, 4]]?',
        am: 'የ 2×2 ማትሪክስ A = [[3, 2], [1, 4]] ዲተርሚናንት ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: 'det(A) = 10', am: 'det(A) = 10' } },
        { id: 'b', text: { en: 'det(A) = 14', am: 'det(A) = 14' } },
        { id: 'c', text: { en: 'det(A) = 2', am: 'det(A) = 2' } },
        { id: 'd', text: { en: 'det(A) = -10', am: 'det(A) = -10' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'For a 2×2 matrix [[a, b], [c, d]], det(A) = ad - bc = (3)(4) - (2)(1) = 12 - 2 = 10.',
        am: 'ለ 2×2 ማትሪክስ det(A) = ad - bc = (3)(4) - (2)(1) = 12 - 2 = 10 ነው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-702-1',
      termEn: 'Reduced Row Echelon Form (RREF)',
      termAm: 'የተቀነሰ የረድፍ ኤቼሎን ቅጽ (RREF)',
      defEn: 'A matrix form where every leading coefficient is 1 and is the only non-zero entry in its column.',
      defAm: 'እያንዳንዱ መሪ ቁጥር 1 የሆነበት እና በአምዱ ውስጥ ከእሱ ውጪ ሌሎቹ በሙሉ ዜሮ የሆኑበት የማትሪክስ ቅጽ።',
      chapter: 2
    }
  ]
};
