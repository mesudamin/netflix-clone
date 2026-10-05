import React from 'react';
import './Footer.css';

const footerLinks = [
  ['Audio Description', 'Help Centre', 'Gift Cards', 'Media Centre'],
  ['Investor Relations', 'Jobs', 'Terms of Use', 'Privacy'],
  ['Legal Notices', 'Cookie Preferences', 'Corporate Information', 'Contact Us'],
  ['Speed Test', 'Ad Choices', 'Only on Netflix', 'Account'],
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Social icons */}
        <div className="footer__social">
          <a href="#" className="footer__social-link" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" className="footer__social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path fill="#141414" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#141414" strokeWidth="2" />
            </svg>
          </a>
          <a href="#" className="footer__social-link" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a href="#" className="footer__social-link" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon fill="#141414" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
          </a>
        </div>

        {/* Link columns */}
        <ul className="footer__links">
          {footerLinks.flat().map((link) => (
            <li key={link} className="footer__link-item">
              <a href="#" className="footer__link">{link}</a>
            </li>
          ))}
        </ul>

        {/* Language selector */}
        <div className="footer__lang">
          <select className="footer__lang-select" aria-label="Select language">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        {/* Copyright */}
        <p className="footer__copy">Netflix Ethiopia, {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
