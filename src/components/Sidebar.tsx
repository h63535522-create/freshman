import React from 'react';
import { Chapter } from '../types';
import { Course } from '../data/coursesIndex';
import { BookOpen, CheckCircle2, ChevronRight, X, GraduationCap, Layers } from 'lucide-react';

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
  onClose
}) => {
  const isEnglishCourse = currentCourse.id === 'flen1011';

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

      {/* Drawer Container */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-30 w-80 max-w-[85vw] bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Course Switcher in Sidebar Header */}
        <div className="p-3.5 sm:p-4 border-b border-slate-100 bg-slate-50/90">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              <span>Courses (የኮርሶች ምርጫ)</span>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-xl hover:bg-slate-200 text-slate-600 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Course Tabs in Sidebar */}
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-200/70 rounded-xl mb-3">
            {allCourses.map((c) => (
              <button
                key={c.id}
                onClick={() => onSelectCourse(c.id)}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all truncate text-center ${
                  c.id === currentCourse.id
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {c.code}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-700 font-semibold truncate">
            {currentCourse.englishTitle}
          </div>
          <div className="text-[11px] font-amharic text-slate-500 truncate">
            {currentCourse.amharicTitle}
          </div>

          {/* Progress Tracker */}
          <div className="mt-3 text-xs text-slate-600 flex items-center justify-between">
            <span>Course Progress:</span>
            <span className="font-bold text-emerald-700">
              {completedChapters.length} / {chapters.length} (
              {Math.round((completedChapters.length / chapters.length) * 100)}%)
            </span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full mt-1 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isEnglishCourse ? 'bg-indigo-600' : 'bg-emerald-600'
              }`}
              style={{ width: `${(completedChapters.length / chapters.length) * 100}%` }}
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
                    ? isEnglishCourse
                      ? 'bg-indigo-50 text-indigo-950 border border-indigo-300 shadow-2xs'
                      : 'bg-emerald-50 text-emerald-950 border border-emerald-300 shadow-2xs'
                    : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                }`}
              >
                {/* Chapter Number Badge */}
                <div
                  className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 transition-colors ${
                    isSelected
                      ? isEnglishCourse
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-emerald-600 text-white shadow-2xs'
                      : isCompleted
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : ch.number}
                </div>

                {/* Chapter Titles */}
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isSelected
                          ? isEnglishCourse
                            ? 'text-indigo-700'
                            : 'text-emerald-700'
                          : 'text-slate-500'
                      }`}
                    >
                      {isEnglishCourse ? `Unit ${ch.number}` : `Chapter ${ch.number}`}
                    </span>
                    {isCompleted && (
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded-md">
                        Done
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-bold text-slate-900 truncate mt-0.5 group-hover:text-emerald-800 transition-colors">
                    {ch.title.en.replace(/^(Unit|Chapter)\s+\d+:\s*/i, '')}
                  </div>

                  <div className="text-[11px] font-amharic text-slate-500 truncate mt-0.5">
                    {ch.title.am.replace(/^(ክፍል|ምዕራፍ)\s+\d+[:፡]\s*/i, '')}
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 shrink-0 self-center transition-transform ${
                    isSelected ? 'text-slate-900 translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer with MoSHE Accreditation */}
        <div className="p-3 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500 space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-slate-700">
            <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>FDRE MoSHE Higher Education</span>
          </div>
          <p className="text-[10px] text-slate-500 line-clamp-2">
            Writing Team: Jimma, Bahir Dar, Addis Ababa, and Gondar Universities.
          </p>
        </div>
      </aside>
    </>
  );
};
