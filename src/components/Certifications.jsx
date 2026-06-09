import React from 'react';
import { Globe, Award } from 'lucide-react';

export default function Certifications({ revealRef }) {
  return (
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
  );
}
