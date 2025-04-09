import React, { useState } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false); // Default to monthly

  // Toggle pricing view between monthly and annual
  const handleToggle = () => setIsAnnual(!isAnnual);

  // Helper function to calculate price based on plan and billing type
  const getPrice = (plan, isAnnual) => {
    switch (plan) {
      case "basic":
        return isAnnual ? "$190 / year" : "$19 / month";
      case "standard":
        return isAnnual ? "$290 / year" : "$29 / month";
      case "premium":
        return isAnnual ? "$490 / year" : "$49 / month";
      default:
        return "$0";
    }
  };

  return (
    <section className="pricing" id="pricing">
      <div className="pricing__intro">
        <h2 className="pricing__heading">Flexible Plans for Every Need</h2>
        <p className="pricing__description">
          Choose a plan that fits your journey. Whether you're just getting
          started or ready to take things to the next level, our plans are
          designed to scale with you. Save more with annual billing.
        </p>
      </div>

      <div className="pricing__toggle">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" checked={isAnnual} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
        <span>Annual</span>
      </div>
      <div className="pricing__container">
        <motion.div
          className="pricing__card"
          whileHover={{
            transition: { duration: 0.3 },
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <h3 className="pricing__title">Basic Plan</h3>
          <p className="pricing__price">{getPrice("basic", isAnnual)}</p>
          <ul className="pricing__features">
            <li>Basic Tracking</li>
            <li>Basic Support</li>
          </ul>
          <a href="#signup" className="pricing__cta">
            Get Started
          </a>
        </motion.div>

        <motion.div
          className="pricing__card pricing__card--featured"
          initial={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="pricing__title">Premium Plan</h3>
          <p className="pricing__price">{getPrice("premium", isAnnual)}</p>
          <ul className="pricing__features">
            <li>Unlimited Tracking</li>
            <li>Personal AI Coach</li>
            <li>Priority Support</li>
            <li>Exclusive Insights</li>
          </ul>
          <a href="#signup" className="pricing__cta">
            Get Started
          </a>
        </motion.div>

        <motion.div
          className="pricing__card"
          whileHover={{
            transition: { duration: 0.3 },
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <h3 className="pricing__title">Standard Plan</h3>
          <p className="pricing__price">{getPrice("standard", isAnnual)}</p>
          <ul className="pricing__features">
            <li>Basic Tracking</li>
            <li>Standard Support</li>
            <li>Personalized Insights</li>
          </ul>
          <a href="#signup" className="pricing__cta">
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
