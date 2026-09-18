import { OfficialPdfPage } from '../geographyPdf/types';

export const physicsChapter6Part1Pages: OfficialPdfPage[] = [
  // Page 161 - Book page 153
  {
    pdfPageNumber: 161,
    bookPageLabel: '153',
    chapterNumber: 6,
    sectionRef: '6.0',
    titleEn: 'CHAPTER SIX: ELECTROMAGNETISM AND ELECTRONICS',
    titleAm: 'ምዕራፍ ስድስት፡ ኤሌክትሮማግኔቲዝም እና ኤሌክትሮኒክስ',
    subtopicEn: '6.0. Intro & 6.1. Electrostatics: Charge Properties, Quantization & Conservation',
    subtopicAm: '፮.0 መግቢያ እና ፮.፩ ኤሌክትሮስታቲክስ፡ የቻርጅ ባህሪያት፣ መጠናዊነትና የቻርጅ ጥበቃ',
    pageType: 'content',
    contentEn: `CHAPTER SIX: ELECTROMAGNETISM AND ELECTRONICS

Electromagnetism is the study of electric and magnetic fields, their interactions with electric charges, and their wide-ranging technological applications ranging from electric power grids to microelectronic integrated circuits.

Learning Objectives:
At the end of this chapter, you will be able to:
• State Coulomb's Law and calculate electrostatic forces between point charges.
• Define and compute electric field E, electric potential V, and capacitance C.
• Apply Ohm's Law and solve multi-loop DC circuits using Kirchhoff's Rules.
• Describe magnetic forces on moving charges and currents (Lorentz force).
• Apply Faraday's Law and Lenz's Law of electromagnetic induction.
• Explain semiconductor physics, p-n junction diodes, transistors, and logic gates.

6.1. Electrostatics
Electrostatics is the study of stationary electric charges and their interactions.

Fundamental Properties of Electric Charge:
1. Two Kinds of Charge: Positive (protons) and Negative (electrons). Like charges REPEL; opposite charges ATTRACT.
2. Quantization of Charge: Charge exists only in discrete integer multiples of the elementary charge e:
   q = ± n e -------------------------------------------------------- (6.1.1)
   where e = 1.602 × 10⁻¹⁹ C (Coulombs), and n = 1, 2, 3, ...
3. Conservation of Charge: In any closed, isolated system, the net electric charge remains strictly constant.
4. Conductors vs Insulators:
   • Conductors (metals): Valence electrons are free to roam throughout the material.
   • Insulators (rubber, glass, plastic): Electrons are tightly bound to atoms.
   • Semiconductors (silicon, germanium): Electrical conductivity intermediate and tunable.`,
    contentAm: `ምዕራፍ ስድስት፡ ኤሌክትሮማግኔቲዝም እና ኤሌክትሮኒክስ (ELECTROMAGNETISM AND ELECTRONICS)

ኤሌክትሮማግኔቲዝም ስለ ኤሌክትሪክ እና ማግኔቲክ መስኮች፣ ስለ ቻርጆች እና ስለ ዘመናዊ ኤሌክትሮኒክስ መሳሪያዎች የሚያጠና ወሳኝ የፊዚክስ ዘርፍ ነው።

የምዕራፉ ዓላማዎች፡
• የኩሎምብን ህግ መተግበር እና የኤሌክትሪክ መስክን ማስላት፤
• የኤሌክትሪክ ፖቴንሺያል እና የካፓሲተር አሰራርን መረዳት፤
• የኦህም ህግን እና የኪርቾፍን ህጎች በመጠቀም ውስብስብ ሰርኪውቶችን መፍታት፤
• የሎሬንትዝ ማግኔቲክ ጉልበት እና የፋራዴይ ኢንዳክሽን ህግ፤
• ሴሚኮንዳክተሮች፣ ዳዮዶች፣ ትራንዚስተሮች እና የሎጂክ ጌቶች (Logic Gates) አሰራር።

፮.፩ ኤሌክትሮስታቲክስ (Electrostatics)
ኤሌክትሮስታቲክስ ባረፉ (የማይንቀሳቀሱ) የኤሌክትሪክ ቻርጆች ላይ የሚያጠና ነው።
የቻርጅ መሰረታዊ ባህሪያት፡
፩. ሁለት ዓይነት ቻርጆች አሉ፡ ፖዘቲቭ እና ኔጌቲቭ፤ ተመሳሳይ ቻርጆች ይገፋፋሉ፣ ተቃራኒዎች ይሳሳባሉ።
፪. የቻርጅ መጠናዊነት (Quantization)፡ q = n e (e = 1.602 × 10⁻¹⁹ C)።
፫. የቻርጅ ጥበቃ፡ በተገለለ ስርዓት ውስጥ አጠቃላይ ቻርጅ ምንጊዜም ቋሚ ነው።
፬. አስተላላፊዎች (ብረታብረት) እና ኤሌክትሪክ የማያስተላልፉ (ላስቲክ፣ መስታወት)።`
  },

  // Page 162 - Book page 154
  {
    pdfPageNumber: 162,
    bookPageLabel: '154',
    chapterNumber: 6,
    sectionRef: '6.1',
    titleEn: 'Coulombs Law of Electrostatic Force',
    titleAm: 'የኩሎምብ የኤሌክትሮስታቲክ ጉልበት ህግ',
    subtopicEn: 'F = k |q1 q2| / r^2, Coulomb Constant k = 8.99x10^9 N*m^2/C^2 & Permittivity eps_0',
    subtopicAm: 'የኩሎምብ ቀመር F = k |q1 q2| / r²፣ የኩሎምብ ቋሚ k እና የፐርሚቲቪቲ ቋሚ ε₀',
    pageType: 'content',
    contentEn: `Coulomb's Law:
In 1785, French physicist Charles-Augustin de Coulomb discovered experimentally that the electrostatic force between two stationary point charges q₁ and q₂ separated by distance r is:
F_e = k (|q₁ q₂| / r²) ---------------------------------------------- (6.1.2)
where:
• k = Coulomb's electrostatic constant:
  k = 1 / (4π ε₀) ≈ 8.988 × 10⁹ N·m²/C² ≈ 9.0 × 10⁹ N·m²/C²
• ε₀ = Permittivity of free space:
  ε₀ = 8.854 × 10⁻¹² C²/(N·m²)

Vector Form of Coulomb's Law:
The force exerted by charge q₁ on charge q₂ is directed along the line joining them:
F⃗₁₂ = k (q₁ q₂ / r²) r̂₁₂ -------------------------------------------- (6.1.3)
where r̂₁₂ is a unit vector pointing from q₁ to q₂.
By Newton's Third Law:
F⃗₂₁ = - F⃗₁₂

Comparison with Newton's Gravitation (F_g = G m₁ m₂ / r²):
Both are inverse-square central forces, but:
1. Electric forces can be either attractive OR repulsive; gravity is strictly attractive.
2. The electric force is stupendously stronger: for two protons, F_e / F_g ≈ 10³⁶!`,
    contentAm: `የኩሎምብ ህግ (Coulomb's Law)፡
ቻርልስ ኩሎምብ በሁለት ነጥብ ቻርጆች (q1 እና q2) መካከል ያለው የኤሌክትሮስታቲክ ጉልበት በርቀታቸው ካሬ (r²) እንደሚቀንስ አረጋገጠ፡
F = k (|q₁ q₂| / r²) (ቀመር 6.1.2)
• k = የኩሎምብ ቋሚ = 8.99 × 10⁹ N·m²/C²
• k = 1 / (4π ε₀)፤ ε₀ = 8.854 × 10⁻¹² C²/(N·m²) (የህዋ ፐርሚቲቪቲ)።

የኩሎምብ ህግ በቬክተር፡
F⃗₁₂ = k (q₁ q₂ / r²) r̂₁₂
እንደ ኒውተን ሦስተኛ ህግ፡ F⃗₂₁ = - F⃗₁₂።

ከስበት ጉልበት ጋር ሲነጻጸር፡
፩. የኤሌክትሪክ ጉልበት መሳሳብም መገፋፋትም ይችላል፤ ስበት ግን መሳሳብ ብቻ ነው።
፪. የኤሌክትሪክ ጉልበት ከስበት ጉልበት እጅግ በጣም የበረታ ነው (ለፕሮቶኖች በ 10³⁶ እጥፍ ይበልጣል!)።`
  },

  // Page 163 - Book page 155
  {
    pdfPageNumber: 163,
    bookPageLabel: '155',
    chapterNumber: 6,
    sectionRef: '6.1',
    titleEn: 'Superposition Principle for Electric Forces',
    titleAm: 'የኤሌክትሪክ ጉልበት ልዕለ-ድርብርብ መርህ',
    subtopicEn: 'F_net = F_1 + F_2 + ... + F_N & Multiple Point Charges Worked Problem',
    subtopicAm: 'የተጣራ ጉልበት ስሌት በቬክተር ድምር እና የተሰራ ምሳሌ',
    pageType: 'content',
    contentEn: `Superposition Principle for Electric Forces:
When more than two charges are present, the net electric force on any single charge is the VECTOR SUM of the individual electrostatic forces exerted on it by all the other charges:
F⃗_net = F⃗₁ + F⃗₂ + F⃗₃ + ... = Σ F⃗_i -------------------------------- (6.1.4)

Example:
Three point charges lie along the x-axis:
• q₁ = +6.0 μC at x = 0.0 m
• q₂ = -2.0 μC at x = 3.0 m
• q₃ = +4.0 μC at x = 5.0 m
Find the net electrostatic force exerted on charge q₂.

Solution:
Force on q₂ due to q₁:
q₁ is positive, q₂ is negative  =>  attractive force pulling q₂ toward the LEFT (-x direction):
F₁₂ = k |q₁ q₂| / r₁₂² = (8.99 × 10⁹)(6.0 × 10⁻⁶)(2.0 × 10⁻⁶) / (3.0)²
F₁₂ = 0.108 / 9.0 = 0.0120 N  =>  F⃗₁₂ = - 0.0120 î N.

Force on q₂ due to q₃:
q₃ is positive, q₂ is negative  =>  attractive force pulling q₂ toward the RIGHT (+x direction):
r₂₃ = 5.0 m - 3.0 m = 2.0 m
F₃₂ = k |q₃ q₂| / r₂₃² = (8.99 × 10⁹)(4.0 × 10⁻⁶)(2.0 × 10⁻⁶) / (2.0)²
F₃₂ = 0.0719 / 4.0 = 0.0180 N  =>  F⃗₃₂ = + 0.0180 î N.

Net force on q₂:
F⃗_net = F⃗₁₂ + F⃗₃₂ = - 0.0120 î + 0.0180 î = + 0.0060 î N = + 6.0 × 10⁻³ N (to the right).`,
    contentAm: `የልዕለ-ድርብርብ መርህ ለጉልበት፡
በአንድ ቻርጅ ላይ የሚሳረፈው አጠቃላይ ጉልበት በሌሎች ቻርጆች የሚደረጉበት የነጠላ ጉልበቶች ቬክተር ድምር ነው፡
F⃗_net = Σ F⃗_i

የተሰራ ምሳሌ፡
ሦስት ቻርጆች በ x-ዛቢያ ላይ ተቀምጠዋል፡
q1 = +6.0 μC በ x = 0፤ q2 = -2.0 μC በ x = 3.0 m፤ q3 = +4.0 μC በ x = 5.0 m። በ q2 ላይ የሚያርፈውን የተጣራ ጉልበት ፈልግ፡
• በ q1 ምክንያት፡ ወደ ግራ ይሳባል (-x)፡ F12 = 0.012 N ወደ ግራ።
• በ q3 ምክንያት፡ ወደ ቀኝ ይሳባል (+x)፡ F32 = 0.018 N ወደ ቀኝ።
የተጣራ ጉልበት፡
F_net = +0.018 - 0.012 = +0.0060 N (ወደ ቀኝ)።`
  },

  // Page 164 - Book page 156
  {
    pdfPageNumber: 164,
    bookPageLabel: '156',
    chapterNumber: 6,
    sectionRef: '6.1.1',
    titleEn: 'Electric Field and Field Lines',
    titleAm: 'የኤሌክትሪክ መስክ (Electric Field) እና የመስክ መስመሮች',
    subtopicEn: '6.1.1. E = F / q_0 [N/C], Field of Point Charge E = k q / r^2 & Line Rules',
    subtopicAm: '፮.፩.፩ የኤሌክትሪክ መስክ ትርጉም (E = F/q₀)፣ የነጥብ ቻርጅ መስክና የመስመሮች ህግጋት',
    pageType: 'content',
    contentEn: `6.1.1. The Electric Field
The electric field E at any point in space is defined as the electrostatic force F experienced by a small positive test charge q₀ placed at that point, divided by the magnitude of the test charge:
E⃗ = F⃗ / q₀ --------------------------------------------------------- (6.1.5)
SI Unit of Electric Field: Newtons per Coulomb (N/C) or Volts per meter (V/m).
The force on any charge q placed in an electric field E is:
F⃗ = q E⃗ ------------------------------------------------------------ (6.1.6)
• If q is positive, F⃗ is in the same direction as E⃗.
• If q is negative, F⃗ is in the opposite direction to E⃗.

Electric Field of a Point Charge:
By Coulomb's Law, the field at distance r from a point charge q is:
E⃗ = k (q / r²) r̂ ---------------------------------------------------- (6.1.7)
• Points radially OUTWARD from a positive charge (+q).
• Points radially INWARD toward a negative charge (-q).

Rules for Electric Field Lines:
1. Lines must originate on POSITIVE charges and terminate on NEGATIVE charges.
2. The number of lines leaving or entering a charge is proportional to the magnitude of the charge.
3. The density of lines (lines per unit area) at any location is proportional to the strength of the field.
4. Electric field lines NEVER CROSS one another (field direction is unique at every point).`,
    contentAm: `፮.፩.፩ የኤሌክትሪክ መስክ (Electric Field - E)
በአንድ ቦታ ላይ የኤሌክትሪክ መስክ ማለት በዚያ ቦታ የተቀመጠ ትንሽ ፖዘቲቭ የሙከራ ቻርጅ (q₀) የሚያስተናግደው ጉልበት ለቻርጁ ሲካፈል ነው፡
E⃗ = F⃗ / q₀ (ቀመር 6.1.5)
አሃድ፡ ኒውተን በኩሎምብ (N/C) ወይም ቮልት በሜትር (V/m)።
ጉልበት፡ F⃗ = q E⃗

የነጥብ ቻርጅ የኤሌክትሪክ መስክ፡
E = k (q / r²) (ቀመር 6.1.7)
• ከፖዘቲቭ ቻርጅ ወደ ውጭ ይወጣል፤
• ወደ ኔጌቲቭ ቻርጅ ወደ ውስጥ ይገባል።

የኤሌክትሪክ መስክ መስመሮች ህጎች፡
፩. ከመስመሮቹ ከፖዘቲቭ ተነስተው ወደ ኔጌቲቭ ይገባሉ፤
፪. የመስመሮቹ ብዛት ከቻርጁ ግዝፈት ጋር ቀጥተኛ ተመጣጣኝ ነው፤
፫. የመስመሮቹ ጥግግት የመስኩን ጥንካሬ ያሳያል፤
፬. የኤሌክትሪክ መስመሮች በፍጹም እርስ በርሳቸው አይቆራረጡም!`
  },

  // Page 165 - Book page 157
  {
    pdfPageNumber: 165,
    bookPageLabel: '157',
    chapterNumber: 6,
    sectionRef: '6.1.1',
    titleEn: 'Continuous Charge Distributions & Electric Dipoles',
    titleAm: 'የተዘረጉ ቻርጆች እና የኤሌክትሪክ ዳይፖል (Electric Dipole)',
    subtopicEn: 'Linear lambda, Surface sigma, Volume rho Densities, Dipole Moment p = q d, Torque',
    subtopicAm: 'መስመራዊ፣ ገጸ-ምድርና ይዘታዊ እፍጋት እንዲሁም የዳይፖል ቶርክ ቀመር τ = p × E',
    pageType: 'content',
    contentEn: `Continuous Charge Distributions:
When charge is spread smoothly over a macroscopic object, we use charge densities:
• Linear charge density: λ = dq / dL [C/m]  =>  dq = λ dL
• Surface charge density: σ = dq / dA [C/m²] =>  dq = σ dA
• Volume charge density: ρ = dq / dV [C/m³] =>  dq = ρ dV
Total electric field:
E⃗ = k ∫ (dq / r²) r̂ ------------------------------------------------ (6.1.8)

The Electric Dipole:
An electric dipole consists of two equal and opposite charges +q and -q separated by a small distance d.
Electric Dipole Moment (p⃗):
A vector pointing from the negative charge (-q) to the positive charge (+q):
p⃗ = q d⃗ ------------------------------------------------------------ (6.1.9)
Units: Coulomb-meters (C·m).

Behavior in a Uniform Electric Field E:
1. Net Force: F_net = (+q)E + (-q)E = 0 (no net translational acceleration).
2. Torque (τ⃗):
   The opposing forces create a restoring torque tending to align p⃗ with E⃗:
   τ⃗ = p⃗ × E⃗ -------------------------------------------------------- (6.1.10)
   Magnitude: τ = p E sinθ.
3. Potential Energy (U):
   U = - p⃗ · E⃗ = - p E cosθ ----------------------------------------- (6.1.11)
   • Minimum energy (stable equilibrium) at θ = 0° (dipole aligned with field).
   • Maximum energy (unstable equilibrium) at θ = 180°.`,
    contentAm: `የተዘረጉ ቻርጆች እና እፍጋቶች፡
• መስመራዊ እፍጋት፡ λ = dq / dL [C/m]
• የገጽታ እፍጋት፡ σ = dq / dA [C/m²]
• የይዘት እፍጋት፡ ρ = dq / dV [C/m³]

የኤሌክትሪክ ዳይፖል (Electric Dipole)፡
በአጭር ርቀት (d) የተራራቁ እኩልና ተቃራኒ ቻርጆች (+q እና -q) ጥንድ ዳይፖል ይባላል።
የዳይፖል ሞመንት፡
p⃗ = q d⃗ (ከኔጌቲቭ ወደ ፖዘቲቭ የሚያመለክት)።

በኤሌክትሪክ መስክ ውስጥ ያለው ባህሪ፡
፩. የተጣራ ጉልበት ዜሮ ነው (F_net = 0)።
፪. ቶርክ (Torque)፡ ዳይፖሉን ከመስኩ ጋር ለማስተካከል ይሞክራል፡
τ⃗ = p⃗ × E⃗ (ቀመር 6.1.10)
፫. ፖቴንሺያል ኃይል፡
U = - p⃗ · E⃗ = - p E cosθ (ቀመር 6.1.11)`
  },

  // Page 166 - Book page 158
  {
    pdfPageNumber: 166,
    bookPageLabel: '158',
    chapterNumber: 6,
    sectionRef: '6.1.2',
    titleEn: 'Electric Flux and Gausss Law',
    titleAm: 'የኤሌክትሪክ ፍለክስ (Flux) እና የጋውስ ህግ (Gausss Law)',
    subtopicEn: '6.1.2. Flux Phi_E = Integral E * dA & Gausss Formula: Phi_E = Q_enclosed / eps_0',
    subtopicAm: '፮.፩.፪ የኤሌክትሪክ ፍለክስ (Φ_E = E · A) እና የጋውስ ቀመር (Φ_E = Q_enclosed / ε₀)',
    pageType: 'content',
    contentEn: `6.1.2. Electric Flux and Gauss's Law
Electric Flux (Φ_E):
Electric flux is a measure of the total number of electric field lines penetrating a given surface of area A:
For a uniform field and flat surface:
Φ_E = E⃗ · A⃗ = E A cosθ ---------------------------------------------- (6.1.12)
where A⃗ is the surface normal area vector and θ is the angle between E⃗ and A⃗.
For an arbitrary surface and variable field:
Φ_E = ∫ E⃗ · dA⃗ ----------------------------------------------------- (6.1.13)
SI Unit of Flux: N·m²/C or V·m.

Gauss's Law:
German mathematician Carl Friedrich Gauss (1777–1855) formulated one of the fundamental laws of electromagnetism:
"The net electric flux through any closed Gaussian surface is directly proportional to the total net electric charge Q_enclosed within that surface:"
Φ_E = ∮ E⃗ · dA⃗ = Q_enclosed / ε₀ ----------------------------------- (6.1.14)

Key Principles of Gauss's Law:
1. Gauss's Law holds for ANY closed surface of any arbitrary shape.
2. Charges outside the Gaussian surface contribute zero net flux through the closed surface.
3. Gauss's Law is mathematically equivalent to Coulomb's Law, but provides an extraordinarily elegant tool for calculating electric fields of highly symmetric charge distributions!`,
    contentAm: `፮.፩.፪ የኤሌክትሪክ ፍለክስ እና የጋውስ ህግ (Gauss's Law)
የኤሌክትሪክ ፍለክስ (Electric Flux - Φ_E)፡
በአንድ ወለል ላይ የሚያልፉትን የኤሌክትሪክ መስክ መስመሮች ጠቅላላ ብዛት የሚለካ ነው፡
Φ_E = E⃗ · A⃗ = E A cosθ (ቀመር 6.1.12)
አሃድ፡ N·m²/C ወይም V·m።

የጋውስ ህግ (Gauss's Law)፡
"በማንኛውም ዝግ ገጽታ (Gaussian surface) ውስጥ የሚያልፈው አጠቃላይ የተጣራ የኤሌክትሪክ ፍለክስ በውስጡ ከተዘጋበት አጠቃላይ ቻርጅ (Q_enclosed) ጋር እኩል ነው፡"
Φ_E = ∮ E⃗ · dA⃗ = Q_enclosed / ε₀ (ቀመር 6.1.14)

ዋና ዋና መርሆዎች፡
፩. የጋውስ ህግ ለማንኛውም ዝግ ገጽታ ይሰራል፤
፪. ከገጽታው ውጭ ያሉ ቻርጆች የተጣራ ፍለክስ አያስመዘግቡም (ዜሮ ነው)፤
፫. ከፍተኛ ሲሜትሪ (ክብ፣ ሲሊንደር፣ ወለል) ላላቸው ቻርጆች የኤሌክትሪክ መስክን በቀላሉ ለማስላት ያስችላል።`
  },

  // Page 167 - Book page 159
  {
    pdfPageNumber: 167,
    bookPageLabel: '159',
    chapterNumber: 6,
    sectionRef: '6.1.2',
    titleEn: 'Applications of Gausss Law: Spherical Symmetry & Conductors',
    titleAm: 'የጋውስ ህግ አተገባበር፡ ክብ ሲሜትሪ እና ኮንዳክተሮች',
    subtopicEn: 'Spherical Shell Field & Conductors in Electrostatic Equilibrium (E_inside = 0)',
    subtopicAm: 'የክብ ሽፋን መስክ እና ሚዛን ላይ ባሉ አስተላላፊዎች ውስጠኛ መስክ ዜሮ መሆን',
    pageType: 'content',
    contentEn: `Applications of Gauss's Law:

1. Spherically Symmetric Charge (Spherical Conducting Shell of radius R, charge Q):
Construct a spherical Gaussian surface of radius r concentric with the shell:
∮ E dA = E (4π r²) = Q_enc / ε₀
• Outside the shell (r > R): Q_enc = Q
  E = Q / (4π ε₀ r²) = k Q / r² (behaves as if all charge is at center!).
• Inside the shell (r < R): Q_enc = 0
  E = 0! (Electric field inside an empty conducting shell is identically ZERO!).

Properties of Conductors in Electrostatic Equilibrium:
1. The electric field is ZERO everywhere inside the conductor: E_inside = 0.
   (If E were not zero, free electrons would experience a force and accelerate, which contradicts equilibrium!).
2. Any excess charge resides entirely on the EXTERNAL SURFACE of the conductor.
3. The electric field just outside the surface of a charged conductor is PERPENDICULAR to the surface and has magnitude:
   E = σ / ε₀ ------------------------------------------------------- (6.1.15)
   where σ is the local surface charge density.
4. Faraday Cage: An enclosure made of conductive material shields its interior from external electric fields. Metal car bodies protect passengers from lightning strikes!`,
    contentAm: `የጋውስ ህግ ተግባራዊ አተገባበር፡
፩. ክብ ቅርጽ ያለው ቻርጅ (ራዲየስ R)፡
• ከክቡ ውጭ (r > R)፡ E = k Q / r² (ቻርጁ በሙሉ ማዕከሉ ላይ እንዳለ ይቆጠራል)።
• በክቡ ውስጥ (r < R)፡ በውስጡ የተዘጋ ቻርጅ ስለሌለ E = 0 ይሆናል!

አስተላላፊዎች (Conductors) በሚዛን ላይ ሲሆኑ ያላቸው ባህሪያት፡
፩. በአስተላላፊ አካል ውስጥ የኤሌክትሪክ መስክ ምንጊዜም ዜሮ ነው (E_inside = 0)!
፪. ማንኛውም ትርፍ ቻርጅ ሙሉ በሙሉ በውጨኛው ገጽታ ላይ ብቻ ይሰፍራል።
፫. ከገጹ ውጭ ያለው መስክ ለገጹ ቀጤ-ነክ ሲሆን መጠኑ፡
E = σ / ε₀ (ቀመር 6.1.15)
፬. የፋራዴይ ጎጆ (Faraday Cage)፡ በብረት የተሰራ ክፍል ውስጥ የውጭ ኤሌክትሪክ መስክ አይገባም። መኪና ውስጥ ያሉ ሰዎችን የመብረቅ አደጋ የማያገኛቸው በዚህ ምክንያት ነው!`
  },

  // Page 168 - Book page 160
  {
    pdfPageNumber: 168,
    bookPageLabel: '160',
    chapterNumber: 6,
    sectionRef: '6.1.2',
    titleEn: 'Gausss Law for Cylinders and Infinite Sheets',
    titleAm: 'የጋውስ ህግ ለሲሊንደር እና ማለቂያ ለሌለው ወለል',
    subtopicEn: 'Infinite Line E = lambda / (2*pi*eps_0*r) & Infinite Sheet E = sigma / (2*eps_0)',
    subtopicAm: 'የመስመር ቻርጅ መስክ E = λ / (2πε₀r) እና የወለል ቻርጅ መስክ E = σ / (2ε₀)',
    pageType: 'content',
    contentEn: `2. Cylindrical Symmetry (Infinite Line of Charge with linear density λ):
Choose a cylindrical Gaussian surface of radius r and length L coaxial with the line:
Flux through the two flat end caps is zero (E is parallel to caps).
Flux through curved wall:
Φ_E = E (2π r L) = Q_enc / ε₀ = (λ L) / ε₀
E = λ / (2π ε₀ r) = 2 k λ / r --------------------------------------- (6.1.16)
The electric field drops off as 1/r (slower than a point charge's 1/r²!).

3. Planar Symmetry (Infinite Non-conducting Sheet of Charge with surface density σ):
Choose a cylindrical "pillbox" Gaussian surface of cross-sectional area A penetrating the sheet perpendicularly:
Electric field points away from the sheet on both sides.
Flux through the two circular faces:
Φ_E = E A + E A = 2 E A = Q_enc / ε₀ = (σ A) / ε₀
E = σ / (2 ε₀) ------------------------------------------------------ (6.1.17)
CRITICAL RESULT: The electric field produced by an infinite sheet of charge is UNIFORM and INDEPENDENT of distance from the sheet!

Parallel-Plate Capacitor Field:
Between two oppositely charged conducting plates (+σ and -σ):
E = σ / (2ε₀) + σ / (2ε₀) = σ / ε₀ ---------------------------------- (6.1.18)
Outside the plates, the fields cancel to zero.`,
    contentAm: `፪. ሲሊንደራዊ ሲሜትሪ (ማለቂያ የሌለው የመስመር ቻርጅ λ)፡
E = λ / (2π ε₀ r) (ቀመር 6.1.16)
መስኩ በርቀቱ (1/r) ምጣኔ ይቀንሳል።

፫. የወለል ሲሜትሪ (ማለቂያ የሌለው የወለል ቻርጅ σ)፡
በሁለቱም በኩል ያለው ፍለክስ፡ 2 E A = (σ A) / ε₀
E = σ / (2 ε₀) (ቀመር 6.1.17)
አስደናቂ ውጤት፡ ማለቂያ የሌለው የወለል ቻርጅ የሚያመነጨው የኤሌክትሪክ መስክ ወጥ (Uniform) ሲሆን ከርቀት ጋር በፍጹም አይለወጥም!

በትይዩ ፕሌት ካፓሲተር መሀል ያለው መስክ፡
በሁለቱ ተቃራኒ ፕሌቶች (+σ እና -σ) መሀል መስኩ ተደምሮ፡
E = σ / ε₀ (ቀመር 6.1.18) ይሆናል።`
  },

  // Page 169 - Book page 161
  {
    pdfPageNumber: 169,
    bookPageLabel: '161',
    chapterNumber: 6,
    sectionRef: '6.1.3',
    titleEn: 'Electric Potential Energy & Electric Potential',
    titleAm: 'የኤሌክትሪክ ፖቴንሺያል ኃይል እና የኤሌክትሪክ ፖቴንሺያል (V)',
    subtopicEn: '6.1.3. Delta U = - W_int, Delta V = Delta U / q [Volts = J/C] & Electron-Volt',
    subtopicAm: '፮.፩.፫ የፖቴንሺያል ለውጥ ΔV = ΔU / q [ቮልት = J/C] እና የኤሌክትሮን-ቮልት (eV) አሃድ',
    pageType: 'content',
    contentEn: `6.1.3. Electric Potential Energy and Electric Potential
Electric Potential Energy (U):
The electrostatic force is conservative. When a test charge q₀ moves in an electric field E⃗ from point A to point B:
The change in electric potential energy ΔU is the negative of the work done by the conservative electric force:
ΔU = U_B - U_A = - W_e = - q₀ ∫_{A}^{B} E⃗ · ds⃗ ---------------------- (6.1.19)

Electric Potential (V):
Electric potential is the potential energy per unit charge:
V = U / q₀
The electric potential difference (voltage) between two points A and B is:
ΔV = V_B - V_A = ΔU / q₀ = - ∫_{A}^{B} E⃗ · ds⃗ ----------------------- (6.1.20)
SI Unit of Electric Potential: Volt (V):
1 Volt = 1 Joule per Coulomb (1 V = 1 J/C).

Uniform Electric Field:
For a uniform field E directed along the distance d:
ΔV = - E d  =>  E = - ΔV / d ---------------------------------------- (6.1.21)
This shows why electric field can also be expressed in Volts per meter (1 N/C = 1 V/m).

The Electron-Volt (eV):
The energy gained by an electron or proton accelerated through a potential difference of 1 Volt:
1 eV = (1.602 × 10⁻¹⁹ C)(1.0 V) = 1.602 × 10⁻¹⁹ J ------------------- (6.1.22)`,
    contentAm: `፮.፩.፫ የኤሌክትሪክ ፖቴንሺያል ኃይል እና ፖቴንሺያል (V)
የኤሌክትሪክ ፖቴንሺያል ለውጥ (Electric Potential - Voltage)፡
በአንድ ቻርጅ ላይ የሚኖር ፖቴንሺያል ኃይል ለቻርጁ ሲካፈል ነው፡
ΔV = V_B - V_A = ΔU / q₀ = - ∫ E⃗ · ds⃗ (ቀመር 6.1.20)
የSI አሃድ፡ ቮልት (Volt - V)፤ 1 V = 1 ጁል በኩሎምብ (J/C)።

በወጥ የኤሌክትሪክ መስክ ውስጥ፡
ΔV = - E d  =>  E = - ΔV / d (ቀመር 6.1.21)
ስለዚህ የኤሌክትሪክ መስክ አሃድ ቮልት በሜትር (V/m) ተብሎም ይገለጻል።

የኤሌክትሮን-ቮልት (Electron-Volt - eV)፡
አንድ ኤሌክትሮን በ1 ቮልት የፖቴንሺያል ልዩነት ውስጥ ሲጣደፍ የሚያገኘው ኃይል፡
1 eV = 1.602 × 10⁻¹⁹ ጁል (ቀመር 6.1.22)`
  },

  // Page 170 - Book page 162
  {
    pdfPageNumber: 170,
    bookPageLabel: '162',
    chapterNumber: 6,
    sectionRef: '6.1.3',
    titleEn: 'Potential of Point Charges & Equipotential Surfaces',
    titleAm: 'የነጥብ ቻርጆች ፖቴንሺያል እና እኩል-ፖቴንሺያል ወለሎች',
    subtopicEn: 'V = k q / r, Potential Gradient E = - dV / dx & Equipotential Properties',
    subtopicAm: 'ቀመር V = k q / r፣ ፖቴንሺያል ግሬዲየንት እና እኩል-ፖቴንሺያል ገጾች ለመስኩ ቀጤ-ነክ መሆን',
    pageType: 'content',
    contentEn: `Potential Due to a Point Charge:
Taking the reference zero potential at infinite distance (V = 0 at r = ∞):
V = k (q / r) = (1 / 4π ε₀) (q / r) --------------------------------- (6.1.23)
Notice:
• Potential is a SCALAR quantity (much simpler to calculate than vector E⃗!).
• V is positive for a positive charge (+q).
• V is negative for a negative charge (-q).

Potential Due to Multiple Point Charges:
By algebraic superposition (simple scalar addition):
V_total = k Σ (q_i / r_i) ------------------------------------------- (6.1.24)

Potential Gradient (Relation Between E and V):
In one dimension:
E_x = - dV / dx ----------------------------------------------------- (6.1.25)
In three dimensions: E⃗ = - ∇V = - (∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂).
The electric field always points in the direction of STEEPEST DECREASE in electric potential!

Equipotential Surfaces:
An equipotential surface is any surface on which the electric potential V is the same at every point.
Properties:
1. The potential difference between any two points on an equipotential surface is zero (ΔV = 0).
2. The work done moving a charge along an equipotential surface is ZERO: W = q ΔV = 0.
3. Electric field lines are ALWAYS PERPENDICULAR to equipotential surfaces at every point!`,
    contentAm: `የነጥብ ቻርጅ ፖቴንሺያል፡
ማለቂያ በሌለው ርቀት (r = ∞) ፖቴንሺያል ዜሮ እንደሆነ በማሰብ፡
V = k (q / r) (ቀመር 6.1.23)
• ፖቴንሺያል ስካላር (Scalar) ነው (እንደ ቬክተር አቅጣጫ የለውም፣ በቀላሉ ይደመራል)።
• ለፖዘቲቭ ቻርጅ ፖዘቲቭ፣ ለኔጌቲቭ ቻርጅ ኔጌቲቭ ይሆናል።

የተጣራ ፖቴንሺያል፡ V_tot = k Σ (q_i / r_i)

የፖቴንሺያል ግሬዲየንት፡
E_x = - dV / dx (ቀመር 6.1.25)
የኤሌክትሪክ መስክ ምንጊዜም ፖቴንሺያል በፍጥነት ወደሚቀንስበት አቅጣጫ ያመለክታል!

እኩል-ፖቴንሺያል ገጾች (Equipotential Surfaces)፡
በሁሉም ነጥቦች ላይ እኩል ፖቴንሺያል (V) ያላቸው ገጾች ናቸው።
• ቻርጅ በእኩል-ፖቴንሺያል ገጽ ላይ ለማንቀሳቀስ የሚሰራው ስራ ዜሮ ነው (W = 0)፤
• የኤሌክትሪክ መስክ መስመሮች ለእኩል-ፖቴንሺያል ገጾች ምንጊዜም ቀጤ-ነክ (በ90 ዲግሪ) ናቸው!`
  },

  // Page 171 - Book page 163
  {
    pdfPageNumber: 171,
    bookPageLabel: '163',
    chapterNumber: 6,
    sectionRef: '6.1.4',
    titleEn: 'Capacitance & Parallel-Plate Capacitors',
    titleAm: 'ካፓሲታንስ (Capacitance) እና ትይዩ ፕሌት ካፓሲተር',
    subtopicEn: '6.1.4. C = Q / V [Farads], C_0 = eps_0 A / d & Dielectrics C = kappa * C_0',
    subtopicAm: '፮.፩.፬ የካፓሲታንስ ትርጉም (C = Q/V)፣ ትይዩ ፕሌት (C = ε₀ A / d) እና ዳይኤሌክትሪክ (κ)',
    pageType: 'content',
    contentEn: `6.1.4. Capacitance and Dielectrics
A capacitor is an electrical component consisting of two isolated conductors carrying equal and opposite charges (+Q and -Q) separated by an insulating gap or dielectric.

Definition of Capacitance (C):
Capacitance is the ratio of the magnitude of the charge Q on either conductor to the potential difference V between them:
C = Q / V ----------------------------------------------------------- (6.1.26)
SI Unit: Farad (F) = 1 Coulomb per Volt (1 F = 1 C/V).
The Farad is an enormous unit; practical values are microfarads (1 μF = 10⁻⁶ F), nanofarads (1 nF = 10⁻⁹ F), or picofarads (1 pF = 10⁻¹² F).

The Parallel-Plate Capacitor:
Two parallel conducting plates of area A separated by distance d in vacuum:
Electric field between plates: E = σ / ε₀ = Q / (ε₀ A).
Potential difference: V = E d = Q d / (ε₀ A).
C₀ = Q / V = ε₀ (A / d) --------------------------------------------- (6.1.27)
Capacitance depends ONLY on the geometric dimensions (area A, separation d)!

Dielectrics and the Dielectric Constant (κ):
When an insulating dielectric material (mica, paper, ceramic) fills the space between plates, induced polarization reduces the internal electric field: E = E₀ / κ.
Capacitance INCREASES by the factor κ (dielectric constant, κ ≥ 1):
C = κ C₀ = κ ε₀ (A / d) --------------------------------------------- (6.1.28)
• Vacuum: κ = 1.00000; Air: κ = 1.00059; Paper: κ = 3.7; Water: κ = 80.`,
    contentAm: `፮.፩.፪ ካፓሲታንስ እና ዳይኤሌክትሪክ (Capacitance & Dielectrics)
ካፓሲተር የኤሌክትሪክ ቻርጅ እና ኃይል የሚያጠራቅም መሳሪያ ነው።
የካፓሲታንስ ትርጉም፡
C = Q / V (ቀመር 6.1.26)
አሃድ፡ ፋራድ (Farad - F)፤ 1 F = 1 C/V። ተግባራዊ አሃዶች፡ ማይክሮፋራድ (μF)፣ ፒኮፋራድ (pF)።

ትይዩ ፕሌት ካፓሲተር (Parallel-Plate Capacitor)፡
ስፋታቸው A በሆነና በ d ርቀት በተራራቁ ሁለት ፕሌቶች፡
C₀ = ε₀ (A / d) (ቀመር 6.1.27)
ካፓሲታንስ በፕሌቶቹ ስፋትና ርቀት ጂኦሜትሪ ላይ ብቻ የተመሰረተ ነው!

ዳይኤሌክትሪክ (Dielectric Materials - κ)፡
በፕሌቶቹ መሀል ኤሌክትሪክ የማያስተላልፍ ዳይኤሌክትሪክ ሲገባ ካፓሲታንሱ በ κ እጥፍ ይጨምራል፡
C = κ C₀ = κ ε₀ (A / d) (ቀመር 6.1.28)
(ለምሳሌ የወረቀት κ = 3.7፤ የውሃ κ = 80)።`
  },

  // Page 172 - Book page 164
  {
    pdfPageNumber: 172,
    bookPageLabel: '164',
    chapterNumber: 6,
    sectionRef: '6.1.4',
    titleEn: 'Capacitor Combinations & Energy Storage',
    titleAm: 'የካፓሲተሮች ጥምረት እና የኃይል ክምችት',
    subtopicEn: 'Series 1/C_eq = 1/C1 + 1/C2, Parallel C_eq = C1 + C2 & Stored Energy U = 1/2 C V^2',
    subtopicAm: 'የተከታታይ እና የትይዩ ካፓሲተሮች ቀመር እንዲሁም የተጠራቀመ ኃይል (U = 1/2 C V²)',
    pageType: 'content',
    contentEn: `Capacitor Combinations:

1. Parallel Combination:
Capacitors connected across the same common voltage V:
• Total charge is the sum: Q_tot = Q₁ + Q₂ + Q₃ = C₁V + C₂V + C₃V
• Equivalent Capacitance:
  C_eq = C₁ + C₂ + C₃ + ... ----------------------------------------- (6.1.29)
  Parallel connection INCREASES total capacitance.

2. Series Combination:
Capacitors connected end-to-end carrying identical charge Q:
• Total voltage is the sum: V_tot = V₁ + V₂ + V₃ = Q/C₁ + Q/C₂ + Q/C₃
• Equivalent Capacitance:
  1 / C_eq = 1 / C₁ + 1 / C₂ + 1 / C₃ + ... ------------------------- (6.1.30)
  For two capacitors in series: C_eq = (C₁ C₂) / (C₁ + C₂).
  Series connection DECREASES total capacitance (C_eq is always smaller than the smallest capacitor!).

Energy Stored in a Charged Capacitor:
Charging a capacitor requires doing work against the opposing electric field:
dU = V dq = (q / C) dq
Integrating from 0 to total charge Q:
U = 1/2 (Q² / C) = 1/2 Q V = 1/2 C V² ------------------------------- (6.1.31)
Energy Density (energy stored per unit volume in the electric field):
u_E = U / (A d) = 1/2 ε₀ E² [J/m³] ---------------------------------- (6.1.32)`,
    contentAm: `የካፓሲተሮች ጥምረት፡

፩. ትይዩ ጥምረት (Parallel)፡
ቮልቴጃቸው እኩል ነው፤ ቻርጃቸው ይደመራል፡
C_eq = C₁ + C₂ + C₃ + ... (ቀመር 6.1.29)
ትይዩ ማገናኘት አጠቃላይ ካፓሲታንስን ይጨምራል።

፪. ተከታታይ ጥምረት (Series)፡
ቻርጃቸው እኩል ነው፤ ቮልቴጃቸው ይደመራል፡
1 / C_eq = 1 / C₁ + 1 / C₂ + 1 / C₃ + ... (ቀመር 6.1.30)
ለ2 ካፓሲተሮች፡ C_eq = (C1 C2) / (C1 + C2)። ተከታታይ ማገናኘት አጠቃላይ ካፓሲታንስን ይቀንሳል።

በካፓሲተር ውስጥ የተጠራቀመ ኃይል (U)፡
U = 1/2 Q V = 1/2 C V² = Q² / (2C) (ቀመር 6.1.31)
በኤሌክትሪክ መስኩ ውስጥ ያለው የኃይል እፍጋት፡
u_E = 1/2 ε₀ E² [J/m³] (ቀመር 6.1.32)`
  },

  // Page 173 - Book page 165
  {
    pdfPageNumber: 173,
    bookPageLabel: '165',
    chapterNumber: 6,
    sectionRef: '6.2',
    titleEn: 'Electric Current, Current Density & Drift Speed',
    titleAm: 'የኤሌክትሪክ ፍሰት (Current)፣ ፍሰት እፍጋት እና የመንሸራተት ፍጥነት',
    subtopicEn: '6.2. I = dQ / dt [Amperes], J = I / A & Microscopic Drift Velocity v_d',
    subtopicAm: '፮.፪ የኤሌክትሪክ ፍሰት (I = ΔQ/Δt [አምፔር]) እና የማይክሮስኮፒክ ድሪፍት ፍጥነት (vd)',
    pageType: 'content',
    contentEn: `6.2. Electric Current and Direct Current (DC) Circuits
Electric Current (I):
Electric current is defined as the net rate of flow of electric charge through a given cross-sectional area:
I = dQ / dt --------------------------------------------------------- (6.2.1)
SI Unit: Ampere (A) = 1 Coulomb per second (1 A = 1 C/s).

Direction of Current:
• Conventional Current: By historical convention (established by Benjamin Franklin), current is defined in the direction in which POSITIVE charges would move (from higher potential to lower potential).
• Real Physical Electron Flow: In metallic wires, the actual charge carriers are negatively charged electrons, which drift in the OPPOSITE direction to conventional current!

Current Density (J⃗) and Drift Speed (v_d):
Current density is current per unit cross-sectional area:
J = I / A ----------------------------------------------------------- (6.2.2)
Units: A/m².
Microscopically, if a conductor has n free charge carriers per unit volume, each with charge q moving with average drift velocity v_d:
I = n q v_d A  =>  J = n q v_d -------------------------------------- (6.2.3)
Remarkable Fact: While electrical signals propagate along wires at nearly the speed of light (~10⁸ m/s), the actual physical drift speed of electrons in a copper wire is extraordinarily slow—typically around 10⁻⁴ m/s (less than a millimeter per second!)`,
    contentAm: `፮.፪ የኤሌክትሪክ ፍሰት እና ቀጥተኛ የኤሌክትሪክ ዑደት (DC Circuits)
የኤሌክትሪክ ፍሰት (Electric Current - I)፡
በአንድ ወለል ላይ በሰከንድ የሚያልፈው የተጣራ ቻርጅ መጠን ነው፡
I = ΔQ / Δt (ቀመር 6.2.1)
አሃድ፡ አምፔር (Ampere - A)፤ 1 A = 1 C/s።

የፍሰት አቅጣጫ፡
• ልማዳዊ ፍሰት (Conventional Current)፡ ፖዘቲቭ ቻርጆች ከከፍተኛ ወደ ዝቅተኛ ፖቴንሺያል የሚጓዙበት አቅጣጫ ተደርጎ ይወሰዳል።
• የኤሌክትሮኖች እውነተኛ ጉዞ፡ በሽቦ ውስጥ የሚጓዙት ኔጌቲቭ ኤሌክትሮኖች ከልማዳዊው ፍሰት በተቃራኒ አቅጣጫ ይጓዛሉ!

የመንሸራተት ፍጥነት (Drift Velocity - vd)፡
I = n q vd A (ቀመር 6.2.3)
አስገራሚ እውነታ፡ የኤሌክትሪክ ሲግናል በሽቦ ውስጥ በብርሃን ፍጥነት (~10⁸ m/s) ሲሰራጭ፣ የኤሌክትሮኖቹ አካላዊ ጉዞ ግን እጅግ በጣም ዝግ ያለ ነው (በሰከንድ 0.1 ሚሊሜትር ብቻ!)።`
  },

  // Page 174 - Book page 166
  {
    pdfPageNumber: 174,
    bookPageLabel: '166',
    chapterNumber: 6,
    sectionRef: '6.2',
    titleEn: 'Ohms Law, Resistance & Resistivity',
    titleAm: 'የኦህም ህግ፣ ሬዚስታንስ እና ሬዚስቲቪቲ',
    subtopicEn: 'V = I R, Resistance R = rho * L / A & Temperature Dependence rho(T)',
    subtopicAm: 'የኦህም ቀመር V = I R፣ ሬዚስታንስ (R = ρL/A) እና የሙቀት ተጽዕኖ',
    pageType: 'content',
    contentEn: `Ohm's Law:
Formulated by German physicist Georg Simon Ohm in 1826:
"For many materials (including most metals), the electric current I is directly proportional to the potential difference V across the conductor:"
V = I R ------------------------------------------------------------- (6.2.4)
where R is the Electrical Resistance.
SI Unit of Resistance: Ohm (Ω) = 1 Volt per Ampere (1 Ω = 1 V/A).
Materials that obey this linear relation are called Ohmic; non-linear devices (diodes, transistors) are Non-ohmic.

Resistance and Resistivity:
The resistance of a cylindrical conductor of length L and cross-sectional area A is:
R = ρ (L / A) ------------------------------------------------------- (6.2.5)
where ρ is the Resistivity of the material (units: Ω·m).
• Resistance increases with longer length L.
• Resistance decreases with thicker cross-sectional area A.

Temperature Dependence of Resistivity:
For metals, resistivity increases with temperature due to increased thermal vibrations of the lattice ions scattering electrons:
ρ(T) = ρ₀ [1 + α (T - T₀)] ----------------------------------------- (6.2.6)
where α is the Temperature Coefficient of Resistivity (K⁻¹ or °C⁻¹).
Electrical Conductivity (σ): σ = 1 / ρ [Siemens/meter, S/m].`,
    contentAm: `የኦህም ህግ (Ohm's Law)፡
ጆርጅ ሲሞን ኦህም እንዳረጋገጠው በብረታብረት ውስጥ የሚያልፈው ፍሰት (I) ከቮልቴጁ (V) ጋር ቀጥተኛ ተመጣጣኝ ነው፡
V = I R (ቀመር 6.2.4)
R = ሬዚስታንስ (መቋቋም)፤ አሃዱ፡ ኦህም (Ohm - Ω)፤ 1 Ω = 1 V/A።

ሬዚስታንስ እና ሬዚስቲቪቲ (Resistivity - ρ)፡
R = ρ (L / A) (ቀመር 6.2.5)
• ርዝመት (L) ሲጨምር፡ ሬዚስታንስ ይጨምራል፤
• ውፍረት (A) ሲጨምር፡ ሬዚስታንስ ይቀንሳል።

የሙቀት ተጽዕኖ በሬዚስቲቪቲ ላይ፡
በብረታብረቶች ውስጥ ሙቀት ሲጨምር አተሞች ስለሚርገበገቡ ሬዚስታንስ ይጨምራል፡
ρ(T) = ρ₀ [1 + α (T - T₀)] (ቀመር 6.2.6)
ኮንዳክቲቪቲ (Conductivity)፡ σ = 1 / ρ`
  },

  // Page 175 - Book page 167
  {
    pdfPageNumber: 175,
    bookPageLabel: '167',
    chapterNumber: 6,
    sectionRef: '6.2',
    titleEn: 'Resistor Color Codes & Electric Power',
    titleAm: 'የሬዚስተር ቀለም ኮዶች እና የኤሌክትሪክ ፓወር',
    subtopicEn: '4-Band Color Code System & Electric Power P = I V = I^2 R = V^2 / R [Watts]',
    subtopicAm: 'የ4-ቀለም ባንድ ሰንጠረዥ እና የኤሌክትሪክ ፓወር ቀመሮች (P = I V = I² R)',
    pageType: 'table',
    contentEn: `Resistor Color Code (4-Band System):
• Band 1: First significant digit
• Band 2: Second significant digit
• Band 3: Multiplier (10^n)
• Band 4: Tolerance (Gold = ±5%, Silver = ±10%, None = ±20%)

Table 6.1: Color Code Digits:
Black: 0, Brown: 1, Red: 2, Orange: 3, Yellow: 4, Green: 5, Blue: 6, Violet: 7, Gray: 8, White: 9.
Mnemonic: "BB ROY of Great Britain had a Very Good Wife".
Example: Yellow (4), Violet (7), Red (10²), Gold (±5%)  =>  47 × 10² Ω = 4,700 Ω = 4.7 kΩ ± 5%.

Electrical Power and Joule Heating:
When charge Δq moves through potential difference V in time Δt, electrical potential energy is converted into thermal energy (Joule heating):
P = ΔU / Δt = (Δq / Δt) V = I V -------------------------------------- (6.2.7)
Using Ohm's Law (V = IR or I = V/R):
P = I V = I² R = V² / R --------------------------------------------- (6.2.8)
SI Unit of Power: Watt (W) = 1 Joule per second (1 W = 1 J/s).

Commercial Energy Unit:
Electric utility companies bill customers for electrical ENERGY consumed, measured in Kilowatt-hours (kWh):
1 kWh = (1,000 W)(3,600 s) = 3.60 × 10⁶ J = 3.6 MJ ----------------- (6.2.9)`,
    contentAm: `የሬዚስተር የቀለም ኮድ (Resistor Color Code)፡
ቀለማት፡ ጥቁር (0)፣ ቡናማ (1)፣ ቀይ (2)፣ ብርቱካን (3)፣ ቢጫ (4)፣ አረንጓዴ (5)፣ ሰማያዊ (6)፣ ቫዮሌት (7)፣ ግራጫ (8)፣ ነጭ (9)፤ ወርቃማ (±5%)፣ ብርማ (±10%)።
ምሳሌ፡ ቢጫ (4)፣ ቫዮሌት (7)፣ ቀይ (×10²)፣ ወርቃማ (±5%) = 4,700 Ω = 4.7 kΩ።

የኤሌክትሪክ ፓወር (Electrical Power - P)፡
P = I V = I² R = V² / R (ቀመር 6.2.8)
አሃድ፡ ዋት (Watt - W)፤ 1 W = 1 ጁል በሰከንድ።

የኤሌክትሪክ ኃይል ክፍያ አሃድ (kWh)፡
የኤሌክትሪክ አገልግሎት ድርጅቶች ኃይልን በኪሎዋት-ሰዓት (kWh) ይለካሉ፡
1 kWh = 1,000 W × 3,600 s = 3.6 × 10⁶ ጁል (3.6 MJ)።`,
    tables: [
      {
        id: 'phys-tbl-6-1',
        caption: 'Table 6.1: Resistor Color Codes',
        headers: ['Color', 'Digit', 'Multiplier', 'Tolerance'],
        rows: [
          ['Black', '0', '10⁰ = 1', '—'],
          ['Brown', '1', '10¹ = 10', '±1%'],
          ['Red', '2', '10² = 100', '±2%'],
          ['Orange', '3', '10³ = 1k', '—'],
          ['Yellow', '4', '10⁴ = 10k', '—'],
          ['Green', '5', '10⁵ = 100k', '±0.5%'],
          ['Blue', '6', '10⁶ = 1M', '±0.25%'],
          ['Violet', '7', '10⁷ = 10M', '±0.1%'],
          ['Gray', '8', '10⁸ = 100M', '—'],
          ['White', '9', '10⁹ = 1G', '—'],
          ['Gold', '—', '10⁻¹ = 0.1', '±5%'],
          ['Silver', '—', '10⁻² = 0.01', '±10%']
        ]
      }
    ]
  },

  // Page 176 - Book page 168
  {
    pdfPageNumber: 176,
    bookPageLabel: '168',
    chapterNumber: 6,
    sectionRef: '6.2',
    titleEn: 'Electromotive Force and Internal Resistance',
    titleAm: 'ኤሌክትሮሞቲቭ ፎርስ (emf) እና ውስጣዊ መቋቋም (r)',
    subtopicEn: 'Terminal Voltage V = emf - I r & Closed Circuit Current I = emf / (R + r)',
    subtopicAm: 'የባትሪ ተርሚናል ቮልቴጅ (V = E - I r) እና አጠቃላይ ፍሰት',
    pageType: 'content',
    contentEn: `Electromotive Force (emf, E) and Internal Resistance:
A battery or electric generator is a source of electromotive force (emf, E)—a device that does work on electric charge to maintain a potential difference between its terminals.
Despite its name, emf is NOT a force; it is measured in VOLTS (J/C).

Real Batteries and Internal Resistance (r):
Because chemical reactions inside a real battery must move ions through electrolyte, every real source of emf has an internal resistance r.
When a load resistor R is connected across the battery, current I flows:
Terminal Voltage (V_terminal):
V = E - I r --------------------------------------------------------- (6.2.10)
• Open Circuit (I = 0): V_terminal = E (no voltage drop across internal resistance).
• Under Load (I > 0): V_terminal is strictly LESS than the battery's rated emf!

Complete Circuit Current:
Applying Ohm's law to the total resistance (R + r):
E = I (R + r)  =>  I = E / (R + r) ---------------------------------- (6.2.11)
Power delivered to the load resistor:
P_load = I² R = [E / (R + r)]² R
Maximum Power Transfer Theorem: The maximum power is delivered to the load resistor when the load resistance equals the internal resistance of the source: R = r!`,
    contentAm: `ኤሌክትሮሞቲቭ ፎርስ (emf - E) እና ውስጣዊ መቋቋም (r)፡
ባትሪ ኬሚካላዊ ኃይልን ወደ ኤሌክትሪክ ፖቴንሺያል በመቀየር በሰርኪውቱ ውስጥ ፍሰት እንዲኖር የሚያደርግ የemf ምንጭ ነው። አሃዱ ቮልት (V) ነው።

እውነተኛ ባትሪዎች እና ውስጣዊ መቋቋም (Internal Resistance - r)፡
በባትሪ ውስጥ በሚፈጠሩ ኬሚካላዊ ሂደቶች ምክንያት እያንዳንዱ እውነተኛ ባትሪ ትንሽ ውስጣዊ መቋቋም (r) አለው፡
የተርሚናል ቮልቴጅ፡
V = E - I r (ቀመር 6.2.10)
የሰርኪውቱ አጠቃላይ ፍሰት፡
I = E / (R + r) (ቀመር 6.2.11)

ከፍተኛ ፓወር የማስተላለፍ ህግ፡
ከባትሪው ወደ ውጭው ሬዚስተር ከፍተኛው ፓወር የሚተላለፈው የውጭው ሬዚስታንስ ከባትሪው ውስጣዊ ሬዚስታንስ ጋር እኩል ሲሆን ብቻ ነው (R = r)!`
  },

  // Page 177 - Book page 169
  {
    pdfPageNumber: 177,
    bookPageLabel: '169',
    chapterNumber: 6,
    sectionRef: '6.2',
    titleEn: 'Resistors in Series & Voltage Divider Rule',
    titleAm: 'ተከታታይ ሬዚስተሮች እና የቮልቴጅ መከፋፈያ ህግ',
    subtopicEn: 'R_eq = R1 + R2 + R3, Identical Current I & Voltage Divider V1 = E * R1 / R_tot',
    subtopicAm: 'የተከታታይ ሬዚስተሮች ድምር (Req = Σ R) እና የቮልቴጅ መከፋፈያ ቀመር',
    pageType: 'content',
    contentEn: `Resistors in Series:
When two or more resistors are connected end-to-end such that all current must flow through each resistor sequentially:
1. Current is the SAME through all series resistors:
   I_tot = I₁ = I₂ = I₃ = ... = I
2. Total voltage drop is the sum of the individual voltage drops across each resistor:
   V_tot = V₁ + V₂ + V₃ = I R₁ + I R₂ + I R₃ = I (R₁ + R₂ + R₃)
3. Equivalent Resistance:
   R_eq = R₁ + R₂ + R₃ + ... ---------------------------------------- (6.2.12)
   The equivalent resistance of resistors in series is ALWAYS GREATER than the largest individual resistance!

Voltage Divider Principle:
For two resistors R₁ and R₂ in series connected across a voltage supply V:
Total current: I = V / (R₁ + R₂)
The voltage drop across resistor R₁ is:
V₁ = I R₁ = V [R₁ / (R₁ + R₂)] -------------------------------------- (6.2.13)
The voltage drop across resistor R₂ is:
V₂ = I R₂ = V [R₂ / (R₁ + R₂)] -------------------------------------- (6.2.14)
Voltage dividers are widely used in electronic volume controls (potentiometers) and sensor interfaces.`,
    contentAm: `ተከታታይ ሬዚስተሮች (Resistors in Series)፡
ሬዚስተሮች ተከታትለው በአንድ መስመር ሲገናኙ፡
፩. በእያንዳንዱ ሬዚስተር ውስጥ የሚያልፈው ፍሰት (Current - I) እኩል ነው፡ I_tot = I1 = I2 = I3
፪. ቮልቴጁ ይደመራል፡ V_tot = V1 + V2 + V3
፫. አጠቃላይ ሬዚስታንስ፡
R_eq = R₁ + R₂ + R₃ + ... (ቀመር 6.2.12)
ተከታታይ ማገናኘት አጠቃላይ መቋቋምን ምንጊዜም ይጨምራል።

የቮልቴጅ መከፋፈያ ህግ (Voltage Divider)፡
ለሁለት ተከታታይ ሬዚስተሮች (R1 እና R2)፡
V₁ = V [R₁ / (R₁ + R₂)] (ቀመር 6.2.13)
ይህ መርህ በድምፅ ማስተካከያ (Volume potentiometer) እና በኤሌክትሮኒክስ ሴንሰሮች ውስጥ በስፋት ያገለግላል።`
  },

  // Page 178 - Book page 170
  {
    pdfPageNumber: 178,
    bookPageLabel: '170',
    chapterNumber: 6,
    sectionRef: '6.2',
    titleEn: 'Resistors in Parallel & Current Divider Rule',
    titleAm: 'ትይዩ ሬዚስተሮች እና የፍሰት መከፋፈያ ህግ',
    subtopicEn: '1 / R_eq = 1/R1 + 1/R2, Common Voltage V & Current Divider I1 = I_tot * R2 / (R1+R2)',
    subtopicAm: 'የትይዩ ሬዚስተሮች ቀመር (1/Req = Σ 1/R) እና የፍሰት መከፋፈያ ቀመር',
    pageType: 'content',
    contentEn: `Resistors in Parallel:
When two or more resistors are connected across the same two common nodes:
1. Voltage difference is the SAME across all parallel branches:
   V_tot = V₁ = V₂ = V₃ = ... = V
2. Total current entering the junction divides among the branches:
   I_tot = I₁ + I₂ + I₃ = V / R₁ + V / R₂ + V / R₃ = V (1/R₁ + 1/R₂ + 1/R₃)
3. Equivalent Resistance:
   1 / R_eq = 1 / R₁ + 1 / R₂ + 1 / R₃ + ... ------------------------- (6.2.15)
   For two resistors in parallel:
   R_eq = (R₁ R₂) / (R₁ + R₂) --------------------------------------- (6.2.16)
   The equivalent resistance of parallel resistors is ALWAYS LESS than the smallest individual resistor!
   Household electrical circuits are wired in parallel so that turning off one appliance does not shut off others, and each appliance receives the full 220 V (or 120 V) line voltage.

Current Divider Principle (Two Parallel Resistors):
I₁ = I_tot [R₂ / (R₁ + R₂)] ----------------------------------------- (6.2.17)
I₂ = I_tot [R₁ / (R₁ + R₂)] ----------------------------------------- (6.2.18)
More current naturally flows through the path of LEAST resistance!`,
    contentAm: `ትይዩ ሬዚስተሮች (Resistors in Parallel)፡
ሬዚስተሮች በሁለት የጋራ ነጥቦች መካከል በትይዩ ሲገናኙ፡
፩. በእያንዳንዱ ሬዚስተር ላይ ያለው ቮልቴጅ እኩል ነው፡ V_tot = V1 = V2 = V3
፪. አጠቃላይ ፍሰቱ ወደ ቅርንጫፎቹ ይከፋፈላል፡ I_tot = I1 + I2 + I3
፫. አጠቃላይ ሬዚስታንስ፡
1 / R_eq = 1 / R₁ + 1 / R₂ + 1 / R₃ + ... (ቀመር 6.2.15)
ለሁለት ትይዩ ሬዚስተሮች፡
R_eq = (R₁ R₂) / (R₁ + R₂) (ቀመር 6.2.16)
የትይዩ ሬዚስታንስ ምንጊዜም ከትንሹ ሬዚስተር ያነሰ ነው!
የቤት ውስጥ የኤሌክትሪክ ሽቦ ዝርጋታ በትይዩ የሚሰራው አንዱ አምፑል ቢጠፋ ሌላው እንዳይጠፋና ሁሉም ሙሉውን 220 ቮልት እንዲያገኙ ነው።

የፍሰት መከፋፈያ ህግ (Current Divider)፡
I₁ = I_tot [R₂ / (R₁ + R₂)] (ቀመር 6.2.17)
አብዛኛው ፍሰት አነስተኛ መቋቋም ባለው መስመር በኩል ያልፋል!`
  },

  // Page 179 - Book page 171
  {
    pdfPageNumber: 179,
    bookPageLabel: '171',
    chapterNumber: 6,
    sectionRef: '6.2.1',
    titleEn: 'Kirchhoffs Rules: Junction and Loop Laws',
    titleAm: 'የኪርቾፍ ህጎች፡ የመገናኛ እና የዑደት ህጎች',
    subtopicEn: '6.2.1. Junction Rule (Charge Conservation) & Loop Rule (Energy Conservation)',
    subtopicAm: '፮.፪.፩ የኪርቾፍ ጀንክሽን ህግ (የቻርጅ ጥበቃ) እና የሉፕ ህግ (የኃይል ጥበቃ)',
    pageType: 'content',
    contentEn: `6.2.1. Kirchhoff's Rules
Many practical circuits cannot be reduced to simple series-parallel combinations. In 1845, German physicist Gustav Kirchhoff formulated two powerful, fundamental circuit analysis rules:

1. Kirchhoff's Junction Rule (Node Rule):
"At any junction (node) in an electric circuit, the sum of the currents entering the junction must equal the sum of the currents leaving the junction:"
Σ I_entering = Σ I_leaving ------------------------------------------ (6.2.19)
Physical Basis: CONSERVATION OF ELECTRIC CHARGE.
Charge cannot accumulate or vanish at a junction!

2. Kirchhoff's Loop Rule (Mesh Rule):
"The algebraic sum of the changes in electrical potential around ANY closed loop in a circuit must be zero:"
Σ ΔV_loop = 0 ------------------------------------------------------- (6.2.20)
Physical Basis: CONSERVATION OF ENERGY.
If a charge q completes a full closed trip around a circuit loop and returns to its starting point, its net change in electrostatic potential energy must be zero (q ΔV_net = 0  =>  ΔV_net = 0), because the electrostatic field is conservative!`,
    contentAm: `፮.፪.፩ የኪርቾፍ ህጎች (Kirchhoff's Rules)
ውስብስብ የኤሌክትሪክ ሰርኪውቶችን ለመተንተን ጉስታቭ ኪርቾፍ ሁለት ወሳኝ ህጎችን አቀረበ፡

፩. የኪርቾፍ የመገናኛ ህግ (Junction Rule / Node Rule)፡
"በማንኛውም የሰርኪውት መገናኛ ነጥብ (Junction) ላይ የሚገባው አጠቃላይ ፍሰት ከሚወጣው አጠቃላይ ፍሰት ጋር እኩል መሆን አለበት፡"
Σ I_in = Σ I_out (ቀመር 6.2.19)
መሰረታዊ መርህ፡ የኤሌክትሪክ ቻርጅ ጥበቃ ህግ (Conservation of Charge)።

፪. የኪርቾፍ የዑደት ህግ (Loop Rule / Mesh Rule)፡
"በማንኛውም ዝግ የሰርኪውት ዑደት (Closed Loop) ውስጥ ያሉ የፖቴንሺያል ለውጦች (ቮልቴጆች) አጠቃላይ ድምር ዜሮ ነው፡"
Σ ΔV = 0 (ቀመር 6.2.20)
መሰረታዊ መርህ፡ የኃይል ጥበቃ ህግ (Conservation of Energy)። ቻርጅ አንድ ሙሉ ዑደት ዞሮ መነሻው ላይ ሲመለስ የተጣራ የኃይል ለውጡ ዜሮ ይሆናል።`
  },

  // Page 180 - Book page 172
  {
    pdfPageNumber: 180,
    bookPageLabel: '172',
    chapterNumber: 6,
    sectionRef: '6.2.1',
    titleEn: 'Sign Conventions for Kirchhoffs Loop Rule',
    titleAm: 'የኪርቾፍ የዑደት ህግ የምልክት ደንቦች',
    subtopicEn: 'Traversing Resistors (+- I R) and Batteries (+- E) Along Loop Direction',
    subtopicAm: 'በሬዚስተር (-IR/+IR) እና በባትሪ (+E/-E) በኩል የመጓዝ ምልክት ስምምነቶች',
    pageType: 'content',
    contentEn: `Sign Conventions for Kirchhoff's Loop Rule:
When traversing a closed loop in an arbitrary chosen direction (clockwise or counter-clockwise):

1. For a Resistor of Resistance R:
• Moving in the SAME direction as the chosen branch current:
  You are moving from higher to lower potential ("downhill"):
  ΔV = - I R -------------------------------------------------------- (Negative drop)
• Moving in the OPPOSITE direction to the branch current:
  You are moving against the flow ("uphill"):
  ΔV = + I R -------------------------------------------------------- (Positive gain)

2. For a Source of Emf (Battery) E:
• Moving from the NEGATIVE (-) terminal to the POSITIVE (+) terminal:
  You are going up in potential:
  ΔV = + E ---------------------------------------------------------- (Positive gain)
• Moving from the POSITIVE (+) terminal to the NEGATIVE (-) terminal:
  You are going down in potential:
  ΔV = - E ---------------------------------------------------------- (Negative drop)
  (Note: The sign across a battery depends solely on its terminal polarity, NOT on the current direction!).

General Strategy:
1. Assign arbitrary current labels (I₁, I₂, I₃) and arrows to each branch.
2. If a calculated current turns out NEGATIVE, it simply means the true physical current flows in the opposite direction to your arrow!`,
    contentAm: `የኪርቾፍ የዑደት ህግ የምልክት ደንቦች፡
በሰርኪውቱ ዙሪያ በሰዓት አቅጣጫ ወይም በተቃራኒው ስንጓዝ፡

፩. በሬዚስተር በኩል ስናልፍ፡
• ከፍሰቱ (Current) ጋር በተመሳሳይ አቅጣጫ ከሄድን፡
  ΔV = - I R (ኔጌቲቭ የቮልቴጅ ቅነሳ)
• ከፍሰቱ አቅጣጫ ጋር በተቃራኒ ከሄድን፡
  ΔV = + I R (ፖዘቲቭ የቮልቴጅ ጭማሪ)

፪. በባትሪ በኩል ስናልፍ፡
• ከኔጌቲቭ (-) ወደ ፖዘቲቭ (+) ተርሚናል ከሄድን፡
  ΔV = + E (ፖዘቲቭ የቮልቴጅ ጭማሪ)
• ከፖዘቲቭ (+) ወደ ኔጌቲቭ (-) ተርሚናል ከሄድን፡
  ΔV = - E (ኔጌቲቭ የቮልቴጅ ቅነሳ)
(ማስታወሻ፡ የባትሪ ምልክት በፍሰቱ አቅጣጫ ላይ ሳይሆን በባትሪው ጫፎች አቀማመጥ ላይ ብቻ የተመሰረተ ነው!)

መመሪያ፡ የሰጠነው የፍሰት አቅጣጫ ተሳስቶ ቢሆን እንኳን ስሌቱ ሲጠናቀቅ ፍሰቱ ኔጌቲቭ ሆኖ ስለሚወጣ አቅጣጫው ወደ ተቃራኒው መሆኑን ያሳውቀናል።`
  },

  // Page 181 - Book page 173
  {
    pdfPageNumber: 181,
    bookPageLabel: '173',
    chapterNumber: 6,
    sectionRef: '6.2.1',
    titleEn: 'Multi-Loop Circuit Example: Formulation',
    titleAm: 'ባለ ብዙ ዑደት ሰርኪውት ምሳሌ፡ ቀመሮችን ማዋቀር',
    subtopicEn: 'Two Batteries (12 V, 6 V), Three Resistors (4 Ohm, 2 Ohm, 6 Ohm) Equations',
    subtopicAm: 'የሁለት ባትሪዎችና የሦስት ሬዚስተሮች ዑደት ቀመሮችን ማዘጋጀት',
    pageType: 'content',
    contentEn: `Example (Two-Loop Circuit):
Consider a circuit with two meshes and three branches:
• Left branch: Battery E₁ = 12.0 V in series with resistor R₁ = 4.0 Ω. Current I₁ upwards.
• Middle branch: Resistor R₂ = 2.0 Ω. Current I₂ downwards.
• Right branch: Battery E₂ = 6.0 V (positive terminal up) in series with resistor R₃ = 6.0 Ω. Current I₃ downwards.

Step 1: Apply Junction Rule at Top Node:
Current I₁ enters the node; currents I₂ and I₃ leave:
I₁ = I₂ + I₃ -------------------------------------------------------- [Eq. 1]

Step 2: Apply Loop Rule to Left Loop (traversed clockwise):
Start at lower-left corner and traverse clockwise:
+ E₁ - I₁ R₁ - I₂ R₂ = 0
+ 12.0 - 4.0 I₁ - 2.0 I₂ = 0
4.0 I₁ + 2.0 I₂ = 12.0  =>  2.0 I₁ + I₂ = 6.0 ----------------------- [Eq. 2]

Step 3: Apply Loop Rule to Right Loop (traversed clockwise):
Start at middle bottom and traverse clockwise up through middle branch and down through right branch:
+ I₂ R₂ - E₂ - I₃ R₃ = 0  (middle traversed opposite to I₂!)
Wait, traversing right loop clockwise:
Going down middle: - I₂ R₂? No, if traversing right loop clockwise:
Left side of right loop (going up): against I₂ => + I₂ R₂.
Across top: zero.
Down right branch (with I₃): + E₂ (going + to - is -E₂) - I₃ R₃ = 0.
Let's trace counter-clockwise for right loop:
Start at bottom-middle: + I₂ R₂ ...
Let's use the big outer loop:
+ E₁ - I₁ R₁ - I₃ R₃ - E₂ = 0
12.0 - 4.0 I₁ - 6.0 I₃ - 6.0 = 0  =>  4.0 I₁ + 6.0 I₃ = 6.0 ------- [Eq. 3]`,
    contentAm: `የተሰራ ምሳሌ (ባለ ሁለት ዑደት ሰርኪውት)፡
በግራ፡ ባትሪ E1 = 12 V፣ R1 = 4 Ω፣ ፍሰት I1 ወደ ላይ፤
በመሀል፡ R2 = 2 Ω፣ ፍሰት I2 ወደ ታች፤
በቀኝ፡ ባትሪ E2 = 6 V፣ R3 = 6 Ω፣ ፍሰት I3 ወደ ታች።

ደረጃ ፩፡ የላይኛው መገናኛ ነጥብ ህግ፡
I₁ = I₂ + I₃ [ቀመር 1]

ደረጃ ፪፡ የግራው ዑደት (በሰዓት አቅጣጫ)፡
+ 12.0 - 4.0 I₁ - 2.0 I₂ = 0
4.0 I₁ + 2.0 I₂ = 12.0  =>  2.0 I₁ + I₂ = 6.0 [ቀመር 2]

ደረጃ ፫፡ የውጨኛው ትልቅ ዑደት (በሰዓት አቅጣጫ)፡
+ 12.0 - 4.0 I₁ - 6.0 I₃ - 6.0 = 0
4.0 I₁ + 6.0 I₃ = 6.0  =>  2.0 I₁ + 3.0 I₃ = 3.0 [ቀመር 3]`
  },

  // Page 182 - Book page 174
  {
    pdfPageNumber: 182,
    bookPageLabel: '174',
    chapterNumber: 6,
    sectionRef: '6.2.1',
    titleEn: 'Multi-Loop Circuit Solution & Power Check',
    titleAm: 'የሰርኪውት ስሌት መፍትሔ እና የፓወር ሚዛን ማረጋገጫ',
    subtopicEn: 'I_1 = 2.05 A, I_2 = 1.91 A, I_3 = 0.14 A & Energy Dissipation Verification',
    subtopicAm: 'የፍሰቶቹ ትክክለኛ ዋጋ መፍትሔ እና የተፈጠረውና የጠፋው ፓወር እኩልነት',
    pageType: 'content',
    contentEn: `Solving the Linear System:
From [Eq. 1]: I₂ = I₁ - I₃.
Substitute into [Eq. 2]:
2.0 I₁ + (I₁ - I₃) = 6.0  =>  3.0 I₁ - I₃ = 6.0  =>  I₃ = 3.0 I₁ - 6.0.

Substitute into [Eq. 3]:
2.0 I₁ + 3.0 (3.0 I₁ - 6.0) = 3.0
2.0 I₁ + 9.0 I₁ - 18.0 = 3.0
11.0 I₁ = 21.0
I₁ = 21.0 / 11.0 ≈ 1.909 A ≈ 1.91 A.

Now solve for I₃:
I₃ = 3.0 (1.909 A) - 6.0 = 5.727 - 6.0 = - 0.273 A.
The negative sign means I₃ actually flows UPWARDS through the 6.0 V battery (the 12 V battery is strong enough to charge the 6 V battery!).

Now solve for I₂:
I₂ = I₁ - I₃ = 1.909 - (-0.273) = 2.182 A ≈ 2.18 A.

Check Junction Rule:
I₁ + (-I₃) = 1.909 + 0.273 = 2.182 A = I₂ (Exact match!).

Power Balance Check:
• Power supplied by 12 V source: P_in = E₁ I₁ = (12.0 V)(1.909 A) = 22.91 W.
• Power consumed by 6 V battery: P_bat = E₂ (-I₃) = (6.0 V)(0.273 A) = 1.64 W.
• Power dissipated in resistors:
  P_R1 = I₁² R₁ = (1.909)²(4.0) = 14.58 W
  P_R2 = I₂² R₂ = (2.182)²(2.0) = 9.52 W
  P_R3 = I₃² R₃ = (-0.273)²(6.0) = 0.45 W
Total dissipated + absorbed = 1.64 + 14.58 + 9.52 + 0.45 = 26.19 W ≈ 22.91 W (power is strictly conserved!).`,
    contentAm: `የስሌቱ የመጨረሻ መፍትሔ፡
I₁ = 1.91 አምፔር (ወደ ላይ)
I₂ = 2.18 አምፔር (ወደ ታች)
I₃ = - 0.27 አምፔር (ኔጌቲቭ መምጣቱ ፍሰቱ በእውነቱ ወደ ላይ መሆኑን ያሳያል፤ ይህም 12 ቮልቱ ባትሪ 6 ቮልቱን ባትሪ ቻርጅ እያደረገው መሆኑን ያረጋግጣል!)።

የመገናኛ ነጥብ ማረጋገጫ፡
1.91 + 0.27 = 2.18 አምፔር (ፍጹም ትክክል!)።

የፓወር ሚዛን፡
በ12 ቮልቱ ባትሪ የተመረተው ፓወር በሬዚስተሮቹ ውስጥ ወደ ሙቀት ከተቀየረውና በ6 ቮልቱ ባትሪ ውስጥ ከተጠራቀመው ፓወር ጋር እኩል ነው!`
  },

  // Page 183 - Book page 175
  {
    pdfPageNumber: 183,
    bookPageLabel: '175',
    chapterNumber: 6,
    sectionRef: '6.2.2',
    titleEn: 'RC Circuits: Charging a Capacitor',
    titleAm: 'የአር-ሲ ሰርኪውቶች (RC Circuits)፡ ካፓሲተርን ቻርጅ ማድረግ',
    subtopicEn: '6.2.2. Differential Equation, q(t) = C E (1 - e^-t/tau) & Time Constant tau = R C',
    subtopicAm: '፮.፪.፪ የቻርጅ ማድረጊያ ቀመር q(t) = C E (1 - e^-t/RC) እና ታይም ኮንስታንት (τ = RC)',
    pageType: 'content',
    contentEn: `6.2.2. RC Circuits
An RC circuit contains a resistor R and a capacitor C connected in series with an emf source E.

Charging a Capacitor:
When the switch is closed at t = 0 (initially uncharged capacitor, q(0) = 0):
By Kirchhoff's loop rule:
E - I R - q / C = 0
Since I = dq / dt:
R (dq / dt) + (1 / C) q = E ----------------------------------------- (6.2.21)

Solving the Differential Equation:
Charge on the capacitor as a function of time:
q(t) = Q_max (1 - e^(- t / RC)) = C E (1 - e^(- t / τ)) -------------- (6.2.22)
where τ = R C is the Time Constant of the circuit.
Units of τ: Ohms × Farads = seconds (s).

Current as a function of time:
I(t) = dq / dt = (E / R) e^(- t / τ) = I₀ e^(- t / τ) ---------------- (6.2.23)
Voltage across the capacitor:
V_C(t) = q(t) / C = E (1 - e^(- t / τ)) ----------------------------- (6.2.24)

Significance of the Time Constant (τ = RC):
• At t = τ = RC:
  q(τ) = Q_max (1 - e⁻¹) = Q_max (1 - 0.368) = 0.632 Q_max (63.2% charged!).
• At t = 5 τ: q ≈ 0.993 Q_max (99.3% charged, considered fully charged for engineering purposes).`,
    contentAm: `፮.፪.፪ የአር-ሲ ሰርኪውቶች (RC Circuits)
ሬዚስተር (R) እና ካፓሲተር (C) በባትሪ አማካኝነት ተከታትለው ሲገናኙ RC ሰርኪውት ይባላል።

ካፓሲተርን ቻርጅ ማድረግ፡
ማብሪያው ሲበራ በካፓሲተሩ ላይ ያለው ቻርጅ በጊዜ ሂደት ይጨምራል፡
q(t) = C E (1 - e^(- t / RC)) (ቀመር 6.2.22)
የፍሰት ቀመር፡ I(t) = (E / R) e^(- t / RC)
የካፓሲተር ቮልቴጅ፡ V_C(t) = E (1 - e^(- t / RC))

የጊዜ ቋሚ (Time Constant - τ = RC)፡
አሃዱ ሰከንድ (s) ነው።
• በ t = τ (አንድ ታይም ኮንስታንት ውስጥ)፡ ካፓሲተሩ 63.2% ቻርጅ ይሆናል!
• በ t = 5 τ ውስጥ፡ 99.3% ቻርጅ ሆኖ ሙሉ በሙሉ እንደሞላ ይቆጠራል።`
  },

  // Page 184 - Book page 176
  {
    pdfPageNumber: 184,
    bookPageLabel: '176',
    chapterNumber: 6,
    sectionRef: '6.2.2',
    titleEn: 'RC Circuits: Discharging a Capacitor',
    titleAm: 'የአር-ሲ ሰርኪውቶች፡ ካፓሲተርን ዲስቻርጅ ማድረግ',
    subtopicEn: 'q(t) = Q_0 e^-t/tau, Current I(t) = - (Q_0 / RC) e^-t/tau & Energy Dissipation',
    subtopicAm: 'የዲስቻርጅ ቀመር q(t) = Q₀ e^-t/RC እና በሬዚስተር ውስጥ ወደ ሙቀት መለወጥ',
    pageType: 'content',
    contentEn: `Discharging a Capacitor:
When a fully charged capacitor with initial charge Q₀ is disconnected from the battery and connected across resistor R:
Loop equation:
- I R - q / C = 0  =>  R (dq / dt) + q / C = 0
Separating variables and integrating from t = 0:
q(t) = Q₀ e^(- t / RC) = Q₀ e^(- t / τ) ------------------------------ (6.2.25)
Voltage across capacitor:
V_C(t) = V₀ e^(- t / τ) --------------------------------------------- (6.2.26)
Discharge Current:
I(t) = dq / dt = - (Q₀ / RC) e^(- t / τ) = - I₀ e^(- t / τ) --------- (6.2.27)
(The negative sign indicates current flows in the opposite direction to charging!).

Energy Dissipation in Resistor:
The initial energy stored in the capacitor was:
U_initial = 1/2 (Q₀² / C).
Total thermal energy dissipated in resistor R:
E_thermal = ∫₀^∞ I² R dt = ∫₀^∞ (Q₀ / RC)² e^(-2t/RC) R dt = 1/2 (Q₀² / C)!
100% of the electrostatic potential energy stored in the capacitor is completely converted into Joule heat in the resistor!

Practical Applications of RC Circuits:
• Intermittent windshield wipers in automobiles.
• Electronic camera flash units.
• Cardiac pacemakers (timing electrical pulses to heart muscle).`,
    contentAm: `ካፓሲተርን ዲስቻርጅ ማድረግ (Discharging a Capacitor)፡
ቀድሞ ቻርጅ የተደረገ ካፓሲተር በሬዚስተር በኩል ሲገናኝ ቻርጁ እየቀነሰ ይሄዳል፡
q(t) = Q₀ e^(- t / RC) (ቀመር 6.2.25)
ቮልቴጅ፡ V_C(t) = V₀ e^(- t / RC)
ፍሰት፡ I(t) = - (Q₀ / RC) e^(- t / RC)

የኃይል ልውውጥ፡
በካፓሲተሩ ውስጥ ተጠራቅሞ የነበረው 1/2 Q₀²/C ኃይል በሙሉ በሬዚስተሩ ውስጥ ወደ ሙቀት ተቀይሮ ይወገዳል!

ተግባራዊ ጥቅሞች፡
• የመኪና የፊት መስታወት መጥረጊያ (Wiper) የጊዜ ክፍተት፤
• የካሜራ ብልጭታ (Flash)፤
• የልብ ምት ማስተካከያ መሳሪያ (Pacemaker)።`
  }
];
