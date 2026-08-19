import React, { useState, useRef, useEffect } from 'react';

const QUICK_REPLIES = [
  { label: 'Consultation Fee', value: 'fee' },
  { label: 'Clinic Hours', value: 'hours' },
  { label: 'Book Appointment', value: 'book' },
  { label: 'Clinic Location', value: 'location' },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! Welcome to Punnagai Dental Hospital & Implant Centre. I'm your virtual assistant — ask me anything! 😊",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const getBotResponse = (input) => {
    const text = input.toLowerCase();
    if (text.includes('fee') || text.includes('price') || text.includes('cost') || text.includes('charge')) {
      return 'Our general consultation fee is ₹200. Treatment estimates for root canal, braces, or implants are provided in-clinic after diagnosis.';
    }
    if (text.includes('hour') || text.includes('time') || text.includes('timing') || text.includes('open') || text.includes('close') || text.includes('sunday')) {
      return 'We are open Mon – Sat: 10:00 AM – 2:00 PM & 5:30 PM – 9:00 PM. We are closed on Sundays.';
    }
    if (text.includes('book') || text.includes('appointment') || text.includes('schedule') || text.includes('visit') || text.includes('consult')) {
      return "You can book your appointment using the online form on this page! Scroll down to 'Schedule Your Consultation' or click 'Book Now' in the header.";
    }
    if (text.includes('location') || text.includes('address') || text.includes('where') || text.includes('landmark') || text.includes('pattamangalam')) {
      return (
        <>
          We are located at No. 84, M A Rehman Complex, Pattamangalam Street, Opposite Sarojini Hospital, Mayiladuthurai – 609001. 📍<br/><br/>
          <a href="https://maps.app.goo.gl/A5JqXBMLWEsA3JPX9" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', textDecoration: 'underline', fontWeight: 600 }}>
            Open in Google Maps ↗
          </a>
        </>
      );
    }
    if (text.includes('doctor') || text.includes('specialist') || text.includes('venkatesh') || text.includes('mds') || text.includes('implantologist')) {
      return 'Dr. Venkatesh R (BDS, MDS) is our chief surgeon and implantologist with 10+ years of experience in advanced dental surgery.';
    }
    if (text.includes('mobile') || text.includes('call') || text.includes('phone') || text.includes('number') || text.includes('contact')) {
      return 'You can reach us directly at +91 93602 93815 for appointments and emergency care.';
    }
    return "I couldn't quite find an answer for that. For more specific questions, please reach out to us directly by calling or messaging +91 93602 93815 on WhatsApp! 🦷";
  };

  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: getBotResponse(text) }]);
    }, 600);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  return (
    <div className="chatbot-wrapper">
      {/* Floating trigger bubble */}
      {!isOpen && (
        <button
          className="chatbot-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open Dental Assistant Chatbot"
          title="Chat with AI Assistant"
        >
          {/* Robot / AI face icon */}
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Antenna */}
            <line x1="32" y1="4" x2="32" y2="14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="32" cy="3" r="2.5" fill="white"/>
            {/* Head */}
            <rect x="10" y="14" width="44" height="34" rx="9" fill="white" fillOpacity="0.18" stroke="white" strokeWidth="2.5"/>
            {/* Eyes */}
            <rect x="18" y="24" width="10" height="8" rx="3" fill="white"/>
            <rect x="36" y="24" width="10" height="8" rx="3" fill="white"/>
            {/* Eye pupils */}
            <rect x="21" y="27" width="4" height="4" rx="2" fill="rgba(27,127,212,0.9)"/>
            <rect x="39" y="27" width="4" height="4" rx="2" fill="rgba(27,127,212,0.9)"/>
            {/* Mouth — happy smile */}
            <path d="M22 38 Q32 46 42 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            {/* Ears / side bolts */}
            <rect x="5" y="26" width="5" height="10" rx="2.5" fill="white" fillOpacity="0.5"/>
            <rect x="54" y="26" width="5" height="10" rx="2.5" fill="white" fillOpacity="0.5"/>
          </svg>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: 40, height: 40,
                background: 'rgba(27,127,212,0.2)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--blue-light)',
                flexShrink: 0,
              }}>
                {/* Robot face — mini version */}
                <svg width="22" height="22" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="32" y1="4" x2="32" y2="14" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                  <circle cx="32" cy="3" r="3" fill="white"/>
                  <rect x="10" y="14" width="44" height="34" rx="9" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2.5"/>
                  <rect x="18" y="24" width="10" height="8" rx="3" fill="white"/>
                  <rect x="36" y="24" width="10" height="8" rx="3" fill="white"/>
                  <rect x="21" y="27" width="4" height="4" rx="2" fill="rgba(27,127,212,0.9)"/>
                  <rect x="39" y="27" width="4" height="4" rx="2" fill="rgba(27,127,212,0.9)"/>
                  <path d="M22 38 Q32 46 42 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <rect x="5" y="26" width="5" height="10" rx="2.5" fill="white" fillOpacity="0.4"/>
                  <rect x="54" y="26" width="5" height="10" rx="2.5" fill="white" fillOpacity="0.4"/>
                </svg>
              </div>
              <div>
                <h4>Smile Bot 🦷</h4>
                <p>Dental Assistant · Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chatbot"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: 34, height: 34,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.9)',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-msg ${msg.sender === 'bot' ? 'bot' : 'user'}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '7px',
            padding: '10px 16px 0',
            background: 'var(--off-white)',
            borderTop: '1.5px solid var(--border-light)',
          }}>
            {QUICK_REPLIES.map((r, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(r.label)}
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  padding: '6px 13px',
                  borderRadius: 'var(--r-full)',
                  border: '1.5px solid var(--border)',
                  background: 'white',
                  color: 'var(--blue-dark)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--blue-pale)'; e.currentTarget.style.borderColor = 'var(--blue)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            className="chatbot-input-row"
            onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
          >
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type a message…"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
            />
            <button type="submit" className="chatbot-send" aria-label="Send">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
