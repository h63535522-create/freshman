import { Chapter } from '../../types';

export const geographyChapter1: Chapter = {
  id: 401,
  number: 1,
  title: {
    en: 'Introduction: Meaning, Scope, Themes, Location, Shape, Size & Map Reading',
    am: 'መግቢያ፡ የጂኦግራፊ ምንነት፣ ወሰን፣ ጭብጦች፣ የኢትዮጵያ መገኛ፣ ቅርፅ፣ ስፋት እና የካርታ ንባብ'
  },
  universityAuthor: 'Dr. Teferi Mekonnen (AAU), Mr. Nigatu Gebremedhin (Wolkite Univ.), Dr. Alem-meta Assefa (Wollo Univ.), Dr. Binyam Moreda (Hawassa Univ.) - MoE (Sept. 2019)',
  overview: {
    en: 'This introductory chapter establishes the scientific definition, scope, two continuums, and five fundamental themes of Geography. It analyzes Ethiopia’s astronomical (3°N–15°N, 33°E–48°E) and relative locations in the Horn of Africa, its 1,106,000 km² landmass, indices of compactness, and the essential tenets of topographic and statistical map reading.',
    am: 'ይህ የመግቢያ ምዕራፍ የጂኦግራፊን ሳይንሳዊ ምንነት፣ ወሰን፣ ሁለቱን ቀጣይ ዘርፎች እና አምስቱን መሰረታዊ ጭብጦች ያብራራል። በተጨማሪም የኢትዮጵያን የስነ-ፈለክ (ከ3°–15° ሰ፣ 33°–48° ም) እና አንጻራዊ መገኛ፣ የ1,106,000 ካሬ ኪ.ሜ ስፋት፣ የቅርፅ ጥመቅነት መለኪያዎችን እና የካርታ ንባብ መሰረታዊ መርሆችን ይተነትናል።'
  },
  learningOutcomes: [
    {
      en: 'Comprehend the scientific definition, scope, and the two continuums of Geography.',
      am: 'የጂኦግራፊን ሳይንሳዊ ምንነት፣ ወሰን እና ሁለቱን ቀጣይ ዘርፎች በሚገባ መረዳት።'
    },
    {
      en: 'Explain the five core themes of Geography: Location, Place, Human-Environment Interaction, Movement, and Region.',
      am: 'አምስቱን መሰረታዊ የጂኦግራፊ ጭብጦች፡ መገኛ፣ ስፍራ፣ የሰውና አካባቢ መስተጋብር፣ እንቅስቃሴ እና ቀጠናን ማብራራት።'
    },
    {
      en: 'Explicate the climatic, socio-cultural, and geopolitical implications of Ethiopia’s location, shape, and size.',
      am: 'የኢትዮጵያ መገኛ፣ ቅርፅና ስፋት በአየር ንብረት፣ ማህበራዊ-ባህላዊ እና ጂኦ-ፖለቲካዊ ሁኔታዎች ላይ ያላቸውን ተፅዕኖ መተንተን።'
    },
    {
      en: 'Master the basic principles and marginal information of map reading (scale, grid reference, orientation).',
      am: 'የካርታ ንባብ መሰረታዊ መርሆችንና የህዳግ መረጃዎችን (መጠን/ስኬል፣ የፍርግርግ መጋጠሚያ፣ አቅጣጫ) ጠንቅቆ ማወቅ።'
    }
  ],
  sections: [
    {
      id: 'sec-geog-1-1',
      number: '1.1',
      title: {
        en: 'Geography: Definition, Scope, Approaches and Themes',
        am: 'ጂኦግራፊ፡ ምንነት፣ ወሰን፣ አቀራረቦች እና ጭብጦች'
      },
      paragraphs: [
        {
          id: 'p-geog-1-1-1',
          subheading: {
            en: '1.1.1 Meaning and Scope of Geography',
            am: '1.1.1 የጂኦግራፊ ምንነት እና ወሰን'
          },
          en: 'Geography is the scientific study of the Earth that describes and analyses spatial and temporal variations of physical, biological, and human phenomena, and their interrelationships and dynamism over the surface of the Earth. The scope of Geography is the surface of the Earth—the very thin interface where the atmosphere, lithosphere, hydrosphere, and biosphere converge to provide the habitable zone for human life.',
          am: 'ጂኦግራፊ በመሬት ገጽ ላይ የሚገኙ የተፈጥሯዊ፣ ህይወታዊ እና ሰዋዊ ክስተቶችን የቦታ እና የጊዜ ልዩነት፣ የእርስ በእርስ ቁርኝትና ተለዋዋጭነት የሚገልጽ እና የሚተነትን ሳይንሳዊ ጥናት ነው። የጂኦግራፊ ወሰን የመሬት ገጽታ ሲሆን ይህም ከባቢ አየር (atmosphere)፣ ድንጋያማ መሬት (lithosphere)፣ የውሃ አካላት (hydrosphere) እና ህይወት ያላቸው ነገሮች (biosphere) ተገናኝተው ለሰው ልጅ መኖሪያነት ምቹ ሁኔታን የሚፈጥሩበት ቀጭን ቀጠና ነው።',
          highlightTerms: [
            {
              en: 'Geography',
              am: 'ጂኦግራፊ',
              defEn: 'Scientific study of the Earth describing spatial and temporal variations of physical and human phenomena.',
              defAm: 'የመሬት ገጽታን የተፈጥሮና የሰው ሰራሽ ክስተቶች ስርጭትና መስተጋብር የሚያጠና ሳይንስ።'
            },
            {
              en: 'Scope of Geography',
              am: 'የጂኦግራፊ ወሰን',
              defEn: 'The Earth surface interface of atmosphere, lithosphere, hydrosphere, and biosphere.',
              defAm: 'ከባቢ አየር፣ መሬት፣ ውሃ እና ህይወት ያላቸው ነገሮች የሚገናኙበት የመሬት ገጽ ቀጠና።'
            }
          ]
        },
        {
          id: 'p-geog-1-1-2',
          subheading: {
            en: '1.1.2 Approaches and the Five Basic Themes of Geography',
            am: '1.1.2 የጂኦግራፊ አቀራረቦች እና አምስቱ መሰረታዊ ጭብጦች'
          },
          en: 'Geography can be approached along two continuums: the human-physical continuum and the topical-regional continuum. Geography is structured around five basic themes: 1) Location (absolute/astronomical defined by latitude/longitude, and relative defined by vicinal neighbours or water bodies); 2) Place (physical and human attributes including toponym, site, and situation); 3) Human-Environment Interaction (dependency, adaptation, and modification); 4) Movement (translocation of human beings, goods, and ideas); and 5) Region (a geographic area characterized by distinctive homogeneity as a formal region or functional linkages as a nodal region).',
          am: 'ጂኦግራፊ በሁለት ቀጣይ መስመሮች ይቀርባል፡ የሰዋዊ-ተፈጥሯዊ መስመር እና የአርዕስታዊ-ቀጠናዊ (topical-regional) መስመር። ጂኦግራፊ በአምስት መሰረታዊ ጭብጦች ላይ የተዋቀረ ነው፡ ፩) መገኛ (ፍጹማዊ/ስነ-ፈለካዊ በኬክሮስና ኬንትሮስ የሚገለፅ፣ እና አንጻራዊ በጎረቤቶችና የውሃ አካላት የሚገለፅ)፤ ፪) ስፍራ (የቦታው ስም/toponym፣ ገጽታ/site እና አካባቢያዊ ሁኔታ/situation)፤ ፫) የሰውና አካባቢ መስተጋብር (ጥገኝነት፣ መላመድ እና ማሻሻል/መለወጥ)፤ ፬) እንቅስቃሴ (የሰዎች፣ የሸቀጦች እና የሀሳቦች ከአንድ ቦታ ወደ ሌላ መዘዋወር)፤ እና ፭) ቀጠና (ተመሳሳይ ተፈጥሯዊ ወይም ባህላዊ መገለጫ ያለው ፎርማል ቀጠና ወይም በተግባራዊ ትስስር የተያያዘ ኖዳል ቀጠና)።',
          highlightTerms: [
            {
              en: 'Five Themes of Geography',
              am: 'አምስቱ የጂኦግራፊ ጭብጦች',
              defEn: 'Location, Place, Human-Environment Interaction, Movement, and Region.',
              defAm: 'መገኛ፣ ስፍራ፣ የሰውና አካባቢ መስተጋብር፣ እንቅስቃሴ እና ቀጠና።'
            },
            {
              en: 'Human-Environment Interaction',
              am: 'የሰውና አካባቢ መስተጋብር',
              defEn: 'The three distinct aspects: dependency on nature, adaptation to climate, and modification of surroundings.',
              defAm: 'በተፈጥሮ ላይ ጥገኛ መሆን፣ ከአካባቢ ጋር መላመድ እና አካባቢን ለኑሮ ምቹ አድርጎ የመቀየር ሂደት።'
            }
          ]
        }
      ]
    },
    {
      id: 'sec-geog-1-2',
      number: '1.2',
      title: {
        en: 'Location, Shape and Size of Ethiopia and the Horn',
        am: 'የኢትዮጵያ እና የአፍሪካ ቀንድ መገኛ፣ ቅርፅ እና ስፋት'
      },
      paragraphs: [
        {
          id: 'p-geog-1-2-1',
          subheading: {
            en: '1.2.1 Astronomical and Relative Location of Ethiopia',
            am: '1.2.1 የኢትዮጵያ የስነ-ፈለክ እና አንጻራዊ መገኛ'
          },
          en: 'Astronomically, Ethiopia is a landlocked Horn of Africa country located between 3°N (Moyale) and 15°N (Bademe in northern Tigray) latitudes, and 33°E (Akobo) to 48°E (tip of Ogaden) longitudes. The east-west longitudinal span (15°) is longer than its north-south latitudinal span (12°), resulting in a one-hour solar time difference between its eastern and western extremities, though the standard UTC+3 time zone is utilized nationwide. Relatively, Ethiopia is bordered vicinally by Sudan (west/northwest), South Sudan (southwest), Djibouti (east), Somalia (east/southeast), Eritrea (north/northeast), and Kenya (south), and sits southwest of the Arabian Peninsula in the Nile Basin.',
          am: 'በስነ-ፈለካዊ (ፍጹም) መገኛዋ ኢትዮጵያ በአፍሪካ ቀንድ ውስጥ ከ3° ሰሜን (ሞያሌ) እስከ 15° ሰሜን (ባደመ በሰሜን ትግራይ) ኬክሮስ፣ እና ከ33° ምስራቅ (አኮቦ) እስከ 48° ምስራቅ (የኦጋዴን ጫፍ) ኬንትሮስ መካከል ትገኛለች። የምስራቅ-ምዕራብ ርዝመቷ (15°) ከሰሜን-ደቡብ (12°) የሚበልጥ ሲሆን በምስራቅና በምዕራብ ጫፎቿ መካከል የአንድ ሰዓት የፀሐይ ሰዓት ልዩነት ቢኖርም ሀገሪቱ በሙሉ የ+3 ሰዓት ዞን (UTC+3) ትጠቀማለች። በአንጻራዊ መገኛዋ በሱዳን፣ ደቡብ ሱዳን፣ ጅቡቲ፣ ሶማሊያ፣ ኤርትራ እና ኬንያ የተከበበች ወደብ-አልባ ሀገር ናት።',
          highlightTerms: [
            {
              en: 'Astronomical Location',
              am: 'የስነ-ፈለክ መገኛ',
              defEn: 'Location defined by coordinates of latitude (3°N-15°N) and longitude (33°E-48°E).',
              defAm: 'በኬክሮስ (3°-15° ሰ) እና ኬንትሮስ (33°-48° ም) የሚገለፅ ፍጹማዊ መገኛ።'
            },
            {
              en: 'Relative Location',
              am: 'አንጻራዊ መገኛ',
              defEn: 'Position expressed with reference to adjacent countries (vicinal) and water bodies.',
              defAm: 'አንድ ሀገር ከአጎራባች ሀገራት፣ የውሃ አካላትና አህጉራት አንጻር ያላት መገኛ።'
            }
          ]
        },
        {
          id: 'p-geog-1-2-2',
          subheading: {
            en: '1.2.2 Implications of Location, Size and Shape',
            am: '1.2.2 የመገኛ፣ ስፋት እና ቅርፅ አንድምታዎች'
          },
          en: 'Ethiopia’s total area of approximately 1,106,000 km² ranks it 8th largest in Africa and 25th in the world, spanning 1,639 km east-west and 1,577 km north-south, with water bodies occupying 0.7%. Its large size affords diverse agro-ecological zones, abundant natural resources, extensive arable land, and defensive strategic depth, but demands substantial capital for infrastructure, extensive border defense forces, and complex administration. In shape, countries fall into compact, fragmented, elongated, perforated, or protruded. Compactness is quantified using Area-Boundary (A/B) ratio, Boundary-Circumference (B/C) ratio, and Area-Circumference (A/C) ratio. Ethiopia has an A/B ratio of 210.27 and B/C ratio of 1.41 (close to 1), demonstrating an exceptionally compact, circular-approximating shape that facilitates national defense and administrative integration.',
          am: 'የኢትዮጵያ ጠቅላላ ስፋት 1,106,000 ካሬ ኪሎ ሜትር ሲሆን ከአፍሪካ 8ኛ፣ ከዓለም 25ኛ ደረጃን ይይዛል። የምስራቅ-ምዕራብ ርዝመቷ 1,639 ኪ.ሜ፣ የሰሜን-ደቡብ ደግሞ 1,577 ኪ.ሜ ሲሆን 0.7% በውሃ አካላት የተሸፈነ ነው። ይህ ሰፊ ስፋት በርካታ ስነ-ምህዳሮችን፣ የተፈጥሮ ሀብትን፣ ሰፊ ሊታረስ የሚችል መሬትንና የመከላከያ ጥልቀትን ሲሰጣት፤ በሌላ በኩል ከፍተኛ የመሰረተ-ልማት ወጪንና ሰፊ ድንበር ጠባቂ ጦርን ይጠይቃል። በቅርፅ ረገድ ኢትዮጵያ የተጣበበ (compact) ቅርፅ ያላት ሲሆን የB/C ምጥጥኗ 1.41 (ወደ 1 የተጠጋ) በመሆኑ ለመከላከያ እና ለአስተዳደራዊ ትስስር እጅግ አመቺ ነው።',
          highlightTerms: [
            {
              en: 'Compact Shape',
              am: 'የተጣበበ ቅርፅ',
              defEn: 'Shape where distance from center to borders does not vary greatly, facilitating integration.',
              defAm: 'ከመሀል ወደ ድንበሮች ያለው ርቀት ብዙ የማይለያይና ለአስተዳደር አመቺ የሆነ ቅርፅ።'
            },
            {
              en: 'Boundary-Circumference Ratio',
              am: 'የድንበርና ዙሪያ ምጥጥን (B/C)',
              defEn: 'Index measuring how closely boundary approximates the circumference of an equal-area circle.',
              defAm: 'የአንድ ሀገር ድንበር ተመጣጣኝ ስፋት ካለው ክብ ዙሪያ ጋር ያለውን ቅርበት የሚለካ ምጥጥን።'
            }
          ]
        }
      ]
    },
    {
      id: 'sec-geog-1-3',
      number: '1.3',
      title: {
        en: 'Basic Skills of Map Reading',
        am: 'የካርታ ንባብ መሰረታዊ ክህሎቶች'
      },
      paragraphs: [
        {
          id: 'p-geog-1-3-1',
          subheading: {
            en: '1.3.1 Definition, Types and Marginal Elements of Maps',
            am: '1.3.1 የካርታ ምንነት፣ አይነቶች እና የህዳግ መረጃዎች'
          },
          en: 'A map is a two-dimensional scaled representation of part or the whole of the Earth surface on a flat medium such as paper or screen. Maps are classified into Topographical maps (depicting natural terrain, relief, and manmade cultural features) and Special purpose/statistical maps (displaying specific attributes like rainfall, temperature, population, or soils). Essential marginal elements include: 1) Title (topic of map); 2) Legend/Key (conventional signs and symbols); 3) Scale (ratio between map distance and ground distance, expressed as representative fraction, verbal statement, or graphic bar); 4) North arrow (orientation); 5) Margin (frame defining the boundary); and 6) Date of compilation (indicating currency). Grid references (eastings and northings) allow precise spatial pinpointing.',
          am: 'ካርታ የመላው ወይም የከፊል መሬት ገጽታን በወረቀት ወይም በጠፍጣፋ ነገር ላይ በስኬል ተሰልቶ በሁለት አቅጣጫ (2D) የሚቀርብበት ስዕላዊ መግለጫ ነው። ካርታዎች በመልክአ-ምድራዊ (ቶፖግራፊክ - የተፈጥሮና ሰው ሰራሽ ገጽታዎችን የሚያሳዩ) እና በልዩ/ስታቲስቲካዊ (እንደ ዝናብ፣ ሙቀት፣ ህዝብና አፈር ያሉ ነጠላ መረጃዎችን የሚያሳዩ) ተብለው ይከፈላሉ። ዋና ዋና የካርታ የህዳግ መረጃዎች (elements)፡ ፩) ርዕስ፣ ፪) መፍቻ/ቁልፍ (legend)፣ ፫) ስኬል (የካርታና የመሬት ላይ ትክክለኛ ርቀት ምጥጥን)፣ ፬) የሰሜን አቅጣጫ ጠቋሚ ቀስት፣ ፭) ፍሬም/ዳርቻ (margin) እና ፮) የታተመበት ቀን ናቸው። የፍርግርግ መስመሮች (Grid reference) ትክክለኛ ቦታን ለመጠቆም ያገለግላሉ።',
          highlightTerms: [
            {
              en: 'Topographical Map',
              am: 'ቶፖግራፊክ ካርታ',
              defEn: 'Map depicting both physical relief and cultural manmade features at accurate scale.',
              defAm: 'የመሬት አቀማመጥን፣ ከፍታን እና ሰው ሰራሽ ገጽታዎችን በስኬል የሚያሳይ ካርታ።'
            },
            {
              en: 'Representative Fraction (RF)',
              am: 'ተወካይ ክፍልፋይ (RF)',
              defEn: 'Scale expressing ratio of map distance to ground distance in identical units (e.g. 1:50,000).',
              defAm: 'የካርታ ርቀትን ከመሬት ርቀት ጋር በአንድ አይነት መስፈሪያ ክፍልፋይ የሚያሳይ ስኬል።'
            }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Geography',
      termAm: 'ጂኦግራፊ',
      defEn: 'Scientific study of the Earth describing and analyzing spatial and temporal variations of physical, biological, and human phenomena.',
      defAm: 'የመሬት ገጽ የተፈጥሮና የሰው ሰራሽ ክስተቶች ስርጭት፣ ልዩነትና መስተጋብር ሳይንሳዊ ጥናት።'
    },
    {
      termEn: 'Astronomical Location',
      termAm: 'የስነ-ፈለክ መገኛ',
      defEn: 'Coordinate-based absolute location of Ethiopia between 3°N–15°N latitudes and 33°E–48°E longitudes.',
      defAm: 'በኬክሮስ (3°–15° ሰ) እና ኬንትሮስ (33°–48° ም) የሚገለፅ የኢትዮጵያ ፍጹማዊ መገኛ።'
    },
    {
      termEn: 'Compactness Index',
      termAm: 'የቅርፅ ጥመቅነት መለኪያ',
      defEn: 'Measures like B/C and A/B ratios assessing how closely a country’s boundary approximates a circle.',
      defAm: 'የአንድ ሀገር ድንበር ክብ ከመሰለ ፍጹም ቅርፅ ጋር ያለውን ቅርበት የሚለኩ ስሌቶች።'
    },
    {
      termEn: 'Map Scale',
      termAm: 'የካርታ ስኬል',
      defEn: 'The mathematical ratio between distance measured on a map and actual distance on the ground.',
      defAm: 'በካርታ ላይ በሚለካ ርቀት እና በመሬት ላይ ባለው ትክክለኛ ርቀት መካከል ያለው ምጥጥን።'
    }
  ],
  summaries: [
    {
      id: 'sum-geog-1-1',
      title: {
        en: 'Foundations of Geography, Ethiopian Position, and Cartography',
        am: 'የጂኦግራፊ መሰረቶች፣ የኢትዮጵያ መገኛና ካርቶግራፊ ማጠቃለያ'
      },
      bullets: [
        {
          en: 'Geography examines the Earth’s surface interface of atmosphere, lithosphere, hydrosphere, and biosphere across five themes: location, place, human-environment interaction, movement, and region.',
          am: 'ጂኦግራፊ የመሬት ገጽን ከባቢ አየር፣ ድንጋያማ መሬት፣ የውሃ አካላትና ህይወት ያላቸው ነገሮች መስተጋብር በአምስት ጭብጦች (መገኛ፣ ስፍራ፣ መስተጋብር፣ እንቅስቃሴ፣ ቀጠና) ያጠናል።'
        },
        {
          en: 'Ethiopia is located between 3°N (Moyale) to 15°N (Bademe) latitudes and 33°E (Akobo) to 48°E (Ogaden) longitudes, experiencing a modified tropical climate and a 1-hour longitudinal solar difference.',
          am: 'ኢትዮጵያ ከ3° ሰ (ሞያሌ) እስከ 15° ሰ (ባደመ) እና ከ33° ም (አኮቦ) እስከ 48° ም (ኦጋዴን) የምትገኝ ሲሆን በከፍታ የተስተካከለ ሞቃታማ አየርና የ1 ሰዓት የፀሐይ ሰዓት ልዩነት አላት።'
        },
        {
          en: 'Covering 1,106,000 km², Ethiopia is the 8th largest country in Africa, with a compact circular-approximating shape (B/C ratio 1.41) that assists territorial defense.',
          am: 'በ1,106,000 ካሬ ኪ.ሜ ስፋት ከአፍሪካ 8ኛ የሆነችው ኢትዮጵያ የተጣበበ ክብ መሰል ቅርፅ (B/C ምጥጥን 1.41) ያላት በመሆኑ ለአስተዳደርና ለመከላከያ አመቺ ናት።'
        },
        {
          en: 'Effective map reading requires understanding marginal information (title, legend, scale, north arrow, margin, date) and applying grid coordinates.',
          am: 'ትክክለኛ የካርታ ንባብ የህዳግ መረጃዎችን (ርዕስ፣ መፍቻ፣ ስኬል፣ የሰሜን ቀስት፣ ማዕቀፍ፣ የታተመበት ቀን) እና የፍርግርግ መጋጠሚያዎችን በሚገባ መጠቀምን ይጠይቃል።'
        }
      ]
    }
  ],
  matching: [
    {
      id: 'match-geog-1-1',
      concept: { en: 'Astronomical Location', am: 'የስነ-ፈለክ መገኛ' },
      definition: { en: 'Location defined by coordinates: 3°N–15°N latitude and 33°E–48°E longitude', am: 'በኬክሮስ (3°–15° ሰ) እና በኬንትሮስ (33°–48° ም) የሚገለጽ ፍጹማዊ መገኛ' }
    },
    {
      id: 'match-geog-1-2',
      concept: { en: 'Boundary-Circumference (B/C) Ratio', am: 'የድንበርና ዙሪያ ምጥጥን (B/C)' },
      definition: { en: 'Measure of compactness where values closer to 1 indicate near-circular compact shapes', am: 'ውጤቱ ወደ 1 የተጠጋ ሲሆን ሀገሪቱ ክብ መሰል የተጣበበ ቅርፅ እንዳላት የሚያሳይ ስሌት' }
    },
    {
      id: 'match-geog-1-3',
      concept: { en: 'Toponym', am: 'የቦታ መጠሪያ ስም (Toponym)' },
      definition: { en: 'The name derived for a specific geographical place or feature under the Place theme', am: 'በስፍራ ጭብጥ ስር ለአንድ መልክአ-ምድራዊ ቦታ የሚሰጥ መጠሪያ ስም' }
    },
    {
      id: 'match-geog-1-4',
      concept: { en: 'Representative Fraction (RF)', am: 'ተወካይ ክፍልፋይ' },
      definition: { en: 'Map scale expressed as a unitless numerical ratio such as 1:50,000', am: 'መስፈሪያ የሌለው እንደ 1:50,000 ባለ የቁጥር ክፍልፋይ የሚገለጽ የካርታ ስኬል' }
    },
    {
      id: 'match-geog-1-5',
      concept: { en: 'Vicinal Location', am: 'ጎረቤታዊ መገኛ' },
      definition: { en: 'Relative location of a country with reference to its immediate neighbouring states', am: 'የአንድ ሀገር መገኛ አዋሳኝ ከሆኑት አጎራባች ሀገራት አንጻር ሲገለጽ' }
    }
  ],
  qna: [
    {
      id: 'qna-geog-1-1',
      number: 1,
      question: {
        en: 'What are the major advantages and disadvantages of Ethiopia’s large land size (1,106,000 km²)?',
        am: 'የኢትዮጵያ ሰፊ የመሬት ስፋት (1,106,000 ካሬ ኪ.ሜ) ዋና ዋና ጥቅሞችና ተግዳሮቶች ምንድን ናቸው?'
      },
      answer: {
        en: 'Advantages include diverse agro-ecological zones, abundant natural resources, extensive arable land, and defensive strategic depth. Disadvantages include demanding enormous capital for road/rail infrastructure, requiring a large military to patrol 5,260 km of borders, and administrative difficulties.',
        am: 'ጥቅሞቹ፡ በርካታ የተፈጥሮ አየር ንብረት ዞኖች፣ የተትረፈረፈ የተፈጥሮ ሀብት፣ ሰፊ የእርሻ መሬት እና የመከላከያ ስትራቴጂካዊ ጥልቀት ናቸው። ተግዳሮቶቹ፡ ለመሰረተ ልማት ከፍተኛ ካፒታል መጠየቁ፣ 5,260 ኪ.ሜ ድንበር ለመጠበቅ ሰፊ ጦር ማሰማራት እና አስተዳደራዊ ውስብስብነት ናቸው።'
      },
      explanation: {
        en: 'As documented in Table 1.2 of the curriculum, size directly influences both resource potential and governance logistics.',
        am: 'በስርዓተ-ትምህርቱ ሰንጠረዥ 1.2 እንደተገለጸው፣ ስፋት በሀብት አቅርቦትና በአስተዳደር ስራ ላይ ቀጥተኛ ተፅዕኖ አለው።'
      },
      category: 'conceptual'
    },
    {
      id: 'qna-geog-1-2',
      number: 2,
      question: {
        en: 'How does Ethiopia’s Boundary-Circumference ratio prove its compact shape, and why is this advantageous?',
        am: 'የኢትዮጵያ የድንበርና ዙሪያ (B/C) ምጥጥን የተጣበበ ቅርፅ እንዳላት እንዴት ያረጋግጣል? ይህስ ለምን ይጠቅማል?'
      },
      answer: {
        en: 'Ethiopia’s B/C ratio is 1.41. Because 1 represents a theoretically perfect circle, 1.41 indicates that the border closely hugs its geographic center without extreme protrusions. This compactness minimizes border perimeter relative to area, lowering border patrol costs and facilitating socio-economic and cultural integration.',
        am: 'የኢትዮጵያ B/C ምጥጥን 1.41 ነው። 1 ፍጹም ክብ ቅርፅን የሚወክል በመሆኑ፣ 1.41 ድንበሯ ከመሀል እምብርት ብዙ ሳይርቅ የተጣበበ መሆኑን ያሳያል። ይህ ቅርፅ የድንበር ርዝመትን በመቀነስ ለመከላከያ እና ለህዝቦች ማህበራዊና ኢኮኖሚያዊ ትስስር እጅግ አመቺ ነው።'
      },
      explanation: {
        en: 'In contrast to elongated states like Chile or fragmented island states, compact states have shorter internal transport lines from the center.',
        am: 'እንደ ቺሊ ካሉ ረዣዥም ወይም ደሴታማ ሀገራት በተቃራኒ፣ የተጣበቡ ሀገራት ከመሀል ወደ ዳርቻዎች አጫጭር የትራንስፖርት መስመሮች አሏቸው።'
      },
      category: 'case_study'
    }
  ],
  quizzes: [
    {
      id: 'quiz-geog-1-1',
      number: 1,
      question: {
        en: 'Astronomically, what is the northernmost latitudinal point of Ethiopia?',
        am: 'በስነ-ፈለካዊ መገኛ መሰረት የኢትዮጵያ እጅግ ሰሜናዊው ጫፍ የትኛው ነው?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Moyale at 3°N', am: 'ሞያሌ በ3° ሰሜን' } },
        { id: 'opt-2', text: { en: 'Bademe in Tigray at 15°N', am: 'ባደመ በትግራይ በ15° ሰሜን' } },
        { id: 'opt-3', text: { en: 'Akobo at 33°E', am: 'አኮቦ በ33° ምስራቅ' } },
        { id: 'opt-4', text: { en: 'Ras Dashen at 13°N', am: 'ራስ ዳሽን በ13° ሰሜን' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Ethiopia’s northernmost tip is Bademe in northern Tigray located at 15°N latitude, while the southernmost point is Moyale at 3°N.',
        am: 'የኢትዮጵያ እጅግ ሰሜናዊ ጫፍ በ15° ሰሜን ኬክሮስ ላይ የሚገኘው ባደመ (ትግራይ) ሲሆን፣ ደቡባዊ ጫፏ ሞያሌ (3° ሰ) ነው።'
      }
    },
    {
      id: 'quiz-geog-1-2',
      number: 2,
      question: {
        en: 'Which of the following is NOT one of the five core themes of Geography?',
        am: 'ከሚከተሉት ውስጥ አምስቱ መሰረታዊ የጂኦግራፊ ጭብጦች ውስጥ የማይካተተው የትኛው ነው?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Location', am: 'መገኛ' } },
        { id: 'opt-2', text: { en: 'Human-Environment Interaction', am: 'የሰውና አካባቢ መስተጋብር' } },
        { id: 'opt-3', text: { en: 'Tectonic Subduction', am: 'ቴክቶኒክ ሰብዳክሽን' } },
        { id: 'opt-4', text: { en: 'Movement', am: 'እንቅስቃሴ' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'The five core themes are Location, Place, Human-Environment Interaction, Movement, and Region. Tectonic subduction is a specific geological process, not an overarching theme.',
        am: 'አምስቱ ዋና ዋና ጭብጦች መገኛ፣ ስፍራ፣ የሰውና አካባቢ መስተጋብር፣ እንቅስቃሴ እና ቀጠና ናቸው። ቴክቶኒክ ሰብዳክሽን የጂኦሎጂ ሂደት እንጂ ጭብጥ አይደለም።'
      }
    },
    {
      id: 'quiz-geog-1-3',
      number: 3,
      question: {
        en: 'What is the solar time difference between the westernmost tip (Akobo, 33°E) and easternmost tip (Ogaden, 48°E) of Ethiopia?',
        am: 'በኢትዮጵያ ምዕራባዊ ጫፍ (አኮቦ 33° ም) እና ምስራቃዊ ጫፍ (ኦጋዴን 48° ም) መካከል ያለው የፀሐይ ሰዓት ልዩነት ስንት ነው?'
      },
      options: [
        { id: 'opt-1', text: { en: '30 minutes', am: '30 ደቂቃ' } },
        { id: 'opt-2', text: { en: '1 hour (60 minutes)', am: '1 ሰዓት (60 ደቂቃ)' } },
        { id: 'opt-3', text: { en: '3 hours', am: '3 ሰዓታት' } },
        { id: 'opt-4', text: { en: '2 hours', am: '2 ሰዓታት' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The longitudinal difference is 48° - 33° = 15°. Since 1° of longitude equals 4 minutes of solar time, 15° × 4 minutes = 60 minutes (1 hour).',
        am: 'የኬንትሮስ ልዩነቱ 48° - 33° = 15° ነው። 1° ኬንትሮስ 4 ደቂቃ ስለሚፈጅ፣ 15° × 4 = 60 ደቂቃ (1 ሰዓት) ይሆናል።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-geog-1-1',
      termEn: 'Astronomical Location',
      termAm: 'የስነ-ፈለክ መገኛ',
      defEn: 'Absolute location defined by coordinates of latitude and longitude (Ethiopia: 3°N–15°N, 33°E–48°E).',
      defAm: 'በኬክሮስ እና ኬንትሮስ መጋጠሚያዎች የሚገለጽ ፍጹማዊ መገኛ።',
      chapter: 1
    },
    {
      id: 'fc-geog-1-2',
      termEn: 'Toponym',
      termAm: 'የቦታ መጠሪያ ስም',
      defEn: 'The name given to a place on Earth, reflecting linguistic and historical heritage.',
      defAm: 'ለአንድ መልክአ-ምድራዊ ስፍራ የተሰጠ መጠሪያ ስም።',
      chapter: 1
    },
    {
      id: 'fc-geog-1-3',
      termEn: 'Boundary-Circumference Ratio (B/C)',
      termAm: 'የድንበርና ዙሪያ ምጥጥን (B/C)',
      defEn: 'Index measuring deviation from a circle; Ethiopia’s ratio is 1.41, showing high compactness.',
      defAm: 'የቅርፅ ጥመቅነት መለኪያ፤ የኢትዮጵያ 1.41 ሲሆን ከፍተኛ ጥመቅነትን ያሳያል።',
      chapter: 1
    },
    {
      id: 'fc-geog-1-4',
      termEn: 'Representative Fraction',
      termAm: 'ተወካይ ክፍልፋይ',
      defEn: 'Map scale showing ratio between map distance and ground distance without units (e.g., 1:250,000).',
      defAm: 'የካርታና የመሬት ርቀትን ያለ መስፈሪያ ክፍልፋይ የሚያሳይ ስኬል።',
      chapter: 1
    }
  ]
};
