import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const CATEGORIES = [
  {
    id: 'whitening',
    label: 'Teeth Whitening',
    title: 'Teeth Whitening Treatment',
    desc: 'Advanced bleaching removes stubborn coffee, tea, and tobacco stains — brightening your smile up to 8 shades in a single clinical session.',
    mode: 'whitening',
    beforeImage: 'https://saidentalmayiladuthurai.com/images/treatments/before-1.jpeg',
    afterImage: 'https://saidentalmayiladuthurai.com/images/treatments/after-1.jpeg',
    tag: 'tag-teal',
  },
  {
    id: 'implant',
    label: 'Dental Implants',
    title: 'Single-Tooth Implant Restored',
    desc: 'Titanium post implant anchored into the jawbone, topped with a natural shade-matched porcelain crown for a lifetime of confident smiles.',
    mode: 'implant',
    beforeImage: 'https://saidentalmayiladuthurai.com/images/treatments/before-2.jpeg',
    afterImage: 'https://saidentalmayiladuthurai.com/images/treatments/after-2.jpeg',
    tag: 'tag-indigo',
  },
  {
    id: 'braces',
    label: 'Braces & Aligners',
    title: 'Clear Aligners Alignment',
    desc: 'Custom clear aligners corrected crowded and misaligned teeth, shifting them into optimal alignment over 9 months — invisibly.',
    mode: 'braces',
    beforeImage: 'https://saidentalmayiladuthurai.com/images/treatments/before-3.jpeg',
    afterImage: 'https://saidentalmayiladuthurai.com/images/treatments/after-3.jpeg',
    tag: 'tag-coral',
  },
  {
    id: 'veneers',
    label: 'Laminates & Veneers',
    title: 'Porcelain Veneers Placement',
    desc: 'Thin porcelain shells repaired a chipped incisor, adjusted slight spacing, and created a perfectly uniform, camera-ready smile.',
    mode: 'veneers',
    beforeImage: 'https://saidentalmayiladuthurai.com/images/treatments/before-1.jpeg',
    afterImage: 'https://saidentalmayiladuthurai.com/images/treatments/after-1.jpeg',
    tag: 'tag-teal',
  },
];

export default function Works() {
  const [active, setActive] = useState(0);
  const current = CATEGORIES[active];

  return (
    <section id="works" className="works-section" style={{ paddingTop: '140px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            Gallery &amp; Case Studies
          </div>
          <h2 className="section-title">
            Real{' '}
            <span className="text-grad">Smile Transformations</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Drag the slider to reveal before &amp; after results from our actual patient treatments.
          </p>
        </div>

        {/* Tabs */}
        <div className="works-tabs">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              className={`works-tab${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Display */}
        <div className="works-display">
          <div>
            <BeforeAfterSlider
              key={current.id}
              mode={current.mode}
              beforeImage={current.afterImage}
              afterImage={current.beforeImage}
            />
          </div>

          <div className="works-info-panel">
            <span className={`tag ${current.tag}`}>{current.label} Case</span>
            <h3>{current.title}</h3>
            <p>{current.desc}</p>
            <a href="#contact" className="btn btn-primary">
              Book Similar Treatment
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
