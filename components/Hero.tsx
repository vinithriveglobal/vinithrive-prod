import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingDown, Settings, CheckCircle2, Cpu, Truck } from 'lucide-react';
import { SectionId } from '../types';

const slides = [
  {
    id: 1,
    badge: "Sourcing Excellence",
    titleLine1: "Optimize Costs.",
    titleLine2: "Secure Quality.",
    titleGradient: "Accelerate Growth.",
    gradientClass: "from-red-600 via-amber-500 to-green-600",
    description: "ViniThrive Global connects you with top-tier alternative automotive and industrial parts. We specialize in reducing your Bill of Materials (BOM) costs without compromising on quality.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop",
    imageLabel: "Precision Engineering",
    imageSubLabel: "Industrial & Automotive Solutions",
    floatingCard: {
      icon: TrendingDown,
      title: "Cost Reduction",
      text: "We analyze your current BOM and find high-quality alternatives."
    }
  },
  {
    id: 2,
    badge: "Global Network",
    titleLine1: "Hard-to-Find.",
    titleLine2: "Obsolete Parts.",
    titleGradient: "Sourced Rapidly.",
    gradientClass: "from-blue-600 via-indigo-500 to-purple-600",
    description: "Navigate component shortages with confidence. We track down hard-to-find electronic components and semiconductors to keep your production lines running smoothly.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1740&auto=format&fit=crop",
    imageLabel: "Advanced Electronics",
    imageSubLabel: "PCBAs & Semiconductors",
    floatingCard: {
      icon: Cpu,
      title: "Component Sourcing",
      text: "Access to global inventory for scarce and allocated parts."
    }
  },
  {
    id: 3,
    badge: "End-to-End Logistics",
    titleLine1: "Factory Direct.",
    titleLine2: "Customs Cleared.",
    titleGradient: "Delivered On Time.",
    gradientClass: "from-orange-500 via-amber-500 to-yellow-500",
    description: "From factory floor to your door, we handle the entire logistics chain. Experience hassle-free procurement with our end-to-end supply chain management solutions.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1740&auto=format&fit=crop",
    imageLabel: "Global Logistics",
    imageSubLabel: "Seamless Supply Chain",
    floatingCard: {
      icon: Truck,
      title: "Logistics Managed",
      text: "We handle import/export documentation and final delivery."
    }
  }
];

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Carousel Timer
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <section id={SectionId.HOME} className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      
      {/* Background Graphic Elements - Static */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 z-0"
        style={{ 
          transform: `translate3d(5rem, ${scrollY * 0.2}px, 0) skewX(-12deg)` 
        }}
      ></div>
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl"
        style={{ 
          transform: `translate3d(0, ${scrollY * 0.1}px, 0)` 
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            
            {/* Carousel Content Wrapper using Grid Overlap for smooth transitions */}
            <div className="grid grid-cols-1 grid-rows-1">
              {slides.map((slide, idx) => (
                <div 
                  key={slide.id}
                  className={`col-start-1 row-start-1 transition-all duration-1000 ease-in-out transform ${
                    idx === currentSlide 
                      ? 'opacity-100 translate-y-0 z-10' 
                      : 'opacity-0 translate-y-4 pointer-events-none z-0'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wide mb-4 lg:mb-6">
                    <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
                    {slide.badge}
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 lg:mb-6">
                    {slide.titleLine1} <br />
                    <span className="text-sky-600">{slide.titleLine2}</span> <br />
                    <span className={`bg-gradient-to-r ${slide.gradientClass} bg-clip-text text-transparent animate-gradient pb-2`}>
                      {slide.titleGradient}
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-slate-600 mb-6 lg:mb-8 leading-relaxed max-w-lg min-h-[4rem] sm:min-h-[5rem]">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Static Buttons Area (Positioned below the grid overlap) */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <button onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sky-600 text-white rounded-full font-medium hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/25 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                Start Optimizing
                <ArrowRight size={18} />
              </button>
              <button onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({behavior: 'smooth'})} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto">
                Explore Services
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 mt-8 mb-8 relative z-20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-8 bg-sky-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Static Stats Area */}
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-6 border-t border-slate-200 pt-8 relative z-20">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-slate-900 font-bold text-xl sm:text-2xl mb-1">
                  <TrendingDown className="text-sky-600 w-5 h-5 sm:w-6 sm:h-6" />
                  <span>30%</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wide">Avg. Savings</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-slate-900 font-bold text-xl sm:text-2xl mb-1">
                  <Settings className="text-sky-600 w-5 h-5 sm:w-6 sm:h-6" />
                  <span>100+</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wide">Categories</p>
              </div>
               <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-slate-900 font-bold text-xl sm:text-2xl mb-1">
                  <CheckCircle2 className="text-sky-600 w-5 h-5 sm:w-6 sm:h-6" />
                  <span>100%</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wide">Quality</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Floating Card */}
          <div 
            className="relative mt-12 lg:mt-0 mb-8 lg:mb-0"
            style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }}
          >
            {/* Grid Overlap for Images */}
            <div className="grid grid-cols-1 grid-rows-1 relative z-10">
              {slides.map((slide, idx) => {
                 const FloatingIcon = slide.floatingCard.icon;
                 return (
                  <div 
                    key={slide.id}
                    className={`col-start-1 row-start-1 transition-all duration-1000 ease-in-out ${
                      idx === currentSlide 
                        ? 'opacity-100 z-10' 
                        : 'opacity-0 z-0'
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative bg-slate-900">
                      <img 
                        src={slide.image}
                        alt={slide.imageLabel}
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white pr-4">
                        <p className="font-semibold text-lg">{slide.imageLabel}</p>
                        <p className="text-slate-200 text-sm">{slide.imageSubLabel}</p>
                      </div>
                    </div>

                    {/* Floating Card - Includes in transition */}
                    <div 
                      className="absolute -bottom-6 left-4 right-4 md:right-auto md:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl z-30 md:max-w-xs border border-slate-100"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-green-50 rounded-lg text-green-600 shrink-0">
                          <FloatingIcon size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm sm:text-base">{slide.floatingCard.title}</p>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1">{slide.floatingCard.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                 );
              })}
            </div>
            
            {/* Background decoration for image - Static */}
            <div 
              className="absolute -top-4 -right-4 w-full h-full border-2 border-sky-600/20 rounded-2xl z-0"
              style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;