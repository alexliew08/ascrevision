/* Answers for Year 1 Science unit assessment (一年级科学单元评估), book pages 2-41.
   Source: answer boxes in year1-science.html (checked against the answer key, book pages 42-44).
   Sheet no = book page number. Items are numbered 1, 2, 3... in order on each page.
   kind: choice = highlight boxes (pick one). blank = drop boxes (drag a word from the page bank into a box).
         text with free:true = typed, not scored (open questions for the teacher).
   Pages 2, 15, 37 and 39 are picture-only (drawing, joining, colouring): no score. */
const ANSWERS = [
  {no:2, sections:[
    {id:'A', kind:'blank', bank:['听','看','摸','尝','嗅'], items:[
      {n:1, pre:'眼睛', ans:'看'}, {n:2, pre:'鼻子', ans:'嗅'}, {n:3, pre:'舌头', ans:'尝'}, {n:4, pre:'耳朵', ans:'听'}, {n:5, pre:'皮肤', ans:'摸'}
    ]}
  ]},
  {no:3, sections:[
    {id:'B', kind:'blank', bank:['视觉','听觉','触觉','嗅觉','味觉'], items:[
      {n:1, ans:'视觉'}, {n:2, ans:'听觉'}, {n:3, ans:'味觉'}, {n:4, ans:'嗅觉'}, {n:5, ans:'触觉'}
    ]},
    {id:'C', kind:'grid', cols:['感觉器官','功能','官能'], bank:['耳朵','鼻子','皮肤','眼睛','舌头','听','嗅','尝','摸','看','听觉','嗅觉','味觉','触觉','视觉'],
     rows:[
      [{n:6, ans:'耳朵'}, '听', {n:7, ans:'听觉'}],
      [{n:8, ans:'鼻子'}, {n:9, ans:'嗅'}, '嗅觉'],
      ['舌头', {n:10, ans:'尝'}, {n:11, ans:'味觉'}],
      [{n:12, ans:'皮肤'}, '摸', {n:13, ans:'触觉'}],
      [{n:14, ans:'眼睛'}, {n:15, ans:'看'}, '视觉']
     ],
     items:[{n:6,ans:'耳朵'},{n:7,ans:'听觉'},{n:8,ans:'鼻子'},{n:9,ans:'嗅'},{n:10,ans:'尝'},{n:11,ans:'味觉'},{n:12,ans:'皮肤'},{n:13,ans:'触觉'},{n:14,ans:'眼睛'},{n:15,ans:'看'}]}
  ]},
  {no:4, sections:[
    {id:'A', kind:'blank', bank:['信息与通信技术','书写','绘图','口述'], items:[
      {n:1, ans:'信息与通信技术'}, {n:2, ans:'书写'}, {n:3, ans:'绘图'}, {n:4, ans:'口述'}
    ]}
  ]},
  {no:5, sections:[
    {id:'E', kind:'grid', cols:['观察事项','官能','观察结果'], bank:['视觉','触觉','味觉','嗅觉','绿色果皮','有尖刺','果肉香甜','浓烈的香气'],
     rows:[
      ['1. 榴梿的果皮颜色', {n:1, ans:'视觉'}, {n:2, ans:'绿色果皮'}],
      ['2. 榴梿的外壳', {n:3, ans:'触觉'}, {n:4, ans:'有尖刺'}],
      ['3. 榴梿的果肉', {n:5, ans:'味觉'}, {n:6, ans:'果肉香甜'}],
      ['4. 榴梿的气味', {n:7, ans:'嗅觉'}, {n:8, ans:'浓烈的香气'}]
     ],
     items:[{n:1,ans:'视觉'},{n:2,ans:'绿色果皮'},{n:3,ans:'触觉'},{n:4,ans:'有尖刺'},{n:5,ans:'味觉'},{n:6,ans:'果肉香甜'},{n:7,ans:'嗅觉'},{n:8,ans:'浓烈的香气'}]}
  ]},
  {no:6, sections:[
    {id:'B', kind:'blank', bank:["P","Q","R","S","T"], items:[{n:1, ans:"R"},
      {n:2, ans:"P"},
      {n:3, ans:"R"},
      {n:4, ans:"T"},
      {n:5, ans:"S"},
      {n:6, ans:"Q"}]}]},
  {no:7, sections:[
    {id:'A', kind:'choice', items:[{n:1, word:"", opts:["√","×"], ans:"√"},
      {n:2, word:"", opts:["√","×"], ans:"×"},
      {n:3, word:"", opts:["√","×"], ans:"×"},
      {n:4, word:"", opts:["√","×"], ans:"×"},
      {n:5, word:"", opts:["√","×"], ans:"√"},
      {n:6, word:"", opts:["√","×"], ans:"√"},
      {n:7, word:"", opts:["√","×"], ans:"×"},
      {n:8, word:"", opts:["√","×"], ans:"√"}]}]},
  {no:8, sections:[
    {id:'A', kind:'choice', items:[{n:1, word:'', opts:['√','×'], ans:'×'}, {n:2, word:'', opts:['√','×'], ans:'×'}, {n:3, word:'', opts:['√','×'], ans:'√'}, {n:4, word:'', opts:['√','×'], ans:'×'}, {n:5, word:'', opts:['√','×'], ans:'√'}, {n:6, word:'', opts:['√','×'], ans:'×'}, {n:7, word:'', opts:['√','×'], ans:'√'}, {n:8, word:'', opts:['√','×'], ans:'×'}, {n:9, word:'', opts:['√','×'], ans:'×'}, {n:10, word:'', opts:['√','×'], ans:'×'}, {n:11, word:'', opts:['√','×'], ans:'√'}, {n:12, word:'', opts:['√','×'], ans:'√'}, {n:13, word:'', opts:['√','×'], ans:'√'}, {n:14, word:'', opts:['√','×'], ans:'×'}, {n:15, word:'', opts:['√','×'], ans:'√'}]},
    {id:'B', kind:'blank', bank:['生物','非生物'], items:[{n:1, pre:'1', ans:'非生物'}, {n:2, pre:'2', ans:'非生物'}, {n:3, pre:'3', ans:'生物'}, {n:4, pre:'4', ans:'非生物'}, {n:5, pre:'5', ans:'生物'}, {n:6, pre:'6', ans:'非生物'}, {n:7, pre:'7', ans:'生物'}, {n:8, pre:'8', ans:'非生物'}, {n:9, pre:'9', ans:'非生物'}, {n:10, pre:'10', ans:'非生物'}, {n:11, pre:'11', ans:'生物'}, {n:12, pre:'12', ans:'生物'}, {n:13, pre:'13', ans:'生物'}, {n:14, pre:'14', ans:'非生物'}, {n:15, pre:'15', ans:'生物'}]}
  ]},
  {no:9, sections:[
    {id:'B', kind:'blank', bank:["会呼吸","会移动","会繁殖","会成长","需要水和食物"], items:[{n:1, ans:"会成长"},
      {n:2, ans:"会繁殖"},
      {n:3, ans:"会移动"},
      {n:4, ans:"需要水和食物"},
      {n:5, ans:"会呼吸"}]}]},
  {no:10, sections:[
    {id:'D1', kind:'blank', bank:['M','N','O'], items:[{n:1, tpl:'( {0} ) 、 ( {1} ) 、 ( {2} )', slots:['M','N','O'], ans:'M'}]},
    {id:'D2', kind:'blank', bank:['P','Q','R'], items:[{n:2, tpl:'( {0} ) 、 ( {1} ) 、 ( {2} )', slots:['Q','R','P'], ans:'Q'}]},
    {id:'D3', kind:'blank', bank:['S','T','U'], items:[{n:3, tpl:'( {0} ) 、 ( {1} ) 、 ( {2} )', slots:['T','S','U'], ans:'T'}]},
    {id:'E', kind:'text', items:[{n:'E', free:true, ans:['']}]}
  ]},
  {no:11, sections:[
    {id:'F', kind:'blank', bank:['水','食物','空气'], items:[
      {n:1, pre:'1.', ans:'水'}, {n:2, pre:'2.', ans:'食物'}, {n:3, pre:'3.', ans:'空气'}
    ]},
    {id:'G', kind:'choice', items:[
      {n:4, word:'人类能从周围获取', opts:['水','空气','食物'], ans:'空气'},
      {n:5, word:'马儿能在草地上获取充足的', opts:['水','空气','食物'], ans:'食物'},
      {n:6, word:'绿色植物吸取阳光后,能自己制造', opts:['水','空气','食物'], ans:'食物'},
      {n:7, word:'植物能从土壤里吸取', opts:['水','空气','食物'], ans:'水'}
    ]}
  ]},
  {no:12, sections:[
    {id:'H', kind:'blank', bank:['地下洞穴','蜂巢','鸟巢'], items:[
      {n:1, pre:'1.', ans:'地下洞穴'}, {n:2, pre:'2.', ans:'蜂巢'}, {n:3, pre:'3.', ans:'鸟巢'}
    ]},
    {id:'I', kind:'blank', bank:['遮阳','避雨','躲避危险'], items:[
      {n:1, ans:'遮阳'}, {n:2, ans:'避雨'}, {n:3, ans:'躲避危险'}
    ]}
  ]},
  {no:13, sections:[
    {id:'A', kind:'text', items:[
      {n:'1a', tpl:'植物A：{0}', ans:[''], free:true},
      {n:'1b', tpl:'植物B：{0}', ans:[''], free:true}
    ]},
    {id:'B', kind:'choice', items:[
      {n:'2a', word:'2. 植物A（ ）', opts:['√','×'], ans:'√'},
      {n:'2b', word:'植物B（ ）', opts:['√','×'], ans:'×'}
    ]},
    {id:'C', kind:'text', items:[{n:3, free:true, ans:['']}]}
  ]},
  {no:14, sections:[
    {id:'A', kind:'blank', bank:['眼睛','皮肤','耳朵','鼻子','舌头'], items:[
      {n:1, ans:'眼睛'}, {n:2, ans:'皮肤'}, {n:3, ans:'耳朵'}, {n:4, ans:'鼻子'}, {n:5, ans:'舌头'}
    ]},
    {id:'B', kind:'blank', bank:['嗅觉','听觉','视觉','味觉','触觉'], items:[
      {n:1, ans:'嗅觉'}, {n:2, ans:'听觉'}, {n:3, ans:'视觉'}, {n:4, ans:'味觉'}, {n:5, ans:'触觉'}
    ]}
  ]},
  {no:15, sections:[
    {id:'C', kind:'blank', bank:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'], items:[
      {n:1, tpl:'大小：{0} {1}　{2} {3}', slots:['b','d','a','c'], ans:'b'},
      {n:2, tpl:'形状：{0} {1}　{2} {3}', slots:['e','h','f','g'], ans:'e'},
      {n:3, tpl:'颜色：{0} {1}　{2} {3}', slots:['i','k','j','l'], ans:'i'},
      {n:4, tpl:'高矮：{0} {1}　{2} {3}', slots:['m','n','o','p'], ans:'m'}
    ]}
  ]},
  {no:16, sections:[
    {id:'D', kind:'blank', bank:['P','Q','R','S','T','U','V','W'], items:[
      {n:1, tpl:'甜：{0}、{1}', slots:['Q','W'], ans:'Q'},
      {n:2, tpl:'咸：{0}、{1}', slots:['S','U'], ans:'S'},
      {n:3, tpl:'酸：{0}、{1}', slots:['R','T'], ans:'R'},
      {n:4, tpl:'苦：{0}、{1}', slots:['P','V'], ans:'P'}
    ]},
    {id:'E', kind:'blank', bank:['冷','热','软','硬','滑','粗'], items:[
      {n:1, pre:'1.', ans:'软'}, {n:2, pre:'2.', ans:'冷'}, {n:3, pre:'3.', ans:'粗'}, {n:4, pre:'4.', ans:'滑'}, {n:5, pre:'5.', ans:'热'}, {n:6, pre:'6.', ans:'硬'}
    ]}
  ]},
  {no:17, sections:[
    {id:'A', kind:'blank', bank:['P','Q','R','S'], items:[
      {n:1, tpl:'{0}　{1}', slots:['Q','R'], ans:'Q'},
      {n:2, tpl:'{0}　{1}', slots:['P','S'], ans:'P'},
      {n:3, tpl:'{0}　{1}', slots:['Q','R'], ans:'Q'},
      {n:4, tpl:'{0}　{1}', slots:['P','R'], ans:'P'},
      {n:5, tpl:'{0}　{1}', slots:['P',''], ans:'P'}
    ]},
    {id:'C', kind:'text', items:[{n:"6", free:true, ans:[""]}]}
  ]},
  {no:18, sections:[
    {id:'B', kind:'grid', bank:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'], rows:[
      [{n:1, pre:'1.', ans:'A'}, {n:11, pre:'11.', ans:'L'}],
      [{n:2, pre:'2.', ans:'N'}, {n:12, pre:'12.', ans:'K'}],
      [{n:3, pre:'3.', ans:'H'}, {n:13, pre:'13.', ans:'H'}],
      [{n:4, pre:'4.', ans:'B'}, {n:14, pre:'14.', ans:'G'}],
      [{n:5, pre:'5.', ans:'E'}, {n:15, pre:'15.', ans:'E'}],
      [{n:6, pre:'6.', ans:'C'}, {n:16, pre:'16.', ans:'N'}],
      [{n:7, pre:'7.', ans:'J'}, {n:17, pre:'17.', ans:'H'}],
      [{n:8, pre:'8.', ans:'F'}, {n:18, pre:'18.', ans:'M'}],
      [{n:9, pre:'9.', ans:'D'}, {n:19, pre:'19.', ans:'F'}],
      [{n:10, pre:'10.', ans:'I'}, {n:20, pre:'20.', ans:'H'}]
    ], items:[{n:1, ans:'A'}, {n:2, ans:'N'}, {n:3, ans:'H'}, {n:4, ans:'B'}, {n:5, ans:'E'}, {n:6, ans:'C'}, {n:7, ans:'J'}, {n:8, ans:'F'}, {n:9, ans:'D'}, {n:10, ans:'I'}, {n:11, ans:'L'}, {n:12, ans:'K'}, {n:13, ans:'H'}, {n:14, ans:'G'}, {n:15, ans:'E'}, {n:16, ans:'N'}, {n:17, ans:'H'}, {n:18, ans:'M'}, {n:19, ans:'F'}, {n:20, ans:'H'}]}
  ]},
  {no:19, sections:[
    {id:'B', kind:'grid', bank:["翅膀","触角","鳍","鳞","喙","蹼","犀角","硬皮","外壳","感觉外界环境","毛发","耳朵"], rows:[
      [{n:'1(a)', pre:'1(a)', ans:'翅膀'}, {n:'1(b)', pre:'1(b)', ans:'触角'}],
      [{n:'2(a)', pre:'2(a)', ans:'鳍'}, {n:'2(b)', pre:'2(b)', ans:'鳞'}],
      [{n:'3(a)', pre:'3(a)', ans:'喙'}, {n:'3(b)', pre:'3(b)', ans:'蹼'}],
      [{n:'4(a)', pre:'4(a)', ans:'犀角'}, {n:'4(b)', pre:'4(b)', ans:'硬皮'}],
      [{n:'5(a)', pre:'5(a)', ans:'外壳'}, {n:'5(b)', pre:'5(b)', ans:'感觉外界环境'}],
      [{n:'6(a)', pre:'6(a)', ans:'毛发'}, {n:'6(b)', pre:'6(b)', ans:'耳朵'}]
    ], items:[{n:'1(a)',ans:'翅膀'},{n:'1(b)',ans:'触角'},{n:'2(a)',ans:'鳍'},{n:'2(b)',ans:'鳞'},{n:'3(a)',ans:'喙'},{n:'3(b)',ans:'蹼'},{n:'4(a)',ans:'犀角'},{n:'4(b)',ans:'硬皮'},{n:'5(a)',ans:'外壳'},{n:'5(b)',ans:'感觉外界环境'},{n:'6(a)',ans:'毛发'},{n:'6(b)',ans:'耳朵'}]},
    {id:'C', kind:'text', items:[{n:"13", free:true, ans:[""]}]}
  ]},
  {no:20, sections:[
    {id:'A', kind:'grid', cols:['动物','头','鳞','毛发','尾巴','角'], rows:[
      ['1. 蛇', {n:1, opts:['√','×'], ans:'√'}, {n:2, opts:['√','×'], ans:'√'}, {n:3, opts:['√','×'], ans:'×'}, {n:4, opts:['√','×'], ans:'√'}, {n:5, opts:['√','×'], ans:'×'}],
      ['2. 羊', {n:6, opts:['√','×'], ans:'√'}, {n:7, opts:['√','×'], ans:'×'}, {n:8, opts:['√','×'], ans:'√'}, {n:9, opts:['√','×'], ans:'√'}, {n:10, opts:['√','×'], ans:'√'}],
      ['3. 鱼', {n:11, opts:['√','×'], ans:'√'}, {n:12, opts:['√','×'], ans:'√'}, {n:13, opts:['√','×'], ans:'×'}, {n:14, opts:['√','×'], ans:'√'}, {n:15, opts:['√','×'], ans:'×'}],
      ['4. 鹿', {n:16, opts:['√','×'], ans:'√'}, {n:17, opts:['√','×'], ans:'×'}, {n:18, opts:['√','×'], ans:'√'}, {n:19, opts:['√','×'], ans:'√'}, {n:20, opts:['√','×'], ans:'√'}],
      ['5. 鳄鱼', {n:21, opts:['√','×'], ans:'√'}, {n:22, opts:['√','×'], ans:'√'}, {n:23, opts:['√','×'], ans:'×'}, {n:24, opts:['√','×'], ans:'√'}, {n:25, opts:['√','×'], ans:'×'}]
    ], items:[{n:1, ans:'√'}, {n:2, ans:'√'}, {n:3, ans:'×'}, {n:4, ans:'√'}, {n:5, ans:'×'}, {n:6, ans:'√'}, {n:7, ans:'×'}, {n:8, ans:'√'}, {n:9, ans:'√'}, {n:10, ans:'√'}, {n:11, ans:'√'}, {n:12, ans:'√'}, {n:13, ans:'×'}, {n:14, ans:'√'}, {n:15, ans:'×'}, {n:16, ans:'√'}, {n:17, ans:'×'}, {n:18, ans:'√'}, {n:19, ans:'√'}, {n:20, ans:'√'}, {n:21, ans:'√'}, {n:22, ans:'√'}, {n:23, ans:'×'}, {n:24, ans:'√'}, {n:25, ans:'×'}]},
    {id:'B', kind:'blank', bank:['头','尾巴','蛇','鱼','鳄鱼','鹿','羊'], items:[{n:6, ans:'头'}, {n:7, ans:'尾巴'}, {n:8, ans:'蛇'}, {n:9, ans:'鱼'}, {n:10, ans:'鳄鱼'}, {n:11, ans:'鹿'}, {n:12, ans:'羊'}]},
    {id:'C', kind:'text', items:[{n:"13", free:true, ans:[""]}]}
  ]},
  {no:21, sections:[
    {id:'A', kind:'blank', bank:['P','Q','R','S'], items:[
      {n:1, ans:'Q'}, {n:2, ans:'P'}, {n:3, ans:'R'}, {n:4, ans:'S'}
    ]},
    {id:'B', kind:'blank', bank:['叶子','花','茎','根'], items:[
      {n:5, ans:'叶子'}, {n:6, ans:'花'}, {n:7, ans:'茎'}, {n:8, ans:'根'}
    ]}
  ]},
  {no:22, sections:[
    {id:'A', kind:'choice', items:[{n:1, word:"", opts:["网状脉","平行脉"], ans:"网状脉"},
      {n:2, word:"", opts:["网状脉","平行脉"], ans:"平行脉"},
      {n:3, word:"", opts:["木质茎","草质茎"], ans:"木质茎"},
      {n:4, word:"", opts:["木质茎","草质茎"], ans:"草质茎"},
      {n:5, word:"", opts:["主根","须根"], ans:"主根"},
      {n:6, word:"", opts:["主根","须根"], ans:"须根"},
      {n:7, word:"", opts:["会开花","不会开花"], ans:"会开花"},
      {n:8, word:"", opts:["会开花","不会开花"], ans:"不会开花"}]}]},
  {no:23, sections:[
    {id:'A', kind:'choice', items:[{n:1, word:"", opts:["制造食物","繁殖后代","输送水分、食物和养料","吸收水分和养料"], ans:"制造食物"},
      {n:2, word:"", opts:["制造食物","繁殖后代","输送水分、食物和养料","吸收水分和养料"], ans:"繁殖后代"},
      {n:3, word:"", opts:["制造食物","繁殖后代","输送水分、食物和养料","吸收水分和养料"], ans:"输送水分、食物和养料"},
      {n:4, word:"", opts:["制造食物","繁殖后代","输送水分、食物和养料","吸收水分和养料"], ans:"吸收水分和养料"}]},
    {id:'C', kind:'text', items:[{n:"5", free:true, ans:[""]}]}]},
  {no:24, sections:[
    {id:'A', kind:'choice', tick:{cols:["会开花","不会开花","网状脉","平行脉","草质茎","木质茎","主根","须根"], rows:["1. 凤仙花","2. 玉蜀黍","3. 玫瑰","4. 稻","5. 香蕉树"], perRow:4}, items:[{n:1, word:"", opts:["会开花","不会开花"], ans:"会开花"},
      {n:2, word:"", opts:["网状脉","平行脉"], ans:"网状脉"},
      {n:3, word:"", opts:["草质茎","木质茎"], ans:"草质茎"},
      {n:4, word:"", opts:["主根","须根"], ans:"主根"},
      {n:5, word:"", opts:["会开花","不会开花"], ans:"会开花"},
      {n:6, word:"", opts:["网状脉","平行脉"], ans:"平行脉"},
      {n:7, word:"", opts:["草质茎","木质茎"], ans:"草质茎"},
      {n:8, word:"", opts:["主根","须根"], ans:"须根"},
      {n:9, word:"", opts:["会开花","不会开花"], ans:"会开花"},
      {n:10, word:"", opts:["网状脉","平行脉"], ans:"网状脉"},
      {n:11, word:"", opts:["草质茎","木质茎"], ans:"木质茎"},
      {n:12, word:"", opts:["主根","须根"], ans:"主根"},
      {n:13, word:"", opts:["会开花","不会开花"], ans:"会开花"},
      {n:14, word:"", opts:["网状脉","平行脉"], ans:"平行脉"},
      {n:15, word:"", opts:["草质茎","木质茎"], ans:"草质茎"},
      {n:16, word:"", opts:["主根","须根"], ans:"须根"},
      {n:17, word:"", opts:["会开花","不会开花"], ans:"会开花"},
      {n:18, word:"", opts:["网状脉","平行脉"], ans:"平行脉"},
      {n:19, word:"", opts:["草质茎","木质茎"], ans:"草质茎"},
      {n:20, word:"", opts:["主根","须根"], ans:"须根"}]},
    {id:'C', kind:'text', items:[{n:"21", free:true, ans:[""]}]}]},
  {no:25, sections:[
    {id:'A', kind:'choice', items:[{n:1, word:"", opts:["√","×"], ans:"√"},
      {n:2, word:"", opts:["√","×"], ans:"×"},
      {n:3, word:"", opts:["√","×"], ans:"√"},
      {n:4, word:"", opts:["√","×"], ans:"×"},
      {n:5, word:"", opts:["√","×"], ans:"×"},
      {n:6, word:"", opts:["√","×"], ans:"√"},
      {n:7, word:"", opts:["√","×"], ans:"√"},
      {n:8, word:"", opts:["√","×"], ans:"√"},
      {n:9, word:"", opts:["√","×"], ans:"×"}]},
    {id:'B', kind:'blank', bank:["P","Q","R","S","T","U"], items:[{n:10, ans:"S"},
      {n:11, ans:"U"},
      {n:12, ans:"Q"},
      {n:13, ans:"R"},
      {n:14, ans:"P"},
      {n:15, ans:"T"}]}]},
  {no:26, sections:[
    {id:'B', kind:'blank', bank:["条形","棒形","U形","马蹄形","纽扣形","环形"], items:[{n:1, ans:"条形"},
      {n:2, ans:"棒形"},
      {n:3, ans:"U形"},
      {n:4, ans:"马蹄形"},
      {n:5, ans:"纽扣形"},
      {n:6, ans:"环形"}]},
    {id:'C', kind:'text', items:[{n:"7", free:true, ans:[""]}]}]},
  {no:27, sections:[
    {id:'B', kind:'blank', bank:["回形针","铝罐","铁罐","订书机","20仙硬币","金块","木筷","铁钉"], items:[{n:1, ans:"回形针"},
      {n:2, ans:"铝罐"},
      {n:3, ans:"铁罐"},
      {n:4, ans:"订书机"},
      {n:5, ans:"20仙硬币"},
      {n:6, ans:"金块"},
      {n:7, ans:"木筷"},
      {n:8, ans:"铁钉"}]},
    {id:'F', kind:'grid', cols:["1. 能被磁铁吸引","2. 不能被磁铁吸引"], bank:["a","b","c","d","e","f","g","h"],
     rows:[[{n:1, ans:"a"},{n:5, ans:"b"}],[{n:2, ans:"c"},{n:6, ans:"e"}],[{n:3, ans:"d"},{n:7, ans:"f"}],[{n:4, ans:"h"},{n:8, ans:"g"}]],
     items:[{n:1, ans:"a"},{n:2, ans:"c"},{n:3, ans:"d"},{n:4, ans:"h"},{n:5, ans:"b"},{n:6, ans:"e"},{n:7, ans:"f"},{n:8, ans:"g"}]}]},
  {no:28, sections:[
    {id:'G', kind:'blank', bank:["N","S","南极","北极"], items:[
      {n:1, pre:"1.", ans:"N"}, {n:2, pre:"2.", ans:"S"}, {n:3, pre:"3.", ans:"南极"}, {n:4, pre:"4.", ans:"北极"}]},
    {id:'H', kind:'blank', bank:["相吸","相斥"], items:[
      {n:1, pre:"1.", ans:"相斥"}, {n:2, pre:"2.", ans:"相吸"}, {n:3, pre:"3.", ans:"相斥"}, {n:4, pre:"4.", ans:"相吸"}]},
    {id:'I', kind:'blank', bank:["同极","异极","相斥","相吸"], items:[
      {n:1, pre:"1.", ans:"同极"}, {n:2, pre:"2.", ans:"异极"}, {n:3, pre:"3.", ans:"相斥"}, {n:4, pre:"4.", ans:"相吸"}]}]},
  {no:29, sections:[
    {id:'J', noHead:true, kind:'choice', items:[{n:1, word:"", opts:["磁铁X","磁铁Y","都一样"], ans:"磁铁X"}]},
    {id:'J2', noHead:true, kind:'text', items:[{n:2, tpl:"{0}", ans:["多"]}]},
    {id:'J3', noHead:true, kind:'choice', items:[{n:3, word:"", opts:["磁铁R","磁铁S","都一样"], ans:"磁铁R"}]},
    {id:'J4', noHead:true, kind:'text', items:[{n:4, tpl:"{0}", ans:["远"]}]}]},
  {no:30, sections:[
    {id:'A', kind:'blank', bank:["被吸收","没有被吸收"], items:[
      {n:1, ans:"没有被吸收"}, {n:2, ans:"被吸收"}, {n:3, ans:"被吸收"}, {n:4, ans:"没有被吸收"}]},
    {id:'B', kind:'grid', cols:["(1) 吸水","(2) 不透水"], bank:["纸张","毛衣","回形针","玻璃弹珠"],
     rows:[[{n:1, ans:"纸张"},{n:3, ans:"回形针"}],[{n:2, ans:"毛衣"},{n:4, ans:"玻璃弹珠"}]],
     items:[{n:1, ans:"纸张"},{n:2, ans:"毛衣"},{n:3, ans:"回形针"},{n:4, ans:"玻璃弹珠"}]}]},
  {no:31, sections:[
    {id:'A', kind:'choice', items:[
      {n:"a", word:"拖把", opts:["√","×"], ans:"√"},
      {n:"b", word:"钱币", opts:["√","×"], ans:"×"},
      {n:"c", word:"纯棉抹布", opts:["√","×"], ans:"√"},
      {n:"d", word:"雨衣", opts:["√","×"], ans:"×"},
      {n:"e", word:"白纸", opts:["√","×"], ans:"√"},
      {n:"f", word:"玻璃杯", opts:["√","×"], ans:"×"},
      {n:"g", word:"石头", opts:["√","×"], ans:"√"},
      {n:"h", word:"纸尿布", opts:["√","×"], ans:"√"},
      {n:"i", word:"塑料手套", opts:["√","×"], ans:"×"},
      {n:"j", word:"木屑", opts:["√","×"], ans:"√"},
      {n:"k", word:"厕纸", opts:["√","×"], ans:"√"},
      {n:"l", word:"塑料椅子", opts:["√","×"], ans:"×"}]},
    {id:'B', kind:'grid', cols:["(1) 吸水","(2) 不透水"], bank:["a","b","c","d","e","f","g","h","i","j","k","l"],
     rows:[[{n:1, ans:"a"},{n:7, ans:"b"}],[{n:2, ans:"c"},{n:8, ans:"d"}],[{n:3, ans:"e"},{n:9, ans:"f"}],[{n:4, ans:"h"},{n:10, ans:"g"}],[{n:5, ans:"j"},{n:11, ans:"i"}],[{n:6, ans:"k"},{n:12, ans:"l"}]],
     items:[{n:1, ans:"a"},{n:2, ans:"c"},{n:3, ans:"e"},{n:4, ans:"h"},{n:5, ans:"j"},{n:6, ans:"k"},{n:7, ans:"b"},{n:8, ans:"d"},{n:9, ans:"f"},{n:10, ans:"g"},{n:11, ans:"i"},{n:12, ans:"l"}]}]},
  {no:32, sections:[
    {id:'A', kind:'blank', bank:["棉布","马尼拉卡","毛衣"], items:[{n:"2a", pre:"最强", ans:"毛衣"}, {n:"2b", pre:"最弱", ans:"马尼拉卡"}]},
    {id:'B', kind:'blank', bank:["棉布","马尼拉卡","毛衣"], items:[{n:3, tpl:"{0} → {1} → {2}", slots:["马尼拉卡","棉布","毛衣"]}]},
    {id:'C', kind:'blank', bank:["棉","纸","羊毛"], items:[{n:4, pre:"棉布", ans:"棉"}, {n:5, pre:"马尼拉卡", ans:"纸"}, {n:6, pre:"毛衣", ans:"羊毛"}]}]},
  {no:33, sections:[
    {id:'B', kind:'blank', bank:["A","B","C","D","E","F"], items:[{n:1, ans:"C"},
      {n:2, ans:"E"},
      {n:3, ans:"B"},
      {n:4, ans:"F"},
      {n:5, ans:"A"},
      {n:6, ans:"D"}]},
    {id:'C', kind:'text', items:[{n:"7", free:true, ans:["",""]},
      {n:"8", free:true, ans:["",""]},
      {n:"9", free:true, ans:["",""]},
      {n:"10", free:true, ans:["",""]}]}]},
  {no:34, sections:[
    {id:'A', kind:'choice', tick:{cols:["纸箱","白米袋","棉布"], rows:["1."], perRow:1}, items:[{n:1, word:"", opts:["纸箱","白米袋","棉布"], ans:"白米袋"}]},
    {id:'C', kind:'text', items:[{n:"2", free:true, ans:[""]}]}]},
  {no:35, sections:[
    {id:'A', kind:'blank', bank:["I","J","K","L","M","N","O","P"], items:[{n:1, ans:"P"},
      {n:2, ans:"M"},
      {n:3, ans:"J"},
      {n:4, ans:"I"},
      {n:5, ans:"M"},
      {n:6, ans:"N"},
      {n:7, ans:"O"},
      {n:8, ans:"L"}]},
    {id:'B', kind:'choice', items:[{n:1, word:"根据大小", opts:["√","×"], ans:"×"},
      {n:2, word:"根据深度", opts:["√","×"], ans:"√"}]}]},
  {no:36, sections:[
    {id:'C', kind:'blank', bank:["沙土","壤土","黏土"], items:[{n:1, ans:"沙土"}, {n:2, ans:"壤土"}, {n:3, ans:"黏土"}]},
    {id:'D', kind:'blank', bank:["沙土","壤土","黏土"], items:[{n:4, ans:"壤土"}, {n:5, ans:"黏土"}, {n:6, ans:"沙土"}]}]},
  {no:37, sections:[
    {id:'A', kind:'grid', cols:["(1) 正方形","(2) 长方形","(3) 三角形","(4) 圆形"], bank:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"],
     rows:[[{n:1, ans:"c"},{n:2, ans:"d"},{n:3, ans:"b"},{n:4, ans:"a"}],[{n:5, ans:"e"},{n:6, ans:"g"},{n:7, ans:"h"},{n:8, ans:"f"}],[{n:9, ans:"l"},{n:10, ans:"j"},{n:11, ans:"i"},{n:12, ans:"k"}],[{n:13, ans:"n"},{n:14, ans:"m"},{n:15, ans:"o"},{n:16, ans:"p"}]],
     items:[{n:1, ans:"c"},{n:2, ans:"d"},{n:3, ans:"b"},{n:4, ans:"a"},{n:5, ans:"e"},{n:6, ans:"g"},{n:7, ans:"h"},{n:8, ans:"f"},{n:9, ans:"l"},{n:10, ans:"j"},{n:11, ans:"i"},{n:12, ans:"k"},{n:13, ans:"n"},{n:14, ans:"m"},{n:15, ans:"o"},{n:16, ans:"p"}]}]},
  {no:38, sections:[
    {id:'B', kind:'blank', bank:["正方体","长方体","棱锥体","棱柱体","圆锥体","圆柱体","球体"], items:[{n:1, ans:"正方体"},
      {n:2, ans:"长方体"},
      {n:3, ans:"棱锥体"},
      {n:4, ans:"棱柱体"},
      {n:5, ans:"圆锥体"},
      {n:6, ans:"圆柱体"},
      {n:7, ans:"球体"}]}]},
  {no:39, sections:[
    {id:'A', kind:'grid', cols:["(1) 正方体","(2) 长方体","(3) 棱锥体","(4) 棱柱体"], bank:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"],
     rows:[[{n:1, ans:"a"},{n:2, ans:"e"},{n:3, ans:"f"},{n:4, ans:"c"}],
           [{n:5, ans:"k"},{n:6, ans:"n"},{n:7, ans:"l"},{n:8, ans:"g"}],
           [{n:9, ans:"o"},"","",{n:10, ans:"j"}]],
     items:[{n:1, ans:"a"},{n:2, ans:"e"},{n:3, ans:"f"},{n:4, ans:"c"},{n:5, ans:"k"},{n:6, ans:"n"},{n:7, ans:"l"},{n:8, ans:"g"},{n:9, ans:"o"},{n:10, ans:"j"}]},
    {id:'B', kind:'grid', cols:["(5) 圆锥体","(6) 圆柱体","(7) 球体"], bank:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"],
     rows:[[{n:11, ans:"h"},{n:12, ans:"d"},{n:13, ans:"b"}],
           [{n:14, ans:"m"},{n:15, ans:"i"},{n:16, ans:"p"}]],
     items:[{n:11, ans:"h"},{n:12, ans:"d"},{n:13, ans:"b"},{n:14, ans:"m"},{n:15, ans:"i"},{n:16, ans:"p"}]}]},
  {no:40, sections:[
    {id:'A', kind:'blank', bank:["棱锥体","圆柱体","长方体","正方体","1","2","3"], items:[
      {n:"a", tpl:"{0}　{1} 个", slots:["棱锥体","1"]},
      {n:"b", tpl:"{0}　{1} 个", slots:["圆柱体","1"]},
      {n:"c", tpl:"{0}　{1} 个", slots:["长方体","2"]},
      {n:"d", tpl:"{0}　{1} 个", slots:["正方体","2"]}]}]},
  {no:41, sections:[
    {id:'B', kind:'blank', bank:["不容易倒下，维持秩序","可以滚动","方便收纳物品","方便书写","平稳、节省建筑材料"], items:[{n:1, ans:"不容易倒下，维持秩序"},
      {n:2, ans:"可以滚动"},
      {n:3, ans:"方便收纳物品"},
      {n:4, ans:"方便书写"},
      {n:5, ans:"平稳、节省建筑材料"}]}]},
];
