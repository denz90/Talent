import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  ArrowRight,
  Zap,
  FileText,
  Trophy,
  ChevronRight,
  Target,
  MessageSquare,
  Users,
  GraduationCap,
  Mic,
  Library,
  Settings,
  ShieldCheck,
  Flame
} from 'lucide-react';

const EllieDay24 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Bot },
    { id: 'features', label: 'Features', icon: Layers },
    { id: 'guide', label: 'Guide', icon: Target },
    { id: 'challenge', label: 'Challenge', icon: Trophy }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-site-primary text-site-text">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-site-primary-400 rounded-3xl p-10">
          <div className="absolute opacity-20"></div>
          
          <div className="absolute top-10 right-10 animate-pulse text-site-text">
            <Bot size={64} strokeWidth={1} />
          </div>

          <div className="text-center space-y-6 pt-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-site-bg/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 24 • AI Assistant
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 24: Ellie AI Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Automate Personalized Learning & Administrative Tasks
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <Clock size={16} /> Saves 8+ Hours/Week
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <BarChart3 size={16} /> AI Analytics
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <MessageSquare size={16} /> 24/7 Support
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-site-button backdrop-blur-md p-1.5 rounded-2xl flex gap-2 border border-site-accent max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.id 
                  ? 'bg-site-bg text-site-text shadow-lg scale-[1.02]' 
                  : 'text-site-text/80 hover:bg-site-bg'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-site-text tracking-tight">What is Ellie AI?</h2>
                  <p className="text-site-text/80 leading-relaxed text-lg">
                    Ellie AI is an AI-powered virtual assistant designed specifically for educators. It automates administrative tasks, generates personalized learning materials, and provides data-driven insights to enhance teaching efficiency.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Clock, title: 'Saves 8+ Hours/Week', desc: 'By automating repetitive tasks (emails, grading, scheduling)' },
                      { icon: Layers, title: 'Differentiated Resources', desc: 'Creates worksheets, quizzes, and lesson plans in seconds' },
                      { icon: BarChart3, title: 'AI Analytics', desc: 'Tracks student progress to identify learning gaps early' },
                      { icon: MessageSquare, title: '24/7 Pedagogical Support', desc: 'On-demand advice via chatbot for teaching strategies' }
                    ].map((item, i) => (
                      <div key={i} className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-site-text">{item.title}</h4>
                          <p className="text-sm text-site-text/80">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="hidden"></div>
                  <div className="bg-site-bg p-8 rounded-3xl shadow-xl border border-site-accent relative overflow-hidden group">
                    <img src="/Virtual assistant-pana 1.png" alt="Ellie AI Illustration" className="w-full h-auto relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-site-text tracking-tight">Key Features & How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Smart Lesson Planner',
                    icon: FileText,
                    color: 'purple',
                    howTo: 'Input topic/grade → Select standards → Generate drafts',
                    benefit: 'Cuts planning time by 70% with standards-aligned content'
                  },
                  {
                    title: 'Auto-Quiz Generator',
                    icon: Zap,
                    color: 'blue',
                    howTo: 'Upload a textbook PDF → Set difficulty level → Receive questions',
                    benefit: 'Creates assessments in <1 minute'
                  },
                  {
                    title: 'Student Progress Dashboard',
                    icon: BarChart3,
                    color: 'emerald',
                    howTo: 'Sync with LMS → View AI-generated analytics on performance',
                    benefit: 'Identifies at-risk students early'
                  },
                  {
                    title: 'Email Automation',
                    icon: MessageSquare,
                    color: 'orange',
                    howTo: 'Type request (e.g., "Remind parents") → AI drafts polished email',
                    benefit: 'Handles 90% of routine communication'
                  },
                  {
                    title: 'Pedagogical Chatbot',
                    icon: Bot,
                    color: 'indigo',
                    howTo: 'Ask strategies (e.g., "How to teach fractions visually?") → Get methods',
                    benefit: 'On-demand professional development'
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                    <div className={`w-10 h-10 rounded-xl mb-6 flex items-center justify-center bg-site-primary/40 flex items-center justify-center text-site-text`}>
                      <feature.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-site-text mb-4">{feature.title}</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-site-bg rounded-xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">How to Use</p>
                        <p className="text-xs text-slate-700">{feature.howTo}</p>
                      </div>
                      <div className={`p-3 bg-site-primary/40 rounded-xl border border-site-accent/10`}>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Benefit</p>
                        <p className="text-xs text-site-text font-semibold">{feature.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-site-text tracking-tight text-center">Step-by-Step Getting Started Guide</h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { step: 1, title: 'Sign Up', desc: 'Go to Ellie AI\'s website → Click "Try Free for Educators" → Sign up with school email' },
                  { step: 2, title: 'Set Up Your Classroom', desc: 'Click "My Classes" → Add class name/grade level → Import student roster (CSV or LMS sync)' },
                  { step: 3, title: 'Generate Your First Resource', desc: 'Navigate to "Lesson Planner" → Enter topic (e.g., "Photosynthesis") → Select NGSS/Common Core standards → Click "Generate Draft"' },
                  { step: 4, title: 'Automate a Task', desc: 'Go to "Assistants" → Choose "Email Writer" → Type request (e.g., "Draft email requesting volunteer chaperones") → Edit AI-generated draft → Send' },
                  { step: 5, title: 'Analyze Student Data', desc: 'Open "Progress Hub" → Select a recent quiz → Review AI-highlighted knowledge gaps' }
                ].map((item, i) => (
                  <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent flex items-center gap-8 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-full bg-site-primary text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-site-primary/20">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-site-text mb-1">{item.title}</h4>
                      <p className="text-sm text-site-text/80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-10">
                <div className="hidden"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-site-text text-xs font-bold uppercase tracking-[0.2em]">
                    <Target size={16} /> Practical Challenge Task
                  </div>
                  <h2 className="text-3xl font-bold leading-tight">
                    "Create a differentiated lesson bundle and automate parent communication."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Planning: Generate Tiered Worksheets', 
                        desc: 'Generate Beginner (scaffolded), Intermediate, and Advanced (extension) versions. Note how AI adjusted complexity.',
                        icon: FileText,
                        step: 'Step 1'
                      },
                      { 
                        title: 'Assessment: Auto-Grade Assignments', 
                        desc: 'Upload a student essay or quiz. Set a specific rubric. Review AI feedback and scores. Screenshot for records.',
                        icon: GraduationCap,
                        step: 'Step 2'
                      },
                      { 
                        title: 'Communication: Personalized Progress Emails', 
                        desc: 'Draft individual updates for 5 students. Include Dashboard data. Note the professional yet supportive tone.',
                        icon: MessageSquare,
                        step: 'Step 3'
                      },
                      { 
                        title: 'Collaboration: Share Your Output', 
                        desc: 'Export bundle and feedback logs. Organize in Ellie AI Library. Post with #EdTechEllieChallenge.',
                        icon: Users,
                        step: 'Step 4'
                      }
                    ].map((step, i) => (
                      <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-site-text uppercase tracking-widest">{step.step}</span>
                          <step.icon size={16} className="text-site-text" />
                        </div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p className="text-sm text-sm text-site-text">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Savings with Ellie AI */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight text-center">Weekly Time Savings with Ellie AI</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Differentiated Materials', traditional: '4-5 hours', ellie: '45 mins', saved: '85%+' },
                    { label: 'Essay Grading', traditional: '6-8 hours', ellie: '60 mins', saved: '85%+' },
                    { label: 'Parent Communication', traditional: '2-3 hours', ellie: '15 mins', saved: '87%+' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-site-bg border border-site-accent shadow-sm text-center space-y-4">
                      <h4 className="font-bold text-site-text/80 text-xs uppercase tracking-widest">{item.label}</h4>
                      <div className="flex justify-center items-end gap-1">
                        <span className="text-3xl font-black text-indigo-600">{item.saved}</span>
                      </div>
                      <div className="text-xs text-site-text/80 space-y-1">
                        <p>Traditional: {item.traditional}</p>
                        <p className="font-bold text-indigo-600">Ellie AI: {item.ellie}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Voice Commands', icon: Mic, desc: 'Use Ellie AI\'s voice interface to dictate lesson objectives or email drafts while multitasking.' },
                  { title: 'Template Library', icon: Library, desc: 'Save recurring resource formats to your personal library for instant reuse across semesters.' },
                  { title: 'Data-Driven Interventions', icon: BarChart3, desc: 'Allow Ellie AI to flag students falling behind and suggest specific remediation exercises automatically.' }
                ].map((tip, i) => (
                  <div key={i} className="bg-site-bg p-6 rounded-3xl border border-site-accent space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/30 flex items-center justify-center text-site-text mb-4">
                      <tip.icon size={24} />
                    </div>
                    <h4 className="font-bold text-site-text">{tip.title}</h4>
                    <p className="text-sm text-site-text/80 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>

              {/* AI Assistant Capabilities */}
              <div className="bg-site-primary rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight text-center">AI Assistant Capabilities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { title: 'Lesson Plans', icon: FileText, desc: 'Standards aligned' },
                    { title: 'Quiz Generation', icon: Zap, desc: 'In < 1 minute' },
                    { title: 'Email Drafts', icon: MessageSquare, desc: 'Professional tone' },
                    { title: 'Progress Reports', icon: BarChart3, desc: 'Data-driven' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                      <div className="w-12 h-12 rounded-2xl bg-site-bg/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LMS Integration */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Seamless LMS Integration</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Google Classroom', icon: ShieldCheck },
                    { label: 'Canvas', icon: Settings },
                    { label: 'Schoology', icon: Users },
                    { label: 'PowerSchool', icon: GraduationCap }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-4 bg-site-bg rounded-2xl shadow-sm border border-site-accent">
                      <item.icon size={20} className="text-indigo-600" />
                      <span className="text-xs font-bold text-slate-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Quote */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-site-grad-from to-site-grad-to p-12 text-center space-y-8 shadow-2xl shadow-site-accent-600/20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-site-bg/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <Trophy size={48} className="mx-auto text-white" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "Ellie AI turns administrative overload into intentional teaching time."
            </h2>
            <p className="text-site-text font-medium">Share your results with #EdTechEllieChallenge!</p>
            <button 
              onClick={onNext}
              className="mt-4 bg-site-bg text-site-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto group"
            >
              Start Your Challenge <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        </div>
    </div>
  );
};

export default EllieDay24;
