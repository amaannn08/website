import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/approach', label: 'Approach' },
  { to: '/team', label: 'Team' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: '#ffffff',
        borderBottom: scrolled ? '1px solid #e5e5e5' : '1px solid #e5e5e5',
        transition: 'box-shadow 0.2s',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <Link to="/" aria-label="WEH Ventures — Home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/images/logo-black.svg" alt="WEH Ventures" style={{ height: '28px', width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="nav-desktop">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              aria-label={`Navigate to ${label}`}
              style={({ isActive }) => ({
                fontSize: '0.8125rem',
                fontWeight: isActive ? 600 : 500,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                color: isActive ? '#f97316' : '#0a0a0a',
                transition: 'color 0.15s',
              })}
              onMouseEnter={e => { if (e.currentTarget.style.color !== '#f97316') e.currentTarget.style.color = '#f97316'; }}
              onMouseLeave={e => { /* NavLink handles active state */ }}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://forms.gle/2156kxYjbMqcsyJe7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Submit your pitch to WEH Ventures (opens external form)"
            style={{
              display: 'inline-flex', alignItems: 'center',
              minHeight: '40px', padding: '0 1.25rem',
              backgroundColor: '#f97316', color: '#ffffff',
              fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '2px',
              transition: 'background-color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ea580c'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f97316'}
          >
            Pitch to Us
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', minHeight: '44px', minWidth: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0a0a' }}
          className="nav-hamburger"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          backgroundColor: '#ffffff',
          borderTop: open ? '1px solid #e5e5e5' : 'none',
        }}
      >
        <nav aria-label="Mobile navigation" style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              aria-label={`Navigate to ${label}`}
              style={({ isActive }) => ({
                fontSize: '1rem', fontWeight: 600,
                textDecoration: 'none',
                color: isActive ? '#f97316' : '#0a0a0a',
                padding: '0.5rem 0', transition: 'color 0.15s',
              })}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://forms.gle/2156kxYjbMqcsyJe7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Submit your pitch to WEH Ventures (opens external form)"
            style={{ display: 'flex', justifyContent: 'center', minHeight: '44px', padding: '0.75rem 1.5rem', backgroundColor: '#f97316', color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', marginTop: '0.5rem' }}
          >
            Pitch to Us
          </a>
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) { .nav-desktop { display: flex !important; } .nav-hamburger { display: none !important; } }
        @media (max-width: 767px) { .nav-desktop { display: none !important; } .nav-hamburger { display: flex !important; } }
      `}</style>
    </header>
  );
}
