import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/approach', label: 'Approach' },
  { to: '/team', label: 'Team' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800' : 'bg-transparent'
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          aria-label="WEH Ventures — Home"
          className="flex items-center gap-2 group"
        >
          <span
            className="text-2xl font-black tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", color: '#fbbf24' }}
          >
            WEH
          </span>
          <span className="text-white text-sm font-medium tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Ventures
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              aria-label={`Navigate to ${label}`}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-200 relative pb-0.5 ${
                  isActive
                    ? 'text-amber-400'
                    : 'text-neutral-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-amber-400" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a
            href="https://forms.gle/2156kxYjbMqcsyJe7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Submit your pitch to WEH Ventures (opens external form)"
            className="min-h-[44px] min-w-[44px] flex items-center px-5 py-2 bg-amber-400 text-black text-sm font-bold tracking-wide rounded-sm hover:bg-amber-300 transition-colors duration-200"
          >
            Pitch to Us
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:text-amber-400 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 border-b border-neutral-800' : 'max-h-0'
        } bg-neutral-950/98 backdrop-blur-md`}
      >
        <nav aria-label="Mobile navigation" className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              aria-label={`Navigate to ${label}`}
              className={({ isActive }) =>
                `text-base font-medium py-2 transition-colors ${
                  isActive ? 'text-amber-400' : 'text-neutral-300 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://forms.gle/2156kxYjbMqcsyJe7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Submit your pitch to WEH Ventures (opens external form)"
            className="mt-2 flex items-center justify-center min-h-[44px] px-5 py-3 bg-amber-400 text-black font-bold tracking-wide rounded-sm hover:bg-amber-300 transition-colors text-sm"
          >
            Pitch to Us
          </a>
        </nav>
      </div>
    </header>
  );
}
