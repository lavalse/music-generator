import * as Tone from 'tone';
import { PRESETS, DEFAULT_PRESET_KEY } from './presets.js';
import { createEffectsChain } from './effects.js';
import { createDroneLayer } from './layers/drone.js';
import { createMelodyLayer } from './layers/melody.js';
import { createNoiseLayer } from './layers/noise.js';
import { createRecorder, startRecording, stopRecording, downloadBlob } from './recorder.js';

// ── UI refs ──────────────────────────────────────────────────────────────────
const btnPlay    = document.getElementById('btn-play');
const btnRec     = document.getElementById('btn-rec');
const btnStopRec = document.getElementById('btn-stop-rec');
const statusEl   = document.getElementById('status');
const recTimer   = document.getElementById('rec-timer');
const vizEl      = document.getElementById('viz');
const presetSelect = document.getElementById('preset-select');

// ── Viz: floating dots appear on each note event ─────────────────────────────
window.addEventListener('note', () => {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = Math.random() * 95 + '%';
  vizEl.appendChild(dot);
  requestAnimationFrame(() => dot.classList.add('show'));
  setTimeout(() => {
    dot.classList.remove('show');
    setTimeout(() => dot.remove(), 2100);
  }, 2000 + Math.random() * 3000);
});

// ── State ─────────────────────────────────────────────────────────────────────
let playing = false;
let drone, melody, noise, effectsChain;
let currentPresetKey = DEFAULT_PRESET_KEY;
let recorderReady = false;

// ── Helpers ───────────────────────────────────────────────────────────────────
function buildAndStart(preset) {
  effectsChain = createEffectsChain(preset.effects);
  const { eq } = effectsChain;
  drone  = createDroneLayer(eq, preset.drone);
  melody = createMelodyLayer(eq, preset.melody);
  noise  = createNoiseLayer(eq, preset.noise);
  drone.start();
  melody.start();
  noise.start();
}

function stopAll() {
  drone.stop();
  melody.stop();
  noise.stop();
  effectsChain.dispose();
}

// ── Play ─────────────────────────────────────────────────────────────────────
btnPlay.addEventListener('click', async () => {
  if (playing) {
    stopAll();
    playing = false;
    btnPlay.textContent = 'Play';
    btnPlay.classList.remove('active');
    btnRec.disabled = true;
    statusEl.textContent = 'stopped';
    return;
  }

  await Tone.start();
  statusEl.textContent = 'initialising reverb…';

  if (!recorderReady) {
    createRecorder();
    recorderReady = true;
  }

  const preset = PRESETS[currentPresetKey];
  buildAndStart(preset);

  playing = true;
  btnPlay.textContent = 'Stop';
  btnPlay.classList.add('active');
  btnRec.disabled = false;
  statusEl.textContent = `generating… [${preset.label}]`;
});

// ── Preset switch ─────────────────────────────────────────────────────────────
presetSelect.addEventListener('change', async () => {
  currentPresetKey = presetSelect.value;
  if (!playing) return;

  const preset = PRESETS[currentPresetKey];
  statusEl.textContent = 'switching…';

  stopAll();
  await new Promise(r => setTimeout(r, 400));

  if (!playing) return; // user stopped during the wait

  buildAndStart(preset);
  statusEl.textContent = `generating… [${preset.label}]`;
});

// ── Record ───────────────────────────────────────────────────────────────────
btnRec.addEventListener('click', async () => {
  btnRec.disabled = true;
  btnStopRec.disabled = false;
  statusEl.textContent = 'recording…';
  await startRecording((label) => { recTimer.textContent = label; });
});

btnStopRec.addEventListener('click', async () => {
  btnStopRec.disabled = true;
  statusEl.textContent = 'encoding…';
  const blob = await stopRecording();
  recTimer.textContent = '';
  if (blob) {
    downloadBlob(blob, `surreal-red-${Date.now()}.webm`);
    statusEl.textContent = 'saved ↓';
  } else {
    statusEl.textContent = 'error saving';
  }
  btnRec.disabled = false;
});
