import { OfficialPdfPage } from './types';

export const mathCh4Pages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 53,
    bookPageLabel: 'Page 53',
    chapterNumber: 4,
    sectionRef: '4.1',
    titleEn: 'Chapter 4: Derivatives and Applications — 4.1 The Tangent Line Problem',
    titleAm: 'ምዕራፍ 4፡ ዲሪቬቲቭ እና ተግባራዊ ጥቅሞቹ — 4.1 የታንጀንት መስመር ችግር እና የዲሪቬቲቭ ምንነት',
    subtopicEn: 'Secant Line Slope m_sec, Limit Formulation of Tangent Slope m_tan, Alternative Increment Form h = x - a',
    subtopicAm: 'የሲካንት መስመር ስሎፕ፣ የታንጀንት ስሎፕ ሊሚት ቀመር፣ የ h = x - a አማራጭ ቀመር',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Derivatives and Applications

4.1 Definition of the Derivative of a Function
The problem of finding the tangent line to a curve and the problem of finding the velocity of an object both involve finding the same type of limit. This special type of limit is called the derivative.

The Tangent Line Problem:
Let P(a, f(a)) be a point on the curve y = f(x) and let Q(x, f(x)) be a nearby point with x ≠ a.
The slope of the secant line passing through P and Q is:
m_sec = (f(x) - f(a)) / (x - a)

As Q approaches P along the curve, x approaches a. If m_sec approaches a finite number m, then we define the tangent line to be the line through P with slope m:
m = lim_{x ⟶ a} (f(x) - f(a)) / (x - a)

Alternative Form:
Let h = x - a, then x = a + h. As x ⟶ a, h ⟶ 0.
The slope of the tangent line can be rewritten as:
m = lim_{h ⟶ 0} (f(a + h) - f(a)) / h`,
    contentAm: `አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ (AASTU)
የሂሳብ ትምህርት ክፍል
ምዕራፍ 4፡ ዲሪቬቲቭ እና ተግባራዊ ጥቅሞቹ

4.1 የዲሪቬቲቭ ትርጓሜ
የታንጀንት መስመር ስሎፕ እና የእንቅስቃሴ ፍጥነት (Velocity) ሁለቱም አንድ አይነት ልዩ ሊሚት ናቸው። ይህ ሊሚት ዲሪቬቲቭ (Derivative) ይባላል።

የታንጀንት መስመር ችግር (The Tangent Line Problem)፡
በከርቩ y = f(x) ላይ P(a, f(a)) እና Q(x, f(x)) ሁለት ነጥቦች ቢሆኑ፣ በነዚህ ነጥቦች የሚያልፈው ሲካንት መስመር ስሎፕ፡
m_sec = (f(x) - f(a)) / (x - a)

Q ወደ P ሲጠጋ (x ⟶ a)፣ የታንጀንቱ ስሎፕ የሚከተለው ሊሚት ይሆናል፡
m = lim_{x ⟶ a} (f(x) - f(a)) / (x - a)

