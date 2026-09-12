import { Chapter } from '../../types';

export const physicsChapter4: Chapter = {
  id: 1104,
  number: 4,
  title: {
    en: 'Chapter 4: Heat and Thermodynamics',
    am: 'ምዕራፍ ፬፡ ሙቀት እና ቴርሞዳይናሚክስ'
  },
  universityAuthor: 'National Physics Curriculum Committee (MoSHE 2019)',
  overview: {
    en: 'Examines temperature, the Zeroth Law, temperature scales, thermal expansion (linear, areal, volumetric), specific heat, phase transitions and latent heat, mechanisms of heat transfer (conduction, convection, radiation), and the First Law of Thermodynamics across fundamental thermodynamic processes.',
    am: 'የሙቀት መጠን፣ ዜሮኛ የቴርሞዳይናሚክስ ህግ፣ የሙቀት ስኬሎች፣ የሙቀት መስፋፋት (መስመራዊ፣ ስፋትና ይዘት)፣ የተወሰነ ሙቀት (Specific heat)፣ የቁስ ሁኔታ ለውጥ እና ድብቅ ሙቀት (Latent heat)፣ የሙቀት መተላለፊያ መንገዶች (ኮንዳክሽን፣ ኮንቬክሽን፣ ራዲየሽን) እና አንደኛ የቴርሞዳይናሚክስ ህግን የሚያጠና ምዕራፍ።'
  },
  learningOutcomes: [
    {
      en: 'State the Zeroth Law of Thermodynamics and convert among Celsius, Fahrenheit, and Kelvin scales',
      am: 'ዜሮኛውን የቴርሞዳይናሚክስ ህግ መግለፅ እና በሴልሺየስ፣ ፋራንሃይትና ኬልቪን ስኬሎች መካከል ለውጦችን ማስላት'
    },
    {
      en: 'Calculate thermal expansion in solids and liquids using linear, areal, and volumetric coefficients',
      am: 'በቁሶች ላይ የሚፈጠረውን የመስመር፣ የስፋትና የይዘት የሙቀት መስፋፋት በቅንጅት ቀመሮች ማስላት'
    },
    {
      en: 'Determine heat exchange and final equilibrium temperature using calorimetry equations and latent heats',
      am: 'የካሎሪሜትሪ ቀመሮችንና ድብቅ ሙቀትን (Latent heat) በመጠቀም የሙቀት ልውውጥንና የመጨረሻ ሚዛን ሙቀትን ማስላት'
    },
    {
      en: 'Differentiate between conduction, convection, and radiation mechanisms of thermal energy transfer',
      am: 'በኮንዳክሽን፣ በኮንቬክሽን እና በራዲየሽን የሙቀት ማስተላለፊያ መንገዶች መካከል ያለውን ልዩነት መተንተን'
    },
    {
      en: 'Apply the First Law of Thermodynamics (ΔU = Q - W) to isobaric, isochoric, isothermal, and adiabatic processes',
      am: 'አንደኛውን የቴርሞዳይናሚክስ ህግ (ΔU = Q - W) አይሶባሪክ፣ አይሶኮሪክ፣ አይሶተርማል እና አዲያባቲክ ሂደቶች ላይ መተግበር'
    }
  ],
  sections: [
    {
      id: 'phys-4-1',
      number: '4.1',
      title: {
        en: '4.1 Temperature, Thermal Equilibrium and the Zeroth Law',
        am: '፬.፩ የሙቀት መጠን፣ የሙቀት ሚዛን እና ዜሮኛው ህግ'
      },
      paragraphs: [
        {
          id: 'phys-p4-1',
          en: 'Thermodynamics is the branch of physics studying heat, work, temperature, and their relations to energy and radiation. Temperature is a scalar measure of the average microscopic translational kinetic energy of atoms or molecules within a substance. Two bodies are in Thermal Equilibrium when in thermal contact with no net transfer of heat energy between them. The Zeroth Law of Thermodynamics states: if two systems A and B are each independently in thermal equilibrium with a third system C, then system A and B are in thermal equilibrium with each other. This establishes temperature as a universally valid state variable.',
          am: 'ቴርሞዳይናሚክስ የሙቀትን፣ የስራን፣ የሙቀት መጠንንና ከኃይል ጋር ያላቸውን ቁርኝት የሚያጠና የፊዚክስ ዘርፍ ነው። የሙቀት መጠን (Temperature) በአንድ ቁስ ውስጥ ያሉ አተሞች ወይም ሞለኪውሎች ያላቸው አማካይ የኪነቲክ ኃይል መለኪያ ነው። ሁለት አካላት እርስ በእርስ ሙቀት ሳይለዋወጡ ሲቀሩ በሙቀት ሚዛን (Thermal Equilibrium) ውስጥ ናቸው ይባላል። ዜሮኛው የቴርሞዳይናሚክስ ህግ እንዲህ ይላል፡ ሁለት የተለያዩ አካላት A እና B በተናጠል ከሦስተኛ አካል C ጋር በሙቀት ሚዛን ውስጥ ከሆኑ፣ A እና B እርስ በእርሳቸውም በሙቀት ሚዛን ውስጥ ናቸው።',
          subheading: {
            en: 'Thermal Equilibrium and the Zeroth Law',
            am: 'የሙቀት ሚዛን እና ዜሮኛው ህግ'
          },
          highlightTerms: [
            { en: 'Thermodynamics', am: 'ቴርሞዳይናሚክስ' },
            { en: 'Thermal Equilibrium', am: 'የሙቀት ሚዛን' },
            { en: 'Zeroth Law', am: 'ዜሮኛው ህግ' }
          ]
        },
        {
          id: 'phys-p4-2',
          en: 'Three major temperature scales are in common use: (1) Celsius scale (°C), with freezing point of water at 0°C and boiling point at 100°C; (2) Fahrenheit scale (°F), where freezing is 32°F and boiling is 212°F; (3) Kelvin thermodynamic absolute scale (K), defined with absolute zero at 0 K (-273.15°C) where thermal motion ceases. Key conversion equations: T_F = 9/5 T_C + 32; T_C = 5/9 (T_F - 32); T_K = T_C + 273.15.',
          am: 'ሦስት ዋና ዋና የሙቀት መለኪያ ስኬሎች አሉ፡ (1) የሴልሺየስ ስኬል (°C) - ውሃ በ 0°C በረዶ ሆኖ በ 100°C ይፈላል፤ (2) የፋራንሃይት ስኬል (°F) - ውሃ በ 32°F በረዶ ሆኖ በ 212°F ይፈላል፤ (3) የኬልቪን ፍፁም ስኬል (K) - ፍፁም ዜሮ (0 K ወይም -273.15°C) ማንኛውም የሞለኪውሎች እንቅስቃሴ የሚያቆምበት ነጥብ ነው። የለውጥ ቀመሮች፡ T_F = 9/5 T_C + 32፤ T_C = 5/9 (T_F - 32)፤ T_K = T_C + 273.15።',
          subheading: {
            en: 'Temperature Scale Conversions',
            am: 'የሙቀት መለኪያ ስኬሎች ለውጥ'
          },
          highlightTerms: [
            { en: 'Absolute Zero', am: 'ፍፁም ዜሮ (Absolute Zero)' },
            { en: 'Kelvin Scale', am: 'የኬልቪን ስኬል' }
          ]
        }
      ]
    },
    {
      id: 'phys-4-2',
      number: '4.2',
      title: {
        en: '4.2 Thermal Expansion of Solids and Liquids',
        am: '፬.፪ የቁሶችና ፈሳሾች የሙቀት መስፋፋት'
      },
      paragraphs: [
        {
          id: 'phys-p4-3',
          en: 'As temperature increases, atoms vibrate with greater amplitude about their equilibrium lattice points, causing overall macroscopic dimensions of solids and liquids to expand. Linear Thermal Expansion for a solid rod of initial length L₀ under temperature change ΔT is: ΔL = α L₀ ΔT, where α is the coefficient of linear expansion (1/°C or 1/K). Areal (superficial) expansion is ΔA = β A₀ ΔT, where β ≈ 2α. Volumetric expansion is ΔV = γ V₀ ΔT, where γ ≈ 3α for isotropic solids. Bimetallic strips (two metals with different α bonded together) bend upon heating and are used in thermostats.',
          am: 'የሙቀት መጠን ሲጨምር አተሞች በኃይል ስለሚንቀጠቀጡ የቁሶችና ፈሳሾች መጠን ይሰፋል። የመስመር ሙቀት መስፋፋት (Linear Expansion)፡ ΔL = α L₀ ΔT (α የመስመር መስፋፋት ውድር ነው)። የስፋት መስፋፋት (Areal Expansion)፡ ΔA = β A₀ ΔT (β ≈ 2α)። የይዘት መስፋፋት (Volume Expansion)፡ ΔV = γ V₀ ΔT (γ ≈ 3α) ነው። ሁለት የተለያዩ α ያላቸው ብረቶች ሲጣመሩ (Bimetallic strip) ሲሞቁ ወደ አንድ ወገን ስለሚታጠፉ በቴርሞስታት አውቶማቲክ ማብሪያ/ማጥፊያነት ያገለግላሉ።',
          subheading: {
            en: 'Linear, Areal and Volume Expansion',
            am: 'የመስመር፣ የስፋትና የይዘት መስፋፋት'
          },
          highlightTerms: [
            { en: 'Thermal Expansion', am: 'የሙቀት መስፋፋት' },
            { en: 'Bimetallic Strip', am: 'የባይሜታሊክ ቅንጅት' }
          ]
        }
      ]
    },
    {
      id: 'phys-4-3',
      number: '4.3',
      title: {
        en: '4.3 Heat Capacity, Latent Heat and Phase Changes',
        am: '፬.፫ የሙቀት አቅም፣ ድብቅ ሙቀት እና የቁስ ሁኔታ ለውጦች'
      },
      paragraphs: [
        {
          id: 'phys-p4-4',
          en: 'Heat (Q) is thermal energy in transit between systems solely due to a temperature gradient. Specific Heat Capacity (c) is the heat energy required to raise the temperature of 1 kg of a substance by 1°C: Q = m c ΔT. Water has an unusually high specific heat (c_water = 4186 J/kg·°C), stabilizing coastal climates. During phase transitions (melting or boiling), temperature remains strictly constant despite continuous heat input. The heat required for phase change is Latent Heat: Q = ± m L, where L_f is latent heat of fusion (solid-liquid, 3.33 × 10⁵ J/kg for ice) and L_v is latent heat of vaporization (liquid-gas, 2.26 × 10⁶ J/kg for steam).',
          am: 'ሙቀት (Q) በሙቀት መጠን ልዩነት ምክንያት ከአንዱ አካል ወደ ሌላው የሚተላለፍ የኃይል አይነት ነው። የተወሰነ ሙቀት (Specific Heat - c) የአንድ ኪሎግራም ቁስ ሙቀት በ 1°C ከፍ ለማድረግ የሚያስፈልግ የሙቀት መጠን ነው፡ Q = m c ΔT። ውሃ እጅግ ከፍተኛ የተወሰነ ሙቀት አለው (4186 J/kg·°C)። በቁስ ሁኔታ ለውጥ (መቅለጥ ወይም መፍላት) ወቅት ሙቀት ቢጨመርም የሙቀት መጠኑ ፈጽሞ አይለወጥም፤ ለለውጡ የሚውለው ሙቀት ድብቅ ሙቀት (Latent Heat) ይባላል፡ Q = ± m L (የበረዶ መቅለጥ L_f = 3.33 × 10⁵ J/kg፣ የውሃ መትነን L_v = 2.26 × 10⁶ J/kg)።',
          subheading: {
            en: 'Calorimetry and Latent Heats of Fusion/Vaporization',
            am: 'ካሎሪሜትሪ እና የመቅለጥ/የመትነን ድብቅ ሙቀት'
          },
          highlightTerms: [
            { en: 'Specific Heat', am: 'የተወሰነ ሙቀት' },
            { en: 'Latent Heat', am: 'ድብቅ ሙቀት' }
          ]
        }
      ]
    },
    {
      id: 'phys-4-4',
      number: '4.4',
      title: {
        en: '4.4 Heat Transfer Mechanisms: Conduction, Convection, Radiation',
        am: '፬.፬ የሙቀት መተላለፊያ መንገዶች፡ ኮንዳክሽን፣ ኮንቬክሽን እና ራዲየሽን'
      },
      paragraphs: [
        {
          id: 'phys-p4-5',
          en: 'Heat transfers through three distinct physical mechanisms: (1) Conduction: microscopic energy transfer between adjacent vibrating atoms without bulk motion of matter, governed by Fourier’s Law: dQ/dt = k A (T_H - T_C) / L, where k is thermal conductivity (metals are excellent conductors due to free electrons); (2) Convection: heat transfer via bulk macroscopic fluid flow driven by density buoyancy differences (e.g. atmospheric wind currents, ocean circulation); (3) Radiation: heat emission in the form of electromagnetic infrared waves traveling through vacuum at light speed, governed by the Stefan-Boltzmann Law: P = e σ A T⁴ (where σ = 5.67 × 10⁻⁸ W/m²·K⁴).',
          am: 'ሙቀት በሦስት ዋና ዋና መንገዶች ይተላለፋል፡ (1) ኮንዳክሽን (Conduction)፡ ቁሱ ሳይንቀሳቀስ በአተሞች ንዝረት የሚተላለፍ ሲሆን በብረቶች ውስጥ በነፃ ኤሌክትሮኖች አማካኝነት በፍጥነት ይከናወናል (dQ/dt = k A ΔT / L)፤ (2) ኮንቬክሽን (Convection)፡ በፈሳሾችና ጋዞች የእፍጋት ልዩነት ምክንያት በሚፈጠር የጅምላ ፍሰት ሙቀት መተላለፍ (ለምሳሌ የባህር ንፋስና የከባቢ አየር አዙሪት)፤ (3) ራዲየሽን (Radiation)፡ ያለ ምንም አጓጓዥ ቁስ በኤሌክትሮማግኔቲክ ሞገድ በጠፈር ውስጥ የሚጓዝ የሙቀት አይነት ነው (P = e σ A T⁴፤ ፀሐይ መሬትን የምታሞቀው በዚህ መንገድ ነው)።',
          subheading: {
            en: 'Three Modes of Thermal Transmission',
            am: 'ሦስቱ የሙቀት ማስተላለፊያ መንገዶች'
          },
          highlightTerms: [
            { en: 'Conduction', am: 'ኮንዳክሽን' },
            { en: 'Convection', am: 'ኮንቬክሽን' },
            { en: 'Radiation', am: 'ራዲየሽን' }
          ]
        }
      ]
    },
    {
      id: 'phys-4-5',
      number: '4.5',
      title: {
        en: '4.5 The First Law of Thermodynamics and Thermodynamic Processes',
        am: '፬.፭ አንደኛው የቴርሞዳይናሚክስ ህግ እና የሂደት አይነቶች'
      },
      paragraphs: [
        {
          id: 'phys-p4-6',
          en: 'The First Law of Thermodynamics states energy conservation for thermal systems: the change in internal energy (ΔU) equals net heat added (Q) minus work done by the system (W): ΔU = Q - W. Work done by expanding gas is W = ∫ P dV. Four fundamental processes exist: (1) Isobaric (constant pressure): W = P ΔV; (2) Isochoric/Isovolumetric (constant volume): dV = 0 ⇒ W = 0, so ΔU = Q; (3) Isothermal (constant temperature): for ideal gas ΔU = 0, so Q = W = nRT ln(V_f / V_i); (4) Adiabatic (no heat transfer, Q = 0): ΔU = -W, where work done equals decrease in internal energy.',
          am: 'አንደኛው የቴርሞዳይናሚክስ ህግ (First Law of Thermodynamics) የኃይል ህልውናን ያረጋግጣል፡ የውስጥ ኃይል ለውጥ (ΔU) ከተጨመረው ሙቀት (Q) ላይ የተሰራው ስራ (W) ሲቀነስ ነው፡ ΔU = Q - W። አራቱ መሰረታዊ ሂደቶች፡ (1) አይሶባሪክ (Isobaric - ቋሚ ግፊት)፡ W = P ΔV፤ (2) አይሶኮሪክ (Isochoric - ቋሚ ይዘት)፡ ስራ አይሰራም (W = 0)፣ ስለዚህ ΔU = Q፤ (3) አይሶተርማል (Isothermal - ቋሚ ሙቀት)፡ የውስጥ ኃይል ለውጥ ዜሮ ነው (ΔU = 0)፣ ስለዚህ Q = W፤ (4) አዲያባቲክ (Adiabatic - ምንም ሙቀት የማይገባበት/የማይወጣበት፣ Q = 0)፡ ΔU = -W ሲሆን የተሰራው ስራ ከውስጥ ኃይል መቀነስ ጋር እኩል ይሆናል።',
          subheading: {
            en: 'First Law Formulation and Process Thermodynamics',
            am: 'አንደኛው ህግ እና የቴርሞዳይናሚክስ ሂደቶች'
          },
          highlightTerms: [
            { en: 'First Law of Thermodynamics', am: 'አንደኛው የቴርሞዳይናሚክስ ህግ' },
            { en: 'Isobaric Process', am: 'አይሶባሪክ ሂደት' },
            { en: 'Adiabatic Process', am: 'አዲያባቲክ ሂደት' }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Zeroth Law of Thermodynamics',
      termAm: 'ዜሮኛው የቴርሞዳይናሚክስ ህግ',
      defEn: 'If system A and B are each independently in thermal equilibrium with system C, then A and B are in thermal equilibrium with each other.',
      defAm: 'ሁለት አካላት በተናጠል ከሦስተኛ አካል ጋር በሙቀት ሚዛን ላይ ከሆኑ እርስ በእርሳቸውም በሙቀት ሚዛን ላይ ናቸው።'
    },
    {
      termEn: 'Latent Heat',
      termAm: 'ድብቅ ሙቀት',
      defEn: 'Heat energy absorbed or released per unit mass during a constant-temperature phase transition: Q = mL.',
      defAm: 'አንድ ቁስ የሙቀት መጠኑ ሳይቀየር የቁስ ሁኔታውን (Phase) ሲቀይር የሚወስደው ወይም የሚለቀው ሙቀት።'
    },
    {
      termEn: 'First Law of Thermodynamics',
      termAm: 'አንደኛው የቴርሞዳይናሚክስ ህግ',
      defEn: 'The principle of conservation of energy applied to thermodynamic systems: ΔU = Q - W.',
      defAm: 'በቴርሞዳይናሚክስ ስርአት ውስጥ የኃይል ህልውናን የሚያረጋግጥ ህግ (ΔU = Q - W)።'
    }
  ],
  summaries: [
    {
      id: 'sum-4-1',
      title: {
        en: 'Temperature, Scales and Thermal Expansion',
        am: 'የሙቀት መጠን፣ ስኬሎች እና የሙቀት መስፋፋት'
      },
      bullets: [
        {
          en: 'Zeroth Law guarantees temperature measurement; Kelvin scale has absolute zero at 0 K (-273.15°C).',
          am: 'ዜሮኛው ህግ የሙቀት ልኬትን ያረጋግጣል፤ ኬልቪን ፍፁም ዜሮን በ 0 K ያስቀምጣል።'
        },
        {
          en: 'Linear expansion ΔL = α L₀ ΔT, Areal ΔA = 2α A₀ ΔT, Volume ΔV = 3α V₀ ΔT.',
          am: 'የቁሶች መስፋፋት ከመነሻ መጠናቸው እና ከሙቀት ለውጡ ጋር በቀጥታ ይመጣጠናል።'
        }
      ]
    },
    {
      id: 'sum-4-2',
      title: {
        en: 'Specific Heat and Heat Transfer',
        am: 'የተወሰነ ሙቀት እና ሙቀት ማስተላለፍ'
      },
      bullets: [
        {
          en: 'Q = mcΔT for temperature changes; Q = mL during constant-temperature phase changes.',
          am: 'የሙቀት ለውጥ በ Q = mcΔT ሲሰላ የሁኔታ ለውጥ ግን በድብቅ ሙቀት Q = mL ይሰላል።'
        },
        {
          en: 'Conduction requires direct atomic contact; Convection occurs via bulk fluid movement; Radiation travels through vacuum as EM waves.',
          am: 'ኮንዳክሽን በአተሞች ንክኪ፣ ኮንቬክሽን በፈሳሾች ፍሰት፣ ራዲየሽን ደግሞ በኤሌክትሮማግኔቲክ ሞገድ ይተላለፋል።'
        }
      ]
    },
    {
      id: 'sum-4-3',
      title: {
        en: 'First Law and Thermodynamic Cycles',
        am: 'አንደኛው ህግ እና የቴርሞዳይናሚክስ ዑደቶች'
      },
      bullets: [
        {
          en: 'First Law: ΔU = Q - W; Isochoric process has W = 0; Isothermal process has ΔU = 0; Adiabatic process has Q = 0.',
          am: 'አንደኛው ህግ፡ ΔU = Q - W፤ በአይሶኮሪክ ስራ ዜሮ ነው፤ በአይሶተርማል ΔU = 0 ሲሆን በአዲያባቲክ Q = 0 ነው።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-4-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'Why does temperature remain constant while ice melts into water despite ongoing heat supply?',
        am: 'በረዶ ወደ ውሃ በሚቀልጥበት ወቅት ሙቀት እየተጨመረም የሙቀት መጠኑ የማይጨምረው ለምንድን ነው?'
      },
      answer: {
        en: 'During a phase change, the thermal energy added does not increase the random kinetic motion (temperature) of the molecules. Instead, this energy (latent heat of fusion) is consumed entirely to break the intermolecular hydrogen bonds binding the ice crystal lattice, converting the ordered solid into a liquid state.',
        am: 'በቁስ ሁኔታ ለውጥ ወቅት የሚጨመረው ሙቀት የሞለኪውሎችን የኪነቲክ ኃይል (የሙቀት መጠን) አይጨምርም። በምትኩ ይህ ሙቀት (የመቅለጥ ድብቅ ሙቀት) በበረዶ ክሪስታል ውስጥ ያሉትን ሞለኪውላዊ ቦንዶች ሰብሮ ወደ ፈሳሽነት ለመቀየር ብቻ ይውላል።'
      },
      explanation: {
        en: 'Latent heat alters intermolecular potential energy rather than kinetic vibrational temperature.',
        am: 'ድብቅ ሙቀት የሞለኪውሎችን የኪነቲክ ንዝረት ሳይሆን በመካከላቸው ያለውን የተጠራቀመ ኃይል ብቻ ይለውጣል።'
      }
    },
    {
      id: 'qna-4-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'During an adiabatic expansion of an ideal gas, work of 450 J is done by the gas. What is the change in internal energy ΔU?',
        am: 'አንድ ጋዝ በአዲያባቲክ ሂደት ውስጥ ሲሰፋ 450 ጁል ስራ ሰርቷል። የውስጥ ኃይል ለውጡ (ΔU) ስንት ይሆናል?'
      },
      answer: {
        en: 'In an adiabatic process, no heat enters or leaves the system (Q = 0). Applying the First Law: ΔU = Q - W = 0 - 450 J = -450 J. The internal energy decreases by exactly 450 J, causing the gas to cool.',
        am: 'በአዲያባቲክ ሂደት ውስጥ ሙቀት አይገባም አይወጣም (Q = 0)። በአንደኛው ህግ መሰረት፡ ΔU = Q - W = 0 - 450 = -450 ጁል። የውስጥ ኃይሉ በ 450 ጁል ይቀንሳል፤ ይህም የጋዙ ሙቀት እንዲቀዘቅዝ ያደርጋል።'
      },
      explanation: {
        en: 'With zero heat transfer (Q = 0), work done by gas is drawn directly from internal thermal energy.',
        am: 'ምንም ሙቀት በማይገባበት ወቅት የተሰራው ስራ በቀጥታ ከውስጥ ኃይል የሚቀነስ በመሆኑ ጋዙ ይቀዘቅዛል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-phys-4-1',
      number: 1,
      question: {
        en: 'What temperature is identical in value on both the Celsius and Fahrenheit scales?',
        am: 'በሴልሺየስ እና በፋራንሃይት ስኬል ላይ እኩል እሴት ያለው የሙቀት መጠን ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: '0°', am: '0°' } },
        { id: 'b', text: { en: '-40°', am: '-40°' } },
        { id: 'c', text: { en: '100°', am: '100°' } },
        { id: 'd', text: { en: '-273°', am: '-273°' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Setting T_C = T_F = x: x = 9/5 x + 32 ⇒ -4/5 x = 32 ⇒ x = -40°. Thus, -40°C = -40°F.',
        am: 'T_C = T_F = x ብለን ስንተካ፡ x = 9/5 x + 32 ⇒ -4/5 x = 32 ⇒ x = -40° ይመጣል። ስለዚህ -40°C ከ -40°F ጋር እኩል ነው።'
      }
    },
    {
      id: 'quiz-phys-4-2',
      number: 2,
      question: {
        en: 'In which thermodynamic process is zero work done by or on a gas?',
        am: 'በየትኛው የቴርሞዳይናሚክስ ሂደት ውስጥ በጋዙ ላይ ወይም በጋዙ አማካኝነት የሚሰራው ስራ ዜሮ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Isobaric', am: 'አይሶባሪክ' } },
        { id: 'b', text: { en: 'Isochoric (isovolumetric)', am: 'አይሶኮሪክ (ቋሚ ይዘት)' } },
        { id: 'c', text: { en: 'Isothermal', am: 'አይሶተርማል' } },
        { id: 'd', text: { en: 'Adiabatic', am: 'አዲያባቲክ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Work W = ∫ P dV. In an isochoric process, volume is constant (dV = 0), so work done is strictly zero.',
        am: 'ስራ W = P dV ሲሆን በአይሶኮሪክ ሂደት ይዘቱ ቋሚ (dV = 0) ስለሆነ የሚሰራው ስራ ዜሮ ነው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-phys-4-1',
      chapter: 4,
      termEn: 'Adiabatic Process',
      termAm: 'አዲያባቲክ ሂደት',
      defEn: 'A thermodynamic process occurring with no exchange of heat between the system and its surroundings (Q = 0).',
      defAm: 'ምንም አይነት ሙቀት ወደ ስርአቱ የማይገባበት ወይም የማይወጣበት ሂደት (Q = 0)።'
    },
    {
      id: 'fc-phys-4-2',
      chapter: 4,
      termEn: 'Specific Heat Capacity',
      termAm: 'የተወሰነ ሙቀት አቅም',
      defEn: 'The quantity of heat required to raise the temperature of one kilogram of a substance by one Kelvin or Celsius.',
      defAm: 'የአንድ ኪሎግራም ቁስ የሙቀት መጠን በ 1°C ከፍ ለማድረግ የሚያስፈልግ የሙቀት መጠን።'
    }
  ]
};
