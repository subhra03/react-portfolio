import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../App.css';

const links = [
  { label: 'Email', href: 'mailto:subhramoy03@gmail.com', Icon: FaEnvelope },
  { label: 'Facebook', href: 'https://www.facebook.com/share/14nnXLjsQT/', Icon: FaFacebook },
  { label: 'Twitter', href: 'https://x.com/_Subhra_?t=nqgr3rA9jchbLufsed7obA&s=08', Icon: FaTwitter },
  { label: 'YouTube', href: 'https://youtube.com/@subhramoy-03?si=djr8I1rVZaC6ysdJ', Icon: FaYoutube },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/subhramoy-bhowmik-8b6944242', Icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/subhra03', Icon: FaGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/__subhramoy__/', Icon: FaInstagram },
];

const SocialLinks = () => (
  <nav className="social-links" aria-label="Social links">
    {links.map(({ label, href, Icon }) => (
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