አማራጭ ቀመር (በ h = x - a)፡
m = lim_{h ⟶ 0} (f(a + h) - f(a)) / h`,
    formulas: [
      { name: 'Tangent Slope Limit', formula: 'm_tan = lim_{h ⟶ 0} [f(a + h) - f(a)] / h', explanation: 'Instantaneous rate of change of f at x = a.' }
    ]
  },
  {
    pdfPageNumber: 54,
    bookPageLabel: 'Page 54',
    chapterNumber: 4,
    sectionRef: '4.1.1',
    titleEn: 'Formal Definition of Derivative Function f’(x), Notations & Polynomial Example',
    titleAm: 'የዲሪቬቲቭ ፈንክሽን f’(x) ፎርማል ትርጓሜ፣ ምልክቶቹ እና የፖሊኖሚያል ምሳሌ',
    subtopicEn: 'Definition of f’(x) as a Limit, Common Notations (dy/dx, f’(x), D_x y), Evaluation of f(x) = x² - 8x + 9',
    subtopicAm: 'የ f’(x) ሊሚት ትርጓሜ፣ የዲሪቬቲቭ መደበኛ ምልክቶች፣ የ f(x) = x² - 8x + 9 ስሌት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 2

Definition (The Derivative of a Function):
The derivative of a function f with respect to x is the function f' defined by:
f'(x) = lim_{h ⟶ 0} (f(x + h) - f(x)) / h
provided this limit exists.

If f'(x) exists at a point x, we say f is differentiable at x. If f'(x) exists for all x in an open interval (a, b), we say f is differentiable on (a, b).

Notations for the Derivative:
f'(x) = y' = dy/dx = df/dx = (d/dx)[f(x)] = D_x[f(x)]

Example 1: Find the derivative of f(x) = x² - 8x + 9 using the definition.
Solution:
f'(x) = lim_{h ⟶ 0} (f(x + h) - f(x)) / h
= lim_{h ⟶ 0} [((x + h)² - 8(x + h) + 9) - (x² - 8x + 9)] / h
= lim_{h ⟶ 0} [x² + 2xh + h² - 8x - 8h + 9 - x² + 8x - 9] / h
= lim_{h ⟶ 0} [2xh + h² - 8h] / h
= lim_{h ⟶ 0} [h(2x + h - 8)] / h
= lim_{h ⟶ 0} (2x + h - 8) = 2x - 8.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 54

የዲሪቬቲቭ ትርጓሜ፡
f'(x) = lim_{h ⟶ 0} (f(x + h) - f(x)) / h (ሊሚቱ ካለ)

የዲሪቬቲቭ ምልክቶች፡
f'(x) = y' = dy/dx = d/dx[f(x)]

ምሳሌ 1፡ የ f(x) = x² - 8x + 9 ዲሪቬቲቭ በሊሚት ትርጓሜ ፈልጉ፡
f'(x) = lim_{h ⟶ 0} [((x + h)² - 8(x + h) + 9) - (x² - 8x + 9)] / h
= lim_{h ⟶ 0} [2xh + h² - 8h] / h = 2x - 8`,
    formulas: [
      { name: 'Derivative Function', formula: 'f\'(x) = lim_{h ⟶ 0} [f(x + h) - f(x)] / h', explanation: 'General definition of derivative for any arbitrary point x.' }
    ]
  },
  {
    pdfPageNumber: 55,
    bookPageLabel: 'Page 55',
    chapterNumber: 4,
    sectionRef: '4.1.2',
    titleEn: 'Tangent Line to y = √x & Theorem: Differentiability Implies Continuity',
    titleAm: 'የ y = √x ታንጀንት መስመር እና ቴዎረም፡ ዲፈረንሼብል መሆን ቀጣይነትን ያረጋግጣል',
    subtopicEn: 'Tangent Equation to y = √x at (4, 2), Theorem: f differentiable at a ⟹ f continuous at a, Analytical Proof',
    subtopicAm: 'በ (4, 2) ላይ የ y = √x ታንጀንት መስመር፣ ዲፈረንሼብሊቲ ቀጣይነትን እንደሚያረጋግጥ የሚያሳይ ቴዎረም እና ማረጋገጫ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 3

Example 2: Find the equation of the tangent line to the curve y = √x at the point (4, 2).
Solution:
Slope m = f'(4) = lim_{h ⟶ 0} (√(4 + h) - √4) / h = lim_{h ⟶ 0} (√(4 + h) - 2) / h
Multiply numerator and denominator by (√(4 + h) + 2):
= lim_{h ⟶ 0} (4 + h - 4) / [h(√(4 + h) + 2)] = lim_{h ⟶ 0} 1 / (√(4 + h) + 2) = 1 / (2 + 2) = 1/4.
Equation of tangent line at (4, 2):
y - y₁ = m(x - x₁) ⟹ y - 2 = (1/4)(x - 4) ⟹ y = (1/4)x + 1.

Differentiability and Continuity:
Theorem: If f is differentiable at a, then f is continuous at a.

Proof:
We want to show that lim_{x ⟶ a} f(x) = f(a), or equivalently lim_{x ⟶ a} [f(x) - f(a)] = 0.
For x ≠ a:
f(x) - f(a) = [(f(x) - f(a)) / (x - a)] · (x - a)
Taking limits as x ⟶ a:
lim_{x ⟶ a} [f(x) - f(a)] = lim_{x ⟶ a} [(f(x) - f(a)) / (x - a)] · lim_{x ⟶ a} (x - a)
= f'(a) · 0 = 0.
Therefore lim_{x ⟶ a} f(x) = f(a), so f is continuous at a.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 55

ምሳሌ 2፡ በ (4, 2) ላይ የ y = √x ታንጀንት መስመር እኩልታ ፈልጉ፡
ስሎፕ፡ m = f'(4) = 1/4
የታንጀንት እኩልታ፡ y - 2 = (1/4)(x - 4) ⟹ y = (1/4)x + 1

ቴዎረም፡ f በ a ላይ ዲፈረንሼብል ከሆነ፣ f በ a ላይ የግድ ቀጣይ (Continuous) ነው።
ማረጋገጫ፡
lim [f(x) - f(a)] = lim {[(f(x) - f(a))/(x - a)] · (x - a)} = f'(a) · 0 = 0
ስለዚህ lim f(x) = f(a) ይሆናል።`,
    formulas: [
      { name: 'Differentiability Implies Continuity', formula: 'f\'(a) exists ⟹ lim_{x ⟶ a} f(x) = f(a)', explanation: 'Differentiability is a strictly stronger condition than continuity.' }
    ]
  },
  {
    pdfPageNumber: 56,
    bookPageLabel: 'Page 56',
    chapterNumber: 4,
    sectionRef: '4.1.3',
    titleEn: 'Failure of Differentiability: Corners, Cusps, Vertical Tangents & Discontinuities',
    titleAm: 'ዲፈረንሼብል አለመሆን ምክንያቶች፡ ኩርባዎች (ኮርነር)፣ ቁልቁል ታንጀንት እና መቆራረጥ',
    subtopicEn: 'Counterexample: f(x) = |x| at x = 0, Four Geometric Causes of Non-Differentiability',
    subtopicAm: 'የተቃራኒ ምሳሌ፡ f(x) = |x| በ 0 ላይ ቀጣይ ሆኖ ዲሪቬቲቭ የለውም፣ 4ቱ ዲሪቬቲቭ የማይገኝባቸው ሁኔታዎች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 4

Remark: The converse of the theorem is NOT true!
A function can be continuous at a point without being differentiable there.

Example: The absolute value function f(x) = |x| is continuous at x = 0, but is it differentiable at x = 0?
Check one-sided limits of difference quotient:
Right derivative: lim_{h ⟶ 0⁺} (|0 + h| - |0|) / h = lim_{h ⟶ 0⁺} h/h = 1.
Left derivative: lim_{h ⟶ 0⁻} (|0 + h| - |0|) / h = lim_{h ⟶ 0⁻} (-h)/h = -1.
Since the right and left derivatives are not equal (1 ≠ -1), f'(0) does not exist!

Four Cases Where a Function Fails to be Differentiable at x = a:
1. Corner / Kink: The graph has a sharp turn (e.g., y = |x| at x = 0).
2. Cusp: Left and right slopes approach opposite infinities (e.g., y = x^(2/3) at x = 0).
3. Vertical Tangent: Slope approaches infinity (e.g., y = x^(1/3) at x = 0, where f'(0) = ∞).
4. Discontinuity: Any break, jump, or hole in the graph automatically prevents differentiability.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 56

ማስታወሻ፡ የቴዎረሙ ተቃራኒ እውነት አይደለም! (ቀጣይነት ዲፈረንሼብል መሆንን አያረጋግጥም)።
ምሳሌ፡ f(x) = |x| በ x = 0 ላይ ቀጣይ ቢሆንም ዲሪቬቲቭ የለውም፡
የቀኝ ዲሪቬቲቭ = 1፤ የግራ ዲሪቬቲቭ = -1 ⟹ f'(0) የለም!

አንድ ፈንክሽን ዲፈረንሼብል የማይሆንባቸው 4 ምክንያቶች፡
1. የሾለ ጥግ ወይም ኩርባ (Corner) ሲኖረው
2. ወደ ተቃራኒ አቅጣጫ የሚያመለክት የሾለ ጫፍ (Cusp)
3. ቋሚ ታንጀንት (Vertical Tangent፣ ስሎፑ ∞ ሲሆን)
4. መቆራረጥ (Discontinuity) ሲኖር።`,
    formulas: [
      { name: 'Non-Differentiability of |x|', formula: 'lim_{h⟶0⁺} (|h|/h) = 1 ≠ -1 = lim_{h⟶0⁻} (|h|/h)', explanation: 'One-sided derivative mismatch at sharp corner.' }
    ]
  },
  {
    pdfPageNumber: 57,
    bookPageLabel: 'Page 57',
    chapterNumber: 4,
    sectionRef: '4.2',
    titleEn: '4.2 Basic Differentiation Rules (Power, Product, Quotient Rules)',
    titleAm: '4.2 መሰረታዊ የዲሪቬቲቭ ህጎች (የፓወር፣ የብዜት እና የክፍፍል ህጎች)',
    subtopicEn: 'Constant Rule, Power Rule d/dx[xⁿ] = n xⁿ⁻¹, Constant Multiple Rule, Sum/Difference Rule, Product Rule, Quotient Rule',
    subtopicAm: 'የቋሚ ቁጥር ህግ፣ የፓወር ህግ፣ የድምር/ልዩነት ህግ፣ የብዜት ህግ፣ የክፍፍል ህግ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 5

4.2 Basic Differentiation Rules
Let f and g be differentiable functions and c any constant:

1. Constant Rule:
(d/dx)[c] = 0

2. Power Rule:
For any real number n:
(d/dx)[xⁿ] = n xⁿ⁻¹

3. Constant Multiple Rule:
(d/dx)[c f(x)] = c f'(x)

4. Sum and Difference Rule:
(d/dx)[f(x) ± g(x)] = f'(x) ± g'(x)

5. Product Rule:
(d/dx)[f(x) · g(x)] = f'(x) g(x) + f(x) g'(x)

6. Quotient Rule:
(d/dx)[f(x) / g(x)] = [f'(x) g(x) - f(x) g'(x)] / [g(x)]²,  provided g(x) ≠ 0`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 57

4.2 መሰረታዊ የዲሪቬቲቭ ህጎች
1. የቋሚ ቁጥር ዲሪቬቲቭ፡ d/dx[c] = 0
2. የፓወር ህግ፡ d/dx[xⁿ] = n xⁿ⁻¹
3. የእስካላር ብዜት ህግ፡ d/dx[c f(x)] = c f'(x)
4. የድምርና መቀነስ ህግ፡ d/dx[f ± g] = f' ± g'
5. የብዜት ህግ (Product Rule)፡ d/dx[f · g] = f' g + f g'
6. የክፍፍል ህግ (Quotient Rule)፡ d/dx[f / g] = (f' g - f g') / g²`,
    formulas: [
      { name: 'Product Rule', formula: '(fg)\' = f\'g + fg\'', explanation: 'Derivative of product of two functions.' },
      { name: 'Quotient Rule', formula: '(f/g)\' = (f\'g - fg\') / g²', explanation: 'Derivative of rational fraction of functions.' }
    ]
  },
  {
    pdfPageNumber: 58,
    bookPageLabel: 'Page 58',
    chapterNumber: 4,
    sectionRef: '4.2.1',
    titleEn: 'Derivatives of Trigonometric Functions with Limit Proofs',
    titleAm: 'የትሪጎኖሜትሪክ ፈንክሽኖች ዲሪቬቲቭ ከሊሚት ማረጋገጫዎች ጋር',
    subtopicEn: 'd/dx[sin x] = cos x, d/dx[cos x] = -sin x, d/dx[tan x] = sec²x, d/dx[cot x] = -csc²x, d/dx[sec x] = sec x tan x, d/dx[csc x] = -csc x cot x',
    subtopicAm: 'የ 6ቱ ትሪጎኖሜትሪክ ፈንክሽኖች ዲሪቬቲቭ ቀመሮች እና የተሰሩ ምሳሌዎች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 6

Derivatives of Trigonometric Functions:
1. (d/dx)[sin x] = cos x
2. (d/dx)[cos x] = -sin x
3. (d/dx)[tan x] = sec²x
4. (d/dx)[cot x] = -csc²x
5. (d/dx)[sec x] = sec x tan x
6. (d/dx)[csc x] = -csc x cot x

Proof of (d/dx)[sin x] = cos x:
f'(x) = lim_{h ⟶ 0} [sin(x + h) - sin x] / h
Using identity sin(A + B) = sin A cos B + cos A sin B:
= lim_{h ⟶ 0} [sin x cos h + cos x sin h - sin x] / h
= lim_{h ⟶ 0} [sin x (cos h - 1) / h + cos x (sin h / h)]
= sin x · lim_{h ⟶ 0} ((cos h - 1) / h) + cos x · lim_{h ⟶ 0} (sin h / h)
= sin x · (0) + cos x · (1) = cos x.

Proof of (d/dx)[tan x] = sec²x:
d/dx [sin x / cos x] = [(cos x)(cos x) - (sin x)(-sin x)] / cos²x
= (cos²x + sin²x) / cos²x = 1 / cos²x = sec²x.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 58

የትሪጎኖሜትሪክ ፈንክሽኖች ዲሪቬቲቭ፡
1. d/dx[sin x] = cos x
2. d/dx[cos x] = -sin x
3. d/dx[tan x] = sec²x
4. d/dx[cot x] = -csc²x
5. d/dx[sec x] = sec x tan x
6. d/dx[csc x] = -csc x cot x

የ sin x ዲሪቬቲቭ ማረጋገጫ፡
lim (sin h / h) = 1 እና lim ((cos h - 1) / h) = 0 ስለሆነ፡
d/dx[sin x] = cos x ይሆናል።`,
    formulas: [
      { name: 'Sine Derivative', formula: 'd/dx [sin x] = cos x', explanation: 'Fundamental derivative of sine.' },
      { name: 'Tangent Derivative', formula: 'd/dx [tan x] = sec²x', explanation: 'Derived via quotient rule on sin(x)/cos(x).' }
    ]
  },
  {
    pdfPageNumber: 59,
    bookPageLabel: 'Page 59',
    chapterNumber: 4,
    sectionRef: '4.3',
    titleEn: '4.3 The Chain Rule for Composite Functions',
    titleAm: '4.3 ለተደራራቢ ፈንክሽኖች የቼይን ህግ (The Chain Rule)',
    subtopicEn: 'Theorem: (f ∘ g)’(x) = f’(g(x)) · g’(x), Leibniz Notation dy/dx = (dy/du)(du/dx), Solved High-Power Examples',
    subtopicAm: 'የቼይን ህግ ቴዎረም፣ ላይብኒዝ ኖቴሽን dy/dx = (dy/du)(du/dx)፣ የከፍተኛ ፓወር ምሳሌዎች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 7

4.3 The Chain Rule
If g is differentiable at x and f is differentiable at g(x), then the composite function F = f ∘ g defined by F(x) = f(g(x)) is differentiable at x and F' is given by:
F'(x) = f'(g(x)) · g'(x)

In Leibniz notation, if y = f(u) and u = g(x) are both differentiable functions, then:
dy/dx = (dy/du) · (du/dx)

General Power Rule:
If n is any real number and u = g(x) is differentiable, then:
(d/dx)[uⁿ] = n uⁿ⁻¹ · (du/dx)

Example 1: Find F'(x) if F(x) = (x³ - 1)¹⁰⁰.
Solution:
Let u = x³ - 1, then F(u) = u¹⁰⁰.
F'(x) = 100(x³ - 1)⁹⁹ · (d/dx)(x³ - 1) = 100(x³ - 1)⁹⁹ · (3x²) = 300x² (x³ - 1)⁹⁹.

Example 2: Differentiate y = sin(x² + 3x).
Solution:
dy/dx = cos(x² + 3x) · (d/dx)(x² + 3x) = (2x + 3) cos(x² + 3x).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 59

4.3 የቼይን ህግ (The Chain Rule)
F(x) = f(g(x)) ተደራራቢ ፈንክሽን ቢሆን፡
F'(x) = f'(g(x)) · g'(x)

በላይብኒዝ ኖቴሽን (Leibniz notation)፡
dy/dx = (dy/du) · (du/dx)

ምሳሌ 1፡ F(x) = (x³ - 1)¹⁰⁰
F'(x) = 100(x³ - 1)⁹⁹ · (3x²) = 300x² (x³ - 1)⁹⁹

ምሳሌ 2፡ y = sin(x² + 3x)
dy/dx = (2x + 3) cos(x² + 3x)`,
    formulas: [
      { name: 'Chain Rule Formula', formula: 'd/dx [f(g(x))] = f\'(g(x)) · g\'(x)', explanation: 'Differentiating outer function evaluated at inner function times derivative of inner.' }
    ]
  },
  {
    pdfPageNumber: 60,
    bookPageLabel: 'Page 60',
    chapterNumber: 4,
    sectionRef: '4.4',
    titleEn: '4.4 Implicit Differentiation Technique & Geometric Curves',
    titleAm: '4.4 ኢምፕሊሲት ዲፈረንሼሽን እና ጂኦሜትሪያዊ ከርቮች',
    subtopicEn: 'Explicit vs Implicit Relations, Step-by-Step Implicit Differentiation Method, Applying Chain Rule to y-terms',
    subtopicAm: 'ኤክስፕሊሲት እና ኢምፕሊሲት ግንኙነቶች፣ የኢምፕሊሲት ዲሪቬቲቭ ስሌት ደረጃዎች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 8

4.4 Implicit Differentiation
Most functions have been expressed in explicit form: y = f(x).
However, some relations are given implicitly by an equation of the form F(x, y) = 0 (e.g., x² + y² = 25).
It may be difficult or impossible to solve for y explicitly in terms of x.

Method of Implicit Differentiation:
1. Differentiate both sides of the equation with respect to x, remembering that y is an implicit function of x.
2. Whenever you differentiate an expression involving y, multiply by dy/dx (due to the chain rule, e.g., (d/dx)[y³] = 3y² · (dy/dx)).
3. Collect all terms involving dy/dx on one side of the equation and move all other terms to the other side.
4. Factor out dy/dx.
5. Solve for dy/dx by dividing.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 60

4.4 ኢምፕሊሲት ዲፈረንሼሽን (Implicit Differentiation)
አብዛኛዎቹ ፈንክሽኖች y = f(x) ተብለው በግልጽ (Explicitly) ይቀመጣሉ። ነገር ግን እንደ x² + y² = 25 ያሉት y በግልጽ ያልተነጠለባቸው ኢምፕሊሲት ይባላሉ።

የአሰራር ደረጃዎች፡
1. ሁለቱንም ወገኖች በ x አንጻር ዲፈረንሼት ማድረግ (y የ x ፈንክሽን መሆኑን በማስታወስ)።
2. y ያለበትን አባል ዲፈረንሼት ባደረግን ቁጥር በ dy/dx ማባዛት (ለምሳሌ d/dx[y³] = 3y² y')።
3. dy/dx ያለባቸውን ወደ ግራ፣ ሌሎችን ወደ ቀኝ ማሰባሰብ።
4. dy/dx ን የጋራ ማውጣት።
5. dy/dx ን ነጥሎ ማስላት።`,
    formulas: [
      { name: 'Implicit Chain Rule', formula: 'd/dx [yⁿ] = n yⁿ⁻¹ (dy/dx)', explanation: 'Application of chain rule to implicit dependent variable y.' }
    ]
  },
  {
    pdfPageNumber: 61,
    bookPageLabel: 'Page 61',
    chapterNumber: 4,
    sectionRef: '4.4.1',
    titleEn: 'Circle & Folium of Descartes Solved Implicit Tangent Problems',
    titleAm: 'የክብ እና የዴካርት ፎሊየም ከርቭ ታንጀንት ስሌት ምሳሌዎች',
    subtopicEn: 'Circle x² + y² = 25 Tangent at (3, 4) (3x + 4y = 25), Folium of Descartes x³ + y³ = 6xy Tangent at (3, 3) (x + y = 6)',
    subtopicAm: 'የክብ x² + y² = 25 ታንጀንት በ (3, 4)፣ የዴካርት ፎሊየም x³ + y³ = 6xy ታንጀንት በ (3, 3)',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 9

Example 1: Find dy/dx and the equation of the tangent line to the circle x² + y² = 25 at the point (3, 4).
Solution:
Differentiate both sides with respect to x:
(d/dx)[x² + y²] = (d/dx)[25]
2x + 2y (dy/dx) = 0 ⟹ 2y (dy/dx) = -2x ⟹ dy/dx = -x/y.
At the point (3, 4):
Slope m = -3/4.
Tangent line equation:
y - 4 = (-3/4)(x - 3) ⟹ 4(y - 4) = -3(x - 3) ⟹ 3x + 4y = 25.

Example 2: Find dy/dx for the Folium of Descartes x³ + y³ = 6xy, and find the tangent line at (3, 3).
Solution:
Differentiate implicitly:
3x² + 3y² (dy/dx) = 6(1 · y + x (dy/dx))
3x² + 3y² (dy/dx) = 6y + 6x (dy/dx)
(3y² - 6x) (dy/dx) = 6y - 3x²
dy/dx = (6y - 3x²) / (3y² - 6x) = (2y - x²) / (y² - 2x).
At (3, 3):
Slope m = (2(3) - 3²) / (3² - 2(3)) = (6 - 9) / (9 - 6) = -3 / 3 = -1.
Tangent line: y - 3 = -1(x - 3) ⟹ x + y = 6.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 61

ምሳሌ 1፡ በ (3, 4) ላይ የክብ x² + y² = 25 ታንጀንት እኩልታ፡
2x + 2y y' = 0 ⟹ y' = -x/y
በ (3, 4) ላይ ስሎፕ m = -3/4
የታንጀንት መስመር፡ 3x + 4y = 25

ምሳሌ 2፡ የዴካርት ፎሊየም x³ + y³ = 6xy በ (3, 3) ላይ፡
3x² + 3y² y' = 6y + 6x y'
y' = (2y - x²) / (y² - 2x)
በ (3, 3) ላይ ስሎፕ m = -1
የታንጀንት መስመር፡ x + y = 6`,
    formulas: [
      { name: 'Circle Slope', formula: 'dy/dx = -x/y', explanation: 'Orthogonal gradient slope for any origin-centered circle.' }
    ]
  },
  {
    pdfPageNumber: 62,
    bookPageLabel: 'Page 62',
    chapterNumber: 4,
    sectionRef: '4.4.2',
    titleEn: 'Derivatives of Inverse Functions & Inverse Trigonometric Functions',
    titleAm: 'የኢንቨርስ ፈንክሽኖች እና የኢንቨርስ ትሪጎኖሜትሪክ ፈንክሽኖች ዲሪቬቲቭ',
    subtopicEn: 'Inverse Derivative Formula (f⁻¹)’(y) = 1/f’(x), Standard Formulas for arcsin, arccos, arctan, arccot, arcsec, arccsc',
    subtopicAm: 'የኢንቨርስ ዲሪቬቲቭ ቀመር፣ የ 6ቱ ኢንቨርስ ትሪጎኖሜትሪክ ፈንክሽኖች ዲሪቬቲቭ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 10

Derivatives of Inverse Functions:
Theorem: If f is a one-to-one differentiable function with inverse f⁻¹ and f'(f⁻¹(a)) ≠ 0, then:
(f⁻¹)'(a) = 1 / f'(f⁻¹(a))

Derivatives of Inverse Trigonometric Functions:
1. (d/dx)[arcsin x] = 1 / √(1 - x²),  -1 < x < 1
2. (d/dx)[arccos x] = -1 / √(1 - x²),  -1 < x < 1
3. (d/dx)[arctan x] = 1 / (1 + x²)
4. (d/dx)[arccot x] = -1 / (1 + x²)
5. (d/dx)[arcsec x] = 1 / (|x| √(x² - 1)),  |x| > 1
6. (d/dx)[arccsc x] = -1 / (|x| √(x² - 1)),  |x| > 1

Proof of (d/dx)[arctan x] = 1 / (1 + x²):
Let y = arctan x ⟹ tan y = x.
Differentiating implicitly with respect to x:
sec²y (dy/dx) = 1 ⟹ dy/dx = 1 / sec²y = 1 / (1 + tan²y) = 1 / (1 + x²).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 62

የኢንቨርስ ፈንክሽን ዲሪቬቲቭ ቴዎረም፡
(f⁻¹)'(a) = 1 / f'(f⁻¹(a))

የኢንቨርስ ትሪጎኖሜትሪክ ዲሪቬቲቭ ቀመሮች፡
1. d/dx[arcsin x] = 1 / √(1 - x²)
2. d/dx[arccos x] = -1 / √(1 - x²)
3. d/dx[arctan x] = 1 / (1 + x²)
4. d/dx[arccot x] = -1 / (1 + x²)

የ arctan x ማረጋገጫ፡
y = arctan x ⟹ tan y = x ⟹ sec²y y' = 1
y' = 1 / sec²y = 1 / (1 + tan²y) = 1 / (1 + x²)`,
    formulas: [
      { name: 'Arctangent Derivative', formula: 'd/dx [arctan x] = 1 / (1 + x²)', explanation: 'Key algebraic derivative of inverse tangent.' }
    ]
  },
  {
    pdfPageNumber: 63,
    bookPageLabel: 'Page 63',
    chapterNumber: 4,
    sectionRef: '4.4.3',
    titleEn: 'Exponential, Logarithmic & Logarithmic Differentiation Technique',
    titleAm: 'የኤክስፖኔንሺያል፣ ሎጋሪዝሚክ ፈንክሽኖች እና ሎጋሪዝሚክ ዲፈረንሼሽን',
    subtopicEn: 'd/dx[eˣ] = eˣ, d/dx[aˣ] = aˣ ln a, d/dx[ln x] = 1/x, Logarithmic Differentiation Steps & Solution for y = xˣ',
    subtopicAm: 'የ eˣ እና ln x ዲሪቬቲቭ፣ የሎጋሪዝሚክ ዲፈረንሼሽን ደረጃዎች፣ የ y = xˣ ስሌት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 11

Derivatives of Exponential and Logarithmic Functions:
1. (d/dx)[eˣ] = eˣ
2. (d/dx)[aˣ] = aˣ ln a,  (a > 0, a ≠ 1)
3. (d/dx)[ln x] = 1/x,  (x > 0)
4. (d/dx)[log_a x] = 1 / (x ln a)

Logarithmic Differentiation:
The calculation of derivatives of complicated functions involving products, quotients, or powers (such as y = [f(x)]^(g(x))) can often be simplified by taking logarithms first.

Steps:
1. Take natural logarithms of both sides: ln y = ln f(x), and use laws of logarithms to simplify.
2. Differentiate implicitly with respect to x: (1/y)(dy/dx) = (d/dx)[ln f(x)].
3. Multiply both sides by y to solve for dy/dx: dy/dx = y · (d/dx)[ln f(x)].

Example: Differentiate y = xˣ,  (x > 0).
Solution:
Take ln of both sides:
ln y = ln(xˣ) = x ln x
Differentiate implicitly:
(1/y) (dy/dx) = (1)(ln x) + x(1/x) = ln x + 1
dy/dx = y (ln x + 1) = xˣ (ln x + 1).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 63

የኤክስፖኔንሺያል እና ሎጋሪዝም ዲሪቬቲቭ፡
1. d/dx[eˣ] = eˣ
2. d/dx[aˣ] = aˣ ln a
3. d/dx[ln x] = 1/x
4. d/dx[log_a x] = 1 / (x ln a)

ሎጋሪዝሚክ ዲፈረንሼሽን (Logarithmic Differentiation)፡
እንደ y = xˣ ላሉ ፈንክሽኖች ሁለቱንም ወገን በ ln በማባዛት የሚሰራ ስልት ነው።
ምሳሌ፡ y = xˣ
ln y = x ln x
(1/y) y' = ln x + 1
y' = xˣ (ln x + 1)`,
    formulas: [
      { name: 'Variable Power Derivative', formula: 'd/dx [xˣ] = xˣ (ln x + 1)', explanation: 'Result of logarithmic differentiation on self-exponentiated variable.' }
    ]
  },
  {
    pdfPageNumber: 64,
    bookPageLabel: 'Page 64',
    chapterNumber: 4,
    sectionRef: '4.4.4',
    titleEn: 'Higher Order Derivatives & Kinematic Physical Interpretations',
    titleAm: 'የከፍተኛ ደረጃ ዲሪቬቲቭ እና የፊዚክስ የእንቅስቃሴ ትርጓሜዎች',
    subtopicEn: 'Second Derivative f’’(x), n-th Derivative f^(n)(x), Position s(t), Velocity v(t)=s’(t), Acceleration a(t)=s’’(t), Jerk j(t)=s’’’(t)',
    subtopicAm: 'ሁለተኛ ዲሪቬቲቭ፣ n-ኛ ዲሪቬቲቭ፣ የቦታ፣ የፍጥነት እና የፍጥነት ለውጥ (አክሴለሬሽን) ዝምድና',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 12

Higher Order Derivatives:
If f is a differentiable function, then its derivative f' is also a function, so f' may have a derivative of its own, denoted by:
(f')' = f'' = d²y / dx² = (d/dx)[dy/dx]
This is called the second derivative of f.

Similarly:
Third derivative: f'''(x) = y''' = d³y / dx³
n-th derivative: f^(n)(x) = y^(n) = dⁿy / dxⁿ

Physical Interpretation in Kinematics:
Let s = s(t) be the position function of an object moving along a straight line at time t:
1. Velocity: v(t) = s'(t) = ds/dt  (Rate of change of displacement with respect to time)
2. Speed: |v(t)| = |s'(t)|
3. Acceleration: a(t) = v'(t) = s''(t) = d²s / dt²  (Rate of change of velocity)
4. Jerk: j(t) = a'(t) = s'''(t) = d³s / dt³  (Rate of change of acceleration)`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 64

የከፍተኛ ደረጃ ዲሪቬቲቭ (Higher Order Derivatives)፡
- ሁለተኛ ዲሪቬቲቭ፡ f''(x) = d²y/dx²
- ሶስተኛ ዲሪቬቲቭ፡ f'''(x) = d³y/dx³
- n-ኛ ዲሪቬቲቭ፡ fⁿ(x) = dⁿy/dxⁿ

በእንቅስቃሴ ፊዚክስ ውስጥ ያለው ትርጉም፡
s(t) የቦታ ፈንክሽን ቢሆን፡
1. ፍጥነት (Velocity)፡ v(t) = s'(t)
2. ስፒድ (Speed)፡ |v(t)|
3. አክሴለሬሽን (Acceleration)፡ a(t) = v'(t) = s''(t)
4. ጀርክ (Jerk)፡ j(t) = a'(t) = s'''(t)`,
    formulas: [
      { name: 'Acceleration', formula: 'a(t) = s\'\'(t) = d²s/dt²', explanation: 'Second time-derivative of position.' }
    ]
  },
  {
    pdfPageNumber: 65,
    bookPageLabel: 'Page 65',
    chapterNumber: 4,
    sectionRef: '4.5',
    titleEn: 'Kinematics Solved Example & 4.5 Related Rates Problem Solving Strategy',
    titleAm: 'የእንቅስቃሴ ስሌት ምሳሌ እና 4.5 ተዛማጅ ፍጥነቶች (Related Rates) የመፍትሔ ስልት',
    subtopicEn: 'Motion Analysis of s(t) = t³ - 6t² + 9t, 5-Step Systematic Strategy for Related Rates Problems',
    subtopicAm: 'የ s(t) = t³ - 6t² + 9t እንቅስቃሴ ትንተና፣ 5ቱ የተዛማጅ ፍጥነቶች አፈታት ደረጃዎች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 13

Example (Kinematics):
The position of a particle is given by s(t) = t³ - 6t² + 9t, where t is in seconds and s in meters.
a) Find the velocity at time t.
b) What is the velocity after 2 s and after 4 s?
c) When is the particle at rest?
d) When is the particle moving forward (in the positive direction)?
e) Find the acceleration at time t and after 2 s.

