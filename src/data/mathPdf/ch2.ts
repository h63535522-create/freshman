import { OfficialPdfPage } from './types';

export const mathCh2Pages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 23,
    bookPageLabel: 'Page 23',
    chapterNumber: 2,
    sectionRef: '2.1',
    titleEn: 'Chapter 2: Matrices, Determinants and Systems of Linear Equations — 2.1 Matrix Definitions',
    titleAm: 'ምዕራፍ 2፡ ማትሪክሶች፣ ዲተርሚናንቶች እና የሊኒየር እኩልታዎች ስርአት — 2.1 የማትሪክስ ትርጓሜ',
    subtopicEn: 'Definition of Matrix, Rectangular Array m × n, Entries, Matrix Equality, Row and Column Vectors',
    subtopicAm: 'የማትሪክስ ምንነት፣ የረድፍና አምድ መጠን m × n፣ አባላት፣ የእኩል ማትሪክሶች ትርጓሜ፣ የረድፍና አምድ ቬክተሮች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Matrices, Determinants and Systems of Linear Equations

2.1. Definition of matrix and basic operations
Definition: Let m and n be in ℕ. A rectangular array of numbers in ℝ:
A = [ a₁₁  a₁₂  ···  a₁ₙ ]
    [ a₂₁  a₂₂  ···  a₂ₙ ]
    [  ⋮    ⋮    ⋱    ⋮  ]
    [ aₘ₁  aₘ₂  ···  aₘₙ ]
is called an m × n matrix in ℝ.

Remark: The numbers in the matrix are called the entries of the matrix.

Note:
1. A is an m × n matrix if A has m rows (horizontals) and n columns (verticals).
2. aᵢⱼ is the element that appears in the i-th row and in the j-th column.
3. A = (aᵢⱼ)ₘ×ₙ is an m × n matrix.
4. m × n is called the size of the matrix.

Example 1: Consider A = [ -1  3   8 ]
                        [  2  7  11 ]
The size of this matrix is 2 × 3. a₁₁ = -1, a₂₂ = 7, and a₁₃ = 8.

Definition: Two matrices A = (aᵢⱼ)ₘ×ₙ and B = (bᵢⱼ)ₘ×ₙ are equal, written as A = B, iff their corresponding elements are equal (aᵢⱼ = bᵢⱼ for all i, j).

Example 2: Consider A = [ -1  3   8 ] and B = [ -1  4   8 ]
                        [  2  7  11 ]         [  2  7  11 ]
Since a₁₂ = 3 ≠ 4 = b₁₂, we can say that A ≠ B.

Definition: A 1 × n matrix is called a row vector (row matrix) and an m × 1 matrix is called a column vector (column matrix).
Example 3: [ 1 ]
           [ 4 ] is a 3 × 1 column matrix.
           [ 7 ]
Example 4: [ 3  -9  0 ] is a 1 × 3 row matrix.`,
    contentAm: `አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ (AASTU)
የሂሳብ ትምህርት ክፍል
ምዕራፍ 2፡ ማትሪክሶች፣ ዲተርሚናንቶች እና የሊኒየር እኩልታዎች ስርአት

2.1. የማትሪክስ ትርጓሜ እና መሰረታዊ ስሌቶች
ትርጓሜ፡ m እና n የቆጣሪ ቁጥሮች ቢሆኑ፣ በ ℝ ውስጥ ያሉ ቁጥሮች አራት ማዕዘናዊ ሰንጠረዥ ማትሪክስ (Matrix) ይባላል።
ማስታወሻ፡ በሰንጠረዡ ውስጥ ያሉት ቁጥሮች የማትሪክሱ አባላት (Entries) ይባላሉ።
1. ማትሪክሱ m አግድም ረድፎች (Rows) እና n ቋሚ አምዶች (Columns) ሲኖሩት m × n ማትሪክስ ይባላል።
2. aᵢⱼ በ i-ኛ ረድፍ እና በ j-ኛ አምድ ላይ የሚገኘውን አባል ይወክላል።
3. m × n የማትሪክሱ መጠን (Size) ይባላል።

የማትሪክሶች እኩልነት (Matrix Equality)፡
ሁለት ማትሪክሶች A እና B እኩል የሚባሉት መጠናቸው አንድ አይነት ሆኖ በየቦታው ያሉት አባላቶቻቸው እኩል ሲሆኑ ብቻ ነው (aᵢⱼ = bᵢⱼ)።

የረድፍና የአምድ ቬክተሮች፡
- 1 × n ማትሪክስ የረድፍ ቬክተር (Row Vector) ይባላል።
- m × 1 ማትሪክስ የአምድ ቬክተር (Column Vector) ይባላል።`,
    formulas: [
      { name: 'Matrix Notation', formula: 'A = (aᵢⱼ)ₘ×ₙ', explanation: 'General compact notation for m-by-n matrix.' },
      { name: 'Matrix Equality', formula: 'A = B ⟺ aᵢⱼ = bᵢⱼ, ∀i, j', explanation: 'Matrices are equal iff all corresponding entries match.' }
    ]
  },
  {
    pdfPageNumber: 24,
    bookPageLabel: 'Page 24',
    chapterNumber: 2,
    sectionRef: '2.1.1',
    titleEn: 'Square Matrices & Matrix Addition and Subtraction Operations',
    titleAm: 'ካሬ ማትሪክሶች እና የማትሪክስ ድምርና መቀነስ ስሌቶች',
    subtopicEn: 'Square Matrix of Order n, Matrix Sum A + B, Difference A - B, Commutative and Associative Laws, Zero Matrix 0',
    subtopicAm: 'የ n-ኛ ደረጃ ካሬ ማትሪክስ፣ የማትሪክስ ድምርና መቀነስ ቀመር፣ የድምር ቅያሪና ተጣማሪ ህጎች፣ ዜሮ ማትሪክስ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 2

Example 5: [8] is both a column and row matrix (1 × 1).
An n × n matrix is called a square matrix of order n (number of rows equals number of columns).
Example 6: A = [ 2  0  4 ]
               [ 3 -9  5 ] is a square matrix of order 3.
               [ 1 -3  8 ]

Operation with matrices:
Addition (Subtraction) of Matrices:
Definition: Let A = (aᵢⱼ)ₘ×ₙ and B = (bᵢⱼ)ₘ×ₙ be two matrices of the same size.
Then:
A + B = (aᵢⱼ + bᵢⱼ)ₘ×ₙ  and  A - B = (aᵢⱼ - bᵢⱼ)ₘ×ₙ

Definition 3.1.2: If A and B are matrices with the same size, then we define the sum A + B to be the matrix obtained by adding the entries of B to the corresponding entries of A, and the difference A - B by subtracting the entries of B from the corresponding entries of A:
(A + B)ᵢⱼ = (A)ᵢⱼ + (B)ᵢⱼ = aᵢⱼ + bᵢⱼ
(A - B)ᵢⱼ = (A)ᵢⱼ - (B)ᵢⱼ = aᵢⱼ - bᵢⱼ

Example 7:
Let A = [ 2 -1  3 ]    and  B = [ 4  7 -8 ]
        [ 0  4  6 ]             [ 9  3  5 ]
        [-6 10 -5 ]             [ 1 -1  2 ]
A + B = [ 2+4   -1+7   3+(-8) ] = [ 6   6  -5 ]
        [ 0+9    4+3    6+5   ]   [ 9   7  11 ]
        [-6+1  10+(-1) -5+2   ]   [-5   9  -3 ]

Note: For matrices of the same size:
 A + B = B + A (Commutative law)
 A + (B + C) = (A + B) + C (Associative law)

Definition: A matrix all of whose elements are zero is called a zero matrix and it is denoted by 0.
Example 8: 0₂×₃ = [ 0 0 0 ]
                  [ 0 0 0 ]`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 24

