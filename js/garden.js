/* ============================================================
   🌸 梦幻数学花园 — 花园编辑器
   网格地图、拖拽放置、植物生长系统
   ============================================================ */

const GARDEN_ITEMS = {
  // 花朵类
  'sunflower': { name: '🌻 向日葵', category: 'flower', cost: 30, unlockLevel: 1, growthTime: 3600000 }, // 1h
  'rose': { name: '🌹 玫瑰', category: 'flower', cost: 45, unlockLevel: 1, growthTime: 3600000 },
  'tulip': { name: '🌷 郁金香', category: 'flower', cost: 35, unlockLevel: 1, growthTime: 3600000 },
  'cherry': { name: '🌸 樱花', category: 'flower', cost: 60, unlockLevel: 2, growthTime: 7200000 }, // 2h
  'lily': { name: '🌺 百合', category: 'flower', cost: 50, unlockLevel: 2, growthTime: 5400000 },
  'hibiscus': { name: '🌼 小菊花', category: 'flower', cost: 25, unlockLevel: 1, growthTime: 1800000 }, // 30min

  // 树木类
  'tree-small': { name: '🌱 小树苗', category: 'tree', cost: 80, unlockLevel: 2, growthTime: 14400000 }, // 4h
  'tree-big': { name: '🌳 大树', category: 'tree', cost: 150, unlockLevel: 3, growthTime: 28800000 }, // 8h
  'palm': { name: '🌴 椰子树', category: 'tree', cost: 200, unlockLevel: 4, growthTime: 43200000 },

  // 装饰类
  'fence': { name: '🪵 木栅栏', category: 'decoration', cost: 40, unlockLevel: 1 },
  'fountain': { name: '⛲ 小喷泉', category: 'decoration', cost: 120, unlockLevel: 3 },
  'stone-path': { name: '🪨 石子路', category: 'decoration', cost: 20, unlockLevel: 1 },
  'bench': { name: '🪑 长椅', category: 'decoration', cost: 60, unlockLevel: 2 },
  'lantern': { name: '🏮 小灯笼', category: 'decoration', cost: 55, unlockLevel: 2 },

  // 宠物类（特殊，用星星购买）
  'cat': { name: '🐱 小猫咪', category: 'pet', cost: 5, costType: 'star', unlockLevel: 2 },
  'rabbit': { name: '🐰 小兔子', category: 'pet', cost: 3, costType: 'star', unlockLevel: 1 },
  'bird': { name: '🐦 小黄鸟', category: 'pet', cost: 2, costType: 'star', unlockLevel: 1 },
  'hamster': { name: '🐹 小仓鼠', category: 'pet', cost: 4, costType: 'star', unlockLevel: 2 },
  'butterfly': { name: '🦋 蝴蝶', category: 'pet', cost: 2, costType: 'star', unlockLevel: 1 },

  // 建材类
  'wood': { name: '🪵 木材', category: 'material', cost: 50, unlockLevel: 2 },
  'stone': { name: '🪨 石材', category: 'material', cost: 80, unlockLevel: 3 },
  'glass': { name: '🪟 玻璃', category: 'material', cost: 100, unlockLevel: 4 },
  'paint': { name: '🎨 油漆', category: 'material', cost: 60, unlockLevel: 3 },

  // 家具类（用星星购买）
  'sofa': { name: '🛋️ 沙发', category: 'furniture', cost: 3, costType: 'star', unlockLevel: 2 },
  'chair': { name: '🪑 椅子', category: 'furniture', cost: 2, costType: 'star', unlockLevel: 1 },
  'bed': { name: '🛏️ 床', category: 'furniture', cost: 5, costType: 'star', unlockLevel: 3 },
  'tv': { name: '📺 电视', category: 'furniture', cost: 4, costType: 'star', unlockLevel: 3 },
  'plant': { name: '🪴 盆栽', category: 'furniture', cost: 2, costType: 'star', unlockLevel: 1 },
  'painting': { name: '🖼️ 挂画', category: 'furniture', cost: 3, costType: 'star', unlockLevel: 2 },
  'desk': { name: '📚 书桌', category: 'furniture', cost: 4, costType: 'star', unlockLevel: 2 },
  'closet': { name: '🗄️ 衣柜', category: 'furniture', cost: 3, costType: 'star', unlockLevel: 2 },
};

