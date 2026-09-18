import { OfficialPdfPage } from '../geographyPdf/types';

export const physicsChapter2Part1Pages: OfficialPdfPage[] = [
  // Page 23 - Book page 15
  {
    pdfPageNumber: 23,
    bookPageLabel: '15',
    chapterNumber: 2,
    sectionRef: '2.0',
    titleEn: 'CHAPTER TWO: KINEMATICS AND DYNAMICS OF PARTICLES',
    titleAm: 'ምዕራፍ ሁለት፡ የቁስ አካላት እንቅስቃሴና ዳይናሚክስ',
    subtopicEn: '2.0. Foundations of Mechanics and Realms of Phenomena',
    subtopicAm: '፪.0 የሜካኒክስ መሰረቶች እና የተፈጥሮ ክስተቶች አውዶች',
    pageType: 'content',
    contentEn: `CHAPTER TWO: KINEMATICS AND DYNAMICS OF PARTICLES

Mechanics is the study of the physics of motions and how it relates to the physical factors that affect them, like force, mass, momentum and energy. Mechanics may be divided into two branches: Dynamics, which deals with the motion of objects with its cause – force; and kinematics describes the possible motions of a body or system of bodies without considering the cause. Alternatively, mechanics may be divided according to the kind of system studied. The simplest mechanical system is the particle, defined as a body so small that its shape and internal structure are of no consequence in the given problem. More complicated is the motion of a system of two or more particles that exert forces on one another and possibly undergo forces exerted by bodies outside of the system.

The principles of mechanics have been applied to three general realms of phenomena:
1. Celestial Mechanics: The motions of such celestial bodies as stars, planets, and satellites can be predicted with great accuracy thousands of years before they occur.
2. Macroscopic Mechanics: Ordinary objects on Earth down to microscopic size (moving at speeds much lower than that of light) are properly described by Newtonian mechanics without significant corrections. The engineer who designs bridges or aircraft may use the Newtonian laws of mechanics with confidence.
3. Subatomic Scale: The behavior of matter and electromagnetic radiation on the atomic and subatomic scale.

Learning Objectives:
After going through this unit students will be able to:
• Understand the general feature of motion of a particle.
• Know how particles interact with the action of force.
• Explain the relationship between force and work done.`,
    contentAm: `ምዕራፍ ሁለት፡ የቁስ አካላት እንቅስቃሴና ዳይናሚክስ

ሜካኒክስ (Mechanics) የእንቅስቃሴን ፊዚክስ እና ከእንቅስቃሴ ጋር የተያያዙ እንደ ጉልበት (Force)፣ ክብደት (Mass)፣ ሞመንተም (Momentum) እና ኃይል (Energy) ያሉ ምክንያቶችን የሚያጠና የፊዚክስ ዘርፍ ነው። ሜካኒክስ በሁለት ዋና ዋና ክፍሎች ይከፈላል፡-
፩. ዳይናሚክስ (Dynamics)፡ የእንቅስቃሴ አምጪ ምክንያቶችን (ጉልበትን) ጨምሮ የሚያጠና ክፍል።
፪. ኪነማቲክስ (Kinematics)፡ እንቅስቃሴ አምጪ ምክንያቶችን ከግምት ሳያስገባ እንቅስቃሴውን ብቻ የሚገልጽ ክፍል።

የሜካኒክስ መርሆች የሚተገበሩባቸው ሦስቱ አውዶች፡
፩. የሰማይ አካላት እንቅስቃሴ (Celestial Mechanics)፡ የከዋክብት፣ ፕላኔቶችና ሳተላይቶች እንቅስቃሴ በከፍተኛ ትክክለኛነት ይተነበያል።
፪. የምድራዊ ግዙፍ አካላት እንቅስቃሴ (Macroscopic Realm)፡ ከብርሃን ፍጥነት እጅግ ባነሰ ፍጥነት የሚጓዙ ምድራዊ ቁሶች (ድልድዮች፣ አውሮፕላኖች፣ ተሽከርካሪዎች) በኒውተን ህጎች ይተነተናሉ።
፫. የአቶሚክ እና የረቂቅ ቅንጣቶች አውድ (Subatomic Scale)።`
  },

  // Page 24 - Book page 16
  {
    pdfPageNumber: 24,
    bookPageLabel: '16',
    chapterNumber: 2,
    sectionRef: '2.1',
    titleEn: 'Kinematics in One and Two Dimensions',
    titleAm: 'ኪነማቲክስ በአንድና በሁለት አውድ',
    subtopicEn: '2.1. Kinematical Quantities: Position, Displacement & Velocity',
    subtopicAm: '፪.፩ የኪነማቲክስ መጠኖች፡ ቦታ፣ ቦታ መቀየር እና ፍጥነት',
    pageType: 'content',
    contentEn: `2.1. Kinematics in One and Two Dimensions
Self Diagnostic Test:
• What does kinematics deal with?
• Can you state the kinematical quantities that describe the motion of objects?
• Can you distinguish instantaneous and average velocities? And accelerations?

A formal study of physics begins with kinematics. The word "kinematics" comes from a Greek word "kinesis" meaning motion, and is related to other English words such as "cinema" (movies) and "kinesiology" (the study of human motion). Kinematics is the branch of mechanics that describes the motion of objects without reference to the causes of motion (i.e., forces). Kinematics is concerned with analyzing kinematical quantities used to describe motion such as velocity, acceleration, displacement, time, and trajectory. Objects are in motion all around us: planets moving around the sun, cars moving along a road, blood flowing through veins, etc.

Objectives:
At the end of this section you will be able to:
• Define kinematic terms such as position, displacement, velocity and acceleration.
• Identify the difference between average and instantaneous velocity.
• Identify the difference between average and instantaneous acceleration.
• Derive kinematic equations for motions with constant acceleration.
• Explain projectile motion and solve problems related to it.
• Solve problems related to the concepts discussed in this chapter.

2.1.1. Displacement, velocity and Acceleration in 1D and 2D
Definition: Kinematical Quantities
Position: The location of an object with respect to a chosen reference point.`,
    contentAm: `፪.፩ ኪነማቲክስ በአንድና በሁለት አውድ ውስጥ
ራስን መመዘኛ ጥያቄዎች፡
• ኪነማቲክስ የሚያጠናው ምንድን ነው?
• የእንቅስቃሴ መግለጫ መጠኖችን መጥቀስ ትችላለህ?
• በአማካይ እና በቅጽበታዊ ፍጥነት መካከል ያለውን ልዩነት መለየት ትችላለህ?

ኪነማቲክስ የሚለው ቃል "ኪኔሲስ" (እንቅስቃሴ) ከሚለው የግሪክ ቃል የመጣ ነው። ኪነማቲክስ እንቅስቃሴ አምጪ ጉልበቶችን ከግምት ሳያስገባ የቦታ ለውጥን፣ ፍጥነትን፣ ማጣደፍን፣ ጊዜን እና የጉዞ መስመርን (Trajectory) ይመረምራል።

፪.፩.፩ ቦታ መቀየር፣ ፍጥነት እና ማጣደፍ
ቦታ (Position)፡ የአንድ አካል መገኛ ከተመረጠ የመነሻ ነጥብ (Reference point) አንጻር የሚለካ ነው።`
  },

  // Page 25 - Book page 17
  {
    pdfPageNumber: 25,
    bookPageLabel: '17',
    chapterNumber: 2,
    sectionRef: '2.1.1',
    titleEn: 'Displacement, Average & Instantaneous Quantities',
    titleAm: 'ቦታ መቀየር፣ አማካይ እና ቅጽበታዊ መጠኖች',
    subtopicEn: 'Displacement in 1D/2D, Distance, Velocity, and Acceleration Formulas',
    subtopicAm: 'የቦታ መቀየር፣ ርቀት፣ ፍጥነት እና ማጣደፍ ቀመሮች',
    pageType: 'content',
    contentEn: `Displacement: The change in position of an object with respect to a given reference frame.
For 1D (one-dimensional motion):
Δx = x_f - x_i

For 2D (two-dimensional motion):
Δr⃗ = r⃗_f - r⃗_i -------------------------------------------------- (2.1.1)

Distance (S): The length of the actual path followed by the object (a scalar quantity).

Average and Instantaneous Velocities:
Average Velocity (v⃗_av): is the total displacement divided by the total time.
v⃗_av = Δr⃗ / Δt = (r⃗_f - r⃗_i) / (t_f - t_i) -------------------------------- (2.1.2)

Average Speed: is the total distance traveled by the object divided by the total elapsed time.
v_av = (total distance S) / (total time interval Δt) -------------------------- (2.1.3)

Instantaneous Velocity (v⃗): is the limiting value of the ratio Δr⃗ / Δt as Δt approaches zero.
v⃗ = lim_{Δt→0} (Δr⃗ / Δt) = dr⃗ / dt ----------------------------------------- (2.1.4)
The instantaneous speed is the scalar magnitude of the instantaneous velocity: |v⃗|.

Average and Instantaneous Accelerations:
If the velocity of a particle changes with time, then the particle is accelerating.
Average acceleration (a⃗_av): is the change in velocity (Δv⃗) divided by the time interval Δt:
a⃗_av = Δv⃗ / Δt = (v⃗_f - v⃗_i) / (t_f - t_i) -------------------------------- (2.1.5)`,
    contentAm: `ቦታ መቀየር (Displacement)፡ የአንድ አካል የቦታ ለውጥ ከመነሻ ነጥብ አንጻር።
በ1D ውስጥ፡ Δx = x_f - x_i
በ2D ውስጥ፡ Δr⃗ = r⃗_f - r⃗_i (ቀመር 2.1.1)

ርቀት (Distance, S)፡ አካሉ የተጓዘበት አጠቃላይ የመንገድ ርዝመት (ስኬላር)።

አማካይ ፍጥነት (Average Velocity)፡ አጠቃላይ የቦታ ለውጥ ለአጠቃላይ ጊዜ ሲካፈል፡
v⃗_av = Δr⃗ / Δt = (r⃗_f - r⃗_i) / (t_f - t_i) (ቀመር 2.1.2)

አማካይ ስፒድ (Average Speed)፡ አጠቃላይ የተጓዘው ርቀት ለአጠቃላይ ጊዜ ሲካፈል፡
v_av = S / Δt (ቀመር 2.1.3)

ቅጽበታዊ ፍጥነት (Instantaneous Velocity)፡ ጊዜ Δt ወደ ዜሮ በሚጠጋበት ጊዜ ያለው የቦታ ለውጥ ምጣኔ፡
v⃗ = lim_{Δt→0} (Δr⃗ / Δt) (ቀመር 2.1.4)
ቅጽበታዊ ስፒድ የቅጽበታዊ ፍጥነት ስኬላር መጠን (|v⃗|) ነው።

አማካይ ማጣደፍ (Average Acceleration)፡
a⃗_av = Δv⃗ / Δt = (v⃗_f - v⃗_i) / (t_f - t_i) (ቀመር 2.1.5)`
  },

  // Page 26 - Book page 18
  {
    pdfPageNumber: 26,
    bookPageLabel: '18',
    chapterNumber: 2,
    sectionRef: '2.1.2',
    titleEn: 'Instantaneous Acceleration & Worked Examples',
    titleAm: 'ቅጽበታዊ ማጣደፍ እና የተሰሩ ምሳሌዎች',
    subtopicEn: 'Average vs Instantaneous Speed/Velocity Problem Solutions',
    subtopicAm: 'የአማካይና ቅጽበታዊ ስፒድ/ፍጥነት ስሌት ምሳሌዎች',
    pageType: 'content',
    contentEn: `Instantaneous acceleration (a⃗): The limit of average acceleration as Δt approaches zero:
a⃗ = lim_{Δt→0} (Δv⃗ / Δt) = dv⃗ / dt ----------------------------------------- (2.1.6)

Example:
A person walks first at a constant speed of 5 m/s along the straight line from point A to point B, and then back along the same line from B to A at a constant speed of 3 m/s.
a) What is his average speed over the entire trip?
b) What is his average velocity over the entire trip?

Solution:
Let the distance from A to B be x.
Total distance covered = S_AB + S_BA = x + x = 2x.
Time from A to B: t_AB = x / v_AB = x / 5 m/s.
Time from B to A: t_BA = x / v_BA = x / 3 m/s.
Total time: t_tot = t_AB + t_BA = x/5 + x/3 = 8x / 15.
a) Average speed:
v_av = (total distance) / (total time) = 2x / (8x / 15) = 2 × (15/8) = 30/8 = 3.75 m/s.

b) Average velocity:
Over the entire round trip, the person returns to the starting point, so final position equals initial position (r⃗_f = r⃗_i => Δr⃗ = 0).
v⃗_av = Δr⃗ / Δt = 0 / Δt = 0 m/s.

2.1.2. Motion with Constant Acceleration
For motion with constant acceleration:
• The velocity changes at the same rate throughout the motion.`,
    contentAm: `ቅጽበታዊ ማጣደፍ (Instantaneous Acceleration)፡
a⃗ = lim_{Δt→0} (Δv⃗ / Δt) (ቀመር 2.1.6)

የተሰራ ምሳሌ፡
አንድ ሰው ከመነሻ ነጥብ A ወደ B በ5 ሜ/ሰ ቋሚ ስፒድ ተጉዞ፣ ወዲያውኑ ከመስመሩ ሳይወጣ ከ B ወደ A በ3 ሜ/ሰ ተመለሰ።
ሀ. የሙሉ ጉዞው አማካይ ስፒድ ስንት ነው?
ለ. የሙሉ ጉዞው አማካይ ፍጥነት (Velocity) ስንት ነው?

መፍትሔ፡
ርቀቱ x ቢሆን፣ አጠቃላይ ርቀት = 2x።
የወሰደው አጠቃላይ ጊዜ፡ t = x/5 + x/3 = 8x/15።
ሀ. አማካይ ስፒድ = 2x / (8x/15) = 3.75 ሜ/ሰ።
ለ. አማካይ ፍጥነት = ወደ ነበረበት ስለተመለሰ የቦታ ለውጡ ዜሮ ነው (Δr⃗ = 0)፤ ስለዚህ አማካይ ፍጥነቱ 0 ሜ/ሰ ነው።

፪.፩.፪ ቋሚ ማጣደፍ ያለው እንቅስቃሴ (Motion with Constant Acceleration)፡
ፍጥነት በየጊዜው በእኩል መጠን ይለወጣል።`
  },

  // Page 27 - Book page 19
  {
    pdfPageNumber: 27,
    bookPageLabel: '19',
    chapterNumber: 2,
    sectionRef: '2.1.2',
    titleEn: 'Derivation of Constant Acceleration Equations',
    titleAm: 'የቋሚ ማጣደፍ የእንቅስቃሴ ቀመሮች ማረጋገጫ',
    subtopicEn: 'Kinematic Equations (2.1.7 to 2.1.10) in 1D and 2D',
    subtopicAm: 'የ1D እና 2D እንቅስቃሴ ቀመሮች (2.1.7 እስከ 2.1.10)',
    pageType: 'content',
    contentEn: `• Average acceleration over any time interval is equal to the instantaneous acceleration at any instant of time:
a⃗ = (v⃗_f - v⃗_i) / t  (assuming t_i = 0).
Rearranging this equation gives:
v⃗_f = v⃗_i + a⃗ t ---------------------------------------------------- (2.1.7)

For motion with constant acceleration, average velocity can be written as:
v⃗_av = (v⃗_f + v⃗_i) / 2 --------------------------------------------- (2.1.8)

By definition, Δr⃗ = v⃗_av t:
r⃗_f - r⃗_i = [(v⃗_f + v⃗_i) / 2] t, but v⃗_f = v⃗_i + a⃗ t:
r⃗_f - r⃗_i = v⃗_i t + 1/2 a⃗ t² -------------------------------------- (2.1.9)

Again, eliminating t from the equations gives:
v_f² = v_i² + 2 a Δr ------------------------------------------------ (2.1.10)

For 2D Motion:
a⃗ = ax î + ay ĵ,  v⃗_f = v_xf î + v_yf ĵ,  v⃗_i = v_xi î + v_yi ĵ
v⃗_f = v⃗_i + a⃗ t  =>  { v_xf = v_xi + ax t ; v_yf = v_yi + ay t }
r⃗_f - r⃗_i = v⃗_i t + 1/2 a⃗ t²  =>  { Δx = v_xi t + 1/2 ax t² ; Δy = v_yi t + 1/2 ay t² }

Example 1:
A truck covers 40 m in 8.5 s while smoothly slowing down to a final speed of 2.8 m/s. Find:
a) Its original speed
b) Its acceleration`,
    contentAm: `የቋሚ ማጣደፍ ቀመሮች ማረጋገጫ፡
፩. የመጨረሻ ፍጥነት፡ v⃗_f = v⃗_i + a⃗ t (ቀመር 2.1.7)
፪. አማካይ ፍጥነት፡ v⃗_av = (v⃗_f + v⃗_i) / 2 (ቀመር 2.1.8)
፫. የቦታ ለውጥ፡ Δr⃗ = v⃗_i t + 1/2 a⃗ t² (ቀመር 2.1.9)
፬. ጊዜ አልባ ቀመር፡ v_f² = v_i² + 2aΔr (ቀመር 2.1.10)

በ2D ውስጥ አግድምና ቀጥታ ክፍሎች ለየብቻ ይሰላሉ፡
vx_f = vx_i + ax t
vy_f = vy_i + ay t
Δx = vx_i t + 1/2 ax t²
Δy = vy_i t + 1/2 ay t²

ምሳሌ ፩፡
አንድ የጭነት መኪና 40 ሜትር ርቀትን በ8.5 ሰከንድ ውስጥ ተጉዞ የመጨረሻ ፍጥነቱ ወደ 2.8 ሜ/ሰ ዝቅ አለ።
ሀ. የመነሻ ፍጥነቱ ስንት ነበር?
ለ. ማጣደፉ (Acceleration) ስንት ነው?`
  },

  // Page 28 - Book page 20
  {
    pdfPageNumber: 28,
    bookPageLabel: '20',
    chapterNumber: 2,
    sectionRef: '2.1.2',
    titleEn: 'Kinematic Solutions: Truck & Jet Landing',
    titleAm: 'የኪነማቲክስ መፍትሔዎች፡ የጭነት መኪና እና የጄት ማረፊያ ስሌት',
    subtopicEn: 'Stopping Distance & Runway Feasibility Problems',
    subtopicAm: 'የማቆሚያ ርቀት እና የአውሮፕላን ማረፊያ ስሌቶች',
    pageType: 'content',
    contentEn: `Solution to Example 1:
We are given: S = 40 m, t = 8.5 s, v_f = 2.8 m/s.
a) From Δr = [(v_f + v_i)/2] t:
   v_i = (2S / t) - v_f = [2(40 m) / 8.5 s] - 2.8 m/s = 9.41 m/s - 2.8 m/s = 6.6 m/s.
b) Acceleration:
   a = (v_f - v_i) / t = (2.8 m/s - 6.6 m/s) / 8.5 s = -0.447 m/s².

Example 2:
A jet plane lands with a speed of 100 m/s and slows down at a rate of 5 m/s² as it comes to rest.
a) What is the time interval needed by the jet to come to rest?
b) Can this jet land on an airport where the runway is 0.8 km long?

Solution:
Given: v_i = 100 m/s, a = -5 m/s², v_f = 0 m/s.
a) Time needed:
   v_f = v_i + a t  =>  0 = 100 - 5t  =>  t = (0 - 100) / (-5) = 20 s.
b) Stopping distance:
   S = [(v_f + v_i) / 2] t = [(0 + 100 m/s) / 2] × 20 s = 1000 m = 1 km.
Conclusion:
The jet CANNOT land safely! Because the runway (0.8 km = 800 m) is shorter than the required stopping distance (1.0 km = 1000 m).`,
    contentAm: `የምሳሌ ፩ መፍትሔ፡
ሀ. v_i = 2(40)/8.5 - 2.8 = 6.6 ሜ/ሰ።
ለ. a = (2.8 - 6.6) / 8.5 = -0.447 ሜ/ሰ² (እየቀነሰ መሄዱን ያሳያል)።

ምሳሌ ፪፡
አንድ የጄት አውሮፕላን በ100 ሜ/ሰ ፍጥነት አርፎ በ5 ሜ/ሰ² ቅነሳ (Deceleration) ቆመ።
ሀ. ለመቆም ምን ያህል ጊዜ ይወስድበታል?
ለ. ማረፊያው 0.8 ኪ.ሜ (800 ሜትር) ቢሆን በደህና ማረፍ ይችላል?

መፍትሔ፡
ሀ. t = (0 - 100) / (-5) = 20 ሰከንድ።
ለ. የሚያስፈልገው የማቆሚያ ርቀት፡ S = [(0 + 100)/2] × 20 = 1000 ሜትር = 1.0 ኪ.ሜ።
ውሳኔ፡ ጄቱ ማረፍ አይችልም! ምክንያቱም ማረፊያው (800 ሜትር) አውሮፕላኑ ለመቆም ከሚፈልገው ርቀት (1000 ሜትር) ያነሰ በመሆኑ አደጋ ይከሰታል።`
  },

  // Page 29 - Book page 21
  {
    pdfPageNumber: 29,
    bookPageLabel: '21',
    chapterNumber: 2,
    sectionRef: '2.1.3',
    titleEn: 'Free Fall Motion & Gravity Acceleration',
    titleAm: 'ነፃ ውድቀት (Free Fall) እና የስበት ማጣደፍ',
    subtopicEn: '2.1.3. Earth Gravity Acceleration g = 9.8 m/s² and Vertical Throws',
    subtopicAm: '፪.፩.፫ የመሬት ስበት ማጣደፍ (g = 9.8 m/s²) እና ወደላይ የተወረወረ ኳስ ስሌት',
    pageType: 'content',
    contentEn: `Activity:
1. At t = 0 s, a particle moving in the x-y plane with constant acceleration has a velocity of v⃗_i = (3î - 2ĵ) m/s, and is at the origin. At t = 3 s, the particle's velocity is v⃗_f = (9î + 7ĵ) m/s. Find: (a) the acceleration of the particle; (b) its coordinates at t = 3 s.

2.1.3. Free Fall Motion
The motion of an object near the surface of the Earth under the sole control of the force of gravity is called free fall. In the absence of air resistance, all objects fall with constant acceleration, g, toward the center of the Earth. On the surface of the Earth, the standard accepted value is g = 9.8 m/s² (approx. 9.80 m/s²). The acceleration due to gravity varies slightly with latitude, longitude and altitude (it is greater at the poles than at the equator, and greater at sea level than atop high mountains).

Example:
A girl throws a ball upwards, giving it an initial speed u = 15 m/s. Neglect air resistance.
(a) How long does the ball take to return to her hand?
(b) What will be its velocity then?

Solution:
Choose upward direction as positive (+y).
Initial position y_i = 0, final position y = 0, initial velocity u = 15 m/s, acceleration a = -g = -9.8 m/s².
(a) y - y_i = u t - 1/2 g t²
    0 = (15 m/s) t - 1/2 (9.8 m/s²) t²  =>  t (15 - 4.9 t) = 0
    t = 2 × (15 m/s) / 9.8 m/s² = 3.06 s ≈ 3.1 s.`,
    contentAm: `፪.፩.፫ ነፃ ውድቀት (Free Fall Motion)
በመሬት የስበት ኃይል ብቻ ተጽዕኖ ስር ሆኖ የሚደረግ የማንኛውም አካል እንቅስቃሴ ነፃ ውድቀት ይባላል። የአየር ግጭት በሌለበት ሁኔታ ሁሉም አካላት በእኩል የስበት ማጣደፍ (g = 9.8 m/s²) ወደ መሬት ይወድቃሉ። የስበት ማጣደፍ በዋልታዎች ላይ ከምድር ወገብ ይልቅ መጠነኛ ብልጫ አለው።

የተሰራ ምሳሌ፡
አንዲት ልጅ ኳስን በ15 ሜ/ሰ የመነሻ ፍጥነት ወደ ላይ ወረወረች (የአየር ግጭትን ወደ ጎን በመተው)፡
ሀ. ኳሷ ተመልሳ እጇ ላይ እስክትደርስ ስንት ሰከንድ ይፈጅባታል?
ለ. እጇ ላይ ስትደርስ ፍጥነቷ ስንት ይሆናል?

መፍትሔ፡
ወደ ላይ አቅጣጫን እንደ ፖዘቲቭ ብንወስድ፡ a = -g = -9.8 ሜ/ሰ²።
ሀ. y = u t - 1/2 g t² => 0 = 15t - 4.9t² => t = 2(15)/9.8 = 3.1 ሰከንድ።`
  },

  // Page 30 - Book page 22
  {
    pdfPageNumber: 30,
    bookPageLabel: '22',
    chapterNumber: 2,
    sectionRef: '2.1.4',
    titleEn: 'Projectile Motion: Trajectory & Angles',
    titleAm: 'የተወረወረ እቃ ጉዞ (Projectile Motion)፡ የጉዞ መስመርና አንግል',
    subtopicEn: '2.1.4. Definition of Projectile, Point of Projection, and Parabolic Path',
    subtopicAm: '፪.፩.፬ የፕሮጀክትይል ትርጉም፣ የመወርወሪያ ነጥብ እና የፓራቦላ ጉዞ',
    pageType: 'content',
    contentEn: `(b) Solution continued:
v² = u² - 2g(y - y_i) = 15² - 2(9.8)(0) = 225
v = ±15 m/s.
We select the negative sign because the ball is moving downward just before returning to the hand:
v = -15 m/s.

2.1.4. Projectile Motion
A projectile is any object thrown obliquely into space. The object which is given an initial velocity and afterwards follows a path determined solely by the gravitational force acting on it is called a projectile and the motion is called projectile motion. Examples: a stone thrown at an angle, a bomb released from an airplane, a cannonball fired from a gun, a javelin or shot put thrown by an athlete.

Key Terminology:
• Point of Projection (O): The point from which the body is projected.
• Velocity of Projection (u): The velocity with which the body is initially projected.
• Angle of Projection (θ or α): The angle between the direction of projection and the horizontal plane.
• Trajectory (OAB): The path described by the projectile from launch to landing. The trajectory of a projectile is a downward parabola.

Basic Assumptions in Projectile Motion:
1. The free-fall acceleration g is constant over the range of motion and directed vertically downward.
2. The effect of air resistance is negligible.
3. The rotation of the Earth does not affect the motion.`,
    contentAm: `የቀጠለ መፍትሔ (ለ)፡
v² = u² - 2g(0) => v = ±15 ሜ/ሰ። ኳሷ ወደ ታች ስለምትንቀሳቀስ ምልክቱ ነጌቲቭ ይሆናል፡ v = -15 ሜ/ሰ።

፪.፩.፬ የተወረወረ እቃ እንቅስቃሴ (Projectile Motion)
በተወሰነ አንግል ወደ ህዋ የተወረወረ እና በስበት ኃይል ብቻ እየተመራ የሚጓዝ ማንኛውም ቁስ አካል ፕሮጀክትይል (Projectile) ይባላል። ምሳሌ፡ በአትሌት የተወረወረ ጦር፣ ከመድፍ የተተኮሰ ጥይት።

ቁልፍ ፅንሰ-ሀሳቦች፡
• የመወርወሪያ ነጥብ (O)፡ አካሉ የተወረወረበት መነሻ።
• የመወርወሪያ ፍጥነት (u)፡ አካሉ የተወረወረበት የመነሻ ፍጥነት።
• የመወርወሪያ አንግል (θ)፡ የወረወርንበት አቅጣጫ ከአግድም ወለል ጋር የሚሰራው አንግል።
• የጉዞ መስመር (Trajectory, OAB)፡ የተወረወረው እቃ የሚያልፍበት መንገድ ሲሆን ቅርጹም ፓራቦላ (Parabola) ነው።`
  },

  // Page 31 - Book page 23
  {
    pdfPageNumber: 31,
    bookPageLabel: '23',
    chapterNumber: 2,
    sectionRef: '2.1.4',
    titleEn: 'Horizontal & Vertical Kinematics of Projectiles',
    titleAm: 'የተወረወረ እቃ አግድም እና ቀጥታ ኪነማቲክስ',
    subtopicEn: 'Independence of X and Y Motions & Position Equations',
    subtopicAm: 'የአግድምና የቀጥታ እንቅስቃሴዎች ነፃነት እና የቦታ ቀመሮች',
    pageType: 'content',
    contentEn: `Figure: Projectile Motion Diagram
• Horizontal component of velocity along x-axis: u_x = u cosθ, a_x = 0
• Vertical component of velocity along y-axis: u_y = u sinθ, a_y = -g

For projectile motion:
a_y = -g
a_x = 0 (Because no external force acts horizontally, neglecting air resistance).

Horizontal Position after time t:
Δx = u_x t + 1/2 a_x t²
Since a_x = 0 and taking (x_i, y_i) = (0, 0):
x_f = (u cosθ) t ---------------------------------------------------- (2.1.11)

Vertical Position after time t:
Δy = u_y t + 1/2 a_y t²
y_f = (u sinθ) t - 1/2 g t² ----------------------------------------- (2.1.12)

Velocity Components at any time t:
Horizontal velocity:
v_x = u_x + a_x t = u cosθ = constant ------------------------------- (2.1.13)
Vertical velocity:
v_y = u_y + a_y t = u sinθ - g t ----------------------------------- (2.1.14)`,
    contentAm: `የተወረወረ እቃ ኪነማቲክስ ቀመሮች፡
በአግድም አቅጣጫ ምንም ኃይል ስለሌለ ማጣደፉ ዜሮ ነው (ax = 0)፤ ስለዚህ አግድም ፍጥነቱ ምንጊዜም ቋሚ ነው፡
vx = u cosθ (ቀመር 2.1.13)
አግድም የተጓዘው ርቀት፡
xf = (u cosθ) t (ቀመር 2.1.11)

በቀጥታ (Vertical) አቅጣጫ ግን የመሬት ስበት ወደ ታች ስለሚጎትተው (ay = -g)፡
vy = u sinθ - gt (ቀመር 2.1.14)
ቀጥታ ያለው ከፍታ፡
yf = (u sinθ) t - 1/2 gt² (ቀመር 2.1.12)`
  },

  // Page 32 - Book page 24
  {
    pdfPageNumber: 32,
    bookPageLabel: '24',
    chapterNumber: 2,
    sectionRef: '2.1.4',
    titleEn: 'Maximum Height & Horizontal Range',
    titleAm: 'ከፍተኛ ከፍታ እና አግድም ርቀት (Range)',
    subtopicEn: 'Derivation of h_max, Total Time of Flight, and R_max at 45°',
    subtopicAm: 'የከፍተኛ ከፍታ፣ የጠቅላላ የበረራ ጊዜ እና ከፍተኛ ርቀት ቀመሮች',
    pageType: 'content',
    contentEn: `Horizontal Range and Maximum Height
When the projectile reaches maximum height (the peak), v_y = 0:
0 = u sinθ - g t_peak
t_peak = (u sinθ) / g  (time to reach peak height)

At t = t_peak, the maximum height h is:
h = (u sinθ) [(u sinθ) / g] - 1/2 g [(u sinθ) / g]²
h = (u² sin²θ) / (2g) ----------------------------------------------- (2.1.15)

Total Time of Flight (t_tot):
Since the trajectory is symmetric over level ground:
t_tot = 2 t_peak = (2u sinθ) / g ----------------------------------- (2.1.16)

Horizontal Range (R):
R = x(t_tot) = (u cosθ) [(2u sinθ) / g] = [u² (2 sinθ cosθ)] / g
Using the trigonometric identity 2 sinθ cosθ = sin(2θ):
R = (u² sin 2θ) / g ------------------------------------------------- (2.1.17)

The range R is maximum when sin(2θ) = 1 => 2θ = 90° => θ = 45°:
R_max = u² / g

Example 1:
A rocket is fired with an initial velocity of 100 m/s at an angle of 55° above the horizontal. It explodes on a mountainside 12 s after firing. What are the x- and y-coordinates of the rocket relative to its firing point?
Solution:
x(t) = (u cosθ) t = (100 m/s)(cos 55°)(12 s) = (100)(0.5736)(12) = 688.3 m.`,
    contentAm: `ከፍተኛ ከፍታ (Maximum Height - h) እና አግድም ርቀት (Range - R)፡
ከፍተኛው ጫፍ ላይ ሲደርስ የቀጥታ ፍጥነቱ ዜሮ ይሆናል (vy = 0)፤
ወደ ጫፍ ለመድረስ የሚፈጀው ጊዜ፡ t_peak = (u sinθ) / g
ከፍተኛ ከፍታ፡
h = (u² sin²θ) / (2g) (ቀመር 2.1.15)

አጠቃላይ የበረራ ጊዜ፡
t_tot = (2u sinθ) / g (ቀመር 2.1.16)

አግድም ርቀት (Range)፡
R = (u² sin 2θ) / g (ቀመር 2.1.17)
ከፍተኛው አግድም ርቀት የሚገኘው በ45 ዲግሪ አንግል ሲወረወር ነው፡ R_max = u² / g።

ምሳሌ ፩፡
ሮኬት በ100 ሜ/ሰ በ55° አንግል ተተኩሶ ከ12 ሰከንድ በኋላ ተራራ ላይ ፈነዳ።
አግድም ርቀት፡ x = 100 × cos(55°) × 12 = 688.3 ሜትር።`
  },

  // Page 33 - Book page 25
  {
    pdfPageNumber: 33,
    bookPageLabel: '25',
    chapterNumber: 2,
    sectionRef: '2.1.4',
    titleEn: 'Airplane Package Drop & Projectile Activities',
    titleAm: 'ከአውሮፕላን የተጣለ ዕቃ እና የፕሮጀክትይል ተግባራት',
    subtopicEn: 'Vertical Coordinate Solution, Package Drop Kinematics & Exercises',
    subtopicAm: 'የከፍታ ስሌት፣ ከአውሮፕላን የተጣለ እቃ እና የክፍል ውስጥ መልመጃዎች',
    pageType: 'content',
    contentEn: `Example 1 (Continued):
y(t) = (u sinθ) t - 1/2 g t²
y(12) = (100 m/s)(sin 55°)(12 s) - 1/2 (9.8 m/s²)(12 s)²
y(12) = (100)(0.8192)(12) - 4.9(144) = 983 m - 705.6 m = 277.4 m ≈ 277 m.

Example 2:
An airplane is flying horizontally with a speed of 40 m/s at an altitude of 100 m. It drops a package to a stranded party.
a) How long does the package take to reach the ground?
b) What horizontal distance does the package travel before hitting the ground?

Solution:
a) Initial vertical velocity u_y = 0, y = -100 m:
   y = -1/2 g t²  =>  -100 = -4.9 t²  =>  t² = 100 / 4.9 = 20.41  =>  t = 4.52 s.
b) Horizontal distance:
   x = u_x t = (40 m/s)(4.52 s) = 180.8 m ≈ 181 m.

Activities:
1. A ball is thrown with an initial velocity v⃗_0 = (10 î + 15 ĵ) m/s. Find:
   a) The maximum height reached.
   b) The total time of flight.
   c) The horizontal range.
2. An astronaut on a strange planet throws a rock with speed 8 m/s at 30° above horizontal and finds that it lands 14 m away. What is the acceleration due to gravity on this planet?`,
    contentAm: `የምሳሌ ፩ የቀጠለ (ከፍታ)፡
y = (100 sin 55°)(12) - 4.9(144) = 983 - 705.6 = 277 ሜትር።

ምሳሌ ፪፡
አውሮፕላን በ100 ሜትር ከፍታ ላይ በ40 ሜ/ሰ አግድም ፍጥነት እየበረረ ሳለ ዕቃ ወደ መሬት ጣለ፡
ሀ. ዕቃው መሬት ለመንካት ስንት ሰከንድ ይፈጅበታል?
ለ. ዕቃው መሬት ከመድረሱ በፊት በአግድም ምን ያህል ርቀት ይጓዛል?

መፍትሔ፡
ሀ. y = -1/2 gt² => -100 = -4.9t² => t = 4.52 ሰከንድ።
ለ. አግድም ርቀት፡ x = 40 × 4.52 = 181 ሜትር።`
  },

  // Page 34 - Book page 26
  {
    pdfPageNumber: 34,
    bookPageLabel: '26',
    chapterNumber: 2,
    sectionRef: '2.2',
    titleEn: 'Particle Dynamics and Planetary Motion',
    titleAm: 'የቁስ አካላት ዳይናሚክስ እና የፕላኔቶች እንቅስቃሴ',
    subtopicEn: '2.2. The Nature of Forces, Interactions & Equilibrium',
    subtopicAm: '፪.፪ የጉልበት (Force) ምንነት፣ መስተጋብሮች እና ሚዛናዊነት',
    pageType: 'content',
    contentEn: `2.2. Particle Dynamics and Planetary Motion
Self Diagnostic Test:
• What is force?
• What are contact and non-contact forces? Give examples.
• State Newton's three laws of motion.
• Can you state Kepler's laws of planetary motion?

Introduction to Dynamics:
Dynamics is the study of the causes of motion. Why does a thrown stone curve downward? Why does a hockey puck slow down on rough ice? Why do the planets orbit the Sun? The answers lie in the concept of Force.

Force is a push or a pull upon an object resulting from the object's interaction with another object. Whenever there is an interaction between two objects, there is a force upon each of the objects. When the interaction ceases, the two objects no longer experience the force. Forces only exist as a result of an interaction.

Force is a vector quantity—it has both magnitude and direction. The SI unit of force is the newton (N). One newton is the force required to accelerate a mass of 1 kilogram at a rate of 1 meter per second squared (1 N = 1 kg·m/s²).

Net Force (F_net or ΣF⃗):
The vector sum of all external forces acting on a body:
ΣF⃗ = F⃗₁ + F⃗₂ + F⃗₃ + ...`,
    contentAm: `፪.፪ የቁስ አካላት ዳይናሚክስ እና የፕላኔቶች እንቅስቃሴ
ራስን መመዘኛ ጥያቄዎች፡
• ጉልበት (Force) ምንድን ነው?
• የንክኪ እና ንክኪ አልባ ጉልበቶች ልዩነት ምንድን ነው?
• ሦስቱን የኒውተን ህጎች መዘርዘር ትችላለህ?
• የኬፕለርን የፕላኔቶች እንቅስቃሴ ህጎች ታውቃለህ?

ጉልበት (Force)፡
ጉልበት በአንድ ቁስ አካል ላይ የሚደረግ ግፊያ (Push) ወይም ስበት (Pull) ሲሆን ከአካላት መስተጋብር የሚመነጭ ነው። ጉልበት ቬክተር መጠን ሲሆን አሃዱም ኒውተን (N = kg·m/s²) ነው። በአንድ አካል ላይ የሚያርፉ የሁሉም ጉልበቶች የቬክተር ድምር ጥምር ጉልበት (Net Force, ΣF⃗) ይባላል።`
  },

  // Page 35 - Book page 27
  {
    pdfPageNumber: 35,
    bookPageLabel: '27',
    chapterNumber: 2,
    sectionRef: '2.2.1',
    titleEn: 'Force as Interaction & Classification of Forces',
    titleAm: 'ጉልበት እንደ መስተጋብር እና የጉልበቶች ክፍፍል',
    subtopicEn: '2.2.1. Measure of Interaction & 2.2.2. Contact vs Field Forces',
    subtopicAm: '፪.፪.፩ የመስተጋብር መለኪያ እና ፪.፪.፪ የንክኪና የመስክ ጉልበቶች',
    pageType: 'content',
    contentEn: `2.2.1. The Concept of Force as A Measure of Interaction
Force is an agent that produces or tends to produce acceleration in the body on which it acts.
Key characteristics:
1. Force always arises from the interaction of at least two bodies.
2. Force is characterized by its point of application, its magnitude, and its direction.
3. In nature, forces always occur in matched pairs (action and reaction).

2.2.2. Types of Forces
Forces are broadly classified into two categories:

A. Contact Forces:
Forces that result when the two interacting bodies are perceived to be physically contacting each other:
1. Muscular Force: The force exerted using human or animal muscles.
2. Frictional Force: The opposing force that resists the relative motion of two surfaces in contact.
3. Normal Force (F_N or N): The support force exerted upon an object that is in contact with another stable object, always acting perpendicular to the surface of contact.`,
    contentAm: `፪.፪.፩ ጉልበት እንደ መስተጋብር መለኪያ
ጉልበት በአንድ ቁስ አካል ላይ ማጣደፍን የሚያስከትል ወይም ለማስከተል የሚሞክር ወኪል ነው። ምንጊዜም በሁለት አካላት መስተጋብር የሚፈጠር ሲሆን ነጥብ፣ መጠን እና አቅጣጫ አለው።

፪.፪.፪ የጉልበቶች አይነቶች፡
ሀ. የንክኪ ጉልበቶች (Contact Forces)፡
ሁለት አካላት በአካል በሚነካኩበት ጊዜ የሚፈጠሩ ናቸው፡
፩. የጡንቻ ጉልበት (Muscular Force)፡ በሰው ወይም በእንስሳት ጡንቻ አማካኝነት የሚተገበር።
፪. የግጭት ጉልበት (Frictional Force)፡ የሁለት ንክኪ ያላቸውን አካላት እንቅስቃሴ የሚቃወም ጉልበት።
፫. ኖርማል ጉልበት (Normal Force)፡ ከንክኪ ወለሉ ጋር ቀጥተኛ (90°) ሆኖ ወደ ላይ የሚገፋ የድጋፍ ጉልበት።`
  },

  // Page 36 - Book page 28
  {
    pdfPageNumber: 36,
    bookPageLabel: '28',
    chapterNumber: 2,
    sectionRef: '2.2.2',
    titleEn: 'Tension, Spring & Non-Contact Field Forces',
    titleAm: 'የገመድ ስበት፣ የመለጠጥ እና ንክኪ አልባ የመስክ ጉልበቶች',
    subtopicEn: 'Applied Force, Tension, Hooke Spring Force & Fundamental Field Forces',
    subtopicAm: 'የገመድ ውጥረት፣ የሁክ የይዞታ ጉልበት እና ንክኪ አልባ የመስክ ጉልበቶች',
    pageType: 'content',
    contentEn: `4. Applied Force: A force that is applied to an object by a person or another object.
5. Tension Force (T): The force transmitted through a string, rope, cable or wire when it is pulled tight by forces acting from opposite ends.
6. Spring Force (Restoring Force): The force exerted by a compressed or stretched spring upon any object that is attached to it. According to Hooke's Law:
   F_s = -k x
   where k is the spring constant and x is the displacement from equilibrium.
7. Air Resistance Force: A special type of frictional force that acts upon objects as they travel through the air.

B. Non-Contact Forces (Field Forces / Action-at-a-Distance):
Forces that result even when the two interacting bodies are not in physical contact with each other:
1. Gravitational Force: The attractive force that exists between all bodies having mass.
2. Magnetic Force: The force of attraction or repulsion between magnetic poles or moving electric charges.
3. Electrostatic Force: The force between stationary electric charges (governed by Coulomb's law).`,
    contentAm: `፬. የተተገበረ ጉልበት (Applied Force)፡ በውጭ አካል የሚገፋ ወይም የሚጎተት ጉልበት።
፭. የገመድ ውጥረት ጉልበት (Tension, T)፡ በገመድ ወይም በሽቦ ውስጥ የሚተላለፍ የጉልበት ስበት።
፮. የመለጠጥ ጉልበት (Spring Force)፡ በተወጠረ ወይም በተጨመቀ ስፕሪንግ ውስጥ የሚፈጠር የይዞታ ጉልበት (Fs = -kx)።
፯. የአየር ግጭት ጉልበት (Air Resistance)።

ለ. ንክኪ አልባ ጉልበቶች (Non-Contact / Field Forces)፡
አካላቱ ሳይነካኩ በሩቅ የሚሰሩ የመስክ ጉልበቶች ናቸው፡
፩. የስበት ጉልበት (Gravitational Force)፡ በክብደት ያላቸው ማናቸውም አካላት መካከል ያለ የስበት ኃይል።
፪. የማግኔት ጉልበት (Magnetic Force)።
፫. የኤሌክትሮስታቲክ ጉልበት (Electrostatic Force)፡ በቻርጆች መካከል ያለ የመሳሳብ ወይም የመገፋፋት ጉልበት።`
  },

  // Page 37 - Book page 29
  {
    pdfPageNumber: 37,
    bookPageLabel: '29',
    chapterNumber: 2,
    sectionRef: '2.2.3',
    titleEn: "Newton's First Law of Motion: Law of Inertia",
    titleAm: 'የኒውተን የመጀመሪያው የእንቅስቃሴ ህግ፡ የኢነርሺያ ህግ',
    subtopicEn: "2.2.3. Newton's First Law, Equilibrium & State of Rest",
    subtopicAm: '፪.፪.፫ የኒውተን የመጀመሪያ ህግ፣ ሚዛናዊነት እና እረፍት',
    pageType: 'content',
    contentEn: `2.2.3. Newton's Laws of Motion and Applications
Sir Isaac Newton (1642–1727) formulated three fundamental laws of motion that form the cornerstone of classical mechanics.

Newton's First Law of Motion (Law of Inertia):
"An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced external force."

Mathematically:
If ΣF⃗ = 0, then a⃗ = 0  =>  v⃗ = constant (or 0)

Inertia is the natural tendency of an object to resist changes in its state of motion. The mass of an object is a direct measure of its inertia. An object with large mass has greater inertia and requires a larger force to alter its velocity than does an object with smaller mass.`,
    contentAm: `፪.፪.፫ የኒውተን የእንቅስቃሴ ህጎችና አተገባበራቸው
ሰር አይዛክ ኒውተን የክላሲካል ሜካኒክስ መሰረት የሆኑትን ሦስቱን የእንቅስቃሴ ህጎች አዘጋጅቷል።

የኒውተን የመጀመሪያ ህግ (የኢነርሺያ ህግ)፡
"ማንኛውም አካል በውጭ ባልተመጣጠነ ጉልበት ካልተገደደ በስተቀር በነበረበት የእረፍት ሁኔታ ወይም በቀጥታ መስመር በቋሚ ፍጥነት የመጓዝ ሁኔታውን ይቀጥላል።"

በቀመር፡ ΣF⃗ = 0 ከሆነ፣ ማጣደፉ ዜሮ ነው (a⃗ = 0)፤ ፍጥነቱም ቋሚ ይሆናል።
ኢነርሺያ (Inertia) ቁስ አካል የእንቅስቃሴ ለውጥን ለመቃወም ያለው የተፈጥሮ ባህሪ ሲሆን ክብደት (Mass) የኢነርሺያ ቀጥተኛ መለኪያ ነው።`
  },

  // Page 38 - Book page 30
  {
    pdfPageNumber: 38,
    bookPageLabel: '30',
    chapterNumber: 2,
    sectionRef: '2.2.3',
    titleEn: "Newton's Second Law of Motion: F = ma",
    titleAm: 'የኒውተን ሁለተኛው የእንቅስቃሴ ህግ፡ F = ma',
    subtopicEn: 'Force, Mass, and Acceleration Relationship with Worked Example',
    subtopicAm: 'የጉልበት፣ የክብደትና የማጣደፍ ዝምድና ከነ ምሳሌው',
    pageType: 'content',
    contentEn: `Newton's Second Law of Motion:
"The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. The acceleration is in the direction of the net force."

Mathematically:
ΣF⃗ = m a⃗ ----------------------------------------------------------- (2.2.1)

In component form:
ΣFx = m ax
ΣFy = m ay
ΣFz = m az

Example 1:
A 40-kg box is pushed across a frictionless horizontal floor with a horizontal force of 20 N. What is the acceleration of the box?
Solution:
Given: m = 40 kg, ΣFx = 20 N.
From ΣFx = m ax:
ax = ΣFx / m = (20 N) / (40 kg) = 0.5 m/s².`,
    contentAm: `የኒውተን ሁለተኛ ህግ፡
"የአንድ አካል ማጣደፍ (Acceleration) በእርሱ ላይ ካረፈው ጥምር ጉልበት (Net force) ጋር ቀጥተኛ ተመጣጣኝ ሲሆን፣ ከክብደቱ (Mass) ጋር ደግሞ የተገላቢጦሽ ተመጣጣኝ ነው። ማጣደፉም በጥምር ጉልበቱ አቅጣጫ ይሆናል።"

በቀመር፡ ΣF⃗ = m a⃗ (ቀመር 2.2.1)

ምሳሌ ፩፡
40 ኪ.ግ የሚመዝን ሳጥን ግጭት በሌለው ወለል ላይ በ20 ኒውተን አግድም ጉልበት ተገፋ። ሳጥኑ የሚያገኘው ማጣደፍ ስንት ነው?
መፍትሔ፡
ax = ΣFx / m = 20 N / 40 kg = 0.5 ሜ/ሰ²።`
  },

  // Page 39 - Book page 31
  {
    pdfPageNumber: 39,
    bookPageLabel: '31',
    chapterNumber: 2,
    sectionRef: '2.2.3',
    titleEn: "Newton's Third Law of Motion: Action and Reaction",
    titleAm: 'የኒውተን ሦስተኛው የእንቅስቃሴ ህግ፡ ድርጊትና ግብረ-መልስ',
    subtopicEn: 'F_BA = -F_AB, Interaction Pairs, and 2D Force Vector Example',
    subtopicAm: 'የድርጊትና ግብረ-መልስ ጥንዶች እና ባለ 2D የጉልበት ምሳሌ',
    pageType: 'content',
    contentEn: `Example 2:
A 3.0-kg object undergoes an acceleration given by a⃗ = (2.0 î + 5.0 ĵ) m/s². Find the magnitude of the resultant force acting on it.
Solution:
ΣF⃗ = m a⃗ = (3.0 kg)(2.0 î + 5.0 ĵ) = (6.0 î + 15.0 ĵ) N.
Magnitude:
|ΣF⃗| = √(6.0² + 15.0²) = √(36 + 225) = √261 ≈ 16.15 N.

Newton's Third Law of Motion:
"To every action there is always an equal and opposite reaction; or the mutual actions of two bodies upon each other are always equal and directed to contrary parts."

Mathematically:
F⃗_BA = - F⃗_AB
Where F⃗_AB is the force exerted by body A on body B, and F⃗_BA is the force exerted by body B on body A.

Important Characteristics of Action-Reaction Pairs:
1. Action and reaction forces are equal in magnitude and opposite in direction.
2. Action and reaction forces act on DIFFERENT bodies, so they NEVER cancel each other out.
3. They are of the same type of force.`,
    contentAm: `ምሳሌ ፪፡
3.0 ኪ.ግ የሚመዝን አካል a⃗ = (2.0 î + 5.0 ĵ) m/s² ማጣደፍ ተሰጥቶታል፤ በጥምር ጉልበቱ መጠን ስንት ነው?
መፍትሔ፡ ΣF⃗ = 3(2î + 5ĵ) = 6î + 15ĵ ኒውተን።
መጠኑ፡ |ΣF⃗| = √(6² + 15²) = √261 = 16.15 ኒውተን።

የኒውተን ሦስተኛ ህግ (ድርጊት እና ግብረ-መልስ)፡
"ለማንኛውም ድርጊት (Action) ሁልጊዜ እኩል እና ተቃራኒ የሆነ ግብረ-መልስ (Reaction) አለ።"

በቀመር፡ F⃗_BA = - F⃗_AB
ቁልፍ ነጥቦች፡
፩. ድርጊትና ግብረ-መልስ በመጠን እኩል፣ በአቅጣጫ ግን ተቃራኒ ናቸው።
፪. በሁለት የተለያዩ አካላት ላይ ስለሚያርፉ በፍጹም አንዱ ሌላውን አያጠፋም (Never cancel out)።`
  },

  // Page 40 - Book page 32
  {
    pdfPageNumber: 40,
    bookPageLabel: '32',
    chapterNumber: 2,
    sectionRef: '2.2.3',
    titleEn: 'Forces of Friction: Origin & Characteristics',
    titleAm: 'የግጭት ጉልበቶች፡ ምንጭ እና ባህሪያት',
    subtopicEn: 'Nature of Friction, Microscopic Roughness & Proportionality to Normal Force',
    subtopicAm: 'የግጭት ተፈጥሮ፣ ረቂቅ የወለል ሸካራነት እና ከኖርማል ጉልበት ጋር ያለው ተመጣጣኝነት',
    pageType: 'content',
    contentEn: `Activities:
1. Identify the action and reaction forces when a person jumps off a small boat into the water.
2. A horse pulls a cart. If the cart pulls back on the horse with an equal and opposite force, how can the cart move forward?

Forces of Friction:
When an object is in motion on a surface or through a viscous medium, there is resistance to the motion because the object interacts with its surroundings. We call such resistance a force of friction.

Frictional forces arise from microscopic roughness and adhesive bonds between molecules of the two surfaces in contact.
Key characteristics:
1. Friction always acts parallel to the surfaces in contact and in a direction opposing relative motion (or impending motion).
2. Friction is approximately independent of the apparent contact area.
3. The frictional force is directly proportional to the normal force pressing the two surfaces together:
   F_friction ∝ F_N`,
    contentAm: `የክፍል ውስጥ ውይይት፡
፩. አንድ ሰው ከትንሽ ጀልባ ላይ ወደ ውሃ ሲዘል ድርጊት እና ግብረ-መልሱን ለይ።
፪. ፈረስ ጋሪ ይጎትታል፤ ጋሪውም ፈረሱን በተመሳሳይ ጉልበት ወደ ኋላ የሚጎትተው ከሆነ ጋሪው እንዴት ወደ ፊት ሊንቀሳቀስ ቻለ?

የግጭት ጉልበቶች (Forces of Friction)፡
አንድ አካል በሌላ አካል ወለል ላይ ሲንቀሳቀስ እንቅስቃሴውን የሚገታ ተቃራኒ ኃይል ይፈጠራል፤ ይህም የግጭት ጉልበት ይባላል።
ባህሪያት፡
፩. ግጭት ሁልጊዜ ከንክኪ ወለሉ ጋር ትይዩ ሆኖ እንቅስቃሴውን ወደሚቃወም አቅጣጫ ይሰራል፤
፪. የግጭት መጠን ከንክኪ ወለሉ ስፋት ጋር ዝምድና የለውም፤
፫. የግጭት ጉልበት አካላቱን እርስ በእርስ ከሚያጣብቀው ኖርማል ጉልበት (Normal Force) ጋር ቀጥተኛ ተመጣጣኝ ነው።`
  },

  // Page 41 - Book page 33
  {
    pdfPageNumber: 41,
    bookPageLabel: '33',
    chapterNumber: 2,
    sectionRef: '2.2.3',
    titleEn: 'Static vs Kinetic Friction Formulas & Coefficients',
    titleAm: 'የረጊ እና የእንቅስቃሴ ግጭት ቀመሮች እንዲሁም ኮፊሸንቶች',
    subtopicEn: 'f_s <= mu_s N, f_k = mu_k N and Coefficient Determination',
    subtopicAm: 'የረጊ ግጭት፣ የእንቅስቃሴ ግጭት እና የግጭት ኮፊሸንት ስሌት',
    pageType: 'content',
    contentEn: `Friction Formula:
F_f = μ F_N --------------------------------------------------------- (2.2.2)
where μ is the coefficient of friction (dimensionless) and F_N is the normal force.

Two Types of Friction:
1. Static Friction (f_s):
The friction that acts between surfaces that are at rest relative to each other. As an applied force increases, static friction matches it until it reaches its maximum value (impending motion):
f_s ≤ f_s,max = μ_s F_N ---------------------------------------------- (2.2.3)
where μ_s is the coefficient of static friction.

2. Kinetic Friction (f_k):
Once the object begins to slide, the frictional force drops to a lower, nearly constant value called kinetic friction:
f_k = μ_k F_N ------------------------------------------------------- (2.2.4)
where μ_k is the coefficient of kinetic friction. Generally, μ_k < μ_s.

Example:
A 25.0-kg block is at rest on a horizontal surface. A horizontal force of 75.0 N is required to set the block in motion, after which a horizontal force of 60.0 N keeps it moving at constant velocity.
Find: (a) the coefficient of static friction, and (b) the coefficient of kinetic friction.`,
    contentAm: `የግጭት ቀመር፡ F_f = μ F_N (ቀመር 2.2.2)
μ (ሙ) የግጭት ኮፊሸንት (Coefficient of friction) ሲሆን አሃድ የለውም።

ሁለቱ የግጭት አይነቶች፡
፩. የረጊ ግጭት (Static Friction - fs)፡
አካላቱ በእረፍት ላይ እያሉ የሚፈጠር ሲሆን፣ እቃው ለመንቀሳቀስ እስከተቃረበበት የመጨረሻ ነጥብ ድረስ ይጨምራል፡
fs ≤ μs F_N (ቀመር 2.2.3)

፪. የእንቅስቃሴ ግጭት (Kinetic Friction - fk)፡
አካሉ መንሸራተት ከጀመረ በኋላ የሚከሰት ግጭት ሲሆን መጠኑም ከረጊ ግጭት ያነሰ ነው (μk < μs)፡
fk = μk F_N (ቀመር 2.2.4)

ምሳሌ፡
25.0 ኪ.ግ የሚመዝን ሳጥን በአግድም ወለል ላይ አርፏል። ሳጥኑን ማንቀሳቀስ ለመጀመር 75.0 N አግድም ጉልበት ሲያስፈልግ፣ መንቀሳቀስ ከጀመረ በኋላ ግን በቋሚ ፍጥነት ለማስኬድ 60.0 N ጉልበት በቂ ነው፡
ሀ. የረጊ ግጭት ኮፊሸንት (μs) ፈልግ።
ለ. የእንቅስቃሴ ግጭት ኮፊሸንት (μk) ፈልግ።`
  },

  // Page 42 - Book page 34
  {
    pdfPageNumber: 42,
    bookPageLabel: '34',
    chapterNumber: 2,
    sectionRef: '2.2.3',
    titleEn: "Friction Solution & Newton's Laws Problem Strategy",
    titleAm: 'የግጭት መፍትሔ እና የኒውተን ህጎች አፈታት ስትራቴጂ',
    subtopicEn: 'Calculation of mu_s, mu_k & 5-Step Problem Solving Framework',
    subtopicAm: 'የμs እና μk ስሌት እንዲሁም የአምስት ደረጃዎች የችግር አፈታት ስልት',
    pageType: 'content',
    contentEn: `Solution:
Normal force: F_N = m g = (25.0 kg)(9.8 m/s²) = 245 N.
(a) At impending motion, F_app = f_s,max = 75.0 N:
    μ_s = f_s,max / F_N = (75.0 N) / (245 N) = 0.306 ≈ 0.31.
(b) At constant velocity (a = 0), F_app = f_k = 60.0 N:
    μ_k = f_k / F_N = (60.0 N) / (245 N) = 0.245.

Application of Newton's Laws of Motion:
Step-by-Step Problem Solving Strategy:
1. Identify the system: Draw a simple sketch of the situation and identify all bodies.
2. Draw a Free-Body Diagram (FBD): Isolate each body of interest. Draw and label all external forces acting directly on that body (gravity, normal force, friction, tension, applied forces). Do NOT include forces exerted BY the body on other objects.
3. Choose a coordinate system: Pick axes that align with as many forces or the direction of acceleration as possible.
4. Resolve forces into components:
   ΣFx = m ax
   ΣFy = m ay
5. Solve algebraically for the unknown quantities and verify units and physical reasonableness.`,
    contentAm: `የምሳሌው መፍትሔ፡
ኖርማል ጉልበት፡ F_N = mg = 25 × 9.8 = 245 ኒውተን።
ሀ. μs = 75.0 / 245 = 0.31።
ለ. μk = 60.0 / 245 = 0.245።

የኒውተን ህጎችን የመፍቻ 5 ደረጃዎች ስትራቴጂ፡
፩. ስርዓቱን መለየት እና ቀላል ስዕል መሳል፤
፪. የነፃ አካል ስዕል (Free-Body Diagram - FBD) ማዘጋጀት፤ በአካሉ ላይ የሚያርፉትን ሁሉንም ውጫዊ ጉልበቶች ብቻ በግልጽ ማመልከት፤
፫. አመቺ የኮኦርዲኔት አክሲሶችን (X እና Y) መምረጥ፤
፬. ጉልበቶችን ወደ አግድምና ቀጥታ ክፍሎች መበተን (ΣFx = m ax, ΣFy = m ay)፤
፭. ያልታወቁትን መጠኖች በሂሳብ ማግኘትና አሃዶቻቸውን ማረጋገጥ።`
  },

  // Page 43 - Book page 35
  {
    pdfPageNumber: 43,
    bookPageLabel: '35',
    chapterNumber: 2,
    sectionRef: '2.2.3',
    titleEn: 'Equilibrium Example: Suspended Cement Bag',
    titleAm: 'የሚዛናዊነት ምሳሌ፡ የተንጠለጠለ የሲሚንቶ ከረጢት',
    subtopicEn: 'Tension Calculations for 300-N Bag Suspended by Two Angles',
    subtopicAm: 'በ53° እና 37° አንግሎች ለተንጠለጠለ የ300N ከረጢት የገመድ ውጥረት ስሌት',
    pageType: 'content',
    contentEn: `Example 1 (Equilibrium):
A bag of cement weighing 300 N hangs in equilibrium from three ropes as shown. Two of the ropes make angles of θ₁ = 53.0° and θ₂ = 37.0° with the horizontal ceiling. Find the tensions T₁, T₂, and T₃ in the ropes.

Solution:
First, analyze the bag of cement:
ΣFy = T₃ - Fg = 0  =>  T₃ = Fg = 300 N.

Next, analyze the knot where all three ropes meet:
The knot is in static equilibrium:
ΣFx = 0  =>  -T₁ cos(53.0°) + T₂ cos(37.0°) = 0
T₂ cos(37.0°) = T₁ cos(53.0°)
T₂ (0.7986) = T₁ (0.6018)  =>  T₂ = 0.7536 T₁

ΣFy = 0  =>  T₁ sin(53.0°) + T₂ sin(37.0°) - T₃ = 0
T₁ (0.7986) + T₂ (0.6018) = 300 N

Substitute T₂:
T₁ (0.7986) + (0.7536 T₁)(0.6018) = 300 N
T₁ (0.7986 + 0.4535) = 300 N
1.252 T₁ = 300 N  =>  T₁ = 239.6 N ≈ 240 N.
Then:
T₂ = 0.7536 (239.6 N) = 180.5 N ≈ 180 N.`,
    contentAm: `የተሰራ ምሳሌ (የሚዛናዊነት ስሌት)፡
300 ኒውተን የሚመዝን የሲሚንቶ ከረጢት በሦስት ገመዶች ተንጠልጥሎ በሚዛናዊነት ላይ ይገኛል። ሁለቱ ገመዶች ከጣሪያው ጋር 53.0° እና 37.0° አንግል ሰርተዋል፤ በገመዶቹ ውስጥ ያሉትን ውጥረቶች (T1, T2, T3) ፈልግ።

መፍትሔ፡
የከረጢቱ ሚዛን፡ T3 = Fg = 300 ኒውተን።
የገመዶቹ መገናኛ ቋጠሮ ሚዛን፡
ΣFx = -T1 cos(53°) + T2 cos(37°) = 0 => T2 = 0.7536 T1
ΣFy = T1 sin(53°) + T2 sin(37°) - 300 = 0
በመተካት፡ T1 = 240 ኒውተን፣ T2 = 180 ኒውተን ይገኛል።`
  },

  // Page 44 - Book page 36
  {
    pdfPageNumber: 44,
    bookPageLabel: '36',
    chapterNumber: 2,
    sectionRef: '2.2.3',
    titleEn: 'Inclined Plane Dynamics: Frictionless vs Rough',
    titleAm: 'በተዳፋት ወለል ላይ የሚደረግ ጉዞ፡ ግጭት አልባ እና ግጭት ያለው',
    subtopicEn: 'Derivation of Acceleration on Incline with Friction Coefficient mu_k',
    subtopicAm: 'በተዳፋት ላይ የማጣደፍ ቀመር ከእንቅስቃሴ ግጭት ኮፊሸንት ጋር',
    pageType: 'content',
    contentEn: `Example 2 (Inclined Plane):
A block of mass m is placed on a rough plane inclined at an angle θ with the horizontal.
(a) What is the acceleration of the block if the plane is frictionless?
(b) What is the acceleration if the coefficient of kinetic friction is μ_k?

Solution:
Set up coordinate axes: Choose +x directed down along the incline and +y perpendicular to the incline.
Gravity force components:
F_gx = m g sinθ (pulling down along incline)
F_gy = -m g cosθ (perpendicular into incline)

Along y-axis: The block does not lift off or break into the plane (a_y = 0):
ΣFy = F_N - m g cosθ = 0
F_N = m g cosθ

(a) If frictionless (f_k = 0):
ΣFx = m g sinθ = m a_x
a_x = g sinθ

Notice that the acceleration is completely independent of the mass of the block!`,
    contentAm: `ምሳሌ ፪ (የተዳፋት ወለል እንቅስቃሴ)፡
ክብደቱ m የሆነ ሳጥን በθ ዲግሪ በተዘነበለ ተዳፋት ወለል ላይ ተቀምጧል፡
ሀ. ወለሉ ግጭት አልባ ቢሆን ሳጥኑ የሚያገኘው ማጣደፍ ስንት ነው?
ለ. ወለሉ μk የእንቅስቃሴ ግጭት ኮፊሸንት ቢኖረው ማጣደፉ ስንት ይሆናል?

መፍትሔ፡
አክሲሶቹን ከተዳፋቱ ጋር ትይዩ (x) እና ቀጥታ (y) አድርገን እንምረጥ።
የስበት ኃይል ክፍሎች፡ Fgx = mg sinθ (ወደ ታች የሚጎትተው)፣ Fgy = mg cosθ።
ኖርማል ጉልበት፡ F_N = mg cosθ።
ሀ. ግጭት ከሌለ፡ ΣFx = mg sinθ = m a => a = g sinθ።
ይህ ማጣደፍ ከእቃው ክብደት (m) ነፃ መሆኑን ልብ ይሏል!`
  },

  // Page 45 - Book page 37
  {
    pdfPageNumber: 45,
    bookPageLabel: '37',
    chapterNumber: 2,
    sectionRef: '2.2.4',
    titleEn: 'Uniform Circular Motion & Centripetal Acceleration',
    titleAm: 'ወጥ የክብ እንቅስቃሴ እና ማዕከል ሳቢ ማጣደፍ',
    subtopicEn: '2.2.4. Derivation of Centripetal Acceleration a_c = v^2 / r',
    subtopicAm: '፪.፪.፬ የማዕከል ሳቢ ማጣደፍ (ac = v²/r) ቀመር ማረጋገጫ',
    pageType: 'content',
    contentEn: `Solution to Example 2 (b):
When friction is present, the kinetic friction force f_k opposes motion down the plane:
f_k = μ_k F_N = μ_k (m g cosθ)
Along x-axis:
ΣFx = m g sinθ - f_k = m a_x
m g sinθ - μ_k m g cosθ = m a_x
Dividing both sides by mass m:
a_x = g (sinθ - μ_k cosθ)

2.2.4. Uniform Circular Motion
A particle moves in uniform circular motion if it travels in a circle at constant speed. Although the speed is constant, the velocity vector is constantly changing because its direction is continually changing. Thus, an object in uniform circular motion is accelerating!

Centripetal Acceleration (a_c):
The acceleration vector always points toward the center of the circular path and is called centripetal ("center-seeking") acceleration.
Derivation:
Consider a particle moving from point P₁ to P₂ in time Δt over an arc length Δs = v Δt.
The velocity changes from v⃗₁ to v⃗₂ with |v⃗₁| = |v⃗₂| = v.
The triangle formed by position vectors r⃗₁, r⃗₂ and Δr⃗ is similar to the triangle formed by velocity vectors v⃗₁, v⃗₂ and Δv⃗:
|Δv⃗| / v = |Δr⃗| / r  =>  |Δv⃗| = (v / r) |Δr⃗|
Dividing by Δt and taking the limit as Δt → 0:
a_c = lim_{Δt→0} (|Δv⃗| / Δt) = (v / r) lim_{Δt→0} (|Δr⃗| / Δt) = (v / r) v
a_c = v² / r -------------------------------------------------------- (2.3.1)`,
    contentAm: `የምሳሌ ፪ (ለ) መፍትሔ፡
ግጭት ሲኖር፡
ΣFx = mg sinθ - fk = mg sinθ - μk mg cosθ = m ax
ax = g (sinθ - μk cosθ)

፪.፪.፬ ወጥ የክብ እንቅስቃሴ (Uniform Circular Motion)
አንድ አካል በክብ መንገድ ላይ በቋሚ ስፒድ ሲሽከረከር ወጥ የክብ እንቅስቃሴ ያደርጋል። ምንም እንኳን ስፒዱ ቋሚ ቢሆንም፣ የፍጥነቱ አቅጣጫ በየቅጽበቱ ስለሚለወጥ አካሉ ሁልጊዜ ማጣደፍ አለው።

ማዕከል ሳቢ ማጣደፍ (Centripetal Acceleration - ac)፡
ይህ ማጣደፍ ሁልጊዜ ወደ ክብ መንገዱ ማዕከል የሚጠቁም ሲሆን ቀመሩም፡
ac = v² / r (ቀመር 2.3.1)
ነው።`
  }
];
