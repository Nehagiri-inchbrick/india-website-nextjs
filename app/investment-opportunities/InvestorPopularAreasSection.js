'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

const TOP_INVESTMENT_AREAS = [
  {
    id: 'mumbai-andheri',
    city: 'Mumbai',
    area: 'Andheri East',
    demandTag: 'High Demand',
    tagType: 'high',
    rentalYield: '4.3%',
    appreciation: '+26%',
    entryPrice: '₹14,500/sq.ft',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    href: '/listings?city=mumbai',
  },
  {
    id: 'bengaluru-whitefield',
    city: 'Bengaluru',
    area: 'Whitefield',
    demandTag: 'High Demand',
    tagType: 'high',
    rentalYield: '4.8%',
    appreciation: '+32%',
    entryPrice: '₹9,500/sq.ft',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    href: '/listings?city=bangalore',
  },
  {
    id: 'pune-hinjewadi',
    city: 'Pune',
    area: 'Hinjewadi',
    demandTag: 'High Demand',
    tagType: 'high',
    rentalYield: '4.5%',
    appreciation: '+26%',
    entryPrice: '₹7,800/sq.ft',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    href: '/listings?city=pune',
  },
  {
    id: 'delhi-gurugram',
    city: 'Delhi NCR',
    area: 'Gurugram',
    demandTag: 'Growing Demand',
    tagType: 'growing',
    rentalYield: '4.1%',
    appreciation: '+24%',
    entryPrice: '₹10,500/sq.ft',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    href: '/listings?city=gurgaon',
  },
];

export default function InvestorPopularAreasSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredAreas = useMemo(() => {
    if (selectedFilter === 'all') return TOP_INVESTMENT_AREAS;
    return TOP_INVESTMENT_AREAS.filter(
      (item) => item.city.toLowerCase().replace(/\s+/g, '') === selectedFilter
    );
  }, [selectedFilter]);

  return (
    <section className="inv-top-areas-sec-root" id="popular-areas">
      <div className="inv-top-areas-container">
        
        {/* Header Row */}
        <div className="inv-top-areas-header">
          <div className="inv-top-areas-header-left">
            <div className="inv-top-areas-eyebrow">
              TOP CITIES &amp; AREAS
            </div>
            <h2 className="inv-top-areas-title">Where to invest inside top cities</h2>
            <p className="inv-top-areas-subtitle">
              Explore the best-performing areas with strong rental demand and long-term growth potential.
            </p>
          </div>

          <div className="inv-top-areas-header-right">
            <Link href="/listings" className="inv-top-areas-explore-link">
              Explore All Areas &rarr;
            </Link>
          </div>
        </div>

        {/* 4 Area Cards Grid */}
        <div className="inv-top-areas-grid">
          {filteredAreas.map((card) => (
            <article key={card.id} className="inv-area-card">
              <div className="inv-area-card-media">
                <img src={card.image} alt={`${card.city} - ${card.area}`} className="inv-area-card-img" />
                <span className="inv-area-img-overlay-tag">
                  {card.demandTag}
                </span>
              </div>

              <div className="inv-area-card-body">
                {/* Title & Tag Row */}
                <div className="inv-area-card-head-row">
                  <div className="inv-area-card-titles">
                    <h3 className="inv-area-city-name">{card.city}</h3>
                    <span className="inv-area-sub-name">{card.area}</span>
                  </div>

                  <span className={`inv-area-demand-pill inv-area-demand-pill--${card.tagType}`}>
                    <span className="inv-demand-dot" />
                    {card.demandTag}
                  </span>
                </div>

                {/* Metrics Row */}
                <div className="inv-area-card-metrics-row">
                  <div className="inv-area-metric">
                    <span className="inv-area-metric-lbl">Rental Yield</span>
                    <strong className="inv-area-metric-val">{card.rentalYield}</strong>
                  </div>

                  <div className="inv-area-metric">
                    <span className="inv-area-metric-lbl">Appreciation</span>
                    <strong className="inv-area-metric-val inv-area-metric-val--green">
                      {card.appreciation}
                    </strong>
                  </div>

                  <Link href={card.href} className="inv-area-action-circle" title={`Explore ${card.area}`}>
                    &rarr;
                  </Link>
                </div>

                {/* Bottom Entry Price */}
                <div className="inv-area-card-entry-row">
                  <span className="inv-area-entry-lbl">Entry Price</span>
                  <strong className="inv-area-entry-val">{card.entryPrice}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
