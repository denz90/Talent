import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  Layers,
  Globe,
  ListChecks,
  FileOutput,
  Target,
  Trophy,
  ChevronRight,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

const DiffitDay4 = ({ onNext }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-800 to-amber-700 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-amber-300" />
              Day 4 • Assessment Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Diffit Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Instant AI Reading Level Differentiation
            </p>
          </div>
        </div>

        {/* What is Diffit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is Diffit?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Diffit is an AI-powered tool that allows teachers to get leveled texts, vocabulary, reading questions, and activities for any topic and any grade in seconds. It bridges the gap between readable content and grade-level curriculum.
            </p>

            <h3 className="font-bold text-slate-900 mb-4">Why Educators Need It:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>2 reading levels in 1 click:</strong> Gets both grade level and decodable text.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Aligned with IEPs:</strong> Allows for rapid alignment to language & reading levels.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Creates full activity sets:</strong> Not just a text, it generates DOK reading questions and vocabulary.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Supports ELL Students:</strong> Can translate the text to multiple languages.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-2xl h-80 border border-orange-100 flex items-center justify-center p-8 overflow-hidden relative">
            <img src="/Notebook-bro 1.png" alt="Diffit Setup" className="w-full h-full object-contain relative z-10" />
          </div>
        </div>

        {/* Features Table */}
        <div className="rounded-2xl p-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Key Features & How to Use Them</h2>
            <p className="text-slate-500 pb-4">Discover the tools that will transform your reading lessons.</p>
          </div>

          <div className="rounded-xl bg-white overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-rose-50 border-b border-slate-100">
                  <th className="px-6 py-4 font-bold text-[#bc1044] w-1/4">Feature</th>
                  <th className="px-6 py-4 font-bold text-[#bc1044] w-2/4">How to Use</th>
                  <th className="px-6 py-4 font-bold text-[#bc1044] w-1/4">Benefit for Educators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Layers size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Text Leveler</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Input topic or text → Select target reading level → Generate.</td>
                  <td className="px-6 py-5 text-sm">Instantly readable text for struggling learners.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Globe size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Translation</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Click "Translate" → Select language → Click "Update".</td>
                  <td className="px-6 py-5 text-sm">Empowers ELL students to access main ideas in L1.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <ListChecks size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Activity Generation</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Under generated text, go to "Activities" → Pick vocabulary words.</td>
                  <td className="px-6 py-5 text-sm">Provides instant scaffolded assignments.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <FileOutput size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Export Options</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Click Export → Choose "Google Forms", "Docs", or "Slides".</td>
                  <td className="px-6 py-5 text-sm">Creates a ready-to-assign class activity.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Give every reader their own customized challenge in five simple steps.
            </p>
          </div>

          <div className="md:col-span-5 -mt-6">
            <div className="bg-slate-50 rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center p-4">
              <img src="/Sign up-amico 1.png" alt="Workspace" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 relative -mt-6">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 z-0 hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-orange-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Sign Up</h3>
                <p className="text-sm text-slate-600">Go to <strong className="text-orange-600">diffit.me</strong> → Click "Teachers Try For Free" and sign in.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-orange-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Find Your Source Text</h3>
                <p className="text-sm text-slate-600 mb-2">Open Diffit. Two ways: (1) Copy/Paste your text or (2) Enter a topic "American Revolution".</p>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1">
                  <p>Select Grade Level (e.g. 4th Grade).</p>
                  <p>Click "Generate".</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-orange-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Create Questions</h3>
                <p className="text-sm text-slate-600 mb-2">Once your text appears, scroll down to "Activities".</p>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1">
                  <p>Choose "Short Answer", "Multiple Choice", or "Vocabulary".</p>
                  <p>Edit questions to fit your specific learning goals.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-orange-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Translate (Optional)</h3>
                <p className="text-sm text-slate-600 mb-2">Under the "Readings" block click "Translate".</p>
                <p className="text-sm text-slate-600">Select your target language and click "Update".</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-orange-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Export to Students</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Export" → "Google Classroom" → Share directly to your class.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-orange-900 via-yellow-900 to-amber-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-orange-400 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE: TASK
          </div>

          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Differentiate a Grade 8 <br className="hidden md:block" />History Passage for a 4th-Grade <br className="hidden md:block" />Reader and ELL Students."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-amber-400/50 group-hover:border-amber-300 group-hover:text-amber-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Find a Base Text</h4>
                <p className="text-orange-100 text-sm">Copy/paste a grade-level history event (e.g. Civil War) into Diffit.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-amber-400/50 group-hover:border-amber-300 group-hover:text-amber-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Generate Assessments</h4>
                <p className="text-orange-100 text-sm">Create 3 multiple choice questions and 1 short answer question.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-amber-400/50 group-hover:border-amber-300 group-hover:text-amber-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Adapt the Text</h4>
                <p className="text-orange-100 text-sm">Use Diffit to reset the reading level to 4th grade.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-orange-500/30 border border-orange-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-amber-400/50 group-hover:border-amber-300 group-hover:text-amber-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Translate for ELLs</h4>
                <p className="text-orange-100 text-sm">Translate the text and activities into Spanish or L1 languages.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-orange-500/30 relative z-10 flex items-center text-sm font-medium text-orange-200">
            Export entire output to Google Doc and share for feedback.
          </div>
        </div>

        {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200 rounded-full blur-3xl opacity-50"></div>
            <img src="/Shrug-bro 1.png" alt="shrug-bro 1" className="w-full h-full object-cover" />
            <h3 className="font-bold text-slate-900 mb-2">Wait! Are you sure?</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              Diffit doesn't actually "generate" the original text; it adapts what you give it. If you need it to write an original story, use MagicSchool AI.
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
            <img src="/New idea-bro-2 1.png" alt="New idea-bro-2 1" className="w-full h-full object-cover" />
            <h3 className="font-bold text-slate-900 mb-2">Did You Know?</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              You can ask Diffit to include specific vocabulary words in its generation? Try <em>"Include these 5 words"</em> in the prompt!
            </p>
          </div>
        </div>

        {/* Pro Tips & Assessment */}
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-amber-600 font-bold mb-6">
            <Trophy size={18} /> Pro Tips for Mastery
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>Fact Check:</strong> Always double-check what facts Diffit removed or simplified.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>Audio (Read-Aloud):</strong> Diffit's export forms usually support read-aloud tools.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>Student Interaction:</strong> Use exported Google Forms as daily "Do Nows" or exit tickets.</p>
            </li>
          </ul>

          <div className="bg-white/60 p-4 rounded-xl text-center border border-amber-200">
            <p className="text-xs text-amber-800 font-medium italic">
              "Diffit takes the heavy lifting out of scaffolding. Make learning accessible!"
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={onNext}
          className="w-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-orange-50/0 group-hover:bg-orange-50/50 transition-colors"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">Day 4: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Evaluate Your Complete Understanding of Day 4</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-amber-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default DiffitDay4;
