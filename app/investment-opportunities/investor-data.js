/** Fallback when an external image URL fails (404, etc.) */
export const PROJECT_CARD_IMG_FALLBACK =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';

export const HERO_FILTERS = [
  { href: '#launches', label: 'Residential', active: true },
  { href: '#top10', label: 'Top Properties' },
  { href: '#upcoming', label: 'Upcoming Projects' },
  { href: '#opportunities', label: 'Commercial' },
  { href: '#corridors', label: 'Land & Plots' },
  { href: '#insights', label: 'Investment Picks' },
  { href: '/events-expo', label: 'Global' },
];

export const JUMP_LINKS = HERO_FILTERS;

export const OPPORTUNITIES = [
  {
    icon: 'fa-house-chimney',
    title: 'Rental Income',
    copy: 'Steady cash flow from leased residential and commercial assets in high-demand corridors.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Capital Appreciation',
    copy: 'Buy early in infrastructure-led belts before completion and re-rating cycles.',
  },
  {
    icon: 'fa-layer-group',
    title: 'Diversification',
    copy: 'Blend metros, tier-2 townships, and asset types to balance yield and growth.',
  },
  {
    icon: 'fa-file-invoice-dollar',
    title: 'Tax Benefits',
    copy: 'Structure home loans and holding periods with advisors for efficient returns.',
  },
];

