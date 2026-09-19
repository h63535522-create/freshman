import { OfficialPdfPage } from './types';

export const mathCh4Part1Pages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 53,
    bookPageLabel: 'Page 53',
    chapterNumber: 4,
    sectionRef: '4.1',
    titleEn: 'Chapter 4: Derivatives and their Applications — Title & Overview',
    titleAm: 'ምዕራፍ 4፡ ዲሪቬቲቭ እና ተግባራዊ ጥቅሞቹ — ርዕስ እና አጠቃላይ መግቢያ',
    subtopicEn: 'AASTU Department of Mathematics, Course Math 1014 / Math 1014B (Applied Mathematics-IB)',
    subtopicAm: 'አዲስ አበባ ሳይንስና ቴክኖሎጂ ዩኒቨርሲቲ (AASTU) የሂሳብ ክፍል፣ Math 1014B',
    pageType: 'cover',
    contentEn: `Addis Ababa Science and Technology University
Department of Mathematics
Lectures for Applied Mathematics

Lecture Title: Derivatives and their applications
Course code: Math1014
Course Title: Applied Mathematics-IB
Enrollment: Regular
Academic Year: 2021/22
Semester: Second
Year of study: Freshman
Target Group: Engineering & Applied`,
    contentAm: `አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ (AASTU)
የሂሳብ ትምህርት ክፍል
የአፕላይድ ሂሳብ ትምህርቶች

የሌክቸር ርዕስ፡ ዲሪቬቲቭ እና ተግባራዊ ጥቅሞቹ
የኮርስ ኮድ፡ Math 1014 / Math 1014B
የኮርስ ርዕስ፡ አፕላይድ ሂሳብ ፩ቢ (Applied Mathematics-IB)
የትምህርት ዘመን፡ 2021/22 (ሁለተኛ ሴሚስተር - Freshman)
ዒላማ የተደረገው ክፍል፡ የምህንድስና እና አፕላይድ ሳይንስ ተማሪዎች`,
    formulas: [
      { name: 'Course Target', formula: 'Math 1014B - Applied Mathematics I (AASTU)', explanation: 'Official Freshman Engineering curriculum module.' }
    ]
  },
  {
    pdfPageNumber: 54,
    bookPageLabel: 'Page 54',
    chapterNumber: 4,
    sectionRef: '4.1.1',
    titleEn: '4.1 Definition, examples & properties of derivatives — Tangent Line & Normal Line',
    titleAm: '4.1 የዲሪቬቲቭ ትርጓሜ፣ ምሳሌዎች እና ባህሪያት — የታንጀንት እና ኖርማል መስመር',
    subtopicEn: 'Definition 4.1.1 Tangent Line Slope, Definition 4.1.2 Normal Line, Tangent to Parabola y = x²',
    subtopicAm: 'የታንጀንት መስመር ስሎፕ ትርጓሜ 4.1.1፣ የኖርማል መስመር ትርጓሜ 4.1.2፣ ለ y = x² ታንጀንት መፈለግ',
    pageType: 'content',
    contentEn: `Chapter 4: Derivatives and Application of Derivatives
4.1 Definition, examples & properties of derivatives
4.1.1 Basic Definition of derivative

Definition 4.1.1 — Tangent Line:
The tangent line to the curve y = f(x) at the point P(a, f(a)) is the line passing through the point (a, f(a)) having slope:
m = lim_{h ⟶ 0} (f(a + h) - f(a)) / h = lim_{x ⟶ a} (f(x) - f(a)) / (x - a)    (4.1)
provided this limit exists.
We can find an equation of the tangent line at P by using the point-slope form:
y = m(x - a) + f(a)

Definition 4.1.2:
The normal line to a curve at a given point is the line perpendicular to the tangent line at that Point.

Example 4.1.1 — Finding a tangent line:
Find an equation of the tangent line to the parabola y = x² at the point P(1, 1).
Solution:
m = lim_{h ⟶ 0} (f(1 + h) - f(1)) / h = lim_{h ⟶ 0} ((1 + h)² - 1) / h = lim_{h ⟶ 0} h(2 + h) / h = 2.
Using the point-slope form:
y - f(a) = m(x - a) ⟹ y - 1 = 2(x - 1) ⟹ y = 2x - 1.

Example 4.1.2:
Find the equation of the line tangent to the graph of f(x) = 1/x at x = 2.`,
    contentAm: `ምዕራፍ 4፡ ዲሪቬቲቭ እና ተግባራዊ ጥቅሞቹ
4.1 የዲሪቬቲቭ ትርጓሜ፣ ምሳሌዎች እና ባህሪያት
4.1.1 መሰረታዊ የዲሪቬቲቭ ትርጓሜ

ትርጓሜ 4.1.1 — ታንጀንት መስመር፡
በከርቩ y = f(x) ላይ በነጥብ P(a, f(a)) የሚያልፍ የታንጀንት መስመር ስሎፕ m የሚከተለው ሊሚት ነው፡
m = lim_{h ⟶ 0} (f(a+h) - f(a))/h = lim_{x ⟶ a} (f(x) - f(a))/(x - a)
የታንጀንት መስመር እኩልታ፡ y = m(x - a) + f(a)

ትርጓሜ 4.1.2 — ኖርማል መስመር፡
በተሰጠ ነጥብ ላይ ለታንጀንቱ ቀጤ-ነክ (Perpendicular) የሆነ መስመር ኖርማል መስመር ይባላል።

ምሳሌ 4.1.1፡ ለፓራቦላ y = x² በነጥብ (1, 1) ላይ የታንጀንት እኩልታ ፈልጉ፡
m = 2 ⟹ y - 1 = 2(x - 1) ⟹ y = 2x - 1.`,
    formulas: [
      { name: 'Tangent Slope', formula: 'm = lim_{h ⟶ 0} [f(a+h) - f(a)] / h', explanation: 'Limit definition of tangent slope at x = a.' },
      { name: 'Tangent Line Equation', formula: 'y = m(x - a) + f(a)', explanation: 'Point-slope form of the tangent line.' }
    ]
  },
  {
    pdfPageNumber: 55,
    bookPageLabel: 'Page 55',
    chapterNumber: 4,
    sectionRef: '4.1.1',
    titleEn: 'Tangent & Normal Examples, Definition 4.1.3 Derivative Function',
    titleAm: 'የታንጀንትና ኖርማል ምሳሌዎች፣ ትርጓሜ 4.1.3 የዲሪቬቲቭ ፈንክሽን',
    subtopicEn: 'Tangent to 1/x at x = 2, Normal Line to y = √(x - 3) parallel to 6x + 3y - 4 = 0, Definition 4.1.3',
    subtopicAm: 'ለ 1/x በ x = 2 ታንጀንት፣ ለ √(x - 3) ኖርማል መስመር፣ ትርጓሜ 4.1.3',
    pageType: 'content',
    contentEn: `4.1.1 Basic Definition of derivative (Page 55)

Solution to Example 4.1.2:
m = lim_{x ⟶ 2} (f(x) - f(2))/(x - 2) = lim_{x ⟶ 2} (1/x - 1/2)/(x - 2) = lim_{x ⟶ 2} -1/(2x) = -1/4.
Point: f(2) = 1/2.
Tangent line: y - 1/2 = -1/4(x - 2) ⟹ y = -1/4 x + 3/4.

Example 4.1.3:
Find an equation of the normal line to the curve y = √(x - 3) which is parallel to the line 6x + 3y - 4 = 0.
Solution:
Line ℓ: y = -2x + 4/3, slope is -2. Desired normal line has slope m_normal = -2.
Tangent slope m_tan = lim_{x ⟶ a} (√(x - 3) - √(a - 3))/(x - a) = 1 / (2√(a - 3)).
Since normal is perpendicular to tangent: m_normal = -2√(a - 3) = -2 ⟹ a = 4.
Point on curve: (4, 1).
Equation: y = -2(x - 4) + 1 ⟹ y = -2x + 9.

Definition 4.1.3 — Derivative:
The derivative of a function f with respect to x is the function f' defined by the rule:
f'(x) = lim_{h ⟶ 0} (f(x + h) - f(x)) / h    (4.2)
The domain of f' consists of all values of x for which the limit exists.`,
    contentAm: `የምሳሌ 4.1.2 መፍትሔ፡
m = -1/4 ⟹ የታንጀንት እኩልታ፡ y = -1/4 x + 3/4።

ምሳሌ 4.1.3፡ ከ 6x + 3y - 4 = 0 ጋር ትይዩ የሆነ የከርቩ y = √(x - 3) ኖርማል መስመር እኩልታ ፈልጉ፡
የመስመሩ ስሎፕ = -2።
የታንጀንት ስሎፕ = 1 / (2√(a - 3))
የኖርማል ስሎፕ = -2√(a - 3) = -2 ⟹ a = 4።
ነጥቡ፡ (4, 1) ⟹ y = -2(x - 4) + 1 ⟹ y = -2x + 9።

ትርጓሜ 4.1.3 — ዲሪቬቲቭ፡
f'(x) = lim_{h ⟶ 0} [f(x + h) - f(x)] / h`,
    formulas: [
      { name: 'Derivative Definition', formula: 'f\'(x) = lim_{h ⟶ 0} [f(x + h) - f(x)] / h', explanation: 'General definition of derivative function.' }
    ]
  },
  {
    pdfPageNumber: 56,
    bookPageLabel: 'Page 56',
    chapterNumber: 4,
    sectionRef: '4.1.1',
    titleEn: 'Derivative Interpretations, Notations, and Examples (3x² - 4x + 1, √x)',
    titleAm: 'የዲሪቬቲቭ ጂኦሜትሪያዊና ፊዚካዊ ትርጓሜዎች፣ ምልክቶችና ምሳሌዎች (3x² - 4x + 1, √x)',
    subtopicEn: 'Geometric Slope, Physical Rate of Change, Notations (dy/dx, D_x f), f\'(2) for 3x² - 4x + 1, Derivative of √x',
    subtopicAm: 'የስሎፕ እና የቀጥታ ለውጥ ትርጓሜ፣ ምልክቶች፣ ለ 3x² - 4x + 1 እና ለ √x የተሰሩ ምሳሌዎች',
    pageType: 'content',
    contentEn: `4.1.1 Basic Definition of derivative (Page 56)

If we let x = a + h, then h = x - a. Hence h ⟶ 0 iff x ⟶ a:
f'(a) = lim_{x ⟶ a} (f(x) - f(a)) / (x - a)    (4.3)

Interpretations of derivatives:
1. Geometric Interpretation: The derivative f' of a function f is a measure of the slope of the tangent line to the graph of f at any point (x, f(x)).
2. Physical Interpretation: The derivative f' measures the instantaneous rate of change of f at x.

Other Notation:
f'(x) = y' = dy/dx = df/dx = (d/dx)f(x) = D f(x) = D_x f(x).

Example 4.1.4 — Finding a Derivative:
For f(x) = 3x² - 4x + 1, find f'(2).
Using Eq. (4.2): f'(2) = lim_{h ⟶ 0} [3(2+h)² - 4(2+h) + 1 - 5]/h = lim_{h ⟶ 0} h(3h + 8)/h = 8.
Using Eq. (4.3): f'(2) = lim_{x ⟶ 2} (3x² - 4x + 1 - 5)/(x - 2) = lim_{x ⟶ 2} (3x + 2) = 8.

Example 4.1.5:
Find the derivative of f(x) = √x.
f'(x) = lim_{h ⟶ 0} (√(x+h) - √x)/h = lim_{h ⟶ 0} h / [h(√(x+h) + √x)] = 1 / (2√x).`,
    contentAm: `የዲሪቬቲቭ ትርጓሜዎች፡
1. ጂኦሜትሪያዊ ትርጓሜ፡ በነጥብ (x, f(x)) ላይ የታንጀንት መስመር ስሎፕ።
2. ፊዚካዊ ትርጓሜ፡ የቅጽበታዊ ለውጥ መጠን (Instantaneous rate of change)።

ምሳሌ 4.1.4፡ ለ f(x) = 3x² - 4x + 1 የ f'(2) ዋጋ = 8።
ምሳሌ 4.1.5፡ ለ f(x) = √x ዲሪቬቲቩ f'(x) = 1 / (2√x) ነው።`,
    formulas: [
      { name: 'Square Root Derivative', formula: 'd/dx [√x] = 1 / (2√x)', explanation: 'Standard derivative of the square root function.' }
    ]
  },
  {
    pdfPageNumber: 57,
    bookPageLabel: 'Page 57',
    chapterNumber: 4,
    sectionRef: '4.1.1',
    titleEn: 'Derivative of √(5 - x²), Rational Function (x - 2)/(1 - x), Velocity Example',
    titleAm: 'የ √(5 - x²) እና (x - 2)/(1 - x) ዲሪቬቲቭ፣ የፍጥነት (Velocity) ምሳሌ',
    subtopicEn: 'Domain of Derivative, Tangent Slope at x = -1, Quotient by Definition, Instantaneous Velocity at t = 5',
    subtopicAm: 'የዲሪቬቲቭ ዶሜይን፣ በ x = -1 ታንጀንት፣ የቅጽበታዊ ፍጥነት በ t = 5 ሰከንድ',
    pageType: 'content',
    contentEn: `4.1.1 Basic Definition of derivative (Page 57)

Example 4.1.6:
Let f(x) = √(5 - x²). Then find:
1. f'(x) and determine the domain of the derivative function.
2. An equation of the tangent line to the graph of f(x) at x = -1.
Solution:
1. f'(x) = lim_{h ⟶ 0} [√(5 - (x+h)²) - √(5 - x²)] / h = -x / √(5 - x²).
Domain of f'(x) is (-√5, √5).
2. The slope m at x = -1: f'(-1) = -(-1)/√(5 - (-1)²) = 1/2.
Tangent line at (-1, 2): y - 2 = 1/2(x + 1) ⟹ y = 1/2 x + 5/2.

Example 4.1.7:
Let y = (x - 2)/(1 - x). Find dy/dx.
dy/dx = lim_{h ⟶ 0} [((x+h)-2)/(1-(x+h)) - (x-2)/(1-x)] / h = -1 / (1 - x)².

Example 4.1.8:
Calculate the instantaneous velocity at time t = 5 of an automobile whose position at time t seconds is given by g(t) = t³ + 4t² + 10 feet.
Solution:
g'(t) = lim_{h ⟶ 0} (g(t+h) - g(t))/h.
g'(5) = lim_{h ⟶ 0} [115h + 19h² + h³] / h = 115.
The instantaneous velocity at t = 5 is g'(5) = 115 ft/sec.`,
    contentAm: `ምሳሌ 4.1.6፡ f(x) = √(5 - x²)
1. f'(x) = -x / √(5 - x²)፤ ዶሜይኑ (-√5, √5) ነው።
2. በ x = -1 ላይ ስሎፑ m = 1/2 ነው።

ምሳሌ 4.1.7፡ y = (x - 2)/(1 - x) ⟹ dy/dx = -1 / (1 - x)²።
ምሳሌ 4.1.8፡ የመኪናው የቦታ እኩልታ g(t) = t³ + 4t² + 10 ቢሆን፣ በ t = 5 ሰከንድ ላይ ቅጽበታዊ ፍጥነቱ g'(5) = 115 ft/sec ይሆናል።`,
    formulas: [
      { name: 'Velocity', formula: 'v(t) = s\'(t) = ds/dt', explanation: 'Instantaneous velocity is the time derivative of position.' }
    ]
  },
  {
    pdfPageNumber: 58,
    bookPageLabel: 'Page 58',
    chapterNumber: 4,
    sectionRef: '4.1.1',
    titleEn: 'Theorem 4.1.1 Differentiability Implies Continuity & Non-Differentiable Examples',
    titleAm: 'ቴዎረም 4.1.1 ዲፈረንሺየብል መሆን ቀጣይነትን ያረጋግጣል፣ ያልሆኑ ምሳሌዎች',
    subtopicEn: 'Proof of Differentiability ⟹ Continuity, Failure for |x| and x^(1/3), Piecewise Differentiability Example',
    subtopicAm: 'የቴዎረም 4.1.1 ማረጋገጫ፣ ለ |x| እና x^(1/3) ዲሪቬቲቭ አለመኖር፣ ክፍፍል ፈንክሽን',
    pageType: 'content',
    contentEn: `4.1.1 Basic Definition of derivative (Page 58)

Example 4.1.9:
A rubber balloon is losing air steadily. At time t minutes the balloon contains 75 - 10t² + t cubic inches of air. What is the rate of loss of air at time t = 1?
f'(1) = lim_{h ⟶ 0} (-19h - 10h²)/h = -19 ft³/sec (decreasing).

Theorem 4.1.1 — Differentiability Implies Continuity:
Let f be a function and a be in its domain. If f is differentiable at a, then f is continuous at a.
Proof:
lim_{x ⟶ a} (f(x) - f(a)) = lim_{x ⟶ a} [(f(x) - f(a))/(x - a) · (x - a)] = f'(a) · 0 = 0.
Hence lim_{x ⟶ a} f(x) = f(a), so f is continuous at a. ■

Situations where continuity fails differentiability:
• f(x) = |x| is continuous at 0, but f'(0) does not exist (left limit = -1, right limit = 1).
• f(x) = x^(1/3) is continuous at 0, but f'(0) = lim_{x ⟶ 0} 1/(x^(2/3)) = +∞ (vertical tangent).

Example 4.1.10 — Piece-wise Function Continuous and Differentiable:
A track function: f(x) = 1/10 x² + bx + c (if x < -10) and -1/4 x + 5/2 (if x ≥ -10).
For continuity at x = -10: f(-10) = 5 ⟹ 10 - 10b + c = 5 ⟹ c = 10b - 5.`,
    contentAm: `ቴዎረም 4.1.1 — ዲፈረንሺየብል መሆን ቀጣይነትን ያስከትላል፡
አንድ ፈንክሽን በ a ላይ ዲሪቬቲቭ ካለው፣ በ a ላይ የግድ ቀጣይ (Continuous) ነው።

ዲሪቬቲቭ የሌላቸው ቀጣይ ፈንክሽኖች፡
1. f(x) = |x| በ x = 0 ላይ ቀጣይ ቢሆንም የግራና የቀኝ ሊሚቱ ስለማይገናኝ f'(0) የለውም።
2. f(x) = x^(1/3) በ x = 0 ላይ ቀጥተኛ ታንጀንት (Vertical Tangent) ስላለው ዲሪቬቲቭ የለውም።`,
    formulas: [
      { name: 'Differentiability ⟹ Continuity', formula: 'f is diff at a ⟹ lim_{x ⟶ a} f(x) = f(a)', explanation: 'Every differentiable function is continuous, but converse is false.' }
    ]
  },
  {
    pdfPageNumber: 59,
    bookPageLabel: 'Page 59',
    chapterNumber: 4,
    sectionRef: '4.1.2',
    titleEn: '4.1.2 Basic Rules of Differentiation — Power, Constant, Multiple, Sum Rules',
    titleAm: '4.1.2 መሰረታዊ የዲሪቬቲቭ ህጎች — ፓወር፣ ቋሚ፣ ብዜት እና ድምር ህግ',
    subtopicEn: 'Constant Rule (c\'=0), Power Rule (x^n)\'=nx^(n-1), Constant Multiple, Sum/Difference Rules',
    subtopicAm: 'የቋሚ ቁጥር ዲሪቬቲቭ ዜሮ መሆኑ፣ የፓወር ህግ፣ የብዜት ህግ፣ የድምርና ቅነሳ ህግ',
    pageType: 'content',
    contentEn: `4.1.2 Basic Rules of Differentiation (Page 59)

From Example 4.1.10 (continued):
Differentiability at -10:
lim_{x ⟶ -10-} (f(x) - f(-10))/(x + 10) = b - 2.
lim_{x ⟶ -10+} (f(x) - f(-10))/(x + 10) = -1/4.
b - 2 = -1/4 ⟹ b = 7/4.
c = 10(7/4) - 5 = 35/2 - 10/2 = 25/2.

Basic Rules of Differentiation:
Theorem 4.1.2 — Constant Function: (d/dx)(c) = 0.
Theorem 4.1.3 — The Power Rule: If n is any real number and f(x) = x^n, then:
f'(x) = (d/dx)(x^n) = n x^(n - 1).

Example 4.1.11:
1. f(x) = x^14 ⟹ f'(x) = 14x^13.
2. f(x) = 1/x^6 = x^(-6) ⟹ f'(x) = -6x^(-7) = -6 / x^7.

Theorem 4.1.4 — Constant Multiple Rule: (d/dx)[c f(x)] = c (d/dx)[f(x)].
Theorem 4.1.5 — Sum and Difference Rule: (d/dx)[f(x) ± g(x)] = f'(x) ± g'(x).

Example 4.1.12:
Find derivative of f(x) = 2x^6 + 3x^4 - 4x³ + x² - 5x + 9.`,
    contentAm: `መሰረታዊ የዲሪቬቲቭ ህጎች፡
1. የቋሚ ቁጥር ህግ፡ d/dx(c) = 0
2. የፓወር ህግ (Power Rule)፡ d/dx(x^n) = n x^(n - 1)
3. የቋሚ ብዜት ህግ፡ d/dx[c f(x)] = c f'(x)
4. የድምርና ቅነሳ ህግ፡ d/dx[f(x) ± g(x)] = f'(x) ± g'(x)

ምሳሌ 4.1.11፡
d/dx(x^14) = 14x^13
d/dx(x^-6) = -6/x^7`,
    formulas: [
      { name: 'Power Rule', formula: 'd/dx (x^n) = n x^{n-1}', explanation: 'Fundamental power differentiation rule.' },
      { name: 'Constant Rule', formula: 'd/dx (c) = 0', explanation: 'Derivative of any constant is zero.' }
    ]
  },
  {
    pdfPageNumber: 60,
    bookPageLabel: 'Page 60',
    chapterNumber: 4,
    sectionRef: '4.1.2',
    titleEn: 'Product and Quotient Rules with Detailed Examples',
    titleAm: 'የብዜት እና የክፍፍል ዲሪቬቲቭ ህጎች ከነምሳሌዎቻቸው',
    subtopicEn: 'Theorem 4.1.6 Product Rule [fg]\'=f\'g+fg\', Theorem 4.1.7 Quotient Rule [f/g]\'=(f\'g-g\'f)/g²',
    subtopicAm: 'ቴዎረም 4.1.6 የብዜት ህግ፣ ቴዎረም 4.1.7 የክፍፍል ህግ እና የተሰሩ ምሳሌዎች',
    pageType: 'content',
    contentEn: `4.1.2 Basic Rules of Differentiation (Page 60)

Solution to Example 4.1.12:
f'(x) = 12x^5 + 12x³ - 12x² + 2x - 5.

Theorem 4.1.6 — The Product Rule:
Let f(x) and g(x) be differentiable functions. Then:
(d/dx)[f(x) g(x)] = f'(x) g(x) + g'(x) f(x).

Example 4.1.13:
Find the derivative of p(x) = (x² + 2)(3x³ - 5x).
p'(x) = (2x)(3x³ - 5x) + (9x² - 5)(x² + 2) = 15x^4 + 3x² - 10.

Example 4.1.14:
Find the derivative of f(x) = (x² - 1)(√x - 2x).
f'(x) = 2√x - 6x² + (x² - 1)/(2√x) + 2.

Theorem 4.1.7 — The Quotient Rule:
If f and g are differentiable and g(x) ≠ 0:
(d/dx)[f(x)/g(x)] = [f'(x) g(x) - g'(x) f(x)] / [g(x)]².

Example 4.1.15:
Find the derivative of f(x) = (x² - x)/(x³ + 1).
f'(x) = [(2x - 1)(x³ + 1) - (x² - x)(3x²)] / (x³ + 1)²
= (-x^4 + 2x³ + 2x - 1) / (x³ + 1)².`,
    contentAm: `ቴዎረም 4.1.6 — የብዜት ህግ (Product Rule)፡
d/dx [f(x) g(x)] = f'(x) g(x) + f(x) g'(x)

ቴዎረም 4.1.7 — የክፍፍል ህግ (Quotient Rule)፡
d/dx [f(x)/g(x)] = [f'(x) g(x) - g'(x) f(x)] / [g(x)]²

ምሳሌ 4.1.15፡
f(x) = (x² - x)/(x³ + 1) ⟹ f'(x) = (-x^4 + 2x³ + 2x - 1) / (x³ + 1)²`,
    formulas: [
      { name: 'Product Rule', formula: '(fg)\' = f\'g + fg\'', explanation: 'Derivative of a product of two differentiable functions.' },
      { name: 'Quotient Rule', formula: '(f/g)\' = (f\'g - fg\') / g²', explanation: 'Derivative of a quotient of two differentiable functions.' }
    ]
  },
  {
    pdfPageNumber: 61,
    bookPageLabel: 'Page 61',
    chapterNumber: 4,
    sectionRef: '4.1.3',
    titleEn: '4.1.3 The Chain Rule & 4.2.1 Inverse Function Theorem',
    titleAm: '4.1.3 የሰንሰለት ህግ (Chain Rule) እና 4.2.1 የኢንቨርስ ፈንክሽን ቴዎረም',
    subtopicEn: 'Theorem 4.1.8 Chain Rule, Composite Function Derivatives, Theorem 4.2.1 Inverse Function Theorem',
    subtopicAm: 'ቴዎረም 4.1.8 የሰንሰለት ህግ፣ ውህድ ፈንክሽን፣ ቴዎረም 4.2.1 የኢንቨርስ ዲሪቬቲቭ',
    pageType: 'content',
    contentEn: `4.1.3 The Chain Rule (Page 61)

Theorem 4.1.8 — The Chain Rule:
If g is differentiable at x and f is differentiable at g(x), then the composite function h(x) = (f ∘ g)(x) = f(g(x)) is differentiable at x and:
h'(x) = f'(g(x)) · g'(x).
In Leibniz notation: dy/dx = (dy/du) · (du/dx).

Example 4.1.16:
Find derivative of h(x) = (2x + 1)^5 (3x - 2)^7.
h'(x) = 5(2x + 1)^4 · 2(3x - 2)^7 + 7(3x - 2)^6 · 3(2x + 1)^5
= (2x + 1)^4 (3x - 2)^6 (72x + 1).

Example 4.1.17:
Find dy/dx if y = u³ - u² + u + 1 and u = x³ + 1.
dy/dx = (3u² - 2u + 1)(3x²) = 3x²(3x^6 + 4x³ + 2).

4.2 Derivatives of Inverse, Trigonometric and Hyperbolic Functions
4.2.1 Derivatives of Inverse Functions
Theorem 4.2.1 — Inverse Function Theorem:
If y = f^(-1)(x) is the inverse of differentiable f(x) and f'(f^(-1)(x)) ≠ 0:
(f^(-1))'(x) = 1 / [f'(f^(-1)(x))].
Alternatively, if y = g(x) is inverse of f: g'(x) = 1 / [f'(g(x))].

Example 4.2.1:
Use inverse function theorem to differentiate g(x) = (x + 2)/x.`,
    contentAm: `4.1.3 የሰንሰለት ህግ (The Chain Rule)፡
d/dx [f(g(x))] = f'(g(x)) · g'(x)
dy/dx = (dy/du) · (du/dx)

4.2.1 የኢንቨርስ ፈንክሽን ቴዎረም፡
የ f(x) ኢንቨርስ g(x) ቢሆን፡
g'(x) = 1 / f'(g(x))`,
    formulas: [
      { name: 'Chain Rule', formula: 'd/dx [f(g(x))] = f\'(g(x)) · g\'(x)', explanation: 'Composite function differentiation rule.' },
      { name: 'Inverse Function Derivative', formula: '(f^{-1})\'(x) = 1 / f\'(f^{-1}(x))', explanation: 'Derivative of inverse function via reciprocal of derivative.' }
    ]
  },
  {
    pdfPageNumber: 62,
    bookPageLabel: 'Page 62',
    chapterNumber: 4,
    sectionRef: '4.2.2',
    titleEn: '4.2.2 Derivatives of Trigonometric Functions & Inverse Trig Domains',
    titleAm: '4.2.2 የትሪጎኖሜትሪክ ፈንክሽኖች ዲሪቬቲቭ እና የኢንቨርስ ትሪግ ዶሜይኖች',
    subtopicEn: 'Theorem 4.2.2 Trig Derivatives & Proof of (sinx)\'=cosx, Definition 4.2.1 Inverse Trig Functions & Domains',
    subtopicAm: 'የ sin, cos, tan, csc, sec, cot ዲሪቬቲቭ እና የ (sinx)\' ማረጋገጫ፣ የኢንቨርስ ትሪግ ዶሜይኖች',
    pageType: 'content',
    contentEn: `4.2.2 Derivatives of Trigonometric Functions (Page 62)

From Example 4.2.1: g'(x) = -2 / x².

Theorem 4.2.2 — Rules for Differentiating Trigonometric Functions:
(d/dx)(sin x) = cos x
(d/dx)(cos x) = -sin x
(d/dx)(tan x) = sec² x
(d/dx)(csc x) = -csc x cot x
(d/dx)(sec x) = sec x tan x
(d/dx)(cot x) = -csc² x

Proof of (d/dx)(sin x) = cos x:
lim_{h ⟶ 0} (sin(x + h) - sin x)/h = lim_{h ⟶ 0} [sin x cos h + cos x sin h - sin x]/h
= sin x lim_{h ⟶ 0} (cos h - 1)/h + cos x lim_{h ⟶ 0} (sin h)/h
= (sin x)(0) + (cos x)(1) = cos x. ■

Definition 4.2.1 — Inverse Trigonometric Functions & Domains:
• y = sin^(-1) x  ⟺  x = sin y,  Domain: [-1, 1]
• y = cos^(-1) x  ⟺  x = cos y,  Domain: [-1, 1]
• y = tan^(-1) x  ⟺  x = tan y,  Domain: (-∞, ∞)
• y = csc^(-1) x  ⟺  x = csc y,  Domain: (-∞, -1] ∪ [1, ∞)
• y = sec^(-1) x  ⟺  x = sec y,  Domain: (-∞, -1] ∪ [1, ∞)
• y = cot^(-1) x  ⟺  x = cot y,  Domain: (-∞, ∞)`,
    contentAm: `የትሪጎኖሜትሪክ ፈንክሽኖች ዲሪቬቲቭ፡
• (sin x)' = cos x
• (cos x)' = -sin x
• (tan x)' = sec² x
• (csc x)' = -csc x cot x
• (sec x)' = sec x tan x
• (cot x)' = -csc² x

የኢንቨርስ ትሪጎኖሜትሪክ ፈንክሽኖች ዶሜይን፡
arcsin x እና arccos x: [-1, 1]
arctan x እና arccot x: (-∞, ∞)
arcsec x እና arccsc x: |x| ≥ 1`,
    formulas: [
      { name: 'Sine Derivative', formula: 'd/dx [sin x] = cos x', explanation: 'Fundamental trigonometric derivative.' },
      { name: 'Cosine Derivative', formula: 'd/dx [cos x] = -sin x', explanation: 'Negative sine derivative for cosine.' }
    ]
  },
  {
    pdfPageNumber: 63,
    bookPageLabel: 'Page 63',
    chapterNumber: 4,
    sectionRef: '4.2.3',
    titleEn: 'Inverse Trig Derivatives & 4.2.3 Hyperbolic Functions',
    titleAm: 'የኢንቨርስ ትሪግ ዲሪቬቲቭ እና 4.2.3 ሃይፐርቦሊክ ፈንክሽኖች',
    subtopicEn: 'Theorem 4.2.3 Inverse Trig Derivatives, Definition 4.2.2 Hyperbolic Functions (sinh, cosh, tanh)',
    subtopicAm: 'የ arcsin, arccos, arctan ዲሪቬቲቭ ቀመሮች እና የሃይፐርቦሊክ ፈንክሽኖች ትርጓሜ',
    pageType: 'content',
    contentEn: `4.2.3 Hyperbolic Functions (Page 63)

Theorem 4.2.3 — Rules for Differentiating Inverse Trigonometric Functions:
• (d/dx)(sin^(-1) x) = 1 / √(1 - x²)
• (d/dx)(cos^(-1) x) = -1 / √(1 - x²)
• (d/dx)(tan^(-1) x) = 1 / (1 + x²)
• (d/dx)(csc^(-1) x) = -1 / (|x| √(x² - 1))
• (d/dx)(sec^(-1) x) = 1 / (|x| √(x² - 1))
• (d/dx)(cot^(-1) x) = -1 / (1 + x²)

Proof: Let g(x) = sin^(-1) x. By inverse function theorem:
g'(x) = 1 / f'(g(x)) = 1 / cos(sin^(-1) x) = 1 / √(1 - x²). ■

Definition 4.2.2 — Hyperbolic Functions:
sinh x = (e^x - e^(-x)) / 2
cosh x = (e^x + e^(-x)) / 2
tanh x = sinh x / cosh x = (e^x - e^(-x)) / (e^x + e^(-x))
csch x = 1 / sinh x
sech x = 1 / cosh x
coth x = cosh x / sinh x

Remark: The domain of coth x and csch x is x ≠ 0, while sinh x and cosh x are defined for all ℝ.`,
    contentAm: `የኢንቨርስ ትሪጎኖሜትሪክ ዲሪቬቲቭ ህጎች፡
• d/dx[sin⁻¹ x] = 1 / √(1 - x²)
• d/dx[cos⁻¹ x] = -1 / √(1 - x²)
• d/dx[tan⁻¹ x] = 1 / (1 + x²)

4.2.3 ሃይፐርቦሊክ ፈንክሽኖች፡
sinh x = (e^x - e^-x) / 2
cosh x = (e^x + e^-x) / 2
tanh x = sinh x / cosh x`,
    formulas: [
      { name: 'Arcsin Derivative', formula: 'd/dx [sin^{-1} x] = 1 / √(1 - x²)', explanation: 'Derivative of inverse sine.' },
      { name: 'Arctan Derivative', formula: 'd/dx [tan^{-1} x] = 1 / (1 + x²)', explanation: 'Derivative of inverse tangent.' }
    ]
  },
  {
    pdfPageNumber: 64,
    bookPageLabel: 'Page 64',
    chapterNumber: 4,
    sectionRef: '4.2.3',
    titleEn: 'Hyperbolic Identities, Derivatives & Logarithmic Representations',
    titleAm: 'የሃይፐርቦሊክ ማንነቶች፣ ዲሪቬቲቭ እና የሎጋሪዝም ውክልና',
    subtopicEn: 'cosh²x - sinh²x = 1, Derivatives of sinh & cosh, Inverse Hyperbolic Logarithmic Forms',
    subtopicAm: 'cosh²x - sinh²x = 1፣ የሃይፐርቦሊክ ዲሪቬቲቭ፣ የኢንቨርስ ሃይፐርቦሊክ ሎጋሪዝማዊ ቀመር',
    pageType: 'content',
    contentEn: `4.2.3 Hyperbolic Functions (Page 64)

Theorem 4.2.4 — Hyperbolic Identities:
• sinh(-x) = -sinh x,  cosh(-x) = cosh x
• cosh² x - sinh² x = 1
• sech² x = 1 - tanh² x
• sinh(x + y) = sinh x cosh y + cosh x sinh y
• sinh 2x = 2 sinh x cosh x
• cosh 2x = cosh² x + sinh² x
• cosh² x = (1 + cosh 2x)/2,  sinh² x = (-1 + cosh 2x)/2

Theorem 4.2.5 — Derivatives of Hyperbolic Functions:
(d/dx)(sinh x) = cosh x
(d/dx)(cosh x) = sinh x
(d/dx)(tanh x) = sech² x
(d/dx)(csch x) = -csch x coth x
(d/dx)(sech x) = -sech x tanh x
(d/dx)(coth x) = -csch² x

Logarithmic Representations of Inverse Hyperbolic Functions:
• sinh^(-1) x = ln(x + √(x² + 1)),  x ∈ (-∞, ∞)
• cosh^(-1) x = ln(x + √(x² - 1)),  x ∈ [1, ∞)
• tanh^(-1) x = 1/2 ln((1 + x)/(1 - x)),  x ∈ (-1, 1)`,
    contentAm: `የሃይፐርቦሊክ ማንነቶች፡
• cosh² x - sinh² x = 1
• (sinh x)' = cosh x
• (cosh x)' = sinh x
• (tanh x)' = sech² x

የኢንቨርስ ሃይፐርቦሊክ ሎጋሪዝማዊ ውክልና፡
sinh⁻¹ x = ln(x + √(x² + 1))
cosh⁻¹ x = ln(x + √(x² - 1))
tanh⁻¹ x = 1/2 ln((1 + x)/(1 - x))`,
    formulas: [
      { name: 'Fundamental Hyperbolic Identity', formula: 'cosh² x - sinh² x = 1', explanation: 'Analog of pythagorean identity for hyperbolas.' },
      { name: 'Inverse Sinh Log Form', formula: 'sinh^{-1} x = ln(x + √(x² + 1))', explanation: 'Closed-form natural logarithm expression.' }
    ]
  },
  {
    pdfPageNumber: 65,
    bookPageLabel: 'Page 65',
    chapterNumber: 4,
    sectionRef: '4.3',
    titleEn: '4.3 Higher-Order Derivatives & Derivatives of Inverse Hyperbolics',
    titleAm: '4.3 ከፍተኛ-ደረጃ ዲሪቬቲቭ (Higher-Order) እና የኢንቨርስ ሃይፐርቦሊክ ዲሪቬቲቭ',
    subtopicEn: 'Theorem 4.2.6 Inverse Hyperbolic Derivatives, Definition of f\'\', f\'\'\', f^(n), Polynomial Derivatives',
    subtopicAm: 'የኢንቨርስ ሃይፐርቦሊክ ዲሪቬቲቭ ቀመሮች፣ ሁለተኛና ሶስተኛ ዲሪቬቲቭ ምልክቶችና ምሳሌዎች',
    pageType: 'content',
    contentEn: `4.3 Higher-Order Derivatives and Implicit Differentiation (Page 65)

Theorem 4.2.6 — Derivatives of Inverse Hyperbolic Functions:
• (d/dx)(sinh^(-1) x) = 1 / √(x² + 1)
• (d/dx)(cosh^(-1) x) = 1 / √(x² - 1)
• (d/dx)(tanh^(-1) x) = 1 / (1 - x²)
• (d/dx)(csch^(-1) x) = -1 / (|x| √(x² + 1))
• (d/dx)(sech^(-1) x) = -1 / (x √(1 - x²))
• (d/dx)(coth^(-1) x) = 1 / (1 - x²)

4.3 Higher-Order Derivatives
4.3.1 Higher order derivatives:
The derivative f' of a function f is itself a function. The derivative of f', if it exists, is denoted by f'' and is called the second derivative of f.
Continuing in this fashion, we have the third f''', fourth f^(4), and n-th derivative f^(n):
Notations:
f', f'', f''', ..., f^(n)  or  df/dx, d²f/dx², d³f/dx³, ..., d^n f / dx^n.

Example 4.3.1:
For f(x) = 2x² - 3x + 1:
f'(x) = 4x - 3
f''(x) = 4`,
    contentAm: `የኢንቨርስ ሃይፐርቦሊክ ዲሪቬቲቭ ቀመሮች፡
d/dx[sinh⁻¹ x] = 1 / √(x² + 1)
d/dx[cosh⁻¹ x] = 1 / √(x² - 1)
d/dx[tanh⁻¹ x] = 1 / (1 - x²)

4.3 ከፍተኛ-ደረጃ ዲሪቬቲቭ (Higher-Order Derivatives)፡
የ f'(x) ዲሪቬቲቭ ሁለተኛ ዲሪቬቲቭ f''(x) ወይም d²f/dx² ይባላል።
ምሳሌ 4.3.1፡
f(x) = 2x² - 3x + 1
f'(x) = 4x - 3
f''(x) = 4`,
    formulas: [
      { name: 'Second Derivative', formula: 'f\'\'(x) = d²y/dx² = d/dx [f\'(x)]', explanation: 'Derivative of the first derivative function.' }
    ]
  },
  {
    pdfPageNumber: 66,
    bookPageLabel: 'Page 66',
    chapterNumber: 4,
    sectionRef: '4.3.2',
    titleEn: 'Higher Derivatives of 1/x, Motion Problem (s, v, a) & Implicit Differentiation',
    titleAm: 'የ 1/x ከፍተኛ ዲሪቬቲቭ፣ የእንቅስቃሴ ስሌት (ቦታ፣ ፍጥነት፣ አክስለሬሽን) እና ኢምፕሊሲት ዲሪቬቲቭ',
    subtopicEn: 'Higher Derivatives of 1/x, Position s(t)=2t³-15t²+24t, Velocity & Acceleration, Implicit Differentiation Steps',
    subtopicAm: 'የ 1/x ተከታታይ ዲሪቬቲቭ፣ የፍጥነትና ማጣደፍ ስሌት፣ የኢምፕሊሲት ዲፈረንሺየሽን ቅደም-ተከተል',
    pageType: 'content',
    contentEn: `4.3.2 Implicit Differentiation (Page 66)

Example 4.3.2:
If f(x) = 1/x:
f'(x) = -1/x²,  f''(x) = 2/x³,  f'''(x) = -6/x^4,  f^(4)(x) = 24/x^5.
In general: f^(n)(x) = (-1)^n n! / x^(n+1).

Example 4.3.3:
The position of a particle moving along a straight line is given by:
s = f(t) = 2t³ - 15t² + 24t,  t ≥ 0 (s in feet, t in seconds).
(a) Velocity: v(t) = ds/dt = 6t² - 30t + 24 = 6(t - 1)(t - 4).
At t = 2: v(2) = 6(1)(-2) = -12 ft/sec. Speed = |v(2)| = 12 ft/sec.
(b) Stationary when v(t) = 0 ⟹ t = 1 and t = 4.
f(1) = 11 ft,  f(4) = -16 ft.
(c) Acceleration: a(t) = dv/dt = f''(t) = 12t - 30.
At t = 2: a(2) = 12(2) - 30 = -6 ft/sec² (decelerating).
(d) Acceleration zero when 12t - 30 = 0 ⟹ t = 5/2 sec. Negative for t < 5/2, positive for t > 5/2.

4.3.2 Implicit Differentiation:
For equations where y is implicitly defined in terms of x:
1. Differentiate both sides with respect to x, applying chain rule to y terms (multiplying by dy/dx).
2. Solve algebraically for dy/dx in terms of x and y.`,
    contentAm: `ምሳሌ 4.3.3 የእንቅስቃሴ ስሌት፡
የቦታ ቀመር፡ s(t) = 2t³ - 15t² + 24t
ፍጥነት፡ v(t) = s'(t) = 6(t - 1)(t - 4)
በ t = 2 ላይ፡ v(2) = -12 ft/sec (ፍጥነቱ 12 ft/sec ወደ አሉታዊ አቅጣጫ)
የቆመበት ጊዜ (Stationary)፡ v(t) = 0 ⟹ t = 1 እና t = 4
ማጣደፍ (Acceleration)፡ a(t) = v'(t) = 12t - 30

4.3.2 ኢምፕሊሲት ዲፈረንሺየሽን፡
y ን በቀጥታ በ x መግለጽ በማይቻልበት ጊዜ ሁለቱንም ወገን በ x ዲፈረንሺየት በማድረግ dy/dx ን መፈለግ።`,
    formulas: [
      { name: 'Acceleration', formula: 'a(t) = v\'(t) = s\'\'(t)', explanation: 'Second time derivative of position.' }
    ]
  },
  {
    pdfPageNumber: 67,
    bookPageLabel: 'Page 67',
    chapterNumber: 4,
    sectionRef: '4.4',
    titleEn: 'Implicit Differentiation Examples & 4.4 Applications of Derivatives',
    titleAm: 'የኢምፕሊሲት ዲሪቬቲቭ ምሳሌዎች እና 4.4 የዲሪቬቲቭ ተግባራዊ ጥቅሞች (Related Rates)',
    subtopicEn: 'Algebraic Curve, Trigonometric Implicit, Tangent to Bifolium, Second Derivative y\'\' of y^4+x^4=16, Related Rates Introduction',
    subtopicAm: 'የተወሳሰቡ ከርቮች dy/dx ስሌት፣ የታንጀንት እኩልታ፣ የ y^4+x^4=16 ሁለተኛ ዲሪቬቲቭ፣ የዝምድና ፍጥነቶች መግቢያ',
    pageType: 'content',
    contentEn: `4.4 Applications of Derivatives (Page 67)

Example 4.3.4:
If 2x² y² - 3x³ + 5y³ + 6xy² = 5, find dy/dx.
Differentiating: 4x y² + 4x² y y' - 9x² + 15y² y' + 6y² + 12xy y' = 0
dy/dx = (9x² - 6y² - 4xy²) / (4x² y + 15y² + 12xy).

Example 4.3.5:
Find dy/dx at (π/2, π) if x sin y - y cos 2x = 2x.
dy/dx = 4 / (2 - π).

Example 4.3.6:
Find an equation of the tangent line to the bifolium 4x^4 + 8x² y² - 25x² y + 4y^4 = 0 at (2, 1).
Differentiating implicitly gives dy/dx = 3 at (2, 1).
Tangent line: y = 3x - 5.

Example 4.3.7:
Find y'' implicitly for y^4 + x^4 = 16. Then find y'' at (-2, 0).
4y³ y' + 4x³ = 0 ⟹ y' = -x³ / y³.
y'' = - [3x² y³ - 3x³ y² y'] / y^6 = - [3x² y³ - 3x³ y²(-x³/y³)] / y^6
= - 3x²(x^4 + y^4) / y^7 = - 3x²(16) / y^7 = -48x² / y^7.

4.4 Applications of Derivatives
4.4.1 Related Rates:
In a related rates problem the idea is to compute the rate of change of one quantity in terms of the rate of change of another quantity. Use the Chain Rule to differentiate with respect to time t.`,
    contentAm: `ምሳሌ 4.3.6፡ ለቢፎሊየም ከርቭ 4x^4 + 8x²y² - 25x²y + 4y^4 = 0 በነጥብ (2, 1) ላይ የታንጀንት እኩልታ y = 3x - 5 ነው።
ምሳሌ 4.3.7፡ ለ y^4 + x^4 = 16 ሁለተኛው ዲሪቬቲቭ y'' = -48x² / y^7 ይሆናል።

4.4.1 የዝምድና ለውጥ መጠኖች (Related Rates)፡
አንዱ ተለዋዋጭ በጊዜ ሂደት ሲቀየር ሌላው ተዛማጅ ተለዋዋጭ በምን ያህል ፍጥነት እንደሚቀየር በሰንሰለት ህግ ተጠቅሞ በጊዜ t ዲፈረንሺየት የማድረግ ስልት ነው።`,
    formulas: [
      { name: 'Implicit Differentiation', formula: 'd/dx [y^n] = n y^{n-1} (dy/dx)', explanation: 'Chain rule application to dependent variable y.' }
    ]
  }
];
