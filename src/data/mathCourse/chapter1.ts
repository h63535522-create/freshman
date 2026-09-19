import { Chapter } from '../../types';

export const mathChapter1: Chapter = {
  id: 701,
  number: 1,
  title: {
    en: 'Chapter 1: Vectors and Vector Spaces',
    am: 'ምዕራፍ ፩፡ ቬክተሮች እና የቬክተር ስፔሶች'
  },
  universityAuthor: 'Tibebe-selassie T/mariam (Addis Ababa University / MoSHE)',
  overview: {
    en: 'Comprehensive study of scalars and vectors in ℝ² and ℝ³, algebraic vector operations, the dot product, orthogonality, vector projection, cross product, lines and planes in 3D space, formal axioms of real vector spaces, and subspace criteria.',
    am: 'በ ℝ² እና ℝ³ ውስጥ የእስካላር እና ቬክተሮች ጥናት፣ የአልጀብራ ቬክተር ስሌቶች፣ ነጥብ ብዜት (Dot Product)፣ ኦርቶጎናሊቲ፣ የቬክተር ጥላ (Projection)፣ የመስቀለኛ ብዜት (Cross Product)፣ በ3D ጠፈር ውስጥ የመስመሮችና ጠለሎች እኩልታዎች፣ የቬክተር ስፔስ መርሆች እና ንዑስ ስፔሶች።'
  },
  learningOutcomes: [
    {
      en: 'Distinguish between scalars and vectors and represent vectors geometrically and algebraically in ℝ² and ℝ³.',
      am: 'እስካላር እና ቬክተሮችን መለየት እንዲሁም በ ℝ² እና ℝ³ ውስጥ በጂኦሜትሪና በአልጀብራ መግለጽ።'
    },
    {
      en: 'Compute vector magnitude, unit vectors, direction angles, and perform linear combinations.',
      am: 'የቬክተር ርዝመት (Magnitude)፣ የዩኒት ቬክተር፣ የአቅጣጫ ማዕዘናት ማስላት እና መስመራዊ ጥምረቶችን ማከናወን።'
    },
    {
      en: 'Apply dot product to test orthogonality, find angles between vectors, and compute vector projections.',
      am: 'የነጥብ ብዜትን በመጠቀም ኦርቶጎናሊቲን መፈተሽ፣ በማዕዘናት መካከል ያለውን አንግል መፈለግ እና የቬክተር ጥላ ማስላት።'
    },
    {
      en: 'Calculate the cross product to find perpendicular vectors, areas of parallelograms/triangles, and lines/planes in space.',
      am: 'የመስቀለኛ ብዜትን (Cross Product) በመጠቀም ቀጤ ነክ ቬክተሮችን፣ የትይዩ ጎንና የሶስት ማዕዘን ስፋትን እንዲሁም የመስመሮችና ጠለሎች እኩልታዎችን መወሰን።'
    },
    {
      en: 'Verify the ten vector space axioms and apply the Subspace Test Theorem for vector subsets.',
      am: 'አስሩን የቬክተር ስፔስ መርሆች ማረጋገጥ እና የንዑስ ስፔስ መመዘኛ ቴዎረምን በስብስብ ላይ መተግበር።'
    }
  ],
  sections: [
    {
      id: 'math-1-1',
      number: '1.1',
      title: {
        en: '1.1 Scalars and Vectors in ℝ² and ℝ³',
        am: '፩.፩ እስካላር እና ቬክተሮች በ ℝ² እና ℝ³'
      },
      paragraphs: [
        {
          id: 'math-p1-1',
          en: 'A scalar is a physical quantity described completely by its magnitude (a real number) only, such as mass, temperature, length, and time. In contrast, a vector possesses both magnitude and direction, such as displacement, velocity, acceleration, and force. Geometrically, a vector is represented by a directed line segment or arrow with an initial point and a terminal point.',
          am: 'እስካላር (Scalar) በመጠኑ (በእውነተኛ ቁጥር) ብቻ የሚገለጽ አካላዊ መጠን ነው፤ ለምሳሌ ክብደት፣ ሙቀት፣ ርዝመት እና ጊዜ። በተቃራኒው ቬክተር (Vector) መጠንም አቅጣጫም ያለው አካላዊ መጠን ነው፤ ለምሳሌ መፈናቀል፣ ፍጥነት፣ ፍጥንጥነት እና ኃይል። በጂኦሜትሪ ቬክተር መነሻና መድረሻ ነጥብ ባለው ቀስት ይገለጻል።',
          highlightTerms: [
            { en: 'Scalar', am: 'እስካላር' },
            { en: 'Vector', am: 'ቬክተር' },
            { en: 'Magnitude', am: 'መጠን' },
            { en: 'Direction', am: 'አቅጣጫ' }
          ]
        },
        {
          id: 'math-p1-2',
          en: 'In ℝ², a vector is an ordered pair u⃗ = (u₁, u₂), while in ℝ³ it is an ordered triple v⃗ = (v₁, v₂, v₃). Two vectors are equal if and only if their corresponding components are equal. A located vector AB⃗ with initial point A(x₁, y₁, z₁) and terminal point B(x₂, y₂, z₂) has component form AB⃗ = (x₂ - x₁, y₂ - y₁, z₂ - z₁). Its magnitude is given by ||AB⃗|| = √((x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²).',
          am: 'በ ℝ² ውስጥ ቬክተር የተጣመረ ጥንድ u⃗ = (u₁, u₂) ሲሆን፣ በ ℝ³ ውስጥ የተጣመረ ሦስትነት v⃗ = (v₁, v₂, v₃) ነው። ሁለት ቬክተሮች እኩል የሚባሉት ተጓዳኝ ክፍሎቻቸው (Components) እኩል ሲሆኑ ብቻ ነው። መነሻው A(x₁, y₁, z₁) እና መድረሻው B(x₂, y₂, z₂) የሆነ ቬክተር AB⃗ = (x₂ - x₁, y₂ - y₁, z₂ - z₁) ሲሆን መጠኑ ||AB⃗|| = √((x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²) ነው።',
          highlightTerms: [
            { en: 'Component Form', am: 'የክፍል ቅርጽ' },
            { en: 'Vector Norm / Magnitude', am: 'የቬክተር ርዝመት (ኖርም)' }
          ]
        }
      ]
    },
    {
      id: 'math-1-2',
      number: '1.2',
      title: {
        en: '1.2 Vector Operations and Properties',
        am: '፩.፪ የቬክተር ስሌቶች እና ባህሪያት'
      },
      paragraphs: [
        {
          id: 'math-p1-3',
          en: 'Vector addition is performed component-wise: (u₁, u₂) + (v₁, v₂) = (u₁ + v₁, u₂ + v₂). Geometrically, vector addition corresponds to the Parallelogram Law or Triangle Rule. Scalar multiplication multiplies each component by a real number c: c(u₁, u₂) = (cu₁, cu₂). If c > 0, cu⃗ has the same direction as u⃗; if c < 0, it has the opposite direction.',
          am: 'የቬክተር መደመር በክፍሎች ይከናወናል፡ (u₁, u₂) + (v₁, v₂) = (u₁ + v₁, u₂ + v₂)። በጂኦሜትሪ የቬክተር መደመር በትይዩ ጎን ወይም በሶስት ማዕዘን ህግ ይገለጻል። የእስካላር ማባዛት እያንዳንዱን ክፍል በቁጥር c ማባዛት ነው፡ c(u₁, u₂) = (cu₁, cu₂)። c > 0 ከሆነ አቅጣጫው አንድ ሲሆን፣ c < 0 ከሆነ አቅጣጫው ተቃራኒ ይሆናል።',
          highlightTerms: [
            { en: 'Vector Addition', am: 'የቬክተር መደመር' },
            { en: 'Scalar Multiplication', am: 'የእስካላር ማባዛት' },
            { en: 'Parallelogram Law', am: 'የትይዩ ጎን ህግ' }
          ]
        }
      ]
    },
    {
      id: 'math-1-3',
      number: '1.3',
      title: {
        en: '1.3 The Dot Product, Orthogonality and Projections',
        am: '፩.፫ የነጥብ ብዜት፣ ቀጤ ነክነት እና የቬክተር ጥላ'
      },
      paragraphs: [
        {
          id: 'math-p1-4',
          en: 'The dot product (inner product) of u⃗ = (u₁, u₂, u₃) and v⃗ = (v₁, v₂, v₃) is defined by u⃗ · v⃗ = u₁v₁ + u₂v₂ + u₃v₃ = ||u⃗|| ||v⃗|| cos θ, where θ is the angle between them (0 ≤ θ ≤ π). Two non-zero vectors are perpendicular (orthogonal) if and only if u⃗ · v⃗ = 0. The orthogonal projection of u⃗ onto v⃗ is given by proj_v(u⃗) = ((u⃗ · v⃗) / ||v⃗||²) v⃗.',
          am: 'የሁለት ቬክተሮች ነጥብ ብዜት (Dot Product) u⃗ · v⃗ = u₁v₁ + u₂v₂ + u₃v₃ = ||u⃗|| ||v⃗|| cos θ ተብሎ ይተረጎማል፣ θ በመካከላቸው ያለው ማዕዘን ነው። ሁለት ዜሮ ያልሆኑ ቬክተሮች ቀጤ ነክ (Orthogonal) የሚሆኑት u⃗ · v⃗ = 0 ሲሆን ብቻ ነው። የ u⃗ ጥላ በ v⃗ ላይ proj_v(u⃗) = ((u⃗ · v⃗) / ||v⃗||²) v⃗ ነው።',
          highlightTerms: [
            { en: 'Dot Product', am: 'ነጥብ ብዜት' },
            { en: 'Orthogonality', am: 'ቀጤ ነክነት (ኦርቶጎናሊቲ)' },
            { en: 'Vector Projection', am: 'የቬክተር ጥላ' }
          ]
        }
      ]
    },
    {
      id: 'math-1-4',
      number: '1.4',
      title: {
        en: '1.4 The Cross Product and Geometry in ℝ³',
        am: '፩.፬ የመስቀለኛ ብዜት እና ጂኦሜትሪ በ ℝ³'
      },
      paragraphs: [
        {
          id: 'math-p1-5',
          en: 'The cross product u⃗ × v⃗ produces a vector perpendicular to both u⃗ and v⃗ following the right-hand rule. Its magnitude is ||u⃗ × v⃗|| = ||u⃗|| ||v⃗|| sin θ, which equals the area of the parallelogram formed by u⃗ and v⃗. The scalar triple product u⃗ · (v⃗ × w⃗) gives the volume of the parallelepiped determined by u⃗, v⃗, and w⃗.',
          am: 'የመስቀለኛ ብዜት (Cross Product) u⃗ × v⃗ ለሁለቱም ቬክተሮች ቀጤ ነክ የሆነ ቬክተር በቀኝ እጅ ህግ መሰረት ያስገኛል። መጠኑ ||u⃗ × v⃗|| = ||u⃗|| ||v⃗|| sin θ ሲሆን በሁለቱ ቬክተሮች የሚሰራውን የትይዩ ጎን ስፋት ይወክላል። የእስካላር ሶስትዮሽ ብዜት u⃗ · (v⃗ × w⃗) ደግሞ የፓራሌሌፒፔድ ይዘት (Volume) ነው።',
          highlightTerms: [
            { en: 'Cross Product', am: 'መስቀለኛ ብዜት' },
            { en: 'Right-Hand Rule', am: 'የቀኝ እጅ ህግ' },
            { en: 'Scalar Triple Product', am: 'የእስካላር ሶስትዮሽ ብዜት' }
          ]
        }
      ]
    },
    {
      id: 'math-1-5',
      number: '1.5',
      title: {
        en: '1.5 Vector Space Axioms and Subspaces',
        am: '፩.፭ የቬክተር ስፔስ መርሆች እና ንዑስ ስፔሶች'
      },
      paragraphs: [
        {
          id: 'math-p1-6',
          en: 'A real vector space V is a set equipped with vector addition and scalar multiplication satisfying ten closure and algebraic axioms (commutativity, associativity, zero vector, additive inverse, scalar distributivity). A non-empty subset W of V is a subspace if and only if it is closed under vector addition and scalar multiplication (contains zero vector, u + v ∈ W, and cu ∈ W for all u, v ∈ W and c ∈ ℝ).',
          am: 'እውነተኛ የቬክተር ስፔስ V ማለት የመደመርና የእስካላር ማባዛት ስራዎች ያሉትና 10ሩን መርሆች (መቀያየር፣ ማጣመር፣ የዜሮ ቬክተር፣ ተቃራኒ፣ ማከፋፈል) የሚያሟላ ስብስብ ነው። የV ንዑስ ስብስብ W ንዑስ ስፔስ (Subspace) የሚባለው የዜሮ ቬክተርን ከያዘ እና በመደመርና በእስካላር ማባዛት ዝግ (Closed) ከሆነ ብቻ ነው።',
          highlightTerms: [
            { en: 'Vector Space Axioms', am: 'የቬክተር ስፔስ መርሆች' },
            { en: 'Subspace', am: 'ንዑስ ስፔስ' },
            { en: 'Linear Closure', am: 'መስመራዊ ዝግነት' }
          ]
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-701-1',
      title: {
        en: 'Core Summary of Vectors and Vector Spaces',
        am: 'የቬክተሮች እና የቬክተር ስፔሶች ዋና ማጠቃለያ'
      },
      bullets: [
        {
          en: 'Vectors possess both magnitude and direction; represented algebraically as ordered tuples in ℝ² or ℝ³.',
          am: 'ቬክተሮች መጠንም አቅጣጫም አላቸው፤ በአልጀብራ በ ℝ² ወይም ℝ³ ውስጥ በቅደም ተከተል ይገለጻሉ።'
        },
        {
          en: 'Dot product u · v = ||u|| ||v|| cos θ enables orthogonality testing (u · v = 0) and projection calculations.',
          am: 'ነጥብ ብዜት u · v = ||u|| ||v|| cos θ ቀጤ ነክነትን (u · v = 0) ለመፈተሽ እና የቬክተር ጥላን ለማስላት ያስችላል።'
        },
        {
          en: 'Cross product u × v produces an orthogonal vector whose magnitude equals the area of the spanned parallelogram.',
          am: 'መስቀለኛ ብዜት u × v ቀጤ ነክ ቬክተር የሚያስገኝ ሲሆን መጠኑ የትይዩ ጎን ስፋትን ይወክላል።'
        },
        {
          en: 'Lines in space: r(t) = r₀ + t v; Planes in space: n · (r - r₀) = 0 where n is the normal vector.',
          am: 'መስመሮች በጠፈር ውስጥ፡ r(t) = r₀ + t v፤ ጠለሎች በጠፈር ውስጥ፡ n · (r - r₀) = 0 n ቀጥተኛው ቬክተር ነው።'
        },
        {
          en: 'A vector space satisfies 10 axioms; a subspace requires zero vector containment and closure under addition and scalar multiplication.',
          am: 'የቬክተር ስፔስ 10 መርሆችን ያሟላል፤ ንዑስ ስፔስ ደግሞ ዜሮን መያዝና በመደመር እንዲሁም በማባዛት ዝግ መሆንን ይጠይቃል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-701-1',
      number: 1,
      question: {
        en: 'How do you determine if two non-zero vectors in ℝ³ are orthogonal, parallel, or neither?',
        am: 'ሁለት ዜሮ ያልሆኑ ቬክተሮች ቀጤ ነክ (Orthogonal)፣ ትይዩ (Parallel) ወይም አንዳቸውም እንዳልሆኑ እንዴት ይወሰናል?'
      },
      answer: {
        en: 'Two vectors u and v are orthogonal if and only if their dot product is zero (u · v = 0). They are parallel if and only if one is a scalar multiple of the other (u = cv for some c ≠ 0), which is equivalent to u × v = 0. If neither holds, they are neither parallel nor orthogonal.',
        am: 'ሁለት ቬክተሮች ቀጤ ነክ የሚሆኑት የነጥብ ብዜታቸው ዜሮ ሲሆን ነው (u · v = 0)። ትይዩ የሚሆኑት አንዱ የሌላኛው የእስካላር ብዜት ሲሆን ነው (u = cv)፣ ይህም ከ u × v = 0 ጋር እኩል ነው። ሁለቱም ካልተሟሉ አንዳቸውም አይደሉም።'
      },
      explanation: {
        en: 'Since u · v = ||u|| ||v|| cos θ, cos θ = 0 means θ = 90°. Since ||u × v|| = ||u|| ||v|| sin θ, sin θ = 0 means θ = 0° or 180° (parallel).',
        am: 'u · v = ||u|| ||v|| cos θ በመሆኑ cos θ = 0 ማለት ማዕዘኑ 90° ነው። ||u × v|| = ||u|| ||v|| sin θ በመሆኑ sin θ = 0 ማለት ትይዩ ነው።'
      },
      category: 'conceptual'
    },
    {
      id: 'qna-701-2',
      number: 2,
      question: {
        en: 'What are the necessary and sufficient conditions for a subset W of a vector space V to be a subspace?',
        am: 'የአንድ ቬክተር ስፔስ V ንዑስ ስብስብ W ንዑስ ስፔስ (Subspace) ለመሆን የሚያስፈልጉት አስፈላጊና በቂ መስፈርቶች ምንድን ናቸው?'
      },
      answer: {
        en: 'A subset W is a subspace if and only if: 1) W is non-empty (specifically contains the zero vector 0 ∈ W); 2) W is closed under vector addition (if u, v ∈ W, then u + v ∈ W); 3) W is closed under scalar multiplication (if u ∈ W and c ∈ ℝ, then cu ∈ W).',
        am: 'ንዑስ ስብስብ W ንዑስ ስፔስ ለመሆን፡ 1) ባዶ ያልሆነ (በተለይ የዜሮ ቬክተርን 0 ∈ W የያዘ)፤ 2) በመደመር ዝግ የሆነ (u, v ∈ W ከሆነ u + v ∈ W)፤ 3) በእስካላር ማባዛት ዝግ የሆነ (u ∈ W እና c ∈ ℝ ከሆነ cu ∈ W) መሆን አለበት።'
      },
      explanation: {
        en: 'These three conditions automatically guarantee all remaining eight vector space axioms inherit directly from the parent vector space V.',
        am: 'እነዚህ ሶስት መመዘኛዎች ከተሟሉ የተቀሩት ስምንቱ መርሆች በቀጥታ ከዋናው ቬክተር ስፔስ V ይወረሳሉ።'
      },
      category: 'conceptual'
    }
  ],
  quizzes: [
    {
      id: 'quiz-701-1',
      question: {
        en: 'Given vectors u = (2, -1, 3) and v = (1, 2, 0) in ℝ³, what is the dot product u · v?',
        am: 'በ ℝ³ ውስጥ ቬክተር u = (2, -1, 3) እና v = (1, 2, 0) ቢሰጡ፣ የነጥብ ብዜታቸው u · v ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: 'u · v = 0 (Orthogonal)', am: 'u · v = 0 (ቀጤ ነክ)' } },
        { id: 'b', text: { en: 'u · v = 4', am: 'u · v = 4' } },
        { id: 'c', text: { en: 'u · v = -2', am: 'u · v = -2' } },
        { id: 'd', text: { en: 'u · v = 7', am: 'u · v = 7' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'u · v = (2)(1) + (-1)(2) + (3)(0) = 2 - 2 + 0 = 0. Since the dot product is zero, the vectors are orthogonal.',
        am: 'u · v = (2)(1) + (-1)(2) + (3)(0) = 2 - 2 + 0 = 0። የነጥብ ብዜቱ ዜሮ ስለሆነ ቬክተሮቹ ቀጤ ነክ ናቸው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-701-1',
      termEn: 'Orthogonal Vectors',
      termAm: 'ቀጤ ነክ ቬክተሮች',
      defEn: 'Vectors whose dot product is zero, meaning they meet at an angle of 90 degrees.',
      defAm: 'የነጥብ ብዜታቸው ዜሮ የሆነና በ90 ዲግሪ ማዕዘን የሚገናኙ ቬክተሮች።',
      chapter: 1
    },
    {
      id: 'fc-701-2',
      termEn: 'Cross Product',
      termAm: 'መስቀለኛ ብዜት',
      defEn: 'A binary operation on two 3D vectors producing a vector perpendicular to both operands.',
      defAm: 'ለሁለቱም ባለ 3D ቬክተሮች ቀጥ ያለ አዲስ ቬክተር የሚያስገኝ ስሌት።',
      chapter: 1
    }
  ]
};
