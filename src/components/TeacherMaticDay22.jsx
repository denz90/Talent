import React, { useState } from 'react';
import { 
  Pencil, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Users, 
  Layers, 
  ArrowRight,
  Zap,
  FileText,
  Trophy,
  ChevronRight,
  Target,
  BookOpen,
  Layout,
  GraduationCap,
  Library,
  BarChart3,
  Flame
} from 'lucide-react';

const TeacherMaticDay22 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'features', label: 'Features', icon: Layers },
    { id: 'guide', label: 'Guide', icon: Target },
    { id: 'challenge', label: 'Challenge', icon: Trophy }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-indigo-800 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="absolute top-10 right-10 animate-pulse text-indigo-300">
            <Layout size={64} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 22 • Lesson Planning
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Day 22: TeacherMatic Challenge
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Automate Lesson Planning & Resource Generation
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Clock size={16} /> Saves 5+ Hours/Week
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Layers size={16} /> Differentiated Resources
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <CheckCircle2 size={16} /> Curriculum Aligned
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
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What is TeacherMatic?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    TeacherMatic is an AI-powered platform designed to streamline lesson planning, worksheet creation, and assessment design for educators. It generates curriculum-aligned resources in seconds, reducing administrative workload.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Clock, title: 'Saves 5+ Hours/Week', desc: 'On lesson prep and grading' },
                      { icon: Layers, title: 'Differentiated Resources', desc: 'Generates worksheets, quizzes, and rubrics' },
                      { icon: CheckCircle2, title: 'Ensures Curriculum Compliance', desc: 'With standards-tagged content' },
                      { icon: Flame, title: 'Reduces Burnout', desc: 'By automating repetitive administrative tasks' }
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
                    <img src="/Teaching-pana 1.png" alt="TeacherMatic Illustration" className="w-full h-auto relative z-10" />
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
                    title: 'Lesson Plan Generator',
                    icon: BookOpen,
                    color: 'purple',
                    howTo: 'Input topic/grade → Select standards → Generate full lesson plans',
                    benefit: 'Creates structured, ready-to-teach plans in minutes'
                  },
                  {
                    title: 'Worksheet Builder',
                    icon: Pencil,
                    color: 'blue',
                    howTo: 'Choose template (e.g., MCQ, fill-in-the-blank) → Customize with AI suggestions',
                    benefit: 'Produces engaging, leveled practice sheets'
                  },
                  {
                    title: 'Rubric Creator',
                    icon: CheckCircle2,
                    color: 'emerald',
                    howTo: 'Define assessment criteria → Auto-generate editable rubrics',
                    benefit: 'Standardizes grading with clear benchmarks'
                  },
                  {
                    title: 'Quiz Maker',
                    icon: Zap,
                    color: 'orange',
                    howTo: 'Enter learning objectives → Generate auto-graded quizzes',
                    benefit: 'Saves time on assessment creation and scoring'
                  },
                  {
                    title: 'Resource Bank',
                    icon: Library,
                    color: 'indigo',
                    howTo: 'Browse/search 1,000+ pre-made templates (e.g., exit tickets)',
                    benefit: 'Offers instant access to high-quality materials'
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
                  { step: 1, title: 'Sign Up', desc: 'Go to TeacherMatic\'s website → Click "Start Free Trial" (no credit card required)' },
                  { step: 2, title: 'Generate a Lesson Plan', desc: 'Click "Lesson Plan Generator" → Enter topic, grade level, and learning standards → Click "Generate"' },
                  { step: 3, title: 'Create a Worksheet', desc: 'Select "Worksheet Builder" → Choose type and difficulty → Click "Generate" → Download as PDF' },
                  { step: 4, title: 'Build a Quiz', desc: 'Open "Quiz Maker" → Input 3-5 key objectives → Select question types → Create and share' },
                  { step: 5, title: 'Save to Your Library', desc: 'Click "Save" on any resource → Organize by subject/unit for future reuse' }
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
                    "Design a complete 60-minute lesson with differentiated assessments."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Planning: Generate Lesson Plan', 
                        desc: 'Use the Generator for a topic in your curriculum. Screenshot the 60-minute plan with 3+ activities. Note how standards are mapped.',
                        icon: BookOpen,
                        step: 'Step 1'
                      },
                      { 
                        title: 'Differentiation: Tiered Worksheets', 
                        desc: 'Make four versions (Beginner to Advanced). Download as PDFs to see the scaffolding vs. extension differences.',
                        icon: Layers,
                        step: 'Step 2'
                      },
                      { 
                        title: 'Assessment: Auto-Graded Quiz', 
                        desc: 'Generate a 10-question quiz with mixed types (MCQ, T/F, Short Answer). Set up answer key and preview.',
                        icon: Zap,
                        step: 'Step 3'
                      },
                      { 
                        title: 'Collaboration: Share Your Work', 
                        desc: 'Export all as PDFs. Organize in Library. Share with colleagues. Post with #AIEdChallenge.',
                        icon: Users,
                        step: 'Step 4'
                      }
                    ].map((step, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">{step.step}</span>
                          <step.icon size={16} className="text-indigo-300" />
                        </div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p className="text-sm text-indigo-100/70 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Savings Comparison */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Time Savings Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Lesson Planning', traditional: '2-3 hours', matic: '15 mins', saved: '85%' },
                    { label: 'Worksheet Creation', traditional: '45-60 mins', matic: '5 mins', saved: '90%' },
                    { label: 'Quiz Building', traditional: '30-45 mins', matic: '2 mins', saved: '95%' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-4">
                      <h4 className="font-bold text-slate-500 text-xs uppercase tracking-widest">{item.label}</h4>
                      <div className="flex justify-center items-end gap-2">
                        <span className="text-3xl font-black text-indigo-600">{item.saved}</span>
                        <span className="text-sm font-bold text-slate-400 pb-1">Time Saved</span>
                      </div>
                      <div className="text-xs text-slate-500 space-y-1">
                        <p>Traditional: {item.traditional}</p>
                        <p className="font-bold text-indigo-600">TeacherMatic: {item.matic}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Differentiation Made Easy */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Differentiation Made Easy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { level: 'Beginner', desc: 'Scaffolded support, simplified vocabulary, and reduced complexity.' },
                    { level: 'Intermediate', desc: 'Standard grade-level content with moderate support and clear prompts.' },
                    { level: 'Advanced', desc: 'Extension activities, critical thinking prompts, and independent research tasks.' },
                    { level: 'Special Needs', desc: 'Modified content with accessibility features and targeted assessment options.' }
                  ].map((diff, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{diff.level}</h4>
                        <p className="text-xs text-slate-500">{diff.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Batch Create', icon: Layers, desc: 'Use the "Resource Bank" to prep a month\'s worth of materials in one session. Save time by creating multiple resources at once.' },
                  { title: 'Standards Alignment', icon: CheckCircle2, desc: 'Always tag resources to your local curriculum (e.g., Common Core, UK). Ensures compliance and easier progress tracking.' },
                  { title: 'Collaborate', icon: Users, desc: 'Share your library with colleagues to build a departmental resource hub. Multiplies efficiency across your entire team.' }
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

              {/* Templates Section */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight">1,000+ Pre-Made Templates</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { title: 'Lesson Plans', icon: BookOpen, count: '300+' },
                    { title: 'Worksheets', icon: Pencil, count: '400+' },
                    { title: 'Quizzes', icon: Zap, count: '200+' },
                    { title: 'Rubrics', icon: CheckCircle2, count: '100+' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-400">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-xl font-black text-indigo-400">{item.count}</p>
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
              "TeacherMatic turns planning stress into 'click-and-teach' simplicity."
            </h2>
            <p className="text-indigo-100 font-medium">Share your results with #AIEdChallenge!</p>
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
            Tomorrow's Preview: Day 23: Fetchy – Automate parent communication and permission slips with AI
          </p>
        </div>

      </div>
    </div>
  );
};

export default TeacherMaticDay22;
