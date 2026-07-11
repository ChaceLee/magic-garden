/* ============================================================
   🌸 梦幻数学花园 — 答题界面（多学科）
   学科切换、年级/单元选择、题目卡片、动画反馈、Combo
   ============================================================ */

const quiz = {
  isAnswered: false,
  selectedOption: null,
  timerInterval: null,
  timeLeft: 30,
  reviewMode: false,
  reviewCards: [],
  reviewIndex: 0,
  reviewResults: { correct: 0, total: 0 },

  // Lazy-loaded subjects tracker
  _loadedSubjects: { math: true }, // math is loaded by default in index.html
  _loadingSubject: null,
  _loadRetries: 0,

  // Dynamically load a subject question file
  _loadSubjectData(subject) {
    if (this._loadedSubjects[subject]) return true;
    if (this._loadingSubject === subject) return false; // already loading

    const fileMap = {
      chinese: 'js/questions-chinese.js',
      english: 'js/questions-english.js'
    };
    const src = fileMap[subject];
    if (!src) return true;

    this._loadingSubject = subject;
    this._loadRetries = 0;

    // Show loading indicator
    const area = document.getElementById('question-area');
    if (area) {
      area.innerHTML = '<div class="question-placeholder"><div class="placeholder-icon">⏳</div><p>加载题目数据中...</p></div>';
    }

    return false; // not loaded yet
  },

  _loadSubjectScript(subject, callback) {
    const fileMap = {
      chinese: 'js/questions-chinese.js',
      english: 'js/questions-english.js'
    };
    const src = fileMap[subject];
    if (!src) { callback(); return; }

    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      this._loadedSubjects[subject] = true;
      this._loadingSubject = null;
      this._loadRetries = 0;
      // Verify the global is set
      const globalKey = subject === 'chinese' ? 'CHINESE_QUESTIONS' : 'ENGLISH_QUESTIONS';
      if (!window[globalKey]) {
        console.warn('Subject data not found after load:', subject);
      }
      callback();
    };
    script.onerror = () => {
      this._loadRetries++;
      if (this._loadRetries < 3) {
        console.warn('Retrying subject load:', subject, this._loadRetries);
        setTimeout(() => this._loadSubjectScript(subject, callback), 1000);
      } else {
        this._loadingSubject = null;
        store.showToast('加载失败，请检查网络连接', 'error');
        callback();
      }
    };
    document.body.appendChild(script);
  },

  // ---------- 获取当前学科显示名 ----------
  _subjectLabel(subject) {
    if (subject === 'chinese') return '📝 语文';
    if (subject === 'english') return '🔤 英语';
    return '🔢 数学';
  },

  // ---------- 渲染主界面 ----------
  render() {
    const container = document.getElementById('quiz-screen');
    const s = store.state;
    const subject = s.currentSubject;

    container.innerHTML = `
      <div class="quiz-layout">
        <!-- 学科切换 -->
        <div class="subject-selector">
          <button class="subject-btn ${subject === 'math' ? 'active' : ''}"
                  onclick="quiz.selectSubject('math')">🔢 数学</button>
          <button class="subject-btn ${subject === 'chinese' ? 'active' : ''}"
                  onclick="quiz.selectSubject('chinese')">📝 语文</button>
          <button class="subject-btn ${subject === 'english' ? 'active' : ''}"
                  onclick="quiz.selectSubject('english')">🔤 英语</button>
        </div>

        <!-- 年级选择器 -->
        <div class="grade-selector">
          ${[1,2,3,4,5,6].map(g => `
            <button class="grade-btn ${s.currentGrade === g ? 'active' : ''}"
                    onclick="quiz.selectGrade(${g})">🏫 ${['一','二','三','四','五','六'][g-1]}年级</button>
          `).join('')}
        </div>

        <!-- 学期选择器 -->
        <div class="semester-selector">
          <button class="sem-btn ${s.currentSemester === 1 ? 'active' : ''}"
                  onclick="quiz.selectSemester(1)">📖 上册</button>
          <button class="sem-btn ${s.currentSemester === 2 ? 'active' : ''}"
                  onclick="quiz.selectSemester(2)">📖 下册</button>
        </div>

        <!-- 今日目标 -->
        <div class="daily-goal" id="daily-goal"></div>

        <!-- 复习入口 -->
        <div class="review-entry" id="review-entry"></div>

        <!-- 单元选择 -->
        <div class="unit-selector" id="unit-selector"></div>

        <!-- 学习进度概览 -->
        <div class="quiz-progress-bar">
          <div class="progress-label">
            <span>📊 本单元进度</span>
            <span id="unit-progress-text">0/0</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" id="unit-progress-fill" style="width:0%"></div>
          </div>
        </div>

        <!-- Combo 显示 -->
        <div class="combo-display" id="combo-display">
          <span class="combo-fire">🔥</span>
          <span class="combo-count" id="combo-count">x1</span>
        </div>

        <!-- 题目卡片容器 -->
        <div id="question-area" class="question-area">
          <div class="question-placeholder">
            <div class="placeholder-icon">🌸</div>
            <p>选择单元，开始答题吧！</p>
            <button class="btn btn-primary btn-lg mt-16" onclick="quiz.startQuiz()">
              🚀 开始答题
            </button>
          </div>
        </div>

        <!-- 会话统计 -->
        <div class="session-stats" id="session-stats" style="display:none">
          <span>✅ 答对 <strong id="stat-correct">0</strong></span>
          <span>📝 共 <strong id="stat-total">0</strong> 题</span>
          <span>🎯 正确率 <strong id="stat-rate">0%</strong></span>
        </div>

        <!-- 快速保存 -->
        <div class="quick-save">
          <button class="btn btn-sm" style="background:var(--color-secondary);color:white;border:none;width:100%"
                  onclick="cloudSave.save()">💾 保存进度</button>
        </div>
      </div>
    `;

    this.renderUnitSelector();
    this.updateProgress();
    this.renderDailyGoal();
    this.renderReviewEntry();
  },

  // ---------- 学科切换 ----------
  selectSubject(subject) {
    if (this._loadingSubject === subject) return; // already loading this subject
    store.set('currentSubject', subject);
    quizEngine.filters.subject = subject;
    quizEngine.filters.unit = null;

    // Lazy-load question data if not already cached
    if (!this._loadedSubjects[subject]) {
      const _this = this;
      this._loadSubjectData(subject);
      this._loadSubjectScript(subject, () => {
        _this.render();
      });
    } else {
      this.render();
    }
  },

  // ---------- 单元选择器 ----------
  renderUnitSelector() {
    const s = store.state;
    const units = quizEngine.getAvailableUnits(s.currentGrade, s.currentSemester);
    const container = document.getElementById('unit-selector');
    const selectedUnit = quizEngine.filters.unit;

    container.innerHTML = `
      <button class="unit-btn ${selectedUnit === null ? 'active' : ''}"
              onclick="quiz.selectUnit(null)">📚 全部</button>
      ${units.map(u => `
        <button class="unit-btn ${selectedUnit === u ? 'active' : ''}"
                onclick="quiz.selectUnit('${u}')">
          ${quizEngine.getUnitName(s.currentGrade, s.currentSemester, u)}
        </button>
      `).join('')}
    `;
  },

  // ---------- 年级 / 学期 / 单元 ----------
  selectGrade(grade) {
    store.set('currentGrade', grade);
    quizEngine.filters.unit = null;
    this.render();
  },

  selectSemester(semester) {
    store.set('currentSemester', semester);
    quizEngine.filters.unit = null;
    this.render();
  },

  selectUnit(unit) {
    quizEngine.filters.unit = unit;
    this.renderUnitSelector();
    this.updateProgress();
  },

  // ---------- 进度条（学科感知） ----------
  updateProgress() {
    const s = store.state;
    const subject = s.currentSubject;
    const unit = quizEngine.filters.unit;
    const allProg = store.get('unitProgress');

    let totalCorrect = 0, totalTotal = 0;

    if (unit) {
      const p = store.getUnitProgress(subject, s.currentGrade, s.currentSemester, unit);
      if (p) { totalCorrect = p.correct; totalTotal = p.total; }
    } else {
      const perSubject = store.getAllUnitProgress(subject, s.currentGrade, s.currentSemester);
      for (const p of Object.values(perSubject)) {
        totalCorrect += p.correct;
        totalTotal += p.total;
      }
    }

    const el = document.getElementById('unit-progress-text');
    const fill = document.getElementById('unit-progress-fill');
    if (el) el.textContent = totalTotal > 0 ? `${totalCorrect}/${totalTotal}` : '0/0';
    if (fill) fill.style.width = totalTotal > 0 ? `${(totalCorrect / totalTotal) * 100}%` : '0%';
  },

  // ---------- 开始答题 ----------
  startQuiz() {
    const s = store.state;
    quizEngine.startSession(
      s.currentSubject,
      s.currentGrade,
      s.currentSemester,
      quizEngine.filters.unit
    );
    this.isAnswered = false;
    document.getElementById('session-stats').style.display = 'flex';
    this.showNextQuestion();
  },

  // ---------- 显示下一题 ----------
  showNextQuestion() {
    const q = quizEngine.nextQuestion();
    if (!q) {
      this.showNoMoreQuestions();
      return;
    }

    this.isAnswered = false;
    this.selectedOption = null;
    this.updateCombo();

    const area = document.getElementById('question-area');
    const timerEnabled = store.get('settings').timerEnabled;

    area.innerHTML = `
      <div class="question-card animate-in">
        ${timerEnabled ? `
          <div class="timer-bar">
            <div class="timer-fill" id="timer-fill"></div>
            <span class="timer-text" id="timer-text">${store.get('settings').timerSeconds}s</span>
          </div>
        ` : ''}
        <div class="question-difficulty">
          ${'⭐'.repeat(q.difficulty || 1)}
        </div>
        <div class="question-text">${q.question}</div>
        <div class="question-visual" id="question-visual"></div>
        <div class="options-grid" id="options-grid">
          ${q.options.map((opt, i) => `
            <button class="option-btn" data-opt="${opt}" onclick="quiz.selectOption(this, '${opt}')">
              <span class="option-label">${String.fromCharCode(65 + i)}</span>
              <span class="option-value">${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="question-feedback" id="question-feedback"></div>
        <button class="btn btn-primary btn-block mt-16 next-btn hidden" id="next-btn"
                onclick="quiz.showNextQuestion()">
          ➡️ 下一题
        </button>
      </div>
    `;

    if (q.type === 'comparison') {
      this.renderComparisonVisual(q);
    }

    if (timerEnabled) this.startTimer();
    this.updateSessionStats();
  },

  // ---------- 比较视觉辅助 ----------
  renderComparisonVisual(q) {
    const vis = document.getElementById('question-visual');
    if (!vis) return;
    const nums = q.question.match(/\d+/g);
    if (nums && nums.length >= 2) {
      const a = parseInt(nums[0]), b = parseInt(nums[1]);
      const maxLen = Math.max(a, b);
      vis.innerHTML = `
        <div class="comparison-visual">
          <div class="comp-row">
            <span class="comp-label">${a}</span>
            <div class="comp-bar" style="width:${(a/maxLen)*100}%"></div>
          </div>
          <div class="comp-row">
            <span class="comp-label">${b}</span>
            <div class="comp-bar" style="width:${(b/maxLen)*100}%"></div>
          </div>
        </div>
      `;
    }
  },

  // ---------- 计时器 ----------
  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timeLeft = store.get('settings').timerSeconds;
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        if (!this.isAnswered) this.autoSubmit();
      }
    }, 1000);
  },

  updateTimerDisplay() {
    const fill = document.getElementById('timer-fill');
    const text = document.getElementById('timer-text');
    if (fill && text) {
      const total = store.get('settings').timerSeconds;
      fill.style.width = `${(this.timeLeft / total) * 100}%`;
      text.textContent = `${this.timeLeft}s`;
      fill.style.background = this.timeLeft <= 5
        ? 'var(--color-error)'
        : 'linear-gradient(90deg, var(--color-primary), var(--color-accent))';
    }
  },

  autoSubmit() {
    this.processAnswer(null);
  },

  // ---------- 选择选项 ----------
  selectOption(btn, value) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    if (this.timerInterval) clearInterval(this.timerInterval);
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    this.processAnswer(value);
  },

  // ---------- 处理答案 ----------
  processAnswer(value) {
    const result = quizEngine.submitAnswer(value);
    const feedback = document.getElementById('question-feedback');
    const options = document.querySelectorAll('.option-btn');

    options.forEach(btn => {
      const val = btn.dataset.opt;
      if (String(val) === String(result.correctAnswer)) btn.classList.add('correct');
      else if (val === value && !result.correct) btn.classList.add('wrong');
      btn.disabled = true;
    });

    // 复习模式计数
    if (this.reviewMode) {
      this.reviewResults.total = this.reviewCards.length;
      if (result.correct) this.reviewResults.correct++;
    }

    if (result.correct) {
      feedback.innerHTML = `
        <div class="feedback-correct animate-pop">
          <span class="feedback-icon">🎉</span>
          <span class="feedback-text">太棒了！</span>
          <span class="feedback-reward">+${result.coinsEarned}☀️ +${result.expEarned}⭐EXP</span>
          ${result.combo >= 3 ? `<span class="feedback-combo">🔥 ${result.combo}连击！</span>` : ''}
          ${result.starBonus ? `<span class="feedback-star">⭐ +1 星星！</span>` : ''}
        </div>
      `;
      this.createConfetti();
    } else {
<<<<<<< HEAD
=======
      sound.wrong();
>>>>>>> 20f3330 (feat: Phaser garden engine + UI refactor)
      const q = quizEngine.currentQuestion;
      let phoneticHtml = '';
      if (q && q.subject === 'english' && window.ENGLISH_QUESTIONS?.getPhonetic) {
        const ans = String(result.correctAnswer);
        if (ans && ans.length <= 20 && /^[a-zA-Z\s'-]+$/.test(ans.trim())) {
          const words = ans.trim().split(/\s+/);
          const phoneticParts = words.map(w => {
            const p = window.ENGLISH_QUESTIONS.getPhonetic(w);
            return p || '';
          }).filter(Boolean);
          if (phoneticParts.length > 0) {
            phoneticHtml = `<span class="feedback-phonetic">🔊 ${phoneticParts.join(' ')}</span>`;
          }
        }
      }
      feedback.innerHTML = `
        <div class="feedback-wrong animate-shake">
          <span class="feedback-icon">💪</span>
          <span class="feedback-text">加油，再来一次！</span>
          <span class="feedback-answer">正确答案是：<strong>${result.correctAnswer}</strong></span>
          ${phoneticHtml}
        </div>
      `;
    }

    document.getElementById('next-btn').classList.remove('hidden');
    this.updateCombo();
    this.updateSessionStats();
    this.updateProgress();
  },

  // ---------- Combo ----------
  updateCombo() {
    const el = document.getElementById('combo-count');
    const display = document.getElementById('combo-display');
    if (!el || !display) return;
    const combo = quizEngine.combo || 1;
    el.textContent = `x${combo}`;
    display.classList.toggle('combo-hot', combo >= 3);
  },

  updateSessionStats() {
    const stats = quizEngine.sessionStats;
    const ce = document.getElementById('stat-correct');
    const te = document.getElementById('stat-total');
    const re = document.getElementById('stat-rate');
    if (ce) ce.textContent = stats.correct;
    if (te) te.textContent = stats.total;
    if (re) {
      re.textContent = stats.total > 0 ? `${Math.round((stats.correct / stats.total) * 100)}%` : '0%';
    }
  },

  showNoMoreQuestions() {
    const area = document.getElementById('question-area');
    area.innerHTML = `
      <div class="question-card text-center">
        <div style="font-size:4rem; margin:20px 0">🎊</div>
        <h3>太厉害了！这单元的题都做完了！</h3>
        <p class="mt-8">试试其他单元，或者切换到高年级？</p>
        <div class="mt-16">
          <button class="btn btn-success" onclick="quiz.startQuiz()">🔄 再来一轮</button>
          <button class="btn btn-secondary mt-8" onclick="quizEngine.filters.unit=null; quiz.render()">📚 换单元</button>
        </div>
      </div>
    `;
  },

  // ---------- 每日目标 ----------
  renderDailyGoal() {
    const el = document.getElementById('daily-goal');
    if (!el) return;
    const goal = store.checkDailyGoal();

    el.innerHTML = `
      <div class="goal-card ${goal.allDone ? 'goal-done' : ''}">
        <div class="goal-header">
          <span>🎯 今日目标</span>
          <span>${goal.answered}/${goal.target} 题</span>
        </div>
        <div class="goal-bar">
          <div class="goal-fill" style="width:${goal.progress * 100}%"></div>
        </div>
        <div class="goal-status">
          ${goal.allDone ? '🎉 今日目标完成！' : goal.answered > 0 ? '💪 继续加油！' : '✨ 开始答题吧！'}
        </div>
      </div>
    `;
  },

  // ---------- 复习模式 ----------

  // 渲染复习入口
  renderReviewEntry() {
    const el = document.getElementById('review-entry');
    if (!el) return;

    const s = store.state;
    const stats = store.getReviewStats(s.currentSubject);
    const due = stats.due;
    const color = due > 0 ? '#ff8c00' : 'var(--color-success)';

    el.innerHTML = `
      <div class="review-banner" style="border-left: 4px solid ${color};">
        <div class="review-banner-left">
          <span class="review-icon">📅</span>
          <div>
            <div class="review-title">今日复习</div>
            <div class="review-desc">
              ${due > 0
                ? `<strong style="color:${color}">${due} 张卡片</strong>等待复习`
                : '今日复习已完成 🎉'}
            </div>
          </div>
        </div>
        <div class="review-banner-right">
          <span class="review-streak">🔥 ${stats.streak}天</span>
          ${due > 0
            ? `<button class="btn btn-sm btn-gold" onclick="quiz.startReview()">开始复习</button>`
            : ''}
        </div>
      </div>
    `;
  },

  // 开始复习
  startReview() {
    const s = store.state;
    this.reviewMode = true;
    this.reviewCards = store.getDueReviews(s.currentSubject);
    this.reviewIndex = 0;
    this.reviewResults = { correct: 0, total: this.reviewCards.length };

    if (this.reviewCards.length === 0) {
      store.showToast('🎉 今日复习已完成！', 'success');
      return;
    }

    quizEngine.combo = 1;
    quizEngine.streak = 0;
    quizEngine.bestCombo = 0;
    quizEngine.questionHistory = [];
    quizEngine.sessionStats = { total: 0, correct: 0, startTime: Date.now() };
    quizEngine.filters.subject = s.currentSubject;

    this.startReviewQuestion();
  },

  // 显示复习题目
  startReviewQuestion() {
    if (this.reviewIndex >= this.reviewCards.length) {
      this.finishReview();
      return;
    }

    this.isAnswered = false;
    const card = this.reviewCards[this.reviewIndex];

    // 从题库找到对应题目
    const Q = card.subject === 'chinese' ? window.CHINESE_QUESTIONS
            : card.subject === 'english' ? window.ENGLISH_QUESTIONS
            : window.QUESTIONS;

    let pool = Q.getUnitQuestions(card.grade, card.semester, card.unit);
    if (pool.length === 0) pool = Q.getQuestions(card.grade, card.semester);
    const q = pool.find(q => q.id === card.questionId);
    if (!q) { this.reviewIndex++; this.startReviewQuestion(); return; }

    const question = { ...q, grade: card.grade, semester: card.semester, subject: card.subject };
    if (!question.options) question.options = [question.answer, '其他'];
    question.options = [...question.options].sort(() => Math.random() - 0.5);

    quizEngine.currentQuestion = question;

    const area = document.getElementById('question-area');
    area.innerHTML = `
      <div class="question-card animate-in review-card">
        <div class="review-badge">📅 复习 ${this.reviewIndex + 1}/${this.reviewCards.length}</div>
        <div class="question-difficulty">${'⭐'.repeat(q.difficulty || 1)}</div>
        <div class="question-text">${q.question}</div>
        <div class="options-grid">
          ${question.options.map((opt, i) => `
            <button class="option-btn" data-opt="${opt}" onclick="quiz.selectOption(this, '${opt}')">
              <span class="option-label">${String.fromCharCode(65 + i)}</span>
              <span class="option-value">${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="question-feedback" id="question-feedback"></div>
        <button class="btn btn-primary btn-block mt-16 next-btn hidden" id="next-btn"
                onclick="quiz.nextReviewQuestion()">
          ➡️ 下一张
        </button>
        <button class="btn btn-sm mt-8" style="background:none;color:var(--color-text-light);border:none;width:100%"
                onclick="quiz.exitReview()">✋ 退出复习</button>
      </div>
    `;
  },

  nextReviewQuestion() {
    this.reviewIndex++;
    this.startReviewQuestion();
  },

  finishReview() {
    const area = document.getElementById('question-area');
    const rate = this.reviewCards.length > 0
      ? Math.round((this.reviewResults.correct / this.reviewCards.length) * 100) : 0;
    area.innerHTML = `
      <div class="question-card text-center">
        <div style="font-size:3rem; margin:20px 0">🎉</div>
        <h3>复习完成！</h3>
        <p class="mt-8">答对 <strong>${this.reviewResults.correct}</strong> / ${this.reviewCards.length} 题</p>
        <div class="progress-bar mt-8" style="max-width:200px;margin:8px auto">
          <div class="progress-fill" style="width:${rate}%"></div>
        </div>
        <p class="mt-8" style="color:var(--color-text-light)">
          ${rate >= 80 ? '太棒了！继续保持！🌟' : '加油！明天再来复习 💪'}
        </p>
        <div class="mt-16">
          <button class="btn btn-primary" onclick="quiz.exitReview(); quiz.render();">✅ 完成</button>
        </div>
      </div>
    `;
    document.getElementById('session-stats').style.display = 'none';
  },

  exitReview() {
    this.reviewMode = false;
    this.reviewCards = [];
    document.getElementById('session-stats').style.display = 'none';
    this.render();
  },

  // ---------- 撒花 ----------
  createConfetti() {
    const area = document.getElementById('question-area');
    if (!area) return;
    const colors = ['#ff9eb5', '#ffd700', '#a8d8ea', '#b5e7a0', '#ffb347', '#c9a0ff'];
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = `${Math.random() * 100}%`;
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.animationDelay = `${Math.random() * 0.5}s`;
      el.style.animationDuration = `${1 + Math.random() * 0.5}s`;
      el.style.width = `${6 + Math.random() * 6}px`;
      el.style.height = `${6 + Math.random() * 6}px`;
      area.appendChild(el);
      setTimeout(() => el.remove(), 2000);
    }
  },
};

document.addEventListener('page-changed', (e) => {
  if (e.detail === 'quiz') {
    quiz.render();
  }
});
