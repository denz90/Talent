import React, { useEffect, useState } from 'react';
import { Flame, ChevronRight, X } from 'lucide-react';

const StreakCelebration = ({ 
  streak, 
  previousStreak, 
  xpEarned, 
  totalXP, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const streakIncreased = streak > previousStreak;
  const newStreakDays = streakIncreased ? streak - previousStreak : 0;

  useEffect(() => {
    // Animate in
    setIsVisible(true);
    
    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 
          w-[90%] max-w-md transition-all duration-500 transform
          ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
      >
        <div className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500 rounded-3xl p-8 text-center shadow-2xl border border-white/20">
          
          {/* Close button */}
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Fire emoji decoration */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl animate-bounce">
            🔥
          </div>

          {/* Content */}
          <div className="mt-6 space-y-4">
            <h2 className="text-3xl font-black text-white tracking-tight">
              {streakIncreased ? '🔥 Streak Increased!' : '🔥 Streak Maintained!'}
            </h2>

            {/* Streak Display */}
            <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <Flame className="w-8 h-8 text-white fill-white" />
              <span className="text-5xl font-black text-white">
                {streak}
              </span>
              <span className="text-white/80 font-bold text-sm uppercase tracking-wider">
                Day Streak
              </span>
            </div>

            {/* Streak increase indicator */}
            {streakIncreased && (
              <div className="flex items-center justify-center gap-2 text-white/90 font-bold">
                <ChevronRight className="w-4 h-4" />
                <span>+{newStreakDays} day{newStreakDays > 1 ? 's' : ''} added!</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            )}

            {/* XP earned */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider">XP Earned</p>
                <p className="text-2xl font-black text-white">+{xpEarned}</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider">Total XP</p>
                <p className="text-2xl font-black text-white">{totalXP}</p>
              </div>
            </div>

            {/* Continue button */}
            <button
              onClick={handleClose}
              className="mt-4 bg-white text-orange-600 px-8 py-3 rounded-2xl font-black text-lg 
                hover:scale-105 active:scale-95 transition-all shadow-lg
                flex items-center justify-center gap-2 mx-auto w-full"
            >
              Continue Learning
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Confetti effect - simplified CSS particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: ['#FF6B6B', '#FECA57', '#48DBFB', '#FF9FF3', '#54A0FF', '#5F27CD', '#1DD1A1'][Math.floor(Math.random() * 7)],
                  animationDelay: `${Math.random() * 1.5}s`,
                  animationDuration: `${1.5 + Math.random() * 1.5}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) rotate(720deg) scale(0);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 2s ease-in forwards;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </>
  );
};

export default StreakCelebration;