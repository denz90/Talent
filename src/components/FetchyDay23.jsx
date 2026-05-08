import React, { useState } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Mail, 
  Layers, 
  ArrowRight,
  Zap,
  FileText,
  Trophy,
  ChevronRight,
  Target,
  Calendar,
  Users,
  MessageSquare,
  Globe,
  Database,
  BarChart3
} from 'lucide-react';

const FetchyDay23 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Briefcase },
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
            <Briefcase size={64} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 23 • AI Productivity
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Day 23: Fetchy Challenge
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Streamline Teaching Tasks with AI-Powered Productivity
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Clock size={16} /> Saves 5+ Hours/Week
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <CheckCircle2 size={16} /> Standards-Aligned
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <MessageSquare size={16} /> AI Communication
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
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What is Fetchy Challenge?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Fetchy is an AI-driven platform designed specifically for educators to automate administrative tasks, generate teaching resources, and enhance classroom productivity. It acts as a virtual assistant for teachers, handling everything from lesson planning to parent communication.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Clock, title: 'Saves 5+ Hours/Week', desc: 'By automating repetitive tasks' },
                      { icon: CheckCircle2, title: 'Standards-Aligned', desc: 'Generates lesson plans in minutes' },
                      { icon: Mail, title: 'AI Communication', desc: 'Simplifies parent-teacher emails with AI drafts' },
                      { icon: BarChart3, title: 'Data-Driven Insights', desc: 'Personalize instruction with granular feedback' }
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
                    <img src="/Productivity-pana 1.png" alt="Fetchy Illustration" className="w-full h-auto relative z-10" />
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
                    icon: FileText,
                    color: 'purple',
                    howTo: 'Select grade/subject → Input topic → Adjust length → Generate',
                    benefit: 'Creates ready-to-use plans with objectives and activities'
                  },
                  {
                    title: 'Email Draft Assistant',
                    icon: Mail,
                    color: 'blue',
                    howTo: 'Choose template (e.g., "Parent Update") → Add details → AI refines tone',
                    benefit: 'Sends polished, empathetic messages in seconds'
                  },
                  {
                    title: 'Worksheet Creator',
                    icon: Layers,
                    color: 'emerald',
                    howTo: 'Pick template (e.g., "Math Drills") → Customize → Export as PDF',
                    benefit: 'Generates differentiated practice sheets'
                  },
                  {
                    title: 'Meeting Agenda Builder',
                    icon: Calendar,
                    color: 'orange',
                    howTo: 'Input goals (e.g., "PLC Meeting") → Auto-generate discussion points',
                    benefit: 'Keeps team meetings focused and efficient'
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
                  { step: 1, title: 'Sign Up', desc: 'Go to Fetchy.io → Click "Try Free" → Sign up with Google/email' },
                  { step: 2, title: 'Generate Your First Lesson Plan', desc: 'Click "Lesson Plans" → Select Grade 5 Science → Enter topic "Ecosystems" → Choose "30-minute activity" → Toggle "Include NGSS Standards" → Click "Generate" → Edit the AI output' },
                  { step: 3, title: 'Draft a Parent Email', desc: 'Navigate to "Communications" → Select "Progress Update" → Fill in student name, strengths, and areas for growth → Click "Generate Draft" → Polish the tone' },
                  { step: 4, title: 'Create a Worksheet', desc: 'Open "Resources" → Choose "Vocabulary Matching" → Enter 10 science terms + definitions → Click "Download PDF" → Save to Google Drive' }
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
                    "Automate 1 week of lesson prep and parent communication using Fetchy."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Planning: Lesson Planning Sprint', 
                        desc: 'Generate 3 lesson plans for your next unit (15, 30, and 45 mins). Screenshot standards alignment. Download with assessments.',
                        icon: FileText,
                        step: 'Step 1'
                      },
                      { 
                        title: 'Communication: Parent Outreach', 
                        desc: 'Draft behavioral update and newsletter emails. Show before-and-after AI refinement. Note tone/clarity adjustments.',
                        icon: Mail,
                        step: 'Step 2'
                      },
                      { 
                        title: 'Resources: Resource Creation', 
                        desc: 'Match a custom worksheet to your unit. Customize questions and difficulty level. Export as PDF.',
                        icon: Layers,
                        step: 'Step 3'
                      },
                      { 
                        title: 'Collaboration: Share Your Work', 
                        desc: 'Compile resources in Fetchy Library. Share with colleagues. Post with #FetchyChallenge.',
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

              {/* Weekly Time Savings Breakdown */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Weekly Time Savings Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Lesson Planning', traditional: '3-4 hours', fetchy: '20 mins', saved: '85%' },
                    { label: 'Parent Emails', traditional: '1-2 hours', fetchy: '10 mins', saved: '90%' },
                    { label: 'Worksheet Creation', traditional: '2-3 hours', fetchy: '15 mins', saved: '80%' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-4">
                      <h4 className="font-bold text-slate-500 text-xs uppercase tracking-widest">{item.label}</h4>
                      <div className="flex justify-center items-end gap-1">
                        <span className="text-3xl font-black text-indigo-600">{item.saved}</span>
                        <span className="text-sm font-bold text-slate-400 pb-1">Time Saved</span>
                      </div>
                      <div className="text-xs text-slate-500 space-y-1">
                        <p>Traditional: {item.traditional}</p>
                        <p className="font-bold text-indigo-600">Fetchy: {item.fetchy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Batch Tasks', icon: Layers, desc: 'Use Fetchy every Monday to prep the entire week\'s materials. Create all plans and emails in one session.' },
                  { title: 'Tweak Templates', icon: FileText, desc: 'Save custom email templates for recurring needs. Modify AI drafts only when necessary for consistency.' },
                  { title: 'LMS Integration', icon: Zap, desc: 'Copy-paste AI-generated content directly into Google Classroom or Canvas. Blend Fetchy into your existing workflow.' }
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

              {/* What Fetchy Can Do */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight text-center">What Fetchy Can Do</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { title: 'Lesson Plans', icon: FileText, desc: 'Standards aligned' },
                    { title: 'Parent Emails', icon: Mail, desc: 'Empathetic tone' },
                    { title: 'Worksheets', icon: Layers, desc: 'Differentiated' },
                    { title: 'Meeting Agendas', icon: Calendar, desc: 'Focused' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
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

              {/* Email Assistant Tools */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Email Draft Assistant Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { tool: 'Progress Updates', desc: 'Share academic strengths and areas for growth with parents.' },
                    { tool: 'Behavioral Notes', desc: 'Professional drafts for classroom behavior or participation updates.' },
                    { tool: 'Curriculum Reviews', desc: 'Explain upcoming units or project goals to parents/guardians.' },
                    { tool: 'Meeting Requests', desc: 'Schedule and coordinate parent-teacher conferences efficiently.' }
                  ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0">
                        <Mail size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{tool.tool}</h4>
                        <p className="text-xs text-slate-500">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Integration */}
              <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 space-y-6">
                <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                  <Zap size={24} /> Seamless Workflow Integration
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Google Classroom', icon: Globe },
                    { label: 'Canvas LMS', icon: Database },
                    { label: 'Google Drive', icon: FileText },
                    { label: 'Email Clients', icon: Mail }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-sm">
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
        <div className="bg-indigo-600 p-10 rounded-[2.5rem] text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <Trophy size={48} className="mx-auto text-white/50" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "Fetchy turns administrative chaos into focused teaching time."
            </h2>
            <p className="text-indigo-100 font-medium">Share your results with #FetchyChallenge!</p>
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
            Tomorrow's Preview: Day 24: Ellie AI – Design personalized student learning paths with AI-driven differentiation
          </p>
        </div>

      </div>
    </div>
  );
};

export default FetchyDay23;
