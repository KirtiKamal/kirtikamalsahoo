import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_38vth6x', 'template_u6hndi7', form.current, 'Pnkpc6XAs9il9icuT')
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true); // Set the state to indicate the message was sent
          setTimeout(() => {
            setIsMessageSent(false); // Hide the notification after 3 seconds
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notificationVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0', transition: { duration: 0.5 } },
  };

  return (
    <div id='contact' className="bg-gray-900 text-white py-16 shadow-lg shadow-cyan-400">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text  sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 3 } }}
        >
          Contact Me
        </motion.h2>
        {/* Message sent notification */}
        {isMessageSent && (
          <motion.div
            className="bg-green-500 text-white w-1/4 mx-96 px-4 py-2 rounded-md mb-4"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            Message sent successfully!
          </motion.div>
        )}
        <form ref={form} className="max-w-md mx-auto" onSubmit={(e) => sendEmail(e)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 mt-2 bg-gray-800 rounded-md text-white focus:outline-none focus:bg-gray-700"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-2 bg-gray-800 rounded-md text-white focus:outline-none focus:bg-gray-700"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 mt-2 bg-gray-800 rounded-md text-white focus:outline-none focus:bg-gray-700"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition-colors duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }} // Add hover animation
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
