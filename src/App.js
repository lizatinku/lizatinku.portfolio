import React from 'react';
import AboutMe from './components/aboutme';
import Experience from './components/experience'
import Projects from './components/projects'
import OutsideCoding from './components/outsidecoding'

function App() {
  return (
    <div>
      <AboutMe />
      <Experience />
      <Projects />
      <OutsideCoding />
    </div>
  );
}

export default App;