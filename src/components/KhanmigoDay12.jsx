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
  GraduationCap
} from 'lucide-react';

const KhanmigoDay12 = ({ onNext }) => {
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-violet-700 to-indigo-800 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="absolute -right-0 transform -rotate-15 top-5 opacity-16 font-bold text-9xl tracking-tighter whitespace-nowrap select-none">
            Khanmigo
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-violet-300" />
              Day 12 • AI Tutoring & Planning Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Khanmigo Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Personalized AI Tutoring & Lesson Planning
            </p>
          </div>
        </div>

        {/* What is Khanmigo? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is Khanmigo?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Khanmigo is an AI-powered tutoring and teaching assistant from Khan Academy. It provides personalized tutoring for students without giving away answers, while helping teachers automate lesson planning, rubric creation, and student progress analysis.
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
                    <strong className="text-slate-900 block">Saves Planning Time</strong>
                    <span className="text-slate-600 text-sm">Co-create lesson plans, rubrics, and hooks in minutes instead of hours.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-violet-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Tutor, Don't Teller</strong>
                    <span className="text-slate-600 text-sm">AI guides students through problems with hints and scaffolding rather than answers.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="text-violet-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Engaging Activities</strong>
                    <span className="text-slate-600 text-sm">Access unique activities like debating an AI or chatting with historical figures.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BarChart2 className="text-violet-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Data-Driven Insights</strong>
                    <span className="text-slate-600 text-sm">Instantly see student progress and identify who needs extra help.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-white rounded-2xl h-80 border border-slate-100 flex items-center justify-center p-8 overflow-hidden relative shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <div className="text-center space-y-3">
                <GraduationCap size={48} className="mx-auto text-violet-200" />
                <p className="text-sm text-slate-300 font-medium">Image coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-300 bg-white overflow-hidden shadow-sm -mt-8">
          <div className="px-6 py-4 bg-violet-50 border-b border-slate-100">
            <p className="text-sm font-bold text-slate-700">Key Features & How to Use Them</p>
            <p className="text-xs text-slate-500 mt-0.5">Use these features to make the most of the platform</p>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-violet-50 border-b border-slate-100">
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Feature</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-2/4">Description / How to Use</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Classroom Effectiveness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-violet-500 flex-shrink-0" />
                    <span>AI Tutor</span>
                  </div>
                </td>
                <td className="px-6 py-5">Enable student tutoring mode → AI guides students through math, science, or humanities problems without giving answers</td>
                <td className="px-6 py-5 text-sm">Provides 1:1 support for every student simultaneously</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-violet-500 flex-shrink-0" />
                    <span>Lesson Planner</span>
                  </div>
                </td>
                <td className="px-6 py-5">Select a standard or topic → AI co-creates a detailed lesson plan including hooks, activities, and rubrics</td>
                <td className="px-6 py-5 text-sm">Reduces prep time from hours to minutes</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <BarChart2 size={16} className="text-violet-500 flex-shrink-0" />
                    <span>Rubric Generator</span>
                  </div>
                </td>
                <td className="px-6 py-5">Upload an assignment prompt → AI generates a multi-dimensional rubric aligned to your learning goals</td>
                <td className="px-6 py-5 text-sm">Ensures grading consistency and transparency</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Settings size={16} className="text-violet-500 flex-shrink-0" />
                    <span>Class Insights</span>
                  </div>
                </td>
                <td className="px-6 py-5">Open the teacher dashboard → View real-time alerts on student misconceptions or areas where they are stuck</td>
                <td className="px-6 py-5 text-sm">Allows for timely and targeted interventions</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Using the following Khanmigo's structured approach to get started.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="md:col-span-5 -mt-6">
            <div className="bg-slate-50 rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center p-4">
              <div className="text-center space-y-3">
                <FileText size={48} className="mx-auto text-violet-200" />
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
                <h3 className="font-bold text-slate-900 mb-1">Access Khanmigo</h3>
                <p className="text-sm text-slate-600">Go to the <a href="https://www.khanacademy.org/khanmigo" target="_blank" rel="noopener noreferrer" className="text-blue-600">Khanmigo website</a>. Sign in with your teacher account (free for many districts).</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Set Up Your Classroom</h3>
                <p className="text-sm text-slate-600 mb-2">Sync your student roster from Google Classroom or Clever.</p>
                <p className="text-sm text-slate-600 mb-2">Select the subjects you teach to personalize your AI assistant experience.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Personalized Lesson Plan</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Lesson Planner" → Enter a standard (e.g. "CCSS.MATH.CONTENT.7.RP.A.3") or topic.</p>
                <p className="text-sm text-slate-600 mb-2">Co-create an engaging warm-up, core activity, and exit ticket with the AI.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Assign AI Tutoring</h3>
                <p className="text-sm text-slate-600 mb-2">Assign a topic or skill to students.</p>
                <p className="text-sm text-slate-600 mb-2">Enable "Khanmigo Tutoring" so students can ask for help as they work.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Analyze Feedback</h3>
                <p className="text-sm text-slate-600 mb-2">Review "Teacher Insights" → See which students are stuck and what they are struggling with.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-violet-900 via-indigo-800 to-purple-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-violet-400 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE TASK
          </div>

          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Use Khanmigo to create a <br className="hidden md:block" /> debate activity and assess <br className="hidden md:block" /> student understanding."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-violet-500/30 border border-violet-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-violet-400/50 group-hover:border-violet-300 group-hover:text-violet-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Generate a Debate</h4>
                <p className="text-violet-100 text-sm">Select a topic (e.g. "Nuclear Energy") and ask Khanmigo to set up a debate activity for your class.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-violet-500/30 border border-violet-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-violet-400/50 group-hover:border-violet-300 group-hover:text-violet-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Run the Activity</h4>
                <p className="text-violet-100 text-sm">Have students participate in the AI-led debate. Monitor the live chat to see how they defend their arguments.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-violet-500/30 border border-violet-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-violet-400/50 group-hover:border-violet-300 group-hover:text-violet-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Assign Tutoring</h4>
                <p className="text-violet-100 text-sm">Select a student who struggled in the debate and assign a specific tutoring module to help them catch up.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-violet-500/30 border border-violet-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-violet-400/50 group-hover:border-violet-300 group-hover:text-violet-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Review Insights</h4>
                <p className="text-violet-100 text-sm">Check the Teacher Dashboard to see the overall class performance and identify common misconceptions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-violet-100 text-violet-600 rounded-lg"><GraduationCap size={20} /></div>
              <h3 className="font-bold text-slate-900">Personalized Tutoring</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-violet-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-violet-300" />
                <p className="text-xs text-violet-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-violet-100 text-xs text-violet-800">
              <p className="text-violet-800 text-sm font-bold">1:1 Support</p>
              <p className="text-sm text-slate-800 leading-relaxed max-w-xs mb-4 font-inter italic">
                Every student has a personalized AI tutor at their side.
              </p>
            </div>
          </div>

          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-violet-100 text-violet-600 rounded-lg"><Zap size={20} /></div>
              <h3 className="font-bold text-slate-900">AI Planning Power</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-violet-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-violet-300" />
                <p className="text-xs text-violet-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs mb-4">
              Instantly generate high-quality lesson plans aligned to standards.
            </p>
            <div className="bg-white rounded-lg p-3 border border-violet-100 text-xs text-violet-800 font-medium italic">
              Use the Class Insights dashboard to make data-informed teaching decisions.
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
              <p className="text-sm text-slate-700"><strong>🛡️ Scaffolding Mastery:</strong> Use the "tutor mode" to help students work through difficult problems step-by-step.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🔌 Seamless Integration:</strong> Connect Khanmigo with Google Classroom for automatic roster and assignment sync.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🚨 Student Alerts:</strong> Set up notifications to be alerted when students are stuck or exhibiting common misconceptions.</p>
            </li>
          </ul>

          <div className="bg-white p-4 rounded-xl text-center border border-yellow-200">
            <p className="text-xs text-yellow-800 font-medium italic">
              "Khanmigo acts as your personal teaching assistant and every student's private tutor — elevate your classroom today!"
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
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Day 12: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Student must complete quiz to unlock day 13</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-blue-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default KhanmigoDay12;
