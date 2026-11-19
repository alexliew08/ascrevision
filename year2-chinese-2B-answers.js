/* Answers for 华文 2B 课堂评估 (1-20), from the 参考答案 pages (PDF pages 37-38).
   kind: 'blank' = fill from a word bank | 'choice' = pick one | 'text' = type the answer | 'free' = free answer | 'pdf' = use the PDF page (drawing, circling, joining lines)
   uncertain:true = still worth checking against the printed key. */
const ANSWERS = [
  {no:1, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['芒果','观察','红毛丹','拆开','草绳','炎热','植物','乘凉'], items:[
      {n:1, ans:'芒果'},{n:2, ans:'观察'},{n:3, ans:'红毛丹'},{n:4, ans:'拆开'},
      {n:5, ans:'草绳'},{n:6, ans:'炎热'},{n:7, ans:'植物'},{n:8, ans:'乘凉'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['非','煮','寻','充','浅'], items:[
      {n:1, ans:'煮'},{n:2, ans:'非'},{n:3, ans:'充'},{n:4, ans:'浅'},{n:5, ans:'寻'}]}
  ]},
  {no:2, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['燕子','老鹰'], ans:'燕子'},
      {n:2, word:'', opts:['白鸽','孔雀'], ans:'白鸽'},
      {n:3, word:'', opts:['青蛙','蜗牛'], ans:'蜗牛'},
      {n:4, word:'', opts:['猫头鹰','乌鸦'], ans:'乌鸦'},
      {n:5, word:'', opts:['百合','鸡冠花'], ans:'鸡冠花'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['取','勤','掌'], items:[
      {n:1, grid:{rows:2, cols:3, cells:[{r:0,c:1,t:'求'},{r:1,c:0,t:'争'},{r:1,c:1,drop:true},{r:1,c:2,t:'得'}]}, ans:'取'},
      {n:2, grid:{rows:3, cols:3, cells:[{r:0,c:1,drop:true},{r:1,c:0,t:'辛'},{r:1,c:2,t:'劳'},{r:2,c:1,t:'奋'}]}, ans:'勤'},
      {n:3, grid:{rows:2, cols:3, cells:[{r:0,c:1,t:'手'},{r:1,c:0,t:'鼓'},{r:1,c:1,drop:true},{r:1,c:2,t:'握'}]}, ans:'掌'}]},
    {id:'C', kind:'blank', shuffle:true, bank:['多','少','高','矮','成功','失败','教导','学习'], items:[
      {n:1, tpl:'{0} ／ {1}', slots:['多','少']},{n:2, tpl:'{0} ／ {1}', slots:['高','矮']},
      {n:3, tpl:'{0} ／ {1}', slots:['成功','失败']},{n:4, tpl:'{0} ／ {1}', slots:['教导','学习']}]}
  ]},
  {no:3, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['衣服','幼苗','苍蝇','莲花','椰子','信天翁'], items:[
      {n:1, ans:'莲花'},{n:2, ans:'衣服'},{n:3, ans:'幼苗'},{n:4, ans:'信天翁'},{n:5, ans:'苍蝇'},{n:6, ans:'椰子'}]},
    {id:'B', kind:'text', items:[{n:1, ans:'粉'},{n:2, ans:'臭'},{n:3, ans:'领'},{n:4, ans:'硬'}]},
    {id:'C', kind:'choice', items:[
      {n:'1a', word:'', opts:['chā','chà'], ans:'chà'},
      {n:'1b', word:'', opts:['chā','chà'], ans:'chā'},
      {n:'2a', word:'', opts:['chuán','zhuàn'], ans:'chuán'},
      {n:'2b', word:'', opts:['chuán','zhuàn'], ans:'zhuàn'},
      {n:'3a', word:'', opts:['piāo','piào'], ans:'piào'},
      {n:'3b', word:'', opts:['piāo','piào'], ans:'piāo'}]}
  ]},
  {no:4, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'', right:'书', opts:['借','惜'], ans:'借'},
      {n:'1b', word:'珍', opts:['借','惜'], ans:'惜'},
      {n:'2a', word:'', right:'物', opts:['植','值'], ans:'植'},
      {n:'2b', word:'价', opts:['植','值'], ans:'值'},
      {n:'3a', word:'', right:'保', opts:['坏','环'], ans:'环'},
      {n:'3b', word:'', right:'处', opts:['坏','环'], ans:'坏'},
      {n:'4a', word:'', right:'牙', opts:['制','刷'], ans:'刷'},
      {n:'4b', word:'', right:'造', opts:['制','刷'], ans:'制'},
      {n:'5a', word:'手', opts:['怕','帕'], ans:'帕'},
      {n:'5b', word:'害', opts:['怕','帕'], ans:'怕'},
      {n:'6a', word:'山', opts:['坡','玻'], ans:'坡'},
      {n:'6b', word:'', right:'璃', opts:['坡','玻'], ans:'玻'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'我们不可以（  ）食物。', opts:['A 爱惜','B 节约','C 浪费'], ans:'C 浪费'},
      {n:2, word:'妈妈在厨房里（  ）盘子。', opts:['A 洗刷','B 清除','C 收集'], ans:'A 洗刷'},
      {n:3, word:'每天傍晚，姐姐都会（  ）弹钢琴。', opts:['A 表达','B 参加','C 练习'], ans:'C 练习'},
      {n:4, word:'爷爷（  ）了每天早上都到公园散步。', opts:['A 实现','B 习惯','C 达成'], ans:'B 习惯'},
      {n:5, word:'上个星期，老师带我们去参观饼干（  ）。', opts:['A 工厂','B 广场','C 学校'], ans:'A 工厂'},
      {n:6, word:'这是一部富有教育意义的电影，非常（  ）观看。', opts:['A 充实','B 值得','C 满足'], ans:'B 值得'}]}
  ]},
  {no:5, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['时','孙','面','来'], items:[
      {n:1, tpl:'反对 → 对{0} → {1}包', slots:['面','面']},
      {n:2, tpl:'约定 → 定{0} → {1}间', slots:['时','时']},
      {n:3, tpl:'原本 → 本{0} → {1}往', slots:['来','来']},
      {n:4, tpl:'箱子 → 子{0} → {1}女', slots:['孙','孙']}]},
    {id:'B', kind:'blank', shuffle:true, bank:['子子孙孙','干干净净','许许多多','肮肮脏脏'], items:[
      {n:1, ans:'干干净净'},{n:2, ans:'许许多多'},{n:3, ans:'肮肮脏脏'},{n:4, ans:'子子孙孙'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'志明把字写错时，他将纸张（  ）。', opts:['丢在地上','丢进垃圾桶'], ans:'丢在地上'},
      {n:'2a 树木渐渐减少', kind:'tick', opts:['✓'], ans:['✓']},
      {n:'2b 造成空气污染', kind:'tick', opts:['✓'], ans:[]},
      {n:'2c 大量地砍伐树木', kind:'tick', opts:['✓'], ans:['✓']},
      {n:3, word:'读了这篇短文，我（  ）珍惜纸张。', opts:['会','不会'], ans:'会', text:true}]}
  ]},
  {no:6, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'贩'},{n:2, ans:'语'},{n:3, ans:'裤'},{n:4, ans:'锯'},{n:5, ans:'惰'},{n:6, ans:'制'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['医生','工匠','油漆工人','厨师','渔夫','商贩'], items:[
      {n:1, ans:'医生'},{n:2, ans:'工匠'},{n:3, ans:'油漆工人'},
      {n:4, ans:'厨师'},{n:5, ans:'渔夫'},{n:6, ans:'商贩'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'张叔叔的职业是校车（  ）。', opts:['司仪','司机'], ans:'司机'},
      {n:2, word:'花园里的花儿（  ）着淡淡的花香。', opts:['散开','散发'], ans:'散发'},
      {n:3, word:'早上，表姐换上护士（  ）去上班。', opts:['制服','校服'], ans:'制服'},
      {n:4, word:'弟弟对妈妈说，他（  ）想成为科学家。', opts:['将来','将要'], ans:'将来'},
      {n:5, word:'为了提高生产量，工厂新购置了一批（  ）。', opts:['武器','机器'], ans:'机器'}]},
    {id:'D', kind:'free', items:[{n:1},{n:2},{n:3}]}
  ]},
  {no:7, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['孔雀','篮子','鳄鱼','药丸','梅花鹿','黄鼠狼'], items:[
      {n:1, ans:'篮子'},{n:2, ans:'药丸'},{n:3, ans:'孔雀'},{n:4, ans:'梅花鹿'},{n:5, ans:'黄鼠狼'},{n:6, ans:'鳄鱼'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['合','国','子','咙','备','过','涂','蝶'], items:[
      {n:1, pre:'组 →', ans:'合'},{n:2, pre:'祖 →', ans:'国'},{n:3, pre:'猴 →', ans:'子'},{n:4, pre:'喉 →', ans:'咙'},
      {n:5, pre:'准 →', ans:'备'},{n:6, pre:'难 →', ans:'过'},{n:7, pre:'糊 →', ans:'涂'},{n:8, pre:'蝴 →', ans:'蝶'}]},
    {id:'C', kind:'tick', tick:{cols:['✓'], rows:['1','2','3','4','5'], perRow:1}, items:[
      {n:'1', opts:['✓'], ans:['✓']},{n:'2', opts:['✓'], ans:[]},{n:'3', opts:['✓'], ans:['✓']},{n:'4', opts:['✓'], ans:['✓']},{n:'5', opts:['✓'], ans:[]}]},
    {id:'D', kind:'free', items:[{n:1},{n:2}]}
  ]},
  {no:8, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['抄','秒','沙','炒','吵'], items:[
      {n:1, pre:'扌 + 少 →', ans:'抄'},{n:2, pre:'禾 + 少 →', ans:'秒'},{n:3, pre:'氵 + 少 →', ans:'沙'},
      {n:4, pre:'火 + 少 →', ans:'炒'},{n:5, pre:'口 + 少 →', ans:'吵'}]},
    {id:'C', kind:'blank', shuffle:true, bank:['争吵','词典','分秒必争','抓紧','碗碟','刻苦耐劳'], items:[
      {n:1, ans:'词典'},{n:2, ans:'碗碟'},{n:3, ans:'分秒必争'},
      {n:4, ans:'抓紧'},{n:5, ans:'刻苦耐劳'},{n:6, ans:'争吵'}]}
  ]},
  {no:9, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['止','华','壁','细','诚','傲'], items:[
      {n:1, grid:{rows:2, cols:2, cells:[{r:0,c:0,t:'才'},{r:1,c:0,drop:true},{r:1,c:1,t:'文'}]}, ans:'华'},
      {n:2, grid:{rows:2, cols:2, cells:[{r:0,c:0,t:'不'},{r:1,c:0,drop:true},{r:1,c:1,t:'血'}]}, ans:'止'},
      {n:3, grid:{rows:2, cols:2, cells:[{r:0,c:0,t:'仔'},{r:1,c:0,drop:true},{r:1,c:1,t:'小'}]}, ans:'细'},
      {n:4, grid:{rows:2, cols:2, cells:[{r:0,c:0,t:'墙'},{r:1,c:0,drop:true},{r:1,c:1,t:'画'}]}, ans:'壁'},
      {n:5, grid:{rows:2, cols:2, cells:[{r:0,c:0,t:'骄'},{r:1,c:0,drop:true},{r:1,c:1,t:'慢'}]}, ans:'傲'},
      {n:6, grid:{rows:2, cols:2, cells:[{r:0,c:0,drop:true},{r:0,c:1,t:'心'},{r:1,c:0,t:'实'}]}, ans:'诚'}], uncertain:true},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'马部', opts:['骑','妈','骂','蚂','骄'], ans:'骑'},
      {n:'1b', word:'马部', opts:['骑','妈','骂','蚂','骄'], ans:'骂'},
      {n:'1c', word:'马部', opts:['骑','妈','骂','蚂','骄'], ans:'骄'},
      {n:'2a', word:'土部', opts:['坡','墙','街','诗','壁'], ans:'坡'},
      {n:'2b', word:'土部', opts:['坡','墙','街','诗','壁'], ans:'墙'},
      {n:'2c', word:'土部', opts:['坡','墙','街','诗','壁'], ans:'壁'},
      {n:'3a', word:'糸部', opts:['讨','细','给','许','约'], ans:'细'},
      {n:'3b', word:'糸部', opts:['讨','细','给','许','约'], ans:'给'},
      {n:'3c', word:'糸部', opts:['讨','细','给','许','约'], ans:'约'}]},
    {id:'C', kind:'blank', shuffle:true, bank:['局','客','止','吠','骑','细'], items:[
      {n:1, ans:'细'},{n:2, ans:'骑'},{n:3, ans:'局'},{n:4, ans:'客'},{n:5, ans:'吠'},{n:6, ans:'止'}]}
  ]},
  {no:10, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'扶'},{n:2, ans:'抬'},{n:3, ans:'摸'}], uncertain:true},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'', opts:['村','长','家','的','后','院','有','一','口','水','开'], ans:'开'},
      {n:'1b', word:'', kind:'text', ans:'水井'},
      {n:'2a', word:'', opts:['沙','滩','上','有','很','多','漂','亮','的','见','壳'], ans:'见'},
      {n:'2b', word:'', kind:'text', ans:'贝壳'},
      {n:'3a', word:'', opts:['妹','妹','很','乘','巧','十','分','讨','人','喜','欢'], ans:'乘'},
      {n:'3b', word:'', kind:'text', ans:'乖巧'},
      {n:'4a', word:'', opts:['放','学','回','家','后','明','杰','赶','紧','做','巧','课'], ans:'巧'},
      {n:'4b', word:'', kind:'text', ans:'做功课'},
      {n:'5a', word:'', opts:['妈','妈','的','手','不','小','心','被','刀','片','割','伤','流','皿','了'], ans:'皿'},
      {n:'5b', word:'', kind:'text', ans:'流血了'}]},
    {id:'C', kind:'free', items:[{n:1},{n:2},{n:3}]}
  ]},
  {no:11, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['A 快','B 块','C 筷'], ans:'C 筷'},
      {n:2, word:'', opts:['A 唐','B 糖','C 塘'], ans:'B 糖'},
      {n:3, word:'', opts:['A 清','B 精','C 情'], ans:'B 精'},
      {n:4, word:'', opts:['A 头','B 买','C 卖'], ans:'C 卖'},
      {n:5, word:'', opts:['A 建','B 健','C 键'], ans:'A 建'},
      {n:6, word:'', opts:['A 铃','B 冷','C 玲'], ans:'A 铃'}]},
    {id:'B', kind:'tick', tick:{cols:['✓'], rows:['1 古色古香','2 多不胜数','3 五颜六色','4 食指大动'], perRow:2}, items:[
      {n:'1a', opts:['✓'], ans:[]},{n:'1b', opts:['✓'], ans:['✓']},
      {n:'2a', opts:['✓'], ans:['✓']},{n:'2b', opts:['✓'], ans:[]},
      {n:'3a', opts:['✓'], ans:[]},{n:'3b', opts:['✓'], ans:['✓']},
      {n:'4a', opts:['✓'], ans:['✓']},{n:'4b', opts:['✓'], ans:[]}]}
  ]},
  {no:12, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['美化','同伴','语言','打扮'], items:[
      {n:1, ans:'同伴'},{n:2, ans:'打扮'},{n:3, ans:'美化'},{n:4, ans:'语言'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['面','理','意','作','行','外','场','现'], items:[
      {n:1, tpl:'注{0} → {1}见 → 见{2} → {3}对', slots:['意','意','面','面']},
      {n:2, tpl:'广{0} → {1}合 → 合{2} → {3}由', slots:['场','场','理','理']},
      {n:3, tpl:'格{0} → {1}表 → 表{2} → {3}在', slots:['外','外','现','现']},
      {n:4, tpl:'航{0} → {1}动 → 动{2} → {3}业', slots:['行','行','作','作']}]},
    {id:'C', kind:'tick', tick:{cols:['✓'], rows:['1 只要……就……','2 不只……还……'], perRow:4}, items:[
      {n:'1a', opts:['✓'], ans:['✓']},{n:'1b', opts:['✓'], ans:[]},{n:'1c', opts:['✓'], ans:['✓']},{n:'1d', opts:['✓'], ans:['✓']},
      {n:'2a', opts:['✓'], ans:['✓']},{n:'2b', opts:['✓'], ans:[]},{n:'2c', opts:['✓'], ans:['✓']},{n:'2d', opts:['✓'], ans:['✓']}]}
  ]},
  {no:13, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['大','天','脚','却','里','狸','发','拔'], items:[
      {n:1, tpl:'冬{0}', slots:['天']},{n:2, tpl:'{0}印', slots:['脚']},
      {n:3, tpl:'狐{0}', slots:['狸']},{n:4, tpl:'{0}抖', slots:['发']}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['可怜','奇怪'], ans:'可怜'},
      {n:2, word:'', opts:['怪物','野兽'], ans:'野兽'},
      {n:3, word:'', opts:['互相','共同'], ans:'互相'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'一年冬天，齐国大军在山谷里（  ）了。', opts:['迷路','分散'], ans:'迷路'},
      {n:'2', word:'', kind:'text', ans:'寻到回家的路'},
      {n:'2b', word:'', kind:'text', ans:'认识路途'},
      {n:3, word:'', opts:['A 紧跟着老马走','B 找一只狗来带路','C 紧跟着一匹小马走'], ans:'A 紧跟着老马走'},
      {n:4, word:'', opts:['聪明','勇敢'], ans:'聪明', text:true}]}
  ]},
  {no:14, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['偷','愉'], ans:'偷'},
      {n:2, word:'', opts:['居','剧'], ans:'剧'},
      {n:3, word:'', opts:['原','愿'], ans:'愿'},
      {n:4, word:'', opts:['真','填'], ans:'填'},
      {n:5, word:'', opts:['健','建'], ans:'健'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'参（  ）', opts:['点','加','巾','具'], ans:'加'},
      {n:2, word:'（  ）养', opts:['余','风','养','家'], ans:'养'},
      {n:3, word:'孝（  ）', opts:['话','园','像','顺'], ans:'顺'},
      {n:4, word:'益（  ）', opts:['处','米','闷','备'], ans:'处'}]},
    {id:'C', kind:'choice', items:[
      {n:'1a', word:'人部', opts:['仙','很','健','偷','得'], ans:'仙'},
      {n:'1b', word:'人部', opts:['仙','很','健','偷','得'], ans:'健'},
      {n:'1c', word:'人部', opts:['仙','很','健','偷','得'], ans:'偷'},
      {n:'2a', word:'木部', opts:['机','保','架','格','躲'], ans:'机'},
      {n:'2b', word:'木部', opts:['机','保','架','格','躲'], ans:'架'},
      {n:'2c', word:'木部', opts:['机','保','架','格','躲'], ans:'格'},
      {n:'3a', word:'衣部', opts:['漆','被','裤','滚','装'], ans:'被'},
      {n:'3b', word:'衣部', opts:['漆','被','裤','滚','装'], ans:'裤'},
      {n:'3c', word:'衣部', opts:['漆','被','裤','滚','装'], ans:'装'},
      {n:'4a', word:'手部', opts:['扮','狸','抖','狼','看'], ans:'扮'},
      {n:'4b', word:'手部', opts:['扮','狸','抖','狼','看'], ans:'抖'},
      {n:'4c', word:'手部', opts:['扮','狸','抖','狼','看'], ans:'看'}]}
  ]},
  {no:15, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, kind:'text', word:'', ans:'送食物'},
      {n:'2a', word:'', opts:['小','大'], ans:'大'},
      {n:'2b', word:'', opts:['百兽之王','森林之王'], ans:'森林之王'},
      {n:'3a', kind:'free', word:''},
      {n:'3b', kind:'free', word:''}]}
  ]},
  {no:16, sections:[
    {id:'A', kind:'free', items:[{n:1}]}
  ]},
  {no:17, sections:[
    {id:'A', kind:'pdf'},
    {id:'B', kind:'text', items:[{n:1, ans:'妈妈在厨房为我们准备晚饭', big:true}]}
  ]},
  {no:18, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['品','环','谜','约','贝'], items:[
      {n:1, pre:'宝', ans:'贝'},{n:2, tpl:'{0}语', slots:['谜']},{n:3, tpl:'{0}保', slots:['环']},
      {n:4, pre:'货', ans:'品'},{n:5, pre:'节', ans:'约'}]}
  ]},
  {no:19, sections:[
    {id:'A', kind:'blank', items:[],
      layout:{rows:5, cols:6, cells:[
        {r:0,c:0,t:'手'},{r:0,c:1,t:'寻'},{r:0,c:2,t:'篮'},{r:0,c:3,t:'言'},{r:0,c:4,t:'药'},{r:0,c:5,t:'果'},
        {r:1,c:0,t:'帕'},{r:1,c:1,t:'狐'},{r:1,c:2,t:'碗'},{r:1,c:3,t:'碟'},{r:1,c:4,t:'失'},{r:1,c:5,t:'垃'},
        {r:2,c:0,t:'苍'},{r:2,c:1,t:'止'},{r:2,c:2,t:'及'},{r:2,c:3,t:'广'},{r:2,c:4,t:'句'},{r:2,c:5,t:'坂'},
        {r:3,c:0,t:'客'},{r:3,c:1,t:'电'},{r:3,c:2,t:'冰'},{r:3,c:3,t:'箱'},{r:3,c:4,t:'无'},{r:3,c:5,t:'箱'},
        {r:4,c:0,t:'筷'},{r:4,c:1,t:'子'},{r:4,c:2,t:'件'},{r:4,c:3,t:'芒'},{r:4,c:4,t:'反'},{r:4,c:5,t:'局'}]},
      picks:[
        {n:1, ans:'筷子', cells:[[4,0],[4,1]]},
        {n:2, ans:'手帕', cells:[[0,0],[1,0]]},
        {n:3, ans:'碗碟', cells:[[1,2],[1,3]]},
        {n:4, ans:'垃圾箱', cells:[[1,5],[2,5],[3,5]]},
        {n:5, ans:'冰箱', cells:[[3,2],[3,3]]}], uncertain:true}
  ]},
  {no:20, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['信','岁','吹','粒'], items:[
      {n:1, ans:'岁'},{n:2, ans:'信'},
      {n:3, ans:'粒'},{n:4, ans:'吹'}], uncertain:true}
  ]}
];

/* Labels placed on the scanned page images (x, y = percent from the top-left of the page). Keys are PDF page numbers. */
const PAGE_LABELS = {
  '03': [{t:'图一', x:11.7, y:21.7},{t:'图二', x:11.7, y:38.6},{t:'图三', x:11.7, y:55.9},{t:'图四', x:11.7, y:73.1},
         {t:'图五', x:69.3, y:21.7},{t:'图六', x:69.3, y:38.6},{t:'图七', x:69.3, y:55.9},{t:'图八', x:69.3, y:73.1}],
  '13': [{t:'图一', x:11.5, y:53.4},{t:'图二', x:11.5, y:65.9},{t:'图三', x:11.5, y:77.9},
         {t:'图四', x:74.0, y:53.4},{t:'图五', x:74.0, y:65.9},{t:'图六', x:74.0, y:77.9}]
};
