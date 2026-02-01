import React from 'react';
import { projects } from '../data/portfoliodata.js';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-label">My Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for building innovative solutions
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* <div className="project-image">{project.icon}</div> */}
              <img src={project.icon} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="timeline-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link primary">
                    Live Demo →
                  </a>
                  <a href={project.githubLink} className="project-link secondary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
