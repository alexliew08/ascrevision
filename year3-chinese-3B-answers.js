/* Answers for 华文 3B 课堂评估 (1-20), from the 参考答案 pages (PDF pages 37-38).
   kind: 'blank' = fill from a word bank | 'choice' = pick one | 'text' = type the answer | 'free' = free answer | 'pdf' = use the PDF page
   uncertain:true = still worth checking against the printed key. */
const ANSWERS = [
  {no:1, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'钱', opts:['介','价'], ans:'价'},
      {n:2, word:'断', opts:['吹','砍'], ans:'砍'},
      {n:3, word:'辣', opts:['辛','幸'], ans:'辛'},
      {n:4, word:'名', opts:['著','着'], ans:'著'},
      {n:5, word:'火', opts:['柴','紫'], ans:'柴'},
      {n:6, word:'烧', opts:['然','燃'], ans:'燃'}]},
    {id:'B', kind:'blank', bank:['而且','可是'], items:[
      {n:1, ans:'而且'},{n:2, ans:'可是'},{n:3, ans:'而且'},{n:4, ans:'而且'},{n:5, ans:'可是'},{n:6, ans:'可是'}]}
  ]},
  {no:2, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'龟', opts:['由','甲'], ans:'甲'},
      {n:2, word:'豆', opts:['奖','浆'], ans:'浆'},
      {n:3, word:'关', opts:['闭','闲'], ans:'闭'},
      {n:4, word:'（  ）子', opts:['度','席'], ans:'席'},
      {n:5, word:'（  ）子', opts:['锅','蜗'], ans:'锅'},
      {n:6, word:'（  ）晒', opts:['凉','晾'], ans:'晾'}]},
    {id:'B', kind:'blank', bank:['决定','技术','节省','弱点','浸泡','尊重'], items:[
      {n:1, ans:'尊重'},{n:2, ans:'弱点'},{n:3, ans:'浸泡'},{n:4, ans:'节省'},{n:5, ans:'技术'},{n:6, ans:'决定'}]}
  ]},
  {no:3, sections:[
    {id:'A', kind:'blank', cols:2, items:[
      {n:1, pre:'怀 →', bank:['人','处','抱','事'], ans:'抱'},{n:2, pre:'决 →', bank:['心','色','对','得'], ans:'心'},{n:3, pre:'晾 →', bank:['光','词','晒','解'], ans:'晒'},{n:4, pre:'弱 →', bank:['小','后','叶','选'], ans:'小'},{n:5, pre:'浸 →', bank:['日','步','行','泡'], ans:'泡'},{n:6, pre:'尊 →', bank:['守','从','命','敬'], ans:'敬'}]},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'卷尺', opts:['juǎn','juàn'], ans:'juǎn'},
      {n:'1b', word:'卷曲', opts:['juǎn','juàn'], ans:'juàn'},
      {n:'1c', word:'试卷', opts:['juǎn','juàn'], ans:'juàn'},
      {n:'2a', word:'省钱', opts:['shěng','xǐng'], ans:'shěng'},
      {n:'2b', word:'反省', opts:['shěng','xǐng'], ans:'xǐng'},
      {n:'2c', word:'节省', opts:['shěng','xǐng'], ans:'shěng'},
      {n:'3a', word:'方便', opts:['biàn','pián'], ans:'biàn'},
      {n:'3b', word:'轻便', opts:['biàn','pián'], ans:'biàn'},
      {n:'3c', word:'价格便宜', opts:['biàn','pián'], ans:'pián'}]}
  ]},
  {no:4, sections:[
    {id:'A', kind:'blank', bank:['勺子','书签','正确','妇女','记录','插秧'], items:[
      {n:1, ans:'妇女'},{n:2, ans:'勺子'},{n:3, ans:'插秧'},{n:4, ans:'正确'},{n:5, ans:'书签'},{n:6, ans:'记录'}]},
    {id:'B', kind:'blank', bank:['“','”','《','》'], items:[
      {n:1, tpl:'哥哥教我写 {0} 晶 {1} 这个生字', slots:['“','”']},
      {n:2, tpl:'弟弟学会了唱 {0} 小星星 {1} 这首歌', slots:['《','》']},
      {n:3, tpl:'伟伦说：{0} 妈妈，今天我想吃蛋炒饭。{1}', slots:['“','”']},
      {n:4, tpl:'{0} 星空 {1} 是著名画家梵谷的作品之一', slots:['《','》']},
      {n:5, tpl:'妹妹最喜欢的童话故事是 {0} 卖火柴的小女孩 {1}', slots:['《','》']},
      {n:6, tpl:'爸爸对我们说：{0} 这个假期，我们到怡保玩儿吧！{1}', slots:['“','”']}]}
  ]},
  {no:5, sections:[
    {id:'A', kind:'blank', bank:['财','拔','误','锤','附','塞'], items:[
      {n:1, pre:'贝 +', ans:'财'},{n:2, pre:'手 +', ans:'拔'},{n:3, pre:'口 +', ans:'误'},
      {n:4, pre:'金 +', ans:'锤'},{n:5, pre:'耳 +', ans:'附'},{n:6, pre:'寅 +', ans:'塞'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['yí','yì'], ans:'yì'},
      {n:2, word:'', opts:['yí','yì'], ans:'yí'},
      {n:3, word:'', opts:['yí','yì'], ans:'yí'},
      {n:4, word:'', opts:['yí','yì'], ans:'yì'},
      {n:5, word:'', opts:['yí','yì'], ans:'yí'},
      {n:6, word:'', opts:['yí','yì'], ans:'yì'}]}
  ]},
  {no:6, sections:[
    {id:'A', kind:'blank', bank:['币','褐','阻','欺','拔'], items:[
      {n:1, ans:'币'},{n:2, ans:'褐'},{n:3, ans:'阻'},{n:4, ans:'欺'},{n:5, ans:'拔'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['A','B'], ans:'B'},
      {n:'2a', word:'', opts:['减少','增加'], ans:'增加'},
      {n:'2b', word:'', opts:['减少','增加'], ans:'减少'},
      {n:3, word:'世界很（  ）', opts:['小','大'], ans:'大', text:true}]}
  ]},
  {no:7, sections:[
    {id:'A', kind:'blank', bank:['令','纱','眯','厅','证','赠'], items:[
      {n:1, pre:'米的眼睛', ans:'眯'},{n:2, pre:'少一条丝巾', ans:'纱'},{n:3, pre:'今天多一点', ans:'令'},
      {n:4, pre:'曾经的宝贝', ans:'赠'},{n:5, pre:'正确的语言', ans:'证'},{n:6, pre:'工厂里的园丁', ans:'厅'}]},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'', opts:['飞扬','表扬'], ans:'飞扬'},
      {n:'1b', word:'', opts:['飞扬','表扬'], ans:'表扬'},
      {n:'2a', word:'', opts:['证明','证书'], ans:'证明'},
      {n:'2b', word:'', opts:['证明','证书'], ans:'证书'},
      {n:'3a', word:'', opts:['探望','探看'], ans:'探望'},
      {n:'3b', word:'', opts:['探望','探看'], ans:'探看'}]}
  ]},
  {no:8, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['班级','梯级'], ans:'梯级'},
      {n:2, word:'', opts:['退休','退让'], ans:'退休'},
      {n:3, word:'', opts:['受训','教训'], ans:'教训'},
      {n:4, word:'', opts:['英名','英勇'], ans:'英勇'}]},
    {id:'B', kind:'tick', items:[
      {n:1, opts:['✓'], ans:['✓']},{n:2, opts:['✓'], ans:[]},{n:3, opts:['✓'], ans:[]},{n:4, opts:['✓'], ans:['✓']}]},
    {id:'C', kind:'free', items:[{n:'1（捡）'},{n:'2（努力）'},{n:'3（褪色）'}]}
  ]},
  {no:9, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'(a) ___军', opts:['亚','业'], ans:'亚'},
      {n:'1b', word:'(b) 作___', opts:['亚','业'], ans:'业'},
      {n:'2a', word:'(a) ___咐', opts:['份','吩'], ans:'吩'},
      {n:'2b', word:'(b) 月___', opts:['份','吩'], ans:'份'},
      {n:'3a', word:'(a) ___民', opts:['村','肘'], ans:'村'},
      {n:'3b', word:'(b) 后___', opts:['村','肘'], ans:'肘'},
      {n:'4a', word:'(a) ___讨', opts:['捡','检'], ans:'检'},
      {n:'4b', word:'(b) ___取', opts:['捡','检'], ans:'捡'},
      {n:'5a', word:'(a) ___花', opts:['悔','梅'], ans:'梅'},
      {n:'5b', word:'(b) ___改', opts:['悔','梅'], ans:'悔'},
      {n:'6a', word:'(a) ___尺', opts:['卷','拳'], ans:'卷'},
      {n:'6b', word:'(b) ___头', opts:['卷','拳'], ans:'拳'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'了不___起', opts:['bú','bù','bu'], ans:'bu'},
      {n:2, word:'不___小心', opts:['bú','bù','bu'], ans:'bù'},
      {n:3, word:'很不___错', opts:['bú','bù','bu'], ans:'bú'},
      {n:4, word:'不___是我的', opts:['bú','bù','bu'], ans:'bú'},
      {n:5, word:'不___要吃', opts:['bú','bù','bu'], ans:'bu'}]}
  ]},
  {no:10, sections:[
    {id:'A', kind:'blank', bank:['高峰','梨子','地毯','鞭炮','啄木鸟','猫头鹰'], items:[
      {n:1, pre:'图一', ans:'梨子'},{n:2, pre:'图二', ans:'高峰'},{n:3, pre:'图三', ans:'地毯'},
      {n:4, pre:'图四', ans:'啄木鸟'},{n:5, pre:'图五', ans:'鞭炮'},{n:6, pre:'图六', ans:'猫头鹰'}]},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'', opts:['测验','猜测'], ans:'猜测'},
      {n:'1b', word:'', opts:['测验','猜测'], ans:'测验'},
      {n:'2a', word:'', opts:['天敌','敌军'], ans:'天敌'},
      {n:'2b', word:'', opts:['天敌','敌军'], ans:'敌军'},
      {n:'3a', word:'', opts:['个性','习性'], ans:'个性'},
      {n:'3b', word:'', opts:['个性','习性'], ans:'习性'},
      {n:'4a', word:'', opts:['释放','解释'], ans:'解释'},
      {n:'4b', word:'', opts:['释放','解释'], ans:'释放'}]}
  ]},
  {no:11, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'雨（  ）', opts:['李','季'], ans:'季'},
      {n:'1b', word:'行（  ）', opts:['李','季'], ans:'李'},
      {n:'2a', word:'（  ）害', opts:['访','妨'], ans:'妨'},
      {n:'2b', word:'（  ）问', opts:['访','妨'], ans:'访'},
      {n:'3a', word:'（  ）人', opts:['故','敌'], ans:'敌'},
      {n:'3b', word:'（  ）事', opts:['故','敌'], ans:'故'},
      {n:'4a', word:'山（  ）', opts:['峰','蜂'], ans:'峰'},
      {n:'4b', word:'蜜（  ）', opts:['峰','蜂'], ans:'蜂'}]},
    {id:'B', kind:'blank', bank:['性','沃','巡','压','毯','测'], items:[
      {n:1, ans:'性'},{n:2, ans:'沃'},{n:3, ans:'巡'},{n:4, ans:'压'},{n:5, ans:'毯'},{n:6, ans:'测'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'小草怎样形容自己？', opts:['A','B','C'], ans:'A'},
      {n:2, word:'只要一点儿（  ）雨露', opts:['灯光','阳光'], ans:'阳光'},
      {n:3, word:'小草（  ）的精神值得我们学习。', opts:['坚强','活泼'], ans:'坚强', text:true}]}
  ]},
  {no:12, sections:[
    {id:'A', kind:'blank', bank:['庙','米','少','肺','达'], items:[
      {n:1, pre:'玉 +', ans:'米'},{n:2, pre:'寺 +', ans:'庙'},{n:3, pre:'减 +', ans:'少'},
      {n:4, pre:'绿 +', ans:'肺'},{n:5, pre:'到 +', ans:'达'}]},
    {id:'B', kind:'blank', bank:['富有','泳池','仿佛','雄伟','预测'], items:[
      {n:1, ans:'预测'},{n:2, ans:'泳池'},{n:3, ans:'仿佛'},{n:4, ans:'富有'},{n:5, ans:'雄伟'}]},
    {id:'C', kind:'choice', items:[
      {n:'1a', word:'佛（寺）', opts:['fó','fú'], ans:'fó'},
      {n:'1b', word:'佛（经）', opts:['fó','fú'], ans:'fó'},
      {n:'1c', word:'仿佛', opts:['fó','fú'], ans:'fú'},
      {n:'2a', word:'隆（重）', opts:['lōng','lóng'], ans:'lóng'},
      {n:'2b', word:'兴隆', opts:['lōng','lóng'], ans:'lóng'},
      {n:'2c', word:'轰隆', opts:['lōng','lóng'], ans:'lōng'},
      {n:'3a', word:'横（祸）', opts:['héng','hèng'], ans:'hèng'},
      {n:'3b', word:'横（线）', opts:['héng','hèng'], ans:'héng'},
      {n:'3c', word:'横（越）', opts:['héng','hèng'], ans:'héng'}]}
  ]},
  {no:13, sections:[
    {id:'A', kind:'blank', bank:['瓦','责','矿','染','毒','票'], items:[
      {n:1, ans:'责'},{n:2, ans:'矿'},{n:3, ans:'瓦'},{n:4, ans:'票'},{n:5, ans:'染'},{n:6, ans:'毒'}]},
    {id:'B', kind:'free', items:[{n:1},{n:2},{n:3},{n:4}]}
  ]},
  {no:14, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['干粮','粗粮'], ans:'干粮'},
      {n:2, word:'', opts:['门票','钞票'], ans:'钞票'},
      {n:3, word:'', opts:['丝袜','鞋袜'], ans:'鞋袜'},
      {n:4, word:'', opts:['圣火','圣诞'], ans:'圣诞'},
      {n:5, word:'', opts:['蜡烛','蜡像'], ans:'蜡烛'},
      {n:6, word:'', opts:['蚊帐','帐篷'], ans:'帐篷'}]},
    {id:'B', kind:'free', items:[{n:1},{n:2},{n:3}]}
  ]},
  {no:15, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['A','B','C'], ans:'B'},
      {n:'2a', word:'小老鼠用尖尖的（  ）', opts:['爪子','牙齿'], ans:'牙齿'},
      {n:'2b', word:'（  ）网绳', opts:['扯断','咬断'], ans:'咬断'}]},
    {id:'B', kind:'free', items:[{n:3}]}
  ]},
  {no:16, sections:[
    {id:'A', kind:'free', items:[{n:1},{n:2},{n:3}]}
  ]},
  {no:17, sections:[
    {id:'A', kind:'blank', bank:['披','玉','斗','墨'], items:[{n:1, ans:'披'},{n:2, ans:'玉'},{n:3, ans:'斗'},{n:4, ans:'墨'}]}
  ]},
  {no:18, sections:[
    {id:'A', kind:'blank', bank:['经','良','重','楚','眼'], items:[{n:1, pre:'曾 +', ans:'经'},{n:2, pre:'优 +', ans:'良'},{n:3, pre:'贵 +', ans:'重'},{n:4, pre:'清 +', ans:'楚'},{n:5, pre:'耀 +', ans:'眼'}]}
  ]},
  {no:19, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'看着书', opts:['zháo','zhe'], ans:'zhe'},
      {n:2, word:'唱着歌', opts:['zháo','zhe'], ans:'zhe'},
      {n:3, word:'着急', opts:['zháo','zhe'], ans:'zháo'},
      {n:4, word:'睡着了', opts:['zháo','zhe'], ans:'zháo'}]}
  ]},
  {no:20, sections:[
    {id:'A', kind:'blank', bank:['亭','泳','颈','弓','柴'], items:[{n:1, ans:'亭'},{n:2, ans:'泳'},{n:3, ans:'颈'},{n:4, ans:'弓'},{n:5, ans:'柴'}]}
  ]}
];
