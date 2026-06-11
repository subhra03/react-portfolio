import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import '../App.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/movdqbyd';

const ContactModal = ({ isOpen, onClose = () => {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const firstFieldRef = useRef(null);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (submitStatus !== 'submitting') {
      setSubmitStatus('idle');
      setFeedbackMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitStatus('submitting');
    setFeedbackMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const formspreeMessage = data?.errors?.[0]?.message;
        throw new Error(formspreeMessage || 'Unable to send your message right now.');
      }

      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      setFeedbackMessage('Thanks. Your message has been sent.');
      firstFieldRef.current?.focus();
    } catch (error) {
      setSubmitStatus('error');
      setFeedbackMessage(error.message || 'Something went wrong. Please try again.');
    }
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

  useEffect(() => {
    if (isOpen) return;

    setSubmitStatus('idle');
    setFeedbackMessage('');
  }, [isOpen]);

  if (!isOpen) return null;

  const isSubmitting = submitStatus === 'submitting';

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
          onSubmit={handleSubmit}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
              required
            ></textarea>
          </div>
          {feedbackMessage && (
            <p className={`form-feedback form-feedback-${submitStatus}`} role="status" aria-live="polite">
              {feedbackMessage}
            </p>
          )}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
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
