import React from 'react';
import '../App.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
];

const Header = ({ onContactClick }) => (
  <header className="site-header">
    <a className="site-logo" href="#hero" aria-label="Subhramoy Bhowmik home">
      Subhramoy
    </a>

    <nav className="site-nav" aria-label="Primary navigation">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className="nav-link">
          {link.label}
        </a>
      ))}
      <button type="button" className="nav-contact" onClick={onContactClick}>
        Contact
      </button>
    </nav>
  </header>
);

export default Header;
