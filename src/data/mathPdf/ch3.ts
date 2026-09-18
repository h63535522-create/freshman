import { OfficialPdfPage } from './types';

export const mathCh3Pages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 38,
    bookPageLabel: 'Page 38',
    chapterNumber: 3,
    sectionRef: '3.1',
    titleEn: 'Chapter 3: Limit and Continuity — 3.1 Formal (ε-δ) Definition of Limit',
    titleAm: 'ምዕራፍ 3፡ ወሰን እና ቀጣይነት — 3.1 የወሰን (ሊሚት) ፎርማል የ ε-δ ትርጓሜ',
    subtopicEn: 'Rigorous Epsilon-Delta Limit Definition, Graphical Interpretation, Dependence of Delta on Epsilon',
    subtopicAm: 'የኤፕሲሎን-ዴልታ ጥብቅ ትርጓሜ፣ ጂኦሜትሪያዊ ምስል፣ የዴልታ እና ኤፕሲሎን ጥገኝነት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Limit and Continuity

3.1 Definition of Limit
Definition (Formal Definition of Limit):
Let f be a function defined on an open interval containing a, with the possible exception of a itself. Then the limit of f(x) as x approaches a is the number L, written as:
lim_{x ⟶ a} f(x) = L
if for every ε > 0 there is a number δ > 0 such that:
if 0 < |x - a| < δ implies |f(x) - L| < ε

This idea can be represented graphically:
For any horizontal error band (L - ε, L + ε) around L, there exists a vertical tolerance interval (a - δ, a + δ) around a such that whenever x lies within distance δ of a (with x ≠ a), the function value f(x) lies strictly within distance ε of L.

