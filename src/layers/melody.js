import * as Tone from 'tone';

function rand(min, max) {
  return min + Math.random() * (max - min);
}

// synthType: 'piano' | 'pad' | 'keys'
// (mode === 'sequence' uses synthType separately)
function makeSynth(synthType, vol, cfg) {
  if (synthType === 'pad') {
    return new Tone.PolySynth(Tone.AMSynth, {
      envelope: {
        attack:  cfg.attack  ?? 1.5,
        decay:   cfg.decay   ?? 3.0,
        sustain: cfg.sustain ?? 0.6,
        release: cfg.release ?? 5.0,
      },
      volume: vol,
    });
  }
  if (synthType === 'keys') {
    return new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sawtooth' },
      envelope: {
        attack:  cfg.attack  ?? 0.05,
        decay:   cfg.decay   ?? 0.9,
        sustain: cfg.sustain ?? 0.2,
        release: cfg.release ?? 1.8,
      },
      volume: vol,
    });
  }
  // default: piano (triangle)
  return new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: 'triangle' },
    envelope: {
      attack:  cfg.attack  ?? 0.02,
      decay:   cfg.decay   ?? 4.0,
      sustain: cfg.sustain ?? 0.0,
      release: cfg.release ?? 7.0,
    },
    volume: vol,
  });
}

export function createMelodyLayer(output, cfg = {}) {
  const mode      = cfg.mode      ?? 'piano';
  // sequence mode: synth sound is controlled by synthType separately
  const synthType = (mode === 'sequence') ? (cfg.synthType ?? 'piano') : mode;

  const freqs            = cfg.freqs            ?? [73.42,82.41,98.00,110.00,123.47,146.83,164.81,196.00,220.00,246.94,293.66,329.63,392.00,440.00,493.88,587.33];
  const chromatic        = cfg.chromatic        ?? [138.59, 155.56, 185.00, 207.65];
  const chromaticProb    = cfg.chromaticProb    ?? 0.15;
  const bassFreqs        = cfg.bassFreqs        ?? [73.42, 82.41, 98.00, 110.00, 123.47, 146.83];
  const bassProb         = cfg.bassProb         ?? 0.15;
  const chordSets        = cfg.chordSets        ?? [];
  const chordProb        = cfg.chordProb        ?? 0;
  const sequences        = cfg.sequences        ?? [];
  const silenceMin       = cfg.silenceMin       ?? 10000;
  const silenceMax       = cfg.silenceMax       ?? 25000;
  const burstMin         = cfg.burstMin         ?? 2;
  const burstMax         = cfg.burstMax         ?? 3;
  const noteSpacingMin   = cfg.noteSpacingMin   ?? 500;
  const noteSpacingMax   = cfg.noteSpacingMax   ?? 2000;
  const dualVoiceProb    = cfg.dualVoiceProb    ?? 0.4;
  const dualOffsetMin    = cfg.dualVoiceOffsetMin ?? 80;
  const dualOffsetMax    = cfg.dualVoiceOffsetMax ?? 350;
  const initDelayMin     = cfg.initialDelayMin  ?? 4000;
  const initDelayMax     = cfg.initialDelayMax  ?? 8000;
  const noteDuration     = cfg.noteDuration     ?? 0.03;
  const volA             = cfg.volA             ?? -18;
  const volB             = cfg.volB             ?? -22;

  const synthA = makeSynth(synthType, volA, cfg);
  const synthB = makeSynth(synthType, volB, cfg);
  synthA.connect(output);
  synthB.connect(output);

  let timerId = null;
  let running = false;

  // ── Stochastic mode helpers ───────────────────────────────────────────────

  function pickNote() {
    if (chordSets.length > 0 && Math.random() < chordProb) {
      return chordSets[Math.floor(Math.random() * chordSets.length)];
    }
    const r = Math.random();
    if (r < chromaticProb)            return chromatic[Math.floor(Math.random() * chromatic.length)];
    if (r < chromaticProb + bassProb) return bassFreqs[Math.floor(Math.random() * bassFreqs.length)];
    return freqs[Math.floor(Math.random() * freqs.length)];
  }

  function triggerBurst() {
    const count = burstMin + Math.floor(Math.random() * (burstMax - burstMin + 1));
    for (let i = 0; i < count; i++) {
      const delay = i * rand(noteSpacingMin, noteSpacingMax);
      setTimeout(() => {
        if (!running) return;
        const note = pickNote();
        synthA.triggerAttackRelease(note, noteDuration);
        if (Math.random() < dualVoiceProb) {
          const note2 = pickNote();
          setTimeout(() => {
            if (running) synthB.triggerAttackRelease(note2, noteDuration);
          }, rand(dualOffsetMin, dualOffsetMax));
        }
        const vizFreq = Array.isArray(note) ? note[0] : note;
        window.dispatchEvent(new CustomEvent('note', { detail: { freq: vizFreq } }));
      }, delay);
    }
  }

  function scheduleNext() {
    if (!running) return;
    timerId = setTimeout(() => {
      if (!running) return;
      triggerBurst();
      scheduleNext();
    }, rand(silenceMin, silenceMax));
  }

  // ── Sequence mode ─────────────────────────────────────────────────────────
  // Each step: { freq, dur, gap, bass? }
  //   freq: Hz number or Hz[] chord — played on synthA
  //   dur:  trigger duration in seconds
  //   gap:  ms until the NEXT note starts
  //   bass: optional Hz — played simultaneously on synthB

  function schedulePhrase() {
    if (!running) return;
    const phrase = sequences[Math.floor(Math.random() * sequences.length)];
    let elapsed = 0;
    phrase.forEach(({ freq, dur, gap, bass }) => {
      const delay = elapsed;
      setTimeout(() => {
        if (!running) return;
        synthA.triggerAttackRelease(freq, dur);
        if (bass != null) synthB.triggerAttackRelease(bass, dur);
        const vizFreq = Array.isArray(freq) ? freq[0] : freq;
        window.dispatchEvent(new CustomEvent('note', { detail: { freq: vizFreq } }));
      }, delay);
      elapsed += gap;
    });
    // After phrase ends, wait silence then play the next phrase
    timerId = setTimeout(() => {
      if (!running) return;
      timerId = setTimeout(schedulePhrase, rand(silenceMin, silenceMax));
    }, elapsed);
  }

  // ── Public API ────────────────────────────────────────────────────────────

  return {
    start() {
      running = true;
      timerId = setTimeout(() => {
        if (!running) return;
        if (mode === 'sequence') {
          schedulePhrase();
        } else {
          triggerBurst();
          scheduleNext();
        }
      }, rand(initDelayMin, initDelayMax));
    },
    stop() {
      running = false;
      clearTimeout(timerId);
      synthA.releaseAll();
      synthB.releaseAll();
    },
  };
}
