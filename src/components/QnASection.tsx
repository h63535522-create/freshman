import React, { useState } from 'react';
import { Chapter } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle, Lightbulb, Filter } from 'lucide-react';

interface QnASectionProps {
  chapter: Chapter;
}

export const QnASection: React.FC<QnASectionProps> = ({ chapter }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedIds, setExpandedIds] = useState<string[]>(
    chapter.qna.length > 0 ? [chapter.qna[0].id] : []
  );

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedIds(chapter.qna.map((q) => q.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  const filteredQnA =
    selectedCategory === 'all'
      ? chapter.qna
      : chapter.qna.filter((q) => q.category === selectedCategory);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'conceptual':
        return { label: 'Conceptual', am: 'ፅንሰ-ሀሳባዊ', color: 'bg-blue-100 text-blue-800 border-blue-200' };
      case 'exam':
        return { label: 'Exam MCQ', am: 'የፈተና ጥያቄ', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
      case 'case_study':
        return { label: 'Case Study', am: 'ተጨባጭ ምሳሌ', color: 'bg-purple-100 text-purple-800 border-purple-200' };
      case 'discussion':
        return { label: 'Discussion', am: 'የውይይት ጥያቄ', color: 'bg-amber-100 text-amber-800 border-amber-200' };
      default:
        return { label: 'Review', am: 'የክለሳ ጥያቄ', color: 'bg-slate-100 text-slate-800 border-slate-200' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-blue-700 text-white shadow-xs shrink-0">
              <HelpCircle className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold leading-tight">
                Chapter {chapter.number} Q&A & Explanations
              </h2>
              <h3 className="text-sm sm:text-base font-amharic font-semibold text-blue-200">
                የምዕራፍ {chapter.number} ጥያቄዎች እና ዝርዝር መልሶች ከመግለጫ ጋር
              </h3>
            </div>
          </div>
          <p className="text-xs text-blue-100 mt-2 max-w-2xl leading-relaxed">
            Every question features comprehensive dual-language answers and step-by-step reasoning.
          </p>
        </div>

        {/* Global Expand / Collapse */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={expandAll}
            className="flex-1 sm:flex-initial px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors min-h-[36px]"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="flex-1 sm:flex-initial px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors min-h-[36px]"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 shrink-0 pl-1">
          <Filter className="w-3.5 h-3.5" />
          Filter:
        </span>
        {['all', 'conceptual', 'exam', 'case_study', 'discussion'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all capitalize min-h-[36px] ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* QnA List */}
      <div className="space-y-4">
        {filteredQnA.map((item) => {
          const isExpanded = expandedIds.includes(item.id);
          const badge = getCategoryBadge(item.category);

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 hover:bg-slate-50/80 transition-colors min-h-[48px]"
              >
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    Q{item.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${badge.color}`}>
                        {badge.label}
                      </span>
                      <span className="text-xs text-slate-400 font-amharic">
                        ({badge.am})
                      </span>
                    </div>
                    {/* Question Text */}
                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {item.question.en}
                    </p>
                    <p className="text-xs sm:text-sm font-amharic font-semibold text-blue-900 mt-1">
                      {item.question.am}
                    </p>
                  </div>
                </div>

                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-500 shrink-0 mt-1">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Collapsible Answer & Explanation */}
              {isExpanded && (
                <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 bg-slate-50/50 space-y-3 sm:space-y-4 animate-fadeIn">
                  {/* Answer Box */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-200 mt-3 sm:mt-4 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Answer (ትክክለኛ መልስ)</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {/* English Answer */}
                      <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                        <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                          English:
                        </span>
                        <p>{item.answer.en}</p>
                      </div>

                      {/* Amharic Answer */}
                      <div className="font-amharic text-xs sm:text-sm text-slate-800 border-t md:border-t-0 md:border-l border-emerald-200 pt-2.5 md:pt-0 md:pl-4 leading-relaxed">
                        <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-1">
                          አማርኛ፡
                        </span>
                        <p>{item.answer.am}</p>
                      </div>
                    </div>
                  </div>

                  {/* Explanation Box */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 border border-blue-200 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-950">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Scientific Rationale (ዝርዝር ማብራሪያ)</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {/* English Explanation */}
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                          Rationale:
                        </span>
                        <p>{item.explanation.en}</p>
                      </div>

                      {/* Amharic Explanation */}
                      <div className="font-amharic text-xs sm:text-sm text-slate-700 border-t md:border-t-0 md:border-l border-blue-200 pt-2.5 md:pt-0 md:pl-4 leading-relaxed">
                        <span className="text-[10px] font-bold text-blue-800 uppercase block mb-1">
                          ማብራሪያ፡
                        </span>
                        <p>{item.explanation.am}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
