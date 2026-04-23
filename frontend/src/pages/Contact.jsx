import { useEffect } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | WEH Ventures';
  }, []);

  return (
    <main id="main-content">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Contact hero"
      >
        {/* Grid bg */}
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
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-8">
              Get in Touch
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Let's build the
              <br />
              next{' '}
              <span className="text-amber-400">category</span>
              <br />
              — together.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-lg mx-auto mb-12 leading-relaxed">
              Got an untitled idea or an early prototype? We'd love to hear from
              you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://forms.gle/2156kxYjbMqcsyJe7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Submit your pitch to WEH Ventures (opens external Google Form)"
                className="inline-flex items-center gap-2 min-h-[56px] px-10 py-4 bg-amber-400 text-black font-bold text-sm tracking-wide rounded-sm hover:bg-amber-300 transition-colors duration-200"
              >
                Submit Your Pitch
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </AnimatedSection>

          {/* Email note */}
          <AnimatedSection delay={200} className="mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-4 border border-neutral-800 rounded-sm bg-neutral-900/50">
              <Mail size={16} className="text-amber-400 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-neutral-400">
                Prefer email?{' '}
                <a
                  href="mailto:contact@wehventures.com"
                  aria-label="Email WEH Ventures at contact@wehventures.com"
                  className="text-white hover:text-amber-400 transition-colors font-medium"
                >
                  contact@wehventures.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
