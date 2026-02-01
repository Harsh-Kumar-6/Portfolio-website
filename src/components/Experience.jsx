import React from 'react';
import { experiences } from '../data/portfoliodata.js';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-label">My Journey</div>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
