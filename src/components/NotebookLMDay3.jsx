import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  UploadCloud, 
  MessageSquare, 
  FileText, 
  Link, 
  Headphones,
  Target,
  Trophy,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const NotebookLMDay3 = ({ onNext }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-800 to-indigo-900 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="absolute -right-20 transform -rotate-12 top-0 opacity-10 font-bold text-9xl tracking-tighter whitespace-nowrap select-none">
            NotebookLM
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-purple-300" />
              Day 3 • Assessment Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              NotebookLM <br /> Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              From Documents to Interactive Learning Platforms
            </p>
          </div>
        </div>

        {/* What is NotebookLM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is NotebookLM?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              NotebookLM is an experimental, AI-powered ultimate study application designed by Google that helps users summarize, simplify, and learn from uploaded documents. Built around your unique curriculum, it acts as a personalized assistant tutor that grounds its output strictly in the content you upload.
            </p>
            
            <h3 className="font-bold text-slate-900 mb-4">Why Educators Need It:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Knowledge Retrieval:</strong> Instantly find specific key ideas across large document sets.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Interactive Study Guides:</strong> Autogenerate FAQs, glossaries, and outlines from your source text.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Critical Engagement:</strong> Create discussion questions tailored to your specific class level.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Audio Summaries:</strong> Convert text formats to engaging conversational "podcasts".</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-2xl h-80 border border-purple-100 flex items-center justify-center p-8 overflow-hidden relative">
             <img src="/NotebookLM.png" alt="NotebookLM Study" className="w-full h-full object-contain relative z-10" />
          </div>
        </div>

        {/* Features Table */}
        <div className="rounded-2xl border-2 border-dashed border-blue-200 p-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Key Features & How to Use Them</h2>
            <p className="text-slate-500 pb-4 border-b-2 border-dashed border-blue-200">Discover the tools that will transform your notebook workflows.</p>
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
                      <UploadCloud size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Source Upload</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Drag & drop PDF, Docs, or website links</td>
                  <td className="px-6 py-5 text-sm">Build a bounded knowledge base for specific units.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <MessageSquare size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Chat / Q&A</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Ask questions strictly within the bounds of those documents</td>
                  <td className="px-6 py-5 text-sm">Quickly extract exact facts without hallucination.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <FileText size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Study Guide Generator</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Use the "Notebook guide" button to auto-create FAQs</td>
                  <td className="px-6 py-5 text-sm">Instantly turn a full textbook chapter into a study aid.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Link size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Source Citations</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Click the citations to jump to the exact source text</td>
                  <td className="px-6 py-5 text-sm">Verify AI accuracy and limit hallucinations.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Headphones size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Audio Overview</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">1-click generation of two AI "hosts" discussing topics</td>
                  <td className="px-6 py-5 text-sm">Provide multimodal learning aids for auditory learners.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Transform your static texts into an interactive knowledge base with these simple steps.
            </p>
            <div className="bg-slate-100 rounded-2xl aspect-[4/3] relative overflow-hidden">
               <img src="/Sign up-amico 1.png" alt="Workspace" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="md:col-span-7 space-y-8 relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 z-0 hidden md:block"></div>
            
            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Access NotebookLM</h3>
                <p className="text-sm text-slate-600">Go to <strong className="text-purple-600">notebooklm.google.com</strong> and sign in with Google.</p>
                <p className="text-sm text-slate-600 mt-1">Click "New Notebook" to start your first "Study Guide" project.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Upload Sources</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Add Source" and upload syllabus, assignment details, or reading materials (e.g., PDF).</p>
                <p className="text-sm text-slate-600">You can select up to 50 sources per specific Knowledge Base (e.g., Unit 1).</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Ask AI to Organize Content</h3>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1 mb-2">
                  <p>Type: <em>"Create a pacing guide for these materials based on a 4-week period."</em></p>
                </div>
                <p className="text-sm text-slate-600">Click "Pin" to save the summary to your notes section.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Generate Study Materials</h3>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1 mb-2">
                  <p>Type: <em>"Act as an expert teacher. Write 5 discussion questions based on this document."</em></p>
                </div>
                <p className="text-sm text-slate-600">Edit and save to a separate Google Doc.</p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Create a Lesson Hook</h3>
                <p className="text-sm text-slate-600 mb-2">Hit the "Deep Dive" Audio Overview button to generate an engaging "podcast".</p>
                <p className="text-sm text-slate-600">Share the link with your specific class.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-indigo-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="flex items-center gap-2 text-purple-300 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE: TASK
          </div>
          
          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Transform a textbook chapter <br className="hidden md:block"/> into an interactive study guide."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-indigo-400/50 group-hover:border-indigo-300 group-hover:text-indigo-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Upload a Source</h4>
                <p className="text-purple-100 text-sm">Find a reading passage or PDF specific to your subject content. Upload it into NotebookLM.</p>
              </div>
            </div>
            
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-indigo-400/50 group-hover:border-indigo-300 group-hover:text-indigo-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Generate a Study Guide</h4>
                <p className="text-purple-100 text-sm">Use the "Notebook guide" button to instantly generate FAQs, study questions, and a glossary.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-indigo-400/50 group-hover:border-indigo-300 group-hover:text-indigo-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Ask a Question</h4>
                <p className="text-purple-100 text-sm">Ask the AI a specific question about the material to test its constraints. See if it references an outside topic.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-indigo-400/50 group-hover:border-indigo-300 group-hover:text-indigo-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Auto-Generate Audio</h4>
                <p className="text-purple-100 text-sm">Click on the Deep Dive Audio generation button to create a 3-min "podcast" to introduce the reading to your specific class.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-purple-500/30 relative z-10 flex items-center text-sm font-medium text-purple-200">
             <strong className="text-yellow-300 mr-2">Bonus:</strong> Try pinning 3 essential key terms from the text to your note board.
          </div>
        </div>

        {/* Pro Tips & Assessment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
           <div className="flex items-center justify-center bg-purple-50 rounded-2xl p-8">
              <img src="/Notebook-bro 1.png" alt="Notebook" className="w-full max-w-[250px] mix-blend-multiply opacity-80" />
           </div>

           <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
             <div className="flex items-center gap-2 text-amber-600 font-bold mb-6">
               <Trophy size={18} /> Pro Tips for Mastery
             </div>
             
             <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                 <p className="text-sm text-slate-700"><strong>Source Limits:</strong> Keep notebooks tightly scoped per unit (e.g. "Biology Unit 1").</p>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                 <p className="text-sm text-slate-700"><strong>Collaboration:</strong> Share notebooks with co-teachers to co-create study aids.</p>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                 <p className="text-sm text-slate-700"><strong>Podcast Limitations:</strong> The audio overview may occasionally invent slight banter but sticks closely to facts.</p>
               </li>
             </ul>

             <div className="bg-white/60 p-4 rounded-xl text-center border border-amber-200">
               <p className="text-xs text-amber-800 font-medium italic">
                 "NotebookLM turns static chapters into dynamic study tools. Empower your students at home!"
               </p>
             </div>
           </div>
        </div>

        {/* Ready to Create Quiz Section */}
        <div className="bg-purple-50 rounded-3xl p-10 border border-purple-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
               <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to Create Your First Quiz?</h3>
               <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                   NotebookLM is ideal for taking complex source material and making it accessible for student review.
               </p>
               <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                       <CheckCircle size={18} className="text-purple-600" /> Upload your class materials (PDF/Doc)
                   </li>
                   <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                       <CheckCircle size={18} className="text-purple-600" /> Go to the saved notes board
                   </li>
                   <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                       <CheckCircle size={18} className="text-purple-600" /> Click "Generate Quiz" for MCQs
                   </li>
               </ul>
            </div>
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 transform rotate-2">
                <img src="/CourseContentDay2.png" alt="Quiz Generation" className="w-full rounded-xl object-cover aspect-square" />
            </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={onNext}
          className="w-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-purple-50/0 group-hover:bg-purple-50/50 transition-colors"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-1">Day 3: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Evaluate Your Complete Understanding of Day 3</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-purple-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default NotebookLMDay3;
