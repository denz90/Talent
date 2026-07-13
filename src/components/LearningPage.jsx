import React, { useState, useEffect } from 'react';
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
  Lock,
  PanelLeftClose,
  PanelLeftOpen,
  Flame,
  Medal
} from 'lucide-react';
import { API_BASE_URL } from '../config.js';
import { PATHS_CONTENT } from '../data/PathContent';
import Navbar from './Navbar';
import MagicSchoolDay1 from './MagicSchoolDay1';
import EduaideDay2 from './EduaideDay2';
import NotebookLMDay3 from './NotebookLMDay3';
import DiffitDay4 from './DiffitDay4';
import GeminiDay5 from './GeminiDay5';
import GrokDay6 from './GrokDay6';
import SunoDay7 from './SunoDay7';
import BriskDay8 from './BriskDay8';
import SnorklDay9 from './SnorklDay9';
import EssayGraderDay10 from './EssayGraderDay10';
import QuizizzDay11 from './QuizizzDay11';
import KhanmigoDay12 from './KhanmigoDay12';
import FlintDay13 from './FlintDay13';
import SchoolAIDay14 from './SchoolAIDay14';
import KahootDay15 from './KahootDay15';
import ScribbleDiffusionDay16 from './ScribbleDiffusionDay16';
import ParlayDay17 from './ParlayDay17';
import ReadAlongDay18 from './ReadAlongDay18';
import CuripodDay19 from './CuripodDay19';
import LabsterDay20 from './LabsterDay20';
import Lumen5Day21 from './Lumen5Day21';
import TeacherMaticDay22 from './TeacherMaticDay22';
import FetchyDay23 from './FetchyDay23';
import EllieDay24 from './EllieDay24';
import GradescopeDay25 from './GradescopeDay25';
import TurnitinDay26 from './TurnitinDay26';
import EdthenaDay27 from './EdthenaDay27';
import LoopDay28 from './LoopDay28';
import QuizSystem from './QuizSystem';
import StreakCelebration from './StreakCelebration';  // <-- NEW

// ─── COURSE ID MAPPING (fallback if course.id is missing) ───
const COURSE_ID_MAP = {
  'AI for Educators': 1,
  'AI for Designers': 2,
  'AI for Developers': 3,
  'AI for Content Creators': 4,
};

