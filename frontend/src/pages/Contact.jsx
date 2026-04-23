import { useEffect } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Contact() {
  useEffect(() => { document.title = 'Contact | WEH Ventures'; }, []);

  return (
    <main id="main-content">

      {/* Hero — white */}
      <section aria-label="Contact hero" style={{ backgroundColor: '#ffffff', paddingTop: '64px' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
          <div className="animate-fade-in-up" style={{ maxWidth: '50rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c2410c', marginBottom: '1rem' }}>Get in Touch</p>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 7vw, 6rem)', fontWeight: 900, color: '#0a0a0a', textTransform: 'uppercase', lineHeight: 1.0, margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
              Let's build the next{' '}
              <span style={{ color: '#c2410c' }}>category</span>
              {' '}— together.
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#525252', lineHeight: 1.7, maxWidth: '32rem', margin: 0 }}>
              Got an untitled idea or an early prototype? We'd love to hear from you.
            </p>
          </div>
        </div>
        <div style={{ borderTop: '2px solid #0a0a0a', maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ height: '4px', width: '120px', backgroundColor: '#c2410c' }} />
        </div>
      </section>

      {/* CTA block */}
      <section aria-labelledby="contact-cta" style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem' }}>
            <a
              href="https://forms.gle/2156kxYjbMqcsyJe7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Submit your pitch to WEH Ventures (opens external Google Form)"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', minHeight: '56px', padding: '0 2.5rem', backgroundColor: '#c2410c', color: '#ffffff', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', borderRadius: '2px', transition: 'background-color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#9a3412'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#c2410c'}
            >
              Submit Your Pitch
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

            {/* Email note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', border: '1px solid #e5e5e5', borderRadius: '2px', backgroundColor: '#fafafa' }}>
              <Mail size={16} style={{ color: '#c2410c', flexShrink: 0 }} aria-hidden="true" />
              <p style={{ fontSize: '0.875rem', color: '#525252', margin: 0 }}>
                Prefer email?{' '}
                <a
                  href="mailto:contact@wehventures.com"
                  aria-label="Email WEH Ventures at contact@wehventures.com"
                  style={{ color: '#0a0a0a', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid #0a0a0a' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = '#0a0a0a'}
                >
                  contact@wehventures.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Black strip */}
      <section aria-labelledby="contact-note" style={{ backgroundColor: '#0a0a0a', padding: '5rem 0' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.1, maxWidth: '40rem' }}>
              We're a small team. Every email gets read.{' '}
              <span style={{ color: '#c2410c' }}>Every founder gets a response.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
