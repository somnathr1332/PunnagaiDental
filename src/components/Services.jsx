import React from 'react';

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    iconClass: 'sc-icon-sage',
    title: 'CBCT (3D Dental Imaging)',
    desc: '3D Cone Beam Computed Tomography provides highly detailed three-dimensional views of teeth, bones, and nerve pathways for precise treatment planning.',
    image: './assets/images/services/cbct.png',
    alt: 'Advanced CBCT 3D dental imaging scanner at Punnagai Dental Hospital in Mayiladuthurai',
    featured: false,
    wide: false,
    badge: 'Advanced Tech',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    iconClass: 'sc-icon-warm',
    title: 'OPG (Panoramic X-Ray)',
    desc: 'Orthopantomogram provides a wide panoramic view of the entire upper and lower jaws, teeth, and joints in a single digital scan.',
    image: './assets/images/services/opg.jpg',
    alt: 'OPG panoramic digital X-ray screen showing patient jaw and teeth structure in Mayiladuthurai',
    featured: false,
    wide: false,
    badge: 'Diagnostic',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    iconClass: 'sc-icon-white',
    title: '3D Face Scanner',
    desc: 'Cutting-edge facial scanning captures precise 3D aesthetics to model and simulate cosmetic and reconstructive results before procedure begins.',
    featured: true,
    wide: false,
    badge: null,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .83-.564 1.498-1.259 1.498-.695 0-1.259-.668-1.259-1.498V3.104m10.5 0v1.244c0 .83-.564 1.498-1.259 1.498-.695 0-1.259-.668-1.259-1.498V3.104M3 5.25h18M3 12h18m-18 6.75h18m-18-13.5v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V5.25" />
      </svg>
    ),
    iconClass: 'sc-icon-dark',
    title: 'Intraoral 3D Scanner',
    desc: 'Say goodbye to messy dental molds. Our digital wand captures high-precision 3D color impressions of your teeth in seconds with maximum comfort.',
    image: './assets/images/services/intraoral-scanner.png',
    alt: 'Intraoral 3D digital scanner scanning teeth for impressions at Punnagai Dental Hospital',
    featured: false,
    wide: false,
    badge: 'Painless Molds',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    iconClass: 'sc-icon-mint',
    title: 'Dental Lasers',
    desc: 'Advanced soft-tissue lasers perform clean, minimally invasive gum surgeries, decay removal, and teeth bleaching with minimal bleeding and faster healing.',
    image: './assets/images/services/dental-lasers.png',
    alt: 'Precision dental laser system performing painless soft-tissue treatment in Mayiladuthurai',
    featured: false,
    wide: false,
    badge: 'Painless Lasers',
  },
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
    desc: 'Full-spectrum dental treatments backed by 25+ years of expertise and modern clinical infrastructure.',
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
                  <img
                    src={s.image}
                    alt={s.alt || `${s.title} at Punnagai Dental Hospital in Mayiladuthurai`}
                    loading="lazy"
                  />
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
