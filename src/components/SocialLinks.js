import React from 'react';
import { socialLinks } from '../data/socialLinks';
import '../App.css';

const SocialLinks = () => (
  <nav className="social-links" aria-label="Social links">
    {socialLinks.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        className="social-link"
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        aria-label={label}
      >
        <Icon size={24} aria-hidden="true" />
      </a>
    ))}
  </nav>
);

export default SocialLinks;
