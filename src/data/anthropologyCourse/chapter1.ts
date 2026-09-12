import { Chapter } from '../../types';

export const anthropologyChapter1: Chapter = {
  id: 801,
  number: 1,
  title: {
    en: 'Unit 1: Introducing Anthropology and its Subject Matter',
    am: 'ክፍል ፩፡ የአንትሮፖሎጂ እና የትምህርት አውዱ መግቢያ'
  },
  universityAuthor: 'Elias Alemu (PhD, HU), Dagne Shibiru (PhD, HU), Getaneh Mehari (PhD, AAU) - MoSHE',
  overview: {
    en: 'Explores the foundational definition, historical development, scope, four major subfields (biological, archaeological, linguistic, and socio-cultural anthropology), unique core features (holism, cultural relativism, emic perspective, qualitative fieldwork), common misconceptions, and practical contributions of anthropology to society and development.',
    am: 'የአንትሮፖሎጂን መሰረታዊ ምንነትና ትርጓሜ፣ ታሪካዊ እድገት፣ አራት ዋና ዋና ንዑሳን ክፍሎች (ስነ-ህይወታዊ፣ አርኪኦሎጂያዊ፣ ስነ-ልሳናዊ እና ማህበረ-ባህላዊ አንትሮፖሎጂ)፣ ልዩ መለያ ባህሪያት (ሁለንተናዊነት፣ ባህላዊ አንጻራዊነት፣ የውስጥ አመለካከት እና የመስክ ጥናት)፣ የተሳሳቱ አመለካከቶች እና ለልማት ያለውን ዘርፈ-ብዙ አስተዋጽኦ ያብራራል።'
  },
  learningOutcomes: [
    {
      en: 'Define the etymology, scope, and subject matter of anthropology as the holistic study of humankind.',
      am: 'የአንትሮፖሎጂን የስነ-ቃል አመጣጥ፣ የጥናት ወሰን እና የሰውን ልጅ ሁለንተናዊ አኗኗር የሚያጠናበትን አውድ መግለፅ።'
    },
    {
      en: 'Distinguish the four major sub-disciplines: physical/biological, archaeological, linguistic, and socio-cultural anthropology.',
      am: 'አራቱን ዋና ዋና የአንትሮፖሎጂ ንዑሳን ክፍሎች (ስነ-ህይወታዊ፣ አርኪኦሎጂ፣ ስነ-ልሳን እና ማህበረ-ባህላዊ) በዝርዝር መለየት።'
    },
    {
      en: 'Analyze the unique characteristics of anthropology, including holism, cultural relativism, the emic perspective, and ethnographic fieldwork.',
      am: 'የአንትሮፖሎጂ ልዩ መገለጫ የሆኑትን ሁለንተናዊነት፣ ባህላዊ አንጻራዊነት፣ የውስጥ አዋቂ እይታ (Emic) እና የተሳትፎ የመስክ ጥናትን መረዳት።'
    },
    {
      en: 'Debunk prevailing misconceptions regarding the discipline and appraise its practical applications in modern public policy and development.',
      am: 'ስለ አንትሮፖሎጂ ያሉ የተሳሳቱ አመለካከቶችን ማረም እና ለዘመናዊ የህዝብ ፖሊሲና ልማት ያለውን ፋይዳ ማድነቅ።'
    }
  ],
  sections: [
    {
      id: 'anth-1-1',
      number: '1.1',
      title: {
        en: '1.1 Definition, Scope and Subject Matter of Anthropology',
        am: '፩.፩ የአንትሮፖሎጂ ምንነት፣ ወሰን እና የጥናት አውድ'
      },
      paragraphs: [
        {
          id: 'anth-1-1-p1',
          en: 'Etymologically, the term anthropology is derived from two Greek words: "anthropos" (meaning "human being" or "mankind") and "logos" (meaning "reason", "study", or "science"). Taken together, anthropology literally signifies the scientific study or reasoned inquiry of humankind or humanity. Humans embody two inseparable dimensions: biological characteristics and cultural formations. Biology influences human culture, and culture reciprocally shapes biological adaptations.',
          am: 'ከስነ-ቃል አመጣጡ አንጻር አንትሮፖሎጂ የተገኘው "አንትሮፖስ" (ማለትም የሰው ልጅ) እና "ሎጎስ" (ማለትም ጥናት፣ ሳይንስ ወይም እውቀት) ከተባሉ ሁለት የግሪክ ቃላት ነው። በአንድ ላይ ሲጣመሩ አንትሮፖሎጂ ማለት ስለ ሰው ልጅ የሚደረግ ሁለንተናዊ ሳይንሳዊ ጥናት ማለት ነው። የሰው ልጅ የማይነጣጠሉ ሁለት መሰረታዊ ባህሪያት አሉት፡ ስነ-ህይወታዊ እና ባህላዊ፤ ባህል በሰው አካላዊ እድገት ላይ ተፅዕኖ ሲያሳድር፣ ስነ-ህይወትም በባህል ላይ አዎንታዊና አሉታዊ ሚና ይጫወታል።',
          highlightTerms: [
            {
              en: 'Anthropos & Logos',
              am: 'አንትሮፖስ እና ሎጎስ',
              defEn: 'Greek roots meaning human being and study/science, forming the word anthropology.',
              defAm: 'የሰው ልጅ እና ጥናት/ሳይንስ የሚል ፍቺ ያላቸው የአንትሮፖሎጂ መሰረታዊ የግሪክ ቃላት።'
            },
            {
              en: 'Biocultural Nature',
              am: 'ስነ-ህይወታዊና ባህላዊ ቅንጅት',
              defEn: 'The inseparable, reciprocal relationship between biological evolution and cultural behavior in humans.',
              defAm: 'በሰው ልጅ ስነ-ህይወታዊ እድገት እና ባህላዊ አኗኗር መካከል ያለው የማይነጣጠል የጋራ መስተጋብር።'
            }
          ]
        },
        {
          id: 'anth-1-1-p2',
          en: 'While sociology, psychology, biology, political science, economics, and history also investigate human beings, anthropology is distinguished by its unparalleled breadth of scope. Anthropology studies people in their origins, evolutionary development, and contemporary variations across all times and geographic regions. As French anthropologist Claude Lévi-Strauss observed, anthropology has humanity as its object of research, but unlike other sciences, seeks to grasp it through its most diverse manifestations across both space and deep time.',
          am: 'ምንም እንኳን ሶሲዮሎጂ፣ ስነ-ልቦና፣ ስነ-ህይወት፣ ፖለቲካ ሳይንስ፣ ኢኮኖሚክስ እና ታሪክ የሰውን ልጅ የሚያጠኑ ቢሆንም፣ አንትሮፖሎጂ በስፋትና በጥልቀቱ ወደር የሌለው ነው። አንትሮፖሎጂ የሰውን ልጅ አመጣጥ፣ ታሪካዊ እድገት እና በዘመናት ውስጥ የታዩ የባህልና የአካል ልዩነቶችን በሙሉ ይመረምራል። ታዋቂው አንትሮፖሎጂስት ክሎድ ሌቪ-ስትሮስ እንደገለጸው አንትሮፖሎጂ የሰውን ልጅ በሁሉም ዘርፈ-ብዙ መገለጫዎቹና ልዩነቶቹ ውስጥ አጠቃሎ ይመረምራል።',
          highlightTerms: [
            {
              en: 'Scope of Anthropology',
              am: 'የአንትሮፖሎጂ የጥናት ወሰን',
              defEn: 'Spatio-temporal comprehensiveness covering all human history from ancient hominid origins to future urban life.',
              defAm: 'ከጥንታዊ የሰው ዘር ጅማሮ እስከ ዛሬው ዘመናዊ የከተማ አኗኗር ድረስ ያለውን የጊዜና የቦታ ሁለንተናዊነት የሚያካትት ስፋት።'
            }
          ]
        },
        {
          id: 'anth-1-1-p3',
          en: 'Historically, modern anthropology took shape during the 19th-century European Enlightenment, influenced by Darwinian evolutionary theory and the colonial encounter with diverse non-Western societies. In its formative decades (1870s–1880s), anthropologists worked predominantly in natural history museums, documenting "traditional" and non-industrial societies through descriptive ethnography. By the mid-20th century, anthropology shifted toward comparative ethnology to identify universal human principles. In Ethiopia, intensive professional anthropological studies emerged in the late 1950s.',
          am: 'በታሪክ ደረጃ ዘመናዊ አንትሮፖሎጂ የተመሰረተው በ19ኛው መቶ ክፍለ ዘመን በአውሮፓ የብርሃን ዘመን (Enlightenment)፣ በዳርዊን የዝግመተ-ለውጥ ንድፈ-ሀሳብ እና ቅኝ ገዢዎች ከተለያዩ የአፍሪካና የእስያ ማህበረሰቦች ጋር በፈጠሩት ግንኙነት ወቅት ነው። በመጀመሪያዎቹ ዓመታት (1870ዎቹ-1880ዎቹ) በአብዛኛው በሙዚየሞች ውስጥ የባህላዊ ማህበረሰቦችን ቅርስ በማሰባሰብ ላይ ያተኮረ ነበር። በ20ኛው መቶ ክፍለ ዘመን አጋማሽ ግን ወደ አጠቃላይ አነጻጻሪ ስነ-ህዝብ (Ethnology) አደገ። በኢትዮጵያ ደግሞ ሙያዊ የአንትሮፖሎጂ ጥናት በ1950ዎቹ መገባደጃ ላይ ተጀመረ።',
          highlightTerms: [
            {
              en: 'Ethnography vs. Ethnology',
              am: 'ኢትኖግራፊ እና ኢትኖሎጂ',
              defEn: 'Ethnography provides a descriptive account of a specific culture based on fieldwork; ethnology is the comparative, cross-cultural study of societies to build general theories.',
              defAm: 'ኢትኖግራፊ የመስክ ጥናትን መሰረት በማድረግ የአንድን ማህበረሰብ ባህል በዝርዝር መግለፅ ሲሆን፤ ኢትኖሎጂ ደግሞ የተለያዩ ባህሎችን በማነጻጸር አጠቃላይ ህጎችን ማውጣት ነው።'
            }
          ]
        }
      ]
    },
    {
      id: 'anth-1-2',
      number: '1.2',
      title: {
        en: '1.2 The Four Sub-Fields of Anthropology',
        am: '፩.፪ አራቱ የአንትሮፖሎጂ ንዑሳን ክፍሎች'
      },
      paragraphs: [
        {
          id: 'anth-1-2-p1',
          en: '1. Physical/Biological Anthropology: Investigates human biological evolution and contemporary physical variation. It encompasses Paleoanthropology (the study of fossil remains such as Australopithecus afarensis / "Lucy" to uncover ancestral evolutionary lines), Primatology (studying non-human primates like chimpanzees and gorillas to understand early behavioral adaptations), and Human Genetics (examining DNA, hereditary mechanisms, and population variations like sickle-cell anemia resistance).',
          am: '፩. ስነ-ህይወታዊ/አካላዊ አንትሮፖሎጂ፡ የሰውን ልጅ ስነ-ህይወታዊ ዝግመተ-ለውጥ እና የዘመናችን አካላዊ ልዩነቶችን ያጠናል። ፓሊዮአንትሮፖሎጂ (እንደ ድንቅነሽ/ሉሲ ያሉ የቅሪተ-አካል አጽሞችን በማጥናት የሰው ልጅ የዘር ሀረግን መመርመር)፣ ፕሪማቶሎጂ (እንደ ቺምፓንዚና ጎሪላ ያሉ የቅርብ እንስሳትን ባህሪ ማጥናት)፣ እና የሰው ጄኔቲክስ (የዲኤንኤ፣ የአርኤንኤ እና እንደ ማጭድ-ህዋስ ደም ማነስ ያሉ በዘር የሚተላለፉ ሁኔታዎችን ማጥናት) ንዑሳን ክፍሎች አሉት።',
          highlightTerms: [
            {
              en: 'Paleoanthropology',
              am: 'ፓሊዮአንትሮፖሎጂ',
              defEn: 'The study of ancient human biological evolution and prehistoric hominid fossil remains.',
              defAm: 'የጥንታዊ የሰው ዘር ቅሪተ-አካላትን እና አጽሞችን በማጥናት የሰውን ልጅ ዝግመተ-ለውጥ የሚመረምር ዘርፍ።'
            },
            {
              en: 'Primatology',
              am: 'ፕሪማቶሎጂ',
              defEn: 'The biological and behavioral study of non-human primates (apes, monkeys) to understand human evolutionary roots.',
              defAm: 'ስለ ሰው ልጅ የቀደመ ባህሪ ፍንጭ ለማግኘት እንደ ቺምፓንዚ ያሉ ፕሪሜቶችን የሚያጠና ሳይንስ።'
            }
          ]
        },
        {
          id: 'anth-1-2-p2',
          en: '2. Archaeological Anthropology: Reconstructs past human cultures by excavating and analyzing physical remains left behind. Archaeologists examine Artefacts (portable human-made objects like tools, pottery, coins), Features (non-portable human-made remnants like foundations, fireplaces, steles, monuments), and Eco-facts (natural organic remains used by past peoples, such as pollen, animal bones, and seeds). Archaeology is divided into Prehistoric Archaeology (studying the deep era before writing, spanning from early stone tools 2.5 million years ago to roughly 6,000 years ago) and Historical Archaeology (reconstructing past cultures that produced written records).',
          am: '፪. አርኪኦሎጂያዊ አንትሮፖሎጂ፡ የጥንት ህዝቦችን አኗኗር መሬት በመቆፈር እና የተተዉ አካላዊ ቅርሶችን በመተንተን ይመረምራል። አርኪኦሎጂስቶች ቅርሶችን (Artefacts - የሚንቀሳቀሱ እንደ ድንጋይ መሳሪያዎች፣ ሳንቲሞች፣ ሸክላዎች)፣ ቋሚ ቅርሶችን (Features - የማይነቃነቁ እንደ ህንጻ መሰረቶች፣ ሀውልቶች፣ ምድጃዎች) እና ስነ-ምህዳራዊ ቅሪቶችን (Eco-facts - ሰዎች የተጠቀሙባቸው የእንስሳት አጥንቶች፣ የአፈርና የእጽዋት ዘሮች) ይመረምራሉ። ቅድመ-ታሪክ አርኪኦሎጂ (የጽህፈት ጥበብ ከመፈጠሩ በፊት ከ2.5 ሚሊዮን ዓመታት በፊት ያሉትን) እና ታሪካዊ አርኪኦሎጂ (የተጻፉ መዛግብት ያላቸውን ማህበረሰቦች) ያካትታል።',
          highlightTerms: [
            {
              en: 'Artefacts vs. Features vs. Eco-facts',
              am: 'ተንቀሳቃሽ ቅርስ፣ ቋሚ ቅርስ እና ስነ-ምህዳራዊ ቅሪት',
              defEn: 'Artefacts are portable human-made objects; features are non-portable human structures; eco-facts are natural organic remains used by humans.',
              defAm: 'አርቴፋክት ተንቀሳቃሽ የሰው ሰራሽ እቃ ነው፤ ፊቸር የማይነሳ ቋሚ መዋቅር ነው፤ ኢኮ-ፋክት ደግሞ ሰዎች የተገለገሉበት የተፈጥሮ ኦርጋኒክ ቅሪት ነው።'
            }
          ]
        },
        {
          id: 'anth-1-2-p3',
          en: '3. Linguistic Anthropology: Explores human language as a cultural resource and speech as a cultural practice across space and time. Branches include Descriptive/Structural Linguistics (analyzing phonetics, syntax, and grammar, especially of unwritten indigenous languages), Historical Linguistics (tracing the historical emergence, divergence, and migration of language families), Ethno-linguistics / Cultural Linguistics (investigating how language reflects cultural priorities, such as multiple words for snow among the Inuit or cattle terms among the Maasai), and Socio-linguistics (studying dialects, social variation, bilingualism, and class registers).',
          am: '፫. ስነ-ልሳናዊ አንትሮፖሎጂ፡ ቋንቋን እንደ ባህላዊ ሀብት እና ንግግርን እንደ ማህበራዊ ተግባር ይመረምራል። ገላጭ/መዋቅራዊ ስነ-ልሳን (ያልተጻፉ ቋንቋዎችን ድምፅ፣ ሰዋሰውና አወቃቀር መመዝገብ)፣ ታሪካዊ ስነ-ልሳን (የቋንቋዎችን የዘር ሀረግ፣ ለውጥና ስደት መከታተል)፣ ባህላዊ ስነ-ልሳን (ቋንቋ የህብረተሰቡን እሴቶች እንዴት እንደሚያንጸባርቅ፣ ለምሳሌ በማሳይ ማህበረሰብ ውስጥ ለከብቶች ያሉ በርካታ ስሞች)፣ እና ማህበረ-ልሳን (የቋንቋ ዘዬዎችን፣ ቀበሌኛዎችን እና ባለሁለት ቋንቋ ተናጋሪነትን) ያካትታል።',
          highlightTerms: [
            {
              en: 'Ethno-linguistics',
              am: 'ባህላዊ ስነ-ልሳን',
              defEn: 'The study of the relationship between language and culture, exploring how cultural worldviews shape vocabulary and perception.',
              defAm: 'በባህል እና በቋንቋ መካከል ያለውን ቁርኝት እና ቋንቋ የሰዎችን አስተሳሰብ እንዴት እንደሚቀርፅ የሚያጠና ዘርፍ።'
            }
          ]
        },
        {
          id: 'anth-1-2-p4',
          en: '4. Socio-Cultural Anthropology: The largest subfield, which examines living human societies and cultures. While "society" refers to an organized group of interacting people, "culture" represents their shared, learned way of life. It integrates two approaches: Ethnography (firsthand, long-term empirical fieldwork living in a community) and Ethnology (cross-cultural comparative synthesis to identify underlying cultural principles). Specialized applied areas include Medical Anthropology, Urban Anthropology, Development Anthropology, Political Anthropology, and Economic Anthropology.',
          am: '፬. ማህበረ-ባህላዊ አንትሮፖሎጂ፡ በህይወት ያሉ የሰው ልጆችን ባህልና ማህበረሰብ የሚያጠና ትልቁ ንዑስ ክፍል ነው። "ማህበረሰብ" የተደራጁ ሰዎችን ስብስብ ሲያመለክት፣ "ባህል" ደግሞ የጋራ የአኗኗር ስልታቸውን ይወክላል። ኢትኖግራፊ (የቀጥታ የመስክ ምልከታና አብሮ መኖር) እና ኢትኖሎጂ (ባህሎችን በማነጻጸር አጠቃላይ መርሆችን ማመንጨት) የተባሉ ስልቶችን ያቀናጃል። የህክምና፣ የከተማ፣ የልማት፣ የፖለቲካ እና የኢኮኖሚ አንትሮፖሎጂ የመሳሰሉ የተግባር ዘርፎችን ያካትታል።',
          highlightTerms: [
            {
              en: 'Socio-Cultural Anthropology',
              am: 'ማህበረ-ባህላዊ አንትሮፖሎጂ',
              defEn: 'The subfield studying the diversity of contemporary living human societies, symbolic systems, social structures, and lifeways.',
              defAm: 'የዘመናችንን የሰው ልጆች ማህበረሰባዊ አወቃቀር፣ እምነቶች፣ ወጎች እና የአኗኗር ዘይቤዎችን የሚያጠና ትልቁ የአንትሮፖሎጂ ዘርፍ።'
            }
          ]
        }
      ]
    },
    {
      id: 'anth-1-3',
      number: '1.3',
      title: {
        en: '1.3 Unique Features, Misconceptions, and Contributions of Anthropology',
        am: '፩.፫ የአንትሮፖሎጂ ልዩ መገለጫዎች፣ የተሳሳቱ አመለካከቶች እና ፋይዳዎች'
      },
      paragraphs: [
        {
          id: 'anth-1-3-p1',
          en: 'Anthropology is set apart by four unique defining characteristics: (1) Holism: viewing humans as total organisms integrating biology, history, language, and culture; (2) Cultural Relativism: evaluating cultural practices within their own context and logic rather than making ethnocentric moral judgments; (3) The Emic Perspective: prioritizing the insider’s viewpoint and subjective meaning that community members attach to their own behaviors (contrasted with the external, objective Etic perspective); and (4) Ethnographic Fieldwork: immersive, long-term qualitative research where the researcher "tunes-in, hangs out, and hangs on" through participant observation and key informant interviews.',
          am: 'አንትሮፖሎጂን ከሌሎች የሳይንስ መስኮች የሚለዩት አራት ዋና ዋና መለያዎች አሉ፡ (፩) ሁለንተናዊነት (Holism)፡ የሰውን ልጅ ስነ-ህይወት፣ ታሪክ፣ ቋንቋ እና ባህል አቀናጅቶ እንደ አንድ ሙሉ አካል መመልከት፤ (፪) ባህላዊ አንጻራዊነት (Cultural Relativism)፡ የሌሎችን ባህል በራስ መነጽር ሳያኮስሱ በራሱ አውድና ምክንያት መረዳት፤ (፫) የውስጥ አመለካከት (Emic perspective)፡ የማህበረሰቡ አባላት ለድርጊታቸው የሚሰጡትን ውስጣዊ ትርጉምና እይታ ማዳመጥ (ከውጫዊው ኤቲክ/Etic እይታ በተቃራኒ)፤ እና (፬) የተሳትፎ የመስክ ጥናት (Ethnographic Fieldwork)፡ ተመራማሪው በማህበረሰቡ ውስጥ ቢያንስ ለአንድ ዓመት አብሮ በመኖርና በመሳተፍ የሚያከናውነው ጥልቅ ጥናት።',
          highlightTerms: [
            {
              en: 'Holism',
              am: 'ሁለንተናዊነት (Holism)',
              defEn: 'An approach that studies the whole of the human condition: past, present, and future; biology, society, language, and culture.',
              defAm: 'የሰውን ልጅ ያለፈ፣ የአሁንና የወደፊት ስነ-ህይወታዊ፣ ማህበራዊ እና ባህላዊ ሁኔታዎች በአንድነት የማጥናት አጠቃላይ አካሄድ።'
            },
            {
              en: 'Emic vs. Etic',
              am: 'ኤሚክ እና ኤቲክ እይታ',
              defEn: 'Emic is the native, insider-oriented approach focusing on local explanations; Etic is the scientist-oriented, outsider analytical perspective.',
              defAm: 'ኤሚክ የማህበረሰቡ ውስጣዊ አባላት ለባህላቸው የሚሰጡት ትርጓሜ ሲሆን፤ ኤቲክ ደግሞ የውጭ ተመራማሪው የሚሰጠው ሳይንሳዊ ትንታኔ ነው።'
            }
          ]
        },
        {
          id: 'anth-1-3-p2',
          en: 'Several stubborn misconceptions surround anthropology: (1) that it only studies "primitive" or isolated tribes (debunked: anthropologists actively investigate multinational corporations, urban slums, and high-tech institutions); (2) that it only focuses on rural communities (debunked: Urban Anthropology investigates major metropolitan centers); (3) that it is exclusively about digging up fossils like Lucy (debunked: fossil evolution is only one part of biological anthropology); and (4) that its aim is to freeze traditional cultures in museums away from development (debunked: applied anthropologists empower local communities to participate actively in sustainable, culturally sensitive development projects).',
          am: 'ስለ አንትሮፖሎጂ በርካታ የተሳሳቱ አመለካከቶች ይስተዋላሉ፡ (፩) ጥንታዊና ኋላቀር ማህበረሰቦችን ብቻ ያጠናል የሚለው (ስህተት ነው፡ ዘመናዊ የከተማና የኢንዱስትሪ ማህበረሰቦችንም ያጠናል)፤ (፪) የገጠር ማህበረሰቦችን ብቻ ይመለከታል የሚለው (ስህተት ነው፡ የከተማ አንትሮፖሎጂ ሜትሮፖሊታን ከተሞችን ያጠናል)፤ (፫) ቅሪተ-አካልና ሉሲን ብቻ ይቆፍራል የሚለው (ስህተት ነው፡ ስነ-ህይወት ከበርካታ ዘርፎች አንዱ ብቻ ነው)፤ እና (፬) ባህሎችን በሙዚየም ጠብቆ ከልማት እንዲገለሉ ያደርጋል የሚለው (ስህተት ነው፡ ተግባራዊ አንትሮፖሎጂስቶች ህብረተሰቡ በልማት ውስጥ በባህሉ መሰረት ንቁ ተሳታፊ እንዲሆን ያግዛሉ)።',
          highlightTerms: [
            {
              en: 'Applied Anthropology',
              am: 'ተግባራዊ አንትሮፖሎጂ',
              defEn: 'The application of anthropological data, perspectives, and methods to identify and solve contemporary human problems.',
              defAm: 'የአንትሮፖሎጂ እውቀትን፣ መረጃዎችን እና ስልቶችን በወቅታዊ ማህበራዊ ችግሮችና የልማት ስራዎች ላይ ማዋል::'
            }
          ]
        },
        {
          id: 'anth-1-3-p3',
          en: 'Anthropology makes immense contributions: it provides cross-cultural understanding, dispels the illusion that one’s own culture is the only normal way of living, acts as a mirror showing human commonalities beneath surface diversity, and directly combats ethnocentrism, prejudice, and racism. In international development, health, and policy, anthropological insights ensure that interventions respect local customs, protect vulnerable groups from harmful top-down projects, and leverage indigenous knowledge for sustainable progress.',
          am: 'አንትሮፖሎጂ ያለው ፋይዳ እጅግ የጎላ ነው፡ የባህል ልዩነቶችን ለመረዳት ያስችላል፤ የራስ ባህል ብቻ ብቸኛው ትክክለኛ መንገድ ነው የሚለውን የተሳሳተ እምነት ይሰብራል፤ የሰውን ልጅ አንድነት እንደ መስተዋት ያሳያል፤ እና ራስ-ተኮርነትን (Ethnocentrism) እንዲሁም የዘረኝነት አመለካከቶችን ይዋጋል። በልማት፣ በጤና እና በህዝብ ፖሊሲ ረገድ ፕሮጀክቶች የማህበረሰቡን ወግና እሴት ያከበሩ እንዲሆኑ እና አገር በቀል እውቀቶች ለዘላቂ ልማት እንዲውሉ ያደርጋል።',
          highlightTerms: [
            {
              en: 'Combating Ethnocentrism',
              am: 'ራስ-ተኮርነትን መዋጋት',
              defEn: 'Overcoming the biased tendency to view one’s own cultural group as superior and others as inferior or defective.',
              defAm: 'የራስን ባህል ብቸኛ የበላይ እና ትክክለኛ፣ የሌሎችን ደግሞ ኋላቀር አድርጎ የመፈረጅ ስህተትን ማስወገድ።'
            }
          ]
        }
      ]
    }
  ],
  coreConcepts: [
    {
      termEn: 'Anthropology',
      termAm: 'አንትሮፖሎጂ',
      defEn: 'The holistic and comparative scientific study of humankind in all times and places, exploring biological, historical, linguistic, and cultural dimensions.',
      defAm: 'የሰውን ልጅ አመጣጥ፣ ስነ-ህይወታዊ ዝግመተ-ለውጥ፣ ቋንቋ እና ማህበራዊ ባህል በሁለንተናዊ መልኩ የሚያጠና ሳይንስ።'
    },
    {
      termEn: 'Holism',
      termAm: 'ሁለንተናዊነት (Holism)',
      defEn: 'The fundamental anthropological principle of studying the complete interconnectedness of human biology, history, language, and society.',
      defAm: 'የሰውን ልጅ ስነ-ህይወታዊ፣ ታሪካዊ፣ ልሳናዊ እና ማህበራዊ ገጽታዎች በአጠቃላይ የተሳሰሩ አድርጎ የመመርመር መርህ።'
    },
    {
      termEn: 'Cultural Relativism',
      termAm: 'ባህላዊ አንጻራዊነት',
      defEn: 'The methodological stance that beliefs and practices should be understood based on that culture’s own standards, context, and logic, rather than judged against outsider criteria.',
      defAm: 'የማንኛውንም ማህበረሰብ ባህል በውጭ ሰው መመዘኛ ሳይሆን በራሱ ውስጣዊ እሴቶች፣ አውድና አመክንዮ የመረዳት አመለካከት።'
    },
    {
      termEn: 'Emic Perspective',
      termAm: 'ኤሚክ እይታ (Emic Perspective)',
      defEn: 'The insider perspective focusing on how local actors perceive, categorize, and assign meaning to their own cultural universe.',
      defAm: 'የአንድ ማህበረሰብ አባላት ለድርጊታቸውና ለባህላቸው የሚሰጡትን ውስጣዊ ትርጉምና እይታ ማዳመጥ።'
    },
    {
      termEn: 'Participant Observation',
      termAm: 'የተሳትፎ ምልከታ (Participant Observation)',
      defEn: 'A primary ethnographic fieldwork method where the researcher immerses in the daily life of a community, participating in their activities while recording observations.',
      defAm: 'ተመራማሪው በማህበረሰቡ የእለት ተእለት እንቅስቃሴዎች ውስጥ በቀጥታ እየተሳተፈ መረጃ የሚሰበስብበት የመስክ ጥናት ስልት።'
    },
    {
      termEn: 'Artefacts vs. Features',
      termAm: 'አርቴፋክት እና ፊቸር',
      defEn: 'Artefacts are portable objects made or modified by past humans; features are immovable archaeological remnants such as house foundations and burial mounds.',
      defAm: 'አርቴፋክት ሊንቀሳቀሱ የሚችሉ ጥንታዊ የሰው ሰራሽ እቃዎች ሲሆኑ፤ ፊቸር ደግሞ ከመሬት የማይነቀሉ ቋሚ መዋቅሮች (እንደ ህንጻዎችና ሀውልቶች) ናቸው።'
    }
  ],
  summaries: [
    {
      id: 'sum-anth-1-1',
      title: {
        en: 'Summary of Unit 1: Foundations and Subfields of Anthropology',
        am: 'የክፍል ፩ ማጠቃለያ፡ የአንትሮፖሎጂ መሰረቶችና ንዑሳን ክፍሎች'
      },
      bullets: [
        {
          en: 'Anthropology (anthropos + logos) is the broadest discipline studying humans holistically across biological, cultural, spatio-temporal, and linguistic dimensions.',
          am: 'አንትሮፖሎጂ የሰውን ልጅ ሁለንተናዊ አኗኗር በስነ-ህይወት፣ በባህል፣ በቦታ፣ በጊዜ እና በቋንቋ የሚያጠና እጅግ ሰፊ የሳይንስ መስክ ነው።'
        },
        {
          en: 'The four major subfields are Physical/Biological Anthropology (paleoanthropology, primatology, genetics), Archaeological Anthropology (artefacts, features, eco-facts; prehistoric and historical), Linguistic Anthropology (descriptive, historical, ethno-linguistics, socio-linguistics), and Socio-Cultural Anthropology (ethnography and ethnology).',
          am: 'አራቱ ዋና ንዑሳን ክፍሎች ስነ-ህይወታዊ አንትሮፖሎጂ፣ አርኪኦሎጂ፣ ስነ-ልሳናዊ አንትሮፖሎጂ እና ማህበረ-ባህላዊ አንትሮፖሎጂ (ኢትኖግራፊና ኢትኖሎጂ) ናቸው።'
        },
        {
          en: 'Core distinctive features include Holism, Cultural Relativism, the Emic (insider) perspective, and immersive qualitative Ethnographic Fieldwork through participant observation.',
          am: 'ዋና ዋና መለያዎቹ ሁለንተናዊነት፣ ባህላዊ አንጻራዊነት፣ የውስጥ አመለካከት (Emic) እና የተሳትፎ የመስክ ጥናት ናቸው።'
        },
        {
          en: 'Anthropology dispels ethnocentric stereotypes, refutes misconceptions about "primitive" groups or pure fossil studies, and empowers communities through applied development initiatives.',
          am: 'አንትሮፖሎጂ ራስ-ተኮርነትን ያክማል፤ ስለ ኋላቀር ማህበረሰቦች ብቻ ያጠናል የሚሉ የተሳሳቱ አመለካከቶችን ያስወግዳል፤ እና ለማህበራዊ ልማት ተግባራዊ መፍትሄዎችን ይሰጣል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-anth-1-1',
      number: 1,
      category: 'conceptual',
      question: {
        en: 'What distinguishes anthropology from other social sciences and humanities that also study human beings?',
        am: 'አንትሮፖሎጂን የሰውን ልጅ ከሚያጠኑ ሌሎች የማህበራዊ ሳይንስ እና የሰብአዊነት ዘርፎች የሚለየው ምንድን ነው?'
      },
      answer: {
        en: 'While disciplines like sociology, history, and psychology examine specific aspects or timeframes of human society, anthropology is distinguished by its holistic approach, universal spatio-temporal scope (covering earliest hominid origins to contemporary societies across all ecological zones), biocultural framework (examining both physical biology and culture as intertwined), cultural relativism, and its signature methodology of extended ethnographic fieldwork and participant observation.',
        am: 'እንደ ሶሲዮሎጂ፣ ታሪክ እና ስነ-ልቦና ያሉ ዘርፎች የተወሰኑ የሰው ልጅ ገጽታዎችን ብቻ የሚያጠኑ ሲሆን፤ አንትሮፖሎጂ ግን በሁለንተናዊ አቀራረቡ (Holism)፣ እጅግ ሰፊ በሆነው የጊዜና የቦታ ሽፋኑ፣ ስነ-ህይወትንና ባህልን አቀናጅቶ በሚመረምርበት ስልቱ፣ ባህላዊ አንጻራዊነት ላይ ባለው ጽኑ እምነት እና ጥልቅ የተሳትፎ የመስክ ጥናት በማካሄድ ልዩነቱን ያረጋግጣል።'
      },
      explanation: {
        en: 'The combination of holism, biocultural integration, and long-term fieldwork constitutes anthropology’s distinctive disciplinary signature.',
        am: 'ሁለንተናዊነት፣ ስነ-ህይወትን ከባህል ጋር የማስተሳሰር ጥበብ እና የተሳትፎ የመስክ ጥናት የአንትሮፖሎጂ ዋና መለያዎች ናቸው።'
      }
    },
    {
      id: 'qna-anth-1-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'Explain the difference between an Emic and an Etic perspective in socio-cultural anthropological research.',
        am: 'በማህበረ-ባህላዊ አንትሮፖሎጂ ጥናት ውስጥ በኤሚክ (Emic) እና በኤቲክ (Etic) እይታዎች መካከል ያለውን ልዩነት አብራራ።'
      },
      answer: {
        en: 'The Emic perspective represents the "insider’s view"—how members of a culture perceive, conceptualize, and explain their own social rules, beliefs, and behaviors using their own categories. The Etic perspective represents the "outsider’s view"—the scientific, objective framework, hypotheses, and analytical categories applied by the researcher to compare cultures across societies.',
        am: 'የኤሚክ (Emic) እይታ "የውስጥ አዋቂው እይታ" ሲሆን የማህበረሰቡ አባላት ለባህላቸው፣ ለእምነታቸው እና ለድርጊቶቻቸው የሚሰጡትን ውስጣዊ ትርጓሜ ይመለከታል። የኤቲክ (Etic) እይታ ደግሞ "የውጭ ተመራማሪው እይታ" ሲሆን ሳይንሳዊ መርሆችንና ንድፈ-ሀሳቦችን ተጠቅሞ ማህበረሰቡን ከሌሎች ጋር በማነጻጸር የሚሰጠው ትንታኔ ነው።'
      },
      explanation: {
        en: 'Good ethnographers prioritize the emic view to understand internal cultural logic before synthesizing cross-cultural etic conclusions.',
        am: 'ጥሩ አንትሮፖሎጂስት በመጀመሪያ የማህበረሰቡን ውስጣዊ እይታ (Emic) በጥልቀት ይረዳል፤ ከዚያም ሳይንሳዊ ማነጻጸሪያን (Etic) ያዘጋጃል።'
      }
    },
    {
      id: 'qna-anth-1-3',
      number: 3,
      category: 'case_study',
      question: {
        en: 'Why is it a misconception to assume that anthropology is solely interested in remote, "primitive" societies or fossil excavations?',
        am: 'አንትሮፖሎጂ ርቀው የሚገኙ "ኋላቀር" ማህበረሰቦችን ወይም ቅሪተ-አካል ቆፋሪዎችን ብቻ ያጠናል የሚለው አስተሳሰብ የተሳሳተ የሆነው ለምንድን ነው?'
      },
      answer: {
        en: 'Although historical anthropology in the 19th century focused heavily on isolated groups and fossil collections in museums, contemporary anthropology actively studies complex industrial societies, urban institutions, digital communities, and multinational corporations through Urban and Applied Anthropology. Furthermore, paleoanthropology is merely one branch of biological anthropology, which also encompasses genetics, health disparities, and modern adaptation.',
        am: 'ምንም እንኳን በ19ኛው መቶ ክፍለ ዘመን ጥናቶች በባህላዊ ማህበረሰቦች እና በሙዚየም ቅሪተ-አካላት ላይ ያተኮሩ የነበሩ ቢሆንም፣ የዛሬው ዘመናዊ አንትሮፖሎጂ ግን የከተማ ህይወትን፣ የቴክኖሎጂ ማህበረሰቦችን፣ ፋብሪካዎችንና ግዙፍ ተቋማትን ያጠናል። እንዲሁም ቅሪተ-አካል ከስነ-ህይወታዊ አንትሮፖሎጂ በርካታ ንዑሳን ክፍሎች ውስጥ አንዱ ብቻ ነው።'
      },
      explanation: {
        en: 'Urban and applied anthropology prove that the discipline investigates every sphere of human existence worldwide.',
        am: 'የከተማ እና የተግባር አንትሮፖሎጂ የሰውን ልጅ ዘመናዊ አኗኗር በየትኛውም ስፍራ የሚመረምሩ መሆናቸውን ያረጋግጣሉ።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-anth-1-1',
      number: 1,
      question: {
        en: 'Which Greek roots combine to form the word "Anthropology", and what is their literal meaning?',
        am: '"አንትሮፖሎጂ" የሚለውን ቃል የፈጠሩት የግሪክ ስሮች የትኞቹ ናቸው፣ ቀጥተኛ ፍቻቸውስ ምንድነው?'
      },
      options: [
        { id: 'a', text: { en: 'Anthropos (human/mankind) and Logos (study/science)', am: 'አንትሮፖስ (የሰው ልጅ) እና ሎጎስ (ጥናት/ሳይንስ)' } },
        { id: 'b', text: { en: 'Ethnos (culture) and Graphia (writing)', am: 'ኢትኖስ (ባህል) እና ግራፊያ (መጻፍ)' } },
        { id: 'c', text: { en: 'Socius (society) and Logos (study/science)', am: 'ሶሺየስ (ማህበረሰብ) እና ሎጎስ (ሳይንስ)' } },
        { id: 'd', text: { en: 'Archaeo (ancient) and Logos (science)', am: 'አርኬኦ (ጥንታዊ) እና ሎጎስ (ሳይንስ)' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Anthropology combines the Greek "anthropos" (human/mankind) and "logos" (study/science), literally meaning the scientific study of humankind.',
        am: 'አንትሮፖሎጂ የተገኘው አንትሮፖስ (ሰው) እና ሎጎስ (ሳይንስ/ጥናት) ከተባሉ ሁለት የግሪክ ቃላት ሲሆን ትርጉሙም ስለ ሰው ልጅ የሚደረግ ሳይንሳዊ ጥናት ነው።'
      }
    },
    {
      id: 'quiz-anth-1-2',
      number: 2,
      question: {
        en: 'An archaeologist discovers a collection of ancient stone fireplaces and house foundations that cannot be moved from the site. These are classified as:',
        am: 'አንድ አርኪኦሎጂስት ከመሬት የማይነቀሉ የጥንት ሰዎች የመኖሪያ ቤት መሰረቶችን እና ምድጃዎችን አገኘ። እነዚህ ምን ተብለው ይመደባሉ?',
        },
      options: [
        { id: 'a', text: { en: 'Artefacts', am: 'ተንቀሳቃሽ ቅርሶች (Artefacts)' } },
        { id: 'b', text: { en: 'Features', am: 'ቋሚ ቅርሶች (Features)' } },
        { id: 'c', text: { en: 'Eco-facts', am: 'ስነ-ምህዳራዊ ቅሪቶች (Eco-facts)' } },
        { id: 'd', text: { en: 'Fossils', am: 'ፎሲሎች (Fossils)' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Archaeological features are human-made or modified remains that cannot be readily moved from the site, such as house foundations, fireplaces, steles, and postholes.',
        am: 'ቋሚ ቅርሶች (Features) እንደ ህንጻ መሰረቶች፣ ሀውልቶች እና ምድጃዎች ያሉ ሰዎች ያበጇቸው ነገር ግን ከመሬት ተነቅለው ወደ ላቦራቶሪ ሊወሰዱ የማይችሉ ቅርሶች ናቸው።'
      }
    },
    {
      id: 'quiz-anth-1-3',
      number: 3,
      question: {
        en: 'Which branch of linguistic anthropology investigates how vocabulary reflects cultural values, such as specific snow terms among the Inuit or cattle terms among the Maasai?',
        am: 'የአንድ ማህበረሰብ ቋንቋ የባህል እሴቶቹን እንዴት እንደሚያንጸባርቅ (ለምሳሌ በአይኑዊት ዘንድ ለበረዶ፣ በማሳይ ዘንድ ለከብቶች ያሉ ቃላት) የሚያጠናው የትኛው ነው?',
        },
      options: [
        { id: 'a', text: { en: 'Structural/Descriptive Linguistics', am: 'መዋቅራዊ/ገላጭ ስነ-ልሳን' } },
        { id: 'b', text: { en: 'Ethno-linguistics (Cultural Linguistics)', am: 'ባህላዊ ስነ-ልሳን (Ethno-linguistics)' } },
        { id: 'c', text: { en: 'Historical Linguistics', am: 'ታሪካዊ ስነ-ልሳን' } },
        { id: 'd', text: { en: 'Phonetics', am: 'የድምፅ ጥናት (Phonetics)' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Ethno-linguistics (cultural linguistics) examines the direct relationship between language and culture, showing how vocabulary mirrors environmental and cultural priorities.',
        am: 'ባህላዊ ስነ-ልሳን በቋንቋ እና በባህል መካከል ያለውን ቁርኝት እና ቃላት የማህበረሰቡን የአኗኗር ቅድሚያዎች እንዴት እንደሚያንጸባርቁ ያጠናል።'
      }
    },
    {
      id: 'quiz-anth-1-4',
      number: 4,
      question: {
        en: 'The methodological commitment in anthropology to understand and explain beliefs, customs, and practices within their own cultural context without ethnocentric value judgments is called:',
        am: 'የአንድን ማህበረሰብ እምነትና ባህል በራስ መመዘኛ ሳይኮንኑ በራሱ ውስጣዊ አውድና ምክንያት የመረዳት ሳይንሳዊ አቋም ምን ይባላል?',
        },
      options: [
        { id: 'a', text: { en: 'Ethnocentrism', am: 'ራስ-ተኮርነት (Ethnocentrism)' } },
        { id: 'b', text: { en: 'Cultural Relativism', am: 'ባህላዊ አንጻራዊነት (Cultural Relativism)' } },
        { id: 'c', text: { en: 'Biological Determinism', am: 'ስነ-ህይወታዊ ወሳኝነት (Biological Determinism)' } },
        { id: 'd', text: { en: 'Social Darwinism', am: 'ማህበራዊ ዳርዊኒዝም' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Cultural relativism holds that a cultural practice or belief has meaning only within its cultural setting and should be understood from the perspective of its practitioners.',
        am: 'ባህላዊ አንጻራዊነት የአንድ ባህል መገለጫ ትርጉም የሚኖረው በራሱ ማህበረሰብ አውድ ውስጥ መሆኑን የሚያረጋግጥ የአንትሮፖሎጂ መርህ ነው።'
      }
    }
  ],
  matching: [
    {
      id: 'mat-1-1',
      concept: { en: 'Holism', am: 'ሁለንተናዊነት' },
      definition: { en: 'Studying the whole human condition: biology, culture, language, past, and present.', am: 'የሰውን ልጅ ስነ-ህይወት፣ ባህል፣ ቋንቋ እና ታሪክ አቀናጅቶ በአንድነት የማጥናት አቀራረብ።' }
    },
    {
      id: 'mat-1-2',
      concept: { en: 'Emic Perspective', am: 'ኤሚክ እይታ' },
      definition: { en: 'The insider’s native point of view on how they understand their world.', am: 'የማህበረሰቡ አባላት ለባህላቸውና ለድርጊቶቻቸው የሚሰጡት ውስጣዊ ትርጓሜ።' }
    },
    {
      id: 'mat-1-3',
      concept: { en: 'Eco-facts', am: 'ኢኮ-ፋክትስ' },
      definition: { en: 'Natural organic remains (bones, seeds, soils) used by past humans.', am: 'ሰዎች የተገለገሉባቸው እንደ እንስሳት አጥንትና ዘሮች ያሉ የተፈጥሮ ኦርጋኒክ ቅሪቶች።' }
    },
    {
      id: 'mat-1-4',
      concept: { en: 'Ethnology', am: 'ኢትኖሎጂ' },
      definition: { en: 'Cross-cultural comparative analysis to uncover universal human principles.', am: 'የተለያዩ ባህሎችን በማነጻጸር አጠቃላይ መርሆችን የማመንጨት ሳይንሳዊ ስራ።' }
    }
  ],
  flashcards: [
    {
      id: 'fc-anth-1-1',
      chapter: 1,
      termEn: 'Anthropology',
      termAm: 'አንትሮፖሎጂ',
      defEn: 'The holistic and comparative scientific study of humankind across all periods and spaces.',
      defAm: 'የሰውን ልጅ ስነ-ህይወት፣ ታሪክ፣ ቋንቋና ባህል በሁለንተናዊ መልኩ የሚያጠና ሳይንስ።'
    },
    {
      id: 'fc-anth-1-2',
      chapter: 1,
      termEn: 'Holism',
      termAm: 'ሁለንተናዊነት (Holism)',
      defEn: 'The core anthropological approach studying the comprehensive interconnectedness of all aspects of human existence.',
      defAm: 'የሰውን ልጅ የተሟላ ህይወት እና ተያያዥነት በአንድነት አቀናጅቶ የመመርመር መርህ።'
    },
    {
      id: 'fc-anth-1-3',
      chapter: 1,
      termEn: 'Participant Observation',
      termAm: 'የተሳትፎ ምልከታ',
      defEn: 'Primary anthropological fieldwork method involving living with a community and participating in their daily activities.',
      defAm: 'ተመራማሪው በማህበረሰቡ ዘንድ በአካል ተገኝቶ በእለት ተእለት እንቅስቃሴያቸው ውስጥ እየኖረ የሚያጠናበት ስልት።'
    },
    {
      id: 'fc-anth-1-4',
      chapter: 1,
      termEn: 'Emic vs. Etic',
      termAm: 'ኤሚክ እና ኤቲክ',
      defEn: 'Emic is the insider native cultural perspective; Etic is the outsider objective scientific comparative framework.',
      defAm: 'ኤሚክ የውስጥ አዋቂው የማህበረሰብ አባል እይታ ሲሆን፣ ኤቲክ ደግሞ የውጭ ተመራማሪው ሳይንሳዊ ትንታኔ ነው።'
    }
  ]
};
