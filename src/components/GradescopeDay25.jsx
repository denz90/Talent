import React, { useState } from 'react';
import {
  CheckCircle2,
  CheckSquare2,
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

const GradescopeDay25 = ({ onNext }) => {
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
          <div className="flex justify-center">
            <div className="bg-yellow-400 p-3 rounded-2xl transform rotate-12 animate-pulse">
              <CheckSquare2 className="text-[#2e0052]" size={32} />
            </div>
          </div>

          <div className="text-center space-y-6 pt-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 25: Gradescope Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Streamline Grading with AI-Powered Assessment Tools
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <span className="flex items-center gap-2 text-site-text">
                <Clock size={16} /> Cuts Grading Time 50%+
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <CheckCircle2 size={16} /> Ensures Fairness
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <TrendingUp size={16} /> Actionable Insights
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
                <h2 className="text-3xl text-site-text font-bold mb-6">What is Gradescope Challenge?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  Gradescope is an AI-assisted grading and assessment platform that helps educators grade paper-based exams, online homework, and programming projects efficiently. It uses machine learning to group similar answers, apply consistent rubrics, and provide detailed analytics.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  { [
                      { icon: Clock, title: 'Cuts Grading Time by 50%+', desc: 'With AI-assisted answer grouping' },
                      { icon: CheckCircle2, title: 'Ensures Fairness', desc: 'With rubric-based grading and anonymization' },
                      { icon: TrendingUp, title: 'Actionable Insights', desc: 'Provides per-question performance analytics' },
                      { icon: GraduationCap, title: 'All Subjects Supported', desc: 'STEM, essays, coding, and more' }
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
                    title: 'AI Answer Groups',
                    icon: Zap,
                    color: 'purple',
                    howTo: 'Upload submissions → AI clusters similar answers automatically',
                    benefit: 'Grade batches of similar responses in one action'
                  },
                  {
                    title: 'Dynamic Rubrics',
                    icon: CheckSquare2,
                    color: 'blue',
                    howTo: 'Create reusable rubrics → Apply with one click across submissions',
                    benefit: 'Ensures consistency and saves time'
                  },
                  {
                    title: 'Programming Exams',
                    icon: Layers,
                    color: 'emerald',
                    howTo: 'Auto-grade code based on test cases (Python, Java, etc.)',
                    benefit: 'Eliminates manual code testing'
                  },
                  {
                    title: 'Analytics Dashboard',
                    icon: TrendingUp,
                    color: 'orange',
                    howTo: 'View histograms and grade distributions post-grading',
                    benefit: 'Identifies class-wide knowledge gaps'
                  },
                  {
                    title: 'Peer Review',
                    icon: Layers,
                    color: 'indigo',
                    howTo: 'Set up student peer assessments with guided rubrics',
                    benefit: 'Scales feedback for large classes'
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
                  { step: 1, title: 'Create a Course', desc: 'Go to Gradescope.com → Sign up as instructor → Click "Create Course" → Select course type (e.g., "Exam/Homework")' },
                  { step: 2, title: 'Upload Submissions', desc: 'For exams/homework: Scan and upload PDFs or have students submit directly. For programming: Connect to GitHub or upload ZIP files' },
                  { step: 3, title: 'Set Up Rubrics', desc: 'Open an assignment → Click "Outline Assessment" to mark answer areas → Create rubric: Click "+ Add Rubric" → Define points' },
                  { step: 4, title: 'Grade with AI Assistance', desc: 'Click "Grade Submissions" → AI groups similar answers → Grade one answer in a group → Apply scores to all' },
                  { step: 5, title: 'Review Analytics', desc: 'Navigate to "Review Grades" → Analyze metrics → Export grades to CSV/LMS (Canvas, Blackboard, etc.)' }
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
                        icon: CheckSquare2,
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
                  { label: 'Math', icon: Layers },
                  { label: 'Physics', icon: Zap },
                  { label: 'CS', icon: Target },
                  { label: 'Engineering', icon: TrendingUp }
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
                  { title: 'Rubric Hack', icon: CheckSquare2, desc: 'Editing a rubric item automatically updates the scores for all students already graded with that item.' },
                  { title: 'Partial Credit', icon: Layers, desc: 'Use rubric items for common mistakes to ensure every student receives consistent partial credit.' },
                  { title: 'Anonymous Grading', icon: Layers, desc: 'Enable "Anonymize" to hide student names while grading, reducing potential unconscious bias.' }
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
                    { title: 'Detect Text', icon: Layers },
                    { title: 'Cluster Similar', icon: Zap },
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
                        <Layers size={16} />
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
              Start Your Challenge <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        </div>
    </div>
  );
};

export default GradescopeDay25;
