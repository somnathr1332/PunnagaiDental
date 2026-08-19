import React, { useEffect, useState } from 'react';

export default function SuccessModal({ bookingData, onClose }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (bookingData) {
      const timer = setTimeout(() => setActive(true), 10);
      return () => clearTimeout(timer);
    } else {
      setActive(false);
    }
  }, [bookingData]);

  if (!bookingData) return null;

  const handleClose = () => {
    setActive(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className="modal-overlay"
      style={{
        display: 'flex',
        opacity: active ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) handleClose();
      }}
    >
      <div
        className="modal-box"
        style={{
          transform: active ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Icon */}
        <div className="modal-icon">
          <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>

        <h3>Appointment Confirmed! 🎉</h3>
        <p>
          Thank you, <strong>{bookingData.name}</strong>! Your booking request has been received. Here's your summary:
        </p>

        {/* Summary box */}
        <div style={{
          background: 'var(--blue-ultra)',
          border: '1.5px solid var(--border-light)',
          borderRadius: 'var(--r-md)',
          padding: '20px 24px',
          textAlign: 'left',
          marginBottom: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {[
            { label: 'Patient Name', value: bookingData.name },
            { label: 'Mode', value: `${bookingData.mode.charAt(0).toUpperCase() + bookingData.mode.slice(1)} Consultation` },
            { label: 'Date & Time', value: bookingData.dateTime },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{label}</span>
              <span style={{ color: 'var(--text-headline)', fontWeight: 700 }}>{value}</span>
            </div>
          ))}
        </div>

        <button onClick={handleClose} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          Done — Close
        </button>
      </div>
    </div>
  );
}
