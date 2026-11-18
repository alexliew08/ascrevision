/* Answers for 华文 3A 课堂评估, from the 参考答案 pages (PDF pages 37-38),
   checked against the question pages where they were unclear.
   kind: 'blank' = fill from a word bank | 'choice' = pick one | 'pdf' = use the PDF page
   uncertain:true = still worth checking against the printed key. */
const ANSWERS = [
  {no:1, sections:[
    {id:'A', kind:'blank', bank:['鸣叫','抹药','祝福','钥匙','橙子','疑问'], items:[
      {n:1, ans:'橙子'},{n:2, ans:'钥匙'},{n:3, ans:'疑问'},{n:4, ans:'祝福'},{n:5, ans:'鸣叫'},{n:6, ans:'抹药'}]},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'1 (a) 尽心', opts:['jǐn','jìn'], ans:'jìn'},
      {n:'1b', word:'1 (b) 尽早', opts:['jǐn','jìn'], ans:'jǐn'},
      {n:'1c', word:'1 (c) 尽力', opts:['jǐn','jìn'], ans:'jìn'},
      {n:'2a', word:'2 (a) 钥匙', opts:['chí','shi'], ans:'shi'},
      {n:'2b', word:'2 (b) 茶匙', opts:['chí','shi'], ans:'chí'},
      {n:'2c', word:'2 (c) 汤匙', opts:['chí','shi'], ans:'chí'},
      {n:'3a', word:'3 (a) 系列', opts:['jì','xì'], ans:'xì'},
      {n:'3b', word:'3 (b) 关系', opts:['jì','xì'], ans:'xì'},
      {n:'3c', word:'3 (c) 鞋带', opts:['jì','xì'], ans:'jì'},
      {n:'4a', word:'4 (a) 抹布', opts:['mā','mǒ'], ans:'mā'},
      {n:'4b', word:'4 (b) 抹粉', opts:['mā','mǒ'], ans:'mǒ'},
      {n:'4c', word:'4 (c) 抹桌子', opts:['mā','mǒ'], ans:'mā'}]}
  ]},
  {no:2, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['介绍','介意'], ans:'介意'},
      {n:2, word:'', opts:['度假','度数'], ans:'度假'},
      {n:3, word:'', opts:['冒汗','冒险'], ans:'冒汗'},
      {n:4, word:'', opts:['见谅','原谅'], ans:'原谅'}]},
    {id:'B', kind:'pdf', note:'Letter writing. Use the PDF page.'}
  ]},
  {no:3, sections:[
    {id:'A', kind:'blank', cols:2, bank:['何','挑','始','钉','禁','盆'], items:[
      {n:1, ans:'何'},{n:2, ans:'挑'},{n:3, ans:'始'},{n:4, ans:'钉'},{n:5, ans:'禁'},{n:6, ans:'盆'},
      {n:'a', ans:'挑'},{n:'b', ans:'始'},{n:'c', ans:'钉'},{n:'d', ans:'何'},{n:'e', ans:'盆'},{n:'f', ans:'禁'}]},
    {id:'B', kind:'blank', bank:['承认','承担','强烈','热烈','避开','避免'], items:[
      {n:'1a', ans:'承认'},{n:'1b', ans:'承担'},{n:'2a', ans:'强烈'},{n:'2b', ans:'热烈'},{n:'3a', ans:'避开'},{n:'3b', ans:'避免'}]}
  ]},
  {no:4, sections:[
    {id:'A', kind:'blank', items:[{n:1, ans:'凶猛'},{n:2, ans:'缺少'},{n:3, ans:'图钉'},{n:4, ans:'照射'},{n:5, ans:'另外'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'一', opts:['yī','yí','yì'], ans:'yī'},{n:2, word:'一', opts:['yī','yí','yì'], ans:'yí'},
      {n:3, word:'一', opts:['yī','yí','yì'], ans:'yì'},{n:4, word:'一', opts:['yī','yí','yì'], ans:'yí'},
      {n:5, word:'一', opts:['yī','yí','yì'], ans:'yì'},{n:6, word:'一', opts:['yī','yí','yì'], ans:'yī'}]},
    {id:'C', kind:'blank', items:[{n:1, ans:'因为'},{n:2, ans:'只是'},{n:3, ans:'但是'},{n:4, ans:'只是'},{n:5, ans:'因为'}]}
  ]},
  {no:5, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['斑马','驴子'], ans:'驴子'},
      {n:2, word:'', opts:['扇子','雨伞'], ans:'扇子'},
      {n:3, word:'', opts:['枕头','棉被'], ans:'棉被'},
      {n:4, word:'', opts:['手掌','肩膀'], ans:'肩膀'},
      {n:5, word:'', opts:['碎布','补丁'], ans:'碎布'},
      {n:6, word:'', opts:['蚊子','苍蝇'], ans:'蚊子'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['虽然…但是','不管…还是','除了…还有'], ans:'虽然…但是'},
      {n:2, word:'', opts:['虽然…但是','不管…还是','除了…还有'], ans:'不管…还是'},
      {n:3, word:'', opts:['虽然…但是','不管…还是','除了…还有'], ans:'除了…还有'},
      {n:4, word:'', opts:['虽然…但是','不管…还是','除了…还有'], ans:'除了…还有'},
      {n:5, word:'', opts:['虽然…但是','不管…还是','除了…还有'], ans:'不管…还是'},
      {n:6, word:'', opts:['虽然…但是','不管…还是','除了…还有'], ans:'虽然…但是'}]}
  ]},
  {no:6, sections:[
    {id:'A', kind:'text', items:[
      {n:1, ans:'千旱', uncertain:true},{n:2, ans:'山谷'},{n:3, ans:'心肠'},
      {n:4, ans:'汪洋大海'},{n:5, ans:'军人'},{n:6, ans:'刺下', uncertain:true}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['超级','超越','超重'], ans:'超越'},
      {n:2, word:'', opts:['前卫','防卫','守卫'], ans:'守卫'},
      {n:3, word:'', opts:['强壮','强烈','强身'], ans:'强壮'},
      {n:4, word:'', opts:['默默','默读','默认'], ans:'默读'},
      {n:5, word:'', opts:['一帆风顺','汪洋大海','冰天雪地'], ans:'汪洋大海'},
      {n:6, word:'', opts:['乘风破浪','大开眼界','四通八达'], ans:'乘风破浪'}]}
  ]},
  {no:7, sections:[
    {id:'A', kind:'blank', bank:['雨丝','士兵','顿号','夏天','高楼大厦','躺椅'], items:[
      {n:1, ans:'雨丝'},{n:2, ans:'士兵'},{n:3, ans:'顿号'},{n:4, ans:'夏天'},{n:5, ans:'高楼大厦'},{n:6, ans:'躺椅'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['果汁','墨汁'], ans:'墨汁'},
      {n:2, word:'', opts:['小鸟','爱干净的仙女','爱整洁的太阳公公'], ans:'爱干净的仙女'},
      {n:3, word:'', opts:['爱玩','爱学习'], ans:'爱学习', text:true}]}
  ]},
  {no:8, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['苦','名','格','运'], ans:'运'},
      {n:2, word:'', opts:['书','画','中','然'], ans:'然'},
      {n:3, word:'', opts:['水','花','讲','语'], ans:'花'},
      {n:4, word:'', opts:['样','亲','匠','光'], ans:'样'},
      {n:5, word:'', opts:['何','受','真','错'], ans:'受'},
      {n:6, word:'', opts:['长','家','纹','级'], ans:'纹'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['bu','bù','bú'], ans:'bu'},{n:2, word:'', opts:['bu','bù','bú'], ans:'bù'},{n:3, word:'', opts:['bu','bù','bú'], ans:'bu'},
      {n:4, word:'', opts:['bu','bù','bú'], ans:'bú'},{n:5, word:'', opts:['bu','bù','bú'], ans:'bú'},{n:6, word:'', opts:['bu','bù','bú'], ans:'bù'}]}
  ]},
  {no:9, sections:[
    {id:'A', kind:'blank', bank:['淋雨','薄子','撕开','淹没','木棍','帆船'], items:[{n:1, ans:'撕开'},{n:2, ans:'木棍'},{n:3, ans:'帆船'},{n:4, ans:'淋雨'},{n:5, ans:'薄子', uncertain:true},{n:6, ans:'淹没'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['漂浮','沉浮'], ans:'漂浮'},
      {n:2, word:'', opts:['继续','连续'], ans:'连续'},
      {n:3, word:'', opts:['支持','保持'], ans:'保持'},
      {n:4, word:'', opts:['尝试','测试'], ans:'尝试'},
      {n:5, word:'', opts:['推出','推迟'], ans:'推出'}]}
  ]},
  {no:10, sections:[
    {id:'A', kind:'blank', items:[{n:1, ans:'购'},{n:2, ans:'网'},{n:3, ans:'官'},{n:4, ans:'验'},{n:5, ans:'设'},{n:6, ans:'序'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['绕','浇'], ans:'绕'},
      {n:2, word:'', opts:['太','态'], ans:'态'},
      {n:3, word:'', opts:['激','邀'], ans:'激'},
      {n:4, word:'', opts:['架','驾'], ans:'驾'},
      {n:5, word:'', opts:['俭','验'], ans:'验'}]}
  ]},
  {no:11, sections:[
    {id:'A', kind:'text', items:[
      {n:1, ans:['设定','定时','时间']},
      {n:2, ans:['零食','食物','物品']},
      {n:3, ans:['需要','要点','点头']},
      {n:4, ans:['骨头','头发','发现']},
      {n:5, ans:['残疾','疾病','病人']}]},
    {id:'B', kind:'tick', items:[
      {n:1, opts:['a','b','c','d'], ans:['a','c','d']},
      {n:2, opts:['a','b','c','d'], ans:['b','c','d']}]}
  ]},
  {no:12, sections:[
    {id:'A', kind:'blank', bank:['赏','终','途','贺','得'], items:[
      {n:1, pre:'始', ans:'终'},{n:2, pre:'奖', ans:'赏'},{n:3, pre:'用', ans:'途'},
      {n:4, pre:'获', ans:'得'},{n:5, pre:'祝', ans:'贺'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['职业','职责'], ans:'职业'},
      {n:2, word:'', opts:['提供','供求'], ans:'提供'},
      {n:3, word:'', opts:['增加','增强'], ans:'增加'},
      {n:4, word:'', opts:['宣告','宣传'], ans:'宣传'},
      {n:5, word:'', opts:['繁多','繁荣'], ans:'繁荣'}]},
    {id:'C', kind:'tick', cols:2, items:[
      {n:1, opts:['✓'], ans:['✓']},{n:2, opts:['✓'], ans:[]},{n:3, opts:['✓'], ans:['✓']},
      {n:4, opts:['✓'], ans:[]},{n:5, opts:['✓'], ans:['✓']},{n:6, opts:['✓'], ans:['✓']}]}
  ]},
  {no:13, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'1 (a)', opts:['幕','慕'], ans:'幕'},{n:'1b', word:'1 (b)', opts:['幕','慕'], ans:'慕'},
      {n:'2a', word:'2 (a)', opts:['善','喜'], ans:'善'},{n:'2b', word:'2 (b)', opts:['善','喜'], ans:'喜'},
      {n:'3a', word:'3 (a)', opts:['遍','偏'], ans:'遍'},{n:'3b', word:'3 (b)', opts:['遍','偏'], ans:'偏'},
      {n:'4a', word:'4 (a)', opts:['贫','贪'], ans:'贫'},{n:'4b', word:'4 (b)', opts:['贫','贪'], ans:'贪'}]},
    {id:'B', kind:'free', items:[{n:1},{n:2},{n:3}]}
  ]},
  {no:14, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'寒', opts:['苦','冷'], ans:'冷'},
      {n:2, word:'灾', opts:['火','水'], ans:'火'},
      {n:3, word:'腰', opts:['带','包'], ans:'带'},
      {n:4, word:'束', opts:['花','结'], ans:'花'},
      {n:5, word:'饥', opts:['饿','渴'], ans:'饿'},
      {n:6, word:'育', opts:['培','体'], ans:'体'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'居里夫人有什么巨大的成就？', opts:['A','B','C'], ans:'A'},
      {n:'2a', word:'', opts:['写了一封信','发了一封电报'], ans:'写了一封信'},
      {n:'2b', word:'', opts:['车票','路费'], ans:'路费'},
      {n:3, word:'居里夫人是个怎样的人？', opts:['懂得感恩','舍己为人'], ans:'懂得感恩', text:true}]}
  ]},
  {no:15, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'云中', opts:['小车','小船'], ans:'小船'},
      {n:'1b', word:'又变成', opts:['皮球','飞盘'], ans:'皮球'},
      {n:2, word:'以下哪项不是月亮变的食物？', opts:['饼干','香蕉','月饼'], ans:'月饼'}]},
    {id:'B', kind:'free', items:[{n:3}]}
  ]},
  {no:16, sections:[
    {id:'A', kind:'pdf', note:'Listening. Use the PDF page.'}
  ]},
  {no:17, sections:[
    {id:'A', kind:'blank', items:[{n:1, ans:'服'},{n:2, ans:'细'},{n:3, ans:'烈'},{n:4, ans:'照'},{n:5, ans:'鲜'}]}
  ]},
  {no:18, sections:[
    {id:'A', kind:'blank', cols:2, bank:['强大','强烈','强求','强迫','模范','模仿','模具','模样'], items:[
      {n:'1a', pre:'强 qiáng', ans:'强大'},{n:'1b', pre:'强 qiáng', ans:'强烈'},
      {n:'2a', pre:'强 qiǎng', ans:'强求'},{n:'2b', pre:'强 qiǎng', ans:'强迫'},
      {n:'3a', pre:'模 mó', ans:'模仿'},{n:'3b', pre:'模 mó', ans:'模范'},
      {n:'4a', pre:'模 mú', ans:'模具'},{n:'4b', pre:'模 mú', ans:'模样'}]}
  ]},
  {no:19, sections:[
    {id:'A', kind:'blank', items:[{n:1, ans:'职'},{n:2, ans:'态'},{n:3, ans:'赞'},{n:4, ans:'增'},{n:5, ans:'零'}]}
  ]},
  {no:20, sections:[
    {id:'A', kind:'text', items:[
      {n:1, ans:'帽子'},{n:2, ans:'骨头'},{n:3, ans:'手臂'},
      {n:4, ans:'玩偶'},{n:5, ans:'花盆'},{n:6, ans:'零件'}]}
  ]}
];
