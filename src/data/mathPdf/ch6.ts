import { OfficialPdfPage } from './types';

export const mathCh6Pages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 141,
    bookPageLabel: 'Page 141',
    chapterNumber: 6,
    sectionRef: '6.1',
    titleEn: 'Chapter 6: Sequences and Series — 6.1 Definition and Notions of Sequence',
    titleAm: 'ምዕራፍ 6፡ ሲክዌንሶች እና ተከታታይ ድምሮች (ሲሪስ) — 6.1 የሲክዌንስ ምንነት እና ትርጓሜ',
    subtopicEn: 'Definition of Sequence as a Function, General nth Term a_n, Listing Terms, Arithmetic vs Geometric Sequences',
    subtopicAm: 'ሲክዌንስ እንደ ፈንክሽን፣ አጠቃላይ የ nኛ ተርም a_n፣ የመጀመሪያ ተርሞችን መዘርዘር',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
6 Sequences and Series
In this chapter we first study sequences, which by definition are functions since they are helpful in the study of series. Series can be used to represent many of the differentiable functions such as polynomial, exponential, logarithmic etc. functions. A major advantage of the series representation of functions is that it allows us to evaluate integrals of the form say ∫ (sin x / x) dx and ∫ e^(-x²) dx and also approximate numbers such as e, π, and √2.

6.1 Definition and Notions of Sequence
An ordered set of numbers such as a₁, a₂, a₃, ..., aₙ, ... is called a sequence and usually designated briefly by {aₙ}. Each number aₖ is a term of the sequence. In particular the nth term of a sequence is denoted by aₙ. We may also define a sequence as a function.

Definition 6.1: A sequence is a function whose domain is the collection of all integers greater than or equal to a given integer m (usually 0 or 1).
Observe if we define a function by f(n) = aₙ for n ≥ 1, then the ordered set of numbers determines a sequence, written {aₙ}₁^∞.

