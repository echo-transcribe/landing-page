export type Locale = 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt-br' | 'sl';

export type LocaleInfo = {
  code: Locale;
  /** URL segment; empty for the default locale. */
  path: '' | 'de' | 'es' | 'fr' | 'it' | 'pt-br' | 'sl';
  /** Value for <html lang> and hreflang. */
  htmlLang: string;
  /** Value for og:locale. */
  ogLocale: string;
  /** BCP 47 tag for Intl date formatting. */
  dateLocale: string;
  nativeName: string;
  /** A locale can exist in code before its translation is finished. */
  enabled: boolean;
};

export const defaultLocale: Locale = 'en';

export const locales: LocaleInfo[] = [
  { code: 'en', path: '', htmlLang: 'en', ogLocale: 'en_US', dateLocale: 'en-GB', nativeName: 'English', enabled: true },
  { code: 'de', path: 'de', htmlLang: 'de', ogLocale: 'de_DE', dateLocale: 'de', nativeName: 'Deutsch', enabled: true },
  { code: 'es', path: 'es', htmlLang: 'es', ogLocale: 'es_ES', dateLocale: 'es', nativeName: 'Español', enabled: true },
  { code: 'fr', path: 'fr', htmlLang: 'fr', ogLocale: 'fr_FR', dateLocale: 'fr', nativeName: 'Français', enabled: true },
  { code: 'it', path: 'it', htmlLang: 'it', ogLocale: 'it_IT', dateLocale: 'it', nativeName: 'Italiano', enabled: true },
  { code: 'pt-br', path: 'pt-br', htmlLang: 'pt-BR', ogLocale: 'pt_BR', dateLocale: 'pt-BR', nativeName: 'Português (Brasil)', enabled: true },
  { code: 'sl', path: 'sl', htmlLang: 'sl', ogLocale: 'sl_SI', dateLocale: 'sl', nativeName: 'Slovenščina', enabled: true },
];

export const enabledLocales = locales.filter((l) => l.enabled);

export function localeInfo(code: Locale): LocaleInfo {
  return locales.find((l) => l.code === code) ?? locales[0];
}
