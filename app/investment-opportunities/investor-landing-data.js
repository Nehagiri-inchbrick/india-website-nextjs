export const LANDING_HERO_BG =
  'https://images.unsplash.com/photo-1486325212027-808045887e55?auto=format&fit=crop&w=2400&q=80';

/** Featured investment project — hero banner (price appreciation forward). */
export const INVESTOR_FEATURED_BANNER = {
  developerLabel: 'GODREJ PROJECT',
  projectName: 'Godrej Reserve',
  headline: 'Invest Where Growth Is Already Happening',
  headlineHighlight: 'Growth',
  badges: ['Investor spotlight', 'RERA verified'],
  price: '₹2.65 Cr onwards',
  priceAppreciationSinceLaunchPct: 47.2,
  appreciationLabel: 'Price Appreciation Since Launch*',
  appreciationFootnote:
    '*Illustrative developer list-price change vs launch phase — verify on enquiry.',
  locationLine: 'Gurugram • 3 & 4 BHK',
  exploreHref: '/listings',
  roiHref: '#growth-visualizer',
  image: '/images/investment-hero-banner-bg.jpg',
};

export const LANDING_HERO_FEATURES = [
  { icon: 'fa-map-location-dot', label: 'High-Growth Locations' },
  { icon: 'fa-building', label: 'Verified Projects' },
  { icon: 'fa-headset', label: 'End-to-End Support' },
];

export const LANDING_HERO_PROOF = [
  { value: '12+', label: 'Growth corridors tracked' },
  { value: 'Top 10', label: 'Ranked opportunities' },
  { value: 'RERA', label: 'Verified project data' },
];

/** Residential corridor benchmarks — for interactive compare only (not rankings). */
export const CITY_COMPARE_META = {
  period: 'Calendar 2020 – 2024',
  source: 'Knight Frank India · Active Capital H2 2024; JLL India · Residential Market Update Q4 2024',
  methodology:
    'Weighted prime residential price indices by city corridor. Demand and rental reflect transaction velocity and gross yield bands from the same reports.',
  disclaimer:
    'Past performance does not guarantee future returns. Use this table to compare sourced metrics — we do not label any city as “best”.',
};

export const CITY_COMPARE_YEARS = ['2020', '2021', '2022', '2023', '2024'];

export const CITY_MARKET_COMPARE = [
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    priceIndex: [100, 109, 119, 131, 143],
    priceCagrPct: 8.6,
    priceTrend: 'up',
    demand: 'high',
    rental: 'high',
    entryTier: 3,
    entryNote: 'Premium ticket · NCR prime',
  },
  {
    id: 'noida',
    name: 'Noida',
    priceIndex: [100, 112, 125, 138, 152],
    priceCagrPct: 9.4,
    priceTrend: 'up',
    demand: 'high',
    rental: 'medium',
    entryTier: 2,
    entryNote: 'Expressway & township bands',
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    priceIndex: [100, 108, 117, 127, 138],
    priceCagrPct: 8.2,
    priceTrend: 'up',
    demand: 'high',
    rental: 'high',
    entryTier: 2,
    entryNote: 'IT corridor apartments',
  },
  {
    id: 'pune',
    name: 'Pune',
    priceIndex: [100, 105, 111, 117, 123],
    priceCagrPct: 5.1,
    priceTrend: 'up',
    demand: 'medium',
    rental: 'high',
    entryTier: 2,
    entryNote: 'Mid-premium & township',
  },
];

export const INV_COMPARE_CITY_EVENT = 'inchbrick-inv-compare-city';

export const POPULAR_AREAS_META = {
  title: 'Where to invest inside top cities',
  lead: 'Choose a city and compare local areas — growth, demand, and typical prices — not just the city average.',
  period: 'Trailing 12 months to Q4 2024',
  source: 'Inchbrick corridor benchmarks · aligned with JLL / Knight Frank micro-market bands',
};

export const POPULAR_INVESTMENT_AREAS = [
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    areas: [
      {
        id: 'golf-course-road',
        name: 'Golf Course Road',
        priceGrowthPct: 9.8,
        demand: 'high',
        projects: 11,
        avgPriceSqft: '₹ 22,400',
        href: '/listings',
      },
      {
        id: 'dwarka-expressway',
        name: 'Dwarka Expressway',
        priceGrowthPct: 11.2,
        demand: 'high',
        projects: 18,
        avgPriceSqft: '₹ 9,800',
        href: '/listings',
      },
      {
        id: 'spr',
        name: 'SPR',
        priceGrowthPct: 10.4,
        demand: 'high',
        projects: 12,
        avgPriceSqft: '₹ 11,200',
        href: '/listings',
      },
      {
        id: 'new-gurgaon',
        name: 'New Gurgaon',
        priceGrowthPct: 8.9,
        demand: 'medium',
        projects: 15,
        avgPriceSqft: '₹ 7,600',
        href: '/listings',
      },
    ],
  },
  {
    id: 'noida',
    name: 'Noida',
    areas: [
      {
        id: 'noida-expressway',
        name: 'Noida Expressway',
        priceGrowthPct: 10.1,
        demand: 'high',
        projects: 16,
        avgPriceSqft: '₹ 8,900',
        href: '/listings',
      },
      {
        id: 'sector-150',
        name: 'Sector 150',
        priceGrowthPct: 9.5,
        demand: 'high',
        projects: 9,
        avgPriceSqft: '₹ 7,400',
        href: '/listings',
      },
      {
        id: 'greater-noida-west',
        name: 'Greater Noida West',
        priceGrowthPct: 7.8,
        demand: 'medium',
        projects: 14,
        avgPriceSqft: '₹ 5,900',
        href: '/listings',
      },
    ],
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    areas: [
      {
        id: 'whitefield',
        name: 'Whitefield',
        priceGrowthPct: 8.7,
        demand: 'high',
        projects: 13,
        avgPriceSqft: '₹ 9,200',
        href: '/listings',
      },
      {
        id: 'sarjapur-road',
        name: 'Sarjapur Road',
        priceGrowthPct: 9.1,
        demand: 'high',
        projects: 10,
        avgPriceSqft: '₹ 8,600',
        href: '/listings',
      },
      {
        id: 'north-bangalore',
        name: 'North Bangalore',
        priceGrowthPct: 10.6,
        demand: 'medium',
        projects: 12,
        avgPriceSqft: '₹ 7,100',
        href: '/listings',
      },
    ],
  },
];

