import React, { useState, useEffect } from 'react';
import { allCourses, Course } from '../data/coursesIndex';
import { QuizQuestion } from '../types';
import { X, Clock, Award, CheckCircle, XCircle, RotateCcw, ChevronRight, ChevronLeft, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExamModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCourse?: Course;
}

export const ExamModeModal: React.FC<ExamModeModalProps> = ({ isOpen, onClose, currentCourse }) => {
  const [selectedCourseScope, setSelectedCourseScope] = useState<string>(
    currentCourse?.id || 'all'
  );
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  // Sync initial scope if currentCourse changes
  useEffect(() => {
    if (currentCourse) {
      setSelectedCourseScope(currentCourse.id);
    }
  }, [currentCourse]);

  // Initialize randomized mock exam based on course scope
  const startNewExam = (scopeId = selectedCourseScope) => {
    const pool: QuizQuestion[] = [];

    if (scopeId === 'all') {
      allCourses.forEach((c) => {
        c.chapters.forEach((ch) => {
          ch.quizzes.forEach((q) => pool.push(q));
        });
      });
    } else {
      const match = allCourses.find((c) => c.id === scopeId);
      if (match) {
        match.chapters.forEach((ch) => {
          ch.quizzes.forEach((q) => pool.push(q));
        });
      }
    }

    const questionCount = Math.min(pool.length, 15);
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, questionCount);
    setExamQuestions(shuffled);
    setSelectedAnswers({});
    setCurrentIdx(0);
    setTimeLeft(15 * 60);
    setIsSubmitted(false);
    setTimerActive(true);
  };

  useEffect(() => {
    if (isOpen) {
      startNewExam(selectedCourseScope);
    }
  }, [isOpen, selectedCourseScope]);

  // Timer countdown
  useEffect(() => {
    if (!timerActive || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerActive, isSubmitted]);

  if (!isOpen) return null;

  const handleSelect = (questionId: string, optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setTimerActive(false);

    let score = 0;
    examQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) score++;
    });

    if (score >= Math.ceil(examQuestions.length * 0.75)) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (e) {}
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = examQuestions[currentIdx];

  const calculateFinalStats = () => {
    let correct = 0;
    examQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) correct++;
    });
    const percentage = examQuestions.length > 0 ? Math.round((correct / examQuestions.length) * 100) : 0;
    let grade = 'F';
    if (percentage >= 85) grade = 'A';
    else if (percentage >= 75) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';

    return { correct, percentage, grade };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full h-[92vh] sm:h-[88vh] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 animate-scaleUp">
        {/* Top Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold leading-tight">
                Ethiopian Freshman Mock Exam
              </h3>
              <p className="text-[11px] font-amharic text-emerald-300">
                የመጀመሪያ ዓመት የፈተና ልምምድ ({examQuestions.length} Questions)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {!isSubmitted && (
              <div
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl font-mono text-xs font-bold ${
                  timeLeft < 120
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-slate-800 text-yellow-300 border border-slate-700'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scope Selector Bar */}
        <div className="px-4 py-2 bg-slate-100 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs shrink-0">
          <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1 shrink-0">
            <Layers className="w-3.5 h-3.5" /> Subject:
          </span>
          {allCourses.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCourseScope(c.id)}
              disabled={timerActive && !isSubmitted}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 ${
                selectedCourseScope === c.id
                  ? 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-2xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-700 disabled:opacity-60'
              }`}
            >
              {c.code}
            </button>
          ))}
          <button
            onClick={() => setSelectedCourseScope('all')}
            disabled={timerActive && !isSubmitted}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 ${
              selectedCourseScope === 'all'
                ? 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-2xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-700 disabled:opacity-60'
            }`}
          >
            All Subjects
          </button>
        </div>

        {/* Exam Body */}
        {!isSubmitted ? (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col justify-between">
            {currentQ ? (
              <div className="space-y-4">
                {/* Question progress */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-slate-700 dark:text-slate-200">
                    Question {currentIdx + 1} of {examQuestions.length}
                  </span>
                  <span>
                    Answered: {Object.keys(selectedAnswers).length} / {examQuestions.length}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-600 dark:bg-emerald-500 h-full transition-all duration-300"
                    style={{
                      width: `${((currentIdx + 1) / examQuestions.length) * 100}%`
                    }}
                  />
                </div>

                {/* Question Text */}
                <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2">
                  <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {currentQ.question.en}
                  </p>
                  <p className="text-xs sm:text-sm font-amharic text-emerald-800 dark:text-emerald-400">
                    {currentQ.question.am}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-2.5 pt-1">
                  {currentQ.options.map((opt, i) => {
                    const isPicked = selectedAnswers[currentQ.id] === opt.id;
                    const letter = String.fromCharCode(65 + i);

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect(currentQ.id, opt.id)}
                        className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all flex items-start gap-3 min-h-[48px] ${
                          isPicked
                            ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-200 font-medium ring-2 ring-emerald-500/20 shadow-xs'
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isPicked
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {letter}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm leading-snug">
                            {opt.text.en}
                          </div>
                          <div className="text-xs font-amharic text-slate-500 dark:text-slate-400 mt-0.5">
                            {opt.text.am}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                Loading exam questions...
              </div>
            )}

            {/* Navigation & Submit controls */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 shrink-0">
              <button
                onClick={() => setCurrentIdx((p) => Math.max(0, p - 1))}
                disabled={currentIdx === 0}
                className="px-3 sm:px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 min-h-[40px]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <div className="flex items-center gap-2">
                {currentIdx < examQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((p) => Math.min(examQuestions.length - 1, p + 1))}
                    className="px-3 sm:px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 flex items-center gap-1 min-h-[40px]"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitExam}
                    className="px-4 sm:px-5 py-2 text-xs font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-md flex items-center gap-1 min-h-[40px]"
                  >
                    <span>Submit Exam</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Exam Results Screen */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {(() => {
              const stats = calculateFinalStats();
              return (
                <div className="text-center space-y-3 py-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-2xl font-black mb-1 border-4 border-emerald-200 dark:border-emerald-800 shadow-inner">
                    {stats.grade}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Exam Completed! (ፈተናው ተጠናቋል)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    You scored <strong className="text-emerald-700 dark:text-emerald-400">{stats.correct}</strong> out of{' '}
                    <strong>{examQuestions.length}</strong> questions ({stats.percentage}%).
                  </p>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => startNewExam()}
                      className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-1.5 shadow-sm min-h-[40px]"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Exam (እንደገና ሞክር)</span>
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* Answer Review Section */}
            <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Detailed Review & Explanations (የመልስ ማብራሪያ)
              </h5>
              {examQuestions.map((q, idx) => {
                const userPick = selectedAnswers[q.id];
                const isCorrect = userPick === q.correctOptionId;

                return (
                  <div
                    key={q.id}
                    className={`p-3.5 rounded-xl border text-xs space-y-2 ${
                      isCorrect
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800'
                        : 'bg-rose-50/50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {idx + 1}. {q.question.en}
                      </div>
                    </div>

                    <div className="pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                      <div>
                        <strong>Correct Answer:</strong>{' '}
                        {q.options.find((o) => o.id === q.correctOptionId)?.text.en}
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 italic bg-white/70 dark:bg-slate-800/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                        💡 {q.explanation.en}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
