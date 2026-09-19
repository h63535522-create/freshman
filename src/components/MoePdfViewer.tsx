import React, { useState, useMemo, useEffect } from 'react';
import {
  officialPdfPages as geographyPdfPages,
  TOTAL_PDF_PAGES as TOTAL_GEOGRAPHY_PAGES,
  OfficialPdfPage
} from '../data/geographyPdf';
import {
  historyOfficialPdfPages,
  TOTAL_HISTORY_PDF_PAGES
} from '../data/historyPdf';
import {
  entrepreneurshipOfficialPdfPages,
  TOTAL_ENTREPRENEURSHIP_PDF_PAGES
} from '../data/entrepreneurshipPdf';
import {
  psychologyOfficialPdfPages,
  TOTAL_PSYCHOLOGY_PDF_PAGES
} from '../data/psychologyPdf';
import {
  physicsOfficialPdfPages,
  TOTAL_PHYSICS_PDF_PAGES
} from '../data/physicsPdf';
import {
  anthropologyOfficialPdfPages,
  TOTAL_ANTHROPOLOGY_PDF_PAGES
} from '../data/anthropologyPdf';
import {
  logicOfficialPdfPages,
  TOTAL_LOGIC_PDF_PAGES
} from '../data/logicPdf';
import {
  english1OfficialPdfPages,
  TOTAL_ENGLISH1_PDF_PAGES
} from '../data/english1Pdf';
import {
  english2OfficialPdfPages,
  TOTAL_ENGLISH2_PDF_PAGES
} from '../data/english2Pdf';
import {
  inclusivenessOfficialPdfPages,
  TOTAL_INCLUSIVENESS_PDF_PAGES
} from '../data/inclusivenessPdf';
import {
  emergingTechOfficialPdfPages,
  TOTAL_EMERGING_TECH_PDF_PAGES
} from '../data/emergingTechPdf';
import {
  globalAffairsOfficialPdfPages,
  TOTAL_GLOBAL_AFFAIRS_PDF_PAGES
} from '../data/globalAffairsPdf';
import {
  moralCitizenshipOfficialPdfPages,
  TOTAL_MORAL_CITIZENSHIP_PDF_PAGES
} from '../data/moralCitizenshipPdf';
import {
  economicsOfficialPdfPages,
  TOTAL_ECONOMICS_PDF_PAGES
} from '../data/economicsPdf';
import {
  physicalFitnessOfficialPdfPages,
  TOTAL_PHYSICAL_FITNESS_PDF_PAGES
} from '../data/physicalFitnessPdf';
import {
  biologyOfficialPdfPages,
  TOTAL_BIOLOGY_PDF_PAGES
} from '../data/biologyPdf';
import {
  mathOfficialPdfPages,
  appliedMathOfficialPdfPages,
  TOTAL_MATH_PDF_PAGES,
  TOTAL_APPLIED_MATH_PDF_PAGES
} from '../data/mathPdf';
import { ViewMode } from '../types';
import {
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Table as TableIcon,
  HelpCircle,
  FileText,
  Bookmark,
  BookmarkCheck,
  Filter,
  CheckCircle2,
  Eye,
  EyeOff,
  Layers,
  ArrowRight,
  Maximize2,
  Minimize2,
  ListOrdered,
  BookMarked,
  GraduationCap,
  Sparkles,
  Atom,
  Users,
  Compass,
  Heading,
  Check,
  Scale,
  Languages,
  HeartHandshake,
  Cpu,
  Globe,
  Shield,
  TrendingUp,
  Activity,
  Dna,
  Calculator
} from 'lucide-react';

export type PdfCourseKey =
  | 'english1'
  | 'english2'
  | 'history'
  | 'geography'
  | 'physics'
  | 'anthropology'
  | 'entrepreneurship'
  | 'psychology'
  | 'logic'
  | 'inclusiveness'
  | 'emergingTech'
  | 'globalAffairs'
  | 'moralCitizenship'
  | 'economics'
  | 'fitness'
  | 'biology'
  | 'math';

interface MoePdfViewerProps {
  viewMode?: ViewMode;
  fontSize?: 'sm' | 'md' | 'lg';
  onSpeakText?: (text: string) => void;
  isAudioActive?: boolean;
  initialChapterNumber?: number;
  onBackToReader?: () => void;
  courseId?: string;
  onSelectCourse?: (courseId: string) => void;
  isSafeReadingMode?: boolean;
  onToggleSafeReadingMode?: () => void;
}

