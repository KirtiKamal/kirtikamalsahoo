import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView from the correct library
import { motion, useAnimation } from 'framer-motion';

const skills = [
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'Go', icon: 'fab fa-golang' },
  { name: 'Android', icon: 'fab fa-android' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'Git', icon: 'fab fa-git' },
  { name: 'GitHub', icon: 'fab fa-github' },
  { name: 'Linux', icon: 'fab fa-linux' },
  { name: 'Node', icon: 'fab fa-node' },
];

const SkillSection = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animateSlider = useAnimation();

  useEffect(() => {
    if (inView) {
      animateSlider.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView, animateSlider]);

  return (
    <section id="skill" className="bg-gradient-to-t from-sky-900 to-gray-900 text-white py-10 shadow-inner shadow-cyan-400">
      <div className="max-w-6xl mx-auto px-4">
        <motion.span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text sm:text-6xl font-semibold text-center mb-8">Tech Stack</motion.span>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-3"
          ref={inViewRef}
          animate={animateSlider}
          initial={{ opacity: 0, y: 50 }} // Set initial animation properties
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 flex flex-col items-center justify-center rounded-lg shadow-md"
            >
              <i className={`${skill.icon} text-5xl mb-3`}></i>
              <p className="text-lg font-semibold text-gray-200 text-center">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
