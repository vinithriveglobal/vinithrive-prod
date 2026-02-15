import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.ABOUT, label: 'About Us' },
    { id: SectionId.SERVICES, label: 'Services' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-3'
          : 'bg-white/0 border-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-50">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(SectionId.HOME); }}>
          <Logo variant="dark" showText={false} imgHeight="h-16" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-sky-600 transition-colors shadow-lg shadow-slate-900/20"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-800 p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 origin-top z-40 ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
          }`}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left py-3 px-4 text-slate-700 hover:bg-slate-50 rounded-lg font-medium border-b border-slate-50 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="w-full mt-2 px-5 py-3 bg-slate-900 text-white font-medium rounded-lg active:bg-sky-700 shadow-lg"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;