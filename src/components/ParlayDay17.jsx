import React, { useState } from 'react';
import {
  Sparkles,
  Clock,
  MessageSquare,
  Users,
  Brain,
  BarChart3,
  ListChecks,
  ChevronRight,
  Trophy,
  Zap,
  Target,
  CheckCircle2,
  Lightbulb,
  MousePointer2,
  Search,
  Settings,
  ShieldCheck,
  UserPlus,
  Rocket,
  Layout,
  BookOpen,
  Presentation,
  Award
} from 'lucide-react';

const ParlayDay17 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'guide', label: 'Guide' },
    { id: 'challenge', label: 'Challenge' }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-[#0F172B] via-[#59168B] to-[#0F172B] text-white font-sans">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-12 pb-32">
        
        {/* Header Hero */}
        <div className="text-center space-y-6 pt-8">
          <div className="flex justify-center">
            <div className="bg-yellow-400 p-3 rounded-2xl transform rotate-12 animate-pulse shadow-lg shadow-yellow-400/20">
              <Sparkles className="text-[#2e0052]" size={32} />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">Day 17: Parlay Challenge</h1>
          <p className="text-xl text-purple-100 font-medium max-w-2xl mx-auto opacity-90">
            Facilitate Meaningful Student Discussions with AI-Powered RoundTables
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-purple-200">
              <MessageSquare size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Boosts Engagement</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <BarChart3 size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Easy Assessment</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Brain size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">AI Feedback</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-2xl flex gap-2 border border-white/10 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === tab.id 
                ? 'bg-white text-[#2e0052] shadow-xl scale-[1.02]' 
                : 'text-purple-200 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'overview' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-[#4b2475]/40 rounded-3xl p-10 border border-purple-400/20">
                <h2 className="text-3xl font-bold mb-6">What is Parlay?</h2>
                <p className="text-purple-50 text-lg leading-relaxed opacity-90">
                  Parlay is an AI-driven discussion platform that helps educators create structured, inclusive, and data-rich student debates (called "RoundTables"). It promotes critical thinking, tracks participation, and provides feedback to improve discourse skills.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-300">
                      <MessageSquare size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Boosts Engagement:</span>
                      Turns passive learners into active participants through structured discussion.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/30 flex items-center justify-center text-blue-300">
                      <BarChart3 size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Assessment Made Easy:</span>
                      Auto-tracks speaking time, frequency, and quality for detailed analysis.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-green-600/30 flex items-center justify-center text-green-300">
                      <Users size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Inclusive Dialogues:</span>
                      Gives quieter students tools to contribute via written mode and prompts.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-pink-600/30 flex items-center justify-center text-pink-300">
                      <Brain size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">AI Feedback:</span>
                      Generates reflection prompts and summarizes trends from class discussions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6 group hover:border-pink-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-pink-600/40 flex items-center justify-center text-pink-200">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">RoundTables</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Create live/async discussions with prompts, rubrics, and peer feedback.</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Structured debates with measurable outcomes.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6 group hover:border-blue-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/40 flex items-center justify-center text-blue-200">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Written Mode</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Students type responses instead of speaking (supports shy learners).</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Inclusive participation tracking.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6 group hover:border-green-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-green-600/40 flex items-center justify-center text-green-200">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">AI Feedback</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Parlay analyzes discussions → generates insights (e.g., "75% cited evidence").</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Saves grading time + identifies learning gaps.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6 group hover:border-orange-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/40 flex items-center justify-center text-orange-200">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Custom Rubrics</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Attach grading criteria (e.g., "Claims supported by evidence → 20pts").</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Aligns discussions to curriculum standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center md:text-left">
              <h2 className="text-3xl font-bold text-center">Getting Started Guide</h2>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Sign Up', content: 'Go to ParlayIdeas.com → Click "Educator Sign Up" (free plan available).', icon: UserPlus },
                  { step: 2, title: 'Create a RoundTable', content: 'Click "New RoundTable" → Choose Live Discussion or Written Response.', icon: Layout },
                  { step: 3, title: 'Add a Prompt', content: 'Enter a discussion question and use AI Prompt Generator to refine it.', icon: Zap },
                  { step: 4, title: 'Set Rules', content: 'Enable/disable anonymity and attach rubrics.', icon: Settings },
                  { step: 5, title: 'Launch & Monitor', content: 'Share join code and track speaking time balance in real-time.', icon: Rocket },
                  { step: 6, title: 'Review AI Insights', content: 'Check Analytics for participation heatmaps and misconceptions.', icon: BarChart3 }
                ].map((step) => (
                  <div key={step.step} className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col md:flex-row items-center gap-8 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-full bg-[#e61e7d] text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-pink-500/20 shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                        <step.icon size={18} className="text-pink-400" />
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-purple-100/80">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.1),transparent)]"></div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#2e0052] shadow-lg shadow-yellow-400/20">
                    <Target size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-yellow-400">Practical Challenge Task</h2>
                    <p className="text-yellow-100/70">"Host a RoundTable on digital ethics and analyze student engagement."</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-6 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Layout size={60} />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/40 flex items-center justify-center text-blue-200">
                      <Layout size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Set Up</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-purple-100/80">
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" size={18} /> <span>Create a Live RoundTable with prompt: "Is it ethical to use AI for homework?"</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" size={18} /> <span>Enable Anonymous Mode + attach rubric (2+ real-world examples required)</span></li>
                  </ul>
                </div>

                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-6 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users size={60} />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-600/40 flex items-center justify-center text-pink-200">
                      <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Run the Discussion</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-purple-100/80">
                    <li className="flex gap-3"><CheckCircle2 className="text-pink-400 shrink-0" size={18} /> <span>Have students debate for 15 mins (in-class or virtual)</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-pink-400 shrink-0" size={18} /> <span>Use dashboard to call on 1-2 quiet students</span></li>
                  </ul>
                </div>

                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-6 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <BarChart3 size={60} />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-600/40 flex items-center justify-center text-green-200">
                      <BarChart3 size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Analyze Data</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-purple-100/80">
                    <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Screenshot the Participation Report (show speaking time distribution)</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Note 1 AI-generated insight</span></li>
                  </ul>
                </div>

                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-6 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Brain size={60} />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-600/40 flex items-center justify-center text-orange-200">
                      <Brain size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Reflect</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-purple-100/80">
                    <li className="flex gap-3"><CheckCircle2 className="text-orange-400 shrink-0" size={18} /> <span>Share 1 change you'd make next time</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-orange-400 shrink-0" size={18} /> <span>Example: "Add pre-discussion poll to gauge bias"</span></li>
                  </ul>
                </div>
              </div>

              <div className="pt-10 space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={32} /> Pro Tips for Mastery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#4b2475] p-8 rounded-3xl border border-purple-400/20 group hover:border-pink-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/30 flex items-center justify-center text-pink-300 mb-4">
                      <BookOpen size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-purple-100/90">
                      Prep Students: Use Parlay's "Discussion Skills" mini-lessons to teach active listening
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-3xl border border-purple-400/20 group hover:border-blue-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center text-blue-300 mb-4">
                      <Zap size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-purple-100/90">
                      Mix Formats: Combine live debates with written responses for differentiated assessment
                    </p>
                  </div>

                  <div className="bg-[#4b2475] p-8 rounded-3xl border border-purple-400/20 group hover:border-orange-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/30 flex items-center justify-center text-orange-300 mb-4">
                      <Award size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-purple-100/90">
                      Gamify: Award badges (via Parlay) for "Best Evidence" or "Most Improved"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA Card */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-[#e61e7d] to-[#ff4b2b] p-12 text-center space-y-8 shadow-2xl shadow-pink-500/40">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="flex justify-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-inner">
              <Trophy size={32} />
            </div>
          </div>
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl font-black max-w-2xl mx-auto leading-tight">
              "Parlay turns classroom chatter into measurable critical thinking."
            </h2>
            <p className="text-pink-100 font-medium">Share your RoundTable insights with #AIDiscussionChallenge!</p>
          </div>
          
          <div className="relative z-10">
            <button 
              onClick={onNext}
              className="bg-white text-[#e61e7d] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto group"
            >
              Start Your Quiz
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <p className="text-center text-purple-300/60 text-sm pb-10">
          Tomorrow's Preview: Day 18: Read Along – Transform literacy practice with AI-powered reading fluency tracking
        </p>

      </div>
    </div>
  );
};

export default ParlayDay17;
