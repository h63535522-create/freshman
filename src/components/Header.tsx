import React, { useState } from 'react';
import { ViewMode } from '../types';
import { Course } from '../data/coursesIndex';
import {
  Languages,
  BookMarked,
  Search,
  GraduationCap,
  Volume2,
  VolumeX,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Sun,
  Moon,
  BarChart3,
  Minimize2,
  Maximize2,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';

interface HeaderProps {
  currentCourse: Course;
  allCourses: Course[];
  onSelectCourse: (courseId: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onOpenGlossary: () => void;
  onOpenExam: () => void;
  onOpenDashboard?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  fontSize: 'sm' | 'md' | 'lg';
  onFontSizeChange: (size: 'sm' | 'md' | 'lg') => void;
  isReadingAudio: boolean;
  onToggleAudio: () => void;
  onToggleSidebar: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  isSafeReadingMode?: boolean;
  onToggleSafeReadingMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCourse,
  allCourses,
  onSelectCourse,
  viewMode,
  onViewModeChange,
  onOpenGlossary,
  onOpenExam,
  onOpenDashboard,
  searchQuery,
  onSearchChange,
  fontSize,
  onFontSizeChange,
  isReadingAudio,
  onToggleAudio,
  onToggleSidebar,
  isDarkMode,
  onToggleDarkMode,
  isSafeReadingMode = false,
  onToggleSafeReadingMode
}) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  const getCourseBadgeColor = (courseId: string) => {
    if (courseId === 'phys1011') return 'bg-gradient-to-tr from-cyan-600 to-blue-800';
    if (courseId === 'flen1012') return 'bg-gradient-to-tr from-teal-600 to-cyan-700';
    if (courseId === 'flen1011') return 'bg-gradient-to-tr from-indigo-600 to-blue-700';
    if (courseId === 'psyc1011') return 'bg-gradient-to-tr from-emerald-600 to-teal-700';
    if (courseId === 'gees1011') return 'bg-gradient-to-tr from-emerald-700 to-teal-800';
    if (courseId === 'anth1012') return 'bg-gradient-to-tr from-orange-600 to-amber-700';
    if (courseId === 'mgmt1012') return 'bg-gradient-to-tr from-indigo-600 to-purple-800';
    if (courseId === 'phil1011') return 'bg-gradient-to-tr from-rose-600 to-pink-800';
    if (courseId === 'hist1012') return 'bg-gradient-to-tr from-amber-600 to-red-800';
    if (courseId === 'econ1011') return 'bg-gradient-to-tr from-emerald-600 to-teal-700';
    if (courseId === 'mcde1012') return 'bg-gradient-to-tr from-teal-600 to-emerald-800';
    if (courseId === 'gltr1012') return 'bg-gradient-to-tr from-blue-700 to-indigo-800';
    if (courseId === 'emte1012') return 'bg-gradient-to-tr from-sky-600 to-blue-700';
    if (courseId === 'snie1012') return 'bg-gradient-to-tr from-emerald-600 to-teal-700';
    if (courseId === 'spsc1011') return 'bg-gradient-to-tr from-amber-600 to-orange-700';
    if (courseId === 'math1011') return 'bg-gradient-to-tr from-cyan-600 to-teal-700';
    if (courseId === 'biol1012') return 'bg-gradient-to-tr from-emerald-600 to-green-700';
    return 'bg-gradient-to-tr from-slate-700 to-slate-900';
  };

  const getCourseInitials = (course: Course) => {
    if (course.id === 'phys1011') return 'Φ';
    if (course.id === 'flen1012') return 'E2';
    if (course.id === 'flen1011') return 'E1';
    if (course.id === 'psyc1011') return 'Ψ';
    if (course.id === 'phil1011') return 'Λ';
    if (course.id === 'hist1012') return 'H';
    if (course.id === 'mgmt1012') return 'M';
    if (course.id === 'anth1012') return 'A';
    if (course.id === 'gees1011') return 'G';
    if (course.id === 'econ1011') return 'Ec';
    if (course.id === 'mcde1012') return 'MC';
    if (course.id === 'gltr1012') return 'GA';
    if (course.id === 'emte1012') return 'ET';
    if (course.id === 'snie1012') return 'In';
    if (course.id === 'spsc1011') return 'PF';
    if (course.id === 'math1011') return 'M1';
    if (course.id === 'biol1012') return 'Bio';
    return course.code.slice(0, 2);
  };

  // =========================================================================
  // SAFE READING MODE VIEW (Ultra-clean, 40px height, zero visual obstruction)
  // =========================================================================
  if (isSafeReadingMode) {
    return (
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 flex items-center justify-between gap-2 text-xs">
          {/* Left: Exit Safe Reading Mode */}
          <div className="flex items-center gap-2">
            {onToggleSafeReadingMode && (
              <button
                onClick={onToggleSafeReadingMode}
                className="px-2.5 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                title="Exit Safe Reading Mode (ወደ መደበኛ እይታ ተመለስ)"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Exit Safe Read</span>
                <span className="hidden sm:inline font-amharic text-[11px] font-normal text-emerald-200">
                  (ተመለስ)
                </span>
              </button>
            )}

            <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
              <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                {currentCourse.code}
              </span>
              <span className="hidden md:inline text-slate-500 dark:text-slate-400 font-normal truncate max-w-[200px]">
                {currentCourse.englishTitle}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-[10px] font-medium border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-3 h-3" />
                <span>Safe Read Active</span>
              </span>
            </div>
          </div>

          {/* Right: Essential Reading Controls only (Language, Audio, Font Size, Theme) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-semibold">
              <button
                onClick={() => onViewModeChange('side-by-side')}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  viewMode === 'side-by-side'
                    ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Dual
              </button>
              <button
                onClick={() => onViewModeChange('english')}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  viewMode === 'english'
                    ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onViewModeChange('amharic')}
                className={`px-2 py-0.5 rounded-md font-amharic transition-all ${
                  viewMode === 'amharic'
                    ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                አማ
              </button>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={onToggleAudio}
              className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 transition-all ${
                isReadingAudio
                  ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
              title="Read text aloud"
            >
              {isReadingAudio ? <VolumeX className="w-3.5 h-3.5 text-amber-600" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* Font Size Adjuster */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-bold">
              <button
                onClick={() => onFontSizeChange('sm')}
                className={`px-1.5 py-0.5 rounded ${
                  fontSize === 'sm' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-400'
                }`}
              >
                A
              </button>
              <button
                onClick={() => onFontSizeChange('md')}
                className={`px-1.5 py-0.5 rounded ${
                  fontSize === 'md' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-400'
                }`}
              >
                A+
              </button>
              <button
                onClick={() => onFontSizeChange('lg')}
                className={`px-1.5 py-0.5 rounded ${
                  fontSize === 'lg' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-400'
                }`}
              >
                A++
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-amber-300"
              title="Toggle Day / Night reading theme"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>
    );
  }

  // =========================================================================
  // STANDARD HEADER VIEW (Compact, Streamlined, Non-Obstructive)
  // =========================================================================
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
      {/* Subtle Mini Top Ribbon (Only 20px) */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white text-[10px] sm:text-[11px] px-3 sm:px-6 py-0.5 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-1.5 font-medium tracking-wide truncate">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0"></span>
          <span className="truncate">FDRE MoE Ethiopian Freshman Curriculum • {currentCourse.code}</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-300/90 font-amharic text-[11px] shrink-0">
          <span className="hidden sm:inline">የመጀመሪያ ዓመት ይፋዊ ሞጁሎች</span>
          {onToggleSafeReadingMode && (
            <button
              onClick={onToggleSafeReadingMode}
              className="text-emerald-300 hover:text-white hover:underline flex items-center gap-1 font-sans text-[10px] font-semibold bg-white/10 px-2 py-0.2 rounded-full ml-1"
            >
              <ShieldCheck className="w-3 h-3 text-emerald-300" />
              <span>Safe Reading Mode</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Single-Bar Header (Desktop: All in 1 sleek row; Mobile: 2 compact rows) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Left: Hamburger (Mobile) + Course Selector Dropdown */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 relative">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center shrink-0"
              aria-label="Open Curriculum Menu"
            >
              <Menu className="w-4 h-4" />
            </button>

            {/* Course Selector Pill */}
            <div className="relative">
              <button
                onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
                className="flex items-center gap-1.5 p-1 sm:px-2.5 sm:py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-750 transition-all text-left group min-h-[38px]"
                aria-label="Switch Course"
              >
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-2xs shrink-0 ${getCourseBadgeColor(
                    currentCourse.id
                  )}`}
                >
                  {getCourseInitials(currentCourse)}
                </div>

                <div className="min-w-0 pr-1">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors truncate">
                      {currentCourse.code}
                    </span>
                    <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate max-w-[110px] sm:max-w-[180px]">
                    {currentCourse.englishTitle}
                  </span>
                </div>
              </button>

              {/* Course Dropdown Menu */}
              {isCourseDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsCourseDropdownOpen(false)}
                  />
                  <div className="absolute left-0 top-full mt-2 w-72 sm:w-84 max-h-96 overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-2 z-40 animate-fadeIn">
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between">
                      <span>Select Course ({allCourses.length} MoE)</span>
                      {onOpenDashboard && (
                        <button
                          onClick={() => {
                            setIsCourseDropdownOpen(false);
                            onOpenDashboard();
                          }}
                          className="text-emerald-600 dark:text-emerald-400 hover:underline capitalize"
                        >
                          View Stats
                        </button>
                      )}
                    </div>
                    {allCourses.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCourse(c.id);
                          setIsCourseDropdownOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded-xl transition-all flex items-start gap-2.5 mb-1 ${
                          c.id === currentCourse.id
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-200 font-semibold shadow-2xs'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white text-xs shrink-0 mt-0.5 ${getCourseBadgeColor(
                            c.id
                          )}`}
                        >
                          {getCourseInitials(c)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                              {c.code}
                            </span>
                            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-md font-medium text-slate-600 dark:text-slate-400">
                              {c.badge}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-800 dark:text-slate-200 truncate">
                            {c.englishTitle}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Center: Search Box (on md+ screens) */}
          <div className="hidden md:block relative flex-1 max-w-[200px] lg:max-w-xs">
            <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${currentCourse.code}...`}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-8 pr-6 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-850 dark:text-slate-100 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2 top-1.5 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Desktop Inline Controls: Language Mode + Audio + Font Size */}
          <div className="hidden lg:flex items-center gap-1.5 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              <button
                id="view-mode-side-by-side"
                onClick={() => onViewModeChange('side-by-side')}
                className={`px-2 py-0.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                  viewMode === 'side-by-side'
                    ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Languages className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>Dual</span>
              </button>
              <button
                id="view-mode-english"
                onClick={() => onViewModeChange('english')}
                className={`px-2 py-0.5 text-xs font-semibold rounded-md transition-all ${
                  viewMode === 'english'
                    ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                id="view-mode-amharic"
                onClick={() => onViewModeChange('amharic')}
                className={`px-2 py-0.5 text-xs font-semibold rounded-md font-amharic transition-all ${
                  viewMode === 'amharic'
                    ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                አማ
              </button>
            </div>

            {/* Audio Narration */}
            <button
              id="toggle-audio-narrator"
              onClick={onToggleAudio}
              className={`px-2 py-1 rounded-lg border text-xs font-medium flex items-center gap-1 transition-all ${
                isReadingAudio
                  ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 animate-pulse'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
              title="Read text aloud"
            >
              {isReadingAudio ? <VolumeX className="w-3 h-3 text-amber-600" /> : <Volume2 className="w-3 h-3" />}
              <span>{isReadingAudio ? 'Stop' : 'Audio'}</span>
            </button>

            {/* Font Size Adjuster */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => onFontSizeChange('sm')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  fontSize === 'sm' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-400'
                }`}
                title="Small text"
              >
                A
              </button>
              <button
                onClick={() => onFontSizeChange('md')}
                className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                  fontSize === 'md' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-400'
                }`}
                title="Medium text"
              >
                A+
              </button>
              <button
                onClick={() => onFontSizeChange('lg')}
                className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                  fontSize === 'lg' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-400'
                }`}
                title="Large text"
              >
                A++
              </button>
            </div>
          </div>

          {/* Right Action Tools: Safe Read + Theme + Dashboard + Glossary + Exam */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* SAFE READING MODE TOGGLE BUTTON (Primary Fix for Header Obstruction) */}
            {onToggleSafeReadingMode && (
              <button
                id="header-safe-reading-toggle"
                onClick={onToggleSafeReadingMode}
                className="px-2.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors shadow-2xs min-h-[38px]"
                title="Toggle Safe Reading View (አስተማማኝ ንባብ - Maximizes reading area without header clutter)"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="hidden sm:inline">Safe Read</span>
                <span className="sm:hidden font-amharic text-[11px]">ንባብ</span>
              </button>
            )}

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label="Toggle Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dark Mode Theme Toggle */}
            <button
              id="header-dark-mode-toggle"
              onClick={onToggleDarkMode}
              className={`p-1.5 rounded-xl border transition-all min-h-[38px] min-w-[38px] flex items-center justify-center shadow-2xs ${
                isDarkMode
                  ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-750'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title={isDarkMode ? 'Light Mode (የቀን ብርሃን)' : 'Dark Mode (ለሊት ጥናት)'}
              aria-label={isDarkMode ? 'Turn on light mode' : 'Turn on dark mode'}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* Dashboard & Stats Button */}
            {onOpenDashboard && (
              <button
                id="open-dashboard-header-button"
                onClick={onOpenDashboard}
                className="hidden sm:flex px-2 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-semibold items-center gap-1 shadow-2xs min-h-[38px]"
                title="Learning Dashboard & Analytics"
              >
                <BarChart3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Stats</span>
              </button>
            )}

            {/* Glossary Button */}
            <button
              id="open-glossary-modal"
              onClick={onOpenGlossary}
              className="hidden sm:flex px-2 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-medium items-center gap-1 shadow-2xs min-h-[38px]"
              title="Open Glossary (መዝገበ-ቃላት)"
            >
              <BookMarked className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Glossary</span>
            </button>

            {/* Mock Exam Button */}
            <button
              id="open-exam-simulator"
              onClick={onOpenExam}
              className="px-2.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1 transition-all shadow-xs min-h-[38px]"
              title="Practice Mock Exam"
            >
              <GraduationCap className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
              <span>Exam</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input Expanded */}
        {isMobileSearchOpen && (
          <div className="md:hidden relative pt-1.5 pb-1 animate-fadeIn">
            <Search className="absolute left-3 top-3.5 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${currentCourse.code}...`}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              autoFocus
              className="w-full pl-8 pr-8 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 dark:text-slate-100"
            />
            <button
              onClick={() => {
                onSearchChange('');
                setIsMobileSearchOpen(false);
              }}
              className="absolute right-3 top-3 text-xs text-slate-400"
            >
              ✕
            </button>
          </div>
        )}

        {/* Mobile Secondary Row: Language + Audio + Font Size (Only on < lg screens) */}
        <div className="lg:hidden flex items-center justify-between gap-1.5 pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-800 text-xs">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => onViewModeChange('side-by-side')}
              className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                viewMode === 'side-by-side'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Dual
            </button>
            <button
              onClick={() => onViewModeChange('english')}
              className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                viewMode === 'english'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onViewModeChange('amharic')}
              className={`px-2 py-0.5 rounded-md font-amharic font-semibold transition-all ${
                viewMode === 'amharic'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              አማ
            </button>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Audio */}
            <button
              onClick={onToggleAudio}
              className={`px-2 py-1 rounded-lg border text-xs font-medium flex items-center gap-1 ${
                isReadingAudio
                  ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 text-amber-800 dark:text-amber-300'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {isReadingAudio ? <VolumeX className="w-3 h-3 text-amber-600" /> : <Volume2 className="w-3 h-3" />}
              <span>{isReadingAudio ? 'Stop' : 'Audio'}</span>
            </button>

            {/* Font size */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-bold">
              <button
                onClick={() => onFontSizeChange('sm')}
                className={`px-1.5 py-0.5 rounded ${
                  fontSize === 'sm' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-400'
                }`}
              >
                A
              </button>
              <button
                onClick={() => onFontSizeChange('md')}
                className={`px-1.5 py-0.5 rounded ${
                  fontSize === 'md' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-400'
                }`}
              >
                A+
              </button>
              <button
                onClick={() => onFontSizeChange('lg')}
                className={`px-1.5 py-0.5 rounded ${
                  fontSize === 'lg' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-400'
                }`}
              >
                A++
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

