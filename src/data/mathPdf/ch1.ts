import { OfficialPdfPage } from './types';

export const mathCh1Pages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 1,
    bookPageLabel: 'Page 1',
    chapterNumber: 1,
    sectionRef: '1.1',
    titleEn: 'Chapter 1: Vectors and Vector Spaces — 1.1 Scalar and Vectors in ℝ² and ℝ³',
    titleAm: 'ምዕራፍ 1፡ ቬክተሮች እና የቬክተር ስፔሶች — 1.1 እስካላር እና ቬክተሮች በ ℝ² እና ℝ³',
    subtopicEn: 'Definitions of Scalars, Vectors, Equal Vectors, Located Vectors, Position Vectors, and Parallel/Collinear Vectors',
    subtopicAm: 'የእስካላር፣ የቬክተር፣ የእኩል ቬክተሮች፣ የቦታ ቬክተሮች እና ትይዩ/ኮሊኒየር ቬክተሮች ትርጓሜ',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 1

CHAPTER ONE
VECTORS AND VECTOR SPACES

1.1. Scalar and vectors in ℝ² and ℝ³

Definitions:
a) A scalar is a physical quantity that is described by its magnitude only.
For example, temperature, length, and speed are scalars because they are completely described by a number that tells "how much" — say a temperature of 20°C, a length of 5 cm, or a speed of 10 m/s.

b) A vector is a physical quantity that is described using both magnitude and its direction.
For instance, velocity, displacement, and force are some examples of vectors.

Vectors in ℝ² and ℝ³:
A vector in the plane ℝ² can be described as u⃗ = (u₁, u₂), where u₁, u₂ ∈ ℝ.
Similarly, a vector in the space ℝ³ can be described as a triple of numbers v⃗ = (v₁, v₂, v₃) where v₁, v₂, v₃ ∈ ℝ.

EQUAL (OR EQUIVALENT) VECTORS:
Definition: Two vectors u⃗ and v⃗ in ℝ² / ℝ³ are said to be equal (or equivalent) if they have the same magnitude and direction, and is denoted by u⃗ = v⃗.
That is, if u⃗ = (u₁, u₂), v⃗ = (v₁, v₂) in ℝ², u⃗ = v⃗ iff u₁ = v₁ and u₂ = v₂.

Definitions:
1. A located vector is a vector AB⃗ defined as an arrow whose initial point is at point A and whose terminal point is at B.
2. Position vector is a vector whose initial point is at the origin.

Definition (Parallel / collinear Vectors):
Two non-zero vectors u⃗ and v⃗ of the same dimension are said to be parallel or, alternatively, collinear if at least one of the vectors is a scalar multiple of the other.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 1

ምዕራፍ አንድ
ቬክተሮች እና የቬክተር ስፔሶች

1.1. እስካላር እና ቬክተሮች በ ℝ² እና ℝ³

ትርጓሜዎች፡
ሀ) እስካላር (Scalar) በመጠኑ (Magnitude) ብቻ የሚገለጽ አካላዊ መጠን ነው።
ለምሳሌ፡ የሙቀት መጠን፣ ርዝመት እና ፍጥነት እስካላሮች ናቸው፤ ምክንያቱም ምን ያህል እንደሆነ በሚገልጽ ቁጥር ብቻ ሙሉ በሙሉ ይገለጻሉ — ለምሳሌ 20°C፣ 5 ሴ.ሜ፣ ወይም 10 ሜ/ሰ።

ለ) ቬክተር (Vector) በመጠኑም ሆነ በአቅጣጫው (Direction) የሚገለጽ አካላዊ መጠን ነው።
ለምሳሌ፡ ፍጥነት (Velocity)፣ መፈናቀል (Displacement) እና ጉልበት (Force) የቬክተር ምሳሌዎች ናቸው።

ቬክተሮች በ ℝ² እና ℝ³፡
በጠለል ℝ² ውስጥ ያለ ቬክተር u⃗ = (u₁, u₂) ተብሎ ይገለጻል፣ u₁, u₂ ∈ ℝ።
በተመሳሳይ በጠፈር ℝ³ ውስጥ ያለ ቬክተር v⃗ = (v₁, v₂, v₃) ተብሎ በሶስት ቁጥሮች ይገለጻል፣ v₁, v₂, v₃ ∈ ℝ።

እኩል ቬክተሮች (Equal Vectors)፡
ሁለት ቬክተሮች u⃗ እና v⃗ በ ℝ² ወይም ℝ³ እኩል የሚባሉት እኩል መጠን እና አንድ አይነት አቅጣጫ ሲኖራቸው ነው (u⃗ = v⃗)። ይኸውም u₁ = v₁ እና u₂ = v₂ ሲሆን ነው።

ትርጓሜዎች፡
1. የተወሰነ ቬክተር (Located Vector)፡ መነሻው ነጥብ A ላይ እና መድረሻው ነጥብ B ላይ የሆነ ቀስት AB⃗ ነው።
2. የቦታ ቬክተር (Position Vector)፡ መነሻው መነሻ ነጥብ (Origin) ላይ የሆነ ቬክተር ነው።
3. ትይዩ ወይም ኮሊኒየር ቬክተሮች፡ አንዱ ቬክተር የሌላኛው እስካላር ብዜት ሲሆን ነው።`,
    formulas: [
      { name: 'Vector in ℝ²', formula: 'u⃗ = (u₁, u₂), u₁, u₂ ∈ ℝ', explanation: 'Ordered pair representing a vector in 2D Euclidean space.' },
      { name: 'Vector in ℝ³', formula: 'v⃗ = (v₁, v₂, v₃), v₁, v₂, v₃ ∈ ℝ', explanation: 'Ordered triple representing a vector in 3D Euclidean space.' },
      { name: 'Equality of Vectors', formula: 'u⃗ = v⃗ ⟺ u₁ = v₁ and u₂ = v₂', explanation: 'Vectors are equal if and only if their corresponding components are equal.' }
    ]
  },
  {
    pdfPageNumber: 2,
    bookPageLabel: 'Page 2',
    chapterNumber: 1,
    sectionRef: '1.2',
    titleEn: '1.2 Vector Addition and Scalar Multiplication — Triangular & Parallelogram Laws',
    titleAm: '1.2 የቬክተር ድምር እና የእስካላር ብዜት — የሶስት ማዕዘን እና የፓራሌሎግራም ህጎች',
    subtopicEn: 'Scalar Multiples, Zero Vector Conventions, Vector Sum Definition, Triangular Law, Parallelogram Law',
    subtopicAm: 'የእስካላር ብዜት፣ የዜሮ ቬክተር ባህሪያት፣ የቬክተር ድምር፣ የሶስት ማዕዘን ህግ፣ የፓራሌሎግራም ህግ',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 2

If one of the vectors is a positive scalar multiple of the other, then the vectors are said to have the same direction, and if one of them is a negative scalar multiple of the other, then the vectors are said to have opposite directions. In other words, the two vectors u⃗ and v⃗ are said to be parallel, denoted by u⃗ // v⃗ if there exists a scalar c such that u⃗ = c v⃗.

REMARK:
1. The vector 0 is parallel to every vector v in the same dimension, since it can be expressed as the scalar multiple 0 = 0v.
2. The zero vector has no natural direction, so we will agree that it can be assigned any direction that is convenient for the problem at hand.

Definition: For any u⃗ = (u₁, u₂) and c ∈ ℝ, we define c u⃗ as c u⃗ = (c u₁, c u₂).

1.2. Vector addition and Scalar multiplication
Definition: For any two vectors u⃗ = (u₁, u₂) and v⃗ = (v₁, v₂) in ℝ², we define their sum to be:
u⃗ + v⃗ = (u₁ + v₁, u₂ + v₂)

Geometrically, if we represent the two vectors u⃗ and v⃗ by AB⃗ and BC⃗ respectively, then u⃗ + v⃗ is represented by AC⃗, as shown in the diagram:
AB⃗ + BC⃗ = AC⃗

a) The Triangular Law:
Connecting vector U from A to B and vector V from B to C produces resultant U+V from A to C.

b) The Parallelogram Law:
Placing vectors U and V with a common initial point A forms adjacent sides of parallelogram ABCD, where diagonal AC represents U+V = V+U.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 2

አንዱ ቬክተር የሌላኛው አዎንታዊ (Positive) እስካላር ብዜት ከሆነ ሁለቱ ቬክተሮች አንድ አይነት አቅጣጫ አላቸው፤ አሉታዊ (Negative) ብዜት ከሆነ ደግሞ ተቃራኒ አቅጣጫ አላቸው። በሌላ አነጋገር u⃗ = c v⃗ የሚያደርግ እስካላር c ካለ u⃗ // v⃗ (ትይዩ) ይባላሉ።

ማስታወሻ፡
1. የዜሮ ቬክተር 0 = 0v ተብሎ ሊጻፍ ስለሚችል በዚያው ዳይሜንሽን ላለ ለማንኛውም ቬክተር v ትይዩ ነው።
2. የዜሮ ቬክተር የተፈጥሮ አቅጣጫ ስለሌለው ለስሌት አመቺ የሆነ ማንኛውም አቅጣጫ ሊሰጠው ይችላል።

ትርጓሜ፡ ለማንኛውም u⃗ = (u₁, u₂) እና c ∈ ℝ፣ c u⃗ = (c u₁, c u₂) ተብሎ ይተረጎማል።

1.2. የቬክተር ድምር እና የእስካላር ብዜት
ትርጓሜ፡ ለማናቸውም ሁለት ቬክተሮች u⃗ = (u₁, u₂) እና v⃗ = (v₁, v₂) በ ℝ² ውስጥ፣ ድምራቸው፡
u⃗ + v⃗ = (u₁ + v₁, u₂ + v₂)

በጂኦሜትሪ፡ u⃗ እና v⃗ በ AB⃗ እና BC⃗ ቢወከሉ፣ ድምራቸው በ AC⃗ ይወከላል፡
AB⃗ + BC⃗ = AC⃗

ሀ) የሶስት ማዕዘን ህግ (Triangular Law)፡
ቬክተር U ከ A ወደ B፣ ቬክተር V ከ B ወደ C ሲቀጠል ውጤቱ U+V ከ A ወደ C ይሆናል።

ለ) የፓራሌሎግራም ህግ (Parallelogram Law)፡
ቬክተሮች U እና V ከአንድ መነሻ ነጥብ ሲነሱ የፓራሌሎግራም ጎኖች ይሆናሉ፤ ሰያፉ (Diagonal) ድምራቸውን U+V = V+U ይወክላል።`,
    formulas: [
      { name: 'Scalar Multiplication', formula: 'c u⃗ = (c u₁, c u₂)', explanation: 'Multiplication of vector components by real scalar c.' },
      { name: 'Vector Addition in ℝ²', formula: 'u⃗ + v⃗ = (u₁ + v₁, u₂ + v₂)', explanation: 'Component-wise addition of vectors.' },
      { name: 'Triangular Law', formula: 'AB⃗ + BC⃗ = AC⃗', explanation: 'Geometric resultant vector formed by head-to-tail addition.' }
    ]
  },
  {
    pdfPageNumber: 3,
    bookPageLabel: 'Page 3',
    chapterNumber: 1,
    sectionRef: '1.2.1',
    titleEn: 'Vector Addition on Coordinate Plane, Vector Subtraction & Solved Examples',
    titleAm: 'የቬክተር ድምር በኮኦርዲኔት ጠለል፣ የቬክተር መቀነስ እና የተሰሩ ምሳሌዎች',
    subtopicEn: 'Component Operations in ℝ², Negative Vector, Vector Difference w - v = w + (-v), 3D Vectors Example',
    subtopicAm: 'በ ℝ² ውስጥ የክፍሎች ስሌት፣ አሉታዊ ቬክተር፣ የቬክተር ልዩነት፣ በ ℝ³ የተሰሩ ምሳሌዎች',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 3

Addition of vectors on the coordinate plane:
Let v⃗ = (v₁, v₂) and w⃗ = (w₁, w₂), then:
v⃗ + w⃗ = (v₁ + w₁, v₂ + w₂)

Vector Subtraction:
The negative of a vector v, denoted by -v, is the vector that has the same length as v but is oppositely directed, and the difference of v from w, denoted by w - v, is taken to be the sum:
w - v = w + (-v)

Example: Provided that U = (-1, 0, 1) and V = (2, -1, 5), find each of the following vectors:
a) U + V
b) 2U
c) V - 2U

