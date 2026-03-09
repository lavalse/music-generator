import * as Tone from 'tone';

// Uses Tone.Recorder which taps the master output cleanly
let recorder = null;
let timerInterval = null;

export function createRecorder() {
  recorder = new Tone.Recorder();
  // Connect master output to recorder
  Tone.getDestination().connect(recorder);
  return recorder;
}

export async function startRecording(onTick) {
  if (!recorder) throw new Error('Call createRecorder() first');
  await recorder.start();
  const startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const s = String(elapsed % 60).padStart(2, '0');
    onTick(`● REC  ${m}:${s}`);
  }, 1000);
}

export async function stopRecording() {
  clearInterval(timerInterval);
  if (!recorder) return null;
  const blob = await recorder.stop();
  return blob;
}

export function downloadBlob(blob, filename = 'surreal-red.webm') {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
