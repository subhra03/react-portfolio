import React, { useEffect } from 'react';
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
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

  
    return () => AOS.refresh();
  }, []);

  return (
    <div className="App">
      <SocialLinks />
      <div className="animate__animated animate__fadeIn">
        <Hero />
        <ContactModal />
        <About />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}

export default App;
