/* ============================================================
   🌸 梦幻数学花园 — 家长面板
   学习报告、知识点进度、设置
   ============================================================ */

const parentDashboard = {
  render() {
    const container = document.getElementById('parent-dashboard');
    if (!container) return;

    const state = store.state;

    // ---- 学习概况 ----
    let html = `
      <div class="parent-card">
        <h3>📋 学习概况</h3>
        <div class="parent-stats-grid">
          <div class="parent-stat">
            <span class="p-stat-value">${state.level}</span>
            <span class="p-stat-label">等级</span>
          </div>
          <div class="parent-stat">
            <span class="p-stat-value">${state.dailyStreak}</span>
            <span class="p-stat-label">连续签到（天）</span>
          </div>
          <div class="parent-stat">
            <span class="p-stat-value">${state.dailyAnswered}</span>
            <span class="p-stat-label">今日答题</span>
          </div>
          <div class="parent-stat">
            <span class="p-stat-value">${Object.keys(state.inventory).length}</span>
            <span class="p-stat-label">拥有物品</span>
          </div>
        </div>
      </div>

      <!-- 学科选择 -->
      <div class="parent-card">
        <h3>📚 知识点进度</h3>
        <div class="parent-subject-tabs">
          <button class="parent-subject-btn active" data-parent-subj="math"
                  onclick="parentDashboard.renderSubject('math', this)">🔢 数学</button>
          <button class="parent-subject-btn" data-parent-subj="chinese"
                  onclick="parentDashboard.renderSubject('chinese', this)">📝 语文</button>
          <button class="parent-subject-btn" data-parent-subj="english"
                  onclick="parentDashboard.renderSubject('english', this)">🔤 英语</button>
        </div>
        <div class="knowledge-progress" id="parent-knowledge-progress">
          <p class="no-data">加载中...</p>
        </div>
      </div>

      <!-- 薄弱环节：错题集 -->
      <div class="parent-card">
        <h3>⚠️ 需要加强的知识点</h3>
        <div id="mistakes-list">
    `;

    const allMistakes = state.mistakes || [];
    if (allMistakes.length === 0) {
      html += '<p class="no-data">🎉 暂无错题，太棒了！</p>';
    } else {
      // 按学科分组显示
      const grouped = { math: [], chinese: [], english: [] };
      for (const m of allMistakes) {
        const subj = m.subject || 'math';
        if (!grouped[subj]) grouped[subj] = [];
        grouped[subj].push(m);
      }
      for (const [subj, list] of Object.entries(grouped)) {
        if (list.length === 0) continue;
        const label = subj === 'chinese' ? '📝语文' : subj === 'english' ? '🔤英语' : '🔢数学';
        html += `<div class="mistake-subject-label">${label}</div>`;
        html += '<div class="mistakes-grid">';
        for (const m of list.slice(0, 10)) {
          html += `
            <div class="mistake-item">
              <span class="mistake-q">${m.question}</span>
              <span class="mistake-answer">正确答案：<strong>${m.correctAnswer}</strong></span>
              <span class="mistake-count">错 ${m.count} 次</span>
            </div>
          `;
        }
        if (list.length > 10) {
          html += `<p class="no-data">...还有 ${list.length - 10} 道错题</p>`;
        }
        html += '</div>';
      }
    }

    html += `
        </div>
      </div>

      <!-- 设置 -->
      <div class="parent-card">
        <h3>⚙️ 设置</h3>
        <div class="settings-grid">
          <div class="setting-row">
            <span class="setting-label">🎵 音效</span>
            <label class="toggle">
              <input type="checkbox" ${state.settings.soundEnabled ? 'checked' : ''}
                     onchange="store.set('settings', {...store.get('settings'), soundEnabled: this.checked})">
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="setting-row">
            <span class="setting-label">⏱️ 倒计时</span>
            <label class="toggle">
              <input type="checkbox" ${state.settings.timerEnabled ? 'checked' : ''}
                     onchange="store.set('settings', {...store.get('settings'), timerEnabled: this.checked})">
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="setting-row">
            <span class="setting-label">⏱️ 每题时间（秒）</span>
            <input type="range" min="10" max="120" step="5" id="timer-range"
                   value="${state.settings.timerSeconds}"
                   onchange="store.set('settings', {...store.get('settings'), timerSeconds: parseInt(this.value)})">
            <span id="timer-value">${state.settings.timerSeconds}s</span>
          </div>
          <div class="setting-row">
            <span class="setting-label">⏰ 每日学习时长</span>
            <input type="range" min="15" max="120" step="5"
                   value="${state.settings.maxDailyMinutes}"
                   onchange="store.set('settings', {...store.get('settings'), maxDailyMinutes: parseInt(this.value)})">
            <span>${state.settings.maxDailyMinutes}分钟</span>
          </div>
        </div>
      </div>

      <!-- 重置 -->
      <div class="parent-card danger-zone">
        <h3>⚠️ 危险区</h3>
        <p class="no-data">清空所有游戏数据（不可恢复）</p>
        <button class="btn btn-sm" style="background:var(--color-error);color:white"
                onclick="if(confirm('确定要清除所有数据吗？')) store.resetAll()">
          🗑️ 清除所有数据
        </button>
      </div>
    `;

    container.innerHTML = html;
  },

  // ---------- 按学科渲染知识点进度 ----------
  renderSubject(subject, btn) {
    // 切换 tab 高亮
    document.querySelectorAll('.parent-subject-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const container = document.getElementById('parent-knowledge-progress');
    if (!container) return;

    let html = '';
    const subjLabel = subject === 'chinese' ? '📝' : subject === 'english' ? '🔤' : '🔢';

    for (let grade = 1; grade <= 6; grade++) {
      for (let semester = 1; semester <= 2; semester++) {
        const gradeLabel = `${grade}年级${semester === 1 ? '上' : '下'}`;
        const Q = subject === 'chinese' ? window.CHINESE_QUESTIONS
                : subject === 'english' ? window.ENGLISH_QUESTIONS
                : window.QUESTIONS;
        const units = Q ? Q.getUnits(grade, semester) : [];
        if (units.length === 0) continue;

        let totalCorrect = 0, totalTotal = 0;
        let unitRows = '';

        for (const u of units) {
          const prog = store.getUnitProgress(subject, grade, semester, u.id);
          const correct = prog ? prog.correct : 0;
          const total = prog ? prog.total : 0;
          totalCorrect += correct;
          totalTotal += total;

          const rate = total > 0 ? Math.round((correct / total) * 100) : 0;
          const lastPrac = prog?.lastPracticed || '未练习';

          unitRows += `
            <div class="unit-row">
              <span class="unit-name">${u.icon || '📚'} ${u.name}</span>
              <span class="unit-rate ${rate >= 80 ? 'good' : rate >= 50 ? 'ok' : 'low'}">${rate}%</span>
              <div class="progress-bar"><div class="progress-fill" style="width:${rate}%"></div></div>
              <span class="unit-last">${lastPrac}</span>
            </div>
          `;
        }

        const overallRate = totalTotal > 0 ? Math.round((totalCorrect / totalTotal) * 100) : 0;
        html += `
          <div class="grade-block">
            <div class="grade-header">
              <strong>${subjLabel} ${gradeLabel}</strong>
              <span>${totalCorrect}/${totalTotal} 题 · ${overallRate}%</span>
            </div>
            <div class="grade-units">
              ${unitRows || '<p class="no-data">暂无学习数据</p>'}
            </div>
          </div>
        `;
      }
    }

    container.innerHTML = html || '<p class="no-data">暂无数据</p>';
  },
};

// 页面初始加载时默认渲染数学
document.addEventListener('page-changed', (e) => {
  if (e.detail === 'achievements') {
    achievementsPage.render();
    parentDashboard.render();
    // 延迟一下等 DOM 渲染完成再加载进度
    setTimeout(() => parentDashboard.renderSubject('math'), 50);
  }
});

// 监听范围滑块的值显示
document.addEventListener('change', (e) => {
  if (e.target.type === 'range' && e.target.nextElementSibling) {
    const val = e.target.value;
    e.target.nextElementSibling.textContent =
      e.target.id === 'timer-range' ? val + 's' : val + '分钟';
  }
});
