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

    // 更新工具栏
    this.renderToolbar();
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
};

// 初始化
document.addEventListener('page-changed', (e) => {
  if (e.detail === 'garden') {
    garden.render();
  }
});