Example 1: List the first four terms and the tenth term of each sequence:
(a) {(-1)ⁿ⁻¹ · 2n / (n + 1)}:
n=1: 1; n=2: -4/3; n=3: 3/2; n=4: -8/5; n=10: -20/11.
(b) {2 + (0.1)ⁿ}:
n=0: 3; n=1: 2.1; n=2: 2.01; n=3: 2.001; n=10: 2.0000000001.
(c) {(1/2)ⁿ⁻¹}:
n=1: 1; n=2: 1/2; n=3: 1/4; n=4: 1/8; n=10: 1/2⁹ = 1/512.
(d) {2}₁^∞: Constant sequence 2, 2, 2, 2, ...`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምዕራፍ 6፡ ሲክዌንሶች እና ሲሪሶች (Sequences and Series)

6.1 የሲክዌንስ ትርጓሜ (Definition of Sequence)
በቅደም ተከተል የተቀመጡ ቁጥሮች ስብስብ a₁, a₂, a₃, ..., aₙ ሲክዌንስ ይባላል። በምልክት {aₙ} ተብሎ ይጻፋል። እያንዳንዱ aₖ የሲክዌንሱ ተርም (Term) ሲሆን aₙ የ nኛ ተርም ይባላል።

ትርጓሜ 6.1፡ ሲክዌንስ ማለት ዶሜኑ ከ m (ብዙውን ጊዜ 1 ወይም 0) የሚጀምሩ ሙሉ ቁጥሮች (Integers) የሆኑ ፈንክሽን ነው።
ምሳሌ 1፡
ሀ) aₙ = (-1)ⁿ⁻¹ (2n)/(n+1) ⟹ 1, -4/3, 3/2, -8/5, ..., a₁₀ = -20/11
ለ) aₙ = 2 + (0.1)ⁿ ⟹ 2.1, 2.01, 2.001, ..., a₁₀ = 2.0000000001
ሐ) aₙ = (1/2)ⁿ⁻¹ ⟹ 1, 1/2, 1/4, 1/8, ..., a₁₀ = 1/512`,
    formulas: [
      { name: 'Sequence Term Formula', formula: 'f(n) = aₙ,  n ≥ 1', explanation: 'Formal functional definition mapping positive integers to real values.' }
    ]
  },
  {
    pdfPageNumber: 142,
    bookPageLabel: 'Page 142',
    chapterNumber: 6,
    sectionRef: '6.2',
    titleEn: '6.2 Convergence of Sequences: Rigorous Definition and Divergence Criteria',
    titleAm: '6.2 የሲክዌንሶች መገናኘት (Convergence)፡ ጥብቅ ትርጓሜ እና የልዩነት መስፈርቶች',
    subtopicEn: 'Definition 6.2 (Limit L of Sequence, Epsilon-N Formulation), Divergence to ±Infinity, Comparison with Continuous Functions',
    subtopicAm: 'የሲክዌንስ ሊሚት ትርጓሜ (ኤፕሲሎን-N)፣ ወደ ኢንፊኒቲ ማምራት፣ የኮንቨርጀንስ እና ዳይቨርጀንስ መለያ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
6.2 Convergence of Sequences
A sequence {aₙ} may have the property that as n increases, aₙ gets very close to some real number L. For instance in {(1/2)ⁿ}, the nth term can be made arbitrarily close to 0 by choosing n sufficiently large.

Definition 6.2: A sequence {aₙ}₁^∞ has the limit L, or converges to L (written lim_{n⟶∞} aₙ = L or aₙ ⟶ L as n ⟶ ∞), if for every ε > 0 there exists a positive number N such that:
|aₙ - L| < ε whenever n > N.
If such a number L does not exist, the sequence has no limit, or diverges.

Definition 6.3:
If for every number M there is an integer N such that n ≥ N implies aₙ > M, we say {aₙ} diverges to ∞: lim_{n⟶∞} aₙ = ∞.
Similarly, if n ≥ N implies aₙ < M, then lim_{n⟶∞} aₙ = -∞.

Analogy with Functions:
The definition lim_{n⟶∞} aₙ = L is analogous to lim_{x⟶∞} f(x) = L for a continuous function.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
6.2 የሲክዌንሶች መገናኘት (Convergence of Sequences)
ሲክዌንስ {aₙ} n እየጨመረ ሲሄድ ወደ አንድ ቋሚ ቁጥር L የሚቃረብ ከሆነ ኮንቨርጅ ያደርጋል (ይገናኛል) ይባላል።

ትርጓሜ 6.2 (የሊሚት ፎርማል ትርጓሜ)፡
ለማንኛውም ε > 0፣ n > N በሚሆንበት ጊዜ ሁሉ |aₙ - L| < ε የሚያደርግ ቁጥር N ከተገኘ፡
lim_{n⟶∞} aₙ = L
ይህ ቁጥር L የማይገኝ ከሆነ ሲክዌንሱ ዳይቨርጅ ያደርጋል (ይለያያል) እንላለን።

ትርጓሜ 6.3 (ዳይቨርጀንስ ወደ ኢንፊኒቲ)፡
ለማንኛውም M፣ n ≥ N ሲሆን aₙ > M ከሆነ lim aₙ = ∞ ይባላል።`,
    formulas: [
      { name: 'Sequence Convergence (ε-N)', formula: '∀ε > 0, ∃N : n > N ⟹ |aₙ - L| < ε', explanation: 'Formal definition of limit of a sequence.' }
    ]
  },
  {
    pdfPageNumber: 143,
    bookPageLabel: 'Page 143',
    chapterNumber: 6,
    sectionRef: '6.2.1',
    titleEn: 'Theorem 6.4: Connection to Continuous Limits & Geometric Sequence rⁿ',
    titleAm: 'ቴዎረም 6.4፡ ከቀጣይ ሊሚቶች ጋር ያለው ቁርኝት እና የ rⁿ ጂኦሜትሪክ ሲክዌንስ',
    subtopicEn: 'Theorem 6.4 (lim a_n = lim f(x)), Geometric Sequence rⁿ Convergence Criterion (|r| < 1 or r = 1), Oscillating Sequences',
    subtopicAm: 'ቀጣይ ፈንክሽንን በመጠቀም ሊሚት ማስላት፣ የ rⁿ ኮንቨርጀንስ ሁኔታዎች (|r| < 1 ሲሆን ወደ 0፣ r = 1 ሲሆን ወደ 1)',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Theorem 6.4: Let {aₙ} be a sequence, L a number, and f a function defined on [m, ∞) such that f(n) = aₙ for n ≥ m.
If lim_{x⟶∞} f(x) = L, then {aₙ} converges and lim_{n⟶∞} aₙ = L.
If lim_{x⟶∞} f(x) = ∞ (or -∞), then {aₙ} diverges to ∞ (or -∞).

Example 1: Determine whether {2 + 1/n²} converges or diverges.
Solution: Let f(x) = 2 + 1/x².
lim_{x⟶∞} f(x) = lim_{x⟶∞} (2 + 1/x²) = 2 + 0 = 2.
Therefore lim_{n⟶∞} (2 + 1/n²) = 2 (Converges to 2).

Example 2:
(a) {n³ + 2}: lim_{n⟶∞} (n³ + 2) = ∞ (Diverges to ∞).
(b) {(-1)ⁿ}: Terms oscillate: -1, 1, -1, 1, ... Limit does not exist (Diverges by oscillation).

Example 3 (Geometric Sequence rⁿ):
lim_{n⟶∞} rⁿ =
- 0 if |r| < 1
- 1 if r = 1
- diverges if r > 1 or r ≤ -1.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ቴዎረም 6.4፡ f(n) = aₙ ሆኖ lim_{x⟶∞} f(x) = L ከሆነ የሲክዌንሱም ሊሚት lim_{n⟶∞} aₙ = L ይሆናል።

ምሳሌ 1፡ {2 + 1/n²} ⟹ lim (2 + 1/n²) = 2 (ኮንቨርጅ ያደርጋል)
ምሳሌ 2፡ {(-1)ⁿ} ⟹ -1 እና 1 እያለ ስለሚወዛወዝ ሊሚት የለውም (ዳይቨርጅ ያደርጋል)

ምሳሌ 3 (የ rⁿ ጂኦሜትሪክ ሲክዌንስ)፡
- |r| < 1 ከሆነ lim rⁿ = 0
- r = 1 ከሆነ lim rⁿ = 1
- r > 1 ወይም r ≤ -1 ከሆነ ዳይቨርጅ ያደርጋል።`,
    formulas: [
      { name: 'Geometric Sequence Limit', formula: 'lim_{n⟶∞} rⁿ = 0  (|r| < 1),  = 1  (r = 1)', explanation: 'Behavior of exponential geometric sequence powers.' }
    ]
  },
  {
    pdfPageNumber: 144,
    bookPageLabel: 'Page 144',
    chapterNumber: 6,
    sectionRef: '6.2.2',
    titleEn: 'Limit of n^(1/n) via L’Hôpital’s Rule & Algebraic Properties of Limits',
    titleAm: 'የ n^(1/n) ሊሚት በሎፒታል ህግ እና የአልጀብራ ሊሚት ህጎች ለሲክዌንስ',
    subtopicEn: 'Proof that lim n^(1/n) = 1, Sum, Difference, Product, Quotient and Scalar Multiples Limit Laws for Convergent Sequences',
    subtopicAm: 'የ lim n^(1/n) = 1 ማረጋገጫ፣ የሲክዌንሶች የድምር፣ የቀናሽ፣ የብዜት እና የክፍፍል ሊሚት ህጎች',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Example 4: Show that lim_{n⟶∞} ⁿ√n = lim_{n⟶∞} n^(1/n) = 1.
Solution:
n^(1/n) = e^((1/n) ln n).
Let f(x) = e^((ln x)/x) for x ≥ 1.
Using L'Hôpital's Rule on (ln x)/x:
lim_{x⟶∞} (ln x)/x = lim_{x⟶∞} (1/x)/1 = 0.
Since the exponential function is continuous:
lim_{x⟶∞} e^((ln x)/x) = e⁰ = 1.
Therefore lim_{n⟶∞} ⁿ√n = 1.

6.2.1 Convergence Properties of Sequences:
If {aₙ} and {bₙ} are convergent sequences with lim aₙ = A and lim bₙ = B:
1. lim (aₙ ± bₙ) = lim aₙ ± lim bₙ = A ± B
2. lim (c · aₙ) = c · lim aₙ = c · A
3. lim (aₙ · bₙ) = (lim aₙ) · (lim bₙ) = A · B
4. lim (aₙ / bₙ) = (lim aₙ) / (lim bₙ) = A / B, provided B ≠ 0 and bₙ ≠ 0.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምሳሌ 4፡ lim_{n⟶∞} n^(1/n) = 1 መሆኑን ማሳየት፡
n^(1/n) = e^(ln n / n) ⟹ በሎፒታል ህግ lim (ln x / x) = lim (1/x) = 0 ⟹ e⁰ = 1።
ስለዚህ lim ⁿ√n = 1 ይሆናል።

6.2.1 የሲክዌንሶች ሊሚት ባህሪያት፡
{aₙ} እና {bₙ} ኮንቨርጀንት ከሆኑ፡
1. lim (aₙ ± bₙ) = lim aₙ ± lim bₙ
2. lim (c aₙ) = c lim aₙ
3. lim (aₙ bₙ) = (lim aₙ)(lim bₙ)
4. lim (aₙ / bₙ) = lim aₙ / lim bₙ (lim bₙ ≠ 0)`,
    formulas: [
      { name: 'Limit of nth Root of n', formula: 'lim_{n⟶∞} n^(1/n) = 1', explanation: 'Fundamental evaluation via logarithmic exponentiation and L’Hôpital’s rule.' }
    ]
  },
  {
    pdfPageNumber: 145,
    bookPageLabel: 'Page 145',
    chapterNumber: 6,
    sectionRef: '6.2.3',
    titleEn: 'Squeeze Theorem for Sequences & Bounded Monotone Concepts',
    titleAm: 'የሲክዌንሶች ስኩዊዝ (መጭመቂያ) ቴዎረም እና የታጠሩ ሞኖቶኒክ ሲክዌንሶች',
    subtopicEn: 'Theorem 6.5 Squeeze Theorem (a_n ≤ b_n ≤ c_n), Evaluation of lim (sin² n)/2ⁿ = 0, Definition of Bounded Sequence |a_n| ≤ M',
    subtopicAm: 'የስኩዊዝ ቴዎረም፣ የ (sin² n)/2ⁿ ሊሚት ስሌት፣ የታጠረ ሲክዌንስ (|a_n| ≤ M) እና ያልታጠረ ሲክዌንስ ትርጓሜ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Example 5: Find lim_{n⟶∞} n³ / (2n³ + 4n).
Solution: Divide numerator and denominator by n³:
lim_{n⟶∞} 1 / (2 + 4/n²) = 1 / (2 + 0) = 1/2.

Theorem 6.5 (The Squeeze Theorem for Sequences):
If {aₙ}, {bₙ}, and {cₙ} are sequences such that aₙ ≤ bₙ ≤ cₙ for every n, and if lim aₙ = L = lim cₙ, then lim bₙ = L.

Example 6: Find the limit of the sequence {(sin² n) / 2ⁿ}.
Solution: Since 0 ≤ sin² n ≤ 1 for all n:
0 ≤ (sin² n) / 2ⁿ ≤ 1 / 2ⁿ.
Since lim_{n⟶∞} 0 = 0 and lim_{n⟶∞} (1/2)ⁿ = 0, by the Squeeze Theorem:
lim_{n⟶∞} (sin² n) / 2ⁿ = 0.

6.2.2 Bounded Monotone Sequences:
Definition: A sequence {aₙ} is bounded if there is a number M such that |aₙ| ≤ M for every n. Otherwise it is unbounded.
- {1/n} is bounded (0 < 1/n ≤ 1).
- {(-1)ⁿ} is bounded (|(-1)ⁿ| = 1).
- {n²} is unbounded.

Theorem 2.6:
a. If {aₙ} converges, then {aₙ} is bounded.
b. If {aₙ} is unbounded, then {aₙ} is divergent.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምሳሌ 5፡ lim n³/(2n³ + 4n) = 1/2

ቴዎረም 6.5 (የስኩዊዝ ቴዎረም)፡
aₙ ≤ bₙ ≤ cₙ ሆኖ lim aₙ = L = lim cₙ ከሆነ፡ lim bₙ = L ይሆናል።
ምሳሌ 6፡ 0 ≤ sin² n ≤ 1 ስለሆነ 0 ≤ (sin² n)/2ⁿ ≤ (1/2)ⁿ ⟹ lim (sin² n)/2ⁿ = 0።

6.2.2 የታጠሩ እና ሞኖቶኒክ ሲክዌንሶች፡
ትርጓሜ፡ ለማንኛውም n |aₙ| ≤ M የሚያደርግ ቋሚ M ከተገኘ ሲክዌንሱ የታጠረ (Bounded) ይባላል።
ቴዎረም 2.6፡
ሀ) ሲክዌንስ ኮንቨርጅ ካደረገ የግድ የታጠረ (Bounded) ነው።
ለ) ሲክዌንሱ ያልታጠረ ከሆነ የግድ ዳይቨርጅ ያደርጋል።`,
    formulas: [
      { name: 'Squeeze Theorem for Sequences', formula: 'aₙ ≤ bₙ ≤ cₙ  and  lim aₙ = lim cₙ = L ⟹ lim bₙ = L', explanation: 'Bounds sandwiched sequence to the same limit.' }
    ]
  },
  {
    pdfPageNumber: 146,
    bookPageLabel: 'Page 146',
    chapterNumber: 6,
    sectionRef: '6.2.4',
    titleEn: 'Monotonic Sequence Theorem: Bounded & Monotone Implies Convergence',
    titleAm: 'የሞኖቶኒክ ሲክዌንስ ቴዎረም፡ የታጠረ እና ሞኖቶኒክ የሆነ ሲክዌንስ የግድ ኮንቨርጅ ያደርጋል',
    subtopicEn: 'Definition 6.7 (Increasing a_n ≤ a_n+1, Decreasing a_n ≥ a_n+1), Theorem 6.9 Monotone Convergence Theorem, Solved Example a_n = 1/(n+2)',
    subtopicAm: 'እያደገ እና እየቀነሰ የሚሄድ ሲክዌንስ፣ የቴዎረም 6.9 ማረጋገጫ እና የተሰራ ምሳሌ a_n = 1/(n+2)',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Note: Boundedness does not guarantee convergence: {(-1)ⁿ} is bounded but diverges!

Definition 6.7:
- A sequence {aₙ} is increasing if aₙ ≤ aₙ₊₁ for each n ≥ m.
- A sequence {aₙ} is decreasing if aₙ ≥ aₙ₊₁ for each n ≥ m.
- A sequence that is either increasing or decreasing is called monotonic.

Testing Monotonicity via Derivative:
Let f(x) be such that f(n) = aₙ. If f'(x) > 0 for x ≥ 1, {aₙ} is increasing. If f'(x) < 0, {aₙ} is decreasing.
Example: For aₙ = n / (n + 1), f(x) = x / (x + 1) ⟹ f'(x) = 1 / (x + 1)² > 0, so the sequence is increasing.

Theorem 6.9 (Monotone Convergence Theorem):
Every bounded monotonic sequence converges:
- If {aₙ} is increasing and bounded above, lim_{n⟶∞} aₙ = least upper bound.
- If {aₙ} is decreasing and bounded below, lim_{n⟶∞} aₙ = greatest lower bound.

Example 8: Show {1 / (n + 2)} converges.
Solution: aₙ₊₁ = 1/(n + 3) < 1/(n + 2) = aₙ (decreasing).
Also 0 < 1/(n + 2) ≤ 1/3 (bounded).
By Theorem 6.9, it converges (its limit is 0).`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ትርጓሜ 6.7፡
- aₙ ≤ aₙ₊₁ ከሆነ እያደገ የሚሄድ (Increasing) ሲክዌንስ ይባላል።
- aₙ ≥ aₙ₊₁ ከሆነ እየቀነሰ የሚሄድ (Decreasing) ሲክዌንስ ይባላል።
- ከሁለቱ አንዱ የሆነ ሲክዌንስ ሞኖቶኒክ (Monotonic) ይባላል።

ቴዎረም 6.9 (የሞኖቶኒክ ሲክዌንስ ቴዎረም)፡
ማንኛውም የታጠረ ሞኖቶኒክ ሲክዌንስ የግድ ኮንቨርጅ ያደርጋል!
ምሳሌ 8፡ aₙ = 1/(n+2) እየቀነሰ የሚሄድ እና በ 0 እና 1/3 መካከል የታጠረ ስለሆነ በቴዎረም 6.9 መሰረት ኮንቨርጅ ያደርጋል።`,
    formulas: [
      { name: 'Monotone Convergence Theorem', formula: '{aₙ} bounded and monotonic ⟹ {aₙ} converges', explanation: 'Core real analysis theorem guaranteeing convergence without knowing limit beforehand.' }
    ]
  },
  {
    pdfPageNumber: 147,
    bookPageLabel: 'Page 147',
    chapterNumber: 6,
    sectionRef: '6.3',
    titleEn: '6.3 Subsequences and Limit Points & Oscillating Sequences',
    titleAm: '6.3 ንዑስ ሲክዌንሶች (Subsequences) እና የሊሚት ነጥቦች (Limit Points)',
    subtopicEn: 'Definition 6.10 (Subsequence a_{n_k}), Theorem 6.11 (Subsequence Convergence to L), Definition 6.12 (Oscillation), Limit Points Definition',
    subtopicAm: 'የንዑስ ሲክዌንስ ትርጓሜ፣ ንዑስ ሲክዌንሶች ወደ ዋናው ሊሚት L ማምራታቸው፣ የወላዋይ ሲክዌንስ ትርጓሜ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
6.3 Subsequences and Limit Points
Definition 6.10: Let {aₙ} be a sequence and let {nₖ} be a strictly increasing sequence of positive integers (n₁ < n₂ < n₃ < ...). Then {a_{n_k}} is called a subsequence of {aₙ}.

Example 1: In {1/n}, choosing nₖ = 2k gives the even subsequence {1/(2k)} = {1/2, 1/4, 1/6, ...}.
Choosing nₖ = 2k - 1 gives the odd subsequence {1/(2k - 1)} = {1, 1/3, 1/5, ...}.

Theorem 6.11: If {aₙ} converges to L, then every subsequence {a_{n_k}} of {aₙ} also converges to L.

Definition 6.12: If a sequence {aₙ} diverges but does not diverge to +∞ or -∞, it is said to oscillate.
Example: {(-1)ⁿ} oscillates between -1 and 1.

Definition 6.13: A number L is called a limit point of {aₙ} if and only if there is a subsequence of {aₙ} that converges to L.
Example: For {(-1)ⁿ}, the even subsequence {(-1)²ⁿ} = {1} converges to 1, and the odd subsequence {(-1)²ⁿ⁻¹} = {-1} converges to -1.
Hence the limit points of {(-1)ⁿ} are 1 and -1.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
6.3 ንዑስ ሲክዌንሶች እና የሊሚት ነጥቦች
ትርጓሜ 6.10፡ n₁ < n₂ < n₃ < ... ሙሉ ቁጥሮች ቢሆኑ {a_{n_k}} የ {aₙ} ንዑስ ሲክዌንስ (Subsequence) ይባላል።
ቴዎረም 6.11፡ {aₙ} ወደ L ኮንቨርጅ ካደረገ ማንኛውም ንዑስ ሲክዌንሱም ወደ L ኮንቨርጅ ያደርጋል።

ትርጓሜ 6.12፡ ሲክዌንስ ዳይቨርጅ እያደረገ ወደ +∞ ወይም -∞ የማይሄድ ከሆነ ወላዋይ (Oscillating) ይባላል።
ትርጓሜ 6.13፡ የአንድ ሲክዌንስ ንዑስ ሲክዌንስ ወደ L የሚያመራ ከሆነ L የሲክዌንሱ ሊሚት ፖይንት (Limit Point) ይባላል።
ምሳሌ፡ የ {(-1)ⁿ} ሊሚት ፖይንቶች 1 እና -1 ናቸው።`,
    formulas: [
      { name: 'Subsequence Convergence', formula: 'lim aₙ = L ⟹ lim a_{n_k} = L', explanation: 'All subsequences of a convergent sequence share the parent limit.' }
    ]
  },
  {
    pdfPageNumber: 148,
    bookPageLabel: 'Page 148',
    chapterNumber: 6,
    sectionRef: '6.3.1',
    titleEn: 'Worksheet VI: Sequences, Convergence Limits & Monotonicity',
    titleAm: 'የስራ ሉህ 6፡ ሲክዌንሶች፣ የኮንቨርጀንስ ሊሚቶች እና ሞኖቶኒሲቲ',
    subtopicEn: 'Worksheet VI Problems 1-3: First Four Terms, Convergence of Radical Differences √(n²+n)-n, Rational and Factorial Sequences',
    subtopicAm: 'የስራ ሉህ 6 ጥያቄ 1 እስከ 3፡ የመጀመሪያ 4 ተርሞች፣ የራዲካል ልዩነት ሊሚት √(n²+n)-n፣ ፋክቶሪያል ሲክዌንሶች',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
MATH 231 WORKSHEET VI (Part 1)

1. Write the first four terms and determine convergence:
a. {sinh n}: sinh 1, sinh 2, sinh 3, sinh 4. Since sinh n = (eⁿ - e⁻ⁿ)/2 ⟶ ∞, diverges.
b. {√(n² + n) - n}:
Multiply by conjugate: (n² + n - n²) / (√(n² + n) + n) = n / (√(n² + n) + n) = 1 / (√(1 + 1/n) + 1).
As n ⟶ ∞, limit = 1 / (1 + 1) = 1/2. Converges to 1/2!
c. {n / cⁿ}, c > 1: By L'Hôpital's rule on x/cˣ, limit = 1 / (cˣ ln c) = 0. Converges to 0.

2. Find lim_{n⟶∞} aₙ:
a. aₙ = (1 + 3/n)ⁿ: Classical limit e³!
b. aₙ = ³√(n + 2) - ³√(n + 1): Conjugate expansion gives limit = 0.
c. aₙ = ((n² - 1)/n)ⁿ = nⁿ (1 - 1/n²)ⁿ ⟶ ∞. Diverges.
d. aₙ = (n / (n + 1)) · sin(nπ/2): Since sin(nπ/2) oscillates (1, 0, -1, 0), limit does not exist.
e. aₙ = tanh n: lim_{n⟶∞} (eⁿ - e⁻ⁿ)/(eⁿ + e⁻ⁿ) = 1.
f. aₙ = n²(n!) / (n + 2)! = n² / ((n + 1)(n + 2)) ⟶ 1.

3. Monotonicity & Convergence:
a. {3ⁿ / (2 + 3ⁿ)}: Strictly increasing, bounded above by 1, converges to 1.
b. {n! / nⁿ}: Strictly decreasing, converges to 0.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
የስራ ሉህ 6 (ክፍል 1)
1. የመጀመሪያ አራት ተርሞች እና ኮንቨርጀንስ፡
ሀ) {sinh n} ⟹ ዳይቨርጅ ያደርጋል ወደ ∞
ለ) {√(n² + n) - n} ⟹ በኮንጁጌት ሲባዛ n/(√(n²+n)+n) = 1/2 ላይ ኮንቨርጅ ያደርጋል!
ሐ) {n/cⁿ}, c > 1 ⟹ ወደ 0 ኮንቨርጅ ያደርጋል።

2. ሊሚቶች፡
ሀ) lim (1 + 3/n)ⁿ = e³
ለ) lim [³√(n+2) - ³√(n+1)] = 0
ሐ) lim [(n²-1)/n]ⁿ = ∞
መ) aₙ = [n/(n+1)] sin(nπ/2) ⟹ በወላዋይነቱ ምክንያት ሊሚት የለውም
ሠ) lim tanh n = 1
ረ) lim [n² n! / (n+2)!] = lim [n² / (n²+3n+2)] = 1`,
    formulas: [
      { name: 'Euler Power Limit Formula', formula: 'lim_{n⟶∞} (1 + x/n)ⁿ = eˣ', explanation: 'Continuous compound interest / exponential definition.' }
    ]
  },
  {
    pdfPageNumber: 149,
    bookPageLabel: 'Page 149',
    chapterNumber: 6,
    sectionRef: '6.3.2',
    titleEn: 'Worksheet VI (Cont.): Recursive Sequences & Squeeze Approximations',
    titleAm: 'የስራ ሉህ 6 (የቀጠለ)፡ ሪከርሲቭ ሲክዌንሶች እና የስኩዊዝ ግምገማዎች',
    subtopicEn: 'Worksheet VI Problems 4-10: Convergence of a_{n+1} = √(2 + a_n), Telescoping Sequences, Limit Points of {sin(nπ/4)}',
    subtopicAm: 'የስራ ሉህ 6 ጥያቄ 4 እስከ 10፡ ሪከርሲቭ ሲክዌንስ a_{n+1} = √(2 + a_n) ⟹ 2፣ የ {sin(nπ/4)} ሊሚት ነጥቦች',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
MATH 231 WORKSHEET VI (Part 2)

6. Let a₁ = √2 and aₙ₊₁ = √(2 + aₙ) for n ≥ 1.
a. Show {aₙ} is convergent:
- Monotonicity: a₁ = √2 ≈ 1.414, a₂ = √(2 + √2) ≈ 1.848. By induction, aₙ < aₙ₊₁ (increasing).
- Boundedness: Assume aₙ < 2. Then aₙ₊₁ = √(2 + aₙ) < √(2 + 2) = 2. Thus bounded above by 2!
By Theorem 6.9, {aₙ} converges to some limit L.
b. Find lim_{n⟶∞} aₙ:
Take limit on both sides of aₙ₊₁ = √(2 + aₙ):
L = √(2 + L) ⟹ L² = 2 + L ⟹ L² - L - 2 = 0 ⟹ (L - 2)(L + 1) = 0.
Since aₙ > 0, L = 2.

7. Telescoping Sequence:
aₙ = 1/(1·2) + 1/(2·3) + ... + 1/(n(n + 1)) = (1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n+1)) = 1 - 1/(n + 1).
lim_{n⟶∞} aₙ = lim (1 - 1/(n + 1)) = 1.

