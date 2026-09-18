import { OfficialPdfPage } from '../geographyPdf/types';

export const emergingTechChapter2Pages: OfficialPdfPage[] = [
  // Page 22: Chapter 2 Intro & Data Science Overview (Book Page 21)
  {
    pdfPageNumber: 22,
    bookPageLabel: '21',
    chapterNumber: 2,
    sectionRef: '2.1',
    titleEn: 'Chapter 2: Data Science — An Overview of Data Science',
    titleAm: 'ምዕራፍ 2፡ ዳታ ሳይንስ — የዳታ ሳይንስ አጠቃላይ እይታ',
    subtopicEn: 'Definition of Data Science, Multidisciplinary Nature, and Cereal Box Purchase Example',
    subtopicAm: 'የዳታ ሳይንስ ትርጓሜ፣ ሁለገብ ተፈጥሮ እና የቁርስ እህል (የጤፍ) ግዢ ምሳሌ',
    pageType: 'content',
    contentEn: `Chapter 2: Data Science

Introduction
In the previous chapter, the concept of the role of data for emerging technologies was discussed. In this chapter, you are going to learn more about data science, data vs. information, data types and representation, data value chain, and basic concepts of big data.

After completing this chapter, the students will be able to:
➢ Describe what data science is and the role of data scientists.
➢ Differentiate data and information.
➢ Describe data processing life cycle.
➢ Understand different data types from diverse perspectives.
➢ Describe data value chain in emerging era of big data.
➢ Understand the basics of Big Data.
➢ Describe the purpose of the Hadoop ecosystem components.

2.1. An Overview of Data Science
Activity 2.1:
➢ What is data science? Can you describe the role of data in emerging technology?
➢ What are data and information?
➢ What is big data?

Data science is a multi-disciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured, semi-structured and unstructured data. Data science is much more than simply analyzing data. It offers a range of roles and requires a range of skills.

Let’s consider this idea by thinking about some of the data involved in buying a box of cereal from the store or supermarket:
• Whatever your cereal preferences—teff, wheat, or burly—you prepare for the purchase by writing “cereal” in your notebook. This planned purchase is a piece of data though it is written by pencil that you can read.`,
    contentAm: `ምዕራፍ 2፡ ዳታ ሳይንስ

መግቢያ
ባለፈው ምዕራፍ ስለ መረጃ (ዳታ) ሚና ተምረናል። በዚህ ምዕራፍ ስለ ዳታ ሳይንስ፣ ዳታና መረጃ፣ የዳታ አይነቶች፣ የዳታ እሴት ሰንሰለት እና የቢግ ዳታ መሰረታዊ ፅንሰ-ሀሳቦች ይዳሰሳሉ።

ይህንን ምዕራፍ ካጠናቀቁ በኋላ ተማሪዎች፡
➢ ዳታ ሳይንስ ምን እንደሆነ እና የዳታ ሳይንቲስቶችን ሚና ይገልጻሉ።
➢ ዳታ እና መረጃን ይለያሉ።
➢ የመረጃ ማቀነባበሪያ ዑደትን ያብራራሉ።
➢ የዳታ አይነቶችን ከተለያዩ አቅጣጫዎች ይረዳሉ።
➢ የዳታ እሴት ሰንሰለትን ይተነትናሉ።
➢ የቢግ ዳታ እና የHadoop ስነ-ምህዳር ክፍሎችን ይረዳሉ።

2.1. የዳታ ሳይንስ አጠቃላይ እይታ
ዳታ ሳይንስ ከየተዋቀረ (structured)፣ ከፊል-የተዋቀረ (semi-structured) እና ካልተዋቀረ (unstructured) መረጃ ውስጥ እውቀትንና ጥልቅ ግንዛቤዎችን ለማውጣት ሳይንሳዊ ዘዴዎችን፣ አልጎሪዝሞችንና ስርአቶችን የሚጠቀም ሁለገብ የትምህርት መስክ ነው።

የቁርስ እህል (የጤፍ ወይም የስንዴ) ግዢ ምሳሌ፡ በደብተርዎ ላይ "እህል" ብለው ሲጽፉ ይህ የመጀመሪያው ያልተሰራበት መረጃ (ዳታ) ነው።`
  },

  // Page 23: Data Journey & Skills of Data Scientists (Book Page 22)
  {
    pdfPageNumber: 23,
    bookPageLabel: '22',
    chapterNumber: 2,
    sectionRef: '2.1',
    titleEn: 'The Data Journey & Professional Roles in Data Science',
    titleAm: 'የመረጃ ጉዞ እና የዳታ ሳይንቲስቶች ሙያዊ ብቃቶች',
    subtopicEn: 'From Barcode Scanning to Managerial Decisions and Required Skillsets',
    subtopicAm: 'ከባርኮድ ንባብ እስከ አስተዳደራዊ ውሳኔዎች እና አስፈላጊ የዳታ ሳይንስ ክህሎቶች',
    pageType: 'content',
    contentEn: `• When you get to the store, you use your data as a reminder to grab the item and put it in your cart. At the checkout line, the cashier scans the barcode on your container, and the cash register logs the price. Back in the warehouse, a computer tells the stock manager that it is time to request another order from the distributor because your purchase was one of the last boxes in the store.
• You also have a coupon for your big box, and the cashier scans that, giving you a predetermined discount. At the end of the week, a report of all the scanned manufacturer coupons gets uploaded to the cereal company so they can issue a reimbursement to the grocery store for all of the coupon discounts they have handed out to customers. Finally, at the end of the month, a store manager looks at a colorful collection of pie charts showing all the different kinds of cereal that were sold and, on the basis of strong sales of cereals, decides to offer more varieties of these on the store’s limited shelf space next month.
• So, the small piece of information that began as a scribble on your notebook ended up in many different places, most notably on the desk of a manager as an aid to decision making. On the trip from your pencil to the manager’s desk, the data went through many transformations. In addition to the computers where the data might have stopped by or stayed on for the long term, lots of other pieces of hardware—such as the barcode scanner—were involved in collecting, manipulating, transmitting, and storing the data. In addition, many different pieces of software were used to organize, aggregate, visualize, and present the data. Finally, many different human systems were involved in working with the data.

As an academic discipline and profession, data science continues to evolve as one of the most promising and in-demand career paths for skilled professionals. Today, successful data professionals understand that they must advance past the traditional skills of analyzing large amounts of data, data mining, and programming skills. In order to uncover useful intelligence for their organizations, data scientists must master the full spectrum of the data science life cycle and possess a level of flexibility and understanding to maximize returns at each phase of the process. Data scientists need to be curious and result-oriented, with exceptional industry-specific knowledge and communication skills that allow them to explain highly technical results to their non-technical counterparts.`,
    contentAm: `• ሱቁ ሲደርሱ መረጃዎን እቃውን ለማስታወስ ይጠቀሙበታል። ሂሳብ ከፋዩ ባርኮዱን ሲያነበው ዋጋው ይመዘገባል። በመጋዘኑ ውስጥ ያለው ኮምፒውተር ደግሞ ክምችቱ እያለቀ መሆኑን ለኃላፊው ያሳውቃል።
• ኩፖኑ ሲነበብ ቅናሽ ይደረጋል፣ ቅናሹ በሳምንቱ መጨረሻ ለኩባንያው ይላካል። በወሩ መጨረሻ ስራ አስኪያጁ የሽያጭ ፓይ ቻርቶችን በማየት ለቀጣዩ ወር ምን ያህል እህል መገዛት እንዳለበት ውሳኔ ይሰጣል።
• በደብተር ላይ በእርሳስ ከተጻፈች አጭር ማስታወሻ የተነሳው መረጃ ተቀነባብሮ፣ በባርኮድ አንባቢ እና በሶፍትዌር አልፎ የስራ አስኪያጁን ውሳኔ የሚመራ ትልቅ መረጃ ሆነ።

የዳታ ሳይንቲስቶች ሙያዊ ባህሪያት፡
ዳታ ሳይንስ ከፍተኛ ተፈላጊነት ያለው ሙያ ነው። ዳታ ሳይንቲስቶች በስታቲስቲክስ፣ በሊኒየር አልጀብራ፣ በዳታቤዝ ማከማቻ፣ በዳታ ማይኒንግ እና በኮምፒውተር ፕሮግራሚንግ ጥልቅ እውቀት ሊኖራቸው ይገባል። በተጨማሪም ውስብስብ የቴክኒክ ውጤቶችን ለንግድ መሪዎች በግልጽ ቋንቋ ማስረዳት የሚችሉበት የግንኙነት (Communication) ክህሎት ያስፈልጋቸዋል።`
  },

  // Page 24: Data vs Information & Data Processing Cycle (Book Page 23)
  {
    pdfPageNumber: 24,
    bookPageLabel: '23',
    chapterNumber: 2,
    sectionRef: '2.1.1',
    titleEn: 'Data vs. Information & Data Processing Cycle',
    titleAm: 'ዳታ እና መረጃ እንዲሁም የመረጃ ማቀነባበሪያ ዑደት',
    subtopicEn: 'Unprocessed Facts vs Interpreted Data; Input, Processing, and Output Stages',
    subtopicAm: 'ያልተሰራበት ጥሬ መረጃ እና የተተነተነ መረጃ፤ ግብዓት፣ ማቀነባበር እና ውጤት',
    pageType: 'content',
    figures: [
      { id: 'fig-2.1', caption: 'Figure 2.1 Data Processing Cycle', description: 'Flow diagram showing Input -> Processing -> Output.' }
    ],
    contentEn: `Activity 2.2:
➢ Describe in some detail the main disciplines that contribute to data science.
➢ Let the teacher explain the role of data scientists and students may write a small report on the same.

2.1.1. What are data and information?
Data can be defined as a representation of facts, concepts, or instructions in a formalized manner, which should be suitable for communication, interpretation, or processing, by human or electronic machines. It can be described as unprocessed facts and figures. It is represented with the help of characters such as alphabets (A-Z, a-z), digits (0-9) or special characters (+, -, /, *, <, >, =, etc.).
Whereas information is the processed data on which decisions and actions are based. It is data that has been processed into a form that is meaningful to the recipient and is of real or perceived value in the current or the prospective action or decision of recipient. Furthermore, information is interpreted data; created from organized, structured, and processed data in a particular context.

2.1.2. Data Processing Cycle
Data processing is the re-structuring or re-ordering of data by people or machines to increase their usefulness and add values for a particular purpose. Data processing consists of the following basic steps - input, processing, and output. These three steps constitute the data processing cycle.

[Figure 2.1 Data Processing Cycle: Input -> Processing -> Output]

• Input − in this step, the input data is prepared in some convenient form for processing. The form will depend on the processing machine. For example, when electronic computers are used, the input data can be recorded on any one of the several types of storage medium, such as hard disk, CD, flash disk and so on.`,
    contentAm: `2.1.1. ዳታ እና መረጃ ምንድን ናቸው?
• ዳታ (Data)፡ ባልተሰራበትና ባልተተነተነ መልኩ የሚገኙ ጥሬ ሀቆች እና አሃዞች ናቸው። በፊደላት (A-Z)፣ በቁጥሮች (0-9) ወይም በልዩ ምልክቶች (+, -, *) ይወከላሉ። ለኮምፒውተር ወይም ለሰው ግንኙነትና ማቀነባበር የተዘጋጁ ጥሬ እውነታዎች ናቸው።
• መረጃ (Information)፡ የተቀነባበረ፣ ትርጉም የተሰጠው እና ለውሳኔ ሰጪነት የሚረዳ ዳታ ነው። መረጃ ማለት በዐውድ ውስጥ ተደራጅቶና ተዋቅሮ የተቀመጠ የተተነተነ ዳታ ነው።

2.1.2. የመረጃ ማቀነባበሪያ ዑደት (Data Processing Cycle)
ዳታን ይበልጥ ጠቃሚ ለማድረግ የሚደረግ ዳግም ማደራጀት ነው። ሦስት መሰረታዊ ደረጃዎች አሉት፡
1. ግብዓት (Input)፡ ዳታውን ለማቀነባበሪያ ምቹ በሆነ መንገድ ማዘጋጀት እና ማስገባት (በሃርድ ዲስክ፣ በፍላሽ፣ በኪቦርድ)።
2. ማቀነባበር (Processing)፡ ዳታውን ወደ ጠቃሚ ቅርጽ መለወጥ።
3. ውጤት (Output)፡ የማቀነባበሩ ውጤት ለተጠቃሚው ይቀርባል (እንደ የሰራተኞች የደመወዝ ስሌት)።

[ምስል 2.1 የመረጃ ማቀነባበሪያ ዑደት]`
  },

  // Page 25: Processing, Output & Programming Data Types (Book Page 24)
  {
    pdfPageNumber: 25,
    bookPageLabel: '24',
    chapterNumber: 2,
    sectionRef: '2.3',
    titleEn: 'Data Processing & Programming Perspective Data Types',
    titleAm: 'ማቀነባበር፣ ውጤት እና የዳታ አይነቶች ከፕሮግራሚንግ አንጻር',
    subtopicEn: 'Processing and Output Definitions, Integers, Booleans, Chars, Floats, Strings',
    subtopicAm: 'የማቀነባበርና የውጤት ትርጓሜ፣ ኢንቲጀር፣ ቡሊያን፣ ካራክተር፣ ፍሎት፣ ስትሪንግ',
    pageType: 'content',
    contentEn: `• Processing − in this step, the input data is changed to produce data in a more useful form. For example, interest can be calculated on deposit to a bank, or a summary of sales for the month can be calculated from the sales orders.
• Output − at this stage, the result of the proceeding processing step is collected. The particular form of the output data depends on the use of the data. For example, output data may be payroll for employees.

Activity 2.3:
➢ Discuss the main differences between data and information with examples.
➢ Can we process data manually using a pencil and paper? Discuss the differences with data processing using the computer.

2.3 Data types and their representation
Data types can be described from diverse perspectives. In computer science and computer programming, for instance, a data type is simply an attribute of data that tells the compiler or interpreter how the programmer intends to use the data.

2.3.1. Data types from Computer programming perspective
Almost all programming languages explicitly include the notion of data type, though different languages may use different terminology. Common data types include:
• Integers (int) - is used to store whole numbers, mathematically known as integers
• Booleans (bool) - is used to represent restricted to one of two values: true or false
• Characters (char) - is used to store a single character
• Floating-point numbers (float) - is used to store real numbers
• Alphanumeric strings (string) - used to store a combination of characters and numbers

A data type makes the values that expression, such as a variable or a function, might take. This data type defines the operations that can be done on the data, the meaning of the data, and the way values of that type can be stored.`,
    contentAm: `• ማቀነባበር (Processing)፡ ግብዓቱ ተሰልቶ ወደ ተሻለ ቅርጽ የሚቀየርበት ሂደት (ለምሳሌ የባንክ ወለድ ወይም የወር ሽያጭ ድምር ማስላት)።
• ውጤት (Output)፡ የማቀነባበሩ የመጨረሻ ውጤት የሚሰበሰብበትና የሚቀርብበት ደረጃ (ለምሳሌ የሰራተኞች ደመወዝ ፔይሮል)።

2.3 የዳታ አይነቶች እና ውክልናቸው
በኮምፒውተር ሳይንስ ውስጥ የዳታ አይነት ማለት ኮምፒውተሩ (ኮምፓይለሩ) መረጃውን እንዴት መያዝ እንዳለበት የሚነግር ባህሪ ነው።

2.3.1. የዳታ አይነቶች ከኮምፒውተር ፕሮግራሚንግ አንጻር፡
• ኢንቲጀር (Integer - int)፡ ሙሉ ቁጥሮችን ለማከማቸት ያገለግላል።
• ቡሊያን (Boolean - bool)፡ ከሁለት እሴቶች አንዱን ብቻ ይወክላል (እውነት / ሐሰት - true or false)።
• ካራክተር (Character - char)፡ አንድ ነጠላ ፊደል ወይም ምልክት ይይዛል።
• ፍሎቲንግ-ፖይንት (Float)፡ ነጥብ (ዴሲማል) ያላቸውን እውነተኛ ቁጥሮች ይይዛል።
• ስትሪንግ (String)፡ የፊደላትና የቁጥሮች ውህድ ጽሑፍን ያከማቻል።`
  },

  // Page 26: Data Analytics Perspective: Structured, Semi-structured, Unstructured (Book Page 25)
  {
    pdfPageNumber: 26,
    bookPageLabel: '25',
    chapterNumber: 2,
    sectionRef: '2.3.2',
    titleEn: 'Data Analytics Perspective: Structured, Semi-structured & Unstructured',
    titleAm: 'የዳታ አይነቶች ከመረጃ ትንተና አንጻር፡ የተዋቀረ፣ ከፊል-የተዋቀረ እና ያልተዋቀረ',
    subtopicEn: 'Tabular SQL/Excel, Self-describing JSON/XML, and Text-heavy Unstructured Data',
    subtopicAm: 'የሰንጠረዥ SQL/ኤክሴል፣ ራሱን የሚገልጽ JSON/XML እና የጽሑፍ/ቪዲዮ ያልተዋቀረ መረጃ',
    pageType: 'content',
    figures: [
      { id: 'fig-2.2', caption: 'Figure 2.2 Data types from a data analytics perspective', description: 'Diagram contrasting Structured data, Textual/Image/Video/Audio unstructured data, XML/JSON semi-structured, and Metadata.' }
    ],
    contentEn: `2.3.2. Data types from Data Analytics perspective
From a data analytics point of view, it is important to understand that there are three common types of data types or structures: Structured, Semi-structured, and Unstructured data types. Fig. 2.2 below describes the three types of data and metadata.

[Figure 2.2 Data types from a data analytics perspective]

Structured Data:
Structured data is data that adheres to a pre-defined data model and is therefore straightforward to analyze. Structured data conforms to a tabular format with a relationship between the different rows and columns. Common examples of structured data are Excel files or SQL databases. Each of these has structured rows and columns that can be sorted.

Semi-structured Data:
Semi-structured data is a form of structured data that does not conform with the formal structure of data models associated with relational databases or other forms of data tables, but nonetheless, contains tags or other markers to separate semantic elements and enforce hierarchies of records and fields within the data. Therefore, it is also known as a self-describing structure. Examples of semi-structured data include JSON and XML.

Unstructured Data:
Unstructured data is information that either does not have a predefined data model or is not organized in a pre-defined manner. Unstructured information is typically text-heavy but may contain data such as dates, numbers, and facts as well. This results in irregularities and ambiguities that make it difficult to understand using traditional programs as compared to data stored in structured databases.`,
    contentAm: `2.3.2. የዳታ አይነቶች ከመረጃ ትንተና (Data Analytics) አንጻር፡
በዳታ ትንተና ሦስት ዋና ዋና የዳታ አወቃቀሮች አሉ፡

1. የተዋቀረ ዳታ (Structured Data)፡
በቅድሚያ በተወሰነ የዳታ ሞዴል መሰረት የሚቀመጥ እና ለመተንተን በጣም ቀላል የሆነ ነው። በረድፍና በአምድ (ሰንጠረዥ) መልክ ይቀመጣል። ምሳሌ፡ የኤክሴል ሰንጠረዦች ወይም የSQL ዳታቤዞች።

2. ከፊል-የተዋቀረ ዳታ (Semi-structured Data)፡
እንደ መደበኛ ሪሌሽናል ዳታቤዝ የጠነከረ ሰንጠረዥ ባይኖረውም፣ የመረጃውን ክፍሎች የሚለዩ ታጎችና ማርከሮች (tags) አሉት። ራሱን የሚገልጽ (self-describing) ይባላል። ምሳሌ፡ JSON እና XML ፋይሎች።

3. ያልተዋቀረ ዳታ (Unstructured Data)፡
ምንም አይነት የቅድመ-ውቅር ሞዴል የሌለው ነው። አብዛኛውን ጊዜ በጽሑፍ፣ በድምጽና በቪዲዮ መልክ ይገኛል። በተለመደው የኮምፒውተር ፕሮግራም ለመተንተን አስቸጋሪ ነው።

[ምስል 2.2 የዳታ አይነቶች ከመረጃ ትንተና አንጻር]`
  },

  // Page 27: Metadata & Data Value Chain (Book Page 26)
  {
    pdfPageNumber: 27,
    bookPageLabel: '26',
    chapterNumber: 2,
    sectionRef: '2.4',
    titleEn: 'Metadata & The Big Data Value Chain',
    titleAm: 'ሜታዳታ (መረጃ ስለ መረጃ) እና የዳታ እሴት ሰንሰለት',
    subtopicEn: 'Data about Data & Five Stages: Acquisition, Analysis, Curation, Storage, Usage',
    subtopicAm: 'መረጃ ስለ መረጃ እና አምስቱ ደረጃዎች፡ መሰብሰብ፣ መተንተን፣ ማረም፣ ማከማቸት፣ መጠቀም',
    pageType: 'content',
    figures: [
      { id: 'fig-2.3', caption: 'Figure 2.3 Data Value Chain', description: 'Value chain chart showing Acquisition -> Analysis -> Curation -> Storage -> Usage.' }
    ],
    contentEn: `Common examples of unstructured data include audio, video files or No-SQL databases.

Metadata – Data about Data:
The last category of data type is metadata. From a technical point of view, this is not a separate data structure, but it is one of the most important elements for Big Data analysis and big data solutions. Metadata is data about data. It provides additional information about a specific set of data.

In a set of photographs, for example, metadata could describe when and where the photos were taken. The metadata then provides fields for dates and locations which, by themselves, can be considered structured data. Because of this reason, metadata is frequently used by Big Data solutions for initial analysis.

Activity 2.4:
➢ Discuss data types from programming and analytics perspectives.
➢ Compare metadata with structured, unstructured and semi-structured data.
➢ Give at least one example of structured, unstructured and semi-structured data types.

2.4. Data value Chain
The Data Value Chain is introduced to describe the information flow within a big data system as a series of steps needed to generate value and useful insights from data. The Big Data Value Chain identifies the following key high-level activities:
1. Data Acquisition
2. Data Analysis
3. Data Curation
4. Data Storage
5. Data Usage

[Figure 2.3 Data Value Chain: Data Acquisition -> Data Analysis -> Data Curation -> Data Storage -> Data Usage]`,
    contentAm: `ሜታዳታ (Metadata) – መረጃ ስለ መረጃ፡
ሜታዳታ ማለት ስለ አንድ ዳታ ተጨማሪ መረጃ የሚሰጥ ክፍል ነው። ለምሳሌ በፎቶግራፍ ላይ ፎቶው የተነሳበት ቀን፣ ሰዓት፣ ቦታና የካሜራ አይነት ሜታዳታ ነው። ሜታዳታ ራሱ የተዋቀረ ስለሆነ ለቢግ ዳታ የመጀመሪያ ትንተና በጣም ይጠቅማል።

2.4. የዳታ እሴት ሰንሰለት (Data Value Chain)
የዳታ እሴት ሰንሰለት ከመረጃ ውስጥ ትርጉምና እሴት ለማውጣት የሚያስፈልጉ ተከታታይ እርምጃዎችን ያሳያል፡
1. መረጃ ማሰባሰብ (Data Acquisition)
2. መረጃ መተንተን (Data Analysis)
3. መረጃን ማረምና ማስተካከል (Data Curation)
4. መረጃ ማከማቸት (Data Storage)
5. መረጃን ጥቅም ላይ ማዋል (Data Usage)

[ምስል 2.3 የዳታ እሴት ሰንሰለት]`
  },

  // Page 28: Data Acquisition, Analysis, Curation & Storage (Book Page 27)
  {
    pdfPageNumber: 28,
    bookPageLabel: '27',
    chapterNumber: 2,
    sectionRef: '2.4.1',
    titleEn: 'Data Value Chain Stages: Acquisition, Analysis, Curation, Storage',
    titleAm: 'የዳታ እሴት ሰንሰለት ደረጃዎች፡ ማሰባሰብ፣ መተንተን፣ ማረም፣ ማከማቸት',
    subtopicEn: 'Low-latency Ingestion, Data Curation Roles, and Limitations of ACID in Big Data',
    subtopicAm: 'ፈጣን ዳታ መሰብሰብ፣ የዳታ አራሚዎች ሚና እና የACID ዳታቤዝ ውስንነቶች',
    pageType: 'content',
    contentEn: `2.4.1. Data Acquisition
It is the process of gathering, filtering, and cleaning data before it is put in a data warehouse or any other storage solution on which data analysis can be carried out. Data acquisition is one of the major big data challenges in terms of infrastructure requirements. The infrastructure required to support the acquisition of big data must deliver low, predictable latency in both capturing data and in executing queries; be able to handle very high transaction volumes, often in a distributed environment; and support flexible and dynamic data structures.

2.4.2. Data Analysis
It is concerned with making the raw data acquired amenable to use in decision-making as well as domain-specific usage. Data analysis involves exploring, transforming, and modeling data with the goal of highlighting relevant data, synthesizing and extracting useful hidden information with high potential from a business point of view. Related areas include data mining, business intelligence, and machine learning.

2.4.3. Data Curation
It is the active management of data over its life cycle to ensure it meets the necessary data quality requirements for its effective usage. Data curation processes can be categorized into different activities such as content creation, selection, classification, transformation, validation, and preservation. Data curation is performed by expert curators that are responsible for improving the accessibility and quality of data. Data curators (also known as scientific curators or data annotators) hold the responsibility of ensuring that data are trustworthy, discoverable, accessible, reusable and fit their purpose. A key trend for the duration of big data utilizes community and crowdsourcing approaches.

2.4.4. Data Storage
It is the persistence and management of data in a scalable way that satisfies the needs of applications that require fast access to the data. Relational Database Management Systems (RDBMS) have been the main, and almost unique, solution to the storage paradigm for nearly 40 years. However, the ACID (Atomicity, Consistency, Isolation, and Durability) properties that guarantee database transactions lack flexibility with regard to schema changes and the performance and fault tolerance when data volumes and complexity grow, making them unsuitable for big data scenarios. NoSQL technologies have been designed with the scalability goal in mind.`,
    contentAm: `2.4.1. መረጃ ማሰባሰብ (Data Acquisition)
መረጃን ከመጋዘን ወይም ከማከማቻ በፊት የመሰብሰብ፣ የማጣራትና የማጽዳት ሂደት ነው። ከፍተኛ መጠን ያላቸውን ዝውውሮች በዝቅተኛ መዘግየት (latency) ማስተናገድ የሚችል መዋቅር ይጠይቃል።

2.4.2. መረጃ መተንተን (Data Analysis)
ጥሬውን ዳታ ለውሳኔ ሰጪነት ምቹ ማድረግ ነው። መረጃውን መመርመር፣ መለወጥ እና ሞዴል መስራትን ያጠቃልላል። ማሽን ለርኒንግ፣ ዳታ ማይኒንግና ቢዝነስ ኢንተለጀንስ እዚህ ስር ይካተታሉ።

2.4.3. መረጃን ማረምና ማስተካከል (Data Curation)
መረጃው የጥራት ደረጃውን የጠበቀ እንዲሆን በህይወት ዘመኑ ሁሉ ማስተዳደር ነው። ይዘትን መምረጥ፣ መመደብ፣ ማረጋገጥ እና መጠበቅን ያካትታል። የዳታ አራሚዎች (Data Curators) መረጃው አስተማማኝና ጥቅም ላይ ሊውል የሚችል መሆኑን ያረጋግጣሉ።

2.4.4. መረጃ ማከማቸት (Data Storage)
መረጃን ለረጅም ጊዜ በስፋትና በፍጥነት በሚገኝበት መልኩ ማስቀመጥ ነው። ላለፉት 40 ዓመታት የቆዩት RDBMS (Relational Databases) በACID ህግጋት የተገደቡ በመሆናቸው ለቢግ ዳታ ምቹ አይደሉም። ስለዚህ NoSQL ዳታቤዞች ተፈጥረዋል።`
  },

  // Page 29: Data Usage & Basic Concepts of Big Data (Book Page 28)
  {
    pdfPageNumber: 29,
    bookPageLabel: '28',
    chapterNumber: 2,
    sectionRef: '2.5',
    titleEn: 'Data Usage & Basic Concepts of Big Data',
    titleAm: 'የመረጃ አጠቃቀም እና የቢግ ዳታ መሰረታዊ ፅንሰ-ሀሳቦች',
    subtopicEn: 'Business Decision-Making & Definition of Big Data: Datasets Exceeding Traditional Tooling',
    subtopicAm: 'የቢዝነስ ውሳኔ ሰጪነት እና የቢግ ዳታ ትርጓሜ፡ ከተለመደው አቅም በላይ የሆኑ ግዙፍ መረጃዎች',
    pageType: 'content',
    contentEn: `2.4.5. Data Usage
It covers the data-driven business activities that need access to data, its analysis, and the tools needed to integrate the data analysis within the business activity. Data usage in business decision-making can enhance competitiveness through the reduction of costs, increased added value, or any other parameter that can be measured against existing performance criteria.

Activity 2.5:
➢ Which information flow step in the data value chain do you think is labor-intensive? Why?
➢ What are the different data types and their value chain?

2.5. Basic concepts of big data
Big data is a blanket term for the non-traditional strategies and technologies needed to gather, organize, process, and gather insights from large datasets. While the problem of working with data that exceeds the computing power or storage of a single computer is not new, the pervasiveness, scale, and value of this type of computing have greatly expanded in recent years.

In this section, we will talk about big data on a fundamental level and define common concepts you might come across. We will also take a high-level look at some of the processes and technologies currently being used in this space.

2.5.1. What Is Big Data?
Big data is the term for a collection of data sets so large and complex that it becomes difficult to process using on-hand database management tools or traditional data processing applications.
In this context, a “large dataset” means a dataset too large to reasonably process or store with traditional tooling or on a single computer. This means that the common scale of big datasets is constantly shifting and may vary significantly from organization to organization. Big data is characterized by 3V and more: Volume, Velocity, Variety, and Veracity.`,
    contentAm: `2.4.5. መረጃን ጥቅም ላይ ማዋል (Data Usage)
የትንተና ውጤቱን በቀጥታ በንግድና በአስተዳደር ውሳኔዎች ላይ ማዋል ነው። ወጪን በመቀነስ እና ተጨማሪ እሴት በመፍጠር የተቋማትን ተወዳዳሪነት ያሳድጋል።

2.5. የቢግ ዳታ መሰረታዊ ፅንሰ-ሀሳቦች
ቢግ ዳታ (Big Data) ከተለመዱት ስልቶችና ቴክኖሎጂዎች ውጭ ያሉ ግዙፍ መረጃዎችን ለመሰብሰብ፣ ለማደራጀትና ለመተንተን የሚያስፈልጉ ስልቶችና ቴክኖሎጂዎች አጠቃላይ ስያሜ ነው።

2.5.1. ቢግ ዳታ ምንድን ነው?
ቢግ ዳታ ማለት በተለመዱ የዳታቤዝ ሶፍትዌሮች ወይም በአንድ ኮምፒውተር ለማቀነባበር እጅግ በጣም ትልቅና ውስብስብ የሆነ የዳታ ስብስብ ነው። የቢግ ዳታ መጠን እንደ ተቋማቱ አቅም ይለያያል። ቢግ ዳታ በዋናነት በ3ቱ Vዎች እና ከዚያ በላይ ይገለጻል፡ Volume (መጠን)፣ Velocity (ፍጥነት)፣ Variety (አይነት) እና Veracity (ትክክለኛነት)።`
  },

  // Page 30: Characteristics of Big Data & Clustered Computing (Book Page 29)
  {
    pdfPageNumber: 30,
    bookPageLabel: '29',
    chapterNumber: 2,
    sectionRef: '2.5.2',
    titleEn: 'Characteristics of Big Data (4Vs) & Clustered Computing',
    titleAm: 'የቢግ ዳታ መገለጫዎች (4ቱ Vዎች) እና የክላስተር ኮምፒውቲንግ',
    subtopicEn: 'Volume, Velocity, Variety, Veracity; Resource Pooling & High Availability',
    subtopicAm: 'መጠን፣ ፍጥነት፣ አይነት፣ ትክክለኛነት፤ የሃብት ውህደት እና ቀጣይነት ያለው ዝግጁነት',
    pageType: 'content',
    figures: [
      { id: 'fig-2.4', caption: 'Figure 2.4 Characteristics of big data', description: 'Visual showing Volume (Data at Rest), Velocity (Data in Motion), Variety (Data in Many Forms), and Veracity (Data in Doubt).' }
    ],
    contentEn: `Characteristics of Big Data:
• Volume: large amounts of data, Terabytes to Exabytes / Zettabytes / Massive datasets (Data at Rest).
• Velocity: Data is live streaming or in motion, milliseconds to seconds to respond (Data in Motion).
• Variety: data comes in many different forms from diverse sources: structured, unstructured, text, multimedia (Data in Many Forms).
• Veracity: can we trust the data? How accurate is it? Uncertainty due to data inconsistency & incompleteness, ambiguities, latency (Data in Doubt).

[Figure 2.4 Characteristics of big data: Volume, Velocity, Variety, Veracity]

2.5.2. Clustered Computing and Hadoop Ecosystem
2.5.2.1. Clustered Computing
Because of the qualities of big data, individual computers are often inadequate for handling the data at most stages. To better address the high storage and computational needs of big data, computer clusters are a better fit.

Big data clustering software combines the resources of many smaller machines, seeking to provide a number of benefits:
• Resource Pooling: Combining the available storage space to hold data is a clear benefit, but CPU and memory pooling are also extremely important. Processing large datasets requires large amounts of all three of these resources.
• High Availability: Clusters can provide varying levels of fault tolerance and availability guarantees to prevent hardware or software failures from affecting access to data and processing. This becomes increasingly important as we continue to emphasize the importance of real-time analytics.`,
    contentAm: `የቢግ ዳታ 4ቱ ዋና ዋና መገለጫዎች (4 Vs)፡
• መጠን (Volume)፡ እጅግ ግዙፍ የዳታ መጠን (ቴራባይት፣ ፔታባይት፣ ዜታባይት)።
• ፍጥነት (Velocity)፡ መረጃው በቀጥታ ስርጭት ወይም በእንቅስቃሴ ላይ በከፍተኛ ፍጥነት መመንጨቱና መፍሰሱ።
• አይነት (Variety)፡ መረጃው ከተለያዩ ምንጮች በተለያዩ ቅርጾች መምጣቱ (ጽሑፍ፣ ምስል፣ ቪዲዮ፣ ሰንጠረዥ)።
• ትክክለኛነትና አስተማማኝነት (Veracity)፡ በመረጃው ላይ መተማመን እንችላለን? የዳታው ጥራትና እውነተኝነት።

[ምስል 2.4 የቢግ ዳታ መገለጫዎች]

2.5.2. የክላስተር ኮምፒውቲንግ እና የHadoop ስነ-ምህዳር
አንድ ነጠላ ኮምፒውተር የቢግ ዳታን ፍላጎት ማሟላት ስለማይችል በርካታ ትናንሽ ኮምፒውተሮችን በማስተሳሰር የኮምፒውተር ክላስተር (Cluster) ይሰራል።
የክላስተር ኮምፒውቲንግ ጥቅሞች፡
• የሃብት ውህደት (Resource Pooling)፡ ማከማቻን፣ ሲፒዩን እና ራምን በማዋሃድ በአንድነት መስራት።
• ቀጣይነት ያለው ዝግጁነት (High Availability)፡ አንዱ ኮምፒውተር ቢበላሽ ሌላው ስራውን ያለምንም መቋረጥ እንዲቀጥል ማስቻል።`
  },

  // Page 31: Scalability, YARN & Hadoop Introduction (Book Page 30)
  {
    pdfPageNumber: 31,
    bookPageLabel: '30',
    chapterNumber: 2,
    sectionRef: '2.5.2.2',
    titleEn: 'Cluster Scalability, YARN & Introduction to Apache Hadoop',
    titleAm: 'የክላስተር ማስፋፊያ፣ YARN እና የአፓቼ ሃዱፕ (Hadoop) መግቢያ',
    subtopicEn: 'Horizontal Scalability, YARN Resource Negotiator, and Four Key Characteristics of Hadoop',
    subtopicAm: 'አግድም ማስፋፊያ (Horizontal Scaling)፣ YARN እና የHadoop አራት ቁልፍ መገለጫዎች',
    pageType: 'content',
    contentEn: `• Easy Scalability: Clusters make it easy to scale horizontally by adding additional machines to the group. This means the system can react to changes in resource requirements without expanding the physical resources on a machine.

Using clusters requires a solution for managing cluster membership, coordinating resource sharing, and scheduling actual work on individual nodes. Cluster membership and resource allocation can be handled by software like Hadoop’s YARN (which stands for Yet Another Resource Negotiator).

The assembled computing cluster often acts as a foundation that other software interfaces with to process the data. The machines involved in the computing cluster are also typically involved with the management of a distributed storage system, which we will talk about when we discuss data persistence.

Activity 2.6:
➢ List and discuss the characteristics of big data.
➢ Describe the big data life cycle. Which step you think most useful and why?
➢ List and describe each technology or tool used in the big data life cycle.
➢ Discuss the three methods of computing over a large dataset.

2.5.2.2. Hadoop and its Ecosystem
Hadoop is an open-source framework intended to make interaction with big data easier. It is a framework that allows for the distributed processing of large datasets across clusters of computers using simple programming models. It is inspired by a technical document published by Google.
The four key characteristics of Hadoop are:
• Economical: Its systems are highly economical as ordinary computers can be used for data processing.
• Reliable: It is reliable as it stores copies of the data on different machines and is resistant to hardware failure.
• Scalable: It is easily scalable both, horizontally and vertically. A few extra nodes help in scaling up the framework.`,
    contentAm: `• ቀላል ማስፋፊያ (Easy Scalability)፡ ተጨማሪ ኮምፒውተሮችን ወደ ኔትወርኩ በማከል ስርዓቱን አግድም ማስፋፋት (Horizontal Scaling) ይቻላል።

የክላስተር ሃብት አስተዳዳሪ (YARN)፡
በኮምፒውተሮቹ መካከል የሃብት ክፍፍልን የሚያስተባብር እና ስራዎችን የሚያከፋፍል ሲሆን ሙሉ ስሙ Yet Another Resource Negotiator ይባላል።

2.5.2.2. ሃዱፕ (Hadoop) እና ስነ-ምህዳሩ
ሃዱፕ ክፍት-የምንጭ (open-source) የሶፍትዌር ማዕቀፍ ሲሆን በኮምፒውተር ክላስተሮች ላይ ግዙፍ መረጃዎችን በተከፋፈለ መንገድ (distributed processing) ለማስላት ያስችላል። በGoogle ቴክኒካዊ ሰነድ ተነሳሽነት የተፈጠረ ነው።
የሃዱፕ 4 ዋና ዋና ባህሪያት፡
• ቆጣቢ (Economical)፡ ተራና ርካሽ የሆኑ ኮምፒውተሮችን (commodity hardware) መጠቀም ያስችላል።
• አስተማማኝ (Reliable)፡ የዳታ ቅጂዎችን በተለያዩ ኮምፒውተሮች ላይ ስለሚያስቀምጥ አንዱ ቢበላሽ ዳታ አይጠፋም።
• በቀላሉ የሚሰፋ (Scalable)፡ ተጨማሪ ኮምፒውተሮችን በማስገባት በቀላሉ ማሳደግ ይቻላል።`
  },

  // Page 32: Hadoop Ecosystem Architecture (Book Page 31)
  {
    pdfPageNumber: 32,
    bookPageLabel: '31',
    chapterNumber: 2,
    sectionRef: '2.5.2.2',
    titleEn: 'Hadoop Ecosystem Components: Storage, Processing, Access & Management',
    titleAm: 'የHadoop ስነ-ምህዳር ክፍሎች፡ ማከማቻ፣ ማቀነባበሪያ፣ ተደራሽነት እና አስተዳደር',
    subtopicEn: 'HDFS, YARN, MapReduce, Spark, Pig, Hive, HBase, Mahout, Solr/Lucene, Zookeeper, Oozie',
    subtopicAm: 'HDFS፣ YARN፣ MapReduce፣ Spark፣ Pig፣ Hive፣ HBase፣ Mahout እና Zookeeper',
    pageType: 'content',
    figures: [
      { id: 'fig-2.5', caption: 'Figure 2.5 Hadoop Ecosystem', description: 'Four-layer architecture: Data Storage (HDFS, HBase), Data Processing (MapReduce, YARN), Data Access (Hive, Pig, Mahout, Avro, Sqoop), Data Management (Oozie, Chukwa, Flume, ZooKeeper).' }
    ],
    contentEn: `• Flexible: It is flexible and you can store as much structured and unstructured data as you need to and decide to use them later.

Hadoop has an ecosystem that has evolved from its four core components: data management, access, processing, and storage. It is continuously growing to meet the needs of Big Data. It comprises the following components and many others:
• HDFS: Hadoop Distributed File System
• YARN: Yet Another Resource Negotiator
• MapReduce: Programming based Data Processing
• Spark: In-Memory data processing
• PIG, HIVE: Query-based processing of data services
• HBase: NoSQL Database
• Mahout, Spark MLlib: Machine Learning algorithm libraries
• Solr, Lucene: Searching and Indexing
• Zookeeper: Managing cluster
• Oozie: Job Scheduling

[Figure 2.5 Hadoop Ecosystem:
Data Management: Oozie, Chukwa, Flume, ZooKeeper
Data Access: Hive (SQL), Pig (Dataflow), Mahout (Machine Learning), Avro (RPC), Sqoop (RDBMS Connector)
Data Processing: MapReduce, YARN
Data Storage: HDFS (File System), HBase (Column DB storage)]`,
    contentAm: `• ተለዋዋጭ (Flexible)፡ ማንኛውንም የተዋቀረም ሆነ ያልተዋቀረ መረጃ አከማችቶ በኋላ ላይ ለመጠቀም ያስችላል።

የHadoop ስነ-ምህዳር አራት ዋና እርከኖች አሉት፡
1. ዳታ ማከማቻ (Data Storage)፡
  - HDFS፡ Hadoop Distributed File System (የተከፋፈለ የፋይል ማከማቻ)
  - HBase፡ በአምድ የተደራጀ የNoSQL ዳታቤዝ
2. ዳታ ማቀነባበር (Data Processing)፡
  - MapReduce፡ በትይዩ ትዕዛዛት ዳታን የማስላት ዘዴ
  - YARN፡ የክላስተር ሃብት አስተዳዳሪ
  - Spark፡ በሚሞሪ ላይ በፍጥነት የሚያሰላ ሞተር (In-memory engine)
3. ዳታ ተደራሽነት (Data Access)፡
  - Hive፡ በSQL የሚሰራ የዳታ መጠየቂያ
  - Pig፡ የዳታ ፍሰት ማስተዳደሪያ
  - Sqoop፡ ከRDBMS ወደ HDFS ማስተላለፊያ
4. ዳታ አስተዳደር (Data Management)፡
  - ZooKeeper፡ የክላስተር ማስተባበሪያ
  - Oozie፡ የስራ መርሐ-ግብር አውጪ (Job Scheduler)

[ምስል 2.5 የHadoop ስነ-ምህዳር]`
  },

  // Page 33: Big Data Life Cycle with Hadoop (Book Page 32)
  {
    pdfPageNumber: 33,
    bookPageLabel: '32',
    chapterNumber: 2,
    sectionRef: '2.5.3',
    titleEn: 'Big Data Life Cycle with Hadoop: Ingest, Processing, Analyze, Access',
    titleAm: 'የቢግ ዳታ የህይወት ዑደት በHadoop፡ ማስገባት፣ ማቀነባበር፣ መተንተን እና ተደራሽ ማድረግ',
    subtopicEn: 'Sqoop & Flume Ingest, HDFS & HBase Storage, Pig & Hive Analysis, Hue Visualization',
    subtopicAm: 'በSqoop እና Flume ማስገባት፣ በHDFS ማከማቸት፣ በPig/Hive መተንተን እና በHue ማሳየት',
    pageType: 'content',
    contentEn: `Activity 2.7:
➢ Students in a group shall discuss the purpose of each Hadoop Ecosystem components?

2.5.3. Big Data Life Cycle with Hadoop

2.5.3.1. Ingesting data into the system
The first stage of Big Data processing is Ingest. The data is ingested or transferred to Hadoop from various sources such as relational databases, systems, or local files. Sqoop transfers data from RDBMS to HDFS, whereas Flume transfers event data.

2.5.3.2. Processing the data in storage
The second stage is Processing. In this stage, the data is stored and processed. The data is stored in the distributed file system, HDFS, and the NoSQL distributed data, HBase. Spark and MapReduce perform data processing.

2.5.3.3. Computing and analyzing data
The third stage is to Analyze. Here, the data is analyzed by processing frameworks such as Pig, Hive, and Impala. Pig converts the data using a map and reduce and then analyzes it. Hive is also based on the map and reduce programming and is most suitable for structured data.

2.5.3.4. Visualizing the results
The fourth stage is Access, which is performed by tools such as Hue and Cloudera Search. In this stage, the analyzed data can be accessed by users.`,
    contentAm: `2.5.3. የቢግ ዳታ የህይወት ዑደት በHadoop

1. ዳታ ማስገባት (Ingest)፡
የመጀመሪያው ደረጃ መረጃውን ከተለያዩ ምንጮች ወደ ሃዱፕ ማስተላለፍ ነው። Sqoop ከተለመዱ ዳታቤዞች (RDBMS) ወደ HDFS ያስተላልፋል፤ Flume ደግሞ የቀጥታ ሁነቶችን (event data) ያስገባል።

2. በማከማቻ ውስጥ ማቀነባበር (Processing in Storage)፡
መረጃው በHDFS እና በHBase ውስጥ ይቀመጣል፤ በSpark እና በMapReduce አማካኝነት ይቀነባበራል።

3. ማስላት እና መተንተን (Computing and Analyzing)፡
መረጃው በPig፣ በHive እና በImpala ይተነተናል። Hive ለተዋቀረ መረጃ በSQL መልክ ለመተንተን ተመራጭ ነው።

4. ውጤቱን ማሳየትና ተደራሽ ማድረግ (Access and Visualizing)፡
ተጠቃሚዎች የተተነተነውን መረጃ እንደ Hue እና Cloudera Search ባሉ መሳሪያዎች አማካኝነት በግራፍና በሪፖርት መልክ ያገኙታል።`
  },

  // Page 34: Blank / Transition (Book Page 33)
  {
    pdfPageNumber: 34,
    bookPageLabel: '33',
    chapterNumber: 2,
    sectionRef: '2.5.3-Summary',
    titleEn: 'Data Science & Big Data Engineering Summary Notes',
    titleAm: 'የዳታ ሳይንስ እና ቢግ ዳታ ምህንድስና ማጠቃለያ ማስታወሻ',
    subtopicEn: 'End-to-End Pipeline Summary: From Raw Data Ingestion to Business Insights',
    subtopicAm: 'ከጥሬ መረጃ አሰባሰብ እስከ ንግድ ውሳኔዎች ያለው አጠቃላይ ሰንሰለት',
    pageType: 'content',
    contentEn: `Summary Notes for Chapter 2: Data Science

Data Science pipeline integrates:
1. Data Ingestion: Leveraging tools like Sqoop for structured relational tables and Flume for streaming events and log files.
2. Distributed Storage: HDFS partitioning blocks across nodes with replication factors to guarantee high fault tolerance.
3. Distributed Analytics: In-memory processing via Apache Spark and query compilation via Apache Hive.
4. Business Value Delivery: Transforming high-dimensional data into operational intelligence, dashboards, and automated machine learning inferences.`,
    contentAm: `የምዕራፍ ሁለት ማጠቃለያ ማስታወሻ፡

የዳታ ሳይንስ ሰንሰለት ዋና ዋና ክፍሎች፡
1. መረጃ ማስገባት፡ Sqoopን ለሰንጠረዥ ዳታ እና Flumeን ለቀጥታ ሁነቶች መጠቀም።
2. የተከፋፈለ ማከማቻ፡ HDFS መረጃን በብሎኮች ከፋፍሎ በበርካታ ማሽኖች ላይ በማባዛት ደህንነቱን መጠበቁ።
3. የተከፋፈለ ትንተና፡ በSpark እና በHive አማካኝነት ስሌቶችን ማከናወን።
4. የንግድ እሴት መፍጠር፡ የተተነተነውን መረጃ ወደ አስተዳደራዊ ውሳኔና የማሽን ለርኒንግ ሞዴል መቀየር።`
  },

  // Page 35: Chapter Two Review Questions (Book Page 34)
  {
    pdfPageNumber: 35,
    bookPageLabel: '34',
    chapterNumber: 2,
    sectionRef: 'Review',
    titleEn: 'Chapter Two Review Questions',
    titleAm: 'የምዕራፍ ሁለት ክለሳ ጥያቄዎች',
    subtopicEn: '6 In-Depth Conceptual Questions on Data Science, Big Data, and Hadoop',
    subtopicAm: 'ስለ ዳታ ሳይንስ፣ ቢግ ዳታ እና ሃዱፕ የቀረቡ 6 ጥያቄዎች',
    pageType: 'review',
    reviewQuestions: [
      {
        title: 'Chapter Two Review Questions',
        questions: [
          '1. Define data science; what are the roles of a data scientist?',
          '2. Discuss data and its types from computer programming and data analytics perspectives?',
          '3. Discuss a series of steps needed to generate value and useful insights from data?',
          '4. What is the principal goal of data science?',
          '5. List out and discuss the characteristics of Big Data?',
          '6. How do we ingest streaming data into Hadoop Cluster?'
        ]
      }
    ],
    contentEn: `Chapter Two Review Questions

1. Define data science; what are the roles of a data scientist?
2. Discuss data and its types from computer programming and data analytics perspectives?
3. Discuss a series of steps needed to generate value and useful insights from data?
4. What is the principal goal of data science?
5. List out and discuss the characteristics of Big Data?
6. How we ingest streaming data into Hadoop Cluster?`,
    contentAm: `የምዕራፍ ሁለት ክለሳ ጥያቄዎች

1. ዳታ ሳይንስን ይተርጉሙ፤ የዳታ ሳይንቲስት ሚናዎችስ ምንድን ናቸው?
2. ዳታን እና አይነቶቹን ከኮምፒውተር ፕሮግራሚንግ እና ከመረጃ ትንተና አንጻር አብራሩ?
3. ከመረጃ ውስጥ እሴትና ጠቃሚ ግንዛቤዎችን ለማውጣት የሚያስፈልጉ ተከታታይ እርምጃዎችን አብራሩ?
4. የዳታ ሳይንስ ዋና ግብ ምንድን ነው?
5. የቢግ ዳታ መገለጫዎችን (4 Vs) ዘርዝራችሁ አብራሩ?
6. በቀጥታ የሚፈስን የመረጃ ፍሰት (streaming data) ወደ ሃዱፕ ክላስተር እንዴት እናስገባለን?`
  }
];
