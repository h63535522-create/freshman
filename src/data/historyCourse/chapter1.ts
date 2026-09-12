import { Chapter } from '../../types';

export const historyChapter1: Chapter = {
  id: 501,
  number: 1,
  title: {
    en: 'Unit 1: Introduction to History and Historiography',
    am: 'ክፍል ፩፡ የታሪክ እና የታሪክ አጻጻፍ (ሂስቶሪዮግራፊ) መግቢያ'
  },
  universityAuthor: 'Surafel Gelgelo (Ph.D.), Deressa Debu (Ph.D.), Dereje Hinew (Ph.D.), Meseret Worku (M.A.) - MoSHE (Dec. 2021)',
  overview: {
    en: 'Covers the nature and academic definition of history, distinction between past and history, periodization, the seven major uses of history, sources and critical methodology (primary, secondary, oral tradition, and oral history), historical writing traditions (Herodotus, Sima Qian, Leopold von Ranke), evolution of Ethiopian historiography (inscriptions, hagiographies, royal chronicles, foreign accounts, traditional 20th-century intellectuals, post-liberation scholars, and the professionalization of history at HSIU/IES in the 1960s), and the geographical context of Ethiopia and the Horn (Rift Valley, 5 principal drainage basins, and 3 major environmental zones).',
    am: 'የታሪክን ምንነትና አካዳሚያዊ ትርጉም፣ ያለፈ ክስተት (Past) እና የታሪክ (History) ልዩነት፣ የዘመን አከፋፈልን (Periodization)፣ ሰባቱን የታሪክ ጥቅሞች፣ የታሪክ ማስረጃዎችንና የምርምር ዘዴዎችን (ቀዳሚ፣ ሁለተኛ ደረጃ፣ የአፍ ወግ እና የቃል ታሪክ)፣ ዓለም አቀፍ የታሪክ አጻጻፍ ወጎችን (ሄሮዶተስ፣ ሲማ ቺያን፣ ሊዮፖልድ ቮን ራንኬ)፣ የኢትዮጵያን የታሪክ አጻጻፍ እድገት (ጽሑፎች፣ ገድላት፣ ዜና መዋዕሎች፣ የውጭ ተጓዦች ማስታወሻዎች፣ የ፳ኛው ክፍለ ዘመን መጀመሪያ ባህላዊ ምሁራን፣ ከድል በኋላ የተነሱ የታሪክ ጸሐፊዎች፣ እና በ፲፱፻፷ዎቹ በቀዳማዊ ኃይለ ሥላሴ ዩኒቨርሲቲ እና በኢትዮጵያ ጥናትና ምርምር ተቋም የተጀመረው ሙያዊ የታሪክ ጥናት) እንዲሁም የኢትዮጵያና የአፍሪካ ቀንድ መልክአ-ምድራዊ አውድ (ስምጥ ሸለቆ፣ ፭ቱ ዋና ዋና የውሃ ተፋሰሶች እና ፫ቱ የተፈጥሮ ዞኖች) በዝርዝር ተካተዋል።'
  },
  learningOutcomes: [
    {
      en: 'Differentiate clearly between the past (what actually took place) and history (the organized, critical study and recorded accounts of the past).',
      am: 'ባለፈው ዘመን በተጨባጭ በተከሰቱ ሁነቶች (The Past) እና በታሪክ (የተደራጀ፣ ሂሳዊ እና የተመዘገበ የጥናት ውጤት) መካከል ያለውን ልዩነት መረዳት።'
    },
    {
      en: 'Identify and evaluate categories of historical sources (primary, secondary, oral traditions, and oral history) using internal and external criticism.',
      am: 'የታሪክ ማስረጃዎችን (ቀዳሚ፣ ሁለተኛ ደረጃ፣ የአፍ ወግ እና የቃል ታሪክ) ውስጣዊና ውጫዊ የትክክለኛነትና የታማኝነት ሂስ በመጠቀም መገምገም።'
    },
    {
      en: 'Trace the historiographical evolution of Ethiopia and the Horn from early inscriptions, Ge’ez hagiographies, and royal chronicles to modern academic historiography.',
      am: 'የኢትዮጵያና የአፍሪካ ቀንድ የታሪክ አጻጻፍ እድገት ከጥንታዊ ጽሑፎች፣ የግዕዝ ገድላትና ዜና መዋዕሎች ጀምሮ እስከ ዘመናዊው የዩኒቨርሲቲ ሙያዊ የታሪክ ጥናት ድረስ ያለውን ሂደት መዘርዘር።'
    },
    {
      en: 'Analyze the impact of geographical location, Rift Valley landforms, the five principal drainage basins, and three environmental zones on human interaction and settlement.',
      am: 'የመልክአ-ምድራዊ አቀማመጥ፣ የስምጥ ሸለቆ፣ የ፭ቱ ዋና ዋና የተፋሰስ ስርአቶች እና የ፫ቱ የተፈጥሮ ዞኖች በህዝቦች የእርስ በእርስ ግንኙነትና ሰፈራ ላይ ያሳደሩትን ተፅዕኖ መተንተን።'
    }
  ],
  sections: [
    {
      id: 'sec-hist-1-1',
      number: '1.1',
      title: {
        en: '1.1 The Nature and Uses of History',
        am: '፩.፩ የታሪክ ምንነት እና ጥቅሞች'
      },
      paragraphs: [
        {
          id: 'p-hist-1-1-1',
          en: 'The term "history" is derived from the ancient Greek word "Istoria", meaning "inquiry" or "an account of one’s inquiries." The first use of the term is attributed to the ancient Greek historian Herodotus (c. 484–425 B.C.E.), who is widely regarded as the "father of history." In ordinary usage, history refers to all things that have happened in the human past. However, academically, a crucial distinction exists between "the past" (events that took place independently of the historian and await discovery) and "history" (the organized, systematic study and accounts produced through the rigorous interpretation of surviving evidence).',
          am: 'ታሪክ (History) የሚለው ቃል "ኢስቶሪያ" (Istoria) ከሚለው የጥንታዊ ግሪክ ቃል የተገኘ ሲሆን፣ ትርጉሙም "ምርመራ" ወይም "የምርመራ ውጤት ዘገባ" ማለት ነው። ቃሉን ለመጀመሪያ ጊዜ የተጠቀመበት ጥንታዊ የግሪክ የታሪክ ጸሐፊ ሄሮዶተስ (ከክርስቶስ ልደት በፊት ከ484–425) ሲሆን እርሱም "የታሪክ አባት" በመባል ይታወቃል። በዕለት ተዕለት አነጋገር ታሪክ ማለት በሰው ልጅ ያለፈ ዘመን ውስጥ የተከናወኑ ክስተቶችን ሁሉ ያመለክታል። ሆኖም በአካዳሚክ እይታ "ያለፈ ክስተት" (The Past - የታሪክ ጸሐፊው መኖር ሳያስፈልገው የተፈጸመ ሁነት) እና "ታሪክ" (History - የተገኙ ማስረጃዎችን በሂሳዊ መንገድ በማጥናት የሚዘጋጅ የተደራጀ ዘገባ) መካከል ግልጽ ልዩነት አለ።',
          highlightTerms: [
            {
              en: 'Istoria',
              am: 'ኢስቶሪያ (የግሪክ ቃል)',
              defEn: 'Ancient Greek word meaning "inquiry" or "an account of one’s inquiries", the etymological root of history.',
              defAm: '"ምርመራ" ወይም "የአንድ ሰው የምርመራ ዘገባ" የሚል ፍቺ ያለው የግሪክ ቃል ሲሆን የታሪክ ቃል መነሻ ነው።'
            },
            {
              en: 'Herodotus',
              am: 'ሄሮዶተስ (484–425 ቅ.ክ)',
              defEn: 'Ancient Greek historian commonly called the "father of history" for his systematic inquiries into the Persian Wars.',
              defAm: 'ስለ ፋርስ ጦርነቶች ባደረገው ስልታዊ ምርመራ "የታሪክ አባት" ተብሎ የሚጠራው ጥንታዊ የግሪክ የታሪክ ጸሐፊ።'
            },
            {
              en: 'Periodization',
              am: 'የዘመን አከፋፈል (Periodization)',
              defEn: 'The process of organizing and dividing the vast human past into discrete chronological periods (ancient, medieval, modern) based on significant developments.',
              defAm: 'ረጅሙን የሰው ልጅ ያለፈ ጉዞ በዋና ዋና የፖለቲካ፣ ማህበራዊና ኢኮኖሚያዊ ለውጦች ላይ በመመስረት ወደ ጥንታዊ፣ መካከለኛ እና ዘመናዊ ከፍሎ ማጥናት።'
            }
          ]
        },
        {
          id: 'p-hist-1-1-2',
          en: 'What differentiates history from other social and natural disciplines is its temporal focus: while other fields study the interaction between humans and the natural environment in its present state, history studies that interaction within the framework of continuous change taking place across time. Because human history spans immense millennia, historians divide the past into discrete eras—conventionally designated as ancient, medieval, and modern history. This analytical division is termed periodization, one of the signature methodological tools of the discipline.',
          am: 'ታሪክን ከሌሎች የተፈጥሮና የማህበራዊ ሳይንስ ትምህርቶች የሚለየው የዘመን ማዕቀፉ ነው፡ ሌሎች የትምህርት ዘርፎች በሰው ልጅ እና በአካባቢው መካከል ያለውን ግንኙነት በአሁን ጊዜ ሁኔታ ላይ ሲያጠኑ፣ ታሪክ ግን ይህንኑ ግንኙነት በጊዜ ሂደት ውስጥ በተከሰተው ቀጣይነት ያለው ለውጥና ቀጣይነት (Change and Continuity) ማዕቀፍ ውስጥ ይመረምራል። የሰው ልጅ ያለፈ ዘመን እጅግ ረጅም በመሆኑ የታሪክ ምሁራን ዘመናትን ወደ ጥንታዊ፣ መካከለኛ እና ዘመናዊ በማለት ይከፍላሉ፤ ይህም የዘመን አከፋፈል (Periodization) ይባላል።',
          highlightTerms: [
            {
              en: 'Continuity and Change',
              am: 'ቀጣይነትና ለውጥ',
              defEn: 'The dual phenomena where certain social, linguistic, and cultural practices persist across generations while others undergo transformation over time.',
              defAm: 'አንዳንድ ማህበራዊ፣ ቋንቋዊ እና ባህላዊ እሴቶች ለረጅም ዘመናት ሳይለወጡ የሚቀጥሉበትና ሌሎች ደግሞ በጊዜ ሂደት የሚለወጡበት ታሪካዊ ክስተት።'
            }
          ]
        },
        {
          id: 'p-hist-1-1-3',
          en: 'The study of history serves critical individual and societal needs across seven dimensions: (1) Understanding the Present (analyzing contemporary problems by tracing their historical roots); (2) Providing a Sense of Identity (serving for society what memory is to the individual, defining community orientation and cohesion); (3) Basic Background for Other Disciplines (providing essential historical contexts for literature, law, economics, political science, and philosophy); (4) Developing Critical Thinking Skills (evaluating conflicting evidence, discerning bias, and crafting coherent arguments); (5) Fostering Tolerance and Open-Mindedness (liberating individuals from cultural provincialism by revealing the validity of alternative traditions); (6) Supplying Endless Fascination and Aesthetic Joy; and (7) Guarding Against Political Manipulation and Propaganda (preventing history from being "written backwards" to justify modern agendas).',
          am: 'የታሪክ ትምህርት ሰባት ቁልፍ ጥቅሞች አሉት፡ (፩) የአሁንን ጊዜ በሚገባ ለመረዳት (የአሁኑን ችግሮች መነሻ ምክንያቶች ከስር መሰረታቸው መመርመር)፤ (፪) የማንነት ስሜትን ለማጎልበት (ትውስታ ለግለሰብ እንደሆነ ሁሉ ታሪክም ለማህበረሰብ የጋራ ማንነት መገለጫ ነው)፤ (፫) ለሌሎች የትምህርት ዘርፎች መሰረት ለመሆን (እንደ ስነ-ጽሑፍ፣ ህግ፣ ኢኮኖሚክስ እና ፖለቲካ ሳይንስ ላሉት አውድ መስጠት)፤ (፬) ሂሳዊ የትንታኔ ክህሎትን ለማዳበር (ማስረጃዎችን መመዘን፣ አድሏዊነትን መለየትና ሚዛናዊ መደምደሚያ ላይ መድረስ)፤ (፭) መቻቻልንና ክፍት አእምሮን ለማዳበር (ከራስ ባህል ወሰን ወጥቶ የሌሎችን እሴት ማድነቅ)፤ (፮) የማወቅ ጉጉትንና እርካታን ለመስጠት፤ እና (፯) ታሪክ ለፖለቲካዊ አጀንዳዎች ተብሎ ወደ ኋላ እንዳይገለበጥ (Written backwards) መጠበቅ።',
          highlightTerms: [
            {
              en: 'Writing History Backwards',
              am: 'ታሪክን ወደ ኋላ መጻፍ (አድሏዊነት)',
              defEn: 'The deliberate manipulation and misinterpretation of the past to justify a contemporary political agenda or propaganda.',
              defAm: 'የአሁኑን የፖለቲካ አጀንዳ ወይም ፕሮፓጋንዳ ለማፅደቅ ያለፈውን ታሪክ ሆን ተብሎ በማዛባትና በመቆራረጥ የመተርጎም ጥፋት።'
            }
          ]
        }
      ]
    },
    {
      id: 'sec-hist-1-2',
      number: '1.2',
      title: {
        en: '1.2 Sources and Methods of Historical Study',
        am: '፩.፪ የታሪክ ምንጮች እና የምርምር ዘዴዎች'
      },
      paragraphs: [
        {
          id: 'p-hist-1-2-1',
          en: 'Historians are not creative novelists; their findings must be anchored in verifiable evidence. As the famous maxim states: "Where there are no sources, there is no history." Historical sources are broadly categorized into Primary and Secondary sources. Primary sources are surviving traces of the past that are first-hand in their proximity to the event in both time and space. These include handwritten manuscripts, archival diaries, official letters, court minutes, administrative files, treaties, travelers\' diaries, photographs, maps, audiovisual recordings, and physical artifacts such as ancient coins, fossils, weapons, pottery, and architecture.',
          am: 'የታሪክ ተመራማሪዎች ልቦለድ ጸሐፊዎች አይደሉም፤ ስራቸው በማስረጃ የተደገፈ መሆን አለበት። "ማስረጃ በሌለበት ታሪክ የለም" ይባላል። የታሪክ ምንጮች በዋናነት በሁለት ይከፈላሉ፡ ቀዳሚ (Primary) እና ሁለተኛ ደረጃ (Secondary)። ቀዳሚ ማስረጃዎች ከክስተቱ ጋር በጊዜም ሆነ በቦታ ቀጥተኛ ግንኙነት ያላቸው የመጀመሪያ እጅ ቅርሶች ናቸው። እነዚህም በእጅ የተጻፉ ጥንታዊ ጽሑፎች፣ የባለስልጣናት ማስታወሻዎች፣ ደብዳቤዎች፣ የፍርድ ቤት መዛግብት፣ የውል ስምምነቶች፣ ካርታዎች፣ የድምፅና ምስል ሰነዶች እንዲሁም ቅሪተ-አካላት፣ ጥንታዊ ሳንቲሞች፣ የጦር መሳሪያዎችና ህንፃዎችን ያካትታሉ።',
          highlightTerms: [
            {
              en: 'Primary Source',
              am: 'ቀዳሚ የታሪክ ምንጭ',
              defEn: 'Firsthand contemporary testimony or surviving artifact originating directly from the time and place under study.',
              defAm: 'ክስተቱ ከተፈጸመበት ዘመንና ቦታ በቀጥታ የተገኘ የዓይን እማኝ ጽሑፍ፣ ሰነድ ወይም ቁሳዊ ቅርስ።'
            },
            {
              en: 'Secondary Source',
              am: 'ሁለተኛ ደረጃ የታሪክ ምንጭ',
              defEn: 'Second-hand published account written long after an event has occurred, interpreting and synthesizing primary data.',
              defAm: 'ክስተቱ ከተፈጸመ ከረጅም ጊዜ በኋላ በቀዳሚ ማስረጃዎች ላይ ተመስርቶ የተጻፈ መጽሐፍ፣ ጥናታዊ ጽሑፍ ወይም ትንታኔ።'
            }
          ]
        },
        {
          id: 'p-hist-1-2-2',
          en: 'Secondary sources are accounts written long after the events occurred, interpreting, evaluating, and synthesizing primary evidence. Examples include historical textbooks, academic journal articles, biographies, and documentary analyses. Oral sources represent another vital category, comprising Oral Tradition (verbal information, folk songs, sayings, and genealogies transmitted from one generation to the next) and Oral History (personal recollections and lived experiences of individuals who witnessed events). Oral sources are indispensable for documenting non-literate societies. All historical data must undergo rigorous historical criticism: External Criticism to verify the authenticity and originality of the artifact or document, and Internal Criticism to evaluate the accuracy, credibility, and potential bias of the contents.',
          am: 'ሁለተኛ ደረጃ ምንጮች ክስተቱ ከተፈጸመ ከረጅም ጊዜ በኋላ የመጀመሪያ ደረጃ ማስረጃዎችን በማቀናጀት የተጻፉ የታሪክ መማሪያ መጽሐፍት፣ የምርምር መጣጥፎች እና የህይወት ታሪኮች ናቸው። ሌላው ወሳኝ ምንጭ የአፍ መረጃ ሲሆን ይህም የአፍ ወግ (Oral Tradition - ከትውልድ ወደ ትውልድ በዘፈኖች፣ ተረቶችና የዘር ሀረጎች የሚተላለፍ) እና የቃል ታሪክን (Oral History - አንድ ግለሰብ በህይወት ዘመኑ በዓይኑ ያየውን የሚያስታውሰው ምስክርነት) ያጠቃልላል። ማንኛውም ማስረጃ ወደ ታሪክ ከመቀየሩ በፊት የትክክለኛነት ሂስ (External Criticism - ሰነዱ ኦሪጅናል መሆኑን ማረጋገጥ) እና የይዘት ሂስ (Internal Criticism - የጸሐፊውን እውነተኝነትና አድሏዊነት መፈተሽ) ማለፍ አለበት።',
          highlightTerms: [
            {
              en: 'Oral Tradition vs. Oral History',
              am: 'የአፍ ወግ እና የቃል ታሪክ',
              defEn: 'Oral tradition is transmitted across generations beyond living memory; oral history represents firsthand memories of living eyewitnesses.',
              defAm: 'የአፍ ወግ ከትውልድ ወደ ትውልድ የሚወርድ የሩቅ ዘመን መረጃ ሲሆን፤ የቃል ታሪክ ደግሞ በህይወት ያለ ሰው በግሉ ያስተዋለውን ክስተት የሚመሰክርበት ነው።'
            },
            {
              en: 'Historical Criticism',
              am: 'የታሪክ ሂስ (ትችት)',
              defEn: 'Rigorous scholarly evaluation divided into external criticism (testing authenticity/origin) and internal criticism (testing credibility/accuracy).',
              defAm: 'የማስረጃውን ትክክለኛነት (ውጫዊ ሂስ) እና የይዘቱን እውነተኝነትና ታማኝነት (ውስጣዊ ሂስ) የመፈተሽ ሳይንሳዊ የምርምር ዘዴ።'
            }
          ]
        }
      ]
    },
    {
      id: 'sec-hist-1-3',
      number: '1.3',
      title: {
        en: '1.3 Historiography of Ethiopia and the Horn',
        am: '፩.፫ የኢትዮጵያና የአፍሪካ ቀንድ የታሪክ አጻጻፍ (ሂስቶሪዮግራፊ)'
      },
      paragraphs: [
        {
          id: 'p-hist-1-3-1',
          en: 'Historiography is defined as the history of historical writing, examining how historical knowledge is produced, interpreted, and transmitted across generations. While ancient Greek historians (Herodotus, Thucydides) and the Han Dynasty Chinese historian Sima Qian (145–86 B.C.E.) pioneered early traditions, history emerged as a professional academic discipline in the 19th century in Europe. The German historian Leopold von Ranke (1795–1886) established history as an independent, scientific discipline in Berlin based on rigorous documentary analysis, earning him the title "father of modern historiography."',
          am: 'ሂስቶሪዮግራፊ (Historiography) ማለት የታሪክ አጻጻፍ ታሪክ ማለት ሲሆን፣ የሰው ልጅ ታሪኩን እንዴት እንደተረዳ፣ እንደጻፈ እና ለትውልድ እንዳስተላለፈ ይመረምራል። ጥንታዊ የግሪክ ጸሐፊዎችና የሃን ስርወ-መንግስት ቻይናዊው ሲማ ቺያን (145–86 ቅ.ክ) ቀደምት ቢሆኑም፣ ታሪክ እንደ ራሱን የቻለ ሳይንሳዊ የዩኒቨርሲቲ ትምህርት ዘርፍ የተመሰረተው በ፲፱ኛው ክፍለ ዘመን በበርሊን በጀርመናዊው ሊዮፖልድ ቮን ራንኬ (1795–1886) አማካኝነት ነው። ራንኬ "የዘመናዊው የታሪክ አጻጻፍ አባት" በመባል ይታወቃል።',
          highlightTerms: [
            {
              en: 'Historiography',
              am: 'ሂስቶሪዮግራፊ (የታሪክ አጻጻፍ ታሪክ)',
              defEn: 'The study of the methodology and history of historical writing, exploring shifting interpretations of the past through time.',
              defAm: 'ታሪክ እንዴት እንደተጻፈ እና በጊዜ ሂደት የታሪክ አረዳዶችና ትርጓሜዎች እንዴት እንደተቀየሩ የሚያጠና የትምህርት መስክ።'
            },
            {
              en: 'Leopold von Ranke',
              am: 'ሊዮፖልድ ቮን ራንኬ (1795–1886)',
              defEn: 'German historian regarded as the "father of modern historiography" for establishing history as an empirical academic discipline based on primary documents.',
              defAm: 'ታሪክ በማስረጃ ላይ የተመሰረተ ራሱን የቻለ ሳይንሳዊ ዲሲፕሊን እንዲሆን ያደረገው "የዘመናዊ የታሪክ አጻጻፍ አባት"።'
            }
          ]
        },
        {
          id: 'p-hist-1-3-2',
          en: 'The earliest external written references to the region are the 1st-century A.D. anonymous sailing handbook "Periplus of the Erythrean Sea" (mentioning the port of Adulis and King Zoscales) and the 6th-century "Christian Topography" by Cosmas Indicopleustes, which recorded Aksumite Red Sea trade and naval campaigns. Inscriptions aside, the earliest surviving indigenous Ethiopian Christian text dates to the 7th century A.D. at Abba Gerima monastery in Yeha, followed by 13th-century manuscripts from Lake Haiq Istifanos monastery in Wollo detailing lists of medieval kings.',
          am: 'ስለ ቀጠናው የተጻፉ ቀደምት የውጭ ማስረጃዎች በአንደኛው መቶ ክፍለ ዘመን ስሙ ባልታወቀ ግሪካዊ የተጻፈው "ፔሪፕለስ ኦፍ ዘ ኤሪትሪያን ሲ" (የአዱሊስ ወደብንና ንጉሥ ዞስካለስን የሚጠቅስ) እና በ፮ኛው መቶ ክፍለ ዘመን በኮስማስ ኢንዲኮፕሌውስቴስ የተዘጋጀው "ክርስቲያን ቶፖግራፊ" ናቸው። ከጽላቶችና ድንጋይ ላይ ጽሑፎች ውጪ ቀደምቱ የኢትዮጵያ የእጅ ጽሑፍ በ፯ኛው መቶ ክፍለ ዘመን በየሐ አባ ገርማ ገዳም የተገኘው ሲሆን፣ በ፲፫ኛው መቶ ክፍለ ዘመን በወሎ ሐይቅ እስጢፋኖስ ገዳም የተገኙ ጽሑፎች የመካከለኛው ዘመን ነገሥታትን ዝርዝር ይዘዋል።',
          highlightTerms: [
            {
              en: 'Periplus of the Erythrean Sea',
              am: 'ፔሪፕለስ ኦፍ ዘ ኤሪትሪያን ሲ',
              defEn: '1st-century A.D. Greek commercial handbook describing Red Sea ports, Adulis, and King Zoscales.',
              defAm: 'በ፩ኛው መ.ክ.ዘ የተጻፈ የቀይ ባህር ወደቦችን፣ አዱሊስን እና ንጉሥ ዞስካለስን የሚገልጽ የግሪክ የባህር ጉዞ መመሪያ።'
            },
            {
              en: 'Hagiographies',
              am: 'ገድላት (Hagiographies)',
              defEn: 'Biographies of Christian saints and Muslim holy men written to celebrate their piety and miracles, providing rich indirect historical data on state and society.',
              defAm: 'የቅዱሳንን ተጋድሎና ተአምራት ለማወደስ የተጻፉ መንፈሳዊ ድርሳናት ሲሆኑ ለመንግስትና ለማህበረሰብ ታሪክ ጥናት ታላቅ የሰነድ ምንጭ ናቸው።'
            }
          ]
        },
        {
          id: 'p-hist-1-3-3',
          en: 'Indigenous historical writing developed primarily through Hagiographies (spiritual biographies written in Ge’ez commemorating saints such as the Nine Saints, complemented by Muslim hagiographical traditions such as that of 19th-century Wollo saint Shaykh Ja’far Bukko of Gattira) and Royal Chronicles. Royal Chronicles first appeared in Ge’ez during the 14th century under Emperor Amde-Tsion ("The Glorious Victories of Amde-Tsion") and continued into Amharic up to the 20th century with the Chronicle of Abeto Iyasu and Empress Zewditu. Chronicles focused on monarchical genealogy, piety, and military campaigns in a strict chronological format, though they omitted socio-economic conditions and explained events primarily in religious terms.',
          am: 'የሀገር ውስጥ የታሪክ አጻጻፍ በገድላትና በዜና መዋዕሎች የበለፀገ ነበር። ገድላት የክርስቲያን ቅዱሳንን ተጋድሎ የሚዘክሩ ሲሆን በሙስሊሙ ማህበረሰብ ዘንድም በ፲፱ኛው መ.ክ.ዘ የወሎውን ሼኽ ጃዕፈር ቡኮን የመሳሰሉ የደጋግ አባቶች ገድል ተጽፏል። የነገሥታት ዜና መዋዕል በ፲፬ኛው መ.ክ.ዘ በአጼ ዐምደ ጽዮን ዘመን በግዕዝ ቋንቋ ተጀምሮ ("የዐምደ ጽዮን ድሎች") በ፳ኛው መ.ክ.ዘ በአቤቶ ኢያሱና ንግሥት ዘውዲቱ ዜና መዋዕል ተጠናቋል። ዜና መዋዕሎች የነገሥታቱን የዘር ሀረግና የጦር ውሎ በትክክለኛ ቅደም ተከተል ቢያቀርቡም፣ ክስተቶችን በመንፈሳዊ አውድ ስለሚተረጉሙና ስለ ተራው ህዝብ ኑሮ ብዙ ስለማይናገሩ ውስንነት አለባቸው።',
          highlightTerms: [
            {
              en: 'Royal Chronicles',
              am: 'የነገሥታት ዜና መዋዕል',
              defEn: 'Court-commissioned official histories detailing monarchs\' genealogies, wars, and governance from the 14th to the 20th centuries.',
              defAm: 'ከ፲፬ኛው እስከ ፳ኛው መቶ ክፍለ ዘመን በቤተ-መንግስት ጸሐፊዎች የተዘጋጁ የነገሥታት ታሪክ መዛግብት።'
            }
          ]
        },
        {
          id: 'p-hist-1-3-4',
          en: 'Important Arabic accounts include 10th-century writings of al-Masudi, 14th-century works of Ibn Battuta, and the seminal 16th-century eyewitness chronicle "Futuh al-Habasha" by Shihab ad-Din (recording the wars of Imam Ahmed ibn Ibrahim al-Ghazi). In 1593, Abba Bahrey authored his famous Ge’ez work on the Oromo and the Gadaa system. European travelers and missionaries contributed works such as Francisco Alvarez\'s "The Prester John of the Indies" (1520), James Bruce\'s travels (1769), and the founding work of European Ethiopian studies, Hiob Ludolf’s "Historia Aethiopica" (1684), compiled through collaboration with the Ethiopian scholar Abba Gorgorios (Abba Gregory).',
          am: 'ጠቃሚ የአረብኛ ሰነዶች በ፲ኛው መ.ክ.ዘ በአል-ማሱዲ፣ በ፲፬ኛው መ.ክ.ዘ በኢብን ባቱታ እንዲሁም በ፲፮ኛው መ.ክ.ዘ በሺሃብ አድ-ዲን የተጻፈው "ፉቱህ አል-ሀበሻ" (የኢማም አህመድ ግራኝን ዘመቻዎች የሚዘግበው) ናቸው። በ፲፭፻፺፫ ዓ.ም አባ ባሕርይ ስለ ኦሮሞ ህዝብና ስለ ገዳ ስርአት በግዕዝ ቋንቋ ጽፈዋል። አውሮፓውያን ሚሲዮናውያንና ተጓዦችም እንደ ፍራንሲስኮ አልቫሬዝ (፲፭፻፳)፣ ጄምስ ብሩስ (፲፯፻፷፱) እና በ፲፯ኛው መ.ክ.ዘ ከአባ ጎርጎርዮስ ጋር በመተባበር "ሂስቶሪያ ኢትዮፒካ"ን የጻፈው ሂዮብ ሉዶልፍ (Hiob Ludolf) አበርክተዋል።',
          highlightTerms: [
            {
              en: 'Futuh al-Habasha',
              am: 'ፉቱህ አል-ሀበሻ (የሀበሻ ድል)',
              defEn: 'Eyewitness Arabic account written by Shihab ad-Din detailing the 16th-century campaigns of Imam Ahmed Gragn.',
              defAm: 'በ፲፮ኛው መቶ ክፍለ ዘመን በሺሃብ አድ-ዲን የተዘጋጀና የኢማም አህመድ ግራኝን ዘመቻዎች በዝርዝር የሚያቀርብ የታሪክ መጽሐፍ።'
            },
            {
              en: 'Abba Bahrey',
              am: 'አባ ባሕርይ (1593 ዓ.ም)',
              defEn: '16th-century Ethiopian church scholar who wrote the earliest detailed Ge’ez account of the Oromo population movement and the Gadaa system.',
              defAm: 'በ፲፭፻፺፫ ዓ.ም ስለ ኦሮሞ ህዝብ እንቅስቃሴና የገዳ ስርአት ቀደምት የግዕዝ ሰነድ ያዘጋጁ ኢትዮጵያዊ ምሁር።'
            },
            {
              en: 'Hiob Ludolf & Abba Gorgorios',
              am: 'ሂዮብ ሉዶልፍ እና አባ ጎርጎርዮስ',
              defEn: 'German scholar recognized as founder of Ethiopian studies in Europe, who wrote Historia Aethiopica based on testimony from Ethiopian priest Abba Gorgorios.',
              defAm: 'በ፲፯ኛው መ.ክ.ዘ ከአባ ጎርጎርዮስ በተገኘ መረጃ "ሂስቶሪያ ኢትዮፒካ" የተሰኘውን መጽሐፍ በማዘጋጀት በአውሮፓ የኢትዮጵያ ጥናት መስራች የሆነው ጀርመናዊ ምሁር።'
            }
          ]
        },
        {
          id: 'p-hist-1-3-5',
          en: 'In the early 20th century, traditional intellectuals broke away from uncritical royal chronicle styles to write objective social and economic analyses: Aleqa Taye Gebre-Mariam, Debtera Fisseha-Giorgis Abyezgi, Aleqa Asme Giorgis (history of the Oromo), Negadras Afework Gebre-Iyesus (author of Tobiya, first Amharic novel), Negadras Gebre-Hiwot Baykedagn ("Atse Menilekna Ityopia", "Mengistna Yehizb Astedader"), and the prolific Blatten Geta Hiruy Wolde-Selassie ("Wazema", "Yehiwot Tarik"). Following liberation from Italy, Tekle-Tsadik Mekuria bridged traditional and modern historiography with eight published volumes, complemented by Yilma Deressa (16th-century history), Blatten Geta Mahteme-Selassie Wolde-Meskel ("Zikre Neger" on land tenure), and Dejazmach Kebede Tesema ("Yetarik Mastawesha").',
          am: 'በ፳ኛው መቶ ክፍለ ዘመን መጀመሪያ ባህላዊ ምሁራን ነገሥታትን ከማወደስ በመራቅ የማህበረሰብና ኢኮኖሚ ትንታኔዎችን አቀረቡ፡ አለቃ ታዬ፣ ደብተራ ፍስሐ ጊዮርጊስ፣ አለቃ አስሜ ጊዮርጊስ፣ ነጋድራስ አፈወርቅ ገብረ-ኢየሱስ (የመጀመሪያውን የአማርኛ ልቦለድ "ጦቢያ" የጻፉ)፣ ነጋድራስ ገብረ-ሕይወት ባይከዳኝ ("አጼ ምኒልክና ኢትዮጵያ" እና "መንግስትና የህዝብ አስተዳደር")፣ እና ብላቴን ጌታ ኅሩይ ወልደ-ሥላሴ ("ዋዜማ"፣ "የሕይወት ታሪክ")። ከነጻነት በኋላ ተክለ-ጻዲቅ መኩሪያ፣ ይልማ ዴሬሳ፣ ብላቴን ጌታ ማህተመ-ሥላሴ ወልደ-መስቀል ("ዝክረ ነገር") እና ደጃዝማች ከበደ ተሰማ ("የታሪክ ማስታወሻ") ድልድይ ሆነው አገልግለዋል።',
          highlightTerms: [
            {
              en: 'Gebre-Hiwot Baykedagn',
              am: 'ነጋድራስ ገብረ-ሕይወት ባይከዳኝ',
              defEn: 'Pioneering early 20th-century Ethiopian political economist and historian, author of Atse Menilekna Ityopia.',
              defAm: '"አጼ ምኒልክና ኢትዮጵያ" እና "መንግስትና የህዝብ አስተዳደር" የተባሉትን ጥልቅ የታሪክና የኢኮኖሚ መጽሐፍት ያበረከቱ ምሁር።'
            },
            {
              en: 'Tekle-Tsadik Mekuria',
              am: 'ተክለ-ጻዲቅ መኩሪያ',
              defEn: 'Prominent historian who bridged pre-1935 traditional writers and professional historians with eight comprehensive historical volumes.',
              defAm: 'ከ፲፱፻፴፭ ዓ.ም በፊት የነበሩ ባህላዊ ጸሐፊዎችንና የዘመናዊ የታሪክ ምሁራንን ያገናኘ የስምንት የታሪክ መጽሐፍት ደራሲ።'
            },
            {
              en: 'Zikre Neger',
              am: 'ዝክረ ነገር (ማህተመ-ሥላሴ ወልደ-መስቀል)',
              defEn: 'Seminal work on pre-war Ethiopian land tenure, taxation, and imperial administrative structures.',
              defAm: 'ስለ ቅድመ-ጦርነት የኢትዮጵያ የመሬት ይዞታ ስርአት፣ ግብርና አስተዳደራዊ መዋቅር የሚያትት ድንቅ የታሪክ ሰነድ።'
            }
          ]
        },
        {
          id: 'p-hist-1-3-6',
          en: 'The 1960s marked the watershed decade when history became a full-fledged academic discipline in Ethiopia. The Department of History was founded at Haile Selassie I University (HSIU) in 1963, launching BA theses, followed by MA (1979) and PhD (1990) graduate programs. Concurrently, the Institute of Ethiopian Studies (IES) was established in 1963 under its founding director, the prolific historian Richard Pankhurst, who authored 22 books and hundreds of articles. The IES published the renowned "Journal of Ethiopian Studies." This coincided with the decolonization of African historiography across Africa and universities like SOAS in London and Wisconsin-Madison in the US.',
          am: '፲፱፻፷ዎቹ በኢትዮጵያ ታሪክ እንደ ዩኒቨርሲቲ ሙያዊ ትምህርት የተቀረጸበት ወሳኝ አስርት ዓመታት ነበሩ። በ፲፱፻፷፫ ዓ.ም በቀዳማዊ ኃይለ ሥላሴ ዩኒቨርሲቲ የታሪክ ትምህርት ክፍል ተቋቋመ፤ በ፲፱፻፸፱ ዓ.ም የማስተርስ፣ በ፲፱፻፺ ዓ.ም የዶክትሬት ፕሮግራም ከፈተ። በተመሳሳይ በ፲፱፻፷፫ ዓ.ም የኢትዮጵያ ጥናትና ምርምር ተቋም (IES) በታዋቂው የታሪክ ምሁር ሪቻርድ ፓንክኸርስት (Richard Pankhurst) መሪነት ተመሰረተ። ተቋሙ "ጆርናል ኦፍ ኢትዮጵያን ስተዲስ" የተሰኘውን የታሪክ መጽሔት ማሳተም የጀመረ ሲሆን፤ ይህ ሂደት በአህጉር ደረጃ ከአፍሪካ የታሪክ ቅኝ-አገዛዝ ተፅዕኖ መላቀቅ (Decolonization of African Historiography) ጋር ተያይዞ ተከናውኗል።',
          highlightTerms: [
            {
              en: 'Institute of Ethiopian Studies (IES)',
              am: 'የኢትዮጵያ ጥናትና ምርምር ተቋም (አዲስ አበባ ዩኒቨርሲቲ)',
              defEn: 'Founded in 1963 with Richard Pankhurst as first director, serving as institutional center of historical research and publishing Journal of Ethiopian Studies.',
              defAm: 'በ፲፱፻፷፫ ዓ.ም የተመሰረተና "ጆርናል ኦፍ ኢትዮጵያን ስተዲስ"ን በማሳተም የታሪክ ጥናት ማዕከል የሆነ ተቋም።'
            },
            {
              en: 'Richard Pankhurst',
              am: 'ሪቻርድ ፓንክኸርስት (1927–2017)',
              defEn: 'Founding director of IES, unmatched prolific scholar who authored or co-authored 22 books and hundreds of articles on Ethiopian history.',
              defAm: 'የኢትዮጵያ ጥናት ተቋም መስራች ዳይሬክተር፣ ፳፪ መጽሐፍትንና በመቶዎች የሚቆጠሩ የታሪክ ጥናቶችን ያበረከተ ተመራማሪ።'
            }
          ]
        }
      ]
    },
    {
      id: 'sec-hist-1-4',
      number: '1.4',
      title: {
        en: '1.4 The Geographical Context of Ethiopia and the Horn',
        am: '፩.፪ የኢትዮጵያና የአፍሪካ ቀንድ መልክአ-ምድራዊ አውድ'
      },
      paragraphs: [
        {
          id: 'p-hist-1-4-1',
          en: 'The geographical region termed "Ethiopia and the Horn" encompasses Djibouti, Eritrea, Ethiopia, and Somalia in Northeast Africa. The physical backbone of the region was created by the Great Rift Valley, an immense tectonic fissure extending from Syria to Mozambique separating the African and Arabian plates. Topographically, the region consists of a massive central highland plateau divided by the Rift Valley and encircled along its peripheries by arid and semi-desert lowlands. This diverse topography created rich regional variations in climate, vegetation, and settlement patterns, fostering intense interdependence rather than isolation.',
          am: '"የኢትዮጵያ እና የአፍሪካ ቀንድ" ጅቡቲ፣ ኤርትራ፣ ኢትዮጵያ እና ሶማሊያን ያቀፈ ነው። የቀጠናው ዋነኛ መልክአ-ምድር ከሶሪያ እስከ ሞዛምቢክ በሚዘልቀው ታላቁ የስምጥ ሸለቆ ስምጥ የተፈጠረ ሲሆን የአፍሪካና አረቢያ ቴክቶኒክ ሳህኖችን ይለያል። በመልክአ-ምድር ረገድ በስምጥ ሸለቆ የተከፈለው ግዙፉ ደጋማ ቦታ በበረሃማና ቆላማ አካባቢዎች የተከበበ ነው። ይህ የተለያየ መልክአ-ምድር በአየር ንብረትና በሰፈራ ላይ ልዩነቶችን ቢፈጥርም፣ ህዝቦች እንዲነጣጠሉ ሳያደርግ ለዘመናት የዘለቀ የጋራ ትስስርና መደጋገፍን ፈጥሯል።',
          highlightTerms: [
            {
              en: 'Great Rift Valley',
              am: 'ታላቁ የስምጥ ሸለቆ',
              defEn: 'Massive continental tectonic fissure from Syria to Mozambique dividing the highland plateau of the Horn of Africa.',
              defAm: 'ከሶሪያ እስከ ሞዛምቢክ የሚዘልቅና የአፍሪካ ቀንድን ደጋማ ቦታ ለሁለት የሚከፍል ታላቅ የተፈጥሮ ስምጥ።'
            }
          ]
        },
        {
          id: 'p-hist-1-4-2',
          en: 'The Horn of Africa is drained by five principal drainage systems that have historically shaped human settlement and trade routes: (1) The Nile River System (including the Abbay/Blue Nile originating from Lake Tana, meeting the White Nile at Khartoum); (2) The Gibe/Omo–Gojeb System (linking southwestern Ethiopia to Lake Turkana and northern Kenya); (3) The Genale/Jubba–Shebele System (originating in eastern highlands; Genale reaches the Indian Ocean, while Shebele disappears in sand dunes near the coast); (4) The Awash River System (wholly inland within Ethiopia, connecting central highlands with the Danakil Depression); and (5) The Ethiopian Rift Valley Lakes System (an internal, self-contained drainage basin extending from Lake Ziway to Lake Turkana).',
          am: 'የአፍሪካ ቀንድ በ፭ ዋና ዋና የተፋሰስ ስርአቶች የሚታወቅ ሲሆን እነሱም የህዝቦችን ሰፈራና የንግድ መስመር ወስነዋል፡ (፩) የናይል ተፋሰስ (ከጣና ሐይቅ ተነስቶ ካርቱም ላይ ከነጩ አባይ ጋር የሚገናኘው ጥቁር አባይን ጨምሮ)፤ (፪) የጊቤ/ኦሞ-ጎጀብ ተፋሰስ (ደቡባዊ ኢትዮጵያን ከቱርካና ሐይቅና ኬንያ ጋር የሚያገናኝ)፤ (፫) የገናሌ/ጁባ-ሸበሌ ተፋሰስ (ከናፍቆት ምስራቅ ተነስተው ወደ ሶማሊያ የሚፈሱ፤ ገናሌ ውቅያኖስ ሲደርስ፣ ሸበሌ ግን አሸዋ ውስጥ ይሰምጣል)፤ (፬) የአዋሽ ወንዝ ተፋሰስ (ሙሉ በሙሉ በኢትዮጵያ ውስጥ የሚገኝና ደጋውን ከዳናኪል ዝቅተኛ ስፍራ ጋር የሚያገናኝ)፤ እና (፭) የኢትዮጵያ ስምጥ ሸለቆ ሐይቆች ተፋሰስ (ከዝዋይ እስከ ቱርካና የሚዘልቅ ዝግ የተፋሰስ ስርአት) ናቸው።',
          highlightTerms: [
            {
              en: 'Five Drainage Systems',
              am: 'አምስቱ ዋና ዋና የተፋሰስ ስርአቶች',
              defEn: 'The Nile, Gibe/Omo-Gojeb, Genale-Shebele, Awash, and Rift Valley Lakes systems.',
              defAm: 'የናይል/አባይ፣ ጊቤ/ኦሞ፣ ገናሌ-ሸበሌ፣ አዋሽ እና የስምጥ ሸለቆ ሐይቆች የተፋሰስ ስርአቶች።'
            }
          ]
        },
        {
          id: 'p-hist-1-4-3',
          en: 'Environmentally, the Horn is divided into three distinct zones: the vast Eastern Lowlands (narrow coastal belt of Eritrea, Danakil, lower Awash, Ogaden, and Somalia; characterized by pastoral economies and camel/goat husbandry); the Highland Massif (stretching from northern Eritrea to southern Ethiopia, divided by the Rift Valley, sustaining sedentary plough agriculture and mixed farming); and the Western Lowlands along the Sudanese border (hot lowlands supporting shifting cultivation of sorghum, millet, and cotton, hunting, apiculture, and gold mining). Across all these varied environments, continuous population movements, trade networks, and intermarriages have woven a complex, deeply unified societal fabric.',
          am: 'በአካባቢ ረገድ ቀጠናው በ፫ ዋና ዋና ዞኖች ይከፈላል፡ የምስራቁ ቆላማ ክፍል (የኤርትራ የባህር ጠረፍ፣ ዳናኪል፣ ታችኛው አዋሽ፣ ኦጋዴን እና ሶማሊያ፤ አርብቶ አደርነትና የግመል/ፍየል እርባታ የሚካሄድበት)፤ ደጋማው መሬት (ከኤርትራ እስከ ደቡብ ኢትዮጵያ የሚዘልቅ፣ በእርሻና በድብልቅ ግብርና የሚታወቅ)፤ እና የምዕራቡ ቆላማ ክፍል (በሱዳን ድንበር በኩል የሚገኝ፣ የማሽላ፣ ጥጥ፣ አደን፣ ማር እና የወርቅ ማዕድን የሚገኝበት)። በዚህ የተለያየ መልክአ-ምድር ውስጥ የህዝቦች እንቅስቃሴ፣ የንግድ ትስስርና ጋብቻ ጠንካራ የህዝቦች ውህደትን ፈጥሯል።',
          highlightTerms: [
            {
              en: 'Three Environmental Zones',
              am: 'ሦስቱ የተፈጥሮ ዞኖች',
              defEn: 'Eastern Lowlands (pastoral), Highland Massif (plough agriculture), and Western Lowlands (shifting cultivation & trade).',
              defAm: 'የምስራቁ ቆላማ ክፍል (አርብቶ አደር)፣ ደጋማው መሬት (የእርሻና ድብልቅ ግብርና) እና የምዕራቡ ቆላማ ክፍል (ተለዋዋጭ እርሻና ንግድ)።'
            }
          ]
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-hist-1-1',
      title: {
        en: 'Core Concepts of History and Historiographical Evolution',
        am: 'የታሪክና የታሪክ አጻጻፍ እድገት ዋና ዋና ነጥቦች'
      },
      bullets: [
        {
          en: 'History is derived from Greek "Istoria" (inquiry) and represents the organized, systematic study and critical interpretation of surviving traces of the human past.',
          am: 'ታሪክ "ኢስቶሪያ" ከሚለው የግሪክ ቃል የተገኘ ሲሆን የተገኙ ማስረጃዎችን በሂሳዊ መንገድ በማጥናትና በማደራጀት ያለፈውን የሰው ልጅ ጉዞ የሚያጠና ሳይንስ ነው።'
        },
        {
          en: 'Primary sources provide firsthand evidence from the time (manuscripts, artifacts, coins), while secondary sources represent later analytical interpretations.',
          am: 'ቀዳሚ ማስረጃዎች ከክስተቱ ዘመን በቀጥታ የተገኙ የመጀመሪያ እጅ ቅርሶች (ጽሑፎች፣ ሳንቲሞች) ሲሆኑ፤ ሁለተኛ ደረጃ ማስረጃዎች ደግሞ በነዚህ ላይ ተመስርተው የሚጻፉ ጥናቶች ናቸው።'
        },
        {
          en: 'Leopold von Ranke established history as an empirical discipline in Berlin, earning the title "father of modern historiography."',
          am: 'ሊዮፖልድ ቮን ራንኬ በበርሊን ታሪክ በማስረጃ ላይ የተመሰረተ ገለልተኛ የሳይንስ ዘርፍ እንዲሆን በማድረጉ "የዘመናዊ የታሪክ አጻጻፍ አባት" ይባላል።'
        },
        {
          en: 'Ethiopian historiography evolved from Ge’ez hagiographies and 14th-century royal chronicles to early 20th-century critical scholars (Gebre-Hiwot, Hiruy) and professional university academic research at HSIU/IES in 1963 under Richard Pankhurst.',
          am: 'የኢትዮጵያ የታሪክ አጻጻፍ ከገድላትና ዜና መዋዕል ተነስቶ በ፳ኛው መ.ክ.ዘ መጀመሪያ በነጋድራስ ገብረ-ሕይወትና ብላቴን ጌታ ኅሩይ ዘምኖ፣ በ፲፱፻፷፫ በዩኒቨርሲቲው ታሪክ ክፍልና በIES (ሪቻርድ ፓንክኸርስት) ሙያዊ ቅርጽ አግኝቷል።'
        },
        {
          en: 'The Horn of Africa is physically structured by the Great Rift Valley, five river systems (Nile, Omo, Genale-Shebele, Awash, Rift Lakes), and three ecological zones fostering mutual interdependence.',
          am: 'የአፍሪካ ቀንድ በታላቁ ስምጥ ሸለቆ፣ በ፭ቱ የውሃ ተፋሰሶች እና በ፫ቱ የተፈጥሮ ዞኖች የተዋቀረ ሲሆን ይህም ለዘመናት የዘለቀ የህዝቦች ትስስር ፈጥሯል።'
        }
      ]
    }
  ],
  matching: [
    {
      id: 'match-hist-1-1',
      concept: { en: 'Istoria', am: 'ኢስቶሪያ' },
      definition: { en: 'Ancient Greek word meaning "inquiry", etymological root of history coined by Herodotus.', am: 'የታሪክ ቃል ምንጭ የሆነ "ምርመራ" የሚል ፍቺ ያለው ጥንታዊ የግሪክ ቃል' }
    },
    {
      id: 'match-hist-1-2',
      concept: { en: 'Leopold von Ranke', am: 'ሊዮፖልድ ቮን ራንኬ' },
      definition: { en: 'German historian considered father of modern scientific historiography in Berlin.', am: 'በበርሊን ታሪክን በማስረጃ ላይ የተመሰረተ ሳይንስ ያደረገ የዘመናዊ ታሪክ አጻጻፍ አባት' }
    },
    {
      id: 'match-hist-1-3',
      concept: { en: 'Futuh al-Habasha', am: 'ፉቱህ አል-ሐበሻ' },
      definition: { en: '16th-century Arabic chronicle by Shihab ad-Din recording the wars of Imam Ahmed Gragn.', am: 'የአህመድ ግራኝን ዘመቻ የሚዘግብ የ፲፮ኛው መ.ክ.ዘ የአረብኛ የታሪክ ሰነድ' }
    },
    {
      id: 'match-hist-1-4',
      concept: { en: 'Zikre Neger', am: 'ዝክረ ነገር' },
      definition: { en: 'Authoritative historical compendium on pre-war land tenure by Mahteme-Selassie.', am: 'በብላቴን ጌታ ማኅተመ-ሥላሴ የተዘጋጀ የቅድመ-ጦርነት የመሬትና ግብር ታሪካዊ ሰነድ' }
    },
    {
      id: 'match-hist-1-5',
      concept: { en: 'Richard Pankhurst', am: 'ሪቻርድ ፓንክኸርስት' },
      definition: { en: 'Prolific historian and founding director of Institute of Ethiopian Studies (IES) in 1963.', am: 'በ፲፱፻፷፫ የኢትዮጵያ ጥናትና ምርምር ተቋም (IES) መስራች ዳይሬክተር' }
    }
  ],
  qna: [
    {
      id: 'qna-hist-1-1',
      number: 1,
      question: {
        en: 'What is the precise academic distinction between "the past" and "history"?',
        am: 'በ"ያለፈው ሁነት" (The Past) እና በ"ታሪክ" (History) መካከል ያለው አካዳሚያዊ ልዩነት ምንድን ነው?'
      },
      answer: {
        en: '"The past" designates all events that actually took place independently of the historian and still await discovery or recording. In contrast, "history" is the organized, systematic study and critical interpretation of surviving evidence about that past produced by historians in the form of verified accounts.',
        am: '"ያለፈው ሁነት" (The Past) የታሪክ ምሁሩ መኖር ሳያስፈልገው የተከሰተውን ማናቸውንም ሁነት የሚያመለክት ሲሆን፤ "ታሪክ" (History) ደግሞ በህይወት ያሉ የታሪክ ምሁራን የተገኙ ማስረጃዎችን በሂሳዊና ስልታዊ መንገድ መርምረው የሚያዘጋጁት የተደራጀ እውቀትና ትረካ ነው።'
      },
      explanation: {
        en: 'While the past is infinite and unchangeable, history is selective, critical, and subject to revision as new sources come to light.',
        am: 'ያለፈው ክስተት ማለቂያ የሌለውና የማይለወጥ ሲሆን፤ ታሪክ ግን የተመረጡ ማስረጃዎችን በመመርመር አዳዲስ መረጃዎች ሲገኙ እንደገና የሚጻፍ ነው።'
      },
      category: 'conceptual'
    },
    {
      id: 'qna-hist-1-2',
      number: 2,
      question: {
        en: 'What are the key differences between Royal Chronicles and Ge’ez Hagiographies?',
        am: 'በነገሥታት ዜና መዋዕሎች እና በገድላት መካከል ያሉ ዋና ዋና ልዩነቶች ምንድን ናቸው?'
      },
      answer: {
        en: 'Hagiographies are spiritual biographies written by clerics to celebrate the piety, asceticism, and divine miracles of Christian saints or Muslim holy men. Royal Chronicles are court-commissioned secular-political narratives written by trained scribes detailing the monarch’s genealogy, upbringing, military conquests, and statecraft in strict chronological order.',
        am: 'ገድላት የክርስቲያን ቅዱሳንን ወይም የሙስሊም ደጋግ አባቶችን መንፈሳዊ ተጋድሎና ተአምራት ለማወደስ የሚጻፉ መንፈሳዊ ሰነዶች ናቸው። የነገሥታት ዜና መዋዕሎች ደግሞ በቤተ-መንግስት ጸሐፊዎች የንጉሡን የዘር ሐረግ፣ የጦር ዘመቻና የመንግስት አስተዳደር በጊዜ ቅደም ተከተል የሚያቀርቡ ፖለቲካዊ ሰነዶች ናቸው።'
      },
      explanation: {
        en: 'Both provide immense historical value, but both require critical evaluation because chronicles glorify monarchs and hagiographies focus on miraculous interventions.',
        am: 'ሁለቱም ታላቅ የታሪክ መረጃ ቢሰጡም ነገሥታትንና ቅዱሳንን የማወደስ አድሏዊነት ስላላቸው ጥንቃቄ የተሞላበት ሂስ ያስፈልጋቸዋል።'
      },
      category: 'conceptual'
    }
  ],
  quizzes: [
    {
      id: 'quiz-hist-1-1',
      question: {
        en: 'Who is recognized in historiography as the "father of modern historiography" for establishing history as an empirical academic discipline in Berlin?',
        am: 'በበርሊን ታሪክ በማስረጃ ላይ የተመሰረተ ገለልተኛ የሳይንስ ዘርፍ እንዲሆን በማድረጉ "የዘመናዊ የታሪክ አጻጻፍ አባት" ተብሎ የሚታወቀው ማን ነው?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Herodotus', am: 'ሄሮዶተስ' } },
        { id: 'opt-2', text: { en: 'Leopold von Ranke', am: 'ሊዮፖልድ ቮን ራንኬ' } },
        { id: 'opt-3', text: { en: 'Hiob Ludolf', am: 'ሂዮብ ሉዶልፍ' } },
        { id: 'opt-4', text: { en: 'Thucydides', am: 'ቱሲዲዲስ' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'While Herodotus is the ancient "father of history", Leopold von Ranke (1795–1886) established history as an objective, source-based academic discipline in 19th-century Berlin.',
        am: 'ሄሮዶተስ የጥንታዊ ታሪክ አባት ሲባል፣ ሊዮፖልድ ቮን ራንኬ ግን በ፲፱ኛው መ.ክ.ዘ ታሪክን ሳይንሳዊ የምርምር መስክ በማድረጉ የዘመናዊ የታሪክ አጻጻፍ አባት ይባላል።'
      }
    },
    {
      id: 'quiz-hist-1-2',
      question: {
        en: 'Which earliest surviving Ethiopian Christian manuscript dates back to the 7th century A.D.?',
        am: 'በ፯ኛው መቶ ክፍለ ዘመን የተጻፈው ጥንታዊው የኢትዮጵያ የብራና ጽሑፍ የትኛው ነው?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Haiq Istifanos Gospel', am: 'የሐይቅ እስጢፋኖስ ወንጌል' } },
        { id: 'opt-2', text: { en: 'Abba Gerima Gospel in Yeha', am: 'በየሐ የአባ ገርማ ወንጌል' } },
        { id: 'opt-3', text: { en: 'Glorious Victories of Amde-Tsion', am: 'የዐምደ ጽዮን ድሎች' } },
        { id: 'opt-4', text: { en: 'Kebra Negest', am: 'ክብረ ነገስት' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The Abba Gerima Gospel manuscript discovered at Abba Gerima monastery near Yeha dates to the 7th century A.D., representing the earliest surviving written Ethiopian book.',
        am: 'በየሐ አቅራቢያ በአባ ገርማ ገዳም የተገኘው የወንጌል ብራና በ፯ኛው መቶ ክፍለ ዘመን የተጻፈ ጥንታዊ የሀገር ውስጥ ሰነድ ነው።'
      }
    },
    {
      id: 'quiz-hist-1-3',
      question: {
        en: 'Which river system of Ethiopia is entirely confined within the country\'s borders, draining into the Danakil Depression?',
        am: 'ሙሉ በሙሉ በኢትዮጵያ ድንበር ውስጥ የሚገኘውና ወደ ዳናኪል ዝቅተኛ ስፍራ የሚፈሰው የወንዝ ተፋሰስ የትኛው ነው?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The Nile Basin', am: 'የናይል/አባይ ተፋሰስ' } },
        { id: 'opt-2', text: { en: 'The Gibe/Omo Basin', am: 'የጊቤ/ኦሞ ተፋሰስ' } },
        { id: 'opt-3', text: { en: 'The Awash River System', am: 'የአዋሽ ወንዝ ተፋሰስ' } },
        { id: 'opt-4', text: { en: 'The Genale-Shebele Basin', am: 'የገናሌ-ሸበሌ ተፋሰስ' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'The Awash River system is completely landlocked within Ethiopia, originating in the central highlands and ending in Lake Abbe within the Danakil Depression.',
        am: 'የአዋሽ ወንዝ ተፋሰስ ከማዕከላዊው ደጋማ ቦታ ተነስቶ ዳናኪል በሚገኘው አቤ ሐይቅ የሚያበቃና ሙሉ በሙሉ በሀገር ውስጥ የሚገኝ ወንዝ ነው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-hist-1-1',
      termEn: 'Istoria',
      termAm: 'ኢስቶሪያ',
      defEn: 'Ancient Greek word meaning "inquiry", the root of the term history coined by Herodotus.',
      defAm: '"ምርመራ" የሚል ፍቺ ያለው ጥንታዊ የግሪክ ቃል፣ የታሪክ ቃል መነሻ።',
      chapter: 1
    },
    {
      id: 'fc-hist-1-2',
      termEn: 'Primary Source',
      termAm: 'ቀዳሚ የታሪክ ማስረጃ',
      defEn: 'Original, firsthand contemporary evidence from the period under study (manuscripts, letters, artifacts, coins).',
      defAm: 'ክስተቱ ከተፈጸመበት ወቅት በቀጥታ የተገኘ የመጀመሪያ እጅ ማስረጃ ወይም ቅርስ።',
      chapter: 1
    },
    {
      id: 'fc-hist-1-3',
      termEn: 'Leopold von Ranke',
      termAm: 'ሊዮፖልድ ቮን ራንኬ',
      defEn: '19th-century German scholar who founded modern scientific, document-based historiography in Berlin.',
      defAm: 'በ፲፱ኛው መ.ክ.ዘ ታሪክን በማስረጃ ላይ የተመሰረተ ሳይንስ ያደረገው የዘመናዊ የታሪክ አጻጻፍ አባት።',
      chapter: 1
    },
    {
      id: 'fc-hist-1-4',
      termEn: 'Royal Chronicles',
      termAm: 'ዜና መዋዕል',
      defEn: 'Official Ge’ez and Amharic records of Ethiopian monarchs written by court scribes from 14th to 20th century.',
      defAm: 'ከ፲፬ኛው እስከ ፳ኛው መቶ ክፍለ ዘመን በቤተ-መንግስት ጸሐፊዎች የተመዘገቡ የነገሥታት ታሪኮች።',
      chapter: 1
    },
    {
      id: 'fc-hist-1-5',
      termEn: 'Great Rift Valley',
      termAm: 'ታላቁ የስምጥ ሸለቆ',
      defEn: 'Continental fissure running from Syria to Mozambique, dividing the Horn of Africa into western and southeastern highlands.',
      defAm: 'ከሶሪያ እስከ ሞዛምቢክ የሚዘልቅና የአፍሪካ ቀንድን ደጋማ ቦታ ለሁለት የሚከፍል ታላቅ የተፈጥሮ ስምጥ።',
      chapter: 1
    }
  ]
};
