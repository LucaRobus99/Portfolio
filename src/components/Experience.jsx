import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience({ revealRef }) {
  return (
    <section id="experience" className="section">
      <h2 className="section-title reveal" ref={revealRef}>
        <Briefcase size={36} className="floating-icon" color="var(--accent-purple)"/>
        Experience
      </h2>
      <div className="grid" style={{ gap: '2rem' }}>
        <div className="glass-panel reveal" ref={revealRef}>
          <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Machine Learning Research Intern</h3>
              <h4 style={{ color: 'var(--text-secondary)', fontWeight: '400', marginTop: '0.2rem' }}>Universitá degli studi di Torino</h4>
            </div>
            <span className="badge">2024 - 2025</span>
          </div>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li>Developed and evaluated Deep Learning models using TensorFlow/Keras for the AI-LEAP project.</li>
            <li>Conducted an empirical comparison of One-Hot, Label, and Binary Encoding to optimize categorical data preprocessing.</li>
            <li>Implemented Data Augmentation techniques, scaling the experimental dataset.</li>
          </ul>
        </div>

        <div className="glass-panel reveal" ref={revealRef}>
          <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>IT Systems & Network Technician (Internship)</h3>
              <h4 style={{ color: 'var(--text-secondary)', fontWeight: '400', marginTop: '0.2rem' }}>ATC Torino</h4>
            </div>
            <span className="badge">2017 - 2018</span>
          </div>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li>Managed and automated system administration tasks and maintenance using PowerShell scripting.</li>
            <li>Configured public and private domains and handled the deployment of Linux (Ubuntu) operating systems.</li>
            <li>Installed and structured physical LAN/WAN network cabling to ensure reliable office connectivity.</li>
          </ul>
        </div>

        <div className="glass-panel reveal" ref={revealRef}>
          <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Web Development Project Lead (Internship)</h3>
              <h4 style={{ color: 'var(--text-secondary)', fontWeight: '400', marginTop: '0.2rem' }}>I.I.S Giuseppe Peano</h4>
            </div>
            <span className="badge">2016 - 2016</span>
          </div>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
            <li>Led and coordinated a web development project from planning to successful delivery.</li>
            <li>Designed and implemented a functional, user-friendly website using WordPress, HTML5, CSS3, and JavaScript.</li>
            <li>Managed team collaboration to align project execution with requirements and deadlines.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
