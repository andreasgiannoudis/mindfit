import React, { useState, useEffect } from 'react';
import mindfitlogo from '/src/assets/images/mind-fit-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <img src={mindfitlogo} alt="Logo" />
        </div>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#features" className="header__link">Features</a>
          <a href="#pricing" className="header__link">Pricing</a>
          <a href="#how-it-works" className="header__link">How It Works</a>
          <a href="#testimonials" className="header__link">Testimonials</a>
          <a href="#newsletter" className="header__link header__link--cta">Join Waitlist</a>
        </nav>

        <button
          className={`header__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
