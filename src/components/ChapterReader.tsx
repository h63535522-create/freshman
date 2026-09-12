import React, { useState } from 'react';
import { Chapter, ViewMode, KeyTerm } from '../types';
import { Volume2, VolumeX, Lightbulb, Bookmark, BookmarkCheck, ChevronRight } from 'lucide-react';

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
  onToggleBookmark
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(chapter.sections[0]?.id || '');
  const [selectedTerm, setSelectedTerm] = useState<KeyTerm | null>(null);

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

  return (
    <div className="space-y-6">
      {/* Chapter Title & Academic Metadata Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
              Chapter {chapter.number}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1.5 flex-wrap">
              <span>Author:</span>
              <strong className="text-yellow-200">{chapter.universityAuthor}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* English Title */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                English
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {chapter.title.en}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {chapter.overview.en}
              </p>
            </div>

            {/* Amharic Title */}
            <div className="font-amharic border-t md:border-t-0 md:border-l border-white/15 pt-3 md:pt-0 md:pl-6">
              <span className="text-[11px] uppercase tracking-wider text-yellow-300 font-semibold block mb-1">
                አማርኛ
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-100">
                {chapter.title.am}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {chapter.overview.am}
              </p>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="pt-3 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
              <span>Chapter Outcomes (የምዕራፉ የመማር ግቦች)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
              {chapter.learningOutcomes.map((lo, idx) => (
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
        </div>
      </div>

      {/* In-Page Quick Section Jump Tabs (Horizontal scroll on mobile) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 pl-1">
          Sections:
        </span>
        {chapter.sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={() => setActiveSectionId(sec.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1 min-h-[36px] ${
              activeSectionId === sec.id
                ? 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-2xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
            }`}
          >
            <span className="font-bold">{sec.number}</span>
            <span className="max-w-[140px] sm:max-w-none truncate">{sec.title.en}</span>
          </a>
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

      {/* Main Chapter Content: Section by Section */}
      <div className="space-y-10">
        {chapter.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 space-y-4"
          >
            {/* Section Header */}
            <div className="border-b-2 border-emerald-600/30 dark:border-emerald-500/30 pb-2">
              <div className="flex items-start sm:items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                  {section.number}
                </span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {section.title.en}
                  </h3>
                  <h4 className="text-sm sm:text-base md:text-lg font-amharic font-semibold text-emerald-800 dark:text-emerald-400">
                    {section.title.am}
                  </h4>
                </div>
              </div>
            </div>

            {/* Paragraph Blocks: Bilingual Row by Row */}
            <div className="space-y-4">
              {section.paragraphs.map((para) => {
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
                          className="hover:text-emerald-700 dark:hover:text-emerald-400 p-2 rounded-lg hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center text-slate-600 dark:text-slate-400"
                          title="Read English text aloud"
                          aria-label="Read paragraph aloud"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>

                        {/* Bookmark Button */}
                        <button
                          onClick={() => onToggleBookmark(para.id)}
                          className={`p-2 rounded-lg transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center ${
                            isBookmarked
                              ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60'
                              : 'hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}
                          title="Bookmark this section"
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

                    {/* Content Body: Responsive Dual Columns or Stacked Cards */}
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
                                {para.highlightTerms.map((t, tidx) => (
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
                              {para.highlightTerms.map((t, tidx) => (
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
          </section>
        ))}
      </div>
    </div>
  );
};
