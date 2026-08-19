import React from 'react';

export default function Doctor() {
  return (
    <section id="doctor" className="doctor-section">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Meet the Expert</div>
          <h2 className="section-title">
            Your Smile in{' '}
            <span className="text-grad">Trusted Hands</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Certified, compassionate and committed to your comfort at every visit.
          </p>
        </div>

        <div className="doctor-card reveal">
          {/* Image Side */}
          <div className="doctor-image-side">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
              alt="Dr. Venkatesh R"
            />
            <div className="doctor-image-overlay" />
            <div className="doctor-image-badge">
              <div className="dib-name">Dr. Venkatesh R</div>
              <div className="dib-role">BDS, MDS — Chief Implantologist &amp; Surgeon</div>
            </div>
          </div>

          {/* Info Side */}
          <div className="doctor-info-side">
            <div className="tag tag-mint">Chief Surgeon</div>

            <h3 style={{ fontSize: '2.1rem', fontWeight: 900, marginTop: '18px', marginBottom: '4px', lineHeight: 1.15 }}>
              Clinical Expertise &amp;{' '}
              <span className="text-grad">Compassionate Care</span>
            </h3>

            <blockquote className="doctor-quote">
              "My goal is to provide thorough explanations of all clinical procedures and deliver professional treatment tailored to each patient's individual needs."
            </blockquote>

            <p className="doctor-bio-text">
              Completed BDS and MDS at leading medical and dental institutions, gaining extensive experience in advanced implantology, complex surgical extractions, and comprehensive restorative care. Committed to clinical excellence, ensuring patients receive state-of-the-art, comfortable treatments.
            </p>

            <a href="#contact" className="btn btn-primary">
              Book with Dr. Venkatesh
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>

            <div className="doctor-stats-row">
              <div className="ds-item">
                <div className="ds-num">10+</div>
                <div className="ds-label">Years Exp</div>
              </div>
              <div className="ds-item">
                <div className="ds-num">5k+</div>
                <div className="ds-label">Happy Smiles</div>
              </div>
              <div className="ds-item">
                <div className="ds-num">MDS</div>
                <div className="ds-label">Post Graduate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
