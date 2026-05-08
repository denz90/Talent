import React, { useState } from 'react';
import {
  Sparkles,
  Clock,
  Mic,
  Book,
  Trophy,
  WifiOff,
  Globe,
  BarChart3,
  ListPlus,
  ChevronRight,
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
  Award,
  Zap,
  Smartphone,
  Users,
  Brain,
  MessageSquare,
  TrendingUp,
  FileText
} from 'lucide-react';

const ReadAlongDay18 = ({ onNext }) => {
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
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">Day 18: Read Along Challenge</h1>
          <p className="text-xl text-purple-100 font-medium max-w-2xl mx-auto opacity-90">
            Boost Literacy with AI-Powered Reading Support
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-purple-200">
              <Mic size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Personalized Feedback</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Book size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">500+ Stories</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Trophy size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Gamification</span>
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
                <h2 className="text-3xl font-bold mb-6">What is Read Along?</h2>
                <p className="text-purple-50 text-lg leading-relaxed opacity-90">
                  Read Along (formerly Bolo) is a free Google AI app that helps children improve reading skills through real-time speech recognition and feedback. It features an in-app reading assistant (Diya) that listens, corrects pronunciation, and rewards progress.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-300">
                      <Mic size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Personalized Feedback:</span>
                      Instant pronunciation correction for ESL/struggling readers.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/30 flex items-center justify-center text-blue-300">
                      <Book size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Engaging Library:</span>
                      500+ leveled stories across multiple languages.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-green-600/30 flex items-center justify-center text-green-300">
                      <Trophy size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Gamification:</span>
                      Badges and stars motivate consistent practice.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-pink-600/30 flex items-center justify-center text-pink-300">
                      <WifiOff size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Offline Access:</span>
                      No internet needed after initial download.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Key Features & How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6 group hover:border-pink-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-pink-600/40 flex items-center justify-center text-pink-200">
                    <Mic size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">AI Reading Buddy</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Student reads aloud → Diya highlights mispronounced words.</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Saves 1:1 correction time; provides unbiased feedback.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6 group hover:border-blue-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/40 flex items-center justify-center text-blue-200">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Multilingual Library</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Filter by language/level (e.g., "English L2") - 500+ stories.</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Supports diverse classrooms and language learners.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6 group hover:border-yellow-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-600/40 flex items-center justify-center text-yellow-200">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Reward System</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Students earn stars for correct reading → Unlock badges.</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Intrinsic motivation for independent practice.</p>
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
                    <h3 className="text-xl font-bold mb-4">Teacher Dashboard</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Export CSV reports of student WPM/accuracy.</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Data-driven intervention planning.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6 group hover:border-purple-500/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/40 flex items-center justify-center text-purple-200">
                    <Book size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Custom Word Lists</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Upload vocabulary from current lessons.</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Reinforces curriculum-aligned terms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Step-by-Step Getting Started Guide</h2>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Install the App', content: 'Android: Download "Read Along by Google" from Play Store. iOS: Use web version at readalong.google', icon: Smartphone },
                  { step: 2, title: 'Set Up Profiles', content: 'Open app → Tap "+" → Add student name/avatar. Enable "School Mode" for focused practice.', icon: BookOpen },
                  { step: 3, title: 'Assign Reading Material', content: 'Tap "Library" → Filter by grade level/language. Example: Select "The Lion and the Mouse" (Level 1)', icon: Sparkles },
                  { step: 4, title: 'Monitor Progress', content: 'Go to "Progress" tab → View WPM and accuracy % → Tap "Export Data" to share with parents.', icon: BarChart3 },
                  { step: 5, title: 'Create Custom Assignments', content: 'Tap "Your Words" → Add spelling list (e.g., "ecosystem vocabulary") for targeted practice.', icon: ListPlus }
                ].map((step) => (
                  <div key={step.step} className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col md:flex-row items-center gap-8 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-full bg-[#e61e7d] text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-pink-500/20 shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1 text-center md:text-left">
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
                    <p className="text-yellow-100/70">"Run a 3-day reading fluency experiment with 5 students."</p>
                  </div>
                </div>
                <div className="flex gap-4 relative z-10">
                  <div className="bg-yellow-400/20 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-yellow-400 text-sm font-bold">
                    <Users size={16} />
                    5 Students
                  </div>
                  <div className="bg-yellow-400/20 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-yellow-400 text-sm font-bold">
                    <Clock size={16} />
                    3 Days
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Steps to Complete</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-15 h-10 rounded-xl bg-blue-600/40 flex items-center justify-center text-blue-200 font-bold">Day 1</div>
                      <h4 className="font-bold">Baseline Assessment</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-100/80">
                      <li className="flex gap-2"><CheckCircle2 className="text-blue-400 shrink-0" size={16} /> Have each student read "The Missing Pencil" (Level 2)</li>
                      <li className="flex gap-2"><CheckCircle2 className="text-blue-400 shrink-0" size={16} /> Record initial WPM/accuracy for each student</li>
                    </ul>
                  </div>

                  <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-18 h-10 rounded-xl bg-pink-600/40 flex items-center justify-center text-pink-200 font-bold">Days 1-3</div>
                      <h4 className="font-bold">Intervention</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-100/80">
                      <li className="flex gap-2"><CheckCircle2 className="text-pink-400 shrink-0" size={16} /> Assign 15 mins/day of Read Along practice</li>
                      <li className="flex gap-2"><CheckCircle2 className="text-pink-400 shrink-0" size={16} /> Day 1: App-selected story</li>
                      <li className="flex gap-2"><CheckCircle2 className="text-pink-400 shrink-0" size={16} /> Day 2: Custom word list (science terms)</li>
                      <li className="flex gap-2"><CheckCircle2 className="text-pink-400 shrink-0" size={16} /> Day 3: Student choice from library</li>
                    </ul>
                  </div>

                  <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-15 h-10 rounded-xl bg-green-600/40 flex items-center justify-center text-green-200 font-bold">Day 3</div>
                      <h4 className="font-bold">Analyze Results</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-100/80">
                      <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" size={16} /> Export progress reports from app</li>
                      <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" size={16} /> Compare Day 1 vs. Day 3 metrics</li>
                      <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" size={16} /> Identify students with 10% accuracy improvement</li>
                    </ul>
                  </div>

                  <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-15 h-10 rounded-xl bg-orange-600/40 flex items-center justify-center text-orange-200 font-bold">Final</div>
                      <h4 className="font-bold">Reflection</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-100/80">
                      <li className="flex gap-2"><CheckCircle2 className="text-orange-400 shrink-0" size={16} /> Screenshot one student's progress graph</li>
                      <li className="flex gap-2"><CheckCircle2 className="text-orange-400 shrink-0" size={16} /> Share with #AIReadAlongChallenge</li>
                      <li className="flex gap-2"><CheckCircle2 className="text-orange-400 shrink-0" size={16} /> Post insight: "Diya helped [student] reduce pronunciation errors by __% in 3 days!"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 border border-purple-400/20 rounded-3xl p-8 space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <TrendingUp size={24} className="text-green-400" /> Expected Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <p className="text-3xl font-black text-blue-400 mb-1">+10-15%</p>
                    <p className="text-xs font-bold text-purple-200 uppercase tracking-widest">Accuracy</p>
                    <p className="text-[10px] text-purple-300 mt-2">Pronunciation precision increases</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <p className="text-3xl font-black text-pink-400 mb-1">+5-10</p>
                    <p className="text-xs font-bold text-purple-200 uppercase tracking-widest">WPM</p>
                    <p className="text-[10px] text-purple-300 mt-2">Reading speed improvement</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <p className="text-3xl font-black text-green-400 mb-1">95%+</p>
                    <p className="text-xs font-bold text-purple-200 uppercase tracking-widest">Engagement</p>
                    <p className="text-[10px] text-purple-300 mt-2">Students motivated by badges</p>
                  </div>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-xl flex items-center gap-3">
                  <FileText className="text-blue-400" size={18} />
                  <p className="text-xs text-blue-200"><strong>Pro Tip:</strong> Export CSV reports to share data-driven results with parents and administrators.</p>
                </div>
              </div>

              <div className="pt-10 space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={32} /> Pro Tips for Mastery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#4b2475] p-8 rounded-3xl border border-purple-400/20 group hover:border-pink-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/30 flex items-center justify-center text-pink-300 mb-4">
                      <Globe size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-purple-100/90">
                      <span className="font-bold text-white block mb-1">Differentiate:</span>
                      Assign native language stories to build confidence before switching to English.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-3xl border border-purple-400/20 group hover:border-blue-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center text-blue-300 mb-4">
                      <Rocket size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-purple-100/90">
                      <span className="font-bold text-white block mb-1">Pair with Homework:</span>
                      Send app links to parents for home practice. No login needed!
                    </p>
                  </div>

                  <div className="bg-[#4b2475] p-8 rounded-3xl border border-purple-400/20 group hover:border-green-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-green-600/30 flex items-center justify-center text-green-300 mb-4">
                      <Mic size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-purple-100/90">
                      <span className="font-bold text-white block mb-1">Creative Use:</span>
                      Have students record AI-assisted reading → replay to self-assess fluency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#4b2475]/40 rounded-3xl p-10 border border-purple-400/20 space-y-8">
                <h3 className="text-2xl font-bold text-center">Why Diya (AI Reading Buddy) Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: 1, title: 'Real-Time Feedback', content: 'Highlights mispronounced words instantly – no waiting for teacher review.', icon: Zap },
                    { id: 2, title: 'Unbiased Support', content: 'Consistent, patient corrections without judgment – builds confidence.', icon: ShieldCheck },
                    { id: 3, title: 'Certified Learning', content: 'Stars and badges create a positive motivation loop for practice.', icon: Award },
                    { id: 4, title: 'Data-Driven Insights', content: 'WPM and accuracy metrics help teachers target interventions.', icon: BarChart3 }
                  ].map((item) => (
                    <div key={item.id} className="bg-white/5 p-6 rounded-2xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-400 shrink-0">
                        {item.id}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-purple-100/70">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900/30 rounded-3xl p-8 border border-blue-400/20 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 bg-blue-600/40 rounded-2xl flex items-center justify-center text-blue-200 shrink-0">
                  <Globe size={40} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold mb-2">500+ Leveled Stories</h4>
                  <p className="text-blue-100/70 mb-4 text-sm">Available in multiple languages including English, Hindi, Spanish, and more. Perfect for diverse classrooms and ESL students.</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['English', 'Spanish', 'Hindi', 'Urdu', 'Marathi', 'Bengali'].map(lang => (
                      <span key={lang} className="px-3 py-1 bg-blue-600/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-300 border border-blue-400/10">{lang}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/20 rounded-3xl p-8 border border-orange-400/20 flex items-center gap-6">
                <WifiOff className="text-orange-400 shrink-0" size={24} />
                <div className="text-sm">
                  <p className="font-bold text-orange-200">Offline Access Available</p>
                  <p className="text-orange-100/60">After initial download, students can practice without internet connection – perfect for schools with limited connectivity or home practice.</p>
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
              "Read Along turns every tablet into a patient literacy tutor."
            </h2>
            <p className="text-pink-100 font-medium">Share your experiment results with #AIReadAlongChallenge!</p>
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
          Tomorrow's Preview: Day 19: Curipod – Design interactive polls and exit tickets that analyze student responses with AI
        </p>

      </div>
    </div>
  );
};

export default ReadAlongDay18;