Solution:
a) v(t) = s'(t) = 3t² - 12t + 9 = 3(t² - 4t + 3) = 3(t - 1)(t - 3).
b) v(2) = 3(2 - 1)(2 - 3) = -3 m/s;  v(4) = 3(4 - 1)(4 - 3) = 9 m/s.
c) At rest when v(t) = 0 ⟹ 3(t - 1)(t - 3) = 0 ⟹ t = 1 s and t = 3 s.
d) Moving forward when v(t) > 0 ⟹ t < 1 or t > 3 (for t ≥ 0: [0, 1) ∪ (3, ∞)).
e) a(t) = v'(t) = 6t - 12;  a(2) = 6(2) - 12 = 0 m/s².

4.5 Related Rates
In a related rates problem, the idea is to compute the rate of change of one quantity in terms of the rate of change of other quantities (which are known).

Strategy for Related Rates:
1. Read the problem carefully and draw a diagram if possible.
2. Assign variables to all quantities that change with time t.
3. Express the given information and the required rate in terms of derivatives.
4. Write an equation that relates the various variables.
5. Use the Chain Rule to differentiate both sides with respect to t.
6. Substitute the given values into the resulting equation and solve for the unknown rate.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 65

የእንቅስቃሴ ምሳሌ፡ s(t) = t³ - 6t² + 9t
a) v(t) = 3t² - 12t + 9
b) v(2) = -3 m/s፤ v(4) = 9 m/s
c) እረፍት ላይ የሚሆነው v(t) = 0 ሲሆን ነው ⟹ t = 1 ሰከንድ እና t = 3 ሰከንድ ላይ።
d) ወደፊት የሚጓዘው v(t) > 0 ሲሆን ነው ⟹ 0 ≤ t < 1 እና t > 3
e) a(t) = 6t - 12፤ a(2) = 0 m/s²

