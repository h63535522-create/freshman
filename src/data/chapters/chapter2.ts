import { Chapter } from '../../types';

export const chapter2: Chapter = {
  id: 2,
  number: 2,
  title: {
    en: 'Sensation and Perception',
    am: 'ስሜት እና ግንዛቤ (Sensation & Perception)'
  },
  universityAuthor: 'Belay Tefera (Addis Ababa University)',
  overview: {
    en: 'Explores the gateway to human intelligent life: how sensory organs detect environmental stimuli (sensation), and how the brain organizes and interprets this raw data into meaningful experiences (perception), covering sensory laws, attention, Gestalt grouping, depth perception, and illusions.',
    am: 'የሰው ልጅ የማወቅ እና የማሰብ ሂደት መነሻ የሆነውን የስሜት ህዋሳትን ስራ እና አእምሮ ይህንን ጥሬ መረጃ ወደ ትርጉም ያለው ልምድ የሚቀይርበትን የግንዛቤ ሂደት ይመረምራል፤ የስሜት ህጎችን፣ ትኩረትን፣ የጌስታልት ቅርፅ ህጎችን፣ የጥልቀት መለኪያዎችን እና የስሜት ቅዠቶችን (Illusions) ያብራራል።'
  },
  learningOutcomes: [
    { en: 'Distinguish clearly between sensation and perception with real-life examples', am: 'በስሜት እና በግንዛቤ መካከል ያለውን ልዩነት በተጨባጭ ምሳሌዎች መለየት' },
    { en: 'Explain sensory laws: Absolute Threshold (Limen), Difference Threshold (jnd), Weber’s Law, and Sensory Adaptation', am: 'የስሜት ህጎችን (ፍፁማዊ ደፍ፣ የልዩነት ደፍ፣ የዌበር ህግ እና የስሜት መላመድ) ማስረዳት' },
    { en: 'Analyze perceptual selectivity (Focus vs. Margin) and factors of attention', am: 'የትኩረት ምርጫን (ዋና ትኩረት እና ዳርቻ) እንዲሁም የትኩረት ውስጣዊና ውጫዊ ምክንያቶችን መተንተን' },
    { en: 'Describe Gestalt laws of perceptual organization and depth perception cues', am: 'የጌስታልት የቅርፅ አደረጃጀት መርሆዎችን እና የጥልቀት እይታ ምልክቶችን ማብራራት' },
    { en: 'Understand perceptual constancies and visual illusions (e.g., Müller-Lyer illusion)', am: 'የግንዛቤ ቋሚነትን እና የእይታ ቅዠቶችን (ለምሳሌ፡ ሙለር-ላይየር) መረዳት' }
  ],
  sections: [
    {
      id: 'sec-2-1',
      number: '2.1',
      title: {
        en: 'The Meanings of Sensation and Perception',
        am: 'የስሜት እና የግንዛቤ ትርጓሜ'
      },
      paragraphs: [
        {
          id: 'p-2-1-1',
          subheading: { en: 'Sensation: Detecting Stimuli', am: 'ስሜት (Sensation)፡ መረጃን ማግኘት' },
          en: 'Sensation is the biological process whereby stimulation of receptor cells in the eyes, ears, nose, tongue, and skin converts physical energy (stimulus) into neural impulses sent to the brain. Examples include detecting wavelength as color, air vibration as sound pitch, or chemical molecules as bitter taste.',
          am: 'ስሜት ማለት በአይናችን፣ ጆሯችን፣ አፍንጫችን፣ ምላሳችን እና ቆዳችን ውስጥ ያሉ የነርቭ ህዋሳት ከአካባቢ የሚመጡ የብርሃን፣ የድምፅ ወይም የኬሚካል ንዝረቶችን ወደ ነርቭ መልዕክት በመቀየር ወደ አንጎል የሚልኩበት ተፈጥሮአዊ ሂደት ነው። ምሳሌ፡ የብርሃን ሞገድን እንደ ቀለም ወይም የአየር ንዝረትን እንደ ድምፅ ማወቅ።'
        },
        {
          id: 'p-2-1-2',
          subheading: { en: 'Perception: Making Meaning', am: 'ግንዛቤ (Perception)፡ ትርጉም መስጠት' },
          en: 'Perception is the psychological process that organizes, filters, and interprets sensations into meaningful representations. For example, detecting individual black ink marks on paper is sensation; organizing and understanding those marks as words and sentences is perception.',
          am: 'ግንዛቤ ማለት አንጎል ከስሜት ህዋሳት የተቀበለውን ጥሬ መረጃ አቀናጅቶ፣ አደራጅቶ ትርጉም የሚሰጥበት የስነ-ልቦና ሂደት ነው። በወረቀት ላይ ያሉ ጥቁር መስመሮችን ማየት ስሜት ሲሆን፣ እነሱን አንብቦ ቃላትና ትርጉም መረዳት ግንዛቤ ነው።'
        },
        {
          id: 'p-2-1-3',
          subheading: { en: 'Oliver Sacks’ Famous Clinical Case: Prosopagnosia', am: 'የኦሊቨር ሳክስ ታዋቂ ክሊኒካዊ ታሪክ፡ ፕሮሶፓግኖዚያ' },
          en: 'Neurologist Oliver Sacks described a brain-damaged patient who suffered from prosopagnosia (the inability to recognize faces). The patient had intact visual sensation (could spot a pin on the floor), but could not organize facial features into a recognizable face (impaired perception), sometimes mistaking fire hydrants for children or his wife’s head for a hat!',
          am: 'የነርቭ ሀኪሙ ኦሊቨር ሳክስ እንዳስረዳው፣ የአዕምሮ ጉዳት የደረሰበት አንድ ታካሚ የሰውን ፊት መለየት አልቻለም ነበር (ፕሮሶፓግኖዚያ)። የስሜት ህዋሳቱ ጤነኛ ሆነው መሬት ላይ የወደቀች መርፌ በግልጽ ቢያይም፣ ፊቶችን አቀናጅቶ የማወቅ ግንዛቤው ስለተጎዳ የእሳት ማጥፊያ ቧንቧን የህፃን ራስ፣ የባለቤቱን ራስ ደግሞ ባርኔጣ መስሎት ለመያዝ ይሞክር ነበር!'
        }
      ]
    },
    {
      id: 'sec-2-2',
      number: '2.2',
      title: {
        en: 'Sensory Laws: Thresholds and Adaptation',
        am: 'የስሜት ህጎች፡ ደፎች (Thresholds) እና መላመድ (Adaptation)'
      },
      paragraphs: [
        {
          id: 'p-2-2-1',
          subheading: { en: 'Absolute Threshold (Limen)', am: 'ፍፁማዊ ደፍ (Absolute Threshold / Limen)' },
          en: 'The absolute threshold is the minimum amount of physical energy or stimulus intensity required for a person to detect it 50 percent of the time. For example, the smallest grain of sugar added to a cup of coffee before sweetness is first detected.',
          am: 'ፍፁማዊ ደፍ (ሊመን) ማለት አንድ ሰው ከአካባቢ የሚመጣን ንዝረት ወይም ማነቃቂያ በ50 በመቶ ዕድል ለማስተዋል የሚያስፈልገው አነስተኛው የጉልበት ወይም የጥንካሬ መጠን ነው። ለምሳሌ፡ በአንድ የቡና ሲኒ ውስጥ የጣፋጭነት ስሜት ለመፍጠር የሚያስፈልገው የመጨረሻው አነስተኛ የስኳር መጠን።'
        },
        {
          id: 'p-2-2-2',
          subheading: { en: 'Difference Threshold & Weber’s Law', am: 'የልዩነት ደፍ እና የዌበር ህግ' },
          en: 'The difference threshold, or Just Noticeable Difference (JND), is the minimum change in stimulation needed to detect a difference 50 percent of the time. Weber’s Law states that the JND is a constant proportion of the initial stimulus intensity. For example, weight JND is about 2%: if holding a 50-ounce weight, you notice a change with 1 ounce, but with a 100-ounce weight, you require at least 2 ounces to notice.',
          am: 'የልዩነት ደፍ (JND) ማለት በሁለት ማነቃቂያዎች መካከል ያለውን ልዩነት በ50 በመቶ ዕድል ለመለየት የሚያስፈልገው አነስተኛ የለውጥ መጠን ነው። የዌበር ህግ እንደሚለው ይህ የለውጥ መጠን ከመነሻው ማነቃቂያ ጋር ቋሚ ንፅፅር አለው (ለምሳሌ፡ ለክብደት 2% ነው፤ 50 አውንስ ለያዘ ሰው 1 አውንስ ሲጨመር ይሰማዋል፣ 100 አውንስ ለያዘ ግን ቢያንስ 2 አውንስ ካልተጨመረ አይሰማውም)።'
        },
        {
          id: 'p-2-2-3',
          subheading: { en: 'Sensory Adaptation (መላመድ)', am: 'የስሜት መላመድ (Sensory Adaptation)' },
          en: 'Sensory adaptation is the declining sensitivity of sensory receptors to constant, unchanging stimuli. When entering a room with an unpleasant smell or jumping into cold swimming pool water, you initially feel it intensely, but shortly stop noticing it. This adaptation frees the brain to attend to novel, changing environmental events.',
          am: 'የስሜት መላመድ ማለት የስሜት ህዋሳት ላልተለወጠ እና ቋሚ ለሆነ ማነቃቂያ የሚሰጡት ምላሽ ቀስ በቀስ እየቀነሰ መሄዱ ነው። ወደ ሚሸት ክፍል ሲገቡ መጀመሪያ ይረብሻል፤ ቆየት ሲሉ ግን አይሰማዎትም። ወደ ቀዝቃዛ ውሃ ሲገቡ መጀመሪያ ያንቀጠቅጣል፤ ቆየት ሲሉ ግን ይላመዳል። ይህ አእምሮ አዳዲስና አስፈላጊ ለውጦች ላይ እንዲያተኩር ያስችላል።'
        }
      ]
    },
    {
      id: 'sec-2-3',
      number: '2.3',
      title: {
        en: 'Perception: Attention, Form, and Depth',
        am: 'ግንዛቤ፡ ትኩረት፣ ቅርፅ እና ጥልቀት'
      },
      paragraphs: [
        {
          id: 'p-2-3-1',
          subheading: { en: 'Selectivity of Perception: Focus vs. Margin', am: 'የትኩረት ምርጫ፡ ዋና ትኩረት እና ዳርቻ' },
          en: 'At any given moment, our senses are flooded with stimuli, yet we attend to only a tiny fraction. Selective perception divides awareness into "Focus" (clearly perceived foreground stimuli) and "Margin" (dimly felt background stimuli). Attention constantly shifts: during an exciting football match, your focus is entirely on the ball runner, while your cold feet and noisy spectators sit in the margin until the final whistle blows.',
          am: 'በማንኛውም ቅጽበት የስሜት ህዋሳቶቻችን በብዙ ማነቃቂያዎች ይጥለቀለቃሉ፤ እኛ ግን የተወሰኑትን ብቻ መርጠን እናስተውላለን። ይህ ትኩረት ዓለማችንን ለሁለት ይከፍላል፡ "ዋና ትኩረት" (Focus - በግልጽ የሚታየው) እና "ዳርቻ" (Margin - ደብዘዝ ብሎ የሚሰማው)። በእግር ኳስ ጨዋታ ወቅት ሙሉ ትኩረታችሁ ኳሷ ላይ ሲሆን፣ የደጋፊው ጩኸትና የብርድ ስሜት በዳርቻ ይቀመጣሉ።'
        },
        {
          id: 'p-2-3-2',
          subheading: { en: 'Determinants of Attention: External vs. Internal', am: 'የትኩረት ወሳኝ ምክንያቶች፡ ውጫዊ እና ውስጣዊ' },
          en: '• External Factors (Object features): Size and Intensity (large billboards, bright colors), Repetition (advertisements repeated), Novelty (unusual, sudden contrast, e.g., a guest in class), and Movement (moving predators/objects capture eyes).\n• Internal Factors (Observer states): Perceptual Set / Expectancy (a sleeping mother wakes instantly to her infant’s soft cry but sleeps through loud traffic), and Motives / Needs (a hungry person instantly spots restaurant signs).',
          am: '• ውጫዊ ምክንያቶች፡ መጠንና ጥንካሬ (ትላልቅ ፅሁፎች፣ ደማቅ ቀለማት)፣ ድግግሞሽ (የተደጋገሙ ማስታወቂያዎች)፣ አዲስነት (እንግዳ የሆነ ነገር)፣ እና እንቅስቃሴ (ተንቀሳቃሽ ነገሮች ዓይንን ይስባሉ)።\n• ውስጣዊ ምክንያቶች፡ የስነ-ልቦና ዝግጁነት (እናት የልጇን ቀጭን ልቅሶ በቅጽበት ትሰማለች)፣ እና ፍላጎት/ተነሳሽነት (የራበው ሰው የምግብ ቤቶችን ምልክቶች ወዲያውኑ ያስተውላል)።'
        },
        {
          id: 'p-2-3-3',
          subheading: { en: 'Form Perception: Gestalt Principles', am: 'የቅርፅ ግንዛቤ፡ የጌስታልት መርሆዎች' },
          en: '1. Figure-Ground: Distinguishing the object (figure) from the surrounding background (ground) aided by contours.\n2. Proximity: Items close together are grouped as belonging together.\n3. Similarity: Similar objects (e.g., circles vs. squares) are perceived as a unit.\n4. Good Figure / Symmetry: Tendency to see balanced, symmetrical figures.\n5. Continuation: Preference for continuous, smooth flowing lines over jagged breaks.\n6. Closure: The brain automatically fills in missing gaps to perceive a complete, enclosed figure.',
          am: '1. ምስል እና ዳራ (Figure-Ground)፡ ዋናውን ምስል ከበስተጀርባው ዳራ በጠርዝ (Contours) ለይቶ ማየት።\n2. ቅርበት (Proximity)፡ ተቀራርበው የተቀመጡ ነገሮችን እንደ አንድ ቡድን አድርጎ መረዳት።\n3. ተመሳሳይነት (Similarity)፡ አንድ አይነት መልክ ያላቸውን ነገሮች እንደ አንድ ክፍል ማየት።\n4. ሚዛናዊነት (Good Figure/Symmetry)፡ የተመጣጠነ እና የተሟላ ቅርፅን መምረጥ።\n5. ቀጣይነት (Continuation)፡ መስመሮች ያለ መቆራረጥ ቀጥለው እንዲታዩ የማድረግ አዝማሚያ።\n6. ክፍተትን መሙላት (Closure)፡ የተቆራረጡ ክፍተቶችን አእምሮ በራሱ ሞልቶ ሙሉ ምስል እንዲታይ ማድረግ።'
        },
        {
          id: 'p-2-3-4',
          subheading: { en: 'Depth Perception: Binocular and Monocular Cues', am: 'የጥልቀት እይታ፡ የሁለት ዓይን እና የአንድ ዓይን ምልክቶች' },
          en: '• Binocular Cues (requires two eyes): Retinal Disparity (distance between retinal images; closer objects produce greater disparity) and Convergence (eyes turning inward toward the nose for near objects).\n• Monocular Cues (single eye): Accommodation (lens curvature change) and Motion Parallax (near objects seem to fly past rapidly while distant farmhouses move slowly).\n• Pictorial Cues: Interposition (overlapping object is closer), Linear Perspective (parallel lines converge in distance—applied in WWII aircraft dual taillights), Texture Gradient, Shading, and Aerial Perspective.',
          am: '• የሁለት ዓይን ምልክቶች (Binocular)፡ የሬቲና ልዩነት (Retinal Disparity - ዕቃው ሲቀርብ የሁለቱ ዓይኖች ልዩነት ይጨምራል) እና መገጣጠም (Convergence - ዓይኖች ወደ አፍንጫ መዞር)።\n• የአንድ ዓይን ምልክቶች (Monocular)፡ ሌንስን ማስተካከል (Accommodation) እና የእንቅስቃሴ ልዩነት (Motion Parallax - ቅርብ ያሉ ዛፎች በፍጥነት ሲያልፉ የራቁ ተራሮች ቀስ ብለው ይጓዛሉ)።\n• የሥዕል ምልክቶች (Pictorial)፡ መደራረብ (Interposition)፣ የመስመር እይታ (Linear Perspective)፣ የጥላ አደረጃጀት እና የገጽታ ጥግግት (Texture Gradient)።'
        },
        {
          id: 'p-2-3-5',
          subheading: { en: 'Perceptual Constancies and Illusions', am: 'የግንዛቤ ቋሚነት እና የእይታ ቅዠቶች' },
          en: 'Perceptual Constancy ensures we perceive objects as stable in size, shape, and brightness despite dramatic changes in retinal stimulation (e.g., an opening door is still known to be rectangular).\nVisual Illusions reveal how the brain constructs perception: Franz Müller-Lyer Illusion demonstrates how misapplied perspective cues make two identical line lengths look unequal.',
          am: 'የግንዛቤ ቋሚነት (Perceptual Constancy) የነገሮች ቅርፅ፣ መጠንና ብሩህነት በሬቲናችን ላይ ቢለዋወጥም እንዳለ ቋሚ አድርገን እንድናይ ያደርገናል (ለምሳሌ፡ የተከፈተ በር ቅርፁ ቢለወጥም አራት ማዕዘን መሆኑን እናውቃለን)።\nየእይታ ቅዠቶች (Illusions) እንደ ሙለር-ላይየር ያሉ ምስሎች አእምሮ የመስመር አቅጣጫዎችን በተሳሳተ መንገድ ሲተረጉም እኩል ርዝመት ያላቸው መስመሮች የተለያየ ሆነው እንዲታዩ ያደርጋሉ።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-2-1',
      title: { en: 'Sensation vs. Perception', am: 'ስሜት እና ግንዛቤ ንፅፅር' },
      bullets: [
        { en: 'Sensation is bottom-up detection of physical stimuli by sensory organs.', am: 'ስሜት የስሜት ህዋሳት ውጫዊ ማነቃቂያዎችን የሚቀበሉበት ሂደት ነው።' },
        { en: 'Perception is top-down organization and cognitive interpretation of raw sensations.', am: 'ግንዛቤ አእምሮ የተቀበለውን ጥሬ መረጃ አደራጅቶ ትርጉም የሚሰጥበት ሂደት ነው።' },
        { en: 'Transduction: The conversion of physical energy into neural signals.', am: 'ትራንስዳክሽን፡ አካላዊ ሀይልን ወደ ነርቭ መልዕክት የመቀየር ሂደት ነው።' }
      ]
    },
    {
      id: 'sum-2-2',
      title: { en: 'Sensory Thresholds & Weber’s Law', am: 'የስሜት ደፎች እና የዌበር ህግ' },
      bullets: [
        { en: 'Absolute Threshold (Limen): Minimum energy detectable 50% of the time.', am: 'ፍፁማዊ ደፍ፡ በ50% ዕድል ማነቃቂያን ለማስተዋል የሚያስፈልግ አነስተኛ መጠን።' },
        { en: 'Difference Threshold (JND): Minimum change detectable 50% of the time.', am: 'የልዩነት ደፍ (JND)፡ በሁለት ነገሮች መካከል ያለውን ልዩነት ለማወቅ የሚያስፈልግ አነስተኛ ለውጥ።' },
        { en: 'Weber\'s Law: ΔI / I = k (JND is a constant fraction of stimulus intensity).', am: 'የዌበር ህግ፡ የለውጡ መጠን ከመነሻው ማነቃቂያ ጥንካሬ ጋር ቋሚ ንፅፅር አለው።' },
        { en: 'Sensory Adaptation: Reduction in response to unchanging, ongoing stimuli.', am: 'የስሜት መላመድ፡ ላልተለወጠ ማነቃቂያ የስሜት ህዋሳት ምላሽ መቀነስ።' }
      ]
    },
    {
      id: 'sum-2-3',
      title: { en: 'Gestalt Organization & Depth Cues', am: 'የጌስታልት ህጎች እና የጥልቀት ምልክቶች' },
      bullets: [
        { en: 'Grouping Laws: Proximity, Similarity, Continuation, Closure, and Symmetry.', am: 'የመደጋገፍ ህጎች፡ ቅርበት፣ ተመሳሳይነት፣ ቀጣይነት፣ ክፍተትን መሙላት እና ሚዛናዊነት።' },
        { en: 'Binocular Depth: Retinal disparity and convergence (requires 2 eyes).', am: 'የሁለት ዓይን ጥልቀት፡ የሬቲና ልዩነት እና ዓይኖችን ወደ አፍንጫ ማዞር።' },
        { en: 'Monocular Depth: Motion parallax, interposition, linear perspective, and texture gradient.', am: 'የአንድ ዓይን ጥልቀት፡ የእንቅስቃሴ ልዩነት፣ መደራረብ፣ የመስመር እይታ እና የገጽታ ጥግግት።' }
      ]
    }
  ],
  qna: [
    {
      id: 'q-2-1',
      number: 1,
      category: 'case_study',
      question: {
        en: 'Explain why soldiers wear camouflage green uniforms in warfare using the concept of contours in form perception.',
        am: 'በጦርነት ወቅት ወታደሮች የጫካ መልክ ያለው የካሞፍላጅ ልብስ የሚለብሱት ለምን እንደሆነ በቅርፅ ግንዛቤ የጠርዝ (Contours) መርህ አስረዳ።'
      },
      answer: {
        en: 'Contours are formed when there is a sharp difference in brightness or color between an object and its background. Camouflage disrupts these contours by mimicking the varied natural textures, making it nearly impossible for the enemy\'s visual system to separate the soldier (figure) from the foliage (ground).',
        am: 'ጠርዝ (Contours) የሚፈጠረው በምስሉ እና በዳራው መካከል ግልጽ የሆነ የቀለም ወይም የብርሃን ልዩነት ሲኖር ነው። የካሞፍላጅ ልብስ ይህን ጠርዝ በማጥፋት ወታደሩ (ምስል) ከጫካው (ዳራ) ተለይቶ እንዳይታይ ያደርገዋል።'
      },
      explanation: {
        en: 'Without detectable contours, the figure merges seamlessly with the ground, defeating form perception.',
        am: 'ግልጽ ጠርዞች ከሌሉ የሰው ልጅ የእይታ አእምሮ ምስሉን ከዳራው ለይቶ ማውጣት አይችልም።'
      }
    },
    {
      id: 'q-2-2',
      number: 2,
      category: 'exam_mcq',
      question: {
        en: 'How was the psychological principle of linear perspective used in World War II to stop naval aviation pilots from crashing during night landings?',
        am: 'በሁለተኛው የዓለም ጦርነት ወቅት የአውሮፕላን አብራሪዎች በሌሊት እንዳይጋጩ የመስመር እይታ (Linear Perspective) መርህ እንዴት ጥቅም ላይ ዋለ?'
      },
      answer: {
        en: 'Single tail lights made judging distance impossible in the dark. Engineers installed two tail lights set at a standard distance apart. As pilots approached another plane, linear perspective showed the two lights moving farther apart, signaling immediate proximity.',
        am: 'በአንድ መብራት ርቀትን ማወቅ አስቸጋሪ ስለነበር፣ አውሮፕላኖች ላይ በቋሚ ርቀት የተራራቁ ሁለት የኋላ መብራቶች ተገጠሙ። አብራሪው ወደ ሌላው አውሮፕላን ሲቀርብ ሁለቱ መብራቶች እየተራራቁ ሲታዩት በጣም መቃረቡን ተረድቶ እንዳይጋጭ ረዳው።'
      },
      explanation: {
        en: 'Retinal image separation expands as distance decreases, providing an unmistakable pictorial cue.',
        am: 'ርቀት ሲያጥር በዓይን ሬቲና ላይ የሚፈጠረው የምስል ክፍተት እየሰፋ ስለሚሄድ የመቃረብ ምልክት ይሆናል።'
      }
    }
  ],
  quizzes: [
    {
      id: 'quiz-2-1',
      question: {
        en: 'If you are holding a 50-ounce weight and can detect a change when 1 ounce is added, according to Weber’s Law, how much weight must be added to a 100-ounce weight to detect a difference?',
        am: '50 አውንስ ክብደት ለያዘ ሰው 1 አውንስ ሲጨመር ለውጡ ከተሰማው፣ በዌበር ህግ መሰረት 100 አውንስ ለያዘ ሰው ለውጡ እንዲሰማው ቢያንስ ስንት አውንስ መጨመር አለበት?'
      },
      options: [
        { id: 'opt-a', text: { en: '1 ounce', am: '1 አውንስ' } },
        { id: 'opt-b', text: { en: '2 ounces', am: '2 አውንስ' } },
        { id: 'opt-c', text: { en: '4 ounces', am: '4 አውንስ' } },
        { id: 'opt-d', text: { en: '0.5 ounces', am: '0.5 አውንስ' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Weber’s constant fraction here is 1 / 50 = 2%. For a 100-ounce weight, 2% of 100 is 2 ounces.',
        am: 'የዌበር ቋሚ ንፅፅር 1 / 50 = 2% ነው። ስለዚህ ለ100 አውንስ 2% ማለት 2 አውንስ ይሆናል።'
      }
    }
  ],
  matching: [
    {
      id: 'm-2-1',
      concept: { en: 'Closure (ክፍተትን መሙላት)', am: 'ክፍተትን መሙላት' },
      definition: { en: 'Filling in missing gaps to perceive a whole, complete shape', am: 'የጎደሉ ክፍተቶችን ሞልቶ ሙሉ ቅርፅን ማየት' }
    },
    {
      id: 'm-2-2',
      concept: { en: 'Proximity (ቅርበት)', am: 'ቅርበት' },
      definition: { en: 'Grouping objects that are physically near each other', am: 'ተቀራርበው የተቀመጡ ነገሮችን እንደ አንድ ቡድን ማየት' }
    },
    {
      id: 'm-2-3',
      concept: { en: 'Retinal Disparity (የሬቲና ልዩነት)', am: 'የሬቲና ልዩነት' },
      definition: { en: 'Binocular cue: difference between images on each eye’s retina', am: 'በሁለቱ ዓይኖች ሬቲና ላይ የሚፈጠር የምስል ልዩነት' }
    },
    {
      id: 'm-2-4',
      concept: { en: 'Sensory Adaptation (መላመድ)', am: 'የስሜት መላመድ' },
      definition: { en: 'Decreasing sensitivity to an unchanging, constant stimulus', am: 'ላልተለወጠ ቋሚ ማነቃቂያ የስሜት ምላሽ መቀነስ' }
    }
  ],
  flashcards: [
    {
      id: 'fc-2-1',
      termEn: 'Sensation',
      termAm: 'ስሜት (ሴንሴሽን)',
      defEn: 'Detection of physical energy from the environment by sensory receptors.',
      defAm: 'የስሜት ህዋሳት ከአካባቢ የሚመጣን አካላዊ ጉልበት የመቀበል ሂደት።',
      chapter: 2
    },
    {
      id: 'fc-2-2',
      termEn: 'Perception',
      termAm: 'ግንዛቤ (ፐርሴፕሽን)',
      defEn: 'The brain’s process of organizing and interpreting sensory information.',
      defAm: 'አእምሮ የስሜት መረጃዎችን አቀናጅቶ ትርጉም የሚሰጥበት ሂደት።',
      chapter: 2
    },
    {
      id: 'fc-2-3',
      termEn: 'Absolute Threshold (Limen)',
      termAm: 'ፍፁማዊ ደፍ (ሊመን)',
      defEn: 'The minimum intensity of stimulation required to be detected 50% of the time.',
      defAm: 'ማነቃቂያን በ50% ዕድል ለማወቅ የሚያስፈልግ አነስተኛው የጉልበት መጠን።',
      chapter: 2
    },
    {
      id: 'fc-2-4',
      termEn: 'Weber’s Law',
      termAm: 'የዌበር ህግ',
      defEn: 'Principle that difference threshold is a constant percentage, not a constant amount.',
      defAm: 'የልዩነት ደፍ ከመነሻው ማነቃቂያ ጋር ቋሚ የመቶኛ ንፅፅር አለው የሚል መርህ።',
      chapter: 2
    }
  ]
};