8. Bounded Product Rule (lim aₙ = 0 and {bₙ} bounded ⟹ lim aₙ bₙ = 0):
i. {(cos n)/n}: |cos n| ≤ 1 (bounded), 1/n ⟶ 0 ⟹ limit = 0.

10. Limit Points of {sin(nπ/4)}:
Values repeat every 8 terms: √2/2, 1, √2/2, 0, -√2/2, -1, -√2/2, 0.
Limit points are {0, 1, -1, √2/2, -√2/2}.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
የስራ ሉህ 6 (ክፍል 2)
6. ሪከርሲቭ ሲክዌንስ a₁ = √2፣ aₙ₊₁ = √(2 + aₙ)፡
ሀ) እያደገ የሚሄድ እና በ 2 የታጠረ በመሆኑ በሞኖቶኒክ ቴዎረም ኮንቨርጅ ያደርጋል።
ለ) L = √(2 + L) ⟹ L² - L - 2 = 0 ⟹ L = 2!

7. ቴሌስኮፒክ ሲክዌንስ፡
aₙ = ∑ 1/(k(k+1)) = 1 - 1/(n+1) ⟹ lim aₙ = 1

8. lim aₙ = 0 እና bₙ የታጠረ ከሆነ lim (aₙ bₙ) = 0፡
i) lim (cos n / n) = 0

10. የ {sin(nπ/4)} ሊሚት ነጥቦች፡ {0, 1, -1, √2/2, -√2/2}`,
    formulas: [
      { name: 'Recursive Fixed Point Limit', formula: 'aₙ₊₁ = f(aₙ) ⟹ L = f(L)', explanation: 'Algebraic limit equation for continuous recurrence relations.' }
    ]
  },
  {
    pdfPageNumber: 150,
    bookPageLabel: 'Page 150',
    chapterNumber: 6,
    sectionRef: '6.4',
    titleEn: '6.4 Real Series: Partial Sums S_n & Infinite Series Definition',
    titleAm: '6.4 እውነተኛ ሲሪሶች (Real Series)፡ የክፍል ድምሮች S_n እና የኢንፊኒት ሲሪስ ምንነት',
    subtopicEn: 'Definition 6.14 Infinite Series ∑ a_n, Definition 6.15 Partial Sum S_k, Definition 6.16 Convergence of Series via lim S_n = L',
    subtopicAm: 'የሲሪስ ትርጓሜ ∑ a_n፣ የክፍል ድምር S_k፣ የሲሪስ ኮንቨርጀንስ ትርጓሜ በ lim S_n = L አማካኝነት',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
6.4 Real Series
6.4.1 Definition and Notations of Infinite Series
We may use sequences to define expressions of the form:
1/2 + 1/4 + 1/8 + 1/16 + ...
We call such an expression an infinite series. Since only finite sums may be added algebraically, we must define what is meant by this "infinite sum." The key is to consider the sequence of partial sums {Sₙ}:
S₁ = 1/2
S₂ = 1/2 + 1/4 = 3/4
S₃ = 1/2 + 1/4 + 1/8 = 7/8
Sₙ = 1 - (1/2)ⁿ.
As n ⟶ ∞, Sₙ ⟶ 1. Thus 1/2 + 1/4 + 1/8 + ... = 1.

Definition 6.14: An infinite series (or simply a series) is an expression of the form:
a₁ + a₂ + a₃ + ... + aₙ + ... = ∑_{n=1}^∞ aₙ
Each number aₖ is a term of the series, and aₙ is the nth term.

Definition 6.15:
i) The kth partial sum Sₖ of the series is Sₖ = a₁ + a₂ + ... + aₖ.
ii) The sequence of partial sums is S₁, S₂, S₃, ..., Sₙ, ...

Definition 6.16: A series ∑ aₙ is convergent (or converges) if its sequence of partial sums {Sₙ} converges to some real number L:
lim_{n⟶∞} Sₙ = L.
The number L is called the sum of the series, written ∑_{n=1}^∞ aₙ = L.
Otherwise the series is called divergent (or diverges).`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
6.4 እውነተኛ ሲሪሶች (Real Series)
6.4.1 የኢንፊኒት ሲሪስ ትርጓሜ
1/2 + 1/4 + 1/8 + ... የመሳሰሉ ያልተገደቡ ድምሮች ኢንፊኒት ሲሪስ ይባላሉ።
ይህንን ለመረዳት የከፊል ድምር (Partial sum) ሲክዌንስ {Sₙ} እንጠቀማለን፡
S₁ = 1/2, S₂ = 3/4, S₃ = 7/8, ..., Sₙ = 1 - (1/2)ⁿ ⟹ lim Sₙ = 1!

