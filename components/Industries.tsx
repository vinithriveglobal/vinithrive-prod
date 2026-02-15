import React from 'react';
import { Car, Factory, Zap, Cpu } from 'lucide-react';

const industries = [
  {
    title: "Automotive",
    icon: Car,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
    desc: "OEM-grade components for commercial and passenger vehicles."
  },
  {
    title: "Industrial Automation",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    desc: "Heavy machinery parts, hydraulics, and precision gearing."
  },
  {
    title: "Consumer Electronics",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2000&auto=format&fit=crop",
    desc: "Semiconductors, PCBs, and connectors for mass production."
  },
  {
    title: "Green Energy",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop",
    desc: "Components for solar inverters, EVs, and battery systems."
  }
];

const Industries: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
           <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">Industries We Serve</span>
           <h2 className="text-3xl md:text-4xl font-bold mt-2">Powering Key Sectors</h2>
           <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
             Our sourcing capabilities span across critical industries, delivering precision and reliability where it matters most.
           </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl">
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900/90 group-hover:via-slate-900/40 group-hover:to-slate-900/80 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 pb-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;