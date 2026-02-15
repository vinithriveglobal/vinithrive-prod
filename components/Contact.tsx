import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

interface ContactProps {
  initialMessage?: string;
}

const Contact: React.FC<ContactProps> = ({ initialMessage = '' }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Update message when initialMessage prop changes
  useEffect(() => {
    if (initialMessage) {
      setFormState(prev => ({
        ...prev,
        message: initialMessage
      }));
    }
  }, [initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Configured for +91 85538 11234
    const phoneNumber = "918553811234";
    const text = `*New Inquiry from ViniThrive Website*\n\n` +
      `*Name:* ${formState.name}\n` +
      `*Email:* ${formState.email}\n` +
      `*Company:* ${formState.company || 'N/A'}\n\n` +
      `*Message:*\n${formState.message}`;
      
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 bg-white relative">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 skew-y-2 transform origin-top-left -z-10"></div>
       
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Info */}
          <div className="relative">
            <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Let's Optimize Your Supply Chain</h2>
            <p className="text-slate-600 text-lg mb-8 relative z-10">
              Whether you need a specific part or a complete BOM overhaul, our team in Doddaballapur is ready to assist.
            </p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center text-sky-600 shadow-md flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Our Office</h4>
                  <a 
                    href="https://www.google.com/maps?q=13.345061,77.540390"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-sky-600 transition-colors group block"
                  >
                    <span className="block">Doddaballapur, Karnataka</span>
                    <span className="block">India</span>
                    <span className="text-sm text-sky-600 mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View on Google Maps <ExternalLink size={12} />
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center text-sky-600 shadow-md flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:contact@vinithriveglobal.com" className="text-sky-600 hover:text-sky-700 transition-colors">contact@vinithriveglobal.com</a>
                    <a href="mailto:sales@vinithriveglobal.com" className="text-sky-600 hover:text-sky-700 transition-colors">sales@vinithriveglobal.com</a>
                    <a href="mailto:purchase@vinithriveglobal.com" className="text-sky-600 hover:text-sky-700 transition-colors">purchase@vinithriveglobal.com</a>
                  </div>
                  <p className="text-slate-500 text-sm mt-1">We respond within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center text-sky-600 shadow-md flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Call Us</h4>
                  <a href="tel:+918553811234" className="block text-sky-600 hover:text-sky-700 transition-colors">
                    +91 85538 11234
                  </a>
                  <a href="tel:+919187442748" className="block text-sky-600 hover:text-sky-700 transition-colors">
                    +91 91874 42748
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl relative z-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Redirecting to WhatsApp...</h4>
                <p className="text-slate-600">Please complete sending the message in the new tab.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                    placeholder="Your Business Ltd."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none resize-none bg-slate-50 focus:bg-white"
                    placeholder="Tell us about the parts you need sourced..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Map - Full Width Container */}
        <div className="w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative z-10">
             <iframe 
                src="https://maps.google.com/maps?q=13.345061,77.540390&hl=en&z=14&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ViniThrive Global Location"
              ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;