import React, { useState, useEffect, useRef } from 'react';
import { Chapter } from '../types';
import { Course } from '../data/coursesIndex';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  X,
  GraduationCap,
  Layers,
  BarChart3,
  Search,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  currentCourse: Course;
  allCourses: Course[];
  onSelectCourse: (courseId: string) => void;
  chapters: Chapter[];
  currentChapterId: number;
  onSelectChapter: (id: number) => void;
  completedChapters: number[];
  isOpen: boolean;
  onClose: () => void;
  onOpenDashboard?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentCourse,
  allCourses,
  onSelectCourse,
  chapters,
  currentChapterId,
  onSelectChapter,
  completedChapters,
  isOpen,
  onClose,
  onOpenDashboard
}) => {
  const [activeSidebarTab, setActiveSidebarTab] = useState<'chapters' | 'courses'>('chapters');
  const [courseSearchQuery, setCourseSearchQuery] = useState('');
  const [courseStreamTab, setCourseStreamTab] = useState<'all' | 'natural' | 'social' | 'common'>('all');
  const activeChapterRef = useRef<HTMLButtonElement | null>(null);

  // When active course changes, immediately show chapters of the new course
  useEffect(() => {
    setActiveSidebarTab('chapters');
  }, [currentCourse.id]);

  // Auto-scroll the active chapter into view smoothly
  useEffect(() => {
    if (activeSidebarTab === 'chapters' && activeChapterRef.current) {
      activeChapterRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [currentChapterId, activeSidebarTab]);

  const isMath = currentCourse.id === 'math1011' || currentCourse.id === 'math1014';
  const isEnglish2 = currentCourse.id === 'flen1012';
  const isEnglish1 = currentCourse.id === 'flen1011';
  const isPhysics = currentCourse.id === 'phys1011';
  const isEnglishCourse = isEnglish1 || isEnglish2;

  const getAccentColor = () => {
    if (isMath) return 'amber';
    if (isPhysics) return 'cyan';
    if (isEnglish2) return 'teal';
    if (isEnglish1) return 'indigo';
    return 'emerald';
  };

  const accent = getAccentColor();

  const currentCourseCompletedCount = chapters.filter((ch) =>
    completedChapters.includes(ch.id)
  ).length;

  const currentCoursePercent =
    chapters.length > 0
      ? Math.round((currentCourseCompletedCount / chapters.length) * 100)
      : 0;

  const getCourseBadgeColor = (courseId: string) => {
    if (courseId === 'math1011' || courseId === 'math1014') return 'bg-gradient-to-tr from-amber-600 to-orange-700';
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
    if (courseId === 'biol1012') return 'bg-gradient-to-tr from-emerald-600 to-green-700';
    return 'bg-gradient-to-tr from-slate-700 to-slate-900';
  };

  const getCourseInitials = (course: Course) => {
    if (course.id === 'math1011' || course.id === 'math1014') return '∑';
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
    if (course.id === 'biol1012') return 'Bio';
    return course.code.slice(0, 2);
  };

  return (
    <>
      {/* Mobile Backdrop Scrim */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer / Sticky Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-[68px] z-50 lg:z-20 w-80 max-w-[85vw] h-full lg:h-[calc(100vh-68px)] lg:self-start bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none shrink-0 overflow-hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Compact Sidebar Header */}
        <div className="p-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-850/95 shrink-0 space-y-2">
          {/* Top Label & Mobile Close Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>MoE Freshman Curriculum</span>
            </div>

            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Course Card with Quick Switch Button */}
          <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-2xs ${getCourseBadgeColor(
                    currentCourse.id
                  )}`}
                >
                  {getCourseInitials(currentCourse)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-900 dark:text-white">
                      {currentCourse.code}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {chapters.length} Ch
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[150px]">
                    {currentCourse.englishTitle}
                  </div>
                </div>
              </div>

              <button
                id="sidebar-change-course-btn"
                onClick={() => {
                  setActiveSidebarTab(activeSidebarTab === 'courses' ? 'chapters' : 'courses');
                }}
                className={`shrink-0 px-2 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
                  activeSidebarTab === 'courses'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900'
                }`}
              >
                {activeSidebarTab === 'courses' ? 'Chapters ▾' : 'Switch ▾'}
              </button>
            </div>
          </div>

          {/* Primary Sidebar Tabs: [Chapters] vs [All 17 Courses] */}
          <div className="grid grid-cols-2 gap-1 p-0.5 bg-slate-200/70 dark:bg-slate-800 rounded-xl text-xs font-bold">
            <button
              id="sidebar-tab-chapters"
              onClick={() => setActiveSidebarTab('chapters')}
              className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeSidebarTab === 'chapters'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Chapters ({chapters.length})</span>
            </button>

            <button
              id="sidebar-tab-courses"
              onClick={() => setActiveSidebarTab('courses')}
              className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeSidebarTab === 'courses'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Courses ({allCourses.length})</span>
            </button>
          </div>

          {/* Progress Tracker (shown in Chapters view) */}
          {activeSidebarTab === 'chapters' && (
            <div className="pt-0.5">
              <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Progress:</span>
                <span
                  className={`font-bold ${
                    accent === 'amber'
                      ? 'text-amber-600 dark:text-amber-400'
                      : accent === 'cyan'
                      ? 'text-cyan-600 dark:text-cyan-400'
                      : accent === 'teal'
                      ? 'text-teal-600 dark:text-teal-400'
                      : accent === 'indigo'
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  {currentCourseCompletedCount} of {chapters.length} ({currentCoursePercent}%)
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    accent === 'amber'
                      ? 'bg-amber-500 dark:bg-amber-400'
                      : accent === 'cyan'
                      ? 'bg-cyan-600 dark:bg-cyan-500'
                      : accent === 'teal'
                      ? 'bg-teal-600 dark:bg-teal-500'
                      : accent === 'indigo'
                      ? 'bg-indigo-600 dark:bg-indigo-500'
                      : 'bg-emerald-600 dark:bg-emerald-500'
                  }`}
                  style={{ width: `${currentCoursePercent}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Sidebar Body: Either Chapters List OR All Courses List */}
        {activeSidebarTab === 'courses' ? (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Non-scrolling filter controls */}
            <div className="p-2.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 shrink-0 space-y-2">
              {/* Search Input for Courses */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 17 courses (Math, Phys, Eng)..."
                  value={courseSearchQuery}
                  onChange={(e) => setCourseSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-7 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                />
                {courseSearchQuery && (
                  <button
                    onClick={() => setCourseSearchQuery('')}
                    className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Stream Filter Pills */}
              <div className="flex items-center gap-1 text-[11px] overflow-x-auto pb-0.5 scrollbar-none">
                {(
                  [
                    { id: 'all', label: `All (${allCourses.length})` },
                    { id: 'natural', label: '📐 Natural' },
                    { id: 'social', label: '⚖️ Social' },
                    { id: 'common', label: '🌐 Common' }
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setCourseStreamTab(tab.id)}
                    className={`px-2 py-0.5 rounded-md font-semibold whitespace-nowrap transition-colors ${
                      courseStreamTab === tab.id
                        ? 'bg-emerald-600 text-white shadow-2xs'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Single clean scrollable courses list */}
            <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5 overscroll-contain">
              {allCourses
                .filter((c) => {
                  const q = courseSearchQuery.toLowerCase().trim();
                  const matchesQuery =
                    !q ||
                    c.code.toLowerCase().includes(q) ||
                    c.englishTitle.toLowerCase().includes(q) ||
                    c.amharicTitle.includes(q) ||
                    c.stream.toLowerCase().includes(q);

                  if (!matchesQuery) return false;

                  if (courseStreamTab === 'natural') {
                    return (
                      c.stream.toLowerCase().includes('natural') ||
                      c.id === 'math1011' ||
                      c.id === 'math1014' ||
                      c.id === 'phys1011' ||
                      c.id === 'biol1012'
                    );
                  }
                  if (courseStreamTab === 'social') {
                    return (
                      c.stream.toLowerCase().includes('social') ||
                      c.id === 'anth1012' ||
                      c.id === 'econ1011' ||
                      c.id === 'mcde1012'
                    );
                  }
                  if (courseStreamTab === 'common') {
                    return (
                      c.stream.toLowerCase().includes('common') ||
                      ['flen1011', 'flen1012', 'psyc1011', 'phil1011', 'hist1012', 'gees1011', 'emte1012', 'snie1012', 'spsc1011', 'gltr1012', 'mgmt1012'].includes(c.id)
                    );
                  }
                  return true;
                })
                .map((c) => {
                  const isSelected = c.id === currentCourse.id;
                  return (
                    <button
                      key={c.id}
                      id={`sidebar-select-course-${c.id}`}
                      onClick={() => {
                        onSelectCourse(c.id);
                        setActiveSidebarTab('chapters');
                      }}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 group ${
                        isSelected
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 dark:border-emerald-600 shadow-xs'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white text-xs shrink-0 mt-0.5 shadow-2xs ${getCourseBadgeColor(
                          c.id
                        )}`}
                      >
                        {getCourseInitials(c)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-xs font-bold ${
                              isSelected
                                ? 'text-emerald-950 dark:text-emerald-200'
                                : 'text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                            }`}
                          >
                            {c.code}
                          </span>
                          <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-1.5 py-0.5 rounded font-medium shrink-0">
                            {c.chapters.length} Ch
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {c.englishTitle}
                        </div>
                        <div className="text-[10px] font-amharic text-slate-500 dark:text-slate-400 truncate">
                          {c.amharicTitle}
                        </div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        ) : (
          /* Single clean scrollable chapters list */
          <nav className="flex-1 overflow-y-auto p-2.5 space-y-1.5 overscroll-contain">
            {chapters.map((ch) => {
              const isSelected = ch.id === currentChapterId;
              const isCompleted = completedChapters.includes(ch.id);

              return (
                <button
                  key={ch.id}
                  id={`chapter-nav-${ch.id}`}
                  ref={isSelected ? activeChapterRef : null}
                  onClick={() => {
                    onSelectChapter(ch.id);
                    onClose();
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 group relative min-h-[46px] ${
                    isSelected
                      ? accent === 'amber'
                        ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-950 dark:text-amber-200 border-2 border-amber-500 dark:border-amber-600 shadow-2xs'
                        : accent === 'cyan'
                        ? 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-950 dark:text-cyan-200 border-2 border-cyan-500 dark:border-cyan-600 shadow-2xs'
                        : accent === 'teal'
                        ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-950 dark:text-teal-200 border-2 border-teal-500 dark:border-teal-600 shadow-2xs'
                        : accent === 'indigo'
                        ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-950 dark:text-indigo-200 border-2 border-indigo-500 dark:border-indigo-600 shadow-2xs'
                        : 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-200 border-2 border-emerald-500 dark:border-emerald-600 shadow-2xs'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-transparent'
                  }`}
                >
                  {/* Chapter Number Badge */}
                  <div
                    className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 transition-colors ${
                      isSelected
                        ? accent === 'amber'
                          ? 'bg-amber-600 text-white shadow-2xs'
                          : accent === 'cyan'
                          ? 'bg-cyan-600 text-white shadow-2xs'
                          : accent === 'teal'
                          ? 'bg-teal-600 text-white shadow-2xs'
                          : accent === 'indigo'
                          ? 'bg-indigo-600 text-white shadow-2xs'
                          : 'bg-emerald-600 text-white shadow-2xs'
                        : isCompleted
                        ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : ch.number}
                  </div>

                  {/* Chapter Titles & Info */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isSelected
                            ? accent === 'amber'
                              ? 'text-amber-700 dark:text-amber-400'
                              : accent === 'cyan'
                              ? 'text-cyan-700 dark:text-cyan-400'
                              : accent === 'teal'
                              ? 'text-teal-700 dark:text-teal-400'
                              : accent === 'indigo'
                              ? 'text-indigo-700 dark:text-indigo-400'
                              : 'text-emerald-700 dark:text-emerald-400'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {isEnglishCourse ? `Unit ${ch.number}` : `Chapter ${ch.number}`}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono font-medium">
                          {ch.sections.length} Sec
                        </span>
                        {isCompleted && (
                          <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded-md">
                            Done
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate mt-0.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                      {ch.title.en.replace(/^(Unit|Chapter)\s+\d+[:፡]\s*/i, '')}
                    </div>

                    <div className="text-[11px] font-amharic text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {ch.title.am.replace(/^(ክፍል|ምዕራፍ)\s+\d+[:፡]\s*/i, '')}
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 self-center transition-transform ${
                      isSelected
                        ? 'text-slate-900 dark:text-slate-100 translate-x-0.5'
                        : 'text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        )}

        {/* Compact Sidebar Footer */}
        <div className="p-2.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-[11px] text-slate-500 dark:text-slate-400 shrink-0 space-y-1.5">
          {onOpenDashboard && (
            <button
              onClick={() => {
                onOpenDashboard();
                onClose();
              }}
              className="w-full py-1 px-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Learning Dashboard</span>
              </span>
              <span className="text-[10px] opacity-80 font-amharic">
                ዳሽቦርድ
              </span>
            </button>
          )}

          <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 text-[10px]">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0" />
            <span>FDRE MoE / MoSHE University Curriculum</span>
          </div>
        </div>
      </aside>
    </>
  );
};
