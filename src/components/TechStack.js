import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt } from 'react-icons/fa';
import '../App.css';

const techs = [
  { name: 'HTML', Icon: FaHtml5 },
  { name: 'CSS', Icon: FaCss3Alt },
  { name: 'JavaScript', Icon: FaJs },
  { name: 'Bootstrap', Icon: FaBootstrap },
  { name: 'React', Icon: FaReact },
  { name: 'Git', Icon: FaGitAlt },
];

const TechStack = () => {
  return (
    <section className="section tech-stack-section" id="tech" data-aos="fade-up" aria-labelledby="tech-title">
      <h2 id="tech-title">Tech Stack</h2>
      <ul className="tech-list">
        {techs.map(({ name, Icon }) => (
          <li key={name} className="tech-item">
            <span className="tech-icon" aria-hidden="true"><Icon /></span>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
