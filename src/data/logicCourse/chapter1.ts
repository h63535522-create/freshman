import { Chapter } from '../../types';

export const chapter1: Chapter = {
  id: 101,
  number: 1,
  title: {
    en: 'Chapter 1: Introducing Philosophy',
    am: 'ምዕራፍ ፩፡ የፍልስፍና መግቢያ'
  },
  universityAuthor: 'Mr. Teklay G/Meskel (Aksum University) - MoSHE 2019',
  overview: {
    en: 'Logic is treated both as a field of study and as an instrument. Philosophy is a rational and critical enterprise that tries to answer fundamental questions about reality, knowledge, and value through the intensive application of reason.',
    am: 'ስነ-አመክንዮ እንደ የጥናት መስክ እና እንደ መሳሪያ ያገለግላል። ፍልስፍና ደግሞ በምክንያት፣ በምርምርና በሂሳዊ እይታ ስለ እውነታ፣ እውቀት እና እሴቶች መሰረታዊ ጥያቄዎችን የሚመልስ የዕውቀት ዘርፍ ነው።'
  },
  learningOutcomes: [
    {
      en: 'Understand the etymological meaning, nature, and features of philosophy.',
      am: 'የፍልስፍናን የስነ-ቃል (Etymological) ፍቺ፣ ባህሪ እና መሰረታዊ ገፅታዎችን መረዳት።'
    },
    {
      en: 'Recognize the primary branches of philosophy: Metaphysics, Epistemology, Axiology, and Logic.',
      am: 'ዋና ዋናዎቹን የፍልስፍና ዘርፎች (ስነ-ህልውና፣ ስነ-እውቀት፣ ስነ-እሴት እና ስነ-አመክንዮ) መለየት።'
    },
    {
      en: 'Appreciate the vital importance of learning philosophy for self-actualization and independent thinking.',
      am: 'ፍልስፍናን መማር ራስን ለማብቃት (Self-Actualization) እና ራሱን የቻለ ገለልተኛ አስተሳሰብ ለመገንባት ያለውን ፋይዳ ማድነቅ።'
    }
  ],
  sections: [
    {
      id: 'phil-sec-1-1',
      number: '1.1',
      title: {
        en: 'Lesson 1: Meaning and Nature of Philosophy',
        am: 'ትምህርት ፩፡ የፍልስፍና ትርጉም እና ምንነት'
      },
      paragraphs: [
        {
          id: 'phil-p-1-1',
          subheading: {
            en: 'Etymological Definition and Socratic Wonder',
            am: 'የስነ-ቃል ትርጓሜ እና የሶክራጥሳዊ ድንቅ (Wonder)'
          },
          en: 'Because of its universal nature, it is difficult to define philosophy in terms of a single specific subject matter. Etymologically, the word "philosophy" comes from two Greek words: "philo" (love) and "sophia" (wisdom), meaning literally "love of wisdom". The ancient Greek thinker Pythagoras was the first to use the word "philosopher" to describe a person showing a marked curiosity about the world. Socrates famously stated that "Wonder is the feeling of a philosopher, and philosophy begins in wonder."',
          am: 'ፍልስፍና ሁሉን አቀፍ ባህሪ ስላለው በአንድ የተወሰነ የትምህርት ርዕሰ-ጉዳይ ብቻ ለመተርጎም አዳጋች ነው። በስነ-ቃል አመጣጡ "ፍልስፍና" (Philosophy) የመጣው ከሁለት የግሪክ ቃላት ነው፡ "philo" (ፍቅር) እና "sophia" (ጥበብ) ሲሆን ቀጥተኛ ፍቺውም "የጥበብ ፍቅር" ማለት ነው። ጥንታዊው የግሪክ ፈላስፋ ፒታጎረስ ስለ ዓለም ክስተቶች ከፍተኛ ጉጉት ያለውን ሰው "ፈላስፋ" ብሎ የጠራ የመጀመሪያው ሰው ነው። ሶክራጥስ ደግሞ "አድናቆትና ድንቅ የፈላስፋ ስሜት ነው፤ ፍልስፍናም የሚጀምረው በድንቅ ነው" ብሏል።',
          highlightTerms: [
            {
              en: 'Philosophy',
              am: 'ፍልስፍና',
              defEn: 'Etymologically "love of wisdom" (philo + sophia); the rational, critical study of existence, truth, and value.',
              defAm: 'የቃሉ ትርጉም "የጥበብ ፍቅር" ሲሆን፣ ስለ ህልውና፣ እውነትና እሴቶች የሚደረግ ምክንያታዊና ሂሳዊ ምርምር ነው።'
            },
            {
              en: 'Questioning the Apparent',
              am: 'ግልፅ የሚመስለውን መጠራጠር/መጠየቅ',
              defEn: 'To interrogate the obvious, go beyond common understanding, and critically examine taken-for-granted assumptions.',
              defAm: 'ሰዎች ያለጥርጥር አምነው የተቀበሉትን ነገር መፈተሽ እና ከተለመደው ግንዛቤ ባሻገር በጥልቀት ማስተዋል ነው።'
            }
          ]
        },
        {
          id: 'phil-p-1-2',
          subheading: {
            en: 'Dual Sided Nature: Critical and Constructive',
            am: 'የፍልስፍና ሁለት ገፅታዎች፡ ሂሳዊ እና ገንቢ'
          },
          en: 'As Vincent Barry stated, philosophy is "an active imaginative process of formulating proper questions and resolving them by rigorous, persistent analysis." Philosophy is a dual-sided discipline: it has a constructive side, attempting to formulate rationally defensible answers concerning reality, knowledge, and value; and a critical side, giving rational critiques, analysis, and evaluation of existing assumptions.',
          am: 'ቪንሰንት ባሪ እንዳብራራው ፍልስፍና "ትክክለኛ ጥያቄዎችን የማመንጨት እና በጥልቅ የማያቋርጥ ትንተና የመፍታት ንቁ የፈጠራ ሂደት ነው።" ፍልስፍና ሁለት አቅጣጫዎች አሉት፡ ገንቢ ገፅታ (constructive side) ምክንያታዊና ተሟጋች ምላሾችን ያመነጫል፤ ሂሳዊ ገፅታ (critical side) ደግሞ ለተሰጡ ምላሾች ምክንያታዊ ትችት፣ ትንተናና ግምገማ ይሰጣል።'
        }
      ]
    },
    {
      id: 'phil-sec-1-2',
      number: '1.2',
      title: {
        en: 'Lesson 2: Basic Features of Philosophy',
        am: 'ትምህርት ፪፡ የፍልስፍና መሰረታዊ መገለጫዎች'
      },
      paragraphs: [
        {
          id: 'phil-p-1-3',
          subheading: {
            en: '"Having" vs "Doing" Philosophy',
            am: 'ፍልስፍና "መኖር" እና ፍልስፍናን "መስራት/መተግበር"'
          },
          en: 'Philosophy has two senses: (1) An informal sense of "having" a philosophy—a person\'s uncritical beliefs and personal attitude toward life; and (2) A formal sense of "doing" philosophy—actively reflecting on, generalizing, and criticizing our most deeply held beliefs. Having a philosophy is not enough; genuine philosophy requires an open-minded, searching, and critical habit of mind.',
          am: 'ፍልስፍና ሁለት ደረጃዎች አሉት፡ (1) ኢ-መደበኛ ፍልስፍና "መኖር" (Having a philosophy) ማለት አንድ ሰው በህይወቱ ላይ ያለው ያልተፈተሸ አመለካከትና የግል አቋም ነው። (2) መደበኛ ፍልስፍናን "መስራት" (Doing philosophy) ደግሞ እምነቶችን፣ አመለካከቶችን እና የሕይወት መርሆዎችን በሂሳዊ መንገድ መመርመር፣ ማብጠርና መተቸት ነው። ፍልስፍና መኖሩ ብቻ በቂ አይደለም፤ ፍልስፍናን በተግባር መስራት ክፍት አእምሮንና ሂሳዊ ባህልን ይጠይቃል።'
        },
        {
          id: 'phil-p-1-4',
          subheading: {
            en: 'Holistic Worldview and Logical Analysis of Language',
            am: 'ሁለንተናዊ የዓለም እይታ እና የቋንቋ ምክንያታዊ ትንተና'
          },
          en: 'Philosophy is a rational attempt to look at the world as a whole, integrating the findings of natural, social, and human sciences into a coherent worldview. Furthermore, philosophy involves the logical analysis of language and clarification of concepts to expose confusion, vagueness, and nonsense in communication.',
          am: 'ፍልስፍና ዓለምን እንደ አንድ ሙሉ ሁለንተናዊ አካል አድርጎ ለማየት የሚደረግ ጥረት ነው፤ የተፈጥሮ፣ የማህበራዊና የሰብዓዊ ሳይንስ ውጤቶችን በማቀናጀት የተቀናጀ የዓለም እይታ ይፈጥራል። በተጨማሪም በዕለት ተዕለት እና በሳይንሳዊ ውይይቶች ውስጥ ግልጽነትን ለማምጣት ቃላትንና ፅንሰ-ሀሳቦችን በአመክንዮ ይተነትናል።'
        }
      ]
    },
    {
      id: 'phil-sec-1-3',
      number: '1.3',
      title: {
        en: 'Lesson 3: Metaphysics and Epistemology',
        am: 'ትምህርት ፫፡ ስነ-ህልውና (Metaphysics) እና ስነ-እውቀት (Epistemology)'
      },
      paragraphs: [
        {
          id: 'phil-p-1-5',
          subheading: {
            en: 'Metaphysics and its Four Subsets',
            am: 'ስነ-ህልውና እና አራቱ ንዑሳን ክፍሎቹ'
          },
          en: 'Derived from Greek "meta" (beyond/after) and "physika" (physics), Metaphysics studies the ultimate nature of reality. It comprises four aspects: (1) Cosmological Aspect (the origin, evolution, and orderly development of the universe); (2) Theological Aspect (conceptions of God, His attributes, and the problem of evil); (3) Anthropological Aspect (the nature of human beings, mind-body relationship, free will vs. determinism, and the soul); and (4) Ontological Aspect (the nature of existence itself: whether reality is material, spiritual, or both; whether it is one or many).',
          am: '"ከፊዚክስ ባሻገር" ከሚለው የግሪክ ቃል የተገኘው ስነ-ህልውና (Metaphysics) የመጨረሻውን የእውነታና የህልውና ምንነት ያጠናል። አራት ንዑስ ዘርፎች አሉት፡ (1) ኮስሞሎጂካዊ (የአጽናፈ ዓለም አመጣጥ፣ ተፈጥሮና ቅደም ተከተል)፤ (2) ቴዎሎጂካዊ (የፈጣሪ ህልውና፣ ባህሪያት እና የመከራ/ክፋት መኖር ጥያቄ)፤ (3) አንትሮፖሎጂካዊ (የሰው ልጅ ምንነት፣ የአእምሮና አካል ግንኙነት፣ ነጻ ፈቃድ እና ነፍስ)፤ እና (4) ኦንቶሎጂካዊ (የህልውና ምንነት፣ ቁሳዊ ወይስ መንፈሳዊ፣ ነጠላ ወይስ ብዙ)።',
          highlightTerms: [
            {
              en: 'Metaphysics',
              am: 'ስነ-ህልውና',
              defEn: 'Study of the ultimate nature of reality, existence, mind-body relations, and the cosmos.',
              defAm: 'ስለ እውነታ፣ ህልውና፣ የአእምሮና አካል ግንኙነት እና የአጽናፈ ዓለም ተፈጥሮ የሚያጠና የፍልስፍና ዘርፍ።'
            },
            {
              en: 'Ontology',
              am: 'ኦንቶሎጂ',
              defEn: 'Subset of metaphysics studying the nature of being and existence as such.',
              defAm: 'የአንድ ነገር መኖር ወይም ህልውና ምን ማለት እንደሆነ የሚያጠና የስነ-ህልውና ንዑስ ክፍል ነው።'
            }
          ]
        },
        {
          id: 'phil-p-1-6',
          subheading: {
            en: 'Epistemology and Five Sources of Knowledge',
            am: 'ስነ-እውቀት እና አምስቱ የእውቀት ምንጮች'
          },
          en: 'From Greek "episteme" (knowledge) and "logos" (study), Epistemology investigates the nature, sources, and validity of knowledge ("What is true?" and "How do we know?"). The five primary sources of human knowledge are: (1) Empiricism (sensory perception, though senses can be deceived, e.g. a straight stick looking bent in water); (2) Rationalism (pure reason and deductive thought independent of senses); (3) Intuition (direct flash of insight beneath conscious reasoning); (4) Revelation (supernatural divine communication); and (5) Authority (knowledge accepted from recognized experts or traditions). Epistemology also examines Skepticism (the claim that reliable knowledge is impossible, e.g., Gorgias) and Agnosticism.',
          am: 'ከግሪክ "episteme" (እውቀት) የተገኘው ስነ-እውቀት (Epistemology) የእውቀትን ምንጭ፣ ትክክለኛነትና ወሰን ይመረምራል። አምስቱ ዋና ዋና የእውቀት ምንጮች፡ (1) ኢምፔሪሲዝም/የስሜት ህዋሳት እውቀት (ምንም እንኳን ህዋሳት ሊሳሳቱ ቢችሉም፣ ለምሳሌ በውሃ ውስጥ ቀጥ ያለ እንጨት ተሰብሮ እንደሚታየው)፤ (2) ራሽናሊዝም/የምክንያት እውቀት (በአእምሮ አመክንዮ የሚገኝ)፤ (3) ውስጣዊ ስሜት/Intuition (ያለቅድመ ዝግጅት የሚመጣ ብልጭታ)፤ (4) መገለጥ/Revelation (መለኮታዊ መመሪያ)፤ እና (5) ባለስልጣን/Authority (የባለሙያዎችና የመጽሐፍት እውቀት) ናቸው። በተጨማሪም እውቀትን መጠራጠርን (Skepticism) እና አግኖስቲሲዝምን ያጠቃልላል።',
          highlightTerms: [
            {
              en: 'Epistemology',
              am: 'ስነ-እውቀት',
              defEn: 'The theory of knowledge, studying its sources, structure, methods, and validity.',
              defAm: 'ስለ እውቀት ምንጭ፣ ተአማኒነት፣ አወቃቀርና ወሰን የሚያጠና የፍልስፍና መስክ።'
            },
            {
              en: 'Rationalism',
              am: 'ራሽናሊዝም',
              defEn: 'The view that reason and intellect, rather than sense experience, is the primary source of knowledge.',
              defAm: 'እውቀት ከስሜት ህዋሳት ይልቅ በአእምሮና በአመክንዮአዊ አስተሳሰብ ይገኛል የሚል ፍልስፍና።'
            },
            {
              en: 'Empiricism',
              am: 'ኢምፔሪሲዝም',
              defEn: 'The view that knowledge originates exclusively or primarily in sensory experience.',
              defAm: 'እውቀት የሚገኘው በስሜት ህዋሳት ልምድና ምልከታ አማካኝነት ነው የሚል ፍልስፍና።'
            }
          ]
        }
      ]
    },
    {
      id: 'phil-sec-1-4',
      number: '1.4',
      title: {
        en: 'Lesson 4: Axiology and Logic',
        am: 'ትምህርት ፬፡ ስነ-እሴት (Axiology) እና ስነ-አመክንዮ (Logic)'
      },
      paragraphs: [
        {
          id: 'phil-p-1-7',
          subheading: {
            en: 'Axiology: Ethics, Aesthetics, and Social/Political Philosophy',
            am: 'ስነ-እሴት፡ ስነ-ምግባር፣ ስነ-ውበት እና ማህበራዊ/ፖለቲካዊ ፍልስፍና'
          },
          en: 'Axiology (from Greek "axios" meaning value/worth) is the philosophical study of values. It branches into: (1) Ethics (Moral Philosophy), which evaluates human conduct as right or wrong and is divided into Normative Ethics (Consequentialism/Teleology, Deontology, Virtue Ethics), Meta-ethics (examining ethical concepts like "good" or "just"), and Applied Ethics (practical issues like euthanasia and capital punishment); (2) Aesthetics, which studies the theory of beauty, art, and artistic taste; and (3) Social and Political Philosophy, investigating justice, ideal forms of government, rights, and the legitimacy of the State.',
          am: 'ስነ-እሴት (Axiology) የእሴቶችና የዋጋ ፍልስፍናዊ ጥናት ነው። ሶስት ዘርፎች አሉት፡ (1) ስነ-ምግባር (Ethics) ትክክልና ስህተት ባህሪን የሚያጠና ሲሆን፤ ኖርማቲቭ ስነ-ምግባር (ውጤት ተኮር፣ ግዴታ ተኮር፣ እና የባህሪ ስነ-ምግባር)፣ ሜታ-ስነምግባር (የቃላትን ፍቺ መመርመር) እና ተግባራዊ ስነ-ምግባርን (እንደ ሞት ቅጣት ያሉ) ይይዛል። (2) ስነ-ውበት (Aesthetics) ስለ ውበት፣ ኪነ-ጥበብና ጣዕም ያጠናል። (3) ማህበራዊና ፖለቲካዊ ፍልስፍና ስለ ፍትህ፣ መንግስት፣ ህግና መብቶች ያጠናል።'
        },
        {
          id: 'phil-p-1-8',
          subheading: {
            en: 'Logic: Study of Right Reasoning',
            am: 'ስነ-አመክንዮ፡ የትክክለኛ አስተሳሰብ ጥናት'
          },
          en: 'Logic is the study of principles and methods of right reasoning. It develops scientific standards to distinguish valid from invalid arguments, sound from unsound arguments, and detects fallacies in reasoning.',
          am: 'ስነ-አመክንዮ (Logic) የትክክለኛ አስተሳሰብ መርሆዎችን እና ዘዴዎችን የሚያጠና የፍልስፍና ዘርፍ ነው። ህጋዊ ክርክሮችን ከተሳሳቱ ለመለየት እና የተሳሳቱ ድምዳሜዎችን (Fallacies) ለማጋለጥ ሳይንሳዊ መስፈርቶችን ያዘጋጃል።'
        }
      ]
    },
    {
      id: 'phil-sec-1-5',
      number: '1.5',
      title: {
        en: 'Lesson 5: Importance of Learning Philosophy',
        am: 'ትምህርት ፭፡ ፍልስፍናን የመማር አስፈላጊነት'
      },
      paragraphs: [
        {
          id: 'phil-p-1-9',
          subheading: {
            en: 'Self-Actualization and Socratic Living',
            am: 'ራስን ማብቃት እና ሶክራጥሳዊ የሕይወት ፍተሻ'
          },
          en: 'Socrates declared: "The unexamined life is not worth living." Beyond maintenance needs (food, shelter, safety), human beings possess actualizing needs: intellectual and behavioral independence, reflective self-awareness, tolerance, open-mindedness, and creative critical thinking. Philosophy is a primordial contributor to achieving self-actualization.',
          am: 'ሶክራጥስ "ያልተመረመረ ሕይወት ዋጋ የለውም" ብሏል። የሰው ልጅ መሰረታዊ ፍላጎቶችን (ምግብ፣ መጠለያ) ከማሟላት ባለፈ ራስን የማብቃት ፍላጎት አለው፡ አእምሯዊና ባህሪያዊ ነፃነት፣ ራስን ማወቅ፣ ትዕግስትና ክፍት አእምሮ፣ እንዲሁም የፈጠራ ሂሳዊ አስተሳሰብ። ፍልስፍና ራስን ወደ ማብቃት የሚያደርሰን ቀዳሚ መሳሪያ ነው።'
        },
        {
          id: 'phil-p-1-10',
          subheading: {
            en: 'Dealing with Uncertainty: Bertrand Russell',
            am: 'ያልተረጋገጠውን መቀበል፡ የበርትራንድ ራስል እይታ'
          },
          en: 'In "The Problems of Philosophy", Bertrand Russell explained that philosophy is valuable for its very uncertainty. While dogmatic individuals go through life imprisoned in common prejudices, philosophizing liberates the mind, enlarges our thoughts, suggestions many possibilities, and preserves our sense of wonder by showing familiar things in an unfamiliar light.',
          am: 'በርትራንድ ራስል "The Problems of Philosophy" በተሰኘው መጽሐፉ እንዳስረዳው የፍልስፍና ዋጋ ባለው አለመረጋጋት (Uncertainty) ውስጥ ይገኛል። ጭፍን ሰው በተለመደው የልማድ እስር ቤት ውስጥ ሲኖር፣ ፍልስፍና ግን አእምሯችንን ነፃ ያወጣል፣ እይታችንን ያሰፋል፣ እና የተለመዱ ነገሮችን ባልተለመደ አዲስ ብርሃን በማሳየት ድንቅ የመሰኘት ስሜታችንን ህያው ያደርገዋል።'
        }
      ]
    }
  ],
  summaries: [
    {
      id: 'sum-101-1',
      title: {
        en: 'Summary of Chapter 1: Core Philosophical Concepts',
        am: 'የምዕራፍ ፩ ማጠቃለያ፡ የፍልስፍና መሰረታዊ ፅንሰ-ሀሳቦች'
      },
      bullets: [
        {
          en: 'Philosophy etymologically means "love of wisdom" and was coined by Pythagoras.',
          am: 'ፍልስፍና በስነ-ቃሉ "የጥበብ ፍቅር" ሲሆን ቃሉን ለመጀመሪያ ጊዜ የተጠቀመው ፒታጎረስ ነው።'
        },
        {
          en: 'Socrates taught that philosophy begins in wonder and that "the unexamined life is not worth living."',
          am: 'ሶክራጥስ ፍልስፍና በድንቅ እንደሚጀምር እና "ያልተመረመረ ሕይወት ዋጋ የለውም" በማለት አስተምሯል።'
        },
        {
          en: 'The four core fields of philosophy are Metaphysics (reality), Epistemology (knowledge), Axiology (value), and Logic (reasoning).',
          am: 'አራቱ ዋነኛ የፍልስፍና ዘርፎች ስነ-ህልውና (እውነታ)፣ ስነ-እውቀት (እውቀት)፣ ስነ-እሴት (ዋጋ/እሴት)፣ እና ስነ-አመክንዮ (አስተሳሰብ) ናቸው።'
        },
        {
          en: 'Metaphysics includes Cosmology, Theology, Anthropology, and Ontology.',
          am: 'ስነ-ህልውና ኮስሞሎጂን፣ ቴዎሎጂን፣ አንትሮፖሎጂን እና ኦንቶሎጂን ያካትታል።'
        },
        {
          en: 'Human knowledge originates from Empiricism, Rationalism, Intuition, Revelation, and Authority.',
          am: 'የሰው ልጅ እውቀት ከስሜት ህዋሳት (Empiricism)፣ ከአእምሮ (Rationalism)፣ ከውስጣዊ ስሜት፣ ከመገለጥ እና ከባለስልጣን ይመነጫል።'
        },
        {
          en: 'Bertrand Russell noted that the value of philosophy lies in liberating our minds through uncertainty.',
          am: 'በርትራንድ ራስል የፍልስፍና ፋይዳ አእምሮን ከጭፍን ልማድ በእርግጠኝነት ማጣት (Uncertainty) ነፃ በማውጣት ላይ እንደሆነ አመልክቷል።'
        }
      ]
    }
  ],
  qna: [
    {
      id: 'qna-101-1',
      number: 1,
      question: {
        en: 'Why is it difficult to define philosophy in terms of a specific subject matter?',
        am: 'ፍልስፍናን በአንድ የተወሰነ የትምህርት ርዕሰ-ጉዳይ ብቻ ለመተርጎም ለምን አስቸጋሪ ሆነ?'
      },
      answer: {
        en: 'Because philosophy deals with universal issues rather than a narrow specialized subject. It is an active rational activity of questioning, examining presuppositions, and evaluating reality as a whole.',
        am: 'ምክንያቱም ፍልስፍና ከአንድ የተወሰነ መስክ ይልቅ ዓለም አቀፋዊና ሁለንተናዊ ጉዳዮችን ስለሚያጠና ነው። ፍልስፍና ጥያቄዎችን የማመንጨት፣ መነሻዎችን የመፈተሽ እና ዓለምን በአጠቃላይ የመገምገም ንቁ ምክንያታዊ እንቅስቃሴ ነው።'
      },
      explanation: {
        en: 'Unlike chemistry or geography which have defined boundaries, philosophy investigates the foundations of all disciplines and human experience.',
        am: 'ኬሚስትሪ ወይም ጂኦግራፊ የተወሰነ ወሰን ሲኖራቸው፣ ፍልስፍና ግን የማንኛውንም የትምህርት ዘርፍ እና የሰው ልጅ ልምድ መሰረት ይመረምራል።'
      },
      category: 'conceptual'
    },
    {
      id: 'qna-101-2',
      number: 2,
      question: {
        en: 'What is the distinction between "having" a philosophy and "doing" philosophy?',
        am: 'ፍልስፍና "መኖር" (Having a philosophy) እና ፍልስፍናን "መስራት" (Doing philosophy) መካከል ያለው ልዩነት ምንድን ነው?'
      },
      answer: {
        en: '"Having" a philosophy is the informal possession of personal attitudes and unexamined beliefs. "Doing" philosophy is the formal, critical reflection and rational analysis of those beliefs.',
        am: 'ፍልስፍና "መኖር" ማለት አንድ ሰው በህይወቱ ውስጥ ሳያመዛዝን የያዘው የግል እምነትና አመለካከት ነው። ፍልስፍናን "መስራት" ግን እነዚያን እምነቶች በሂሳዊ መንገድ መመርመር፣ ማብጠርና ምክንያታዊ ማድረግ ነው።'
      },
      explanation: {
        en: 'Everyone has an informal philosophy, but only those who actively reflect, analyze, and justify their worldview are doing philosophy.',
        am: 'ሁሉም ሰው የተወሰነ የግል አመለካከት አለው፤ ነገር ግን አመለካከቱን በምክንያት የሚመረምርና የሚተነትን ብቻ ፍልስፍናን በተግባር ይሰራል ይባላል።'
      },
      category: 'conceptual'
    },
    {
      id: 'qna-101-3',
      number: 3,
      question: {
        en: 'Explain how George Knight\'s floor example illustrates the ontological question of reality.',
        am: 'የጆርጅ ናይት የወለል (Floor) ምሳሌ የእውነታን ጥያቄ እንዴት እንደሚያብራራ ግለጽ።'
      },
      answer: {
        en: 'To common sense, a floor is solid wood or concrete. To a physicist, it is composed of atoms, electrons, and pure electrical energy. To a chemist, it is a matrix of hydrocarbons. This shows that what seems obvious on the surface involves deep underlying questions of reality.',
        am: 'በተለመደው እይታ ወለል ጠጣር እንጨት ወይም ኮንክሪት ነው። ለፊዚክስ ሊቅ ግን በአተሞች፣ ኤሌክትሮኖችና ኤሌክትሪካዊ ሃይል የተዋቀረ ነው። ለኬሚስት ደግሞ የሃይድሮካርቦን ውህድ ነው። ይህም ግልፅ የሚመስለው ነገር በጥልቀት ሲመረመር ውስብስብ እውነታ እንዳለው ያሳያል።'
      },
      explanation: {
        en: 'Metaphysics pushes past everyday appearances to investigate the true, ultimate nature of existence.',
        am: 'ስነ-ህልውና ከአይን እይታ ባለፈ የመጨረሻውን የነገሮች ተፈጥሮና ህልውና ይመረምራል።'
      },
      category: 'discussion'
    },
    {
      id: 'qna-101-4',
      number: 4,
      question: {
        en: 'What are the five recognized sources of human knowledge in epistemology?',
        am: 'በስነ-እውቀት (Epistemology) ውስጥ የሚታወቁት አምስቱ የሰው ልጅ የእውቀት ምንጮች የትኞቹ ናቸው?'
      },
      answer: {
        en: '1. Empiricism (sensory perception), 2. Rationalism (reason and deductive logic), 3. Intuition (immediate insight), 4. Revelation (divine supernatural communication), and 5. Authority (established expertise or textbooks).',
        am: '፩. ኢምፔሪሲዝም (የስሜት ህዋሳት)፣ ፪. ራሽናሊዝም (አእምሮና አመክንዮ)፣ ፫. ውስጣዊ ስሜት (Intuition)፣ ፬. መገለጥ (Revelation)፣ እና ፭. ስልጣን/ባለሙያ (Authority) ናቸው።'
      },
      explanation: {
        en: 'While empiricism is dominant in contemporary science, complete knowledge often relies on a complementary balance of reason, observation, and authoritative findings.',
        am: 'በዘመናዊ ሳይንስ የስሜት ህዋሳት ምልከታ ጎልቶ ቢታይም፣ የተሟላ እውቀት ግን የአመክንዮ፣ የልምድና የታመነ ባለሙያ ቅንጅት ነው።'
      },
      category: 'exam_mcq'
    }
  ],
  quizzes: [
    {
      id: 'quiz-101-1',
      question: {
        en: 'Who was the ancient Greek thinker credited with first coining the term "philosopher"?',
        am: 'ለመጀመሪያ ጊዜ "ፈላስፋ" (Philosopher) የሚለውን ቃል የተጠቀመው ጥንታዊ የግሪክ አሳቢ ማን ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Socrates', am: 'ሶክራጥስ' } },
        { id: 'b', text: { en: 'Pythagoras', am: 'ፒታጎረስ' } },
        { id: 'c', text: { en: 'Aristotle', am: 'አሪስጣጣሊስ' } },
        { id: 'd', text: { en: 'Plato', am: 'ፕላቶ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Pythagoras was the first to use the word "philosopher" to describe someone with an active curiosity and love for wisdom.',
        am: 'ፒታጎረስ ስለ ዓለም ተፈጥሮ ከፍተኛ ጉጉትና ፍቅር ያለውን ሰው "ፈላስፋ" በማለት የጠራ የመጀመሪያው ሰው ነው።'
      }
    },
    {
      id: 'quiz-101-2',
      question: {
        en: 'Which branch of philosophy deals with the questions of reality, existence, and the cosmos?',
        am: 'ስለ እውነታ፣ ህልውና እና አጽናፈ ዓለም የሚመረምረው የፍልስፍና ዘርፍ የትኛው ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Epistemology', am: 'ስነ-እውቀት' } },
        { id: 'b', text: { en: 'Axiology', am: 'ስነ-እሴት' } },
        { id: 'c', text: { en: 'Metaphysics', am: 'ስነ-ህልውና' } },
        { id: 'd', text: { en: 'Ethics', am: 'ስነ-ምግባር' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'Metaphysics studies the ultimate nature of reality, encompassing cosmology, theology, anthropology, and ontology.',
        am: 'ስነ-ህልውና (Metaphysics) የመጨረሻውን የእውነታ ተፈጥሮ የሚያጠና ሲሆን ኮስሞሎጂንና ኦንቶሎጂን ያካትታል።'
      }
    },
    {
      id: 'quiz-101-3',
      question: {
        en: 'According to Socrates, what is the prerequisite for a worthwhile human life?',
        am: 'እንደ ሶክራጥስ አስተምህሮ፣ ለሰው ልጅ ትርጉም ያለው ሕይወት መኖር ቅድመ ሁኔታው ምንድን ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Accumulating wealth and social status', am: 'ሀብትና ማህበራዊ ክብር ማካበት' } },
        { id: 'b', text: { en: 'Examining oneself and one\'s beliefs critically', am: 'ራስንና እምነቶችን በሂሳዊ እይታ መመርመር' } },
        { id: 'c', text: { en: 'Obeying political authority without question', am: 'የፖለቲካ ባለስልጣናትን ያለጥያቄ መታዘዝ' } },
        { id: 'd', text: { en: 'Avoiding all form of doubt and uncertainty', am: 'ጥርጣሬንና አለመረጋጋትን ሙሉ በሙሉ ማስወገድ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Socrates famously stated that "The unexamined life is not worth living", advocating continuous self-reflection and dialogue.',
        am: 'ሶክራጥስ "ያልተመረመረ ሕይወት ዋጋ የለውም" በማለት የማያቋርጥ ራስን የመመርመርና እውነትን የመፈለግ ሕይወትን አስተምሯል።'
      }
    },
    {
      id: 'quiz-101-4',
      question: {
        en: 'Which branch of Axiology investigates standards of beauty, art, and artistic taste?',
        am: 'የስነ-እሴት አካል ሆኖ ስለ ውበት፣ ኪነ-ጥበብና የጥበብ ጣዕም የሚያጠናው የቱ ነው?'
      },
      options: [
        { id: 'a', text: { en: 'Aesthetics', am: 'ስነ-ውበት' } },
        { id: 'b', text: { en: 'Deontology', am: 'ዲኦንቶሎጂ' } },
        { id: 'c', text: { en: 'Meta-ethics', am: 'ሜታ-ስነምግባር' } },
        { id: 'd', text: { en: 'Political Philosophy', am: 'ፖለቲካዊ ፍልስፍና' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Aesthetics is the philosophical theory of beauty and artistic value.',
        am: 'ስነ-ውበት (Aesthetics) ስለ ውበት፣ ስነ-ጥበብ እና ስሜታዊ እሴቶች የሚያጠና የፍልስፍና ክፍል ነው።'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc-101-1',
      termEn: 'Philosophy',
      termAm: 'ፍልስፍና',
      defEn: 'Etymologically "love of wisdom"; rational pursuit of truth and ultimate reality.',
      defAm: 'የጥበብ ፍቅር፤ ስለ እውነት፣ እሴትና ህልውና የሚደረግ ምክንያታዊ ምርምር።',
      chapter: 1
    },
    {
      id: 'fc-101-2',
      termEn: 'Metaphysics',
      termAm: 'ስነ-ህልውና',
      defEn: 'Philosophical study of the ultimate nature of reality and existence.',
      defAm: 'የመጨረሻውን የእውነታ፣ የነገሮች መኖርና የአጽናፈ ዓለም ተፈጥሮ ጥናት።',
      chapter: 1
    },
    {
      id: 'fc-101-3',
      termEn: 'Epistemology',
      termAm: 'ስነ-እውቀት',
      defEn: 'Study of the origin, nature, validity, and limits of human knowledge.',
      defAm: 'የእውቀት አመጣጥ፣ ምንነት፣ ተአማኒነት እና ወሰን የሚያጠና ዘርፍ።',
      chapter: 1
    },
    {
      id: 'fc-101-4',
      termEn: 'Axiology',
      termAm: 'ስነ-እሴት',
      defEn: 'Study of values, encompassing ethics, aesthetics, and political philosophy.',
      defAm: 'ስለ እሴቶች የሚያጠና ዘርፍ (ስነ-ምግባርን፣ ስነ-ውበትንና ፖለቲካን ያካትታል)።',
      chapter: 1
    },
    {
      id: 'fc-101-5',
      termEn: 'Rationalism',
      termAm: 'ራሽናሊዝም',
      defEn: 'Epistemological theory holding reason as the primary source of knowledge.',
      defAm: 'እውቀት የሚመነጨው ከአእምሮ አመክንዮ ነው የሚል የስነ-እውቀት ንድፈ-ሀሳብ።',
      chapter: 1
    },
    {
      id: 'fc-101-6',
      termEn: 'Empiricism',
      termAm: 'ኢምፔሪሲዝም',
      defEn: 'Epistemological theory holding sensory experience as the basis of knowledge.',
      defAm: 'እውቀት ከስሜት ህዋሳት ምልከታና ልምምድ ይገኛል የሚል ፍልስፍና።',
      chapter: 1
    }
  ]
};
