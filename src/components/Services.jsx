import React from 'react';

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    iconClass: 'sc-icon-mint',
    title: 'Teeth Whitening',
    desc: 'Professional bleaching that brightens your smile up to 8 shades in a single clinical session.',
    image: './assets/images/services/teeth-whitening.png',
    featured: false,
    wide: false,
    badge: 'Most Popular',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
      </svg>
    ),
    iconClass: 'sc-icon-sage',
    title: 'Dental Implants',
    desc: 'Titanium implants anchored in the jawbone, topped with natural shade-matched porcelain crowns for a permanent, natural look that lasts a lifetime.',
    image: './assets/images/services/dental-implants.png',
    featured: false,
    wide: true,
    badge: 'Advanced',
  },
  {
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 32 32">
        <path d="M16 3C13.2 3 11 4.2 9 5.8 7.5 4.7 6 4 4.5 4 2.5 4 1 5.6 1 7.5c0 4.5 1 8 2.5 10.5C5 20.5 6.5 24 7.5 26.5c.5 1.5 1.2 3 2 3 1 0 1.5-1.5 2-3.5.5-1.5 1-3 2-4 .3-.3.7-.5 1-.5h1c.3 0 .7.2 1 .5 1 1 1.5 2.5 2 4 .5 2 1 3.5 2 3.5.8 0 1.5-1.5 2-3C23.5 24 25 20.5 26.5 18 28 15.5 29 12 29 7.5 29 5.6 27.5 4 25.5 4c-1.5 0-3 .7-4.5 1.8C19 4.2 18.8 3 16 3z"/>
      </svg>
    ),
    iconClass: 'sc-icon-white',
    title: 'Expert Oral Care',
    desc: 'Full-spectrum dental treatments backed by 10+ years of expertise and modern clinical infrastructure.',
    featured: true,
    wide: false,
    badge: null,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    iconClass: 'sc-icon-warm',
    title: 'Braces & Aligners',
    desc: 'Custom clear aligners and traditional braces for correcting crowded or misaligned teeth.',
    image: './assets/images/services/braces.png',
    featured: false,
    wide: false,
    badge: null,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
      </svg>
    ),
    iconClass: 'sc-icon-dark',
    title: 'Root Canal Treatment',
    desc: 'Advanced, virtually painless endodontic therapy using rotary files and modern local anesthesia.',
    image: './assets/images/services/root-canal.png',
    featured: false,
    wide: false,
    badge: null,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    iconClass: 'sc-icon-mint',
    title: 'Laminates & Veneers',
    desc: 'Thin porcelain shells to correct chips, gaps and discolouration for a picture-perfect smile.',
    image: './assets/images/services/veneers.png',
    featured: false,
    wide: false,
    badge: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <div className="reveal">
            <div className="section-eyebrow">What We Offer</div>
            <h2 className="section-title">
              Treatments Built for{' '}
              <span className="text-grad">Every Smile</span>
            </h2>
          </div>
          <p className="section-desc reveal reveal-delay-2">
            From preventive care to complex surgeries — our certified specialists cover every aspect of your oral health.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`service-card reveal reveal-delay-${(i % 3) + 1}${s.featured ? ' featured' : ''}${s.wide ? ' wide' : ''}`}
            >
              {s.image && (
                <div className="sc-image">
                  <img src={s.image} alt={`${s.title} at Punnagai Dental Hospital in Mayiladuthurai`} />
                </div>
              )}
              <div className="sc-content">
                <div className={`sc-icon ${s.iconClass}`}>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.badge && (
                  <div className="sc-tag">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {s.badge}
                  </div>
                )}
              </div>
              <div className="sc-deco" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
