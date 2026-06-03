/* ============================================================
   🌸 梦幻数学花园 — 状态管理 & localStorage 持久化
   支持多学科（math / chinese）
   ============================================================ */

const STORE_KEY = 'magic_garden_save';

// ---------- 默认初始状态 ----------
function getDefaultState() {
  return {
    level: 1,
    exp: 0,
    coins: 100,
    stars: 0,

    // 当前学科 / 年级 / 学期
    currentSubject: 'math',
    currentGrade: 1,
    currentSemester: 1,

    // 单元进度: { "subject-grade-semester-unit": { correct, total, bestCombo, lastPracticed } }
    unitProgress: {},

    // 错题集: [{ subject, questionId, grade, semester, unit, question, correctAnswer, wrongAnswer, count }]
    mistakes: [],

    // 花园
    garden: {
      width: 8, height: 6,
      tiles: [],
      decorations: [],
      expansions: 0,
    },

    inventory: {},

    unlockedRegions: ['main'],

    achievements: [],
    achievementProgress: {},

    lastLoginDate: '',
    dailyStreak: 0,
    dailyAnswered: 0,
    lastDailyReset: '',

    // 复习卡片
    reviewCards: [],

    settings: {
      maxDailyMinutes: 30,
      soundEnabled: true,
      timerEnabled: false,
      timerSeconds: 30,
    },
  };
}

const SUBJECTS = ['math', 'chinese', 'english'];

// ---------- 构建学科前缀的单元 key ----------
function unitKey(subject, grade, semester, unitId) {
  return `${subject}-${grade}-${semester}-${unitId || 'all'}`;
}

