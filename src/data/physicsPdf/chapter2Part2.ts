import { OfficialPdfPage } from '../geographyPdf/types';

export const physicsChapter2Part2Pages: OfficialPdfPage[] = [
  // Page 46 - Book page 38
  {
    pdfPageNumber: 46,
    bookPageLabel: '38',
    chapterNumber: 2,
    sectionRef: '2.2.4',
    titleEn: 'Period of Circular Motion & Universal Gravitation',
    titleAm: 'የክብ እንቅስቃሴ ዙረት ጊዜ እና ሁለንተናዊ የስበት ህግ',
    subtopicEn: 'Period T = 2*pi*r / v & 2.2.5. Universal Gravitation Origins',
    subtopicAm: 'የዙረት ጊዜ (T = 2πr/v) እና ፪.፪.፭ ሁለንተናዊ የስበት ህግ አመጣጥ',
    pageType: 'content',
    contentEn: `Period of Circular Motion:
The time required for one complete revolution around the circle is called the period (T).
The circumference of the circular path is 2πr:
v = 2πr / T  =>  T = 2πr / v --------------------------------------- (2.3.2)
Substituting into centripetal acceleration:
a_c = 4π²r / T²

Centripetal Force (F_c):
According to Newton's second law, there must be a net force directed toward the center causing this acceleration:
F_c = m a_c = m v² / r

Activity:
A discus thrower moves a discus of mass 2.0 kg in a circle of radius 1.2 m. If the speed of the discus is 20 m/s, what is its centripetal acceleration and the tension in the thrower's arm?

2.2.5. Newton's Law of Universal Gravitation
Since the dawn of history, humanity has marveled at the motion of the moon, the sun, and the planets. Galileo Galilei studied the motion of falling bodies on Earth, while Johannes Kepler deduced empirical laws governing planetary orbits. It was Isaac Newton who realized that the same force that pulls an apple from a tree to the ground also holds the Moon in its orbit around the Earth!`,
    contentAm: `የክብ እንቅስቃሴ ዙረት ጊዜ (Period - T)፡
አካሉ አንድ ሙሉ ዙር ለመዞር የሚፈጅበት ጊዜ ፔሬድ (T) ይባላል፡
T = 2πr / v (ቀመር 2.3.2)
ማዕከል ሳቢ ጉልበት፡
Fc = m ac = m v² / r

የክፍል ውስጥ መልመጃ፡
2.0 ኪ.ግ የሚመዝን ዲስከስ በ1.2 ሜትር ራዲየስ በ20 ሜ/ሰ ፍጥነት ሲሽከረከር ማዕከል ሳቢ ማጣደፉና የሰውዬው ክንድ የሚፈጥረው ውጥረት ስንት ነው?

፪.፪.፭ የኒውተን ሁለንተናዊ የስበት ህግ
ገሊሊዮ የምድራዊ አካላትን ውድቀት ሲያጠና፣ ኬፕለር ደግሞ የፕላኔቶችን እንቅስቃሴ ደንቦች አገኘ። ኒውተን ፖም ከመሬት እንድትወድቅ የሚያደርገውና ጨረቃ በመሬት ዙሪያ እንድትዞር የሚያደርገው ተመሳሳይ የስበት ኃይል መሆኑን አስተዋለ።`
  },

  // Page 47 - Book page 39
  {
    pdfPageNumber: 47,
    bookPageLabel: '39',
    chapterNumber: 2,
    sectionRef: '2.2.5',
    titleEn: 'Universal Gravitation Formula & Earth Mass Calculation',
    titleAm: 'ሁለንተናዊ የስበት ቀመር እና የመሬት ክብደት ስሌት',
    subtopicEn: 'F = G(m1 m2)/r^2 and Derivation of g = GM/R^2',
    subtopicAm: 'የስበት ኃይል ቀመር እና የስበት ማጣደፍ (g = GM/R²) ማረጋገጫ',
    pageType: 'content',
    contentEn: `Newton's Law of Universal Gravitation states:
"Every particle in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them."

Mathematically:
F_g = G (m₁ m₂) / r² ------------------------------------------------ (2.3.4)
where:
• m₁, m₂ = masses of the interacting bodies
• r = distance between their centers
• G = Universal Gravitational Constant = 6.674 × 10⁻¹¹ N·m²/kg² (first accurately measured by Henry Cavendish in 1798).

Acceleration Due to Gravity (g):
Consider an object of mass m on the surface of Earth (mass M_E, radius R_E). The gravitational force on the object is its weight:
F_g = m g = G (M_E m) / R_E²
Dividing by mass m:
g = G M_E / R_E² --------------------------------------------------- (2.3.5)

Calculating Earth's Mass:
Knowing g = 9.8 m/s², G = 6.674 × 10⁻¹¹ N·m²/kg², and R_E = 6.37 × 10⁶ m:
M_E = g R_E² / G = (9.8)(6.37 × 10⁶)² / (6.674 × 10⁻¹¹) ≈ 5.98 × 10²⁴ kg.`,
    contentAm: `የኒውተን ሁለንተናዊ የስበት ህግ፡
"በአጽናፈ ዓለም ውስጥ ያለ ማንኛውም ቁስ አካል ሌላውን ቁስ አካል በክብደታቸው ብዜት ቀጥተኛ ተመጣጣኝ፣ በመካከላቸው ባለው ርቀት ካሬ የተገላቢጦሽ ተመጣጣኝ በሆነ ኃይል ይስባል።"

ቀመር፡ F_g = G (m1 m2) / r² (ቀመር 2.3.4)
G = 6.674 × 10⁻¹¹ N·m²/kg² (ሁለንተናዊ የስበት ቋሚ)።

የስበት ማጣደፍ (g) ማረጋገጫ፡
mg = G (M_E m) / R_E²
g = G M_E / R_E² (ቀመር 2.3.5)
ይህም የመሬትን ክብደት ለመተመን ያስችላል፡ M_E ≈ 5.98 × 10²⁴ ኪ.ግ።`
  },

  // Page 48 - Book page 40
  {
    pdfPageNumber: 48,
    bookPageLabel: '40',
    chapterNumber: 2,
    sectionRef: '2.2.6',
    titleEn: "Kepler's Laws of Planetary Motion: First and Second Laws",
    titleAm: 'የኬፕለር የፕላኔቶች እንቅስቃሴ ህጎች፡ አንደኛ እና ሁለተኛ ህጎች',
    subtopicEn: '2.2.6. Law of Orbits (Ellipses) & Law of Equal Areas in Equal Times',
    subtopicAm: '፪.፪.፮ የኦርቢት ህግ (ኤሊፕስ) እና የእኩል ስፋቶች ህግ',
    pageType: 'content',
    contentEn: `2.2.6. Kepler's Laws, Satellites Motion and Weightlessness
Johannes Kepler (1571–1630) analyzed the precise astronomical data of Tycho Brahe and discovered three empirical laws that describe planetary orbits:

Kepler's First Law (The Law of Orbits):
"All planets move in elliptical orbits with the Sun situated at one of the focal points (foci)."
An ellipse is defined by its semimajor axis (a) and its eccentricity (e). The distance from the Sun varies from perihelion (closest approach) to aphelion (farthest distance).

Kepler's Second Law (The Law of Areas):
"A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time."
This law implies that a planet moves fastest when it is closest to the Sun (perihelion) and slowest when it is farthest from the Sun (aphelion). This is a direct consequence of the conservation of angular momentum under a central gravitational force.`,
    contentAm: `፪.፪.፮ የኬፕለር ህጎች፣ የሳተላይት እንቅስቃሴ እና ክብደት አልባነት
ዮሃንስ ኬፕለር የፕላኔቶችን እንቅስቃሴ የሚያስረዱ ሦስት ዝነኛ ህጎችን አግኝቷል፡

የኬፕለር አንደኛ ህግ (የኦርቢት ህግ)፡
"ሁሉም ፕላኔቶች ፀሐይ በአንዱ የትኩረት ነጥብ (Focus) ላይ በምትገኝበት በኤሊፕሳዊ (Elliptical) መንገድ ላይ በፀሐይ ዙሪያ ይሽከረከራሉ።"

የኬፕለር ሁለተኛ ህግ (የስፋት ህግ)፡
"ፕላኔቷን ከፀሐይ ጋር የሚያገናኘው ምናባዊ መስመር በእኩል የጊዜ ልዩነት ውስጥ እኩል የሆነ ስፋትን ያካፍላል።"
ይህ ህግ ፕላኔቶች ለፀሐይ በሚቀርቡበት ጊዜ (Perihelion) በከፍተኛ ፍጥነት እንደሚጓዙ፣ ሲርቁ ደግሞ (Aphelion) ፍጥነታቸው እንደሚቀንስ ያሳያል።`
  },

  // Page 49 - Book page 41
  {
    pdfPageNumber: 49,
    bookPageLabel: '41',
    chapterNumber: 2,
    sectionRef: '2.2.6',
    titleEn: "Kepler's Third Law & Planetary Comparison Table",
    titleAm: 'የኬፕለር ሦስተኛ ህግ እና የፕላኔቶች ንፅፅር ሰንጠረዥ',
    subtopicEn: 'Law of Periods: T^2 / R^3 = Constant & Derivation from Gravitation',
    subtopicAm: 'የፔሬዶች ህግ፡ T²/R³ = ቋሚ ቁጥር እና ከስበት ህግ የተገኘ ማረጋገጫ',
    pageType: 'content',
    contentEn: `Kepler's Third Law (The Law of Periods / Law of Harmony):
"The square of the orbital period of any planet is directly proportional to the cube of the semimajor axis of its orbit."

Mathematically:
T² ∝ r³  =>  T² / r³ = constant = 4π² / (G M_Sun)

For any planet in circular orbit:
F_gravity = F_centripetal
G (M_S m) / r² = m v² / r = m (2πr / T)² / r = 4π² m r / T²
Rearranging:
T² / r³ = 4π² / (G M_S)

For Earth:
T = 1 year = 3.156 × 10⁷ s, r = 1.496 × 10¹¹ m:
T² / r³ = (3.156 × 10⁷)² / (1.496 × 10¹¹)³ = 2.977 × 10⁻¹⁹ s²/m³.
For Mars:
T = 1.88 years = 5.94 × 10⁷ s, r = 2.279 × 10¹¹ m:
T² / r³ = (5.94 × 10⁷)² / (2.279 × 10¹¹)³ = 2.975 × 10⁻¹⁹ s²/m³.
The values are virtually identical, confirming Kepler's third law!`,
    contentAm: `የኬፕለር ሦስተኛ ህግ (የፔሬድ ህግ)፡
"የማንኛውም ፕላኔት የዙረት ጊዜ ካሬ (T²) ከፀሐይ ካላት አማካይ ርቀት ኪዩብ (r³) ጋር ቀጥተኛ ተመጣጣኝ ነው።"

ቀመር፡ T² / r³ = 4π² / (G M_Sun) = ቋሚ ቁጥር።

ለመሬት፡ T²/r³ = 2.977 × 10⁻¹⁹ s²/m³
ለማርስ፡ T²/r³ = 2.975 × 10⁻¹⁹ s²/m³
ሁለቱም እኩል መሆናቸው የኬፕለርን ህግ ያረጋግጣል!`
  },

  // Page 50 - Book page 42
  {
    pdfPageNumber: 50,
    bookPageLabel: '42',
    chapterNumber: 2,
    sectionRef: '2.2.6',
    titleEn: 'Solar System Table & Satellite Motion',
    titleAm: 'የስርዓተ-ፀሐይ ሰንጠረዥ እና የሳተላይት እንቅስቃሴ',
    subtopicEn: 'Planetary Data Table (Mercury to Pluto) & Orbital Satellite Speed',
    subtopicAm: 'የፕላኔቶች ዳታ ሰንጠረዥ እና የሳተላይት ኦርቢታል ፍጥነት',
    pageType: 'table',
    contentEn: `Planetary Data in the Solar System:
• Mercury: Semimajor axis = 0.387 AU, Period = 0.241 yr, T²/r³ = 1.00
• Venus: Semimajor axis = 0.723 AU, Period = 0.615 yr, T²/r³ = 1.00
• Earth: Semimajor axis = 1.000 AU, Period = 1.000 yr, T²/r³ = 1.00
• Mars: Semimajor axis = 1.524 AU, Period = 1.881 yr, T²/r³ = 1.00
• Jupiter: Semimajor axis = 5.203 AU, Period = 11.86 yr, T²/r³ = 1.00
• Saturn: Semimajor axis = 9.539 AU, Period = 29.46 yr, T²/r³ = 1.00
• Uranus: Semimajor axis = 19.18 AU, Period = 84.01 yr, T²/r³ = 1.00
• Neptune: Semimajor axis = 30.06 AU, Period = 164.8 yr, T²/r³ = 1.00
• Pluto: Semimajor axis = 39.44 AU, Period = 247.7 yr, T²/r³ = 1.00

Satellite Motion:
For an artificial satellite in circular orbit around Earth at height h above the surface:
r = R_E + h
Orbital Speed (v):
v = √(G M_E / r)
Escape Velocity: The minimum speed needed to break free of Earth's gravity:
v_esc = √(2 G M_E / R_E) ≈ 11.2 km/s.`,
    contentAm: `የስርዓተ-ፀሐይ ፕላኔቶች ዳታ ሰንጠረዥ፡
ከሜርኩሪ እስከ ፕሉቶ ድረስ ያሉት ፕላኔቶች የርቀት ኪዩብና የጊዜ ካሬ ምጣኔ (T²/r³) ፍጹም አንድ ወጥ 1.00 መሆኑን ያረጋግጣል።

የሳተላይት እንቅስቃሴ፡
በመሬት ዙሪያ በከፍታ h ላይ ለሚዞር ሳተላይት የኦርቢታል ፍጥነት፡
v = √(G M_E / r)
ከመሬት ስበት ሙሉ በሙሉ ለማምለጥ የሚያስፈልገው ዝቅተኛ ፍጥነት (Escape velocity)፡
v_esc = √(2 G M_E / R_E) ≈ 11.2 ኪ.ሜ/ሰከንድ ነው።`,
    tables: [
      {
        id: 'phys-tbl-planetary',
        caption: 'Table: Planetary Orbital Data (Mean Distance vs Period)',
        headers: ['Planet', 'Mean Distance r (AU)', 'Period T (years)', 'T² / r³'],
        rows: [
          ['Mercury', '0.387', '0.241', '1.00'],
          ['Venus', '0.723', '0.615', '1.00'],
          ['Earth', '1.000', '1.000', '1.00'],
          ['Mars', '1.524', '1.881', '1.00'],
          ['Jupiter', '5.203', '11.86', '1.00'],
          ['Saturn', '9.539', '29.46', '1.00'],
          ['Uranus', '19.18', '84.01', '1.00'],
          ['Neptune', '30.06', '164.8', '1.00'],
          ['Pluto', '39.44', '247.7', '1.00']
        ]
      }
    ]
  },

  // Page 51 - Book page 43
  {
    pdfPageNumber: 51,
    bookPageLabel: '43',
    chapterNumber: 2,
    sectionRef: '2.3',
    titleEn: 'Weightlessness & Introduction to Work and Energy',
    titleAm: 'ክብደት አልባነት እና የስራና ኃይል መግቢያ',
    subtopicEn: 'Physical Meaning of Weightlessness & 2.3. Work, Energy and Momentum',
    subtopicAm: 'የክብደት አልባነት ትርጉም እና ፪.፫ ስራ፣ ኃይል እና መስመራዊ ሞመንተም',
    pageType: 'content',
    contentEn: `Understanding Weightlessness:
Why do astronauts float in the International Space Station?
Common misconception: "There is no gravity in space." In fact, at the altitude of the space station (~400 km), Earth's gravity is still about 90% as strong as on the surface (g ≈ 8.7 m/s²)!
True explanation: The astronauts, the space station, and everything inside are in perpetual FREE FALL toward the center of the Earth. Because both the person and the floor fall with the exact same acceleration, the floor exerts NO normal force on the astronaut's feet:
F_apparent = m(g - a) = m(g - g) = 0.
Weightlessness is the sensation of having zero normal support force!

2.3. Work, Energy and Linear Momentum
Energy is one of the most important concepts in all of science. Everything that happens in the universe involves the transformation or transfer of energy.

In physics, "work" has a precise scientific definition that differs from everyday usage. Sitting at a desk studying hard may feel like heavy mental work, but if no force displaces an object, no physical work is done!`,
    contentAm: `ክብደት አልባነት (Weightlessness)፡
በጠፈር ጣቢያ ውስጥ ያሉ ጠፈርተኞች የሚንሳፈፉት ለምንድን ነው?
የተሳሳተ ግንዛቤ፡ "በህዋ ውስጥ ምንም የስበት ኃይል የለም" የሚል ነው። ነገር ግን በ400 ኪ.ሜ ከፍታ ላይ የመሬት ስበት 90% ያህል ጠንካራ ነው (g ≈ 8.7 ሜ/ሰ²)።
እውነተኛው ምክንያት፡ ጠፈርተኞቹ እና የጠፈር መንኮራኩሯ ሁለቱም በተመሳሳይ ፍጥነት ወደ መሬት በነፃ ውድቀት (Free fall) ላይ ስለሚገኙ ወለሉ በጠፈርተኞቹ እግር ላይ ምንም ዓይነት ኖርማል ጉልበት አይሰጥም (Apparent Weight = 0)።

፪.፫ ስራ፣ ኃይል እና መስመራዊ ሞመንተም
በፊዚክስ ውስጥ "ስራ" (Work) የሚለው ቃል ከዕለት ተዕለት አነጋገር የተለየ ትክክለኛ ሳይንሳዊ ትርጉም አለው። አንድን ነገር በጉልበት ገፍተን የቦታ ለውጥ ካላመጣን በፊዚክስ ህግ ምንም ስራ አልተሰራም! እንደተሰራ የሚቆጠረው ጉልበት ተተግብሮ እቃው ሲንቀሳቀስ ብቻ ነው።`
  },

  // Page 52 - Book page 44
  {
    pdfPageNumber: 52,
    bookPageLabel: '44',
    chapterNumber: 2,
    sectionRef: '2.3.1',
    titleEn: 'Work and Energy: The Three Conditions for Work',
    titleAm: 'ስራ እና ኃይል፡ ስራ ለመሰራት የሚያስፈልጉ ሦስቱ ሁኔታዎች',
    subtopicEn: '2.3.1. Necessary Conditions for Work: Force, Displacement & Component',
    subtopicAm: '፪.፫.፩ ስራ ለመሰራት የሚያስፈልጉ ሁኔታዎች፡ ጉልበት፣ ርቀት እና የጉልበት አቅጣጫ',
    pageType: 'content',
    contentEn: `Objectives:
At the end of this section you will be able to:
• Define work, energy and linear momentum.
• State the work-energy theorem.
• Distinguish between conservative and non-conservative forces.
• Apply the law of conservation of mechanical energy.
• State the law of conservation of linear momentum.
• Analyze elastic and inelastic collisions.
• Locate the center of mass of a system of particles.

2.3.1. Work and Energy
Work is done on an object when a force causes a displacement of that object.
Three conditions must be satisfied for work to be done:
1. There must be an applied force (F ≠ 0).
2. There must be a displacement (Δr ≠ 0).
3. The force must have a component along the direction of displacement (θ ≠ 90°).

If you push against a solid brick wall all day until exhausted, work done on the wall = 0 (since Δr = 0).
If you carry a heavy suitcase horizontally across a room at constant speed, the vertical lifting force does NO work on the suitcase because the force is perpendicular to displacement (cos 90° = 0).`,
    contentAm: `የክፍሉ አላማዎች፡ ስራን፣ ኃይልን እና መስመራዊ ሞመንተምን መግለጽ፤ የስራና የኪነቲክ ኃይል ቴዎረምን ማረጋገጥ፤ የመካኒካል ኃይል እና ሞመንተም ጥበቃ ህጎችን መተግበር።

፪.፫.፩ ስራ እና ኃይል (Work and Energy)
ስራ ለመሰራት ሦስት ሁኔታዎች መሟላት አለባቸው፡
፩. ውጫዊ ጉልበት መኖር አለበት (F ≠ 0)፤
፪. የቦታ ለውጥ መኖር አለበት (Δr ≠ 0)፤
፫. ጉልበቱ ወይም ከጉልበቱ አንዱ ክፍል ከቦታ ለውጡ አቅጣጫ ጋር ተመሳሳይ መሆን አለበት (θ ≠ 90°)።

የጡብ ግንብ ቀኑን ሙሉ ብትገፋ ግንቡ ስላልተንቀሳቀሰ ስራው ዜሮ ነው፤ ከባድ ሻንጣ ተሸክመህ በአግድም ወለል ላይ ብትጓዝም የማንሻው ጉልበትና እንቅስቃሴው 90 ዲግሪ ስለሚሰሩ የተሰራው ስራ ዜሮ ነው።`
  },

  // Page 53 - Book page 45
  {
    pdfPageNumber: 53,
    bookPageLabel: '45',
    chapterNumber: 2,
    sectionRef: '2.3.1',
    titleEn: 'Work Definition Formula & Spring Hooke Force',
    titleAm: 'የስራ ቀመር እና የስፕሪንግ የሁክ ጉልበት',
    subtopicEn: 'W = F . delta_r = F delta_r cos(theta) & Spring Restoring Force F_s = -kx',
    subtopicAm: 'ስራ W = F Δr cosθ እና የስፕሪንግ መመለሻ ጉልበት Fs = -kx',
    pageType: 'content',
    contentEn: `Mathematical Definition of Work:
The work done by a constant force F⃗ during a displacement Δr⃗ is defined as the dot product (scalar product) of the force and displacement vectors:
W = F⃗ · Δr⃗ = F Δr cosθ ---------------------------------------------- (2.3.1)
where:
• F = magnitude of the force
• Δr = magnitude of the displacement
• θ = angle between the force vector and the displacement vector.

Units of Work:
In SI units, force is in newtons (N) and displacement is in meters (m).
Unit of work = 1 N·m = 1 Joule (J).
One Joule is the work done when a force of 1 N acts through a distance of 1 m.

Work Done by a Variable Force:
If the force varies as a function of position, the work done is the area under the force-displacement graph:
W = ∫_{x_i}^{x_f} F(x) dx

Work Done by a Spring (Hooke's Law):
The restoring force exerted by an ideal spring stretched or compressed by distance x is:
F_s = -k x ----------------------------------------------------------- (2.3.2)
where k is the spring constant (N/m).`,
    contentAm: `የስራ ቀመር፡
በቋሚ ጉልበት የሚሰራ ስራ የጉልበቱና የቦታ ለውጡ ቬክተሮች የነጥብ ብዜት (Dot product) ነው፡
W = F⃗ · Δr⃗ = F Δr cosθ (ቀመር 2.3.1)
የስራ የSI አሃድ፡ ኒውተን ሜትር (N·m) ወይም ጁል (Joule - J) ነው።

ተለዋዋጭ ጉልበት ሲኖር ስራው በግራፍ ስር የሚገኘው ስፋት (Area under F-x curve) ነው፡
W = ∫ F(x) dx

የስፕሪንግ ጉልበት (Hooke's Law)፡
Fs = -k x (ቀመር 2.3.2)
k የስፕሪንግ ቋሚ ቁጥር (N/m) ሲሆን፣ x ከመደበኛ ይዞታው የተለጠጠበት ርቀት ነው።`
  },

  // Page 54 - Book page 46
  {
    pdfPageNumber: 54,
    bookPageLabel: '46',
    chapterNumber: 2,
    sectionRef: '2.3.1',
    titleEn: 'Spring Work Integral & Kinetic vs Potential Energy',
    titleAm: 'የስፕሪንግ ስራ ኢንቴግራል እና ኪነቲክ ከፖቴንሺያል ኃይል',
    subtopicEn: 'W = 1/2 k x_i^2 - 1/2 k x_f^2 & Definitions of KE and PE',
    subtopicAm: 'የስፕሪንግ ስራ ቀመር እና የእንቅስቃሴ (KE) እንዲሁም ክምችት (PE) ኃይል ትርጉሞች',
    pageType: 'content',
    contentEn: `Work Done on a Spring:
The work done by an applied force to stretch or compress a spring from x_i to x_f is:
W_app = ∫_{x_i}^{x_f} (kx) dx = 1/2 k x_f² - 1/2 k x_i²
The work done BY the spring restoring force is:
W_s = 1/2 k x_i² - 1/2 k x_f² --------------------------------------- (2.3.3)

Example: A force F(x) = (2x + 1) N acts on a particle as it moves from x = 0 to x = 5 m. Find the work done.
Solution: W = ∫₀⁵ (2x + 1) dx = [x² + x]₀⁵ = (25 + 5) - 0 = 30 J.

Energy:
Energy is defined as the capacity or ability to do work. Like work, energy is a scalar quantity measured in Joules (J).

Types of Mechanical Energy:
1. Kinetic Energy (KE): The energy that an object possesses by virtue of its motion. For an object of mass m moving with speed v:
   KE = 1/2 m v² ---------------------------------------------------- (2.3.4)

2. Potential Energy (PE): The energy possessed by an object by virtue of its position, shape, or configuration relative to other objects:
   • Gravitational Potential Energy (Ug): Energy stored due to an object's elevation in a gravitational field:
     Ug = m g y`,
    contentAm: `በስፕሪንግ የሚሰራ ስራ፡
Ws = 1/2 k xi² - 1/2 k xf² (ቀመር 2.3.3)

ምሳሌ፡ F(x) = (2x + 1) N የሆነ ጉልበት ከ x=0 እስከ x=5 ሜትር ሲሰራ፡ W = [x² + x] = 25 + 5 = 30 ጁል።

ኃይል (Energy)፡ ስራ የመስራት አቅም ወይም ችሎታ ነው።

የመካኒካል ኃይል አይነቶች፡
፩. የእንቅስቃሴ ኃይል (Kinetic Energy - KE)፡ አንድ አካል በእንቅስቃሴው ምክንያት የሚያገኘው ኃይል ነው፡
KE = 1/2 m v² (ቀመር 2.3.4)

፪. የክምችት ኃይል (Potential Energy - PE)፡ አንድ አካል በቦታው ወይም በተለጠጠ ቅርጹ ምክንያት የሚያከማቸው ኃይል ነው፡
የስበት ክምችት ኃይል፡ Ug = m g y።`
  },

  // Page 55 - Book page 47
  {
    pdfPageNumber: 55,
    bookPageLabel: '47',
    chapterNumber: 2,
    sectionRef: '2.3.1',
    titleEn: 'Gravitational PE & Work-Energy Theorem',
    titleAm: 'የስበት ክምችት ኃይል እና የስራ-ኃይል ቴዎረም',
    subtopicEn: 'Delta U_g = mg Delta y & Derivation of W_net = Delta KE',
    subtopicAm: 'ΔUg = mgΔy እና ጥምር ስራ ከኪነቲክ ኃይል ለውጥ ጋር እኩል የመሆኑ ማረጋገጫ',
    pageType: 'content',
    contentEn: `Change in Gravitational Potential Energy:
ΔU_g = m g Δy = m g (y_f - y_i) ------------------------------------- (2.3.5)
The work done by gravity is W_g = -ΔU_g.

• Elastic Potential Energy (U_s): Energy stored in a stretched or compressed elastic material (such as a spring):
U_s = 1/2 k x²

The Work-Energy Theorem:
"The net work done by all external forces acting on a particle is equal to the change in the kinetic energy of the particle."

Derivation (for 1D motion with constant acceleration):
From kinematics:
v_f² - v_i² = 2 a Δx  =>  a Δx = 1/2 (v_f² - v_i²)
Multiply both sides by mass m:
m a Δx = 1/2 m v_f² - 1/2 m v_i²
Since F_net = m a, the left side is F_net Δx = W_net:
W_net = 1/2 m v_f² - 1/2 m v_i²
W_net = KE_f - KE_i = ΔKE ------------------------------------------- (2.3.6)`,
    contentAm: `የስበት ክምችት ኃይል ለውጥ፡
ΔUg = mgΔy = mg(yf - yi) (ቀመር 2.3.5)
የስፕሪንግ ክምችት ኃይል፡ Us = 1/2 k x²

የስራ-ኃይል ቴዎረም (Work-Energy Theorem)፡
"በአንድ አካል ላይ የሚያርፉ የሁሉም ውጫዊ ጉልበቶች ጥምር ስራ ከአካሉ የእንቅስቃሴ ኃይል ለውጥ ጋር እኩል ነው።"

ማረጋገጫ፡
vf² - vi² = 2aΔx
በክብደት (m) ስናባዛው፡
m a Δx = 1/2 m vf² - 1/2 m vi²
W_net = 1/2 m vf² - 1/2 m vi² = ΔKE (ቀመር 2.3.6)`
  },

  // Page 56 - Book page 48
  {
    pdfPageNumber: 56,
    bookPageLabel: '48',
    chapterNumber: 2,
    sectionRef: '2.3.1',
    titleEn: 'Work-Energy Example & Conservation of Mechanical Energy',
    titleAm: 'የስራ-ኃይል ምሳሌ እና የመካኒካል ኃይል ጥበቃ ህግ',
    subtopicEn: 'Kinetic Energy Calculation & Isolated System Energy Conservation',
    subtopicAm: 'የኪነቲክ ኃይል ስሌት እና በዝግ ስርአት ውስጥ የመካኒካል ኃይል ጥበቃ',
    pageType: 'content',
    contentEn: `Example:
A 0.600-kg particle has a speed of 2.00 m/s at point A and kinetic energy of 7.50 J at point B. What is:
(a) Its kinetic energy at A?
(b) Its speed at B?
(c) The total work done on the particle as it moves from A to B?

Solution:
(a) KE_A = 1/2 m v_A² = 1/2 (0.600 kg)(2.00 m/s)² = 1.20 J.
(b) KE_B = 1/2 m v_B² = 7.50 J  =>  v_B = √(2 KE_B / m) = √(2 × 7.50 / 0.600) = √25.0 = 5.00 m/s.
(c) By the work-energy theorem:
    W_net = KE_B - KE_A = 7.50 J - 1.20 J = 6.30 J.

Conservation of Mechanical Energy:
Total mechanical energy is defined as the sum of kinetic and potential energies:
E = KE + PE = KE + U

Conservative vs Non-conservative Forces:
• A force is conservative if the work it does on an object moving between two points is independent of the path taken (e.g., gravity, spring force).
• A force is non-conservative if the work done depends on the path (e.g., friction, air drag). Friction transforms mechanical energy into internal thermal energy.`,
    contentAm: `የተሰራ ምሳሌ፡
0.600 ኪ.ግ የሚመዝን ቅንጣት በነጥብ A ላይ 2.00 ሜ/ሰ ስፒድ ሲኖረው፣ በነጥብ B ላይ 7.50 ጁል የኪነቲክ ኃይል አለው፡
ሀ. በነጥብ A ያለው የኪነቲክ ኃይል፡ KE_A = 1/2 (0.6)(2)² = 1.20 ጁል።
ለ. በነጥብ B ያለው ስፒድ፡ v_B = √(2 × 7.5 / 0.6) = 5.00 ሜ/ሰ።
ሐ. ከአካሉ ላይ የተሰራው ጥምር ስራ፡ W_net = 7.50 - 1.20 = 6.30 ጁል።

የመካኒካል ኃይል ጥበቃ ህግ፡
አጠቃላይ መካኒካል ኃይል የኪነቲክና የፖቴንሺያል ኃይል ድምር ነው፡ E = KE + PE። ጥበቃ ያላቸው ጉልበቶች (ስበት፣ ስፕሪንግ) ብቻ ባሉበት ስርዓት ውስጥ አጠቃላይ መካኒካል ኃይሉ ምንጊዜም ቋሚ ነው።`
  },

  // Page 57 - Book page 49
  {
    pdfPageNumber: 57,
    bookPageLabel: '49',
    chapterNumber: 2,
    sectionRef: '2.3.1',
    titleEn: 'Mechanical Energy Conservation Formula & Ramp Example',
    titleAm: 'የመካኒካል ኃይል ጥበቃ ቀመር እና የተዳፋት ሳጥን ምሳሌ',
    subtopicEn: 'KE_i + PE_i = KE_f + PE_f & Non-Conservative Work with Friction',
    subtopicAm: 'የኃይል ጥበቃ ቀመር እና የግጭት ስራ ስሌት በተዳፋት ላይ',
    pageType: 'content',
    contentEn: `In an isolated system where only conservative forces act, the total mechanical energy remains constant (is conserved):
E_i = E_f  =>  KE_i + PE_i = KE_f + PE_f
1/2 m v_i² + m g y_i = 1/2 m v_f² + m g y_f

If non-conservative forces (like friction) do work:
W_nc = ΔE = (KE_f + PE_f) - (KE_i + PE_i)

Example:
A 3.00-kg crate slides down a ramp 1.00 m long inclined at 30.0°. It starts from rest at the top. A constant frictional force of 5.00 N acts on the crate. What is the speed of the crate at the bottom of the ramp?

Solution:
Height at top: h = d sin(30.0°) = (1.00 m)(0.500) = 0.500 m.
Initial state (top):
KE_i = 0, PE_i = m g h = (3.00 kg)(9.8 m/s²)(0.500 m) = 14.7 J.
E_i = 14.7 J.

Work done by friction:
W_friction = - f_k d = - (5.00 N)(1.00 m) = - 5.00 J.

Final state (bottom, y = 0):
PE_f = 0, KE_f = 1/2 m v_f² = 1/2 (3.00) v_f² = 1.50 v_f².
E_f = 1.50 v_f².`,
    contentAm: `የመካኒካል ኃይል ጥበቃ ቀመር፡
KE_i + PE_i = KE_f + PE_f
1/2 m vi² + m g yi = 1/2 m vf² + m g yf

ግጭት (Non-conservative force) ሲኖር፡
W_nc = ΔE = Ef - Ei

ምሳሌ፡
3.00 ኪ.ግ ሳጥን በ30° በተዘነበለ 1.00 ሜትር ርዝመት ባለው ተዳፋት ላይ ከእረፍት መንሸራተት ጀመረ። 5.00 ኒውተን ቋሚ የግጭት ጉልበት ቢኖርበት መጨረሻው ላይ ሲደርስ ፍጥነቱ ስንት ይሆናል?

መፍትሔ፡
የመነሻ ከፍታ፡ h = 1.00 × sin 30° = 0.500 ሜትር።
የመነሻ ኃይል፡ Ei = mgh = 3 × 9.8 × 0.5 = 14.7 ጁል።
የግጭት ስራ፡ W_f = -5.00 × 1.00 = -5.00 ጁል።`
  },

  // Page 58 - Book page 50
  {
    pdfPageNumber: 58,
    bookPageLabel: '50',
    chapterNumber: 2,
    sectionRef: '2.3.2',
    titleEn: 'Power: Definition, Formulas, Units & Conversion',
    titleAm: 'ፓወር (Power)፡ ትርጉም፣ ቀመሮች፣ አሃዶች እና ልወጣ',
    subtopicEn: '2.3.2. P_av = W / delta_t, P = F . v, Watt, Horsepower & kWh',
    subtopicAm: '፪.፫.፪ አማካይና ቅጽበታዊ ፓወር፣ ዋት፣ ሆርስፓወር እና ኪሎዋት ሰዓት',
    pageType: 'content',
    contentEn: `Crate Solution Continued:
W_nc = E_f - E_i  =>  -5.00 J = 1.50 v_f² - 14.7 J
1.50 v_f² = 14.7 J - 5.00 J = 9.7 J
v_f² = 9.7 / 1.50 = 6.47  =>  v_f = √6.47 ≈ 2.54 m/s.

2.3.2. Power
Power is defined as the time rate at which work is done or energy is transferred.
Average Power (P_av):
P_av = W / Δt = ΔE / Δt ---------------------------------------------- (2.3.7)

Instantaneous Power (P):
P = lim_{Δt→0} (W / Δt) = dW / dt ----------------------------------- (2.3.8)
Since dW = F⃗ · dr⃗:
P = F⃗ · (dr⃗ / dt) = F⃗ · v⃗ = F v cosθ ----------------------------- (2.3.9)

Units of Power:
In SI units, work is in Joules and time is in seconds.
1 Watt (W) = 1 Joule per second (J/s) = 1 kg·m²/s³.
• 1 kilowatt (kW) = 1,000 W = 10³ W
• 1 megawatt (MW) = 1,000,000 W = 10⁶ W
• 1 horsepower (hp) = 746 W (common in engineering and engines)

The kilowatt-hour (kWh) is a unit of ENERGY, not power:
1 kWh = (1,000 J/s)(3,600 s) = 3.6 × 10⁶ J = 3.6 MJ.`,
    contentAm: `የሳጥኑ ስሌት ፍጻሜ፡
1.50 vf² = 9.7 => vf = 2.54 ሜ/ሰ።

፪.፫.፪ ፓወር (Power)
ፓወር ስራ የሚሰራበት ወይም ኃይል የሚተላለፍበት የጊዜ ምጣኔ ነው፡
አማካይ ፓወር፡ P_av = W / Δt (ቀመር 2.3.7)
ቅጽበታዊ ፓወር፡ P = F⃗ · v⃗ = F v cosθ (ቀመር 2.3.9)

የፓወር አሃዶች፡
ዋት (Watt, W) = 1 ጁል በሰከንድ (J/s)
• 1 ሆርስፓወር (hp) = 746 ዋት
• 1 ኪሎዋት ሰዓት (kWh) የኃይል መለኪያ ነው፡ 1 kWh = 3.6 × 10⁶ ጁል።`
  },

  // Page 59 - Book page 51
  {
    pdfPageNumber: 59,
    bookPageLabel: '51',
    chapterNumber: 2,
    sectionRef: '2.3.3',
    titleEn: 'Linear Momentum & Impulse-Momentum Theorem',
    titleAm: 'መስመራዊ ሞመንተም እና የኢምፓልስ-ሞመንተም ቴዎረም',
    subtopicEn: '2.3.3. p = mv, F = dp/dt and Impulse I = Delta p = F delta_t',
    subtopicAm: '፪.፫.፫ ሞመንተም (p = mv) እና ኢምፓልስ (I = Δp = FΔt)',
    pageType: 'content',
    contentEn: `Example (Power):
If a motor's speed is doubled and the resisting torque is also doubled, what happens to the required power?
Solution: P = F·v. If both F and v are doubled: P_new = (2F)(2v) = 4 (Fv) = 4 P_old. Power increases by a factor of 4.

2.3.3. Linear Momentum
Linear momentum (p⃗) of a particle is defined as the product of its mass and its velocity:
p⃗ = m v⃗ ------------------------------------------------------------ (2.3.11)
Momentum is a vector quantity having the same direction as the velocity vector.
Units: kg·m/s.

Newton's Second Law in Terms of Momentum:
Newton originally stated his second law in terms of momentum:
F⃗_net = dp⃗ / dt = d(m v⃗) / dt
If mass m is constant: F⃗_net = m (dv⃗/dt) = m a⃗.

Impulse (I⃗):
The impulse of a force acting over a time interval Δt is defined as:
I⃗ = F⃗_avg Δt = ∫_{t_i}^{t_f} F⃗ dt --------------------------------- (2.3.12)
Impulse-Momentum Theorem:
"The impulse of the net force acting on a particle equals the change in momentum of the particle:"
I⃗ = Δp⃗ = p⃗_f - p⃗_i = m v⃗_f - m v⃗_i`,
    contentAm: `፪.፫.፫ መስመራዊ ሞመንተም (Linear Momentum)
የአንድ አካል መስመራዊ ሞመንተም (p⃗) የክብደቱ እና የፍጥነቱ ብዜት ነው፡
p⃗ = m v⃗ (ቀመር 2.3.11)
ሞመንተም ቬክተር ሲሆን አሃዱም kg·m/s ነው።

የኒውተን ሁለተኛ ህግ በሞመንተም ሲገለጽ፡
F⃗_net = dp⃗ / dt

ኢምፓልስ (Impulse - I⃗)፡
በአንድ አካል ላይ የተተገበረ ጉልበት ከወሰደው ጊዜ ጋር ሲባዛ ኢምፓልስ ይገኛል፡
I⃗ = F⃗ Δt = Δp⃗ (የኢምፓልስ-ሞመንተም ቴዎረም)
ይህም ማለት በአካል ላይ ያረፈው ኢምፓልስ ከሞመንተም ለውጡ ጋር እኩል ነው።`
  },

  // Page 60 - Book page 52
  {
    pdfPageNumber: 60,
    bookPageLabel: '52',
    chapterNumber: 2,
    sectionRef: '2.3.3',
    titleEn: 'Conservation of Linear Momentum & Archer Recoil',
    titleAm: 'የመስመራዊ ሞመንተም ጥበቃ ህግ እና የቀስተኛ ወደ ኋላ መንሸራተት',
    subtopicEn: 'Derivation from Third Law: m1 v1i + m2 v2i = m1 v1f + m2 v2f',
    subtopicAm: 'ከኒውተን ሦስተኛ ህግ የተረጋገጠ የሞመንተም ጥበቃ እና የቀስት ምሳሌ',
    pageType: 'content',
    contentEn: `Conservation of Linear Momentum:
Consider two particles 1 and 2 interacting with each other. By Newton's third law:
F⃗₂₁ = - F⃗₁₂  =>  F⃗₂₁ + F⃗₁₂ = 0
dp⃗₁/dt + dp⃗₂/dt = 0  =>  d(p⃗₁ + p⃗₂)/dt = 0
Therefore, the total linear momentum of an isolated system remains constant:
p⃗_tot = constant
p⃗₁i + p⃗₂i = p⃗₁f + p⃗₂f
m₁ v⃗₁i + m₂ v⃗₂i = m₁ v⃗₁f + m₂ v⃗₂f -------------------------------- (2.3.13)

Law of Conservation of Linear Momentum:
"Whenever two or more particles in an isolated system interact, the total momentum of the system remains constant in both magnitude and direction."

Example 1 (Recoil of Archer):
A 60-kg archer stands at rest on frictionless ice and fires a 0.50-kg arrow horizontally at 50 m/s. With what velocity does the archer move across the ice after firing?
Solution:
Initial state (archer + arrow at rest): p_i = 0.
Final state:
p_f = m_archer v_archer + m_arrow v_arrow = 0
(60 kg) v_archer + (0.50 kg)(50 m/s) = 0
60 v_archer + 25 = 0  =>  v_archer = -25 / 60 ≈ -0.42 m/s.
The archer recoils in the opposite direction at 0.42 m/s!`,
    contentAm: `የመስመራዊ ሞመንተም ጥበቃ ህግ፡
በተዘጋጀ የብቻ (Isolated) ስርዓት ውስጥ ውጫዊ ኃይል እስካልተተገበረ ድረስ የሁሉም አካላት አጠቃላይ ሞመንተም ሁልጊዜ ቋሚ ነው፡
m1 v1i + m2 v2i = m1 v1f + m2 v2f (ቀመር 2.3.13)

ምሳሌ ፩ (የቀስተኛው ወደ ኋላ መፈናጠር)፡
60 ኪ.ግ የሚመዝን ቀስተኛ ግጭት በሌለው በረዶ ላይ ቆሞ 0.50 ኪ.ግ የሆነ ቀስት በ50 ሜ/ሰ አግድም ፍጥነት ተኮሰ። ከተተኮሰ በኋላ የቀስተኛው ፍጥነት ስንት ይሆናል?

መፍትሔ፡
የመነሻ ሞመንተም = 0።
የመጨረሻ፡ (60) v + (0.50)(50) = 0
60 v = -25 => v = -0.42 ሜ/ሰ።
ቀስተኛው ወደ ኋላ በ0.42 ሜ/ሰ ፍጥነት ይፈናጠራል!`
  },

  // Page 61 - Book page 53
  {
    pdfPageNumber: 61,
    bookPageLabel: '53',
    chapterNumber: 2,
    sectionRef: '2.3.4',
    titleEn: 'Collisions: Elastic, Inelastic & Perfectly Inelastic',
    titleAm: 'ግጭቶች (Collisions)፡ የመለጠጥ፣ የላላ እና ፍጹም የተጣበቀ',
    subtopicEn: '2.3.4. Classification of Collisions & Kinetic Energy Conservation',
    subtopicAm: '፪.፫.፬ የግጭቶች ክፍፍል እና የኪነቲክ ኃይል ሁኔታ',
    pageType: 'content',
    contentEn: `Activity:
A 1200-kg car traveling east at 25 m/s collides with a 9000-kg truck traveling west at 20 m/s. If the vehicles lock bumpers during collision, what is their final velocity immediately after collision?

2.3.4. Collisions
A collision is an isolated event in which two or more moving bodies exert relatively strong forces on each other for a relatively short time.
In ALL collisions occurring in an isolated system, total linear momentum is conserved!
However, kinetic energy is NOT necessarily conserved.

Classification of Collisions:
1. Elastic Collision: Both momentum AND total kinetic energy are conserved. No mechanical energy is lost to heat, sound, or permanent deformation:
   Σp_i = Σp_f   and   ΣKE_i = ΣKE_f

2. Inelastic Collision: Total momentum is conserved, but kinetic energy is NOT conserved (some kinetic energy is transformed into thermal energy, sound, or work of deformation):
   Σp_i = Σp_f   but   ΣKE_f < ΣKE_i

3. Perfectly Inelastic Collision: An inelastic collision in which the colliding bodies stick together and move as a single combined mass after collision. Maximum kinetic energy is lost.`,
    contentAm: `፪.፫.፬ ግጭቶች (Collisions)
በማንኛውም ግጭት ውስጥ አጠቃላይ መስመራዊ ሞመንተም ምንጊዜም ይጠበቃል (Conserved)፤ ነገር ግን የኪነቲክ ኃይል ሁልጊዜ ላይጠበቅ ይችላል።

የግጭቶች አይነቶች፡
፩. የመለጠጥ ግጭት (Elastic Collision)፡ ሞመንተምም ሆነ ኪነቲክ ኃይል ሁለቱም ሳይባክኑ ሙሉ በሙሉ የሚጠበቁበት ግጭት ነው።
፪. የላላ ግጭት (Inelastic Collision)፡ ሞመንተም ይጠበቃል፤ ነገር ግን የኪነቲክ ኃይል በከፊል ወደ ሙቀት፣ ድምፅ ወይም ቅርፅ መበላሸት ይለወጣል።
፫. ፍጹም የተጣበቀ ግጭት (Perfectbly Inelastic)፡ አካላቱ ከተጋጩ በኋላ አንድ ላይ ተጣብቀው በአንድ የጋራ ፍጥነት የሚጓዙበት ሲሆን ከፍተኛ የኪነቲክ ኃይል ብክነት ይከሰታል።`
  },

  // Page 62 - Book page 54
  {
    pdfPageNumber: 62,
    bookPageLabel: '54',
    chapterNumber: 2,
    sectionRef: '2.3.4',
    titleEn: 'Elastic Collision Derivations & Relative Velocities',
    titleAm: 'የመለጠጥ ግጭት ቀመሮች ማረጋገጫ እና ተዛማጅ ፍጥነቶች',
    subtopicEn: 'Relative Speed of Separation Equation: v1i - v2i = -(v1f - v2f)',
    subtopicAm: 'የመቀራረብና የመራራቅ ፍጥነቶች ቀመር (2.3.16)',
    pageType: 'content',
    contentEn: `One-Dimensional Elastic Collisions:
Consider two particles of masses m₁ and m₂ moving with initial velocities v₁i and v₂i along a line.
From conservation of momentum:
m₁ v₁i + m₂ v₂i = m₁ v₁f + m₂ v₂f
m₁ (v₁i - v₁f) = m₂ (v₂f - v₂i) ----------------------------------- (a)

From conservation of kinetic energy:
1/2 m₁ v₁i² + 1/2 m₂ v₂i² = 1/2 m₁ v₁f² + 1/2 m₂ v₂f²
m₁ (v₁i² - v₁f²) = m₂ (v₂f² - v₂i²)
m₁ (v₁i - v₁f)(v₁i + v₁f) = m₂ (v₂f - v₂i)(v₂f + v₂i) ------------- (b)

Dividing equation (b) by equation (a):
v₁i + v₁f = v₂f + v₂i
v₁i - v₂i = - (v₁f - v₂f) ------------------------------------------ (2.3.16)

This remarkable result states that for any 1D elastic collision, the relative speed of approach before collision equals the relative speed of separation after collision!

Solving for final velocities:
v₁f = [(m₁ - m₂) / (m₁ + m₂)] v₁i + [2 m₂ / (m₁ + m₂)] v₂i
v₂f = [2 m₁ / (m₁ + m₂)] v₁i + [(m₂ - m₁) / (m₁ + m₂)] v₂i`,
    contentAm: `ባለ አንድ አውድ የመለጠጥ ግጭት ቀመር ማረጋገጫ፡
ከሞመንተምና ከኪነቲክ ኃይል ጥበቃ ቀመሮች በማዋሃድ፡
v1i - v2i = - (v1f - v2f) (ቀመር 2.3.16)

ይህ ድንቅ ውጤት የሚያሳየው፡ በማንኛውም የመለጠጥ ግጭት ወቅት አካላቱ ከመጋጨታቸው በፊት እርስ በእርስ የሚቀራረቡበት አንጻራዊ ፍጥነት ከተጋጩ በኋላ እርስ በእርስ ከሚራራቁበት አንጻራዊ ፍጥነት ጋር ፍጹም እኩል መሆኑን ነው!`
  },

  // Page 63 - Book page 55
  {
    pdfPageNumber: 63,
    bookPageLabel: '55',
    chapterNumber: 2,
    sectionRef: '2.3.4',
    titleEn: 'Perfect Inelastic Formula & Collision Examples',
    titleAm: 'ፍጹም የተጣበቀ ግጭት ቀመር እና የግጭት ምሳሌዎች',
    subtopicEn: 'v_f = (m1 v1i + m2 v2i) / (m1 + m2) & Arrow in Sliding Target Problem',
    subtopicAm: 'የተጣበቁ አካላት የጋራ ፍጥነት ቀመር እና ኢላማ ላይ ያረፈ ቀስት ስሌት',
    pageType: 'content',
    contentEn: `Perfect Inelastic Collision Formula:
Because the two masses stick together, they move with a single common final velocity v_f:
m₁ v₁i + m₂ v₂i = (m₁ + m₂) v_f
v_f = (m₁ v₁i + m₂ v₂i) / (m₁ + m₂) --------------------------------- (2.3.17)

Example 1:
A 0.10-kg arrow is fired at 50 m/s into a 2.90-kg wooden target initially at rest on a frictionless surface. The arrow embeds in the target. What is the final velocity of the arrow and target together?
Solution:
Given: m₁ = 0.10 kg, v₁i = 50 m/s, m₂ = 2.90 kg, v₂i = 0.
v_f = (m₁ v₁i + m₂ v₂i) / (m₁ + m₂)
v_f = (0.10 × 50 + 2.90 × 0) / (0.10 + 2.90) = 5.0 / 3.00 = 1.67 m/s.

Example 2:
A block of mass m₁ = 1.60 kg moving right at 4.00 m/s collides head-on elastically with a block of mass m₂ = 2.10 kg moving left at 2.50 m/s. Find the velocities of both blocks after collision.`,
    contentAm: `ፍጹም የተጣበቀ ግጭት ቀመር፡
ሁለቱ አካላት ከተጋጩ በኋላ አንድ አካል ስለሚሆኑ የጋራ ፍጥነታቸው (vf)፡
vf = (m1 v1i + m2 v2i) / (m1 + m2) (ቀመር 2.3.17)

ምሳሌ ፩፡
0.10 ኪ.ግ ቀስት በ50 ሜ/ሰ ተተኩሶ ግጭት አልባ ወለል ላይ በእረፍት በተቀመጠ 2.90 ኪ.ግ የእንጨት ኢላማ ውስጥ ተሰካ። ከተሰካ በኋላ የሁለቱ የጋራ ፍጥነት ስንት ይሆናል?
መፍትሔ፡
vf = (0.10 × 50 + 0) / (0.10 + 2.90) = 5.0 / 3.0 = 1.67 ሜ/ሰ።`
  },

  // Page 64 - Book page 56
  {
    pdfPageNumber: 64,
    bookPageLabel: '56',
    chapterNumber: 2,
    sectionRef: '2.3.5',
    titleEn: 'Simultaneous Collision Solution & Center of Mass',
    titleAm: 'የግጭት ቀጣይ መፍትሔ እና የክብደት ማዕከል (Center of Mass)',
    subtopicEn: '2.3.5. Center of Mass Concept & Coordinates of System of Particles',
    subtopicAm: '፪.፫.፭ የክብደት ማዕከል ፅንሰ-ሀሳብ እና የቅንጣቶች የኮኦርዲኔት ቀመር',
    pageType: 'content',
    contentEn: `Solution to Example 2:
Given: m₁ = 1.60 kg, v₁i = +4.00 m/s; m₂ = 2.10 kg, v₂i = -2.50 m/s.
From elastic relative velocity equation:
v₁f - v₂f = - (v₁i - v₂i) = - (4.00 - (-2.50)) = - 6.50 m/s
v₁f = v₂f - 6.50

From momentum conservation:
(1.60)(4.00) + (2.10)(-2.50) = 1.60 v₁f + 2.10 v₂f
6.40 - 5.25 = 1.15 = 1.60(v₂f - 6.50) + 2.10 v₂f
1.15 = 1.60 v₂f - 10.40 + 2.10 v₂f
3.70 v₂f = 11.55  =>  v₂f = +3.12 m/s.
Then:
v₁f = 3.12 - 6.50 = -3.38 m/s.

2.3.5. Center of Mass
The center of mass (CM) of a system of particles is the unique point at which the entire mass of the system may be considered to be concentrated for the purpose of describing its translational motion under external forces.

For an isolated system, the center of mass moves at constant velocity regardless of internal interactions, collisions, or explosions between individual particles.`,
    contentAm: `የምሳሌ ፪ ፍጻሜ፡
v1f = -3.38 ሜ/ሰ (ወደ ግራ ይመለሳል)፤ v2f = +3.12 ሜ/ሰ (ወደ ቀኝ ይመለሳል)።

፪.፫.፭ የክብደት ማዕከል (Center of Mass - CM)
የአንድ ስርዓት ቅንጣቶች የክብደት ማዕከል ማለት የሁሉም ቅንጣቶች አጠቃላይ ክብደት ያረፈበት ተደርጎ የሚወሰደው ነጠላ ነጥብ ነው። የውጭ ኃይል በሌለበት ስርዓት ውስጥ በቅንጣቶቹ መካከል ምንም ዓይነት ግጭት ወይም ፍንዳታ ቢከሰትም፣ የክብደት ማዕከሉ ምንጊዜም በቋሚ ፍጥነት ጉዞውን ይቀጥላል።`
  },

  // Page 65 - Book page 57
  {
    pdfPageNumber: 65,
    bookPageLabel: '57',
    chapterNumber: 2,
    sectionRef: '2.3.5',
    titleEn: 'Center of Mass Formulas in 1D, 2D & 3D',
    titleAm: 'የክብደት ማዕከል ቀመሮች በ1D፣ 2D እና 3D',
    subtopicEn: 'Coordinate Equations (2.3.18, 2.3.19, 2.3.20) and Position Vector r_CM',
    subtopicAm: 'የክብደት ማዕከል መገኛ ቀመሮች (x_CM, y_CM, z_CM)',
    pageType: 'content',
    contentEn: `Coordinates of Center of Mass:
For a system of N particles with masses m₁, m₂, ..., m_N located at positions (x₁, y₁, z₁), (x₂, y₂, z₂), ...:
Total Mass: M = Σ m_i

X-coordinate:
x_CM = (m₁ x₁ + m₂ x₂ + ... + m_N x_N) / M = (Σ m_i x_i) / M -------- (2.3.18)

Y-coordinate:
y_CM = (m₁ y₁ + m₂ y₂ + ... + m_N y_N) / M = (Σ m_i y_i) / M -------- (2.3.19)

Z-coordinate:
z_CM = (m₁ z₁ + m₂ z₂ + ... + m_N z_N) / M = (Σ m_i z_i) / M -------- (2.3.20)

In Vector Form:
r⃗_CM = (Σ m_i r⃗_i) / M

Example 1:
A system consists of three particles with masses m₁ = 1.0 kg at (1.0, 0), m₂ = 2.0 kg at (2.0, 2.0), and m₃ = 3.0 kg at (0, 1.0). Find the coordinates of the center of mass.
Solution:
Total mass M = 1.0 + 2.0 + 3.0 = 6.0 kg.
x_CM = [1(1.0) + 2(2.0) + 3(0)] / 6.0 = (1.0 + 4.0 + 0) / 6.0 = 5.0 / 6.0 ≈ 0.83 m.
y_CM = [1(0) + 2(2.0) + 3(1.0)] / 6.0 = (0 + 4.0 + 3.0) / 6.0 = 7.0 / 6.0 ≈ 1.17 m.
Coordinates of CM = (0.83 m, 1.17 m).`,
    contentAm: `የክብደት ማዕከል ኮኦርዲኔቶች ቀመር፡
አጠቃላይ ክብደት M = m1 + m2 + ... + mn

x_CM = (Σ mi xi) / M (ቀመር 2.3.18)
y_CM = (Σ mi yi) / M (ቀመር 2.3.19)
z_CM = (Σ mi zi) / M (ቀመር 2.3.20)

ምሳሌ ፩፡
m1 = 1.0 kg በ(1, 0)፣ m2 = 2.0 kg በ(2, 2) እና m3 = 3.0 kg በ(0, 1) ላይ ቢገኙ፤ የክብደት ማዕከሉን ፈልግ፡
አጠቃላይ ክብደት = 6.0 ኪ.ግ።
x_CM = (1×1 + 2×2 + 3×0) / 6 = 5/6 = 0.83 ሜትር።
y_CM = (1×0 + 2×2 + 3×1) / 6 = 7/6 = 1.17 ሜትር።`
  },

  // Page 66 - Book page 58
  {
    pdfPageNumber: 66,
    bookPageLabel: '58',
    chapterNumber: 2,
    sectionRef: '2.3.5',
    titleEn: 'Center of Mass Activity & Velocity of Center of Mass',
    titleAm: 'የክብደት ማዕከል መልመጃ እና የክብደት ማዕከል ፍጥነት',
    subtopicEn: 'v_CM = p_tot / M and Activity with Four Particles on Y-Axis',
    subtopicAm: 'የማዕከሉ ፍጥነት v_CM = P_tot / M እና በአራት ቅንጣቶች ላይ የተሰራ መልመጃ',
    pageType: 'content',
    contentEn: `Velocity of the Center of Mass:
Differentiating r⃗_CM with respect to time:
v⃗_CM = dr⃗_CM / dt = (Σ m_i dr⃗_i/dt) / M = (Σ m_i v⃗_i) / M = p⃗_tot / M
Therefore:
M v⃗_CM = p⃗_tot
The total linear momentum of a system of particles equals the total mass times the velocity of its center of mass!

Acceleration of Center of Mass:
Differentiating once more:
M a⃗_CM = Σ F⃗_external
If Σ F⃗_external = 0, then a⃗_CM = 0, which means the center of mass moves with constant velocity!

Activity:
Four objects are situated along the y-axis as follows:
• A 2.00-kg object is at +3.00 m
• A 3.00-kg object is at +2.50 m
• A 2.50-kg object is at the origin (0 m)
• A 4.00-kg object is at -0.50 m.
Where is the center of mass of this four-particle system?`,
    contentAm: `የክብደት ማዕከሉ ፍጥነት (Velocity of CM)፡
v⃗_CM = p⃗_tot / M
ስለዚህ M v⃗_CM = p⃗_tot ይሆናል፤ ይህም የስርዓቱ አጠቃላይ ሞመንተም ከአጠቃላይ ክብደትና ከክብደት ማዕከሉ ፍጥነት ብዜት ጋር እኩል መሆኑን ያረጋግጣል። የውጭ ኃይል ከሌለ የማዕከሉ ማጣደፍ ዜሮ ይሆናል (a_CM = 0)።

መልመጃ፡
አራት እቃዎች በY-አክሲስ ላይ ተደርድረዋል፡
• 2.00 ኪ.ግ በ +3.00 ሜ
• 3.00 ኪ.ግ በ +2.50 ሜ
• 2.50 ኪ.ግ በመነሻ ነጥብ (0 ሜ)
• 4.00 ኪ.ግ በ -0.50 ሜ ላይ ይገኛሉ። የዚህ ስርዓት የክብደት ማዕከል የት ይገኛል?`
  },

  // Page 67 - Book page 59
  {
    pdfPageNumber: 67,
    bookPageLabel: '59',
    chapterNumber: 2,
    sectionRef: 'Summary',
    titleEn: 'Chapter Two Summary (Part 1)',
    titleAm: 'የምዕራፍ ሁለት ማጠቃለያ (ክፍል ፩)',
    subtopicEn: 'Kinematics, Constant Acceleration, Projectile Motion & Dynamics',
    subtopicAm: 'ኪነማቲክስ፣ ቋሚ ማጣደፍ፣ የተወረወረ እቃ እንቅስቃሴ እና ዳይናሚክስ',
    pageType: 'content',
    contentEn: `Chapter Two Summary:
• Kinematics describes the motion of objects without considering the causes of motion, while dynamics studies forces and their effect on motion.
• Average velocity is displacement divided by time; instantaneous velocity is the derivative of position with respect to time: v⃗ = dr⃗/dt.
• For motion with constant acceleration in 1D:
  v_f = v_i + a t
  Δx = v_i t + 1/2 a t²
  v_f² = v_i² + 2 a Δx
• Projectile motion is 2D motion under constant gravitational acceleration g = 9.8 m/s² directed vertically downward:
  Horizontal: a_x = 0, v_x = u cosθ, x = (u cosθ) t
  Vertical: a_y = -g, v_y = u sinθ - gt, y = (u sinθ) t - 1/2 gt²
  Max Height: h = (u² sin²θ)/(2g)
  Range: R = (u² sin 2θ)/g  (maximum at 45°)
• Newton's First Law (Inertia): An object remains at rest or constant velocity unless acted upon by a net force.
• Newton's Second Law: ΣF⃗ = m a⃗.
• Newton's Third Law: For every action, there is an equal and opposite reaction (F⃗_BA = -F⃗_AB).
• Friction opposes relative motion: static friction f_s ≤ μ_s F_N; kinetic friction f_k = μ_k F_N.`,
    contentAm: `የምዕራፍ ሁለት ማጠቃለያ (ክፍል ፩)፡
• ኪነማቲክስ የእንቅስቃሴ አምጪዎችን ከግምት ሳያስገባ እንቅስቃሴን ሲያጠና፣ ዳይናሚክስ ደግሞ ጉልበትን ጨምሮ ያጠናል።
• ቋሚ ማጣደፍ ሲኖር፡ vf = vi + at፣ Δx = vi t + 1/2 at²፣ vf² = vi² + 2aΔx።
• የተወረወረ እቃ እንቅስቃሴ (Projectile)፡ አግድም ፍጥነቱ ቋሚ ሲሆን፣ ወደ ታች በስበት (g = 9.8 m/s²) ይጣደፋል፤ ከፍተኛ አግድም ርቀት በ45° ይገኛል።
• የኒውተን ህጎች፡ ፩. የኢነርሺያ ህግ፣ ፪. ΣF = ma፣ ፫. ድርጊት እና ግብረ-መልስ (F_BA = -F_AB)።
• ግጭት፡ የረጊ ግጭት fs ≤ μs FN፤ የእንቅስቃሴ ግጭት fk = μk FN።`
  },

  // Page 68 - Book page 60
  {
    pdfPageNumber: 68,
    bookPageLabel: '60',
    chapterNumber: 2,
    sectionRef: 'Summary',
    titleEn: 'Chapter Two Summary (Part 2)',
    titleAm: 'የምዕራፍ ሁለት ማጠቃለያ (ክፍል ፪)',
    subtopicEn: 'Circular Motion, Gravity, Work-Energy, Momentum & Center of Mass',
    subtopicAm: 'የክብ እንቅስቃሴ፣ የስበት ህግ፣ ስራ-ኃይል፣ ሞመንተም እና የክብደት ማዕከል',
    pageType: 'content',
    contentEn: `Chapter Two Summary (Continued):
• In uniform circular motion, speed is constant but acceleration is directed toward the center: a_c = v²/r.
• Newton's Law of Universal Gravitation: F_g = G (m₁ m₂) / r².
• Kepler's Laws of planetary motion:
  1. Elliptical orbits with the Sun at one focus.
  2. Equal areas swept in equal times.
  3. T²/r³ = constant for all bodies orbiting the Sun.
• Work is defined as W = F⃗ · Δr⃗ = F Δr cosθ.
• Work-Energy Theorem: W_net = ΔKE = 1/2 m v_f² - 1/2 m v_i².
• In an isolated conservative system, total mechanical energy is conserved: KE_i + PE_i = KE_f + PE_f.
• Power is the rate of doing work: P = W/Δt = F⃗ · v⃗.
• Linear momentum: p⃗ = m v⃗. Total momentum is conserved in any isolated system: Σp_i = Σp_f.
• Collisions:
  - Elastic: both momentum and kinetic energy are conserved.
  - Inelastic: momentum is conserved, kinetic energy is NOT conserved.
  - Perfectly Inelastic: bodies stick together after collision.
• Center of Mass: r⃗_CM = (Σ m_i r⃗_i) / M. The center of mass of an isolated system moves with constant velocity.`,
    contentAm: `የምዕራፍ ሁለት ማጠቃለያ (ክፍል ፪)፡
• ወጥ የክብ እንቅስቃሴ፡ ማዕከል ሳቢ ማጣደፍ ac = v²/r።
• ሁለንተናዊ የስበት ህግ፡ Fg = G(m1 m2)/r²።
• የኬፕለር ህጎች፡ ፩. ኤሊፕሳዊ ኦርቢቶች፣ ፪. እኩል ስፋቶች በእኩል ጊዜ፣ ፫. T²/r³ = ቋሚ ቁጥር።
• የስራና ኃይል ቴዎረም፡ W_net = ΔKE።
• መካኒካል ኃይል ጥበቃ፡ KEi + PEi = KEf + PEf።
• ፓወር፡ P = W/Δt = F · v።
• የመስመራዊ ሞመንተም ጥበቃ፡ p = mv፤ Σpi = Σpf።
• የክብደት ማዕከል፡ r_CM = (Σ mi ri) / M።`
  },

  // Page 69 - Book page 61
  {
    pdfPageNumber: 69,
    bookPageLabel: '61',
    chapterNumber: 2,
    sectionRef: 'Review Questions',
    titleEn: 'Chapter Two Review Questions & Problems',
    titleAm: 'የምዕራፍ ሁለት የማጠቃለያ ጥያቄዎች እና ልምምዶች',
    subtopicEn: 'Problems on Projectiles, Inclines, Circular Motion & Collisions',
    subtopicAm: 'የተወረወረ እቃ፣ ተዳፋት ወለል፣ የክብ እንቅስቃሴ እና የግጭት ልምምዶች',
    pageType: 'review',
    contentEn: `Chapter Review Questions and Problems:

1. A projectile is launched with an initial speed of 30 m/s at an angle of 60° above the horizontal from the top of a 20-m high cliff. Find:
   (a) The time required to reach maximum height.
   (b) The maximum height reached above the ground.
   (c) The total time of flight until it hits the ground.
   (d) The horizontal range.

2. A 5.0-kg block is pulled up a 30° incline by a rope with a force of 40 N parallel to the incline. If the coefficient of kinetic friction is μ_k = 0.20, calculate the acceleration of the block.

3. An Earth satellite moves in a circular orbit at an altitude of 600 km above the Earth's surface. Given M_E = 5.98 × 10²⁴ kg and R_E = 6.37 × 10⁶ m:
   (a) What is the orbital speed of the satellite?
   (b) What is its period of revolution?

4. A 2000-kg railway car moving at 10 m/s collides with and couples to a stationary 3000-kg car.
   (a) What is their common speed after the collision?
   (b) How much kinetic energy is lost in the collision?

5. Three masses are placed at the vertices of a triangle: 2 kg at (0, 0), 3 kg at (4, 0), and 5 kg at (2, 3). Find the coordinates of the center of mass.`,
    contentAm: `የምዕራፍ ሁለት የማጠቃለያ ጥያቄዎች እና ልምምዶች፡

፩. ፕሮጀክትይል በ30 ሜ/ሰ በ60° አንግል ከ20 ሜትር ሸለቆ ጫፍ ላይ ተወረወረ፡
   ሀ. ከፍተኛ ጫፍ ለመድረስ የሚፈጀው ጊዜ፤
   ለ. ከመሬት በላይ የሚደርስበት ከፍተኛ ከፍታ፤
   ሐ. መሬት ለመንካት የሚፈጀው አጠቃላይ የበረራ ጊዜ፤
   መ. አግድም ርቀት (Range)።

፪. 5.0 ኪ.ግ ሳጥን በ30° ተዳፋት ላይ በተዘረጋ ገመድ በ40 ኒውተን ጉልበት ወደ ላይ ይጎተታል። የግጭት ኮፊሸንት μk = 0.20 ቢሆን የሳጥኑ ማጣደፍ ስንት ነው?

፫. ሳተላይት ከመሬት ወለል በላይ በ600 ኪ.ሜ ከፍታ ላይ በክብ ምህዋር ይጓዛል፡
   ሀ. የሳተላይቱ ኦርቢታል ፍጥነት ስንት ነው?
   ለ. አንድ ሙሉ ዙር ለመዞር የሚፈጀው ጊዜ (Period) ስንት ነው?

፬. 2000 ኪ.ግ የባቡር ሰረገላ በ10 ሜ/ሰ እየተጓዘ ከቆመ 3000 ኪ.ግ ሰረገላ ጋር ተጋጭቶ ተጣበቀ፡
   ሀ. ከተጋጩ በኋላ የጋራ ፍጥነታቸው ስንት ይሆናል?
   ለ. በግጭቱ ወቅት ምን ያህል የኪነቲክ ኃይል ጠፋ?

፭. ሦስት መጠኖች በሦስት ማዕዘን ጫፎች ላይ ተቀምጠዋል፡ 2 kg በ(0, 0)፣ 3 kg በ(4, 0) እና 5 kg በ(2, 3)። የክብደት ማዕከሉን ፈልግ።`,
    reviewQuestions: [
      {
        title: 'Chapter 2 Review Problems',
        questions: [
          '1. Projectile launched at 30 m/s at 60 deg from a 20m cliff: find time to peak, max height, total flight time, and range.',
          '2. 5.0-kg block pulled up 30-deg incline with 40N force (mu_k = 0.20): calculate acceleration.',
          '3. Satellite at altitude 600 km: calculate orbital speed and orbital period.',
          '4. Inelastic collision of 2000-kg car at 10 m/s with stationary 3000-kg car: find common speed and kinetic energy loss.',
          '5. Center of mass of 2 kg at (0,0), 3 kg at (4,0), and 5 kg at (2,3).'
        ]
      }
    ]
  }
];
