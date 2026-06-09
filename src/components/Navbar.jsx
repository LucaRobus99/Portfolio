import React from 'react';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-panel navbar">
      <div className="flex-center" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        <Terminal size={24} className="floating-icon" color="var(--accent-blue)" />
        <span>Luca<span className="gradient-text">Robustelli</span></span>
      </div>
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#education" className="nav-link">Education</a>
      </div>
    </nav>
  );
}
