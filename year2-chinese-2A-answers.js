/* Answers for 华文 2A 课堂评估 (1-20), from the 参考答案 pages (PDF pages 37-38).
   kind: 'blank' = fill from a word bank | 'choice' = pick one | 'text' = type the answer | 'free' = free answer | 'pdf' = use the PDF page (drawing, circling, joining lines)
   uncertain:true = still worth checking against the printed key. */
const ANSWERS = [
  {no:1, sections:[
    {id:'A', kind:'text', uncertain:true, items:[{n:1, ans:'字典'},{n:2, ans:'画画'},{n:3, ans:'台灯'},{n:4, ans:'椅子'},{n:5, ans:'扑满'},{n:6, ans:'书桌'}]},
    {id:'B', kind:'text', items:[{n:1, ans:'台'},{n:2, ans:'典'},{n:3, ans:'筒'},{n:4, ans:'满'},{n:5, ans:'集'}]},
    {id:'C', kind:'blank', shuffle:true, bank:['笔筒','集邮','书橱'], items:[
      {n:1, pre:'妹妹的爱好是', ans:'集邮'},{n:2, pre:'爸爸在书房里整理', ans:'书橱'},{n:3, pre:'妈妈给我买了一个', ans:'笔筒'}]}
  ]},
  {no:2, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'朗'},{n:2, ans:'界'},{n:3, ans:'感'},{n:4, ans:'泪'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['浪','向','万','千','列','团'], items:[
      {n:1, ans:'列'},{n:2, ans:'千'},{n:3, ans:'向'},{n:4, ans:'万'},{n:5, ans:'浪'},{n:6, ans:'团'}]},
    {id:'C', kind:'blank', shuffle:true, bank:['教室','游戏','朗朗','世界','泪水','点滴'], items:[
      {n:1, pre:'小朋友在大树下', ans:'游戏'},{n:2, pre:'校园里到处是', ans:'朗朗'},{n:3, pre:'长颈鹿是', ans:'世界'},
      {n:4, pre:'同学们在', ans:'教室'},{n:5, pre:'我在日记里写下今天的生活', ans:'点滴'},{n:6, pre:'这个故事令妹妹感动得流下伤心的', ans:'泪水'}]}
  ]},
  {no:3, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'行'},{n:2, ans:'许'},{n:3, ans:'货'},{n:4, ans:'调'},{n:5, ans:'理'},{n:6, ans:'忽'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['布熊','花瓶','钢琴','卡车','洋娃娃','不倒翁'], items:[
      {n:1, ans:'布熊'},{n:2, ans:'花瓶'},{n:3, ans:'钢琴'},
      {n:4, ans:'卡车'},{n:5, ans:'洋娃娃'},{n:6, ans:'不倒翁'}]},
    {id:'C', kind:'blank', shuffle:true, bank:['。','？','：','“','”'], items:[
      {n:1, tpl:'这是谁的尺{0}', slots:['？']},
      {n:2, tpl:'请问这是什么{0}', slots:['？']},
      {n:3, tpl:'今天是哥哥的生日{0}', slots:['。']},
      {n:4, tpl:'小朋友在草地上做早操{0}', slots:['。']},
      {n:5, tpl:'老师问{0}{1}谁爱画画儿{2}{3}', slots:['：','“','？','”']},
      {n:6, tpl:'丽丽说{0}{1}我喜欢弹钢琴{2}{3}', slots:['：','“','。','”']}]}
  ]},
  {no:4, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['合','晨','借','祝','装','忘'], items:[
      {n:1, ans:'借'},{n:2, ans:'装'},{n:3, ans:'忘'},
      {n:4, ans:'合'},{n:5, ans:'晨'},{n:6, ans:'祝'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['只','轮'], ans:'轮'},
      {n:2, word:'', opts:['辆','个'], ans:'辆'},
      {n:3, word:'', opts:['把','棵'], ans:'棵'},
      {n:4, word:'', opts:['双','张'], ans:'张'},
      {n:5, word:'', opts:['名','只'], ans:'只'},
      {n:6, word:'', opts:['条','块'], ans:'条'}]}
  ]},
  {no:5, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['炒','炸','汤','渔','钓','钩'], uncertain:true, items:[
      {n:1, tpl:'{0} ／ {1}', slots:['炒','炸']},
      {n:2, tpl:'{0} ／ {1}', slots:['汤','渔']},
      {n:3, tpl:'{0} ／ {1}', slots:['钓','钩']}]},
    {id:'B', kind:'blank', shuffle:true, bank:['炒面','年糕','渔夫','炸鸡'], items:[
      {n:1, ans:'渔夫'},{n:2, ans:'炸鸡'},{n:3, ans:'炒面'},{n:4, ans:'年糕'}]},
    {id:'C', kind:'choice', items:[
      {n:'1a', word:'', right:'儿', opts:['鱼','渔'], ans:'鱼'},{n:'1b', word:'', right:'网', opts:['鱼','渔'], ans:'渔'},
      {n:'2a', word:'', right:'闹', opts:['吵','炒'], ans:'吵'},{n:'2b', word:'', right:'饭', opts:['吵','炒'], ans:'炒'},
      {n:'3a', word:'', right:'拍', opts:['求','球'], ans:'球'},{n:'3b', word:'请', opts:['求','球'], ans:'求'},
      {n:'4a', word:'草', opts:['场','汤'], ans:'场'},{n:'4b', word:'', right:'圆', opts:['场','汤'], ans:'汤'},
      {n:'5a', word:'', right:'鱼', opts:['钓','钩'], ans:'钓'},{n:'5b', word:'', right:'子', opts:['钓','钩'], ans:'钩'},
      {n:'6a', word:'', right:'天', opts:['昨','炸'], ans:'昨'},{n:'6b', word:'', right:'油条', opts:['昨','炸'], ans:'炸'}]}
  ]},
  {no:6, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'笼'},{n:2, ans:'挖'},{n:3, ans:'篱'},{n:4, ans:'提'},{n:5, ans:'笆'},{n:6, ans:'摘'}], uncertain:true},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['龙','笼'], ans:'笼'},
      {n:2, word:'', opts:['头','实'], ans:'实'},
      {n:3, word:'', opts:['巴','笆'], ans:'笆'}], uncertain:true},
    {id:'C', kind:'choice', items:[
      {n:1, word:'', opts:['结','挖'], ans:'结'},
      {n:2, word:'', opts:['提','摘'], ans:'提'},
      {n:3, word:'', opts:['栽','挂'], ans:'栽'},
      {n:4, word:'', opts:['汁','实'], ans:'汁'},
      {n:5, word:'', opts:['挖','摘'], ans:'摘'},
      {n:6, word:'', opts:['龙','笼'], ans:'笼'}]}
  ]},
  {no:7, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['野兔','袋鼠','池塘','锄头','肥料'], uncertain:true, items:[
      {n:1, pre:'图一 →', ans:'池塘'},{n:2, pre:'图二 →', ans:'袋鼠'},{n:3, pre:'图三 →', ans:'野兔'},
      {n:4, pre:'图四 →', ans:'锄头'},{n:5, pre:'图五 →', ans:'肥料'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'傍（  ）', opts:['天','晚','上','气'], ans:'晚'},
      {n:2, word:'吸（  ）', opts:['收','瓜','方','望'], ans:'收'},
      {n:3, word:'讲（  ）', opts:['杯','品','话','项'], ans:'话'},
      {n:4, word:'岸（  ）', opts:['全','上','心','静'], ans:'上'},
      {n:5, word:'围（  ）', opts:['一','反','难','裙'], ans:'裙'},
      {n:6, word:'连（  ）', opts:['忙','动','玉','子'], ans:'忙'}]}
  ]},
  {no:8, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['鼠','枝','叶','定','果','宫','子'], items:[
      {n:1, pre:'松 →', ans:'鼠'},{n:2, pre:'枯 →', ans:'叶'},{n:3, pre:'坚 →', ans:'果'},{n:4, pre:'王 →', ans:'子'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['、','。'], items:[
      {n:1, tpl:'妹妹喜欢吃苹果{0}香蕉和木瓜{1}', slots:['、','。']},
      {n:2, tpl:'我的书包里有课本{0}作业和文具盒{1}', slots:['、','。']},
      {n:3, tpl:'文文在动物园里看见了老虎{0}狮子和大象{1}', slots:['、','。']}]},
    {id:'C', kind:'tick', tick:{cols:['(a)','(b)','(c)'], rows:['1. 不只……也……','2. 而是'], perRow:3}, items:[
      {n:'1a', opts:['✓'], ans:['✓']},{n:'1b', opts:['✓'], ans:[]},{n:'1c', opts:['✓'], ans:['✓']},
      {n:'2a', opts:['✓'], ans:[]},{n:'2b', opts:['✓'], ans:['✓']},{n:'2c', opts:['✓'], ans:['✓']}]}
  ]},
  {no:9, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['树根','毛线','赞赏','风筝','微笑','飞行员'], items:[
      {n:1, ans:'风筝'},{n:2, ans:'树根'},{n:3, ans:'飞行员'},{n:4, ans:'微笑'},{n:5, ans:'赞赏'},{n:6, ans:'毛线'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'在马路边玩耍是很（  ）的行为。', opts:['A 愉快','B 危险','C 乖巧'], ans:'B 危险'},
      {n:2, word:'妹妹在学校里和（  ）同学相处得很好。', opts:['A 其他','B 那样','C 当中'], ans:'A 其他'},
      {n:3, word:'今天，我在游乐场里度过了（  ）的一天。', opts:['A 专心','B 认真','C 愉快'], ans:'C 愉快'},
      {n:4, word:'家伟乐于助人的行为受到师长们的（  ）。', opts:['A 欢迎','B 赞赏','C 祝福'], ans:'B 赞赏'},
      {n:5, word:'对于别人的劝告，他（  ）就没记在心上。', opts:['A 根本','B 不但','C 虽然'], ans:'A 根本'},
      {n:6, word:'我长大后想当（  ），开着飞机带人们到世界各地。', opts:['A 船长','B 海盗','C 飞行员'], ans:'C 飞行员'}]}
  ]},
  {no:10, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['芒果','榴莲'], ans:'榴莲'},
      {n:2, word:'', opts:['轮胎','时钟'], ans:'轮胎'},
      {n:3, word:'', opts:['鱼虾','螃蟹'], ans:'鱼虾'},
      {n:4, word:'', opts:['泥土','石子'], ans:'石子'},
      {n:5, word:'', opts:['排队','招手'], ans:'排队'},
      {n:6, word:'', opts:['窄小','宽阔'], ans:'宽阔'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['方','赛','婆','理','头','手','阳','少'], items:[
      {n:1, pre:'北', ans:'方'},{n:2, pre:'比', ans:'赛'},{n:3, pre:'外', ans:'婆'},{n:4, pre:'处', ans:'理'},
      {n:5, pre:'石', ans:'头'},{n:6, pre:'右', ans:'手'},{n:7, pre:'夕', ans:'阳'},{n:8, pre:'多', ans:'少'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'乡村的孩子们都喜欢到小河边（  ）', opts:['捉鱼','捉小鸡'], ans:'捉鱼'},
      {n:2, word:'哪个地方是孩子们的游乐园？', opts:['A 草地','B 小河','C 高山'], ans:'B 小河'},
      {n:3, kind:'text', word:'小鸡用尖嘴啄你的手掌，是在和你（  ）。', ans:'打招呼'},
      {n:4, word:'读了这篇短文，我（  ）乡村景色', opts:['喜欢','不喜欢'], ans:'喜欢', text:true}]}
  ]},
  {no:11, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['吹','吃','问','叮','味'], items:[
      {n:1, pre:'口 + 欠 →', ans:'吹'},{n:2, pre:'口 + 乞 →', ans:'吃'},{n:3, pre:'口 + 门 →', ans:'问'},
      {n:4, pre:'口 + 丁 →', ans:'叮'},{n:5, pre:'口 + 未 →', ans:'味'}]},
    {id:'B', kind:'text', items:[
      {n:1, pre:'吹', ans:'风', big:true},{n:2, pre:'吃', ans:'饭', big:true},{n:3, pre:'问', ans:'题', big:true},{n:4, pre:'叮', ans:'咬', big:true},{n:5, pre:'味', ans:'道', big:true}]}
  ]},
  {no:12, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'', opts:['科','料'], ans:'科'},
      {n:'1b', word:'', opts:['科','料'], ans:'料'},
      {n:'2a', word:'', opts:['底','低'], ans:'底'},
      {n:'2b', word:'', opts:['底','低'], ans:'低'},
      {n:'3a', word:'', opts:['老','考'], ans:'考'},
      {n:'3b', word:'', opts:['老','考'], ans:'老'},
      {n:'4a', word:'', opts:['记','纪'], ans:'纪'},
      {n:'4b', word:'', opts:['记','纪'], ans:'记'},
      {n:'5a', word:'', opts:['担','胆'], ans:'胆'},
      {n:'5b', word:'', opts:['担','胆'], ans:'担'},
      {n:'6a', word:'', opts:['壮','状'], ans:'壮'},
      {n:'6b', word:'', opts:['壮','状'], ans:'状'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['丢','掉'], ans:'掉'},
      {n:2, word:'', opts:['庭院','果园'], ans:'庭院'},
      {n:3, word:'', opts:['捉迷藏','跳房子'], ans:'捉迷藏'}]},
    {id:'C', kind:'free', items:[{n:1},{n:2},{n:3}]},
    {id:'D', kind:'choice', items:[
      {n:1, word:'', opts:['块','串'], ans:'串'},
      {n:2, word:'', opts:['首','片'], ans:'首'},
      {n:3, word:'', opts:['只','幅'], ans:'幅'},
      {n:4, word:'', opts:['棵','颗'], ans:'颗'}]}
  ]},
  {no:13, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['趣','饼','劳','主','康','季'], items:[
      {n:1, puzzle:{top:'公', left:'财', right:'角'}, ans:'主'},{n:2, puzzle:{top:'雨', left:'四', right:'节'}, ans:'季'},
      {n:3, puzzle:{top:'有', left:'兴', right:'事'}, ans:'趣'},{n:4, puzzle:{top:'月', left:'烧', right:'干'}, ans:'饼'},
      {n:5, puzzle:{top:'勤', left:'功', right:'动'}, ans:'劳'},{n:6, puzzle:{top:'安', left:'健', right:'复'}, ans:'康'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['山坡','院子'], ans:'山坡'},
      {n:2, word:'', opts:['教室','图书馆'], ans:'图书馆'},
      {n:3, word:'', opts:['拜访','访问'], ans:'拜访'}]},
    {id:'C', kind:'blank', shuffle:true, bank:['guī','jūn','ké','qiào','cáng','zàng'], items:[
      {n:1, pre:'海龟 →', ans:'guī'},{n:2, pre:'乌龟 →', ans:'guī'},{n:3, pre:'土地龟裂 →', ans:'jūn'},
      {n:4, pre:'贝壳 →', ans:'ké'},{n:5, pre:'鸡蛋壳 →', ans:'ké'},{n:6, pre:'昆虫脱壳 →', ans:'qiào'},
      {n:7, pre:'收藏 →', ans:'cáng'},{n:8, pre:'宝藏 →', ans:'zàng'},{n:9, pre:'捉迷藏 →', ans:'cáng'}]}
  ]},
  {no:14, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['一切','黑暗','湖泊','消失','顽皮','街道'], items:[
      {n:1, ans:'湖泊'},{n:2, ans:'街道'},{n:3, ans:'黑暗'},{n:4, ans:'顽皮'},{n:5, ans:'消失'},{n:6, ans:'一切'}]},
    {id:'B', kind:'free', items:[{n:1},{n:2},{n:3}]}
  ]},
  {no:15, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'', opts:['书包','文具盒'], ans:'书包'},
      {n:'1b', word:'', opts:['袋子','抽屉'], ans:'抽屉'},
      {n:2, word:'', opts:['A 粗心','B 顽皮','C 活泼'], ans:'A 粗心'}]},
    {id:'B', kind:'free', items:[{n:3}]}
  ]},
  {no:16, sections:[
    {id:'A', kind:'free', items:[{n:1, big:true}]}
  ]},
  {no:17, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'泪'},{n:2, ans:'馆'},{n:3, ans:'行'},{n:4, ans:'列'},{n:5, ans:'状'},{n:6, ans:'糕'}], uncertain:true}
  ]},
  {no:18, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'慌（  ）', opts:['地','张','色'], ans:'张'},
      {n:2, word:'危（  ）', opts:['小','笑','险'], ans:'险'},
      {n:3, word:'面（  ）', opts:['林','临','邻'], ans:'临'}]}
  ]},
  {no:19, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['枕','松','椅','橱'],
      layout:{rows:5, cols:7, cells:[
        {r:0, c:3, t:'图'},
        {r:1, c:1, t:'石'},{r:1, c:3, t:'书'},{r:1, c:4, n:1},{r:1, c:6, t:'袋'},
        {r:2, c:0, n:2},{r:2, c:1, t:'子'},{r:2, c:3, t:'馆'},{r:2, c:5, n:3},{r:2, c:6, t:'鼠'},
        {r:3, c:2, t:'锄'},
        {r:4, c:1, n:4},{r:4, c:2, t:'头'}]},
      items:[{n:1, ans:'橱'},{n:2, ans:'椅'},{n:3, ans:'松'},{n:4, ans:'枕'}]}
  ]},
  {no:20, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['卡','合','位','枯'], items:[
      {n:1, pre:'① 上下相连 →', ans:'卡'},{n:2, pre:'② 一人一口 →', ans:'合'},
      {n:3, pre:'③ 一人站立 →', ans:'位'},{n:4, pre:'④ 古老的树木 →', ans:'枯'}]}
  ]}
];

/* Labels placed on the scanned page images (x, y = percent from the top-left of the page). Keys are PDF page numbers. */
const PAGE_LABELS = {
  '07': [{t:'图一', x:9.7, y:49.0},{t:'图二', x:9.7, y:62.0},{t:'图三', x:9.7, y:75.3},
         {t:'图四', x:70.5, y:48.7},{t:'图五', x:70.5, y:62.0},{t:'图六', x:70.5, y:75.3}],
  '13': [{t:'图一', x:16.1, y:20.4},{t:'图二', x:61.0, y:20.4},{t:'图三', x:16.1, y:28.6},
         {t:'图四', x:61.0, y:28.6},{t:'图五', x:16.1, y:36.9},{t:'图六', x:61.0, y:36.9}]
};
