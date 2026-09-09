// Procedural Cinematic Web Audio Synthesizer
// Generates zero-bandwidth real-time spatial audio effects without external files

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true; // Default to muted for seamless browsing, easily toggled by user
    this.ambientNodes = null;
    this.masterGain = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.7, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.linearRampToValueAtTime(muted ? 0 : 0.7, now + 0.15);
    }
    if (!muted && !this.ambientNodes) {
      this.startAmbient();
    }
  }

  toggleMute() {
    this.init();
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  // Futuristic gentle holographic hover sound
  playHover() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(850, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.05);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch {
      // Ignore audio interruptions
    }
  }

  // Crisp mechanical tactile cyber click
  playClick() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.08);

      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch {
      // Ignore audio interruptions
    }
  }

  // Ascending cyber chime for form submit or modal open
  playSuccess() {
    if (this.isMuted || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, index) => {
        const startTime = this.ctx.currentTime + index * 0.06;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.04, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.25);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(startTime);
        osc.stop(startTime + 0.26);
      });
    } catch {
      // Ignore audio interruptions
    }
  }

  // Ambient sci-fi space drone (hypnotic, calming, subtle)
  startAmbient() {
    if (!this.ctx || this.ambientNodes) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const ambientGain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, now); // A1 note

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(110, now); // A2 note

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, now);

      ambientGain.gain.setValueAtTime(0.001, now);
      ambientGain.gain.linearRampToValueAtTime(0.018, now + 3);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(ambientGain);
      ambientGain.connect(this.masterGain);

      osc1.start(now);
      osc2.start(now);

      this.ambientNodes = { osc1, osc2, filter, ambientGain };
    } catch {
      // Ignore audio interruptions
    }
  }

  stopAmbient() {
    if (this.ambientNodes && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.ambientNodes.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 0.5);
        setTimeout(() => {
          if (this.ambientNodes) {
            this.ambientNodes.osc1.stop();
            this.ambientNodes.osc2.stop();
            this.ambientNodes.ambientGain.disconnect();
            this.ambientNodes = null;
          }
        }, 600);
      } catch {
        this.ambientNodes = null;
      }
    }
  }
}

export const sound = new SoundEngine();
