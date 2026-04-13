import React from 'react';
import { 
  Sparkles, 
  Users, 
  Clock, 
  FileText, 
  Layers, 
  CheckSquare, 
  Lightbulb,
  ArrowRight,
  Trophy,
  Target,
  ChevronRight
} from 'lucide-react';

const MagicSchoolDay1 = ({ onNext }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-800 text-white p-12 shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-300" />
              Day 1 • Teacher Tools Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              MagicSchool <br /> AI Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Revolutionize Lesson Planning with AI-Powered Pedagogy
            </p>
          </div>
        </div>

        {/* What is MagicSchool AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is MagicSchool AI?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              MagicSchool AI is an advanced AI platform designed specifically for educators. It automates lesson planning, generates differentiated instructional materials, and creates assessments aligned to standards—all while saving teachers <strong>10+ hours weekly</strong>.
            </p>
            
            <h3 className="font-bold text-slate-900 mb-4">Why Educators Need It:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Users className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-slate-900">Personalized Learning:</strong> <span className="text-slate-600">Generates leveled content for diverse student needs.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-slate-900">Time-Saver:</strong> <span className="text-slate-600">Cuts lesson planning time by 75% with targeted AI workflows.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-slate-900">Standards-Aligned:</strong> <span className="text-slate-600">Supports CCSS, NGSS, and TEKS with 1-click adaptations.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Layers className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-slate-900">Multimodal Outputs:</strong> <span className="text-slate-600">Creates worksheets, slides, rubrics, and exit tickets.</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-50 rounded-2xl h-80 border border-slate-100 flex items-center justify-center p-8 overflow-hidden relative">
             <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 items-center justify-center p-4">
                <Layers size={80} /> <CheckSquare size={100} /> <Lightbulb size={60} />
             </div>
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Educator Working" className="w-full h-full object-cover rounded-xl shadow-lg relative z-10" />
          </div>
        </div>

        {/* Features Table */}
        <div className="rounded-2xl border-2 border-dashed border-blue-200 p-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Key Features & How to Use Them</h2>
            <p className="text-slate-500 pb-4 border-b-2 border-dashed border-blue-200">Discover the tools that will transform your classroom workflow.</p>
          </div>

          <div className="rounded-xl border-2 border-dashed border-blue-200 bg-white overflow-hidden">
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
                      <FileText size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Lesson Plan Generator</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Select grade/subject → Input topic → Add any standards → Generate draft.</td>
                  <td className="px-6 py-5 text-sm">Instant, reliable, ready-to-use lesson plans.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Layers size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Differentiation Tool</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Upload existing text → Set target grade-level → Generate leveled text.</td>
                  <td className="px-6 py-5 text-sm">Auto-scaffold assignments for inclusive classrooms.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <CheckSquare size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Rubric Builder</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Input assignment type (e.g., essay, project) → Add standards → Generate.</td>
                  <td className="px-6 py-5 text-sm">Create transparent grading criteria in 10 seconds.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Lightbulb size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Behavior Intervention</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Describe student behavior → Get list of evidenced-based strategies.</td>
                  <td className="px-6 py-5 text-sm">Supports PBIS and MTSS frameworks easily.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Follow these simple steps to generate your first lesson and differentiate content for your class.
            </p>
            <div className="bg-slate-100 rounded-2xl aspect-[4/3] relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000" alt="Workspace" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="md:col-span-7 space-y-8 relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 z-0 hidden md:block"></div>
            
            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-indigo-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Sign Up</h3>
                <p className="text-sm text-slate-600">Go to MagicSchool.ai → Click <strong className="text-indigo-600">"Sign Free"</strong> (no credit card required).</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-indigo-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Create Your First Lesson</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Lesson Plan Generator".</p>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1">
                  <p><strong>Grade Level:</strong> e.g., 5th grade</p>
                  <p><strong>Subject:</strong> e.g., Science</p>
                  <p><strong>Topic:</strong> e.g., "Water Cycle"</p>
                  <p><strong>Standard:</strong> e.g., NGSS-5-ESS2-1 → Click "Generate"</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-indigo-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Differentiate Content</h3>
                <p className="text-sm text-slate-600 mb-2">Open the generated lesson → Click "Adapt for diversity" → Select:</p>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1">
                  <p><strong>English Learners:</strong> "Add visual vocabulary words."</p>
                  <p><strong>Gifted Students:</strong> "Extension activity" → Click "Apply changes".</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-indigo-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Export & Share</h3>
                <p className="text-sm text-slate-600">Click "Export" → Choose format (Google Docs, PDF) → Share with your PLC via link.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="flex items-center gap-2 text-indigo-300 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE: TASK
          </div>
          
          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Design a differentiated <br className="hidden md:block"/> science lesson with AI-<br className="hidden md:block"/>generated supports."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-500/30 group-hover:border-green-400/30 group-hover:text-green-300">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Generate Base Lesson</h4>
                <p className="text-indigo-200 text-sm">Use the "Lesson Plan Generator" to outline a 45-minute lesson covering Next Generation Science Standards (NGSS) objectives and agenda.</p>
              </div>
            </div>
            
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-500/30 group-hover:border-green-400/30 group-hover:text-green-300">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Create an Exit Ticket</h4>
                <p className="text-indigo-200 text-sm">Use the "Quiz Generator" to make a 3-question formative assessment.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-500/30 group-hover:border-green-400/30 group-hover:text-green-300">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Add Differentiation</h4>
                <p className="text-indigo-200 text-sm">Use the "Differentiation Tool" to create a simplified reading passage for struggling readers and an extension prompt for advanced learners.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-500/30 group-hover:border-green-400/30 group-hover:text-green-300">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Share Your Output</h4>
                <p className="text-indigo-200 text-sm mb-3">Export the final doc to a PDF and submit it link.</p>
                <span className="bg-indigo-950 px-3 py-1 rounded text-xs font-bold text-indigo-300">#AIEdChallenge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips & Assessment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
           <div className="flex items-center justify-center bg-purple-50 rounded-2xl p-8">
              <img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800" alt="Notebook" className="w-full max-w-[250px] mix-blend-multiply opacity-80" />
           </div>

           <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
             <div className="flex items-center gap-2 text-amber-600 font-bold mb-6">
               <Trophy size={18} /> Pro Tips for Mastery
             </div>
             
             <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                 <p className="text-sm text-slate-700"><strong>Prompt Engineering:</strong> Add details like <em>"include hands-on activity"</em> or <em>"use real-world examples"</em> for better outputs.</p>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                 <p className="text-sm text-slate-700"><strong>Save Templates:</strong> Save generated and proven templates for future units.</p>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                 <p className="text-sm text-slate-700"><strong>Collaboration:</strong> Use the "Share Library" to trade materials with department peers.</p>
               </li>
             </ul>

             <div className="bg-white/60 p-4 rounded-xl text-center border border-amber-200">
               <p className="text-xs text-amber-800 font-medium italic">
                 "Magic School AI turns planning delays into pedagogical power. Claim your lesson weekends back using #AISchoolManager"
               </p>
             </div>
           </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={onNext}
          className="w-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 transition-colors"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Day 1: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Evaluate Your Complete Understanding of Day 1</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-blue-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default MagicSchoolDay1;
