import React from 'react';
import { Chapter } from '../types';
import { FileText, CheckCircle2, Copy, Printer, Sparkles } from 'lucide-react';

interface SummarySectionProps {
  chapter: Chapter;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ chapter }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAll = () => {
    const textToCopy = chapter.summaries
      .map(
        (s) =>
          `### ${s.title.en} (${s.title.am})\n` +
          s.bullets.map((b) => `• ${b.en}\n  (${b.am})`).join('\n')
      )
      .join('\n\n');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Info Banner */}
      <div className="bg-amber-50/90 border border-amber-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-amber-600 text-white shadow-xs shrink-0">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-amber-950 leading-tight">
                Chapter {chapter.number} Summary Notes
              </h2>
              <h3 className="text-sm sm:text-base font-amharic font-semibold text-amber-800">
                አጠቃላይ የምዕራፍ {chapter.number} ማጠቃለያ ነጥቦች
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-2 max-w-2xl leading-relaxed">
            High-yield revision designed for quick review before Ethiopian university freshman exams.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyAll}
            className="flex-1 sm:flex-initial px-3 py-2 rounded-xl border border-amber-300 bg-white hover:bg-amber-100/50 text-amber-900 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs min-h-[40px]"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copied ? 'Copied!' : 'Copy Notes'}</span>
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs min-h-[40px]"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print PDF</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {chapter.summaries.map((summary, idx) => (
          <div
            key={summary.id}
            className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs hover:border-slate-300 transition-all"
          >
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-3 sm:mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                  Summary Concept {idx + 1}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {summary.title.en}
                </h4>
                <h5 className="text-sm sm:text-base font-amharic font-semibold text-emerald-800 mt-0.5">
                  {summary.title.am}
                </h5>
              </div>
              <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0">
                #{idx + 1}
              </span>
            </div>

            {/* Bullets: Responsive side by side or stacked */}
            <div className="space-y-2.5">
              {summary.bullets.map((bullet, bidx) => (
                <div
                  key={bidx}
                  className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100/70 transition-colors"
                >
                  {/* English bullet */}
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet.en}</span>
                  </div>

                  {/* Amharic bullet */}
                  <div className="flex items-start gap-2 font-amharic text-xs sm:text-sm text-slate-700 border-t md:border-t-0 md:border-l border-slate-200 pt-2 md:pt-0 md:pl-4 leading-relaxed">
                    <span className="text-emerald-700 font-bold shrink-0">•</span>
                    <span>{bullet.am}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* High-Yield Tip Banner */}
      <div className="p-4 rounded-2xl bg-emerald-900 text-white flex items-start gap-3 shadow-md">
        <Sparkles className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
        <div className="text-xs">
          <span className="font-bold text-yellow-300 uppercase tracking-wide block mb-0.5">
            Exam Strategy Tip (የፈተና ምክር):
          </span>
          <p className="text-emerald-100 leading-relaxed">
            Review these key points right before exams. Connect each psychological term with its Ethiopian real-life application (e.g. Pavlov's conditioning in habit formation).
          </p>
        </div>
      </div>
    </div>
  );
};
