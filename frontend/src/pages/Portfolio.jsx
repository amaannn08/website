import { useState, useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const FILTERS = [
  'All', 'Fintech', 'Deeptech & AI', 'Consumer Tech',
  'Agri-Tech', 'Sustainability', 'Supply Chain', 'Health & Wellness', 'Brands',
];

const portfolio = [
  { name: 'MasterChow', sector: 'Brands', tagline: 'Ready-to-cook products for Asian cuisine', status: 'EXITED' },
  { name: 'Smallcase', sector: 'Fintech', tagline: 'Leading platform for passive investing', status: 'EXITED' },
  { name: 'Apps for Bharat', sector: 'Consumer Tech', tagline: 'All-encompassing spiritual app' },
  { name: 'Jar', sector: 'Fintech', tagline: 'Digital gold savings platform for Bharat' },
  { name: 'Animall', sector: 'Agri-Tech', tagline: 'Platform focused on dairy farmers' },
  { name: 'Unbox Robotics', sector: 'Deeptech & AI', tagline: 'New-age swarm robots for automating warehouses' },
  { name: 'Pratilipi', sector: 'Consumer Tech', tagline: 'Largest vernacular literature platform in India' },
  { name: 'Flent', sector: 'Consumer Tech', tagline: 'Fully managed designer homes for mobile Indians' },
  { name: 'Draconic', sector: 'Deeptech & AI', tagline: 'AI co-pilot for F&O trading' },
  { name: 'Noto', sector: 'Brands', tagline: 'Low-calorie dessert brand' },
  { name: 'Fragaria', sector: 'Agri-Tech', tagline: 'Full-stack agri-tech platform for premium and exotic fruits' },
  { name: 'MedMitra AI', sector: 'Deeptech & AI', tagline: 'AI solutions for doctors supporting faster diagnosis' },
  { name: 'Sustvest', sector: 'Sustainability', tagline: 'Alternate investment platform for solar assets' },
  { name: 'Knot', sector: 'Consumer Tech', tagline: '60-min try-and-buy fashion delivery' },
  { name: 'Segmind', sector: 'Deeptech & AI', tagline: 'API stack for Gen-AI models' },
  { name: 'Mitigata', sector: 'Fintech', tagline: 'Smarter cyber-risk insurance' },
  { name: 'Magma', sector: 'Supply Chain', tagline: 'Empowering factories in India to perform efficiently' },
  { name: 'Clinikk', sector: 'Health & Wellness', tagline: 'Chain of subscription-based primary care centers' },
  { name: 'Infinity Box', sector: 'Sustainability', tagline: 'Re-usable packaging for F&B' },
  { name: 'Hectar', sector: 'Agri-Tech', tagline: 'Full-stack agri trading platform' },
  { name: 'Game Theory', sector: 'Consumer Tech', tagline: 'Smart sports facilities for coaching and recreational play' },
  { name: 'Timepass', sector: 'Consumer Tech', tagline: 'TikTok-like platform for hyper-casual games' },
  { name: 'Stellar Play', sector: 'Consumer Tech', tagline: 'Gaming studio making casual games', status: 'EXITED' },
];

const sectorColors = {
  Fintech:           { bg: 'rgba(249,115,22,0.08)', text: '#ea580c', border: 'rgba(249,115,22,0.25)' },
  'Deeptech & AI':   { bg: 'rgba(99,102,241,0.08)', text: '#6366f1', border: 'rgba(99,102,241,0.2)' },
  'Consumer Tech':   { bg: 'rgba(16,185,129,0.08)', text: '#059669', border: 'rgba(16,185,129,0.2)' },
  'Agri-Tech':       { bg: 'rgba(20,184,166,0.08)', text: '#0d9488', border: 'rgba(20,184,166,0.2)' },
  Sustainability:    { bg: 'rgba(101,163,13,0.08)', text: '#65a30d', border: 'rgba(101,163,13,0.2)' },
  'Supply Chain':    { bg: 'rgba(245,158,11,0.08)', text: '#d97706', border: 'rgba(245,158,11,0.2)' },
  'Health & Wellness': { bg: 'rgba(236,72,153,0.08)', text: '#db2777', border: 'rgba(236,72,153,0.2)' },
  Brands:            { bg: 'rgba(249,115,22,0.06)', text: '#f97316', border: 'rgba(249,115,22,0.18)' },
};

function SectorTag({ sector }) {
  const c = sectorColors[sector] || { bg: 'rgba(0,0,0,0.04)', text: '#737373', border: '#e5e5e5' };
  return (
    <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.04em', padding: '2px 8px', borderRadius: '999px', backgroundColor: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
      {sector}
    </span>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => { document.title = 'Portfolio | WEH Ventures'; }, []);

  const filtered = activeFilter === 'All'
    ? portfolio
    : portfolio.filter(c => c.sector === activeFilter);

  return (
    <main id="main-content">

      {/* Hero */}
      <section aria-label="Page hero" style={{ backgroundColor: '#ffffff', paddingTop: '64px' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
          <div className="animate-fade-in-up">
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f97316', marginBottom: '0.75rem' }}>Our Portfolio</p>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: '#0a0a0a', textTransform: 'uppercase', lineHeight: 1.0, margin: '0 0 1.25rem', letterSpacing: '-0.02em' }}>
              Our Portfolio.
            </h1>
            <p style={{ fontSize: '1rem', color: '#737373', maxWidth: '40rem', lineHeight: 1.7, margin: 0 }}>
              From fintech architects building new rails, to agri-tech innovators transforming rural markets, to consumer-brand pioneers turning local culture into global phenomena.
            </p>
          </div>
        </div>
        <div style={{ borderTop: '2px solid #0a0a0a', maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ height: '4px', width: '120px', backgroundColor: '#f97316' }} />
        </div>
      </section>

      {/* Filter bar — NOT sticky, scrolls with the page */}
      <section aria-label="Portfolio filters" style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e5e5e5', padding: '1.25rem 0' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <div
            role="group"
            aria-label="Filter portfolio by sector"
            style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '2px' }}
          >
            {FILTERS.map(f => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    flexShrink: 0,
                    minHeight: '44px',
                    padding: '0 1rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    border: isActive ? '1px solid #f97316' : '1px solid #e5e5e5',
                    backgroundColor: isActive ? '#f97316' : '#ffffff',
                    color: isActive ? '#ffffff' : '#737373',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.color = '#f97316'; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = '#e5e5e5'; e.currentTarget.style.color = '#737373'; } }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section
        aria-label={`Portfolio companies${activeFilter !== 'All' ? ` — ${activeFilter}` : ''}`}
        style={{ backgroundColor: '#ffffff', padding: '3rem 0 6rem' }}
      >
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#a3a3a3', marginBottom: '2rem', fontFamily: "'Inter', sans-serif" }}>
            {filtered.length} {filtered.length === 1 ? 'company' : 'companies'}
            {activeFilter !== 'All' ? ` in ${activeFilter}` : ' across all sectors'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1px', backgroundColor: '#e5e5e5', border: '1px solid #e5e5e5' }}>
            {filtered.map((company, i) => (
              <AnimatedSection key={company.name} delay={i * 30}>
                <article
                  aria-label={`${company.name} — ${company.sector}`}
                  style={{ backgroundColor: '#ffffff', padding: '1.5rem', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', transition: 'background-color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fff7ed'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  {/* Top row: initial + status */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', flexShrink: 0 }} aria-hidden="true">
                      <span style={{ color: '#f97316', fontWeight: 900, fontSize: '0.875rem', fontFamily: "'Syne', sans-serif" }}>{company.name[0]}</span>
                    </div>
                    {company.status && (
                      <span
                        style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', padding: '2px 8px', borderRadius: '2px', backgroundColor: 'rgba(249,115,22,0.1)', color: '#f97316', border: '1px solid rgba(249,115,22,0.3)', textTransform: 'uppercase' }}
                        aria-label={`Status: ${company.status}`}
                      >
                        {company.status}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.9375rem', fontWeight: 800, color: '#0a0a0a', marginBottom: '0.375rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                    {company.name}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#737373', lineHeight: 1.5, margin: '0 0 1rem', flex: 1 }}>
                    {company.tagline}
                  </p>
                  <SectorTag sector={company.sector} />
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
