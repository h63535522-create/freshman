import { OfficialPdfPage } from './types';

export const mathCh5Pages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 76,
    bookPageLabel: 'Page 76',
    chapterNumber: 5,
    sectionRef: '5.1',
    titleEn: 'Chapter 5: Integrals and Applications — 5.1 Antiderivatives and Indefinite Integrals',
    titleAm: 'ምዕራፍ 5፡ ኢንተግራል እና ተግባራዊ ጥቅሞቹ — 5.1 አንቲዲሪቬቲቭ እና ኢንዲፊኒት ኢንተግራል',
    subtopicEn: 'Definition of Antiderivative F’(x) = f(x), General Family F(x) + C, Integral Symbol, Table of Fundamental Indefinite Integrals',
    subtopicAm: 'የአንቲዲሪቬቲቭ ትርጓሜ፣ የ C ቋሚ ቁጥር አስፈላጊነት፣ የመሰረታዊ ኢንተግራል ቀመሮች ሰንጠረዥ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Integrals and Applications

5.1 Antiderivatives and Indefinite Integrals
Definition: A function F is called an antiderivative of f on an interval I if:
F'(x) = f(x)  for all x in I.

Theorem: If F is an antiderivative of f on an interval I, then the most general antiderivative of f on I is:
F(x) + C
where C is an arbitrary constant.

Notation (Indefinite Integral):
The collection of all antiderivatives of f is called the indefinite integral of f with respect to x, denoted:
∫ f(x) dx = F(x) + C  ⟺  F'(x) = f(x)

Table of Standard Indefinite Integrals:
1. ∫ c dx = cx + C
2. ∫ xⁿ dx = (xⁿ⁺¹ / (n + 1)) + C,  (n ≠ -1)
3. ∫ (1/x) dx = ln|x| + C
4. ∫ eˣ dx = eˣ + C
5. ∫ aˣ dx = (aˣ / ln a) + C
6. ∫ sin x dx = -cos x + C
7. ∫ cos x dx = sin x + C
8. ∫ sec²x dx = tan x + C
9. ∫ csc²x dx = -cot x + C
10. ∫ sec x tan x dx = sec x + C
11. ∫ (1 / (1 + x²)) dx = arctan x + C
12. ∫ (1 / √(1 - x²)) dx = arcsin x + C`,
    contentAm: `አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ (AASTU)
የሂሳብ ትምህርት ክፍል
ምዕራፍ 5፡ ኢንተግራል እና ተግባራዊ ጥቅሞቹ

5.1 አንቲዲሪቬቲቭ እና ኢንዲፊኒት ኢንተግራል
ትርጓሜ፡ F'(x) = f(x) ከሆነ F የ f አንቲዲሪቬቲቭ (Antiderivative) ይባላል።
ቴዎረም፡ አጠቃላይ አንቲዲሪቬቲቭ F(x) + C ነው (C የኢንተግሬሽን ቋሚ ቁጥር ነው)።

ኢንዲፊኒት ኢንተግራል ምልክት፡
∫ f(x) dx = F(x) + C

መሰረታዊ የኢንተግራል ቀመሮች፡
1. ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ -1)
2. ∫ (1/x) dx = ln|x| + C
3. ∫ eˣ dx = eˣ + C
4. ∫ sin x dx = -cos x + C
5. ∫ cos x dx = sin x + C
6. ∫ sec²x dx = tan x + C
7. ∫ (1/(1+x²)) dx = arctan x + C
8. ∫ (1/√(1-x²)) dx = arcsin x + C`,
    formulas: [
      { name: 'Indefinite Integral Power Rule', formula: '∫ xⁿ dx = [xⁿ⁺¹ / (n + 1)] + C,  n ≠ -1', explanation: 'Reverses the derivative power rule for all real exponents except -1.' },
      { name: 'Reciprocal Integral', formula: '∫ (1/x) dx = ln|x| + C', explanation: 'Antiderivative yielding natural logarithm.' }
    ]
  },
  {
    pdfPageNumber: 77,
    bookPageLabel: 'Page 77',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: '5.2 The Definite Integral: The Area Problem & Riemann Sums',
    titleAm: '5.2 ዲፊኒት ኢንተግራል፡ የስፋት ችግር እና የሪማን ድምር (Riemann Sum)',
    subtopicEn: 'Area Under Curve, Partition Δx = (b-a)/n, Sample Points x_i*, Definition of Definite Integral as Limit of Riemann Sums',
    subtopicAm: 'ከከርቭ በታች ያለ ስፋት፣ የክፍፍል ስፋት Δx፣ የሪማን ድምር እና የዲፊኒት ኢንተግራል ሊሚት ትርጓሜ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 2

5.2 The Definite Integral
The Area Problem:
Find the area of the region S that lies under the curve y = f(x) from a to b, where f(x) ≥ 0.

We divide the interval [a, b] into n subintervals of equal width:
Δx = (b - a) / n
Let x₀ = a, x₁ = a + Δx, ..., xₙ = b be the endpoints of the subintervals.
In each subinterval [xᵢ₋₁, xᵢ], choose a sample point xᵢ*.
The area under the curve is approximated by the sum of areas of n rectangles:
Rₙ = ∑ᵢ₌₁ⁿ f(xᵢ*) Δx  (called a Riemann Sum)

Definition (The Definite Integral):
Let f be a function defined on [a, b]. The definite integral of f from a to b is:
∫ₐᵇ f(x) dx = lim_{n ⟶ ∞} ∑ᵢ₌₁ⁿ f(xᵢ*) Δx
provided this limit exists. If it exists, we say that f is integrable on [a, b].

Components:
- a is the lower limit of integration.
- b is the upper limit of integration.
- f(x) is the integrand.
- dx indicates that the independent variable is x.

Theorem: If f is continuous on [a, b], or if f has only a finite number of jump discontinuities, then f is integrable on [a, b].`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 77

