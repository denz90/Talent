import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  Trophy, 
  RefreshCcw,
  Sparkles,
  ChevronRight,
  Brain
} from 'lucide-react';

const QuizSystem = ({ dayTitle, quizData, onPass, onBack, isDarkMode }) => {
  // Helper to shuffle questions and their options
  const shuffleQuestions = (data) => {
    if (!data) return [];
    return [...data]
      .map(q => {
        // Create an array of options with their original indices
        const optionsWithIndex = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
        // Shuffle the options
        const shuffledOptions = [...optionsWithIndex].sort(() => Math.random() - 0.5);
        // The correctAnswer in PathContent.js is 1-based (1, 2, 3, 4)
        // Convert it to a 0-based index (0, 1, 2, 3) for our internal logic
        const zeroBasedCorrectAnswer = Number(q.correctAnswer) - 1;
        
        // Find the new index of the correct answer
        const newCorrectAnswerIndex = shuffledOptions.findIndex(o => o.originalIndex === zeroBasedCorrectAnswer);
        
        return {
          ...q,
          options: shuffledOptions.map(o => o.text),
          correctAnswer: newCorrectAnswerIndex
        };
      })
      .sort(() => Math.random() - 0.5);
  };

  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);
  const [prevQuizData, setPrevQuizData] = useState(quizData);
  const [shuffledQuestions, setShuffledQuestions] = useState(() => shuffleQuestions(quizData));

  // Reset state if quizData changes (e.g., navigating to a different day)
  if (quizData !== prevQuizData) {
    setPrevQuizData(quizData);
    setShuffledQuestions(shuffleQuestions(quizData));
    setAnswers({});
    setIsSubmitted(false);
    setHasPassed(false);
  }

  const handleSelectAnswer = (questionId, optionIndex) => {
    if (!isSubmitted) {
      setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    }
  };

