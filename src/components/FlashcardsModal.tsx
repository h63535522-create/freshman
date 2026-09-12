import React, { useState } from 'react';
import { Flashcard } from '../types';
import { X, ChevronLeft, ChevronRight, Rotate3d, Shuffle } from 'lucide-react';

interface FlashcardsModalProps {
  flashcards: Flashcard[];
  isOpen: boolean;
  onClose: () => void;
  chapterNumber: number;
}

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({
  flashcards,
  isOpen,
  onClose,
  chapterNumber
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState(flashcards);

  React.useEffect(() => {
    setCards(flashcards);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [flashcards]);

  if (!isOpen || cards.length === 0) return null;

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 dark:border-slate-800 animate-scaleUp">
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-yellow-400 text-slate-950 font-bold text-xs shrink-0">
              Ψ
            </span>
            <div className="truncate">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                Ch. {chapterNumber} Vocabulary Cards
              </h3>
              <p className="text-[11px] font-amharic text-slate-500 dark:text-slate-400">
                የፅንሰ-ሀሳብ ካርዶች ({currentIndex + 1} / {cards.length})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={handleShuffle}
              className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              title="Shuffle cards"
              aria-label="Shuffle cards"
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card Container */}
        <div className="p-4 sm:p-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[240px] sm:h-72 rounded-2xl p-4 sm:p-6 flex flex-col justify-between items-center text-center transition-all duration-300 transform active:scale-[0.99] shadow-md border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-slate-850 dark:to-emerald-950/30 relative select-none"
          >
            <div className="w-full flex justify-between text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              <span>{isFlipped ? 'Definition (ፍቺ)' : 'Concept (ፅንሰ-ሀሳብ)'}</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <Rotate3d className="w-3.5 h-3.5" />
                <span>Tap to Flip</span>
              </span>
            </div>

            {/* Front vs Back Content */}
            <div className="my-auto py-4 space-y-2 sm:space-y-3">
              {!isFlipped ? (
                <>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                    {currentCard.termEn}
                  </h4>
                  <p className="text-lg sm:text-xl font-amharic font-bold text-emerald-800 dark:text-emerald-400">
                    {currentCard.termAm}
                  </p>
                </>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {currentCard.defEn}
                  </p>
                  <p className="text-xs sm:text-sm font-amharic text-emerald-900 dark:text-emerald-300 border-t border-emerald-200/60 dark:border-emerald-800 pt-2.5 leading-relaxed">
                    {currentCard.defAm}
                  </p>
                </div>
              )}
            </div>

            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
              Chapter {currentCard.chapter} • MoSHE Modular Psychology
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-4 sm:mt-6 flex items-center justify-between gap-2">
            <button
              onClick={handlePrev}
              className="flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition-colors min-h-[44px]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs min-h-[44px]"
            >
              <Rotate3d className="w-3.5 h-3.5 text-yellow-400" />
              <span>Flip</span>
            </button>

            <button
              onClick={handleNext}
              className="flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition-colors min-h-[44px]"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
