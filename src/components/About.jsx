import React from 'react';

const FEATURES = [
  'Painless Treatments',
  'Modern Equipment',
  'Family Dentistry',
  'Affordable Fees',
  'Sterilized Clinic',
  'Online Booking',
];

const CHECK_ICON = (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
  </svg>
);

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-wrap">
          {/* Visual Side */}
          <div className="about-visual-side reveal-left">
            <div className="about-circle-deco" />
            <div className="about-image-stack">
              <div className="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                  alt="Modern dental clinic treatment room at Punnagai Dental Hospital in Mayiladuthurai"
                  loading="lazy"
                />
              </div>

              <div className="about-img-small">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&q=80"
                  alt="Advanced clean dental equipment and clinical setups at Punnagai Dental"
                  loading="lazy"
                />
              </div>

              {/* Floating badge */}
              <div className="about-mini-card about-mini-card-1">
                <div className="amc-inner">
                  <div className="amc-icon">25+</div>
                  <div className="amc-text">
                    <strong>Years of Excellence</strong>
                    <span>In clinical dental care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="about-text-side reveal-right">
            <div className="section-eyebrow">Trusted Dental Partner</div>
            <h2 className="section-title">
              Modern Dental Care Focused on{' '}
              <span className="text-grad">Comfort &amp; Results</span>
            </h2>
            <p style={{ fontSize: '1.06rem', lineHeight: 1.8, color: 'var(--text-body)' }}>
              At Punnagai Dental Hospital &amp; Implant Centre, we stand as a trusted healthcare
              provider in Mayiladuthurai. Our focus is on comprehensive care, patient education,
              and cutting-edge treatments by experienced specialists — all under one roof.
            </p>

            <div className="about-features">
              {FEATURES.map((f) => (
                <div className="about-feature" key={f}>
                  <span className="af-check">{CHECK_ICON}</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">
              Book a Consultation
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
