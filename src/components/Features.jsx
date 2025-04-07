import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Mood Calendar',
    description: 'View your mood history in a simple, color-coded calendar.',
    icon: '🗓️',
  },
  {
    id: 2,
    title: 'Journaling',
    description: 'Write freely and reflect on your thoughts whenever needed.',
    icon: '📖',
  },
  {
    id: 3,
    title: 'Insights & Analytics',
    description: 'Understand mood patterns with simple and helpful stats.',
    icon: '📈',
  },
  {
    id: 4,
    title: 'Reminders',
    description: 'Set custom reminders to keep track of your mental check-ins.',
    icon: '⏰',
  },
  {
    id: 5,
    title: 'Privacy First',
    description: 'Your data is encrypted and stays with you — always.',
    icon: '🔒',
  },
  {
    id: 6,
    title: 'Cross-Device Sync',
    description: 'Access your entries from any device, anytime.',
    icon: '💻',
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features__header">
        <h2>Powerful Features</h2>
        <p>Designed to support your mental wellness journey.</p>
      </div>
      <div className="features__grid">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="features__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="features__icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
