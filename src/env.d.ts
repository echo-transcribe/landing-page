interface ImportMetaEnv {
  /** PostHog EU project key. Empty disables analytics (dev, tests). */
  readonly PUBLIC_POSTHOG_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