Note:
- The calculated δ should be given as a function of known value ε.
- The calculated δ is not unique, i.e., for a valid δ, taking any smaller positive value δ' < δ is also true.`,
    contentAm: `አዲስ አበባ ሳይንስ እና ቴክኖሎጂ ዩኒቨርሲቲ (AASTU)
የሂሳብ ትምህርት ክፍል
ምዕራፍ 3፡ ወሰን እና ቀጣይነት (Limit and Continuity)

3.1 የወሰን (ሊሚት) ትርጓሜ
ፎርማል (ε-δ) የሊሚት ትርጓሜ፡
f በነጥብ a ዙሪያ ባለው ክፍት ክልል ላይ የተተነተነ ፈንክሽን ቢሆን (ነጥብ a ላይ ባይተነተንም ይቻላል)፣ x ወደ a ሲጠጋ የ f(x) ሊሚት L ነው (lim_{x ⟶ a} f(x) = L) የሚባለው፡
ለማንኛውም ε > 0፣ 0 < |x - a| < δ በሚሆንበት ጊዜ ሁሉ |f(x) - L| < ε የሚያደርግ δ > 0 ሲገኝ ነው።

ማስታወሻ፡
- የተሰላው δ በታወቀው ε ቀመር መገለጽ አለበት (ለምሳሌ δ = ε/5)።
- δ ነጠላ አይደለም፤ አንድ የሚያሰራ δ ከተገኘ ከዚያ ያነሰ ማንኛውም አዎንታዊ δ' < δ መስፈርቱን ያሟላል።`,
    formulas: [
      { name: 'Formal Epsilon-Delta Limit', formula: '∀ε > 0, ∃δ > 0 such that 0 < |x - a| < δ ⟹ |f(x) - L| < ε', explanation: 'Rigorous Cauchy-Weierstrass definition of a limit.' }
    ]
  },
  {
    pdfPageNumber: 39,
    bookPageLabel: 'Page 39',
    chapterNumber: 3,
    sectionRef: '3.1.1',
    titleEn: 'Epsilon-Delta Proofs for Linear and Quadratic Limits',
    titleAm: 'የኤፕሲሎን-ዴልታ ማረጋገጫዎች ለሊኒየር እና ኳድራቲክ ሊሚቶች',
    subtopicEn: 'Proof of lim(5x - 4) = 6 as x ⟶ 2 (δ = ε/5), Beginning of Proof of lim(x² + x - 11) = 9 as x ⟶ 4',
    subtopicAm: 'የ lim(5x-4) = 6 ማረጋገጫ (δ = ε/5)፣ የኳድራቲክ ሊሚት lim(x²+x-11) = 9 ማረጋገጫ ጅማሮ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 2

Example 1: Use the formal definition of the limit to prove that:
lim_{x ⟶ 2} (5x - 4) = 6

Solution:
Let us start by letting ε > 0 be any number. Then we need to find a number δ > 0 so that:
|(5x - 4) - 6| < ε  whenever  0 < |x - 2| < δ

We'll start by simplifying the left inequality to get a guess for δ:
|(5x - 4) - 6| < ε ⟹ |5x - 10| = 5|x - 2| < ε ⟹ |x - 2| < ε/5.
This leads us to choose δ = ε/5.

Let's now verify this guess:
Let ε > 0, choose δ = ε/5.
Assume 0 < |x - 2| < δ = ε/5.
Then: |(5x - 4) - 6| = |5x - 10| = 5|x - 2| < 5(ε/5) = ε.
So by definition, lim_{x ⟶ 2} (5x - 4) = 6.

Example 2: Use the definition of the limit to prove that:
lim_{x ⟶ 4} (x² + x - 11) = 9

Solution:
Let ε > 0. We need to find δ > 0 such that:
|(x² + x - 11) - 9| < ε  whenever  0 < |x - 4| < δ.
|(x² + x - 11) - 9| = |x² + x - 20| = |(x + 5)(x - 4)| = |x + 5| |x - 4| < ε.
Unlike Example 1, we have an extra factor |x + 5| that we need to bound.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 39

ምሳሌ 1፡ በ ε-δ ትርጓሜ lim_{x ⟶ 2} (5x - 4) = 6 መሆኑን አረጋግጡ።
መፍትሔ፡
|(5x - 4) - 6| = |5x - 10| = 5|x - 2| < ε ⟹ |x - 2| < ε/5
δ = ε/5 ተብሎ ይመረጣል።
ማረጋገጫ፡ 0 < |x - 2| < ε/5 ቢሆን፡ |(5x - 4) - 6| = 5|x - 2| < 5(ε/5) = ε ይሆናል።

ምሳሌ 2፡ lim_{x ⟶ 4} (x² + x - 11) = 9 መሆኑን አረጋግጡ።
መፍትሔ፡
|(x² + x - 11) - 9| = |x² + x - 20| = |x + 5| |x - 4| < ε
እዚህ ጋር ተጨማሪውን |x + 5| መወሰን (Bound ማድረግ) ያስፈልጋል።`,
    formulas: [
      { name: 'Linear Bound Choice', formula: 'δ = ε / 5', explanation: 'Relationship between delta and epsilon for slope m = 5.' }
    ]
  },
  {
    pdfPageNumber: 40,
    bookPageLabel: 'Page 40',
    chapterNumber: 3,
    sectionRef: '3.1.2',
    titleEn: 'Bounding Strategies in Epsilon-Delta Proofs: δ = min{1, ε/10}',
    titleAm: 'የኤፕሲሎን-ዴልታ ወሰን መምረጫ ስልቶች፡ δ = min{1, ε/10}',
    subtopicEn: 'Bounding |x + 5| near x = 4, Choosing Auxiliary Radius 1, Proving 8 < x + 5 < 10, Minimum Function δ = min{1, ε/10}',
    subtopicAm: 'በ 4 ዙሪያ |x + 5|ን መወሰን፣ ረዳት ራዲየስ 1 መምረጥ፣ δ = min{1, ε/10} ማረጋገጥ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 3

To do this, let's note that if we can show |x + 5| < K for some number K, then:
|x + 5| |x - 4| < K |x - 4| < ε ⟹ |x - 4| < ε/K.

We are only concerned with what is happening around x = 4. It is safe to assume |x - 4| < 1:
-1 < x - 4 < 1 ⟹ 3 < x < 5.
Adding 5 to all parts gives:
8 < x + 5 < 10 ⟹ |x + 5| < 10. (So K = 10).
Then |x - 4| < ε/10.

So to this point we make two assumptions:
|x - 4| < 1  and  |x - 4| < ε/10.
We choose δ to be the smaller of the two:
δ = min{1, ε/10}.

By doing this, we guarantee that δ ≤ 1 and δ ≤ ε/10.
Now let's verify:
Let ε > 0 and choose δ = min{1, ε/10}.
Assume 0 < |x - 4| < δ.
Then |x - 4| < ε/10  and  |x - 4| < 1 ⟹ |x + 5| < 10.
Finally:
|(x² + x - 11) - 9| = |x + 5| |x - 4| < 10(ε/10) = ε.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 40

የ |x + 5|ን መጠን መወሰን፡
በ x = 4 ዙሪያ ስለምናጠና |x - 4| < 1 ብለን እንነሳለን፡
3 < x < 5 ⟹ 8 < x + 5 < 10 ⟹ |x + 5| < 10 (K = 10)
ስለዚህ |x - 4| < ε/10 መሆን አለበት።

ሁለቱንም እኩል ለማሟላት የሁለቱ ዝቅተኛ የሆነውን δ እንመርጣለን፡
δ = min{1, ε/10}

ማረጋገጫ፡
0 < |x - 4| < δ ከሆነ፡
|x + 5| |x - 4| < 10(ε/10) = ε ስለሚሆን ማረጋገጫው ተጠናቀቀ!`,
    formulas: [
      { name: 'Delta Minimum Rule', formula: 'δ = min{1, ε/10}', explanation: 'Guarantees both the local bound |x+5| < 10 and precision error tolerance ε.' }
    ]
  },
  {
    pdfPageNumber: 41,
    bookPageLabel: 'Page 41',
    chapterNumber: 3,
    sectionRef: '3.1.3',
    titleEn: 'Rational Limit Proof & Engineering Disk Manufacturing Application',
    titleAm: 'የራሽናል ፈንክሽን ማረጋገጫ እና የክብ ዲስክ ማምረቻ ምህንድስና ተግባራዊ ምሳሌ',
    subtopicEn: 'Proof of lim 2/(x+3) = 1/3 as x ⟶ 3 (δ = min{1, 15ε}), Industrial Circular Disk Error Tolerance ±5 cm²',
    subtopicAm: 'የ lim 2/(x+3) = 1/3 ማረጋገጫ፣ የ 1000 cm² የብረት ዲስክ ራዲየስ ስህተት ወሰን ±5 cm²',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 4

Example 3: Using the definition of limit prove that:
lim_{x ⟶ 3} (2 / (x + 3)) = 1/3

Solution:
Let ε > 0. We must find δ such that 0 < |x - 3| < δ ⟹ |2/(x + 3) - 1/3| < ε.
|2/(x + 3) - 1/3| = |(6 - (x + 3)) / (3(x + 3))| = |3 - x| / (3|x + 3|) = (1/3) (|x - 3| / |x + 3|).
Take δ₁ = 1, then |x - 3| < 1 ⟹ -1 < x - 3 < 1 ⟹ 2 < x < 4 ⟹ 5 < |x + 3| < 7.
Then 1/|x + 3| < 1/5.
Thus: (1/3) (|x - 3| / |x + 3|) < (1/15)|x - 3| < ε ⟺ |x - 3| < 15ε.
Choose δ = min{1, 15ε}.
Thus |f(x) - 1/3| < (1/15)(15ε) = ε. Therefore lim_{x ⟶ 3} 2/(x + 3) = 1/3.

Example 4: A machinist is required to manufacture a circular metal disk with area 1000 cm².
a) What radius produces such a disk?
b) If the machinist is allowed error tolerance of ±5 cm² in the area of the disk, how close to the ideal radius must the machinist control the radius?

Solution:
a) Area A = πr² = 1000 ⟹ r = √(1000/π) ≈ 17.84 cm.
b) Error tolerance ε = 5 cm². We want |A(r) - 1000| < 5.
Here a = 17.84, L = 1000.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 41

ምሳሌ 3፡ lim_{x ⟶ 3} 2/(x + 3) = 1/3 መሆኑን አረጋግጡ።
መፍትሔ፡
|2/(x + 3) - 1/3| = |x - 3| / (3|x + 3|)
|x - 3| < 1 ሲሆን 5 < |x + 3| < 7 ⟹ 1/|x + 3| < 1/5
ስለዚህ (1/15)|x - 3| < ε ⟹ |x - 3| < 15ε
δ = min{1, 15ε} ተብሎ ይመረጣል።