Solution:
a) U + V = (-1, 0, 1) + (2, -1, 5) = (-1 + 2, 0 + (-1), 1 + 5) = (1, -1, 6)
b) 2U = 2(-1, 0, 1) = (2(-1), 2(0), 2(1)) = (-2, 0, 2)
c) V - 2U = (2, -1, 5) - 2(-1, 0, 1) = (2, -1, 5) - (-2, 0, 2) = (2 - (-2), -1 - 0, 5 - 2) = (4, -1, 3)`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 3

በኮኦርዲኔት ጠለል ላይ የቬክተር ድምር፡
v⃗ = (v₁, v₂) እና w⃗ = (w₁, w₂) ቢሆኑ፡
v⃗ + w⃗ = (v₁ + w₁, v₂ + w₂)

የቬክተር መቀነስ (Vector Subtraction)፡
የቬክተር v ተቃራኒ (-v) ተብሎ የሚጠራው ከ v ጋር እኩል ርዝመት ያለው ሆኖ አቅጣጫው ተቃራኒ የሆነ ቬክተር ነው። የ w እና v ልዩነት (w - v) ድምራቸው ተደርጎ ይወሰዳል፡
w - v = w + (-v)

ምሳሌ፡ U = (-1, 0, 1) እና V = (2, -1, 5) ቢሰጡ የሚከተሉትን ፈልጉ፡
ሀ) U + V
ለ) 2U
ሐ) V - 2U

መፍትሔ፡
ሀ) U + V = (-1, 0, 1) + (2, -1, 5) = (1, -1, 6)
ለ) 2U = 2(-1, 0, 1) = (-2, 0, 2)
ሐ) V - 2U = (2, -1, 5) - 2(-1, 0, 1) = (2, -1, 5) - (-2, 0, 2) = (4, -1, 3)`,
    formulas: [
      { name: 'Vector Subtraction', formula: 'w⃗ - v⃗ = w⃗ + (-v⃗)', explanation: 'Subtracting vector v is adding its negative.' },
      { name: 'Linear Combination', formula: 'V - 2U = (4, -1, 3)', explanation: 'Step-by-step vector arithmetic in 3D.' }
    ]
  },
  {
    pdfPageNumber: 4,
    bookPageLabel: 'Page 4',
    chapterNumber: 1,
    sectionRef: '1.3',
    titleEn: 'Properties of Vector Operations & 1.3 Dot Product, Magnitude and Norm',
    titleAm: 'የቬክተር ስሌት ባህሪያት እና 1.3 ዶት ፕሮዳክት፣ መጠን እና ኖርም',
    subtopicEn: 'Axioms of Vector Addition & Scalar Multiplication in ℝ² and ℝ³, Sums of Three or More Vectors, Definition of Norm',
    subtopicAm: 'የቬክተር ድምርና የእስካላር ብዜት ህጎች፣ የሶስት እና ከዚያ በላይ ቬክተሮች ድምር፣ የኖርም (ርዝመት) ትርጓሜ',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 4

Properties of Vector addition & Scalar Multiplication:
Let u⃗, v⃗ and w⃗ be vectors in ℝ² and c & m are scalars. Then:
a) u⃗ + v⃗ ∈ ℝ² (Closure under addition)
b) u⃗ + v⃗ = v⃗ + u⃗ (Commutative law)
c) u⃗ + 0⃗ = 0⃗ + u⃗ = u⃗, where 0⃗ = (0,0) ∈ ℝ² (Additive identity)
d) There exists w⃗ ∈ ℝ² such that u⃗ + w⃗ = 0⃗ for every u⃗ ∈ ℝ² (Additive inverse, w⃗ = -u⃗)
e) u⃗ + (v⃗ + w⃗) = (u⃗ + v⃗) + w⃗ (Associative law)
f) c (m u⃗) = (cm) u⃗ (Scalar associative law)
g) (c + m) u⃗ = c u⃗ + m u⃗ (Distributive over scalar addition)
h) 1 · u⃗ = u⃗ (Unitary property)

Remark: The properties described above also hold true for vectors in ℝ³, where 0⃗ = (0, 0, 0) ∈ ℝ³ replaces the zero vector 0⃗ in ℝ².

SUMS OF THREE OR MORE VECTORS:
Polygon law of vector addition: Vectors can be added sequentially head-to-tail in 2D and 3D space.

1.3. Dot (Scalar) product, Magnitude of a vector, Angle between two Vectors, Orthogonal Projection, Direction angles and direction cosines.

1.3.1. Dot (Scalar) Product
Definition: Let v⃗ = (v₁, v₂, v₃) be a vector in ℝ³. Then the magnitude (norm) of v⃗, denoted by ‖v⃗‖ is defined by:
‖v⃗‖² = v₁² + v₂² + v₃²`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 4

የቬክተር ድምር እና የእስካላር ብዜት ባህሪያት፡
u⃗፣ v⃗ እና w⃗ በ ℝ² ውስጥ ያሉ ቬክተሮች እንዲሁም c እና m እስካላሮች ቢሆኑ፡
ሀ) u⃗ + v⃗ ∈ ℝ² (የድምር ዝግ-ባህሪ)
ለ) u⃗ + v⃗ = v⃗ + u⃗ (ቅያሪ ህግ)
ሐ) u⃗ + 0⃗ = 0⃗ + u⃗ = u⃗፣ 0⃗ = (0,0) (የድምር ማንነት)
መ) u⃗ + w⃗ = 0⃗ የሚያደርግ w⃗ = -u⃗ አለ (ተቃራኒ)
ሠ) u⃗ + (v⃗ + w⃗) = (u⃗ + v⃗) + w⃗ (ተጣማሪ ህግ)
ረ) c (m u⃗) = (cm) u⃗ (የእስካላር ማባዛት ተጣማሪነት)
ሰ) (c + m) u⃗ = c u⃗ + m u⃗ (የእስካላር ድምር ማከፋፈል)
ሸ) 1 · u⃗ = u⃗

ማስታወሻ፡ እነዚህ ባህሪያት በ ℝ³ ውስጥም 0⃗ = (0, 0, 0) በመተካት ሙሉ በሙሉ ይሰራሉ።

1.3. ዶት (እስካላር) ፕሮዳክት፣ የቬክተር መጠን፣ በሁለት ቬክተሮች መሃል ያለ አንግል፣ ፕሮጀክሽን እና ዳይሬክሽን ኮሳይኖች

1.3.1. ዶት ፕሮዳክት እና መጠን (Norm)
ትርጓሜ፡ v⃗ = (v₁, v₂, v₃) በ ℝ³ ውስጥ ያለ ቬክተር ቢሆን፣ መጠኑ (ኖርም) ‖v⃗‖ በሚከተለው ይገለጻል፡
‖v⃗‖² = v₁² + v₂² + v₃²`,
    formulas: [
      { name: 'Norm Squared in ℝ³', formula: '‖v⃗‖² = v₁² + v₂² + v₃²', explanation: 'Squared Euclidean magnitude of a 3-dimensional vector.' },
      { name: 'Vector Axioms', formula: 'u⃗ + v⃗ = v⃗ + u⃗, c(u⃗+v⃗) = cu⃗+cv⃗', explanation: 'Foundational axioms establishing vector space structure.' }
    ]
  },
  {
    pdfPageNumber: 5,
    bookPageLabel: 'Page 5',
    chapterNumber: 1,
    sectionRef: '1.3.1',
    titleEn: 'Norm of a Vector, Theorems, Unit Vectors & Distance Formula',
    titleAm: 'የቬክተር ኖርም፣ ቴዎረሞች፣ ዩኒት ቬክተር እና የርቀት ቀመር',
    subtopicEn: 'Euclidean Norm Formula in ℝ² and ℝ³, Theorem ‖cv‖ = |c|‖v‖ Proof, Unit Vector Definition, Distance d(P,Q)',
    subtopicAm: 'የዩክሊድ ኖርም በ ℝ² እና ℝ³፣ የ ‖cv‖ = |c|‖v‖ ማረጋገጫ፣ የዩኒት ቬክተር ትርጓሜ፣ የርቀት ስሌት',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 5

‖v⃗‖² = (OR)² + (PR)² = (OQ)² + (QR)² + (PR)²
‖v⃗‖ = √(v₁² + v₂² + v₃²)

Similarly, for a vector v⃗ = (v₁, v₂) ∈ ℝ², its norm is given by:
‖v⃗‖ = √(v₁² + v₂²)

Examples:
a) If v⃗ = (-1, 4, 3), then find ‖v⃗‖:
‖v⃗‖ = √((-1)² + 4² + 3²) = √(1 + 16 + 9) = √26

b) If ‖u⃗‖ = 6, find x such that u⃗ = (-1, x, 5):
‖u⃗‖ = √((-1)² + x² + 5²) = √(26 + x²) = 6
⟹ 26 + x² = 36 ⟹ x² = 10 ⟹ x = ±√10

Remarks:
(i) ‖v⃗‖ ≠ 0 if v⃗ ≠ 0
(ii) ‖v⃗‖ = ‖-v⃗‖

Theorem: If c ∈ ℝ, then ‖c v⃗‖ = |c| ‖v⃗‖.
Proof: Suppose that v⃗ ∈ ℝⁿ, then:
‖c v⃗‖ = √((c v₁)² + (c v₂)² + ··· + (c vₖ)²)
= √(c² [(v₁)² + (v₂)² + ··· + (vₖ)²])
= |c| ‖v⃗‖

Definition (Unit Vector):
Any vector u⃗ satisfying ‖u⃗‖ = 1 is called a unit vector.
Examples: The vectors (0,1), (-1,0), (1/√2, -1/√2), (1,0,0) are examples of unit vectors.

N.B:
1. All unit vectors in ℝ² are of the form (cos θ, sin θ), where θ ∈ ℝ.
2. For any non-zero vector v⃗, the unit vector û corresponding to v⃗ in the direction of v⃗ can be obtained as:
û = v⃗ / ‖v⃗‖
3. For two points P(u₁, u₂) and Q(v₁, v₂) on the plane ℝ², we calculate the distance d(P, Q) between the two points as:
d(P, Q) = ‖PQ⃗‖ = √((v₁ - u₁)² + (v₂ - u₂)²)` ,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 5

‖v⃗‖ = √(v₁² + v₂² + v₃²)
በተመሳሳይ በ ℝ² ውስጥ፡ ‖v⃗‖ = √(v₁² + v₂²)

ምሳሌዎች፡
ሀ) v⃗ = (-1, 4, 3) ቢሆን ‖v⃗‖ = √((-1)² + 4² + 3²) = √26
ለ) ‖u⃗‖ = 6 ሆኖ u⃗ = (-1, x, 5) ቢሆን x = ±√10 ይሆናል።

ማስታወሻዎች፡
(i) v⃗ ≠ 0 ከሆነ ‖v⃗‖ ≠ 0
(ii) ‖v⃗‖ = ‖-v⃗‖

ቴዎረም፡ c ∈ ℝ ከሆነ ‖c v⃗‖ = |c| ‖v⃗‖
ማረጋገጫ፡ ‖c v⃗‖ = √((cv₁)² + ··· + (cvₖ)²) = √c² √(v₁² + ··· + vₖ²) = |c| ‖v⃗‖

የዩኒት ቬክተር ትርጓሜ (Unit Vector)፡
ርዝመቱ ወይም ኖርሙ 1 የሆነ ማንኛውም ቬክተር (‖u⃗‖ = 1) ዩኒት ቬክተር ይባላል።
ምሳሌ፡ (0,1)፣ (-1,0)፣ (1/√2, -1/√2)፣ (1,0,0) የዩኒት ቬክተር ምሳሌዎች ናቸው።

ልብ ይበሉ፡
1. በ ℝ² ያሉ ዩኒት ቬክተሮች በሙሉ በ (cos θ, sin θ) መልክ ይጻፋሉ።
2. ዜሮ ላልሆነ ለማንኛውም v⃗፣ በ v⃗ አቅጣጫ ያለው ዩኒት ቬክተር û = v⃗ / ‖v⃗‖ ነው።
3. የሁለት ነጥቦች P እና Q ርቀት d(P, Q) = √((v₁ - u₁)² + (v₂ - u₂)²)` ,
    formulas: [
      { name: 'Norm in ℝ³', formula: '‖v⃗‖ = √(v₁² + v₂² + v₃²)', explanation: 'Length of vector v in 3D Euclidean space.' },
      { name: 'Unit Vector Normalization', formula: 'û = v⃗ / ‖v⃗‖', explanation: 'Unit vector obtained by dividing vector by its norm.' },
      { name: 'Distance Formula', formula: 'd(P, Q) = ‖PQ⃗‖ = √((v₁-u₁)² + (v₂-u₂)²)', explanation: 'Euclidean distance between two coordinate points.' }
    ]
  },
  {
    pdfPageNumber: 6,
    bookPageLabel: 'Page 6',
    chapterNumber: 1,
    sectionRef: '1.3.2',
    titleEn: '1.3.2 The Dot Product (or Scalar Product) & Algebraic Properties',
    titleAm: '1.3.2 ዶት (እስካላር) ፕሮዳክት እና አልጀብራዊ ባህሪያቱ',
    subtopicEn: 'Geometric Definition u · v = ‖u‖‖v‖ cos θ, Component Definition in ℝ² and ℝ³, Maximum/Minimum Values, Properties',
    subtopicAm: 'የዶት ፕሮዳክት ጂኦሜትሪያዊና የክፍሎች ቀመር፣ ከፍተኛና ዝቅተኛ እሴቶች፣ ባህሪያት',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 6

d(P, Q) = ‖PQ⃗‖ = √((v₁ - u₁)² + (v₂ - u₂)²),
where PQ⃗ is the vector with initial point P and terminal point Q, PQ⃗ = (v₁ - u₁, v₂ - u₂).
4. Distance between two vectors can be viewed as the length of U - V where U = (u₁, u₂) and V = (v₁, v₂).

1.3.2. The Dot Product (or Scalar Product)
Definition: Suppose that u⃗ = (u₁, u₂) and v⃗ = (v₁, v₂) are vectors in ℝ², and that θ ∈ [0, π] represents the angle between them. We define the dot product of u⃗ and v⃗ denoted by u⃗ · v⃗ by:
u⃗ · v⃗ = u₁v₁ + u₂v₂

Or alternatively, we write:
u⃗ · v⃗ = ‖u⃗‖ ‖v⃗‖ cos θ, if u⃗ ≠ 0 & v⃗ ≠ 0; and 0 if u⃗ = 0 or v⃗ = 0.
Thus: ‖u⃗‖ ‖v⃗‖ cos θ = u₁v₁ + u₂v₂, for non-zero vectors u⃗ and v⃗ in ℝ².

Similarly, if u⃗ = (u₁, u₂, u₃) and v⃗ = (v₁, v₂, v₃) are vectors in ℝ³, we define u⃗ · v⃗ as below:
u⃗ · v⃗ = u₁v₁ + u₂v₂ + u₃v₃

Remark: The dot product of two vectors is a scalar quantity, and its value is maximum when θ = 0° and minimum if θ = 180° or π radians.

Example: If u⃗ = i - 2j + 3k and v⃗ = ⟨0, 1, -5⟩, then find:
a) u⃗ · v⃗ = (1)(0) + (-2)(1) + (3)(-5) = 0 - 2 - 15 = -17
b) u⃗ · u⃗ = 1² + (-2)² + 3² = 1 + 4 + 9 = 14 = ‖u⃗‖²
c) (u⃗ + v⃗) · v⃗: u⃗ + v⃗ = ⟨1, -1, -2⟩; (u⃗ + v⃗) · v⃗ = (1)(0) + (-1)(1) + (-2)(-5) = -1 + 10 = 9

