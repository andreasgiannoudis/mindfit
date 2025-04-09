import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="newsletter" id="newsletter">
      <motion.div
        className="newsletter__content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Be the First to Know</h2>
        <p>Join the waitlist to get early access and exclusive updates about MindFit.</p>
        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email"
            required
          />
          <button type="submit">Join Waitlist</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
