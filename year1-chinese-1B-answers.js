/* Answers for 华文 1B 课堂评估 (1-20), from the 参考答案 pages (PDF pages 37-38).
   kind: 'blank' = fill from a word bank | 'choice' = highlight boxes | 'text' = type the answer | 'free' = free answer | 'tick' = tick boxes | 'pdf' = use the PDF page (drawing, writing strokes, picture matching, maze).
   Items with opts show highlight boxes; items with bank or pre show drop boxes. */
const ANSWERS = [
  {no:1, sections:[
    {id:'A', kind:'blank', shuffle:true, bank:['名','马','荷','运','蛙','翅'], items:[
      {n:1, tpl:'{0}叶', slots:['荷'], ans:'荷'},{n:2, tpl:'{0}膀', slots:['翅'], ans:'翅'},
      {n:3, tpl:'海{0}', slots:['马'], ans:'马'},{n:4, tpl:'青{0}', slots:['蛙'], ans:'蛙'},
      {n:5, tpl:'第一{0}', slots:['名'], ans:'名'},{n:6, tpl:'{0}动会', slots:['运'], ans:'运'}]},
    {id:'B', kind:'blank', shuffle:true, bank:['海','忙','想','捉','膀','没'], items:[
      {n:1, pre:'氵 + 每 =', ans:'海'},{n:2, pre:'忄 + 亡 =', ans:'忙'},{n:3, pre:'相 + 心 =', ans:'想'},
      {n:4, pre:'扌 + 足 =', ans:'捉'},{n:5, pre:'月 + 旁 =', ans:'膀'},{n:6, pre:'氵 + 没 =', ans:'没'}]},
    {id:'C', kind:'tick', items:[
      {n:1, opts:['✓'], ans:[]},{n:2, opts:['✓'], ans:['✓']},{n:3, opts:['✓'], ans:['✓']},{n:4, opts:['✓'], ans:['✓']}]}
  ]},
  {no:2, sections:[
    {id:'A', kind:'blank', bank:['肚','洁','坏','找'], items:[
      {n:1, ans:'肚'},{n:2, ans:'洁'},{n:3, ans:'坏'},{n:4, ans:'找'}]},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'', opts:['毛','手'], ans:'毛'},
      {n:'1b', word:'', opts:['毛','手'], ans:'手'},
      {n:'2a', word:'', opts:['找','我'], ans:'找'},
      {n:'2b', word:'', opts:['找','我'], ans:'我'},
      {n:'3a', word:'', opts:['鹅','饿'], ans:'鹅'},
      {n:'3b', word:'', opts:['鹅','饿'], ans:'饿'}]}
  ]},
  {no:3, sections:[
    {id:'A', kind:'blank', bank:['小兔','雨伞','娃娃','纸盒'], items:[
      {n:1, pre:'', ans:'纸盒'},{n:2, pre:'', ans:'小兔'},
      {n:3, pre:'', ans:'娃娃'},{n:4, pre:'', ans:'雨伞'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['雨衣','雨伞'], ans:'雨伞'},
      {n:2, word:'', opts:['A','B','C'], ans:'B'}]},
    {id:'C', kind:'blank', bank:['一点儿也没被雨淋湿','身子全湿了'], items:[
      {n:'3a', pre:'(a) 熊宝宝 →', ans:'一点儿也没被雨淋湿'},{n:'3b', pre:'(b) 熊妈妈 →', ans:'身子全湿了'}]}
  ]},
  {no:4, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'玩（  ）', opts:['要','耍'], ans:'耍'},
      {n:2, word:'童（  ）', opts:['活','话'], ans:'话'},
      {n:3, word:'（  ）子', opts:['娃','鞋'], ans:'鞋'},
      {n:4, word:'护（  ）', opts:['士','土'], ans:'士'},
      {n:5, word:'蝴（  ）', opts:['蝶','碟'], ans:'蝶'}]},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'分（十分）', opts:['fēn','fèn'], ans:'fēn'},
      {n:'1b', word:'分（天分）', opts:['fēn','fèn'], ans:'fèn'},
      {n:'2a', word:'应（应该）', opts:['yīng','yìng'], ans:'yīng'},
      {n:'2b', word:'应（反应）', opts:['yīng','yìng'], ans:'yìng'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'一（  ）鸟', opts:['只','群'], ans:'只'},
      {n:2, word:'一（  ）花', opts:['朵','束'], ans:'朵'},
      {n:3, word:'一（  ）小船', opts:['只','群'], ans:'只'},
      {n:4, word:'一（  ）眼睛', opts:['只','双'], ans:'双'}]}
  ]},
  {no:5, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['珠子','气球'], ans:'气球'},
      {n:2, word:'', opts:['生气','高兴'], ans:'生气'},
      {n:3, word:'', opts:['点头','摇头'], ans:'摇头'},
      {n:4, word:'', opts:['生病','伤心'], ans:'生病'},
      {n:5, word:'', opts:['小羊','小鹿'], ans:'小鹿'},
      {n:6, word:'', opts:['鸟窝','蚂蚁窝'], ans:'鸟窝'}]},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'当（  ）场', opts:['dāng','dàng'], ans:'dāng'},
      {n:'1b', word:'当（  ）天', opts:['dāng','dàng'], ans:'dàng'},
      {n:'1c', word:'当（  ）然', opts:['dāng','dàng'], ans:'dàng'},
      {n:'2a', word:'牛角（  ）', opts:['jiǎo','jué'], ans:'jiǎo'},
      {n:'2b', word:'角（  ）色', opts:['jiǎo','jué'], ans:'jué'},
      {n:'2c', word:'三角（  ）形', opts:['jiǎo','jué'], ans:'jiǎo'}]},
    {id:'C', kind:'blank', items:[
      {n:1, pre:'“孩子，你真棒！” →', bank:['图1','图2','图3'], ans:'图3'},
      {n:2, pre:'“哥哥，你会生我的气吗？” →', bank:['图1','图2','图3'], ans:'图2'},
      {n:3, pre:'“天上的风筝飞得真高哇！” →', bank:['图1','图2','图3'], ans:'图1'}]}
  ]},
  {no:6, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'乌（  ）', opts:['龟','电'], ans:'龟'},
      {n:'1b', word:'（  ）灯', opts:['龟','电'], ans:'电'},
      {n:'2a', word:'天（  ）', opts:['气','汽'], ans:'气'},
      {n:'2b', word:'（  ）车', opts:['气','汽'], ans:'汽'},
      {n:'3a', word:'起（  ）', opts:['床','庆'], ans:'床'},
      {n:'3b', word:'（  ）祝', opts:['床','庆'], ans:'庆'},
      {n:'4a', word:'上（  ）', opts:['升','开'], ans:'升'},
      {n:'4b', word:'（  ）心', opts:['升','开'], ans:'开'},
      {n:'5a', word:'相（  ）', opts:['外','处'], ans:'处'},
      {n:'5b', word:'窗（  ）', opts:['外','处'], ans:'外'},
      {n:'6a', word:'大（  ）', opts:['火','灭'], ans:'火'},
      {n:'6b', word:'（  ）火', opts:['火','灭'], ans:'灭'}]},
    {id:'B', kind:'blank', bank:['指','关','哭','洗','踢'], items:[
      {n:1, pre:'墙上的时钟', ans:'指'},{n:2, pre:'记得', ans:'关'},
      {n:3, pre:'妹妹吓得', ans:'哭'},{n:4, pre:'在操场上', ans:'踢'},{n:5, pre:'刷牙', ans:'洗'}]},
    {id:'C', kind:'tick', items:[
      {n:1, opts:['指','扫','过','打','候'], ans:['指','扫','打']},
      {n:2, opts:['澡','道','怪','洗','汽'], ans:['澡','洗','汽']},
      {n:3, opts:['叫','踢','喊','钟','呢'], ans:['叫','喊','呢']}]}
  ]},
  {no:7, sections:[
    {id:'A', kind:'blank', bank:['跑','泡','抱','饱'], items:[
      {n:1, pre:'足 +包 =', ans:'跑'},{n:2, pre:'氵+包 =', ans:'泡'},
      {n:3, pre:'扌+包 =', ans:'抱'},{n:4, pre:'饣+包 =', ans:'饱'}]},
    {id:'B', kind:'free', items:[{n:1},{n:2},{n:3}]}
  ]},
  {no:8, sections:[
    {id:'A', kind:'blank', bank:['云朵','休息','等候','欢呼','追赶','兄弟'], items:[
      {n:1, ans:'兄弟'},{n:2, ans:'追赶'},{n:3, ans:'欢呼'},{n:4, ans:'等候'},{n:5, ans:'休息'},{n:6, ans:'云朵'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'', opts:['丽丽借我一把尺。','丽丽，请问你可以借我一把尺吗？'], ans:'丽丽，请问你可以借我一把尺吗？'},
      {n:2, word:'', opts:['老师解答这道数学题。','老师，请你教我们解答这道数学题。'], ans:'老师，请你教我们解答这道数学题。'},
      {n:3, word:'', opts:['爸爸带我们去游乐场玩儿。','爸爸，请带我们去游乐场玩儿。'], ans:'爸爸，请带我们去游乐场玩儿。'}]}
  ]},
  {no:9, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'（  ）期', opts:['日','目'], ans:'日'},
      {n:2, word:'（  ）地', opts:['土','士'], ans:'土'},
      {n:3, word:'（  ）天', opts:['今','令'], ans:'今'},
      {n:4, word:'（  ）田', opts:['衣','农'], ans:'农'},
      {n:5, word:'（  ）数', opts:['吹','次'], ans:'次'},
      {n:6, word:'（  ）米', opts:['稻','蹈'], ans:'稻'}]},
    {id:'B', kind:'choice', items:[
      {n:1, word:'每年的（  ）是我国的国庆。', opts:['8月30日','8月31日'], ans:'8月31日'},
      {n:2, kind:'tick', word:'哪项是国庆庆典仪式上的节目？（答案可以多过一个）', opts:['诗歌朗诵','唱歌表演','舞蹈表演','高声齐唱国歌、州歌和校歌'], ans:['诗歌朗诵','舞蹈表演','高声齐唱国歌、州歌和校歌']},
      {n:3, kind:'free', word:'读了这篇短文后，你想对马来西亚说什么？'}]}
  ]},
  {no:10, sections:[
    {id:'A', kind:'blank', bank:['天桥','热闹','害怕','排队','路灯','彩虹'], items:[
      {n:1, pre:'图1', ans:'天桥'},{n:2, pre:'图2', ans:'热闹'},{n:3, pre:'图3', ans:'害怕'},
      {n:4, pre:'图4', ans:'排队'},{n:5, pre:'图5', ans:'路灯'},{n:6, pre:'图6', ans:'彩虹'}]},
    {id:'B', kind:'blank', items:[
      {n:1, pre:'平 → 平', bank:['安','子','果'], ans:'安'},
      {n:2, pre:'让 → 让', bank:['且','座','而'], ans:'座'},
      {n:3, pre:'直 → 直', bank:['所','立','识'], ans:'立'},
      {n:4, pre:'班 → 班', bank:['发','长','马'], ans:'长'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'', opts:['不在','不再'], ans:'不在'},
      {n:2, word:'', opts:['不在','不再'], ans:'不在'},
      {n:3, word:'', opts:['不在','不再'], ans:'不再'},
      {n:4, word:'', opts:['不在','不再'], ans:'不再'},
      {n:5, word:'', opts:['不在','不再'], ans:'不再'}]}
  ]},
  {no:11, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'背（  ）后', opts:['bēi','bèi'], ans:'bēi'},
      {n:'1b', word:'背（  ）影', opts:['bēi','bèi'], ans:'bèi'},
      {n:'1c', word:'背（  ）书包', opts:['bēi','bèi'], ans:'bēi'},
      {n:'2a', word:'种（  ）花', opts:['zhǒng','zhòng'], ans:'zhǒng'},
      {n:'2b', word:'种（  ）子', opts:['zhǒng','zhòng'], ans:'zhòng'},
      {n:'2c', word:'种（  ）树', opts:['zhǒng','zhòng'], ans:'zhòng'},
      {n:'3a', word:'便（  ）条', opts:['biàn','pián'], ans:'biàn'},
      {n:'3b', word:'方便（  ）面', opts:['biàn','pián'], ans:'pián'},
      {n:'3c', word:'便（  ）宜的水果', opts:['biàn','pián'], ans:'pián'}]},
    {id:'B', kind:'free', items:[{n:1},{n:2}]}
  ]},
  {no:12, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'鸭子'},{n:2, ans:'浇水'},{n:3, ans:'尾巴'},{n:4, ans:'鼻子'},{n:5, ans:'收割'},{n:6, ans:'狮子'}]},
    {id:'B', kind:'blank', bank:['牛','正','办','奇','象','油'], items:[
      {n:1, ans:'象'},{n:2, ans:'牛'},{n:3, ans:'油'},{n:4, ans:'办'},{n:5, ans:'正'},{n:6, ans:'奇'}]}
  ]},
  {no:13, sections:[
    {id:'A', kind:'blank', bank:['尖','转','逃','鼠','嘴','告'], items:[
      {n:1, pre:'诉', ans:'告'},{n:2, pre:'角', ans:'尖'},{n:3, pre:'身', ans:'转'},
      {n:4, pre:'跑', ans:'逃'},{n:5, pre:'老', ans:'鼠'},{n:6, pre:'巴', ans:'嘴'}]},
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'为难', opts:['nán','nàn'], ans:'nán'},
      {n:'1b', word:'灾难', opts:['nán','nàn'], ans:'nàn'},
      {n:'2a', word:'转交', opts:['zhuǎn','zhuàn'], ans:'zhuǎn'},
      {n:'2b', word:'转圈', opts:['zhuǎn','zhuàn'], ans:'zhuàn'}]},
    {id:'C', kind:'blank', bank:['，','！','？'], items:[
      {n:1, tpl:'这条裙子真美丽啊{0}', slots:['！'], ans:'！'},
      {n:2, tpl:'早上{0}爸爸送我上学。', slots:['，'], ans:'，'},
      {n:3, tpl:'啊，今天真是太开心了{0}', slots:['！'], ans:'！'},
      {n:4, tpl:'那个盒子里有什么东西{0}', slots:['？'], ans:'？'},
      {n:5, tpl:'只有用功学习{0}我们的学业才会进步。', slots:['，'], ans:'，'}]}
  ]},
  {no:14, sections:[
    {id:'A', kind:'choice', cols:2, items:[
      {n:1, word:'（  ）果', opts:['平','苹'], ans:'苹'},
      {n:2, word:'公（  ）', opts:['鸟','鸡'], ans:'鸡'},
      {n:3, word:'（  ）断', opts:['折','拆'], ans:'折'},
      {n:4, word:'果（  ）', opts:['皮','坡'], ans:'皮'},
      {n:5, word:'（  ）伤', opts:['察','擦'], ans:'擦'},
      {n:6, word:'垃（  ）', opts:['及','圾'], ans:'圾'}]},
    {id:'B', kind:'blank', items:[
      {n:'1a', bank:['牛','午'], ans:'牛'},{n:'1b', bank:['牛','午'], ans:'午'},
      {n:'2a', bank:['白','百'], ans:'百'},{n:'2b', bank:['白','百'], ans:'白'},
      {n:'3a', bank:['去','丢'], ans:'丢'},{n:'3b', bank:['去','丢'], ans:'去'}]}
  ]},
  {no:15, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['A 飞来飞去','B 到处找水喝','C 停在树上休息'], ans:'B 到处找水喝'},
      {n:'2a', word:'', opts:['沙子','小石子'], ans:'小石子'},
      {n:'2b', word:'', opts:['升高','流出'], ans:'升高'}]},
    {id:'B', kind:'free', items:[{n:3}]}
  ]},
  {no:16, sections:[
    {id:'A', kind:'free', items:[{n:1}]}
  ]},
  {no:17, sections:[
    {id:'A', kind:'text', items:[{n:1, ans:'球'},{n:2, ans:'别'},{n:3, ans:'次'},{n:4, ans:'活'},{n:5, ans:'昨'}]}
  ]},
  {no:18, sections:[
    {id:'A', kind:'blank', bank:['题','期','盒','易'], items:[
      {n:1, pre:'星 +', ans:'期'},{n:2, pre:'容 +', ans:'易'},{n:3, pre:'问 +', ans:'题'},{n:4, pre:'纸 +', ans:'盒'}]}
  ]},
  {no:19, sections:[
    {id:'A', kind:'blank', bank:['眉','羽','报','猴'], items:[
      {n:1, ans:'猴'},{n:2, ans:'报'},{n:3, ans:'眉'},{n:4, ans:'羽'}]}
  ]},
  {no:20, sections:[
    {id:'A', kind:'blank', bank:['大扫除','扫帚','行为','为什么'], items:[
      {n:1, ans:'大扫除'},{n:2, ans:'扫帚'},{n:3, ans:'行为'},{n:4, ans:'为什么'}]}
  ]}
];
