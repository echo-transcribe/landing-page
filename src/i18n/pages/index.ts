import type { Locale } from '../locales';
import { enPages, type PagesDict, type RelatedId } from './en';
import { dePages } from './de';
import { esPages } from './es';
import { frPages } from './fr';
import { itPages } from './it';
import { ptBrPages } from './pt-br';
import { slPages } from './sl';

export type { PagesDict };

// Locales whose page texts exist. A locale missing here gets no routes for these pages,
// and links to them from that locale point at the English page.
const pages: Partial<Record<Locale, PagesDict>> = {
  en: enPages,
  de: dePages,
  es: esPages,
  fr: frPages,
  it: itPages,
  'pt-br': ptBrPages,
  sl: slPages,
};

export const pagesLocales = Object.keys(pages) as Locale[];

/** The unprefixed routes that use these texts. */
export const pageRoutes = [
  '/help',
  '/use-cases/meetings',
  '/use-cases/lectures',
  '/use-cases/interviews',
  '/features/voice-to-tasks',
  '/compare/loronote',
  '/languages',
  '/phones',
] as const;

export type UseCaseId = keyof PagesDict['useCases'];
export const useCaseIds = Object.keys(enPages.useCases) as UseCaseId[];

/** Where each related-page id points. */
export const relatedRoutes: Record<RelatedId, string> = {
  meetings: '/use-cases/meetings',
  lectures: '/use-cases/lectures',
  interviews: '/use-cases/interviews',
  voiceToTasks: '/features/voice-to-tasks',
};

export function usePages(locale: Locale): PagesDict {
  return pages[locale] ?? enPages;
}