ትርጓሜ 6.14፡ a₁ + a₂ + ... + aₙ + ... = ∑_{n=1}^∞ aₙ ኢንፊኒት ሲሪስ ይባላል።
ትርጓሜ 6.15፡ የ kኛ ከፊል ድምር Sₖ = a₁ + ... + aₖ ነው።
ትርጓሜ 6.16፡ የከፊል ድምሮች ሲክዌንስ {Sₙ} ወደ L ኮንቨርጅ ካደረገ (lim Sₙ = L) ሲሪሱ ኮንቨርጀንት ይባላል፣ ድምሩም L ነው። አለበለዚያ ዳይቨርጀንት ይባላል።`,
    formulas: [
      { name: 'Series Sum via Partial Sums', formula: '∑_{n=1}^∞ aₙ = lim_{n⟶∞} Sₙ = lim_{n⟶∞} ∑_{k=1}^n aₖ', explanation: 'Analytic foundation connecting infinite additions to sequence limits.' }
    ]
  },
  {
    pdfPageNumber: 151,
    bookPageLabel: 'Page 151',
    chapterNumber: 6,
    sectionRef: '6.4.1',
    titleEn: 'Telescopic Series Analysis & The Oscillating Series ∑(-1)ⁿ⁻¹',
    titleAm: 'ቴሌስኮፒክ ሲሪስ እና የወላዋይ ሲሪስ ∑(-1)ⁿ⁻¹ ዳይቨርጀንስ',
    subtopicEn: 'Telescoping Cancellation ∑ 1/(n(n+1)) = 1, Grandi-Type Oscillating Series S_n = 1 or 0, Divergence Proof',
    subtopicAm: 'የቴሌስኮፒክ ሲሪስ መፋቅ እና ድምር = 1፣ የወላዋይ ሲሪስ ከፊል ድምሮች መወዛወዝ እና ዳይቨርጀንስ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Example 1: Show that the series ∑_{n=1}^∞ 1 / (n(n + 1)) converges and find its sum.
Solution:
Using partial fractions:
aₙ = 1 / (n(n + 1)) = 1/n - 1/(n + 1).
The jth partial sum Sⱼ is:
Sⱼ = (1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + ... + (1/j - 1/(j + 1)).
Notice that adjacent intermediate terms cancel out (telescoping):
Sⱼ = 1 - 1/(j + 1).
Now take the limit of partial sums:
lim_{j⟶∞} Sⱼ = lim_{j⟶∞} [1 - 1/(j + 1)] = 1 - 0 = 1.
Thus the series converges and its sum is exactly 1.
(Such a series where intermediate terms collapse is called a telescopic series).

Example 2: Show that the series ∑_{n=1}^∞ (-1)ⁿ⁻¹ = 1 - 1 + 1 - 1 + 1 - ... diverges.
Solution:
S₁ = 1
S₂ = 1 - 1 = 0
S₃ = 1 - 1 + 1 = 1
S₄ = 0
In general: Sₙ = 1 if n is odd, and Sₙ = 0 if n is even.
The sequence of partial sums {Sₙ} oscillates between 1 and 0, so lim_{n⟶∞} Sₙ does not exist.
Hence the series diverges.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምሳሌ 1 (ቴሌስኮፒክ ሲሪስ)፡
∑_{n=1}^∞ 1/(n(n+1)) ኮንቨርጅ እንደሚያደርግ ማሳየትና ድምሩን መፈለግ፡
aₙ = 1/n - 1/(n+1)
Sⱼ = (1 - 1/2) + (1/2 - 1/3) + ... + (1/j - 1/(j+1)) = 1 - 1/(j+1)
lim_{j⟶∞} Sⱼ = lim (1 - 1/(j+1)) = 1!
ስለዚህ የቴሌስኮፒክ ሲሪሱ ድምር 1 ነው።

ምሳሌ 2፡ ∑ (-1)ⁿ⁻¹ = 1 - 1 + 1 - 1 + ...
Sₙ = 1 (n ጎዶሎ ሲሆን)፤ Sₙ = 0 (n ሙሉ ሲሆን)
ከፊል ድምሮቹ በ 1 እና 0 መካከል ስለሚወዛወዙ ሊሚት የለውም፣ ስለዚህ ሲሪሱ ዳይቨርጅ ያደርጋል።`,
    formulas: [
      { name: 'Telescopic Series Sum', formula: '∑_{n=1}^∞ [bₙ - bₙ₊₁] = b₁ - lim_{n⟶∞} bₙ₊₁', explanation: 'Cancellation identity for telescoping partial sums.' }
    ]
  },
  {
    pdfPageNumber: 152,
    bookPageLabel: 'Page 152',
    chapterNumber: 6,
    sectionRef: '6.4.2',
    titleEn: 'Harmonic Series Divergence & The nth-Term Divergence Test',
    titleAm: 'የሃርሞኒክ ሲሪስ ዳይቨርጀንስ እና የ nኛ ተርም የዳይቨርጀንስ መፈተሻ',
    subtopicEn: 'Proof of Divergence of Harmonic Series ∑ 1/n by Oresme Grouping, Theorem 6.18 Divergence Test (lim a_n ≠ 0 ⟹ Divergence)',
    subtopicAm: 'የሃርሞኒክ ሲሪስ ∑ 1/n ዳይቨርጀንስ ማረጋገጫ በቡድን ክፍፍል፣ ቴዎረም 6.18 የዳይቨርጀንስ ቴስት (lim a_n ≠ 0 ከሆነ ዳይቨርጅ ያደርጋል)',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Example 4: Show that the harmonic series ∑_{n=1}^∞ (1/n) = 1 + 1/2 + 1/3 + 1/4 + ... diverges.
Proof (Oresme's Grouping Method):
Group terms in powers of 2:
1 + 1/2 + (1/3 + 1/4) + (1/5 + 1/6 + 1/7 + 1/8) + (1/9 + ... + 1/16) + ...
Observe:
1/3 + 1/4 > 1/4 + 1/4 = 1/2
1/5 + 1/6 + 1/7 + 1/8 > 4 · (1/8) = 1/2
1/9 + ... + 1/16 > 8 · (1/16) = 1/2.
In general, S_{2ʲ} ≥ 1 + j · (1/2).
As j ⟶ ∞, S_{2ʲ} ⟶ ∞.
The sequence of partial sums is unbounded, therefore the harmonic series ∑_{n=1}^∞ (1/n) diverges!

6.4.2 Divergence Test (nth-Term Test)
Theorem 6.18:
a. If ∑_{n=1}^∞ aₙ converges, then lim_{n⟶∞} aₙ = 0.
b. (The Divergence Test): If lim_{n⟶∞} aₙ does not exist, or if lim_{n⟶∞} aₙ ≠ 0, then the series ∑_{n=1}^∞ aₙ diverges.

CRITICAL WARNING:
The converse of (a) is FALSE!
lim_{n⟶∞} aₙ = 0 does NOT imply convergence.
Counterexample: For the harmonic series, aₙ = 1/n ⟶ 0, yet ∑ (1/n) diverges!`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምሳሌ 4 (የሃርሞኒክ ሲሪስ ዳይቨርጀንስ)፡
∑ 1/n = 1 + 1/2 + (1/3+1/4) + (1/5+1/6+1/7+1/8) + ...
1/3 + 1/4 > 1/2፤ 1/5+...+1/8 > 1/2 ...
S_{2ʲ} ≥ 1 + j(1/2) ⟶ ∞
የከፊል ድምሮቹ ያለገደብ ስለሚያድጉ የሃርሞኒክ ሲሪስ ዳይቨርጅ ያደርጋል!

6.4.2 የ nኛ ተርም የዳይቨርጀንስ ቴስት (Divergence Test)፡
ቴዎረም 6.18፡
ሀ) ∑ aₙ ኮንቨርጅ ካደረገ የግድ lim_{n⟶∞} aₙ = 0 ነው።
ለ) lim_{n⟶∞} aₙ ≠ 0 ከሆነ (ወይም ሊሚቱ ከሌለ) ሲሪሱ የግድ ዳይቨርጅ ያደርጋል!
ማስጠንቀቂያ፡ lim aₙ = 0 መሆኑ ብቻውን ሲሪሱ ኮንቨርጅ እንደሚያደርግ አያረጋግጥም (ለምሳሌ በሃርሞኒክ ሲሪስ 1/n ⟶ 0 ቢሆንም ሲሪሱ ዳይቨርጅ ያደርጋል)።`,
    formulas: [
      { name: 'Divergence Test', formula: 'lim_{n⟶∞} aₙ ≠ 0 ⟹ ∑ aₙ  diverges', explanation: 'Necessary condition for convergence stated in contrapositive form.' }
    ]
  },
  {
    pdfPageNumber: 153,
    bookPageLabel: 'Page 153',
    chapterNumber: 6,
    sectionRef: '6.4.3',
    titleEn: 'Summary Table of nth-Term Tests & Geometric Series Theorem',
    titleAm: 'የ nኛ ተርም ቴስት ሰንጠረዥ እና የጂኦሜትሪክ ሲሪስ ቴዎረም',
    subtopicEn: 'Table of nth-Term Test Applications, Theorem 6.19 Geometric Series ∑ c rⁿ = c rᵐ / (1 - r), Proof for |r| < 1 vs |r| ≥ 1',
    subtopicAm: 'የ nኛ ተርም ውጤቶች ሰንጠረዥ፣ ቴዎረም 6.19 የጂኦሜትሪክ ሲሪስ ድምር ቀመር እና ማረጋገጫ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Table of nth-Term Test Applications:
| Series | nth-Term Test | Conclusion |
| :--- | :--- | :--- |
| ∑_{n=1}^∞ (1 + 1/n) | lim (1 + 1/n) = 1 ≠ 0 | Diverges by Divergence Test |
| ∑_{n=1}^∞ (1/n²) | lim (1/n²) = 0 | Inconclusive (requires further test) |
| ∑_{n=1}^∞ (1/n) | lim (1/n) = 0 | Inconclusive (Harmonic diverges) |
| ∑_{n=1}^∞ (2ⁿ / n) | lim (2ⁿ / n) = ∞ ≠ 0 | Diverges by Divergence Test |

Theorem 6.19 (The Geometric Series Theorem):
Let r be any number, and let c ≠ 0 and m ≥ 0. Then the geometric series:
∑_{n=m}^∞ c rⁿ = c rᵐ + c rᵐ⁺¹ + c rᵐ⁺² + ...
converges if and only if |r| < 1.
In that case, its sum is given by:
S = (first term) / (1 - r) = (c rᵐ) / (1 - r).
If |r| ≥ 1, the geometric series diverges.

Proof:
The partial sum Sⱼ = c rᵐ (1 - rʲ) / (1 - r).
If |r| < 1, lim_{j⟶∞} rʲ = 0, so lim Sⱼ = c rᵐ / (1 - r).
If |r| ≥ 1, lim_{n⟶∞} c rⁿ ≠ 0, so the series diverges by Theorem 6.18.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
የ nኛ ተርም መፈተሻ ሰንጠረዥ፡
- ∑ (1 + 1/n) ⟹ lim = 1 ≠ 0 ⟹ ዳይቨርጅ ያደርጋል
- ∑ (1/n²) ⟹ lim = 0 ⟹ ተጨማሪ ምርመራ ያስፈልገዋል
- ∑ (2ⁿ/n) ⟹ lim = ∞ ⟹ ዳይቨርጅ ያደርጋል

ቴዎረም 6.19 (የጂኦሜትሪክ ሲሪስ ቴዎረም)፡
c ≠ 0 ሲሆን ∑_{n=m}^∞ c rⁿ ኮንቨርጅ የሚያደርገው |r| < 1 ሲሆን ብቻ ነው!
ድምሩም፡
S = (የመጀመሪያው ተርም) / (1 - r) = (c rᵐ) / (1 - r)
|r| ≥ 1 ከሆነ የጂኦሜትሪክ ሲሪሱ ዳይቨርጅ ያደርጋል።`,
    formulas: [
      { name: 'Geometric Series Sum Formula', formula: '∑_{n=m}^∞ c rⁿ = [c rᵐ] / (1 - r),  |r| < 1', explanation: 'Closed-form sum of infinite geometric progression.' }
    ]
  },
  {
    pdfPageNumber: 154,
    bookPageLabel: 'Page 154',
    chapterNumber: 6,
    sectionRef: '6.4.4',
    titleEn: 'Geometric Series Examples & Linear Combinations of Convergent Series',
    titleAm: 'የተሰሩ የጂኦሜትሪክ ሲሪስ ምሳሌዎች እና የኮንቨርጀንት ሲሪሶች ሊኒየር ውህደት',
    subtopicEn: 'Evaluations of ∑(1/2)ⁿ = 2, ∑(-1)ⁿ 3ⁿ⁺³ / 5ⁿ⁻¹, Theorem 6.20 Linearity of Convergent Series (∑(a_n ± b_n) = ∑a_n ± ∑b_n)',
    subtopicAm: 'የ ∑(1/2)ⁿ = 2 ስሌት፣ የ ቴዎረም 6.20 ሊኒያሪቲ ህጎች (ድምር፣ ልዩነት፣ ስካላር ብዜት)',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Example 5: Show that ∑_{n=0}^∞ (1/2)ⁿ = 2.
Solution: First term a = (1/2)⁰ = 1. Common ratio r = 1/2.
Since |r| = 1/2 < 1, the series converges and:
S = 1 / (1 - 1/2) = 1 / (1/2) = 2.

Example 6: Determine whether ∑_{n=0}^∞ (-1)ⁿ · 3ⁿ⁺³ / 5ⁿ⁻¹ converges, and if so find its sum.
Solution:
Rewrite the general term:
(-1)ⁿ · (3³ · 3ⁿ) / (5⁻¹ · 5ⁿ) = 27 · 5 · (-3/5)ⁿ = 135 · (-3/5)ⁿ.
This is a geometric series with c = 135 and r = -3/5.
Since |r| = 3/5 < 1, it converges!
Sum = 135 / (1 - (-3/5)) = 135 / (8/5) = 675/8.

Theorem 6.20 (Combinations of Series):
If ∑ aₙ and ∑ bₙ are convergent series, then:
i. ∑ (aₙ + bₙ) converges and ∑ (aₙ + bₙ) = ∑ aₙ + ∑ bₙ
ii. ∑ (c · aₙ) converges and ∑ (c · aₙ) = c ∑ aₙ
iii. ∑ (aₙ - bₙ) converges and ∑ (aₙ - bₙ) = ∑ aₙ - ∑ bₙ.

Example 7: Find sum of ∑_{n=1}^∞ [8/3ⁿ + 6/(n(n + 1))].
= ∑ 8(1/3)ⁿ + 6 ∑ 1/(n(n + 1)) = (8/3)/(1 - 1/3) + 6(1) = 4 + 6 = 10.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምሳሌ 5፡ ∑_{n=0}^∞ (1/2)ⁿ = 1 / (1 - 1/2) = 2
ምሳሌ 6፡ ∑ (-1)ⁿ 3ⁿ⁺³ / 5ⁿ⁻¹ = ∑ 135 (-3/5)ⁿ ⟹ r = -3/5 (|r| < 1) ⟹ ድምር = 135/(1 + 3/5) = 675/8።

ቴዎረም 6.20 (የሲሪሶች ውህደት ህግ)፡
∑ aₙ እና ∑ bₙ ኮንቨርጀንት ከሆኑ፡
1. ∑ (aₙ ± bₙ) = ∑ aₙ ± ∑ bₙ
2. ∑ (c aₙ) = c ∑ aₙ

ምሳሌ 7፡ ∑ [8/3ⁿ + 6/(n(n+1))] = 4 + 6 = 10`,
    formulas: [
      { name: 'Linearity of Convergent Series', formula: '∑ (α aₙ + β bₙ) = α ∑ aₙ + β ∑ bₙ', explanation: 'Distributive and associative combination laws for convergent infinite sums.' }
    ]
  },
  {
    pdfPageNumber: 155,
    bookPageLabel: 'Page 155',
    chapterNumber: 6,
    sectionRef: '6.5',
    titleEn: '6.5 Convergence Tests for Nonnegative Series: 6.5.1 The Integral Test',
    titleAm: '6.5 አወንታዊ ተርሞች ላሉት ሲሪሶች የመፈተሻ ዘዴዎች፡ 6.5.1 የኢንተግራል ቴስት',
    subtopicEn: 'Monotone Sequence of Partial Sums, Theorem 6.21 The Integral Test (f(n) = a_n, f continuous, positive, decreasing)',
    subtopicAm: 'የከፊል ድምሮች መጨመር፣ ቴዎረም 6.21 የኢንተግራል ቴስት (f ቀጣይ፣ አወንታዊ እና እየቀነሰ የሚሄድ ሲሆን)',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
6.5 Convergence Tests for Nonnegative Terms Series
In this section we develop tests for convergence or divergence of a series ∑ aₙ where aₙ ≥ 0.
Key property: For nonnegative series, the sequence of partial sums {Sⱼ} is increasing:
S₁ ≤ S₂ ≤ S₃ ≤ ... ≤ Sⱼ ≤ Sⱼ₊₁ ...
Therefore, {Sⱼ} converges if and only if it is bounded above!

6.5.1 The Integral Test
Theorem 6.21 (The Integral Test):
Let {aₙ}₁^∞ be a sequence of positive terms, and let f be a continuous, positive, decreasing function on [1, ∞) such that f(n) = aₙ for all n ≥ 1.
Then the series ∑_{n=1}^∞ aₙ converges if and only if the improper integral ∫₁^∞ f(x) dx converges:
- If ∫₁^∞ f(x) dx converges, then ∑ aₙ converges.
- If ∫₁^∞ f(x) dx diverges, then ∑ aₙ diverges.

Geometric Justification:
The area of inscribed rectangles under f(x) is ∑_{n=2}^∞ aₙ ≤ ∫₁^∞ f(x) dx ≤ ∑_{n=1}^∞ aₙ.
Hence the infinite sum and the improper integral share the exact same convergence or divergence fate.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
6.5 አወንታዊ ተርሞች ላሏቸው ሲሪሶች መፈተሻዎች
ተርሞቹ aₙ ≥ 0 ሲሆኑ የከፊል ድምሮቹ Sₙ እያደጉ ይሄዳሉ (Increasing)። ስለዚህ ሲሪሱ ኮንቨርጅ የሚያደርገው ከላይ ከታጠረ (Bounded above) ብቻ ነው!

6.5.1 የኢንተግራል ቴስት (The Integral Test)
ቴዎረም 6.21፡
f በ [1, ∞) ላይ ቀጣይ፣ አወንታዊ እና እየቀነሰ የሚሄድ (Decreasing) ሆኖ f(n) = aₙ ቢሆን፡
∑_{n=1}^∞ aₙ እና ∫₁^∞ f(x) dx አንድ አይነት ባህሪ አላቸው (ወይ ሁለቱም ኮንቨርጅ ያደርጋሉ፣ ወይም ሁለቱም ዳይቨርጅ ያደርጋሉ)።`,
    formulas: [
      { name: 'The Integral Test', formula: '∑_{n=1}^∞ aₙ  converges  ⟺  ∫₁^∞ f(x) dx  converges', explanation: 'Equivalence between improper integral and discrete infinite sum.' }
    ]
  },
  {
    pdfPageNumber: 156,
    bookPageLabel: 'Page 156',
    chapterNumber: 6,
    sectionRef: '6.5.1',
    titleEn: 'Integral Test Solved Examples & The p-Series Theorem (p > 1)',
    titleAm: 'በኢንተግራል ቴስት የተሰሩ ምሳሌዎች እና የ p-ሲሪስ ቴዎረም (p > 1)',
    subtopicEn: 'Integral Test on Harmonic Series ∫ (1/x) dx = ∞, Integral Test on ∑ n e^(-n²), Definition 6.22 p-Series, Proof that ∑ 1/nᵖ Converges iff p > 1',
    subtopicAm: 'የሃርሞኒክ ሲሪስ በኢንተግራል ቴስት መፈተሽ፣ የ p-ሲሪስ ትርጓሜ እና p > 1 ሲሆን ኮንቨርጅ እንደሚያደርግ ማረጋገጥ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Example 1: Use the integral test to test the harmonic series ∑_{n=1}^∞ (1/n).
Solution: f(x) = 1/x is continuous, positive, decreasing on [1, ∞).
∫₁^∞ (1/x) dx = lim_{t⟶∞} [ln x]₁ᵗ = lim_{t⟶∞} ln t = ∞.
Since the integral diverges, the harmonic series diverges.

Example 2: Test ∑_{n=1}^∞ n e^(-n²).
Solution: f(x) = x e^(-x²), f'(x) = e^(-x²)(1 - 2x²) < 0 for x ≥ 1 (decreasing).
∫₁^∞ x e^(-x²) dx = lim_{t⟶∞} [- (1/2) e^(-x²)]₁ᵗ = 0 - (-1/(2e)) = 1/(2e).
Since the integral converges, the series converges!

Definition 6.22 (The p-Series / Hyperharmonic Series):
A series of the form:
∑_{n=1}^∞ (1 / nᵖ) = 1 + 1/2ᵖ + 1/3ᵖ + 1/4ᵖ + ...
where p is a positive real number.

Example 3: Show that ∑_{n=1}^∞ (1/nᵖ) converges if and only if p > 1.
Proof:
Evaluate ∫₁^∞ (1 / xᵖ) dx:
- If p = 1: ∫₁^∞ (1/x) dx = ∞ (diverges).
- If p ≠ 1: ∫₁ᵗ x⁻ᵖ dx = [x^(1-p) / (1 - p)]₁ᵗ = [t^(1-p) - 1] / (1 - p).
As t ⟶ ∞, t^(1-p) ⟶ 0 if 1 - p < 0 (i.e. p > 1).
Thus the integral converges to 1/(p - 1) if p > 1, and diverges if p ≤ 1.
Conclusion: The p-series converges if p > 1 and diverges if p ≤ 1!`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምሳሌ 1፡ ∫₁^∞ (1/x) dx = [ln x]₁^∞ = ∞ ⟹ ሃርሞኒክ ሲሪስ ዳይቨርጅ ያደርጋል!
ምሳሌ 2፡ ∫₁^∞ x e^(-x²) dx = 1/(2e) ⟹ ∑ n e^(-n²) ኮንቨርጅ ያደርጋል!

ትርጓሜ 6.22 (የ p-ሲሪስ ትርጓሜ)፡
∑_{n=1}^∞ (1/nᵖ) = 1 + 1/2ᵖ + 1/3ᵖ + ...

የ p-ሲሪስ ቴዎረም፡
- p > 1 ከሆነ ሲሪሱ ኮንቨርጅ ያደርጋል!
- p ≤ 1 ከሆነ ሲሪሱ ዳይቨርጅ ያደርጋል!
ምሳሌ፡
- ∑ 1/n³ ⟹ p = 3 > 1 ⟹ ኮንቨርጅ ያደርጋል
- ∑ 1/√n ⟹ p = 1/2 ≤ 1 ⟹ ዳይቨርጅ ያደርጋል`,
    formulas: [
      { name: 'p-Series Convergence Criterion', formula: '∑_{n=1}^∞ (1 / nᵖ)  converges  ⟺  p > 1', explanation: 'One of the most frequently used reference benchmarks in convergence testing.' }
    ]
  },
  {
    pdfPageNumber: 157,
    bookPageLabel: 'Page 157',
    chapterNumber: 6,
    sectionRef: '6.5.2',
    titleEn: '6.5.2 The Direct Comparison Test (DCT) for Nonnegative Series',
    titleAm: '6.5.2 የቀጥታ ማነጻጸሪያ ቴስት (Direct Comparison Test - DCT)',
    subtopicEn: 'Theorem 6.23 Direct Comparison Test (a_n ≤ b_n for Convergence, a_n ≥ b_n for Divergence), Solved Examples with 1/(3+4ⁿ) and 1/(√n - 1)',
    subtopicAm: 'ቴዎረም 6.23 የማነጻጸሪያ ህጎች (ከትልቁ በታች የሆነ ኮንቨርጅ ያደርጋል፣ ከትንሹ በላይ የሆነ ዳይቨርጅ ያደርጋል)',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
6.5.2 Basic Comparison Tests
Theorem 6.23 (The Comparison Test):
Let ∑ aₙ and ∑ bₙ be series with positive terms (aₙ > 0, bₙ > 0):
i. If ∑ bₙ converges and aₙ ≤ bₙ for all n, then ∑ aₙ also converges.
ii. If ∑ bₙ diverges and aₙ ≥ bₙ for all n, then ∑ aₙ also diverges.

Mnemonic Strategy:
- To show convergence: find a larger series that converges.
- To show divergence: find a smaller series that diverges.

Example 4: Show that ∑_{n=1}^∞ 1 / (3 + 4ⁿ) converges.
Solution:
For all n ≥ 1, 3 + 4ⁿ > 4ⁿ ⟹ 1 / (3 + 4ⁿ) < 1 / 4ⁿ.
The series ∑ (1/4)ⁿ is a convergent geometric series with r = 1/4 < 1.
By the Comparison Test, ∑ 1/(3 + 4ⁿ) converges.

Example 5:
(a) ∑_{n=2}^∞ 1 / (√n - 1):
For all n ≥ 2, √n - 1 < √n ⟹ 1 / (√n - 1) > 1 / √n.
Since ∑ 1/√n is a divergent p-series (p = 1/2 ≤ 1), the given series diverges by the Comparison Test!`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
6.5.2 የቀጥታ ማነጻጸሪያ ቴስት (Comparison Test)
ቴዎረም 6.23፡
aₙ > 0 እና bₙ > 0 ሲሆኑ፡
1. ∑ bₙ ኮንቨርጅ ቢያደርግ እና aₙ ≤ bₙ ቢሆን ⟹ ∑ aₙ ኮንቨርጅ ያደርጋል።
2. ∑ bₙ ዳይቨርጅ ቢያደርግ እና aₙ ≥ bₙ ቢሆን ⟹ ∑ aₙ ዳይቨርጅ ያደርጋል።

ምሳሌ 4፡ 1/(3 + 4ⁿ) < 1/4ⁿ ⟹ ∑ (1/4)ⁿ ጂኦሜትሪክ ኮንቨርጀንት ስለሆነ ∑ 1/(3+4ⁿ) ኮንቨርጅ ያደርጋል።
ምሳሌ 5፡ 1/(√n - 1) > 1/√n ⟹ ∑ 1/√n p-ሲሪስ ዳይቨርጀንት ስለሆነ ∑ 1/(√n - 1) ዳይቨርጅ ያደርጋል።`,
    formulas: [
      { name: 'Direct Comparison Test', formula: 'aₙ ≤ bₙ, ∑ bₙ < ∞ ⟹ ∑ aₙ < ∞;  aₙ ≥ dₙ, ∑ dₙ = ∞ ⟹ ∑ aₙ = ∞', explanation: 'Dominance bounding principle for nonnegative series.' }
    ]
  },
  {
    pdfPageNumber: 158,
    bookPageLabel: 'Page 158',
    chapterNumber: 6,
    sectionRef: '6.5.3',
    titleEn: 'Theorem 6.24: The Limit Comparison Test (LCT)',
    titleAm: 'ቴዎረም 6.24፡ የወሰን ማነጻጸሪያ ቴስት (Limit Comparison Test - LCT)',
    subtopicEn: 'Theorem 6.24 LCT Statement (lim a_n/b_n = L > 0, L = 0, L = ∞), Degree Heuristics for Rational/Radical Terms, Solved Rational Example',
    subtopicAm: 'የሊሚት ማነጻጸሪያ ህግ (lim a_n/b_n = L > 0 ሲሆን ሁለቱም አንድ አይነት ባህሪ አላቸው)፣ የአልጀብራ ተርሞች አወሳሰድ ስልት',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Theorem 6.24 (Limit Comparison Test - LCT):
Let ∑ aₙ and ∑ bₙ be series with positive terms.
a. If lim_{n⟶∞} (aₙ / bₙ) = L where 0 < L < ∞ (finite and positive), then either both series converge or both series diverge.
b. If lim_{n⟶∞} (aₙ / bₙ) = 0 and ∑ bₙ converges, then ∑ aₙ also converges.
c. If lim_{n⟶∞} (aₙ / bₙ) = ∞ and ∑ bₙ diverges, then ∑ aₙ also diverges.

Procedure for Choosing bₙ for Algebraic Fractions:
Keep only the dominant powers of n in the numerator and denominator, discarding lower-order terms.

Example 6: Determine whether ∑_{n=1}^∞ (2n² + 1) / (n⁵ + 7n³ - 2) converges or diverges.
Solution:
Dominant terms: (2n²) / n⁵ = 2 / n³.
Choose bₙ = 1/n³.
Compute limit of ratio:
lim_{n⟶∞} (aₙ / bₙ) = lim_{n⟶∞} [(2n² + 1)/(n⁵ + 7n³ - 2)] / (1/n³)
= lim_{n⟶∞} (2n⁵ + n³) / (n⁵ + 7n³ - 2) = 2.
Since L = 2 > 0 and ∑ (1/n³) is a convergent p-series (p = 3 > 1), by LCT the original series converges!`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ቴዎረም 6.24 (የሊሚት ማነጻጸሪያ ቴስት - LCT)፡
aₙ > 0 እና bₙ > 0 ሲሆኑ፡
ሀ) lim_{n⟶∞} (aₙ / bₙ) = L (0 < L < ∞) ከሆነ፡ ሁለቱም ሲሪሶች አብረው ኮንቨርጅ ያደርጋሉ ወይም አብረው ዳይቨርጅ ያደርጋሉ።
ለ) lim = 0 ሆኖ ∑ bₙ ኮንቨርጅ ካደረገ፡ ∑ aₙ ኮንቨርጅ ያደርጋል።
ሐ) lim = ∞ ሆኖ ∑ bₙ ዳይቨርጅ ካደረገ፡ ∑ aₙ ዳይቨርጅ ያደርጋል።

