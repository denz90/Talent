import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  BookOpen,
  FileText,
  Layers,
  MessageSquare,
  Globe,
  Settings,
  Target,
  Trophy,
  ChevronRight,
  Brain,
  Zap,
  User,
  Mic,
  ListChecks,
  ChartColumnIncreasing,
  VideoIcon,
  GraduationCap
} from 'lucide-react';

const SnorklDay9 = ({ onNext }) => {
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-violet-700 to-violet-700 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="absolute -right-0 transform -rotate-15 top-5 opacity-16 font-bold text-9xl tracking-tighter whitespace-nowrap select-none">
            Snorkl
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-blue-300" />
              Day 9 • Video Content Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              What is Snorkl?
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Create Engaging Video Lessons & Personalized Content with AI
            </p>
          </div>
        </div>

        {/* What is Snorkl? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is Snorkl?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
             Snorkl is an AI-driven platform that captures and analyzes student verbal explanations (via audio/video) to provide real-time feedback. It helps educators assess understanding, identify misconceptions, and personalize instruction through student-generated "think-alouds."
            </p>

            <button 
              onClick={() => setIsWhyOpen(!isWhyOpen)}
              className="inline-flex items-center gap-2 bg-violet-50 hover:bg-violet-100 text-violet-700 px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 border border-violet-100 group"
            >
              Why Educators Need It
              <ChevronRight size={18} className={`transition-transform duration-300 ${isWhyOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>

            <div className={`mt-6 transition-all duration-500 ease-in-out overflow-hidden ${isWhyOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="space-y-4 pb-2">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Brain className="text-violet-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Deepens Metacognition</strong>
                    <span className="text-slate-600 text-sm">Students articulate their thought processes verbally, reinforcing their own understanding.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-violet-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Identifies Learning Gaps</strong>
                    <span className="text-slate-600 text-sm">AI pinpoints specific misconceptions in spoken responses that might be missed in writing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="text-violet-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Automated Transcription</strong>
                    <span className="text-slate-600 text-sm">Automatically transcribes and analyzes verbal submissions to save hours of grading time.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="text-violet-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Inclusive Assessment</strong>
                    <span className="text-slate-600 text-sm">Supports ELL and neurodiverse learners by reducing the heavy reliance on written output.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl h-100 border border-white flex items-center justify-center p-8 overflow-hidden relative">
            <img src="/Teacher student-rafiki-2 1.png" alt="workspace" className="w-full h-full object-cover"/>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-300 bg-white overflow-hidden shadow-sm -mt-8">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-violet-50 border-b border-slate-100">
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Feature</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-2/4">How to Use</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Benefit for Teachers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Mic size={16} className="text-violet-500 flex-shrink-0" />
                    <span>Verbal Submissions</span>
                  </div>
                </td>
                <td className="px-6 py-5">Students record audio/video via browser or mobile app</td>
                <td className="px-6 py-5 text-sm">Assesses understanding beyond simple written work</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Brain size={16} className="text-violet-500 flex-shrink-0" />
                    <span>AI Analysis Engine</span>
                  </div>
                </td>
                <td className="px-6 py-5">Snorkl analyzes transcripts for keywords and clarity automatically</td>
                <td className="px-6 py-5 text-sm">Instant insight into student thinking patterns and logic</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <ListChecks size={16} className="text-violet-500 flex-shrink-0" />
                    <span>Rubric Builder</span>
                  </div>
                </td>
                <td className="px-6 py-5">Create custom criteria for the AI to evaluate student responses</td>
                <td className="px-6 py-5 text-sm">Aligns feedback directly to specific learning objectives</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <ChartColumnIncreasing size={16} className="text-violet-500 flex-shrink-0" />
                    <span>Class Dashboard</span>
                  </div>
                </td>
                <td className="px-6 py-5">View all submissions with AI highlights and emerging trends</td>
                <td className="px-6 py-5 text-sm">Identify class-wide misconceptions in record time</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-violet-500 flex-shrink-0" />
                    <span>Auto-Transcription</span>
                  </div>
                </td>
                <td className="px-6 py-5">Verbal responses are turned into text for easier review</td>
                <td className="px-6 py-5 text-sm">Saves hours of manual listening and note-taking</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={16} className="text-violet-500 flex-shrink-0" />
                    <span>Feedback Loops</span>
                  </div>
                </td>
                <td className="px-6 py-5">Send AI-generated or manual feedback back to student accounts</td>
                <td className="px-6 py-5 text-sm">Personalizes the learning journey at scale</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Create your first interactive lesson using Gemini's structured approach.
            </p>
          </div>

          <div className="md:col-span-5 -mt-6">
            <div className="bg-slate-50 rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center p-4">
              <img src="/Teacher student-cuate.svg" alt="Workspace" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 relative -mt-6">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 z-0 hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Sign Up</h3>
                <p className="text-sm text-slate-600">Go to the <a href="https://www.snorkl.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">Snorkl website</a>.Click "Try Free" (educator plan available).</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Create Your First Activity</h3>
                <p className="text-sm text-slate-600 mb-2">Click "+ New Activity" → Name it (e.g., "Explain the Water Cycle").</p>
                <p className="text-sm text-slate-600 mb-2">Add a prompt: "Record a 1-minute explanation of how evaporation works."</p>
                <p className="text-sm text-slate-600 mb-2">Attach resources (optional): Link a diagram or video.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Assign to Students</h3>
                <p className="text-sm text-slate-600 mb-2">Share the link with students.</p>
                <p className="text-sm text-slate-600 mb-2">Students click <span className="font-bold">"Record"</span> → Allow microphone access → Submit responses.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Analyze AI Feedback</h3>
                <p className="text-sm text-slate-600 mb-2">Open the Class Dashboard → Click a submission.</p>
                <p className="text-sm text-slate-600 mb-2">Transcript: AI-highlighted key terms/misconceptions.</p>
                <p className="text-sm text-slate-600 mb-2">Rubric Score: Auto-graded against your criteria.</p>
                <p className="text-sm text-slate-600 mb-2">Custom Feedback: Add voice notes or text comments.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Share Insights</h3>
                <p className="text-sm text-slate-600 mb-2">Export reports to PDF or share individual feedback links with students.</p>
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
            "Use Snorkl to assess <br className="hidden md:block" />student verbal <br className="hidden md:block" /> explanations of a core<br className="hidden md:block" /> concept."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Set Up</h4>
                <p className="text-emerald-100 text-sm">Create a Snorkl activity asking: "Explain [concept, e.g., photosynthesis] in your own words." Set rubric criteria: "Accuracy," "Use of Vocabulary," "Clarity."</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Collect Responses</h4>
                <p className="text-emerald-100 text-sm">Have 5+ students submit recordings (1-2 mins each).</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Analyze & Reflect</h4>
                <p className="text-emerald-100 text-sm">Screenshot one AI-highlighted transcript showing a misconception. Note 2 patterns from the Class Dashboard (e.g., 40% missed "chlorophyll").</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Act on Feedback</h4>
                <p className="text-emerald-100 text-sm">Design a 5-minute reteaching activity based on the gaps found.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-violet-100 text-violet-600 rounded-lg"><MessageSquare size={20} /></div>
              <h3 className="font-bold text-slate-900">Metacognitive Power</h3>
            </div>
            <img src="/Image (Differentiated classroom materials).svg" alt="workspace" className="w-full h-full object-cover"/>
            <div className="bg-white rounded-lg p-3 border border-sky-100 text-xs text-sky-800">
            <p className="text-blue-800 text-sm font-bold">Verbal Think-Alouds</p>
            <p className="text-sm text-slate-800 leading-relaxed max-w-xs mb-4 font-inter italic">
              Students explain their reasoning process
            </p>
          </div>
          </div>

          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
             <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-violet-100 text-violet-600 rounded-lg"><VideoIcon size={20} /></div>
              <h3 className="font-bold text-slate-900">Interactive Elements</h3>
            </div>
            <img src="/Image (AI technology in education).svg" alt="workspace" className="w-full h-full object-cover"/>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs mb-4">
              Using markdown allows for easy formatting and pacing for engaging video lessons.
            </p>
             <div className="bg-white rounded-lg p-3 border border-blue-100 text-xs text-blue-800 font-medium italic">
              Use bold text for emphasis and section headers for clear organization.
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
              <p className="text-sm text-slate-700"><strong>💡 ELL Strategy:</strong> Pair Snorkl with sentence stems (e.g., "First, ___, then ___").</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🔄 Flip Feedback:</strong> Have students review their own transcripts to self-assess.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🤝 PLC Hack:</strong> Share anonymized trends with colleagues to align interventions.</p>
            </li>
          </ul>

          <div className="bg-white p-4 rounded-xl text-center border border-yellow-200">
            <p className="text-xs text-yellow-800 font-medium italic">
              "Snorkl turns passive learners into active explainers. Share your student highlights with #SnorklChallenge!"
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
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Day 9: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Student must complete quiz to unlock day 10</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-blue-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default SnorklDay9;
