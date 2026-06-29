import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  Users, 
  Briefcase, 
  Send, 
  CheckCircle,
  Building,
  Target,
  ChevronRight,
  Upload
} from 'lucide-react';

const CompanyPage = ({ onBack, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab || 'about_us');

  // Sync tab state with prop update
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Scroll to top on tab switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  // Form states
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: 'Partnership', message: '' });
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [careerForm, setCareerForm] = useState({ name: '', email: '', role: 'AI Educator', cv: null });
  const [isCareerSubmitted, setIsCareerSubmitted] = useState(false);

  const tabs = [
    { id: 'about_us', label: 'About Us', icon: Target },
    { id: 'partners', label: 'Partners', icon: Building },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'careers', label: 'Careers', icon: Briefcase },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsContactSubmitted(true);
    setTimeout(() => {
      setIsContactSubmitted(false);
      setContactForm({ name: '', email: '', subject: 'Partnership', message: '' });
    }, 4000);
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    setIsCareerSubmitted(true);
    setTimeout(() => {
      setIsCareerSubmitted(false);
      setCareerForm({ name: '', email: '', role: 'AI Educator', cv: null });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-site-bg text-site-text font-sans pb-24 transition-colors duration-300">
      
      {/* Dynamic Header Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-site-primary via-site-accent/70 to-site-primary py-24 px-6 text-center text-white border-b border-site-accent/35">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-site-primary/40 backdrop-blur-2xs" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all mb-8 text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/15"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-none drop-shadow-sm">
            Hawkman Labs
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Empowering individuals and organizations through innovation, technology, and skills development.
          </p>
        </div>

        {/* Floating background decorative vectors */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-12">
        <div className="flex flex-wrap justify-center md:justify-start gap-3 p-1.5 bg-site-accent/30 rounded-2xl border border-site-accent/60 max-w-fit mx-auto md:mx-0">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive 
                    ? 'bg-site-primary text-white shadow-md' 
                    : 'text-site-text hover:bg-site-accent/50'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-6">
        
        {/* 1. ABOUT US VIEW */}
        {activeTab === 'about_us' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-in fade-in duration-300">
            {/* Left Col - Core Narrative */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-site-accent/25 border border-site-accent/75 rounded-3xl p-8 md:p-10 shadow-sm leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-site-primary animate-pulse" />
                  Our Story
                </h2>
                <p className="text-[15px] md:text-[17px] font-medium opacity-90 mb-6 leading-relaxed">
                  Founded in 2019 in Ghana, Hawkman Labs is an ecosystem dedicated to empowering individuals and organizations through innovation, technology, and skills development. Through initiatives such as the 28-Day AI Challenge, we help learners build practical AI knowledge, develop future-ready skills, and unlock new opportunities in the digital economy.
                </p>
                <p className="text-[15px] md:text-[17px] font-medium opacity-90 mb-6 leading-relaxed">
                  Our mission is to make emerging technologies accessible, actionable, and impactful for students, professionals, entrepreneurs, and organizations. We believe that technology education should be practical, engaging, and focused on real-world outcomes.
                </p>
                <p className="text-[15px] md:text-[17px] font-medium opacity-90 leading-relaxed">
                  By combining learning, community, mentorship, and talent development, Hawkman Labs is building a platform where people can learn, grow, and thrive in an AI-driven world.
                </p>
              </div>

              {/* Grid of Key Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Innovation First", desc: "Always building, testing, and adapting to the frontier of technology." },
                  { title: "Practical Focus", desc: "No complex fluff. Just hands-on, high-value technical learning." },
                  { title: "Community Driven", desc: "A connected, supportive network of tech students & pros." }
                ].map((p, i) => (
                  <div key={i} className="bg-site-bg border border-site-accent/70 p-6 rounded-2xl shadow-2xs hover:shadow-sm transition-all">
                    <h3 className="font-extrabold text-[15px] mb-2">{p.title}</h3>
                    <p className="text-xs font-semibold opacity-70 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col - Facts & Quick Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-br from-site-primary to-site-accent/40 text-white rounded-3xl p-8 border border-white/10 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Quick Highlights</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Founded In</span>
                    <p className="text-lg font-extrabold">2019 (Ghana)</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Core Initiative</span>
                    <p className="text-lg font-extrabold">28-Day AI Challenge</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Target Focus</span>
                    <p className="text-lg font-extrabold">Accessible tech skills & talent incubation</p>
                  </div>
                </div>
              </div>

              <div className="bg-site-bg border border-site-accent/60 p-6 rounded-2xl text-center">
                <Users className="w-8 h-8 text-site-primary mx-auto mb-3" />
                <h4 className="font-bold mb-1">Join the Ecosystem</h4>
                <p className="text-xs font-semibold opacity-70 mb-4 leading-relaxed">Level up your workflow with industry-relevant AI knowledge today.</p>
                <button 
                  onClick={onBack}
                  className="w-full bg-site-primary hover:bg-site-primary/80 text-white text-xs font-bold uppercase py-3 rounded-xl transition-all shadow-xs"
                >
                  Start Learning Free
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. PARTNERS VIEW */}
        {activeTab === 'partners' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold mb-4">Ecosystem Partners</h2>
              <p className="text-[16px] font-medium opacity-80 leading-relaxed">
                Meet the organizations, schools, businesses, and community partners helping us expand access to AI education and talent development.
              </p>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Ghana Tech Hub", category: "Innovation & Incubation", desc: "Collaborating on nationwide AI training modules for tech hubs and incubators." },
                { name: "Accra Business School", category: "Education Partner", desc: "Integrating prompt engineering programs into modern professional programs." },
                { name: "Kumasi Hive Network", category: "Community Hub", desc: "Reaching grassroot entrepreneurs with practical technology training workshops." },
                { name: "MEST Africa", category: "Ecosystem Builder", desc: "Helping technology entrepreneurs leverage AI to scale digital initiatives." },
              ].map((partner, i) => (
                <div key={i} className="bg-site-bg border border-site-accent/70 p-6 rounded-3xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-site-primary uppercase tracking-widest bg-site-accent/40 border border-site-accent/80 px-2.5 py-1 rounded-full mb-4 inline-block">
                      {partner.category}
                    </span>
                    <h3 className="text-lg font-black text-site-text mb-2 leading-snug">{partner.name}</h3>
                    <p className="text-xs font-semibold opacity-70 leading-relaxed">{partner.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-site-accent/50 flex justify-end">
                    <span className="text-xs font-bold text-site-primary flex items-center gap-1">
                      Collaborative Initiative <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership Pitch */}
            <div className="bg-gradient-to-r from-site-primary to-site-accent/30 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-white/5 shadow-md">
              <h3 className="text-2xl font-extrabold mb-3">Partner with Hawkman Labs</h3>
              <p className="text-sm text-white/80 max-w-xl mx-auto mb-6 leading-relaxed">
                Empower your organization, students, or staff with custom training modules, curricula integrations, and technology workshops.
              </p>
              <button 
                onClick={() => setActiveTab('contact')}
                className="bg-white hover:bg-white/90 text-site-primary px-8 py-3.5 rounded-xl text-xs font-bold uppercase transition-all shadow-md active:scale-95"
              >
                Inquire for Partnerships
              </button>
            </div>
          </div>
        )}

        {/* 3. CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-in fade-in duration-300">
            {/* Left - Contact form */}
            <div className="lg:col-span-7 bg-site-bg border border-site-accent/70 rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold mb-2">Send a Message</h2>
              <p className="text-xs font-semibold opacity-75 mb-6">Reach out to our team for support, partnerships, media inquiries, or general questions.</p>

              {isContactSubmitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle className="w-10 h-10 mx-auto text-emerald-500 animate-bounce" />
                  <h4 className="font-extrabold">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-400/80">Thank you for reaching out. A team member will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-site-text/60 mb-2">Name</label>
                      <input 
                        type="text" 
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-site-accent/20 border border-site-accent/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-site-primary text-site-text" 
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-site-text/60 mb-2">Email</label>
                      <input 
                        type="email" 
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-site-accent/20 border border-site-accent/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-site-primary text-site-text" 
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-site-text/60 mb-2">Inquiry Subject</label>
                    <select 
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full bg-site-accent/20 border border-site-accent/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-site-primary text-site-text"
                    >
                      <option value="Partnership">Partnerships & Sponsorships</option>
                      <option value="Support">Student Support / Technical help</option>
                      <option value="Media">Media Inquiry</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-site-text/60 mb-2">Message</label>
                    <textarea 
                      rows="5" 
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-site-accent/20 border border-site-accent/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-site-primary text-site-text" 
                      placeholder="Type your message here..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-site-primary hover:bg-site-primary/95 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Submit Message
                  </button>
                </form>
              )}
            </div>

            {/* Right - Contact info & Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-site-accent/25 border border-site-accent/80 rounded-3xl p-6 space-y-6">
                <h3 className="font-extrabold text-lg">Contact Information</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-site-primary/10 text-site-primary flex items-center justify-center shrink-0 border border-site-primary/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-site-text/50 uppercase tracking-widest">Office Location</h4>
                    <p className="text-[14px] font-extrabold">Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-site-primary/10 text-site-primary flex items-center justify-center shrink-0 border border-site-primary/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-site-text/50 uppercase tracking-widest">General Enquiries</h4>
                    <a href="mailto:info@hawkmanlabs.com" className="text-[14px] font-extrabold hover:underline">info@hawkmanlabs.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-site-primary/10 text-site-primary flex items-center justify-center shrink-0 border border-site-primary/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-site-text/50 uppercase tracking-widest">Business Calls</h4>
                    <p className="text-[14px] font-extrabold">+233 24 000 0000</p>
                  </div>
                </div>
              </div>

              <div className="bg-site-bg border border-site-accent/60 p-6 rounded-2xl text-center">
                <Building className="w-8 h-8 text-site-primary mx-auto mb-3" />
                <h4 className="font-bold mb-1">Corporate Partnerships</h4>
                <p className="text-xs font-semibold opacity-70 leading-relaxed">Discuss tailor-made training formats, university tie-ups, or hiring opportunities for our graduates.</p>
              </div>
            </div>
          </div>
        )}

        {/* 4. CAREERS VIEW */}
        {activeTab === 'careers' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold mb-4">Careers at Hawkman Labs</h2>
              <p className="text-[16px] font-medium opacity-80 leading-relaxed">
                Explore opportunities to join the Hawkman Labs team and help shape the future of AI learning.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Jobs List */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-bold mb-4">Open Roles</h3>
                {[
                  { title: "AI Curriculum Developer", type: "Full-Time (Remote / Ghana)", desc: "Lead the creation of our advanced prompt engineering course modules and hands-on laboratory content." },
                  { title: "Full-Stack Engineer", type: "Full-Time (Accra, Hybrid)", desc: "Maintain and scale our learning portal features, API documentation, and interactive playground code." },
                  { title: "Community Lead", type: "Contract (Ghana, Remote)", desc: "Grow our AI community ecosystem, organizing training events, student workshops, and online discussions." },
                ].map((job, i) => (
                  <div key={i} className="bg-site-bg border border-site-accent/70 p-6 rounded-2xl shadow-2xs hover:shadow-sm hover:border-site-primary/50 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-[16px] font-extrabold text-site-text mb-1 leading-snug">{job.title}</h4>
                        <span className="text-[10px] font-bold text-site-primary uppercase tracking-widest bg-site-accent/40 border border-site-accent/80 px-2 py-0.5 rounded-full shrink-0">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-xs font-semibold opacity-70 leading-relaxed mt-2">{job.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right - Spontaneous CV submission */}
              <div className="lg:col-span-5 bg-site-bg border border-site-accent/70 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Submit General Application</h3>
                <p className="text-xs font-semibold opacity-75 mb-6">Don't see a matching role? Drop your details and CV here. We are always looking for smart minds.</p>

                {isCareerSubmitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle className="w-10 h-10 mx-auto text-emerald-500 animate-bounce" />
                    <h4 className="font-extrabold">Application Submitted!</h4>
                    <p className="text-xs text-emerald-400/80">Our recruitment team will analyze your CV and reach out if a spot opens up.</p>
                  </div>
                ) : (
                  <form onSubmit={handleCareerSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-site-text/60 mb-2">Name</label>
                      <input 
                        type="text" 
                        required
                        value={careerForm.name}
                        onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })}
                        className="w-full bg-site-accent/20 border border-site-accent/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-site-primary text-site-text" 
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-site-text/60 mb-2">Email</label>
                      <input 
                        type="email" 
                        required
                        value={careerForm.email}
                        onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                        className="w-full bg-site-accent/20 border border-site-accent/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-site-primary text-site-text" 
                        placeholder="you@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-site-text/60 mb-2">Department Interests</label>
                      <select 
                        value={careerForm.role}
                        onChange={(e) => setCareerForm({ ...careerForm, role: e.target.value })}
                        className="w-full bg-site-accent/20 border border-site-accent/70 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-site-primary text-site-text"
                      >
                        <option value="AI Educator">AI Training & Education</option>
                        <option value="Software Engineer">Software Engineering</option>
                        <option value="Marketing & Ops">Operations & Community Management</option>
                        <option value="Other">Other Roles</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-site-text/60 mb-2">Resume / CV</label>
                      <div className="border border-dashed border-site-accent/90 rounded-xl p-4 flex flex-col items-center justify-center bg-site-accent/10">
                        <Upload className="w-5 h-5 text-site-text/60 mb-1" />
                        <span className="text-[10px] font-bold opacity-75">Click to choose CV file (PDF/Word)</span>
                        <input 
                          type="file" 
                          required
                          className="opacity-0 absolute w-full h-full cursor-pointer max-w-[150px] hidden" 
                          id="file-cv" 
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-site-primary hover:bg-site-primary/95 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      Apply Instantly
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default CompanyPage;
