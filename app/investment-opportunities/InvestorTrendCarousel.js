'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PROJECT_CARD_IMG_FALLBACK } from './investor-data';

export function TrendProjectCardLink({ href, name, loc, price, status, img, badgeLabel, badgeIcon = 'fa-bolt' }) {
  const [imgSrc, setImgSrc] = useState(img || PROJECT_CARD_IMG_FALLBACK);

  useEffect(() => {
    setImgSrc(img || PROJECT_CARD_IMG_FALLBACK);
  }, [img]);

  const onImgError = useCallback(() => {
    setImgSrc((current) => (current === PROJECT_CARD_IMG_FALLBACK ? current : PROJECT_CARD_IMG_FALLBACK));
  }, []);

  return (
    <Link href={href} className="inv-trend-card">
      <span className="inv-trend-card-media">
        <img src={imgSrc} alt="" loading="lazy" onError={onImgError} />
        <span className="inv-trend-card-flag">
          <i className={`fas ${badgeIcon}`} aria-hidden="true" />
          {badgeLabel}
        </span>
        <span className="inv-trend-card-price-pill">
          <small>Starting from</small>
          <strong>{price}</strong>
        </span>
      </span>
      <span className="inv-trend-card-body">
        <span className="inv-trend-card-status">{status}</span>
        <span className="inv-trend-card-name">{name}</span>
        <span className="inv-trend-card-loc">
          <i className="fas fa-location-dot" aria-hidden="true" />
          {loc}
        </span>
        <span className="inv-trend-card-cta">
          Explore project
          <i className="fas fa-arrow-right" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}

function TrendControls({ page, totalPages, progress, onPrev, onNext, variant = 'header' }) {
  return (
    <div className={`inv-trend-controls inv-trend-controls--${variant}`}>
      <span className="inv-trend-count">
        {page} / {totalPages}
      </span>
      <span className="inv-trend-progress" aria-hidden="true">
        <span className="inv-trend-progress-fill" style={{ width: `${progress}%` }} />
      </span>
      <span className="inv-trend-nav">
        <button type="button" className="inv-trend-nav-btn" aria-label="Previous projects" onClick={onPrev}>
          <i className="fas fa-arrow-left" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="inv-trend-nav-btn inv-trend-nav-btn--primary"
          aria-label="Next projects"
          onClick={onNext}
        >
          <i className="fas fa-arrow-right" aria-hidden="true" />
        </button>
      </span>
    </div>
  );
}

export default function InvestorTrendCarousel({
  theme,
  layout = 'header',
  id,
  titleBefore,
  titleAccent,
  description,
  panelImage,
  items,
  badgeLabel = 'Featured',
  badgeIcon = 'fa-bolt',
  ariaLabel,
}) {
  const viewportRef = useRef(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const updatePagination = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    if (maxScroll <= 0) {
      setPage(1);
      setTotalPages(1);
      return;
    }
    const slide = viewport.querySelector('.inv-trend-slide');
    const track = viewport.querySelector('.inv-trend-track');
    const gap = track ? parseFloat(getComputedStyle(track).gap) || 16 : 16;
    const step = slide ? slide.getBoundingClientRect().width + gap : viewport.clientWidth * 0.85;
    const pages = Math.max(1, Math.ceil(maxScroll / step) + 1);
    const current = Math.min(pages, Math.round(viewport.scrollLeft / step) + 1);
    setTotalPages(pages);
    setPage(current);
  }, []);

  useEffect(() => {
    updatePagination();
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.addEventListener('scroll', updatePagination, { passive: true });
    window.addEventListener('resize', updatePagination);
    return () => {
      viewport.removeEventListener('scroll', updatePagination);
      window.removeEventListener('resize', updatePagination);
    };
  }, [updatePagination, items.length]);

  const scrollByStep = useCallback((direction) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const slide = viewport.querySelector('.inv-trend-slide');
    const track = viewport.querySelector('.inv-trend-track');
    const gap = track ? parseFloat(getComputedStyle(track).gap) || 16 : 16;
    const step = slide ? slide.getBoundingClientRect().width + gap : viewport.clientWidth * 0.85;
    viewport.scrollBy({ left: direction * step, behavior: 'smooth' });
  }, []);

  const progress = totalPages <= 1 ? 100 : (page / totalPages) * 100;
  const onPrev = () => scrollByStep(-1);
  const onNext = () => scrollByStep(1);

  const track = (
    <div className="inv-trend-carousel">
      <div className="inv-trend-viewport" ref={viewportRef} tabIndex={0}>
        <div className="inv-trend-track" role="list">
          {items.map((raw) => {
            const item = {
              key: raw.key ?? raw.id ?? raw.name,
              href: raw.href ?? '/projects',
              name: raw.name,
              loc: raw.loc,
              price: raw.price,
              status: raw.status ?? raw.type ?? raw.tag ?? 'Off plan',
              img: raw.img,
              badge: raw.badge,
              rank: raw.rank,
            };
            let label = item.badge || (item.rank ? `Top ${item.rank}` : badgeLabel);
            if (item.rank && layout === 'trending-panel') {
              label = 'Trending';
            }
            return (
              <div className="inv-trend-slide" role="listitem" key={item.key}>
                <TrendProjectCardLink
                  href={item.href}
                  name={item.name}
                  loc={item.loc}
                  price={item.price}
                  status={item.status}
                  img={item.img}
                  badgeLabel={label}
                  badgeIcon={badgeIcon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const isTrendingPanel = layout === 'trending-panel';

  return (
    <section
      className={`inv-trend inv-trend--${theme}${isTrendingPanel ? ' inv-trend--trending-panel' : ''} inv-land-block`}
      id={id}
      aria-label={ariaLabel}
    >
      <div className="inv-wrap inv-trend-wrap inv-reveal">
        {isTrendingPanel ? (
          <div className="inv-trend-shell inv-trend-shell--panel">
            <aside className="inv-trend-panel">
              <div
                className="inv-trend-panel-bg"
                style={panelImage ? { backgroundImage: `url('${panelImage}')` } : undefined}
                aria-hidden="true"
              />
              <div className="inv-trend-panel-inner">
                <h2>
                  {titleBefore} <em>{titleAccent}</em>
                </h2>
                {description ? <p>{description}</p> : null}
                <TrendControls
                  page={page}
                  totalPages={totalPages}
                  progress={progress}
                  onPrev={onPrev}
                  onNext={onNext}
                  variant="panel"
                />
              </div>
            </aside>
            {track}
          </div>
        ) : (
          <>
            <header className="inv-trend-top">
              <div className="inv-trend-top-copy">
                <h2>
                  {titleBefore} <em>{titleAccent}</em>
                </h2>
                {description ? <p>{description}</p> : null}
              </div>
              <TrendControls
                page={page}
                totalPages={totalPages}
                progress={progress}
                onPrev={onPrev}
                onNext={onNext}
                variant="header"
              />
            </header>
            <div className="inv-trend-shell">{track}</div>
          </>
        )}
      </div>
    </section>
  );
}
