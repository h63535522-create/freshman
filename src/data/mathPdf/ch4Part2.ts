import { OfficialPdfPage } from './types';

export const mathCh4Part2Pages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 68,
    bookPageLabel: 'Page 68',
    chapterNumber: 4,
    sectionRef: '4.4.1',
    titleEn: '4.4.1 Related Rates Guidelines & Rocket Tracking Problem',
    titleAm: '4.4.1 የዝምድና ፍጥነቶች መመሪያዎች እና የሮኬት መከታተያ ስሌት',
    subtopicEn: '5-Step Strategy for Related Rates, Rocket Launched Vertically, Elevation Angle θ, sec²θ Calculation',
    subtopicAm: 'የተዛማጅ ለውጦች 5 ደረጃዎች፣ የሮኬት ከፍታ እና የካሜራ አንግል ለውጥ ስሌት',
    pageType: 'content',
    contentEn: `4.4.1 Related Rate (Page 68)

Guidelines for Solving a Related Rates Problem:
1. Label the variable quantities involved in the problem and draw a figure if applicable.
2. Write down the given values of the variables and their rates of change with respect to t.
3. Find an equation that relates the variables.
4. Differentiate both sides of this equation implicitly with respect to t.
5. Replace the variables and derivative in the resulting equation by the values found in Step 2, and solve for the required rate of change.

Example 4.4.1:
A rocket is launched so that it rises vertically. A camera is positioned 5000 ft from the launch pad. When the rocket is 1000 ft above the launch pad, its velocity is 600 ft/sec. Find the necessary rate of change of the camera’s angle as a function of time so that it stays focused on the rocket.

Solution:
Step 1: Variables: h = height of rocket, θ = angle between camera lens and ground.
Step 2: Given dh/dt = 600 ft/sec when h = 1000 ft. Find dθ/dt.
Step 3: Relationship: tan θ = h / 5000 ⟹ h = 5000 tan θ.
Step 4: Differentiating with respect to t: dh/dt = 5000 sec² θ (dθ/dt).
Step 5: When h = 1000 ft, hypotenuse c = √(5000² + 1000²) = 1000√26 ft.`,
    contentAm: `የተዛማጅ ለውጦች (Related Rates) አፈታት መመሪያ፡
1. ተለዋዋጮችን መለየትና ስዕል መሳል
2. የተሰጡትን ዋጋዎችና የጊዜ ለውጥ መጠኖች መመዝገብ
3. ተለዋዋጮቹን የሚያዛምድ እኩልታ ማግኘት
4. ሁለቱንም ወገን በጊዜ t አንጻር ዲፈረንሺየት ማድረግ
5. የተሰጡትን ዋጋዎች በመተካት የሚፈለገውን የለውጥ መጠን ማስላት

ምሳሌ 4.4.1፡ ሮኬት ከ 5000 ጫማ ርቀት ባለው ካሜራ ሲታይ፣ ከፍታው 1000 ጫማ እና ፍጥነቱ 600 ft/sec በሆነበት ቅጽበት የካሜራው አንግል ለውጥ መጠን (dθ/dt) ስሌት።`,
    formulas: [
      { name: 'Related Rates Form', formula: 'dh/dt = 5000 sec²θ · (dθ/dt)', explanation: 'Differentiating tan relation with respect to time.' }
    ]
  },
  {
    pdfPageNumber: 69,
    bookPageLabel: 'Page 69',
    chapterNumber: 4,
    sectionRef: '4.4.1',
    titleEn: 'Rocket Angle Solution & Conical Funnel Drainage Problem',
    titleAm: 'የሮኬት አንግል መልስ እና የፈንገስ (ኮን) የውሃ ፍሰት ስሌት',
    subtopicEn: 'dθ/dt = 3/26 rad/sec, Example 4.4.2 Water Draining from Cone at 0.03 ft³/sec, Volume Formula V = (1/3)πr²h',
    subtopicAm: 'የአንግል ፍጥነት dθ/dt = 3/26 rad/s፣ ከኮን የውሃ መፍሰስ ምሳሌ 4.4.2፣ የኮን ይዘት V = (1/3)πr²h',
    pageType: 'content',
    contentEn: `4.4.1 Related Rate (Page 69)

Example 4.4.1 (continued):
c = 1000√26 ft.
sec² θ = (hypotenuse / adjacent)² = (1000√26 / 5000)² = 26 / 25.
Substitute into dh/dt = 5000 sec² θ (dθ/dt):
600 = 5000 (26/25) (dθ/dt) = 5200 (dθ/dt)
⟹ dθ/dt = 600 / 5200 = 3 / 26 rad/sec.

Example 4.4.2:
Water is draining from the bottom of a cone-shaped funnel at the rate of 0.03 ft³/sec. The height of the funnel is 2 ft and the radius at the top of the funnel is 1 ft. At what rate is the height of the water in the funnel changing when the height of the water is 1/2 ft?

Solution:
Step 1: Let h = height of water, r = radius of surface, V = volume of water.
Step 2: dV/dt = -0.03 ft³/sec. Find dh/dt when h = 1/2 ft.
Step 3: Volume of cone: V = (1/3) π r² h.`,
    contentAm: `የምሳሌ 4.4.1 መልስ፡
dθ/dt = 3/26 ራዲያን/ሰከንድ።

ምሳሌ 4.4.2፡ ከ 2 ጫማ ከፍታና 1 ጫማ ራዲየስ ካለው የኮን ፈንገስ ውሃ በ 0.03 ft³/sec ፍጥነት እየፈሰሰ ቢሆን፣ የውሃው ከፍታ 1/2 ጫማ በደረሰበት ቅጽበት የከፍታው መቀነስ መጠን (dh/dt) ስንት ይሆናል?
የኮን ይዘት፡ V = (1/3) π r² h`,
    formulas: [
      { name: 'Cone Volume', formula: 'V = (1/3) π r² h', explanation: 'Volume of right circular cone.' }
    ]
  },
  {
    pdfPageNumber: 70,
    bookPageLabel: 'Page 70',
    chapterNumber: 4,
    sectionRef: '4.4.2',
    titleEn: 'Cone Solution, 4.4.2 Extrema, Fermat’s Theorem & Critical Numbers',
    titleAm: 'የኮን ስሌት መልስ፣ 4.4.2 ከፍተኛና ዝቅተኛ ዋጋዎች፣ የፈርማት ቴዎረም እና ክሪቲካል ቁጥሮች',
    subtopicEn: 'dh/dt = -0.48/π ≈ -0.153 ft/sec, Absolute vs Relative Extrema, Theorem 4.4.1 Fermat\'s Theorem, Definition 4.4.3 Critical Number',
    subtopicAm: 'dh/dt = -0.153 ft/s፣ ፍጹምና አንጻራዊ ኤክስትሪማ፣ የፈርማት ቴዎረም 4.4.1፣ ክሪቲካል ቁጥሮች',
    pageType: 'content',
    contentEn: `4.4.2 Extrema of a Function (Page 70)

Example 4.4.2 (continued):
By similar triangles: r/h = 1/2 ⟹ r = h/2.
V = (1/3) π (h/2)² h = (π/12) h³.
Differentiating with respect to t:
dV/dt = (π/4) h² (dh/dt).
Substitute h = 1/2 ft and dV/dt = -0.03 ft³/sec:
-0.03 = (π/4)(1/4)(dh/dt) = (π/16)(dh/dt)
⟹ dh/dt = -0.48 / π ≈ -0.153 ft/sec.

4.4.2 Extrema of a Function:
Definition 4.4.1 — Absolute Extrema:
f has an absolute maximum at c if f(x) ≤ f(c) for all x in domain D.
f has an absolute minimum at c if f(x) ≥ f(c) for all x in domain D.

Definition 4.4.2 — Relative (Local) Extrema:
f has a relative maximum at c if f(c) ≥ f(x) for all x in some open interval containing c.

Theorem 4.4.1 — Fermat's Theorem:
If f has a relative extremum at c, then either f'(c) = 0 or f'(c) does not exist.

Definition 4.4.3 — Critical Number:
A critical number of a function f is any number c in the domain of f at which f'(c) = 0 or f'(c) does not exist.`,
    contentAm: `የፈንገሱ ከፍታ ለውጥ፡
dh/dt = -0.48/π ≈ -0.153 ft/sec (ውሃው በሰከንድ በ 0.153 ጫማ ይቀንሳል)።

4.4.2 የፈንክሽን ኤክስትሪማ (Extrema of a Function)፡
• ፍጹም ከፍተኛ (Absolute Max) እና ዝቅተኛ (Absolute Min)
• አንጻራዊ ከፍተኛ (Local Max) እና ዝቅተኛ (Local Min)

ቴዎረም 4.4.1 — የፈርማት ቴዎረም (Fermat's Theorem)፡
አንድ ፈንክሽን በ c ላይ አንጻራዊ ኤክስትሪማ ካለው፣ f'(c) = 0 ነው ወይም f'(c) አይኖርም።

ትርጓሜ 4.4.3 — ክሪቲካል ቁጥር (Critical Number)፡
በዶሜይኑ ውስጥ f'(c) = 0 ወይም f'(c) የማይኖርበት ማንኛውም ነጥብ c ክሪቲካል ቁጥር ይባላል።`,
    formulas: [
      { name: 'Critical Number Condition', formula: 'f\'(c) = 0 \\text{ or } f\'(c) \\text{ undefined}', explanation: 'Necessary condition for interior local extremum.' }
    ]
  },
  {
    pdfPageNumber: 71,
    bookPageLabel: 'Page 71',
    chapterNumber: 4,
    sectionRef: '4.4.2',
    titleEn: 'Extreme Value Theorem & Finding Extrema on Closed Intervals',
    titleAm: 'የኤክስትሪም ዋጋ ቴዎረም እና በተዘጋ ክፍተት ላይ ኤክስትሪማ መፈለግ',
    subtopicEn: 'Theorem 4.4.2 Extreme Value Theorem, Guidelines on [a, b], Examples: Polynomial, Fractional Power, Trig',
    subtopicAm: 'ቴዎረም 4.4.2 (EVT)፣ በተዘጋ ክፍተት [a, b] የመፈለጊያ ስልት፣ የተሰሩ ምሳሌዎች',
    pageType: 'content',
    contentEn: `4.4.2 Extrema of a Function (Page 71)

Example 4.4.3 — Locating critical points:
Find the critical numbers of f(x) = x - 3 x^(1/3).
f'(x) = 1 - x^(-2/3) = (x^(2/3) - 1) / x^(2/3).
f'(x) = 0 when x^(2/3) = 1 ⟹ x = ±1.
f'(x) is undefined at x = 0.
Critical numbers: x = -1, 0, 1.

Theorem 4.4.2 — The Extreme Value Theorem:
Let f be continuous on a closed, bounded interval [a, b]. Then f has an absolute maximum and an absolute minimum value on [a, b].

Guidelines for Finding Extrema on [a, b]:
1. Find all critical numbers of f in (a, b).
2. Compute f(c) at each critical number and at the endpoints f(a), f(b).
3. The largest is the absolute maximum; the smallest is the absolute minimum.

Example 4.4.4:
(a) f(x) = 3x^4 - 4x³ - 8 on [-1, 2]:
f'(x) = 12x²(x - 1) = 0 ⟹ critical numbers x = 0, 1.
Values: f(0) = -8, f(1) = -9, f(-1) = -1, f(2) = 8.
Absolute max = 8 at x = 2; Absolute min = -9 at x = 1.

(b) f(x) = x² - 3x^(2/3) on [0, 2]:
f'(x) = 2x - 2/x^(1/3) = 0 ⟹ x = 1 (critical). Undefined at x = 0.
f(0) = 0, f(1) = -2, f(2) = 4 - 3(2)^(2/3) ≈ -0.762.
Absolute max = 0 at x = 0; Absolute min = -2 at x = 1.`,
    contentAm: `ቴዎረም 4.4.2 — የኤክስትሪም ዋጋ ቴዎረም (EVT)፡
ፈንክሽኑ በተዘጋ ክፍተት [a, b] ላይ ቀጣይ ከሆነ የግድ ፍጹም ከፍተኛና ፍጹም ዝቅተኛ ዋጋ ይኖረዋል።

በ [a, b] ላይ የመፈለግ ስልት፡
1. በክፍተቱ ውስጥ ያሉ ክሪቲካል ነጥቦችን ማግኘት
2. በክሪቲካል ነጥቦች እና በዳርቻዎች f(a), f(b) ላይ ያለውን ዋጋ ማስላት
3. ትልቁ ፍጹም ማክሲመም፣ ትንሹ ፍጹም ሚኒመም ይሆናል።`,
    formulas: [
      { name: 'Extreme Value Theorem', formula: 'f \\in C[a, b] ⟹ \\exists \\text{ absolute max and min on } [a, b]', explanation: 'Guarantees global extrema on compact intervals.' }
    ]
  },
  {
    pdfPageNumber: 72,
    bookPageLabel: 'Page 72',
    chapterNumber: 4,
    sectionRef: '4.4.3',
    titleEn: '4.4.3 The Mean Value Theorem & Rolle’s Theorem',
    titleAm: '4.4.3 የመካከለኛ ዋጋ ቴዎረም (MVT) እና የሮል ቴዎረም (Rolle’s Theorem)',
    subtopicEn: 'Trig Extrema on [0, 2π], Theorem 4.4.3 Rolle’s Theorem, Horizontal Tangent, Example 4.4.5 x³ - x on [-1, 1]',
    subtopicAm: 'የትሪግ ኤክስትሪማ በ [0, 2π]፣ ቴዎረም 4.4.3 የሮል ቴዎረም፣ አግድም ታንጀንት፣ ምሳሌ 4.4.5',
    pageType: 'content',
    contentEn: `4.4.3 The Mean Value Theorem (Page 72)

Example 4.4.4(c):
f(x) = 2 cos x - x on [0, 2π].
f'(x) = -2 sin x - 1 = 0 ⟹ sin x = -1/2.
Critical numbers in (0, 2π): x = 7π/6 and x = 11π/6.
f(0) = 2,  f(2π) = 2 - 2π ≈ -4.28,
f(7π/6) = -√3 - 7π/6 ≈ -5.40,  f(11π/6) = √3 - 11π/6 ≈ -4.03.
Absolute max = 2 at x = 0; Absolute min ≈ -5.40 at x = 7π/6.

4.4.3 The Mean Value Theorem:
Theorem 4.4.3 — Rolle's Theorem:
Let f be continuous on [a, b] and differentiable on (a, b). If f(a) = f(b), then there exists at least one number c in (a, b) such that f'(c) = 0.
Geometric interpretation: At least one point has a horizontal tangent line.

Example 4.4.5:
Let f(x) = x³ - x.
(a) Show f satisfies Rolle's Theorem on [-1, 1]:
f(-1) = 0, f(1) = 0, polynomial is continuous on [-1, 1] and differentiable on (-1, 1).
(b) Find c: f'(x) = 3x² - 1 = 0 ⟹ c = ±√3 / 3 ∈ (-1, 1).`,
    contentAm: `ቴዎረም 4.4.3 — የሮል ቴዎረም (Rolle's Theorem)፡
ፈንክሽኑ በ [a, b] ቀጣይ፣ በ (a, b) ዲፈረንሺየብል ሆኖ f(a) = f(b) ከሆነ፣ f'(c) = 0 የሚያደርግ ቢያንስ አንድ c በ (a, b) ውስጥ አለ።

ምሳሌ 4.4.5፡ f(x) = x³ - x በ [-1, 1] ላይ፡
f(-1) = f(1) = 0 ⟹ f'(c) = 3c² - 1 = 0 ⟹ c = ±√3/3 ∈ (-1, 1)።`,
    formulas: [
      { name: 'Rolle\'s Theorem', formula: 'f(a) = f(b) ⟹ \\exists c \\in (a, b): f\'(c) = 0', explanation: 'Guarantees at least one horizontal tangent.' }
    ]
  },
  {
    pdfPageNumber: 73,
    bookPageLabel: 'Page 73',
    chapterNumber: 4,
    sectionRef: '4.4.4',
    titleEn: 'Mean Value Theorem & 4.4.4 First & Second Derivative Tests',
    titleAm: 'የመካከለኛ ዋጋ ቴዎረም (MVT) እና 4.4.4 የመጀመሪያና ሁለተኛ ዲሪቬቲቭ ፈተናዎች',
    subtopicEn: 'Theorem 4.4.4 Mean Value Theorem f\'(c) = [f(b)-f(a)]/(b-a), Increasing/Decreasing Test, Example 4.4.8',
    subtopicAm: 'ቴዎረም 4.4.4 MVT፣ ፈንክሽን ጨማሪና ቀናሽ የሚሆንበት ሁኔታ፣ ምሳሌ 4.4.8',
    pageType: 'content',
    contentEn: `4.4.4 The First and Second Derivative Tests (Page 73)

Theorem 4.4.4 — The Mean Value Theorem:
Let f be continuous on [a, b] and differentiable on (a, b). Then there exists at least one number c in (a, b) such that:
f'(c) = (f(b) - f(a)) / (b - a)    (4.4)

Example 4.4.6:
Let f(x) = x³ - 5x² - 3x on [1, 3].
f'(x) = 3x² - 10x - 3.
Average slope = [f(3) - f(1)] / (3 - 1) = [-27 - (-7)] / 2 = -10.
3c² - 10c - 3 = -10 ⟹ 3c² - 10c + 7 = (3c - 7)(c - 1) = 0.
c = 7/3 ∈ (1, 3).

4.4.4 The First and Second Derivative Tests:
Definition 4.4.4 — Increasing and Decreasing Functions:
• f is increasing on I if x₁ < x₂ ⟹ f(x₁) < f(x₂).
• f is decreasing on I if x₁ < x₂ ⟹ f(x₁) > f(x₂).

Theorem 4.4.5:
1. If f'(x) > 0 for all x in (a, b), then f is increasing on (a, b).
2. If f'(x) < 0 for all x in (a, b), then f is decreasing on (a, b).
3. If f'(x) = 0 for all x in (a, b), then f is constant on (a, b).

Example 4.4.8:
Determine intervals where f(x) = 2x³ + 3x² - 12x - 3 is increasing/decreasing.
f'(x) = 6x² + 6x - 12 = 6(x + 2)(x - 1). Zeros at x = -2, 1.`,
    contentAm: `ቴዎረም 4.4.4 — የመካከለኛ ዋጋ ቴዎረም (Mean Value Theorem)፡
በከርቩ ላይ የቅጽበታዊ ታንጀንቱ ስሎፕ ከሲካንቱ አማካይ ስሎፕ ጋር እኩል የሚሆንበት c ነጥብ አለ፡
f'(c) = [f(b) - f(a)] / (b - a)

ቴዎረም 4.4.5 — ጨማሪና ቀናሽ ፈንክሽን፡
1. f'(x) > 0 ⟹ ፈንክሽኑ ጨማሪ (Increasing) ነው
2. f'(x) < 0 ⟹ ፈንክሽኑ ቀናሽ (Decreasing) ነው
3. f'(x) = 0 ⟹ ፈንክሽኑ ቋሚ (Constant) ነው`,
    formulas: [
      { name: 'Mean Value Theorem', formula: 'f\'(c) = \\frac{f(b) - f(a)}{b - a}', explanation: 'Instantaneous rate equals average rate of change.' }
    ]
  },
  {
    pdfPageNumber: 74,
    bookPageLabel: 'Page 74',
    chapterNumber: 4,
    sectionRef: '4.4.4',
    titleEn: 'Sign Charts, Exponential Example & Theorem 4.4.6 First Derivative Test',
    titleAm: 'የምልክት ሰንጠረዥ (Sign Chart)፣ የኤክስፖኔንሻል ምሳሌ እና የመጀመሪያ ዲሪቬቲቭ ፈተና',
    subtopicEn: 'Intervals of Increase/Decrease for 2x³+3x²-12x-3, f(x) = x²e^x, Theorem 4.4.6 First Derivative Test, Example 4.4.11',
    subtopicAm: 'የምልክት ሰንጠረዥ ስሌት፣ x²e^x፣ ቴዎረም 4.4.6 የመጀመሪያ ዲሪቬቲቭ ፈተና እና ምሳሌ 4.4.11',
    pageType: 'content',
    contentEn: `4.4.4 The First and Second Derivative Tests (Page 74)

From Example 4.4.8:
Sign chart for f'(x) = 6(x + 2)(x - 1):
• (-∞, -2): f'(x) > 0 ⟹ f is increasing on (-∞, -2].
• (-2, 1): f'(x) < 0 ⟹ f is decreasing on [-2, 1].
• (1, ∞): f'(x) > 0 ⟹ f is increasing on [1, ∞).

Example 4.4.9:
Let f(x) = x² e^x.
f'(x) = 2x e^x + x² e^x = x(x + 2)e^x.
Since e^x > 0 always:
f is increasing on (-∞, -2] and [0, ∞); decreasing on [-2, 0].

Caution: Theorem 4.4.5 requires an interval. For f(x) = 1/x, f'(x) = -1/x² < 0 for all x ≠ 0, but f is decreasing on (-∞, 0) and (0, ∞) separately, not on its whole domain.

Theorem 4.4.6 — The First Derivative Test:
Let c be a critical number where f is continuous:
1. If f' changes sign from positive to negative at c, then f has a relative maximum at c.
2. If f' changes sign from negative to positive at c, then f has a relative minimum at c.

Example 4.4.11:
Let f(x) = 4x³ + 9x² - 12x + 3.
f'(x) = 12x² + 18x - 12 = 6(2x - 1)(x + 2).
Critical numbers: x = -2 and x = 1/2.`,
    contentAm: `የመጀመሪያ ዲሪቬቲቭ ፈተና (First Derivative Test)፡
1. f'(x) ከ አዎንታዊ (+) ወደ አሉታዊ (-) ከተቀየረ ⟹ አንጻራዊ ማክሲመም (Local Max) አለው።
2. f'(x) ከ አሉታዊ (-) ወደ አዎንታዊ (+) ከተቀየረ ⟹ አንጻራዊ ሚኒመም (Local Min) አለው።

ምሳሌ 4.4.11፡
f(x) = 4x³ + 9x² - 12x + 3
ክሪቲካል ቁጥሮች፡ x = -2 እና x = 1/2
በ x = -2 ላይ ምልክቱ ከ + ወደ - ይቀየራል ⟹ Local Max
በ x = 1/2 ላይ ምልክቱ ከ - ወደ + ይቀየራል ⟹ Local Min`,
    formulas: [
      { name: 'First Derivative Test', formula: 'f\' \\text{ changes } + \\to - \\implies \\text{Local Max}; \\; - \\to + \\implies \\text{Local Min}', explanation: 'Classifying local extrema using sign changes of f\'.' }
    ]
  },
  {
    pdfPageNumber: 75,
    bookPageLabel: 'Page 75',
    chapterNumber: 4,
    sectionRef: '4.4.4',
    titleEn: 'Theorem 4.4.7 Second Derivative Test & Cubic Examples',
    titleAm: 'ቴዎረም 4.4.7 የሁለተኛ ዲሪቬቲቭ ፈተና (Second Derivative Test) እና የኪዩቢክ ምሳሌዎች',
    subtopicEn: 'Relative Extrema of (1/4)x³ - 3x, Theorem 4.4.7 f\'\'(c)<0 Max, f\'\'(c)>0 Min, Example 4.4.13 x³ - 3x - 2',
    subtopicAm: 'የሁለተኛ ዲሪቬቲቭ ፈተና ህግ f\'\'(c)<0 ማክሲመም፣ f\'\'(c)>0 ሚኒመም መሆኑ እና ምሳሌዎች',
    pageType: 'content',
    contentEn: `4.4.4 The First and Second Derivative Tests (Page 75)

Example 4.4.12:
Let f(x) = 1/4 x³ - 3x.
f'(x) = 3/4 x² - 3 = 3/4 (x + 2)(x - 2).
Critical numbers: x = -2, 2.
f' changes + to - at -2 ⟹ relative maximum f(-2) = 4.
f' changes - to + at 2 ⟹ relative minimum f(2) = -4.

Theorem 4.4.7 — The Second Derivative Test:
Assume that f'(c) = 0 and that f''(c) exists:
a. If f''(c) < 0, then f(c) is a relative maximum value of f.
b. If f''(c) > 0, then f(c) is a relative minimum value of f.
If f''(c) = 0, the test is inconclusive.

Example 4.4.13:
Let f(x) = x³ - 3x - 2.
f'(x) = 3x² - 3 = 3(x - 1)(x + 1) = 0 ⟹ x = -1, 1.
f''(x) = 6x.
• At x = -1: f''(-1) = -6 < 0 ⟹ f(-1) = 0 is a relative maximum.
• At x = 1: f''(1) = 6 > 0 ⟹ f(1) = -4 is a relative minimum.`,
    contentAm: `ቴዎረም 4.4.7 — የሁለተኛ ዲሪቬቲቭ ፈተና (Second Derivative Test)፡
f'(c) = 0 በሆነበት ክሪቲካል ነጥብ ላይ፡
1. f''(c) < 0 ከሆነ ⟹ ፈንክሽኑ ወደታች የተከፈተ (Concave Down) ስለሆነ አንጻራዊ ማክሲመም አለው።
2. f''(c) > 0 ከሆነ ⟹ ፈንክሽኑ ወደላይ የተከፈተ (Concave Up) ስለሆነ አንጻራዊ ሚኒመም አለው።
3. f''(c) = 0 ከሆነ ⟹ ፈተናው ውሳኔ አይሰጥም (Inconclusive)።

ምሳሌ 4.4.13፡ f(x) = x³ - 3x - 2
f''(-1) = -6 < 0 ⟹ በ x = -1 ማክሲመም f(-1) = 0
f''(1) = 6 > 0 ⟹ በ x = 1 ሚኒመም f(1) = -4`,
    formulas: [
      { name: 'Second Derivative Test', formula: 'f\'(c) = 0, f\'\'(c) < 0 \\implies \\text{Max}; \\; f\'\'(c) > 0 \\implies \\text{Min}', explanation: 'Curvature-based extremum classification.' }
    ]
  },
  {
    pdfPageNumber: 76,
    bookPageLabel: 'Page 76',
    chapterNumber: 4,
    sectionRef: '4.4.5',
    titleEn: '4.4.5 Concavity and Inflection Points with Theorems & Examples',
    titleAm: '4.4.5 ኮንኬቪቲ እና የመዞሪያ ነጥቦች (Inflection Points)',
    subtopicEn: 'Definition 4.4.5 Concave Up/Down, Theorem 4.4.8 Sign of f\'\', Example 4.4.15 3x^4-4x³, Example 4.4.16',
    subtopicAm: 'ኮንኬቭ አፕና ዳውን ትርጓሜ፣ ቴዎረም 4.4.8 የ f\'\' ምልክት፣ የተሰሩ ምሳሌዎች',
    pageType: 'content',
    contentEn: `4.4.5 Concavity and Inflection Point (Page 76)

Example 4.4.14:
Let f(x) = 3x^4 - 4x³.
f'(x) = 12x²(x - 1) = 0 ⟹ x = 0, 1.
f''(x) = 36x² - 24x.
f''(1) = 12 > 0 ⟹ relative minimum at x = 1.
f''(0) = 0 (inconclusive). Since f'(x) < 0 on both sides of 0, f has no extremum at 0.

4.4.5 Concavity and Inflection Point:
Definition 4.4.5:
The graph of f is concave upward on I if f' is increasing on I.
The graph of f is concave downward on I if f' is decreasing on I.

Theorem 4.4.8:
1. If f''(x) > 0 for all x in I, the graph is concave upward on I.
2. If f''(x) < 0 for all x in I, the graph is concave downward on I.

Example 4.4.15:
For f(x) = 3x^4 - 4x³:
f''(x) = 12x(3x - 2). Zeros at x = 0 and x = 2/3.
Concave upward on (-∞, 0) and (2/3, ∞).
Concave downward on (0, 2/3).

Example 4.4.16:
Let f(x) = 4x³ - 6x² - 9x.
f'(x) = 12x² - 12x - 9 = 12(x - 3/2)(x + 1/2).`,
    contentAm: `4.4.5 ኮንኬቪቲ (Concavity) እና ኢንፍሌክሽን ነጥቦች፡
ትርጓሜ 4.4.5፡
• f'(x) ጨማሪ ከሆነ ግራፉ ወደላይ የተከፈተ (Concave Up) ይባላል።
• f'(x) ቀናሽ ከሆነ ግራፉ ወደታች የተከፈተ (Concave Down) ይባላል።

ቴዎረም 4.4.8፡
1. f''(x) > 0 ⟹ Concave Up (∪)
2. f''(x) < 0 ⟹ Concave Down (∩)

ምሳሌ 4.4.15፡ f(x) = 3x^4 - 4x³
f''(x) = 12x(3x - 2) ⟹ በ (-∞, 0) እና (2/3, ∞) ላይ Concave Up፣ በ (0, 2/3) ላይ Concave Down።`,
    formulas: [
      { name: 'Concavity Condition', formula: 'f\'\'(x) > 0 \\implies \\cup \\text{ (Up)}; \\; f\'\'(x) < 0 \\implies \\cap \\text{ (Down)}', explanation: 'Characterization of bending via second derivative.' }
    ]
  },
  {
    pdfPageNumber: 77,
    bookPageLabel: 'Page 77',
    chapterNumber: 4,
    sectionRef: '4.4.6',
    titleEn: 'Definition 4.4.6 Inflection Point & 4.4.6 Curve Sketching Strategy',
    titleAm: 'ትርጓሜ 4.4.6 የመዞሪያ ነጥብ (Inflection Point) እና የግራፍ ስዕል ስልት',
    subtopicEn: 'Inflection Points of x^4 - 6x² + 8x + 10, sin x on [-2π, 2π], 7-Step Curve Sketching Procedure',
    subtopicAm: 'የኢንፍሌክሽን ነጥብ ትርጓሜ፣ የ x^4-6x²+8x+10 እና sinx ምሳሌዎች፣ ባለ 7 ደረጃ የከርቭ ስዕል ስልት',
    pageType: 'content',
    contentEn: `4.4.6 Curve Sketching (Page 77)

Example 4.4.16 (continued):
f''(x) = 24x - 12 = 24(x - 1/2).
Concave down on (-∞, 1/2); concave up on (1/2, ∞).
Relative max at x = -1/2 (f(-1/2) = 5/2); relative min at x = 3/2 (f(3/2) = -27/2).

Definition 4.4.6 — Inflection Point:
Let f be continuous on an open interval containing c. If the graph changes concavity from upward to downward (or vice versa) at P(c, f(c)), then P is called an inflection point.

Example 4.4.17:
Let f(x) = x^4 - 6x² + 8x + 10.
f''(x) = 12(x + 1)(x - 1). Zeros at x = -1, 1.
f'' changes sign at both points.
Inflection points: (-1, -3) and (1, 13).

Example 4.4.18:
For f(x) = sin x on [-2π, 2π]:
f''(x) = -sin x = 0 at x = -π, 0, π.
Inflection points: (-π, 0), (0, 0), and (π, 0).

4.4.6 Curve Sketching:
Strategy for Graphing y = f(x):
1. Identify domain and symmetries.
2. Find f' and f''.
3. Find critical points and local extrema.
4. Determine intervals of increase/decrease.
5. Find inflection points and concavity.
6. Identify horizontal and vertical asymptotes.
7. Plot key points and sketch the curve.`,
    contentAm: `ትርጓሜ 4.4.6 — የመዞሪያ ነጥብ (Inflection Point)፡
የግራፉ ኮንኬቪቲ ከ ወደላይ ወደ ወደታች (ወይም በተቃራኒው) የሚቀየርበት ነጥብ ኢንፍሌክሽን ነጥብ ይባላል።

የግራፍ አሳሳል 7ቱ ስልታዊ ደረጃዎች፡
1. ዶሜይን እና ሲሜትሪ መለየት
2. የመጀመሪያና ሁለተኛ ዲሪቬቲቭ መፈለግ
3. ክሪቲካል ነጥቦችንና ኤክስትሪማን መለየት
4. ጨማሪና ቀናሽ ክፍተቶችን ማወቅ
5. የኢንፍሌክሽን ነጥቦችንና ኮንኬቪቲን መወሰን
6. አሲምፕቶቶችን (Vertical & Horizontal Asymptotes) መለየት
7. ቁልፍ ነጥቦችን አቀናጅቶ ከርቩን መሳል`,
    formulas: [
      { name: 'Inflection Point Condition', formula: 'f\'\'(c) = 0 \\text{ and } f\'\' \\text{ changes sign}', explanation: 'Definition of inflection point on smooth curve.' }
    ]
  },
  {
    pdfPageNumber: 78,
    bookPageLabel: 'Page 78',
    chapterNumber: 4,
    sectionRef: '4.4.6',
    titleEn: 'Comprehensive Curve Sketching: f(x) = (x + 1)² / (1 + x²)',
    titleAm: 'የተሟላ የግራፍ ስዕል ምሳሌ፡ f(x) = (x + 1)² / (1 + x²)',
    subtopicEn: 'Intercepts (-1,0), (0,1), Critical Points x = ±1, Inflection Points at x = ±√3, 0, Horizontal Asymptote y = 1',
    subtopicAm: 'ኢንተርሴፕቶች፣ ክሪቲካል ነጥቦች፣ ኢንፍሌክሽን ነጥቦች በ x = ±√3፣ አግድም አሲምፕቶት y = 1',
    pageType: 'content',
    contentEn: `4.4.6 Curve Sketching (Page 78)

Example 4.4.19 — Using the Graphing Strategy:
Sketch the graph of f(x) = (x + 1)² / (1 + x²).

Solution:
1. Domain: (-∞, ∞). No symmetry.
2. Derivatives:
f'(x) = 2(1 - x²) / (1 + x²)²
f''(x) = 4x(x² - 3) / (1 + x³)³
Intercepts: x-intercept (-1, 0), y-intercept (0, 1).
Critical points: f'(x) = 0 ⟹ x = -1, 1.
3. Critical points behavior:
f''(-1) = 1 > 0 ⟹ relative minimum at (-1, 0).
f''(1) = -1 < 0 ⟹ relative maximum at (1, 2).
4. Increase/Decrease:
Decreasing on (-∞, -1) and (1, ∞); increasing on (-1, 1).
5. Inflection points:
f''(x) = 0 at x = -√3, 0, √3.
Inflection points occur at x = -√3, 0, and √3.
Concave down on (-∞, -√3) and (0, √3); concave up on (-√3, 0) and (√3, ∞).
6. Asymptotes:
lim_{x ⟶ ±∞} f(x) = 1 ⟹ horizontal asymptote y = 1.
No vertical asymptotes. Range is [0, 2].
7. The curve approaches y = 1 as x ⟶ ±∞ with local min at (-1, 0) and local max at (1, 2).`,
    contentAm: `ምሳሌ 4.4.19 የግራፍ ስዕል፡ f(x) = (x + 1)² / (1 + x²)
1. ዶሜይን፡ ሁሉም እውነተኛ ቁጥሮች (-∞, ∞)
2. ዲሪቬቲቭ፡ f'(x) = 2(1 - x²) / (1 + x²)²
3. ክሪቲካል ነጥቦች፡ x = -1 (አንጻራዊ ሚኒመም = 0) እና x = 1 (አንጻራዊ ማክሲመም = 2)
4. አሲምፕቶት፡ y = 1 (Horizontal Asymptote)
5. ኢንፍሌክሽን ነጥቦች፡ x = -√3, 0, √3 ላይ ይገኛሉ።`,
    formulas: [
      { name: 'Rational Function Derivatives', formula: 'f\'(x) = \\frac{2(1-x^2)}{(1+x^2)^2}, \\quad f\'\'(x) = \\frac{4x(x^2-3)}{(1+x^2)^3}', explanation: 'First and second derivatives for rational curve sketching.' }
    ]
  },
  {
    pdfPageNumber: 79,
    bookPageLabel: 'Page 79',
    chapterNumber: 4,
    sectionRef: '4.5.1',
    titleEn: 'Figure 4.4 Graph & 4.5.1 Indeterminate Forms 0/0 and ∞/∞ (L’Hôpital’s Rule)',
    titleAm: 'ምስል 4.4 ግራፍ እና 4.5.1 ያልተወሰኑ ቅርጾች 0/0 እና ∞/∞ (የሎፒታል ህግ)',
    subtopicEn: 'Graph of (x+1)²/(1+x²), Indeterminate Forms 0/0 and ∞/∞, Theorem 4.5.1 L’Hôpital’s Rule Statement',
    subtopicAm: 'የ f(x) ግራፍ፣ የ 0/0 እና ∞/∞ ምንነት፣ ቴዎረም 4.5.1 የሎፒታል ህግ መግለጫ',
    pageType: 'content',
    contentEn: `4.5 Indeterminate Forms and L’Hôpital’s Rule (Page 79)

Figure 4.4: The graph of f(x) = (x + 1)² / (1 + x²) shows:
• Local minimum at (-1, 0)
• Point of inflection at (-√3, f(-√3))
• y-intercept and inflection point at (0, 1)
• Local maximum at (1, 2)
• Point of inflection at (√3, f(√3))
• Horizontal asymptote y = 1 as x ⟶ ±∞.

Example 4.4.20:
Sketch the graph of y = x² / (x² - 1).

4.5 Indeterminate Forms and L’Hôpital’s Rule
4.5.1 The Indeterminate Form 0/0 and ∞/∞:
If lim_{x ⟶ a} f(x) = 0 and lim_{x ⟶ a} g(x) = 0, then lim_{x ⟶ a} f(x)/g(x) is an indeterminate form of type 0/0.
If lim_{x ⟶ a} f(x) = ±∞ and lim_{x ⟶ a} g(x) = ±∞, then lim_{x ⟶ a} f(x)/g(x) is of type ∞/∞.

Theorem 4.5.1 — L’Hôpital’s Rule:
Suppose f and g are differentiable over an open interval containing a (except possibly at a) and g'(x) ≠ 0. If lim_{x ⟶ a} f(x)/g(x) is of type 0/0 or ∞/∞, then:
lim_{x ⟶ a} f(x)/g(x) = lim_{x ⟶ a} f'(x)/g'(x)
assuming the limit on the right exists or is ±∞.`,
    contentAm: `4.5 ያልተወሰኑ ቅርጾች እና የሎፒታል ህግ (L’Hôpital’s Rule)፡
4.5.1 የ 0/0 እና ∞/∞ ቅርጾች፡
ሊሚት ሲሰላ የቁጥር እና የትርፍ ዋጋ በአንድ ጊዜ 0/0 ወይም ∞/∞ ሲሆን ያልተወሰነ (Indeterminate Form) ይባላል።

ቴዎረም 4.5.1 — የሎፒታል ህግ (L’Hôpital’s Rule)፡
ሊሚቱ 0/0 ወይም ∞/∞ ሲሆን፡
lim_{x ⟶ a} [f(x) / g(x)] = lim_{x ⟶ a} [f'(x) / g'(x)]
የላይኛውንና የታችኛውን ለየብቻ ዲፈረንሺየት በማድረግ ሊሚቱን ማስላት ይቻላል።`,
    formulas: [
      { name: 'L’Hôpital’s Rule', formula: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}', explanation: 'Evaluation of 0/0 or ∞/∞ indeterminate limits.' }
    ]
  },
  {
    pdfPageNumber: 80,
    bookPageLabel: 'Page 80',
    chapterNumber: 4,
    sectionRef: '4.5.1',
    titleEn: 'L’Hôpital’s Rule Examples: Trig, Log, Polynomial & Exponential Limits',
    titleAm: 'የሎፒታል ህግ ምሳሌዎች፡ ትሪግ፣ ሎግ፣ ፖሊኖሚያል እና ኤክስፖኔንሻል ሊሚቶች',
    subtopicEn: 'lim (1-cosx)/x = 0, lim sin(πx)/lnx = -π, lim lnx/cotx = 0, lim (sinx-x)/x² = 0, lim x³/e^(2x)',
    subtopicAm: 'የተለያዩ የ 0/0 እና ∞/∞ ሊሚቶች በሎፒታል ህግ አሰራር',
    pageType: 'content',
    contentEn: `4.5.1 The Indeterminate Form 0/0 and ∞/∞ (Page 80)

Example 4.5.1:
Evaluate each limit applying L’Hôpital’s rule:
(a) lim_{x ⟶ 0} (1 - cos x)/x:
Type 0/0 ⟹ lim_{x ⟶ 0} (sin x)/1 = 0/1 = 0.

(b) lim_{x ⟶ 1} sin(πx) / ln x:
Type 0/0 ⟹ lim_{x ⟶ 1} [π cos(πx)] / (1/x) = π cos(π) / 1 = -π.

(c) lim_{x ⟶ 0+} ln x / cot x:
Type -∞/∞ ⟹ lim_{x ⟶ 0+} (1/x) / (-csc² x) = lim_{x ⟶ 0+} (-sin² x)/x (Type 0/0).
Applying again: lim_{x ⟶ 0+} (-2 sin x cos x)/1 = 0.

(d) lim_{x ⟶ 0} (sin x - x) / x²:
Type 0/0 ⟹ lim_{x ⟶ 0} (cos x - 1) / 2x (Type 0/0).
Applying again: lim_{x ⟶ 0} (-sin x) / 2 = 0.

(e) lim_{x ⟶ ∞} x³ / e^(2x):
Type ∞/∞. We apply L’Hôpital’s rule repeatedly.`,
    contentAm: `የምሳሌ 4.5.1 መፍትሔዎች፡
(a) lim_{x ⟶ 0} (1 - cos x)/x = lim (sin x)/1 = 0
(b) lim_{x ⟶ 1} sin(πx)/ln x = lim [π cos(πx)]/(1/x) = -π
(c) lim_{x ⟶ 0+} ln x/cot x = 0
(d) lim_{x ⟶ 0} (sin x - x)/x² = lim (cos x - 1)/2x = lim (-sin x)/2 = 0`,
    formulas: [
      { name: 'Repeated L\'Hôpital Application', formula: '\\lim \\frac{f}{g} = \\lim \\frac{f\'}{g\'} = \\lim \\frac{f\'\'}{g\'\'}', explanation: 'Successive differentiation until indeterminacy resolves.' }
    ]
  },
  {
    pdfPageNumber: 81,
    bookPageLabel: 'Page 81',
    chapterNumber: 4,
    sectionRef: '4.5.2',
    titleEn: '4.5.2 Indeterminate Forms ∞ - ∞ and 0 · ∞ with Worked Solutions',
    titleAm: '4.5.2 ያልተወሰኑ ቅርጾች ∞ - ∞ እና 0 · ∞ ከተሰሩ መፍትሔዎች ጋር',
    subtopicEn: 'lim x³/e^(2x) = 0, Difference Form lim (1/x² - 1/tanx) = ∞, Product Form lim x ln x = 0',
    subtopicAm: 'የ x³/e^(2x) ስሌት፣ የልዩነት ቅርጽ 1/x² - 1/tanx፣ የብዜት ቅርጽ x lnx',
    pageType: 'content',
    contentEn: `4.5.2 The Indeterminate Form ∞ - ∞ and 0 · ∞ (Page 81)

Example 4.5.1(e) (continued):
lim_{x ⟶ ∞} x³ / e^(2x) = lim 3x² / (2e^(2x)) = lim 6x / (4e^(2x)) = lim 6 / (8e^(2x)) = 0.

4.5.2 The Indeterminate Form ∞ - ∞ and 0 · ∞:
• If lim f(x) = ∞ and lim g(x) = ∞, lim (f(x) - g(x)) is of type ∞ - ∞. Convert to 0/0 or ∞/∞ by algebraic manipulation.
• If lim f(x) = 0 and lim g(x) = ±∞, lim (f(x) g(x)) is of type 0 · ∞. Rewrite f·g as f/(1/g) or g/(1/f).

Example 4.5.2:
Evaluate lim_{x ⟶ 0+} (1/x² - 1/tan x).
1/x² - 1/tan x = (tan x - x²) / (x² tan x) (Type 0/0).
By L’Hôpital’s rule:
lim_{x ⟶ 0+} (sec² x - 2x) / (x² sec² x + 2x tan x).
Numerator ⟶ 1 - 0 = 1; Denominator ⟶ 0+ (positive).
Therefore, lim_{x ⟶ 0+} (1/x² - 1/tan x) = ∞.

Example 4.5.3:
Evaluate lim_{x ⟶ 0+} x ln x.
Rewrite as quotient: x ln x = (ln x) / (1/x) (Type -∞/∞).
lim_{x ⟶ 0+} (1/x) / (-1/x²) = lim_{x ⟶ 0+} (-x) = 0.`,
    contentAm: `4.5.2 የ ∞ - ∞ እና 0 · ∞ ቅርጾች፡
• ∞ - ∞ ሲሆን በጋራ መለያ (Common Denominator) ወደ 0/0 መቀየር።
• 0 · ∞ ሲሆን አንዱን ወደ ታች በመውሰድ f · g = f / (1/g) በማድረግ ወደ 0/0 ወይም ∞/∞ መቀየር።

ምሳሌ 4.5.2፡ lim_{x ⟶ 0+} (1/x² - 1/tan x) = ∞
ምሳሌ 4.5.3፡ lim_{x ⟶ 0+} x ln x = lim (ln x)/(1/x) = lim (1/x)/(-1/x²) = lim (-x) = 0`,
    formulas: [
      { name: 'Product Conversion', formula: '0 \\cdot \\infty = \\frac{0}{1/\\infty} = \\frac{0}{0} \\quad \\text{or} \\quad \\frac{\\infty}{1/0} = \\frac{\\infty}{\\infty}', explanation: 'Algebraic rewriting for L’Hôpital applicability.' }
    ]
  },
  {
    pdfPageNumber: 82,
    bookPageLabel: 'Page 82',
    chapterNumber: 4,
    sectionRef: '4.5.3',
    titleEn: '4.5.3 Exponential Indeterminate Forms 0⁰, ∞⁰, 1^∞ & Chapter References',
    titleAm: '4.5.3 የኤክስፖኔንሻል ቅርጾች 0⁰፣ ∞⁰፣ 1^∞ እና የምዕራፉ ማጣቀሻዎች',
    subtopicEn: 'Logarithmic Transformation y = [f(x)]^g(x), Example lim x^(1/x) = 1, References (Ellis & Gulick, Stewart, Thomas)',
    subtopicAm: 'በሎጋሪዝም ወደ 0·∞ መቀየር፣ lim x^(1/x) = 1፣ ይፋዊ የማጣቀሻ መጽሐፍት',
    pageType: 'content',
    contentEn: `4.5.3 Indeterminate forms of ∞⁰, 0⁰, 1^∞ (Page 82)

The limit lim_{x ⟶ a} [f(x)]^(g(x)) is an indeterminate form of type:
• 0⁰ if lim f(x) = 0 and lim g(x) = 0
• ∞⁰ if lim f(x) = ∞ and lim g(x) = 0
• 1^∞ if lim f(x) = 1 and lim g(x) = ±∞

Method: Convert to 0 · ∞ by taking natural logarithms:
y = [f(x)]^(g(x)) ⟹ ln y = g(x) ln f(x).
Then lim y = e^(lim ln y).

Example 4.5.4 — Indeterminate Form of Type ∞⁰:
Evaluate lim_{x ⟶ ∞} x^(1/x).
Let y = x^(1/x) ⟹ ln y = (ln x)/x.
lim_{x ⟶ ∞} ln y = lim_{x ⟶ ∞} (ln x)/x = lim_{x ⟶ ∞} (1/x)/1 = 0.
lim_{x ⟶ ∞} x^(1/x) = e^0 = 1.

Example 4.5.5:
Evaluate:
(a) lim_{x ⟶ 0+} x^(sin x)
(b) lim_{x ⟶ 0+} x^x
(c) lim_{x ⟶ ∞} (1 + 1/x)^x = e.

References:
1. Ellis R, Gulick D. Calculus with Analytic Geometry: 6th Edition, Cengage, 2006.
2. Stewart J. Calculus: Early Transcendentals, 7th Edition, Cengage, 2012.
3. Thomas GB, Weir MD, Hass J. Thomas' Calculus: Early Transcendentals, Pearson, 2010.
4. https://math.libretexts.org/Bookshelves/Calculus/`,
    contentAm: `4.5.3 የኤክስፖኔንሻል ያልተወሰኑ ቅርጾች (0⁰, ∞⁰, 1^∞)፡
አሰራር ዘዴ፡ y = [f(x)]^g(x) በማለት የተፈጥሮ ሎጋሪዝም (ln) መውሰድ፡
ln y = g(x) ln f(x)
ከዚያም ሊሚት ln y = L ሲገኝ፣ ዋናው ሊሚት lim y = e^L ይሆናል።

ምሳሌ 4.5.4፡ lim_{x ⟶ ∞} x^(1/x)
ln y = (ln x)/x ⟹ lim (ln x)/x = lim (1/x)/1 = 0
ዋናው ሊሚት = e^0 = 1።

ይፋዊ ማጣቀሻዎች (References)፡
1. ኤሊስ እና ጉሊክ - ካልኩለስ ከ አናሊቲክ ጂኦሜትሪ ጋር
2. ጀምስ ስቱዋርት - ካልኩለስ (7ኛ እትም)
3. ቶማስ ካልኩለስ (Pearson)`,
    formulas: [
      { name: 'Exponential Limit Rule', formula: '\\lim [f(x)]^{g(x)} = e^{\\lim [g(x) \\ln f(x)]}', explanation: 'Logarithmic reduction of exponential indeterminate forms.' }
    ]
  }
];
