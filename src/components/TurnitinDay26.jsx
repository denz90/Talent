import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
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

const TurnitinDay26 = ({ onNext }) => {
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
              <Shield className="text-[#2e0052]" size={32} />
            </div>
          </div>

          <div className="text-center space-y-6 pt-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 26: Turnitin AI Feedback Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Elevate Academic Integrity &amp; Writing Growth with AI-Powered Feedback
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <span className="flex items-center gap-2 text-site-text">
                <Layers size={16} /> Plagiarism Detection
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <Layers size={16} /> AI Feedback
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <TrendingUp size={16} /> Writing Analytics
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
                <h2 className="text-3xl text-site-text font-bold mb-6">What is Turnitin AI Feedback Challenge?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  Turnitin is a plagiarism detection and writing feedback tool enhanced with AI to provide actionable insights on student submissions. Its AI Feedback Studio offers grammar checks, stylistic suggestions, and originality reports to improve writing quality while maintaining academic integrity.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  { [
                      { icon: Layers, title: '91B+ Web Pages', desc: 'Detects plagiarism across vast scholarly databases' },
                      { icon: Layers, title: 'Instant AI Feedback', desc: 'Grammar, clarity, and structural suggestions' },
                      { icon: Clock, title: 'Reduced Grading Time', desc: 'With automated writing analytics and rubrics' },
                      { icon: Zap, title: 'Student Growth', desc: 'Actionable revision steps for self-improvement' }
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
                    title: 'Originality Report',
                    icon: Layers,
                    color: 'purple',
                    howTo: 'Upload work → Generate similarity score + sources',
                    benefit: 'Identifies uncited content or potential plagiarism'
                  },
                  {
                    title: 'AI Writing Feedback',
                    icon: Layers,
                    color: 'blue',
                    howTo: 'Enable "Feedback Studio" → AI highlights grammar/style issues',
                    benefit: 'Delivers detailed feedback without manual markup'
                  },
                  {
                    title: 'Rubric Alignment',
                    icon: CheckCircle2,
                    color: 'emerald',
                    howTo: 'Attach custom rubric → AI checks submission against criteria',
                    benefit: 'Ensures consistent grading standards'
                  },
                  {
                    title: 'Peer Review',
                    icon: Layers,
                    color: 'orange',
                    howTo: 'Set up student peer reviews within Turnitin',
                    benefit: 'Encourages collaborative learning'
                  },
                  {
                    title: 'EKG Metrics',
                    icon: TrendingUp,
                    color: 'indigo',
                    howTo: 'View "Engagement, Knowledge, Growth" analytics per student',
                    benefit: 'Tracks long-term writing progress'
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
                  { step: 1, title: 'Access Turnitin', desc: 'Go to Turnitin.com → Sign in (or request institutional access) → Click "Create Class" to set up your course' },
                  { step: 2, title: 'Enable AI Feedback', desc: 'Open your class → Click "Settings" → Toggle on "Feedback Studio (AI)" → Upload a rubric (optional)' },
                  { step: 3, title: 'Submit Student Work', desc: 'Click "Add Assignment" → Set deadline + enable "Originality Check" → Drag-and-drop student files (PDF/DOCX)' },
                  { step: 4, title: 'Review AI Feedback', desc: 'Open a submission → AI highlights grammar errors (blue), style suggestions (green), and plagiarism (red)' },
                  { step: 5, title: 'Share with Students', desc: 'Return submissions with feedback → Students view suggestions via their accounts → Use "Revision Assistant"' }
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
                    "Analyze an improved student essay using Turnitin's AI feedback tools."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Setup: Explore Example Essay', 
                        desc: 'Upload a sample essay. Review the "Originality Report" to check for uncited sources. Identify the similarity percentage.',
                        icon: Layers,
                        step: 'Step 1'
                      },
                      { 
                        title: 'Analyze: Apply AI Feedback', 
                        desc: 'Enable "Feedback Studio." Review AI-generated suggestions for grammar, clarity, and style. Add QuickMarks.',
                        icon: Layers,
                        step: 'Step 2'
                      },
                      { 
                        title: 'Revision: Review Revision', 
                        desc: 'Use the "Revision Assistant" to provide actionable steps. Note how AI suggestions guide independent improvement.',
                        icon: Zap,
                        step: 'Step 3'
                      },
                      { 
                        title: 'Share: Share Challenge', 
                        desc: 'Export final feedback report. Post a screenshot of your QuickMarks library or dashboard with #AIEdChallenge.',
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

              {/* Time Savings with AI Feedback */}
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Time Savings with AI Feedback</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Grammar & Style', saved: '80%+' },
                    { label: 'Plagiarism Checks', saved: '85%+' },
                    { label: 'Rubric Alignment', saved: '75%+' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100/50">
                      <h4 className="font-bold text-site-text/80 text-xs uppercase tracking-widest mb-2">{item.label}</h4>
                      <p className="text-4xl font-black text-indigo-600">{item.saved}</p>
                      <p className="text-xs text-indigo-400 font-bold mt-1">Efficiency Gain</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Originality Database */}
              <div className="bg-site-primary rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight text-center">Comprehensive Originality Database</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Web Pages', count: '91B+', icon: Layers },
                    { label: 'Student Papers', count: '1.4B+', icon: FileText },
                    { label: 'Journals', count: '190M+', icon: BookOpen },
                    { label: 'Books', count: '70M+', icon: Target }
                  ].map((db, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                      <div className="w-12 h-12 rounded-2xl bg-site-bg/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                        <db.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl">{db.count}</h4>
                        <p className="text-xs text-slate-400 font-medium">{db.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Deep Dive', icon: Layers, desc: 'Always review high similarity scores manually; AI flags potential matches, but human judgment confirms integrity.' },
                  { title: 'Trend Analysis', icon: TrendingUp, desc: 'Use the "EKG Metrics" dashboard to track if a student\'s writing quality is improving across multiple assignments.' },
                  { title: 'Student Ownership', icon: Layers, desc: 'Encourage students to use the "Revision Assistant" before final submission to foster a culture of growth.' }
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

              {/* QuickMarks Library */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight text-center">Build Your QuickMarks Library</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    'Abbreviations', 'Punctuation', 'Spelling', 'Grammar', 'Word Choice', 
                    'Flow', 'Citations', 'Thesis Statement', 'Evidence', 'Analysis'
                  ].map((mark, i) => (
                    <div key={i} className="px-4 py-2 bg-site-bg border border-site-accent rounded-xl text-xs font-bold text-slate-700 text-center shadow-sm">
                      {mark}
                    </div>
                  ))}
                </div>
              </div>

              {/* EKG Metrics Explanation */}
              <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight text-center mb-8">Understanding EKG Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { label: 'Engagement', icon: Clock, desc: 'Time spent reviewing feedback and interacting with suggestions.' },
                    { label: 'Knowledge', icon: BookOpen, desc: 'Mastery of writing concepts and adherence to academic integrity.' },
                    { label: 'Growth', icon: TrendingUp, desc: 'Score improvement and reduction in writing errors over time.' }
                  ].map((metric, i) => (
                    <div key={i} className="text-center space-y-4">
                      <div className="w-12 h-12 bg-site-bg/20 rounded-full flex items-center justify-center mx-auto">
                        <metric.icon size={24} />
                      </div>
                      <h4 className="font-bold text-lg">{metric.label}</h4>
                      <p className="text-sm text-site-text leading-relaxed">{metric.desc}</p>
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
              "Turnitin's AI turns grading from correction to conversation."
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

export default TurnitinDay26;
