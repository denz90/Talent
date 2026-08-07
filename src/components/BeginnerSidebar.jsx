import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  Lightbulb,
  PenTool,
  Zap,
  Settings,
  ShieldAlert,
  ChevronRight,
  ChevronDown,
  RefreshCw,
  FileText,
  Code,
  Sparkles
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, onClick, active = false }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium group ${active
      ? 'bg-gradient-to-r from-site-grad-from to-site-grad-to text-site-text shadow-lg shadow-brand-primary/20'
      : 'text-site-text/80 hover:bg-site-bg hover:text-site-accent hover:shadow-sm'
      }`}
  >
    <div className={`p-2 rounded-lg transition-colors ${active ? 'bg-site-bg/20' : 'bg-site-bg group-hover:bg-site-accent'}`}>
      <Icon className="w-4 h-4" />
    </div>
    <span className="flex-1">{label}</span>
    {active && <ChevronRight className="w-3 h-3 opacity-50" />}
  </button>
);

const BeginnerSidebar = ({ activeSection, onSelectSection, className = "w-72 hidden lg:flex flex-col gap-6 sticky top-28 pr-4 custom-scrollbar" }) => {

  const introTopics = [
    { id: 'ai-welcome', label: 'Welcome to AI', icon: Sparkles },
    { id: 'ai-foundation', label: 'Foundation & Origin', icon: HelpCircle },
    { id: 'ai-types', label: 'The AI Family', icon: Code },
    { id: 'ai-industries', label: 'AI in Industries', icon: Lightbulb },
    { id: 'ai-everyday', label: 'Everyday AI', icon: Zap },
  ];

  const topics = [
    { id: 'intro', label: 'What is a Prompt?', icon: HelpCircle },
    { id: 'basics', label: 'Prompting Basics', icon: Lightbulb },
    { id: 'craft', label: 'The CRAFT Formula', icon: PenTool },
    { id: 'skills', label: 'Practical Skills', icon: Zap },
    { id: 'iterative', label: 'Iterative Prompting', icon: RefreshCw },
    { id: 'advanced', label: 'Advanced Techniques', icon: Settings },
    { id: 'work', label: 'Prompting for Work', icon: FileText },
    { id: 'ethics', label: 'Ethics & Limitations', icon: ShieldAlert },
  ];

  const challenges = [
    { id: 'eduaide', label: 'Eduaide AI', icon: Sparkles },
    { id: 'diffit', label: 'Diffit', icon: Sparkles },
    { id: 'gemini', label: 'Google Gemini', icon: Sparkles },
    { id: 'suno', label: 'Suno AI', icon: Sparkles },
    { id: 'scribble', label: 'Scribble Diffusion', icon: Sparkles },
    { id: 'readalong', label: 'Read Along AI', icon: Sparkles },
    { id: 'lumen5', label: 'Lumen5', icon: Sparkles },
  ];

  const [isIntroOpen, setIsIntroOpen] = useState(true);
  const [isPromptingOpen, setIsPromptingOpen] = useState(true);
  const [isChallengesOpen, setIsChallengesOpen] = useState(true);

  return (
    <aside className={className}>
      {/* Introduction To AI Section */}
      <div className="bg-site-bg rounded-[24px] border border-site-accent overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setIsIntroOpen(!isIntroOpen)}
          className={`w-full flex items-center justify-between p-5 transition-colors group ${isIntroOpen ? 'bg-site-bg/50' : 'hover:bg-site-bg'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl transition-colors ${isIntroOpen ? 'bg-gradient-to-br from-site-primary to-site-accent text-site-text shadow-lg shadow-brand-primary/20' : 'bg-brand-secondary text-brand-primary'}`}>
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-site-text tracking-tight">Introduction To AI</span>
          </div>
          <motion.div
            animate={{ rotate: isIntroOpen ? 0 : -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className={`w-4 h-4 ${isIntroOpen ? 'text-site-primary' : 'text-slate-400 opacity-50'}`} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isIntroOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <nav className="p-3 pt-0 space-y-1.5 pb-5">
                <div className="h-px bg-slate-100 mx-2 mb-4 opacity-50" />
                {introTopics.map((topic) => (
                  <SidebarItem
                    key={topic.id}
                    id={topic.id}
                    label={topic.label}
                    icon={topic.icon}
                    onClick={() => onSelectSection(topic.id)}
                    active={activeSection === topic.id}
                  />
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Prompt Engineering Section */}
      <div className="bg-site-bg rounded-[24px] border border-site-accent overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setIsPromptingOpen(!isPromptingOpen)}
          className={`w-full flex items-center justify-between p-5 transition-colors group ${isPromptingOpen ? 'bg-site-bg/50' : 'hover:bg-site-bg'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl transition-colors ${isPromptingOpen ? 'bg-gradient-to-br from-site-primary to-site-accent text-site-text shadow-lg shadow-brand-primary/20' : 'bg-brand-secondary text-brand-primary'}`}>
              <Code className="w-4 h-4" />
            </div>
            <span className="font-bold text-site-text tracking-tight">Prompt Engineering</span>
          </div>
          <motion.div
            animate={{ rotate: isPromptingOpen ? 0 : -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className={`w-4 h-4 ${isPromptingOpen ? 'text-site-primary' : 'text-slate-400 opacity-50'}`} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isPromptingOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <nav className="p-3 pt-0 space-y-1.5 pb-5">
                <div className="h-px bg-slate-100 mx-2 mb-4 opacity-50" />
                {topics.map((topic) => (
                  <SidebarItem
                    key={topic.id}
                    id={topic.id}
                    label={topic.label}
                    icon={topic.icon}
                    onClick={() => onSelectSection(topic.id)}
                    active={activeSection === topic.id}
                  />
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Challenges Section */}
      <div className="bg-site-bg rounded-[24px] border border-site-accent overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setIsChallengesOpen(!isChallengesOpen)}
          className={`w-full flex items-center justify-between p-5 transition-colors group ${isChallengesOpen ? 'bg-site-bg/50' : 'hover:bg-site-bg'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl transition-colors ${isChallengesOpen ? 'bg-gradient-to-br from-site-primary to-site-accent text-site-text shadow-lg shadow-brand-primary/20' : 'bg-brand-secondary text-brand-primary'}`}>
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-site-text tracking-tight">7 Days Challenge</span>
          </div>
          <motion.div
            animate={{ rotate: isChallengesOpen ? 0 : -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className={`w-4 h-4 ${isChallengesOpen ? 'text-site-primary' : 'text-slate-400 opacity-50'}`} />
          </motion.div>
        </button>


        <AnimatePresence initial={false}>
          {isChallengesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <nav className="p-3 pt-0 space-y-1.5 pb-5">
                <div className="h-px bg-slate-100 mx-2 mb-4 opacity-50" />
                {challenges.map((challenge) => (
                  <SidebarItem
                    key={challenge.id}
                    id={challenge.id}
                    label={challenge.label}
                    icon={challenge.icon}
                    onClick={() => onSelectSection(challenge.id)}
                    active={activeSection === challenge.id}
                  />
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-auto p-6 rounded-2xl bg-gradient-to-br from-site-primary to-site-accent text-site-text relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-site-bg/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        <button className="w-full py-2 bg-site-bg text-site-primary rounded-lg text-xs font-bold hover:bg-site-bg transition-colors relative z-10">
          Practice your Prompting skills with ChatGPT
        </button>
      </div>
    </aside>
  );
};

export default BeginnerSidebar;