ምሳሌ 6፡ aₙ = (2n² + 1)/(n⁵ + 7n³ - 2)
ዋናዎቹን ተርሞች ስንወስድ፡ 2n²/n⁵ = 2/n³ ⟹ bₙ = 1/n³ እንመርጣለን።
lim (aₙ / bₙ) = 2 > 0
∑ 1/n³ p-ሲሪስ (p=3>1) ኮንቨርጀንት ስለሆነ የተሰጠው ሲሪስ በ LCT ኮንቨርጅ ያደርጋል!`,
    formulas: [
      { name: 'Limit Comparison Test', formula: 'lim_{n⟶∞} (aₙ / bₙ) = L ∈ (0, ∞) ⟹ ∑ aₙ  and  ∑ bₙ  share identical convergence', explanation: 'Asymptotic equivalence test eliminating inequality direction constraints.' }
    ]
  },
  {
    pdfPageNumber: 159,
    bookPageLabel: 'Page 159',
    chapterNumber: 6,
    sectionRef: '6.5.4',
    titleEn: '6.5.3 The Ratio Test (d’Alembert’s Criterion)',
    titleAm: '6.5.3 የሬሾ ቴስት (The Ratio Test / d’Alembert’s Criterion)',
    subtopicEn: 'Theorem 6.25 Ratio Test (lim a_{n+1}/a_n = r), Cases r < 1, r > 1, r = 1, Optimal Applicability for Factorials & Exponentials',
    subtopicAm: 'ቴዎረም 6.25 የሬሾ ቴስት (r < 1 ኮንቨርጀንት፣ r > 1 ዳይቨርጀንት፣ r = 1 የማይወስን)፣ ለፋክቶሪያል እና ኤክስፖኔንሺያል ተርሞች ያለው ጥቅም',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
6.5.3 The Ratio Test and the Root Test
The Ratio Test and Root Test involve only the terms of the series itself; no comparison series or improper integral is needed.

Theorem 6.25 (The Ratio Test):
Let ∑ aₙ be a series with positive terms. Suppose that:
lim_{n⟶∞} (aₙ₊₁ / aₙ) = r  (where r may be ∞).
a. If 0 ≤ r < 1, then the series ∑ aₙ converges.
b. If r > 1 (or r = ∞), then the series ∑ aₙ diverges.
c. If r = 1, the test is inconclusive (the series may converge or diverge; another test must be used).

When to Use:
The Ratio Test is extraordinarily effective whenever aₙ contains factorials (n!, (2n)!) or exponentials (cⁿ, 2ⁿ, eⁿ).
It is always inconclusive (r = 1) for rational and algebraic polynomial series!`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
6.5.3 የሬሾ ቴስት (The Ratio Test)
ቴዎረም 6.25፡
aₙ > 0 ለሆነ ሲሪስ lim_{n⟶∞} (aₙ₊₁ / aₙ) = r ቢሆን፡
ሀ) r < 1 ከሆነ ሲሪሱ ኮንቨርጅ ያደርጋል።
ለ) r > 1 (ወይም r = ∞) ከሆነ ሲሪሱ ዳይቨርጅ ያደርጋል።
ሐ) r = 1 ከሆነ ቴስቱ አይሰራም (ውሳኔ አይሰጥም፣ ሌላ ቴስት መጠቀም ያስፈልጋል)።

