import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Thank you for reaching out! I will get back to you soon.');
    console.log('Form Data:', formData);
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Left Side: Info */}
      <div className="contact-info-panel">
        <h1 className="glow-title">📬 LET'S CONNECT</h1>
        <p className="info-desc">
          I'm always open to discussing new projects, creative ideas, or 
          opportunities to collaborate. Feel free to reach out!
        </p>

        <div className="contact-details">
          <div className="detail-item">
            <span className="icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>idushabasnayaka@gmail.com</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Kandy, Sri Lanka</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="icon">📱</span>
            <div>
              <h4>Phone</h4>
              <p>+94 77 430 5801</p>
            </div>
          </div>
        </div>

        {/* Social Links (GitHub, LinkedIn, etc.) */}
        <div className="social-links">
          <a href="https://github.com/Idusha-Ikb" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
          <a href="https://www.linkedin.com/in/idusha-basnayaka-54bb1535b/" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
          <a href="https://www.facebook.com/idusha.basnayaka" target="_blank" rel="noreferrer" className="social-btn">Facebook</a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="contact-form-panel">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Your Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Idusha Basnayaka"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Your Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="idushabasnayaka@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea 
              name="message" 
              rows="5"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message ✦
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;