5.2 ዲፊኒት ኢንተግራል (The Definite Integral)
የስፋት ችግር፡ ከከርቭ y = f(x) በታች ከ a እስከ b ያለውን ስፋት ማስላት።
[a, b] ክልልን ወደ n እኩል ንዑስ ክፍሎች ስንከፍል ስፋታቸው፡
Δx = (b - a) / n
የ n አራት ማዕዘኖች ድምር (የሪማን ድምር)፡
Rₙ = ∑ᵢ₌₁ⁿ f(xᵢ*) Δx

የዲፊኒት ኢንተግራል ፎርማል ትርጓሜ፡
∫ₐᵇ f(x) dx = lim_{n ⟶ ∞} ∑ᵢ₌₁ⁿ f(xᵢ*) Δx

ቴዎረም፡ f በ [a, b] ላይ ቀጣይ ከሆነ f በ [a, b] ላይ የግድ ኢንተግሬብል (Integrable) ነው።`,
    formulas: [
      { name: 'Definite Integral as Riemann Limit', formula: '∫ₐᵇ f(x) dx = lim_{n ⟶ ∞} ∑ᵢ₌₁ⁿ f(xᵢ*) Δx', explanation: 'Exact analytical definition of definite integral.' }
    ]
  },
  {
    pdfPageNumber: 78,
    bookPageLabel: 'Page 78',
    chapterNumber: 5,
    sectionRef: '5.2.1',
    titleEn: '8 Fundamental Properties of Definite Integrals',
    titleAm: '8ቱ መሰረታዊ የዲፊኒት ኢንተግራል ባህሪያት',
    subtopicEn: 'Constant Integrals, Linearity, Reversing Limits, Zero-Width Integral, Additivity of Intervals, Comparison Properties',
    subtopicAm: 'የቋሚ ቁጥር ኢንተግራል፣ የሊኒያሪቲ ህጎች፣ የድንበር መቀያየር፣ የክልል መደመር፣ የማነጻጸሪያ ህጎች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 3

Properties of Definite Integrals:
Let f and g be integrable functions on [a, b], and let c be any constant:

1. ∫ₐᵇ c dx = c (b - a)
2. ∫ₐᵇ [f(x) ± g(x)] dx = ∫ₐᵇ f(x) dx ± ∫ₐᵇ g(x) dx
3. ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx
4. Reversing limits changes the sign:
∫ₐᵇ f(x) dx = - ∫ᵦᵃ f(x) dx
5. Zero-width integral:
∫ₐᵃ f(x) dx = 0
6. Additivity of intervals:
For any c between a and b (or anywhere f is integrable):
∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx

Comparison Properties:
7. If f(x) ≥ 0 for all a ≤ x ≤ b, then ∫ₐᵇ f(x) dx ≥ 0.
8. If f(x) ≥ g(x) for all a ≤ x ≤ b, then ∫ₐᵇ f(x) dx ≥ ∫ₐᵇ g(x) dx.
9. If m ≤ f(x) ≤ M for all a ≤ x ≤ b, then:
m(b - a) ≤ ∫ₐᵇ f(x) dx ≤ M(b - a)`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 78

8ቱ የዲፊኒት ኢንተግራል ባህሪያት፡
1. ∫ₐᵇ c dx = c(b - a)
2. ∫ₐᵇ [f ± g] dx = ∫ f dx ± ∫ g dx (የድምር/ልዩነት ህግ)
3. ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx (የእስካላር ብዜት ህግ)
4. የድንበር መቀያየር ምልክት ይቀይራል፡ ∫ₐᵇ f dx = - ∫ᵦᵃ f dx
5. ድንበሩ እኩል ሲሆን ዜሮ ነው፡ ∫ₐᵃ f dx = 0
6. ክልሎችን ማገናኘት፡ ∫ₐᵇ f dx = ∫ₐᶜ f dx + ∫꜀ᵇ f dx

