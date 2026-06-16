import React, { useState } from 'react';
import { 
  RotateCcw, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  ArrowRight,
  Zap,
  MessageSquare,
  Trophy,
  ChevronRight,
  Target,
  Users,
  LineChart,
  Brain,
  Search,
  Layout,
  Share2,
  ThumbsUp,
  Heart
} from 'lucide-react';

const LoopDay28 = ({ onNext }) => {
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
            <RotateCcw size={64} strokeWidth={1} />
          </div>

          <div className="text-center space-y-6 pt-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-site-bg/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 28 • Feedback Loops
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 28: Loop AI Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Close the Feedback Loop with AI-Powered Student Insights
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <MessageSquare size={16} /> Real-Time Feedback
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <LineChart size={16} /> Data-Driven Decisions
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <Brain size={16} /> Personalized Learning
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
                  <h2 className="text-3xl font-bold text-site-text tracking-tight">What is Loop AI Challenge?</h2>
                  <p className="text-site-text/80 leading-relaxed text-lg">
                    Loop AI is a collaborative learning platform that uses AI to analyze student feedback, discussions, and engagement data in real time. It helps educators identify knowledge gaps, improve teaching strategies, and personalize learning experiences.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: MessageSquare, title: 'Real-Time Feedback', desc: 'Captures student confusion instantly during lessons' },
                      { icon: LineChart, title: 'Data-Driven Decisions', desc: 'Visualizes class understanding with heatmaps and trends' },
                      { icon: Zap, title: 'Automated Insights', desc: 'Suggests interventions (e.g., reteaching topics)' },
                      { icon: Brain, title: 'Personalized Learning', desc: 'Recommends resources for struggling students' }
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
                    <img src="/Teaching-pana 1.png" alt="Loop Illustration" className="w-full h-auto relative z-10" />
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
                    title: 'Live Q&A',
                    icon: MessageSquare,
                    color: 'purple',
                    howTo: 'Students submit questions during class → AI clusters queries',
                    benefit: 'Spot recurring misunderstandings instantly'
                  },
                  {
                    title: 'Sentiment Analysis',
                    icon: Heart,
                    color: 'blue',
                    howTo: 'Analyzes forum tones (e.g., "confused", "confident")',
                    benefit: 'Gauge class morale and adjust pacing'
                  },
                  {
                    title: 'Knowledge Gaps',
                    icon: Target,
                    color: 'emerald',
                    howTo: 'AI flags topics with low scores + suggests materials',
                    benefit: 'Target reteaching efficiently'
                  },
                  {
                    title: 'Peer Loop',
                    icon: Users,
                    color: 'orange',
                    howTo: 'Students give anonymous feedback → AI summarizes trends',
                    benefit: 'Builds metacognition and collaboration'
                  },
                  {
                    title: 'Auto-Reflection',
                    icon: RotateCcw,
                    color: 'indigo',
                    howTo: 'Generates weekly reflection prompts based on performance',
                    benefit: 'Encourages ownership of learning'
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
                  { step: 1, title: 'Set Up Your Class', desc: 'Sign up at Loop AI website → Click "New Class" → Enter name + upload roster (CSV or manual)' },
                  { step: 2, title: 'Launch a Live Session', desc: 'Click "Start Live Session" → Share join code → Students submit questions via app/portal' },
                  { step: 3, title: 'Analyze Feedback', desc: 'Post-class, open "Insights Dashboard" → Check Confusion Heatmap and Sentiment Graph' },
                  { step: 4, title: 'Assign Interventions', desc: 'Click "Knowledge Gaps" → Review AI resources → Drag-and-drop to assign materials' },
                  { step: 5, title: 'Generate Reports', desc: 'Export weekly summaries (PDF/Excel) for parents → Use data to plan group work' }
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
                    "Launch a Loop Session and implement AI-Suggested Interventions."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Setup: Host Live Q&A', 
                        desc: 'Start a 15-minute live Q&A session. Encourage students to submit questions. Monitor AI-clustering.',
                        icon: MessageSquare,
                        step: 'Step 1'
                      },
                      { 
                        title: 'Analyze: Analyze Indices', 
                        desc: 'Review the "Confusion Heatmap" and "Sentiment Trend." Identify top concepts causing confusion.',
                        icon: LineChart,
                        step: 'Step 2'
                      },
                      { 
                        title: 'Intervene: Act on Suggestions', 
                        desc: 'Assign one AI-recommended intervention (video/quiz) to students flagged in the report.',
                        icon: Zap,
                        step: 'Step 3'
                      },
                      { 
                        title: 'Share: Collect Feedback', 
                        desc: 'Ask students for a quick "sentiment check." Export summary and share with #AIFeedbackLoop.',
                        icon: Share2,
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

              {/* Real-Time Dashboard */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight text-center">Real-Time Feedback Dashboard</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Confusion Heatmap', icon: Brain, desc: 'Red = high confusion', color: 'red' },
                    { label: 'Sentiment Trend', icon: Heart, desc: 'Class morale monitoring', color: 'rose' },
                    { label: 'Topics of Interest', icon: Search, desc: 'AI-extracted keywords', color: 'indigo' },
                    { label: 'Engagement Level', icon: Zap, desc: 'Participation tracking', color: 'amber' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-site-bg border border-site-accent shadow-sm text-center space-y-3 hover:border-indigo-200 transition-all group">
                      <div className={`p-3 bg-${item.color}-50 text-${item.color}-600 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform`}>
                        <item.icon size={24} />
                      </div>
                      <h4 className="font-bold text-site-text text-sm leading-tight">{item.label}</h4>
                      <p className="text-[10px] text-site-text/80 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Interventions */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight text-center">AI-Recommended Interventions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Reteaching Material', desc: 'Focused resources for common gaps', icon: RotateCcw },
                    { title: 'Practice Quizzes', desc: 'Adaptive assessments to test mastery', icon: CheckCircle2 },
                    { title: 'Peer Tutoring Pairs', desc: 'AI-matched students for help', icon: Users }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100/50 flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-site-bg text-indigo-600 rounded-full shadow-sm">
                        <item.icon size={20} />
                      </div>
                      <h4 className="font-bold text-site-text text-sm">{item.title}</h4>
                      <p className="text-xs text-site-text/80">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Personalize Responses', icon: MessageSquare, desc: 'Use student names in follow-up feedback to build stronger connections.' },
                  { title: 'Anonymous Mode', icon: Search, desc: 'Enable anonymous posting during live sessions to encourage struggling students.' },
                  { title: 'Combine with LMS', icon: Layout, desc: 'Integrate with Canvas or Google Classroom to sync rosters and grades automatically.' }
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

              {/* Congratulations Banner */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] p-12 text-white text-center shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-site-bg/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
                <Trophy size={64} className="mx-auto mb-4 animate-bounce" />
                <h2 className="text-4xl font-black tracking-tight">Congratulations!</h2>
                <p className="text-xl font-medium text-emerald-50">
                  You've completed the 28-Day AI Education Challenge!
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8 relative z-10">
                  {['LMS Mastery', 'AI Orchestrator', 'Data Wizard', 'EdTech Leader'].map((badge, i) => (
                    <span key={i} className="bg-site-bg/20 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                      {badge}
                    </span>
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
              "Loop turns feedback from a post-mortem into a live pulse check."
            </h2>
            <p className="text-site-text font-medium">Share your final results with #AIFeedbackLoop!</p>
            <button 
              onClick={onNext}
              className="mt-4 bg-site-bg text-site-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto group"
            >
              Finish Challenge <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoopDay28;