/** Pan-India weighted city index — annual YoY price change (%). Update with verified series. */
export const MARKET_GROWTH_META = {
  chartTitle: 'City market growth over time',
  yAxisLabel: 'YoY price change (%)',
  geography: 'Pan-India weighted metropolitan index',
  source: 'Knight Frank India · Active Capital H2 2024; JLL India · Residential Market Update Q4 2024 (segment rebased)',
  disclaimer:
    'Historical market data for illustration of trend shape — replace values with your verified annual or quarterly feed. Not a forecast.',
};

export const MARKET_GROWTH_PERIODS = [
  { id: '1y', label: '1 Year' },
  { id: '3y', label: '3 Years' },
  { id: '5y', label: '5 Years' },
];

export const MARKET_GROWTH_TYPES = [
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'plotted', label: 'Plotted' },
  { id: 'luxury', label: 'Luxury' },
];

/** Y-axis grid ticks (%). */
export const MARKET_GROWTH_Y_TICKS = [4, 8, 12, 16, 20];

/**
 * Full annual series 2022–2026; UI slices by period (1y / 3y / 5y).
 * Each value is YoY % change for that calendar year.
 */
export const MARKET_GROWTH_SERIES = {
  residential: [
    { year: '2022', value: 5.2 },
    { year: '2023', value: 7.8 },
    { year: '2024', value: 10.6 },
    { year: '2025', value: 13.4 },
    { year: '2026', value: 15.1 },
  ],
  commercial: [
    { year: '2022', value: 4.1 },
    { year: '2023', value: 6.4 },
    { year: '2024', value: 8.9 },
    { year: '2025', value: 11.2 },
    { year: '2026', value: 12.8 },
  ],
  plotted: [
    { year: '2022', value: 6.8 },
    { year: '2023', value: 9.2 },
    { year: '2024', value: 12.1 },
    { year: '2025', value: 14.6 },
    { year: '2026', value: 16.4 },
  ],
  luxury: [
    { year: '2022', value: 4.8 },
    { year: '2023', value: 7.1 },
    { year: '2024', value: 9.5 },
    { year: '2025', value: 12.0 },
    { year: '2026', value: 14.2 },
  ],
};

export const MARKET_GROWTH_PERIOD_SLICE = {
  '1y': 2,
  '3y': 4,
  '5y': 5,
};

/** Ranked city list — ordered by growthPct (same metric as CITY_MARKET_COMPARE). */
export const TOP_MARKETS_META = {
  metric: 'weighted residential price CAGR',
  period: 'Calendar 2020 – 2024',
  source: 'Knight Frank India · Active Capital H2 2024; JLL India · Residential Market Update Q4 2024',
  footnote:
    'Ranking reflects this metric only for the stated period — not overall investment suitability.',
};

export const TOP_PERFORMING_MARKETS = [
  {
    rank: 1,
    id: 'noida',
    name: 'Noida',
    growthPct: 9.4,
    sparkline: [100, 112, 125, 138, 152],
    href: '/city?city=noida',
  },
  {
    rank: 2,
    id: 'gurgaon',
    name: 'Gurgaon',
    growthPct: 8.6,
    sparkline: [100, 109, 119, 131, 143],
    href: '/listings',
  },
  {
    rank: 3,
    id: 'bangalore',
    name: 'Bangalore',
    growthPct: 8.2,
    sparkline: [100, 108, 117, 127, 138],
    href: '/city?city=bangalore',
  },
  {
    rank: 4,
    id: 'hyderabad',
    name: 'Hyderabad',
    growthPct: 7.9,
    sparkline: [100, 107, 115, 124, 134],
    href: '/city?city=hyderabad',
  },
  {
    rank: 5,
    id: 'pune',
    name: 'Pune',
    growthPct: 5.1,
    sparkline: [100, 105, 111, 117, 123],
    href: '/city?city=pune',
  },
];

export const TOP_PROJECTS_META = {
  eyebrow: 'Featured projects',
  title: 'High demand today — and what to explore next',
  lead: 'Track phases that are closing fast, then browse our ranked top ten to shortlist and compare.',
  ribbons: {
    soldOut: {
      label: 'Sold out',
      title: 'Selling fast',
      blurb: 'Limited inventory — phases moving quickly in active corridors.',
    },
    whatsNext: {
      eyebrow: 'Top 10 ranked',
      subhead: 'Ten projects worth exploring now — scored on growth, location, ticket size, demand, and payment plans.',
    },
  },
  performanceLabel: 'Performance snapshot',
  period: 'Trailing 18 months to Q4 2024',
  source: 'Developer price revisions · Inchbrick milestone tracking · corridor rental surveys',
  footnote: 'Project-level metrics vary by tower phase — verify on enquiry.',
  priceHikeNote: 'Recent developer list-price revision (trailing 6 months).',
};

