'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  BOTTOM_CTA,
  FAQS,
  HERO,
  SERVICE_TABS,
  STATS,
} from './creative-data';

export default function CreativeDigitalHub() {
  const [activeTab, setActiveTab] = useState(SERVICE_TABS[0].id);
  const [openFaq, setOpenFaq] = useState(0);

  const activeService = SERVICE_TABS.find((t) => t.id === activeTab) ?? SERVICE_TABS[0];

  return (
    <div className="cda-page">
      <section className="cda-hero" aria-labelledby="cda-hero-title">
        <div
          className="cda-hero-bg"
          style={{ backgroundImage: `url('${HERO.image}')` }}
          aria-hidden="true"
        />
        <div className="cda-hero-shade" aria-hidden="true" />
        <div className="cda-wrap cda-hero-inner">
          <p className="cda-hero-brand">{HERO.brand}</p>
          <p className="cda-eyebrow cda-eyebrow--light">{HERO.kicker}</p>
          <h1 id="cda-hero-title">{HERO.title}</h1>
          <p className="cda-lead">{HERO.lead}</p>
          <div className="cda-hero-actions">
            <Link href="/contact#contactForm" className="cda-btn cda-btn-primary">
              {HERO.cta}
            </Link>
            <a href="#services" className="cda-btn cda-btn-ghost">
              {HERO.ctaSecondary}
            </a>
          </div>
          <ul className="cda-hero-perks">
            {HERO.perks.map((p) => (
              <li key={p.label}>{p.label}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cda-stats" aria-label="Studio highlights">
        <div className="cda-wrap cda-stats-row">
          {STATS.map((s) => (
            <article key={s.label} className="cda-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cda-section" id="services" aria-labelledby="cda-services-title">
        <div className="cda-wrap">
          <header className="cda-section-head">
            <p className="cda-eyebrow">Services</p>
            <h2 id="cda-services-title">What we deliver</h2>
            <p className="cda-section-lead">
              End-to-end creative and digital support for residential and commercial launches across India.
            </p>
          </header>

          <div className="cda-nav" role="tablist" aria-label="Service categories">
            {SERVICE_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`cda-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`cda-panel-${tab.id}`}
                className={`cda-nav-btn${activeTab === tab.id ? ' is-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className="cda-detail"
            role="tabpanel"
            id={`cda-panel-${activeService.id}`}
            aria-labelledby={`cda-tab-${activeService.id}`}
          >
            <div className="cda-detail-intro">
              <h3>{activeService.label}</h3>
              <p>{activeService.intro}</p>
              <Link href="/contact#contactForm" className="cda-text-link">
                Enquire about this service
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
            <ul className="cda-detail-list">
              {activeService.items.map((item) => (
                <li key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cda-cta" aria-labelledby="cda-cta-title">
        <div className="cda-wrap cda-cta-inner">
          <div>
            <h2 id="cda-cta-title">{BOTTOM_CTA.title}</h2>
            <p>{BOTTOM_CTA.copy}</p>
          </div>
          <Link href="/contact#contactForm" className="cda-btn cda-btn-primary">
            {BOTTOM_CTA.cta}
          </Link>
        </div>
      </section>

      <section className="cda-section cda-faq" id="faq" aria-labelledby="cda-faq-title">
        <div className="cda-wrap cda-faq-layout">
          <header className="cda-section-head">
            <p className="cda-eyebrow">FAQ</p>
            <h2 id="cda-faq-title">Common questions</h2>
          </header>
          <div className="cda-faq-list">
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} className={`cda-faq-item${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="cda-faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true" />
                  </button>
                  {isOpen ? <p className="cda-faq-a">{item.a}</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
