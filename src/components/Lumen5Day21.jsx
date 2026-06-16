import React, { useState } from 'react';
import { 
  Video, 
  Sparkles, 
  Clock, 
  Globe, 
  Users, 
  Layers, 
  ArrowRight,
  Zap,
  FileText,
  Trophy,
  CheckCircle2,
  ChevronRight,
  Target,
  Image,
  Type,
  Mic,
  Share2,
  Palette,
  BarChart3
} from 'lucide-react';

const Lumen5Day21 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Video },
    { id: 'features', label: 'Features', icon: Layers },
    { id: 'guide', label: 'Guide', icon: Target },
    { id: 'challenge', label: 'Challenge', icon: Trophy }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-site-primary text-site-text">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-site-primary-400 rounded-3xl p-10">
          <div className="absolute opacity-20"></div>
          
          <div className="absolute top-10 right-10 animate-pulse text-site-text">
            <Video size={64} strokeWidth={1} />
          </div>

          <div className="text-center space-y-6 pt-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-site-bg/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 21 • Video Creation
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 21: Lumen5 Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Transform Lessons into Engaging Video Content
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <Video size={16} /> Boosts Engagement
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <Clock size={16} /> Saves Time
              </span>
              <span className="flex items-center gap-2 text-sm bg-site-bg/10 px-3 py-1 rounded-lg border border-white/10">
                <Globe size={16} /> Multilingual
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-site-button backdrop-blur-md p-1.5 rounded-2xl flex gap-2 border border-site-accent max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.id 
                  ? 'bg-site-bg text-site-text shadow-lg scale-[1.02]' 
                  : 'text-site-text/80 hover:bg-site-bg'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-site-text tracking-tight">What is Lumen5?</h2>
                  <p className="text-site-text/80 leading-relaxed text-lg">
                    Lumen5 is an AI-powered video creation platform that turns text (lesson plans, articles, scripts) into engaging educational videos. It automates scene generation, adds animations, and syncs multimedia to simplify video production.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: Video, title: 'Boosts Engagement', desc: 'Converts static lessons into dynamic videos' },
                      { icon: Clock, title: 'Saves Time', desc: 'Creates videos in minutes (vs. hours)' },
                      { icon: Globe, title: 'Supports Accessibility', desc: 'Auto-captions and multilingual options' },
                      { icon: Layers, title: 'Multi-Platform Use', desc: 'Ideal for flipped classrooms and LMS' }
                    ].map((item, i) => (
                      <div key={i} className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-site-text text-sm">{item.title}</h4>
                          <p className="text-[11px] text-site-text/80">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="hidden"></div>
                  <div className="bg-site-bg p-8 rounded-3xl shadow-xl border border-site-accent relative overflow-hidden group">
                    <img src="/Video calling-pana 1.png" alt="Lumen5 Illustration" className="w-full h-auto relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-site-text tracking-tight">Key Features & How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'AI Script-to-Video',
                    icon: Type,
                    color: 'purple',
                    howTo: 'Paste text (e.g., lecture notes) → AI suggests visuals/scenes',
                    benefit: 'Turns textbooks into interactive video lessons'
                  },
                  {
                    title: 'Media Library',
                    icon: Image,
                    color: 'blue',
                    howTo: 'Search 10M+ free images/videos or upload custom files',
                    benefit: 'No copyright issues; personalize content'
                  },
                  {
                    title: 'Brand Kit',
                    icon: Palette,
                    color: 'emerald',
                    howTo: 'Set school colors/fonts → apply to all videos automatically',
                    benefit: 'Consistent branding for institutional content'
                  },
                  {
                    title: 'Voiceover & Captions',
                    icon: Mic,
                    color: 'orange',
                    howTo: 'Record narration or auto-generate captions (20+ languages)',
                    benefit: 'ADA-compliant and ESL-friendly'
                  },
                  {
                    title: 'Collaboration',
                    icon: Users,
                    color: 'indigo',
                    howTo: 'Invite colleagues to edit videos (great for team projects)',
                    benefit: 'Streamline team-based content creation'
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                    <div className={`w-10 h-10 rounded-xl mb-6 flex items-center justify-center bg-site-primary/40 flex items-center justify-center text-site-text`}>
                      <feature.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-site-text mb-4">{feature.title}</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-site-bg rounded-xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">How to Use</p>
                        <p className="text-xs text-slate-700">{feature.howTo}</p>
                      </div>
                      <div className={`p-3 bg-site-primary/40 rounded-xl border border-site-accent/10`}>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Benefit</p>
                        <p className="text-xs text-site-text font-semibold">{feature.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-site-text tracking-tight text-center">Step-by-Step Getting Started Guide</h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { step: 1, title: 'Sign Up', desc: 'Go to Lumen5.com → Click "Get Started Free" → Select "Education" as your use case' },
                  { step: 2, title: 'Input Your Content', desc: 'Click "Create Video" → Choose "Start from Text" → Paste lesson summary or upload PPT/PDF' },
                  { step: 3, title: 'Customize with AI', desc: 'Let Lumen5 auto-generate storyboard → Edit scenes, swap media, adjust text highlights' },
                  { step: 4, title: 'Enhance Accessibility', desc: 'Click "Captions" → Toggle "Auto-Generate" → Select language for bilingual classes' },
                  { step: 5, title: 'Publish & Share', desc: 'Click "Export" → Choose resolution → Download or share to Google Classroom/Canvas' }
                ].map((item, i) => (
                  <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent flex items-center gap-8 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-full bg-site-primary text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-site-primary/20">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-site-text mb-1">{item.title}</h4>
                      <p className="text-sm text-site-text/80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-10">
                <div className="hidden"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-site-text text-xs font-bold uppercase tracking-[0.2em]">
                    <Target size={16} /> Practical Challenge Task
                  </div>
                  <h2 className="text-3xl font-bold leading-tight">
                    "Create a 2-minute explainer video for an upcoming lesson topic."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Input: Extract Key Content', desc: 'Draft 5-10 bullet points from your lesson plan (e.g., "Factors of Photosynthesis"). Review for accuracy.', icon: FileText },
                      { title: 'Customize: Personalize Media', desc: 'Replace 2 stock images. Add a 10-second voiceover. Adjust text highlights for key terms.', icon: Image },
                      { title: 'Enhance: Accessibility', desc: 'Enable auto-captions. Translate into another language. Ensure ADA color contrast.', icon: Globe },
                      { title: 'Publish: Share Your Output', desc: 'Export the video. Upload to LMS or share directly in Google Classroom/Canvas.', icon: Share2 }
                    ].map((step, i) => (
                      <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                        <step.icon size={16} className="text-site-text" />
                        <h4 className="font-bold text-sm">{step.title}</h4>
                        <p className="text-xs text-sm text-site-text">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Video Creation Flow */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">AI-Powered Video Creation Flow</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { step: 1, title: 'Paste Text', desc: 'Lesson plans or script', icon: Type },
                    { step: 2, title: 'AI Generates', desc: 'Scenes and images', icon: Sparkles },
                    { step: 3, title: 'Customize', desc: 'Edit and add media', icon: Palette },
                    { step: 4, title: 'Export', desc: 'Share or download', icon: Share2 }
                  ].map((flow, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-site-bg border border-site-accent shadow-sm text-center flex flex-col items-center gap-3 group hover:border-indigo-200 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
                        {flow.step}
                      </div>
                      <h4 className="font-bold text-site-text text-sm">{flow.title}</h4>
                      <p className="text-[10px] text-site-text/80">{flow.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Template Hack', icon: Layers, desc: 'Use "Education Explainer" templates for faster formatting. Pre-designed layouts save 10+ minutes.' },
                  { title: 'Student Projects', icon: Users, desc: 'Have students create videos as assignments. Lumen5 is student-friendly and builds digital literacy.' },
                  { title: 'Analytics', icon: BarChart3, desc: 'Track engagement via Lumen5\'s social integrations. Monitor views and completion rates.' }
                ].map((tip, i) => (
                  <div key={i} className="bg-site-bg p-6 rounded-3xl border border-site-accent space-y-4 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/30 flex items-center justify-center text-site-text mb-4">
                      <tip.icon size={24} />
                    </div>
                    <h4 className="font-bold text-site-text">{tip.title}</h4>
                    <p className="text-sm text-site-text/80 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>

              {/* Media Library Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">10M+ Free Media Library</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Stock Images & Videos', desc: 'Access millions of royalty-free files from Unsplash, Pexels, and more.', icon: Image },
                    { title: 'Custom Uploads', desc: 'Add your own images, videos, and graphics for personalization.', icon: Share2 },
                    { title: 'Brand Kit', desc: 'Set school colors and fonts to auto-apply across all videos.', icon: Palette },
                    { title: 'Music Library', desc: 'Access free royalty-free background music or upload your own.', icon: Mic }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-site-bg border border-site-accent shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-site-text text-sm">{item.title}</h4>
                        <p className="text-xs text-site-text/80">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfect For Grid */}
              <div className="bg-site-primary rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight">Perfect For</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Flipped Classrooms', desc: 'Create pre-lesson video content for students to watch before class.' },
                    { title: 'LMS Integration', icon: Zap, desc: 'Embed directly into Canvas, Schoology, or Google Classroom.' },
                    { title: 'Social Media Learning', desc: 'Share bitesized educational content on YouTube or Instagram.' },
                    { title: 'Parent Communication', desc: 'Visual lesson summaries for parents to support learning at home.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-2 bg-site-bg/10 rounded-lg text-indigo-400">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Quote */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-site-grad-from to-site-grad-to p-12 text-center space-y-8 shadow-2xl shadow-site-accent-600/20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-site-bg/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <Trophy size={48} className="mx-auto text-white" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "Lumen5 turns passive content into active learning experiences."
            </h2>
            <p className="text-site-text font-medium">Share your video with #AIVideoChallenge!</p>
            <button 
              onClick={onNext}
              className="mt-4 bg-site-bg text-site-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto group"
            >
              Start Your Challenge <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        </div>
    </div>
  );
};

export default Lumen5Day21;
