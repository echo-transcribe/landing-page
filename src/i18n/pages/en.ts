import { product } from '../../config/product';

/** Pages a page can point to under "Read next" (routes in ./index.ts). */
export type RelatedId = 'meetings' | 'lectures' | 'interviews';

// Text for the help, use-case, languages and phones pages.
// Facts checked against the echo repo on 2026-11-19 (implementation-notes.md, WhisperModels.kt,
// ModelStore.kt, NotesAiModel.kt, LiteRtLlmRunner.kt).
export const enPages = {
  common: {
    faqTitle: 'Questions',
    faqEyebrow: 'FAQ',
    relatedTitle: 'Read next',
    checkedOn: (date: string) => `Checked on ${date}`,
    sourcesTitle: 'Sources',
    tryFree: 'Try Echo free',
  },

  help: {
    title: 'Echo help center — answers about recording, transcripts and Pro',
    heading: 'Help center',
    description:
      'Answers about Echo: supported phones, recording and import, transcripts, summaries and tasks, Pro purchases, and where your data lives.',
    intro: 'Short answers about how Echo works. If yours is missing, write to us and we will add it.',
    groups: [
      {
        id: 'getting-started',
        title: 'Getting started',
        items: [
          {
            q: 'Which phones does Echo run on?',
            a: `Android ${product.minAndroid} or newer on a 64-bit ARM processor. Summaries and tasks need about ${product.notesAiRamGb} GB of RAM, and phones with ${product.largeModelRamGb} GB or more get Whisper Large V3 Turbo. The supported phones page has the details.`,
          },
          {
            q: 'What does Echo download, and how much space does it need?',
            a: 'The speech model downloads once: Whisper Large V3 Turbo is 574 MB, Whisper Small 190 MB. Speaker detection adds about 42 MB and the Notes AI for summaries and tasks about 1 GB. Recordings take about 14 MB per hour.',
          },
          {
            q: 'Do I need an internet connection?',
            a: 'Only to download the models, to buy Pro and to check whether you have Pro. Recording, transcription, summaries and tasks all run on the phone, so airplane mode is fine afterwards.',
          },
          {
            q: 'Do I need an account?',
            a: 'No. There is no sign-up. Pro is bought and managed through your Google Play account.',
          },
        ],
      },
      {
        id: 'recording',
        title: 'Recording and import',
        items: [
          {
            q: 'Does recording continue if I leave the app or turn off the screen?',
            a: 'Yes. Echo records in the background with a notification you can pause or stop from. A phone call pauses the recording and it resumes when the call ends, unless you paused it yourself.',
          },
          {
            q: 'Which files can I import?',
            a: `Audio files such as ${product.importFormats}. Share a file to Echo or use the import button in Notes. You choose the title and whether the note belongs to the day it was recorded or to today.`,
          },
          {
            q: 'How do I set the language?',
            a: 'Echo detects the language by itself. To fix one, pick it in Settings. For an imported file or a single note you can choose a different language without changing Settings, and you can transcribe a note again in another language.',
          },
        ],
      },
      {
        id: 'transcripts',
        title: 'Transcripts',
        items: [
          {
            q: 'How accurate is it?',
            a: 'It depends on the audio: one clear voice close to the phone works best, crosstalk and background noise make it harder. Accuracy is highest in widely spoken languages. Add names and special terms in Settings, Dictionary, and Whisper will spell them the way you wrote them.',
          },
          {
            q: 'How long does a transcript take?',
            a: 'If your phone has its own offline recognizer for the language, the text is there as soon as you stop. Whisper runs after the recording: Large V3 Turbo can take as long as the recording or longer, even on a recent flagship, and Whisper Small is about three times faster.',
          },
          {
            q: 'Why do I see text while I record, but not always?',
            a: `Live text comes from your phone's own offline recognizer. It needs Android 13 or newer and the language installed on the phone, which Settings can download for you. Without it, the text appears after you stop.`,
          },
          {
            q: 'Can I fix who said what?',
            a: 'Yes. Tap a speaker to name them or move their lines to another speaker, or select a few lines and assign just those. Names you used before are suggested.',
          },
          {
            q: 'Can I search my notes?',
            a: 'Search looks through every transcript, title and summary. It ignores case and accents, so "cesnik" finds "česnik".',
          },
        ],
      },
      {
        id: 'summaries-tasks',
        title: 'Summaries and tasks',
        items: [
          {
            q: 'Why are there no summaries or tasks on my phone?',
            a: `They need about ${product.notesAiRamGb} GB of RAM and the Notes AI download of about 1 GB. On phones with less memory Echo still transcribes, with speakers.`,
          },
          {
            q: 'Which language are summaries and tasks written in?',
            a: 'The standard Notes AI writes them in English for notes in other languages, and keeps the quoted words in your language. The optional multilingual model, Gemma 4 E2B (2.6 GB), writes them in the language of the note.',
          },
          {
            q: 'My reminder came late. Why?',
            a: `Android delivers reminders on time only when Echo may set exact alarms. Settings, Task reminders, opens the system settings for that and for notifications. Without the permission Android can delay reminders.`,
          },
          {
            q: 'Echo missed a task, or made one up. What can I do?',
            a: 'Summaries and tasks come from a small AI model on your phone, and it can be wrong. Add, edit or delete tasks yourself. Every task links to the line it came from, so checking one takes a tap.',
          },
        ],
      },
      {
        id: 'pro',
        title: 'Pro and purchases',
        items: [
          {
            q: 'What happens after the free 2 minutes?',
            a: 'Your whole recording is saved, and the transcript stops at 2:00. Upgrade to Pro and Echo transcribes the rest of the same note.',
          },
          {
            q: 'What does Pro add?',
            a: 'No time limit on recordings and imports, summaries and tasks from the whole recording, and export as Markdown, SRT subtitles and the original audio. Plain text export is free.',
          },
          {
            q: 'I changed phones. How do I get Pro back?',
            a: 'Sign in to Google Play with the same account, open Echo, and choose Restore purchases in Settings.',
          },
          {
            q: 'How do I cancel or get a refund?',
            a: "Subscriptions are managed in Google Play, under Payments and subscriptions. Refunds follow Google Play's refund policy.",
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Privacy and your data',
        items: [
          {
            q: 'Where are my recordings stored?',
            a: "Only on your phone. We don't run servers for your notes, so we never receive your audio, transcripts, summaries or tasks.",
          },
          {
            q: 'How do I move my notes to a new phone?',
            a: 'In Settings, choose Back up notes. Echo saves everything to one file you keep. On the new phone, choose Restore from backup.',
          },
          {
            q: 'How do I delete everything?',
            a: "Settings has Delete all data. Uninstalling Echo also removes its notes from the phone, so make a backup first if you want to keep them.",
          },
        ],
      },
    ],
    contactTitle: 'Still stuck?',
    contactText: (email: string) => `Write to ${email}. Tell us your phone model and what you tried; we answer in English or Slovenian.`,
  },

  useCases: {
    meetings: {
      title: 'Offline meeting transcription for Android — Echo',
      description:
        'Record a meeting on your Android phone and get the transcript, speakers, a summary and tasks with reminders. Everything runs on the phone, with no bot and no upload.',
      eyebrow: 'Meetings',
      heading: 'Meeting notes that write themselves, on your phone',
      lead: 'Put the phone on the table and talk. Echo keeps the transcript, who said what, a short summary and the tasks you agreed on.',
      problemTitle: 'Typing minutes means missing the meeting',
      problem:
        'Either you listen or you write. Cloud note takers solve that by joining your call and uploading everything to their servers, which many teams and clients are not happy with. Echo does the work on the phone in your pocket, so the conversation never leaves the room.',
      phone: {
        label: 'Echo showing a meeting note with a summary, two tasks and the transcript',
        title: 'Project kickoff',
        meta: 'Today, 9:42 AM · 18 min',
        tag: 'Work',
        summaryLabel: 'Summary',
        summaryText: 'The team agreed on the launch scope and split the budget work. Alex reviews the draft before Friday.',
        tasksLabel: 'Tasks · 2',
        task1: 'Send the budget draft to Alex',
        task1Reminder: 'Tomorrow, 10:00 AM',
        task2: 'Book the room for Thursday',
        lines: [
          {
            name: 'Maja',
            time: '2:14 – 2:31',
            before: 'Okay, so ',
            mark: "tomorrow at ten I'll send the budget draft to Alex",
            after: ', and he can review it before Friday.',
          },
          {
            name: 'Alex',
            time: '2:32 – 2:40',
            before: 'Works for me. Someone should ',
            mark: 'book the room for Thursday',
            after: '.',
          },
        ],
      },
      featuresTitle: 'What you get after the meeting',
      features: [
        {
          title: 'Who said what',
          text: 'Speakers are labelled automatically. Name them once and the names carry through the note and your exports.',
        },
        {
          title: 'Tasks with owners and times',
          text: 'Echo lists what was agreed, links each task to the line it came from, and reminds you when a time was mentioned.',
        },
        {
          title: 'Minutes to share',
          text: 'Share the transcript as text for free, or as Markdown with the summary and tasks with Pro.',
        },
      ],
      faq: [
        {
          q: 'Can Echo join Zoom, Teams or Meet calls?',
          a: 'No. Echo records through the phone’s microphone. For a video call, put the phone next to your speaker, or import the call recording afterwards.',
        },
        {
          q: 'How long can a meeting be?',
          a: 'Recording has no time limit. The free version transcribes the first 2 minutes of each note; Pro transcribes the whole meeting.',
        },
        {
          q: 'Do I need to tell people I am recording?',
          a: 'Yes. Ask everyone before you record. Rules differ by country, and recording people without their consent is illegal in many of them.',
        },
      ],
      related: ['lectures', 'interviews'] as RelatedId[],
    },
    lectures: {
      title: 'Transcribe lectures offline on Android — Echo',
      description:
        'Record a lecture and search every word later. Echo transcribes on your Android phone, with summaries and to-dos for readings and deadlines, and no internet needed.',
      eyebrow: 'Lectures',
      heading: 'Listen in class. Search the whole lecture later.',
      lead: 'Record the lecture, then find the exact minute the professor explained it. Echo transcribes on your phone, even with no Wi-Fi in the hall.',
      problemTitle: 'Notes catch half of what was said',
      problem:
        'While you write down one point, the next one is gone. A recording alone does not help much either: nobody scrubs through 90 minutes of audio to find one definition. A transcript you can search fixes both.',
      phone: {
        label: 'Echo showing a lecture note with a summary, a reading task and the transcript',
        title: 'Microeconomics, week 6',
        meta: 'Tue, 10:15 AM · 84 min',
        tag: 'University',
        summaryLabel: 'Summary',
        summaryText: 'Price elasticity of demand and how to calculate it, with the taxi fare example. Exam questions follow the problem set.',
        tasksLabel: 'Tasks · 2',
        task1: 'Read chapter 5 before the seminar',
        task1Reminder: 'Monday, 9:00 AM',
        task2: 'Hand in problem set 3',
        lines: [
          {
            name: 'Lecturer',
            time: '41:02 – 41:20',
            before: 'So elasticity is the percentage change in quantity over the percentage change in price. ',
            mark: 'Read chapter five before Monday',
            after: ', we start the seminar with it.',
          },
          {
            name: 'Student',
            time: '41:21 – 41:27',
            before: 'Is that ',
            mark: 'on the problem set',
            after: ' too?',
          },
        ],
      },
      featuresTitle: 'Made for long recordings',
      features: [
        {
          title: 'Search every word',
          text: 'Search looks through all your transcripts at once and ignores case and accents. Tap a line to hear it.',
        },
        {
          title: 'Readings and deadlines as tasks',
          text: 'When the lecturer says “read chapter five before Monday”, Echo makes it a task with a reminder.',
        },
        {
          title: 'Spells the terms right',
          text: 'Add course names and terms to the Dictionary in Settings, and Whisper writes them the way you do.',
        },
      ],
      faq: [
        {
          q: 'Can I record a 90-minute lecture?',
          a: 'Yes. Recording has no time limit and keeps going with the screen off. A 90-minute lecture takes about 21 MB of storage. The free version transcribes the first 2 minutes of each note; Pro transcribes the whole lecture.',
        },
        {
          q: 'Will it work in a big lecture hall?',
          a: 'It works best close to the speaker. From the back of a large hall with a quiet microphone, expect more mistakes; sit nearer or put the phone on the front desk.',
        },
        {
          q: 'Which languages can lectures be in?',
          a: `Whisper transcribes ${product.transcriptionLanguages} languages and detects the language by itself. The languages page lists them.`,
        },
      ],
      related: ['meetings', 'interviews'] as RelatedId[],
    },
    interviews: {
      title: 'Private interview transcription app for Android — Echo',
      description:
        'Transcribe interviews on your Android phone with labelled speakers, ready to quote. Nothing is uploaded, so sensitive conversations stay with you.',
      eyebrow: 'Interviews',
      heading: 'Interview transcripts with speakers, and nothing uploaded',
      lead: 'Record or import the interview and get a transcript split by speaker, ready to quote. The audio and the text stay on your phone.',
      problemTitle: 'Sensitive talks do not belong on someone else’s server',
      problem:
        'Sources, patients, research participants and job candidates speak to you, not to a transcription company. Most transcription services upload the audio to process it. Echo never sends it anywhere, so you can promise that and mean it.',
      phone: {
        label: 'Echo showing an interview note with two speakers, a summary and a follow-up task',
        title: 'Interview with the head nurse',
        meta: 'Mon, 2:30 PM · 47 min',
        tag: 'Research',
        summaryLabel: 'Summary',
        summaryText: 'Night shifts were cut from three nurses to two in March. She will share the rota if her name is not used.',
        tasksLabel: 'Tasks · 2',
        task1: 'Email Ana the quotes to check',
        task1Reminder: 'Friday, 9:00 AM',
        task2: 'Ask for the March rota',
        lines: [
          {
            name: 'Ana',
            time: '12:40 – 12:58',
            before: 'Since March we have been two on the night shift instead of three. ',
            mark: 'Send me the quotes by Friday',
            after: ' and I will check them.',
          },
          {
            name: 'You',
            time: '12:59 – 13:04',
            before: 'Of course. And ',
            mark: 'could I see the March rota',
            after: '?',
          },
        ],
      },
      featuresTitle: 'What makes it quotable',
      features: [
        {
          title: 'Speakers, named',
          text: 'Echo separates the voices. Name each speaker once, and fix any line that went to the wrong person.',
        },
        {
          title: 'Every line timed',
          text: 'Each line keeps its time in the recording. Tap it to hear the exact words before you quote them.',
        },
        {
          title: 'Stays with you',
          text: 'No account and no upload. Back up to a file you keep, and delete the note when the project ends.',
        },
      ],
      faq: [
        {
          q: 'Can I import an interview I recorded elsewhere?',
          a: `Yes. Echo imports ${product.importFormats}. Share the file to Echo or use the import button in Notes.`,
        },
        {
          q: 'How exact are the speaker labels?',
          a: 'Good for a clear two-person interview, less reliable with crosstalk or many voices. Lines near a change of speaker are the most likely to be wrong; you can move them with a tap.',
        },
        {
          q: 'Can I export the transcript?',
          a: 'Plain text export is free. With Pro, export as Markdown, as SRT subtitles with timings, or as the original audio.',
        },
      ],
      related: ['meetings', 'lectures'] as RelatedId[],
    },
  },


  languages: {
    title: 'Languages Echo can transcribe — offline speech to text in 100 languages',
    heading: 'Supported languages',
    description:
      'Echo transcribes 100 languages offline with Whisper, from English and German to Slovenian and Swahili. See which languages get live text, summaries and tasks.',
    intro:
      'Echo transcribes with Whisper, which knows 100 languages and detects which one you speak. How well it does varies: widely spoken languages work best, and languages with little training data make more mistakes.',
    sections: {
      transcription: {
        title: 'Transcription',
        text: 'Every language below can be transcribed offline, from recordings and from imported files. Cantonese needs Whisper Large V3 Turbo, which Echo uses on phones with 8 GB of RAM or more.',
      },
      live: {
        title: 'Live text and instant transcripts',
        text: 'Text while you record, and a transcript the moment you stop, come from your phone’s own offline recognizer. Which languages it has depends on your phone; Settings shows whether yours is installed and can download it. Other languages are transcribed by Whisper after you stop.',
      },
      notes: {
        title: 'Summaries and tasks',
        text: 'Made for every language in the list. The standard Notes AI writes them in English for notes in other languages, and keeps quotes in the original. The optional multilingual model writes them in the language of the note.',
      },
      app: {
        title: 'The app itself',
        text: (list: string) => `Echo’s menus and settings are available in ${list}.`,
      },
    },
    listTitle: (count: number) => `All ${count} languages`,
  },

  phones: {
    title: 'Echo requirements — supported Android phones and models',
    heading: 'Supported phones',
    description: `Echo runs on Android ${product.minAndroid} or newer. See which speech model your phone gets, how much RAM summaries and tasks need, and how much storage the models take.`,
    intro: `Echo needs Android ${product.minAndroid} or newer and a 64-bit ARM processor, which almost every Android phone sold in recent years has. Your phone’s memory decides which features and models you get.`,
    tiersTitle: 'What your phone gets',
    tiersHead: { ram: 'Phone RAM', speech: 'Speech model', notes: 'Summaries and tasks' },
    tiers: [
      { ram: 'Under 4 GB', speech: 'Whisper Small, or Base', notes: 'Not available' },
      { ram: '4 to 6 GB', speech: 'Whisper Small, or Base', notes: 'Yes' },
      { ram: '8 GB or more', speech: 'Whisper Large V3 Turbo, or Medium, Small or Base', notes: 'Yes' },
    ],
    tiersNote:
      'Echo picks the first model listed; you can change it in Settings, Speech model. Phones report a little less memory than the box says, so an 8 GB phone counts as 8 GB.',
    recognizerTitle: 'Your phone’s own recognizer',
    recognizer:
      'On Android 13 and newer, many phones have an offline speech recognizer built in. When it has your language, Echo uses it for live text and an instant transcript, and Whisper for imports or when you ask for it. Phones without one use Whisper for everything.',
    storageTitle: 'Storage',
    storageHead: { item: 'Download', size: 'Size' },
    storage: [
      { item: 'Whisper Large V3 Turbo', size: '574 MB' },
      { item: 'Whisper Medium', size: '539 MB' },
      { item: 'Whisper Small', size: '190 MB' },
      { item: 'Whisper Base', size: '60 MB' },
      { item: 'Speaker detection', size: '42 MB' },
      { item: 'Notes AI (Qwen3 1.7B)', size: '977 MB' },
      { item: 'Multilingual Notes AI (Gemma 4 E2B), optional', size: '2.6 GB' },
      { item: 'Recordings', size: 'About 14 MB per hour' },
    ],
    storageNote: 'Only the Whisper model in use stays on the phone. Switching downloads the new one and removes the old.',
    speedTitle: 'Speed',
    speed:
      'On a Samsung Galaxy S24, Whisper Large V3 Turbo needs 33 to 50 seconds for every 30 seconds of audio, so a transcript takes about as long as the recording or longer. Whisper Small needs about 11 seconds. Phones slow down when they get warm, for example on a wireless charger.',
    testedTitle: 'Tested phones',
    tested: (email: string) =>
      `We test Echo on a Samsung Galaxy S24. If it does not run well on your phone, write to ${email} with the model name, and we will look into it.`,
  },
};

export type PagesDict = typeof enPages;
