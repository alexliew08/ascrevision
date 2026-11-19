/* Answers for Year 2 Science unit assessment (二年级科学单元评估), book pages 2-44.
   Source: answer key (book pages 51-54 of the PDF, 参考答案), checked against the answer boxes in the old year2-science.html.
   Sheet numbers follow the sidebar: Sheet 1 = book page 2, so sheet n = book page n+1.
   kind: choice = highlight boxes (pick one). blank = drop boxes (drag a word from the bank into a box).
         text = typed answer. free:true = typed, not scored (open questions for the teacher).
   Pages 2 (drawing part), 15, 16 (joining lines) and 25, 26, 33 (table) are picture-only where noted. */
const ANSWERS = [
  {no:2, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'', multi:true, opts:['饱满','萎缩','脆','软','表面有水分','表面没有水分','咸','淡'], ans:['饱满','脆','表面没有水分','淡']},
      {n:'1b', word:'', multi:true, opts:['饱满','萎缩','脆','软','表面有水分','表面没有水分','咸','淡'], ans:['萎缩','软','表面有水分','咸']},
      {n:2, word:'', multi:true, opts:['眼睛','鼻子','舌头','耳朵','手掌'], ans:['眼睛','舌头']},
      {n:3, word:'', multi:true, opts:['视觉','嗅觉','味觉','听觉','触觉'], ans:['视觉','味觉']}]},
    {id:'A', kind:'text', noHead:true, items:[{n:4, free:true, ans:['']}]}
  ]},
  {no:3, sections:[
    {id:'B', kind:'blank', bank:['a','b','c','d','e','f','g','h','i','j','k','l'], uncertain:true, items:[
      {n:1, tpl:'两只脚：{0}　{1}　{2}　{3}　{4}　{5}', slots:['b','e','f','g','i','l']},
      {n:2, tpl:'四只脚：{0}　{1}　{2}　{3}　{4}　{5}', slots:['a','c','d','h','j','k']}]}
  ]},
  {no:4, sections:[
    {id:'C', kind:'blank', bank:['测量长度','测量时间','测量质量','测量液体体积'], items:[
      {n:1, ans:'测量长度'},{n:2, ans:'测量时间'},{n:3, ans:'测量质量'},{n:4, ans:'测量液体体积'}]}
  ]},
  {no:5, sections:[
    {id:'D', kind:'blank', bank:['书写','绘图','信息与通信技术','口述'], items:[
      {n:1, ans:'书写'},{n:2, ans:'绘图'},{n:3, ans:'信息与通信技术'},{n:4, ans:'口述'}]}
  ]},
  {no:6, sections:[
    {id:'E', kind:'blank', bank:['P','Q','R','S','T'], items:[
      {n:1, ans:'P'},{n:2, ans:'R'},{n:3, ans:'T'},{n:4, ans:'Q'},{n:5, ans:'S'}]}
  ]},
  {no:7, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['√','×'], ans:'√'},{n:2, word:'', opts:['√','×'], ans:'×'},
      {n:3, word:'', opts:['√','×'], ans:'×'},{n:4, word:'', opts:['√','×'], ans:'√'},
      {n:5, word:'', opts:['√','×'], ans:'√'},{n:6, word:'', opts:['√','×'], ans:'×'},
      {n:7, word:'', opts:['√','×'], ans:'×'},{n:8, word:'', opts:['√','×'], ans:'√'}]},
    {id:'B', kind:'text', items:[{n:1, free:true, ans:['']}]}
  ]},
  {no:8, sections:[
    {id:'A', kind:'blank', bank:['胎生','胎儿','九'], items:[
      {n:1, ans:'胎生'},{n:2, ans:'胎儿'},{n:3, ans:'九'}]},
    {id:'B', kind:'blank', bank:['身高','体型','体重'], items:[
      {n:1, ans:'身高'},{n:2, ans:'体型'},{n:3, ans:'体重'}]}
  ]},
  {no:9, sections:[
    {id:'C1', kind:'blank', bank:['23','25'], items:[{n:1, tpl:'{0}，{1}', slots:['23','25']}]},
    {id:'C2', kind:'blank', bank:['29','27'], items:[{n:2, tpl:'{0}，{1}', slots:['29','27']}]},
    {id:'C3', kind:'blank', bank:['小美','子杰'], items:[{n:3, tpl:'{0}，{1}', slots:['小美','子杰']}]},
    {id:'C4', kind:'blank', bank:['小美','小欣','乐乐','子杰'], items:[{n:4, tpl:'{0} > {1} > {2} > {3}', slots:['小美','小欣','乐乐','子杰']}]},
    {id:'C5', kind:'blank', bank:['相同','成长'], items:[{n:5, tpl:'{0}，{1}', slots:['相同','成长']}]}
  ]},
  {no:10, sections:[
    {id:'D', kind:'blank', bank:['爸爸','妈妈和外婆','舅母'], items:[
      {n:1, ans:'爸爸'},{n:2, ans:'妈妈和外婆'},{n:3, ans:'舅母'},{n:4, ans:'爸爸'}]}
  ]},
  {no:11, sections:[
    {id:'A', kind:'blank', bank:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'], items:[
      {n:1, tpl:'胎生：{0}　{1}　{2}　{3}　{4}　{5}　{6}　{7}', slots:['a','b','f','g','h','l','m','p']},
      {n:2, tpl:'卵生：{0}　{1}　{2}　{3}　{4}　{5}　{6}　{7}', slots:['c','d','e','i','j','k','n','o']}]}
  ]},
  {no:12, sections:[
    {id:'B', kind:'blank', bank:['A','B','C','D','E','F','G','H','I','J'], items:[
      {n:'c1', tpl:'产卵多：{0}　{1}　{2}　{3}　{4}', slots:['A','C','E','F','J']},
      {n:'c2', tpl:'产卵少：{0}　{1}　{2}　{3}　{4}', slots:['B','D','G','H','I']}]}
  ]},
  {no:13, sections:[
    {id:'D', kind:'blank', bank:['M','N','O','P','Q','R','S','T','U','V'], items:[
      {n:1, tpl:'产下幼儿多：{0}　{1}　{2}　{3}　{4}', slots:['M','N','Q','S','V']},
      {n:2, tpl:'产下幼儿少：{0}　{1}　{2}　{3}　{4}', slots:['O','P','R','T','U']}]}
  ]},
  {no:14, sections:[
    {id:'F1', kind:'blank', bank:['P','Q','R','S','T'], items:[
      {n:1, tpl:'{0}、{1}、{2}、{3}、{4}', slots:['R','S','Q','P','T']}]},
    {id:'F2', kind:'blank', bank:['P','Q','R','S'], items:[
      {n:2, tpl:'{0}、{1}、{2}、{3}', slots:['Q','R','S','P']}]},
    {id:'F3', kind:'blank', bank:['P','Q','R','S','T'], items:[
      {n:3, tpl:'{0}、{1}、{2}、{3}、{4}', slots:['R','P','S','T','Q']}]},
    {id:'F4', kind:'blank', bank:['P','Q','R'], items:[
      {n:4, tpl:'{0}、{1}、{2}', slots:['Q','P','R']}]}
  ]},
  {no:15, sections:[
    {id:'A', kind:'blank', bank:['p15A','p15B','p15C','p15D','p15E'], items:[
      {n:1, ans:'p15E'},{n:2, ans:'p15D'},{n:3, ans:'p15B'},{n:4, ans:'p15C'},{n:5, ans:'p15A'}]},
    {id:'B', kind:'text', items:[{n:6, ans:['相似']}]}
  ]},
  {no:16, sections:[
    {id:'A', kind:'blank', bank:['p16A','p16B','p16C','p16D','p16E'], items:[
      {n:1, ans:'p16C'},{n:2, ans:'p16A'},{n:3, ans:'p16B'},{n:4, ans:'p16E'},{n:5, ans:'p16D'}]},
    {id:'B', kind:'text', items:[{n:6, ans:['不相似']}]}
  ]},
  {no:17, sections:[
    {id:'A', kind:'blank', bank:['动物的庇护所','食物的来源','提供氧气','草药的来源'], items:[
      {n:1, ans:'动物的庇护所'},{n:2, ans:'食物的来源'},{n:3, ans:'提供氧气'},{n:4, ans:'草药的来源'}]}
  ]},
  {no:18, sections:[
    {id:'B', kind:'blank', bank:['水','空气','适中的温度'], items:[
      {n:1, ans:'水'},{n:2, ans:'空气'},{n:3, ans:'适中的温度'}]},
    {id:'C', kind:'choice', items:[
      {n:1, word:'', opts:['√','×'], ans:'×'},{n:2, word:'', opts:['√','×'], ans:'√'},{n:3, word:'', opts:['√','×'], ans:'√'},
      {n:4, word:'', opts:['√','×'], ans:'×'},{n:5, word:'', opts:['√','×'], ans:'×'},{n:6, word:'', opts:['√','×'], ans:'×'}]}
  ]},
  {no:19, sections:[
    {id:'D', kind:'text', table:{
        head:['植物成长的天数','植物的高度/cm','叶子数量/片','叶子的大小/cm','茎的圆周/cm'],
        rows:[
          ['第一天', {n:1,j:0}, {n:1,j:1}, '-', '-'],
          ['第三天', {n:2,j:0}, {n:2,j:1}, '0.3', '0.2'],
          ['第六天', {n:3,j:0}, {n:3,j:1}, '0.5', '0.4'],
          ['第九天', {n:4,j:0}, {n:4,j:1}, '0.7', '0.6'],
          ['第十二天', {n:5,j:0}, {n:5,j:1}, '1.0', '0.9'],
          ['第十五天', {n:6,j:0}, {n:6,j:1}, '1.5', '1.2'],
          ['第十八天', {n:7,j:0}, {n:7,j:1}, '1.8', '1.5']]},
      items:[
      {n:1, ans:['0','0']},{n:2, ans:['0.4','1']},{n:3, ans:['0.7','1']},{n:4, ans:['1.2','1']},
      {n:5, ans:['2.2','1']},{n:6, ans:['2.9','4']},{n:7, ans:['3.1','5']}]},
    {id:'D', kind:'text', noHead:true, items:[{n:'2', tpl:'{0}', ans:['增加'], w:30}]}
  ]},
  {no:20, sections:[
    {id:'E', kind:'blank', bank:['1','2','3','4','5','6'], items:[
      {n:'a', ans:'3'},{n:'b', ans:'2'},{n:'c', ans:'4'},{n:'d', ans:'6'},{n:'e', ans:'1'},{n:'f', ans:'5'}]},
    {id:'F', kind:'blank', bank:['种子','发芽','幼苗','开花','结果'], items:[
      {n:1, tpl:'{0} → {1} → {2}', slots:['种子','发芽','幼苗']},
      {n:' ', nolabel:true, tpl:'　　　　　　　　　　　　　　↙', slots:[]},
      {n:2, nolabel:true, tpl:'　　　　{0}　←　{1}', slots:['结果','开花']}]}
  ]},
  {no:21, sections:[
    {id:'G', kind:'cards', cards:[
      {label:'1.', tick:1, h:'h1', o:'o1'},{label:'2.', tick:2, h:'h2', o:'o2'},{label:'3.', tick:3, h:'h3', o:'o3'},
      {label:'4.', tick:4, h:'h4', o:'o4'},{label:'5.', tick:5, h:'h5', o:'o5'},{label:'6.', tick:6, h:'h6', o:'o6'}], items:[
      {n:1, word:'', opts:['√','×'], ans:'√'},{n:2, word:'', opts:['√','×'], ans:'√'},{n:3, word:'', opts:['√','×'], ans:'×'},
      {n:4, word:'', opts:['√','×'], ans:'×'},{n:5, word:'', opts:['√','×'], ans:'×'},{n:6, word:'', opts:['√','×'], ans:'√'},
      {n:'h1', word:'', opts:['获取','缺乏'], ans:'获取'},{n:'h2', word:'', opts:['获取','缺乏'], ans:'获取'},
      {n:'h3', word:'', opts:['获取','缺乏'], ans:'缺乏'},{n:'h4', word:'', opts:['获取','缺乏'], ans:'缺乏'},
      {n:'h5', word:'', opts:['获取','缺乏'], ans:'缺乏'},{n:'h6', word:'', opts:['获取','没有获取'], ans:'获取'},
      {n:'o1', word:'', opts:['阳光','水','空气','养料'], ans:'阳光'},{n:'o2', word:'', opts:['阳光','水','空气','养料'], ans:'水'},
      {n:'o3', word:'', opts:['阳光','水','空气','养料'], ans:'水'},{n:'o4', word:'', opts:['阳光','水','空气','养料'], ans:'空气'},
      {n:'o5', word:'', opts:['阳光','水','空气','养料'], ans:'阳光'},{n:'o6', word:'', opts:['阳光','水','空气','养料'], ans:'养料'}]}
  ]},
  {no:22, sections:[
    {id:'A', kind:'blank', bank:['手电筒','炉火','煤油灯','灯泡','烛火','路灯'], items:[
      {n:1, ans:'手电筒'},{n:2, ans:'炉火'},{n:3, ans:'煤油灯'},{n:4, ans:'灯泡'},{n:5, ans:'烛火'},{n:6, ans:'路灯'}]}
  ]},
  {no:23, sections:[
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'', opts:['清楚','不清楚'], ans:'不清楚'},{n:'1b', word:'', opts:['清楚','不清楚'], ans:'清楚'},
      {n:'2a', word:'', opts:['清楚','不清楚'], ans:'清楚'},{n:'2b', word:'', opts:['清楚','不清楚'], ans:'不清楚'},
      {n:'3a', word:'', opts:['清楚','不清楚'], ans:'不清楚'},{n:'3b', word:'', opts:['清楚','不清楚'], ans:'清楚'}]}
  ]},
  {no:24, sections:[
    {id:'C', kind:'choice', items:[
      {n:'A', word:'', opts:['有','没有'], ans:'没有'},{n:'B', word:'', opts:['有','没有'], ans:'没有'},
      {n:'C', word:'', opts:['有','没有'], ans:'有'},{n:'D', word:'', opts:['有','没有'], ans:'没有'}]},
    {id:'D', kind:'choice', items:[
      {n:2, word:'', opts:['有','没有'], ans:'有'}]},
    {id:'E', kind:'text', items:[{n:3, ans:['影子']}]}
  ]},
  {no:25, sections:[
    {id:'D', kind:'blank', bank:['没有影子','清晰的影子','模糊的影子'], items:[
      {n:1, ans:'没有影子'},{n:2, ans:'模糊的影子'},{n:3, ans:'清晰的影子'}]},
    {id:'E', kind:'choice', tick:{cols:['√','×'], rows:['1','2','3','4','5','6'], perRow:1}, items:[
      {n:1, word:'', opts:['√','×'], ans:'×'},{n:2, word:'', opts:['√','×'], ans:'√'},{n:3, word:'', opts:['√','×'], ans:'×'},
      {n:4, word:'', opts:['√','×'], ans:'√'},{n:5, word:'', opts:['√','×'], ans:'×'},{n:6, word:'', opts:['√','×'], ans:'√'}]}
  ]},
  {no:26, sections:[
    {id:'F', kind:'blank', bank:['p26A','p26B','p26C','p26D','p26E'], items:[
      {n:1, ans:'p26E'},{n:2, ans:'p26A'},{n:3, ans:'p26B'},{n:4, ans:'p26C'},{n:5, ans:'p26D'}]}
  ]},
  {no:27, sections:[
    {id:'A', kind:'blank', bank:['干电池','开关','灯泡','正极','负极'], items:[
      {n:1, ans:'干电池'},{n:2, ans:'开关'},{n:3, ans:'灯泡'},{n:'4a', ans:'正极'},{n:'4b', ans:'负极'}]},
    {id:'B', kind:'blank', bank:['提供电流','发出光亮','接通或截断电路'], items:[
      {n:1, ans:'提供电流'},{n:2, ans:'发出光亮'},{n:3, ans:'接通或截断电路'}]}
  ]},
  {no:28, sections:[
    {id:'C', kind:'cards', cards:[
      {label:'1.', tick:1, reason:['当（', {k:3}, '）开关时，电路（', {k:4}, '）被接通，灯泡（', {k:5}, '）发亮。']},
      {label:'2.', tick:2, reason:['当（', {k:6}, '）开关时，电路（', {k:7}, '）被接通，灯泡（', {k:8}, '）发亮。']}], items:[
      {n:1, word:'', opts:['√','×'], ans:'√'},{n:2, word:'', opts:['√','×'], ans:'×'},
      {n:3, word:'', opts:['按下','拉上'], ans:'按下'},{n:4, word:'', opts:['会','不会'], ans:'会'},{n:5, word:'', opts:['会','不会'], ans:'会'},
      {n:6, word:'', opts:['按下','拉上'], ans:'拉上'},{n:7, word:'', opts:['会','不会'], ans:'不会'},{n:8, word:'', opts:['会','不会'], ans:'不会'}]}
  ]},
  {no:29, sections:[
    {id:'E', kind:'blank', bank:['连接','灯丝','没有按下','错误'], items:[
      {n:1, ans:'连接'},{n:2, ans:'灯丝'},{n:3, ans:'没有按下'},{n:4, ans:'错误'}]}
  ]},
  {no:30, sections:[
    {id:'F', kind:'text', bank:['会发亮','不会发亮','√'], table:{
        head:['物体','灯泡的情况','能让电流通过 √','不能让电流通过 √'],
        rows:[
          [{img:'t30_1'}, {drop:1,j:0}, {drop:1,j:1,ph:'☐'}, {drop:1,j:2,ph:'☐'}],
          [{img:'t30_2'}, {drop:2,j:0}, {drop:2,j:1,ph:'☐'}, {drop:2,j:2,ph:'☐'}],
          [{img:'t30_3'}, {drop:3,j:0}, {drop:3,j:1,ph:'☐'}, {drop:3,j:2,ph:'☐'}],
          [{img:'t30_4'}, {drop:4,j:0}, {drop:4,j:1,ph:'☐'}, {drop:4,j:2,ph:'☐'}],
          [{img:'t30_5'}, {drop:5,j:0}, {drop:5,j:1,ph:'☐'}, {drop:5,j:2,ph:'☐'}],
          [{img:'t30_6'}, {drop:6,j:0}, {drop:6,j:1,ph:'☐'}, {drop:6,j:2,ph:'☐'}]]},
      items:[
        {n:1, ans:['不会发亮','','√']},{n:2, ans:['会发亮','√','']},{n:3, ans:['不会发亮','','√']},
        {n:4, ans:['会发亮','√','']},{n:5, ans:['不会发亮','','√']},{n:6, ans:['会发亮','√','']}]},
  ]},
  {no:31, sections:[
    {id:'H', kind:'blank', bank:['g31_1','g31_2','g31_3','g31_4','g31_5','g31_6','g31_7','g31_8','g31_9','g31_10','g31_11','g31_12'], items:[
      {n:1, tpl:'电导体：{0}　{1}　{2}　{3}　{4}　{5}', slots:['g31_1','g31_5','g31_6','g31_7','g31_11','g31_12']},
      {n:2, tpl:'电的绝缘体：{0}　{1}　{2}　{3}　{4}　{5}', slots:['g31_2','g31_3','g31_4','g31_8','g31_9','g31_10']}]},
    {id:'I', kind:'blank', bank:['通路','断路'], uncertain:true, items:[
      {n:'a', ans:'通路'},{n:'b', ans:'断路'}]}
  ]},
  {no:32, sections:[
    {id:'A', kind:'blank', bank:['P','Q','R','S','T','U'], items:[
      {n:1, ans:'S'},{n:2, ans:'R'},{n:3, ans:'Q'},{n:4, ans:'U'},{n:5, ans:'P'},{n:6, ans:'T'}]}
  ]},
  {no:33, sections:[
    {id:'A', kind:'pdf'},
    {id:'B', kind:'blank', bank:['用磁铁','磁性物质','磁铁','用手','筛子','漂浮法'], items:[
      {n:'a', ans:'用磁铁'},{n:'b', ans:'磁性物质'},{n:'c', ans:'磁铁'},{n:'d', ans:'用手'},{n:'e', ans:'筛子'},{n:'f', ans:'漂浮法'}]}
  ]},
  {no:34, sections:[
    {id:'C', kind:'choice', items:[
      {n:1, word:'蜂蜜', opts:['蓝','红'], ans:'蓝'},{n:2, word:'糖', opts:['蓝','红'], ans:'蓝'},
      {n:3, word:'咖喱粉', opts:['蓝','红'], ans:'红'},{n:4, word:'奶粉', opts:['蓝','红'], ans:'蓝'},
      {n:5, word:'茶叶', opts:['蓝','红'], ans:'红'},{n:6, word:'食油', opts:['蓝','红'], ans:'红'},
      {n:7, word:'盐', opts:['蓝','红'], ans:'蓝'},{n:8, word:'绿豆', opts:['蓝','红'], ans:'红'},
      {n:9, word:'洗衣粉', opts:['蓝','红'], ans:'蓝'}]}
  ]},
  {no:35, sections:[
    {id:'D', kind:'choice', items:[
      {n:1, word:'', opts:['一小部分','大部分'], ans:'大部分'},
      {n:2, word:'', opts:['一小部分','大部分'], ans:'一小部分'},
      {n:3, word:'', opts:['会加快','不会加快'], ans:'会加快'},
      {n:4, word:'', opts:['一小部分','大部分'], ans:'一小部分'},
      {n:5, word:'', opts:['一小部分','大部分'], ans:'大部分'},
      {n:'6a', word:'', opts:['会','不会'], ans:'会'},
      {n:'6b', word:'', opts:['快','慢'], ans:'快'},
      {n:'6c', word:'', opts:['快','慢'], ans:'慢'}]}
  ]},
  {no:36, sections:[
    {id:'E', kind:'choice', items:[
      {n:1, word:'', opts:['一小部分','大部分'], ans:'一小部分'},
      {n:2, word:'', opts:['一小部分','大部分'], ans:'大部分'},
      {n:'3a', word:'', opts:['快','慢'], ans:'慢'},
      {n:'3b', word:'', opts:['快','慢'], ans:'快'},
      {n:4, word:'', opts:['最多','一些','最少'], ans:'最多'},
      {n:5, word:'', opts:['最多','一些','最少'], ans:'一些'},
      {n:6, word:'', opts:['最多','一些','最少'], ans:'最少'},
      {n:'7a', word:'', opts:['快','慢'], ans:'快'},
      {n:'7b', word:'', opts:['快','慢'], ans:'慢'}]}
  ]},
  {no:37, sections:[
    {id:'A', kind:'blank', bank:['湖泊','泉眼','河流','雨','海'], items:[
      {n:1, ans:'湖泊'},{n:2, ans:'泉眼'},{n:3, ans:'河流'},{n:4, ans:'雨'},{n:5, ans:'海'}]},
    {id:'B', kind:'text', items:[{n:1, free:true, ans:['']}]}
  ]},
  {no:38, sections:[
    {id:'C', kind:'blank', bank:['高处','低处'], items:[
      {n:1, ans:'高处'},{n:2, ans:'低处'},{n:3, ans:'高处'},{n:4, ans:'低处'}]},
    {id:'D', kind:'blank', bank:['P','Q','R','S','T'], items:[
      {n:1, ans:'S'},{n:2, ans:'T'},{n:3, ans:'Q'},{n:4, ans:'P'},{n:5, ans:'R'}]}
  ]},
  {no:39, sections:[
    {id:'E', kind:'blank', bank:['空气','缝隙','气体','呼吸','氧气','二氧化碳','看不见','流动'], items:[
      {n:1, ans:'空气'},{n:2, ans:'缝隙'},{n:3, ans:'气体'},{n:4, ans:'呼吸'},{n:5, ans:'氧气'},
      {n:6, ans:'二氧化碳'},{n:7, ans:'看不见'},{n:8, ans:'流动'},{n:9, ans:'流动'}]}
  ]},
  {no:40, sections:[
    {id:'F', kind:'blank', bank:['利用风力发电','使人觉得凉爽','吹干衣服','龙卷风摧毁房屋','掀起大浪吹翻船只','吹倒树木阻碍交通'], items:[
      {n:1, ans:'利用风力发电'},{n:2, ans:'使人觉得凉爽'},{n:3, ans:'吹干衣服'},
      {n:4, ans:'龙卷风摧毁房屋'},{n:5, ans:'掀起大浪吹翻船只'},{n:6, ans:'吹倒树木阻碍交通'}]}
  ]},
  {no:41, sections:[
    {id:'G', kind:'blank', bank:['M','N','O','P','Q','R'], items:[
      {n:1, ans:'N'},{n:2, ans:'O'},{n:3, ans:'P'},{n:4, ans:'Q'},{n:5, ans:'M'},{n:6, ans:'R'}]}
  ]},
  {no:42, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['√','×'], ans:'×'},{n:2, word:'', opts:['√','×'], ans:'×'},{n:3, word:'', opts:['√','×'], ans:'√'}]},
    {id:'B', kind:'blank', bank:['1','2','25','29'], items:[
      {n:1, ans:'2'},{n:2, ans:'1'},{n:3, ans:'2'},{n:4, ans:'2'},{n:5, ans:'29'},{n:6, ans:'1'},{n:7, ans:'25'},{n:8, ans:'2'}]}
  ]},
  {no:43, sections:[
    {id:'C', kind:'blank', bank:['M','N','O','P','Q'], items:[
      {n:1, ans:'N'},{n:2, ans:'M'},{n:3, ans:'P'},{n:4, ans:'Q'},{n:5, ans:'O'}]},
    {id:'D', kind:'blank', bank:['M','N','O','P','Q'], items:[
      {n:1, tpl:'{0}　→　{1}　→　{2}　→　{3}　→　{4}', slots:['O','M','P','N','Q']}]}
  ]},
  {no:44, sections:[
    {id:'E', kind:'blank', bank:['1','2','3','4'], items:[
      {n:'a', ans:'4'},{n:'b', ans:'2'},{n:'c', ans:'1'},{n:'d', ans:'3'}]},
    {id:'F', kind:'blank', bank:['1','2','3','4','5','6','7','8'], items:[
      {n:1, ans:'3'},{n:2, ans:'1'},{n:3, ans:'4'},{n:4, ans:'2'},{n:5, ans:'5'},{n:6, ans:'8'},{n:7, ans:'6'},{n:8, ans:'7'}]}
  ]}
];

/* Labels placed on the scanned page images (x, y = percent from the top-left of the page). Keys are book page numbers. */
const PAGE_LABELS = {
  /* sheet 24 (book page 25): part D pictures */
  '25': [{t:'A', x:12.7, y:17.6},{t:'B', x:12.5, y:30.8},{t:'C', x:12.5, y:43.9}],
  /* sheet 25 (book page 26): part F pictures */
  '26': [{t:'A', x:11.6, y:18.3},{t:'B', x:11.6, y:31.8},{t:'C', x:11.6, y:45.0},{t:'D', x:11.6, y:58.2},{t:'E', x:11.6, y:71.6}],
  /* sheet 26 (book page 27): part B pictures */
  '27': [{t:'A', x:11.9, y:55.9},{t:'B', x:11.9, y:66.6},{t:'C', x:11.9, y:77.2}]
};
