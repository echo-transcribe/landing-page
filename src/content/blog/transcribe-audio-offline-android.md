---
title: 'How to transcribe audio offline on Android'
description: 'Turn recordings into text on your Android phone without uploading them. What offline transcription needs, how long it takes and how to get good results.'
pubDate: 2026-11-19
tags: ['transcription', 'offline', 'android']
draft: false
---

Most transcription apps upload your audio to a server, turn it into text there and send the text back. That is quick, but your recording leaves your phone. If it holds a doctor's appointment, a job interview or a meeting about next year's budget, you may not want that.

Offline transcription does the same work on the phone itself. Nothing is uploaded, and it works in airplane mode.

## What makes offline transcription possible

Two things have changed in the last few years. Speech models such as OpenAI's open-source Whisper have become accurate in many languages, and phones have become fast enough to run them. A current mid-range phone can run a model that was server-only not long ago.

Many Android phones also have their own offline speech recognizer. On Android 13 and newer, it can write text while you speak, if your language is installed on the phone.

## What you need

- **An Android phone with enough memory.** Bigger models are more accurate but need more RAM. With 8 GB of RAM a phone can run Whisper Large V3 Turbo; with less, a smaller model such as Whisper Small. Our [supported phones page](/phones) lists what each phone gets.
- **Storage for the model.** It downloads once: from 60 MB for Whisper Base to 574 MB for Large V3 Turbo.
- **A little patience.** On a Samsung Galaxy S24, Whisper Large V3 Turbo takes about as long as the recording, sometimes longer. Whisper Small is about three times faster.

## Step by step with Echo

1. Install [Echo from Google Play](/download) and open it. It downloads the speech model that suits your phone.
2. Tap the mic and talk, or import a file you already have: MP3, M4A, AAC, WAV, FLAC, OGG, Opus, or the audio of an MP4 or WebM video.
3. When you stop, Echo transcribes the recording on the phone. If your phone's own recognizer has the language, the text is there right away.
4. Fix names if you need to, and tap a speaker to give them a name.

The free version transcribes the first 2 minutes of every note. The whole recording is always saved, and Pro transcribes the rest.

## How to get good results

- **Put the phone close to the person speaking.** One clear voice works better than a room full of people talking over each other.
- **Avoid background noise** where you can: a café or a running dishwasher makes any model worse.
- **Add names and special terms to the dictionary.** In Echo this is in Settings, Dictionary. Whisper then spells them the way you wrote them.
- **Pick the language if detection gets it wrong.** Echo detects it by itself, but you can fix it in Settings, or for a single note.

## Which languages work offline

Whisper knows 100 languages. Widely spoken ones such as English, Spanish or German work best, and languages with less training data make more mistakes. The [languages page](/languages) lists all of them.

## When offline is not the right choice

If you need a transcript of a three-hour recording in a few minutes, a cloud service on a powerful server will be faster. Offline transcription trades some speed for keeping your audio on your phone. For most notes, meetings and lectures, that trade is worth it.
