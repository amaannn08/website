import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const principles = [
  {
    number: '01',
    heading: 'Every partnership starts with a conversation',
    body: 'Not a pitch deck review or due diligence checklist — a real conversation about what you\'re building and why it matters. The best investments come from understanding founders as people, not just business plans.',
  },
  {
    number: '02',
    heading: 'Ego-free decision making',
    body: 'It\'s not about who proposes and who disposes — it\'s about what works. We debate, disagree, and challenge each other\'s assumptions. When we move forward, it\'s with complete conviction.',
  },
  {
    number: '03',
    heading: 'Value emerges from real relationships',
    body: 'We host regular founder dinners and sector deep-dives. Seasoned founders connect with those early in the journey. It\'s not networking — it\'s a community of builders sharing honest insights about what actually works.',
  },
  {
    number: '04',
    heading: 'We invest in lines, not dots',
    body: 'There\'s nothing like watching founders build, iterate, and forge during the pitch cycle. We\'re happy to jam and iron out ideas even before there\'s a deal — and equally happy to move fast when something is obviously exciting.',
  },
  {
    number: '05',
    heading: 'No magic template',
    body: 'We don\'t evaluate founders through checklists. We back teams passionate about their problem, resilient through challenges, and honest about their blind spots.',
  },
  {
    number: '06',
    heading: 'Built for the marathon',
    body: 'Category creation doesn\'t happen overnight. We\'ve seen companies pivot, scale, stumble, and rebuild. Through all of it, our conviction remains constant.',
  },
];

export default function Approach() {
  useEffect(() => {
    document.title = 'Approach | WEH Ventures';
  }, []);

  return (
    <main id="main-content">
      {/* Hero */}
      <section
        aria-label="Page hero"
        className="relative pt-40 pb-24 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-6">
              Our Philosophy
            </p>
            <h1
              className="text-5xl md:text-7xl font-black text-white leading-none mb-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Backing founders
              <br />
              <span className="text-amber-400">who blaze</span>
              <br />
              their own trail.
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
              Whether you're creating entirely new markets or finding fresh
              angles in existing ones, we're drawn to teams that think beyond
              conventional wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-heading" className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="principles-heading" className="sr-only">Our Principles</h2>
          <div className="space-y-0">
            {principles.map(({ number, heading, body }, i) => (
              <AnimatedSection
                key={number}
                delay={i * 60}
                className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-12 border-b border-neutral-800 hover:border-amber-400/30 transition-colors duration-300"
              >
                <div className="flex items-start pt-1">
                  <span
                    className="text-5xl font-black text-neutral-800 group-hover:text-amber-400/20 transition-colors duration-300 select-none"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                    aria-hidden="true"
                  >
                    {number}
                  </span>
                </div>
                <div>
                  <h2
                    className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {heading}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed text-base max-w-2xl">
                    {body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="approach-cta-heading" className="py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2
                id="approach-cta-heading"
                className="text-3xl md:text-4xl font-black text-white mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Sound like a fit?
              </h2>
              <p className="text-neutral-400">We'd love to have a real conversation.</p>
            </div>
            <a
              href="https://forms.gle/2156kxYjbMqcsyJe7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Say hello — submit your pitch to WEH Ventures (opens external form)"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 py-4 bg-amber-400 text-black font-bold text-sm tracking-wide rounded-sm hover:bg-amber-300 transition-colors whitespace-nowrap"
            >
              Say Hello
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
