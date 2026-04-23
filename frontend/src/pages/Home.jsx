import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';



// ─── Featured portfolio ────────────────────────────────────
const featured = [
  { name: 'MasterChow', tagline: 'Ready-to-cook Asian cuisine', backed: 'Anicut · Surge · Tanglin' },
  { name: 'Jar', tagline: 'Digital gold savings for Bharat', backed: 'Tiger Global' },
  { name: 'Smallcase', tagline: 'Passive investing platform', backed: 'PeakXV · Arkam · Faering' },
  { name: 'Apps for Bharat', tagline: 'Spiritual super app', backed: 'Elevation · Fundamentum · SIG' },
];

// ─── Testimonials ──────────────────────────────────────────
const testimonials = [
  { quote: "WEH is the most supportive partner we could've ever asked for. Hands on when we need them, hands off when we don't.", name: 'Shail Daswani', title: 'CEO' },
  { quote: 'Rohit and the WEH team are rare in the venture world. More than capital providers, they are genuine business builders.', name: 'Shrinath Srinivasan', title: 'CEO' },
  { quote: 'Few investors combine empathy and strategic clarity like WEH. They backed the founders, not just the idea.', name: 'Archit Nanda', title: 'CEO' },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (idx) => setCurrent((idx + testimonials.length) % testimonials.length);

  useEffect(() => {
    timerRef.current = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const t = testimonials[current];

  return (
    <div style={{ position: 'relative' }}>
      <div
        key={current}
        className="animate-fade-in-up"
        style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '2px', padding: '3rem', maxWidth: '48rem', margin: '0 auto', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
      >
        <blockquote>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.25rem', color: '#0a0a0a', lineHeight: 1.6, marginBottom: '2rem' }}>
            "{t.quote}"
          </p>
          <footer style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }} aria-hidden="true">
              {t.name[0]}
            </div>
            <div>
              <p style={{ color: '#0a0a0a', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>{t.name}</p>
              <p style={{ color: '#737373', fontSize: '0.75rem', margin: 0 }}>{t.title}</p>
            </div>
          </footer>
        </blockquote>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }} role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
            onClick={() => go(i)}
            style={{
              width: i === current ? '2rem' : '1rem',
              height: '6px',
              borderRadius: '3px',
              backgroundColor: i === current ? '#f97316' : '#d4d4d4',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              padding: 0,
              background: i === current ? '#f97316' : '#d4d4d4',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => { document.title = 'WEH Ventures — Backing Category Creators'; }, []);

  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a' }}
        aria-label="Hero"
      >
        {/* Subtle grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} aria-hidden="true" />
        {/* Glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />

        <div style={{ position: 'relative', maxWidth: '88rem', margin: '0 auto', padding: '8rem 2rem 6rem', textAlign: 'center' }}>
          {/* Eyebrow */}
          <div className="animate-fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', padding: '0.5rem 1rem', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '999px', backgroundColor: 'rgba(249,115,22,0.06)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f97316' }} aria-hidden="true" />
            <span style={{ color: '#f97316', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Early-Stage VC · India</span>
          </div>

          <h1 className="animate-fade-in-up delay-100" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            What if the market<br />
            <span style={{ color: '#f97316' }}>doesn't</span> exist yet?
          </h1>

          <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', maxWidth: '36rem', margin: '0 auto 3rem', lineHeight: 1.7 }}>
            We back category creators early — when their ideas sound impossible and their markets don't yet exist.
          </p>

          <div className="animate-fade-in-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <a
              href="https://forms.gle/2156kxYjbMqcsyJe7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Submit your pitch to WEH Ventures (opens external form)"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', minHeight: '52px', padding: '0 2rem', backgroundColor: '#f97316', color: '#ffffff', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em', textDecoration: 'none', borderRadius: '2px', transition: 'background-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ea580c'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f97316'}
            >
              Pitch to Us <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/portfolio"
              style={{ display: 'inline-flex', alignItems: 'center', minHeight: '52px', padding: '0 2rem', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', borderRadius: '2px', transition: 'border-color 0.2s, color 0.2s' }}
              aria-label="View our portfolio companies"
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.color = '#f97316'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 1.5s infinite' }} aria-hidden="true">
          <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, rgba(249,115,22,0.6), transparent)', margin: '0 auto' }} />
        </div>
        <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }`}</style>
      </section>



      {/* ── Investment focus ───────────────────────────────── */}
      <section aria-labelledby="invest-heading" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <AnimatedSection>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f97316', marginBottom: '1rem' }}>Investment Thesis</p>
            <h2 id="invest-heading" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0a0a0a', lineHeight: 1.1, margin: 0 }}>
              Pre-seed &amp; Seed.<br />
              <span style={{ color: '#737373' }}>$150K – $500K.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p style={{ fontSize: '1.125rem', color: '#404040', lineHeight: 1.75, margin: 0 }}>
              We invest in bold ideas at pre-seed &amp; seed. Cheques of <strong style={{ color: '#0a0a0a' }}>$150K–$500K</strong>. We back founders who ask hard questions, take unconventional paths, and have unshakeable conviction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Featured portfolio ─────────────────────────────── */}
      <section aria-labelledby="portfolio-heading" style={{ padding: '6rem 0', backgroundColor: '#fafafa', borderTop: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection style={{ marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f97316', marginBottom: '1rem' }}>Portfolio Highlights</p>
            <h2 id="portfolio-heading" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0a0a0a', lineHeight: 1.1, margin: 0 }}>
              Companies that went on<br /> to raise from the best.
            </h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {featured.map(({ name, tagline, backed }, i) => (
              <AnimatedSection
                key={name}
                delay={i * 80}
                className="group"
                style={{ padding: '1.5rem', border: '1px solid #e5e5e5', backgroundColor: '#ffffff', borderRadius: '2px', transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(249,115,22,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e5e5'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '2px', backgroundColor: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 900, fontSize: '0.875rem', marginBottom: '1.5rem' }} aria-hidden="true">
                  {name[0]}
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#0a0a0a', marginBottom: '0.5rem' }}>{name}</h3>
                <p style={{ fontSize: '0.8rem', color: '#737373', marginBottom: '1rem', lineHeight: 1.5 }}>{tagline}</p>
                <p style={{ fontSize: '0.7rem', color: '#a3a3a3', borderTop: '1px solid #f5f5f5', paddingTop: '1rem', margin: 0 }}>
                  Later backed by <span style={{ color: '#f97316' }}>{backed}</span>
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section aria-labelledby="testimonials-heading" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f97316', marginBottom: '1rem' }}>Founder Voices</p>
            <h2 id="testimonials-heading" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0a0a0a', margin: 0 }}>
              What founders say.
            </h2>
          </AnimatedSection>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section aria-labelledby="cta-heading" style={{ padding: '6rem 0', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 id="cta-heading" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.1 }}>
              Got an untitled idea<br /> or an early prototype?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '28rem', margin: '0 auto 2.5rem' }}>
              Let's build the next category together.
            </p>
            <a
              href="https://forms.gle/2156kxYjbMqcsyJe7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Submit your pitch to WEH Ventures (opens external form)"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '52px', padding: '0 2.5rem', backgroundColor: '#f97316', color: '#ffffff', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', borderRadius: '2px', transition: 'background-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ea580c'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f97316'}
            >
              Pitch to Us <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
