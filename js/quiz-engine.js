/* ============================================================
   🌸 梦幻数学花园 — 答题引擎（多学科支持）
   自适应难度、随机出题、Combo 系统
   ============================================================ */

const quizEngine = {
  currentQuestion: null,
  combo: 1,
  bestCombo: 0,
  streak: 0,
  questionHistory: [],

  // Boss 战状态
  bossMode: false,
  bossQuestions: [],
  bossIndex: 0,
  bossStartTime: 0,
  bossErrors: 0,

  sessionStats: {
    total: 0,
    correct: 0,
    startTime: null,
  },

  filters: {
    subject: 'math',
    grade: 1,
    semester: 1,
    unit: null,
    difficulty: null,
  },

  // ---------- 获取当前学科的 QUESTIONS 对象 ----------
  _getQuestions() {
    if (this.filters.subject === 'english' && window.ENGLISH_QUESTIONS) {
      return window.ENGLISH_QUESTIONS;
    }
    if (this.filters.subject === 'chinese' && window.CHINESE_QUESTIONS) {
      return window.CHINESE_QUESTIONS;
    }
    return window.QUESTIONS; // 默认 math
  },

  // ---------- 开始新会话 ----------
  startSession(subject, grade, semester, unit = null) {
    this.filters.subject = subject || 'math';
    this.filters.grade = grade;
    this.filters.semester = semester;
    this.filters.unit = unit;
    this.filters.difficulty = null;

    this.combo = 1;
    this.streak = 0;
    this.questionHistory = [];
    this.sessionStats = {
      total: 0,
      correct: 0,
      startTime: Date.now(),
    };

    // 读取 bestCombo
    const Q = this._getQuestions();
    const units = Q.getUnits ? Q.getUnits(grade, semester) : [];
    let best = 0;
    for (const u of units) {
      const p = store.getUnitProgress(subject, grade, semester, u.id);
      if (p && p.bestCombo > best) best = p.bestCombo;
    }
    this.bestCombo = best;
  },

  // ---------- 获取下一题 ----------
  nextQuestion() {
    const Q = this._getQuestions();
    const { subject, grade, semester, unit } = this.filters;

    let pool;
    if (unit && Q.getUnitQuestions) {
      pool = Q.getUnitQuestions(grade, semester, unit);
    } else if (Q.getQuestions) {
      pool = Q.getQuestions(grade, semester);
    } else {
      return null;
    }

    // 注入 subject 字段
    pool = pool.map(q => ({ ...q, subject }));

    if (pool.length === 0) return null;

    // 调整目标难度
    const total = this.sessionStats.total;
    let targetDifficulty = 1;
    if (total >= 3) {
      const rate = this.sessionStats.correct / total;
      if (rate > 0.85 && this.combo >= 3) targetDifficulty = 3;
      else if (rate > 0.7) targetDifficulty = 2;
      else targetDifficulty = 1;
    }
    this.filters.difficulty = targetDifficulty;

    // 按难度 + 未出过的题过滤
    let candidates = pool.filter(q => {
      if (this.filters.difficulty && q.difficulty !== targetDifficulty) return false;
      if (this.questionHistory.includes(q.id)) return false;
      return true;
    });
    if (candidates.length === 0) {
      candidates = pool.filter(q => !this.questionHistory.includes(q.id));
    }
    if (candidates.length === 0) {
      candidates = pool;
    }

    // 自适应：优先弱点单元
    if (!unit && store.get('settings').adaptiveLearning) {
      var priorityUnit = this._getAdaptivePriority();
      if (priorityUnit && Q.getUnitQuestions) {
        var priorityPool = Q.getUnitQuestions(grade, semester, priorityUnit);
        if (priorityPool.length > 0) {
          var filtered = priorityPool.filter(function(q) { return !mistakeIds.has(q.id); });
          if (filtered.length >= 2) candidates = filtered.map(function(q) { return { ...q, subject: subject }; });
        }
      }
    }

    // 错题优先
    const mistakes = store.getMistakesBySubject(subject);
    const mistakeIds = new Set(mistakes.map(m => m.questionId));
    const mistakePool = candidates.filter(q => mistakeIds.has(q.id));
    const source = mistakePool.length >= 3 ? mistakePool : candidates;

    const shuffled = [...source].sort(() => Math.random() - 0.5);
    const picked = shuffled[0];
    if (!picked) return null;

    this.questionHistory.push(picked.id);
    if (this.questionHistory.length > 30) this.questionHistory.shift();

    const question = { ...picked, grade, semester };
    if (!question.options || question.options.length < 2) {
      question.options = this._generateOptions(question);
    } else {
      question.options = [...question.options].sort(() => Math.random() - 0.5);
    }

    this.currentQuestion = question;
    return question;
  },

  // ---------- 生成选项（针对不同题型） ----------
  _generateOptions(question) {
    const correct = question.answer;
    const options = new Set([correct]);

    if (question.type === 'comparison') {
      ['>', '<', '='].forEach(o => options.add(o));
    } else if (question.type === 'pinyin') {
      // 拼音题：已自带选项，不生成
      return [correct];
    } else {
      const num = typeof correct === 'number' ? correct : parseInt(correct);
      if (!isNaN(num)) {
        const offsets = [1, -1, 2, -2, 5, -5, 10, -10];
        for (const d of offsets) {
          const v = num + d;
          if (v !== correct && v >= 0) options.add(v);
          if (options.size >= 6) break;
        }
      }
      while (options.size < 4) {
        const r = Math.floor(Math.random() * 20) + 1;
        if (r !== correct) options.add(r);
      }
    }
    return [...options].sort(() => Math.random() - 0.5);
  },

  // ---------- 提交答案 ----------
  submitAnswer(selected) {
    const q = this.currentQuestion;
    if (!q) return null;

    const correct = String(q.answer) === String(selected);
    this.sessionStats.total++;
    this.sessionStats.correct += correct ? 1 : 0;

    if (correct) {
      this.streak++;
      this.combo = Math.floor(this.streak / 2) + 1;
      if (this.combo > this.bestCombo) this.bestCombo = this.combo;
    } else {
      this.streak = 0;
      this.combo = 1;
    }

    const diffMul = q.difficulty || 1;
    const comboBonus = correct ? Math.floor(10 * (this.combo - 1) * 0.5) : 0;
    const totalCoins = correct ? (10 + comboBonus) * diffMul : 0;
    const totalExp = correct ? (15 + comboBonus) * diffMul : 2;

    if (correct) {
      store.addCoins(totalCoins);
      if (this.combo >= 5) store.addStars(1);
      const leveledUp = store.addExp(totalExp);
      if (leveledUp) setTimeout(() => app.showLevelUp(), 600);
    }

    store.recordAnswer(q, correct, this.combo);

    if (!correct) {
      store.addMistake(q, selected);
    } else {
      store.removeMistake(q.id, q.subject);
    }

    // 更新复习卡片
    store.updateReview(q, correct);

    this._updateAchievements(correct);

    return {
      correct,
      correctAnswer: q.answer,
      coinsEarned: totalCoins,
      expEarned: correct ? totalExp : 2,
      combo: this.combo,
      starBonus: correct && this.combo >= 5 ? 1 : 0,
    };
  },

  // ---------- Boss 战 ----------
  startBossBattle(subject, grade, semester, unit) {
    this.filters.subject = subject;
    this.filters.grade = grade;
    this.filters.semester = semester;
    this.filters.unit = unit;

    this.bossMode = true;
    this.bossIndex = 0;
    this.bossErrors = 0;
    this.bossStartTime = Date.now();
    this.combo = 1;
    this.streak = 0;
    this.sessionStats = { total: 0, correct: 0, startTime: Date.now() };

    var Q = this._getQuestions();
    var pool = [];
    if (unit && Q.getUnitQuestions) {
      pool = Q.getUnitQuestions(grade, semester, unit);
    } else {
      pool = Q.getQuestions(grade, semester);
    }

    // 随机选 5 题，尽量选不同难度
    var shuffled = [...pool].sort(function() { return Math.random() - 0.5; });
    this.bossQuestions = shuffled.slice(0, Math.min(5, shuffled.length));
    if (this.bossQuestions.length < 3) {
      // 题目不够，补一些
      this.bossQuestions = shuffled;
    }
    // 打乱选项
    for (var q of this.bossQuestions) {
      if (q.options) q.options = [...q.options].sort(function() { return Math.random() - 0.5; });
    }
    return this.bossQuestions.length;
  },

  getBossQuestion() {
    if (this.bossIndex >= this.bossQuestions.length) return null;
    var q = { ...this.bossQuestions[this.bossIndex], grade: this.filters.grade, semester: this.filters.semester, subject: this.filters.subject };
    if (!q.options || q.options.length < 2) {
      q.options = this._generateOptions(q);
    } else {
      q.options = [...q.options].sort(function() { return Math.random() - 0.5; });
    }
    this.currentQuestion = q;
    return q;
  },

  submitBossAnswer(selected) {
    var q = this.currentQuestion;
    if (!q) return null;
    var correct = String(q.answer) === String(selected);
    this.sessionStats.total++;
    if (correct) this.sessionStats.correct++;
    else this.bossErrors++;
    if (!correct) this.bossIndex = Math.min(this.bossIndex + 1, this.bossQuestions.length);
    else this.bossIndex++;

    // 记录掌握度
    store.recordMastery(this.filters.subject, q.id, this.filters.unit, correct);

    return {
      correct: correct,
      correctAnswer: q.answer,
      isDone: this.bossIndex >= this.bossQuestions.length,
      totalErrors: this.bossErrors,
      totalQuestions: this.bossQuestions.length,
      allCorrect: this.bossErrors === 0 && this.bossIndex >= this.bossQuestions.length,
    };
  },

  calcBossStars() {
    if (this.bossErrors > 0) return 0;
    var elapsed = Date.now() - this.bossStartTime;
    // <30s = 3星, <60s = 2星, >=60s = 1星
    if (elapsed < 30000) return 3;
    if (elapsed < 60000) return 2;
    return 1;
  },

  // ---------- 自适应学习 ----------
  _getAdaptivePriority() {
    if (!store.get('settings').adaptiveLearning) return null;
    var weak = store.getWeakAreas(this.filters.subject, this.filters.grade, this.filters.semester);
    if (weak.length === 0) return null;
    // 选最弱的单元
    return weak[0].unit;
  },
  _updateAchievements(correct) {
    const prog = store.get('achievementProgress') || {};
    prog.totalCorrect = (prog.totalCorrect || 0) + (correct ? 1 : 0);
    prog.totalAnswered = (prog.totalAnswered || 0) + 1;
    prog.bestCombo = Math.max(prog.bestCombo || 0, this.bestCombo);
    store.set('achievementProgress', prog);
    store.checkAchievements();
  },

  // ---------- 获取单元列表（学科感知） ----------
  getAvailableUnits(grade, semester) {
    const Q = this._getQuestions();
    const units = Q.getUnits ? Q.getUnits(grade, semester) : [];
    return units.map(u => u.id);
  },

  getUnitName(grade, semester, unitId) {
    const Q = this._getQuestions();
    const units = Q.getUnits ? Q.getUnits(grade, semester) : [];
    const unit = units.find(u => u.id === unitId);
    return unit ? `${unit.icon || '📚'} ${unit.name}` : `单元 ${unitId}`;
  },

  getUnitIcon(grade, semester, unitId) {
    const Q = this._getQuestions();
    const units = Q.getUnits ? Q.getUnits(grade, semester) : [];
    const unit = units.find(u => u.id === unitId);
    return unit ? (unit.icon || '📚') : '📚';
  },
};
