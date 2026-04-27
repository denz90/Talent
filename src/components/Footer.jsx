import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
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
      </div>
    </footer>
  );
};

export default Footer;
