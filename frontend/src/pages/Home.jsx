import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, TrendingUp, DollarSign, Award } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

// ─── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  {
    icon: TrendingUp,
    value: '50%',
    label: 'of portfolio companies raised follow-on from other VCs',
  },
  {
    icon: DollarSign,
    value: '$320M',
    label: 'cumulative raised by portfolio',
  },
  {
    icon: Award,
    value: '20%',
    label: 'Net IRR (WEH II vs 11.3% median — CRISIL rated)',
  },
];

// ─── Featured portfolio ───────────────────────────────────────────────────────
const featured = [
  {
    name: 'MasterChow',
    tagline: 'Ready-to-cook Asian cuisine',
    backed: 'Anicut · Surge · Tanglin',
    color: '#f59e0b',
  },
  {
    name: 'Jar',
    tagline: 'Digital gold savings for Bharat',
    backed: 'Tiger Global',
    color: '#fbbf24',
  },
  {
    name: 'Smallcase',
    tagline: 'Passive investing platform',
    backed: 'PeakXV · Arkam · Faering',
    color: '#d97706',
  },
  {
    name: 'Apps for Bharat',
    tagline: 'Spiritual super app',
    backed: 'Elevation · Fundamentum · SIG',
    color: '#fbbf24',
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      'WEH is the most supportive partner we could\'ve ever asked for. Hands on when we need them, hands off when we don\'t.',
    name: 'Shail Daswani',
    title: 'CEO',
  },
  {
    quote:
      'Rohit and the WEH team are rare in the venture world. More than capital providers, they are genuine business builders.',
    name: 'Shrinath Srinivasan',
    title: 'CEO',
  },
  {
    quote:
      'Few investors combine empathy and strategic clarity like WEH. They backed the founders, not just the idea.',
    name: 'Archit Nanda',
    title: 'CEO',
  },
];

// ─── Testimonial carousel ─────────────────────────────────────────────────────
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (idx) => {
    setCurrent((idx + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const t = testimonials[current];

  return (
    <div className="relative">
      <div
        key={current}
        className="animate-fade-in-up bg-neutral-900 border border-neutral-800 rounded-sm p-8 md:p-12 max-w-3xl mx-auto"
      >
        <blockquote>
          <p className="text-xl md:text-2xl text-white leading-relaxed mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>
            "{t.quote}"
          </p>
          <footer className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm"
              style={{ backgroundColor: '#fbbf24' }}
              aria-hidden="true"
            >
              {t.name[0]}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{t.name}</p>
              <p className="text-neutral-500 text-xs">{t.title}</p>
            </div>
          </footer>
        </blockquote>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-6" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 min-h-[44px] flex items-center ${
              i === current ? 'w-8 bg-amber-400' : 'w-4 bg-neutral-700 hover:bg-neutral-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Home page ────────────────────────────────────────────────────────────────
export default function Home() {
  useEffect(() => {
    document.title = 'WEH Ventures — Backing Category Creators';
  }, []);

  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />
        {/* Glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-amber-400/30 rounded-full bg-amber-400/5 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              Early-Stage VC · India
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-8 animate-fade-in-up delay-100"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What if the market{' '}
            <span className="text-amber-400">doesn't</span>
            <br className="hidden md:block" />
            {' '}exist yet?
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
            We back category creators early — when their ideas sound impossible
            and their markets don't yet exist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <a
              href="https://forms.gle/2156kxYjbMqcsyJe7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Submit your pitch to WEH Ventures (opens external form)"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3 bg-amber-400 text-black font-bold text-sm tracking-wide rounded-sm hover:bg-amber-300 transition-colors duration-200"
            >
              Pitch to Us
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3 border border-neutral-700 text-white font-medium text-sm tracking-wide rounded-sm hover:border-amber-400 hover:text-amber-400 transition-colors duration-200"
              aria-label="View our portfolio companies"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-px h-12 bg-gradient-to-b from-amber-400/60 to-transparent mx-auto" />
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section
        aria-label="Key metrics"
        className="border-y border-neutral-800 bg-neutral-900/40"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <AnimatedSection key={i} className="sm:px-8 first:pl-0 last:pr-0 flex items-start gap-4" delay={i * 100}>
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-sm bg-amber-400/10 flex items-center justify-center" aria-hidden="true">
                  <Icon size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-3xl font-black text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {value}
                  </p>
                  <p className="text-sm text-neutral-400 leading-snug">{label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment focus ──────────────────────────────────────────────── */}
      <section aria-labelledby="invest-heading" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">
                Investment Thesis
              </p>
              <h2
                id="invest-heading"
                className="text-4xl md:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Pre-seed & Seed.
                <br />
                <span className="text-neutral-400">$150K – $500K.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="text-lg text-neutral-300 leading-relaxed">
                We invest in bold ideas at pre-seed &amp; seed. Cheques of{' '}
                <strong className="text-white">$150K–$500K</strong>. We back
                founders who ask hard questions, take unconventional paths, and
                have unshakeable conviction.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Featured portfolio ────────────────────────────────────────────── */}
      <section aria-labelledby="portfolio-heading" className="py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">
              Portfolio Highlights
            </p>
            <h2
              id="portfolio-heading"
              className="text-4xl md:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Companies that went on
              <br className="hidden md:block" /> to raise from the best.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map(({ name, tagline, backed }, i) => (
              <AnimatedSection
                key={name}
                delay={i * 80}
                className="group p-6 border border-neutral-800 hover:border-amber-400 bg-neutral-900 rounded-sm transition-all duration-300 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-6 text-black font-black text-sm"
                  style={{ backgroundColor: '#fbbf24' }}
                  aria-hidden="true"
                >
                  {name[0]}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {name}
                </h3>
                <p className="text-sm text-neutral-400 mb-4 leading-snug">{tagline}</p>
                <p className="text-xs text-neutral-600 border-t border-neutral-800 pt-4">
                  Later backed by{' '}
                  <span className="text-amber-400/70">{backed}</span>
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section aria-labelledby="testimonials-heading" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">
              Founder Voices
            </p>
            <h2
              id="testimonials-heading"
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What founders say.
            </h2>
          </AnimatedSection>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section aria-labelledby="cta-heading" className="py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              id="cta-heading"
              className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Got an untitled idea{' '}
              <br className="hidden md:block" />
              or an early prototype?
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
              Let's build the next category together.
            </p>
            <a
              href="https://forms.gle/2156kxYjbMqcsyJe7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Submit your pitch to WEH Ventures (opens external form)"
              className="inline-flex items-center gap-2 min-h-[52px] px-10 py-4 bg-amber-400 text-black font-bold text-sm tracking-wide rounded-sm hover:bg-amber-300 transition-colors duration-200"
            >
              Pitch to Us
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
