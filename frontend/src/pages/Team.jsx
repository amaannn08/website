import { useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const team = [
  {
    id: 'deepak-gupta',
    name: 'Deepak Gupta',
    role: 'Partner',
    bio: "The transformation optimist who's been around long enough to type emails on monochrome screens. Can be found trying to figure out what India needs next. Loves spotting 'unlabeled' founders with inchoate ideas and helping them come to fruition. Gets kicks from deals and shaping things for the fund — from capital allocation to team development.",
    photo: '/images/deepak.png',
    initial: 'D',
    isPartner: true,
  },
  {
    id: 'rohit-krishna',
    name: 'Rohit Krishna',
    role: 'Partner',
    bio: "Started with corporate bonds at Moody's, tried listed equity at Spark Capital, then fell hard for early-stage investing in 2015. Spends way too much time playing with new consumer products. Always up for beer at Toit or coffee at Paper & Pie. Believes in-person meetings > phone calls > Zoom.",
    photo: '/images/rohit.png',
    initial: 'R',
    isPartner: true,
  },
  {
    id: 'ritik-rustagi',
    name: 'Ritik Rustagi',
    role: 'Investment Team',
    bio: 'Endlessly curious about how different businesses work and how founders disrupt the status quo. Background spans equity analysis, hedge fund internships, running consultancy cells, and reading classics.',
    photo: '/images/ritik.png',
    initial: 'R',
    isPartner: false,
  },
  {
    id: 'ayush-sahoo',
    name: 'Ayush Sahoo',
    role: 'Investment Team',
    bio: 'Started at ITC across large-scale FMCG operations, then moved into early-stage investing. Focuses on go-to-market strategy, unit economics, and AI workflows. Studied engineering at IIT Kharagpur. Preference for first-principles thinking over narrative-driven slides.',
    photo: '/images/ayush-sahoo.jpg',
    initial: 'A',
    isPartner: false,
  },
  {
    id: 'ayush-tyagi',
    name: 'Ayush Tyagi',
    role: 'Investment Team',
    bio: 'Mathematics grad with a focus on understanding investing across company life cycles. Background spanning Private Equity and Public Markets. Hunts for public market compounders on weekends. Avid movie buff.',
    photo: '/images/ayush-tyagi.png',
    initial: 'A',
    isPartner: false,
  },
];

export default function Team() {
  useEffect(() => { document.title = 'Team | WEH Ventures'; }, []);

  const partners = team.filter(m => m.isPartner);
  const analysts = team.filter(m => !m.isPartner);

  return (
    <main id="main-content">

      {/* Hero */}
      <section aria-label="Page hero" style={{ backgroundColor: '#ffffff', paddingTop: '64px' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
          <div className="animate-fade-in-up">
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f97316', marginBottom: '0.75rem' }}>The Team</p>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: '#0a0a0a', textTransform: 'uppercase', lineHeight: 1.0, margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
              Small army.<br />
              <span style={{ color: '#f97316' }}>Huge conviction.</span>
            </h1>
            <p style={{ fontSize: '1rem', color: '#737373', lineHeight: 1.7, maxWidth: '36rem', margin: 0 }}>
              Over 8,000 conversations, countless coffee meetings, and hundreds of late-night debates about whether an idea has legs.
            </p>
          </div>
        </div>
        <div style={{ borderTop: '2px solid #0a0a0a', maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ height: '4px', width: '120px', backgroundColor: '#f97316' }} />
        </div>
      </section>

      {/* Partners */}
      <section aria-labelledby="partners-heading" style={{ backgroundColor: '#ffffff', padding: '4rem 0 0' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <h2 id="partners-heading" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a3a3a3', marginBottom: '2rem' }}>Partners</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', backgroundColor: '#e5e5e5', border: '1px solid #e5e5e5', marginBottom: '1px' }}>
            {partners.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 100}>
                <article
                  aria-labelledby={`name-${member.id}`}
                  style={{ backgroundColor: '#ffffff', padding: '2.5rem', height: '100%', boxSizing: 'border-box', transition: 'background-color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fff7ed'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  {/* Photo */}
                  <div style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: '#f5f5f5' }}>
                    <img
                      src={member.photo}
                      alt={`Photo of ${member.name}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                    />
                  </div>
                  <h3 id={`name-${member.id}`} style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.25rem', fontWeight: 900, color: '#0a0a0a', textTransform: 'uppercase', marginBottom: '0.375rem', letterSpacing: '0.02em' }}>
                    {member.name}
                  </h3>
                  <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316', marginBottom: '1.25rem', borderBottom: '1px solid #f97316', paddingBottom: '1px' }}>
                    {member.role}
                  </span>
                  <p style={{ fontSize: '0.875rem', color: '#737373', lineHeight: 1.75, margin: 0 }}>{member.bio}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Team */}
      <section aria-labelledby="investment-team-heading" style={{ backgroundColor: '#ffffff', padding: '2rem 0 6rem' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 2rem' }}>
          <h2 id="investment-team-heading" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a3a3a3', marginBottom: '2rem' }}>Investment Team</h2>
          <div style={{ border: '1px solid #e5e5e5' }}>
            {analysts.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 80}>
                <article
                  aria-labelledby={`name-${member.id}`}
                  style={{
                    display: 'flex',
                    flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                    borderBottom: i < analysts.length - 1 ? '1px solid #e5e5e5' : 'none',
                    backgroundColor: '#ffffff',
                    transition: 'background-color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fff7ed'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  {/* Photo — fixed width */}
                  <div style={{ width: '260px', flexShrink: 0, overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                    <img
                      src={member.photo}
                      alt={`Photo of ${member.name}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                    />
                  </div>
                  {/* Text */}
                  <div style={{ flex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: i % 2 === 0 ? '1px solid #e5e5e5' : 'none', borderRight: i % 2 !== 0 ? '1px solid #e5e5e5' : 'none' }}>
                    <h3 id={`name-${member.id}`} style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.25rem', fontWeight: 900, color: '#0a0a0a', textTransform: 'uppercase', marginBottom: '0.25rem', letterSpacing: '0.02em' }}>
                      {member.name}
                    </h3>
                    <span style={{ display: 'inline-block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f97316', marginBottom: '1rem' }}>
                      {member.role}
                    </span>
                    <p style={{ fontSize: '0.9rem', color: '#737373', lineHeight: 1.75, margin: 0, maxWidth: '36rem' }}>{member.bio}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
