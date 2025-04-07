import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import sofie from '/src/assets/avatars/sofie.jpg';
import jake from '/src/assets/avatars/jake.jpg';
import aria from '/src/assets/avatars/aria.jpg';
import leo from '/src/assets/avatars/leo.jpg';
import mina from '/src/assets/avatars/mina.jpg';

const testimonials = [
  { id: 1, name: 'Sophie M.', quote: 'This app helped me build a daily habit of checking in with myself. It’s been life-changing.', avatar: sofie },
  { id: 2, name: 'Jake T.', quote: 'I never knew how powerful mood tracking could be. Super intuitive and calming to use.', avatar: jake },
  { id: 3, name: 'Aria B.', quote: 'The insights helped me understand emotional patterns I was completely unaware of.', avatar: aria },
  { id: 4, name: 'Leo C.', quote: 'I love the gentle reminders and how beautifully designed everything is.', avatar: leo },
  { id: 5, name: 'Mina R.', quote: 'Privacy was important to me, and this app nails it. It’s my little safe space.', avatar: mina },
];

const Testimonials = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 40; // pixels per second
  const animationRef = useRef();

  const loop = (timestamp) => {
    if (!animationRef.current.lastTime) animationRef.current.lastTime = timestamp;
    const delta = timestamp - animationRef.current.lastTime;
    animationRef.current.lastTime = timestamp;

    if (!isPaused) {
      const containerWidth = containerRef.current.scrollWidth / 2; // half because we duplicate the items
      let newX = x.get() - (speed * delta) / 1000;
      if (Math.abs(newX) >= containerWidth) {
        newX = 0;
      }
      x.set(newX);
    }

    animationRef.current.frame = requestAnimationFrame(loop);
  };

  useEffect(() => {
    animationRef.current = { frame: null, lastTime: null };
    animationRef.current.frame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationRef.current.frame);
  }, [isPaused]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__header">
        <h2>What People Are Saying</h2>
        <p>Real experiences from our users.</p>
      </div>
      <div className="testimonials__carousel" ref={containerRef} style={{ overflow: 'hidden' }}>
        <motion.div
          className="testimonials__track"
          style={{ display: 'flex', x }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              className="testimonials__card"
              key={index}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <img src={testimonial.avatar} alt={testimonial.name} className="testimonials__avatar" />
              <p className="quote">“{testimonial.quote}”</p>
              <p className="name">– {testimonial.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
