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
    summary: 'Top products and investors’ picks — then compare projects side by side.',
  },
  {
    id: 'discover',
    index: '03',
    title: 'Plan your move',
    summary: 'Model payment plans and preview ROI — with upfront pricing.',
  },
  {
    id: 'partner',
    index: '04',
    title: 'Work with Inchbrick',
    summary: 'From first conversation to keys in hand.',
  },
];

export const INVESTOR_PAGE_NAV = [
  { id: 'top-products', label: 'Top products', chapter: 'projects' },
  { id: 'investors-pick', label: "Investors' pick", chapter: 'projects' },
  { id: 'transparent-pricing', label: 'Clear pricing', chapter: 'markets' },
  { id: 'popular-areas', label: 'Corridors', chapter: 'markets' },
  { id: 'market-growth', label: 'Growth', chapter: 'markets' },
  { id: 'compare-projects', label: 'Compare', chapter: 'projects' },
  { id: 'payment-plan', label: 'Payments', chapter: 'discover' },
  { id: 'growth-visualizer', label: 'ROI', chapter: 'discover' },
  { id: 'investment-journey', label: 'Journey', chapter: 'partner' },
  { id: 'invest-cta', label: 'Get started', chapter: 'partner' },
];