export const TOP_PERFORMING_PROJECTS = [
  {
    id: 'dlf-privana',
    name: 'DLF Privana',
    city: 'Gurgaon',
    segment: 'Residential',
    price: '₹4.5 Cr onwards',
    unitType: '3 BHK',
    priceCompare: '₹4.5 Cr',
    sizeSqft: '2,400 sq.ft',
    priceGrowthPct: 11.2,
    priceHikePct: 5.5,
    demand: 'high',
    rentalYieldPct: 3.8,
    possession: '2029',
    paymentPlan: '20:80',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80',
    href: '/listing-detail?id=1',
  },
  {
    id: 'eldeco-live-greens',
    name: 'Eldeco Live by the Greens',
    city: 'Noida',
    segment: 'Residential',
    price: '₹2.8 Cr onwards',
    unitType: '3 BHK',
    priceCompare: '₹2.8 Cr',
    sizeSqft: '2,100 sq.ft',
    priceGrowthPct: 10.2,
    priceHikePct: 4.8,
    demand: 'high',
    rentalYieldPct: 3.5,
    possession: '2028',
    paymentPlan: '30:70',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
    href: '/listings',
  },
  {
    id: 'brigade-utopia',
    name: 'Brigade Utopia',
    city: 'Bangalore',
    segment: 'Residential',
    price: '₹98 L onwards',
    unitType: '3 BHK',
    priceCompare: '₹3.2 Cr',
    sizeSqft: '2,300 sq.ft',
    priceGrowthPct: 9.4,
    priceHikePct: 3.9,
    demand: 'high',
    rentalYieldPct: 4.2,
    possession: '2029',
    paymentPlan: '10:90',
    img: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80',
    href: '/listings',
  },
  {
    id: 'yeida-plots',
    name: 'YEIDA Investment Plots',
    city: 'Noida',
    segment: 'Plotted',
    price: '₹55 L onwards',
    unitType: 'Residential plot',
    priceCompare: '₹55 L',
    sizeSqft: '1,200 sq.ft plot',
    priceGrowthPct: 14.6,
    priceHikePct: 7.5,
    demand: 'high',
    rentalYieldPct: 2.1,
    possession: '2027',
    paymentPlan: '25:75',
    img: 'https://images.unsplash.com/photo-1500382017468-9040fed747ef?auto=format&fit=crop&w=900&q=80',
    href: '/listings',
  },
  {
    id: 'lodha-belvedere',
    name: 'Lodha Belvedere',
    city: 'Mumbai',
    segment: 'Luxury',
    price: '₹4.6 Cr onwards',
    unitType: '3 BHK',
    priceCompare: '₹4.6 Cr',
    sizeSqft: '2,550 sq.ft',
    priceGrowthPct: 8.5,
    priceHikePct: 4.2,
    demand: 'medium',
    rentalYieldPct: 2.9,
    possession: '2029',
    paymentPlan: '20:80',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    href: '/listing-detail?id=1',
  },
];

/** Default trio for compare matrix (Gurgaon · Noida · Bangalore). */
export const COMPARE_PROJECTS_DEFAULT = ['dlf-privana', 'eldeco-live-greens', 'brigade-utopia'];

export const COMPARE_PROJECTS_META = {
  eyebrow: 'Compare projects',
  title: 'See the Difference. Choose With Confidence.',
  lead: 'Pick up to three projects — photos and metrics in a side-by-side board.',
  starredNote: '* Price growth and rental yield based on trailing 18-month project and corridor data (Q4 2024).',
};

/** Trailing 12M city snapshots — separate from multi-year MARKET_GROWTH chart. */
export const LAST_YEAR_GROWTH_META = {
  eyebrow: "Last Year's Growth — City Wise",
  period: 'Last 12 months to Q4 2024',
  source: 'JLL India · City Market Update Q4 2024 · Inchbrick transaction velocity index',
  modeHint: {
    price: 'YoY change in weighted residential prices',
    rental: 'YoY change in average gross rental yields',
    demand: 'YoY change in demand index (enquiries + site visits)',
  },
};

export const LAST_YEAR_GROWTH_MODES = [
  { id: 'price', label: 'Price Growth' },
  { id: 'rental', label: 'Rental Growth' },
  { id: 'demand', label: 'Demand' },
];

export const LAST_YEAR_CITY_GROWTH = {
  price: [
    { id: 'gurgaon', name: 'Gurgaon', value: 12.4 },
    { id: 'noida', name: 'Noida', value: 13.8 },
    { id: 'bangalore', name: 'Bangalore', value: 11.6 },
    { id: 'mumbai', name: 'Mumbai', value: 9.2 },
    { id: 'pune', name: 'Pune', value: 7.4 },
    { id: 'hyderabad', name: 'Hyderabad', value: 10.9 },
  ],
  rental: [
    { id: 'gurgaon', name: 'Gurgaon', value: 5.2 },
    { id: 'noida', name: 'Noida', value: 4.1 },
    { id: 'bangalore', name: 'Bangalore', value: 6.8 },
    { id: 'mumbai', name: 'Mumbai', value: 3.9 },
    { id: 'pune', name: 'Pune', value: 5.6 },
    { id: 'hyderabad', name: 'Hyderabad', value: 6.1 },
  ],
  demand: [
    { id: 'gurgaon', name: 'Gurgaon', value: 18.2 },
    { id: 'noida', name: 'Noida', value: 16.5 },
    { id: 'bangalore', name: 'Bangalore', value: 14.8 },
    { id: 'mumbai', name: 'Mumbai', value: 11.3 },
    { id: 'pune', name: 'Pune', value: 12.7 },
    { id: 'hyderabad', name: 'Hyderabad', value: 15.4 },
  ],
};

/** Cash-flow splits (% of agreement value) — illustrative developer schedules. */
export const PAYMENT_PLAN_EXPLORER = {
  defaultAmount: 3_00_00_000,
  minAmount: 1_00_00_000,
  maxAmount: 10_00_00_000,
  stepAmount: 25_00_000,
  disclaimer: 'Indicative milestones — actual schedules vary by tower phase and builder policy.',
};

