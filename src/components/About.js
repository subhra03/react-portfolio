import React from 'react';
import { FaCode, FaLayerGroup, FaMobileAlt, FaRocket } from 'react-icons/fa';
import '../App.css';

const focusAreas = [
  { title: 'Frontend UI', description: 'Building clean React interfaces with reusable components.', Icon: FaCode },
  { title: 'Responsive Design', description: 'Making layouts feel natural across mobile and desktop.', Icon: FaMobileAlt },
  { title: 'Performance', description: 'Optimizing images, structure, and interaction details.', Icon: FaRocket },
];

const About = () => {
  return (
    <section className="about-section" id="about" data-aos="fade-up" aria-labelledby="about-title">
      <div className="section-heading">
        <span className="section-kicker">Get to know me</span>
        <h2 className="section-title" id="about-title">About Me</h2>
        <p className="section-subtitle">
          I build responsive React experiences with a focus on clarity, speed, and practical user flows.
        </p>
      </div>

      <div className="about-content">
        <div className="about-copy">
          <p>
            I'm Subhramoy, a frontend developer focused on turning ideas into polished web interfaces.
            I enjoy working with HTML, CSS, JavaScript, and React to create websites that look clean,
            load quickly, and are easy to use.
          </p>
          <p>
            My current focus is improving component structure, accessibility, and responsive design so
            every project feels professional on real devices.
          </p>

          <div className="about-tags" aria-label="Frontend strengths">
            <span>Clean UI</span>
            <span>React Components</span>
            <span>Responsive Layouts</span>
            <span>Accessible Forms</span>
          </div>
        </div>

        <div className="about-card" aria-label="Frontend development focus">
          <div className="about-card-header">
            <FaLayerGroup aria-hidden="true" />
            <span>What I Focus On</span>
          </div>

          <div className="about-focus-list">
            {focusAreas.map(({ title, description, Icon }) => (
              <article className="about-focus-item" key={title}>
                <span className="about-focus-icon" aria-hidden="true"><Icon /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-stats">
            <div>
              <strong>6+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>React</strong>
              <span>Main Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
