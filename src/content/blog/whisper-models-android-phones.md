---
title: 'Which Whisper model can your Android phone run?'
description: 'Whisper Base, Small, Medium or Large V3 Turbo: how much RAM and storage each needs on Android, how fast they are, and which one Echo picks for your phone.'
pubDate: 2026-11-19
tags: ['whisper', 'android', 'models']
draft: true
---

Whisper is a speech recognition model from OpenAI, released as open source. It comes in several sizes. Bigger ones make fewer mistakes, but they need more memory and take longer. On a phone, the right size depends mostly on how much RAM it has.

## The sizes, side by side

These are the Whisper models Echo uses, with their download sizes:

| Model | Download | Best for |
| --- | --- | --- |
| Whisper Base | 60 MB | Older phones and quick drafts |
| Whisper Small | 190 MB | Most phones under 8 GB of RAM |
| Whisper Medium | 539 MB | Phones with 8 GB that want a middle ground |
| Whisper Large V3 Turbo | 574 MB | Phones with 8 GB of RAM or more |

Large V3 Turbo is a faster version of Whisper's largest model. It is the most accurate of the four, and the only one that knows Cantonese.

## How much RAM you need

Echo picks a model by the phone's memory:

- **Under 8 GB:** Whisper Small, or Base if you prefer speed.
- **8 GB or more:** Whisper Large V3 Turbo, or Medium, Small or Base.

Phones report a little less memory than the box says, so an 8 GB phone counts as 8 GB. You can change the model in Settings, Speech model. Only the model in use stays on the phone: switching downloads the new one and removes the old.

Summaries and tasks use a separate model, Qwen3 1.7B, and need about 4 GB of RAM and a download of about 1 GB.

## How fast they are

On a Samsung Galaxy S24, Whisper Large V3 Turbo needs 33 to 50 seconds for every 30 seconds of audio. A one-hour meeting can take an hour or more to transcribe. Whisper Small needs about 11 seconds for the same 30 seconds, about three times faster.

Phones also slow down when they get warm. A phone lying on a wireless charger will transcribe more slowly than one on the table.

## Is the bigger model worth it?

For one clear voice in a common language, Whisper Small is often good enough. The larger model pays off with accents, with names and technical terms, with several people talking, and with languages that have less training data.

A practical approach: start with the model Echo picks. If you often fix the same kinds of mistakes, try a larger one, or add the words you need to the dictionary.

## And the phone's own recognizer?

On Android 13 and newer, many phones have an offline speech recognizer built in. It is not Whisper, but it is fast: it writes text while you record and gives you a transcript the moment you stop. Echo uses it when it has your language, and Whisper for imports or when you ask for it.

See the [supported phones page](/phones) for the full details.
