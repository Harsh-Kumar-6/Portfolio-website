import React, { useState, useRef} from 'react';
import { personalInfo } from '../data/portfolioData.js';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((err) => {
      console.error(err);
      alert('Failed to send message.');
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Ready to start a project?</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, or partnership 
              possibilities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-method-info">
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div className="contact-method-info">
                  <h4>Phone</h4>
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>{personalInfo.phone}</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-method-info">
                  <h4>Location</h4>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
          <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
