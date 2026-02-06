import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-teal-50">
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <Achievements />
      <Leadership />
      <Footer />
    </div>
  );
}

export default App;
