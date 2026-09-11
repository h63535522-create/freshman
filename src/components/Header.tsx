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
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  currentCourse: Course;
  allCourses: Course[];
  onSelectCourse: (courseId: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onOpenGlossary: () => void;
  onOpenExam: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  fontSize: 'sm' | 'md' | 'lg';
  onFontSizeChange: (size: 'sm' | 'md' | 'lg') => void;
  isReadingAudio: boolean;
  onToggleAudio: () => void;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCourse,
  allCourses,
  onSelectCourse,
  viewMode,
  onViewModeChange,
  onOpenGlossary,
  onOpenExam,
  searchQuery,
  onSearchChange,
  fontSize,
  onFontSizeChange,
  isReadingAudio,
  onToggleAudio,
  onToggleSidebar
}) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top University & Ministry Banner with Quick Course Switcher */}
      <div className="bg-gradient-to-r from-emerald-800 via-slate-850 to-indigo-900 text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2 font-medium tracking-wide truncate">
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-300 animate-pulse shrink-0"></span>
          <span className="truncate">FDRE MoSHE • Ethiopian Freshman University Curriculum</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-200 font-amharic text-xs shrink-0">
          <span className="hidden sm:inline">የመጀመሪያ ዓመት ኮርሶች</span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] text-white font-sans font-bold">
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
              className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
              aria-label="Open Curriculum Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Course Selector Pill Button */}
            <div className="relative">
              <button
                onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
                className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xs transition-all text-left group min-h-[42px]"
                aria-label="Switch Course"
              >
                {/* Icon Badge based on course */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-2xs shrink-0 ${
                    currentCourse.id === 'flen1011'
                      ? 'bg-gradient-to-tr from-blue-600 to-indigo-700'
                      : 'bg-gradient-to-tr from-emerald-600 to-teal-700'
                  }`}
                >
                  {currentCourse.id === 'flen1011' ? 'EN' : 'Ψ'}
                </div>

                <div className="min-w-0 pr-1">
                  <div className="flex items-center gap-1">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                      {currentCourse.code}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform" />
                  </div>
                  <span className="text-[10px] text-slate-500 block truncate max-w-[130px] sm:max-w-[190px]">
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
                  <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-40 animate-fadeIn">
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Select Freshman Course (ኮርስ ምረጥ)
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
                            ? 'bg-emerald-50 border border-emerald-300 text-emerald-950 font-semibold shadow-2xs'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs shrink-0 mt-0.5 ${
                            c.id === 'flen1011'
                              ? 'bg-indigo-600'
                              : 'bg-emerald-600'
                          }`}
                        >
                          {c.id === 'flen1011' ? 'EN' : 'Ψ'}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900">
                              {c.code}
                            </span>
                            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded-md font-medium text-slate-600">
                              {c.badge}
                            </span>
                          </div>
                          <div className="text-xs text-slate-800 truncate">
                            {c.englishTitle}
                          </div>
                          <div className="text-[11px] font-amharic text-slate-500 truncate">
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
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Toggle Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Glossary Button */}
            <button
              id="open-glossary-modal"
              onClick={onOpenGlossary}
              className="px-2 sm:px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1 transition-colors shadow-2xs min-h-[40px]"
              title="Open Glossary (መዝገበ-ቃላት)"
            >
              <BookMarked className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="hidden sm:inline">Glossary</span>
              <span className="sm:hidden font-amharic text-[11px]">ቃላት</span>
            </button>

            {/* Mock Exam Button */}
            <button
              id="open-exam-simulator"
              onClick={onOpenExam}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs min-h-[40px]"
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
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-3 text-xs text-slate-400"
              >
                ✕
              </button>
            ) : (
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="absolute right-3 top-3 text-xs text-slate-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Second Row: Language Mode Switcher + Audio + Font Size */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100 overflow-x-auto">
          {/* Language Switcher Tabs */}
          <div className="flex items-center bg-slate-100 p-0.5 sm:p-1 rounded-xl border border-slate-200 shrink-0">
            <button
              id="view-mode-side-by-side"
              onClick={() => onViewModeChange('side-by-side')}
              className={`px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${
                viewMode === 'side-by-side'
                  ? 'bg-white text-emerald-800 shadow-2xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Languages className="w-3.5 h-3.5 text-emerald-600" />
              <span>Dual</span>
              <span className="hidden sm:inline font-amharic text-[10px] text-emerald-700">(ሁለትዮሽ)</span>
            </button>
            <button
              id="view-mode-english"
              onClick={() => onViewModeChange('english')}
              className={`px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'english'
                  ? 'bg-white text-emerald-800 shadow-2xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              English
            </button>
            <button
              id="view-mode-amharic"
              onClick={() => onViewModeChange('amharic')}
              className={`px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-lg font-amharic transition-all ${
                viewMode === 'amharic'
                  ? 'bg-white text-emerald-800 shadow-2xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
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
                  ? 'bg-amber-100 border-amber-300 text-amber-800 animate-pulse'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title="Read text aloud"
            >
              {isReadingAudio ? <VolumeX className="w-3.5 h-3.5 text-amber-600" /> : <Volume2 className="w-3.5 h-3.5 text-slate-600" />}
              <span className="hidden sm:inline">{isReadingAudio ? 'Stop' : 'Audio'}</span>
            </button>

            {/* Font Size Adjuster */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
              <button
                onClick={() => onFontSizeChange('sm')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${fontSize === 'sm' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
                title="Small text"
              >
                A
              </button>
              <button
                onClick={() => onFontSizeChange('md')}
                className={`px-1.5 py-0.5 rounded text-xs font-bold ${fontSize === 'md' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
                title="Medium text"
              >
                A+
              </button>
              <button
                onClick={() => onFontSizeChange('lg')}
                className={`px-1.5 py-0.5 rounded text-xs font-bold ${fontSize === 'lg' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500'}`}
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
