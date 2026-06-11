import React from 'react';
import Typewriter from 'typewriter-effect';
import {
  FaArrowDown,
  FaArrowRight,
  FaCheckCircle,
  FaDownload,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaRegEnvelope,
} from 'react-icons/fa';
import '../App.css';

const heroTags = ['React', 'JavaScript', 'Responsive UI'];

const heroStats = [
  { value: '6+', label: 'Projects' },
  { value: '15', label: 'Tech Tools' },
  { value: '100%', label: 'Responsive' },
];

const Hero = ({ onContactClick }) => {
  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="hero-copy">
          <h1 className="hero-title" id="hero-title" aria-label="Subhramoy React Developer">
            <span className="hero-name">Subhramoy</span>
            <span className="hero-headline">React Developer</span>
          </h1>

          <p className="hero-intro">
            Clean, responsive web apps.
          </p>

          <div className="hero-typing" aria-label="React Developer, Frontend Engineer, UI Enthusiast">
            <span>Currently</span>
            <Typewriter
              options={{
                strings: ['React Developer', 'Frontend Engineer', 'UI Enthusiast'],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <div className="hero-meta-list" aria-label="Profile details">
            <span>
              <FaMapMarkerAlt aria-hidden="true" /> India
            </span>
            <span>
              <FaCheckCircle aria-hidden="true" /> Available for Work
            </span>
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="btn">
              View Projects <FaArrowRight aria-hidden="true" />
            </a>
            <button type="button" onClick={onContactClick} className="btn-outline">
              <FaRegEnvelope aria-hidden="true" /> Contact Me
            </button>
          </div>

          <div className="hero-tag-list" aria-label="Hero tech stack">
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <a href="/cv.pdf" download className="download-btn" aria-label="Download Subhramoy Bhowmik resume">
            <FaDownload aria-hidden="true" /> Download Resume
          </a>
        </div>

        <aside className="hero-profile-card" aria-label="Developer snapshot">
          <div className="hero-profile-card-top">
            <picture className="profile-picture">
              <source srcSet="/profile.avif" type="image/avif" />
              <source srcSet="/profile.webp" type="image/webp" />
              <img
                src="/profile.png"
                alt="Subhramoy Bhowmik"
                className="profile-img"
                width="168"
                height="168"
                decoding="async"
                fetchpriority="high"
              />
            </picture>
            <span className="hero-status">
              <FaCheckCircle aria-hidden="true" /> Open to opportunities
            </span>
          </div>

          <div className="hero-profile-body">
            <h2>Subhramoy Bhowmik</h2>
            <p>React frontend developer building accessible, responsive portfolio projects.</p>
          </div>

          <div className="hero-stat-grid">
            {heroStats.map(({ value, label }) => (
              <div key={label} className="hero-stat-item">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="hero-focus-card">
            <span className="hero-focus-icon" aria-hidden="true">
              <FaLaptopCode />
            </span>
            <div>
              <strong>Current focus</strong>
              <p>Sharper UI details, accessible forms, faster project pages.</p>
            </div>
          </div>
        </aside>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll to about section">
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero;
