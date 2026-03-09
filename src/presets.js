// Preset definitions for 6 generative ambient styles
// Each preset: { label, effects, drone, melody, noise }

export const DEFAULT_PRESET_KEY = 'sakamoto';

export const PRESETS = {

  sakamoto: {
    label: 'Sakamoto — Late',
    effects: {
      eq:       { low: 3, mid: -4, high: -12, lowFrequency: 250, highFrequency: 3500 },
      lpFilter: { frequency: 4000, rolloff: -24 },
      delay:    { delayTime: 0.37, feedback: 0.25, wet: 0.18 },
      reverb:   { decay: 18, wet: 0.85, preDelay: 0.12 },
    },
    drone: {
      voices: [
        { freq: 73.42,  type: 'sine',     vol: -16 },  // D2
        { freq: 110.0,  type: 'sine',     vol: -22 },  // A2
        { freq: 146.83, type: 'triangle', vol: -26 },  // D3
      ],
      lpFreq:   280,
      lfoDepth: 0.0008,
    },
    melody: {
      mode: 'piano',
      freqs: [73.42,82.41,98.00,110.00,123.47,146.83,164.81,196.00,220.00,246.94,293.66,329.63,392.00,440.00,493.88,587.33],
      chromatic:      [138.59, 155.56, 185.00, 207.65],
      chromaticProb:  0.15,
      bassFreqs:      [73.42, 82.41, 98.00, 110.00, 123.47, 146.83],
      bassProb:       0.15,
      silenceMin:     10000,
      silenceMax:     25000,
      burstMin:       2,
      burstMax:       3,
      noteSpacingMin: 500,
      noteSpacingMax: 2000,
      dualVoiceProb:        0.4,
      dualVoiceOffsetMin:   80,
      dualVoiceOffsetMax:   350,
      initialDelayMin:      4000,
      initialDelayMax:      8000,
      attack:       0.02,
      decay:        4.0,
      sustain:      0.0,
      release:      7.0,
      noteDuration: 0.03,
      volA: -18,
      volB: -22,
    },
    noise: {
      type:              'pink',
      vol:               -48,
      bpFreq:            800,
      bpQ:               0.8,
      autoFilterFreq:    0.015,
      autoFilterBase:    300,
      autoFilterOctaves: 2.0,
      autoFilterDepth:   0.6,
      autoFilterWet:     0.7,
      fadeIn:            8,
    },
  },

  eno: {
    label: 'Eno — Ambient',
    effects: {
      eq:       { low: 2, mid: -2, high: -5, lowFrequency: 200, highFrequency: 4000 },
      lpFilter: { frequency: 6000, rolloff: -12 },
      delay:    { delayTime: 0.55, feedback: 0.35, wet: 0.25 },
      reverb:   { decay: 22, wet: 0.88, preDelay: 0.08 },
    },
    drone: {
      voices: [
        { freq: 110.0,  type: 'sine', vol: -18 },  // A2
        { freq: 164.81, type: 'sine', vol: -24 },  // E3
        { freq: 220.0,  type: 'sine', vol: -28 },  // A3
      ],
      lpFreq:   400,
      lfoDepth: 0.0006,
    },
    melody: {
      mode: 'pad',
      // A minor pentatonic — three octaves
      freqs: [110.00,130.81,146.83,164.81,196.00,220.00,261.63,293.66,329.63,392.00,440.00,523.25,587.33,659.25,783.99,880.00],
      chromatic:      [138.59, 185.00, 277.18, 369.99],
      chromaticProb:  0.08,
      bassFreqs:      [110.00, 130.81, 146.83, 164.81],
      bassProb:       0.12,
      silenceMin:     3000,
      silenceMax:     12000,
      burstMin:       1,
      burstMax:       2,
      noteSpacingMin: 800,
      noteSpacingMax: 3000,
      dualVoiceProb:      0.3,
      dualVoiceOffsetMin: 200,
      dualVoiceOffsetMax: 600,
      initialDelayMin:    2000,
      initialDelayMax:    5000,
      attack:       1.5,
      decay:        3.0,
      sustain:      0.6,
      release:      5.0,
      noteDuration: 4.0,
      volA: -16,
      volB: -20,
    },
    noise: {
      type:              'pink',
      vol:               -50,
      bpFreq:            1200,
      bpQ:               0.6,
      autoFilterFreq:    0.012,
      autoFilterBase:    400,
      autoFilterOctaves: 2.5,
      autoFilterDepth:   0.5,
      autoFilterWet:     0.6,
      fadeIn:            6,
    },
  },

  budd: {
    label: 'Budd — Plateaux',
    effects: {
      eq:       { low: -2, mid: -3, high: -8, lowFrequency: 300, highFrequency: 4500 },
      lpFilter: { frequency: 5000, rolloff: -12 },
      delay:    { delayTime: 0.75, feedback: 0.4, wet: 0.3 },
      reverb:   { decay: 30, wet: 0.92, preDelay: 0.15 },
    },
    drone: {
      voices: [
        { freq: 220.0,  type: 'sine', vol: -20 },  // A3
        { freq: 329.63, type: 'sine', vol: -26 },  // E4
        { freq: 440.0,  type: 'sine', vol: -30 },  // A4
      ],
      lpFreq:   600,
      lfoDepth: 0.0005,
    },
    melody: {
      mode: 'pad',
      // A major — high register
      freqs: [220.00,246.94,277.18,293.66,329.63,369.99,415.30,440.00,493.88,554.37,587.33,659.25,739.99,830.61,880.00,987.77],
      chromatic:      [233.08, 311.13, 415.30, 554.37],
      chromaticProb:  0.05,
      bassFreqs:      [220.00, 246.94, 277.18, 293.66],
      bassProb:       0.1,
      silenceMin:     15000,
      silenceMax:     35000,
      burstMin:       1,
      burstMax:       2,
      noteSpacingMin: 1000,
      noteSpacingMax: 4000,
      dualVoiceProb:      0.25,
      dualVoiceOffsetMin: 300,
      dualVoiceOffsetMax: 800,
      initialDelayMin:    5000,
      initialDelayMax:    10000,
      attack:       2.0,
      decay:        4.0,
      sustain:      0.7,
      release:      8.0,
      noteDuration: 6.0,
      volA: -14,
      volB: -18,
    },
    noise: {
      type:              'pink',
      vol:               -52,
      bpFreq:            1600,
      bpQ:               0.5,
      autoFilterFreq:    0.008,
      autoFilterBase:    500,
      autoFilterOctaves: 3.0,
      autoFilterDepth:   0.4,
      autoFilterWet:     0.5,
      fadeIn:            10,
    },
  },

  deepspace: {
    label: 'Deep Space',
    effects: {
      eq:       { low: 6, mid: -6, high: -18, lowFrequency: 150, highFrequency: 2000 },
      lpFilter: { frequency: 1200, rolloff: -48 },
      delay:    { delayTime: 0.9, feedback: 0.45, wet: 0.35 },
      reverb:   { decay: 25, wet: 0.9, preDelay: 0.2 },
    },
    drone: {
      voices: [
        { freq: 36.71, type: 'sine', vol: -12 },  // D1
        { freq: 55.00, type: 'sine', vol: -18 },  // A1
        { freq: 73.42, type: 'sine', vol: -22 },  // D2
      ],
      lpFreq:   200,
      lfoDepth: 0.0012,
    },
    melody: {
      mode: 'piano',
      freqs: [36.71,55.00,73.42,82.41,98.00,110.00,123.47,146.83],
      chromatic:      [41.20, 61.74, 77.78, 103.83],
      chromaticProb:  0.05,
      bassFreqs:      [36.71, 55.00, 73.42],
      bassProb:       0.5,
      silenceMin:     30000,
      silenceMax:     60000,
      burstMin:       1,
      burstMax:       2,
      noteSpacingMin: 2000,
      noteSpacingMax: 5000,
      dualVoiceProb:      0.2,
      dualVoiceOffsetMin: 500,
      dualVoiceOffsetMax: 1500,
      initialDelayMin:    8000,
      initialDelayMax:    15000,
      attack:       0.5,
      decay:        6.0,
      sustain:      0.0,
      release:      10.0,
      noteDuration: 0.1,
      volA: -16,
      volB: -20,
    },
    noise: {
      type:              'brown',
      vol:               -42,
      bpFreq:            200,
      bpQ:               1.0,
      autoFilterFreq:    0.008,
      autoFilterBase:    80,
      autoFilterOctaves: 1.5,
      autoFilterDepth:   0.8,
      autoFilterWet:     0.8,
      fadeIn:            12,
    },
  },

  nocturne: {
    label: 'Nocturne — B minor',
    effects: {
      eq:       { low: 2, mid: -2, high: -10, lowFrequency: 250, highFrequency: 3200 },
      lpFilter: { frequency: 3500, rolloff: -24 },
      delay:    { delayTime: 0.45, feedback: 0.28, wet: 0.2 },
      reverb:   { decay: 14, wet: 0.82, preDelay: 0.1 },
    },
    drone: {
      voices: [
        { freq: 61.74,  type: 'sine',     vol: -17 },  // B1
        { freq: 92.50,  type: 'sine',     vol: -23 },  // F#2
        { freq: 123.47, type: 'triangle', vol: -27 },  // B2
      ],
      lpFreq:   300,
      lfoDepth: 0.0008,
    },
    melody: {
      mode: 'piano',
      // B natural minor
      freqs: [61.74,69.30,73.42,82.41,92.50,98.00,110.00,123.47,138.59,146.83,164.81,185.00,196.00,220.00,246.94,293.66],
      chromatic:      [65.41, 77.78, 103.83, 155.56],
      chromaticProb:  0.12,
      bassFreqs:      [61.74, 69.30, 73.42, 82.41, 92.50, 98.00],
      bassProb:       0.2,
      silenceMin:     7000,
      silenceMax:     18000,
      burstMin:       2,
      burstMax:       3,
      noteSpacingMin: 400,
      noteSpacingMax: 1800,
      dualVoiceProb:      0.45,
      dualVoiceOffsetMin: 60,
      dualVoiceOffsetMax: 280,
      initialDelayMin:    3000,
      initialDelayMax:    7000,
      attack:       0.03,
      decay:        3.5,
      sustain:      0.0,
      release:      6.0,
      noteDuration: 0.03,
      volA: -17,
      volB: -21,
    },
    noise: {
      type:              'pink',
      vol:               -50,
      bpFreq:            600,
      bpQ:               0.9,
      autoFilterFreq:    0.018,
      autoFilterBase:    250,
      autoFilterOctaves: 1.8,
      autoFilterDepth:   0.55,
      autoFilterWet:     0.65,
      fadeIn:            7,
    },
  },

  minimal: {
    label: 'Minimal — E Lydian',
    effects: {
      eq:       { low: -2, mid: 0, high: -3, lowFrequency: 300, highFrequency: 5000 },
      lpFilter: { frequency: 8000, rolloff: -12 },
      delay:    { delayTime: 0.25, feedback: 0.15, wet: 0.12 },
      reverb:   { decay: 5, wet: 0.65, preDelay: 0.04 },
    },
    drone: {
      voices: [
        { freq: 164.81, type: 'sine',     vol: -22 },  // E3
        { freq: 246.94, type: 'sine',     vol: -28 },  // B3
        { freq: 329.63, type: 'triangle', vol: -32 },  // E4
      ],
      lpFreq:   800,
      lfoDepth: 0.0004,
    },
    melody: {
      mode: 'piano',
      // E Lydian
      freqs: [164.81,185.00,207.65,233.08,246.94,277.18,311.13,329.63,369.99,415.30,466.16,493.88,554.37,622.25,659.25,739.99],
      chromatic:      [174.61, 261.63, 349.23, 523.25],
      chromaticProb:  0.1,
      bassFreqs:      [164.81, 185.00, 207.65, 233.08, 246.94],
      bassProb:       0.15,
      silenceMin:     1500,
      silenceMax:     5000,
      burstMin:       2,
      burstMax:       4,
      noteSpacingMin: 200,
      noteSpacingMax: 800,
      dualVoiceProb:      0.5,
      dualVoiceOffsetMin: 40,
      dualVoiceOffsetMax: 200,
      initialDelayMin:    1000,
      initialDelayMax:    3000,
      attack:       0.01,
      decay:        1.5,
      sustain:      0.0,
      release:      3.0,
      noteDuration: 0.02,
      volA: -14,
      volB: -18,
    },
    noise: {
      type:              'white',
      vol:               -58,
      bpFreq:            2000,
      bpQ:               0.5,
      autoFilterFreq:    0.03,
      autoFilterBase:    800,
      autoFilterOctaves: 2.0,
      autoFilterDepth:   0.3,
      autoFilterWet:     0.4,
      fadeIn:            4,
    },
  },

  gymno: {
    label: 'Gymnopedie — D Major',
    effects: {
      eq:       { low: 2, mid: -2, high: -8, lowFrequency: 250, highFrequency: 3800 },
      lpFilter: { frequency: 5000, rolloff: -24 },
      delay:    { delayTime: 0.45, feedback: 0.28, wet: 0.20 },
      reverb:   { decay: 14, wet: 0.80, preDelay: 0.08 },
    },
    drone: {
      voices: [
        { freq: 73.42,  type: 'sine', vol: -18 },  // D2
        { freq: 110.00, type: 'sine', vol: -24 },  // A2
        { freq: 146.83, type: 'sine', vol: -28 },  // D3
      ],
      lpFreq:   280,
      lfoDepth: 0.0006,
    },
    melody: {
      mode:      'sequence',
      synthType: 'piano',
      attack: 0.02, decay: 5.0, sustain: 0.0, release: 8.0,
      volA: -16, volB: -20,
      silenceMin: 3000, silenceMax: 8000,
      initialDelayMin: 2000, initialDelayMax: 5000,
      // D major: D3=146.83 E3=164.81 F#3=185 G3=196 A3=220 B3=246.94
      //          D4=293.66 E4=329.63 F#4=369.99 G4=392 A4=440 B4=493.88
      //          C#5=554.37 D5=587.33   bass: D2=73.42  A2=110
      sequences: [
        // Phrase 1 — ascending arch D4→F#4→A4→G4→F#4→E4
        [
          { freq: 293.66, dur: 0.03, gap: 1200, bass: 73.42  },  // D4 + D2
          { freq: 369.99, dur: 0.03, gap: 1500                },  // F#4
          { freq: 440.00, dur: 0.03, gap: 2000, bass: 110.00 },  // A4 + A2
          { freq: 392.00, dur: 0.03, gap: 1200                },  // G4
          { freq: 369.99, dur: 0.03, gap: 1200                },  // F#4
          { freq: 329.63, dur: 0.03, gap: 3000                },  // E4
        ],
        // Phrase 2 — lower lyrical A3→B3→D4→E4→D4→A3
        [
          { freq: 220.00, dur: 0.03, gap: 1000, bass: 110.00 },  // A3 + A2
          { freq: 246.94, dur: 0.03, gap: 800                 },  // B3
          { freq: 293.66, dur: 0.03, gap: 800,  bass: 73.42  },  // D4 + D2
          { freq: 329.63, dur: 0.03, gap: 1000                },  // E4
          { freq: 293.66, dur: 0.03, gap: 800                 },  // D4
          { freq: 220.00, dur: 0.03, gap: 2800, bass: 110.00 },  // A3 + A2
        ],
        // Phrase 3 — soaring to D5
        [
          { freq: 369.99, dur: 0.03, gap: 1200, bass: 73.42  },  // F#4 + D2
          { freq: 440.00, dur: 0.03, gap: 1200, bass: 110.00 },  // A4 + A2
          { freq: 587.33, dur: 0.03, gap: 2200, bass: 73.42  },  // D5 + D2
          { freq: 554.37, dur: 0.03, gap: 1200                },  // C#5
          { freq: 493.88, dur: 0.03, gap: 1000                },  // B4
          { freq: 440.00, dur: 0.03, gap: 3200, bass: 110.00 },  // A4 + A2
        ],
        // Phrase 4 — arching close B3→D4→F#4→A4→G4→F#4→E4→D4
        [
          { freq: 246.94, dur: 0.03, gap: 800                 },  // B3
          { freq: 293.66, dur: 0.03, gap: 800,  bass: 73.42  },  // D4 + D2
          { freq: 369.99, dur: 0.03, gap: 1000                },  // F#4
          { freq: 440.00, dur: 0.03, gap: 1500, bass: 110.00 },  // A4 + A2
          { freq: 392.00, dur: 0.03, gap: 1000                },  // G4
          { freq: 369.99, dur: 0.03, gap: 800                 },  // F#4
          { freq: 329.63, dur: 0.03, gap: 800                 },  // E4
          { freq: 293.66, dur: 0.03, gap: 3800, bass: 73.42  },  // D4 + D2
        ],
      ],
    },
    noise: {
      type:              'pink',
      vol:               -56,
      bpFreq:            600,
      bpQ:               0.7,
      autoFilterFreq:    0.012,
      autoFilterBase:    250,
      autoFilterOctaves: 1.8,
      autoFilterDepth:   0.5,
      autoFilterWet:     0.55,
      fadeIn:            6,
    },
  },

  arabesque: {
    label: 'Arabesque — A Pentatonic',
    effects: {
      eq:       { low: 0, mid: 0, high: -4, lowFrequency: 280, highFrequency: 5000 },
      lpFilter: { frequency: 7000, rolloff: -12 },
      delay:    { delayTime: 0.35, feedback: 0.25, wet: 0.16 },
      reverb:   { decay: 10, wet: 0.75, preDelay: 0.06 },
    },
    drone: {
      voices: [
        { freq: 110.00, type: 'sine', vol: -20 },  // A2
        { freq: 164.81, type: 'sine', vol: -26 },  // E3
        { freq: 220.00, type: 'sine', vol: -30 },  // A3
      ],
      lpFreq:   500,
      lfoDepth: 0.0005,
    },
    melody: {
      mode:      'sequence',
      synthType: 'piano',
      attack: 0.015, decay: 3.0, sustain: 0.0, release: 5.0,
      volA: -16, volB: -20,
      silenceMin: 2000, silenceMax: 6000,
      initialDelayMin: 1500, initialDelayMax: 4000,
      // A major pentatonic: A B C# E F#
      // A2=110 C#3=138.59 E3=164.81 F#3=185 A3=220 C#4=277.18
      // E4=329.63 F#4=369.99 A4=440 C#5=554.37 E5=659.25
      // bass: A2=110
      sequences: [
        // Phrase 1 — flowing arpeggio up and back
        [
          { freq: 220.00, dur: 0.03, gap: 550, bass: 110.00 },  // A3 + A2
          { freq: 277.18, dur: 0.03, gap: 450                },  // C#4
          { freq: 329.63, dur: 0.03, gap: 450                },  // E4
          { freq: 369.99, dur: 0.03, gap: 500                },  // F#4
          { freq: 440.00, dur: 0.03, gap: 600, bass: 110.00 },  // A4 + A2
          { freq: 329.63, dur: 0.03, gap: 450                },  // E4
          { freq: 277.18, dur: 0.03, gap: 450                },  // C#4
          { freq: 220.00, dur: 0.03, gap: 2000               },  // A3
        ],
        // Phrase 2 — high register
        [
          { freq: 329.63, dur: 0.03, gap: 500                },  // E4
          { freq: 440.00, dur: 0.03, gap: 550, bass: 110.00 },  // A4 + A2
          { freq: 554.37, dur: 0.03, gap: 800, bass: 110.00 },  // C#5 + A2
          { freq: 440.00, dur: 0.03, gap: 500                },  // A4
          { freq: 369.99, dur: 0.03, gap: 500                },  // F#4
          { freq: 329.63, dur: 0.03, gap: 500                },  // E4
          { freq: 277.18, dur: 0.03, gap: 2200               },  // C#4
        ],
        // Phrase 3 — ascending to E5
        [
          { freq: 220.00, dur: 0.03, gap: 500, bass: 110.00 },  // A3
          { freq: 277.18, dur: 0.03, gap: 400                },  // C#4
          { freq: 329.63, dur: 0.03, gap: 400                },  // E4
          { freq: 440.00, dur: 0.03, gap: 500                },  // A4
          { freq: 659.25, dur: 0.03, gap: 750, bass: 110.00 },  // E5 + A2
          { freq: 554.37, dur: 0.03, gap: 500                },  // C#5
          { freq: 440.00, dur: 0.03, gap: 500                },  // A4
          { freq: 369.99, dur: 0.03, gap: 500                },  // F#4
          { freq: 329.63, dur: 0.03, gap: 2000               },  // E4
        ],
        // Phrase 4 — tender close
        [
          { freq: 440.00, dur: 0.03, gap: 600, bass: 110.00 },  // A4 + A2
          { freq: 369.99, dur: 0.03, gap: 500                },  // F#4
          { freq: 329.63, dur: 0.03, gap: 500                },  // E4
          { freq: 277.18, dur: 0.03, gap: 500                },  // C#4
          { freq: 220.00, dur: 0.03, gap: 700, bass: 110.00 },  // A3 + A2
          { freq: 277.18, dur: 0.03, gap: 500                },  // C#4
          { freq: 329.63, dur: 0.03, gap: 2500               },  // E4
        ],
      ],
    },
    noise: {
      type:              'pink',
      vol:               -58,
      bpFreq:            1200,
      bpQ:               0.5,
      autoFilterFreq:    0.018,
      autoFilterBase:    400,
      autoFilterOctaves: 2.0,
      autoFilterDepth:   0.35,
      autoFilterWet:     0.4,
      fadeIn:            4,
    },
  },

  moonlight: {
    label: 'Moonlight — C# minor',
    effects: {
      eq:       { low: 3, mid: -3, high: -10, lowFrequency: 240, highFrequency: 3500 },
      lpFilter: { frequency: 4500, rolloff: -24 },
      delay:    { delayTime: 0.50, feedback: 0.32, wet: 0.22 },
      reverb:   { decay: 18, wet: 0.85, preDelay: 0.10 },
    },
    drone: {
      voices: [
        { freq: 69.30,  type: 'sine', vol: -16 },  // C#2
        { freq: 103.83, type: 'sine', vol: -22 },  // G#2
        { freq: 138.59, type: 'sine', vol: -26 },  // C#3
      ],
      lpFreq:   300,
      lfoDepth: 0.0007,
    },
    melody: {
      mode:      'sequence',
      synthType: 'piano',
      attack: 0.025, decay: 6.0, sustain: 0.0, release: 10.0,
      volA: -15, volB: -19,
      silenceMin: 4000, silenceMax: 10000,
      initialDelayMin: 3000, initialDelayMax: 7000,
      // C# minor: C#2=69.30 G#2=103.83
      // G#3=207.65 B3=246.94 C#4=277.18 D#4=311.13 E4=329.63
      // F#4=369.99 G#4=415.30 A4=440 B4=493.88
      sequences: [
        // Phrase 1 — yearning ascent E4→G#4→B4→A4→G#4→E4
        [
          { freq: 329.63, dur: 0.03, gap: 1500, bass: 69.30  },  // E4 + C#2
          { freq: 415.30, dur: 0.03, gap: 1500                },  // G#4
          { freq: 493.88, dur: 0.03, gap: 2000, bass: 103.83 },  // B4 + G#2
          { freq: 440.00, dur: 0.03, gap: 1200                },  // A4
          { freq: 415.30, dur: 0.03, gap: 1200                },  // G#4
          { freq: 329.63, dur: 0.03, gap: 4200, bass: 69.30  },  // E4 + C#2
        ],
        // Phrase 2 — tender C#4→E4→G#4→F#4→E4→C#4
        [
          { freq: 277.18, dur: 0.03, gap: 1200, bass: 69.30  },  // C#4 + C#2
          { freq: 329.63, dur: 0.03, gap: 1200                },  // E4
          { freq: 415.30, dur: 0.03, gap: 1500, bass: 103.83 },  // G#4 + G#2
          { freq: 369.99, dur: 0.03, gap: 1000                },  // F#4
          { freq: 329.63, dur: 0.03, gap: 1000                },  // E4
          { freq: 277.18, dur: 0.03, gap: 3800, bass: 69.30  },  // C#4 + C#2
        ],
        // Phrase 3 — low and searching G#3→C#4→E4→G#4→B4→G#4→E4→C#4
        [
          { freq: 207.65, dur: 0.03, gap: 1200, bass: 103.83 },  // G#3 + G#2
          { freq: 277.18, dur: 0.03, gap: 1200, bass: 69.30  },  // C#4 + C#2
          { freq: 329.63, dur: 0.03, gap: 1500                },  // E4
          { freq: 415.30, dur: 0.03, gap: 1500, bass: 103.83 },  // G#4 + G#2
          { freq: 493.88, dur: 0.03, gap: 2200, bass: 69.30  },  // B4 + C#2
          { freq: 415.30, dur: 0.03, gap: 1200                },  // G#4
          { freq: 329.63, dur: 0.03, gap: 1200                },  // E4
          { freq: 277.18, dur: 0.03, gap: 4500, bass: 69.30  },  // C#4 + C#2
        ],
        // Phrase 4 — bittersweet B3→D#4→F#4→E4→D#4→C#4→B3
        [
          { freq: 246.94, dur: 0.03, gap: 1000                },  // B3
          { freq: 311.13, dur: 0.03, gap: 1000, bass: 69.30  },  // D#4 + C#2
          { freq: 369.99, dur: 0.03, gap: 1200                },  // F#4
          { freq: 329.63, dur: 0.03, gap: 1000                },  // E4
          { freq: 311.13, dur: 0.03, gap: 1000                },  // D#4
          { freq: 277.18, dur: 0.03, gap: 1000, bass: 69.30  },  // C#4 + C#2
          { freq: 246.94, dur: 0.03, gap: 4000                },  // B3
        ],
      ],
    },
    noise: {
      type:              'pink',
      vol:               -52,
      bpFreq:            500,
      bpQ:               1.0,
      autoFilterFreq:    0.01,
      autoFilterBase:    200,
      autoFilterOctaves: 1.5,
      autoFilterDepth:   0.7,
      autoFilterWet:     0.7,
      fadeIn:            8,
    },
  },

  spring: {
    label: 'Spring — C Major',
    effects: {
      eq:       { low: -1, mid: 1, high: 0, lowFrequency: 300, highFrequency: 6000 },
      lpFilter: { frequency: 10000, rolloff: -12 },
      delay:    { delayTime: 0.30, feedback: 0.20, wet: 0.16 },
      reverb:   { decay: 6, wet: 0.68, preDelay: 0.04 },
    },
    drone: {
      voices: [
        { freq: 130.81, type: 'triangle', vol: -22 },  // C3
        { freq: 196.00, type: 'sine',     vol: -28 },  // G3
        { freq: 261.63, type: 'triangle', vol: -32 },  // C4
      ],
      lpFreq:   800,
      lfoDepth: 0.0004,
    },
    melody: {
      mode: 'piano',
      // C major scale — 3 octaves
      freqs: [130.81,146.83,164.81,174.61,196.00,220.00,246.94,261.63,293.66,329.63,349.23,392.00,440.00,493.88,523.25,587.33,659.25],
      chromatic:      [138.59, 233.08, 311.13, 466.16],
      chromaticProb:  0.02,   // almost no dissonance
      bassFreqs:      [130.81, 146.83, 164.81, 174.61, 196.00],
      bassProb:       0.08,
      // C major triads: Cmaj, Fmaj, Gmaj, Am, C_low, G_low
      chordSets: [
        [130.81, 164.81, 196.00],          // C3-E3-G3
        [174.61, 220.00, 261.63],          // F3-A3-C4
        [196.00, 246.94, 293.66],          // G3-B3-D4
        [220.00, 261.63, 329.63],          // Am3: A3-C4-E4
        [261.63, 329.63, 392.00],          // C4-E4-G4
        [349.23, 440.00, 523.25],          // F4-A4-C5
        [392.00, 493.88, 587.33],          // G4-B4-D5
        [130.81, 164.81, 196.00, 261.63],  // Cmaj add octave
      ],
      chordProb:      0.35,
      silenceMin:     1000,
      silenceMax:     3500,
      burstMin:       2,
      burstMax:       4,
      noteSpacingMin: 300,
      noteSpacingMax: 800,
      dualVoiceProb:      0.45,
      dualVoiceOffsetMin: 50,
      dualVoiceOffsetMax: 250,
      initialDelayMin:    1000,
      initialDelayMax:    3000,
      attack:       0.012,
      decay:        2.0,
      sustain:      0.0,
      release:      4.5,
      noteDuration: 0.02,
      volA: -15,
      volB: -19,
    },
    noise: {
      type:              'pink',
      vol:               -58,
      bpFreq:            2500,
      bpQ:               0.5,
      autoFilterFreq:    0.03,
      autoFilterBase:    700,
      autoFilterOctaves: 2.0,
      autoFilterDepth:   0.3,
      autoFilterWet:     0.35,
      fadeIn:            3,
    },
  },

  waltz: {
    label: 'Waltz — D Major',
    effects: {
      eq:       { low: 1, mid: 0, high: -5, lowFrequency: 260, highFrequency: 4200 },
      lpFilter: { frequency: 6500, rolloff: -12 },
      delay:    { delayTime: 0.38, feedback: 0.25, wet: 0.18 },
      reverb:   { decay: 10, wet: 0.76, preDelay: 0.07 },
    },
    drone: {
      voices: [
        { freq: 73.42,  type: 'sine',     vol: -18 },  // D2
        { freq: 110.00, type: 'sine',     vol: -24 },  // A2
        { freq: 146.83, type: 'triangle', vol: -28 },  // D3
      ],
      lpFreq:   400,
      lfoDepth: 0.0006,
    },
    melody: {
      mode: 'piano',
      // D major scale
      freqs: [73.42,82.41,92.50,98.00,110.00,123.47,138.59,146.83,164.81,185.00,196.00,220.00,246.94,277.18,293.66,329.63,369.99,392.00,440.00,493.88,587.33],
      chromatic:      [87.31, 155.56, 233.08, 349.23],
      chromaticProb:  0.04,
      bassFreqs:      [73.42, 82.41, 92.50, 98.00, 110.00, 123.47],
      bassProb:       0.12,
      // D major triads
      chordSets: [
        [146.83, 185.00, 220.00],          // D3-F#3-A3
        [196.00, 246.94, 293.66],          // G3-B3-D4
        [220.00, 277.18, 329.63],          // A3-C#4-E4
        [246.94, 293.66, 369.99],          // Bm3: B3-D4-F#4
        [293.66, 369.99, 440.00],          // D4-F#4-A4
        [98.00,  123.47, 146.83],          // G2-B2-D3
        [146.83, 185.00, 220.00, 293.66],  // D3-F#3-A3-D4
        [196.00, 246.94, 293.66, 392.00],  // G3-B3-D4-G4
      ],
      chordProb:      0.30,
      silenceMin:     2000,
      silenceMax:     6000,
      burstMin:       2,
      burstMax:       4,
      noteSpacingMin: 350,
      noteSpacingMax: 1000,
      dualVoiceProb:      0.45,
      dualVoiceOffsetMin: 60,
      dualVoiceOffsetMax: 280,
      initialDelayMin:    2000,
      initialDelayMax:    5000,
      attack:       0.015,
      decay:        3.0,
      sustain:      0.0,
      release:      6.0,
      noteDuration: 0.025,
      volA: -16,
      volB: -20,
    },
    noise: {
      type:              'pink',
      vol:               -54,
      bpFreq:            800,
      bpQ:               0.7,
      autoFilterFreq:    0.018,
      autoFilterBase:    300,
      autoFilterOctaves: 2.0,
      autoFilterDepth:   0.5,
      autoFilterWet:     0.55,
      fadeIn:            6,
    },
  },

  groove: {
    label: 'Groove — A Mixolydian',
    effects: {
      eq:       { low: 4, mid: 2, high: -3, lowFrequency: 180, highFrequency: 4500 },
      lpFilter: { frequency: 5500, rolloff: -24 },
      delay:    { delayTime: 0.25, feedback: 0.35, wet: 0.30 },
      reverb:   { decay: 7, wet: 0.72, preDelay: 0.05 },
    },
    drone: {
      voices: [
        { freq: 55.00,  type: 'sawtooth', vol: -18 },  // A1
        { freq: 82.41,  type: 'sine',     vol: -24 },  // E2
        { freq: 110.00, type: 'sawtooth', vol: -28 },  // A2
      ],
      lpFreq:   350,
      lfoDepth: 0.001,
    },
    melody: {
      mode: 'keys',
      // A Mixolydian: A B C# D E F# G
      freqs: [110.00,123.47,138.59,146.83,164.81,185.00,196.00,220.00,246.94,277.18,293.66,329.63,369.99,392.00,440.00,493.88],
      chromatic:      [116.54, 155.56, 233.08, 311.13],
      chromaticProb:  0.05,
      bassFreqs:      [55.00, 73.42, 82.41, 110.00, 123.47],
      bassProb:       0.18,
      // A Mixolydian triads
      chordSets: [
        [110.00, 138.59, 164.81],          // A2-C#3-E3
        [146.83, 185.00, 220.00],          // D3-F#3-A3
        [196.00, 246.94, 293.66],          // G3-B3-D4
        [164.81, 196.00, 246.94],          // Em3: E3-G3-B3
        [220.00, 277.18, 329.63],          // A3-C#4-E4
        [293.66, 369.99, 440.00],          // D4-F#4-A4
        [110.00, 164.81],                  // A2-E3 power
        [146.83, 220.00],                  // D3-A3 power
      ],
      chordProb:      0.35,
      silenceMin:     500,
      silenceMax:     2500,
      burstMin:       3,
      burstMax:       6,
      noteSpacingMin: 150,
      noteSpacingMax: 450,
      dualVoiceProb:      0.55,
      dualVoiceOffsetMin: 30,
      dualVoiceOffsetMax: 150,
      initialDelayMin:    800,
      initialDelayMax:    2500,
      attack:       0.04,
      decay:        0.7,
      sustain:      0.15,
      release:      1.5,
      noteDuration: 0.07,
      volA: -14,
      volB: -18,
    },
    noise: {
      type:              'white',
      vol:               -52,
      bpFreq:            2500,
      bpQ:               0.4,
      autoFilterFreq:    0.05,
      autoFilterBase:    800,
      autoFilterOctaves: 2.5,
      autoFilterDepth:   0.4,
      autoFilterWet:     0.45,
      fadeIn:            2,
    },
  },

  float: {
    label: 'Float — Ab Major',
    effects: {
      eq:       { low: 0, mid: -1, high: -6, lowFrequency: 240, highFrequency: 3800 },
      lpFilter: { frequency: 5000, rolloff: -12 },
      delay:    { delayTime: 0.60, feedback: 0.38, wet: 0.28 },
      reverb:   { decay: 20, wet: 0.88, preDelay: 0.10 },
    },
    drone: {
      voices: [
        { freq: 103.83, type: 'sine', vol: -18 },  // Ab2
        { freq: 155.56, type: 'sine', vol: -24 },  // Eb3
        { freq: 207.65, type: 'sine', vol: -28 },  // Ab3
      ],
      lpFreq:   450,
      lfoDepth: 0.0006,
    },
    melody: {
      mode: 'pad',
      // Ab major scale
      freqs: [103.83,116.54,130.81,138.59,155.56,174.61,196.00,207.65,233.08,261.63,277.18,311.13,349.23,392.00,415.30,466.16,523.25],
      chromatic:      [110.00, 164.81, 246.94, 369.99],
      chromaticProb:  0.03,
      bassFreqs:      [103.83, 116.54, 130.81, 138.59, 155.56],
      bassProb:       0.10,
      // Ab major chord voicings
      chordSets: [
        [207.65, 261.63, 311.13],          // Ab3-C4-Eb4
        [155.56, 196.00, 233.08],          // Eb3-G3-Bb3
        [233.08, 277.18, 349.23],          // Bbm3: Bb3-Db4-F4
        [174.61, 207.65, 261.63],          // Fm3: F3-Ab3-C4
        [311.13, 392.00, 466.16],          // Eb4-G4-Bb4
        [415.30, 523.25, 622.25],          // Ab4-C5-Eb5
        [207.65, 261.63, 311.13, 415.30],  // Ab3-C4-Eb4-Ab4
        [155.56, 207.65, 261.63, 311.13],  // Eb3-Ab3-C4-Eb4
      ],
      chordProb:      0.50,
      silenceMin:     3000,
      silenceMax:     9000,
      burstMin:       1,
      burstMax:       3,
      noteSpacingMin: 600,
      noteSpacingMax: 2000,
      dualVoiceProb:      0.35,
      dualVoiceOffsetMin: 200,
      dualVoiceOffsetMax: 700,
      initialDelayMin:    2000,
      initialDelayMax:    5000,
      attack:       1.8,
      decay:        3.5,
      sustain:      0.55,
      release:      5.5,
      noteDuration: 5.0,
      volA: -14,
      volB: -18,
    },
    noise: {
      type:              'pink',
      vol:               -52,
      bpFreq:            1000,
      bpQ:               0.6,
      autoFilterFreq:    0.01,
      autoFilterBase:    350,
      autoFilterOctaves: 2.5,
      autoFilterDepth:   0.5,
      autoFilterWet:     0.6,
      fadeIn:            8,
    },
  },

  aurora: {
    label: 'Aurora — A Major',
    effects: {
      eq:       { low: 1, mid: 0, high: -4, lowFrequency: 220, highFrequency: 4500 },
      lpFilter: { frequency: 7000, rolloff: -12 },
      delay:    { delayTime: 0.40, feedback: 0.30, wet: 0.22 },
      reverb:   { decay: 16, wet: 0.82, preDelay: 0.08 },
    },
    drone: {
      voices: [
        { freq: 110.0,  type: 'sine', vol: -18 },  // A2
        { freq: 164.81, type: 'sine', vol: -24 },  // E3
        { freq: 220.0,  type: 'sine', vol: -28 },  // A3
      ],
      lpFreq:   500,
      lfoDepth: 0.0006,
    },
    melody: {
      mode: 'pad',
      // A major pentatonic: A B C# E F#
      freqs: [110.00,123.47,138.59,164.81,185.00,220.00,246.94,277.18,329.63,369.99,440.00,493.88,554.37,659.25,739.99,880.00],
      chromatic:      [146.83, 196.00, 261.63, 392.00],
      chromaticProb:  0.07,
      bassFreqs:      [110.00, 123.47, 138.59, 164.81],
      bassProb:       0.12,
      silenceMin:     2000,
      silenceMax:     7000,
      burstMin:       2,
      burstMax:       4,
      noteSpacingMin: 300,
      noteSpacingMax: 1200,
      dualVoiceProb:      0.5,
      dualVoiceOffsetMin: 150,
      dualVoiceOffsetMax: 500,
      initialDelayMin:    1500,
      initialDelayMax:    4000,
      attack:       1.2,
      decay:        2.5,
      sustain:      0.5,
      release:      4.0,
      noteDuration: 3.0,
      volA: -15,
      volB: -19,
    },
    noise: {
      type:              'pink',
      vol:               -54,
      bpFreq:            1500,
      bpQ:               0.6,
      autoFilterFreq:    0.02,
      autoFilterBase:    500,
      autoFilterOctaves: 2.5,
      autoFilterDepth:   0.45,
      autoFilterWet:     0.55,
      fadeIn:            5,
    },
  },

  morning: {
    label: 'Morning — G Major',
    effects: {
      eq:       { low: -1, mid: 1, high: -2, lowFrequency: 280, highFrequency: 5500 },
      lpFilter: { frequency: 9000, rolloff: -12 },
      delay:    { delayTime: 0.28, feedback: 0.18, wet: 0.14 },
      reverb:   { decay: 7, wet: 0.70, preDelay: 0.05 },
    },
    drone: {
      voices: [
        { freq: 98.00,  type: 'triangle', vol: -20 },  // G2
        { freq: 146.83, type: 'sine',     vol: -26 },  // D3
        { freq: 196.00, type: 'triangle', vol: -30 },  // G3
      ],
      lpFreq:   700,
      lfoDepth: 0.0005,
    },
    melody: {
      mode: 'piano',
      // G major scale
      freqs: [98.00,110.00,123.47,130.81,146.83,164.81,185.00,196.00,220.00,246.94,261.63,293.66,329.63,369.99,392.00,440.00,493.88,523.25,587.33,659.25],
      chromatic:      [138.59, 207.65, 311.13, 415.30],
      chromaticProb:  0.08,
      bassFreqs:      [98.00, 110.00, 123.47, 130.81, 146.83],
      bassProb:       0.12,
      silenceMin:     1500,
      silenceMax:     5000,
      burstMin:       2,
      burstMax:       5,
      noteSpacingMin: 200,
      noteSpacingMax: 900,
      dualVoiceProb:      0.5,
      dualVoiceOffsetMin: 50,
      dualVoiceOffsetMax: 250,
      initialDelayMin:    1000,
      initialDelayMax:    3000,
      attack:       0.015,
      decay:        2.5,
      sustain:      0.0,
      release:      5.0,
      noteDuration: 0.025,
      volA: -15,
      volB: -19,
    },
    noise: {
      type:              'pink',
      vol:               -56,
      bpFreq:            2000,
      bpQ:               0.5,
      autoFilterFreq:    0.025,
      autoFilterBase:    600,
      autoFilterOctaves: 2.0,
      autoFilterDepth:   0.3,
      autoFilterWet:     0.4,
      fadeIn:            4,
    },
  },

  pulse: {
    label: 'Pulse — Electronic',
    effects: {
      eq:       { low: 3, mid: 2, high: -4, lowFrequency: 200, highFrequency: 4000 },
      lpFilter: { frequency: 5000, rolloff: -24 },
      delay:    { delayTime: 0.33, feedback: 0.35, wet: 0.28 },
      reverb:   { decay: 8, wet: 0.72, preDelay: 0.06 },
    },
    drone: {
      voices: [
        { freq: 73.42,  type: 'sawtooth', vol: -20 },  // D2
        { freq: 110.00, type: 'sine',     vol: -24 },  // A2
        { freq: 146.83, type: 'sawtooth', vol: -28 },  // D3
      ],
      lpFreq:   350,
      lfoDepth: 0.001,
    },
    melody: {
      mode: 'keys',
      // D Dorian: D E F G A B C
      freqs: [73.42,82.41,87.31,98.00,110.00,123.47,130.81,146.83,164.81,174.61,196.00,220.00,246.94,261.63,293.66,329.63],
      chromatic:      [92.50, 138.59, 185.00, 277.18],
      chromaticProb:  0.1,
      bassFreqs:      [73.42, 82.41, 87.31, 98.00, 110.00],
      bassProb:       0.2,
      silenceMin:     800,
      silenceMax:     3500,
      burstMin:       2,
      burstMax:       5,
      noteSpacingMin: 150,
      noteSpacingMax: 600,
      dualVoiceProb:      0.55,
      dualVoiceOffsetMin: 30,
      dualVoiceOffsetMax: 150,
      initialDelayMin:    800,
      initialDelayMax:    2500,
      attack:       0.05,
      decay:        0.9,
      sustain:      0.2,
      release:      1.8,
      noteDuration: 0.08,
      volA: -14,
      volB: -18,
    },
    noise: {
      type:              'white',
      vol:               -55,
      bpFreq:            3000,
      bpQ:               0.4,
      autoFilterFreq:    0.04,
      autoFilterBase:    1000,
      autoFilterOctaves: 2.5,
      autoFilterDepth:   0.4,
      autoFilterWet:     0.5,
      fadeIn:            3,
    },
  },

};
