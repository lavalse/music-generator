import * as Tone from 'tone';

// Shared effects chain: all layers route through this
export function createEffectsChain(cfg = {}) {
  const eqCfg  = cfg.eq       ?? {};
  const lpCfg  = cfg.lpFilter ?? {};
  const dlyCfg = cfg.delay    ?? {};
  const rvbCfg = cfg.reverb   ?? {};

  const eq = new Tone.EQ3({
    low:           eqCfg.low           ?? 3,
    mid:           eqCfg.mid           ?? -4,
    high:          eqCfg.high          ?? -12,
    lowFrequency:  eqCfg.lowFrequency  ?? 250,
    highFrequency: eqCfg.highFrequency ?? 3500,
  });

  const lpFilter = new Tone.Filter({
    frequency: lpCfg.frequency ?? 4000,
    type:      'lowpass',
    rolloff:   lpCfg.rolloff   ?? -24,
  });

  const delay = new Tone.FeedbackDelay({
    delayTime: dlyCfg.delayTime ?? 0.37,
    feedback:  dlyCfg.feedback  ?? 0.25,
    wet:       dlyCfg.wet       ?? 0.18,
  });

  const reverb = new Tone.Reverb({
    decay:    rvbCfg.decay    ?? 18,
    wet:      rvbCfg.wet      ?? 0.85,
    preDelay: rvbCfg.preDelay ?? 0.12,
  });

  const limiter = new Tone.Limiter(-6);

  // chain: eq → lpFilter → delay → reverb → limiter → destination
  eq.connect(lpFilter);
  lpFilter.connect(delay);
  delay.connect(reverb);
  reverb.connect(limiter);
  limiter.toDestination();

  return {
    eq, lpFilter, delay, reverb, limiter,
    dispose() {
      eq.dispose();
      lpFilter.dispose();
      delay.dispose();
      reverb.dispose();
      limiter.dispose();
    },
  };
}
