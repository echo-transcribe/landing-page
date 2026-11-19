# Recording the demo video

One 15–20 second screen recording of the app in English, shown in the How it works section on every language's
home page. It stays hidden until `site.demoVideo` in `src/config/site.ts` is set.

## Before recording

- Phone in English, light theme, Do not disturb on, status bar clean (full battery or hidden, no notification icons).
- Use a short, made-up meeting with two voices, like the mock-up on the site: Maja and Alex agreeing to send the
  budget draft "tomorrow at ten" and to book the room for Thursday. No real names, numbers or private content.
- Models downloaded beforehand, so nothing waits on a download. Pro on, so no 2-minute card appears.

## The take (about 20 s)

1. Home screen, tap Record. Let the live text run for 3–4 s while the conversation plays from another device.
2. Stop. The note opens; the transcript fills in.
3. Scroll to the summary and the two tasks. Tap a task so it jumps to the line where it was said.

Use Android's built-in screen recorder (no audio needed: the site plays it muted). Trim dead time at the start and
end.

## Turning it into web files

Keep each file under about 3 MB. With ffmpeg:

```sh
# MP4 (H.264) for every browser: 720 px wide, 30 fps, no audio
ffmpeg -i raw.mp4 -vf "scale=720:-2,fps=30" -an -c:v libx264 -profile:v high -crf 26 -preset slow -movflags +faststart public/demo/echo-demo.mp4
# WebM (VP9), smaller, used where supported
ffmpeg -i raw.mp4 -vf "scale=720:-2,fps=30" -an -c:v libvpx-vp9 -crf 36 -b:v 0 public/demo/echo-demo.webm
# Poster: the frame with the summary and tasks visible (here at 15 s)
ffmpeg -ss 15 -i raw.mp4 -vf "scale=720:-2" -frames:v 1 -q:v 4 public/demo/echo-demo.jpg
# Size for site.ts
ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 public/demo/echo-demo.mp4
```

Then set, with the width and height from ffprobe:

```ts
demoVideo: { mp4: '/demo/echo-demo.mp4', webm: '/demo/echo-demo.webm', poster: '/demo/echo-demo.jpg', width: 720, height: 1560 },
```

Or send Claude the raw recording and ask it to do these steps.
