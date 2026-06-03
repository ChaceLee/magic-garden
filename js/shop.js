/* ============================================================
   🌸 梦幻数学花园 — 商店系统
   商品列表、购买逻辑、库存管理、等级解锁
   ============================================================ */

const shop = {
  // ---------- 渲染商店 ----------
  render() {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;

    const level = store.get('level');
    const coins = store.get('coins');
    const stars = store.get('stars');
    const inventory = store.get('inventory');

    // 按类别分组
    const categories = {
      'flower': { name: '🌺 花卉', items: [] },
      'tree': { name: '🌳 树木', items: [] },
      'decoration': { name: '🎀 装饰', items: [] },
      'pet': { name: '🐱 宠物', items: [] },
      'material': { name: '🧱 建材', items: [] },
      'furniture': { name: '🛋️ 家具', items: [] },
    };

    for (const [id, item] of Object.entries(GARDEN_ITEMS)) {
      const cat = categories[item.category];
      if (cat) {
        const unlocked = level >= item.unlockLevel;
        cat.items.push({ id, ...item, unlocked });
      }
    }

    let html = '';
    for (const [catKey, cat] of Object.entries(categories)) {
      if (cat.items.length === 0) continue;

      const owned = cat.items.filter(i => inventory[i.id]).length;

      html += `
        <div class="shop-category">
          <div class="category-header">
            <h3>${cat.name}</h3>
            <span class="category-count">${owned} 件拥有</span>
          </div>
          <div class="category-items">
            ${cat.items.map(item => this.renderItem(item, coins, stars, level)).join('')}
          </div>
        </div>
      `;
    }

    grid.innerHTML = html || '<p class="empty-shop">暂无商品</p>';
  },

  renderItem(item, coins, stars, level) {
    const costType = item.costType || 'coin';
    const costIcon = costType === 'star' ? '⭐' : '☀️';
    const currency = costType === 'star' ? stars : coins;
    const canAfford = currency >= item.cost;
    const ownedCount = store.get('inventory')[item.id] || 0;
    const isPlant = item.growthTime > 0;

    // 生长时间显示
    let timeStr = '';
    if (item.growthTime) {
      const hours = item.growthTime / 3600000;
      timeStr = hours >= 1 ? `${hours}h` : `${Math.round(hours * 60)}min`;
    }

    return `
      <div class="shop-item ${item.unlocked ? '' : 'locked'}">
        <div class="shop-item-icon">${item.name.split(' ')[0]}</div>
        <div class="shop-item-name">${item.name.split(' ').slice(1).join(' ')}</div>
        ${item.unlocked ? `
          <div class="shop-item-info">
            ${isPlant ? `<span class="item-info-badge">⏱ ${timeStr}</span>` : ''}
            <span class="item-info-badge">📦 x${ownedCount}</span>
          </div>
          <div class="shop-item-cost ${canAfford ? '' : 'too-expensive'}">
            ${costIcon} ${item.cost}
          </div>
          <button class="btn btn-sm ${canAfford ? 'btn-primary' : 'btn-disabled'}"
                  onclick="shop.buy('${item.id}')"
                  ${canAfford ? '' : 'disabled'}>
            ${canAfford ? '🛒 购买' : '金币不足'}
          </button>
        ` : `
          <div class="shop-item-lock">
            🔒 Lv.${item.unlockLevel} 解锁
          </div>
        `}
      </div>
    `;
  },

  // ---------- 购买 ----------
  buy(itemId) {
    const item = GARDEN_ITEMS[itemId];
    if (!item) return;

    const costType = item.costType || 'coin';
    const cost = item.cost;

    if (costType === 'star') {
      if (store.get('stars') < cost) {
        store.showToast('⭐ 星星不够，多答题攒连击吧！', 'error');
        return;
      }
      store.addStars(-cost);
    } else {
      if (store.get('coins') < cost) {
        store.showToast('☀️ 阳光币不够，去答题赚钱吧！', 'error');
        return;
      }
      store.addCoins(-cost);
    }

    store.addItem(itemId);
    store._save();
    store.showToast(`✅ 购买了 ${item.name}`, 'success');
    this.render();
  },
};

// 页面切换
document.addEventListener('page-changed', (e) => {
  if (e.detail === 'shop') {
    shop.render();
  }
});
