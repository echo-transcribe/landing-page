import { product } from './product';

// Shared by the FAQ section and its FAQPage structured data, so the two never drift apart.
export const faqs: { q: string; a: string }[] = [
  {
    q: 'What happens after the free 2 minutes?',
    a: 'Your whole recording is saved, and the transcript stops at 2:00. Upgrade to Pro and Echo transcribes the rest of the same note.',
  },
  {
    q: 'Which phones does Echo run on?',
    a: `Android ${product.minAndroid} or newer. Summaries and tasks need about ${product.notesAiRamGb} GB of RAM. Phones with ${product.largeModelRamGb} GB or more get Whisper Large V3 Turbo, the most accurate model Echo offers; others get a smaller, faster one.`,
  },
  {
    q: 'How accurate is it?',
    a: 'It depends on the audio: one clear voice close to the phone works best, crosstalk and background noise make it harder. Accuracy is highest in widely spoken languages.',
  },
  {
    q: 'Which languages get summaries and tasks?',
    a: `Transcription works in ${product.transcriptionLanguages} languages, and summaries and tasks are made for every one of them. The standard Notes AI writes them in English; the optional multilingual model writes them in the language of the note.`,
  },
  {
    q: 'Is Echo GDPR compliant?',
    a: 'Your recordings and notes are processed and stored on your device, so we never hold them. The privacy policy lists the little data that is involved, such as Google Play purchases.',
  },
  {
    q: 'Which files can I import?',
    a: `Audio files such as ${product.importFormats}. Echo files each one under the day it was recorded, or today if you prefer.`,
  },
  {
    q: 'How do I move my notes to a new phone?',
    a: 'In Settings, choose Back up notes. Echo saves everything to one file you keep. Open it on the new phone to restore.',
  },
  { q: 'Is there an iPhone version?', a: 'Not yet. Echo is made for Android first.' },
];