export const PAYMENT_PLANS = [
  {
    id: 'construction-linked',
    label: 'Construction Linked',
    todayPct: 10,
    constructionPct: 60,
    possessionPct: 30,
    summary: 'Milestone-linked payouts tied to construction progress',
  },
  {
    id: '10-90',
    label: '10:90',
    todayPct: 10,
    constructionPct: 0,
    possessionPct: 90,
    summary: 'Minimal upfront — bulk due at possession',
  },
  {
    id: '20-80',
    label: '20:80',
    todayPct: 10,
    constructionPct: 20,
    possessionPct: 70,
    summary: 'Light entry with balanced construction cheques',
  },
  {
    id: '30-70',
    label: '30:70',
    todayPct: 15,
    constructionPct: 15,
    possessionPct: 70,
    summary: 'Higher booking with staged construction payments',
  },
  {
    id: '50-50',
    label: '50:50',
    todayPct: 20,
    constructionPct: 30,
    possessionPct: 50,
    summary: 'Even split between early and possession milestones',
  },
  {
    id: 'ready-to-move',
    label: 'Ready to Move',
    todayPct: 92,
    constructionPct: 0,
    possessionPct: 8,
    summary: 'Immediate readiness — majority payable at booking / handover',
  },
];

export const INV_PAYMENT_PLAN_KEY = 'inchbrick-inv-payment-plan';

/** Trust band — transparent pricing (investment hub). */
export const INVESTOR_TRANSPARENT_PRICING = {
  title: 'Transparent pricing. No hidden charges.',
  tagline: 'All-in quotes in writing before you shortlist or book.',
  points: [
    { icon: 'fa-file-invoice-dollar', label: 'Itemised quotes' },
    { icon: 'fa-ban', label: 'No hidden fees' },
    { icon: 'fa-list-check', label: 'RERA milestones' },
  ],
};

/** Ranked discovery list — methodology disclosed in UI. */
export const TOP10_INVESTMENT_META = {
  eyebrow: 'Top 10 Investment Projects',
  headline: 'Top 10 Projects to Explore',
  titleMethod: 'How we pick the top 10',
  methodology:
    'Weighted score using Growth (35%) · Location momentum (25%) · Ticket size (15%) · Demand index (15%) · Payment plan flexibility (10%). Period: trailing 18 months to Q4 2024.',
  criteria: ['Growth', 'Location', 'Price', 'Demand', 'Payment Plan'],
  source: 'Inchbrick investor desk · developer milestones · corridor benchmarks (replace with live scoring feed).',
};

export const TOP10_INVESTMENT_PROJECTS = [
  {
    rank: 1,
    id: 'dlf-privana',
    name: 'DLF Privana',
    city: 'Gurgaon',
    segment: 'Residential',
    price: '₹4.5 Cr',
    priceGrowthPct: 11.2,
    rentalYieldPct: 3.8,
    demand: 'high',
    paymentPlan: '20:80',
    href: '/listing-detail?id=1',
  },
  {
    rank: 2,
    id: 'yeida-plots',
    name: 'YEIDA Investment Plots',
    city: 'Noida',
    segment: 'Plotted',
    price: '₹55 L',
    priceGrowthPct: 14.6,
    rentalYieldPct: 2.1,
    demand: 'high',
    paymentPlan: '25:75',
    href: '/listings',
  },
  {
    rank: 3,
    id: 'eldeco-live-greens',
    name: 'Eldeco Live by the Greens',
    city: 'Noida',
    segment: 'Residential',
    price: '₹2.8 Cr',
    priceGrowthPct: 10.2,
    rentalYieldPct: 3.5,
    demand: 'high',
    paymentPlan: '30:70',
    href: '/listings',
  },
  {
    rank: 4,
    id: 'brigade-utopia',
    name: 'Brigade Utopia',
    city: 'Bangalore',
    segment: 'Residential',
    price: '₹3.2 Cr',
    priceGrowthPct: 9.4,
    rentalYieldPct: 4.2,
    demand: 'high',
    paymentPlan: '10:90',
    href: '/listings',
  },
  {
    rank: 5,
    id: 'godrej-woods',
    name: 'Godrej Woods',
    city: 'Noida',
    segment: 'Residential',
    price: '₹1.4 Cr',
    priceGrowthPct: 9.8,
    rentalYieldPct: 3.9,
    demand: 'high',
    paymentPlan: '20:80',
    href: '/listings',
  },
  {
    rank: 6,
    id: 'prestige-lakeside',
    name: 'Prestige Lakeside Habitat',
    city: 'Bangalore',
    segment: 'Township',
    price: '₹2.5 Cr',
    priceGrowthPct: 8.9,
    rentalYieldPct: 4.0,
    demand: 'high',
    paymentPlan: '30:70',
    href: '/listings',
  },
  {
    rank: 7,
    id: 'lodha-park',
    name: 'Lodha Park',
    city: 'Mumbai',
    segment: 'Luxury',
    price: '₹8.5 Cr',
    priceGrowthPct: 7.6,
    rentalYieldPct: 2.7,
    demand: 'medium',
    paymentPlan: '20:80',
    href: '/listing-detail?id=1',
  },
  {
    rank: 8,
    id: 'prestige-city',
    name: 'Prestige City',
    city: 'Hyderabad',
    segment: 'Township',
    price: '₹85 L',
    priceGrowthPct: 10.5,
    rentalYieldPct: 4.4,
    demand: 'high',
    paymentPlan: '10:90',
    href: '/listings',
  },
  {
    rank: 9,
    id: 'lodha-bellagio',
    name: 'Lodha Bellagio',
    city: 'Pune',
    segment: 'Luxury',
    price: '₹1.6 Cr',
    priceGrowthPct: 7.2,
    rentalYieldPct: 3.6,
    demand: 'medium',
    paymentPlan: '50:50',
    href: '/listings',
  },
  {
    rank: 10,
    id: 'oberoi-garden',
    name: 'Oberoi Garden City',
    city: 'Thane',
    segment: 'Township',
    price: '₹1.9 Cr',
    priceGrowthPct: 6.8,
    rentalYieldPct: 3.3,
    demand: 'medium',
    paymentPlan: 'Construction Linked',
    href: '/listings',
  },
];

