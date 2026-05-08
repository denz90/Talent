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
  Layout,
  Shapes
} from 'lucide-react';

const SchoolAIDay14 = ({ onNext }) => {
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-500 to-amber-600 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="absolute -right-0 transform -rotate-15 top-5 opacity-16 font-bold text-9xl tracking-tighter whitespace-nowrap select-none">
            SchoolAI
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-orange-200" />
              Day 14 • Interactive Learning Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              SchoolAI Spaces Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Create, personalize, and host interactive learning environments.
            </p>
          </div>
        </div>

        {/* What is SchoolAI Spaces? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is SchoolAI Spaces?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              SchoolAI Spaces allow teachers to design and host interactive, customizable learning environments called "Spaces". These spaces can include AI-driven characters, simulations, assessments, and collaborative tools to create a deeply personalized and immersive student experience.
            </p>

            <button
              onClick={() => setIsWhyOpen(!isWhyOpen)}
              className="inline-flex items-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 border border-orange-100 group"
            >
              Why Educators Need It
              <ChevronRight size={18} className={`transition-transform duration-300 ${isWhyOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>

            <div className={`mt-6 transition-all duration-500 ease-in-out overflow-hidden ${isWhyOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="space-y-4 pb-2">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">AI Characters</strong>
                    <span className="text-slate-600 text-sm">Bring history, science, or literature to life by letting students interact with AI-driven personas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shapes className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Custom Spaces</strong>
                    <span className="text-slate-600 text-sm">Design tailored learning environments with specific tools and activities for any lesson.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Real-time Engagement</strong>
                    <span className="text-slate-600 text-sm">Monitor student progress and interaction live as they explore the space.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BarChart2 className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Embedded Assessment</strong>
                    <span className="text-slate-600 text-sm">Integrate quizzes, polls, and checks for understanding directly into the learning experience.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-white rounded-2xl h-80 border border-slate-100 flex items-center justify-center p-8 overflow-hidden relative shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <div className="text-center space-y-3">
                <Layout size={48} className="mx-auto text-orange-200" />
                <p className="text-sm text-slate-300 font-medium">Image coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-orange-300 bg-white overflow-hidden shadow-sm -mt-8">
          <div className="px-6 py-4 bg-orange-50 border-b border-slate-100">
            <p className="text-sm font-bold text-slate-700">Key Features & How to Use Them</p>
            <p className="text-xs text-slate-500 mt-0.5">Use these features to make the most of the platform</p>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-orange-50 border-b border-slate-100">
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Feature</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-2/4">Description / How to Use</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Classroom Effectiveness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-orange-500 flex-shrink-0" />
                    <span>AI Characters</span>
                  </div>
                </td>
                <td className="px-6 py-5">Add AI-driven characters to your space → Students can interview or debate them to deepen their understanding</td>
                <td className="px-6 py-5 text-sm">Makes abstract concepts concrete and engaging</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Shapes size={16} className="text-orange-500 flex-shrink-0" />
                    <span>Custom Spaces</span>
                  </div>
                </td>
                <td className="px-6 py-5">Select from a library of tools and activities → Drag and drop to design your own interactive lesson environment</td>
                <td className="px-6 py-5 text-sm">Tailored environments for every unique lesson</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-orange-500 flex-shrink-0" />
                    <span>Collaborative Tools</span>
                  </div>
                </td>
                <td className="px-6 py-5">Enable real-time collaboration → Students can work together on projects or activities within the same space</td>
                <td className="px-6 py-5 text-sm">Promotes teamwork and peer learning</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <BarChart2 size={16} className="text-orange-500 flex-shrink-0" />
                    <span>Embedded Assessment</span>
                  </div>
                </td>
                <td className="px-6 py-5">Add quizzes and polls directly to the space → View instant student performance data as they complete activities</td>
                <td className="px-6 py-5 text-sm">Formative assessment integrated into the learning flow</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Using the following SchoolAI's structured approach to get started.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="md:col-span-5 -mt-6">
            <div className="bg-slate-50 rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center p-4">
              <div className="text-center space-y-3">
                <FileText size={48} className="mx-auto text-orange-200" />
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
                <p className="text-sm text-slate-600">Go to the <a href="https://schoolai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">SchoolAI website</a>. Click "Sign Up Free" and select your teacher profile.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Choose a Template</h3>
                <p className="text-sm text-slate-600 mb-2">Click "+ New Space" → Browse the template library for a starting point (e.g., "Ecosystems" or "Historical Debate").</p>
                <p className="text-sm text-slate-600 mb-2">Select "Start from Scratch" if you want to build a completely custom experience.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Add Activities</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Add Tool" → Choose from AI characters, quizzes, polls, simulations, and more.</p>
                <p className="text-sm text-slate-600 mb-2">Configure each activity with your specific lesson objectives and instructions.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Invite Students</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Launch Space" → Share the space link or join code with your students.</p>
                <p className="text-sm text-slate-600 mb-2">Monitor the live dashboard as students enter and interact with the space.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Review Student Work</h3>
                <p className="text-sm text-slate-600 mb-2">Open the "Student Insights" tab → View engagement metrics, quiz scores, and AI character interaction logs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-orange-400 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE TASK
          </div>

          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Design a Space for a 20-<br className="hidden md:block" />minute interactive lesson on <br className="hidden md:block" /> ecosystems."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-orange-400/50 group-hover:border-orange-300 group-hover:text-orange-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Create the Space</h4>
                <p className="text-orange-100 text-sm">Select the "Ecosystems" template and add an AI character representing a local environmentalist or a forest animal.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-orange-400/50 group-hover:border-orange-300 group-hover:text-orange-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Add Interactive Elements</h4>
                <p className="text-orange-100 text-sm">Embed a short quiz on food chains and a poll about local ecosystem threats within the space.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-orange-400/50 group-hover:border-orange-300 group-hover:text-orange-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Review the Dashboard</h4>
                <p className="text-orange-100 text-sm">After launching the space with students, check the dashboard to see which activities had the highest engagement.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-orange-400/50 group-hover:border-orange-300 group-hover:text-orange-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Reflect and Iterate</h4>
                <p className="text-orange-100 text-sm">Identify one activity that was less successful and brainstorm one AI-driven change to improve student participation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Users size={20} /></div>
              <h3 className="font-bold text-slate-900">Immersive Interactions</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-orange-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-orange-300" />
                <p className="text-xs text-orange-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-100 text-xs text-orange-800">
              <p className="text-orange-800 text-sm font-bold">AI Chatbot Power</p>
              <p className="text-sm text-slate-800 leading-relaxed max-w-xs mb-4 font-inter italic">
                AI characters can bring any historical or scientific concept to life.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Zap size={20} /></div>
              <h3 className="font-bold text-slate-900">AI Design Prowess</h3>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-40 bg-orange-100/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center space-y-2">
                <FileText size={32} className="mx-auto text-orange-300" />
                <p className="text-xs text-orange-300 font-medium">Image coming soon</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs mb-4">
              Co-create high-quality learning environments in minutes using the template library.
            </p>
            <div className="bg-white rounded-lg p-3 border border-orange-100 text-xs text-orange-800 font-medium italic">
              Use the live dashboard to make data-informed instructional decisions in real-time.
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
              <p className="text-sm text-slate-700"><strong>🛡️ Safeguard Interactions:</strong> Set clear instructions for AI characters to ensure student conversations stay on-topic and productive.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🔄 Adaptive Feedback:</strong> Enable AI-driven hints and feedback on assessments to provide students with granular support.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🤝 Collaborative Design:</strong> Share your space with colleagues to collaborate on lesson design and share best practices.</p>
            </li>
          </ul>

          <div className="bg-white p-4 rounded-xl text-center border border-yellow-200">
            <p className="text-xs text-yellow-800 font-medium italic">
              "SchoolAI Spaces transforms your classroom into an interactive learning playground where every student can explore and excel."
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
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Day 14: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Student must complete quiz to unlock day 15</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-blue-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default SchoolAIDay14;
