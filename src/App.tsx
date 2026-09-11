import React, { useState, useEffect, useMemo } from 'react';
import { allCourses, Course } from './data/coursesIndex';
import { ViewMode, ActiveTab } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ChapterReader } from './components/ChapterReader';
import { SummarySection } from './components/SummarySection';
import { QnASection } from './components/QnASection';
import { ExercisesSection } from './components/ExercisesSection';
import { FlashcardsModal } from './components/FlashcardsModal';
import { GlossaryModal } from './components/GlossaryModal';
import { ExamModeModal } from './components/ExamModeModal';
import {
  BookOpen,
  FileText,
  HelpCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  Menu,
  CheckCircle2,
  Search,
  Layers,
  Sparkles
} from 'lucide-react';

export default function App() {
  // Course State (default to Communicative English FLEn 1011 or saved choice)
  const [currentCourseId, setCurrentCourseId] = useState<string>(() => {
    try {
      return localStorage.getItem('moshe_active_course_id') || 'flen1011';
    } catch {
      return 'flen1011';
    }
  });

  const currentCourse = useMemo(() => {
    return allCourses.find((c) => c.id === currentCourseId) || allCourses[0];
  }, [currentCourseId]);

  // Navigation & View States
  const [currentChapterId, setCurrentChapterId] = useState<number>(() => {
    return currentCourse.chapters[0]?.id || 101;
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('reader');
  const [viewMode, setViewMode] = useState<ViewMode>('side-by-side');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [activeParagraphId, setActiveParagraphId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Modals
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isExamOpen, setIsExamOpen] = useState<boolean>(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState<boolean>(false);

  // Audio Speech Synthesis state
  const [isReadingAudio, setIsReadingAudio] = useState<boolean>(false);

  // User Local Storage Persistence
  const [bookmarkedParagraphs, setBookmarkedParagraphs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('moshe_courses_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [completedChapters, setCompletedChapters] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('moshe_courses_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('moshe_active_course_id', currentCourseId);
    } catch (e) {}
  }, [currentCourseId]);

  useEffect(() => {
    try {
      localStorage.setItem('moshe_courses_bookmarks', JSON.stringify(bookmarkedParagraphs));
    } catch (e) {}
  }, [bookmarkedParagraphs]);

  useEffect(() => {
    try {
      localStorage.setItem('moshe_courses_completed', JSON.stringify(completedChapters));
    } catch (e) {}
  }, [completedChapters]);

  // Current Chapter derived from active course
  const currentChapter = useMemo(() => {
    const found = currentCourse.chapters.find((c) => c.id === currentChapterId);
    return found || currentCourse.chapters[0];
  }, [currentCourse, currentChapterId]);

  // When switching courses, automatically point to that course's first chapter
  const handleSelectCourse = (courseId: string) => {
    setCurrentCourseId(courseId);
    const targetCourse = allCourses.find((c) => c.id === courseId) || allCourses[0];
    if (targetCourse.chapters.length > 0) {
      setCurrentChapterId(targetCourse.chapters[0].id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Audio synthesis
  const handleSpeakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    if (isReadingAudio) {
      setIsReadingAudio(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.onend = () => setIsReadingAudio(false);
    utterance.onerror = () => setIsReadingAudio(false);

    setIsReadingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleToggleAudio = () => {
    if (isReadingAudio) {
      window.speechSynthesis.cancel();
      setIsReadingAudio(false);
    } else {
      // Speak the current chapter overview
      handleSpeakText(currentChapter.overview.en);
    }
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarkedParagraphs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleCompleteChapter = () => {
    setCompletedChapters((prev) =>
      prev.includes(currentChapter.id)
        ? prev.filter((id) => id !== currentChapter.id)
        : [...prev, currentChapter.id]
    );
  };

  const currentChapterIndex = currentCourse.chapters.findIndex((c) => c.id === currentChapter.id);

  const goToNextChapter = () => {
    if (currentChapterIndex < currentCourse.chapters.length - 1) {
      const nextCh = currentCourse.chapters[currentChapterIndex + 1];
      setCurrentChapterId(nextCh.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevChapter = () => {
    if (currentChapterIndex > 0) {
      const prevCh = currentCourse.chapters[currentChapterIndex - 1];
      setCurrentChapterId(prevCh.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Search Results across active course first, and other freshman course
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results: {
      courseId: string;
      chapterId: number;
      title: string;
      matchText: string;
      type: string;
    }[] = [];

    // Search in current course first
    allCourses.forEach((c) => {
      c.chapters.forEach((ch) => {
        // Match in sections
        ch.sections.forEach((sec) => {
          sec.paragraphs.forEach((p) => {
            if (p.en.toLowerCase().includes(query) || p.am.includes(query)) {
              results.push({
                courseId: c.id,
                chapterId: ch.id,
                title: `${c.code} • ${ch.title.en.split(':')[0]}: ${sec.title.en}`,
                matchText: p.en.slice(0, 90) + '...',
                type: 'Reading Section'
              });
            }
          });
        });

        // Match in QnA
        ch.qna.forEach((q) => {
          if (
            q.question.en.toLowerCase().includes(query) ||
            q.question.am.includes(query) ||
            q.answer.en.toLowerCase().includes(query)
          ) {
            results.push({
              courseId: c.id,
              chapterId: ch.id,
              title: `${c.code} • ${ch.title.en.split(':')[0]} Q&A: ${q.question.en.slice(0, 50)}...`,
              matchText: q.answer.en.slice(0, 80) + '...',
              type: 'Q&A'
            });
          }
        });
      });
    });

    return results.slice(0, 8);
  }, [searchQuery]);

  const isEnglishCourse = currentCourse.id === 'flen1011';
  const unitOrChapterLabel = isEnglishCourse ? 'Unit' : 'Chapter';

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      {/* Top Application Header */}
      <Header
        currentCourse={currentCourse}
        allCourses={allCourses}
        onSelectCourse={handleSelectCourse}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenExam={() => setIsExamOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        isReadingAudio={isReadingAudio}
        onToggleAudio={handleToggleAudio}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* Instant Search Results Floating Dropdown */}
      {searchQuery && (
        <div className="max-w-4xl mx-auto w-full px-3 sm:px-4 relative z-40">
          <div className="absolute top-2 left-3 right-3 sm:left-4 sm:right-4 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 sm:p-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-100">
              <span className="flex items-center gap-1.5 truncate">
                <Search className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Results for "{searchQuery}" ({searchResults.length})</span>
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400">
                No matching topics found for "{searchQuery}".
              </div>
            ) : (
              <div className="divide-y divide-slate-100 mt-2">
                {searchResults.map((res, ridx) => (
                  <button
                    key={ridx}
                    onClick={() => {
                      if (res.courseId !== currentCourseId) {
                        setCurrentCourseId(res.courseId);
                      }
                      setCurrentChapterId(res.chapterId);
                      setSearchQuery('');
                    }}
                    className="w-full text-left py-2.5 px-2 hover:bg-emerald-50/60 rounded-xl transition-colors group flex items-start justify-between gap-3 min-h-[44px]"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                        {res.title}
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">
                        {res.matchText}
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                      {res.type}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Body Container with Sidebar + Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Left Navigation Sidebar */}
        <Sidebar
          currentCourse={currentCourse}
          allCourses={allCourses}
          onSelectCourse={handleSelectCourse}
          chapters={currentCourse.chapters}
          currentChapterId={currentChapter.id}
          onSelectChapter={(id) => {
            setCurrentChapterId(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          completedChapters={completedChapters}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Right Main Content Area */}
        <main className="flex-1 min-w-0 p-3 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 pb-24 lg:pb-10">
          {/* Mobile Quick Chapter/Unit Selector Strip */}
          <div className="lg:hidden flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-bold flex items-center gap-1.5 min-h-[38px]"
            >
              <Menu className="w-4 h-4 text-emerald-700" />
              <span>
                {currentCourse.code} • {unitOrChapterLabel} {currentChapter.number} of {currentCourse.chapters.length} (ቀይር)
              </span>
            </button>

            <button
              onClick={handleToggleCompleteChapter}
              className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                completedChapters.includes(currentChapter.id)
                  ? 'text-emerald-700 bg-emerald-50'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-[11px] hidden sm:inline">
                {completedChapters.includes(currentChapter.id) ? 'Done' : 'Mark'}
              </span>
            </button>
          </div>

          {/* Functional Tabs Bar (Reader, Summary, Q&A, Exercises) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-1.5 sm:p-2 shadow-xs flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1 sm:gap-1.5">
              {/* Tab: Reader */}
              <button
                id="tab-reader"
                onClick={() => setActiveTab('reader')}
                className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 sm:gap-2 transition-all whitespace-nowrap min-h-[40px] ${
                  activeTab === 'reader'
                    ? isEnglishCourse
                      ? 'bg-indigo-700 text-white shadow-2xs'
                      : 'bg-emerald-700 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Reader</span>
                <span className="hidden md:inline font-amharic text-[11px] font-normal opacity-90">
                  (ሁለትዮሽ ንባብ)
                </span>
              </button>

              {/* Tab: Summary */}
              <button
                id="tab-summary"
                onClick={() => setActiveTab('summary')}
                className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 sm:gap-2 transition-all whitespace-nowrap min-h-[40px] ${
                  activeTab === 'summary'
                    ? 'bg-amber-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Notes</span>
                <span className="hidden md:inline font-amharic text-[11px] font-normal text-amber-100">
                  (ማጠቃለያ)
                </span>
              </button>

              {/* Tab: Q&A */}
              <button
                id="tab-qna"
                onClick={() => setActiveTab('qna')}
                className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 sm:gap-2 transition-all whitespace-nowrap min-h-[40px] ${
                  activeTab === 'qna'
                    ? 'bg-blue-700 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>Q&A</span>
                <span className="hidden md:inline font-amharic text-[11px] font-normal text-blue-100">
                  (ጥያቄና መልስ)
                </span>
              </button>

              {/* Tab: Exercises */}
              <button
                id="tab-exercises"
                onClick={() => setActiveTab('exercises')}
                className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 sm:gap-2 transition-all whitespace-nowrap min-h-[40px] ${
                  activeTab === 'exercises'
                    ? 'bg-purple-700 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Award className="w-4 h-4 shrink-0" />
                <span>Tests</span>
                <span className="hidden md:inline font-amharic text-[11px] font-normal text-purple-100">
                  (ልምምድ)
                </span>
              </button>
            </div>

            {/* Desktop Mark as Completed Button */}
            <button
              onClick={handleToggleCompleteChapter}
              className={`hidden sm:flex px-3 py-1.5 rounded-xl border text-xs font-bold items-center gap-1.5 shrink-0 transition-colors min-h-[40px] ${
                completedChapters.includes(currentChapter.id)
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 ${
                  completedChapters.includes(currentChapter.id)
                    ? 'text-emerald-600'
                    : 'text-slate-400'
                }`}
              />
              <span>
                {completedChapters.includes(currentChapter.id) ? 'Completed' : 'Mark as Read'}
              </span>
            </button>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'reader' && (
            <ChapterReader
              chapter={currentChapter}
              viewMode={viewMode}
              fontSize={fontSize}
              activeParagraphId={activeParagraphId}
              onHoverParagraph={setActiveParagraphId}
              onSpeakText={handleSpeakText}
              isAudioActive={isReadingAudio}
              bookmarkedParagraphs={bookmarkedParagraphs}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {activeTab === 'summary' && (
            <SummarySection chapter={currentChapter} />
          )}

          {activeTab === 'qna' && (
            <QnASection chapter={currentChapter} />
          )}

          {activeTab === 'exercises' && (
            <ExercisesSection
              chapter={currentChapter}
              onOpenFlashcards={() => setIsFlashcardsOpen(true)}
            />
          )}

          {/* Bottom Pagination Bar */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={goToPrevChapter}
              disabled={currentChapterIndex === 0}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-30 text-slate-700 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs transition-all min-h-[44px]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>
                Previous {unitOrChapterLabel} (
                {Math.max(1, currentChapter.number - 1)})
              </span>
            </button>

            <div className="text-xs text-slate-500 text-center font-medium">
              <span>
                {currentCourse.code} • {unitOrChapterLabel} {currentChapter.number} of {currentCourse.chapters.length}
              </span>
              <span className="mx-2">•</span>
              <span className="font-amharic">የኢትዮጵያ ዩኒቨርሲቲ ሞጁል</span>
            </div>

            <button
              onClick={goToNextChapter}
              disabled={currentChapterIndex === currentCourse.chapters.length - 1}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all min-h-[44px]"
            >
              <span>
                Next {unitOrChapterLabel} (
                {Math.min(currentCourse.chapters.length, currentChapter.number + 1)})
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1 flex items-center justify-around shadow-lg"
      >
        <button
          onClick={() => {
            setActiveTab('reader');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-colors min-h-[48px] ${
            activeTab === 'reader'
              ? isEnglishCourse
                ? 'text-indigo-700 font-bold'
                : 'text-emerald-700 font-bold'
              : 'text-slate-500'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Reader</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('summary');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-colors min-h-[48px] ${
            activeTab === 'summary' ? 'text-amber-600 font-bold' : 'text-slate-500'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Summary</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('qna');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-colors min-h-[48px] ${
            activeTab === 'qna' ? 'text-blue-700 font-bold' : 'text-slate-500'
          }`}
        >
          <HelpCircle className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Q&A</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('exercises');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-colors min-h-[48px] ${
            activeTab === 'exercises' ? 'text-purple-700 font-bold' : 'text-slate-500'
          }`}
        >
          <Award className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Quiz</span>
        </button>

        <button
          onClick={() => setIsSidebarOpen(true)}
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-slate-600 hover:text-emerald-700 transition-colors min-h-[48px]"
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Courses</span>
        </button>
      </nav>

      {/* Modals */}
      <FlashcardsModal
        flashcards={currentChapter.flashcards}
        isOpen={isFlashcardsOpen}
        onClose={() => setIsFlashcardsOpen(false)}
        chapterNumber={currentChapter.number}
      />

      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        onSpeakText={handleSpeakText}
      />

      <ExamModeModal
        isOpen={isExamOpen}
        onClose={() => setIsExamOpen(false)}
        currentCourse={currentCourse}
      />
    </div>
  );
}
