'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  BOTTOM_CTA,
  HERO,
  INTERIOR_IMG_FALLBACK,
  PARTNERSHIP,
  PORTFOLIO,
  STEPS,
  STYLE_CARDS,
  WHY,
} from './interior-data';

function StyleCardImage({ src }) {
  const [imgSrc, setImgSrc] = useState(src || INTERIOR_IMG_FALLBACK);

  useEffect(() => {
    setImgSrc(src || INTERIOR_IMG_FALLBACK);
  }, [src]);

  const onError = useCallback(() => {
    setImgSrc((current) => (current === INTERIOR_IMG_FALLBACK ? current : INTERIOR_IMG_FALLBACK));
  }, []);

  return <img src={imgSrc} alt="" loading="lazy" onError={onError} />;
}

export default function InteriorDesignHub() {
  return (
    <div className="ids-page">
      <section className="ids-hero">
        <div
          className="ids-hero-bg"
          style={{ backgroundImage: `url('${HERO.image}')` }}
          aria-hidden="true"
        />
        <div className="ids-hero-shade" aria-hidden="true" />
        <div className="ids-wrap ids-hero-inner">
          <p className="ids-eyebrow">{HERO.kicker}</p>
          <h1>
            Beautiful Spaces,
            <br />
            <span className="ids-hero-accent">Better Living</span>
          </h1>
          <p className="ids-lead">{HERO.lead}</p>
          <Link href="/contact#contactForm" className="ids-btn ids-btn-gold">
            {HERO.cta}
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
          <ul className="ids-hero-perks">
            {HERO.perks.map((p) => (
              <li key={p.label}>
                <span className="ids-hero-perk-ico">
                  <i className={`fas ${p.icon}`} aria-hidden="true" />
                </span>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ids-section ids-why" id="why">
        <div className="ids-wrap ids-why-grid">
          <div className="ids-why-copy">
            <p className="ids-eyebrow">{WHY.kicker}</p>
            <h2>{WHY.title}</h2>
            <p className="ids-body">{WHY.copy}</p>
            <Link href="#styles" className="ids-btn ids-btn-outline-gold">
              {WHY.cta}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <div className="ids-why-cards">
            {WHY.features.map((f) => (
              <article key={f.title} className="ids-why-card">
                <span className="ids-why-ico">
                  <i className={`fas ${f.icon}`} aria-hidden="true" />
                </span>
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ids-section ids-styles" id="styles">
        <div className="ids-wrap">
          <header className="ids-section-head">
            <div className="ids-section-head-text">
              <p className="ids-eyebrow">Popular styles</p>
              <h2>Designs for every taste</h2>
            </div>
            <Link href="/contact#contactForm" className="ids-link-arrow">
              View all styles
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </header>
          <div className="ids-style-row">
            {STYLE_CARDS.map((card) => (
              <Link key={card.name} href={card.href} className="ids-style-card">
                <span className="ids-style-media">
                  <StyleCardImage src={card.image} />
                </span>
                <span className="ids-style-foot">
                  <span className="ids-style-meta">
                    <strong>{card.name}</strong>
                    <em>{card.tagline}</em>
                  </span>
                  <span className="ids-style-go" aria-hidden="true">
                    <i className="fas fa-arrow-right" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ids-section ids-portfolio" id="portfolio">
        <div className="ids-wrap ids-portfolio-grid">
          <div className="ids-portfolio-copy">
            <p className="ids-eyebrow">Our portfolio</p>
            <h2>{PORTFOLIO.title}</h2>
            <p className="ids-body">{PORTFOLIO.copy}</p>
            <Link href="/projects" className="ids-btn ids-btn-outline-gold">
              {PORTFOLIO.cta}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <div className="ids-portfolio-bento">
            {PORTFOLIO.items.map((item) => (
              <Link
                key={item.room}
                href="/projects"
                className={`ids-portfolio-tile ids-portfolio-tile--${item.size}`}
              >
                <img src={item.image} alt="" loading="lazy" />
                <span className="ids-portfolio-bar">
                  <span>
                    <strong>{item.room}</strong>
                    <em>{item.style}</em>
                  </span>
                  <span className="ids-style-go ids-style-go--dark" aria-hidden="true">
                    <i className="fas fa-arrow-right" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ids-section ids-steps" id="process">
        <div className="ids-steps-bg-pattern" aria-hidden="true" />
        <div className="ids-wrap">
          <header className="ids-steps-head">
            <p className="ids-eyebrow">How it works</p>
            <h2 className="ids-steps-title">Simple steps to your dream space</h2>
            <p className="ids-steps-intro">
              One dedicated team — discovery, design, build, and handover without juggling vendors.
            </p>
          </header>
          <div className="ids-steps-timeline">
            <div className="ids-steps-track-line" aria-hidden="true" />
            {STEPS.map((step) => (
              <article key={step.num} className="ids-step-card">
                <span className="ids-step-badge">{step.num}</span>
                <span className="ids-step-ico-wrap">
                  <span className="ids-step-ico">
                    <i className={`fas ${step.icon}`} aria-hidden="true" />
                  </span>
                </span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <p className="ids-steps-tagline">
            <span>Your space</span>
            <span className="ids-steps-tagline-dot" aria-hidden="true" />
            <span>Our expertise</span>
          </p>
        </div>
      </section>

      <section className="ids-section ids-partner" id="partnership">
        <div className="ids-wrap ids-partner-grid">
          <div className="ids-partner-visual">
            <img src={PARTNERSHIP.image} alt="" loading="lazy" />
            <ul className="ids-partner-stats">
              {PARTNERSHIP.stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ids-partner-copy">
            <p className="ids-eyebrow">{PARTNERSHIP.kicker}</p>
            <h2>{PARTNERSHIP.title}</h2>
            <p className="ids-body">{PARTNERSHIP.copy}</p>
            <div className="ids-partner-columns">
              <div className="ids-partner-col">
                <h3>
                  <i className="fas fa-user" aria-hidden="true" /> You bring
                </h3>
                <ul>
                  {PARTNERSHIP.youBring.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="ids-partner-col ids-partner-col--accent">
                <h3>
                  <i className="fas fa-check-double" aria-hidden="true" /> We deliver
                </h3>
                <ul>
                  {PARTNERSHIP.weDeliver.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/contact#contactForm" className="ids-btn ids-btn-gold">
              Start your scope sheet
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="ids-cta-band">
        <div className="ids-cta-band-bg" style={{ backgroundImage: `url('${BOTTOM_CTA.image}')` }} aria-hidden="true" />
        <div className="ids-wrap ids-cta-band-inner">
          <div className="ids-cta-band-copyblock">
            <p className="ids-eyebrow">{BOTTOM_CTA.kicker}</p>
            <h2>{BOTTOM_CTA.title}</h2>
            <p className="ids-cta-sub">{BOTTOM_CTA.copy}</p>
          </div>
          <Link href="/contact#contactForm" className="ids-btn ids-btn-gold ids-btn-lg">
            {BOTTOM_CTA.cta}
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