ምሳሌ 4 (የምህንድስና ተግባራዊ ምሳሌ)፡
ባለ 1000 cm² ስፋት ክብ የብረት ዲስክ ማምረት ተፈለገ፡
ሀ) የሚፈለገው ራዲየስ፡ r = √(1000/π) ≈ 17.84 ሴ.ሜ
ለ) የስፋት ስህተት ወሰን ±5 cm² (ε = 5) ቢፈቀድ ራዲየሱ በምን ያህል ልዩነት ውስጥ መቆጣጠር አለበት?`,
    formulas: [
      { name: 'Ideal Disk Radius', formula: 'r = √(A / π) = √(1000 / π) ≈ 17.84 cm', explanation: 'Target radius for circular disk.' }
    ]
  },
  {
    pdfPageNumber: 42,
    bookPageLabel: 'Page 42',
    chapterNumber: 3,
    sectionRef: '3.2',
    titleEn: 'Tolerance Radius Interval & 3.2 Basic Limit Theorems (Algebra of Limits)',
    titleAm: 'የራዲየስ መቻቻል ወሰን እና 3.2 መሰረታዊ የወሰን (ሊሚት) ቴዎረሞች',
    subtopicEn: 'Machinist δ = 0.043 cm, Radius Interval (17.797, 17.883), 5 Fundamental Limit Laws (Sum, Product, Quotient, Power)',
    subtopicAm: 'የዴልታ ስሌት δ = 0.043 ሴ.ሜ፣ 5ቱ የሊሚት አልጀብራ ህጎች (ድምር፣ ብዜት፣ ክፍፍል፣ ፓወር)',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 5

|f(r) - 1000| = |πr² - 1000| = π |r - √(1000/π)| |r + √(1000/π)| = π |r - 17.84| |r + 17.84|
Let δ₁ = 1 ⟹ |r - 17.84| < 1 ⟹ 16.84 < r < 18.84 ⟹ 34.68 < r + 17.84 < 36.68.
Then |f(r) - 1000| < 36.68π |r - 17.84| < ε = 5
⟹ |r - 17.84| < 5 / (36.68π) ≈ 0.043 cm.
Choose δ = min{1, 0.043} = 0.043 cm.
Thus to keep the ±5 cm² tolerance, the machinist must control the radius within ±0.043 cm of 17.84 cm:
Interval: (17.84 - 0.043, 17.84 + 0.043) = (17.797, 17.883) cm.

3.2 Basic Limit Theorems
Assume lim_{x ⟶ a} f(x) and lim_{x ⟶ a} g(x) exist and c is any constant:
1. lim_{x ⟶ a} c f(x) = c lim_{x ⟶ a} f(x)
2. lim_{x ⟶ a} [f(x) ± g(x)] = lim_{x ⟶ a} f(x) ± lim_{x ⟶ a} g(x)
3. lim_{x ⟶ a} [f(x) · g(x)] = lim_{x ⟶ a} f(x) · lim_{x ⟶ a} g(x)
4. lim_{x ⟶ a} [f(x) / g(x)] = [lim_{x ⟶ a} f(x)] / [lim_{x ⟶ a} g(x)], provided lim_{x ⟶ a} g(x) ≠ 0
5. lim_{x ⟶ a} [f(x)]ⁿ = [lim_{x ⟶ a} f(x)]ⁿ, for any real number n.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 42

የዲስክ ስሌት ማጠቃለያ፡
δ = 0.043 ሴ.ሜ
ዲስኩ በሚሰራበት ጊዜ ራዲየሱ (17.797, 17.883) ሴ.ሜ ክልል ውስጥ መቆየት አለበት።

3.2 መሰረታዊ የሊሚት ቴዎረሞች
lim f(x) እና lim g(x) ካሉ እና c ቋሚ ቁጥር ቢሆን፡
1. lim [c f(x)] = c lim f(x)
2. lim [f(x) ± g(x)] = lim f(x) ± lim g(x) (የድምር ህግ)
3. lim [f(x) g(x)] = lim f(x) · lim g(x) (የብዜት ህግ)
4. lim [f(x) / g(x)] = lim f(x) / lim g(x) (lim g(x) ≠ 0 ሲሆን)
5. lim [f(x)]ⁿ = [lim f(x)]ⁿ (የፓወር ህግ)`,
    formulas: [
      { name: 'Machinist Tolerance', formula: 'r ∈ (17.797, 17.883) cm', explanation: 'Radius interval ensuring area stays within 1000 ± 5 cm².' },
      { name: 'Quotient Law for Limits', formula: 'lim (f/g) = (lim f) / (lim g), lim g ≠ 0', explanation: 'Limit of quotient equals quotient of limits.' }
    ]
  },
  {
    pdfPageNumber: 43,
    bookPageLabel: 'Page 43',
    chapterNumber: 3,
    sectionRef: '3.3',
    titleEn: 'Limit Evaluations & 3.3 One-Sided Limits (Right-Hand and Left-Hand)',
    titleAm: 'የሊሚት ስሌቶች እና 3.3 የአንድ አቅጣጫ ወሰኖች (የቀኝ እና የግራ ሊሚቶች)',
    subtopicEn: 'Evaluating Indeterminate Limits by Factoring and Rationalizing, Definitions of lim_{x⟶a⁺} and lim_{x⟶a⁻}, Square Root Proof',
    subtopicAm: 'የ 0/0 ስሌቶችን ማቃለል፣ የቀኝና የግራ ሊሚት ትርጓሜ፣ የ lim_{x⟶0⁺} √x = 0 ማረጋገጫ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 6

Limit Evaluations:
a) lim_{x ⟶ 5} (2x² - 3x + 4) = 2(25) - 3(5) + 4 = 39
b) lim_{h ⟶ 0} ((3 + h)² - 9) / h = lim_{h ⟶ 0} (6h + h²) / h = lim_{h ⟶ 0} (6 + h) = 6
c) lim_{t ⟶ 0} (√(t² + 9) - 3) / t²:
Rationalize numerator by multiplying by (√(t² + 9) + 3):
= lim_{t ⟶ 0} (t² + 9 - 9) / (t² (√(t² + 9) + 3)) = lim_{t ⟶ 0} 1 / (√(t² + 9) + 3) = 1/6
d) lim_{x ⟶ -1} (x² + 2x + 1) / (x⁴ - 1) = lim_{x ⟶ -1} (x + 1)² / ((x² - 1)(x² + 1))
= lim_{x ⟶ -1} (x + 1) / ((x - 1)(x² + 1)) = 0 / ((-2)(2)) = 0.

3.3 One-Sided Limits
Definition 1 (Right-hand limit):
lim_{x ⟶ a⁺} f(x) = L  if for every ε > 0 there is δ > 0 such that |f(x) - L| < ε whenever 0 < x - a < δ (or a < x < a + δ).

Definition 2 (Left-hand limit):
lim_{x ⟶ a⁻} f(x) = L  if for every ε > 0 there is δ > 0 such that |f(x) - L| < ε whenever -δ < x - a < 0 (or a - δ < x < a).

Example: Use definition of limit to prove lim_{x ⟶ 0⁺} √x = 0.
Solution: Let ε > 0. We need δ > 0 such that |√x - 0| < ε whenever 0 < x < δ.
√x < ε ⟺ x < ε². Choose δ = ε².
Then 0 < x < ε² ⟹ |√x - 0| = √x < √(ε²) = ε.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 43

