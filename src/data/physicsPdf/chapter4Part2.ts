import { OfficialPdfPage } from '../geographyPdf/types';

export const physicsChapter4Part2Pages: OfficialPdfPage[] = [
  // Page 103 - Book page 95
  {
    pdfPageNumber: 103,
    bookPageLabel: '95',
    chapterNumber: 4,
    sectionRef: '4.6.2',
    titleEn: 'Molar Heat Capacities & Mayers Relation',
    titleAm: 'የሞላር ሂት ካፓሲቲዎች እና የማየር ዝምድና',
    subtopicEn: '4.6.2. C_v, C_p, Mayers Equation: C_p - C_v = R & Specific Heat Ratio gamma',
    subtopicAm: '፬.፮.፪ የቋሚ ይዘትና ጫና ሞላር ካፓሲቲዎች፣ ማየር (Cp - Cv = R) እና ጋማ',
    pageType: 'content',
    contentEn: `4.6.2. Molar Heat Capacities of an Ideal Gas
For an ideal gas, heat capacity is commonly defined per mole (molar heat capacity):
Q = n C ΔT

Two specific cases are of primary importance:
1. Molar Heat Capacity at Constant Volume (C_v):
When heat is added at constant volume (W = 0):
ΔU = Q_v = n C_v ΔT  =>  C_v = (1 / n) (dU / dT)
Since internal energy depends solely on temperature:
dU = n C_v dT (valid for ANY process!)

2. Molar Heat Capacity at Constant Pressure (C_p):
When heat is added at constant pressure, the gas expands and does work W = P ΔV = n R ΔT:
Q_p = ΔU + W = n C_v ΔT + n R ΔT = n (C_v + R) ΔT
Since Q_p = n C_p ΔT:
C_p - C_v = R ------------------------------------------------------- (4.6.4)
This is Mayer's Relation, where R = 8.314 J/(mol·K).

Adiabatic Index (Ratio of Heat Capacities γ):
γ = C_p / C_v -------------------------------------------------------- (4.6.5)
• Monatomic Gas (He, Ne, Ar): C_v = 3/2 R, C_p = 5/2 R  =>  γ = 5/3 ≈ 1.67
• Diatomic Gas (N₂, O₂, H₂): C_v = 5/2 R, C_p = 7/2 R  =>  γ = 7/5 = 1.40`,
    contentAm: `፬.፮.፪ የሞላር ሂት ካፓሲቲዎች (Molar Heat Capacities)
ለአንድ ሞል ጋዝ የሚያስፈልገው ሙቀት፡ Q = n C ΔT

፩. የቋሚ ይዘት ሞላር ካፓሲቲ (Cv)፡
ይዘት ቋሚ ሲሆን፡ dU = n Cv dT

፪. የቋሚ ጫና ሞላር ካፓሲቲ (Cp)፡
ጫና ቋሚ ሲሆን ጋዝ ይለጠጣል፤ ስለዚህ ተጨማሪ ሙቀት ለስራ ይውላል።
የማየር ዝምድና (Mayer's Relation)፡
Cp - Cv = R (ቀመር 4.6.4)
R = 8.314 J/(mol·K) (ሁለንተናዊ የጋዝ ቋሚ)።

የስፔሲፊክ ሂት ምጣኔ (γ - Gamma)፡
γ = Cp / Cv (ቀመር 4.6.5)
• ነጠላ አተም ጋዝ (Monatomic): Cv = 3/2 R, Cp = 5/2 R, γ = 1.67
• ባለ ሁለት አተም ጋዝ (Diatomic): Cv = 5/2 R, Cp = 7/2 R, γ = 1.40`
  },

  // Page 104 - Book page 96
  {
    pdfPageNumber: 104,
    bookPageLabel: '96',
    chapterNumber: 4,
    sectionRef: '4.7',
    titleEn: 'Thermodynamic Problem & The Second Law Intro',
    titleAm: 'የቴርሞዳይናሚክስ ስሌት ምሳሌ እና የሁለተኛው ህግ መግቢያ',
    subtopicEn: 'Work & Heat for 2 Moles Ideal Gas & 4.7. The Second Law of Thermodynamics',
    subtopicAm: 'የ2 ሞል ጋዝ ስራና ሙቀት ስሌት እንዲሁም ፬.፯ የቴርሞዳይናሚክስ ሁለተኛ ህግ መግቢያ',
    pageType: 'content',
    contentEn: `Example:
Two moles of an ideal monatomic gas are heated at constant pressure from 300 K to 400 K.
Find: (a) the heat added Q, (b) the work done W, and (c) the change in internal energy ΔU.
Solution:
Given: n = 2.0 mol, T_i = 300 K, T_f = 400 K, ΔT = 100 K.
For monatomic gas: C_v = 3/2 R = 12.47 J/(mol·K); C_p = 5/2 R = 20.79 J/(mol·K).
(a) Q = n C_p ΔT = (2.0 mol)(20.79 J/mol·K)(100 K) = 4,158 J.
(b) W = P ΔV = n R ΔT = (2.0 mol)(8.314 J/mol·K)(100 K) = 1,663 J.
(c) ΔU = Q - W = 4,158 J - 1,663 J = 2,495 J
    (or ΔU = n C_v ΔT = (2.0)(12.47)(100) = 2,494 J, matches!).

4.7. The Second Law of Thermodynamics
The First Law states that energy is conserved in any process, but it does NOT restrict the DIRECTION in which the process occurs.
A hot cup of coffee left on a table spontaneously cools by losing heat to the cooler room. The reverse process—a lukewarm cup of coffee spontaneously absorbing heat from the room to become boiling hot while the room cools down—never happens, even though it would NOT violate the First Law!
The Second Law of Thermodynamics establishes the fundamental direction of natural spontaneous processes.`,
    contentAm: `የተሰራ ምሳሌ፡
2.0 ሞል ነጠላ አተም ጋዝ በቋሚ ጫና ከ 300 K ወደ 400 K ሞቀ፡
ሀ. የገባው ሙቀት፡ Q = n Cp ΔT = 2 × 20.79 × 100 = 4,158 ጁል።
ለ. የተሰራው ስራ፡ W = n R ΔT = 2 × 8.314 × 100 = 1,663 ጁል።
ሐ. የውስጣዊ ኃይል ለውጥ፡ ΔU = Q - W = 4,158 - 1,663 = 2,495 ጁል።

፬.፯ የቴርሞዳይናሚክስ ሁለተኛ ህግ
የመጀመሪያው ህግ የኃይል ጥበቃን ቢያረጋግጥም የተፈጥሮ ሂደቶች ወደየትኛው አቅጣጫ እንደሚጓዙ አይወስንም። አንድ ትኩስ ቡና በጠረጴዛ ላይ ሲቀመጥ በራሱ ይቀዘቅዛል፤ የቀዘቀዘው ቡና ከአካባቢው አየር ሙቀት ወስዶ በራሱ ሲፈላ በፍጹም አይታይም። ሁለተኛው ህግ የተፈጥሮ ሂደቶች የሚጓዙበትን የማይቀለበስ አቅጣጫ ይወስናል።`
  },

  // Page 105 - Book page 97
  {
    pdfPageNumber: 105,
    bookPageLabel: '97',
    chapterNumber: 4,
    sectionRef: '4.7',
    titleEn: 'Heat Engines: Operation Cycle & Thermal Efficiency',
    titleAm: 'የሙቀት ሞተሮች (Heat Engines)፡ የስራ ዑደት እና ብቃት',
    subtopicEn: 'Reservoirs T_H & T_C, Work W = Q_H - Q_C & Efficiency e = W / Q_H',
    subtopicAm: 'የሙቀት ምንጮች፣ ስራ W = QH - QC እና የሞተር ብቃት ቀመር e = W/QH',
    pageType: 'content',
    contentEn: `Heat Engines:
A heat engine is a thermodynamic device that absorbs heat energy from a high-temperature reservoir, converts part of this energy into mechanical work, and expels the remaining waste heat to a low-temperature reservoir.

Operation Cycle:
In a cyclical heat engine, the working substance returns to its initial state at the end of each complete cycle, so ΔU_cycle = 0.
By the First Law:
ΔU = Q_net - W = 0  =>  W = Q_net = |Q_H| - |Q_C| -------------------- (4.7.1)
where:
• Q_H = heat absorbed from the hot reservoir at temperature T_H
• Q_C = waste heat rejected to the cold reservoir at temperature T_C
• W = net mechanical work output.

Thermal Efficiency (e):
Thermal efficiency is the ratio of the net work done to the heat absorbed at the higher temperature during one cycle:
e = W / |Q_H| = (|Q_H| - |Q_C|) / |Q_H| = 1 - |Q_C| / |Q_H| ---------- (4.7.2)
Since an engine must reject some waste heat (|Q_C| > 0), the thermal efficiency is ALWAYS less than 1 (e < 100%).`,
    contentAm: `የሙቀት ሞተሮች (Heat Engines)፡
የሙቀት ሞተር ከፍተኛ ሙቀት ካለው አካል (Hot reservoir, TH) ሙቀት ወስዶ በከፊል ወደ ሜካኒካል ስራ (Work) የሚቀይርና የቀረውን ትርፍ ሙቀት ወደ ቀዝቃዛው አካል (Cold reservoir, TC) የሚያስወጣ መሳሪያ ነው።

በአንድ ሙሉ ዑደት ውስጥ የውስጣዊ ኃይል ለውጥ ዜሮ ነው (ΔU = 0)፡
W = |QH| - |QC| (ቀመር 4.7.1)

የሙቀት ሞተር ብቃት (Thermal Efficiency - e)፡
ብቃት ማለት ያገኘነውን የተጣራ ስራ ለገባው አጠቃላይ ሙቀት ስናካፍል የሚገኘው ምጣኔ ነው፡
e = W / |QH| = 1 - |QC| / |QH| (ቀመር 4.7.2)
ማንኛውም እውነተኛ ሞተር ትርፍ ሙቀት የግድ ስለሚያስወጣ ብቃቱ ምንጊዜም ከ 100% ያነሰ ነው።`
  },

  // Page 106 - Book page 98
  {
    pdfPageNumber: 106,
    bookPageLabel: '98',
    chapterNumber: 4,
    sectionRef: '4.7',
    titleEn: 'The Second Law: Kelvin-Planck & Clausius Statements',
    titleAm: 'የሁለተኛው ህግ አገላለጾች፡ የኬልቪን-ፕላንክ እና የክላውሲየስ መግለጫዎች',
    subtopicEn: 'Kelvin-Planck Engine Limit & Clausius Refrigerator Limit',
    subtopicAm: 'የኬልቪን-ፕላንክ የሞተር ገደብ እና የክላውሲየስ የማቀዝቀዣ ገደብ',
    pageType: 'content',
    contentEn: `Formal Statements of the Second Law of Thermodynamics:

1. Kelvin-Planck Statement:
"It is impossible to construct an engine that, operating in a cycle, produces no other effect than the absorption of heat from a reservoir and the performance of an equal amount of work."
In other words: It is impossible to build a 100% efficient heat engine! You cannot convert thermal energy completely into mechanical work in a cyclic process without discarding some waste heat.

2. Clausius Statement:
"It is impossible to construct a cyclic refrigerator that produces no other effect than the transfer of heat from a cooler body to a hotter body without an input of external work."
In other words: Heat will not spontaneously flow uphill from a cold object to a hotter object on its own! To extract heat from a cold region and deliver it to a warm region (as your kitchen refrigerator does), external electrical work must be supplied to the compressor.

Equivalence:
The Kelvin-Planck and Clausius statements are logically equivalent: a violation of either statement leads directly to a violation of the other.`,
    contentAm: `የቴርሞዳይናሚክስ ሁለተኛ ህግ ሁለት ዝነኛ መግለጫዎች፡

፩. የኬልቪን-ፕላንክ መግለጫ (Kelvin-Planck Statement)፡
"ሙሉ በሙሉ ከሙቀት ማጠራቀሚያ ሙቀትን ወስዶ ምንም ዓይነት ትርፍ ሙቀት ሳያስወጣ ሙሉውን ወደ ስራ የሚቀይር ዑደታዊ ሞተር መስራት በፍጹም አይቻልም።"
ይህም ማለት፡ 100% ብቃት ያለው የሙቀት ሞተር በተፈጥሮ ህግ ፈጽሞ ሊኖር አይችልም!

፪. የክላውሲየስ መግለጫ (Clausius Statement)፡
"ምንም አይነት ውጫዊ ስራ ሳይሰራ በራሱ ሙቀትን ከቀዘቀዘ አካል ወደ ሞቀ አካል ብቻ የሚያስተላልፍ ዑደታዊ ማቀዝቀዣ (Refrigerator) መስራት በፍጹም አይቻልም።"
ይህም ማለት፡ ሙቀት በራሱ ከቀዘቀዘ ወደ ሞቀ አካል አይፈስም፤ ፍሪጅ እንዲሰራ የግድ ውጫዊ የኤሌክትሪክ ኃይል ለኮምፕረሰሩ መሰጠት አለበት።`
  },

  // Page 107 - Book page 99
  {
    pdfPageNumber: 107,
    bookPageLabel: '99',
    chapterNumber: 4,
    sectionRef: '4.7',
    titleEn: 'Refrigerators, Heat Pumps & Coefficient of Performance',
    titleAm: 'ፍሪጆች፣ የሙቀት ፓምፖች እና የብቃት አሃዝ (COP)',
    subtopicEn: 'COP_ref = Q_C / W & COP_hp = Q_H / W with Work-Energy Relations',
    subtopicAm: 'የፍሪጅና የሙቀት ፓምፕ ብቃት ቀመሮች (COP_ref እና COP_hp)',
    pageType: 'content',
    contentEn: `Refrigerators and Heat Pumps:
A refrigerator (or air conditioner) is a heat engine running in reverse: work W is done on the system to transfer heat Q_C from a cold space (inside the fridge) and discharge heat Q_H to a warmer environment (the room):
|Q_H| = |Q_C| + W

Coefficient of Performance (COP):
The performance of cooling devices is rated by the Coefficient of Performance (COP) rather than efficiency:

For a Refrigerator:
COP_ref = Heat removed from cold / Work input = |Q_C| / W = |Q_C| / (|Q_H| - |Q_C|)

For a Heat Pump:
A heat pump is used to heat a home in winter by extracting heat from the cold outdoor air and pumping it into the warm indoors:
COP_hp = Heat delivered to warm space / Work input = |Q_H| / W = |Q_H| / (|Q_H| - |Q_C|)
Notice that:
COP_hp = COP_ref + 1 ------------------------------------------------ (4.7.3)
Typical commercial heat pumps operate with a COP between 3 and 5, meaning that for every 1 Joule of electric energy consumed, 3 to 5 Joules of thermal heat are delivered to the house!`,
    contentAm: `ፍሪጆች እና የሙቀት ፓምፖች (Refrigerators & Heat Pumps)፡
ፍሪጅ በተቃራኒ የሚሰራ የሙቀት ሞተር ነው፡ የኤሌክትሪክ ስራ (W) ተሰርቶ ከቀዘቀዘው የፍሪጅ ውስጠኛ ክፍል ሙቀት (QC) ተወስዶ ወደ ውጭው ሙቅ አየር (QH) ይተላለፋል፡
|QH| = |QC| + W

የብቃት አሃዝ (Coefficient of Performance - COP)፡
ለፍሪጅ፡ COP_ref = |QC| / W = |QC| / (|QH| - |QC|)
ለሙቀት ፓምፕ፡ COP_hp = |QH| / W = COP_ref + 1

የዘመናዊ ሙቀት ፓምፖች COP በአማካይ ከ 3 እስከ 5 ነው፤ ይህም ማለት ለሚወስዱት ለእያንዳንዱ 1 ጁል ኤሌክትሪክ ከ 3 እስከ 5 ጁል ሙቀት ወደ ቤት ያስገባሉ!`
  },

  // Page 108 - Book page 100
  {
    pdfPageNumber: 108,
    bookPageLabel: '100',
    chapterNumber: 4,
    sectionRef: '4.7.1',
    titleEn: 'The Carnot Engine: The Ideal Reversible Cycle',
    titleAm: 'የካርኖት ሞተር፡ ፍጹም ተቀላባሽ ዑደት',
    subtopicEn: '4.7.1. Sadi Carnot (1824) Four Reversible Steps: 2 Isothermal + 2 Adiabatic',
    subtopicAm: '፬.፯.፩ ሳዲ ካርኖት፣ አራት ተቀላባሽ ደረጃዎች፡ ፪ አይሶተርማል እና ፪ አዲያባቲክ',
    pageType: 'content',
    contentEn: `4.7.1. The Carnot Engine
In 1824, French military engineer Nicolas Léonard Sadi Carnot (1796–1832) described an idealized, frictionless theoretical engine that sets the absolute UPPER LIMIT on the efficiency of any possible heat engine.

The Carnot Cycle consists of four reversible thermodynamic processes:
1. Process 1 -> 2 (Isothermal Expansion at T_H):
   The gas expands at constant high temperature T_H, absorbing heat Q_H from the hot reservoir.
2. Process 2 -> 3 (Adiabatic Expansion):
   The cylinder is thermally insulated. The gas continues to expand without heat transfer (Q = 0), doing work and cooling from T_H down to T_C.
3. Process 3 -> 4 (Isothermal Compression at T_C):
   The gas is compressed at constant low temperature T_C, rejecting waste heat Q_C into the cold reservoir.
4. Process 4 -> 1 (Adiabatic Compression):
   Thermally insulated again. The gas is compressed without heat transfer (Q = 0), warming from T_C back to T_H, returning to its initial state.`,
    contentAm: `፬.፯.፩ የካርኖት ሞተር (The Carnot Engine)
በ1824 ዓ.ም ፈረንሳዊው መሃንዲስ ሳዲ ካርኖት በማንኛውም የሙቀት ሞተር ሊደረስበት የሚችለውን ከፍተኛውን የብቃት ጣሪያ የሚያሳይ ፍጹም ተቀላባሽ ሞተር ንድፈ-ሀሳብ አቀረበ።

የካርኖት ዑደት አራት ተቀላባሽ ሂደቶችን ያቀፈ ነው፡
፩. ከ 1 ወደ 2፡ አይሶተርማል መስፋፋት በከፍተኛ ሙቀት (TH)፤ ሙቀት (QH) ይገባል።
፪. ከ 2 ወደ 3፡ አዲያባቲክ መስፋፋት (Q = 0)፤ ጋዙ ስራ እየሰራ ይቀዘቅዛል (ከ TH ወደ TC)።
፫. ከ 3 ወደ 4፡ አይሶተርማል መጨመቅ በቀዝቃዛ ሙቀት (TC)፤ ትርፍ ሙቀት (QC) ይወገዳል።
፬. ከ 4 ወደ 1፡ አዲያባቲክ መጨመቅ (Q = 0)፤ ጋዙ እየተጨመቀ ይሞቃል (ከ TC ወደ TH ይመለሳል)።`
  },

  // Page 109 - Book page 101
  {
    pdfPageNumber: 109,
    bookPageLabel: '101',
    chapterNumber: 4,
    sectionRef: '4.7.1',
    titleEn: 'Carnot Efficiency Formula & Carnots Theorem',
    titleAm: 'የካርኖት ብቃት ቀመር እና የካርኖት ቴዎረም',
    subtopicEn: 'e_Carnot = 1 - T_C / T_H = (T_H - T_C) / T_H & Absolute Temperature Rule',
    subtopicAm: 'የካርኖት ብቃት (e = 1 - TC/TH) እና ፍጹም የሙቀት ገደብ ህግ',
    pageType: 'content',
    contentEn: `Carnot Efficiency:
For a Carnot cycle, the ratio of heat absorbed and expelled is directly proportional to the absolute thermodynamic temperatures:
|Q_C| / |Q_H| = T_C / T_H -------------------------------------------- (4.7.4)
Substituting into the efficiency equation:
e_Carnot = 1 - T_C / T_H = (T_H - T_C) / T_H ------------------------- (4.7.5)
CRITICAL: Temperatures T_C and T_H MUST ALWAYS BE IN KELVIN!

Carnot's Theorem:
"No real heat engine operating between two given temperature reservoirs can be more efficient than a Carnot engine operating between the same two reservoirs:
e_real ≤ e_Carnot."

Consequences of Carnot's Efficiency:
1. To achieve e = 100% (e = 1), we must have either T_C = 0 K (absolute zero) or T_H = ∞. Since neither is physically achievable, no engine can ever be 100% efficient.
2. The larger the temperature difference between reservoirs (T_H - T_C), the higher the maximum possible efficiency. Power plants operate at the highest possible steam temperatures to maximize thermal efficiency.`,
    contentAm: `የካርኖት ብቃት ቀመር፡
ለካርኖት ዑደት የሙቀት ምጣኔው ፍጹም ከሆኑት ሙቀቶች ጋር እኩል ነው፡ |QC|/|QH| = TC/TH
ስለዚህ፡
e_Carnot = 1 - T_C / T_H = (T_H - T_C) / T_H (ቀመር 4.7.5)
ማሳሰቢያ፡ የሙቀት መጠኖቹ TC እና TH የግድ በኬልቪን (Kelvin) መሆን አለባቸው!

የካርኖት ቴዎረም (Carnot's Theorem)፡
በሁለት የሙቀት ምንጮች መካከል የሚሰራ ማንኛውም እውነተኛ ሞተር ብቃት ከተመሳሳይ ምንጮች ከሚሰራ የካርኖት ሞተር ብቃት ሊበልጥ አይችልም (e_real ≤ e_Carnot)።

ዋና ዋና መደምደሚያዎች፡
፩. 100% ብቃት ለማግኘት TC = 0 K ወይም TH = ∞ መሆን አለበት፤ ሁለቱም በተፈጥሮ ስለማይቻሉ 100% ብቃት ያለው ሞተር አይኖርም።
፪. በሞቀውና በቀዘቀዘው መካከል ያለው ልዩነት (TH - TC) በሰፋ ቁጥር የሞተሩ ብቃት ይጨምራል።`
  },

  // Page 110 - Book page 102
  {
    pdfPageNumber: 110,
    bookPageLabel: '110',
    chapterNumber: 4,
    sectionRef: '4.7.1',
    titleEn: 'Carnot Refrigerator & Power Plant Example',
    titleAm: 'የካርኖት ፍሪጅ እና የእንፋሎት ኤሌክትሪክ ጣቢያ ምሳሌ',
    subtopicEn: 'COP_Carnot = T_C / (T_H - T_C) & Steam Plant at 500 °C and 30 °C',
    subtopicAm: 'የካርኖት ፍሪጅ ብቃት እና በ 500 °C እና 30 °C የሚሰራ ጣቢያ ስሌት',
    pageType: 'content',
    contentEn: `Carnot Refrigerator:
The maximum possible coefficient of performance for a refrigerator operating between temperatures T_C and T_H is:
COP_Carnot,ref = T_C / (T_H - T_C) ----------------------------------- (4.7.6)
COP_Carnot,hp = T_H / (T_H - T_C) ------------------------------------ (4.7.7)

Example (Steam Power Plant):
A steam turbine power plant operates with superheated steam entering at T_H = 500.0 °C and condenser cooling water at T_C = 30.0 °C. The electric output power of the plant is 500 MW, and its actual thermal efficiency is 35.0%.
(a) What is the maximum theoretical efficiency?
(b) How much heat energy is absorbed from fuel per second?
(c) How much waste heat is discharged to the cooling water per second?

Solution:
Convert temperatures to Kelvin:
T_H = 500.0 + 273.15 = 773.15 K
T_C = 30.0 + 273.15 = 303.15 K

(a) Theoretical Carnot efficiency:
    e_Carnot = 1 - (303.15 / 773.15) = 1 - 0.392 = 0.608 = 60.8%.
    The absolute upper limit permitted by physical law is 60.8%.`,
    contentAm: `የካርኖት ፍሪጅ ከፍተኛ ብቃት (COP)፡
COP_Carnot,ref = T_C / (T_H - T_C) (ቀመር 4.7.6)
COP_Carnot,hp = T_H / (T_H - T_C) (ቀመር 4.7.7)

የተሰራ ምሳሌ (የእንፋሎት ኤሌክትሪክ ጣቢያ)፡
እንፋሎት በ TH = 500.0 °C ሲገባ ማቀዝቀዣው TC = 30.0 °C ነው። ጣቢያው 500 ሜጋ ዋት የኤሌክትሪክ ኃይል ሲያመነጭ እውነተኛ ብቃቱ 35.0% ነው፡
ሙቀቶችን ወደ ኬልቪን እንለውጥ፡
TH = 500 + 273.15 = 773.15 K
TC = 30 + 273.15 = 303.15 K

ሀ. የንድፈ-ሀሳብ ከፍተኛ ብቃት (e_Carnot)፡
e_Carnot = 1 - (303.15 / 773.15) = 1 - 0.392 = 0.608 = 60.8%።
የተፈጥሮ ህግ የሚፈቅደው ከፍተኛው ብቃት 60.8% ብቻ ነው።`
  },

  // Page 111 - Book page 103
  {
    pdfPageNumber: 111,
    bookPageLabel: '103',
    chapterNumber: 4,
    sectionRef: '4.7.2',
    titleEn: 'Power Plant Solution Continued & Entropy Intro',
    titleAm: 'የኤሌክትሪክ ጣቢያ ስሌት ፍጻሜ እና የኢንትሮፒ መግቢያ',
    subtopicEn: 'Q_H = 1429 MW, Waste Heat Q_C = 929 MW & 4.7.2. Concept of Entropy',
    subtopicAm: 'የነዳጅ ሙቀት 1429 MW፣ የሚባክን ሙቀት 929 MW እና ፬.፯.፪ የኢንትሮፒ ፅንሰ-ሀሳብ',
    pageType: 'content',
    contentEn: `Power Plant Solution Continued:
(b) Heat absorbed per second (P_in):
    e_actual = P_out / P_in  =>  P_in = P_out / e_actual
    P_in = 500 MW / 0.350 ≈ 1429 MW = 1.43 × 10⁹ J/s.

(c) Waste heat rate expelled (P_waste):
    P_waste = P_in - P_out = 1429 MW - 500 MW = 929 MW = 9.29 × 10⁸ J/s!
    Notice that nearly double the generated electric power is discarded into the river or atmosphere as waste heat!

4.7.2. The Concept of Entropy
The Second Law can be stated in its most powerful, universal form using the concept of Entropy (S), introduced by Rudolf Clausius in 1865.

Macroscopic Definition of Entropy:
If a system absorbs an infinitesimal amount of heat dQ_rev during an internally reversible process at absolute temperature T, the change in entropy dS is:
dS = dQ_rev / T ----------------------------------------------------- (4.7.8)

For a finite reversible process from state i to state f:
ΔS = S_f - S_i = ∫_{i}^{f} (dQ_rev / T) ----------------------------- (4.7.9)
SI Unit of Entropy: Joules per Kelvin (J/K).`,
    contentAm: `የጣቢያው ስሌት ፍጻሜ፡
ለ. በሰከንድ የሚቃጠለው ነዳጅ ሙቀት፡
P_in = 500 MW / 0.35 = 1429 ሜጋ ዋት።
ሐ. በሰከንድ የሚባክነው ትርፍ ሙቀት፡
P_waste = 1429 - 500 = 929 ሜጋ ዋት! ከተመረተው የኤሌክትሪክ ኃይል በእጥፍ የሚበልጥ ሙቀት ወደ ወንዝ ወይም ከባቢ አየር ይባክናል!

፬.፯.፪ የኢንትሮፒ ፅንሰ-ሀሳብ (Concept of Entropy)
ኢንትሮፒ (S) በሩዶልፍ ክላውሲየስ የተገኘ ሲሆን የሁለተኛውን ህግ በሁለንተናዊ መንገድ ለመግለጽ ያስችላል።
የኢንትሮፒ ለውጥ ቀመር፡
dS = dQ_rev / T (ቀመር 4.7.8)
ΔS = ∫ (dQ_rev / T) (ቀመር 4.7.9)
የኢንትሮፒ የSI አሃድ፡ ጁል በኬልቪን (J/K) ነው።`
  },

  // Page 112 - Book page 104
  {
    pdfPageNumber: 112,
    bookPageLabel: '104',
    chapterNumber: 4,
    sectionRef: '4.7.2',
    titleEn: 'Entropy as a State Function & Phase Change Delta S',
    titleAm: 'ኢንትሮፒ እንደ ይዞታ ፈንክሽን እና የይዘት ለውጥ የኢንትሮፒ ስሌት',
    subtopicEn: 'Delta S = Q / T for Isothermal/Phase Changes & Reversible Cycle Integral = 0',
    subtopicAm: 'የአይሶተርማል ኢንትሮፒ ለውጥ (ΔS = Q/T) እና ዑደታዊ ኢንቴግራል ዜሮ መሆን',
    pageType: 'content',
    contentEn: `Entropy is a State Function:
Like internal energy U, entropy S depends ONLY on the current thermodynamic state of the system, not on the path history:
∮ (dQ_rev / T) = 0 (for any closed reversible cycle).

Calculating Entropy Changes:
1. Isothermal Reversible Process (T = Constant):
   Since T is constant, it factors out of the integral:
   ΔS = (1 / T) ∫ dQ_rev = Q_rev / T -------------------------------- (4.7.10)

2. Entropy Change during a Phase Change:
   Melting or boiling occurs at constant temperature T:
   • Melting ice at 0 °C (273.15 K):
     ΔS = m L_f / T
   • Boiling water at 100 °C (373.15 K):
     ΔS = m L_v / T

Example:
What is the change in entropy when 1.00 kg of ice at 0.0 °C melts into water at 0.0 °C?
Solution:
L_f = 3.33 × 10⁵ J/kg, T = 273.15 K.
ΔS = (1.00 kg)(3.33 × 10⁵ J/kg) / 273.15 K = + 1,219 J/K.
The entropy of the water molecules increases by 1219 J/K because liquid water has a far more disordered molecular arrangement than crystalline ice.`,
    contentAm: `ኢንትሮፒ የይዞታ ፈንክሽን ነው፡
ልክ እንደ ውስጣዊ ኃይል ኢንትሮፒም በስርዓቱ ይዞታ ላይ ብቻ የተመሰረተ ነው፡
∮ (dQ_rev / T) = 0

የኢንትሮፒ ለውጥ ስሌት፡
፩. አይሶተርማል ሂደት (T ቋሚ ሲሆን)፡
ΔS = Q_rev / T (ቀመር 4.7.10)

፪. በይዘት ለውጥ ወቅት፡
• በረዶ ሲቀልጥ፡ ΔS = m Lf / T
• ውሃ ሲተን፡ ΔS = m Lv / T

ምሳሌ፡
1.00 ኪ.ግ በረዶ በ 0.0 °C (273.15 K) ሲቀልጥ የኢንትሮፒ ለውጡ ስንት ነው?
መፍትሔ፡
ΔS = (1.00 × 333,000) / 273.15 = + 1,219 J/K።
የውሃ ሞለኪውሎች ከክሪስታል በረዶ ይልቅ በፈሳሽ ውስጥ የተዘበራረቁ በመሆናቸው ኢንትሮፒ በ1219 J/K ጨምሯል።`
  },

  // Page 113 - Book page 105
  {
    pdfPageNumber: 113,
    bookPageLabel: '105',
    chapterNumber: 4,
    sectionRef: '4.7.2',
    titleEn: 'Entropy & Second Law: Delta S_universe >= 0',
    titleAm: 'ኢንትሮፒ እና ሁለተኛው ህግ፡ ΔS_አጽናፈ-ዓለም >= 0',
    subtopicEn: 'Total Entropy of Isolated Systems Always Increases & The Arrow of Time',
    subtopicAm: 'የተገለለ ስርዓት ኢንትሮፒ ምንጊዜም መጨመሩ እና የጊዜ አቅጣጫ (Arrow of Time)',
    pageType: 'content',
    contentEn: `Entropy Statement of the Second Law of Thermodynamics:
"The total entropy of an isolated system never decreases over time. It remains constant in ideal reversible processes and strictly increases in all real, spontaneous (irreversible) processes:"
ΔS_isolated ≥ 0 ---------------------------------------------------- (4.7.11)

For the Universe as a whole (the ultimate isolated system):
ΔS_universe = ΔS_system + ΔS_surroundings ≥ 0
• Reversible process: ΔS_universe = 0
• Irreversible (natural) process: ΔS_universe > 0

The Thermodynamic Arrow of Time:
Why does time only flow forward?
Isaac Newton's laws and Albert Einstein's equations of relativity are completely time-symmetric (a video played backward looks physically plausible). It is ONLY the Second Law of Thermodynamics and the inexorable increase of entropy (ΔS > 0) that provides a direction—an "arrow of time"—distinguishing the past from the future!

Heat Death of the Universe:
As all natural processes increase universal entropy, thermal gradients gradually level out, leading asymptotically to maximum entropy and uniform temperature everywhere.`,
    contentAm: `የሁለተኛው ህግ የኢንትሮፒ መግለጫ፡
"የማንኛውም የተገለለ ስርዓት አጠቃላይ ኢንትሮፒ በጊዜ ሂደት በፍጹም አይቀንስም፤ በተቀላባሽ ሂደቶች ቋሚ ሲሆን በእውነተኛ የተፈጥሮ ሂደቶች ሁሉ ምንጊዜም ይጨምራል፡"
ΔS_universe = ΔS_system + ΔS_surroundings ≥ 0 (ቀመር 4.7.11)

የጊዜ አቅጣጫ (The Arrow of Time)፡
ጊዜ ሁልጊዜ ወደፊት ብቻ የሚጓዘው ለምንድን ነው?
የኒውተንና የአንስታይን ህጎች ጊዜ ወደ ኋላ ቢጓዝም እኩል ይሰራሉ። ያለፈውን ከወደፊቱ የሚለየውና የጊዜን ወደፊት መጓዝ የሚወስነው የሁለተኛው ህግ የኢንትሮፒ ምንጊዜም መጨመር ብቻ ነው!

የአጽናፈ-ዓለም የሙቀት ሞት (Heat Death)፡
ሁሉም ሂደቶች ኢንትሮፒን ስለሚጨምሩ ውሎ አድሮ ሁሉም የሙቀት ልዩነቶች እኩል ሆነው ወደ ከፍተኛው ኢንትሮፒ ይደርሳሉ።`
  },

  // Page 114 - Book page 106
  {
    pdfPageNumber: 114,
    bookPageLabel: '106',
    chapterNumber: 4,
    sectionRef: '4.7.2',
    titleEn: 'Microscopic Entropy: Boltzmann Formulation',
    titleAm: 'የማይክሮስኮፒክ ኢንትሮፒ፡ የቦልትዝማን ቀመር',
    subtopicEn: 'S = k_B ln(Omega), Multiplicity of Microstates, Disorder & Probability',
    subtopicAm: 'ቀመር S = kB ln(Ω)፣ የማይክሮስቴቶች ብዛት እና ስታቲስቲካል ሜካኒክስ',
    pageType: 'content',
    contentEn: `Microscopic Interpretation of Entropy (Statistical Mechanics):
Austrian physicist Ludwig Boltzmann (1844–1906) provided the microscopic statistical foundation of entropy.
Entropy is a measure of molecular disorder, randomness, and the probability of a macroscopic state:
S = k_B ln Ω -------------------------------------------------------- (4.7.12)
where:
• k_B = Boltzmann's constant = 1.3806 × 10⁻²³ J/K
• Ω (Omega) = thermodynamic probability or multiplicity (the total number of microscopic arrangements / microstates consistent with the given macrostate).

Why Natural Systems Tend to High Entropy:
A highly ordered state (such as all gas molecules clustered in the left half of a room) corresponds to a tiny number of microstates (low Ω, low S).
A disordered state (molecules distributed uniformly throughout the room) corresponds to an astronomically enormous number of microstates (huge Ω, high S).
Spontaneous processes are not guided by any mysterious force; systems simply evolve toward the macroscopic state that has overwhelmingly the GREATEST PROBABILITY of occurring!`,
    contentAm: `የማይክሮስኮፒክ ኢንትሮፒ (የቦልትዝማን ቀመር)፡
ኦስትሪያዊው የፊዚክስ ሊቅ ሉድቪግ ቦልትዝማን ኢንትሮፒን ከአተሞች ስታቲስቲክስ ጋር አገናኘው፡
S = k_B ln Ω (ቀመር 4.7.12)
kB = 1.3806 × 10⁻²³ J/K (የቦልትዝማን ቋሚ)
Ω (ኦሜጋ) = አንድን ይዞታ ሊፈጥሩ የሚችሉ ጥቃቅን አደረጃጀቶች (Microstates) ብዛት።

ስርዓቶች ወደ ከፍተኛ ኢንትሮፒ የሚያዘነብሉት ለምንድን ነው?
በጣም የተስተካከለ ይዞታ አነስተኛ የማይክሮስቴት አማራጭ (ዝቅተኛ Ω) ሲኖረው፣ የተዘበራረቀ ይዞታ ደግሞ እጅግ በጣም ብዙ የማይክሮስቴት አማራጮች (ግዙፍ Ω) አሉት። ስርዓቶች ወደ ከፍተኛ ኢንትሮፒ የሚጓዙት ያ ሁኔታ የመከሰት እድሉ (Probability) እጅግ በጣም ከፍተኛ ስለሆነ ብቻ ነው!`
  },

  // Page 115 - Book page 107
  {
    pdfPageNumber: 115,
    bookPageLabel: '107',
    chapterNumber: 4,
    sectionRef: 'Summary',
    titleEn: 'Chapter Four Summary (Part 1)',
    titleAm: 'የምዕራፍ አራት ማጠቃለያ (ክፍል ፩)',
    subtopicEn: 'Temperature Scales, Expansion, Calorimetry, Latent Heat & Heat Transfer',
    subtopicAm: 'የሙቀት ስኬሎች፣ መስፋፋት፣ ካሎሪሜትሪ፣ ድብቅ ሙቀትና የሙቀት መተላለፊያ',
    pageType: 'content',
    contentEn: `Chapter Four Summary:
• Zeroth Law of Thermodynamics: Defines temperature; systems in mutual thermal equilibrium share the same temperature.
• Conversions: T_K = T_C + 273.15; T_F = 1.8 T_C + 32.
• Thermal Expansion:
  Linear: ΔL = α L₀ ΔT
  Area: ΔA = 2 α A₀ ΔT
  Volume: ΔV = β V₀ ΔT (β ≈ 3α for isotropic solids).
  Water reaches maximum density at 4 °C.
• Heat is thermal energy transferred due to temperature difference: Q = m c ΔT.
  Water has remarkably high specific heat: c_water = 4186 J/(kg·K).
• Phase changes occur at constant temperature: Q = ± m L.
  - Fusion: L_f (water) = 3.33 × 10⁵ J/kg.
  - Vaporization: L_v (water) = 2.26 × 10⁶ J/kg.
• Heat Transfer Mechanisms:
  1. Conduction (Fourier's Law): H = k A (T_H - T_C) / L.
  2. Convection: Mass movement of fluid (natural vs forced).
  3. Radiation (Stefan-Boltzmann Law): P = e σ A T⁴.`,
    contentAm: `የምዕራፍ አራት ማጠቃለያ (ክፍል ፩)፡
• ዜሮኛ ህግ፡ የሙቀት መጠንን ይገልጻል፤
• ልወጣ፡ TK = TC + 273.15፤ TF = 1.8 TC + 32፤
• የሙቀት መስፋፋት፡ ΔL = α L₀ ΔT፤ ΔA = 2α A₀ ΔT፤ ΔV = β V₀ ΔT፤ ውሃ በ 4 °C ላይ ከፍተኛ እፍጋት አለው።
• የሙቀት መጠን፡ Q = m c ΔT (የውሃ ስፔሲፊክ ሂት 4186 J/(kg·K))።
• የይዘት ለውጥ ድብቅ ሙቀት፡ Q = ± m L (የውሃ መቅለጥ Lf = 3.33×10⁵ J/kg፤ መትነን Lv = 2.26×10⁶ J/kg)።
• የሙቀት መተላለፊያ፡
  ፩. ኮንዳክሽን፡ H = k A (TH - TC) / L
  ፪. ኮንቬክሽን፡ የፈሳሽ አካላዊ ፍሰት
  ፫. ራዲየሽን፡ P = e σ A T⁴`
  },

  // Page 116 - Book page 108
  {
    pdfPageNumber: 116,
    bookPageLabel: '108',
    chapterNumber: 4,
    sectionRef: 'Summary',
    titleEn: 'Chapter Four Summary (Part 2)',
    titleAm: 'የምዕራፍ አራት ማጠቃለያ (ክፍል ፪)',
    subtopicEn: 'First Law, Processes, Heat Engines, Carnot Cycle, Second Law & Entropy',
    subtopicAm: 'አንደኛ ህግ፣ ሂደቶች፣ የሙቀት ሞተሮች፣ ካርኖት ዑደት እና ኢንትሮፒ',
    pageType: 'content',
    contentEn: `Chapter Four Summary (Continued):
• First Law of Thermodynamics: ΔU = Q - W. Internal energy U is a state function; work W and heat Q are path-dependent.
• Work done by gas: W = ∫ P dV (area under PV curve).
• Special Processes:
  - Isobaric (constant P): W = P ΔV
  - Isochoric (constant V): W = 0, ΔU = Q
  - Isothermal (constant T): ΔU = 0, Q = W = nRT ln(V_f / V_i)
  - Adiabatic (Q = 0): ΔU = - W, P V^γ = constant.
• Molar Heat Capacities: C_p - C_v = R; γ = C_p / C_v.
• Heat Engines: W = Q_H - Q_C; efficiency e = W / Q_H = 1 - Q_C / Q_H.
• Second Law of Thermodynamics:
  - Kelvin-Planck: No engine can be 100% efficient.
  - Clausius: Heat does not spontaneously flow from cold to hot.
• Carnot Engine: e_Carnot = 1 - T_C / T_H (maximum possible efficiency).
• Entropy: dS = dQ_rev / T; ΔS_isolated ≥ 0. The entropy of the universe always increases!
• Boltzmann Entropy: S = k_B ln Ω.`,
    contentAm: `የምዕራፍ አራት ማጠቃለያ (ክፍል ፪)፡
• አንደኛ ህግ፡ ΔU = Q - W፤ ስራ W = ∫ P dV (በPV ግራፍ ስር ያለው ስፋት)።
• ልዩ ሂደቶች፡ አይሶባሪክ (W = PΔV)፣ አይሶኮሪክ (W = 0)፣ አይሶተርማል (ΔU = 0)፣ አዲያባቲክ (Q = 0)።
• የሙቀት ሞተሮች፡ e = W / QH = 1 - QC / QH።
• ሁለተኛ ህግ፡ ፩. ኬልቪን-ፕላንክ (100% ብቃት ያለው ሞተር የለም)፤ ፪. ክላውሲየስ (ሙቀት ከቀዘቀዘ ወደ ሞቀ በራሱ አይፈስም)።
• የካርኖት ብቃት፡ e_Carnot = 1 - TC / TH (TC እና TH በኬልቪን)።
• ኢንትሮፒ፡ dS = dQ_rev / T፤ በአጽናፈ-ዓለም ውስጥ ኢንትሮፒ ምንጊዜም ይጨምራል (ΔS_universe ≥ 0)።
• የቦልትዝማን ቀመር፡ S = kB ln Ω።`
  },

  // Page 117 - Book page 109
  {
    pdfPageNumber: 117,
    bookPageLabel: '109',
    chapterNumber: 4,
    sectionRef: 'Review Questions',
    titleEn: 'Chapter Four Review Questions (Part 1)',
    titleAm: 'የምዕራፍ አራት የማጠቃለያ ጥያቄዎች (ክፍል ፩)',
    subtopicEn: 'Questions 1 to 6: Temperature Scales, Expansion & Calorimetry Problems',
    subtopicAm: 'ጥያቄዎች ፩ እስከ ፮፡ የሙቀት ስኬሎች፣ መስፋፋት እና ካሎሪሜትሪ',
    pageType: 'review',
    contentEn: `Chapter Review Questions and Problems (Part 1):

1. Normal human body temperature is 37.0 °C. Convert this temperature to:
   (a) The Fahrenheit scale (°F).
   (b) The Kelvin scale (K).

2. A steel railroad track has a length of 30.000 m when the temperature is 0.0 °C. What is its length on a hot summer day when the temperature reaches 40.0 °C? (α_steel = 11 × 10⁻⁶ K⁻¹).

3. An aluminum tea kettle has a mass of 0.750 kg and contains 1.500 kg of water at 20.0 °C. How much heat must be added to raise the temperature of the kettle and water together to the boiling point (100.0 °C)?

4. A 0.200-kg block of copper at 100.0 °C is dropped into an insulated container holding 0.150 kg of water at 20.0 °C. Find the final equilibrium temperature of the mixture. (c_Cu = 387 J/kg·K, c_w = 4186 J/kg·K).

5. How much energy is required to convert 2.0 kg of ice at -10.0 °C completely into steam at 100.0 °C?

6. A double-pane glass window consists of two glass panes each 4.0 mm thick separated by a 5.0 mm air gap. Compare the heat loss rate through this window with that through a single 4.0 mm glass pane.`,
    contentAm: `የምዕራፍ አራት የማጠቃለያ ጥያቄዎች (ክፍል ፩)፡

፩. የሰው ልጅ መደበኛ የሰውነት ሙቀት 37.0 °C ነው፡
   ሀ. ወደ ፋራንሃይት (°F) ለውጥ፤
   ለ. ወደ ኬልቪን (K) ለውጥ።

፪. የባቡር ሀዲድ በ 0.0 °C ላይ 30.000 ሜትር ርዝመት አለው። በሞቃታማ የበጋ ቀን ሙቀት ወደ 40.0 °C ሲደርስ የሀዲዱ ርዝመት ስንት ይሆናል? (α = 11 × 10⁻⁶ K⁻¹)።

፫. 0.750 ኪ.ግ የሚመዝን የአልሙኒየም ማፍያ በ 20.0 °C ላይ ያለ 1.500 ኪ.ግ ውሃ ይዟል። ሁለቱንም ወደ 100.0 °C ለማፍላት ምን ያህል ሙቀት ያስፈልጋል?

፬. በ 100.0 °C ላይ ያለ 0.200 ኪ.ግ መዳብ በ 20.0 °C ላይ ባለ 0.150 ኪ.ግ ውሃ ውስጥ ተጨመረ። የጋራ የመጨረሻ ሙቀታቸው ስንት ይሆናል?

፭. 2.0 ኪ.ግ በረዶን ከ -10.0 °C ሙሉ በሙሉ ወደ 100.0 °C እንፋሎት ለመቀየር ምን ያህል የሙቀት ኃይል ያስፈልጋል?

፮. ባለ ሁለት ደራብ የመስታወት መስኮት ሙቀትን በመጠበቅ ረገድ ከአንድ ነጠላ መስታወት በምን ይለያል?`,
    reviewQuestions: [
      {
        title: 'Chapter 4 Review Problems (1 to 6)',
        questions: [
          '1. Convert 37.0 deg C body temperature to Fahrenheit and Kelvin.',
          '2. Steel rail (30.000 m at 0 deg C) heated to 40 deg C: calculate final length.',
          '3. 0.75-kg aluminum kettle + 1.5-kg water heated from 20 to 100 deg C: find total heat.',
          '4. 0.2-kg copper at 100 deg C placed in 0.15-kg water at 20 deg C: find equilibrium temperature.',
          '5. Energy required to turn 2.0 kg ice at -10 deg C to steam at 100 deg C.',
          '6. Double-pane window insulation comparison.'
        ]
      }
    ]
  },

  // Page 118 - Book page 110
  {
    pdfPageNumber: 118,
    bookPageLabel: '110',
    chapterNumber: 4,
    sectionRef: 'Review Questions',
    titleEn: 'Chapter Four Review Questions (Part 2)',
    titleAm: 'የምዕራፍ አራት የማጠቃለያ ጥያቄዎች (ክፍል ፪)',
    subtopicEn: 'Questions 7 to 12: First Law, Engine Efficiency, Carnot Cycle & Entropy',
    subtopicAm: 'ጥያቄዎች ፯ እስከ ፲፪፡ አንደኛ ህግ፣ የሞተር ብቃት፣ ካርኖት ዑደት እና ኢንትሮፒ',
    pageType: 'review',
    contentEn: `Chapter Review Questions and Problems (Part 2):

7. A gas expands from volume 2.0 L to 6.0 L at a constant pressure of 3.0 × 10⁵ Pa while 1500 J of heat is added.
   (a) What is the work done by the gas?
   (b) What is the change in internal energy of the gas?

8. One mole of an ideal gas undergoes an isothermal expansion at 300 K from volume 1.0 m³ to 3.0 m³.
   (a) How much work is done by the gas?
   (b) How much heat is absorbed?

9. A heat engine absorbs 5000 J of heat from a hot reservoir and expels 3200 J of heat to a cold reservoir in each cycle.
   (a) What is the net work done per cycle?
   (b) What is the thermal efficiency of the engine?

10. A Carnot heat engine operates between reservoirs at temperatures T_H = 600 K and T_C = 300 K.
    (a) Calculate its Carnot efficiency.
    (b) If the engine absorbs 1200 J from the hot reservoir, how much work is produced?

11. A refrigerator has a COP of 4.5. If it removes 900 J of heat from the freezer compartment in each cycle, how much electrical work is required per cycle?

12. Calculate the change in entropy when 500 g of water at 100 °C is completely converted into steam at 100 °C. (L_v = 2.26 × 10⁶ J/kg).`,
    contentAm: `የምዕራፍ አራት የማጠቃለያ ጥያቄዎች (ክፍል ፪)፡

፯. ጋዝ በ 3.0 × 10⁵ ፓስካል ቋሚ ጫና ከ 2.0 ሊትር ወደ 6.0 ሊትር ሲሰፋ 1500 ጁል ሙቀት ተጨመረበት፡
   ሀ. በጋዙ የተሰራው ስራ ስንት ነው?
   ለ. የጋዙ የውስጣዊ ኃይል ለውጥ (ΔU) ስንት ነው?

፰. አንድ ሞል ጋዝ በ 300 K ቋሚ ሙቀት ከ 1.0 ሜ³ ወደ 3.0 ሜ³ አይሶተርማል መስፋፋት አደረገ፡
   ሀ. የተሰራው ስራ ስንት ነው?
   ለ. የገባው ሙቀት ስንት ነው?

፱. የሙቀት ሞተር በየዑደቱ 5000 ጁል ሙቀት ወስዶ 3200 ጁል ትርፍ ሙቀት ያስወጣል፡
   ሀ. የተጣራው ስራ ስንት ነው?
   ለ. የሞተሩ ብቃት ስንት ነው?

፲. የካርኖት ሞተር በ TH = 600 K እና TC = 300 K መካከል ይሰራል፡
   ሀ. የካርኖት ብቃቱ ስንት ነው?
   ለ. ከሞቀው አካል 1200 ጁል ቢወስድ ምን ያህል ስራ ይሰራል?

፲፩. የአንድ ፍሪጅ COP 4.5 ነው። በየዑደቱ 900 ጁል ሙቀት ከውስጡ ለማስወገድ ምን ያህል የኤሌክትሪክ ስራ መሰራት አለበት?

፲፪. 500 ግራም ውሃ በ 100 °C ላይ ሙሉ በሙሉ ወደ እንፋሎት ሲቀየር የኢንትሮፒ ለውጡን አስላ።`,
    reviewQuestions: [
      {
        title: 'Chapter 4 Review Problems (7 to 12)',
        questions: [
          '7. Isobaric expansion at 3.0x10^5 Pa from 2L to 6L with Q = 1500 J: find W and delta U.',
          '8. Isothermal expansion of 1 mole at 300 K from 1 m^3 to 3 m^3: find W and Q.',
          '9. Heat engine with Q_H = 5000 J and Q_C = 3200 J: find net work and efficiency.',
          '10. Carnot engine between 600 K and 300 K: find efficiency and work for Q_H = 1200 J.',
          '11. Refrigerator with COP = 4.5 removing 900 J: calculate electrical work input.',
          '12. Entropy change for converting 500 g water at 100 deg C to steam at 100 deg C.'
        ]
      }
    ]
  }
];
