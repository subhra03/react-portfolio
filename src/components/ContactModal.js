import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../App.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2>Contact Me</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/movdqbyd"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder=" Enter Your Name "
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder=" Enter Your Email "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder=" Enter Your Message "
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-socials">
          <a href="https://github.com/subhra03" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/subhramoy-bhowmik" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

