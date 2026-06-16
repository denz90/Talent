import React from 'react';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = ({ onBack }) => {
  const posts = [
    {
      title: "The Future of AI in Education: What's Next?",
      excerpt: "Explore how generative AI is transforming personalized learning paths and empowering educators worldwide to do more with less.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
      date: "April 24, 2026",
      author: "Dr. Sarah Hawkman",
      category: "Thought Leadership"
    },
    {
      title: "10 ChatGPT Prompts Every Teacher Should Know",
      excerpt: "Save hours of lesson planning with these expertly crafted prompts designed specifically for K-12 educators and professors.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
      date: "April 20, 2026",
      author: "Michael Chen",
      category: "Guides"
    },
    {
      title: "Announcing the New Enterprise Analytics Dashboard",
      excerpt: "We're thrilled to release our most requested feature for institutional partners. Dive deep into student engagement metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      date: "April 15, 2026",
      author: "Product Team",
      category: "Product Updates"
    }
  ];

  return (
    <div className="min-h-screen bg-site-bg font-sans pb-24">
      {/* Blog Header */}
      <div className="bg-brand-dark pt-20 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <button 
            onClick={onBack}
            className="flex items-center text-white/70 hover:text-white transition-colors mb-8 mx-auto text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">HawkmanLabs Blog</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">Insights, updates, and deep dives into the intersection of AI and modern education.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        {/* Featured Post */}
        <div className="bg-site-bg rounded-3xl overflow-hidden shadow-xl border border-site-accent flex flex-col lg:flex-row mb-16">
          <div className="lg:w-1/2 h-64 lg:h-auto relative">
            <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {posts[0].category}
            </div>
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center space-x-4 text-sm text-site-text/80 mb-4 font-medium">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {posts[0].date}</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {posts[0].author}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4 leading-tight">
              {posts[0].title}
            </h2>
            <p className="text-site-text/80 text-lg mb-8 leading-relaxed">
              {posts[0].excerpt}
            </p>
            <button className="flex items-center text-brand-primary font-bold hover:text-brand-dark transition-colors group self-start">
              Read Full Article <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, idx) => (
            <div key={idx} className="bg-site-bg rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-site-accent transition-all flex flex-col">
              <div className="h-48 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-site-bg/90 backdrop-blur text-brand-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs text-site-text/80 mb-3 font-medium">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-site-text/80 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-brand-primary font-bold hover:text-brand-dark transition-colors text-sm group">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
