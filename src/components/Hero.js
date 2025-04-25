import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaDownload } from 'react-icons/fa';
import ContactModal from './ContactModal';
import '../App.css';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <img src="/profile.png" alt="Your Name" className="profile-img" />

        <h1 className="hero-title">Hi, I'm Subhramoy</h1>

        <div className="hero-typing">
          <Typewriter
            options={{
              strings: ['React Developer', 'Frontend Engineer', 'UI Enthusiast'],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>

        <p className="hero-location">📍 India | Available for Work</p>

        <div className="cta-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <button onClick={() => setShowModal(true)} className="btn-outline">Contact Me</button>
        </div>

        <a href="/cv.pdf" download className="download-btn">
          <FaDownload /> Download Resume
        </a>

        <div className="scroll-down">⬇️</div>

        {/* Modal Integration */}
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </section>
  );
};

export default Hero;
