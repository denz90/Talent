import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import MagicSchoolDay1 from './MagicSchoolDay1';
import EduaideDay2 from './EduaideDay2';
import NotebookLMDay3 from './NotebookLMDay3';
import DiffitDay4 from './DiffitDay4';
import GeminiDay5 from './GeminiDay5';
import GrokDay6 from './GrokDay6';
import SunoDay7 from './SunoDay7';

const LearningPage = ({ course }) => {
  const [activeDay, setActiveDay] = useState(1);
  const progress = Math.round((activeDay / 7) * 100);

  const handleNextDay = () => {
    if (activeDay < 7) {
      setActiveDay(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  if (!course) return null;

  const { title, icon: Icon, color } = course;

  const moduleLabel =
    activeDay <= 2 ? 'MODULE 1: PLANNING' :
    activeDay <= 4 ? 'MODULE 2: ASSESSMENT' :
    activeDay <= 6 ? 'MODULE 3: CREATION' :
    'MODULE 4: FINAL MASTERY';

  return (
    <div className="min-h-screen bg-white font-sans flex text-slate-900">

      {/* ── Sidebar ── */}
      <aside className="w-[320px] border-r border-slate-200 flex flex-col h-screen flex-shrink-0">

        {/* Header: Course Title & Progress */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <Icon size={24} style={{ color }} strokeWidth={2.5} />
            <h1 className="text-xl font-bold tracking-tight text-slate-900">{title}</h1>
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
          <p className="text-xs font-medium text-slate-500 mt-1">{progress}% Completed</p>
        </div>

        {/* Middle: Modules (scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">

          {/* Module 1 */}
          <div>
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">Module 1: Planning</h2>
            <div className="space-y-1">
              <div onClick={() => setActiveDay(1)} className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeDay === 1 ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}>
                <PlayCircle size={20} className={activeDay === 1 ? 'text-brand-primary mt-0.5' : 'text-slate-400 mt-0.5'} />
                <div>
                  <h3 className={`text-sm font-bold mb-0.5 ${activeDay === 1 ? 'text-slate-900' : 'text-slate-600'}`}>Day 1: MagicSchool AI</h3>
                  <p className={`text-xs ${activeDay === 1 ? 'text-brand-primary/80' : 'text-slate-400'}`}>15 min read</p>
                </div>
              </div>

              <div onClick={() => setActiveDay(2)} className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeDay === 2 ? 'bg-emerald-50/50' : 'hover:bg-slate-50'}`}>
                <PlayCircle size={20} className={activeDay === 2 ? 'text-emerald-600 mt-0.5' : 'text-slate-400 mt-0.5'} />
                <div>
                  <h3 className={`text-sm font-bold mb-0.5 ${activeDay === 2 ? 'text-slate-900' : 'text-slate-600'}`}>Day 2: Eduaide.AI</h3>
                  <p className={`text-xs ${activeDay === 2 ? 'text-emerald-600/80' : 'text-slate-400'}`}>10 min read</p>
                </div>
              </div>
            </div>
          </div>

          {/* Module 2 */}
          <div>
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">Module 2: Assessment</h2>
            <div className="space-y-1">
              <div onClick={() => setActiveDay(3)} className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeDay === 3 ? 'bg-purple-50/50' : 'hover:bg-slate-50'}`}>
                <PlayCircle size={20} className={activeDay === 3 ? 'text-purple-600 mt-0.5' : 'text-slate-400 mt-0.5'} />
                <div>
                  <h3 className={`text-sm font-bold mb-0.5 ${activeDay === 3 ? 'text-slate-900' : 'text-slate-600'}`}>Day 3: NotebookLM</h3>
                  <p className={`text-xs ${activeDay === 3 ? 'text-purple-600/80' : 'text-slate-400'}`}>20 min read</p>
                </div>
              </div>

              <div onClick={() => setActiveDay(4)} className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeDay === 4 ? 'bg-orange-50/50' : 'hover:bg-slate-50'}`}>
                <PlayCircle size={20} className={activeDay === 4 ? 'text-orange-600 mt-0.5' : 'text-slate-400 mt-0.5'} />
                <div>
                  <h3 className={`text-sm font-bold mb-0.5 ${activeDay === 4 ? 'text-slate-900' : 'text-slate-600'}`}>Day 4: Diffit</h3>
                  <p className={`text-xs ${activeDay === 4 ? 'text-orange-600/80' : 'text-slate-400'}`}>25 min read</p>
                </div>
              </div>
            </div>
          </div>

          {/* Module 3 */}
          <div>
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">Module 3: Creation</h2>
            <div className="space-y-1">
              <div onClick={() => setActiveDay(5)} className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeDay === 5 ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}>
                <PlayCircle size={20} className={activeDay === 5 ? 'text-blue-600 mt-0.5' : 'text-slate-400 mt-0.5'} />
                <div>
                  <h3 className={`text-sm font-bold mb-0.5 ${activeDay === 5 ? 'text-slate-900' : 'text-slate-600'}`}>Day 5: Google Gemini</h3>
                  <p className={`text-xs ${activeDay === 5 ? 'text-blue-600/80' : 'text-slate-400'}`}>30 min read</p>
                </div>
              </div>

              <div onClick={() => setActiveDay(6)} className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeDay === 6 ? 'bg-purple-50/50' : 'hover:bg-slate-50'}`}>
                <PlayCircle size={20} className={activeDay === 6 ? 'text-purple-600 mt-0.5' : 'text-slate-400 mt-0.5'} />
                <div>
                  <h3 className={`text-sm font-bold mb-0.5 ${activeDay === 6 ? 'text-slate-900' : 'text-slate-600'}`}>Day 6: Grok AI</h3>
                  <p className={`text-xs ${activeDay === 6 ? 'text-purple-600/80' : 'text-slate-400'}`}>20 min read</p>
                </div>
              </div>
            </div>
          </div>

          {/* Module 4 */}
          <div>
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">Module 4: Final Mastery</h2>
            <div className="space-y-1">
              <div onClick={() => setActiveDay(7)} className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeDay === 7 ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}>
                <PlayCircle size={20} className={activeDay === 7 ? 'text-blue-600 mt-0.5' : 'text-slate-400 mt-0.5'} />
                <div>
                  <h3 className={`text-sm font-bold mb-0.5 ${activeDay === 7 ? 'text-slate-900' : 'text-slate-600'}`}>Day 7: Suno AI</h3>
                  <p className={`text-xs ${activeDay === 7 ? 'text-blue-600/80' : 'text-slate-400'}`}>20 min read</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: User Profile */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-brand-primary font-bold text-sm">
              TE
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">Teacher Educator</p>
              <p className="text-xs text-slate-500">Pro Member</p>
            </div>
          </div>
        </div>

      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 bg-slate-50 relative flex flex-col h-screen overflow-hidden">

        {/* Breadcrumb bar */}
        <div className="w-full flex-shrink-0 border-b border-slate-200 bg-white h-16 flex items-center px-8 z-10 shadow-sm">
          <span className="text-sm font-bold text-slate-400">{moduleLabel}</span>
        </div>

        {/* Day content */}
        <div className="flex-1 overflow-hidden">
          {activeDay === 1 && <MagicSchoolDay1 onNext={handleNextDay} />}
          {activeDay === 2 && <EduaideDay2 onNext={handleNextDay} />}
          {activeDay === 3 && <NotebookLMDay3 onNext={handleNextDay} />}
          {activeDay === 4 && <DiffitDay4 onNext={handleNextDay} />}
          {activeDay === 5 && <GeminiDay5 onNext={handleNextDay} />}
          {activeDay === 6 && <GrokDay6 onNext={handleNextDay} />}
          {activeDay === 7 && <SunoDay7 onNext={handleNextDay} />}
        </div>

      </main>
    </div>
  );
};

export default LearningPage;