const GARDEN_CELL_SIZE = 60; // px per cell

const garden = {
  editMode: false,
  selectedItem: null,
  dragItem: null,

  // ---------- 渲染花园 ----------
  render() {
    const map = document.getElementById('garden-map');
    if (!map) return;

    const g = store.get('garden');
    const size = store.getGardenSize();
    const cellW = GARDEN_CELL_SIZE;
    const mapW = size.width * cellW;

    map.style.width = `${mapW}px`;
    map.style.position = 'relative';

    // 构建网格
    let html = '';
    for (let y = 0; y < size.height; y++) {
      for (let x = 0; x < size.width; x++) {
        const tile = g.tiles.find(t => t.x === x && t.y === y);
        const decor = g.decorations.find(d => d.x === x && d.y === y);
        const pet = g.decorations.find(d => d.x === x && d.y === y && GARDEN_ITEMS[d.type]?.category === 'pet');

        let content = '';
        let growthClass = '';

        if (tile) {
          const item = GARDEN_ITEMS[tile.type];
          if (item && item.growthTime) {
            const elapsed = Date.now() - tile.plantedAt;
            const ratio = Math.min(elapsed / item.growthTime, 1);
            if (ratio >= 1) {
              content = item.name.split(' ')[0];
              growthClass = 'grown';
            } else if (ratio > 0.5) {
              content = '🌿';
              growthClass = 'growing';
            } else {
              content = '🌱';
              growthClass = 'seedling';
            }
          } else {
            content = '???';
          }
        } else if (decor) {
          const item = GARDEN_ITEMS[decor.type];
          content = item ? item.name.split(' ')[0] : '❓';
        }

        // 地面样式
        let bgClass = 'tile-grass';
        if (tile) bgClass = 'tile-planted';

        html += `
          <div class="garden-tile ${bgClass} ${growthClass}"
               data-x="${x}" data-y="${y}"
               onclick="garden.onTileClick(${x}, ${y})"
               ondragover="event.preventDefault()"
               ondrop="garden.onDrop(event, ${x}, ${y})"
               style="left:${x * cellW}px; top:${y * cellW}px; width:${cellW}px; height:${cellW}px;">
            <span class="tile-content">${content}</span>
            ${pet ? '<span class="pet-animation">🐾</span>' : ''}
          </div>
        `;
      }
    }

    map.innerHTML = html;
    map.style.height = `${size.height * cellW}px`;

    // 更新工具栏和房屋区
    this.renderToolbar();
    this.renderHouseArea();
  },

  // ---------- 工具栏 ----------
  renderToolbar() {
    const toolbar = document.querySelector('.garden-toolbar');
    if (!toolbar) return;

    const inv = store.get('inventory');
    const hasItems = Object.keys(inv).length > 0;

    toolbar.innerHTML = `
      <h2>🌻 我的花园</h2>
      <div class="toolbar-actions">
        ${this.editMode ? `
          <button class="btn btn-sm btn-success" onclick="garden.exitEditMode()">✅ 完成编辑</button>
        ` : `
          <button class="btn btn-sm btn-secondary" onclick="garden.enterEditMode()">✏️ 编辑</button>
          <button class="btn btn-sm btn-gold" onclick="garden.showExpandDialog()">🗺️ 扩展</button>
        `}
      </div>
    `;

    if (this.editMode) {
      // 显示物品栏（先移除旧的）
      document.getElementById('inventory-bar')?.remove();
      const map = document.getElementById('garden-map');
      const inventoryBar = document.createElement('div');
      inventoryBar.className = 'inventory-bar';
      inventoryBar.id = 'inventory-bar';

      let itemsHtml = '';
      for (const [itemId, count] of Object.entries(inv)) {
        const item = GARDEN_ITEMS[itemId];
        if (!item) continue;
        itemsHtml += `
          <div class="inv-item ${this.selectedItem === itemId ? 'selected' : ''}"
               onclick="garden.selectInventoryItem('${itemId}')"
               draggable="true"
               ondragstart="garden.onDragStart(event, '${itemId}')">
            <span class="inv-icon">${item.name.split(' ')[0]}</span>
            <span class="inv-count">x${count}</span>
          </div>
        `;
      }

      if (!itemsHtml) {
        itemsHtml = '<p class="empty-inv">背包空空如也，去商店买些植物吧！🏪</p>';
      }

      inventoryBar.innerHTML = itemsHtml;
      map.parentNode.insertBefore(inventoryBar, map.nextSibling);
    } else {
      document.getElementById('inventory-bar')?.remove();
    }
  },

  // ---------- 进入/退出编辑模式 ----------
  enterEditMode() {
    this.editMode = true;
    this.render();
    store.showToast('点击网格放置物品，从背包选择要放的物品', '');
  },

  exitEditMode() {
    this.editMode = false;
    this.selectedItem = null;
    this.render();
    store._save();
  },

  // ---------- 选择背包物品 ----------
  selectInventoryItem(itemId) {
    this.selectedItem = this.selectedItem === itemId ? null : itemId;
    this.renderToolbar();
  },

  // ---------- 点击网格 ----------
  onTileClick(x, y) {
    if (!this.editMode || !this.selectedItem) return;
    this.placeItem(x, y, this.selectedItem);
  },

  // ---------- 拖拽 ----------
  onDragStart(event, itemId) {
    this.dragItem = itemId;
    event.dataTransfer.setData('text/plain', itemId);
  },

  onDrop(event, x, y) {
    event.preventDefault();
    const itemId = event.dataTransfer.getData('text/plain') || this.dragItem;
    if (itemId) {
      this.placeItem(x, y, itemId);
    }
  },

  // ---------- 放置物品 ----------
  placeItem(x, y, itemId) {
    const g = store.get('garden');
    const item = GARDEN_ITEMS[itemId];
    if (!item) return;

    // 检查是否已有东西
    const occupied = g.tiles.find(t => t.x === x && t.y === y)
                  || g.decorations.find(d => d.x === x && d.y === y);
    if (occupied) {
      store.showToast('这个位置已经有东西了', 'error');
      return;
    }

    // 检查背包是否有
    if (!store.hasItem(itemId)) {
      store.showToast('背包里没有这个物品', 'error');
      return;
    }

    // 从背包移除
    if (!store.removeItem(itemId)) return;

    // 添加到花园
    if (item.category === 'decoration' || item.category === 'pet') {
      g.decorations.push({ x, y, type: itemId });
    } else {
      // 植物：记录种植时间
      g.tiles.push({
        x, y,
        type: itemId,
        plantedAt: Date.now(),
        growthStage: 0,
      });
    }

    store._save();
    this.render();
    store.showToast(`✅ 放置了 ${item.name}`, 'success');
  },

  // ---------- 移除物品（长按/右键） ----------
  removeItem(x, y) {
    const g = store.get('garden');
    const tileIdx = g.tiles.findIndex(t => t.x === x && t.y === y);
    if (tileIdx >= 0) {
      const removed = g.tiles.splice(tileIdx, 1)[0];
      store.addItem(removed.type);
      store._save();
      this.render();
      store.showToast('已移回背包');
      return;
    }

    const decorIdx = g.decorations.findIndex(d => d.x === x && d.y === y);
    if (decorIdx >= 0) {
      const removed = g.decorations.splice(decorIdx, 1)[0];
      store.addItem(removed.type);
      store._save();
      this.render();
      store.showToast('已移回背包');
    }
  },

  // ---------- 扩展花园 ----------
  showExpandDialog() {
    const size = store.getGardenSize();
    const cost = store.getGardenExpansionCost();
    const levelReq = store.getGardenExpansionLevelReq();
    const level = store.get('level');

    const nextW = Math.min(size.width + 2, 20);
    const nextH = Math.min(size.height + 1, 12);

    app.openModal(`
      <div class="text-center">
        <div style="font-size:3rem;">🗺️</div>
        <h3>扩展花园</h3>
        <p class="mt-8">当前大小：${size.width} × ${size.height}</p>
        <p>扩展后：${nextW} × ${nextH}</p>
        <p class="mt-8">等级要求：<strong>${levelReq}级</strong> ${level >= levelReq ? '✅' : '❌'}</p>
        <p>费用：<strong>☀️ ${cost}</strong></p>
        <div class="mt-16">
          <button class="btn btn-gold" onclick="garden.doExpand()" ${level < levelReq ? 'disabled style="opacity:0.5"' : ''}>
            🗺️ 扩展（+${(nextW * nextH) - (size.width * size.height)}格）
          </button>
          <button class="btn btn-sm mt-8" style="background:none;color:var(--color-text-light);border:none"
                  onclick="app.closeModal()">取消</button>
        </div>
      </div>
    `);
  },

  doExpand() {
    const result = store.expandGarden();
    app.closeModal();
    if (result.ok) {
      store.showToast(result.msg, 'success');
    } else {
      store.showToast(result.msg, 'error');
    }
    this.render();
  },

  // ---------- 房屋区域 ----------
  renderHouseArea() {
    const el = document.getElementById('house-area');
    if (!el) return;

    const house = store.getHouseInfo();
    const next = store.getNextHouseInfo();
    const level = store.getHouseLevel();

    el.innerHTML = `
      <div class="house-card" onclick="garden.showHouseUpgrade()">
        <div class="house-icon">${house.icon}</div>
        <div class="house-info">
          <div class="house-name">${house.name}</div>
          ${next ? `<div class="house-next">下一级：${next.icon} ${next.name}</div>` : '<div class="house-next">已是最高级！🏆</div>'}
        </div>
        <div class="house-action">
          <button class="btn btn-sm ${level < 5 ? 'btn-primary' : 'btn-success'}"
                  onclick="event.stopPropagation(); garden.showHouseUpgrade()">
            ${level === 0 ? '🏗️ 建造' : level < 5 ? '🔨 升级' : '✅'}
          </button>
          ${level > 0 ? `<button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); garden.showInterior()">🏠 房间</button>` : ''}
        </div>
      </div>
    `;
  },

  showHouseUpgrade() {
    const current = store.getHouseInfo();
    const next = store.getNextHouseInfo();

    if (!next) {
      app.openModal(`<div class="text-center"><div style="font-size:3rem">🏡</div><h3>已是最高级！</h3><p class="mt-8">你的小别墅已经是最豪华的了 🎉</p><button class="btn btn-primary mt-16" onclick="app.closeModal()">好的</button></div>`);
      return;
    }

    let matHtml = '';
    for (const [mat, info] of Object.entries(next.materials)) {
      const icons = { wood: '🪵', stone: '🪨', glass: '🪟', paint: '🎨' };
      matHtml += `<span style="display:inline-block;margin:4px 8px;${info.ok ? '' : 'opacity:0.5'}">${icons[mat]||'📦'} ${mat} ${info.have}/${info.need}</span>`;
    }

    app.openModal(`
      <div class="text-center">
        <div style="font-size:3rem">${current.icon} → ${next.icon}</div>
        <h3>${current.name} → ${next.name}</h3>
        <p class="mt-8">等级要求：<strong>${next.levelReq}级</strong> ${next.hasLevel ? '✅' : '❌'}</p>
        <p>费用：<strong>☀️ ${next.cost}</strong> ${next.hasCoins ? '✅' : '❌'}</p>
        <p class="mt-8">材料：${matHtml || '无'}</p>
        <p style="font-size:0.8rem;color:var(--color-text-light);margin-top:6px">${next.canAfford && next.hasCoins && next.hasLevel ? '所有条件满足！' : '继续答题升级赚币吧 💪'}</p>
        <div class="mt-16">
          <button class="btn btn-gold" onclick="garden.doHouseUpgrade()"
            ${next.canAfford && next.hasCoins && next.hasLevel ? '' : 'disabled style="opacity:0.5"'}>
            🔨 升级${next.name}
          </button>
          <button class="btn btn-sm mt-8" style="background:none;color:var(--color-text-light);border:none"
                  onclick="app.closeModal()">取消</button>
        </div>
      </div>
    `);
  },

  doHouseUpgrade() {
    const result = store.upgradeHouse();
    app.closeModal();
    if (result.ok) {
      store.showToast(result.msg, 'success');
    } else {
      store.showToast(result.msg, 'error');
    }
    this.render();
  },

  showInterior() {
    const level = store.getHouseLevel();
    if (level < 1) { store.showToast('先建造房子！', 'error'); return; }

    const house = store.getHouseInfo();
    const furn = store.get('garden').furniture || [];

    let gridHtml = '<div class="interior-grid">';
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 6; x++) {
        const item = furn.find(f => f.x === x && f.y === y);
        gridHtml += `<div class="interior-tile" onclick="garden.removeFurniture(${x},${y})">${item ? item.icon : ''}</div>`;
      }
    }
    gridHtml += '</div>';

    // 可用的家具
    const inv = store.get('inventory');
    const FURNITURE = [
      { type: 'sofa', icon: '🛋️', name: '沙发', cost: 3 },
      { type: 'chair', icon: '🪑', name: '椅子', cost: 2 },
      { type: 'bed', icon: '🛏️', name: '床', cost: 5 },
      { type: 'tv', icon: '📺', name: '电视', cost: 4 },
      { type: 'plant', icon: '🪴', name: '盆栽', cost: 2 },
      { type: 'painting', icon: '🖼️', name: '挂画', cost: 3 },
      { type: 'desk', icon: '📚', name: '书桌', cost: 4 },
      { type: 'closet', icon: '🗄️', name: '衣柜', cost: 3 },
    ];

    let furnHtml = '<div style="display:flex;gap:6px;flex-wrap:wrap;margin:8px 0;">';
    for (const f of FURNITURE) {
      const owned = inv[f.type] || 0;
      furnHtml += `
        <button class="btn btn-sm" style="font-size:0.85rem"
                onclick="garden.buyFurniture('${f.type}','${f.icon}')"
                ${owned > 0 ? '' : 'disabled'}>
          ${f.icon} ${f.name} x${owned}
        </button>
      `;
    }
    furnHtml += '</div>';

    // 商店购买链接
    furnHtml += `<p style="font-size:0.8rem;color:var(--color-text-light)">用星星在商店买家具 ⭐</p>`;

    app.openModal(`
      <div style="text-align:center">
        <div style="font-size:2rem">${house.icon}</div>
        <h3>${house.name} 🏠 室内</h3>
        ${gridHtml}
        <p style="font-size:0.8rem;color:var(--color-text-light);margin:4px 0">点击家具可移除</p>
        ${furnHtml}
        <button class="btn btn-sm mt-8" style="background:none;color:var(--color-text-light);border:none"
                onclick="app.closeModal(); garden.render()">关闭</button>
      </div>
    `);
  },

  buyFurniture(type, icon) {
    const inv = store.get('inventory');
    if (!inv[type] || inv[type] < 1) return;
    inv[type]--;
    if (inv[type] <= 0) delete inv[type];

    const furn = store.get('garden').furniture;
    // 找空位
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 6; x++) {
        if (!furn.find(f => f.x === x && f.y === y)) {
          furn.push({ x, y, type, icon });
          store._save();
          this.showInterior(); // 刷新
          return;
        }
      }
    }
    store.showToast('房间满了，先移除一些家具', 'error');
  },

  removeFurniture(x, y) {
    const furn = store.get('garden').furniture;
    const idx = furn.findIndex(f => f.x === x && f.y === y);
    if (idx >= 0) {
      const removed = furn.splice(idx, 1)[0];
      store.addItem(removed.type);
      store._save();
      this.showInterior();
    }
  },
};

// 初始化
document.addEventListener('page-changed', (e) => {
  if (e.detail === 'garden') {
    garden.render();
  }
});
