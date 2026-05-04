import React, { useState, useEffect } from 'react'; // Add useEffect to import
import { 
  PlayCircle, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Target, 
  Trophy, 
  Clock,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Lock  // Add Lock icon import
} from 'lucide-react';
import { PATHS_CONTENT } from '../data/PathContent';
import MagicSchoolDay1 from './MagicSchoolDay1';
import EduaideDay2 from './EduaideDay2';
import NotebookLMDay3 from './NotebookLMDay3';
import DiffitDay4 from './DiffitDay4';
import GeminiDay5 from './GeminiDay5';
import GrokDay6 from './GrokDay6';
import SunoDay7 from './SunoDay7';
import BriskDay8 from './BriskDay8';
import SnorklDay9 from './SnorklDay9';


const GenericDayContent = ({ day, courseTitle, onNext, onComplete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    if (onComplete) onComplete();
    if (onNext) onNext();
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 shadow-xl">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-300" />
              Day {day.id} • {courseTitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              {day.title}
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Mastering the next generation of AI tools for your profession.
            </p>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center space-y-6">
          <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
            <Clock size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Detailed Module Coming Soon</h2>
            <p className="text-slate-500 max-w-md mx-auto">
              We are currently refining the deep-dive content for <strong>{day.title}</strong>. 
              In the meantime, start exploring the tool directly to gain a head start!
            </p>
          </div>
          <div className="pt-4">
             <button 
              onClick={handleComplete}
              disabled={isCompleted}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
                isCompleted 
                  ? 'bg-green-600 text-white cursor-default' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {isCompleted ? '✓ Completed' : 'Mark as Read & Continue'} 
              {!isCompleted && <ArrowRight size={18} />}
            </button>
          </div>
        </div>

        {/* Structure Example */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Target size={20} /> Learning Objectives
            </h3>
            <ul className="space-y-3 text-blue-800/80 text-sm">
              <li>• Understand core functionalities of {day.title}</li>
              <li>• Integrate {day.title} into your daily workflow</li>
              <li>• Optimize your output with advanced prompt techniques</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Trophy size={20} /> Professional Impact
            </h3>
            <ul className="space-y-3 text-amber-800/80 text-sm">
              <li>• Reduce manual task time by up to 50%</li>
              <li>• Enhance creativity and technical precision</li>
              <li>• Stay ahead in the rapidly evolving AI landscape</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

const LearningPage = ({ course, onBack, onLogout, onProfileSettings }) => {
  const [activeDay, setActiveDay] = useState(1);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  // Load saved progress on mount
  useEffect(() => {
    const savedLevel = localStorage.getItem(`unlocked_level_${course?.id || 'default'}`);
    if (savedLevel) {
      setUnlockedLevel(parseInt(savedLevel, 10));
    }
  }, [course?.id]);

  // Save unlocked level whenever it changes
  useEffect(() => {
    if (course?.id) {
      localStorage.setItem(`unlocked_level_${course.id}`, unlockedLevel.toString());
    }
  }, [unlockedLevel, course?.id]);

  if (!course) return null;

  // Find content for the current path, fallback to Educators if not found
  const pathContent = PATHS_CONTENT[course.title] || PATHS_CONTENT['AI for Educators'];
  const { icon: Icon, color, modules } = pathContent;
  
  // Flat list of days for progress and navigation
  const allDays = modules.flatMap(m => m.days);
  const currentDayData = allDays.find(d => d.id === activeDay);

  // Calculate progress (completed days = unlockedLevel - 1)
  const completedDays = Math.min(unlockedLevel - 1, allDays.length);
  const progress = Math.round((completedDays / allDays.length) * 100);

  // Handle day completion and unlocking next day
  const handleDayComplete = () => {
    if (activeDay === unlockedLevel && activeDay < allDays.length) {
      // Unlock the next day
      setUnlockedLevel(prev => prev + 1);
    }
  };

  const handleNextDay = () => {
    if (activeDay < allDays.length) {
      setActiveDay(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleDaySelect = (dayId) => {
    // Only allow navigation to unlocked days
    if (dayId <= unlockedLevel) {
      setActiveDay(dayId);
      window.scrollTo(0, 0);
    }
  };

  const currentModule = modules.find(m => m.days.some(d => d.id === activeDay));
  const moduleLabel = currentModule ? currentModule.title.toUpperCase() : '';

  return (
    <div className="min-h-screen bg-white font-sans flex text-slate-900">

      {/* ── Sidebar ── */}
      <aside className="w-[320px] border-r border-slate-200 flex flex-col h-screen flex-shrink-0">

        {/* Header: Course Title & Progress */}
        <div className="p-6 border-b border-slate-100">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors mb-6 group"
          >
            <div className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
              <ArrowRight size={16} className="rotate-180" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back to Paths</span>
          </button>

          <div className="flex items-center gap-3 mb-6">
            <Icon size={24} style={{ color }} strokeWidth={2.5} />
            <h1 className="text-xl font-bold tracking-tight text-slate-900">{course.title}</h1>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Progress</span>
            <span className="text-xs font-bold text-blue-600">{progress}%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs font-medium text-slate-500 mt-1">
            {completedDays} of {allDays.length} days completed
          </p>
        </div>

        {/* Middle: Modules (scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {modules.map((module) => (
            <div key={module.id}>
              <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">
                {module.title}
              </h2>
              
              <div className="space-y-1">
                {module.days.map((day) => {
                  const isLocked = day.id > unlockedLevel;
                  const isCompleted = day.id < unlockedLevel;

                  return (
                    <div 
                      key={day.id}
                      onClick={() => handleDaySelect(day.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                        isLocked 
                          ? 'opacity-50 cursor-not-allowed grayscale' 
                          : `cursor-pointer ${activeDay === day.id ? day.bg : 'hover:bg-slate-50'}`
                      }`}
                    >
                      {/* Icon based on status */}
                      {isLocked ? (
                        <Lock size={18} className="text-slate-400 mt-1" />
                      ) : isCompleted ? (
                        <Trophy size={18} className="text-green-500 mt-1" />
                      ) : (
                        <PlayCircle size={20} className={activeDay === day.id ? `${day.color} mt-0.5` : 'text-slate-400 mt-0.5'} />
                      )}
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-sm font-bold mb-0.5 ${activeDay === day.id ? 'text-slate-900' : 'text-slate-600'}`}>
                            {day.title}
                          </h3>
                          {isCompleted && (
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                              Completed
                            </span>
                          )}
                        </div>
                        <p className={`text-xs ${activeDay === day.id ? `${day.color}/80` : 'text-slate-400'}`}>
                          {isLocked ? `🔒 Unlock after Day ${unlockedLevel}` : day.duration}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 bg-slate-50 relative flex flex-col h-screen overflow-hidden">

        {/* Breadcrumb bar */}
        <div className="w-full flex-shrink-0 border-b border-slate-200 bg-white h-16 flex items-center justify-between px-8 z-10 shadow-sm">
          <span className="text-sm font-bold text-slate-400">{moduleLabel}</span>
          
          <div className="relative">
            <div 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 rounded-2xl transition-all border border-transparent hover:border-slate-100"
            >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-tight">Pro Learner</p>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Active Member</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm border border-blue-100 shadow-sm">
                TE
              </div>
              <ChevronDown size={14} className={`text-slate-400 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <>
                <div 
                  className="fixed inset-0 z-20" 
                  onClick={() => setShowProfileMenu(false)}
                ></div>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-slate-50 mb-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Account</p>
                  </div>
                  
                  <button 
                    onClick={() => {
                      onProfileSettings();
                      setShowProfileMenu(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <User size={18} className="text-slate-400" />
                    My Profile
                  </button>
                  
                  <button 
                    onClick={() => {
                      onProfileSettings();
                      setShowProfileMenu(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <Settings size={18} className="text-slate-400" />
                    Settings
                  </button>
                  
                  <div className="h-px bg-slate-50 my-1 mx-2"></div>
                  
                  <button 
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Day content */}
        <div className="flex-1 overflow-hidden">
          {course.title === 'AI for Educators' ? (
            <>
              {activeDay === 1 && <MagicSchoolDay1 onNext={handleNextDay} onComplete={handleDayComplete} />}
              {activeDay === 2 && <EduaideDay2 onNext={handleNextDay} onComplete={handleDayComplete} />}
              {activeDay === 3 && <NotebookLMDay3 onNext={handleNextDay} onComplete={handleDayComplete} />}
              {activeDay === 4 && <DiffitDay4 onNext={handleNextDay} onComplete={handleDayComplete} />}
              {activeDay === 5 && <GeminiDay5 onNext={handleNextDay} onComplete={handleDayComplete} />}
              {activeDay === 6 && <GrokDay6 onNext={handleNextDay} onComplete={handleDayComplete} />}
              {activeDay === 7 && <SunoDay7 onNext={handleNextDay} onComplete={handleDayComplete} />}
              {activeDay === 8 && <BriskDay8 onNext={handleNextDay} onComplete={handleDayComplete} />}
              {activeDay === 9 && <SnorklDay9 onNext={handleNextDay} onComplete={handleDayComplete} />}
            </>
          ) : (
            <GenericDayContent 
              day={currentDayData} 
              courseTitle={course.title} 
              onNext={handleNextDay}
              onComplete={handleDayComplete}
            />
          )}
        </div>

      </main>
    </div>
  );
};

export default LearningPage;