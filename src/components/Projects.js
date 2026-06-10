import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import '../App.css';

const projects = [
  {
    title: 'Personal Website Portfolio UI',
    description: 'A modern and responsive personal portfolio design.',
    link: 'https://personal-website-portfolio-ui.vercel.app/',
    source: 'https://github.com/subhra03/MY-WEBSITE-PORTFOLIO-',
    imageBase: '1',
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive hero and section layout', 'Clean personal-brand presentation', 'Fast static deployment on Vercel'],
    learning: 'Practiced structuring a focused portfolio page that presents identity and work quickly.',
  },
  {
    title: 'Bike Website UI',
    description: 'A sleek UI concept for a bike showroom or dealership.',
    link: 'https://bike-website-ui.vercel.app/',
    source: 'https://github.com/subhra03/Bike-Website-UI',
    imageBase: '2',
    stack: ['React', 'CSS', 'Responsive UI'],
    features: ['Product-focused landing layout', 'Visual sections for dealership browsing', 'Mobile-friendly page composition'],
    learning: 'Worked on turning a product category into a polished marketing-style interface.',
  },
  {
    title: 'Car Rental Website UI',
    description: 'A responsive car rental landing page with search and booking-focused sections.',
    link: 'https://car-rental-website-ui.vercel.app/',
    source: 'https://github.com/subhra03/Car-Rental-Website-UI',
    imageBase: '6',
    stack: ['React', 'CSS', 'Responsive UI'],
    features: ['Car search form with pickup and drop fields', 'Strong rental service hero section', 'Clear booking-focused call to action'],
    learning: 'Practiced building a service-oriented interface where the main booking action stays easy to find.',
  },
  {
    title: 'Bootstrap Portfolio UI',
    description: 'A clean portfolio layout built using Bootstrap.',
    link: 'https://bootstrap-portfolio-ui.vercel.app/',
    source: 'https://github.com/subhra03/Bootstrap-Portfolio-UI',
    imageBase: '3',
    stack: ['Bootstrap', 'HTML', 'CSS'],
    features: ['Bootstrap grid-based layout', 'Reusable portfolio sections', 'Responsive spacing and component styling'],
    learning: 'Used Bootstrap utilities to build a portfolio faster while keeping the layout consistent.',
  },
  {
    title: 'Expense Tracker',
    description: 'A simple and functional app to track expenses.',
    link: 'https://expense-tracker-vert-eight.vercel.app/',
    source: 'https://github.com/subhra03/Expense-Tracker',
    imageBase: '4',
    stack: ['React', 'JavaScript', 'CSS'],
    features: ['Add and review expense entries', 'State-driven totals and updates', 'Simple interface for daily tracking'],
    learning: 'Practiced state management and user input handling for a practical finance workflow.',
  },
  {
    title: 'Student Reservation System',
    description: 'A system to manage student reservations.',
    link: 'https://student-reservation-system.vercel.app/',
    source: 'https://github.com/subhra03/Student-Reservation-System',
    imageBase: '5',
    stack: ['React', 'JavaScript', 'Forms'],
    features: ['Reservation form workflow', 'Structured student details', 'Clear layout for record management'],
    learning: 'Focused on form structure and organizing user-entered data into a usable interface.',
  },
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects" data-aos="fade-up" aria-labelledby="projects-title">
      <h2 className="section-title" id="projects-title">Projects</h2>
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
