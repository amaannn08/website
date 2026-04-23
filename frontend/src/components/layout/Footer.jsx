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
    <footer className="border-t border-neutral-800 bg-neutral-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2 mb-4">
              <span
                className="text-3xl font-black tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif", color: '#fbbf24' }}
              >
                WEH
              </span>
              <span className="text-white text-sm font-medium tracking-widest uppercase opacity-60">
                Ventures
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              WEH is a high-conviction, early-stage venture fund. We invest in
              high-potential founders building what the market doesn't yet have.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Pages
            </p>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              {footerNav.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  aria-label={`Navigate to ${label} page`}
                  className="text-sm text-neutral-400 hover:text-amber-400 transition-colors duration-200 w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © 2025 WEH Ventures
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={`Read our ${label}`}
                className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
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
