import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Layers,
  MessageSquare,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Zap
} from 'lucide-react';

const LabsterDay20 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview'},
    { id: 'features', label: 'Features'},
    { id: 'guide', label: 'Guide'},
    { id: 'challenge', label: 'Challenge'}
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-site-primary text-site-text">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-12 pb-32">
        
        {/* Header Hero */}
        <div className="bg-site-primary-400 rounded-3xl p-10">
          
          <div className="absolute top-10 right-10 animate-pulse text-site-text">
            <BookOpen size={64} strokeWidth={1} />
          </div>

          <div className="text-center space-y-6 pt-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 20: Labster Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Revolutionize Science Education with Virtual Labs
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <span className="flex items-center gap-2 text-site-text">
                <Shield size={16} /> Safe & Accessible
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <TrendingUp size={16} /> Data Insights
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <Zap size={16} /> Gamified
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
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          {activeTab === 'overview' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-site-bg rounded-3xl p-10 border border-site-accent">
                <h2 className="text-3xl text-site-text font-bold mb-6">What is Labster?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  Labster is an AI-powered virtual lab platform that provides immersive, interactive science simulations for STEM education. It replaces or supplements physical labs with 3D environments, gamified scenarios, and adaptive learning paths.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  { [
                      { icon: Shield, title: 'Safe & Accessible', desc: 'Conduct dangerous/expensive experiments (e.g., DNA sequencing) virtually' },
                      { icon: Layers, title: 'Democratizes Science', desc: 'Students can lab anytime, anywhere—no equipment needed' },
                      { icon: TrendingUp, title: 'Data-Driven Insights', desc: 'Tracks student performance with granular analytics' },
                      { icon: Zap, title: 'Engagement Boost', desc: 'Game elements (storylines, rewards) increase participation' }
                    ].map((item, i) => (
                    <div key={i} className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                        <item.icon size={24} />
                      </div>
                      <p className="text-site-text font-medium">
                        <span className="font-bold text-site-primary block mb-1">{item.title}:</span>
                        {item.desc}
                      </p>
                    </div>
                  )) }
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Key Features &amp; How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                { [
                  {
                    title: 'Virtual Labs',
                    icon: BookOpen,
                    color: 'purple',
                    howTo: 'Choose from 300+ simulations (e.g., "Cellular Respiration") → Launch in browser',
                    benefit: 'Replaces physical labs with zero setup/cost'
                  },
                  {
                    title: 'Teacher Dashboard',
                    icon: TrendingUp,
                    color: 'blue',
                    howTo: 'View class progress, quiz scores, and time spent per lab',
                    benefit: 'Identifies struggling students instantly'
                  },
                  {
                    title: 'Assignments',
                    icon: Target,
                    color: 'emerald',
                    howTo: 'Create custom lab sequences with deadlines → Share via LMS (Google Classroom)',
                    benefit: 'Aligns simulations with curriculum pacing'
                  },
                  {
                    title: 'Lab Manuals',
                    icon: FileText,
                    color: 'orange',
                    howTo: 'Download pre/post-lab PDFs with theory, quizzes, and extension activities',
                    benefit: 'Saves 5+ hours/week on lesson planning'
                  },
                  {
                    title: 'AR Mode',
                    icon: Layers,
                    color: 'indigo',
                    howTo: 'Use mobile app to overlay 3D lab equipment onto real-world surfaces',
                    benefit: 'Enhances kinesthetic learning for tactile learners'
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-site-primary/40 flex items-center justify-center text-site-text">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                      <div className="space-y-4">
                        <div className="text-sm">
                          <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                          <p className="text-site-text">{feature.howTo}</p>
                        </div>
                        <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                          <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                          <p className="text-xs font-bold text-green-100">{feature.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )) }
              </div>
            </div>
          )}{activeTab === 'guide' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Getting Started Guide</h2>
              
              <div className="space-y-6">
                { [
                  { step: 1, title: 'Sign Up', desc: 'Go to Labster.com → Click "Educator Trial" → Sign up with school email' },
                  { step: 2, title: 'Browse Labs', desc: 'Click "Catalog" → Filter by subject (e.g., Biology) → Preview labs with "Try Demo" button' },
                  { step: 3, title: 'Create Class', desc: 'Go to "Classes" → Click "+ New Class" → Name it → Add student emails or share join link' },
                  { step: 4, title: 'Assign First Lab', desc: 'Open a lab (e.g., "Mendelian Inheritance") → Click "Assign" → Set due date + optional quiz → Publish' },
                  { step: 5, title: 'Monitor Progress', desc: 'Check "Dashboard" → View heatmaps of student attempts → Click on outliers to offer help' }
                ].map((step, i) => (
                  <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent flex items-center gap-8 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-full bg-site-primary text-site-text flex items-center justify-center text-2xl font-black shadow-lg shadow-pink-500/20">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-site-text">{step.desc}</p>
                    </div>
                  </div>
                )) }
              </div>
            </div>
          )}{activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-10">
                <div className="hidden"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-site-text text-xs font-bold uppercase tracking-[0.2em]">
                    <Target size={16} /> Practical Challenge Task
                  </div>
                  <h2 className="text-3xl font-bold leading-tight">
                    "Run a virtual lab session with embedded formative assessments."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: 'Choose Lab', icon: BookOpen, desc: 'Filter the catalog for your grade level. Select a lab (e.g., "Bacterial Growth"). Review the theoretical background.'},
                      { title: 'Preview Lab', icon: Target, desc: 'Launch the "Demo" mode. Complete at least one experiment step. Screenshot your progress or lab result.'},
                      { title: 'Assign Lab', icon: FileText, desc: 'Create a class and assign the lab. Set a specific learning objective. Share the student invite link.'},
                      { title: 'Post-Lab Analysis', icon: TrendingUp, desc: 'View student attempt reports. Identify one common misconception. Note how you would address it in class.'},
                      { title: 'Reflection', icon: MessageSquare, desc: 'Collect student feedback on simulation ease. Note 1 benefit vs. physical lab. Share insights with #AIVirtualLabs.'}
                    ].map((step, i) => (
                      <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                        <step.icon size={16} className="text-site-text" />
                        <h4 className="font-bold text-sm">{step.title}</h4>
                        <p className="text-xs text-sm text-site-text">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sample Learning Objectives */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Sample Learning Objectives: Enzyme Kinetics Lab</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 1, text: 'Understand Enzyme Function', desc: 'Explain how enzymes catalyze chemical reactions and the role of the active site.' },
                    { id: 2, text: 'Analyze Environmental Factors', desc: 'Determine the effect of pH and temperature on enzyme activity through experimentation.' },
                    { id: 3, text: 'Apply Michaelis-Menten Model', desc: 'Use experimental data to calculate Vmax and Km for a specific enzyme.' }
                  ].map((obj, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-site-bg border border-site-accent shadow-sm space-y-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                        {obj.id}
                      </div>
                      <h4 className="font-bold text-site-text text-sm">{obj.text}</h4>
                      <p className="text-xs text-site-text/80 leading-relaxed">{obj.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Mix-Modal Use', icon: Layers, desc: 'Pair virtual labs with hands-on experiments (blended learning) for the best conceptual understanding.' },
                  { title: 'Differentiate', icon: Layers, desc: 'Assign specific lab levels or extra theory modules to students based on their baseline knowledge.' },
                  { title: 'LMS Integration', icon: Zap, desc: 'Sync Labster with Canvas or Google Classroom to automate grading and roster management.' }
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

              {/* Simulations Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">300+ Virtual Lab Simulations</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: 'Biology', icon: BookOpen, count: '120+ Labs' },
                    { title: 'Chemistry', icon: BookOpen, count: '90+ Labs' },
                    { title: 'Physics', icon: Zap, count: '60+ Labs' },
                    { title: 'Health Sciences', icon: Layers, count: '40+ Labs' }
                  ].map((subject, i) => (
                    <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-site-bg border border-site-accent shadow-sm text-center group hover:border-indigo-200 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3 group-hover:scale-110 transition-transform">
                        <subject.icon size={24} />
                      </div>
                      <h4 className="font-bold text-site-text text-sm">{subject.title}</h4>
                      <p className="text-xs text-slate-400">{subject.count}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Virtual Labs Work */}
              <div className="bg-site-primary rounded-[2.5rem] p-10 text-white space-y-8">
                <h3 className="text-2xl font-bold tracking-tight">Why Virtual Labs Work</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Safe Experiments', desc: 'Conduct experiments involving radiation, high voltage, or toxic chemicals without risk.' },
                    { title: 'Personalized Pace', desc: 'Students can re-run simulations as many times as needed to master concepts.' },
                    { title: 'Data-Rich Insights', desc: 'Real-time dashboards show exactly where students get stuck during an experiment.' },
                    { title: 'Engagement Boost', desc: 'Immersive storytelling and reward systems keep students motivated.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-2 bg-site-bg/10 rounded-lg text-indigo-400">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
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
              "Labster turns abstract concepts into unforgettable experiences."
            </h2>
            <p className="text-site-text font-medium">Share your student's lab screenshots with #AIVirtualLabs!</p>
            <button 
              onClick={onNext}
              className="mt-4 bg-site-bg text-site-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto group"
            >
              Start Your Challenge <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        </div>
    </div>
  );
};

export default LabsterDay20;
