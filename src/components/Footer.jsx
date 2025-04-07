import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import mindfitlogo from '/src/assets/images/mind-fit-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__branding">
          <img src={mindfitlogo} alt="Mind Fit Logo" />
          <p className="footer__tagline">Empowering your mind and body, every step of the way.</p>
        </div>

        <div className="footer__links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="footer__socials">
          <a href="mailto:hello@mindfit.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} MindFit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
