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
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="absolute top-10 right-10 animate-pulse text-indigo-300">
            <RotateCcw size={64} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 28 • Feedback Loops
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Day 28: Loop AI Challenge
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Close the Feedback Loop with AI-Powered Student Insights
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <MessageSquare size={16} /> Real-Time Feedback
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <LineChart size={16} /> Data-Driven Decisions
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Brain size={16} /> Personalized Learning
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
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What is Loop AI Challenge?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Loop AI is a collaborative learning platform that uses AI to analyze student feedback, discussions, and engagement data in real time. It helps educators identify knowledge gaps, improve teaching strategies, and personalize learning experiences.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: MessageSquare, title: 'Real-Time Feedback', desc: 'Captures student confusion instantly during lessons' },
                      { icon: LineChart, title: 'Data-Driven Decisions', desc: 'Visualizes class understanding with heatmaps and trends' },
                      { icon: Zap, title: 'Automated Insights', desc: 'Suggests interventions (e.g., reteaching topics)' },
                      { icon: Brain, title: 'Personalized Learning', desc: 'Recommends resources for struggling students' }
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
                    <img src="/Teaching-pana 1.png" alt="Loop Illustration" className="w-full h-auto relative z-10" />
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
                  { step: 1, title: 'Set Up Your Class', desc: 'Sign up at Loop AI website → Click "New Class" → Enter name + upload roster (CSV or manual)' },
                  { step: 2, title: 'Launch a Live Session', desc: 'Click "Start Live Session" → Share join code → Students submit questions via app/portal' },
                  { step: 3, title: 'Analyze Feedback', desc: 'Post-class, open "Insights Dashboard" → Check Confusion Heatmap and Sentiment Graph' },
                  { step: 4, title: 'Assign Interventions', desc: 'Click "Knowledge Gaps" → Review AI resources → Drag-and-drop to assign materials' },
                  { step: 5, title: 'Generate Reports', desc: 'Export weekly summaries (PDF/Excel) for parents → Use data to plan group work' }
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

              {/* Real-Time Dashboard */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight text-center">Real-Time Feedback Dashboard</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Confusion Heatmap', icon: Brain, desc: 'Red = high confusion', color: 'red' },
                    { label: 'Sentiment Trend', icon: Heart, desc: 'Class morale monitoring', color: 'rose' },
                    { label: 'Topics of Interest', icon: Search, desc: 'AI-extracted keywords', color: 'indigo' },
                    { label: 'Engagement Level', icon: Zap, desc: 'Participation tracking', color: 'amber' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-3 hover:border-indigo-200 transition-all group">
                      <div className={`p-3 bg-${item.color}-50 text-${item.color}-600 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform`}>
                        <item.icon size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">{item.label}</h4>
                      <p className="text-[10px] text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Interventions */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight text-center">AI-Recommended Interventions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Reteaching Material', desc: 'Focused resources for common gaps', icon: RotateCcw },
                    { title: 'Practice Quizzes', desc: 'Adaptive assessments to test mastery', icon: CheckCircle2 },
                    { title: 'Peer Tutoring Pairs', desc: 'AI-matched students for help', icon: Users }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100/50 flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-white text-indigo-600 rounded-full shadow-sm">
                        <item.icon size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-600">{item.desc}</p>
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
                  <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm w-fit text-indigo-600">
                      <tip.icon size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900">{tip.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>

              {/* Congratulations Banner */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] p-12 text-white text-center shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
                <Trophy size={64} className="mx-auto mb-4 animate-bounce" />
                <h2 className="text-4xl font-black tracking-tight">Congratulations!</h2>
                <p className="text-xl font-medium text-emerald-50">
                  You've completed the 28-Day AI Education Challenge!
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8 relative z-10">
                  {['LMS Mastery', 'AI Orchestrator', 'Data Wizard', 'EdTech Leader'].map((badge, i) => (
                    <span key={i} className="bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                      {badge}
                    </span>
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
              "Loop turns feedback from a post-mortem into a live pulse check."
            </h2>
            <p className="text-indigo-100 font-medium">Share your final results with #AIFeedbackLoop!</p>
            <button 
              onClick={onNext}
              className="mt-4 bg-white text-indigo-600 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto group"
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