የማነጻጸሪያ ህጎች፡
7. f(x) ≥ 0 ከሆነ፡ ∫ₐᵇ f(x) dx ≥ 0
8. f(x) ≥ g(x) ከሆነ፡ ∫ₐᵇ f dx ≥ ∫ₐᵇ g dx
9. m ≤ f(x) ≤ M ከሆነ፡ m(b - a) ≤ ∫ₐᵇ f dx ≤ M(b - a)`,
    formulas: [
      { name: 'Interval Additivity', formula: '∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx', explanation: 'Partitioning integral across subintervals.' },
      { name: 'Integral Bounding Property', formula: 'm(b - a) ≤ ∫ₐᵇ f(x) dx ≤ M(b - a)', explanation: 'Upper and lower box bounds on definite integral.' }
    ]
  },
  {
    pdfPageNumber: 79,
    bookPageLabel: 'Page 79',
    chapterNumber: 5,
    sectionRef: '5.3',
    titleEn: '5.3 The Fundamental Theorem of Calculus (FTC Part 1 & Part 2)',
    titleAm: '5.3 የካልኩለስ መሰረታዊ ቴዎረም (FTC ክፍል 1 እና ክፍል 2)',
    subtopicEn: 'FTC Part 1 (d/dx [∫ₐˣ f(t) dt] = f(x)), FTC Part 2 / Evaluation Theorem (∫ₐᵇ f(x) dx = F(b) - F(a)), Historical Significance',
    subtopicAm: 'የ FTC ክፍል 1 (የኢንተግራል ዲሪቬቲቭ)፣ የ FTC ክፍል 2 (የስሌት ቴዎረም ∫ f dx = F(b) - F(a))',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 4

5.3 The Fundamental Theorem of Calculus (FTC)
The Fundamental Theorem of Calculus establishes the deep inverse connection between differentiation and integration, developed independently by Isaac Newton and Gottfried Wilhelm Leibniz.

The Fundamental Theorem of Calculus, Part 1 (FTC 1):
If f is continuous on [a, b], then the function g defined by:
g(x) = ∫ₐˣ f(t) dt,  a ≤ x ≤ b
is continuous on [a, b] and differentiable on (a, b), and:
g'(x) = (d/dx) [∫ₐˣ f(t) dt] = f(x)

The Fundamental Theorem of Calculus, Part 2 (FTC 2 / Evaluation Theorem):
If f is continuous on [a, b], then:
∫ₐᵇ f(x) dx = F(b) - F(a)
where F is any antiderivative of f, that is, F' = f.

Notation:
F(b) - F(a) is often written as [F(x)]ₐᵇ or F(x)|ₐᵇ.

Summary:
- FTC 1 says: Differentiation undoes integration: (d/dx)[∫ₐˣ f(t) dt] = f(x).
- FTC 2 says: Integration undoes differentiation: ∫ₐᵇ F'(x) dx = F(b) - F(a).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 79

5.3 የካልኩለስ መሰረታዊ ቴዎረም (Fundamental Theorem of Calculus - FTC)
FTC በዲፈረንሼሽን እና በኢንተግሬሽን መካከል ያለውን የኢንቨርስ ዝምድና የሚያረጋግጥ ዋና ቴዎረም ነው።

የካልኩለስ መሰረታዊ ቴዎረም (ክፍል 1)፡
f በ [a, b] ላይ ቀጣይ ከሆነ g(x) = ∫ₐˣ f(t) dt ዲፈረንሼብል ሲሆን ዲሪቬቲቩ፡
g'(x) = d/dx [∫ₐˣ f(t) dt] = f(x) ይሆናል።

የካልኩለስ መሰረታዊ ቴዎረም (ክፍል 2 / Evaluation Theorem)፡
f በ [a, b] ላይ ቀጣይ ከሆነ፡
∫ₐᵇ f(x) dx = F(b) - F(a) = [F(x)]ₐᵇ
F የ f ማንኛውም አንቲዲሪቬቲቭ (F' = f) ነው።`,
    formulas: [
      { name: 'FTC Part 1', formula: 'd/dx [∫ₐˣ f(t) dt] = f(x)', explanation: 'Derivative of definite integral with respect to upper limit.' },
      { name: 'FTC Part 2 (Evaluation Theorem)', formula: '∫ₐᵇ f(x) dx = F(b) - F(a)', explanation: 'Definite integral evaluation via antiderivative endpoints.' }
    ]
  },
  {
    pdfPageNumber: 80,
    bookPageLabel: 'Page 80',
    chapterNumber: 5,
    sectionRef: '5.3.1',
    titleEn: 'FTC Solved Problems: Leibniz Rule with Chain Rule & Definite Integrals',
    titleAm: 'በ FTC የተሰሩ ምሳሌዎች፡ የላይብኒዝ ህግ ከቼይን ህግ ጋር እና የዲፊኒት ኢንተግራል ስሌቶች',
    subtopicEn: 'd/dx[∫₁ˣ √(t³+1) dt], d/dx[∫₀^(x²) cos t dt] = 2x cos(x²), Evaluation of ∫₁³ eˣ dx, Evaluation of ∫₀^π sin x dx = 2',
    subtopicAm: 'የኢንተግራል ዲሪቬቲቭ ከቼይን ህግ ጋር፣ የ eˣ እና sin x ኢንተግራል ስሌቶች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 5

Examples Applying FTC:

Example 1: Find the derivative of g(x) = ∫₁ˣ √(t³ + 1) dt.
Solution:
By FTC 1:
g'(x) = √(x³ + 1).

Example 2: Find (d/dx) [∫₀^(x²) cos t dt].
Solution:
Here the upper limit is u = x², not simply x. By the Chain Rule:
Let g(u) = ∫₀ᵘ cos t dt, then (d/du)[g(u)] = cos u.
(d/dx)[g(x²)] = (dg/du) · (du/dx) = cos(x²) · (d/dx)[x²] = 2x cos(x²).

Example 3: Evaluate ∫₁³ eˣ dx.
Solution:
An antiderivative of f(x) = eˣ is F(x) = eˣ.
∫₁³ eˣ dx = [eˣ]₁³ = e³ - e¹ = e(e² - 1).

Example 4: Evaluate ∫₀^π sin x dx.
Solution:
An antiderivative of sin x is F(x) = -cos x.
∫₀^π sin x dx = [-cos x]₀^π = (-cos π) - (-cos 0) = -(-1) - (-1) = 1 + 1 = 2.
(The total area under one arch of the sine wave is exactly 2 square units).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 80

በ FTC የተሰሩ ምሳሌዎች፡
ምሳሌ 1፡ g'(x) = d/dx [∫₁ˣ √(t³ + 1) dt] = √(x³ + 1)

ምሳሌ 2፡ d/dx [∫₀^(x²) cos t dt] = cos(x²) · (2x) = 2x cos(x²) (በቼይን ህግ)

ምሳሌ 3፡ ∫₁³ eˣ dx = [eˣ]₁³ = e³ - e

ምሳሌ 4፡ ∫₀^π sin x dx = [-cos x]₀^π = (-cos π) - (-cos 0) = 1 - (-1) = 2
(የሳይን ከርቭ አንድ ጉብታ ስፋት በትክክል 2 ስኩዌር ዩኒት ነው)።`,
    formulas: [
      { name: 'Leibniz Integral Rule', formula: 'd/dx [∫ₐ^(u(x)) f(t) dt] = f(u(x)) · u\'(x)', explanation: 'Combining FTC Part 1 with chain rule for variable limit functions.' }
    ]
  },
  {
    pdfPageNumber: 81,
    bookPageLabel: 'Page 81',
    chapterNumber: 5,
    sectionRef: '5.4',
    titleEn: '5.4 Techniques of Integration: The Substitution Rule (u-Substitution)',
    titleAm: '5.4 የኢንተግሬሽን ዘዴዎች፡ የተካፊ ህግ (The Substitution Rule / u-Substitution)',
    subtopicEn: 'Theorem for Indefinite and Definite u-Substitution, Changing Limits of Integration, Solved Radical Algebraic Example',
    subtopicAm: 'የ u-ሰብስትቲዩሽን ቴዎረም ለኢንዲፊኒት እና ዲፊኒት ኢንተግራል፣ የድንበሮች ለውጥ፣ የተሰራ ምሳሌ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 6

5.4 Techniques of Integration
1. The Substitution Rule (u-substitution)
The Substitution Rule for integration corresponds to the Chain Rule for differentiation.

Theorem (Substitution for Indefinite Integrals):
If u = g(x) is a differentiable function whose range is an interval I and f is continuous on I, then:
∫ f(g(x)) g'(x) dx = ∫ f(u) du

Theorem (Substitution for Definite Integrals):
If g' is continuous on [a, b] and f is continuous on the range of u = g(x), then:
∫ₐᵇ f(g(x)) g'(x) dx = ∫_{g(a)}^{g(b)} f(u) du

Example 1: Evaluate ∫ x² √(x³ + 5) dx.
Solution:
Let u = x³ + 5.
Then du = (d/dx)(x³ + 5) dx = 3x² dx ⟹ x² dx = du / 3.
Substitute into integral:
∫ x² √(x³ + 5) dx = ∫ √u (du / 3) = (1/3) ∫ u^(1/2) du
= (1/3) [u^(3/2) / (3/2)] + C = (2/9) u^(3/2) + C
= (2/9) (x³ + 5)^(3/2) + C.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 81

5.4 የኢንተግሬሽን ዘዴዎች (Techniques of Integration)
1. የተካፊ ህግ (Substitution Rule / u-substitution)
ይህ ዘዴ የዲሪቬቲቭ ቼይን ህግ ተገላቢጦሽ ነው።

ቴዎረም፡ u = g(x) ቢሆን du = g'(x) dx ስለሚሆን፡
∫ f(g(x)) g'(x) dx = ∫ f(u) du
ለዲፊኒት ኢንተግራል ድንበሮቹም አብረው ይቀየራሉ፡ ከ a ወደ g(a)፤ ከ b ወደ g(b)።

ምሳሌ 1፡ ∫ x² √(x³ + 5) dx
u = x³ + 5 ⟹ du = 3x² dx ⟹ x² dx = du/3
= (1/3) ∫ u^(1/2) du = (2/9) u^(3/2) + C = (2/9)(x³ + 5)^(3/2) + C`,
    formulas: [
      { name: 'Substitution Rule', formula: '∫ f(g(x)) g\'(x) dx = ∫ f(u) du', explanation: 'Simplifies composite integrands by variable substitution.' }
    ]
  },
  {
    pdfPageNumber: 82,
    bookPageLabel: 'Page 82',
    chapterNumber: 5,
    sectionRef: '5.4.1',
    titleEn: 'Definite Substitution with Transformed Bounds & Symmetry Integrals',
    titleAm: 'የዲፊኒት ሰብስትቲዩሽን ከድንበር ለውጥ ጋር እና የሲሜትሪ ኢንተግራሎች',
    subtopicEn: 'Evaluation of ∫₀¹ x/(x²+1) dx = (1/2)ln 2, Even Functions ∫_{-a}^a f = 2∫₀^a f, Odd Functions ∫_{-a}^a f = 0 Proof',
    subtopicAm: 'የ ∫₀¹ x/(x²+1) dx ስሌት፣ የኢቭን ፈንክሽን ሲሜትሪ 2∫₀^a f፣ የኦድ ፈንክሽን ሲሜትሪ ∫_{-a}^a f = 0',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 7

Example 2 (Definite Substitution): Evaluate ∫₀¹ (x / (x² + 1)) dx.
Solution:
Let u = x² + 1 ⟹ du = 2x dx ⟹ x dx = du / 2.
Change the limits of integration:
When x = 0: u = 0² + 1 = 1.
When x = 1: u = 1² + 1 = 2.
∫₀¹ (x / (x² + 1)) dx = ∫₁² (1/u) (du / 2) = (1/2) ∫₁² (1/u) du
= (1/2) [ln|u|]₁² = (1/2) (ln 2 - ln 1) = (1/2) ln 2.

Integrals of Symmetric Functions:
Theorem: Suppose f is continuous on [-a, a]:
a) If f is even [f(-x) = f(x)], then:
∫_{-a}ᵃ f(x) dx = 2 ∫₀ᵃ f(x) dx
b) If f is odd [f(-x) = -f(x)], then:
∫_{-a}ᵃ f(x) dx = 0

