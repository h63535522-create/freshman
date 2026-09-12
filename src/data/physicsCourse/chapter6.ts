import { Chapter } from '../../types';

export const physicsChapter6: Chapter = {
  id: 1106,
  number: 6,
  title: {
    en: 'Chapter 6: Electromagnetism and Electronics',
    am: 'ምዕራፍ ፮፡ ኤሌክትሮማግኔቲዝም እና ኤሌክትሮኒክስ'
  },
  universityAuthor: 'National Physics Curriculum Committee (MoSHE 2019)',
  overview: {
    en: 'Comprehensive study of electrostatics (Coulomb’s law, electric field, potential), electric current, resistance, Ohm’s law, Kirchhoff’s circuit rules, magnetism, Faraday’s law of induction, semiconductor physics (p-n junctions), diodes, rectifiers, bipolar junction transistors (BJT), and digital logic gates.',
    am: 'የኤሌክትሮስታቲክስ መሰረቶች (የኩሎምብ ህግ፣ የኤሌክትሪክ መስክና ፖቴንሻል)፣ የኤሌክትሪክ ፍሰት፣ ተቃውሞ፣ የኦህም ህግ፣ የኪርቾፍ ህጎች፣ ማግኔቲዝም፣ የፋራዴይ ኢንዳክሽን ህግ፣ የሴሚኮንዳክተሮች ፊዚክስ (P-N ጀንክሽን)፣ ዳዮዶች፣ ሬክቲፋየሮች፣ ትራንዚስተሮች እና ዲጂታል ሎጂክ ጌቶችን የሚያካትት ምዕራፍ።'
  },
  learningOutcomes: [
    {
      en: 'Calculate electrostatic forces using Coulomb’s law and map electric fields and potentials',
      am: 'የኩሎምብን ህግ በመጠቀም የኤሌክትሮስታቲክ ጉልበትን፣ የኤሌክትሪክ መስክና ፖቴንሻልን ማስላት'
    },
    {
      en: 'Solve multi-loop DC circuits using Ohm’s law and Kirchhoff’s junction and loop rules',
      am: 'የኦህም ህግን እና የኪርቾፍ የመስቀለኛ (Junction) እና የዙረት (Loop) ህጎችን በመጠቀም የዲሲ ሰርኪዩት ችግሮችን መፍታት'
    },
    {
      en: 'Apply Faraday’s and Lenz’s laws to determine induced electromotive force (EMF)',
      am: 'የፋራዴይ እና የሌንዝ ህጎችን በመጠቀም የተፈጠረውን ኢኤምኤፍ (Induced EMF) ማስላት'
    },
    {
      en: 'Explain semiconductor doping (n-type vs p-type) and the rectification mechanism of p-n junction diodes',
      am: 'የሴሚኮንዳክተር ዶፒንግ (N-type እና P-type) እና የP-N ዳዮድ የኤሌክትሪክ ማጣራት (Rectification) አሰራርን ማብራራት'
    },
    {
      en: 'Describe transistor amplification operation and construct truth tables for basic logic gates (AND, OR, NOT, NAND, NOR)',
      am: 'የትራንዚስተር ማጉላት አሰራርን እና የመሰረታዊ ሎጂክ ጌቶች (AND, OR, NOT, NAND, NOR) የእውነት ሰንጠረዥን መገንባት'
    }
  ],
  sections: [
    {
      id: 'phys-6-1',
      number: '6.1',
      title: {
        en: '6.1 Coulomb’s Law, Electric Fields and Electric Potential',
        am: '፮.፩ የኩሎምብ ህግ፣ የኤሌክትሪክ መስክ እና ፖቴንሻል'
      },
      paragraphs: [
        {
          id: 'phys-p6-1',
          en: 'Electrostatics studies electric charges at rest. Electric charge is quantized in integer multiples of elementary charge e = 1.602 × 10⁻¹⁹ C. Coulomb’s Law states that the electrostatic force between two point charges q₁ and q₂ separated by distance r in vacuum is: F = k |q₁ q₂| / r², where k = 1 / (4πε₀) ≈ 8.988 × 10⁹ N·m²/C². Like charges repel; unlike charges attract. The Electric Field E⃗ at any point is force per unit positive test charge: E⃗ = F⃗ / q₀ = k q / r² r̂ (N/C or V/m). Electric Potential V is electric potential energy per unit charge: V = U / q = k q / r (measured in Volts, 1 V = 1 J/C).',
          am: 'ኤሌክትሮስታቲክስ የማይንቀሳቀሱ የኤሌክትሪክ ቻርጆችን ያጠናል፤ ቻርጅ ሁልጊዜ የኤሌክትሮን ቻርጅ e = 1.602 × 10⁻¹⁹ C ብዜት ነው። የኩሎምብ ህግ (Coulomb’s Law) በሁለት ቻርጆች መሃል የሚፈጠረው ጉልበት ከቻርጆቹ ብዜት ጋር በቀጥታ ከርቀታቸው ስኩዌር ጋር በተገላቢጦሽ ይመጣጠናል ይላል፡ F = k |q₁ q₂| / r² (k = 9 × 10⁹ N·m²/C²)። ተመሳሳይ ቻርጆች ይገፋፋሉ፤ የተለያዩ ቻርጆች ይሳሳባሉ። የኤሌክትሪክ መስክ (Electric Field)፡ E = F / q₀ (N/C) ሲሆን የኤሌክትሪክ ፖቴንሻል (Electric Potential) ደግሞ V = k q / r (በቮልት - V) ይሰላል።',
          subheading: {
            en: 'Coulomb’s Force, Field and Potential',
            am: 'የኩሎምብ ጉልበት፣ መስክ እና ፖቴንሻል'
          },
          highlightTerms: [
            { en: 'Coulomb’s Law', am: 'የኩሎምብ ህግ' },
            { en: 'Electric Field', am: 'የኤሌክትሪክ መስክ' },
            { en: 'Electric Potential', am: 'የኤሌክትሪክ ፖቴንሻል' }
          ]
        }
      ]
    },
    {
      id: 'phys-6-2',
      number: '6.2',
      title: {
        en: '6.2 Electric Current, Ohm’s Law, Circuits and Kirchhoff’s Rules',
        am: '፮.፪ የኤሌክትሪክ ፍሰት፣ የኦህም ህግ፣ ሰርኪዩቶች እና የኪርቾፍ ህጎች'
      },
      paragraphs: [
        {
          id: 'phys-p6-2',
          en: 'Electric current (I) is the rate of charge flow through a cross section: I = ΔQ / Δt (Amperes, 1 A = 1 C/s). Resistance (R) measures opposition to electric flow: R = ρ L / A, where ρ is material resistivity. Ohm’s Law states that for ohmic conductors at constant temperature, current is proportional to applied voltage: V = I R. Electric power dissipated is P = I V = I² R = V² / R (Watts). Resistors in series share identical current: R_eq = R₁ + R₂ + R₃. Resistors in parallel share identical voltage: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃.',
          am: 'የኤሌክትሪክ ፍሰት (I) በጊዜ ውስጥ የሚያልፍ የቻርጅ መጠን ነው፡ I = ΔQ / Δt (አምፔር)። ተቃውሞ (Resistance - R) የኤሌክትሪክ ፍሰትን የመገደብ አቅም ሲሆን፡ R = ρ L / A ይሰላል። የኦህም ህግ (Ohm’s Law) በቋሚ ሙቀት ውስጥ ፍሰት ከቮልቴጅ ጋር በቀጥታ ይመጣጠናል ይላል፡ V = I R። የሚባክን ኤሌክትሪክ ፓወር P = I V = I² R ነው። ተቃዋሚዎች በረድፍ (Series) ሲቀናጁ፡ R_eq = R₁ + R₂ + R₃ ሲሆን በትይዩ (Parallel) ሲቀናጁ ደግሞ፡ 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ ይሆናል።',
          subheading: {
            en: 'Current, Ohm’s Law and Resistor Networks',
            am: 'የኤሌክትሪክ ፍሰት፣ የኦህም ህግ እና የተቃዋሚዎች ቅንጅት'
          },
          highlightTerms: [
            { en: 'Ohm’s Law', am: 'የኦህም ህግ' },
            { en: 'Resistance', am: 'ተቃውሞ (Resistance)' },
            { en: 'Electric Power', am: 'የኤሌክትሪክ ፓወር' }
          ]
        },
        {
          id: 'phys-p6-3',
          en: 'Gustav Kirchhoff formulated two fundamental circuit conservation rules: (1) Kirchhoff’s Junction Rule (Current Law - KCL): at any circuit node, the sum of currents entering equals the sum of currents leaving (∑ I_in = ∑ I_out), derived from charge conservation; (2) Kirchhoff’s Loop Rule (Voltage Law - KVL): around any closed conducting loop, the algebraic sum of potential differences equals zero (∑ ΔV = 0), derived from energy conservation.',
          am: 'ጉስታቭ ኪርቾፍ ሁለት መሰረታዊ የሰርኪዩት ህጎችን አወጣ፡ (1) የኪርቾፍ የመስቀለኛ ህግ (Junction Rule - KCL)፡ ወደ ማንኛውም የመስቀለኛ ነጥብ የሚገባ የኤሌክትሪክ ፍሰት ድምር ከሚወጣው ጋር እኩል ነው (∑ I_in = ∑ I_out፤ ይህ የቻርጅ ህልውና ውጤት ነው)፤ (2) የኪርቾፍ የዙረት ህግ (Loop Rule - KVL)፡ በማንኛውም የተዘጋ ሰርኪዩት ዙረት ውስጥ ያለው የቮልቴጅ ለውጦች ድምር ዜሮ ነው (∑ ΔV = 0፤ ይህ የኃይል ህልውና ውጤት ነው)።',
          subheading: {
            en: 'Kirchhoff’s Junction and Loop Rules',
            am: 'የኪርቾፍ የመስቀለኛ እና የዙረት ህጎች'
          },
          highlightTerms: [
            { en: 'Kirchhoff’s Rules', am: 'የኪርቾፍ ህጎች' },
            { en: 'Junction Rule', am: 'የመስቀለኛ ህግ' },
            { en: 'Loop Rule', am: 'የዙረት ህግ' }
          ]
        }
      ]
    },
    {
      id: 'phys-6-3',
      number: '6.3',
      title: {
        en: '6.3 Magnetic Fields, Magnetic Flux and Electromagnetic Induction',
        am: '፮.፫ የማግኔት መስክ፣ ፍላክስ እና የኤሌክትሮማግኔቲክ ኢንዳክሽን'
      },
      paragraphs: [
        {
          id: 'phys-p6-4',
          en: 'Magnetic fields (B⃗) are produced by moving charges and permanent magnetic dipoles (Tesla, 1 T = 1 N/(A·m)). A charge q moving with velocity v⃗ in a magnetic field experiences the Lorentz magnetic force: F⃗_B = q (v⃗ × B⃗) = q v B sin θ (perpendicular by the right-hand rule). Magnetic Flux Φ_B through a surface is: Φ_B = B⃗ · A⃗ = B A cos θ (Webers, 1 Wb = 1 T·m²). Faraday’s Law of Induction states that the induced electromotive force (EMF) in a coil of N turns equals the negative time rate of change of magnetic flux: E = - N (ΔΦ_B / Δt). Lenz’s Law states the induced current creates a magnetic field opposing the flux change.',
          am: 'የማግኔት መስክ (B⃗) በሚንቀሳቀሱ ቻርጆች ይመረታል (በቴስላ - T ይሰላል)። በ v ፍጥነት የሚጓዝ q ቻርጅ በማግኔት መስክ ውስጥ ሲያልፍ የሚያጋጥመው የሎረንትዝ ጉልበት፡ F = q v B sin θ ነው። የማግኔቲክ ፍላክስ (Magnetic Flux)፡ Φ = B A cos θ (በዌበር - Wb) ነው። የፋራዴይ የኢንዳክሽን ህግ (Faraday’s Law) በሽቦ ውስጥ የሚፈጠረው የኤሌክትሪክ ኃይል (EMF) ከፍላክሱ የለውጥ ፍጥነት ጋር እኩል ነው ይላል፡ E = -N (ΔΦ / Δt)። የሌንዝ ህግ (Lenz’s Law) የተፈጠረው ፍሰት ለውጡን በሚቃወም አቅጣጫ እንደሚፈጠር ያረጋግጣል።',
          subheading: {
            en: 'Lorentz Force, Faraday’s Law and Lenz’s Law',
            am: 'የሎረንትዝ ጉልበት፣ የፋራዴይ ህግ እና የሌንዝ ህግ'
          },
          highlightTerms: [
            { en: 'Magnetic Flux', am: 'ማግኔቲክ ፍላክስ' },
            { en: 'Faraday’s Law', am: 'የፋራዴይ ህግ' },
            { en: 'Lenz’s Law', am: 'የሌንዝ ህግ' }
          ]
        }
      ]
    },
    {
      id: 'phys-6-4',
      number: '6.4',
      title: {
        en: '6.4 Semiconductors, Diodes, Transistors and Logic Gates',
        am: '፮.፬ ሴሚኮንዳክተሮች፣ ዳዮዶች፣ ትራንዚስተሮች እና ሎጂክ ጌቶች'
      },
      paragraphs: [
        {
          id: 'phys-p6-5',
          en: 'Based on energy band structure (valence band, conduction band, and band gap E_g), materials are conductors (overlapping bands), insulators (wide gap > 5 eV), or semiconductors (small band gap ~1.1 eV for Silicon). Pure silicon has intrinsic conductivity. Doping adds impurity atoms to create extrinsic semiconductors: (1) N-type: doped with pentavalent donors (P, As) providing excess free conduction electrons; (2) P-type: doped with trivalent acceptors (B, Ga) creating excess positive electron holes.',
          am: 'በኢነርጂ ባንድ መዋቅር መሰረት ቁሶች ይከፈላሉ፡ አስተላላፊዎች (Conductors)፣ ኤሌክትሪክ ከልካዮች (Insulators - ትልቅ ባንድ ጋፕ > 5 eV) እና ሴሚኮንዳክተሮች (Semiconductors - አነስተኛ ባንድ ጋፕ ~1.1 eV ለሲሊኮን)። ንፁህ ሲሊኮን ውስጣዊ (Intrinsic) ነው። ዶፒንግ (Doping) ባእድ አተሞችን በመጨመር ይከናወናል፡ (1) N-type፡ ባለ አምስት ቫለንስ ኤሌክትሮን ንጥረ ነገሮች (ፎስፈረስ) ሲጨመሩ ትርፍ ነፃ ኤሌክትሮኖችን ይሰጣሉ፤ (2) P-type፡ ባለ ሦስት ቫለንስ (ቦሮን) ሲጨመር አዎንታዊ ክፍተቶችን (Holes) ይፈጥራል።',
          subheading: {
            en: 'Semiconductor Band Gap and Doping Types',
            am: 'የሴሚኮንዳክተር ባንድ ጋፕ እና የዶፒንግ አይነቶች'
          },
          highlightTerms: [
            { en: 'Semiconductor', am: 'ሴሚኮንዳክተር' },
            { en: 'N-type', am: 'ኤን-ታይፕ' },
            { en: 'P-type', am: 'ፒ-ታይፕ' }
          ]
        },
        {
          id: 'phys-p6-6',
          en: 'A P-N Junction forms a diode. Mobile carriers diffuse across the boundary, creating an internal Depletion Region and barrier potential (~0.7 V for Si). In Forward Bias (+ to P, - to N), the depletion layer narrows and current flows easily; in Reverse Bias, the barrier widens, blocking current. This enables Rectification (converting alternating current AC to direct current DC). Full-wave bridge rectifiers use four diodes to convert both halves of AC waveforms.',
          am: 'P-N ጀንክሽን ዳዮድን (Diode) ይፈጥራል። ቻርጆች ሲዋሃዱ በመሃል የዲፕሊሽን ክልል (Depletion Region) እና የ 0.7 ቮልት እንቅፋት ይፈጥራሉ። በፎርዋርድ ባያስ (Forward Bias - አዎንታዊ ከ P ጋር ሲገናኝ) ኤሌክትሪክ በቀላሉ ያልፋል፤ በሪቨርስ ባያስ (Reverse Bias) ግን ኤሌክትሪክ ይዘጋል። ይህ ባህሪ ሬክቲፊኬሽን (Rectification - ተለዋዋጭ AC ፍሰትን ወደ ቀጥታ DC ፍሰት መቀየር) ያስችላል። ባለ አራት ዳዮድ ድልድይ ሬክቲፋየር ሁለቱንም የ AC ሞገዶች ወደ DC ይቀይራል።',
          subheading: {
            en: 'P-N Junction Diodes and AC-DC Rectification',
            am: 'የP-N ዳዮዶች እና የAC-DC ማጣራት'
          },
          highlightTerms: [
            { en: 'Diode', am: 'ዳዮድ' },
            { en: 'Forward Bias', am: 'ፎርዋርድ ባያስ' },
            { en: 'Rectification', am: 'ሬክቲፊኬሽን' }
          ]
        },
        {
          id: 'phys-p6-7',
          en: 'A Bipolar Junction Transistor (BJT) consists of three doped semiconductor layers: Emitter (E), Base (B), and Collector (C), in NPN or PNP configuration. In Common Emitter mode, a tiny base current I_B controls a much larger collector current I_C: I_C = β I_B (where current gain β typically ranges from 50 to 300), operating as a linear amplifier or high-speed electronic switch. In digital electronics, transistors form Logic Gates: AND (high output only if all inputs are 1), OR (high if any input is 1), NOT (inverter), NAND (universal gate), and NOR.',
          am: 'ባይፖላር ትራንዚስተር (BJT) ሦስት ንብርብሮች አሉት፡ ኢሚተር (E)፣ ቤዝ (B) እና ኮሌክተር (C) በ NPN ወይም PNP ቅርጽ። አነስተኛ የቤዝ ፍሰት (I_B) እጅግ ትልቅ የኮሌክተር ፍሰትን (I_C) ይቆጣጠራል፡ I_C = β I_B (የማጉላት ውድር β = 50 እስከ 300)፤ ይህም እንደ ድምፅ ማጉያ (Amplifier) ወይም እንደ ኤሌክትሮኒክ ስዊች ያገለግላል። በዲጂታል ኤሌክትሮኒክስ ትራንዚስተሮች የሎጂክ ጌቶች (Logic Gates) መሰረት ናቸው፡ AND፣ OR፣ NOT (አገላባጭ)፣ NAND እና NOR ናቸው።',
          subheading: {
            en: 'BJT Amplifiers and Digital Logic Gates',
            am: 'የBJT ማጉያዎች እና ዲጂታል ሎጂክ ጌቶች'
          },
          highlightTerms: [
            { en: 'Transistor (BJT)', am: 'ትራንዚስተር' },
            { en: 'Amplification', am: 'ማጉላት (Amplification)' },
            { en: 'Logic Gates', am: 'ሎጂክ ጌቶች' }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Coulomb’s Law',
      termAm: 'የኩሎምብ ህግ',
      defEn: 'Fundamental electrostatic law quantifying force between two electric charges: F = k|q₁q₂| / r².',
      defAm: 'በሁለት ቻርጆች መሃል ያለውን ኤሌክትሮስታቲክ ጉልበት የሚያሰላ ህግ (F = k|q₁q₂| / r²)።'
    },
    {
      termEn: 'Faraday’s Law of Induction',
      termAm: 'የፋራዴይ የኢንዳክሽን ህግ',
      defEn: 'Induced electromotive force (EMF) is proportional to the time rate of change of magnetic flux: E = -N (ΔΦ_B / Δt).',
      defAm: 'የተፈጠረው የኤሌክትሪክ ኃይል ከማግኔቲክ ፍላክስ የለውጥ ፍጥነት ጋር በቀጥታ ይመጣጠናል።'
    },
    {
      termEn: 'BJT Transistor',
      termAm: 'ባይፖላር ትራንዚስተር (BJT)',
      defEn: 'A three-terminal semiconductor device (Emitter, Base, Collector) where small base current controls large collector current for amplification or switching.',
      defAm: 'አነስተኛ የቤዝ ፍሰትን ተጠቅሞ ትልቅ ፍሰትን የሚቆጣጠርና ለማጉላት ወይም ለመቀየሪያነት የሚያገለግል ባለሦስት እግር የሴሚኮንዳክተር መሳሪያ።'
    }
  ],
  summaries: [
    {
      id: 'sum-6-1',
      title: {
        en: 'Electrostatics and DC Circuits',
        am: 'ኤሌክትሮስታቲክስ እና የዲሲ ሰርኪዩት'
      },
      bullets: [
        {
          en: 'Coulomb’s law F = kq₁q₂/r²; Electric field E = F/q; Ohm’s law V = IR; Power P = IV = I²R.',
          am: 'የኩሎምብ ህግ ጉልበትን፣ የኦህም ህግ ቮልቴጅን፣ ፓወር ደግሞ P = IV መሆኑን ያረጋግጣሉ።'
        },
        {
          en: 'Kirchhoff’s junction rule ∑I_in = ∑I_out (charge conservation); Loop rule ∑ΔV = 0 (energy conservation).',
          am: 'የኪርቾፍ የመስቀለኛ ህግ የቻርጅን ህልውና፣ የዙረት ህግ ደግሞ የኃይል ህልውናን ያረጋግጣል።'
        }
      ]
    },
    {
      id: 'sum-6-2',
      title: {
        en: 'Magnetic Fields and Induction',
        am: 'የማግኔት መስክ እና ኢንዳክሽን'
      },
      bullets: [
        {
          en: 'Lorentz force F = qvB sin θ; Magnetic flux Φ = BA cos θ; Faraday’s induction E = -N(ΔΦ/Δt).',
          am: 'የሎረንትዝ ጉልበት F = qvB sin θ ሲሆን የፋራዴይ ህግ ፍላክስ ሲቀየር ኤሌክትሪክ እንደሚመረት ያሳያል።'
        }
      ]
    },
    {
      id: 'sum-6-3',
      title: {
        en: 'Semiconductors and Electronics',
        am: 'ሴሚኮንዳክተሮች እና ኤሌክትሮኒክስ'
      },
      bullets: [
        {
          en: 'N-type has free electrons; P-type has holes; P-N diodes conduct forward-biased and rectify AC to DC.',
          am: 'N-type ኤሌክትሮኖችን፣ P-type ክፍተቶችን ይይዛል፤ ዳዮድ ተለዋዋጭ AC ን ወደ DC ሬክቲፋይ ያደርጋል።'
        },
        {
          en: 'BJT transistors amplify signals (I_C = β I_B); Transistors combine into logic gates (AND, OR, NOT, NAND, NOR).',
          am: 'ትራንዚስተሮች ድምፅና ሲግናልን ያጎላሉ፤ እንዲሁም የዲጂታል ሎጂክ ጌቶችን ይገነባሉ።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-6-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'How does a diode convert alternating current (AC) into direct current (DC)?',
        am: 'ዳዮድ ተለዋዋጭ ፍሰትን (AC) ወደ ቀጥታ ፍሰት (DC) እንዴት ይቀይራል?'
      },
      answer: {
        en: 'A diode allows electric current to flow in only one direction. During the positive half-cycle of AC voltage, the diode is forward-biased, narrowing the depletion region and conducting current. During the negative half-cycle, the diode becomes reverse-biased, creating a wide barrier that blocks current flow. Thus, the alternating sinusoidal wave is rectified into unidirectional pulsating DC.',
        am: 'ዳዮድ ኤሌክትሪክ በአንድ አቅጣጫ ብቻ እንዲያልፍ ይፈቅዳል። በ AC ቮልቴጅ አዎንታዊ አጋማሽ ወቅት ዳዮዱ ፎርዋርድ ባያስ ስለሚሆን ኤሌክትሪክ በቀላሉ ያልፋል። በአሉታዊ አጋማሽ ወቅት ደግሞ ሪቨርስ ባያስ ሆኖ ፍሰቱን ሙሉ በሙሉ ይዘጋዋል። በዚህም ተለዋዋጭ የነበረውን ፍሰት ወደ አንድ አቅጣጫ ብቻ የሚፈስ DC ይቀይረዋል።'
      },
      explanation: {
        en: 'Unidirectional conduction properties of p-n junction forward/reverse biasing eliminate alternating polarities.',
        am: 'የP-N ዳዮድ በአንድ አቅጣጫ ብቻ ኤሌክትሪክ የሚያሳልፍ በመሆኑ ተለዋዋጭ ሞገድን ወደ ቀጥታ ፍሰት ይቀይረዋል።'
      }
    },
    {
      id: 'qna-6-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'Three resistors of 4 Ω, 6 Ω, and 12 Ω are connected in parallel across a 12 V battery. What is the equivalent resistance and total current?',
        am: '4 Ω፣ 6 Ω እና 12 Ω የሆኑ ሦስት ተቃዋሚዎች በትይዩ ከ 12 ቮልት ባትሪ ጋር ተገናኝተዋል። አጠቃላይ ተቃውሞውና አጠቃላይ ፍሰቱ ስንት ነው?'
      },
      answer: {
        en: 'For parallel resistors: 1/R_eq = 1/4 + 1/6 + 1/12 = 3/12 + 2/12 + 1/12 = 6/12 = 1/2. Thus R_eq = 2 Ω. Total battery current by Ohm’s law is: I = V / R_eq = 12 V / 2 Ω = 6 A.',
        am: 'ለትይዩ ተቃዋሚዎች፡ 1/R_eq = 1/4 + 1/6 + 1/12 = 6/12 = 1/2፤ ስለዚህ R_eq = 2 Ω። አጠቃላይ ፍሰቱ በኦህም ህግ፡ I = V / R_eq = 12 V / 2 Ω = 6 አምፔር ይሆናል።'
      },
      explanation: {
        en: 'Parallel reciprocal addition gives 2 ohms equivalent resistance; dividing voltage 12 V yields 6 amperes current.',
        am: 'በትይዩ ስሌት የተገኘው ተቃውሞ 2 ኦህም ሲሆን 12 ቮልትን ለ 2 በማካፈል 6 አምፔር ፍሰት እናገኛለን።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-phys-6-1',
      number: 1,
      question: {
        en: 'What physical conservation law underpins Kirchhoff’s Junction Rule (∑ I_in = ∑ I_out)?',
        am: 'የኪርቾፍ የመስቀለኛ ህግ (∑ I_in = ∑ I_out) የተመሰረተው በየትኛው የተፈጥሮ ህልውና ህግ ላይ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Conservation of Energy', am: 'የኃይል ህልውና' } },
        { id: 'b', text: { en: 'Conservation of Electric Charge', am: 'የኤሌክትሪክ ቻርጅ ህልውና' } },
        { id: 'c', text: { en: 'Conservation of Momentum', am: 'የሞመንተም ህልውና' } },
        { id: 'd', text: { en: 'Conservation of Mass', am: 'የቁስ ክብደት ህልውና' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Kirchhoff’s junction rule states that electric charge cannot accumulate or disappear at a circuit node, representing conservation of electric charge. The loop rule represents conservation of energy.',
        am: 'የኪርቾፍ የመስቀለኛ ህግ በአንድ መስቀለኛ ነጥብ ላይ ቻርጅ ሊፈጠርም ሆነ ሊጠፋ አይችልም የሚል የቻርጅ ህልውና ህግ ነው። የዙረት ህግ ግን የኃይል ህልውና ነው።'
      }
    },
    {
      id: 'quiz-phys-6-2',
      number: 2,
      question: {
        en: 'Which logic gate produces a LOW (0) output only when ALL its inputs are HIGH (1)?',
        am: 'የትኛው ሎጂክ ጌት ሁሉም መግቢያዎቹ HIGH (1) ሲሆኑ ብቻ ውጤቱ LOW (0) የሚሆነው?'
      },
      options: [
        { id: 'a', text: { en: 'AND gate', am: 'AND ጌት' } },
        { id: 'b', text: { en: 'OR gate', am: 'OR ጌት' } },
        { id: 'c', text: { en: 'NAND gate', am: 'NAND ጌት' } },
        { id: 'd', text: { en: 'NOR gate', am: 'NOR ጌት' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'A NAND gate is an inverted AND gate. When both inputs are 1, the AND output is 1, and the inverted NAND output is 0. For all other combinations, the output is 1.',
        am: 'NAND ጌት የ AND ጌት ተቃራኒ ነው። ሁለቱም መግቢያዎች 1 ሲሆኑ ውጤቱ 0 ይሆናል፤ በሌሎች ሁኔታዎች ሁሉ 1 ይሰጣል።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-phys-6-1',
      chapter: 6,
      termEn: 'Ohm’s Law',
      termAm: 'የኦህም ህግ',
      defEn: 'Direct proportional relationship between electric potential difference and current: V = IR.',
      defAm: 'በቮልቴጅ እና በፍሰት መካከል ያለ የቀጥታ ተመጣጣኝነት ቀመር (V = IR)።'
    },
    {
      id: 'fc-phys-6-2',
      chapter: 6,
      termEn: 'P-N Junction Diode',
      termAm: 'የP-N ዳዮድ',
      defEn: 'Two-terminal semiconductor device that allows current to flow freely in the forward direction while blocking reverse current.',
      defAm: 'ኤሌክትሪክ ወደ ፊት ብቻ እንዲፈስ የሚያደርግና የኋሊት ፍሰትን የሚዘጋ የሴሚኮንዳክተር መሳሪያ።'
    }
  ]
};
