import Link from 'next/link';

/**
 * Reusable inner-page hero banner
 */
export default function PageHero({ badge, title, titleHighlight, description, actions, backgroundImg }) {
  const bgStyle = backgroundImg
    ? { backgroundImage: `url('${backgroundImg}')` }
    : {};

  return (
    <section
      className="hero-cinema"
      style={bgStyle}
      aria-label={`${title} hero`}
    >
      <div className="hero-cinema-shade" aria-hidden="true"></div>
      <div className="hero-cinema-center">
        {badge && <div className="hero-banner-brand"><span className="page-hero-badge">{badge}</span></div>}
        <h1 className="hero-cinema-title">
          {title}
          {titleHighlight && <span><em>{titleHighlight}</em></span>}
        </h1>
        {description && <p className="hero-banner-subtitle">{description}</p>}
        {actions && (
          <div className="page-hero-actions">
            {actions.map((a, i) => (
              <Link
                key={i}
                href={a.href}
                className={`page-hero-btn${a.primary ? ' page-hero-btn--primary' : ' page-hero-btn--outline'}`}
              >
                {a.icon && <i className={a.icon} aria-hidden="true"></i>}
                {a.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
