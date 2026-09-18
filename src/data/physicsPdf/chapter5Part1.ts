import { OfficialPdfPage } from '../geographyPdf/types';

export const physicsChapter5Part1Pages: OfficialPdfPage[] = [
  // Page 119 - Book page 111
  {
    pdfPageNumber: 119,
    bookPageLabel: '111',
    chapterNumber: 5,
    sectionRef: '5.0',
    titleEn: 'CHAPTER FIVE: OSCILLATIONS, WAVES AND OPTICS',
    titleAm: 'ምዕራፍ አምስት፡ እርገበገባዎች፣ ሞገዶች እና ኦፕቲክስ',
    subtopicEn: '5.0. Intro & 5.1. Simple Harmonic Motion (SHM), Frequency and Period',
    subtopicAm: '፭.0 መግቢያ እና ፭.፩ ቀላል ሃርሞኒክ እንቅስቃሴ (SHM)፣ ፍሪኩዌንሲ እና ፔሬድ',
    pageType: 'content',
    contentEn: `CHAPTER FIVE: OSCILLATIONS, WAVES AND OPTICS

Oscillatory motion is any motion that repeats itself regularly back and forth across an equilibrium position. Examples include a swinging pendulum, a vibrating guitar string, quartz crystals in clocks, and electromagnetic oscillations in radio circuits.

Learning Objectives:
At the end of this chapter, you will be able to:
• Define and analyze Simple Harmonic Motion (SHM).
• Determine the period and frequency of mass-spring systems and pendulums.
• Differentiate between damped and forced oscillations and resonance.
• Describe mechanical waves, the wave equation, and wave velocity.
• Solve problems involving standing waves, sound intensity in decibels, and the Doppler effect.
• Apply the laws of reflection and refraction (Snell's Law).
• Construct ray diagrams and solve the mirror and thin lens equations.
• Explain wave interference, Young's double-slit experiment, and diffraction.

5.1. Simple Harmonic Motion (SHM)
A particle undergoes SHM whenever the restoring force is directly proportional to its displacement from equilibrium and directed toward that equilibrium position (Hooke's Law):
F = - k x ----------------------------------------------------------- (5.1.1)
By Newton's second law:
m (d²x / dt²) = - k x  =>  d²x / dt² + (k / m) x = 0 ----------------- (5.1.2)
Defining angular frequency:
ω = √(k / m) [rad/s]
Frequency (f): f = ω / (2π) = (1 / 2π) √(k / m) [Hertz, Hz]
Period (T): T = 1 / f = 2π / ω = 2π √(m / k) [seconds]`,
    contentAm: `ምዕራፍ አምስት፡ እርገበገባዎች፣ ሞገዶች እና ኦፕቲክስ (OSCILLATIONS, WAVES AND OPTICS)

እርገበገባ (Oscillation) ማለት አንድ አካል ከመነሻ ሚዛኑ ወዲያና ወዲህ እያለ በቋሚ ጊዜ ውስጥ የሚያደርገው ተደጋጋሚ እንቅስቃሴ ነው።

የምዕራፉ ዓላማዎች፡
• ቀላል ሃርሞኒክ እንቅስቃሴን (SHM) መተንተን፤
• የስፕሪንግ እና የፔንዱለም ፔሬድና ፍሪኩዌንሲ ማስላት፤
• የድምፅና የውሃ ሞገዶች ባህሪያት፣ ስታንዲንግ ሞገድ እና የዶፕለር ውጤትን መረዳት፤
• የብርሃን ነጸብራቅና ስብራት (Snell's Law)፤
• የመስታወት እና የሌንስ ቀመሮችን መተግበር፤
• የብርሃን ኢንተርፌረንስ እና ዲፍራክሽን መተንተን።

፭.፩ ቀላል ሃርሞኒክ እንቅስቃሴ (Simple Harmonic Motion - SHM)
አካል ወደ ሚዛኑ ለመመለስ የሚያደርገው ጉልበት ከቦታው ርቀት (Displacement) ጋር ቀጥተኛ ተመጣጣኝ ሲሆን SHM ይባላል፡
F = - k x (የሁክ ህግ)
የማዕዘን ፍሪኩዌንሲ፡ ω = √(k / m)
ፍሪኩዌንሲ፡ f = 1/T = (1/2π) √(k / m) [Hertz]
ፔሬድ፡ T = 2π √(m / k) [ሰከንድ]።`
  },

  // Page 120 - Book page 112
  {
    pdfPageNumber: 120,
    bookPageLabel: '112',
    chapterNumber: 5,
    sectionRef: '5.1',
    titleEn: 'SHM Kinematics: Position, Velocity & Acceleration',
    titleAm: 'የቀላል ሃርሞኒክ እንቅስቃሴ ኪነማቲክስ፡ ቦታ፣ ፍጥነት እና ማጣደፍ',
    subtopicEn: 'x(t) = A cos(omega t + phi), v(t) = -omega A sin, a(t) = -omega^2 x',
    subtopicAm: 'የቦታ፣ ፍጥነት እና ማጣደፍ ቀመሮች እንዲሁም ከፍተኛ እሴቶች',
    pageType: 'content',
    contentEn: `Kinematic Equations of SHM:
The general solution to the differential equation d²x/dt² + ω²x = 0 is:
x(t) = A cos(ω t + φ) ----------------------------------------------- (5.1.3)
where:
• A = Amplitude: maximum displacement from equilibrium (m).
• ω = Angular frequency = 2πf (rad/s).
• φ = Initial phase angle (phase constant) at t = 0 (rad).
• (ω t + φ) = Phase of the motion.

Velocity in SHM:
Differentiating position with respect to time:
v(t) = dx / dt = - ω A sin(ω t + φ) --------------------------------- (5.1.4)
Maximum speed occurs at the equilibrium position (x = 0):
v_max = ω A = A √(k / m)

Acceleration in SHM:
Differentiating velocity with respect to time:
a(t) = dv / dt = - ω² A cos(ω t + φ) = - ω² x(t) ------------------- (5.1.5)
Maximum acceleration occurs at the turning points (x = ±A):
a_max = ω² A = (k / m) A.
Notice that acceleration is always opposite in sign to displacement!`,
    contentAm: `የSHM ኪነማቲክ ቀመሮች፡
የቦታ ቀመር፡
x(t) = A cos(ω t + φ) (ቀመር 5.1.3)
A = አምፕሊቲዩድ (ከፍተኛ ርቀት)፤ ω = የማዕዘን ፍሪኩዌንሲ፤ φ = የመነሻ ፌዝ።

የፍጥነት ቀመር፡
v(t) = - ω A sin(ω t + φ) (ቀመር 5.1.4)
ከፍተኛ ፍጥነት በመሀል በሚዛኑ ነጥብ (x = 0) ላይ ይገኛል፡
v_max = ω A

የማጣደፍ ቀመር፡
a(t) = - ω² x(t) (ቀመር 5.1.5)
ከፍተኛ ማጣደፍ በጫፎቹ (x = ±A) ላይ ይገኛል፡
a_max = ω² A
ማጣደፍ ሁልጊዜ ወደ ሚዛኑ ነጥብ የሚያመለክት ተቃራኒ ምልክት አለው።`
  },

  // Page 121 - Book page 113
  {
    pdfPageNumber: 121,
    bookPageLabel: '113',
    chapterNumber: 5,
    sectionRef: '5.1',
    titleEn: 'Energy in SHM & Conservation Graph',
    titleAm: 'ኃይል በቀላል ሃርሞኒክ እንቅስቃሴ እና የጥበቃ ግራፍ',
    subtopicEn: 'KE = 1/2 k A^2 sin^2, PE = 1/2 k A^2 cos^2, Total E = 1/2 k A^2 = Constant',
    subtopicAm: 'የኪነቲክ፣ ፖቴንሺያል እና አጠቃላይ ኃይል (E = 1/2 k A²) ቋሚ መሆን',
    pageType: 'content',
    contentEn: `Energy in Simple Harmonic Motion:
In the absence of friction or damping, total mechanical energy is conserved.

Kinetic Energy (KE):
KE = 1/2 m v² = 1/2 m ω² A² sin²(ω t + φ)
Since ω² = k / m:
KE = 1/2 k A² sin²(ω t + φ) = 1/2 k (A² - x²) ----------------------- (5.1.6)

Potential Energy (PE):
PE = 1/2 k x² = 1/2 k A² cos²(ω t + φ) ------------------------------ (5.1.7)

Total Mechanical Energy (E):
E = KE + PE = 1/2 k A² [sin²(ω t + φ) + cos²(ω t + φ)]
E = 1/2 k A² = Constant! -------------------------------------------- (5.1.8)
Total energy is proportional to the SQUARE of the amplitude!
• At x = ±A (turning points): v = 0, KE = 0, PE = 1/2 k A² (all potential energy).
• At x = 0 (equilibrium): x = 0, PE = 0, KE = 1/2 m v_max² = 1/2 k A² (all kinetic energy).
• At any intermediate position x:
  v = ± √(k/m (A² - x²)) = ± ω √(A² - x²).`,
    contentAm: `ኃይል በቀላል ሃርሞኒክ እንቅስቃሴ (Energy in SHM)፡
ግጭት በሌለበት ሁኔታ አጠቃላይ መካኒካል ኃይል ምንጊዜም ቋሚ ነው፡
የኪነቲክ ኃይል፡ KE = 1/2 k (A² - x²)
የፖቴንሺያል ኃይል፡ PE = 1/2 k x²

አጠቃላይ መካኒካል ኃይል፡
E = KE + PE = 1/2 k A² = ቋሚ ቁጥር! (ቀመር 5.1.8)
አጠቃላይ ኃይል ከአምፕሊቲዩድ ካሬ (A²) ጋር ቀጥተኛ ተመጣጣኝ ነው!
• በጫፎቹ ላይ (x = ±A)፡ ፍጥነት ዜሮ ነው፤ ኃይሉ በሙሉ ፖቴንሺያል ይሆናል (PE = 1/2 k A²)።
• በመሀል (x = 0) ላይ፡ ፖቴንሺያል ዜሮ ነው፤ ኃይሉ በሙሉ ኪነቲክ ይሆናል (KE = 1/2 k A²)።`
  },

  // Page 122 - Book page 114
  {
    pdfPageNumber: 122,
    bookPageLabel: '114',
    chapterNumber: 5,
    sectionRef: '5.1.1',
    titleEn: 'The Simple Pendulum & Physical Pendulum',
    titleAm: 'ቀላል ፔንዱለም እና አካላዊ ፔንዱለም',
    subtopicEn: '5.1.1. Restoring Torque, Small Angle Approximation & T = 2*pi*sqrt(L/g)',
    subtopicAm: '፭.፩.፩ አነስተኛ አንግል ግምት እና የፔንዱለም ፔሬድ ቀመር T = 2π√(L/g)',
    pageType: 'content',
    contentEn: `5.1.1. The Simple Pendulum
A simple pendulum consists of a small mass m (bob) suspended from a light, inextensible string of length L.
The tangential restoring force acting on the bob is:
F_tangential = - m g sinθ
For small angular displacements (θ < 15° ≈ 0.26 rad), sinθ ≈ θ = s / L:
F_t ≈ - m g (s / L) = - (m g / L) s
This is identical to Hooke's law F = -k s with effective spring constant k_eff = m g / L!

Period of a Simple Pendulum:
T = 2π √(m / k_eff) = 2π √(m / (m g / L))
T = 2π √(L / g) ----------------------------------------------------- (5.1.9)
Frequency:
f = (1 / 2π) √(g / L)

Key Properties of a Simple Pendulum:
1. The period depends ONLY on length L and gravitational acceleration g.
2. The period is completely INDEPENDENT of the mass m of the bob!
3. The period is independent of amplitude for small angles (isochronism, first discovered by Galileo).

The Physical Pendulum:
For an arbitrary rigid body of mass m and moment of inertia I oscillating about a pivot at distance d from its center of mass:
T = 2π √(I / (m g d)) ----------------------------------------------- (5.1.10)`,
    contentAm: `፭.፩.፩ ቀላል ፔንዱለም (Simple Pendulum)
ቀላል ፔንዱለም L ርዝመት ባለው ቀላል ገመድ የተንጠለጠለ m ክብደት ያለው አካል ነው።
ለአነስተኛ አንግል (θ < 15°)፡ sinθ ≈ θ
የፔንዱለም ፔሬድ ቀመር፡
T = 2π √(L / g) (ቀመር 5.1.9)
ፍሪኩዌንሲ፡ f = (1 / 2π) √(g / L)

የቀላል ፔንዱለም ቁልፍ ባህሪያት፡
፩. ፔሬዱ በገመዱ ርዝመት (L) እና በስበት ማጣደፍ (g) ላይ ብቻ የተመሰረተ ነው።
፪. ፔሬዱ በጭነቱ ክብደት (m) ላይ በፍጹም አይወሰንም!
፫. ለአነስተኛ አንግሎች ፔሬዱ በአምፕሊቲዩድ ላይ አይወሰንም (በገሊሊዮ የተረጋገጠ)።

አካላዊ ፔንዱለም (Physical Pendulum)፡
T = 2π √(I / (m g d)) (ቀመር 5.1.10)`
  },

  // Page 123 - Book page 115
  {
    pdfPageNumber: 123,
    bookPageLabel: '115',
    chapterNumber: 5,
    sectionRef: '5.1.2',
    titleEn: 'Damped Oscillations: Three Regimes',
    titleAm: 'የሚከስሙ እርገበገባዎች (Damped Oscillations)፡ ሦስቱ ሁኔታዎች',
    subtopicEn: '5.1.2. Damping Force F_d = -bv, Underdamped, Critically Damped & Overdamped',
    subtopicAm: '፭.፩.፪ የግጭት ጉልበት፣ ከሳሚ፣ ወሳኝ ከሳሚ እና ከመጠን በላይ ከሳሚ እርገበገባ',
    pageType: 'content',
    contentEn: `5.1.2. Damped Oscillations
In real physical systems, frictional and drag forces dissipate mechanical energy into heat, causing the amplitude of oscillation to decrease over time. This is known as damping.
Let the damping force be proportional to velocity:
F_d = - b v = - b (dx / dt)
where b is the damping coefficient.

Equation of Motion:
m (d²x/dt²) + b (dx/dt) + k x = 0

Three Regimes of Damping:
1. Underdamped (b < 2√(km)):
   The system oscillates with gradually decaying amplitude:
   x(t) = A₀ e^(- (b/2m) t) cos(ω' t + φ)
   where ω' = √((k/m) - (b/2m)²) is slightly less than the natural frequency ω₀.
2. Critically Damped (b = 2√(km)):
   The system returns to equilibrium in the SHORTEST POSSIBLE TIME without oscillating at all! This is engineered into automobile shock absorbers and galvanometer needles.
3. Overdamped (b > 2√(km)):
   The system returns to equilibrium very sluggishly without oscillating.`,
    contentAm: `፭.፩.፪ የሚከስሙ እርገበገባዎች (Damped Oscillations)
በእውነተኛ አለም ግጭትና የአየር ተቃውሞ ኃይልን ወደ ሙቀት ስለሚቀይሩት የእርገበገባው አምፕሊቲዩድ እየቀነሰ ሄዶ ይጠፋል።

ሦስቱ የመክሰም ደረጃዎች፡
፩. ከሳሚ (Underdamped)፡ አካሉ አምፕሊቲዩዱ እየቀነሰ እያረገበገበ ይቆማል (x(t) = A₀ e^(-bt/2m) cos(ω't))።
፪. ወሳኝ ከሳሚ (Critically Damped)፡ አካሉ ሳያረገበግብ በአጭር ጊዜ ውስጥ ወደ ሚዛኑ ይመለሳል! (ለምሳሌ የመኪና ሾክ አምፖርሳዶር)።
፫. ከመጠን በላይ ከሳሚ (Overdamped)፡ ሳያረገበግብ በጣም በዝግታ ወደ ሚዛኑ ይመለሳል።`
  },

  // Page 124 - Book page 116
  {
    pdfPageNumber: 124,
    bookPageLabel: '116',
    chapterNumber: 5,
    sectionRef: '5.1.3',
    titleEn: 'Forced Oscillations and Resonance',
    titleAm: 'የተገደዱ እርገበገባዎች እና ሬዞናንስ (Resonance)',
    subtopicEn: '5.1.3. Driving Frequency omega, Natural Frequency omega_0 & Resonance Peak',
    subtopicAm: '፭.፩.፫ ገፊ ፍሪኩዌንሲ፣ የተፈጥሮ ፍሪኩዌንሲ እና ከፍተኛ የሬዞናንስ አምፕሊቲዩድ',
    pageType: 'content',
    contentEn: `5.1.3. Forced Oscillations and Resonance
When a periodic external driving force F(t) = F₀ cos(ω t) is applied to an oscillating system, the system eventually oscillates at the driving frequency ω.

The amplitude of the steady-state oscillation is given by:
A = (F₀ / m) / √[(ω² - ω₀²)² + (b ω / m)²] --------------------------- (5.1.11)
where ω₀ = √(k / m) is the natural frequency of the undamped oscillator.

Resonance:
When the driving frequency matches the natural frequency of the system:
ω ≈ ω₀
The term (ω² - ω₀²) becomes zero, causing the amplitude to reach a DRAMATIC MAXIMUM! This phenomenon is called Resonance.

Examples and Applications of Resonance:
1. Radio and TV Tuning: Adjusting the capacitance changes the natural frequency of the circuit to match the frequency of the desired broadcasting station.
2. Magnetic Resonance Imaging (MRI): Nuclear magnetic resonance is used to map human internal tissues.
3. Acoustic Resonance: A singer shattering a wine glass by matching its natural resonance pitch.
4. Structural Disasters: The Tacoma Narrows Bridge collapse (1940), where wind vortex shedding drove the bridge at its natural torsional resonance frequency.`,
    contentAm: `፭.፩.፫ የተገደዱ እርገበገባዎች እና ሬዞናንስ (Resonance)
አንድ ስርዓት በየጊዜው በሚገፋ ውጫዊ ጉልበት F(t) = F₀ cos(ωt) ሲገፋ በገፊው ፍሪኩዌንሲ ω ማረገብገብ ይጀምራል።

ሬዞናንስ (Resonance)፡
የውጭው ገፊ ፍሪኩዌንሲ ከስርዓቱ የተፈጥሮ ፍሪኩዌንሲ ጋር እኩል ሲሆን (ω ≈ ω₀) የእርገበገባው አምፕሊቲዩድ እጅግ በጣም ከፍተኛ ጣሪያ ላይ ይደርሳል! ይህ ክስተት ሬዞናንስ ይባላል።

ተግባራዊ ምሳሌዎች፡
፩. የሬዲዮ እና ቴሌቪዥን ጣቢያዎችን ማስተካከል (Tuning)፤
፪. የህክምና MRI ምርመራ፤
፫. ድምጻዊያን በድምጻቸው ሬዞናንስ የመስታወት ብርጭቆ ሲሰብሩ፤
፬. የድልድይ አደጋዎች፡ የንፋስ ፍጥነት ከድልድዩ የተፈጥሮ ፍሪኩዌንሲ ጋር ተስማምቶ የታኮማ ድልድይ በ1940 ዓ.ም ተደርምሷል።`
  },

  // Page 125 - Book page 117
  {
    pdfPageNumber: 125,
    bookPageLabel: '117',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Wave Motion: Transverse vs Longitudinal Waves',
    titleAm: 'የሞገድ እንቅስቃሴ፡ ትራንስቨርስ እና ሎንጂቲዩዲናል ሞገዶች',
    subtopicEn: '5.2. Mechanical vs Electromagnetic Waves & Wave Anatomy (Crest, Trough)',
    subtopicAm: '፭.፪ ሜካኒካል እና ኤሌክትሮማግኔቲክ ሞገዶች እንዲሁም የሞገድ ክፍሎች',
    pageType: 'content',
    contentEn: `5.2. Wave Motion
A wave is a traveling disturbance that transports ENERGY and MOMENTUM through space without transporting matter itself.

Classification of Waves:
1. By Medium Requirement:
   • Mechanical Waves: Require a physical elastic medium to propagate (e.g., water waves, sound waves, seismic waves). Cannot travel through a vacuum.
   • Electromagnetic Waves: Do NOT require a medium; propagate through vacuum at the speed of light c = 3.00 × 10⁸ m/s (e.g., light, radio, X-rays).

2. By Direction of Particle Oscillation:
   • Transverse Waves: The particles of the medium oscillate PERPENDICULAR to the direction of wave propagation (e.g., waves on a guitar string, ripples on a water surface, light waves).
     Features: Crests (highest points) and Troughs (lowest points).
   • Longitudinal Waves: The particles of the medium oscillate PARALLEL to the direction of wave propagation (e.g., sound waves in air, compression waves in a slinky).
     Features: Compressions (high-density regions) and Rarefactions (low-density regions).`,
    contentAm: `፭.፪ የሞገድ እንቅስቃሴ (Wave Motion)
ሞገድ ቁስ አካልን ራሱን ሳያጓጉዝ ኃይልንና ሞመንተምን ከቦታ ቦታ የሚያስተላልፍ ረበሽ ነው።

የሞገዶች ክፍፍል፡
፩. በመተላለፊያ (Medium) ፍላጎት፡
• ሜካኒካል ሞገድ፡ ቁሳዊ መተላለፊያ ያስፈልገዋል (ድምፅ፣ የውሃ ሞገድ)፤ በባዶ ህዋ ማለፍ አይችልም።
• ኤሌክትሮማግኔቲክ ሞገድ፡ መተላለፊያ አያስፈልገውም፤ በባዶ ህዋ በብርሃን ፍጥነት (c = 3×10⁸ m/s) ይጓዛል (ብርሃን፣ ሬዲዮ፣ ኤክስሬይ)።

፪. በቅንጣቶች እርገበገባ አቅጣጫ፡
• ትራንስቨርስ ሞገድ (Transverse)፡ ቅንጣቶች ከሞገዱ ጉዞ ጋር በ90 ዲግሪ (ቀጤ-ነክ) ይርገበገባሉ (ለምሳሌ የጊታር ገመድ፣ ብርሃን)። ጫፎች (Crest) እና ሸለቆዎች (Trough) አሉት።
• ሎንጂቲዩዲናል ሞገድ (Longitudinal)፡ ቅንጣቶች ከሞገዱ ጉዞ ጋር በትይዩ ይርገበገባሉ (ለምሳሌ ድምፅ)። ጥድቅቆሽ (Compression) እና ስስሶሽ (Rarefaction) አሉት።`
  },

  // Page 126 - Book page 118
  {
    pdfPageNumber: 126,
    bookPageLabel: '118',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Mathematical Wave Equation & Wave Speed',
    titleAm: 'የሂሳብ ሞገድ ቀመር እና የሞገድ ፍጥነት',
    subtopicEn: 'y(x, t) = A sin(k x - omega t) & Speed Formula v = lambda * f = omega / k',
    subtopicAm: 'የሞገድ ቀመር y(x, t) = A sin(kx - ωt) እና የፍጥነት ቀመር v = λ f',
    pageType: 'content',
    contentEn: `Mathematical Description of a Traveling Harmonic Wave:
A sinusoidal wave traveling in the positive x-direction is described by the wave function:
y(x, t) = A sin(k x - ω t + φ) --------------------------------------- (5.2.1)
If traveling in the negative x-direction:
y(x, t) = A sin(k x + ω t + φ)

Fundamental Wave Parameters:
• Amplitude (A): Maximum displacement of any particle from equilibrium.
• Wavelength (λ): Distance between two consecutive crests or troughs (m).
• Wave Number (k):
  k = 2π / λ [rad/m] ------------------------------------------------ (5.2.2)
• Period (T): Time for one complete wave oscillation (s).
• Frequency (f): Number of cycles passing a fixed point per second:
  f = 1 / T [Hz]
• Angular Frequency (ω):
  ω = 2π f = 2π / T [rad/s] ----------------------------------------- (5.2.3)

Wave Speed (v):
The speed at which a wave crest propagates through space:
v = λ / T = λ f = ω / k --------------------------------------------- (5.2.4)
The wave speed depends ONLY on the properties of the medium!`,
    contentAm: `የተጓዥ ሞገድ የሂሳብ ቀመር፡
ወደ ቀኝ (+x) የሚጓዝ የሳይን ሞገድ ቀመር፡
y(x, t) = A sin(k x - ω t + φ) (ቀመር 5.2.1)
ወደ ግራ (-x) የሚጓዝ ከሆነ፡ y(x, t) = A sin(k x + ω t)

መሰረታዊ የሞገድ መለኪያዎች፡
• አምፕሊቲዩድ (A)፡ ከፍተኛ የቦታ ርቀት፤
• የሞገድ ርዝመት (Wavelength - λ)፡ በሁለት ተከታታይ ጫፎች መካከል ያለው ርቀት፤
• የሞገድ ቁጥር (Wave number - k)፡ k = 2π / λ [rad/m]
• ፍሪኩዌንሲ (f)፡ በሰከንድ የሚያልፉ ሞገዶች ብዛት፡ f = 1 / T [Hz]
• የማዕዘን ፍሪኩዌንሲ (ω)፡ ω = 2π f

የሞገድ ፍጥነት (Wave Speed - v)፡
v = λ f = ω / k (ቀመር 5.2.4)
የሞገድ ፍጥነት በመተላለፊያው (Medium) ባህሪ ላይ ብቻ የተመሰረተ ነው!`
  },

  // Page 127 - Book page 119
  {
    pdfPageNumber: 127,
    bookPageLabel: '119',
    chapterNumber: 5,
    sectionRef: '5.2.1',
    titleEn: 'Wave Speed on a Stretched String',
    titleAm: 'በተወጠረ ገመድ ላይ የሞገድ ፍጥነት',
    subtopicEn: 'v = sqrt(T_tension / mu), Linear Mass Density mu = m / L & Example',
    subtopicAm: 'ቀመር v = √(T/μ)፣ የገመድ መስመራዊ እፍጋት እና የተሰራ ምሳሌ',
    pageType: 'content',
    contentEn: `5.2.1. Wave Speed on a Stretched String
The speed of a transverse wave on a flexible stretched string depends on:
1. The tension T in the string (restoring force property).
2. The linear mass density μ (mass per unit length, inertial property):
   μ = m / L [kg/m]

Transverse Wave Speed Formula:
v = √(T / μ) -------------------------------------------------------- (5.2.5)
Notice:
• Higher tension T  =>  FASTER wave speed.
• Thicker/heavier string (larger μ)  =>  SLOWER wave speed.
This is why guitarists tighten strings to raise pitch (frequency f = v / 2L) and why bass strings are wound with thick wire!

Example:
A 5.0-m long steel wire has a mass of 0.040 kg and is stretched under a tension of 800 N.
(a) Find the wave speed on the wire.
(b) How long does it take a transverse pulse to travel the length of the wire?

Solution:
(a) Linear mass density:
    μ = m / L = 0.040 kg / 5.0 m = 0.0080 kg/m = 8.0 × 10⁻³ kg/m.
    Wave speed:
    v = √(T / μ) = √(800 N / 0.0080 kg/m) = √100,000 ≈ 316 m/s.
(b) Travel time:
    t = L / v = 5.0 m / 316 m/s ≈ 0.0158 s = 15.8 ms.`,
    contentAm: `፭.፪.፩ በተወጠረ ገመድ ላይ የሞገድ ፍጥነት
በገመድ ላይ የሚጓዝ ሞገድ ፍጥነት በገመዱ ውጥረት (Tension - T) እና በገመዱ መስመራዊ እፍጋት (μ = m/L) ላይ የተመሰረተ ነው፡
v = √(T / μ) (ቀመር 5.2.5)

• ውጥረት ሲጨምር፡ ፍጥነት ይጨምራል።
• ገመዱ ሲወፍር (μ ሲጨምር)፡ ፍጥነት ይቀንሳል።
የጊታር ቀጫጭን ገመዶች ፈጣን ሞገድና ከፍተኛ የድምፅ ቃና የሚያወጡት በዚህ ምክንያት ነው።

ምሳሌ፡
5.0 ሜትር ርዝመትና 0.040 ኪ.ግ ክብደት ያለው ገመድ በ800 ኒውተን ተወጥሯል፡
ሀ. የሞገዱ ፍጥነት፡ μ = 0.040 / 5.0 = 0.008 kg/m
   v = √(800 / 0.008) = 316 ሜ/ሰ።
ለ. ጫፍ እስከ ጫፍ ለመጓዝ የሚፈጀው ጊዜ፡ t = 5.0 / 316 = 0.0158 ሰከንድ።`
  },

  // Page 128 - Book page 120
  {
    pdfPageNumber: 128,
    bookPageLabel: '120',
    chapterNumber: 5,
    sectionRef: '5.2.2',
    titleEn: 'Superposition Principle & Interference',
    titleAm: 'የልዕለ-ድርብርብ መርህ (Superposition) እና ኢንተርፌረንስ',
    subtopicEn: '5.2.2. Constructive (Delta r = m lambda) & Destructive Interference',
    subtopicAm: '፭.፪.፪ ገንቢ እና አጥፊ ኢንተርፌረንስ እንዲሁም የፓዝ ልዩነት ሁኔታዎች',
    pageType: 'content',
    contentEn: `5.2.2. The Principle of Superposition and Interference
The Principle of Superposition:
"When two or more traveling waves overlap in space, the resultant wave displacement at any point is the algebraic sum of the displacements of the individual waves at that point:"
y_net(x, t) = y₁(x, t) + y₂(x, t) ----------------------------------- (5.2.6)

Interference:
The physical combination of two or more waves into a composite resultant wave is called interference.

1. Constructive Interference:
Occurs when two waves arrive IN PHASE (crest meets crest, trough meets trough). The amplitudes add up to produce a reinforced wave of larger amplitude (A_net = A₁ + A₂):
Path difference:
Δr = m λ  (where m = 0, ±1, ±2, ...) -------------------------------- (5.2.7)

2. Destructive Interference:
Occurs when two waves arrive COMPLETELY OUT OF PHASE (crest meets trough). The displacements oppose each other, resulting in cancellation (A_net = |A₁ - A₂|; if A₁ = A₂, total cancellation occurs):
Path difference:
Δr = (m + 1/2) λ  (where m = 0, ±1, ±2, ...) ------------------------ (5.2.8)`,
    contentAm: `፭.፪.፪ የልዕለ-ድርብርብ መርህ እና ኢንተርፌረንስ (Superposition & Interference)
የልዕለ-ድርብርብ መርህ፡
ሁለት ወይም ከዚያ በላይ ሞገዶች በአንድ ቦታ ሲገናኙ፣ የውጤቱ ሞገድ የነጠላ ሞገዶቹ የሂሳብ ድምር ይሆናል፡
y_net = y1 + y2

የኢንተርፌረንስ አይነቶች፡
፩. ገንቢ ኢንተርፌረንስ (Constructive Interference)፡
ሁለቱ ሞገዶች በተመሳሳይ ፌዝ ሲገናኙ (ጫፍ ከጫፍ ወይም ሸለቆ ከሸለቆ) አምፕሊቲዩዳቸው ተደምሮ ግዙፍ ሞገድ ይፈጥራል፡
የመንገድ ልዩነት (Path difference)፡
Δr = m λ (m = 0, 1, 2, ...)

፪. አጥፊ ኢንተርፌረንስ (Destructive Interference)፡
አንደኛው ጫፍ ከሌላኛው ሸለቆ ጋር ሲገናኝ አንዱ ሌላውን ያጠፋል፡
የመንገድ ልዩነት፡
Δr = (m + 1/2) λ (m = 0, 1, 2, ...)`
  },

  // Page 129 - Book page 121
  {
    pdfPageNumber: 129,
    bookPageLabel: '121',
    chapterNumber: 5,
    sectionRef: '5.2.3',
    titleEn: 'Standing Waves on a String: Nodes and Antinodes',
    titleAm: 'ረጊ ሞገዶች (Standing Waves)፡ ኖዶች እና አንቲኖዶች',
    subtopicEn: '5.2.3. Superposition of Opposing Waves, Nodes (zero) & Antinodes (max)',
    subtopicAm: '፭.፪.፫ የተቃራኒ ሞገዶች ውህደት፣ ኖድ (ዜሮ ነጥብ) እና አንቲኖድ (ከፍተኛ ነጥብ)',
    pageType: 'content',
    contentEn: `5.2.3. Standing Waves on a Stretched String
When two identical harmonic waves of equal amplitude and frequency travel in opposite directions along a string:
y₁(x, t) = A sin(kx - ωt)
y₂(x, t) = A sin(kx + ωt)
By trigonometric identity sin(α - β) + sin(α + β) = 2 sin α cos β:
y_net = (2A sin kx) cos ωt ------------------------------------------ (5.2.9)
This does not travel—it is a Standing (Stationary) Wave!

Key Features:
1. Nodes: Points where the amplitude is ALWAYS ZERO (sin kx = 0):
   kx = n π  =>  x = n (λ / 2)  (n = 0, 1, 2, ...)
   The distance between two consecutive nodes is λ / 2.
2. Antinodes: Points where the amplitude reaches MAXIMUM value 2A (|sin kx| = 1):
   x = (n + 1/2) (λ / 2)  (n = 0, 1, 2, ...)
   The distance between a node and adjacent antinode is λ / 4.

Boundary Conditions (Fixed Ends at x = 0 and x = L):
Both ends are clamped nodes, requiring y(0) = 0 and y(L) = 0:
sin(k L) = 0  =>  k L = n π  =>  (2π / λ_n) L = n π
λ_n = 2 L / n  (n = 1, 2, 3, ...) ----------------------------------- (5.2.10)`,
    contentAm: `፭.፪.፫ ረጊ ሞገዶች (Standing Waves)
ሁለት እኩል አምፕሊቲዩድና ፍሪኩዌንሲ ያላቸው ሞገዶች በተቃራኒ አቅጣጫ ሲጓዙና ሲደራረቡ ረጊ ሞገድ ይፈጥራሉ፡
y_net = (2A sin kx) cos ωt (ቀመር 5.2.9)

ዋና ዋና ክፍሎች፡
፩. ኖዶች (Nodes)፡ በፍጹም የማይንቀሳቀሱ የዜሮ አምፕሊቲዩድ ነጥቦች ናቸው (sin kx = 0)። በሁለት ተከታታይ ኖዶች መካከል ያለው ርቀት λ/2 ነው።
፪. አንቲኖዶች (Antinodes)፡ በከፍተኛ አምፕሊቲዩድ (2A) የሚርገበገቡ ነጥቦች ናቸው። በኖድና በአጠገቡ ባለው አንቲኖድ መካከል ያለው ርቀት λ/4 ነው።

የታሰረ ገመድ ሁኔታ (L ርዝመት)፡
ሁለቱም ጫፎች የታሰሩ ኖዶች በመሆናቸው፡
λ_n = 2L / n (n = 1, 2, 3, ...)`
  },

  // Page 130 - Book page 122
  {
    pdfPageNumber: 130,
    bookPageLabel: '122',
    chapterNumber: 5,
    sectionRef: '5.2.3',
    titleEn: 'Harmonics and Normal Modes of a String',
    titleAm: 'ሃርሞኒኮች እና የገመድ የተፈጥሮ ሞዶች',
    subtopicEn: 'f_n = n * v / (2L) = n * f_1, Fundamental Frequency & String Instrument Pitch',
    subtopicAm: 'የሃርሞኒክ ፍሪኩዌንሲ ቀመር (fn = n f1) እና የሙዚቃ መሳሪያዎች ቃና',
    pageType: 'content',
    contentEn: `Normal Modes and Harmonic Frequencies:
The allowed natural frequencies of standing waves on a stretched string are:
f_n = v / λ_n = n (v / 2L) = (n / 2L) √(T / μ) ----------------------- (5.2.11)
where n = 1, 2, 3, ... are the harmonic numbers.

1. Fundamental Frequency (First Harmonic, n = 1):
   • λ₁ = 2L
   • f₁ = v / (2L)  [Lowest possible standing frequency, determines the pitch!]
2. Second Harmonic (First Overtone, n = 2):
   • λ₂ = L
   • f₂ = 2 (v / 2L) = 2 f₁
3. Third Harmonic (Second Overtone, n = 3):
   • λ₃ = 2L / 3
   • f₃ = 3 f₁

Musical Instruments:
When a violin, piano, or guitar string is plucked, it vibrates not only at its fundamental frequency f₁ but also simultaneously in higher integer harmonics (2f₁, 3f₁, 4f₁...). The relative mixture of these harmonics produces the unique timbre (tone quality) of the instrument!`,
    contentAm: `ሃርሞኒኮች እና ፍሪኩዌንሲዎች፡
በገመድ ላይ የሚፈጠሩ የተፈጥሮ ፍሪኩዌንሲዎች፡
f_n = n (v / 2L) = n f₁ (ቀመር 5.2.11)

፩. መሰረታዊ ፍሪኩዌንሲ (First Harmonic, n = 1)፡
f₁ = v / 2L (ዝቅተኛው ፍሪኩዌንሲ ሲሆን የሙዚቃውን ዋና ቃና ይወስናል)።
፪. ሁለተኛ ሃርሞኒክ (Second Harmonic, n = 2)፡
f₂ = 2 f₁
፫. ሦስተኛ ሃርሞኒክ (Third Harmonic, n = 3)፡
f₃ = 3 f₁

የሙዚቃ መሳሪያዎች፡
የጊታር ወይም የቫዮሊን ገመድ ሲመታ ከመሰረታዊ ድምፁ በተጨማሪ ከፍ ያሉ ሃርሞኒኮችን በሙሉ አዋህዶ ስለሚያወጣ እያንዳንዱ የሙዚቃ መሳሪያ የራሱ የሆነ ልዩ ጣዕመ-ድምፅ (Timbre) ይኖረዋል።`
  },

  // Page 131 - Book page 123
  {
    pdfPageNumber: 131,
    bookPageLabel: '123',
    chapterNumber: 5,
    sectionRef: '5.3',
    titleEn: 'Sound Waves & Speed in Air, Liquids, Solids',
    titleAm: 'የድምፅ ሞገዶች እና ፍጥነታቸው በአየር፣ ፈሳሽ እና ጠጣር ውስጥ',
    subtopicEn: '5.3. v = 331 + 0.6 T_C, v = sqrt(B / rho) in Fluids & Infrasound/Ultrasound',
    subtopicAm: '፭.፫ የድምፅ ፍጥነት በአየር (v = 331 + 0.6 TC) እና በፈሳሾች',
    pageType: 'content',
    contentEn: `5.3. Sound Waves
Sound is a longitudinal mechanical wave propagating through a compressible medium by compressions and rarefactions of molecules.

Audible Range of Hearing:
• Infrasound: f < 20 Hz (whales, elephants, earthquakes).
• Audible Sound: 20 Hz ≤ f ≤ 20,000 Hz (human hearing range).
• Ultrasound: f > 20,000 Hz (bats, medical diagnostic ultrasound, sonar).

Speed of Sound:
The speed of sound depends on the elastic and inertial properties of the medium:
v = √(Elastic property / Inertial property)

1. In Fluids (Liquids and Gases):
   v = √(B / ρ) ----------------------------------------------------- (5.3.1)
   where B is Bulk Modulus and ρ is density.
2. In Solid Rods:
   v = √(Y / ρ) ----------------------------------------------------- (5.3.2)
   where Y is Young's Modulus.
3. In Air as a Function of Temperature:
   v ≈ 331 m/s + (0.6 m/s·°C) T_C ----------------------------------- (5.3.3)
   At 0 °C: v ≈ 331 m/s; at 20 °C: v ≈ 343 m/s.
   Sound travels faster in liquids (~1500 m/s in water) and fastest in stiff solids (~5000 m/s in steel)!`,
    contentAm: `፭.፫ የድምፅ ሞገዶች (Sound Waves)
ድምፅ በሞለኪውሎች ጥድቅቆሽና ስስሶሽ የሚጓዝ ሎንጂቲዩዲናል ሜካኒካል ሞገድ ነው።

የድምፅ ፍሪኩዌንሲ ክፍፍል፡
• ኢንፍራሳውንድ (Infrasound)፡ f < 20 Hz (ዝሆኖች፣ የመሬት መንቀጥቀጥ)
• የሚሰማ ድምፅ (Audible sound)፡ 20 Hz እስከ 20,000 Hz (የሰው ልጅ የመስማት ክልል)
• አልትራሳውንድ (Ultrasound)፡ f > 20,000 Hz (የሌሊት ወፎች፣ የህክምና ሶናር)

የድምፅ ፍጥነት፡
፩. በፈሳሾች ውስጥ፡ v = √(B / ρ)
፪. በጠጣሮች ውስጥ፡ v = √(Y / ρ) (በብረት ውስጥ ~5000 ሜ/ሰ!)
፫. በአየር ውስጥ በሙቀት መጠን፡
v ≈ 331 + 0.6 TC (ቀመር 5.3.3)
በ 20 °C ላይ፡ v ≈ 343 ሜ/ሰከንድ ነው።`
  },

  // Page 132 - Book page 124
  {
    pdfPageNumber: 132,
    bookPageLabel: '124',
    chapterNumber: 5,
    sectionRef: '5.3.1',
    titleEn: 'Sound Intensity & The Decibel Scale',
    titleAm: 'የድምፅ ጥንካሬ እና የዴሲበል (Decibel) ስኬል',
    subtopicEn: '5.3.1. I = P / (4*pi*r^2), Decibels beta = 10 log10(I / I0) & Level Table',
    subtopicAm: '፭.፫.፩ የድምፅ ጥንካሬ (I = P/A) እና የዴሲበል ቀመር (β = 10 log(I/I₀))',
    pageType: 'table',
    contentEn: `5.3.1. Sound Intensity and Sound Level (Decibels)
Sound Intensity (I):
The rate of energy flow per unit area perpendicular to the direction of propagation:
I = P / A ----------------------------------------------------------- (5.3.4)
For an isotropic spherical source radiating power P uniformly:
I = P / (4π r²) ----------------------------------------------------- (5.3.5)
Intensity decreases inversely with the square of the distance (Inverse-Square Law).
Units: Watts per square meter (W/m²).
• Threshold of Hearing: I₀ = 1.0 × 10⁻¹² W/m² (faint sound a human ear can detect at 1 kHz).
• Threshold of Pain: I_pain ≈ 1.0 W/m² (a trillion times greater than I₀!).

Sound Intensity Level (Decibels, dB):
Because human ear perception is logarithmic, sound level is measured on the decibel (dB) scale:
β = 10 log₁₀(I / I₀) ------------------------------------------------ (5.3.6)

Table 5.1: Sound Levels of Common Sources:
• Threshold of Hearing: 0 dB (1.0 × 10⁻¹² W/m²)
• Rustling Leaves: 10 dB
• Whisper at 1 m: 20 dB
• Quiet Classroom / Library: 40 dB
• Normal Conversation at 1 m: 60 dB
• Heavy Street Traffic: 70–80 dB
• Vacuum Cleaner: 70 dB
• Power Lawn Mower: 90 dB (hearing damage with prolonged exposure!)
• Rock Concert / Siren: 110–120 dB
• Threshold of Pain / Jet Takeoff at 30 m: 120–140 dB`,
    contentAm: `፭.፫.፩ የድምፅ ጥንካሬ እና የዴሲበል ስኬል
የድምፅ ጥንካሬ (Intensity - I)፡
I = P / A = P / (4π r²) (ቀመር 5.3.5)
ርቀት በጨመረ ቁጥር የድምፅ ጥንካሬ በርቀት ካሬ ይቀንሳል (Inverse-square law)።
የመስማት መጀመሪያ ደፍ፡ I₀ = 1.0 × 10⁻¹² W/m²።

የዴሲበል ቀመር (Decibels - dB)፡
የሰው ጆሮ ምላሽ ሎጋሪዝማዊ በመሆኑ ድምፅ በዴሲበል ይሰላል፡
β = 10 log₁₀(I / I₀) (ቀመር 5.3.6)

ሰንጠረዥ 5.1፡ የተለመዱ የድምፅ ደረጃዎች፡
• ዝቅተኛ የመስማት ደፍ፡ 0 dB
• የሹክሹክታ ድምፅ፡ 20 dB
• መደበኛ ጭውውት፡ 60 dB
• ከባድ የመኪና ትራፊክ፡ 80 dB
• የሮክ ኮንሰርት፡ 110 dB
• ከፍተኛ የህመም ደፍ (የጄት አውሮፕላን)፡ 120–140 dB።`,
    tables: [
      {
        id: 'phys-tbl-5-1',
        caption: 'Table 5.1: Sound Intensity Levels in Decibels (dB)',
        headers: ['Sound Source', 'Intensity I (W/m²)', 'Sound Level beta (dB)'],
        rows: [
          ['Threshold of Hearing', '1.0 × 10⁻¹²', '0'],
          ['Rustling Leaves', '1.0 × 10⁻¹¹', '10'],
          ['Whisper at 1 m', '1.0 × 10⁻¹⁰', '20'],
          ['Quiet Library', '1.0 × 10⁻⁸', '40'],
          ['Normal Conversation', '1.0 × 10⁻⁶', '60'],
          ['Heavy Traffic', '1.0 × 10⁻⁴', '80'],
          ['Lawn Mower', '1.0 × 10⁻³', '90'],
          ['Rock Concert', '1.0 × 10⁻¹', '110'],
          ['Threshold of Pain', '1.0', '120'],
          ['Jet Engine at 30 m', '1.0 × 10²', '140']
        ]
      }
    ]
  },

  // Page 133 - Book page 125
  {
    pdfPageNumber: 133,
    bookPageLabel: '125',
    chapterNumber: 5,
    sectionRef: '5.3.2',
    titleEn: 'Standing Sound Waves in Open and Closed Pipes',
    titleAm: 'ረጊ የድምፅ ሞገዶች በክፍት እና በዝግ ቧንቧዎች ውስጥ',
    subtopicEn: '5.3.2. Open Pipe (f_n = n v / 2L) vs Closed Pipe (f_n = n v / 4L, odd n)',
    subtopicAm: '፭.፫.፪ በሁለቱም በኩል ክፍት ቧንቧ እና በአንድ በኩል ዝግ ቧንቧ ሃርሞኒኮች',
    pageType: 'content',
    contentEn: `5.3.2. Standing Sound Waves in Air Columns
Musical wind instruments (flutes, organs, clarinets) produce sound via standing waves in vibrating air columns.
• An open end of a pipe forms a displacement ANTINODE (air molecules free to move).
• A closed end forms a displacement NODE (molecules hit the barrier and cannot move).

1. Pipe Open at Both Ends (Open Pipe):
Antinodes at both ends:
L = n (λ_n / 2)  =>  λ_n = 2L / n
Harmonic frequencies:
f_n = n (v / 2L) = n f₁  (n = 1, 2, 3, 4, ...) --------------------- (5.3.7)
An open pipe produces ALL integer harmonics (fundamental, 2nd, 3rd, 4th...).

2. Pipe Closed at One End, Open at the Other (Closed Pipe):
Node at closed end, antinode at open end:
L = n (λ_n / 4)  =>  λ_n = 4L / n
Harmonic frequencies:
f_n = n (v / 4L) = n f₁  (n = 1, 3, 5, 7, ... ONLY!) --------------- (5.3.8)
A closed pipe produces ONLY ODD harmonics! Even harmonics are completely absent.
Also, the fundamental frequency of a closed pipe is HALF that of an open pipe of the same length (it sounds an octave lower).`,
    contentAm: `፭.፫.፪ ረጊ የድምፅ ሞገዶች በቧንቧዎች ውስጥ
የትንፋሽ ሙዚቃ መሳሪያዎች (ዋሽንት፣ ክላሪኔት፣ ትራምፔት) በውስጣቸው ባለው አየር ረጊ ሞገድ ፈጥረው ድምፅ ያመነጫሉ፡
• ክፍት አፍ፡ አንቲኖድ (አየር በነፃነት ይርገበገባል)፤
• ዝግ አፍ፡ ኖድ (አየር መንቀሳቀስ አይችልም)።

፩. በሁለቱም በኩል ክፍት ቧንቧ (Open Pipe)፡
ሁለቱም አፎች አንቲኖድ ናቸው፡
f_n = n (v / 2L) (n = 1, 2, 3, 4, ...) (ቀመር 5.3.7)
ሁሉንም ኢንቲጀር ሃርሞኒኮች ሙሉ በሙሉ ያወጣል!

፪. በአንድ በኩል ዝግ ቧንቧ (Closed Pipe)፡
አንደኛው ጫፍ ኖድ አንደኛው አንቲኖድ ነው፡
f_n = n (v / 4L) (n = 1, 3, 5, 7, ... ጎዶሎ ብቻ!) (ቀመር 5.3.8)
ጎዶሎ ሃርሞኒኮችን ብቻ ያወጣል! እኩል ርዝመት ላላቸው ቧንቧዎች የዝግ ቧንቧ መነሻ ድምፅ ከክፍት ቧንቧ በግማሽ ዝቅ ያለ ቃና (Octave lower) አለው።`
  },

  // Page 134 - Book page 126
  {
    pdfPageNumber: 134,
    bookPageLabel: '126',
    chapterNumber: 5,
    sectionRef: '5.3.3',
    titleEn: 'Beats: Interference in Time',
    titleAm: 'ቢትስ (Beats)፡ የድምፅ በጊዜ ሂደት መዋከብ',
    subtopicEn: '5.3.3. f_beat = |f1 - f2|, Tuning Fork Example & Waveform Modulation',
    subtopicAm: '፭.፫.፫ የቢትስ ፍሪኩዌንሲ (f_beat = |f1 - f2|) እና የሙዚቃ መሳሪያ ማስተካከል',
    pageType: 'content',
    contentEn: `5.3.3. Beats
Beats is the periodic variation in sound intensity (loudness) heard when two sound waves of slightly different frequencies f₁ and f₂ interfere with each other.

Mathematical Analysis:
Consider two waves of equal amplitude A at a single listening point:
s₁(t) = A cos(2π f₁ t)
s₂(t) = A cos(2π f₂ t)
Using the sum-to-product identity cos α + cos β = 2 cos((α - β)/2) cos((α + β)/2):
s_net(t) = [2A cos(2π ((f₁ - f₂) / 2) t)] cos(2π ((f₁ + f₂) / 2) t) - (5.3.9)

Beat Frequency (f_beat):
The listener hears an average pitch with frequency f_avg = (f₁ + f₂) / 2, but its loudness pulsates with a beat frequency equal to the DIFFERENCE between the two frequencies:
f_beat = |f₁ - f₂| --------------------------------------------------- (5.3.10)

Piano Tuning Application:
A piano tuner strikes a standard tuning fork (e.g., 440 Hz) simultaneously with the piano string. If they hear 3 beats per second (f_beat = 3 Hz), the string frequency is either 437 Hz or 443 Hz. The tuner tightens or loosens the string tension until the beats completely vanish (f_beat = 0 Hz), indicating perfect unison!`,
    contentAm: `፭.፫.፫ ቢትስ (Beats)
ሁለት ተቀራራቢ ፍሪኩዌንሲ ያላቸው የድምፅ ሞገዶች ሲደራረቡ የድምፁ ጎልቶና ቀጥኖ መለዋወጥ ቢትስ ይባላል።

የቢትስ ፍሪኩዌንሲ ቀመር፡
f_beat = |f₁ - f₂| (ቀመር 5.3.10)
አማካይ የሚሰማው ድምፅ፡ f_avg = (f1 + f2) / 2 ነው።

ተግባራዊ ጥቅም፡
ፒያኖ ወይም ጊታር አስተካካዮች 440 Hz ከሚያወጣ የድምፅ ሹካ (Tuning fork) ጋር ገመዱን በአንድ ላይ ይመቱታል። በሰከንድ 3 ጊዜ የድምፅ መዋከብ (3 beats) ከሰሙ የገመዱ ድምፅ 437 ወይም 443 Hz መሆኑን አውቀው ድምፁ ፍጹም እስኪረጋጋና ቢትሱ ዜሮ እስኪሆን ድረስ ገመዱን ይወጥራሉ።`
  },

  // Page 135 - Book page 127
  {
    pdfPageNumber: 135,
    bookPageLabel: '127',
    chapterNumber: 5,
    sectionRef: '5.3.4',
    titleEn: 'The Doppler Effect: Physical Origin',
    titleAm: 'የዶፕለር ውጤት (The Doppler Effect)፡ አካላዊ አመጣጥ',
    subtopicEn: '5.3.4. Apparent Frequency Shift Due to Relative Motion of Source and Observer',
    subtopicAm: '፭.፫.፬ በአድማጭ እና በድምፅ ምንጭ አንጻራዊ እንቅስቃሴ ምክንያት የሚፈጠር የፍሪኩዌንሲ ለውጥ',
    pageType: 'content',
    contentEn: `5.3.4. The Doppler Effect
Austrian physicist Christian Doppler (1803–1853) explained:
"The Doppler effect is the observed change in frequency of a wave whenever there is relative motion between the source of the waves and the observer."
Everyday experience: As an ambulance approaches you with its siren wailing, the pitch sounds distinctly HIGHER than normal; as it rushes past and recedes, the pitch drops noticeably to a LOWER frequency.

Physical Mechanism:
1. Moving Source:
   As the sound source moves forward at speed v_s, each successive wavefront is emitted closer to the previous one in front of the source. The wavefronts are bunched closer together:
   λ' = λ - v_s T = λ (1 - v_s / v)  [Wavelength decreases in front!]
   Since v = λ' f', the observed frequency increases:
   f' = v / λ' = f / (1 - v_s / v) > f.
   Behind the source, wavefronts are spaced farther apart (λ' > λ), so observed frequency decreases:
   f' = f / (1 + v_s / v) < f.`,
    contentAm: `፭.፫.፬ የዶፕለር ውጤት (The Doppler Effect)
ክርስቲያን ዶፕለር እንዳረጋገጠው፡
በድምፅ ምንጩ እና በአድማጩ መካከል አንጻራዊ እንቅስቃሴ ሲኖር የሚሰማው የድምፅ ፍሪኩዌንሲ (Pitch) መለዋወጥ የዶፕለር ውጤት ይባላል።
የአምቡላንስ መኪና በፍጥነት ወደ እኛ ሲቀርብ ሲረኑ ከፍተኛ ቃና (High pitch) ይኖረዋል፤ አልፎን ሲሄድ ደግሞ ወዲያውኑ ድምፁ ይቀጥናል።

አካላዊ መንስኤ፡
የድምፅ ምንጩ ወደ ፊት ሲጓዝ የሚያመነጫቸው ሞገዶች ከፊቱ ስለሚጨመቁ የሞገድ ርዝመታቸው ያጥራል (λ ይቀንሳል)፤ ፍጥነቱ ቋሚ በመሆኑ የሚሰማው ፍሪኩዌንሲ ይጨምራል (f' > f)። ወደ ኋላው ደግሞ ሞገዶቹ ስለሚራራቁ ፍሪኩዌንሲው ይቀንሳል (f' < f)።`
  },

  // Page 136 - Book page 128
  {
    pdfPageNumber: 136,
    bookPageLabel: '128',
    chapterNumber: 5,
    sectionRef: '5.3.4',
    titleEn: 'Doppler Effect General Equation & Sign Rules',
    titleAm: 'አጠቃላይ የዶፕለር ቀመር እና የምልክት ደንቦች',
    subtopicEn: "f' = f * (v +- v_o) / (v -+ v_s) & Moving Observer vs Moving Source",
    subtopicAm: 'አጠቃላይ ቀመር እና የአድማጭ እንዲሁም የድምፅ ምንጭ ምልክት ስምምነት',
    pageType: 'content',
    contentEn: `General Doppler Effect Formula:
Combining relative motions of both observer and source through a stationary medium:
f' = f [(v ± v_o) / (v ∓ v_s)] --------------------------------------- (5.3.11)
where:
• f' = observed frequency
• f = source emission frequency
• v = speed of sound in the medium (~343 m/s in air)
• v_o = speed of the observer relative to the medium
• v_s = speed of the source relative to the medium.

Sign Convention Rule:
Always think about whether the motion causes an INCREASE or DECREASE in frequency:
• Numerator (Observer motion v_o):
  - Use (+) if the observer moves TOWARD the source (increases f').
  - Use (-) if the observer moves AWAY from the source (decreases f').
• Denominator (Source motion v_s):
  - Use (-) if the source moves TOWARD the observer (increases f').
  - Use (+) if the source moves AWAY from the observer (decreases f').

Mnemonic: "Toward is positive in the numerator, negative in the denominator!"`,
    contentAm: `አጠቃላይ የዶፕለር ቀመር፡
አድማጭም ምንጭም በአንድ ጊዜ ሲንቀሳቀሱ፡
f' = f [(v ± v_o) / (v ∓ v_s)] (ቀመር 5.3.11)
• f' = የሚሰማው ፍሪኩዌንሲ፤ f = ትክክለኛው ፍሪኩዌንሲ፤ v = የድምፅ ፍጥነት (343 m/s)።

የምልክት መምረጫ ደንቦች፡
• አድማጭ ወደ ምንጩ ሲቀርብ፡ ላዩ ላይ (+)፤ ሲርቅ፡ (-)።
• ምንጩ ወደ አድማጩ ሲቀርብ፡ ታቹ ላይ (-)፤ ሲርቅ፡ (+)።
መመሪያ፡ "መቀራረብ ፍሪኩዌንሲን ስለሚጨምር ላዩ (+) ታቹ ደግሞ (-) ይሆናል!"`
  },

  // Page 137 - Book page 129
  {
    pdfPageNumber: 137,
    bookPageLabel: '129',
    chapterNumber: 5,
    sectionRef: '5.3.4',
    titleEn: 'Doppler Example & Shock Waves (Sonic Boom)',
    titleAm: 'የዶፕለር ስሌት ምሳሌ እና ሾክ ሞገድ (Sonic Boom)',
    subtopicEn: 'Siren Problem & Supersonic Motion Mach Number M = v_s / v, Cone Angle',
    subtopicAm: 'የፖሊስ ሳይረን ምሳሌ እና የሱፐርሶኒክ ፍጥነት ማክ ቁጥር (M = v_s/v)',
    pageType: 'content',
    contentEn: `Example (Police Siren):
A police car siren emits sound at f = 400 Hz. The speed of sound in air is v = 340 m/s.
(a) What frequency is heard by a stationary pedestrian as the police car approaches at 34 m/s?
(b) What frequency is heard as the police car speeds away at 34 m/s?

Solution:
Here v_o = 0, v_s = 34 m/s, v = 340 m/s.
(a) Approaching (use - sign in denominator):
    f' = f [v / (v - v_s)] = 400 Hz [340 / (340 - 34)] = 400 (340 / 306) = 400 (1.111) ≈ 444 Hz.
(b) Receding (use + sign in denominator):
    f'' = f [v / (v + v_s)] = 400 Hz [340 / (340 + 34)] = 400 (340 / 374) = 400 (0.909) ≈ 364 Hz.

Shock Waves and Sonic Booms:
If a source moves faster than the speed of sound (v_s > v, Supersonic speed):
The spherical wavefronts overlap to form a V-shaped conical wavefront called a Shock Wave.
Mach Number (M):
M = v_s / v --------------------------------------------------------- (5.3.12)
Mach Angle (θ):
sinθ = v / v_s = 1 / M ---------------------------------------------- (5.3.13)
When the conical pressure wave passes over an observer on the ground, a loud explosive blast called a Sonic Boom is heard!`,
    contentAm: `የተሰራ ምሳሌ (የፖሊስ መኪና ሳይረን)፡
f = 400 Hz፣ v = 340 ሜ/ሰ፣ የመኪና ፍጥነት vs = 34 ሜ/ሰ፡
ሀ. መኪናው ወደ ቆመ ሰው ሲቀርብ፡
f' = 400 × [340 / (340 - 34)] = 400 × (340/306) = 444 Hz (ድምፁ ወፍሮ ይሰማል)።
ለ. አልፎት ሲርቅ፡
f'' = 400 × [340 / (340 + 34)] = 400 × (340/374) = 364 Hz (ድምፁ ቀጥኖ ይሰማል)።

ሾክ ሞገድ እና ሶኒክ ቡም (Sonic Boom)፡
አውሮፕላን ከድምፅ ፍጥነት በላይ ሲበር (Supersonic፣ vs > v)፡
የማክ ቁጥር፡ M = vs / v
የኮን አንግል፡ sinθ = v / vs = 1 / M
ይህ የተጨመቀ የኮን ቅርጽ ያለው የአየር ሞገድ መሬት ላይ ባሉ ሰዎች ላይ ሲያልፍ እንደ ፈንጂ የሚጮኽ ከፍተኛ ድምፅ (Sonic Boom) ይሰማል!`
  },

  // Page 138 - Book page 130
  {
    pdfPageNumber: 138,
    bookPageLabel: '130',
    chapterNumber: 5,
    sectionRef: '5.3.4',
    titleEn: 'Doppler Shift Activities & Astronomical Redshift',
    titleAm: 'የዶፕለር መልመጃዎች እና የከዋክብት ቀይ ፈረቃ (Redshift)',
    subtopicEn: 'Moving Observer Problems & Doppler Effect in Light: Hubble Law',
    subtopicAm: 'የሚንቀሳቀስ አድማጭ ስሌት እና በብርሃን ላይ የሚታይ ዶፕለር (የሀብል ህግ)',
    pageType: 'content',
    contentEn: `Activity on Doppler Shift:
A passenger in a car driving at 25 m/s toward a church bell tower hears the bell ringing at 520 Hz. If the speed of sound in air is 340 m/s, what is the actual fundamental frequency of the church bell?
Solution:
Source is stationary (v_s = 0), observer approaches at v_o = 25 m/s:
f' = f [(v + v_o) / v]  =>  f = f' [v / (v + v_o)]
f = 520 Hz [340 / (340 + 25)] = 520 (340 / 365) = 484 Hz.

Doppler Effect for Light and Astronomy:
Light also experiences a Doppler effect:
• Blue Shift: When a star or galaxy moves TOWARD Earth, the observed light is shifted to higher frequencies (shorter wavelengths, toward the blue/violet end of the spectrum).
• Red Shift: When a celestial body moves AWAY from Earth, light is shifted to lower frequencies (longer wavelengths, toward the red end).

Hubble's Discovery:
In 1929, Edwin Hubble discovered that light from almost all distant galaxies is systematically REDSHIFTED. Furthermore, the redshift is proportional to distance (Hubble's Law: v = H₀ d). This provided the first observational proof that the UNIVERSE IS EXPANDING!`,
    contentAm: `የክፍል ውስጥ መልመጃ፡
በ 25 ሜ/ሰ ወደ ቤተክርስቲያን ደወል የሚጓዝ መንገደኛ ደወሉን በ 520 Hz ሰማው፤ የድምፅ ፍጥነት 340 ሜ/ሰ ቢሆን የደወሉ እውነተኛ ፍሪኩዌንሲ ስንት ነው?
f = 520 × [340 / (340 + 25)] = 484 Hz።

የዶፕለር ውጤት በብርሃንና በሥነ-ፈለክ (Astronomy)፡
ብርሃንም የዶፕለር ውጤት ያሳያል፡
• ሰማያዊ ፈረቃ (Blue shift)፡ ኮከቦች ወደ እኛ ሲቀርቡ ብርሃናቸው ወደ ሰማያዊ አጭር ሞገድ ያደላል።
• ቀይ ፈረቃ (Red shift)፡ ኮከቦች ከእኛ ሲርቁ ብርሃናቸው ወደ ቀይ ረጅም ሞገድ ያደላል።
ኤድዊን ሀብል በ1929 ዓ.ም ሩቅ ያሉ ጋላክሲዎች በሙሉ ቀይ ፈረቃ እንደሚያሳዩና አጽናፈ-ዓለም በየጊዜው እየሰፋ መሆኑን ያረጋገጠው በዚህ የዶፕለር መርህ ነው!`
  },

  // Page 139 - Book page 131
  {
    pdfPageNumber: 139,
    bookPageLabel: '131',
    chapterNumber: 5,
    sectionRef: '5.4',
    titleEn: 'Optics Introduction: Nature of Light & EM Spectrum',
    titleAm: 'የኦፕቲክስ መግቢያ፡ የብርሃን ተፈጥሮ እና የኤሌክትሮማግኔቲክ ስፔክትረም',
    subtopicEn: '5.4. Wave-Particle Duality, Speed c = 3.00x10^8 m/s & Visible Wavelengths',
    subtopicAm: '፭.፬ የሞገድ-ቅንጣት ሁለንተናዊነት፣ የብርሃን ፍጥነት እና የሚታይ ብርሃን (400–700 nm)',
    pageType: 'content',
    contentEn: `5.4. Optics: The Nature and Behavior of Light
Optics is the study of the behavior, properties, and applications of light and its interactions with matter.

The Nature of Light:
Throughout history, the nature of light was fiercely debated:
• Isaac Newton proposed the Corpuscular Theory: light consists of streams of tiny particles.
• Christian Huygens proposed the Wave Theory: light is a longitudinal wave.
• James Clerk Maxwell (1865) proved light is an Electromagnetic Wave composed of oscillating electric and magnetic fields traveling at:
  c = 1 / √(ε₀ μ₀) = 3.00 × 10⁸ m/s (in vacuum).
• Modern Quantum Physics (Einstein, 1905): Light exhibits Wave-Particle Duality. It behaves as a wave during propagation and as discrete particle-like packets of energy called Photons (E = h f) when interacting with matter.

The Electromagnetic Spectrum:
• Radio waves (λ > 1 m)
• Microwaves (1 mm to 1 m)
• Infrared radiation (700 nm to 1 mm)
• Visible Light: 400 nm (violet) to 700 nm (red)
• Ultraviolet light (10 nm to 400 nm)
• X-rays (0.01 nm to 10 nm)
• Gamma rays (λ < 0.01 nm)

Geometrical (Ray) Optics:
When light interacts with objects much larger than its wavelength (λ ~ 500 nm), light travels in straight lines called Rays.`,
    contentAm: `፭.፬ ኦፕቲክስ፡ የብርሃን ተፈጥሮ እና ባህሪያት (Nature of Light)
ኦፕቲክስ ስለ ብርሃን ባህሪ፣ እንቅስቃሴ እና ከቁስ ጋር ስላለው መስተጋብር የሚያጠና የፊዚክስ ዘርፍ ነው።

የብርሃን ተፈጥሮ፡
• አይዛክ ኒውተን፡ ብርሃን የጥቃቅን ቅንጣቶች (Corpuscles) ፍሰት ነው አለ።
• ማክስዌል፡ ብርሃን ኤሌክትሪክ እና ማግኔቲክ መስኮች የተጣመሩበት ኤሌክትሮማግኔቲክ ሞገድ መሆኑን አረጋገጠ (ፍጥነቱ c = 3×10⁸ m/s)።
• አልበርት አንስታይን፡ ብርሃን ሁለቱንም ባህሪ በአንድ ላይ ይዟል (Wave-Particle Duality)፤ ሲጓዝ እንደ ሞገድ፣ ሲያርፍ ደግሞ እንደ ፎቶን (Photon) ቅንጣት ይሰራል (E = hf)።

የሚታይ ብርሃን ስፔክትረም፡
ከ 400 nm (ቫዮሌት) እስከ 700 nm (ቀይ)።
የሬይ ኦፕቲክስ (Geometrical Optics)፡ ብርሃን ቀጥተኛ በሆኑ ጨረሮች (Rays) እንደሚጓዝ በማሰብ ነጸብራቅንና ስብራትን ያጠናል።`
  }
];
