import { OfficialPdfPage } from '../geographyPdf/types';

export const emergingTechChapter5Pages: OfficialPdfPage[] = [
  // Page 83: Chapter 5 Intro & Overview of AR/VR/MR (Book Page 82)
  {
    pdfPageNumber: 83,
    bookPageLabel: '82',
    chapterNumber: 5,
    sectionRef: '5.1',
    titleEn: 'Chapter 5: Augmented Reality (AR) — Overview & Objectives',
    titleAm: 'ምዕራፍ 5፡ የተሻሻለ እውነታ (Augmented Reality - AR) — አጠቃላይ እይታ እና አላማዎች',
    subtopicEn: 'Chapter Objectives, Visual Perception, Real vs Virtual Blending',
    subtopicAm: 'የምዕራፉ አላማዎች፣ የእይታ ግንዛቤ እና አካላዊውን ከምናባዊው ጋር የማዋሃድ ፅንሰ-ሀሳብ',
    pageType: 'content',
    contentEn: `Chapter 5: Augmented Reality (AR)

Introduction
In the previous chapter, you have learned about the overview of IoT, how it works, IoT tools and platforms, and sample applications of IoT. In this chapter, you will learn about the overview of Augmented Reality (AR), the difference between AR, Virtual Reality (VR), and Mixed Reality (MR), the architecture of AR systems, and applications of AR.

After accomplishing this chapter, Students will be able to:
➢ Explain augmented reality
➢ Explain the difference between AR, VR, and MR
➢ Describe the architecture of augmented reality systems
➢ Describe the application areas of augmented reality

5.1. Overview of Augmented Reality (AR)
Augmented reality (AR) is a form of emerging technology that superimposes computer-generated graphics and digital enhancements onto the physical real world in real-time. Unlike virtual reality, which submerges the user completely inside an artificial digital environment, augmented reality enhances the user's perception of the real world by adding digital layers of sensory information (visual, audio, and haptic).

Activity 5.1:
➢ What is Augmented Reality (AR)?
➢ How does AR differ from Virtual Reality (VR)?
➢ Have you ever experienced an AR or VR application? Share your experience with your classmates.`,
    contentAm: `ምዕራፍ 5፡ የተሻሻለ እውነታ (Augmented Reality - AR)

መግቢያ
ባለፈው ምዕራፍ ስለ IoT አጠቃላይ እይታ፣ አሰራርና አተገባበር ተምረናል። በዚህ ምዕራፍ ስለ Augmented Reality (AR) ምንነት፣ በAR፣ VR እና MR መካከል ስላለው ልዩነት፣ የAR አወቃቀር እና አተገባበር እንማራለን።

ይህንን ምዕራፍ ካጠናቀቁ በኋላ ተማሪዎች፡
➢ የተሻሻለ እውነታ (AR) ምን እንደሆነ ያብራራሉ።
➢ በAR፣ VR እና MR መካከል ያለውን ልዩነት ይለያሉ።
➢ የAR ስርአት አወቃቀርን ይተነትናሉ።
➢ የARን አተገባበር በህክምና፣ በትምህርት፣ በኢንዱስትሪ እና በጨዋታዎች ይገልጻሉ።

5.1. የAugmented Reality (AR) አጠቃላይ እይታ
Augmented Reality (AR) በኮምፒውተር የተፈጠሩ ዲጂታል ምስሎችን፣ ጽሑፎችንና ድምጾችን ከእውነተኛው አካላዊ ዓለም ጋር በቅጽበት አዋህዶ የሚያሳይ ዘመናዊ ቴክኖሎጂ ነው። ተጠቃሚውን ሙሉ በሙሉ ምናባዊ ወደ ሆነ ዓለም ከሚወስደው ከVirtual Reality (VR) በተለየ መልኩ፤ AR እውነተኛውን አካባቢ እንዳለ ጠብቆ በላዩ ላይ ተጨማሪ ዲጂታል መረጃዎችን ያክልበታል።`
  },

  // Page 84: Definitions: AR, VR, and Mixed Reality (MR) (Book Page 83)
  {
    pdfPageNumber: 84,
    bookPageLabel: '83',
    chapterNumber: 5,
    sectionRef: '5.1.1',
    titleEn: 'Definitions and Distinctions: AR vs. VR vs. Mixed Reality (MR)',
    titleAm: 'ትርጓሜዎች እና ልዩነቶች፡ AR፣ VR እና የተቀላቀለ እውነታ (MR)',
    subtopicEn: 'Reality-Virtuality Continuum, Milgram-Kishino Spectrum, Immersive Displays',
    subtopicAm: 'የእውነታ-ምናባዊነት ቀጣይነት (Milgram Spectrum) እና አስማጭ ስክሪኖች',
    pageType: 'content',
    figures: [
      { id: 'fig-5.1', caption: 'Figure 5.1 The Reality-Virtuality Continuum', description: 'Spectrum from Real Environment to Augmented Reality to Augmented Virtuality to Virtual Reality.' }
    ],
    contentEn: `5.1.1. Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR)

• Virtual Reality (VR):
Virtual reality is a completely computer-generated simulation of an alternate world or environment. Users are visually and acoustically isolated from their real physical surroundings using Head-Mounted Displays (HMDs) such as the Oculus Rift, HTC Vive, or PlayStation VR. In VR, every element the user sees, hears, and interacts with is synthetic.

• Augmented Reality (AR):
Augmented reality blends virtual digital information with real-world environments. Users continue to view the actual world around them directly or via transparent lenses/screens, with digital objects (3D models, directional arrows, technical schematics) superimposed in 3D spatial alignment.

• Mixed Reality (MR):
Mixed reality is an advanced combination of AR and VR along the "Reality-Virtuality Continuum" (first defined by Paul Milgram and Fumio Kishino in 1994, Figure 5.1). In MR, virtual objects and real-world physical objects co-exist and interact dynamically in real-time (e.g., Microsoft HoloLens), where a digital ball can bounce off a real physical table and hide behind a real chair.

[Figure 5.1 The Reality-Virtuality Continuum]`,
    contentAm: `5.1.1. ምናባዊ እውነታ (VR)፣ የተሻሻለ እውነታ (AR) እና የተቀላቀለ እውነታ (MR)

• ምናባዊ እውነታ (Virtual Reality - VR)፡
ተጠቃሚውን ከእውነተኛው ዓለም ሙሉ በሙሉ በማላቀቅ በኮምፒውተር ወደ ተፈጠረ ምናባዊ ዓለም የሚያስገባ ቴክኖሎጂ ነው። ተጠቃሚዎች የVR መነጽር (HMD) በማድረግ ሙሉ በሙሉ ሰው ሰራሽ የሆነውን ዓለም ያያሉ፣ ይሰማሉ።

• የተሻሻለ እውነታ (Augmented Reality - AR)፡
እውነተኛውን ዓለም እንዳለ ጠብቆ በላዩ ላይ ዲጂታል ምስሎችንና መረጃዎችን ጨምሮ የሚያሳይ ነው። ተጠቃሚው አካባቢውን እያየ ተጨማሪ ዲጂታል መመሪያዎችን ያገኛል።

• የተቀላቀለ እውነታ (Mixed Reality - MR)፡
የAR እና VR ጥምረት ሲሆን እውነተኛውና ምናባዊው ዓለም እርስ በእርስ ተዋህደው አብረው የሚሰሩበት ነው (ምሳሌ፡ Microsoft HoloLens)። ምናባዊ ኳስ እውነተኛ ጠረጴዛ ላይ ስትወድቅ ልክ እንደ እውነተኛ ኳስ ተፈንጥራ መሬት ትወድቃለች።

[ምስል 5.1 የእውነታ-ምናባዊነት ቀጣይነት መስመር]`
  },

  // Page 85: Comparison Matrix & Historical Milestones of AR (Book Page 84)
  {
    pdfPageNumber: 85,
    bookPageLabel: '84',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Comparison Matrix & History of Augmented Reality',
    titleAm: 'የንጽጽር ሰንጠረዥ እና የተሻሻለ እውነታ (AR) ታሪክ',
    subtopicEn: 'Table of AR vs VR vs MR & Sensorama 1962, Ivan Sutherland 1968 Sword of Damocles',
    subtopicAm: 'የAR፣ VR እና MR ማነጻጸሪያ ሰንጠረዥ እና ሴንሶራማ (1962)፣ ኢቫን ሰዘርላንድ (1968)',
    pageType: 'table',
    tables: [
      {
        id: 'table-5.1',
        caption: 'Comparison of AR, VR, and MR',
        headers: ['Feature', 'Virtual Reality (VR)', 'Augmented Reality (AR)', 'Mixed Reality (MR)'],
        rows: [
          ['Environment', '100% synthetic digital world', 'Real world enhanced with digital data', 'Real and virtual co-exist and interact'],
          ['User Isolation', 'Fully occluded from real world', 'Direct view of real environment', 'Interactive integration with real surroundings'],
          ['Typical Devices', 'Oculus Rift, HTC Vive, PSVR', 'Smartphones, Google Glass, HUDs', 'Microsoft HoloLens, Magic Leap'],
          ['Primary Sensation', 'Immersion in virtual space', 'Information augmentation in real space', 'Physical interaction with digital holographic assets']
        ]
      }
    ],
    contentEn: `5.2. History of Augmented Reality
The foundations of augmented reality stem from early flight simulation and computer graphics:
• 1962: Morton Heilig created the "Sensorama", an interactive simulator that delivered visuals, sound, vibration, and even smells to the user.
• 1968: Ivan Sutherland invented the "Sword of Damocles", recognized as the first Head-Mounted Display (HMD) tracking head movement, suspended from the ceiling due to its extreme weight.
• 1974: Myron Krueger established "Videoplace", an artificial reality laboratory combining video projection and interactive computer graphics without requiring goggles.
• 1990: Thomas Caudell and David Mizell coined the term "Augmented Reality" at Boeing to describe an experimental heads-up system that assisted factory workers assembling aircraft wiring harnesses.`,
    contentAm: `የAR፣ VR እና MR ማነጻጸሪያ ሰንጠረዥ፡
• VR፡ 100% ምናባዊ፤ ተጠቃሚው ከአካባቢው ይገለላል፤ Oculus Rift ይጠቀማል።
• AR፡ እውነተኛ አካባቢ + ዲጂታል መረጃ፤ ስማርት ስልኮችና ጎግል ግላስ ይጠቀማል።
• MR፡ እውነተኛውና ዲጂታሉ አብረው ይሰራሉ፤ HoloLens ይጠቀማል።

5.2. የAugmented Reality (AR) ታሪክ፡
• 1962፡ ሞርተን ሄይሊግ "Sensorama" የተባለውን የመስማት፣ የማየትና የማሽተት ስሜትን የሚያነቃቃ ማሽን ሰራ።
• 1968፡ ኢቫን ሰዘርላንድ የመጀመሪያውን በጭንቅላት ላይ የሚታሰር መነጽር (HMD) ሰራ።
• 1990፡ ቶማስ ኮዴል በቦይንግ (Boeing) የአውሮፕላን ፋብሪካ ውስጥ የኤሌክትሪክ ሽቦዎችን ለመግጠም የሚያግዝ ስርአት በመስራት "Augmented Reality" የሚለውን ቃል ለመጀመሪያ ጊዜ ተጠቀመ።`
  },

  // Page 86: History of AR Continued: 1992 to Modern Day (Book Page 85)
  {
    pdfPageNumber: 86,
    bookPageLabel: '85',
    chapterNumber: 5,
    sectionRef: '5.2',
    titleEn: 'Evolution of AR: Virtual Fixtures to Pokémon GO & WebAR',
    titleAm: 'የAR እድገት፡ ከቨርቹዋል ፊክስቸርስ እስከ ፖኪሞን ጎ እና WebAR',
    subtopicEn: 'Louis Rosenberg 1992, ARToolKit 1999 Hirokazu Kato, Google Glass 2013, Pokémon GO 2016',
    subtopicAm: 'ሉዊስ ሮዘንበርግ (1992)፣ ARToolKit (1999)፣ ጎግል ግላስ (2013)፣ ፖኪሞን ጎ (2016)',
    pageType: 'content',
    contentEn: `• 1992: Louis Rosenberg developed "Virtual Fixtures" at the US Air Force Armstrong Laboratory, demonstrating overlay of sensory information to improve human operator performance in tele-robotics.
• 1999: Hirokazu Kato developed "ARToolKit", the first open-source software library allowing 3D virtual graphics to be overlaid on printed optical markers captured via video cameras.
• 2000: Bruce Thomas introduced "ARQuake", the first outdoor mobile augmented reality video game.
• 2013: Google announced "Google Glass", lightweight optical head-mounted display spectacles communicating via voice and smartphone connectivity.
• 2016: Niantic launched "Pokémon GO", which brought AR gaming into global mainstream culture, generating over 500 million downloads in its first months.
• Present: The expansion of Apple ARKit, Google ARCore, and WebAR allowing instant augmented reality experiences on standard smartphones and web browsers without specialized hardware.`,
    contentAm: `• 1992፡ ሉዊስ ሮዘንበርግ በአሜሪካ አየር ኃይል ውስጥ "Virtual Fixtures" በመስራት የARን ጥቅም አሳየ።
• 1999፡ ሂሮካዙ ካቶ "ARToolKit" የተባለውን ክፍት ሶፍትዌር ፈጠረ፤ ካሜራ ምልክቶችን አይቶ 3D ምስሎችን እንዲያሳይ አስቻለ።
• 2013፡ ጎግል "Google Glass" የተባለውን ስማርት መነጽር ይፋ አደረገ።
• 2016፡ ኒያንቲክ "Pokémon GO" የተባለውን የAR ጌም አዘጋጅቶ በዓለም ዙሪያ በሚሊዮኖች ዘንድ ተወዳጅ ሆነ።
• አሁን ላይ፡ በአፕል ARKit እና ጎግል ARCore አማካኝነት እያንዳንዱ ስማርት ስልክ የAR ቴክኖሎጂን ማስተናገድ ይችላል።`
  },

  // Page 87: Architecture of AR Systems (Book Page 86)
  {
    pdfPageNumber: 87,
    bookPageLabel: '86',
    chapterNumber: 5,
    sectionRef: '5.3',
    titleEn: 'Architecture of Augmented Reality Systems',
    titleAm: 'የAugmented Reality ስርአት አወቃቀር (Architecture)',
    subtopicEn: 'Sensors/Cameras, Processing Units, Projection/Optical Displays, Reflective Mirrors',
    subtopicAm: 'ሴንሰሮችና ካሜራዎች፣ ፕሮሰሰሮች፣ ፕሮጀክተሮችና ኦፕቲካል ስክሪኖች፣ አንጸባራቂ መስታወቶች',
    pageType: 'content',
    figures: [
      { id: 'fig-5.2', caption: 'Figure 5.2 Basic Architecture of an AR System', description: 'Flow showing Camera/Sensors capturing scene, Processor computing spatial registration, and Display/Glasses projecting composite image.' }
    ],
    contentEn: `5.3. Architecture of Augmented Reality Systems
An augmented reality system relies on four critical hardware and software layers to achieve real-time tracking, spatial mapping, and seamless rendering (Figure 5.2):

1. Sensors and Cameras:
Sensors capture the user's environment and track position and orientation:
• Depth Sensors (ToF / LiDAR): Measure the distance to surrounding objects.
• RGB Cameras: Capture real-time high-definition video of the physical scene.
• Accelerometers, Gyroscopes & Magnetometers (IMU): Track 6 Degrees of Freedom (6DoF) head and device movement.

2. Processing Unit:
The "brain" of the AR system (SoC, CPU, GPU, and NPU):
• Executes Computer Vision algorithms for feature detection and Simultaneous Localization and Mapping (SLAM).
• Calculates real-time 3D coordinate registration between real and virtual spaces.

3. Projection / Displays:
• Optical See-Through (OST): Transparent glass optics where light from micro-projectors reflects into the eye (e.g., HoloLens, Magic Leap).
• Video See-Through (VST): Camera feeds combined digitally on screens (e.g., smartphones, Apple Vision Pro).

4. Reflective Mirrors & Waveguides:
Direct synthetic photon paths toward the retina, ensuring crisp visual superposition.`,
    contentAm: `5.3. የAugmented Reality ስርአት አወቃቀር (ምስል 5.2)፡
የAR ስርአት በአራት ዋና ዋና ክፍሎች የተገነባ ነው፡

1. ሴንሰሮች እና ካሜራዎች (Sensors and Cameras)፡
የአካባቢውን ምስል፣ ጥልቀት (Depth) እና የመሳሪያውን እንቅስቃሴ (IMU) በቅጽበት ይከታተላሉ።

2. የማቀነባበሪያ ክፍል (Processing Unit)፡
የኮምፒውተር ቪዥን አልጎሪዝሞችን (SLAM) በመጠቀም ምናባዊው ምስል በትክክል የት ጋር መቀመጥ እንዳለበት በ3D ያስላል።

3. ማሳያዎችና ፕሮጀክተሮች (Displays / Projectors)፡
• በመስታወት ውስጥ ዲጂታል ብርሃንን የሚያሳዩ (Optical See-Through)
• በስክሪን ላይ ምስልን አዋህደው የሚያሳዩ (Video See-Through)

4. ኦፕቲካል መስታወቶች (Waveguides)፡
የተፈጠረውን ዲጂታል ምስል በቀጥታ ወደ ሰው አይን የሚያደርሱ ጥቃቅን መስታወቶች ናቸው።

[ምስል 5.2 የAR መሰረታዊ አወቃቀር]`
  },

  // Page 88: Types of Augmented Reality: Marker-Based & Markerless (Book Page 87)
  {
    pdfPageNumber: 88,
    bookPageLabel: '87',
    chapterNumber: 5,
    sectionRef: '5.4',
    titleEn: 'Types of Augmented Reality: Marker-Based & Markerless (Location-Based)',
    titleAm: 'የAR አይነቶች፡ በማርከር ላይ የተመሰረተ እና ማርከር አልባ (በቦታ ላይ የተመሰረተ)',
    subtopicEn: 'QR/Barcode Visual Fiducials vs GPS/Compass Gyro Spatial Anchors',
    subtopicAm: 'የQR ኮድ ምስላዊ ምልክቶች እና የጂፒኤስ/ኮምፓስ የቦታ መገኛ ምልክቶች',
    pageType: 'content',
    contentEn: `5.4. Types of Augmented Reality
Augmented reality applications are classified into four major categories based on their tracking and triggering mechanism:

1. Marker-Based AR (Recognition-Based AR):
Marker-based AR uses physical visual markers (such as QR codes, barcodes, or custom geometric patterns) identified by the camera. The software calculates the position, orientation, and scale of the marker in 3D space and renders the virtual object directly on top of it.
• Advantage: High precision, minimal computational latency.
• Use case: Product brochures, museum exhibit plaques, interactive business cards.

2. Markerless AR (Location-Based / Position-Based AR):
Markerless AR does not rely on visual fiducials. Instead, it utilizes hardware sensors including GPS, digital compasses, gyroscopes, and SLAM computer vision to anchor digital objects in physical environments.
• Sub-types:
  - Location-Based: Displays navigation markers based on GPS coordinates.
  - Plane-Detection: Detects flat horizontal surfaces (floors, tables) or vertical surfaces (walls) to place digital furniture or characters (e.g., IKEA Place).`,
    contentAm: `5.4. የAugmented Reality አይነቶች፡
የAR ቴክኖሎጂ በሚጠቀምበት የመከታተያ ዘዴ መሰረት በአራት ይከፈላል፡

1. በማርከር ላይ የተመሰረተ AR (Marker-Based AR)፡
ካሜራው የተወሰኑ ምልክቶችን (QR ኮድ ወይም ስዕላዊ መለያዎችን) አይቶ ሲያውቅ የ3D ምስሉን ያሳያል።
ጥቅሙ፡ ከፍተኛ ትክክለኛነትና ፈጣን ምላሽ መስጠት። ምሳሌ፡ በሙዚየም ውስጥ የመረጃ ሰሌዳዎችን በስልክ ሲመለከቱ ተጨማሪ ምስል ማሳየት።

2. ማርከር አልባ AR (Markerless / Location-Based AR)፡
ምንም አይነት ምልክት ሳይፈልግ በስልኩ ጂፒኤስ፣ ኮምፓስ እና ካሜራ በመታገዝ ጠፍጣፋ ወለልን ወይም ግድግዳን ለይቶ 3D እቃዎችን ያስቀምጣል (ምሳሌ፡ የIKEA የቤት እቃዎች ማስተካከያ አፕ)።`
  },

  // Page 89: Projection-Based & Superimposition-Based AR (Book Page 88)
  {
    pdfPageNumber: 89,
    bookPageLabel: '88',
    chapterNumber: 5,
    sectionRef: '5.4',
    titleEn: 'Projection-Based AR & Superimposition-Based AR',
    titleAm: 'በፕሮጀክሽን ላይ የተመሰረተ እና በድርብርብ ላይ የተመሰረተ AR',
    subtopicEn: 'Luminous Synthetic Light Projections & Object Recognition Replacements',
    subtopicAm: 'የብርሃን ፕሮጀክሽን መስተጋብር እና የነገሮችን ምስል በዲጂታል የመተካት ስርአት',
    pageType: 'content',
    contentEn: `3. Projection-Based AR:
Projection-based AR projects artificial synthetic light directly onto physical real-world surfaces. This eliminates the need for users to wear goggles or look at handheld screens. In advanced setups, users can physically touch or interact with the projected light beam, detected by infrared sensors (e.g., interactive projected keyboards or industrial assembly guidance on machinery).

4. Superimposition-Based AR:
Superimposition-based AR replaces either the entire original view of an object or portions of it with an augmented view. Object recognition plays a decisive role: the system must recognize a specific object (such as a human heart, a car engine, or a bone fracture) and superimpose historical X-rays, animated maintenance instructions, or 3D diagnostic overlays directly on top of the physical object.

Activity 5.2:
➢ Identify the differences among the four types of Augmented Reality.
➢ Provide an example of how projection-based AR is used in manufacturing.`,
    contentAm: `3. በፕሮጀክሽን ላይ የተመሰረተ AR (Projection-Based AR)፡
ዲጂታል ብርሃንን በቀጥታ በእውነተኛው እቃ ወይም ወለል ላይ በመጣል የሚሰራ ነው። ተጠቃሚው መነጽር ወይም ስልክ ማየት አይጠበቅበትም፤ የተጣለውን ብርሃን በእጅ በመንካት መቆጣጠር ይቻላል (ምሳሌ፡ በጠረጴዛ ላይ የሚሰራ ምናባዊ የኮምፒውተር ኪቦርድ)።

4. በድርብርብ ላይ የተመሰረተ AR (Superimposition-Based AR)፡
የአንድን እቃ እውነተኛ ገጽታ በከፊል ወይም ሙሉ በሙሉ በዲጂታል መረጃ የሚተካ ነው። ስርአቱ እቃውን (ለምሳሌ የሰው ልብ ወይም የመኪና ሞተር) ለይቶ ካወቀ በኋላ የቀዶ ጥገና ወይም የጥገና መመሪያዎችን በቀጥታ በላዩ ላይ ደርቦ ያሳያል።`
  },

  // Page 90: Applications of AR: Healthcare & Education (Book Page 89)
  {
    pdfPageNumber: 90,
    bookPageLabel: '89',
    chapterNumber: 5,
    sectionRef: '5.5',
    titleEn: 'Applications of AR: Healthcare, Surgery, and Education',
    titleAm: 'የAR አተገባበር በጤና፣ በቀዶ ጥገና እና በትምህርት መስክ',
    subtopicEn: 'Vein Viewing AccuVein, Surgical Holograms, Interactive 3D Anatomy & Textbooks',
    subtopicAm: 'የደም ስር መፈለጊያ (AccuVein)፣ የቀዶ ጥገና ሆሎግራም፣ የሰውነት ክፍሎች አሰራርና መማሪያ መጽሐፍት',
    pageType: 'content',
    contentEn: `5.5. Applications of Augmented Reality
Augmented Reality transforms complex procedures into intuitive visual steps across numerous domains:

1. Healthcare and Medicine:
• Vein Visualization: Devices such as AccuVein project real-time infrared maps of vascular networks onto a patient’s skin, allowing nurses to insert needles accurately on the first attempt.
• Surgical Guidance: Surgeons wear AR visors displaying 3D MRI and CT scans superimposed directly on the patient's body during delicate neurosurgery and orthopedic operations.
• Medical Education: Students dissect 3D holographic human bodies, exploring cardiovascular and skeletal layers without requiring cadaver labs.

2. Education and Training:
• Interactive Textbooks: Diagrams of volcanoes, historical monuments, and chemical molecules come to life in 3D animation when viewed through a tablet.
• Technical Skill Simulation: Flight trainees, electricians, and mechanics practice high-voltage repairs and emergency protocols in safe interactive AR environments.`,
    contentAm: `5.5. የAugmented Reality አተገባበር በየዘርፉ፡

1. በጤና እና ህክምና መስክ፡
• የደም ስር መፈለጊያ (AccuVein)፡ የታካሚውን ቆዳ በመቃኘት የደም ስሮችን በቀጥታ በቆዳው ላይ በብርሃን ያሳያል፤ ይህም መርፌ ያለ ስህተት ለመውጋት ይረዳል።
• የቀዶ ጥገና መመሪያ፡ ሀኪሞች ቀዶ ጥገና በሚያደርጉበት ወቅት የታካሚውን የውስጥ MRI ምስል በቀጥታ በሰውነቱ ላይ ደርበው በማየት በከፍተኛ ጥንቃቄ እንዲሰሩ ያስችላቸዋል።
• የህክምና ትምህርት፡ ተማሪዎች የሰውነት ክፍሎችን በ3D ምስል በዝርዝር እንዲያጠኑ ያግዛል።

2. በትምህርት እና ስልጠና መስክ፡
• በይነተገናኝ መማሪያ መጽሐፍት፡ በመጽሐፍ ላይ ያሉ ስዕሎችን በስልክ ሲመለከቱ ተንቀሳቃሽ የ3D ምስል ሆነው እንዲታዩ ያደርጋል።
• የሙያ ስልጠና፡ አብራሪዎች እና የኤሌክትሪክ ባለሙያዎች ለአደጋ ሳይጋለጡ በAR እንዲለማመዱ ያደርጋል።`
  },

  // Page 91: Architecture, Real Estate, Retail, and Manufacturing (Book Page 90)
  {
    pdfPageNumber: 91,
    bookPageLabel: '90',
    chapterNumber: 5,
    sectionRef: '5.5',
    titleEn: 'Applications of AR: Architecture, Construction, Retail & Industry',
    titleAm: 'የAR አተገባበር በህንጻ ግንባታ፣ በችርቻሮ ንግድ እና በፋብሪካዎች',
    subtopicEn: 'BIM Walkthroughs, Virtual Try-On, Remote Maintenance, Warehouse Picking',
    subtopicAm: 'የግንባታ ፕላን በቦታው ላይ ማየት፣ ልብስ በቨርቹዋል መለካት፣ የርቀት ማሽን ጥገና',
    pageType: 'content',
    contentEn: `3. Architecture and Real Estate:
• Building Information Modeling (BIM): Architects and clients visualize full-scale 3D models of proposed buildings on vacant construction sites before foundations are poured.
• Interior Design: Homeowners preview paint colors, flooring materials, and furniture layouts in real-time within their physical rooms.

4. Retail and E-Commerce:
• Virtual Try-On: Customers test sunglasses, cosmetics, makeup, watches, and shoes virtually on their face or feet before buying online (e.g., Sephora, L'Oréal, Nike).
• Furniture Preview: Placing true-to-scale virtual furniture inside living rooms to verify dimensions and aesthetic fit.

5. Manufacturing and Industrial Maintenance:
• Step-by-Step Maintenance: Technicians view digital wiring schematics and animated bolt-tightening sequences superimposed on complex industrial machinery.
• Warehouse Logistics: AR smart glasses guide warehouse workers through picking routes, highlighting target storage shelves automatically.`,
    contentAm: `3. በህንጻ ንድፍና ግንባታ (Architecture & Real Estate)፡
• የህንጻ ንድፍን በባዶ መሬት ላይ በ3D አስቀምጦ መመልከት።
• የውስጥ ማስጌጥ (Interior Design)፡ የቀለምና የቤት እቃዎችን ተስማሚነት በቅድሚያ ማየት።

4. በችርቻሮ ንግድ እና ኦንላይን ሸመታ፡
• ቨርቹዋል ልኬት (Virtual Try-On)፡ መነጽር፣ ሜካፕ ወይም ጫማ ሳይገዙ በፊት በስልክ በመሞከር ማየት።
• የቤት እቃዎችን በክፍል ውስጥ አስቀምጦ ልካቸውን ማረጋገጥ።

5. በማምረቻ ፋብሪካዎች እና ጥገና፡
• የቴክኒሻኖች ጥገና መመሪያ፡ የማሽን ጥገና እርምጃዎችን በቅደም ተከተል በማሽኑ ላይ እያሳየ ማስተማር።
• በመጋዘኖች ውስጥ እቃዎችን በፍጥነት ፈልጎ የማውጣት ሂደት።`
  },

  // Page 92: Military, Gaming, Tourism, and Culture (Book Page 91)
  {
    pdfPageNumber: 92,
    bookPageLabel: '91',
    chapterNumber: 5,
    sectionRef: '5.5',
    titleEn: 'Applications of AR: Military HUDs, Gaming, and Cultural Tourism',
    titleAm: 'የAR አተገባበር በውትድርና፣ በቪዲዮ ጌም እና በቱሪዝም ዘርፍ',
    subtopicEn: 'Tactical Heads-Up Displays, Location-Based Mobile Games, Living History Exhibits',
    subtopicAm: 'የአውሮፕላን አብራሪዎች ስክሪን (HUDs)፣ የቦታ ጌሞች እና የታሪክ ቅርሶች ማብራሪያ',
    pageType: 'content',
    contentEn: `6. Military and Defense:
• Tactical Heads-Up Displays (HUDs): Fighter pilots and infantry soldiers view synthetic flight paths, enemy target positions, altitude, and tactical friendly coordinates directly on helmet visors.
• Synthetic Training Environments (STE): Ground troops train in combined live and virtual tactical simulations.

7. Gaming and Entertainment:
• Immersive Mobile Gaming: Pokémon GO, Harry Potter: Wizards Unite, and Jurassic World Alive turn physical parks and city blocks into responsive game arenas.
• Live Concerts and Broadcasts: Augmented holographic stage performances and real-time athletic statistics during sports broadcasts.

8. Tourism and Cultural Heritage:
• Living History: Pointing a smartphone at ancient ruins (e.g., Roman Colosseum or Axum Obelisks) renders historical reconstructions showing how structures appeared in antiquity.
• Language Translation: Instant live translation of road signs and menus into the traveler's native language using optical character recognition (OCR) and AR overlay.`,
    contentAm: `6. በውትድርና እና መከላከያ፡
• የቁጥጥር ስክሪኖች (HUDs)፡ የጦር አውሮፕላን አብራሪዎች እና ወታደሮች የጠላትን አቅጣጫና ከፍታ በመነጽራቸው ላይ በቀጥታ ያያሉ።
• የወታደራዊ ስልጠና ማስመሰያዎች።

7. በጨዋታ እና መዝናኛ፡
• በካሜራ የሚጫወቱ ስማርት የሞባይል ጌሞች (Pokémon GO)።
• በስፖርት ስርጭት ወቅት የተጫዋቾችን መረጃ በሜዳው ላይ በግራፊክስ ማሳየት።

8. በቱሪዝም እና ቅርስ ጥበቃ፡
• የፈራረሱ ታሪካዊ ቦታዎችን (ለምሳሌ የአክሱም ሀውልቶችን ወይም ቤተ-መንግስቶችን) በጥንታዊ ክብራቸው በ3D አድሶ ማየት።
• የውጭ ቋንቋ ምልክቶችን በካሜራ ሲያዩ ወዲያውኑ ወደ አማርኛ ተርጉሞ ማሳየት።`
  },

  // Page 93: Benefits and Challenges of Augmented Reality (Book Page 92)
  {
    pdfPageNumber: 93,
    bookPageLabel: '92',
    chapterNumber: 5,
    sectionRef: '5.6',
    titleEn: 'Benefits and Technical Challenges of Augmented Reality',
    titleAm: 'የተሻሻለ እውነታ (AR) ጥቅሞች እና ቴክኒካዊ ተግዳሮቶች',
    subtopicEn: 'Increased Productivity vs Battery Consumption, Latency, Optical Field-of-View',
    subtopicAm: 'የስራ ቅልጥፍና መጨመር እና የባትሪ ፍጆታ፣ መዘግየት፣ የመነጽር የእይታ አንግል ወሰን',
    pageType: 'content',
    contentEn: `5.6. Benefits and Challenges of Augmented Reality
Activity 5.3:
➢ What are the benefits of adopting AR in industrial environments?
➢ What technical bottlenecks restrict the widespread adoption of wearable AR glasses?

Benefits of Augmented Reality:
• Increased Productivity: Real-time visual instructions reduce error rates and training time by over 40% in industrial manufacturing.
• Enhanced Retention: Visual 3D interactions boost student comprehension and long-term memory retention.
• Hands-Free Operations: Technicians receive relevant information without setting tools down or consulting paper manuals.

Technical Challenges of Augmented Reality:
• Battery Life and Heat Dissipation: Processing high-definition computer vision models and SLAM tracking causes heavy power drain on wearable devices.
• Field of View (FoV): Optical see-through visors have limited angles (e.g., 40°–52°), causing virtual objects to clip at the edges.
• Latency and Motion Sickness: Delays between user movement and digital realignment can induce nausea.
• Privacy Concerns: Ubiquitous outward-facing cameras in public spaces capture unauthorized recordings of bystanders.`,
    contentAm: `5.6. የAugmented Reality ጥቅሞች እና ተግዳሮቶች፡

የAR ጥቅሞች፡
• የስራ ቅልጥፍናን ማሳደግ፡ በፋብሪካዎች ውስጥ የስህተት መጠንን በከፍተኛ ሁኔታ ይቀንሳል።
• የትምህርት አቀባበልን ማሻሻል፡ ተማሪዎች በ3D ምስል በማየት ትምህርቱን በፍጥነት ይረዳሉ።
• እጅን ነፃ ማድረግ፡ ሰራተኞች ማኑዋል ማንበብ ሳያስፈልጋቸው በመነጽራቸው መረጃ እያዩ ይሰራሉ።

የAR ተግዳሮቶች፡
• የባትሪ እድሜ እና ሙቀት፡ የኮምፒውተር ቪዥን ስሌት ከፍተኛ ሃይል ስለሚወስድ ባትሪ ቶሎ ያልቃል።
• ውስን የእይታ አንግል (Field of View)፡ መነጽሮች ሙሉውን አካባቢ ማካተት አለመቻላቸው።
• መዘግየት (Latency) እና የማዞር ስሜት።
• የግላዊነት ስጋት፡ በመነጽር ካሜራ የሌሎችን ሰዎች ፎቶ ያለፈቃድ ማንሳት።`
  },

  // Page 94: Future Trends in AR & Spatial Computing (Book Page 93)
  {
    pdfPageNumber: 94,
    bookPageLabel: '93',
    chapterNumber: 5,
    sectionRef: '5.7',
    titleEn: 'Future Trends: Spatial Computing, 5G Integration & Smart Contact Lenses',
    titleAm: 'የወደፊት የAR አዝማሚያዎች፡ ስፓሻል ኮምፒውቲንግ፣ 5G እና ስማርት ሌንሶች',
    subtopicEn: 'Sub-Millisecond 5G Cloud Rendering, Mojo Vision Bionic Lenses, Metaverse Integration',
    subtopicAm: 'የ5G ክላውድ ስሌት፣ ስማርት የዓይን ሌንሶች (Mojo Vision) እና የሜታቨርስ ውህደት',
    pageType: 'content',
    contentEn: `5.7. Future Trends of Augmented Reality
The trajectory of augmented reality is moving toward ubiquitous spatial computing:
• 5G and Edge Cloud Rendering: Ultra-low latency 5G connections allow offloading heavy graphics rendering from lightweight glasses to cloud edge servers, making future AR glasses as light as everyday prescription spectacles.
• Smart Contact Lenses: Prototypes such as Mojo Vision demonstrate micro-LED displays embedded inside scleral contact lenses, projecting navigational text directly over the user's cornea.
• Brain-Computer Interfaces (BCI): Combining neural input sensors with AR glasses to control digital overlays purely through neural intent and subtle micro-gestures.
• Spatial Audio Integration: True binaural audio that accurately mimics the acoustic echo and reverberation of physical rooms, anchoring sounds to virtual coordinates.
• The Metaverse: Seamless persistent shared spatial environments where remote users collaborate as digital photorealistic avatars alongside interactive physical assets.`,
    contentAm: `5.7. የወደፊት የAR አዝማሚያዎች፡
• የ5G እና የክላውድ ትስስር፡ ከባድ ስሌቶች በክላውድ ስለሚሰሩ የAR መነጽሮች እንደ ተራ መነጽር ቀጭንና ቀላል ይሆናሉ።
• ስማርት የዓይን ሌንሶች (Smart Contact Lenses)፡ በዓይን ውስጥ የሚገቡ ጥቃቅን ሌንሶች መረጃን በቀጥታ በአይን ሌንስ ላይ የሚያሳዩበት ቴክኖሎጂ።
• ከአእምሮ ጋር መገናኘት (BCI)፡ በአስተሳሰብ ብቻ የሚቆጣጠሩ የAR ስርአቶች።
• ስፓሻል ድምጽ (Spatial Audio)፡ ድምጽ ልክ እንደ እውነተኛው ዓለም ከየትኛው አቅጣጫ እንደሚመጣ አረጋግጦ የሚያሰማ።
• ሜታቨርስ (Metaverse)፡ ሰዎች በምናባዊ አምሳያቸው (avatars) ተገናኝተው አብረው የሚሰሩበት ዓለም።`
  },

  // Page 95: Summary of Chapter Five (Book Page 94)
  {
    pdfPageNumber: 95,
    bookPageLabel: '94',
    chapterNumber: 5,
    sectionRef: 'Summary',
    titleEn: 'Chapter Five Summary: Augmented Reality Core Takeaways',
    titleAm: 'የምዕራፍ አምስት ማጠቃለያ፡ የAR ዋና ዋና ነጥቦች',
    subtopicEn: 'Synthesis of Concepts, Modalities, Architectures, and Practical Applications',
    subtopicAm: 'የፅንሰ-ሀሳቦች፣ አይነቶች፣ አወቃቀሮች እና አተገባበሮች አጠቃላይ ውህደት',
    pageType: 'content',
    contentEn: `Chapter Five Summary

• Augmented reality (AR) enhances the physical world with real-time computer-generated graphics and sensory inputs, differing fundamentally from the closed virtual reality (VR) and interactive mixed reality (MR).
• The origins of AR trace back to Morton Heilig’s Sensorama (1962), Ivan Sutherland’s Sword of Damocles (1968), and Thomas Caudell's work at Boeing in 1990 coining the name.
• AR systems comprise four primary structural components: Sensors and Cameras, Processing Units, Projection/Optical Displays, and Reflective Mirrors/Waveguides.
• The four principal modalities of AR include:
  1. Marker-Based AR (Fiducial detection)
  2. Markerless AR (Location, GPS, and plane detection)
  3. Projection-Based AR (Surface illumination)
  4. Superimposition-Based AR (Object replacement)
• Practical applications span healthcare (vein visualization, surgery), education (interactive 3D textbooks), architecture (BIM visualization), retail (virtual try-on), manufacturing (maintenance instructions), and defense (tactical HUDs).
• Key engineering challenges remain in optical field-of-view, battery consumption, latency, and privacy.`,
    contentAm: `የምዕራፍ አምስት ማጠቃለያ

• Augmented Reality (AR) አካላዊውን ዓለም በኮምፒውተር ከተፈጠሩ ዲጂታል ምስሎች ጋር አዋህዶ የሚያሳይ ሲሆን ከምናባዊ እውነታ (VR) እና ከተቀላቀለ እውነታ (MR) ይለያል።
• የAR ታሪክ በ1962 ከሴንሶራማ ጀምሮ በ1990 በቦይንግ ፋብሪካ በቶማስ ኮዴል ስያሜ አግኝቶ እስከ ዘመናዊው ፖኪሞን ጎ ደርሷል።
• የAR አወቃቀር አራት ክፍሎች አሉት፡ ሴንሰሮች/ካሜራዎች፣ ማቀነባበሪያ ፕሮሰሰሮች፣ ማሳያዎች እና ኦፕቲካል መስታወቶች።
• አራቱ የAR አይነቶች፡ በማርከር ላይ የተመሰረተ፣ ማርከር አልባ፣ በፕሮጀክሽን ላይ የተመሰረተ እና በድርብርብ ላይ የተመሰረተ ናቸው።
• አተገባበሩ በጤና፣ በቀዶ ጥገና፣ በትምህርት፣ በህንጻ ግንባታ፣ በችርቻሮ ንግድ እና በውትድርና ውስጥ ጉልህ ሚና ይጫወታል።`
  },

  // Page 96: Chapter Five Review Questions (Book Page 95)
  {
    pdfPageNumber: 96,
    bookPageLabel: '95',
    chapterNumber: 5,
    sectionRef: 'Review',
    titleEn: 'Chapter Five Review Questions',
    titleAm: 'የምዕራፍ አምስት ክለሳ ጥያቄዎች',
    subtopicEn: '10 Evaluation Questions on AR/VR/MR Differences, Architecture, and Use Cases',
    subtopicAm: 'በAR፣ VR እና MR ልዩነቶች፣ አወቃቀር እና አተገባበር ላይ 10 ፈታኝ ጥያቄዎች',
    pageType: 'review',
    reviewQuestions: [
      {
        title: 'Chapter Five Review Questions',
        questions: [
          '1. Define Augmented Reality (AR) in your own words.',
          '2. Contrast Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR).',
          '3. What was the historical significance of Ivan Sutherland’s "Sword of Damocles"?',
          '4. Who coined the term "Augmented Reality" and in what industrial context?',
          '5. Describe the four key hardware/software architectural components of an AR system.',
          '6. Differentiate between marker-based AR and markerless AR with concrete examples.',
          '7. Explain how projection-based AR eliminates the requirement for head-mounted goggles.',
          '8. Discuss two critical applications of AR in the healthcare and surgical fields.',
          '9. How does Building Information Modeling (BIM) utilize AR in modern architecture?',
          '10. What are the primary technical bottlenecks currently hindering the mass adoption of wearable AR glasses?'
        ]
      }
    ],
    contentEn: `Chapter Five Review Questions

1. Define Augmented Reality (AR) in your own words.
2. Contrast Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR).
3. What was the historical significance of Ivan Sutherland’s "Sword of Damocles"?
4. Who coined the term "Augmented Reality" and in what industrial context?
5. Describe the four key hardware/software architectural components of an AR system.
6. Differentiate between marker-based AR and markerless AR with concrete examples.
7. Explain how projection-based AR eliminates the requirement for head-mounted goggles.
8. Discuss two critical applications of AR in the healthcare and surgical fields.
9. How does Building Information Modeling (BIM) utilize AR in modern architecture?
10. What are the primary technical bottlenecks currently hindering the mass adoption of wearable AR glasses?`,
    contentAm: `የምዕራፍ አምስት ክለሳ ጥያቄዎች

1. የተሻሻለ እውነታን (AR) በራስዎ አባባል ይተርጉሙ?
2. በAR፣ VR እና MR መካከል ያለውን ልዩነት አነጻጽሩ?
3. የኢቫን ሰዘርላንድ "Sword of Damocles" ታሪካዊ ፋይዳ ምን ነበር?
4. "Augmented Reality" የሚለውን ቃል ማን፣ በምን ሁኔታ ፈጠረው?
5. አራቱን የAR አወቃቀር ክፍሎች አብራሩ?
6. በማርከር ላይ የተመሰረተ እና ማርከር አልባ AR ልዩነትን በምሳሌ አስረዱ?
7. በፕሮጀክሽን ላይ የተመሰረተ AR መነጽር ማድረግን እንዴት እንደሚያስቀር አብራሩ?
8. በህክምና እና ቀዶ ጥገና መስክ የARን ሁለት ቁልፍ ጥቅሞች ጥቀሱ?
9. በህንጻ ግንባታ ውስጥ BIM ቴክኖሎጂ ARን እንዴት ይጠቀማል?
10. የAR መነጽሮች በስፋት እንዳይሰራጩ እንቅፋት የሆኑ ዋና ዋና ቴክኒካዊ ችግሮች ምን ምን ናቸው?`
  }
];
