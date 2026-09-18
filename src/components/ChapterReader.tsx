import React, { useState, useMemo, useEffect } from 'react';
import { Chapter, ViewMode, KeyTerm, ChapterPage } from '../types';
import { getChapterPages } from '../utils/chapterPagination';
import {
  Volume2,
  VolumeX,
  Lightbulb,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  LayoutList,
  Grid,
  Sparkles,
  HelpCircle,
  Eye,
  EyeOff,
  CheckCircle2,
  GraduationCap,
  Layers,
  ArrowRight,
  ArrowLeft,
  Table as TableIcon,
  FileText,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface ChapterReaderProps {
  chapter: Chapter;
  viewMode: ViewMode;
  fontSize: 'sm' | 'md' | 'lg';
  activeParagraphId: string | null;
  onHoverParagraph: (id: string | null) => void;
  onSpeakText: (text: string) => void;
  isAudioActive: boolean;
  bookmarkedParagraphs: string[];
  onToggleBookmark: (id: string) => void;
  isSafeReadingMode?: boolean;
  onToggleSafeReadingMode?: () => void;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  chapter,
  viewMode,
  fontSize,
  activeParagraphId,
  onHoverParagraph,
  onSpeakText,
  isAudioActive,
  bookmarkedParagraphs,
  onToggleBookmark,
  isSafeReadingMode = false,
  onToggleSafeReadingMode
}) => {
  // Generate at least 30 pages for the chapter safely
  const pages = useMemo(() => {
    if (!chapter) return [];
    try {
      const generated = getChapterPages(chapter);
      if (Array.isArray(generated) && generated.length > 0) {
        return generated;
      }
    } catch (e) {
      console.error('Error generating chapter pages:', e);
    }
    return [
      {
        pageNumber: 1,
        headerTitle: chapter?.title || { en: 'Chapter Overview', am: 'የምዕራፉ አጠቃላይ እይታ' },
        subtopic: { en: 'Course Content', am: 'የኮርሱ ይዘት' },
        pageType: 'content' as const,
        paragraphs: (chapter?.sections || []).flatMap((s) => s?.paragraphs || [])
      }
    ];
  }, [chapter]);
  const totalPages = Math.max(1, pages.length);

  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [layoutMode, setLayoutMode] = useState<'paginated' | 'continuous'>('paginated');
  const [isPageGridOpen, setIsPageGridOpen] = useState<boolean>(false);
  const [selectedTerm, setSelectedTerm] = useState<KeyTerm | null>(null);
  const [revealedSelfChecks, setRevealedSelfChecks] = useState<Record<number, boolean>>({});
  const [pageInputVal, setPageInputVal] = useState<string>('1');
  const [isOverviewExpanded, setIsOverviewExpanded] = useState<boolean>(false);
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

  // Reset to page 1 whenever chapter changes
  useEffect(() => {
    setCurrentPageNumber(1);
    setPageInputVal('1');
    setRevealedSelfChecks({});
  }, [chapter?.id]);

  // Keep page input in sync
  useEffect(() => {
    setPageInputVal(currentPageNumber.toString());
  }, [currentPageNumber]);

  // Keyboard navigation for page turning (Left/Right arrow keys) and Full Screen (F/Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentPageNumber < totalPages) {
          setCurrentPageNumber((p) => Math.min(totalPages, p + 1));
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentPageNumber > 1) {
          setCurrentPageNumber((p) => Math.max(1, p - 1));
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullScreen();
      } else if (e.key === 'Escape' && isFullScreen) {
        toggleFullScreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageNumber, totalPages, isFullScreen]);

  const currentPage = pages[currentPageNumber - 1] || pages[0] || {
    pageNumber: 1,
    headerTitle: chapter?.title || { en: 'Chapter Overview', am: 'የምዕራፉ አጠቃላይ እይታ' },
    subtopic: { en: 'Course Content', am: 'የኮርሱ ይዘት' },
    pageType: 'content' as const,
    paragraphs: []
  };

  const handlePageSelect = (pageNo: number) => {
    const clamped = Math.max(1, Math.min(totalPages, pageNo));
    setCurrentPageNumber(clamped);
    setIsPageGridOpen(false);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(pageInputVal, 10);
    if (!isNaN(val)) {
      handlePageSelect(val);
    }
  };

  const toggleSelfCheck = (pageNum: number) => {
    setRevealedSelfChecks((prev) => ({
      ...prev,
      [pageNum]: !prev[pageNum]
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

  const getPageTypeBadge = (type: ChapterPage['pageType']) => {
    switch (type) {
      case 'intro':
        return { label: 'Curriculum Standard', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' };
      case 'foundations':
        return { label: 'Foundations', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' };
      case 'case_study':
        return { label: 'Ethiopian Context & Case', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' };
      case 'activity':
        return { label: 'Self-Check Activity', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' };
      case 'lexicon':
        return { label: 'Bilingual Lexicon', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300' };
      case 'summary':
        return { label: 'Midterm Blueprint', color: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' };
      case 'review':
        return { label: 'Model Exam Practice', color: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' };
      case 'content':
      default:
        return { label: 'Core Theory', color: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300' };
    }
  };

  return (
    <div className={isFullScreen ? "fixed inset-0 z-50 bg-slate-100 dark:bg-slate-950 overflow-y-auto p-3 sm:p-6 md:p-8 space-y-4" : "space-y-4"}>
      {/* Immersive Full Screen Header */}
      {isFullScreen && (
        <div className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md p-2.5 sm:p-3 flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen</span>
            </span>
            <div className="min-w-0 truncate">
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate block">
                Ch. {chapter.number}: {currentPage.headerTitle.en}
              </span>
              <span className="text-[11px] text-slate-500 font-amharic truncate block sm:hidden">
                {currentPage.subtopic.am}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Previous Page Button in Full Screen Header */}
            <button
              onClick={() => handlePageSelect(currentPageNumber - 1)}
              disabled={currentPageNumber <= 1}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1 transition-colors"
              title="Previous Page (← Arrow Key)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">Prev Page</span>
            </button>

            {/* Page Counter Indicator */}
            <div className="px-2.5 sm:px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono font-bold text-xs text-slate-800 dark:text-slate-200">
              {currentPageNumber} / {totalPages}
            </div>

            {/* Next Page Button in Full Screen Header */}
            <button
              onClick={() => handlePageSelect(currentPageNumber + 1)}
              disabled={currentPageNumber >= totalPages}
              className="px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-white flex items-center gap-1 transition-colors shadow-xs"
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

      {/* Floating Side Navigation Buttons: Previous & Next Page */}
      {layoutMode === 'paginated' && (
        <>
          <button
            onClick={() => handlePageSelect(currentPageNumber - 1)}
            disabled={currentPageNumber <= 1}
            className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 shadow-xl hover:bg-emerald-50 dark:hover:bg-slate-800 hover:scale-105 disabled:opacity-0 disabled:pointer-events-none text-slate-800 dark:text-slate-100 flex items-center gap-1.5 transition-all group"
            title="Previous Page (← Arrow Key)"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400 group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden xl:inline text-xs font-bold font-mono">Prev</span>
          </button>

          <button
            onClick={() => handlePageSelect(currentPageNumber + 1)}
            disabled={currentPageNumber >= totalPages}
            className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 shadow-xl hover:bg-emerald-50 dark:hover:bg-slate-800 hover:scale-105 disabled:opacity-0 disabled:pointer-events-none text-slate-800 dark:text-slate-100 flex items-center gap-1.5 transition-all group"
            title="Next Page (→ Arrow Key)"
            aria-label="Next Page"
          >
            <span className="hidden xl:inline text-xs font-bold font-mono">Next</span>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </>
      )}
      {/* Chapter Title & Academic Metadata Banner (Collapsible to protect reading space) */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
                Chapter {chapter.number}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/30 text-emerald-300 font-semibold text-xs border border-emerald-500/30 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{totalPages} Official Pages</span>
              </span>
              <span className="text-xs text-slate-300">
                Author: <strong className="text-yellow-200">{chapter.universityAuthor}</strong>
              </span>
            </div>

            <button
              onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium flex items-center gap-1 transition-colors"
            >
              <span>{isOverviewExpanded ? 'Hide Overview ▴' : 'Show Overview & Outcomes ▾'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-0.5">
            {/* English Title */}
            <div>
              <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight">
                {chapter.title.en}
              </h2>
              {isOverviewExpanded && (
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed animate-fadeIn">
                  {chapter.overview.en}
                </p>
              )}
            </div>

            {/* Amharic Title */}
            <div className="font-amharic border-t md:border-t-0 md:border-l border-white/15 pt-2 md:pt-0 md:pl-4">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-yellow-100">
                {chapter.title.am}
              </h2>
              {isOverviewExpanded && (
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed animate-fadeIn">
                  {chapter.overview.am}
                </p>
              )}
            </div>
          </div>

          {/* Quick Learning Outcomes Preview (Expanded only) */}
          {isOverviewExpanded && (
            <div className="pt-3 border-t border-white/10 animate-fadeIn">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                <span>Modular Competencies (የምዕራፉ የመማር ግቦች)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                {(chapter?.learningOutcomes || []).slice(0, 4).map((lo, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white/5 rounded-xl p-2.5">
                    <span className="text-emerald-400 font-bold shrink-0">•</span>
                    <div>
                      <span className="text-slate-200 block">{lo.en}</span>
                      <span className="text-slate-400 font-amharic block mt-0.5">{lo.am}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 📖 TOP PAGINATION CONTROLS BAR (Relative, not sticky, to prevent covering reading text) */}
      <div className="relative z-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs p-2.5 sm:p-3 space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          {/* Left: Reading Mode Toggle & Grid Browser */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-0.5 sm:p-1 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setLayoutMode('paginated')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  layoutMode === 'paginated'
                    ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Single Page Book Mode"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Book ({totalPages}p)</span>
              </button>
              <button
                onClick={() => setLayoutMode('continuous')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  layoutMode === 'continuous'
                    ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Continuous Scroll through all pages"
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span>Scroll All</span>
              </button>
            </div>

            {/* Browse Pages Button */}
            <button
              onClick={() => setIsPageGridOpen(true)}
              className="px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors min-h-[32px]"
              title="Open full page index"
            >
              <Grid className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Index ({totalPages}p)</span>
            </button>

            {/* Safe Reading Mode Toggle */}
            {onToggleSafeReadingMode && (
              <button
                onClick={onToggleSafeReadingMode}
                className={`px-2.5 py-1 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all min-h-[32px] ${
                  isSafeReadingMode
                    ? 'bg-emerald-700 text-white border-emerald-600'
                    : 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100'
                }`}
                title="Safe Reading Mode (Removes all header obstruction)"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Safe Read</span>
              </button>
            )}

            {/* Full Screen Reading Mode Toggle Button */}
            <button
              onClick={toggleFullScreen}
              className={`px-2.5 py-1 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all min-h-[32px] ${
                isFullScreen
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
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
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Full Screen</span>
                </>
              )}
            </button>
          </div>

          {/* Right: Page Navigation (Prev, Jump Input, Next) */}
          <div className="flex items-center justify-between sm:justify-end gap-1.5">
            <button
              onClick={() => handlePageSelect(currentPageNumber - 1)}
              disabled={currentPageNumber <= 1}
              className="px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors min-h-[32px]"
              title="Previous Page (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Jump to Page Form */}
            <form onSubmit={handlePageInputSubmit} className="flex items-center gap-1 text-xs font-semibold">
              <input
                type="number"
                min={1}
                max={totalPages}
                value={pageInputVal}
                onChange={(e) => setPageInputVal(e.target.value)}
                onBlur={handlePageInputSubmit}
                className="w-11 px-1 py-0.5 text-center font-bold rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <span className="text-slate-500 dark:text-slate-400">/ {totalPages}</span>
            </form>

            <button
              onClick={() => handlePageSelect(currentPageNumber + 1)}
              disabled={currentPageNumber >= totalPages}
              className="px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors min-h-[32px]"
              title="Next Page (Right Arrow)"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Linear Page Progress Bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span className="font-medium truncate pr-2">
              Page {currentPageNumber}: {currentPage.subtopic.en}
            </span>
            <span className="shrink-0 font-mono font-bold text-emerald-700 dark:text-emerald-400">
              {Math.round((currentPageNumber / totalPages) * 100)}% Completed
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-emerald-600 dark:bg-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${(currentPageNumber / totalPages) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Landmark Page Shortcuts */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-semibold text-slate-600 dark:text-slate-400">
        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider shrink-0 mr-1">
          Quick Jump:
        </span>
        {[
          { label: 'p.1 Syllabus', page: 1 },
          { label: 'p.2 Foundations', page: 2 },
          { label: 'p.5 Core Concepts', page: 5 },
          { label: 'p.10 Theory', page: 10 },
          { label: 'p.15 Advanced', page: 15 },
          { label: 'p.20 In-Depth', page: 20 },
          { label: 'p.23 Ethiopian Context', page: 23 },
          { label: 'p.24 Case Study', page: 24 },
          { label: 'p.26 Self-Check', page: 26 },
          { label: 'p.28 Lexicon', page: 28 },
          { label: 'p.30 Blueprint', page: 30 },
          { label: 'p.31 Exam Prep', page: 31 }
        ].map((item) => (
          <button
            key={item.page}
            onClick={() => handlePageSelect(item.page)}
            className={`px-2.5 py-1 rounded-lg shrink-0 transition-colors ${
              currentPageNumber === item.page
                ? 'bg-emerald-700 text-white font-bold'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Selected Term Popover Bar */}
      {selectedTerm && (
        <div className="bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 rounded-2xl p-4 shadow-xs flex items-start justify-between gap-4 animate-fadeIn">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-amber-950 dark:text-amber-200 text-sm">{selectedTerm.en}</span>
              <span className="text-amber-800 dark:text-amber-300 font-amharic text-sm font-semibold">({selectedTerm.am})</span>
            </div>
            {selectedTerm.defEn && <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">{selectedTerm.defEn}</p>}
            {selectedTerm.defAm && <p className="text-xs text-slate-600 dark:text-slate-400 font-amharic mt-0.5">{selectedTerm.defAm}</p>}
          </div>
          <button
            onClick={() => setSelectedTerm(null)}
            className="text-amber-800 dark:text-amber-200 hover:text-amber-950 dark:hover:text-white text-xs font-bold px-2.5 py-1.5 bg-amber-200/70 dark:bg-amber-900/60 rounded-lg shrink-0 min-h-[36px] flex items-center transition-colors"
          >
            Close ✕
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* 📄 VIEW 1: PAGINATED BOOK MODE (1 Rich Page at a time)   */}
      {/* ========================================================= */}
      {layoutMode === 'paginated' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-850 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-7 md:p-8 space-y-6 relative">
            {/* Running Official Textbook Page Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-md font-mono font-bold bg-emerald-700 text-white text-[11px]">
                  PAGE {currentPage.pageNumber} OF {totalPages}
                </span>
                <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${getPageTypeBadge(currentPage.pageType).color}`}>
                  {getPageTypeBadge(currentPage.pageType).label}
                </span>
                <span className="text-slate-400 dark:text-slate-500">•</span>
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  FDRE Ministry of Education Standard Modular Curriculum
                </span>
              </div>

              <span className="text-slate-500 dark:text-slate-400 text-[11px] font-mono shrink-0">
                MoE Module Ref: Ch{chapter.number}.P{currentPage.pageNumber}
              </span>
            </div>

            {/* Page Topic Banner */}
            <div className="space-y-1">
              <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                {currentPage.sectionNumber ? `Section ${currentPage.sectionNumber}` : `Chapter ${chapter.number}`}
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                {currentPage.subtopic.en}
              </h2>
              <h3 className="text-base sm:text-lg font-amharic font-bold text-emerald-800 dark:text-emerald-400">
                {currentPage.subtopic.am}
              </h3>
            </div>

            {/* Page Study Tip Callout */}
            {currentPage.studyTip && (
              <div className="p-3 sm:p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 flex items-start gap-3 text-xs">
                <Lightbulb className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-emerald-900 dark:text-emerald-200 block">
                    Page Study Tip (የገጹ የትምህርት ማስታወሻ)
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">{currentPage.studyTip.en}</p>
                  <p className="font-amharic text-emerald-900/90 dark:text-emerald-300/90">{currentPage.studyTip.am}</p>
                </div>
              </div>
            )}

            {/* Page Paragraph Blocks (Bilingual Side-by-Side or Selected Mode) */}
            <div className="space-y-5">
              {(currentPage.paragraphs || []).map((para) => {
                const isHovered = activeParagraphId === para.id;
                const isBookmarked = bookmarkedParagraphs.includes(para.id);

                return (
                  <div
                    key={para.id}
                    id={para.id}
                    onMouseEnter={() => onHoverParagraph(para.id)}
                    onMouseLeave={() => onHoverParagraph(null)}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isHovered
                        ? 'border-emerald-400 dark:border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/30 shadow-xs ring-1 ring-emerald-300 dark:ring-emerald-600'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {/* Paragraph Utility Sub-Bar */}
                    <div className="px-3 sm:px-4 py-2 bg-slate-50/80 dark:bg-slate-850/80 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
                      <div className="flex items-center gap-1.5 font-medium truncate">
                        {para.subheading && (
                          <div className="truncate">
                            <span className="text-slate-800 dark:text-slate-200 font-semibold">{para.subheading.en}</span>
                            <span className="text-slate-400 dark:text-slate-600 mx-1.5">•</span>
                            <span className="font-amharic text-emerald-700 dark:text-emerald-400">{para.subheading.am}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        {/* Audio Narrate */}
                        <button
                          onClick={() => onSpeakText(para.en)}
                          className="hover:text-emerald-700 dark:hover:text-emerald-400 p-2 rounded-lg hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center text-slate-600 dark:text-slate-400"
                          title="Read English text aloud"
                          aria-label="Read paragraph aloud"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>

                        {/* Bookmark Button */}
                        <button
                          onClick={() => onToggleBookmark(para.id)}
                          className={`p-2 rounded-lg transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center ${
                            isBookmarked
                              ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60'
                              : 'hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}
                          title="Bookmark this paragraph"
                          aria-label="Bookmark paragraph"
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-600 dark:fill-amber-400 dark:text-amber-400" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-3 sm:p-5">
                      {viewMode === 'side-by-side' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
                          {/* English Block */}
                          <div className={`text-slate-800 dark:text-slate-200 ${getTextClass()} bg-slate-50/50 dark:bg-slate-850/50 md:bg-transparent dark:md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none border md:border-none border-slate-100 dark:border-slate-800`}>
                            <div className="flex items-center gap-1.5 mb-1.5 text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                              <span>English</span>
                            </div>
                            <p className="whitespace-pre-line text-justify leading-relaxed">
                              {para.en}
                            </p>

                            {/* In-line key terms */}
                            {para.highlightTerms && para.highlightTerms.length > 0 && (
                              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 flex-wrap">
                                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Terms:</span>
                                {(para.highlightTerms || []).map((t, tidx) => (
                                  <button
                                    key={tidx}
                                    onClick={() => setSelectedTerm(t)}
                                    className="px-2 py-1 rounded-lg bg-emerald-100/70 dark:bg-emerald-950/60 hover:bg-emerald-200 dark:hover:bg-emerald-900/80 text-emerald-900 dark:text-emerald-300 text-[11px] font-medium border border-emerald-200 dark:border-emerald-800 transition-colors min-h-[32px]"
                                  >
                                    {t.en} ({t.am})
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Amharic Block */}
                          <div className={`font-amharic text-slate-800 dark:text-slate-200 ${getTextClass()} bg-amber-50/30 dark:bg-slate-850/50 md:bg-transparent dark:md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none border md:border-l md:border-t-0 md:border-r-0 md:border-b-0 border-amber-100 dark:border-slate-800 md:border-slate-200 dark:md:border-slate-800 md:pl-6`}>
                            <div className="flex items-center gap-1.5 mb-1.5 text-[10px] sm:text-[11px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                              <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>
                              <span>አማርኛ</span>
                            </div>
                            <p className="whitespace-pre-line text-justify leading-relaxed">
                              {para.am}
                            </p>
                          </div>
                        </div>
                      )}

                      {viewMode === 'english' && (
                        <div className={`text-slate-800 dark:text-slate-200 ${getTextClass()}`}>
                          <p className="whitespace-pre-line text-justify leading-relaxed">
                            {para.en}
                          </p>
                          {para.highlightTerms && para.highlightTerms.length > 0 && (
                            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 flex-wrap">
                              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Terms:</span>
                              {(para.highlightTerms || []).map((t, tidx) => (
                                <button
                                  key={tidx}
                                  onClick={() => setSelectedTerm(t)}
                                  className="px-2.5 py-1 rounded-lg bg-emerald-100/70 dark:bg-emerald-950/60 hover:bg-emerald-200 dark:hover:bg-emerald-900/80 text-emerald-900 dark:text-emerald-300 text-xs font-medium border border-emerald-200 dark:border-emerald-800 transition-colors"
                                >
                                  {t.en} ({t.am})
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {viewMode === 'amharic' && (
                        <div className={`font-amharic text-slate-800 dark:text-slate-200 ${getTextClass()}`}>
                          <p className="whitespace-pre-line text-justify leading-relaxed">
                            {para.am}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* In-Text Self-Check Diagnostic Accordion */}
            {currentPage.selfCheckQuestion && (
              <div className="mt-6 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
                      Page {currentPage.pageNumber} In-Text Self-Check (የገጹ ራስን መመዘኛ ጥያቄ)
                    </span>
                  </div>
                  <button
                    onClick={() => toggleSelfCheck(currentPage.pageNumber)}
                    className="px-2.5 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/60 dark:hover:bg-blue-800/80 text-blue-900 dark:text-blue-200 text-xs font-semibold flex items-center gap-1 transition-colors min-h-[32px]"
                  >
                    {revealedSelfChecks[currentPage.pageNumber] ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hide Model Answer</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Reveal Model Answer</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-1">
                  <p className="font-semibold">{currentPage.selfCheckQuestion.qEn}</p>
                  <p className="font-amharic text-blue-950 dark:text-blue-200">{currentPage.selfCheckQuestion.qAm}</p>
                </div>

                {revealedSelfChecks[currentPage.pageNumber] && (
                  <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-900/60 text-xs sm:text-sm space-y-1 bg-white/70 dark:bg-slate-900/60 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Model Answer & University Rubric:</span>
                    </div>
                    <p className="text-slate-800 dark:text-slate-200">{currentPage.selfCheckQuestion.aEn}</p>
                    <p className="font-amharic text-emerald-900 dark:text-emerald-300">{currentPage.selfCheckQuestion.aAm}</p>
                  </div>
                )}
              </div>
            )}

            {/* Official In-Page Tables */}
            {currentPage.tables && currentPage.tables.length > 0 && (
              <div className="space-y-4 pt-2">
                {(currentPage.tables || []).map((tbl, tblIdx) => (
                  <div
                    key={tbl.id || tblIdx}
                    className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs"
                  >
                    <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                      <TableIcon className="w-4 h-4 text-emerald-600" />
                      <span>{tbl.caption}</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700">
                            {(tbl.headers || []).map((h, i) => (
                              <th key={i} className="px-3 py-2 font-bold text-slate-700 dark:text-slate-300">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {(tbl.rows || []).map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            >
                              {(Array.isArray(row) ? row : []).map((cell, cIdx) => (
                                <td key={cIdx} className="px-3 py-2 text-slate-800 dark:text-slate-200">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Official In-Page Formulas */}
            {currentPage.formulas && currentPage.formulas.length > 0 && (
              <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 space-y-2 text-xs">
                <span className="font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider block">
                  Mathematical Formulas in this Section
                </span>
                {(currentPage.formulas || []).map((f, idx) => (
                  <div key={idx} className="bg-white/80 dark:bg-slate-900/80 p-3 rounded-lg border border-purple-100 dark:border-purple-900 space-y-1">
                    <span className="font-bold text-slate-900 dark:text-white">{f.name}</span>
                    <code className="block font-mono bg-purple-100/60 dark:bg-purple-950 px-2 py-1 rounded text-purple-950 dark:text-purple-200 font-bold">
                      {f.formula}
                    </code>
                    <p className="text-slate-600 dark:text-slate-400">{f.explanation}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Official In-Page Activities */}
            {currentPage.activities && currentPage.activities.length > 0 && (
              <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2 text-xs">
                {(currentPage.activities || []).map((act, actIdx) => {
                  const tasks = act.tasksEn || act.questions || act.tasksAm || [];
                  const title = act.instructionsEn || act.title || 'Official In-Class Activity';
                  return (
                    <div key={act.id || actIdx} className="space-y-2">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-600" />
                        <span>Official In-Class Activity: {title}</span>
                      </div>
                      {tasks.length > 0 && (
                        <ul className="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                          {tasks.map((t, tidx) => (
                            <li key={tidx}>{t}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Official Review Questions */}
            {currentPage.reviewQuestions && currentPage.reviewQuestions.length > 0 && (
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 space-y-3 text-xs">
                {(currentPage.reviewQuestions || []).map((rq, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="font-bold text-blue-950 dark:text-blue-200 text-sm flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                      <span>{rq.title}</span>
                    </span>
                    <div className="space-y-1.5 pt-1">
                      {(rq.questions || []).map((q, qidx) => (
                        <div key={qidx} className="bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/50">
                          <p className="font-medium text-slate-800 dark:text-slate-200">{q}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Page Navigation Footnote & Turn Controls */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left space-y-0.5">
                <div className="font-semibold text-slate-700 dark:text-slate-300">
                  Chapter {chapter.number}: Page {currentPage.pageNumber} of {totalPages}
                </div>
                <div className="text-[11px] text-slate-400">
                  Tip: Press keyboard <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">→</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">F</kbd> for Full Screen
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => handlePageSelect(currentPageNumber - 1)}
                  disabled={currentPageNumber <= 1}
                  className="flex-1 sm:flex-initial px-5 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 disabled:opacity-30 disabled:cursor-not-allowed text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs min-h-[48px]"
                  title="Previous Page (← Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <div className="text-left">
                    <div>Previous Page</div>
                    <div className="text-[10px] text-slate-400 font-amharic font-normal">የቀደመው ገጽ (P. {Math.max(1, currentPageNumber - 1)})</div>
                  </div>
                </button>

                <button
                  onClick={() => handlePageSelect(currentPageNumber + 1)}
                  disabled={currentPageNumber >= totalPages}
                  className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all min-h-[48px]"
                  title="Next Page (→ Right Arrow)"
                >
                  <div className="text-right">
                    <div>Next Page</div>
                    <div className="text-[10px] text-emerald-200 font-amharic font-normal">ቀጣይ ገጽ (P. {Math.min(totalPages, currentPageNumber + 1)})</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-emerald-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 📜 VIEW 2: CONTINUOUS SCROLL MODE (All 30+ Pages with Separators) */}
      {/* ========================================================= */}
      {layoutMode === 'continuous' && (
        <div className="space-y-12">
          {pages.map((pg) => {
            const badge = getPageTypeBadge(pg.pageType);
            return (
              <article
                key={pg.pageNumber}
                id={`page-${pg.pageNumber}`}
                className="bg-white dark:bg-slate-850 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-7 md:p-8 space-y-6 relative"
              >
                {/* Official Page Banner */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-md font-mono font-bold bg-emerald-700 text-white text-[11px]">
                      PAGE {pg.pageNumber} OF {totalPages}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    Ch{chapter.number}.P{pg.pageNumber}
                  </span>
                </div>

                {/* Subtopic */}
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    {pg.subtopic.en}
                  </h2>
                  <h3 className="text-base font-amharic font-bold text-emerald-800 dark:text-emerald-400">
                    {pg.subtopic.am}
                  </h3>
                </div>

                {/* Study tip */}
                {pg.studyTip && (
                  <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5 text-xs">
                    <Lightbulb className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-bold text-emerald-900 dark:text-emerald-200">Study Tip:</span>
                      <p className="text-slate-700 dark:text-slate-300">{pg.studyTip.en}</p>
                    </div>
                  </div>
                )}

                {/* Paragraph Blocks */}
                <div className="space-y-4">
                  {(pg.paragraphs || []).map((para) => (
                    <div
                      key={para.id}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/50 space-y-3"
                    >
                      {para.subheading && (
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 flex-wrap">
                          <span>{para.subheading.en}</span>
                          <span className="text-slate-400">•</span>
                          <span className="font-amharic text-emerald-700 dark:text-emerald-400">{para.subheading.am}</span>
                        </div>
                      )}

                      {viewMode === 'side-by-side' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <p className={`text-slate-800 dark:text-slate-200 ${getTextClass()} leading-relaxed`}>
                            {para.en}
                          </p>
                          <p className={`font-amharic text-slate-800 dark:text-slate-200 ${getTextClass()} leading-relaxed border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 pt-2 md:pt-0 md:pl-4`}>
                            {para.am}
                          </p>
                        </div>
                      ) : viewMode === 'amharic' ? (
                        <p className={`font-amharic text-slate-800 dark:text-slate-200 ${getTextClass()} leading-relaxed`}>
                          {para.am}
                        </p>
                      ) : (
                        <p className={`text-slate-800 dark:text-slate-200 ${getTextClass()} leading-relaxed`}>
                          {para.en}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Self Check Question */}
                {pg.selfCheckQuestion && (
                  <div className="rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-3.5 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-900 dark:text-blue-300">Self-Check: {pg.selfCheckQuestion.qEn || (pg.selfCheckQuestion as any).question?.en}</span>
                      <button
                        onClick={() => toggleSelfCheck(pg.pageNumber)}
                        className="text-blue-700 dark:text-blue-400 hover:underline font-semibold"
                      >
                        {revealedSelfChecks[pg.pageNumber] ? 'Hide Answer' : 'Show Answer'}
                      </button>
                    </div>
                    {revealedSelfChecks[pg.pageNumber] && (
                      <p className="pt-2 border-t border-blue-200 dark:border-blue-900 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2 rounded-lg">
                        {pg.selfCheckQuestion.aEn || (pg.selfCheckQuestion as any).answer?.en}
                      </p>
                    )}
                  </div>
                )}

                {/* In-Page Tables (Continuous Mode) */}
                {pg.tables && pg.tables.length > 0 && (
                  <div className="space-y-4 pt-2">
                    {(pg.tables || []).map((tbl, tblIdx) => (
                      <div
                        key={tbl.id || tblIdx}
                        className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs"
                      >
                        <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                          <TableIcon className="w-4 h-4 text-emerald-600" />
                          <span>{tbl.caption}</span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700">
                                {(tbl.headers || []).map((h, i) => (
                                  <th key={i} className="px-3 py-2 font-bold text-slate-700 dark:text-slate-300">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {(tbl.rows || []).map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                  {(Array.isArray(row) ? row : []).map((cell, cIdx) => (
                                    <td key={cIdx} className="px-3 py-2 text-slate-800 dark:text-slate-200">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* In-Page Formulas (Continuous Mode) */}
                {pg.formulas && pg.formulas.length > 0 && (
                  <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 space-y-2 text-xs">
                    <span className="font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider block">
                      Mathematical Formulas
                    </span>
                    {(pg.formulas || []).map((f, idx) => (
                      <div key={idx} className="bg-white/80 dark:bg-slate-900/80 p-3 rounded-lg border border-purple-100 dark:border-purple-900 space-y-1">
                        <span className="font-bold text-slate-900 dark:text-white">{f.name}</span>
                        <code className="block font-mono bg-purple-100/60 dark:bg-purple-950 px-2 py-1 rounded text-purple-950 dark:text-purple-200 font-bold">
                          {f.formula}
                        </code>
                        <p className="text-slate-600 dark:text-slate-400">{f.explanation}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* In-Page Activities (Continuous Mode) */}
                {pg.activities && pg.activities.length > 0 && (
                  <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2 text-xs">
                    {(pg.activities || []).map((act, actIdx) => {
                      const tasks = act.tasksEn || act.questions || act.tasksAm || [];
                      const title = act.instructionsEn || act.title || 'Official Activity';
                      return (
                        <div key={act.id || actIdx} className="space-y-2">
                          <div className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-emerald-600" />
                            <span>Activity: {title}</span>
                          </div>
                          {tasks.length > 0 && (
                            <ul className="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                              {tasks.map((t, tidx) => (
                                <li key={tidx}>{t}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* In-Page Review Questions (Continuous Mode) */}
                {pg.reviewQuestions && pg.reviewQuestions.length > 0 && (
                  <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 space-y-3 text-xs">
                    {(pg.reviewQuestions || []).map((rq, idx) => (
                      <div key={idx} className="space-y-2">
                        <span className="font-bold text-blue-950 dark:text-blue-200 text-sm flex items-center gap-1.5">
                          <HelpCircle className="w-4 h-4 text-blue-600" />
                          <span>{rq.title}</span>
                        </span>
                        <div className="space-y-1.5 pt-1">
                          {(rq.questions || []).map((q, qidx) => (
                            <div key={qidx} className="bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/50">
                              <p className="font-medium text-slate-800 dark:text-slate-200">{q}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Page Bottom Marker */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-center text-xs font-mono text-slate-400">
                  ─── Page {pg.pageNumber} of {totalPages} ───
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* ========================================================= */}
      {/* 📑 30+ PAGE DIRECTORY MODAL / DRAWER                      */}
      {/* ========================================================= */}
      {isPageGridOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Chapter {chapter.number} Page Index ({totalPages} Pages)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Click any page card to jump directly into that section of the modular textbook.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPageGridOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-750 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-sm transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Body: Grid of all 30+ pages */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {(pages || []).map((pg) => {
                const isSelected = pg.pageNumber === currentPageNumber;
                const badge = getPageTypeBadge(pg.pageType);

                return (
                  <button
                    key={pg.pageNumber}
                    onClick={() => handlePageSelect(pg.pageNumber)}
                    className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between gap-2 min-h-[90px] ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 dark:bg-emerald-950/40 ring-2 ring-emerald-500'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono font-bold text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                        Page {pg.pageNumber}
                      </span>
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-100 line-clamp-1">
                        {pg.subtopic?.en || pg.headerTitle?.en || `Page ${pg.pageNumber}`}
                      </p>
                      <p className="text-[11px] font-amharic text-slate-500 dark:text-slate-400 line-clamp-1">
                        {pg.subtopic?.am || pg.headerTitle?.am || ''}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between text-xs text-slate-500">
              <span>Tip: Use keyboard ← and → arrow keys while reading to flip through pages!</span>
              <button
                onClick={() => setIsPageGridOpen(false)}
                className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition-colors"
              >
                Close Index
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Page Navigator (Unobtrusive, quick flipping & scroll to top) */}
      <div className="fixed bottom-4 right-4 z-30 flex items-center gap-1 p-1 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 shadow-lg text-xs">
        <button
          onClick={() => handlePageSelect(currentPageNumber - 1)}
          disabled={currentPageNumber <= 1}
          className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-700 dark:text-slate-200 transition-colors"
          title="Previous Page"
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-mono font-bold px-2 text-slate-800 dark:text-slate-200">
          {currentPageNumber} / {totalPages}
        </span>
        <button
          onClick={() => handlePageSelect(currentPageNumber + 1)}
          disabled={currentPageNumber >= totalPages}
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
