import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaArrowDown, FaDownload, FaMapMarkerAlt } from 'react-icons/fa';
import '../App.css';

const Hero = ({ onContactClick }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <picture>
          <source srcSet="/profile.avif" type="image/avif" />
          <source srcSet="/profile.webp" type="image/webp" />
          <img
            src="/profile.png"
            alt="Subhramoy Bhowmik"
            className="profile-img"
            width="120"
            height="120"
            decoding="async"
            fetchpriority="high"
          />
        </picture>

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

        <p className="hero-location">
          <FaMapMarkerAlt aria-hidden="true" /> India | Available for Work
        </p>

        <div className="cta-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <button type="button" onClick={onContactClick} className="btn-outline">Contact Me</button>
        </div>

        <a href="/cv.pdf" download className="download-btn" aria-label="Download Subhramoy Bhowmik resume">
          <FaDownload aria-hidden="true" /> Download Resume
        </a>

        <div className="scroll-down" aria-hidden="true">
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
