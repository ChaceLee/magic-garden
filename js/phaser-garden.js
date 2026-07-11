
/* ============================================================
   🌻 知识花园 - Phaser 花园场景
   使用 Phaser 3 引擎渲染交互式花园
   ============================================================ */

const CELL_SIZE = 60;
const PADDING = 8;

const COLORS = {
  grass: 0x7ECE7E, grassAlt: 0x72C472, sky: 0x87CEEB, soil: 0x8B6914,
  sunflower: [0xFFD93D, 0xFFB347, 0x8B6914],
  rose: [0xFF6B6B, 0xE55D5D, 0x51CF66],
  tulip: [0xFF85A2, 0xFF6B9D, 0x51CF66],
  cherry: [0xFFB7C5, 0xFF8FA3, 0xE55D5D],
  lily: [0xFFF8E7, 0xFFF0CC, 0x51CF66],
  hibiscus: [0xFF1493, 0xDB1D8A, 0xE55D5D],
  treeSmall: [0x51CF66, 0x2ECC71, 0x8B6914],
  treeBig: [0x2ECC71, 0x27AE60, 0x8B6914],
  palm: [0x2ECC71, 0x27AE60, 0xFFB347],
  fence: [0xCD853F, 0x8B6914],
  fountain: [0x45B7D1, 0x3498DB, 0x87CEEB],
  fishPond: [0x45B7D1, 0x2ECC71],
  stonePath: [0x95A5A6, 0x7F8C8D],
  bench: [0xCD853F, 0x8B6914],
  lantern: [0xFF6B6B, 0xFFD93D],
  flowerBed: [0xFF6B6B, 0xFF85A2, 0x51CF66],
  arch: [0xCD853F, 0x51CF66],
  windChime: [0xFFD93D, 0x45B7D1],
  mushroom: [0xFF6B6B, 0xFFFFFF],
  cat: [0xFF8C42, 0xE67E22, 0xFFFFFF],
  rabbit: [0xFFFFFF, 0xFFB7C5],
  bird: [0x45B7D1, 0xFFD93D],
  hamster: [0xFFD93D, 0xFFFFFF],
  butterfly: [0xFF85A2, 0xA66CFF],
  houseLv0: [0x95A5A6, 0x7F8C8D], houseLv1: [0xCD853F, 0x8B6914],
  houseLv2: [0x8B4513, 0xCD853F], houseLv3: [0xE74C3C, 0xC0392B],
  houseLv4: [0x95A5A6, 0x7F8C8D], houseLv5: [0xFFFFFF, 0xFFD93D, 0x45B7D1],
  sofa: [0xE74C3C, 0xC0392B], chair: [0xCD853F, 0x8B6914],
  bed: [0x45B7D1, 0xFFFFFF], tv: [0x2C3E50, 0x95A5A6],
  plant: [0x51CF66, 0x2ECC71], painting: [0xFFD93D, 0xFF6B6B],
  desk: [0x8B4513, 0xCD853F], closet: [0x8B4513, 0xCD853F],
  wood: [0xCD853F, 0x8B6914], stone: [0x95A5A6, 0x7F8C8D],
  glass: [0x87CEEB, 0xFFFFFF], paint: [0xFF6B6B, 0xFFD93D],
};

const PLANT_TYPES = ["sunflower","rose","tulip","cherry","lily","hibiscus"];
const TREE_TYPES = ["tree-small","tree-big","palm"];
const DECO_TYPES = ["fence","fountain","fish-pond","stone-path","bench","lantern","flower-bed","arch","wind-chime","mushroom"];
const PET_TYPES = ["cat","rabbit","bird","hamster","butterfly"];
const FURNITURE_TYPES = ["sofa","chair","bed","tv","plant","painting","desk","closet"];

function getItemCategory(type) {
  if (PLANT_TYPES.includes(type)) return "flower";
  if (TREE_TYPES.includes(type)) return "tree";
  if (DECO_TYPES.includes(type)) return "decoration";
  if (PET_TYPES.includes(type)) return "pet";
  if (FURNITURE_TYPES.includes(type)) return "furniture";
  if (["wood","stone","glass","paint"].includes(type)) return "material";
  return "flower";
}

