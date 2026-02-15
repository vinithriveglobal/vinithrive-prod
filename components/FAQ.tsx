import React, { useState } from 'react';
import { SectionId } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "Our MOQs are flexible. While factories often have high MOQs, we aggregate orders from multiple clients or negotiate special terms for startups, often allowing for smaller batches to test the market."
  },
  {
    question: "How do you ensure the quality of alternative parts?",
    answer: "We follow a strict 3-step validation process: 1) Factory Audit, 2) Pre-production Sample Approval, and 3) Pre-shipment Inspection. We provide material certificates and test reports with every batch."
  },
  {
    question: "Can you source parts that are obsolete or End-of-Life (EOL)?",
    answer: "Yes. We specialize in finding cross-reference parts and have access to excess inventory networks globally to locate hard-to-find or EOL electronic components."
  },
  {
    question: "Do you handle shipping and customs?",
    answer: "Absolutely. We offer Incoterms ranging from FOB to DDP (Delivered Duty Paid). We handle all the paperwork, customs clearance, and logistics so the parts arrive directly at your doorstep."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={SectionId.FAQ} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Header */}
          <div className="lg:col-span-5">
            <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">Confidence in Every Order</h2>
            <p className="text-slate-600 text-lg mb-8">
              Sourcing from a new partner involves trust. Here are answers to the most common questions we get from new clients.
            </p>
            <button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
              className="hidden lg:inline-flex px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              Have more questions?
            </button>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 ${
                  openIndex === index ? 'border-sky-100 shadow-md' : 'border-slate-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-sky-700' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-sky-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="lg:hidden mt-8 text-center">
              <button 
                onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
                className="inline-flex px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                Have more questions?
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;