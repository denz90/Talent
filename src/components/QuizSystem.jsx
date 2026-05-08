import React, { useState, useEffect } from 'react';
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
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Helper to shuffle questions
  const shuffleQuestions = (data) => {
    if (!data) return [];
    return [...data].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (quizData && shuffledQuestions.length === 0) {
      setShuffledQuestions(shuffleQuestions(quizData));
    }
  }, [quizData]);

  const handleSelectAnswer = (questionId, optionIndex) => {
    if (!isSubmitted) {
      setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  const handleSubmitQuiz = () => {
    const score = shuffledQuestions.reduce((acc, q) => {
      return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);

    setIsSubmitted(true);
    if (score === shuffledQuestions.length) {
      setHasPassed(true);
      // Wait a bit to show success state before passing
      setTimeout(() => {
        if (onPass) onPass();
      }, 2000);
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
        <h2 className="text-xl font-bold text-slate-900 mb-2">No Quiz Data Available</h2>
        <p className="text-slate-500 mb-6">This lesson doesn't have a quiz yet.</p>
        <button onClick={onBack} className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full h-full overflow-y-auto transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-br from-[#0F172B] via-[#2e0052] to-[#0F172B]' : 'bg-slate-50'}`}>
      <div className="max-w-3xl mx-auto px-6 py-12 pb-32">
        
        {/* Navigation Header */}
        <button 
          onClick={onBack}
          className={`flex items-center gap-2 transition-colors mb-8 group ${isDarkMode ? 'text-purple-300 hover:text-white' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Lesson</span>
        </button>

        {/* Quiz Header */}
        <div className={`${isDarkMode ? 'bg-white/5 border-purple-500/20 shadow-2xl' : 'bg-white border-slate-200 shadow-sm'} rounded-[2.5rem] p-10 border mb-10 text-center relative overflow-hidden`}>
          <div className={`absolute top-0 right-0 w-64 h-64 ${isDarkMode ? 'bg-pink-500/10' : 'bg-blue-50'} rounded-full blur-3xl -mr-32 -mt-32 opacity-50`}></div>
          <div className={`absolute bottom-0 left-0 w-64 h-64 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-50'} rounded-full blur-3xl -ml-32 -mb-32 opacity-50`}></div>
          
          <div className="relative z-10">
            <div className={`w-16 h-16 ${isDarkMode ? 'bg-purple-500/20 text-pink-400 border-purple-500/30' : 'bg-blue-50 text-blue-600 border-blue-100'} rounded-2xl flex items-center justify-center mx-auto mb-6 border shadow-sm`}>
              <Brain size={32} />
            </div>
            <h1 className={`text-3xl font-bold mb-2 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Knowledge Check</h1>
            <p className={isDarkMode ? 'text-purple-200/60 font-medium' : 'text-slate-500 font-medium'}>{dayTitle} Assessment</p>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-8 mb-12">
          {shuffledQuestions.map((q, index) => (
            <div key={q.id} className={`${isDarkMode ? 'bg-white/5 border-purple-500/20 shadow-xl hover:border-pink-500/30' : 'bg-white border-slate-200 shadow-sm hover:border-blue-200'} rounded-3xl p-8 border transition-all`}>
              <div className="flex items-start gap-4 mb-6">
                <span className={`w-8 h-8 rounded-lg ${isDarkMode ? 'bg-white/10 text-purple-300' : 'bg-slate-100 text-slate-500'} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {index + 1}
                </span>
                <h3 className={`text-lg font-bold pt-1 leading-tight ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  {q.question}
                </h3>
              </div>

              <div className="space-y-3">
                {q.options.map((opt, optIdx) => {
                  const isSelected = answers[q.id] === optIdx;
                  const isCorrect = q.correctAnswer === optIdx;
                  
                  let buttonClass = "w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ";
                  
                  if (!isSubmitted) {
                    buttonClass += isSelected 
                      ? (isDarkMode ? "bg-pink-500/20 border-pink-500 text-white font-bold shadow-lg shadow-pink-500/10" : "bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-md shadow-blue-100")
                      : (isDarkMode ? "bg-white/5 border-white/10 hover:border-purple-400 hover:bg-white/10 text-purple-200" : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-600");
                  } else {
                    if (isSelected) {
                      if (hasPassed) {
                        buttonClass += "bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold";
                      } else {
                        buttonClass += isDarkMode ? "bg-purple-500/20 border-purple-500 text-purple-200 font-bold opacity-80" : "bg-blue-50 border-blue-400 text-blue-700 font-bold opacity-80";
                      }
                    } else {
                      buttonClass += isDarkMode ? "bg-white/5 border-white/5 text-purple-200/20 opacity-30" : "bg-white border-slate-100 text-slate-300 opacity-40";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isSubmitted}
                      onClick={() => handleSelectAnswer(q.id, optIdx)}
                      className={buttonClass}
                    >
                      <span className="flex-1">{opt}</span>
                      {isSubmitted && hasPassed && isSelected && <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />}
                      {isSubmitted && !hasPassed && isSelected && <Brain size={20} className={`${isDarkMode ? 'text-purple-400' : 'text-blue-400'} flex-shrink-0 animate-pulse`} />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col items-center">
          {!isSubmitted ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={Object.keys(answers).length !== shuffledQuestions.length}
              className={`group ${isDarkMode ? 'bg-pink-600 hover:bg-pink-500 shadow-pink-500/20' : 'bg-slate-900 hover:bg-slate-800 shadow-xl'} disabled:bg-slate-200 disabled:cursor-not-allowed text-white font-bold py-5 px-12 rounded-2xl transition-all w-full md:w-auto flex items-center justify-center gap-3 active:scale-95`}
            >
              <span>Submit Assessment</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : hasPassed ? (
            <div className="text-center animate-in zoom-in duration-500">
              <div className={`w-20 h-20 ${isDarkMode ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-600 shadow-emerald-100'} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white/10`}>
                <Trophy size={40} />
              </div>
              <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Excellent Work!</h2>
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
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-red-900'}`}>Not Quite Right</h3>
                <p className={`${isDarkMode ? 'text-purple-200/60' : 'text-red-700/80'} mb-8 leading-relaxed`}>
                  Review the lesson material once more and try again. You'll get it next time!
                </p>
                <button
                  onClick={handleRetry}
                  className={`bg-white/5 border ${isDarkMode ? 'border-red-500/30 text-red-400 hover:bg-red-500/10' : 'border-red-200 text-red-600 hover:bg-red-50'} font-bold py-4 px-8 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-3 mx-auto active:scale-95`}
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
