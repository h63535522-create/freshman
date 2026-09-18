import { OfficialPdfPage } from './types';

export const prefaceAndTocPages: OfficialPdfPage[] = [
  {
    pdfPageNumber: 1,
    bookPageLabel: 'Cover',
    pageType: 'cover',
    titleEn: 'Geography of Ethiopia and The Horn',
    titleAm: 'የኢትዮጵያ እና የአፍሪካ ቀንድ ጂኦግራፊ',
    subtopicEn: 'Course Code: GeES 1011 (Freshman Undergraduate Module)',
    subtopicAm: 'የኮርስ ኮድ፡ GeES 1011 (የዩኒቨርሲቲ የመጀመሪያ ዓመት የጋራ ሞጁል)',
    contentEn: `GEOGRAPHY OF ETHIOPIA AND THE HORN (GeES 1011)

Compiled By:
1. Dr. Teferi Mekonnen, Addis Ababa University
2. Mr. Nigatu Gebremedhin, Wolkite University
3. Dr. Alem-meta Assefa, Wollo University
4. Dr. Binyam Moreda, Hawassa University

Ministry of Science and Higher Education (MoSHE)
Federal Democratic Republic of Ethiopia
September, 2019`,
    contentAm: `የኢትዮጵያ እና የአፍሪካ ቀንድ ጂኦግራፊ (GeES 1011)

አዘጋጆች፡
1. ዶ/ር ተፈሪ መኮንን፣ አዲስ አበባ ዩኒቨርሲቲ
2. አቶ ንጋቱ ገብረመድህን፣ ወልቂጤ ዩኒቨርሲቲ
3. ዶ/ር አለም-መታ አሰፋ፣ ወሎ ዩኒቨርሲቲ
4. ዶ/ር ቢንያም ሞሬዳ፣ ሐዋሳ ዩኒቨርሲቲ

የሳይንስና ከፍተኛ ትምህርት ሚኒስቴር (MoSHE)
የኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ
መስከረም 2012 ዓ.ም (September, 2019)`,
    figures: [
      {
        id: 'cover-map',
        caption: 'Geography of Ethiopia and The Horn - Overview Map (36°0\'0"E - 48°0\'0"E / 6°0\'0"N - 12°0\'0"N)',
        description: 'Map depicting the Horn of Africa comprising Ethiopia, Eritrea, Djibouti, and Somalia, bordered by Sudan, South Sudan, and Kenya.'
      }
    ]
  },
  {
    pdfPageNumber: 2,
    bookPageLabel: 'ii',
    pageType: 'preface',
    titleEn: 'PREFACE (Part 1)',
    titleAm: 'መቅድም (ክፍል ፩)',
    sectionRef: 'Preface',
    contentEn: `PREFACE

The course Geography of Ethiopia had been offered to all freshman students of Ethiopian Universities until 2005. However, it was interrupted with the curricula revision that ended up making the duration of study for a University degree for most disciplines to be three years. This trend continued for more than a decade and a half. In response to the changing national and global dynamism, the Ministry of Science and Higher Education (MoSHE) had conducted assessment for a curriculum revision. The assessment included gathering evidence from international experiences and domestic practices in proposing courses for the freshman program. The results of the assessment revealed that the Ethiopian education curriculum had not properly addressed national unity among graduates, critical thinking, important non-cognitive skills, employability skills, communication skills, global outlook, and digital literacy to cite few.

One of the recommendations of the curriculum revision team was that the curriculum/program need to have components that highlight the necessities of Ethiopian Geography, society, cultures as well as the dynamic interrelationship of people and natural environments over time. As a result, to fill the existing gaps, common courses such as the Geography of Ethiopia and the Horn and others were identified to be offered for all first year students of higher education institutions.

The Geography of Ethiopia and the Horn is, therefore, intended to familiarize students with the basic geographic concepts particularly in relation to Ethiopia and the Horn of Africa. It is also meant to provide students a sense of place and time (geographic literacy) that are pivotal in producing knowledgeable and competent citizens who are able to comprehend and analyze spatial problems and contribute to their solutions. To be geographically illiterate is to deny oneself not only the ability to comprehend spatial problems but also the opportunity to contribute meaningfully to the development of policies for dealing with them. As such, the course provides an opportunity for the reader to understand the implications of the location, shape and size of Ethiopia, as well as the country’s physical and human resources diversity and abundance on its socioeconomic development.

The course consists of four parts. The first part provides a brief description on the location, shape and size of Ethiopia as well as basic skills of reading maps. Part two introduces the physical background and natural resource endowment of Ethiopia and the Horn which includes its geology and mineral resources, topography, climate, drainage and water resources, soil, fauna and flora. The third part of the course focuses on the demographic characteristics of the country and its implications on economic development.`,
    contentAm: `መቅድም

የኢትዮጵያ ጂኦግራፊ ትምህርት እስከ 2005 እ.ኤ.አ ድረስ ለሁሉም የኢትዮጵያ ዩኒቨርሲቲዎች የመጀመሪያ ዓመት ተማሪዎች ይሰጥ ነበር። ይሁን እንጂ ለአብዛኞቹ የትምህርት መስኮች የዩኒቨርሲቲ ዲግሪ የቆይታ ጊዜ ወደ ሦስት ዓመት ዝቅ ባደረገው የካሪኩለም ማሻሻያ ምክንያት ተቋርጦ ነበር። ይህ አካሄድ ከአስር ዓመት ተኩል በላይ ቀጥሏል። ለተለዋዋጭ ሀገራዊና አለምአቀፋዊ ሁኔታዎች ምላሽ ለመስጠት፣ የሳይንስና ከፍተኛ ትምህርት ሚኒስቴር (MoSHE) ለካሪኩለም ማሻሻያ ጥናት አድርጓል። ጥናቱ ከአለም አቀፍ ተሞክሮዎች እና ከሀገር ውስጥ አሰራሮች የተገኙ መረጃዎችን በማሰባሰብ ለአንደኛ አመት ፕሮግራም ኮርሶችን አቅርቧል። የጥናቱ ውጤት እንደሚያሳየው የቀድሞው የትምህርት ካሪኩለም በምሩቃን መካከል ሀገራዊ አንድነትን፣ ሂሳዊ አስተሳሰብን፣ ተቀጣሪነትን፣ ተግባቦትን እና ዲጂታል እውቀትን በአግባቡ አላካተተም ነበር።

የካሪኩለም ክለሳ ቡድኑ ካቀረባቸው ምክረ ሃሳቦች አንዱ ፕሮግራሙ የኢትዮጵያን ጂኦግራፊ፣ ማህበረሰብ፣ ባህሎች እንዲሁም የህዝብ እና የተፈጥሮ አካባቢን ተለዋዋጭ ግንኙነት የሚያጎሉ ይዘቶችን እንዲይዝ ማድረግ ነበር። በዚህም ክፍተቱን ለመሙላት "የኢትዮጵያ እና የአፍሪካ ቀንድ ጂኦግራፊ" ለሁሉም የመጀመሪያ አመት ተማሪዎች እንዲሰጥ ተወስኗል።

ስለዚህ ይህ ኮርስ ተማሪዎች ከኢትዮጵያ እና ከአፍሪካ ቀንድ ጋር ተያያዥነት ያላቸውን መሰረታዊ የጂኦግራፊ ፅንሰ-ሀሳቦችን እንዲያውቁ ለማድረግ ያለመ ነው። ጂኦግራፊያዊ ማንበብና መጻፍ (geographic literacy) እውቀት ያላቸው እና ብቁ ዜጎችን በማፍራት የቦታ ችግሮችን ለመረዳት፣ ለመተንተን እና ለመፍትሄው አስተዋፅዖ ለማበርከት ወሳኝ ነው። ጂኦግራፊያዊ እውቀት ማጣት የቦታ ችግሮችን የመረዳት አቅምን ብቻ ሳይሆን የፖሊሲ አወጣጥ ላይ ትርጉም ያለው አስተዋጽኦ የማበርከት እድልን ያሳጣል።`
  },
  {
    pdfPageNumber: 3,
    bookPageLabel: 'iii',
    pageType: 'preface',
    titleEn: 'PREFACE (Part 2)',
    titleAm: 'መቅድም (ክፍል ፪)',
    sectionRef: 'Preface',
    contentEn: `PREFACE (Continued)

country and its implications on economic development. The fourth component of the course offers treatment of the various economic activities of Ethiopia and the Horn which include agriculture, manufacturing and the service sectors. Moreover, Ethiopia in a globalizing world is treated in the perspectives of the pros and cons of globalization on its natural resources, population and socio-economic conditions.

This teaching material is compiled to meet the urgent needs of freshman students of Ethiopian Universities, who take the course “Geography of Ethiopia and the Horn (GeES 1011)”. It is our fervent belief that the material could also be an important reference for the course instructors as well. Nonetheless, readers of this material are requested to be considerate of the urgency of the material preparation, paucity of data for the very dynamic geography components, as well as the problems of changing boundaries and sizes of the spatial units. At times, reference was made to former administrative units. To the level best possible, however, attempt was made to include the most recent data on the diverse geographic attributes to produce a viable document. We would also like to acknowledge that much more remains to be done in terms of editing and using the most up-to-date data.

The writers are grateful to the Department of Geography and Environmental Studies of Addis Ababa University for providing the basic reference that was substantially used in the write-up of this material. We would like to thank the Ministry of Science and Higher Education for bringing back the Geography of Ethiopia as a freshman course with the intention of nurturing citizens who are zealous and enthusiastic to their country’s natural and cultural geographic endowments; and for facilitating the development of the material.`,
    contentAm: `መቅድም (የቀጠለ)

አራተኛው የኮርሱ ክፍል ግብርና፣ ማኑፋክቸሪንግ እና የአገልግሎት ዘርፎችን ጨምሮ የተለያዩ የኢትዮጵያና የአፍሪካ ቀንድ ኢኮኖሚያዊ እንቅስቃሴዎችን ይዳስሳል። በተጨማሪም ግሎባላይዜሽን በተፈጥሮ ሀብት፣ በህዝብ እና በማህበራዊ-ኢኮኖሚያዊ ሁኔታዎች ላይ የሚያሳድረው በጎና አሉታዊ ተፅዕኖ ተካትቷል።

ይህ የማስተማሪያ ማቴሪያል "የኢትዮጵያ እና የአፍሪካ ቀንድ ጂኦግራፊ (GeES 1011)" ኮርስ የሚወስዱ የኢትዮጵያ ዩኒቨርሲቲዎች የመጀመሪያ ዓመት ተማሪዎችን አጣዳፊ ፍላጎት ለማሟላት የተጠናቀረ ነው። ማቴሪያሉ ለኮርስ አስተማሪዎችም ጠቃሚ ዋቢ እንደሚሆን ጽኑ እምነት አለን።

ደራሲዎቹ ለአዲስ አበባ ዩኒቨርሲቲ የጂኦግራፊ እና የአካባቢ ጥናት ትምህርት ክፍል መሰረታዊ ዋቢዎችን ስላቀረበ ምስጋና ያቀርባሉ። እንዲሁም ለሀገራቸው የተፈጥሮ እና የባህል ጂኦግራፊያዊ ፀጋዎች ቀናተኛና ህያው የሆኑ ዜጎችን ለማፍራት በማሰብ የኢትዮጵያን ጂኦግራፊ እንደ አንደኛ አመት ኮርስ መልሶ ላመጣውና ዝግጅቱን ላመቻቸው ለሳይንስና ከፍተኛ ትምህርት ሚኒስቴር ልባዊ ምስጋና እናቀርባለን።`
  },
  {
    pdfPageNumber: 4,
    bookPageLabel: 'iv',
    pageType: 'toc',
    titleEn: 'Table of Contents (Chapters 1 - 3)',
    titleAm: 'ማውጫ (ምዕራፍ ፩ - ፫)',
    sectionRef: 'TOC',
    contentEn: `Table of Contents
Preface .................................................................................................... ii
CHAPTER ONE: INTRODUCTION ................................................................. 1
  1.1. Geography: Definition, Scope and Themes ......................................... 1
    1.1.1. Meaning of Geography ................................................................. 1
    1.1.2. The Scope, Approaches and Themes of Geography ......................... 2
  1.2. Location, Shape and Size of Ethiopia and the Horn ............................... 3
    1.2.1. Location of Ethiopia ..................................................................... 4
    1.2.2. Size of Ethiopia ........................................................................... 6
    1.2.3. The shape of Ethiopia and its Implication ....................................... 7
  1.3. Basic Skills of Map Reading ............................................................. 9
    Basic Principles of Map Reading ............................................................ 10

CHAPTER TWO: THE GEOLOGY OF ETHIOPIA AND THE HORN ....................... 12
  2.1. Introduction ................................................................................... 12
  2.2. The Geologic Processes: Endogenic and Exogenic Forces ...................... 13
  2.3. The Geological Time Scale and Age Dating Techniques ......................... 13
    Age Dating Techniques ......................................................................... 15
  2.4. Geological Processes and the Resulting Landforms of Ethiopia and the Horn .. 17
    2.4.1. The Precambrian Era Geologic Processes (4.5 billion - 600 mya) ......... 17
    2.4.2. The Paleozoic Era Geologic Processes (600 - 225 mya) ..................... 18
    2.4.3. The Mesozoic Era Geologic Processes (225 - 70 mya) ...................... 18
    2.4.4. The Cenozoic Era Geologic Processes (70 mya - Present) ................. 20
  2.5. Rock and Mineral Resources of Ethiopia ............................................. 25
    2.5.1. Brief Facts and Current State of Main Minerals in Ethiopia .............. 25
    2.5.2. Mineral Potential Sites of Ethiopia ................................................. 28

CHAPTER THREE: THE TOPOGRAPHY OF ETHIOPIA AND THE HORN .............. 29
  3.1. Introduction ................................................................................... 29
  3.2. The Physiographic Divisions of Ethiopia ............................................. 31
    3.2.1. The Western Highlands and Lowlands ........................................... 31`,
    contentAm: `የይዘት ማውጫ
መቅድም .................................................................................................... ii
ምዕራፍ ፩፡ መግቢያ ................................................................................... 1
  1.1. ጂኦግራፊ፡ ምንነት፣ ወሰን እና ጭብጦች .................................................. 1
  1.2. የኢትዮጵያ እና የቀንዱ መገኛ፣ ቅርጽ እና ስፋት ........................................... 3
  1.3. መሰረታዊ የካርታ ንባብ ክህሎቶች ........................................................... 9
ምዕራፍ ፪፡ የኢትዮጵያ እና የአፍሪካ ቀንድ ጂኦሎጂ ............................................ 12
  2.1. መግቢያ ......................................................................................... 12
  2.2. የጂኦሎጂ ሂደቶች፡ ውስጣዊ እና ውጫዊ ኃይሎች ........................................ 13
  2.3. የጂኦሎጂካል የጊዜ ሰሌዳ እና የእድሜ መወሰኛ ዘዴዎች ............................... 13
  2.4. የጂኦሎጂካል ሂደቶች እና የመሬት ገጽታዎች ............................................. 17
  2.5. የአለት እና ማዕድን ሀብቶች ................................................................ 25
ምዕራፍ ፫፡ የኢትዮጵያ እና የአፍሪካ ቀንድ የመሬት አቀማመጥ (ቶፖግራፊ) ............... 29
  3.1. መግቢያ እና አጠቃላይ ባህሪያት ............................................................ 29
  3.2. የፊዚዮግራፊ ክፍፍሎች ..................................................................... 31`
  },
  {
    pdfPageNumber: 5,
    bookPageLabel: 'v',
    pageType: 'toc',
    titleEn: 'Table of Contents (Chapters 3 - 6)',
    titleAm: 'ማውጫ (ምዕራፍ ፫ - ፮)',
    sectionRef: 'TOC',
    contentEn: `Table of Contents (Continued)
    3.2.2. The Southeastern Highlands and Lowlands ................................... 35
    3.2.3. The Rift Valley ........................................................................... 37
  3.3. The Impacts of Relief on Biophysical and Socioeconomic Conditions ...... 39
  Review Questions ................................................................................. 40

CHAPTER FOUR: DRAINAGE SYSTEMS AND WATER RESOURCE ..................... 41
  4.1. Introduction ................................................................................... 41
  4.2. Major Drainage System of Ethiopia .................................................... 41
  4.3. Water Resources: Rivers, Lakes and Sub-Surface Water ........................ 45
    4.3.1. The Ethiopian Rivers ................................................................... 45
    4.3.2. The Ethiopian Lakes ................................................................... 47
    4.3.3. Subsurface (Ground) Water Resource of Ethiopia .......................... 48
  4.4. Water Resources Potentials and Development in Ethiopia ...................... 48

CHAPTER FIVE: THE CLIMATE OF ETHIOPIA AND THE HORN ........................ 51
  5.1. Introduction ................................................................................... 51
  5.2. Elements and Controls of Weather and Climate ................................... 52
    5.2.1. Controls of Weather and Climate ................................................. 52
  5.3. Spatiotemporal Patterns and Distribution of Temperature and Rainfall .... 56
    5.3.1. Spatiotemporal Distribution of Temperature .................................. 56
  5.5. Climate Change/Global Warming: Causes, Consequences and Responses 63
    5.5.1. Current Trends of Climate in Ethiopia ............................................ 64
    5.5.2. Causes of Climate Change ........................................................... 66
    5.5.3. Consequences of Climate Change ............................................... 67
    5.5.4. Climate Response Mechanisms ................................................... 67

CHAPTER SIX: SOILS, NATURAL VEGETATION AND WILDLIFE RESOURCES ..... 70
  6.1. Introduction ................................................................................... 70
  6.2. Ethiopian Soils: Types, Degradation and Conservation .......................... 70
    6.2.2. Major Soil Types in Ethiopia ........................................................ 72
    6.2.2. Soil Degradation ......................................................................... 76`,
    contentAm: `ማውጫ (የቀጠለ)
    3.2.2. ደቡብ-ምስራቅ ደጋማና ቆላማ ቦታዎች ............................................. 35
    3.2.3. የስምጥ ሸለቆ ............................................................................. 37
  3.3. የመሬት አቀማመጥ ተፅዕኖዎች ........................................................... 39
ምዕራፍ ፬፡ የፍሳሽ ስርአት እና የውሃ ሀብት ..................................................... 41
  4.1. መግቢያ ......................................................................................... 41
  4.2. ዋና ዋና የፍሳሽ ስርአቶች (ምዕራባዊ፣ ደቡብ-ምስራቃዊ፣ ስምጥ ሸለቆ) .............. 41
  4.3. የውሃ ሀብቶች፡ ወንዞች፣ ሀይቆች እና የከርሰ-ምድር ውሃ ............................... 45
  4.4. የውሃ ሀብት አቅም እና ልማት ............................................................. 48
ምዕራፍ ፭፡ የኢትዮጵያ እና የአፍሪካ ቀንድ አየር ንብረት ....................................... 51
  5.1. መግቢያ ......................................................................................... 51
  5.2. የአየር እና የአየር ንብረት አካላት እና ተቆጣጣሪዎች ................................. 52
  5.3. የሙቀት እና የዝናብ ስርጭት .............................................................. 56
  5.5. የአየር ንብረት ለውጥ፡ መንስኤዎች፣ ውጤቶች እና የመፍትሄ እርምጃዎች ............ 63
ምዕራፍ ፮፡ አፈር፣ የተፈጥሮ እፅዋት እና የዱር አራዊት ሀብቶች ............................ 70
  6.1. መግቢያ ......................................................................................... 70
  6.2. የኢትዮጵያ አፈር፡ አይነቶች፣ መሸርሸር እና እንክብካቤ ................................. 70`
  },
  {
    pdfPageNumber: 6,
    bookPageLabel: 'vi',
    pageType: 'toc',
    titleEn: 'Table of Contents (Chapters 6 - 8)',
    titleAm: 'ማውጫ (ምዕራፍ ፮ - ፰)',
    sectionRef: 'TOC',
    contentEn: `Table of Contents (Continued)
    6.2.3. Soil Erosion Control Measures .................................................... 77
  6.3. Natural Vegetation of Ethiopia .......................................................... 78
    6.3.3. Natural vegetation Degradation .................................................. 81
    6.3.2. Natural Vegetation Conservation ................................................ 81
  6.4. Wild Life/wild animals in Ethiopia ..................................................... 82
    6.4.2. Wildlife Conservation ................................................................. 83
    6.4.3. Challenges of wildlife conservation in Ethiopia .............................. 86

CHAPTER SEVEN: POPULATION OF ETHIOPIA AND THE HORN ....................... 87
  7.1. Introduction ................................................................................... 87
  7.2. Population Data: Uses and Sources ................................................... 88
  7.3. Population Dynamics: Fertility, Mortality and Migration ....................... 90
    7.3.1. Demographic Measurements ...................................................... 91
    7.3.2. Levels and trends in Fertility and Mortality rates in Ethiopia ........... 92
    7.3.3. Migration in Ethiopia and the Horn ............................................... 95
  7.5. Population Distribution in Ethiopia .................................................... 103
    7.5.1. Measures of Population Distribution ........................................... 104
    7.5.2. Factors Affecting Population Distribution in Ethiopia ..................... 107
  7.6. Socio-cultural Aspects: Education, Health and Languages ................... 109
    7.6.1. Education ................................................................................. 109
    7.6.2. Health ...................................................................................... 110
    7.6.3. Languages Families and Languages of Ethiopia ............................. 112
  7.7. Settlement Types and Patterns ......................................................... 113
    7.7.1. Types of Settlement ................................................................... 113

CHAPTER EIGHT: ECONOMIC ACTIVITIES IN ETHIOPIA ............................... 120
  8.1. Introduction ................................................................................... 120
  8.2. Mining Activity in Ethiopia ................................................................ 121
  8.3. Forestry ........................................................................................ 125
  8.4. Fishery .......................................................................................... 126
  8.5. Agriculture in Ethiopia .................................................................... 132
    8.5.2. Contributions, potentials and characteristics of agriculture ........... 133`,
    contentAm: `ማውጫ (የቀጠለ)
    6.2.3. የአፈር መሸርሸር መከላከያ ዘዴዎች ................................................ 77
  6.3. የተፈጥሮ እፅዋት (5 ዞኖች) ................................................................ 78
  6.4. የዱር አራዊት እና ጥበቃ ................................................................... 82
ምዕራፍ ፯፡ የኢትዮጵያ እና የአፍሪካ ቀንድ ህዝብ ................................................ 87
  7.1. መግቢያ ......................................................................................... 87
  7.2. የስነ-ህዝብ መረጃዎች፡ ጥቅሞች እና ምንጮች ........................................... 88
  7.3. የስነ-ህዝብ እንቅስቃሴ፡ ውልደት፣ ሞት እና ስደት ....................................... 90
  7.5. የህዝብ ስርጭት መለኪያዎች .............................................................. 103
  7.6. ማህበራዊ-ባህላዊ ገጽታዎች፡ ትምህርት፣ ጤና እና ቋንቋዎች ........................ 109
  7.7. የመኖሪያ ሰፈራ አይነቶች እና ከተሜነት .................................................. 113
ምዕራፍ ፰፡ የኢኮኖሚ እንቅስቃሴዎች በኢትዮጵያ .............................................. 120
  8.1. መግቢያ ......................................................................................... 120
  8.2. የማዕድን ዘርፍ ................................................................................ 121
  8.3. የደን ሀብት .................................................................................... 125
  8.4. የዓሳ ሀብት .................................................................................... 126
  8.5. ግብርና ......................................................................................... 132`
  },
  {
    pdfPageNumber: 7,
    bookPageLabel: 'vii',
    pageType: 'toc',
    titleEn: 'Table of Contents (Chapter 8 & References)',
    titleAm: 'ማውጫ (ምዕራፍ ፰ እና ዋቢ መጻሕፍት)',
    sectionRef: 'TOC',
    contentEn: `Table of Contents (Continued)
    8.5.3. Agriculture Systems in Ethiopia ................................................... 139
    8.5.4. Major problems of Ethiopian agriculture ...................................... 143
  8.6. Manufacturing Industry in Ethiopia ..................................................... 145
    8.6.2. Types and characteristics of manufacturing ................................. 146
    8.6.3. The Spatial Distribution of Manufacturing Industries in Ethiopia ..... 148
  8.7. The Service Sector in Ethiopia ........................................................... 154
    8.7.2. Transportation and communication: types, roles and characteristics 154
    8.7.4. Tourism in Ethiopia: Types, major sites, challenges and prospects ... 162
References .............................................................................................. 166`,
    contentAm: `ማውጫ (የቀጠለ)
    8.5.3. የግብርና ስርአቶች በኢትዮጵያ ....................................................... 139
    8.5.4. የኢትዮጵያ ግብርና ዋና ዋና ችግሮች .............................................. 143
  8.6. የማኑፋክቸሪንግ ኢንዱስትሪ በኢትዮጵያ ................................................. 145
    8.6.2. የማኑፋክቸሪንግ አይነቶች እና ባህሪያት ........................................... 146
    8.6.3. የኢንዱስትሪዎች የቦታ ስርጭት ..................................................... 148
  8.7. የአገልግሎት ዘርፍ በኢትዮጵያ .............................................................. 154
    8.7.2. ትራንስፖርት እና ተግባቦት ........................................................... 154
    8.7.4. ቱሪዝም፡ አይነቶች፣ መስህቦች፣ ተግዳሮቶች እና ተስፋዎች ..................... 162
ዋቢ መጻሕፍት (References) ..................................................................... 166`
  }
];
