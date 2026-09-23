'use client';

import Link from 'next/link';
import { useCallback, useRef } from 'react';

export function RefSectionHeader({ kicker, title, copy, viewAllHref, viewAllLabel }) {
  return (
    <header className="inv-ref-head inv-reveal">
      <div className="inv-ref-head-text">
        <p className="inv-ref-kicker">{kicker}</p>
        <h2>{title}</h2>
        {copy ? <p className="inv-ref-copy">{copy}</p> : null}
      </div>
      {viewAllHref ? (
        <Link href={viewAllHref} className="inv-ref-viewall">
          {viewAllLabel || 'View all'}
          <i className="fas fa-arrow-right" aria-hidden="true" />
        </Link>
      ) : null}
    </header>
  );
}

export function RefProjectCard({ href, name, loc, price, type, img, rank }) {
  return (
    <Link href={href} className="inv-ref-card">
      <div className="inv-ref-card-media">
        <img src={img} alt="" loading="lazy" />
        <button
          type="button"
          className="inv-ref-card-save"
          aria-label={`Save ${name}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <i className="far fa-heart" aria-hidden="true" />
        </button>
        {type ? <span className="inv-ref-card-badge">{type}</span> : null}
        {rank ? <span className="inv-ref-card-rank">#{String(rank).padStart(2, '0')}</span> : null}
      </div>
      <div className="inv-ref-card-body">
        <h3>{name}</h3>
        <p className="inv-ref-card-loc">
          <i className="fas fa-location-dot" aria-hidden="true" />
          {loc}
        </p>
        <p className="inv-ref-card-price">{price}</p>
        <span className="inv-ref-card-go" aria-hidden="true">
          <i className="fas fa-arrow-right" />
        </span>
      </div>
    </Link>
  );
}

export function RefVerticalTile({ href, label, img, meta }) {
  return (
    <Link href={href} className="inv-ref-tile">
      <img src={img} alt="" loading="lazy" />
      <span className="inv-ref-tile-shade" aria-hidden="true" />
      <span className="inv-ref-tile-label">
        {meta ? <span className="inv-ref-tile-meta">{meta}</span> : null}
        <span className="inv-ref-tile-label-text">
          <i className="fas fa-location-dot" aria-hidden="true" />
          {label}
        </span>
      </span>
    </Link>
  );
}

export function RefProjectSlider({ items, ariaLabel }) {
  const viewportRef = useRef(null);

  const scrollByStep = useCallback((direction) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const slide = viewport.querySelector('.inv-ref-slider-slide');
    const track = viewport.querySelector('.inv-ref-slider-track');
    const gap = track ? parseFloat(getComputedStyle(track).gap) || 18 : 18;
    const step = slide ? slide.getBoundingClientRect().width + gap : viewport.clientWidth * 0.9;
    viewport.scrollBy({ left: direction * step, behavior: 'smooth' });
  }, []);

  return (
    <div className="inv-ref-slider inv-reveal">
      <div className="inv-ref-slider-toolbar">
        <p className="inv-ref-slider-hint">Swipe or use arrows to browse</p>
        <div className="inv-ref-slider-nav">
          <button
            type="button"
            className="inv-ref-slider-btn"
            aria-label="Previous projects"
            onClick={() => scrollByStep(-1)}
          >
            <i className="fas fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inv-ref-slider-btn"
            aria-label="Next projects"
            onClick={() => scrollByStep(1)}
          >
            <i className="fas fa-chevron-right" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="inv-ref-slider-viewport" ref={viewportRef} tabIndex={0}>
        <div className="inv-ref-slider-track" role="list" aria-label={ariaLabel}>
          {items.map((item) => (
            <div className="inv-ref-slider-slide" role="listitem" key={item.key}>
              <RefProjectCard
                href={item.href}
                name={item.name}
                loc={item.loc}
                price={item.price}
                type={item.type}
                img={item.img}
                rank={item.rank}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
