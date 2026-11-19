# To do (Andrej)

Things only you can do. Details are in the linked files. Tick items off and delete this file once it's empty.

## Content to check

- [ ] Read the Slovenian site: `src/i18n/sl.ts` and `src/i18n/pages/sl.ts`. Check "Skupaj 100 jezikov", "Beri naprej",
      the capitalised "Nastavitve" after a semicolon on `/sl/languages`, and the plural in `listTitle`.
- [ ] Compare the Settings names in the translations with the real app UI. The translators guessed these:
  - Slovenian: Slovar, Opomniki za opravila, Obnovi nakupe, Obnovi iz varnostne kopije
  - Spanish: Diccionario, Recordatorios de tareas, Restaurar compras
- [ ] German phone mock-ups use female forms ("Studentin", "zwei Sprecherinnen"). Keep or neutralise
      (`src/i18n/pages/de.ts`).
- [ ] Help page contact line promises "we answer in English or Slovenian" (`contactText` in `src/i18n/pages/*.ts`).
      Keep or remove.
- [ ] `/phones` says Large V3 Turbo takes "about as long as the recording or longer". It's honest; keep it?
- [ ] `/languages` says Cantonese needs Large V3 Turbo. That comes from the models, not from testing in the app. Test it.
- [ ] LoroNote comparison: the $24.99 lifetime price is a Black Friday sale ending 27 Nov 2026. Recheck the App Store
      listing after that and update `loronote.checked` in `src/i18n/pages/en.ts`. The other languages show the same
      date, but the prices are written into each language's text, so update those too.

## Blog

- [x] Read the 3 drafts in `src/content/blog/`. Set the real `pubDate`, then `draft: false`. The first published
      post turns on `/blog`, `/rss.xml` and the footer link (see `src/content/blog/_README.md`).

## Google Play

- [ ] Paste the listing texts from `docs/play-listing/` into Play Console, one per language (see its README).
      Read `sl.md` yourself.
- [ ] Data safety form, privacy policy URL, target audience 16+: see `docs/legal-review.md` section 4.

## Legal and services

- [ ] Lawyer questions: `docs/legal-review.md` section 3.
- [ ] PostHog: cookieless server hash mode, Discard client IP data, 12-month retention. Set `PUBLIC_POSTHOG_KEY` in
      Vercel.
- [ ] Data processing agreements (DPAs): Proton, RevenueCat, Vercel, PostHog. Check RevenueCat's data list
      (`docs/legal-review.md` section 4).
- [ ] Confirm each licence on `/licenses` against the project's own LICENSE file.

## Echo app repo

- [ ] `SettingsScreen.kt:85-86`: use `https://echoscribe.net/privacy` and `support@echoscribe.net`.
- [ ] Ship the open-source licence notices inside the app.
- [ ] `docs/implementation-notes.md` says 99 Whisper languages. whisper.cpp v1.9.5 has 100 (with Cantonese).

## Launch

- [ ] Record the demo video (`docs/demo-video.md`), then set `site.demoVideo` in `src/config/site.ts`.
- [ ] Once there are Play ratings, copy them into `site.rating`.
- [ ] Vercel: connect the repo, set `ENABLE_EXPERIMENTAL_COREPACK=1`, add the domain (README, Launch checklist).
- [ ] `pnpm check:launch` passes on the final commit.
