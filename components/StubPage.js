/**
 * Simple inner-page stub template used for pages that are
 * placeholder/stub pages in the original HTML site.
 * Each page imports this and customises metadata + hero props.
 */
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export function StubPage({ hero, sections = [], ctaHref = '/contact', ctaLabel = 'Get Expert Advice' }) {
  return (
    <>
      <PageHero {...hero} />
      <main style={{ padding: '3rem 0' }}>
        <div className="container">
          {sections.map((s, i) => (
            <section key={i} style={{ marginBottom: '2.5rem' }}>
              {s.title && <h2 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>{s.title}</h2>}
              {s.content && <p style={{ color: '#475569', lineHeight: 1.7, maxWidth: 720 }}>{s.content}</p>}
              {s.cards && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
                  {s.cards.map((c, ci) => (
                    <div key={ci} style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                      {c.icon && <div style={{ fontSize: '1.6rem', color: 'var(--red)', marginBottom: '0.75rem' }}><i className={c.icon} aria-hidden="true"></i></div>}
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.4rem' }}>{c.title}</h3>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55 }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
          <Link href={ctaHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', background: 'var(--red)', color: '#fff', borderRadius: 999, fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 6px 20px rgba(201,36,43,0.3)', transition: 'transform 0.2s' }}>
            <i className="fas fa-arrow-right" aria-hidden="true"></i> {ctaLabel}
          </Link>
        </div>
      </main>
    </>
  );
}