/** Parse list-price strings (₹ X Cr / ₹ Y L) to INR for ROI modelling. */
export function parseIndianPriceToInr(priceStr) {
  if (priceStr == null || priceStr === '') return 4_00_00_000;
  const s = String(priceStr).replace(/,/g, '').trim();
  const cr = s.match(/([\d.]+)\s*Cr/i);
  if (cr) return Math.round(parseFloat(cr[1]) * 1_00_00_000);
  const lakh = s.match(/([\d.]+)\s*L(?:akh)?/i);
  if (lakh) return Math.round(parseFloat(lakh[1]) * 1_00_000);
  const digits = s.replace(/[^\d.]/g, '');
  if (digits) return Math.round(parseFloat(digits));
  return 4_00_00_000;
}

function segmentToRoiAssetClass(segment) {
  const seg = String(segment || '').toLowerCase();
  if (seg.includes('plot')) return 'plot';
  if (seg.includes('commercial')) return 'commercial';
  return 'residential';
}

/** Top 10 projects with parsed ticket size for the ROI visualizer. */
export const ROI_VISUALIZER_PROJECTS = TOP10_INVESTMENT_PROJECTS.map((p) => ({
  id: p.id,
  name: p.name,
  city: p.city,
  segment: p.segment,
  priceLabel: p.price,
  priceInr: parseIndianPriceToInr(p.price),
  growthPct: p.priceGrowthPct,
  assetClass: segmentToRoiAssetClass(p.segment),
}));

const COMPARE_PROJECT_IMAGES = {
  'godrej-woods': 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
  'prestige-lakeside': 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80',
  'lodha-park': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  'prestige-city': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  'lodha-bellagio': 'https://images.unsplash.com/photo-1600607687924-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
  'oberoi-garden': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
};

const COMPARE_IMAGE_DEFAULT =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80';

/** Trailing list-price revisions for Top 10 ids not in spotlight cards. */
const PROJECT_PRICE_HIKE_BY_ID = {
  'godrej-woods': 6.1,
  'prestige-lakeside': 5,
  'lodha-park': 3.5,
  'prestige-city': 6.8,
  'lodha-bellagio': 4,
  'oberoi-garden': 3.2,
};

TOP_PERFORMING_PROJECTS.forEach((p) => {
  if (p.priceHikePct != null) PROJECT_PRICE_HIKE_BY_ID[p.id] = p.priceHikePct;
});

export function resolveProjectPriceHikePct(project) {
  if (project?.priceHikePct != null) return project.priceHikePct;
  return PROJECT_PRICE_HIKE_BY_ID[project?.id] ?? null;
}

export function resolveCompareProjectImg(item) {
  const spotlight = TOP_PERFORMING_PROJECTS.find((p) => p.id === item.id);
  if (spotlight?.img) return spotlight.img;
  if (COMPARE_PROJECT_IMAGES[item.id]) return COMPARE_PROJECT_IMAGES[item.id];
  const segment = String(item.segment || '').toLowerCase();
  if (segment.includes('plot')) {
    return 'https://images.unsplash.com/photo-1500382017468-9040fed747ef?auto=format&fit=crop&w=900&q=80';
  }
  return COMPARE_IMAGE_DEFAULT;
}

function top10ToCompareRecord(item) {
  return {
    id: item.id,
    name: item.name,
    city: item.city,
    segment: item.segment,
    unitType: item.segment,
    priceCompare: item.price,
    sizeSqft: 'On request',
    priceGrowthPct: item.priceGrowthPct,
    priceHikePct: resolveProjectPriceHikePct(item),
    rentalYieldPct: item.rentalYieldPct,
    possession: '—',
    paymentPlan: item.paymentPlan,
    href: item.href,
    img: resolveCompareProjectImg(item),
  };
}

/** Unified pool for compare matrix (top performers + top 10 discovery). */
export const COMPARE_PROJECT_POOL = (() => {
  const byId = new Map();
  TOP_PERFORMING_PROJECTS.forEach((p) => byId.set(p.id, p));
  TOP10_INVESTMENT_PROJECTS.forEach((p) => {
    if (!byId.has(p.id)) byId.set(p.id, top10ToCompareRecord(p));
  });
  return [...byId.values()];
})();

export const BUILD_INVESTMENT_META = {
  eyebrow: 'Match plan',
  title: 'What are you looking for?',
  lead: 'Four quick picks — see up to 12 matching projects.',
  submitLabel: 'Show matches',
  resultsTitle: 'Your matches',
};

export const BUILD_INVESTMENT_BUDGETS = [
  { id: '50L-1Cr', label: '₹50L' },
  { id: '1-3Cr', label: '₹1Cr' },
  { id: '3-5Cr', label: '₹3Cr' },
  { id: '5Cr+', label: '₹5Cr+' },
];

export const BUILD_INVESTMENT_GOALS = [
  { id: 'capital-growth', label: 'Capital Growth' },
  { id: 'rental-income', label: 'Rental Income' },
  { id: 'second-home', label: 'Second Home' },
  { id: 'long-term', label: 'Long-Term Investment' },
];

export const BUILD_INVESTMENT_LOCATIONS = [
  { id: 'gurgaon', label: 'Gurgaon' },
  { id: 'noida', label: 'Noida' },
  { id: 'bangalore', label: 'Bangalore' },
  { id: 'mumbai', label: 'Mumbai' },
  { id: 'dubai', label: 'Dubai' },
];

export const BUILD_INVESTMENT_PROPERTY_TYPES = [
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'plot', label: 'Plot' },
];

