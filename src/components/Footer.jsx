import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-brand-dark py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-start gap-40 text-left">
        <div>
          <p className="text-white text-lg font-bold">
            HawkmanLabs. 
            <br />
            <p className="text-white/50 text-sm">
              Empowering global learners with cutting-edge <br />
              courses,interavtive tools and industry-leading <br />
              resources.
            </p>
          </p>
          <div className="flex gap-4 mt-12">
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              <Icon icon="mdi:facebook" width="24" height="24" />
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              <Icon icon="mdi:twitter" width="24" height="24" />
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              <Icon icon="mdi:instagram" width="24" height="24" />
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              <Icon icon="mdi:linkedin" width="24" height="24" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-[11px]">Platform</h4>
          <ul className="space-y-3 text-[12.5px] font-bold text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-[11px]">Learning</h4>
          <ul className="space-y-3 text-[12.5px] font-bold text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">Courses Catlog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Student Stories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-[11px]">Resources</h4>
          <ul className="space-y-3 text-[12.5px] font-bold text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-[11px]">Company</h4>
          <ul className="space-y-3 text-[12.5px] font-bold text-white/70">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 pt-8 border-t border-white/10 text-[12px] text-white/50">
        <p>&copy; 2020 HawkmanLabs. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
=======
    <footer className="bg-brand-dark pt-20 pb-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16 text-left">
          
          {/* Column 1: Branding & Intro (Takes up more space) */}
          <div className="lg:col-span-2">
            {/* Replace with an actual <img /> logo in production */}
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              HawkmanLabs.
            </h3>
            <p className="text-[14px] text-white/60 mb-6 max-w-xs leading-relaxed">
              Empowering global learners with cutting-edge courses, interactive tools, and industry-leading resources.
            </p>
            {/* Mock Social Icons */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 cursor-pointer transition-colors flex items-center justify-center text-white/50 text-xs" title="Twitter">𝕏</div>
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 cursor-pointer transition-colors flex items-center justify-center text-white/50 text-xs" title="LinkedIn">in</div>
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 cursor-pointer transition-colors flex items-center justify-center text-white/50 text-xs" title="GitHub">GH</div>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="font-bold text-white/50 mb-6 uppercase tracking-widest text-[11px]">Platform</h4>
            <ul className="space-y-4 text-[14px] font-medium text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Educators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Column 3: Learning */}
          <div>
            <h4 className="font-bold text-white/50 mb-6 uppercase tracking-widest text-[11px]">Learning</h4>
            <ul className="space-y-4 text-[14px] font-medium text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Course Catalog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-bold text-white/50 mb-6 uppercase tracking-widest text-[11px]">Resources</h4>
            <ul className="space-y-4 text-[14px] font-medium text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h4 className="font-bold text-white/50 mb-6 uppercase tracking-widest text-[11px]">Company</h4>
            <ul className="space-y-4 text-[14px] font-medium text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
          <p>&copy; {new Date().getFullYear()} HawkmanLabs Inc. All rights reserved.</p>
          <div className="flex space-x-6 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>

>>>>>>> 54ca755 (Refactor API calls to use centralized API_BASE_URL and enhance Footer component layout)
      </div>
    </footer>
  );
};

export default Footer;