import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ToolCard from './components/ToolCard';
import LearningPathCard from './components/LearningPathCard';
import TestimonialCard from './components/TestimonialCard';
import Footer from './components/Footer';
import ToolDetailPage from './components/ToolDetailPage';
import {
  MessageSquare,
  Image as ImageIcon,
  Code2,
  Cpu,
  Zap,
  Compass,
  Trophy,
  MessageCircle,
  BookOpen,
  Search,
  Sparkles
} from 'lucide-react';

import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import ProfileSettingsPage from './components/ProfileSettingsPage';
import BeginnerPage from './components/BeginnerPage';
import PathSelectionPage from './components/PathSelectionPage';
import LearningPage from './components/LearningPage';

const TOOLS_DATA = {
  chatgpt: {
    title: "ChatGPT: Conversational AI & Brainstorming",
    icon: MessageCircle,
    whatItIs: "ChatGPT is a versatile AI assistant that helps educators brainstorm lesson ideas, draft emails, and create interactive learning activities.",
    useFor: ["Lesson planning and brainstorming", "Drafting student feedback", "Generating creative writing prompts"],
    prompt: "Act as a pedagogical expert and help me design a 45-minute lesson plan on renewable energy for 8th graders. Include a hook, a hands-on activity, and an exit ticket.",
    quote: "How could this accelerate your lesson planning process?",
    image: "https://images.unsplash.com/photo-1673187115862-d61e68b1d289?auto=format&fit=crop&q=80&w=2000"
  },
  claude_ai: {
    title: "Claude: Reading, Summarizing & Refinement",
    icon: BookOpen,
    whatItIs: "Claude is an advanced AI tool designed for deep analysis, summarizing long documents, and refining educational content for clarity and accuracy.",
    useFor: ["Summarizing policies or curriculum documents", "Refining lesson notes for clarity", "Analyzing long research papers for key takeaways"],
    prompt: "You have a long educational document. Act as an education content editor and Summarize the content into 5 key points. Keep it clear and simple for students.",
    quote: "How could this reduce your reading time and workload?",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000"
  },
  gamma_ai: {
    title: "Gamma AI: Presentation & Visual Tool",
    icon: Sparkles,
    whatItIs: "Gamma AI helps educators turn ideas, text, or prompts into clean presentations, lesson slides, and visual content instantly.",
    useFor: ["Instantly creating lesson slides", "Designing training presentations", "Generating visual summaries of complex content"],
    prompt: "You are preparing a short lesson presentation. Act as a presentation assistant and create structured slide content for 5 slides about the Solar System. Simple and professional.",
    quote: "How does this change the way you prepare presentations?",
    image: "/gamma_ai_classroom_image.png"
  },
  perplexity: {
    title: "Perplexity AI: Research & Fact-Checking",
    icon: Search,
    whatItIs: "Perplexity is an AI-powered search engine that provides cited answers, perfect for academic research and verifying information quickly.",
    useFor: ["Fact-checking lesson materials", "Finding cited academic sources", "Quickly answering complex student questions"],
    prompt: "Find the most recent statistics on global forest coverage and provide citations from reputable environmental organizations.",
    quote: "How does citing sources change your research confidence?",
    image: "/perplexityAI.png"
  }
};
const App = () => {
  const [view, setView] = useState('path_selection');
  const [activeCourse, setActiveCourse] = useState(null);
  const [currentTool, setCurrentTool] = useState(() => {
    return localStorage.getItem('talent_oasis_tool') || null;
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('talent_oasis_theme') || 'light';
  });

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem('talent_oasis_view', view);
  }, [view]);

  useEffect(() => {
    if (currentTool) {
      localStorage.setItem('talent_oasis_tool', currentTool);
    } else {
      localStorage.removeItem('talent_oasis_tool');
    }
  }, [currentTool]);

  useEffect(() => {
    localStorage.setItem('talent_oasis_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleNavClick = (sectionId) => {
    if (view !== 'home') {
      setView('home');
      // Use a small timeout to allow the view to switch and elements to render
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (view === 'dashboard') {
    return (
      <DashboardPage
        onLogout={() => setView('home')}
        onProfileSettings={() => setView('profile_settings')}
      />
    );
  }

  if (view === 'profile_settings') {
    return (
      <ProfileSettingsPage
        onBack={() => setView('dashboard')}
        theme={theme}
        onThemeChange={setTheme}
      />
    );
  }

  if (view === 'signup') {
    return <SignupPage onBack={(v) => setView(v === 'dashboard' ? 'dashboard' : 'home')} onLoginClick={() => setView('login')} />;
  }

  if (view === 'login') {
    return <LoginPage onBack={(v) => setView(v === 'dashboard' ? 'dashboard' : 'home')} onSignupClick={() => setView('signup')} />;
  }

  if (view === 'beginner') {
    return (
      <BeginnerPage
        onBack={() => setView('home')}
        onLogoClick={() => setView('home')}
        onNavClick={handleNavClick}
      />
    );
  }

  if (currentTool) {
    return (
      <ToolDetailPage
        tool={TOOLS_DATA[currentTool]}
        onBack={() => setCurrentTool(null)}
      />
    );
  }

  if (view === 'learning_page' && activeCourse) {
    return (
      <LearningPage
        course={activeCourse}
        onBack={() => setView('path_selection')}
        onLogout={() => setView('login')}
      />
    );
  }

  if (view === 'path_selection') {
    return (
      <PathSelectionPage
        onLogout={() => setView('login')}
        onSelectPath={(course) => {
          setActiveCourse(course);
          setView('learning_page');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar
        onSignup={() => setView('signup')}
        onLogin={() => setView('login')}
        onLogoClick={() => setView('home')}
        onNavClick={handleNavClick}
      />

      <main>
        {/* ... existing main content */}
        {/* Hero Section */}
        <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/Firefly_GeminiFlash (1).png"
              className="w-full h-full object-cover"
              alt="Hero Background"
            />
            <div className="absolute inset-0 bg-brand-primary/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/40 to-brand-dark/80"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-20">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 tracking-tight">
              Learn AI Tools That <br /> Power Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              Interactive courses, hands-on projects, and real-world applications. <br className="hidden md:block" />
              Master UX Pilot, Midjourney, UX Pilot, and 50+ AI tools.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="btn-primary">Start Learning Free</button>
              <button className="btn-secondary">Browse Courses</button>
            </div>
          </div>
        </section>

        {/* Popular AI Tools */}
        <section id="tools" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-5 tracking-tight text-brand-dark">Popular AI Tools You'll Master</h2>
              <p className="text-slate-500 font-medium">Get hands-on experience with industry-leading AI platforms</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ToolCard
                icon={MessageCircle}
                title="ChatGPT"
                description="Master prompt engineering and advanced conversations"
                onClick={() => setCurrentTool('chatgpt')}
              />
              <ToolCard
                icon={BookOpen}
                title="Claude AI"
                description="Create stunning AI-generated artwork and designs"
                onClick={() => setCurrentTool('claude_ai')}
              />
              <ToolCard
                icon={Sparkles}
                title="Gamma AI"
                description="Accelerate coding with AI-powered assistance"
                onClick={() => setCurrentTool('gamma_ai')}
              />
              <ToolCard
                icon={Search}
                title="Perplexity AI"
                description="Advanced reasoning and content generation"
                onClick={() => setCurrentTool('perplexity')}
              />
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section id="courses" className="py-32 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-5 tracking-tight text-brand-dark">Choose Your Learning Path</h2>
              <p className="text-slate-500 font-medium">Structured courses designed for your skill level and goals</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <LearningPathCard
                icon={Compass}
                title="Beginner"
                description="Start your AI journey from scratch. No prior experience needed."
                features={[
                  "Basic Prompting Techniques",
                ]}
                onClick={() => setView('beginner')}
              />
              <LearningPathCard
                icon={Zap}
                title="Intermediate"
                description="Level up your skills with advanced techniques and workflows."
                features={[
                  "Advanced Prompting",
                  "Multi-Tool Workflows",
                  "Automation Basics",
                  "Real-World Projects"
                ]}
                popular
                dark
                onClick={() => setView('path_selection')}
              />
              <LearningPathCard
                icon={Trophy}
                title="Advanced"
                description="Master AI integration and build production-ready solutions."
                features={[
                  "API Integration",
                  "Custom AI Solutions",
                  "Enterprise Workflows",
                  "AI Strategy"
                ]}
                onClick={() => setView('path_selection')}
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-5 tracking-tight text-brand-dark">Loved by Learners Worldwide</h2>
              <p className="text-slate-500 font-medium">Join thousands who've transformed their careers with AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <TestimonialCard
                quote="This platform completely changed how I approach my design work. The Midjourney course alone saved me hours every week."
                author="Sarah Chen"
                role="UI Designer"
              />
              <TestimonialCard
                quote="The hands-on projects are incredible. I went from zero AI knowledge to building automated workflows for my business."
                author="Marcus Johnson"
                role="Entrepreneur"
              />
              <TestimonialCard
                quote="Best investment in my career. The GitHub Copilot course doubled my coding productivity within a month."
                author="Emily Rodriguez"
                role="Software Engineer"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