// BootScene
class BootScene extends Phaser.Scene {
  constructor() { super("BootScene"); }

  create() {
    this.generateTextures();
    this.scene.start("GardenScene");
  }

  generateTextures() {
    this._makeGrassTile("tile-grass");
    this._makeGrassTile("tile-grass-alt");
    for (const t of [...PLANT_TYPES, ...TREE_TYPES]) this._makePlantType(t);
    for (const t of DECO_TYPES) this._makeDecoration(t);
    for (const t of PET_TYPES) this._makePet(t);
    for (let i = 0; i <= 5; i++) this._makeHouseLevel(i);
    for (const t of FURNITURE_TYPES) this._makeFurniture(t);
  }

  _makeGrassTile(key) {
    var g = this.make.graphics({ x: 0, y: 0, add: false });
    var c = key === "tile-grass" ? COLORS.grass : COLORS.grassAlt;
    g.fillStyle(c, 1); g.fillRect(0, 0, CELL_SIZE, CELL_SIZE);
    g.lineStyle(1, 0x5DAE5D, 0.3); g.strokeRect(0, 0, CELL_SIZE, CELL_SIZE);
    g.fillStyle(0x5DAE5D, 0.15);
    for (var i = 0; i < 4; i++) g.fillCircle(10 + Math.random() * 40, 10 + Math.random() * 40, 2);
    g.generateTexture(key, CELL_SIZE, CELL_SIZE); g.destroy();
  }

  _makePlantType(type) {
    var cols = COLORS[type] || [0x51CF66, 0x2ECC71, 0x8B6914];
    var isTree = type.startsWith("tree") || type === "palm";
    this._makePlant(type + "-seedling", cols, 0.35, isTree);
    this._makePlant(type + "-growing", cols, 0.65, isTree);
    this._makePlant(type + "-grown", cols, 1.0, isTree);
  }

  _makePlant(key, cols, scale, isTree) {
    var size = Math.round(CELL_SIZE * scale);
    var g = this.make.graphics({ x: 0, y: 0, add: false });
    var cx = Math.floor(CELL_SIZE / 2), cy = Math.floor(CELL_SIZE * 0.75);
    if (isTree) {
      g.fillStyle(cols[2], 1); g.fillRect(cx - 3, cy - size * 0.4, 6, size * 0.5);
      g.fillStyle(cols[0], 1); g.fillCircle(cx, cy - size * 0.5, size * 0.35);
      if (scale >= 0.65) {
        g.fillStyle(cols[1], 1);
        g.fillCircle(cx - size * 0.15, cy - size * 0.6, size * 0.2);
        g.fillCircle(cx + size * 0.15, cy - size * 0.4, size * 0.2);
      }
    } else {
      g.lineStyle(2, 0x51CF66, 1); g.lineBetween(cx, cy, cx, cy - size * 0.5);
      g.fillStyle(cols[0], 1);
      if (scale >= 0.65) {
        g.fillEllipse(cx - 8, cy - size * 0.4, 10, 6);
        g.fillEllipse(cx + 8, cy - size * 0.4, 10, 6);
      }
      if (scale >= 0.9) {
        g.fillStyle(cols[1] || cols[0], 1);
        g.fillCircle(cx, cy - size * 0.52, size * 0.2);
        g.fillStyle(cols[2] || cols[1], 1);
        g.fillCircle(cx, cy - size * 0.52, size * 0.08);
      }
    }
    g.generateTexture(key, CELL_SIZE, CELL_SIZE); g.destroy();
  }

