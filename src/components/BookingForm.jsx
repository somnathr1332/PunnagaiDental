import React, { useState } from 'react';

const MODES = [
  {
    id: 'in-clinic',
    label: 'In-Clinic',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
  },
  {
    id: 'video',
    label: 'Video',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    id: 'voice',
    label: 'Voice',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548A1 1 0 0121 19v1a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
  },
];

const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '05:30 PM', '06:30 PM', '07:30 PM', '08:00 PM'
];

export default function BookingForm({ onBookingSuccess }) {
  const [mode, setMode] = useState('in-clinic');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !treatment || !date || !time) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Construct WhatsApp message
    const message = `Hello Punnagai Dental Hospital, I would like to book an appointment.
Name: ${fullName.trim()}
Phone: ${phone.trim()}
Treatment: ${treatment}
Consultation Mode: ${mode}
Date & Time: ${date} at ${time}`;

    const whatsappUrl = `https://wa.me/919360293815?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    onBookingSuccess({ name: fullName.trim(), mode, dateTime: `${date} at ${time}` });
    setFullName(''); setPhone(''); setTreatment(''); setDate(''); setTime(''); setMode('in-clinic');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {/* Mode Selector */}
      <div style={{ marginBottom: '22px' }}>
        <label style={{
          display: 'block',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '0.78rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: 'var(--text-headline)',
          marginBottom: '12px',
        }}>
          Consultation Mode
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '7px',
                padding: '14px 8px',
                borderRadius: 'var(--r-sm)',
                border: mode === m.id
                  ? '2px solid var(--blue)'
                  : '2px solid var(--border-light)',
                background: mode === m.id
                  ? 'var(--blue-pale)'
                  : 'var(--off-white)',
                color: mode === m.id ? 'var(--blue-dark)' : 'var(--text-body)',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                boxShadow: mode === m.id ? '0 4px 16px rgba(27,127,212,0.2)' : 'none',
              }}
            >
              {m.icon}
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Row 1: Name + Phone */}
      <div className="form-row" style={{ marginBottom: '16px' }}>
        <div className="form-field" style={{ marginBottom: 0 }}>
          <label htmlFor="bf-name">Full Name *</label>
          <input id="bf-name" type="text" className="form-control" placeholder="e.g. Somnath" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className="form-field" style={{ marginBottom: 0 }}>
          <label htmlFor="bf-phone">Phone / WhatsApp *</label>
          <input id="bf-phone" type="tel" className="form-control" placeholder="+91 94888 12345" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
      </div>

      {/* Treatment */}
      <div className="form-field" style={{ marginBottom: '16px' }}>
        <label htmlFor="bf-treatment">Treatment Needed *</label>
        <select id="bf-treatment" className="form-control" value={treatment} onChange={(e) => setTreatment(e.target.value)} required>
            <option value="">Select Treatment</option>
            <option value="General Checkup / Cleaning">General Checkup / Cleaning</option>
            <option value="Braces / Aligners">Braces / Aligners</option>
            <option value="Root Canal Treatment">Root Canal Treatment</option>
            <option value="Dental Implants">Dental Implants</option>
            <option value="Teeth Whitening">Teeth Whitening</option>
            <option value="Tooth Extraction">Tooth Extraction</option>
            <option value="Other / Not Sure">Other / Not Sure</option>
          </select>
      </div>

      {/* Date */}
      <div className="form-field" style={{ marginBottom: '16px' }}>
        <label htmlFor="bf-date">Appointment Date *</label>
        <input id="bf-date" type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>

      {/* Time Slots */}
      <div className="form-field" style={{ marginBottom: '22px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-headline)', fontWeight: 700, fontSize: '0.9rem' }}>Select Time Slot *</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '8px' }}>
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setTime(slot)}
              style={{
                padding: '12px 6px',
                borderRadius: 'var(--r-sm)',
                border: time === slot ? '2px solid var(--blue)' : '1px solid var(--border)',
                background: time === slot ? 'var(--blue-pale)' : 'white',
                color: time === slot ? 'var(--blue-dark)' : 'var(--text-body)',
                fontFamily: 'var(--font-body)',
                fontWeight: time === slot ? 800 : 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: time === slot ? '0 4px 12px rgba(27,127,212,0.15)' : 'none',
              }}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
        Confirm &amp; Book Appointment
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
        </svg>
      </button>
    </form>
  );
}
