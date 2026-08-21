import React from 'react';

const TOOTH_SVG = (
  <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C13.2 3 11 4.2 9 5.8 7.5 4.7 6 4 4.5 4 2.5 4 1 5.6 1 7.5c0 4.5 1 8 2.5 10.5C5 20.5 6.5 24 7.5 26.5c.5 1.5 1.2 3 2 3 1 0 1.5-1.5 2-3.5.5-1.5 1-3 2-4 .3-.3.7-.5 1-.5h1c.3 0 .7.2 1 .5 1 1 1.5 2.5 2 4 .5 2 1 3.5 2 3.5.8 0 1.5-1.5 2-3C23.5 24 25 20.5 26.5 18 28 15.5 29 12 29 7.5 29 5.6 27.5 4 25.5 4c-1.5 0-3 .7-4.5 1.8C19 4.2 18.8 3 16 3z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background blobs */}
      <div className="hero-bg-blobs">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
      </div>

      <div className="container hero-content-wrap">
        {/* Left — text content */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Online &amp; In-Clinic Booking Open
          </div>

          <h1 className="hero-h1">
            Your Perfect{' '}
            <span className="text-grad">Smile</span>{' '}
            Starts Here
          </h1>

          <p className="hero-sub">
            Punnagai Dental Hospital &amp; Implant Centre in Mayiladuthurai —
            comprehensive oral care from preventive checkups to full-mouth
            reconstruction and advanced implants, for the whole family.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Book Appointment
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#services" className="btn btn-outline">Explore Services</a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-avatars">
              {['S', 'R', 'A', 'M'].map((l, i) => (
                <div
                  key={i}
                  className="hero-trust-avatar"
                  style={{
                    background: [
                      'linear-gradient(135deg,#1B7FD4,#0B5EA8)',
                      'linear-gradient(135deg,#70C0F8,#1B7FD4)',
                      'linear-gradient(135deg,#0B5EA8,#1B7FD4)',
                      'linear-gradient(135deg,#2E9BF0,#1268B3)',
                    ][i],
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div className="hero-trust-text">
              <strong>6,000+ Happy Patients</strong>
              <span>Trusted across Mayiladuthurai</span>
            </div>
          </div>
        </div>

        {/* Right — visual */}
        <div className="hero-right">
          <div className="hero-visual-ring" />
          <div className="hero-visual-blob" />

          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
              alt="Beautiful healthy smile showing professional dental care results at Punnagai Dental Hospital"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Float card 1 */}
          <div className="hero-float-card hero-float-card-1">
            <div className="hfc-inner">
              <div className="hfc-icon hfc-icon-mint">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="hfc-text">
                <strong>25+ Years Experience</strong>
                <span>Dr. Venkatesh R — MDS</span>
              </div>
            </div>
          </div>

          {/* Float card 2 */}
          <div className="hero-float-card hero-float-card-2">
            <div className="hfc-inner">
              <div className="hfc-icon hfc-icon-dark">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="hfc-text">
                <strong>⭐ 4.65 / 5 Rating</strong>
                <span>200+ Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Decorative tooth */}
          <div className="hero-deco-tooth">🦷</div>
        </div>
      </div>
    </section>
  );
}
