import React from 'react';

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
  return (
<section id='skill' className=" bg-gray-900 text-white py-10 shadow-inner shadow-cyan-400">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 flex flex-col items-center justify-center rounded-lg shadow-md"
            >
              <i className={`${skill.icon} text-5xl mb-3`}></i>
              <p className="text-lg font-semibold text-gray-200 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