የሊሚት ስሌት ምሳሌዎች፡
a) lim_{x ⟶ 5} (2x² - 3x + 4) = 39
b) lim_{h ⟶ 0} ((3 + h)² - 9) / h = 6
c) lim_{t ⟶ 0} (√(t² + 9) - 3) / t² = 1/6 (በኮንጁጌት በማባዛት)
d) lim_{x ⟶ -1} (x² + 2x + 1) / (x⁴ - 1) = 0

3.3 የአንድ አቅጣጫ ወሰኖች (One-Sided Limits)፡
ትርጓሜ 1 (የቀኝ ሊሚት lim_{x ⟶ a⁺} f(x) = L)፡
ለማንኛውም ε > 0፣ a < x < a + δ በሚሆንበት ጊዜ |f(x) - L| < ε የሚያደርግ δ > 0 ሲኖር።

ትርጓሜ 2 (የግራ ሊሚት lim_{x ⟶ a⁻} f(x) = L)፡
ለማንኛውም ε > 0፣ a - δ < x < a በሚሆንበት ጊዜ |f(x) - L| < ε የሚያደርግ δ > 0 ሲኖር።

ምሳሌ፡ lim_{x ⟶ 0⁺} √x = 0 መሆኑን አረጋግጡ።
መፍትሔ፡ δ = ε² በመምረጥ 0 < x < ε² ⟹ √x < ε ይሆናል።`,
    formulas: [
      { name: 'Right-Hand Limit', formula: 'lim_{x ⟶ a⁺} f(x) = L', explanation: 'Limit approaching from values strictly greater than a.' },
      { name: 'Left-Hand Limit', formula: 'lim_{x ⟶ a⁻} f(x) = L', explanation: 'Limit approaching from values strictly less than a.' }
    ]
  },
  {
    pdfPageNumber: 44,
    bookPageLabel: 'Page 44',
    chapterNumber: 3,
    sectionRef: '3.4',
    titleEn: '3.4 Infinite Limits, Limits at Infinity and Asymptotes',
    titleAm: '3.4 ወሰን-አልባ ሊሚቶች፣ በወሰን-አልባ ላይ ያሉ ሊሚቶች እና አሲምፕቶቶች',
    subtopicEn: 'Formal Definitions of lim f(x) = ±∞, Proof of lim(1/x²) = ∞ as x ⟶ 0 (δ = 1/√M), Graphical Intuition',
    subtopicAm: 'የ lim f(x) = ±∞ ፎርማል ትርጓሜ፣ የ lim(1/x²) = ∞ ማረጋገጫ (δ = 1/√M)፣ ጂኦሜትሪያዊ ምስል',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 7

3.4 Infinite Limits, Limit at infinity and Asymptotes
Definition 1: Let f(x) be a function defined on an interval containing a, except possibly at a. Then we say that:
lim_{x ⟶ a} f(x) = ∞
if for every number M > 0 there is some number δ > 0 such that:
f(x) > M  whenever  0 < |x - a| < δ.

Definition 2: We say that:
lim_{x ⟶ a} f(x) = -∞
if for every number N < 0 there is some number δ > 0 such that:
f(x) < N  whenever  0 < |x - a| < δ.

Geometric interpretation:
No matter how large we choose M to be, we can always find an interval around x = a, given by 0 < |x - a| < δ, so that the graph of f(x) stays above the horizontal line y = M.

Example: Use the definition of the limit to prove:
lim_{x ⟶ 0} (1 / x²) = ∞

Solution:
Let M > 0 be any number. We need to choose δ > 0 such that:
1/x² > M  whenever  0 < |x - 0| < δ.
1/x² > M ⟺ x² < 1/M ⟺ |x| < 1/√M.
Choose δ = 1/√M.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 44

3.4 ወሰን-አልባ ሊሚቶች እና አሲምፕቶቶች
ትርጓሜ 1፡ lim_{x ⟶ a} f(x) = ∞ የሚባለው፡
ለማንኛውም ትልቅ አዎንታዊ ቁጥር M > 0፣ 0 < |x - a| < δ በሚሆንበት ጊዜ f(x) > M የሚያደርግ δ > 0 ሲገኝ ነው።

ትርጓሜ 2፡ lim_{x ⟶ a} f(x) = -∞ የሚባለው፡
ለማንኛውም አሉታዊ ቁጥር N < 0፣ f(x) < N የሚያደርግ δ > 0 ሲገኝ ነው።

ምሳሌ፡ lim_{x ⟶ 0} (1 / x²) = ∞ መሆኑን አረጋግጡ።
መፍትሔ፡
1/x² > M ⟺ |x| < 1/√M
ስለዚህ δ = 1/√M ተብሎ ይመረጣል።`,
    formulas: [
      { name: 'Infinite Limit Definition', formula: '∀M > 0, ∃δ > 0: 0 < |x - a| < δ ⟹ f(x) > M', explanation: 'Mathematical formulation of unbounded growth near a.' }
    ]
  },
  {
    pdfPageNumber: 45,
    bookPageLabel: 'Page 45',
    chapterNumber: 3,
    sectionRef: '3.4.1',
    titleEn: 'Vertical & Horizontal Asymptotes Definitions and Rational Root Example',
    titleAm: 'የቋሚ እና አግድም አሲምፕቶቶች ትርጓሜ እና የራሽናል ፈንክሽን ምሳሌ',
    subtopicEn: 'Vertical Asymptote Test x = a, Horizontal Asymptote Test y = L, Asymptotes of f(x) = √(4x²+1)/(2x - 4)',
    subtopicAm: 'የቋሚ አሲምፕቶት ቀመር፣ የአግድም አሲምፕቶት ቀመር፣ የ f(x) = √(4x²+1)/(2x-4) አሲምፕቶቶች',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 8

Verification for 1/x²:
Let M > 0, choose δ = 1/√M. Assume 0 < |x| < 1/√M.
Then x² < 1/M ⟹ 1/x² > M. Thus lim_{x ⟶ 0} (1/x²) = ∞.

Definition (Vertical Asymptote):
The line x = a is called a vertical asymptote of the graph of y = f(x) if any one of the following limits holds true:
lim_{x ⟶ a⁺} f(x) = ±∞  or  lim_{x ⟶ a⁻} f(x) = ±∞  or  lim_{x ⟶ a} f(x) = ±∞.
Example: x = 0 is the vertical asymptote of f(x) = 1/x².

Limit at Infinity and Horizontal Asymptotes:
Definition:
i. Let f be defined on (a, ∞). Then lim_{x ⟶ ∞} f(x) = L if for every ε > 0 there is M > 0 such that x > M implies |f(x) - L| < ε.
ii. Let f be defined on (-∞, a). Then lim_{x ⟶ -∞} f(x) = L if for every ε > 0 there is M < 0 such that x < M implies |f(x) - L| < ε.

Definition (Horizontal Asymptote):
The line y = L is called a horizontal asymptote if either:
lim_{x ⟶ ∞} f(x) = L  or  lim_{x ⟶ -∞} f(x) = L.
Example: y = 0 is horizontal asymptote of f(x) = 1/x.

Example: Find the vertical and horizontal asymptotes of:
f(x) = √(4x² + 1) / (2x - 4)
Solution:
Denominator is zero when 2x - 4 = 0 ⟹ x = 2.
lim_{x ⟶ 2⁺} √(4x² + 1) / (2x - 4) = √17 / 0⁺ = +∞.
Thus x = 2 is the vertical asymptote.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 45

ቋሚ አሲምፕቶት (Vertical Asymptote)፡
x ወደ a በቀኝ ወይም በግራ ሲጠጋ ሊሚቱ ±∞ ከሆነ x = a ቋሚ አሲምፕቶት ይባላል።
ምሳሌ፡ x = 0 ለ f(x) = 1/x² ቋሚ አሲምፕቶት ነው።

አግድም አሲምፕቶት (Horizontal Asymptote)፡
x ወደ ∞ ወይም ወደ -∞ ሲጠጋ የፈንክሽኑ ሊሚት L ከሆነ y = L አግድም አሲምፕቶት ይባላል።

ምሳሌ፡ የ f(x) = √(4x² + 1) / (2x - 4) አሲምፕቶቶች፡
2x - 4 = 0 ሲሆን x = 2 ቋሚ አሲምፕቶት ነው።`,
    formulas: [
      { name: 'Vertical Asymptote', formula: 'lim_{x ⟶ a^±} f(x) = ±∞ ⟹ x = a', explanation: 'Vertical line where function values become unbounded.' },
      { name: 'Horizontal Asymptote', formula: 'lim_{x ⟶ ±∞} f(x) = L ⟹ y = L', explanation: 'Horizontal line that the curve approaches at extreme values of x.' }
    ]
  },
  {
    pdfPageNumber: 46,
    bookPageLabel: 'Page 46',
    chapterNumber: 3,
    sectionRef: '3.4.2',
    titleEn: 'Horizontal Asymptotes Evaluation & Soil Mechanics Engineering Stress Limit',
    titleAm: 'የአግድም አሲምፕቶት ስሌት እና የአፈር ሜካኒክስ ምህንድስና የጭንቀት ሊሚት',
    subtopicEn: 'Dual Horizontal Asymptotes y = 1 and y = -1, Geotechnical Soil Particle Stress Formula Δσ_z, Depth & Radial Limits',
    subtopicAm: 'ሁለቱ አግድም አሲምፕቶቶች y = 1 እና y = -1፣ በአፈር ውስጥ የጭንቀት ቀመር ሊሚት ስሌት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 9

To find the horizontal asymptotes of f(x) = √(4x² + 1) / (2x - 4):
For x > 0: √(4x² + 1) = |x| √(4 + 1/x²) = x √(4 + 1/x²)
lim_{x ⟶ ∞} [x √(4 + 1/x²)] / [x (2 - 4/x)] = lim_{x ⟶ ∞} √(4 + 1/x²) / (2 - 4/x) = √4 / 2 = 1.

For x < 0: |x| = -x:
lim_{x ⟶ -∞} [-x √(4 + 1/x²)] / [x (2 - 4/x)] = -√4 / 2 = -1.
Thus the lines y = 1 and y = -1 are horizontal asymptotes of f(x).

Engineering Example (Geotechnical Mechanics):
The increase in vertical stress Δσ_z on a soil element located at depth z vertically down due to a point load Q applied at radial distance r is given by:
Δσ_z = (3Q / (2π z²)) [1 / (1 + (r/z)²)]^(5/2)  (Muni Budhu, p. 136)

Discuss the stress effect on a soil particle:
a) When depth z increases for constant radial distance r:
lim_{z ⟶ ∞} Δσ_z = lim_{z ⟶ ∞} (3Q / (2π z²)) [1 / (1 + (r/z)²)]^(5/2) = 0 · 1 = 0.
As depth increases, the additional stress effect on the soil particle vanishes.

b) When radial distance r increases at a constant depth z:
lim_{r ⟶ ∞} Δσ_z = lim_{r ⟶ ∞} (3Q / (2π z²)) (z/r)⁵ [1 / (1 + (z/r)²)]^(5/2) = lim_{r ⟶ ∞} (3Q z³ / (2π r⁵)) = 0.
As we consider a particle farther radially from the point load, the induced stress approaches zero.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 46

የአግድም አሲምፕቶቶች ስሌት፡
x ⟶ ∞ ሲሆን፡ ሊሚቱ 1 ነው ⟹ y = 1
x ⟶ -∞ ሲሆን፡ ሊሚቱ -1 ነው ⟹ y = -1

የምህንድስና ምሳሌ (የአፈር ሜካኒክስ)፡
በአፈር ላይ ከሚጫን ሸክም Q የተነሳ በ z ጥልቀትና በ r ርቀት ላይ ያለ ጭንቀት (Stress)፡
Δσ_z = (3Q / (2π z²)) [1 / (1 + (r/z)²)]^(5/2)

ሀ) ጥልቀቱ z በጣም ሲጨምር፡
lim_{z ⟶ ∞} Δσ_z = 0 (ጥልቀቱ በጨመረ ቁጥር የሸክሙ ተፅዕኖ ወደ ዜሮ ይጠጋል)።
ለ) ርቀቱ r በጣም ሲጨምር፡
lim_{r ⟶ ∞} Δσ_z = 0 (ከሸክሙ መነሻ በራቅን ቁጥር ጭንቀቱ ወደ ዜሮ ይጠጋል)።`,
    formulas: [
      { name: 'Boussinesq Soil Stress Formula', formula: 'Δσ_z = (3Q / 2πz²) [1 + (r/z)²]^(-5/2)', explanation: 'Vertical normal stress distribution in semi-infinite elastic soil mass.' }
    ]
  },
  {
    pdfPageNumber: 47,
    bookPageLabel: 'Page 47',
    chapterNumber: 3,
    sectionRef: '3.5',
    titleEn: '3.5 Continuity of a Function at a Point & Solved Examples',
    titleAm: '3.5 የአንድ ፈንክሽን ቀጣይነት በአንድ ነጥብ ላይ እና የተሰሩ ምሳሌዎች',
    subtopicEn: '3 Conditions for Continuity at x = a, Continuous Rational Function, Continuous Trigonometric Function, Removable Discontinuity',
    subtopicAm: '3ቱ የቀጣይነት መስፈርቶች፣ ቀጣይ ራሽናል ፈንክሽን፣ ቀጣይ ትሪጎኖሜትሪክ ፈንክሽን፣ ተነጣጣይ አለመቀጠል',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 10

3.5 Continuity of a function; One sided continuity; Intermediate Value Theorem
Continuity of function
Definition:
A function f(x) is said to be continuous at x = a if:
lim_{x ⟶ a} f(x) = f(a)

Note: For the above definition one should check the following 3 conditions:
a) f(a) is defined (a is in the domain of f)
b) lim_{x ⟶ a} f(x) exists
c) lim_{x ⟶ a} f(x) = f(a)