መቼ ጥቅም ላይ ይውላል?
ሲሪሱ ውስጥ ፋክቶሪያል (n!) ወይም ኤክስፖኔንሺያል (2ⁿ፣ eⁿ) ሲኖር የሬሾ ቴስት እጅግ ውጤታማ ነው!`,
    formulas: [
      { name: 'Ratio Test Limit', formula: 'r = lim_{n⟶∞} (aₙ₊₁ / aₙ);  r < 1 ⟹ Conv,  r > 1 ⟹ Div,  r = 1 ⟹ Inconclusive', explanation: 'Successive term quotient behavior compared against geometric convergence.' }
    ]
  },
  {
    pdfPageNumber: 160,
    bookPageLabel: 'Page 160',
    chapterNumber: 6,
    sectionRef: '6.5.5',
    titleEn: 'Ratio Test Factorial Examples & Theorem 6.26: The Root Test',
    titleAm: 'በሬሾ ቴስት የተሰሩ የፋክቶሪያል ምሳሌዎች እና ቴዎረም 6.26፡ የሩት ቴስት (Root Test)',
    subtopicEn: 'Evaluation of ∑ n!/2ⁿ, ∑ n²/2ⁿ, ∑ n!/nⁿ, Theorem 6.26 Root Test lim (a_n)^(1/n) = r, Solved nth-Power Example',
    subtopicAm: 'የ ∑ n!/2ⁿ፣ ∑ n²/2ⁿ እና ∑ n!/nⁿ ስሌቶች፣ የሩት ቴስት ቴዎረም lim ⁿ√aₙ = r እና የተሰራ ምሳሌ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Example 1: Determine whether the series converges or diverges:
a. ∑_{n=0}^∞ n! / 2ⁿ:
aₙ₊₁ / aₙ = [(n + 1)! / 2ⁿ⁺¹] · [2ⁿ / n!] = (n + 1) / 2.
lim_{n⟶∞} (n + 1)/2 = ∞ > 1 ⟹ Diverges!

b. ∑_{n=1}^∞ n² / 2ⁿ:
aₙ₊₁ / aₙ = [(n + 1)² / 2ⁿ⁺¹] · [2ⁿ / n²] = (1/2) · ((n + 1)/n)².
lim_{n⟶∞} (1/2) · (1 + 1/n)² = 1/2 < 1 ⟹ Converges!

c. ∑_{n=1}^∞ n! / nⁿ:
aₙ₊₁ / aₙ = [(n + 1)! / (n + 1)ⁿ⁺¹] · [nⁿ / n!] = (n + 1) nⁿ / [(n + 1)(n + 1)ⁿ] = (n / (n + 1))ⁿ = 1 / (1 + 1/n)ⁿ.
lim_{n⟶∞} 1 / (1 + 1/n)ⁿ = 1/e ≈ 1/2.718 < 1 ⟹ Converges!

Theorem 6.26 (The Root Test / Cauchy’s Radical Test):
Let ∑ aₙ be a series with positive terms. Suppose that:
lim_{n⟶∞} ⁿ√(aₙ) = lim_{n⟶∞} (aₙ)^(1/n) = r.
a. If 0 ≤ r < 1, then ∑ aₙ converges.
b. If r > 1 (or r = ∞), then ∑ aₙ diverges.
c. If r = 1, the test is inconclusive.

Example 2: Test ∑_{n=1}^∞ (n / ln n)ⁿ.
Solution: ⁿ√(aₙ) = n / ln n.
lim_{n⟶∞} (n / ln n) = lim_{n⟶∞} (1 / (1/n)) = ∞ > 1 ⟹ Diverges!`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምሳሌ 1፡
ሀ) ∑ n!/2ⁿ ⟹ r = lim (n+1)/2 = ∞ ⟹ ዳይቨርጅ ያደርጋል!
ለ) ∑ n²/2ⁿ ⟹ r = lim (1/2)((n+1)/n)² = 1/2 < 1 ⟹ ኮንቨርጅ ያደርጋል!
ሐ) ∑ n!/nⁿ ⟹ r = lim 1/(1 + 1/n)ⁿ = 1/e < 1 ⟹ ኮንቨርጅ ያደርጋል!

ቴዎረም 6.26 (የሩት ቴስት - Root Test)፡
r = lim_{n⟶∞} ⁿ√(aₙ) ሲሆን፡
- r < 1 ⟹ ኮንቨርጅ ያደርጋል
- r > 1 ⟹ ዳይቨርጅ ያደርጋል
- r = 1 ⟹ ውሳኔ አይሰጥም
ምሳሌ 2፡ ∑ (n / ln n)ⁿ ⟹ ⁿ√aₙ = n / ln n ⟶ ∞ ⟹ ዳይቨርጅ ያደርጋል!`,
    formulas: [
      { name: 'Root Test', formula: 'r = lim_{n⟶∞} (aₙ)^(1/n);  r < 1 ⟹ Conv,  r > 1 ⟹ Div,  r = 1 ⟹ Inconclusive', explanation: 'Limit of the nth root of the nth term.' }
    ]
  },
  {
    pdfPageNumber: 161,
    bookPageLabel: 'Page 161',
    chapterNumber: 6,
    sectionRef: '6.6',
    titleEn: '6.6 Alternating Series: The Alternating Series Test (Leibniz’s Rule)',
    titleAm: '6.6 ተለዋዋጭ ምልክት ያላቸው ሲሪሶች (Alternating Series) እና የላይብኒዝ ቴስት',
    subtopicEn: 'Definition of Alternating Series, Theorem 6.27 Alternating Series Test (a_n decreasing, lim a_n = 0), Alternating Harmonic Series',
    subtopicAm: 'የተለዋዋጭ ምልክት ሲሪስ ትርጓሜ፣ ቴዎረም 6.27 የላይብኒዝ ቴስት (a_n እየቀነሰ የሚሄድ እና ወደ 0 የሚያመራ ሲሆን)',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
6.6 Alternating Series Test
If the terms of a series alternate between positive and negative values, the series is called an alternating series:
∑_{n=1}^∞ (-1)ⁿ⁻¹ aₙ = a₁ - a₂ + a₃ - a₄ + a₅ - ... (where aₙ > 0).

Theorem 6.27 (The Alternating Series Test / Leibniz’s Theorem):
If the alternating series ∑_{n=1}^∞ (-1)ⁿ⁻¹ aₙ satisfies:
1. aₙ₊₁ ≤ aₙ for all n (the terms aₙ are decreasing), and
2. lim_{n⟶∞} aₙ = 0,
then the alternating series converges!

Error Bound for Alternating Series:
Furthermore, if S is the sum of the series and Sⱼ is the jth partial sum:
|S - Sⱼ| ≤ aⱼ₊₁.
(The absolute error in truncating the series at term j is bounded by the magnitude of the very next term aⱼ₊₁!).

Example 1: Show that the alternating harmonic series converges:
∑_{n=1}^∞ (-1)ⁿ⁻¹ (1/n) = 1 - 1/2 + 1/3 - 1/4 + 1/5 - ...
Solution:
Here aₙ = 1/n.
1. aₙ₊₁ = 1/(n + 1) < 1/n = aₙ (terms are decreasing).
2. lim_{n⟶∞} (1/n) = 0.
Both hypotheses of the Alternating Series Test are satisfied, so the alternating harmonic series converges (its sum is ln 2 ≈ 0.6931).`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
6.6 የተለዋዋጭ ምልክት ሲሪስ ቴስት (Alternating Series Test)
አንዱ ተርም አወንታዊ ቀጣዩ አሉታዊ የሚሆንበት ሲሪስ (Alternating series) ይባላል፡
∑ (-1)ⁿ⁻¹ aₙ = a₁ - a₂ + a₃ - a₄ + ...

ቴዎረም 6.27 (የላይብኒዝ ቴስት)፡
1. aₙ₊₁ ≤ aₙ (ተርሞቹ እየቀነሱ የሚሄዱ ከሆኑ)፣ እና
2. lim_{n⟶∞} aₙ = 0 ከሆነ፡
ሲሪሱ የግድ ኮንቨርጅ ያደርጋል!

የስህተት ገደብ (Error Bound)፡
የእውነተኛው ድምር S እና የከፊል ድምር Sⱼ ልዩነት ከሚቀጥለው ተርም aⱼ₊₁ አይበልጥም፡
|S - Sⱼ| ≤ aⱼ₊₁

ምሳሌ 1 (አልተርኔቲንግ ሃርሞኒክ ሲሪስ)፡
1 - 1/2 + 1/3 - 1/4 + ...
aₙ = 1/n እየቀነሰ የሚሄድ እና lim (1/n) = 0 ስለሆነ ኮንቨርጅ ያደርጋል (ድምሩ ln 2 ነው)!`,
    formulas: [
      { name: 'Alternating Series Remainder Bound', formula: '|S - Sₙ| ≤ aₙ₊₁', explanation: 'Truncation error cannot exceed magnitude of first omitted term.' }
    ]
  },
  {
    pdfPageNumber: 162,
    bookPageLabel: 'Page 162',
    chapterNumber: 6,
    sectionRef: '6.6.1',
    titleEn: 'Alternating Series Solved Examples & Error Bound Calculations',
    titleAm: 'በአልተርኔቲንግ ሲሪስ የተሰሩ ምሳሌዎች እና የስህተት ገደብ ስሌቶች',
    subtopicEn: 'Alternating Algebraic Example a_n = 2n/(4n²-3), Maclaurin Series Approximation of sin 1 with Error < 0.000005',
    subtopicAm: 'የተሰራ አልጀብራዊ ምሳሌ a_n = 2n/(4n²-3)፣ የ sin 1 ስሌት በ 5 ዴሲማል ትክክለኛነት',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Example 2: Determine convergence of ∑_{n=1}^∞ (-1)ⁿ⁻¹ · 2n / (4n² - 3).
Solution:
Let f(x) = 2x / (4x² - 3).
f'(x) = [(4x² - 3)(2) - 2x(8x)] / (4x² - 3)² = (-8x² - 6) / (4x² - 3)² < 0 for x ≥ 1.
Thus aₙ is decreasing.
Also lim_{n⟶∞} 2n / (4n² - 3) = 0.
By the Alternating Series Test, the series converges!

Example 3: Prove that the alternating factorial series:
1 - 1/3! + 1/5! - 1/7! + ... + (-1)ⁿ⁻¹ / (2n - 1)! + ...
converges, and approximate its sum S to 5 decimal places.
Solution:
aₙ = 1 / (2n - 1)! is strictly decreasing and lim aₙ = 0, so it converges.
By the error bound theorem: |S - Sₙ| ≤ aₙ₊₁ = 1 / (2n + 1)!.
For n = 4:
a₅ = 1 / 9! = 1 / 362,880 ≈ 0.0000028 < 0.000005.
Thus the 4th partial sum S₄ gives an approximation accurate to 5 decimal places!
S₄ = 1 - 1/6 + 1/120 - 1/5040 = 1 - 0.166667 + 0.008333 - 0.000198 ≈ 0.84147.
(Notice that this series represents the Maclaurin series for sin 1 in radians!).`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምሳሌ 2፡ ∑ (-1)ⁿ⁻¹ (2n)/(4n² - 3)
f'(x) = (-8x² - 6)/(4x² - 3)² < 0 ⟹ እየቀነሰ የሚሄድ እና lim aₙ = 0 ስለሆነ ኮንቨርጅ ያደርጋል!

