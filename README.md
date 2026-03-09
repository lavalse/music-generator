# Music Generator For Works

A browser-based generative ambient music system built with [Tone.js](https://tonejs.github.io/). No server required — everything runs in-browser.

## Features

- **16 style presets** spanning dark ambient, melodic, electronic, and classical-inspired aesthetics
- **Three synthesis modes**: piano (triangle wave), pad (AMSynth), keys (sawtooth)
- **Sequence mode**: presets with fixed melodic phrases that play in random order
- **Chord support**: preset-defined chord voicings triggered stochastically
- **Per-preset effects chain**: EQ → Low-pass → Delay → Reverb → Limiter
- **Recording**: export sessions as `.webm` (Opus codec)
- **Live preset switching**: change style mid-playback with automatic layer rebuild

## Presets

| Preset | Key / Mode | Character |
|---|---|---|
| Sakamoto — Late | D natural minor | Sparse piano, 10–25 s silences, dark reverb |
| Eno — Ambient | A pentatonic | AMSynth pad, 3–12 s, bright 22 s reverb |
| Budd — Plateaux | A major (high) | Extremely wet pad, 15–35 s silences |
| Deep Space | D1 sub-bass | Brown noise, 30–60 s silences, near-silence |
| Nocturne — B minor | B natural minor | Warm piano, moderate density |
| Minimal — E Lydian | E Lydian | Fast 1.5–5 s intervals, short reverb |
| Aurora — A Major | A major pentatonic | Warm ascending pad, 2–7 s |
| Morning — G Major | G major | Bright fast piano, 1.5–5 s, uplifting |
| Pulse — Electronic | D Dorian | Sawtooth keys, 0.8–3.5 s, driving |
| Spring — C Major | C major + chords | Cheerful piano triads, 1–3.5 s |
| Waltz — D Major | D major + chords | Romantic flowing piano, 2–6 s |
| Groove — A Mixolydian | A Mixolydian + chords | Electronic groove, 0.5–2.5 s |
| Float — Ab Major | Ab major + chords | Lush pad chords, 3–9 s |
| Gymnopedie — D Major | D major (sequence) | Fixed lyrical phrases, Satie-inspired |
| Arabesque — A Pentatonic | A pentatonic (sequence) | Flowing arpeggiated phrases |
| Moonlight — C# minor | C# minor (sequence) | Slow melodic phrases, deep resonance |

## Architecture

```
src/
  main.js          # UI wiring, play/stop/record, preset switching
  presets.js       # 16 preset definitions (pure data)
  effects.js       # Shared chain: EQ3 → LP Filter → Delay → Reverb → Limiter
  recorder.js      # Tone.Recorder → .webm export
  layers/
    drone.js       # Sustained oscillators + LFO pitch breathing
    melody.js      # Stochastic / chord / sequence note scheduling
    noise.js       # Filtered noise with auto-filter sweep
```

**Signal flow:**
```
Drone ─┐
Melody ─┼→ EQ3 → LP Filter → Delay → Reverb → Limiter → Output
Noise  ─┘                                          ↓
                                            Tone.Recorder → .webm
```

All layers connect to the EQ3 input. The full effects chain is rebuilt on each preset switch.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

Select a preset, click **Play**. Switch presets freely while playing. Use **Rec / Stop Rec** to export a `.webm` recording.

## Tech Stack

- [Vite 5](https://vitejs.dev/) — build tool
- [Tone.js v14](https://tonejs.github.io/) — Web Audio synthesis
- Vanilla JS, no framework
