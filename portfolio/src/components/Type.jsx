import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const Type = (props) => {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        1000,
        "Devops Enthusiast",
        1000,
        "Open Source ✨",
        1000,
        "Java ❤️"
 
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text'
    />
  );
};
export default Type;