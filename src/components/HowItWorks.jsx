import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

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
          <Tilt
            key={step.id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.08}
            glareColor="#ffffff"
            glarePosition="all"
            transitionSpeed={500}
            className="how-it-works__tilt"
          >
            <motion.div
              className="how-it-works__step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="how-it-works__icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Bottom wave */}
      <div className="how-it-works__wave wave-bottom">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#8C9EFF" d="M0,96L40,122.7C80,149,160,203,240,224C320,245,400,235,480,218.7C560,203,640,181,720,176C800,171,880,181,960,181.3C1040,181,1120,171,1200,160C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;
