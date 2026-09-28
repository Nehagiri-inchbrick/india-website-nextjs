/** Page structure — single source for chapter grouping and in-page nav. */

export const INVESTOR_PAGE_CHAPTERS = [
  {
    id: 'markets',
    index: '01',
    title: 'Read the market',
    summary: 'Compare cities, drill into corridors, track growth in one pass.',
  },
  {
    id: 'projects',
    index: '02',
    title: 'Pick & compare projects',
    summary: 'See what is selling fast, explore the top 10, then compare side by side.',
  },
  {
    id: 'discover',
    index: '03',
    title: 'Plan your move',
    summary: 'Match opportunities, model payment plans, preview ROI — with upfront pricing.',
  },
  {
    id: 'partner',
    index: '04',
    title: 'Work with Inchbrick',
    summary: 'From first conversation to keys in hand.',
  },
];

export const INVESTOR_PAGE_NAV = [
  { id: 'city-compare', label: 'Compare cities', chapter: 'markets' },
  { id: 'transparent-pricing', label: 'Clear pricing', chapter: 'markets' },
  { id: 'popular-areas', label: 'Corridors', chapter: 'markets' },
  { id: 'market-growth', label: 'Growth', chapter: 'markets' },
  { id: 'top-projects', label: 'Projects', chapter: 'projects' },
  { id: 'compare-projects', label: 'Compare', chapter: 'projects' },
  { id: 'build-investment', label: 'Match plan', chapter: 'discover' },
  { id: 'payment-plan', label: 'Payments', chapter: 'discover' },
  { id: 'growth-visualizer', label: 'ROI', chapter: 'discover' },
  { id: 'investment-journey', label: 'Journey', chapter: 'partner' },
  { id: 'invest-cta', label: 'Get started', chapter: 'partner' },
];