If f is not continuous at a, then we say that f is discontinuous at a.

Examples:
1. f(x) = x / (x + 3) is continuous at 2 because:
lim_{x ⟶ 2} x / (x + 3) = 2 / 5 = f(2).

2. g(x) = { 3 (sin 2x) / (6x),  if x ≠ 0
         { 1,                  if x = 0
is continuous at 0 because:
lim_{x ⟶ 0} 3 (sin 2x) / (6x) = 3 (2/6) = 1 = g(0).

3. f(x) = { (x² - x - 2) / (x - 2),  if x ≠ 2
         { 1,                      if x = 2
is discontinuous at 2 because:
lim_{x ⟶ 2} (x - 2)(x + 1) / (x - 2) = 2 + 1 = 3 ≠ 1 = f(2).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 47

3.5 የፈንክሽን ቀጣይነት (Continuity of a Function)
ትርጓሜ፡ አንድ ፈንክሽን f(x) በነጥብ x = a ላይ ቀጣይ (Continuous) የሚባለው፡
lim_{x ⟶ a} f(x) = f(a) ሲሆን ነው።

3ቱ የቀጣይነት መስፈርቶች፡
ሀ) f(a) የተተነተነ መሆን አለበት (Domain ውስጥ ያለ)
ለ) lim_{x ⟶ a} f(x) መኖር አለበት
ሐ) lim_{x ⟶ a} f(x) = f(a) እኩል መሆን አለባቸው

ምሳሌዎች፡
1. f(x) = x / (x + 3) በ 2 ላይ ቀጣይ ነው፤ lim = 2/5 = f(2)
2. g(x) በ 0 ላይ ቀጣይ ነው፤ lim = 1 = g(0)
3. f(x) በ 2 ላይ ቀጣይ አይደለም (Discontinuous)፤ ምክንያቱም lim = 3 ሆኖ f(2) = 1 ስለሆነ እኩል አይደሉም።`,
    formulas: [
      { name: 'Continuity 3-Part Definition', formula: 'f(a) defined ∧ lim_{x⟶a} f(x) exists ∧ lim_{x⟶a} f(x) = f(a)', explanation: 'Necessary and sufficient condition for continuity at a point.' }
    ]
  },
  {
    pdfPageNumber: 48,
    bookPageLabel: 'Page 48',
    chapterNumber: 3,
    sectionRef: '3.5.1',
    titleEn: 'One-Sided Continuity & Continuity on Open and Closed Intervals',
    titleAm: 'የአንድ አቅጣጫ ቀጣይነት እና በክፍትና ዝግ ክልሎች ላይ ያለ ቀጣይነት',
    subtopicEn: 'Right-Continuity, Left-Continuity, Continuity on (a, b), [a, b), (a, b], and [a, b], Semi-circle Function √(1 - x²)',
    subtopicAm: 'የቀኝ ቀጣይነት፣ የግራ ቀጣይነት፣ በ [a, b] ላይ ቀጣይ የመሆን ትርጓሜ፣ የ f(x) = √(1-x²) ቀጣይነት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 11

One sided continuity
Definition:
(a) A function f is said to be continuous from the right at a if:
lim_{x ⟶ a⁺} f(x) = f(a)
(b) A function f is said to be continuous from the left at a if:
lim_{x ⟶ a⁻} f(x) = f(a)

Example: Discuss the one-sided continuity of f(x) = √(1 - x²).
Solution:
lim_{x ⟶ -1⁺} √(1 - x²) = 0 = f(-1)
lim_{x ⟶ 1⁻} √(1 - x²) = 0 = f(1)
Hence f is continuous to the right of -1 and to the left of 1.

Continuity on Intervals
Definition:
1. A function f is continuous on (a, b) if it is continuous ∀c ∈ (a, b).
2. A function f is continuous on [a, b) if:
a) ∀c ∈ (a, b), f is continuous at c
b) lim_{x ⟶ a⁺} f(x) = f(a) (continuous from the right at a).
3. A function f is continuous on (a, b] if:
a) ∀c ∈ (a, b), f is continuous at c
b) lim_{x ⟶ b⁻} f(x) = f(b) (continuous from the left at b).
4. A function f is continuous on [a, b] if:
a) ∀c ∈ (a, b), f is continuous at c
b) lim_{x ⟶ a⁺} f(x) = f(a)
c) lim_{x ⟶ b⁻} f(x) = f(b)`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 48

የአንድ አቅጣጫ ቀጣይነት (One Sided Continuity)፡
(ሀ) የቀኝ ቀጣይነት፡ lim_{x ⟶ a⁺} f(x) = f(a)
(ለ) የግራ ቀጣይነት፡ lim_{x ⟶ a⁻} f(x) = f(a)

ምሳሌ፡ f(x) = √(1 - x²) ከ -1 በስተቀኝ እና ከ 1 በስተግራ ቀጣይ ነው።

በክልሎች ላይ ቀጣይነት (Continuity on Intervals)፡
1. በ (a, b) ክፍት ክልል ላይ፡ በሁሉም c ∈ (a, b) ላይ ቀጣይ ሲሆን።
2. በ [a, b] ዝግ ክልል ላይ፡
- በውስጠኛው ክፍት ክልል (a, b) ላይ ቀጣይ ሲሆን
- በ a ላይ ከቀኝ ቀጣይ ሲሆን (lim_{x ⟶ a⁺} = f(a))
- በ b ላይ ከግራ ቀጣይ ሲሆን (lim_{x ⟶ b⁻} = f(b))`,
    formulas: [
      { name: 'Continuity on Closed Interval', formula: 'Continuous on (a,b) ∧ lim_{x⟶a⁺} f(x)=f(a) ∧ lim_{x⟶b⁻} f(x)=f(b)', explanation: 'Complete definition of continuity across closed bounded interval [a,b].' }
    ]
  },
  {
    pdfPageNumber: 49,
    bookPageLabel: 'Page 49',
    chapterNumber: 3,
    sectionRef: '3.5.2',
    titleEn: 'Continuity Theorems & Gravitational Force Piecewise Continuity Problem',
    titleAm: 'የቀጣይነት ቴዎረሞች እና የፕላኔት ስበት ሀይል ቀጣይነት ምሳሌ',
    subtopicEn: 'Composite Function Continuity lim f(g(x)) = f(lim g(x)), Continuity of Standard Functions, Piecewise Gravitational Force F(r)',
    subtopicAm: 'የተደራራቢ ፈንክሽን ቀጣይነት፣ የመደበኛ ፈንክሽኖች ቀጣይነት፣ የመሬት ስበት ሀይል F(r) ቀጣይነት ጥናት',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 12

Examples:
The function f(x) = √(1 - x²) is continuous on [-1, 1].
The function f(x) = √(x - 3) is continuous on [3, ∞).

Theorems on Continuity:
1. If f(x) is continuous at x = b and lim_{x ⟶ a} g(x) = b, then:
lim_{x ⟶ a} f(g(x)) = f(lim_{x ⟶ a} g(x)) = f(b).
Example: Evaluate lim_{x ⟶ 0} e^(sin x):
lim_{x ⟶ 0} e^(sin x) = e^(lim_{x ⟶ 0} sin x) = e⁰ = 1.

2. If f and g are continuous at a, and c is a constant, then f + g, f - g, cf, and f/g (where g(a) ≠ 0) are also continuous at a.

3. Polynomials, rational functions, root functions, trigonometric functions, inverse trigonometric functions, exponential functions, and logarithmic functions are continuous on their domains.

Example (Physics):
According to scientific finding, the gravitational force exerted by the Earth on a unit mass at a distance r from the center of the planet is:
F(r) = { (G M r) / R³,  r < R  (inside Earth)
       { (G M) / r²,    r ≥ R  (outside Earth)
where M and R are the mass and radius of the Earth respectively and G is the gravitational constant.
Is F a continuous function of r?`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 49

የቀጣይነት ቴዎረሞች፡
1. f በ b ላይ ቀጣይ ሆኖ lim g(x) = b ከሆነ፡ lim f(g(x)) = f(lim g(x))
ምሳሌ፡ lim_{x ⟶ 0} e^(sin x) = e⁰ = 1

2. f እና g ቀጣይ ከሆኑ f + g፣ f - g፣ c f እና f/g (g(a) ≠ 0) ቀጣይ ናቸው።
3. ፖሊኖሚያሎች፣ ራሽናል፣ ትሪጎኖሜትሪክ፣ ኤክስፖኔንሺያል እና ሎጋሪዝሚክ ፈንክሽኖች በዶሜይናቸው ላይ በሙሉ ቀጣይ ናቸው።

የፊዚክስ ምሳሌ (የስበት ሀይል)፡
በመሬት ማዕከል በ r ርቀት ላይ ያለ ስበት ሀይል፡
F(r) = { GMr / R³  (r < R ሲሆን)
       { GM / r²   (r ≥ R ሲሆን)
F(r) ቀጣይ ፈንክሽን ነውን?`,
    formulas: [
      { name: 'Composite Continuity', formula: 'lim f(g(x)) = f(lim g(x))', explanation: 'Allows passing limits inside continuous functions.' }
    ]
  },
  {
    pdfPageNumber: 50,
    bookPageLabel: 'Page 50',
    chapterNumber: 3,
    sectionRef: '3.5.3',
    titleEn: 'Gravitational Force Solution, Parameter Tuning & Intermediate Value Theorem (IVT)',
    titleAm: 'የስበት ሀይል ቀጣይነት ማረጋገጫ፣ የፓራሜትር ስሌት እና መካከለኛ ዋጋ ቴዎረም (IVT)',
    subtopicEn: 'Proof of Continuity at Earth Surface r = R, Finding Constants a and b for Global Continuity, IVT Statement',
    subtopicAm: 'በምድር ገጽ r = R ላይ የቀጣይነት ማረጋገጫ፣ የ a እና b ዋጋ መፈለግ፣ የ IVT ቴዎረም ትርጓሜ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 13

Solution (Gravitational force):
The function F is clearly continuous for 0 < r < R and r > R. The only place where discontinuity is suspected is at r = R.
lim_{r ⟶ R⁺} F(r) = lim_{r ⟶ R⁺} (GM / r²) = GM / R²
lim_{r ⟶ R⁻} F(r) = lim_{r ⟶ R⁻} (GMr / R³) = GM(R) / R³ = GM / R²
F(R) = GM / R²
Since lim_{r ⟶ R⁺} F(r) = lim_{r ⟶ R⁻} F(r) = F(R) = GM / R², the function is continuous at R.
This implies that the gravitational force extremely close to the surface beneath is the same as close to the surface above.

Example: Find the constants a and b so that f is continuous everywhere:
f(x) = { ax + 3,  x < 1
       { 4,       x = 1
       { x² + b,  x > 1
Solution:
Continuity at 1 requires lim_{x ⟶ 1⁻} f(x) = lim_{x ⟶ 1⁺} f(x) = f(1) = 4:
lim_{x ⟶ 1⁻} (ax + 3) = a + 3 = 4 ⟹ a = 1.
lim_{x ⟶ 1⁺} (x² + b) = 1 + b = 4 ⟹ b = 3.

Intermediate Value Theorem (IVT)
Theorem: Let f be continuous on [a, b] and let M be any number between f(a) and f(b), where f(a) ≠ f(b). Then there exists at least one number c in (a, b) such that:
f(c) = M

Example: Show that p(x) = 2x³ - 5x² - 10x + 5 has a root in the interval [-1, 2].`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 50

የስበት ሀይል መፍትሔ፡
lim_{r ⟶ R⁺} F(r) = GM / R²
lim_{r ⟶ R⁻} F(r) = GM / R²
F(R) = GM / R²
ስለዚህ F(r) በ r = R ላይ ቀጣይ ነው!

ምሳሌ፡ f በሁሉም ቦታ ቀጣይ እንዲሆን የ a እና b ዋጋ ፈልጉ፡
lim_{x ⟶ 1⁻} (ax + 3) = a + 3 = 4 ⟹ a = 1
lim_{x ⟶ 1⁺} (x² + b) = 1 + b = 4 ⟹ b = 3

የመካከለኛ ዋጋ ቴዎረም (Intermediate Value Theorem - IVT)፡
f በ [a, b] ላይ ቀጣይ ቢሆን እና M በ f(a) እና f(b) መሃል ያለ ማንኛውም ቁጥር ቢሆን፣ f(c) = M የሚያደርግ ቢያንስ አንድ ቁጥር c በ (a, b) ውስጥ ይገኛል።

ምሳሌ፡ p(x) = 2x³ - 5x² - 10x + 5 በ [-1, 2] ውስጥ ስር (Root) እንዳለው አሳዩ።`,
    formulas: [
      { name: 'Intermediate Value Theorem', formula: 'f continuous on [a,b], M between f(a) and f(b) ⟹ ∃c ∈ (a,b): f(c) = M', explanation: 'Guarantees that continuous functions take on every intermediate value.' }
    ]
  },
  {
    pdfPageNumber: 51,
    bookPageLabel: 'Page 51',
    chapterNumber: 3,
    sectionRef: '3.5.4',
    titleEn: 'IVT Polynomial Root Proof & Camera Flash Capacitor Recharging Application',
    titleAm: 'የ IVT ፖሊኖሚያል ስር ማረጋገጫ እና የካሜራ ፍላሽ ካፓሲተር ቻርጅ ተግባራዊ ምሳሌ',
    subtopicEn: 'Root of p(x) on [-1, 2] (p(-1)=8, p(2)=-19), Exponential Capacitor Recharging Model Q(t) = Q₀(1 - e^(-t/a)), 90% Threshold',
    subtopicAm: 'የ p(x) ስር በ [-1, 2] ማረጋገጫ፣ የካፓሲተር ቻርጅ ሞዴል Q(t) = Q₀(1 - e^(-t/a))',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 14

Solution (Polynomial Root):
Compute p(-1) and p(2):
p(-1) = 2(-1)³ - 5(-1)² - 10(-1) + 5 = -2 - 5 + 10 + 5 = 8.
p(2) = 2(2)³ - 5(2)² - 10(2) + 5 = 16 - 20 - 20 + 5 = -19.
Hence -19 = p(2) < 0 < p(-1) = 8.
Therefore M = 0 is between p(-1) and p(2).
Since p(x) is a polynomial, it is continuous everywhere, and in particular on [-1, 2].
So by the Intermediate Value Theorem, there must be a number -1 < c < 2 such that p(c) = 0. Therefore the polynomial has a root between -1 and 2 (numerically c ≈ 0.425).

Engineering Application (Electronics):
When a camera flash goes off, the batteries immediately begin to recharge the flash's capacitor, which stores electric charge given by:
Q(t) = Q₀ (1 - e^(-t/a))
(Maximum charge capacity = Q₀ in Coulombs and time t in seconds).

Show that it takes between 3 and 5 seconds to recharge the capacitor to 90% of capacity if a = 2.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 51

የፖሊኖሚያል ስር መፍትሔ፡
p(-1) = 8 > 0 እና p(2) = -19 < 0
0 በ -19 እና 8 መሃል ስለሚገኝ፣ በ IVT መሰረት p(c) = 0 የሚያደርግ c በ [-1, 2] ውስጥ አለ! (በቁጥር c ≈ 0.425)

የኤሌክትሮኒክስ ምሳሌ (የካሜራ ፍላሽ ቻርጅ)፡
የካሜራ ፍላሽ ሲተኮስ ባትሪው ካፓሲተሩን ቻርጅ የሚያደርገው በቀጣዩ ቀመር ነው፡
Q(t) = Q₀ (1 - e^(-t/a))
a = 2 ቢሆን ካፓሲተሩ 90% ቻርጅ ለመሙላት ከ 3 እስከ 5 ሰከንድ እንደሚፈጅበት በ IVT አሳዩ።`,
    formulas: [
      { name: 'Capacitor Charging Formula', formula: 'Q(t) = Q₀(1 - e^(-t/a))', explanation: 'Exponential RC charging curve.' }
    ]
  },
  {
    pdfPageNumber: 52,
    bookPageLabel: 'Page 52',
    chapterNumber: 3,
    sectionRef: '3.5.5',
    titleEn: 'Capacitor Recharging Time Solution via IVT & Exact Logarithmic Verification',
    titleAm: 'የካፓሲተር ቻርጅ ጊዜ በ IVT መፍትሔ እና የሎጋሪዝም ማረጋገጫ',
    subtopicEn: 'Evaluating f(3) < 0 and f(5) > 0, IVT Root Confirmation in (3, 5), Exact Time t = -2 ln(0.1) ≈ 4.605 Seconds',
    subtopicAm: 'f(3) < 0 እና f(5) > 0 ስሌት፣ በ (3, 5) ውስጥ ስር መኖር፣ ትክክለኛ ሰከንድ t = 4.605 ሰከንድ',
    pageType: 'content',
    contentEn: `Addis Ababa Science and Technology University (AASTU)
Department of Mathematics
Chapter 3: Page 15

Solution (Capacitor Recharge):
Q(t) = Q₀ (1 - e^(-t/2)) ⟹ 90% Q₀ = Q₀ (1 - e^(-t/2))
⟹ 0.9 = 1 - e^(-t/2) ⟹ 0.1 - e^(-t/2) = 0.

Thus, take f(t) = 0.1 - e^(-t/2).
f(t) is continuous for all t because exponential functions are continuous.
Evaluate f(3) and f(5):
f(3) = 0.1 - e^(-3/2) = 0.1 - e^(-1.5) ≈ 0.1 - 0.223 = -0.123 < 0.
f(5) = 0.1 - e^(-5/2) = 0.1 - e^(-2.5) ≈ 0.1 - 0.082 = 0.018 > 0.

Since 0 is between f(3) and f(5) and f is continuous on [3, 5], by the Intermediate Value Theorem there exists a time t in (3, 5) such that f(t) = 0.
Thus, the time to recharge 90% of its maximum charge is between 3 and 5 seconds.

Note (Exact Solution):
0.1 - e^(-t/2) = 0 ⟹ e^(-t/2) = 0.1
⟹ -t/2 = ln(0.1) ⟹ t = -2 ln(0.1) = 2 ln(10) ≈ 4.605 seconds.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 52

የካፓሲተር መፍትሔ፡
0.9 = 1 - e^(-t/2) ⟹ f(t) = 0.1 - e^(-t/2)
f(3) = 0.1 - e^(-1.5) ≈ -0.123 < 0
f(5) = 0.1 - e^(-2.5) ≈ 0.018 > 0
f(3) < 0 < f(5) ስለሆነ በመካከለኛ ዋጋ ቴዎረም (IVT) መሰረት f(t) = 0 የሚያደርግ t በ 3 እና 5 ሰከንድ መሃል አለ!

ትክክለኛ ጊዜ ስሌት፡
e^(-t/2) = 0.1 ⟹ t = -2 ln(0.1) ≈ 4.605 ሰከንድ።`,
    formulas: [
      { name: 'Exact Recharge Time', formula: 't = -2 ln(0.1) ≈ 4.605 s', explanation: 'Analytic logarithmic solution for 90% charge.' }
    ]
  }
];