ምሳሌ 3፡ 1 - 1/3! + 1/5! - 1/7! + ... (የ sin 1 ማክሎሪን ሲሪስ)
በስህተት ገደብ ቀመር |S - S₄| ≤ a₅ = 1/9! ≈ 0.0000028 < 0.000005
S₄ = 1 - 1/6 + 1/120 - 1/5040 ≈ 0.84147 (በ 5 ዴሲማል ትክክለኛነት sin 1 = 0.84147)!`,
    formulas: [
      { name: 'Alternating Estimation Bound', formula: '|S - S₄| ≤ a₅ = 1/9! ≈ 2.75 × 10⁻⁶', explanation: 'Precision verification for series truncation.' }
    ]
  },
  {
    pdfPageNumber: 163,
    bookPageLabel: 'Page 163',
    chapterNumber: 6,
    sectionRef: '6.7',
    titleEn: '6.7 Absolute and Conditional Convergence: Theory & Proofs',
    titleAm: '6.7 ፍፁማዊ (Absolute) እና ሁኔታዊ (Conditional) ኮንቨርጀንስ',
    subtopicEn: 'Theorem 6.28 (Absolute Convergence Implies Convergence), Proof via Nonnegative Squeeze, Examples with (cos(nπ/4))/n²',
    subtopicAm: 'ቴዎረም 6.28 (ፍፁማዊ ኮንቨርጀንስ መደበኛ ኮንቨርጀንስን ያረጋግጣል)፣ ማረጋገጫ እና የ (cos(nπ/4))/n² ምሳሌ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
6.7 Absolute and Conditional Convergence
Theorem 6.28: If the series of absolute values ∑_{n=1}^∞ |aₙ| converges, then the series ∑_{n=1}^∞ aₙ itself converges.

Proof:
For any term, -|aₙ| ≤ aₙ ≤ |aₙ|. Adding |aₙ| gives:
0 ≤ aₙ + |aₙ| ≤ 2|aₙ|.
If ∑ |aₙ| converges, then ∑ 2|aₙ| converges.
By the Comparison Test, ∑ (aₙ + |aₙ|) converges.
Then ∑ aₙ = ∑ (aₙ + |aₙ|) - ∑ |aₙ| is the difference of two convergent series, hence ∑ aₙ converges!

Example 1: Prove that ∑_{n=1}^∞ (-1)ⁿ⁻¹ (1/n³) converges.
Solution: Consider absolute values: ∑ |(-1)ⁿ⁻¹ (1/n³)| = ∑ 1/n³.
This is a p-series with p = 3 > 1, which converges.
Therefore by Theorem 6.28, the original alternating series converges!

Example 2: Show that ∑_{n=1}^∞ [cos(nπ/4)] / n² converges.
Solution:
The terms oscillate irregularly: |cos(nπ/4)| ≤ 1.
|(cos(nπ/4)) / n²| ≤ 1/n².
Since ∑ 1/n² converges (p = 2 > 1), by the Comparison Test the series of absolute values converges.
By Theorem 6.28, the given series converges!`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
6.7 ፍፁማዊ እና ሁኔታዊ ኮንቨርጀንስ (Absolute & Conditional Convergence)
ቴዎረም 6.28፡
የፍፁም ዋጋ ሲሪስ ∑ |aₙ| ኮንቨርጅ ካደረገ፡ የመጀመሪያው ሲሪስ ∑ aₙ የግድ ኮንቨርጅ ያደርጋል!

ማረጋገጫ፡
0 ≤ aₙ + |aₙ| ≤ 2|aₙ| ⟹ በማነጻጸሪያ ቴስት ∑ (aₙ + |aₙ|) ኮንቨርጀንት ይሆናል ⟹ ∑ aₙ = ∑(aₙ + |aₙ|) - ∑|aₙ| ኮንቨርጀንት ነው!