const GenericDayContent = ({ day, courseTitle, onNext, onComplete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    if (onComplete) onComplete();
    if (onNext) onNext();
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-site-bg/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 shadow-xl">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-site-bg/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
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

        <div className="bg-site-bg p-10 rounded-3xl border border-site-accent shadow-sm text-center space-y-6">
          <div className="w-20 h-20 bg-site-bg rounded-2xl flex items-center justify-center mx-auto text-slate-400">
            <Clock size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-site-text mb-2">Detailed Module Coming Soon</h2>
            <p className="text-site-text/80 max-w-md mx-auto">
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
                  : 'bg-site-primary text-white hover:bg-slate-800'
              }`}
            >
              {isCompleted ? '✓ Completed' : 'Mark as Read & Continue'} 
              {!isCompleted && <ArrowRight size={18} />}
            </button>
          </div>
        </div>

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

const LearningPage = ({ course, currentUser, onBack, onLogout, onProfileSettings, onHome, onDashboard }) => {
  const [activeDay, setActiveDay] = useState(1);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });
  const [showQuiz, setShowQuiz] = useState(false);
  const [completedDays, setCompletedDays] = useState([0]);
  const [unlockedLevel, setUnlockedLevel] = useState(28);
  const [streakCount, setStreakCount] = useState(0);

  // ─── NEW STATE FOR STREAK CELEBRATION ───
  const [showStreakCelebration, setShowStreakCelebration] = useState(false);
  const [latestStreak, setLatestStreak] = useState(0);
  const [previousStreak, setPreviousStreak] = useState(0);
  const [latestXP, setLatestXP] = useState(0);
  const [latestTotalXP, setLatestTotalXP] = useState(0);

  // ─── Resolve course ID ───
  const getCourseId = () => {
    if (course?.id) return course.id;
    const id = COURSE_ID_MAP[course?.title];
    console.log("🔍 Resolved course ID from title:", course?.title, "->", id);
    return id;
  };
  const courseId = getCourseId();

  // Load saved progress on mount
  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem('hawkman_token');
      if (!token || !courseId) {
        fallbackToLocal();
        return;
      }
      
      try {
        const response = await fetch(`${API_BASE_URL}/api/progress/${courseId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setCompletedDays(data.completed_days?.length ? [0, ...data.completed_days] : [0]);
          setUnlockedLevel(data.unlocked_level || 1);
          setStreakCount(data.streak_count || 0);
        } else {
          fallbackToLocal();
        }
      } catch (err) {
        console.error("Failed to fetch progress:", err);
        fallbackToLocal();
      }
    };

    const fallbackToLocal = () => {
      const savedLevel = localStorage.getItem(`unlocked_level_${courseId || 'default'}`);
      if (savedLevel) setUnlockedLevel(parseInt(savedLevel, 10));
      const savedCompleted = localStorage.getItem(`completed_days_${courseId || 'default'}`);
      if (savedCompleted) setCompletedDays(JSON.parse(savedCompleted));
    };

    fetchProgress();
  }, [courseId]);

  // Handle auto-collapsing sidebar on mobile screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!course) return null;

  // Find content for the current path, account for level
  const contentKey = course.level === 'Advanced' ? `${course.title} (Advanced)` : course.title;
  const pathContent = PATHS_CONTENT[contentKey] || PATHS_CONTENT['AI for Educators'];
  const { icon: Icon, color, modules } = pathContent;
  
  const allDays = modules.flatMap(m => m.days);
  const currentDayData = allDays.find(d => d.id === activeDay);
  const isDarkModeDay = false;
  
  const progress = Math.round((completedDays.filter(d => d > 0).length / allDays.length) * 100);

  const handleNextDay = () => {
    if (currentDayData?.quizData) {
      setShowQuiz(true);
      window.scrollTo(0, 0);
    } else {
      handleDayComplete();
      goToNextDay();
    }
  };

  const handleDayComplete = async () => {
    console.log("🔥🔥🔥 handleDayComplete: STARTED 🔥🔥🔥");
    console.log("📅 activeDay:", activeDay);
    console.log("📚 courseId:", courseId);

    // Store current streak BEFORE API call
    const prevStreak = streakCount;

    let newCompleted = [...completedDays];
    let newUnlockedLevel = unlockedLevel;

    if (!completedDays.includes(activeDay)) {
      newCompleted = [...completedDays, activeDay];
      setCompletedDays(newCompleted);
    }
    if (activeDay === unlockedLevel && activeDay < allDays.length) {
      newUnlockedLevel = unlockedLevel + 1;
      setUnlockedLevel(newUnlockedLevel);
    }

    // Backup to local storage
    if (courseId) {
      localStorage.setItem(`unlocked_level_${courseId}`, newUnlockedLevel.toString());
      localStorage.setItem(`completed_days_${courseId}`, JSON.stringify(newCompleted));
    }

    // Sync with API
    const token = localStorage.getItem('hawkman_token');
    if (token && courseId) {
      console.log("📤 Sending POST to /api/progress/", courseId);
      try {
        const response = await fetch(`${API_BASE_URL}/api/progress/${courseId}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ completed_day: activeDay })
        });
        console.log("📥 Response status:", response.status);
        if (response.ok) {
          const data = await response.json();
          console.log("✅ API response:", data);
          
          // Update states
          setStreakCount(data.streak_count);
          setUnlockedLevel(data.unlocked_level);
          setCompletedDays(data.completed_days?.length ? [0, ...data.completed_days] : [0]);
          
          // ─── SHOW CELEBRATION ───
          setPreviousStreak(prevStreak);
          setLatestStreak(data.streak_count);
          setLatestTotalXP(data.total_xp || 0);
          setLatestXP(10); // 10 XP earned per day
          setShowStreakCelebration(true);
          
        } else {
          const errText = await response.text();
          console.error("❌ API error:", response.status, errText);
        }
      } catch (err) {
        console.error("❌ Fetch error:", err);
      }
    } else {
      console.warn("⚠️ Skipping API call: token=", !!token, "courseId=", courseId);
    }
  };

  const goToNextDay = () => {
    if (activeDay < allDays.length) {
      setActiveDay(prev => prev + 1);
      setShowQuiz(false);
      window.scrollTo(0, 0);
    }
  };

  const currentModule = modules.find(m => m.days.some(d => d.id === activeDay));
  const moduleLabel = currentModule ? currentModule.title.toUpperCase() : '';

  if (showQuiz) {
    console.log("📚 LearningPage: Showing Quiz for day", activeDay);
    console.log("📚 LearningPage: QuizData exists?", !!currentDayData?.quizData);
    return (
      <div className="w-full h-screen">
        <QuizSystem 
          dayTitle={currentDayData.title}
          quizData={currentDayData.quizData}
          onPass={() => {
            console.log("🔥🔥🔥 LearningPage: onPass CALLED! 🔥🔥🔥");
            console.log("📅 activeDay:", activeDay);
            console.log("📚 courseId:", courseId);
            handleDayComplete();
            goToNextDay();
          }}
          onBack={() => setShowQuiz(false)}
          isDarkMode={isDarkModeDay}
        />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar
        currentUser={currentUser}
        onLogout={onLogout}
        onLogoClick={onHome}
        onSignup={() => {}}
        onLogin={() => {}}
        onNavClick={onHome}
        onDashboard={onDashboard}
      />

      <div className={`flex flex-1 overflow-hidden relative transition-colors duration-500 ${isDarkModeDay ? 'bg-[#2e0052] text-white' : 'bg-site-bg text-site-text'}`}>

        {!isSidebarCollapsed && (
          <div 
            className="fixed inset-0 bg-black/40 z-10 md:hidden"
            onClick={() => setIsSidebarCollapsed(true)}
          />
        )}

        <aside className={`border-r flex flex-col h-full flex-shrink-0 transition-all duration-300 overflow-hidden absolute md:relative z-20 
          ${isSidebarCollapsed ? 'w-0 -translate-x-full border-none' : 'w-[320px] translate-x-0'} 
          ${isDarkModeDay ? 'bg-[#240042] border-purple-900/50' : 'bg-site-bg border-site-accent'}`}>

        <div className="p-6 border-b border-site-accent">
          <button 
            onClick={onBack}
            className={`flex items-center gap-2 transition-colors mb-6 group ${isDarkModeDay ? 'text-purple-300 hover:text-white' : 'text-slate-400 hover:text-site-text/80'}`}
          >
            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${isDarkModeDay ? 'border-purple-700 group-hover:bg-purple-800/50' : 'border-site-accent group-hover:bg-site-bg'}`}>
              <ArrowRight size={16} className="rotate-180" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back to Paths</span>
          </button>

          <div className="flex items-center gap-3 mb-6">
            <Icon size={24} style={{ color: isDarkModeDay ? '#e61e7d' : color }} strokeWidth={2.5} />
            <h1 className={`text-xl font-bold tracking-tight ${isDarkModeDay ? 'text-white' : 'text-site-text'}`}>{course.title}</h1>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${isDarkModeDay ? 'text-purple-400' : 'text-slate-400'}`}>Your Progress</span>
            <span className={`text-xs font-bold ${isDarkModeDay ? 'text-pink-400' : 'text-site-primary'}`}>{progress}%</span>
          </div>
          <div className={`h-2 rounded-full overflow-hidden ${isDarkModeDay ? 'bg-purple-900/50' : 'bg-slate-100'}`}>
            <div
              className={`h-full rounded-full transition-all duration-500 ${isDarkModeDay ? 'bg-pink-500 shadow-[0_0_10px_rgba(230,30,125,0.5)]' : 'bg-site-primary'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className={`text-xs font-medium mt-1 ${isDarkModeDay ? 'text-purple-400' : 'text-site-text/80'}`}>{progress}% Completed</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {modules.map((module) => (
            <div key={module.id}>
              <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">
                {module.title}
              </h2>
              
              <div className="space-y-1">
                {module.days.map((day) => {
                  const isLocked = day.id > unlockedLevel;
                  const isCompleted = completedDays.includes(day.id);
                  return (
                    <div 
                      key={day.id}
                      onClick={() => {
                        if (!isLocked) {
                          setActiveDay(day.id);
                          setShowQuiz(false);
                          if (window.innerWidth < 768) {
                            setIsSidebarCollapsed(true);
                          }
                        }
                      }} 
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                        isLocked ? 'opacity-50 cursor-not-allowed grayscale' : 'cursor-pointer'
                      } ${
                        activeDay === day.id 
                          ? (isDarkModeDay ? 'bg-pink-600/20 ring-1 ring-pink-500/50' : `${day.bg}`) 
                          : (isDarkModeDay ? 'hover:bg-site-bg/5' : 'hover:bg-site-bg')
                      }`}
                    >
                      <div className="relative">
                        {isLocked ? (
                          <Lock size={18} className="text-slate-400 mt-1" />
                        ) : isCompleted ? (
                          <Trophy size={18} className="text-emerald-500 mt-1" />
                        ) : (
                          <PlayCircle size={20} className={activeDay === day.id ? (isDarkModeDay ? 'text-pink-400 mt-0.5' : `${day.color} mt-0.5`) : 'text-slate-400 mt-0.5'} />
                        )}
                      </div>
                      <div>
                        <h3 className={`text-sm font-bold mb-0.5 ${activeDay === day.id ? (isDarkModeDay ? 'text-white' : 'text-site-text') : (isDarkModeDay ? 'text-purple-200' : 'text-site-text/80')}`}>
                          {day.title}
                        </h3>
                        <p className={`text-xs ${activeDay === day.id ? (isDarkModeDay ? 'text-pink-300' : `${day.color}/80`) : 'text-slate-400'}`}>
                          {isLocked ? 'Locked' : day.duration}
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

      <main className="flex-1 bg-site-bg relative flex flex-col h-full overflow-hidden">

        <div className={`w-full flex-shrink-0 border-b h-16 flex items-center justify-between px-8 z-10 shadow-sm transition-colors duration-500 ${isDarkModeDay ? 'bg-[#2e0052] border-purple-900/50' : 'bg-site-bg border-site-accent'}`}>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className={`p-2 rounded-lg transition-colors border ${isDarkModeDay ? 'bg-purple-800/20 border-purple-700 text-purple-200 hover:text-white' : 'bg-site-bg border-site-accent text-site-text/80 hover:text-site-text'}`}
              title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isSidebarCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
            </button>
            <span className={`text-sm font-bold transition-colors ${isDarkModeDay ? 'text-purple-300' : 'text-slate-400'}`}>{moduleLabel}</span>
          </div>
          
          <div></div>
        </div>

        <div className="flex-1 overflow-hidden">
          {(course.title === 'AI for Educators' && course.level !== 'Advanced') ? (
            <>
              {activeDay === 1 && <MagicSchoolDay1 onNext={handleNextDay} />}
              {activeDay === 2 && <EduaideDay2 onNext={handleNextDay} />}
              {activeDay === 3 && <NotebookLMDay3 onNext={handleNextDay} />}
              {activeDay === 4 && <DiffitDay4 onNext={handleNextDay} />}
              {activeDay === 5 && <GeminiDay5 onNext={handleNextDay} />}
              {activeDay === 6 && <GrokDay6 onNext={handleNextDay} />}
              {activeDay === 7 && <SunoDay7 onNext={handleNextDay} />}
              {activeDay === 8 && <BriskDay8 onNext={handleNextDay} />}
              {activeDay === 9 && <SnorklDay9 onNext={handleNextDay} />}
              {activeDay === 10 && <EssayGraderDay10 onNext={handleNextDay} />}
              {activeDay === 11 && <QuizizzDay11 onNext={handleNextDay} />}
              {activeDay === 12 && <KhanmigoDay12 onNext={handleNextDay} />}
              {activeDay === 13 && <FlintDay13 onNext={handleNextDay} />}
              {activeDay === 14 && <SchoolAIDay14 onNext={handleNextDay} />}
              {activeDay === 15 && <KahootDay15 onNext={handleNextDay} />}
              {activeDay === 16 && <ScribbleDiffusionDay16 onNext={handleNextDay} />}
              {activeDay === 17 && <ParlayDay17 onNext={handleNextDay} />}
              {activeDay === 18 && <ReadAlongDay18 onNext={handleNextDay} />}
              {activeDay === 19 && <CuripodDay19 onNext={handleNextDay} />}
              {activeDay === 20 && <LabsterDay20 onNext={handleNextDay} />}
              {activeDay === 21 && <Lumen5Day21 onNext={handleNextDay} />}
              {activeDay === 22 && <TeacherMaticDay22 onNext={handleNextDay} />}
              {activeDay === 23 && <FetchyDay23 onNext={handleNextDay} />}
              {activeDay === 24 && <EllieDay24 onNext={handleNextDay} />}
              {activeDay === 25 && <GradescopeDay25 onNext={handleNextDay} />}
              {activeDay === 26 && <TurnitinDay26 onNext={handleNextDay} />}
              {activeDay === 27 && <EdthenaDay27 onNext={handleNextDay} />}
              {activeDay === 28 && <LoopDay28 onNext={() => console.log('Challenge Completed!')} />}
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

    {/* ─── STREAK CELEBRATION POPUP ─── */}
    {showStreakCelebration && (
      <StreakCelebration 
        streak={latestStreak}
        previousStreak={previousStreak}
        xpEarned={latestXP}
        totalXP={latestTotalXP}
        onClose={() => setShowStreakCelebration(false)}
      />
    )}

  </div>
  );
};

export default LearningPage;