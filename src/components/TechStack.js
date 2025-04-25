import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt } from 'react-icons/fa';
import '../App.css';

const TechStack = () => {
  const techs = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Git', icon: <FaGitAlt /> },
  ];

  return (
    <section className="section tech-stack-section" id="tech" data-aos="fade-up">
      <h2>TECH STACKS</h2>
      <ul className="tech-list">
        {techs.map((tech, idx) => (
          <li key={idx} className="tech-item">
            <span className="tech-icon">{tech.icon}</span>
            {tech.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