export const CORRIDORS = [
  {
    city: 'Noida Expressway',
    region: 'Delhi NCR',
    cagr: '8–12%',
    yield: '2.8–4.5%',
    ticket: '₹ 55L – ₹ 1.4Cr',
    outlook: 'High Growth',
    catalyst: 'Jewar airport and metro-linked end-user demand.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Financial District',
    region: 'Hyderabad',
    cagr: '9–13%',
    yield: '3.8–4.5%',
    ticket: '₹ 70L – ₹ 1.8Cr',
    outlook: '7+ Yield',
    catalyst: 'IT leasing with residential catch-up in Gachibowli.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Hinjewadi–Wakad',
    region: 'Pune',
    cagr: '6–9%',
    yield: '3.6–4.3%',
    ticket: '₹ 60L – ₹ 1.5Cr',
    outlook: 'High Growth',
    catalyst: 'IT expansion and expressway access.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Whitefield & Sarjapur',
    region: 'Bangalore',
    cagr: '7–10%',
    yield: '3.5–4.2%',
    ticket: '₹ 80L – ₹ 2Cr',
    outlook: 'High Growth',
    catalyst: 'Metro Phase 2 and tight premium supply.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Thane & Navi Mumbai',
    region: 'Mumbai peri',
    cagr: '5–7%',
    yield: '2.8–3.4%',
    ticket: '₹ 1.2Cr – ₹ 2.8Cr',
    outlook: 'Stable',
    catalyst: 'Transit upgrades offset high entry tickets.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'New Gurugram / Sohna',
    region: 'Gurugram',
    cagr: '6–9%',
    yield: '3.0–3.8%',
    ticket: '₹ 1.1Cr – ₹ 3.2Cr',
    outlook: 'Selective',
    catalyst: 'Township and golf-side launches.',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
];

export const INSIGHTS = [
  {
    tag: 'Policy',
    date: 'Aug 20, 2026',
    readTime: '2 min read',
    title: 'RBI holds repo rate — EMIs stay predictable for investors',
    copy: 'Leveraged buyers keep stable EMI math through the next quarter.',
    img: 'https://images.unsplash.com/photo-1611974789855-5c2a7adff901?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'NCR',
    date: 'Aug 18, 2026',
    readTime: '3 min read',
    title: '12 new RERA projects filed on the Noida Expressway belt',
    copy: 'Launch pipeline deepens along Jewar-linked micro-markets.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Luxury',
    date: 'Aug 12, 2026',
    readTime: '4 min read',
    title: 'Bangalore ultra-luxury crosses ₹ 1,000 Cr in H1 sales',
    copy: 'HNIs concentrate on Whitefield and Sarjapur 4 BHKs.',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Infra',
    date: 'Aug 8, 2026',
    readTime: '2 min read',
    title: 'Mumbai Metro Line 3 trials lift Andheri–BKC deal values',
    copy: 'Transit news is showing up in registered prices.',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80',
  },
];

export const UPCOMING = [
  {
    id: 'godrej-woods',
    name: 'Godrej Woods',
    loc: 'Noida, India',
    price: '₹ 1.4 Cr onwards',
    status: 'Pre Launch',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'oberoi-sky-city',
    name: 'Oberoi Sky City',
    loc: 'Mumbai, India',
    price: '₹ 2.8 Cr onwards',
    status: 'Next Quarter',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'brigade-utopia',
    name: 'Brigade Utopia',
    loc: 'Bangalore, India',
    price: '₹ 98 L onwards',
    status: 'Pre Launch',
    img: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'prestige-city-hyd',
    name: 'Prestige City',
    loc: 'Hyderabad, India',
    price: '₹ 85 L onwards',
    status: '2027 Pipeline',
    img: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'pune-west',
    name: 'Riverhills Phase II',
    loc: 'Pune, India',
    price: '₹ 1.1 Cr onwards',
    status: 'Coming Soon',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
  },
];

export const LAUNCHES = [
  {
    name: 'Lodha Belvedere',
    loc: 'Worli, Mumbai, India',
    price: '₹ 4.6 Cr onwards',
    tag: 'New Launch',
    type: 'Luxury Apartments',
    beds: '3 & 4 BHK',
    perk: 'Early bird · 8% below completion anchor',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Godrej Riverhills',
    loc: 'Mahalunge, Pune, India',
    price: '₹ 95 L onwards',
    tag: 'Luxury Living',
    type: 'Luxury Villas',
    perk: 'Wellness township · park-facing',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'DLF Privana',
    loc: 'Sector 76–77, Gurugram',
    price: '₹ 3.2 Cr onwards',
    type: 'Luxury Villas',
    beds: '3 & 4 BHK',
    perk: 'Golf-side · limited inventory',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Noida Central Retail Hub',
    loc: 'Sector 62, Noida, India',
    price: '₹ 85 L onwards',
    tag: 'Commercial',
    type: 'Commercial',
    beds: 'High-street retail',
    perk: 'Pre-leased anchor tenants',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
  },
];

export const TOP10 = [
  {
    rank: 1,
    name: 'DLF The Camellias',
    loc: 'Gurugram, India',
    price: '₹ 18 Cr Onwards',
    type: 'Luxury Villas',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
  },
  {
    rank: 2,
    name: 'Lodha Park',
    loc: 'Mumbai, India',
    price: '₹ 8.5 Cr Onwards',
    type: 'Luxury Apartments',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    rank: 3,
    name: 'Prestige Lakeside Habitat',
    loc: 'Bangalore, India',
    price: '₹ 2.5 Cr Onwards',
    type: 'Township',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    rank: 4,
    name: 'Godrej Woods',
    loc: 'Noida, India',
    price: '₹ 1.4 Cr Onwards',
    type: 'Apartments',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
  },
  {
    rank: 5,
    name: 'DLF Privana',
    loc: 'Gurugram, India',
    price: '₹ 3.2 Cr Onwards',
    type: 'Luxury Villas',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
  {
    rank: 6,
    name: 'Oberoi Sky City',
    loc: 'Mumbai, India',
    price: '₹ 2.8 Cr Onwards',
    type: 'Apartments',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    rank: 7,
    name: 'Lodha Bellagio',
    loc: 'Pune, India',
    price: '₹ 1.6 Cr Onwards',
    type: 'Luxury Living',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    rank: 8,
    name: 'Prestige City',
    loc: 'Hyderabad, India',
    price: '₹ 85 L Onwards',
    type: 'Township',
    img: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80',
  },
  {
    rank: 9,
    name: 'Brigade Utopia',
    loc: 'Bangalore, India',
    price: '₹ 98 L Onwards',
    type: 'Apartments',
    img: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    rank: 10,
    name: 'Oberoi Garden City',
    loc: 'Thane, India',
    price: '₹ 1.9 Cr Onwards',
    type: 'Integrated Township',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
];

export const HERO_BG =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80';
