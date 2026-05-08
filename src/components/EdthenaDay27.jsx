import React, { useState } from 'react';
import { 
  Video, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  ArrowRight,
  Zap,
  FileVideo,
  Trophy,
  ChevronRight,
  Target,
  Users,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Brain,
  Timer
} from 'lucide-react';

const EdthenaDay27 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Video },
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
            <Video size={64} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 27 • Video Coaching
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Day 27: Edthena AI Coach Challenge
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Transform Teaching Practice with AI-Powered Video Coaching
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <TrendingUp size={16} /> Personalized Growth
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Clock size={16} /> Time-Efficient
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <BarChart3 size={16} /> Data-Driven Insights
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
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What is Edthena AI Coach Challenge?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Edthena AI Coach is an AI-driven professional development platform that analyzes classroom videos to provide personalized feedback, helping educators refine their teaching strategies through evidence-based insights.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: TrendingUp, title: 'Personalized Growth', desc: 'Tailored feedback based on actual classroom video analysis' },
                      { icon: Clock, title: 'Time-Efficient', desc: 'Reduces manual observation paperwork and scheduling' },
                      { icon: BarChart3, title: 'Data-Driven Insights', desc: 'Tracks progress with measurable metrics over time' },
                      { icon: ShieldCheck, title: 'Confidence Builder', desc: 'Offers non-judgmental, private, and actionable suggestions' }
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
                    <img src="/Virtual assistant-pana 1.png" alt="Edthena Illustration" className="w-full h-auto relative z-10" />
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
                    title: 'Video Upload',
                    icon: FileVideo,
                    color: 'purple',
                    howTo: 'Record classroom videos → AI analyzes tone, pacing, and engagement',
                    benefit: 'Identifies blind spots in teaching delivery'
                  },
                  {
                    title: 'AI Feedback',
                    icon: Zap,
                    color: 'blue',
                    howTo: 'Receive reports on questioning techniques or management',
                    benefit: 'Provides objective, instant, non-judgmental feedback'
                  },
                  {
                    title: 'Skill Benchmarks',
                    icon: CheckCircle2,
                    color: 'emerald',
                    howTo: 'Compare videos against research-backed frameworks (e.g., Danielson)',
                    benefit: 'Aligns practice with professional standards'
                  },
                  {
                    title: 'Collaborative PD',
                    icon: Users,
                    color: 'orange',
                    howTo: 'Share videos with mentors/peers → Annotate and discuss',
                    benefit: 'Facilitates collaborative school-wide improvement'
                  },
                  {
                    title: 'Reflection Prompts',
                    icon: MessageSquare,
                    color: 'indigo',
                    howTo: 'Respond to AI-generated prompts to deepen self-awareness',
                    benefit: 'Drives intentional change in teaching habits'
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
                  { step: 1, title: 'Sign Up', desc: 'Go to Edthena.com → Click "Try AI Coach" → Sign up as an educator' },
                  { step: 2, title: 'Upload a Teaching Video', desc: 'Click "+ New Video" → Record a 10-minute clip (e.g., lesson intro) or upload existing footage' },
                  { step: 3, title: 'Analyze with AI', desc: 'Select "AI Feedback" → Choose focus areas (e.g., "Wait Time") → Click "Generate Report" → Review insights' },
                  { step: 4, title: 'Reflect & Plan', desc: 'Use "Reflection Prompts" tab to jot down 1 strength and 1 growth area → Click "Save to PD Plan"' },
                  { step: 5, title: 'Share for Peer Feedback', desc: 'Invite a colleague via email → Discuss AI findings using timestamp comments' }
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
                    "Use AI Coach to analyze your questioning techniques in a recorded lesson."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Setup: Record & Upload', 
                        desc: 'Record a 10-minute Q&A segment. Upload to Edthena AI Coach. Ensure clear audio for accurate analysis.',
                        icon: Video,
                        step: 'Step 1'
                      },
                      { 
                        title: 'Analyze: Run AI Analysis', 
                        desc: 'Select "Questioning Techniques" focus area. Allow AI to process and generate a feedback report.',
                        icon: Zap,
                        step: 'Step 2'
                      },
                      { 
                        title: 'Reflect: Reflect on Feedback', 
                        desc: 'Review "Wait Time" and participation metrics. Identify one specific adjustment for your next lesson.',
                        icon: Brain,
                        step: 'Step 3'
                      },
                      { 
                        title: 'Share: Share Insights', 
                        desc: 'Export summary reflection. organize findings in your PD portfolio. Post with #AIEdthenaChallenge.',
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

              {/* What AI Analyzes */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight text-center">What AI Analyzes in Your Video</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Questioning', icon: MessageSquare, desc: 'Wait time & depth' },
                    { label: 'Engagement', icon: Users, desc: 'Participation rates' },
                    { label: 'Management', icon: ShieldCheck, desc: 'Transitions & behavior' },
                    { label: 'Pacing', icon: Timer, desc: 'Instruction vs practice' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-3">
                      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl w-fit mx-auto">
                        <item.icon size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.label}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Feedback Report */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight text-center">Sample AI Feedback Report</h3>
                <div className="space-y-4 max-w-2xl mx-auto">
                  {[
                    { label: 'Wait Time Analysis', value: '1.2s', rec: '3-5s', color: 'orange' },
                    { label: 'Student Participation', value: '25%', rec: '70%+', color: 'red' },
                    { label: 'Questioning Quality', value: '70% Recall', rec: 'Higher DOK', color: 'indigo' }
                  ].map((report, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <div>
                        <h4 className="font-bold text-slate-900">{report.label}</h4>
                        <p className="text-xs text-slate-500">Recommendation: {report.rec}</p>
                      </div>
                      <div className={`text-xl font-black text-${report.color}-600`}>
                        {report.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Edit the Script', icon: FileVideo, desc: 'Use AI-generated transcripts to refine your verbal delivery and eliminate filler words.' },
                  { title: 'Focus Daily', icon: Target, desc: 'Select one small focus area (like "Positive Reinforcement") each week to see growth.' },
                  { title: 'Track Progress', icon: LineChart, desc: 'Upload videos monthly to create a visual timeline of your professional journey.' }
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

              {/* Framework Alignment */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight text-center">Research-Backed Framework Alignment</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {['Danielson', 'Marzano', 'CLASS', 'Edthena'].map((framework, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform font-black">
                        {framework[0]}
                      </div>
                      <h4 className="font-bold text-sm tracking-widest uppercase">{framework}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaborative PD Workflow */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight text-center">Collaborative PD Workflow</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { step: 'Step 1: Self-Reflection', desc: 'Identify your own strengths and areas for growth privately.' },
                    { step: 'Step 2: Peer Feedback', desc: 'Invite colleagues to comment on specific timestamps.' },
                    { step: 'Step 3: Actionable Planning', desc: 'Turn feedback into a concrete improvement plan.' },
                    { step: 'Step 4: Growth Tracking', desc: 'Compare future videos to baseline to see measurable progress.' }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{step.step}</h4>
                        <p className="text-xs text-slate-500">{step.desc}</p>
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
              "Edthena turns self-reflection into a superpower."
            </h2>
            <p className="text-indigo-100 font-medium">Share your results with #AIEdthenaChallenge!</p>
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
            Tomorrow's Preview: Day 28: Loop AI – Create instant student feedback loops with AI-powered surveys
          </p>
        </div>

      </div>
    </div>
  );
};

export default EdthenaDay27;
