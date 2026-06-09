import React from 'react';

export default function Footer({ revealRef }) {
  return (
    <footer className="reveal" ref={revealRef} style={{ textAlign: 'center', padding: '3rem', borderTop: '1px solid var(--glass-border)', marginTop: '2rem', color: 'var(--text-secondary)' }}>
      <p>© 2026 Luca Robustelli. Built with React & Vite.</p>
    </footer>
  );
}