Properties of the dot product:
If u⃗, v⃗, and w⃗ are vectors in the same dimension, and c ∈ ℝ, then:
1. u⃗ · u⃗ = ‖u⃗‖²
4. 0⃗ · u⃗ = 0`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 6

1.3.2. ዶት (እስካላር) ፕሮዳክት
ትርጓሜ፡ u⃗ = (u₁, u₂) እና v⃗ = (v₁, v₂) በ ℝ² ውስጥ ያሉ ቬክተሮች ቢሆኑ እና θ በመካከላቸው ያለ አንግል (θ ∈ [0, π]) ቢሆን፣ ዶት ፕሮዳክቱ u⃗ · v⃗ በሚከተለው ይገለጻል፡
u⃗ · v⃗ = u₁v₁ + u₂v₂

በሌላ አገላለጽ፡
u⃗ · v⃗ = ‖u⃗‖ ‖v⃗‖ cos θ (u⃗ ≠ 0 እና v⃗ ≠ 0 ሲሆኑ)
ስለሆነም፡ ‖u⃗‖ ‖v⃗‖ cos θ = u₁v₁ + u₂v₂

በተመሳሳይ በ ℝ³ ውስጥ፡
u⃗ · v⃗ = u₁v₁ + u₂v₂ + u₃v₃

ማስታወሻ፡ የሁለት ቬክተሮች ዶት ፕሮዳክት እስካላር (ቁጥር) ሲሆን፣ ዋጋው ከፍተኛ የሚሆነው θ = 0° ሲሆን እና ዝቅተኛ የሚሆነው θ = 180° (π ራዲያን) ሲሆን ነው።

ምሳሌ፡ u⃗ = i - 2j + 3k እና v⃗ = ⟨0, 1, -5⟩ ቢሆኑ፡
ሀ) u⃗ · v⃗ = -17
ለ) u⃗ · u⃗ = 14 = ‖u⃗‖²
ሐ) (u⃗ + v⃗) · v⃗ = 9

የዶት ፕሮዳክት ባህሪያት፡
1. u⃗ · u⃗ = ‖u⃗‖²
4. 0⃗ · u⃗ = 0`,
    formulas: [
      { name: 'Dot Product (Geometric)', formula: 'u⃗ · v⃗ = ‖u⃗‖ ‖v⃗‖ cos θ', explanation: 'Dot product defined using vector magnitudes and angle θ.' },
      { name: 'Dot Product (Algebraic in ℝ³)', formula: 'u⃗ · v⃗ = u₁v₁ + u₂v₂ + u₃v₃', explanation: 'Sum of the products of corresponding components.' },
      { name: 'Magnitude-Dot Relation', formula: 'u⃗ · u⃗ = ‖u⃗‖²', explanation: 'Dot product of a vector with itself equals the square of its norm.' }
    ]
  },
  {
    pdfPageNumber: 7,
    bookPageLabel: 'Page 7',
    chapterNumber: 1,
    sectionRef: '1.3.3',
    titleEn: '1.3.3 Angle Between Two Vectors, Orthogonality, Pythagoras Theorem & 1.3.4 Orthogonal Projection',
    titleAm: '1.3.3 በሁለት ቬክተሮች መሃል ያለ አንግል፣ ኦርቶጎናሊቲ፣ የፓይታጎረስ ቴዎረም እና 1.3.4 ኦርቶጎናል ፕሮጀክሽን',
    subtopicEn: 'Formula cos θ = (u·v)/(‖u‖‖v‖), Orthogonal Vectors (u·v = 0), Pythagoras Theorem for Vectors, Vector Projection proj_A B',
    subtopicAm: 'የአንግል ስሌት ቀመር፣ ኦርቶጎናል (ቀጤ-ነክ) ቬክተሮች፣ የፓይታጎረስ ቴዎረም፣ የቬክተር ፕሮጀክሽን',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 7

2. u⃗ · v⃗ = v⃗ · u⃗ (Commutative)
3. u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗ (Distributive)
5. (c u⃗) · v⃗ = c (u⃗ · v⃗) = u⃗ · (c v⃗)
6. u⃗ · u⃗ ≥ 0 and u⃗ · u⃗ = 0 iff u⃗ = 0⃗.

1.3.3. Angle between two vectors
If θ is the angle between two non-zero vectors u⃗ and v⃗, then, the angle between the two vectors can be obtained by:
cos θ = (u⃗ · v⃗) / (‖u⃗‖ ‖v⃗‖) ⟹ θ = cos⁻¹((u⃗ · v⃗) / (‖u⃗‖ ‖v⃗‖)), and θ ∈ [0, π].

Exercise: Find the angle between the vectors u⃗ = ⟨1, 0, -1⟩ and v⃗ = (1, 1, 0).

Definition: Two non-zero vectors u⃗ and v⃗ are said to be orthogonal (perpendicular) iff u⃗ · v⃗ = 0, i.e., if θ = π/2.

Example: Find the value(s) of x such that the vectors A = (1, 4, 3) and B = (x, -1, 2) are orthogonal.
Solution: A · B = 0 ⟹ (1)(x) + (4)(-1) + (3)(2) = 0 ⟹ x - 4 + 6 = 0 ⟹ x = -2.

Definition: If P and Q are points in 2 or 3 spaces, the distance between P and Q, denoted by ‖P - Q‖ is given by:
‖P - Q‖ = √((P - Q) · (P - Q))

Theorem: Given two vectors u⃗ & v⃗ in space, ‖u⃗ + v⃗‖ = ‖u⃗ - v⃗‖ iff u⃗ and v⃗ are orthogonal vectors.

Pythagoras Theorem: If A and B are orthogonal vectors, then:
‖A + B‖² = ‖A‖² + ‖B‖²

Note: If A is perpendicular to B, then it is also perpendicular to any scalar multiple of B.

1.3.4. Orthogonal Projection
Definition: Suppose S is the foot of the perpendicular from R to the line containing PQ⃗, then the vector with representation PS⃗ is called the vector projection of B onto A, and is denoted by proj_A B.
proj_A B = PS⃗ = t A ⟹ B - proj_A B = SR⃗ ⟹ (B - proj_A B) · A = 0 ⟹ (B - t A) · A = 0 ⟹ B · A - t A · A = 0`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 7

2. u⃗ · v⃗ = v⃗ · u⃗
3. u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗
5. (c u⃗) · v⃗ = c (u⃗ · v⃗)
6. u⃗ · u⃗ ≥ 0 እና u⃗ · u⃗ = 0 የሚሆነው u⃗ = 0⃗ ሲሆን ብቻ ነው።

1.3.3. በሁለት ቬክተሮች መሃል ያለ አንግል
cos θ = (u⃗ · v⃗) / (‖u⃗‖ ‖v⃗‖) ⟹ θ = cos⁻¹((u⃗ · v⃗) / (‖u⃗‖ ‖v⃗‖))

ኦርቶጎናል (ቀጤ-ነክ) ቬክተሮች፡
ሁለት ዜሮ ያልሆኑ ቬክተሮች ቀጤ-ነክ (Orthogonal) የሚባሉት u⃗ · v⃗ = 0 (θ = π/2 ወይም 90°) ሲሆን ነው።

ምሳሌ፡ A = (1, 4, 3) እና B = (x, -1, 2) ኦርቶጎናል ቢሆኑ የ x ዋጋ ስንት ነው?
መፍትሔ፡ A · B = x - 4 + 6 = 0 ⟹ x = -2

የፓይታጎረስ ቴዎረም ለቬክተሮች፡
A እና B ኦርቶጎናል ከሆኑ፡ ‖A + B‖² = ‖A‖² + ‖B‖²

1.3.4. ኦርቶጎናል ፕሮጀክሽን (Orthogonal Projection)
የቬክተር B በ A ላይ ያለው ፕሮጀክሽን proj_A B ይባላል።`,
    formulas: [
      { name: 'Angle Between Vectors', formula: 'cos θ = (u⃗ · v⃗) / (‖u⃗‖ ‖v⃗‖)', explanation: 'Determines the acute or obtuse angle between two vectors.' },
      { name: 'Orthogonality Condition', formula: 'u⃗ · v⃗ = 0 ⟺ u⃗ ⊥ v⃗', explanation: 'Vectors are perpendicular if their dot product is zero.' },
      { name: 'Pythagorean Theorem for Vectors', formula: '‖A + B‖² = ‖A‖² + ‖B‖²', explanation: 'Valid if and only if A and B are orthogonal.' }
    ]
  },
  {
    pdfPageNumber: 8,
    bookPageLabel: 'Page 8',
    chapterNumber: 1,
    sectionRef: '1.3.5',
    titleEn: 'Vector and Scalar Projections & 1.3.5 Directional Angles and Direction Cosines',
    titleAm: 'የቬክተር እና እስካላር ፕሮጀክሽን እና 1.3.5 ዳይሬክሽናል አንግሎች እና ኮሳይኖች',
    subtopicEn: 'proj_A B Formula, comp_A B Formula, Examples, Direction Cosines cos²α + cos²β + cos²γ = 1',
    subtopicAm: 'የፕሮጀክሽን ስሌት ቀመር፣ የዳይሬክሽን ኮሳይኖች ቀመር እና ማረጋገጫ',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 8

⟹ t = (A · B) / ‖A‖² ⟹ proj_A B = PS⃗ = t A = ((A · B) / ‖A‖²) A

The scalar projection of B onto A (also called the component of B along A) is defined to be the length of proj_A B, which is equal to ‖B‖ cos θ and is denoted by comp_A B:
Thus:
proj_A B = ((A · B) / ‖A‖) (A / ‖A‖) = ((A · B) / ‖A‖²) A
and:
comp_A B = ‖proj_A B‖ = (A · B) / ‖A‖

Example: Let A = (-1, 3, 1) = -i + 3j + k and B = (2, 4, 3) = 2i + 4j + 3k.
Then find:
(i) proj_B A: A · B = (-1)(2) + (3)(4) + (1)(3) = -2 + 12 + 3 = 13
‖B‖² = 2² + 4² + 3² = 4 + 16 + 9 = 29
proj_B A = (13/29) B = (13/29)(2, 4, 3)
(ii) proj_A B: ‖A‖² = (-1)² + 3² + 1² = 1 + 9 + 1 = 11
proj_A B = (13/11) A = (13/11)(-1, 3, 1)
(iii) comp_A B = (A · B) / ‖A‖ = 13 / √11

1.3.5. Directional angles and cosines
Let A = a₁i + a₂j + a₃k be a vector positioned at the origin in ℝ³, making an angle of α, β and γ with the positive x, y and z axes respectively. Then the angles α, β and γ are called the directional angles of A, and the quantities cos α, cos β and cos γ are called the directional cosines of A, which can be computed as follows:
cos α = (A · i) / (‖A‖ ‖i‖) = a₁ / ‖A‖
cos β = (A · j) / (‖A‖ ‖j‖) = a₂ / ‖A‖
cos γ = (A · k) / (‖A‖ ‖k‖) = a₃ / ‖A‖

From this relation we can deduce a unit vector:
A / ‖A‖ = (cos α, cos β, cos γ) is a unit vector.
Remark: cos²α + cos²β + cos²γ = 1. (Verify!)

Exercise: Let A = (-1, 2, 2). Then find the directional cosines of A.
Solution: ‖A‖ = √((-1)² + 2² + 2²) = √9 = 3.
cos α = -1/3, cos β = 2/3, cos γ = 2/3.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 8

የቬክተር ፕሮጀክሽን ቀመር፡
proj_A B = ((A · B) / ‖A‖²) A

የእስካላር ፕሮጀክሽን (ኮምፖነንት) ቀመር፡
comp_A B = (A · B) / ‖A‖

ምሳሌ፡ A = (-1, 3, 1) እና B = (2, 4, 3) ቢሰጡ፡
(i) proj_B A = (13/29)(2, 4, 3)
(ii) proj_A B = (13/11)(-1, 3, 1)
(iii) comp_A B = 13 / √11

1.3.5. ዳይሬክሽናል አንግሎች እና ኮሳይኖች
A = a₁i + a₂j + a₃k ከአዎንታዊ x፣ y እና z አክሲሶች ጋር የሚሰሩት አንግሎች α፣ β እና γ የዳይሬክሽን አንግሎች ሲባሉ ኮሳይኖቻቸው ዳይሬክሽን ኮሳይን ይባላሉ፡
cos α = a₁ / ‖A‖
cos β = a₂ / ‖A‖
cos γ = a₃ / ‖A‖

ዩኒት ቬክተር A / ‖A‖ = (cos α, cos β, cos γ)
ማስታወሻ፡ cos²α + cos²β + cos²γ = 1

መልመጃ፡ A = (-1, 2, 2) ቢሆን፡ ‖A‖ = 3 ስለሆነ cos α = -1/3፣ cos β = 2/3፣ cos γ = 2/3 ይሆናሉ።`,
    formulas: [
      { name: 'Vector Projection', formula: 'proj_A B = ((A · B) / ‖A‖²) A', explanation: 'Vector projection of B onto vector A.' },
      { name: 'Scalar Projection', formula: 'comp_A B = (A · B) / ‖A‖', explanation: 'Signed scalar length of projection.' },
      { name: 'Direction Cosines Identity', formula: 'cos²α + cos²β + cos²γ = 1', explanation: 'Sum of squared directional cosines always equals 1.' }
    ]
  },
  {
    pdfPageNumber: 9,
    bookPageLabel: 'Page 9',
    chapterNumber: 1,
    sectionRef: '1.4',
    titleEn: '1.4 The Cross (or Vector) Product and Triple Products',
    titleAm: '1.4 የክሮስ (ቬክተር) ፕሮዳክት እና ትሪፕል ፕሮዳክቶች',
    subtopicEn: 'Derivation of Perpendicular Vector, Formal Definition of Cross Product A × B, 3×3 Determinant Form, Solved Example',
    subtopicAm: 'የቀጤ-ነክ ቬክተር ስሌት አመጣጥ፣ የክሮስ ፕሮዳክት ትርጓሜ፣ የ3×3 ዲተርሚናንት አሰራር',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 9

1.4. The Cross (or Vector) Product and Triple Products
Given two nonzero vectors A = (a₁, a₂, a₃) = a₁i + a₂j + a₃k and B = (b₁, b₂, b₃) = b₁i + b₂j + b₃k, it is very useful to be able to find a nonzero vector C that is perpendicular to both A and B. If C = (c₁, c₂, c₃) is such a vector, then A · C = 0 and B · C = 0:
a₁c₁ + a₂c₂ + a₃c₃ = 0 ..... (1)
b₁c₁ + b₂c₂ + b₃c₃ = 0 ..... (2)

To eliminate c₃, multiply (1) by b₃ and multiply (2) by a₃, and subtract:
(b₃a₁ - a₃b₁)c₁ + (b₃a₂ - a₃b₂)c₂ = 0 ..... (3)
So the solution of equation (3) is:
c₁ = (b₃a₂ - a₃b₂) = a₂b₃ - a₃b₂
c₂ = (a₃b₁ - b₃a₁)

Substituting into equations (1) and (2) we get:
c₃ = a₁b₂ - a₂b₁

That means a vector perpendicular to both A and B is:
C = (c₁, c₂, c₃) = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁)
The resulting vector is called the cross product of A and B, denoted by A × B.

Definition: Suppose that A = a₁i + a₂j + a₃k and B = b₁i + b₂j + b₃k be two vectors in ℝ³. Then the cross product A × B of the two vectors is defined as:
A × B = (a₂b₃ - a₃b₂)i + (a₃b₁ - a₁b₃)j + (a₁b₂ - a₂b₁)k

Or:
A × B = Det | i  j  k |
             | a₁ a₂ a₃ |
             | b₁ b₂ b₃ |

Example: Let A = 4i - 3j + 2k and B = 2i - 5j - k. Find A × B.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 9

1.4. የክሮስ (ቬክተር) ፕሮዳክት እና ትሪፕል ፕሮዳክቶች
ሁለት ዜሮ ያልሆኑ ቬክተሮች A = a₁i + a₂j + a₃k እና B = b₁i + b₂j + b₃k ቢሰጡ፣ ለሁለቱም ቀጤ-ነክ የሆነ ቬክተር C = (c₁, c₂, c₃) መፈለግ እጅግ አስፈላጊ ነው።
A · C = 0 እና B · C = 0 ሲፈታ የሚገኘው ውጤት፡
C = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁)
ይህ ውጤት የ A እና B ክሮስ ፕሮዳክት ይባላል (A × B)።

ትርጓሜ፡
A × B = (a₂b₃ - a₃b₂)i + (a₃b₁ - a₁b₃)j + (a₁b₂ - a₂b₁)k

በዲተርሚናንት መልክ፡
A × B = | i   j   k  |
         | a₁  a₂  a₃ |
         | b₁  b₂  b₃ |

ምሳሌ፡ A = 4i - 3j + 2k እና B = 2i - 5j - k ቢሆኑ A × B ፈልጉ።`,
    formulas: [
      { name: 'Cross Product Formula', formula: 'A × B = (a₂b₃ - a₃b₂)i + (a₃b₁ - a₁b₃)j + (a₁b₂ - a₂b₁)k', explanation: 'Vector perpendicular to both A and B in 3D space.' },
      { name: 'Determinant Form', formula: 'A × B = det [i, j, k; a₁, a₂, a₃; b₁, b₂, b₃]', explanation: 'Mnemonic 3x3 determinant definition.' }
    ]
  },
  {
    pdfPageNumber: 10,
    bookPageLabel: 'Page 10',
    chapterNumber: 1,
    sectionRef: '1.4.1',
    titleEn: 'Properties of Cross Product, Anti-commutativity & Lagrange Identity',
    titleAm: 'የክሮስ ፕሮዳክት ባህሪያት፣ ተቃራኒ-ቅያሪነት እና የላግራንጅ የማንነት ቀመር',
    subtopicEn: '10 Core Properties of Cross Product, Anti-symmetry A × B = -(B × A), Parallel Test A × B = 0, Lagrange Identity',
    subtopicAm: '10ቱ የክሮስ ፕሮዳክት መሰረታዊ ባህሪያት፣ ትይዩነት ማረጋገጫ፣ የላግራንጅ ማንነት ቀመር',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 10

Then find a) A × B   b) B × A
Solution:
A × B = | i   j   k |
        | 4  -3   2 |
        | 2  -5  -1 |
