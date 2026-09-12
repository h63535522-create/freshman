import { Chapter } from '../../types';

export const physicsChapter1: Chapter = {
  id: 1101,
  number: 1,
  title: {
    en: 'Chapter 1: Preliminaries (Physical Quantities, Measurement & Vectors)',
    am: 'ምዕራፍ ፩፡ መግቢያ (አካላዊ መጠኖች፣ ልኬት እና ቬክተሮች)'
  },
  universityAuthor: 'National Physics Curriculum Committee (MoSHE 2019)',
  overview: {
    en: 'Introduces physical quantities, the International System of Units (SI), conversion techniques, uncertainty analysis, significant figures, vector composition, resolution, and unit vectors as the fundamental language of physics.',
    am: 'አካላዊ መጠኖችን፣ ዓለም አቀፍ የልኬት አሃዶች (SI) ስርአት፣ የአሃድ ለውጥ ስሌት፣ የልኬት እርግጠኛ አለመሆን እና ትክክለኛ አሃዞች፣ እንዲሁም የቬክተሮች ውህደትና ክፍፍልን የሚያብራራ መሰረታዊ መግቢያ።'
  },
  learningOutcomes: [
    {
      en: 'Explain the nature of physics as a science of measurement and matter-energy interactions',
      am: 'ፊዚክስ የቁስ አካልና የኃይል ግንኙነትን እንዲሁም የተፈጥሮ ክስተቶች ልኬትን የሚያጠና ሳይንስ መሆኑን መግለፅ'
    },
    {
      en: 'Distinguish between basic and derived physical quantities and their SI units',
      am: 'መሰረታዊ እና ተወላጅ አካላዊ መጠኖችን እንዲሁም የSI አሃዶቻቸውን መለየት'
    },
    {
      en: 'Perform unit conversions using dimensional analysis and scientific prefixes',
      am: 'ልኬታዊ ትንታኔን (Dimensional Analysis) እና ቅጥያዎችን በመጠቀም የአሃድ ለውጥ ስሌቶችን መስራት'
    },
    {
      en: 'Estimate uncertainties in scale and digital measuring instruments and apply significant figure rules',
      am: 'በስኬልና በዲጂታል መለኪያዎች ላይ የሚፈጠሩ እርግጠኛ አለመሆኖችን (Uncertainty) እና የትክክለኛ አሃዞች ህጎችን መተግበር'
    },
    {
      en: 'Resolve vectors into rectangular components and compute resultant vectors algebraically and geometrically',
      am: 'ቬክተሮችን ወደ አግድምና ቀጥታ ክፍሎች (Components) መበተን እና ድምር ቬክተርን በስሌትና በጂኦሜትሪ ማስላት'
    }
  ],
  sections: [
    {
      id: 'phys-1-1',
      number: '1.1',
      title: {
        en: '1.1 Physical Quantities and Measurement',
        am: '፩.፩ አካላዊ መጠኖች እና ልኬት'
      },
      paragraphs: [
        {
          id: 'phys-p1-1',
          en: 'The word physics originates from the ancient Greek word meaning "nature". Physics is treated as the foundational base for natural sciences and engineering, dealing with matter in relation to energy and the accurate measurement of natural phenomena. Measurement consists of comparing an unknown physical quantity with a known, universally fixed standard called a unit. For instance, a vendor weighs goods against standard kilograms.',
          am: 'ፊዚክስ የሚለው ቃል "ተፈጥሮ" ከሚለው ጥንታዊ የግሪክ ቃል የመነጨ ነው። ፊዚክስ የቁስ አካልንና የኃይልን ተዛምዶ እንዲሁም የተፈጥሮ ክስተቶችን ትክክለኛ ልኬት የሚያጠና የሁሉም የተፈጥሮ ሳይንሶችና ምህንድስና መሰረት ነው። ልኬት (Measurement) ማለት የማይታወቅ አካላዊ መጠንን ዩኒት (Unit) ከሚባል የታወቀ ቋሚ መስፈርት ጋር የማነፃፀር ሂደት ነው። ለምሳሌ ነጋዴዎች አትክልቶችን የሚመዝኑት በኪሎግራም አሃድ ነው።',
          subheading: {
            en: 'Nature of Physics and the Concept of Measurement',
            am: 'የፊዚክስ ባህሪ እና የልኬት ፅንሰ-ሀሳብ'
          },
          highlightTerms: [
            { en: 'Physics', am: 'ፊዚክስ' },
            { en: 'Measurement', am: 'ልኬት' },
            { en: 'Unit', am: 'አሃድ (መስፈርት)' }
          ]
        },
        {
          id: 'phys-p1-2',
          en: 'A physical quantity is a quantifiable or assignable property ascribed to a particular phenomenon or body—such as the length of a rod or the mass of a planet. All physical quantities are grouped into two categories: Basic Physical Quantities (fundamental quantities that cannot be expressed in terms of any other quantity, such as length, mass, and time) and Derived Physical Quantities (quantities expressible as algebraic combinations of base quantities, such as area, volume, velocity, and density).',
          am: 'አካላዊ መጠን (Physical quantity) የሚባለው በማንኛውም ቁስ አካል ወይም ክስተት ላይ በቁጥር ሊለካና ሊገለጽ የሚችል ባህሪ ነው፤ ለምሳሌ የአንድ ዘንግ ርዝመት ወይም የአንድ አካል ክብደት። አካላዊ መጠኖች በሁለት ይከፈላሉ፡ መሰረታዊ አካላዊ መጠኖች (Basic Quantities - በሌላ መጠን ሊገለጹ የማይችሉ እንደ ርዝመት፣ ክብደትና ጊዜ ያሉ) እና ተወላጅ አካላዊ መጠኖች (Derived Quantities - ከመሰረታዊ መጠኖች ተባዝተው ወይም ተካፍለው የሚገኙ እንደ ስፋት፣ ይዘት፣ ፍጥነትና እፍጋት) ናቸው።',
          subheading: {
            en: 'Basic vs Derived Physical Quantities',
            am: 'መሰረታዊ እና ተወላጅ አካላዊ መጠኖች'
          },
          highlightTerms: [
            { en: 'Basic Quantities', am: 'መሰረታዊ መጠኖች' },
            { en: 'Derived Quantities', am: 'ተወላጅ መጠኖች' }
          ]
        },
        {
          id: 'phys-p1-3',
          en: 'The International System of Units (SI), adopted at the 11th General Conference on Weights and Measures in 1960, is built upon seven fundamental base quantities: Length (meter, m, dimension L), Mass (kilogram, kg, dimension M), Time (second, s, dimension T), Temperature (kelvin, K, dimension θ), Electric Current (ampere, A, dimension I), Amount of Substance (mole, mol, dimension N), and Luminous Intensity (candela, cd, dimension J). All mechanical and electromagnetic units stem from combinations of these seven.',
          am: 'በ1960 እ.ኤ.አ. በ11ኛው ዓለም አቀፍ የክብደትና ልኬት ጉባኤ የፀደቀው የዓለም አቀፍ አሃዶች ስርአት (SI) በሰባት መሰረታዊ መጠኖች ላይ የተመሰረተ ነው፡ ርዝመት (ሜትር - m፣ L)፣ ክብደት (ኪሎግራም - kg፣ M)፣ ጊዜ (ሰከንድ - s፣ T)፣ የሙቀት መጠን (ኬልቪን - K፣ θ)፣ የኤሌክትሪክ ፍሰት (አምፔር - A፣ I)፣ የቁስ መጠን (ሞል - mol፣ N)፣ እና የብርሃን ጥንካሬ (ካንዴላ - cd፣ J) ናቸው። ሁሉም ሜካኒካልና ኤሌክትሮማግኔቲክ መጠኖች ከእነዚህ ሰባት ይመነጫሉ።',
          subheading: {
            en: 'The Seven SI Base Quantities and Dimensions',
            am: 'ሰባቱ የSI መሰረታዊ መጠኖች እና ዳይሜንሽኖች'
          },
          highlightTerms: [
            { en: 'SI Units', am: 'የSI አሃዶች' },
            { en: 'Dimension', am: 'ዳይሜንሽን' }
          ]
        },
        {
          id: 'phys-p1-4',
          en: 'To convert a quantity from one unit to another, multiply by conversion factors such that undesired units cancel out algebraically. Common conversions include: 1 inch = 0.0254 m (2.54 cm), 1 foot = 0.3048 m, 1 mile = 1609.34 m, 1 pound (lb) = 0.4536 kg, 1 metric ton = 1000 kg, 1 liter = 0.001 m³, and Kelvin temperature T_K = T_C + 273.15. For example, a 2500 lb vehicle corresponds to 2500 × 0.4536 kg = 1134 kg.',
          am: 'አንድን መጠን ከአንድ አሃድ ወደ ሌላ ለመቀየር የማይፈለገውን አሃድ በሚያጠፋ የለውጥ ማባዣ (Conversion Factor) ማባዛት ያስፈልጋል። የተለመዱ የለውጥ ስሌቶች፡ 1 ኢንች = 0.0254 ሜትር፣ 1 ጫማ = 0.3048 ሜትር፣ 1 ማይል = 1609.34 ሜትር፣ 1 ፓውንድ (lb) = 0.4536 ኪ.ግ፣ 1 ሜትሪክ ቶን = 1000 ኪ.ግ፣ 1 ሊትር = 0.001 ሜ³፣ እና ኬልቪን T_K = T_C + 273.15 ናቸው። ለምሳሌ 2,500 ፓውንድ የሚመዝን መኪና 2500 × 0.4536 = 1134 ኪ.ግ ይሆናል።',
          subheading: {
            en: 'Unit Conversion and Dimensional Analysis',
            am: 'የአሃድ ለውጥ እና ልኬታዊ ትንታኔ'
          },
          highlightTerms: [
            { en: 'Conversion Factor', am: 'የለውጥ ማባዣ' },
            { en: 'Dimensional Analysis', am: 'ልኬታዊ ትንታኔ' }
          ]
        }
      ]
    },
    {
      id: 'phys-1-2',
      number: '1.2',
      title: {
        en: '1.2 Uncertainty in Measurement and Significant Digits',
        am: '፩.፪ በልኬት ውስጥ እርግጠኛ አለመሆን እና ትክክለኛ አሃዞች'
      },
      paragraphs: [
        {
          id: 'phys-p1-5',
          en: 'No experimental measurement of a physical quantity can be entirely accurate; every measurement carries experimental uncertainty or error. Experimental errors fall into two primary categories: Systematic Errors (errors arising from devices being out of calibration or environmental flaws, producing readings consistently too high or too low, eliminable by recalibration) and Random Errors (fluctuations about the average due to observer limitations or scale division fineness, evaluated statistically).',
          am: 'ምንም አይነት ሳይንሳዊ ልኬት ፍፁም ትክክለኛ ሊሆን አይችልም፤ እያንዳንዱ ልኬት እርግጠኛ አለመሆን (Uncertainty) ወይም ስህተት አለው። ስህተቶች በሁለት ዋና ዋና ክፍሎች ይመደባሉ፡ ስልታዊ ስህተቶች (Systematic Errors - የመለኪያ መሳሪያው ካሊብሬሽን በመዛባቱ የሚከሰቱ፣ ሁልጊዜ ከአማካዩ በላይ ወይም በታች የሚያሳዩ እና መሳሪያውን በማስተካከል የሚቀረፉ) እና ድንገተኛ ስህተቶች (Random Errors - በአንባቢው ወይም በመሳሪያው ስስ ክፍፍል ምክንያት በአማካዩ ዙሪያ የሚዋዥቁ እና በስታቲስቲክስ የሚሰሉ) ናቸው።',
          subheading: {
            en: 'Systematic vs Random Errors',
            am: 'ስልታዊ እና ድንገተኛ ስህተቶች'
          },
          highlightTerms: [
            { en: 'Systematic Error', am: 'ስልታዊ ስህተት' },
            { en: 'Random Error', am: 'ድንገተኛ ስህተት' },
            { en: 'Uncertainty', am: 'እርግጠኛ አለመሆን' }
          ]
        },
        {
          id: 'phys-p1-6',
          en: 'The standard rules of thumb for uncertainty estimation in instruments are: (1) In an analog scale measuring device (like a meter stick), the absolute uncertainty equals the smallest scale increment divided by 2 (σ_x = smallest increment / 2; e.g., for a millimeter stick, σ_x = 1 mm / 2 = 0.5 mm = 0.05 cm); (2) In a digital measuring instrument (like an analytical digital balance reading 5.7513 kg), the uncertainty equals the smallest increment (σ_x = 0.0001 kg). Any measurement is recorded in the standard form: Measurement = x_best ± σ_x.',
          am: 'በመሳሪያዎች ላይ እርግጠኛ አለመሆንን ለማስላት የተቀመጡ መርሆች፡ (1) በስኬል መለኪያ መሳሪያ (እንደ ሜትር እንጨት)፣ እርግጠኛ አለመሆኑ ዝቅተኛው ክፍፍል ለሁለት ሲካፈል ነው (σ_x = ዝቅተኛው ክፍፍል / 2፤ ለምሳሌ በሚሊሜትር ስኬል 1 mm / 2 = 0.5 mm = 0.05 cm ይሆናል)፤ (2) በዲጂታል መለኪያ (እንደ 5.7513 kg በሚያሳይ ሚዛን)፣ እርግጠኛ አለመሆኑ ከመጨረሻው አሃዝ ዝቅተኛ ክፍፍል ጋር እኩል ነው (σ_x = 0.0001 kg)። ማንኛውም ልኬት የሚፃፈው በ Measurement = x_best ± σ_x ፎርም ነው።',
          subheading: {
            en: 'Rules for Instrumental Uncertainty',
            am: 'የመሳሪያዎች እርግጠኛ አለመሆን ስሌት ህጎች'
          },
          highlightTerms: [
            { en: 'Smallest Increment', am: 'ዝቅተኛው ክፍፍል' },
            { en: 'Best Estimate', am: 'ምርጥ ግምት' }
          ]
        },
        {
          id: 'phys-p1-7',
          en: 'Significant figures reflect the precision of experimental measurement. Rules for identifying significant digits: (1) All non-zero digits are significant; (2) Zeros between non-zero digits are always significant (e.g. 1.0005 has 5 sig figs); (3) Leading zeros used solely to place the decimal point are NOT significant (e.g. 0.0062 cm has 2 sig figs); (4) Trailing zeros after a decimal point ARE significant (e.g. 4.0500 cm has 5 sig figs). In multiplication and division, the final answer retains the same number of significant figures as the least accurate factor. In addition and subtraction, the answer matches the smallest number of decimal places.',
          am: 'ትክክለኛ አሃዞች (Significant Figures) የልኬቱን ጥራት ያመለክታሉ። ህጎቹ፡ (1) ዜሮ ያልሆኑ ሁሉም ቁጥሮች ትክክለኛ ናቸው፤ (2) በቁጥሮች መሃል ያሉ ዜሮዎች ሁልጊዜ ትክክለኛ ናቸው (ለምሳሌ 1.0005 አምስት ትክክለኛ አሃዞች አሉት)፤ (3) ከቁጥር በፊት ዴሲማል ቦታን ለመያዝ የሚገቡ ዜሮዎች ትክክለኛ አይደሉም (0.0062 ሁለት አሃዞች አሉት)፤ (4) ከዴሲማል በኋላ የሚመጡ የመጨረሻ ዜሮዎች ትክክለኛ ናቸው (4.0500 አምስት አሃዞች አሉት)። በማባዛትና በማካፈል ወቅት የመጨረሻው መልስ አነስተኛ ትክክለኛ አሃዝ ካለው ቁጥር ጋር እኩል መሆን አለበት። በመደመርና በመቀነስ ደግሞ አነስተኛ የዴሲማል ቦታ ካለው ጋር ይስተካከላል።',
          subheading: {
            en: 'Rules for Significant Figures in Calculations',
            am: 'በስሌቶች ውስጥ የትክክለኛ አሃዞች ህጎች'
          },
          highlightTerms: [
            { en: 'Significant Figures', am: 'ትክክለኛ አሃዞች' },
            { en: 'Precision', am: 'ትክክለኛነት (Precision)' }
          ]
        }
      ]
    },
    {
      id: 'phys-1-3',
      number: '1.3',
      title: {
        en: '1.3 Vectors: Composition, Resolution and Unit Vectors',
        am: '፩.፫ ቬክተሮች፡ ውህደት፣ ክፍፍል እና ዩኒት ቬክተሮች'
      },
      paragraphs: [
        {
          id: 'phys-p1-8',
          en: 'Physical quantities are categorized into scalars and vectors. A scalar has magnitude and physical unit but no directional orientation in space, obeying ordinary algebraic rules (e.g., mass, time, temperature, volume, energy). A vector quantity possesses both magnitude and directional orientation in space, obeying vector algebra rules (e.g., displacement, velocity, acceleration, force, linear momentum). Algebraically, a vector is symbolized with an arrow (A⃗), and its magnitude is a positive scalar denoted |A⃗| or simply A.',
          am: 'አካላዊ መጠኖች በስኬላር እና በቬክተር ይከፈላሉ። ስኬላር (Scalar) መጠንና አሃድ ብቻ ያለው ነገር ግን በጠፈር ውስጥ አቅጣጫ የሌለው ሲሆን መደበኛ የሂሳብ ህጎችን ይከተላል (ለምሳሌ፡ ክብደት፣ ጊዜ፣ ሙቀት፣ ይዘት፣ ሃይል)። ቬክተር (Vector) መጠንም አቅጣጫም ያለው ሲሆን የቬክተር አልጀብራ ህጎችን ይከተላል (ለምሳሌ፡ ቦታ መቀየር፣ ፍጥነት፣ ማጣደፍ፣ ጉልበት፣ ሞመንተም)። በፅሁፍ ቬክተር ከላዩ ቀስት ባለው ፊደል (A⃗) ይወከላል፤ መጠኑ ደግሞ አዎንታዊ ስኬላር ሆኖ |A⃗| ወይም A ተብሎ ይፃፋል።',
          subheading: {
            en: 'Scalars vs Vectors',
            am: 'ስኬላር እና ቬክተር'
          },
          highlightTerms: [
            { en: 'Scalar', am: 'ስኬላር' },
            { en: 'Vector', am: 'ቬክተር' },
            { en: 'Magnitude', am: 'መጠን (Magnitude)' }
          ]
        },
        {
          id: 'phys-p1-9',
          en: 'In geometric representation, vectors are drawn as directed line segments with arrowheads pointing from tail to head, where length indicates magnitude. Vectors can be added graphically using the tail-to-head polygon method or using the Parallelogram Law: when two concurrent vectors A⃗ and B⃗ form adjacent sides with angle θ between them, their resultant R⃗ is the diagonal. Its magnitude is given by the law of cosines: R = √(A² + B² + 2AB cos θ) [or √(A² + B² - 2AB cos(180°-θ))], and its direction is determined via the law of sines: sin θ / R = sin α / A = sin β / B.',
          am: 'በጂኦሜትሪ ውክልና ቬክተሮች ከጅራት እስከ ራስ ባለው ቀስት ይሳላሉ፤ የቀስቱ ርዝመት የቬክተሩን መጠን ይወክላል። ቬክተሮችን በግራፍ ለመደመር ከጅራት ወደ ራስ በማያያዝ ወይም በፓራሌሎግራም ህግ (Parallelogram Law) መጠቀም ይቻላል። አንግል θ ያላቸው ሁለት ቬክተሮች A⃗ እና B⃗ ሲደመሩ ድምራቸው R የፓራሌሎግራሙ ዲያጎናል ሲሆን መጠኑ በኮሳይን ህግ ይሰላል፡ R = √(A² + B² + 2AB cos θ)፤ አቅጣጫው ደግሞ በሳይን ህግ ይወሰናል፡ sin θ / R = sin α / A = sin β / B።',
          subheading: {
            en: 'Geometric Addition and Parallelogram Law',
            am: 'የጂኦሜትሪ ድምር እና የፓራሌሎግራም ህግ'
          },
          highlightTerms: [
            { en: 'Resultant Vector', am: 'ድምር ቬክተር' },
            { en: 'Parallelogram Law', am: 'የፓራሌሎግራም ህግ' }
          ]
        },
        {
          id: 'phys-p1-10',
          en: 'In analytical resolution, any two-dimensional vector A⃗ making angle θ with the positive x-axis can be resolved into perpendicular rectangular components: horizontal component A_x = A cos θ, and vertical component A_y = A sin θ. The original magnitude is reconstructed via Pythagoras theorem: A = √(A_x² + A_y²), and its orientation is θ = tan⁻¹(A_y / A_x). In three dimensions: A = √(A_x² + A_y² + A_z²), with direction cosines cos θ_x = A_x / A, cos θ_y = A_y / A, cos θ_z = A_z / A.',
          am: 'በስሌት ክፍፍል (Resolution)፣ ከ x-አክሲስ ጋር አንግል θ የሚሰራ ማንኛውም ባለሁለት አውድ ቬክተር A⃗ ወደ ቀጤ-ነክ ክፍሎች ይከፈላል፡ አግድም A_x = A cos θ እና ቀጥታ A_y = A sin θ። አጠቃላይ መጠኑ በፓይታጎራስ ቴዎረም ይሰላል፡ A = √(A_x² + A_y²)፣ አቅጣጫው ደግሞ θ = tan⁻¹(A_y / A_x) ነው። በባለሦስት አውድ ጠፈር፡ A = √(A_x² + A_y² + A_z²) ሲሆን አቅጣጫው በኮሳይን ጥምርታዎች cos θ_x = A_x/A፣ cos θ_y = A_y/A ይሰላል።',
          subheading: {
            en: 'Vector Components and Rectangular Resolution',
            am: 'የቬክተር ክፍሎች እና ቀጤ-ነክ ክፍፍል'
          },
          highlightTerms: [
            { en: 'Components', am: 'ክፍሎች (Components)' },
            { en: 'Direction Cosines', am: 'የአቅጣጫ ኮሳይኖች' }
          ]
        },
        {
          id: 'phys-p1-11',
          en: 'A unit vector is a dimensionless vector with a magnitude of exactly one, whose sole purpose is to specify directional orientation in space, conventionally symbolized with a "hat" notation (û). In Cartesian coordinates, the standard orthogonal unit vectors are î (pointing in the +x direction), ĵ (pointing in the +y direction), and k̂ (pointing in the +z direction). Any vector can be expressed in unit vector notation as A⃗ = A_x î + A_y ĵ + A_z k̂. To find a unit vector in the direction of any vector r⃗, divide the vector by its scalar magnitude: r̂ = r⃗ / |r⃗| = (x î + y ĵ + z k̂) / √(x² + y² + z²).',
          am: 'ዩኒት ቬክተር (Unit Vector) መጠኑ አንድ (1) የሆነ አሃድ አልባ ቬክተር ሲሆን ዋና አላማው በጠፈር ውስጥ አቅጣጫን ማመልከት ብቻ ነው፤ በላዩ ላይ "ባርኔጣ" (û) ምልክት ይደረግበታል። በካርቴዥያን ስርአት ውስጥ መሰረታዊ ቀጤ-ነክ ዩኒት ቬክተሮች î (+x አቅጣጫ)፣ ĵ (+y አቅጣጫ)፣ እና k̂ (+z አቅጣጫ) ናቸው። ማንኛውም ቬክተር A⃗ = A_x î + A_y ĵ + A_z k̂ ተብሎ ይፃፋል። በማንኛውም ቬክተር r⃗ አቅጣጫ ያለውን ዩኒት ቬክተር ለማግኘት ቬክተሩን ለመጠኑ ማካፈል ነው፡ r̂ = r⃗ / |r⃗| = (x î + y ĵ + z k̂) / √(x² + y² + z²)።',
          subheading: {
            en: 'Unit Vector Definition and Cartesian Notation',
            am: 'የዩኒት ቬክተር ፍቺ እና የካርቴዥያን ውክልና'
          },
          highlightTerms: [
            { en: 'Unit Vector', am: 'ዩኒት ቬክተር' },
            { en: 'Cartesian Coordinate', am: 'የካርቴዥያን ስርአት' }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Physical Quantity',
      termAm: 'አካላዊ መጠን',
      defEn: 'A quantifiable or assignable property ascribed to a particular body or phenomenon, such as length, mass, or velocity.',
      defAm: 'በማንኛውም ቁስ አካል ወይም የተፈጥሮ ክስተት ላይ በቁጥር ተሰልቶ ሊገለጽ የሚችል ባህሪ (እንደ ርዝመት፣ ክብደትና ፍጥነት)።'
    },
    {
      termEn: 'SI Units',
      termAm: 'የSI አሃዶች',
      defEn: 'The modern metric system established upon seven fundamental base units: meter (m), kilogram (kg), second (s), kelvin (K), ampere (A), mole (mol), and candela (cd).',
      defAm: 'በሰባት መሰረታዊ አሃዶች (ሜትር፣ ኪሎግራም፣ ሰከንድ፣ ኬልቪን፣ አምፔር፣ ሞል እና ካንዴላ) ላይ የተገነባ ዓለም አቀፍ የልኬት ስርአት።'
    },
    {
      termEn: 'Systematic Error',
      termAm: 'ስልታዊ ስህተት',
      defEn: 'Experimental error caused by instrument miscalibration or faulty methodology, consistently skewing measurements in one direction.',
      defAm: 'የመለኪያ መሳሪያው ባለመስተካከሉ የሚከሰት እና ንባቦችን ሁልጊዜ ከአማካዩ በላይ ወይም በታች የሚያዛባ ስህተት።'
    },
    {
      termEn: 'Random Error',
      termAm: 'ድንገተኛ ስህተት',
      defEn: 'Unpredictable fluctuations in measurement results above and below the true value, caused by environmental noise or scale resolution.',
      defAm: 'በአንባቢው አተያይ ወይም በአካባቢ ተፅዕኖ ምክንያት ከአማካዩ እሴት ወደ ላይና ወደ ታች የሚዋዥቅ ስህተት።'
    },
    {
      termEn: 'Unit Vector',
      termAm: 'ዩኒት ቬክተር',
      defEn: 'A dimensionless vector with a magnitude of 1 used to specify directional orientation along coordinate axes (î, ĵ, k̂).',
      defAm: 'መጠኑ በትክክል 1 የሆነና በኮኦርዲኔት አክሲሶች ላይ አቅጣጫን ለማመልከት የሚያገለግል አሃድ አልባ ቬክተር (î, ĵ, k̂)።'
    }
  ],
  summaries: [
    {
      id: 'sum-1-1',
      title: {
        en: 'Measurement and Fundamental SI Units',
        am: 'ልኬት እና መሰረታዊ የSI አሃዶች'
      },
      bullets: [
        {
          en: 'Physics is inherently a science of measurement, comparing unknown quantities against fixed standards called units.',
          am: 'ፊዚክስ የተፈጥሮን ህጎች በትክክለኛ ልኬትና ንፅፅር የሚያጠና ሳይንስ ነው።'
        },
        {
          en: 'The SI system is built upon 7 basic physical quantities: meter (m), kilogram (kg), second (s), kelvin (K), ampere (A), mole (mol), and candela (cd).',
          am: 'የSI ስርአት በሰባት መሰረታዊ አካላዊ መጠኖች እና አሃዶች ላይ የተገነባ ነው።'
        },
        {
          en: 'Derived quantities (speed, force, pressure, energy) are formed through dimensional multiplication and division of base units.',
          am: 'ተወላጅ መጠኖች ከመሰረታዊ አሃዶች በስሌት ተባዝተውና ተካፍለው የሚገኙ ናቸው።'
        }
      ]
    },
    {
      id: 'sum-1-2',
      title: {
        en: 'Uncertainty and Significant Figures',
        am: 'እርግጠኛ አለመሆን እና ትክክለኛ አሃዞች'
      },
      bullets: [
        {
          en: 'Scale instrument uncertainty = smallest division / 2 (e.g. meter stick is ±0.05 cm); Digital device uncertainty = smallest increment.',
          am: 'በስኬል መለኪያ ላይ እርግጠኛ አለመሆን ዝቅተኛው ክፍፍል ለ 2 ሲካፈል ሲሆን በዲጂታል ላይ ከመጨረሻው አሃዝ ጋር እኩል ነው።'
        },
        {
          en: 'Measurement result is stated as x_best ± σ_x with consistent decimal precision matching the uncertainty.',
          am: 'የልኬት ውጤት ሁልጊዜ በ x_best ± σ_x ቅርጽ መገለጽ አለበት።'
        },
        {
          en: 'Zeros between non-zero digits are significant; leading zeros are not; trailing zeros after a decimal are significant.',
          am: 'በቁጥሮች መሃል ያሉና ከዴሲማል በኋላ ያሉ የመጨረሻ ዜሮዎች ትክክለኛ ሲሆኑ መነሻ ዜሮዎች ግን አይደሉም።'
        }
      ]
    },
    {
      id: 'sum-1-3',
      title: {
        en: 'Vector Algebra and Cartesian Components',
        am: 'የቬክተር አልጀብራ እና የካርቴዥያን ክፍሎች'
      },
      bullets: [
        {
          en: 'Scalars have magnitude only; vectors have both magnitude and direction and obey vector addition rules.',
          am: 'ስኬላር መጠን ብቻ ሲኖረው ቬክተር ግን መጠንም አቅጣጫም ያለው ነው።'
        },
        {
          en: 'Components of A⃗ in 2D: A_x = A cos θ, A_y = A sin θ; Magnitude A = √(A_x² + A_y²).',
          am: 'ባለሁለት አውድ ቬክተር ክፍሎች A_x = A cos θ እና A_y = A sin θ ሲሆኑ መጠኑ A = √(A_x² + A_y²) ነው።'
        },
        {
          en: 'Unit vector r̂ = r⃗ / |r⃗|; in Cartesian coordinates, r⃗ = x î + y ĵ + z k̂.',
          am: 'ዩኒት ቬክተር r̂ = r⃗ / |r⃗| ሲሆን በካርቴዥያን r⃗ = x î + y ĵ + z k̂ ተብሎ ይገለፃል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-1-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'Why is physics considered inherently a science of measurement?',
        am: 'ፊዚክስ በመሰረቱ የልኬት ሳይንስ ተብሎ የሚታሰበው ለምንድን ነው?'
      },
      answer: {
        en: 'Physics deals with matter and its interaction with energy through quantitative laws. Giving numerical values and equations to physical principles allows scientists to test theories reproducibly. Qualitative descriptions alone cannot predict physical behavior accurately without standardized units.',
        am: 'ፊዚክስ የቁስ አካልንና የኃይልን ግንኙነት በቁጥራዊ ህጎች ያጠናል፤ የቁጥር እሴቶችንና ቀመሮችን መጠቀም ንድፈ-ሀሳቦችን በተግባር ለመፈተሽና ለማረጋገጥ ያስችላል። ያለ መደበኛ የልኬት አሃዶች ክስተቶችን በትክክል መተንበይ አይቻልም።'
      },
      explanation: {
        en: 'Standard measurement links empirical experimentation with predictive mathematical models.',
        am: 'መደበኛ ልኬት የተግባር ሙከራዎችን ከትንበያ የሂሳብ ሞዴሎች ጋር ያገናኛል።'
      }
    },
    {
      id: 'qna-1-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'How do systematic errors differ from random errors, and how can they be eliminated?',
        am: 'ስልታዊ ስህተቶች ከድንገተኛ ስህተቶች በምን ይለያሉ፣ እንዴትስ ሊቀረፉ ይችላሉ?'
      },
      answer: {
        en: 'Systematic errors are consistently too small or too large due to instrument miscalibration or zero errors, and they can be completely eliminated by pre-calibrating against a known, trusted standard. Random errors, on the other hand, fluctuate unpredictably around the mean due to precision limits and cannot be eliminated, but are minimized by taking multiple repeated trials and averaging.',
        am: 'ስልታዊ ስህተቶች የመለኪያ መሳሪያው ካሊብሬሽን በመዛባቱ የሚከሰቱና ሁልጊዜ ወደ አንድ ወገን የሚያደሉ በመሆናቸው መሳሪያውን በማስተካከል ሙሉ በሙሉ ሊቀረፉ ይችላሉ። ድንገተኛ ስህተቶች ግን በአካባቢና በአንባቢው ውዥንብር ምክንያት የሚፈጠሩ በመሆናቸው ሊወገዱ አይችሉም፤ ነገር ግን ልኬቱን ደጋግሞ በመውሰድና አማካዩን በማስላት መቀነስ ይቻላል።'
      },
      explanation: {
        en: 'Calibration tackles systematic bias, whereas statistical averaging reduces variance from random fluctuations.',
        am: 'ካሊብሬሽን ስልታዊ መዛባትን ሲቀርፍ፣ የስታቲስቲክስ አማካይ ደግሞ የድንገተኛ ስህተቶችን ልዩነት ይቀንሳል።'
      }
    },
    {
      id: 'qna-1-3',
      number: 3,
      category: 'exam_mcq',
      question: {
        en: 'What is the reading uncertainty of a standard meter stick graduated in millimeters?',
        am: 'በሚሊሜትር ክፍፍል የተዘጋጀ መደበኛ የሜትር እንጨት የመለኪያ እርግጠኛ አለመሆን ስንት ነው?'
      },
      answer: {
        en: 'For an analog scale device, uncertainty is half the smallest division: σ_x = smallest increment / 2 = 1 mm / 2 = 0.5 mm = 0.05 cm. Thus, a reading of 5.7 cm implies a range of 5.70 ± 0.05 cm.',
        am: 'በስኬል መለኪያ ላይ እርግጠኛ አለመሆኑ ዝቅተኛው ክፍፍል ለሁለት ሲካፈል ነው፡ σ_x = 1 mm / 2 = 0.5 mm = 0.05 cm። ስለዚህ 5.7 cm የተለካ ርዝመት 5.70 ± 0.05 cm ተብሎ ይገለጻል።'
      },
      explanation: {
        en: 'Analog instruments allow interpolation to half the smallest marked subdivision.',
        am: 'አናሎግ መለኪያዎች በትንሹ ምልክት ግማሽ ድረስ ገምቶ ለማንበብ ያስችላሉ።'
      }
    },
    {
      id: 'qna-1-4',
      number: 4,
      category: 'case_study',
      question: {
        en: 'How many significant figures are in 0.005080 m, and why?',
        am: 'በ 0.005080 m ቁጥር ውስጥ ስንት ትክክለኛ አሃዞች (Significant Figures) ይገኛሉ፣ ለምን?'
      },
      answer: {
        en: 'It has 4 significant figures (5, 0, 8, and the trailing 0). The first three leading zeros only serve to locate the decimal point and are not significant. The interior zero between 5 and 8 and the final trailing zero after the decimal point are significant.',
        am: '4 ትክክለኛ አሃዞች አሉት (5, 0, 8 እና የመጨረሻው 0)። መነሻ የሆኑት የመጀመሪያዎቹ ሦስት ዜሮዎች የዴሲማል ቦታን ለመያዝ ብቻ የገቡ ስለሆኑ አይቆጠሩም። በመሃል ያለው ዜሮ እና ከዴሲማል በኋላ ያለው የመጨረሻ ዜሮ ግን ትክክለኛ ናቸው።'
      },
      explanation: {
        en: 'Leading zeros establish magnitude/scale; interior and trailing zeros in decimals reflect precision.',
        am: 'መነሻ ዜሮዎች የዴሲማል ቦታን ያሳያሉ፤ በመሃልና በመጨረሻ ያሉ ዜሮዎች ግን የልኬቱን ጥራትና ጥንቃቄ ያመለክታሉ።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-phys-1-1',
      number: 1,
      question: {
        en: 'Which of the following is an SI base quantity?',
        am: 'ከሚከተሉት ውስጥ የSI መሰረታዊ አካላዊ መጠን የሆነው የቱ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Force (Newton)', am: 'ጉልበት (ኒውተን)' } },
        { id: 'b', text: { en: 'Electric Current (Ampere)', am: 'የኤሌክትሪክ ፍሰት (አምፔር)' } },
        { id: 'c', text: { en: 'Energy (Joule)', am: 'ኃይል (ጁል)' } },
        { id: 'd', text: { en: 'Pressure (Pascal)', am: 'ግፊት (ፓስካል)' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Electric current (measured in amperes, A) is one of the seven SI base quantities, along with length, mass, time, temperature, amount of substance, and luminous intensity. Force, energy, and pressure are derived quantities.',
        am: 'የኤሌክትሪክ ፍሰት (በአምፔር የሚለካ) ከሰባቱ የSI መሰረታዊ መጠኖች አንዱ ነው። ጉልበት፣ ኃይል እና ግፊት ግን ተወላጅ መጠኖች ናቸው።'
      }
    },
    {
      id: 'quiz-phys-1-2',
      number: 2,
      question: {
        en: 'A digital balance reads 5.7513 kg. What is the reading uncertainty σ_x of this device?',
        am: 'አንድ የዲጂታል ሚዛን 5.7513 ኪ.ግ ያነባል። የዚህ መሳሪያ ንባብ እርግጠኛ አለመሆን (σ_x) ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: '±0.00005 kg', am: '±0.00005 ኪ.ግ' } },
        { id: 'b', text: { en: '±0.0001 kg', am: '±0.0001 ኪ.ግ' } },
        { id: 'c', text: { en: '±0.001 kg', am: '±0.001 ኪ.ግ' } },
        { id: 'd', text: { en: '±0.05 kg', am: '±0.05 ኪ.ግ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'For digital measuring devices, uncertainty equals the smallest increment (the last displayed decimal place), which is 0.0001 kg.',
        am: 'በዲጂታል መለኪያ መሳሪያዎች ላይ እርግጠኛ አለመሆኑ ከመጨረሻው የዴሲማል ክፍፍል ጋር እኩል ስለሆነ ±0.0001 kg ይሆናል።'
      }
    },
    {
      id: 'quiz-phys-1-3',
      number: 3,
      question: {
        en: 'What is the magnitude of the 3D position vector r⃗ = 3î - 4ĵ + 12k̂?',
        am: 'የ r⃗ = 3î - 4ĵ + 12k̂ ባለሦስት አውድ ቬክተር መጠን ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: '11', am: '11' } },
        { id: 'b', text: { en: '13', am: '13' } },
        { id: 'c', text: { en: '15', am: '15' } },
        { id: 'd', text: { en: '169', am: '169' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'The magnitude is |r⃗| = √(3² + (-4)² + 12²) = √(9 + 16 + 144) = √169 = 13.',
        am: 'የቬክተሩ መጠን፡ |r⃗| = √(3² + (-4)² + 12²) = √(9 + 16 + 144) = √169 = 13 ይሆናል።'
      }
    },
    {
      id: 'quiz-phys-1-4',
      number: 4,
      question: {
        en: 'When multiplying 8.71 cm by 3.2 cm, how many significant digits should the product have?',
        am: '8.71 cm ን በ 3.2 cm ስናባዛ የመጨረሻው ውጤት ስንት ትክክለኛ አሃዞች ሊኖሩት ይገባል?'
      },
      options: [
        { id: 'a', text: { en: '2 significant digits', am: '2 ትክክለኛ አሃዞች' } },
        { id: 'b', text: { en: '3 significant digits', am: '3 ትክክለኛ አሃዞች' } },
        { id: 'c', text: { en: '5 significant digits', am: '5 ትክክለኛ አሃዞች' } },
        { id: 'd', text: { en: '1 significant digit', am: '1 ትክክለኛ አሃዝ' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'In multiplication, the product retains the significant figures of the least accurate factor. Since 3.2 has only 2 significant digits, the answer must be rounded to 2 significant digits (28 cm²).',
        am: 'በማባዛት ወቅት ውጤቱ አነስተኛ አሃዝ ካለው ቁጥር ጋር እኩል ይሆናል። 3.2 ሁለት አሃዞች ብቻ ስላሉት ውጤቱ ወደ 2 ትክክለኛ አሃዞች (28 cm²) ይጠቀለላል።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-phys-1-1',
      chapter: 1,
      termEn: 'Scalar Quantity',
      termAm: 'ስኬላር መጠን',
      defEn: 'A physical quantity completely specified by a magnitude and unit, possessing no spatial direction (e.g. mass, time, energy).',
      defAm: 'መጠንና አሃድ ብቻ ያለው ነገር ግን በጠፈር ውስጥ አቅጣጫ የሌለው አካላዊ መጠን (ለምሳሌ፡ ክብደት፣ ጊዜ፣ ኃይል)።'
    },
    {
      id: 'fc-phys-1-2',
      chapter: 1,
      termEn: 'Vector Quantity',
      termAm: 'ቬክተር መጠን',
      defEn: 'A quantity specified by both magnitude and direction in space, obeying the laws of vector algebra (e.g. displacement, force).',
      defAm: 'መጠንም አቅጣጫም ያለውና የቬክተር አልጀብራ ህጎችን የሚከተል አካላዊ መጠን (ለምሳሌ፡ ቦታ መቀየር፣ ጉልበት)።'
    },
    {
      id: 'fc-phys-1-3',
      chapter: 1,
      termEn: 'Unit Vector',
      termAm: 'ዩኒት ቬክተር',
      defEn: 'A dimensionless vector of length 1 pointing in a specified direction (r̂ = r⃗ / |r⃗|).',
      defAm: 'መጠኑ በትክክል 1 የሆነና የተወሰነ አቅጣጫን ለማመልከት የሚያገለግል አሃድ አልባ ቬክተር።'
    },
    {
      id: 'fc-phys-1-4',
      chapter: 1,
      termEn: 'Systematic Error',
      termAm: 'ስልታዊ ስህተት',
      defEn: 'Error due to miscalibrated instruments that consistently skews measurements in one direction, eliminable by recalibration.',
      defAm: 'በመሳሪያው መዛባት ምክንያት የሚፈጠርና መሳሪያውን በማስተካከል ሊቀረፍ የሚችል ስህተት።'
    }
  ]
};
