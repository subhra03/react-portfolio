import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: "Personal Website Portfolio UI",
      description: "A modern and responsive personal portfolio design.",
      link: "https://personal-website-portfolio-ui.vercel.app/",
      image: "/1.png"
    },
    {
      title: "Bike Website UI",
      description: "A sleek UI concept for a bike showroom or dealership.",
      link: "https://bike-website-ui.vercel.app/",
      image: "/2.png"
    },
    {
      title: "Bootstrap Portfolio UI",
      description: "A clean portfolio layout built using Bootstrap.",
      link: "https://bootstrap-portfolio-ui.vercel.app/",
      image: "/3.png"
    },
    {
      title: "Expense Tracker",
      description: "A simple and functional app to track expenses.",
      link: "https://expense-tracker-vert-eight.vercel.app/",
      image: "/4.png"
    },
    {
      title: "Student Reservation System",
      description: "A system to manage student reservations.",
      link: "https://student-reservation-system.vercel.app/",
      image: "/5.png"
    }
  ];

  return (
    <section className="section projects-section" id="projects" data-aos="fade-up">
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
