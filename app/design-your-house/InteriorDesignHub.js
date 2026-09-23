'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  JUMP_LINKS,
  MOODBOARD,
  PACKAGES,
  PROCESS,
  ROOMS,
  STYLES,
} from './interior-data';

function SectionHead({ kicker, title, copy, light }) {
  return (
    <div className={`idt-head${light ? ' idt-head-light' : ''}`}>
      <span>{kicker}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export default function InteriorDesignHub() {
  const [activeStyle, setActiveStyle] = useState(STYLES[0]);
  const style = activeStyle;

  return (
    <div className="idt-page">
      <section className="idt-hero">
        <div className="idt-wrap idt-hero-grid">
          <div className="idt-hero-copy">
            <p className="idt-kicker">Inchbrick Interiors</p>
            <h1>
              Spaces that feel
              <span> unmistakably yours</span>
            </h1>
            <p className="idt-lead">
              End-to-end interior design for new homes and renovations — from first moodboard to styled handover
              across India&apos;s top cities.
            </p>
            <div className="idt-hero-actions">
              <Link href="/contact#contactForm" className="idt-btn idt-btn-red">
                Book design consult
              </Link>
              <a href="#studio" className="idt-btn idt-btn-ghost">
                Explore styles
              </a>
            </div>
            <ul className="idt-hero-stats" aria-label="Interior design highlights">
              <li>
                <strong>350+</strong>
                <span>Homes delivered</span>
              </li>
              <li>
                <strong>45-day</strong>
                <span>Avg. modular timeline</span>
              </li>
              <li>
                <strong>10 yr</strong>
                <span>Warranty on modules</span>
              </li>
            </ul>
          </div>
          <div className="idt-hero-visual" aria-hidden="true">
            <div className="idt-hero-collage">
              <img
                className="idt-hero-img idt-hero-img-main"
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
                alt=""
              />
              <img
                className="idt-hero-img idt-hero-img-float"
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80"
                alt=""
              />
              <span className="idt-hero-badge">
                <i className="fas fa-wand-magic-sparkles" aria-hidden="true" />
                3D first
              </span>
            </div>
          </div>
        </div>
      </section>

      <nav className="idt-jump" aria-label="Interior design sections">
        <div className="idt-wrap idt-jump-row">
          {JUMP_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={link.hot ? 'idt-jump-hot' : undefined}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="idt-section idt-studio" id="studio">
        <div className="idt-wrap">
          <SectionHead
            kicker="Style studio"
            title="Pick a direction. See it live."
            copy="Tap a look to preview palette, materials, and signature details — we tailor every layout to your floor plan."
          />
          <div className="idt-studio-layout">
            <div className="idt-style-list" role="tablist" aria-label="Interior styles">
              {STYLES.map((item) => {
                const selected = item.id === style.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`idt-style-chip${selected ? ' is-active' : ''}`}
                    onClick={() => setActiveStyle(item)}
                  >
                    <span className="idt-style-chip-name">{item.name}</span>
                    <span className="idt-style-chip-tag">{item.tag}</span>
                  </button>
                );
              })}
            </div>
            <article className="idt-preview" aria-live="polite">
              <div className="idt-preview-media">
                <img key={style.id} src={style.image} alt="" />
                <span className="idt-preview-tag">{style.tag}</span>
              </div>
              <div className="idt-preview-body">
                <h3>{style.name}</h3>
                <p>{style.desc}</p>
                <ul className="idt-swatches" aria-label="Color palette">
                  {style.swatches.map((hex) => (
                    <li key={hex} style={{ backgroundColor: hex }} title={hex} />
                  ))}
                </ul>
                <ul className="idt-preview-highlights">
                  {style.highlights.map((h) => (
                    <li key={h}>
                      <i className="fas fa-check" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="idt-section idt-rooms idt-section-dark" id="rooms">
        <div className="idt-wrap">
          <SectionHead
            light
            kicker="Room by room"
            title="Every corner, considered"
            copy="Modular kitchens, wardrobes, and furniture — coordinated across the home, not piecemeal."
          />
          <div className="idt-room-track">
            {ROOMS.map((room) => (
              <article key={room.name} className="idt-room-card">
                <img src={room.img} alt="" />
                <div className="idt-room-overlay">
                  <i className={`fas ${room.icon}`} aria-hidden="true" />
                  <h3>{room.name}</h3>
                  <p>{room.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="idt-section" id="moodboard">
        <div className="idt-wrap">
          <SectionHead
            kicker="Moodboard"
            title="Texture, light, and craft"
            copy="A glimpse of recent Inchbrick interior stories — materials we specify and artisans we partner with."
          />
          <div className="idt-bento">
            {MOODBOARD.map((tile, i) => (
              <figure key={i} className={`idt-bento-item idt-bento-${tile.span}`}>
                <img src={tile.img} alt="" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="idt-section idt-packages-wrap" id="packages">
        <div className="idt-wrap">
          <SectionHead
            kicker="Packages"
            title="Clear scopes. No surprises."
            copy="Transparent tiers for styling-only refreshes or full turnkey interiors — upgrade anytime as you build."
          />
          <div className="idt-packages">
            {PACKAGES.map((pkg) => (
              <article key={pkg.name} className={`idt-package${pkg.accent ? ' idt-package-featured' : ''}`}>
                {pkg.accent ? <span className="idt-package-badge">Most booked</span> : null}
                <h3>{pkg.name}</h3>
                <p className="idt-package-price">{pkg.price}</p>
                <p className="idt-package-note">{pkg.note}</p>
                <ul>
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link href="/contact#contactForm" className="idt-btn idt-btn-red idt-btn-block">
                  Get estimate
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="idt-section idt-process" id="process">
        <div className="idt-wrap">
          <SectionHead
            kicker="Process"
            title="From blank shell to styled home"
            copy="Dedicated designer, single project manager, and milestone payments tied to site progress."
          />
          <ol className="idt-steps">
            {PROCESS.map((item) => (
              <li key={item.step}>
                <span className="idt-step-num">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="idt-cta">
        <div className="idt-wrap idt-cta-inner">
          <div>
            <p className="idt-kicker idt-kicker-light">Ready when you are</p>
            <h2>Share your floor plan — we&apos;ll reply with a concept in 48 hours.</h2>
          </div>
          <div className="idt-cta-actions">
            <Link href="/contact#contactForm" className="idt-btn idt-btn-red">
              Start your project
            </Link>
            <Link href="/projects" className="idt-btn idt-btn-outline-light">
              Browse homes first
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
