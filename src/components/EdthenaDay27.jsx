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
  Timer,
  LineChart
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
    <div className="w-full h-full overflow-y-auto bg-site-primary text-site-text">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-site-primary-400 rounded-3xl p-10">
          <div className="absolute opacity-20"></div>
          
          <div className="absolute top-10 right-10 animate-pulse text-site-text">
            <Video size={64} strokeWidth={1} />
          </div>

          <div className="text-center space-y-6 pt-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-site-bg/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 27 • Video Coaching
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 27: Edthena AI Coach Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Transform Teaching Practice with AI-Powered Video Coaching
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <TrendingUp size={16} /> Personalized Growth
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <Clock size={16} /> Time-Efficient
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <BarChart3 size={16} /> Data-Driven Insights
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
                  <h2 className="text-3xl font-bold text-site-text tracking-tight">What is Edthena AI Coach Challenge?</h2>
                  <p className="text-site-text/80 leading-relaxed text-lg">
                    Edthena AI Coach is an AI-driven professional development platform that analyzes classroom videos to provide personalized feedback, helping educators refine their teaching strategies through evidence-based insights.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: TrendingUp, title: 'Personalized Growth', desc: 'Tailored feedback based on actual classroom video analysis' },
                      { icon: Clock, title: 'Time-Efficient', desc: 'Reduces manual observation paperwork and scheduling' },
                      { icon: BarChart3, title: 'Data-Driven Insights', desc: 'Tracks progress with measurable metrics over time' },
                      { icon: ShieldCheck, title: 'Confidence Builder', desc: 'Offers non-judgmental, private, and actionable suggestions' }
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
                    <img src="/Virtual assistant-pana 1.png" alt="Edthena Illustration" className="w-full h-auto relative z-10" />
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
                  { step: 1, title: 'Sign Up', desc: 'Go to Edthena.com → Click "Try AI Coach" → Sign up as an educator' },
                  { step: 2, title: 'Upload a Teaching Video', desc: 'Click "+ New Video" → Record a 10-minute clip (e.g., lesson intro) or upload existing footage' },
                  { step: 3, title: 'Analyze with AI', desc: 'Select "AI Feedback" → Choose focus areas (e.g., "Wait Time") → Click "Generate Report" → Review insights' },
                  { step: 4, title: 'Reflect & Plan', desc: 'Use "Reflection Prompts" tab to jot down 1 strength and 1 growth area → Click "Save to PD Plan"' },
                  { step: 5, title: 'Share for Peer Feedback', desc: 'Invite a colleague via email → Discuss AI findings using timestamp comments' }
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

              {/* What AI Analyzes */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight text-center">What AI Analyzes in Your Video</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Questioning', icon: MessageSquare, desc: 'Wait time & depth' },
                    { label: 'Engagement', icon: Users, desc: 'Participation rates' },
                    { label: 'Management', icon: ShieldCheck, desc: 'Transitions & behavior' },
                    { label: 'Pacing', icon: Timer, desc: 'Instruction vs practice' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-site-bg border border-site-accent shadow-sm text-center space-y-3">
                      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl w-fit mx-auto">
                        <item.icon size={24} />
                      </div>
                      <h4 className="font-bold text-site-text text-sm">{item.label}</h4>
                      <p className="text-xs text-site-text/80">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Feedback Report */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight text-center">Sample AI Feedback Report</h3>
                <div className="space-y-4 max-w-2xl mx-auto">
                  {[
                    { label: 'Wait Time Analysis', value: '1.2s', rec: '3-5s', color: 'orange' },
                    { label: 'Student Participation', value: '25%', rec: '70%+', color: 'red' },
                    { label: 'Questioning Quality', value: '70% Recall', rec: 'Higher DOK', color: 'indigo' }
                  ].map((report, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-site-bg border border-site-accent rounded-2xl shadow-sm">
                      <div>
                        <h4 className="font-bold text-site-text">{report.label}</h4>
                        <p className="text-xs text-site-text/80">Recommendation: {report.rec}</p>
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
                  <div key={i} className="bg-site-bg p-6 rounded-3xl border border-site-accent space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/30 flex items-center justify-center text-site-text mb-4">
                      <tip.icon size={24} />
                    </div>
                    <h4 className="font-bold text-site-text">{tip.title}</h4>
                    <p className="text-sm text-site-text/80 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>

              {/* Framework Alignment */}
              <div className="bg-site-primary rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight text-center">Research-Backed Framework Alignment</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {['Danielson', 'Marzano', 'CLASS', 'Edthena'].map((framework, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                      <div className="w-12 h-12 rounded-2xl bg-site-bg/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform font-black">
                        {framework[0]}
                      </div>
                      <h4 className="font-bold text-sm tracking-widest uppercase">{framework}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaborative PD Workflow */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight text-center">Collaborative PD Workflow</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { step: 'Step 1: Self-Reflection', desc: 'Identify your own strengths and areas for growth privately.' },
                    { step: 'Step 2: Peer Feedback', desc: 'Invite colleagues to comment on specific timestamps.' },
                    { step: 'Step 3: Actionable Planning', desc: 'Turn feedback into a concrete improvement plan.' },
                    { step: 'Step 4: Growth Tracking', desc: 'Compare future videos to baseline to see measurable progress.' }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-site-bg border border-site-accent shadow-sm hover:border-indigo-100 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-site-text text-sm">{step.step}</h4>
                        <p className="text-xs text-site-text/80">{step.desc}</p>
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
              "Edthena turns self-reflection into a superpower."
            </h2>
            <p className="text-site-text font-medium">Share your results with #AIEdthenaChallenge!</p>
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

export default EdthenaDay27;