= i((-3)(-1) - (2)(-5)) - j((4)(-1) - (2)(2)) + k((4)(-5) - (-3)(2))
= i(3 + 10) - j(-4 - 4) + k(-20 + 6) = 13i + 8j - 14k

b) B × A = -(A × B) = -13i - 8j + 14k

Remarks: For two non-zero vectors A & B:
1. A × B is a vector which is orthogonal to both A and B.
2. A × B is not defined for A, B ∈ ℝ².
3. i × j = -j × i = k;  j × k = -(k × j) = i;  k × i = -(i × k) = j

Properties of Cross Product:
Let A, B and C be vectors in ℝ³ and α be any scalar. Then:
(1) A × 0⃗ = 0⃗ × A = 0⃗, where 0⃗ = ⟨0, 0, 0⟩
(2) A × B = - (B × A) (Anti-commutative)
(3) A × (B × C) ≠ (A × B) × C (Non-associative)
(4) (αA) × B = A × (αB) = α(A × B)
(5) A × (B + C) = A × B + A × C (Distributive)
(6) A · (A × B) = B · (A × B) = 0
(7) If A and B are parallel, then A × B = 0⃗
(8) ‖A × B‖² = ‖A‖² ‖B‖² - (A · B)² (Lagrange Identity)
(9) ‖A × B‖ = ‖A‖ ‖B‖ sin θ, θ ∈ [0, π]
(10) A × B = n̂ ‖A‖ ‖B‖ sin θ, where n̂ is the unit normal vector.

Example: If ‖A‖ = 2, ‖B‖ = 4 and θ = π/4, then find ‖A × B‖:
‖A × B‖ = (2)(4) sin(π/4) = 8(√2/2) = 4√2.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 10

A × B = 13i + 8j - 14k
B × A = -13i - 8j + 14k

ማስታወሻዎች፡
1. A × B ለሁለቱም ለ A እና ለ B ቀጤ-ነክ (Orthogonal) የሆነ ቬክተር ነው።
2. ክሮስ ፕሮዳክት በ ℝ² ውስጥ አይሰራም፤ በ ℝ³ ብቻ ይሰራል።
3. i × j = k፣ j × k = i፣ k × i = j

የክሮስ ፕሮዳክት ባህሪያት፡
(1) A × 0⃗ = 0⃗
(2) A × B = -(B × A) (ተቃራኒ ቅያሪ)
(3) A × (B × C) ≠ (A × B) × C
(4) (αA) × B = α(A × B)
(5) A × (B + C) = A × B + A × C
(6) A · (A × B) = B · (A × B) = 0
(7) A እና B ትይዩ ከሆኑ A × B = 0⃗
(8) ‖A × B‖² = ‖A‖² ‖B‖² - (A · B)² (የላግራንጅ ማንነት)
(9) ‖A × B‖ = ‖A‖ ‖B‖ sin θ

ምሳሌ፡ ‖A‖ = 2፣ ‖B‖ = 4 እና θ = π/4 ቢሆኑ ‖A × B‖ = 4√2 ይሆናል።`,
    formulas: [
      { name: 'Lagrange Identity', formula: '‖A × B‖² = ‖A‖² ‖B‖² - (A · B)²', explanation: 'Relates cross product magnitude to dot product and vector lengths.' },
      { name: 'Cross Product Magnitude', formula: '‖A × B‖ = ‖A‖ ‖B‖ sin θ', explanation: 'Geometric magnitude equal to area of spanned parallelogram.' },
      { name: 'Anti-commutativity', formula: 'A × B = - (B × A)', explanation: 'Reversing operand order negates the cross product.' }
    ]
  },
  {
    pdfPageNumber: 11,
    bookPageLabel: 'Page 11',
    chapterNumber: 1,
    sectionRef: '1.4.2',
    titleEn: 'Applications of Cross Product: Area of Parallelogram & Triangle, Scalar Triple Product & Volume',
    titleAm: 'የክሮስ ፕሮዳክት ተግባራት፡ የፓራሌሎግራም እና የሶስት ማዕዘን ስፋት፣ እስካላር ትሪፕል ፕሮዳክት እና ይዘት',
    subtopicEn: 'Area = ‖A × B‖, Triangle Area = 1/2‖A × B‖, Scalar Triple Product A · (B × C), Volume of Parallelepiped',
    subtopicAm: 'የፓራሌሎግራም ስፋት፣ የሶስት ማዕዘን ስፋት፣ እስካላር ትሪፕል ፕሮዳክት፣ የፓራሌሌፒፔድ ይዘት',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 11

Note: The angle θ between A and B can be obtained by:
sin θ = ‖A × B‖ / (‖A‖ ‖B‖), for two non-zero vectors A and B.

Definition (Scalar Triple Product):
Let A, B and C be vectors in ℝ³. Their scalar triple product is given by A · (B × C), which is a scalar.

Applications of Cross Product:
(i) Area: The area of a parallelogram whose adjacent sides coincide with the vectors A and B is given by:
‖A × B‖ = ‖A‖ ‖B‖ |sin θ|
So, Area(OABC) = Base × height = ‖A‖ ‖B‖ |sin θ|

N.B: The area of the triangle formed by A and B as its adjacent sides is given by:
Area = (1/2) ‖A × B‖

(ii) Volume:
The volume V of a parallelepiped with the three vectors A, B and C in ℝ³ as three of its adjacent edges is given by:
V = |A · (B × C)| = |det | a₁ a₂ a₃ | |
                        | b₁ b₂ b₃ | |
                        | c₁ c₂ c₃ | |`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 11

ማስታወሻ፡ sin θ = ‖A × B‖ / (‖A‖ ‖B‖)

እስካላር ትሪፕል ፕሮዳክት (Scalar Triple Product)፡
A፣ B እና C በ ℝ³ ውስጥ ያሉ ቬክተሮች ቢሆኑ እስካላር ትሪፕል ፕሮዳክታቸው A · (B × C) ሲሆን ውጤቱ እስካላር (ቁጥር) ነው።

የክሮስ ፕሮዳክት ተግባራት፡
(i) ስፋት (Area)፡
ጎኖቹ በቬክተር A እና B የተሰሩ የፓራሌሎግራም ስፋት በ ‖A × B‖ ይሰላል።
ስፋት = መነሻ × ቁመት = ‖A‖ ‖B‖ |sin θ| = ‖A × B‖

ልብ ይበሉ፡ ጎኖቹ A እና B የሆኑ የሶስት ማዕዘን ስፋት፡
ስፋት = (1/2) ‖A × B‖

