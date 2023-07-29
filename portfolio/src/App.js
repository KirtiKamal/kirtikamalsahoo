import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';
import SkillSection from './components/SkillSection';



function App() {
  return (
    <div className="bg-gray-800 pb-20">
      <Nav />
      <Hero />
      <About />
      <SkillSection />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
