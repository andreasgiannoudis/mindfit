import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Track Your Mood',
    description: 'Easily log your daily mood and emotions in just a few taps.',
    icon: '📝',
  },
  {
    id: 2,
    title: 'Understand Patterns',
    description: 'Get insights into your emotional trends and triggers over time.',
    icon: '📊',
  },
  {
    id: 3,
    title: 'Grow Mindfully',
    description: 'Receive personalized suggestions to improve your well-being.',
    icon: '🌱',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__header">
        <h2>How It Works</h2>
        <p>A simple process to take care of your mental wellness.</p>
      </div>
      <div className="how-it-works__steps">
        {steps.map((step, index) => (
          <motion.div
            className="how-it-works__step"
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="how-it-works__icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
