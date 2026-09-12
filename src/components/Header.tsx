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
  BarChart3
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
  onToggleDarkMode
}) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  const getCourseBadgeColor = (courseId: string) => {
    if (courseId === 'phys1011') return 'bg-gradient-to-tr from-cyan-600 to-blue-800';
    if (courseId === 'flen1012') return 'bg-gradient-to-tr from-teal-600 to-cyan-700';
    if (courseId === 'flen1011') return 'bg-gradient-to-tr from-indigo-600 to-blue-700';
    if (courseId === 'psyc1011') return 'bg-gradient-to-tr from-emerald-600 to-teal-700';
    return 'bg-gradient-to-tr from-slate-700 to-slate-900';
  };

  const getCourseInitials = (course: Course) => {
    if (course.id === 'phys1011') return 'Φ';
    if (course.id === 'flen1012') return 'E2';
    if (course.id === 'flen1011') return 'E1';
    if (course.id === 'psyc1011') return 'Ψ';
    return course.code.slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
      {/* Top University & Ministry Banner with Quick Course Switcher */}
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-indigo-950 text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-1.5 sm:gap-2 font-medium tracking-wide truncate">
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse shrink-0"></span>
          <span className="truncate">FDRE MoE • Ethiopian Freshman University Curriculum</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-300 font-amharic text-xs shrink-0">
          <span className="hidden sm:inline">የመጀመሪያ ዓመት ኮርሶች</span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="bg-white/15 px-2 py-0.5 rounded-full text-[10px] text-white font-sans font-bold">
            {currentCourse.code}
          </span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Hamburger (Mobile) + Course Selector Dropdown */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 relative">
            {/* Mobile Drawer Trigger */}
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
              aria-label="Open Curriculum Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Course Selector Pill Button */}
            <div className="relative">
              <button
                onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
                className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-750 hover:shadow-xs transition-all text-left group min-h-[42px]"
                aria-label="Switch Course"
              >
                {/* Icon Badge based on course */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs sm:text-sm shadow-2xs shrink-0 ${getCourseBadgeColor(
                    currentCourse.id
                  )}`}
                >
                  {getCourseInitials(currentCourse)}
                </div>

                <div className="min-w-0 pr-1">
                  <div className="flex items-center gap-1">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors truncate">
                      {currentCourse.code}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-transform" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate max-w-[130px] sm:max-w-[200px]">
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
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 mb-1 ${
                          c.id === currentCourse.id
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-200 font-semibold shadow-2xs'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs shrink-0 mt-0.5 ${getCourseBadgeColor(
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
                          <div className="text-xs text-slate-800 dark:text-slate-200 truncate">
                            {c.englishTitle}
                          </div>
                          <div className="text-[11px] font-amharic text-slate-500 dark:text-slate-400 truncate">
                            {c.amharicTitle}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Center Search Input on Medium/Desktop */}
          <div className="hidden md:block relative flex-1 max-w-xs lg:max-w-sm">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${currentCourse.code} content, Q&A, notes (ፈልግ)...`}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-850 dark:text-slate-100 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* Right Action Tools: Dark Mode Toggle + Glossary + Exam */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Toggle Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dark Mode Theme Toggle Button */}
            <button
              id="header-dark-mode-toggle"
              onClick={onToggleDarkMode}
              className={`p-2 rounded-xl border transition-all min-h-[40px] min-w-[40px] flex items-center justify-center shadow-2xs ${
                isDarkMode
                  ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-750 hover:border-amber-500/40'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
              title={isDarkMode ? 'Switch to Light Mode (የቀን ብርሃን)' : 'Switch to Dark Mode (ለሊሊት ጥናት - Eye Strain Relief)'}
              aria-label={isDarkMode ? 'Turn on light mode' : 'Turn on dark mode'}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Dashboard & Stats Button */}
            {onOpenDashboard && (
              <button
                id="open-dashboard-header-button"
                onClick={onOpenDashboard}
                className="px-2 sm:px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs min-h-[40px]"
                title="Learning Dashboard & Analytics (ዳሽቦርድ)"
              >
                <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="hidden sm:inline">Dashboard</span>
                <span className="sm:hidden font-amharic text-[11px]">ዳሽቦርድ</span>
              </button>
            )}

            {/* Glossary Button */}
            <button
              id="open-glossary-modal"
              onClick={onOpenGlossary}
              className="px-2 sm:px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium flex items-center gap-1 transition-colors shadow-2xs min-h-[40px]"
              title="Open Glossary (መዝገበ-ቃላት)"
            >
              <BookMarked className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="hidden sm:inline">Glossary</span>
              <span className="sm:hidden font-amharic text-[11px]">ቃላት</span>
            </button>

            {/* Mock Exam Button */}
            <button
              id="open-exam-simulator"
              onClick={onOpenExam}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-650 dark:hover:bg-emerald-750 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs min-h-[40px]"
              title="Practice Mock Exam"
            >
              <GraduationCap className="w-4 h-4 text-yellow-300 shrink-0" />
              <span>Exam</span>
              <span className="hidden lg:inline font-amharic text-[11px] font-normal text-yellow-200">(ፈተና)</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input Expanded */}
        {isMobileSearchOpen && (
          <div className="md:hidden relative pt-1 pb-1 animate-fadeIn">
            <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${currentCourse.code} content (ፈልግ)...`}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              autoFocus
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-850 dark:text-slate-100"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            ) : (
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Second Row: Language Mode Switcher + Audio + Font Size */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100 dark:border-slate-800 overflow-x-auto">
          {/* Language Switcher Tabs */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 sm:p-1 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
            <button
              id="view-mode-side-by-side"
              onClick={() => onViewModeChange('side-by-side')}
              className={`px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${
                viewMode === 'side-by-side'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs border border-slate-200 dark:border-slate-600'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Languages className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Dual</span>
              <span className="hidden sm:inline font-amharic text-[10px] text-emerald-700 dark:text-emerald-400">(ሁለትዮሽ)</span>
            </button>
            <button
              id="view-mode-english"
              onClick={() => onViewModeChange('english')}
              className={`px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'english'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs border border-slate-200 dark:border-slate-600'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              English
            </button>
            <button
              id="view-mode-amharic"
              onClick={() => onViewModeChange('amharic')}
              className={`px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-lg font-amharic transition-all ${
                viewMode === 'amharic'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs border border-slate-200 dark:border-slate-600'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              አማርኛ
            </button>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Audio Speech Read Aloud Toggle */}
            <button
              id="toggle-audio-narrator"
              onClick={onToggleAudio}
              className={`px-2 py-1 rounded-lg border text-xs font-medium flex items-center gap-1 transition-all ${
                isReadingAudio
                  ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 animate-pulse'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
              title="Read text aloud"
            >
              {isReadingAudio ? (
                <VolumeX className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              )}
              <span className="hidden sm:inline">{isReadingAudio ? 'Stop' : 'Audio'}</span>
            </button>

            {/* Font Size Adjuster */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => onFontSizeChange('sm')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  fontSize === 'sm'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
                title="Small text"
              >
                A
              </button>
              <button
                onClick={() => onFontSizeChange('md')}
                className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                  fontSize === 'md'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
                title="Medium text"
              >
                A+
              </button>
              <button
                onClick={() => onFontSizeChange('lg')}
                className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                  fontSize === 'lg'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
                title="Large text"
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
