import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-start gap-40 text-left">
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-[11px]">Product</h4>
          <ul className="space-y-4 text-[13px] font-bold text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-[11px]">Learning</h4>
          <ul className="space-y-4 text-[13px] font-bold text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
