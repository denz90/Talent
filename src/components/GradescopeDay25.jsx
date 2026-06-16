import React, { useState } from 'react';
import { 
  ClipboardCheck, 
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
  Code2,
  Users,
  EyeOff,
  GraduationCap,
  Layout,
  Calculator,
  Settings
} from 'lucide-react';

const GradescopeDay25 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Layout },
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
            <ClipboardCheck size={64} strokeWidth={1} />
          </div>

          <div className="text-center space-y-6 pt-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-site-bg/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 25 • AI Assessment
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 25: Gradescope Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Streamline Grading with AI-Powered Assessment Tools
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <Clock size={16} /> Cuts Grading Time 50%+
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <CheckCircle2 size={16} /> Ensures Fairness
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <BarChart3 size={16} /> Actionable Insights
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
                  <h2 className="text-3xl font-bold text-site-text tracking-tight">What is Gradescope Challenge?</h2>
                  <p className="text-site-text/80 leading-relaxed text-lg">
                    Gradescope is an AI-assisted grading and assessment platform that helps educators grade paper-based exams, online homework, and programming projects efficiently. It uses machine learning to group similar answers, apply consistent rubrics, and provide detailed analytics.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Clock, title: 'Cuts Grading Time by 50%+', desc: 'With AI-assisted answer grouping' },
                      { icon: CheckCircle2, title: 'Ensures Fairness', desc: 'With rubric-based grading and anonymization' },
                      { icon: BarChart3, title: 'Actionable Insights', desc: 'Provides per-question performance analytics' },
                      { icon: GraduationCap, title: 'All Subjects Supported', desc: 'STEM, essays, coding, and more' }
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
                    <img src="/Assessment-pana 1.png" alt="Gradescope Illustration" className="w-full h-auto relative z-10" />
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
                    title: 'AI Answer Groups',
                    icon: Zap,
                    color: 'purple',
                    howTo: 'Upload submissions → AI clusters similar answers automatically',
                    benefit: 'Grade batches of similar responses in one action'
                  },
                  {
                    title: 'Dynamic Rubrics',
                    icon: ClipboardCheck,
                    color: 'blue',
                    howTo: 'Create reusable rubrics → Apply with one click across submissions',
                    benefit: 'Ensures consistency and saves time'
                  },
                  {
                    title: 'Programming Exams',
                    icon: Code2,
                    color: 'emerald',
                    howTo: 'Auto-grade code based on test cases (Python, Java, etc.)',
                    benefit: 'Eliminates manual code testing'
                  },
                  {
                    title: 'Analytics Dashboard',
                    icon: BarChart3,
                    color: 'orange',
                    howTo: 'View histograms and grade distributions post-grading',
                    benefit: 'Identifies class-wide knowledge gaps'
                  },
                  {
                    title: 'Peer Review',
                    icon: Users,
                    color: 'indigo',
                    howTo: 'Set up student peer assessments with guided rubrics',
                    benefit: 'Scales feedback for large classes'
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
                  { step: 1, title: 'Create a Course', desc: 'Go to Gradescope.com → Sign up as instructor → Click "Create Course" → Select course type (e.g., "Exam/Homework")' },
                  { step: 2, title: 'Upload Submissions', desc: 'For exams/homework: Scan and upload PDFs or have students submit directly. For programming: Connect to GitHub or upload ZIP files' },
                  { step: 3, title: 'Set Up Rubrics', desc: 'Open an assignment → Click "Outline Assessment" to mark answer areas → Create rubric: Click "+ Add Rubric" → Define points' },
                  { step: 4, title: 'Grade with AI Assistance', desc: 'Click "Grade Submissions" → AI groups similar answers → Grade one answer in a group → Apply scores to all' },
                  { step: 5, title: 'Review Analytics', desc: 'Navigate to "Review Grades" → Analyze metrics → Export grades to CSV/LMS (Canvas, Blackboard, etc.)' }
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
                    "Grade a set of student submissions using Gradescope's AI grouping and dynamic rubrics."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Setup: Upload Sample Assignments', 
                        desc: 'Upload 5 student submissions (PDFs or code). Use "Outline Assessment" to define question regions. Enable AI grouping.',
                        icon: FileText,
                        step: 'Step 1'
                      },
                      { 
                        title: 'Create: Generate AI Answer Groups', 
                        desc: 'Click "Grade Submissions" and select "Form Answer Groups." Review and merge any groups that AI identified.',
                        icon: Zap,
                        step: 'Step 2'
                      },
                      { 
                        title: 'Grade: Apply Dynamic Rubrics', 
                        desc: 'Create a clear rubric. Apply items to entire answer groups. Note how consistent points are applied to all in a group.',
                        icon: ClipboardCheck,
                        step: 'Step 3'
                      },
                      { 
                        title: 'Results: Ready to Submit', 
                        desc: 'Check "Review Grades" section. Ensure all are graded and feedback is clear. Screenshot the final overview dashboard.',
                        icon: CheckCircle2,
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

              {/* Time Savings Chart */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Time Savings with AI-Assisted Grading</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  {[
                    { label: 'Writing Exams', saved: '50%+' },
                    { label: 'Math/Problem Sets', saved: '65%+' },
                    { label: 'Programming Assignments', saved: '70%+' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100/50 space-y-2">
                      <h4 className="font-bold text-site-text/80 text-xs uppercase tracking-widest">{item.label}</h4>
                      <p className="text-4xl font-black text-indigo-600">{item.saved}</p>
                      <p className="text-xs text-indigo-400 font-bold">Time Saved</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multi-Subject Support */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Math', icon: Calculator },
                  { label: 'Physics', icon: Zap },
                  { label: 'CS', icon: Code2 },
                  { label: 'Engineering', icon: Settings }
                ].map((subject, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-6 bg-site-bg border border-site-accent rounded-3xl shadow-sm">
                    <subject.icon size={24} className="text-indigo-600" />
                    <span className="font-bold text-site-text">{subject.label}</span>
                  </div>
                ))}
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Rubric Hack', icon: ClipboardCheck, desc: 'Editing a rubric item automatically updates the scores for all students already graded with that item.' },
                  { title: 'Partial Credit', icon: Layers, desc: 'Use rubric items for common mistakes to ensure every student receives consistent partial credit.' },
                  { title: 'Anonymous Grading', icon: EyeOff, desc: 'Enable "Anonymize" to hide student names while grading, reducing potential unconscious bias.' }
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

              {/* How AI Grouping Works */}
              <div className="bg-site-primary rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight text-center">How AI Answer Grouping Works</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {[
                    { title: 'Collect PDFs', icon: FileText },
                    { title: 'Detect Text', icon: Zap },
                    { title: 'Cluster Similar', icon: Layers },
                    { title: 'Grade Once', icon: CheckCircle2 }
                  ].map((item, i) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center text-center space-y-3 group flex-1">
                        <div className="w-16 h-16 rounded-2xl bg-site-bg/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                          <item.icon size={32} />
                        </div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                      </div>
                      {i < 3 && <ChevronRight className="hidden md:block text-slate-700" size={32} />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Auto-Grade Programming */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight text-center">Auto-Grade Programming Assignments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { tool: 'Test Case Validation', desc: 'Automatically run student code against hidden unit tests.' },
                    { tool: 'Output Comparison', desc: 'Compare student outputs with expected gold-standard results.' },
                    { tool: 'Security & Isolation', desc: 'Run code in secure sandboxed environments to prevent malicious execution.' },
                    { tool: 'Multi-language Support', desc: 'Supports Python, Java, C++, C, SQL, and more out of the box.' }
                  ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-site-bg border border-site-accent shadow-sm hover:border-indigo-100 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0">
                        <Code2 size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-site-text text-sm">{tool.tool}</h4>
                        <p className="text-xs text-site-text/80">{tool.desc}</p>
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
              "Gradescope turns grading from a chore into a data-driven process."
            </h2>
            <p className="text-site-text font-medium">Share your results with #AIGradingChallenge!</p>
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

export default GradescopeDay25;
