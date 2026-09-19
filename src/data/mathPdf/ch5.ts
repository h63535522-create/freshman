import { OfficialPdfPage } from './types';

export const mathCh5Pages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 83,
    bookPageLabel: 'Page 83',
    chapterNumber: 5,
    sectionRef: '5.1',
    titleEn: 'Chapter 5: Integrations — 5.1 Indefinite Integrals & Basic Rules (1–5)',
    titleAm: 'ምዕራፍ 5፡ ኢንቴግሬሽን — 5.1 ያልተወሰነ ኢንቴግራሎች (Indefinite Integrals) እና ህጎች (1–5)',
    subtopicEn: 'Definition of Anti-derivative, Indefinite Integral Notation ∫ f(x)dx = F(x) + C, Basic Rules for Powers and Reciprocals',
    subtopicAm: 'የአንቲ-ዲሪቬቲቭ ትርጓሜ፣ የኢንቴግራ ምልክት ∫ f(x)dx፣ የፓወርና ሎጋሪዝም ህጎች',
    pageType: 'content',
    contentEn: `Applied MathI: Integrations 2022
CHAPTER 5: INTEGRATIONS
5.1 Indefinite Integrals

Definition:
Let f be a function whose domain is an open interval I. Then any function F such that:
F'(x) = f(x)  for each x in I
is called an anti-derivative of f on I.

Example 1:
F(x) = x³ + c is an anti-derivative of f(x) = 3x² on (-∞, ∞), since F'(x) = 3x².

Theorem:
If F is an anti-derivative of f on an open interval I, then the most general anti-derivative of f on I is F(x) + C, where C is an arbitrary constant.

Definition — Indefinite Integral:
The collection of all anti-derivatives of f is called the indefinite integral of f with respect to x, denoted by:
∫ f(x) dx = F(x) + C
where ∫ is the integral sign, f(x) is the integrand, x is the variable of integration, and C is the constant of integration.

Basic Integration Rules:
1) ∫ dx = x + C
2) ∫ c dx = c ∫ dx = cx + C
3) ∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx
4) ∫ x^r dx = x^(r + 1) / (r + 1) + C,  (r ≠ -1)
5) ∫ (1/x) dx = ln|x| + C,  (x ≠ 0)`,
    contentAm: `ምዕራፍ 5፡ ኢንቴግሬሽን (Integrations)
5.1 ያልተወሰነ ኢንቴግራል (Indefinite Integrals)

ትርጓሜ — አንቲ-ዲሪቬቲቭ (Anti-derivative)፡
F'(x) = f(x) የሚያሟላ ማንኛውም F(x) ፈንክሽን የ f(x) አንቲ-ዲሪቬቲቭ ይባላል።
አጠቃላይ ውክልና፡ ∫ f(x) dx = F(x) + C (C ቋሚ ቁጥር ነው)።

መሰረታዊ ህጎች (1–5)፡
1) ∫ dx = x + C
2) ∫ c dx = cx + C
3) ∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx
4) ∫ x^r dx = x^(r+1)/(r+1) + C, (r ≠ -1)
5) ∫ (1/x) dx = ln|x| + C`,
    formulas: [
      { name: 'Indefinite Integral Definition', formula: '\\int f(x) dx = F(x) + C \\iff F\'(x) = f(x)', explanation: 'Inverse operation of differentiation.' },
      { name: 'Power Rule for Integration', formula: '\\int x^r dx = \\frac{x^{r+1}}{r+1} + C \\quad (r \\neq -1)', explanation: 'Reverses power differentiation.' }
    ]
  },
  {
    pdfPageNumber: 84,
    bookPageLabel: 'Page 84',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Trig, Exponential & Hyperbolic Rules; 5.2 Integration by Substitution',
    titleAm: 'የትሪግ፣ ኤክስፖኔንሻልና ሃይፐርቦሊክ ህጎች፤ 5.2 በተለዋዋጭ መተካት (Substitution)',
    subtopicEn: 'Rules 6–9 (Trig, Exp, Hyperbolic, Inverse), 5.2.A Integration by Substitution Theorem & Example 1',
    subtopicAm: 'የኢንቴግሬሽን ህጎች 6–9፣ የሰብስቲትዩሽን ስልት ቴዎረም እና ምሳሌ 1',
    pageType: 'content',
    contentEn: `5.1 Indefinite Integrals (continued) & 5.2 Techniques of Integration (Page 84)

Basic Integration Rules (continued):
6) Trigonometric Integrals:
• ∫ sin x dx = -cos x + C
• ∫ cos x dx = sin x + C
• ∫ sec² x dx = tan x + C
• ∫ csc² x dx = -cot x + C
• ∫ sec x tan x dx = sec x + C
• ∫ csc x cot x dx = -csc x + C

7) Exponential Integrals:
• ∫ e^x dx = e^x + C
• ∫ a^x dx = a^x / ln a + C,  (a > 0, a ≠ 1)

8) Hyperbolic Integrals:
• ∫ sinh x dx = cosh x + C
• ∫ cosh x dx = sinh x + C
• ∫ sech² x dx = tanh x + C

9) Inverse Trigonometric Forms:
• ∫ dx / √(1 - x²) = sin^(-1) x + C
• ∫ dx / (1 + x²) = tan^(-1) x + C
• ∫ dx / (|x| √(x² - 1)) = sec^(-1) x + C

5.2 Techniques (or rules) of Integration
A. Integration by substitution (Change of Variables):
Theorem: If u = g(x) is a differentiable function whose range is an interval I and f is continuous on I, then:
∫ f(g(x)) g'(x) dx = ∫ f(u) du

Example 1:
Evaluate ∫ 2x (x² + 1)^5 dx.
Let u = x² + 1 ⟹ du = 2x dx.
∫ (x² + 1)^5 (2x dx) = ∫ u^5 du = u^6 / 6 + C = (x² + 1)^6 / 6 + C.`,
    contentAm: `መሰረታዊ ህጎች (6–9)፡
• ∫ sin x dx = -cos x + C
• ∫ cos x dx = sin x + C
• ∫ e^x dx = e^x + C
• ∫ dx / (1 + x²) = tan⁻¹ x + C

5.2 የኢንቴግሬሽን ስልቶች
ሀ. በተለዋዋጭ መተካት (Integration by Substitution)፡
u = g(x) በማለት du = g'(x)dx ን መተካት።
ምሳሌ 1፡ ∫ 2x (x² + 1)^5 dx = (x² + 1)^6 / 6 + C`,
    formulas: [
      { name: 'Substitution Rule', formula: '\\int f(g(x)) g\'(x) dx = \\int f(u) du', explanation: 'Reverses the chain rule of differentiation.' }
    ]
  },
  {
    pdfPageNumber: 85,
    bookPageLabel: 'Page 85',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Substitution Examples & 5.2.B Integration by Parts (∫ u dv = uv - ∫ v du)',
    titleAm: 'የሰብስቲትዩሽን ምሳሌዎች እና 5.2.ለ በከፊል ማቀናጀት (Integration by Parts)',
    subtopicEn: 'Roots, Trig, Exp, and Rational Substitutions; Integration by Parts Formula, Example 1 ∫ x e^x dx',
    subtopicAm: 'የተለያዩ የሰብስቲትዩሽን ምሳሌዎች፤ የኢንቴግሬሽን ባይ ፓርትስ ቀመር እና ምሳሌ 1 ∫ x e^x dx',
    pageType: 'content',
    contentEn: `5.2 Techniques of Integration (Page 85)

Substitution Examples (continued):
Example 2: Evaluate ∫ x / √(x² - 1) dx.
Let u = x² - 1 ⟹ du = 2x dx ⟹ x dx = du / 2.
∫ (1/2) u^(-1/2) du = (1/2) · 2 u^(1/2) + C = √(x² - 1) + C.

Example 3: Evaluate ∫ sin² x cos x dx.
Let u = sin x ⟹ du = cos x dx.
∫ u² du = u³ / 3 + C = (1/3) sin³ x + C.

Example 4: Evaluate ∫ e^(tan x) sec² x dx.
Let u = tan x ⟹ du = sec² x dx.
∫ e^u du = e^u + C = e^(tan x) + C.

Example 5: Evaluate ∫ x / (1 + x^4) dx.
Let u = x² ⟹ du = 2x dx ⟹ x dx = du / 2.
1/2 ∫ du / (1 + u²) = 1/2 tan^(-1)(u) + C = 1/2 tan^(-1)(x²) + C.

B. Integration by Parts:
Derived from the product rule: (d/dx)(uv) = u' v + u v'.
Integrating both sides:
∫ u dv = u v - ∫ v du

Guideline: Choose u according to the LIATE rule:
L: Logarithmic, I: Inverse trig, A: Algebraic, T: Trigonometric, E: Exponential.

Example 1: Evaluate ∫ x e^x dx.
Let u = x ⟹ du = dx.
dv = e^x dx ⟹ v = e^x.
∫ x e^x dx = x e^x - ∫ e^x dx = x e^x - e^x + C = e^x(x - 1) + C.`,
    contentAm: `ተጨማሪ የሰብስቲትዩሽን ምሳሌዎች፡
• ∫ sin²x cosx dx = (1/3) sin³x + C
• ∫ e^(tanx) sec²x dx = e^(tanx) + C
• ∫ x / (1 + x^4) dx = 1/2 tan⁻¹(x²) + C

ለ. በከፊል ማቀናጀት (Integration by Parts)፡
የብዜት ህግን በመቀልበስ የሚሰራ፡
∫ u dv = u v - ∫ v du
ምሳሌ 1፡ ∫ x e^x dx = x e^x - e^x + C = e^x(x - 1) + C`,
    formulas: [
      { name: 'Integration by Parts', formula: '\\int u \\, dv = u v - \\int v \\, du', explanation: 'Integral analog of the product rule.' }
    ]
  },
  {
    pdfPageNumber: 86,
    bookPageLabel: 'Page 86',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Integration by Parts Examples: ln x, x² cos x, e^x sin x & Tabular Method',
    titleAm: 'የባይ ፓርትስ ምሳሌዎች፡ ln x፣ x² cos x፣ e^x sin x እና የታቡላር ስልት',
    subtopicEn: '∫ ln x dx = x ln x - x + C, Repeated Parts, Cyclic Integration for e^x sin x, Tabular Integration Steps',
    subtopicAm: 'የ ln x ኢንቴግራል፣ ተደጋጋሚ ባይ ፓርትስ፣ ዑደታዊ ኢንቴግራል e^x sin x፣ የሰንጠረዥ (Tabular) ስልት',
    pageType: 'content',
    contentEn: `5.2 Techniques of Integration (Page 86)

Integration by Parts Examples:
Example 2: Evaluate ∫ ln x dx.
Let u = ln x ⟹ du = (1/x) dx.
dv = dx ⟹ v = x.
∫ ln x dx = x ln x - ∫ x (1/x) dx = x ln x - ∫ dx = x ln x - x + C = x(ln x - 1) + C.

Example 3: Evaluate ∫ x² cos x dx.
Let u = x² ⟹ du = 2x dx; dv = cos x dx ⟹ v = sin x.
∫ x² cos x dx = x² sin x - 2 ∫ x sin x dx.
Apply parts to ∫ x sin x dx: u₁ = x, dv₁ = sin x dx ⟹ du₁ = dx, v₁ = -cos x.
∫ x sin x dx = -x cos x - ∫ (-cos x) dx = -x cos x + sin x.
Therefore:
∫ x² cos x dx = x² sin x + 2x cos x - 2 sin x + C.

Example 4 — Cyclic Integration:
Evaluate I = ∫ e^x sin x dx.
Let u = e^x, dv = sin x dx ⟹ du = e^x dx, v = -cos x.
I = -e^x cos x + ∫ e^x cos x dx.
Apply parts again: u₁ = e^x, dv₁ = cos x dx ⟹ du₁ = e^x dx, v₁ = sin x.
I = -e^x cos x + e^x sin x - ∫ e^x sin x dx = e^x(sin x - cos x) - I.
2I = e^x(sin x - cos x) ⟹ I = (1/2) e^x(sin x - cos x) + C.

Tabular Integration Method:
For integrals of the form ∫ p(x) f(x) dx where p(x) is a polynomial. Differentiate p(x) to 0, integrate f(x), and multiply along diagonals with alternating signs (+, -, +, ...).`,
    contentAm: `ምሳሌ 2፡ ∫ ln x dx = x ln x - x + C
ምሳሌ 3፡ ∫ x² cos x dx = x² sin x + 2x cos x - 2 sin x + C
ምሳሌ 4 (ዑደታዊ ኢንቴግራል)፡ ∫ e^x sin x dx = (1/2) e^x(sin x - cos x) + C

የታቡላር ኢንቴግሬሽን ስልት (Tabular Method)፡
ለፖሊኖሚያል ብዜቶች ፈጣን አሰራር፤ አንዱን ወደ ዜሮ እያወረዱ ዲፈረንሺየት ማድረግ፣ ሌላውን ደግሞ ኢንቴግሬት በማድረግ በተለዋዋጭ ምልክት ማባዛት።`,
    formulas: [
      { name: 'Integral of ln x', formula: '\\int \\ln x \\, dx = x \\ln x - x + C', explanation: 'Standard logarithmic integral.' },
      { name: 'Cyclic Integral', formula: '\\int e^x \\sin x \\, dx = \\frac{1}{2} e^x (\\sin x - \\cos x) + C', explanation: 'Solved by equating recurring original integral.' }
    ]
  },
  {
    pdfPageNumber: 87,
    bookPageLabel: 'Page 87',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: '5.2.C Trigonometric Integrals: Powers of Sine and Cosine (∫ sin^m x cos^n x dx)',
    titleAm: '5.2.ሐ የትሪጎኖሜትሪክ ኢንቴግራሎች፡ የሳይን እና ኮሳይን ፓወሮች (∫ sin^m x cos^n x dx)',
    subtopicEn: 'Strategy for Odd Powers of cos, Odd Powers of sin, Even Powers (Half-angle Formulas), Example 1 ∫ sin³x cos²x dx',
    subtopicAm: 'ኢ-ተጋማሽ ፓወሮች ስልት፣ ተጋማሽ ፓወሮች በግማሽ-አንግል ቀመር፣ ምሳሌ 1 ∫ sin³x cos²x dx',
    pageType: 'content',
    contentEn: `5.2 Techniques of Integration (Page 87)

C. Trigonometric Integrals:
Integrals of the form ∫ sin^m x cos^n x dx:

Case 1: If the power of cosine n is odd (n = 2k + 1):
Save one cosine factor cos x dx and use cos² x = 1 - sin² x to express the remaining factors in terms of sine:
∫ sin^m x cos^(2k+1) x dx = ∫ sin^m x (1 - sin² x)^k cos x dx.
Then substitute u = sin x, du = cos x dx.

Case 2: If the power of sine m is odd (m = 2k + 1):
Save one sine factor sin x dx and use sin² x = 1 - cos² x to express the remaining factors in terms of cosine:
∫ sin^(2k+1) x cos^n x dx = ∫ (1 - cos² x)^k cos^n x sin x dx.
Then substitute u = cos x, du = -sin x dx.

Case 3: If both m and n are even:
Use the half-angle identities:
sin² x = (1 - cos 2x) / 2
cos² x = (1 + cos 2x) / 2
sin x cos x = (1/2) sin 2x.

Example 1:
Evaluate ∫ sin³ x cos² x dx.
Power of sine is odd (m = 3).
∫ sin³ x cos² x dx = ∫ sin² x cos² x (sin x dx) = ∫ (1 - cos² x) cos² x (sin x dx).
Let u = cos x ⟹ du = -sin x dx.
-∫ (1 - u²) u² du = -∫ (u² - u^4) du = - [u³/3 - u^5/5] + C
= (1/5) cos^5 x - (1/3) cos³ x + C.`,
    contentAm: `ሐ. የትሪጎኖሜትሪክ ኢንቴግራሎች (∫ sin^m x cos^n x dx)፡
1. የኮሳይን ፓወር n ኢ-ተጋማሽ ከሆነ ⟹ አንድ cos x አስቀርቶ cos²x = 1 - sin²x በመጠቀም u = sin x ማድረግ።
2. የሳይን ፓወር m ኢ-ተጋማሽ ከሆነ ⟹ አንድ sin x አስቀርቶ sin²x = 1 - cos²x በመጠቀም u = cos x ማድረግ።
3. ሁለቱም ተጋማሽ ከሆኑ ⟹ የግማሽ አንግል ቀመር sin²x = (1 - cos 2x)/2 እና cos²x = (1 + cos 2x)/2 መጠቀም።

ምሳሌ 1፡ ∫ sin³x cos²x dx = (1/5) cos^5 x - (1/3) cos³ x + C`,
    formulas: [
      { name: 'Half-Angle Identity for Sine', formula: '\\sin^2 x = \\frac{1 - \\cos 2x}{2}', explanation: 'Used to reduce even powers of sine.' },
      { name: 'Half-Angle Identity for Cosine', formula: '\\cos^2 x = \\frac{1 + \\cos 2x}{2}', explanation: 'Used to reduce even powers of cosine.' }
    ]
  },
  {
    pdfPageNumber: 88,
    bookPageLabel: 'Page 88',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Even Powers of Cosine & Powers of Tangent/Secant (∫ tan^m x sec^n x dx)',
    titleAm: 'ተጋማሽ የኮሳይን ፓወሮች እና የታንጀንት/ሲካንት ፓወሮች (∫ tan^m x sec^n x dx)',
    subtopicEn: 'Example 2 ∫ cos^4 x dx, Secant/Tangent Rules (n even substitute u=tanx, m odd substitute u=secx), Examples 3 & 4',
    subtopicAm: 'የ cos^4 x ስሌት፣ የ secant/tangent ህጎች እና ምሳሌ 3 እና 4',
    pageType: 'content',
    contentEn: `5.2 Techniques of Integration (Page 88)

Example 2: Evaluate ∫ cos^4 x dx.
Both powers are even:
cos^4 x = (cos² x)² = ((1 + cos 2x)/2)² = (1/4)(1 + 2 cos 2x + cos² 2x)
= (1/4)(1 + 2 cos 2x + (1 + cos 4x)/2) = 1/8(3 + 4 cos 2x + cos 4x).
∫ cos^4 x dx = 1/8 [3x + 2 sin 2x + (1/4) sin 4x] + C = (3/8)x + (1/4) sin 2x + (1/32) sin 4x + C.

Integrals of the form ∫ tan^m x sec^n x dx:
Case 1: If power of secant n is even (n = 2k):
Save sec² x dx and use sec² x = 1 + tan² x. Substitute u = tan x, du = sec² x dx:
∫ tan^m x sec^(2k) x dx = ∫ tan^m x (1 + tan² x)^(k - 1) sec² x dx.

Case 2: If power of tangent m is odd (m = 2k + 1):
Save sec x tan x dx and use tan² x = sec² x - 1. Substitute u = sec x, du = sec x tan x dx:
∫ tan^(2k+1) x sec^n x dx = ∫ (sec² x - 1)^k sec^(n - 1) x (sec x tan x dx).

Example 3:
Evaluate ∫ tan³ x sec^4 x dx.
Using Case 1 (secant power even, n = 4):
∫ tan³ x (1 + tan² x) sec² x dx. Let u = tan x ⟹ du = sec² x dx.
∫ (u³ + u^5) du = u^4/4 + u^6/6 + C = (1/4) tan^4 x + (1/6) tan^6 x + C.

Example 4:
Evaluate ∫ tan³ x sec³ x dx.
Using Case 2 (tangent power odd, m = 3):
∫ (sec² x - 1) sec² x (sec x tan x dx). Let u = sec x ⟹ du = sec x tan x dx.
∫ (u^4 - u²) du = (1/5) sec^5 x - (1/3) sec³ x + C.`,
    contentAm: `ምሳሌ 2፡ ∫ cos^4 x dx = (3/8)x + (1/4) sin 2x + (1/32) sin 4x + C

የታንጀንትና ሲካንት ኢንቴግራሎች (∫ tan^m x sec^n x dx)፡
1. የ secant ፓወር ተጋማሽ ከሆነ ⟹ sec²x dx አስቀርቶ sec²x = 1 + tan²x በመጠቀም u = tan x ማድረግ።
2. የ tangent ፓወር ኢ-ተጋማሽ ከሆነ ⟹ sec x tan x dx አስቀርቶ tan²x = sec²x - 1 በመጠቀም u = sec x ማድረግ።

ምሳሌ 3፡ ∫ tan³x sec^4 x dx = (1/4) tan^4 x + (1/6) tan^6 x + C
ምሳሌ 4፡ ∫ tan³x sec³x dx = (1/5) sec^5 x - (1/3) sec³ x + C`,
    formulas: [
      { name: 'Secant-Tangent Identity', formula: '\\sec^2 x = 1 + \\tan^2 x', explanation: 'Relates secant and tangent powers.' }
    ]
  },
  {
    pdfPageNumber: 89,
    bookPageLabel: 'Page 89',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: '5.2.D Trigonometric Substitutions (Forms √(a² - x²), √(a² + x²), √(x² - a²))',
    titleAm: '5.2.መ የትሪጎኖሜትሪክ ሰብስቲትዩሽን (የስኩዌር ሩት ቅርጾች)',
    subtopicEn: 'Table of Trig Substitutions (x = a sinθ, x = a tanθ, x = a secθ), Reference Triangles, Example 1 ∫ √(4 - x²)/x² dx',
    subtopicAm: 'የትሪግ ሰብስቲትዩሽን ሰንጠረዥ፣ የማመሳከሪያ ትሪያንግል፣ ምሳሌ 1 ∫ √(4 - x²)/x² dx',
    pageType: 'content',
    contentEn: `5.2 Techniques of Integration (Page 89)

D. Trigonometric Substitutions:
Used for integrands containing square root expressions of quadratic binomials:

Table of Trigonometric Substitutions:
1. Expression: √(a² - x²),  a > 0
   Substitution: x = a sin θ,  -π/2 ≤ θ ≤ π/2
   Identity: √(a² - a² sin² θ) = a cos θ
   Differential: dx = a cos θ dθ

2. Expression: √(a² + x²),  a > 0
   Substitution: x = a tan θ,  -π/2 < θ < π/2
   Identity: √(a² + a² tan² θ) = a sec θ
   Differential: dx = a sec² θ dθ

3. Expression: √(x² - a²),  a > 0
   Substitution: x = a sec θ,  0 ≤ θ < π/2 or π ≤ θ < 3π/2
   Identity: √(a² sec² θ - a²) = a tan θ
   Differential: dx = a sec θ tan θ dθ

Example 1:
Evaluate ∫ √(4 - x²) / x² dx.
Form √(2² - x²): Let x = 2 sin θ ⟹ dx = 2 cos θ dθ.
√(4 - x²) = √(4 - 4 sin² θ) = 2 cos θ.
∫ (2 cos θ / (4 sin² θ)) (2 cos θ dθ) = ∫ (cos² θ / sin² θ) dθ = ∫ cot² θ dθ
= ∫ (csc² θ - 1) dθ = -cot θ - θ + C.
From reference right triangle with opposite x and hypotenuse 2:
cot θ = √(4 - x²) / x,  θ = sin^(-1)(x/2).
Result: - √(4 - x²) / x - sin^(-1)(x/2) + C.`,
    contentAm: `መ. የትሪጎኖሜትሪክ ሰብስቲትዩሽን (Trigonometric Substitution)፡
የስኩዌር ሩት አባባሎችን ወደ ትሪጎኖሜትሪክ ማንነት የመቀየሪያ 3 መሰረታዊ ቅርጾች፡
1. √(a² - x²) ⟹ x = a sin θ መተካት
2. √(a² + x²) ⟹ x = a tan θ መተካት
3. √(x² - a²) ⟹ x = a sec θ መተካት

ምሳሌ 1፡ ∫ √(4 - x²) / x² dx
x = 2 sin θ በማለት፡
መልስ፡ - √(4 - x²) / x - sin⁻¹(x/2) + C`,
    formulas: [
      { name: 'Sine Substitution', formula: 'x = a \\sin \\theta \\implies \\sqrt{a^2 - x^2} = a \\cos \\theta', explanation: 'Eliminates difference-of-squares root.' },
      { name: 'Tangent Substitution', formula: 'x = a \\tan \\theta \\implies \\sqrt{a^2 + x^2} = a \\sec \\theta', explanation: 'Eliminates sum-of-squares root.' },
      { name: 'Secant Substitution', formula: 'x = a \\sec \\theta \\implies \\sqrt{x^2 - a^2} = a \\tan \\theta', explanation: 'Eliminates reversed difference root.' }
    ]
  },
  {
    pdfPageNumber: 90,
    bookPageLabel: 'Page 90',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Trig Substitution Examples & 5.2.E Partial Fractions Decomposition',
    titleAm: 'የትሪግ ሰብስቲትዩሽን ምሳሌዎች እና 5.2.ሠ በከፊል ክፍልፋዮች መበተን (Partial Fractions)',
    subtopicEn: '∫ dx / [x² √(x² + 9)], ∫ dx / √(x² - 16), Proper vs Improper Rational Functions, Long Division',
    subtopicAm: 'ተጨማሪ ምሳሌዎች፤ የክፍልፋይ ፈንክሽኖች ደረጃ (ዲግሪ) ማወዳደር እና የረጅም ክፍፍል ስልት',
    pageType: 'content',
    contentEn: `5.2 Techniques of Integration (Page 90)

Trigonometric Substitution Examples (continued):
Example 2: Evaluate ∫ dx / [x² √(x² + 9)].
Form √(x² + 3²): Let x = 3 tan θ ⟹ dx = 3 sec² θ dθ, √(x² + 9) = 3 sec θ.
∫ (3 sec² θ dθ) / [9 tan² θ · 3 sec θ] = (1/9) ∫ (sec θ / tan² θ) dθ
= (1/9) ∫ (cos θ / sin² θ) dθ = -1 / (9 sin θ) + C.
From triangle with opp = x, adj = 3, hyp = √(x² + 9):
sin θ = x / √(x² + 9) ⟹ -1 / (9 sin θ) = - √(x² + 9) / (9x) + C.

Example 3: Evaluate ∫ dx / √(x² - 16).
Form √(x² - 4²): Let x = 4 sec θ ⟹ dx = 4 sec θ tan θ dθ, √(x² - 16) = 4 tan θ.
∫ (4 sec θ tan θ dθ) / (4 tan θ) = ∫ sec θ dθ = ln|sec θ + tan θ| + C.
sec θ = x/4, tan θ = √(x² - 16)/4.
= ln|x/4 + √(x² - 16)/4| + C = ln|x + √(x² - 16)| + C₁ (where C₁ = C - ln 4).

E. Integration of Rational Functions by Partial Fractions:
A rational function is f(x) = P(x) / Q(x) where P and Q are polynomials.
• Proper: deg(P) < deg(Q).
• Improper: deg(P) ≥ deg(Q). Divide first using polynomial long division:
P(x) / Q(x) = S(x) + R(x) / Q(x) where deg(R) < deg(Q).`,
    contentAm: `ምሳሌ 2፡ ∫ dx / [x² √(x² + 9)] = - √(x² + 9) / (9x) + C
ምሳሌ 3፡ ∫ dx / √(x² - 16) = ln|x + √(x² - 16)| + C₁

ሠ. ራሽናል ፈንክሽኖችን በከፊል ክፍልፋይ (Partial Fractions) ማቀናጀት፡
f(x) = P(x) / Q(x)
• የ P(x) ዲግሪ ከ Q(x) ዲግሪ እኩል ወይም ከበለጠ በመጀመሪያ በረጅም ክፍፍል (Long Division) መካፈል አለበት።
• ከዛም የቀረውን ተገቢ ክፍልፋይ በፓርሻል ፍራክሽን መበተን።`,
    formulas: [
      { name: 'Secant Integral', formula: '\\int \\sec \\theta \\, d\\theta = \\ln |\\sec \\theta + \\tan \\theta| + C', explanation: 'Fundamental secant integral.' }
    ]
  },
  {
    pdfPageNumber: 91,
    bookPageLabel: 'Page 91',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Four Cases of Partial Fractions Decomposition & Distinct Linear Factors',
    titleAm: 'አራቱ የከፊል ክፍልፋዮች መበተኛ ሁኔታዎች እና የተለያዩ ሊኒየር ክፍሎች (Distinct Linear)',
    subtopicEn: 'Case 1 Distinct Linear, Case 2 Repeated Linear, Case 3 Irreducible Quadratic, Case 4 Repeated Quadratic, Example 1',
    subtopicAm: 'አራቱ የፓርሻል ፍራክሽን ሁኔታዎች፣ ምሳሌ 1 ∫ (5x - 3)/(x² - 2x - 3) dx',
    pageType: 'content',
    contentEn: `5.2 Techniques of Integration (Page 91)

Four Cases for Partial Fraction Decomposition:

Case 1 — Distinct Linear Factors:
Q(x) = (a₁ x + b₁)(a₂ x + b₂) ... (a_k x + b_k).
P(x)/Q(x) = A₁/(a₁ x + b₁) + A₂/(a₂ x + b₂) + ... + A_k/(a_k x + b_k).

Case 2 — Repeated Linear Factors:
Q(x) contains a factor (ax + b)^k.
Contribution: A₁/(ax + b) + A₂/(ax + b)² + ... + A_k/(ax + b)^k.

Case 3 — Distinct Irreducible Quadratic Factors:
Q(x) contains (ax² + bx + c) where b² - 4ac < 0.
Contribution: (Ax + B) / (ax² + bx + c).

Case 4 — Repeated Irreducible Quadratic Factors:
Q(x) contains (ax² + bx + c)^k.
Contribution: (A₁x + B₁)/(ax² + bx + c) + ... + (A_k x + B_k)/(ax² + bx + c)^k.

Example 1 — Distinct Linear Factors:
Evaluate ∫ (5x - 3) / (x² - 2x - 3) dx.
Denominator: x² - 2x - 3 = (x - 3)(x + 1).
(5x - 3) / [(x - 3)(x + 1)] = A / (x - 3) + B / (x + 1).
5x - 3 = A(x + 1) + B(x - 3).
• Setting x = 3: 5(3) - 3 = A(4) ⟹ 12 = 4A ⟹ A = 3.
• Setting x = -1: 5(-1) - 3 = B(-4) ⟹ -8 = -4B ⟹ B = 2.
∫ [3 / (x - 3) + 2 / (x + 1)] dx = 3 ln|x - 3| + 2 ln|x + 1| + C.`,
    contentAm: `አራቱ የፓርሻል ፍራክሽን ሁኔታዎች፡
1. የተለያዩ ሊኒየር ክፍሎች፡ A / (a₁x + b₁) + B / (a₂x + b₂)
2. ተደጋጋሚ ሊኒየር ክፍሎች፡ A / (ax + b) + B / (ax + b)² + ...
3. የማይበተኑ ኳድራቲክ ክፍሎች፡ (Ax + B) / (ax² + bx + c)
4. ተደጋጋሚ ኳድራቲክ ክፍሎች፡ (A₁x + B₁) / (ax² + bx + c) + (A₂x + B₂) / (ax² + bx + c)²

ምሳሌ 1፡ ∫ (5x - 3)/(x² - 2x - 3) dx
= ∫ [3/(x - 3) + 2/(x + 1)] dx
= 3 ln|x - 3| + 2 ln|x + 1| + C`,
    formulas: [
      { name: 'Linear Partial Fraction', formula: '\\frac{P(x)}{(x-r_1)(x-r_2)} = \\frac{A}{x-r_1} + \\frac{B}{x-r_2}', explanation: 'Decomposition for distinct real roots.' }
    ]
  },
  {
    pdfPageNumber: 92,
    bookPageLabel: 'Page 92',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Repeated Linear Factors & Irreducible Quadratic Partial Fraction Examples',
    titleAm: 'ተደጋጋሚ ሊኒየር እና የማይበተኑ ኳድራቲክ የፓርሻል ፍራክሽን ምሳሌዎች',
    subtopicEn: 'Example 2 ∫ (x² + 1)/[x(x - 1)²] dx, Example 3 ∫ (2x² - x + 4)/(x³ + 4x) dx',
    subtopicAm: 'ምሳሌ 2 ∫ (x² + 1)/[x(x - 1)²] dx፣ ምሳሌ 3 ∫ (2x² - x + 4)/(x³ + 4x) dx',
    pageType: 'content',
    contentEn: `5.2 Techniques of Integration (Page 92)

Partial Fractions Examples (continued):
Example 2 — Repeated Linear Factor:
Evaluate ∫ (x² + 1) / [x (x - 1)²] dx.
Decomposition:
(x² + 1) / [x (x - 1)²] = A / x + B / (x - 1) + C / (x - 1)².
x² + 1 = A(x - 1)² + B x (x - 1) + C x.
• Set x = 0: 1 = A(1) ⟹ A = 1.
• Set x = 1: 2 = C(1) ⟹ C = 2.
• Set x = 2: 5 = 1(1) + 2B + 2(2) = 5 + 2B ⟹ B = 0.
∫ [1/x + 2 / (x - 1)²] dx = ln|x| - 2 / (x - 1) + C.

Example 3 — Irreducible Quadratic Factor:
Evaluate ∫ (2x² - x + 4) / (x³ + 4x) dx.
Denominator: x³ + 4x = x(x² + 4). (x² + 4 has no real zeros).
Decomposition:
(2x² - x + 4) / [x (x² + 4)] = A / x + (B x + C) / (x² + 4).
2x² - x + 4 = A(x² + 4) + (B x + C)x = (A + B)x² + C x + 4A.
Comparing coefficients:
• Constant: 4A = 4 ⟹ A = 1.
• Coefficient of x: C = -1.
• Coefficient of x²: A + B = 2 ⟹ 1 + B = 2 ⟹ B = 1.
Integral:
∫ [1/x + (x - 1)/(x² + 4)] dx = ∫ 1/x dx + 1/2 ∫ 2x/(x² + 4) dx - ∫ 1/(x² + 4) dx
= ln|x| + 1/2 ln(x² + 4) - 1/2 tan^(-1)(x/2) + C.`,
    contentAm: `ምሳሌ 2 (ተደጋጋሚ ሊኒየር)፡
∫ (x² + 1) / [x(x - 1)²] dx = ln|x| - 2 / (x - 1) + C

ምሳሌ 3 (ኳድራቲክ)፡
∫ (2x² - x + 4) / (x³ + 4x) dx
= ln|x| + 1/2 ln(x² + 4) - 1/2 tan⁻¹(x/2) + C`,
    formulas: [
      { name: 'Quadratic Decomposition', formula: '\\frac{P(x)}{x(x^2+a^2)} = \\frac{A}{x} + \\frac{Bx + C}{x^2 + a^2}', explanation: 'Decomposition with an irreducible quadratic factor.' }
    ]
  },
  {
    pdfPageNumber: 93,
    bookPageLabel: 'Page 93',
    chapterNumber: 5,
    sectionRef: '5.3',
    titleEn: '5.3 Definite Integrals: Riemann Sums & Properties',
    titleAm: '5.3 የተወሰነ ኢንቴግራል (Definite Integrals)፡ የሪማን ድምር እና ባህሪያት',
    subtopicEn: 'Partition P, Norm ||P||, Definition of Definite Integral as Limit of Riemann Sum, Properties (Additivity, Order, Linearity)',
    subtopicAm: 'የክፍፍል ኖርም፣ የሪማን ድምር ሊሚት ትርጓሜ፣ የተወሰነ ኢንቴግራል መሰረታዊ ባህሪያት',
    pageType: 'content',
    contentEn: `5.3 Definite Integrals (Page 93)

Definition — Riemann Sum & Definite Integral:
Let f be defined on [a, b]. Let P = {x₀, x₁, ..., x_n} be a partition of [a, b] with:
a = x₀ < x₁ < x₂ < ... < x_n = b.
Let Δx_i = x_i - x_(i-1) and ||P|| = max {Δx_i}.
Choose a sample point x_i* in [x_(i-1), x_i].
The sum:
∑_{i=1}^n f(x_i*) Δx_i
is called a Riemann Sum of f for partition P.

Definition of Definite Integral:
The definite integral of f from a to b is:
∫_a^b f(x) dx = lim_{||P|| ⟶ 0} ∑_{i=1}^n f(x_i*) Δx_i
provided this limit exists. If it exists, f is called integrable on [a, b].
Here a is the lower limit and b is the upper limit of integration.

Properties of the Definite Integral:
1. ∫_a^a f(x) dx = 0
2. ∫_b^a f(x) dx = - ∫_a^b f(x) dx
3. ∫_a^b c dx = c(b - a)
4. Linearity: ∫_a^b [c f(x) ± d g(x)] dx = c ∫_a^b f(x) dx ± d ∫_a^b g(x) dx
5. Interval Additivity: ∫_a^b f(x) dx = ∫_a^c f(x) dx + ∫_c^b f(x) dx
6. Comparison: If f(x) ≥ g(x) on [a, b], then ∫_a^b f(x) dx ≥ ∫_a^b g(x) dx.`,
    contentAm: `5.3 የተወሰነ ኢንቴግራል (Definite Integrals)፡
ትርጓሜ — የሪማን ድምር (Riemann Sum)፡
∫_a^b f(x) dx = lim_{||P|| ⟶ 0} ∑_{i=1}^n f(x_i*) Δx_i
ይህ ሊሚት ካለ f በ [a, b] ላይ ኢንቴግሬብል ይባላል።

መሰረታዊ ባህሪያት፡
1. ∫_a^a f(x) dx = 0
2. ∫_b^a f(x) dx = - ∫_a^b f(x) dx
3. ∫_a^b c dx = c(b - a)
4. ∫_a^b [c f ± d g] dx = c ∫ f dx ± d ∫ g dx
5. ክፍተት ማጣመር፡ ∫_a^b f dx = ∫_a^c f dx + ∫_c^b f dx`,
    formulas: [
      { name: 'Definite Integral as Riemann Limit', formula: '\\int_a^b f(x) dx = \\lim_{||P|| \\to 0} \\sum_{i=1}^n f(x_i^*) \\Delta x_i', explanation: 'Formal analytic foundation of definite integration.' }
    ]
  },
  {
    pdfPageNumber: 94,
    bookPageLabel: 'Page 94',
    chapterNumber: 5,
    sectionRef: '5.3',
    titleEn: 'Fundamental Theorem of Calculus (Parts 1 and 2) & Evaluation Examples',
    titleAm: 'የካልኩለስ መሰረታዊ ቴዎረም (FTC ክፍል 1 እና 2) እና የተሰሩ ምሳሌዎች',
    subtopicEn: 'FTC1 (d/dx ∫_a^x f(t)dt = f(x)), FTC2 (∫_a^b f(x)dx = F(b) - F(a)), Example 1 FTC1, Example 2 ∫_0^2 (x³ - 3x + 1) dx',
    subtopicAm: 'የ FTC ክፍል 1 እና ክፍል 2 ማብራሪያ፣ ምሳሌ 1 እና ምሳሌ 2',
    pageType: 'content',
    contentEn: `5.3 Definite Integrals (Page 94)

Theorem 5.3.1 — Fundamental Theorem of Calculus (FTC):

Part 1 (FTC 1):
If f is continuous on [a, b], then the function g defined by:
g(x) = ∫_a^x f(t) dt,  a ≤ x ≤ b
is continuous on [a, b], differentiable on (a, b), and:
g'(x) = (d/dx) [∫_a^x f(t) dt] = f(x).

Part 2 (FTC 2 — Evaluation Theorem):
If f is continuous on [a, b] and F is any anti-derivative of f on [a, b] (F' = f), then:
∫_a^b f(x) dx = F(b) - F(a) = [F(x)]_a^b.

Example 1 — FTC 1:
Find the derivative of g(x) = ∫_1^x √(t² + 1) dt.
By FTC 1: g'(x) = √(x² + 1).

Example 1b — Chain Rule with FTC 1:
Find (d/dx) [∫_0^(x²) cos t dt].
Let u = x² ⟹ (d/dx) = (d/du) · (du/dx) = cos(x²) · 2x = 2x cos(x²).

Example 2 — FTC 2 Evaluation:
Evaluate ∫_0^2 (x³ - 3x + 1) dx.
Anti-derivative: F(x) = x^4/4 - 3x²/2 + x.
∫_0^2 (x³ - 3x + 1) dx = [x^4/4 - 3x²/2 + x]_0^2
= (16/4 - 3(4)/2 + 2) - 0 = 4 - 6 + 2 = 0.`,
    contentAm: `ቴዎረም 5.3.1 — የካልኩለስ መሰረታዊ ቴዎረም (Fundamental Theorem of Calculus)፡
ክፍል 1 (FTC 1)፡
d/dx [∫_a^x f(t) dt] = f(x)
(ዲፈረንሺየሽንና ኢንቴግሬሽን የተገላቢጦሽ ሂደቶች መሆናቸውን ያረጋግጣል)።

ክፍል 2 (FTC 2)፡
∫_a^b f(x) dx = F(b) - F(a)
(የተወሰነ ኢንቴግራልን በአንቲ-ዲሪቬቲቭ ዳርቻዎችን በመቀነስ ማስላት)።

ምሳሌ 2፡ ∫_0^2 (x³ - 3x + 1) dx = [x^4/4 - 3x²/2 + x]_0^2 = 4 - 6 + 2 = 0።`,
    formulas: [
      { name: 'FTC Part 1', formula: '\\frac{d}{dx} \\left[ \\int_a^x f(t) dt \\right] = f(x)', explanation: 'Differentiation of definite integral with variable upper limit.' },
      { name: 'FTC Part 2', formula: '\\int_a^b f(x) dx = F(b) - F(a)', explanation: 'Evaluation of definite integral via antiderivative.' }
    ]
  },
  {
    pdfPageNumber: 95,
    bookPageLabel: 'Page 95',
    chapterNumber: 5,
    sectionRef: '5.3',
    titleEn: 'Definite Integrals by Substitution & Symmetry of Even/Odd Functions',
    titleAm: 'በተለዋዋጭ መተካት የተወሰነ ኢንቴግራል እና የተጋማሽ/ኢ-ተጋማሽ ፈንክሽን ሲሜትሪ',
    subtopicEn: 'Change of Limits Rule ∫_a^b f(g(x))g\'(x)dx = ∫_{g(a)}^{g(b)} f(u)du, Example 4, Symmetry Integrals on [-a, a]',
    subtopicAm: 'የዳርቻዎች መቀየር ህግ፣ ምሳሌ 4፣ በ [-a, a] ላይ የሲሜትሪ ህጎች',
    pageType: 'content',
    contentEn: `5.3 Definite Integrals (Page 95)

Example 3:
Evaluate ∫_0^(π/4) sec² x dx = [tan x]_0^(π/4) = tan(π/4) - tan 0 = 1 - 0 = 1.

Substitution Rule for Definite Integrals:
If g' is continuous on [a, b] and f is continuous on the range of u = g(x), then:
∫_a^b f(g(x)) g'(x) dx = ∫_{g(a)}^{g(b)} f(u) du

Example 4:
Evaluate ∫_0^1 x √(x² + 1) dx.
Let u = x² + 1 ⟹ du = 2x dx ⟹ x dx = du / 2.
Change of limits:
When x = 0, u = 0² + 1 = 1.
When x = 1, u = 1² + 1 = 2.
∫_0^1 x √(x² + 1) dx = 1/2 ∫_1^2 u^(1/2) du = 1/2 [ (2/3) u^(3/2) ]_1^2
= 1/3 (2^(3/2) - 1^(3/2)) = (2√2 - 1) / 3.

Integrals of Symmetric Functions on [-a, a]:
Let f be continuous on [-a, a]:
(a) If f is even (f(-x) = f(x)), then:
∫_{-a}^a f(x) dx = 2 ∫_0^a f(x) dx.

(b) If f is odd (f(-x) = -f(x)), then:
∫_{-a}^a f(x) dx = 0.

Example 5:
∫_{-π}^π (x^5 + sin x) dx = 0  (since x^5 and sin x are both odd functions).`,
    contentAm: `በተወሰነ ኢንቴግራል ላይ ሰብስቲትዩሽን ሲደረግ ዳርቻዎችን መቀየር፡
x = a ሲሆን u = g(a)፤ x = b ሲሆን u = g(b)።
ምሳሌ 4፡ ∫_0^1 x √(x² + 1) dx = (2√2 - 1) / 3

በ [-a, a] ላይ የሲሜትሪ ህጎች፡
(a) f(x) ተጋማሽ (Even) ከሆነ፡ ∫_{-a}^a f(x) dx = 2 ∫_0^a f(x) dx
(b) f(x) ኢ-ተጋማሽ (Odd) ከሆነ፡ ∫_{-a}^a f(x) dx = 0
ምሳሌ 5፡ ∫_{-π}^π (x^5 + sin x) dx = 0 (ኢ-ተጋማሽ ስለሆኑ)።`,
    formulas: [
      { name: 'Definite Substitution with Limits', formula: '\\int_a^b f(g(x)) g\'(x) dx = \\int_{g(a)}^{g(b)} f(u) du', explanation: 'Direct limit transformation avoids back-substitution.' },
      { name: 'Odd Function Symmetry', formula: 'f(-x) = -f(x) \\implies \\int_{-a}^a f(x) dx = 0', explanation: 'Net cancellations across symmetric origin.' }
    ]
  },
  {
    pdfPageNumber: 96,
    bookPageLabel: 'Page 96',
    chapterNumber: 5,
    sectionRef: '5.4.1',
    titleEn: '5.4 Applications of Definite Integrals: 5.4.1 Area Between Curves',
    titleAm: '5.4 የተወሰነ ኢንቴግራል ተግባራዊ ጥቅሞች፡ 5.4.1 በከርቮች መካከል ያለ ስፋት (Area)',
    subtopicEn: 'Area Formula A = ∫_a^b [f(x) - g(x)] dx, Finding Intersections, Integrating with respect to x and y, Example 1',
    subtopicAm: 'የከርቮች ስፋት ቀመር A = ∫ [f(x) - g(x)] dx፣ የመገናኛ ነጥቦች ስሌት፣ ምሳሌ 1',
    pageType: 'content',
    contentEn: `5.4 Applications of Definite Integrals (Page 96)
5.4.1 Area Between Curves

Definition:
If f and g are continuous functions with f(x) ≥ g(x) on [a, b], then the area A of the region bounded by the curves y = f(x), y = g(x), and the vertical lines x = a, x = b is:
A = ∫_a^b [f(x) - g(x)] dx = ∫_a^b (y_upper - y_lower) dx

Integrating with respect to y:
If the region is bounded by x = f(y) and x = g(y) with f(y) ≥ g(y) for c ≤ y ≤ d:
A = ∫_c^d [f(y) - g(y)] dy = ∫_c^d (x_right - x_left) dy

Example 1:
Find the area of the region enclosed between the parabolas y = x² and y = 2x - x².
Solution:
1. Find intersection points:
x² = 2x - x² ⟹ 2x² - 2x = 0 ⟹ 2x(x - 1) = 0 ⟹ x = 0 and x = 1.
2. For x in [0, 1]: 2x - x² ≥ x² (e.g. at x = 0.5: 2(0.5) - 0.25 = 0.75 > 0.25).
Top curve: y_upper = 2x - x²; Bottom curve: y_lower = x².
3. Area integral:
A = ∫_0^1 [(2x - x²) - x²] dx = ∫_0^1 (2x - 2x²) dx = [x² - (2/3)x³]_0^1
= (1 - 2/3) - 0 = 1/3 square units.`,
    contentAm: `5.4.1 በከርቮች መካከል ያለ ስፋት (Area Between Curves)፡
f(x) ≥ g(x) ሲሆን፡
A = ∫_a^b [f(x) - g(x)] dx = ∫_a^b (y_ላይኛ - y_ታችኛ) dx

በ y አንጻር ሲሰላ፡
A = ∫_c^d [f(y) - g(y)] dy = ∫_c^d (x_ቀኝ - x_ግራ) dy

ምሳሌ 1፡ በ y = x² እና y = 2x - x² መካከል የታጠረውን ስፋት ፈልጉ፡
የመገናኛ ነጥቦች፡ x = 0 እና x = 1
A = ∫_0^1 (2x - 2x²) dx = [x² - (2/3)x³]_0^1 = 1/3 ካሬ ዩኒት።`,
    formulas: [
      { name: 'Area Between Curves Formula', formula: 'A = \\int_a^b [f(x) - g(x)] \\, dx', explanation: 'Total enclosed plane area between upper and lower curves.' }
    ]
  },
  {
    pdfPageNumber: 97,
    bookPageLabel: 'Page 97',
    chapterNumber: 5,
    sectionRef: '5.4.2',
    titleEn: '5.4.2 Arc Length of a Curve & Complete Applied Mathematics-I Syllabus Summary',
    titleAm: '5.4.2 የከርቭ ቅስት ርዝመት (Arc Length) እና የአፕላይድ ሂሳብ ፩ ሙሉ ማጠቃለያ',
    subtopicEn: 'Arc Length Formula L = ∫_a^b √(1 + [f\'(x)]²) dx, Worked Example y = x^(3/2) on [0, 4], Complete 5-Chapter Curriculum Review',
    subtopicAm: 'የቅስት ርዝመት ቀመር L = ∫ √(1 + (f\')²) dx፣ ምሳሌ ለ y = x^(3/2) በ [0, 4]፣ ባለ 5 ምዕራፍ ማጠቃለያ',
    pageType: 'content',
    contentEn: `5.4 Applications of Definite Integrals (Page 97)
5.4.2 Arc Length of a Smooth Curve

Definition:
If f' is continuous on [a, b], then the arc length L of the curve y = f(x) from x = a to x = b is:
L = ∫_a^b √(1 + [f'(x)]²) dx = ∫_a^b √(1 + (dy/dx)²) dx

Similarly, if the curve is given by x = g(y) for c ≤ y ≤ d where g' is continuous:
L = ∫_c^d √(1 + [g'(y)]²) dy = ∫_c^d √(1 + (dx/dy)²) dy

Example 1:
Find the length of the arc of the curve y = x^(3/2) from x = 0 to x = 4.
Solution:
f(x) = x^(3/2) ⟹ f'(x) = dy/dx = (3/2) x^(1/2).
1 + [f'(x)]² = 1 + [(3/2) x^(1/2)]² = 1 + (9/4) x.
L = ∫_0^4 √(1 + 9x/4) dx.
Let u = 1 + 9x/4 ⟹ du = (9/4) dx ⟹ dx = (4/9) du.
When x = 0, u = 1. When x = 4, u = 1 + 9 = 10.
L = (4/9) ∫_1^10 u^(1/2) du = (4/9) [ (2/3) u^(3/2) ]_1^10
= (8/27) (10^(3/2) - 1) = (8/27) (10√10 - 1) ≈ 9.073 units.

---
Applied Mathematics-IB (Math 1014 / Math 1014B) Course Completion:
• Chapter 1: Vectors and Vector Spaces (Pages 1–22)
• Chapter 2: Matrices, Determinants and Systems of Linear Equations (Pages 23–37)
• Chapter 3: Limit and Continuity (Pages 38–52)
• Chapter 4: Derivatives and Application of Derivatives (Pages 53–82)
• Chapter 5: Integrations & Applications (Pages 83–97)
All 97 official pages transcribed with bilingual English & Amharic translations, formulas, theorems, and worked solutions.`,
    contentAm: `5.4.2 የከርቭ ቅስት ርዝመት (Arc Length)፡
f'(x) በ [a, b] ላይ ቀጣይ ሲሆን የከርቩ ርዝመት L፡
L = ∫_a^b √(1 + [f'(x)]²) dx

ምሳሌ 1፡ ለከርቩ y = x^(3/2) ከ x = 0 እስከ x = 4 ያለውን ርዝመት ፈልጉ፡
f'(x) = (3/2) x^(1/2) ⟹ 1 + [f'(x)]² = 1 + 9x/4
L = ∫_0^4 √(1 + 9x/4) dx = (8/27) (10√10 - 1) ≈ 9.073 ዩኒት።

---
የአፕላይድ ሂሳብ ፩ቢ (Math 1014B) ኮርስ ማጠቃለያ፡
• ምዕራፍ 1፡ ቬክተሮች እና የቬክተር ስፔሶች (ገጽ 1–22)
• ምዕራፍ 2፡ ማትሪክስ፣ ዲተርሚናንት እና ሊኒየር ሲስተሞች (ገጽ 23–37)
• ምዕራፍ 3፡ ሊሚት እና ቀጣይነት (ገጽ 38–52)
• ምዕራፍ 4፡ ዲሪቬቲቭ እና ተግባራዊ ጥቅሞቹ (ገጽ 53–82)
• ምዕራፍ 5፡ ኢንቴግሬሽን እና ተግባራዊ ጥቅሞቹ (ገጽ 83–97)
ሁሉም 97 ይፋዊ ገጾች ከነሙሉ ርዕስ፣ ማብራሪያ፣ ቀመሮችና መፍትሔዎች ጋር ተካተዋል።`,
    formulas: [
      { name: 'Arc Length Formula', formula: 'L = \\int_a^b \\sqrt{1 + [f\'(x)]^2} \\, dx', explanation: 'Differential arc element ds = √(dx² + dy²).' }
    ]
  }
];
