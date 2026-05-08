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
  Star,
  AlignLeft,
  BarChart2,
  PenLine,
  RefreshCcw
} from 'lucide-react';

const EssayGraderDay10 = ({ onNext }) => {
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-700 to-emerald-700 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="absolute -right-0 transform -rotate-15 top-5 opacity-16 font-bold text-9xl tracking-tighter whitespace-nowrap select-none">
            EssayGrade
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-emerald-300" />
              Day 10 • AI Writing Feedback Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              What is EssayGrader.ai?
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              A tool to instantly Grade and provide Instant AI-Powered Feedback
            </p>
          </div>
        </div>

        {/* What is EssayGrader? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is EssayGrader.ai?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              EssayGrader.ai is an AI-powered platform that allows teachers to grade and provide detailed feedback on student essays in seconds. It analyzes writing structure, grammar, argument quality, and more — reducing grading time dramatically while improving feedback consistency.
            </p>

            <button
              onClick={() => setIsWhyOpen(!isWhyOpen)}
              className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 border border-emerald-100 group"
            >
              Why Educators Need It
              <ChevronRight size={18} className={`transition-transform duration-300 ${isWhyOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>

            <div className={`mt-6 transition-all duration-500 ease-in-out overflow-hidden ${isWhyOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="space-y-4 pb-2">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Brain className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Saves Hours of Grading</strong>
                    <span className="text-slate-600 text-sm">Teachers can grade up to 30 essays in minutes instead of hours, freeing time for instruction.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Consistent Feedback</strong>
                    <span className="text-slate-600 text-sm">AI applies the same rubric criteria to every submission, eliminating grading bias and fatigue.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Instant Student Feedback</strong>
                    <span className="text-slate-600 text-sm">Students receive actionable feedback immediately, allowing them to revise and improve faster.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Custom Rubric Support</strong>
                    <span className="text-slate-600 text-sm">Upload your own rubric so the AI grades exactly according to your course standards and expectations.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-white rounded-2xl h-80 border border-slate-100 flex items-center justify-center p-8 overflow-hidden relative shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              {/* User will add image here */}
              <div className="text-center space-y-3">
                <FileText size={48} className="mx-auto text-emerald-200" />
                <p className="text-sm text-slate-300 font-medium">Image coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-emerald-300 bg-white overflow-hidden shadow-sm -mt-8">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-emerald-50 border-b border-slate-100">
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Feature</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-2/4">How to Use</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Benefit for Teachers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <AlignLeft size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Essay Upload</span>
                  </div>
                </td>
                <td className="px-6 py-5">Paste or upload student essays directly into the platform</td>
                <td className="px-6 py-5 text-sm">Handles any format — typed or copy-pasted text</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Brain size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>AI Grading Engine</span>
                  </div>
                </td>
                <td className="px-6 py-5">AI evaluates structure, clarity, grammar, and argument quality automatically</td>
                <td className="px-6 py-5 text-sm">Instant scores with detailed explanations per criterion</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <PenLine size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Custom Rubric</span>
                  </div>
                </td>
                <td className="px-6 py-5">Create and upload your own rubric for the AI to grade against</td>
                <td className="px-6 py-5 text-sm">Aligns grading directly to your course learning objectives</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <BarChart2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Batch Grading</span>
                  </div>
                </td>
                <td className="px-6 py-5">Upload multiple essays at once for simultaneous AI evaluation</td>
                <td className="px-6 py-5 text-sm">Grade an entire class in minutes, not hours</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <RefreshCcw size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Revision Feedback</span>
                  </div>
                </td>
                <td className="px-6 py-5">Students can resubmit revised essays and get updated feedback instantly</td>
                <td className="px-6 py-5 text-sm">Encourages a growth mindset and iterative writing improvement</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Inline Comments</span>
                  </div>
                </td>
                <td className="px-6 py-5">AI highlights specific sentences and adds targeted improvement suggestions</td>
                <td className="px-6 py-5 text-sm">Gives students precise, actionable feedback on their actual writing</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Start grading smarter with EssayGrader.ai's streamlined approach.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="md:col-span-5 -mt-6">
            <div className="bg-slate-50 rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center p-4">
              <div className="text-center space-y-3">
                <FileText size={48} className="mx-auto text-emerald-200" />
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
                <p className="text-sm text-slate-600">Go to the <a href="https://essaygrader.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600">EssayGrader.ai website</a>. Click "Get Started Free" (educator plan available).</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Set Up Your Rubric</h3>
                <p className="text-sm text-slate-600 mb-2">Click "New Assignment" → Name it (e.g., "Argumentative Essay – Week 5").</p>
                <p className="text-sm text-slate-600 mb-2">Choose from a preset rubric or upload your own criteria (e.g., Thesis, Evidence, Clarity, Grammar).</p>
                <p className="text-sm text-slate-600 mb-2">Set point values for each criterion to match your grading scale.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Submit Essays</h3>
                <p className="text-sm text-slate-600 mb-2">Paste student essay text or upload documents directly.</p>
                <p className="text-sm text-slate-600 mb-2">Click <span className="font-bold">"Grade"</span> → The AI processes and scores the essay in seconds.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Review AI Feedback</h3>
                <p className="text-sm text-slate-600 mb-2">Open the graded essay → View the rubric breakdown and overall score.</p>
                <p className="text-sm text-slate-600 mb-2">Read inline comments highlighting specific strengths and areas to improve.</p>
                <p className="text-sm text-slate-600 mb-2">Edit or add your own notes before sharing feedback with students.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Share Results</h3>
                <p className="text-sm text-slate-600 mb-2">Export graded essays as PDF reports or share individual feedback links directly with students.</p>
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
            "Grade and provide feedback on 3 student essays using AI,<br className="hidden md:block" /> then refine one submission manually."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Prepare Essays</h4>
                <p className="text-emerald-100 text-sm">Collect 3 student essays on the same topic. Create a custom rubric with criteria: "Thesis Clarity," "Use of Evidence," "Grammar & Style."</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">AI Efficiency</h4>
                <p className="text-emerald-100 text-sm">Upload all 3 essays at once using batch grading. Note the time it takes the AI to complete all three.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Select & Refine</h4>
                <p className="text-emerald-100 text-sm">Choose one essay and manually add 2–3 personalized comments on top of the AI feedback. Compare the AI's score with your own assessment.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Share Results</h4>
                <p className="text-emerald-100 text-sm">Export the feedback as PDF. Share your experience using #EssayGraderChallenge on social media!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><AlignLeft size={20} /></div>
              <h3 className="font-bold text-slate-900">Early Contributions</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-emerald-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-emerald-300" />
                <p className="text-xs text-emerald-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-emerald-100 text-xs text-emerald-800">
              <p className="text-emerald-800 text-sm font-bold">Structured Writing</p>
              <p className="text-sm text-slate-800 leading-relaxed max-w-xs mb-4 font-inter italic">
                Students get clear rubric-based scores on every dimension
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><BarChart2 size={20} /></div>
              <h3 className="font-bold text-slate-900">AI Efficiency</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-emerald-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-emerald-300" />
                <p className="text-xs text-emerald-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs mb-4">
              Batch grading multiple essays simultaneously saves hours of manual review each week.
            </p>
            <div className="bg-white rounded-lg p-3 border border-emerald-100 text-xs text-emerald-800 font-medium italic">
              Use the inline comment feature to personalize AI feedback before sharing with students.
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
              <p className="text-sm text-slate-700"><strong>📝 Rubric First:</strong> Always create or upload your rubric before grading — it dramatically improves AI feedback quality.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🔄 Revision Loop:</strong> Encourage students to revise and resubmit — EssayGrader.ai gives fresh feedback each time, reinforcing improvement.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🤝 Human Touch:</strong> Use AI as a first pass, then add 1–2 personal comments to show students you engaged with their work.</p>
            </li>
          </ul>

          <div className="bg-white p-4 rounded-xl text-center border border-yellow-200">
            <p className="text-xs text-yellow-800 font-medium italic">
              "Grade smarter, not harder — EssayGrader.ai turns hours of marking into minutes of meaningful feedback!"
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
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Day 10: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Student must complete quiz to unlock day 11</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-blue-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default EssayGraderDay10;
