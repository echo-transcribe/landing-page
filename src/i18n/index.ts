import { site } from '../config/site';
import { en, type Dict } from './en';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { ptBr } from './pt-br';
import { sl } from './sl';
import { defaultLocale, enabledLocales, localeInfo, locales, type Locale, type LocaleInfo } from './locales';

export { defaultLocale, enabledLocales, localeInfo, locales };
export type { Dict, Locale, LocaleInfo };

const dictionaries: Record<Locale, Dict> = { en, de, es, fr, it, 'pt-br': ptBr, sl };

export function useDict(locale: Locale): Dict {
  return dictionaries[locale] ?? en;
}

function matchLocale(value: string | undefined): LocaleInfo | undefined {
  if (!value) return undefined;
  const v = value.toLowerCase();
  return enabledLocales.find((l) => l.code === v || l.htmlLang.toLowerCase() === v || (l.path !== '' && l.path === v));
}

/** The first URL segment of a pathname if it is a non-default locale path, else undefined. */
function prefixOf(pathname: string): LocaleInfo | undefined {
  const segment = pathname.split('/')[1]?.toLowerCase();
  if (!segment) return undefined;
  return enabledLocales.find((l) => l.path !== '' && l.path === segment);
}

export function getLocale(astro: { currentLocale?: string; url: URL }): Locale {
  return (prefixOf(astro.url.pathname) ?? matchLocale(astro.currentLocale))?.code ?? defaultLocale;
}

/** `/privacy` -> `/de/privacy`, `/` -> `/de`, `/#faq` -> `/de#faq`. The default locale is unprefixed. */
export function localizePath(path: string, locale: Locale): string {
  const prefix = localeInfo(locale).path;
  if (!prefix || !path.startsWith('/')) return path;
  const [, rest = '', hash = ''] = path.match(/^\/([^#]*)(#.*)?$/) ?? [];
  return `/${prefix}${rest ? `/${rest}` : ''}${hash}`;
}

/** Removes the locale prefix from a pathname: `/de/privacy` -> `/privacy`, `/de` -> `/`. */
export function unlocalizePath(pathname: string): string {
  const info = prefixOf(pathname);
  if (!info) return pathname;
  return pathname.slice(info.path.length + 1) || '/';
}

/** hreflang entries for an unprefixed route: every enabled locale plus x-default (English). */
export function alternates(path: string): { hreflang: string; href: string }[] {
  const href = (locale: Locale) => new URL(localizePath(path, locale), site.url).href;
  return [
    ...enabledLocales.map((l) => ({ hreflang: l.htmlLang, href: href(l.code) })),
    { hreflang: 'x-default', href: href(defaultLocale) },
  ];
}

/** `€5`, `€1.67`: whole numbers without decimals. */
export function formatPrice(n: number, locale: Locale): string {
  const digits = Number.isInteger(n) ? 0 : 2;
  return new Intl.NumberFormat(localeInfo(locale).dateLocale, {
    style: 'currency',
    currency: site.prices.currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
}

export function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(localeInfo(locale).dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
