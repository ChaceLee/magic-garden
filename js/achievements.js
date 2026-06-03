/* ============================================================
   🌸 梦幻数学花园 — 成就 & 每日签到系统
   ============================================================ */

function getAchievementDefinitions() {
  return [
    { id: 'first_quiz', name: '🌱 初露锋芒', desc: '完成第一次答题', icon: '🌟', check: p => (p.totalAnswered || 0) >= 1 },
    { id: 'ten_quiz', name: '📝 小试牛刀', desc: '答对10题', icon: '📝', check: p => (p.totalCorrect || 0) >= 10 },
    { id: 'fifty_quiz', name: '🏅 算术能手', desc: '答对50题', icon: '🏅', check: p => (p.totalCorrect || 0) >= 50 },
    { id: 'hundred_quiz', name: '🎖️ 数学达人', desc: '答对100题', icon: '🎖️', check: p => (p.totalCorrect || 0) >= 100 },
    { id: 'combo3', name: '🔥 三连击', desc: '达到3连击', icon: '🔥', check: p => (p.bestCombo || 0) >= 3 },
    { id: 'combo5', name: '⚡ 五连击达人', desc: '达到5连击', icon: '⚡', check: p => (p.bestCombo || 0) >= 5 },
    { id: 'combo10', name: '💥 十连击传说', desc: '达到10连击', icon: '💥', check: p => (p.bestCombo || 0) >= 10 },
    { id: 'garden_first', name: '🌻 小小园丁', desc: '在花园种下第一株植物', icon: '🌻', check: p => {
      const tiles = store.get('garden').tiles;
      return tiles && tiles.length >= 1;
    }},
    { id: 'garden_five', name: '🌸 花团锦簇', desc: '花园中有5株植物', icon: '🌸', check: p => {
      const tiles = store.get('garden').tiles;
      return tiles && tiles.length >= 5;
    }},
    { id: 'garden_full', name: '🌺 繁花似锦', desc: '花园中有15株植物或装饰', icon: '🌺', check: p => {
      const g = store.get('garden');
      return g.tiles.length + g.decorations.length >= 15;
    }},
    { id: 'level5', name: '⭐ 新星闪耀', desc: '达到5级', icon: '⭐', check: p => store.get('level') >= 5 },
    { id: 'level10', name: '🌟 明星玩家', desc: '达到10级', icon: '🌟', check: p => store.get('level') >= 10 },
    { id: 'streak3', name: '📅 持之以恒', desc: '连续签到3天', icon: '📅', check: p => store.get('dailyStreak') >= 3 },
    { id: 'streak7', name: '📆 周冠军', desc: '连续签到7天', icon: '📆', check: p => store.get('dailyStreak') >= 7 },
    { id: 'streak30', name: '🏆 月之星', desc: '连续签到30天', icon: '🏆', check: p => store.get('dailyStreak') >= 30 },
    { id: 'mistake_killer', name: '💪 攻克难关', desc: '把所有错题都答对一遍', icon: '💪', check: p => {
      const mistakes = store.get('mistakes');
      return mistakes && mistakes.length === 0 && (p.totalAnswered || 0) >= 20;
    }},
    { id: 'shop_first', name: '🛍️ 第一次购物', desc: '在商店购买一样东西', icon: '🛍️', check: p => {
      const inv = store.get('inventory');
      return Object.keys(inv).length >= 1;
    }},
    { id: 'millionaire', name: '💰 小富翁', desc: '拥有500阳光币', icon: '💰', check: p => store.get('coins') >= 500 },
  ];
}

// ---------- 成就页面 ----------
const achievementsPage = {
  render() {
    const grid = document.getElementById('achievement-grid');
    if (!grid) return;

    const unlocked = store.get('achievements') || [];
    const allAch = getAchievementDefinitions();

    let html = '<div class="achievement-grid">';
    for (const ach of allAch) {
      const isUnlocked = unlocked.includes(ach.id);
      html += `
        <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="ach-icon">${isUnlocked ? ach.icon : '🔒'}</div>
          <div class="ach-name">${isUnlocked ? ach.name : '???'}</div>
          <div class="ach-desc">${isUnlocked ? ach.desc : '继续努力解锁'}</div>
          ${isUnlocked ? '<div class="ach-check">✅</div>' : ''}
        </div>
      `;
    }
    html += '</div>';

    // 统计
    const unlockedCount = unlocked.filter(id => allAch.some(a => a.id === id)).length;
    html = `
      <div class="achievement-stats">
        <span>🏅 已解锁 <strong>${unlockedCount}</strong> / ${allAch.length}</span>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${(unlockedCount / allAch.length) * 100}%"></div>
        </div>
      </div>
      ${html}
    `;

    grid.innerHTML = html;
  },
};

// 页面切换（只渲染成就部分，家长面板在 parent.js 中处理）
document.addEventListener('page-changed', (e) => {
  if (e.detail === 'achievements') {
    achievementsPage.render();
  }
});
