# Legal self-review: privacy policy, terms, legal notice

Self-review done on 2026-11-19 with Claude. It is not legal advice. Pages reviewed: `/privacy`, `/terms` and
`/legal-notice` on echoscribe.net (sources in `src/pages/`, values in `src/config/site.ts`).

Publisher: Andrej Koman, private individual, Maribor, Slovenia. An s.p. is planned if Echo gets traction.

## 1. Privacy policy against GDPR Art. 13

| Requirement                                  | Status | Where / note                                                                 |
| -------------------------------------------- | ------ | ---------------------------------------------------------------------------- |
| Controller identity and contact (13(1)(a))   | OK     | Section 1                                                                    |
| DPO contact (13(1)(b))                        | N/A    | No DPO required: no large-scale or special-category processing               |
| Purposes and legal basis (13(1)(c))           | Fixed  | Hosting basis (Art. 6(1)(f)) was missing; email basis was "(b) or (f)"         |
| Legitimate interests named (13(1)(d))         | OK     | Hosting security, site usage counts, answering email                         |
| Recipients (13(1)(e))                         | OK     | Section 6 table                                                              |
| Transfers outside the EU (13(1)(f))           | Fixed  | Added Switzerland adequacy for Proton; DPF or SCCs for the US providers        |
| Storage periods (13(2)(a))                    | Fixed  | New section 5. Only email had one before                                     |
| Data subject rights (13(2)(b))                | OK     | Section 7                                                                    |
| Right to withdraw consent (13(2)(c))          | N/A    | Nothing relies on consent                                                    |
| Right to complain (13(2)(d))                  | OK     | Information Commissioner of Slovenia, or own country                         |
| Whether data is required (13(2)(e))           | Fixed  | Added to section 5                                                           |
| Automated decisions and profiling (13(2)(f))  | Fixed  | Added "none" to section 5                                                    |
| Accuracy against the app code                 | Fixed  | Internet use also covers checking Pro status; on-device recognizer mentioned |

ePrivacy (cookies): the site sets no cookies. The only storage is the theme choice in localStorage, which the visitor
asked for, so it counts as strictly necessary. No banner needed. Automated test: `tests/privacy.spec.ts`.

## 2. Terms against EU and Slovenian consumer law

| Requirement                                                   | Status | Note                                                                                        |
| ------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| Trader identity and contact (Consumer Rights Directive, ZVPot-1) | OK  | Section 1 and legal notice                                                                  |
| Main features and price                                       | OK     | Section 3; prices shown on the site and in Google Play                                      |
| Right of withdrawal for digital content (CRD Art. 16(m))       | Fixed  | Old text said buying Pro alone ends the right. Now: it ends only with consent at checkout   |
| Mandatory consumer law kept                                   | OK     | Sections 1 and 8                                                                            |
| Statutory conformity for digital content (Directive 2019/770)  | Open   | Not mentioned and not excluded. See question 2                                              |
| Out-of-court dispute resolution statement (ZIsRPS)             | OK     | Legal notice: not obliged, does not take part. The EU ODR platform closed in July 2025      |
| Information-society provider details (ZEPT)                    | OK     | Legal notice: name, address, email. Register and VAT lines appear once an s.p. exists         |

## 3. Questions for a lawyer

1. **Selling Pro as a private individual.** Is occasional Google Play income allowed without an s.p., and how is it
   taxed? When does registering become required?
2. **Liability clause (terms section 6).** It follows a German model (unlimited for intent, gross negligence and
   personal injury, otherwise limited to essential obligations and foreseeable damage). Does it hold under Slovenian
   law (OZ) for consumers? Should it mention conformity of digital content (Directive 2019/770)?
3. **"Lifetime" (terms section 3).** It is defined as "for as long as we offer Echo". Is that fair under the
   unfair-terms rules? Pro status is checked through RevenueCat, so what happens to lifetime buyers if the service
   ends?
4. **Withdrawal (terms section 3).** Is it right that Google Play's checkout collects the consent that ends the
   withdrawal right for in-app purchases, and that the developer needs nothing more?
5. **Android's on-device speech recognizer (privacy section 2).** Echo can hand audio to the phone's built-in
   recognizer, a Google system service that runs offline. Is Echo a controller for that, and does the policy need to
   say more than it does?
6. **Acceptance.** The terms apply "by installing or using Echo". Should the app show them before first use?

## 4. Things to do yourself

- [ ] PostHog project: turn on cookieless server hash mode and **Discard client IP data**. Set data retention to
      match `site.legal.analyticsRetention` (12 months), or change that value.
- [ ] Sign the data processing agreements: Proton (account settings), RevenueCat, Vercel, PostHog (these three are
      in each provider's terms, but confirm they're accepted for your account).
- [ ] Check that RevenueCat's DPA data list matches privacy section 2 (anonymous ID, receipts, app version, store
      country, no advertising ID).
- [ ] Google Play Console → Data safety, to match the policy:
  - Collected: **Purchase history** (RevenueCat) and **Device or other IDs** (the random RevenueCat app user ID).
    Purpose: app functionality. Not shared (RevenueCat is a service provider). Encrypted in transit: yes.
  - Not collected: audio and text, because they are processed only on the device. Email isn't collected either,
    because feedback goes through the user's own email app.
  - Deletion: users can request it at support@echoscribe.net.
- [ ] Google Play Console: privacy policy URL `https://echoscribe.net/privacy`; target audience 16+, to match the
      policy.
- [ ] Echo app: `SettingsScreen.kt:85-86` still points to example.com. Use `https://echoscribe.net/privacy` and
      `support@echoscribe.net`.
- [ ] Echo app: show the open-source licence notices inside the app. MIT and Apache 2.0 require the notices to ship
      with the app, so a link to the website alone isn't enough.
- [ ] Confirm each licence on `/licenses` against the project's LICENSE file.
- [ ] When ready: set `site.legal.reviewed = true` in `src/config/site.ts`.
