import { OfficialPdfPage } from '../geographyPdf/types';

export const physicsChapter3Pages: OfficialPdfPage[] = [
  // Page 70 - Book page 62
  {
    pdfPageNumber: 70,
    bookPageLabel: '62',
    chapterNumber: 3,
    sectionRef: '3.0',
    titleEn: 'CHAPTER THREE: FLUID MECHANICS',
    titleAm: 'ምዕራፍ ሦስት፡ የፈሳሾች ሜካኒክስ',
    subtopicEn: '3.0. Fluid Concepts & 3.1. Properties of Bulk Matter',
    subtopicAm: '፫.0 የፈሳሾች ፅንሰ-ሀሳብ እና ፫.፩ የቁስ አካላት አጠቃላይ ባህሪያት',
    pageType: 'content',
    contentEn: `CHAPTER THREE: FLUID MECHANICS

Matter is broadly divided into three states: solid, liquid, and gas. A fluid is defined as any substance that can flow and conforms to the shape of its container. Thus, both liquids and gases are classified as fluids. Liquids have a definite volume but indefinite shape, whereas gases have neither definite shape nor definite volume. Fluid mechanics is the study of fluids at rest (fluid statics) and fluids in motion (fluid dynamics).

Learning Objectives:
At the end of this chapter, you will be able to:
• Distinguish between elastic and plastic deformation.
• Define stress, strain and elastic moduli (Young's, Shear, Bulk).
• Calculate fluid pressure and hydrostatic pressure with depth.
• Apply Pascal's principle to hydraulic systems.
• State Archimedes' principle and solve buoyancy problems.
• Use the equation of continuity and Bernoulli's equation for moving fluids.

3.1. Properties of Bulk Matter
Self Diagnostic Test:
• What is elasticity?
• Can you differentiate between stress and strain?
• How do fluids differ from solids when subjected to shearing forces?`,
    contentAm: `ምዕራፍ ሦስት፡ የፈሳሾች ሜካኒክስ (FLUID MECHANICS)

ቁስ አካል በሦስት ዋና ዋና ይዘቶች ይከፈላል፡ ጠጣር፣ ፈሳሽ እና ጋዝ። ፈሳሽ (Fluid) የሚባለው የመፍሰስ ባህሪ ያለውና የያዘውን ዕቃ ቅርጽ የሚይዝ ማንኛውም ነገር ሲሆን ሁለቱንም ፈሳሾችና ጋዞችን ያካትታል። የፈሳሾች ሜካኒክስ በሁለት ይከፈላል፡ ረጊ ፈሳሾች (Fluid Statics) እና ተንቀሳቃሽ ፈሳሾች (Fluid Dynamics)።

የምዕራፉ ዓላማዎች፡
• የመለጠጥ (Elastic) እና የቅርጽ መበላሸት (Plastic) ልዩነትን መረዳት፤
• ስትረስ (Stress)፣ ስትሬይን (Strain) እና የኢላስቲክ ሞጁለሶችን መግለጽ፤
• በፈሳሽ ውስጥ ጥልቀት ሲጨምር የሚፈጠረውን ጫና (Hydrostatic Pressure) ማስላት፤
• የፓስካልን መርህ ለሃይድሮሊክ መሳሪያዎች መተግበር፤
• የአርኪሜድስ መርህን ለተንሳፋፊ አካላት መተግበር፤
• የኮንቲኒዩቲ እና የበርኑሊ ቀመሮችን ለሚፈሱ ፈሳሾች ማስላት።`
  },

  // Page 71 - Book page 63
  {
    pdfPageNumber: 71,
    bookPageLabel: '63',
    chapterNumber: 3,
    sectionRef: '3.1',
    titleEn: 'Deformation, Stress & Tensile Strain',
    titleAm: 'የቅርጽ መዛባት፣ ስትረስ እና የመወጠር ስትሬይን',
    subtopicEn: 'Elastic vs Plastic Deformation & 1. Tensile Stress and Strain',
    subtopicAm: 'የመለጠጥ እና የመሰበር መዛባት እንዲሁም ፩. የመወጠር ስትረስና ስትሬይን',
    pageType: 'content',
    contentEn: `Elastic vs Plastic Deformation:
• Elastic Deformation: When an external deforming force is applied to a solid, its shape changes. If it returns to its original dimensions when the force is removed, the deformation is said to be elastic.
• Plastic Deformation: If the applied force exceeds the elastic limit, the solid remains permanently deformed even after the force is removed.

Stress and Strain:
Stress is the restoring force per unit area that develops within a deformed body:
Stress = Deforming Force / Area = F / A
SI Unit of stress: N/m² = Pascal (Pa).

Strain is the fractional or relative change in the dimensions of a body resulting from stress:
Strain = Change in dimension / Original dimension
Strain is a ratio of two identical units, hence it is DIMENSIONLESS (has no unit).

1. Tensile Stress and Strain:
When equal and opposite forces pull outward along the length of a bar or wire:
Tensile Stress = F_perpendicular / A
Tensile Strain = ΔL / L₀
where L₀ is original length and ΔL is change in length.`,
    contentAm: `የቅርጽ መዛባት አይነቶች፡
• የመለጠጥ መዛባት (Elastic Deformation)፡ የተጫነው ጉልበት ሲነሳ አካሉ ወደ ቀድሞ ቅርጹ የሚመለስበት ሁኔታ ነው።
• ፕላስቲክ መዛባት (Plastic Deformation)፡ የተጫነው ጉልበት ከመለጠጥ ወሰኑ (Elastic limit) ሲያልፍ ቅርጹ ለዘለቄታው ተበላሽቶ የሚቀርበት ነው።

ስትረስ እና ስትሬይን (Stress and Strain)፡
ስትረስ (Stress)፡ በአንድ ስፋት እርከን ላይ የሚያርፍ ጉልበት ነው፡
Stress = F / A
አሃዱ፡ ኒውተን በካሬ ሜትር (N/m² = Pascal)።

ስትሬይን (Strain)፡ በስትረስ ምክንያት የሚፈጠር የልኬት ለውጥ ምጣኔ ነው፡
Strain = የልኬት ለውጥ / የመነሻ ልኬት
ስትሬይን አሃድ የለውም (Dimensionless)።

፩. የመወጠር ስትረስ እና ስትሬይን (Tensile Stress & Strain)፡
የመወጠር ስትረስ = F / A
የመወጠር ስትሬይን = ΔL / L₀ (የርዝመት ለውጥ ለመነሻ ርዝመት)።`
  },

  // Page 72 - Book page 64
  {
    pdfPageNumber: 72,
    bookPageLabel: '64',
    chapterNumber: 3,
    sectionRef: '3.1',
    titleEn: 'Shear Stress and Shear Strain',
    titleAm: 'የሸራታፊ ስትረስ እና የሸራታፊ ስትሬይን',
    subtopicEn: 'Tangential Force, Shearing Angle tan(theta) & Deformation Height',
    subtopicAm: 'የአግድም ወለል ጉልበት፣ የመሸራተት አንግል እና የመዛባት ቁመት',
    pageType: 'content',
    contentEn: `Figure: Tensile Strain and Shear Deformation

2. Shear Stress and Shear Strain:
Shear stress occurs when equal and opposite forces act tangentially (parallel) to opposite faces of a body, tending to slide layers of molecules past one another.
Shear Stress = F_tangential / A

Shear Strain is defined as the displacement Δx of the stressed surface divided by the transverse distance h between the faces:
Shear Strain = Δx / h = tanθ ≈ θ (for small deformations)
where θ is the shearing angle measured in radians.

Unlike tensile stress which changes length, shear stress causes a change in the SHAPE of the body without changing its volume. Liquids and gases cannot support shear stress under static equilibrium—they simply flow!`,
    contentAm: `፪. የሸራታፊ ስትረስ እና ስትሬይን (Shear Stress & Strain)፡
ሁለት እኩል እና ተቃራኒ ጉልበቶች ከአካሉ ገጽታዎች ጋር ትይዩ (Tangential) ሆነው አንዱን ወገን ከሌላው ለማንሸራተት ሲሰሩ ይከሰታል፡
የሸራታፊ ስትረስ = F_tangential / A

የሸራታፊ ስትሬይን፡ የተሸራተተው አግድም ርቀት (Δx) ለከፍታው (h) ሲካፈል ይገኛል፡
የሸራታፊ ስትሬይን = Δx / h = tanθ ≈ θ

የሸራታፊ ስትረስ የአካሉን ይዘት (Volume) ሳይቀይር ቅርጹን ብቻ ያዛባል። ፈሳሾችና ጋዞች ረጊ ሆነው የሸራታፊ ስትረስን መቋቋም አይችሉም፤ ወዲያውኑ ይፈሳሉ!`
  },

  // Page 73 - Book page 65
  {
    pdfPageNumber: 73,
    bookPageLabel: '65',
    chapterNumber: 3,
    sectionRef: '3.1',
    titleEn: 'Volume Stress and Strain & Elastic Moduli',
    titleAm: 'የይዘት (Volume) ስትረስ፣ ስትሬይን እና የኢላስቲክ ሞጁለሶች',
    subtopicEn: 'Hydraulic Stress Delta P, Volume Strain Delta V / V0 & Modulus Definition',
    subtopicAm: 'የሃይድሮሊክ ጫና ለውጥ፣ የይዘት ስትሬይን እና የሞጁለስ ትርጉም',
    pageType: 'content',
    contentEn: `3. Volume Stress and Strain (Hydraulic Stress):
When a body is submerged in a fluid, the fluid exerts a uniform inward pressure perpendicular to every point on the object's surface, tending to compress it into a smaller volume.
Volume Stress = ΔP = ΔF / A (Change in pressure)
Volume Strain = ΔV / V₀
where V₀ is original volume and ΔV is the change in volume.

Elasticity Moduli (Hooke's Law for Solids):
For small deformations, stress is directly proportional to strain (the generalized Hooke's Law):
Stress / Strain = Elastic Modulus = Constant

The constant of proportionality is called the Elastic Modulus of the material. A material with a large elastic modulus is very stiff and resists deformation, requiring large forces to produce even small strains.`,
    contentAm: `፫. የይዘት ስትረስ እና ስትሬይን (Volume Stress & Strain)፡
አንድ አካል በፈሳሽ ውስጥ ሲሰምጥ፣ ፈሳሹ በሁሉም አቅጣጫ ወደ ውስጥ የሚያደርገው ወጥ የሆነ ጫና የይዘት ስትረስ ይባላል፡
የይዘት ስትረስ = ΔP = ΔF / A (የጫና ለውጥ)
የይዘት ስትሬይን = ΔV / V₀ (የይዘት ለውጥ ለመነሻ ይዘት)

የኢላስቲክ ሞጁለሶች (Elastic Moduli)፡
መጠነኛ ለሆኑ መዛባቶች ስትረስ ከስትሬይን ጋር ቀጥተኛ ተመጣጣኝ ነው (የሁክ ህግ)፡
Stress / Strain = Elastic Modulus = ቋሚ ቁጥር
ይህ ቋሚ ቁጥር የቁሱ የጥንካሬ መለኪያ ሲሆን ቁጥሩ ትልቅ ከሆነ ቁሱ በቀላሉ የማይለጠጥ ወይም የማይጎብጥ ጠንካራ መሆኑን ያሳያል።`
  },

  // Page 74 - Book page 66
  {
    pdfPageNumber: 74,
    bookPageLabel: '66',
    chapterNumber: 3,
    sectionRef: '3.1',
    titleEn: "Young's, Shear, and Bulk Moduli Formulas",
    titleAm: 'የያንግ፣ የሸር እና የባልክ ሞጁለስ ቀመሮች',
    subtopicEn: 'Formulas for Y, S, and Bulk Modulus B = -Delta P / (Delta V / V0)',
    subtopicAm: 'የያንግ (Y)፣ ሸር (S) እና ባልክ (B) ሞጁለስ ስሌት ቀመሮች',
    pageType: 'content',
    contentEn: `The Three Elastic Moduli:

1. Young's Modulus (Y):
Measures the resistance of a solid to changes in its length under tensile or compressive stress:
Y = Tensile Stress / Tensile Strain = (F / A) / (ΔL / L₀) = (F L₀) / (A ΔL)
Units: Pascal (N/m²).

2. Shear Modulus (S):
Measures the resistance of a solid to changes in its shape under shear stress:
S = Shear Stress / Shear Strain = (F / A) / (Δx / h) = (F / A) / θ
Units: Pascal (N/m²).

3. Bulk Modulus (B):
Measures the resistance of solids, liquids, or gases to changes in their volume under uniform hydrostatic pressure:
B = - Volume Stress / Volume Strain = - ΔP / (ΔV / V₀)
Units: Pascal (N/m²).
The negative sign is inserted because an increase in pressure (positive ΔP) always causes a DECREASE in volume (negative ΔV), ensuring that the bulk modulus B is always a positive quantity.`,
    contentAm: `ሦስቱ የኢላስቲክ ሞጁለሶች፡

፩. የያንግ ሞጁለስ (Young's Modulus - Y)፡
አንድ ጠጣር ቁስ በርዝመቱ ላይ ለሚደረግ መወጠር ወይም መጨመቅ የሚያሳየውን ተቃውሞ ይለካል፡
Y = (F / A) / (ΔL / L₀) = (F L₀) / (A ΔL)

፪. የሸር ሞጁለስ (Shear Modulus - S)፡
አንድ ጠጣር ቁስ ለቅርጽ ለውጥ የሚያሳየውን የመቋቋም አቅም ይለካል፡
S = (F / A) / (Δx / h) = (F / A) / θ

፫. የባልክ ሞጁለስ (Bulk Modulus - B)፡
ጠጣሮች፣ ፈሳሾች ወይም ጋዞች ለይዘት (Volume) ቅነሳ የሚያሳዩትን ተቃውሞ ይለካል፡
B = - ΔP / (ΔV / V₀)
የኔጌቲቭ ምልክቱ የተቀመጠው ጫና ሲጨምር ይዘት ሁልጊዜ ስለሚቀንስ B ምንጊዜም ፖዘቲቭ ሆኖ እንዲቆይ ነው።`
  },

  // Page 75 - Book page 67
  {
    pdfPageNumber: 75,
    bookPageLabel: '67',
    chapterNumber: 3,
    sectionRef: '3.1',
    titleEn: 'Compressibility & Table of Elastic Moduli',
    titleAm: 'የመጨመቅ አቅም እና የቁሶች የሞጁለስ ሰንጠረዥ',
    subtopicEn: 'Compressibility k = 1/B & Table 3.1: Moduli of Common Substances',
    subtopicAm: 'የመጨመቅ አቅም (k = 1/B) እና የብረታ ብረትና ፈሳሾች ሞጁለስ ሰንጠረዥ',
    pageType: 'table',
    contentEn: `Compressibility (k):
The reciprocal of the Bulk Modulus is called compressibility:
k = 1 / B = - (1 / V₀) (ΔV / ΔP)
Liquids have very small compressibility, meaning they are nearly incompressible!

Table 3.1: Approximate Elastic Moduli of Common Substances:
• Steel: Y = 200 × 10⁹ Pa, S = 84 × 10⁹ Pa, B = 160 × 10⁹ Pa
• Aluminum: Y = 70 × 10⁹ Pa, S = 25 × 10⁹ Pa, B = 70 × 10⁹ Pa
• Copper: Y = 110 × 10⁹ Pa, S = 42 × 10⁹ Pa, B = 140 × 10⁹ Pa
• Glass: Y = 65 × 10⁹ Pa, S = 26 × 10⁹ Pa, B = 50 × 10⁹ Pa
• Water: Y = —, S = —, B = 2.2 × 10⁹ Pa
• Mercury: Y = —, S = —, B = 27 × 10⁹ Pa

Example:
A solid brass sphere of volume 0.50 m³ is lowered to a depth in the ocean where the water pressure is 2.0 × 10⁷ Pa greater than at the surface. If Bulk Modulus of brass is 6.1 × 10¹⁰ Pa, find the change in volume of the sphere.
Solution:
ΔV = - (V₀ ΔP) / B = - [(0.50 m³)(2.0 × 10⁷ Pa)] / (6.1 × 10¹⁰ Pa) = - 1.64 × 10⁻⁴ m³.`,
    contentAm: `የመጨመቅ አቅም (Compressibility - k)፡
የባልክ ሞጁለስ ግልባጭ የመጨመቅ አቅም ይባላል፡
k = 1 / B
ፈሳሾች እጅግ ዝቅተኛ የሆነ የመጨመቅ አቅም ስላላቸው በተግባር እንደማይጨመቁ (Incompressible) ይቆጠራሉ።

ሰንጠረዥ 3.1፡ የቁሶች የኢላስቲክ ሞጁለሶች (ብረት፣ አልሙኒየም፣ መዳብ፣ መስታወት፣ ውሃ፣ ሜርኩሪ)

ምሳሌ፡
0.50 ሜ³ ይዘት ያለው የናስ ሉል ውቅያኖስ ውስጥ ሰጥሞ ተጨማሪ 2.0 × 10⁷ ፓስካል ጫና አረፈበት። የናስ ባልክ ሞጁለስ 6.1 × 10¹⁰ ፓስካል ቢሆን የይዘቱ ለውጥ ስንት ይሆናል?
መፍትሔ፡
ΔV = - (0.50 × 2.0 × 10⁷) / 6.1 × 10¹⁰ = - 1.64 × 10⁻⁴ ሜ³ (ይዘቱ በትንሹ ቀነሰ)።`,
    tables: [
      {
        id: 'phys-tbl-3-1',
        caption: 'Table 3.1: Approximate Elastic Moduli of Common Substances',
        headers: ['Substance', "Young's Modulus Y (Pa)", 'Shear Modulus S (Pa)', 'Bulk Modulus B (Pa)'],
        rows: [
          ['Steel', '200 × 10⁹', '84 × 10⁹', '160 × 10⁹'],
          ['Aluminum', '70 × 10⁹', '25 × 10⁹', '70 × 10⁹'],
          ['Copper', '110 × 10⁹', '42 × 10⁹', '140 × 10⁹'],
          ['Glass', '65 × 10⁹', '26 × 10⁹', '50 × 10⁹'],
          ['Water', '—', '—', '2.2 × 10⁹'],
          ['Mercury', '—', '—', '27 × 10⁹']
        ]
      }
    ]
  },

  // Page 76 - Book page 68
  {
    pdfPageNumber: 76,
    bookPageLabel: '68',
    chapterNumber: 3,
    sectionRef: '3.2',
    titleEn: 'Density and Pressure in Static Fluids',
    titleAm: 'እፍጋት እና ጫና በረጊ ፈሳሾች ውስጥ',
    subtopicEn: '3.2. Density rho = m / V, Specific Gravity & Submerged Sphere Problem',
    subtopicAm: '፫.፪ እፍጋት (ρ = m/V)፣ ስፔሲፊክ ግራቪቲ እና የተሰሩ ምሳሌዎች',
    pageType: 'content',
    contentEn: `3.2. Density and Pressure in Static Fluids
Density (ρ):
The density of a substance is defined as its mass per unit volume:
ρ = m / V
SI Unit of density: kg/m³.
• Pure water at 4 °C has density ρ_water = 1000 kg/m³ = 1.00 g/cm³.

Specific Gravity (SG):
Specific gravity is the dimensionless ratio of the density of a substance to the density of pure water at 4 °C:
SG = ρ_substance / ρ_water
Example: The density of mercury is 13,600 kg/m³, so its SG = 13.6.

Example:
A wooden sphere of radius r = 0.10 m floats in water. If the mass of the sphere is 3.14 kg:
(a) Find the density of the wood.
(b) Find its specific gravity.

Solution:
Volume of sphere: V = 4/3 π r³ = 4/3 π (0.10 m)³ = 4.19 × 10⁻³ m³.
(a) Density: ρ = m / V = 3.14 kg / (4.19 × 10⁻³ m³) = 749 kg/m³.
(b) Specific Gravity: SG = 749 / 1000 = 0.749.`,
    contentAm: `፫.፪ እፍጋት እና ጫና በረጊ ፈሳሾች ውስጥ
እፍጋት (Density - ρ)፡
የአንድ ንጥረ ነገር ክብደት ለይዘቱ ሲካፈል የሚገኝ መጠን ነው፡
ρ = m / V
አሃዱ፡ kg/m³ ነው። የንጹህ ውሃ እፍጋት 1000 kg/m³ = 1.00 g/cm³ ነው።

ስፔሲፊክ ግራቪቲ (Specific Gravity - SG)፡
የአንድ ንጥረ ነገር እፍጋት ለንጹህ ውሃ እፍጋት ሲካፈል የሚገኝ አሃድ አልባ ምጣኔ ነው፡
SG = ρ_substance / ρ_water

ምሳሌ፡
3.14 ኪ.ግ የሚመዝን 0.10 ሜትር ራዲየስ ያለው የእንጨት ሉል በውሃ ላይ ተንሳፈፈ፡
ሀ. የእንጨቱ እፍጋት፡ ρ = 3.14 / (4.19 × 10⁻³) = 749 kg/m³።
ለ. ስፔሲፊክ ግራቪቲው፡ SG = 749 / 1000 = 0.749።`
  },

  // Page 77 - Book page 69
  {
    pdfPageNumber: 77,
    bookPageLabel: '69',
    chapterNumber: 3,
    sectionRef: '3.2',
    titleEn: 'Hydrostatic Pressure & Atmospheric vs Gauge Pressure',
    titleAm: 'የሀይድሮስታቲክ ጫና እና የከባቢ አየር ከጌጅ ጫና',
    subtopicEn: 'Derivation of P = P0 + rho g h, Atmospheric and Gauge Formulas',
    subtopicAm: 'የፈሳሽ ጥልቀት ጫና (P = P₀ + ρgh) ማረጋገጫ እና የጌጅ ጫና ልዩነት',
    pageType: 'content',
    contentEn: `Pressure in Fluids:
Pressure is the normal force exerted per unit area:
P = F / A
SI unit: 1 Pascal (Pa) = 1 N/m².
Standard atmospheric pressure at sea level:
1 atm = 1.013 × 10⁵ Pa = 101.3 kPa = 760 mmHg = 1.013 bar.

Variation of Pressure with Depth (Hydrostatic Equation):
Consider a cylindrical fluid element of cross-sectional area A and height h at depth below surface.
The downward force at bottom is F₂ = P A.
The upward forces are F₁ = P₀ A (surface atmospheric pressure) + weight of fluid cylinder:
Weight = m g = (ρ V) g = (ρ A h) g
For equilibrium:
P A = P₀ A + ρ A h g
Dividing by area A:
P = P₀ + ρ g h ------------------------------------------------------ (3.2.1)

Types of Pressure:
1. Atmospheric Pressure (P₀ or P_atm): Pressure exerted by Earth's atmosphere.
2. Gauge Pressure (P_gauge): The difference between absolute pressure and atmospheric pressure:
   P_gauge = P - P₀ = ρ g h
3. Absolute Pressure (P_abs): The total actual pressure at that point:
   P_abs = P_gauge + P_atm.`,
    contentAm: `የፈሳሽ ጫና እና የጥልቀት ቀመር፡
ጫና ማለት በአንድ ስፋት ላይ የሚያርፍ ኖርማል ጉልበት ነው፡ P = F / A።
የከባቢ አየር ጫና በባህር ጠለል ላይ፡ 1 atm = 1.013 × 10⁵ ፓስካል = 760 ሚ.ሜ ሜርኩሪ።

የሀይድሮስታቲክ ጫና ቀመር ማረጋገጫ፡
በፈሳሽ ውስጥ ጥልቀት (h) በጨመረ ቁጥር የላዩ ፈሳሽ ክብደት ስለሚጨምር ጫናው በቀጥታ ይጨምራል፡
P = P₀ + ρ g h (ቀመር 3.2.1)

የጫና አይነቶች፡
፩. የከባቢ አየር ጫና (Atmospheric Pressure - P₀)፤
፪. ጌጅ ጫና (Gauge Pressure)፡ ከመደበኛ አየር ጫና በላይ ያለ ተጨማሪ ጫና፡ P_gauge = ρ g h፤
፫. አጠቃላይ ጫና (Absolute Pressure)፡ P_abs = P_gauge + P_atm።`
  },

  // Page 78 - Book page 70
  {
    pdfPageNumber: 78,
    bookPageLabel: '70',
    chapterNumber: 3,
    sectionRef: '3.3',
    titleEn: "Absolute Pressure Example & Pascal's Principle",
    titleAm: 'የአጠቃላይ ጫና ምሳሌ እና የፓስካል መርህ',
    subtopicEn: '3.3. Submerged Wreck Problem & Pascal Enclosed Fluid Transmission',
    subtopicAm: 'በጥልቀት ውስጥ ያለ መርከብ ጫና ስሌት እና ፫.፫ የፓስካል መርህ',
    pageType: 'content',
    contentEn: `Example (Submarine Pressure):
A submarine explores a wreck at a depth of 250 m below the surface of the ocean (seawater density ρ = 1025 kg/m³).
(a) What is the gauge pressure on the submarine hull?
(b) What is the absolute pressure?
(c) What is the total force on a circular viewing window of diameter 30 cm?

Solution:
(a) P_gauge = ρ g h = (1025 kg/m³)(9.8 m/s²)(250 m) = 2.51 × 10⁶ Pa = 2.51 MPa.
(b) P_abs = P_gauge + P_atm = 2.51 × 10⁶ + 1.013 × 10⁵ Pa = 2.61 × 10⁶ Pa.
(c) Window radius r = 0.15 m, Area A = π (0.15 m)² = 0.0707 m².
    Force: F = P_abs A = (2.61 × 10⁶ Pa)(0.0707 m²) = 1.85 × 10⁵ N.

3.3. Buoyant Force and Archimedes' Principles
Pascal's Principle:
Blaise Pascal (1623–1662) discovered:
"A change in pressure applied to an enclosed, incompressible fluid is transmitted undiminished to every portion of the fluid and to the walls of the containing vessel."`,
    contentAm: `የተሰራ ምሳሌ፡
የባህር ሰርጓጅ መርከብ በ250 ሜትር ጥልቀት ላይ ይገኛል (የውቅያኖስ ውሃ እፍጋት 1025 kg/m³)፡
ሀ. ጌጅ ጫና፡ P_gauge = 1025 × 9.8 × 250 = 2.51 × 10⁶ ፓስካል (2.51 MPa)።
ለ. አጠቃላይ ጫና፡ P_abs = 2.51×10⁶ + 1.013×10⁵ = 2.61 × 10⁶ ፓስካል (26 አትሞስፌር ያህል!)።
ሐ. በ30 ሴ.ሜ መስኮት ላይ የሚያርፈው ኃይል፡ F = P × A = 185,000 ኒውተን።

፫.፫ ተንሳፋፊ ኃይል እና የአርኪሜድስ መርህ
የፓስካል መርህ (Pascal's Principle)፡
"በተዘጋ መያዣ ውስጥ ባለ ፈሳሽ ላይ የሚተገበር ማናቸውም የጫና ለውጥ ሳይቀንስ ለሁሉም የፈሳሹ ክፍሎች እና ለእቃው ግድግዳዎች እኩል ይተላለፋል።"`
  },

  // Page 79 - Book page 71
  {
    pdfPageNumber: 79,
    bookPageLabel: '71',
    chapterNumber: 3,
    sectionRef: '3.3',
    titleEn: "Hydraulic Press & Mechanical Advantage",
    titleAm: 'የሃይድሮሊክ ፕሬስ እና የመካኒካል ጥቅም ስሌት',
    subtopicEn: 'P1 = P2 => F1 / A1 = F2 / A2 & Car Lift Problem',
    subtopicAm: 'የሃይድሮሊክ ቀመር (F1/A1 = F2/A2) እና የመኪና ማንሻ ምሳሌ',
    pageType: 'content',
    contentEn: `The Hydraulic Press:
An important application of Pascal's principle is the hydraulic lift used in automotive service stations.
A small piston of area A₁ is acted upon by a small input force F₁. The pressure created is:
P = F₁ / A₁
Because the pressure is transmitted undiminished throughout the fluid, the pressure at the large piston of area A₂ is the same:
P = F₂ / A₂  =>  F₁ / A₁ = F₂ / A₂
Rearranging:
F₂ = F₁ (A₂ / A₁) --------------------------------------------------- (3.3.1)
The ratio A₂ / A₁ is the mechanical advantage of the hydraulic press! A small force applied to a small piston can lift a massive car on the large piston.

Example:
In a hydraulic car lift, the input piston has a radius of 5.0 cm and the output piston has a radius of 15.0 cm. What input force is required to lift a car of mass 1500 kg?
Solution:
Weight of car: F₂ = m g = (1500 kg)(9.8 m/s²) = 14,700 N.
Area ratio: A₂ / A₁ = (π r₂²) / (π r₁²) = (r₂ / r₁)² = (15.0 / 5.0)² = 3² = 9.
Input force:
F₁ = F₂ (A₁ / A₂) = 14,700 N / 9 = 1,633 N ≈ 1.63 kN.`,
    contentAm: `የሃይድሮሊክ ማንሻ (The Hydraulic Press)፡
የፓስካል መርህ ተግባራዊ ከሚሆንባቸው ዋነኛ መሳሪያዎች አንዱ መኪና ማንሻ (Hydraulic lift) ነው።
በትንሹ ፒስተን (A1) ላይ አነስተኛ ጉልበት (F1) ሲተገበር የሚፈጠረው ጫና ሳይቀንስ ወደ ትልቁ ፒስተን (A2) ይተላለፋል፡
F1 / A1 = F2 / A2
F2 = F1 (A2 / A1) (ቀመር 3.3.1)
A2 / A1 የመሳሪያው መካኒካል ጥቅም (Mechanical advantage) ይባላል። በዚህም አነስተኛ ጉልበት በመጠቀም ግዙፍ መኪናዎችን በቀላሉ ማንሳት ይቻላል።

ምሳሌ፡
የትልቁ ፒስተን ራዲየስ 15 ሴ.ሜ፣ የትንሹ 5 ሴ.ሜ ቢሆን፣ 1500 ኪ.ግ መኪና ለማንሳት ምን ያህል ጉልበት ያስፈልጋል?
መፍትሔ፡
የመኪናው ክብደት፡ F2 = 1500 × 9.8 = 14,700 ኒውተን።
የስፋት ምጣኔ፡ A2/A1 = (15/5)² = 9።
የሚያስፈልገው ጉልበት፡ F1 = 14,700 / 9 = 1,633 ኒውተን።`
  },

  // Page 80 - Book page 72
  {
    pdfPageNumber: 80,
    bookPageLabel: '72',
    chapterNumber: 3,
    sectionRef: '3.3.1',
    titleEn: "Archimedes' Principle & Buoyancy Calculations",
    titleAm: 'የአርኪሜድስ መርህ እና የተንሳፋፊነት ስሌቶች',
    subtopicEn: '3.3.1. Buoyant Force F_b = rho_fluid * V_disp * g & Floating Body Conditions',
    subtopicAm: '፫.፫.፩ ተንሳፋፊ ኃይል (Fb = ρ V g) እና የአርኪሜድስ መርህ',
    pageType: 'content',
    contentEn: `3.3.1. Archimedes' Principle
Greek mathematician Archimedes of Syracuse (287–212 BC) discovered:
"Any body completely or partially submerged in a fluid experiences an upward buoyant force equal in magnitude to the weight of the fluid displaced by the body."

Buoyant Force Formula:
F_b = W_fluid_displaced = m_fluid g = ρ_fluid V_displaced g ------------ (3.3.2)
where:
• ρ_fluid = density of the surrounding fluid
• V_displaced = volume of fluid displaced by the submerged portion of the object
• g = acceleration due to gravity.

Floating and Sinking Conditions:
Let the average density of the object be ρ_obj:
1. If ρ_obj > ρ_fluid: Weight exceeds buoyant force; object SINKS to the bottom.
2. If ρ_obj = ρ_fluid: Object is in neutral buoyancy; remains suspended at any depth.
3. If ρ_obj < ρ_fluid: Object FLOATS on the surface, with a fraction of its volume submerged:
   V_submerged / V_total = ρ_obj / ρ_fluid.

Example:
An object weighs 50 N in air and 38 N when completely submerged in water.
Find: (a) the buoyant force, (b) the volume of the object, and (c) its density.
Solution:
(a) F_b = W_air - W_sub = 50 N - 38 N = 12 N.
(b) V = F_b / (ρ_w g) = 12 / (1000 × 9.8) = 1.22 × 10⁻³ m³.
(c) ρ = m / V = (50/9.8) / (1.22 × 10⁻³) = 4180 kg/m³.`,
    contentAm: `፫.፫.፩ የአርኪሜድስ መርህ (Archimedes' Principle)
"በፈሳሽ ውስጥ በከፊል ወይም ሙሉ በሙሉ የሰመጠ ማንኛውም አካል እርሱ ካፈናቀለው የፈሳሽ ክብደት ጋር እኩል የሆነ ወደ ላይ ገፊ ተንሳፋፊ ኃይል (Buoyant force) ያገኛል።"

ቀመር፡
F_b = ρ_fluid V_displaced g (ቀመር 3.3.2)

የመስመጥ እና የመንሳፈፍ ሁኔታዎች፡
፩. የዕቃው እፍጋት ከፈሳሹ ከበለጠ (ρ_obj > ρ_fluid)፡ ዕቃው ይሰምጣል።
፪. እፍጋታቸው እኩል ከሆነ (ρ_obj = ρ_fluid)፡ በፈሳሹ ውስጥ በማንኛውም ጥልቀት ተንሳፎ ይቆያል።
፫. የዕቃው እፍጋት ካነሰ (ρ_obj < ρ_fluid)፡ ዕቃው ከፊሉ በውሃ ውስጥ ሆኖ ወለል ላይ ይንሳፈፋል፡
የሰመጠው ይዘት ምጣኔ፡ V_sub / V_tot = ρ_obj / ρ_fluid።`
  },

  // Page 81 - Book page 73
  {
    pdfPageNumber: 81,
    bookPageLabel: '73',
    chapterNumber: 3,
    sectionRef: '3.4',
    titleEn: 'Fluid Dynamics: Ideal Fluid Assumptions',
    titleAm: 'የተንቀሳቃሽ ፈሳሾች ዳይናሚክስ፡ የኢዲያል ፈሳሽ መላምቶች',
    subtopicEn: '3.4. Moving Fluids, Laminar vs Turbulent Flow & Ideal Fluid Properties',
    subtopicAm: '፫.፬ ተንቀሳቃሽ ፈሳሾች፣ ረጋ ያለና የተረበሸ ፍሰት እንዲሁም የኢዲያል ፈሳሽ ባህሪያት',
    pageType: 'content',
    contentEn: `3.4. Moving Fluids and Bernoulli Equations (Fluid Dynamics)
When fluids are in motion, their analysis can be quite complex.
Types of Flow:
• Laminar (Streamline) Flow: Every particle of fluid follows a smooth, continuous path without crossing. Flow is orderly.
• Turbulent Flow: Irregular flow characterized by swirling whirlpools, eddies, and rapid fluctuations.

Four Assumptions of an Ideal Fluid:
To make mathematical analysis tractable, physicists model fluid flow using an Ideal Fluid:
1. Steady (Streamline) Flow: The velocity of the moving fluid at any fixed point does not change with time (dv/dt = 0).
2. Incompressible Flow: The density of the fluid is constant throughout (ρ = constant).
3. Non-viscous Flow: The fluid has no internal friction. Objects moving through experience no drag force.
4. Irrotational Flow: The fluid has no angular momentum about any point; a small paddlewheel placed in the stream would translate without rotating.`,
    contentAm: `፫.፬ ተንቀሳቃሽ ፈሳሾች እና የበርኑሊ ቀመር (Fluid Dynamics)
የፈሳሾች ፍሰት በሁለት ይከፈላል፡
• ረጋ ያለ ፍሰት (Laminar Flow)፡ የፈሳሹ ቅንጣቶች ሳይደባለቁ በለሰለሰ ቀጥተኛ መስመር የሚጓዙበት ፍሰት ነው።
• የተረበሸ ፍሰት (Turbulent Flow)፡ ፈሳሹ እየተሽከረከረና እየተላተመ የሚጓዝበት ምስቅልቅል ፍሰት ነው።

የኢዲያል ፈሳሽ (Ideal Fluid) አራት መላምቶች፡
፩. ቋሚ ፍሰት (Steady Flow)፡ በማንኛውም ቋሚ ነጥብ ላይ ያለው የፍሰት ፍጥነት ከጊዜ ጋር አይለወጥም።
፪. የማይጨመቅ (Incompressible)፡ የፈሳሹ እፍጋት በሁሉም ቦታ ቋሚ ነው (ρ = constant)።
፫. ግጭት አልባ (Non-viscous)፡ በፈሳሹ ቅንጣቶች መካከል ምንም ዓይነት ውስጣዊ ግጭት የለም።
፬. የማይሽከረከር (Irrotational)፡ ፈሳሹ በራሱ ዛቢያ ዙሪያ የሚፈጥረው ሽክርክሪት የለም።`
  },

  // Page 82 - Book page 74
  {
    pdfPageNumber: 82,
    bookPageLabel: '74',
    chapterNumber: 3,
    sectionRef: '3.4',
    titleEn: 'Equation of Continuity & Volume Flow Rate',
    titleAm: 'የኮንቲኒዩቲ ቀመር እና የፈሳሽ ፍሰት ምጣኔ',
    subtopicEn: 'Conservation of Mass: A1 v1 = A2 v2 & 3.4.1. Bernoulli Introduction',
    subtopicAm: 'የክብደት ጥበቃ፡ A1 v1 = A2 v2 እና ፫.፬.፩ የበርኑሊ መግቢያ',
    pageType: 'content',
    contentEn: `The Equation of Continuity:
Consider an incompressible fluid flowing through a pipe of varying cross-sectional area.
Because mass cannot be created or destroyed, the mass of fluid entering section 1 in time Δt must equal the mass leaving section 2 in the same time interval:
Δm₁ = Δm₂
ρ₁ A₁ v₁ Δt = ρ₂ A₂ v₂ Δt
Since the fluid is incompressible (ρ₁ = ρ₂ = ρ):
A₁ v₁ = A₂ v₂ = Constant --------------------------------------------- (3.4.1)

Volume Flow Rate (Q):
The product of cross-sectional area and speed is called the volume flow rate (or discharge):
Q = A v = dV / dt
SI Unit: m³/s.

Physical Meaning:
The equation of continuity states that where a pipe narrows, the fluid must speed up; where the pipe widens, the fluid slows down! This explains why water rushes out much faster when you place your thumb over the end of a garden hose.

3.4.1. Bernoulli's Equation
Daniel Bernoulli (1700–1782) applied the principle of conservation of energy to fluid flow, deriving the fundamental relationship connecting pressure, speed, and elevation.`,
    contentAm: `የኮንቲኒዩቲ ቀመር (Equation of Continuity)፡
ፈሳሽ ስፋቱ በሚለዋወጥ ቱቦ ውስጥ ሲፈስ፣ የክብደት ጥበቃ ህግን መሰረት በማድረግ ወደ ውስጥ የገባው የፈሳሽ መጠን ከወጣው ጋር እኩል መሆን አለበት፡
A1 v1 = A2 v2 = ቋሚ ቁጥር (ቀመር 3.4.1)

የፍሰት ምጣኔ (Volume Flow Rate - Q)፡
Q = A v
አሃዱ፡ m³/s ነው።

ተግባራዊ ትርጉም፡
የቧንቧው ስፋት በጠበበ ቁጥር የፈሳሹ ፍጥነት ይጨምራል፤ ቧንቧው በሰፋ ቁጥር ደግሞ ፍጥነቱ ይቀንሳል! የውሃ ማጠጫ ኮ羅ን አፍ በጣታችን ስንይዘው ውሃው ርቆ የሚተኮሰው በዚህ ምክንያት ነው።

፫.፬.፩ የበርኑሊ ቀመር (Bernoulli's Equation)
ዳንኤል በርኑሊ የኃይል ጥበቃ ህግን ለሚፈሱ ፈሳሾች በመተግበር በጫና፣ በፍጥነት እና በከፍታ መካከል ያለውን ዝምድና አረጋገጠ።`
  },

  // Page 83 - Book page 75
  {
    pdfPageNumber: 83,
    bookPageLabel: '75',
    chapterNumber: 3,
    sectionRef: '3.4.1',
    titleEn: "Bernoulli's Equation: Energy Conservation in Flow",
    titleAm: 'የበርኑሊ ቀመር፡ የኃይል ጥበቃ በሚፈሱ ፈሳሾች ውስጥ',
    subtopicEn: 'P + 1/2 rho v^2 + rho g y = Constant & Home Heating Pipe Example',
    subtopicAm: 'ቀመር P + 1/2 ρv² + ρgy = ቋሚ እና የቤት ማሞቂያ ቱቦ ምሳሌ',
    pageType: 'content',
    contentEn: `Derivation of Bernoulli's Equation:
Consider an element of fluid moving through a non-uniform pipe from height y₁ to y₂.
By the work-energy theorem:
W_net = ΔKE + ΔPE
Net work done by pressure forces at both ends:
W_net = P₁ A₁ Δx₁ - P₂ A₂ Δx₂ = (P₁ - P₂) ΔV
Change in kinetic energy: ΔKE = 1/2 m (v₂² - v₁²) = 1/2 (ρ ΔV)(v₂² - v₁²)
Change in potential energy: ΔPE = m g (y₂ - y₁) = (ρ ΔV) g (y₂ - y₁)

Equating work and energy change:
(P₁ - P₂) ΔV = 1/2 ρ ΔV (v₂² - v₁²) + ρ g ΔV (y₂ - y₁)
Dividing by ΔV and rearranging:
P₁ + 1/2 ρ v₁² + ρ g y₁ = P₂ + 1/2 ρ v₂² + ρ g y₂ -------------------- (3.4.2)

General Form:
P + 1/2 ρ v² + ρ g y = Constant

Key Insights:
• Static Pressure Term: P
• Dynamic Pressure Term: 1/2 ρ v²
• Hydrostatic Potential Term: ρ g y
When fluid speed increases, internal pressure MUST decrease!

Example (Water Heating System):
Water enters a house through a pipe of diameter 4.0 cm at an absolute pressure of 4.0 × 10⁵ Pa with speed 0.50 m/s. The pipe narrows to 2.0 cm as it rises to the second floor, 5.0 m above. Find: (a) the flow speed, and (b) the pressure on the second floor.`,
    contentAm: `የበርኑሊ ቀመር ማረጋገጫ፡
W_net = ΔKE + ΔPE
(P1 - P2) ΔV = 1/2 ρ ΔV (v2² - v1²) + ρ g ΔV (y2 - y1)
በΔV በማካፈልና በማቀናጀት፡
P1 + 1/2 ρ v1² + ρ g y1 = P2 + 1/2 ρ v2² + ρ g y2 (ቀመር 3.4.2)

አጠቃላይ መልክ፡
P + 1/2 ρ v² + ρ g y = ቋሚ ቁጥር

ቁልፍ እውነታ፡
በተመሳሳይ ከፍታ ላይ የፈሳሽ ፍጥነት በጨመረ ቁጥር የፈሳሹ የውስጥ ጫና (Pressure) ይቀንሳል!

ምሳሌ (የቤት የውሃ መስመር)፡
ውሃ በ4.0 ሴ.ሜ ቧንቧ በ4.0 × 10⁵ ፓስካል ጫና በ0.50 ሜ/ሰ ፍጥነት ወደ ቤት ገባ። ቱቦው ወደ 2.0 ሴ.ሜ ጠቦ 5.0 ሜትር ከፍታ ወዳለው ሁለተኛ ፎቅ ሲወጣ፡
ሀ. በሁለተኛው ፎቅ ላይ ያለው የውሃ ፍጥነት፤
ለ. በሁለተኛው ፎቅ ላይ ያለው ጫና ስንት ይሆናል?`
  },

  // Page 84 - Book page 76
  {
    pdfPageNumber: 84,
    bookPageLabel: '76',
    chapterNumber: 3,
    sectionRef: '3.4.1',
    titleEn: 'Bernoulli Problem Solution & Applications',
    titleAm: 'የበርኑሊ ስሌት መፍትሔ እና ተግባራዊ አተገባበሮች',
    subtopicEn: 'Solution for v2 = 2.0 m/s, P2 = 3.5 × 10^5 Pa & Venturi Effect',
    subtopicAm: 'የፍጥነትና ጫና ስሌት መፍትሔ እንዲሁም የቬንቹሪ ውጤት',
    pageType: 'content',
    contentEn: `Solution to Example:
(a) From the equation of continuity:
    A₁ v₁ = A₂ v₂  =>  v₂ = v₁ (A₁ / A₂) = v₁ (d₁ / d₂)²
    v₂ = (0.50 m/s) (4.0 cm / 2.0 cm)² = (0.50)(4) = 2.0 m/s.

(b) From Bernoulli's equation:
    P₂ = P₁ + 1/2 ρ (v₁² - v₂²) + ρ g (y₁ - y₂)
    Taking y₁ = 0, y₂ = 5.0 m, and ρ = 1000 kg/m³:
    1/2 ρ (v₁² - v₂²) = 1/2 (1000)(0.50² - 2.0²) = 500(0.25 - 4.0) = - 1,875 Pa
    ρ g (y₁ - y₂) = (1000)(9.8)(0 - 5.0) = - 49,000 Pa
    P₂ = 4.0 × 10⁵ Pa - 1,875 Pa - 49,000 Pa
    P₂ = 400,000 - 50,875 = 349,125 Pa ≈ 3.49 × 10⁵ Pa (or 3.5 × 10⁵ Pa).

Applications of Bernoulli's Principle:
1. Airplane Wing (Aerodynamic Lift): The curved upper surface of an airfoil forces air to travel faster over the top than underneath. By Bernoulli's equation, higher speed on top results in lower pressure above, creating an upward net force called Lift.
2. Venturi Tube & Atomizer / Perfume Spray: A constriction creates high velocity and reduced pressure that draws fluid upward.
3. Curveball in Baseball (Magnus Effect): Spinning creates differential airspeed on opposite sides.`,
    contentAm: `የምሳሌው መፍትሔ፡
ሀ. የኮንቲኒዩቲ ቀመር፡ v2 = 0.50 × (4/2)² = 2.0 ሜ/ሰ።
ለ. የበርኑሊ ቀመር፡
P2 = 400,000 - 1,875 - 49,000 = 3.49 × 10⁵ ፓስካል (349 kPa)።

የበርኑሊ መርህ ተግባራዊ አጠቃቀሞች፡
፩. የአውሮፕላን ክንፍ ማንሻ ኃይል (Aerodynamic Lift)፡ በክንፉ የላይኛው ክፍል አየር በፍጥነት እንዲያልፍ ስለሚደረግ ከላይ ያለው ጫና ይቀንሳል፤ ከስር ያለው ከፍተኛ ጫና አውሮፕላኑን ወደ ላይ ያነሳዋል!
፪. ሽቶ መርጫ (Atomizer) እና ካርቡሬተር፤
፫. ኳስ በአየር ላይ ስትሽከረከር መስመር እንድትስት የሚያደርገው የማግነስ ውጤት (Magnus effect)።`
  },

  // Page 85 - Book page 77
  {
    pdfPageNumber: 85,
    bookPageLabel: '77',
    chapterNumber: 3,
    sectionRef: 'Summary',
    titleEn: 'Chapter Three Summary (Part 1)',
    titleAm: 'የምዕራፍ ሦስት ማጠቃለያ (ክፍል ፩)',
    subtopicEn: 'Bulk Matter, Elastic Moduli, Fluid Pressure & Pascal Principle',
    subtopicAm: 'የቁሶች ጥንካሬ፣ የኢላስቲክ ሞጁለሶች፣ የፈሳሽ ጫና እና የፓስካል መርህ',
    pageType: 'content',
    contentEn: `Chapter Three Summary:
• Elastic deformation is reversible; plastic deformation is permanent.
• Stress = Force / Area (Pa = N/m²); Strain = Δ(dimension) / original dimension (dimensionless).
• Young's Modulus: Y = (F/A) / (ΔL/L₀) for length changes.
• Shear Modulus: S = (F/A) / (Δx/h) for shape changes.
• Bulk Modulus: B = - ΔP / (ΔV/V₀) for volume compression.
• Compressibility: k = 1/B.
• Density: ρ = m/V (kg/m³). Specific gravity: SG = ρ_substance / ρ_water.
• Pressure in fluids: P = F/A.
• Hydrostatic pressure at depth h: P = P₀ + ρ g h.
• Gauge pressure: P_gauge = P - P_atm = ρ g h.
• Pascal's Principle: Pressure applied to an enclosed fluid is transmitted undiminished: F₁/A₁ = F₂/A₂.`,
    contentAm: `የምዕራፍ ሦስት ማጠቃለያ (ክፍል ፩)፡
• የቁስ አካል መዛባት፡ ኢላስቲክ (ወደ ነበረበት የሚመለስ) እና ፕላስቲክ (ለዘለቄታው የሚዛባ)።
• ስትረስ = F/A፤ ስትሬይን = ΔL/L₀።
• ሞጁለሶች፡ የያንግ ሞጁለስ (Y)፣ የሸር ሞጁለስ (S)፣ የባልክ ሞጁለስ (B)።
• እፍጋት፡ ρ = m/V፤ ስፔሲፊክ ግራቪቲ፡ SG = ρ/ρ_ውሃ።
• የሀይድሮስታቲክ ጫና፡ P = P₀ + ρgh።
• የጌጅ ጫና፡ P_gauge = ρgh።
• የፓስካል መርህ፡ የተተገበረ ጫና ሳይቀንስ ይተላለፋል፡ F1/A1 = F2/A2።`
  },

  // Page 86 - Book page 78
  {
    pdfPageNumber: 86,
    bookPageLabel: '78',
    chapterNumber: 3,
    sectionRef: 'Summary',
    titleEn: 'Chapter Three Summary (Part 2)',
    titleAm: 'የምዕራፍ ሦስት ማጠቃለያ (ክፍል ፪)',
    subtopicEn: 'Archimedes Buoyancy, Ideal Flow, Continuity & Bernoulli Law',
    subtopicAm: 'የአርኪሜድስ ተንሳፋፊነት፣ የኮንቲኒዩቲ ቀመር እና የበርኑሊ ህግ',
    pageType: 'content',
    contentEn: `Chapter Three Summary (Continued):
• Archimedes' Principle: A submerged body experiences an upward buoyant force equal to the weight of the fluid it displaces:
  F_b = ρ_fluid V_displaced g.
• An object floats if its average density is less than the fluid density; sinks if greater.
• Ideal fluid is steady, incompressible, non-viscous, and irrotational.
• Equation of Continuity (Conservation of mass):
  A₁ v₁ = A₂ v₂ = Constant = Volume flow rate Q.
  Fluid speeds up where the cross-section narrows.
• Bernoulli's Equation (Conservation of mechanical energy):
  P + 1/2 ρ v² + ρ g y = Constant.
  Where fluid speed increases, internal pressure decreases.
• Torricelli's Law: The speed of efflux from an orifice at depth h below open surface is:
  v = √(2 g h).`,
    contentAm: `የምዕራፍ ሦስት ማጠቃለያ (ክፍል ፪)፡
• የአርኪሜድስ መርህ፡ ተንሳፋፊ ኃይል = ያፈናቀለው ፈሳሽ ክብደት፡ Fb = ρ V g።
• የኮንቲኒዩቲ ቀመር፡ A1 v1 = A2 v2 (ስፋቱ በጠበበበት ፍጥነት ይጨምራል)።
• የበርኑሊ ቀመር፡ P + 1/2 ρv² + ρgy = ቋሚ ቁጥር (ፍጥነት በጨመረበት ጫና ይቀንሳል)።
• የቶሪቼሊ ህግ፡ ከፈሳሽ ማጠራቀሚያ ቀዳዳ የሚወጣ ፈሳሽ ፍጥነት፡ v = √(2gh) ነው።`
  },

  // Page 87 - Book page 79
  {
    pdfPageNumber: 87,
    bookPageLabel: '79',
    chapterNumber: 3,
    sectionRef: 'Review Questions',
    titleEn: 'Chapter Three Review Questions & Problems',
    titleAm: 'የምዕራፍ ሦስት የማጠቃለያ ጥያቄዎች እና ልምምዶች',
    subtopicEn: 'Problems on Elastic Moduli, Buoyancy, Continuity & Bernoulli',
    subtopicAm: 'የሞጁለስ፣ የተንሳፋፊ ኃይል፣ የኮንቲኒዩቲ እና የበርኑሊ ልምምዶች',
    pageType: 'review',
    contentEn: `Chapter Review Questions and Problems:

1. A steel wire of diameter 2.0 mm and length 3.0 m stretches by 1.5 mm when a load of 200 N is suspended from it. Calculate Young's modulus of the steel.

2. A hydraulic press has pistons with diameters of 2.0 cm and 20.0 cm. What force must be exerted on the small piston to lift a 2000-kg load on the large piston?

3. A piece of metal weighs 90.0 N in air and 56.0 N when immersed in water.
   (a) What is the buoyant force?
   (b) What is the volume of the metal?
   (c) What is the density of the metal?

4. An iceberg floats in seawater (density 1025 kg/m³). If the density of ice is 917 kg/m³, what percentage of the iceberg's volume is submerged beneath the water?

5. Water flows through a horizontal pipe of diameter 6.0 cm at 2.0 m/s. The pipe narrows to a diameter of 2.0 cm.
   (a) What is the flow speed in the constriction?
   (b) If the pressure in the wide section is 2.5 × 10⁵ Pa, what is the pressure in the narrow section?`,
    contentAm: `የምዕራፍ ሦስት የማጠቃለያ ጥያቄዎች እና ልምምዶች፡

፩. 2.0 ሚ.ሜ ዲያሜትር እና 3.0 ሜትር ርዝመት ያለው የብረት ሽቦ በ200 ኒውተን ክብደት ሲወጠር በ1.5 ሚ.ሜ ተለጠጠ፤ የብረቱን ያንግ ሞጁለስ አስላ።

፪. የሃይድሮሊክ ፕሬስ ፒስተኖች ዲያሜትር 2.0 ሴ.ሜ እና 20.0 ሴ.ሜ ናቸው። 2000 ኪ.ግ ጭነት ለማንሳት በትንሹ ፒስተን ላይ ምን ያህል ጉልበት መተግበር አለበት?

፫. አንድ የብረት ቁራጭ በአየር ላይ 90.0 ኒውተን፣ በውሃ ውስጥ ሲሰምጥ ደግሞ 56.0 ኒውተን ይመዝናል፡
   ሀ. ተንሳፋፊ ኃይሉ ስንት ነው?
   ለ. የብረቱ ይዘት ስንት ነው?
   ሐ. የብረቱ እፍጋት ስንት ነው?

፬. የበረዶ ግግር በውቅያኖስ ውሃ (1025 kg/m³) ላይ ይንሳፈፋል። የበረዶው እፍጋት 917 kg/m³ ቢሆን ከግግሩ ስንት ፐርሰንቱ በውሃ ውስጥ ሰምጧል?

፭. ውሃ በ6.0 ሴ.ሜ አግድም ቧንቧ በ2.0 ሜ/ሰ ፍጥነት ይፈሳል። ቧንቧው ወደ 2.0 ሴ.ሜ ሲጠብ፡
   ሀ. በጠበበው ክፍል ውስጥ ያለው የውሃ ፍጥነት ስንት ነው?
   ለ. በሰፊው ክፍል ያለው ጫና 2.5 × 10⁵ ፓስካል ቢሆን በጠበበው ክፍል ያለው ጫና ስንት ይሆናል?`,
    reviewQuestions: [
      {
        title: 'Chapter 3 Review Problems',
        questions: [
          '1. Steel wire (d = 2.0 mm, L = 3.0 m) stretches 1.5 mm under 200 N load: calculate Young modulus.',
          '2. Hydraulic press with d1 = 2.0 cm and d2 = 20.0 cm: find input force to lift 2000-kg load.',
          '3. Metal weighs 90.0 N in air and 56.0 N in water: find buoyant force, volume, and density.',
          '4. Iceberg (rho = 917 kg/m^3) in seawater (rho = 1025 kg/m^3): find percentage submerged.',
          '5. Water in horizontal pipe (d1 = 6.0 cm, v1 = 2.0 m/s, P1 = 2.5x10^5 Pa) narrowing to d2 = 2.0 cm: calculate v2 and P2.'
        ]
      }
    ]
  }
];
