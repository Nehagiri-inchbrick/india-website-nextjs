export const INV_HERO_PREF_KEY = 'inchbrick-inv-hero-prefs';
export const INV_HERO_PREFS_EVENT = 'inchbrick-inv-hero-prefs-change';

export const INV_HERO_CITIES = [
  { value: '', label: 'City' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'gurgaon', label: 'Gurgaon' },
  { value: 'noida', label: 'Noida' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'pune', label: 'Pune' },
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'dubai', label: 'Dubai' },
];

export const INV_HERO_BUDGETS = [
  { id: '50L-1Cr', label: '₹50L–₹1Cr' },
  { id: '1-3Cr', label: '₹1–3Cr' },
  { id: '3-5Cr', label: '₹3–5Cr' },
  { id: '5Cr+', label: '₹5Cr+' },
];

export const INV_HERO_PROPERTY_TYPES = [
  { value: '', label: 'Property Type' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'plotted', label: 'Plotted' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'dubai', label: 'Dubai' },
];

export const INV_HERO_HORIZONS = [
  { value: '', label: 'Investment Horizon' },
  { value: '3', label: '3 years' },
  { value: '5', label: '5 years' },
  { value: '7', label: '7 years' },
  { value: '10+', label: '10+ years' },
];

export function saveInvHeroPrefs(prefs) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(INV_HERO_PREF_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore quota / private mode */
  }
  window.dispatchEvent(new CustomEvent(INV_HERO_PREFS_EVENT, { detail: prefs }));
}

export function readInvHeroPrefs() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(INV_HERO_PREF_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

const BUILD_LOCATION_IDS = new Set(['mumbai', 'gurgaon', 'noida', 'bangalore', 'dubai', 'pune', 'hyderabad']);

const HERO_PROPERTY_TO_BUILD = {
  residential: 'residential',
  commercial: 'commercial',
  plotted: 'plot',
  luxury: 'residential',
  dubai: 'residential',
};

/** Maps hero finder selections into Build Your Investment filter shape. */
export function mapHeroPrefsToBuildFilters(prefs) {
  if (!prefs || typeof prefs !== 'object') return null;

  const next = {};

  if (prefs.budget) {
    next.budget = prefs.budget;
  }

  if (prefs.propertyType && HERO_PROPERTY_TO_BUILD[prefs.propertyType]) {
    next.property = HERO_PROPERTY_TO_BUILD[prefs.propertyType];
  }

  if (prefs.city && BUILD_LOCATION_IDS.has(prefs.city)) {
    next.locations = [prefs.city];
  }

  if (prefs.horizon) {
    const years = parseInt(String(prefs.horizon), 10);
    next.goal =
      prefs.horizon === '10+' || (Number.isFinite(years) && years >= 7)
        ? 'long-term'
        : 'capital-growth';
  }

  return Object.keys(next).length ? next : null;
}

export function cityMatchesPortfolio(cityValue, portfolioCity) {
  if (!cityValue) return true;
  const needle = cityValue.toLowerCase();
  const hay = portfolioCity.toLowerCase();
  if (needle === 'gurgaon' && hay.includes('gurgaon')) return true;
  return hay.includes(needle) || needle.includes(hay.replace(/\s+/g, ''));
}
