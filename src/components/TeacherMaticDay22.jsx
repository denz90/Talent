import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  Layers,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Zap
} from 'lucide-react';

const TeacherMaticDay22 = ({ onNext }) => {
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
            <Layers size={64} strokeWidth={1} />
          </div>

          <div className="text-center space-y-6 pt-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 22: TeacherMatic Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Automate Lesson Planning & Resource Generation
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <span className="flex items-center gap-2 text-site-text">
                <Clock size={16} /> Saves 5+ Hours/Week
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <Layers size={16} /> Differentiated Resources
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <CheckCircle2 size={16} /> Curriculum Aligned
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
                <h2 className="text-3xl text-site-text font-bold mb-6">What is TeacherMatic?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  TeacherMatic is an AI-powered platform designed to streamline lesson planning, worksheet creation, and assessment design for educators. It generates curriculum-aligned resources in seconds, reducing administrative workload.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  { [
                      { icon: Clock, title: 'Saves 5+ Hours/Week', desc: 'On lesson prep and grading' },
                      { icon: Layers, title: 'Differentiated Resources', desc: 'Generates worksheets, quizzes, and rubrics' },
                      { icon: CheckCircle2, title: 'Ensures Curriculum Compliance', desc: 'With standards-tagged content' },
                      { icon: Zap, title: 'Reduces Burnout', desc: 'By automating repetitive administrative tasks' }
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
                    title: 'Lesson Plan Generator',
                    icon: BookOpen,
                    color: 'purple',
                    howTo: 'Input topic/grade → Select standards → Generate full lesson plans',
                    benefit: 'Creates structured, ready-to-teach plans in minutes'
                  },
                  {
                    title: 'Worksheet Builder',
                    icon: Layers,
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
                    icon: BookOpen,
                    color: 'indigo',
                    howTo: 'Browse/search 1,000+ pre-made templates (e.g., exit tickets)',
                    benefit: 'Offers instant access to high-quality materials'
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
                  { step: 1, title: 'Sign Up', desc: 'Go to TeacherMatic\'s website → Click "Start Free Trial" (no credit card required)' },
                  { step: 2, title: 'Generate a Lesson Plan', desc: 'Click "Lesson Plan Generator" → Enter topic, grade level, and learning standards → Click "Generate"' },
                  { step: 3, title: 'Create a Worksheet', desc: 'Select "Worksheet Builder" → Choose type and difficulty → Click "Generate" → Download as PDF' },
                  { step: 4, title: 'Build a Quiz', desc: 'Open "Quiz Maker" → Input 3-5 key objectives → Select question types → Create and share' },
                  { step: 5, title: 'Save to Your Library', desc: 'Click "Save" on any resource → Organize by subject/unit for future reuse' }
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
                        icon: Layers,
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

              {/* Time Savings Comparison */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Time Savings Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Lesson Planning', traditional: '2-3 hours', matic: '15 mins', saved: '85%' },
                    { label: 'Worksheet Creation', traditional: '45-60 mins', matic: '5 mins', saved: '90%' },
                    { label: 'Quiz Building', traditional: '30-45 mins', matic: '2 mins', saved: '95%' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-site-bg border border-site-accent shadow-sm text-center space-y-4">
                      <h4 className="font-bold text-site-text/80 text-xs uppercase tracking-widest">{item.label}</h4>
                      <div className="flex justify-center items-end gap-2">
                        <span className="text-3xl font-black text-indigo-600">{item.saved}</span>
                        <span className="text-sm font-bold text-slate-400 pb-1">Time Saved</span>
                      </div>
                      <div className="text-xs text-site-text/80 space-y-1">
                        <p>Traditional: {item.traditional}</p>
                        <p className="font-bold text-indigo-600">TeacherMatic: {item.matic}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Differentiation Made Easy */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Differentiation Made Easy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { level: 'Beginner', desc: 'Scaffolded support, simplified vocabulary, and reduced complexity.' },
                    { level: 'Intermediate', desc: 'Standard grade-level content with moderate support and clear prompts.' },
                    { level: 'Advanced', desc: 'Extension activities, critical thinking prompts, and independent research tasks.' },
                    { level: 'Special Needs', desc: 'Modified content with accessibility features and targeted assessment options.' }
                  ].map((diff, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-site-bg border border-site-accent shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-site-text text-sm">{diff.level}</h4>
                        <p className="text-xs text-site-text/80">{diff.desc}</p>
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
                  { title: 'Collaborate', icon: Layers, desc: 'Share your library with colleagues to build a departmental resource hub. Multiplies efficiency across your entire team.' }
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

              {/* Templates Section */}
              <div className="bg-site-primary rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight">1,000+ Pre-Made Templates</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { title: 'Lesson Plans', icon: BookOpen, count: '300+' },
                    { title: 'Worksheets', icon: Layers, count: '400+' },
                    { title: 'Quizzes', icon: Zap, count: '200+' },
                    { title: 'Rubrics', icon: CheckCircle2, count: '100+' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-site-bg/10 flex items-center justify-center text-indigo-400">
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
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-site-grad-from to-site-grad-to p-12 text-center space-y-8 shadow-2xl shadow-site-accent-600/20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-site-bg/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <Trophy size={48} className="mx-auto text-white" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "TeacherMatic turns planning stress into 'click-and-teach' simplicity."
            </h2>
            <p className="text-site-text font-medium">Share your results with #AIEdChallenge!</p>
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

export default TeacherMaticDay22;
