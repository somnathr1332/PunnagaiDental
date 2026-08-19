import React from 'react';
import BookingForm from './BookingForm';

export default function Contact({ onBookingSuccess }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Reach Out Today</div>
          <h2 className="section-title">
            Schedule Your{' '}
            <span className="text-grad">Consultation</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Book a physical visit, phone callback, or online video consultation — your convenience matters to us.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — info cards */}
          <div className="contact-left reveal-left">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '10px' }}>
              We're Here to Help
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.96rem', marginBottom: '4px', lineHeight: 1.7 }}>
              Visit us at our clinic in Mayiladuthurai or get in touch any way you prefer.
            </p>

            <div className="contact-info-cards">
              {/* Address */}
              <div className="cic">
                <div className="cic-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="cic-body">
                  <h4>Clinic Location</h4>
                  <p>No. 84, M A Rehman Complex, Pattamangalam Street,<br />Opposite Sarojini Hospital, Mayiladuthurai – 609001</p>
                  <a href="https://maps.app.goo.gl/A5JqXBMLWEsA3JPX9" target="_blank" rel="noopener noreferrer">
                    View on Google Maps ↗
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="cic">
                <div className="cic-icon dark">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="cic-body">
                  <h4>Clinic Timings</h4>
                  <p>Mon – Sat: 10:00 AM – 02:00 PM<br />Evening: 05:30 PM – 09:00 PM<br />(Sunday: Closed)</p>
                </div>
              </div>

              {/* Contact */}
              <div className="cic">
                <div className="cic-icon coral">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="cic-body">
                  <h4>Contact &amp; Fees</h4>
                  <ul>
                    <li><strong>Consultation:</strong> ₹200</li>
                    <li><strong>Phone / WhatsApp:</strong> +91 94888 12345</li>
                    <li><strong>Email:</strong> contact@punnaigaidentals.com</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map-wrap">
              <iframe
                src="https://maps.google.com/maps?q=Punnagai%20Dental%20Hospital%20%26%20Implant%20Centre,%20Pattamangalam%20Street,%20Opposite%20to%20Sarojini%20Hospital,%20Mayiladuthurai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                title="Punnagai Dental Hospital Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right — booking form */}
          <div className="reveal-right">
            <div className="booking-panel">
              <h3>Book an Appointment</h3>
              <p>Fill in the details below and we'll confirm your slot.</p>
              <BookingForm onBookingSuccess={onBookingSuccess} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
