import React from 'react';
import { Code2, Terminal, Globe, Database } from 'lucide-react';

export default function TechStack({ revealRef }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title reveal" ref={revealRef}>
        <Code2 size={36} className="floating-icon" color="var(--accent-blue)"/> 
        Core Tech Stack
      </h2>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <div className="glass-panel reveal" ref={revealRef}>
          <h3 className="flex-center" style={{ marginBottom: '1.5rem' }}>
            <Terminal size={22} color="var(--accent-purple)" /> Programming Languages
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['JavaScript', 'Rust', 'Python', 'C', 'Java', 'PHP', 'C++'].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="glass-panel reveal delay-100" ref={revealRef}>
          <h3 className="flex-center" style={{ marginBottom: '1.5rem' }}>
            <Globe size={22} color="var(--accent-blue)" /> Web & Frameworks
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['React', 'Node.js', 'FastAPI', 'Bootstrap', 'Ajax'].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="glass-panel reveal delay-200" ref={revealRef}>
          <h3 className="flex-center" style={{ marginBottom: '1.5rem' }}>
            <Database size={22} color="var(--accent-purple)" /> Tools & DBs
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Git', 'Linux', 'SQL', 'MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
