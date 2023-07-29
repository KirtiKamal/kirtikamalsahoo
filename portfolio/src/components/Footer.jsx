import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 shadow-lg shadow-cyan-400">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/kirtikamal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://twitter.com/KirtiKamal12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a
            href="https://github.com/KirtiKamal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://kirtikamal.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-hashnode text-xl"></i>
          </a>
          <a
            href="https://stackoverflow.com/users/19119239/kirti-kamal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-stack-overflow text-xl"></i>
          </a>
          {/* Add more social icons as needed */}
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Design by Kirti Kamal &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
