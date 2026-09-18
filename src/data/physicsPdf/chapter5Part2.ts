import { OfficialPdfPage } from '../geographyPdf/types';

export const physicsChapter5Part2Pages: OfficialPdfPage[] = [
  // Page 140 - Book page 132
  {
    pdfPageNumber: 140,
    bookPageLabel: '132',
    chapterNumber: 5,
    sectionRef: '5.4.1',
    titleEn: 'Reflection of Light & Flat Mirrors',
    titleAm: 'የብርሃን ነጸብራቅ እና ጠፍጣፋ መስታወት',
    subtopicEn: '5.4.1. Law of Reflection theta_i = theta_r, Specular vs Diffuse & Virtual Images',
    subtopicAm: '፭.፬.፩ የነጸብራቅ ህግ (θ_i = θ_r)፣ ልሙጥና የተበተነ ነጸብራቅ እንዲሁም ምናባዊ ምስል',
    pageType: 'content',
    contentEn: `5.4.1. Reflection of Light
When a light ray strikes an interface between two different optical media, part or all of the light bounces back into the original medium. This phenomenon is called reflection.

The Law of Reflection:
"The incident ray, the reflected ray, and the normal to the reflecting surface at the point of incidence all lie in the same plane. Furthermore, the angle of incidence equals the angle of reflection:"
θ_i = θ_r ----------------------------------------------------------- (5.4.1)
Both angles are measured relative to the NORMAL (perpendicular line to the surface).

Types of Reflection:
1. Specular Reflection: Reflection from a smooth, polished surface (such as a mirror or calm water) where parallel incident rays reflect parallel to one another, forming clear sharp images.
2. Diffuse Reflection: Reflection from a rough or uneven surface where parallel incident rays are scattered in many different directions, making the object visible from any angle without forming an image.

Flat (Plane) Mirrors:
For an object placed at distance p in front of a flat mirror:
• Image distance: q = -p (the image appears as far BEHIND the mirror as the object is in front).
• Magnification: M = h' / h = +1 (image is same size and upright).
• Image Nature: Virtual (light rays only appear to diverge from behind the mirror), upright, and laterally inverted (left-right reversed).`,
    contentAm: `፭.፬.፩ የብርሃን ነጸብራቅ (Reflection of Light)
ብርሃን ከአንድ መካከለኛ ገጽታ ላይ አርፎ ወደ መጣበት ሲመለስ ነጸብራቅ ይባላል።

የነጸብራቅ ህግ (Law of Reflection)፡
የወደቀው ጨረር፣ የተንጸባረቀው ጨረር እና ቀጤ-ነክ መስመሩ (Normal) በአንድ ወለል ላይ ያርፋሉ፤ የወደቀው ማዕዘን ከተንጸባረቀው ማዕዘን ጋር እኩል ነው፡
θ_i = θ_r (ቀመር 5.4.1)

የነጸብራቅ አይነቶች፡
፩. ልሙጥ ነጸብራቅ (Specular)፡ ከለሰለሰ መስታወት ላይ የሚፈጠርና ግልጽ ምስል የሚያሳይ፤
፪. የተበተነ ነጸብራቅ (Diffuse)፡ ከሻካራ ገጽታ ላይ ብርሃን ወደ ተለያዩ አቅጣጫዎች የሚበተንበት።

ጠፍጣፋ መስታወት (Plane Mirror)፡
ምስሉ ከመስታወቱ ጀርባ በእኩል ርቀት (q = -p)፣ በእኩል መጠን (M = +1)፣ ቀጥ ያለ እና ምናባዊ (Virtual) ሆኖ የቀኝና የግራ ቅያሪ ያሳያል።`
  },

  // Page 141 - Book page 133
  {
    pdfPageNumber: 141,
    bookPageLabel: '133',
    chapterNumber: 5,
    sectionRef: '5.4.1',
    titleEn: 'Spherical Mirrors: Concave and Convex',
    titleAm: 'ክብ ቅርጽ ያላቸው መስታወቶች፡ ጎድጓዳ እና ጎባጣ',
    subtopicEn: 'Focal Point F, Center of Curvature C, Radius R & Focal Length f = R / 2',
    subtopicAm: 'የትኩረት ነጥብ (F)፣ የክብ ማዕከል (C) እና የፎካል ርዝመት f = R/2',
    pageType: 'content',
    contentEn: `Spherical Mirrors:
A spherical mirror has the shape of a section of a sphere of radius R with center of curvature C:
• Concave Mirror (Converging): The inner, sunken surface is reflective.
• Convex Mirror (Diverging): The outer, bulging surface is reflective.

Focal Point and Focal Length:
For paraxial rays (rays close to the principal axis):
Parallel incident rays reflecting off a concave mirror converge at a single focal point F.
The focal length f is half the radius of curvature:
f = R / 2 ----------------------------------------------------------- (5.4.2)
• For a concave mirror: f > 0 (real focal point).
• For a convex mirror: f < 0 (virtual focal point behind the mirror).

Principal Rays for Ray Tracing:
1. Ray 1: Parallel to principal axis reflects through the focal point F.
2. Ray 2: Passes through (or aimed at) focal point F reflects parallel to the axis.
3. Ray 3: Passes through center of curvature C reflects straight back on itself.`,
    contentAm: `ክብ ቅርጽ ያላቸው መስታወቶች (Spherical Mirrors)፡
፩. ጎድጓዳ መስታወት (Concave Mirror - ሰብሳቢ)፡ የውስጠኛው የሰመጠው ክፍል የሚያንጸባርቅ ነው።
፪. ጎባጣ መስታወት (Convex Mirror - በትኝ)፡ የውጨኛው ያበጠው ክፍል የሚያንጸባርቅ ነው።

የትኩረት ነጥብ እና ፎካል ርዝመት (f)፡
በትይዩ የሚመጡ ጨረሮች ጎድጓዳ መስታወት ላይ አርፈው በአንድ የትኩረት ነጥብ (F) ይሰበሰባሉ፡
f = R / 2 (ቀመር 5.4.2)
• ለጎድጓዳ መስታወት፡ f > 0 (እውነተኛ ፎከስ)
• ለጎባጣ መስታወት፡ f < 0 (ምናባዊ ፎከስ)

ሦስቱ ዋና ዋና የጨረር መመሪያዎች፡
፩. ከዛቢያ ጋር ትይዩ የሆነ ጨረር በፎከስ (F) በኩል ተንጸባርቆ ያልፋል፤
፪. በፎከስ በኩል የመጣ ጨረር ከዛቢያ ጋር ትይዩ ሆኖ ይመለሳል፤
፫. በማዕከሉ (C) በኩል የመጣ ጨረር በመጣበት ቀጥታ ወደ ኋላ ይመለሳል።`
  },

  // Page 142 - Book page 134
  {
    pdfPageNumber: 142,
    bookPageLabel: '134',
    chapterNumber: 5,
    sectionRef: '5.4.1',
    titleEn: 'Mirror Equation and Magnification Formula',
    titleAm: 'የመስታወት ቀመር እና የማጉላት ቀመር',
    subtopicEn: '1 / f = 1 / p + 1 / q, Magnification M = -q / p & Sign Conventions',
    subtopicAm: 'ቀመር 1/f = 1/p + 1/q፣ ማጉላት M = -q/p እና የምልክት ደንቦች',
    pageType: 'content',
    contentEn: `The Mirror Equation:
The relationship between object distance p, image distance q, and focal length f is:
1 / f = 1 / p + 1 / q ------------------------------------------------ (5.4.3)

Lateral Magnification (M):
The ratio of image height h' to object height h:
M = h' / h = - q / p ------------------------------------------------ (5.4.4)

Sign Conventions for Mirrors:
• Focal length f: (+) for concave, (-) for convex.
• Object distance p: (+) for real object in front of mirror.
• Image distance q: (+) for real image in front of mirror, (-) for virtual image behind mirror.
• Magnification M: (+) for upright image, (-) for inverted (upside down) image.

Example:
A concave shaving mirror has a radius of curvature R = 40.0 cm (f = 20.0 cm). A person stands with their face p = 10.0 cm in front of the mirror.
Find: (a) the image position, (b) magnification, and (c) describe the image.
Solution:
(a) 1/q = 1/f - 1/p = 1/20.0 - 1/10.0 = 1/20.0 - 2/20.0 = -1/20.0  =>  q = -20.0 cm.
(b) M = - q / p = - (-20.0 cm) / 10.0 cm = + 2.0.
(c) The image is VIRTUAL (q < 0, 20 cm behind mirror), UPRIGHT (M > 0), and ENLARGED by 2 times! Perfect for grooming!`,
    contentAm: `የመስታወት ቀመር (The Mirror Equation)፡
1 / f = 1 / p + 1 / q (ቀመር 5.4.3)
• p = የዕቃው ርቀት፤ q = የምስሉ ርቀት፤ f = ፎካል ርዝመት።

የማጉላት ቀመር (Lateral Magnification - M)፡
M = h' / h = - q / p (ቀመር 5.4.4)

የምልክት ደንቦች፡
• f፡ ለጎድጓዳ (+), ለጎባጣ (-)
• q፡ ለእውነተኛ ምስል ከመስታወቱ ፊት (+), ለምናባዊ ምስል ከኋላ (-)
• M፡ ለቀጥተኛ ምስል (+), ለተዘቀዘቀ ምስል (-)

ምሳሌ (የመላጫ መስታወት)፡
ጎድጓዳ መስታወት f = 20 ሴ.ሜ፤ ፊት በ p = 10 ሴ.ሜ ላይ ቢቆም፡
1/q = 1/20 - 1/10 = -1/20 => q = -20 ሴ.ሜ።
M = - (-20) / 10 = + 2.0።
ምስሉ ምናባዊ (ከጀርባ)፣ ቀጥ ያለ እና በ2 እጥፍ የጎላ ነው!`
  },

  // Page 143 - Book page 135
  {
    pdfPageNumber: 143,
    bookPageLabel: '135',
    chapterNumber: 5,
    sectionRef: '5.4.2',
    titleEn: 'Refraction of Light & Snells Law',
    titleAm: 'የብርሃን ስብራት (Refraction) እና የስኔል ህግ (Snells Law)',
    subtopicEn: '5.4.2. Index of Refraction n = c / v & Snells Formula n1 sin(theta1) = n2 sin(theta2)',
    subtopicAm: '፭.፬.፪ የብርሃን ስብራት ኢንዴክስ (n = c/v) እና የስኔል ቀመር (n1 sinθ1 = n2 sinθ2)',
    pageType: 'content',
    contentEn: `5.4.2. Refraction of Light
Refraction is the bending of a light ray as it passes across the boundary between two optical media with different speeds of light.

Index of Refraction (n):
The ratio of the speed of light in vacuum (c) to the speed of light in the medium (v):
n = c / v ----------------------------------------------------------- (5.4.5)
Since v ≤ c, the refractive index n is ALWAYS ≥ 1.00.
• When entering an optically denser medium (higher n): speed v decreases, wavelength λ decreases (λ_n = λ / n), but frequency f REMAINS CONSTANT.

Snell's Law of Refraction:
Willebrord Snell (1621) formulated:
n₁ sinθ₁ = n₂ sinθ₂ ------------------------------------------------- (5.4.6)
where θ₁ and θ₂ are measured relative to the normal.
• If light passes from lower n to higher n (e.g., air to water): ray bends TOWARD the normal (θ₂ < θ₁).
• If light passes from higher n to lower n (e.g., water to air): ray bends AWAY from the normal (θ₂ > θ₁).`,
    contentAm: `፭.፬.፪ የብርሃን ስብራት እና የስኔል ህግ (Snell's Law)
ብርሃን የተለያየ የብርሃን ፍጥነት ካላቸው ከአንዱ ቁስ ወደ ሌላው ሲሸጋገር አቅጣጫውን የመቀየር ክስተት ስብራት ይባላል።

የስብራት ኢንዴክስ (Index of Refraction - n)፡
n = c / v (ቀመር 5.4.5)
ብርሃን እፍጋቱ ከፍ ያለ ቁስ ውስጥ ሲገባ ፍጥነቱ (v) እና የሞገድ ርዝመቱ (λ) ይቀንሳሉ፤ ነገር ግን ፍሪኩዌንሲው (f) በፍጹም አይለወጥም!

የስኔል ህግ (Snell's Law)፡
n₁ sinθ₁ = n₂ sinθ₂ (ቀመር 5.4.6)
• ብርሃን ከአነስተኛ ወደ ከፍተኛ n ሲገባ (ከአየር ወደ ውሃ)፡ ወደ ቀጤ-ነክ መስመሩ ይጠጋል (θ2 < θ1)።
• ከከፍተኛ ወደ አነስተኛ n ሲገባ (ከውሃ ወደ አየር)፡ ከቀጤ-ነክ መስመሩ ይሸሻል (θ2 > θ1)።`
  },

  // Page 144 - Book page 136
  {
    pdfPageNumber: 144,
    bookPageLabel: '136',
    chapterNumber: 5,
    sectionRef: '5.4.2',
    titleEn: 'Indices Table & Total Internal Reflection',
    titleAm: 'የስብራት ኢንዴክስ ሰንጠረዥ እና አጠቃላይ የውስጥ ነጸብራቅ (TIR)',
    subtopicEn: 'Table 5.2 & Critical Angle Formula sin(theta_c) = n2 / n1 (for n1 > n2)',
    subtopicAm: 'ሰንጠረዥ 5.2 እና ወሳኝ አንግል ቀመር sinθ_c = n2 / n1',
    pageType: 'table',
    contentEn: `Table 5.2: Indices of Refraction for Yellow Sodium Light (λ = 589 nm):
• Vacuum: n = 1.00000
• Air (at STP): n = 1.000293 ≈ 1.00
• Water (at 20 °C): n = 1.333
• Ethyl Alcohol: n = 1.361
• Crown Glass: n = 1.52
• Flint Glass: n = 1.66
• Zircon: n = 1.923
• Diamond: n = 2.419  [Extremely high, causes magnificent fire/sparkle!]

Total Internal Reflection (TIR):
When light travels from a medium of HIGHER refractive index n₁ into a medium of LOWER refractive index n₂ (e.g., water to air):
As the incident angle increases, the refracted angle θ₂ reaches 90° (skimming the surface).
The incident angle for which θ₂ = 90° is called the Critical Angle (θ_c):
n₁ sinθ_c = n₂ sin(90°) = n₂ (1)
sinθ_c = n₂ / n₁ ---------------------------------------------------- (5.4.7)

Condition for Total Internal Reflection:
1. Light must be traveling from higher n₁ toward lower n₂ (n₁ > n₂).
2. The angle of incidence must EXCEED the critical angle: θ_i > θ_c.
When these conditions are met, NO light is refracted; 100% of the light is reflected internally!

For water to air (n₁ = 1.33, n₂ = 1.00):
sinθ_c = 1.00 / 1.33 = 0.7519  =>  θ_c = 48.8°.
For diamond to air (n₁ = 2.42, n₂ = 1.00):
sinθ_c = 1.00 / 2.42 = 0.4132  =>  θ_c = 24.4°.`,
    contentAm: `ሰንጠረዥ 5.2፡ የስብራት ኢንዴክሶች (አየር 1.00፣ ውሃ 1.333፣ መስታወት 1.52፣ አልማዝ 2.419)። አልማዝ እጅግ ከፍተኛ n ስላለው የሚገባው ብርሃን በውስጡ ደጋግሞ ተንጸባርቆ ውብ ብልጭታ ይሰጣል።

አጠቃላይ የውስጥ ነጸብራቅ (Total Internal Reflection - TIR)፡
ብርሃን ከከፍተኛ n ወዳለው ቁስ ወደ ዝቅተኛ n (ከውሃ ወደ አየር) ሲጓዝ የስብራት አንግሉ 90 ዲግሪ የሚደርስበት የወደቀ አንግል ወሳኝ አንግል (Critical Angle - θc) ይባላል፡
sinθ_c = n₂ / n₁ (ቀመር 5.4.7)

ሁኔታዎች፡
፩. ብርሃኑ ከከፍተኛ n ወደ ዝቅተኛ n መጓዝ አለበት (n1 > n2)፤
፪. የወደቀው አንግል ከወሳኝ አንግል መብለጥ አለበት (θi > θc)።
በዚህ ወቅት 100% ብርሃኑ ወደ ውስጥ ይመለሳል!
ለውሃ፡ θc = 48.8°፤ ለአልማዝ፡ θc = 24.4° ነው።`,
    tables: [
      {
        id: 'phys-tbl-5-2',
        caption: 'Table 5.2: Refractive Indices at 589 nm',
        headers: ['Substance', 'Index of Refraction n'],
        rows: [
          ['Vacuum', '1.00000'],
          ['Air (STP)', '1.00029'],
          ['Water', '1.333'],
          ['Ethyl Alcohol', '1.361'],
          ['Crown Glass', '1.52'],
          ['Flint Glass', '1.66'],
          ['Diamond', '2.419']
        ]
      }
    ]
  },

  // Page 145 - Book page 137
  {
    pdfPageNumber: 145,
    bookPageLabel: '137',
    chapterNumber: 5,
    sectionRef: '5.4.2',
    titleEn: 'Fiber Optics, Prisms and Dispersion',
    titleAm: 'ፋይበር ኦፕቲክስ፣ ፕሪዝም እና የብርሃን መበተን (Dispersion)',
    subtopicEn: 'Optical Fiber Light Guides, Medical Endoscopy & Rainbow Formation',
    subtopicAm: 'የፋይበር ኦፕቲክስ ኬብሎች፣ ኢንዶስኮፒ እና የቀስተ-ደመና አፈጣጠር',
    pageType: 'content',
    contentEn: `Applications of Total Internal Reflection:

1. Fiber Optics (Optical Communication):
A flexible glass or plastic fiber consists of a core with high refractive index n_core surrounded by a cladding with lower refractive index n_clad. Light injected at one end strikes the core-cladding boundary at angles greater than θ_c and undergoes repeated total internal reflections, traveling tens of kilometers with negligible signal loss!
• Powers global high-speed internet cables.
• Medical Endoscopes: Doctors inspect inside the stomach, lungs, or joints without invasive surgery.

2. Prisms and Dispersion:
The index of refraction n of transparent materials is slightly wavelength-dependent (n increases as wavelength decreases). Thus, violet light (short λ) is refracted MORE strongly than red light (long λ).
This wavelength-dependent separation of white light into its component spectral colors is called Dispersion.
Isaac Newton (1666) first demonstrated using glass prisms that white sunlight is composed of a continuous spectrum of colors (Red, Orange, Yellow, Green, Blue, Indigo, Violet - ROYGBIV).

3. Rainbows:
Sunlight entering a spherical raindrop is refracted and dispersed at the front surface, undergoes total internal reflection at the back surface, and refracts again exiting the front. Violet exits at 40° and red at 42°, creating the circular arc of a rainbow!`,
    contentAm: `የአጠቃላይ የውስጥ ነጸብራቅ ተግባራዊ ጥቅሞች፡
፩. ፋይበር ኦፕቲክስ (Fiber Optics)፡
ብርሃን በብርጭቆ ክር ውስጥ በተደጋጋሚ አጠቃላይ የውስጥ ነጸብራቅ እያደረገ ያለምንም የኃይል ብክነት ሺህ ኪሎሜትሮችን ይጓዛል።
• ዓለም አቀፍ የኢንተርኔት መረጃ መረብ፤
• የህክምና ኢንዶስኮፒ (የሰውነት ውስጠኛ ክፍልን በቀዶ ህክምና ሳይሆን በካሜራ ማየት)።

፪. ፕሪዝም እና የብርሃን መበተን (Dispersion)፡
የስብራት ኢንዴክስ በሞገድ ርዝመት ላይ የተመሰረተ ነው፤ ቫዮሌት (አጭር ሞገድ) ከቀይ (ረጅም ሞገድ) በበለጠ ይሰበራል። ነጭ ብርሃን በፕሪዝም ሲያልፍ ወደ 7ቱ የቀስተ-ደመና ቀለማት (ቀይ፣ ብርቱካን፣ ቢጫ፣ አረንጓዴ፣ ሰማያዊ፣ ኢንዲጎ፣ ቫዮሌት) ይበተናል።

፫. ቀስተ-ደመና (Rainbow)፡
የፀሐይ ብርሃን በዝናብ ጠብታዎች ውስጥ ገብቶ ሲሰበር፣ ከጀርባ ሲንጸባረቅና ሲወጣ ቀስተ-ደመና ይፈጠራል።`
  },

  // Page 146 - Book page 138
  {
    pdfPageNumber: 146,
    bookPageLabel: '138',
    chapterNumber: 5,
    sectionRef: '5.4.3',
    titleEn: 'Thin Lenses: Converging vs Diverging',
    titleAm: 'ቀጫጭን ሌንሶች፡ ሰብሳቢ እና በትኝ ሌንሶች',
    subtopicEn: '5.4.3. Biconvex (Converging) vs Biconcave (Diverging), Foci & Principal Axis',
    subtopicAm: '፭.፬.፫ ኮንቨርጂንግ (ሰብሳቢ) እና ዳይቨርጂንግ (በትኝ) ሌንሶችና ፎካል ነጥቦች',
    pageType: 'content',
    contentEn: `5.4.3. Thin Lenses
A lens is an optical system with two refracting surfaces, at least one of which is curved. A thin lens is one whose thickness is negligible compared to the radii of curvature.

Two Classes of Thin Lenses:
1. Converging (Convex) Lenses:
   Thicker at the center than at the edges. Parallel rays passing through the lens bend toward the axis and converge at a real focal point F on the opposite side:
   • Types: Biconvex, Plano-convex, Convex meniscus.
   • Focal length: f > 0.
2. Diverging (Concave) Lenses:
   Thinner at the center than at the edges. Parallel rays diverge away from the axis as if originating from a virtual focal point F on the incident side:
   • Types: Biconcave, Plano-concave, Concave meniscus.
   • Focal length: f < 0.

Principal Rays for Thin Lenses:
1. Ray 1: Parallel to principal axis refracts through the focal point F₂ on the far side.
2. Ray 2: Passes straight through the optical center of the lens UNDEVIATED.
3. Ray 3: Passes through the near focal point F₁ refracts parallel to the principal axis.`,
    contentAm: `፭.፬.፫ ቀጫጭን ሌንሶች (Thin Lenses)
ሌንስ ብርሃንን በመስበር ምስል የሚፈጥር የመስታወት ወይም የፕላስቲክ መሳሪያ ነው።

ሁለቱ ዋና ዋና የሌንስ ክፍሎች፡
፩. ሰብሳቢ ሌንስ (Converging / Convex Lens)፡
መሀሉ የወፈረ፣ ጫፎቹ የቀጠኑ ናቸው። ትይዩ ጨረሮችን በአንድ የትኩረት ነጥብ (F) ላይ ይሰበስባል፡
• ፎካል ርዝመት፡ f > 0 (ፖዘቲቭ)።
፪. በትኝ ሌንስ (Diverging / Concave Lens)፡
መሀሉ የቀጠነ፣ ጫፎቹ የወፈሩ ናቸው። ትይዩ ጨረሮችን ይበትናል፡
• ፎካል ርዝመት፡ f < 0 (ኔጌቲቭ)።

ሦስቱ ዋና ዋና የጨረር መስመሮች፡
፩. ከዛቢያ ጋር ትይዩ የሆነ ጨረር በማዶ ባለው ፎከስ በኩል ተሰብሮ ያልፋል፤
፪. በሌንሱ መሀል ነጥብ (Optical center) የሚያልፍ ጨረር ሳይታጠፍ ቀጥ ብሎ ያልፋል፤
፫. በቅርቡ ፎከስ በኩል ያለፈ ጨረር ከዛቢያ ጋር ትይዩ ሆኖ ይሰበራል።`
  },

  // Page 147 - Book page 139
  {
    pdfPageNumber: 147,
    bookPageLabel: '139',
    chapterNumber: 5,
    sectionRef: '5.4.3',
    titleEn: 'Thin Lens Equation & Lensmakers Equation',
    titleAm: 'የቀጭን ሌንስ ቀመር እና የሌንስ ሰሪዎች ቀመር',
    subtopicEn: '1 / f = 1 / p + 1 / q & Lensmakers Formula 1 / f = (n - 1) (1 / R1 - 1 / R2)',
    subtopicAm: 'ቀመር 1/f = 1/p + 1/q እና የሌንስ መስሪያ ቀመር',
    pageType: 'content',
    contentEn: `The Thin Lens Equation:
1 / f = 1 / p + 1 / q ------------------------------------------------ (5.4.8)
Lateral Magnification:
M = h' / h = - q / p ------------------------------------------------ (5.4.9)
Notice that this has the EXACT SAME mathematical form as the mirror equation!

The Lensmaker's Equation:
The focal length f of a lens in air depends on its refractive index n and the radii of curvature R₁ and R₂ of its two spherical surfaces:
1 / f = (n - 1) (1 / R₁ - 1 / R₂) ----------------------------------- (5.4.10)

Sign Conventions for Lenses:
• Focal length f: (+) for converging lens, (-) for diverging lens.
• Object distance p: (+) for real object on incident side.
• Image distance q: (+) for real image on transmission side (opposite side from object), (-) for virtual image on incident side (same side as object).
• Radii of Curvature: (+) if center of curvature is on the transmission side, (-) if on incident side.
• Magnification M: (+) for upright image, (-) for inverted image.`,
    contentAm: `የቀጭን ሌንስ ቀመር (Thin Lens Equation)፡
1 / f = 1 / p + 1 / q (ቀመር 5.4.8)
ማጉላት፡ M = h' / h = - q / p (ቀመር 5.4.9)

የሌንስ ሰሪዎች ቀመር (Lensmaker's Equation)፡
የሌንስ ፎካል ርዝመት በስብራት ኢንዴክሱ (n) እና በሁለቱ ፊቶች ራዲየስ (R1 እና R2) ይወሰናል፡
1 / f = (n - 1) (1 / R₁ - 1 / R₂) (ቀመር 5.4.10)

የምልክት ደንቦች፡
• f፡ ለሰብሳቢ (+), ለበትኝ (-)
• q፡ ለእውነተኛ ምስል በማዶው ወገን (+), ለምናባዊ ምስል በዕቃው በኩል (-)
• M፡ ለቀጥተኛ (+), ለተዘቀዘቀ (-)።`
  },

  // Page 148 - Book page 140
  {
    pdfPageNumber: 148,
    bookPageLabel: '140',
    chapterNumber: 5,
    sectionRef: '5.4.3',
    titleEn: 'Ray Tracing Cases for Converging Lens',
    titleAm: 'የሰብሳቢ ሌንስ የምስል አፈጣጠር ሁኔታዎች',
    subtopicEn: 'Cases: Beyond 2F, At 2F, Between F and 2F, & Inside F (Magnifier)',
    subtopicAm: 'ሁኔታዎች፡ ከ 2F ጀርባ፣ በ 2F ላይ፣ በ F እና 2F መሀል እንዲሁም ከ F በታች (ማጉያ)',
    pageType: 'content',
    contentEn: `Images Formed by a Converging Lens:

Case 1: Object Beyond 2F (p > 2f):
• Image position: Between F and 2F on the opposite side.
• Image nature: Real, Inverted, Diminished (|M| < 1).
• Application: Cameras, human eyes.

Case 2: Object Exactly at 2F (p = 2f):
• Image position: Exactly at 2F on the opposite side (q = 2f).
• Image nature: Real, Inverted, Same Size (|M| = 1).
• Application: Photocopy machines (1:1 copy).

Case 3: Object Between F and 2F (f < p < 2f):
• Image position: Beyond 2F on the opposite side (q > 2f).
• Image nature: Real, Inverted, Magnified (|M| > 1).
• Application: Slide projectors, movie projectors.

Case 4: Object Inside the Focal Length (p < f):
• Image position: On the same side as object (q < 0, virtual!).
• Image nature: Virtual, Upright, Magnified (M > +1).
• Application: Simple Magnifier (Magnifying glass).`,
    contentAm: `በሰብሳቢ ሌንስ የሚፈጠሩ ምስሎች፡

፩. እቃው ከ 2F ጀርባ ሲቀመጥ (p > 2f)፡
ምስሉ፡ በማዶ በF እና 2F መሀል፤ እውነተኛ፣ የተዘቀዘቀ፣ ያነሰ። (ለምሳሌ፡ ካሜራ፣ የሰው ዓይን)።

፪. እቃው በ 2F ላይ ሲቀመጥ (p = 2f)፡
ምስሉ፡ በማዶ በ 2F ላይ፤ እውነተኛ፣ የተዘቀዘቀ፣ እኩል መጠን። (ለምሳሌ፡ ፎቶ ኮፒ ማሽን)።

፫. እቃው በ F እና 2F መሀል ሲቀመጥ (f < p < 2f)፡
ምስሉ፡ ከ 2F ማዶ፤ እውነተኛ፣ የተዘቀዘቀ፣ የጎላ። (ለምሳሌ፡ ፕሮጀክተር)።

፬. እቃው ከፎከሱ በታች ሲቀመጥ (p < f)፡
ምስሉ፡ በዕቃው በኩል፤ ምናባዊ፣ ቀጥ ያለ፣ የጎላ። (ለምሳሌ፡ የእጅ ማጉያ መነጽር)።`
  },

  // Page 149 - Book page 141
  {
    pdfPageNumber: 149,
    bookPageLabel: '141',
    chapterNumber: 5,
    sectionRef: '5.4.3',
    titleEn: 'Diverging Lens & Lens Power in Diopters',
    titleAm: 'በትኝ ሌንስ እና የሌንስ ፓወር በዳዮፕተር (Diopters)',
    subtopicEn: 'Always Virtual, Upright, Diminished & Lens Power P = 1 / f [Diopter = m^-1]',
    subtopicAm: 'የበትኝ ሌንስ ቋሚ ምናባዊ ምስል እና የሌንስ ፓወር (P = 1/f በዳዮፕተር)',
    pageType: 'content',
    contentEn: `Images Formed by a Diverging Lens:
For ANY position of a real object in front of a diverging lens:
• Ray tracing shows that the refracted rays diverge.
• Virtual extensions intersect on the incident side between the lens and the focal point F.
• Image is ALWAYS Virtual, Upright, and Diminished (|M| < 1).
• Application: Peepholes in doors (gives a wide field of view), correction of nearsightedness (myopia).

Power of a Lens (P):
Optometrists and ophthalmologists specify lenses by their optical power P rather than focal length:
P = 1 / f ----------------------------------------------------------- (5.4.11)
where the focal length f MUST be in METERS (m).
Unit of Power: 1 Diopter (D) = 1 m⁻¹.
• Converging lens (f = +0.50 m): P = +1 / 0.50 = +2.0 D.
• Diverging lens (f = -0.25 m): P = -1 / 0.25 = -4.0 D.

Combination of Thin Lenses in Contact:
When two thin lenses of focal lengths f₁ and f₂ are placed in contact:
1 / f_tot = 1 / f₁ + 1 / f₂  =>  P_tot = P₁ + P₂ --------------------- (5.4.12)
Total magnification is the product: M_tot = M₁ × M₂.`,
    contentAm: `በበትኝ ሌንስ የሚፈጠር ምስል፡
ዕቃው የትም ቦታ ቢቀመጥ በትኝ ሌንስ የሚፈጥረው ምስል ምንጊዜም ምናባዊ (Virtual)፣ ቀጥ ያለ (Upright) እና ያነሰ (Diminished) ነው።
ጥቅም፡ የበራፍ መመልከቻ (Peephole) እና የቅርብ አዳሪነት የዓይን ህክምና።

የሌንስ ፓወር በዳዮፕተር (Lens Power - P)፡
የዓይን ሐኪሞች የሌንስ ጥንካሬን በዳዮፕተር (Diopter - D) ይለካሉ፡
P = 1 / f (f በሜትር ሲሆን)
አሃዱ፡ ዳዮፕተር (D = m⁻¹) ነው።
• ሰብሳቢ ሌንስ፡ ፖዘቲቭ ፓወር (ለምሳሌ +2.0 D)
• በትኝ ሌንስ፡ ኔጌቲቭ ፓወር (ለምሳሌ -4.0 D)

የተጣመሩ ሌንሶች፡
P_tot = P₁ + P₂`
  },

  // Page 150 - Book page 142
  {
    pdfPageNumber: 150,
    bookPageLabel: '142',
    chapterNumber: 5,
    sectionRef: '5.4.4',
    titleEn: 'Optical Instruments: The Human Eye and Vision Defects',
    titleAm: 'የኦፕቲክስ መሳሪያዎች፡ የሰው ዓይን እና የማየት ጉድለቶች',
    subtopicEn: '5.4.4. Cornea, Lens, Retina, Myopia (Diverging) & Hyperopia (Converging)',
    subtopicAm: '፭.፬.፬ ኮርኒያ፣ ሬቲና፣ የቅርብ አዳሪነት (በትኝ ሌንስ) እና የሩቅ አዳሪነት (ሰብሳቢ ሌንስ)',
    pageType: 'content',
    contentEn: `5.4.4. Optical Instruments
1. The Human Eye:
Light enters through the transparent Cornea, passes through the pupil (aperture controlled by the colored Iris), and is focused by the flexible crystalline Lens onto the light-sensitive Retina at the back of the eyeball.
• Accommodation: Ciliary muscles adjust the curvature of the lens to focus on objects at varying distances.
• Near Point: The closest distance at which the eye can focus sharply (normally ~25 cm in young adults).
• Far Point: The farthest distance (normally infinity ∞ for a relaxed eye).

Vision Defects and Corrections:
1. Myopia (Nearsightedness):
   The eyeball is too long or cornea too curved. Light from distant objects focuses IN FRONT of the retina.
   Correction: DIVERGING (concave) lens with negative diopter power.
2. Hyperopia (Farsightedness):
   The eyeball is too short. Light focuses BEHIND the retina.
   Correction: CONVERGING (convex) lens with positive diopter power.
3. Presbyopia: Age-related loss of lens flexibility (corrected by bifocals or reading glasses).
4. Astigmatism: Non-spherical cornea curvature (corrected by cylindrical lenses).`,
    contentAm: `፭.፬.፬ የኦፕቲክስ መሳሪያዎች
፩. የሰው ልጅ ዓይን፡
ብርሃን በኮርኒያ በኩል ገብቶ በሌንሱ አማካኝነት ከጀርባ ባለው ሬቲና ላይ እውነተኛና የተዘቀዘቀ ምስል ይፈጥራል። የጭንቅላት ነርቭ ምስሉን አስተካክሎ እንዲታየን ያደርጋል።

የማየት ችግሮች እና መፍትሔዎቻቸው፡
፩. የቅርብ አዳሪነት (Myopia - Nearsightedness)፡
ቅርብ በደንብ እያዩ ሩቅ ማየት አለመቻል፤ ምስሉ ከሬቲና ፊት ለፊት ያርፋል።
መፍትሔ፡ በትኝ (Diverging) ሌንስ ያለው መነጽር።
፪. የሩቅ አዳሪነት (Hyperopia - Farsightedness)፡
ሩቅ በደንብ እያዩ ቅርብ ማየት አለመቻል፤ ምስሉ ከሬቲና ጀርባ ያርፋል።
መፍትሔ፡ ሰብሳቢ (Converging) ሌንስ ያለው መነጽር።
፫. ፕሬስባዮፒያ (Presbyopia)፡ በእድሜ መግፋት ምክንያት የሌንስ የመተጣጠፍ አቅም መቀነስ።`
  },

  // Page 151 - Book page 143
  {
    pdfPageNumber: 151,
    bookPageLabel: '143',
    chapterNumber: 5,
    sectionRef: '5.4.4',
    titleEn: 'Simple Magnifier and Compound Microscope',
    titleAm: 'ቀላል የእጅ ማጉያ እና ኮምፓውንድ ማይክሮስኮፕ',
    subtopicEn: 'Angular Magnification m = 25 cm / f & Microscope M = M_obj * M_eye',
    subtopicAm: 'የማጉላት አቅም (m = 25 cm / f) እና የማይክሮስኮፕ አጠቃላይ ማጉላት',
    pageType: 'content',
    contentEn: `2. The Simple Magnifier:
A simple magnifier is a converging lens of short focal length f. When an object is placed just inside the focal point (p ≤ f), an enlarged virtual upright image is formed.
Angular Magnification (m):
m = θ / θ₀ = 25 cm / f --------------------------------------------- (5.4.13)
where 25 cm is the standard near point distance. A lens with f = 5 cm gives m = 25 / 5 = 5×.

3. The Compound Microscope:
Consists of two converging lenses in tandem:
• Objective Lens: Very short focal length f_obj (< 1 cm). Placed close to the specimen, it creates an enlarged real, inverted intermediate image (magnification M_obj ≈ - L / f_obj).
• Eyepiece (Ocular) Lens: Focal length f_eye (~ a few cm). Acts as a simple magnifier to inspect the intermediate image (angular magnification m_eye = 25 cm / f_eye).

Total Magnification of Microscope:
M = M_obj × m_eye = - (L / f_obj) (25 cm / f_eye) ------------------- (5.4.14)
where L is the optical tube length (standardized at ~16 cm).
Modern optical research microscopes achieve magnifications up to 1000× to 2000×, resolving bacteria and cellular organelles!`,
    contentAm: `፪. ቀላል የእጅ ማጉያ (Simple Magnifier)፡
አጭር ፎካል ርዝመት ያለው ሰብሳቢ ሌንስ ሲሆን እቃው ከፎከሱ በታች ሲቀመጥ የጎላ ቀጥተኛ ምስል ይሰጣል፡
m = 25 cm / f (ቀመር 5.4.13)

፫. ኮምፓውንድ ማይክሮስኮፕ (Compound Microscope)፡
ሁለት ሰብሳቢ ሌንሶችን አጣምሮ የያዘ ነው፡
• ኦብጀክቲቭ ሌንስ (Objective)፡ ናሙናው አጠገብ የሚገኝና እጅግ አጭር ፎካል ርዝመት ያለው ሲሆን የመጀመሪያውን የጎላ እውነተኛ ምስል ይፈጥራል።
• አይፒስ ሌንስ (Eyepiece)፡ በአይን በኩል ያለ ሆኖ ያንን ምስል የበለጠ ያጎላዋል።

አጠቃላይ ማጉላት፡
M = M_obj × m_eye = - (L / f_obj) (25 cm / f_eye) (ቀመር 5.4.14)
ዘመናዊ ማይክሮስኮፖች ባክቴሪያዎችንና ህዋሳትን እስከ 2000 እጥፍ አጉልተው ያሳያሉ።`
  },

  // Page 152 - Book page 144
  {
    pdfPageNumber: 152,
    bookPageLabel: '152',
    chapterNumber: 5,
    sectionRef: '5.4.4',
    titleEn: 'Astronomical Telescope: Refracting and Reflecting',
    titleAm: 'የሥነ-ፈለክ ቴሌስኮፕ፡ ሪፍራክቲንግ እና ሪፍሌክቲንግ',
    subtopicEn: 'Angular Magnification m = - f_obj / f_eye, Large Mirrors & James Webb',
    subtopicAm: 'የቴሌስኮፕ ማጉላት (m = - f_obj / f_eye) እና ግዙፍ የህዋ ቴሌስኮፖች',
    pageType: 'content',
    contentEn: `4. The Astronomical Telescope:
A telescope is designed to view massive objects at virtually infinite distances (stars, planets, distant galaxies).

Refracting Telescope (Keplerian):
Uses two converging lenses:
• Objective Lens: Large aperture and LONG focal length f_obj to gather abundant light and form a real image of distant objects.
• Eyepiece Lens: Short focal length f_eye to magnify that image.
Length of Telescope Tube:
L = f_obj + f_eye

Angular Magnification (m):
m = - f_obj / f_eye ------------------------------------------------- (5.4.15)
The negative sign indicates the final image is inverted (not an issue in astronomy).
To maximize magnification, the objective focal length should be as LONG as possible, and the eyepiece focal length as SHORT as possible!

Reflecting Telescopes:
Large lenses suffer from chromatic aberration (color fringing due to dispersion) and sag under their own weight. Modern research observatories (Keck, Hubble, James Webb Space Telescope) use curved PARABOLIC MIRRORS as objectives instead of lenses!`,
    contentAm: `፬. የሥነ-ፈለክ ቴሌስኮፕ (The Astronomical Telescope)፡
ሩቅ ያሉ የህዋ አካላትን (ኮከቦች፣ ፕላኔቶች፣ ጋላክሲዎች) ለማየት የሚያገለግል መሳሪያ ነው።

የሪፍራክቲንግ ቴሌስኮፕ፡
• ኦብጀክቲቭ ሌንስ፡ ብርሃን በደንብ ለመሰብሰብ ትልቅ ዲያሜትር እና እጅግ ረጅም ፎካል ርዝመት (f_obj) አለው።
• አይፒስ ሌንስ፡ አጭር ፎካል ርዝመት (f_eye) አለው።
የማጉላት ቀመር፡
m = - f_obj / f_eye (ቀመር 5.4.15)
ከፍተኛ ማጉላት ለማግኘት f_obj እጅግ ረጅም፣ f_eye ደግሞ እጅግ አጭር መሆን አለበት።

የሪፍሌክቲንግ ቴሌስኮፕ (Reflecting Telescope)፡
ግዙፍ ሌንሶች በክብደታቸው ምክንያት ስለሚጎብጡና የቀለም መዛባት ስለሚያመጡ፣ ዘመናዊ ግዙፍ ቴሌስኮፖች (ሀብል፣ ጀምስ ዌብ) በሌንስ ምትክ ግዙፍ ፓራቦሊክ መስታወቶችን ይጠቀማሉ!`
  },

  // Page 153 - Book page 145
  {
    pdfPageNumber: 153,
    bookPageLabel: '153',
    chapterNumber: 5,
    sectionRef: '5.5',
    titleEn: 'Wave Optics: Coherence and Youngs Experiment',
    titleAm: 'የሞገድ ኦፕቲክስ፡ ኮሂረንስ እና የያንግ ሙከራ',
    subtopicEn: '5.5. Physical Optics, Coherent Sources & Thomas Young Double-Slit (1801)',
    subtopicAm: '፭.፭ ፊዚካል ኦፕቲክስ፣ ኮሂረንት የብርሃን ምንጮች እና የቶማስ ያንግ ባለ ሁለት ስንጥቅ ሙከራ',
    pageType: 'content',
    contentEn: `5.5. Wave Optics (Physical Optics)
When light interacts with structures whose dimensions are comparable to the wavelength of light (λ ~ 0.5 μm = 500 nm), the ray approximation completely breaks down. We must treat light as a wave, exhibiting Interference and Diffraction.

Conditions for Observable Wave Interference:
1. Coherent Sources: The light sources must maintain a CONSTANT phase difference over time (e.g., laser light, or light from a single source split into two paths).
2. Monochromatic Light: The waves must have the SAME single wavelength (frequency).

Thomas Young's Double-Slit Experiment (1801):
Thomas Young conclusively proved the wave nature of light by passing sunlight through a single pinhole and then through two narrow parallel slits S₁ and S₂ separated by distance d.
On a screen placed distance L away, instead of two bright bands (as particle theory predicted), he observed a series of alternating bright and dark parallel bands called INTERFERENCE FRINGES!`,
    contentAm: `፭.፭ የሞገድ ኦፕቲክስ (Wave Optics)
የሚታየው ቁስ መጠን ከብርሃን ሞገድ ርዝመት (λ ~ 500 nm) ጋር ሲቀራረብ ብርሃን እንደ ቀጥተኛ ጨረር ሳይሆን እንደ ሞገድ ይሰራል (ኢንተርፌረንስ እና ዲፍራክሽን ያሳያል)።

ግልጽ የብርሃን ኢንተርፌረንስ ለማየት የሚያስፈልጉ ሁኔታዎች፡
፩. ኮሂረንት ምንጮች (Coherent Sources)፡ የሞገዶቹ የፌዝ ልዩነት በጊዜ ሂደት የማይለዋወጥ ቋሚ መሆን አለበት (ለምሳሌ ሌዘር)።
፪. ሞኖክሮማቲክ (Monochromatic)፡ ነጠላ የሞገድ ርዝመት (አንድ አይነት ቀለም) ሊኖረው ይገባል።

የቶማስ ያንግ ባለ ሁለት ስንጥቅ ሙከራ (1801 ዓ.ም)፡
ቶማስ ያንግ ብርሃን በሁለት ጥቃቅን ክፍተቶች (S1 እና S2) ውስጥ እንዲያልፍ ሲያደርግ ማዶ ባለው ስክሪን ላይ ተለዋዋጭ ደማቅና ጨለማ የሆኑ የብርሃን መስመሮችን (Interference fringes) አገኘ። ይህም ብርሃን ሞገድ መሆኑን በማያሻማ መልኩ ለመጀመሪያ ጊዜ አረጋገጠ!`
  },

  // Page 154 - Book page 146
  {
    pdfPageNumber: 154,
    bookPageLabel: '146',
    chapterNumber: 5,
    sectionRef: '5.5',
    titleEn: 'Youngs Double-Slit Equations: Bright and Dark Fringes',
    titleAm: 'የያንግ ባለ ሁለት ስንጥቅ ቀመሮች፡ ደማቅ እና ጨለማ መስመሮች',
    subtopicEn: 'Path Diff delta = d sin(theta), Bright: d sin(theta) = m lambda, Dark: (m+1/2) lambda',
    subtopicAm: 'የፓዝ ልዩነት δ = d sinθ፣ ደማቅ d sinθ = mλ እና ጨለማ d sinθ = (m+1/2)λ',
    pageType: 'content',
    contentEn: `Young's Double-Slit Geometry and Formulas:
Let d = distance between slits, L = distance to screen, θ = angle from center:
Path difference between the two waves arriving at point P:
δ = r₂ - r₁ = d sinθ ------------------------------------------------ (5.5.1)

1. Bright Fringes (Constructive Interference):
Crest meets crest when path difference is an integer multiple of wavelength:
d sinθ = m λ  (m = 0, ±1, ±2, ...) ---------------------------------- (5.5.2)
where m is called the Order Number (m = 0 is central bright fringe, m = ±1 is first order, etc.).

2. Dark Fringes (Destructive Interference):
Crest meets trough when path difference is an odd half-integer multiple of wavelength:
d sinθ = (m + 1/2) λ  (m = 0, ±1, ±2, ...) -------------------------- (5.5.3)

Linear Position on Screen (y):
For small angles (L >> d), sinθ ≈ tanθ = y / L:
Position of m-th bright fringe:
y_bright = m (λ L / d) ---------------------------------------------- (5.5.4)
Fringe Separation (distance between adjacent bright fringes):
Δy = y_{m+1} - y_m = λ L / d ---------------------------------------- (5.5.5)`,
    contentAm: `የያንግ ቀመሮች እና ጂኦሜትሪ፡
የመንገድ ልዩነት (Path difference)፡
δ = d sinθ (ቀመር 5.5.1)

፩. ደማቅ መስመሮች (ገንቢ ኢንተርፌረንስ)፡
d sinθ = m λ (m = 0, ±1, ±2, ...) (ቀመር 5.5.2)
m = 0 (የመሀከለኛ ደማቅ መስመር)፣ m = 1 (የመጀመሪያ ደማቅ መስመር)።

፪. ጨለማ መስመሮች (አጥፊ ኢንተርፌረንስ)፡
d sinθ = (m + 1/2) λ (ቀመር 5.5.3)

በስክሪኑ ላይ ያለው የመስመሮች ርቀት (y)፡
y_bright = m (λ L / d) (ቀመር 5.5.4)
በሁለት ተከታታይ ደማቅ መስመሮች መካከል ያለው ክፍተት፡
Δy = λ L / d (ቀመር 5.5.5)`
  },

  // Page 155 - Book page 147
  {
    pdfPageNumber: 155,
    bookPageLabel: '147',
    chapterNumber: 5,
    sectionRef: '5.5',
    titleEn: 'Double-Slit Example & Thin-Film Interference',
    titleAm: 'የባለ ሁለት ስንጥቅ ስሌት እና ቀጫጭን ሽፋኖች ኢንተርፌረንስ',
    subtopicEn: 'Laser Problem Solution & Soap Bubbles, Oil Slicks, Phase Inversion Rule',
    subtopicAm: 'የሌዘር ስሌት ምሳሌ እና የሳሙና አረፋ፣ የነዳጅ ቅባት ቀለማት እና የፌዝ ለውጥ',
    pageType: 'content',
    contentEn: `Example (Double-Slit Experiment):
A laser beam with wavelength λ = 632.8 nm (He-Ne laser) illuminates two slits separated by d = 0.200 mm. The interference pattern is projected onto a screen at distance L = 2.00 m.
(a) Find the distance between adjacent bright fringes.
(b) Find the distance between the central maximum and the third-order bright fringe.

Solution:
Convert units: λ = 6.328 × 10⁻⁷ m, d = 0.200 × 10⁻³ m, L = 2.00 m.
(a) Fringe spacing:
    Δy = λ L / d = (6.328 × 10⁻⁷ m)(2.00 m) / (2.00 × 10⁻⁴ m) = 6.33 × 10⁻³ m = 6.33 mm.
(b) Third-order bright fringe (m = 3):
    y₃ = 3 Δy = 3 (6.33 mm) = 19.0 mm.

Thin-Film Interference:
The brilliant swirling iridescent colors seen on soap bubbles and gasoline slicks on wet pavement are caused by wave interference between light reflecting from the TOP surface and light reflecting from the BOTTOM surface of the thin film.
Phase Shift on Reflection:
• When light reflects from a medium of HIGHER refractive index (n_film > n_air), it undergoes a 180° (π radians = λ/2) phase inversion!
• When reflecting from a lower refractive index, NO phase shift occurs.`,
    contentAm: `የተሰራ ምሳሌ (ባለ ሁለት ስንጥቅ)፡
λ = 632.8 nm (ቀይ ሌዘር)፣ d = 0.200 mm፣ L = 2.00 m፡
ሀ. በተከታታይ ደማቅ መስመሮች መካከል ያለው ክፍተት፡
Δy = (6.328 × 10⁻⁷ × 2.00) / (2.00 × 10⁻⁴) = 6.33 ሚ.ሜ።
ለ. ወደ ሦስተኛው ደማቅ መስመር ያለው ርቀት፡
y₃ = 3 × 6.33 = 19.0 ሚ.ሜ።

ቀጫጭን ሽፋኖች ኢንተርፌረንስ (Thin-Film Interference)፡
በሳሙና አረፋዎች እና በውሃ ላይ በሚንሳፈፍ ነዳጅ ላይ የሚታዩ ውብ ቀለማት ከላይኛውና ከታችኛው የፈሳሹ ሽፋን ተንጸባርቀው በሚገናኙ የብርሃን ሞገዶች ኢንተርፌረንስ የሚፈጠሩ ናቸው።
የፌዝ ለውጥ ደንብ፡ ብርሃን ከፍ ያለ n ካለው ገጽታ ሲንጸባረቅ የ 180° (λ/2) የፌዝ ቅያሪ ያደርጋል!`
  },

  // Page 156 - Book page 148
  {
    pdfPageNumber: 156,
    bookPageLabel: '148',
    chapterNumber: 5,
    sectionRef: '5.5.1',
    titleEn: 'Single-Slit Diffraction: Minima Condition',
    titleAm: 'የነጠላ ስንጥቅ ዲፍራክሽን፡ የጨለማ ነጥቦች ቀመር',
    subtopicEn: '5.5.1. Wave Bending Around Edges & Dark Minima Condition: a sin(theta) = m lambda',
    subtopicAm: '፭.፭.፩ የብርሃን መታጠፍ (ዲፍራክሽን) እና የጨለማ መስመሮች ቀመር a sinθ = mλ',
    pageType: 'content',
    contentEn: `5.5.1. Diffraction of Light
Diffraction is the bending and spreading of waves around the edges of an obstacle or through a narrow aperture into the geometrical shadow region.

Huygens-Fresnel Principle:
"Every point on a primary wavefront can be considered as a source of secondary spherical wavelets. The new wavefront is the envelope of these wavelets."

Single-Slit Diffraction:
When monochromatic light of wavelength λ passes through a single slit of width a:
The wavelets originating from different portions of the slit interfere with each other!

Condition for Diffraction Minima (Dark Fringes):
Dividing the slit into pairs of interfering zones, destructive interference occurs when:
a sinθ = m λ  (m = ±1, ±2, ±3, ... m ≠ 0!) -------------------------- (5.5.6)
where:
• a = width of the slit (m)
• m = order of the diffraction minimum.

Central Diffraction Maximum:
The central bright peak is TWICE as wide as any of the secondary maxima:
Angular width of central maximum:
2 θ₁ ≈ 2 (λ / a) ---------------------------------------------------- (5.5.7)
Linear width on screen at distance L:
w = 2 y₁ = 2 (λ L / a).
Notice: As slit width a gets narrower, the diffraction pattern spreads OUT wider!`,
    contentAm: `፭.፭.፩ የብርሃን ዲፍራክሽን (Diffraction of Light)
ብርሃን በጠባብ ክፍተት ሲያልፍ ወይም የጥላን ጠርዝ አልፎ ሲጓዝ የመታጠፍና የመበተን ባህሪው ዲፍራክሽን ይባላል።

የነጠላ ስንጥቅ ዲፍራክሽን (Single-Slit Diffraction)፡
ስፋቱ a በሆነ ነጠላ ስንጥቅ ውስጥ ብርሃን ሲያልፍ የጨለማ መስመሮች (Minima) የሚፈጠሩበት ቀመር፡
a sinθ = m λ (m = ±1, ±2, ±3, ... m ≠ 0!) (ቀመር 5.5.6)

የመሀከለኛው ደማቅ መስመር ስፋት፡
የመሀከለኛው ደማቅ መስመር ከሌሎቹ በሁለት እጥፍ የሰፋ ነው፡
ስፋቱ w = 2 (λ L / a) (ቀመር 5.5.7)
ማሳሰቢያ፡ የስንጥቁ ስፋት a በጠበበ ቁጥር በስክሪኑ ላይ የሚፈጠረው የብርሃን ስርጭት ይበልጥ ይሰፋል!`
  },

  // Page 157 - Book page 149
  {
    pdfPageNumber: 157,
    bookPageLabel: '149',
    chapterNumber: 5,
    sectionRef: '5.5.2',
    titleEn: 'Diffraction Gratings and Spectroscopy',
    titleAm: 'የዲፍራክሽን ግሬቲንግ እና ስፔክትሮስኮፒ',
    subtopicEn: '5.5.2. Slit Spacing d = 1 / N, Maxima: d sin(theta) = m lambda & Spectral Analysis',
    subtopicAm: '፭.፭.፪ ግሬቲንግ (d = 1/N)፣ ደማቅ መስመሮች d sinθ = mλ እና የስፔክትረም ትንተና',
    pageType: 'content',
    contentEn: `5.5.2. The Diffraction Grating
A diffraction grating consists of a large number N of closely spaced, equally spaced parallel transmitting slits or reflecting grooves on a glass or plastic substrate.
Typical grating: 5000 to 10,000 lines per centimeter!

Slit Spacing (Grating Constant d):
d = 1 / N ----------------------------------------------------------- (5.5.8)
For example, if N = 5000 lines/cm = 5.0 × 10⁵ lines/m:
d = 1 / (5.0 × 10⁵ m⁻¹) = 2.0 × 10⁻⁶ m = 2.0 μm.

Condition for Principal Maxima:
Because thousands of slits reinforce constructive interference simultaneously, the bright lines are EXTREMELY NARROW, SHARP, and BRIGHT:
d sinθ = m λ  (m = 0, ±1, ±2, ...) ---------------------------------- (5.5.9)
where m is the spectral order.

Diffraction Grating Spectrometers:
Since each wavelength diffuses to a uniquely precise angle sinθ = mλ / d, diffraction gratings disperse white light with vastly greater resolution than prisms!
Applications:
• Identifying chemical elements in stars and distant nebulae.
• Forensic chemical analysis and greenhouse gas monitoring.`,
    contentAm: `፭.፭.፪ የዲፍራክሽን ግሬቲንግ (Diffraction Grating)
ግሬቲንግ በአንድ ሴንቲሜትር ውስጥ በሺዎች የሚቆጠሩ እጅግ በጣም ተቀራራቢ ትይዩ ስንጥቆችን የያዘ መሳሪያ ነው (ለምሳሌ 5000 lines/cm)።

የስንጥቆች ርቀት (d)፡
d = 1 / N (ቀመር 5.5.8)
ለ 5000 lines/cm፡ d = 1 / 500,000 m⁻¹ = 2.0 × 10⁻⁶ ሜትር።

የከፍተኛ ብሩህ ነጥቦች ቀመር፡
d sinθ = m λ (ቀመር 5.5.9)
በሺዎች የሚቆጠሩ ስንጥቆች በአንድ ጊዜ ስለሚደራረቡ መስመሮቹ እጅግ በጣም ደማቅና ስስ ሆነው ይለያያሉ።

ስፔክትሮስኮፒ (Spectroscopy)፡
እያንዳንዱ ቀለም በልዩ ማዕዘን ስለሚበተን በከዋክብት ውስጥ ያሉ የኬሚካል ንጥረ ነገሮችን ለመለየትና ለመተንተን ያገለግላል።`
  },

  // Page 158 - Book page 150
  {
    pdfPageNumber: 158,
    bookPageLabel: '150',
    chapterNumber: 5,
    sectionRef: 'Summary',
    titleEn: 'Chapter Five Summary (Part 1)',
    titleAm: 'የምዕራፍ አምስት ማጠቃለያ (ክፍል ፩)',
    subtopicEn: 'SHM, Pendulums, Waves, String Speed, Sound, Decibels & Doppler Effect',
    subtopicAm: 'ቀላል ሃርሞኒክ፣ ፔንዱለም፣ ሞገድ፣ የገመድ ፍጥነት፣ ድምፅና የዶፕለር ውጤት',
    pageType: 'content',
    contentEn: `Chapter Five Summary (Part 1):
• Simple Harmonic Motion (SHM): F = -kx; x(t) = A cos(ωt + φ); v_max = ωA; a_max = ω²A; total energy E = 1/2 k A² = constant.
• Mass-Spring Period: T = 2π √(m / k).
• Simple Pendulum Period: T = 2π √(L / g) (independent of mass!).
• Damped Oscillations: Underdamped (decaying amplitude), critically damped, overdamped.
• Resonance: Occurs when driving frequency equals natural frequency (ω = ω₀), producing maximum amplitude.
• Waves: Transverse (particles perpendicular to wave) vs Longitudinal (particles parallel to wave).
  Wave speed: v = λ f = ω / k.
• Speed on string: v = √(T / μ).
• Standing waves on string: λ_n = 2L / n; f_n = n (v / 2L).
• Sound Waves: Longitudinal waves. v ≈ 331 + 0.6 T_C in air.
• Sound Intensity Level: β = 10 log₁₀(I / I₀) [dB], where I₀ = 1.0 × 10⁻¹² W/m².
• Pipes: Open-open f_n = n (v / 2L) (all n); Open-closed f_n = n (v / 4L) (odd n only).
• Beats: f_beat = |f₁ - f₂|.
• Doppler Effect: f' = f [(v ± v_o) / (v ∓ v_s)].`,
    contentAm: `የምዕራፍ አምስት ማጠቃለያ (ክፍል ፩)፡
• ቀላል ሃርሞኒክ እንቅስቃሴ (SHM)፡ F = -kx፤ x(t) = A cos(ωt)፤ አጠቃላይ ኃይል E = 1/2 k A²።
• ፔሬዶች፡ የስፕሪንግ T = 2π√(m/k)፤ የፔንዱለም T = 2π√(L/g)።
• ሬዞናንስ፡ የገፊው ፍሪኩዌንሲ ከተፈጥሮ ፍሪኩዌንሲ ጋር ሲስማማ ከፍተኛ አምፕሊቲዩድ ይፈጠራል።
• የሞገድ ፍጥነት፡ v = λ f፤ በተወጠረ ገመድ ላይ v = √(T/μ)።
• የድምፅ ፍጥነት በአየር፡ v ≈ 331 + 0.6 TC። የዴሲበል ቀመር፡ β = 10 log(I/I₀)።
• ቧንቧዎች፡ ክፍት fn = n(v/2L)፤ ዝግ fn = n(v/4L) (ጎዶሎ ብቻ)።
• ቢትስ፡ f_beat = |f1 - f2|።
• የዶፕለር ውጤት፡ f' = f [(v ± v_o) / (v ∓ v_s)]።`
  },

  // Page 159 - Book page 151
  {
    pdfPageNumber: 159,
    bookPageLabel: '151',
    chapterNumber: 5,
    sectionRef: 'Summary',
    titleEn: 'Chapter Five Summary (Part 2)',
    titleAm: 'የምዕራፍ አምስት ማጠቃለያ (ክፍል ፪)',
    subtopicEn: 'Reflection, Mirrors, Snells Law, TIR, Lenses, Eye, Interference & Diffraction',
    subtopicAm: 'ነጸብራቅ፣ መስታወት፣ የስኔል ህግ፣ ሌንስ፣ ዓይን፣ ኢንተርፌረንስና ዲፍራክሽን',
    pageType: 'content',
    contentEn: `Chapter Five Summary (Continued):
• Law of Reflection: θ_i = θ_r.
• Mirror Equation: 1/f = 1/p + 1/q; Magnification M = -q/p; f = R/2.
• Refraction and Snell's Law: n₁ sinθ₁ = n₂ sinθ₂, where n = c / v.
• Total Internal Reflection (TIR): Occurs when light travels from higher n to lower n at θ_i > θ_c, where sinθ_c = n₂ / n₁.
• Thin Lens Equation: 1/f = 1/p + 1/q; M = -q/p.
  Lensmaker's Equation: 1/f = (n - 1)(1/R₁ - 1/R₂).
• Lens Power: P = 1/f [Diopters]. Myopia corrected by diverging lens; Hyperopia by converging lens.
• Magnifiers & Telescopes: Magnifier m = 25 cm / f; Telescope m = - f_obj / f_eye.
• Wave Optics:
  Young's Double-Slit Bright fringes: d sinθ = m λ; Dark fringes: d sinθ = (m + 1/2) λ.
  Fringe spacing: Δy = λ L / d.
• Single-Slit Diffraction Minima: a sinθ = m λ (m = ±1, ±2, ...).
• Diffraction Grating Maxima: d sinθ = m λ.`,
    contentAm: `የምዕራፍ አምስት ማጠቃለያ (ክፍል ፪)፡
• የነጸብራቅ ህግ፡ θi = θr።
• የመስታወት እና የሌንስ ቀመር፡ 1/f = 1/p + 1/q፤ M = -q/p።
• የስኔል ህግ፡ n1 sinθ1 = n2 sinθ2 (n = c/v)።
• አጠቃላይ የውስጥ ነጸብራቅ (TIR)፡ sinθc = n2 / n1 (ከከፍተኛ n ወደ ዝቅተኛ n ሲጓዝ)።
• የሌንስ ፓወር፡ P = 1/f [ዳዮፕተር]። የቅርብ አዳሪነት በበትኝ ሌንስ፣ የሩቅ አዳሪነት በሰብሳቢ ሌንስ ይታከማል።
• ቴሌስኮፕ ማጉላት፡ m = - f_obj / f_eye።
• ያንግ ባለ ሁለት ስንጥቅ፡ ደማቅ d sinθ = mλ፤ ጨለማ d sinθ = (m + 1/2)λ፤ ክፍተት Δy = λL/d።
• ነጠላ ስንጥቅ ዲፍራክሽን፡ a sinθ = mλ። ግሬቲንግ፡ d sinθ = mλ።`
  },

  // Page 160 - Book page 152
  {
    pdfPageNumber: 160,
    bookPageLabel: '152',
    chapterNumber: 5,
    sectionRef: 'Review Questions',
    titleEn: 'Chapter Five Review Questions & Problems',
    titleAm: 'የምዕራፍ አምስት የማጠቃለያ ጥያቄዎች እና ልምምዶች',
    subtopicEn: 'Problems on SHM, Sound Levels, Doppler, Mirrors, Lenses & Double-Slit',
    subtopicAm: 'የቀላል ሃርሞኒክ፣ የድምፅ ዴሲበል፣ ዶፕለር፣ መስታወት፣ ሌንስ እና ኢንተርፌረንስ ልምምዶች',
    pageType: 'review',
    contentEn: `Chapter Review Questions and Problems:

1. A 0.50-kg mass attached to a spring of spring constant k = 200 N/m oscillates with an amplitude of 0.10 m.
   (a) What is the period and frequency of the motion?
   (b) What is the maximum speed and maximum acceleration?
   (c) What is the total mechanical energy?

2. What must be the length of a simple pendulum on Earth for it to have a period of exactly 2.00 s?

3. A sound wave has an intensity of 3.0 × 10⁻⁴ W/m². What is its sound level in decibels (dB)?

4. A train sounds its whistle at 500 Hz as it approaches a station at 30 m/s. What frequency is heard by a passenger waiting on the platform? (v_sound = 340 m/s).

5. A concave spherical mirror has a focal length of 15.0 cm. An object 3.0 cm tall is placed 10.0 cm in front of the mirror. Find the position, size, and orientation of the image.

6. A light ray traveling in water (n = 1.33) strikes a glass plate (n = 1.50) at an incident angle of 35°. What is the angle of refraction in the glass?

7. A converging thin lens has a focal length of 20.0 cm. An object is placed 30.0 cm to the left of the lens.
   (a) Where is the image formed?
   (b) What is the magnification? Is the image real or virtual?

8. In a Young's double-slit experiment, the slits are separated by 0.15 mm and the screen is placed 1.8 m away. If the third-order bright fringe is 2.1 cm from the central maximum, what is the wavelength of the light?`,
    contentAm: `የምዕራፍ አምስት የማጠቃለያ ጥያቄዎች እና ልምምዶች፡

፩. 0.50 ኪ.ግ ጭነት በ k = 200 N/m ስፕሪንግ ላይ በ 0.10 ሜትር አምፕሊቲዩድ ያረገበግባል፡
   ሀ. ፔሬዱ እና ፍሪኩዌንሲው ስንት ነው?
   ለ. ከፍተኛ ፍጥነቱ እና ከፍተኛ ማጣደፉ ስንት ነው?
   ሐ. አጠቃላይ መካኒካል ኃይሉ ስንት ነው?

፪. በመሬት ላይ የ 2.00 ሰከንድ ፔሬድ እንዲኖረው የቀላል ፔንዱለም ገመድ ርዝመት ስንት መሆን አለበት?

፫. የአንድ ድምፅ ጥንካሬ 3.0 × 10⁻⁴ W/m² ነው፤ በዴሲበል (dB) ሲሰላ ስንት ይሆናል?

፬. ባቡር በ 500 Hz እያፏጨ በ 30 ሜ/ሰ ፍጥነት ወደ ባቡር ጣቢያው ሲቀርብ መድረክ ላይ የቆመ ሰው የሚሰማው ፍሪኩዌንሲ ስንት ነው? (የድምፅ ፍጥነት = 340 ሜ/ሰ)።

፭. ፎካል ርዝመቱ 15.0 ሴ.ሜ የሆነ ጎድጓዳ መስታወት ፊት ለፊት በ 10.0 ሴ.ሜ ርቀት ላይ 3.0 ሴ.ሜ ርዝመት ያለው እቃ ተቀመጠ። የምስሉን መገኛ፣ መጠን እና አይነት ፈልግ።

፮. በውሃ ውስጥ (n = 1.33) የሚጓዝ ብርሃን በመስታወት (n = 1.50) ላይ በ 35° አንግል ወደቀ። በመስታወቱ ውስጥ የስብራት አንግሉ ስንት ነው?

፯. ፎካል ርዝመቱ 20.0 ሴ.ሜ የሆነ ሰብሳቢ ሌንስ ፊት ለፊት በ 30.0 ሴ.ሜ ርቀት ላይ እቃ ተቀመጠ፡
   ሀ. ምስሉ የት ይፈጠራል?
   ለ. ማጉላቱ ስንት ነው? ምስሉ እውነተኛ ነው ወይስ ምናባዊ?

፰. በያንግ ባለ ሁለት ስንጥቅ ሙከራ ስንጥቆቹ በ 0.15 ሚ.ሜ ተራርቀው ስክሪኑ በ 1.8 ሜትር ርቀት ላይ ተቀምጧል። ሦስተኛው ደማቅ መስመር ከመሀል በ 2.1 ሴ.ሜ ርቀት ላይ ቢገኝ የብርሃኑ የሞገድ ርዝመት ስንት ነው?`,
    reviewQuestions: [
      {
        title: 'Chapter 5 Review Problems',
        questions: [
          '1. Mass-spring (m = 0.5 kg, k = 200 N/m, A = 0.1 m): calculate period, f, v_max, a_max, and E.',
          '2. Length of simple pendulum with period T = 2.00 s on Earth.',
          '3. Sound level in dB for I = 3.0x10^-4 W/m^2.',
          '4. Train whistle at 500 Hz moving at 30 m/s toward platform: find observed frequency.',
          '5. Concave mirror (f = 15 cm) with object at p = 10 cm: find q, size, and orientation.',
          '6. Refraction from water (1.33) into glass (1.50) at 35 deg incidence: find theta_2.',
          '7. Converging lens (f = 20 cm) with object at p = 30 cm: find q and magnification.',
          '8. Young double slit (d = 0.15 mm, L = 1.8 m, y3 = 2.1 cm): calculate wavelength.'
        ]
      }
    ]
  }
];