(ii) ይዘት (Volume)፡
ጎኖቹ በ A፣ B እና C የተሰሩ የፓራሌሌፒፔድ (Parallelepiped) ይዘት፡
V = |A · (B × C)| = |det(a, b, c)|`,
    formulas: [
      { name: 'Area of Parallelogram', formula: 'Area = ‖A × B‖', explanation: 'Area spanned by adjacent vectors A and B.' },
      { name: 'Area of Triangle', formula: 'Area = (1/2) ‖A × B‖', explanation: 'Half the area of the spanned parallelogram.' },
      { name: 'Volume of Parallelepiped', formula: 'V = |A · (B × C)| = |det(A, B, C)|', explanation: 'Absolute value of the scalar triple product.' }
    ]
  },
  {
    pdfPageNumber: 12,
    bookPageLabel: 'Page 12',
    chapterNumber: 1,
    sectionRef: '1.5',
    titleEn: 'Solved Geometric Examples, Coplanar Condition & 1.5 Lines and Planes in ℝ³',
    titleAm: 'የጂኦሜትሪ ምሳሌዎች፣ ኮፕላናር ሁኔታ እና 1.5 መስመሮች እና ጠለሎች በ ℝ³',
    subtopicEn: 'Triangle Area Example, Parallelepiped Volume Example, Coplanar Vectors A · (B × C) = 0, Parametric/Symmetric Line Equations',
    subtopicAm: 'የሶስት ማዕዘን ስፋትና የይዘት ምሳሌዎች፣ ኮፕላናር ቬክተሮች፣ የመስመር ፓራሜትሪክ እና ሲሜትሪክ እኩልታዎች',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 12

h = ‖proj_(B×C) A‖ = |A · (B × C)| / ‖B × C‖
Hence, V = Base × h = |A · (B × C)|

Examples:
1. Find the area of a triangle whose vertices are A(1, -1, 0), B(2, 1, -1) and C(-1, 1, 2).
Solution: The vectors on the sides of triangle ΔABC are:
AB⃗ = B - A = (1, 2, -1) and AC⃗ = C - A = (-2, 2, 2).
AB⃗ × AC⃗ = | i   j   k |
            | 1   2  -1 | = 6i + 0j + 6k
            |-2   2   2 |
‖AB⃗ × AC⃗‖ = √(6² + 0² + 6²) = √72 = 6√2.
So, Area(ΔABC) = (1/2) ‖AB⃗ × AC⃗‖ = (1/2)(6√2) = 3√2 square units.

2. Find the volume of the parallelepiped with edges u⃗ = i + k, v⃗ = 2i + j + 4k and w⃗ = j + k.
Solution: V = |u⃗ · (v⃗ × w⃗)| = 1 unit³.

N.B: Three vectors A, B and C are coplanar iff A · (B × C) = 0.

1.5. Lines and Planes in ℝ³
Definition: A vector v⃗ = ⟨a, b, c⟩ is said to be parallel to a line ℓ if v⃗ is parallel to P₀P₁⃗ for any two distinct points P₀ and P₁ on ℓ.
A line ℓ in ℝ³ is determined by a given point P₀(x₀, y₀, z₀) on ℓ and a parallel vector v⃗ = ⟨a, b, c⟩ to ℓ.

Equations of a line in space:
Let P₀(x₀, y₀, z₀) be a given point on line ℓ and P(x, y, z) be any arbitrary point on ℓ. If v⃗ = ⟨a, b, c⟩ is the parallel vector to ℓ, then:
(1) Parametric equations of ℓ:
x = x₀ + at,  y = y₀ + bt,  z = z₀ + ct,  t ∈ ℝ, where t is called the parameter.
(2) Symmetric form of equations of ℓ:
(x - x₀)/a = (y - y₀)/b = (z - z₀)/c,  for a, b, c ≠ 0.
(3) Vector equation of ℓ:
r⃗ - r⃗₀ = t v⃗, where t ∈ ℝ.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 12

ምሳሌዎች፡
1. ጫፎቹ A(1, -1, 0)፣ B(2, 1, -1) እና C(-1, 1, 2) የሆኑ የሶስት ማዕዘን ስፋት ፈልጉ።
መፍትሔ፡ AB⃗ = (1, 2, -1)፣ AC⃗ = (-2, 2, 2)
AB⃗ × AC⃗ = 6i + 6k ⟹ ‖AB⃗ × AC⃗‖ = 6√2
ስፋት = (1/2)(6√2) = 3√2 ካሬ ዩኒት።

2. ጠርዞቹ u⃗ = i + k፣ v⃗ = 2i + j + 4k እና w⃗ = j + k የሆኑ የፓራሌሌፒፔድ ይዘት፡
V = |u⃗ · (v⃗ × w⃗)| = 1 ኪዩቢክ ዩኒት።

ልብ ይበሉ፡ ሶስት ቬክተሮች A፣ B እና C በአንድ ጠለል ላይ የሚገኙት (Coplanar) A · (B × C) = 0 ሲሆን ብቻ ነው።

1.5. መስመሮች እና ጠለሎች በ ℝ³
በጠፈር ℝ³ ውስጥ ያለ መስመር ℓ በአንድ ነጥብ P₀(x₀, y₀, z₀) እና በትይዩ ዳይሬክሽናል ቬክተር v⃗ = ⟨a, b, c⟩ ይወሰናል።
(1) ፓራሜትሪክ እኩልታ፡
x = x₀ + at፣ y = y₀ + bt፣ z = z₀ + ct (t ፓራሜትር ነው)
(2) ሲሜትሪክ እኩልታ፡
(x - x₀)/a = (y - y₀)/b = (z - z₀)/c (a, b, c ≠ 0)
(3) የቬክተር እኩልታ፡
r⃗ - r⃗₀ = t v⃗`,
    formulas: [
      { name: 'Coplanar Condition', formula: 'A · (B × C) = 0', explanation: 'Vectors lie on the same plane iff their scalar triple product vanishes.' },
      { name: 'Parametric Equations of Line', formula: 'x = x₀ + at, y = y₀ + bt, z = z₀ + ct', explanation: 'Coordinates expressed in terms of scalar parameter t.' },
      { name: 'Symmetric Equations of Line', formula: '(x - x₀)/a = (y - y₀)/b = (z - z₀)/c', explanation: 'Equating parameters across coordinates.' }
    ]
  },
  {
    pdfPageNumber: 13,
    bookPageLabel: 'Page 13',
    chapterNumber: 1,
    sectionRef: '1.5.1',
    titleEn: 'Derivation of Line Equations & Equation of a Plane in Space',
    titleAm: 'የመስመር እኩልታ አመጣጥ እና በጠፈር ውስጥ የጠለል እኩልታ',
    subtopicEn: 'Vector Derivation, Symmetric Form with Zero Component, Normal Vector n⃗, Point-Normal Form, Standard Plane Equation ax+by+cz+d=0',
    subtopicAm: 'የቬክተር ማረጋገጫ፣ የኖርማል ቬክተር n⃗ ትርጓሜ፣ የጠለል ፖይንት-ኖርማል እና ስታንዳርድ እኩልታ',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 13

1. The above equations of the line can be derived using vector algebra as follows:
From vector addition, we have r⃗ - r⃗₀ = P₀P⃗ & r⃗₀ = x₀i + y₀j + z₀k, r⃗ = xi + yj + zk.
Since P₀P⃗ // v⃗, there exists t ∈ ℝ such that r⃗ - r⃗₀ = t v⃗ = P₀P⃗
⟹ ⟨x - x₀, y - y₀, z - z₀⟩ = t ⟨a, b, c⟩
⟺ x = x₀ + at,  y = y₀ + bt,  z = z₀ + ct.

2. If one of a, b or c is 0 (say for instance b = 0), the symmetric equation of ℓ is given as:
(x - x₀)/a = (z - z₀)/c,  y = y₀.

Equation of a plane:
A plane in space is determined by a point P₀(x₀, y₀, z₀) in the plane and a vector n⃗ that is orthogonal to the plane. This orthogonal vector n⃗ is called a normal vector.
Suppose that P(x, y, z) be any arbitrary point in the plane, and let r⃗ and r⃗₀ be the position vectors of P(x, y, z) and P₀(x₀, y₀, z₀). Then we have:
n⃗ · (r⃗ - r⃗₀) = 0 (Since n⃗ is perpendicular to any vector in the plane).
⟺ n⃗ · r⃗ = n⃗ · r⃗₀, which is called the vector equation of the plane.

If we let n⃗ = ⟨a, b, c⟩ = ai + bj + ck, we get:
⟨a, b, c⟩ · ⟨x - x₀, y - y₀, z - z₀⟩ = 0
⟺ a(x - x₀) + b(y - y₀) + c(z - z₀) = 0  (point-normal form of equation of a plane)
⟺ ax + by + cz + d = 0, where d = -(ax₀ + by₀ + cz₀)
(general or standard form of the equation of a plane).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 13

1. የመስመሩ እኩልታዎች ከቬክተር ድምር ሊመነጩ ይችላሉ፡
r⃗ - r⃗₀ = t v⃗ ⟹ ⟨x - x₀, y - y₀, z - z₀⟩ = t ⟨a, b, c⟩
x = x₀ + at፣ y = y₀ + bt፣ z = z₀ + ct

2. ከ a፣ b ወይም c አንዱ 0 ቢሆን (ለምሳሌ b = 0)፡
(x - x₀)/a = (z - z₀)/c፣ y = y₀

የጠለል እኩልታ (Equation of a Plane)፡
በጠፈር ውስጥ ያለ ጠለል በነጥብ P₀(x₀, y₀, z₀) እና ለጠለሉ ቀጤ-ነክ በሆነ ኖርማል ቬክተር n⃗ ይወሰናል።
n⃗ · (r⃗ - r⃗₀) = 0 (የጠለል የቬክተር እኩልታ)

n⃗ = ⟨a, b, c⟩ ቢሆን፡
a(x - x₀) + b(y - y₀) + c(z - z₀) = 0 (ፖይንት-ኖርማል ፎርም)
ax + by + cz + d = 0፣ d = -(ax₀ + by₀ + cz₀) (አጠቃላይ ወይም ስታንዳርድ ፎርም)`,
    formulas: [
      { name: 'Vector Equation of Plane', formula: 'n⃗ · (r⃗ - r⃗₀) = 0', explanation: 'Normal vector is perpendicular to every displacement in the plane.' },
      { name: 'Point-Normal Form', formula: 'a(x - x₀) + b(y - y₀) + c(z - z₀) = 0', explanation: 'Cartesian equation through point P₀ with normal ⟨a,b,c⟩.' },
      { name: 'General Form of Plane', formula: 'ax + by + cz + d = 0', explanation: 'Standard linear equation representing a plane in ℝ³.' }
    ]
  },
  {
    pdfPageNumber: 14,
    bookPageLabel: 'Page 14',
    chapterNumber: 1,
    sectionRef: '1.5.2',
    titleEn: 'Solved Examples of Lines and Planes & Distance from Point to Line in Space',
    titleAm: 'የመስመር እና የጠለል ምሳሌዎች እና በጠፈር ውስጥ ከነጥብ እስከ መስመር ያለ ርቀት',
    subtopicEn: 'Line Equation from Point and Parallel Vector, Plane Equation Through 3 Points, Distance Formula D = ‖v × P₀P₁‖ / ‖v‖',
    subtopicAm: 'የመስመርና የጠለል እኩልታ ምሳሌዎች፣ ከነጥብ እስከ መስመር ያለ የርቀት ቀመር',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 14

Examples:
1. Find the equations of a line that contains the point (1, 4, -1) and parallel to v⃗ = -2i + 3j.
Solution: Let P₀ = ⟨1, 4, -1⟩ = (x₀, y₀, z₀).
Then the parametric form of the equation of the line is:
{ x = 1 - 2t
{ y = 4 + 3t
{ z = -1
and its symmetric form is given as:
(x - 1)/(-2) = (y - 4)/3,  z = -1.

2. Find the equation of the plane through the points P₀(1, 1, 1), P₁(2, 2, 0) and P₂(4, -6, 2).
Solution: The vectors A⃗ = P₀P₁⃗ = ⟨1, 1, -1⟩ and B⃗ = P₁P₂⃗ = ⟨2, -8, 2⟩ [or P₀P₂⃗ = ⟨3, -7, 1⟩] are parallel to the plane, and hence, their cross product n⃗ = A⃗ × B⃗ = ⟨-6, -4, -10⟩ is normal to the plane.
Thus, the equation of the plane is given by:
-6(x - 1) - 4(y - 1) - 10(z - 1) = 0
⟺ 3x + 2y + 5z - 10 = 0.

OR: The equation of the plane can be obtained by computing:
det | x-1  y-1  z-1 |
    | 2-1  2-1  0-1 | = 0  ⟺  det | x-1 y-1 z-1 |
    | 4-1 -6-1  2-1 |             |  1   1  -1 | = 0
                                  |  3  -7   1 |

Distance in Space:
a) Distance from a point to a line
The distance D from a point P₁ (not on ℓ) to a line ℓ in space is given by:
D = ‖v⃗ × P₀P₁⃗‖ / ‖v⃗‖, where v⃗ is the directional vector of ℓ and P₀ is any point on ℓ.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 14

ምሳሌዎች፡
1. በነጥብ (1, 4, -1) የሚያልፍ እና ለ v⃗ = -2i + 3j ትይዩ የሆነ የመስመር እኩልታ፡
ፓራሜትሪክ፡ x = 1 - 2t፣ y = 4 + 3t፣ z = -1
ሲሜትሪክ፡ (x - 1)/(-2) = (y - 4)/3፣ z = -1

2. በነጥቦች P₀(1, 1, 1)፣ P₁(2, 2, 0) እና P₂(4, -6, 2) የሚያልፍ የጠለል እኩልታ፡
ቬክተሮች A = ⟨1, 1, -1⟩ እና B = ⟨3, -7, 1⟩ በጠለሉ ላይ ስለሆኑ፣ ክሮስ ፕሮዳክታቸው ኖርማል ቬክተር ይሆናል፡
n = A × B = ⟨-6, -4, -10⟩
እኩልታ፡ -6(x - 1) - 4(y - 1) - 10(z - 1) = 0
⟺ 3x + 2y + 5z - 10 = 0

ርቀት በጠፈር ውስጥ፡
ሀ) ከነጥብ እስከ መስመር ያለ ርቀት፡
D = ‖v⃗ × P₀P₁⃗‖ / ‖v⃗‖`,
    formulas: [
      { name: 'Distance from Point to Line', formula: 'D = ‖v⃗ × P₀P₁⃗‖ / ‖v⃗‖', explanation: 'Perpendicular distance from point P₁ to line with direction v⃗ and point P₀.' },
      { name: 'Plane Through 3 Points', formula: 'det [x-x₀, y-y₀, z-z₀; x₁-x₀, y₁-y₀, z₁-z₀; x₂-x₀, y₂-y₀, z₂-z₀] = 0', explanation: 'Determinant equation of plane passing through 3 non-collinear points.' }
    ]
  },
  {
    pdfPageNumber: 15,
    bookPageLabel: 'Page 15',
    chapterNumber: 1,
    sectionRef: '1.5.3',
    titleEn: 'Proof of Distance to Line & Distance from a Point to a Plane in Space',
    titleAm: 'የመስመር ርቀት ማረጋገጫ እና ከነጥብ እስከ ጠለል ያለ ርቀት',
    subtopicEn: 'Trigonometric Proof of Line Distance, Formula D = |ax₀+by₀+cz₀+d|/√(a²+b²+c²), Vector Projection Proof',
    subtopicAm: 'የመስመር ርቀት ትሪጎኖሜትሪያዊ ማረጋገጫ፣ የጠለል ርቀት ቀመር እና የቬክተር ፕሮጀክሽን ማረጋገጫ',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 15

Proof (Distance to line):
sin θ = D / ‖P₀P₁⃗‖ ⟹ D = ‖P₀P₁⃗‖ sin θ
But since ‖v⃗ × P₀P₁⃗‖ = ‖v⃗‖ ‖P₀P₁⃗‖ |sin θ| = ‖v⃗‖ D, we have:
D = ‖v⃗ × P₀P₁⃗‖ / ‖v⃗‖.

b) Distance from a point to a plane:
The perpendicular distance D of a point P₀(x₀, y₀, z₀) in space to the plane with the equation ax + by + cz + d = 0 is given by:
D = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²) = |n⃗ · OP⃗| / ‖n⃗‖,
where O is the foot of n⃗ within the plane.