4.5 ተዛማጅ ፍጥነቶች (Related Rates)
የሚታወቁ የፍጥነት ለውጦችን በመጠቀም የማይታወቅ የፍጥነት ለውጥ በቼይን ህግ የማስላት ስልት ነው።`,
    formulas: [
      { name: 'Velocity and Acceleration', formula: 'v(t) = s\'(t), a(t) = v\'(t)', explanation: 'Derivatives of motion.' }
    ]
  },
  {
    pdfPageNumber: 66,
    bookPageLabel: 'Page 66',
    chapterNumber: 4,
    sectionRef: '4.5.1',
    titleEn: 'Sliding Ladder Problem Solved via Related Rates',
    titleAm: 'የሚያንሸራትት መሰላል የተዛማጅ ፍጥነቶች ስሌት ምሳሌ',
    subtopicEn: '10-meter Ladder Sliding Problem, Pythagorean Relation x² + y² = 100, Differentiating with Respect to Time, Downward Speed 0.75 m/s',
    subtopicAm: 'ባለ 10 ሜትር መሰላል ስሌት፣ የፓይታጎረስ ዝምድና x² + y² = 100፣ ቁልቁል የመውረድ ፍጥነት 0.75 m/s',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 14

Example 1 (Sliding Ladder):
A ladder 10 m long rests against a vertical wall. If the bottom of the ladder slides away from the wall at a rate of 1 m/s, how fast is the top of the ladder sliding down the wall when the bottom of the ladder is 6 m from the wall?

Solution:
Let x be the distance from the bottom of the ladder to the wall, and y be the distance from the top of the ladder to the ground. Both x and y are functions of time t.
Given:
Ladder length = 10 m.
dx/dt = 1 m/s.
We want to find dy/dt when x = 6 m.

Equation relating x and y (Pythagorean theorem):
x² + y² = 10² = 100

When x = 6:
6² + y² = 100 ⟹ y² = 100 - 36 = 64 ⟹ y = 8 m.

Differentiating both sides with respect to t:
(d/dt)[x² + y²] = (d/dt)[100]
2x (dx/dt) + 2y (dy/dt) = 0
x (dx/dt) + y (dy/dt) = 0
dy/dt = - (x / y) (dx/dt)

Substitute x = 6, y = 8, and dx/dt = 1:
dy/dt = - (6 / 8) · 1 = -3/4 = -0.75 m/s.

Conclusion:
The top of the ladder is sliding down the wall at a rate of 0.75 m/s (the negative sign indicates that y is decreasing).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 66

ምሳሌ 1 (የሚያንሸራትት መሰላል)፡
ርዝመቱ 10 ሜትር የሆነ መሰላል ግድግዳ ላይ ተደግፏል። የመሰላሉ የታችኛው ክፍል በ 1 m/s ፍጥነት ከግድግዳው ሲርቅ፣ ከመሰላሉ ስር 6 ሜትር ሲርቅ የመሰላሉ ጫፍ በምን ያህል ፍጥነት ቁልቁል ይወርዳል?

መፍትሔ፡
የፓይታጎረስ ህግ፡ x² + y² = 100
x = 6 ሲሆን y = 8 ሜትር ይሆናል።
ሁለቱንም ወገን በ t አንጻር ዲፈረንሼት ስናደርግ፡
2x (dx/dt) + 2y (dy/dt) = 0
dy/dt = -(x/y)(dx/dt) = -(6/8)(1) = -0.75 m/s
የመሰላሉ ጫፍ በ 0.75 m/s ፍጥነት ቁልቁል እየወረደ ነው።`,
    formulas: [
      { name: 'Ladder Rate Equation', formula: 'dy/dt = -(x/y)(dx/dt)', explanation: 'Relationship between horizontal sliding rate and vertical descent rate.' }
    ]
  },
  {
    pdfPageNumber: 67,
    bookPageLabel: 'Page 67',
    chapterNumber: 4,
    sectionRef: '4.5.2',
    titleEn: 'Inverted Conical Water Tank Related Rates Problem',
    titleAm: 'የተገለበጠ ሾጣጣ (ኮን) የውሃ ታንከር ተዛማጅ ፍጥነቶች ስሌት',
    subtopicEn: 'Conical Tank Dimensions (r=2m, h=4m), Similar Triangles r = h/2, Volume V = (π/12)h³, Rising Rate dh/dt = 8/(9π) m/min',
    subtopicAm: 'የሾጣጣ ታንከር ስሌት፣ የተመሳሳይ ሶስት ማዕዘኖች ዝምድና r = h/2፣ የውሃ ከፍታ መጨመር ፍጥነት dh/dt = 8/(9π) m/min',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 15

Example 2 (Conical Water Tank):
A water tank has the shape of an inverted circular cone with base radius 2 m and height 4 m. If water is being pumped into the tank at a rate of 2 m³/min, find the rate at which the water level is rising when the water is 3 m deep.

Solution:
Let V, r, and h be the volume of water, the radius of the surface of the water, and the depth of water in the tank at time t, respectively.
Given:
dV/dt = 2 m³/min.
Find dh/dt when h = 3 m.

Formula for Volume of a cone:
V = (1/3) π r² h

By similar triangles:
r / h = 2 / 4 = 1/2 ⟹ r = h / 2.
Substitute r = h/2 into the volume formula to eliminate r:
V = (1/3) π (h/2)² h = (π / 12) h³

Differentiate both sides with respect to t:
dV/dt = (π / 12) · 3h² (dh/dt) = (π / 4) h² (dh/dt)
dh/dt = [4 / (π h²)] (dV/dt)

Substitute h = 3 and dV/dt = 2:
dh/dt = [4 / (π · 3²)] · 2 = 8 / (9π) ≈ 0.283 m/min.
The water level is rising at a rate of 8/(9π) m/min (about 28.3 cm/min).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 67

ምሳሌ 2 (የሾጣጣ የውሃ ታንከር)፡
ራዲየሱ 2 ሜትር፣ ቁመቱ 4 ሜትር የሆነ የተገለበጠ ሾጣጣ ታንከር ውስጥ በ 2 m³/ደቂቃ ፍጥነት ውሃ እየተሞላ ነው። የውሃው ጥልቀት 3 ሜትር ሲደርስ ከፍታው በምን ያህል ፍጥነት ይጨምራል?

መፍትሔ፡
የሾጣጣ ይዘት፡ V = (1/3)π r² h
በተመሳሳይ ሶስት ማዕዘኖች፡ r/h = 2/4 ⟹ r = h/2
V = (π/12) h³
dV/dt = (π/4) h² (dh/dt)
dh/dt = [4 / (π h²)] (dV/dt)
h = 3 እና dV/dt = 2 ሲተኩ፡
dh/dt = 8 / (9π) ≈ 0.283 m/ደቂቃ።`,
    formulas: [
      { name: 'Conical Water Rise Rate', formula: 'dh/dt = [4 / (π h²)] (dV/dt)', explanation: 'Rate of change of height in conical vessel with 1:2 radius-to-height ratio.' }
    ]
  },
  {
    pdfPageNumber: 68,
    bookPageLabel: 'Page 68',
    chapterNumber: 4,
    sectionRef: '4.6',
    titleEn: '4.6 Maximum and Minimum Values of Functions & The Extreme Value Theorem',
    titleAm: '4.6 የፈንክሽኖች ከፍተኛ እና ዝቅተኛ ዋጋዎች እና የኤክስትሪም ቫልዩ ቴዎረም (EVT)',
    subtopicEn: 'Absolute Extrema, Local (Relative) Extrema Definitions, Extreme Value Theorem Statement and Compactness Condition',
    subtopicAm: 'ፍጹም ከፍተኛ/ዝቅተኛ፣ አንጻራዊ ከፍተኛ/ዝቅተኛ፣ የ EVT ቴዎረም ትርጓሜ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 16

4.6 Extreme Values of Functions
Definition: Let c be a number in the domain D of a function f. Then f(c) is the:
1. Absolute maximum value of f on D if f(c) ≥ f(x) for all x in D.
2. Absolute minimum value of f on D if f(c) ≤ f(x) for all x in D.
An absolute maximum or minimum is called an absolute extremum.

Definition: The number f(c) is a:
1. Local (relative) maximum value of f if f(c) ≥ f(x) when x is near c (in an open interval containing c).
2. Local (relative) minimum value of f if f(c) ≤ f(x) when x is near c.

The Extreme Value Theorem (EVT):
Theorem: If f is continuous on a closed interval [a, b], then f attains an absolute maximum value f(c) and an absolute minimum value f(d) at some numbers c and d in [a, b].

Note: Both conditions (continuity and a closed bounded interval) are required. If either fails, absolute extrema may not exist.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 68

4.6 የፈንክሽኖች ከፍተኛ እና ዝቅተኛ ዋጋዎች (Extreme Values)
ትርጓሜ፡ c በፈንክሽን f ዶሜይን ውስጥ ቢሆን፡
1. ፍጹም ከፍተኛ (Absolute Maximum)፡ f(c) ≥ f(x) ለሁሉም x ሲሆን።
2. ፍጹም ዝቅተኛ (Absolute Minimum)፡ f(c) ≤ f(x) ለሁሉም x ሲሆን።
3. አንጻራዊ (Local) ከፍተኛ/ዝቅተኛ፡ በ c ዙሪያ ባለው ክፍት ክልል ውስጥ ብቻ ሲሆን።

የኤክስትሪም ቫልዩ ቴዎረም (Extreme Value Theorem - EVT)፡
f በዝግ ክልል [a, b] ላይ ቀጣይ ከሆነ፣ f በ [a, b] ውስጥ ፍጹም ከፍተኛ እና ፍጹም ዝቅተኛ ዋጋዎችን የግድ ይይዛል።`,
    formulas: [
      { name: 'Extreme Value Theorem', formula: 'f ∈ C[a, b] ⟹ ∃c, d ∈ [a, b]: f(d) ≤ f(x) ≤ f(c), ∀x ∈ [a, b]', explanation: 'Guarantees attainment of maximum and minimum on compact intervals.' }
    ]
  },
  {
    pdfPageNumber: 69,
    bookPageLabel: 'Page 69',
    chapterNumber: 4,
    sectionRef: '4.6.1',
    titleEn: 'Fermat’s Theorem, Critical Numbers & The Closed Interval Method',
    titleAm: 'የፈርማት ቴዎረም፣ ወሳኝ ቁጥሮች (Critical Numbers) እና የዝግ ክልል ዘዴ',
    subtopicEn: 'Fermat’s Theorem f’(c) = 0, Definition of Critical Number (f’(c)=0 or undefined), 3-Step Closed Interval Algorithm',
    subtopicAm: 'የፈርማት ቴዎረም፣ የወሳኝ ቁጥሮች ትርጓሜ፣ ባለ 3 ደረጃ የዝግ ክልል ዘዴ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 17

Fermat’s Theorem:
Theorem: If f has a local maximum or minimum at c, and if f'(c) exists, then:
f'(c) = 0.

Definition (Critical Number):
A critical number of a function f is a number c in the domain of f such that either:
f'(c) = 0  or  f'(c) does not exist.

Remark: If f has a local extremum at c, then c is a critical number of f. (However, not every critical number corresponds to an extremum, e.g., f(x) = x³ at x = 0).

The Closed Interval Method:
To find the absolute maximum and minimum values of a continuous function f on a closed interval [a, b]:
1. Find the values of f at the critical numbers of f in the open interval (a, b).
2. Find the values of f at the endpoints of the interval: f(a) and f(b).
3. The largest of the values from Steps 1 and 2 is the absolute maximum value; the smallest of these values is the absolute minimum value.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 69

የፈርማት ቴዎረም (Fermat’s Theorem)፡
f በ c ላይ አንጻራዊ ከፍተኛ ወይም ዝቅተኛ ካለው እና f'(c) ካለ፡
f'(c) = 0 ይሆናል።

ወሳኝ ቁጥር (Critical Number)፡
በፈንክሽኑ ዶሜይን ውስጥ ያለ ቁጥር c ወሳኝ ቁጥር የሚባለው፡
f'(c) = 0 ወይም f'(c) ሳይኖር ሲቀር ነው።

የዝግ ክልል ዘዴ (The Closed Interval Method)፡
f በ [a, b] ላይ ፍጹም ከፍተኛ እና ዝቅተኛ ዋጋዎችን ለማግኘት፡
1. በ (a, b) ውስጥ ባሉ ወሳኝ ቁጥሮች ላይ የ f(c) ዋጋን ማስላት።
2. በመጨረሻዎቹ ነጥቦች ላይ f(a) እና f(b) ማስላት።
3. ከነዚህ ሁሉ ትልቁ ፍጹም ከፍተኛ፣ ትንሹ ፍጹም ዝቅተኛ ይሆናል።`,
    formulas: [
      { name: 'Fermat’s Condition', formula: 'f has local extremum at c ∧ f\'(c) exists ⟹ f\'(c) = 0', explanation: 'First-order necessary condition for interior local extrema.' }
    ]
  },
  {
    pdfPageNumber: 70,
    bookPageLabel: 'Page 70',
    chapterNumber: 4,
    sectionRef: '4.7',
    titleEn: 'Solved Extreme Value Problem & 4.7 Rolle’s Theorem',
    titleAm: 'የተሰራ ኤክስትሪም ቫልዩ ምሳሌ እና 4.7 የሮል ቴዎረም (Rolle’s Theorem)',
    subtopicEn: 'Optimization of f(x) = 2x³ - 3x² - 12x + 1 on [-2, 3], Rolle’s Theorem Hypotheses and Tangent Parallelism Proof',
    subtopicAm: 'የተሰራ ምሳሌ (ፍጹም ከፍተኛ 8፣ ፍጹም ዝቅተኛ -19)፣ የሮል ቴዎረም መስፈርቶች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 18

Example: Find the absolute maximum and absolute minimum values of:
f(x) = 2x³ - 3x² - 12x + 1  on  [-2, 3].

Solution:
Since f is a polynomial, it is continuous on [-2, 3].
Step 1: Find critical numbers:
f'(x) = 6x² - 6x - 12 = 6(x² - x - 2) = 6(x - 2)(x + 1) = 0.
Critical numbers: x = -1  and  x = 2 (both lie in (-2, 3)).

Step 2: Evaluate f at critical numbers:
f(-1) = 2(-1)³ - 3(-1)² - 12(-1) + 1 = -2 - 3 + 12 + 1 = 8.
f(2) = 2(8) - 3(4) - 12(2) + 1 = 16 - 12 - 24 + 1 = -19.

Step 3: Evaluate f at endpoints:
f(-2) = 2(-8) - 3(4) - 12(-2) + 1 = -16 - 12 + 24 + 1 = -3.
f(3) = 2(27) - 3(9) - 12(3) + 1 = 54 - 27 - 36 + 1 = -8.

Comparing values {-3, 8, -19, -8}:
- Absolute maximum value is 8 (at x = -1).
- Absolute minimum value is -19 (at x = 2).

4.7 The Mean Value Theorem
Rolle’s Theorem:
Let f be a function that satisfies the following 3 hypotheses:
1. f is continuous on the closed interval [a, b].
2. f is differentiable on the open interval (a, b).
3. f(a) = f(b).
Then there is a number c in (a, b) such that f'(c) = 0.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 70

ምሳሌ፡ የ f(x) = 2x³ - 3x² - 12x + 1 ፍጹም ከፍተኛ እና ዝቅተኛ ዋጋዎች በ [-2, 3] ላይ፡
f'(x) = 6(x - 2)(x + 1) = 0 ⟹ x = -1, 2
f(-1) = 8
f(2) = -19
f(-2) = -3
f(3) = -8
- ፍጹም ከፍተኛ፡ 8 (x = -1 ላይ)
- ፍጹም ዝቅተኛ፡ -19 (x = 2 ላይ)

4.7 የሮል ቴዎረም (Rolle’s Theorem)፡
1. f በ [a, b] ላይ ቀጣይ ከሆነ
2. f በ (a, b) ላይ ዲፈረንሼብል ከሆነ
3. f(a) = f(b) ከሆነ፡
f'(c) = 0 የሚያደርግ ቢያንስ አንድ c በ (a, b) ውስጥ ይገኛል።`,
    formulas: [
      { name: 'Rolle’s Theorem', formula: 'f(a) = f(b) ⟹ ∃c ∈ (a, b): f\'(c) = 0', explanation: 'Existence of horizontal tangent on equal endpoint intervals.' }
    ]
  },
  {
    pdfPageNumber: 71,
    bookPageLabel: 'Page 71',
    chapterNumber: 4,
    sectionRef: '4.7.1',
    titleEn: 'The Mean Value Theorem (MVT) & Geometric Tangent Verification Example',
    titleAm: 'የመካከለኛ ዋጋ ቴዎረም (MVT) እና የጂኦሜትሪ ታንጀንት ማረጋገጫ ምሳሌ',
    subtopicEn: 'MVT Statement: f’(c) = [f(b) - f(a)] / (b - a), Secant and Tangent Parallelism, Verification on f(x) = x³ - x on [0, 2]',
    subtopicAm: 'የ MVT ቴዎረም ቀመር፣ የሲካንት እና ታንጀንት ትይዩነት፣ በ f(x) = x³ - x ላይ የተሰራ ማረጋገጫ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 19

The Mean Value Theorem (MVT):
Theorem: Let f be a function that satisfies:
1. f is continuous on the closed interval [a, b].
2. f is differentiable on the open interval (a, b).
Then there is a number c in (a, b) such that:
f'(c) = [f(b) - f(a)] / (b - a)
or equivalently:
f(b) - f(a) = f'(c)(b - a).

Geometric Interpretation:
The slope of the secant line passing through (a, f(a)) and (b, f(b)) is m = [f(b) - f(a)] / (b - a).
The MVT states that there is at least one point (c, f(c)) on the graph where the tangent line is parallel to the secant line.

Example: Verify the Mean Value Theorem for f(x) = x³ - x on the interval [0, 2].
Solution:
Since f is a polynomial, it is continuous on [0, 2] and differentiable on (0, 2).
f(0) = 0,  f(2) = 2³ - 2 = 6.
Average rate of change:
[f(2) - f(0)] / (2 - 0) = (6 - 0) / 2 = 3.
Now set f'(c) = 3:
f'(x) = 3x² - 1 ⟹ 3c² - 1 = 3 ⟹ 3c² = 4 ⟹ c² = 4/3 ⟹ c = 2 / √3 ≈ 1.155.
Since 0 < 2/√3 < 2, c lies within (0, 2), which verifies the theorem.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 71

የመካከለኛ ዋጋ ቴዎረም (Mean Value Theorem - MVT)፡
1. f በ [a, b] ላይ ቀጣይ ከሆነ
2. f በ (a, b) ላይ ዲፈረንሼብል ከሆነ፡
f'(c) = [f(b) - f(a)] / (b - a) የሚያደርግ c በ (a, b) ውስጥ ይገኛል።
ጂኦሜትሪያዊ ትርጉም፡ በነጥብ c ላይ ያለው የታንጀንት መስመር ከመጨረሻዎቹ ነጥቦች ሲካንት መስመር ጋር ትይዩ (Parallel) ነው።

ምሳሌ፡ በ [0, 2] ላይ ለ f(x) = x³ - x የ MVT ማረጋገጫ፡
[f(2) - f(0)] / (2 - 0) = 6/2 = 3
f'(c) = 3c² - 1 = 3 ⟹ c = 2/√3 ≈ 1.155 ∈ (0, 2)`,
    formulas: [
      { name: 'Mean Value Theorem', formula: 'f\'(c) = [f(b) - f(a)] / (b - a)', explanation: 'Instantaneous rate equals average rate of change at some interior point.' }
    ]
  },
  {
    pdfPageNumber: 72,
    bookPageLabel: 'Page 72',
    chapterNumber: 4,
    sectionRef: '4.8',
    titleEn: '4.8 Curve Sketching: Increasing/Decreasing Test & The First Derivative Test',
    titleAm: '4.8 የከርቭ ቅርጽ ጥናት፡ የጨማሪ/ቀናሽ መፈተሻ እና የመጀመሪያ ዲሪቬቲቭ ቴስት',
    subtopicEn: 'Increasing Test f’(x) > 0, Decreasing Test f’(x) < 0, First Derivative Test for Local Extrema, Sign Change Analysis',
    subtopicAm: 'f’(x) > 0 ጨማሪ፣ f’(x) < 0 ቀናሽ፣ የአንጻራዊ ከፍተኛ/ዝቅተኛ የመጀመሪያ ዲሪቬቲቭ ቴስት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 20

4.8 How Derivatives Affect the Shape of a Graph
Increasing/Decreasing Test (I/D Test):
Let f be continuous on [a, b] and differentiable on (a, b):
a) If f'(x) > 0 on an interval, then f is increasing on that interval.
b) If f'(x) < 0 on an interval, then f is decreasing on that interval.
c) If f'(x) = 0 on an interval, then f is constant on that interval.

