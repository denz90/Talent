import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Layers,
  Lightbulb,
  MessageSquare,
  Shield,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Trophy,
  Zap
} from 'lucide-react';

const EdthenaDay27 = ({ onNext }) => {
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
              Day 27: Edthena AI Coach Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Transform Teaching Practice with AI-Powered Video Coaching
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <span className="flex items-center gap-2 text-site-text">
                <TrendingUp size={16} /> Personalized Growth
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <Clock size={16} /> Time-Efficient
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <TrendingUp size={16} /> Data-Driven Insights
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
                <h2 className="text-3xl text-site-text font-bold mb-6">What is Edthena AI Coach Challenge?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  Edthena AI Coach is an AI-driven professional development platform that analyzes classroom videos to provide personalized feedback, helping educators refine their teaching strategies through evidence-based insights.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  { [
                      { icon: TrendingUp, title: 'Personalized Growth', desc: 'Tailored feedback based on actual classroom video analysis' },
                      { icon: Clock, title: 'Time-Efficient', desc: 'Reduces manual observation paperwork and scheduling' },
                      { icon: TrendingUp, title: 'Data-Driven Insights', desc: 'Tracks progress with measurable metrics over time' },
                      { icon: Shield, title: 'Confidence Builder', desc: 'Offers non-judgmental, private, and actionable suggestions' }
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
                    title: 'Video Upload',
                    icon: FileText,
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
                    icon: Layers,
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
                  { step: 1, title: 'Sign Up', desc: 'Go to Edthena.com → Click "Try AI Coach" → Sign up as an educator' },
                  { step: 2, title: 'Upload a Teaching Video', desc: 'Click "+ New Video" → Record a 10-minute clip (e.g., lesson intro) or upload existing footage' },
                  { step: 3, title: 'Analyze with AI', desc: 'Select "AI Feedback" → Choose focus areas (e.g., "Wait Time") → Click "Generate Report" → Review insights' },
                  { step: 4, title: 'Reflect & Plan', desc: 'Use "Reflection Prompts" tab to jot down 1 strength and 1 growth area → Click "Save to PD Plan"' },
                  { step: 5, title: 'Share for Peer Feedback', desc: 'Invite a colleague via email → Discuss AI findings using timestamp comments' }
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
                    "Use AI Coach to analyze your questioning techniques in a recorded lesson."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Setup: Record & Upload', 
                        desc: 'Record a 10-minute Q&A segment. Upload to Edthena AI Coach. Ensure clear audio for accurate analysis.',
                        icon: Layers,
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
                        icon: Lightbulb,
                        step: 'Step 3'
                      },
                      { 
                        title: 'Share: Share Insights', 
                        desc: 'Export summary reflection. organize findings in your PD portfolio. Post with #AIEdthenaChallenge.',
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

              {/* What AI Analyzes */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight text-center">What AI Analyzes in Your Video</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Questioning', icon: MessageSquare, desc: 'Wait time & depth' },
                    { label: 'Engagement', icon: Layers, desc: 'Participation rates' },
                    { label: 'Management', icon: Shield, desc: 'Transitions & behavior' },
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
                  { title: 'Edit the Script', icon: FileText, desc: 'Use AI-generated transcripts to refine your verbal delivery and eliminate filler words.' },
                  { title: 'Focus Daily', icon: Target, desc: 'Select one small focus area (like "Positive Reinforcement") each week to see growth.' },
                  { title: 'Track Progress', icon: TrendingUp, desc: 'Upload videos monthly to create a visual timeline of your professional journey.' }
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
              Start Your Challenge <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        </div>
    </div>
  );
};

export default EdthenaDay27;