Proof: Consider the diagram:
D = ‖proj_n⃗ OP⃗‖ = |OP⃗ · n⃗| / ‖n⃗‖ = |(x₀ - x₁)a + (y₀ - y₁)b + (z₀ - z₁)c| / √(a² + b² + c²)
⟹ D = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²), where d = -(ax₁ + by₁ + cz₁).`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 15

ማረጋገጫ (ከነጥብ እስከ መስመር ያለ ርቀት)፡
sin θ = D / ‖P₀P₁⃗‖ ⟹ D = ‖P₀P₁⃗‖ sin θ
‖v⃗ × P₀P₁⃗‖ = ‖v⃗‖ ‖P₀P₁⃗‖ sin θ = ‖v⃗‖ D ስለሆነ፡
D = ‖v⃗ × P₀P₁⃗‖ / ‖v⃗‖ ይሆናል።

ለ) ከነጥብ እስከ ጠለል ያለ ርቀት፡
የነጥብ P₀(x₀, y₀, z₀) ከጠለል ax + by + cz + d = 0 ያለው ቀጤ-ነክ ርቀት D በሚከተለው ቀመር ይሰላል፡
D = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)

ማረጋገጫ፡
D በኖርማል ቬክተር n⃗ ላይ ያለ የቬክተር OP⃗ ፕሮጀክሽን ርዝመት ስለሆነ፡
D = ‖proj_n⃗ OP⃗‖ = |OP⃗ · n⃗| / ‖n⃗‖ = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²) ይሆናል።`,
    formulas: [
      { name: 'Distance from Point to Plane', formula: 'D = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)', explanation: 'Perpendicular distance from point (x₀,y₀,z₀) to plane ax+by+cz+d=0.' }
    ]
  },
  {
    pdfPageNumber: 16,
    bookPageLabel: 'Page 16',
    chapterNumber: 1,
    sectionRef: '1.5.4',
    titleEn: 'Distance from Plane to Origin & Solved Distance Calculation Examples',
    titleAm: 'የጠለል ርቀት ከመነሻ ነጥብ እና የተሰሩ የርቀት ስሌት ምሳሌዎች',
    subtopicEn: 'Origin Distance D = |d|/√(a²+b²+c²), Distance from Point P₁(-1,3,0) to Line ℓ, Distance from P(1,2,3) to Plane 3x+5y-4z+37=0',
    subtopicAm: 'የመነሻ ነጥብ ርቀት፣ ከነጥብ እስከ መስመር የተሰራ ምሳሌ፣ ከነጥብ እስከ ጠለል የተሰራ ምሳሌ',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 16

‖OP⃗‖ = D = Comp_B n⃗ = |B · n⃗| / ‖n⃗‖
where B = P₀P₁⃗ = ⟨x₁ - x₀, y₁ - y₀, z₁ - z₀⟩:
|a(x₁ - x₀) + b(y₁ - y₀) + c(z₁ - z₀)| / √(a² + b² + c²)

NB: If P = (0, 0, 0), then D = |d| / √(a² + b² + c²), which is the distance of the plane from the origin.

Examples:
1. Find the distance of the point P₁(-1, 3, 0) from the line with symmetric equations:
ℓ: x = 1,  (y - 1)/3 = (z + 1)/2.
Solution: Here, the directional (parallel) vector of ℓ is: v⃗ = ⟨0, 3, 2⟩, and let P₀(1, 1, -1) ∈ ℓ be taken.
Then P₀P₁⃗ = P₁ - P₀ = ⟨-1 - 1, 3 - 1, 0 - (-1)⟩ = ⟨-2, 2, 1⟩.
P₀P₁⃗ × v⃗ = | i   j   k |
             |-2   2   1 | = (4 - 3)i - (-4 - 0)j + (-6 - 0)k = i + 4j - 6k
             | 0   3   2 |
Thus, D = ‖P₀P₁⃗ × v⃗‖ / ‖v⃗‖ = √(1² + 4² + (-6)²) / √(0² + 3² + 2²) = √53 / √13 units.

2. How far is the point P(1, 2, 3) from the plane with equation π: 3x + 5y - 4z + 37 = 0?
Solution: Here (x₀, y₀, z₀) = (1, 2, 3), n⃗ = ⟨3, 5, -4⟩, d = 37.
Thus:
D = |ax₀ + by₀ + cz₀ + d| / ‖n⃗‖ = |3(1) + 5(2) - 4(3) + 37| / √(3² + 5² + (-4)²)
= |3 + 10 - 12 + 37| / √(9 + 25 + 16) = 38 / √50 = 38 / (5√2) = (19√2) / 5 units.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 16

ልብ ይበሉ፡ ነጥቡ መነሻ ነጥብ (0,0,0) ከሆነ ጠለሉ ከመነሻ ነጥብ ያለው ርቀት፡
D = |d| / √(a² + b² + c²)

ምሳሌዎች፡
1. የነጥብ P₁(-1, 3, 0) ከመስመር ℓ: x = 1, (y - 1)/3 = (z + 1)/2 ያለው ርቀት፡
v = ⟨0, 3, 2⟩ እና P₀(1, 1, -1) በመውሰድ፡
P₀P₁ = ⟨-2, 2, 1⟩
P₀P₁ × v = i + 4j - 6k
D = ‖P₀P₁ × v‖ / ‖v‖ = √53 / √13 ዩኒት።

2. የነጥብ P(1, 2, 3) ከጠለል 3x + 5y - 4z + 37 = 0 ያለው ርቀት፡
D = |3(1) + 5(2) - 4(3) + 37| / √(9 + 25 + 16)
D = 38 / √50 = 19√2 / 5 ዩኒት።`,
    formulas: [
      { name: 'Plane Distance from Origin', formula: 'D = |d| / √(a² + b² + c²)', explanation: 'Perpendicular distance from coordinate origin (0,0,0) to plane.' },
      { name: 'Point-to-Plane Evaluation', formula: 'D = 19√2 / 5', explanation: 'Exact evaluation of perpendicular distance in 3D.' }
    ]
  },
  {
    pdfPageNumber: 17,
    bookPageLabel: 'Page 17',
    chapterNumber: 1,
    sectionRef: '1.6',
    titleEn: 'Distance Between Parallel Planes & 1.6 Vector Spaces and Subspaces (Definition of a Field)',
    titleAm: 'በትይዩ ጠለሎች መሃል ያለ ርቀት እና 1.6 የቬክተር ስፔሶችና ሰብስፔሶች (የፊልድ ትርጓሜ)',
    subtopicEn: 'Parallel Planes Distance D = |d₁ - d₂|/√(a²+b²+c²), Solved Example, Algebraic Field Axioms (F, +, ·)',
    subtopicAm: 'በትይዩ ጠለሎች መሃል ያለ የርቀት ቀመር፣ የፊልድ (Field) 4ቱ መሰረታዊ መስፈርቶች',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 17

Distance between two parallel planes:
Given two parallel planes π₁ and π₂. Then we can have normal vectors with coefficients a, b, c to be the same such that:
π₁: ax + by + cz = d₁
π₂: ax + by + cz = d₂

Then the distance between π₁ and π₂ is the same as the distance from any arbitrary point P(x₀, y₀, z₀) taken from π₁ to the plane π₂:
⟹ D = |ax₀ + by₀ + cz₀ - d₂| / √(a² + b² + c²).
But ax₀ + by₀ + cz₀ = d₁,
Thus:
D = |d₁ - d₂| / √(a² + b² + c²)

Example: Find the distance between the planes:
π₁: x + 2y - 2z = 3  and  π₂: 2x + 4y - 4z = 7
Solution: We first rewrite the equations π₁ and π₂ so that they have the same n⃗ = ⟨a, b, c⟩:
π₁: x + 2y - 2z = 3
π₂: x + 2y - 2z = 7/2 ⟹ d₁ = 3 & d₂ = 7/2.
Thus:
D = |d₁ - d₂| / √(a² + b² + c²), where a = 1, b = 2, c = -2:
= |7/2 - 3| / √(1 + 4 + 4) = (1/2) / 3 = 1/6.

1.6. Vector Spaces and Subspaces
Definition of a Field:
Let F be a subset of complex numbers. Then F is said to be a field under the usual addition '+' and scalar multiplication '·', usually denoted by (F, +, ·) if it satisfies the following conditions:
i. ∀x, y ∈ F,  x + y ∈ F  &  x · y ∈ F (Closure under addition and multiplication)
ii. ∀x ∈ F,  -x ∈ F (Additive inverse)
iii. ∀x ∈ F & x ≠ 0,  x⁻¹ ∈ F (Multiplicative inverse)
iv. 0, 1 ∈ F (Additive and multiplicative identity elements)`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 17

በትይዩ ጠለሎች መሃል ያለ ርቀት፡
ሁለት ትይዩ ጠለሎች π₁: ax + by + cz = d₁ እና π₂: ax + by + cz = d₂ ቢሰጡ በመካከላቸው ያለው ርቀት፡
D = |d₁ - d₂| / √(a² + b² + c²)

ምሳሌ፡ በ π₁: x + 2y - 2z = 3 እና π₂: 2x + 4y - 4z = 7 መሃል ያለ ርቀት ፈልጉ።
መፍትሔ፡ π₂ን ለ2 ስናካፍለው x + 2y - 2z = 7/2 ይሆናል።
d₁ = 3፣ d₂ = 7/2
D = |3 - 7/2| / √(1 + 4 + 4) = (1/2) / 3 = 1/6

1.6. የቬክተር ስፔሶች እና ሰብስፔሶች
የፊልድ (Field) ትርጓሜ፡
F የኮምፕሌክስ ቁጥሮች ንዑስ ስብስብ ሆኖ (F, +, ·) ፊልድ የሚባለው የሚከተሉትን ሲያሟላ ነው፡
i. ∀x, y ∈ F፣ x + y ∈ F እና x · y ∈ F (ዝግ-ባህሪ)
ii. ∀x ∈ F፣ -x ∈ F (የድምር ተቃራኒ)
iii. ∀x ≠ 0 ∈ F፣ x⁻¹ ∈ F (የብዜት ተቃራኒ)
iv. 0, 1 ∈ F (የድምርና የብዜት ማንነቶች)`,
    formulas: [
      { name: 'Distance Between Parallel Planes', formula: 'D = |d₁ - d₂| / √(a² + b² + c²)', explanation: 'Perpendicular separation between planes sharing identical normal coefficients.' },
      { name: 'Field Axioms', formula: 'x + y ∈ F, x·y ∈ F, -x ∈ F, x⁻¹ ∈ F, 0, 1 ∈ F', explanation: 'Axioms defining algebraic fields such as ℝ, ℂ, and ℚ.' }
    ]
  },
  {
    pdfPageNumber: 18,
    bookPageLabel: 'Page 18',
    chapterNumber: 1,
    sectionRef: '1.6.1',
    titleEn: 'Definition of a Vector Space (10 Axioms) & Standard Examples (ℝⁿ, Pₙ, Mₘ×ₙ)',
    titleAm: 'የቬክተር ስፔስ ትርጓሜ (10ሩ ህጎች) እና መደበኛ ምሳሌዎች (ℝⁿ, Pₙ, Mₘ×ₙ)',
    subtopicEn: 'Examples of Fields (ℝ, ℂ, ℚ), 10 Axioms of a Linear Space over F, Vector Space Entities, Standard Examples',
    subtopicAm: 'የፊልድ ምሳሌዎች፣ 10ሩ የቬክተር ስፔስ አክሲዮሞች፣ አራት የቬክተር ስፔስ አካላት፣ መደበኛ ምሳሌዎች',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 18

Examples of Fields:
i. The field of real numbers (ℝ)
ii. The field of complex numbers (ℂ)
iii. The field of rational numbers (ℚ)

Definition of a vector space:
A non-empty set of objects V is said to be a vector space (or a linear space) over a field F if it satisfies the following 10 axioms:
1. ∀u, v ∈ V, u + v ∈ V  (Closure under addition)
2. ∀u ∈ V and c ∈ F, cu ∈ V  (Closure under scalar multiplication)
3. ∀u, v ∈ V, u + v = v + u  (Commutativity of addition)
4. ∀u, v, w ∈ V, (u + v) + w = u + (v + w)  (Associativity of addition)
5. ∀u ∈ V, ∃0 ∈ V such that u + 0 = 0 + u = u  (Additive identity)
6. ∀u ∈ V, ∃ -u ∈ V such that u + (-u) = 0  (Additive inverse)
7. ∀u ∈ V & a, b ∈ F, a(bu) = (ab)u  (Scalar compatibility)
8. ∀u, v ∈ V & a ∈ F, a(u + v) = au + av  (Distributivity over vector addition)
9. ∀u ∈ V, a, b ∈ F, (a + b)u = au + bu  (Distributivity over field addition)
10. ∀u ∈ V, 1 · u = u  (Identity element of scalar multiplication)

Note:
1. The elements of V are called vectors and the elements of F are called scalars.
2. It is important to realize that a vector space consists of four entities: a set of vectors, a set of scalars, and two operations. Unless stated otherwise, assume that the set of scalars is the set of real numbers ℝ.

Examples:
1. ℝ is a vector space over itself.
The set of all ordered pairs of real numbers with standard operations is a vector space (ℝ²).
2. ℝⁿ with the Standard Operations is a Vector Space: The set of all ordered n-tuples of real numbers.
3. The Vector Space of All Polynomials of Degree 2 or Less (P₂).
4. The Vector Space of All 2 × 3 Matrices (M₂×₃).
5. V = ℝ³ = {(x, y, z); x, y, z ∈ ℝ} is a vector space over the field of real numbers ℝ.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 18

የፊልድ ምሳሌዎች፡
i. የእውነተኛ ቁጥሮች ፊልድ (ℝ)
ii. የኮምፕሌክስ ቁጥሮች ፊልድ (ℂ)
iii. የራሽናል ቁጥሮች ፊልድ (ℚ)

የቬክተር ስፔስ ትርጓሜ፡
ባዶ ያልሆነ ስብስብ V በፊልድ F ላይ የቬክተር ስፔስ (ሊኒየር ስፔስ) የሚባለው 10ሩን አክሲዮሞች ሲያሟላ ነው፡
1. u + v ∈ V (የድምር ዝግ-ባህሪ)
2. cu ∈ V (የእስካላር ማባዛት ዝግ-ባህሪ)
3. u + v = v + u (ቅያሪ)
4. (u + v) + w = u + (v + w) (ተጣማሪ)
5. u + 0 = u የሚያደርግ 0 ∈ V አለ (የድምር ማንነት)
6. u + (-u) = 0 የሚያደርግ -u ∈ V አለ (ተቃራኒ)
7. a(bu) = (ab)u (ተጣማሪነት)
8. a(u + v) = au + av (ማከፋፈል)
9. (a + b)u = au + bu (ማከፋፈል)
10. 1 · u = u

ምሳሌዎች፡
1. ℝ በራሱ ላይ የቬክተር ስፔስ ነው።
2. ℝⁿ በመደበኛ ስሌቶች የቬክተር ስፔስ ነው።
3. የዲግሪያቸው መጠን 2 ወይም ከዚያ በታች የሆኑ ፖሊኖሚያሎች ስብስብ (P₂)።
4. የ 2 × 3 ማትሪክሶች ስብስብ (M₂×₃)።
5. ℝ³ = {(x, y, z); x, y, z ∈ ℝ} በ ℝ ላይ የቬክተር ስፔስ ነው።`,
    formulas: [
      { name: 'Vector Space 10 Axioms', formula: 'u+v∈V, cu∈V, u+v=v+u, (u+v)+w=u+(v+w), u+0=u, u+(-u)=0, a(bu)=(ab)u, a(u+v)=au+av, (a+b)u=au+bu, 1u=u', explanation: 'The 10 defining structural axioms of a linear space.' }
    ]
  },
  {
    pdfPageNumber: 19,
    bookPageLabel: 'Page 19',
    chapterNumber: 1,
    sectionRef: '1.6.2',
    titleEn: 'Subspaces of Vector Spaces — Subspace Theorem & Geometric Verification',
    titleAm: 'የቬክተር ስፔስ ሰብስፔሶች — የሰብስፔስ ቴዎረም እና ጂኦሜትሪያዊ ማረጋገጫ',
    subtopicEn: 'Counterexample S={(x,y,z)∈ℚ}, Definition of Subspace, 3 Subspace Conditions, xy-Plane Subspace, Lines Through Origin',
    subtopicAm: 'የሰብስፔስ ትርጓሜ፣ 3ቱ የሰብስፔስ ማረጋገጫ መስፈርቶች፣ የxy-ጠለል ሰብስፔስ፣ በመነሻ ነጥብ የሚያልፉ መስመሮች',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 19

6. The set defined by S = {(x, y, z); x, y, z ∈ ℚ} is not a vector space over ℝ because if we take c = √2 ∈ ℝ & u = (1, 3, 0) ∈ S, then we can see that cu = (√2, 3√2, 0) is not in S.

Subspaces:
Definition: Let V be a given vector space over a field F. Then a non-empty subset W of V is said to be a subspace of V if W itself is a vector space over F under the operations of V.

Theorem: Suppose that V is a vector space over a field F. A non-empty subset W of V is a subspace of V if it satisfies the following 3 conditions:
i. u, v ∈ W ⟹ u + v ∈ W (Closure under addition)
ii. ∀u ∈ W and c ∈ F ⟹ cu ∈ W (Closure under scalar multiplication)
iii. 0 ∈ W (Contains zero vector)

Examples:
1. V and {0} are the trivial subspaces of any vector space V.
2. For the vector space V = ℝ³ = {(x, y, z); x, y, z ∈ ℝ} over ℝ. Then the set W = {(x, y, 0); x, y ∈ ℝ} is a subspace of V. (Verify!)
Solution:
i) Let U = (x₁, y₁, 0) and V = (x₂, y₂, 0), then U + V = (x₁ + x₂, y₁ + y₂, 0) ∈ W
ii) Let U = (x₁, y₁, 0) and c ∈ ℝ, then cU = (cx₁, cy₁, 0) ∈ W
iii) (0, 0, 0) ∈ W
Therefore W is a subspace of V.

