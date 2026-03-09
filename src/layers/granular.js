import * as Tone from 'tone';

// Layer 3: Synthetic "granular-like" texture using many short FM voices
// (No external sample required – pure synthesis)

function rand(min, max) {
  return min + Math.random() * (max - min);
}

const GRAIN_FREQS = [220, 275, 330, 440, 550, 660, 880];

export function createGranularLayer(output) {
  // A pool of quiet FM micro-voices fired at random intervals
  const voices = Array.from({ length: 4 }, () =>
    new Tone.FMSynth({
      oscillator: { type: 'sine' },
      envelope: { attack: rand(0.8, 2), decay: 0.5, sustain: 0.2, release: rand(2, 5) },
      modulation: { type: 'sine' },
      modulationIndex: rand(0.5, 2),
      harmonicity: rand(1, 3),
      volume: -34,
    })
  );

  voices.forEach(v => v.connect(output));

  let timers = [];
  let running = false;

  function triggerGrain(voiceIndex) {
    if (!running) return;
    const v = voices[voiceIndex];
    const freq = GRAIN_FREQS[Math.floor(Math.random() * GRAIN_FREQS.length)];
    const dur = rand(0.5, 2.5);
    v.triggerAttackRelease(freq, dur);

    const delay = rand(2000, 8000);
    timers[voiceIndex] = setTimeout(() => triggerGrain(voiceIndex), delay);
  }

  return {
    start() {
      running = true;
      voices.forEach((_, i) => {
        timers[i] = setTimeout(() => triggerGrain(i), rand(1000, 5000));
      });
    },
    stop() {
      running = false;
      timers.forEach(t => clearTimeout(t));
      voices.forEach(v => v.releaseAll());
    },
  };
}
