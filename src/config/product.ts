// Facts about the Echo app, checked against the echo repo on 2026-11-18.
// Update when the app changes: minSdk in app/build.gradle.kts, RAM tiers in
// WhisperModels.kt and LiteRtLlmRunner.kt, model list in ModelStore.kt.
export const product = {
  packageId: 'dev.andrej.echo',
  minAndroid: '10',
  /** Notes AI (summaries and tasks) needs about 4 GB of RAM (3.5 GB reported total). */
  notesAiRamGb: 4,
  /** Whisper Large V3 Turbo is the default from 7 GB reported total, i.e. 8 GB phones. */
  largeModelRamGb: 8,
  transcriptionLanguages: 'around 100',
  /** Any track Android's MediaExtractor can decode; these are the platform-guaranteed ones. */
  importFormats: 'MP3, M4A, AAC, WAV, FLAC, OGG and Opus, plus the audio of MP4 and WebM videos',
  appLanguages: ['English', 'German', 'Spanish', 'French', 'Italian', 'Portuguese (Brazil)', 'Slovenian'],
} as const;