/** Matchable catalog — extend with live inventory IDs. */
export const BUILD_INVESTMENT_OPPORTUNITIES = [
  {
    id: 'bi-1',
    name: 'DLF Privana',
    city: 'Gurgaon',
    segment: 'Residential',
    price: '₹4.5 Cr onwards',
    growthPct: 11.2,
    budgetBands: ['3-5Cr', '5Cr+'],
    goals: ['capital-growth', 'long-term'],
    locations: ['gurgaon'],
    propertyTypes: ['residential'],
    rankBoost: 10,
    href: '/listing-detail?id=1',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-2',
    name: 'Eldeco Live by the Greens',
    city: 'Noida',
    segment: 'Residential',
    price: '₹2.8 Cr onwards',
    growthPct: 10.2,
    budgetBands: ['1-3Cr', '3-5Cr'],
    goals: ['capital-growth', 'second-home', 'long-term'],
    locations: ['noida'],
    propertyTypes: ['residential'],
    rankBoost: 9,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-3',
    name: 'Brigade Utopia',
    city: 'Bangalore',
    segment: 'Residential',
    price: '₹98 L onwards',
    growthPct: 9.4,
    budgetBands: ['50L-1Cr', '1-3Cr'],
    goals: ['rental-income', 'long-term'],
    locations: ['bangalore'],
    propertyTypes: ['residential'],
    rankBoost: 9,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-4',
    name: 'YEIDA Investment Plots',
    city: 'Noida',
    segment: 'Plot',
    price: '₹55 L onwards',
    growthPct: 14.6,
    budgetBands: ['50L-1Cr', '1-3Cr'],
    goals: ['capital-growth', 'long-term'],
    locations: ['noida'],
    propertyTypes: ['plot'],
    rankBoost: 8,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1500382017468-9040fed747ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-5',
    name: 'Noida Central Retail Hub',
    city: 'Noida',
    segment: 'Commercial',
    price: '₹85 L onwards',
    growthPct: 8.8,
    budgetBands: ['50L-1Cr', '1-3Cr'],
    goals: ['rental-income', 'long-term'],
    locations: ['noida'],
    propertyTypes: ['commercial'],
    rankBoost: 8,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-6',
    name: 'Lodha Belvedere',
    city: 'Mumbai',
    segment: 'Luxury Residential',
    price: '₹4.6 Cr onwards',
    growthPct: 8.5,
    budgetBands: ['3-5Cr', '5Cr+'],
    goals: ['second-home', 'capital-growth'],
    locations: ['mumbai'],
    propertyTypes: ['residential'],
    rankBoost: 8,
    href: '/listing-detail?id=1',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-7',
    name: 'Godrej Woods',
    city: 'Noida',
    segment: 'Residential',
    price: '₹1.4 Cr onwards',
    growthPct: 9.8,
    budgetBands: ['1-3Cr'],
    goals: ['rental-income', 'long-term'],
    locations: ['noida'],
    propertyTypes: ['residential'],
    rankBoost: 7,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-8',
    name: 'Prestige Lakeside Habitat',
    city: 'Bangalore',
    segment: 'Township',
    price: '₹2.5 Cr onwards',
    growthPct: 8.9,
    budgetBands: ['1-3Cr', '3-5Cr'],
    goals: ['second-home', 'long-term'],
    locations: ['bangalore'],
    propertyTypes: ['residential'],
    rankBoost: 7,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-9',
    name: 'Lodha Park',
    city: 'Mumbai',
    segment: 'Luxury',
    price: '₹8.5 Cr onwards',
    growthPct: 7.6,
    budgetBands: ['5Cr+'],
    goals: ['capital-growth', 'second-home'],
    locations: ['mumbai'],
    propertyTypes: ['residential'],
    rankBoost: 7,
    href: '/listing-detail?id=1',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-10',
    name: 'Marina Gate Residences',
    city: 'Dubai',
    segment: 'Luxury',
    price: 'AED 2.1M onwards',
    growthPct: 9.1,
    budgetBands: ['3-5Cr', '5Cr+'],
    goals: ['capital-growth', 'rental-income', 'long-term'],
    locations: ['dubai'],
    propertyTypes: ['residential'],
    rankBoost: 8,
    href: '/city?city=dubai',
    img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-11',
    name: 'Oberoi Sky City',
    city: 'Mumbai',
    segment: 'Residential',
    price: '₹2.8 Cr onwards',
    growthPct: 8.1,
    budgetBands: ['1-3Cr', '3-5Cr'],
    goals: ['second-home', 'long-term'],
    locations: ['mumbai'],
    propertyTypes: ['residential'],
    rankBoost: 6,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-12',
    name: 'Dwarka Expressway Plots',
    city: 'Gurgaon',
    segment: 'Plot',
    price: '₹70 L onwards',
    growthPct: 12.3,
    budgetBands: ['50L-1Cr', '1-3Cr'],
    goals: ['capital-growth', 'long-term'],
    locations: ['gurgaon'],
    propertyTypes: ['plot'],
    rankBoost: 7,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1500382017468-9040fed747ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-13',
    name: 'Bandra Kurla Commercial Suites',
    city: 'Mumbai',
    segment: 'Commercial',
    price: '₹3.2 Cr onwards',
    growthPct: 7.2,
    budgetBands: ['1-3Cr', '3-5Cr'],
    goals: ['rental-income'],
    locations: ['mumbai'],
    propertyTypes: ['commercial'],
    rankBoost: 6,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-14',
    name: 'Whitefield Skyline',
    city: 'Bangalore',
    segment: 'Residential',
    price: '₹1.1 Cr onwards',
    growthPct: 9.0,
    budgetBands: ['1-3Cr'],
    goals: ['rental-income', 'long-term'],
    locations: ['bangalore'],
    propertyTypes: ['residential'],
    rankBoost: 6,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-15',
    name: 'Lodha Bellagio',
    city: 'Pune',
    segment: 'Luxury',
    price: '₹1.6 Cr onwards',
    growthPct: 7.2,
    budgetBands: ['1-3Cr', '3-5Cr'],
    goals: ['capital-growth', 'second-home'],
    locations: ['pune'],
    propertyTypes: ['residential'],
    rankBoost: 7,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bi-16',
    name: 'Prestige City',
    city: 'Hyderabad',
    segment: 'Township',
    price: '₹85 L onwards',
    growthPct: 10.5,
    budgetBands: ['50L-1Cr', '1-3Cr'],
    goals: ['capital-growth', 'rental-income', 'long-term'],
    locations: ['hyderabad'],
    propertyTypes: ['residential'],
    rankBoost: 8,
    href: '/listings',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
];

export const EXPO_PROMO = {
  kicker: 'Exclusive NRI Event',
  title: 'Godrej Properties NRI Expo',
  copy: 'Meet leading developers, explore premium projects, and get expert investment guidance — in person or online.',
  date: 'Oct 18–20, 2026',
  time: '10:00 AM – 8:00 PM',
  place: 'Mumbai · Delhi NCR · Virtual',
  brand: 'Godrej Properties',
  img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80',
  href: '/events-expo',
};

export const WHY_INVEST_WITH_US = [
  {
    icon: 'fa-chart-line',
    title: 'Growth Potential',
    copy: 'Target capital appreciation and rental yield in corridors where demand outpaces supply.',
  },
  {
    icon: 'fa-location-dot',
    title: 'Prime Locations',
    copy: 'Metro hubs and emerging districts backed by transit, jobs, and infrastructure spend.',
  },
  {
    icon: 'fa-hard-hat',
    title: 'Trusted Developers',
    copy: 'RERA-registered builders with proven delivery and transparent milestone tracking.',
  },
  {
    icon: 'fa-magnifying-glass-chart',
    title: 'Curated Opportunities',
    copy: 'Shortlists aligned to your ticket size, hold period, and risk profile — not generic listings.',
  },
  {
    icon: 'fa-handshake-angle',
    title: 'Expert Guidance',
    copy: 'Investment advisors from site visits and due diligence through booking and handover.',
  },
];

/** Map coords are % of the hotspot stage (viewBox 0–100). */
export const INVESTMENT_HOTSPOTS = [
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    mapX: 26,
    mapY: 18,
    primary: 'Commercial + Luxury Residential',
    corridor: 'Emerging Investment Corridors',
    href: '/listings',
  },
  {
    id: 'noida',
    name: 'Noida',
    mapX: 32,
    mapY: 21,
    primary: 'Expressway & Township Plots',
    corridor: 'Emerging Investment Corridors',
    href: '/listings',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    mapX: 11,
    mapY: 47,
    primary: 'Premium High-Rise & Redevelopment',
    corridor: 'Established Yield Markets',
    href: '/city?city=mumbai',
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    mapX: 27,
    mapY: 73,
    primary: 'IT Corridor Apartments',
    corridor: 'Tech-Led Rental Demand',
    href: '/city?city=bangalore',
  },
  {
    id: 'pune',
    name: 'Pune',
    mapX: 17,
    mapY: 54,
    primary: 'Mid-Premium & Township Living',
    corridor: 'Hybrid Work Hub Growth',
    href: '/city?city=pune',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    mapX: 33,
    mapY: 59,
    primary: 'Grade-A Office & Gated Communities',
    corridor: 'Infrastructure-Led Upside',
    href: '/city?city=hyderabad',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    mapX: 84,
    mapY: 40,
    primary: 'Freehold Luxury & Waterfront',
    corridor: 'Global Investor Gateway',
    href: '/city?city=dubai',
    region: 'uae',
  },
];

