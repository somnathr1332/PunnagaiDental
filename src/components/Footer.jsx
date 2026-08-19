import React, { useState } from 'react';

const TOOTH_SVG = (
  <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C13.2 3 11 4.2 9 5.8 7.5 4.7 6 4 4.5 4 2.5 4 1 5.6 1 7.5c0 4.5 1 8 2.5 10.5C5 20.5 6.5 24 7.5 26.5c.5 1.5 1.2 3 2 3 1 0 1.5-1.5 2-3.5.5-1.5 1-3 2-4 .3-.3.7-.5 1-.5h1c.3 0 .7.2 1 .5 1 1 1.5 2.5 2 4 .5 2 1 3.5 2 3.5.8 0 1.5-1.5 2-3C23.5 24 25 20.5 26.5 18 28 15.5 29 12 29 7.5 29 5.6 27.5 4 25.5 4c-1.5 0-3 .7-4.5 1.8C19 4.2 18.8 3 16 3z"/>
  </svg>
);

const FAQS = [
  {
    q: 'What are the clinic timings?',
    a: 'Mon – Sat: 10:00 AM – 2:00 PM and 5:30 PM – 9:00 PM. Closed Sundays.',
  },
  {
    q: 'What is the consultation fee?',
    a: '₹200 for a basic consultation. Treatment fees are discussed after diagnosis.',
  },
  {
    q: 'Do you offer online consultations?',
    a: 'Yes! We offer voice and video consultations in addition to in-clinic visits.',
  },
  {
    q: 'Are clinical procedures painless?',
    a: 'Yes. We specialise in painless procedures using advanced local anaesthesia and modern techniques.',
  },
];

export default function Footer() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <footer className="footer">
      <div className="container">
        {/* Main grid */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo-row">
              <div className="footer-logo-icon">{TOOTH_SVG}</div>
              <div>
                <div className="footer-logo-name">Punnagai Dental</div>
                <div className="footer-logo-sub">Hospital &amp; Implant Centre</div>
              </div>
            </a>
            <p>
              Comprehensive, painless oral treatments in Mayiladuthurai — delivered by certified specialists committed to your comfort and smile.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {['Home', 'About Us', 'Services', 'Meet the Doctor', 'Our Works', 'Contact'].map((l, i) => {
                const hrefs = ['#home', '#about', '#services', '#doctor', '#works', '#contact'];
                return <li key={i}><a href={hrefs[i]}>{l}</a></li>;
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>No. 84, M A Rehman Complex, Pattamangalam Street, Mayiladuthurai – 609001</span>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548A1 1 0 0121 19v1a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+91 94888 12345</span>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>contact@punnaigaidentals.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="footer-faq">
          <h4>Frequently Asked Questions</h4>
          <div className="faq-grid">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-plus">+</span>
                </button>
                <div className="faq-body">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span>© 2026 Punnagai Dental Hospital, Mayiladuthurai. All Rights Reserved.</span>
            <span>Designed with ❤️ for your smile</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
