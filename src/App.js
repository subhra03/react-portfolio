import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ContactModal from './components/ContactModal';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      disable: prefersReducedMotion,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SocialLinks />
      <main id="main-content">
        <Hero onContactClick={() => setShowContactModal(true)} />
        <About />
        <TechStack />
        <Projects />
      </main>
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
}

export default App;
