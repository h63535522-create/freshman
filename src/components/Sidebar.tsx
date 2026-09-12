import React, { useState } from 'react';
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
  ChevronDown
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
  const [isCoursePickerOpen, setIsCoursePickerOpen] = useState(false);

  const isEnglish2 = currentCourse.id === 'flen1012';
  const isEnglish1 = currentCourse.id === 'flen1011';
  const isPhysics = currentCourse.id === 'phys1011';
  const isEnglishCourse = isEnglish1 || isEnglish2;

  const getAccentColor = () => {
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

  return (
    <>
      {/* Mobile Backdrop Scrim */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer Container */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-30 w-80 max-w-[85vw] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Course Switcher in Sidebar Header */}
        <div className="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-850/90">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>MoSHE Courses ({allCourses.length})</span>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Dashboard Shortcut Button */}
          {onOpenDashboard && (
            <button
              onClick={() => {
                onOpenDashboard();
                onClose();
              }}
              className="w-full mb-2.5 py-1.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs font-bold flex items-center justify-between shadow-2xs transition-all min-h-[36px]"
            >
              <span className="flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-emerald-200" />
                <span>Learning Dashboard & Stats</span>
              </span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-amharic">
                ዳሽቦርድ
              </span>
            </button>
          )}

          {/* Collapsible Course Selector Dropdown Button */}
          <div className="relative mb-2">
            <button
              onClick={() => setIsCoursePickerOpen(!isCoursePickerOpen)}
              className="w-full flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-left transition-all"
            >
              <div className="min-w-0 pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {currentCourse.code}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                    {currentCourse.badge}
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                  {currentCourse.englishTitle}
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isCoursePickerOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Expanded Course Picker Dropdown List */}
            {isCoursePickerOpen && (
              <div className="mt-1.5 max-h-60 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl p-1.5 space-y-1 z-20">
                <div className="px-2 py-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Select from {allCourses.length} MoSHE Courses
                </div>
                {allCourses.map((c) => {
                  const isSelected = c.id === currentCourse.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        onSelectCourse(c.id);
                        setIsCoursePickerOpen(false);
                      }}
                      className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-700'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="truncate pr-1">
                        <span className="font-mono font-bold mr-1.5">{c.code}</span>
                        <span className="text-[11px] opacity-80">{c.englishTitle}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 shrink-0 font-sans">
                        {c.creditHours || 3}cr
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="text-[11px] font-amharic text-slate-500 dark:text-slate-400 truncate mb-1">
            {currentCourse.amharicTitle}
          </div>

          {/* Progress Tracker */}
          <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
            <span>Course Progress:</span>
            <span className={`font-bold ${
              accent === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
              accent === 'teal' ? 'text-teal-600 dark:text-teal-400' :
              accent === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
              'text-emerald-600 dark:text-emerald-400'
            }`}>
              {currentCourseCompletedCount} / {chapters.length} ({currentCoursePercent}%)
            </span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full mt-1 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                accent === 'cyan' ? 'bg-cyan-600 dark:bg-cyan-500' :
                accent === 'teal' ? 'bg-teal-600 dark:bg-teal-500' :
                accent === 'indigo' ? 'bg-indigo-600 dark:bg-indigo-500' :
                'bg-emerald-600 dark:bg-emerald-500'
              }`}
              style={{ width: `${currentCoursePercent}%` }}
            />
          </div>
        </div>

        {/* Scrollable Chapters/Units List */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {chapters.map((ch) => {
            const isSelected = ch.id === currentChapterId;
            const isCompleted = completedChapters.includes(ch.id);

            return (
              <button
                key={ch.id}
                id={`chapter-nav-${ch.id}`}
                onClick={() => {
                  onSelectChapter(ch.id);
                  onClose();
                }}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 group relative min-h-[48px] ${
                  isSelected
                    ? accent === 'cyan'
                      ? 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-950 dark:text-cyan-200 border border-cyan-300 dark:border-cyan-700 shadow-2xs'
                      : accent === 'teal'
                      ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-950 dark:text-teal-200 border border-teal-300 dark:border-teal-700 shadow-2xs'
                      : accent === 'indigo'
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-950 dark:text-indigo-200 border border-indigo-300 dark:border-indigo-700 shadow-2xs'
                      : 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 shadow-2xs'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-transparent'
                }`}
              >
                {/* Chapter Number Badge */}
                <div
                  className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 transition-colors ${
                    isSelected
                      ? accent === 'cyan'
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

                {/* Chapter Titles */}
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isSelected
                          ? accent === 'cyan'
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
                    {isCompleted && (
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded-md">
                        Done
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate mt-0.5 group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors">
                    {ch.title.en.replace(/^(Unit|Chapter)\s+\d+:\s*/i, '')}
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

        {/* Sidebar Footer with MoSHE Accreditation */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
            <GraduationCap className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
            <span>FDRE MoSHE Higher Education</span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2">
            Writing Team: Jimma, Bahir Dar, Addis Ababa, and Gondar Universities.
          </p>
        </div>
      </aside>
    </>
  );
};
