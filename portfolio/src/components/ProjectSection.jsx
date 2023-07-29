import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    title: 'Weather App',
    description: 'A user-friendly app offering real-time weather data. Stay informed with ease and convenience. Get accurate forecasts at your fingertips, for any location, anytime!',
    imageURL: 'https://user-images.githubusercontent.com/98299441/236981677-52560357-9e91-41a5-a75d-02186392ede3.png',
    githubLink: 'https://github.com/KirtiKamal/Weather-App'
  },
  {
    title: 'QR-CodeGenerator',
    description: 'Easy-to-use QR Code Generator using HTML, CSS, and JS. Create custom QR codes for URLs, text, and contact info. Seamlessly share information through scannable QR codes.',
    imageURL: 'https://user-images.githubusercontent.com/98299441/244350757-2824db68-51d6-41e2-a1e1-ca174ea74ead.png',
    githubLink: 'https://github.com/KirtiKamal/QR-CodeGenerator'
  },
  {
    title: 'Trident ACM Student Chapter',
    description: 'Discover Our Student Chapters Website: Crafted with Passion and Skill. Unite, Learn, and Excel with Trident ACM. Your gateway to a thriving tech community. Join us, together we soar!',
    imageURL: 'https://user-images.githubusercontent.com/98299441/256781444-3346670a-c63f-41c6-a0c5-604d43cf18e3.png',
    githubLink: 'https://github.com/KirtiKamal/ACM-StudentChapter'
  }
];

const ProjectSection = () => {
  return (
    <section id='project' className=" relative overflow-hidden shadow-lg shadow-cyan-400">
      <div className="max-w-screen mx-0 mt-0 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <h2 className=" text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text  sm:text-4xl">My Projects</h2>
        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={project.imageURL}
                  alt={`Project ${index + 1}`}
                  className="w-full h-auto rounded-t-lg"
                />
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-4 text-black"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  <span className="ml-2">GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
