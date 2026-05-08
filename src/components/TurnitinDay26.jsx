import React, { useState } from 'react';
import { 
  ShieldAlert, 
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
  Search,
  BookOpen,
  LineChart,
  Flag,
  PenTool
} from 'lucide-react';

const TurnitinDay26 = ({ onNext }) => {
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="absolute top-10 right-10 animate-pulse text-indigo-300">
            <ShieldAlert size={64} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 26 • Academic Integrity
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Day 26: Turnitin AI Feedback Challenge
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Elevate Academic Integrity & Writing Growth with AI-Powered Feedback
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Search size={16} /> Plagiarism Detection
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <PenTool size={16} /> AI Feedback
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <LineChart size={16} /> Writing Analytics
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
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What is Turnitin AI Feedback Challenge?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Turnitin is a plagiarism detection and writing feedback tool enhanced with AI to provide actionable insights on student submissions. Its AI Feedback Studio offers grammar checks, stylistic suggestions, and originality reports to improve writing quality while maintaining academic integrity.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Search, title: '91B+ Web Pages', desc: 'Detects plagiarism across vast scholarly databases' },
                      { icon: PenTool, title: 'Instant AI Feedback', desc: 'Grammar, clarity, and structural suggestions' },
                      { icon: Clock, title: 'Reduced Grading Time', desc: 'With automated writing analytics and rubrics' },
                      { icon: Zap, title: 'Student Growth', desc: 'Actionable revision steps for self-improvement' }
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
                    <img src="/Teaching-pana 1.png" alt="Turnitin Illustration" className="w-full h-auto relative z-10" />
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
                    title: 'Originality Report',
                    icon: Search,
                    color: 'purple',
                    howTo: 'Upload work → Generate similarity score + sources',
                    benefit: 'Identifies uncited content or potential plagiarism'
                  },
                  {
                    title: 'AI Writing Feedback',
                    icon: PenTool,
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
                    icon: Users,
                    color: 'orange',
                    howTo: 'Set up student peer reviews within Turnitin',
                    benefit: 'Encourages collaborative learning'
                  },
                  {
                    title: 'EKG Metrics',
                    icon: BarChart3,
                    color: 'indigo',
                    howTo: 'View "Engagement, Knowledge, Growth" analytics per student',
                    benefit: 'Tracks long-term writing progress'
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
                  { step: 1, title: 'Access Turnitin', desc: 'Go to Turnitin.com → Sign in (or request institutional access) → Click "Create Class" to set up your course' },
                  { step: 2, title: 'Enable AI Feedback', desc: 'Open your class → Click "Settings" → Toggle on "Feedback Studio (AI)" → Upload a rubric (optional)' },
                  { step: 3, title: 'Submit Student Work', desc: 'Click "Add Assignment" → Set deadline + enable "Originality Check" → Drag-and-drop student files (PDF/DOCX)' },
                  { step: 4, title: 'Review AI Feedback', desc: 'Open a submission → AI highlights grammar errors (blue), style suggestions (green), and plagiarism (red)' },
                  { step: 5, title: 'Share with Students', desc: 'Return submissions with feedback → Students view suggestions via their accounts → Use "Revision Assistant"' }
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
                    "Analyze an improved student essay using Turnitin's AI feedback tools."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Setup: Explore Example Essay', 
                        desc: 'Upload a sample essay. Review the "Originality Report" to check for uncited sources. Identify the similarity percentage.',
                        icon: Search,
                        step: 'Step 1'
                      },
                      { 
                        title: 'Analyze: Apply AI Feedback', 
                        desc: 'Enable "Feedback Studio." Review AI-generated suggestions for grammar, clarity, and style. Add QuickMarks.',
                        icon: PenTool,
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

              {/* Time Savings with AI Feedback */}
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Time Savings with AI Feedback</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Grammar & Style', saved: '80%+' },
                    { label: 'Plagiarism Checks', saved: '85%+' },
                    { label: 'Rubric Alignment', saved: '75%+' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100/50">
                      <h4 className="font-bold text-slate-500 text-xs uppercase tracking-widest mb-2">{item.label}</h4>
                      <p className="text-4xl font-black text-indigo-600">{item.saved}</p>
                      <p className="text-xs text-indigo-400 font-bold mt-1">Efficiency Gain</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Originality Database */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight text-center">Comprehensive Originality Database</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Web Pages', count: '91B+', icon: Search },
                    { label: 'Student Papers', count: '1.4B+', icon: FileText },
                    { label: 'Journals', count: '190M+', icon: BookOpen },
                    { label: 'Books', count: '70M+', icon: Layers }
                  ].map((db, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
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
                  { title: 'Deep Dive', icon: Search, desc: 'Always review high similarity scores manually; AI flags potential matches, but human judgment confirms integrity.' },
                  { title: 'Trend Analysis', icon: LineChart, desc: 'Use the "EKG Metrics" dashboard to track if a student\'s writing quality is improving across multiple assignments.' },
                  { title: 'Student Ownership', icon: Users, desc: 'Encourage students to use the "Revision Assistant" before final submission to foster a culture of growth.' }
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

              {/* QuickMarks Library */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight text-center">Build Your QuickMarks Library</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    'Abbreviations', 'Punctuation', 'Spelling', 'Grammar', 'Word Choice', 
                    'Flow', 'Citations', 'Thesis Statement', 'Evidence', 'Analysis'
                  ].map((mark, i) => (
                    <div key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 text-center shadow-sm">
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
                    { label: 'Growth', icon: LineChart, desc: 'Score improvement and reduction in writing errors over time.' }
                  ].map((metric, i) => (
                    <div key={i} className="text-center space-y-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <metric.icon size={24} />
                      </div>
                      <h4 className="font-bold text-lg">{metric.label}</h4>
                      <p className="text-sm text-indigo-100 leading-relaxed">{metric.desc}</p>
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
              "Turnitin's AI turns grading from correction to conversation."
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
            Tomorrow's Preview: Day 27: Edthena AI Coach – Use AI to analyze your teaching videos and get personalized coaching tips
          </p>
        </div>

      </div>
    </div>
  );
};

export default TurnitinDay26;