  _makeDecoration(type) {
    var key = "deco-" + type, cols = COLORS[type] || [0x95A5A6, 0x7F8C8D];
    var g = this.make.graphics({ x: 0, y: 0, add: false });
    var cx = Math.floor(CELL_SIZE / 2), cy = Math.floor(CELL_SIZE / 2);
    g.fillStyle(cols[0], 1);
    switch (type) {
      case "fence":
        g.fillRect(8, 20, 44, 16); g.fillStyle(cols[1], 1);
        g.fillRect(12, 10, 6, 30); g.fillRect(42, 10, 6, 30); break;
      case "fountain":
        g.fillEllipse(cx, cy, 36, 30); g.fillStyle(cols[1], 1);
        g.fillEllipse(cx, cy - 6, 18, 10); g.fillStyle(cols[2], 1);
        g.fillCircle(cx, cy - 14, 4); break;
      case "fish-pond":
        g.fillEllipse(cx, cy, 44, 34); g.fillStyle(cols[1], 0.6);
        g.fillEllipse(cx, cy, 36, 26); break;
      case "stone-path":
        for (var i = 0; i < 3; i++) {
          g.fillEllipse(12 + i * 18, cy, 14, 10); g.fillStyle(cols[1], 0.5);
        } break;
      case "bench":
        g.fillRect(8, cy - 4, 44, 8); g.fillStyle(cols[1], 1);
        g.fillRect(12, cy + 6, 8, 10); g.fillRect(40, cy + 6, 8, 10); break;
      case "lantern":
        g.fillRect(cx - 3, 12, 6, 28); g.fillStyle(cols[1], 1);
        g.fillCircle(cx, 14, 10); break;
      case "flower-bed":
        g.fillRoundedRect(8, 22, 44, 20, 8); g.fillStyle(cols[1], 1);
        for (var i = 0; i < 3; i++) g.fillCircle(16 + i * 14, cy, 6);
        g.fillStyle(cols[2], 1); g.fillCircle(16, cy - 2, 2);
        g.fillCircle(30, cy - 4, 2); g.fillCircle(44, cy - 2, 2); break;
      case "arch":
        g.lineStyle(4, cols[0], 1); g.strokeCircle(cx, cy + 6, 20);
        g.lineBetween(cx - 20, cy + 6, cx - 20, 54);
        g.lineBetween(cx + 20, cy + 6, cx + 20, 54); break;
      case "wind-chime":
        g.lineStyle(1, 0x95A5A6, 1); g.lineBetween(cx, 10, cx, 50);
        g.fillStyle(cols[1], 1); g.fillCircle(cx - 8, 40, 4);
        g.fillCircle(cx, 46, 4); g.fillCircle(cx + 8, 42, 4); break;
      case "mushroom":
        g.fillRect(cx - 3, cy, 6, 16); g.fillStyle(cols[0], 1);
        g.fillEllipse(cx, cy - 4, 30, 20); g.fillStyle(cols[1], 1);
        g.fillCircle(cx - 6, cy - 6, 4); g.fillCircle(cx + 6, cy - 4, 3); break;
      default: g.fillRect(10, 10, 40, 40);
    }
    g.generateTexture(key, CELL_SIZE, CELL_SIZE); g.destroy();
  }

