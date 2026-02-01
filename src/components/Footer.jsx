import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfoliodata.js';

const Footer = () => {
  const iconComponents = {
    Mail,
    Linkedin,
    Github,
    Twitter,
  };

  return (
    <footer>
      <div className="social-links">
        {personalInfo.social &&
          Object.entries(personalInfo.social).map(([icon, link], index) => {
            const IconComponent = iconComponents[icon];
            if (!IconComponent) return null;

            return (
              <a
                key={index}
                href={link}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
      </div>

      <p>
        © {new Date().getFullYear()} {personalInfo.name}. Built with passion and modern web technologies.
      </p>
    </footer>
  );
};

export default Footer;
