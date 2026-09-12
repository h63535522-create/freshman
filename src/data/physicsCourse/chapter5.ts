import { Chapter } from '../../types';

export const physicsChapter5: Chapter = {
  id: 1105,
  number: 5,
  title: {
    en: 'Chapter 5: Oscillations, Waves and Optics',
    am: 'ምዕራፍ ፭፡ ንዝረቶች፣ ሞገዶች እና ኦፕቲክስ'
  },
  universityAuthor: 'National Physics Curriculum Committee (MoSHE 2019)',
  overview: {
    en: 'Investigates simple harmonic motion (SHM), mechanical and simple pendulum oscillations, wave properties (transverse and longitudinal), resonance, the Doppler effect, wave interference, and geometrical optics with thin lenses and mirrors.',
    am: 'ቀላል ሃርሞኒክ ንዝረት (SHM)፣ የፔንዱለም እንቅስቃሴ፣ የሞገድ ባህሪያት (ተዘዋዋሪና ተጓዥ ሞገድ)፣ ሬዞናንስ፣ የዶፕለር ውጤት፣ የሞገድ መተላለፍና መስተጋብር፣ እንዲሁም የስስ ሌንሶችና የመስተዋቶች ኦፕቲክስን የሚያጠና ምዕራፍ።'
  },
  learningOutcomes: [
    {
      en: 'Describe simple harmonic motion (SHM) mathematically using displacement, velocity, acceleration, and energy relations',
      am: 'ቀላል ሃርሞኒክ ንዝረትን (SHM) በቦታ፣ ፍጥነት፣ ማጣደፍና በኃይል ቀመሮች በሂሳብ መግለፅ'
    },
    {
      en: 'Calculate the period and frequency of a simple pendulum and mass-spring oscillator',
      am: 'የፔንዱለምን እና የስፕሪንግ ኦሲሌተርን የዙረት ጊዜ (Period) እና ድግግሞሽ (Frequency) ማስላት'
    },
    {
      en: 'Differentiate between transverse and longitudinal waves and relate wave speed, frequency, and wavelength',
      am: 'በተዘዋዋሪ (Transverse) እና ተጓዥ (Longitudinal) ሞገዶች መካከል ያለውን ልዩነት መለየት እና v = fλ ቀመርን መተግበር'
    },
    {
      en: 'Explain physical acoustic resonance and compute frequency shifts caused by the Doppler effect',
      am: 'የድምፅ ሬዞናንስን ማብራራት እና በዶፕለር ውጤት የሚፈጠረውን የድግግሞሽ ለውጥ ማስላት'
    },
    {
      en: 'Construct ray diagrams and solve the thin lens equation (1/s₀ + 1/sᵢ = 1/f) for converging and diverging optical lenses',
      am: 'የጨረር ስዕሎችን መሳል እና የስስ ሌንስ ቀመርን (1/s₀ + 1/sᵢ = 1/f) በመጠቀም ምስሎችን መተንተን'
    }
  ],
  sections: [
    {
      id: 'phys-5-1',
      number: '5.1',
      title: {
        en: '5.1 Simple Harmonic Motion (SHM) and Energy Conservation',
        am: '፭.፩ ቀላል ሃርሞኒክ ንዝረት (SHM) እና የኃይል ህልውና'
      },
      paragraphs: [
        {
          id: 'phys-p5-1',
          en: 'Oscillatory or periodic motion repeats itself over identical time intervals. Simple Harmonic Motion (SHM) is periodic motion in which the restoring force is directly proportional to displacement and directed toward the central equilibrium position: F = -k x (Hooke’s Law). By Newton’s second law, acceleration is: a(t) = - (k/m) x(t) = - ω² x(t), where angular frequency is ω = √(k/m) = 2π f = 2π / T. Period is T = 2π √(m/k), completely independent of oscillation amplitude A.',
          am: 'የሚደጋገም እንቅስቃሴ (Periodic Motion) በተወሰነ ቋሚ ጊዜ የሚደጋገም ነው። ቀላል ሃርሞኒክ ንዝረት (SHM) ወደ ሚዛን ነጥቡ የሚጎትተው የመመለሻ ጉልበት ከቦታ መቀየሩ (Displacement) ጋር በቀጥታ የሚመጣጠንበት እንቅስቃሴ ነው፡ F = -k x (የሁክ ህግ)። በኒውተን ሁለተኛ ህግ መሰረት ማጣደፉ፡ a(t) = -ω² x(t) (ω = √(k/m) = 2π f) ነው። የዙረት ጊዜ T = 2π √(m/k) ሲሆን ከንዝረቱ ስፋት (Amplitude) ጋር ምንም ግንኙነት የለውም።',
          subheading: {
            en: 'Hooke’s Law and SHM Equations',
            am: 'የሁክ ህግ እና የSHM ቀመሮች'
          },
          highlightTerms: [
            { en: 'Simple Harmonic Motion', am: 'ቀላል ሃርሞኒክ ንዝረት' },
            { en: 'Angular Frequency', am: 'አንግላር ፍሪኩዌንሲ' },
            { en: 'Restoring Force', am: 'መመለሻ ጉልበት' }
          ]
        },
        {
          id: 'phys-p5-2',
          en: 'The position, velocity, and acceleration of a particle executing SHM are: x(t) = A cos(ωt + φ); v(t) = -ω A sin(ωt + φ); a(t) = -ω² A cos(ωt + φ). Velocity is zero at the turning extremes (x = ±A) and maximal at equilibrium (x = 0): v_max = ω A. Acceleration is maximal at extremes: a_max = ω² A. The total mechanical energy is constant: E = KE + PE = 1/2 m v² + 1/2 k x² = 1/2 k A², continuously converting between potential and kinetic forms.',
          am: 'በቀላል ሃርሞኒክ ንዝረት ውስጥ የአካል ቦታ፣ ፍጥነትና ማጣደፍ፡ x(t) = A cos(ωt + φ)፤ v(t) = -ω A sin(ωt + φ)፤ a(t) = -ω² A cos(ωt + φ) ናቸው። ፍጥነት በመጨረሻው ጫፍ (x = ±A) ላይ ዜሮ ሲሆን በመሃል ሚዛኑ ላይ ከፍተኛ ይሆናል፡ v_max = ω A። ማጣደፍ ደግሞ በጫፎቹ ላይ ከፍተኛ ነው፡ a_max = ω² A። አጠቃላይ ሜካኒካል ኃይል ሁልጊዜ ቋሚ ነው፡ E = 1/2 k A²።',
          subheading: {
            en: 'Kinematic Profiles and Energy Exchange',
            am: 'የፍጥነት ገጽታዎች እና የኃይል ልውውጥ'
          },
          highlightTerms: [
            { en: 'Amplitude', am: 'ስፋት (Amplitude)' },
            { en: 'Energy Conservation', am: 'የኃይል ህልውና' }
          ]
        },
        {
          id: 'phys-p5-3',
          en: 'A Simple Pendulum consists of a point mass bob of mass m suspended by a massless string of length L. For small angular displacements (sin θ ≈ θ in radians), the restoring torque is proportional to θ, producing SHM with period: T = 2π √(L / g). Crucially, the period depends only upon pendulum length L and gravitational acceleration g, being completely independent of the bob’s mass m or amplitude. This makes pendulums valuable tools for measuring local variations in g.',
          am: 'ቀላል ፔንዱለም (Simple Pendulum) L ርዝመት ባለው ገመድ የተንጠለጠለ m ክብደት ያለው አካል ነው። ለአነስተኛ የማወዛወዝ ማዕዘኖች (sin θ ≈ θ)፣ የፔንዱለሙ ዙረት ጊዜ T = 2π √(L / g) ነው። የፔንዱለም ዙረት ጊዜ በገመዱ ርዝመት (L) እና በመሬት ስበት (g) ላይ ብቻ የሚወሰን ሲሆን በክብደቱ (m) ላይ ፈጽሞ አይመሰረትም። በመሆኑም የመሬት ስበትን (g) በተለያዩ ቦታዎች ለመለካት ይጠቅማል።',
          subheading: {
            en: 'The Simple Pendulum',
            am: 'ቀላል ፔንዱለም'
          },
          highlightTerms: [
            { en: 'Simple Pendulum', am: 'ቀላል ፔንዱለም' },
            { en: 'Small Angle Approximation', am: 'የአነስተኛ አንግል ግምት' }
          ]
        }
      ]
    },
    {
      id: 'phys-5-2',
      number: '5.2',
      title: {
        en: '5.2 Wave Characteristics, Resonance and Doppler Effect',
        am: '፭.፪ የሞገድ ባህሪያት፣ ሬዞናንስ እና የዶፕለር ውጤት'
      },
      paragraphs: [
        {
          id: 'phys-p5-4',
          en: 'A wave is a traveling disturbance transferring energy and momentum through a medium without transferring bulk matter. Waves are classified by particle vibration direction: (1) Transverse Waves: particle displacement is perpendicular to wave propagation direction (e.g. light waves, waves on a plucked guitar string); (2) Longitudinal Waves: particle oscillations are parallel to propagation, creating alternating compressions and rarefactions (e.g. sound waves, seismic P-waves). The fundamental wave relationship is: v = f λ = λ / T.',
          am: 'ሞገድ (Wave) ቁስ አካሉን ሳያጓጉዝ ኃይልንና ሞመንተምን በጠፈር ወይም በቁስ ውስጥ የሚያስተላልፍ ረባሽ ክስተት ነው። ሞገዶች በሁለት ይከፈላሉ፡ (1) ተዘዋዋሪ ሞገድ (Transverse Wave)፡ የቁሱ ንዝረት ከሞገዱ ጉዞ ጋር ቀጤ-ነክ የሆነ (እንደ ብርሃን እና የጊታር ገመድ)፤ (2) ተጓዥ ሞገድ (Longitudinal Wave)፡ የንዝረቱ አቅጣጫ ከሞገዱ ጉዞ ጋር ትይዩ የሆነና መኮማተርንና መሳሳትን የሚፈጥር (እንደ ድምፅ ሞገድ)። መሰረታዊ የሞገድ ፍጥነት ቀመር፡ v = f λ ነው።',
          subheading: {
            en: 'Transverse vs Longitudinal Waves',
            am: 'ተዘዋዋሪ እና ተጓዥ ሞገዶች'
          },
          highlightTerms: [
            { en: 'Transverse Wave', am: 'ተዘዋዋሪ ሞገድ' },
            { en: 'Longitudinal Wave', am: 'ተጓዥ ሞገድ' },
            { en: 'Wavelength', am: 'የሞገድ ርዝመት' }
          ]
        },
        {
          id: 'phys-p5-5',
          en: 'Resonance occurs when a periodic driving force matches the natural resonant frequency of an oscillating system, leading to a dramatic amplification in vibrational amplitude (e.g., musical wind instruments, the collapse of the Tacoma Narrows bridge). The Doppler Effect is the perceived frequency shift when there is relative motion between a wave source and observer. When moving toward each other, perceived frequency increases (pitch rises); when receding, perceived frequency drops: f_o = f_s (v ± v_o) / (v ∓ v_s).',
          am: 'ሬዞናንስ (Resonance) የሚከሰተው ውጫዊ አንቀሳቃሽ ጉልበት ከስርአቱ ተፈጥሮአዊ የንዝረት ድግግሞሽ ጋር እኩል ሲሆንና የንዝረቱ ስፋት እጅግ ሲያይል ነው (የሙዚቃ መሳሪያዎች ድምፅ የሚያጎሉት በዚህ ነው)። የዶፕለር ውጤት (Doppler Effect) የድምፅ አውጪውና አዳማጩ አንጻራዊ እንቅስቃሴ ሲያደርጉ የሚፈጠር የድምፅ ድግግሞሽ ለውጥ ነው፡ እርስ በእርስ ሲቀራረቡ ድምፁ ቀጭን (ከፍተኛ f) ሆኖ ይሰማል፤ ሲራራቁ ደግሞ ይወፍራል (ዝቅተኛ f)።',
          subheading: {
            en: 'Resonance and the Doppler Effect',
            am: 'ሬዞናንስ እና የዶፕለር ውጤት'
          },
          highlightTerms: [
            { en: 'Resonance', am: 'ሬዞናንስ' },
            { en: 'Doppler Effect', am: 'የዶፕለር ውጤት' }
          ]
        }
      ]
    },
    {
      id: 'phys-5-3',
      number: '5.3',
      title: {
        en: '5.3 Wave Interactions and Geometrical Optics (Thin Lenses)',
        am: '፭.፫ የሞገድ መስተጋብር እና የጂኦሜትሪ ኦፕቲክስ (ስስ ሌንሶች)'
      },
      paragraphs: [
        {
          id: 'phys-p5-6',
          en: 'When waves encounter boundaries or obstacles, they undergo Reflection (Law of Reflection: angle of incidence equals angle of reflection: θ_i = θ_r), Refraction (bending when passing into another medium governed by Snell’s Law: n₁ sin θ₁ = n₂ sin θ₂), Diffraction (wave spreading around obstacle edges), and Interference (constructive when crests meet crests, destructive when crests cancel troughs).',
          am: 'ሞገዶች መሰናክል ሲያጋጥማቸው የሚያሳዩት ባህሪ፡ ነፀብራቅ (Reflection፡ የመምቻው አንግል ከነፀብራቁ ጋር እኩል ነው፡ θ_i = θ_r)፤ የጨረር ስብራት (Refraction፡ ብርሃን ከአንድ መካከለኛ ወደ ሌላ ሲገባ መታጠፍ፡ n₁ sin θ₁ = n₂ sin θ₂)፤ ዳይፍራክሽን (Diffraction፡ በመሰናክል ጠርዝ ዙሪያ የሞገድ መሰራጨት)፤ እና ኢንተርፌራንስ (Interference፡ ሁለት ሞገዶች ሲገናኙ መደጋገፍ ወይም መጣፋት) ናቸው።',
          subheading: {
            en: 'Reflection, Refraction, Diffraction and Interference',
            am: 'ነፀብራቅ፣ ስብራት፣ ዳይፍራክሽን እና ኢንተርፌራንስ'
          },
          highlightTerms: [
            { en: 'Snell’s Law', am: 'የስኔል ህግ' },
            { en: 'Interference', am: 'ኢንተርፌራንስ' }
          ]
        },
        {
          id: 'phys-p5-7',
          en: 'A Thin Lens has thickness negligible compared to its focal length f. Lenses are divided into Converging (convex) lenses with positive focal length (f > 0) that bend parallel rays together, and Diverging (concave) lenses with negative focal length (f < 0) that spread rays apart. The Gaussian Thin Lens Equation relates object distance s₀, image distance sᵢ, and focal length f: 1 / s₀ + 1 / sᵢ = 1 / f. Magnification is m = hᵢ / h₀ = - sᵢ / s₀. A positive image distance (sᵢ > 0) indicates a real inverted image, whereas negative image distance (sᵢ < 0) indicates an upright virtual image.',
          am: 'ስስ ሌንስ (Thin Lens) ውፍረቱ ከትኩረት ነጥብ ርቀቱ (f) ጋር ሲነፃፀር እጅግ አነስተኛ የሆነ ሌንስ ነው። በሁለት ይከፈላል፡ ሰብሳቢ (ኮንቬክስ) ሌንስ (f > 0) ትይዩ ጨረሮችን የሚያሰባስብ ሲሆን፤ በትኝ (ኮንኬቭ) ሌንስ (f < 0) ደግሞ ጨረሮችን የሚበትን ነው። የስስ ሌንስ ቀመር የእቃውን ርቀት (s₀)፣ የምስሉን ርቀት (sᵢ) እና ፎካል ሌንግዝ (f) ያገናኛል፡ 1 / s₀ + 1 / sᵢ = 1 / f። የምስል ማጉላት፡ m = - sᵢ / s₀ ነው። sᵢ አዎንታዊ ከሆነ እውነተኛ የተገለበጠ ምስል ሲሆን፣ አሉታዊ ከሆነ ደግሞ የቀና ምናባዊ ምስል ነው።',
          subheading: {
            en: 'The Thin Lens Equation and Magnification',
            am: 'የስስ ሌንስ ቀመር እና ማጉላት'
          },
          highlightTerms: [
            { en: 'Thin Lens Equation', am: 'የስስ ሌንስ ቀመር' },
            { en: 'Focal Length', am: 'የትኩረት ርቀት (Focal Length)' },
            { en: 'Magnification', am: 'ማጉላት (Magnification)' }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Simple Harmonic Motion',
      termAm: 'ቀላል ሃርሞኒክ ንዝረት',
      defEn: 'Periodic motion where the restoring force and acceleration are directly proportional to displacement and directed toward equilibrium.',
      defAm: 'የመመለሻ ጉልበቱ ከቦታ መቀየር ጋር በቀጥታ የሚመጣጠንና ሁልጊዜ ወደ ሚዛን ነጥብ የሚያመለክት ንዝረት።'
    },
    {
      termEn: 'Doppler Effect',
      termAm: 'የዶፕለር ውጤት',
      defEn: 'The apparent frequency change observed when a wave source and observer are in relative motion.',
      defAm: 'የሞገዱ ምንጭና ታዛቢው እርስ በእርስ ሲንቀሳቀሱ የሚታይ የድግግሞሽ ለውጥ።'
    },
    {
      termEn: 'Thin Lens Equation',
      termAm: 'የስስ ሌንስ ቀመር',
      defEn: 'The optical relationship relating object distance s₀, image distance sᵢ, and focal length f: 1/s₀ + 1/sᵢ = 1/f.',
      defAm: 'የእቃውን ርቀት፣ የምስሉን ርቀትና የትኩረት ነጥብን የሚያገናኝ የኦፕቲክስ ቀመር (1/s₀ + 1/sᵢ = 1/f)።'
    }
  ],
  summaries: [
    {
      id: 'sum-5-1',
      title: {
        en: 'SHM Kinematics and Pendulums',
        am: 'የSHM እንቅስቃሴ እና ፔንዱለም'
      },
      bullets: [
        {
          en: 'SHM acceleration a = -ω²x; spring period T = 2π√(m/k); simple pendulum period T = 2π√(L/g).',
          am: 'የስፕሪንግ ዙረት T = 2π√(m/k) ሲሆን የፔንዱለም ዙረት T = 2π√(L/g) ሆኖ በክብደት ላይ አይመሰረትም።'
        },
        {
          en: 'Total mechanical energy E = 1/2 kA² is constant, oscillating between kinetic and potential forms.',
          am: 'አጠቃላይ ሜካኒካል ኃይል 1/2 kA² ቋሚ ሆኖ በኪነቲክ እና ፖቴንሻል መሃል ይለዋወጣል።'
        }
      ]
    },
    {
      id: 'sum-5-2',
      title: {
        en: 'Wave Mechanics and Doppler Shifts',
        am: 'የሞገድ ሜካኒክስ እና የዶፕለር ለውጥ'
      },
      bullets: [
        {
          en: 'Wave velocity v = fλ; Transverse waves oscillate perpendicular to motion; Longitudinal waves oscillate parallel.',
          am: 'የሞገድ ፍጥነት v = fλ ነው፤ ተዘዋዋሪ ሞገድ ቀጤ-ነክ ሲሆን ተጓዥ ሞገድ ደግሞ ትይዩ ይነዝራል።'
        },
        {
          en: 'Approaching sources exhibit higher frequency; receding sources exhibit lower frequency.',
          am: 'የሚቀርቡ የድምፅ ምንጮች ከፍተኛ ድግግሞሽ፣ የሚርቁ ደግሞ ዝቅተኛ ድግግሞሽ ያሳያሉ።'
        }
      ]
    },
    {
      id: 'sum-5-3',
      title: {
        en: 'Optical Phenomena and Thin Lenses',
        am: 'የብርሃን ክስተቶች እና ስስ ሌንሶች'
      },
      bullets: [
        {
          en: 'Snell’s Law n₁ sin θ₁ = n₂ sin θ₂; Lens equation 1/s₀ + 1/sᵢ = 1/f; Magnification m = -sᵢ/s₀.',
          am: 'የስስ ሌንስ ቀመር 1/s₀ + 1/sᵢ = 1/f ሲሆን ምስል ማጉላት m = -sᵢ/s₀ ነው።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-5-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'Why does doubling the bob mass of a simple pendulum leave its period unchanged?',
        am: 'የቀላል ፔንዱለምን ክብደት በእጥፍ ብንጨምረው የዙረት ጊዜው የማይለወጠው ለምንድን ነው?'
      },
      answer: {
        en: 'The period of a simple pendulum is T = 2π √(L / g). While a larger mass experiences a proportionally larger gravitational restoring force (F = mg sin θ), its inertial resistance to acceleration (m) increases by the exact same proportion (a = F/m). Consequently, the mass terms cancel out entirely, making the period solely dependent on pendulum length L and gravitational acceleration g.',
        am: 'የቀላል ፔንዱለም ዙረት ጊዜ T = 2π √(L / g) ነው። የፔንዱለሙ ክብደት ሲጨምር ወደ ሚዛን የሚጎትተው የስበት ጉልበት (mg sin θ) በእጥፍ ሲጨምር፣ እንቅስቃሴን የሚቃወመው ኢነርሺያም (m) በእኩል እጥፍ ይጨምራል። ሁለቱ ክብደቶች እርስ በእርስ ስለሚጣፉ የዙረት ጊዜው በገመዱ ርዝመት (L) እና በስበት (g) ላይ ብቻ ይመሰረታል።'
      },
      explanation: {
        en: 'Inertial mass and gravitational mass cancel identically, so period depends strictly on length and g.',
        am: 'የስበት ክብደትና የኢነርሺያ ተቃውሞ እኩል በመሆናቸው ስለሚጣፉ ዙረቱ በርዝመትና በስበት ላይ ብቻ ይመሰረታል።'
      }
    },
    {
      id: 'qna-5-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'An object is placed 30 cm in front of a converging lens of focal length 10 cm. Find the image distance and magnification.',
        am: 'አንድ እቃ የትኩረት ርቀቱ (f) 10 ሳ.ሜ በሆነ ሰብሳቢ ሌንስ ፊት ለፊት በ 30 ሳ.ሜ ርቀት ተቀምጧል። የምስሉን ርቀትና ማጉላቱን ፈልጉ።'
      },
      answer: {
        en: 'Using the thin lens equation: 1/sᵢ = 1/f - 1/s₀ = 1/10 - 1/30 = (3 - 1)/30 = 2/30 = 1/15. Therefore, image distance sᵢ = +15 cm (real image behind lens). Magnification m = -sᵢ / s₀ = -15 / 30 = -0.5 (inverted and reduced to half size).',
        am: 'በስስ ሌንስ ቀመር፡ 1/sᵢ = 1/10 - 1/30 = 2/30 = 1/15፤ ስለዚህ sᵢ = +15 ሳ.ሜ (እውነተኛ ምስል)። ማጉላት፡ m = -15/30 = -0.5 (የተገለበጠና መጠኑ በግማሽ ያነሰ ምስል) ይሆናል።'
      },
      explanation: {
        en: 'Thin lens calculation yields positive image distance indicating real image, with magnification -0.5 indicating inversion.',
        am: 'የስስ ሌንስ ስሌት ምስሉ እውነተኛና የተገለበጠ እንዲሁም በግማሽ ያነሰ መሆኑን ያረጋግጣል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-phys-5-1',
      number: 1,
      question: {
        en: 'A sound wave has a frequency of 440 Hz in air where sound speed is 330 m/s. What is its wavelength?',
        am: 'የድምፅ ፍጥነት 330 ሜ/ሰ በሆነበት አየር ውስጥ የ 440 ኸርዝ ድምፅ ሞገድ ርዝመት ስንት ነው?'
      },
      options: [
        { id: 'a', text: { en: '0.75 m', am: '0.75 ሜትር' } },
        { id: 'b', text: { en: '1.33 m', am: '1.33 ሜትር' } },
        { id: 'c', text: { en: '770 m', am: '770 ሜትር' } },
        { id: 'd', text: { en: '145,200 m', am: '145,200 ሜትር' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Using wave speed formula v = f λ ⇒ λ = v / f = 330 m/s / 440 Hz = 0.75 m.',
        am: 'v = f λ ቀመርን በመጠቀም፡ λ = 330 / 440 = 0.75 ሜትር ይሆናል።'
      }
    },
    {
      id: 'quiz-phys-5-2',
      number: 2,
      question: {
        en: 'What type of image is always formed by a diverging (concave) lens for a real object?',
        am: 'በትኝ (ኮንኬቭ) ሌንስ ሁልጊዜ ለእውነተኛ እቃ የሚሰራው የምስል አይነት ምን ይመስላል?'
      },
      options: [
        { id: 'a', text: { en: 'Real, inverted, magnified', am: 'እውነተኛ፣ የተገለበጠ፣ የጎላ' } },
        { id: 'b', text: { en: 'Virtual, upright, reduced', am: 'ምናባዊ፣ የቀና፣ ያነሰ' } },
        { id: 'c', text: { en: 'Real, upright, reduced', am: 'እውነተኛ፣ የቀና፣ ያነሰ' } },
        { id: 'd', text: { en: 'Virtual, inverted, magnified', am: 'ምናባዊ፣ የተገለበጠ፣ የጎላ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'A diverging lens spreads light rays away from the principal axis, so rays never converge to form a real image. Tracing rays backwards always produces an upright, virtual, and diminished (reduced) image.',
        am: 'በትኝ ሌንስ ጨረሮችን ስለሚበትን ሁልጊዜ የሚሰራው ምስል ምናባዊ (Virtual)፣ የቀና (Upright) እና መጠኑ ያነሰ (Reduced) ነው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-phys-5-1',
      chapter: 5,
      termEn: 'Simple Harmonic Motion',
      termAm: 'ቀላል ሃርሞኒክ ንዝረት',
      defEn: 'Periodic back-and-forth motion where restoring force is linearly proportional to displacement from equilibrium.',
      defAm: 'የመመለሻ ጉልበቱ ከመነሻ ነጥቡ ጋር በቀጥታ የሚመጣጠን የንዝረት እንቅስቃሴ።'
    },
    {
      id: 'fc-phys-5-2',
      chapter: 5,
      termEn: 'Doppler Effect',
      termAm: 'የዶፕለር ውጤት',
      defEn: 'Shift in perceived wave frequency resulting from relative motion between source and observer.',
      defAm: 'በሞገድ ምንጭና በአዳማጭ አንጻራዊ እንቅስቃሴ ምክንያት የሚፈጠር የድምፅ ድግግሞሽ ለውጥ።'
    }
  ]
};