The First Derivative Test:
Suppose that c is a critical number of a continuous function f:
a) If f' changes from positive to negative at c, then f has a local maximum at c.
b) If f' changes from negative to positive at c, then f has a local minimum at c.
c) If f' does not change sign at c (for example, if f' is positive on both sides of c or negative on both sides), then f has no local maximum or minimum at c.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 72

4.8 የከርቭ ቅርጽ ጥናት (Shape of a Graph)
የጨማሪ እና ቀናሽ መፈተሻ (I/D Test)፡
ሀ) f'(x) > 0 ከሆነ፡ f ጨማሪ (Increasing) ነው
ለ) f'(x) < 0 ከሆነ፡ f ቀናሽ (Decreasing) ነው
ሐ) f'(x) = 0 ከሆነ፡ f ቋሚ (Constant) ነው

የመጀመሪያ ዲሪቬቲቭ ቴስት (First Derivative Test)፡
c ወሳኝ ቁጥር ቢሆን፡
ሀ) f' ከአዎንታዊ ወደ አሉታዊ (+ ወደ -) ከተቀየረ፡ c ላይ አንጻራዊ ከፍተኛ አለ።
ለ) f' ከአሉታዊ ወደ አዎንታዊ (- ወደ +) ከተቀየረ፡ c ላይ አንጻራዊ ዝቅተኛ አለ።
ሐ) የ f' ምልክት ካልተቀየረ፡ ምንም አንጻራዊ ከፍተኛ ወይም ዝቅተኛ የለም።`,
    formulas: [
      { name: 'Increasing Criterion', formula: 'f\'(x) > 0 ⟹ f strictly increasing', explanation: 'Positive derivative corresponds to strictly increasing function.' },
      { name: 'Decreasing Criterion', formula: 'f\'(x) < 0 ⟹ f strictly decreasing', explanation: 'Negative derivative corresponds to strictly decreasing function.' }
    ]
  },
  {
    pdfPageNumber: 73,
    bookPageLabel: 'Page 73',
    chapterNumber: 4,
    sectionRef: '4.8.1',
    titleEn: 'Concavity, Points of Inflection & The Second Derivative Test',
    titleAm: 'ኮንካቪቲ (ወደላይ/ወደታች ክፍተት)፣ የመጠምዘዣ ነጥቦች እና ሁለተኛ ዲሪቬቲቭ ቴስት',
    subtopicEn: 'Concave Upward f’’(x) > 0, Concave Downward f’’(x) < 0, Inflection Point Definition, Second Derivative Test for Local Extrema',
    subtopicAm: 'ወደላይ ክፍት f’’(x) > 0፣ ወደታች ክፍት f’’(x) < 0፣ የመጠምዘዣ ነጥብ (Inflection Point)፣ ሁለተኛ ዲሪቬቲቭ ቴስት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 21

Concavity:
Definition: If the graph of f lies above all of its tangents on an interval I, then it is called concave upward on I. If it lies below all of its tangents, it is called concave downward on I.

Concavity Test:
a) If f''(x) > 0 for all x in I, then the graph of f is concave upward on I (smiling curve ∪).
b) If f''(x) < 0 for all x in I, then the graph of f is concave downward on I (frowning curve ∩).

