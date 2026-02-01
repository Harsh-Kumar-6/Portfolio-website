import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Zap, Mail } from 'lucide-react';
import { personalInfo } from '../data/Portfoliodata.js';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', icon: Home, id: 'home' },
    { label: 'About', icon: User, id: 'about' },
    { label: 'Experience', icon: Briefcase, id: 'experience' },
    { label: 'Projects', icon: Code, id: 'projects' },
    { label: 'Skills', icon: Zap, id: 'skills' },
    { label: 'Contact', icon: Mail, id: 'contact' }
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo and Name */}
        <div className="logo-section">
          <div className="logo">{personalInfo.initials}</div>
          <span className="logo-text">{personalInfo.name}</span>
        </div>

        {/* Divider */}
        <div className="nav-divider"></div>

        {/* Navigation Items - Desktop */}
        <ul className="nav-links">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={activeSection === item.id ? 'active' : ''}
                  title={item.label}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Resume Button - Desktop */}
        <a
          href={personalInfo.cvLink}
          className="resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mobile-menu active">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="mobile-menu-divider"></div>
            <a
              href={personalInfo.cvLink}
              className="mobile-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
