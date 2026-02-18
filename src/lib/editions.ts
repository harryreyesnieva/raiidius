import { siteConfig, getEdition } from "../content/siteConfig";

export function getEditionYears(): number[] {
  return siteConfig.editions.map((e) => e.year);
}

export function resolveEdition(yearParam: string | undefined) {
  const year = Number(yearParam);
  const edition = Number.isFinite(year) ? getEdition(year) : undefined;
  return { year, edition };
}

export function isEditionComingSoon(year: number): boolean {
  const e = getEdition(year);
  return !!e?.isComingSoon;
}
