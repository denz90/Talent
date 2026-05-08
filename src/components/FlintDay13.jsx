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
  BookOpen,
  GraduationCap,
  PenTool
} from 'lucide-react';

const FlintDay13 = ({ onNext }) => {
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-pink-600 to-rose-700 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="absolute -right-0 transform -rotate-15 top-5 opacity-16 font-bold text-9xl tracking-tighter whitespace-nowrap select-none">
            Flint
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-pink-300" />
              Day 13 • Lesson Planning & Support Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Flint Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              AI-powered Lesson Planning & Personalized Student Support
            </p>
          </div>
        </div>

        {/* What is Flint? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is Flint?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Flint is an AI teaching assistant designed to help teachers personalize lesson plans, generate high-quality assignments, and provide students with real-time feedback. It allows educators to automate the heavy lifting of lesson prep while ensuring each student receives the individual attention they need.
            </p>

            <button
              onClick={() => setIsWhyOpen(!isWhyOpen)}
              className="inline-flex items-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-700 px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 border border-pink-100 group"
            >
              Why Educators Need It
              <ChevronRight size={18} className={`transition-transform duration-300 ${isWhyOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>

            <div className={`mt-6 transition-all duration-500 ease-in-out overflow-hidden ${isWhyOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="space-y-4 pb-2">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <PenTool className="text-pink-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Personalized Learning</strong>
                    <span className="text-slate-600 text-sm">Tailor content to meet the diverse needs of every student in your classroom.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="text-pink-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Instant Feedback</strong>
                    <span className="text-slate-600 text-sm">Provide students with immediate suggestions as they work through their assignments.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Brain className="text-pink-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">AI Co-Planner</strong>
                    <span className="text-slate-600 text-sm">Generate comprehensive lesson plans and curriculum maps in seconds.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BarChart2 className="text-pink-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Actionable Data</strong>
                    <span className="text-slate-600 text-sm">Identify trends and student performance at a glance with the progress dashboard.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-white rounded-2xl h-80 border border-slate-100 flex items-center justify-center p-8 overflow-hidden relative shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <div className="text-center space-y-3">
                <PenTool size={48} className="mx-auto text-pink-200" />
                <p className="text-sm text-slate-300 font-medium">Image coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-pink-300 bg-white overflow-hidden shadow-sm -mt-8">
          <div className="px-6 py-4 bg-pink-50 border-b border-slate-100">
            <p className="text-sm font-bold text-slate-700">Key Features & How to Use Them</p>
            <p className="text-xs text-slate-500 mt-0.5">Use these features to make the most of the platform</p>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-pink-50 border-b border-slate-100">
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Feature</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-2/4">Description / How to Use</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Classroom Effectiveness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Brain size={16} className="text-pink-500 flex-shrink-0" />
                    <span>AI Lesson Planner</span>
                  </div>
                </td>
                <td className="px-6 py-5">Input your objectives and topic → AI co-creates a multi-phase lesson plan including hooks and wrap-ups</td>
                <td className="px-6 py-5 text-sm">Ensures every lesson is structured and engaging</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-pink-500 flex-shrink-0" />
                    <span>Assignment Generator</span>
                  </div>
                </td>
                <td className="px-6 py-5">Select grade level and subject → AI generates customized assignments that align with your lesson goals</td>
                <td className="px-6 py-5 text-sm">Creates differentiated work for mixed-ability classes</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-pink-500 flex-shrink-0" />
                    <span>Real-time Feedback</span>
                  </div>
                </td>
                <td className="px-6 py-5">Enable live AI assistance on assignments → Students get immediate hints and corrections as they type</td>
                <td className="px-6 py-5 text-sm">Reduces student frustration and accelerates learning</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <BarChart2 size={16} className="text-pink-500 flex-shrink-0" />
                    <span>Progress Dashboard</span>
                  </div>
                </td>
                <td className="px-6 py-5">Open the "Class View" → Track student completion rates and common stumbling points in real-time</td>
                <td className="px-6 py-5 text-sm">Enables data-driven remediation and support</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Using the following Flint's structured approach to get started.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="md:col-span-5 -mt-6">
            <div className="bg-slate-50 rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center p-4">
              <div className="text-center space-y-3">
                <FileText size={48} className="mx-auto text-pink-200" />
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
                <p className="text-sm text-slate-600">Go to the <a href="https://www.flint.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600">Flint website</a>. Click "Get Started" and select your teacher profile.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Set Up Your Classroom</h3>
                <p className="text-sm text-slate-600 mb-2">Import your students from Google Classroom or enter them manually.</p>
                <p className="text-sm text-slate-600 mb-2">Select your grade level and preferred teaching standards.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Generate Your First AI Lesson</h3>
                <p className="text-sm text-slate-600 mb-2">Click "New Lesson Plan" → Enter your topic and standards.</p>
                <p className="text-sm text-slate-600 mb-2">Review and edit the AI-generated outline until it fits your needs.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Create an Assignment</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Generate Assignment" → Select the lesson plan you just created.</p>
                <p className="text-sm text-slate-600 mb-2">Choose your preferred output (e.g. Worksheet, Quiz, or Project Brief).</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Review Student Work</h3>
                <p className="text-sm text-slate-600 mb-2">Open the "Student Submissions" tab → View student work alongside AI-generated insights and feedback logs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-pink-900 via-rose-800 to-red-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-pink-400 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE TASK
          </div>

          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Design a personalized lesson <br className="hidden md:block" /> and assignment for a mixed-<br className="hidden md:block" />ability classroom."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-pink-500/30 border border-pink-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-pink-400/50 group-hover:border-pink-300 group-hover:text-pink-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Generate a Lesson Plan</h4>
                <p className="text-pink-100 text-sm">Select a challenging topic and ask Flint to generate a multi-phase lesson plan including differentiated activities.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-pink-500/30 border border-pink-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-pink-400/50 group-hover:border-pink-300 group-hover:text-pink-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Create Differentiated Work</h4>
                <p className="text-pink-100 text-sm">Generate two versions of an assignment (e.g. Standard and Advanced) using the AI generator based on your lesson plan.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-pink-500/30 border border-pink-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-pink-400/50 group-hover:border-pink-300 group-hover:text-pink-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Analyze AI Feedback</h4>
                <p className="text-pink-100 text-sm">Review the AI's real-time feedback on a sample student response to see how it handles student errors and misconceptions.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-pink-500/30 border border-pink-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-pink-400/50 group-hover:border-pink-300 group-hover:text-pink-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Share Your Progress</h4>
                <p className="text-pink-100 text-sm">Export your lesson plan and share your experience with colleagues using #FlintChallenge.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-pink-100 text-pink-600 rounded-lg"><PenTool size={20} /></div>
              <h3 className="font-bold text-slate-900">Personalized Support</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-pink-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-pink-300" />
                <p className="text-xs text-pink-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-pink-100 text-xs text-pink-800">
              <p className="text-pink-800 text-sm font-bold">Scaffold Learning</p>
              <p className="text-sm text-slate-800 leading-relaxed max-w-xs mb-4 font-inter italic">
                AI provides tailored support to every student based on their unique needs.
              </p>
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-pink-100 text-pink-600 rounded-lg"><Zap size={20} /></div>
              <h3 className="font-bold text-slate-900">AI Planning Prowess</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-pink-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-pink-300" />
                <p className="text-xs text-pink-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs mb-4">
              Co-create high-quality lesson plans aligned with standards in minutes.
            </p>
            <div className="bg-white rounded-lg p-3 border border-pink-100 text-xs text-pink-800 font-medium italic">
              Use the progress dashboard to make data-driven instructional decisions.
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
              <p className="text-sm text-slate-700"><strong>🎯 Differentiated Assignments:</strong> Use Flint's AI to generate multiple versions of an assignment to cater to different skill levels.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🔄 Adaptive Feedback:</strong> Enable the "Scaffold Mode" for students who struggle to provide them with more granular support.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🤝 Collaborative Planning:</strong> Share your AI-generated lesson plans with colleagues to streamline curriculum development.</p>
            </li>
          </ul>

          <div className="bg-white p-4 rounded-xl text-center border border-yellow-200">
            <p className="text-xs text-yellow-800 font-medium italic">
              "Flint acts as your personal AI teaching assistant, helping you bridge the gap for every student in your classroom."
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
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Day 13: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Student must complete quiz to unlock day 14</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-blue-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default FlintDay13;
