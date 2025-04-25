import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'; // Add these imports
import '../App.css';

const SocialLinks = () => {
  return (
<div className="social-links">
        <a href="mailto:subhramoy03@gmail.com" className="social-link" aria-label="Email">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.facebook.com/share/14nnXLjsQT/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={24} />
        </a>
        <a href="https://x.com/_Subhra_?t=nqgr3rA9jchbLufsed7obA&s=08" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} />
        </a>
        <a href="https://youtube.com/@subhramoy-03?si=djr8I1rVZaC6ysdJ" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube size={24} />
        </a>
        <a href="https://www.linkedin.com/in/subhramoy-bhowmik-8b6944242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
           className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/subhra03" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="https://www.instagram.com/__subhramoy__/?igsh=MTBnZzZ1N3Rmb3poNw%3D%3D#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
          <FaInstagram size={24} />
        </a>
      </div>
  );
};

export default SocialLinks;