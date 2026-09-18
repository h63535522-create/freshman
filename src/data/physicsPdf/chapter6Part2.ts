import { OfficialPdfPage } from '../geographyPdf/types';

export const physicsChapter6Part2Pages: OfficialPdfPage[] = [
  // Page 185 - Book page 177
  {
    pdfPageNumber: 185,
    bookPageLabel: '177',
    chapterNumber: 6,
    sectionRef: '6.3',
    titleEn: 'Magnetism & Magnetic Force on Moving Charges',
    titleAm: 'ማግኔቲዝም እና በሚንቀሳቀስ ቻርጅ ላይ የሚያርፍ ማግኔቲክ ጉልበት',
    subtopicEn: '6.3. Lorentz Force F_B = q (v x B), Magnitude F_B = |q| v B sin(theta) & RHR',
    subtopicAm: '፮.፫ የሎሬንትዝ ጉልበት (F_B = q v B sinθ) እና የቀኝ እጅ መመሪያ (Right-Hand Rule)',
    pageType: 'content',
    contentEn: `6.3. Magnetism and Magnetic Fields
Every magnet has two poles: a North (N) pole and a South (S) pole.
• Like magnetic poles REPEL; opposite magnetic poles ATTRACT.
• Isolated magnetic poles (magnetic monopoles) have NEVER been found to exist in nature. Breaking a bar magnet in half produces two smaller, complete bar magnets, each with its own N and S pole!

Magnetic Field (B⃗):
A magnetic field B exists in the region of space surrounding any permanent magnet or electric current.
SI Unit of Magnetic Field: Tesla (T):
1 Tesla = 1 Newton per Ampere-meter (1 T = 1 N/(A·m)).
Non-SI unit: Gauss (1 G = 10⁻⁴ T). Earth's magnetic field at surface ≈ 0.5 G = 5 × 10⁻⁵ T.

Magnetic Force on a Moving Charged Particle:
A magnetic field exerts NO force on a stationary charge!
When a particle of charge q moves with velocity v⃗ through a magnetic field B⃗, the magnetic force is:
F⃗_B = q (v⃗ × B⃗) --------------------------------------------------- (6.3.1)
Magnitude:
F_B = |q| v B sinθ -------------------------------------------------- (6.3.2)
where θ is the angle between velocity v⃗ and magnetic field B⃗.
• F_B = 0 when moving parallel or anti-parallel to the field (θ = 0° or 180°).
• F_B is MAXIMUM when moving perpendicular to the field (θ = 90°).

Right-Hand Rule (RHR):
Point the fingers of your right hand along velocity v⃗, curl them toward magnetic field B⃗; your outstretched thumb points in the direction of F⃗_B for a POSITIVE charge (for a negative charge, reverse the direction!).`,
    contentAm: `፮.፫ ማግኔቲዝም እና ማግኔቲክ መስክ (Magnetism & Magnetic Fields)
ማንኛውም ማግኔት ሁለት ጫፎች አሉት፡ ሰሜን (N) እና ደቡብ (S)።
• ተመሳሳይ ጫፎች ይገፋፋሉ፤ ተቃራኒ ጫፎች ይሳሳባሉ።
• ነጠላ ማግኔቲክ ጫፍ (Monopole) በተፈጥሮ በፍጹም አይገኝም፤ ማግኔትን በስንጥቀው ቁጥር ሁለቱም ጫፎች እንደገና ይፈጠራሉ።

ማግኔቲክ መስክ (B)፡
አሃዱ፡ ቴስላ (Tesla - T)፤ 1 T = 10,000 ጋውስ (Gauss)። የምድር ማግኔቲክ መስክ ~0.5 ጋውስ ነው።

በሚንቀሳቀስ ቻርጅ ላይ የሚያርፍ ጉልበት፡
የቆመ ቻርጅ በማግኔቲክ መስክ ምንም ጉልበት አያገኝም! የሚንቀሳቀስ ቻርጅ ግን ጉልበት ይገጥመዋል፡
F_B = q (v⃗ × B⃗) (ቀመር 6.3.1)
መጠኑ፡ F_B = |q| v B sinθ (ቀመር 6.3.2)
• ቻርጁ ከመስኩ ጋር በትይዩ ሲጓዝ (θ = 0) ጉልበቱ ዜሮ ነው፤
• በ90 ዲግሪ ሲጓዝ ጉልበቱ ከፍተኛ ይሆናል።

የቀኝ እጅ መመሪያ (Right-Hand Rule)፡
ጣቶች ወደ ፍጥነት (v) ተዘርግተው ወደ ማግኔቲክ መስክ (B) ሲታጠፉ አውራ ጣት ወደ ጉልበቱ (F_B) ያመለክታል (ለኔጌቲቭ ቻርጅ አቅጣጫው ይገለበጣል)።`
  },

  // Page 186 - Book page 178
  {
    pdfPageNumber: 186,
    bookPageLabel: '178',
    chapterNumber: 6,
    sectionRef: '6.3',
    titleEn: 'Circular Motion in Magnetic Fields: Cyclotron Frequency',
    titleAm: 'ክባዊ ጉዞ በማግኔቲክ መስክ እና የሳይክሎትሮን ፍሪኩዌንሲ',
    subtopicEn: 'Radius r = m v / (q B), Period T = 2*pi*m / (q B) & Helical Trajectory',
    subtopicAm: 'የክብ ራዲየስ (r = mv/qB)፣ ፔሬድ (T = 2πm/qB) እና የሄሊክስ ቅርጽ ጉዞ',
    pageType: 'content',
    contentEn: `Motion of a Charged Particle in a Uniform Magnetic Field:
Because the magnetic force F⃗_B = q(v⃗ × B⃗) is ALWAYS PERPENDICULAR to velocity v⃗:
1. The magnetic force does ZERO work on the particle: W = ∫ F⃗_B · ds⃗ = 0.
2. The kinetic energy and SPEED of the particle remain strictly CONSTANT!
3. The magnetic force changes ONLY the direction of motion, acting as a centripetal force:
   F_B = m a_c  =>  |q| v B = m (v² / r)
Solving for the radius of the circular orbit (Cyclotron Radius):
r = m v / (|q| B) --------------------------------------------------- (6.3.3)

Cyclotron Frequency and Period:
Angular frequency (Cyclotron frequency, ω):
ω = v / r = |q| B / m ----------------------------------------------- (6.3.4)
Frequency (f):
f = ω / (2π) = |q| B / (2π m) --------------------------------------- (6.3.5)
Period of revolution (T):
T = 1 / f = 2π m / (|q| B) ------------------------------------------ (6.3.6)
ASTONISHING FACT: The period T and frequency f are completely INDEPENDENT of the particle's speed and orbital radius! Fast particles simply travel in larger circles in the exact same time!

Helical Path:
If velocity v⃗ has a component parallel to B⃗, the particle traces a helical (corkscrew) path along the magnetic field lines. This traps charged solar particles in Earth's Van Allen radiation belts, creating Northern and Southern Lights (Auroras)!`,
    contentAm: `ክባዊ ጉዞ በማግኔቲክ መስክ ውስጥ፡
ማግኔቲክ ጉልበት ለፍጥነቱ ምንጊዜም ቀጤ-ነክ በመሆኑ፡
፩. ማግኔቲክ ጉልበት በፍጹም ስራ አይሰራም (W = 0)!
፪. የቅንጣቱ ፍጥነትና ኪነቲክ ኃይል ቋሚ ሆኖ ይቀራል፤
፫. ጉልበቱ አቅጣጫውን ብቻ በማዞር ክባዊ ጉዞ (Centripetal force) ያስከትላል፡
|q| v B = m v² / r
የክቡ ራዲየስ፡
r = m v / (|q| B) (ቀመር 6.3.3)

የሳይክሎትሮን ፔሬድ፡
T = 2π m / (|q| B) (ቀመር 6.3.6)
አስገራሚ እውነታ፡ ፔሬዱ እና ፍሪኩዌንሲው በቅንጣቱ ፍጥነትና ራዲየስ ላይ አይመሰረቱም! ፈጣን ቅንጣት ሰፋ ያለ ክብ ሰርቶ በተመሳሳይ ሰከንድ ውስጥ ይዞራል!

የሄሊክስ ጉዞ እና አውሮራ (Aurora)፡
ቅንጣቶች ከመስኩ ጋር አንግል ሲኖራቸው እንደ ጠመዝማዛ (Helix) ይጓዛሉ። ከፀሐይ የሚመጡ ቻርጆች በምድር ማግኔት ተይዘው በሰሜንና ደቡብ ዋልታዎች ውብ የሰማይ ብርሃናት (አውሮራ) ይፈጥራሉ።`
  },

  // Page 187 - Book page 179
  {
    pdfPageNumber: 187,
    bookPageLabel: '179',
    chapterNumber: 6,
    sectionRef: '6.3',
    titleEn: 'Velocity Selector, Mass Spectrometer & Thomsons Experiment',
    titleAm: 'የፍጥነት መራጭ፣ ማስ ስፔክትሮሜትር እና የቶምሰን ሙከራ',
    subtopicEn: 'v = E / B, e/m Ratio Discovery (1897) & Isotope Mass Separation',
    subtopicAm: 'የፍጥነት መራጭ ቀመር v = E/B፣ የኤሌክትሮን መገኘት እና የአይሶቶፕ መለያ',
    pageType: 'content',
    contentEn: `Technological Applications of Charged Particle Deflection:

1. Velocity Selector:
Charged particles pass through a region with crossed perpendicular electric field E⃗ and magnetic field B⃗.
The upward electric force F_E = q E opposes the downward magnetic force F_B = q v B.
When forces balance:
q E = q v B  =>  v = E / B ------------------------------------------ (6.3.7)
Only particles with this EXACT speed pass straight through undeflected!

2. J.J. Thomson's e/m Experiment (1897):
English physicist J.J. Thomson used crossed electric and magnetic fields to measure the charge-to-mass ratio of cathode ray particles:
e / m = 1.76 × 10¹¹ C/kg.
This ratio was ~1800 times larger than that of a hydrogen ion, proving the existence of the first subatomic particle: the ELECTRON!

3. Mass Spectrometer:
Ions of charge q filtered to speed v = E/B enter a uniform magnetic field B₀ and bend in semi-circles:
r = m v / (q B₀)  =>  m = (q B₀ r) / v = (q B₀ B / E) r ------------- (6.3.8)
By measuring the deflection diameter 2r on photographic film, the exact masses of different isotopes (e.g., Uranium-235 vs Uranium-238, Carbon-12 vs Carbon-14) are measured with extreme precision!`,
    contentAm: `የተግባራዊ ቴክኖሎጂ አጠቃቀሞች፡

፩. የፍጥነት መራጭ (Velocity Selector)፡
የኤሌክትሪክ መስክ (E) እና የማግኔቲክ መስክ (B) ተቃራኒ ጉልበት ሲያደርጉ፡
q E = q v B => v = E / B (ቀመር 6.3.7)
ይህ ትክክለኛ ፍጥነት ያላቸው ቅንጣቶች ብቻ ሳይታጠፉ ቀጥ ብለው ያልፋሉ!

፪. የጄ.ጄ. ቶምሰን ሙከራ (1897 ዓ.ም)፡
ቶምሰን የኤሌክትሮንን የቻርጅ-ለ-ክብደት ምጣኔ (e/m = 1.76 × 10¹¹ C/kg) በማስላት ኤሌክትሮን የመጀመሪያው ንዑስ-አቶሚክ ቅንጣት መሆኑን አረጋገጠ።

፫. ማስ ስፔክትሮሜትር (Mass Spectrometer)፡
የተለያዩ ክብደት ያላቸውን አይሶቶፖች (Isotopes) ለመለየት ያገለግላል፡
m = (q B₀ B / E) r (ቀመር 6.3.8)
በማግኔት ተሰብረው በሚሰሩት ክብ ራዲየስ (r) አማካኝነት የአቶሞች ክብደት በከፍተኛ ጥንቃቄ ይለካል።`
  },

  // Page 188 - Book page 180
  {
    pdfPageNumber: 188,
    bookPageLabel: '180',
    chapterNumber: 6,
    sectionRef: '6.3',
    titleEn: 'Magnetic Force on Current Wires & Motor Torque',
    titleAm: 'በተሸካሚ ሽቦ ላይ የሚያርፍ ማግኔቲክ ጉልበት እና የሞተር ቶርክ',
    subtopicEn: 'F = I (L x B) & Torque on Current Loop tau = mu x B with mu = I A [A*m^2]',
    subtopicAm: 'ቀመር F = I L B sinθ እና የኤሌክትሪክ ሞተር የማዞሪያ ቶርክ τ = μ × B',
    pageType: 'content',
    contentEn: `Magnetic Force on a Current-Carrying Conductor:
Since an electric current is a collection of moving charges, a magnetic field exerts a net lateral force on any current-carrying wire:
F⃗ = I (L⃗ × B⃗) ------------------------------------------------------ (6.3.9)
Magnitude:
F = I L B sinθ ------------------------------------------------------ (6.3.10)
where L is the length of wire in the field, and θ is the angle between current direction and field B⃗.
• Direction determined by the Right-Hand Rule: point fingers along current I, curl toward B⃗, thumb gives force F⃗.

Torque on a Current Loop (Electric Motor Principle):
Consider a rectangular loop of dimensions a × b carrying current I in a uniform magnetic field B⃗:
The forces on opposite sides create a net restoring torque:
τ = I A B sinθ ------------------------------------------------------ (6.3.11)
where A = a × b is the area of the loop.
For a coil of N turns:
τ = N I A B sinθ

Magnetic Dipole Moment (μ⃗):
Define μ⃗ = N I A⃗ (normal to loop surface, by right-hand thumb rule):
Units: A·m² or J/T.
Torque in vector form:
τ⃗ = μ⃗ × B⃗ -------------------------------------------------------- (6.3.12)
Potential Energy: U = - μ⃗ · B⃗.
This torque is the fundamental working principle behind all ELECTRIC MOTORS, turning electrical energy into mechanical rotational power!`,
    contentAm: `በተሸካሚ ሽቦ ላይ የሚያርፍ ማግኔቲክ ጉልበት፡
ፍሰት (I) ያለው ሽቦ በማግኔት መስክ ውስጥ ሲያልፍ ጉልበት ያርፍበታል፡
F = I L B sinθ (ቀመር 6.3.10)
አቅጣጫው በቀኝ እጅ መመሪያ ይወሰናል።

በተዘረጋ ዑደት ላይ የሚያርፍ የማዞሪያ ቶርክ (Torque)፡
የኤሌክትሪክ ሞተር አሰራር መርህ፡
τ = N I A B sinθ (ቀመር 6.3.11)
N = የሽቦ ዙሮች ብዛት፤ I = ፍሰት፤ A = ስፋት፤ B = ማግኔቲክ መስክ።

የማግኔቲክ ዳይፖል ሞመንት (μ)፡
μ = N I A [A·m²]
τ⃗ = μ⃗ × B⃗ (ቀመር 6.3.12)
ይህ የማዞሪያ ቶርክ በዓለማችን ያሉ የኤሌክትሪክ ሞተሮች በሙሉ ኤሌክትሪክን ወደ ተዘዋዋሪ ሜካኒካል ኃይል የሚቀይሩበት መሰረታዊ ህግ ነው!`
  },

  // Page 189 - Book page 181
  {
    pdfPageNumber: 189,
    bookPageLabel: '181',
    chapterNumber: 6,
    sectionRef: '6.3.1',
    titleEn: 'Biot-Savart Law & Field of Straight Wire',
    titleAm: 'የቢዮት-ሳቫርት ህግ እና የቀጥተኛ ሽቦ ማግኔቲክ መስክ',
    subtopicEn: '6.3.1. dB = (mu_0 / 4pi) * (I ds x r_hat / r^2) & Straight Wire B = mu_0 I / (2pi r)',
    subtopicAm: '፮.፫.፩ የቢዮት-ሳቫርት ቀመር እና የቀጥተኛ ሽቦ መስክ (B = μ₀ I / (2π r))',
    pageType: 'content',
    contentEn: `6.3.1. Sources of Magnetic Field
Hans Christian Oersted discovered in 1820 that an electric current deflects a compass needle—electric currents produce magnetic fields!

The Biot-Savart Law:
Jean-Baptiste Biot and Félix Savart (1820) formulated the fundamental equation for the magnetic field dB⃗ produced by an infinitesimal current element I ds⃗:
dB⃗ = (μ₀ / 4π) [(I ds⃗ × r̂) / r²] ---------------------------------- (6.3.13)
where:
• μ₀ = Permeability of free space:
  μ₀ = 4π × 10⁻⁷ T·m/A ≈ 1.257 × 10⁻⁶ T·m/A.
• r = distance from current element to field point.

Magnetic Field of a Long, Straight Wire:
Integrating the Biot-Savart Law over an infinitely long straight wire carrying current I:
B = (μ₀ I) / (2π r) ------------------------------------------------- (6.3.14)
where r is the perpendicular distance from the wire.
Field Line Geometry:
The magnetic field lines form CONCENTRIC CIRCLES centered on the wire.
Right-Hand Rule for Wires: Grasp the wire with your right hand with your thumb pointing in the direction of the current I; your curled fingers curl in the circular direction of the magnetic field B⃗!`,
    contentAm: `፮.፫.፩ የማግኔቲክ መስክ ምንጮች (Sources of Magnetic Field)
ኦርስቴድ በ1820 ዓ.ም የኤሌክትሪክ ፍሰት በዙሪያው ማግኔቲክ መስክ እንደሚያመነጭ አረጋገጠ።

የቢዮት-ሳቫርት ህግ (Biot-Savart Law)፡
አንድ የፍሰት ቅንጣት (I ds) የሚያመነጨው ማግኔቲክ መስክ፡
dB⃗ = (μ₀ / 4π) [(I ds⃗ × r̂) / r²] (ቀመር 6.3.13)
μ₀ = የህዋ ማግኔቲክ ፐርሚአቢሊቲ = 4π × 10⁻⁷ T·m/A።

የቀጥተኛ ረጅም ሽቦ ማግኔቲክ መስክ፡
B = (μ₀ I) / (2π r) (ቀመር 6.3.14)
የመስኩ መስመሮች በሽቦው ዙሪያ የተሰመሩ ክብ መስመሮች ናቸው።
የቀኝ እጅ መመሪያ፡ አውራ ጣት ወደ ፍሰቱ (I) ሲያመለክት፣ የታጠፉት ጣቶች የማግኔቲክ መስኩን የክብ አቅጣጫ ያሳያሉ!`
  },

  // Page 190 - Book page 182
  {
    pdfPageNumber: 190,
    bookPageLabel: '182',
    chapterNumber: 6,
    sectionRef: '6.3.1',
    titleEn: 'Force Between Parallel Conductors & Ampere Definition',
    titleAm: 'በትይዩ ሽቦዎች መካከል ያለ ጉልበት እና የአምፔር ትርጉም',
    subtopicEn: 'F / L = mu_0 I_1 I_2 / (2pi d), Parallel Attract & Official Ampere Standard',
    subtopicAm: 'ቀመር F/L = μ₀ I1 I2 / (2πd)፣ ትይዩ ፍሰቶች መሳሳብ እና የአምፔር አለም አቀፍ ትርጉም',
    pageType: 'content',
    contentEn: `Magnetic Force Between Two Parallel Conductors:
Consider two long parallel wires separated by distance d, carrying currents I₁ and I₂:
Wire 1 creates a magnetic field at the position of wire 2:
B₁ = (μ₀ I₁) / (2π d)
Wire 2 carrying current I₂ in this field experiences a magnetic force per unit length:
F / L = I₂ B₁ = (μ₀ I₁ I₂) / (2π d) --------------------------------- (6.3.15)

Direction of Force:
• Currents in the SAME direction (parallel): ATTRACT each other!
• Currents in OPPOSITE directions (anti-parallel): REPEL each other!
(Mnemonic: Unlike electric charges where likes repel, like parallel currents ATTRACT!).

SI Definition of the Ampere (Historical Standard):
"One Ampere is that constant current which, if maintained in two straight parallel conductors of infinite length and negligible cross-section placed 1 meter apart in vacuum, produces between them a force equal to exactly 2 × 10⁻⁷ Newtons per meter of length."
This historical standard fixed μ₀ = 4π × 10⁻⁷ T·m/A exactly.`,
    contentAm: `በትይዩ ሽቦዎች መካከል ያለ ማግኔቲክ ጉልበት፡
በ d ርቀት የተራራቁ ሁለት ሽቦዎች I1 እና I2 ፍሰት ሲያልፍባቸው በርዝመት አሃድ የሚያርፈው ጉልበት፡
F / L = (μ₀ I₁ I₂) / (2π d) (ቀመር 6.3.15)

የጉልበቱ አቅጣጫ፡
• በተመሳሳይ አቅጣጫ የሚፈሱ (Parallel)፡ እርስ በርሳቸው ይሳሳባሉ!
• በተቃራኒ አቅጣጫ የሚፈሱ (Anti-parallel)፡ እርስ በርሳቸው ይገፋፋሉ!

የአምፔር አለም አቀፍ ትርጉም፡
በ1 ሜትር ተራርቀው በባዶ ህዋ የተቀመጡ ሁለት ሽቦዎች በርዝመታቸው በየሜትሩ 2 × 10⁻⁷ ኒውተን ጉልበት ሲፈጥሩ በውስጣቸው የሚያልፈው ፍሰት 1 አምፔር (1 A) ይባላል።`
  },

  // Page 191 - Book page 183
  {
    pdfPageNumber: 191,
    bookPageLabel: '183',
    chapterNumber: 6,
    sectionRef: '6.3.1',
    titleEn: 'Amperes Law: Solenoids and Toroids',
    titleAm: 'የአምፔር ህግ (Amperes Law)፡ ሶሌኖይድ እና ቶሮይድ',
    subtopicEn: 'Integral B * ds = mu_0 I_enc & Solenoid Field B = mu_0 n I with n = N / L',
    subtopicAm: 'የአምፔር ዑደት ህግ (∮ B · ds = μ₀ I) እና የሶሌኖይድ መስክ (B = μ₀ n I)',
    pageType: 'content',
    contentEn: `Ampere's Law:
Formulated by André-Marie Ampère:
"The line integral of the magnetic field B⃗ around ANY closed loop (Amperian loop) equals μ₀ times the total net electric current passing through the surface enclosed by the loop:"
∮ B⃗ · ds⃗ = μ₀ I_enclosed ------------------------------------------- (6.3.16)

Applications of Ampere's Law:

1. Long Ideal Solenoid:
A solenoid is a long coil of wire wrapped tightly into a helix.
Inside a tightly wound long solenoid:
• The magnetic field B is remarkably UNIFORM and strong parallel to the axis.
• The field outside is virtually zero.
Construct a rectangular Amperian loop of length L with one side inside the solenoid:
∮ B ds = B L = μ₀ (N I)
B = μ₀ (N / L) I = μ₀ n I ------------------------------------------- (6.3.17)
where n = N / L is the number of turns per unit length.

2. Toroid:
A solenoid bent into a circular donut shape of mean radius r:
∮ B ds = B (2π r) = μ₀ (N I)
B = (μ₀ N I) / (2π r) ----------------------------------------------- (6.3.18)
The magnetic field is completely confined INSIDE the toroid! Used in Tokamak fusion reactors.`,
    contentAm: `የአምፔር ህግ (Ampere's Law)፡
"በማንኛውም ዝግ ዑደት ዙሪያ ያለው የማግኔቲክ መስክ መስመራዊ ኢንቴግራል በውስጡ ከተዘጋበት አጠቃላይ ፍሰት ጋር እኩል ነው፡"
∮ B⃗ · ds⃗ = μ₀ I_enclosed (ቀመር 6.3.16)

ተግባራዊ አተገባበር፡
፩. ሶሌኖይድ (Solenoid)፡
በሲሊንደር ቅርጽ በጥብቅ የተጠቀለለ የሽቦ ጥቅል ነው።
በውስጡ ያለው ማግኔቲክ መስክ ወጥና ጠንካራ ነው፡
B = μ₀ n I (ቀመር 6.3.17)
n = N / L (በአንድ ሜትር ውስጥ ያሉ የዙሮች ብዛት)።

፪. ቶሮይድ (Toroid)፡
ክብ ዶናት ቅርጽ ያለው ሶሌኖይድ ነው፡
B = (μ₀ N I) / (2π r) (ቀመር 6.3.18)
መስኩ ሙሉ በሙሉ በውስጡ የተዘጋ ስለሆነ በኒውክሌር ፊውዥን (Tokamak) ውስጥ ያገለግላል።`
  },

  // Page 192 - Book page 184
  {
    pdfPageNumber: 192,
    bookPageLabel: '184',
    chapterNumber: 6,
    sectionRef: '6.3.2',
    titleEn: 'Magnetism in Matter: Ferromagnetism & Domains',
    titleAm: 'ማግኔቲዝም በቁሶች ውስጥ፡ ፌሮማግኔቲዝም እና ማግኔቲክ ዶሜይኖች',
    subtopicEn: '6.3.2. Ferromagnetism (Iron, Domains), Paramagnetism, Diamagnetism & Curie Point',
    subtopicAm: '፮.፫.፪ ፌሮማግኔቲክ፣ ፓራማግኔቲክ እና ዳያማግኔቲክ ቁሶች እንዲሁም የኪዩሪ ሙቀት',
    pageType: 'content',
    contentEn: `6.3.2. Magnetic Properties of Matter
All magnetic fields in matter originate from the orbital motion and intrinsic SPIN of electrons.
Materials are classified into three major categories based on their magnetic response:

1. Ferromagnetism (Fe, Co, Ni, NdFeB alloys):
• Possess permanent atomic magnetic moments that align spontaneously with neighboring atoms due to quantum mechanical exchange coupling.
• Magnetic Domains: Microscopic regions (10 to 100 μm) where trillions of atomic moments are aligned in the same direction.
• In an unmagnetized iron bar, domains point randomly, canceling out. Under an external B field, domains aligned with the field grow, creating ENORMOUS magnetic reinforcement (permeability μ can be 1000 to 100,000 times μ₀!).
• Permanent Magnets retain magnetization even after the external field is removed (hysteresis).
• Curie Temperature (T_C): Above T_C (770 °C for iron), thermal agitation destroys domain alignment, and the material abruptly becomes paramagnetic!

2. Paramagnetism (Aluminum, Platinum, Liquid Oxygen):
• Atoms have weak net magnetic moments that align slightly in an external B field (relative permeability μ_r slightly > 1). Magnetization vanishes when field is removed.

3. Diamagnetism (Copper, Bismuth, Water, Organic tissue):
• Weakly repelled by magnetic fields (μ_r slightly < 1). Induced orbital currents oppose the external field (Lenz's law at atomic scale). Superconductors exhibit perfect diamagnetism (Meissner effect).`,
    contentAm: `፮.፫.፪ ማግኔቲዝም በቁሶች ውስጥ (Magnetic Properties of Matter)
የቁሶች ማግኔቲዝም የሚመነጨው ከኤሌክትሮኖች ዙረትና ስፒን (Spin) ነው።

ቁሶች በሦስት ይከፈላሉ፡
፩. ፌሮማግኔቲክ (Ferromagnetism - ብረት፣ ኒኬል፣ ኮባልት)፡
• ማግኔቲክ ዶሜይን (Magnetic Domains) የሚባሉ ጥቃቅን ቀጠናዎች አሏቸው።
• በውጭ ማግኔት ሲሳቡ መስኩን በሺህ እጥፍ ያጠናክራሉ፤ ጠንካራ ቋሚ ማግኔት ይፈጥራሉ።
• የኪዩሪ ሙቀት (Curie Temperature)፡ ከ 770 °C በላይ ብረትን ብናሞቀው ማግኔትነቱ ሙሉ በሙሉ ይጠፋል!

፪. ፓራማግኔቲክ (Paramagnetism - አልሙኒየም፣ ፕላቲነም)፡
• በማግኔት በጣም ደከም ባለ ሁኔታ ይሳባሉ።

፫. ዳያማግኔቲክ (Diamagnetism - መዳብ፣ ውሃ፣ ቢስመት)፡
• በማግኔት ደከም ባለ ሁኔታ ይገፋሉ። ሱፐርኮንዳክተሮች ፍጹም ዳያማግኔቲክ ናቸው (Meissner effect)።`
  },

  // Page 193 - Book page 185
  {
    pdfPageNumber: 193,
    bookPageLabel: '185',
    chapterNumber: 6,
    sectionRef: '6.4',
    titleEn: 'Electromagnetic Induction & Faradays Law',
    titleAm: 'ኤሌክትሮማግኔቲክ ኢንዳክሽን እና የፋራዴይ ህግ',
    subtopicEn: '6.4. Magnetic Flux Phi_B = B A cos(theta) [Weber] & Faradays Law: E = - N (dPhi_B / dt)',
    subtopicAm: '፮.፬ ማግኔቲክ ፍለክስ (Φ_B [ዌበር]) እና የፋራዴይ ቀመር E = - N (dΦ/dt)',
    pageType: 'content',
    contentEn: `6.4. Electromagnetic Induction
In 1831, English physicist Michael Faraday (and independently Joseph Henry in the US) made one of the greatest technological discoveries: a CHANGING magnetic field creates an electric current! This is Electromagnetic Induction.

Magnetic Flux (Φ_B):
Magnetic flux measures the total number of magnetic field lines passing through a surface of area A:
Φ_B = ∫ B⃗ · dA⃗ = B A cosθ ----------------------------------------- (6.4.1)
where θ is the angle between B⃗ and the normal vector to surface A.
SI Unit of Magnetic Flux: Weber (Wb):
1 Weber = 1 Tesla-meter squared (1 Wb = 1 T·m²).

Faraday's Law of Induction:
"The induced electromotive force (emf, E) in any closed circuit is directly proportional to the time rate of change of magnetic flux through the circuit:"
E = - N (dΦ_B / dt) ------------------------------------------------- (6.4.2)
where N is the number of turns in the coil.

Three Ways to Induce an Emf (dΦ_B/dt ≠ 0):
1. Change the magnitude of the magnetic field B with time (e.g., moving a bar magnet toward a coil).
2. Change the area A of the circuit in the field with time (e.g., sliding a wire rail).
3. Change the orientation angle θ between B⃗ and surface area A⃗ with time (e.g., rotating a coil in a generator).`,
    contentAm: `፮.፬ ኤሌክትሮማግኔቲክ ኢንዳክሽን እና የፋራዴይ ህግ (Faraday's Law)
ማይክል ፋራዴይ በ1831 ዓ.ም የሚለዋወጥ ማግኔቲክ መስክ ኤሌክትሪክ እንደሚያመነጭ አረጋገጠ። ይህም የዘመናዊው አለም የኤሌክትሪክ ሃይል መመንጨት መሰረት ሆነ!

ማግኔቲክ ፍለክስ (Magnetic Flux - Φ_B)፡
በአንድ ወለል ላይ የሚያልፉትን የማግኔቲክ መስመሮች ጠቅላላ ብዛት ይለካል፡
Φ_B = B A cosθ (ቀመር 6.4.1)
አሃድ፡ ዌበር (Weber - Wb)፤ 1 Wb = 1 T·m²።

የፋራዴይ ህግ (Faraday's Law of Induction)፡
"በአንድ ሰርኪውት ውስጥ የሚፈጠረው የኤሌክትሪክ ቮልቴጅ (emf) የማግኔቲክ ፍለክሱ በጊዜ ሂደት ከሚለወጥበት ምጣኔ ጋር እኩል ነው፡"
E = - N (dΦ_B / dt) (ቀመር 6.4.2)
N = የዙሮች ብዛት።

ፍለክስን ለመለወጥ ሦስት መንገዶች አሉ፡
፩. የማግኔቱን ጥንካሬ (B) በጊዜ ሂደት መለወጥ፤
፪. የሰርኪውቱን ስፋት (A) መለወጥ፤
፫. የሰርኪውቱን ማዕዘን (θ) በማዞር መለወጥ (የኤሌክትሪክ ጄነሬተር)።`
  },

  // Page 194 - Book page 186
  {
    pdfPageNumber: 194,
    bookPageLabel: '186',
    chapterNumber: 6,
    sectionRef: '6.4',
    titleEn: 'Lenzs Law & Direction of Induced Current',
    titleAm: 'የሌንዝ ህግ (Lenzs Law) እና የተፈጠረው ፍሰት አቅጣጫ',
    subtopicEn: 'Lenz Statement, Opposing Flux Changes & Energy Conservation Basis',
    subtopicAm: 'የሌንዝ ህግ መግለጫ፣ የፍለክስ ለውጥን መቃወም እና የኃይል ጥበቃ መርህ',
    pageType: 'content',
    contentEn: `Lenz's Law:
Formulated in 1834 by Heinrich Lenz, this law gives the physical direction of the induced emf and explains the NEGATIVE SIGN in Faraday's Law:
"The polarity of an induced emf is always such that it produces an induced current whose magnetic field OPPOSES the change in magnetic flux that produced it."

Applying Lenz's Law:
Think of nature as resisting any change in magnetic flux:
1. If magnetic flux is INCREASING:
   The induced current creates an induced magnetic field pointing OPPOSITE to the external field (trying to cancel the increase).
2. If magnetic flux is DECREASING:
   The induced current creates an induced magnetic field pointing in the SAME direction as the external field (trying to reinforce and maintain the flux).

Energy Conservation Foundation of Lenz's Law:
Why MUST the induced field oppose the change?
If the induced field reinforced the change instead:
Pushing a magnet toward a coil would attract it faster, increasing the flux further, generating more current, accelerating the magnet even more—creating kinetic energy and electric power out of NOTHING!
This would violate the Law of Conservation of Energy. Lenz's law ensures you must do mechanical work to push the magnet against the opposing magnetic repulsion, and that mechanical work is exactly what is converted into electrical energy!`,
    contentAm: `የሌንዝ ህግ (Lenz's Law)፡
ሄንሪች ሌንዝ በፋራዴይ ቀመር ላይ ያለውን የኔጌቲቭ (-) ምልክት ትርጉም አብራራ፡
"የተፈጠረው የኤሌክትሪክ ፍሰት አቅጣጫ ምንጊዜም እርሱን የፈጠረውን የማግኔቲክ ፍለክስ ለውጥ በሚቃወም መልኩ ነው የሚፈጠረው።"

የሌንዝ ህግ አተገባበር፡
፩. ፍለክሱ እየጨመረ ከሆነ፡
የተፈጠረው ፍሰት ጭማሪውን ለመቀነስ በተቃራኒ አቅጣጫ የራሱን ማግኔቲክ መስክ ያመነጫል።
፪. ፍለክሱ እየቀነሰ ከሆነ፡
የተፈጠረው ፍሰት እንዳይቀንስ ለመደገፍ በተመሳሳይ አቅጣጫ የራሱን ማግኔቲክ መስክ ያመነጫል።

የኃይል ጥበቃ መሰረት፡
የተፈጠረው ፍሰት የውጭውን ለውጥ ባይቃወም ኖሮ ማግኔቱ ራሱ እየተጣደፈ ያለ ምንም ጉልበት ኃይል ይፈጠር ነበር፤ ይህም የኃይል ጥበቃ ህግን ይጥሳል። ስለዚህ ማግኔቱን ለመግፋት የምንሰራው ሜካኒካል ስራ በትክክል ወደ ኤሌክትሪክ ኃይል ይለወጣል!`
  },

  // Page 195 - Book page 187
  {
    pdfPageNumber: 195,
    bookPageLabel: '195',
    chapterNumber: 6,
    sectionRef: '6.4',
    titleEn: 'Motional EMF & Electromagnetic Braking',
    titleAm: 'የእንቅስቃሴ ኤሌክትሮሞቲቭ ፎርስ (Motional EMF) እና ማግኔቲክ ፍሬን',
    subtopicEn: 'E = B L v, Induced Current I = B L v / R & Retarding Force F = B^2 L^2 v / R',
    subtopicAm: 'ቀመር E = B L v፣ ፍሰት I = BLv/R እና ተከላካይ ጉልበት F = B² L² v / R',
    pageType: 'content',
    contentEn: `Motional Electromotive Force (Motional emf):
Consider a conducting bar of length L sliding at constant velocity v⃗ along two frictionless parallel conducting rails connected through resistor R in a uniform magnetic field B⃗ directed into the page:
In time dt, the bar moves distance dx = v dt, sweeping out area dA = L dx = L v dt.
The change in magnetic flux through the circuit is:
dΦ_B = B dA = B L v dt
By Faraday's Law, the induced motional emf is:
E = dΦ_B / dt = B L v ------------------------------------------------ (6.4.3)
Induced current flowing through the circuit:
I = E / R = (B L v) / R --------------------------------------------- (6.4.4)

Magnetic Retarding Force:
The moving bar carrying current I in field B experiences a magnetic braking force opposing its motion:
F_mag = I L B = [(B L v) / R] L B = (B² L² v) / R -------------------- (6.4.5)
To keep the bar moving at constant velocity v, an external pulling force F_ext = F_mag must do mechanical work:
P_mech = F_ext v = (B² L² v²) / R.
Notice that the electrical power dissipated in resistor R is:
P_elec = I² R = [(B L v) / R]² R = (B² L² v²) / R!
Mechanical power input identically equals electrical power output!`,
    contentAm: `የእንቅስቃሴ ኤሌክትሮሞቲቭ ፎርስ (Motional EMF)፡
ርዝመቱ L የሆነ አስተላላፊ ዘንግ በማግኔት መስክ (B) ውስጥ በ v ፍጥነት በሀዲዶች ላይ ሲንሸራተት፡
የተፈጠረው ቮልቴጅ፡
E = B L v (ቀመር 6.4.3)
የተፈጠረው ፍሰት፡
I = E / R = (B L v) / R (ቀመር 6.4.4)

ተከላካይ ማግኔቲክ ጉልበት (Magnetic Braking Force)፡
ዘንጉ ፍሰት ስላለው እንቅስቃሴውን የሚቃወም የማግኔት ፍሬን ጉልበት ይገጥመዋል፡
F_mag = (B² L² v) / R (ቀመር 6.4.5)
ዘንጉን በቋሚ ፍጥነት ለመጎተት የምናወጣው ሜካኒካል ፓወር (P_mech) በሬዚስተሩ ውስጥ ወደ ሙቀት ከተቀየረው የኤሌክትሪክ ፓወር (P_elec) ጋር ፍጹም እኩል ነው!`
  },

  // Page 196 - Book page 188
  {
    pdfPageNumber: 196,
    bookPageLabel: '196',
    chapterNumber: 6,
    sectionRef: '6.4',
    titleEn: 'AC Generators and RMS Voltage',
    titleAm: 'የተለዋዋጭ ፍሰት (AC) ጄነሬተሮች እና የRMS ቮልቴጅ',
    subtopicEn: 'Coil Rotation E(t) = N B A omega sin(omega t) & V_rms = V_max / sqrt(2)',
    subtopicAm: 'የጄነሬተር ቮልቴጅ ቀመር እና የRMS ቮልቴጅ (V_rms = 0.707 V_max)',
    pageType: 'content',
    contentEn: `Electric Generators and Alternating Current (AC):
An electric generator converts mechanical rotational energy into electrical energy using electromagnetic induction.
A coil of N turns and area A rotates with constant angular speed ω in a uniform magnetic field B:
The magnetic flux through the coil at time t is:
Φ_B(t) = B A cos(ω t) ----------------------------------------------- (6.4.6)

Induced AC Voltage:
By Faraday's Law:
E(t) = - N (dΦ_B / dt) = - N B A (d/dt [cos(ω t)])
E(t) = N B A ω sin(ω t) = E_max sin(ω t) ---------------------------- (6.4.7)
where the Peak Voltage is:
E_max = N B A ω ----------------------------------------------------- (6.4.8)
The voltage alternates sinusoidally, reversing polarity every half-cycle!

Root-Mean-Square (RMS) Values:
Because an AC voltage alternates symmetrically, its average value over a complete cycle is zero. The effective heating capability of AC is measured by the Root-Mean-Square (RMS) value:
V_rms = V_max / √2 ≈ 0.707 V_max ------------------------------------ (6.4.9)
I_rms = I_max / √2 ≈ 0.707 I_max ------------------------------------ (6.4.10)
Standard Household Electricity:
In Ethiopia and Europe, wall outlet voltage is rated at 220 V RMS at f = 50 Hz (V_peak = 220 × √2 ≈ 311 V!).
In North America, standard voltage is 120 V RMS at f = 60 Hz (V_peak ≈ 170 V).`,
    contentAm: `የኤሌክትሪክ ጄነሬተሮች እና የተለዋዋጭ ፍሰት (AC)፡
ጄነሬተር ተዘዋዋሪ ሜካኒካል ኃይልን ወደ ኤሌክትሪክ የሚቀይር መሳሪያ ነው።
N ዙር ያለው የሽቦ ጥቅል በማግኔት መሀል በቋሚ ፍጥነት (ω) ሲዞር የሚፈጠረው ቮልቴጅ፡
E(t) = E_max sin(ω t) (ቀመር 6.4.7)
ከፍተኛ ቮልቴጅ፡ E_max = N B A ω

የRMS ቮልቴጅ (Root-Mean-Square - V_rms)፡
የAC ቮልቴጅ አማካዩ ዜሮ ስለሆነ ትክክለኛ የስራ አቅሙ በRMS ይሰላል፡
V_rms = V_max / √2 ≈ 0.707 V_max (ቀመር 6.4.9)
I_rms = I_max / √2 ≈ 0.707 I_max (ቀመር 6.4.10)

የቤት ውስጥ ኤሌክትሪክ፡
በኢትዮጵያ በመደበኛ ሶኬት የሚገባው 220 ቮልት የRMS ዋጋ ሲሆን ከፍተኛው የጫፍ ቮልቴጅ (V_peak) ወደ 311 ቮልት ይደርሳል (ፍሪኩዌንሲው 50 Hz ነው)!`
  },

  // Page 197 - Book page 189
  {
    pdfPageNumber: 197,
    bookPageLabel: '187',
    chapterNumber: 6,
    sectionRef: '6.4',
    titleEn: 'Eddy Currents & Electrical Transformers',
    titleAm: 'ኤዲ ፍሰቶች (Eddy Currents) እና የኤሌክትሪክ ትራንስፎርመር',
    subtopicEn: 'Eddy Braking & Transformer Law: V_s / V_p = N_s / N_p with Power Conservation',
    subtopicAm: 'የኤዲ ፍሰቶች እና የትራንስፎርመር ቀመር (Vs/Vp = Ns/Np) እንዲሁም ፓወር ጥበቃ',
    pageType: 'content',
    contentEn: `Eddy Currents:
When a solid piece of conducting metal moves through a magnetic field (or experiences a changing magnetic flux), swirling loops of induced currents called Eddy Currents are set up throughout the bulk material.
• Eddy Current Braking: High-speed bullet trains use electromagnet eddy currents on solid steel wheels for smooth, frictionless braking.
• Induction Cooktops: High-frequency magnetic fields induce eddy currents in the iron base of cooking pans, heating the food directly through Joule heating while the glass cooktop remains cool!

Transformers:
A transformer is a device that increases (steps up) or decreases (steps down) AC voltage with virtually zero power loss (~98–99% efficiency).
Consists of two coils wound around a shared ferromagnetic iron core:
• Primary Coil: N_p turns, input voltage V_p.
• Secondary Coil: N_s turns, output voltage V_s.

The Transformer Equation:
V_s / V_p = N_s / N_p ----------------------------------------------- (6.4.11)
• Step-Up Transformer (N_s > N_p): Secondary voltage is HIGHER (V_s > V_p).
• Step-Down Transformer (N_s < N_p): Secondary voltage is LOWER (V_s < V_p).

Conservation of Energy (Ideal Transformer):
P_primary = P_secondary  =>  I_p V_p = I_s V_s
I_s / I_p = N_p / N_s ----------------------------------------------- (6.4.12)
Power grid transmission: Stepping up voltage to 400 kV drops current by thousands, reducing transmission I²R heat losses over long distances!`,
    contentAm: `ኤዲ ፍሰቶች (Eddy Currents)፡
ጠንካራ ብረት በሚለዋወጥ ማግኔቲክ መስክ ውስጥ ሲያልፍ በውስጡ የሚፈጠሩ ተዘዋዋሪ ፍሰቶች ኤዲ ፍሰት ይባላሉ።
• የባቡር ማግኔቲክ ፍሬን፤
• የኢንዳክሽን ማብሰያ ምድጃ (ድስቱ በኤዲ ፍሰት ሲግል መስታወቱ አይሞቅም)።

ትራንስፎርመር (Transformers)፡
የAC ቮልቴጅን ከፍ (Step-up) ወይም ዝቅ (Step-down) የሚያደርግ መሳሪያ ነው።
የትራንስፎርመር ቀመር፡
V_s / V_p = N_s / N_p (ቀመር 6.4.11)
• ስቴፕ-አፕ (Ns > Np)፡ ቮልቴጅን ይጨምራል፤
• ስቴፕ-ዳውን (Ns < Np)፡ ቮልቴጅን ይቀንሳል።

የኃይል ጥበቃ፡
I_p V_p = I_s V_s  =>  I_s / I_p = N_p / N_s (ቀመር 6.4.12)
የኤሌክትሪክ ኃይል በረጅም ርቀት ሲተላለፍ ቮልቴጁን ወደ 400,000 ቮልት ከፍ በማድረግ በሽቦው ውስጥ የሚባክነውን የI²R ሙቀት በከፍተኛ ሁኔታ ይቀንሳሉ!`
  },

  // Page 198 - Book page 190
  {
    pdfPageNumber: 198,
    bookPageLabel: '188',
    chapterNumber: 6,
    sectionRef: '6.4.1',
    titleEn: 'Inductance and Magnetic Energy Storage',
    titleAm: 'ኢንዳክታንስ (Inductance) እና የማግኔቲክ ኃይል ክምችት',
    subtopicEn: '6.4.1. Self-Inductance L = N Phi_B / I [Henry], Back EMF & Stored Energy U = 1/2 L I^2',
    subtopicAm: '፮.፬.፩ የራስ-ኢንዳክታንስ (L [ሄነሪ])፣ ተከላካይ emf እና የተጠራቀመ ኃይል U = 1/2 L I²',
    pageType: 'content',
    contentEn: `6.4.1. Inductance
Self-Inductance (L):
When current I flows through a coil, it creates a magnetic flux Φ_B through its own turns. If the current changes, the changing flux induces a self-induced electromotive force (Back emf) that opposes the change in current!
Definition of Inductance:
L = N Φ_B / I ------------------------------------------------------- (6.4.13)
SI Unit of Inductance: Henry (H) = 1 Volt-second per Ampere (1 H = 1 V·s/A).

Self-Induced Back emf (E_L):
By Faraday's Law:
E_L = - N (dΦ_B / dt) = - L (dI / dt) ------------------------------- (6.4.14)
• If current is increasing (dI/dt > 0): E_L opposes the current.
• If current is decreasing (dI/dt < 0): E_L tries to maintain the current.

Inductance of an Ideal Solenoid:
L = μ₀ n² A l = μ₀ (N² / l) A --------------------------------------- (6.4.15)
where N is total turns, l is length, and A is cross-sectional area.

Magnetic Energy Stored in an Inductor:
Work must be done by the power source against the back emf to establish current I:
dU = P dt = |E_L| I dt = (L dI/dt) I dt = L I dI
Integrating from 0 to I:
U_B = 1/2 L I² ------------------------------------------------------ (6.4.16)
Compare this with capacitor energy: U_C = 1/2 C V²!
Magnetic Energy Density: u_B = B² / (2 μ₀) [J/m³].`,
    contentAm: `፮.፬.፩ ኢንዳክታንስ እና የማግኔቲክ ኃይል ክምችት
የራስ-ኢንዳክታንስ (Self-Inductance - L)፡
በአንድ የሽቦ ጥቅል ውስጥ የሚያልፈው ፍሰት ሲለወጥ ራሱ ላይ ተከላካይ ቮልቴጅ (Back emf) ይፈጥራል፡
L = N Φ_B / I (ቀመር 6.4.13)
አሃድ፡ ሄነሪ (Henry - H)፤ 1 H = 1 V·s/A።

ተከላካይ emf፡
E_L = - L (dI / dt) (ቀመር 6.4.14)

በኢንዳክተር ውስጥ የተጠራቀመ ማግኔቲክ ኃይል (U_B)፡
U_B = 1/2 L I² (ቀመር 6.4.16)
(ከካፓሲተር የኤሌክትሪክ ኃይል U_C = 1/2 C V² ጋር ያነጻጽሩ!)
የማግኔቲክ ኃይል እፍጋት፡ u_B = B² / (2 μ₀) [J/m³]።`
  },

  // Page 199 - Book page 191
  {
    pdfPageNumber: 199,
    bookPageLabel: '189',
    chapterNumber: 6,
    sectionRef: '6.4.2',
    titleEn: 'AC Circuits: Reactance of Inductors and Capacitors',
    titleAm: 'የተለዋዋጭ ፍሰት (AC) ሰርኪውቶች፡ የኢንዳክተርና የካፓሲተር ሪአክታንስ',
    subtopicEn: '6.4.2. Inductive Reactance X_L = omega L & Capacitive Reactance X_C = 1 / (omega C)',
    subtopicAm: '፮.፬.፪ የኢንዳክቲቭ ሪአክታንስ (X_L = ωL) እና የካፓሲቲቭ ሪአክታንስ (X_C = 1/ωC)',
    pageType: 'content',
    contentEn: `6.4.2. Alternating Current (AC) Circuits
When AC voltage V(t) = V_max sin(ω t) is connected across passive components:

1. Pure Resistor (R):
• Current and voltage are IN PHASE: I(t) = (V_max / R) sin(ω t).
• Resistance R is independent of frequency.

2. Pure Inductor (L):
• Opposes changing current. The voltage LEADS current by 90° (π/2 radians).
• Inductive Reactance (X_L):
  X_L = ω L = 2π f L ------------------------------------------------ (6.4.17)
  Units: Ohms (Ω).
  At high frequencies (large f), X_L is huge (inductors block high-frequency AC, used as chokes!).

3. Pure Capacitor (C):
• Opposes voltage changes. The current LEADS voltage by 90° (π/2 radians).
• Capacitive Reactance (X_C):
  X_C = 1 / (ω C) = 1 / (2π f C) ------------------------------------ (6.4.18)
  Units: Ohms (Ω).
  At DC (f = 0), X_C = ∞ (capacitors block DC completely!).
  At high frequencies, X_C becomes tiny (capacitors pass high-frequency AC easily!).

Mnemonic: "ELI the ICE man"
• E leads I in an L (Inductor)
• I leads E in a C (Capacitor)`,
    contentAm: `፮.፬.፪ የAC ሰርኪውቶች እና ሪአክታንስ (Reactance)
የAC ቮልቴጅ በክፍሎች ውስጥ ሲያልፍ፡

፩. ሬዚስተር (R)፡
ቮልቴጅ እና ፍሰት በአንድ ፌዝ (In phase) ይጓዛሉ።

፪. ኢንዳክተር (L)፡
ቮልቴጁ ከፍሰቱ በ90 ዲግሪ ይቀድማል።
የኢንዳክቲቭ ሪአክታንስ (መቋቋም)፡
X_L = ω L = 2π f L (ቀመር 6.4.17)
አሃድ፡ ኦህም (Ω)። ፍሪኩዌንሲ ሲጨምር X_L በጣም ስለሚጨምር ከፍተኛ ፍሪኩዌንሲን ያግዳል (Choke)።

፫. ካፓሲተር (C)፡
ፍሰቱ ከቮልቴጁ በ90 ዲግሪ ይቀድማል።
የካፓሲቲቭ ሪአክታንስ (መቋቋም)፡
X_C = 1 / (ω C) = 1 / (2π f C) (ቀመር 6.4.18)
አሃድ፡ ኦህም (Ω)። ለDC (f = 0) መቋቋሙ ማለቂያ የሌለው (X_C = ∞) ስለሆነ DC በፍጹም አያሳልፍም፤ ለከፍተኛ ፍሪኩዌንሲ ግን በቀላሉ ክፍት ይሆናል።`
  },

  // Page 200 - Book page 192
  {
    pdfPageNumber: 200,
    bookPageLabel: '190',
    chapterNumber: 6,
    sectionRef: '6.4.2',
    titleEn: 'Series RLC Circuits and Resonance',
    titleAm: 'ተከታታይ RLC ሰርኪውት እና ሬዞናንስ',
    subtopicEn: 'Impedance Z = sqrt[R^2 + (X_L - X_C)^2] & Resonance Frequency f_0 = 1 / [2pi sqrt(LC)]',
    subtopicAm: 'ኢምፔዳንስ (Z) እና የሬዞናንስ ፍሪኩዌንሲ (f₀ = 1 / [2π √(LC)])',
    pageType: 'content',
    contentEn: `Series RLC Circuits:
A resistor R, inductor L, and capacitor C connected in series across an AC source:
Total Impedance (Z):
Z = √[R² + (X_L - X_C)²] --------------------------------------------- (6.4.19)
Units: Ohms (Ω).
Peak current:
I_max = V_max / Z --------------------------------------------------- (6.4.20)
Phase Angle (φ):
tanφ = (X_L - X_C) / R ---------------------------------------------- (6.4.21)
Average Power Consumed:
P_avg = I_rms V_rms cosφ -------------------------------------------- (6.4.22)
where cosφ is the Power Factor.

Electrical Resonance:
When the driving frequency is tuned such that inductive and capacitive reactances exactly cancel:
X_L = X_C  =>  ω₀ L = 1 / (ω₀ C)
Resonance Angular Frequency (ω₀):
ω₀ = 1 / √(L C) ----------------------------------------------------- (6.4.23)
Resonance Frequency (f₀):
f₀ = 1 / [2π √(L C)] ------------------------------------------------ (6.4.24)

Characteristics at Resonance:
1. Impedance reaches its absolute MINIMUM: Z_min = R.
2. Current reaches its absolute MAXIMUM: I_max = V_max / R.
3. Power factor cosφ = 1.0 (purely resistive behavior).
4. Application: Radio and TV Tuner circuits! Adjusting the variable capacitor C tunes the resonant frequency f₀ to match the frequency of the desired radio station, amplifying its signal while rejecting all other stations!`,
    contentAm: `ተከታታይ RLC ሰርኪውት (Series RLC Circuit)፡
ሬዚስተር፣ ኢንዳክተር እና ካፓሲተር ተከታትለው ሲገናኙ አጠቃላይ መቋቋማቸው ኢምፔዳንስ (Impedance - Z) ይባላል፡
Z = √[R² + (X_L - X_C)²] (ቀመር 6.4.19)
አጠቃላይ ፍሰት፡ I = V / Z

የኤሌክትሪክ ሬዞናንስ (Resonance in RLC)፡
የኢንዳክተሩ እና የካፓሲተሩ መቋቋም እኩል ሲሆኑ (X_L = X_C) እርስ በርሳቸው ይሰረዛሉ፡
የሬዞናንስ ፍሪኩዌንሲ፡
f₀ = 1 / [2π √(L C)] (ቀመር 6.4.24)

በሬዞናንስ ወቅት፡
፩. ኢምፔዳንስ ዝቅተኛው ጣሪያ ላይ ይወድቃል (Z = R)፤
፪. የሰርኪውቱ ፍሰት ከፍተኛው ጣሪያ ላይ ይደርሳል፤
፫. የሬዲዮ ጣቢያ መምረጫ (Radio Tuner)፡ የካፓሲተሩን መጠን ስናስተካክል የሰርኪውቱ ሬዞናንስ ከምንፈልገው ጣቢያ ፍሪኩዌንሲ ጋር ተስማምቶ ድምፁ ጎልቶ እንዲሰማ ያደርጋል!`
  },

  // Page 201 - Book page 193
  {
    pdfPageNumber: 201,
    bookPageLabel: '191',
    chapterNumber: 6,
    sectionRef: '6.5',
    titleEn: 'Semiconductor Physics: Band Theory & Intrinsic Silicon',
    titleAm: 'የሴሚኮንዳክተሮች ፊዚክስ፡ የባንድ ንድፈ-ሀሳብ እና ንጹህ ሲሊከን',
    subtopicEn: '6.5. Valence Band, Bandgap E_g, Conduction Band & Electron-Hole Pairs',
    subtopicAm: '፮.፭ ቫለንስ ባንድ፣ የኃይል ክፍተት (Eg)፣ ኮንዳክሽን ባንድ እና የኤሌክትሮን-ሆል ጥንዶች',
    pageType: 'content',
    contentEn: `6.5. Electronics: Semiconductors
Electronics is the control of electron flow through semiconductor materials, vacuum tubes, and microchips.

Energy Band Theory:
In isolated atoms, electrons occupy discrete quantum energy levels. In a crystalline solid, these levels broaden into continuous Energy Bands:
1. Valence Band: The highest occupied band filled with valence electrons at 0 K.
2. Conduction Band: The empty or partially filled band above the valence band where electrons are free to move and conduct electricity.
3. Bandgap (Forbidden Energy Gap, E_g): The energy difference between the top of the valence band and the bottom of the conduction band:
   • Insulators (diamond, quartz): Huge bandgap (E_g > 5 eV). Electrons cannot jump to conduction band.
   • Conductors (metals): Valence and conduction bands overlap (E_g = 0).
   • Semiconductors (Silicon, Germanium): Moderate bandgap (E_g ≈ 1.1 eV for Si, 0.67 eV for Ge).

Intrinsic (Pure) Semiconductors:
Pure crystalline silicon (Group IV element) has 4 valence electrons forming covalent bonds in a diamond cubic lattice.
At room temperature (300 K), thermal vibrations break a tiny fraction of covalent bonds, exciting electrons into the conduction band:
• Each excited electron leaves behind an empty state in the valence band called a Hole (h⁺).
• A hole behaves as an effective POSITIVE charge carrier!
• In an intrinsic semiconductor, electron density equals hole density: n = p = n_i.`,
    contentAm: `፮.፭ ኤሌክትሮኒክስ፡ ሴሚኮንዳክተሮች (Semiconductors)
ኤሌክትሮኒክስ በሴሚኮንዳክተሮች ውስጥ የኤሌክትሮኖችን ፍሰት በመቆጣጠር የሚሰራ የቴክኖሎጂ ዘርፍ ነው።

የኃይል ባንድ ንድፈ-ሀሳብ (Energy Band Theory)፡
፩. ቫለንስ ባንድ (Valence Band)፡ በኤሌክትሮኖች የተሞላ የታችኛው ባንድ።
፪. ኮንዳክሽን ባንድ (Conduction Band)፡ ኤሌክትሮኖች በነጻነት የሚጓዙበት የላይኛው ባንድ።
፫. የባንድ ክፍተት (Bandgap - E_g)፡
• ኤሌክትሪክ የማያስተላልፉ፡ ግዙፍ ክፍተት አላቸው (E_g > 5 eV)፤
• ብረታብረቶች፡ ሁለቱ ባንዶች የተደራረቡ ናቸው (E_g = 0)፤
• ሴሚኮንዳክተሮች፡ መካከለኛ ክፍተት አላቸው (ለሲሊከን E_g = 1.1 eV)።

ንጹህ ሴሚኮንዳክተሮች (Intrinsic Silicon)፡
ሲሊከን (Si) 4 የቫለንስ ኤሌክትሮኖች አሉት። በክፍል ሙቀት ውስጥ አንዳንድ ኤሌክትሮኖች ከቦታቸው ሲላቀቁ ክፍት ቦታ (Hole) ይተዋሉ፤ ይህ ሆል እንደ ፖዘቲቭ ቻርጅ ሆኖ ያገለግላል።`
  },

  // Page 202 - Book page 194
  {
    pdfPageNumber: 202,
    bookPageLabel: '192',
    chapterNumber: 6,
    sectionRef: '6.5',
    titleEn: 'Doping: n-Type and p-Type Semiconductors',
    titleAm: 'ዶፒንግ (Doping)፡ n-ታይፕ እና p-ታይፕ ሴሚኮንዳክተሮች',
    subtopicEn: 'Pentavalent Donors (P, As -> n-type) & Trivalent Acceptors (B, Ga -> p-type)',
    subtopicAm: 'የዶፒንግ ሂደት፣ ፔንታቫለንት (n-type) እና ትራይቫለንት (p-type) ቆሻሻዎችን መጨመር',
    pageType: 'content',
    contentEn: `Extrinsic Semiconductors and Doping:
The conductivity of pure silicon is too low for practical electronic devices. Doping is the intentional addition of tiny controlled amounts of impurity atoms (about 1 impurity atom per million silicon atoms!) to dramatically increase conductivity.

1. n-Type Semiconductors:
• Pure silicon is doped with Pentavalent impurity atoms from Group V (Phosphorus, Arsenic, Antimony) which have 5 valence electrons.
• Four electrons form covalent bonds with adjacent silicon atoms; the 5th extra electron is loosely bound and easily liberated into the conduction band at room temperature!
• These impurities are called Donor atoms.
• Majority Carriers: Free ELECTRONS (n >> p).
• Minority Carriers: Holes.

2. p-Type Semiconductors:
• Pure silicon is doped with Trivalent impurity atoms from Group III (Boron, Gallium, Indium) which have 3 valence electrons.
• The 3 electrons form bonds with neighboring silicon atoms, leaving one bond INCOMPLETE—creating an extra HOLE ready to accept an electron!
• These impurities are called Acceptor atoms.
• Majority Carriers: HOLES (p >> n).
• Minority Carriers: Electrons.
IMPORTANT: Despite having mobile majority carriers, both n-type and p-type silicon crystals remain electrically NEUTRAL overall!`,
    contentAm: `ዶፒንግ፡ n-ታይፕ እና p-ታይፕ ሴሚኮንዳክተሮች
ዶፒንግ ማለት የሲሊከንን ኮንዳክቲቪቲ በከፍተኛ ሁኔታ ለመጨመር ጥቃቅን የሌሎች ንጥረ ነገሮች አተሞችን የመቀላቀል ሂደት ነው።

፩. n-ታይፕ ሴሚኮንዳክተር (n-Type)፡
• ሲሊከን 5 ቫለንስ ኤሌክትሮኖች ካላቸው ንጥረ ነገሮች (ፎስፈረስ፣ አርሴኒክ) ጋር ሲደባለቅ፤
• አምስተኛው ትርፍ ኤሌክትሮን በቀላሉ ነፃ ስለሚሆን ኤሌክትሮኖች ዋነኛ አስተላላፊ (Majority carriers) ይሆናሉ።

፪. p-ታይፕ ሴሚኮንዳክተር (p-Type)፡
• ሲሊከን 3 ቫለንስ ኤሌክትሮኖች ካላቸው ንጥረ ነገሮች (ቦሮን፣ ጋሊየም) ጋር ሲደባለቅ፤
• አንድ ኤሌክትሮን ስለሚጎድል በርካታ ክፍት ቦታዎች (Holes) ይፈጠራሉ፤ ሆሎች ዋነኛ አስተላላፊ (Majority carriers) ይሆናሉ።

ማስታወሻ፡ ሁለቱም n-type እና p-type ሴሚኮንዳክተሮች በአጠቃላይ ገለልተኛ (Neutrally charged) ናቸው።`
  },

  // Page 203 - Book page 195
  {
    pdfPageNumber: 203,
    bookPageLabel: '193',
    chapterNumber: 6,
    sectionRef: '6.5.1',
    titleEn: 'The p-n Junction Diode: Depletion Region & Biasing',
    titleAm: 'የ p-n ጀንክሽን ዳዮድ፡ የዲፕሊሽን ክልል እና ባያሲንግ',
    subtopicEn: '6.5.1. Barrier Potential (0.7 V for Si), Forward Bias vs Reverse Bias & I-V Curve',
    subtopicAm: '፮.፭.፩ የመከላከያ ፖቴንሺያል (0.7 V)፣ ፎርዋርድና ሪቨርስ ባያስ እንዲሁም I-V ከርቭ',
    pageType: 'content',
    contentEn: `6.5.1. The p-n Junction Diode
When p-type and n-type semiconductor regions are joined in a single continuous crystal, the interface forms a p-n Junction.

Formation of the Depletion Region:
1. Electrons from the n-side diffuse across the junction and recombine with holes on the p-side.
2. This leaves behind uncompensated positive donor ions on the n-side and negative acceptor ions on the p-side.
3. This charge-free zone is called the Depletion Region.
4. The exposed ions create a built-in electric field pointing from n to p, creating a Barrier Potential (V₀):
   • V₀ ≈ 0.7 V for Silicon.
   • V₀ ≈ 0.3 V for Germanium.

Biasing the p-n Junction Diode:
1. Forward Bias:
   Connect positive terminal of battery to p-side, negative terminal to n-side.
   The applied voltage OPPOSES the built-in barrier. When V > 0.7 V, the barrier collapses, and LARGE forward current flows easily!
2. Reverse Bias:
   Connect positive terminal to n-side, negative terminal to p-side.
   The applied voltage WIDENS the depletion layer and raises the barrier. Virtually ZERO current flows (only an imperceptible picoampere leakage current).
Conclusion: A diode conducts current in ONLY ONE DIRECTION (an electronic one-way valve!).`,
    contentAm: `፮.፭.፩ የ p-n ጀንክሽን ዳዮድ (The p-n Junction Diode)
p-ታይፕ እና n-ታይፕ በአንድ ክሪስታል ሲገናኙ ዳዮድ ይፈጠራል።

የዲፕሊሽን ክልል እና የመከላከያ ፖቴንሺያል፡
በመገናኛቸው ላይ ኤሌክትሮኖችና ሆሎች ሲዋሃዱ ቻርጅ አልባ የሆነ የዲፕሊሽን ክልል (Depletion region) እና የ 0.7 ቮልት መከላከያ ፖቴንሺያል ይፈጠራል።

የዳዮድ አሰራር (Biasing)፡
፩. ፎርዋርድ ባያስ (Forward Bias)፡
የባትሪው ፖዘቲቭ ከ p-ወገን፣ ኔጌቲቭ ከ n-ወገን ሲገናኝ፤ የውጭው ቮልቴጅ ከ 0.7 ቮልት ሲበልጥ ግድቡ ፈርሶ ከፍተኛ ፍሰት በነጻነት ያልፋል!
፪. ሪቨርስ ባያስ (Reverse Bias)፡
የባትሪው ፖዘቲቭ ከ n-ወገን፣ ኔጌቲቭ ከ p-ወገን ሲገናኝ ግድቡ ይበልጥ ስለሚሰፋ ፍሰት በፍጹም አያልፍም (ዜሮ ነው)።
መደምደሚያ፡ ዳዮድ ፍሰትን ወደ አንድ አቅጣጫ ብቻ የሚያሳልፍ የኤሌክትሮኒክስ ቫልቭ ነው!`
  },

  // Page 204 - Book page 196
  {
    pdfPageNumber: 204,
    bookPageLabel: '194',
    chapterNumber: 6,
    sectionRef: '6.5.1',
    titleEn: 'Diode Applications: Rectification, LEDs & Solar Cells',
    titleAm: 'የዳዮድ ጥቅሞች፡ ሬክቲፊኬሽን፣ ኤል-ኢ-ዲ (LED) እና የፀሐይ ኃይል ህዋስ',
    subtopicEn: 'AC to DC Rectifiers, Light-Emitting Diodes (Gallium Nitride) & Photovoltaics',
    subtopicAm: 'የAC ወደ DC መቀየሪያ፣ ብርሃን አመንጪ ዳዮድ (LED) እና የፎቶቮልታይክ ሴል',
    pageType: 'content',
    contentEn: `Applications of p-n Junction Diodes:

1. AC-to-DC Rectification:
Since wall outlets supply alternating current (AC) but electronic devices (computers, smartphones, TVs) require direct current (DC), rectifiers are essential:
• Half-Wave Rectifier: A single diode passes only the positive half-cycles of AC.
• Full-Wave Bridge Rectifier: A bridge of 4 diodes converts BOTH positive and negative AC half-cycles into pulsating positive DC. A filter capacitor smooths the pulses into steady DC voltage.

2. Light-Emitting Diodes (LEDs):
When a diode made of compound semiconductors (such as Gallium Arsenide GaAs or Gallium Nitride GaN) is forward biased:
Electrons recombine with holes at the junction, dropping from the conduction band to the valence band and releasing their energy DIRECTLY AS PHOTONS OF LIGHT:
E_photon = h f = h c / λ ≈ E_g ------------------------------------- (6.5.1)
• Extremely energy-efficient (>80% efficient vs <10% for incandescent bulbs).
• Long lifetimes (>50,000 hours).

3. Photovoltaic (Solar) Cells:
A large-area p-n junction exposed to sunlight. Incoming photons with energy hf > E_g excite electron-hole pairs in the depletion region. The built-in electric field separates them, driving an external electric current—converting SUNLIGHT DIRECTLY INTO ELECTRICITY!`,
    contentAm: `የዳዮድ ተግባራዊ ጥቅሞች፡
፩. ሬክቲፊኬሽን (Rectification - AC ወደ DC መቀየሪያ)፡
የሞባይል ቻርጀሮችና ኮምፒውተሮች ከግድግዳ የሚመጣውን 220 ቮልት AC ወደ DC የሚቀይሩት በ 4 ዳዮዶች ድልድይ (Bridge rectifier) አማካኝነት ነው።

፪. ብርሃን አመንጪ ዳዮዶች (LEDs)፡
በዳዮዱ ውስጥ ኤሌክትሮኖችና ሆሎች ሲዋሃዱ ኃይላቸውን በቀጥታ ወደ ብርሃን ፎቶን (Photon) ይቀይሩታል፡
E = h f ≈ Eg (ቀመር 6.5.1)
ከመደበኛ አምፑሎች በ 10 እጥፍ የኤሌክትሪክ ኃይል ይቆጥባሉ፤ ከ 50,000 ሰዓት በላይ ያገለግላሉ።

፫. የፀሐይ ኃይል ህዋስ (Solar / Photovoltaic Cells)፡
የፀሐይ ብርሃን በዳዮዱ ላይ ሲያርፍ ኤሌክትሮኖችን በማንቃት በቀጥታ ንጹህ የኤሌክትሪክ ኃይል ያመነጫል!`
  },

  // Page 205 - Book page 197
  {
    pdfPageNumber: 205,
    bookPageLabel: '195',
    chapterNumber: 6,
    sectionRef: '6.5.2',
    titleEn: 'Transistors: BJT and MOSFET',
    titleAm: 'ትራንዚስተሮች፡ BJT እና MOSFET',
    subtopicEn: '6.5.2. Emitter, Base, Collector, Current Gain beta = I_C / I_B & Switch/Amplifier',
    subtopicAm: '፮.፭.፪ ኤሚተር፣ ቤዝ፣ ኮሌክተር፣ ማጉላት β = IC / IB እና ትራንዚስተር እንደ ማብሪያ/ማጉያ',
    pageType: 'content',
    contentEn: `6.5.2. Transistors
Invented in 1947 by John Bardeen, Walter Brattain, and William Shockley at Bell Labs, the transistor is the bedrock of modern civilization.

Bipolar Junction Transistor (BJT):
A 3-terminal semiconductor sandwich of two back-to-back p-n junctions:
• npn Transistor: Thin p-type Base sandwiched between n-type Emitter and n-type Collector.
• pnp Transistor: Thin n-type Base between p-type Emitter and p-type Collector.

Operation of an npn Transistor:
1. Emitter (E): Heavily doped to inject massive numbers of electrons.
2. Base (B): Ultra-thin and lightly doped.
3. Collector (C): Moderately doped, collects electrons.
• Base-Emitter junction is FORWARD BIASED; Base-Collector junction is REVERSE BIASED.
• A tiny base current I_B controls a vastly LARGER collector current I_C!

Current Amplification Factor (β or h_FE):
β = I_C / I_B ------------------------------------------------------- (6.5.2)
Typical β values range from 50 to 300!
Emitter current: I_E = I_B + I_C ≈ I_C.

Two Primary Functions of Transistors:
1. Amplifier: A small audio/radio signal fed to the base produces an amplified replica at the collector.
2. Electronic Switch: In digital computers, transistors switch between OFF (Cutoff, 0) and ON (Saturation, 1) billions of times per second. Modern computer CPUs (like Intel Core or Apple M-series) pack over 100 BILLION microscopic MOSFET transistors on a silicon chip the size of a fingernail!`,
    contentAm: `፮.፭.፪ ትራንዚስተሮች (Transistors)
በ1947 ዓ.ም በቤል ላብራቶሪ የተገኘው ትራንዚስተር የዘመናዊው ዲጂታል አለም መሰረት ነው።

ባይፖላር ትራንዚስተር (BJT)፡
ሦስት ተርሚናሎች አሉት፡
፩. ኤሚተር (Emitter - E)፡ ኤሌክትሮኖችን ያመነጫል፤
፪. ቤዝ (Base - B)፡ እጅግ በጣም ቀጭን የመቆጣጠሪያ በር፤
፫. ኮሌክተር (Collector - C)፡ ኤሌክትሮኖችን ይሰበስባል።

የማጉላት ምጣኔ (β - Beta)፡
β = I_C / I_B (ቀመር 6.5.2)
በቤዝ በኩል የምትገባ እጅግ ትንሽ ፍሰት (IB) በኮሌክተር በኩል የምታልፈውን ትልቅ ፍሰት (IC) በ 100 እና 300 እጥፍ ታጎላለች!

ሁለቱ ዋና ዋና ጥቅሞች፡
፩. ማጉያ (Amplifier)፡ የሬዲዮና የድምፅ ሲግናሎችን ለማጉላት፤
፪. ዲጂታል ማብሪያ/ማጥፊያ (Switch)፡ በኮምፒውተር ፕሮሰሰር ውስጥ 0 እና 1 ሎጂክን በሰከንድ በቢሊዮን ጊዜያት ያበራል/ያጠፋል። አንድ የኮምፒውተር ቺፕ በውስጡ ከ 100 ቢሊዮን በላይ ጥቃቅን ትራንዚስተሮችን ይዟል!`
  },

  // Page 206 - Book page 198
  {
    pdfPageNumber: 206,
    bookPageLabel: '196',
    chapterNumber: 6,
    sectionRef: '6.5.3',
    titleEn: 'Digital Electronics and Logic Gates',
    titleAm: 'ዲጂታል ኤሌክትሮኒክስ እና የሎጂክ ጌቶች (Logic Gates)',
    subtopicEn: '6.5.3. Binary Logic, Truth Tables: AND, OR, NOT, NAND, NOR, XOR Gates',
    subtopicAm: '፮.፭.፫ ባይነሪ ሎጂክ (0 እና 1)፣ የእውነት ሰንጠረዥ፡ AND, OR, NOT, NAND እና NOR',
    pageType: 'table',
    contentEn: `6.5.3. Digital Electronics and Logic Gates
Digital electronics operates on Binary Logic using two discrete voltage states:
• Binary 0: LOW voltage (typically 0 V).
• Binary 1: HIGH voltage (typically +5 V or +3.3 V).

Fundamental Logic Gates:
1. NOT Gate (Inverter): Output is the opposite of the input: Y = Ā.
2. AND Gate: Output is 1 ONLY IF both inputs are 1: Y = A · B.
3. OR Gate: Output is 1 if AT LEAST ONE input is 1: Y = A + B.
4. NAND Gate: Inverted AND gate (NOT-AND): Y = (A · B)̄.
5. NOR Gate: Inverted OR gate (NOT-OR): Y = (A + B)̄.
6. XOR Gate (Exclusive-OR): Output is 1 if inputs are DIFFERENT: Y = A ⊕ B.

Table 6.2: Truth Tables for 2-Input Logic Gates:
• Inputs (A, B) = (0, 0): AND=0, OR=0, NAND=1, NOR=1, XOR=0
• Inputs (A, B) = (0, 1): AND=0, OR=1, NAND=1, NOR=0, XOR=1
• Inputs (A, B) = (1, 0): AND=0, OR=1, NAND=1, NOR=0, XOR=1
• Inputs (A, B) = (1, 1): AND=1, OR=1, NAND=0, NOR=0, XOR=0

Universal Gates:
NAND and NOR gates are called Universal Gates because ANY possible Boolean logic operation (including memory flip-flops, adders, and complete microprocessors) can be constructed entirely using only NAND gates or only NOR gates!`,
    contentAm: `፮.፭.፫ ዲጂታል ኤሌክትሮኒክስ እና የሎጂክ ጌቶች (Logic Gates)
ዲጂታል ኤሌክትሮኒክስ በባይነሪ ሎጂክ (0 እና 1) ላይ ይሰራል፡
• 0 = ዝቅተኛ ቮልቴጅ (0 V)፤ 1 = ከፍተኛ ቮልቴጅ (5 V)።

መሰረታዊ ሎጂክ ጌቶች፡
፩. NOT ጌት (ቀያሪ)፡ የገባውን ይገለብጣል (0 ሲገባ 1፤ 1 ሲገባ 0)።
፪. AND ጌት፡ ሁለቱም 1 ሲሆኑ ብቻ ውጤቱ 1 ይሆናል (Y = A · B)።
፫. OR ጌት፡ ቢያንስ አንዱ 1 ከሆነ ውጤቱ 1 ይሆናል (Y = A + B)።
፬. NAND ጌት፡ የ AND ተቃራኒ (ሁለንተናዊ ጌት)።
፭. NOR ጌት፡ የ OR ተቃራኒ።
፮. XOR ጌት፡ ሁለቱ ሲለያዩ ብቻ 1 ይሆናል።

ሰንጠረዥ 6.2፡ የእውነት ሰንጠረዥ (Truth Table)፡
(0, 0) => AND=0, OR=0, NAND=1, NOR=1
(0, 1) => AND=0, OR=1, NAND=1, NOR=0
(1, 0) => AND=0, OR=1, NAND=1, NOR=0
(1, 1) => AND=1, OR=1, NAND=0, NOR=0

ሁለንተናዊ ጌቶች፡ NAND እና NOR ማንኛውንም የኮምፒውተር ስሌትና ማህደረ-ትውስታ (Memory) ለመገንባት የሚያስችሉ ሁለንተናዊ ጌቶች ናቸው።`,
    tables: [
      {
        id: 'phys-tbl-6-2',
        caption: 'Table 6.2: Truth Tables of Fundamental Logic Gates',
        headers: ['Input A', 'Input B', 'AND (A·B)', 'OR (A+B)', 'NAND', 'NOR', 'XOR (A⊕B)'],
        rows: [
          ['0', '0', '0', '0', '1', '1', '0'],
          ['0', '1', '0', '1', '1', '0', '1'],
          ['1', '0', '0', '1', '1', '0', '1'],
          ['1', '1', '1', '1', '0', '0', '0']
        ]
      }
    ]
  },

  // Page 207 - Book page 199
  {
    pdfPageNumber: 207,
    bookPageLabel: '199',
    chapterNumber: 6,
    sectionRef: 'Summary & Review',
    titleEn: 'Chapter Six Summary & Review Questions',
    titleAm: 'የምዕራፍ ስድስት ማጠቃለያ እና የማጠቃለያ ጥያቄዎች',
    subtopicEn: 'Comprehensive Formula Summary & Review Questions 1 to 8',
    subtopicAm: 'አጠቃላይ የቀመሮች ማጠቃለያ እና የማጠቃለያ ጥያቄዎች ፩ እስከ ፰',
    pageType: 'review',
    contentEn: `Chapter Six Summary & Review:
• Coulomb's Law: F = k |q₁ q₂| / r²; Electric field: E = F / q₀; Point charge E = k q / r².
• Gauss's Law: ∮ E · dA = Q_enc / ε₀. Inside a conductor in equilibrium, E = 0.
• Electric Potential: V = k q / r; Relation to field: E_x = - dV/dx; Parallel plate C = ε₀ A / d.
• Ohm's Law: V = I R; Series: R_eq = Σ R; Parallel: 1/R_eq = Σ 1/R.
• Kirchhoff's Rules: Junction (Σ I = 0) and Loop (Σ ΔV = 0).
• Magnetic Force: F_B = q(v × B) (particle); F = I(L × B) (wire).
• Sources of Field: Long wire B = μ₀ I / (2π r); Solenoid B = μ₀ n I.
• Faraday's Law: E = - N (dΦ_B / dt); Transformer: V_s / V_p = N_s / N_p.
• RLC Resonance: f₀ = 1 / [2π √(LC)].
• Semiconductors: n-type (electrons), p-type (holes); Diode rectifies AC to DC; Transistor β = I_C / I_B.

Review Questions:
1. Two point charges of +3.0 μC and -5.0 μC are 0.20 m apart. Find the magnitude and character of the electrostatic force between them.
2. A parallel-plate capacitor has plate area 0.040 m² and separation 1.0 mm. Calculate its capacitance in air and the energy stored when connected to a 100 V supply.
3. Three resistors of 3 Ω, 6 Ω, and 2 Ω are connected in parallel across a 12 V battery. Find: (a) equivalent resistance, (b) total current, and (c) power supplied.
4. A proton enters a uniform magnetic field of 0.50 T at speed 2.0 × 10⁶ m/s perpendicular to the field. Find: (a) magnetic force, and (b) orbital radius. (m_p = 1.67 × 10⁻²⁷ kg).
5. A coil of 200 turns of area 0.050 m² rotates at 50 rev/s in a 0.20 T magnetic field. Calculate the maximum induced peak emf.
6. A step-down transformer converts 220 V to 11 V. If the primary has 1000 turns, how many turns are on the secondary?
7. An RLC circuit has R = 50 Ω, L = 0.20 H, and C = 5.0 μF. Find its resonant frequency.
8. State the output of a 2-input NAND gate when both inputs are 1.`,
    contentAm: `የምዕራፍ ስድስት ማጠቃለያ እና የማጠቃለያ ጥያቄዎች፡
• የኩሎምብ ህግ፡ F = k |q1 q2| / r²፤ የጋውስ ህግ፡ ∮ E · dA = Q / ε₀።
• የኦህም ህግ፡ V = I R፤ የኪርቾፍ ህጎች፡ የመገናኛ እና የዑደት ህጎች።
• ማግኔቲክ ጉልበት፡ F = q v B sinθ፤ በሽቦ ላይ፡ F = I L B sinθ።
• የፋራዴይ ህግ፡ E = - N (dΦ / dt)፤ ትራንስፎርመር፡ Vs / Vp = Ns / Np።
• ሬዞናንስ፡ f₀ = 1 / [2π √(LC)]፤ ትራንዚስተር፡ β = IC / IB።

የማጠቃለያ ጥያቄዎች፡
፩. በ 0.20 ሜትር የተራራቁ +3.0 μC እና -5.0 μC ቻርጆች መካከል ያለውን ጉልበት ፈልግ።
፪. በ 100 ቮልት የተገናኘ ትይዩ ፕሌት ካፓሲተር (A = 0.04 m²፣ d = 1.0 mm) ካፓሲታንስ እና የተጠራቀመ ኃይልን አስላ።
፫. 3 Ω፣ 6 Ω እና 2 Ω ሬዚስተሮች በትይዩ በ12 ቮልት ባትሪ ተገናኙ፡ አጠቃላይ ሬዚስታንስ፣ ፍሰትና ፓወርን ፈልግ።
፬. ፕሮቶን በ 0.50 ቴስላ ማግኔቲክ መስክ ውስጥ በ 2.0 × 10⁶ ሜ/ሰ ፍጥነት ሲገባ የሚያርፍበትን ጉልበት እና የክቡን ራዲየስ አስላ።
፭. 200 ዙር ያለው የ 0.05 m² ጥቅል በ 0.20 T መስክ በሰከንድ 50 ጊዜ ሲዞር ከፍተኛውን ቮልቴጅ አስላ።
፮. የ 220 ቮልት ግብዓትን ወደ 11 ቮልት የሚቀይር ትራንስፎርመር ፕራይመሪው 1000 ዙር ቢኖረው ሴከንደሪው ስንት ዙር ይኖረዋል?
፯. R = 50 Ω፣ L = 0.20 H እና C = 5.0 μF የሆነ ሰርኪውት የሬዞናንስ ፍሪኩዌንሲ ስንት ነው?
፰. የ NAND ጌት ሁለቱም ግብአቶች 1 ሲሆኑ ውጤቱ ምን ይሆናል?`,
    reviewQuestions: [
      {
        title: 'Chapter 6 Review Problems',
        questions: [
          '1. Force between +3.0 uC and -5.0 uC charges at 0.20 m separation.',
          '2. Parallel-plate capacitor (A = 0.04 m^2, d = 1.0 mm, V = 100 V): find C and stored energy.',
          '3. Three parallel resistors (3, 6, 2 ohms) on 12 V: find R_eq, I_tot, and total power.',
          '4. Proton in 0.50 T field at 2.0x10^6 m/s: calculate magnetic force and cyclotron radius.',
          '5. Generator (N = 200, A = 0.05 m^2, B = 0.20 T, f = 50 Hz): calculate peak emf E_max.',
          '6. Step-down transformer (220 V to 11 V, N_p = 1000 turns): calculate N_s.',
          '7. Series RLC circuit (R = 50 ohms, L = 0.20 H, C = 5.0 uF): calculate resonant frequency f_0.',
          '8. Determine output of NAND gate with inputs (1, 1).'
        ]
      }
    ]
  }
];