Definition (Inflection Point):
A point P on a curve y = f(x) is called an inflection point if f is continuous there and the curve changes from concave upward to concave downward or from concave downward to concave upward at P.

The Second Derivative Test:
Suppose f'' is continuous near c:
a) If f'(c) = 0 and f''(c) < 0, then f has a local maximum at c.
b) If f'(c) = 0 and f''(c) > 0, then f has a local minimum at c.
c) If f'(c) = 0 and f''(c) = 0, the test is inconclusive (f could have a max, min, or neither, use the First Derivative Test).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 73

ኮንካቪቲ (Concavity)፡
ሀ) f''(x) > 0 ከሆነ፡ ወደላይ ክፍት (Concave Upward ∪)
ለ) f''(x) < 0 ከሆነ፡ ወደታች ክፍት (Concave Downward ∩)

የመጠምዘዣ ነጥብ (Inflection Point)፡
ከርቩ ከኮንካቭ ወደላይ ወደ ኮንካቭ ወደታች ወይም በተቃራኒው አቅጣጫ የሚቀይርበት ነጥብ የመጠምዘዣ ነጥብ ይባላል።

ሁለተኛ ዲሪቬቲቭ ቴስት (Second Derivative Test)፡
f'(c) = 0 ሲሆን፡
ሀ) f''(c) < 0 ከሆነ፡ አንጻራዊ ከፍተኛ (Local Maximum)
ለ) f''(c) > 0 ከሆነ፡ አንጻራዊ ዝቅተኛ (Local Minimum)
ሐ) f''(c) = 0 ከሆነ፡ ቴስቱ አይወስንም (የመጀመሪያ ዲሪቬቲቭ ቴስት መጠቀም ያስፈልጋል)።`,
    formulas: [
      { name: 'Second Derivative Extrema Test', formula: 'f\'(c)=0, f\'\'(c)<0 ⟹ Max; f\'\'(c)>0 ⟹ Min', explanation: 'Classifying critical points using curvature of the graph.' }
    ]
  },
  {
    pdfPageNumber: 74,
    bookPageLabel: 'Page 74',
    chapterNumber: 4,
    sectionRef: '4.9',
    titleEn: '4.9 Indeterminate Forms & L’Hôpital’s Rule with Applications',
    titleAm: '4.9 ያልተወሰኑ ቅርጾች እና የሎፒታል ህግ (L’Hôpital’s Rule)',
    subtopicEn: '7 Indeterminate Forms (0/0, ∞/∞, 0·∞, ∞-∞, 0⁰, 1^∞, ∞⁰), L’Hôpital’s Theorem Statement & Solved Classical Limits',
    subtopicAm: '7ቱ ያልተወሰኑ ቅርጾች፣ የሎፒታል ህግ ቀመር lim f/g = lim f’/g’፣ የተሰሩ ምሳሌዎች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 22

4.9 Indeterminate Forms and L’Hôpital’s Rule
When evaluating limits, direct substitution often results in indeterminate forms:
0/0,  ∞/∞,  0 · ∞,  ∞ - ∞,  0⁰,  1^∞,  ∞⁰

L’Hôpital’s Rule:
Suppose f and g are differentiable and g'(x) ≠ 0 on an open interval that contains a (except possibly at a). Suppose that:
lim_{x ⟶ a} f(x) = 0  and  lim_{x ⟶ a} g(x) = 0
or that:
lim_{x ⟶ a} f(x) = ±∞  and  lim_{x ⟶ a} g(x) = ±∞
Then:
lim_{x ⟶ a} [f(x) / g(x)] = lim_{x ⟶ a} [f'(x) / g'(x)]
provided the limit on the right side exists (or is ±∞).

Note: L’Hôpital’s rule is also valid for one-sided limits and limits at infinity.

Examples:
1. lim_{x ⟶ 0} (sin x - x) / x³  [Form 0/0]:
= lim_{x ⟶ 0} (cos x - 1) / (3x²)  [Form 0/0]
= lim_{x ⟶ 0} (-sin x) / (6x)  [Form 0/0]
= lim_{x ⟶ 0} (-cos x) / 6 = -1/6.

2. lim_{x ⟶ ∞} (ln x) / √x  [Form ∞/∞]:
= lim_{x ⟶ ∞} (1/x) / [1 / (2√x)] = lim_{x ⟶ ∞} (2√x) / x = lim_{x ⟶ ∞} 2 / √x = 0.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 74

4.9 ያልተወሰኑ ቅርጾች እና የሎፒታል ህግ (L’Hôpital’s Rule)
ቀጥታ በመተካት 0/0 ወይም ∞/∞ ሲመጣ፡
lim_{x ⟶ a} [f(x) / g(x)] = lim_{x ⟶ a} [f'(x) / g'(x)]

ምሳሌ 1፡ lim_{x ⟶ 0} (sin x - x) / x³  [ቅርጽ 0/0]
= lim (cos x - 1) / 3x²
= lim (-sin x) / 6x
= lim (-cos x) / 6 = -1/6

ምሳሌ 2፡ lim_{x ⟶ ∞} (ln x) / √x  [ቅርጽ ∞/∞]
= lim (1/x) / (1 / 2√x) = lim 2 / √x = 0`,
    formulas: [
      { name: 'L’Hôpital’s Rule', formula: 'lim_{x ⟶ a} [f(x)/g(x)] = lim_{x ⟶ a} [f\'(x)/g\'(x)]', explanation: 'Applicable strictly to 0/0 or ±∞/±∞ indeterminate quotient forms.' }
    ]
  },
  {
    pdfPageNumber: 75,
    bookPageLabel: 'Page 75',
    chapterNumber: 4,
    sectionRef: '4.10',
    titleEn: '4.10 Applied Optimization: Open-Top Box Maximum Volume Problem',
    titleAm: '4.10 የተግባራዊ ኦፕቲማይዜሽን ስሌት፡ ክፍት ሳጥን ከፍተኛ ይዘት ምሳሌ',
    subtopicEn: '5-Step Applied Optimization Procedure, Open-Top Box from 1200 cm² Material, Optimal Dimensions x=20, y=10, Max Volume 4000 cm³',
    subtopicAm: 'የኦፕቲማይዜሽን 5ቱ ደረጃዎች፣ ከ 1200 cm² ካርቶን ከፍተኛ ይዘት ያለው ሳጥን መስራት (x=20, y=10, V=4000 cm³)',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 4: Page 23

4.10 Optimization Problems
Optimization problems involve finding the maximum or minimum values of a quantity under given constraints.

Steps in Solving Optimization Problems:
1. Understand the problem: Read carefully, identify the given and required quantities.
2. Draw a diagram: Introduce notation and label given and unknown quantities.
3. Write the primary equation: Formulate the quantity to be maximized or minimized.
4. Reduce to a single variable: Use constraint equations relating the variables to express the primary quantity as a function of one variable.
5. Use calculus: Find critical numbers and use derivative tests to identify the absolute extremum.

Example (Open-Top Box):
An open-top rectangular box with a square base is to be constructed from 1200 cm² of cardboard. Find the dimensions that result in the largest possible volume.

Solution:
Let x be the side length of the square base and y be the height of the box.
Surface area constraint:
Area = (base) + 4(sides) = x² + 4xy = 1200
Solve for y:
4xy = 1200 - x² ⟹ y = (1200 - x²) / (4x).

Volume to maximize:
V = x² y = x² · [(1200 - x²) / (4x)] = (x / 4)(1200 - x²) = 300x - (1/4)x³.
Domain: x > 0 and 1200 - x² > 0 ⟹ 0 < x < √1200 ≈ 34.6 cm.

Differentiate with respect to x:
V'(x) = 300 - (3/4)x² = 0 ⟹ (3/4)x² = 300 ⟹ x² = 400 ⟹ x = 20 cm.
Second derivative: V''(x) = - (3/2)x ⟹ V''(20) = -30 < 0 (confirms local maximum).

Find height y:
y = (1200 - 20²) / (4 · 20) = (1200 - 400) / 80 = 800 / 80 = 10 cm.
Maximum Volume:
V = (20 cm)² · (10 cm) = 400 · 10 = 4000 cm³.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 75

4.10 የተግባራዊ ኦፕቲማይዜሽን ስሌት (Optimization Problems)
በተሰጠ ገደብ (Constraint) ውስጥ ከፍተኛ ወይም ዝቅተኛ ውጤት መፈለግ።

ምሳሌ (ክፍት ሳጥን)፡
ካሬ መሰረት ያለው ክፍት ሳጥን ከ 1200 cm² ካርቶን መስራት ተፈለገ። ሳጥኑ ትልቁን ይዘት (Volume) እንዲይዝ የመሰረቱ እና የከፍታው ልክ ስንት መሆን አለበት?

መፍትሔ፡
የስፋት ገደብ፡ x² + 4xy = 1200 ⟹ y = (1200 - x²) / (4x)
የሚበዛው ይዘት፡ V = x² y = 300x - (1/4)x³
V'(x) = 300 - (3/4)x² = 0 ⟹ x² = 400 ⟹ x = 20 ሴ.ሜ
y = (1200 - 400) / 80 = 10 ሴ.ሜ
ከፍተኛ ይዘት፡ V = (20)²(10) = 4000 cm³`,
    formulas: [
      { name: 'Optimal Dimensions', formula: 'x = 20 cm, y = 10 cm, V_max = 4000 cm³', explanation: 'Dimensions maximizing volume for square-based open container with fixed surface area.' }
    ]
  }
];
