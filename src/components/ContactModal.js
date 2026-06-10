import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import '../App.css';

const ContactModal = ({ isOpen, onClose = () => {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const firstFieldRef = useRef(null);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled])'
      );
      const focusable = Array.from(focusableElements);
      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        ref={modalRef}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close contact form">
          <FaTimes aria-hidden="true" />
        </button>
        <h2 id="contact-modal-title">Contact Me</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/movdqbyd"
          method="POST"
        >
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              ref={firstFieldRef}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-socials">
          <a href="https://github.com/subhra03" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/subhramoy-bhowmik" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
