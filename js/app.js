/* ============================================================
   🌸 梦幻数学花园 — 主应用控制器
   路由、导航、初始化
   ============================================================ */

const app = {
  currentPage: 'quiz',

  // ---------- 初始化 ----------
  init() {
    // 确保 store 已初始化
    if (!store.state) {
      store.init();
    }

    // 设置导航
    this.setupNavigation();

    // 渲染当前页面
    this.renderPage(this.currentPage);

    // 更新顶部栏
    store._updateUI();

    // 监听页面可见性变化（用于植物生长）
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        // 回到页面时刷新花园（显示生长变化）
        if (this.currentPage === 'garden') {
          garden.render();
        }
        // 重新检查每日签到
        store._checkDailyReset();
      }
    });

    console.log('🌸 知识花园已启动！');
    console.log(`📊 存档: ${localStorage.getItem(STORE_KEY) ? '已存在' : '新游戏'}`);
  },

  // ---------- 导航 ----------
  setupNavigation() {
    // 底部导航按钮
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const page = btn.dataset.page;
        if (page) {
          this.navigate(page);
        }
      });
    });
  },

  navigate(page) {
    if (page === this.currentPage) return;

    // 切换页面
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`)?.classList.add('active');

    // 更新导航栏
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.nav-btn[data-page="${page}"]`)?.classList.add('active');

    this.currentPage = page;

    // 触发页面变更事件
    const event = new CustomEvent('page-changed', { detail: page });
    document.dispatchEvent(event);

    // 滚动到顶部
    document.getElementById('page-container')?.scrollTo(0, 0);
  },

  renderPage(page) {
    // 触发页面变更事件，各模块会自己渲染
    const event = new CustomEvent('page-changed', { detail: page });
    document.dispatchEvent(event);
  },

  // ---------- 模态框 ----------
  openModal(html) {
    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');
    overlay.classList.remove('hidden');
    content.innerHTML = html;
  },

  closeModal() {
    document.getElementById('modal-overlay')?.classList.add('hidden');
  },

  // ---------- 显示升级祝贺 ----------
  showLevelUp() {
    const level = store.get('level');
    this.openModal(`
      <div class="text-center">
        <div style="font-size:4rem; margin:10px 0;">🎊</div>
        <h2 style="color:var(--color-primary-dark);">升级啦！</h2>
        <p style="font-size:1.5rem; font-weight:700; margin:12px 0;">
          达到 Lv.${level}
        </p>
        <p>解锁了更多植物和装饰品 🎉</p>
        <button class="btn btn-primary mt-16" onclick="app.closeModal()">
          太棒了！
        </button>
      </div>
    `);
    sound.levelUp();
  },
};

// ---------- 启动 ----------
document.addEventListener('DOMContentLoaded', () => {
  // store.init() 已经在 store.js 的 DOMContentLoaded 中调用了
  // 等待 store 初始化后再启动 app
  setTimeout(() => app.init(), 50);
});
