import { useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const team = [
  {
    id: 'deepak-gupta',
    name: 'Deepak Gupta',
    role: 'Partner',
    bio: 'The transformation optimist who\'s been around long enough to type emails on monochrome screens. Loves spotting unlabeled founders with inchoate ideas and helping them come to fruition. Gets kicks from deals and shaping things for the fund — from capital allocation to team development.',
    initial: 'D',
  },
  {
    id: 'rohit-krishna',
    name: 'Rohit Krishna',
    role: 'Partner',
    bio: 'Started with corporate bonds at Moody\'s, tried listed equity at Spark Capital, then fell hard for early-stage investing in 2015. Spends too much time playing with new consumer products. Believes in-person meetings > phone calls > Zoom.',
    initial: 'R',
  },
  {
    id: 'ritik-rustagi',
    name: 'Ritik Rustagi',
    role: 'Investment Team',
    bio: 'Endlessly curious about how different businesses work and how founders disrupt the status quo. Background spans equity analysis, hedge fund internships, running consultancy cells, and reading classics.',
    initial: 'R',
  },
  {
    id: 'ayush-sahoo',
    name: 'Ayush Sahoo',
    role: 'Investment Team',
    bio: 'Started at ITC across large-scale FMCG operations, then moved into early-stage investing. Focuses on go-to-market strategy, unit economics, and AI workflows. Studied engineering at IIT Kharagpur. Preference for first-principles thinking over narrative-driven slides.',
    initial: 'A',
  },
  {
    id: 'ayush-tyagi',
    name: 'Ayush Tyagi',
    role: 'Investment Team',
    bio: 'Mathematics grad with a focus on understanding investing across company life cycles. Background spanning Private Equity and Public Markets. Hunts for public market compounders on weekends. Avid movie buff.',
    initial: 'A',
  },
];

const roleColors = {
  Partner: '#fbbf24',
  'Investment Team': '#404040',
};

export default function Team() {
  useEffect(() => {
    document.title = 'Team | WEH Ventures';
  }, []);

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
            The Team
          </p>
          <h1
            className="text-5xl md:text-7xl font-black text-white leading-none mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Small army.
            <br />
            <span className="text-amber-400">Huge conviction.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
            Over 8,000 conversations, countless coffee meetings, and hundreds
            of late-night debates about whether an idea has legs.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section aria-labelledby="team-grid-heading" className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="team-grid-heading" className="sr-only">Team Members</h2>

          {/* Partners row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {team
              .filter((m) => m.role === 'Partner')
              .map((member, i) => (
                <AnimatedSection key={member.id} delay={i * 100}>
                  <article
                    aria-labelledby={`name-${member.id}`}
                    className="group h-full p-8 border border-neutral-800 hover:border-amber-400 bg-neutral-900 rounded-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-sm flex items-center justify-center text-black font-black text-xl flex-shrink-0"
                        style={{ backgroundColor: '#fbbf24' }}
                        aria-hidden="true"
                      >
                        {member.initial}
                      </div>
                      <div>
                        <h3
                          id={`name-${member.id}`}
                          className="text-xl font-bold text-white"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {member.name}
                        </h3>
                        <span className="inline-block mt-1 text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                          {member.role}
                        </span>
                      </div>
                    </div>
                    <p className="text-neutral-400 leading-relaxed text-sm">{member.bio}</p>
                  </article>
                </AnimatedSection>
              ))}
          </div>

          {/* Investment team row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team
              .filter((m) => m.role === 'Investment Team')
              .map((member, i) => (
                <AnimatedSection key={member.id} delay={i * 80}>
                  <article
                    aria-labelledby={`name-${member.id}`}
                    className="group h-full p-8 border border-neutral-800 hover:border-amber-400 bg-neutral-900 rounded-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-sm flex items-center justify-center text-white font-black text-base flex-shrink-0"
                        style={{ backgroundColor: '#2d2d2d', border: '1px solid #3d3d3d' }}
                        aria-hidden="true"
                      >
                        {member.initial}
                      </div>
                      <div>
                        <h3
                          id={`name-${member.id}`}
                          className="text-lg font-bold text-white"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {member.name}
                        </h3>
                        <span className="inline-block mt-1 text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
                          {member.role}
                        </span>
                      </div>
                    </div>
                    <p className="text-neutral-400 leading-relaxed text-sm">{member.bio}</p>
                  </article>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
