import { Chapter } from '../../types';

export const physicsChapter3: Chapter = {
  id: 1103,
  number: 3,
  title: {
    en: 'Chapter 3: Fluid Mechanics',
    am: 'ምዕራፍ ፫፡ የፈሳሾችና ጋዞች ሜካኒክስ (ፍሉይድ ሜካኒክስ)'
  },
  universityAuthor: 'National Physics Curriculum Committee (MoSHE 2019)',
  overview: {
    en: 'Explores elastic properties of bulk matter (stress, strain, moduli), fluid statics (density, hydrostatic pressure, Pascal’s principle, Archimedes’ buoyant force), and fluid dynamics (continuity equation and Bernoulli’s equation with practical aerodynamic applications).',
    am: 'የቁሶች የመለጠጥ ባህሪያት (ውጥረት፣ ስብራት፣ የያንግ ሞጁለስ)፣ የማይንቀሳቀሱ ፈሳሾች ባህሪ (እፍጋት፣ ግፊት፣ የፓስካል መርህ፣ የአርኪሜድስ ተንሳፋፊነት ህግ) እና የሚፈሱ ፈሳሾች እንቅስቃሴ (የቀጣይነት ቀመር እና የበርኑሊ ቀመር ከነተግባራዊ ጥቅሞቻቸው) የተካተቱበት ምዕራፍ።'
  },
  learningOutcomes: [
    {
      en: 'Define stress, strain, and calculate Young’s, shear, and bulk moduli for solid materials',
      am: 'ውጥረት (Stress)፣ ስብራት (Strain) እና የያንግ፣ ሺር፣ እንዲሁም የጅምላ ሞጁለሶችን ማስላት'
    },
    {
      en: 'Calculate hydrostatic pressure at depth and distinguish between absolute and gauge pressure',
      am: 'በፈሳሽ ጥልቀት ውስጥ ያለውን ሃይድሮስታቲክ ግፊት ማስላት እና ፍፁም ግፊትን ከመሳሪያ ግፊት መለየት'
    },
    {
      en: 'Apply Pascal’s principle to analyze hydraulic lift multiplication systems',
      am: 'የፓስካልን መርህ በመጠቀም የሃይድሮሊክ ማንሻዎች የሃይል ማባዛት አሰራርን መተንተን'
    },
    {
      en: 'Evaluate buoyant forces using Archimedes’ principle to determine conditions for floatation',
      am: 'የአርኪሜድስን መርህ በመጠቀም ተንሳፋፊ ጉልበትን ማስላትና የእቃዎች የመንሳፈፍ ሁኔታን መገምገም'
    },
    {
      en: 'Apply the equation of continuity and Bernoulli’s equation to steady, ideal fluid flows',
      am: 'የቀጣይነት ቀመርን እና የበርኑሊን ቀመር ተስማሚ ለሆኑ ፈሳሾች ፍሰት መተግበር'
    }
  ],
  sections: [
    {
      id: 'phys-3-1',
      number: '3.1',
      title: {
        en: '3.1 Elastic Properties of Bulk Matter and Elastic Moduli',
        am: '፫.፩ የቁሶች የመለጠጥ ባህሪያት እና የሞጁለስ ስሌቶች'
      },
      paragraphs: [
        {
          id: 'phys-p3-1',
          en: 'All real materials deform under applied external loads. Elasticity is the property of a body to regain its original size and shape when deforming forces are removed. Beyond the elastic limit, plastic deformation occurs where permanent strain remains. Stress is defined as the internal restoring force per unit cross-sectional area: Stress = F / A (measured in Pascals, 1 Pa = 1 N/m²). Strain is the fractional geometric deformation: Strain = Δdimension / initial dimension (dimensionless ratio).',
          am: 'ማንኛውም ቁስ ውጫዊ ጫና ሲያርፍበት ቅርጹ ይለወጣል። የመለጠጥ ባህሪ (Elasticity) ማለት የተጫነው ጉልበት ሲነሳ እቃው ወደ ቀድሞ ይዘቱና ቅርጹ የመመለስ ችሎታ ነው። የመለጠጥ ወሰኑ ሲያልፍ ቋሚ የቅርጽ ለውጥ (Plastic deformation) ይከሰታል። ውጥረት (Stress) በአንድነት ስፋት ላይ የሚያርፍ ጉልበት ሲሆን፡ Stress = F / A (በፓስካል - Pa ወይም N/m² ይሰላል)። ስብራት (Strain) የርዝመት ወይም የቅርጽ አንጻራዊ ለውጥ ውድር ነው፡ Strain = ΔL / L_0 (አሃድ አልባ ቁጥር)።',
          subheading: {
            en: 'Stress, Strain and the Elastic Limit',
            am: 'ውጥረት፣ ስብራት እና የመለጠጥ ወሰን'
          },
          highlightTerms: [
            { en: 'Stress', am: 'ውጥረት (Stress)' },
            { en: 'Strain', am: 'ስብራት (Strain)' },
            { en: 'Elastic Limit', am: 'የመለጠጥ ወሰን' }
          ]
        },
        {
          id: 'phys-p3-2',
          en: 'Hooke’s law states that within the elastic limit, stress is proportional to strain: Elastic Modulus = Stress / Strain. Three moduli quantify responses to different stresses: (1) Young’s Modulus (Y = (F/A) / (ΔL/L₀)), measuring tensile or compressive resistance to longitudinal stretching; (2) Shear Modulus (S = (F/A) / (Δx/h)), measuring resistance to parallel planar shearing; (3) Bulk Modulus (B = -ΔP / (ΔV/V₀)), measuring resistance to uniform volume compression under pressure ΔP.',
          am: 'የሁክ ህግ (Hooke’s Law) በመለጠጥ ወሰን ውስጥ ውጥረት ከስብራት ጋር በቀጥታ ይመጣጠናል ይላል፡ Modulus = Stress / Strain። ሦስት የሞጁለስ አይነቶች አሉ፡ (1) የያንግ ሞጁለስ (Young’s Modulus፡ Y = (F/A) / (ΔL/L₀)) - ለርዝመት መሳብ ወይም መኮማተር ያለውን ጥንካሬ ይለካል፤ (2) የሺር ሞጁለስ (Shear Modulus፡ S = (F/A) / (Δx/h)) - ለጎንዮሽ መንሸራተት ያለውን ተቃውሞ ይለካል፤ (3) የጅምላ ሞጁለስ (Bulk Modulus፡ B = -ΔP / (ΔV/V₀)) - በግፊት ምክንያት የሚመጣን የይዘት መኮማተር ይለካል።',
          subheading: {
            en: 'Young’s, Shear and Bulk Moduli',
            am: 'የያንግ፣ ሺር እና የጅምላ ሞጁለሶች'
          },
          highlightTerms: [
            { en: 'Young’s Modulus', am: 'የያንግ ሞጁለስ' },
            { en: 'Shear Modulus', am: 'የሺር ሞጁለስ' },
            { en: 'Bulk Modulus', am: 'የጅምላ ሞጁለስ' }
          ]
        }
      ]
    },
    {
      id: 'phys-p3-2-sec',
      number: '3.2',
      title: {
        en: '3.2 Density, Static Fluid Pressure and Pascal’s Principle',
        am: '፫.፪ እፍጋት፣ የፈሳሽ ግፊት እና የፓስካል መርህ'
      },
      paragraphs: [
        {
          id: 'phys-p3-3',
          en: 'Fluids comprise liquids and gases that flow and adapt to their container geometry. Fluid density is mass per unit volume: ρ = m / V (kg/m³). Specific gravity is relative density compared to pure water at 4°C: SG = ρ / ρ_water (where ρ_water = 1000 kg/m³). Fluid pressure is perpendicular force per unit surface area: P = F / A. In a static fluid of uniform density ρ, pressure increases linearly with depth h below the surface: P = P₀ + ρ g h, where P₀ is atmospheric pressure at the surface (1 atm = 1.013 × 10⁵ Pa).',
          am: 'ፈሳሾችና ጋዞች (Fluids) የሚፈሱና የያዛቸውን እቃ ቅርጽ የሚይዙ ናቸው። እፍጋት (Density) የክብደት ለይዘት ውድር ነው፡ ρ = m / V (kg/m³)። አንጻራዊ እፍጋት (Specific Gravity) ከውሃ እፍጋት ጋር ያለው ንፅፅር ነው፡ SG = ρ / ρ_water (የውሃ እፍጋት = 1000 kg/m³)። የፈሳሽ ግፊት በአንድነት ስፋት ላይ የሚያርፍ ቀጤ-ነክ ጉልበት ነው፡ P = F / A። በማይንቀሳቀስ ፈሳሽ ውስጥ ግፊት በጥልቀት (h) ልክ ይጨምራል፡ P = P₀ + ρ g h (P₀ የአየር ግፊት ሲሆን 1 atm = 1.013 × 10⁵ Pa ነው)።',
          subheading: {
            en: 'Density and Hydrostatic Pressure Variation',
            am: 'እፍጋት እና የሃይድሮስታቲክ ግፊት መጨመር'
          },
          highlightTerms: [
            { en: 'Density', am: 'እፍጋት (Density)' },
            { en: 'Hydrostatic Pressure', am: 'የሃይድሮስታቲክ ግፊት' },
            { en: 'Atmospheric Pressure', am: 'የከባቢ አየር ግፊት' }
          ]
        },
        {
          id: 'phys-p3-4',
          en: 'A pressure measuring gauge reads Gauge Pressure, which represents the difference between absolute total pressure and atmospheric pressure: P_gauge = P_abs - P_atm. Pascal’s Principle states that a change in pressure applied to an enclosed incompressible fluid is transmitted undiminished to every portion of the fluid and container walls. In hydraulic lifts: P₁ = P₂ ⇒ F₁ / A₁ = F₂ / A₂, yielding output force amplification: F₂ = F₁ (A₂ / A₁).',
          am: 'የመለኪያ መሳሪያ የሚያነበው የጌጅ ግፊት (Gauge Pressure) ሲሆን ይህም ከአየር ግፊት በላይ ያለውን ትርፍ ግፊት ያሳያል፡ P_gauge = P_abs - P_atm። የፓስካል መርህ (Pascal’s Principle) በተዘጋ ፈሳሽ ላይ የሚደረግ ማንኛውም የግፊት ለውጥ ሳይቀንስ በሙሉ ፈሳሹና በዕቃው ግድግዳ ላይ በእኩል ይተላለፋል ይላል። በሃይድሮሊክ ማንሻዎች ውስጥ፡ F₁ / A₁ = F₂ / A₂ ስለሚሆን F₂ = F₁ (A₂ / A₁) በመሆን ጉልበትን እጅግ አባዝቶ ከባድ መኪናዎችን ለማንሳት ያስችላል።',
          subheading: {
            en: 'Gauge vs Absolute Pressure & Pascal’s Principle',
            am: 'የጌጅ ግፊት እና የፓስካል መርህ'
          },
          highlightTerms: [
            { en: 'Gauge Pressure', am: 'የጌጅ ግፊት' },
            { en: 'Pascal’s Principle', am: 'የፓስካል መርህ' },
            { en: 'Hydraulic Lift', am: 'የሃይድሮሊክ ማንሻ' }
          ]
        }
      ]
    },
    {
      id: 'phys-3-3',
      number: '3.3',
      title: {
        en: '3.3 Buoyant Force, Archimedes’ Principle and Floatation',
        am: '፫.፫ ተንሳፋፊ ጉልበት፣ የአርኪሜድስ መርህ እና መንሳፈፍ'
      },
      paragraphs: [
        {
          id: 'phys-p3-5',
          en: 'Any object submerged wholly or partially in a fluid experiences a net upward buoyant force F_B arising because fluid pressure increases with depth (bottom pressure exceeds top pressure). Archimedes’ Principle states: the magnitude of buoyant force equals the weight of the fluid displaced by the object: F_B = m_fluid,disp · g = ρ_fluid · V_sub · g. If the average density of the body is less than fluid density (ρ_body < ρ_fluid), the buoyant force exceeds weight, causing the body to accelerate upward and float with submerged fraction V_sub / V_total = ρ_body / ρ_fluid.',
          am: 'ማንኛውም በፈሳሽ ውስጥ በከፊል ወይም ሙሉ በሙሉ የገባ እቃ ወደ ላይ የሚገፋ ተንሳፋፊ ጉልበት (Buoyant Force - F_B) ያጋጥመዋል፤ ምክንያቱም በፈሳሹ ስር ያለው ግፊት ከላይ ካለው ግፊት ስለሚበልጥ ነው። የአርኪሜድስ መርህ (Archimedes’ Principle) እንዲህ ይላል፡ ተንሳፋፊው ጉልበት እቃው ካፈሰሰው የፈሳሽ ክብደት ጋር እኩል ነው፡ F_B = ρ_fluid · V_sub · g። የአካሉ አማካይ እፍጋት ከፈሳሹ ካነሰ እቃው ይንሳፈፋል፤ በፈሳሽ ውስጥ የገባው ይዘት ውድርም V_sub / V_total = ρ_body / ρ_fluid ይሆናል።',
          subheading: {
            en: 'Archimedes’ Principle and Floatation Equilibrium',
            am: 'የአርኪሜድስ መርህ እና የመንሳፈፍ ሚዛን'
          },
          highlightTerms: [
            { en: 'Buoyant Force', am: 'ተንሳፋፊ ጉልበት' },
            { en: 'Archimedes’ Principle', am: 'የአርኪሜድስ መርህ' },
            { en: 'Floatation', am: 'መንሳፈፍ' }
          ]
        }
      ]
    },
    {
      id: 'phys-3-4',
      number: '3.4',
      title: {
        en: '3.4 Fluid Dynamics: Continuity Equation and Bernoulli’s Equation',
        am: '፫.፬ የፈሳሽ ዳይናሚክስ፡ የቀጣይነት ቀመር እና የበርኑሊ ቀመር'
      },
      paragraphs: [
        {
          id: 'phys-p3-6',
          en: 'Ideal fluid flow is modeled assuming: (1) Non-viscous (zero internal friction); (2) Steady/laminar flow (constant velocity at any given point over time); (3) Incompressible (uniform constant density ρ); (4) Irrotational (no angular swirl). By conservation of mass, the mass flow rate through a pipe is constant: Equation of Continuity: A₁ v₁ = A₂ v₂ = Volume flow rate Q (m³/s). When the cross-sectional area narrows, fluid flow velocity increases proportionally.',
          am: 'ተስማሚ ፈሳሽ ፍሰት (Ideal fluid flow) አራት ባህሪያት አሉት፡ (1) ቪስኮሲቲ የሌለው (የውስጥ ግጭት አልባ)፤ (2) ቋሚ ፍሰት (በማንኛውም ነጥብ ላይ ፍጥነቱ በጊዜ የማይለወጥ)፤ (3) የማይኮማተር (እፍጋቱ ቋሚ የሆነ)፤ (4) የማያዙረገርግ (Irrotational)። የቁስ ህልውና ህግን መሰረት በማድረግ በቀጣይነት ቀመር (Equation of Continuity) የፈሳሽ ፍሰት መጠን ቋሚ ነው፡ A₁ v₁ = A₂ v₂ = Q (m³/s)። የቱቦው ስፋት ሲጠብ ፈሳሹ በፍጥነት ይጓዛል።',
          subheading: {
            en: 'Ideal Fluid and Equation of Continuity',
            am: 'ተስማሚ ፈሳሽ እና የቀጣይነት ቀመር'
          },
          highlightTerms: [
            { en: 'Continuity Equation', am: 'የቀጣይነት ቀመር' },
            { en: 'Flow Rate', am: 'የፍሰት መጠን' }
          ]
        },
        {
          id: 'phys-p3-7',
          en: 'Bernoulli’s Equation expresses the conservation of mechanical energy for steady, non-viscous, incompressible fluid flow: P + 1/2 ρ v² + ρ g y = constant throughout a streamline. Here, P represents static pressure, 1/2 ρ v² is dynamic kinetic energy density, and ρ g y is gravitational potential energy density. A major consequence is the Bernoulli Effect: where fluid speed v is high, internal fluid pressure P decreases. This principle explains the dynamic aerodynamic lift of aircraft wings (air moves faster over curved upper camber, creating lower pressure above than below), Venturi flowmeters, and perfume atomizers.',
          am: 'የበርኑሊ ቀመር (Bernoulli’s Equation) ለሚፈስ ፈሳሽ የሜካኒካል ኃይል ህልውናን ያረጋግጣል፡ P + 1/2 ρ v² + ρ g y = ቋሚ። P ስታቲክ ግፊት ሲሆን፣ 1/2 ρ v² የፍጥነት ኃይል እፍጋት፣ እና ρ g y የስበት ኃይል እፍጋት ነው። የዚህ ዋና ውጤት የበርኑሊ ውጤት (Bernoulli Effect) ነው፡ የፈሳሹ ፍጥነት (v) በሚጨምርበት ቦታ ግፊቱ (P) ይቀንሳል። ይህ መርህ የአውሮፕላን ክንፎች ወደ ላይ የሚነሱበትን የአየር ግፊት ልዩነት (Aerodynamic lift)፣ የቬንቹሪ ቱቦዎችን እና ሽቶ መርጫዎችን አሰራር ያብራራል።',
          subheading: {
            en: 'Bernoulli’s Equation and Aerodynamic Applications',
            am: 'የበርኑሊ ቀመር እና የኤሮዳይናሚክስ ጥቅሞች'
          },
          highlightTerms: [
            { en: 'Bernoulli’s Equation', am: 'የበርኑሊ ቀመር' },
            { en: 'Lift', am: 'የማንሳት ኃይል (Lift)' },
            { en: 'Venturi Effect', am: 'የቬንቹሪ ውጤት' }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Young’s Modulus',
      termAm: 'የያንግ ሞጁለስ',
      defEn: 'Ratio of tensile/compressive stress to longitudinal strain within the elastic limit: Y = (F/A) / (ΔL/L₀).',
      defAm: 'በመለጠጥ ወሰን ውስጥ የውጥረት ለስብራት ውድር ሆኖ የአንድን ቁስ ለመሳብ ያለውን ተቃውሞ ይለካል።'
    },
    {
      termEn: 'Pascal’s Principle',
      termAm: 'የፓስካል መርህ',
      defEn: 'Pressure exerted anywhere in a confined incompressible fluid is transmitted equally in all directions throughout the fluid.',
      defAm: 'በተዘጋ ፈሳሽ ላይ የሚደረግ ማንኛውም የግፊት ለውጥ በሁሉም አቅጣጫ ሳይቀንስ እኩል ይተላለፋል።'
    },
    {
      termEn: 'Archimedes’ Principle',
      termAm: 'የአርኪሜድስ መርህ',
      defEn: 'Any object submerged in a fluid is buoyed upward by a force equal to the weight of the fluid it displaces.',
      defAm: 'በፈሳሽ ውስጥ የገባ ማንኛውም እቃ ባፈሰሰው የፈሳሽ ክብደት ልክ ወደ ላይ የሚገፋ ተንሳፋፊ ጉልበት ያጋጥመዋል።'
    },
    {
      termEn: 'Bernoulli’s Equation',
      termAm: 'የበርኑሊ ቀመር',
      defEn: 'Energy conservation relationship in fluid flow stating P + 1/2 ρ v² + ρ g y = constant.',
      defAm: 'በፈሳሽ ፍሰት ውስጥ የኃይል ህልውናን የሚገልጽ ቀመር (ፍጥነት ሲጨምር ግፊት ይቀንሳል)።'
    }
  ],
  summaries: [
    {
      id: 'sum-3-1',
      title: {
        en: 'Elastic Deformations and Elastic Moduli',
        am: 'የመለጠጥ ለውጦች እና የሞጁለስ ቀመሮች'
      },
      bullets: [
        {
          en: 'Stress = F/A; Strain = ΔL/L₀; Young’s modulus Y = stress / strain governs tensile elongation.',
          am: 'ውጥረት በስፋት የተካፈለ ጉልበት ሲሆን የያንግ ሞጁለስ ለመሳብ ያለውን ተቃውሞ ይለካል።'
        },
        {
          en: 'Shear modulus S handles planar distortion; Bulk modulus B handles uniform volume compression.',
          am: 'የሺር ሞጁለስ ለጎንዮሽ ለውጥ፣ የጅምላ ሞጁለስ ደግሞ ለይዘት መኮማተር ተቃውሞን ያሳያሉ።'
        }
      ]
    },
    {
      id: 'sum-3-2',
      title: {
        en: 'Static Fluids, Pressure and Buoyancy',
        am: 'የማይንቀሳቀሱ ፈሳሾች፣ ግፊት እና ተንሳፋፊነት'
      },
      bullets: [
        {
          en: 'Hydrostatic pressure at depth h: P = P₀ + ρ g h; Gauge pressure = P_abs - P_atm.',
          am: 'በፈሳሽ ጥልቀት ውስጥ ግፊት P = P₀ + ρ g h ሲሆን የጌጅ ግፊት ከአየር ግፊት በላይ ያለውን ይለካል።'
        },
        {
          en: 'Pascal’s principle enables force amplification in hydraulic lifts: F₂ = F₁ (A₂/A₁).',
          am: 'የፓስካል መርህ በሃይድሮሊክ ማንሻዎች ውስጥ ጉልበትን እጅግ አባዝቶ ለመጠቀም ያስችላል።'
        },
        {
          en: 'Archimedes’ principle: Buoyant force F_B = ρ_fluid V_sub g equals displaced fluid weight.',
          am: 'ተንሳፋፊ ጉልበት እቃው ካፈሰሰው ፈሳሽ ክብደት ጋር እኩል ነው።'
        }
      ]
    },
    {
      id: 'sum-3-3',
      title: {
        en: 'Moving Fluids and Aerodynamic Lift',
        am: 'የሚፈሱ ፈሳሾች እና የአየር ማንሳት ኃይል'
      },
      bullets: [
        {
          en: 'Equation of continuity A₁ v₁ = A₂ v₂: fluid velocity is inversely related to pipe cross-section.',
          am: 'የቀጣይነት ቀመር፡ የቱቦው ስፋት ሲጠብ የፈሳሹ ፍጥነት ይጨምራል።'
        },
        {
          en: 'Bernoulli: P + 1/2 ρ v² + ρ g y = const; High velocity produces reduced static pressure, creating aerodynamic lift.',
          am: 'የበርኑሊ ቀመር፡ ፍጥነት ሲጨምር ግፊት ይቀንሳል፤ ይህም የአውሮፕላን ክንፍ ወደ ላይ እንዲነሳ ያደርጋል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-3-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'How does Bernoulli’s principle explain aerodynamic lift on an aircraft wing?',
        am: 'የበርኑሊ መርህ የአውሮፕላን ክንፍ ወደ ላይ የሚነሳበትን (Lift) አሰራር እንዴት ያብራራል?'
      },
      answer: {
        en: 'An aircraft wing is shaped with a curved upper surface and flatter bottom (an airfoil). As the wing moves forward, incoming air streams must traverse a longer path over the top curve, forcing top streamlines to move at higher velocity than air beneath. According to Bernoulli’s equation, where fluid speed is higher, static pressure is lower. The resulting pressure differential (higher pressure underneath, lower pressure above) produces a net upward aerodynamic lift force.',
        am: 'የአውሮፕላን ክንፍ የላይኛው ገጽ ሞላላ ሲሆን የታችኛው ደግሞ ቀጥ ያለ ነው። አውሮፕላኑ ሲበር በላይኛው ገጽ የሚያልፈው አየር ረጅም መንገድ ለመሸፈን በከፍተኛ ፍጥነት ይጓዛል። በበርኑሊ ቀመር መሰረት የአየር ፍጥነት ሲጨምር ግፊቱ ስለሚቀንስ፣ ከክንፉ ስር ያለው ከፍተኛ ግፊት ከላይ ካለው ዝቅተኛ ግፊት ጋር ተዳምሮ ክንፉን ወደ ላይ የሚገፋ የማንሳት ኃይል (Lift) ይፈጥራል።'
      },
      explanation: {
        en: 'Pressure reduction accompanies fluid acceleration over cambered surfaces, yielding positive upward lift.',
        am: 'ሞላላ በሆነ ገጽ ላይ የአየር ፍጥነት ሲጨምር ግፊት ይቀንሳል፤ ይህም ወደ ላይ የሚገፋ የማንሳት ኃይል ያመነጫል።'
      }
    },
    {
      id: 'qna-3-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'What is the absolute hydrostatic pressure experienced by a diver at a depth of 20 m in fresh water (ρ = 1000 kg/m³, P_atm = 1.013 × 10⁵ Pa)?',
        am: 'አንድ ዋናተኛ በ 20 ሜትር ጥልቀት ንጹህ ውሃ ውስጥ (ρ = 1000 ኪ.ግ/ሜ³) የሚገጥመው ፍፁም ሃይድሮስታቲክ ግፊት ስንት ነው?'
      },
      answer: {
        en: 'Using P = P_atm + ρ g h: P = 1.013 × 10⁵ Pa + (1000 kg/m³)(9.8 m/s²)(20 m) = 101,300 Pa + 196,000 Pa = 297,300 Pa ≈ 2.97 × 10⁵ Pa (or ~2.93 atm).',
        am: 'P = P_atm + ρ g h ቀመርን በመጠቀም፡ P = 101,300 + (1000)(9.8)(20) = 101,300 + 196,000 = 297,300 ፓስካል (ወይም 2.93 atm) ይሆናል።'
      },
      explanation: {
        en: 'Total absolute pressure sums surface atmospheric pressure and hydrostatic liquid column weight.',
        am: 'ፍፁም ግፊት ከላይ ያለውን የከባቢ አየር ግፊት እና በፈሳሹ ጥልቀት የተፈጠረውን ክብደት አንድ ላይ ይደምራል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-phys-3-1',
      number: 1,
      question: {
        en: 'In a hydraulic lift, if the output piston has 10 times the area of the input piston, what output force results from an input force of 200 N?',
        am: 'በአንድ የሃይድሮሊክ ማንሻ ላይ የውጤት ፒስተኑ ስፋት ከመነሻው 10 እጥፍ ቢሆን፣ 200 ኒውተን ግፊት ሲደረግ የሚገኘው የውጤት ጉልበት ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: '20 N', am: '20 ኒውተን' } },
        { id: 'b', text: { en: '200 N', am: '200 ኒውተን' } },
        { id: 'c', text: { en: '2,000 N', am: '2,000 ኒውተን' } },
        { id: 'd', text: { en: '20,000 N', am: '20,000 ኒውተን' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'By Pascal’s principle: F₂ = F₁ × (A₂ / A₁) = 200 N × 10 = 2000 N.',
        am: 'በፓስካል መርህ መሰረት፡ F₂ = F₁ × (A₂ / A₁) = 200 × 10 = 2000 ኒውተን ይሆናል።'
      }
    },
    {
      id: 'quiz-phys-3-2',
      number: 2,
      question: {
        en: 'Water flows through a pipe of diameter 4 cm at 2 m/s. If the pipe constricts to 2 cm diameter, what is the new velocity?',
        am: 'ውሃ ዲያሜትሩ 4 ሳ.ሜ በሆነ ቱቦ ውስጥ በ 2 ሜ/ሰ ሲፈስ፣ ቱቦው ወደ 2 ሳ.ሜ ቢጠብ አዲሱ ፍጥነት ስንት ይሆናል?'
      },
      options: [
        { id: 'a', text: { en: '1 m/s', am: '1 ሜ/ሰ' } },
        { id: 'b', text: { en: '4 m/s', am: '4 ሜ/ሰ' } },
        { id: 'c', text: { en: '8 m/s', am: '8 ሜ/ሰ' } },
        { id: 'd', text: { en: '16 m/s', am: '16 ሜ/ሰ' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'By the continuity equation: A₁ v₁ = A₂ v₂. Since area is proportional to the square of diameter (A ∝ d²), halving diameter reduces area to 1/4. Thus velocity increases fourfold: v₂ = 2 m/s × (4/2)² = 2 × 4 = 8 m/s.',
        am: 'በቀጣይነት ቀመር A₁ v₁ = A₂ v₂ መሰረት ስፋት ከዲያሜትር ስኩዌር ጋር ስለሚመጣጠን ዲያሜትሩ በግማሽ ሲቀንስ ስፋቱ ወደ 1/4 ይወርዳል። ስለዚህ ፍጥነቱ በአራት እጥፍ ይጨምራል፡ 2 × 4 = 8 ሜ/ሰ።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-phys-3-1',
      chapter: 3,
      termEn: 'Buoyancy',
      termAm: 'ተንሳፋፊ ጉልበት',
      defEn: 'Net upward force exerted by a fluid on an object placed in it, equal to the weight of displaced fluid.',
      defAm: 'በፈሳሽ ውስጥ በገባ እቃ ላይ ወደ ላይ የሚገፋ የተጣራ ጉልበት ሆኖ እቃው ካፈሰሰው ፈሳሽ ክብደት ጋር እኩል ነው።'
    },
    {
      id: 'fc-phys-3-2',
      chapter: 3,
      termEn: 'Bernoulli Effect',
      termAm: 'የበርኑሊ ውጤት',
      defEn: 'Reduction in fluid static pressure in regions where fluid flow speed increases.',
      defAm: 'የፈሳሽ ፍጥነት በሚጨምርበት ጊዜ የሚፈጠረው የስታቲክ ግፊት መቀነስ።'
    }
  ]
};
