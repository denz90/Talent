import React, { useState } from 'react';
import { 
  Beaker, 
  Sparkles, 
  BarChart3, 
  Gamepad2, 
  BookOpen, 
  Microscope, 
  ArrowRight,
  Zap,
  Globe,
  FileText,
  Trophy,
  CheckCircle2,
  ChevronRight,
  Target,
  Layers,
  Smartphone,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

const LabsterDay20 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Microscope },
    { id: 'features', label: 'Features', icon: Layers },
    { id: 'guide', label: 'Guide', icon: Target },
    { id: 'challenge', label: 'Challenge', icon: Trophy }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="absolute top-10 right-10 animate-pulse text-indigo-300">
            <Microscope size={64} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 20 • STEM Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Day 20: Labster Challenge
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Revolutionize Science Education with Virtual Labs
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <ShieldCheck size={16} /> Safe & Accessible
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <BarChart3 size={16} /> Data Insights
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Gamepad2 size={16} /> Gamified
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex p-1.5 bg-slate-100 rounded-2xl w-full max-w-md mx-auto sticky top-4 z-40 shadow-sm backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-indigo-600 shadow-sm scale-100' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50 scale-95'
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
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What is Labster?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Labster is an AI-powered virtual lab platform that provides immersive, interactive science simulations for STEM education. It replaces or supplements physical labs with 3D environments, gamified scenarios, and adaptive learning paths.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: ShieldCheck, title: 'Safe & Accessible', desc: 'Conduct dangerous/expensive experiments (e.g., DNA sequencing) virtually' },
                      { icon: Globe, title: 'Democratizes Science', desc: 'Students can lab anytime, anywhere—no equipment needed' },
                      { icon: TrendingUp, title: 'Data-Driven Insights', desc: 'Tracks student performance with granular analytics' },
                      { icon: Gamepad2, title: 'Engagement Boost', desc: 'Game elements (storylines, rewards) increase participation' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100/50">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                          <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-indigo-100 rounded-3xl blur-2xl opacity-50 -z-10"></div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
                    <img src="/Science-pana 1.png" alt="Labster Illustration" className="w-full h-auto relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Key Features & How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Virtual Labs',
                    icon: Beaker,
                    color: 'purple',
                    howTo: 'Choose from 300+ simulations (e.g., "Cellular Respiration") → Launch in browser',
                    benefit: 'Replaces physical labs with zero setup/cost'
                  },
                  {
                    title: 'Teacher Dashboard',
                    icon: BarChart3,
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
                    icon: Smartphone,
                    color: 'indigo',
                    howTo: 'Use mobile app to overlay 3D lab equipment onto real-world surfaces',
                    benefit: 'Enhances kinesthetic learning for tactile learners'
                  }
                ].map((feature, i) => (
                  <div key={i} className="group p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className={`w-10 h-10 rounded-xl mb-6 flex items-center justify-center bg-${feature.color}-50 text-${feature.color}-600 group-hover:scale-110 transition-transform`}>
                      <feature.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-slate-50 rounded-xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">How to Use</p>
                        <p className="text-xs text-slate-700">{feature.howTo}</p>
                      </div>
                      <div className={`p-3 bg-${feature.color}-50/50 rounded-xl border border-${feature.color}-100/50`}>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Benefit</p>
                        <p className="text-xs text-slate-900 font-semibold">{feature.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">Step-by-Step Getting Started Guide</h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { step: 1, title: 'Sign Up', desc: 'Go to Labster.com → Click "Educator Trial" → Sign up with school email' },
                  { step: 2, title: 'Browse Labs', desc: 'Click "Catalog" → Filter by subject (e.g., Biology) → Preview labs with "Try Demo" button' },
                  { step: 3, title: 'Create Class', desc: 'Go to "Classes" → Click "+ New Class" → Name it → Add student emails or share join link' },
                  { step: 4, title: 'Assign First Lab', desc: 'Open a lab (e.g., "Mendelian Inheritance") → Click "Assign" → Set due date + optional quiz → Publish' },
                  { step: 5, title: 'Monitor Progress', desc: 'Check "Dashboard" → View heatmaps of student attempts → Click on outliers to offer help' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="bg-indigo-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-[0.2em]">
                    <Target size={16} /> Practical Challenge Task
                  </div>
                  <h2 className="text-3xl font-bold leading-tight">
                    "Run a virtual lab session with embedded formative assessments."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: 'Choose Lab', desc: 'Filter the catalog for your grade level. Select a lab (e.g., "Bacterial Growth"). Review the theoretical background.', icon: Beaker },
                      { title: 'Preview Lab', desc: 'Launch the "Demo" mode. Complete at least one experiment step. Screenshot your progress or lab result.', icon: Microscope },
                      { title: 'Assign Lab', desc: 'Create a class and assign the lab. Set a specific learning objective. Share the student invite link.', icon: Zap },
                      { title: 'Post-Lab Analysis', desc: 'View student attempt reports. Identify one common misconception. Note how you would address it in class.', icon: BarChart3 },
                      { title: 'Reflection', desc: 'Collect student feedback on simulation ease. Note 1 benefit vs. physical lab. Share insights with #AIVirtualLabs.', icon: MessageCircle }
                    ].map((step, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl space-y-3">
                        <step.icon size={16} className="text-indigo-300" />
                        <h4 className="font-bold text-sm">{step.title}</h4>
                        <p className="text-xs text-indigo-100/70 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sample Learning Objectives */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Sample Learning Objectives: Enzyme Kinetics Lab</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 1, text: 'Understand Enzyme Function', desc: 'Explain how enzymes catalyze chemical reactions and the role of the active site.' },
                    { id: 2, text: 'Analyze Environmental Factors', desc: 'Determine the effect of pH and temperature on enzyme activity through experimentation.' },
                    { id: 3, text: 'Apply Michaelis-Menten Model', desc: 'Use experimental data to calculate Vmax and Km for a specific enzyme.' }
                  ].map((obj, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                        {obj.id}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{obj.text}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{obj.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Mix-Modal Use', icon: Layers, desc: 'Pair virtual labs with hands-on experiments (blended learning) for the best conceptual understanding.' },
                  { title: 'Differentiate', icon: Users, desc: 'Assign specific lab levels or extra theory modules to students based on their baseline knowledge.' },
                  { title: 'LMS Integration', icon: Zap, desc: 'Sync Labster with Canvas or Google Classroom to automate grading and roster management.' }
                ].map((tip, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm w-fit text-indigo-600">
                      <tip.icon size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900">{tip.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>

              {/* Simulations Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">300+ Virtual Lab Simulations</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: 'Biology', icon: Microscope, count: '120+ Labs' },
                    { title: 'Chemistry', icon: Beaker, count: '90+ Labs' },
                    { title: 'Physics', icon: Zap, count: '60+ Labs' },
                    { title: 'Health Sciences', icon: Smartphone, count: '40+ Labs' }
                  ].map((subject, i) => (
                    <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center group hover:border-indigo-200 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3 group-hover:scale-110 transition-transform">
                        <subject.icon size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{subject.title}</h4>
                      <p className="text-xs text-slate-400">{subject.count}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Virtual Labs Work */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8">
                <h3 className="text-2xl font-bold tracking-tight">Why Virtual Labs Work</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Safe Experiments', desc: 'Conduct experiments involving radiation, high voltage, or toxic chemicals without risk.' },
                    { title: 'Personalized Pace', desc: 'Students can re-run simulations as many times as needed to master concepts.' },
                    { title: 'Data-Rich Insights', desc: 'Real-time dashboards show exactly where students get stuck during an experiment.' },
                    { title: 'Engagement Boost', desc: 'Immersive storytelling and reward systems keep students motivated.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-2 bg-white/10 rounded-lg text-indigo-400">
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
        <div className="bg-indigo-600 p-10 rounded-[2.5rem] text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <Trophy size={48} className="mx-auto text-white/50" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "Labster turns abstract concepts into unforgettable experiences."
            </h2>
            <p className="text-indigo-100 font-medium">Share your student's lab screenshots with #AIVirtualLabs!</p>
            <button 
              onClick={onNext}
              className="mt-4 bg-white text-indigo-600 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto group"
            >
              Start Your Challenge <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tomorrow's Preview */}
        <div className="text-center pb-20">
          <p className="text-slate-400 text-sm font-medium">
            Tomorrow's Preview: Day 21: Lumen5 – Transform lectures into viral educational videos in 10 minutes
          </p>
        </div>

      </div>
    </div>
  );
};

export default LabsterDay20;