export const PORTFOLIO_FILTERS = [
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'plotted', label: 'Plotted' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'dubai', label: 'Dubai' },
];

export const CURATED_PORTFOLIO = [
  {
    id: 'dlf-privana',
    name: 'DLF Privana',
    city: 'Gurgaon',
    segment: 'Residential',
    price: '₹4.5 Cr onwards',
    bhk: '3 & 4 BHK',
    tags: ['High Growth Area', 'Early Investment', 'Premium Development'],
    category: 'residential',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80',
    href: '/listing-detail?id=1',
  },
  {
    id: 'noida-retail',
    name: 'Noida Central Retail Hub',
    city: 'Noida',
    segment: 'Commercial',
    price: '₹85 L onwards',
    bhk: 'High-street retail',
    tags: ['Pre-Leased Anchors', 'High Footfall', 'Early Investment'],
    category: 'commercial',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    href: '/listings',
  },
  {
    id: 'yeida-plots',
    name: 'YEIDA Investment Plots',
    city: 'Noida',
    segment: 'Plotted',
    price: '₹55 L onwards',
    bhk: 'Residential plots',
    tags: ['High Growth Area', 'Airport Corridor', 'Early Investment'],
    category: 'plotted',
    img: 'https://images.unsplash.com/photo-1500382017468-9040fed747ef?auto=format&fit=crop&w=900&q=80',
    href: '/listings',
  },
  {
    id: 'lodha-belvedere',
    name: 'Lodha Belvedere',
    city: 'Mumbai',
    segment: 'Luxury',
    price: '₹4.6 Cr onwards',
    bhk: '3 & 4 BHK',
    tags: ['Premium Development', 'Sea-View Belt', 'Limited Inventory'],
    category: 'luxury',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    href: '/listing-detail?id=1',
  },
  {
    id: 'brigade-utopia',
    name: 'Brigade Utopia',
    city: 'Bangalore',
    segment: 'Residential',
    price: '₹98 L onwards',
    bhk: '2 & 3 BHK',
    tags: ['High Growth Area', 'IT Corridor', 'Premium Development'],
    category: 'residential',
    img: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80',
    href: '/listings',
  },
  {
    id: 'marina-gate',
    name: 'Marina Gate Residences',
    city: 'Dubai',
    segment: 'Luxury',
    price: 'AED 2.1M onwards',
    bhk: '1 & 2 Bed',
    tags: ['Waterfront', 'Freehold', 'Global Gateway'],
    category: 'dubai',
    img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80',
    href: '/city?city=dubai',
  },
];

