import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  FileText,
  MessageSquare,
  Target,
  Trophy,
  ChevronRight,
  Brain,
  Zap,
  Users,
  BarChart2,
  Layers,
  PlayCircle,
  Settings,
  BookOpen
} from 'lucide-react';

const QuizizzDay11 = ({ onNext }) => {
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-700 to-purple-700 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="absolute -right-0 transform -rotate-15 top-5 opacity-16 font-bold text-9xl tracking-tighter whitespace-nowrap select-none">
            Quizizz
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-purple-300" />
              Day 11 • Quiz & Assessment Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Quizizz (AI Mode) Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Practice, Practice with AI-powered Quiz and assessments
            </p>
          </div>
        </div>

        {/* What is Quizizz? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is Quizizz (AI Mode)?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Quizizz is a gamified assessment platform that now features a powerful AI Mode. Teachers can instantly generate quizzes from any topic, document, or standard — and the AI adapts questions to each student's level in real time, making formative assessment both fun and deeply personalized.
            </p>

            <button
              onClick={() => setIsWhyOpen(!isWhyOpen)}
              className="inline-flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 border border-purple-100 group"
            >
              Why Educators Need It
              <ChevronRight size={18} className={`transition-transform duration-300 ${isWhyOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>

            <div className={`mt-6 transition-all duration-500 ease-in-out overflow-hidden ${isWhyOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="space-y-4 pb-2">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Brain className="text-purple-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">AI Quiz Generation</strong>
                    <span className="text-slate-600 text-sm">Generate a full quiz from any topic, URL, or uploaded document in seconds — no manual question writing needed.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-purple-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Adaptive Learning</strong>
                    <span className="text-slate-600 text-sm">AI adjusts question difficulty in real time based on each student's performance, keeping every learner challenged.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="text-purple-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Gamified Engagement</strong>
                    <span className="text-slate-600 text-sm">Leaderboards, power-ups, and memes keep students motivated and actively participating throughout every quiz.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BarChart2 className="text-purple-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Instant Data Insights</strong>
                    <span className="text-slate-600 text-sm">Post-quiz reports pinpoint exactly which students need reteaching on which specific concepts.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-white rounded-2xl h-80 border border-slate-100 flex items-center justify-center p-8 overflow-hidden relative shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <div className="text-center space-y-3">
                <FileText size={48} className="mx-auto text-purple-200" />
                <p className="text-sm text-slate-300 font-medium">Image coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-purple-300 bg-white overflow-hidden shadow-sm -mt-8">
          <div className="px-6 py-4 bg-purple-50 border-b border-slate-100">
            <p className="text-sm font-bold text-slate-700">Key Features & How to Use Them</p>
            <p className="text-xs text-slate-500 mt-0.5">Use these features to make the most of the platform</p>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-purple-50 border-b border-slate-100">
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Feature</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-2/4">Description / How to Use</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Classroom Effectiveness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Brain size={16} className="text-purple-500 flex-shrink-0" />
                    <span>AI Quiz Builder</span>
                  </div>
                </td>
                <td className="px-6 py-5">Type a topic or paste a document → AI instantly generates a full set of questions with answer choices and explanations</td>
                <td className="px-6 py-5 text-sm">That final assessment ready in under 2 minutes instead of 30</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-purple-500 flex-shrink-0" />
                    <span>Adaptive Mode</span>
                  </div>
                </td>
                <td className="px-6 py-5">Enable "Adaptive" in quiz settings → AI adjusts question difficulty based on each student's live performance</td>
                <td className="px-6 py-5 text-sm">Differentiates automatically — no extra planning needed</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <PlayCircle size={16} className="text-purple-500 flex-shrink-0" />
                    <span>Live Game Mode</span>
                  </div>
                </td>
                <td className="px-6 py-5">Launch a quiz as a live class game — students join with a code and compete on a real-time leaderboard</td>
                <td className="px-6 py-5 text-sm">Dramatically boosts engagement and participation rates</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-purple-500 flex-shrink-0" />
                    <span>Homework Mode</span>
                  </div>
                </td>
                <td className="px-6 py-5">Assign quizzes as homework with a set due date — students complete at their own pace with AI hints available</td>
                <td className="px-6 py-5 text-sm">Extends learning beyond the classroom with self-paced review</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <BarChart2 size={16} className="text-purple-500 flex-shrink-0" />
                    <span>Insights Report</span>
                  </div>
                </td>
                <td className="px-6 py-5">After a quiz, open the detailed report → View scores per student and per question with highlighted weak areas</td>
                <td className="px-6 py-5 text-sm">Instantly know which concept needs reteaching</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Settings size={16} className="text-purple-500 flex-shrink-0" />
                    <span>Improvement Guide</span>
                  </div>
                </td>
                <td className="px-6 py-5">AI generates a personalized study guide for each student based on the questions they got wrong</td>
                <td className="px-6 py-5 text-sm">Personalizes remediation without extra teacher workload</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Using the following Quizizz's structured approach to get started.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="md:col-span-5 -mt-6">
            <div className="bg-slate-50 rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center p-4">
              <div className="text-center space-y-3">
                <FileText size={48} className="mx-auto text-purple-200" />
                <p className="text-sm text-slate-300 font-medium">Image coming soon</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 relative -mt-6">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 z-0 hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Sign Up</h3>
                <p className="text-sm text-slate-600">Go to the <a href="https://quizizz.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">Quizizz website</a>. Click "Sign Up Free" and select "Teacher" as your role.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Create Your First Quiz</h3>
                <p className="text-sm text-slate-600 mb-2">Click "+ Create" → Select "Quiz" → Choose "Create with AI."</p>
                <p className="text-sm text-slate-600 mb-2">Enter your topic (e.g., "Photosynthesis – Grade 8") or paste a reading passage.</p>
                <p className="text-sm text-slate-600 mb-2">Choose question type (Multiple Choice, True/False, Fill-in-the-blank) and click "Generate."</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Host or Assign Homework</h3>
                <p className="text-sm text-slate-600 mb-2">Click <span className="font-bold">"Start Live Quiz"</span> to play as a class game — share the join code with students.</p>
                <p className="text-sm text-slate-600 mb-2">Or click <span className="font-bold">"Assign"</span> to set it as homework with a deadline.</p>
                <p className="text-sm text-slate-600 mb-2">Enable "Adaptive Mode" in settings for AI-adjusted difficulty.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Analyze Results</h3>
                <p className="text-sm text-slate-600 mb-2">Open the quiz report → View class accuracy per question and individual student scores.</p>
                <p className="text-sm text-slate-600 mb-2">Identify the top 3 questions students struggled with most.</p>
                <p className="text-sm text-slate-600 mb-2">Use the AI-generated study guide to assign targeted review to struggling students.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-emerald-400 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE TASK
          </div>

          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Run an AI-generated quiz and<br className="hidden md:block" /> analyze student performance."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Generate a Quiz</h4>
                <p className="text-emerald-100 text-sm">Use Quizizz AI to generate a 10-question quiz on a topic you are currently teaching. Enable Adaptive Mode before launching.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Run It Live</h4>
                <p className="text-emerald-100 text-sm">Host the quiz as a live game in class or assign it as homework to at least 5 students. Let the AI adapt in real time.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Review the Report</h4>
                <p className="text-emerald-100 text-sm">Open the post-quiz insights. Identify the 3 questions with the lowest accuracy. Note which students scored below 60%.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Act on Insights</h4>
                <p className="text-emerald-100 text-sm">Assign the AI-generated study guide to struggling students. Plan a 5-minute reteach targeting the weakest question.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Users size={20} /></div>
              <h3 className="font-bold text-slate-900">Gamified Learning</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-purple-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-purple-300" />
                <p className="text-xs text-purple-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-purple-100 text-xs text-purple-800">
              <p className="text-purple-800 text-sm font-bold">Live Leaderboards</p>
              <p className="text-sm text-slate-800 leading-relaxed max-w-xs mb-4 font-inter italic">
                Students compete in real time, boosting motivation
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><BarChart2 size={20} /></div>
              <h3 className="font-bold text-slate-900">AI Efficiency</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-purple-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-purple-300" />
                <p className="text-xs text-purple-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs mb-4">
              Instant quiz generation from any topic saves hours of manual question writing each week.
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-100 text-xs text-purple-800 font-medium italic">
              Use the insights report to target reteaching exactly where students struggled most.
            </div>
          </div>
        </div>

        {/* Pro Tips & Assessment */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-yellow-600 font-bold mb-6">
            <Trophy size={18} /> Pro Tips for Mastery
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🎮 Engagement Hack:</strong> Run a short 5-question Quizizz as a warm-up to activate prior knowledge before each lesson.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🔄 Re-Quiz Strategy:</strong> After reteaching, reassign the same quiz to show students their improvement — a powerful motivator.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>📊 Data to Action:</strong> Share the class accuracy report with students — seeing the data encourages ownership of their own learning gaps.</p>
            </li>
          </ul>

          <div className="bg-white p-4 rounded-xl text-center border border-yellow-200">
            <p className="text-xs text-yellow-800 font-medium italic">
              "Quizizz turns assessment into an adventure — share your quiz results and insights with #QuizizzChallenge!"
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 transition-colors"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Day 11: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Student must complete quiz to unlock day 12</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-blue-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default QuizizzDay11;
