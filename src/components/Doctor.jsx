import React from 'react';
import doctorImg from '../assets/dr-venkatesh.jpg';

export default function Doctor() {
  return (
    <section id="doctor" className="doctor-section" style={{ background: 'var(--off-white)', padding: '120px 0' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Meet the Experts</div>
          <h2 className="section-title">
            Our Medical <span className="text-grad">Professionals</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Highly qualified specialists committed to your oral health and comfortable treatments.
          </p>
        </div>

        {/* Doctor 1: Dr. R. Venkatesh */}
        <div className="doctor-card reveal" style={{ marginBottom: '40px' }}>
          {/* Image Side */}
          <div className="doctor-image-side">
            <img
              src={doctorImg}
              alt="Dr. R. Venkatesh MDS (Prostho) Chief Implantologist and Surgeon at Punnagai Dental Hospital"
              loading="lazy"
            />
            <div className="doctor-image-overlay" />
            <div className="doctor-image-badge">
              <div className="dib-name">Dr. R. Venkatesh</div>
              <div className="dib-role">MDS (Prostho) — Chief Surgeon &amp; Implantologist</div>
            </div>
          </div>

          {/* Info Side */}
          <div className="doctor-info-side">
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
              <span className="tag tag-mint">Chief Surgeon</span>
              <span className="tag tag-blue">MDS (Prostho)</span>
            </div>

            <h3 style={{ fontSize: '2.1rem', fontWeight: 900, marginTop: '8px', marginBottom: '12px', lineHeight: 1.15 }}>
              Dr. R. Venkatesh <span className="text-grad">MDS (Prostho)</span>
            </h3>

            {/* Credentials / Certifications List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-body)' }}>
                <span style={{ color: 'var(--blue)', fontSize: '1.2rem' }}>🎓</span>
                Master in Implantology (Ny uni, USA)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-body)' }}>
                <span style={{ color: 'var(--blue)', fontSize: '1.2rem' }}>📜</span>
                Diplomate (Laser Dentistry)
              </div>
            </div>

            <blockquote className="doctor-quote" style={{ margin: '0 0 24px 0' }}>
              "My goal is to provide thorough explanations of all clinical procedures and deliver professional treatment tailored to each patient's individual needs."
            </blockquote>

            <p className="doctor-bio-text" style={{ marginBottom: '32px' }}>
              Dr. R. Venkatesh is a highly distinguished Prosthodontist and Implantologist with over 25 years of clinical expertise. Having mastered implantology from New York University (USA) and earned a Diplomate in Laser Dentistry, he specializes in advanced dental implants, full-mouth reconstructions, painless laser surgeries, and complex rehabilitation.
            </p>

            <div className="doctor-stats-row" style={{ paddingTop: '24px' }}>
              <div className="ds-item">
                <div className="ds-num">25+</div>
                <div className="ds-label">Years Exp</div>
              </div>
              <div className="ds-item">
                <div className="ds-num">6k+</div>
                <div className="ds-label">Happy Smiles</div>
              </div>
              <div className="ds-item">
                <div className="ds-num">NYU</div>
                <div className="ds-label">Alumnus</div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor 2: Dr. Anitha Venkatesh (No Image Card) */}
        <div className="doctor-card reveal" style={{ gridTemplateColumns: '1fr' }}>
          <div className="doctor-info-side" style={{ padding: '48px 52px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
              <span className="tag tag-blue">BDS</span>
              <span className="tag tag-mint">General Dentist</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {/* Initials Avatar */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'var(--grad-accent)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 800,
                boxShadow: '0 8px 24px rgba(27,127,212,0.25)'
              }}>
                AV
              </div>
              <div>
                <h3 style={{ fontSize: '2.1rem', fontWeight: 900, lineHeight: 1.15 }}>
                  Dr. Anitha Venkatesh <span className="text-grad">BDS</span>
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 600, marginTop: '4px' }}>
                  General &amp; Aesthetic Dentist · Punnagai Dental Hospital
                </p>
              </div>
            </div>

            <p className="doctor-bio-text" style={{ marginBottom: '24px', fontSize: '1rem' }}>
              Dr. Anitha Venkatesh is a dedicated General Dentist practicing at Punnagai Dental Hospital. With a focus on preventive, restorative, and cosmetic dental treatments, she delivers gentle and personalized dental care for patients of all ages, ensuring comfortable and anxiety-free visits.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', borderTop: '1.5px solid var(--border-light)', paddingTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>🦷</span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>Cosmetic Fillings</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Aesthetic restoratives</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>✨</span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>Preventive Care</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Scaling &amp; oral hygiene</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>👶</span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>Pediatric Dentistry</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Kid-friendly treatments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
