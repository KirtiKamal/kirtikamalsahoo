import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAnimation, useInView, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";



const articles = [
  {
    id: 1,
    title: 'Weather App',
    content: 'A user-friendly app offering real-time weather data. Stay informed with ease and convenience. Get accurate forecasts at your fingertips, for any location, anytime!',
    image: 'https://user-images.githubusercontent.com/98299441/236981677-52560357-9e91-41a5-a75d-02186392ede3.png',
    link: 'https://github.com/KirtiKamal/Weather-App'
  },
  {
    id: 2,
    title: 'QR-CodeGenerator',
    content: 'Easy-to-use QR Code Generator using HTML, CSS, and JS. Create custom QR codes for URLs, text, and contact info. Seamlessly share information through scannable QR codes.',
    image: 'https://user-images.githubusercontent.com/98299441/244350757-2824db68-51d6-41e2-a1e1-ca174ea74ead.png',
    link: 'https://github.com/KirtiKamal/QR-CodeGenerator'
  },
  {
    id: 3,
    title: 'Trident ACM Student Chapter',
    content: 'Discover Our Student Chapters Website: Crafted with Passion and Skill. Unite, Learn, and Excel with Trident ACM. Your gateway to a thriving tech community. Join us, together we soar!',
    image: 'https://user-images.githubusercontent.com/98299441/256781444-3346670a-c63f-41c6-a0c5-604d43cf18e3.png',
    link: 'https://github.com/KirtiKamal/ACM-StudentChapter'
  },
  {
    id: 4,
    title: 'Decode Devs',
    content: "Decode Devs: Your path to limitless potential! Join our groundbreaking community for transformative experiences, growth, and success. Ignite your future with us.",
    link: "https://decodedevs.hashnode.dev/a-beginners-guide-to-yaml",
    image: "https://user-images.githubusercontent.com/141839882/265965573-fbbca453-d7dd-4fa5-8b07-fe5a8b5ebfb2.png"
  },
  {
    id: 5,
    title: 'My First Portfolio Website',
    content: "This is where it all began – my very first website, crafted during my early days as I embarked on my career journey. Witness the evolution of my skills and creativity as I took my first steps in the world of web design.",
    link: "https://kirtikamal.github.io/",
    image: "https://user-images.githubusercontent.com/141839882/265969029-8d424a3e-72e7-4d67-a2ea-1faf434c2f73.png"
  }
];

const ProjectSection = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ref = useRef(null) ;
  const isInView = useInView(ref, {amount: 0.4, once:true }) ;
  const animateSlider = useAnimation() ;
  const animateH2 = useAnimation() ;

  useEffect(() => {
    if(isInView){
      animateSlider.start({
        x: 0,
        transition: {
          duration: 0.4
        }
      })
      animateH2.start({
        opacity: 1,
        transition: {
          duration: 0.4
        }
      })
    } 
    if (!isInView){
      animateSlider.start({
        x: '-100vw'
      })
      animateH2.start({
        opacity: 0
      })
    }
  }, [isInView]) ;

  return (
    <div id="project" className="bg-gradient-to-l from-gray-700 via-gray-900 to-black sm:py-5" ref={ref}>
      <div className="max-w-screen-lg mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
        <motion.span className="text-3xl p-4 font-bold text-center tracking-tight bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text sm:text-4xl" animate={animateH2}>My Projects</motion.span>
        </div>

        <motion.div className="w-[90%] mx-auto" animate={animateSlider}>
          <Slider {...settings}>
            {articles.map(article => (
              <div
                key={article.id}
                className=" bg-gradient-to-r from-slate-300 to-slate-500 p-4 rounded-lg shadow-md"
                style={{ width: "100%", maxWidth: 400 }}
              >

                <h3 className="font-bold mb-2">{article.title}</h3>
                <img src={article.image} alt={article.title} />
                <p className="text-black text-sm mb-4 font-bold mt">
                  {article.date}
                </p>

                <p className="text-gray-800 text-sm">
                  {article.content}
                </p>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 text-sm font-bold "
                >
                   <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mt-2 hover:text-gray-600" />
                  <span className="ml-2"></span>
                   <FontAwesomeIcon icon={faExternalLink} className="w-5 h-5 ml-2 mt-2 hover:text-gray-600 " />
                  <span className="ml-2"></span>
                </a>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSection;
