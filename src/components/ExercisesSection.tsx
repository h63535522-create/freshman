import React, { useState } from 'react';
import { Chapter, MatchingPair } from '../types';
import { CheckCircle, XCircle, Award, RotateCcw, Sparkles, Check, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExercisesSectionProps {
  chapter: Chapter;
  onOpenFlashcards: () => void;
}

export const ExercisesSection: React.FC<ExercisesSectionProps> = ({
  chapter,
  onOpenFlashcards
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<boolean>(false);

  // Matching state
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [matchingError, setMatchingError] = useState<string | null>(null);

  const handleSelectOption = (quizId: string, optionId: string) => {
    if (submittedQuiz) return;
    setSelectedAnswers((prev) => ({ ...prev, [quizId]: optionId }));
  };

  const handleQuizSubmit = () => {
    setSubmittedQuiz(true);
    let score = 0;
    chapter.quizzes.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        score++;
      }
    });

    if (score === chapter.quizzes.length && chapter.quizzes.length > 0) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setSubmittedQuiz(false);
  };

  // Matching pair logic
  const handleConceptClick = (id: string) => {
    if (matchedPairs.includes(id)) return;
    setSelectedConcept(id);
    setMatchingError(null);
  };

  const handleDefinitionClick = (id: string) => {
    if (!selectedConcept) return;
    if (selectedConcept === id) {
      setMatchedPairs((prev) => [...prev, id]);
      setSelectedConcept(null);
      setMatchingError(null);
      if (chapter.matching && matchedPairs.length + 1 === chapter.matching.length) {
        try {
          confetti({ particleCount: 50, spread: 60 });
        } catch (e) {}
      }
    } else {
      setMatchingError('Not a match. Try another definition! (ትክክል አይደለም፣ ሌላ ይሞክሩ)');
      setTimeout(() => setMatchingError(null), 2500);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    chapter.quizzes.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) correct++;
    });
    return correct;
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Exercise Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-700 text-white shadow-xs shrink-0">
              <Award className="w-5 h-5 text-yellow-300" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold leading-tight">
                Chapter {chapter.number} Exercises & Practice Quiz
              </h2>
              <h3 className="text-sm sm:text-base font-amharic font-semibold text-emerald-200">
                የምዕራፍ {chapter.number} በይነ-መረባዊ ልምምዶች እና ፈተናዎች
              </h3>
            </div>
          </div>
          <p className="text-xs text-emerald-100 mt-2 max-w-2xl leading-relaxed">
            Practice active recall: Multiple choice tests with explanations and concept pairing matrices.
          </p>
        </div>

        <button
          onClick={onOpenFlashcards}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-transform transform active:scale-95 shadow-md shrink-0 min-h-[44px]"
        >
          <Sparkles className="w-4 h-4 text-slate-900 shrink-0" />
          <span>Launch Flashcards ({chapter.flashcards.length})</span>
        </button>
      </div>

      {/* Part 1: Multiple Choice Assessment */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Part A: Self-Test
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              Multiple Choice Questions (የምርጫ ጥያቄዎች)
            </h3>
          </div>

          {submittedQuiz ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                Score: <span className="text-emerald-700 dark:text-emerald-400">{calculateScore()}</span> / {chapter.quizzes.length}
              </div>
              <button
                onClick={handleResetQuiz}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors min-h-[40px]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleQuizSubmit}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-2xs min-h-[44px]"
            >
              Check Answers (መልሶችን አረጋግጥ)
            </button>
          )}
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {chapter.quizzes.map((quiz, qIdx) => {
            const selectedOpt = selectedAnswers[quiz.id];
            const isCorrect = selectedOpt === quiz.correctOptionId;

            return (
              <div
                key={quiz.id}
                className="p-3.5 sm:p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 space-y-3.5"
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-750 text-slate-800 dark:text-slate-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {qIdx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {quiz.question.en}
                    </h4>
                    <h5 className="text-xs sm:text-sm font-amharic font-semibold text-emerald-800 dark:text-emerald-400 mt-1">
                      {quiz.question.am}
                    </h5>
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {quiz.options.map((option) => {
                    const isSelected = selectedOpt === option.id;
                    const isThisCorrect = quiz.correctOptionId === option.id;

                    let optionStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200';

                    if (submittedQuiz) {
                      if (isThisCorrect) {
                        optionStyle = 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-semibold';
                      } else if (isSelected && !isThisCorrect) {
                        optionStyle = 'bg-rose-100 dark:bg-rose-950/60 border-rose-400 text-rose-950 dark:text-rose-200';
                      } else {
                        optionStyle = 'bg-white/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20';
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelectOption(quiz.id, option.id)}
                        disabled={submittedQuiz}
                        className={`p-3 sm:p-3.5 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 min-h-[48px] ${optionStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {option.id.replace('opt-', '').toUpperCase()}
                        </span>
                        <div className="flex-1">
                          <span className="block font-medium leading-relaxed">{option.text.en}</span>
                          <span className="block font-amharic text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{option.text.am}</span>
                        </div>
                        {submittedQuiz && isThisCorrect && (
                          <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        {submittedQuiz && isSelected && !isThisCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation feedback */}
                {submittedQuiz && (
                  <div
                    className={`p-3 rounded-xl text-xs space-y-1 ${
                      isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300' : 'bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold">
                      <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{isCorrect ? 'Correct! (ትክክል ነው)' : 'Explanation (የማብራሪያ ፍሬ ሀሳብ):'}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{quiz.explanation.en}</p>
                    <p className="font-amharic text-slate-700 dark:text-slate-300 leading-relaxed">{quiz.explanation.am}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Interactive Concept Matching Pairs */}
      {chapter.matching && chapter.matching.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Part B: Concept Match
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              Concept Matching Matrix (የፅንሰ-ሀሳብ ማዛመድ)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Tap a Concept on the left, then tap its matching Definition on the right.
            </p>
          </div>

          {matchingError && (
            <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 text-xs font-medium border border-rose-200 dark:border-rose-800 animate-shake">
              {matchingError}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Concepts Column */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                Concepts (ፅንሰ-ሀሳቦች)
              </span>
              {chapter.matching.map((pair) => {
                const isMatched = matchedPairs.includes(pair.id);
                const isSelected = selectedConcept === pair.id;

                return (
                  <button
                    key={pair.id}
                    onClick={() => handleConceptClick(pair.id)}
                    disabled={isMatched}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between min-h-[48px] ${
                      isMatched
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 opacity-60'
                        : isSelected
                        ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-400 text-amber-950 dark:text-amber-200 ring-2 ring-amber-300 dark:ring-amber-500'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div>
                      <div className="font-bold">{pair.concept.en}</div>
                      <div className="font-amharic text-emerald-800 dark:text-emerald-400 mt-0.5">{pair.concept.am}</div>
                    </div>
                    {isMatched && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Definitions Column */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                Definitions (ፍቺዎች)
              </span>
              {chapter.matching.map((pair) => {
                const isMatched = matchedPairs.includes(pair.id);

                return (
                  <button
                    key={pair.id}
                    onClick={() => handleDefinitionClick(pair.id)}
                    disabled={isMatched}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between min-h-[48px] ${
                      isMatched
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 opacity-60'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="leading-relaxed">{pair.definition.en}</div>
                      <div className="font-amharic text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{pair.definition.am}</div>
                    </div>
                    {isMatched && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
