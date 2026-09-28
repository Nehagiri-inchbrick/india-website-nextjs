export const INV_BUILD_INVESTMENT_KEY = 'inchbrick-inv-build-investment';
export const INV_BUILD_INVESTMENT_EVENT = 'inchbrick-inv-build-investment';

export function scoreOpportunity(item, filters) {
  let score = 0;
  if (filters.budget && item.budgetBands.includes(filters.budget)) score += 3;
  if (filters.goal && item.goals.includes(filters.goal)) score += 3;
  if (filters.property && item.propertyTypes.includes(filters.property)) score += 3;
  if (filters.locations?.length) {
    const locHit = filters.locations.some((loc) => item.locations.includes(loc));
    if (locHit) score += 4;
  }
  return score + (item.rankBoost ?? 0) * 0.1;
}

export function matchBuildInvestmentOpportunities(catalog, filters, limit = 12) {
  const ranked = catalog
    .map((item) => ({ item, score: scoreOpportunity(item, filters) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || (b.item.rankBoost ?? 0) - (a.item.rankBoost ?? 0));

  const list = ranked.map((e) => e.item);
  if (list.length >= limit) return list.slice(0, limit);

  const filler = catalog
    .filter((item) => !list.includes(item))
    .sort((a, b) => (b.rankBoost ?? 0) - (a.rankBoost ?? 0));
  return [...list, ...filler].slice(0, limit);
}
