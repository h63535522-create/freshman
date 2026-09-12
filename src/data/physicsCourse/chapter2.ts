import { Chapter } from '../../types';

export const physicsChapter2: Chapter = {
  id: 1102,
  number: 2,
  title: {
    en: 'Chapter 2: Kinematics and Dynamics of Particles',
    am: 'ምዕራፍ ፪፡ የቁስ አካላት እንቅስቃሴና ዳይናሚክስ'
  },
  universityAuthor: 'National Physics Curriculum Committee (MoSHE 2019)',
  overview: {
    en: 'Thorough coverage of kinematics in 1D and 2D, projectile motion, Newton’s laws of motion, friction, uniform circular motion, universal gravitation, Kepler’s planetary laws, work-energy theorem, power, linear momentum conservation, collisions, and center of mass.',
    am: 'በአንድና በሁለት አውድ ውስጥ የሚደረግ እንቅስቃሴን፣ የተወረወረ እቃ ጉዞ (Projectile)፣ የኒውተን የእንቅስቃሴ ህጎች፣ ፍትጊያ፣ ክብ እንቅስቃሴ፣ ሁለንተናዊ የስበት ህግ፣ የኬፕለር የፕላኔቶች ህጎች፣ የስራ-ኃይል ቴዎረም፣ ሞመንተም፣ ግጭቶች እና የመሃል ስበት ማዕከልን (Center of Mass) የሚዳስስ ምዕራፍ።'
  },
  learningOutcomes: [
    {
      en: 'Apply kinematic equations with constant acceleration to solve 1D and 2D particle problems',
      am: 'በቋሚ ማጣደፍ የሚጓዙ አካላትን የእንቅስቃሴ ቀመሮች በመጠቀም የ1D እና 2D እንቅስቃሴ ችግሮችን መፍታት'
    },
    {
      en: 'Analyze projectile motion by resolving horizontal and vertical components independently',
      am: 'የተወረወረ እቃ እንቅስቃሴን (Projectile) አግድም እና ቀጥታ ክፍሎችን ለይቶ በመተንተን ከፍተኛ ከፍታና ርቀትን ማስላት'
    },
    {
      en: 'Utilize Newton’s three laws of motion and free-body diagrams to calculate net forces and accelerations',
      am: 'የኒውተንን ሦስቱን የእንቅስቃሴ ህጎች እና የሃይል ስዕሎችን (Free-body diagrams) በመጠቀም አጠቃላይ ጉልበትን ማስላት'
    },
    {
      en: 'Explain Kepler’s three laws of planetary motion and Newton’s law of universal gravitation',
      am: 'የኬፕለር ሦስቱን የፕላኔቶች እንቅስቃሴ ህጎች እና የኒውተንን ሁለንተናዊ የስበት ህግ ማብራራት'
    },
    {
      en: 'Differentiate between elastic and inelastic collisions using conservation of momentum and mechanical energy',
      am: 'የሞመንተም እና የኃይል ህልውና ህግን በመጠቀም የመለጠጥ (Elastic) እና ያለመለጠጥ (Inelastic) ግጭቶችን መተንተን'
    }
  ],
  sections: [
    {
      id: 'phys-2-1',
      number: '2.1',
      title: {
        en: '2.1 Kinematics in One and Two Dimensions & Projectile Motion',
        am: '፪.፩ በአንድና በሁለት አውድ ውስጥ እንቅስቃሴ እና የተወረወረ እቃ ጉዞ'
      },
      paragraphs: [
        {
          id: 'phys-p2-1',
          en: 'Kinematics is the branch of classical mechanics describing the motion of objects without considering the forces causing it. Key quantities include Position (location relative to a reference frame), Displacement (vector change in position Δr⃗ = r⃗_f - r⃗_i), Distance (scalar path length traveled), Average Velocity (v⃗_av = Δr⃗ / Δt), and Instantaneous Velocity (v⃗ = lim_{Δt→0} Δr⃗ / Δt). Instantaneous speed is the scalar magnitude of instantaneous velocity.',
          am: 'ኪነማቲክስ (Kinematics) የእንቅስቃሴ አምጪ ምክንያቶችን (ጉልበቶችን) ከግምት ሳያስገባ የአካላትን ጉዞ ብቻ የሚገልጽ የሜካኒክስ ዘርፍ ነው። ቁልፍ መጠኖች፡ ቦታ (Position)፣ ቦታ መቀየር (Displacement - የቦታ ለውጥ ቬክተር Δr⃗ = r⃗_f - r⃗_i)፣ ርቀት (Distance - የተጓዘበት አጠቃላይ የመንገድ ርዝመት ስኬላር)፣ አማካይ ፍጥነት (Average Velocity = Δr⃗ / Δt)፣ እና ቅጽበታዊ ፍጥነት (Instantaneous Velocity = lim_{Δt→0} Δr⃗ / Δt) ናቸው። ቅጽበታዊ ስፒድ የቅጽበታዊ ፍጥነት ቬክተር ስኬላር መጠን ነው።',
          subheading: {
            en: 'Foundations of Motion: Position, Velocity & Speed',
            am: 'የእንቅስቃሴ መሰረቶች፡ ቦታ፣ ፍጥነት እና ስፒድ'
          },
          highlightTerms: [
            { en: 'Kinematics', am: 'ኪነማቲክስ' },
            { en: 'Displacement', am: 'ቦታ መቀየር' },
            { en: 'Velocity', am: 'ፍጥነት (Velocity)' }
          ]
        },
        {
          id: 'phys-p2-2',
          en: 'For motion under constant acceleration a⃗, the velocity changes at a uniform rate. The four standard kinematic equations are: (1) v_f = v_i + at; (2) v_av = (v_i + v_f) / 2; (3) Δx = v_i t + 1/2 a t²; (4) v_f² = v_i² + 2a Δx. In free fall near Earth’s surface, neglecting atmospheric drag, all bodies experience downward gravitational acceleration g = 9.8 m/s² regardless of their mass.',
          am: 'አንድ አካል በቋሚ ማጣደፍ (Constant Acceleration) ሲጓዝ ፍጥነቱ በእኩል ፍጥነት ይለወጣል። አራቱ መሰረታዊ የእንቅስቃሴ ቀመሮች፡ (1) v_f = v_i + at፤ (2) v_av = (v_i + v_f) / 2፤ (3) Δx = v_i t + 1/2 a t²፤ (4) v_f² = v_i² + 2a Δx ናቸው። በመሬት ስበት ስር ያለ ምንም የአየር ግጭት የሚወድቁ አካላት (Free Fall) መጠናቸው ምንም ይሁን ምን በቋሚ g = 9.8 m/s² ማጣደፍ ወደ ታች ይወድቃሉ።',
          subheading: {
            en: 'Constant Acceleration and Free Fall Equations',
            am: 'የቋሚ ማጣደፍ እና የነፃ ውድቀት ቀመሮች'
          },
          highlightTerms: [
            { en: 'Acceleration', am: 'ማጣደፍ (Acceleration)' },
            { en: 'Free Fall', am: 'ነፃ ውድቀት' }
          ]
        },
        {
          id: 'phys-p2-3',
          en: 'Projectile motion is two-dimensional motion in a curved vertical plane under constant downward gravitational acceleration (a_y = -g) with zero horizontal acceleration (a_x = 0). Launched with initial velocity u at elevation angle θ: horizontal velocity remains constant (u_x = u cos θ, x(t) = u cos θ · t), while vertical velocity varies linearly (u_y = u sin θ - gt, y(t) = u sin θ · t - 1/2 gt²). The maximum peak height is h = (u² sin² θ) / (2g), time of flight is t_tot = (2u sin θ) / g, and horizontal range is R = (u² sin 2θ) / g, reaching maximum at θ = 45°.',
          am: 'የተወረወረ እቃ ጉዞ (Projectile Motion) በአግድም አቅጣጫ ምንም ማጣደፍ በሌለበት (a_x = 0) እና በቋሚ የመሬት ስበት (a_y = -g) ስር በፓራቦላ ኩርባ የሚደረግ ባለሁለት አውድ እንቅስቃሴ ነው። አካሉ በ u ፍጥነትና በ θ አንግል ሲወረወር፡ አግድም ፍጥነቱ ሁልጊዜ ቋሚ ነው (u_x = u cos θ)፤ ቀጥታ ፍጥነቱ ደግሞ ይቀያየራል (u_y = u sin θ - gt)። ከፍተኛው ከፍታ h = (u² sin² θ) / (2g)፣ አጠቃላይ የአየር ላይ ቆይታ ጊዜ t_tot = (2u sin θ) / g ሲሆን፣ አግድም ርቀቱ R = (u² sin 2θ) / g ሆኖ ከፍተኛ የሚሆነው በ 45 ዲግሪ ሲወረወር ነው።',
          subheading: {
            en: 'Projectile Trajectory, Range and Max Height',
            am: 'የፕሮጀክትይል አቅጣጫ፣ ርቀት እና ከፍተኛ ከፍታ'
          },
          highlightTerms: [
            { en: 'Projectile Motion', am: 'የተወረወረ እቃ እንቅስቃሴ' },
            { en: 'Horizontal Range', am: 'አግድም ርቀት' },
            { en: 'Trajectory', am: 'የጉዞ መስመር (Trajectory)' }
          ]
        }
      ]
    },
    {
      id: 'phys-2-2',
      number: '2.2',
      title: {
        en: '2.2 Particle Dynamics, Forces and Planetary Motion',
        am: '፪.፪ የቁስ አካላት ዳይናሚክስ፣ ጉልበቶች እና የፕላኔቶች እንቅስቃሴ'
      },
      paragraphs: [
        {
          id: 'phys-p2-4',
          en: 'Dynamics investigates the causes of motion: Force is any interaction that changes or tends to change the state of rest or motion of a body. Sir Isaac Newton formulated the three fundamental laws of motion (1687): (1) First Law (Law of Inertia): an object maintains its state of rest or uniform motion in a straight line unless acted upon by a non-zero net external force; (2) Second Law: the net acceleration is directly proportional to net force and inversely proportional to mass: ∑F⃗ = m a⃗; (3) Third Law (Action-Reaction): for every action force, there is an equal in magnitude and opposite in direction reaction force (F⃗_AB = -F⃗_BA) acting on different interacting bodies.',
          am: 'ዳይናሚክስ የእንቅስቃሴ መንስኤዎችን ያጠናል፡ ጉልበት (Force) የአንድን አካል የእረፍት ወይም የእንቅስቃሴ ሁኔታ የሚቀይር ወይም ለመቀየር የሚሞክር መስተጋብር ነው። ሰር አይዛክ ኒውተን በ1687 ሦስቱን መሰረታዊ ህጎች አወጣ፡ (1) አንደኛ ህግ (የኢነርሺያ ህግ)፡ ማንኛውም አካል ውጫዊ ያልተጣራ ጉልበት እስካልተጫነው ድረስ ባለበት የእረፍት ወይም የቀጥታ መስመር እንቅስቃሴ ይቀጥላል፤ (2) ሁለተኛ ህግ፡ የአንድ አካል ማጣደፍ በቀጥታ ከተጫነው የተጣራ ጉልበት ጋር የሚመጣጠንና ከክብደቱ ጋር የተገላቢጦሽ ነው (∑F⃗ = m a⃗)፤ (3) ሦስተኛ ህግ (ድርጊትና ምላሽ)፡ ለማንኛውም ድርጊት ጉልበት እኩል መጠን ያለውና በተቃራኒ አቅጣጫ የሚገፋ የምላሽ ጉልበት አለ (F⃗_AB = -F⃗_BA)።',
          subheading: {
            en: 'Newton’s Three Laws of Motion',
            am: 'የኒውተን ሦስቱ የእንቅስቃሴ ህጎች'
          },
          highlightTerms: [
            { en: 'Newton’s Laws', am: 'የኒውተን ህጎች' },
            { en: 'Inertia', am: 'ኢነርሺያ (Inertia)' },
            { en: 'Action-Reaction', am: 'ድርጊትና ምላሽ' }
          ]
        },
        {
          id: 'phys-p2-5',
          en: 'Frictional force is the tangential contact force resisting relative sliding motion between surfaces, directly proportional to normal force (F_fric ∝ F_N). It is divided into: Static Friction (f_s ≤ μ_s F_N), preventing motion until a threshold force is surpassed; and Kinetic Friction (f_k = μ_k F_N), resisting moving bodies, where typically μ_k < μ_s. Friction coefficients are independent of contact area.',
          am: 'የፍትጊያ ጉልበት (Frictional Force) በሁለት ተነካኪ ገጾች መሃል የሚፈጠርና አንጻራዊ መንሸራተትን የሚቃወም አግድም ጉልበት ሲሆን ከቀጤ-ነክ ጉልበት (Normal Force) ጋር በቀጥታ ይመጣጠናል (F_f = μ F_N)። በሁለት ይከፈላል፡ ስታቲክ ፍትጊያ (Static Friction፡ f_s ≤ μ_s F_N - እቃው መንቀሳቀስ ከመጀመሩ በፊት የሚቃወም) እና ኪነቲክ ፍትጊያ (Kinetic Friction፡ f_k = μ_k F_N - እቃው እየተንሸራተተ ባለበት ወቅት የሚቃወም) ሲሆን አብዛኛውን ጊዜ μ_k < μ_s ነው። የፍትጊያ ውድር የገጹን ስፋት አይመለከትም።',
          subheading: {
            en: 'Static and Kinetic Friction Forces',
            am: 'የስታቲክ እና ኪነቲክ ፍትጊያ ጉልበቶች'
          },
          highlightTerms: [
            { en: 'Static Friction', am: 'ስታቲክ ፍትጊያ' },
            { en: 'Kinetic Friction', am: 'ኪነቲክ ፍትጊያ' },
            { en: 'Coefficient of Friction', am: 'የፍትጊያ ውድር' }
          ]
        },
        {
          id: 'phys-p2-6',
          en: 'Uniform circular motion occurs when an object traverses a circular trajectory of radius r at constant speed v. Although speed is constant, continuous direction changes induce inward centripetal acceleration: a_c = v² / r directed toward the center. Newton’s Universal Law of Gravitation states every mass attracts every other mass: F_g = G (m₁ m₂) / r², where G = 6.674 × 10⁻¹¹ N·m²/kg². At Earth’s surface, g = G M_E / R_E² ≈ 9.8 m/s².',
          am: 'አንድ አካል r ራዲየስ ባለው ክብ መንገድ ላይ በቋሚ v ስፒድ ሲሽከረከር ዩኒፎርም ክብ እንቅስቃሴ ይባላል። ስፒዱ ቋሚ ቢሆንም የአቅጣጫው መቀያየር ወደ መሃል የሚያመለክት የማዕከል ሳቢ ማጣደፍ (Centripetal Acceleration) ይፈጥራል፡ a_c = v² / r። የኒውተን ሁለንተናዊ የስበት ህግ በማንኛውም ሁለት ቁሶች መሃል የሚፈጠረው ስበት ከክብደታቸው ብዜት ጋር በቀጥታ ከርቀታቸው ስኩዌር ጋር ደግሞ በተገላቢጦሽ ይመጣጠናል ይላል፡ F_g = G (m₁ m₂) / r² (G = 6.674 × 10⁻¹¹ N·m²/kg²)።',
          subheading: {
            en: 'Circular Motion and Universal Gravitation',
            am: 'ክብ እንቅስቃሴ እና ሁለንተናዊ የስበት ህግ'
          },
          highlightTerms: [
            { en: 'Centripetal Acceleration', am: 'ማዕከል ሳቢ ማጣደፍ' },
            { en: 'Universal Gravitation', am: 'ሁለንተናዊ የስበት ህግ' }
          ]
        },
        {
          id: 'phys-p2-7',
          en: 'Johannes Kepler discovered three planetary laws: (1) Law of Orbits: planets orbit the Sun in elliptical paths with the Sun at one focus; (2) Law of Areas: the radius vector sweeps out equal areas in equal intervals of time (planets move fastest at perihelion closest to the sun); (3) Law of Harmony: the square of the orbital period T² is proportional to the cube of the semi-major axis R³ (T² / R³ = constant for all planets in a system). Weightlessness in orbiting astronauts is not zero gravity, but continuous free-fall state where all contact reaction forces vanish.',
          am: 'ዮሃንስ ኬፕለር ሦስቱን የፕላኔቶች እንቅስቃሴ ህጎች አገኘ፡ (1) የምህዋር ህግ (Law of Orbits)፡ ሁሉም ፕላኔቶች ፀሐይን በአንድ የትኩረት ነጥብ (Focus) ባስቀመጠ ሞላላ ምህዋር (Ellipse) ይዞራሉ፤ (2) የስፋት ህግ (Law of Areas)፡ ፕላኔቷን ከፀሐይ ጋር የሚያገናኘው መስመር በእኩል ጊዜ ውስጥ እኩል ስፋትን ይሸፍናል (ወደ ፀሐይ ሲቀርቡ በፍጥነት ይጓዛሉ)፤ (3) የስምምነት ህግ (Law of Harmony)፡ የዙረት ጊዜ ስኩዌር ከምህዋሩ አማካይ ርቀት ኪዩብ ጋር ይመጣጠናል (T² / R³ = ቋሚ)። በጠፈርተኞች የሚሰማው ክብደት አልባነት (Weightlessness) የስበት ኃይል አለመኖር ሳይሆን ቀጣይነት ያለው የነፃ ውድቀት ውጤት ነው።',
          subheading: {
            en: 'Kepler’s Three Laws and Weightlessness',
            am: 'የኬፕለር ሦስቱ ህጎች እና ክብደት አልባነት'
          },
          highlightTerms: [
            { en: 'Kepler’s Laws', am: 'የኬፕለር ህጎች' },
            { en: 'Elliptical Orbit', am: 'ሞላላ ምህዋር' },
            { en: 'Weightlessness', am: 'ክብደት አልባነት' }
          ]
        }
      ]
    },
    {
      id: 'phys-2-3',
      number: '2.3',
      title: {
        en: '2.3 Work, Energy, Momentum and Collisions',
        am: '፪.፫ ስራ፣ ኃይል፣ ሞመንተም እና ግጭቶች'
      },
      paragraphs: [
        {
          id: 'phys-p2-8',
          en: 'Work (W) is scalar energy transfer when a force displaces an object: W = F⃗ · Δr⃗ = F Δr cos θ, measured in Joules (1 J = 1 N·m). Kinetic Energy is energy of motion: KE = 1/2 m v². Potential Energy is stored configuration energy: for gravity near Earth, PE = m g Δy; for ideal springs obeying Hooke’s law (F = -kx), elastic potential energy is PE_s = 1/2 k x². The Work-Energy Theorem states that net work done on a particle equals the change in its kinetic energy: W_net = ΔKE. In isolated conservative systems, total mechanical energy is conserved: E = KE + PE = constant.',
          am: 'ስራ (Work) ማለት ጉልበት አንድን አካል ሲያንቀሳቅስ የሚደረግ የኃይል ልውውጥ ነው፡ W = F⃗ · Δr⃗ = F Δr cos θ፤ አሃዱ ጁል (J) ነው። የእንቅስቃሴ ኃይል (Kinetic Energy)፡ KE = 1/2 m v² ነው። የተጠራቀመ ኃይል (Potential Energy)፡ ለስበት PE = m g Δy ሲሆን ለስፕሪንግ PE_s = 1/2 k x² ነው። የስራ-ኃይል ቴዎረም (Work-Energy Theorem) የተጣራ ስራ ከተለወጠው የእንቅስቃሴ ኃይል ጋር እኩል መሆኑን ያረጋግጣል፡ W_net = ΔKE። በተዘጋ ስርአት ውስጥ አጠቃላይ ሜካኒካል ኃይል ቋሚ ሆኖ ይጠበቃል፡ KE + PE = ቋሚ።',
          subheading: {
            en: 'Work, Kinetic & Potential Energy and Conservation',
            am: 'ስራ፣ የእንቅስቃሴና የተጠራቀመ ኃይል እና ህልውና'
          },
          highlightTerms: [
            { en: 'Work-Energy Theorem', am: 'የስራ-ኃይል ቴዎረም' },
            { en: 'Mechanical Energy', am: 'ሜካኒካል ኃይል' }
          ]
        },
        {
          id: 'phys-p2-9',
          en: 'Power is the time rate of energy transfer: Average Power P_av = W / Δt; Instantaneous Power P = F⃗ · v⃗, measured in Watts (1 W = 1 J/s, 1 horsepower = 746 W). Linear Momentum is p⃗ = m v⃗ (kg·m/s). Newton’s second law reformulated states net force equals time rate of change of momentum: F⃗_net = Δp⃗ / Δt. Impulse of a force is I⃗ = F⃗_net Δt = Δp⃗. In any isolated system with no external net force, total linear momentum is conserved: p⃗_total = constant.',
          am: 'ፓወር (Power) ማለት በጊዜ ሂደት የሚከናወን የስራ ፍጥነት ነው፡ P = W / Δt = F⃗ · v⃗ ሲሆን አሃዱ ዋት (Watt) ነው (1 hp = 746 W)። ሊኒየር ሞመንተም የክብደትና የፍጥነት ብዜት ነው፡ p⃗ = m v⃗ (kg·m/s)። የኒውተን ሁለተኛ ህግ ሲገለበጥ የተጣራ ጉልበት ከሞመንተም ለውጥ ጋር እኩል ነው፡ F⃗_net = Δp⃗ / Δt። ኢምፓልስ (Impulse)፡ I⃗ = F⃗ Δt = Δp⃗ ነው። ከውጭ የሚጫን ጉልበት በሌለበት ማንኛውም የተዘጋ ስርአት ውስጥ አጠቃላይ ሞመንተም ሁልጊዜ ቋሚ ነው፡ p⃗_total = ቋሚ።',
          subheading: {
            en: 'Power, Momentum and Impulse',
            am: 'ፓወር፣ ሞመንተም እና ኢምፓልስ'
          },
          highlightTerms: [
            { en: 'Power', am: 'ፓወር (Power)' },
            { en: 'Linear Momentum', am: 'ሊኒየር ሞመንተም' },
            { en: 'Impulse', am: 'ኢምፓልስ (Impulse)' }
          ]
        },
        {
          id: 'phys-p2-10',
          en: 'Collisions are categorized into three types: (1) Elastic Collision: both total momentum and total kinetic energy are conserved (e.g. subatomic scattering, steel spheres); (2) Inelastic Collision: total momentum is conserved, but kinetic energy is partially converted to heat or deformation; (3) Perfectly Inelastic Collision: colliding bodies stick together and move with single common velocity v_f = (m₁ v₁_i + m₂ v₂_i) / (m₁ + m₂). The Center of Mass (CM) is the average location of mass distribution: x_CM = (∑ m_i x_i) / M.',
          am: 'ግጭቶች በሦስት ይከፈላሉ፡ (1) የመለጠጥ ግጭት (Elastic Collision)፡ ሁለቱም ሞመንተም እና እንቅስቃሴ ኃይል (KE) ቋሚ ሆነው የሚጠበቁበት፤ (2) የመለጠጥ የጎደለው ግጭት (Inelastic Collision)፡ ሞመንተም ቋሚ ሆኖ የተወሰነው የኪነቲክ ኃይል ወደ ሙቀት ወይም ቅርጽ ለውጥ የሚቀየርበት፤ (3) ፍፁም ያልተለጠጠ ግጭት (Perfectly Inelastic)፡ አካላቱ ከተጋጩ በኋላ ተጣብቀው በጋራ ፍጥነት v_f = (m₁ v₁_i + m₂ v₂_i) / (m₁ + m₂) የሚጓዙበት ነው። የመሃል ስበት ማዕከል (Center of Mass) አጠቃላይ ክብደት የተከማቸበት ነጥብ ሆኖ x_CM = (∑ m_i x_i) / M ይሰላል።',
          subheading: {
            en: 'Collisions and Center of Mass',
            am: 'የግጭት አይነቶች እና የመሃል ስበት ማዕከል'
          },
          highlightTerms: [
            { en: 'Elastic Collision', am: 'የመለጠጥ ግጭት' },
            { en: 'Inelastic Collision', am: 'ያልተለጠጠ ግጭት' },
            { en: 'Center of Mass', am: 'የመሃል ስበት ማዕከል' }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Projectile Motion',
      termAm: 'የተወረወረ እቃ እንቅስቃሴ',
      defEn: 'Two-dimensional motion under constant gravitational acceleration forming a downward parabolic trajectory.',
      defAm: 'በቋሚ የመሬት ስበት ስር በፓራቦላ ኩርባ የሚጓዝ ባለሁለት አውድ እንቅስቃሴ።'
    },
    {
      termEn: 'Newton’s Second Law',
      termAm: 'የኒውተን ሁለተኛ ህግ',
      defEn: 'The acceleration of an object is directly proportional to the net force and inversely proportional to its mass (∑F⃗ = ma⃗).',
      defAm: 'የአንድ አካል ማጣደፍ በቀጥታ ከተጫነው የተጣራ ጉልበት ጋር የሚመጣጠንና ከክብደቱ ጋር የተገላቢጦሽ ነው (∑F⃗ = ma⃗)።'
    },
    {
      termEn: 'Work-Energy Theorem',
      termAm: 'የስራ-ኃይል ቴዎረም',
      defEn: 'The net work done by external forces on a particle equals the change in its kinetic energy (W_net = ΔKE).',
      defAm: 'በአንድ አካል ላይ የተከናወነ የተጣራ ስራ ከተለወጠው የእንቅስቃሴ ኃይል ጋር እኩል ነው።'
    },
    {
      termEn: 'Kepler’s Third Law',
      termAm: 'የኬፕለር ሦስተኛ ህግ',
      defEn: 'The square of a planet’s orbital period is proportional to the cube of its average distance from the Sun (T² / R³ = constant).',
      defAm: 'የፕላኔቷ ምህዋራዊ ዙረት ጊዜ ስኩዌር ከፀሐይ አማካይ ርቀቷ ኪዩብ ጋር ይመጣጠናል (T² / R³ = ቋሚ)።'
    },
    {
      termEn: 'Conservation of Linear Momentum',
      termAm: 'የሊኒየር ሞመንተም ህልውና',
      defEn: 'The total linear momentum of an isolated system remains constant in time if no external net force acts upon it.',
      defAm: 'ውጫዊ የተጣራ ጉልበት እስካልተጫነው ድረስ የተዘጋ ስርአት አጠቃላይ ሞመንተም ቋሚ ሆኖ ይቆያል።'
    }
  ],
  summaries: [
    {
      id: 'sum-2-1',
      title: {
        en: 'Kinematic Equations and Projectile Flight',
        am: 'የእንቅስቃሴ ቀመሮች እና የተወረወረ እቃ ጉዞ'
      },
      bullets: [
        {
          en: '1D motion with constant acceleration: v_f = v_i + at, Δx = v_i t + 1/2 a t², v_f² = v_i² + 2aΔx.',
          am: 'የቋሚ ማጣደፍ ቀመሮች ፍጥነትን፣ ቦታ መቀየርንና ጊዜን በቀጥታ ያገናኛሉ።'
        },
        {
          en: 'Projectile components: a_x = 0, a_y = -g; Range R = (u² sin 2θ)/g is maximum at 45° launch.',
          am: 'በፕሮጀክትይል አግድም ፍጥነት ቋሚ ሲሆን ከፍተኛ ርቀት የሚገኘው በ 45 ዲግሪ ሲወረወር ነው።'
        }
      ]
    },
    {
      id: 'sum-2-2',
      title: {
        en: 'Forces, Friction and Keplerian Orbits',
        am: 'ጉልበቶች፣ ፍትጊያ እና የኬፕለር ምህዋሮች'
      },
      bullets: [
        {
          en: 'Newton’s second law ∑F⃗ = ma⃗ governs all particle accelerations; static friction f_s ≤ μ_s F_N prevents sliding.',
          am: 'የኒውተን ሁለተኛ ህግ ማጣደፍን ከጉልበት ጋር ያዛምዳል፤ ስታቲክ ፍትጊያ ደግሞ መንሸራተትን ይከላከላል።'
        },
        {
          en: 'Uniform circular motion requires centripetal acceleration a_c = v²/r directed toward the rotation center.',
          am: 'በክብ እንቅስቃሴ ወቅት ወደ መሃል የሚያመለክት የማዕከል ሳቢ ማጣደፍ a_c = v²/r ይኖራል።'
        },
        {
          en: 'Kepler’s laws describe elliptical orbits, equal area sweeps in equal time, and T²/R³ constant ratio.',
          am: 'የኬፕለር ህጎች የፕላኔቶችን ሞላላ ምህዋር፣ የእኩል ስፋት ጉዞ እና የ T²/R³ ቋሚ ጥምርታን ያረጋግጣሉ።'
        }
      ]
    },
    {
      id: 'sum-2-3',
      title: {
        en: 'Work, Energy and Conservation Laws',
        am: 'ስራ፣ ኃይል እና የህልውና ህጎች'
      },
      bullets: [
        {
          en: 'Work W = F⃗ · Δr⃗; Work-Energy Theorem: W_net = ΔKE; Mechanical energy KE + PE is conserved in isolated systems.',
          am: 'የተጣራ ስራ ከኪነቲክ ኃይል ለውጥ ጋር እኩል ሲሆን ሜካኒካል ኃይል ሁልጊዜ ይጠበቃል።'
        },
        {
          en: 'In collisions, momentum is always conserved; kinetic energy is conserved strictly in elastic collisions.',
          am: 'በግጭቶች ውስጥ ሞመንተም ሁልጊዜ ቋሚ ሲሆን ኪነቲክ ኃይል ግን በመለጠጥ ግጭት ብቻ ይጠበቃል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-2-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'Why do orbiting astronauts experience weightlessness despite strong gravitational force at orbit altitudes?',
        am: 'በምህዋር ላይ ያሉ ጠፈርተኞች በከፍተኛ የስበት ኃይል ውስጥ ሆነው ክብደት አልባነት የሚሰማቸው ለምንድን ነው?'
      },
      answer: {
        en: 'Weightlessness is not the absence of gravity; Earth’s gravity at space station orbit is still ~90% of surface gravity. Astronauts feel weightless because the spacecraft and everything inside are in continuous free fall toward Earth while maintaining high tangential velocity, eliminating all normal contact reaction forces.',
        am: 'ክብደት አልባነት የስበት ኃይል ማጣት አይደለም፤ በጠፈር ጣቢያው ከፍታ ላይ የመሬት ስበት ከመሬት ገጽ 90% ያህል ነው። ጠፈርተኞቹ ክብደት አልባ የሚሆኑት መንኮራኩሯና በውስቷ ያሉት ነገሮች በሙሉ በከፍተኛ ፍጥነት ወደ መሬት ቀጣይ የነፃ ውድቀት (Free Fall) እያደረጉ በመሆኑ እርስ በእርስ የሚደጋገፉበት የቀጤ-ነክ ምላሽ ጉልበት ስለሚጠፋ ነው።'
      },
      explanation: {
        en: 'Apparent weight equals the normal contact force from a scale or floor; in continuous orbital free-fall, that contact force is zero.',
        am: 'የሚሰማን ክብደት ከወለሉ የሚገፋው ቀጤ-ነክ ምላሽ ነው፤ በነፃ ውድቀት ወቅት ይህ ምላሽ ሙሉ በሙሉ ዜሮ ይሆናል።'
      }
    },
    {
      id: 'qna-2-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'Under what launch angle does a projectile achieve maximum horizontal range over level ground?',
        am: 'በተስተካከለ መሬት ላይ የተወረወረ እቃ ከፍተኛውን አግድም ርቀት የሚያገኘው በስንት ዲግሪ ሲወረወር ነው?'
      },
      answer: {
        en: 'The horizontal range formula is R = (u² sin 2θ) / g. Since the maximum value of sin 2θ is 1 (when 2θ = 90°), the optimum angle is θ = 45°.',
        am: 'የአግድም ርቀት ቀመር R = (u² sin 2θ) / g ነው። የ sin 2θ ከፍተኛ እሴት 1 የሚሆነው 2θ = 90° ሲሆን በመሆኑም ምርጡ የወርዋሪ አንግል θ = 45° ይሆናል።'
      },
      explanation: {
        en: 'The trigonometric factor sin(2θ) peaks at 2θ = 90°, yielding θ = 45° when air resistance is neglected.',
        am: 'የ sin(2θ) እሴት ከፍተኛ የሚሆነው 2θ = 90° ሲሆን ይህም አንግሉ θ = 45° እንዲሆን ያደርጋል።'
      }
    },
    {
      id: 'qna-2-3',
      number: 3,
      category: 'conceptual',
      question: {
        en: 'What distinguishes an elastic collision from an inelastic collision?',
        am: 'የመለጠጥ ግጭት (Elastic) ካልተለጠጠ ግጭት (Inelastic) በምን ይለያል?'
      },
      answer: {
        en: 'In both types of collisions within an isolated system, total linear momentum is conserved. However, total kinetic energy is conserved only in an elastic collision. In an inelastic collision, some kinetic energy is converted to thermal energy, sound, or internal deformation.',
        am: 'በሁለቱም ግጭቶች ውስጥ አጠቃላይ ሊኒየር ሞመንተም ቋሚ ነው። ልዩነቱ በመለጠጥ ግጭት ወቅት የእንቅስቃሴ ኃይል (KE) ሙሉ በሙሉ ሲጠበቅ፣ ባልተለጠጠ ግጭት ውስጥ ግን የተወሰነው የኪነቲክ ኃይል ወደ ሙቀት፣ ድምፅ ወይም የቅርጽ ለውጥ ይቀየራል።'
      },
      explanation: {
        en: 'Momentum conservation derives from Newton’s third law, while mechanical energy transformation depends on surface deformation mechanics.',
        am: 'የሞመንተም ህልውና ከኒውተን ሦስተኛ ህግ ሲመነጭ፣ የኃይል ለውጥ ግን ከእቃዎቹ የመለጠጥ ባህሪ ጋር ይገናኛል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-phys-2-1',
      number: 1,
      question: {
        en: 'A 40-kg box on a frictionless floor is pushed with a 20 N horizontal force. What is its acceleration?',
        am: '40 ኪ.ግ የሚመዝን ሳጥን ፍትጊያ በሌለው ወለል ላይ በ 20 ኒውተን አግድም ጉልበት ሲገፋ ማጣደፉ ስንት ይሆናል?'
      },
      options: [
        { id: 'a', text: { en: '2.0 m/s²', am: '2.0 ሜ/ሰ²' } },
        { id: 'b', text: { en: '0.5 m/s²', am: '0.5 ሜ/ሰ²' } },
        { id: 'c', text: { en: '800 m/s²', am: '800 ሜ/ሰ²' } },
        { id: 'd', text: { en: '0.2 m/s²', am: '0.2 ሜ/ሰ²' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'According to Newton’s second law: a = F / m = 20 N / 40 kg = 0.5 m/s².',
        am: 'በኒውተን ሁለተኛ ህግ መሰረት፡ a = F / m = 20 N / 40 kg = 0.5 ሜ/ሰ² ይሆናል።'
      }
    },
    {
      id: 'quiz-phys-2-2',
      number: 2,
      question: {
        en: 'At what point in its trajectory does a projectile have minimum speed?',
        am: 'አንድ የተወረወረ እቃ በጉዞው መስመር ላይ ዝቅተኛ ፍጥነት የሚኖረው በየትኛው ነጥብ ላይ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'At the launch point', am: 'በተወረወረበት መነሻ ነጥብ' } },
        { id: 'b', text: { en: 'At the apex (maximum height)', am: 'በከፍተኛው ጣሪያ ነጥብ (Apex)' } },
        { id: 'c', text: { en: 'Just before striking the ground', am: 'መሬት ከመንካቱ ጥቂት ቀደም ብሎ' } },
        { id: 'd', text: { en: 'Speed remains uniform throughout', am: 'ፍጥነቱ በሙሉ ጉዞው እኩል ነው' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'At the peak of the trajectory, the vertical velocity component drops to zero (v_y = 0), leaving only the horizontal component (v_x = u cos θ), which represents the minimum speed.',
        am: 'በከፍተኛው ከፍታ ላይ የቀጥታ ፍጥነት ዜሮ (v_y = 0) ስለሚሆን የሚቀረው አግድም ፍጥነት (u cos θ) ብቻ ሲሆን ይህም በጉዞው ውስጥ ዝቅተኛው ፍጥነት ነው።'
      }
    },
    {
      id: 'quiz-phys-2-3',
      number: 3,
      question: {
        en: 'Kepler’s third law states that for any planet orbiting the Sun:',
        am: 'የኬፕለር ሦስተኛ ህግ እንደሚደነግገው ማንኛውም ፕላኔት ፀሐይን ሲዞር፡'
      },
      options: [
        { id: 'a', text: { en: 'T / R = constant', am: 'T / R = ቋሚ' } },
        { id: 'b', text: { en: 'T² / R³ = constant', am: 'T² / R³ = ቋሚ' } },
        { id: 'c', text: { en: 'T³ / R² = constant', am: 'T³ / R² = ቋሚ' } },
        { id: 'd', text: { en: 'T = 2π R', am: 'T = 2π R' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Kepler’s Law of Harmony states that the square of the orbital period T² is directly proportional to the cube of the orbital radius R³ (T² / R³ = constant).',
        am: 'የኬፕለር የስምምነት ህግ የዙረት ጊዜ ስኩዌር (T²) ከርቀት ኪዩብ (R³) ጋር ይመጣጠናል ይላል (T² / R³ = ቋሚ)።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-phys-2-1',
      chapter: 2,
      termEn: 'Inertia',
      termAm: 'ኢነርሺያ',
      defEn: 'The natural resistance of any physical object to any change in its velocity.',
      defAm: 'አንድ አካል የእንቅስቃሴ ፍጥነቱን ወይም አቅጣጫውን ለመቀየር የሚያሳየው ተፈጥሮአዊ ተቃውሞ።'
    },
    {
      id: 'fc-phys-2-2',
      chapter: 2,
      termEn: 'Centripetal Acceleration',
      termAm: 'ማዕከል ሳቢ ማጣደፍ',
      defEn: 'The inward acceleration perpendicular to velocity in uniform circular motion: a_c = v² / r.',
      defAm: 'በክብ እንቅስቃሴ ወቅት ፍጥነትን ወደ መሃል የሚጎትት ቀጤ-ነክ ማጣደፍ (a_c = v² / r)።'
    },
    {
      id: 'fc-phys-2-3',
      chapter: 2,
      termEn: 'Linear Momentum',
      termAm: 'ሊኒየር ሞመንተም',
      defEn: 'Vector product of a particle’s mass and velocity: p⃗ = m v⃗.',
      defAm: 'የአንድ ቁስ አካል የክብደትና የፍጥነት ቬክተር ብዜት (p⃗ = m v⃗)።'
    }
  ]
};
