import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__container">

      <motion.div
          className="pricing__card"
          whileHover={{
            borderColor: 'transparent',
            transition: { duration: 0.3 },
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
        >
          <h3 className="pricing__title">Basic Plan</h3>
          <p className="pricing__price">$19 / month</p>
          <ul className="pricing__features">
            <li>Basic Tracking</li>
            <li>Basic Support</li>
          </ul>
          <a href="#signup" className="pricing__cta">Get Started</a>
        </motion.div>


        <motion.div
          className="pricing__card pricing__card--featured"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pricing__badge">Featured</div>
          <h3 className="pricing__title">Premium Plan</h3>
          <p className="pricing__price">$49 / month</p>
          <ul className="pricing__features">
            <li>Unlimited Tracking</li>
            <li>Personal AI Coach</li>
            <li>Priority Support</li>
            <li>Exclusive Insights</li>
          </ul>
          <a href="#signup" className="pricing__cta">Get Started</a>
        </motion.div>

        <motion.div
          className="pricing__card"
          whileHover={{
            borderColor: 'transparent',
            transition: { duration: 0.3 },
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
        >
          <h3 className="pricing__title">Standard Plan</h3>
          <p className="pricing__price">$29 / month</p>
          <ul className="pricing__features">
            <li>Basic Tracking</li>
            <li>Standard Support</li>
            <li>Personalized Insights</li>
          </ul>
          <a href="#signup" className="pricing__cta">Get Started</a>
        </motion.div>


      </div>
    </section>
  );
};

export default Pricing;