3. The set of all lines passing through the origin, L = {ax + by = 0, a, b ∈ ℝ} is a subspace of the vector space V = ℝ².
Solution:
i) Let L₁ = (x₁, y₁) and L₂ = (x₂, y₂) where ax₁ + by₁ = 0 and ax₂ + by₂ = 0.
Then a(x₁ + x₂) + b(y₁ + y₂) = (ax₁ + by₁) + (ax₂ + by₂) = 0 + 0 = 0 ∈ L.
ii) c(ax₁ + by₁) = a(cx₁) + b(cy₁) = 0 ∈ L.
iii) a(0) + b(0) = 0 ∈ L. Thus line L passes through origin.
Therefore L is a subspace of V.

Exercise:
1. Is the set W = {x - 4y = 1} a subspace of V = ℝ²? Justify. (Answer: No, because (0,0) ∉ W since 0 - 4(0) = 0 ≠ 1).
2. Which of the following is a subspace of V = ℝ³?
a) W = {(x₁, x₂, 1); x₁, x₂ ∈ ℝ} (Not a subspace, (0,0,0) ∉ W)
b) W = {(x₁, x₁ + x₃, x₃); x₁, x₃ ∈ ℝ} (Is a subspace!)`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 19

6. S = {(x, y, z); x, y, z ∈ ℚ} በ ℝ ላይ የቬክተር ስፔስ አይደለም፤ ምክንያቱም c = √2 ∈ ℝ እና u = (1, 3, 0) ቢወሰድ cu ∉ S ይሆናል።

ሰብስፔሶች (Subspaces)፡
ትርጓሜ፡ W የቬክተር ስፔስ V ባዶ ያልሆነ ንዑስ ስብስብ ሆኖ፣ በ V ስሌቶች በራሱ የቬክተር ስፔስ ከሆነ ሰብስፔስ ይባላል።

የሰብስፔስ ቴዎረም፡
W የ V ሰብስፔስ የሚሆነው 3ቱን መስፈርቶች ሲያሟላ ብቻ ነው፡
i. u, v ∈ W ⟹ u + v ∈ W (የድምር ዝግነት)
ii. u ∈ W, c ∈ F ⟹ cu ∈ W (የእስካላር ብዜት ዝግነት)
iii. 0 ∈ W (ዜሮ ቬክተር መኖር)

ምሳሌዎች፡
1. V እና {0} ለማንኛውም ቬክተር ስፔስ ትሪቪያል (Trivial) ሰብስፔሶች ናቸው።
2. W = {(x, y, 0); x, y ∈ ℝ} የ ℝ³ ሰብስፔስ ነው (xy-ጠለል)።
3. በመነሻ ነጥብ የሚያልፉ መስመሮች L = {ax + by = 0} የ ℝ² ሰብስፔስ ናቸው።

መልመጃ፡
1. W = {x - 4y = 1} የ ℝ² ሰብስፔስ ነውን? (አይደለም! ምክንያቱም (0,0) በውስጡ የለም)
2. W = {(x₁, x₁ + x₃, x₃); x₁, x₃ ∈ ℝ} የ ℝ³ ሰብስፔስ ነው!`,
    formulas: [
      { name: 'Subspace 3-Step Test', formula: 'u+v ∈ W, cu ∈ W, 0⃗ ∈ W', explanation: 'Necessary and sufficient test for a subset to form a linear subspace.' }
    ]
  },
  {
    pdfPageNumber: 20,
    bookPageLabel: 'Page 20',
    chapterNumber: 1,
    sectionRef: '1.7',
    titleEn: '1.7 Linear Dependence and Independence of Vectors',
    titleAm: '1.7 የቬክተሮች ሊኒየር ጥገኝነት እና ነፃነት',
    subtopicEn: 'Definition of Linear Combinations, Linearly Dependent vs Linearly Independent Sets, Testing Coefficients',
    subtopicAm: 'የሊኒየር ጥምረት ትርጓሜ፣ ሊኒየር ጥገኛ እና ሊኒየር ነፃ ቬክተሮች፣ የኮፊሸንቶች ስሌት',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 20

1.7. Linear Dependence and Independence
Definition:
Let v₁, v₂, ..., vₙ be elements of an arbitrary vector space V, and α₁, α₂, ..., αₙ be scalars. An expression of the form:
α₁v₁ + α₂v₂ + ··· + αₙvₙ
is called a linear combination of the vectors v₁, v₂, ..., vₙ.

Examples:
1) For the set of vectors in ℝ³:
S = {(1, 3, 1), (0, 1, 2), (1, 0, 5)}
Let v₁ = (1, 3, 1), v₂ = (0, 1, 2), and v₃ = (1, 0, 5).
v₁ is a linear combination of v₂ and v₃ because:
v₁ = c₁v₂ + c₂v₃
(1, 3, 1) = c₁(0, 1, 2) + c₂(1, 0, 5) = (c₂, c₁, 2c₁ + 5c₂)
Comparing components:
c₂ = 1  and  c₁ = 3
Check third component: 2(3) + 5(1) = 6 + 5 = 11 ≠ 1.
This shows v₁ cannot be written as combination of v₂ and v₃, meaning S is linearly independent.