ምሳሌ 1፡ ∑ |(-1)ⁿ⁻¹/n³| = ∑ 1/n³ (p=3>1) ኮንቨርጅ ስለሚያደርግ የተሰጠው ሲሪስ ኮንቨርጅ ያደርጋል።
ምሳሌ 2፡ |cos(nπ/4)/n²| ≤ 1/n² ⟹ በቴዎረም 6.28 መሰረት ኮንቨርጅ ያደርጋል!`,
    formulas: [
      { name: 'Absolute Convergence Theorem', formula: '∑ |aₙ| < ∞ ⟹ ∑ aₙ  converges', explanation: 'Absolute convergence is strictly stronger than ordinary convergence.' }
    ]
  },
  {
    pdfPageNumber: 164,
    bookPageLabel: 'Page 164',
    chapterNumber: 6,
    sectionRef: '6.7.1',
    titleEn: 'Definitions of Absolute vs Conditional Convergence & 6.8 Generalized Tests',
    titleAm: 'የፍፁማዊ እና ሁኔታዊ ኮንቨርጀንስ ልዩነት እና 6.8 አጠቃላይ የመፈተሻ ዘዴዎች',
    subtopicEn: 'Definition 6.29 Absolute vs Conditional Convergence, Alternating Harmonic Conditional Nature, Theorem 6.30 Generalized Tests',
    subtopicAm: 'ትርጓሜ 6.29 ፍፁማዊ vs ሁኔታዊ፣ የአልተርኔቲንግ ሃርሞኒክ ሁኔታዊ ኮንቨርጀንስ፣ ቴዎረም 6.30 አጠቃላይ ቴስቶች',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Definition 6.29:
- A series ∑ aₙ is absolutely convergent if the series of absolute values ∑ |aₙ| converges.
- A series ∑ aₙ is conditionally convergent if ∑ aₙ converges, but ∑ |aₙ| diverges.

Example 3:
- The alternating harmonic series ∑ (-1)ⁿ⁻¹ (1/n) is conditionally convergent, because it converges (by Leibniz test), but its absolute series ∑ 1/n is the divergent harmonic series!
- ∑ (cos(nπ/4)) / n² is absolutely convergent.

6.8 Generalized Convergence Tests
Theorem 6.30 (Generalized Convergence Tests):
Let ∑ aₙ be any series (terms may have arbitrary signs):
a. Generalized Comparison Test: If |aₙ| ≤ bₙ for n ≥ 1 and ∑ bₙ converges, then ∑ aₙ converges absolutely.
b. Generalized Limit Comparison Test: If lim_{n⟶∞} |aₙ| / bₙ = L > 0 and ∑ bₙ converges, then ∑ aₙ converges absolutely.
c. Generalized Ratio Test: Let lim_{n⟶∞} |aₙ₊₁ / aₙ| = r.
- If r < 1: converges absolutely.
- If r > 1: diverges.
- If r = 1: inconclusive.
d. Generalized Root Test: Let lim_{n⟶∞} ⁿ√|aₙ| = r.
- If r < 1: converges absolutely.
- If r > 1: diverges.
- If r = 1: inconclusive.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ትርጓሜ 6.29፡
- ፍፁማዊ ኮንቨርጀንት (Absolutely convergent)፡ ∑ |aₙ| ኮንቨርጅ ሲያደርግ።
- ሁኔታዊ ኮንቨርጀንት (Conditionally convergent)፡ ∑ aₙ ኮንቨርጅ አድርጎ ነገር ግን ∑ |aₙ| ዳይቨርጅ ሲያደርግ።
ምሳሌ፡ አልተርኔቲንግ ሃርሞኒክ ሲሪስ ∑ (-1)ⁿ⁻¹ (1/n) ሁኔታዊ ኮንቨርጀንት ነው (ራሱ ኮንቨርጅ ያደርጋል፣ የፍፁም ዋጋው ∑ 1/n ግን ዳይቨርጅ ያደርጋል)።

6.8 አጠቃላይ የኮንቨርጀንስ ቴስቶች (Generalized Tests)፡
ቴዎረም 6.30፡
- አጠቃላይ የሬሾ ቴስት፡ lim |aₙ₊₁ / aₙ| = r < 1 ⟹ ፍፁማዊ ኮንቨርጀንት
- አጠቃላይ የሩት ቴስት፡ lim ⁿ√|aₙ| = r < 1 ⟹ ፍፁማዊ ኮንቨርጀንት`,
    formulas: [
      { name: 'Conditional Convergence Definition', formula: '∑ aₙ < ∞  and  ∑ |aₙ| = ∞ ⟹ Conditionally Convergent', explanation: 'Series that converges only due to sign cancellation.' }
    ]
  },
  {
    pdfPageNumber: 165,
    bookPageLabel: 'Page 165',
    chapterNumber: 6,
    sectionRef: '6.8.1',
    titleEn: 'Interval of Convergence Solved Examples: ∑ xⁿ/n & Power Series',
    titleAm: 'የኮንቨርጀንስ ክልል የተሰሩ ምሳሌዎች፡ ∑ xⁿ/n እና የፓወር ሲሪስ',
    subtopicEn: 'Analysis of ∑ xⁿ/n (Absolute on (-1, 1), Conditional at x = -1, Divergent at x = 1 and |x| > 1), Analysis of Odd Powers Series',
    subtopicAm: 'የ ∑ xⁿ/n የኮንቨርጀንስ ክልል ትንተና፣ በ x = -1 ሁኔታዊ ኮንቨርጀንስ፣ በ x = 1 ዳይቨርጀንስ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Example 3: Show that the power series ∑_{n=1}^∞ (xⁿ / n) converges absolutely for |x| < 1, converges conditionally for x = -1, and diverges for x = 1 and for |x| > 1.
Solution:
If x = 0, the series converges to 0.
If x ≠ 0, apply the Generalized Ratio Test:
lim_{n⟶∞} |aₙ₊₁ / aₙ| = lim_{n⟶∞} |[xⁿ⁺¹ / (n + 1)] / [xⁿ / n]| = lim_{n⟶∞} |x| · (n / (n + 1)) = |x|.
- If |x| < 1: r = |x| < 1, so the series converges absolutely.
- If |x| > 1: r = |x| > 1, so the series diverges.
- If x = 1: The series becomes ∑ 1/n (the harmonic series), which diverges.
- If x = -1: The series becomes ∑ (-1)ⁿ / n (the negative of the alternating harmonic series), which converges by Leibniz's test. But the series of absolute values is ∑ 1/n, which diverges.
Therefore at x = -1 the series is conditionally convergent!
Interval of convergence: [-1, 1).

Example 4: Show that ∑_{n=0}^∞ [(-1)ⁿ / (2n + 1)] x²ⁿ⁺¹ = x - x³/3 + x⁵/5 - x⁷/7 + ...
converges absolutely for |x| < 1, converges conditionally for |x| = 1, and diverges for |x| > 1.
(This series is the Taylor series of arctan x).`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ምሳሌ 3፡ የ ∑ (xⁿ/n) የኮንቨርጀንስ ባህሪ፡
በአጠቃላይ ሬሾ ቴስት፡ r = lim |x| (n/(n+1)) = |x|
- |x| < 1 ⟹ ፍፁማዊ ኮንቨርጀንት
- |x| > 1 ⟹ ዳይቨርጀንት
- x = 1 ⟹ ∑ 1/n (ሃርሞኒክ) ⟹ ዳይቨርጀንት
- x = -1 ⟹ ∑ (-1)ⁿ/n ⟹ ሁኔታዊ ኮንቨርጀንት!
የኮንቨርጀንስ ክልል (Interval of convergence)፡ [-1, 1)

ምሳሌ 4፡ ∑ (-1)ⁿ x²ⁿ⁺¹ / (2n+1) = x - x³/3 + x⁵/5 - ... (የ arctan x ሲሪስ)፡
|x| < 1 ሲሆን ፍፁማዊ፣ x = ±1 ሲሆን ሁኔታዊ፣ |x| > 1 ሲሆን ዳይቨርጀንት ነው።`,
    formulas: [
      { name: 'Power Series Ratio Limit', formula: 'lim_{n⟶∞} |aₙ₊₁/aₙ| = |x| · L < 1 ⟹ |x| < 1/L = R', explanation: 'Radius of convergence determination via ratio test.' }
    ]
  },
  {
    pdfPageNumber: 166,
    bookPageLabel: 'Page 166',
    chapterNumber: 6,
    sectionRef: '6.8.2',
    titleEn: 'Corollary 6.18: Ratio Limit for Sequences & Growth Dominance (xⁿ/n! ⟶ 0)',
    titleAm: 'ተከታይ ቴዎረም 6.18፡ የሬሾ ሊሚት ለሲክዌንስ እና የዕድገት የበላይነት (xⁿ/n! ⟶ 0)',
    subtopicEn: 'Corollary 6.18 (lim |a_{n+1}/a_n| < 1 ⟹ lim a_n = 0), Proof that lim xⁿ/n! = 0 for all x, Convergence of ∑ (n!/nⁿ) xⁿ for |x| < e',
    subtopicAm: 'lim |a_{n+1}/a_n| < 1 ከሆነ lim a_n = 0 መሆኑ፣ xⁿ/n! ወደ 0 የማምራቱ ማረጋገጫ',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
Corollary 6.18:
Let {aₙ}₁^∞ be a sequence. If:
lim_{n⟶∞} |aₙ₊₁ / aₙ| = r < 1   or   lim_{n⟶∞} ⁿ√|aₙ| = r < 1,
then lim_{n⟶∞} aₙ = 0.
Proof: If r < 1, then the series ∑ aₙ converges by the Ratio (or Root) Test.
By Theorem 6.18(a), whenever a series converges, its nth term must approach 0: lim_{n⟶∞} aₙ = 0!

Class Work Applications:
1. Show that lim_{n⟶∞} (xⁿ / n!) = 0 for all real numbers x.
Solution:
Let aₙ = xⁿ / n!.
Compute ratio:
|aₙ₊₁ / aₙ| = |xⁿ⁺¹ / (n + 1)!| · |n! / xⁿ| = |x| / (n + 1).
For any fixed x:
lim_{n⟶∞} |x| / (n + 1) = 0 < 1.
By Corollary 6.18, lim_{n⟶∞} (xⁿ / n!) = 0 for every x ∈ ℝ!
(This proves that factorial growth n! completely dominates exponential growth xⁿ for any constant base x).

2. Show that the series ∑_{n=1}^∞ (n! / nⁿ) xⁿ converges for |x| < e.
Solution:
From Example 1(c) earlier, the ratio limit of the coefficients is 1/e.
|aₙ₊₁ / aₙ| = |x| / e.
Thus r = |x| / e < 1 ⟺ |x| < e.`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
ተከታይ ቴዎረም 6.18፡
lim |aₙ₊₁ / aₙ| = r < 1 ከሆነ lim_{n⟶∞} aₙ = 0 ይሆናል!
ማረጋገጫ፡ r < 1 ከሆነ ∑ aₙ ኮንቨርጅ ያደርጋል፣ ማንኛውም ኮንቨርጀንት ሲሪስ ደግሞ ተርሙ ወደ 0 ማምራት አለበት።

የክፍል ስራ፡
1. ለማንኛውም x ∈ ℝ lim_{n⟶∞} (xⁿ / n!) = 0 መሆኑን ማሳየት፡
|aₙ₊₁ / aₙ| = |x| / (n + 1) ⟶ 0 < 1 ⟹ በቴዎረም 6.18 መሰረት lim xⁿ/n! = 0!
(ይህ ፋክቶሪያል n! ከማንኛውም ኤክስፖኔንሺያል xⁿ በበለጠ ፍጥነት እንደሚያድግ ያረጋግጣል)።

2. ∑ (n!/nⁿ) xⁿ ሲሪስ |x| < e ሲሆን ኮንቨርጅ ያደርጋል።`,
    formulas: [
      { name: 'Factorial vs Exponential Dominance', formula: 'lim_{n⟶∞} (xⁿ / n!) = 0,  ∀x ∈ ℝ', explanation: 'Fundamental calculus limit showing factorial outgrows any geometric base.' }
    ]
  },
  {
    pdfPageNumber: 167,
    bookPageLabel: 'Page 167',
    chapterNumber: 6,
    sectionRef: '6.9',
    titleEn: 'Worksheet VII: Comprehensive Series & Convergence Mastery (Part 1)',
    titleAm: 'የስራ ሉህ 7፡ አጠቃላይ የሲሪሶች እና የኮንቨርጀንስ ጥያቄዎች (ክፍል 1)',
    subtopicEn: 'Worksheet VII Problems 1-6: Partial Sums, Divergence Test, Telescoping Sums, Power Series Radius of Convergence',
    subtopicAm: 'የስራ ሉህ 7 ጥያቄ 1 እስከ 6፡ የከፊል ድምሮች፣ የ nኛ ተርም ቴስት፣ የቴሌስኮፒክ ድምሮች፣ የፓወር ሲሪስ ድምር',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
MATH 231 WORKSHEET VII (Part 1)

1. Give the 4th, 5th, and nth partial sums:
a. ∑_{n=0}^∞ (-1)ⁿ: S₄ = 1, S₅ = 0, Sₙ = 1 (n odd), 0 (n even).
b. ∑_{n=1}^∞ 5 / ((5n + 2)(5n + 7)) = ∑ [1/(5n + 2) - 1/(5n + 7)]:
Sₙ = 1/7 - 1/(5n + 7). Sum = 1/7.

2. nth Term Test:
a. ∑ sin(nπ): sin(nπ) = 0 for all n. Test is inconclusive.
b. ∑ (1 + 1/n) · ln(1 + 1/n): lim = 1 · ln 1 = 0 (inconclusive).
c. ∑ n · sin(1/n): lim_{n⟶∞} n sin(1/n) = lim (sin(1/n))/(1/n) = 1 ≠ 0. Diverges by Divergence Test!
d. ∑ n / ln(n + 1): lim = ∞ ≠ 0. Diverges!

3. Convergence & Sums:
a. ∑_{n=1}^∞ -1 / (9n² + 3n - 2) = ∑ -1 / ((3n - 1)(3n + 2)) = (1/3) ∑ [1/(3n + 2) - 1/(3n - 1)]:
Telescoping sum = -1/6.
b. ∑_{n=1}^∞ ln(n / (n + 1)) = ∑ [ln n - ln(n + 1)]: Sₙ = -ln(n + 1) ⟶ -∞ (diverges).

5. Values of x for which series converges:
a. 1 - x + x² - x³ + ... = ∑ (-1)ⁿ⁻¹ xⁿ⁻¹:
Geometric with r = -x. Converges for |-x| = |x| < 1. Sum = 1 / (1 + x).`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
የስራ ሉህ 7 (ክፍል 1)
1. ከፊል ድምሮች፡
ሀ) ∑ (-1)ⁿ ⟹ S₄ = 1, S₅ = 0
ለ) ∑ 5/((5n+2)(5n+7)) ⟹ Sₙ = 1/7 - 1/(5n+7) ⟹ ድምር = 1/7

2. የ nኛ ተርም ቴስት፡
ሐ) lim n sin(1/n) = 1 ≠ 0 ⟹ በዳይቨርጀንስ ቴስት ዳይቨርጅ ያደርጋል!
መ) lim n / ln(n+1) = ∞ ≠ 0 ⟹ ዳይቨርጅ ያደርጋል!

3. የሲሪስ ድምር፡
ሀ) ∑ -1/(9n² + 3n - 2) = -1/6 (ቴሌስኮፒክ)
ለ) ∑ ln(n/(n+1)) ⟹ Sₙ = -ln(n+1) ⟶ -∞ (ዳይቨርጅ ያደርጋል)

5. የ x ዋጋዎች፡
ሀ) 1 - x + x² - x³ + ... ⟹ |x| < 1 ሲሆን ኮንቨርጅ ያደርጋል፣ ድምሩ 1/(1+x) ነው።`,
    formulas: [
      { name: 'Geometric Taylor Expansion', formula: '1 / (1 + x) = ∑_{n=0}^∞ (-1)ⁿ xⁿ,  |x| < 1', explanation: 'Fundamental alternating geometric series expansion.' }
    ]
  },
  {
    pdfPageNumber: 168,
    bookPageLabel: 'Page 168',
    chapterNumber: 6,
    sectionRef: '6.9.1',
    titleEn: 'Worksheet VII (Cont.): Advanced Series, Absolute/Conditional Tests & Induction',
    titleAm: 'የስራ ሉህ 7 (የቀጠለ)፡ የላቁ ሲሪሶች፣ ፍፁማዊ/ሁኔታዊ ቴስቶች እና ኢንደክሽን',
    subtopicEn: 'Worksheet VII Problems 7-12: Parameter k Convergence (1/(n^k ln n)), Absolute vs Conditional Classification, Proof of ∑ n/(n+1)! = 1',
    subtopicAm: 'የስራ ሉህ 7 ጥያቄ 7 እስከ 12፡ የፓራሜትር k ኮንቨርጀንስ፣ ፍፁማዊ vs ሁኔታዊ ምደባ፣ የ ∑ n/(n+1)! = 1 ማረጋገጫ በኢንደክሽን',
    pageType: 'content',
    contentEn: `Prepared by Tibebe-selassie T/mariam
MATH 231 WORKSHEET VII (Part 2)

7. Find every real number k for which the series converges:
a. ∑_{n=1}^∞ 1 / (nᵏ ln n):
Use Integral Test: ∫₂^∞ dx / (xᵏ ln x).
- If k > 1: converges by comparison to 1/xᵏ.
- If k ≤ 1: diverges.
Thus converges for k > 1!
b. ∑_{n=1}^∞ 1 / (n (ln n)ᵏ):
Let u = ln x, du = dx/x ⟹ ∫ du / uᵏ.
This is a p-integral in u, so it converges if and only if k > 1!

8. Absolute vs Conditional Convergence:
a. ∑ (-1)ⁿ⁻¹ / √(2n + 1):
Alternating series converges by Leibniz. Absolute series ∑ 1/√(2n+1) diverges (p = 1/2).
⟹ Conditionally convergent!
b. ∑ (-1)ⁿ (arctan n) / n²:
|(-1)ⁿ (arctan n) / n²| ≤ (π/2) / n². Since ∑ 1/n² converges (p = 2),
⟹ Absolutely convergent!
c. ∑ (cos(nπ/6)) / n²:
|cos(nπ/6) / n²| ≤ 1/n².
⟹ Absolutely convergent!

12. Consider ∑_{n=1}^∞ n / (n + 1)!:
a. Partial sums:
S₁ = 1/2! = 1/2
S₂ = 1/2 + 2/3! = 1/2 + 1/3 = 5/6 = 1 - 1/6 = 1 - 1/3!
S₃ = 5/6 + 3/4! = 5/6 + 1/8 = 23/24 = 1 - 1/4!
S₄ = 1 - 1/5! = 119/120.
Pattern: Sₙ = 1 - 1 / (n + 1)!.
b. Limit of sum:
lim_{n⟶∞} Sₙ = lim_{n⟶∞} [1 - 1 / (n + 1)!] = 1 - 0 = 1.
The infinite sum converges and its sum is exactly 1!`,
    contentAm: `የተዘጋጀው በ ጥበበ-ስላሴ ተ/ማሪያም
የስራ ሉህ 7 (ክፍል 2)
7. የ k ዋጋዎች፡
ሀ) ∑ 1/(nᵏ ln n) ⟹ k > 1 ሲሆን ኮንቨርጅ ያደርጋል!
ለ) ∑ 1/(n (ln n)ᵏ) ⟹ k > 1 ሲሆን ኮንቨርጅ ያደርጋል!

8. ፍፁማዊ vs ሁኔታዊ ኮንቨርጀንስ፡
ሀ) ∑ (-1)ⁿ⁻¹ / √(2n+1) ⟹ ሁኔታዊ ኮንቨርጀንት (Conditionally convergent)
ለ) ∑ (-1)ⁿ (arctan n)/n² ⟹ ፍፁማዊ ኮንቨርጀንት (Absolutely convergent)
ሐ) ∑ (cos(nπ/6))/n² ⟹ ፍፁማዊ ኮንቨርጀንት (Absolutely convergent)

12. ∑_{n=1}^∞ n / (n + 1)!፡
ሀ) ከፊል ድምሮች፡ S₁ = 1 - 1/2!፣ S₂ = 1 - 1/3!፣ S₃ = 1 - 1/4! ⟹ Sₙ = 1 - 1/(n+1)!
ለ) የሲሪሱ ድምር፡ lim Sₙ = lim [1 - 1/(n+1)!] = 1!`,
    formulas: [
      { name: 'Factorial Telescoping Sum', formula: '∑_{n=1}^∞ n / (n + 1)! = lim_{n⟶∞} [1 - 1 / (n + 1)!] = 1', explanation: 'Analytic identity decomposed as n/(n+1)! = 1/n! - 1/(n+1)!.' }
    ]
  }
];