  _makePet(type) {
    var key = "pet-" + type, cols = COLORS[type] || [0xFF8C42, 0xE67E22];
    var g = this.make.graphics({ x: 0, y: 0, add: false });
    var cx = Math.floor(CELL_SIZE / 2), cy = Math.floor(CELL_SIZE / 2);
    switch (type) {
      case "cat":
        g.fillStyle(cols[0], 1); g.fillCircle(cx, cy + 4, 16);
        g.fillTriangle(cx - 10, cy - 2, cx - 18, cy - 14, cx - 4, cy - 6);
        g.fillTriangle(cx + 10, cy - 2, cx + 18, cy - 14, cx + 4, cy - 6);
        g.fillStyle(cols[2], 1); g.fillCircle(cx - 4, cy - 2, 4);
        g.fillCircle(cx + 4, cy - 2, 4); g.fillStyle(cols[1], 1);
        g.fillCircle(cx - 4, cy - 2, 2); g.fillCircle(cx + 4, cy - 2, 2);
        g.fillEllipse(cx, cy + 10, 8, 4); break;
      case "rabbit":
        g.fillStyle(cols[0], 1); g.fillCircle(cx, cy + 6, 14);
        g.fillEllipse(cx, cy + 18, 18, 10);
        g.fillEllipse(cx - 6, cy - 12, 8, 16);
        g.fillEllipse(cx + 6, cy - 12, 8, 16); g.fillStyle(cols[1], 1);
        g.fillEllipse(cx - 4, cy - 12, 4, 12); g.fillEllipse(cx + 4, cy - 12, 4, 12);
        g.fillCircle(cx - 4, cy, 3); g.fillCircle(cx + 4, cy, 3);
        g.fillStyle(0x000000, 1); g.fillCircle(cx - 4, cy, 1.5);
        g.fillCircle(cx + 4, cy, 1.5); break;
      case "bird":
        g.fillStyle(cols[0], 1); g.fillEllipse(cx, cy + 4, 24, 14);
        g.fillTriangle(cx + 10, cy + 2, cx + 18, cy + 4, cx + 10, cy + 8);
        g.fillStyle(cols[1], 1); g.fillCircle(cx - 6, cy - 2, 4);
        g.fillStyle(0x000000, 1); g.fillCircle(cx - 7, cy - 3, 1.5); break;
      case "hamster":
        g.fillStyle(cols[0], 1); g.fillEllipse(cx, cy + 6, 24, 20);
        g.fillStyle(cols[1], 1); g.fillEllipse(cx, cy + 4, 18, 14);
        g.fillStyle(0x000000, 1); g.fillCircle(cx - 5, cy - 2, 2);
        g.fillCircle(cx + 5, cy - 2, 2); g.fillEllipse(cx, cy + 8, 8, 4);
        g.fillCircle(cx - 10, cy + 6, 4); g.fillCircle(cx + 10, cy + 6, 4); break;
      case "butterfly":
        g.fillStyle(cols[0], 1); g.fillEllipse(cx - 10, cy - 4, 16, 12);
        g.fillEllipse(cx + 10, cy - 4, 16, 12); g.fillEllipse(cx - 8, cy + 8, 12, 8);
        g.fillEllipse(cx + 8, cy + 8, 12, 8); g.fillStyle(cols[1], 1);
        g.fillEllipse(cx - 10, cy - 4, 8, 6); g.fillEllipse(cx + 10, cy - 4, 8, 6);
        g.fillStyle(0x2C3E50, 1); g.fillEllipse(cx, cy, 4, 16); break;
    }
    g.generateTexture(key, CELL_SIZE, CELL_SIZE); g.destroy();
  }

  _makeHouseLevel(level) {
    var key = "house-" + level, g = this.make.graphics({ x: 0, y: 0, add: false });
    var w = 120, h = 100, cols = COLORS["houseLv" + level] || COLORS.houseLv0;
    switch (level) {
      case 0: g.fillStyle(cols[0], 0.4); g.fillRect(10, 40, w - 20, h - 40); break;
      case 1:
        g.fillStyle(cols[0], 1); g.fillRect(10, 30, w - 20, h - 30);
        g.fillStyle(cols[1], 1); g.fillTriangle(8, 30, Math.floor(w / 2), 5, w - 8, 30); break;
      case 2:
        g.fillStyle(cols[0], 1); g.fillRect(10, 20, w - 20, h - 20);
        g.fillStyle(cols[1], 1); g.fillTriangle(8, 20, Math.floor(w / 2), 0, w - 8, 20);
        g.fillStyle(0x8B4513, 1); g.fillRect(Math.floor(w / 2) - 8, h - 35, 16, 25);
        g.fillStyle(0x87CEEB, 1); g.fillRect(20, 40, 16, 16); g.fillRect(w - 36, 40, 16, 16); break;
      case 3:
        g.fillStyle(cols[0], 1); g.fillRect(8, 15, w - 16, h - 15);
        g.fillStyle(cols[1], 1); g.fillRect(8, 8, w - 16, 10); g.fillRect(4, 8, 8, h - 8);
        g.fillRect(w - 12, 8, 8, h - 8); g.fillTriangle(4, 8, Math.floor(w / 2), -8, w - 4, 8);
        g.fillStyle(0x8B4513, 1); g.fillRect(Math.floor(w / 2) - 8, h - 35, 16, 25);
        g.fillStyle(0xFFD93D, 1); g.fillCircle(Math.floor(w / 2) + 4, h - 20, 2); break;
      case 4:
        g.fillStyle(cols[0], 1); g.fillRect(6, 10, w - 12, h - 10);
        g.lineStyle(2, 0x7F8C8D, 0.5);
        for (var x = 6; x < w - 6; x += 16) g.strokeRect(x, 10, 16, h - 10);
        g.fillStyle(0xE74C3C, 1); g.fillTriangle(4, 10, Math.floor(w / 2), -10, w - 4, 10);
        g.fillStyle(0x87CEEB, 1); g.fillRect(18, 35, 20, 20); g.fillRect(w - 38, 35, 20, 20);
        g.lineStyle(1, 0x7F8C8D, 1); g.strokeRect(18, 35, 20, 20); g.strokeRect(w - 38, 35, 20, 20);
        g.lineBetween(28, 35, 28, 55); g.lineBetween(18, 45, 38, 45);
        g.lineBetween(w - 28, 35, w - 28, 55); g.lineBetween(w - 38, 45, w - 18, 45); break;
      case 5:
        g.fillStyle(cols[0], 1); g.fillRect(4, 8, w - 8, h - 8);
        g.fillStyle(cols[2] || 0x87CEEB, 1); g.fillTriangle(2, 8, Math.floor(w / 2), -12, w - 2, 8);
        g.fillStyle(0x51CF66, 1); g.fillRect(4, h - 12, w - 8, 8);
        g.fillStyle(0xFFD93D, 1); g.fillCircle(65, h - 10, 4); g.fillCircle(72, h - 10, 4);
        g.fillStyle(0x87CEEB, 1); g.fillRect(14, 30, 18, 18); g.fillRect(w - 32, 30, 18, 18);
        g.fillRect(Math.floor(w / 2) - 14, 30, 28, 18);
        g.lineStyle(1, 0x2C3E50, 0.3);
        g.strokeRect(14, 30, 18, 18); g.strokeRect(w - 32, 30, 18, 18);
        g.strokeRect(Math.floor(w / 2) - 14, 30, 28, 18); break;
    }
    g.generateTexture(key, w, h); g.destroy();
  }