export const MoePdfViewer: React.FC<MoePdfViewerProps> = ({
  viewMode = 'side-by-side',
  fontSize = 'md',
  onSpeakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(u);
    }
  },
  isAudioActive = false,
  initialChapterNumber,
  onBackToReader,
  courseId = 'hist102',
  onSelectCourse,
  isSafeReadingMode = false,
  onToggleSafeReadingMode
}) => {
  const [isHeaderCardOpen, setIsHeaderCardOpen] = useState<boolean>(false);
  // Determine active PDF course
  const [selectedPdfCourse, setSelectedPdfCourse] = useState<PdfCourseKey>(() => {
    if (courseId === 'flen1011' || courseId === 'english1') return 'english1';
    if (courseId === 'flen1012' || courseId === 'enla102' || courseId === 'english2') return 'english2';
    if (courseId === 'gees1011') return 'geography';
    if (courseId === 'phys1011') return 'physics';
    if (courseId === 'anth1012') return 'anthropology';
    if (courseId === 'mgmt1012') return 'entrepreneurship';
    if (courseId === 'psyc1011') return 'psychology';
    if (courseId === 'phil1011' || courseId === 'logic') return 'logic';
    if (courseId === 'snie1012' || courseId === 'inclusiveness') return 'inclusiveness';
    if (courseId === 'emte1012' || courseId === 'emergingTech' || courseId === 'emerging') return 'emergingTech';
    if (courseId === 'gltr1012' || courseId === 'glaf1012' || courseId === 'globalAffairs' || courseId === 'globalTrends') return 'globalAffairs';
    if (courseId === 'mcde1012' || courseId === 'mced1011' || courseId === 'moralCitizenship' || courseId === 'civics' || courseId === 'citizenship') return 'moralCitizenship';
    if (courseId === 'econ1011' || courseId === 'economics' || courseId === 'econ') return 'economics';
    if (courseId === 'spsc1011' || courseId === 'fitness' || courseId === 'physicalFitness' || courseId === 'sports') return 'fitness';
    if (courseId === 'biol1012' || courseId === 'biology' || courseId === 'biol') return 'biology';
    if (courseId === 'math1011' || courseId === 'math' || courseId === 'mathematics') return 'math';
    return 'english1';
  });

  // Sync with prop when external course changes
  useEffect(() => {
    let targetCourseKey: PdfCourseKey | null = null;
    if (courseId === 'flen1011' || courseId === 'english1') {
      targetCourseKey = 'english1';
    } else if (courseId === 'flen1012' || courseId === 'enla102' || courseId === 'english2') {
      targetCourseKey = 'english2';
    } else if (courseId === 'gees1011') {
      targetCourseKey = 'geography';
    } else if (courseId === 'phys1011') {
      targetCourseKey = 'physics';
    } else if (courseId === 'anth1012') {
      targetCourseKey = 'anthropology';
    } else if (courseId === 'mgmt1012') {
      targetCourseKey = 'entrepreneurship';
    } else if (courseId === 'psyc1011') {
      targetCourseKey = 'psychology';
    } else if (courseId === 'phil1011' || courseId === 'logic') {
      targetCourseKey = 'logic';
    } else if (courseId === 'snie1012' || courseId === 'inclusiveness') {
      targetCourseKey = 'inclusiveness';
    } else if (courseId === 'emte1012' || courseId === 'emergingTech' || courseId === 'emerging') {
      targetCourseKey = 'emergingTech';
    } else if (courseId === 'gltr1012' || courseId === 'glaf1012' || courseId === 'globalAffairs' || courseId === 'globalTrends') {
      targetCourseKey = 'globalAffairs';
    } else if (courseId === 'mcde1012' || courseId === 'mced1011' || courseId === 'moralCitizenship' || courseId === 'civics' || courseId === 'citizenship') {
      targetCourseKey = 'moralCitizenship';
    } else if (courseId === 'econ1011' || courseId === 'economics' || courseId === 'econ') {
      targetCourseKey = 'economics';
    } else if (courseId === 'spsc1011' || courseId === 'fitness' || courseId === 'physicalFitness' || courseId === 'sports') {
      targetCourseKey = 'fitness';
    } else if (courseId === 'biol1012' || courseId === 'biology' || courseId === 'biol') {
      targetCourseKey = 'biology';
    } else if (courseId === 'math1014' || courseId === 'math1011' || courseId === 'math' || courseId === 'mathematics' || courseId === 'appliedMath') {
      targetCourseKey = 'math';
    } else if (courseId === 'hist102' || courseId === 'hist1012') {
      targetCourseKey = 'history';
    }

    if (targetCourseKey && targetCourseKey !== selectedPdfCourse) {
      setSelectedPdfCourse(targetCourseKey);
      setCurrentPageNum(1);
      setInputPageNum('1');
      setSelectedChapterFilter('all');
      setSearchQuery('');
    }
  }, [courseId, selectedPdfCourse]);

  const isEnglish1 = selectedPdfCourse === 'english1';
  const isEnglish2 = selectedPdfCourse === 'english2';
  const isHistory = selectedPdfCourse === 'history';
  const isGeography = selectedPdfCourse === 'geography';
  const isPhysics = selectedPdfCourse === 'physics';
  const isAnthropology = selectedPdfCourse === 'anthropology';
  const isEntrepreneurship = selectedPdfCourse === 'entrepreneurship';
  const isPsychology = selectedPdfCourse === 'psychology';
  const isLogic = selectedPdfCourse === 'logic';
  const isInclusiveness = selectedPdfCourse === 'inclusiveness';
  const isEmergingTech = selectedPdfCourse === 'emergingTech';
  const isGlobalAffairs = selectedPdfCourse === 'globalAffairs';
  const isMoralCitizenship = selectedPdfCourse === 'moralCitizenship';
  const isEconomics = selectedPdfCourse === 'economics';
  const isFitness = selectedPdfCourse === 'fitness';
  const isBiology = selectedPdfCourse === 'biology';
  const isMath = selectedPdfCourse === 'math';

  const currentDataset = useMemo(() => {
    switch (selectedPdfCourse) {
      case 'english1':
        return english1OfficialPdfPages;
      case 'english2':
        return english2OfficialPdfPages;
      case 'history':
        return historyOfficialPdfPages;
      case 'geography':
        return geographyPdfPages;
      case 'physics':
        return physicsOfficialPdfPages;
      case 'anthropology':
        return anthropologyOfficialPdfPages;
      case 'entrepreneurship':
        return entrepreneurshipOfficialPdfPages;
      case 'psychology':
        return psychologyOfficialPdfPages;
      case 'logic':
        return logicOfficialPdfPages;
      case 'inclusiveness':
        return inclusivenessOfficialPdfPages;
      case 'emergingTech':
        return emergingTechOfficialPdfPages;
      case 'globalAffairs':
        return globalAffairsOfficialPdfPages;
      case 'moralCitizenship':
        return moralCitizenshipOfficialPdfPages;
      case 'economics':
        return economicsOfficialPdfPages;
      case 'fitness':
        return physicalFitnessOfficialPdfPages;
      case 'biology':
        return biologyOfficialPdfPages;
      case 'math':
        return courseId === 'math1011' ? mathOfficialPdfPages : appliedMathOfficialPdfPages;
      default:
        return english1OfficialPdfPages;
    }
  }, [selectedPdfCourse, courseId]);

  const totalPages = currentDataset.length;

  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [inputPageNum, setInputPageNum] = useState<string>('1');
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [viewStyle, setViewStyle] = useState<'single' | 'all'>('single');
  const [showSubtitlesIndex, setShowSubtitlesIndex] = useState<boolean>(true);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  // Toggle Full Screen mode
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      try {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      } catch {}
      setIsFullScreen(true);
    } else {
      try {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      } catch {}
      setIsFullScreen(false);
    }
  };

  // Sync with browser native fullscreen exit
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isFullScreen) {
        setIsFullScreen(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [isFullScreen]);

  // Bookmarks saved per course
  const bookmarkStorageKey = `moe_pdf_${selectedPdfCourse}_bookmarks`;

  const [bookmarkedPages, setBookmarkedPages] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(`moe_pdf_${selectedPdfCourse}_bookmarks`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(bookmarkStorageKey, JSON.stringify(bookmarkedPages));
    } catch (e) {}
  }, [bookmarkedPages, bookmarkStorageKey]);

  // When switching PDF course, reset to page 1
  const handleSwitchPdfCourse = (c: PdfCourseKey) => {
    setSelectedPdfCourse(c);
    setCurrentPageNum(1);
    setInputPageNum('1');
    setSelectedChapterFilter('all');
    setSearchQuery('');
    try {
      const saved = localStorage.getItem(`moe_pdf_${c}_bookmarks`);
      setBookmarkedPages(saved ? JSON.parse(saved) : []);
    } catch {
      setBookmarkedPages([]);
    }
    if (onSelectCourse) {
      const mappedId =
        c === 'english1'
          ? 'flen1011'
          : c === 'english2'
          ? 'flen1012'
          : c === 'history'
          ? 'hist1012'
          : c === 'geography'
          ? 'gees1011'
          : c === 'physics'
          ? 'phys1011'
          : c === 'anthropology'
          ? 'anth1012'
          : c === 'entrepreneurship'
          ? 'mgmt1012'
          : c === 'logic'
          ? 'phil1011'
          : c === 'inclusiveness'
          ? 'snie1012'
          : c === 'emergingTech'
          ? 'emte1012'
          : c === 'globalAffairs'
          ? 'gltr1012'
          : c === 'moralCitizenship'
          ? 'mcde1012'
          : c === 'economics'
          ? 'econ1011'
          : c === 'fitness'
          ? 'spsc1011'
          : c === 'biology'
          ? 'biol1012'
          : c === 'math'
          ? 'math1011'
          : 'psyc1011';
      onSelectCourse(mappedId);
    }
  };

  const toggleBookmark = (pg: number) => {
    setBookmarkedPages((prev) =>
      prev.includes(pg) ? prev.filter((p) => p !== pg) : [...prev, pg]
    );
  };

  // Synchronize input box
  useEffect(() => {
    setInputPageNum(currentPageNum.toString());
  }, [currentPageNum]);

  // If initialChapterNumber provided on mount
  useEffect(() => {
    if (initialChapterNumber && initialChapterNumber > 0) {
      const targetPage = currentDataset.find((p) => p.chapterNumber === initialChapterNumber);
      if (targetPage) {
        setCurrentPageNum(targetPage.pdfPageNumber);
        setSelectedChapterFilter(initialChapterNumber);
      }
    }
  }, [initialChapterNumber, selectedPdfCourse, currentDataset]);

  // Filtered pages
  const filteredPages = useMemo(() => {
    let list = currentDataset;
    if (selectedChapterFilter !== 'all') {
      if (selectedChapterFilter === 0) {
        list = list.filter((p) => !p.chapterNumber || p.chapterNumber === 0);
      } else {
        list = list.filter((p) => p.chapterNumber === selectedChapterFilter);
      }
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.titleEn.toLowerCase().includes(q) ||
          p.titleAm.toLowerCase().includes(q) ||
          p.contentEn.toLowerCase().includes(q) ||
          p.contentAm.toLowerCase().includes(q) ||
          (p.subtopicEn && p.subtopicEn.toLowerCase().includes(q)) ||
          (p.subtopicAm && p.subtopicAm.toLowerCase().includes(q)) ||
          (p.sectionRef && p.sectionRef.toLowerCase().includes(q))
      );
    }
    return list;
  }, [currentDataset, selectedChapterFilter, searchQuery]);

  const currentPage = useMemo(() => {
    return currentDataset.find((p) => p.pdfPageNumber === currentPageNum) || currentDataset[0];
  }, [currentDataset, currentPageNum]);

  // Inside chapter subtitles for the currently viewed chapter (for fast jump & overview)
  const currentChapterSubtitles = useMemo(() => {
    const targetChapter =
      selectedChapterFilter !== 'all'
        ? selectedChapterFilter
        : currentPage?.chapterNumber;

    if (!targetChapter || targetChapter === 0) return [];

    return currentDataset
      .filter((p) => p.chapterNumber === targetChapter && (p.subtopicEn || p.titleEn))
      .map((p) => ({
        pageNumber: p.pdfPageNumber,
        bookLabel: p.bookPageLabel,
        sectionRef: p.sectionRef,
        titleEn: p.titleEn,
        titleAm: p.titleAm,
        subtopicEn: p.subtopicEn,
        subtopicAm: p.subtopicAm
      }));
  }, [currentDataset, selectedChapterFilter, currentPage]);

  const handlePageJump = (pg: number) => {
    const clamped = Math.max(1, Math.min(totalPages, pg));
    setCurrentPageNum(clamped);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handlePageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(inputPageNum, 10);
    if (!isNaN(val)) {
      handlePageJump(val);
    }
  };

  // Keyboard navigation for page turning (Left/Right arrow keys) and Full Screen (F/Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentPageNum < totalPages) {
          handlePageJump(currentPageNum + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentPageNum > 1) {
          handlePageJump(currentPageNum - 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullScreen();
      } else if (e.key === 'Escape' && isFullScreen) {
        toggleFullScreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageNum, totalPages, isFullScreen]);

  const toggleAnswer = (pgNo: number) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [pgNo]: !prev[pgNo]
    }));
  };

  const getTextClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-xs sm:text-sm leading-relaxed';
      case 'lg':
        return 'text-base sm:text-lg leading-loose';
      case 'md':
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  const english1Filters = [
    { label: `All Pages (${TOTAL_ENGLISH1_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & Intro', value: 0 },
    { label: 'Unit 1: Study Skills', value: 1 },
    { label: 'Unit 2: Health & Fitness', value: 2 },
    { label: 'Unit 3: Cultural Values', value: 3 },
    { label: 'Unit 4: Wildlife Conservation', value: 4 },
    { label: 'Unit 5: Population & Economy', value: 5 }
  ];

  const english2Filters = [
    { label: `All Pages (${TOTAL_ENGLISH2_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & Intro', value: 0 },
    { label: 'Unit 1: Life Skills', value: 1 },
    { label: 'Unit 2: Science & Health', value: 2 },
    { label: 'Unit 3: River Murray Crisis', value: 3 },
    { label: 'Unit 4: Indigenous Knowledge', value: 4 },
    { label: 'Unit 5: Cultural Heritage', value: 5 }
  ];

  const historyFilters = [
    { label: `All Pages (${TOTAL_HISTORY_PDF_PAGES})`, value: 'all' },
    { label: 'Introduction', value: 0 },
    { label: 'Unit 1: Nature of History', value: 1 },
    { label: 'Unit 2: Peoples & Cultures', value: 2 },
    { label: 'Unit 3: Politics to 13th C', value: 3 },
    { label: 'Unit 4: 13th-16th C', value: 4 },
    { label: 'Unit 5: 16th-18th C', value: 5 },
    { label: 'Unit 6: 1800-1941', value: 6 },
    { label: 'Unit 7: 1941-1995', value: 7 }
  ];

  const geographyFilters = [
    { label: `All Pages (${TOTAL_GEOGRAPHY_PAGES})`, value: 'all' },
    { label: 'Cover & TOC', value: 0 },
    { label: 'Ch 1: Intro & Maps', value: 1 },
    { label: 'Ch 2: Geology', value: 2 },
    { label: 'Ch 3: Topography', value: 3 },
    { label: 'Ch 4: Drainage', value: 4 },
    { label: 'Ch 5: Climate', value: 5 },
    { label: 'Ch 6: Soils & Wildlife', value: 6 },
    { label: 'Ch 7: Population', value: 7 },
    { label: 'Ch 8: Economy', value: 8 }
  ];

  const physicsFilters = [
    { label: `All Pages (${TOTAL_PHYSICS_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & Intro', value: 0 },
    { label: 'Ch 1: Vectors', value: 1 },
    { label: 'Ch 2: Kinematics (1D & 2D)', value: 2 },
    { label: 'Ch 3: Dynamics & Laws', value: 3 },
    { label: 'Ch 4: Heat & Thermodynamics', value: 4 },
    { label: 'Ch 5: Oscillations & Waves', value: 5 },
    { label: 'Ch 6: Electrostatics & Circuits', value: 6 }
  ];

  const anthropologyFilters = [
    { label: `All Pages (${TOTAL_ANTHROPOLOGY_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & Preface', value: 0 },
    { label: 'Unit 1: Intro to Anthropology', value: 1 },
    { label: 'Unit 2: Evolution & Culture', value: 2 },
    { label: 'Unit 3: Culture & Society', value: 3 },
    { label: 'Unit 4: Marriage & Kinship', value: 4 },
    { label: 'Unit 5: Religion & Belief', value: 5 },
    { label: 'Unit 6: Ethnicity & Race', value: 6 },
    { label: 'Unit 7: Applied Anthropology', value: 7 }
  ];

  const entrepreneurshipFilters = [
    { label: `All Pages (${TOTAL_ENTREPRENEURSHIP_PDF_PAGES})`, value: 'all' },
    { label: 'Introduction', value: 0 },
    { label: 'Ch 1: Nature of Entrep.', value: 1 },
    { label: 'Ch 2: Business Ideas', value: 2 },
    { label: 'Ch 3: Business Formation', value: 3 },
    { label: 'Ch 4: Product/Service Dev', value: 4 },
    { label: 'Ch 5: Marketing', value: 5 },
    { label: 'Ch 6: Business Plan', value: 6 }
  ];

  const psychologyFilters = [
    { label: `All Pages (${TOTAL_PSYCHOLOGY_PDF_PAGES})`, value: 'all' },
    { label: 'Intro & Syllabus', value: 0 },
    { label: 'Ch 1: Essence of Psych.', value: 1 },
    { label: 'Ch 2: Sensation & Perception', value: 2 },
    { label: 'Ch 3: Learning Theories', value: 3 },
    { label: 'Ch 4: Memory & Forgetting', value: 4 },
    { label: 'Ch 5: Motivation & Emotion', value: 5 },
    { label: 'Ch 6: Personality', value: 6 },
    { label: 'Ch 7: Psychological Disorders', value: 7 },
    { label: 'Ch 8: Intro to Life Skills', value: 8 },
    { label: 'Ch 9: Intra & Interpersonal Skills', value: 9 },
    { label: 'Ch 10: Academic Skills', value: 10 },
    { label: 'Ch 11: Social Skills', value: 11 }
  ];

  const logicFilters = [
    { label: `All Pages (${TOTAL_LOGIC_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & TOC', value: 0 },
    { label: 'Ch 1: Introducing Philosophy', value: 1 },
    { label: 'Ch 2: Basic Concepts of Logic', value: 2 },
    { label: 'Ch 3: Logic and Language', value: 3 },
    { label: 'Ch 4: Categorical Propositions', value: 4 },
    { label: 'Ch 5: Categorical Syllogisms', value: 5 },
    { label: 'Ch 6: Critical Thinking', value: 6 }
  ];

  const inclusivenessFilters = [
    { label: `All Pages (${TOTAL_INCLUSIVENESS_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & Intro', value: 0 },
    { label: 'Ch 1: Understanding Disabilities', value: 1 },
    { label: 'Ch 2: Differentiated Needs & Identification', value: 2 },
    { label: 'Ch 3: Differentiated Interventions & UDL', value: 3 },
    { label: 'Ch 4: Promoting Inclusive Culture', value: 4 },
    { label: 'Ch 5: Peace, Democracy & Development', value: 5 },
    { label: 'Ch 6: Legal Frameworks & Rights', value: 6 },
    { label: 'Ch 7: Resource Management', value: 7 },
    { label: 'Ch 8: Collaborative Partnerships', value: 8 }
  ];

  const emergingTechFilters = [
    { label: `All Pages (${TOTAL_EMERGING_TECH_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & Intro', value: 0 },
    { label: 'Ch 1: Intro to Emerging Tech', value: 1 },
    { label: 'Ch 2: Data Science & Big Data', value: 2 },
    { label: 'Ch 3: Artificial Intelligence (AI)', value: 3 },
    { label: 'Ch 4: Internet of Things (IoT)', value: 4 },
    { label: 'Ch 5: Cybersecurity', value: 5 },
    { label: 'Ch 6: AR, VR & Robotics', value: 6 },
    { label: 'Ch 7: Nanotech & Future Trends', value: 7 }
  ];

  const globalAffairsFilters = [
    { label: `All Pages (${TOTAL_GLOBAL_AFFAIRS_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & TOC', value: 0 },
    { label: 'Ch 1: International Relations', value: 1 },
    { label: 'Ch 2: Foreign Policy & Diplomacy', value: 2 },
    { label: 'Ch 3: Political Economy (IPE)', value: 3 },
    { label: 'Ch 4: Globalization & Regionalism', value: 4 },
    { label: 'Ch 5: Contemporary Global Issues', value: 5 }
  ];

  const moralCitizenshipFilters = [
    { label: `All Pages (${TOTAL_MORAL_CITIZENSHIP_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & Intro', value: 0 },
    { label: 'Ch 1: Understanding Civics & Ethics', value: 1 },
    { label: 'Ch 2: Approaches to Ethics', value: 2 },
    { label: 'Ch 3: Ethical Decision Making', value: 3 },
    { label: 'Ch 4: State, Gov & Citizenship', value: 4 },
    { label: 'Ch 5: Constitution & Democracy', value: 5 },
    { label: 'Ch 6: Human Rights & Values', value: 6 }
  ];

  const economicsFilters = [
    { label: `All Pages (${TOTAL_ECONOMICS_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & TOC', value: 0 },
    { label: 'Ch 1: Nature of Economics', value: 1 },
    { label: 'Ch 2: Demand, Supply & Market', value: 2 },
    { label: 'Ch 3: Theory of Consumer Behavior', value: 3 },
    { label: 'Ch 4: Production and Cost', value: 4 },
    { label: 'Ch 5: Market Structures', value: 5 },
    { label: 'Ch 6: Macroeconomic Aggregates', value: 6 }
  ];

  const fitnessFilters = [
    { label: `All Pages (${TOTAL_PHYSICAL_FITNESS_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & Syllabus', value: 0 },
    { label: 'Unit 1: Physical Fitness Concepts', value: 1 },
    { label: 'Unit 2: Health-Related Fitness', value: 2 },
    { label: 'Unit 3: Skill-Related Fitness', value: 3 },
    { label: 'Unit 4: Physical Fitness & Nutrition', value: 4 },
    { label: 'Unit 5: Fitness Assessment & Program', value: 5 }
  ];

  const biologyFilters = [
    { label: `All Pages (${TOTAL_BIOLOGY_PDF_PAGES})`, value: 'all' },
    { label: 'Cover & Intro', value: 0 },
    { label: 'Ch 1: Introduction to Biology', value: 1 },
    { label: 'Ch 2: Macromolecules', value: 2 },
    { label: 'Ch 3: Cellular Biology', value: 3 },
    { label: 'Ch 4: Cellular Metabolism', value: 4 },
    { label: 'Ch 5: Genetics and Evolution', value: 5 },
    { label: 'Ch 6: Ecology & Conservation', value: 6 }
  ];

  const mathFilters = [
    { label: `All Pages (${totalPages})`, value: 'all' },
    { label: 'Ch 1: Vectors & Vector Spaces (pp. 1–22)', value: 1 },
    { label: 'Ch 2: Matrices & Linear Systems (pp. 23–37)', value: 2 },
    { label: 'Ch 3: Limit & Continuity (pp. 38–52)', value: 3 },
    { label: 'Ch 4: Derivatives & Applications (pp. 53–82)', value: 4 },
    { label: 'Ch 5: Integrations & Arc Length (pp. 83–97)', value: 5 },
    ...(totalPages > 97 ? [{ label: 'Ch 6: Sequences & Infinite Series (pp. 98–168)', value: 6 }] : [])
  ];

  const activeFilters = isEnglish1
    ? english1Filters
    : isEnglish2
    ? english2Filters
    : isHistory
    ? historyFilters
    : isGeography
    ? geographyFilters
    : isPhysics
    ? physicsFilters
    : isAnthropology
    ? anthropologyFilters
    : isEntrepreneurship
    ? entrepreneurshipFilters
    : isLogic
    ? logicFilters
    : isInclusiveness
    ? inclusivenessFilters
    : isEmergingTech
    ? emergingTechFilters
    : isGlobalAffairs
    ? globalAffairsFilters
    : isMoralCitizenship
    ? moralCitizenshipFilters
    : isEconomics
    ? economicsFilters
    : isFitness
    ? fitnessFilters
    : isBiology
    ? biologyFilters
    : isMath
    ? mathFilters
    : psychologyFilters;

  const currentChapterNumber = currentPage?.chapterNumber || 1;
  const isUnitCourse = isHistory || isAnthropology || isEnglish1 || isEnglish2 || isFitness;
  const chapterOrUnitLabel = isUnitCourse ? 'Unit' : 'Chapter';

  const currentCourseName = isEnglish1
    ? 'Communicative English Language Skills I (FLEn 1011)'
    : isEnglish2
    ? 'Communicative English Language Skills II (FLEn 1012 / EnLa 102)'
    : isHistory
    ? 'History of Ethiopia and the Horn (Hist 102)'
    : isGeography
    ? 'Geography of Ethiopia and the Horn (GeES 1011)'
    : isPhysics
    ? 'General Physics (Phys 1011)'
    : isAnthropology
    ? 'Social Anthropology (Anth 1012)'
    : isEntrepreneurship
    ? 'Entrepreneurship (Mgmt 1012)'
    : isLogic
    ? 'Logic and Critical Thinking (Phil 1011)'
    : isInclusiveness
    ? 'Inclusiveness (SNIE 1012)'
    : isEmergingTech
    ? 'Introduction to Emerging Technologies (EmTe 1012)'
    : isGlobalAffairs
    ? 'Global Affairs / Global Trends (GLAF 1012 / GlTr 1012)'
    : isMoralCitizenship
    ? 'Moral and Citizenship Education (MCED 1011 / MCDE 1012)'
    : isEconomics
    ? 'Introduction to Economics (Econ 1011)'
    : isFitness
    ? 'Physical Fitness (SpSc 1011)'
    : isBiology
    ? 'General Biology (Biol 1012)'
    : isMath
    ? (courseId === 'math1011' ? 'Mathematics (Math 1011)' : 'Applied Mathematics I (Math 1014B)')
    : 'General Psychology (Psyc 1011)';

  return (
    <div className={isFullScreen ? "fixed inset-0 z-50 bg-slate-100 dark:bg-slate-950 overflow-y-auto p-3 sm:p-6 md:p-8 space-y-6" : "space-y-6"}>
      {/* Immersive Full Screen Header */}
      {isFullScreen && (
        <div className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md p-2.5 sm:p-3 flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen PDF</span>
            </span>
            <div className="min-w-0 truncate">
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate block">
                {currentCourseName} • Page {currentPageNum}
              </span>
              <span className="text-[11px] text-slate-500 truncate block sm:hidden font-amharic">
                {currentPage?.titleAm || currentPage?.titleEn}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Previous Page Button in Full Screen Header */}
            <button
              onClick={() => handlePageJump(currentPageNum - 1)}
              disabled={currentPageNum <= 1}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1 transition-colors"
              title="Previous Page (← Arrow Key)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">Prev Page</span>
            </button>

            {/* Page Counter Indicator */}
            <div className="px-2.5 sm:px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono font-bold text-xs text-slate-800 dark:text-slate-200">
              {currentPageNum} / {totalPages}
            </div>

            {/* Next Page Button in Full Screen Header */}
            <button
              onClick={() => handlePageJump(currentPageNum + 1)}
              disabled={currentPageNum >= totalPages}
              className="px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-indigo-700 hover:bg-indigo-800 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-white flex items-center gap-1 transition-colors shadow-xs"
              title="Next Page (→ Arrow Key)"
            >
              <span className="hidden md:inline">Next Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Exit Full Screen Button */}
            <button
              onClick={toggleFullScreen}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
              title="Exit Full Screen (Esc)"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Exit (Esc)</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Side Navigation Buttons: Previous & Next Page in Single Page View */}
      {viewStyle === 'single' && (
        <>
          <button
            onClick={() => handlePageJump(currentPageNum - 1)}
            disabled={currentPageNum <= 1}
            className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 shadow-xl hover:bg-indigo-50 dark:hover:bg-slate-800 hover:scale-105 disabled:opacity-0 disabled:pointer-events-none text-slate-800 dark:text-slate-100 flex items-center gap-1.5 transition-all group"
            title="Previous Page (← Arrow Key)"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400 group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden xl:inline text-xs font-bold font-mono">Prev</span>
          </button>

          <button
            onClick={() => handlePageJump(currentPageNum + 1)}
            disabled={currentPageNum >= totalPages}
            className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 shadow-xl hover:bg-indigo-50 dark:hover:bg-slate-800 hover:scale-105 disabled:opacity-0 disabled:pointer-events-none text-slate-800 dark:text-slate-100 flex items-center gap-1.5 transition-all group"
            title="Next Page (→ Arrow Key)"
            aria-label="Next Page"
          >
            <span className="hidden xl:inline text-xs font-bold font-mono">Next</span>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </>
      )}
      {/* Course Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 sm:p-3 rounded-2xl shadow-2xs">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            Select MoE PDF Module:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Communicative English I */}
          <button
            onClick={() => handleSwitchPdfCourse('english1')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isEnglish1
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>English I (FLEn 1011)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_ENGLISH1_PDF_PAGES} pgs
            </span>
          </button>

          {/* Communicative English II */}
          <button
            onClick={() => handleSwitchPdfCourse('english2')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isEnglish2
                ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-teal-200" />
            <span>English II (FLEn 1012)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_ENGLISH2_PDF_PAGES} pgs
            </span>
          </button>

          {/* History */}
          <button
            onClick={() => handleSwitchPdfCourse('history')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isHistory
                ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>History (Hist. 102)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_HISTORY_PDF_PAGES} pgs
            </span>
          </button>

          {/* Geography */}
          <button
            onClick={() => handleSwitchPdfCourse('geography')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isGeography
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Geography (GeES 1011)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_GEOGRAPHY_PAGES} pgs
            </span>
          </button>

          {/* Physics */}
          <button
            onClick={() => handleSwitchPdfCourse('physics')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isPhysics
                ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Atom className="w-3.5 h-3.5 text-cyan-200" />
            <span>General Physics (Phys 1011)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_PHYSICS_PDF_PAGES} pgs
            </span>
          </button>

          {/* Anthropology */}
          <button
            onClick={() => handleSwitchPdfCourse('anthropology')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isAnthropology
                ? 'bg-gradient-to-r from-orange-600 to-amber-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-orange-200" />
            <span>Anthropology (Anth 1012)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_ANTHROPOLOGY_PDF_PAGES} pgs
            </span>
          </button>

          {/* Entrepreneurship */}
          <button
            onClick={() => handleSwitchPdfCourse('entrepreneurship')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isEntrepreneurship
                ? 'bg-gradient-to-r from-indigo-600 to-blue-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Entrepreneurship (Mgmt 1012)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_ENTREPRENEURSHIP_PDF_PAGES} pgs
            </span>
          </button>

          {/* Psychology */}
          <button
            onClick={() => handleSwitchPdfCourse('psychology')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isPsychology
                ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-purple-200" />
            <span>Psychology (Psyc 1011)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_PSYCHOLOGY_PDF_PAGES} pgs
            </span>
          </button>

          {/* Logic and Critical Thinking */}
          <button
            onClick={() => handleSwitchPdfCourse('logic')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isLogic
                ? 'bg-gradient-to-r from-rose-600 to-red-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-rose-200" />
            <span>Logic & Critical Thinking (Phil 1011)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_LOGIC_PDF_PAGES} pgs
            </span>
          </button>

          {/* Inclusiveness */}
          <button
            onClick={() => handleSwitchPdfCourse('inclusiveness')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isInclusiveness
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-200" />
            <span>Inclusiveness (SNIE 1012)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_INCLUSIVENESS_PDF_PAGES} pgs
            </span>
          </button>

          {/* Emerging Technologies */}
          <button
            onClick={() => handleSwitchPdfCourse('emergingTech')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isEmergingTech
                ? 'bg-gradient-to-r from-sky-600 to-indigo-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-sky-200" />
            <span>Emerging Tech (EmTe 1012)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_EMERGING_TECH_PDF_PAGES} pgs
            </span>
          </button>

          {/* Global Affairs */}
          <button
            onClick={() => handleSwitchPdfCourse('globalAffairs')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isGlobalAffairs
                ? 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-blue-300" />
            <span>Global Affairs (GLAF 1012)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_GLOBAL_AFFAIRS_PDF_PAGES} pgs
            </span>
          </button>

          {/* Moral and Citizenship Education */}
          <button
            onClick={() => handleSwitchPdfCourse('moralCitizenship')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isMoralCitizenship
                ? 'bg-gradient-to-r from-teal-700 to-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-teal-300" />
            <span>Moral & Citizenship (MCED 1011)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_MORAL_CITIZENSHIP_PDF_PAGES} pgs
            </span>
          </button>

          {/* Economics */}
          <button
            onClick={() => handleSwitchPdfCourse('economics')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isEconomics
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
            <span>Economics (Econ 1011)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_ECONOMICS_PDF_PAGES} pgs
            </span>
          </button>

          {/* Physical Fitness */}
          <button
            onClick={() => handleSwitchPdfCourse('fitness')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isFitness
                ? 'bg-gradient-to-r from-amber-600 to-orange-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-amber-300" />
            <span>Physical Fitness (SpSc 1011)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_PHYSICAL_FITNESS_PDF_PAGES} pgs
            </span>
          </button>

          {/* General Biology */}
          <button
            onClick={() => handleSwitchPdfCourse('biology')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isBiology
                ? 'bg-gradient-to-r from-emerald-600 to-green-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Dna className="w-3.5 h-3.5 text-emerald-300" />
            <span>Biology (Biol 1012)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_BIOLOGY_PDF_PAGES} pgs
            </span>
          </button>

          {/* Applied Mathematics (Math 1014B) */}
          <button
            onClick={() => {
              if (onSelectCourse) onSelectCourse('math1014');
              handleSwitchPdfCourse('math');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isMath && (courseId === 'math1014' || totalPages === 97)
                ? 'bg-gradient-to-r from-amber-600 to-orange-700 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-amber-300" />
            <span>Applied Math (Math 1014B)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {TOTAL_APPLIED_MATH_PDF_PAGES} pgs
            </span>
          </button>

          {/* Mathematics (Math 1011) */}
          <button
            onClick={() => {
              if (onSelectCourse) onSelectCourse('math1011');
              handleSwitchPdfCourse('math');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isMath && courseId === 'math1011'
                ? 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-blue-300" />
            <span>Math (Math 1011)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              168 pgs
            </span>
          </button>
        </div>
      </div>

      {/* MoE Official Header Card (Collapsible to preserve reading space) */}
      <div
        className={`bg-gradient-to-br ${
          isEnglish1
            ? 'from-blue-950 via-slate-900 to-indigo-950'
            : isEnglish2
            ? 'from-teal-950 via-slate-900 to-emerald-950'
            : isHistory
            ? 'from-amber-950 via-slate-900 to-red-950'
            : isGeography
            ? 'from-emerald-950 via-slate-900 to-indigo-950'
            : isPhysics
            ? 'from-cyan-950 via-slate-900 to-blue-950'
            : isAnthropology
            ? 'from-orange-950 via-slate-900 to-amber-950'
            : isEntrepreneurship
            ? 'from-indigo-950 via-slate-900 to-blue-950'
            : isLogic
            ? 'from-rose-950 via-slate-900 to-red-950'
            : isInclusiveness
            ? 'from-emerald-950 via-slate-900 to-teal-950'
            : isEmergingTech
            ? 'from-sky-950 via-slate-900 to-indigo-950'
            : isGlobalAffairs
            ? 'from-blue-950 via-indigo-950 to-slate-950'
            : isMoralCitizenship
            ? 'from-teal-950 via-slate-900 to-emerald-950'
            : isEconomics
            ? 'from-emerald-950 via-slate-900 to-teal-950'
            : isFitness
            ? 'from-amber-950 via-slate-900 to-orange-950'
            : isBiology
            ? 'from-emerald-950 via-slate-900 to-green-950'
            : isMath
            ? 'from-blue-950 via-slate-900 to-indigo-950'
            : 'from-purple-950 via-slate-900 to-indigo-950'
        } text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-lg relative overflow-hidden`}
      >
        <div
          className={`absolute top-0 right-0 w-80 h-80 ${
            isEnglish1
              ? 'bg-blue-500/10'
              : isEnglish2
              ? 'bg-teal-500/10'
              : isHistory
              ? 'bg-amber-500/10'
              : isGeography
              ? 'bg-emerald-500/10'
              : isPhysics
              ? 'bg-cyan-500/10'
              : isAnthropology
              ? 'bg-orange-500/10'
              : isEntrepreneurship
              ? 'bg-indigo-500/10'
              : isLogic
              ? 'bg-rose-500/10'
              : isInclusiveness
              ? 'bg-emerald-500/10'
              : isEmergingTech
              ? 'bg-sky-500/10'
              : isGlobalAffairs
              ? 'bg-blue-600/10'
              : isMoralCitizenship
              ? 'bg-teal-500/10'
              : isEconomics
              ? 'bg-emerald-500/10'
              : isFitness
              ? 'bg-orange-500/10'
              : isBiology
              ? 'bg-emerald-500/10'
              : isMath
              ? 'bg-blue-500/10'
              : 'bg-purple-500/10'
          } rounded-full blur-3xl pointer-events-none`}
        ></div>

        <div className="relative z-10 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
                Official MoE PDF Module
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full ${
                  isEnglish1
                    ? 'bg-blue-600/40 text-blue-300 border-blue-400/30'
                    : isEnglish2
                    ? 'bg-teal-600/40 text-teal-300 border-teal-400/30'
                    : isHistory
                    ? 'bg-amber-600/40 text-amber-300 border-amber-400/30'
                    : isGeography
                    ? 'bg-emerald-600/40 text-emerald-300 border-emerald-400/30'
                    : isPhysics
                    ? 'bg-cyan-600/40 text-cyan-300 border-cyan-400/30'
                    : isAnthropology
                    ? 'bg-orange-600/40 text-orange-300 border-orange-400/30'
                    : isEntrepreneurship
                    ? 'bg-indigo-600/40 text-indigo-300 border-indigo-400/30'
                    : isLogic
                    ? 'bg-rose-600/40 text-rose-300 border-rose-400/30'
                    : isInclusiveness
                    ? 'bg-emerald-600/40 text-emerald-300 border-emerald-400/30'
                    : isEmergingTech
                    ? 'bg-sky-600/40 text-sky-300 border-sky-400/30'
                    : isGlobalAffairs
                    ? 'bg-blue-600/40 text-blue-300 border-blue-400/30'
                    : isMoralCitizenship
                    ? 'bg-teal-600/40 text-teal-300 border-teal-400/30'
                    : isEconomics
                    ? 'bg-emerald-600/40 text-emerald-300 border-emerald-400/30'
                    : isFitness
                    ? 'bg-amber-600/40 text-amber-300 border-amber-400/30'
                    : isBiology
                    ? 'bg-emerald-600/40 text-emerald-300 border-emerald-400/30'
                    : isMath
                    ? 'bg-blue-600/40 text-blue-300 border-blue-400/30'
                    : 'bg-purple-600/40 text-purple-300 border-purple-400/30'
                } font-semibold text-xs border flex items-center gap-1`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>All {totalPages} Transcribed Pages</span>
              </span>
              <span className="text-xs text-slate-300">
                {isEnglish1
                  ? 'MoE FLEn 1011'
                  : isEnglish2
                  ? 'MoE FLEn 1012 / EnLa 102'
                  : isHistory
                  ? 'MoE Hist. 102'
                  : isGeography
                  ? 'MoE GeES 1011'
                  : isPhysics
                  ? 'MoE Phys 1011'
                  : isAnthropology
                  ? 'MoE Anth 1012'
                  : isEntrepreneurship
                  ? 'MoE Mgmt 1012'
                  : isLogic
                  ? 'MoE Phil 1011'
                  : isInclusiveness
                  ? 'MoE SNIE 1012'
                  : isEmergingTech
                  ? 'MoE EmTe 1012'
                  : isGlobalAffairs
                  ? 'MoE GLAF 1012 / GlTr 1012'
                  : isMoralCitizenship
                  ? 'MoE MCED 1011 / MCDE 1012'
                  : isEconomics
                  ? 'MoE Econ 1011'
                  : isFitness
                  ? 'MoE SpSc 1011'
                  : isBiology
                  ? 'MoE Biol 1012'
                  : isMath
                  ? (courseId === 'math1011' ? 'MoSHE Math 1011' : 'AASTU Math 1014B')
                  : 'MoE Psyc 1011'}
              </span>
            </div>

            <button
              onClick={() => setIsHeaderCardOpen(!isHeaderCardOpen)}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium flex items-center gap-1 transition-colors"
            >
              <span>{isHeaderCardOpen ? 'Hide Description ▴' : 'Show Description ▾'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-0.5">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-white">
                {isEnglish1
                  ? 'Communicative English Language Skills I'
                  : isEnglish2
                  ? 'Communicative English Language Skills II'
                  : isHistory
                  ? 'History of Ethiopia and the Horn'
                  : isGeography
                  ? 'Geography of Ethiopia and the Horn'
                  : isPhysics
                  ? 'General Physics for Natural Sciences'
                  : isAnthropology
                  ? 'Social Anthropology'
                  : isEntrepreneurship
                  ? 'Entrepreneurship'
                  : isLogic
                  ? 'Logic and Critical Thinking'
                  : isInclusiveness
                  ? 'Inclusiveness'
                  : isEmergingTech
                  ? 'Introduction to Emerging Technologies'
                  : isGlobalAffairs
                  ? 'Global Affairs (Global Trends)'
                  : isMoralCitizenship
                  ? 'Moral and Citizenship Education'
                  : isEconomics
                  ? 'Introduction to Economics'
                  : isFitness
                  ? 'Physical Fitness'
                  : isBiology
                  ? 'General Biology'
                  : isMath
                  ? (courseId === 'math1011' ? 'Mathematics (Math 1011)' : 'Applied Mathematics I (Math 1014B)')
                  : 'General Psychology & Life Skills'}
              </h1>
              {isHeaderCardOpen && (
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed animate-fadeIn">
                  {isEnglish1
                    ? 'Complete verbatim transcription of all 5 units (pages 1 to 100): Study Skills, Health & Fitness, Cultural Values, Wildlife Conservation, and Population & Economy with full reading texts, vocabulary, grammatical structures, comprehension tasks, and bilingual English & Amharic translations.'
                    : isEnglish2
                    ? 'Complete verbatim transcription of all 5 units & supplementary readings (pages 1 to 97): Life Skills, Future of Science (Dr. Aklilu Lemma & Endod at Adwa), River Murray Environmental Crisis, Indigenous Knowledge (Benjamin Mkapa & Afar fossils by Dr. Berhane Asfaw), Cultural Heritage, reading passages, grammatical mechanics, and bilingual English & Amharic translations.'
                    : isHistory
                    ? 'Complete verbatim transcription of all 7 units, official Nine Saints table, Gadaa age-grades, Butta wars, maps, review activities, and academic references with bilingual English & Amharic translations.'
                    : isGeography
                    ? 'Complete verbatim transcription of all 8 chapters, official tables, formulas, activities, and end-of-chapter review questions with bilingual English & Amharic translations.'
                    : isPhysics
                    ? 'Complete verbatim transcription of all 6 chapters (pages 1 to 207): Vectors, 1D & 2D Kinematics, Newton Laws, Dynamics, Work-Energy, Thermodynamics, Waves, and Electrostatics with formulas, inside subtitles, and review questions.'
                    : isAnthropology
                    ? 'Complete verbatim transcription of all 7 units: Subfields of anthropology, Human origins in the Horn, Culture, Kinship & Marriage, Indigenous Beliefs, Ethnicity, and Applied Anthropology with bilingual translations.'
                    : isEntrepreneurship
                    ? 'Complete verbatim transcription of all 6 chapters, MSE classification tables, 20/80 lease financing formulas, Ethiopian IP proclamations, marketing mix 4 P\'s, Break-Even formulas, standardized business plan templates, and review questions with bilingual English & Amharic translations.'
                    : isLogic
                    ? 'Complete verbatim transcription of all 6 chapters (pages 1 to 123): Philosophy branches, arguments, deduction vs induction, 22 informal fallacies, categorical propositions (A, E, I, O), categorical syllogisms (mood and figure), Venn testing, and everyday critical thinking barriers with bilingual English & Amharic translations.'
                    : isInclusiveness
                    ? 'Complete verbatim transcription of all 8 chapters (pages 1 to 120): Understanding impairments vs disabilities, medical vs social models, differentiated needs identification, Universal Design for Learning (UDL), assistive technologies, creating inclusive campus culture, peace and democracy, legal frameworks (UN CRPD), resource management, and collaborative partnerships with bilingual English & Amharic translations.'
                    : isEmergingTech
                    ? 'Complete verbatim transcription of all 7 chapters (pages 1 to 118): Introduction to 4IR, Data Science & Big Data, Artificial Intelligence (AI/ML), Internet of Things (IoT), Cybersecurity & Privacy, Augmented Reality (AR/VR/Robotics), and Nanotechnology & Quantum Computing with official tables, subtitles, and bilingual English & Amharic translations.'
                    : isGlobalAffairs
                    ? 'Complete verbatim transcription of all 5 chapters (pages 1 to 185): International Relations theories (Realism, Liberalism, Constructivism, Marxism), Foreign Policy instruments & Ethiopian foreign policy across historical regimes, International Political Economy (Mercantilism, Liberalism, Marxism, Hegemonic Stability, Bretton Woods institutions, WTO), Globalization, Regionalism & Regional Integration (EAC, ECOWAS, SADC, AU), and Contemporary Global Issues (Global Security, Terrorism, Nuclear Proliferation, Climate Change, Global Environmental Governance, and Global Health Pandemics) with full subtitles, analytical frameworks, and bilingual English & Amharic translations.'
                    : isMoralCitizenship
                    ? 'Complete verbatim transcription of all 6 chapters (pages 1 to 142): Understanding civics and ethics, approaches to ethics (normative, teleological, deontology, virtue ethics), ethical decision making, state, government and citizenship theories, constitutionalism, democracy, human rights, and core civil values with bilingual English & Amharic translations.'
                    : isEconomics
                    ? 'Complete verbatim transcription of all 6 chapters (pages 1 to 119): Nature and scope of economics, PPF curves, demand and supply market dynamics, elasticities, cardinal and ordinal consumer theories, short-run and long-run production and cost curves, perfect and imperfect market structures, and macroeconomic aggregates (GDP, inflation, unemployment, fiscal and monetary policies) with official tables, mathematical formulas, and bilingual English & Amharic translations.'
                    : isFitness
                    ? 'Complete verbatim transcription of all 5 units (pages 1 to 95): Physical Fitness & Hypokinetic Disease, Health-Related Fitness Components, Skill-Related Fitness & Motor Skills, Fitness & Nutrition (Energy Systems & Ergogenic Aids), and Fitness Assessment Protocols, PAR-Q+, SMART Goal Setting, FITT-VP Periodization, and First Aid (R.I.C.E.) with bilingual English & Amharic translations.'
                    : isBiology
                    ? 'Complete verbatim transcription of all 6 chapters (pages 1 to 142): Introduction to biology & scientific methods, biological macromolecules & biochemical reactions, cellular biology & organelles, cellular metabolism & enzymes, genetics & patterns of inheritance, and ecology & natural resource conservation in Ethiopia with bilingual English & Amharic translations.'
                    : isMath
                    ? (courseId === 'math1011'
                      ? 'Complete verbatim transcription of all 6 chapters (pages 1 to 168): Vectors and Vector Spaces, Matrices & Systems of Linear Equations, Limits & Continuity, Derivatives & Tangent Problems, Integration Techniques & Applications, and Sequences & Infinite Series with proofs, theorems, formulas, worksheets, and bilingual English & Amharic translations.'
                      : 'Complete verbatim transcription of all 5 chapters (pages 1 to 97): Vectors & Vector Spaces (Ch 1), Matrices & Linear Systems (Ch 2), Limits & Continuity (Ch 3), Derivatives & Applications (Ch 4), and Integrations & Arc Length (Ch 5) with all official theorems, formulas, subtitles, and bilingual English & Amharic translations.')
                    : 'Complete verbatim transcription of all 11 chapters: biological bases of behavior, sensation & perception, conditioning theories, memory models, motivation & emotion, personality traits, DSM clinical disorders & treatments, intrapersonal communication, conflict resolution, SQ3R, and APA research formatting with bilingual English & Amharic translations.'}
                </p>
              )}
            </div>

            <div className="font-amharic border-t md:border-t-0 md:border-l border-white/15 pt-2 md:pt-0 md:pl-4">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-yellow-100">
                {isEnglish1
                  ? 'ተግባቦታዊ የእንግሊዝኛ ቋንቋ ክህሎት ፩'
                  : isEnglish2
                  ? 'ተግባቦታዊ የእንግሊዝኛ ቋንቋ ክህሎት ፪'
                  : isHistory
                  ? 'የኢትዮጵያ እና የአፍሪካ ቀንድ ታሪክ'
                  : isGeography
                  ? 'የኢትዮጵያ እና የአፍሪካ ቀንድ ጂኦግራፊ'
                  : isPhysics
                  ? 'አጠቃላይ ፊዚክስ ለተፈጥሮ ሳይንስ'
                  : isAnthropology
                  ? 'ማህበራዊ አንትሮፖሎጂ'
                  : isEntrepreneurship
                  ? 'የስራ ፈጠራ (ኢንተርፕረነርሺፕ)'
                  : isLogic
                  ? 'አመክንዮ እና ሂሳዊ አስተሳሰብ'
                  : isInclusiveness
                  ? 'አካታችነት (ልዩ ፍላጎት ትምህርት)'
                  : isEmergingTech
                  ? 'አዳዲስ እና ተስፈኛ ቴክኖሎጂዎች መግቢያ'
                  : isGlobalAffairs
                  ? 'አለም አቀፍ ጉዳዮች / አዝማሚያዎች'
                  : isMoralCitizenship
                  ? 'የስነምግባር እና ዜግነት ትምህርት'
                  : isEconomics
                  ? 'የኢኮኖሚክስ መግቢያ'
                  : isFitness
                  ? 'አካላዊ ብቃት (ስፖርት)'
                  : isBiology
                  ? 'አጠቃላይ ባዮሎጂ'
                  : isMath
                  ? (courseId === 'math1011' ? 'ሒሳብ (Math 1011)' : 'አፕላይድ ሒሳብ ፩ቢ (Math 1014B)')
                  : 'አጠቃላይ ስነ-ልቦና እና የህይወት ክህሎት'}
              </h2>
              {isHeaderCardOpen && (
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed animate-fadeIn">
                  {isEnglish1
                    ? 'ሁሉንም 5 ክፍሎች (ከገጽ 1 እስከ 100)፡ የዩኒቨርሲቲ ጥናት ስልት፣ ጤና እና የአካል ብቃት፣ ባህላዊ እሴቶች፣ የዱር አራዊት ጥበቃ እና የህዝብና ኢኮኖሚ ይዘቶችን፣ ሰዋሰው እና የንባብ ምንባቦችን በሙሉ ጽሁፋቸው አካቶ የያዘ ይፋዊ የMoE ሞጁል።'
                    : isEnglish2
                    ? 'ሁሉንም 5 ክፍሎች እና ተጨማሪ ንባቦችን (ከገጽ 1 እስከ 97)፡ የህይወት ክህሎት፣ የሳይንስ የወደፊት እጣ (ዶ/ር አክሊሉ ለማ እና እንዶድ)፣ የአካባቢ ጥበቃ (የሙሬይ ወንዝ)፣ አገር በቀል እውቀት (የአፋር ቅሪተ-አካላት በዶ/ር በርሀነ አስፋው) እና ባህላዊ ቅርሶች በሁለትዮሽ ቋንቋ።'
                    : isHistory
                    ? 'ሁሉንም 7 ክፍሎች፣ ታሪካዊ ሰንጠረዦች፣ ካርታዎችና የክለሳ ጥያቄዎች በሙሉ ይዘታቸው አካቶ የያዘ ይፋዊ የዩኒቨርሲቲ ሞጁል።'
                    : isGeography
                    ? 'ሁሉንም 8 ምዕራፎች፣ ሰንጠረዦች፣ ካርታዎች፣ ቀመሮችና የፈተና ጥያቄዎች በሙሉ ይዘታቸው አካቶ የያዘ ይፋዊ የዩኒቨርሲቲ ሞጁል።'
                    : isPhysics
                    ? 'ሁሉንም 6 ምዕራፎች (ከገጽ 1 እስከ 207)፡ ቬክተሮች፣ እንቅስቃሴ፣ የኒውተን ህጎች፣ ቴርሞዳይናሚክስ፣ ሞገዶች እና ኤሌክትሮስታቲክስ ከነቀመሮቻቸው እና ከውስጥ ንዑሳን ርዕሶች ጋር የያዘ ሞጁል።'
                    : isAnthropology
                    ? 'ሁሉንም 7 ክፍሎች፡ የአንትሮፖሎጂ ዘርፎች፣ የሰው ልጅ አመጣጥ፣ ባህል፣ ዝምድና እና ጋብቻ፣ የብሔር ማንነት እና የተግባራዊ አንትሮፖሎጂ ይዘቶች በሁለትዮሽ ቋንቋ።'
                    : isEntrepreneurship
                    ? 'ሁሉንም 6 ምዕራፎች፣ ይፋዊ የአጥኢ ምደባ ሰንጠረዦች፣ የቢዝነስ ምስረታ፣ የምርት ልማት፣ የ4ቱ ፒዎች ማርኬቲንግ፣ የBreak-Even ስሌቶችና ይፋዊ የቢዝነስ እቅድ ቅጾችን በሙሉ ይዘታቸው አካቶ የያዘ ይፋዊ የዩኒቨርሲቲ ሞጁል።'
                    : isLogic
                    ? 'ሁሉንም 6 ምዕራፎች (ከገጽ 1 እስከ 123)፡ የፍልስፍና ቅርንጫፎች፣ የሙግት አወቃቀር፣ 22ቱ የፋላሲ አይነቶች፣ ምድባዊ ፕሮፖዚሽኖች (A, E, I, O)፣ የሲሎጂዝም ህጎችና ሂሳዊ አስተሳሰብ በሁለትዮሽ ቋንቋ።'
                    : isInclusiveness
                    ? 'ሁሉንም 8 ምዕራፎች (ከገጽ 1 እስከ 120)፡ የአካል ጉዳተኝነትና የተጋላጭነት ፅንሰ-ሀሳቦች፣ ልዩ ፍላጎቶችን መለየት፣ ሁለንተናዊ የትምህርት ዲዛይን (UDL)፣ አጋዥ ቴክኖሎጂዎች፣ አካታች የካምፓስ ባህልን መገንባት፣ ሰላምና ዴሞክራሲ፣ ህጋዊ ማዕቀፎች (UN CRPD) እና የሀብት አያያዝን በሙሉ ይዘታቸው በሁለትዮሽ ቋንቋ አካቶ የያዘ ይፋዊ የMoE ሞጁል።'
                    : isEmergingTech
                    ? 'ሁሉንም 7 ምዕራፎች (ከገጽ 1 እስከ 118)፡ አራተኛው የኢንዱስትሪ አብዮት (4IR)፣ ዳታ ሳይንስ እና ቢግ ዳታ፣ ሰው ሰራሽ አስተውሎት (AI)፣ የእቃዎች በይነመረብ (IoT)፣ የሳይበር ደህንነት፣ AR/VR እና ሮቦቲክስ፣ ናኖቴክኖሎጂ እና የወደፊት አዝማሚያዎችን በሁለትዮሽ ቋንቋ አካቶ የያዘ ይፋዊ የMoE ሞጁል።'
                    : isGlobalAffairs
                    ? 'ሁሉንም 5 ምዕራፎች (ከገጽ 1 እስከ 185)፡ የአለም አቀፍ ግንኙነት ንድፈ-ሀሳቦች (ሪያሊዝም፣ ሊበራሊዝም፣ ኮንስትራክቲቪዝም)፣ የውጭ ፖሊሲና ዲፕሎማሲ እንዲሁም የኢትዮጵያ የውጭ ፖሊሲ ታሪክ፣ አለም አቀፍ የፖለቲካ ኢኮኖሚ (መርካንታይሊዝም፣ ሊበራሊዝም፣ ብሬተን ዉድስ ተቋማትና WTO)፣ ግሎባላይዜሽንና የቀጠናዊ ውህደት (AU, IGAD, ECOWAS) እና ወቅታዊ የአለም አቀፍ አጀንዳዎች (የአየር ንብረት ለውጥ፣ ሽብርተኝነት፣ የኒውክሌር መስፋፋትና አለም አቀፍ ወረርሽኞች) በሁለትዮሽ ቋንቋ አካቶ የያዘ ይፋዊ የMoE ሞጁል።'
                    : isMoralCitizenship
                    ? 'ሁሉንም 6 ምዕራፎች (ከገጽ 1 እስከ 142)፡ የስነምግባር እና ዜግነት መሰረተ-ሃሳቦች፣ የግብረገብ ንድፈ-ሃሳቦች፣ ውሳኔ አሰጣጥ፣ የመንግስትና የዜግነት ፅንሰ-ሃሳቦች፣ ህገ-መንግስትና ዲሞክራሲ፣ እና ሁለንተናዊ የሰብዓዊ መብቶች ይዘቶችን በሁለትዮሽ ቋንቋ አካቶ የያዘ ይፋዊ የMoE ሞጁል።'
                    : isEconomics
                    ? 'ሁሉንም 6 ምዕራፎች (ከገጽ 1 እስከ 119)፡ የኢኮኖሚክስ ምንነት፣ የምርት አቅም ወሰን (PPF)፣ የፍላጎትና አቅርቦት ህጎች፣ የዋጋ ተለዋዋጭነት፣ የተጠቃሚዎች እርካታና ኢንዲፈረንስ ከርቭ፣ የምርትና የወጪ ፈንክሽኖች፣ የገበያ መዋቅሮች (ፍጹም ውድድር፣ ሞኖፖሊ፣ ኦሊጎፖሊ) እና የማክሮ ኢኮኖሚክስ (GDP፣ የዋጋ ግሽበት፣ የስራ አጥነትና የፊስካል ፖሊሲ) ይዘቶችን በሁለትዮሽ ቋንቋ አካቶ የያዘ ይፋዊ የMoSHE/MoE ሞጁል።'
                    : isFitness
                    ? 'ሁሉንም 5 ክፍሎች (ከገጽ 1 እስከ 95)፡ የአካል ብቃት እና እንቅስቃሴ ማጣት የሚያስከትላቸው በሽታዎች፣ ከጤና ጋር የተያያዙ የአካል ብቃት ክፍሎች፣ ከክህሎት ጋር የተያያዙ ክፍሎች፣ ስነ-ምግብና የስፖርት ጉልበት፣ የአካል ብቃት ምዘና (PAR-Q+)፣ የSMART ግቦች፣ የFITT-VP ስልጠና እና የመጀመሪያ እርዳታ (R.I.C.E.) በሁለትዮሽ ቋንቋ አካቶ የያዘ ይፋዊ የMoSHE/MoE ሞጁል።'
                    : isBiology
                    ? 'ሁሉንም 6 ምዕራፎች (ከገጽ 1 እስከ 142)፡ የባዮሎጂ ሳይንስ መግቢያ፣ ማክሮሞለኪውሎች፣ የሴል አወቃቀርና ኦርጋኔሎች፣ ሴሉላር ሜታቦሊዝምና ኢንዛይሞች፣ ጄኔቲክስና ዝግመተ-ለውጥ፣ እና ኢኮሎጂና በኢትዮጵያ የተፈጥሮ ሀብት ጥበቃ በሁለትዮሽ ቋንቋ አካቶ የያዘ ይፋዊ የMoE ሞጁል።'
                    : isMath
                    ? (courseId === 'math1011'
                      ? 'ሁሉንም 6 ምዕራፎች (ከገጽ 1 እስከ 168)፡ ቬክተሮችና የቬክተር ስፔሶች፣ ማትሪክሶችና የሊኒየር እኩልታዎች ስርአት፣ ወሰኖችና ቀጣይነት፣ ዲሪቬቲቭ፣ ኢንተግራል፣ እንዲሁም ሲክዌንሶችና ሲሪስን በሙሉ ይዘታቸው በሁለትዮሽ ቋንቋ አካቶ የያዘ ይፋዊ የMoSHE/MoE ሞጁል።'
                      : 'ሁሉንም 5 ምዕራፎች (ከገጽ 1 እስከ 97)፡ ቬክተሮችና የቬክተር ስፔሶች (ምዕራፍ 1)፣ ማትሪክሶችና የሊኒየር እኩልታዎች (ምዕራፍ 2)፣ ወሰኖችና ቀጣይነት (ምዕራፍ 3)፣ ዲሪቬቲቭና አፕሊኬሽኖቹ (ምዕራፍ 4)፣ እንዲሁም ኢንተግራልና የከርቭ ርዝመት (ምዕራፍ 5) ከነቀመሮቻቸውና ከነርዕሶቻቸው በሙሉ በሁለትዮሽ ቋንቋ አካቶ የያዘ ይፋዊ የAASTU ሞጁል።')
                    : 'ሁሉንም 11 ምዕራፎች፣ ኒውሮባዮሎጂ፣ የመማር ንድፈ-ሀሳቦች፣ የማስታወስ ሂደት፣ ስብዕና፣ የአእምሮ ህመሞችና ህክምና፣ የጆሃሪ መስኮት፣ ግጭት አፈታትና የጥናት ስልቶችን በሙሉ ይዘታቸው አካቶ የያዘ ይፋዊ የዩኒቨርሲቲ ሞጁል።'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation & Search Control Toolbar (Relative, non-obstructive) */}
      <div className="relative z-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs p-2.5 sm:p-3 space-y-2.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          {/* Chapter / Unit Filter Pill Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-semibold">
            <span className="text-[11px] uppercase font-bold text-slate-400 mr-1 shrink-0">
              Filter:
            </span>
            {activeFilters.map((btn) => (
              <button
                key={btn.label}
                onClick={() => setSelectedChapterFilter(btn.value as any)}
                className={`px-3 py-1.5 rounded-xl shrink-0 transition-colors ${
                  selectedChapterFilter === btn.value
                    ? isEnglish1
                      ? 'bg-blue-700 text-white shadow-2xs font-bold'
                      : isEnglish2
                      ? 'bg-teal-700 text-white shadow-2xs font-bold'
                      : isHistory
                      ? 'bg-amber-700 text-white shadow-2xs font-bold'
                      : isGeography
                      ? 'bg-emerald-700 text-white shadow-2xs font-bold'
                      : isPhysics
                      ? 'bg-cyan-700 text-white shadow-2xs font-bold'
                      : isAnthropology
                      ? 'bg-orange-700 text-white shadow-2xs font-bold'
                      : isEntrepreneurship
                      ? 'bg-indigo-700 text-white shadow-2xs font-bold'
                      : isLogic
                      ? 'bg-rose-700 text-white shadow-2xs font-bold'
                      : isInclusiveness
                      ? 'bg-emerald-700 text-white shadow-2xs font-bold'
                      : isEmergingTech
                      ? 'bg-sky-700 text-white shadow-2xs font-bold'
                      : isGlobalAffairs
                      ? 'bg-blue-700 text-white shadow-2xs font-bold'
                      : isMoralCitizenship
                      ? 'bg-teal-700 text-white shadow-2xs font-bold'
                      : isEconomics
                      ? 'bg-emerald-700 text-white shadow-2xs font-bold'
                      : isFitness
                      ? 'bg-amber-700 text-white shadow-2xs font-bold'
                      : isBiology
                      ? 'bg-emerald-700 text-white shadow-2xs font-bold'
                      : isMath
                      ? 'bg-blue-700 text-white shadow-2xs font-bold'
                      : 'bg-purple-700 text-white shadow-2xs font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={`Search all ${totalPages} PDF pages & subtitles...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Page Jump & Mode Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setViewStyle('single')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewStyle === 'single'
                    ? isEnglish1
                      ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-2xs'
                      : isEnglish2
                      ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-2xs'
                      : isHistory
                      ? 'bg-white dark:bg-slate-700 text-amber-700 dark:text-amber-300 shadow-2xs'
                      : isGeography
                      ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                      : isPhysics
                      ? 'bg-white dark:bg-slate-700 text-cyan-700 dark:text-cyan-300 shadow-2xs'
                      : isAnthropology
                      ? 'bg-white dark:bg-slate-700 text-orange-700 dark:text-orange-300 shadow-2xs'
                      : isEntrepreneurship
                      ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-2xs'
                      : isLogic
                      ? 'bg-white dark:bg-slate-700 text-rose-700 dark:text-rose-300 shadow-2xs'
                      : isInclusiveness
                      ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                      : isEmergingTech
                      ? 'bg-white dark:bg-slate-700 text-sky-700 dark:text-sky-300 shadow-2xs'
                      : isGlobalAffairs
                      ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-2xs'
                      : isMoralCitizenship
                      ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-2xs'
                      : isEconomics
                      ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                      : isFitness
                      ? 'bg-white dark:bg-slate-700 text-amber-700 dark:text-amber-300 shadow-2xs'
                      : isBiology
                      ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                      : isMath
                      ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-2xs'
                      : 'bg-white dark:bg-slate-700 text-purple-700 dark:text-purple-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Single Page Mode</span>
              </button>
              <button
                onClick={() => setViewStyle('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewStyle === 'all'
                    ? isEnglish1
                      ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-2xs'
                      : isEnglish2
                      ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-2xs'
                      : isHistory
                      ? 'bg-white dark:bg-slate-700 text-amber-700 dark:text-amber-300 shadow-2xs'
                      : isGeography
                      ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                      : isPhysics
                      ? 'bg-white dark:bg-slate-700 text-cyan-700 dark:text-cyan-300 shadow-2xs'
                      : isAnthropology
                      ? 'bg-white dark:bg-slate-700 text-orange-700 dark:text-orange-300 shadow-2xs'
                      : isEntrepreneurship
                      ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-2xs'
                      : isLogic
                      ? 'bg-white dark:bg-slate-700 text-rose-700 dark:text-rose-300 shadow-2xs'
                      : isInclusiveness
                      ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                      : isEmergingTech
                      ? 'bg-white dark:bg-slate-700 text-sky-700 dark:text-sky-300 shadow-2xs'
                      : isGlobalAffairs
                      ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-2xs'
                      : isMoralCitizenship
                      ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-2xs'
                      : isEconomics
                      ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                      : isFitness
                      ? 'bg-white dark:bg-slate-700 text-amber-700 dark:text-amber-300 shadow-2xs'
                      : isBiology
                      ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                      : isMath
                      ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-2xs'
                      : 'bg-white dark:bg-slate-700 text-purple-700 dark:text-purple-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span>Continuous List</span>
              </button>
            </div>

            {/* Full Screen Mode Button */}
            <button
              onClick={toggleFullScreen}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isFullScreen
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200'
              }`}
              title={isFullScreen ? 'Exit Full Screen (Esc)' : 'Enter Full Screen Reading (F)'}
              aria-label={isFullScreen ? 'Exit Full Screen' : 'Enter Full Screen'}
            >
              {isFullScreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-slate-950" />
                  <span>Exit Full Screen</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Full Screen</span>
                </>
              )}
            </button>

            <button
              onClick={() => toggleBookmark(currentPageNum)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                bookmarkedPages.includes(currentPageNum)
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {bookmarkedPages.includes(currentPageNum) ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                  <span>Bookmarked</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Bookmark Page</span>
                </>
              )}
            </button>

            {currentChapterSubtitles.length > 0 && (
              <button
                onClick={() => setShowSubtitlesIndex(!showSubtitlesIndex)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  showSubtitlesIndex
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Heading className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Inside Subtitles ({currentChapterSubtitles.length})</span>
              </button>
            )}
          </div>

          {/* Stepper Pagination */}
          <div className="flex items-center justify-between sm:justify-end gap-2">
            <button
              onClick={() => handlePageJump(currentPageNum - 1)}
              disabled={currentPageNum <= 1}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 disabled:opacity-40 text-xs font-bold flex items-center gap-1 min-h-[36px]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <form onSubmit={handlePageSubmit} className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-slate-500">PDF Page</span>
              <input
                type="number"
                min={1}
                max={totalPages}
                value={inputPageNum}
                onChange={(e) => setInputPageNum(e.target.value)}
                onBlur={handlePageSubmit}
                className="w-16 px-2 py-1 text-center font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
              <span className="text-slate-500">of {totalPages}</span>
            </form>

            <button
              onClick={() => handlePageJump(currentPageNum + 1)}
              disabled={currentPageNum >= totalPages}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 disabled:opacity-40 text-xs font-bold flex items-center gap-1 min-h-[36px]"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Inside Chapter Subtitles Quick Index Bar */}
        {showSubtitlesIndex && currentChapterSubtitles.length > 0 && (
          <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between gap-2 pb-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Heading className="w-3.5 h-3.5 text-indigo-500" />
                <span>
                  All Subtitles & Sections inside {chapterOrUnitLabel} {currentChapterNumber}:
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                Click any subtitle to jump to that page
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
              {currentChapterSubtitles.map((sub, sIdx) => {
                const isCurrent = sub.pageNumber === currentPageNum;
                const displayText = sub.subtopicEn || sub.titleEn;
                return (
                  <button
                    key={sIdx}
                    onClick={() => handlePageJump(sub.pageNumber)}
                    className={`px-3 py-1.5 rounded-xl shrink-0 text-left border flex items-center gap-1.5 transition-all ${
                      isCurrent
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs font-bold'
                        : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="font-mono text-[10px] px-1 py-0.5 rounded bg-black/10 dark:bg-white/10">
                      p.{sub.pageNumber}
                    </span>
                    {sub.sectionRef && (
                      <span className="font-semibold text-[11px]">
                        §{sub.sectionRef}
                      </span>
                    )}
                    <span className="max-w-[220px] truncate" title={displayText}>
                      {displayText}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* RENDER PAGES */}
      {viewStyle === 'single' ? (
        <SinglePageCard
          page={currentPage}
          viewMode={viewMode}
          getTextClass={getTextClass}
          onSpeakText={onSpeakText}
          isBookmarked={bookmarkedPages.includes(currentPage.pdfPageNumber)}
          onToggleBookmark={() => toggleBookmark(currentPage.pdfPageNumber)}
          isAnswerRevealed={Boolean(revealedAnswers[currentPage.pdfPageNumber])}
          onToggleAnswer={() => toggleAnswer(currentPage.pdfPageNumber)}
          onNext={() => handlePageJump(currentPageNum + 1)}
          onPrev={() => handlePageJump(currentPageNum - 1)}
          hasNext={currentPageNum < totalPages}
          hasPrev={currentPageNum > 1}
          courseTheme={selectedPdfCourse}
        />
      ) : (
        <div className="space-y-8">
          <div className="text-xs text-slate-500 font-medium px-1">
            Showing {filteredPages.length} of {totalPages} pages matching filters
          </div>
          {filteredPages.map((pg) => (
            <SinglePageCard
              key={pg.pdfPageNumber}
              page={pg}
              viewMode={viewMode}
              getTextClass={getTextClass}
              onSpeakText={onSpeakText}
              isBookmarked={bookmarkedPages.includes(pg.pdfPageNumber)}
              onToggleBookmark={() => toggleBookmark(pg.pdfPageNumber)}
              isAnswerRevealed={Boolean(revealedAnswers[pg.pdfPageNumber])}
              onToggleAnswer={() => toggleAnswer(pg.pdfPageNumber)}
              courseTheme={selectedPdfCourse}
            />
          ))}
        </div>
      )}

      {/* Floating Bottom Navigation (Unobtrusive page flipping & scroll-to-top) */}
      <div className="fixed bottom-4 right-4 z-30 flex items-center gap-1 p-1 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 shadow-lg text-xs">
        <button
          onClick={() => handlePageJump(currentPageNum - 1)}
          disabled={currentPageNum <= 1}
          className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 dark:text-slate-200 transition-colors"
          title="Previous Page"
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-mono font-bold px-2 text-slate-800 dark:text-slate-200">
          {currentPageNum} / {totalPages}
        </span>
        <button
          onClick={() => handlePageJump(currentPageNum + 1)}
          disabled={currentPageNum >= totalPages}
          className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 dark:text-slate-200 transition-colors"
          title="Next Page"
          aria-label="Next Page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold transition-colors ml-0.5"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </div>
  );
};

interface SinglePageCardProps {
  page: OfficialPdfPage;
  viewMode: ViewMode;
  getTextClass: () => string;
  onSpeakText: (text: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  isAnswerRevealed: boolean;
  onToggleAnswer: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  courseTheme?: PdfCourseKey;
}

const SinglePageCard: React.FC<SinglePageCardProps> = ({
  page,
  viewMode,
  getTextClass,
  onSpeakText,
  isBookmarked,
  onToggleBookmark,
  isAnswerRevealed,
  onToggleAnswer,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  courseTheme = 'history'
}) => {
  const isEnglish1 = courseTheme === 'english1';
  const isEnglish2 = courseTheme === 'english2';
  const isHistory = courseTheme === 'history';
  const isGeography = courseTheme === 'geography';
  const isPhysics = courseTheme === 'physics';
  const isAnthropology = courseTheme === 'anthropology';
  const isEntrepreneurship = courseTheme === 'entrepreneurship';
  const isPsychology = courseTheme === 'psychology';
  const isLogic = courseTheme === 'logic';
  const isInclusiveness = courseTheme === 'inclusiveness';
  const isEmergingTech = courseTheme === 'emergingTech';
  const isGlobalAffairs = courseTheme === 'globalAffairs';
  const isMoralCitizenship = courseTheme === 'moralCitizenship';
  const isEconomics = courseTheme === 'economics';
  const isFitness = courseTheme === 'fitness';
  const isBiology = courseTheme === 'biology';
  const isMath = courseTheme === 'math';

  const themeBadgeBg = isEnglish1
    ? 'bg-blue-700'
    : isEnglish2
    ? 'bg-teal-700'
    : isHistory
    ? 'bg-amber-700'
    : isGeography
    ? 'bg-emerald-700'
    : isPhysics
    ? 'bg-cyan-700'
    : isAnthropology
    ? 'bg-orange-700'
    : isEntrepreneurship
    ? 'bg-indigo-700'
    : isLogic
    ? 'bg-rose-700'
    : isInclusiveness
    ? 'bg-emerald-700'
    : isEmergingTech
    ? 'bg-sky-700'
    : isGlobalAffairs
    ? 'bg-blue-700'
    : isMoralCitizenship
    ? 'bg-teal-700'
    : isEconomics
    ? 'bg-emerald-700'
    : isFitness
    ? 'bg-amber-700'
    : isBiology
    ? 'bg-emerald-700'
    : isMath
    ? 'bg-blue-700'
    : 'bg-purple-700';

  const themeAmharicColor = isEnglish1
    ? 'text-blue-800 dark:text-blue-400'
    : isEnglish2
    ? 'text-teal-800 dark:text-teal-400'
    : isHistory
    ? 'text-amber-800 dark:text-amber-400'
    : isGeography
    ? 'text-emerald-800 dark:text-emerald-400'
    : isPhysics
    ? 'text-cyan-800 dark:text-cyan-400'
    : isAnthropology
    ? 'text-orange-800 dark:text-orange-400'
    : isEntrepreneurship
    ? 'text-indigo-800 dark:text-indigo-400'
    : isLogic
    ? 'text-rose-800 dark:text-rose-400'
    : isInclusiveness
    ? 'text-emerald-800 dark:text-emerald-400'
    : isEmergingTech
    ? 'text-sky-800 dark:text-sky-400'
    : isGlobalAffairs
    ? 'text-blue-800 dark:text-blue-400'
    : isMoralCitizenship
    ? 'text-teal-800 dark:text-teal-400'
    : isEconomics
    ? 'text-emerald-800 dark:text-emerald-400'
    : isFitness
    ? 'text-amber-800 dark:text-amber-400'
    : isBiology
    ? 'text-emerald-800 dark:text-emerald-400'
    : isMath
    ? 'text-blue-800 dark:text-blue-400'
    : 'text-purple-800 dark:text-purple-400';

  const isUnitCourse = isHistory || isAnthropology || isEnglish1 || isEnglish2 || isFitness;

  return (
    <article className="bg-white dark:bg-slate-850 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-7 md:p-8 space-y-6 relative">
      {/* Official Running Header Banner */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`px-2.5 py-1 rounded-md font-mono font-bold text-white text-[11px] ${themeBadgeBg}`}
          >
            PDF PAGE {page.pdfPageNumber}
          </span>
          <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            Book Label: {page.bookPageLabel}
          </span>
          {page.chapterNumber !== undefined && page.chapterNumber !== null && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
              {isUnitCourse ? 'Unit' : 'Chapter'} {page.chapterNumber}
            </span>
          )}
          {page.sectionRef && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              Sec. {page.sectionRef}
            </span>
          )}
          {page.pageType && (
            <span className="px-2 py-0.5 rounded-md text-[10px] uppercase font-bold text-slate-500 bg-slate-100 dark:bg-slate-800">
              {page.pageType}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSpeakText(page.contentEn)}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            title="Read English text aloud"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <button
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-lg transition-colors ${
              isBookmarked
                ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
            title="Bookmark this PDF page"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 fill-amber-500" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Main Page Title Header */}
      <div className="space-y-1.5 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-slate-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Chapter Page Title • ዋና ርዕስ</span>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-snug">
          {page.titleEn}
        </h2>
        <h3 className={`text-base sm:text-lg font-amharic font-bold ${themeAmharicColor}`}>
          {page.titleAm}
        </h3>
      </div>

      {/* Dedicated Inside-Chapter Subtitle Callout Banner */}
      {(page.subtopicEn || page.subtopicAm || page.sectionRef) && (
        <div className="rounded-xl sm:rounded-2xl border border-indigo-200/90 dark:border-indigo-800/60 bg-gradient-to-r from-indigo-50/80 via-blue-50/50 to-indigo-50/30 dark:from-indigo-950/50 dark:via-slate-900/60 dark:to-indigo-950/30 p-4 sm:p-4.5 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-2xs flex items-center gap-1">
                <Heading className="w-3 h-3" />
                <span>Inside Chapter Subtitle</span>
              </span>
              {page.sectionRef && (
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700">
                  Section {page.sectionRef}
                </span>
              )}
            </div>
            <span className="text-[11px] font-amharic font-bold text-indigo-900 dark:text-indigo-300">
              የምዕራፉ ንዑስ ርዕስ (Sub-topic)
            </span>
          </div>

          {page.subtopicEn && (
            <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
              {page.subtopicEn}
            </div>
          )}

          {page.subtopicAm && (
            <div className="text-sm sm:text-base font-amharic font-bold text-indigo-950 dark:text-indigo-200 leading-snug">
              {page.subtopicAm}
            </div>
          )}
        </div>
      )}

      {/* Bilingual Content Layout */}
      <div
        className={
          viewMode === 'side-by-side'
            ? 'grid grid-cols-1 lg:grid-cols-2 gap-6'
            : 'space-y-6'
        }
      >
        {/* English Column */}
        {(viewMode === 'side-by-side' || viewMode === 'english') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500">
                Official English PDF Text
              </span>
              <button
                onClick={() => onSpeakText(page.contentEn)}
                className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                <Volume2 className="w-3 h-3" />
                <span>Listen</span>
              </button>
            </div>
            <div className={`whitespace-pre-line text-slate-800 dark:text-slate-200 ${getTextClass()}`}>
              {page.contentEn}
            </div>
          </div>
        )}

        {/* Amharic Column */}
        {(viewMode === 'side-by-side' || viewMode === 'amharic') && (
          <div className="space-y-4 font-amharic">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 font-sans">
                የአማርኛ ይዘት ትርጉምና ማብራሪያ
              </span>
            </div>
            <div className={`whitespace-pre-line text-slate-800 dark:text-slate-200 ${getTextClass()}`}>
              {page.contentAm}
            </div>
          </div>
        )}
      </div>

      {/* Official Formulas & Equations (Key Physics & Science laws) */}
      {page.formulas && page.formulas.length > 0 && (
        <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Core Formulas & Physical Laws
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {page.formulas.map((f, fIdx) => (
              <div
                key={fIdx}
                className="p-3.5 rounded-xl border border-cyan-200/80 dark:border-cyan-900/60 bg-cyan-50/40 dark:bg-cyan-950/20 space-y-1.5"
              >
                <div className="text-xs font-bold text-cyan-900 dark:text-cyan-200">
                  {f.name}
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 font-mono text-sm font-bold text-slate-900 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800/50 overflow-x-auto">
                  {f.formula}
                </div>
                {f.explanation && (
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {f.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Official Tables (e.g., MSE Classification, Table 1.1, Table II) */}
      {page.tables && page.tables.length > 0 && (
        <div className="space-y-4 pt-2">
          {(page.tables || []).map((tbl, tblIdx) => (
            <div
              key={tbl.id || tblIdx}
              className="rounded-2xl border border-slate-200 dark:border-slate-755 overflow-hidden bg-slate-50/50 dark:bg-slate-900/40"
            >
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2.5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TableIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {tbl.caption}
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-300 dark:border-slate-700">
                      {(tbl.headers || []).map((h, hIdx) => (
                        <th key={hIdx} className="px-3.5 py-2.5 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    {(tbl.rows || []).map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={
                          rIdx % 2 === 0
                            ? 'bg-white dark:bg-slate-850'
                            : 'bg-slate-50/80 dark:bg-slate-900/60'
                        }
                      >
                        {(Array.isArray(row) ? row : []).map((cell, cIdx) => (
                          <td key={cIdx} className="px-3.5 py-2.5 align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {tbl.source && (
                <div className="p-2 text-[10px] text-slate-500 italic bg-slate-100/50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                  Source: {tbl.source}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Official Figures / Diagrams */}
      {page.figures && page.figures.length > 0 && (
        <div className="space-y-4 pt-2">
          {(page.figures || []).map((fig, figIdx) => {
            const amCaption = (fig as any).amharicCaption;
            return (
              <div
                key={fig.id || figIdx}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-750 bg-slate-50 dark:bg-slate-900/50 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {fig.caption}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {fig.description}
                </p>
                {amCaption && (
                  <p className="text-xs text-emerald-800 dark:text-emerald-400 font-amharic">
                    {amCaption}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Official Learning Activities */}
      {page.activities && page.activities.length > 0 && (
        <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Official In-Class Activities & Group Tasks
            </h4>
          </div>

          {(page.activities || []).map((act, actIdx) => {
            const questions = act.questions || (act as any).tasksEn || (act as any).tasksAm || [];
            const title = act.title || (act as any).instructionsEn || 'Official In-Class Activity';
            return (
              <div
                key={actIdx}
                className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/50 space-y-3"
              >
                <span className="text-xs font-bold text-amber-900 dark:text-amber-200">
                  {title}
                </span>
                {questions.length > 0 && (
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {questions.map((q, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-2">
                        <span className="font-bold text-amber-700 dark:text-amber-400 shrink-0">
                          {qIdx + 1}.
                        </span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Official Review Questions & Exercises */}
      {page.reviewQuestions && page.reviewQuestions.length > 0 && (
        <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Review Questions & Conceptual Exercises
            </h4>
          </div>

          {(page.reviewQuestions || []).map((rev, rIdx) => (
            <div
              key={rIdx}
              className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/50 space-y-3"
            >
              <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                {rev.title}
              </span>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {(rev.questions || []).map((q, qIdx) => (
                  <li key={qIdx} className="flex items-start gap-2">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 shrink-0">
                      {qIdx + 1}.
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Stepper (Single page view only) */}
      {(onNext || onPrev) && (
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left space-y-0.5">
            <div className="font-semibold text-slate-700 dark:text-slate-300">
              Official PDF Page {page.pdfPageNumber} ({page.bookPageLabel})
            </div>
            <div className="text-[11px] text-slate-400">
              Tip: Press keyboard <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">→</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">F</kbd> for Full Screen
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-750 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs min-h-[48px]"
              title="Previous Page (← Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <div className="text-left">
                <div>Previous Page</div>
                <div className="text-[10px] text-slate-400 font-amharic font-normal">የቀደመው ገጽ</div>
              </div>
            </button>

            <button
              onClick={onNext}
              disabled={!hasNext}
              className={`flex-1 sm:flex-initial px-6 py-3 rounded-2xl text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all min-h-[48px] ${
                isEnglish1
                  ? 'bg-blue-700 hover:bg-blue-800'
                  : isEnglish2
                  ? 'bg-teal-700 hover:bg-teal-800'
                  : isHistory
                  ? 'bg-amber-700 hover:bg-amber-800'
                  : isGeography
                  ? 'bg-emerald-700 hover:bg-emerald-800'
                  : isPhysics
                  ? 'bg-cyan-700 hover:bg-cyan-800'
                  : isAnthropology
                  ? 'bg-orange-700 hover:bg-orange-800'
                  : isEntrepreneurship
                  ? 'bg-indigo-700 hover:bg-indigo-800'
                  : isLogic
                  ? 'bg-rose-700 hover:bg-rose-800'
                  : isInclusiveness
                  ? 'bg-emerald-700 hover:bg-emerald-800'
                  : isEmergingTech
                  ? 'bg-sky-700 hover:bg-sky-800'
                  : isGlobalAffairs
                  ? 'bg-blue-700 hover:bg-blue-800'
                  : isMoralCitizenship
                  ? 'bg-teal-700 hover:bg-teal-800'
                  : isEconomics
                  ? 'bg-emerald-700 hover:bg-emerald-800'
                  : isFitness
                  ? 'bg-amber-700 hover:bg-amber-800'
                  : 'bg-purple-700 hover:bg-purple-800'
              }`}
              title="Next Page (→ Right Arrow)"
            >
              <div className="text-right">
                <div>Next Page</div>
                <div className="text-[10px] text-white/80 font-amharic font-normal">ቀጣይ ገጽ</div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/90" />
            </button>
          </div>
        </div>
      )}
    </article>
  );
};
