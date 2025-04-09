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

      {/* Bottom wave with animated SVG */}
      <div className="how-it-works__wave wave-bottom">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 490"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <style>
            {`
            .path-0 {
              animation: pathAnim-0 8s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
            @keyframes pathAnim-0 {
              0% {
                d: path("M 0,500 L 0,187 C 79.96172248803828,141.64114832535884 159.92344497607655,96.2822966507177 258,103 C 356.07655502392345,109.7177033492823 472.26794258373207,168.51196172248805 591,187 C 709.7320574162679,205.48803827751195 831.0047846889952,183.66985645933016 909,196 C 986.9952153110048,208.33014354066984 1021.7129186602872,254.80861244019138 1103,259 C 1184.2870813397128,263.1913875598086 1312.1435406698565,225.0956937799043 1440,187 L 1440,500 L 0,500 Z");
              }
              25% {
                d: path("M 0,500 L 0,187 C 106.17224880382778,157.6602870813397 212.34449760765557,128.3205741626794 306,142 C 399.65550239234443,155.6794258373206 480.7942583732057,212.37799043062202 580,209 C 679.2057416267943,205.62200956937798 796.4784688995217,142.1674641148325 885,154 C 973.5215311004783,165.8325358851675 1033.291866028708,252.95215311004785 1121,271 C 1208.708133971292,289.04784688995215 1324.354066985646,238.02392344497608 1440,187 L 1440,500 L 0,500 Z");
              }
              50% {
                d: path("M 0,500 L 0,187 C 62.172248803827785,179.73684210526315 124.34449760765557,172.4736842105263 238,173 C 351.65550239234443,173.5263157894737 516.7942583732057,181.8421052631579 614,204 C 711.2057416267943,226.1578947368421 740.4784688995214,262.1578947368421 827,259 C 913.5215311004786,255.84210526315795 1057.2918660287082,213.5263157894737 1169,195 C 1280.7081339712918,176.4736842105263 1360.3540669856459,181.73684210526315 1440,187 L 1440,500 L 0,500 Z");
              }
              75% {
                d: path("M 0,500 L 0,187 C 97.33014354066987,169.11483253588517 194.66028708133973,151.22966507177034 283,140 C 371.33971291866027,128.77033492822966 450.688995215311,124.19617224880383 544,156 C 637.311004784689,187.80382775119617 744.5837320574163,255.98564593301438 838,267 C 931.4162679425837,278.0143540669856 1010.9760765550238,231.86124401913875 1109,209 C 1207.0239234449762,186.13875598086125 1323.5119617224882,186.5693779904306 1440,187 L 1440,500 L 0,500 Z");
              }
              100% {
                d: path("M 0,500 L 0,187 C 79.96172248803828,141.64114832535884 159.92344497607655,96.2822966507177 258,103 C 356.07655502392345,109.7177033492823 472.26794258373207,168.51196172248805 591,187 C 709.7320574162679,205.48803827751195 831.0047846889952,183.66985645933016 909,196 C 986.9952153110048,208.33014354066984 1021.7129186602872,254.80861244019138 1103,259 C 1184.2870813397128,263.1913875598086 1312.1435406698565,225.0956937799043 1440,187 L 1440,500 L 0,500 Z");
              }
            }
            `}
          </style>
          <path
            d="M 0,500 L 0,187 C 79.96172248803828,141.64114832535884 159.92344497607655,96.2822966507177 258,103 C 356.07655502392345,109.7177033492823 472.26794258373207,168.51196172248805 591,187 C 709.7320574162679,205.48803827751195 831.0047846889952,183.66985645933016 909,196 C 986.9952153110048,208.33014354066984 1021.7129186602872,254.80861244019138 1103,259 C 1184.2870813397128,263.1913875598086 1312.1435406698565,225.0956937799043 1440,187 L 1440,500 L 0,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="#3e8ede"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;
