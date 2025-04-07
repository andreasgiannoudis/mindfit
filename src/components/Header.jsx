import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">MindFit</div>
        <nav className="header__nav">
          <a href="#features" className="header__link">Features</a>
          <a href="#pricing" className="header__link">Pricing</a>
          <a href="#how-it-works" className="header__link">How It Works</a>
          <a href="#testimonials" className="header__link">Testimonials</a>
          <a href="#newsletter" className="header__link header__link--cta">Join Waitlist</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
