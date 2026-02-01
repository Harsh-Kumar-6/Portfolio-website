import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Building Digital Experiences That Matter</h1>
          <div className="subtitle">{personalInfo.title}</div>
          <p>{personalInfo.description}</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Let's Connect</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-container">
            <div className="avatar-inner">
                <img src={personalInfo.avatar} alt="Avatar" className="avatar-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
