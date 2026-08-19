import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctor from './components/Doctor';
import Contact from './components/Contact';
import Works from './components/Works';
import SuccessModal from './components/SuccessModal';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import { useScrollRevealAll } from './hooks/useScrollReveal';

// Floating mint sparkle particles
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -Math.random() * 0.45 - 0.15,
      alpha: Math.random() * 0.35 + 0.1,
      hue: 200 + Math.random() * 20,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = `hsl(${p.hue}, 72%, 58%)`;
        ctx.translate(p.x, p.y);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.5 }}
    />
  );
}

// Stats band
function StatsBand() {
  const stats = [
    { num: '5,000+', label: 'Happy Patients' },
    { num: '10+', label: 'Years Experience' },
    { num: '4.65★', label: 'Google Rating' },
    { num: '₹200', label: 'Consultation Fee' },
  ];
  return (
    <div className="stats-band">
      <div className="stats-grid container">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingData, setBookingData] = useState(null);

  // Global scroll reveal — runs after every page change
  useScrollRevealAll('.reveal', 0.1, [currentPage]);
  useScrollRevealAll('.reveal-left', 0.1, [currentPage]);
  useScrollRevealAll('.reveal-right', 0.1, [currentPage]);

  return (
    <>
      <ParticleCanvas />
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <StatsBand />
            <About />
            <Services />
            <Doctor />
            <Contact onBookingSuccess={setBookingData} />
          </>
        ) : (
          <Works />
        )}
      </main>
      <Footer />
      <Chatbot />
      <SuccessModal bookingData={bookingData} onClose={() => setBookingData(null)} />
    </>
  );
}
