import React, { useState, useEffect } from 'react';
import { SectionId, ServiceItem } from '../types';
import { Cpu, Cog, ShoppingCart, BarChart3, ArrowRight, X, CheckCircle2, Zap, Trophy } from 'lucide-react';

const services: ServiceItem[] = [
  {
    id: 's1',
    title: 'Automotive & Industrial Parts',
    description: 'Comprehensive catalogue of alternative parts including child parts for complex assemblies. We find the exact fit for your machinery specifications.',
    iconName: 'Cog',
    details: [
      'Precision machined engine components & transmission parts',
      'High-grade hydraulic pumps, valves, and seals',
      'Industrial fasteners, bearings, and suspension kits',
      'Heavy-duty filtration systems and gaskets'
    ],
    benefits: [
      'ISO/TS 16949 Certified Supplier Network',
      'Strict material composition analysis',
      '20-40% Cost Reduction vs OEM pricing'
    ],
    caseStudy: {
      title: 'Logistics Fleet Maintenance',
      result: 'Sourced validated alternative suspension kits for a fleet of 50 trucks, reducing annual maintenance spend by ₹15 Lakhs.'
    }
  },
  {
    id: 's2',
    title: 'Electronics Components',
    description: 'Sourcing hard-to-find and alternative electronic components to navigate shortages and reduce unit costs for PCBAs.',
    iconName: 'Cpu',
    details: [
      'FPGA & Microcontrollers (MCU) sourcing',
      'Power Management ICs (PMIC) & MOSFETs',
      'Passive components (MLCC, Resistors) allocation',
      'Connectors, sensors, and electromechanical parts'
    ],
    benefits: [
      'Global authorized distributor access',
      'Cross-reference for EOL (End of Life) parts',
      'Anti-counterfeit lab testing validation'
    ],
    caseStudy: {
      title: 'IoT Device Manufacturer',
      result: 'Located 50,000 units of a critical shortage PMIC within 72 hours, preventing a production line stoppage for a smart meter client.'
    }
  },
  {
    id: 's3',
    title: 'OEM Sourcing',
    description: 'Direct connections with Original Equipment Manufacturers to secure leads and negotiate competitive pricing for bulk orders.',
    iconName: 'ShoppingCart',
    details: [
      'Factory identification and capability auditing',
      'Direct price negotiation & contract terms',
      'Custom tooling and mold coordination',
      'Pre-shipment quality control inspections'
    ],
    benefits: [
      'Factory-direct pricing (bypassing traders)',
      'Custom branding and white-labeling options',
      'Lower MOQs through volume aggregation'
    ],
    caseStudy: {
      title: 'Auto Tier-2 Supplier',
      result: 'Established a direct supply chain for aluminum casting blanks, eliminating two layers of middlemen and improving margins by 18%.'
    }
  },
  {
    id: 's4',
    title: 'BOM Cost Optimization',
    description: 'Strategic analysis of your Bill of Materials to identify cost-saving opportunities through alternative sourcing and vendor consolidation.',
    iconName: 'BarChart3',
    details: [
      'Line-by-line BOM lifecycle analysis',
      'Approved Vendor List (AVL) expansion',
      'Specification downgrading (where performance allows)',
      'Supply chain risk assessment'
    ],
    benefits: [
      'Significant improvement in gross margins',
      'Diversified supply chain reducing risk',
      'Long-term price stability contracts'
    ],
    caseStudy: {
      title: 'EV Startup',
      result: 'Optimized the Battery Management System (BMS) BOM, utilizing alternative connectors and passives to reduce unit cost from $45 to $32.'
    }
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Cog: Cog,
  Cpu: Cpu,
  ShoppingCart: ShoppingCart,
  BarChart3: BarChart3
};

interface ServicesProps {
  onRequestService: (serviceName: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onRequestService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <section id={SectionId.SERVICES} className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Comprehensive Sourcing Solutions</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            From individual components to complete BOM restructuring, we provide end-to-end solutions tailored to your manufacturing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.iconName];
            return (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full">
                <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-slate-50">
                   <button 
                    onClick={() => setSelectedService(service)}
                    className="text-slate-500 hover:text-sky-600 font-medium text-sm transition-colors"
                  >
                    Details
                  </button>
                  <button 
                    onClick={() => onRequestService(service.title)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors shadow-sm"
                  >
                    Request Service <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner within Services */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to reduce your production costs?</h3>
              <p className="text-slate-300">
                Send us your BOM today for a complimentary preliminary analysis. We often identify 15-20% savings opportunities within 48 hours.
              </p>
            </div>
            <button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 py-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-500 transition-colors whitespace-nowrap shadow-lg shadow-sky-600/30"
            >
              Get Free Analysis
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 p-6 flex items-start justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                  {React.createElement(IconMap[selectedService.iconName], { size: 24, strokeWidth: 2 })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedService.title}</h3>
                  <p className="text-slate-500 text-sm">Service Details</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8">
              
              {/* Technical Capabilities */}
              <div>
                <h4 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Cog size={16} /> Technical Capabilities
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.details?.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <CheckCircle2 size={16} className="text-sky-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Zap size={16} /> Key Benefits
                </h4>
                <ul className="space-y-3">
                  {selectedService.benefits?.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Case Study */}
              {selectedService.caseStudy && (
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3 text-sky-300 text-xs font-bold uppercase tracking-wider">
                      <Trophy size={14} /> Case Study
                    </div>
                    <h5 className="text-xl font-bold mb-2">{selectedService.caseStudy.title}</h5>
                    <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-sky-500 pl-4">
                      "{selectedService.caseStudy.result}"
                    </p>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="pt-4 flex justify-end">
                <button 
                  onClick={() => {
                    onRequestService(selectedService.title);
                    setSelectedService(null);
                  }}
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-sky-600/20"
                >
                  Request this Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;