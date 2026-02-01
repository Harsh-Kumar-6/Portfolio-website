import React from 'react';
import { skills } from '../data/portfolioData.js';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="skills-container">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3>{skillCategory.category}</h3>
              <div className="skill-tags">
                {skillCategory.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
