import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

const App: React.FC = () => (
  <>
    <Navbar />
    <About />
    <Projects />
  </>
);

export default App;