  _makeFurniture(type) {
    var key = "furn-" + type, cols = COLORS[type] || [0xCD853F, 0x8B6914];
    var g = this.make.graphics({ x: 0, y: 0, add: false });
    g.fillStyle(cols[0], 1); g.fillRect(4, 4, CELL_SIZE - 8, CELL_SIZE - 8);
    g.fillStyle(cols[1], 0.5); g.fillRect(8, 8, CELL_SIZE - 16, CELL_SIZE - 16);
    g.generateTexture(key, CELL_SIZE, CELL_SIZE); g.destroy();
  }
}

// GardenScene
class GardenScene extends Phaser.Scene {
  constructor() { super("GardenScene"); }

  create() {
    this.gridSprites = [];
    this.itemSprites = [];
    this.petTweens = [];
    this.gardenWidth = 0;
    this.gardenHeight = 0;
    this.editMode = false;
    this.selectedItem = null;
    this.removeMode = false;
    this.renderGarden();
    var self = this;
    document.addEventListener("garden-mode-change", function(e) {
      self.editMode = e.detail.editMode || false;
      self.removeMode = e.detail.removeMode || false;
      self.selectedItem = e.detail.selectedItem || null;
      self._updateInteraction();
    });
  }

  renderGarden() {
    this._clearGarden();
    var g = store.get("garden");
    var size = store.getGardenSize();
    this.gardenWidth = size.width;
    this.gardenHeight = size.height;

    for (var y = 0; y < size.height; y++) {
      for (var x = 0; x < size.width; x++) {
        var alt = (x + y) % 2 === 0;
        var key = alt ? "tile-grass" : "tile-grass-alt";
        var tile = this.add.image(
          PADDING + x * CELL_SIZE + CELL_SIZE / 2,
          PADDING + y * CELL_SIZE + CELL_SIZE / 2, key
        );
        tile.setData("gx", x); tile.setData("gy", y);
        var xc = x, yc = y;
        tile.setInteractive({ useHandCursor: true });
        tile.on("pointerdown", function() { self._onTileClick(xc, yc); });
        this.gridSprites.push(tile);
      }
    }

    for (var tile of g.tiles) this._renderTile(tile);
    for (var dec of g.decorations) this._renderDecoration(dec);
    this._renderHouse();
    this._updateInteraction();
  }

