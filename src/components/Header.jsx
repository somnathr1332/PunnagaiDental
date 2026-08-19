import React, { useState, useEffect } from 'react';

const TOOTH_SVG = (
  <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C13.2 3 11 4.2 9 5.8 7.5 4.7 6 4 4.5 4 2.5 4 1 5.6 1 7.5c0 4.5 1 8 2.5 10.5C5 20.5 6.5 24 7.5 26.5c.5 1.5 1.2 3 2 3 1 0 1.5-1.5 2-3.5.5-1.5 1-3 2-4 .3-.3.7-.5 1-.5h1c.3 0 .7.2 1 .5 1 1 1.5 2.5 2 4 .5 2 1 3.5 2 3.5.8 0 1.5-1.5 2-3C23.5 24 25 20.5 26.5 18 28 15.5 29 12 29 7.5 29 5.6 27.5 4 25.5 4c-1.5 0-3 .7-4.5 1.8C19 4.2 18.8 3 16 3z"/>
  </svg>
);

export default function Header({ currentPage, onPageChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (currentPage === 'home') {
        const sections = ['home', 'about', 'services', 'doctor', 'contact'];
        let current = 'home';
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && window.scrollY >= el.offsetTop - 130) current = id;
        }
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNav = (e, id) => {
    setMenuOpen(false);
    if (id === 'works') {
      e.preventDefault();
      onPageChange('works');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onPageChange('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
      }, 50);
    }
  };

  const isActive = (id) => {
    if (id === 'works') return currentPage === 'works';
    return currentPage === 'home' && activeSection === id;
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => handleNav(e, 'home')}>
          <div className="nav-logo-icon" style={{ background: 'transparent', boxShadow: 'none' }}>
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Punnagai Dental Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
          <div className="nav-logo-text" style={{ display: 'flex', flexDirection: 'column' }}>
            <strong style={{ fontFamily: 'var(--font-logo)', textTransform: 'uppercase', fontSize: '1.6rem', fontWeight: 700, lineHeight: 1.1, color: 'var(--blue-navy)', letterSpacing: '0.5px' }}>
              Punnagai Dental
            </strong>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Hospital &amp; Implant Centre
            </span>
          </div>
        </a>

        {/* Nav links */}
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {[
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'Services', id: 'services' },
            { label: 'Doctor', id: 'doctor' },
            { label: 'Our Works', id: 'works' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link${isActive(id) ? ' active' : ''}`}
              onClick={(e) => handleNav(e, id)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-link nav-cta"
            onClick={(e) => handleNav(e, 'contact')}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>
    </header>
  );
}
