# Google Play listing texts

One file per store language, copied by hand into Play Console → Grow → Store presence → Main store listing
(add each language under "Manage translations").

| File | Play Console language |
| --- | --- |
| `en.md` | English (United States) – en-US, the default |
| `de.md` | German – de-DE |
| `es.md` | Spanish (Spain) – es-ES; also usable for es-419, it avoids Spain-only forms |
| `fr.md` | French (France) – fr-FR |
| `it.md` | Italian – it-IT |
| `pt-br.md` | Portuguese (Brazil) – pt-BR |
| `sl.md` | Slovenian – sl |

Limits: title 30 characters, short description 80, full description 4000. `pnpm check:play` counts them.

Rules kept in every language (Play metadata policy): no emoji, prices, "free", "best" or rankings in the
title or short description, no testimonials. Prices are left out everywhere because Play shows them in the
buyer's currency.

The facts match the website (`src/i18n/*.ts` and `src/config/product.ts`). When the app changes (minimum Android,
RAM, model sizes, export formats), update `en.md` first and then the translations.
