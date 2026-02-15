import React from 'react';
import { SectionId } from '../types';
import { MapPin, Target, ShieldCheck, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white relative overflow-hidden">
      {/* Visual Pattern Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
           <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Who We Are</span>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Your Strategic Partner in Doddaballapur</h2>
           <p className="text-slate-600 text-lg">
             Based in the industrial hub region, we bridge the gap between expensive OEM dependency and reliable, cost-effective alternatives.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Dot Pattern Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#0ea5e9 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" alt="Advanced Electronics Component Sourcing" className="rounded-xl shadow-lg w-full h-40 sm:h-64 object-cover transform translate-y-4" />
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" alt="Global Warehouse and Logistics" className="rounded-xl shadow-lg w-full h-40 sm:h-64 object-cover -translate-y-4" />
            </div>

            {/* Floating Stat Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 whitespace-nowrap z-10">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Growth Partner</p>
                <p className="text-sm font-bold text-slate-900">Scaling Supply Chains</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Locally Rooted, Globally Connected</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Operating from Doddaballapur, ViniThrive Global leverages local expertise while maintaining a global network of trusted suppliers. Being a home-based startup allows us to keep our overheads low—savings we pass directly to you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <Target size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Mission: Cost Optimization</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our primary goal is to help businesses thrive by optimizing their Bill of Materials. We analyze every component to find high-quality alternatives that reduce your bottom line without sacrificing performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <ShieldCheck size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Quality & Reliability</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We understand that 'alternative' shouldn't mean 'inferior'. Every part we source undergoes rigorous vetting to ensure it meets automotive and industrial standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;