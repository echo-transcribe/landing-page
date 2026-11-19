import { localeInfo, type Locale } from '../locales';

/** FAQPage structured data for a list of questions shown on the page. */
export function faqSchema(items: readonly { q: string; a: string }[], locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: localeInfo(locale).htmlLang,
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
