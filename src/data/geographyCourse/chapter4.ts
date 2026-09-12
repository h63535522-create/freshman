import { Chapter } from '../../types';

export const geographyChapter4: Chapter = {
  id: 404,
  number: 4,
  title: {
    en: 'Drainage Systems and Water Resource of Ethiopia and the Horn',
    am: 'የኢትዮጵያ እና የአፍሪካ ቀንድ የፍሳሽ ስርአቶች እና የውሃ ሀብት'
  },
  universityAuthor: 'Dr. Teferi Mekonnen (AAU), Mr. Nigatu Gebremedhin (Wolkite Univ.), Dr. Alem-meta Assefa (Wollo Univ.), Dr. Binyam Moreda (Hawassa Univ.) - MoE (Sept. 2019)',
  overview: {
    en: 'This chapter explores Ethiopia’s surface water endowment—estimated at 124.4 billion cubic meters (BCM)—and its three major drainage systems: the Western Drainage System (carrying 60% of runoff through Abay, Tekeze, Baro-Akobo, and Ghibe/Omo), the Southeastern Drainage System (carrying 25% through Wabishebelle and Ghenale-Dawa), and the Rift Valley Drainage System (Awash and the closed tectonic lake basins). It examines the characteristics of Ethiopian rivers, lake formations, and development potentials in hydroelectricity (45,000 MW), irrigation (5.3M ha), riverine/lacustrine transportation, and fisheries.',
    am: 'ይህ ምዕራፍ በ124.4 ቢሊዮን ኪዩቢክ ሜትር የሚገመተውን የኢትዮጵያን የገጽታ ውሃ ሀብት እና ሶስቱን ዋና ዋና የፍሳሽ ስርአቶች ያብራራል፡ የምዕራብ የፍሳሽ ስርአት (60% ውሃን በአባይ፣ ተከዜ፣ ባሮ-አኮቦ እና ጊቤ/ኦሞ የሚያፈስ)፣ የደቡብ-ምስራቅ የፍሳሽ ስርአት (25% በዋቢሸበሌ እና ገናሌ-ዳዋ)፣ እና የስምጥ ሸለቆ የፍሳሽ ስርአት (አዋሽና ዝግ የሀይቆች ተፋሰሶች)። በተጨማሪም የወንዞች ባህሪያት፣ የሀይቆች አፈጣጠር እና የሃይድሮ-ኤሌክትሪክ (45,000 ሜጋ ዋት)፣ የመስኖ (5.3 ሚሊዮን ሄክታር)፣ የትራንስፖርት እና የዓሳ ሀብት ልማት አቅምን ይተነትናል።'
  },
  learningOutcomes: [
    {
      en: 'Describe the three major drainage systems of Ethiopia and their catchment areas and runoff contributions.',
      am: 'ሶስቱን ዋና ዋና የኢትዮጵያ የፍሳሽ ስርአቶች፣ የተፋሰስ ስፋታቸውንና የውሃ መጠን ድርሻቸውን መግለጽ።'
    },
    {
      en: 'Identify the physical characteristics of Ethiopian rivers (highland origin, trans-boundary nature, seasonal fluctuation, steep profiles).',
      am: 'የኢትዮጵያ ወንዞች አካላዊ ባህሪያትን (ከደጋ መመንጨት፣ ድንበር ተሻጋሪነት፣ ወቅታዊ መለዋወጥ፣ ቁልቁለት) መለየት።'
    },
    {
      en: 'Compare the origin, morphology, and limnology of Ethiopian highland, rift valley, and crater lakes.',
      am: 'የኢትዮጵያ ደጋማ፣ ስምጥ ሸለቆ እና የእሳተ-ገሞራ አፍ (ክሬተር) ሀይቆች አፈጣጠርና ባህሪያትን ማወዳደር።'
    },
    {
      en: 'Assess the development potential of the water sector in hydroelectricity, irrigation, transport, and fishing.',
      am: 'የውሃውን ዘርፍ የልማት አቅም በሃይድሮ-ኤሌክትሪክ፣ በመስኖ፣ በትራንስፖርት እና በዓሳ ምርት ዘርፎች መገምገም።'
    }
  ],
  sections: [
    {
      id: 'sec-geog-4-1',
      number: '4.1',
      title: {
        en: 'Surface and Subsurface Water Resources of Ethiopia',
        am: 'የኢትዮጵያ የገጽታ እና የመሬት ውስጥ ውሃ ሀብት'
      },
      paragraphs: [
        {
          id: 'p-geog-4-1-1',
          subheading: {
            en: '4.1.1 "Water Tower of Eastern Africa" and National Potential',
            am: '4.1.1 "የምስራቅ አፍሪካ የውሃ ማማ" እና ሀገራዊ አቅም'
          },
          en: 'Ethiopia is widely celebrated as the "Water Tower of Eastern Africa". Its diverse topography, high elevation, equatorial proximity, and abundant highland rainfall endow the nation with an estimated 124.4 billion cubic meters (BCM) of annual surface water discharge and an exploitable groundwater potential estimated between 12 to 30 BCM. Water bodies cover roughly 0.7% of the nation’s total surface area, feeding 12 major river basins that radiate outward across international boundaries into the Mediterranean Sea and the Indian Ocean, or terminate in closed rift valley depressions.',
          am: 'ኢትዮጵያ "የምስራቅ አፍሪካ የውሃ ማማ" ተብላ ትታወቃለች። የተለያየ መልክአ-ምድሯ፣ ከፍተኛ የመሬት ከፍታዋና የተትረፈረፈ የደጋ ዝናቧ በዓመት በ124.4 ቢሊዮን ኪዩቢክ ሜትር (BCM) የሚገመት የገጽታ ውሃ ፍሰት እና ከ12 እስከ 30 BCM የሚደርስ የመሬት ውስጥ ውሃ አቅም አስገኝተውላታል። የውሃ አካላት 0.7% የሀገሪቱን ስፋት የሚሸፍኑ ሲሆን ድንበር ተሻግረው ወደ ሜዲትራኒያን ባህርና ህንድ ውቅያኖስ የሚፈሱ ወይም በዝግ ስምጥ ሸለቆ ውስጥ የሚቀሩ 12 ዋና ዋና ተፋሰሶችን ይመገባሉ።',
          highlightTerms: [
            {
              en: 'Water Tower of Eastern Africa',
              am: 'የምስራቅ አፍሪካ የውሃ ማማ',
              defEn: 'Epithet earned by Ethiopia due to its vast 124.4 BCM surface water runoff feeding trans-boundary rivers.',
              defAm: 'ኢትዮጵያ በዓመት 124.4 ቢሊዮን ኪዩቢክ ሜትር ውሃ ድንበር ተሻጋሪ ወንዞችን ስለምትመግብ የተሰጣት ስያሜ።'
            },
            {
              en: 'Groundwater Potential',
              am: 'የመሬት ውስጥ ውሃ አቅም',
              defEn: 'Estimated 12–30 BCM of exploitable subsurface water reserves in Ethiopia.',
              defAm: 'በኢትዮጵያ ከ12 እስከ 30 ቢሊዮን ኪዩቢክ ሜትር የሚገመት የመሬት ውስጥ የውሃ ክምችት።'
            }
          ]
        }
      ]
    },
    {
      id: 'sec-geog-4-2',
      number: '4.2',
      title: {
        en: 'The Three Major Drainage Systems of Ethiopia',
        am: 'ሶስቱ ዋና ዋና የኢትዮጵያ የፍሳሽ ስርአቶች'
      },
      paragraphs: [
        {
          id: 'p-geog-4-2-1',
          subheading: {
            en: '4.2.1 The Western Drainage System',
            am: '4.2.1 የምዕራብ የፍሳሽ ስርአት'
          },
          en: 'The Western Drainage System is the largest and most voluminous in Ethiopia, draining 40% of the total landmass and conveying 60% of the nation’s annual runoff westward. It comprises four major river basins: 1) The Abay (Blue Nile) Basin: The largest river basin in discharge and coverage (199,812 km²), Abay originates from Lake Tana (and Sekela in Choke Mountain), flows 1,450 km through an impressive deep canyon in a 180° loop, and joins the White Nile in Khartoum; fed by major tributaries including Gilgel Abay, Dedessa, Dabus, Fincha, Guder, Muger, Jema, and Beshilo, it accounts for 65% of the western system’s flow; 2) The Tekeze Basin: Draining 82,350 km² with an annual discharge of 8.2 BCM, Tekeze is fed by Angereb and Goang, becoming the Atbara River in Sudan; 3) The Baro-Akobo Basin: Draining the wettest southwestern highlands (75,912 km²) with 23.6 BCM annual flow, Baro combines with Akobo to form the Sobat River in South Sudan; and 4) The Ghibe / Omo Basin: Draining 79,000 km² with 16.6 BCM annual discharge, the Ghibe/Omo uniquely flows southward away from the Nile, emptying into Lake Turkana to form an inland drainage system.',
          am: 'የምዕራብ የፍሳሽ ስርአት በስፋትም ሆነ በውሃ መጠን ትልቁ ሲሆን 40% የሀገሪቱን መሬት አዳርሶ 60% የሚሆነውን ዓመታዊ የውሃ ፍሰት ወደ ምዕራብ ይወስዳል። አራት ዋና ዋና ተፋሰሶችን ያቀፈ ነው፡ ፩) የአባይ ተፋሰስ፡ በውሃ መጠንም በሽፋንም ትልቁ (199,812 ካሬ ኪ.ሜ)፤ ከጣና ሀይቅ (እና ከሰከላ ቾቄ ተራራ) ተነስቶ 1,450 ኪ.ሜ ጥልቅ ገደል ሰርቶ በመጓዝ ካርቱም ላይ ከነጭ ናይል ጋር ይቀላቀላል፤ እንደ ግልገል አባይ፣ ደዴሳ፣ ዳቡስ፣ ፊንጫ፣ ጉደር፣ ሙገር፣ ጀማ እና በሽሎ ባሉ ገባሮች ተደግፎ 65% የምዕራቡን ፍሰት ይይዛል፤ ፪) የተከዜ ተፋሰስ (82,350 ካሬ ኪ.ሜ፣ 8.2 BCM)፡ በአንገረብና ጓንግ ተመግቦ ሱዳን ውስጥ አትባራ ይባላል፤ ፫) የባሮ-አኮቦ ተፋሰስ (75,912 ካሬ ኪ.ሜ፣ 23.6 BCM)፡ ደቡብ ሱዳን ውስጥ ሶባት ወንዝን ይፈጥራል፤ ፬) የጊቤ/ኦሞ ተፋሰስ (79,000 ካሬ ኪ.ሜ፣ 16.6 BCM)፡ ወደ ደቡብ በመፍሰስ ቱርካና ሀይቅ ውስጥ የሚገባ ዝግ ተፋሰስ ነው።',
          highlightTerms: [
            {
              en: 'Abay River Basin',
              am: 'የአባይ ተፋሰስ',
              defEn: 'Largest Ethiopian river basin (199,812 km²) discharging 65% of the western runoff to the Nile.',
              defAm: '199,812 ካሬ ኪ.ሜ ስፋት ያለውና 65% የምዕራቡን ውሃ ወደ ናይል የሚያፈስ ግዙፍ ተፋሰስ።'
            },
            {
              en: 'Baro River',
              am: 'የባሮ ወንዝ',
              defEn: 'Navigable southwestern river uniting with Akobo to form the Sobat River in South Sudan.',
              defAm: 'በደቡብ-ምዕራብ ኢትዮጵያ የሚገኝና በታችኛው ክፍሉ ለመርከብ አመቺ የሆነ ወንዝ።'
            }
          ]
        },
        {
          id: 'p-geog-4-2-2',
          subheading: {
            en: '4.2.2 The Southeastern and Rift Valley Drainage Systems',
            am: '4.2.2 የደቡብ-ምስራቅ እና የስምጥ ሸለቆ የፍሳሽ ስርአቶች'
          },
          en: 'The Southeastern Drainage System drains nearly the entire southeastern plateau and extensive arid lowlands, carrying 25% of Ethiopia’s annual runoff. It is dominated by two great rivers: 1) The Wabishebelle: Spanning 202,697 km², it possesses the largest catchment area and is the longest river in Ethiopia; however, despite its immense course, it fails to reach the Indian Ocean, instead drying up and disappearing in the coastal sands of Somalia near the Juba River; and 2) The Ghenale-Dawa: Draining 171,042 km² with 5.8 BCM discharge, Ghenale carries more water than Wabishebelle and successfully reaches the Indian Ocean, where it is known as the Juba River. Meanwhile, the Rift Valley Drainage System carries small runoff under high evaporation within an inward-sloping graben. Its sole major river is the Awash (114,123 km², 4.9 BCM, 1,250 km long), originating in the Shewan plateau and flowing northeastward before terminating in a chain of salt lakes on the Djibouti border, the largest being Lake Abe. Awash is the most intensively utilized river in Ethiopia for commercial agriculture and industry.',
          am: 'የደቡብ-ምስራቅ የፍሳሽ ስርአት የደቡብ-ምስራቅ ደጋዎችንና ሰፊ ቆላማ ሜዳዎችን በማዳረስ 25% የሀገሪቱን ውሃ ይይዛል። በሁለት ወንዞች ይመራል፡ ፩) ዋቢሸበሌ፡ 202,697 ካሬ ኪ.ሜ በመሸፈን ትልቁ የተፋሰስ ስፋት ያለውና ረጅሙ የኢትዮጵያ ወንዝ ቢሆንም የህንድ ውቅያኖስ ሳይደርስ ሶማሊያ የባህር ዳርቻ አሸዋ ውስጥ ይሰምጣል፤ ፪) ገናሌ-ዳዋ፡ 171,042 ካሬ ኪ.ሜ ስፋትና 5.8 BCM ውሃ ያለው ሲሆን ሶማሊያ ውስጥ ጁባ ተብሎ የህንድ ውቅያኖስ ይገባል። የስምጥ ሸለቆው የፍሳሽ ስርአት ደግሞ ውስን ዝናብና ከፍተኛ ትነት ያለበት ዝግ ስርአት ነው። ዋናው ወንዝ አዋሽ (114,123 ካሬ ኪ.ሜ፣ 4.9 BCM፣ 1,250 ኪ.ሜ ርዝመት) ሲሆን ከሸዋ አምባ ተነስቶ ወደ ሰሜን ምስራቅ በመፍሰስ ጅቡቲ ድንበር ላይ አቤ ሀይቅ ውስጥ ያበቃል። አዋሽ በኢትዮጵያ ለመስኖና ለኢንዱስትሪ በከፍተኛ ሁኔታ ጥቅም ላይ የዋለ ቀዳሚ ወንዝ ነው።',
          highlightTerms: [
            {
              en: 'Wabishebelle River',
              am: 'ዋቢሸበሌ ወንዝ',
              defEn: 'Longest river in Ethiopia with largest catchment (202,697 km²), disappearing in Somali sands.',
              defAm: 'ትልቁ የተፋሰስ ስፋት ያለውና ረጅሙ የኢትዮጵያ ወንዝ ቢሆንም ውቅያኖስ ሳይደርስ አሸዋ ውስጥ የሚቀር።'
            },
            {
              en: 'Awash River',
              am: 'አዋሽ ወንዝ',
              defEn: 'Most utilized river in Ethiopia flowing 1,250 km within the Rift Valley into Lake Abe.',
              defAm: 'ከሸዋ ተነስቶ አቤ ሀይቅ የሚገባና ለግብርና በስፋት ጥቅም ላይ የዋለ የስምጥ ሸለቆ ወንዝ።'
            }
          ]
        }
      ]
    },
    {
      id: 'sec-geog-4-3',
      number: '4.3',
      title: {
        en: 'Characteristics of Rivers, Lakes and Water Development Potentials',
        am: 'የወንዞችና ሀይቆች ባህሪያት እና የውሃ ልማት አቅሞች'
      },
      paragraphs: [
        {
          id: 'p-geog-4-3-1',
          subheading: {
            en: '4.3.1 General Characteristics of Ethiopian Rivers and Lakes',
            am: '4.3.1 የኢትዮጵያ ወንዞች እና ሀይቆች አጠቃላይ ባህሪያት'
          },
          en: 'Ethiopian rivers share distinct geographical characteristics: 1) Almost all major rivers originate in highlands elevating above 1,500 meters; 2) Most are trans-boundary, crossing international borders; 3) They exhibit extreme seasonal discharge fluctuations (torrential floods bursting banks in wet season, reduced to mere trickles in dry months); 4) Surface ruggedness produces rapids and waterfalls (e.g., Tis Issat on the Blue Nile); and 5) Steep profiles through deep gorges limit navigability. Ethiopian lakes are primarily of tectonic origin formed during the Quaternary period in faulted rift depressions. Lake Tana is the largest lake (3,600 km², max depth 9m), formed by volcanic damming. The Rift Valley hosts a linear chain: Lake Abaya (largest rift lake, 1,162 km²), Lake Chamo (551 km²), Lake Ziway (442 km²), and Lake Shala (deepest rift lake, 266m). Crater lakes include Bishoftu, Wonchi, and Hayk; man-made reservoirs include Koka, Fincha, and Melka Wakena.',
          am: 'የኢትዮጵያ ወንዞች የሚከተሉት መለያዎች አሏቸው፡ ፩) አብዛኞቹ ከ1,500 ሜትር በላይ ከፍታ ካላቸው ደጋዎች ይመነጫሉ፤ ፪) አብዛኞቹ ድንበር ተሻጋሪ ናቸው፤ ፫) ከፍተኛ ወቅታዊ የፍሰት መለዋወጥ ይታይባቸዋል (በክረምት ሞልተው ድልድይ ሲያፈርሱ፣ በበጋ ይቀንሳሉ)፤ ፬) በወጣ ገባ መሬት ምክንያት ፏፏቴዎች አሏቸው (እንደ ጥስ አባይ)፤ ፭) ጥልቅ ገደል ስላላቸው ለመርከብ አያመቹም። ሀይቆች በዋናነት በሴኖዞይክ ኳተርነሪ በስምጥ ሸለቆ ስንጥቆች የተፈጠሩ ናቸው። ጣና ሀይቅ ትልቁ ሲሆን (3,600 ካሬ ኪ.ሜ፣ ጥልቀቱ 9 ሜትር) በእሳተ-ገሞራ ላቫ መዘጋት የተፈጠረ ነው። ስምጥ ሸለቆ ውስጥ አባያ (ትልቁ የስምጥ ሀይቅ 1,162 ካሬ ኪ.ሜ)፣ ጫሞ (551 ካሬ ኪ.ሜ)፣ ዝዋይ (442 ካሬ ኪ.ሜ) እና ሻላ (እጅግ ጥልቁ 266 ሜትር) ይገኛሉ። እንደ ቢሾፍቱና ወንጪ ያሉ ክሬተር ሀይቆች እና እንደ ቆቃና ፊንጫ ያሉ ሰው ሰራሽ ሀይቆችም አሉ።',
          highlightTerms: [
            {
              en: 'Lake Tana',
              am: 'ጣና ሀይቅ',
              defEn: 'Largest lake in Ethiopia (3,600 km²) occupying a volcano-dammed highland tectonic depression.',
              defAm: '3,600 ካሬ ኪ.ሜ ስፋት ያለውና በእሳተ ገሞራ መደፈን የተፈጠረ የኢትዮጵያ ትልቁ ሀይቅ።'
            },
            {
              en: 'Lake Shala',
              am: 'ሻላ ሀይቅ',
              defEn: 'Deepest lake in the Ethiopian Rift Valley reaching a maximum depth of 266 meters.',
              defAm: 'እስከ 266 ሜትር ጥልቀት ያለው እጅግ ጥልቁ የስምጥ ሸለቆ ሀይቅ።'
            }
          ]
        },
        {
          id: 'p-geog-4-3-2',
          subheading: {
            en: '4.3.2 Water Resource Development: Energy, Irrigation, and Fisheries',
            am: '4.3.2 የውሃ ሀብት ልማት፡ ሃይል፣ መስኖ እና አሳ ሀብት'
          },
          en: 'Ethiopia’s water development opportunities include: 1) Hydroelectric Potential: An exploitable potential of 45,000 MW, pioneered at Aba Samuel in 1932; current power plants generate ~4,000 MW, headlined by Gilgel Gibe III (1,870 MW) and the Grand Ethiopian Renaissance Dam (GERD, designed for 6,400 MW), enabling electricity exports to Sudan, Djibouti, and Kenya; 2) Irrigation: National irrigable potential is 5.3 million hectares, but only 4.6% (161,010 ha) is currently utilized (over 60% located in the Rift Valley/Awash); 3) Navigation: Severely constrained by waterfalls and rapids; only the lower Baro River is navigable, while passenger boats operate on Lakes Tana and Abaya; and 4) Fisheries: Annual fish catch is ~31,500 tons against a sustainable potential exceeding 51,000 tons. Lake Tana leads with 8,000–10,000 tons/year, followed by Chamo (4,500 tons/year). Key commercial species are Tilapia (50%), Catfish (22%), and Nile Perch (9%). Major threats include sedimentation, overfishing, and invasive water hyacinth (Emboch) on Lake Tana.',
          am: 'የውሃ ሀብት ልማት እድሎች፡ ፩) የሃይድሮ-ኤሌክትሪክ አቅም፡ 45,000 ሜጋ ዋት የማመንጨት አቅም ሲኖር፣ በ1932 አባ ሳሙኤል ተጀመረ፤ ዛሬ ጊልገል ጊቤ ፫ (1,870 ሜ.ዋ) እና ታላቁ የህዳሴ ግድብ (GERD 6,400 ሜ.ዋ) ጨምሮ ለጎረቤት ሀገራት ኃይል ይላካል፤ ፪) የመስኖ አቅም፡ 5.3 ሚሊዮን ሄክታር ሊለማ የሚችል መሬት ሲኖር እስካሁን 4.6% (161,010 ሄክታር) ብቻ ጥቅም ላይ ውሏል (ከ60% በላይ በአዋሽ/ስምጥ ሸለቆ)፤ ፫) የውሃ ትራንስፖርት፡ በፏፏቴዎች የተገደበ ሲሆን የታችኛው ባሮ ወንዝ ብቻ ለመርከብ ያገለግላል፤ ጣናና አባያ ሀይቆችም ጀልባዎችን ያስተናግዳሉ፤ ፬) የዓሳ ሀብት፡ ዓመታዊ ምርቱ 31,500 ቶን ሲሆን አቅሙ ከ51,000 ቶን በላይ ነው። ጣና በዓመት ከ8-10 ሺህ ቶን፣ ጫሞ 4,500 ቶን ያመርታሉ። ዋናዎቹ ዝርያዎች ጥላፒያ (50%)፣ አምባዛ/Catfish (22%) እና ናይል ፐርች (9%) ናቸው። ዋነኛ ስጋቶች ደለል፣ ከልክ ያለፈ አሳ ማጥመድ እና እምቦጭ አረም ናቸው።',
          highlightTerms: [
            {
              en: 'Grand Ethiopian Renaissance Dam (GERD)',
              am: 'ታላቁ የኢትዮጵያ ህዳሴ ግድብ (GERD)',
              defEn: 'Flagship hydropower project on the Abay River engineered to generate up to 6,400 MW.',
              defAm: 'በአባይ ወንዝ ላይ እየተገነባ ያለ 6,400 ሜጋ ዋት የኤሌክትሪክ ኃይል የማመንጨት አቅም ያለው ታላቅ ግድብ።'
            },
            {
              en: 'Water Hyacinth (Emboch)',
              am: 'እምቦጭ አረም',
              defEn: 'Invasive aquatic weed infesting Lake Tana and threatening fish biodiversity and water levels.',
              defAm: 'የጣና ሀይቅን ስነ-ምህዳር እና የዓሳ ዝርያዎችን አደጋ ላይ የጣለ ወራሪ የውሃ አረም።'
            }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Western Drainage System',
      termAm: 'የምዕራብ የፍሳሽ ስርአት',
      defEn: 'Ethiopia’s largest drainage system draining 40% of land and carrying 60% of annual runoff to the Nile.',
      defAm: '40% የሀገሪቱን መሬት አዳርሶ 60% ዓመታዊ ፍሰትን ወደ ናይል የሚያፈስ ትልቁ ተፋሰስ።'
    },
    {
      termEn: 'Wabishebelle River',
      termAm: 'ዋቢሸበሌ ወንዝ',
      defEn: 'Longest river in Ethiopia with a catchment of 202,697 km², terminating in coastal sands of Somalia.',
      defAm: 'ትልቁ የተፋሰስ ስፋት ያለውና ረጅሙ የኢትዮጵያ ወንዝ ቢሆንም ውቅያኖስ ሳይደርስ አሸዋ ውስጥ የሚቀር።'
    },
    {
      termEn: 'Awash River',
      termAm: 'አዋሽ ወንዝ',
      defEn: 'Rift Valley river flowing 1,250 km into Lake Abe, heavily utilized for irrigation.',
      defAm: 'ከሸዋ ተነስቶ አቤ ሀይቅ የሚገባና ለግብርና በስፋት ጥቅም ላይ የዋለ የስምጥ ሸለቆ ወንዝ።'
    },
    {
      termEn: 'GERD',
      termAm: 'የህዳሴው ግድብ',
      defEn: 'Massive hydroelectric dam on the Blue Nile with a capacity of 6,400 MW.',
      defAm: 'በአባይ ወንዝ ላይ የተገነባው ታላቁ 6,400 ሜጋ ዋት የሃይል ማመንጫ ግድብ።'
    }
  ],
  summaries: [
    {
      id: 'sum-geog-4-1',
      title: {
        en: 'Hydrology, Basins, River Characteristics, and Water Resource Exploitation',
        am: 'የውሃ ሀብት፣ ተፋሰሶች፣ የወንዞች ባህሪያት እና ልማት ማጠቃለያ'
      },
      bullets: [
        {
          en: 'Ethiopia commands 124.4 BCM of surface runoff and 12–30 BCM of groundwater across 12 major watersheds, earning the title "Water Tower of Eastern Africa".',
          am: 'ኢትዮጵያ 124.4 BCM የገጽታ ውሃ እና ከ12-30 BCM የመሬት ውስጥ ውሃ ያላት በመሆኑ "የምስራቅ አፍሪካ የውሃ ማማ" ትባላለች።'
        },
        {
          en: 'The Western Drainage System discharges 60% of runoff through the Abay, Tekeze, and Baro-Akobo into the Nile, while Ghibe/Omo drains southward to Lake Turkana.',
          am: 'የምዕራብ ፍሳሽ ስርአት 60% ውሃን በአባይ፣ ተከዜ እና ባሮ-አኮቦ ወደ ናይል የሚያፈስ ሲሆን ጊቤ/ኦሞ ደግሞ ወደ ቱርካና ሀይቅ ይገባል።'
        },
        {
          en: 'Wabishebelle has the largest basin (202,697 km²) but fails to reach the sea; Ghenale-Dawa discharges to the Indian Ocean as the Juba River; Awash terminates inland in Lake Abe.',
          am: 'ዋቢሸበሌ ትልቁ ተፋሰስ (202,697 ካሬ ኪ.ሜ) ቢኖረውም ውቅያኖስ አይደርስም፤ ገናሌ-ዳዋ ጁባ ተብሎ ውቅያኖስ ሲገባ፣ አዋሽ በአቤ ሀይቅ ይጠናቀቃል።'
        },
        {
          en: 'Hydroelectric potential is 45,000 MW (GERD 6,400 MW), irrigation potential is 5.3M ha (only 4.6% exploited), and annual fish harvest is 31,500 tons.',
          am: 'የኤሌክትሪክ ሃይል አቅሙ 45,000 ሜ.ዋ (ህዳሴ 6,400 ሜ.ዋ)፣ የመስኖ አቅሙ 5.3 ሚሊዮን ሄክታር (4.6% ብቻ የለማ)፣ የዓሳ ምርቱም 31,500 ቶን ነው።'
        }
      ]
    }
  ],
  matching: [
    {
      id: 'match-geog-4-1',
      concept: { en: 'Lake Tana', am: 'ጣና ሀይቅ' },
      definition: { en: 'Largest lake in Ethiopia (3,600 km²) formed by volcanic lava damming of highland depression', am: 'በእሳተ-ገሞራ ላቫ መዘጋት የተፈጠረ የኢትዮጵያ ትልቁ ሀይቅ (3,600 ካሬ ኪ.ሜ)' }
    },
    {
      id: 'match-geog-4-2',
      concept: { en: 'Lake Shala', am: 'ሻላ ሀይቅ' },
      definition: { en: 'Deepest lake in the Rift Valley reaching a maximum depth of 266 meters', am: 'እስከ 266 ሜትር ጥልቀት ያለው እጅግ ጥልቁ የስምጥ ሸለቆ ሀይቅ' }
    },
    {
      id: 'match-geog-4-3',
      concept: { en: 'Baro River', am: 'ባሮ ወንዝ' },
      definition: { en: 'The only river in Ethiopia with a navigable lower course', am: 'በታችኛው ክፍሉ ለመርከብ ትራንስፖርት የሚያገለግል ብቸኛው የኢትዮጵያ ወንዝ' }
    },
    {
      id: 'match-geog-4-4',
      concept: { en: 'Ghibe / Omo River', am: 'ጊቤ / ኦሞ ወንዝ' },
      definition: { en: 'Western system river flowing southward to empty into Lake Turkana as an inland drainage', am: 'ወደ ደቡብ ፈሶ ቱርካና ሀይቅ ውስጥ የሚገባ የምዕራብ ተፋሰስ ወንዝ' }
    },
    {
      id: 'match-geog-4-5',
      concept: { en: 'Lake Abaya', am: 'አባያ ሀይቅ' },
      definition: { en: 'Largest lake in the Ethiopian Rift Valley system covering 1,162 km²', am: '1,162 ካሬ ኪ.ሜ ስፋት ያለው ትልቁ የስምጥ ሸለቆ ሀይቅ' }
    }
  ],
  qna: [
    {
      id: 'qna-geog-4-1',
      number: 1,
      question: {
        en: 'Why do most Ethiopian rivers flow outward across national borders rather than terminating within the country?',
        am: 'አብዛኞቹ የኢትዮጵያ ወንዞች ሀገር ውስጥ ከመቅረት ይልቅ ድንበር ተሻግረው ወደ ውጭ የሚፈሱት ለምንድን ነው?'
      },
      answer: {
        en: 'Due to the Cenozoic tectonic uplifting of the Arabo-Ethiopian swell, the Ethiopian plateaus slope radially outward in all directions away from the central highlands. The Western plateau slopes westward toward the Nile Basin, and the Southeastern plateau slopes southeastward toward the Indian Ocean. Consequently, rivers follow these outward structural gradients across borders into Sudan, South Sudan, and Somalia.',
        am: 'በሴኖዞይክ ዘመን በተካሄደው የመሬት ከፍታ ምክንያት የኢትዮጵያ አምባዎች ከመሀል ወደ ውጭ ያዘነበሉ ናቸው። የምዕራቡ አምባ ወደ ምዕራብ ወደ ናይል ተፋሰስ፣ የደቡብ-ምስራቁ አምባ ደግሞ ወደ ደቡብ-ምስራቅ ወደ ህንድ ውቅያኖስ ያዘነበለ በመሆኑ ወንዞች ይህን ቁልቁለት ተከትለው ድንበር ተሻግረው ወደ ሱዳን፣ ደቡብ ሱዳንና ሶማሊያ ይፈሳሉ።'
      },
      explanation: {
        en: 'Only the inward-sloping graben of the Rift Valley traps waters in internal inland drainage basins like Awash and Lake Turkana.',
        am: 'ወደ ውስጥ ያዘነበለው የስምጥ ሸለቆ ስንጥቅ ብቻ ውሃን ሀገር ውስጥ አስቀርቶ እንደ አዋሽ እና ቱርካና ያሉ ዝግ ተፋሰሶችን ይፈጥራል።'
      },
      category: 'conceptual'
    },
    {
      id: 'qna-geog-4-2',
      number: 2,
      question: {
        en: 'Despite possessing vast water resources, why does Ethiopia utilize only 4.6% of its irrigable land potential?',
        am: 'ሰፊ የውሃ ሀብት እያላት ኢትዮጵያ ከመስኖ አቅሟ 4.6% ብቻ የምትጠቀመው በምን ምክንያቶች ነው?'
      },
      answer: {
        en: 'The major constraints are: 1) Physical barriers: rugged terrain with deep river gorges and steep valleys makes pumping and canal construction technically difficult and costly; 2) Spatial mismatch: fertile lowlands suitable for irrigation suffer from malaria, high temperatures, and sparse population, while densely populated highlands have rugged topography; and 3) Financial and technical limits: irrigation infrastructure requires heavy capital investment, advanced hydrological technology, and skilled engineering manpower.',
        am: 'ዋና ዋና ተግዳሮቶች፡ ፩) አካላዊ እንቅፋቶች፡ ወጣ ገባ መሬት እና ጥልቅ ገደሎች የቦይ ግንባታንና ፓምፕን እጅግ ውድ ያደርጋሉ፤ ፪) የቦታ አለመጣጣም፡ ለሰፊ መስኖ ምቹ የሆኑት ቆላዎች የወባ በሽታ፣ ከፍተኛ ሙቀትና አነስተኛ ህዝብ ሲኖራቸው፣ ህዝብ የበዛበት ደጋ ደግሞ ገደላማ ነው፤ ፫) የፋይናንስና ቴክኖሎጂ ውስንነት፡ የመስኖ ግንባታ ከፍተኛ ካፒታልና የሰለጠነ የሰው ኃይል ይጠይቃል።'
      },
      explanation: {
        en: 'Overcoming these constraints through integrated river basin development remains the core strategic imperative of national water master plans.',
        am: 'እነዚህን ተግዳሮቶች በተፋሰስ ልማት ማስተካከል የሀገሪቱ የውሃ ማስተር ፕላን ዋና ዓላማ ነው።'
      },
      category: 'case_study'
    }
  ],
  quizzes: [
    {
      id: 'quiz-geog-4-1',
      number: 1,
      question: {
        en: 'What percentage of Ethiopia’s annual water flow is carried by the Western Drainage System?',
        am: 'የምዕራብ የፍሳሽ ስርአት ከሀገሪቱ ዓመታዊ የውሃ ፍሰት ስንት በመቶውን ይሸፍናል?'
      },
      options: [
        { id: 'opt-1', text: { en: '25 percent', am: '25 በመቶ' } },
        { id: 'opt-2', text: { en: '40 percent', am: '40 በመቶ' } },
        { id: 'opt-3', text: { en: '60 percent', am: '60 በመቶ' } },
        { id: 'opt-4', text: { en: '85 percent', am: '85 በመቶ' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'The Western Drainage System drains 40% of the land area but carries 60% of the total annual water runoff of the country.',
        am: 'የምዕራብ የፍሳሽ ስርአት 40% መሬትን ሸፍኖ 60% የሚሆነውን ዓመታዊ የውሃ ፍሰት ወደ ምዕራብ ይወስዳል።'
      }
    },
    {
      id: 'quiz-geog-4-2',
      number: 2,
      question: {
        en: 'Which river has the largest catchment area in Ethiopia but fails to reach the Indian Ocean?',
        am: 'በኢትዮጵያ ትልቁ የተፋሰስ ስፋት ያለው ነገር ግን የህንድ ውቅያኖስ ሳይደርስ በአሸዋ የሚውጠው ወንዝ የትኛው ነው?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Abay River', am: 'አባይ ወንዝ' } },
        { id: 'opt-2', text: { en: 'Wabishebelle River (202,697 km²)', am: 'ዋቢሸበሌ ወንዝ (202,697 ካሬ ኪ.ሜ)' } },
        { id: 'opt-3', text: { en: 'Ghenale-Dawa River', am: 'ገናሌ-ዳዋ ወንዝ' } },
        { id: 'opt-4', text: { en: 'Awash River', am: 'አዋሽ ወንዝ' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The Wabishebelle has Ethiopia’s largest catchment area (202,697 km²), but it dries up in the sands of Somalia before entering the sea.',
        am: 'ዋቢሸበሌ ትልቁ ተፋሰስ (202,697 ካሬ ኪ.ሜ) ቢኖረውም ውቅያኖስ ከመድረሱ በፊት በሶማሊያ አሸዋ ውስጥ ይጠፋል።'
      }
    },
    {
      id: 'quiz-geog-4-3',
      number: 3,
      question: {
        en: 'What is the exploitable hydroelectric power potential of Ethiopia’s rivers?',
        am: 'የኢትዮጵያ ወንዞች ሊመነጭ የሚችል የሃይድሮ-ኤሌክትሪክ ኃይል አቅም በስንት ይገመታል?'
      },
      options: [
        { id: 'opt-1', text: { en: '6,400 Megawatts', am: '6,400 ሜጋ ዋት' } },
        { id: 'opt-2', text: { en: '15,000 Megawatts', am: '15,000 ሜጋ ዋት' } },
        { id: 'opt-3', text: { en: '45,000 Megawatts', am: '45,000 ሜጋ ዋት' } },
        { id: 'opt-4', text: { en: '100,000 Megawatts', am: '100,000 ሜጋ ዋት' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'The exploitable hydroelectric power potential of Ethiopian rivers is estimated at about 45,000 Megawatts.',
        am: 'የኢትዮጵያ ወንዞች የሃይድሮ-ኤሌክትሪክ ኃይል የማመንጨት አቅም ወደ 45,000 ሜጋ ዋት እንደሚደርስ ይገመታል።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-geog-4-1',
      termEn: 'Western Drainage System',
      termAm: 'የምዕራብ የፍሳሽ ስርአት',
      defEn: 'Carries 60% of national runoff via Abay, Tekeze, Baro-Akobo, and Ghibe/Omo.',
      defAm: '60% የሀገሪቱን ውሃ በአባይ፣ ተከዜ፣ ባሮና ኦሞ በኩል የሚያፈስ ተፋሰስ።',
      chapter: 4
    },
    {
      id: 'fc-geog-4-2',
      termEn: 'Awash River',
      termAm: 'አዋሽ ወንዝ',
      defEn: 'Most commercially exploited river in Ethiopia, terminating in Lake Abe on the Djibouti border.',
      defAm: 'ለእርሻ በከፍተኛ ሁኔታ የዋለና ጅቡቲ ድንበር አቤ ሀይቅ ውስጥ የሚያበቃ ወንዝ።',
      chapter: 4
    },
    {
      id: 'fc-geog-4-3',
      termEn: 'Lake Tana',
      termAm: 'ጣና ሀይቅ',
      defEn: 'Largest highland lake in Ethiopia (3,600 km²) formed by volcanic damming.',
      defAm: 'በእሳተ-ገሞራ ላቫ መዘጋት የተፈጠረ ትልቁ የኢትዮጵያ ሀይቅ።',
      chapter: 4
    },
    {
      id: 'fc-geog-4-4',
      termEn: 'Hydroelectric Potential',
      termAm: 'የሃይድሮ-ኤሌክትሪክ አቅም',
      defEn: '45,000 MW total national potential enabled by high rainfall and steep mountain river gradients.',
      defAm: 'በወንዞች ቁልቁለትና በደጋ ዝናብ የተፈጠረ 45,000 ሜጋ ዋት የሃይል አቅም።',
      chapter: 4
    }
  ]
};
