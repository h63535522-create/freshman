import { Chapter } from '../../types';

export const physicsChapter7: Chapter = {
  id: 1107,
  number: 7,
  title: {
    en: 'Chapter 7: Cross Cutting Applications of Physics',
    am: 'ምዕራፍ ፯፡ የፊዚክስ ሁለገብ ተግባራዊ አተገባበሮች'
  },
  universityAuthor: 'National Physics Curriculum Committee (MoSHE 2019)',
  overview: {
    en: 'Surveys practical interdisciplinary applications of physics across agriculture and soil physics, industrial motors and generators, healthcare imaging (X-rays, CT scanners, MRI, ultrasound), archaeological radiocarbon dating, earth and atmospheric sciences, and renewable energy power generation.',
    am: 'የፊዚክስን ተግባራዊ ሚና በግብርና እና የአፈር ፊዚክስ፣ በኢንዱስትሪ ሞተሮችና ጄኔሬተሮች፣ በህክምና ምስል ምርመራ (ኤክስ-ሬይ፣ ሲቲ፣ ኤምአርአይ፣ አልትራሳውንድ)፣ በአርኪኦሎጂ የካርቦን-14 እድሜ ስሌት፣ በመሬትና ጠፈር ሳይንስ፣ እንዲሁም በታዳሽ የኃይል ምንጮች (የውሃ፣ ፀሐይና ንፋስ ኃይል) የሚተነትን ሁለገብ ምዕራፍ።'
  },
  learningOutcomes: [
    {
      en: 'Explain physical principles in agriculture and soil physics (bulk density, moisture content, energy balance)',
      am: 'በግብርና እና በአፈር ፊዚክስ ውስጥ ያሉ መርሆችን (የአፈር እፍጋት፣ እርጥበት እና የኃይል ሚዛን) ማብራራት'
    },
    {
      en: 'Differentiate operational principles of electric motors and electric generators in industry',
      am: 'በኢንዱስትሪ ውስጥ የኤሌክትሪክ ሞተር እና የጄኔሬተር የስራ መርሆችን ልዩነት መተንተን'
    },
    {
      en: 'Describe physical working principles of medical imaging modalities: X-ray, CT scan, MRI, and ultrasound sonography',
      am: 'የህክምና ምስል መመርመሪያዎችን ፊዚካዊ አሰራር መግለፅ፡ ኤክስ-ሬይ፣ ሲቲ ስካን፣ ኤምአርአይ እና አልትራሳውንድ'
    },
    {
      en: 'Apply radioactive decay laws to calculate archaeological ages using carbon-14 dating',
      am: 'የራዲዮአክቲቭ መበስበስ ህግን በመጠቀም የጥንታዊ ቅሪተ-አካላት እድሜን በካርቦን-14 ስሌት መገመት'
    },
    {
      en: 'Evaluate renewable and conventional energy systems including hydroelectric dams, wind turbines, and solar photovoltaic panels',
      am: 'የውሃ ኤሌክትሪክ ግድቦችን፣ የንፋስ ተርባይኖችን እና የፀሐይ ብርሃን ኃይል ቴክኖሎጂዎችን አሰራር መገምገም'
    }
  ],
  sections: [
    {
      id: 'phys-7-1',
      number: '7.1',
      title: {
        en: '7.1 Physics in Agriculture, Environment and Agrophysics',
        am: '፯.፩ ፊዚክስ በግብርና፣ በአካባቢ እና በአግሮፊዚክስ'
      },
      paragraphs: [
        {
          id: 'phys-p7-1',
          en: 'Agrophysics applies physics to agro-ecosystems to optimize agricultural productivity and environmental conservation. Soil physical properties directly influence crop root growth and water transport: Soil Bulk Density (dry soil mass per unit bulk volume: ρ_b = M_s / V_t), Soil Porosity (percentage of total pore volume: f = (1 - ρ_b / ρ_s) × 100%), and Gravimetric Soil Water Content (θ_g = M_w / M_s). The Surface Energy Balance equation balances solar radiation: 0 = R_n + G + LE + H, where R_n is net incoming solar radiation, G is soil heat flux, LE is latent heat of evapotranspiration, and H is sensible convective atmospheric heat flux.',
          am: 'አግሮፊዚክስ (Agrophysics) የግብርና ምርታማነትን ለማሳደግና የተፈጥሮ ሀብትን ለመጠበቅ የፊዚክስ ህጎችን በአፈርና በአየር ንብረት ላይ የሚተገብር ዘርፍ ነው። የአፈር ፊዚካዊ ባህሪያት የሰብል እድገትን ይወስናሉ፡ የአፈር የጅምላ እፍጋት (Bulk Density፡ ρ_b = M_s / V_t)፣ የአፈር ክፍተት ውድር (Porosity፡ f = (1 - ρ_b / ρ_s) × 100%) እና የአፈር እርጥበት መጠን (θ_g = M_w / M_s) ናቸው። የምድር ገጽ የኃይል ሚዛን ቀመር፡ 0 = R_n + G + LE + H ሆኖ የፀሐይ ጨረር (R_n) ከአፈር ሙቀት (G)፣ ከተክሎች ትነት (LE) እና ከከባቢ አየር ሙቀት (H) ጋር ያለውን ሚዛን ያሳያል።',
          subheading: {
            en: 'Soil Physics and Surface Energy Balance',
            am: 'የአፈር ፊዚክስ እና የገጽታ የኃይል ሚዛን'
          },
          highlightTerms: [
            { en: 'Agrophysics', am: 'አግሮፊዚክስ' },
            { en: 'Bulk Density', am: 'የጅምላ እፍጋት' },
            { en: 'Energy Balance', am: 'የኃይል ሚዛን' }
          ]
        }
      ]
    },
    {
      id: 'phys-7-2',
      number: '7.2',
      title: {
        en: '7.2 Physics in Industries: Electric Motors and Generators',
        am: '፯.፪ ፊዚክስ በኢንዱስትሪ፡ የኤሌክትሪክ ሞተሮች እና ጄኔሬተሮች'
      },
      paragraphs: [
        {
          id: 'phys-p7-2',
          en: 'Industrial automation relies on energy conversion machines: (1) Electric Motors convert electrical energy into mechanical rotational work, utilizing the magnetic torque τ = N I A B sin θ experienced by a current-carrying loop in an external magnetic field (commutators reverse current every half turn to ensure continuous rotation); (2) Electric Generators convert mechanical energy into electrical energy based on Faraday’s electromagnetic induction: rotating coils within magnetic fields produce sinusoidal alternating EMF E = N A B ω sin(ωt), powering national electric grids.',
          am: 'የኢንዱስትሪ ማሽነሪዎች የኃይል መለወጫ ፊዚክስን ይጠቀማሉ፡ (1) የኤሌክትሪክ ሞተር (Electric Motor) የኤሌክትሪክ ኃይልን ወደ ሜካኒካል እንቅስቃሴ ይቀይራል፤ የኤሌክትሪክ ሽቦ በማግኔት መስክ ውስጥ ሲቀመጥ በሚያጋጥመው የማዞሪያ ጉልበት (Torque፡ τ = N I A B sin θ) ይሽከረከራል፤ (2) ኤሌክትሪክ ጄኔሬተር (Electric Generator) ደግሞ የሜካኒካል ኃይልን ወደ ኤሌክትሪክ ይቀይራል፤ የፋራዴይን የኢንዳክሽን ህግ በመጠቀም ሽቦ በማግኔት መስክ ሲሽከረከር ተለዋዋጭ ቮልቴጅ E = N A B ω sin(ωt) ያመነጫል።',
          subheading: {
            en: 'Electric Motors vs Electric Generators',
            am: 'የኤሌክትሪክ ሞተር እና ጄኔሬተር ንፅፅር'
          },
          highlightTerms: [
            { en: 'Electric Motor', am: 'የኤሌክትሪክ ሞተር' },
            { en: 'Electric Generator', am: 'የኤሌክትሪክ ጄኔሬተር' },
            { en: 'Magnetic Torque', am: 'የማግኔት ማዞሪያ ጉልበት' }
          ]
        }
      ]
    },
    {
      id: 'phys-7-3',
      number: '7.3',
      title: {
        en: '7.3 Physics in Health Sciences: Medical Imaging and Radiation Safety',
        am: '፯.፫ ፊዚክስ በህክምና፡ የህክምና ምስል ምርመራ እና የጨረር ጥንቃቄ'
      },
      paragraphs: [
        {
          id: 'phys-p7-3',
          en: 'Modern medicine employs advanced physics imaging modalities: (1) Planar X-rays use high-energy ionizing photons (λ ~ 0.01-10 nm) absorbed preferentially by dense bone calcium to image fractures; (2) Computed Tomography (CT Scanner) rotates an X-ray tube around the patient, combining digital cross-sectional attenuation slices into 3D reconstructions; (3) Magnetic Resonance Imaging (MRI) uses strong superconducting magnetic fields (~1.5-3 T) and radiofrequency pulses to align and perturb the nuclear spins of hydrogen protons in water molecules, yielding superior soft-tissue contrast without ionizing radiation; (4) Ultrasound Sonography uses high-frequency acoustic waves (2-15 MHz) and piezoelectric transducers measuring reflected acoustic echoes.',
          am: 'ዘመናዊ ህክምና የተራቀቁ የፊዚክስ የምስል ቴክኖሎጂዎችን ይጠቀማል፡ (1) ኤክስ-ሬይ (X-ray) ከፍተኛ የኃይል ጨረር አጥንትን ዘልቆ ባለማለፉ ምክንያት ስብራትን ለማየት ይጠቅማል፤ (2) ሲቲ ስካን (CT Scanner) የኤክስ-ሬይ ቱቦን በሰውነት ዙሪያ በማሽከርከር ባለ 3D የሰውነት ክፍል ምስሎችን ያዘጋጃል፤ (3) ኤምአርአይ (MRI) እጅግ ከፍተኛ የማግኔት መስክና የሬዲዮ ሞገድ በመጠቀም በሰውነታችን ውስጥ ያሉ የሃይድሮጅን ፕሮቶኖችን በማነቃቃት የጡንቻና የውስጥ አካላትን ጥራት ያለው ምስል ያለ ምንም ጎጂ ጨረር ያነሳል፤ (4) አልትራሳውንድ (Ultrasound) ከፍተኛ የድምፅ ሞገድን (2-15 MHz) ተጠቅሞ የፅንስና የውስጥ አካላትን ሁኔታ ይመረምራል።',
          subheading: {
            en: 'Diagnostic Imaging: X-Ray, CT, MRI and Ultrasound',
            am: 'የምስል ምርመራ፡ ኤክስ-ሬይ፣ ሲቲ፣ ኤምአርአይ እና አልትራሳውንድ'
          },
          highlightTerms: [
            { en: 'X-Ray', am: 'ኤክስ-ሬይ' },
            { en: 'CT Scanner', am: 'ሲቲ ስካነር' },
            { en: 'MRI', am: 'ኤምአርአይ (MRI)' },
            { en: 'Ultrasound', am: 'አልትራሳውንድ' }
          ]
        },
        {
          id: 'phys-p7-4',
          en: 'Radiation safety distinguishes between Non-Ionizing Radiation (low frequency radio, microwave, visible light) and Ionizing Radiation (UV, X-rays, gamma rays) capable of removing electrons from atoms and damaging DNA. Radiation safety follows three fundamental cardinal principles: (1) Minimize Exposure Time; (2) Maximize Distance from the source (inverse square law: intensity I ∝ 1/r²); (3) Use appropriate Shielding (e.g. dense lead aprons for X-rays, thick concrete for gamma rays).',
          am: 'የጨረር ደህንነት በሁለት ይከፈላል፡ አዮናይዝ የማያደርግ ጨረር (የሬዲዮና የሚታይ ብርሃን) እና አዮናይዝ የሚያደርግ ጎጂ ጨረር (አልትራቫዮሌት፣ ኤክስ-ሬይ፣ ጋማ ሬይ) አተሞችን ሰብሮ ዲኤንኤን ሊጎዳ የሚችል። ሦስቱ የጨረር ጥንቃቄ ህጎች፡ (1) የቆይታ ጊዜን መቀነስ (Time)፤ (2) ከጨረር ምንጩ ያለውን ርቀት መጨመር (Distance፡ I ∝ 1/r²)፤ (3) መከላከያ ጋሻዎችን መጠቀም (Shielding - እንደ እርሳስ ልብስና ኮንክሪት) ናቸው።',
          subheading: {
            en: 'Radiation Safety and Protection Principles',
            am: 'የጨረር ደህንነት እና የመከላከያ መርሆች'
          },
          highlightTerms: [
            { en: 'Ionizing Radiation', am: 'አዮናይዝ የሚያደርግ ጨረር' },
            { en: 'Radiation Shielding', am: 'የጨረር መከላከያ' }
          ]
        }
      ]
    },
    {
      id: 'phys-7-4',
      number: '7.4',
      title: {
        en: '7.4 Physics in Archeology: Radiocarbon ¹⁴C Dating',
        am: '፯.፬ ፊዚክስ በአርኪኦሎጂ፡ የካርቦን-14 እድሜ ስሌት'
      },
      paragraphs: [
        {
          id: 'phys-p7-5',
          en: 'Radiocarbon dating, discovered by Willard Libby in 1949, determines the age of carbonaceous archaeological artifacts (wood, bone, charcoal). Cosmic ray neutrons transmute atmospheric nitrogen into radioactive carbon-14: ¹⁴N + n → ¹⁴C + p. Living organisms continually exchange CO₂, maintaining a constant ¹⁴C/¹²C ratio (~1.2 × 10⁻¹²). Upon biological death, carbon intake ceases and ¹⁴C decays via beta decay back to nitrogen with half-life t₁/₂ = 5,730 years: N(t) = N₀ e^(-λt), where decay constant λ = ln 2 / t₁/₂. Measuring residual activity calculates ages up to ~50,000 years, providing empirical dates for Ethiopian historical fossils like Lucy (Australopithecus afarensis dating using volcanic Argon-Argon).',
          am: 'የካርቦን-14 እድሜ ስሌት (Radiocarbon dating) በጥንታዊ ቅሪተ አካላት (አጥንት፣ እንጨት፣ የድንጋይ ከሰል) ላይ እድሜን ለማወቅ ያገለግላል። የጠፈር ጨረሮች በከባቢ አየር ናይትሮጅን ላይ ሲያርፉ ራዲዮአክቲቭ ካርቦን-14 ይፈጠራል፡ ¹⁴N + n → ¹⁴C + p። ሕያው ፍጥረታት እስካሉ ድረስ ካርቦን ስለሚመገቡ የካርቦን-14 መጠናቸው ቋሚ ነው። ፍጡሩ ሲሞት ግን ምግብ ስለሚቆም ካርቦን-14 በግማሽ እድሜው (Half-life = 5,730 ዓመታት) መበስበስ ይጀምራል፡ N(t) = N₀ e^(-λt)። የሚቀረውን የካርቦን-14 መጠን በመለካት እስከ 50,000 ዓመታት ድረስ ያሉ ቅርሶችን እድሜ ማስላት ይቻላል (እንደ ሉሲ ያሉ ጥንታዊ አጥንቶች ደግሞ በአርጎን-አርጎን ፊዚክስ ይሰላሉ)።',
          subheading: {
            en: 'Principles of Radiocarbon Dating',
            am: 'የካርቦን-14 እድሜ ስሌት መርሆች'
          },
          highlightTerms: [
            { en: 'Radiocarbon Dating', am: 'የካርቦን-14 እድሜ ስሌት' },
            { en: 'Half-Life', am: 'ግማሽ እድሜ (Half-Life)' },
            { en: 'Radioactive Decay', am: 'ራዲዮአክቲቭ መበስበስ' }
          ]
        }
      ]
    },
    {
      id: 'phys-7-5',
      number: '7.5',
      title: {
        en: '7.5 Earth & Space Sciences and Renewable Power Generation',
        am: '፯.፭ የመሬትና ጠፈር ሳይንስ እና የታዳሽ ኃይል ማመንጫዎች'
      },
      paragraphs: [
        {
          id: 'phys-p7-6',
          en: 'Physics underpins seismology and satellite communications: Seismometers record mechanical ground tremors using an inertial suspended mass detecting P-waves (compressional longitudinal) and S-waves (shear transverse). Satellites maintain circular orbits where gravitational attraction supplies centripetal force: G M_E m / r² = m v² / r ⇒ v_orbit = √(G M_E / r); geostationary satellites orbit at altitude 35,786 km matching Earth’s 24-hour rotation.',
          am: 'ፊዚክስ የመሬት መንቀጥቀጥ መመርመሪያ (ሴይስሞሜትር) እና የሳተላይት ግንኙነት መሰረት ነው፡ ሴይስሞሜትሮች የመሬት ውስጥ የ P-ሞገዶችንና የ S-ሞገዶችን ይለካሉ። ሳተላይቶች በምህዋራቸው ላይ የሚዞሩት የስበት ኃይል የማዕከል ሳቢ ፍጥነትን ስለሚሰጥ ነው፡ v_orbit = √(G M_E / r)፤ ጂኦስቴሽነሪ ሳተላይቶች በ 35,786 ኪ.ሜ ከፍታ ላይ ከመሬት ጋር እኩል በ 24 ሰዓታት ውስጥ ስለሚዞሩ በአንድ ቦታ ላይ የቆሙ ይመስላሉ።',
          subheading: {
            en: 'Seismology and Satellite Orbital Dynamics',
            am: 'ሴይስሞሎጂ እና የሳተላይት ምህዋር ዳይናሚክስ'
          },
          highlightTerms: [
            { en: 'Seismometer', am: 'ሴይስሞሜትር' },
            { en: 'Geostationary Orbit', am: 'ጂኦስቴሽነሪ ምህዋር' }
          ]
        },
        {
          id: 'phys-p7-7',
          en: 'Power generation transforms energy into electricity: (1) Hydroelectric Dams (such as the Grand Ethiopian Renaissance Dam - GERD) convert water gravitational potential energy (PE = m g h) into mechanical rotation via penstocks and water turbines, turning electromagnetic generators with electrical output P = η ρ Q g h (where η is turbine-generator efficiency); (2) Wind Turbines extract kinetic energy from airflow: P_wind = 1/2 ρ A v³; (3) Solar Photovoltaic (PV) cells exploit the quantum photoelectric and semiconductor photovoltaic effects, absorbing solar photons to generate electron-hole pairs and direct current; (4) Geothermal Energy extracts subterranean hydrothermal steam heated by radioactive decay in Earth’s mantle.',
          am: 'የኤሌክትሪክ ኃይል ማመንጫዎች የተፈጥሮ ኃይልን ወደ ኤሌክትሪክ ይቀይራሉ፡ (1) የውሃ ኤሌክትሪክ ግድቦች (እንደ ታላቁ የኢትዮጵያ ህዳሴ ግድብ - GERD) የውሃውን የተጠራቀመ የስበት ኃይል (PE = m g h) በፔንስቶክ ቱቦዎች አውርደው ተርባይኖችን በማሽከርከር ኤሌክትሪክ ያመነጫሉ (P = η ρ Q g h)፤ (2) የንፋስ ተርባይኖች የንፋስን የኪነቲክ ኃይል ወደ ኤሌክትሪክ ይቀይራሉ (P = 1/2 ρ A v³)፤ (3) የፀሐይ ብርሃን ፓነሎች (Solar PV) የፎቶኤሌክትሪክ ውጤትን በመጠቀም የፀሐይ ብርሃንን በቀጥታ ወደ DC ኤሌክትሪክ ይቀይራሉ፤ (4) የጂኦተርማል ኃይል ከመሬት ስር የሚወጣውን የተፈጥሮ እንፋሎት ለተርባይን ማሽከርከሪያነት ይጠቀማል።',
          subheading: {
            en: 'Hydropower (GERD), Wind, Solar and Geothermal Energy',
            am: 'የውሃ ኃይል (ህዳሴ ግድብ)፣ ንፋስ፣ ፀሐይ እና ጂኦተርማል'
          },
          highlightTerms: [
            { en: 'Hydropower', am: 'የውሃ ኤሌክትሪክ ኃይል' },
            { en: 'Photovoltaic Effect', am: 'የፎቶቮልታይክ ውጤት' },
            { en: 'Wind Power', am: 'የንፋስ ኃይል' }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Agrophysics',
      termAm: 'አግሮፊዚክስ',
      defEn: 'Interdisciplinary science applying physical methods to study agriculture, soil ecology, and climate interactions.',
      defAm: 'የፊዚክስ ህጎችን በግብርና፣ በአፈር አያያዝ እና በአካባቢ ጥበቃ ላይ የሚተገብር የሳይንስ ዘርፍ።'
    },
    {
      termEn: 'MRI (Magnetic Resonance Imaging)',
      termAm: 'ኤምአርአይ (MRI)',
      defEn: 'Non-invasive diagnostic imaging utilizing magnetic fields and radiofrequency pulses to visualize internal soft tissues without ionizing radiation.',
      defAm: 'ጎጂ ጨረር ሳይጠቀም በማግኔት መስክና በሬዲዮ ሞገድ የውስጥ አካላትን ምስል የሚያነሳ የህክምና መመርመሪያ።'
    },
    {
      termEn: 'Radiocarbon Dating',
      termAm: 'የካርቦን-14 እድሜ ስሌት',
      defEn: 'Archaeological dating technique determining artifact age based on radioactive beta decay of carbon-14 (half-life = 5,730 years).',
      defAm: 'የካርቦን-14 ራዲዮአክቲቭ መበስበስን በመጠቀም የጥንታዊ ቅሪተ አካላትን እድሜ የማስላት ቴክኒክ።'
    },
    {
      termEn: 'Hydroelectric Power',
      termAm: 'የውሃ ኤሌክትሪክ ኃይል',
      defEn: 'Electricity generated by converting gravitational potential energy of falling water into mechanical work in turbines and electrical energy in generators.',
      defAm: 'የሚወርድ ውሃ ያለውን የስበት ኃይል ወደ ተርባይን ማሽከርከሪያነትና ወደ ኤሌክትሪክ ኃይል የመቀየር ሂደት።'
    }
  ],
  summaries: [
    {
      id: 'sum-7-1',
      title: {
        en: 'Agriculture, Industry and Motors',
        am: 'ግብርና፣ ኢንዱስትሪ እና ሞተሮች'
      },
      bullets: [
        {
          en: 'Soil bulk density and energy balance 0 = R_n + G + LE + H govern agrophysics.',
          am: 'የአፈር ፊዚክስ እና የኃይል ሚዛን የግብርና ምርታማነትን ይቆጣጠራሉ።'
        },
        {
          en: 'Electric motors convert electrical to mechanical torque; Electric generators convert mechanical to electrical EMF.',
          am: 'ሞተር ኤሌክትሪክን ወደ ሜካኒካል እንቅስቃሴ ሲቀይር፣ ጄኔሬተር ደግሞ እንቅስቃሴን ወደ ኤሌክትሪክ ይቀይራል።'
        }
      ]
    },
    {
      id: 'sum-7-2',
      title: {
        en: 'Medical Imaging and Radiation Protection',
        am: 'የህክምና ምስል ምርመራ እና የጨረር ጥበቃ'
      },
      bullets: [
        {
          en: 'X-rays for dense bones; CT for 3D cross-sections; MRI for soft tissue; Ultrasound for non-ionizing acoustic echoes.',
          am: 'ኤክስ-ሬይ ለአጥንት፣ ሲቲ ለ 3D ምስል፣ ኤምአርአይ ለስስ አካላት፣ አልትራሳውንድ ደግሞ በድምፅ ሞገድ ይመረምራሉ።'
        },
        {
          en: 'Radiation safety rules: Minimize time, maximize distance, provide shielding.',
          am: 'የጨረር ጥንቃቄ ህጎች፡ ጊዜን መቀነስ፣ ርቀትን መጨመር እና መከላከያ መጠቀም ናቸው።'
        }
      ]
    },
    {
      id: 'sum-7-3',
      title: {
        en: 'Carbon-14 Dating and Renewable Energy',
        am: 'የካርቦን-14 እድሜ ስሌት እና ታዳሽ ኃይል'
      },
      bullets: [
        {
          en: 'Carbon-14 decays with 5,730-year half-life, dating fossils up to ~50,000 years.',
          am: 'ካርቦን-14 በ 5,730 ዓመታት ግማሽ እድሜው መበስበስ እስከ 50,000 ዓመታት ቅርሶችን ያሰላል።'
        },
        {
          en: 'GERD converts gravitational potential energy P = ηρQgh into clean national grid electricity.',
          am: 'የህዳሴው ግድብ የውሃን የስበት ኃይል ወደ ንጹህ የኤሌክትሪክ ኃይል ይቀይራል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-7-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'Why is Magnetic Resonance Imaging (MRI) preferred over CT scans for imaging brain soft tissue?',
        am: 'ለአንጎል ስስ ክፍሎች ምርመራ ከሲቲ ስካን ይልቅ ኤምአርአይ (MRI) የሚመረጠው ለምንድን ነው?'
      },
      answer: {
        en: 'CT scans rely on ionizing X-ray attenuation, which provides excellent contrast for dense calcium bones but relatively poor differentiation among soft tissues with similar densities. MRI utilizes strong magnetic fields and radio waves to detect variations in the concentration and chemical relaxation times of hydrogen protons (water content) in different soft tissues, yielding superior soft-tissue contrast with zero exposure to ionizing radiation.',
        am: 'ሲቲ ስካን አጥንትን በጥሩ ሁኔታ የሚያሳዩ ጎጂ አዮናይዝ የሚያደርጉ የኤክስ-ሬይ ጨረሮችን ይጠቀማል፤ ነገር ግን እፍጋታቸው ተመሳሳይ ለሆኑ የአንጎል ስስ ክፍሎች ጥራት ያለው ልዩነት መስጠት አይችልም። ኤምአርአይ ግን በማግኔት መስክና በሬዲዮ ሞገድ በሰውነት ውስጥ ያሉትን የውሃ ሃይድሮጅን ፕሮቶኖችን ስለሚለካ ያለ ምንም ጎጂ ጨረር እጅግ የላቀና ጥራት ያለው የስስ አካላት ምስል ይሰጣል።'
      },
      explanation: {
        en: 'Magnetic resonance differentiates proton relaxation times in water molecules, achieving high soft-tissue contrast without ionizing danger.',
        am: 'ኤምአርአይ በሰውነት ውስጥ ያሉ የውሃ ፕሮቶኖችን ንዝረት ስለሚለካ ያለ ምንም ጎጂ ጨረር ጥራት ያለው የስስ አካላት ምስል ይሰጣል።'
      }
    },
    {
      id: 'qna-7-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'An ancient piece of wood found in an archaeological excavation shows 25% of the carbon-14 activity of living trees. What is its approximate age (t₁/₂ = 5,730 years)?',
        am: 'በአርኪኦሎጂ ቁፋሮ የተገኘ ጥንታዊ እንጨት በሕያው ዛፍ ውስጥ ካለው የካርቦን-14 መጠን 25% ብቻ አለው። እድሜው ስንት ይሆናል (ግማሽ እድሜ = 5,730 ዓመታት)?'
      },
      answer: {
        en: 'A remaining activity of 25% corresponds to (1/2)² of the original value, indicating that exactly two half-lives have elapsed. Therefore, the age is: Age = 2 × t₁/₂ = 2 × 5,730 years = 11,460 years.',
        am: '25% የሚሆነው (1/2)² ስለሆነ ሁለት የግማሽ እድሜ ዑደቶች አልፈዋል ማለት ነው። ስለዚህ የእንጨቱ እድሜ፡ 2 × 5,730 = 11,460 ዓመታት ይሆናል።'
      },
      explanation: {
        en: 'Two half-lives have passed because (1/2)² = 0.25; multiplying 2 by 5,730 gives 11,460 years.',
        am: '25% የሚሆነው በሁለት የግማሽ እድሜ ዑደቶች በመሆኑ 2 ሲባዛ በ 5,730 ድምሩ 11,460 ዓመታት ይሆናል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-phys-7-1',
      number: 1,
      question: {
        en: 'Which medical imaging technique uses sound waves rather than electromagnetic radiation?',
        am: 'ከኤሌክትሮማግኔቲክ ጨረር ይልቅ የድምፅ ሞገድን የሚጠቀመው የህክምና ምስል መመርመሪያ የቱ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'X-ray radiography', am: 'ኤክስ-ሬይ' } },
        { id: 'b', text: { en: 'Computed Tomography (CT)', am: 'ሲቲ ስካን' } },
        { id: 'c', text: { en: 'Ultrasound Sonography', am: 'አልትራሳውንድ' } },
        { id: 'd', text: { en: 'PET Scan', am: 'ፔት ስካን' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'Ultrasound uses high-frequency longitudinal acoustic sound waves (2–15 MHz) reflected by acoustic impedance boundaries, making it completely safe and non-ionizing.',
        am: 'አልትራሳውንድ ከ 2 እስከ 15 ሜጋኸርዝ ያሉ የድምፅ ሞገዶችን ስለሚጠቀም ምንም አይነት ጨረር የሌለው አስተማማኝ መመርመሪያ ነው።'
      }
    },
    {
      id: 'quiz-phys-7-2',
      number: 2,
      question: {
        en: 'In a hydroelectric power station like GERD, electric power generation depends directly upon:',
        am: 'እንደ ህዳሴው ግድብ ባሉ የውሃ ኤሌክትሪክ ማመንጫዎች ውስጥ የሚመነጨው ኃይል በቀጥታ የሚመሰረተው በምን ላይ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Water volume flow rate Q and effective hydraulic head height h', am: 'በሚፈሰው የውሃ መጠን (Q) እና በከፍታው ርቀት (h)' } },
        { id: 'b', text: { en: 'Atmospheric pressure only', am: 'በከባቢ አየር ግፊት ብቻ' } },
        { id: 'c', text: { en: 'Water salinity', am: 'በውሃው የጨው መጠን' } },
        { id: 'd', text: { en: 'Ambient air temperature', am: 'በአካባቢው የሙቀት መጠን' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Hydroelectric power output is P = η ρ Q g h, which is directly proportional to water flow rate Q (m³/s) and the hydraulic head height h (m).',
        am: 'የውሃ ኤሌክትሪክ ኃይል P = η ρ Q g h ሲሆን በቀጥታ የሚመሰረተው በሚፈሰው የውሃ መጠን (Q) እና በግድቡ ከፍታ (h) ላይ ነው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-phys-7-1',
      chapter: 7,
      termEn: 'Electric Motor',
      termAm: 'የኤሌክትሪክ ሞተር',
      defEn: 'Device that converts electrical energy into mechanical rotational work using magnetic torque.',
      defAm: 'የኤሌክትሪክ ኃይልን በማግኔት ጉልበት አማካኝነት ወደ ሜካኒካል እንቅስቃሴ የሚቀይር መሳሪያ።'
    },
    {
      id: 'fc-phys-7-2',
      chapter: 7,
      termEn: 'Radiocarbon Dating',
      termAm: 'የካርቦን-14 እድሜ ስሌት',
      defEn: 'Dating method based on the decay of radioactive ¹⁴C with a half-life of 5,730 years.',
      defAm: 'በ 5,730 ዓመታት የካርቦን-14 ግማሽ እድሜ መበስበስ ላይ የተመሰረተ የጥንታዊ ቅርሶች እድሜ ስሌት።'
    }
  ]
};
