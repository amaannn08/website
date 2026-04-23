import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const principles = [
  { number: '01', heading: 'Every partnership starts with a conversation', body: "Not a pitch deck review or due diligence checklist — a real conversation about what you're building and why it matters. The best investments come from understanding founders as people, not just business plans." },
  { number: '02', heading: 'Ego-free decision making', body: "It's not about who proposes and who disposes — it's about what works. We debate, disagree, and challenge each other's assumptions. When we move forward, it's with complete conviction." },
  { number: '03', heading: 'Value emerges from real relationships', body: "We host regular founder dinners and sector deep-dives. Seasoned founders connect with those early in the journey. It's not networking — it's a community of builders sharing honest insights about what actually works." },
  { number: '04', heading: 'We invest in lines, not dots', body: "There's nothing like watching founders build, iterate, and forge during the pitch cycle. We're happy to jam and iron out ideas even before there's a deal — and equally happy to move fast when something is obviously exciting." },
  { number: '05', heading: 'No magic template', body: "We don't evaluate founders through checklists. We back teams passionate about their problem, resilient through challenges, and honest about their blind spots." },
  { number: '06', heading: 'Built for the marathon', body: "Category creation doesn't happen overnight. We've seen companies pivot, scale, stumble, and rebuild. Through all of it, our conviction remains constant." },
];

export default function Approach() {
  useEffect(() => { document.title = 'Approach | WEH Ventures'; }, []);

  return (
    <main id="main-content">
      {/* Hero — white */}
      <section aria-label="Page hero" style={{ backgroundColor: '#ffffff', paddingTop: '64px' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
          <div className="animate-fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'end' }}>
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c2410c', marginBottom: '1rem' }}>Our Philosophy</p>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: '#0a0a0a', textTransform: 'uppercase', lineHeight: 1.0, margin: 0, letterSpacing: '-0.02em' }}>
                Backing founders<br />
                <span style={{ color: '#c2410c' }}>who blaze</span><br />
                their own trail.
              </h1>
            </div>
            <div>
              <p style={{ fontSize: '1rem', color: '#404040', lineHeight: 1.7, maxWidth: '28rem', margin: 0 }}>
                Whether you're creating entirely new markets or finding fresh angles in existing ones, we're drawn to teams that think beyond conventional wisdom.
              </p>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '2px solid #0a0a0a', maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ height: '4px', width: '120px', backgroundColor: '#c2410c' }} />
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-heading" style={{ backgroundColor: '#ffffff', paddingBottom: '2rem' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <h2 id="principles-heading" className="sr-only">Our Principles</h2>
          {principles.map(({ number, heading, body }, i) => (
            <AnimatedSection
              key={number} delay={i * 60}
              style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2.5rem', padding: '3rem 0', borderBottom: '1px solid #e5e5e5', alignItems: 'start' }}
            >
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '2.5rem', fontWeight: 900, color: '#e5e5e5', lineHeight: 1, userSelect: 'none' }} aria-hidden="true">{number}</span>
              <div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.125rem', fontWeight: 800, color: '#0a0a0a', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{heading}</h2>
                <p style={{ fontSize: '0.9375rem', color: '#525252', lineHeight: 1.75, maxWidth: '40rem', margin: 0 }}>{body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA — orange */}
      <section aria-labelledby="approach-cta-heading" style={{ backgroundColor: '#c2410c', padding: '5rem 0' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <h2 id="approach-cta-heading" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 0.25rem', letterSpacing: '-0.01em' }}>
              Sound like a fit?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', margin: 0 }}>We'd love to have a real conversation.</p>
          </div>
          <a
            href="https://forms.gle/2156kxYjbMqcsyJe7"
            target="_blank" rel="noopener noreferrer"
            aria-label="Say hello — submit your pitch to WEH Ventures (opens external form)"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '52px', padding: '0 2rem', backgroundColor: '#ffffff', color: '#c2410c', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0a0a0a'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#f97316'; }}
          >
            Say Hello <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
