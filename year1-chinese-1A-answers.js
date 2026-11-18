/* Answers for 华文 1A 课堂评估 (1-20), from the 参考答案 pages (PDF pages 37-38).
   kind: 'blank' = fill from a word bank | 'choice' = pick one | 'text' = type the answer | 'free' = free answer | 'pdf' = use the PDF page (drawing, writing strokes, or picture matching)
   uncertain:true = still worth checking against the printed key. */
const ANSWERS = [
  {no:1, sections:[
    {id:'A', kind:'blank', bank:['太','天','字','小','书','上'], items:[
      {n:1, ans:'太'},{n:2, ans:'天'},{n:3, ans:'字'},{n:4, ans:'小'},{n:5, ans:'书'},{n:6, ans:'上'}]},
    {id:'B', kind:'choice', items:[{n:1, word:'', opts:['6画','7画'], ans:'6画'},{n:2, word:'', opts:['3画','4画'], ans:'4画'},{n:3, word:'', opts:['5画','6画'], ans:'6画'},{n:4, word:'', opts:['8画','9画'], ans:'8画'},{n:5, word:'', opts:['9画','10画'], ans:'10画'}]}
  ]},
  {no:2, sections:[
    {id:'A', kind:'blank', bank:['树枝','草地','招招手','做早操','校门口'], items:[{n:1, pre:'图1', ans:'树枝'},{n:2, pre:'图2', ans:'草地'},{n:3, pre:'图3', ans:'招招手'},{n:4, pre:'图4', ans:'做早操'},{n:5, pre:'图5', ans:'校门口'}]},
    {id:'B', kind:'text', items:[{n:1, ans:'门'},{n:2, ans:'手'},{n:3, ans:'草'},{n:4, ans:'花'},{n:5, ans:'树'},{n:6, ans:'走'}]}
  ]},
  {no:3, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'上课'},{n:2, ans:'儿歌'},{n:3, ans:'故事'},{n:4, ans:'知识'}]},
    {id:'B', kind:'tick', items:[{n:1, opts:['✓'], ans:['✓']},{n:2, opts:['✓'], ans:[]},{n:3, opts:['✓'], ans:[]}]},
    {id:'C', kind:'blank', items:[{n:1, opts:['早上','下午'], ans:'早上'},{n:'2a', bank:['在小树丛捉迷藏','在小河边捉小鱼'], ans:'在小树丛捉迷藏'},{n:'2b', bank:['在小树丛捉迷藏','在小河边捉小鱼'], ans:'在小河边捉小鱼'},{n:3, opts:['去打球','上学去'], ans:'上学去'}]}
  ]},
  {no:4, sections:[
    {id:'A', kind:'blank', bank:['爸','妈','笑','星','多','中'], items:[
      {n:1, pre:'父 + 巴 =', ans:'爸'},{n:2, pre:'女 + 马 =', ans:'妈'},{n:3, pre:'竹 + 天 =', ans:'笑'},
      {n:4, pre:'日 + 生 =', ans:'星'},{n:5, pre:'夕 + 夕 =', ans:'多'},{n:6, pre:'口 + 丨 =', ans:'中'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['爸爸笑着回来了。','姐姐笑着回来了。'], ans:'爸爸笑着回来了。'},
      {n:2, word:'', opts:['妈妈把窗口关上。','妈妈把窗口打开。'], ans:'妈妈把窗口打开。'},
      {n:3, word:'', opts:['妈妈站在我和爸爸的中间。','我站在爸爸和妈妈的中间。'], ans:'我站在爸爸和妈妈的中间。'},
      {n:4, word:'', opts:['天上有很多星星。','月亮和星星靠得那么近。'], ans:'天上有很多星星。'}]}
  ]},
  {no:5, sections:[
    {id:'A', kind:'blank', bank:['蛋','鱼','房','菜','瓜','饭'], items:[
      {n:1, pre:'', ans:'鱼'},{n:2, pre:'', ans:'饭'},{n:3, pre:'黄', ans:'瓜'},
      {n:4, pre:'青', ans:'菜'},{n:5, pre:'鸡', ans:'蛋'},{n:6, pre:'', ans:'房'}]},
    {id:'B', kind:'blank', bank:['有','都','吃','乐','欢'], items:[
      {n:1, ans:'欢'},{n:2, ans:'有'},{n:3, ans:'吃'},{n:4, ans:'都'},{n:5, ans:'乐'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'请你把玩具还（  ）给我。', opts:['hái','huán'], ans:'huán'},
      {n:2, word:'我把数学课本还（  ）给美美。', opts:['hái','huán'], ans:'huán'},
      {n:3, word:'饭桌上有鱼有蛋还（  ）有菜。', opts:['hái','huán'], ans:'hái'},
      {n:4, word:'这么晚了，你怎么还（  ）没睡？', opts:['hái','huán'], ans:'hái'},
      {n:5, word:'学校还（  ）有两个星期就放假了。', opts:['hái','huán'], ans:'hái'}]}
  ]},
  {no:6, sections:[
    {id:'A', kind:'blank', bank:['甜','肥','美','林'], items:[{n:1, pre:'图1', ans:'甜'},{n:2, pre:'图2', ans:'肥'},{n:3, pre:'图3', ans:'美'},{n:4, pre:'图4', ans:'林'}]},
    {id:'B', kind:'blank', bank:['双','片','羊','蜂'], items:[
      {n:1, ans:'片'},{n:2, ans:'羊'},{n:3, ans:'蜂'},{n:4, ans:'双'}]}
  ]},
  {no:7, sections:[
    {id:'A', kind:'choice', items:[{n:1, word:'月（  ）', opts:['天','亮'], ans:'亮'},{n:2, word:'（  ）山', opts:['乐','高'], ans:'高'},{n:3, word:'相（  ）', opts:['片','星'], ans:'片'},{n:4, word:'（  ）河', opts:['小','木'], ans:'小'},{n:5, word:'雨（  ）', opts:['天','毛'], ans:'天'},{n:6, word:'（  ）曲', opts:['奇','弯'], ans:'弯'}]},
    {id:'B', kind:'choice', items:[{n:1, word:'', opts:['A','B','C'], ans:'B'}]},
    {id:'C', kind:'blank', bank:['有花有草的地方','没有花没有草的地方'], items:[{n:'2a', pre:'(a) 小雨点儿 →', ans:'有花有草的地方'},{n:'2b', pre:'(b) 大雨点儿 →', ans:'没有花没有草的地方'}]},
    {id:'D', kind:'choice', items:[{n:'3a', word:'变得（  ）', opts:['美丽','干净'], ans:'美丽'},{n:'3b', word:'（  ）了', opts:['美丽','干净'], ans:'干净'}]}
  ]},
  {no:8, sections:[
    {id:'A', kind:'blank', bank:['只','个','动','重','洞'], items:[
      {n:1, ans:'个'},{n:2, ans:'只'},{n:3, ans:'洞'},{n:'4a', ans:'重'},{n:'4b', ans:'动'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'一（  ）蚂蚁', opts:['只','群'], ans:'群'},
      {n:2, word:'一（  ）小鸟', opts:['只','群'], ans:'只'},
      {n:3, word:'一（  ）老虎', opts:['只','群'], ans:'只'},
      {n:4, word:'一（  ）天鹅', opts:['只','群'], ans:'群'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'老虎比小猫（  ）。', opts:['大','小'], ans:'大'},
      {n:2, word:'水里有很（  ）鱼儿。', opts:['多','少'], ans:'多'},
      {n:3, word:'老鼠比大象（  ）。', opts:['大','小'], ans:'小'}]}
  ]},
  {no:9, sections:[
    {id:'A', kind:'blank', bank:['牙齿','脚爪','小腿','花园','眼睛','汗水'], items:[{n:1, pre:'图1', ans:'牙齿'},{n:2, pre:'图2', ans:'脚爪'},{n:3, pre:'图3', ans:'小腿'},{n:4, pre:'图4', ans:'花园'},{n:5, pre:'图5', ans:'眼睛'},{n:6, pre:'图6', ans:'汗水'}]},
    {id:'B', kind:'blank', bank:['目','月'], items:[
      {n:1, pre:'睛、睡 的部首：', ans:'目'},{n:2, pre:'脚、腿 的部首：', ans:'月'}]},
    {id:'C', kind:'blank', items:[
      {n:1, pre:'飞 → 飞', bank:['豆','大','机'], ans:'机'},
      {n:2, pre:'采 → 采', bank:['心','花','水'], ans:'花'},
      {n:3, pre:'脚 → 脚', bank:['印','色','地'], ans:'印'},
      {n:4, pre:'睡 → 睡', bank:['目','觉','方'], ans:'觉'}]}
  ]},
  {no:10, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'（  ）', opts:['裸','课'], ans:'裸'},
      {n:2, word:'（  ）', opts:['骨','滑'], ans:'滑'},
      {n:3, word:'（  ）', opts:['从','丛'], ans:'从'},
      {n:4, word:'（  ）', opts:['坐','座'], ans:'坐'},
      {n:5, word:'（  ）', opts:['弟','梯'], ans:'梯'},
      {n:6, word:'（  ）', opts:['昌','唱'], ans:'唱'}]},
    {id:'B', kind:'text', items:[{n:1, ans:'唱歌'},{n:2, ans:'香蕉'},{n:3, ans:'快乐'},{n:4, ans:'滑梯'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'你喜欢什么颜色（  ）', opts:['。','？'], ans:'？'},
      {n:2, word:'小鸟在树上唱歌（  ）', opts:['。','？'], ans:'。'},
      {n:3, word:'地上有一只毛毛虫（  ）', opts:['。','？'], ans:'。'},
      {n:4, word:'圆圆的月亮像什么（  ）', opts:['。','？'], ans:'？'},
      {n:5, word:'你最爱听什么故事（  ）', opts:['。','？'], ans:'？'},
      {n:6, word:'公园里有许多花草树木（  ）', opts:['。','？'], ans:'。'}]}
  ]},
  {no:11, sections:[
    {id:'A', kind:'blank', bank:['听','开心','晴天','安静'], items:[
      {n:1, pre:'说 ↔', ans:'听'},{n:2, pre:'伤心 ↔', ans:'开心'},{n:3, pre:'雨天 ↔', ans:'晴天'},{n:4, pre:'吵闹 ↔', ans:'安静'}]},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'弟弟很（  ）老鼠。', opts:['拍','怕'], ans:'怕'},
      {n:'1b', word:'我在动物园里（  ）照留念。', opts:['拍','怕'], ans:'拍'},
      {n:'2a', word:'盒子里有多（  ）支笔？', opts:['少','吵'], ans:'少'},
      {n:'2b', word:'我们在图书馆里不可以（  ）闹。', opts:['少','吵'], ans:'吵'},
      {n:'3a', word:'妹妹有一双大眼（  ）。', opts:['睛','晴'], ans:'睛'},
      {n:'3b', word:'今天是（  ）天，我到草地上放风筝。', opts:['睛','晴'], ans:'晴'}]}
  ]},
  {no:12, sections:[
    {id:'A', kind:'blank', bank:['睡衣','图画','文字','书本','黑色','铅笔'], items:[
      {n:1, ans:'书本'},{n:2, ans:'睡衣'},{n:3, ans:'铅笔'},{n:4, ans:'文字'},{n:5, ans:'图画'},{n:6, ans:'黑色'}]},
    {id:'B', kind:'choice', items:[{n:1, word:'', opts:['A','B','C'], ans:'A'}]},
    {id:'C', kind:'tick', items:[
      {n:'2a 叫起床', opts:['✓'], ans:['✓']},{n:'2b 教做功课', opts:['✓'], ans:[]},
      {n:'2c 提醒赶快做功课', opts:['✓'], ans:['✓']},{n:'2d 准时到学校', opts:['✓'], ans:['✓']}]},
    {id:'D', kind:'choice', items:[{n:3, word:'', opts:['A','B','C'], ans:'B'}]}
  ]},
  {no:13, sections:[
    {id:'A', kind:'blank', bank:['小船','银色','身体','树叶','沙滩'], items:[
      {n:1, ans:'身体'},{n:2, ans:'小船'},{n:3, ans:'沙滩'},{n:4, ans:'银色'},{n:5, ans:'树叶'}]},
    {id:'B', kind:'free', items:[{n:1},{n:2}]}
  ]},
  {no:14, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'（  ）车', opts:['气','汽'], ans:'汽'},
      {n:2, word:'（  ）学', opts:['同','间'], ans:'同'},
      {n:3, word:'（  ）包', opts:['钱','线'], ans:'钱'},
      {n:4, word:'书（  ）', opts:['架','驾'], ans:'架'}]},
    {id:'B', kind:'blank', bank:['面','车','年'], items:[
      {n:1, ans:'车'},{n:2, ans:'年'},{n:3, ans:'面'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'一（  ）小船', opts:['架','只','辆'], ans:'只'},
      {n:2, word:'一（  ）汽车', opts:['架','只','辆'], ans:'辆'},
      {n:3, word:'一（  ）飞机', opts:['架','只','辆'], ans:'架'}]},
    {id:'D', kind:'free', items:[{n:1},{n:2}]}
  ]},
  {no:15, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'小蜜蜂一天到晚忙着做什么？', opts:['A 采花','B 采蜜','C 交朋友'], ans:'B 采蜜'},
      {n:2, word:'小蜜蜂能吃苦，爱（  ）', opts:['玩乐','劳动'], ans:'劳动'}]},
    {id:'B', kind:'free', items:[{n:3}]}
  ]},
  {no:16, sections:[
    {id:'A', kind:'free', items:[{n:1}]}
  ]},
  {no:17, sections:[
    {id:'A', kind:'blank', bank:['阳','枝','地','子'], items:[
      {n:1, pre:'草 +', ans:'地'},{n:2, pre:'太 +', ans:'阳'},{n:3, pre:'树 +', ans:'枝'},{n:4, pre:'房 +', ans:'子'}]}
  ]},
  {no:18, sections:[
    {id:'A', kind:'blank', bank:['唱','听','味','河','洞','汗'], items:[
      {n:1, pre:'口部：', ans:'唱'},{n:2, pre:'口部：', ans:'听'},{n:3, pre:'口部：', ans:'味'},
      {n:4, pre:'水部：', ans:'河'},{n:5, pre:'水部：', ans:'洞'},{n:6, pre:'水部：', ans:'汗'}]}
  ]},
  {no:19, sections:[
    {id:'A', kind:'blank', bank:['问','沙','叶','辆'], items:[
      {n:1, pre:'门口 →', ans:'问'},{n:2, pre:'很少水 →', ans:'沙'},{n:3, pre:'十张口 →', ans:'叶'},{n:4, pre:'两部车 →', ans:'辆'}]}
  ]},
  {no:20, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'蚂蚁'},{n:2, ans:'天鹅'},{n:3, ans:'月亮'},{n:4, ans:'星星'},{n:5, ans:'剪刀'},{n:6, ans:'香蕉'}]}
  ]}
];