ካሬ ማትሪክስ (Square Matrix)፡
የረድፎችና የአምዶች ብዛት እኩል የሆነ ማትሪክስ (n × n) የደረጃ n ካሬ ማትሪክስ ይባላል።

የማትሪክስ ድምር እና መቀነስ፡
መጠናቸው እኩል የሆኑ ማትሪክሶች ብቻ ይደመራሉ ወይም ይቀነሳሉ፡
(A + B)ᵢⱼ = aᵢⱼ + bᵢⱼ
(A - B)ᵢⱼ = aᵢⱼ - bᵢⱼ

የማትሪክስ ድምር ባህሪያት፡
 A + B = B + A (ቅያሪ ህግ)
 A + (B + C) = (A + B) + C (ተጣማሪ ህግ)

ዜሮ ማትሪክስ (Zero Matrix)፡
ሁሉም አባላቶቹ ዜሮ የሆኑ ማትሪክስ ዜሮ ማትሪክስ (0) ይባላል።`,
    formulas: [
      { name: 'Matrix Addition', formula: '(A + B)ᵢⱼ = aᵢⱼ + bᵢⱼ', explanation: 'Adding corresponding elements of identical-size matrices.' },
      { name: 'Commutative Addition', formula: 'A + B = B + A', explanation: 'Matrix addition is commutative.' }
    ]
  },
  {
    pdfPageNumber: 25,
    bookPageLabel: 'Page 25',
    chapterNumber: 2,
    sectionRef: '2.2',
    titleEn: 'Scalar Multiplication, Matrix Product AB & Algebraic Properties',
    titleAm: 'የእስካላር ብዜት፣ የማትሪክስ ብዜት AB እና አልጀብራዊ ባህሪያት',
    subtopicEn: 'Scalar Multiple cA, Matrix Multiplication Definition AB=(c_ik)m×p, Non-commutativity AB ≠ BA, Diagonal Matrix',
    subtopicAm: 'የእስካላር ማባዛት፣ የማትሪክስ ማባዛት ህግ፣ AB ≠ BA አለመቀያየር፣ የዲያጎናል ማትሪክስ ትርጓሜ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 3

Definition: Let A = (aᵢⱼ)ₘ×ₙ be a matrix and c ∈ ℝ, the scalar multiple of A by c is cA = (c aᵢⱼ)ₘ×ₙ.
Example: If A = [ 2  0  4 ], then 4A = [ 8   0  16 ]
                 [ 3 -9  5 ]           [ 12 -36  20 ]
                 [ 1 -3  8 ]           [ 4  -12  32 ]

2.2. Product of Matrices and some algebraic properties; transpose of matrix
Let A = (aᵢⱼ)ₘ×ₙ and B = (bⱼₖ)ₙ×ₚ. (The number of columns of A must equal the number of rows of B).
We define the product AB by AB = (cᵢₖ)ₘ×ₚ, where:
cᵢₖ = ∑ⱼ₌₁ⁿ aᵢⱼ bⱼₖ

Example 10:
Let A = [ 3 4 2 1 ] (3 × 4)   and  B = [  1  2 ] (4 × 2)
        [ 1 2 3 1 ]                    [  3  4 ]
        [ 0 1 2 3 ]                    [  1  0 ]
                                       [ -1  1 ]
AB = [ 3+12+2-1   6+16+0+1 ] = [ 16  23 ] (3 × 2)
     [ 1+6+3-1    2+8+0+1  ]   [  9  11 ]
     [ 0+3+2-3    0+4+0+3  ]   [  2   7 ]

Example 11: Let A = [ -1 1 ] and B = [ 2  1 ]
                    [  4 1 ]         [ 5 -3 ]
Then AB = [ 3 -4 ] and BA = [ 2 3 ] ⟹ AB ≠ BA!
          [ 13 1 ]          [-17 2 ]

Properties of Matrix Multiplication:
i) AB ≠ BA in general (Matrix multiplication is NOT commutative!)
ii) A(BC) = (AB)C (Associative law)
iii) A(B + C) = AB + AC  and  (A + B)C = AC + BC (Distributive laws)
iv) 0 A = 0 = A 0

Definition: A square matrix in which all but the diagonal elements are zero is called a diagonal matrix.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 25

የእስካላር ማባዛት፡ cA = (c aᵢⱼ)ₘ×ₙ

2.2. የማትሪክሶች ብዜት እና ባህሪያቱ
A (m × n) እና B (n × p) ሲሆኑ ብዜታቸው AB (m × p) ይሰላል። (የ A አምዶች ብዛት ከ B ረድፎች ብዛት ጋር እኩል መሆን አለበት!)
cᵢₖ = aᵢ₁b₁ₖ + aᵢ₂b₂ₖ + ··· + aᵢₙbₙₖ

የማትሪክስ ብዜት ባህሪያት፡
i) AB ≠ BA (በአጠቃላይ አይቀያየርም!)
ii) A(BC) = (AB)C (ተጣማሪ ህግ)
iii) A(B + C) = AB + AC እና (A + B)C = AC + BC (ማከፋፈል)
iv) 0 A = 0

ዲያጎናል ማትሪክስ (Diagonal Matrix)፡
ከዋናው ሰያፍ (Diagonal) ውጪ ያሉት አባላቶቹ በሙሉ ዜሮ የሆኑ ካሬ ማትሪክስ ዲያጎናል ማትሪክስ ይባላል።`,
    formulas: [
      { name: 'Matrix Product Entry', formula: 'cᵢₖ = ∑ⱼ₌₁ⁿ aᵢⱼ bⱼₖ', explanation: 'Inner product of i-th row of A with k-th column of B.' },
      { name: 'Non-commutativity', formula: 'AB ≠ BA', explanation: 'Matrix multiplication is generally non-commutative.' }
    ]
  },
  {
    pdfPageNumber: 26,
    bookPageLabel: 'Page 26',
    chapterNumber: 2,
    sectionRef: '2.2.1',
    titleEn: 'Scalar Matrix, Identity Matrix & Properties of Matrix Transpose',
    titleAm: 'የእስካላር ማትሪክስ፣ የኢደንቲቲ ማትሪክስ እና የማትሪክስ ትራንስፖዝ ባህሪያት',
    subtopicEn: 'Scalar Matrix S_n, Identity Matrix I_n, Transpose A^t Definition, (AB)^t = B^t A^t Reversal Law',
    subtopicAm: 'የእስካላር ማትሪክስ፣ ማንነት ማትሪክስ I_n፣ የትራንስፖዝ ትርጓሜ እና 4ቱ የትራንስፖዝ ባህሪያት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 4

Definition: A diagonal matrix whose all of its diagonal elements are equal is called a Scalar matrix:
Sₙ = [ c 0 ··· 0 ]
     [ 0 c ··· 0 ]
     [ ⋮ ⋮ ⋱  ⋮ ]
     [ 0 0 ··· c ]

Definition: A scalar matrix whose all of its diagonal elements are one is called the Identity matrix, denoted Iₙ:
Iₙ = [ 1 0 ··· 0 ]
     [ 0 1 ··· 0 ]
     [ ⋮ ⋮ ⋱  ⋮ ]
     [ 0 0 ··· 1 ]

Definition: Let A = (aᵢⱼ)ₘ×ₙ be a matrix. We define the transpose of A denoted by Aᵗ (or Aᵀ) to be the n × m matrix where the ij-th entry is aⱼᵢ (rows and columns are interchanged).

Example 13:
If A = [ 3  2 -1 ], then Aᵗ = [ 3  6  2 ]
       [ 6  5  2 ]            [ 2  5  1 ]
       [ 2  1  4 ]            [-1  2  4 ]
If B = [ 5  3 ], then Bᵗ = [ 5 ]
                           [ 3 ]

Properties of Matrix Transpose:
Let A, B be matrices over ℝ and c ∈ ℝ:
i. (Aᵗ)ᵗ = A
ii. (A + B)ᵗ = Aᵗ + Bᵗ
iii. (c A)ᵗ = c Aᵗ
iv. (AB)ᵗ = Bᵗ Aᵗ  (Reversal law of transposes!)`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 26

እስካላር ማትሪክስ (Scalar Matrix)፡
ሁሉም የሰያፍ አባላቶቹ እኩል (c) የሆኑ ዲያጎናል ማትሪክስ እስካላር ማትሪክስ ይባላል።

የማንነት ማትሪክስ (Identity Matrix, Iₙ)፡
ሁሉም የሰያፍ አባላቶቹ 1 የሆኑ እስካላር ማትሪክስ የማንነት ማትሪክስ ይባላል።

ማትሪክስ ትራንስፖዝ (Matrix Transpose, Aᵗ)፡
ረድፎችን ወደ አምድ በመቀየር የሚገኘው ማትሪክስ ትራንስፖዝ Aᵗ ይባላል (የመጠን ለውጥ m × n ወደ n × m)።

የትራንስፖዝ 4ቱ ባህሪያት፡
i. (Aᵗ)ᵗ = A
ii. (A + B)ᵗ = Aᵗ + Bᵗ
iii. (c A)ᵗ = c Aᵗ
iv. (AB)ᵗ = Bᵗ Aᵗ (ቅደም-ተከተል ይገለበጣል!)`,
    formulas: [
      { name: 'Transpose Definition', formula: '(Aᵗ)ᵢⱼ = Aⱼᵢ', explanation: 'Row and column indices swapped.' },
      { name: 'Transpose of Product', formula: '(AB)ᵗ = Bᵗ Aᵗ', explanation: 'Transpose of product is product of transposes in reverse order.' }
    ]
  },
  {
    pdfPageNumber: 27,
    bookPageLabel: 'Page 27',
    chapterNumber: 2,
    sectionRef: '2.3',
    titleEn: 'Special Matrices (Symmetric, Skew-Symmetric, Triangular) & 2.3 Elementary Row Operations',
    titleAm: 'ልዩ ማትሪክሶች (ሲሜትሪክ፣ ስኪው-ሲሜትሪክ፣ ትሪያንጉላር) እና 2.3 አንደኛ ደረጃ የረድፍ ስሌቶች',
    subtopicEn: 'Symmetric A = Aᵗ, Skew-Symmetric A = -Aᵗ, Upper/Lower Triangular, 3 Elementary Row Operations, Row Equivalence A ~ B',
    subtopicAm: 'ሲሜትሪክ ማትሪክስ፣ ስኪው-ሲሜትሪክ፣ ሶስት ማዕዘናዊ ማትሪክሶች፣ 3ቱ የመጀመሪያ ደረጃ የረድፍ ስሌቶች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 5

Special Matrices:
1. Symmetric Matrix: A matrix which is equal to its transpose, i.e., A = Aᵗ (aᵢⱼ = aⱼᵢ).
Example 14: A = [ 1 -1  4 ]
                [-1  2  6 ] = Aᵗ
                [ 4  6  3 ]

2. Skew Symmetric Matrix: A matrix which is equal to -1 times its transpose, i.e., A = -Aᵗ (aᵢⱼ = -aⱼᵢ, hence diagonal entries aᵢᵢ = 0).
Example: A = [  0 -1  6 ]
             [  1  0  1 ] = -Aᵗ
             [ -6 -1  0 ]

Theorem: Let A be a square matrix. Then:
i. A + Aᵗ is symmetric.
ii. A - Aᵗ is skew symmetric.

3. Triangular Matrices:
- Upper triangular matrix: A square matrix where aᵢⱼ = 0 for all i > j.
- Lower triangular matrix: A square matrix where aᵢⱼ = 0 for all i < j.

2.3. Elementary Row Operations and Echelon Form
Let A be an m × n matrix. The elementary row operations on A are:
i. Rᵢ ⟷ Rⱼ (Interchanging two rows)
ii. Rᵢ ⟶ c Rᵢ (Multiplication of a row by a non-zero constant c ≠ 0)
iii. Rᵢ ⟶ Rᵢ + c Rⱼ (Addition of a constant multiple of one row to another row)

Definition: Two matrices are row equivalent, written as A ~ B, if one can be obtained from the other by a finite sequence of elementary row operations.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 27

ልዩ ማትሪክሶች፡
1. ሲሜትሪክ ማትሪክስ (Symmetric Matrix)፡ ከትራንስፖዙ ጋር እኩል የሆነ ካሬ ማትሪክስ A = Aᵗ ነው።
2. ስኪው-ሲሜትሪክ ማትሪክስ (Skew-Symmetric)፡ ከትራንስፖዙ አሉታዊ ጋር እኩል የሆነ A = -Aᵗ (የሰያፍ አባላቱ ዜሮ ናቸው)።

ቴዎረም፡ ለማንኛውም ካሬ ማትሪክስ A፡
i. A + Aᵗ ሲሜትሪክ ነው
ii. A - Aᵗ ስኪው-ሲሜትሪክ ነው

3. የሶስት ማዕዘን ማትሪክስ (Triangular Matrix)፡
- የላይኛው ሶስት ማዕዘን (Upper Triangular)፡ ከሰያፉ በታች ያሉት አባላት ዜሮ የሆኑ
- የታችኛው ሶስት ማዕዘን (Lower Triangular)፡ ከሰያፉ በላይ ያሉት አባላት ዜሮ የሆኑ

2.3. የመጀመሪያ ደረጃ የረድፍ ስሌቶች (Elementary Row Operations)፡
i. ሁለት ረድፎችን ማቀያየር (Rᵢ ⟷ Rⱼ)
ii. አንድን ረድፍ ዜሮ ባልሆነ ቁጥር ማባዛት (c Rᵢ)
iii. የአንድን ረድፍ ብዜት ወደ ሌላ ረድፍ መደመር (Rᵢ + c Rⱼ)

ረድፍ አቻነት (Row Equivalence)፡ A ~ B የሚባሉት አንዱ ከሌላው በረድፍ ስሌቶች ሲገኝ ነው።`,
    formulas: [
      { name: 'Symmetric Condition', formula: 'A = Aᵗ ⟺ aᵢⱼ = aⱼᵢ', explanation: 'Equal to its own transpose.' },
      { name: 'Skew-Symmetric Condition', formula: 'A = -Aᵗ ⟺ aᵢⱼ = -aⱼᵢ', explanation: 'Anti-symmetric; main diagonal must be all zeros.' },
      { name: 'Row Equivalence', formula: 'A ~ B', explanation: 'Transformable via elementary row operations.' }
    ]
  },
  {
    pdfPageNumber: 28,
    bookPageLabel: 'Page 28',
    chapterNumber: 2,
    sectionRef: '2.4',
    titleEn: 'Row Echelon Form (REF), Reduced Row Echelon Form (RREF) & 2.4 Rank of a Matrix',
    titleAm: 'ረድፍ ኢቸሎን ፎርም (REF)፣ ሬዲዩስድ ኢቸሎን ፎርም (RREF) እና 2.4 የማትሪክስ ራንክ',
    subtopicEn: '3 Conditions for REF, Condition for RREF, Examples, Definition of Matrix Rank ρ(A) ≤ min(m, n)',
    subtopicAm: 'የ REF 3ቱ መስፈርቶች፣ የ RREF መስፈርት፣ የማትሪክስ ራንክ ρ(A) ትርጓሜ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 6

Row Echelon Form:
Definition: A matrix is in row echelon form (REF) if it satisfies the following 3 conditions:
1. Any row consisting entirely of zeros appears at the bottom of the matrix.
2. The first non-zero number in any row not consisting entirely of zeros is 1 (leading 1).
3. If two successive rows do not consist entirely of zeros, the leading 1 in the lower row occurs farther to the right than the leading 1 in the higher row.

Examples of matrices in row echelon form:
A = [ 0 0 0 ]    B = [ 1 2 4 2 ]    C = [ 1 0 5 5 ]
    [ 0 0 0 ]        [ 0 1 0 3 ]        [ 0 1 0 0 ]
    [ 0 0 0 ]        [ 0 0 1 4 ]        [ 0 0 0 0 ]

Definition: A matrix in a row echelon form is said to be in reduced row echelon form (RREF) if all entries in any column containing a leading 1 are zero.
Example: From the above matrices, matrix A and C are in reduced row echelon form.

2.4. Rank of a matrix
Definition: Let A be an m × n matrix. Let A_R be the row echelon form of A. The rank ρ(A) is the number of non-zero rows of the row echelon form of A:
ρ(A) ≤ min(m, n)`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 28

ረድፍ ኢቸሎን ፎርም (Row Echelon Form - REF)፡
አንድ ማትሪክስ በ REF ላይ የሚገኘው 3ቱን መስፈርቶች ሲያሟላ ነው፡
1. ሙሉ በሙሉ ዜሮ የሆኑ ረድፎች ከስር ይቀመጣሉ።
2. በእያንዳንዱ ዜሮ ባልሆነ ረድፍ ውስጥ የመጀመሪያው ቁጥር 1 (Leading 1) ነው።
3. የታችኛው ረድፍ መሪ 1 ከላይኛው ረድፍ መሪ 1 ይበልጥ ወደ ቀኝ ርቆ ይገኛል።

ሬዲዩስድ ረድፍ ኢቸሎን ፎርም (RREF)፡
መሪ 1 ባለበት አምድ ውስጥ ከ 1 ውጪ ያሉት ሌሎች ቁጥሮች በሙሉ ዜሮ የሆኑበት ማትሪክስ RREF ይባላል።

2.4. የማትሪክስ ራንክ (Rank of a Matrix, ρ(A))፡
የማትሪክስ A ራንክ ρ(A) ማለት ወደ REF ከተቀየረ በኋላ የሚገኙት ዜሮ ያልሆኑ ረድፎች ብዛት ነው።
ρ(A) ≤ min(m, n)`,
    formulas: [
      { name: 'Matrix Rank Bound', formula: 'ρ(A) ≤ min(m, n)', explanation: 'Rank cannot exceed the number of rows or columns.' }
    ]
  },
  {
    pdfPageNumber: 29,
    bookPageLabel: 'Page 29',
    chapterNumber: 2,
    sectionRef: '2.5',
    titleEn: '2.5 Determinant of a Matrix of Order 1, 2, and n (Cofactor Expansion)',
    titleAm: '2.5 የደረጃ 1፣ 2 እና n ማትሪክስ ዲተርሚናንት (የኮፋክተር መስፋፋት)',
    subtopicEn: 'Rank Solved Examples, Determinant Notation det(A) or |A|, Order 1, Order 2 (a₁₁a₂₂ - a₂₁a₁₂), Order n Laplace Expansion Formula',
    subtopicAm: 'የራንክ ምሳሌዎች፣ የዲተርሚናንት ትርጓሜ፣ የ2×2 እና n×n ዲተርሚናንት ስሌት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 7

Example: Find the rank of the following matrices:
A = [ 1 0 0 ]      B = [ 1  2 ]
    [ 0 1 0 ]          [ 2  4 ]
    [ 0 0 1 ]          [-3 -6 ]
Answer: ρ(A) = 3;  For B, R₂ - 2R₁ gives [0 0] and R₃ + 3R₁ gives [0 0], so ρ(B) = 1.

2.5. Determinant of a Matrix and its Properties
To every square matrix A = (aᵢⱼ)ₙ×ₙ is associated a number or an expression called the determinant of A which is denoted by det(A) or |A|.

Determinant of order one:
Let A = (a₁₁). Then det(A) = a₁₁.

Determinant of order two:
Let A = [ a₁₁ a₁₂ ]
        [ a₂₁ a₂₂ ]
Then det(A) = a₁₁a₂₂ - a₂₁a₁₂.

Determinant of order n:
det(A) = ∑ⱼ₌₁ⁿ (-1)ⁱ⁺ʲ aᵢⱼ det(Aᵢⱼ),  1 ≤ i ≤ n
(Expansion along the i-th row, where Aᵢⱼ is the submatrix formed by deleting the i-th row and the j-th column).

Example: Find the determinant of:
A = [ 1  2  0 ]
    [ 3  6  1 ]
    [ 1 -1  5 ]
Solution: Expanding along row 1 (i = 1):
det(A) = 1 · det | 6 1 | - 2 · det | 3 1 | + 0 · det | 3  6 |
                 |-1 5 |           | 1 5 |           | 1 -1 |
= 1(30 - (-1)) - 2(15 - 1) + 0 = 31 - 2(14) = 31 - 28 = 3.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 29

የራንክ ምሳሌ፡
ρ(A) = 3፤ ለ B ሁለተኛውና ሶስተኛው ረድፍ ዜሮ ስለሚሆኑ ρ(B) = 1 ነው።

2.5. የማትሪክስ ዲተርሚናንት (Determinant)
ለእያንዳንዱ ካሬ ማትሪክስ det(A) ወይም |A| የሚባል ቁጥር ይያያዛል።
- የደረጃ 1፡ det(a₁₁) = a₁₁
- የደረጃ 2፡ det [a₁₁ a₁₂; a₂₁ a₂₂] = a₁₁a₂₂ - a₂₁a₁₂
- የደረጃ n፡ det(A) = ∑ⱼ₌₁ⁿ (-1)ⁱ⁺ʲ aᵢⱼ det(Aᵢⱼ) (የላፕላስ መስፋፋት)

ምሳሌ፡ A = [1 2 0; 3 6 1; 1 -1 5] ቢሆን፡
det(A) = 1(31) - 2(14) + 0 = 31 - 28 = 3`,
    formulas: [
      { name: '2×2 Determinant', formula: 'det(A) = a₁₁a₂₂ - a₁₂a₂₁', explanation: 'Product of main diagonal minus product of anti-diagonal.' },
      { name: 'Laplace Expansion', formula: 'det(A) = ∑ⱼ₌₁ⁿ (-1)ⁱ⁺ʲ aᵢⱼ det(Aᵢⱼ)', explanation: 'Cofactor expansion along i-th row.' }
    ]
  },
  {
    pdfPageNumber: 30,
    bookPageLabel: 'Page 30',
    chapterNumber: 2,
    sectionRef: '2.5.1',
    titleEn: '11 Fundamental Properties of Determinants with Numerical Proofs',
    titleAm: '11ዱ መሰረታዊ የዲተርሚናንት ባህሪያት ከተሰሩ ምሳሌዎች ጋር',
    subtopicEn: 'Row Swapping, Proportional Columns, Zero Rows, Triangular Determinants, det(AB)=det(A)det(B), det(A⁻¹)=1/det(A)',
    subtopicAm: 'ረድፍ ሲቀያየር ምልክት መቀየር፣ ተመሳሳይ አምዶች det=0፣ det(AB)=det(A)det(B)፣ det(A⁻¹)=1/det(A)',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 8

Properties of Determinants:
1. If two columns (or rows) are interchanged, then the determinant changes sign.
2. If one column (or row) is a scalar multiple of another column (or row), then the determinant is zero.
3. If one of the columns (or rows) is zero, then the determinant is zero.
4. If a scalar multiple of one column (or row) is added to another column (or row), then the determinant does NOT change.
5. The determinant of a diagonal matrix is the product of elements on the main diagonal.
Example: det = 1 × (-1) × 7 = -7.
6. The determinant of an upper (or lower) triangular matrix is the product of elements on the main diagonal.
7. det(A) = det(Aᵗ)
8. det(AB) = det(A) · det(B)
9. det(A⁻¹) = 1 / det(A)  (for invertible A)
10. Linearity: det([A¹, ..., Aʲ + Aᵏ, ..., Aⁿ]) = det([A¹, ..., Aʲ, ..., Aⁿ]) + det([A¹, ..., Aᵏ, ..., Aⁿ])
11. det(c A) = cⁿ det(A), for an n × n matrix A.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 30

11ዱ የዲተርሚናንት ባህሪያት፡
1. ሁለት ረድፎች ወይም አምዶች ሲቀያየሩ የዲተርሚናንቱ ምልክት ይቀየራል (-det)።
2. አንዱ ረድፍ/አምድ የሌላኛው ብዜት ከሆነ det = 0 ነው።
3. ሙሉ በሙሉ ዜሮ ረድፍ/አምድ ካለ det = 0 ነው።
4. የአንድን ረድፍ ብዜት ወደ ሌላ ረድፍ መደመር ዲተርሚናንቱን አይቀይረውም።
5. የዲያጎናል ማትሪክስ ዲተርሚናንት በሰያፉ ላይ ያሉ ቁጥሮች ብዜት ነው።
6. የሶስት ማዕዘን ማትሪክስ ዲተርሚናንት በሰያፉ ላይ ያሉ ቁጥሮች ብዜት ነው።
7. det(A) = det(Aᵗ)
8. det(AB) = det(A) · det(B)
9. det(A⁻¹) = 1 / det(A)
10. በነጠላ ረድፍ/አምድ ላይ ሊኒየር ማከፋፈል ይቻላል።
11. det(c A) = cⁿ det(A) (ለ n × n ማትሪክስ)`,
    formulas: [
      { name: 'Product Determinant', formula: 'det(AB) = det(A) · det(B)', explanation: 'Determinant distributes over matrix multiplication.' },
      { name: 'Scalar Multiple Determinant', formula: 'det(c A) = cⁿ det(A)', explanation: 'Factoring scalar from n-dimensional matrix scales by cⁿ.' },
      { name: 'Inverse Determinant', formula: 'det(A⁻¹) = 1 / det(A)', explanation: 'Determinant of inverse equals reciprocal of determinant.' }
    ]
  },
  {
    pdfPageNumber: 31,
    bookPageLabel: 'Page 31',
    chapterNumber: 2,
    sectionRef: '2.6',
    titleEn: '2.6 Inverse of Matrix, Invertibility Properties, Gauss-Jordan Elimination & Adjoint',
    titleAm: '2.6 የማትሪክስ ኢንቨርስ፣ ባህሪያት፣ የጋውስ-ጆርዳን ዘዴ እና አድጆይንት',
    subtopicEn: 'Non-singular Matrix AB=BA=I_n, Properties of Inverse, [A | I_n] Row Reduction, Definition of Minor and Adjoint',
    subtopicAm: 'የኢንቨርስ ትርጓሜ፣ የጋውስ-ጆርዳን ማትሪክስ ማጣመር፣ ማይነር እና አድጆይንት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 9

2.6. Inverse of Matrix and its Properties
Definition: A matrix A is said to be non-singular or invertible if there exists a unique matrix B such that AB = BA = Iₙ. We say B is the multiplicative inverse of A, denoted by A⁻¹.
If such a matrix does not exist, we say matrix A is singular or non-invertible.
Note: Inverse is only defined for square matrices, and not all square matrices are invertible.

Properties of Invertible matrices:
Let A, B, and C be invertible matrices of order n. Then:
i. (Aᵗ)⁻¹ = (A⁻¹)ᵗ
ii. (A⁻¹)⁻¹ = A
iii. (AB)⁻¹ = B⁻¹ A⁻¹ (Reversal law of inverses)

Gauss-Jordan elimination for computing inverse of a matrix:
i. Adjoin the identity matrix of order n with matrix A to form [A | Iₙ].
ii. Apply elementary row operations to reduce to [Iₙ | B]. Then B is the inverse A⁻¹. If the left side cannot be reduced to Iₙ, then A is singular.

ADJOINT OF A MATRIX:
Definition: Let Mᵢⱼ be a submatrix obtained by omitting the i-th row and the j-th column of matrix A. det(Mᵢⱼ) is called the minor of the element aᵢⱼ of matrix A.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 31

2.6. የማትሪክስ ኢንቨርስ እና ባህሪያቱ
ትርጓሜ፡ AB = BA = Iₙ የሚያደርግ ማትሪክስ B ካለ A ኢንቨርቲብል (Invertible) ወይም ኖን-ሲንጉላር ይባላል፤ B = A⁻¹ ተብሎ ይወከላል።

የኢንቨርስ ባህሪያት፡
i. (Aᵗ)⁻¹ = (A⁻¹)ᵗ
ii. (A⁻¹)⁻¹ = A
iii. (AB)⁻¹ = B⁻¹ A⁻¹ (ቅደም ተከተል ይገለበጣል!)

የጋውስ-ጆርዳን (Gauss-Jordan) ዘዴ ለኢንቨርስ ስሌት፡
[A | Iₙ] በማጣመር በረድፍ ስሌቶች ወደ [Iₙ | A⁻¹] መቀየር።

አድጆይንት ማትሪክስ (Adjoint of a Matrix)፡
የ i-ኛ ረድፍና j-ኛ አምድን በማስወገድ የሚገኘው ዲተርሚናንት ማይነር (Minor, det Mᵢⱼ) ይባላል።`,
    formulas: [
      { name: 'Matrix Inverse Property', formula: 'AA⁻¹ = A⁻¹A = Iₙ', explanation: 'Multiplication by inverse yields identity.' },
      { name: 'Inverse of Product', formula: '(AB)⁻¹ = B⁻¹ A⁻¹', explanation: 'Product inverse reverses order of individual inverses.' }
    ]
  },
  {
    pdfPageNumber: 32,
    bookPageLabel: 'Page 32',
    chapterNumber: 2,
    sectionRef: '2.7',
    titleEn: 'Cofactor Matrix, Adjoint adj(A) & 2.7 Systems of Linear Equations AX = b',
    titleAm: 'የኮፋክተር ማትሪክስ፣ አድጆይንት adj(A) እና 2.7 የሊኒየር እኩልታዎች ስርአት AX = b',
    subtopicEn: 'Cofactor A_ij = (-1)^(i+j) det(M_ij), Adjoint adj(A) = [A_ij]^t, Linear System Definition AX=b, Augmented Matrix (A|b)',
    subtopicAm: 'ኮፋክተር፣ አድጆይንት፣ የሊኒየር እኩልታ ስርአት፣ አውግመንትድ ማትሪክስ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 10

Let Aᵢⱼ = (-1)ⁱ⁺ʲ det(Mᵢⱼ). Then Aᵢⱼ is called the cofactor of the element aᵢⱼ of matrix A.
The transpose of the cofactor matrix [Aᵢⱼ]ᵗ is called the adjoint of A, denoted by adj(A).

Formula: A⁻¹ = (1 / det(A)) adj(A)

Example: For A = [ -1  3  6 ]
                 [  6  5  2 ]
                 [ -3 -3 -6 ]
Cofactors: A₁₁ = -24, A₁₂ = 30, A₁₃ = -3, A₂₁ = 0, A₂₂ = 24, A₂₃ = -12, A₃₁ = -24, A₃₂ = 38, A₃₃ = -23.
adj(A) = [ -24   0 -24 ]
         [  30  24  38 ]
         [  -3 -12 -23 ]

2.7. Systems of Linear Equations
Definition: Equations of the form:
a₁₁x₁ + a₁₂x₂ + ··· + a₁ₙxₙ = b₁
a₂₁x₁ + a₂₂x₂ + ··· + a₂ₙxₙ = b₂
  ⋮
aₘ₁x₁ + aₘ₂x₂ + ··· + aₘₙxₙ = bₘ
are called systems of m linear equations in n unknowns.
In matrix form: AX = b, where A is the coefficient matrix, X is the column vector of unknowns, and b is the column vector of constants.
If b = 0, the system is homogeneous; otherwise non-homogeneous.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 32

ኮፋክተር፡ Aᵢⱼ = (-1)ⁱ⁺ʲ det(Mᵢⱼ)
አድጆይንት adj(A) = የኮፋክተር ማትሪክስ ትራንስፖዝ [Aᵢⱼ]ᵗ
ቀመር፡ A⁻¹ = (1 / det(A)) adj(A)

2.7. የሊኒየር እኩልታዎች ስርአት (Systems of Linear Equations)
በማትሪክስ መልክ፡ AX = b
- A፡ የኮፊሸንት ማትሪክስ
- X፡ የማይታወቁ ተለዋዋጮች ቬክተር
- b፡ የቋሚ ቁጥሮች ቬክተር
b = 0 ከሆነ ሆሞጂነስ (Homogeneous) ሲባል b ≠ 0 ከሆነ ኖን-ሆሞጂነስ ይባላል።`,
    formulas: [
      { name: 'Inverse via Adjoint', formula: 'A⁻¹ = (1 / det(A)) adj(A)', explanation: 'Classical matrix inverse formula.' },
      { name: 'Matrix Form of Linear System', formula: 'AX = b', explanation: 'Compact matrix-vector representation of linear system.' }
    ]
  },
  {
    pdfPageNumber: 33,
    bookPageLabel: 'Page 33',
    chapterNumber: 2,
    sectionRef: '2.7.1',
    titleEn: 'Consistency Criteria, Rank Conditions & Gaussian Elimination Method',
    titleAm: 'የስርአቱ ተስማሚነት መስፈርቶች፣ የራንክ ሁኔታዎች እና የጋውስ ማጣራት ዘዴ',
    subtopicEn: 'Consistent vs Inconsistent Systems, Augmented Matrix (A|b), Rouché-Capelli Theorem (Rank A vs Rank (A|b)), 3 Solution Cases',
    subtopicAm: 'ተስማሚና የማይስማሙ ስርአቶች፣ የራንክ 3ቱ የውጤት አይነቶች (ነጠላ፣ ወሰን-አልባ፣ መፍትሔ-አልባ)',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 11

A homogeneous system always has at least the trivial solution x₁ = x₂ = ··· = xₙ = 0.
The m × (n + 1) matrix whose first n columns are the columns of A and whose last column is b is called the augmented matrix, denoted by (A | b).

Note:
• When a system of linear equations has at least one solution, it is called consistent; otherwise inconsistent.
• Two systems are equivalent if they have the same solution set.

Methods of Solving Systems of Linear Equations:
1. Gaussian Elimination Method:
Let AX = b be the system of linear equations:
i. Write down the augmented matrix B = (A | b).
ii. Apply elementary row operations to reduce B to row echelon form.
A. If Rank(A) = Rank(B) = n (number of unknowns), the system has a UNIQUE solution.
B. If Rank(A) = Rank(B) < n, the system has INFINITELY MANY solutions (with n - Rank(A) free parameters).
C. If Rank(A) < Rank(B), the system has NO SOLUTION (Inconsistent).
iii. Use back substitution to find the variables.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 33

ሆሞጂነስ ስርአት ምንጊዜም ትሪቪያል መፍትሔ (0,0,...,0) አለው።
አውግመንትድ ማትሪክስ፡ (A | b)

የመፍትሔ ሁኔታዎች (በጋውስ ማጣራት ዘዴ)፡
A. Rank(A) = Rank(A|b) = n ከሆነ፡ አንድ ነጠላ መፍትሔ (Unique Solution) ብቻ አለው።
B. Rank(A) = Rank(A|b) < n ከሆነ፡ ወሰን የሌላቸው በርካታ መፍትሔዎች (Infinitely Many Solutions) አሉት።
C. Rank(A) < Rank(A|b) ከሆነ፡ ምንም መፍትሔ የለውም (No Solution / Inconsistent)።`,
    formulas: [
      { name: 'Unique Solution Condition', formula: 'Rank(A) = Rank(A|b) = n', explanation: 'Exact unique solution.' },
      { name: 'Infinite Solutions Condition', formula: 'Rank(A) = Rank(A|b) < n', explanation: 'Infinitely many solutions parameterized by free variables.' },
      { name: 'Inconsistency Condition', formula: 'Rank(A) < Rank(A|b)', explanation: 'Contradiction row [0 0 ... 0 | k] with k ≠ 0; no solution.' }
    ]
  },
  {
    pdfPageNumber: 34,
    bookPageLabel: 'Page 34',
    chapterNumber: 2,
    sectionRef: '2.7.2',
    titleEn: 'Solved Gaussian Elimination Example & Cramer’s Rule Theorem',
    titleAm: 'በጋውስ ማጣራት የተሰራ ምሳሌ እና የክሬመር ህግ (Cramer’s Rule)',
    subtopicEn: 'Step-by-Step Back Substitution Solution (x₁=1, x₂=-1, x₃=2), Statement of Cramer’s Rule x_k = D_k / D',
    subtopicAm: 'ደረጃ በደረጃ የተሰራ የጋውስ ስሌት፣ የክሬመር ህግ ቀመር x_k = D_k / D',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 12

Example 1: Solve using Gaussian elimination:
x₁ - 2x₂ + 3x₃ = 9
-x₁ + 3x₂ = -4
2x₁ - 5x₂ + 5x₃ = 17

Solution:
Augmented matrix:
[ 1 -2  3 |  9 ]
[-1  3  0 | -4 ]  R₂ ⟶ R₂ + R₁
[ 2 -5  5 | 17 ]  R₃ ⟶ R₃ - 2R₁
~ [ 1 -2  3 | 9 ]
  [ 0  1  3 | 5 ]
  [ 0 -1 -1 | -1 ]  R₃ ⟶ R₃ + R₂
~ [ 1 -2 3 | 9 ]
  [ 0  1 3 | 5 ]
  [ 0  0 2 | 4 ]  R₃ ⟶ (1/2)R₃
~ [ 1 -2 3 | 9 ]
  [ 0  1 3 | 5 ]
  [ 0  0 1 | 2 ]

Since Rank(B) = 3 = Rank(A) = n = 3, the system has exactly one unique solution.
Back substitution:
x₃ = 2
x₂ + 3(2) = 5 ⟹ x₂ = -1
x₁ - 2(-1) + 3(2) = 9 ⟹ x₁ + 8 = 9 ⟹ x₁ = 1.
Solution set: {(1, -1, 2)}.

2. Cramer’s Rule
If a linear system consisting of n equations with n unknowns has a non-zero coefficient determinant D = det(A) ≠ 0, then the system has a unique solution given by:
x₁ = D₁/D,  x₂ = D₂/D,  ...,  xₙ = Dₙ/D,
where Dₖ is the determinant obtained by replacing the k-th column of D with the constant vector b.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 34

ምሳሌ፡ በጋውስ ማጣራት ሲሰራ፡
x₁ - 2x₂ + 3x₃ = 9
-x₁ + 3x₂ = -4
2x₁ - 5x₂ + 5x₃ = 17
አውግመንትድ ማትሪክሱ ወደ REF ሲቀየር፡
Rank(A) = Rank(A|b) = 3 ስለሆነ ነጠላ መፍትሔ አለው።
የመጨረሻ መልስ፡ x₃ = 2፣ x₂ = -1፣ x₁ = 1 ⟹ {(1, -1, 2)}

2. የክሬመር ህግ (Cramer’s Rule)፡
det(A) = D ≠ 0 ከሆነ እያንዳንዱ ተለዋዋጭ በሚከተለው ይሰላል፡
xₖ = Dₖ / D
Dₖ ማለት በማትሪክስ A k-ኛ አምድ ቦታ የቋሚ ቁጥሮችን ቬክተር b በመተካት የሚሰላ ዲተርሚናንት ነው።`,
    formulas: [
      { name: 'Cramer’s Formula', formula: 'xₖ = det(Aₖ) / det(A)', explanation: 'Computes each variable via determinant quotient when det(A) ≠ 0.' }
    ]
  },
  {
    pdfPageNumber: 35,
    bookPageLabel: 'Page 35',
    chapterNumber: 2,
    sectionRef: '2.7.3',
    titleEn: 'Cramer’s Rule Solved Examples & 3. Matrix Inverse Method (X = A⁻¹b)',
    titleAm: 'በክሬመር ህግ የተሰሩ ምሳሌዎች እና 3. የማትሪክስ ኢንቨርስ ዘዴ (X = A⁻¹b)',
    subtopicEn: '2×2 Cramer Solution, 3×3 Cramer System, Matrix Inversion Method Theorem, Solved 2×2 Inversion System',
    subtopicAm: 'የክሬመር ምሳሌዎች፣ የኢንቨርስ ዘዴ ቴዎረም X = A⁻¹b፣ የተሰራ ምሳሌ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 13

Homogeneous System Remark:
If the system is homogeneous (AX = 0) and D ≠ 0, it has only the trivial solution x₁ = x₂ = ··· = xₙ = 0.
If D = 0, the homogeneous system has non-trivial solutions.

Example: Solve using Cramer’s rule:
{ 2x - 5y = 23
{ 4x + 6y = -2

Solution:
D = det | 2 -5 | = 12 - (-20) = 32 ≠ 0
        | 4  6 |
D₁ = det | 23 -5 | = 138 - 10 = 128 ⟹ x = 128 / 32 = 4
         | -2  6 |
D₂ = det | 2  23 | = -4 - 92 = -96 ⟹ y = -96 / 32 = -3
         | 4  -2 |
Thus solution set s.s. = {(4, -3)}.

3. Inverse Method
If AX = b, where A is invertible, then multiplying both sides by A⁻¹ yields:
A⁻¹(AX) = A⁻¹b ⟹ X = A⁻¹b is the unique solution.

Theorem: An n × n matrix A is invertible if and only if det(A) ≠ 0.

Example: Solve using inverse method:
{ x - 2y = 1
{ 4x - y = -2

Solution:
A = [ 1 -2 ],  X = [ x ],  b = [  1 ]
    [ 4 -1 ]       [ y ]       [ -2 ]
det(A) = -1 - (-8) = 7 ≠ 0.
adj(A) = [ -1  2 ]
         [ -4  1 ]
A⁻¹ = (1/7) [ -1  2 ] = [ -1/7  2/7 ]
            [ -4  1 ]   [ -4/7  1/7 ]
X = A⁻¹b = [ -1/7  2/7 ][  1 ] = [ -1/7 - 4/7 ] = [ -5/7 ]
           [ -4/7  1/7 ][ -2 ]   [ -4/7 - 2/7 ]   [ -6/7 ]
Solution: x = -5/7, y = -6/7.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 35

የክሬመር ህግ ምሳሌ፡
{ 2x - 5y = 23
{ 4x + 6y = -2
D = 32፣ D₁ = 128 ⟹ x = 4
D₂ = -96 ⟹ y = -3
መፍትሔ፡ {(4, -3)}

3. የማትሪክስ ኢንቨርስ ዘዴ (Inverse Method)፡
AX = b ሆኖ A ኢንቨርቲብል ከሆነ፡
X = A⁻¹b ነጠላ መፍትሔ ነው።

ቴዎረም፡ ካሬ ማትሪክስ A ኢንቨርስ ያለው det(A) ≠ 0 ሲሆን ብቻ ነው።

ምሳሌ፡ { x - 2y = 1፤ 4x - y = -2
A⁻¹ = (1/7)[-1 2; -4 1]
X = A⁻¹b = [-5/7; -6/7]`,
    formulas: [
      { name: 'Matrix Inverse Solution', formula: 'X = A⁻¹b', explanation: 'Direct solution of linear system via inverse matrix.' }
    ]
  },
  {
    pdfPageNumber: 36,
    bookPageLabel: 'Page 36',
    chapterNumber: 2,
    sectionRef: '2.8',
    titleEn: 'Eigenvalues and Eigenvectors — Characteristic Equation det(A - λI) = 0',
    titleAm: 'አይገንቫልዩዎች እና አይገንቬክተሮች — የባህሪ እኩልታ det(A - λI) = 0',
    subtopicEn: 'Definition AX = λX, Characteristic Polynomial, Steps to Compute Eigenvalues and Eigenvectors, 2×2 Solved Example',
    subtopicAm: 'የአይገንቫልዩ ትርጓሜ AX = λX፣ የባህሪ ፖሊኖሚያል፣ የአይገን ስሌት ደረጃዎች፣ የተሰራ ምሳሌ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 14

EIGEN VALUES AND EIGEN VECTORS
Matrix Eigenvalue problems concern the solution of vector equations:
AX = λX ..... (1)
where A is a given square matrix, X is an unknown non-zero vector and λ is an unknown scalar.
Clearly, X = 0 is a trivial solution of (1), but has no practical application. Thus we seek non-zero solution vectors X ≠ 0 called Eigenvectors (characteristic vectors) of A.

How to find an Eigenvalue of A:
AX = λX ⟺ AX - λX = 0 ⟺ (A - λI)X = 0
By Cramer’s rule, non-zero solutions exist iff det(A - λI) = 0 (meaning A - λI is not invertible).

Definition 1: The polynomial det(A - λI) is called the characteristic polynomial of square matrix A.
Definition 2: The equation det(A - λI) = 0 is called the characteristic equation.

To compute Eigenvalues and Eigenvectors:
Step 1: Solve the characteristic equation det(A - λI) = 0 to obtain the eigenvalues λ₁, λ₂, ..., λₙ.
Step 2: For each eigenvalue λᵢ, solve the homogeneous system (A - λᵢI)X = 0 to get the corresponding eigenvector(s) X.

Example 1: Find the eigenvalues and eigenvectors for A = [ -5  2 ]
                                                        [  2 -2 ]
Solution:
Characteristic polynomial:
det(A - λI) = | -5-λ    2  | = (-5 - λ)(-2 - λ) - 4 = λ² + 7λ + 10 - 4 = λ² + 7λ + 6 = (λ + 6)(λ + 1) = 0.
Therefore, the eigenvalues are: λ₁ = -6  and  λ₂ = -1.

i. Eigenvector corresponding to λ₁ = -6:
(A - λ₁I)X = 0 ⟹ (A + 6I)X = 0:
[ 1  2 ][ x ] = [ 0 ] ⟹ x + 2y = 0 ⟹ x = -2y.
[ 2  4 ][ y ]   [ 0 ]`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 36

አይገንቫልዩዎች እና አይገንቬክተሮች (Eigenvalues & Eigenvectors)፡
AX = λX እኩልታን የሚያሟላ ዜሮ ያልሆነ ቬክተር X አይገንቬክተር ሲባል እስካላሩ λ አይገንቫልዩ ይባላል።
(A - λI)X = 0 ዜሮ ያልሆነ መፍትሔ እንዲኖረው det(A - λI) = 0 መሆን አለበት።

ትርጓሜዎች፡
1. det(A - λI) የ A የባህሪ ፖሊኖሚያል (Characteristic Polynomial) ይባላል።
2. det(A - λI) = 0 የባህሪ እኩልታ (Characteristic Equation) ይባላል።

የስሌት ደረጃዎች፡
ደረጃ 1፡ det(A - λI) = 0 በመፍታት አይገንቫልዩዎችን (λ) ማግኘት።
ደረጃ 2፡ ለእያንዳንዱ λᵢ፣ (A - λᵢI)X = 0 በመፍታት አይገንቬክተሮችን ማግኘት።

ምሳሌ፡ A = [-5 2; 2 -2]
(λ + 6)(λ + 1) = 0 ⟹ λ₁ = -6፣ λ₂ = -1
ለ λ₁ = -6፡ x + 2y = 0 ⟹ x = -2y`,
    formulas: [
      { name: 'Characteristic Equation', formula: 'det(A - λI) = 0', explanation: 'Equation whose roots are the eigenvalues of matrix A.' },
      { name: 'Eigenvector Equation', formula: '(A - λI)X = 0', explanation: 'Homogeneous linear system whose non-trivial solutions are eigenvectors.' }
    ]
  },
  {
    pdfPageNumber: 37,
    bookPageLabel: 'Page 37',
    chapterNumber: 2,
    sectionRef: '2.8.1',
    titleEn: 'Solved 2×2 and 3×3 Eigenvector Systems & Diagonalization Overview',
    titleAm: 'የ2×2 እና 3×3 ማትሪክሶች አይገንቬክተር ምሳሌዎች እና ማጠቃለያ',
    subtopicEn: 'Eigenvector for λ=-6, Eigenvector for λ=-1, 3×3 Characteristic Polynomial -λ(λ+4)(λ-3)=0, Eigenvalues 0, -4, 3',
    subtopicAm: 'የተሰሩ አይገንቬክተሮች፣ የ3×3 ማትሪክስ አይገንቫልዩዎች (0, -4, 3) እና አይገንቬክተሮች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 2: Page 15

Thus for λ₁ = -6:
Let y = a, then x = -2a:
X = [ x ] = [ -2a ] = a [ -2 ],  a ∈ ℝ.
    [ y ]   [   a ]     [  1 ]
Therefore, X = [ -2 ] is the eigenvector corresponding to λ₁ = -6.
               [  1 ]

ii. Similarly, for λ₂ = -1:
(A + I)X = 0 ⟹ [ -4  2 ][ x ] = [ 0 ] ⟹ -4x + 2y = 0 ⟹ y = 2x.
                [  2 -1 ][ y ]   [ 0 ]
Let x = a, then y = 2a ⟹ X = a [ 1 ] ⟹ Eigenvector is [ 1 ].
                                [ 2 ]                  [ 2 ]

Solution ii: 3 × 3 Example:
A = [  1  2  1 ]
    [  6 -1  0 ]
    [ -1 -2 -1 ]
Characteristic polynomial:
det(A - λI) = | 1-λ   2    1  | = -λ(λ + 4)(λ - 3) = 0.
              |  6  -1-λ   0  |
              | -1   -2  -1-λ |
The characteristic equation is -λ(λ + 4)(λ - 3) = 0.
Thus, the eigenvalues are λ₁ = 0, λ₂ = -4, and λ₃ = 3.

i. Eigenvector corresponding to λ₁ = 0:
(A - 0I)X = 0 ⟹ AX = 0:
{  x + 2y + z = 0
{ 6x - y = 0 ⟹ y = 6x
{ -x - 2y - z = 0
Substitute y = 6x into x + 2(6x) + z = 0 ⟹ 13x + z = 0 ⟹ z = -13x.
Let x = a ⟹ X = a [   1  ], a ∈ ℝ.
                   [   6  ]
                   [ -13  ]
Therefore, X = [ 1, 6, -13 ]ᵗ is the eigenvector for λ₁ = 0.

ii. For λ₂ = -4: Eigenvector is X = [ -1, 2, 1 ]ᵗ.
iii. For λ₃ = 3: Eigenvector can be found similarly.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 37

ለ λ₁ = -6 አይገንቬክተር፡ X = [-2, 1]ᵗ
ለ λ₂ = -1 አይገንቬክተር፡ X = [1, 2]ᵗ

የ 3 × 3 ማትሪክስ ምሳሌ፡
A = [1 2 1; 6 -1 0; -1 -2 -1]
የባህሪ እኩልታ፡ -λ(λ + 4)(λ - 3) = 0
አይገንቫልዩዎች፡ λ₁ = 0፣ λ₂ = -4፣ λ₃ = 3

ለ λ₁ = 0፡
{ x + 2y + z = 0
{ 6x - y = 0 ⟹ y = 6x
{ -x - 2y - z = 0 ⟹ z = -13x
አይገንቬክተር፡ X = [1, 6, -13]ᵗ

ለ λ₂ = -4፡ አይገንቬክተር X = [-1, 2, 1]ᵗ ይሆናል።`,
    formulas: [
      { name: '3×3 Eigenvalues', formula: 'λ₁ = 0, λ₂ = -4, λ₃ = 3', explanation: 'Roots of third-degree characteristic polynomial.' }
    ]
  }
];
