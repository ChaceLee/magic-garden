/* ============================================================
   🌸 梦幻数学花园 — 语文题库（小学1-2年级）
   拼音 · 识字 · 组词 · 反义词 · 古诗 · 成语
   ============================================================ */

const CHINESE_QUESTION_BANK = {
  // ==========================================================
  // 一年级上
  // ==========================================================
  '1-1': {
    name: '一年级上册 · 拼音与识字',
    units: [
      // ---------- 单元1：声母 ----------
      {
        id: '1-1-1',
        name: '拼音 · 声母',
        icon: '🔤',
        questions: [
          { id: 'zh-q-1-1-1-01', question: '下列哪个是声母？', answer: 'b', options: ['b', 'ai', 'ing', 'ou'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-02', question: '下列哪个是声母？', answer: 'p', options: ['p', 'ei', 'ong', 'an'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-03', question: '"马"(mǎ)的声母是什么？', answer: 'm', options: ['m', 'a', 'ma', 'ǎ'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-04', question: '"大"(dà)的声母是什么？', answer: 'd', options: ['d', 'a', 'da', 'à'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-05', question: '"他"(tā)的声母是什么？', answer: 't', options: ['t', 'a', 'ta', 'ā'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-06', question: '"你"(nǐ)的声母是什么？', answer: 'n', options: ['n', 'i', 'ni', 'ǐ'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-07', question: '"拉"(lā)的声母是什么？', answer: 'l', options: ['l', 'a', 'la', 'ā'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-08', question: '"哥"(gē)的声母是什么？', answer: 'g', options: ['g', 'e', 'ge', 'ē'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-09', question: '"看"(kàn)的声母是什么？', answer: 'k', options: ['k', 'an', 'kan', 'àn'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-10', question: '"花"(huā)的声母是什么？', answer: 'h', options: ['h', 'ua', 'hua', 'uā'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-1-11', question: '下面哪一组全是声母？', answer: 'b p m f', options: ['b p m f', 'a o e i', 'ai ei ui', 'zhi chi shi'], difficulty: 2, type: 'pinyin' },
          { id: 'zh-q-1-1-1-12', question: '声母共有多少个？', answer: '23', options: ['23', '24', '16', '6'], difficulty: 2 },
          { id: 'zh-q-1-1-1-13', question: '"日"(rì)的声母是什么？', answer: 'r', options: ['r', 'i', 'ri', 'ì'], difficulty: 2, type: 'pinyin' },
          { id: 'zh-q-1-1-1-14', question: '"字"(zì)的声母是什么？', answer: 'z', options: ['z', 'i', 'zi', 'ì'], difficulty: 2, type: 'pinyin' },
          { id: 'zh-q-1-1-1-15', question: '"吃"(chī)的声母是什么？', answer: 'ch', options: ['ch', 'c', 'i', 'chi'], difficulty: 2, type: 'pinyin' },
        ],
      },

      // ---------- 单元2：韵母 ----------
      {
        id: '1-1-2',
        name: '拼音 · 韵母',
        icon: '🔊',
        questions: [
          { id: 'zh-q-1-1-2-01', question: '"大"(dà)的韵母是什么？', answer: 'a', options: ['a', 'd', 'da', 'à'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-2-02', question: '"鹅"(é)的韵母是什么？', answer: 'e', options: ['e', 'é', 'er', 'ê'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-2-03', question: '"一"(yī)的韵母是什么？', answer: 'i', options: ['i', 'y', 'yi', 'ī'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-2-04', question: '"五"(wǔ)的韵母是什么？', answer: 'u', options: ['u', 'w', 'wu', 'ǔ'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-2-05', question: '"女"(nǚ)的韵母是什么？', answer: 'ü', options: ['ü', 'u', 'nv', 'nǚ'], difficulty: 2, type: 'pinyin' },
          { id: 'zh-q-1-1-2-06', question: '"爱"(ài)的韵母是什么？', answer: 'ai', options: ['ai', 'a', 'i', 'ei'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-2-07', question: '"飞"(fēi)的韵母是什么？', answer: 'ei', options: ['ei', 'e', 'i', 'fei'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-2-08', question: '"好"(hǎo)的韵母是什么？', answer: 'ao', options: ['ao', 'a', 'o', 'ou'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-2-09', question: '"走"(zǒu)的韵母是什么？', answer: 'ou', options: ['ou', 'o', 'u', 'zuo'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-2-10', question: '"六"(liù)的韵母是什么？', answer: 'iu', options: ['iu', 'i', 'u', 'liu'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-2-11', question: '单韵母有哪些？', answer: 'a o e i u ü', options: ['a o e i u ü', 'ai ei ui ao', 'an en in un', 'ang eng ing ong'], difficulty: 2, type: 'pinyin' },
          { id: 'zh-q-1-1-2-12', question: '"山"(shān)的韵母是什么？', answer: 'an', options: ['an', 'a', 'n', 'shan'], difficulty: 2, type: 'pinyin' },
          { id: 'zh-q-1-1-2-13', question: '"门"(mén)的韵母是什么？', answer: 'en', options: ['en', 'e', 'n', 'men'], difficulty: 2, type: 'pinyin' },
          { id: 'zh-q-1-1-2-14', question: '"星"(xīng)的韵母是什么？', answer: 'ing', options: ['ing', 'in', 'i', 'xing'], difficulty: 2, type: 'pinyin' },
          { id: 'zh-q-1-1-2-15', question: '"风"(fēng)的韵母是什么？', answer: 'eng', options: ['eng', 'en', 'e', 'feng'], difficulty: 2, type: 'pinyin' },
        ],
      },

      // ---------- 单元3：整体认读音节 ----------
      {
        id: '1-1-3',
        name: '拼音 · 整体认读音节',
        icon: '🎯',
        questions: [
          { id: 'zh-q-1-1-3-01', question: '下列哪个是整体认读音节？', answer: 'zhi', options: ['zhi', 'zh', 'zi', 'z'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-3-02', question: '下列哪个是整体认读音节？', answer: 'chi', options: ['chi', 'ch', 'ci', 'c'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-3-03', question: '下列哪个是整体认读音节？', answer: 'shi', options: ['shi', 'sh', 'si', 's'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-3-04', question: '下列哪个是整体认读音节？', answer: 'ri', options: ['ri', 'r', 're', 'ru'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-3-05', question: '下列哪个是整体认读音节？', answer: 'zi', options: ['zi', 'z', 'zhi', 'ze'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-3-06', question: '下列哪个是整体认读音节？', answer: 'ci', options: ['ci', 'c', 'chi', 'ce'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-3-07', question: '下列哪个是整体认读音节？', answer: 'si', options: ['si', 's', 'shi', 'se'], difficulty: 1, type: 'pinyin' },
          { id: 'zh-q-1-1-3-08', question: '整体认读音节共有多少个？', answer: '16', options: ['16', '23', '6', '24'], difficulty: 2 },
          { id: 'zh-q-1-1-3-09', question: '"树"(shù)是整体认读音节吗？', answer: '不是', options: ['不是', '是', '不知道', '可能'], difficulty: 2, type: 'pinyin' },
          { id: 'zh-q-1-1-3-10', question: '"雨"(yǔ)中的整体认读音节是？', answer: 'yu', options: ['yu', 'y', 'u', 'ü'], difficulty: 2, type: 'pinyin' },
        ],
      },

      // ---------- 单元4：识字 ----------
      {
        id: '1-1-4',
        name: '识字（一）',
        icon: '📖',
        questions: [
          { id: 'zh-q-1-1-4-01', question: '"一"字有几画？', answer: '1', options: ['1', '2', '3', '0'], difficulty: 1 },
          { id: 'zh-q-1-1-4-02', question: '"二"字有几画？', answer: '2', options: ['1', '2', '3', '4'], difficulty: 1 },
          { id: 'zh-q-1-1-4-03', question: '"三"字有几画？', answer: '3', options: ['2', '3', '4', '5'], difficulty: 1 },
          { id: 'zh-q-1-1-4-04', question: '"十"字加一横变成什么字？', answer: '千', options: ['千', '土', '干', '上'], difficulty: 2 },
          { id: 'zh-q-1-1-4-05', question: '"口"字加一横变成什么字？', answer: '日', options: ['日', '目', '田', '白'], difficulty: 2 },
          { id: 'zh-q-1-1-4-06', question: '"目"字和"日"字有什么不同？', answer: '目多一横', options: ['目多一横', '日多一横', '一样', '目多一竖'], difficulty: 2 },
          { id: 'zh-q-1-1-4-07', question: '"上"字的反方向是？', answer: '下', options: ['下', '中', '前', '左'], difficulty: 1 },
          { id: 'zh-q-1-1-4-08', question: '"大"字加一点变成什么字？', answer: '太', options: ['太', '犬', '天', '夫'], difficulty: 2 },
          { id: 'zh-q-1-1-4-09', question: '"人"字加一横变成什么字？', answer: '大', options: ['大', '个', '入', '八'], difficulty: 2 },
          { id: 'zh-q-1-1-4-10', question: '"天"字比"大"字多什么？', answer: '一横', options: ['一横', '一点', '一竖', '一撇'], difficulty: 2 },
          { id: 'zh-q-1-1-4-11', question: '"火"字谜：一半红，一半绿，一边怕水，一边怕火。打一字', answer: '秋', options: ['秋', '火', '灭', '灾'], difficulty: 3 },
          { id: 'zh-q-1-1-4-12', question: '"一"加"丨"（竖）是什么字？', answer: '十', options: ['十', '土', '干', '上'], difficulty: 1 },
        ],
      },

      // ---------- 单元5：古诗 ----------
      {
        id: '1-1-5',
        name: '古诗（一）',
        icon: '📜',
        questions: [
          { id: 'zh-q-1-1-5-01', question: '《咏鹅》的作者是谁？', answer: '骆宾王', options: ['骆宾王', '李白', '杜甫', '白居易'], difficulty: 1 },
          { id: 'zh-q-1-1-5-02', question: '"鹅鹅鹅，曲项向天歌。白毛浮绿水" 下一句是？', answer: '红掌拨清波', options: ['红掌拨清波', '春来发几枝', '粒粒皆辛苦', '疑是地上霜'], difficulty: 2 },
          { id: 'zh-q-1-1-5-03', question: '《静夜思》的作者是谁？', answer: '李白', options: ['李白', '杜甫', '白居易', '王之涣'], difficulty: 1 },
          { id: 'zh-q-1-1-5-04', question: '"床前明月光"的下一句是？', answer: '疑是地上霜', options: ['疑是地上霜', '低头思故乡', '举头望明月', '春来发几枝'], difficulty: 1 },
          { id: 'zh-q-1-1-5-05', question: '"举头望明月"的下一句是？', answer: '低头思故乡', options: ['低头思故乡', '疑是地上霜', '春来发几枝', '粒粒皆辛苦'], difficulty: 1 },
          { id: 'zh-q-1-1-5-06', question: '《悯农》（锄禾日当午）的作者是谁？', answer: '李绅', options: ['李绅', '李白', '杜甫', '白居易'], difficulty: 2 },
          { id: 'zh-q-1-1-5-07', question: '"锄禾日当午"的下一句是？', answer: '汗滴禾下土', options: ['汗滴禾下土', '粒粒皆辛苦', '春来发几枝', '疑是地上霜'], difficulty: 2 },
          { id: 'zh-q-1-1-5-08', question: '"谁知盘中餐"的下一句是？', answer: '粒粒皆辛苦', options: ['粒粒皆辛苦', '汗滴禾下土', '春来发几枝', '红掌拨清波'], difficulty: 2 },
          { id: 'zh-q-1-1-5-09', question: '《咏鹅》中描写鹅叫声的诗句是？', answer: '鹅鹅鹅', options: ['鹅鹅鹅', '曲项向天歌', '白毛浮绿水', '红掌拨清波'], difficulty: 2 },
          { id: 'zh-q-1-1-5-10', question: '"疑是地上霜"中的"疑"是什么意思？', answer: '好像', options: ['好像', '怀疑', '疑问', '一定'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 一年级下
  // ==========================================================
  '1-2': {
    name: '一年级下册 · 识字组词',
    units: [
      // ---------- 单元1：识字（二） ----------
      {
        id: '1-2-1',
        name: '识字（二）',
        icon: '📖',
        questions: [
          { id: 'zh-q-1-2-1-01', question: '"春"字是由什么和什么组成的？', answer: '三人日', options: ['三人日', '三人口', '二人口', '三人月'], difficulty: 2 },
          { id: 'zh-q-1-2-1-02', question: '"花"字的部首是什么？', answer: '艹（草字头）', options: ['艹（草字头）', '化', '亻', '木'], difficulty: 1 },
          { id: 'zh-q-1-2-1-03', question: '"草"字的部首是什么？', answer: '艹（草字头）', options: ['艹（草字头）', '早', '十', '日'], difficulty: 1 },
          { id: 'zh-q-1-2-1-04', question: '"国"字外面的框叫什么？', answer: '口字框', options: ['口字框', '国字框', '方框', '大口框'], difficulty: 2 },
          { id: 'zh-q-1-2-1-05', question: '"明"是由哪两个字组成的？', answer: '日和月', options: ['日和月', '日和田', '月和月', '日和日'], difficulty: 1 },
          { id: 'zh-q-1-2-1-06', question: '"男"是由什么组成的？', answer: '田和力', options: ['田和力', '口和力', '田和刀', '日和力'], difficulty: 2 },
          { id: 'zh-q-1-2-1-07', question: '"休"字表示什么？', answer: '人靠着树休息', options: ['人靠着树休息', '一个人', '一棵树', '休息室'], difficulty: 2 },
          { id: 'zh-q-1-2-1-08', question: '"众"字由几个人组成？', answer: '3', options: ['3', '2', '4', '1'], difficulty: 1 },
          { id: 'zh-q-1-2-1-09', question: '"森"字由几个"木"组成？', answer: '3', options: ['3', '2', '4', '1'], difficulty: 1 },
          { id: 'zh-q-1-2-1-10', question: '"鲜"是由"鱼"和什么组成的？', answer: '羊', options: ['羊', '牛', '马', '鸡'], difficulty: 2 },
        ],
      },

      // ---------- 单元2：组词 ----------
      {
        id: '1-2-2',
        name: '组词',
        icon: '🔄',
        questions: [
          { id: 'zh-q-1-2-2-01', question: '"花"可以组成什么词？', answer: '花朵', options: ['花朵', '花本', '花上', '花下'], difficulty: 1 },
          { id: 'zh-q-1-2-2-02', question: '"开"可以组成什么词？', answer: '开门', options: ['开门', '开天', '开上', '开大'], difficulty: 1 },
          { id: 'zh-q-1-2-2-03', question: '"大"可以组成什么词？', answer: '大家', options: ['大家', '大天', '大小', '大人'], difficulty: 1 },
          { id: 'zh-q-1-2-2-04', question: '"天"可以组成什么词？', answer: '天空', options: ['天空', '天上', '天门', '天日'], difficulty: 1 },
          { id: 'zh-q-1-2-2-05', question: '"水"可以组成什么词？', answer: '水果', options: ['水果', '水花', '水土', '水火'], difficulty: 1 },
          { id: 'zh-q-1-2-2-06', question: '"火"可以组成什么词？', answer: '火车', options: ['火车', '火大', '火天', '火土'], difficulty: 1 },
          { id: 'zh-q-1-2-2-07', question: '"白"和"云"可以组成什么词？', answer: '白云', options: ['白云', '云白', '白色', '白天'], difficulty: 1 },
          { id: 'zh-q-1-2-2-08', question: '"上"和"学"可以组成什么词？', answer: '上学', options: ['上学', '上上', '学上', '上号'], difficulty: 1 },
          { id: 'zh-q-1-2-2-09', question: '"山"和"水"可以组成什么词？', answer: '山水', options: ['山水', '水山', '大山', '河水'], difficulty: 1 },
          { id: 'zh-q-1-2-2-10', question: '"光"和"明"可以组成什么词？', answer: '光明', options: ['光明', '明光', '光天', '日光'], difficulty: 1 },
        ],
      },

      // ---------- 单元3：反义词 ----------
      {
        id: '1-2-3',
        name: '反义词',
        icon: '⚖️',
        questions: [
          { id: 'zh-q-1-2-3-01', question: '"大"的反义词是什么？', answer: '小', options: ['小', '中', '多', '上'], difficulty: 1 },
          { id: 'zh-q-1-2-3-02', question: '"上"的反义词是什么？', answer: '下', options: ['下', '中', '左', '右'], difficulty: 1 },
          { id: 'zh-q-1-2-3-03', question: '"高"的反义词是什么？', answer: '低', options: ['低', '小', '矮', '短'], difficulty: 1 },
          { id: 'zh-q-1-2-3-04', question: '"长"的反义词是什么？', answer: '短', options: ['短', '少', '小', '低'], difficulty: 1 },
          { id: 'zh-q-1-2-3-05', question: '"多"的反义词是什么？', answer: '少', options: ['少', '小', '大', '无'], difficulty: 1 },
          { id: 'zh-q-1-2-3-06', question: '"前"的反义词是什么？', answer: '后', options: ['后', '下', '左', '北'], difficulty: 1 },
          { id: 'zh-q-1-2-3-07', question: '"左"的反义词是什么？', answer: '右', options: ['右', '前', '后', '中'], difficulty: 1 },
          { id: 'zh-q-1-2-3-08', question: '"开"的反义词是什么？', answer: '关', options: ['关', '闭', '合', '上'], difficulty: 1 },
          { id: 'zh-q-1-2-3-09', question: '"冷"的反义词是什么？', answer: '热', options: ['热', '暖', '温', '凉'], difficulty: 2 },
          { id: 'zh-q-1-2-3-10', question: '"快"的反义词是什么？', answer: '慢', options: ['慢', '缓', '迟', '停'], difficulty: 2 },
          { id: 'zh-q-1-2-3-11', question: '"哭"的反义词是什么？', answer: '笑', options: ['笑', '乐', '喜', '欢'], difficulty: 2 },
          { id: 'zh-q-1-2-3-12', question: '"有"的反义词是什么？', answer: '无', options: ['无', '没', '空', '少'], difficulty: 2 },
        ],
      },

      // ---------- 单元4：古诗（二） ----------
      {
        id: '1-2-4',
        name: '古诗（二）',
        icon: '📜',
        questions: [
          { id: 'zh-q-1-2-4-01', question: '《春晓》的作者是谁？', answer: '孟浩然', options: ['孟浩然', '李白', '杜甫', '白居易'], difficulty: 2 },
          { id: 'zh-q-1-2-4-02', question: '"春眠不觉晓"的下一句是？', answer: '处处闻啼鸟', options: ['处处闻啼鸟', '夜来风雨声', '花落知多少', '春来发几枝'], difficulty: 2 },
          { id: 'zh-q-1-2-4-03', question: '"夜来风雨声"的下一句是？', answer: '花落知多少', options: ['花落知多少', '处处闻啼鸟', '春眠不觉晓', '粒粒皆辛苦'], difficulty: 2 },
          { id: 'zh-q-1-2-4-04', question: '《登鹳雀楼》的作者是谁？', answer: '王之涣', options: ['王之涣', '李白', '杜甫', '白居易'], difficulty: 2 },
          { id: 'zh-q-1-2-4-05', question: '"白日依山尽"的下一句是？', answer: '黄河入海流', options: ['黄河入海流', '欲穷千里目', '更上一层楼', '疑是地上霜'], difficulty: 2 },
          { id: 'zh-q-1-2-4-06', question: '"欲穷千里目"的下一句是？', answer: '更上一层楼', options: ['更上一层楼', '黄河入海流', '疑是地上霜', '处处闻啼鸟'], difficulty: 2 },
          { id: 'zh-q-1-2-4-07', question: '"更上一层楼"是什么意思？', answer: '再登上一层楼看更远', options: ['再登上一层楼看更远', '盖一座新楼', '拆掉一层楼', '买一座楼'], difficulty: 3 },
          { id: 'zh-q-1-2-4-08', question: '"处处闻啼鸟"中"啼"是什么意思？', answer: '鸟叫', options: ['鸟叫', '啼哭', '歌唱', '说话'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 二年级上
  // ==========================================================
  '2-1': {
    name: '二年级上册 · 查字与成语',
    units: [
      // ---------- 单元1：查字典 ----------
      {
        id: '2-1-1',
        name: '查字典·部首',
        icon: '📕',
        questions: [
          { id: 'zh-q-2-1-1-01', question: '"木"字的部首是什么？', answer: '木', options: ['木', '十', '八', '大'], difficulty: 1 },
          { id: 'zh-q-2-1-1-02', question: '"河"字的部首是什么？', answer: '氵（三点水）', options: ['氵（三点水）', '可', '口', '亻'], difficulty: 1 },
          { id: 'zh-q-2-1-1-03', question: '"你"字的部首是什么？', answer: '亻（单人旁）', options: ['亻（单人旁）', '尔', '小', '门'], difficulty: 1 },
          { id: 'zh-q-2-1-1-04', question: '"树"字的部首是什么？', answer: '木', options: ['木', '又', '寸', '对'], difficulty: 1 },
          { id: 'zh-q-2-1-1-05', question: '"说"字的部首是什么？', answer: '讠（言字旁）', options: ['讠（言字旁）', '兑', '口', '儿'], difficulty: 1 },
          { id: 'zh-q-2-1-1-06', question: '"跑"字的部首是什么？', answer: '足', options: ['足', '包', '口', '走'], difficulty: 1 },
          { id: 'zh-q-2-1-1-07', question: '"阳"字的部首是什么？', answer: '阝（左耳旁）', options: ['阝（左耳旁）', '日', '月', '口'], difficulty: 2 },
          { id: 'zh-q-2-1-1-08', question: '"饭"字的部首是什么？', answer: '饣（食字旁）', options: ['饣（食字旁）', '反', '又', '口'], difficulty: 2 },
          { id: 'zh-q-2-1-1-09', question: '查字典时，"张"字应该查什么部首？', answer: '弓', options: ['弓', '长', '口', '几'], difficulty: 2 },
          { id: 'zh-q-2-1-1-10', question: '"猫"字的部首是什么？', answer: '犭（反犬旁）', options: ['犭（反犬旁）', '苗', '田', '口'], difficulty: 2 },
        ],
      },

      // ---------- 单元2：近义词 ----------
      {
        id: '2-1-2',
        name: '近义词',
        icon: '🔗',
        questions: [
          { id: 'zh-q-2-1-2-01', question: '"美丽"的近义词是什么？', answer: '漂亮', options: ['漂亮', '丑', '好看', '丑陋'], difficulty: 1 },
          { id: 'zh-q-2-1-2-02', question: '"高兴"的近义词是什么？', answer: '快乐', options: ['快乐', '难过', '伤心', '生气'], difficulty: 1 },
          { id: 'zh-q-2-1-2-03', question: '"大"的近义词是什么？', answer: '巨', options: ['巨', '小', '细', '矮'], difficulty: 1 },
          { id: 'zh-q-2-1-2-04', question: '"快速"的近义词是什么？', answer: '迅速', options: ['迅速', '缓慢', '慢慢', '迟钝'], difficulty: 2 },
          { id: 'zh-q-2-1-2-05', question: '"开心"的近义词是什么？', answer: '高兴', options: ['高兴', '伤心', '生气', '难过'], difficulty: 1 },
          { id: 'zh-q-2-1-2-06', question: '"明白"的近义词是什么？', answer: '清楚', options: ['清楚', '模糊', '不懂', '糊涂'], difficulty: 2 },
          { id: 'zh-q-2-1-2-07', question: '"温暖"的近义词是什么？', answer: '暖和', options: ['暖和', '寒冷', '冰冷', '冰凉'], difficulty: 1 },
          { id: 'zh-q-2-1-2-08', question: '"认真"的近义词是什么？', answer: '专心', options: ['专心', '马虎', '粗心', '随便'], difficulty: 2 },
          { id: 'zh-q-2-1-2-09', question: '"喜欢"的近义词是什么？', answer: '喜爱', options: ['喜爱', '讨厌', '厌恶', '恨'], difficulty: 1 },
          { id: 'zh-q-2-1-2-10', question: '"非常"的近义词是什么？', answer: '十分', options: ['十分', '一般', '很少', '偶尔'], difficulty: 2 },
        ],
      },

      // ---------- 单元3：成语 ----------
      {
        id: '2-1-3',
        name: '成语',
        icon: '📚',
        questions: [
          { id: 'zh-q-2-1-3-01', question: '"画龙点睛"说的是谁的故事？', answer: '张僧繇', options: ['张僧繇', '李白', '王羲之', '诸葛亮'], difficulty: 3 },
          { id: 'zh-q-2-1-3-02', question: '"守株待兔"告诉我们的道理是？', answer: '不能靠运气不劳而获', options: ['不能靠运气不劳而获', '要爱护兔子', '要保护树木', '兔子很可爱'], difficulty: 2 },
          { id: 'zh-q-2-1-3-03', question: '"井底之蛙"比喻什么？', answer: '见识狭窄的人', options: ['见识狭窄的人', '很聪明的蛙', '井里的青蛙', '喜欢游泳的人'], difficulty: 2 },
          { id: 'zh-q-2-1-3-04', question: '"掩耳盗铃"是什么意思？', answer: '自己骗自己', options: ['自己骗自己', '偷铃铛', '堵耳朵', '很聪明'], difficulty: 2 },
          { id: 'zh-q-2-1-3-05', question: '"亡羊补牢"中"亡"的意思是什么？', answer: '丢失', options: ['丢失', '死亡', '逃亡', '忘记'], difficulty: 3 },
          { id: 'zh-q-2-1-3-06', question: '"刻舟求剑"比喻什么？', answer: '办事刻板不知变通', options: ['办事刻板不知变通', '在船上刻字', '剑掉水里了', '寻找宝剑'], difficulty: 3 },
          { id: 'zh-q-2-1-3-07', question: '"坐井观天"和哪个词意思相近？', answer: '井底之蛙', options: ['井底之蛙', '画蛇添足', '亡羊补牢', '守株待兔'], difficulty: 2 },
          { id: 'zh-q-2-1-3-08', question: '"画蛇添足"是什么意思？', answer: '做了多余的事', options: ['做了多余的事', '画了一条蛇', '画了四条腿', '很会画画'], difficulty: 2 },
          { id: 'zh-q-2-1-3-09', question: '"叶公好龙"中"好"的意思是什么？', answer: '喜欢', options: ['喜欢', '好', '很好', '良好'], difficulty: 2 },
          { id: 'zh-q-2-1-3-10', question: '"对牛弹琴"比喻什么？', answer: '说话不看对象', options: ['说话不看对象', '牛很聪明', '弹琴很好听', '牛在听音乐'], difficulty: 2 },
        ],
      },

      // ---------- 单元4：古诗（三） ----------
      {
        id: '2-1-4',
        name: '古诗（三）',
        icon: '📜',
        questions: [
          { id: 'zh-q-2-1-4-01', question: '《望庐山瀑布》的作者是谁？', answer: '李白', options: ['李白', '杜甫', '白居易', '王之涣'], difficulty: 1 },
          { id: 'zh-q-2-1-4-02', question: '"日照香炉生紫烟"的下一句是？', answer: '遥看瀑布挂前川', options: ['遥看瀑布挂前川', '飞流直下三千尺', '疑是银河落九天', '黄河入海流'], difficulty: 2 },
          { id: 'zh-q-2-1-4-03', question: '"飞流直下三千尺"的下一句是？', answer: '疑是银河落九天', options: ['疑是银河落九天', '遥看瀑布挂前川', '日照香炉生紫烟', '更上一层楼'], difficulty: 2 },
          { id: 'zh-q-2-1-4-04', question: '《赠刘景文》的作者是谁？', answer: '苏轼', options: ['苏轼', '苏辙', '李白', '杜甫'], difficulty: 3 },
          { id: 'zh-q-2-1-4-05', question: '"荷尽已无擎雨盖"描写的是哪个季节？', answer: '秋末冬初', options: ['秋末冬初', '春天', '夏天', '冬天'], difficulty: 3 },
          { id: 'zh-q-2-1-4-06', question: '《山行》的作者是谁？', answer: '杜牧', options: ['杜牧', '杜甫', '李白', '白居易'], difficulty: 2 },
          { id: 'zh-q-2-1-4-07', question: '"停车坐爱枫林晚"中"坐"是什么意思？', answer: '因为', options: ['因为', '坐下', '坐着', '座位'], difficulty: 3 },
          { id: 'zh-q-2-1-4-08', question: '"霜叶红于二月花"描写的是什么季节？', answer: '秋天', options: ['秋天', '春天', '夏天', '冬天'], difficulty: 2 },
        ],
      },
    ],
  },

  // ==========================================================
  // 二年级下
  // ==========================================================
  '2-2': {
    name: '二年级下册 · 多音字与运用',
    units: [
      // ---------- 单元1：多音字 ----------
      {
        id: '2-2-1',
        name: '多音字',
        icon: '🔊',
        questions: [
          { id: 'zh-q-2-2-1-01', question: '"长"字有两个读音，cháng 和？', answer: 'zhǎng', options: ['zhǎng', 'chǎng', 'zǎng', 'zhàng'], difficulty: 2 },
          { id: 'zh-q-2-2-1-02', question: '"行"字有两个读音，xíng 和？', answer: 'háng', options: ['háng', 'xìng', 'hàng', 'xín'], difficulty: 2 },
          { id: 'zh-q-2-2-1-03', question: '"银行"的"行"读什么？', answer: 'háng', options: ['háng', 'xíng', 'hàng', 'xìng'], difficulty: 1 },
          { id: 'zh-q-2-2-1-04', question: '"行走"的"行"读什么？', answer: 'xíng', options: ['xíng', 'háng', 'xìng', 'hàng'], difficulty: 1 },
          { id: 'zh-q-2-2-1-05', question: '"好"字有两个读音，hǎo 和？', answer: 'hào', options: ['hào', 'hāo', 'hòu', 'hǎo'], difficulty: 2 },
          { id: 'zh-q-2-2-1-06', question: '"好奇"的"好"读什么？', answer: 'hào', options: ['hào', 'hǎo', 'hóu', 'hāo'], difficulty: 2 },
          { id: 'zh-q-2-2-1-07', question: '"音乐"的"乐"读什么？', answer: 'yuè', options: ['yuè', 'lè', 'yè', 'luò'], difficulty: 1 },
          { id: 'zh-q-2-2-1-08', question: '"快乐"的"乐"读什么？', answer: 'lè', options: ['lè', 'yuè', 'luò', 'yè'], difficulty: 1 },
          { id: 'zh-q-2-2-1-09', question: '"重要"的"重"读什么？', answer: 'zhòng', options: ['zhòng', 'chóng', 'zhōng', 'chòng'], difficulty: 2 },
          { id: 'zh-q-2-2-1-10', question: '"重新"的"重"读什么？', answer: 'chóng', options: ['chóng', 'zhòng', 'chòng', 'zhōng'], difficulty: 2 },
          { id: 'zh-q-2-2-1-11', question: '"只"字有两个读音，zhǐ 和？', answer: 'zhī', options: ['zhī', 'zǐ', 'zhì', 'zī'], difficulty: 2 },
          { id: 'zh-q-2-2-1-12', question: '"一只猫"的"只"读什么？', answer: 'zhī', options: ['zhī', 'zhǐ', 'zī', 'zhì'], difficulty: 1 },
        ],
      },

      // ---------- 单元2：造句 ----------
      {
        id: '2-2-2',
        name: '造句',
        icon: '✏️',
        questions: [
          { id: 'zh-q-2-2-2-01', question: '用"因为…所以…"造句，哪个正确？', answer: '因为下雨，所以我不去公园', options: ['因为下雨，所以我不去公园', '所以我下雨，因为不去公园', '因为所以下雨我不去', '下雨因为我所以不去'], difficulty: 2 },
          { id: 'zh-q-2-2-2-02', question: '用"有的…有的…"造句，哪个正确？', answer: '同学们有的在看书，有的在写字', options: ['同学们有的在看书，有的在写字', '有的同学在，有的同学看', '同学们在看书在写字', '同学有的书有的写'], difficulty: 2 },
          { id: 'zh-q-2-2-2-03', question: '用"一边…一边…"造句，哪个正确？', answer: '我一边走路一边唱歌', options: ['我一边走路一边唱歌', '我走路一边唱歌一边', '一边我走路一边唱歌', '我走路一边唱歌'], difficulty: 2 },
          { id: 'zh-q-2-2-2-04', question: '用"如果…就…"造句，哪个正确？', answer: '如果明天下雨，我就不去公园', options: ['如果明天下雨，我就不去公园', '如果就明天下雨我去公园', '明天如果下雨就我不去', '我就不去如果明天下雨'], difficulty: 2 },
          { id: 'zh-q-2-2-2-05', question: '用"不但…而且…"造句，哪个正确？', answer: '小红不但学习好，而且爱劳动', options: ['小红不但学习好，而且爱劳动', '小红学习好劳动爱而且不但', '不但小红学习好而且劳动', '小红学习好而且爱劳动'], difficulty: 2 },
          { id: 'zh-q-2-2-2-06', question: '用"非常"造句，哪个正确？', answer: '今天的天气非常好', options: ['今天的天气非常好', '今天非常天好气', '天气好今天非常', '非常好今天的天气'], difficulty: 1 },
          { id: 'zh-q-2-2-2-07', question: '用"已经"造句，哪个正确？', answer: '我已经吃完早饭了', options: ['我已经吃完早饭了', '我已经了吃完早饭', '我吃完已经早饭了', '早饭我已经吃完'], difficulty: 1 },
          { id: 'zh-q-2-2-2-08', question: '用"正在"造句，哪个正确？', answer: '我正在写作业', options: ['我正在写作业', '我写正在作业', '正在我写作业', '作业我写正在'], difficulty: 1 },
        ],
      },

      // ---------- 单元3：古诗（四） ----------
      {
        id: '2-2-3',
        name: '古诗（四）',
        icon: '📜',
        questions: [
          { id: 'zh-q-2-2-3-01', question: '《绝句》（两个黄鹂鸣翠柳）的作者是谁？', answer: '杜甫', options: ['杜甫', '李白', '白居易', '杜牧'], difficulty: 2 },
          { id: 'zh-q-2-2-3-02', question: '"两个黄鹂鸣翠柳"的下一句是？', answer: '一行白鹭上青天', options: ['一行白鹭上青天', '窗含西岭千秋雪', '门泊东吴万里船', '黄河入海流'], difficulty: 2 },
          { id: 'zh-q-2-2-3-03', question: '"窗含西岭千秋雪"的下一句是？', answer: '门泊东吴万里船', options: ['门泊东吴万里船', '一行白鹭上青天', '遥看瀑布挂前川', '疑是银河落九天'], difficulty: 2 },
          { id: 'zh-q-2-2-3-04', question: '《晓出净慈寺送林子方》的作者是谁？', answer: '杨万里', options: ['杨万里', '李白', '杜甫', '苏轼'], difficulty: 3 },
          { id: 'zh-q-2-2-3-05', question: '"接天莲叶无穷碧"的下一句是？', answer: '映日荷花别样红', options: ['映日荷花别样红', '一行白鹭上青天', '窗含西岭千秋雪', '两个黄鹂鸣翠柳'], difficulty: 2 },
          { id: 'zh-q-2-2-3-06', question: '"两个黄鹂鸣翠柳"中描写了哪些颜色？', answer: '黄、翠、白、青', options: ['黄、翠、白、青', '红、绿、黄、蓝', '红、黄、蓝、绿', '白、黑、红、绿'], difficulty: 3 },
          { id: 'zh-q-2-2-3-07', question: '"一行白鹭上青天"描写的是哪种动物？', answer: '白鹭', options: ['白鹭', '黄鹂', '大雁', '燕子'], difficulty: 1 },
        ],
      },
    ],
  },

  // ==========================================================
  // 三年级上 — 古诗 & 成语 & 阅读
  // ==========================================================
  '3-1': {
    name: '三年级上册',
    units: [
      {
        id: '3-1-1', name: '古诗（五）', icon: '📜',
        questions: [
          { id: 'zh-q-3-1-1-01', question: '《望天门山》的作者是谁？', answer: '李白', options: ['李白', '杜甫', '白居易', '杜牧'], difficulty: 1 },
          { id: 'zh-q-3-1-1-02', question: '"天门中断楚江开"的下一句是？', answer: '碧水东流至此回', options: ['碧水东流至此回', '孤帆远影碧空尽', '两岸青山相对出', '一行白鹭上青天'], difficulty: 2 },
          { id: 'zh-q-3-1-1-03', question: '"两岸青山相对出"的下一句是？', answer: '孤帆一片日边来', options: ['孤帆一片日边来', '碧水东流至此回', '一行白鹭上青天', '映日荷花别样红'], difficulty: 2 },
          { id: 'zh-q-3-1-1-04', question: '《饮湖上初晴后雨》的作者是谁？', answer: '苏轼', options: ['苏轼', '李白', '杜甫', '王安石'], difficulty: 1 },
          { id: 'zh-q-3-1-1-05', question: '"欲把西湖比西子"的下一句是？', answer: '淡妆浓抹总相宜', options: ['淡妆浓抹总相宜', '碧水东流至此回', '一行白鹭上青天', '月落乌啼霜满天'], difficulty: 2 },
          { id: 'zh-q-3-1-1-06', question: '"西子"指的是谁？', answer: '西施', options: ['西施', '王昭君', '貂蝉', '杨贵妃'], difficulty: 3 },
          { id: 'zh-q-3-1-1-07', question: '《望洞庭》的作者是谁？', answer: '刘禹锡', options: ['刘禹锡', '李白', '杜甫', '杜牧'], difficulty: 2 },
        ],
      },
      {
        id: '3-1-2', name: '成语故事', icon: '📖',
        questions: [
          { id: 'zh-q-3-1-2-01', question: '"守株待兔"这个成语告诉我们的道理是？', answer: '不要存侥幸心理', options: ['不要存侥幸心理', '要保护树木', '要爱护动物', '要勤劳种田'], difficulty: 1 },
          { id: 'zh-q-3-1-2-02', question: '"画蛇添足"比喻？', answer: '多此一举', options: ['多此一举', '画得很好', '蛇很小', '画错了'], difficulty: 1 },
          { id: 'zh-q-3-1-2-03', question: '"掩耳盗铃"中的人在做什么？', answer: '捂住耳朵偷铃铛', options: ['捂住耳朵偷铃铛', '捂着耳朵听音乐', '卖铃铛', '修耳朵'], difficulty: 1 },
          { id: 'zh-q-3-1-2-04', question: '"刻舟求剑"告诉我们？', answer: '事物总在变化', options: ['事物总在变化', '要刻好记号', '剑很重要', '划船要小心'], difficulty: 2 },
        ],
      },
      {
        id: '3-1-3', name: '多音字', icon: '🔤',
        questions: [
          { id: 'zh-q-3-1-3-01', question: '"好"字在"好人"中读什么？', answer: 'hǎo', options: ['hǎo', 'hào', 'hāo', 'háo'], difficulty: 1 },
          { id: 'zh-q-3-1-3-02', question: '"好"字在"爱好"中读什么？', answer: 'hào', options: ['hǎo', 'hào', 'hāo', 'háo'], difficulty: 1 },
          { id: 'zh-q-3-1-3-03', question: '"长"字在"长大"中读什么？', answer: 'zhǎng', options: ['zhǎng', 'cháng', 'zhāng', 'zhàn'], difficulty: 1 },
          { id: 'zh-q-3-1-3-04', question: '"行"字在"行走"中读什么？', answer: 'xíng', options: ['xíng', 'háng', 'xìng', 'hàng'], difficulty: 1 },
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
        id: '3-2-1', name: '古诗（六）', icon: '📜',
        questions: [
          { id: 'zh-q-3-2-1-01', question: '"迟日江山丽"的下一句是？', answer: '春风花草香', options: ['春风花草香', '春江水暖鸭先知', '吹面不寒杨柳风', '万条垂下绿丝绦'], difficulty: 2 },
          { id: 'zh-q-3-2-1-02', question: '"竹外桃花三两枝"的下一句是？', answer: '春江水暖鸭先知', options: ['春江水暖鸭先知', '春风花草香', '一树寒梅白玉条', '吹面不寒杨柳风'], difficulty: 2 },
          { id: 'zh-q-3-2-1-03', question: '"春色满园关不住"的下一句是？', answer: '一枝红杏出墙来', options: ['一枝红杏出墙来', '春江水暖鸭先知', '竹外桃花三两枝', '春风又绿江南岸'], difficulty: 2 },
        ],
      },
      {
        id: '3-2-2', name: '寓言故事', icon: '📖',
        questions: [
          { id: 'zh-q-3-2-2-01', question: '"亡羊补牢"的意思是？', answer: '出了问题及时补救', options: ['出了问题及时补救', '羊丢了找回来', '修补羊圈', '抓狼'], difficulty: 1 },
          { id: 'zh-q-3-2-2-02', question: '"南辕北辙"比喻？', answer: '方向错了努力白费', options: ['方向错了努力白费', '南北方向', '车坏了', '走路很慢'], difficulty: 2 },
          { id: 'zh-q-3-2-2-03', question: '"井底之蛙"比喻？', answer: '见识狭窄的人', options: ['见识狭窄的人', '井里的青蛙', '跳得高的人', '游泳好的人'], difficulty: 1 },
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
        id: '4-1-1', name: '古诗（七）', icon: '📜',
        questions: [
          { id: 'zh-q-4-1-1-01', question: '《题西林壁》的作者是谁？', answer: '苏轼', options: ['苏轼', '李白', '杜甫', '王安石'], difficulty: 1 },
          { id: 'zh-q-4-1-1-02', question: '"不识庐山真面目"的下句是？', answer: '只缘身在此山中', options: ['只缘身在此山中', '远近高低各不同', '横看成岭侧成峰', '一览众山小'], difficulty: 2 },
          { id: 'zh-q-4-1-1-03', question: '"横看成岭侧成峰"的下句是？', answer: '远近高低各不同', options: ['远近高低各不同', '只缘身在此山中', '一览众山小', '飞流直下三千尺'], difficulty: 2 },
          { id: 'zh-q-4-1-1-04', question: '《游山西村》的作者是谁？', answer: '陆游', options: ['陆游', '苏轼', '李白', '杜甫'], difficulty: 1 },
          { id: 'zh-q-4-1-1-05', question: '"山重水复疑无路"的下一句是？', answer: '柳暗花明又一村', options: ['柳暗花明又一村', '只缘身在此山中', '远近高低各不同', '一览众山小'], difficulty: 2 },
        ],
      },
      {
        id: '4-1-2', name: '修辞手法', icon: '✍️',
        questions: [
          { id: 'zh-q-4-1-2-01', question: '"月亮像小船"用了什么修辞手法？', answer: '比喻', options: ['比喻', '拟人', '夸张', '排比'], difficulty: 1 },
          { id: 'zh-q-4-1-2-02', question: '"花儿在微笑"用了什么修辞手法？', answer: '拟人', options: ['比喻', '拟人', '夸张', '排比'], difficulty: 1 },
          { id: 'zh-q-4-1-2-03', question: '"飞流直下三千尺"用了什么修辞手法？', answer: '夸张', options: ['比喻', '拟人', '夸张', '排比'], difficulty: 2 },
          { id: 'zh-q-4-1-2-04', question: '"爱心是风，吹散乌云；爱心是雨，滋润大地"用了什么手法？', answer: '排比', options: ['比喻', '拟人', '夸张', '排比'], difficulty: 2 },
        ],
      },
      {
        id: '4-1-3', name: '文言文启蒙', icon: '📜',
        questions: [
          { id: 'zh-q-4-1-3-01', question: '"光持石击瓮破之"中的"光"指谁？', answer: '司马光', options: ['司马光', '杨光', '时光', '月光'], difficulty: 2 },
          { id: 'zh-q-4-1-3-02', question: '"群儿戏于庭"中的"庭"是什么意思？', answer: '庭院', options: ['庭院', '朝廷', '家庭', '法庭'], difficulty: 2 },
          { id: 'zh-q-4-1-3-03', question: '"一儿登瓮"中"瓮"是什么？', answer: '水缸', options: ['水缸', '桶', '盆', '碗'], difficulty: 2 },
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
        id: '4-2-1', name: '古诗（八）', icon: '📜',
        questions: [
          { id: 'zh-q-4-2-1-01', question: '"众鸟高飞尽"的下一句是？', answer: '孤云独去闲', options: ['孤云独去闲', '一片孤城万仞山', '一行白鹭上青天', '孤帆远影碧空尽'], difficulty: 2 },
          { id: 'zh-q-4-2-1-02', question: '《忆江南》的作者是谁？', answer: '白居易', options: ['白居易', '李白', '杜甫', '刘禹锡'], difficulty: 1 },
          { id: 'zh-q-4-2-1-03', question: '"日出江花红胜火"的下一句是？', answer: '春来江水绿如蓝', options: ['春来江水绿如蓝', '春江水暖鸭先知', '万条垂下绿丝绦', '一行白鹭上青天'], difficulty: 2 },
        ],
      },
      {
        id: '4-2-2', name: '成语（人物品质）', icon: '📖',
        questions: [
          { id: 'zh-q-4-2-2-01', question: '"悬梁刺股"形容的是？', answer: '刻苦学习', options: ['刻苦学习', '勇于创新', '勤劳勇敢', '团结友爱'], difficulty: 2 },
          { id: 'zh-q-4-2-2-02', question: '"闻鸡起舞"的主人公是谁？', answer: '祖逖', options: ['祖逖', '孔子', '诸葛亮', '李白'], difficulty: 2 },
          { id: 'zh-q-4-2-2-03', question: '"凿壁偷光"说的是谁？', answer: '匡衡', options: ['匡衡', '孔子', '祖逖', '诸葛亮'], difficulty: 2 },
          { id: 'zh-q-4-2-2-04', question: '"程门立雪"告诉我们什么？', answer: '尊师重道', options: ['尊师重道', '不怕寒冷', '珍惜时间', '刻苦学习'], difficulty: 2 },
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
        id: '5-1-1', name: '古诗（九）', icon: '📜',
        questions: [
          { id: 'zh-q-5-1-1-01', question: '《示儿》的作者是谁？', answer: '陆游', options: ['陆游', '杜甫', '苏轼', '王安石'], difficulty: 1 },
          { id: 'zh-q-5-1-1-02', question: '"王师北定中原日"的下一句是？', answer: '家祭无忘告乃翁', options: ['家祭无忘告乃翁', '但悲不见九州同', '死去元知万事空', '一片冰心在玉壶'], difficulty: 2 },
          { id: 'zh-q-5-1-1-03', question: '《题临安邸》的作者是谁？', answer: '林升', options: ['林升', '陆游', '苏轼', '李白'], difficulty: 3 },
          { id: 'zh-q-5-1-1-04', question: '"暖风熏得游人醉"的下一句是？', answer: '直把杭州作汴州', options: ['直把杭州作汴州', '家祭无忘告乃翁', '一片冰心在玉壶', '但悲不见九州同'], difficulty: 2 },
        ],
      },
      {
        id: '5-1-2', name: '文学常识', icon: '📚',
        questions: [
          { id: 'zh-q-5-1-2-01', question: '"四大名著"是哪四部？', answer: '红楼梦三国演义西游记水浒传', options: ['红楼梦三国演义西游记水浒传', '三国演义西游记水浒传封神演义', '红楼梦西游记水浒传西厢记', '三国演义水浒传聊斋志异儒林外史'], difficulty: 1 },
          { id: 'zh-q-5-1-2-02', question: '"但愿人长久，千里共婵娟"的作者是？', answer: '苏轼', options: ['苏轼', '李白', '杜甫', '白居易'], difficulty: 2 },
          { id: 'zh-q-5-1-2-03', question: '"落红不是无情物，化作春泥更护花"的作者是？', answer: '龚自珍', options: ['龚自珍', '龚自珍', '杜甫', '李白'], difficulty: 3 },
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
        id: '5-2-1', name: '古诗（十）', icon: '📜',
        questions: [
          { id: 'zh-q-5-2-1-01', question: '"昼出耘田夜绩麻"的下一句是？', answer: '村庄儿女各当家', options: ['村庄儿女各当家', '也傍桑阴学种瓜', '童孙未解供耕织', '春种一粒粟'], difficulty: 2 },
          { id: 'zh-q-5-2-1-02', question: '"牧童归去横牛背"的下一句是？', answer: '短笛无腔信口吹', options: ['短笛无腔信口吹', '村庄儿女各当家', '也傍桑阴学种瓜', '一行白鹭上青天'], difficulty: 2 },
          { id: 'zh-q-5-2-1-03', question: '《四时田园杂兴》的作者是？', answer: '范成大', options: ['范成大', '陆游', '苏轼', '杜甫'], difficulty: 3 },
        ],
      },
      {
        id: '5-2-2', name: '经典名著常识', icon: '📖',
        questions: [
          { id: 'zh-q-5-2-2-01', question: '《西游记》中孙悟空是从哪里出生的？', answer: '石头里', options: ['石头里', '树上', '水里', '天上'], difficulty: 1 },
          { id: 'zh-q-5-2-2-02', question: '"草船借箭"出自哪本书？', answer: '三国演义', options: ['三国演义', '西游记', '水浒传', '红楼梦'], difficulty: 1 },
          { id: 'zh-q-5-2-2-03', question: '"武松打虎"出自哪本书？', answer: '水浒传', options: ['水浒传', '三国演义', '西游记', '红楼梦'], difficulty: 1 },
          { id: 'zh-q-5-2-2-04', question: '《红楼梦》中黛玉葬花的地点是？', answer: '大观园', options: ['大观园', '荣国府', '宁国府', '潇湘馆'], difficulty: 2 },
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
        id: '6-1-1', name: '古诗（十一）', icon: '📜',
        questions: [
          { id: 'zh-q-6-1-1-01', question: '《七律·长征》的作者是谁？', answer: '毛泽东', options: ['毛泽东', '周恩来', '鲁迅', '朱德'], difficulty: 1 },
          { id: 'zh-q-6-1-1-02', question: '"红军不怕远征难"的下一句是？', answer: '万水千山只等闲', options: ['万水千山只等闲', '五岭逶迤腾细浪', '乌蒙磅礴走泥丸', '更喜岷山千里雪'], difficulty: 2 },
          { id: 'zh-q-6-1-1-03', question: '"更喜岷山千里雪"的下一句是？', answer: '三军过后尽开颜', options: ['三军过后尽开颜', '万水千山只等闲', '五岭逶迤腾细浪', '乌蒙磅礴走泥丸'], difficulty: 2 },
        ],
      },
      {
        id: '6-1-2', name: '鲁迅常识', icon: '📚',
        questions: [
          { id: 'zh-q-6-1-2-01', question: '鲁迅的原名是什么？', answer: '周树人', options: ['周树人', '周作人', '周建人', '鲁迅'], difficulty: 2 },
          { id: 'zh-q-6-1-2-02', question: '"横眉冷对千夫指"的下一句是？', answer: '俯首甘为孺子牛', options: ['俯首甘为孺子牛', '我以我血荐轩辕', '寄意寒星荃不察', '岂有豪情似旧时'], difficulty: 2 },
          { id: 'zh-q-6-1-2-03', question: '鲁迅的哪部作品写了"闰土"？', answer: '故乡', options: ['故乡', '狂人日记', '朝花夕拾', '阿Q正传'], difficulty: 3 },
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
        id: '6-2-1', name: '古诗（十二）', icon: '📜',
        questions: [
          { id: 'zh-q-6-2-1-01', question: '《石灰吟》的作者是谁？', answer: '于谦', options: ['于谦', '岳飞', '文天祥', '林则徐'], difficulty: 2 },
          { id: 'zh-q-6-2-1-02', question: '"千锤万凿出深山"的下一句是？', answer: '烈火焚烧若等闲', options: ['烈火焚烧若等闲', '粉骨碎身浑不怕', '要留清白在人间', '一片冰心在玉壶'], difficulty: 2 },
          { id: 'zh-q-6-2-1-03', question: '"粉骨碎身浑不怕"的下一句是？', answer: '要留清白在人间', options: ['要留清白在人间', '烈火焚烧若等闲', '千锤万凿出深山', '只留清气满乾坤'], difficulty: 2 },
          { id: 'zh-q-6-2-1-04', question: '《竹石》的作者是谁？', answer: '郑燮', options: ['郑燮', '于谦', '文天祥', '岳飞'], difficulty: 2 },
          { id: 'zh-q-6-2-1-05', question: '"千磨万击还坚劲"的下一句是？', answer: '任尔东西南北风', options: ['任尔东西南北风', '要留清白在人间', '粉骨碎身浑不怕', '烈火焚烧若等闲'], difficulty: 2 },
        ],
      },
      {
        id: '6-2-2', name: '综合文学常识', icon: '📚',
        questions: [
          { id: 'zh-q-6-2-2-01', question: '"己所不欲，勿施于人"出自哪本书？', answer: '论语', options: ['论语', '孟子', '大学', '中庸'], difficulty: 2 },
          { id: 'zh-q-6-2-2-02', question: '"学而时习之，不亦说乎"是谁说的？', answer: '孔子', options: ['孔子', '孟子', '荀子', '老子'], difficulty: 1 },
          { id: 'zh-q-6-2-2-03', question: '"三人行，必有我师焉"出自？', answer: '论语', options: ['论语', '孟子', '大学', '中庸'], difficulty: 1 },
          { id: 'zh-q-6-2-2-04', question: '"春蚕到死丝方尽"的下一句是？', answer: '蜡炬成灰泪始干', options: ['蜡炬成灰泪始干', '俯首甘为孺子牛', '要留清白在人间', '化作春泥更护花'], difficulty: 3 },
        ],
      },
    ],
  },
};

// ---------- 统一的 Questions API ----------
const ChineseQuestions = {
  getQuestions(grade, semester) {
    const key = `${grade}-${semester}`;
    const data = CHINESE_QUESTION_BANK[key];
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
    const data = CHINESE_QUESTION_BANK[key];
    if (!data) return [];
    const unit = data.units.find(u => u.id === unitId);
    if (!unit) return [];
    return unit.questions.map(q => ({
      ...q, grade, semester, unit: unit.id, unitName: unit.name, unitIcon: unit.icon,
    }));
  },

  getUnits(grade, semester) {
    const key = `${grade}-${semester}`;
    const data = CHINESE_QUESTION_BANK[key];
    return data ? data.units : [];
  },
};

window.CHINESE_QUESTIONS = ChineseQuestions;
