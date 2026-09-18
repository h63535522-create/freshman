import { OfficialPdfPage } from '../geographyPdf/types';

export const logicChapter5Pages: OfficialPdfPage[] = [
  // Page 117
  {
    pdfPageNumber: 117,
    bookPageLabel: '117',
    chapterNumber: 5,
    sectionRef: '5.0',
    pageType: 'content',
    titleEn: 'CHAPTER FIVE: CATEGORICAL SYLLOGISMS',
    titleAm: 'ምዕራፍ አምስት፡ ምድባዊ ሲሎጂዝሞች (Categorical Syllogisms)',
    subtopicEn: 'Standard Form, Major, Minor, and Middle Terms',
    subtopicAm: 'መደበኛ ቅርፅ፣ ዋና (Major)፣ ሁለተኛ (Minor) እና መካከለኛ (Middle) ቃላት',
    contentEn: `CHAPTER FIVE: CATEGORICAL SYLLOGISMS

Chapter Overview:
A categorical syllogism is a deductive argument consisting of exactly three categorical propositions (two premises and one conclusion) that together contain exactly three distinct terms, each of which occurs exactly twice in two different constituent propositions.

Standard Form:
A categorical syllogism is in standard form when:
1. The premises and conclusion are standard-form categorical propositions (A, E, I, or O).
2. The first premise is the Major Premise (contains the Major Term).
3. The second premise is the Minor Premise (contains the Minor Term).
4. The conclusion is stated last.

The Three Terms of a Syllogism:
• Major Term (P): The predicate term of the conclusion.
• Minor Term (S): The subject term of the conclusion.
• Middle Term (M): The term that appears in both premises but NEVER appears in the conclusion! (The middle term acts as the logical bridge linking S and P).

Example of Standard Form:
All mammals are animals. (Major Premise: contains M and P)
All dogs are mammals. (Minor Premise: contains S and M)
Therefore, all dogs are animals. (Conclusion: contains S and P)
Here:
- Major Term (P): "animals"
- Minor Term (S): "dogs"
- Middle Term (M): "mammals"`,
    contentAm: `ምዕራፍ አምስት፡ ምድባዊ ሲሎጂዝሞች (Categorical Syllogisms)

የምዕራፉ አጠቃላይ እይታ፡
ምድባዊ ሲሎጂዝም ማለት ሁለት መነሻዎች እና አንድ ድምዳሜ የያዘ፣ በውስጡም ሦስት የተለያዩ ቃላት (Terms) እያንዳንዳቸው ሁለት ሁለት ጊዜ የሚደጋገሙበት ዴዳክቲቭ ሙግት ነው።

ሦስቱ የሲሎጂዝም ቃላት (Terms)፡
1. ሜጀር ተርም (Major Term - P)፡ በድምዳሜው ውስጥ ያለው ፕሬዲኬት ነው።
2. ማይነር ተርም (Minor Term - S)፡ በድምዳሜው ውስጥ ያለው ባለቤት (Subject) ነው።
3. ሚድል ተርም (Middle Term - M)፡ በሁለቱም መነሻዎች ውስጥ የሚገኝ ነገር ግን በድምዳሜው ውስጥ ፈጽሞ የማይካተት አገናኝ ቃል ነው።

መደበኛ ቅደም ተከተል፡
1. ሜጀር ፕሪማይዝ (Major Premise)፡ ሜጀር ተርም (P) ያለበት መነሻ።
2. ማይነር ፕሪማይዝ (Minor Premise)፡ ማይነር ተርም (S) ያለበት መነሻ።
3. ድምዳሜ (Conclusion)፡ S እና P የሚገናኙበት።`
  },
  // Page 118
  {
    pdfPageNumber: 118,
    bookPageLabel: '118',
    chapterNumber: 5,
    sectionRef: '5.1 Mood and Figure',
    pageType: 'content',
    titleEn: 'Mood and Figure of Categorical Syllogisms',
    titleAm: 'የምድባዊ ሲሎጂዝሞች ሙድ (Mood) እና ፊገር (Figure)',
    subtopicEn: 'The 256 Syllogistic Forms & The Four Positional Figures of Middle Term',
    subtopicAm: '256ቱ የሲሎጂዝም ቅርጾች እና የመካከለኛው ቃል (Middle Term) 4ቱ አቀማመጦች',
    contentEn: `Mood and Figure:
The logical form of a standard-form categorical syllogism is uniquely identified by its mood and figure.

1. Mood:
The mood consists of the three letters naming the standard forms of the major premise, minor premise, and conclusion, in that exact order.
For example, if the major premise is A, the minor premise is E, and the conclusion is E, the mood is AEE.
Since there are 4 types of propositions (A, E, I, O), there are 4 x 4 x 4 = 64 possible moods.

2. Figure:
The figure is identified by the four possible positions of the middle term (M) in the premises:
Figure 1:       Figure 2:       Figure 3:       Figure 4:
  M - P           P - M           M - P           P - M
  S - M           S - M           M - S           M - S
  -----           -----           -----           -----
  S - P           S - P           S - P           S - P

Together, 64 moods multiplied by 4 figures yields 256 distinct syllogistic forms! Of these 256 forms, only 15 are conditionally valid under the modern Boolean standpoint, while 24 are valid under the traditional Aristotelian standpoint.

Example:
All M are P. (A)
All S are M. (A)
Therefore, all S are P. (A)
Middle term is left-right (Figure 1).
Mood and Figure: AAA-1 (The famous "Barbara" form: Unconditionally VALID).`,
    contentAm: `ሙድ (Mood) እና ፊገር (Figure)፡

1. ሙድ (Mood)፡ የመነሻዎቹ እና የድምዳሜው የፊደል ቅደም ተከተል ነው (ለምሳሌ AAA, EAE, EIO)። በድምሩ 64 ሙዶች አሉ።

2. ፊገር (Figure)፡ መካከለኛው ቃል (Middle Term - M) በመነሻዎቹ ውስጥ የሚቀመጥበት አራት ዓይነት አቅጣጫ ነው፡
- ፊገር 1፡ M በመጀመሪያው ግራ፣ በሁለተኛው ቀኝ (M-P / S-M)
- ፊገር 2፡ M በሁለቱም ቀኝ (P-M / S-M)
- ፊገር 3፡ M በሁለቱም ግራ (M-P / M-S)
- ፊገር 4፡ M በመጀመሪያው ቀኝ፣ በሁለተኛው ግራ (P-M / M-S)

64 ሙዶች በ 4 ፊገሮች ሲባዙ በአጠቃላይ 256 የሲሎጂዝም ቅርጾች ይገኛሉ። ከነዚህ ውስጥ ጥቂቶቹ (ለምሳሌ AAA-1, EAE-1, EIO-1) ብቻ ትክክለኛ (Valid) ናቸው።`
  },
  // Page 119
  {
    pdfPageNumber: 119,
    bookPageLabel: '119',
    chapterNumber: 5,
    sectionRef: '5.2 Syllogistic Rules',
    pageType: 'content',
    titleEn: 'The Six Rules of Syllogism and Their Corresponding Fallacies',
    titleAm: 'ስድስቱ የሲሎጂዝም ህጎች እና ተዛማጅ ስህተቶቻቸው (Fallacies)',
    subtopicEn: 'Middle Term Distribution, Illicit Major/Minor, Exclusive Premises, Negative Rules',
    subtopicAm: 'የመካከለኛ ቃል ስርጭት፣ ኢሊሲት ሜጀርና ማይነር፣ ሁለቱ አሉታዊ መነሻዎች',
    contentEn: `The Six Syllogistic Rules and Fallacies:
A standard-form categorical syllogism is valid if and only if it satisfies ALL of the following formal rules:

Rule 1: The middle term must be distributed in at least one premise.
Violation commits the Fallacy of Undistributed Middle.
(If the middle term is not distributed at least once, it may refer to different parts of the middle class in each premise, providing no logical bridge!).

Rule 2: If a term is distributed in the conclusion, it must also be distributed in a premise.
Violations commit:
• Fallacy of Illicit Major (if the major term is distributed in conclusion but not in major premise).
• Fallacy of Illicit Minor (if the minor term is distributed in conclusion but not in minor premise).

Rule 3: Avoid two negative premises.
A syllogism cannot have two negative premises (E or O).
Violation commits the Fallacy of Exclusive Premises.

Rule 4: A negative premise requires a negative conclusion, and a negative conclusion requires a negative premise.
Violations commit:
• Fallacy of Drawing an Affirmative Conclusion from a Negative Premise.
• Fallacy of Drawing a Negative Conclusion from Affirmative Premises.

Rule 5: If both premises are universal, the conclusion cannot be particular (Boolean standpoint).
Violation commits the Existential Fallacy.`,
    contentAm: `ስድስቱ የሲሎጂዝም ህጎች እና ስህተቶቻቸው፡

ህግ 1፡ መካከለኛው ቃል (Middle Term) ቢያንስ በአንዱ መነሻ ውስጥ ስርጭት (Distributed) ሊኖረው ይገባል።
- ይህ ህግ ሲጣስ፡ Fallacy of Undistributed Middle ይፈጠራል።

ህግ 2፡ በድምዳሜው ውስጥ ስርጭት ያለው ቃል በመነሻው ውስጥም ስርጭት ሊኖረው ይገባል።
- ሜጀር ተርም ከተጣሰ፡ Fallacy of Illicit Major
- ማይነር ተርም ከተጣሰ፡ Fallacy of Illicit Minor

ህግ 3፡ ሁለት አሉታዊ (Negative) መነሻዎች ሊኖሩ አይችሉም።
- ይህ ህግ ሲጣስ፡ Fallacy of Exclusive Premises ይፈጠራል።

ህግ 4፡ አንዱ መነሻ አሉታዊ ከሆነ ድምዳሜው የግድ አሉታዊ መሆን አለበት፤ ሁለቱም መነሻዎች አዎንታዊ ከሆኑ ድምዳሜው አዎንታዊ መሆን አለበት።

ህግ 5፡ ሁለቱም መነሻዎች አጠቃላይ (Universal) ከሆኑ ድምዳሜው ከፊል (Particular) ሊሆን አይችልም።
- ይህ ሲጣስ፡ Existential Fallacy ይፈጠራል።`
  }
];
