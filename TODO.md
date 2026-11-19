# To do (Andrej)

Things only you can do. Details are in the linked files. Tick items off and delete this file once it's empty.

## Google Play

- [ ] Paste the listing texts from `docs/play-listing/` into Play Console, one per language (see its README).
      Read `sl.md` yourself.
- [ ] Data safety form, privacy policy URL, target audience 16+: see `docs/legal-review.md` section 4.

## Launch

- [ ] Record the demo video (`docs/demo-video.md`), then set `site.demoVideo` in `src/config/site.ts`.
- [ ] Once there are Play ratings, copy them into `site.rating`.
- [ ] Vercel: connect the repo, set `ENABLE_EXPERIMENTAL_COREPACK=1`, add the domain (README, Launch checklist).
- [ ] `pnpm check:launch` passes on the final commit.
