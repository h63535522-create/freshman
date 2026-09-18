import React, { useState, useMemo } from 'react';
import { Course } from '../types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  GraduationCap,
  CheckCircle2,
  Circle,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  Search,
  Filter,
  Layers,
  Award,
  BookOpen,
  ChevronRight,
  TrendingUp,
  DownloadCloud
} from 'lucide-react';

interface DashboardSectionProps {
  allCourses: Course[];
  currentCourse: Course;
  onSelectCourse: (courseId: string) => void;
  onSelectChapterAndNavigate: (courseId: string, chapterId: number) => void;
  completedChapters: number[];
  onToggleChapterCompletion: (chapterId: number) => void;
  bookmarkedParagraphsCount: number;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  allCourses,
  currentCourse,
  onSelectCourse,
  onSelectChapterAndNavigate,
  completedChapters,
  onToggleChapterCompletion,
  bookmarkedParagraphsCount
}) => {
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  const [courseSearch, setCourseSearch] = useState<string>('');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  // Compute stats across all MoE courses
  const stats = useMemo(() => {
    let totalChaptersCount = 0;
    let completedChaptersCount = 0;
    let totalCredits = 0;
    let completedCredits = 0;

    allCourses.forEach((c) => {
      const courseChapterIds = c.chapters.map((ch) => ch.id);
      const doneCount = courseChapterIds.filter((id) => completedChapters.includes(id)).length;
      totalChaptersCount += c.chapters.length;
      completedChaptersCount += doneCount;

      const credits = c.creditHours || 3;
      totalCredits += credits;
      if (doneCount === c.chapters.length && c.chapters.length > 0) {
        completedCredits += credits;
      } else if (c.chapters.length > 0) {
        completedCredits += Math.round((doneCount / c.chapters.length) * credits * 10) / 10;
      }
    });

    const completionRate = totalChaptersCount > 0
      ? Math.round((completedChaptersCount / totalChaptersCount) * 100)
      : 0;

    return {
      totalCourses: allCourses.length,
      totalChaptersCount,
      completedChaptersCount,
      remainingChaptersCount: totalChaptersCount - completedChaptersCount,
      totalCredits,
      completedCredits: Math.round(completedCredits * 10) / 10,
      completionRate
    };
  }, [allCourses, completedChapters]);

  // Chart 1: Per-Course Completed vs Remaining Chapters Data
  const courseCompletionChartData = useMemo(() => {
    return allCourses.map((c) => {
      const courseChapterIds = c.chapters.map((ch) => ch.id);
      const done = courseChapterIds.filter((id) => completedChapters.includes(id)).length;
      const total = c.chapters.length;
      const remaining = total - done;
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;

      return {
        code: c.code,
        name: c.englishTitle,
        amharicName: c.amharicTitle,
        Completed: done,
        Remaining: remaining,
        Total: total,
        Percent: pct,
        semester: c.semester || 'Common'
      };
    });
  }, [allCourses, completedChapters]);

  // Chart 2: Degree Progress Donut Data
  const donutData = useMemo(() => {
    return [
      { name: 'Completed Chapters', value: stats.completedChaptersCount, color: '#10b981' },
      { name: 'Remaining Chapters', value: stats.remainingChaptersCount, color: '#94a3b8' }
    ];
  }, [stats]);

  // Chart 3: Semester Progress Data
  const semesterChartData = useMemo(() => {
    const sem1 = allCourses.filter((c) => c.semester?.includes('1'));
    const sem2 = allCourses.filter((c) => c.semester?.includes('2'));

    const calcDone = (courses: Course[]) => {
      let total = 0;
      let done = 0;
      courses.forEach((c) => {
        total += c.chapters.length;
        done += c.chapters.filter((ch) => completedChapters.includes(ch.id)).length;
      });
      return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
    };

    const s1 = calcDone(sem1);
    const s2 = calcDone(sem2);

    return [
      {
        semester: 'Semester I (ሴሚስተር ፩)',
        Completed: s1.done,
        Remaining: s1.total - s1.done,
        Rate: s1.pct
      },
      {
        semester: 'Semester II (ሴሚስተር ፪)',
        Completed: s2.done,
        Remaining: s2.total - s2.done,
        Rate: s2.pct
      }
    ];
  }, [allCourses, completedChapters]);

  // Filtered courses for course list view
  const filteredCourses = useMemo(() => {
    return allCourses.filter((c) => {
      const matchesSearch =
        c.code.toLowerCase().includes(courseSearch.toLowerCase()) ||
        c.englishTitle.toLowerCase().includes(courseSearch.toLowerCase()) ||
        c.amharicTitle.includes(courseSearch);

      if (!matchesSearch) return false;

      if (selectedSemester === 'all') return true;
      if (selectedSemester === 'sem1') return c.semester?.includes('1');
      if (selectedSemester === 'sem2') return c.semester?.includes('2');
      if (selectedSemester === 'completed') {
        const done = c.chapters.filter((ch) => completedChapters.includes(ch.id)).length;
        return done === c.chapters.length && c.chapters.length > 0;
      }
      if (selectedSemester === 'inprogress') {
        const done = c.chapters.filter((ch) => completedChapters.includes(ch.id)).length;
        return done > 0 && done < c.chapters.length;
      }
      return true;
    });
  }, [allCourses, courseSearch, selectedSemester, completedChapters]);

  return (
    <div className="space-y-6">
      {/* Top Banner / Hero */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-2xl p-5 sm:p-7 shadow-md border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-500/10 pointer-events-none rounded-r-2xl transform skew-x-12 translate-x-8" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>MoE National Freshman Curriculum Dashboard</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Student Progress & Learning Analytics
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Real-time mastery tracking across all <strong className="text-emerald-300">14 official MoE PDF course modules</strong>.
              Monitor your completed chapters, track credit hours, and prepare for midterms and exit examinations.
            </p>
            <p className="font-amharic text-xs text-yellow-300/90">
              በትምህርት ሚኒስቴር (MoE) የተዘጋጁ 14ቱንም የመጀመሪያ ዓመት የዩኒቨርሲቲ ሞጁሎች እድገትዎን ይመልከቱ።
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-start md:items-end justify-between sm:justify-start gap-3 shrink-0 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-xs">
            <div className="text-left md:text-right">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                Overall Progress
              </span>
              <span className="text-3xl sm:text-4xl font-black text-emerald-400">
                {stats.completionRate}%
              </span>
            </div>
            <div className="text-left md:text-right text-xs text-slate-300 space-y-0.5">
              <div><strong>{stats.completedChaptersCount}</strong> of <strong>{stats.totalChaptersCount}</strong> Chapters Done</div>
              <div><strong>{stats.completedCredits}</strong> of <strong>{stats.totalCredits}</strong> Credits Tracked</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold mb-2">
            <span>MoE PDF Courses</span>
            <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {stats.totalCourses}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Complete freshman catalog
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold mb-2">
            <span>Completed Chapters</span>
            <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-teal-700 dark:text-teal-400">
            {stats.completedChaptersCount} <span className="text-sm font-normal text-slate-400">/ {stats.totalChaptersCount}</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            {stats.remainingChaptersCount} remaining to read
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold mb-2">
            <span>Credit Hours</span>
            <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-indigo-400">
            {stats.completedCredits} <span className="text-sm font-normal text-slate-400">/ {stats.totalCredits}</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Freshman year credits
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold mb-2">
            <span>Saved Bookmarks</span>
            <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400">
            {bookmarkedParagraphsCount}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Starred study paragraphs
          </p>
        </div>
      </div>

      {/* Visual Analytics Charts Section (Recharts) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Main Bar Chart: Completed Chapters per Course */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-2xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Chapter Completion by Course (በየኮርሱ የተጠናቀቁ ምዕራፎች)</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Comparing completed vs remaining chapters across all 14 MoE PDF modules
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-medium">
                <span className="w-3 h-3 rounded-xs bg-emerald-600 inline-block"></span>
                Completed
              </span>
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-medium">
                <span className="w-3 h-3 rounded-xs bg-slate-300 dark:bg-slate-600 inline-block"></span>
                Remaining
              </span>
            </div>
          </div>

          <div className="w-full h-80 sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={courseCompletionChartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis
                  dataKey="code"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  tick={{ fontSize: 11, fill: 'currentColor' }}
                  className="text-slate-600 dark:text-slate-300"
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fontSize: 11, fill: 'currentColor' }}
                  className="text-slate-600 dark:text-slate-300"
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl border border-slate-700 space-y-1 z-50">
                          <div className="font-bold text-emerald-400">{data.code} • {data.name}</div>
                          <div className="font-amharic text-slate-300">{data.amharicName}</div>
                          <div className="pt-1 border-t border-slate-700 flex justify-between gap-4">
                            <span>Completed:</span>
                            <strong className="text-emerald-400">{data.Completed} / {data.Total} ({data.Percent}%)</strong>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>Remaining:</span>
                            <span className="text-slate-400">{data.Remaining} chapters</span>
                          </div>
                          <div className="text-[10px] text-slate-400 pt-0.5">Term: {data.semester}</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="Completed" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Remaining" stackId="a" fill="#cbd5e1" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Chart: Donut Completion & Semester Comparison */}
        <div className="space-y-5 flex flex-col">
          {/* Donut Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-2xs flex-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              Curriculum Mastery (አጠቃላይ ሽፋን)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              Freshman syllabus completion proportion
            </p>

            <div className="h-44 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val, name) => [`${val} chapters`, name]}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-slate-900 dark:text-white">
                  {stats.completionRate}%
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400">
                  Finished
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-4 text-xs font-medium pt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-slate-600 dark:text-slate-300">Done ({stats.completedChaptersCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                <span className="text-slate-600 dark:text-slate-300">Pending ({stats.remainingChaptersCount})</span>
              </div>
            </div>
          </div>

          {/* Semester Comparison Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-2xs flex-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              Semester 1 vs Semester 2
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Progression comparison across terms
            </p>

            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={semesterChartData} layout="vertical" margin={{ top: 0, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.2} />
                  <XAxis type="number" tick={{ fontSize: 10, fill: 'currentColor' }} className="text-slate-500 dark:text-slate-400" />
                  <YAxis type="category" dataKey="semester" tick={{ fontSize: 10, fill: 'currentColor' }} width={120} className="text-slate-700 dark:text-slate-300 font-medium" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                  />
                  <Bar dataKey="Completed" stackId="b" fill="#059669" name="Completed" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="Remaining" stackId="b" fill="#cbd5e1" name="Remaining" radius={[0, 3, 3, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* All MoE PDF Courses Full Interactive Directory */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
        {/* Header & Filter Controls */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>All MoE PDF Curriculum Courses ({allCourses.length})</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Browse syllabus, toggle completed chapters, and jump into interactive bilingual modules.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={courseSearch}
                onChange={(e) => setCourseSearch(e.target.value)}
                placeholder="Search course code or title..."
                className="w-full sm:w-56 pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Semester Filter Pills */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl overflow-x-auto text-xs font-semibold">
              <button
                onClick={() => setSelectedSemester('all')}
                className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                  selectedSemester === 'all'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                All ({allCourses.length})
              </button>
              <button
                onClick={() => setSelectedSemester('sem1')}
                className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                  selectedSemester === 'sem1'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Sem 1
              </button>
              <button
                onClick={() => setSelectedSemester('sem2')}
                className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                  selectedSemester === 'sem2'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Sem 2
              </button>
              <button
                onClick={() => setSelectedSemester('completed')}
                className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                  selectedSemester === 'completed'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Done
              </button>
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredCourses.map((c) => {
            const courseChapterIds = c.chapters.map((ch) => ch.id);
            const doneCount = courseChapterIds.filter((id) => completedChapters.includes(id)).length;
            const totalCount = c.chapters.length;
            const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
            const isCurrent = currentCourse.id === c.id;
            const isExpanded = expandedCourseId === c.id;

            return (
              <div
                key={c.id}
                className={`rounded-xl border p-4 transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'border-emerald-500/80 bg-emerald-50/20 dark:bg-emerald-950/20 shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <div>
                  {/* Top Bar of Card: Code, Badges, Credit */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-black tracking-wide">
                        {c.code}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                          Active Course
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      <span>{c.creditHours || 3} Cr.</span>
                      <span>•</span>
                      <span>{c.semester || 'Common'}</span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                    {c.englishTitle}
                  </h3>
                  <p className="font-amharic text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mb-2">
                    {c.amharicTitle}
                  </p>

                  {/* MoE PDF Module Details */}
                  {c.pdfModule && (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 rounded-lg p-2 mb-3 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="truncate pr-1">
                        📄 <strong>{c.pdfModule.title}</strong>
                      </span>
                      <span className="shrink-0 text-[10px] bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">
                        {c.pdfModule.publishedYear}
                      </span>
                    </div>
                  )}

                  {/* Progress Bar */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-600 dark:text-slate-400">
                        {doneCount} of {totalCount} chapters finished
                      </span>
                      <span className={pct === 100 ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-700 dark:text-slate-300'}>
                        {pct}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 rounded-full ${
                          pct === 100 ? 'bg-emerald-500' : pct > 0 ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-transparent'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Actions: Chapters Accordion Toggle & Open Course Button */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setExpandedCourseId(isExpanded ? null : c.id)}
                      className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 py-1"
                    >
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      <span>{isExpanded ? 'Hide Chapters' : `View ${totalCount} Chapters`}</span>
                    </button>

                    <button
                      onClick={() => onSelectCourse(c.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors min-h-[36px] ${
                        isCurrent
                          ? 'bg-emerald-600 text-white shadow-2xs hover:bg-emerald-700'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{isCurrent ? 'Continue' : 'Study Course'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Expanded Chapters Quick-Checklist */}
                  {isExpanded && (
                    <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 max-h-56 overflow-y-auto pr-1">
                      {c.chapters.map((ch) => {
                        const isDone = completedChapters.includes(ch.id);
                        return (
                          <div
                            key={ch.id}
                            className="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-xs group"
                          >
                            <button
                              onClick={() => onToggleChapterCompletion(ch.id)}
                              className="flex items-center gap-2 text-left truncate flex-1 min-h-[30px]"
                              title={isDone ? 'Mark as unread' : 'Mark as completed'}
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 group-hover:text-slate-400" />
                              )}
                              <span className={`truncate ${isDone ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
                                {ch.number}. {ch.title.en}
                              </span>
                            </button>

                            <button
                              onClick={() => onSelectChapterAndNavigate(c.id, ch.id)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline font-bold px-1.5 py-0.5"
                            >
                              Read
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