// ---------- Store ----------
const store = {
  _state: null,

  init() {
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this._state = this._mergeDefaults(parsed, getDefaultState());
        this._migrateOldData();
      } else {
        this._state = getDefaultState();
      }
    } catch (e) {
      console.warn('读取存档失败，使用新存档', e);
      this._state = getDefaultState();
    }

    // 确保 currentSubject 有效
    if (!SUBJECTS.includes(this._state.currentSubject)) {
      this._state.currentSubject = 'math';
    }

    this._checkDailyReset();
    this._save();
  },

  // 合并默认值
  _mergeDefaults(saved, defaults) {
    const result = { ...defaults };
    for (const key of Object.keys(saved)) {
      if (key === 'garden' && saved.garden) {
        result.garden = { ...defaults.garden, ...saved.garden };
        result.garden.tiles = saved.garden.tiles || [];
        result.garden.decorations = saved.garden.decorations || [];
        result.garden.expansions = saved.garden.expansions || 0;
      } else if (key === 'settings' && saved.settings) {
        result.settings = { ...defaults.settings, ...saved.settings };
      } else if (key === 'unitProgress' && saved.unitProgress) {
        result.unitProgress = { ...defaults.unitProgress, ...saved.unitProgress };
      } else if (key === 'inventory' && saved.inventory) {
        result.inventory = { ...defaults.inventory, ...saved.inventory };
      } else if (saved[key] !== undefined) {
        result[key] = saved[key];
      }
    }
    return result;
  },

  // 迁移旧数据（v1 → v2，增加 subject 前缀）
  _migrateOldData() {
    const prog = this._state.unitProgress;
    let migrated = false;

    for (const key of Object.keys(prog)) {
      // 旧格式: "1-1-1-1" → 新格式: "math-1-1-1-1"
      if (!SUBJECTS.some(s => key.startsWith(s + '-'))) {
        prog['math-' + key] = prog[key];
        delete prog[key];
        migrated = true;
      }
    }

    // 迁移错题
    for (const m of this._state.mistakes) {
      if (!m.subject) {
        m.subject = 'math';
        migrated = true;
      }
    }

    if (migrated) {
      console.log('存档已自动迁移到多学科格式');
    }
  },

  // 每日重置
  _checkDailyReset() {
    const today = new Date().toISOString().split('T')[0];
    if (this._state.lastDailyReset !== today) {
      this._state.dailyAnswered = 0;
      this._state.lastDailyReset = today;

      if (this._state.lastLoginDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        this._state.dailyStreak = (this._state.lastLoginDate === yesterday)
          ? this._state.dailyStreak + 1 : 1;
        this._state.lastLoginDate = today;
        this._state.dailyAnswered = 0;

        const bonus = 10 + Math.min(this._state.dailyStreak * 2, 30);
        this.addCoins(bonus);
        setTimeout(() => {
          store.showToast(`🎉 签到成功！连续 ${this._state.dailyStreak} 天，获得 ${bonus} 阳光币`, 'success');
        }, 500);
      }
    }
  },

  // ----- 读取器 -----
  get state() { return this._state; },
  get: function(key) { return this._state[key]; },

  set: function(key, value) {
    this._state[key] = value;
    this._save();
  },

  update(key, fn) {
    this._state[key] = fn(this._state[key]);
    this._save();
  },

  _save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(this._state));
    } catch (e) {
      console.warn('存档保存失败', e);
    }
  },

  // ----- 金币 / 星星 / 经验 -----
  addCoins(amount) {
    this._state.coins = Math.max(0, this._state.coins + amount);
    this._save();
    this._updateUI();
  },

  addStars(amount) {
    this._state.stars = Math.max(0, this._state.stars + amount);
    this._save();
    this._updateUI();
  },

  addExp(amount) {
    this._state.exp += amount;
    const expNeeded = this._expForLevel(this._state.level);
    if (this._state.exp >= expNeeded) {
      this._state.exp -= expNeeded;
      this._state.level++;
      this._save();
      this._updateUI();
      this.showToast(`🎊 升级啦！达到 Lv.${this._state.level}`, 'success');
      return true;
    }
    this._save();
    this._updateUI();
    return false;
  },

  _expForLevel(level) {
    return Math.floor(120 * Math.pow(1.35, level - 1));
  },

  getExpProgress() {
    const c = this._state.exp;
    const n = this._expForLevel(this._state.level);
    return { current: c, needed: n, ratio: c / n };
  },

  // ----- 背包 -----
  addItem(itemId, count = 1) {
    const inv = this._state.inventory;
    inv[itemId] = (inv[itemId] || 0) + count;
    this._save();
  },

  removeItem(itemId, count = 1) {
    const inv = this._state.inventory;
    if (!inv[itemId] || inv[itemId] < count) return false;
    inv[itemId] -= count;
    if (inv[itemId] <= 0) delete inv[itemId];
    this._save();
    return true;
  },

  hasItem(itemId, count = 1) {
    return (this._state.inventory[itemId] || 0) >= count;
  },

  // ----- 花园扩展 -----
  getGardenSize() {
    const g = this._state.garden;
    const e = g.expansions || 0;
    return {
      width: Math.min(8 + e * 2, 20),
      height: Math.min(6 + e, 12),
      expansions: e,
    };
  },

  getGardenExpansionCost() {
    const e = this._state.garden.expansions || 0;
    return Math.floor(200 * Math.pow(1.1, e));
  },

  getGardenExpansionLevelReq() {
    const e = this._state.garden.expansions || 0;
    return 2 + e * 2; // 第1次扩展需2级，第2次需4级，第3次需6级...
  },

  expandGarden() {
    const level = this._state.level;
    const e = this._state.garden.expansions || 0;
    const levelReq = this.getGardenExpansionLevelReq();
    if (level < levelReq) return { ok: false, msg: `需要 ${levelReq} 级才能扩展` };

    const cost = this.getGardenExpansionCost();
    if (this._state.coins < cost) return { ok: false, msg: `需要 ${cost} 阳光币` };

    this._state.coins -= cost;
    this._state.garden.expansions = e + 1;
    this._save();
    this._updateUI();
    return { ok: true, msg: '🎉 花园扩展成功！', size: this.getGardenSize() };
  },

  // ----- 答题记录（学科感知） -----
  recordAnswer(question, correct) {
    const subject = question.subject || this._state.currentSubject || 'math';
    const key = unitKey(subject, question.grade, question.semester, question.unit);
    const prog = this._state.unitProgress;
    if (!prog[key]) {
      prog[key] = { correct: 0, total: 0, bestCombo: 0, lastPracticed: '' };
    }
    prog[key].total++;
    if (correct) prog[key].correct++;
    prog[key].lastPracticed = new Date().toISOString().split('T')[0];

    this._state.dailyAnswered++;
    this._save();
    this._updateUI();
  },

  addMistake(question, wrongAnswer) {
    const subject = question.subject || this._state.currentSubject || 'math';
    const existing = this._state.mistakes.find(
      m => m.questionId === question.id && m.subject === subject
    );
    if (existing) {
      existing.count++;
    } else {
      this._state.mistakes.push({
        subject,
        questionId: question.id,
        grade: question.grade,
        semester: question.semester,
        unit: question.unit,
        question: question.question,
        correctAnswer: question.answer,
        wrongAnswer,
        count: 1,
      });
    }
    // 加入复习队列
    this.scheduleReview(question);

    if (this._state.mistakes.length > 100) {
      this._state.mistakes.sort((a, b) => a.count - b.count);
      this._state.mistakes.shift();
    }
    this._save();
  },

  removeMistake(questionId) {
    this._state.mistakes = this._state.mistakes.filter(m => m.questionId !== questionId);
    this._save();
  },

  // ----- 复习卡片系统（SM-2算法） -----

  // 添加一张卡片到复习队列
  scheduleReview(question) {
    const subject = question.subject || this._state.currentSubject || 'math';
    const existing = this._state.reviewCards.find(
      c => c.questionId === question.id && c.subject === subject
    );
    if (existing) return existing;

    const card = {
      subject,
      questionId: question.id,
      grade: question.grade,
      semester: question.semester,
      unit: question.unit,
      ease: 2.5,
      interval: 0,
      nextReview: '',
      lastReview: '',
      correctCount: 0,
    };

    // 新卡片：明天复习
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    card.nextReview = tomorrow;

    this._state.reviewCards.push(card);
    this._save();
    return card;
  },

  // 获取今天到期的复习卡片
  getDueReviews(subject) {
    const today = new Date().toISOString().split('T')[0];
    return this._state.reviewCards.filter(c => {
      if (subject && c.subject !== subject) return false;
      return c.nextReview && c.nextReview <= today;
    });
  },

  // 更新复习卡片（SM-2）
  updateReview(question, correct) {
    const subject = question.subject || this._state.currentSubject || 'math';
    const card = this._state.reviewCards.find(
      c => c.questionId === question.id && c.subject === subject
    );
    if (!card) return;

    const today = new Date().toISOString().split('T')[0];
    card.lastReview = today;

    if (correct) {
      card.correctCount++;
      if (card.correctCount === 1) card.interval = 1;
      else if (card.correctCount === 2) card.interval = 3;
      else if (card.correctCount === 3) card.interval = 7;
      else if (card.correctCount === 4) card.interval = 15;
      else card.interval = Math.min(card.interval * 2, 180);
      card.ease = Math.min(card.ease + 0.1, 3.0);
    } else {
      card.correctCount = 0;
      card.interval = 1;
      card.ease = Math.max(card.ease - 0.2, 1.3);
    }

    const next = new Date(Date.now() + card.interval * 86400000);
    card.nextReview = next.toISOString().split('T')[0];
    this._save();
  },

  // 获取今日复习统计
  getReviewStats(subject) {
    const today = new Date().toISOString().split('T')[0];
    const cards = subject
      ? this._state.reviewCards.filter(c => c.subject === subject)
      : this._state.reviewCards;

    const due = cards.filter(c => c.nextReview <= today).length;
    const reviewed = cards.filter(c => c.lastReview === today).length;
    const total = cards.length;

    return { due, reviewed, total, streak: this._getReviewStreak() };
  },

  _getReviewStreak() {
    let streak = 0;
    const d = new Date();
    while (true) {
      const dateStr = d.toISOString().split('T')[0];
      const reviewed = this._state.reviewCards.some(c => c.lastReview === dateStr);
      if (!reviewed) break;
      streak++;
      d.setDate(d.getDate() - 1);
    }
    return streak;
  },

  // ----- 学科相关的便捷方法 -----
  getUnitProgress(subject, grade, semester, unitId) {
    const key = unitKey(subject, grade, semester, unitId);
    return this._state.unitProgress[key];
  },

  getAllUnitProgress(subject, grade, semester) {
    const prefix = `${subject}-${grade}-${semester}-`;
    const result = {};
    for (const [key, val] of Object.entries(this._state.unitProgress)) {
      if (key.startsWith(prefix)) {
        result[key] = val;
      }
    }
    return result;
  },

  getMistakesBySubject(subject) {
    return this._state.mistakes.filter(m => m.subject === subject);
  },

  // ----- UI 更新 -----
  _updateUI() {
    const coinEl = document.getElementById('coin-count');
    const starEl = document.getElementById('star-count');
    const levelEl = document.getElementById('stat-level');
    if (coinEl) coinEl.textContent = this._state.coins;
    if (starEl) starEl.textContent = this._state.stars;
    if (levelEl) levelEl.textContent = `🏅 Lv.${this._state.level}`;
  },

  // ----- 提示 -----
  showToast(message, type = '') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const el = document.createElement('div');
    el.className = `toast ${type ? 'toast-' + type : ''}`;
    el.textContent = message;
    container.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  },

  resetAll() {
    localStorage.removeItem(STORE_KEY);
    this._state = getDefaultState();
    this._save();
    window.location.reload();
  },

  // 获取当前有效的学科列表
  getSubjects() {
    return SUBJECTS.filter(s => {
      // 有题目的学科才显示
      if (s === 'math') return true || window.QUESTIONS?.getQuestions?.(1,1)?.length > 0;
      if (s === 'chinese') return typeof window.CHINESE_QUESTIONS !== 'undefined';
      return true;
    });
  },
};

document.addEventListener('DOMContentLoaded', () => store.init());
