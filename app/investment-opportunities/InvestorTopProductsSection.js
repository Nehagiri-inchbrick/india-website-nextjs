'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TOP_PRODUCTS, TOP_PRODUCTS_META } from './investor-landing-data';

const SLIDE_RATIO = 0.72;
const SLIDE_GAP = 16;

export default function InvestorTopProductsSection() {
  const [index, setIndex] = useState(0);
  const [stepPx, setStepPx] = useState(0);
  const viewportRef = useRef(null);
  const total = TOP_PRODUCTS.length;

  const measure = useCallback(() => {
    const width = viewportRef.current?.clientWidth || 0;
    if (!width) return;
    setStepPx(width * SLIDE_RATIO + SLIDE_GAP);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  return (
    <section
      className="inv-top-products inv-top-products--posthero inv-reveal"
      id="top-products"
      aria-labelledby="inv-top-products-title"
    >
      <div className="inv-wrap">
        <header className="inv-top-products-head">
          <div className="inv-top-products-copy">
            <p className="inv-mock-eyebrow">{TOP_PRODUCTS_META.eyebrow}</p>
            <h2 id="inv-top-products-title">{TOP_PRODUCTS_META.title}</h2>
            <p>{TOP_PRODUCTS_META.lead}</p>
          </div>
          <div className="inv-top-products-head-actions">
            <p className="inv-top-products-count" aria-live="polite">
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>/ {String(total).padStart(2, '0')}</span>
            </p>
            <Link href="/listings" className="inv-top-products-all">
              Browse all <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </header>

        <div className="inv-top-products-slider">
          <div className="inv-top-products-viewport" ref={viewportRef}>
            <div
              className="inv-top-products-track"
              style={{
                transform: stepPx ? `translateX(-${index * stepPx}px)` : undefined,
                gap: `${SLIDE_GAP}px`,
              }}
            >
              {TOP_PRODUCTS.map((product, productIndex) => (
                <article
                  key={product.id}
                  className={`inv-top-products-slide${productIndex === index ? ' is-active' : ''}`}
                  style={{ flexBasis: `${SLIDE_RATIO * 100}%`, width: `${SLIDE_RATIO * 100}%` }}
                  aria-hidden={productIndex !== index}
                >
                  <div className="inv-top-products-slide-media">
                    <img src={product.img} alt="" loading="lazy" />
                    <div className="inv-top-products-hero-veil" aria-hidden="true" />
                    <span className="inv-top-products-feature-badge">{product.badge}</span>
                    <div className="inv-top-products-hero-content">
                      <p className="inv-top-products-feature-loc">
                        {product.city} · {product.corridor}
                      </p>
                      <h3>{product.name}</h3>
                      <p className="inv-top-products-feature-hook">{product.hook}</p>
                      <div className="inv-top-products-hero-meta">
                        <div>
                          <span>Growth</span>
                          <strong>{product.growth}</strong>
                        </div>
                        <div>
                          <span>Yield</span>
                          <strong>{product.yield}</strong>
                        </div>
                        <div>
                          <span>Plan</span>
                          <strong>{product.plan}</strong>
                        </div>
                        <div>
                          <span>From</span>
                          <strong>{product.price}</strong>
                        </div>
                      </div>
                      <Link
                        href={product.href}
                        className="inv-top-products-cta"
                        tabIndex={productIndex === index ? 0 : -1}
                      >
                        View product <i className="fas fa-arrow-right" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="inv-top-products-long-arrow"
            onClick={goNext}
            aria-label="Show next product"
          >
            <span className="inv-top-products-long-arrow-line" aria-hidden="true" />
            <span className="inv-top-products-long-arrow-head" aria-hidden="true">
              <i className="fas fa-arrow-right" />
            </span>
            <span className="inv-top-products-long-arrow-label">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
