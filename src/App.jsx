import React, { useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  Mail, 
  MapPin, 
  Phone, 
  Terminal, 
  Code2, 
  Database, 
  Cpu, 
  BookOpen, 
  Briefcase,
  Award,
  Globe
} from 'lucide-react';
import './index.css';

// Custom Hook for Scroll Reveal Animations
function useScrollReveal() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of the element is visible
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
}

function App() {
  const revealRef = useScrollReveal();

  return (
    <div className="app-container">
      {/* Navigation / Header */}
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

      <main className="container">
        {/* Hero Section */}
        <section id="about" className="section">
          <div className="glass-panel reveal" ref={revealRef} style={{ textAlign: 'center' }}>
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
          </div>
        </section>

        {/* Tech Stack Section */}
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
                {['Git', 'Linux', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
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

        {/* Education Section */}
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

        {/* Languages & Certifications */}
        <section className="section">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
             <div className="glass-panel reveal" ref={revealRef}>
              <h3 className="flex-center" style={{ marginBottom: '1.5rem' }}>
                <Globe size={22} color="var(--accent-blue)" /> Languages
              </h3>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
                <li><strong>English:</strong> IELTS Academic – British Council (B2 Certified)</li>
                <li><strong>Italian:</strong> Native speaker</li>
              </ul>
            </div>
            <div className="glass-panel reveal delay-100" ref={revealRef}>
              <h3 className="flex-center" style={{ marginBottom: '1.5rem' }}>
                <Award size={22} color="var(--accent-purple)" /> Certifications
              </h3>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'grid', gap: '0.5rem' }}>
                <li>Cisco Certification: IT Essentials 5.0</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="reveal" ref={revealRef} style={{ textAlign: 'center', padding: '3rem', borderTop: '1px solid var(--glass-border)', marginTop: '2rem', color: 'var(--text-secondary)' }}>
        <p>© 2026 Luca Robustelli. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
