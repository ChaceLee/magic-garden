/* ============================================================
   🌸 知识花园 — Firebase 云存档
   保存 / 加载游戏进度
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyAdmWeua7LfcI8LLXAArzvdaDov9DhNmqQ",
  authDomain: "magic-garden-7a1e6.firebaseapp.com",
  projectId: "magic-garden-7a1e6",
  storageBucket: "magic-garden-7a1e6.firebasestorage.app",
  messagingSenderId: "165519455241",
  appId: "1:165519455241:web:9cb6b8171164832ebb74d8",
  measurementId: "G-00BN094RHS"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const CLOUD_SAVE_KEY = 'magic_garden_cloud_id';

const cloudSave = {

  // ---------- 获取或创建存档 ID ----------
  getSaveId() {
    let id = localStorage.getItem(CLOUD_SAVE_KEY);
    if (!id) {
      // 生成一个6位随机码
      id = Math.random().toString(36).substring(2, 8).toUpperCase();
      localStorage.setItem(CLOUD_SAVE_KEY, id);
    }
    return id;
  },

  // ---------- 保存到云端 ----------
  async save() {
    try {
      const saveId = this.getSaveId();
      const state = store.state;

      // 只保存关键数据（排除花园等大数据）
      const saveData = {
        level: state.level,
        exp: state.exp,
        coins: state.coins,
        stars: state.stars,
        unitProgress: state.unitProgress,
        mistakes: state.mistakes,
        garden: state.garden,
        inventory: state.inventory,
        achievements: state.achievements,
        achievementProgress: state.achievementProgress,
        reviewCards: state.reviewCards,
        dailyStreak: state.dailyStreak,
        dailyAnswered: state.dailyAnswered,
        lastLoginDate: state.lastLoginDate,
        settings: state.settings,
        savedAt: new Date().toISOString(),
      };

      await db.collection('saves').doc(saveId).set(saveData);

      // 更新页面上的存档码
      const codeEl = document.getElementById('cloud-save-code');
      if (codeEl) codeEl.textContent = saveId;

      store.showToast(`💾 已保存！存档码：${saveId}`, 'success');
      return { ok: true, saveId };
    } catch (e) {
      console.error('保存失败', e);
      store.showToast('❌ 保存失败，请检查网络', 'error');
      return { ok: false };
    }
  },

  // ---------- 从云端加载 ----------
  async load(saveId) {
    try {
      const doc = await db.collection('saves').doc(saveId).get();
      if (!doc.exists) {
        store.showToast('❌ 未找到该存档码', 'error');
        return { ok: false };
      }

      const data = doc.data();

      // 恢复关键数据
      store.set('level', data.level || 1);
      store.set('exp', data.exp || 0);
      store.set('coins', data.coins ?? 100);
      store.set('stars', data.stars || 0);
      store.set('unitProgress', data.unitProgress || {});
      store.set('mistakes', data.mistakes || []);
      store.set('garden', data.garden || { width: 8, height: 6, tiles: [], decorations: [], expansions: 0, houseLevel: 0, furniture: [] });
      store.set('inventory', data.inventory || {});
      store.set('achievements', data.achievements || []);
      store.set('achievementProgress', data.achievementProgress || {});
      store.set('reviewCards', data.reviewCards || []);
      store.set('dailyStreak', data.dailyStreak || 0);
      store.set('dailyAnswered', data.dailyAnswered || 0);
      store.set('lastLoginDate', data.lastLoginDate || '');
      if (data.settings) store.set('settings', { ...store.get('settings'), ...data.settings });

      // 保存存档ID
      localStorage.setItem(CLOUD_SAVE_KEY, saveId);

      store._save();
      store._updateUI();
      store.showToast(`📥 已恢复存档（${saveId}）`, 'success');

      return { ok: true };
    } catch (e) {
      console.error('加载失败', e);
      store.showToast('❌ 加载失败，请检查网络', 'error');
      return { ok: false };
    }
  },

  // ---------- 获取当前存档码 ----------
  getCurrentCode() {
    return localStorage.getItem(CLOUD_SAVE_KEY) || '无';
  },
};
