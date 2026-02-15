import React from 'react';
import Logo from './Logo';
import { SectionId } from '../types';
import { Linkedin, Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Logo variant="light" className="mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              ViniThrive Global is your partner for alternative parts sourcing and BOM optimization. High quality, lower costs.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/vinithrive-global" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-[#0077b5] transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-white group"
                aria-label="LinkedIn"
              >
                 <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/vinithriveglobal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-pink-600 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-white group"
                aria-label="Instagram"
              >
                 <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => document.getElementById(SectionId.HOME)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-sky-500 transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-sky-500 transition-colors">About Us</button></li>
              <li><button onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-sky-500 transition-colors">Services</button></li>
              <li><button onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-sky-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition-colors cursor-default">Automotive Parts</li>
              <li className="hover:text-white transition-colors cursor-default">Industrial Sourcing</li>
              <li className="hover:text-white transition-colors cursor-default">Electronics Components</li>
              <li className="hover:text-white transition-colors cursor-default">BOM Optimization</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h4 className="text-white font-bold mb-6">Contact</h4>
             <ul className="space-y-3 text-sm">
               <li>
                 <a 
                   href="https://www.google.com/maps?q=13.345061,77.540390" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-start gap-2 hover:text-sky-400 transition-colors"
                 >
                   <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                   <span>Doddaballapur, India</span>
                 </a>
               </li>
               <li><a href="mailto:contact@vinithriveglobal.com" className="hover:text-sky-400 transition-colors">contact@vinithriveglobal.com</a></li>
               <li><a href="tel:+918553811234" className="hover:text-sky-400 transition-colors">+91 85538 11234</a></li>
               <li><a href="tel:+919187442748" className="hover:text-sky-400 transition-colors">+91 91874 42748</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} ViniThrive Global. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;