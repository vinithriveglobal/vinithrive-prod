import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Industries from './components/Industries';
import PromoVideo from './components/PromoVideo';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SectionId } from './types';

function App() {
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const handleRequestService = (serviceName: string) => {
    setPrefilledMessage(`I am interested in learning more about your ${serviceName} services.`);
    const contactSection = document.getElementById(SectionId.CONTACT);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <PromoVideo />
        <Industries />
        <Process />
        <Services onRequestService={handleRequestService} />
        <FAQ />
        <Contact initialMessage={prefilledMessage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;