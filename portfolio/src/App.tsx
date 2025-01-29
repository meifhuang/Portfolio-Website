import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/About';
import About from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

import Skills from './components/Skills';


const App: React.FC = () => (
  <>
    <Navbar />
    <About />
    <Main />
    <Experience />
    <Skills />
    <Projects/>
    <Contact />
    </>
);

export default App;