export const TRUST_PILLARS = [
  {
    icon: 'fa-circle-check',
    title: 'Verified Properties',
    copy: 'RERA-registered projects with transparent documentation.',
  },
  {
    icon: 'fa-user-tie',
    title: 'Expert Guidance',
    copy: 'Dedicated advisors from shortlist to registration and handover.',
  },
  {
    icon: 'fa-earth-asia',
    title: 'Global Reach',
    copy: 'NRI support across time zones, currencies, and virtual site visits.',
  },
  {
    icon: 'fa-scale-balanced',
    title: 'Transparent Process',
    copy: 'Clear fees, milestone updates, and no hidden charges.',
  },
];

export const WHY_INVEST_INDIA = [
  {
    icon: 'fa-percent',
    title: 'Strong rental yields',
    copy: '3–7% gross yields in top IT and infrastructure corridors.',
  },
  {
    icon: 'fa-road',
    title: 'Infrastructure growth',
    copy: 'Metro, airports, and expressways driving re-rating across metros.',
  },
  {
    icon: 'fa-file-contract',
    title: 'RERA protection',
    copy: 'Registered projects with escrow-linked developer payouts.',
  },
  {
    icon: 'fa-coins',
    title: 'Portfolio diversification',
    copy: 'Blend residential, commercial, and land across Indian cities.',
  },
];

export const INSIGHT_LANDING = [
  {
    tag: 'Policy',
    title: 'Policy updates',
    copy: 'Repo rate stability keeps leveraged investor EMIs predictable this quarter.',
    icon: 'fa-landmark',
    tone: 'teal',
  },
  {
    tag: 'Market',
    title: 'Market trends',
    copy: 'Luxury and township sales lead volume in Bangalore and NCR.',
    icon: 'fa-chart-pie',
    tone: 'orange',
  },
  {
    tag: 'Investor',
    title: 'Investor insights',
    copy: 'NRIs increasing share of ₹ 1 Cr+ transactions in tier-1 corridors.',
    icon: 'fa-lightbulb',
    tone: 'purple',
  },
  {
    tag: 'Forecast',
    title: 'Price forecast',
    copy: 'Transit-linked micro-markets pricing in ahead of possession handovers.',
    icon: 'fa-arrow-trend-up',
    tone: 'blue',
  },
];

export const HOT_DEMAND = [
  {
    city: 'Noida Expressway',
    region: 'Delhi NCR',
    ticket: '₹ 55L – ₹ 1.4Cr',
    bhk: '2, 3 & 4 BHK',
    outlook: 'High demand',
    desc: 'Jewar airport and metro-linked end-user demand driving absorption.',
  },
  {
    city: 'Financial District',
    region: 'Hyderabad',
    ticket: '₹ 70L – ₹ 1.8Cr',
    bhk: '2 & 3 BHK',
    outlook: '7+ yield',
    desc: 'Grade-A offices and IT parks supporting rental depth.',
  },
  {
    city: 'Hinjewadi–Wakad',
    region: 'Pune',
    ticket: '₹ 60L – ₹ 1.5Cr',
    bhk: '2 & 3 BHK',
    outlook: 'High growth',
    desc: 'IT corridor expansion and township launches re-rating pockets.',
  },
  {
    city: 'Whitefield & Sarjapur',
    region: 'Bangalore',
    ticket: '₹ 80L – ₹ 2Cr',
    bhk: '2, 3 & 4 BHK',
    outlook: 'High demand',
    desc: 'Metro phases and premium villa demand in east Bangalore.',
  },
];

export const CITY_TILES = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    img: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    img: 'https://images.unsplash.com/photo-1596176530549-397ce0a68396?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    img: 'https://images.unsplash.com/photo-1587474260527-4a88b3a04820?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'noida',
    name: 'Noida',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pune',
    name: 'Pune',
    img: 'https://images.unsplash.com/photo-1591608971362-f08b2a41091d?auto=format&fit=crop&w=600&q=80',
  },
];

/** Split-trust section — figures match About page + home hero listings count. */
export const INVESTOR_TRUST_MEDIA = {
  poster:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  video: 'https://videos.pexels.com/video-files/3209676/3209676-hd_1920_1080_25fps.mp4',
  alt: 'Premium residential towers at dusk',
};

export const INVESTOR_TRUST_STATS = [
  { value: '2,500+', label: 'Investors Served' },
  { value: '850+', label: 'Projects Curated' },
  { value: '50+', label: 'Cities' },
  { value: '10+', label: 'Years Experience' },
];

export const INVESTOR_TRUST_VIDEOS = [
  {
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    quote: 'The ROI breakdown was clear. No guesswork — just data-backed recommendations.',
    meta: 'Ananya S. · Investor · Hyderabad',
    tag: 'Rental yield',
  },
  {
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    quote: 'Smart ROI advice across micro-markets before we committed capital.',
    meta: 'Ananya S. · Investor · Gurgaon',
    tag: 'Capital growth',
  },
  {
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    quote: 'Virtual tours and documentation support made investing from overseas simple.',
    meta: 'Rahul P. · NRI Investor · Bangalore',
    tag: 'NRI desk',
  },
];

export const INVESTMENT_JOURNEY = [
  {
    step: '01',
    title: 'Discover',
    copy: 'Explore corridors, projects, and pricing with a dedicated advisor.',
  },
  {
    step: '02',
    title: 'Shortlist',
    copy: 'Compare RERA-verified options aligned to budget and goals.',
  },
  {
    step: '03',
    title: 'Site / Virtual Tour',
    copy: 'Walk the asset in person or over a guided video tour.',
  },
  {
    step: '04',
    title: 'Due Diligence',
    copy: 'Validate titles, payment plans, and builder track record.',
  },
  {
    step: '05',
    title: 'Book',
    copy: 'Reserve with clear token terms and milestone visibility.',
  },
  {
    step: '06',
    title: 'Documentation',
    copy: 'Agreement, payments, and registration handled step by step.',
  },
  {
    step: '07',
    title: 'Post-Purchase Support',
    copy: 'Handover, rentals, and resale guidance after you own.',
  },
];
