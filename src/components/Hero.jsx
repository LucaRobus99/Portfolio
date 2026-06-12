import React from 'react';
import { MapPin, Mail, Phone, Download } from 'lucide-react';

export default function Hero({ revealRef }) {
  return (
    <section id="about" className="section">
      <div className="glass-panel reveal" ref={revealRef} style={{ textAlign: 'center' }}>
        <img 
          src="https://github.com/LucaRobus99.png" 
          alt="Luca Robustelli" 
          style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '1.5rem', border: '3px solid var(--accent-purple)', boxShadow: '0 0 20px rgba(197, 108, 240, 0.3)' }} 
        />
        <h1 style={{ marginBottom: '1rem' }}>
          Hi, I'm <span className="gradient-text">Luca Robustelli</span>
        </h1>
        <h2 style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: '400' }}>
          Computer Engineering Master's Student & Software Engineer
        </h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Passionate about full-stack web development and low-level systems. I combine an analytical approach with hands-on experience to build robust, scalable, and secure production-ready applications.
        </p>
        <div className="flex-wrap-center" style={{ color: 'var(--text-secondary)' }}>
          <div className="flex-center">
            <MapPin size={18} color="var(--accent-blue)" /> Via Perosa 65, Torino
          </div>
          <div className="flex-center">
            <Mail size={18} color="var(--accent-purple)" /> luca.robustelli.businessjob@gmail.com
          </div>
          <div className="flex-center">
            <Phone size={18} color="var(--accent-blue)" /> +39 327 976 0746
          </div>
          <div className="flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg> 
            <a href="https://github.com/LucaRobus99" target="_blank" rel="noreferrer" className="nav-link">LucaRobus99</a>
          </div>
        </div>
        
        {/* Download CV Button */}
        <div style={{ marginTop: '2.5rem' }}>
          <a 
            href="https://drive.google.com/file/d/1qa6ENfYWAMA5T0JjPgl8ZLttwlhrpj7Q/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
            style={{ textDecoration: 'none' }}
          >
            <Download size={20} /> Send a request to see my CV
          </a>
        </div>
      </div>
    </section>
  );
}
