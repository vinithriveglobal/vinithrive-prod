import React from 'react';
import { SectionId } from '../types';
import { ClipboardList, Globe2, ShieldCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Analyze',
    description: 'We review your Bill of Materials (BOM) and technical drawings to identify high-cost components suitable for alternative sourcing.'
  },
  {
    icon: Globe2,
    title: 'Source',
    description: 'We leverage our network in India and abroad to find manufacturers who match your quality specs at a better price point.'
  },
  {
    icon: ShieldCheck,
    title: 'Validate',
    description: 'Samples are procured and rigorously tested. We verify material certificates and conduct factory audits before mass production.'
  },
  {
    icon: Truck,
    title: 'Deliver',
    description: 'We handle logistics, customs clearance, and final delivery to your warehouse, ensuring a seamless supply chain experience.'
  }
];

const Process: React.FC = () => {
  return (
    <section id={SectionId.PROCESS} className="py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Simplified Sourcing Journey</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-100 -translate-x-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-sky-500 group-hover:shadow-lg group-hover:shadow-sky-100 transition-all duration-300 relative z-10">
                     <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold border-4 border-white">
                       {index + 1}
                     </div>
                     <Icon size={28} className="text-slate-600 group-hover:text-sky-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 bg-white px-2 relative z-10">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto bg-white relative z-10">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;