Example: Evaluate ∫_{-1}¹ ((x⁷ + sin x) / (x⁴ + 1)) dx.
Solution:
f(-x) = ((-x)⁷ + sin(-x)) / ((-x)⁴ + 1) = (-x⁷ - sin x) / (x⁴ + 1) = - f(x).
Since the integrand is an odd function integrated over symmetric interval [-1, 1], the integral is immediately 0.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 82

ምሳሌ 2 (የዲፊኒት ሰብስትቲዩሽን)፡ ∫₀¹ (x / (x² + 1)) dx
u = x² + 1 ⟹ du = 2x dx፤ x = 0 ሲሆን u = 1፤ x = 1 ሲሆን u = 2
= (1/2) ∫₁² (1/u) du = (1/2) [ln u]₁² = (1/2) ln 2

የሲሜትሪክ ፈንክሽኖች ኢንተግራል፡
f በ [-a, a] ላይ ቀጣይ ቢሆን፡
ሀ) ኢቭን (Even) ከሆነ፡ ∫_{-a}ᵃ f(x) dx = 2 ∫₀ᵃ f(x) dx
ለ) ኦድ (Odd) ከሆነ፡ ∫_{-a}ᵃ f(x) dx = 0

ምሳሌ፡ ∫_{-1}¹ ((x⁷ + sin x) / (x⁴ + 1)) dx
ፈንክሽኑ ኦድ (Odd) ስለሆነ መልሱ በቀጥታ 0 ነው!`,
    formulas: [
      { name: 'Odd Function Integral', formula: 'f(-x) = -f(x) ⟹ ∫_{-a}ᵃ f(x) dx = 0', explanation: 'Cancellation of signed area for odd symmetric functions.' }
    ]
  },
  {
    pdfPageNumber: 83,
    bookPageLabel: 'Page 83',
    chapterNumber: 5,
    sectionRef: '5.4.2',
    titleEn: 'Integration by Parts Formula, LIATE Heuristic & Solved Example ∫ x eˣ dx',
    titleAm: 'የክፍሎች ኢንተግሬሽን ቀመር (Integration by Parts)፣ የ LIATE መመሪያ እና የ ∫ x eˣ dx ስሌት',
    subtopicEn: 'Derivation from Product Rule ∫ u dv = uv - ∫ v du, Definite Formula, LIATE Acronym, Complete Solution for ∫ x eˣ dx = (x-1)eˣ + C',
    subtopicAm: 'ከብዜት ህግ የተገኘ ቀመር ∫ u dv = uv - ∫ v du፣ የ LIATE ቅደም ተከተል፣ የ ∫ x eˣ dx ስሌት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 8

2. Integration by Parts
Integration by parts corresponds to the Product Rule for differentiation.
The Product Rule states: (d/dx)[u(x) v(x)] = u'(x) v(x) + u(x) v'(x).
Integrating both sides:
u(x) v(x) = ∫ v(x) u'(x) dx + ∫ u(x) v'(x) dx
Rearranging gives the Integration by Parts Formula:
∫ u dv = u v - ∫ v du

Definite Integration by Parts Formula:
∫ₐᵇ u dv = [u v]ₐᵇ - ∫ₐᵇ v du

The LIATE Rule for Choosing u:
A rule of thumb for choosing which factor to set as u (in order of priority):
L: Logarithmic functions (ln x, log_a x)
I: Inverse trigonometric functions (arcsin x, arctan x)
A: Algebraic functions (polynomials, x², √x)
T: Trigonometric functions (sin x, cos x)
E: Exponential functions (eˣ, 2ˣ)

Example 1: Find ∫ x eˣ dx.
Solution:
Following LIATE, choose Algebraic over Exponential for u:
Let u = x ⟹ du = dx.
Let dv = eˣ dx ⟹ v = ∫ eˣ dx = eˣ.
Apply formula:
∫ x eˣ dx = u v - ∫ v du = x eˣ - ∫ eˣ dx = x eˣ - eˣ + C = (x - 1)eˣ + C.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 83

2. የክፍሎች ኢንተግሬሽን (Integration by Parts)
ይህ ዘዴ የዲሪቬቲቭ ብዜት ህግ (Product Rule) ተገላቢጦሽ ነው።
ቀመር፡ ∫ u dv = u v - ∫ v du

ለ u ምርጫ የ LIATE ቅደም-ተከተል መመሪያ፡
L: ሎጋሪዝሚክ (ln x)
I: ኢንቨርስ ትሪጎኖሜትሪክ (arctan x)
A: አልጀብራዊ (x, x²)
T: ትሪጎኖሜትሪክ (sin x, cos x)
E: ኤክስፖኔንሺያል (eˣ)

ምሳሌ 1፡ ∫ x eˣ dx
u = x ⟹ du = dx
dv = eˣ dx ⟹ v = eˣ
∫ x eˣ dx = x eˣ - ∫ eˣ dx = x eˣ - eˣ + C = (x - 1)eˣ + C`,
    formulas: [
      { name: 'Integration by Parts', formula: '∫ u dv = uv - ∫ v du', explanation: 'Fundamental integration by parts identity.' }
    ]
  },
  {
    pdfPageNumber: 84,
    bookPageLabel: 'Page 84',
    chapterNumber: 5,
    sectionRef: '5.4.3',
    titleEn: 'Natural Logarithm & Cyclic Integration by Parts ∫ eˣ sin x dx',
    titleAm: 'የተፈጥሮ ሎጋሪዝም ኢንተግራል እና ዑደታዊ ኢንተግሬሽን ∫ eˣ sin x dx',
    subtopicEn: 'Integral of ln x (∫ ln x dx = x ln x - x + C), Repeated Integration by Parts, Algebraic Solving for Cyclic Integral ∫ eˣ sin x dx',
    subtopicAm: 'የ ∫ ln x dx ስሌት፣ ተደጋጋሚ ኢንተግሬሽን፣ የ ∫ eˣ sin x dx ዑደታዊ አልጀብራ መፍትሔ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 9

Example 2: Find ∫ ln x dx.
Solution:
Let u = ln x ⟹ du = (1/x) dx.
Let dv = dx ⟹ v = x.
∫ ln x dx = u v - ∫ v du = (ln x)(x) - ∫ x (1/x) dx = x ln x - ∫ 1 dx = x ln x - x + C.

Example 3 (Cyclic Integration by Parts): Evaluate I = ∫ eˣ sin x dx.
Solution:
Let u = sin x ⟹ du = cos x dx.
Let dv = eˣ dx ⟹ v = eˣ.
I = eˣ sin x - ∫ eˣ cos x dx.

Apply integration by parts again to ∫ eˣ cos x dx:
Let u = cos x ⟹ du = -sin x dx.
Let dv = eˣ dx ⟹ v = eˣ.
∫ eˣ cos x dx = eˣ cos x - ∫ eˣ (-sin x) dx = eˣ cos x + ∫ eˣ sin x dx = eˣ cos x + I.

Substitute back:
I = eˣ sin x - [eˣ cos x + I] = eˣ sin x - eˣ cos x - I.
Add I to both sides:
2I = eˣ (sin x - cos x)
I = (1/2) eˣ (sin x - cos x) + C.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 84

ምሳሌ 2፡ ∫ ln x dx
u = ln x ⟹ du = (1/x) dx፤ dv = dx ⟹ v = x
∫ ln x dx = x ln x - ∫ x (1/x) dx = x ln x - x + C

ምሳሌ 3 (ዑደታዊ ኢንተግሬሽን)፡ I = ∫ eˣ sin x dx
ሁለት ጊዜ በክፍሎች ኢንተግሬት ሲደረግ የቀድሞው I ይመለሳል፡
I = eˣ sin x - eˣ cos x - I
2I = eˣ (sin x - cos x)
I = (1/2) eˣ (sin x - cos x) + C`,
    formulas: [
      { name: 'Cyclic Exponential-Sine Integral', formula: '∫ eˣ sin x dx = (1/2) eˣ (sin x - cos x) + C', explanation: 'Closed-form solution via cyclic integration by parts.' }
    ]
  },
  {
    pdfPageNumber: 85,
    bookPageLabel: 'Page 85',
    chapterNumber: 5,
    sectionRef: '5.4.4',
    titleEn: 'Trigonometric Integrals: Strategies for Powers of Sine and Cosine',
    titleAm: 'የትሪጎኖሜትሪክ ኢንተግራሎች፡ የሳይን እና ኮሳይን ፓወሮች አሰራር ስልቶች',
    subtopicEn: 'Odd Power of Cosine Strategy, Odd Power of Sine Strategy, Even Powers Half-Angle Strategy, Solved Example ∫ sin³x cos²x dx',
    subtopicAm: 'የኮሳይን ጎዶሎ ፓወር ስልት፣ የሳይን ጎዶሎ ፓወር ስልት፣ የሁለቱም ሙሉ ፓወር የግማሽ አንግል ስልት፣ የተሰራ ምሳሌ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 10

3. Trigonometric Integrals
To evaluate integrals of the form ∫ sinᵐx cosⁿx dx:

Strategy:
a) If the power of cosine is odd (n = 2k + 1):
Save one cosine factor and use cos²x = 1 - sin²x to express the remaining factors in terms of sine:
∫ sinᵐx cos²ᵏ⁺¹x dx = ∫ sinᵐx (1 - sin²x)ᵏ cos x dx  (substitute u = sin x, du = cos x dx).

b) If the power of sine is odd (m = 2k + 1):
Save one sine factor and use sin²x = 1 - cos²x to express the remaining factors in terms of cosine:
∫ sin²ᵏ⁺¹x cosⁿx dx = ∫ (1 - cos²x)ᵏ cosⁿx sin x dx  (substitute u = cos x, du = -sin x dx).

c) If the powers of both sine and cosine are even:
Use the half-angle identities:
sin²x = (1 - cos 2x) / 2  and  cos²x = (1 + cos 2x) / 2

Example: Evaluate ∫ sin³x cos²x dx.
Solution:
Power of sine is odd (m = 3). Save one sine factor:
∫ sin³x cos²x dx = ∫ sin²x cos²x sin x dx = ∫ (1 - cos²x) cos²x sin x dx
Let u = cos x ⟹ du = -sin x dx ⟹ sin x dx = -du.
= - ∫ (1 - u²) u² du = - ∫ (u² - u⁴) du = - [u³/3 - u⁵/5] + C = (1/5) cos⁵x - (1/3) cos³x + C.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 85

3. የትሪጎኖሜትሪክ ኢንተግራሎች (∫ sinᵐx cosⁿx dx)
የአሰራር ስልቶች፡
ሀ) የኮሳይን ፓወር ጎዶሎ ከሆነ (n = 2k + 1)፡
አንድ cos x ነጥሎ ቀሪውን በ cos²x = 1 - sin²x በመቀየር u = sin x መተካት።

ለ) የሳይን ፓወር ጎዶሎ ከሆነ (m = 2k + 1)፡
አንድ sin x ነጥሎ ቀሪውን በ sin²x = 1 - cos²x በመቀየር u = cos x መተካት።

ሐ) የሁለቱም ፓወር ሙሉ (Even) ከሆነ፡
የግማሽ አንግል ቀመሮችን መጠቀም፡
sin²x = (1 - cos 2x)/2፤ cos²x = (1 + cos 2x)/2

ምሳሌ፡ ∫ sin³x cos²x dx = (1/5) cos⁵x - (1/3) cos³x + C`,
    formulas: [
      { name: 'Half-Angle Sine', formula: 'sin²x = (1 - cos 2x) / 2', explanation: 'Reduces quadratic trigonometric powers.' },
      { name: 'Half-Angle Cosine', formula: 'cos²x = (1 + cos 2x) / 2', explanation: 'Reduces quadratic cosine powers.' }
    ]
  },
  {
    pdfPageNumber: 86,
    bookPageLabel: 'Page 86',
    chapterNumber: 5,
    sectionRef: '5.4.5',
    titleEn: 'Trigonometric Substitution for Radical Algebraic Forms',
    titleAm: 'የትሪጎኖሜትሪክ ሰብስትቲዩሽን ለራዲካል አልጀብራዊ ቅርጾች',
    subtopicEn: 'Table of 3 Canonical Forms (√(a²-x²), √(a²+x²), √(x²-a²)), Associated Trig Identities, Right-Triangle Inversion Method',
    subtopicAm: 'የ 3ቱ መሰረታዊ ራዲካሎች ሰንጠረዥ፣ የተጣማሪ ትሪጎኖሜትሪክ ቀመሮች፣ የቀኝ ሶስት ማዕዘን ተገላቢጦሽ ስሌት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 11

4. Trigonometric Substitution
Trigonometric substitution is used to eliminate radical expressions of the form √(a² - x²), √(a² + x²), and √(x² - a²).

Table of Substitutions:
| Expression | Substitution | Differential | Identity |
| :--- | :--- | :--- | :--- |
| √(a² - x²) | x = a sin θ, -π/2 ≤ θ ≤ π/2 | dx = a cos θ dθ | 1 - sin²θ = cos²θ |
| √(a² + x²) | x = a tan θ, -π/2 < θ < π/2 | dx = a sec²θ dθ | 1 + tan²θ = sec²θ |
| √(x² - a²) | x = a sec θ, 0 ≤ θ < π/2 | dx = a sec θ tan θ dθ | sec²θ - 1 = tan²θ |

Example: Evaluate ∫ (1 / (x² √(4 - x²))) dx.
Solution:
Expression √(4 - x²) has form √(a² - x²) with a = 2.
Let x = 2 sin θ ⟹ dx = 2 cos θ dθ.
√(4 - x²) = √(4 - 4 sin²θ) = 2√(cos²θ) = 2 cos θ.
Substitute into integral:
∫ (1 / [4 sin²θ · 2 cos θ]) · (2 cos θ dθ) = (1/4) ∫ (1 / sin²θ) dθ = (1/4) ∫ csc²θ dθ = - (1/4) cot θ + C.

Convert back to x using reference right triangle (sin θ = x / 2 ⟹ opp = x, hyp = 2, adj = √(4 - x²)):
cot θ = adj / opp = √(4 - x²) / x.
Final Answer: - √(4 - x²) / (4x) + C.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 86

4. የትሪጎኖሜትሪክ ሰብስትቲዩሽን (Trigonometric Substitution)
የራዲካል ምልክቶችን ለማስወገድ የሚያገለግል ስልት ነው፡
1. √(a² - x²) ሲሆን፡ x = a sin θ (1 - sin²θ = cos²θ)
2. √(a² + x²) ሲሆን፡ x = a tan θ (1 + tan²θ = sec²θ)
3. √(x² - a²) ሲሆን፡ x = a sec θ (sec²θ - 1 = tan²θ)

ምሳሌ፡ ∫ (1 / (x² √(4 - x²))) dx
x = 2 sin θ ⟹ dx = 2 cos θ dθ፤ √(4 - x²) = 2 cos θ
= (1/4) ∫ csc²θ dθ = - (1/4) cot θ + C
በሶስት ማዕዘን ሲመለስ፡ cot θ = √(4 - x²) / x
መልስ፡ - √(4 - x²) / (4x) + C`,
    formulas: [
      { name: 'Sine Radical Elimination', formula: '√(a² - x²) = a cos θ, when x = a sin θ', explanation: 'Converts difference of squares into single cosine term.' }
    ]
  },
  {
    pdfPageNumber: 87,
    bookPageLabel: 'Page 87',
    chapterNumber: 5,
    sectionRef: '5.4.6',
    titleEn: 'Partial Fractions Decomposition for Rational Integrals',
    titleAm: 'የፓርሻል ፍራክሽን መበተን ዘዴ ለራሽናል ፈንክሽኖች ኢንተግሬሽን',
    subtopicEn: 'Proper Rational Functions P(x)/Q(x), Case 1 Distinct Linear Factors A/(x-r₁), Equating Coefficients, Solved Rational Example',
    subtopicAm: 'ትክክለኛ ራሽናል ፈንክሽን P(x)/Q(x)፣ የተነጣጣሉ ሊኒየር አባላት መበተን፣ የተሰራ ምሳሌ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 12

5. Integration of Rational Functions by Partial Fractions
This technique allows integrating any rational function P(x) / Q(x) by decomposing it into simpler fractions.
- If deg(P) ≥ deg(Q), perform polynomial long division first to write P(x)/Q(x) = S(x) + R(x)/Q(x) where deg(R) < deg(Q).

Case 1: The denominator Q(x) is a product of distinct linear factors:
Q(x) = (a₁x + b₁)(a₂x + b₂) ··· (aₖx + bₖ)
Decomposition:
R(x) / Q(x) = A₁ / (a₁x + b₁) + A₂ / (a₂x + b₂) + ··· + Aₖ / (aₖx + bₖ)

Example: Evaluate ∫ ((x - 9) / ((x + 5)(x - 2))) dx.
Solution:
Set up partial fractions:
(x - 9) / ((x + 5)(x - 2)) = A / (x + 5) + B / (x - 2)
Multiply both sides by (x + 5)(x - 2):
x - 9 = A(x - 2) + B(x + 5)
Substitute x = 2:
2 - 9 = B(2 + 5) ⟹ -7 = 7B ⟹ B = -1.
Substitute x = -5:
-5 - 9 = A(-5 - 2) ⟹ -14 = -7A ⟹ A = 2.

Now integrate:
∫ ((x - 9) / ((x + 5)(x - 2))) dx = ∫ [2 / (x + 5) - 1 / (x - 2)] dx
= 2 ln|x + 5| - ln|x - 2| + C = ln [ (x + 5)² / |x - 2| ] + C.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 87

5. የፓርሻል ፍራክሽን ዘዴ (Partial Fractions)
የራሽናል ፈንክሽን P(x)/Q(x) ክፍልፋዮችን ነጣጥሎ በቀላሉ ኢንተግሬት የማድረጊያ ዘዴ ነው።
የ Q(x) ዲግሪ ከ P(x) በላይ መሆን አለበት (ካልሆነ ሎንግ ዲቪዥን ይሰራል)።

ሁኔታ 1፡ የ Q(x) ታችኛው ክፍል የተነጣጣሉ ሊኒየር ብዜቶች ሲሆኑ፡
(x - 9) / ((x + 5)(x - 2)) = A / (x + 5) + B / (x - 2)
x - 9 = A(x - 2) + B(x + 5)
x = 2 ሲተካ፡ B = -1
x = -5 ሲተካ፡ A = 2

ኢንተግሬሽን፡
∫ [2/(x + 5) - 1/(x - 2)] dx = 2 ln|x + 5| - ln|x - 2| + C = ln[(x + 5)² / |x - 2|] + C`,
    formulas: [
      { name: 'Distinct Linear Partial Fractions', formula: 'P(x)/[(x - r₁)(x - r₂)] = A/(x - r₁) + B/(x - r₂)', explanation: 'Linear decomposition model for non-repeating real linear factors.' }
    ]
  },
  {
    pdfPageNumber: 88,
    bookPageLabel: 'Page 88',
    chapterNumber: 5,
    sectionRef: '5.5',
    titleEn: '5.5 Applications of Integration: Area Enclosed Between Two Curves',
    titleAm: '5.5 የኢንተግራል ተግባራዊ ጥቅሞች፡ በሁለት ከርቮች መካከል ያለ ስፋት',
    subtopicEn: 'Area Formula A = ∫ₐᵇ [f(x) - g(x)] dx, Upper vs Lower Boundary Identification, Parabolic Intersection Enclosed Area',
    subtopicAm: 'የስፋት ቀመር A = ∫ [የላይኛው - የታችኛው] dx፣ የመገናኛ ነጥቦችን መፈለግ፣ በሁለት ፓራቦላዎች መካከል የተሰራ ስፋት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 13

5.5 Applications of Integration
1. Area Between Curves
Theorem: If f and g are continuous functions with f(x) ≥ g(x) throughout [a, b], then the area A of the region bounded by the curves y = f(x), y = g(x), and the vertical lines x = a, x = b is:
A = ∫ₐᵇ [f(x) - g(x)] dx = ∫ₐᵇ [ (upper curve) - (lower curve) ] dx

If the curves cross each other:
A = ∫ₐᵇ |f(x) - g(x)| dx

Example: Find the area of the region enclosed by the parabolas y = x² and y = 2x - x².
Solution:
Find the points of intersection:
x² = 2x - x² ⟹ 2x² - 2x = 0 ⟹ 2x(x - 1) = 0 ⟹ x = 0  and  x = 1.
On the interval [0, 1], 2x - x² ≥ x² (for instance at x = 0.5: 2(0.5) - 0.25 = 0.75 > 0.25).
Therefore y = 2x - x² is the upper curve, and y = x² is the lower curve.

Compute Area:
A = ∫₀¹ [(2x - x²) - x²] dx = ∫₀¹ (2x - 2x²) dx = 2 ∫₀¹ (x - x²) dx
= 2 [x² / 2 - x³ / 3]₀¹ = 2 (1/2 - 1/3) = 2 (1/6) = 1/3 square units.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 88

5.5 የኢንተግራል ተግባራዊ ጥቅሞች
1. በሁለት ከርቮች መካከል ያለ ስፋት (Area Between Curves)
f(x) ≥ g(x) ቢሆን በ [a, b] መካከል ያለው ስፋት፡
A = ∫ₐᵇ [f(x) - g(x)] dx = ∫ₐᵇ [(የላይኛው ከርቭ) - (የታችኛው ከርቭ)] dx

ምሳሌ፡ በ y = x² እና y = 2x - x² መካከል የታጠረውን ስፋት ፈልጉ፡
የመገናኛ ነጥቦች፡ x² = 2x - x² ⟹ 2x(x - 1) = 0 ⟹ x = 0 እና x = 1
በ [0, 1] ላይ 2x - x² የላይኛው ሲሆን x² የታችኛው ነው፡
A = ∫₀¹ [(2x - x²) - x²] dx = ∫₀¹ (2x - 2x²) dx
= [x² - (2/3)x³]₀¹ = 1 - 2/3 = 1/3 ስኩዌር ዩኒት።`,
    formulas: [
      { name: 'Area Between Curves', formula: 'A = ∫ₐᵇ [f(x) - g(x)] dx', explanation: 'Integrated vertical distance between bounding upper and lower curves.' }
    ]
  },
  {
    pdfPageNumber: 89,
    bookPageLabel: 'Page 89',
    chapterNumber: 5,
    sectionRef: '5.5.1',
    titleEn: 'Volumes of Revolution (Disk/Washer Method) & Average Value of Function',
    titleAm: 'የሽክርክሪት ይዘት (የዲስክ ዘዴ) እና የአንድ ፈንክሽን አማካይ ዋጋ',
    subtopicEn: 'Disk Method V = ∫ π[f(x)]² dx, Derivation of Sphere Volume V = (4/3)πr³, Average Value Definition f_avg = (1/(b-a)) ∫ₐᵇ f(x) dx',
    subtopicAm: 'የዲስክ ዘዴ ይዘት ቀመር፣ የሉል (ስፊር) ይዘት ማረጋገጫ (4/3)πr³፣ የፈንክሽን አማካይ ዋጋ ቀመር',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 5: Page 14

2. Volume of Solids of Revolution (The Disk Method):
If a region under y = f(x) from a to b is rotated about the x-axis, the cross-sections perpendicular to the x-axis are circular disks of radius R = f(x).
Volume formula:
V = ∫ₐᵇ A(x) dx = ∫ₐᵇ π [f(x)]² dx

Example (Volume of a Sphere):
Find the volume of a sphere of radius r by rotating the semicircle y = √(r² - x²) on [-r, r] about the x-axis.
Solution:
V = ∫_{-r}ʳ π [√(r² - x²)]² dx = π ∫_{-r}ʳ (r² - x²) dx
Since (r² - x²) is an even function:
V = 2π ∫₀ʳ (r² - x²) dx = 2π [r² x - x³ / 3]₀ʳ
= 2π (r³ - r³ / 3) = 2π (2r³ / 3) = (4/3) π r³.
(This establishes the classical Archimedean formula for sphere volume).

3. Average Value of a Function:
The average value of a continuous function f on the interval [a, b] is given by:
f_avg = (1 / (b - a)) ∫ₐᵇ f(x) dx

Mean Value Theorem for Integrals:
If f is continuous on [a, b], then there exists a number c in [a, b] such that:
f(c) = f_avg = (1 / (b - a)) ∫ₐᵇ f(x) dx ⟺ ∫ₐᵇ f(x) dx = f(c)(b - a).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 89

2. የሽክርክሪት ይዘት (The Disk Method)፡
y = f(x) ከርቭ በ x-አክሲስ ዙሪያ ሲሽከረከር የሚፈጠረው ይዘት፡
V = ∫ₐᵇ π [f(x)]² dx

ምሳሌ (የሉል / ስፊር ይዘት)፡
y = √(r² - x²) ግማሽ ክብ በ x-አክሲስ ዙሪያ ሲሽከረከር፡
V = π ∫_{-r}ʳ (r² - x²) dx = 2π [r² x - x³/3]₀ʳ = (4/3) π r³ (የአርኪሜዲስ ታዋቂ የሉል ይዘት ቀመር)።

3. የአንድ ፈንክሽን አማካይ ዋጋ (Average Value of a Function)፡
f_avg = (1 / (b - a)) ∫ₐᵇ f(x) dx

የኢንተግራል መካከለኛ ዋጋ ቴዎረም፡
f(c) = f_avg የሚያደርግ c በ [a, b] ውስጥ ይገኛል።`,
    formulas: [
      { name: 'Disk Volume Method', formula: 'V = π ∫ₐᵇ [f(x)]² dx', explanation: 'Volume of solid generated by revolving y = f(x) about x-axis.' },
      { name: 'Sphere Volume Formula', formula: 'V = (4/3) π r³', explanation: 'Analytic volume of sphere derived via calculus disk integration.' },
      { name: 'Average Value Formula', formula: 'f_avg = [1 / (b - a)] ∫ₐᵇ f(x) dx', explanation: 'Mean continuous value over interval [a, b].' }
    ]
  }
];
