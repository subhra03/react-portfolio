import React from 'react';
import { techStack } from '../data/techStack';
import '../App.css';

const TechStack = () => {
  return (
    <section className="section tech-stack-section" id="tech" data-aos="fade-up" aria-labelledby="tech-title">
      <div className="section-heading">
        <span className="section-kicker">Tools I use</span>
        <h2 className="section-title" id="tech-title">Tech Stack</h2>
        <p className="section-subtitle">
          Core technologies I use to build responsive, maintainable frontend projects.
        </p>
      </div>
      <ul className="tech-list">
        {techStack.map(({ name, Icon, color }) => (
          <li key={name} className="tech-item" style={{ '--tech-color': color }}>
            <span className="tech-icon" aria-hidden="true"><Icon /></span>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
