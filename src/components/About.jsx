import React from 'react';
import { about } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Get To Know Me</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          <div className="stats-grid">
            {about.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
