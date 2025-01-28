import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Info from './components/Info';
import Skills from './components/Skills';


const App: React.FC = () => (
  <>
    <Navbar />
    <About />
    <Info />
    <Experience />
    <Projects/>
    <Skills />
    <Contact />
    </>
);

export default App;
