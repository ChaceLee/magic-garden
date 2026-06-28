/* ============================================================
   🌸 梦幻数学花园 — 英语题库（小学1-2年级）
   字母 · 单词 · 句型 · 问答
   ============================================================ */

const ENGLISH_QUESTION_BANK = {
  // ==========================================================
  // 一年级上
  // ==========================================================
  '1-1': {
    name: '一年级上册 · 字母与问候',
    units: [
      // ---------- 字母 A-I ----------
      {
        id: '1-1-1',
        name: 'Letters Aa~Ii',
        icon: '🔤',
        questions: [
          { id: 'en-q-1-1-1-01', question: '字母 A 的大写是什么？', answer: 'A', options: ['A', 'a', 'B', 'C'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-02', question: '字母 a 的小写是什么？', answer: 'a', options: ['A', 'a', 'b', 'c'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-03', question: '字母 B 的大写是什么？', answer: 'B', options: ['B', 'b', 'D', 'P'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-04', question: '"C" 后面的字母是？', answer: 'D', options: ['B', 'D', 'E', 'F'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-05', question: '字母 "E" 的小写是？', answer: 'e', options: ['e', 'c', 'a', 'o'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-06', question: '📖 apple 以哪个字母开头？', answer: 'A', options: ['A', 'B', 'C', 'D'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-07', question: '🐱 cat 以哪个字母开头？', answer: 'C', options: ['A', 'B', 'C', 'D'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-08', question: '🐶 dog 以哪个字母开头？', answer: 'D', options: ['B', 'C', 'D', 'E'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-09', question: '🐸 frog 以哪个字母开头？', answer: 'F', options: ['E', 'F', 'G', 'H'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-10', question: '字母表第一个字母是？', answer: 'A', options: ['A', 'B', 'C', 'D'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-11', question: '"G" 的小写是？', answer: 'g', options: ['g', 'j', 'q', 'p'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-1-12', question: '"H" 后面是哪个字母？', answer: 'I', options: ['G', 'H', 'I', 'J'], difficulty: 1, type: 'letter' },
        ],
      },
      // ---------- 字母 J-R ----------
      {
        id: '1-1-2',
        name: 'Letters Jj~Rr',
        icon: '🔤',
        questions: [
          { id: 'en-q-1-1-2-01', question: '字母 "J" 的小写是？', answer: 'j', options: ['j', 'i', 'l', 'f'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-2-02', question: '"K" 后面是哪个字母？', answer: 'L', options: ['J', 'L', 'M', 'N'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-2-03', question: '字母 "M" 的大写是？', answer: 'M', options: ['M', 'm', 'N', 'W'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-2-04', question: '"N" 的小写是？', answer: 'n', options: ['n', 'm', 'h', 'r'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-2-05', question: '🦁 lion 以哪个字母开头？', answer: 'L', options: ['K', 'L', 'M', 'N'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-2-06', question: '🐵 monkey 以哪个字母开头？', answer: 'M', options: ['L', 'M', 'N', 'O'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-2-07', question: '"O" 的小写是？', answer: 'o', options: ['o', 'a', 'e', 'u'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-2-08', question: '🐧 penguin 以哪个字母开头？', answer: 'P', options: ['O', 'P', 'Q', 'R'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-2-09', question: '"Q" 后面是哪个字母？', answer: 'R', options: ['P', 'Q', 'R', 'S'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-2-10', question: '🌈 rainbow 以哪个字母开头？', answer: 'R', options: ['Q', 'R', 'S', 'T'], difficulty: 1, type: 'letter' },
        ],
      },
      // ---------- 字母 S-Z ----------
      {
        id: '1-1-3',
        name: 'Letters Ss~Zz',
        icon: '🔤',
        questions: [
          { id: 'en-q-1-1-3-01', question: '字母表有 ___ 个字母', answer: 26, options: [20, 24, 26, 30], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-3-02', question: '最后一个字母是？', answer: 'Z', options: ['X', 'Y', 'Z', 'W'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-3-03', question: '☀️ sun 以哪个字母开头？', answer: 'S', options: ['R', 'S', 'T', 'U'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-3-04', question: '🐢 turtle 以哪个字母开头？', answer: 'T', options: ['S', 'T', 'U', 'V'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-3-05', question: '☂️ umbrella 以哪个字母开头？', answer: 'U', options: ['T', 'U', 'V', 'W'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-3-06', question: '🎻 violin 以哪个字母开头？', answer: 'V', options: ['U', 'V', 'W', 'X'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-3-07', question: '❄️ winter 以哪个字母开头？', answer: 'W', options: ['V', 'W', 'X', 'Y'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-3-08', question: '🦊 fox 以哪个字母开头？', answer: 'F', options: ['E', 'F', 'G', 'X'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-3-09', question: '🟡 yellow 以哪个字母开头？', answer: 'Y', options: ['X', 'Y', 'Z', 'W'], difficulty: 1, type: 'letter' },
          { id: 'en-q-1-1-3-10', question: '🦓 zebra 以哪个字母开头？', answer: 'Z', options: ['X', 'Y', 'Z', 'S'], difficulty: 1, type: 'letter' },
        ],
      },
      // ---------- 问候 ----------
      {
        id: '1-1-4',
        name: 'Greetings 问候',
        icon: '👋',
        questions: [
          { id: 'en-q-1-1-4-01', question: '早上好，英语怎么说？', answer: 'Good morning', options: ['Good morning', 'Good night', 'Goodbye', 'Thank you'], difficulty: 1 },
          { id: 'en-q-1-1-4-02', question: '"Hello" 是什么意思？', answer: '你好', options: ['再见', '你好', '谢谢', '对不起'], difficulty: 1 },
          { id: 'en-q-1-1-4-03', question: '"Goodbye" 是什么意思？', answer: '再见', options: ['你好', '谢谢', '再见', '早上好'], difficulty: 1 },
          { id: 'en-q-1-1-4-04', question: '下午好，英语怎么说？', answer: 'Good afternoon', options: ['Good morning', 'Good afternoon', 'Good night', 'Goodbye'], difficulty: 2 },
          { id: 'en-q-1-1-4-05', question: '"Hi" 和下面哪个意思一样？', answer: 'Hello', options: ['Goodbye', 'Hello', 'Thanks', 'Sorry'], difficulty: 1 },
          { id: 'en-q-1-1-4-06', question: '"晚安" 英语怎么说？', answer: 'Good night', options: ['Good morning', 'Good night', 'Goodbye', 'Good afternoon'], difficulty: 2 },
          { id: 'en-q-1-1-4-07', question: '别人说 "Hello" 你应该怎么回答？', answer: 'Hello', options: ['Goodbye', 'Hello', 'Thank you', 'Sorry'], difficulty: 1 },
          { id: 'en-q-1-1-4-08', question: '"How are you?" 是什么意思？', answer: '你好吗？', options: ['你叫什么？', '你好吗？', '你几岁？', '你从哪里来？'], difficulty: 2 },
          { id: 'en-q-1-1-4-09', question: '"I\'m fine, thank you." 是什么意思？', answer: '我很好，谢谢。', options: ['我很好，谢谢。', '我叫小明。', '我五岁。', '再见。'], difficulty: 2 },
          { id: 'en-q-1-1-4-10', question: '"What\'s your name?" 怎么回答？', answer: 'My name is...', options: ['My name is...', 'I\'m five.', 'I\'m fine.', 'Goodbye.'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 一年级下
  // ==========================================================
  '1-2': {
    name: '一年级下册 · 单词入门',
    units: [
      // ---------- 动物 ----------
      {
        id: '1-2-1',
        name: 'Animals 动物',
        icon: '🐾',
        questions: [
          { id: 'en-q-1-2-1-01', question: '🐱 英语怎么说？', answer: 'cat', options: ['cat', 'dog', 'bird', 'fish'], difficulty: 1 },
          { id: 'en-q-1-2-1-02', question: '🐶 英语怎么说？', answer: 'dog', options: ['cat', 'dog', 'frog', 'duck'], difficulty: 1 },
          { id: 'en-q-1-2-1-03', question: '🐦 英语怎么说？', answer: 'bird', options: ['frog', 'fish', 'bird', 'bear'], difficulty: 1 },
          { id: 'en-q-1-2-1-04', question: '🐟 英语怎么说？', answer: 'fish', options: ['frog', 'fish', 'bird', 'duck'], difficulty: 1 },
          { id: 'en-q-1-2-1-05', question: '🐰 英语怎么说？', answer: 'rabbit', options: ['rabbit', 'turtle', 'monkey', 'panda'], difficulty: 2 },
          { id: 'en-q-1-2-1-06', question: '🐸 英语怎么说？', answer: 'frog', options: ['frog', 'fish', 'fox', 'bird'], difficulty: 2 },
          { id: 'en-q-1-2-1-07', question: '🦆 英语怎么说？', answer: 'duck', options: ['dog', 'duck', 'deer', 'dove'], difficulty: 2 },
          { id: 'en-q-1-2-1-08', question: '🐻 英语怎么说？', answer: 'bear', options: ['bear', 'bird', 'boar', 'bull'], difficulty: 2 },
          { id: 'en-q-1-2-1-09', question: '🐵 英语怎么说？', answer: 'monkey', options: ['monkey', 'mouse', 'mole', 'moose'], difficulty: 2 },
          { id: 'en-q-1-2-1-10', question: '🐼 英语怎么说？', answer: 'panda', options: ['panda', 'penguin', 'parrot', 'pony'], difficulty: 2 },
          { id: 'en-q-1-2-1-11', question: '下面哪个是 "pig" 的中文？', answer: '猪', options: ['狗', '猫', '猪', '鸟'], difficulty: 1 },
          { id: 'en-q-1-2-1-12', question: '"duck" 的中文是？', answer: '鸭子', options: ['小鸡', '鸭子', '鸽子', '天鹅'], difficulty: 1 },
        ],
      },
      // ---------- 颜色 ----------
      {
        id: '1-2-2',
        name: 'Colors 颜色',
        icon: '🎨',
        questions: [
          { id: 'en-q-1-2-2-01', question: '❤️ 红色英语怎么说？', answer: 'red', options: ['red', 'yellow', 'blue', 'green'], difficulty: 1 },
          { id: 'en-q-1-2-2-02', question: '💙 蓝色英语怎么说？', answer: 'blue', options: ['black', 'brown', 'blue', 'green'], difficulty: 1 },
          { id: 'en-q-1-2-2-03', question: '💚 绿色英语怎么说？', answer: 'green', options: ['gray', 'green', 'gold', 'purple'], difficulty: 1 },
          { id: 'en-q-1-2-2-04', question: '💛 黄色英语怎么说？', answer: 'yellow', options: ['yellow', 'white', 'black', 'brown'], difficulty: 1 },
          { id: 'en-q-1-2-2-05', question: '🤍 白色英语怎么说？', answer: 'white', options: ['white', 'black', 'brown', 'gray'], difficulty: 1 },
          { id: 'en-q-1-2-2-06', question: '🖤 黑色英语怎么说？', answer: 'black', options: ['blue', 'black', 'brown', 'gray'], difficulty: 1 },
          { id: 'en-q-1-2-2-07', question: '"pink" 是什么颜色？', answer: '粉色', options: ['红色', '粉色', '紫色', '橙色'], difficulty: 2 },
          { id: 'en-q-1-2-2-08', question: '"purple" 是什么颜色？', answer: '紫色', options: ['棕色', '灰色', '紫色', '粉色'], difficulty: 2 },
          { id: 'en-q-1-2-2-09', question: '"orange" 是什么颜色？', answer: '橙色', options: ['橙色', '金色', '棕色', '红色'], difficulty: 2 },
          { id: 'en-q-1-2-2-10', question: '🍎 Apple 是什么颜色？', answer: 'red', options: ['red', 'blue', 'green', 'yellow'], difficulty: 1 },
        ],
      },
      // ---------- 数字 ----------
      {
        id: '1-2-3',
        name: 'Numbers 数字 1~10',
        icon: '🔢',
        questions: [
          { id: 'en-q-1-2-3-01', question: '1 的英语是？', answer: 'one', options: ['one', 'two', 'three', 'four'], difficulty: 1 },
          { id: 'en-q-1-2-3-02', question: '2 的英语是？', answer: 'two', options: ['one', 'two', 'three', 'five'], difficulty: 1 },
          { id: 'en-q-1-2-3-03', question: '3 的英语是？', answer: 'three', options: ['two', 'three', 'four', 'eight'], difficulty: 1 },
          { id: 'en-q-1-2-3-04', question: '4 的英语是？', answer: 'four', options: ['five', 'four', 'six', 'seven'], difficulty: 1 },
          { id: 'en-q-1-2-3-05', question: '5 的英语是？', answer: 'five', options: ['five', 'four', 'six', 'nine'], difficulty: 1 },
          { id: 'en-q-1-2-3-06', question: '6 的英语是？', answer: 'six', options: ['six', 'seven', 'eight', 'five'], difficulty: 1 },
          { id: 'en-q-1-2-3-07', question: '7 的英语是？', answer: 'seven', options: ['six', 'seven', 'eight', 'nine'], difficulty: 1 },
          { id: 'en-q-1-2-3-08', question: '8 的英语是？', answer: 'eight', options: ['eight', 'seven', 'nine', 'ten'], difficulty: 1 },
          { id: 'en-q-1-2-3-09', question: '9 的英语是？', answer: 'nine', options: ['nine', 'ten', 'eight', 'six'], difficulty: 1 },
          { id: 'en-q-1-2-3-10', question: '10 的英语是？', answer: 'ten', options: ['ten', 'nine', 'eleven', 'twelve'], difficulty: 1 },
          { id: 'en-q-1-2-3-11', question: 'I have ___ eyes. (我有几只眼睛？)', answer: 'two', options: ['one', 'two', 'three', 'four'], difficulty: 2 },
          { id: 'en-q-1-2-3-12', question: '🖐️ 一只手有几根手指？用英语说', answer: 'five', options: ['four', 'five', 'six', 'ten'], difficulty: 2 },
        ],
      },
      // ---------- 文具 ----------
      {
        id: '1-2-4',
        name: 'Stationery 文具',
        icon: '✏️',
        questions: [
          { id: 'en-q-1-2-4-01', question: '📖 英语怎么说？', answer: 'book', options: ['book', 'pen', 'ruler', 'bag'], difficulty: 1 },
          { id: 'en-q-1-2-4-02', question: '✏️ 英语怎么说？', answer: 'pencil', options: ['pencil', 'pen', 'ruler', 'eraser'], difficulty: 1 },
          { id: 'en-q-1-2-4-03', question: '🖊️ 英语怎么说？', answer: 'pen', options: ['pen', 'pencil', 'paint', 'paper'], difficulty: 1 },
          { id: 'en-q-1-2-4-04', question: '📏 英语怎么说？', answer: 'ruler', options: ['ruler', 'rubber', 'rope', 'rack'], difficulty: 2 },
          { id: 'en-q-1-2-4-05', question: '🎒 英语怎么说？', answer: 'bag', options: ['bag', 'box', 'book', 'bottle'], difficulty: 1 },
          { id: 'en-q-1-2-4-06', question: '"eraser" 是什么意思？', answer: '橡皮', options: ['铅笔', '橡皮', '尺子', '书包'], difficulty: 2 },
          { id: 'en-q-1-2-4-07', question: '"crayon" 是什么意思？', answer: '蜡笔', options: ['铅笔', '蜡笔', '粉笔', '钢笔'], difficulty: 2 },
          { id: 'en-q-1-2-4-08', question: '🗒️ "notebook" 是什么意思？', answer: '笔记本', options: ['笔记本', '课本', '故事书', '练习册'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 二年级上
  // ==========================================================
  '2-1': {
    name: '二年级上册 · 词汇与句型',
    units: [
      // ---------- 家庭 ----------
      {
        id: '2-1-1',
        name: 'Family 家庭',
        icon: '👨‍👩‍👧',
        questions: [
          { id: 'en-q-2-1-1-01', question: '👨 "爸爸" 英语怎么说？', answer: 'father', options: ['father', 'mother', 'brother', 'sister'], difficulty: 1 },
          { id: 'en-q-2-1-1-02', question: '👩 "妈妈" 英语怎么说？', answer: 'mother', options: ['father', 'mother', 'brother', 'sister'], difficulty: 1 },
          { id: 'en-q-2-1-1-03', question: '👦 "哥哥/弟弟" 英语怎么说？', answer: 'brother', options: ['father', 'brother', 'sister', 'uncle'], difficulty: 1 },
          { id: 'en-q-2-1-1-04', question: '👧 "姐姐/妹妹" 英语怎么说？', answer: 'sister', options: ['mother', 'sister', 'brother', 'aunt'], difficulty: 1 },
          { id: 'en-q-2-1-1-05', question: '"grandpa" 是什么意思？', answer: '爷爷/外公', options: ['奶奶', '爷爷', '叔叔', '舅舅'], difficulty: 2 },
          { id: 'en-q-2-1-1-06', question: '"grandma" 是什么意思？', answer: '奶奶/外婆', options: ['奶奶', '爷爷', '阿姨', '姑姑'], difficulty: 2 },
          { id: 'en-q-2-1-1-07', question: '"I love my family." 是什么意思？', answer: '我爱我的家人。', options: ['我爱我的家人。', '我有一个家。', '我的家很大。', '我喜欢家。'], difficulty: 2 },
          { id: 'en-q-2-1-1-08', question: '"This is my mother." 是什么意思？', answer: '这是我的妈妈。', options: ['这是我的妈妈。', '我爱妈妈。', '妈妈很漂亮。', '这是我的爸爸。'], difficulty: 2 },
        ],
      },
      // ---------- 身体 ----------
      {
        id: '2-1-2',
        name: 'Body 身体部位',
        icon: '🧍',
        questions: [
          { id: 'en-q-2-1-2-01', question: '👁️ "眼睛" 英语怎么说？', answer: 'eye', options: ['eye', 'ear', 'nose', 'mouth'], difficulty: 1 },
          { id: 'en-q-2-1-2-02', question: '👂 "耳朵" 英语怎么说？', answer: 'ear', options: ['eye', 'ear', 'arm', 'elbow'], difficulty: 1 },
          { id: 'en-q-2-1-2-03', question: '👃 "鼻子" 英语怎么说？', answer: 'nose', options: ['nose', 'neck', 'nail', 'knee'], difficulty: 1 },
          { id: 'en-q-2-1-2-04', question: '👄 "嘴巴" 英语怎么说？', answer: 'mouth', options: ['mouth', 'milk', 'mouse', 'moon'], difficulty: 1 },
          { id: 'en-q-2-1-2-05', question: '🤚 "手" 英语怎么说？', answer: 'hand', options: ['hand', 'head', 'hair', 'heart'], difficulty: 1 },
          { id: 'en-q-2-1-2-06', question: '🦶 "脚" 英语怎么说？', answer: 'foot', options: ['foot', 'finger', 'food', 'frog'], difficulty: 2 },
          { id: 'en-q-2-1-2-07', question: '"head" 是什么意思？', answer: '头', options: ['手', '头', '脚', '腿'], difficulty: 1 },
          { id: 'en-q-2-1-2-08', question: '🦷 "tooth" 是什么意思？', answer: '牙齿', options: ['舌头', '牙齿', '耳朵', '手指'], difficulty: 2 },
          { id: 'en-q-2-1-2-09', question: '"Touch your nose." 是什么意思？', answer: '摸摸你的鼻子。', options: ['摸摸你的鼻子。', '睁开眼睛。', '举起手来。', '张大嘴巴。'], difficulty: 2 },
          { id: 'en-q-2-1-2-10', question: '"Clap your hands." 是什么意思？', answer: '拍拍你的手。', options: ['拍拍你的手。', '跺跺你的脚。', '点点头。', '眨眨眼。'], difficulty: 2 },
        ],
      },
      // ---------- 食物 ----------
      {
        id: '2-1-3',
        name: 'Food 食物',
        icon: '🍎',
        questions: [
          { id: 'en-q-2-1-3-01', question: '🍎 英语怎么说？', answer: 'apple', options: ['apple', 'banana', 'orange', 'grape'], difficulty: 1 },
          { id: 'en-q-2-1-3-02', question: '🍌 英语怎么说？', answer: 'banana', options: ['apple', 'banana', 'bread', 'butter'], difficulty: 1 },
          { id: 'en-q-2-1-3-03', question: '🍚 "米饭" 英语怎么说？', answer: 'rice', options: ['rice', 'bread', 'noodle', 'cake'], difficulty: 1 },
          { id: 'en-q-2-1-3-04', question: '🍞 "面包" 英语怎么说？', answer: 'bread', options: ['bread', 'rice', 'bun', 'cake'], difficulty: 1 },
          { id: 'en-q-2-1-3-05', question: '🥛 英语怎么说？', answer: 'milk', options: ['milk', 'juice', 'water', 'tea'], difficulty: 1 },
          { id: 'en-q-2-1-3-06', question: '🥚 英语怎么说？', answer: 'egg', options: ['egg', 'apple', 'orange', 'onion'], difficulty: 1 },
          { id: 'en-q-2-1-3-07', question: '"I like apples." 是什么意思？', answer: '我喜欢苹果。', options: ['我喜欢苹果。', '我吃苹果。', '苹果很好吃。', '我有一个苹果。'], difficulty: 1 },
          { id: 'en-q-2-1-3-08', question: '"I\'m hungry." 是什么意思？', answer: '我饿了。', options: ['我渴了。', '我饿了。', '我饱了。', '我累了。'], difficulty: 2 },
          { id: 'en-q-2-1-3-09', question: '"Have some milk." 是什么意思？', answer: '喝点牛奶吧。', options: ['喝点牛奶吧。', '吃点面包吧。', '来些水果。', '吃个鸡蛋。'], difficulty: 2 },
          { id: 'en-q-2-1-3-10', question: '🍪 "cookie" 是什么意思？', answer: '饼干', options: ['蛋糕', '饼干', '糖果', '巧克力'], difficulty: 2 },
        ],
      },
      // ---------- 句型 ----------
      {
        id: '2-1-4',
        name: 'Simple Sentences',
        icon: '💬',
        questions: [
          { id: 'en-q-2-1-4-01', question: '"What\'s this?" 怎么回答？', answer: 'It\'s a...', options: ['It\'s a...', 'I\'m...', 'This is...', 'That is...'], difficulty: 2 },
          { id: 'en-q-2-1-4-02', question: '"Is it a cat?" 肯定回答是？', answer: 'Yes, it is.', options: ['Yes, it is.', 'No, it isn\'t.', 'Yes, I am.', 'OK.'], difficulty: 2 },
          { id: 'en-q-2-1-4-03', question: '"This is a dog." 的中文？', answer: '这是一只狗。', options: ['这是一只狗。', '那是一只猫。', '我喜欢狗。', '狗很可爱。'], difficulty: 1 },
          { id: 'en-q-2-1-4-04', question: '"It\'s a red apple." 的中文？', answer: '它是一个红苹果。', options: ['它是一个红苹果。', '我喜欢苹果。', '苹果是红色的。', '这是一个苹果。'], difficulty: 2 },
          { id: 'en-q-2-1-4-05', question: '"I have a book." 的中文？', answer: '我有一本书。', options: ['我有一本书。', '我喜欢读书。', '这是我的书。', '那本书很好。'], difficulty: 1 },
          { id: 'en-q-2-1-4-06', question: '"How old are you?" 是什么意思？', answer: '你几岁了？', options: ['你好吗？', '你叫什么？', '你几岁了？', '你从哪里来？'], difficulty: 2 },
          { id: 'en-q-2-1-4-07', question: '"I\'m seven years old." 的中文？', answer: '我七岁了。', options: ['我七岁了。', '我七岁。', '我今年七岁。', '我七岁大。'], difficulty: 1 },
          { id: 'en-q-2-1-4-08', question: '🎂 "Happy birthday!" 是什么意思？', answer: '生日快乐！', options: ['生日快乐！', '新年快乐！', '圣诞快乐！', '节日快乐！'], difficulty: 1 },
        ],
      },
    ],
  },

  // ==========================================================
  // 二年级下
  // ==========================================================
  '2-2': {
    name: '二年级下册 · 拓展与应用',
    units: [
      // ---------- 星期 ----------
      {
        id: '2-2-1',
        name: 'Days of the Week',
        icon: '📅',
        questions: [
          { id: 'en-q-2-2-1-01', question: '星期一英语怎么说？', answer: 'Monday', options: ['Monday', 'Tuesday', 'Sunday', 'Saturday'], difficulty: 2 },
          { id: 'en-q-2-2-1-02', question: '星期二英语怎么说？', answer: 'Tuesday', options: ['Thursday', 'Tuesday', 'Wednesday', 'Friday'], difficulty: 2 },
          { id: 'en-q-2-2-1-03', question: '星期三英语怎么说？', answer: 'Wednesday', options: ['Wednesday', 'Tuesday', 'Thursday', 'Weekend'], difficulty: 3 },
          { id: 'en-q-2-2-1-04', question: '星期四英语怎么说？', answer: 'Thursday', options: ['Tuesday', 'Thursday', 'Friday', 'Saturday'], difficulty: 2 },
          { id: 'en-q-2-2-1-05', question: '星期五英语怎么说？', answer: 'Friday', options: ['Friday', 'Sunday', 'Monday', 'Thursday'], difficulty: 2 },
          { id: 'en-q-2-2-1-06', question: '星期六英语怎么说？', answer: 'Saturday', options: ['Saturday', 'Sunday', 'Friday', 'Monday'], difficulty: 2 },
          { id: 'en-q-2-2-1-07', question: '星期日英语怎么说？', answer: 'Sunday', options: ['Saturday', 'Sunday', 'Friday', 'Monday'], difficulty: 2 },
          { id: 'en-q-2-2-1-08', question: '一周有几天？', answer: 7, options: [5, 6, 7, 8], difficulty: 1 },
          { id: 'en-q-2-2-1-09', question: '周末是？', answer: 'Saturday and Sunday', options: ['Saturday and Sunday', 'Monday and Tuesday', 'Friday and Saturday', 'Sunday and Monday'], difficulty: 2 },
        ],
      },
      // ---------- 天气 ----------
      {
        id: '2-2-2',
        name: 'Weather 天气',
        icon: '🌤️',
        questions: [
          { id: 'en-q-2-2-2-01', question: '☀️ 晴天英语怎么说？', answer: 'sunny', options: ['sunny', 'rainy', 'cloudy', 'windy'], difficulty: 1 },
          { id: 'en-q-2-2-2-02', question: '🌧️ 下雨英语怎么说？', answer: 'rainy', options: ['rainy', 'sunny', 'snowy', 'foggy'], difficulty: 1 },
          { id: 'en-q-2-2-2-03', question: '☁️ 多云英语怎么说？', answer: 'cloudy', options: ['cloudy', 'windy', 'rainy', 'sunny'], difficulty: 1 },
          { id: 'en-q-2-2-2-04', question: '🌬️ 有风英语怎么说？', answer: 'windy', options: ['windy', 'sunny', 'rainy', 'snowy'], difficulty: 2 },
          { id: 'en-q-2-2-2-05', question: '❄️ 下雪英语怎么说？', answer: 'snowy', options: ['snowy', 'sunny', 'rainy', 'cloudy'], difficulty: 2 },
          { id: 'en-q-2-2-2-06', question: '"It\'s sunny today." 的中文？', answer: '今天天气晴朗。', options: ['今天天气晴朗。', '今天下雨。', '今天很冷。', '今天多云。'], difficulty: 1 },
          { id: 'en-q-2-2-2-07', question: '"How\'s the weather?" 是什么意思？', answer: '天气怎么样？', options: ['天气怎么样？', '你好吗？', '今天星期几？', '现在几点？'], difficulty: 2 },
        ],
      },
      // ---------- 动作 ----------
      {
        id: '2-2-3',
        name: 'Actions 动作',
        icon: '🏃',
        questions: [
          { id: 'en-q-2-2-3-01', question: '🏃 "跑" 英语怎么说？', answer: 'run', options: ['run', 'jump', 'swim', 'sing'], difficulty: 1 },
          { id: 'en-q-2-2-3-02', question: '🤸 "跳" 英语怎么说？', answer: 'jump', options: ['run', 'jump', 'sing', 'dance'], difficulty: 1 },
          { id: 'en-q-2-2-3-03', question: '🏊 "游泳" 英语怎么说？', answer: 'swim', options: ['swim', 'sing', 'run', 'skate'], difficulty: 1 },
          { id: 'en-q-2-2-3-04', question: '🎤 "唱歌" 英语怎么说？', answer: 'sing', options: ['sing', 'dance', 'swim', 'read'], difficulty: 1 },
          { id: 'en-q-2-2-3-05', question: '💃 "跳舞" 英语怎么说？', answer: 'dance', options: ['dance', 'sing', 'draw', 'drive'], difficulty: 1 },
          { id: 'en-q-2-2-3-06', question: '📖 "读书" 英语怎么说？', answer: 'read', options: ['read', 'write', 'draw', 'ride'], difficulty: 1 },
          { id: 'en-q-2-2-3-07', question: '"I can swim." 是什么意思？', answer: '我会游泳。', options: ['我会游泳。', '我喜欢游泳。', '我在游泳。', '我们去游泳吧。'], difficulty: 1 },
          { id: 'en-q-2-2-3-08', question: '"Can you jump?" 怎么回答？', answer: 'Yes, I can.', options: ['Yes, I can.', 'No, I don\'t.', 'Yes, I do.', 'I like it.'], difficulty: 2 },
          { id: 'en-q-2-2-3-09', question: '"Let\'s run!" 是什么意思？', answer: '我们跑步吧！', options: ['我们跑步吧！', '我喜欢跑步。', '他跑得快。', '我们一起跑。'], difficulty: 1 },
        ],
      },
      // ---------- 简单对话 ----------
      {
        id: '2-2-4',
        name: 'Dialogues 对话',
        icon: '💬',
        questions: [
          { id: 'en-q-2-2-4-01', question: '🍎 "Do you like apples?" 肯定回答？', answer: 'Yes, I do.', options: ['Yes, I do.', 'No, I don\'t.', 'Yes, I am.', 'I like apples.'], difficulty: 2 },
          { id: 'en-q-2-2-4-02', question: '"May I have a pencil?" 是什么意思？', answer: '我能要一支铅笔吗？', options: ['我能要一支铅笔吗？', '我有一支铅笔。', '这是铅笔吗？', '我喜欢这支铅笔。'], difficulty: 2 },
          { id: 'en-q-2-2-4-03', question: '"Here you are." 是什么意思？', answer: '给你。', options: ['给你。', '在这里。', '你在这里。', '你好。'], difficulty: 2 },
          { id: 'en-q-2-2-4-04', question: '"Thank you!" 怎么回答？', answer: 'You\'re welcome.', options: ['You\'re welcome.', 'Thank you.', 'OK.', 'Hello.'], difficulty: 2 },
          { id: 'en-q-2-2-4-05', question: '"Sorry" 是什么意思？', answer: '对不起', options: ['你好', '谢谢', '对不起', '没关系'], difficulty: 1 },
          { id: 'en-q-2-2-4-06', question: '"Let\'s go!" 是什么意思？', answer: '我们走吧！', options: ['我们走吧！', '我们来了！', '我们跑吧！', '我们玩吧！'], difficulty: 1 },
          { id: 'en-q-2-2-4-07', question: '🖼️ "What color is it?" "It\'s ___"', answer: 'blue', options: ['blue', 'I like it', 'a book', 'good'], difficulty: 2 },
          { id: 'en-q-2-2-4-08', question: '"I\'m sorry." 的回答是？', answer: 'That\'s OK.', options: ['That\'s OK.', 'Thank you.', 'Goodbye.', 'Yes, I am.'], difficulty: 2 },
          { id: 'en-q-2-2-4-09', question: '🐱 "What\'s this?" "It\'s a ___"', answer: 'cat', options: ['cat', 'good', 'red', 'run'], difficulty: 1 },
          { id: 'en-q-2-2-4-10', question: '"Nice to meet you!" 怎么回答？', answer: 'Nice to meet you too.', options: ['Nice to meet you too.', 'Hello.', 'Goodbye.', 'Thank you.'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 三年级上 — 颜色 & 身体 & 动物 & 数字
  // ==========================================================
  '3-1': {
    name: '三年级上册（人教PEP）',
    units: [
      {
        id: '3-1-1', name: 'Colours 颜色', icon: '🎨',
        questions: [
          { id: 'en-q-3-1-1-01', question: '🔴 这是什么颜色？', answer: 'red', options: ['red', 'blue', 'green', 'yellow'], difficulty: 1 },
          { id: 'en-q-3-1-1-02', question: '🟡 "yellow" 是什么颜色？', answer: '黄色', options: ['红色', '蓝色', '黄色', '绿色'], difficulty: 1 },
          { id: 'en-q-3-1-1-03', question: '🌊 "blue" 是什么颜色？', answer: '蓝色', options: ['红色', '蓝色', '绿色', '紫色'], difficulty: 1 },
          { id: 'en-q-3-1-1-04', question: '🍃 "green" 是什么颜色？', answer: '绿色', options: ['红色', '蓝色', '黄色', '绿色'], difficulty: 1 },
          { id: 'en-q-3-1-1-05', question: '"I like red." 是什么意思？', answer: '我喜欢红色。', options: ['我喜欢红色。', '我不喜欢红色。', '我喜欢蓝色。', '红色很好看。'], difficulty: 2 },
        ],
      },
      {
        id: '3-1-2', name: 'Body 身体', icon: '🧍',
        questions: [
          { id: 'en-q-3-1-2-01', question: '👁️ 用英语怎么说？', answer: 'eye', options: ['eye', 'ear', 'nose', 'mouth'], difficulty: 1 },
          { id: 'en-q-3-1-2-02', question: '👃 "nose" 是？', answer: '鼻子', options: ['眼睛', '耳朵', '鼻子', '嘴巴'], difficulty: 1 },
          { id: 'en-q-3-1-2-03', question: '👂 "ear" 是？', answer: '耳朵', options: ['眼睛', '耳朵', '鼻子', '嘴巴'], difficulty: 1 },
          { id: 'en-q-3-1-2-04', question: '👄 "mouth" 是？', answer: '嘴巴', options: ['眼睛', '耳朵', '鼻子', '嘴巴'], difficulty: 1 },
          { id: 'en-q-3-1-2-05', question: '"Touch your head." 是什么意思？', answer: '摸摸你的头。', options: ['摸摸你的头。', '举起你的手。', '睁开眼睛。', '拍拍手。'], difficulty: 2 },
        ],
      },
      {
        id: '3-1-3', name: 'Animals 动物', icon: '🐾',
        questions: [
          { id: 'en-q-3-1-3-01', question: '🐱 用英语怎么说？', answer: 'cat', options: ['cat', 'dog', 'bird', 'fish'], difficulty: 1 },
          { id: 'en-q-3-1-3-02', question: '🐶 "dog" 是？', answer: '狗', options: ['猫', '狗', '鸟', '鱼'], difficulty: 1 },
          { id: 'en-q-3-1-3-03', question: '🐰 "rabbit" 是？', answer: '兔子', options: ['猫', '狗', '兔子', '鸟'], difficulty: 1 },
          { id: 'en-q-3-1-3-04', question: '🐟 "fish" 是？', answer: '鱼', options: ['猫', '狗', '鸟', '鱼'], difficulty: 1 },
          { id: 'en-q-3-1-3-05', question: '"I have a cat." 是什么意思？', answer: '我有一只猫。', options: ['我有一只猫。', '我喜欢猫。', '猫很可爱。', '我有一只狗。'], difficulty: 2 },
        ],
      },
      {
        id: '3-1-4', name: 'Numbers 数字', icon: '🔢',
        questions: [
          { id: 'en-q-3-1-4-01', question: '1 用英语怎么说？', answer: 'one', options: ['one', 'two', 'three', 'four'], difficulty: 1 },
          { id: 'en-q-3-1-4-02', question: '5 用英语怎么说？', answer: 'five', options: ['four', 'five', 'six', 'seven'], difficulty: 1 },
          { id: 'en-q-3-1-4-03', question: '10 用英语怎么说？', answer: 'ten', options: ['six', 'eight', 'ten', 'nine'], difficulty: 1 },
          { id: 'en-q-3-1-4-04', question: '"How old are you?" "I\'m ___"', answer: 'eight', options: ['eight', 'red', 'cat', 'fine'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 三年级下
  // ==========================================================
  '3-2': {
    name: '三年级下册（人教PEP）',
    units: [
      {
        id: '3-2-1', name: 'Family 家庭', icon: '👨‍👩‍👧',
        questions: [
          { id: 'en-q-3-2-1-01', question: '👨 "father" 是？', answer: '爸爸', options: ['妈妈', '爸爸', '哥哥', '姐姐'], difficulty: 1 },
          { id: 'en-q-3-2-1-02', question: '👩 "mother" 是？', answer: '妈妈', options: ['妈妈', '爸爸', '奶奶', '姐姐'], difficulty: 1 },
          { id: 'en-q-3-2-1-03', question: '👦 "brother" 是？', answer: '兄弟', options: ['姐妹', '兄弟', '叔叔', '爷爷'], difficulty: 1 },
          { id: 'en-q-3-2-1-04', question: '👧 "sister" 是？', answer: '姐妹', options: ['姐妹', '兄弟', '妈妈', '朋友'], difficulty: 1 },
          { id: 'en-q-3-2-1-05', question: '"Who\'s that man?" "He\'s my ___"', answer: 'father', options: ['father', 'mother', 'sister', 'brother'], difficulty: 2 },
        ],
      },
      {
        id: '3-2-2', name: 'Position 位置', icon: '📍',
        questions: [
          { id: 'en-q-3-2-2-01', question: '"in" 的意思是？', answer: '在……里面', options: ['在……里面', '在……上面', '在……下面', '在……旁边'], difficulty: 1 },
          { id: 'en-q-3-2-2-02', question: '"on" 的意思是？', answer: '在……上面', options: ['在……里面', '在……上面', '在……下面', '在……后面'], difficulty: 1 },
          { id: 'en-q-3-2-2-03', question: '"under" 的意思是？', answer: '在……下面', options: ['在……里面', '在……上面', '在……下面', '在……旁边'], difficulty: 1 },
          { id: 'en-q-3-2-2-04', question: '"Where is the cat?" "It\'s ___ the box."（在盒子里）', answer: 'in', options: ['in', 'on', 'under', 'behind'], difficulty: 2 },
        ],
      },
      {
        id: '3-2-3', name: 'Fruit 水果', icon: '🍎',
        questions: [
          { id: 'en-q-3-2-3-01', question: '🍎 "apple" 是？', answer: '苹果', options: ['苹果', '香蕉', '橙子', '葡萄'], difficulty: 1 },
          { id: 'en-q-3-2-3-02', question: '🍌 "banana" 是？', answer: '香蕉', options: ['苹果', '香蕉', '橙子', '葡萄'], difficulty: 1 },
          { id: 'en-q-3-2-3-03', question: '🍊 "orange" 是？', answer: '橙子', options: ['苹果', '香蕉', '橙子', '葡萄'], difficulty: 1 },
          { id: 'en-q-3-2-3-04', question: '"Do you like apples?" "Yes, I ___"', answer: 'do', options: ['do', 'am', 'like', 'can'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 四年级上
  // ==========================================================
  '4-1': {
    name: '四年级上册（人教PEP）',
    units: [
      {
        id: '4-1-1', name: 'Classroom 教室', icon: '🏫',
        questions: [
          { id: 'en-q-4-1-1-01', question: '📚 "book" 是？', answer: '书', options: ['书', '笔', '尺子', '书包'], difficulty: 1 },
          { id: 'en-q-4-1-1-02', question: '✏️ "pencil" 是？', answer: '铅笔', options: ['钢笔', '铅笔', '尺子', '橡皮'], difficulty: 1 },
          { id: 'en-q-4-1-1-03', question: '"classroom" 的意思是？', answer: '教室', options: ['教室', '班级', '课程', '同学'], difficulty: 1 },
          { id: 'en-q-4-1-1-04', question: '"Let\'s clean the classroom." 是什么意思？', answer: '我们来打扫教室吧。', options: ['我们来打扫教室吧。', '我们来上课吧。', '我们来读书吧。', '我们来玩吧。'], difficulty: 2 },
        ],
      },
      {
        id: '4-1-2', name: 'Schoolbag 书包', icon: '🎒',
        questions: [
          { id: 'en-q-4-1-2-01', question: '🎒 "schoolbag" 是？', answer: '书包', options: ['书', '书包', '学校', '袋子'], difficulty: 1 },
          { id: 'en-q-4-1-2-02', question: '"What\'s in your schoolbag?" 是什么意思？', answer: '你的书包里有什么？', options: ['你的书包里有什么？', '你的书包是什么颜色？', '这是你的书包吗？', '你的书包在哪里？'], difficulty: 2 },
          { id: 'en-q-4-1-2-03', question: '"I have a new notebook." 是什么意思？', answer: '我有一个新笔记本。', options: ['我有一个新笔记本。', '我有一本新书。', '我有一个新书包。', '我有一支新笔。'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 四年级下
  // ==========================================================
  '4-2': {
    name: '四年级下册（人教PEP）',
    units: [
      {
        id: '4-2-1', name: 'Time 时间', icon: '⏰',
        questions: [
          { id: 'en-q-4-2-1-01', question: '"What time is it?" 是什么意思？', answer: '几点了？', options: ['几点了？', '你几岁了？', '今天几号？', '星期几？'], difficulty: 1 },
          { id: 'en-q-4-2-1-02', question: '"It\'s 7 o\'clock." 是什么意思？', answer: '七点了。', options: ['七点了。', '七点半。', '七岁。', '第七个。'], difficulty: 1 },
          { id: 'en-q-4-2-1-03', question: '"It\'s time for lunch." 是什么意思？', answer: '该吃午饭了。', options: ['该吃午饭了。', '该起床了。', '该上学了。', '该睡觉了。'], difficulty: 2 },
          { id: 'en-q-4-2-1-04', question: '"breakfast" 是？', answer: '早餐', options: ['早餐', '午餐', '晚餐', '点心'], difficulty: 1 },
        ],
      },
      {
        id: '4-2-2', name: 'Weather 天气', icon: '🌤️',
        questions: [
          { id: 'en-q-4-2-2-01', question: '☀️ "sunny" 是？', answer: '晴天', options: ['晴天', '阴天', '下雨', '下雪'], difficulty: 1 },
          { id: 'en-q-4-2-2-02', question: '🌧️ "rainy" 是？', answer: '下雨', options: ['晴天', '阴天', '下雨', '下雪'], difficulty: 1 },
          { id: 'en-q-4-2-2-03', question: '❄️ "snowy" 是？', answer: '下雪', options: ['晴天', '阴天', '下雨', '下雪'], difficulty: 1 },
          { id: 'en-q-4-2-2-04', question: '"What\'s the weather like?" 是什么意思？', answer: '天气怎么样？', options: ['天气怎么样？', '你喜欢什么天气？', '现在几点了？', '今天星期几？'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 五年级上
  // ==========================================================
  '5-1': {
    name: '五年级上册（人教PEP）',
    units: [
      {
        id: '5-1-1', name: 'Teachers 老师', icon: '👨‍🏫',
        questions: [
          { id: 'en-q-5-1-1-01', question: '"Who\'s your English teacher?" 是什么意思？', answer: '你的英语老师是谁？', options: ['你的英语老师是谁？', '你的英语老师怎么样？', '你喜欢英语吗？', '英语课几点？'], difficulty: 1 },
          { id: 'en-q-5-1-1-02', question: '"She is kind." 中的"kind"是什么意思？', answer: '和蔼的', options: ['和蔼的', '严厉的', '年轻的', '有趣的'], difficulty: 2 },
          { id: 'en-q-5-1-1-03', question: '"He is funny." 中的"funny"是什么意思？', answer: '有趣的', options: ['有趣的', '和蔼的', '严厉的', '年轻的'], difficulty: 2 },
        ],
      },
      {
        id: '5-1-2', name: 'Food & Drink 饮食', icon: '🍔',
        questions: [
          { id: 'en-q-5-1-2-01', question: '🍔 "hamburger" 是？', answer: '汉堡包', options: ['汉堡包', '三明治', '热狗', '比萨'], difficulty: 1 },
          { id: 'en-q-5-1-2-02', question: '🥛 "milk" 是？', answer: '牛奶', options: ['牛奶', '水', '果汁', '茶'], difficulty: 1 },
          { id: 'en-q-5-1-2-03', question: '"What would you like to eat?" 是什么意思？', answer: '你想吃什么？', options: ['你想吃什么？', '你想喝什么？', '你喜欢什么？', '你要去哪里？'], difficulty: 2 },
          { id: 'en-q-5-1-2-04', question: '"I\'d like some water." 是什么意思？', answer: '我想要些水。', options: ['我想要些水。', '我喜欢水。', '我要喝水。', '水很好喝。'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 五年级下
  // ==========================================================
  '5-2': {
    name: '五年级下册（人教PEP）',
    units: [
      {
        id: '5-2-1', name: 'Daily Routine 日程', icon: '📅',
        questions: [
          { id: 'en-q-5-2-1-01', question: '"get up" 是什么意思？', answer: '起床', options: ['起床', '睡觉', '上学', '吃饭'], difficulty: 1 },
          { id: 'en-q-5-2-1-02', question: '"go to school" 是什么意思？', answer: '去上学', options: ['去上学', '回家', '去公园', '去玩'], difficulty: 1 },
          { id: 'en-q-5-2-1-03', question: '"I often read books on the weekend." 是什么意思？', answer: '我周末经常读书。', options: ['我周末经常读书。', '我每天读书。', '我不喜欢读书。', '我在读书。'], difficulty: 2 },
        ],
      },
      {
        id: '5-2-2', name: 'Seasons 季节', icon: '🍂',
        questions: [
          { id: 'en-q-5-2-2-01', question: '🌸 "spring" 是？', answer: '春天', options: ['春天', '夏天', '秋天', '冬天'], difficulty: 1 },
          { id: 'en-q-5-2-2-02', question: '☀️ "summer" 是？', answer: '夏天', options: ['春天', '夏天', '秋天', '冬天'], difficulty: 1 },
          { id: 'en-q-5-2-2-03', question: '🍁 "autumn" 是？', answer: '秋天', options: ['春天', '夏天', '秋天', '冬天'], difficulty: 1 },
          { id: 'en-q-5-2-2-04', question: '⛄ "winter" 是？', answer: '冬天', options: ['春天', '夏天', '秋天', '冬天'], difficulty: 1 },
          { id: 'en-q-5-2-2-05', question: '"Which season do you like best?" 是什么意思？', answer: '你最喜欢哪个季节？', options: ['你最喜欢哪个季节？', '你喜欢什么天气？', '现在是什么季节？', '这个季节怎么样？'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 六年级上
  // ==========================================================
  '6-1': {
    name: '六年级上册（人教PEP）',
    units: [
      {
        id: '6-1-1', name: 'Transportation 交通', icon: '🚌',
        questions: [
          { id: 'en-q-6-1-1-01', question: '🚌 "bus" 是？', answer: '公共汽车', options: ['公共汽车', '地铁', '火车', '自行车'], difficulty: 1 },
          { id: 'en-q-6-1-1-02', question: '🚲 "bike" 是？', answer: '自行车', options: ['自行车', '汽车', '地铁', '步行'], difficulty: 1 },
          { id: 'en-q-6-1-1-03', question: '"How do you go to school?" 是什么意思？', answer: '你怎么去上学？', options: ['你怎么去上学？', '你几点上学？', '你走路去上学吗？', '你骑自行车吗？'], difficulty: 2 },
          { id: 'en-q-6-1-1-04', question: '"I go to school by bus." 是什么意思？', answer: '我坐公交去上学。', options: ['我坐公交去上学。', '我走路去上学。', '我骑自行车去上学。', '我坐地铁去上学。'], difficulty: 2 },
        ],
      },
      {
        id: '6-1-2', name: 'Hobbies 爱好', icon: '🎯',
        questions: [
          { id: 'en-q-6-1-2-01', question: '"reading" 是？', answer: '阅读', options: ['阅读', '写作', '跑步', '唱歌'], difficulty: 1 },
          { id: 'en-q-6-1-2-02', question: '"What are your hobbies?" 是什么意思？', answer: '你的爱好是什么？', options: ['你的爱好是什么？', '你喜欢什么？', '你做什么？', '你去哪里？'], difficulty: 2 },
          { id: 'en-q-6-1-2-03', question: '"I like playing football." 中"playing"的词性是？', answer: '动名词', options: ['动名词', '动词原形', '过去式', '现在分词'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 六年级下
  // ==========================================================
  '6-2': {
    name: '六年级下册（人教PEP）',
    units: [
      {
        id: '6-2-1', name: 'Comparative 比较级', icon: '📊',
        questions: [
          { id: 'en-q-6-2-1-01', question: '"big" 的比较级是？', answer: 'bigger', options: ['bigger', 'bigest', 'biger', 'big'], difficulty: 2 },
          { id: 'en-q-6-2-1-02', question: '"tall" 的比较级是？', answer: 'taller', options: ['taller', 'tallest', 'taler', 'more tall'], difficulty: 2 },
          { id: 'en-q-6-2-1-03', question: '"My sister is taller than me." 是什么意思？', answer: '我姐姐比我高。', options: ['我姐姐比我高。', '我姐姐和我一样高。', '我比姐姐高。', '姐姐很高。'], difficulty: 2 },
        ],
      },
      {
        id: '6-2-2', name: 'Past Tense 过去时', icon: '⏪',
        questions: [
          { id: 'en-q-6-2-2-01', question: '"go" 的过去式是？', answer: 'went', options: ['went', 'goed', 'goes', 'going'], difficulty: 2 },
          { id: 'en-q-6-2-2-02', question: '"do" 的过去式是？', answer: 'did', options: ['did', 'done', 'does', 'doing'], difficulty: 2 },
          { id: 'en-q-6-2-2-03', question: '"I went to the park yesterday." 是什么意思？', answer: '我昨天去了公园。', options: ['我昨天去了公园。', '我今天去公园。', '我明天去公园。', '我喜欢公园。'], difficulty: 2 },
          { id: 'en-q-6-2-2-04', question: '"What did you do last weekend?" 是什么意思？', answer: '你上周末做了什么？', options: ['你上周末做了什么？', '你这个周末做什么？', '你喜欢什么？', '你去哪儿了？'], difficulty: 2 },
        ],
      },
    ],
  },
};

const ENGLISH_PHONETIC_DICT = {
  'cat': '/kæt/',
  'dog': '/dɔːɡ/',
  'bird': '/bɜːrd/',
  'fish': '/fɪʃ/',
  'rabbit': '/ˈræbɪt/',
  'frog': '/frɔːɡ/',
  'duck': '/dʌk/',
  'bear': '/ber/',
  'monkey': '/ˈmʌŋki/',
  'panda': '/ˈpændə/',
  'pig': '/pɪɡ/',
  'turtle': '/ˈtɜːrtl/',
  'penguin': '/ˈpeŋɡwɪn/',
  'lion': '/ˈlaɪən/',
  'fox': '/fɑːks/',
  'zebra': '/ˈziːbrə/',

  'red': '/red/',
  'blue': '/bluː/',
  'green': '/ɡriːn/',
  'yellow': '/ˈjeloʊ/',
  'white': '/waɪt/',
  'black': '/blæk/',
  'pink': '/pɪŋk/',
  'purple': '/ˈpɜːrpl/',
  'orange': '/ˈɔːrɪndʒ/',
  'brown': '/braʊn/',
  'gray': '/ɡreɪ/',
  'gold': '/ɡoʊld/',

  'one': '/wʌn/',
  'two': '/tuː/',
  'three': '/θriː/',
  'four': '/fɔːr/',
  'five': '/faɪv/',
  'six': '/sɪks/',
  'seven': '/ˈsevn/',
  'eight': '/eɪt/',
  'nine': '/naɪn/',
  'ten': '/ten/',
  'eleven': '/ɪˈlevn/',
  'twelve': '/twelv/',

  'book': '/bʊk/',
  'pencil': '/ˈpensl/',
  'pen': '/pen/',
  'ruler': '/ˈruːlər/',
  'bag': '/bæɡ/',
  'eraser': '/ɪˈreɪsər/',
  'crayon': '/ˈkreɪən/',
  'notebook': '/ˈnoʊtbʊk/',
  'paint': '/peɪnt/',
  'paper': '/ˈpeɪpər/',

  'father': '/ˈfɑːðər/',
  'mother': '/ˈmʌðər/',
  'brother': '/ˈbrʌðər/',
  'sister': '/ˈsɪstər/',
  'grandpa': '/ˈɡrænpɑː/',
  'grandma': '/ˈɡrænmɑː/',
  'uncle': '/ˈʌŋkl/',
  'aunt': '/ænt/',

  'eye': '/aɪ/',
  'ear': '/ɪr/',
  'nose': '/noʊz/',
  'mouth': '/maʊθ/',
  'hand': '/hænd/',
  'foot': '/fʊt/',
  'head': '/hed/',
  'tooth': '/tuːθ/',
  'arm': '/ɑːrm/',
  'finger': '/ˈfɪŋɡər/',
  'hair': '/her/',
  'heart': '/hɑːrt/',
  'knee': '/niː/',

  'apple': '/ˈæpl/',
  'banana': '/bəˈnænə/',
  'orange': '/ˈɔːrɪndʒ/',
  'grape': '/ɡreɪp/',
  'rice': '/raɪs/',
  'bread': '/bred/',
  'milk': '/mɪlk/',
  'egg': '/eɡ/',
  'juice': '/dʒuːs/',
  'water': '/ˈwɔːtər/',
  'tea': '/tiː/',
  'cake': '/keɪk/',
  'cookie': '/ˈkʊki/',

  'hello': '/həˈloʊ/',
  'hi': '/haɪ/',
  'goodbye': '/ˌɡʊdˈbaɪ/',
  'morning': '/ˈmɔːrnɪŋ/',
  'afternoon': '/ˌæftərˈnuːn/',
  'night': '/naɪt/',
  'thank': '/θæŋk/',
  'sorry': '/ˈsɑːri/',

  'sun': '/sʌn/',
  'rainbow': '/ˈreɪnboʊ/',
  'umbrella': '/ʌmˈbrelə/',
  'violin': '/ˌvaɪəˈlɪn/',
  'winter': '/ˈwɪntər/',
  'flower': '/ˈflaʊər/',
  'tree': '/triː/',
  'grass': '/ɡræs/',
  'star': '/stɑːr/',
  'moon': '/muːn/',

  'monday': '/ˈmʌndeɪ/',
  'tuesday': '/ˈtuːzdeɪ/',
  'wednesday': '/ˈwenzdeɪ/',
  'thursday': '/ˈθɜːrzdeɪ/',
  'friday': '/ˈfraɪdeɪ/',
  'saturday': '/ˈsætərdeɪ/',
  'sunday': '/ˈsʌndeɪ/',
  'weekend': '/ˈwiːkend/',

  'sunny': '/ˈsʌni/',
  'rainy': '/ˈreɪni/',
  'cloudy': '/ˈklaʊdi/',
  'windy': '/ˈwɪndi/',
  'snowy': '/ˈsnoʊi/',
  'foggy': '/ˈfɔːɡi/',
  'weather': '/ˈweðər/',

  'run': '/rʌn/',
  'jump': '/dʒʌmp/',
  'swim': '/swɪm/',
  'sing': '/sɪŋ/',
  'dance': '/dæns/',
  'read': '/riːd/',
  'write': '/raɪt/',
  'draw': '/drɔː/',
  'skate': '/skeɪt/',
  'ride': '/raɪd/',
  'drive': '/draɪv/',

  'welcome': '/ˈwelkəm/',
  'meet': '/miːt/',
  'nice': '/naɪs/',
  'color': '/ˈkʌlər/',
  'colour': '/ˈkʌlər/',
};

function getPhonetic(word) {
  if (!word) return '';
  const w = word.toLowerCase().trim();
  return ENGLISH_PHONETIC_DICT[w] || '';
}

// ==========================================================
// EnglishQuestions Helper
// ==========================================================
const EnglishQuestions = {
  getQuestions(grade, semester) {
    const key = `${grade}-${semester}`;
    const data = ENGLISH_QUESTION_BANK[key];
    if (!data) return [];
    const all = [];
    for (const unit of data.units) {
      for (const q of unit.questions) {
        all.push({ ...q, grade, semester, unit: unit.id, unitName: unit.name, unitIcon: unit.icon });
      }
    }
    return all;
  },

  getUnitQuestions(grade, semester, unitId) {
    const key = `${grade}-${semester}`;
    const data = ENGLISH_QUESTION_BANK[key];
    if (!data) return [];
    const unit = data.units.find(u => u.id === unitId);
    if (!unit) return [];
    return unit.questions.map(q => ({
      ...q, grade, semester, unit: unit.id, unitName: unit.name, unitIcon: unit.icon,
    }));
  },

  getUnits(grade, semester) {
    const key = `${grade}-${semester}`;
    const data = ENGLISH_QUESTION_BANK[key];
    return data ? data.units : [];
  },

  getPhonetic: getPhonetic,
};

window.ENGLISH_QUESTIONS = EnglishQuestions;