  _renderTile(tile) {
    var x = tile.x, y = tile.y, type = tile.type, plantedAt = tile.plantedAt;
    var itemDef = GARDEN_ITEMS[type];
    if (!itemDef) return;
    var sx = PADDING + x * CELL_SIZE + CELL_SIZE / 2;
    var sy = PADDING + y * CELL_SIZE + CELL_SIZE / 2;
    var stage = "grown";
    if (itemDef.growthTime) {
      var ratio = (Date.now() - plantedAt) / itemDef.growthTime;
      if (ratio < 0.5) stage = "seedling";
      else if (ratio < 1) stage = "growing";
    }
    var prefix = getItemCategory(type) === "tree" ? "tree" : type;
    var sprite = this.add.image(sx, sy, prefix + "-" + stage);
    sprite.setData("gx", x); sprite.setData("gy", y);
    sprite.setData("itemType", type);
    if (stage === "grown" && itemDef.growthTime) {
      this.tweens.add({
        targets: sprite,
        angle: { from: -2, to: 2 },
        duration: 2500 + Math.random() * 1000,
        yoyo: true, repeat: -1, ease: "Sine.easeInOut",
      });
    }
    this.itemSprites.push(sprite);
  }

  _renderDecoration(dec) {
    var x = dec.x, y = dec.y, type = dec.type;
    var key = "deco-" + type;
    var sx = PADDING + x * CELL_SIZE + CELL_SIZE / 2;
    var sy = PADDING + y * CELL_SIZE + CELL_SIZE / 2;
    var sprite = this.add.image(sx, sy, key);
    sprite.setData("gx", x); sprite.setData("gy", y);
    sprite.setData("itemType", type);
    this.itemSprites.push(sprite);
    if (PET_TYPES.includes(type)) {
      this.tweens.add({
        targets: sprite, y: sy - 6,
        duration: 800 + Math.random() * 400,
        yoyo: true, repeat: -1, ease: "Sine.easeInOut",
        delay: Math.random() * 1000,
      });
    }
  }

  _renderHouse() {
    var level = store.getHouseLevel();
    var size = store.getGardenSize();
    var cx = PADDING + (size.width * CELL_SIZE) / 2;
    var cy = PADDING + size.height * CELL_SIZE - 60;
    var self = this;
    if (this.houseSprite) this.houseSprite.destroy();
    this.houseSprite = this.add.image(cx, cy, "house-" + level);
    this.houseSprite.setDepth(10);
    this.houseSprite.setInteractive({ useHandCursor: true });
    this.houseSprite.on("pointerdown", function() { garden.showHouseUpgrade(); });
  }

  _onTileClick(x, y) {
    if (!this.editMode) return;
    if (this.removeMode) garden.removeItem(x, y);
    else if (this.selectedItem) garden.placeItem(x, y, this.selectedItem);
  }

  _updateInteraction() {
    var self = this;
    for (var s of this.gridSprites) {
      if (this.editMode) {
        s.setInteractive({ useHandCursor: true });
        s.setTint(this.removeMode ? 0xffaaaa : 0xffffff);
      } else {
        s.disableInteractive();
        s.clearTint();
      }
    }
  }

  _clearGarden() {
    for (var s of this.gridSprites) s.destroy();
    for (var s of this.itemSprites) s.destroy();
    if (this.houseSprite) this.houseSprite.destroy();
    this.gridSprites = [];
    this.itemSprites = [];
    this.houseSprite = null;
  }

  update(time, delta) {
    if (this._lastUpdate && time - this._lastUpdate > 30000) this.renderGarden();
    this._lastUpdate = time;
  }
}

// Phaser management
var phaserGarden = {
  _game: null,

  create: function() {
    if (this._game) {
      this._game.scene.stop("GardenScene");
      this._game.scene.start("GardenScene");
      return;
    }
    var size = store.getGardenSize();
    var cw = Math.max(400, size.width * CELL_SIZE + PADDING * 2);
    var ch = size.height * CELL_SIZE + PADDING * 2;
    this._game = new Phaser.Game({
      type: Phaser.AUTO,
      width: cw, height: ch,
      parent: "garden-map",
      backgroundColor: "#87CEEB",
      scene: [BootScene, GardenScene],
      scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
      input: { touch: true },
    });
  },

  destroy: function() {
    if (this._game) { this._game.destroy(true); this._game = null; }
  },
};
