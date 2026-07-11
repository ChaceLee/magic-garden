/* ============================================================
   🌸 梦幻数学花园 — 简易音效系统
   使用 Web Audio API 生成简单音效，无需外部文件
   ============================================================ */

const sound = {
  _ctx: null,

  _getContext() {
    if (!this._ctx) {
      try {
        this._ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        return null;
      }
    }
    return this._ctx;
  },

  // Auto-resume AudioContext on first user gesture (required for Chrome/iOS)
  resumeOnInteraction() {
    const ctx = this._getContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
  },

  // 答对音效 — 欢乐上升音阶
  correct() {
    if (!store.get('settings').soundEnabled) return;
    const ctx = this._getContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.3);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.3);
    });
  },

  // 答错音效 — 低沉短促
  wrong() {
    if (!store.get('settings').soundEnabled) return;
    const ctx = this._getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 200;
    osc.type = 'sawtooth';
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  },

  // Combo 音效
  combo(level) {
    if (!store.get('settings').soundEnabled) return;
    const ctx = this._getContext();
    if (!ctx) return;

    const baseFreq = 400 + level * 50;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = baseFreq;
    osc.type = 'triangle';
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  },

  // 升级音效 — 欢快上升
  levelUp() {
    if (!store.get('settings').soundEnabled) return;
    const ctx = this._getContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.12 + 0.4);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.4);
    });
  },

  // 购买音效
  purchase() {
    if (!store.get('settings').soundEnabled) return;
    const ctx = this._getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 800;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  },

  // 按钮点击
  click() {
    if (!store.get('settings').soundEnabled) return;
    const ctx = this._getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 1000;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  },
};
