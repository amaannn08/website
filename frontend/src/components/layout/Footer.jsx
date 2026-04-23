import { Link } from 'react-router-dom';

const footerNav = [
  { to: '/approach', label: 'Approach' },
  { to: '/team', label: 'Team' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Legal Disclosures', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(249,115,22,0.15)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '1rem' }}>
              <img
                src="/images/logo-white.svg"
                alt="WEH Ventures"
                style={{ height: '36px', width: 'auto' }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '360px' }}>
              WEH is a high-conviction, early-stage venture fund. We invest in high-potential founders building what the market doesn't yet have.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f97316', marginBottom: '1rem' }}>
              Pages
            </p>
            <nav aria-label="Footer navigation" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerNav.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  aria-label={`Navigate to ${label} page`}
                  style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s', width: 'fit-content' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>© 2025 WEH Ventures</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {legalLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={`Read our ${label}`}
                style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
