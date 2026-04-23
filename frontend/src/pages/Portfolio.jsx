import { useState, useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const FILTERS = [
  'All',
  'Fintech',
  'Deeptech & AI',
  'Consumer Tech',
  'Agri-Tech',
  'Sustainability',
  'Supply Chain',
  'Health & Wellness',
  'Brands',
];

const portfolio = [
  { name: 'MasterChow', sector: 'Brands', tagline: 'Ready-to-cook products for Asian cuisine', status: 'EXITED' },
  { name: 'Smallcase', sector: 'Fintech', tagline: 'Leading platform for passive investing' },
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
  Fintech: { bg: 'rgba(251,191,36,0.08)', text: '#fbbf24', border: 'rgba(251,191,36,0.25)' },
  'Deeptech & AI': { bg: 'rgba(139,92,246,0.08)', text: '#a78bfa', border: 'rgba(139,92,246,0.2)' },
  'Consumer Tech': { bg: 'rgba(34,197,94,0.08)', text: '#4ade80', border: 'rgba(34,197,94,0.2)' },
  'Agri-Tech': { bg: 'rgba(20,184,166,0.08)', text: '#2dd4bf', border: 'rgba(20,184,166,0.2)' },
  Sustainability: { bg: 'rgba(132,204,22,0.08)', text: '#a3e635', border: 'rgba(132,204,22,0.2)' },
  'Supply Chain': { bg: 'rgba(249,115,22,0.08)', text: '#fb923c', border: 'rgba(249,115,22,0.2)' },
  'Health & Wellness': { bg: 'rgba(236,72,153,0.08)', text: '#f472b6', border: 'rgba(236,72,153,0.2)' },
  Brands: { bg: 'rgba(251,191,36,0.06)', text: '#fcd34d', border: 'rgba(251,191,36,0.18)' },
};

function SectorTag({ sector }) {
  const colors = sectorColors[sector] || { bg: 'rgba(64,64,64,0.3)', text: '#a3a3a3', border: 'rgba(64,64,64,0.5)' };
  return (
    <span
      className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full"
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
      }}
    >
      {sector}
    </span>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.title = 'Portfolio | WEH Ventures';
  }, []);

  const filtered =
    activeFilter === 'All'
      ? portfolio
      : portfolio.filter((c) => c.sector === activeFilter);

  return (
    <main id="main-content">
      {/* Hero */}
      <section aria-label="Page hero" className="relative pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-fade-in-up">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-6">
            Our Portfolio
          </p>
          <h1
            className="text-5xl md:text-7xl font-black text-white leading-none mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Our Portfolio.
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            From fintech architects building new rails, to agri-tech innovators
            transforming rural markets, to consumer-brand pioneers turning local
            culture into global phenomena.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section aria-label="Portfolio filters" className="sticky top-16 md:top-20 z-30 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            role="group"
            aria-label="Filter portfolio by sector"
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {FILTERS.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(f)}
                  className={`flex-shrink-0 min-h-[44px] px-4 py-2 text-xs font-semibold tracking-wide rounded-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-400 text-black'
                      : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-amber-400 hover:text-amber-400'
                  }`}
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
        className="py-12 pb-32"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-neutral-600 mb-8">
            {filtered.length} {filtered.length === 1 ? 'company' : 'companies'}
            {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((company, i) => (
              <AnimatedSection key={company.name} delay={i * 40}>
                <article
                  aria-label={`${company.name} — ${company.sector}`}
                  className="group h-full p-6 border border-neutral-800 hover:border-amber-400 bg-neutral-900 rounded-sm transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center text-black font-black text-sm flex-shrink-0"
                      style={{ backgroundColor: '#1f1f1f', border: '1px solid #2d2d2d' }}
                      aria-hidden="true"
                    >
                      <span className="text-neutral-400 font-bold">{company.name[0]}</span>
                    </div>
                    {company.status && (
                      <span
                        className="text-xs font-bold tracking-wider px-2 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: 'rgba(251,191,36,0.12)',
                          color: '#fbbf24',
                          border: '1px solid rgba(251,191,36,0.3)',
                        }}
                        aria-label={`Status: ${company.status}`}
                      >
                        {company.status}
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {company.name}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed flex-1 mb-4">
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
