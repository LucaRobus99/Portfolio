import React from 'react';
import './index.css';
import { useScrollReveal } from './hooks/useScrollReveal';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Education from './components/Education';
import Passions from './components/Passions';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  const revealRef = useScrollReveal();

  return (
    <div className="app-container">
      <Navbar />

      <main className="container">
        <Hero revealRef={revealRef} />
        <TechStack revealRef={revealRef} />
        <Experience revealRef={revealRef} />
        <Education revealRef={revealRef} />
        <Passions revealRef={revealRef} />
        <Certifications revealRef={revealRef} />
      </main>

      <Footer revealRef={revealRef} />
    </div>
  );
}

export default App;
