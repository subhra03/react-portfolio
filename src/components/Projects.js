import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import '../App.css';

const Projects = () => {
  return (
    <section className="section projects-section" id="projects" data-aos="fade-up" aria-labelledby="projects-title">
      <div className="section-heading">
        <span className="section-kicker">Selected work</span>
        <h2 className="section-title" id="projects-title">Projects</h2>
        <p className="section-subtitle">
          A collection of UI builds and React projects with live demos and source code.
        </p>
      </div>
      <div className="projects-container">
        {projects.map((proj) => (
          <article className="project-card" key={proj.title}>
            <picture className="project-picture">
              <source srcSet={`/${proj.imageBase}.avif`} type="image/avif" />
              <source srcSet={`/${proj.imageBase}.webp`} type="image/webp" />
              <img
                src={`/${proj.imageBase}.png`}
                alt={`${proj.title} preview`}
                className="project-image"
                width="1920"
                height="1080"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <h3>{proj.title}</h3>
            <p className="project-description">{proj.description}</p>

            <div className="project-stack" aria-label={`${proj.title} tech stack`}>
              {proj.stack.map((item) => (
                <span className="project-stack-item" key={item}>{item}</span>
              ))}
            </div>

            <ul className="project-features">
              {proj.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <p className="project-learning">
              <strong>Focus:</strong> {proj.learning}
            </p>

            <div className="project-actions">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View live project: ${proj.title}`}
              >
                <FaExternalLinkAlt aria-hidden="true" /> Live
              </a>
              <a
                href={proj.source}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-secondary"
                aria-label={`View source code: ${proj.title}`}
              >
                <FaGithub aria-hidden="true" /> Source
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