Exercise:
1) Write the vector W = (1, 1, 1) as a linear combination of vectors in the set S = {(1, 2, 3), (0, 1, 2), (-1, 0, 1)}.
2) If possible, write the vector W = (1, -2, 2) as a linear combination of vectors in the set S = {(1, 2, 3), (0, 1, 2), (-1, 0, 1)}.

Definition:
Let v₁, v₂, ..., vₙ be vectors in a vector space V over ℝ. Then the vectors are called:
1. Linearly dependent if there exist scalars α₁, α₂, ..., αₙ not all zero such that:
α₁v₁ + α₂v₂ + ··· + αₙvₙ = 0.
2. Linearly independent if:
α₁v₁ + α₂v₂ + ··· + αₙvₙ = 0  implies  α₁ = α₂ = ··· = αₙ = 0.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 20

1.7. ሊኒየር ጥገኝነት እና ነፃነት (Linear Dependence and Independence)
ትርጓሜ፡
v₁, v₂, ..., vₙ በቬክተር ስፔስ V ውስጥ ያሉ ቬክተሮች እና α₁, α₂, ..., αₙ እስካላሮች ቢሆኑ፡
α₁v₁ + α₂v₂ + ··· + αₙvₙ
የቬክተሮቹ ሊኒየር ጥምረት (Linear Combination) ይባላል።

ትርጓሜ፡
1. ሊኒየር ጥገኛ (Linearly Dependent)፡ ቢያንስ አንዱ እስካላር ዜሮ ሳይሆን፡
α₁v₁ + α₂v₂ + ··· + αₙvₙ = 0 የሚያደርጉ α₁, ..., αₙ ሲገኙ ነው።
2. ሊኒየር ነፃ (Linearly Independent)፡
α₁v₁ + α₂v₂ + ··· + αₙvₙ = 0 የሚሆነው ሁሉም α₁ = α₂ = ··· = αₙ = 0 ሲሆኑ ብቻ ነው።`,
    formulas: [
      { name: 'Linear Combination', formula: 'w⃗ = α₁v₁ + α₂v₂ + ··· + αₙvₙ', explanation: 'Vector formed as a sum of scalar multiples.' },
      { name: 'Linear Independence Test', formula: '∑ αᵢvᵢ = 0 ⟹ ∀i, αᵢ = 0', explanation: 'Vectors are linearly independent if trivial combination is unique solution.' }
    ]
  },
  {
    pdfPageNumber: 21,
    bookPageLabel: 'Page 21',
    chapterNumber: 1,
    sectionRef: '1.7.1',
    titleEn: 'Geometric Meaning of Linear Dependence in ℝ³ & 5 Fundamental Remarks',
    titleAm: 'በ ℝ³ ውስጥ የሊኒየር ጥገኝነት ጂኦሜትሪያዊ ትርጉም እና 5ቱ መሰረታዊ ማስታወሻዎች',
    subtopicEn: 'Collinear Vectors on Line Through Origin, Coplanar Vectors on Plane, Remarks 1 to 5, Examples in ℝ³',
    subtopicAm: 'በመነሻ ነጥብ የሚያልፍ መስመር፣ በአንድ ጠለል ላይ ያሉ ቬክተሮች፣ 5ቱ ማስታወሻዎች፣ ምሳሌዎች',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 21

Linear dependence in the vector space V = ℝ³ can be described geometrically as follows:
(a) Any two vectors u and v in ℝ³ are linearly dependent if and only if they lie on the same line through the origin O.
(b) Any three vectors u, v, w in ℝ³ are linearly dependent if and only if they lie on the same plane through the origin O.
Also, any four or more vectors in ℝ³ are automatically linearly dependent.

The following remarks follow directly from the above definition:
Remark 1: Suppose 0⃗ is one of the vectors v₁, v₂, ..., vₘ, say v₁ = 0⃗. Then the vectors must be linearly dependent, because we have the following linear combination where the coefficient of v₁ ≠ 0:
1 · v₁ + 0 · v₂ + ··· + 0 · vₘ = 1 · 0⃗ + 0⃗ + ··· + 0⃗ = 0⃗.
Remark 2: Suppose v is a nonzero vector. Then v, by itself, is linearly independent, because kv = 0 with v ≠ 0 implies k = 0.
Remark 3: Suppose two of the vectors v₁, v₂, ..., vₘ are equal or one is a scalar multiple of the other, say v₁ = kv₂. Then the vectors must be linearly dependent, because:
1 · v₁ - k · v₂ + 0 · v₃ + ··· + 0 · vₘ = 0.
Remark 4: Two vectors v₁ and v₂ are linearly dependent if and only if one of them is a scalar multiple of the other.
Remark 5: If a set S of vectors is linearly independent, then any subset of S is linearly independent. Alternatively, if S contains a linearly dependent subset, then S is linearly dependent.

Examples:
1. Determine whether the following set of vectors in the vector space V = ℝ³ are linearly dependent or independent:
a. {(1, 0, 0), (0, 1, 0), (0, 0, 3)} ⟹ Linearly Independent (determinant is 3 ≠ 0).
b. {(2, 6, 0), (2, 4, 1), (1, 1, 1)} ⟹ Linearly Independent (determinant is -4 ≠ 0).
c. {(1, 2, 3), (0, 1, 2), (-2, 0, 1)} ⟹ Test determinant: det = 1(1) - 2(4) + 3(2) = 1 - 8 + 6 = -1 ≠ 0 ⟹ Linearly Independent.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 21

በ ℝ³ ውስጥ የሊኒየር ጥገኝነት ጂኦሜትሪያዊ ትርጉም፡
(ሀ) ሁለት ቬክተሮች u እና v ሊኒየር ጥገኛ የሚሆኑት በመነሻ ነጥብ (Origin) በሚያልፍ አንድ መስመር ላይ ሲያርፉ ብቻ ነው።
(ለ) ሶስት ቬክተሮች u፣ v እና w ሊኒየር ጥገኛ የሚሆኑት በመነሻ ነጥብ በሚያልፍ አንድ ጠለል (Plane) ላይ ሲያርፉ ብቻ ነው።
እንዲሁም በ ℝ³ ውስጥ ያሉ አራት እና ከዚያ በላይ ቬክተሮች ምንጊዜም ሊኒየር ጥገኛ ናቸው!

5ቱ መሰረታዊ ማስታወሻዎች፡
1. ዜሮ ቬክተር ያለበት ማንኛውም ስብስብ ምንጊዜም ሊኒየር ጥገኛ ነው።
2. ማንኛውም ዜሮ ያልሆነ ነጠላ ቬክተር በራሱ ሊኒየር ነፃ ነው።
3. አንዱ ቬክተር የሌላኛው እስካላር ብዜት ከሆነ ስብስቡ ሊኒየር ጥገኛ ነው።
4. ሁለት ቬክተሮች ሊኒየር ጥገኛ የሚሆኑት አንዱ የሌላኛው ብዜት ሲሆን ብቻ ነው።
5. ስብስብ S ሊኒየር ነፃ ከሆነ ማናቸውም ንዑስ ስብስቦቹ ሊኒየር ነፃ ናቸው።`,
    formulas: [
      { name: 'Linear Dependence Dimension Bound', formula: 'm > n in ℝⁿ ⟹ Linearly Dependent', explanation: 'Any set of more than n vectors in ℝⁿ is automatically linearly dependent.' }
    ]
  },
  {
    pdfPageNumber: 22,
    bookPageLabel: 'Page 22',
    chapterNumber: 1,
    sectionRef: '1.8',
    titleEn: 'Function Spaces Independence & 1.8 Basis and Dimension of a Vector Space',
    titleAm: 'የፈንክሽን ስፔሶች ነፃነት እና 1.8 የቬክተር ስፔስ ቤሲስ እና ዳይሜንሽን',
    subtopicEn: 'Wronskian/Independence of Functions, Basis Definition (Spans and Linearly Independent), Dimension dim(V), Basis Proof in ℝ³',
    subtopicAm: 'የቤሲስ ትርጓሜ (ስፓን የሚያደርግና ሊኒየር ነፃ የሆነ)፣ የዳይሜንሽን ትርጓሜ፣ በ ℝ³ ውስጥ የቤሲስ ማረጋገጫ',
    pageType: 'content',
    contentEn: `Applied Mathematics I (Math 1014B)
Page 22

2. Let V be the vector space of all real valued functions of the variable t. Then which of the following set of functions are LD/LI? Justify!
a. {t, t², sin t} ⟹ Linearly Independent.
b. {cos²t, sin²t, 1} ⟹ Linearly Dependent, because cos²t + sin²t - 1 = 0 (coefficients 1, 1, -1 not all zero).

3. Determine whether the following set of vectors in the vector space V = ℝ² are linearly dependent or independent:
a) {(1, 2), (2, 4)} ⟹ Linearly Dependent, since (2, 4) = 2(1, 2).
b) {(1, 0), (0, 1), (-2, 5)} ⟹ Linearly Dependent, since there are 3 vectors in ℝ² (3 > 2).

4. Determine whether the set S = {1 + x - 2x², 2 + 5x - x², x + x²} in P₂ is linearly dependent or independent.

1.8. Basis of a vector space
Definitions:
Let V be any vector space over a field F, and let the set S = {v₁, v₂, ..., vₙ} be a set of vectors in V. Then:
i) S is said to span (or generate) V if each element of V is a linear combination of elements of S: span(S) = V.
ii) S is called a basis for V if S is a linearly independent set and it spans V.
iii) The dimension of V is said to be n (dim V = n) if V has a basis consisting of n elements.

Examples:
1. Show that the set S = {(1, 0, 0), (0, 1, 0), (0, 0, 5)} forms a basis of the vector space ℝ³.
Solution:
I) We need to show that S is linearly independent:
α(1, 0, 0) + β(0, 1, 0) + γ(0, 0, 5) = (0, 0, 0)
(α, β, 5γ) = (0, 0, 0) ⟹ α = β = γ = 0.
Hence S is linearly independent.
II) We need to show that S spans ℝ³:
Let (x, y, z) ∈ ℝ³, then:
(x, y, z) = α(1, 0, 0) + β(0, 1, 0) + γ(0, 0, 5)
⟹ α = x,  β = y,  and  γ = z/5.
(x, y, z) = x(1, 0, 0) + y(0, 1, 0) + (z/5)(0, 0, 5).
Therefore, S spans ℝ³ and hence the dimension of ℝ³ is 3, which is the number of elements in S.`,
    contentAm: `ተግባራዊ ሂሳብ ፩ (Math 1014B)
ገጽ 22

2. የፈንክሽኖች ሊኒየር ነፃነት፡
ሀ) {t, t², sin t} ⟹ ሊኒየር ነፃ (Linearly Independent)
ለ) {cos²t, sin²t, 1} ⟹ ሊኒየር ጥገኛ (Linearly Dependent)፤ ምክንያቱም cos²t + sin²t - 1 = 0

3. በ ℝ² ውስጥ ያሉ ቬክተሮች፡
ሀ) {(1, 2), (2, 4)} ⟹ ሊኒየር ጥገኛ (አንዱ የሌላው ብዜት ነው)
ለ) {(1, 0), (0, 1), (-2, 5)} ⟹ ሊኒየር ጥገኛ (3 ቬክተሮች በ ℝ² ውስጥ)

1.8. የቬክተር ስፔስ ቤሲስ (Basis of a Vector Space)
ትርጓሜዎች፡
S = {v₁, v₂, ..., vₙ} በቬክተር ስፔስ V ውስጥ ያለ ስብስብ ቢሆን፡
i) ስፓን ያደርጋል (Spans V) የሚባለው እያንዳንዱ የ V አካል የ S አካላት ሊኒየር ጥምረት ሆኖ ሲጻፍ ነው።
ii) ቤሲስ (Basis) የሚባለው ስብስቡ ሊኒየር ነፃ ሆኖ ሙሉውን V ስፓን ሲያደርግ ነው።
iii) የ V ዳይሜንሽን (Dimension) ቤሲሱ ውስጥ ያሉት አካላት ብዛት n (dim V = n) ነው።

ምሳሌ፡ S = {(1, 0, 0), (0, 1, 0), (0, 0, 5)} የ ℝ³ ቤሲስ መሆኑን አሳዩ።
መፍትሔ፡
I) α(1,0,0) + β(0,1,0) + γ(0,0,5) = (0,0,0) ⟹ α = β = γ = 0 (ሊኒየር ነፃ ነው)
II) (x, y, z) = x(1,0,0) + y(0,1,0) + (z/5)(0,0,5) (ስፓን ያደርጋል)
ስለዚህ S የ ℝ³ ቤሲስ ሲሆን dim(ℝ³) = 3 ነው።`,
    formulas: [
      { name: 'Basis Requirements', formula: 'S is a basis ⟺ S is LI and span(S) = V', explanation: 'A basis is a minimal spanning set and a maximal linearly independent set.' },
      { name: 'Dimension', formula: 'dim(V) = |Basis(V)|', explanation: 'The number of vectors in any basis of the vector space.' }
    ]
  }
];