const handleSubmitQuiz = () => {
  const score = shuffledQuestions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);

  console.log("📊 QUIZ: Score =", score, "/", shuffledQuestions.length);
  console.log("📊 QUIZ: Perfect score required? Yes (score === total)");

  setIsSubmitted(true);

  if (score === shuffledQuestions.length) {
    console.log("✅ QUIZ: PERFECT SCORE! Setting hasPassed = true");
    setHasPassed(true);
    
    console.log("⏰ QUIZ: Scheduling onPass() in 2000ms...");
    setTimeout(() => {
      console.log("⏰ QUIZ: setTimeout FIRED! Calling onPass()");
      if (onPass) {
        console.log("✅ QUIZ: onPass exists, calling it...");
        onPass();
      } else {
        console.error("❌ QUIZ: onPass is UNDEFINED!");
      }
    }, 2000);
  } else {
    console.log("❌ QUIZ: Not a perfect score. No pass.");
  }
};

  const handleRetry = () => {
    setAnswers({});
    setIsSubmitted(false);
    setHasPassed(false);
    setShuffledQuestions(shuffleQuestions(quizData));
  };

  if (!quizData || quizData.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
        <Brain size={48} className="text-slate-300 mb-4" />
        <h2 className="text-xl font-bold text-site-text mb-2">No Quiz Data Available</h2>
        <p className="text-site-text/80 mb-6">This lesson doesn't have a quiz yet.</p>
        <button onClick={onBack} className="bg-site-primary text-site-text px-6 py-2 rounded-xl font-bold">
          Go Back
        </button>
      </div>
    );
  }

  const score = shuffledQuestions.filter(q => answers[q.id] === q.correctAnswer).length;
  const wrongNumbers = shuffledQuestions
    .map((q, i) => (isSubmitted && answers[q.id] !== q.correctAnswer ? i + 1 : null))
    .filter(Boolean);

  return (
    <div className={`w-full h-full overflow-y-auto transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-br from-[#0F172B] via-[#2e0052] to-[#0F172B]' : 'bg-site-bg'}`}>
      <div className="max-w-3xl mx-auto px-6 py-12 pb-32">
        
        {/* Navigation Header */}
        <button 
          onClick={onBack}
          className={`flex items-center gap-2 transition-colors mb-8 group ${isDarkMode ? 'text-purple-300 hover:text-white' : 'text-slate-400 hover:text-site-text/80'}`}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Lesson</span>
        </button>

        {/* Quiz Header */}
        <div className={`${isDarkMode ? 'bg-site-bg/5 border-purple-500/20 shadow-2xl' : 'bg-site-bg border-site-accent shadow-sm'} rounded-[2.5rem] p-10 border mb-10 text-center relative overflow-hidden`}>
          <div className={`absolute top-0 right-0 w-64 h-64 ${isDarkMode ? 'bg-pink-500/10' : 'bg-blue-50'} rounded-full blur-3xl -mr-32 -mt-32 opacity-50`}></div>
          <div className={`absolute bottom-0 left-0 w-64 h-64 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-50'} rounded-full blur-3xl -ml-32 -mb-32 opacity-50`}></div>
          
          <div className="relative z-10">
            <div className={`w-16 h-16 ${isDarkMode ? 'bg-purple-500/20 text-pink-400 border-purple-500/30' : 'bg-blue-50 text-site-primary border-blue-100'} rounded-2xl flex items-center justify-center mx-auto mb-6 border shadow-sm`}>
              <Brain size={32} />
            </div>
            <h1 className={`text-3xl font-bold mb-2 tracking-tight ${isDarkMode ? 'text-white' : 'text-site-text'}`}>Knowledge Check</h1>
            <p className={isDarkMode ? 'text-purple-200/60 font-medium' : 'text-site-text/80 font-medium'}>{dayTitle} Assessment</p>
            
            {/* Live score bar while submitted */}
            {isSubmitted && (
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className={`text-2xl font-black ${score === shuffledQuestions.length ? 'text-emerald-500' : 'text-red-500'}`}>
                  {score} / {shuffledQuestions.length}
                </span>
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                  score === shuffledQuestions.length
                    ? 'bg-emerald-500/15 text-emerald-600'
                    : 'bg-red-500/15 text-red-600'
                }`}>
                  {score === shuffledQuestions.length ? '🎉 Perfect score!' : `${Math.round((score / shuffledQuestions.length) * 100)}%`}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-8 mb-12">
          {shuffledQuestions.map((q, index) => {
            const selectedIdx = answers[q.id];
            const isQuestionCorrect = selectedIdx === q.correctAnswer;

            return (
              <div key={q.id} className={`rounded-3xl p-8 border transition-all ${
                  isSubmitted
                    ? isQuestionCorrect
                      ? 'border-emerald-400/50 shadow-md shadow-emerald-500/5'
                      : 'border-red-400/50 shadow-md shadow-red-500/5'
                    : isDarkMode
                      ? 'bg-site-bg/5 border-purple-500/20 shadow-xl hover:border-pink-500/30'
                      : 'bg-site-bg border-site-accent shadow-sm hover:border-blue-200'
                } ${isDarkMode ? 'bg-site-bg/5' : 'bg-site-bg'}`}>
                <div className="flex items-start gap-4 mb-6">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all ${
                    isSubmitted
                      ? isQuestionCorrect
                        ? 'bg-emerald-500/20 text-emerald-600'
                        : 'bg-red-500/20 text-red-600'
                      : isDarkMode
                        ? 'bg-site-bg/10 text-purple-300'
                        : 'bg-slate-100 text-site-text/80'
                  }`}>
                    {isSubmitted ? (isQuestionCorrect ? '✓' : '✗') : index + 1}
                  </span>
                  <h3 className={`text-lg font-bold pt-1 leading-tight ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {q.question}
                  </h3>
                </div>

                <div className="space-y-3">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedIdx === optIdx;
                    const isCorrectOption = optIdx === q.correctAnswer;
                    
                    let cls = "w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ";
                    
                    if (!isSubmitted) {
                      cls += isSelected 
                        ? (isDarkMode ? "bg-pink-500/20 border-pink-500 text-white font-bold shadow-lg shadow-pink-500/10" : "bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-md shadow-blue-100")
                        : (isDarkMode ? "bg-site-bg/5 border-white/10 hover:border-purple-400 hover:bg-site-bg/10 text-purple-200" : "bg-site-bg border-site-accent hover:border-blue-300 hover:bg-site-bg text-site-text/80");
                    } else if (isCorrectOption) {
                      cls += "bg-emerald-500/10 border-emerald-500 text-emerald-700 font-bold";
                    } else if (isSelected) {
                      cls += isDarkMode ? "bg-red-500/15 border-red-500 text-red-300 font-bold" : "bg-red-50 border-red-400 text-red-700 font-bold";
                    } else {
                      cls += isDarkMode ? "bg-site-bg/5 border-white/5 text-purple-200/25 opacity-30" : "bg-site-bg border-site-accent text-slate-300 opacity-40";
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isSubmitted}
                        onClick={() => handleSelectAnswer(q.id, optIdx)}
                        className={cls}
                      >
                        <span className="flex-1 text-left">{opt}</span>
                        {isSubmitted && isCorrectOption && <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />}
                        {isSubmitted && isSelected && !isCorrectOption && <XCircle size={20} className="text-red-500 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                
                {isSubmitted && (
                  <p className={`mt-4 text-xs font-bold flex items-center gap-1.5 ${isQuestionCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                    {isQuestionCorrect
                      ? <><CheckCircle2 size={13} /> Correct!</>
                      : <><XCircle size={13} /> Incorrect — the green answer above is correct</>
                    }
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col items-center">
          {!isSubmitted ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={Object.keys(answers).length !== shuffledQuestions.length}
              className={`group ${isDarkMode ? 'bg-pink-600 hover:bg-pink-500 shadow-pink-500/20' : 'bg-site-primary hover:bg-slate-800 shadow-xl'} disabled:bg-slate-200 disabled:cursor-not-allowed text-white font-bold py-5 px-12 rounded-2xl transition-all w-full md:w-auto flex items-center justify-center gap-3 active:scale-95`}
            >
              <span>Submit Assessment</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : hasPassed ? (
            <div className="text-center animate-in zoom-in duration-500">
              <div className={`w-20 h-20 ${isDarkMode ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-600 shadow-emerald-100'} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white/10`}>
                <Trophy size={40} />
              </div>
              <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-site-text'}`}>Excellent Work!</h2>
              <p className="text-emerald-400 font-bold flex items-center justify-center gap-2 mb-8">
                <Sparkles size={18} /> Assessment Passed • Unlocking Content
              </p>
              <div className={`inline-flex items-center gap-2 px-6 py-3 ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border-emerald-100'} rounded-full font-bold border`}>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                Redirecting...
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md animate-in slide-in-from-bottom-4 duration-300">
              <div className={`${isDarkMode ? 'bg-red-500/10 border-red-500/20' : 'bg-red-50 border-red-100'} rounded-3xl p-8 text-center shadow-sm border`}>
                <div className="w-12 h-12 bg-red-100/10 rounded-xl flex items-center justify-center text-red-500 mx-auto mb-4">
                  <XCircle size={24} />
                </div>
                <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-red-900'}`}>Not Quite Right</h3>
                <p className={`text-sm font-black mb-3 ${isDarkMode ? 'text-red-300' : 'text-red-600'}`}>
                  {score} / {shuffledQuestions.length} correct
                </p>
                {wrongNumbers.length > 0 && (
                  <p className={`text-sm mb-2 font-medium ${isDarkMode ? 'text-purple-200/70' : 'text-red-700/80'}`}>
                    Question{wrongNumbers.length > 1 ? 's' : ''} <strong>{wrongNumbers.join(', ')}</strong>{' '}
                    {wrongNumbers.length > 1 ? 'need' : 'needs'} another look.
                  </p>
                )}
                <p className={`text-xs mb-8 ${isDarkMode ? 'text-purple-200/40' : 'text-red-500/60'}`}>
                  The correct answers are highlighted in green above. Review them, then retry.
                </p>
                <button
                  onClick={handleRetry}
                  className={`bg-site-bg/5 border ${isDarkMode ? 'border-red-500/30 text-red-400 hover:bg-red-500/10' : 'border-red-200 text-red-600 hover:bg-red-50'} font-bold py-4 px-8 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-3 mx-auto active:scale-95`}
                >
                  <RefreshCcw size={18} />
                  Retry Assessment
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default QuizSystem;
