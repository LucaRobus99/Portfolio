import React from 'react';
import { BookOpen, Cpu, Terminal } from 'lucide-react';

export default function Education({ revealRef }) {
  return (
    <section id="education" className="section">
      <h2 className="section-title reveal" ref={revealRef}>
        <BookOpen size={36} className="floating-icon" color="var(--accent-blue)"/>
        Education
      </h2>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <div className="glass-panel reveal" ref={revealRef}>
          <Cpu size={32} color="var(--accent-purple)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Master of Computer Engineering</h3>
          <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>Politecnico di Torino</h4>
          <span className="badge" style={{ marginBottom: '1.5rem' }}>In Progress</span>
          <p style={{ color: 'var(--text-secondary)' }}>
            Highly focused on advanced software engineering, systems programming, and modern software architectures. My coursework deepens my expertise in designing complex distributed systems, mastering clean architecture principles, and building scalable, secure, and production-ready software applications.
          </p>
        </div>
        <div className="glass-panel reveal delay-100" ref={revealRef}>
          <Terminal size={32} color="var(--accent-blue)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Bachelor of Computer Science</h3>
          <h4 style={{ color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>Universitá degli studi di Torino</h4>
          <p style={{ color: 'var(--text-secondary)' }}>
            Acquired a solid foundation in logic, mathematics, and systems programming, covering the entire software development lifecycle—from conceptual and architectural design to algorithmic optimization and data security. Developed a strong passion and specialization in software engineering and web development.
          </p>
        </div>
      </div>
    </section>
  );
}
