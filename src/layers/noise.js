import * as Tone from 'tone';

export function createNoiseLayer(output, cfg = {}) {
  const type              = cfg.type              ?? 'pink';
  const vol               = cfg.vol               ?? -48;
  const bpFreq            = cfg.bpFreq            ?? 800;
  const bpQ               = cfg.bpQ               ?? 0.8;
  const autoFilterFreq    = cfg.autoFilterFreq    ?? 0.015;
  const autoFilterBase    = cfg.autoFilterBase    ?? 300;
  const autoFilterOctaves = cfg.autoFilterOctaves ?? 2.0;
  const autoFilterDepth   = cfg.autoFilterDepth   ?? 0.6;
  const autoFilterWet     = cfg.autoFilterWet     ?? 0.7;
  const fadeIn            = cfg.fadeIn            ?? 8;

  const noise = new Tone.Noise({ type, volume: vol });

  const bp = new Tone.Filter({ frequency: bpFreq, type: 'bandpass', Q: bpQ });

  const autoFilter = new Tone.AutoFilter({
    frequency:     autoFilterFreq,
    baseFrequency: autoFilterBase,
    octaves:       autoFilterOctaves,
    depth:         autoFilterDepth,
    wet:           autoFilterWet,
  }).start();

  const env = new Tone.AmplitudeEnvelope({
    attack:  fadeIn,
    decay:   0,
    sustain: 1,
    release: 4,
  });

  noise.connect(bp);
  bp.connect(autoFilter);
  autoFilter.connect(env);
  env.connect(output);

  return {
    start() {
      noise.start();
      env.triggerAttack();
    },
    stop() {
      env.triggerRelease();
      setTimeout(() => {
        noise.stop();
        noise.dispose();
        bp.dispose();
        autoFilter.dispose();
        env.dispose();
      }, 5000);
    },
  };
}
