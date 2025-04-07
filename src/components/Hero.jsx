import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero-mockup.svg';

const Hero = () => {
  return (
    <section className="hero">
      {/* Subtle Animated Background */}
      <motion.div
        className="hero__background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="hero__title">Your Wellness, Smarter.</h1>
        <p className="hero__subtitle">
          Track your mental and physical health with personalized AI support and insights that truly understand you.
        </p>
        <div className="hero__buttons">
          <motion.a
            href="#newsletter"
            className="hero__btn hero__btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Waitlist
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="hero__btn hero__btn--secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Watch Demo
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="hero__image-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <img src={heroImage} alt="MindFit app preview" className="hero__image" />
      </motion.div>
    </section>
  );
};

export default Hero;
