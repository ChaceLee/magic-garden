/* ============================================================
   🌸 梦幻数学花园 — 题库（小学1-2年级数学）
   按年级-学期-单元分层
   ============================================================ */

const QUESTION_BANK = {
  // ==========================================================
  // 一年级上
  // ==========================================================
  '1-1': {
    name: '一年级上册 · 入学准备',
    units: [
      {
        id: '1-1-1',
        name: '1~5 的认识和加减法',
        icon: '🔢',
        questions: [
          // 1-5 认识
          { id: 'q-1-1-1-01', question: '1 + 1 = ?', answer: 2, options: [0, 1, 2, 3], difficulty: 1 },
          { id: 'q-1-1-1-02', question: '2 + 1 = ?', answer: 3, options: [1, 2, 3, 4], difficulty: 1 },
          { id: 'q-1-1-1-03', question: '2 + 2 = ?', answer: 4, options: [2, 3, 4, 5], difficulty: 1 },
          { id: 'q-1-1-1-04', question: '3 + 1 = ?', answer: 4, options: [2, 3, 4, 5], difficulty: 1 },
          { id: 'q-1-1-1-05', question: '3 + 2 = ?', answer: 5, options: [3, 4, 5, 6], difficulty: 1 },
          { id: 'q-1-1-1-06', question: '5 - 1 = ?', answer: 4, options: [2, 3, 4, 5], difficulty: 1 },
          { id: 'q-1-1-1-07', question: '4 - 2 = ?', answer: 2, options: [0, 1, 2, 3], difficulty: 1 },
          { id: 'q-1-1-1-08', question: '3 - 1 = ?', answer: 2, options: [0, 1, 2, 3], difficulty: 1 },
          { id: 'q-1-1-1-09', question: '5 - 3 = ?', answer: 2, options: [1, 2, 3, 4], difficulty: 1 },
          { id: 'q-1-1-1-10', question: '4 - 1 = ?', answer: 3, options: [1, 2, 3, 4], difficulty: 1 },
          { id: 'q-1-1-1-11', question: '树上 🐦 有 3 只小鸟，又飞来了 2 只，一共有几只？', answer: 5, options: [3, 4, 5, 6], difficulty: 2 },
          { id: 'q-1-1-1-12', question: '盘子里有 4 个 🍎，吃了 1 个，还剩几个？', answer: 3, options: [1, 2, 3, 4], difficulty: 2 },
          { id: 'q-1-1-1-13', question: '🍭 左边 1 颗糖，右边 3 颗糖，一共有几颗？', answer: 4, options: [2, 3, 4, 5], difficulty: 2 },
          { id: 'q-1-1-1-14', question: '有 5 支 ✏️，用掉 2 支，还剩几支？', answer: 3, options: [1, 2, 3, 4], difficulty: 2 },
          { id: 'q-1-1-1-15', question: '1 + 4 = ?', answer: 5, options: [3, 4, 5, 6], difficulty: 1 },
        ],
      },
      {
        id: '1-1-2',
        name: '6~10 的认识和加减法',
        icon: '🔟',
        questions: [
          { id: 'q-1-1-2-01', question: '5 + 3 = ?', answer: 8, options: [6, 7, 8, 9], difficulty: 1 },
          { id: 'q-1-1-2-02', question: '6 + 2 = ?', answer: 8, options: [5, 7, 8, 10], difficulty: 1 },
          { id: 'q-1-1-2-03', question: '4 + 4 = ?', answer: 8, options: [6, 7, 8, 9], difficulty: 1 },
          { id: 'q-1-1-2-04', question: '7 + 2 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 1 },
          { id: 'q-1-1-2-05', question: '3 + 6 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 1 },
          { id: 'q-1-1-2-06', question: '10 - 3 = ?', answer: 7, options: [5, 6, 7, 8], difficulty: 1 },
          { id: 'q-1-1-2-07', question: '9 - 4 = ?', answer: 5, options: [3, 4, 5, 6], difficulty: 1 },
          { id: 'q-1-1-2-08', question: '8 - 5 = ?', answer: 3, options: [1, 2, 3, 4], difficulty: 1 },
          { id: 'q-1-1-2-09', question: '7 - 3 = ?', answer: 4, options: [2, 3, 4, 5], difficulty: 1 },
          { id: 'q-1-1-2-10', question: '10 - 6 = ?', answer: 4, options: [2, 3, 4, 5], difficulty: 1 },
          { id: 'q-1-1-2-11', question: '🐱 有 6 只小猫，又来了 3 只，一共有几只？', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-1-2-12', question: '池塘里有 8 只 🦆，飞走了 3 只，还剩几只？', answer: 5, options: [3, 4, 5, 6], difficulty: 2 },
          { id: 'q-1-1-2-13', question: '🏀 有 7 个篮球，又拿来 2 个，一共有几个？', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-1-2-14', question: '🍩 盒子里有 10 个甜甜圈，吃了 4 个，还剩几个？', answer: 6, options: [4, 5, 6, 7], difficulty: 2 },
          { id: 'q-1-1-2-15', question: '🍎 3 个苹果 + 🍊 5 个橙子，一共几个水果？', answer: 8, options: [6, 7, 8, 9], difficulty: 2 },
          { id: 'q-1-1-2-16', question: '6 + ? = 10，? 是多少？', answer: 4, options: [2, 3, 4, 5], difficulty: 3 },
          { id: 'q-1-1-2-17', question: '? + 3 = 9，? 是多少？', answer: 6, options: [4, 5, 6, 7], difficulty: 3 },
          { id: 'q-1-1-2-18', question: '8 - ? = 2，? 是多少？', answer: 6, options: [4, 5, 6, 7], difficulty: 3 },
        ],
      },
      {
        id: '1-1-3',
        name: '11~20 各数的认识',
        icon: '1️⃣',
        questions: [
          { id: 'q-1-1-3-01', question: '10 + 3 = ?', answer: 13, options: [10, 12, 13, 30], difficulty: 1 },
          { id: 'q-1-1-3-02', question: '10 + 6 = ?', answer: 16, options: [6, 10, 16, 60], difficulty: 1 },
          { id: 'q-1-1-3-03', question: '12 + 3 = ?', answer: 15, options: [13, 14, 15, 16], difficulty: 1 },
          { id: 'q-1-1-3-04', question: '14 + 5 = ?', answer: 19, options: [15, 17, 18, 19], difficulty: 1 },
          { id: 'q-1-1-3-05', question: '11 + 6 = ?', answer: 17, options: [15, 16, 17, 18], difficulty: 1 },
          { id: 'q-1-1-3-06', question: '15 - 3 = ?', answer: 12, options: [10, 11, 12, 13], difficulty: 1 },
          { id: 'q-1-1-3-07', question: '18 - 5 = ?', answer: 13, options: [11, 12, 13, 14], difficulty: 1 },
          { id: 'q-1-1-3-08', question: '16 - 4 = ?', answer: 12, options: [10, 11, 12, 14], difficulty: 1 },
          { id: 'q-1-1-3-09', question: '19 - 7 = ?', answer: 12, options: [10, 11, 12, 13], difficulty: 1 },
          { id: 'q-1-1-3-10', question: '13 + 6 = ?', answer: 19, options: [15, 17, 18, 19], difficulty: 1 },
          { id: 'q-1-1-3-11', question: '🙋 小明有 11 颗糖，妈妈又给了他 5 颗，他现在有几颗？', answer: 16, options: [14, 15, 16, 17], difficulty: 2 },
          { id: 'q-1-1-3-12', question: '📚 书架上有 17 本书，拿走了 5 本，还剩几本？', answer: 12, options: [10, 11, 12, 13], difficulty: 2 },
          { id: 'q-1-1-3-13', question: '15 是由几个十和几个一组成的？', answer: '1个十和5个一', options: ['1个十和5个一', '5个十和1个一', '15个一', '1个十和15个一'], difficulty: 2 },
          { id: 'q-1-1-3-14', question: '20 里面有几个十？', answer: 2, options: [1, 2, 10, 20], difficulty: 2 },
        ],
      },
      {
        id: '1-1-4',
        name: '20以内的进位加法',
        icon: '➕',
        questions: [
          { id: 'q-1-1-4-01', question: '9 + 2 = ?', answer: 11, options: [10, 11, 12, 13], difficulty: 2 },
          { id: 'q-1-1-4-02', question: '8 + 3 = ?', answer: 11, options: [9, 10, 11, 12], difficulty: 2 },
          { id: 'q-1-1-4-03', question: '7 + 4 = ?', answer: 11, options: [9, 10, 11, 12], difficulty: 2 },
          { id: 'q-1-1-4-04', question: '9 + 5 = ?', answer: 14, options: [12, 13, 14, 15], difficulty: 2 },
          { id: 'q-1-1-4-05', question: '8 + 6 = ?', answer: 14, options: [12, 13, 14, 15], difficulty: 2 },
          { id: 'q-1-1-4-06', question: '7 + 7 = ?', answer: 14, options: [12, 13, 14, 15], difficulty: 2 },
          { id: 'q-1-1-4-07', question: '9 + 8 = ?', answer: 17, options: [15, 16, 17, 18], difficulty: 2 },
          { id: 'q-1-1-4-08', question: '6 + 5 = ?', answer: 11, options: [9, 10, 11, 12], difficulty: 2 },
          { id: 'q-1-1-4-09', question: '9 + 9 = ?', answer: 18, options: [16, 17, 18, 19], difficulty: 2 },
          { id: 'q-1-1-4-10', question: '8 + 8 = ?', answer: 16, options: [14, 15, 16, 17], difficulty: 2 },
          { id: 'q-1-1-4-11', question: '🥟 妈妈包了 9 个饺子，爸爸又包了 4 个，一共几个饺子？', answer: 13, options: [11, 12, 13, 14], difficulty: 3 },
          { id: 'q-1-1-4-12', question: '🎈 小红有 8 个气球，小明有 5 个气球，他们一共有几个气球？', answer: 13, options: [11, 12, 13, 14], difficulty: 3 },
          { id: 'q-1-1-4-13', question: '🐟 鱼缸里有 7 条金鱼，又放了 6 条，现在有几条？', answer: 13, options: [11, 12, 13, 14], difficulty: 3 },
        ],
      },
      {
        id: '1-1-5',
        name: '认识钟表',
        icon: '🕐',
        questions: [
          { id: 'q-1-1-5-01', question: '🕐 时钟的短针叫什么？', answer: '时针', options: ['时针', '分针', '秒针', '长针'], difficulty: 1 },
          { id: 'q-1-1-5-02', question: '🕐 时钟的长针叫什么？', answer: '分针', options: ['时针', '分针', '秒针', '短针'], difficulty: 1 },
          { id: 'q-1-1-5-03', question: '🕐 当分针指向 12，时针指向 3，是几点？', answer: '3点', options: ['3点', '12点', '15点', '6点'], difficulty: 2 },
          { id: 'q-1-1-5-04', question: '🕐 当分针指向 12，时针指向 8，是几点？', answer: '8点', options: ['6点', '8点', '12点', '4点'], difficulty: 2 },
          { id: 'q-1-1-5-05', question: '🕐 当分针指向 12，时针指向 12，是几点？', answer: '12点', options: ['6点', '12点', '1点', '24点'], difficulty: 2 },
          { id: 'q-1-1-5-06', question: '1 小时 = ? 分钟', answer: 60, options: [30, 45, 60, 100], difficulty: 2 },
          { id: 'q-1-1-5-07', question: '⏰ 早上起床一般是几点？', answer: '7点', options: ['3点', '7点', '12点', '下午5点'], difficulty: 1 },
          { id: 'q-1-1-5-08', question: '⏰ 中午吃午饭一般是几点？', answer: '12点', options: ['7点', '12点', '下午3点', '晚上8点'], difficulty: 1 },
        ],
      },
      {
        id: '1-1-6',
        name: '认识图形（一）',
        icon: '🔷',
        questions: [
          { id: 'q-1-1-6-01', question: '🔴 这叫什么形状？', answer: '圆形', options: ['圆形', '正方形', '三角形', '长方形'], difficulty: 1 },
          { id: 'q-1-1-6-02', question: '⬛ 这叫什么形状？', answer: '正方形', options: ['圆形', '正方形', '三角形', '长方形'], difficulty: 1 },
          { id: 'q-1-1-6-03', question: '🔺 这叫什么形状？', answer: '三角形', options: ['圆形', '正方形', '三角形', '长方形'], difficulty: 1 },
          { id: 'q-1-1-6-04', question: '▭ 这叫什么形状？', answer: '长方形', options: ['圆形', '正方形', '三角形', '长方形'], difficulty: 1 },
          { id: 'q-1-1-6-05', question: '⚽ 足球是什么形状？', answer: '球体', options: ['球体', '正方体', '长方体', '圆柱'], difficulty: 2 },
          { id: 'q-1-1-6-06', question: '📦 纸箱是什么形状？', answer: '长方体', options: ['球体', '正方体', '长方体', '圆柱'], difficulty: 2 },
          { id: 'q-1-1-6-07', question: '🎲 骰子是什么形状？', answer: '正方体', options: ['球体', '正方体', '长方体', '圆柱'], difficulty: 2 },
          { id: 'q-1-1-6-08', question: '🥫 罐头盒是什么形状？', answer: '圆柱', options: ['球体', '正方体', '圆柱', '圆锥'], difficulty: 2 },
          { id: 'q-1-1-6-09', question: '正方形有几条边？', answer: 4, options: [3, 4, 5, 6], difficulty: 2 },
          { id: 'q-1-1-6-10', question: '三角形有几个角？', answer: 3, options: [2, 3, 4, 5], difficulty: 1 },
        ],
      },
    ],
  },

  // ==========================================================
  // 一年级下
  // ==========================================================
  '1-2': {
    name: '一年级下册',
    units: [
      {
        id: '1-2-1',
        name: '20以内的退位减法',
        icon: '➖',
        questions: [
          { id: 'q-1-2-1-01', question: '11 - 2 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-2-1-02', question: '12 - 3 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-2-1-03', question: '13 - 4 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-2-1-04', question: '14 - 5 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-2-1-05', question: '15 - 6 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-2-1-06', question: '16 - 7 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-2-1-07', question: '17 - 8 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-2-1-08', question: '18 - 9 = ?', answer: 9, options: [7, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-2-1-09', question: '11 - 5 = ?', answer: 6, options: [4, 5, 6, 7], difficulty: 2 },
          { id: 'q-1-2-1-10', question: '13 - 8 = ?', answer: 5, options: [3, 4, 5, 6], difficulty: 2 },
          { id: 'q-1-2-1-11', question: '12 - 7 = ?', answer: 5, options: [3, 4, 5, 6], difficulty: 2 },
          { id: 'q-1-2-1-12', question: '14 - 9 = ?', answer: 5, options: [3, 4, 5, 6], difficulty: 2 },
          { id: 'q-1-2-1-13', question: '🎂 有 13 块蛋糕，吃了 5 块，还剩几块？', answer: 8, options: [6, 7, 8, 9], difficulty: 3 },
          { id: 'q-1-2-1-14', question: '🏐 有 16 个排球，借走了 7 个，还剩几个？', answer: 9, options: [7, 8, 9, 10], difficulty: 3 },
          { id: 'q-1-2-1-15', question: '🌳 11 - ? = 3，? 是多少？', answer: 8, options: [6, 7, 8, 9], difficulty: 3 },
        ],
      },
      {
        id: '1-2-2',
        name: '100以内数的认识',
        icon: '💯',
        questions: [
          { id: 'q-1-2-2-01', question: '3 个十和 5 个一是多少？', answer: 35, options: [8, 35, 53, 305], difficulty: 1 },
          { id: 'q-1-2-2-02', question: '4 个十是多少？', answer: 40, options: [4, 14, 40, 44], difficulty: 1 },
          { id: 'q-1-2-2-03', question: '7 个十和 2 个一是多少？', answer: 72, options: [27, 72, 702, 9], difficulty: 1 },
          { id: 'q-1-2-2-04', question: '56 里面有____？', answer: '5个十和6个一', options: ['5个十和6个一', '6个十和5个一', '56个十', '5个一和6个十'], difficulty: 2 },
          { id: 'q-1-2-2-05', question: '80 里面有____？', answer: '8个十', options: ['8个十', '80个一', '8个一', '0个十'], difficulty: 2 },
          { id: 'q-1-2-2-06', question: '42 比 39 大还是小？', answer: '大', options: ['大', '小', '一样大', '没法比'], difficulty: 1 },
          { id: 'q-1-2-2-07', question: '75 后面的一个数是多少？', answer: 76, options: [74, 75, 76, 77], difficulty: 1 },
          { id: 'q-1-2-2-08', question: '69 前面的一个数是多少？', answer: 68, options: [67, 68, 69, 70], difficulty: 1 },
          { id: 'q-1-2-2-09', question: '44 < ？< 46， ？是多少？', answer: 45, options: [43, 44, 45, 47], difficulty: 1 },
          { id: 'q-1-2-2-10', question: '按规律填空：10、20、30、____、50', answer: 40, options: [25, 35, 40, 45], difficulty: 2 },
        ],
      },
      {
        id: '1-2-3',
        name: '100以内的加法和减法（一）',
        icon: '🧮',
        questions: [
          { id: 'q-1-2-3-01', question: '30 + 20 = ?', answer: 50, options: [5, 50, 500, 3020], difficulty: 1 },
          { id: 'q-1-2-3-02', question: '40 + 50 = ?', answer: 90, options: [9, 45, 90, 100], difficulty: 1 },
          { id: 'q-1-2-3-03', question: '60 - 30 = ?', answer: 30, options: [3, 30, 300, 90], difficulty: 1 },
          { id: 'q-1-2-3-04', question: '80 - 50 = ?', answer: 30, options: [3, 30, 130, 40], difficulty: 1 },
          { id: 'q-1-2-3-05', question: '25 + 30 = ?', answer: 55, options: [28, 45, 55, 65], difficulty: 2 },
          { id: 'q-1-2-3-06', question: '46 + 20 = ?', answer: 66, options: [48, 56, 66, 76], difficulty: 2 },
          { id: 'q-1-2-3-07', question: '58 - 30 = ?', answer: 28, options: [18, 28, 38, 55], difficulty: 2 },
          { id: 'q-1-2-3-08', question: '77 - 50 = ?', answer: 27, options: [17, 27, 37, 72], difficulty: 2 },
          { id: 'q-1-2-3-09', question: '34 + 5 = ?', answer: 39, options: [34, 39, 84, 345], difficulty: 1 },
          { id: 'q-1-2-3-10', question: '62 + 7 = ?', answer: 69, options: [62, 67, 69, 627], difficulty: 1 },
          { id: 'q-1-2-3-11', question: '48 - 6 = ?', answer: 42, options: [42, 48, 54, 486], difficulty: 1 },
          { id: 'q-1-2-3-12', question: '89 - 7 = ?', answer: 82, options: [19, 72, 82, 89], difficulty: 1 },
          { id: 'q-1-2-3-13', question: '🍬 小丽有 35 颗糖，妈妈又给了她 20 颗，她一共有几颗？', answer: 55, options: [37, 55, 235, 57], difficulty: 3 },
          { id: 'q-1-2-3-14', question: '🚌 公交车上有 46 人，到站下去了 20 人，车上还剩几人？', answer: 26, options: [24, 26, 66, 20], difficulty: 3 },
          { id: 'q-1-2-3-15', question: '🌽 农场有 53 根玉米，掰了 30 根，还剩几根？', answer: 23, options: [3, 23, 50, 33], difficulty: 3 },
        ],
      },
      {
        id: '1-2-4',
        name: '认识人民币',
        icon: '💰',
        questions: [
          { id: 'q-1-2-4-01', question: '1 元 = ? 角', answer: 10, options: [1, 5, 10, 100], difficulty: 1 },
          { id: 'q-1-2-4-02', question: '1 角 = ? 分', answer: 10, options: [1, 5, 10, 100], difficulty: 2 },
          { id: 'q-1-2-4-03', question: '1 张 5 元可以换几张 1 元？', answer: 5, options: [1, 2, 5, 10], difficulty: 1 },
          { id: 'q-1-2-4-04', question: '1 张 10 元可以换几张 1 元？', answer: 10, options: [1, 5, 10, 20], difficulty: 1 },
          { id: 'q-1-2-4-05', question: '1 张 20 元可以换几张 10 元？', answer: 2, options: [1, 2, 5, 10], difficulty: 2 },
          { id: 'q-1-2-4-06', question: '5 角 + 5 角 = ? 元', answer: 1, options: [1, 5, 10, 50], difficulty: 2 },
          { id: 'q-1-2-4-07', question: '🧸 一个玩偶 8 元，付了 10 元，找回多少元？', answer: 2, options: [1, 2, 8, 18], difficulty: 2 },
          { id: 'q-1-2-4-08', question: '🍦 冰淇淋 3 元 5 角，付了 5 元，找回多少？', answer: '1元5角', options: ['1元5角', '2元5角', '5角', '1元'], difficulty: 3 },
          { id: 'q-1-2-4-09', question: '📏 一把尺子 1 元 5 角，用 2 元买，找回多少？', answer: '5角', options: ['5角', '1元', '1元5角', '3元5角'], difficulty: 3 },
        ],
      },
      {
        id: '1-2-5',
        name: '找规律',
        icon: '🔁',
        questions: [
          { id: 'q-1-2-5-01', question: '🔴🔵🔴🔵🔴____，横线该填什么？', answer: '🔵', options: ['🔴', '🔵', '⚪', '⬛'], difficulty: 1 },
          { id: 'q-1-2-5-02', question: '1, 2, 3, 1, 2, 3, 1, 2, __', answer: 3, options: [1, 2, 3, 4], difficulty: 1 },
          { id: 'q-1-2-5-03', question: '2, 4, 6, 8, __', answer: 10, options: [5, 7, 9, 10], difficulty: 1 },
          { id: 'q-1-2-5-04', question: '5, 10, 15, 20, __', answer: 25, options: [21, 22, 25, 30], difficulty: 1 },
          { id: 'q-1-2-5-05', question: '1, 3, 5, 7, __', answer: 9, options: [6, 8, 9, 10], difficulty: 2 },
          { id: 'q-1-2-5-06', question: '🎵 🎵 🎶 🎵 🎵 🎶 🎵 🎵 __', answer: '🎶', options: ['🎵', '🎶', '🎤', '🎧'], difficulty: 2 },
          { id: 'q-1-2-5-07', question: '⬆️⬇️⬆️⬇️⬆️__', answer: '⬇️', options: ['⬆️', '⬇️', '⬅️', '➡️'], difficulty: 1 },
          { id: 'q-1-2-5-08', question: '100, 90, 80, 70, __', answer: 60, options: [50, 60, 65, 80], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 二年级上
  // ==========================================================
  '2-1': {
    name: '二年级上册',
    units: [
      {
        id: '2-1-1',
        name: '长度单位',
        icon: '📏',
        questions: [
          { id: 'q-2-1-1-01', question: '我们常用的长度单位是____？', answer: '厘米和米', options: ['厘米和米', '斤和两', '元和角', '时和分'], difficulty: 1 },
          { id: 'q-2-1-1-02', question: '1 米 = ? 厘米', answer: 100, options: [10, 50, 100, 1000], difficulty: 1 },
          { id: 'q-2-1-1-03', question: '📏 一支铅笔大约长多少？', answer: '18厘米', options: ['18厘米', '18米', '18毫米', '18分米'], difficulty: 2 },
          { id: 'q-2-1-1-04', question: '🚪 一扇门大约高多少？', answer: '2米', options: ['2厘米', '2米', '2分米', '20米'], difficulty: 2 },
          { id: 'q-2-1-1-05', question: '📐 一把尺子的长度大约是____？', answer: '20厘米', options: ['2厘米', '20厘米', '2米', '20米'], difficulty: 2 },
          { id: 'q-2-1-1-06', question: '🏃 教室的宽度大约是____？', answer: '6米', options: ['6厘米', '6米', '60米', '6毫米'], difficulty: 2 },
          { id: 'q-2-1-1-07', question: '2 米 = ? 厘米', answer: 200, options: [20, 200, 2000, 2], difficulty: 2 },
          { id: 'q-2-1-1-08', question: '300 厘米 = ? 米', answer: 3, options: [30, 3, 300, 0.3], difficulty: 2 },
        ],
      },
      {
        id: '2-1-2',
        name: '100以内的加法和减法（二）',
        icon: '🧮',
        questions: [
          { id: 'q-2-1-2-01', question: '27 + 35 = ?', answer: 62, options: [52, 62, 72, 612], difficulty: 2 },
          { id: 'q-2-1-2-02', question: '46 + 28 = ?', answer: 74, options: [64, 68, 74, 84], difficulty: 2 },
          { id: 'q-2-1-2-03', question: '53 + 39 = ?', answer: 92, options: [82, 92, 93, 102], difficulty: 2 },
          { id: 'q-2-1-2-04', question: '64 + 27 = ?', answer: 91, options: [81, 91, 101, 811], difficulty: 2 },
          { id: 'q-2-1-2-05', question: '72 - 35 = ?', answer: 37, options: [27, 37, 47, 107], difficulty: 2 },
          { id: 'q-2-1-2-06', question: '81 - 46 = ?', answer: 35, options: [25, 35, 45, 127], difficulty: 2 },
          { id: 'q-2-1-2-07', question: '90 - 27 = ?', answer: 63, options: [53, 63, 73, 117], difficulty: 2 },
          { id: 'q-2-1-2-08', question: '56 - 38 = ?', answer: 18, options: [8, 18, 28, 22], difficulty: 2 },
          { id: 'q-2-1-2-09', question: '📚 书架上有 45 本书，又放进了 38 本，现在一共有几本？', answer: 83, options: [73, 83, 93, 78], difficulty: 3 },
          { id: 'q-2-1-2-10', question: '🚗 停车场有 73 辆车，开走了 45 辆，还剩几辆？', answer: 28, options: [18, 28, 38, 32], difficulty: 3 },
        ],
      },
      {
        id: '2-1-3',
        name: '角的初步认识',
        icon: '📐',
        questions: [
          { id: 'q-2-1-3-01', question: '角是由几条边组成的？', answer: '2条', options: ['1条', '2条', '3条', '4条'], difficulty: 1 },
          { id: 'q-2-1-3-02', question: '一个角有几个顶点？', answer: '1个', options: ['1个', '2个', '3个', '4个'], difficulty: 1 },
          { id: 'q-2-1-3-03', question: '📐 三角尺上有几个角？', answer: 3, options: [1, 2, 3, 4], difficulty: 1 },
          { id: 'q-2-1-3-04', question: '⬜ 正方形有几个直角？', answer: 4, options: [2, 3, 4, 6], difficulty: 2 },
          { id: 'q-2-1-3-05', question: '▭ 长方形有几个直角？', answer: 4, options: [2, 3, 4, 6], difficulty: 2 },
          { id: 'q-2-1-3-06', question: '🔺 三角形最多有几个直角？', answer: 1, options: [0, 1, 2, 3], difficulty: 3 },
          { id: 'q-2-1-3-07', question: '比直角大的角叫什么？', answer: '钝角', options: ['锐角', '钝角', '直角', '平角'], difficulty: 3 },
          { id: 'q-2-1-3-08', question: '比直角小的角叫什么？', answer: '锐角', options: ['锐角', '钝角', '直角', '平角'], difficulty: 3 },
        ],
      },
      {
        id: '2-1-4',
        name: '表内乘法（一）',
        icon: '✖️',
        questions: [
          { id: 'q-2-1-4-01', question: '2 × 3 = ?', answer: 6, options: [5, 6, 8, 9], difficulty: 1 },
          { id: 'q-2-1-4-02', question: '2 × 5 = ?', answer: 10, options: [7, 8, 10, 12], difficulty: 1 },
          { id: 'q-2-1-4-03', question: '2 × 7 = ?', answer: 14, options: [9, 12, 14, 16], difficulty: 1 },
          { id: 'q-2-1-4-04', question: '3 × 3 = ?', answer: 9, options: [6, 8, 9, 12], difficulty: 1 },
          { id: 'q-2-1-4-05', question: '3 × 4 = ?', answer: 12, options: [7, 10, 12, 15], difficulty: 1 },
          { id: 'q-2-1-4-06', question: '3 × 6 = ?', answer: 18, options: [9, 12, 15, 18], difficulty: 2 },
          { id: 'q-2-1-4-07', question: '4 × 3 = ?', answer: 12, options: [7, 10, 12, 16], difficulty: 1 },
          { id: 'q-2-1-4-08', question: '4 × 5 = ?', answer: 20, options: [9, 16, 20, 25], difficulty: 2 },
          { id: 'q-2-1-4-09', question: '4 × 7 = ?', answer: 28, options: [11, 21, 28, 32], difficulty: 2 },
          { id: 'q-2-1-4-10', question: '5 × 3 = ?', answer: 15, options: [8, 10, 15, 20], difficulty: 1 },
          { id: 'q-2-1-4-11', question: '5 × 6 = ?', answer: 30, options: [11, 25, 30, 35], difficulty: 2 },
          { id: 'q-2-1-4-12', question: '5 × 9 = ?', answer: 45, options: [14, 40, 45, 50], difficulty: 2 },
          { id: 'q-2-1-4-13', question: '🐾 一只小猫有 2 只耳朵，3 只小猫有几只耳朵？', answer: 6, options: [5, 6, 8, 9], difficulty: 2 },
          { id: 'q-2-1-4-14', question: '🦆 一只鸭子有 2 条腿，7 只鸭子有几条腿？', answer: 14, options: [9, 12, 14, 16], difficulty: 2 },
        ],
      },
      {
        id: '2-1-5',
        name: '表内乘法（二）—— 6~9',
        icon: '✖️',
        questions: [
          { id: 'q-2-1-5-01', question: '6 × 3 = ?', answer: 18, options: [9, 12, 18, 24], difficulty: 2 },
          { id: 'q-2-1-5-02', question: '6 × 4 = ?', answer: 24, options: [10, 18, 24, 30], difficulty: 2 },
          { id: 'q-2-1-5-03', question: '6 × 7 = ?', answer: 42, options: [13, 36, 42, 48], difficulty: 2 },
          { id: 'q-2-1-5-04', question: '7 × 3 = ?', answer: 21, options: [10, 21, 24, 28], difficulty: 2 },
          { id: 'q-2-1-5-05', question: '7 × 5 = ?', answer: 35, options: [12, 30, 35, 40], difficulty: 2 },
          { id: 'q-2-1-5-06', question: '7 × 8 = ?', answer: 56, options: [15, 48, 56, 64], difficulty: 2 },
          { id: 'q-2-1-5-07', question: '8 × 3 = ?', answer: 24, options: [11, 16, 24, 32], difficulty: 2 },
          { id: 'q-2-1-5-08', question: '8 × 6 = ?', answer: 48, options: [14, 42, 48, 56], difficulty: 2 },
          { id: 'q-2-1-5-09', question: '8 × 9 = ?', answer: 72, options: [17, 64, 72, 81], difficulty: 2 },
          { id: 'q-2-1-5-10', question: '9 × 3 = ?', answer: 27, options: [12, 18, 27, 36], difficulty: 2 },
          { id: 'q-2-1-5-11', question: '9 × 6 = ?', answer: 54, options: [15, 48, 54, 63], difficulty: 2 },
          { id: 'q-2-1-5-12', question: '9 × 9 = ?', answer: 81, options: [18, 72, 81, 90], difficulty: 2 },
          { id: 'q-2-1-5-13', question: '🕷️ 一只蜘蛛有 8 条腿，4 只蜘蛛有几条腿？', answer: 32, options: [12, 24, 32, 40], difficulty: 3 },
          { id: 'q-2-1-5-14', question: '🐙 一只章鱼有 8 条触手，7 只章鱼有几条触手？', answer: 56, options: [15, 48, 56, 64], difficulty: 3 },
        ],
      },
    ],
  },

  // ==========================================================
  // 二年级下
  // ==========================================================
  '2-2': {
    name: '二年级下册',
    units: [
      {
        id: '2-2-1',
        name: '混合运算',
        icon: '🔀',
        questions: [
          { id: 'q-2-2-1-01', question: '3 + 2 × 4 = ?', answer: 11, options: [11, 20, 14, 24], difficulty: 3 },
          { id: 'q-2-2-1-02', question: '2 × 3 + 5 = ?', answer: 11, options: [11, 16, 10, 21], difficulty: 2 },
          { id: 'q-2-2-1-03', question: '15 - 3 × 2 = ?', answer: 9, options: [9, 24, 12, 0], difficulty: 3 },
          { id: 'q-2-2-1-04', question: '4 × 5 - 8 = ?', answer: 12, options: [12, -12, 28, 20], difficulty: 2 },
          { id: 'q-2-2-1-05', question: '(2 + 3) × 4 = ?', answer: 20, options: [14, 20, 24, 9], difficulty: 3 },
          { id: 'q-2-2-1-06', question: '3 × (4 + 2) = ?', answer: 18, options: [14, 18, 24, 10], difficulty: 3 },
          { id: 'q-2-2-1-07', question: '18 ÷ 3 + 5 = ?', answer: 11, options: [6, 11, 8, 23], difficulty: 3 },
          { id: 'q-2-2-1-08', question: '20 - 12 ÷ 4 = ?', answer: 17, options: [2, 17, 8, 12], difficulty: 3 },
        ],
      },
      {
        id: '2-2-2',
        name: '万以内数的认识',
        icon: '🔢',
        questions: [
          { id: 'q-2-2-2-01', question: '1000 元读作____？', answer: '一千元', options: ['一百元', '一千元', '一万元', '十百元'], difficulty: 1 },
          { id: 'q-2-2-2-02', question: '3456 读作____？', answer: '三千四百五十六', options: ['三千四百五十六', '三千五十六', '三百四十五六', '三万四千五百六十'], difficulty: 2 },
          { id: 'q-2-2-2-03', question: '5 个千、3 个百、2 个十合起来是多少？', answer: 5320, options: [532, 5320, 50320, 53200], difficulty: 2 },
          { id: 'q-2-2-2-04', question: '2800 里面有____？', answer: '28个百', options: ['28个百', '2个千8个百', '280个十', '全部都对'], difficulty: 3 },
          { id: 'q-2-2-2-05', question: '比 3999 大 1 的数是多少？', answer: 4000, options: [4000, 4001, 31000, 39910], difficulty: 2 },
          { id: 'q-2-2-2-06', question: '比 5000 小 1 的数是多少？', answer: 4999, options: [4999, 4000, 4900, 5001], difficulty: 2 },
          { id: 'q-2-2-2-07', question: '🔢 最大的四位数是多少？', answer: 9999, options: [1000, 9999, 10000, 99999], difficulty: 3 },
          { id: 'q-2-2-2-08', question: '🔢 最小的四位数是多少？', answer: 1000, options: [0, 1, 1000, 1111], difficulty: 3 },
        ],
      },
      {
        id: '2-2-3',
        name: '克和千克',
        icon: '⚖️',
        questions: [
          { id: 'q-2-2-3-01', question: '1 千克 = ? 克', answer: 1000, options: [100, 500, 1000, 10000], difficulty: 1 },
          { id: 'q-2-2-3-02', question: '⚖️ 一个苹果大约重多少？', answer: '200克', options: ['20克', '200克', '2千克', '20千克'], difficulty: 2 },
          { id: 'q-2-2-3-03', question: '⚖️ 一个鸡蛋大约重多少？', answer: '50克', options: ['5克', '50克', '500克', '5千克'], difficulty: 2 },
          { id: 'q-2-2-3-04', question: '⚖️ 一个小朋友大约重多少？', answer: '25千克', options: ['25克', '250克', '25千克', '250千克'], difficulty: 2 },
          { id: 'q-2-2-3-05', question: '3 千克 = ? 克', answer: 3000, options: [300, 3000, 30000, 30], difficulty: 1 },
          { id: 'q-2-2-3-06', question: '5000 克 = ? 千克', answer: 5, options: [50, 5, 500, 0.5], difficulty: 1 },
        ],
      },
      {
        id: '2-2-4',
        name: '有余数的除法',
        icon: '➗',
        questions: [
          { id: 'q-2-2-4-01', question: '13 ÷ 4 = ? ... ?', answer: '3余1', options: ['3余1', '4余1', '3余2', '2余5'], difficulty: 2 },
          { id: 'q-2-2-4-02', question: '17 ÷ 5 = ? ... ?', answer: '3余2', options: ['3余2', '4余3', '3余1', '2余7'], difficulty: 2 },
          { id: 'q-2-2-4-03', question: '20 ÷ 6 = ? ... ?', answer: '3余2', options: ['3余2', '4余4', '3余1', '2余8'], difficulty: 2 },
          { id: 'q-2-2-4-04', question: '25 ÷ 3 = ? ... ?', answer: '8余1', options: ['8余1', '7余4', '8余2', '7余3'], difficulty: 2 },
          { id: 'q-2-2-4-05', question: '14 ÷ 3 = ? ... ?', answer: '4余2', options: ['4余2', '4余1', '5余1', '3余5'], difficulty: 2 },
          { id: 'q-2-2-4-06', question: '🥟 15 个饺子，每个盘子放 6 个，可以放几盘？还剩几个？', answer: '2盘剩3个', options: ['2盘剩3个', '3盘', '2盘剩1个', '1盘剩9个'], difficulty: 3 },
          { id: 'q-2-2-4-07', question: '🎈 22 个气球，每个小朋友分 5 个，可以分给几人？还剩几个？', answer: '4人剩2个', options: ['4人剩2个', '5人', '4人剩3个', '3人剩7个'], difficulty: 3 },
        ],
      },
      {
        id: '2-2-5',
        name: '数据的收集与整理',
        icon: '📊',
        questions: [
          { id: 'q-2-2-5-01', question: '📊 统计中常用"正"字计数，一个"正"字代表几？', answer: 5, options: [3, 4, 5, 10], difficulty: 1 },
          { id: 'q-2-2-5-02', question: '🍎🍎🍎🍎🍋🍋🍋 哪种水果多？', answer: '苹果', options: ['苹果', '柠檬', '一样多', '不知道'], difficulty: 1 },
          { id: 'q-2-2-5-03', question: '📈 小红考了 95 分，小明考了 88 分，谁考得高？', answer: '小红', options: ['小红', '小明', '一样', '不知道'], difficulty: 1 },
        ],
      },
    ],
  },

  // ==========================================================
  // 三年级上 — 万以内加减 & 乘除法入门
  // ==========================================================
  '3-1': {
    name: '三年级上册',
    units: [
      {
        id: '3-1-1', name: '万以内的加法和减法', icon: '➕',
        questions: [
          { id: 'q-3-1-1-01', question: '230 + 150 = ?', answer: 380, options: [280, 380, 480, 380], difficulty: 1 },
          { id: 'q-3-1-1-02', question: '560 - 230 = ?', answer: 330, options: [230, 330, 430, 530], difficulty: 1 },
          { id: 'q-3-1-1-03', question: '1200 + 800 = ?', answer: 2000, options: [1000, 1800, 2000, 2200], difficulty: 1 },
          { id: 'q-3-1-1-04', question: '3500 - 1500 = ?', answer: 2000, options: [1000, 2000, 2500, 3000], difficulty: 1 },
          { id: 'q-3-1-1-05', question: '468 + 327 = ?', answer: 795, options: [685, 795, 785, 895], difficulty: 2 },
          { id: 'q-3-1-1-06', question: '804 - 567 = ?', answer: 237, options: [237, 247, 337, 347], difficulty: 2 },
          { id: 'q-3-1-1-07', question: '📚 学校图书馆有故事书 860 本，科技书比故事书少 190 本，科技书有多少本？', answer: 670, options: [670, 760, 770, 1050], difficulty: 2 },
          { id: 'q-3-1-1-08', question: '🚗 从北京到上海的高铁有 1318 公里，已经行驶了 786 公里，还剩多少公里？', answer: 532, options: [432, 532, 632, 542], difficulty: 2 },
        ],
      },
      {
        id: '3-1-2', name: '多位数乘一位数', icon: '✖️',
        questions: [
          { id: 'q-3-1-2-01', question: '20 × 4 = ?', answer: 80, options: [60, 80, 100, 120], difficulty: 1 },
          { id: 'q-3-1-2-02', question: '300 × 3 = ?', answer: 900, options: [600, 900, 1000, 1200], difficulty: 1 },
          { id: 'q-3-1-2-03', question: '12 × 4 = ?', answer: 48, options: [36, 48, 52, 64], difficulty: 2 },
          { id: 'q-3-1-2-04', question: '23 × 3 = ?', answer: 69, options: [59, 66, 69, 79], difficulty: 2 },
          { id: 'q-3-1-2-05', question: '124 × 2 = ?', answer: 248, options: [228, 238, 248, 268], difficulty: 2 },
          { id: 'q-3-1-2-06', question: '305 × 3 = ?', answer: 915, options: [905, 915, 925, 945], difficulty: 2 },
          { id: 'q-3-1-2-07', question: '🍎 一箱有 24 个苹果，6 箱一共有多少个？', answer: 144, options: [124, 134, 144, 154], difficulty: 2 },
        ],
      },
      {
        id: '3-1-3', name: '长方形和正方形', icon: '⬜',
        questions: [
          { id: 'q-3-1-3-01', question: '长方形有____条边，____个角', answer: '4条边4个角', options: ['4条边4个角', '3条边3个角', '4条边3个角', '6条边4个角'], difficulty: 1 },
          { id: 'q-3-1-3-02', question: '正方形的四条边都____', answer: '相等', options: ['相等', '不相等', '有长有短', '两条相等'], difficulty: 1 },
          { id: 'q-3-1-3-03', question: '长方形的长是 6 厘米，宽是 4 厘米，周长是多少？', answer: 20, options: [10, 20, 24, 14], difficulty: 2 },
          { id: 'q-3-1-3-04', question: '正方形的边长是 5 厘米，周长是多少？', answer: 20, options: [5, 10, 20, 25], difficulty: 2 },
          { id: 'q-3-1-3-05', question: '🏀 篮球场长 28 米，宽 15 米，周长是多少米？', answer: 86, options: [43, 86, 78, 56], difficulty: 3 },
        ],
      },
      {
        id: '3-1-4', name: '分数的初步认识', icon: '🧮',
        questions: [
          { id: 'q-3-1-4-01', question: '把一张饼平均分成 4 份，每份是这张饼的几分之几？', answer: '1/4', options: ['1/2', '1/4', '1/3', '1/5'], difficulty: 1 },
          { id: 'q-3-1-4-02', question: '🍕 一个披萨平均切成 8 块，吃了 3 块，吃了这个披萨的几分之几？', answer: '3/8', options: ['3/8', '5/8', '1/8', '8/3'], difficulty: 2 },
          { id: 'q-3-1-4-03', question: '1/4 和 1/3 哪个大？', answer: '1/3', options: ['1/4', '1/3', '一样大', '无法比较'], difficulty: 2 },
          { id: 'q-3-1-4-04', question: '2/5 + 1/5 = ?', answer: '3/5', options: ['3/5', '3/10', '1/5', '2/5'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 三年级下
  // ==========================================================
  '3-2': {
    name: '三年级下册',
    units: [
      {
        id: '3-2-1', name: '除数是一位数的除法', icon: '➗',
        questions: [
          { id: 'q-3-2-1-01', question: '60 ÷ 3 = ?', answer: 20, options: [10, 20, 30, 15], difficulty: 1 },
          { id: 'q-3-2-1-02', question: '800 ÷ 4 = ?', answer: 200, options: [100, 200, 300, 400], difficulty: 1 },
          { id: 'q-3-2-1-03', question: '84 ÷ 4 = ?', answer: 21, options: [11, 21, 24, 18], difficulty: 2 },
          { id: 'q-3-2-1-04', question: '96 ÷ 3 = ?', answer: 32, options: [22, 32, 36, 28], difficulty: 2 },
          { id: 'q-3-2-1-05', question: '144 ÷ 6 = ?', answer: 24, options: [22, 24, 26, 28], difficulty: 2 },
          { id: 'q-3-2-1-06', question: '🍬 120 颗糖平均分给 8 个小朋友，每人几颗？', answer: 15, options: [10, 12, 15, 20], difficulty: 2 },
        ],
      },
      {
        id: '3-2-2', name: '两位数乘两位数', icon: '✖️',
        questions: [
          { id: 'q-3-2-2-01', question: '12 × 10 = ?', answer: 120, options: [110, 120, 130, 140], difficulty: 1 },
          { id: 'q-3-2-2-02', question: '11 × 11 = ?', answer: 121, options: [111, 121, 131, 122], difficulty: 2 },
          { id: 'q-3-2-2-03', question: '15 × 14 = ?', answer: 210, options: [190, 200, 210, 220], difficulty: 2 },
          { id: 'q-3-2-2-04', question: '23 × 12 = ?', answer: 276, options: [256, 266, 276, 286], difficulty: 2 },
          { id: 'q-3-2-2-05', question: '25 × 16 = ?', answer: 400, options: [350, 380, 400, 420], difficulty: 2 },
        ],
      },
      {
        id: '3-2-3', name: '面积', icon: '📐',
        questions: [
          { id: 'q-3-2-3-01', question: '边长 1 厘米的正方形，面积是____', answer: '1平方厘米', options: ['1厘米', '1平方厘米', '4厘米', '4平方厘米'], difficulty: 1 },
          { id: 'q-3-2-3-02', question: '长方形的长 5 厘米，宽 3 厘米，面积是多少？', answer: 15, options: [8, 15, 16, 10], difficulty: 2 },
          { id: 'q-3-2-3-03', question: '正方形的边长是 6 厘米，面积是多少？', answer: 36, options: [12, 24, 36, 48], difficulty: 2 },
          { id: 'q-3-2-3-04', question: '🏠 一间卧室长 4 米，宽 3 米，面积是多少平方米？', answer: 12, options: [7, 12, 14, 16], difficulty: 2 },
        ],
      },
      {
        id: '3-2-4', name: '年、月、日', icon: '📅',
        questions: [
          { id: 'q-3-2-4-01', question: '一年有____个月', answer: 12, options: [10, 11, 12, 13], difficulty: 1 },
          { id: 'q-3-2-4-02', question: '一个月最多有____天', answer: 31, options: [30, 31, 28, 29], difficulty: 1 },
          { id: 'q-3-2-4-03', question: '平年二月有____天', answer: 28, options: [28, 29, 30, 31], difficulty: 1 },
          { id: 'q-3-2-4-04', question: '闰年全年有____天', answer: 366, options: [365, 366, 367, 364], difficulty: 2 },
          { id: 'q-3-2-4-05', question: '2024年是平年还是闰年？', answer: '闰年', options: ['平年', '闰年', '不知道'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 四年级上
  // ==========================================================
  '4-1': {
    name: '四年级上册',
    units: [
      {
        id: '4-1-1', name: '大数的认识', icon: '🔢',
        questions: [
          { id: 'q-4-1-1-01', question: '一万是____个一千', answer: 10, options: [1, 10, 100, 1000], difficulty: 1 },
          { id: 'q-4-1-1-02', question: '一亿是____个一万', answer: 10000, options: [1000, 10000, 100, 100000], difficulty: 1 },
          { id: 'q-4-1-1-03', question: '20304050 读作？', answer: '二千零三十万四千零五十', options: ['二千零三十万四千零五十', '二百零三万四千零五十', '二千零三十万四千零五', '二千零三四十零五十'], difficulty: 2 },
          { id: 'q-4-1-1-04', question: '五百万三千写作？', answer: 5003000, options: [5003000, 5030000, 5000300, 5000030], difficulty: 2 },
        ],
      },
      {
        id: '4-1-2', name: '三位数乘两位数', icon: '✖️',
        questions: [
          { id: 'q-4-1-2-01', question: '120 × 30 = ?', answer: 3600, options: [360, 3600, 36000, 360], difficulty: 1 },
          { id: 'q-4-1-2-02', question: '205 × 12 = ?', answer: 2460, options: [2360, 2460, 2560, 2460], difficulty: 2 },
          { id: 'q-4-1-2-03', question: '324 × 25 = ?', answer: 8100, options: [8000, 8100, 8200, 8150], difficulty: 2 },
          { id: 'q-4-1-2-04', question: '🚄 一列高铁每小时行 280 公里，12 小时行多少公里？', answer: 3360, options: [3260, 3360, 3460, 3360], difficulty: 2 },
        ],
      },
      {
        id: '4-1-3', name: '平行四边形和梯形', icon: '▱',
        questions: [
          { id: 'q-4-1-3-01', question: '平行四边形有几组对边平行？', answer: '2组', options: ['1组', '2组', '0组', '3组'], difficulty: 1 },
          { id: 'q-4-1-3-02', question: '梯形有____组对边平行', answer: '1组', options: ['0组', '1组', '2组', '3组'], difficulty: 1 },
          { id: 'q-4-1-3-03', question: '长方形是特殊的____', answer: '平行四边形', options: ['三角形', '平行四边形', '梯形', '圆形'], difficulty: 1 },
        ],
      },
    ],
  },

  // ==========================================================
  // 四年级下
  // ==========================================================
  '4-2': {
    name: '四年级下册',
    units: [
      {
        id: '4-2-1', name: '四则运算', icon: '🧮',
        questions: [
          { id: 'q-4-2-1-01', question: '25 + 75 ÷ 5 = ?', answer: 40, options: [20, 30, 40, 50], difficulty: 2 },
          { id: 'q-4-2-1-02', question: '(15 + 25) × 4 = ?', answer: 160, options: [100, 140, 160, 180], difficulty: 2 },
          { id: 'q-4-2-1-03', question: '120 - 20 × 3 = ?', answer: 60, options: [0, 60, 100, 300], difficulty: 2 },
          { id: 'q-4-2-1-04', question: '48 ÷ (12 - 4) = ?', answer: 6, options: [4, 6, 8, 12], difficulty: 2 },
        ],
      },
      {
        id: '4-2-2', name: '运算定律', icon: '⚡',
        questions: [
          { id: 'q-4-2-2-01', question: '25 × 13 × 4 = 25 × 4 × 13 用了什么定律？', answer: '乘法交换律', options: ['加法交换律', '乘法交换律', '乘法结合律', '分配律'], difficulty: 1 },
          { id: 'q-4-2-2-02', question: '125 × 32 用简便方法怎么算？', answer: '125×8×4', options: ['125×8×4', '125×30+2', '100×32+25', '125×4×8'], difficulty: 2 },
          { id: 'q-4-2-2-03', question: '99 × 57 + 57 的简便计算是？', answer: '57×(99+1)', options: ['57×99+57', '57×(99+1)', '(99+57)×57', '100×57-57'], difficulty: 2 },
        ],
      },
      {
        id: '4-2-3', name: '小数的意义和性质', icon: '🔟',
        questions: [
          { id: 'q-4-2-3-01', question: '0.5 等于几分之几？', answer: '1/2', options: ['1/2', '1/5', '5/10', '5/100'], difficulty: 1 },
          { id: 'q-4-2-3-02', question: '0.25 读作？', answer: '零点二五', options: ['零点二十五', '零点二五', '二十五', '零点零二五'], difficulty: 1 },
          { id: 'q-4-2-3-03', question: '3.05 米 = ____厘米', answer: 305, options: [35, 305, 350, 3050], difficulty: 2 },
          { id: 'q-4-2-3-04', question: '0.8 和 0.80 哪个大？', answer: '一样大', options: ['0.8大', '0.80大', '一样大', '无法比较'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 五年级上
  // ==========================================================
  '5-1': {
    name: '五年级上册',
    units: [
      {
        id: '5-1-1', name: '小数乘法', icon: '✖️',
        questions: [
          { id: 'q-5-1-1-01', question: '0.5 × 6 = ?', answer: 3, options: [0.3, 3, 30, 0.03], difficulty: 1 },
          { id: 'q-5-1-1-02', question: '2.5 × 4 = ?', answer: 10, options: [1, 8, 10, 100], difficulty: 1 },
          { id: 'q-5-1-1-03', question: '1.2 × 0.5 = ?', answer: 0.6, options: [0.06, 0.6, 6, 60], difficulty: 2 },
          { id: 'q-5-1-1-04', question: '3.6 × 0.25 = ?', answer: 0.9, options: [0.09, 0.9, 9, 90], difficulty: 2 },
          { id: 'q-5-1-1-05', question: '💰 每千克苹果 8.5 元，买 2.5 千克需要多少元？', answer: 21.25, options: [17, 21.25, 21.5, 20], difficulty: 2 },
        ],
      },
      {
        id: '5-1-2', name: '小数除法', icon: '➗',
        questions: [
          { id: 'q-5-1-2-01', question: '4.8 ÷ 6 = ?', answer: 0.8, options: [0.08, 0.8, 8, 80], difficulty: 1 },
          { id: 'q-5-1-2-02', question: '7.5 ÷ 5 = ?', answer: 1.5, options: [0.15, 1.5, 15, 150], difficulty: 1 },
          { id: 'q-5-1-2-03', question: '1.2 ÷ 0.3 = ?', answer: 4, options: [0.4, 4, 40, 0.04], difficulty: 2 },
          { id: 'q-5-1-2-04', question: '9.6 ÷ 0.8 = ?', answer: 12, options: [1.2, 12, 120, 0.12], difficulty: 2 },
        ],
      },
      {
        id: '5-1-3', name: '简易方程', icon: '❓',
        questions: [
          { id: 'q-5-1-3-01', question: 'x + 5 = 12，x = ?', answer: 7, options: [5, 7, 12, 17], difficulty: 1 },
          { id: 'q-5-1-3-02', question: '3x = 18，x = ?', answer: 6, options: [3, 6, 9, 15], difficulty: 1 },
          { id: 'q-5-1-3-03', question: '2x + 3 = 11，x = ?', answer: 4, options: [2, 4, 5, 8], difficulty: 2 },
          { id: 'q-5-1-3-04', question: '5x - 8 = 22，x = ?', answer: 6, options: [3, 6, 8, 14], difficulty: 2 },
        ],
      },
      {
        id: '5-1-4', name: '多边形的面积', icon: '📐',
        questions: [
          { id: 'q-5-1-4-01', question: '三角形面积公式是？', answer: '底×高÷2', options: ['底×高', '底×高÷2', '边长×边长', '长×宽'], difficulty: 1 },
          { id: 'q-5-1-4-02', question: '底 6 厘米、高 4 厘米的三角形面积是？', answer: 12, options: [12, 24, 10, 20], difficulty: 2 },
          { id: 'q-5-1-4-03', question: '上底 3 厘米、下底 5 厘米、高 4 厘米的梯形面积是？', answer: 16, options: [12, 16, 20, 32], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 五年级下
  // ==========================================================
  '5-2': {
    name: '五年级下册',
    units: [
      {
        id: '5-2-1', name: '因数与倍数', icon: '🔢',
        questions: [
          { id: 'q-5-2-1-01', question: '12 的因数有____个', answer: 6, options: [4, 5, 6, 8], difficulty: 1 },
          { id: 'q-5-2-1-02', question: '20 以内的质数有____个', answer: 8, options: [4, 6, 8, 10], difficulty: 2 },
          { id: 'q-5-2-1-03', question: '下面的数中，哪个是合数？', answer: 15, options: [11, 13, 15, 17], difficulty: 2 },
          { id: 'q-5-2-1-04', question: '2、3、4 的最小公倍数是？', answer: 12, options: [6, 12, 24, 36], difficulty: 2 },
        ],
      },
      {
        id: '5-2-2', name: '分数的意义和性质', icon: '🧮',
        questions: [
          { id: 'q-5-2-2-01', question: '3/4 的分子是？', answer: 3, options: [3, 4, 7, 1], difficulty: 1 },
          { id: 'q-5-2-2-02', question: '2/5 和 1/3 通分后分别是？', answer: '6/15 和 5/15', options: ['6/15 和 5/15', '2/15 和 1/15', '10/15 和 5/15', '6/15 和 3/15'], difficulty: 2 },
          { id: 'q-5-2-2-03', question: '约分 8/12 = ?', answer: '2/3', options: ['1/3', '2/3', '4/6', '3/4'], difficulty: 2 },
          { id: 'q-5-2-2-04', question: '🍰 一个蛋糕平均分成 8 块，吃了 3 块，还剩几分之几？', answer: '5/8', options: ['3/8', '5/8', '1/8', '4/8'], difficulty: 1 },
        ],
      },
      {
        id: '5-2-3', name: '分数的加法和减法', icon: '➕',
        questions: [
          { id: 'q-5-2-3-01', question: '1/4 + 2/4 = ?', answer: '3/4', options: ['3/8', '3/4', '3/16', '1'], difficulty: 1 },
          { id: 'q-5-2-3-02', question: '5/6 - 1/6 = ?', answer: '2/3', options: ['1/2', '2/3', '4/6', '1/3'], difficulty: 1 },
          { id: 'q-5-2-3-03', question: '1/2 + 1/3 = ?', answer: '5/6', options: ['2/5', '1/5', '5/6', '2/6'], difficulty: 2 },
          { id: 'q-5-2-3-04', question: '5/8 + 1/4 = ?', answer: '7/8', options: ['6/12', '3/4', '7/8', '5/12'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 六年级上
  // ==========================================================
  '6-1': {
    name: '六年级上册',
    units: [
      {
        id: '6-1-1', name: '分数乘法', icon: '✖️',
        questions: [
          { id: 'q-6-1-1-01', question: '1/2 × 1/3 = ?', answer: '1/6', options: ['1/5', '1/6', '2/5', '2/6'], difficulty: 2 },
          { id: 'q-6-1-1-02', question: '2/3 × 6 = ?', answer: 4, options: [2, 3, 4, 6], difficulty: 2 },
          { id: 'q-6-1-1-03', question: '3/4 × 2/5 = ?', answer: '3/10', options: ['3/10', '6/20', '5/9', '1/10'], difficulty: 2 },
          { id: 'q-6-1-1-04', question: '📏 一根绳子长 4/5 米，用去 1/3，用去多少米？', answer: '4/15', options: ['4/15', '8/15', '1/15', '3/5'], difficulty: 3 },
        ],
      },
      {
        id: '6-1-2', name: '分数除法', icon: '➗',
        questions: [
          { id: 'q-6-1-2-01', question: '1/2 ÷ 1/4 = ?', answer: 2, options: [0.5, 1, 2, 4], difficulty: 2 },
          { id: 'q-6-1-2-02', question: '3/5 ÷ 3 = ?', answer: '1/5', options: ['1/5', '5/3', '9/5', '1'], difficulty: 2 },
          { id: 'q-6-1-2-03', question: '4/7 ÷ 2/3 = ?', answer: '6/7', options: ['6/7', '8/21', '2/7', '7/6'], difficulty: 2 },
        ],
      },
      {
        id: '6-1-3', name: '比', icon: '⚖️',
        questions: [
          { id: 'q-6-1-3-01', question: '3 : 5 = ____ : 10', answer: 6, options: [3, 5, 6, 10], difficulty: 1 },
          { id: 'q-6-1-3-02', question: '化简比 4 : 8 = ?', answer: '1 : 2', options: ['1 : 2', '2 : 4', '4 : 8', '2 : 1'], difficulty: 1 },
          { id: 'q-6-1-3-03', question: '🍎🍊 苹果和橙子的数量比是 3 : 2，苹果 12 个，橙子几个？', answer: 8, options: [4, 6, 8, 10], difficulty: 2 },
        ],
      },
      {
        id: '6-1-4', name: '圆', icon: '⭕',
        questions: [
          { id: 'q-6-1-4-01', question: '圆的周长公式是？', answer: 'C=2πr', options: ['C=πr', 'C=2πr', 'C=πr²', 'C=4πr'], difficulty: 1 },
          { id: 'q-6-1-4-02', question: '圆的面积公式是？', answer: 'S=πr²', options: ['S=πr', 'S=2πr', 'S=πr²', 'S=4πr'], difficulty: 1 },
          { id: 'q-6-1-4-03', question: '半径 5 厘米的圆，直径是多少？', answer: 10, options: [5, 10, 15, 25], difficulty: 1 },
        ],
      },
    ],
  },

  // ==========================================================
  // 六年级下
  // ==========================================================
  '6-2': {
    name: '六年级下册',
    units: [
      {
        id: '6-2-1', name: '负数', icon: '➖',
        questions: [
          { id: 'q-6-2-1-01', question: '-5 读作？', answer: '负五', options: ['减五', '负五', '下五', '零下五'], difficulty: 1 },
          { id: 'q-6-2-1-02', question: '-3 和 -1 哪个大？', answer: '-1', options: ['-3', '-1', '一样大', '无法比较'], difficulty: 1 },
          { id: 'q-6-2-1-03', question: '🌡️ 温度从 -3°C 上升到 2°C，上升了多少度？', answer: 5, options: [1, 3, 5, 7], difficulty: 2 },
        ],
      },
      {
        id: '6-2-2', name: '比例', icon: '⚖️',
        questions: [
          { id: 'q-6-2-2-01', question: '比例 2 : 3 = 6 : x，x = ?', answer: 9, options: [6, 9, 12, 18], difficulty: 2 },
          { id: 'q-6-2-2-02', question: '比例尺 1 : 100000，图上 1 厘米代表实际多少千米？', answer: 1, options: [0.1, 1, 10, 100], difficulty: 2 },
          { id: 'q-6-2-2-03', question: '正比例关系中，比值____', answer: '一定', options: ['一定', '不一定', '变化', '不确定'], difficulty: 1 },
        ],
      },
      {
        id: '6-2-3', name: '圆柱与圆锥', icon: '🧊',
        questions: [
          { id: 'q-6-2-3-01', question: '圆柱的侧面展开是一个____', answer: '长方形', options: ['三角形', '长方形', '圆形', '梯形'], difficulty: 1 },
          { id: 'q-6-2-3-02', question: '圆锥的体积公式是？', answer: 'V=1/3πr²h', options: ['V=πr²h', 'V=1/3πr²h', 'V=πr²', 'V=2πrh'], difficulty: 2 },
          { id: 'q-6-2-3-03', question: '等底等高的圆锥体积是圆柱体积的____', answer: '1/3', options: ['1/2', '1/3', '2/3', '3倍'], difficulty: 2 },
          { id: 'q-6-2-3-04', question: '🍦 一个圆锥形冰淇淋，底面积 10 平方厘米，高 6 厘米，体积是多少？', answer: 20, options: [10, 20, 30, 60], difficulty: 2 },
        ],
      },
    ],
  },
};

/* ============================================================
   题库管理器
   ============================================================ */
const Questions = {
  // 获取某个年级学期的所有题目
  getQuestions(grade, semester) {
    const key = `${grade}-${semester}`;
    const data = QUESTION_BANK[key];
    if (!data) return [];
    const all = [];
    for (const unit of data.units) {
      for (const q of unit.questions) {
        all.push({
          ...q,
          grade,
          semester,
          unit: unit.id,
          unitName: unit.name,
          unitIcon: unit.icon,
        });
      }
    }
    return all;
  },

  // 获取某个单元内的题目
  getUnitQuestions(grade, semester, unitId) {
    const key = `${grade}-${semester}`;
    const data = QUESTION_BANK[key];
    if (!data) return [];
    const unit = data.units.find(u => u.id === unitId);
    if (!unit) return [];
    return unit.questions.map(q => ({
      ...q,
      grade,
      semester,
      unit: unit.id,
      unitName: unit.name,
      unitIcon: unit.icon,
    }));
  },

  // 获取所有年级学期信息
  getGradeSemesters() {
    const list = [];
    for (const key of Object.keys(QUESTION_BANK)) {
      const [g, s] = key.split('-').map(Number);
      list.push({ grade: g, semester: s, name: QUESTION_BANK[key].name, units: QUESTION_BANK[key].units });
    }
    return list;
  },

  // 获取某个年级学期的所有单元
  getUnits(grade, semester) {
    const key = `${grade}-${semester}`;
    const data = QUESTION_BANK[key];
    return data ? data.units : [];
  },

  // 根据当前设置和用户进度推荐题目
  getRecommendedQuestions(state, count = 10) {
    const grade = state.currentGrade;
    const semester = state.currentSemester;
    const allQuestions = this.getQuestions(grade, semester);
    if (allQuestions.length === 0) return [];

    // 从错题开始
    const mistakeIds = new Set(state.mistakes.map(m => m.questionId));
    const mistakes = allQuestions.filter(q => mistakeIds.has(q.id));

    // 再从未练习或正确率低的单元取
    const unitProgress = state.unitProgress;
    const normal = allQuestions.filter(q => {
      const unitKey = `${q.grade}-${q.semester}-${q.unit}`;
      const prog = unitProgress[unitKey];
      if (!prog || !prog.total) return true;
      return (prog.correct / prog.total) < 0.8;
    });

    // 组合：优先错题，其次低正确率题目，最后随机
    let selected = [];
    const seen = new Set();

    const shuffledMistakes = [...mistakes].sort(() => Math.random() - 0.5);
    const shuffledNormal = [...normal].sort(() => Math.random() - 0.5);

    for (const q of shuffledMistakes) {
      if (selected.length >= count) break;
      if (!seen.has(q.id)) {
        selected.push(q);
        seen.add(q.id);
      }
    }

    for (const q of shuffledNormal) {
      if (selected.length >= count) break;
      if (!seen.has(q.id)) {
        selected.push(q);
        seen.add(q.id);
      }
    }

    // 最后随机补充
    const remaining = allQuestions.filter(q => !seen.has(q.id));
    const shuffledRemaining = [...remaining].sort(() => Math.random() - 0.5);
    for (const q of shuffledRemaining) {
      if (selected.length >= count) break;
      selected.push(q);
      seen.add(q.id);
    }

    return selected;
  },
};

// 全局导出，供 quiz-engine 使用
window.QUESTIONS = Questions;
