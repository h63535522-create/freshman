import React, { useState } from 'react';
import { glossaryTerms } from '../data/glossaryData';
import { X, Search, BookMarked, Volume2, Filter } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeakText: (text: string) => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
  onSpeakText
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!isOpen) return null;

  const categories = ['all', ...Array.from(new Set(glossaryTerms.map((t) => t.category)))];

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    const matchesSearch =
      term.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.amharic.includes(searchTerm) ||
      term.definitionEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definitionAm.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full h-[88vh] sm:h-[80vh] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 animate-scaleUp">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0">
              <BookMarked className="w-5 h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 truncate">
                Psychology Bilingual Glossary
              </h3>
              <p className="text-[11px] sm:text-xs font-amharic text-slate-500 dark:text-slate-400">
                የስነ-ልቦና ቃላት መፍቻ እና ትርጓሜ ({filteredTerms.length} Terms)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-3 sm:p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2.5">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search terms in English or Amharic (ፈልግ)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-850"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span className="text-slate-400 dark:text-slate-500 font-semibold text-[11px] flex items-center gap-1 shrink-0">
              <Filter className="w-3 h-3" />
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors capitalize min-h-[32px] ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 text-slate-400 dark:text-slate-500 text-xs">
              No matching terminology found.
            </div>
          ) : (
            filteredTerms.map((term) => (
              <div
                key={term.id}
                className="p-3.5 sm:p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-850/60 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xs transition-all space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">{term.english}</span>
                    <span className="font-amharic text-blue-800 dark:text-blue-400 text-sm font-semibold">
                      {term.amharic}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-750 px-1.5 py-0.5 rounded-md uppercase font-semibold">
                      Ch. {term.chapter}
                    </span>
                  </div>

                  <button
                    onClick={() => onSpeakText(term.english)}
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center"
                    title="Pronounce term"
                    aria-label="Pronounce term"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 pt-1">
                  <div className="leading-relaxed">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block uppercase">English:</span>
                    <p>{term.definitionEn}</p>
                  </div>
                  <div className="font-amharic text-slate-700 dark:text-slate-300 leading-relaxed border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-750 pt-2 md:pt-0 md:pl-3">
                    <span className="text-[10px] font-bold text-blue-800 dark:text-blue-400 block uppercase">አማርኛ፡</span>
                    <p>{term.definitionAm}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
