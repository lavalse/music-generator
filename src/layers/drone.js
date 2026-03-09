import * as Tone from 'tone';

const DEFAULT_VOICES = [
  { freq: 73.42,  type: 'sine',     vol: -16 },
  { freq: 110.0,  type: 'sine',     vol: -22 },
  { freq: 146.83, type: 'triangle', vol: -26 },
];

export function createDroneLayer(output, cfg = {}) {
  const voiceDefs = cfg.voices   ?? DEFAULT_VOICES;
  const lpFreq    = cfg.lpFreq   ?? 280;
  const lfoDepth  = cfg.lfoDepth ?? 0.0008;

  const lp = new Tone.Filter({ frequency: lpFreq, type: 'lowpass', rolloff: -24 });
  lp.connect(output);

  const voices = voiceDefs.map(({ freq, type, vol }) => {
    const osc = new Tone.Oscillator({ frequency: freq, type, volume: vol });

    const lfo = new Tone.LFO({
      frequency: 0.02 + Math.random() * 0.03,
      min:  freq * (1 - lfoDepth),
      max:  freq * (1 + lfoDepth),
      type: 'sine',
    });

    osc.connect(lp);
    lfo.connect(osc.frequency);
    lfo.start();

    return { osc, lfo };
  });

  return {
    start() {
      voices.forEach(({ osc }) => osc.start());
    },
    stop() {
      voices.forEach(({ osc, lfo }) => {
        osc.stop();
        lfo.stop();
        lfo.dispose();
        osc.dispose();
      });
      lp.dispose();
    },
  };
}
