/* Answers for Praktis KSSR Bahasa Inggeris Tahun 1 (pre-UASA), Units 1-4 (book pages 3-30).
   Sheet no = book page number (book page 4 = Unit 1 A). Answers from the answer key pages A-1 to A-5 (book pages 51-55).
   kind: 'pdf'    = use the book page only (grammar notes, colouring, drawing).
         'choice' = highlight boxes: pick one option (opts).  post = text after the boxes.
         'blank'  = drop boxes: pick a word from the sheet's bank (tpl with {0} slots, or pre label).
         'text'   = type the answer. tpl with {0},{1} = boxes inside the sentence; no tpl = one full-line box.
   Keys: n is the question number as printed (or 1a, 1b for two blanks on one question). */
const ANSWERS = [
  {no:3, sections:[
    {id:'A', kind:'pdf'}
  ]},
  {no:4, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['This','That'], post:'is my bag.', ans:'This'},
      {n:2, word:'', opts:['This','That'], post:'is a duster.', ans:'This'},
      {n:3, word:'', opts:['This','That'], post:'is a cupboard.', ans:'That'},
      {n:4, word:'', opts:['This','That'], post:'is a bottle.', ans:'This'},
      {n:5, word:'', opts:['This','That'], post:'is a broom.', ans:'That'}
    ]}
  ]},
  {no:5, sections:[
    {id:'B', kind:'choice', items:[
      {n:1, word:'Is it a rubber?', opts:['Yes, it is.',"No, it isn't."], ans:'Yes, it is.'},
      {n:2, word:'Is it a notebook?', opts:['Yes, it is.',"No, it isn't."], ans:"No, it isn't."},
      {n:3, word:'Is it your pencil case?', opts:['Yes, it is.',"No, it isn't."], ans:"No, it isn't."},
      {n:4, word:'Is it your bag?', opts:['Yes, it is.',"No, it isn't."], ans:'Yes, it is.'},
      {n:5, word:'Is it a sharpener?', opts:['Yes, it is.',"No, it isn't."], ans:'Yes, it is.'}
    ]}
  ]},
  {no:6, sections:[
    {id:'C', kind:'blank', bank:['a','b','c','d','e'], items:[
      {n:1, pre:'Take out your pencil.', ans:'c'},
      {n:2, pre:'Pass me a ruler.', ans:'a'},
      {n:3, pre:'Put away your book.', ans:'b'},
      {n:4, pre:'Open your book.', ans:'e'},
      {n:5, pre:'Write in your notebook.', ans:'d'}
    ]}
  ]},
  {no:7, sections:[
    {id:'D', kind:'text', wide:true, items:[
      {n:1, tpl:'Yes, it {0}.', ans:['is']},
      {n:'2a', tpl:"No, it {0}.", ans:["isn't"]},
      {n:'2b', tpl:"It's a {0}.", ans:['pen']},
      {n:3, tpl:'Yes, it {0}.', ans:['is']},
      {n:'4a', tpl:"No, it {0}.", ans:["isn't"]},
      {n:'4b', tpl:"It's a {0}.", ans:['chair']},
      {n:5, tpl:'Yes, it {0}.', ans:['is']}
    ]}
  ]},
  {no:8, sections:[
    {id:'E', kind:'text', wide:true, items:[
      {n:1, tpl:"It's a {0}. It's not a {1}.", ans:['pencil','ruler']},
      {n:2, tpl:"It's a {0}. It's not a {1}.", ans:['bag','pencil case']},
      {n:3, tpl:"It's a {0}. It's not a {1}.", ans:['rubber','pen']},
      {n:4, tpl:"It's a {0}. It's not a {1}.", ans:['desk','chair']}
    ]}
  ]},
  {no:9, sections:[
    {id:'F', kind:'text', wide:true, items:[
      {n:1, tpl:'This is my {0}. It is {1}.', ans:['water bottle','green']},
      {n:2, ans:['This is my ruler. It is yellow.']},
      {n:3, ans:['This is my pencil case. It is orange.']},
      {n:4, ans:['This is my rubber. It is blue.']},
      {n:5, ans:['This is my bag. It is red.']}
    ]}
  ]},
  {no:10, sections:[
    {id:'A', kind:'pdf'}
  ]},
  {no:11, sections:[
    {id:'A', kind:'pdf'}
  ]},
  {no:12, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:['He','She'], ans:'She'},
      {n:2, word:'', opts:['He','She'], ans:'He'},
      {n:3, word:'', opts:['He','She'], ans:'He'},
      {n:4, word:'', opts:['He','She'], ans:'She'},
      {n:5, word:'', opts:['He','She'], ans:'She'}
    ]}
  ]},
  {no:13, sections:[
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'', opts:['His','Her'], post:'name is Anne.', ans:'Her'},
      {n:'1b', word:'', opts:['His','Her'], post:'favourite toy is a doll.', ans:'Her'},
      {n:'2a', word:'', opts:['His','Her'], post:'name is Jack.', ans:'His'},
      {n:'2b', word:'', opts:['His','Her'], post:'favourite toy is a kite.', ans:'His'},
      {n:'3a', word:'', opts:['His','Her'], post:'name is Mike.', ans:'His'},
      {n:'3b', word:'', opts:['His','Her'], post:'favourite toy is a top.', ans:'His'},
      {n:'4a', word:'', opts:['His','Her'], post:'name is Belle.', ans:'Her'},
      {n:'4b', word:'', opts:['His','Her'], post:'favourite toy is a skipping rope.', ans:'Her'},
      {n:'5a', word:'', opts:['His','Her'], post:'name is Afiq.', ans:'His'},
      {n:'5b', word:'', opts:['His','Her'], post:'favourite toy is a toy plane.', ans:'His'}
    ]}
  ]},
  {no:14, sections:[
    {id:'C', kind:'text', items:[
      {n:1, ans:['His favourite toy is a toy plane.']},
      {n:2, ans:['Her favourite toy is a teddy bear.']},
      {n:3, ans:['Her favourite toy is a puzzle.']},
      {n:4, ans:['His favourite toy is a computer game.']}
    ]}
  ]},
  {no:15, sections:[
    {id:'D', kind:'choice', items:[
      {n:1, word:'', opts:['A','B','C','D','E','F'], ans:'C'},
      {n:2, word:'', opts:['A','B','C','D','E','F'], ans:'A'},
      {n:3, word:'', opts:['A','B','C','D','E','F'], ans:'D'},
      {n:4, word:'', opts:['A','B','C','D','E','F'], ans:'E'},
      {n:5, word:'', opts:['A','B','C','D','E','F'], ans:'F'},
      {n:6, word:'', opts:['A','B','C','D','E','F'], ans:'B'}
    ]}
  ]},
  {no:16, sections:[
    {id:'E', kind:'blank', bank:['long','short','ugly','beautiful','old','new','big','small'], items:[
      {n:'1a', tpl:"It's a {0} black train.", slots:['long'], ans:'long'},
      {n:'1b', tpl:"It's a {0} blue train.", slots:['short'], ans:'short'},
      {n:'2a', tpl:"It's a {0} pink doll.", slots:['beautiful'], ans:'beautiful'},
      {n:'2b', tpl:"It's an {0} green monster.", slots:['ugly'], ans:'ugly'},
      {n:'3a', tpl:"It's a {0} red bike.", slots:['new'], ans:'new'},
      {n:'3b', tpl:"It's an {0} brown go-kart.", slots:['old'], ans:'old'},
      {n:'4a', tpl:"It's a {0} yellow ball.", slots:['small'], ans:'small'},
      {n:'4b', tpl:"It's a {0} purple ball.", slots:['big'], ans:'big'}
    ]}
  ]},
  {no:17, sections:[
    {id:'F', kind:'text', wide:true, items:[
      {n:'1a', tpl:'His name is {0}.', ans:['Alex']},
      {n:'1b', tpl:'His favourite toy is his {0}.', ans:['kite']},
      {n:'2a', tpl:'Her name is {0}.', ans:['Sandy']},
      {n:'2b', tpl:'Her favourite toy is {0}.', ans:['her teddy bear']},
      {n:'3a', tpl:'His name is {0}.', ans:['Nick']},
      {n:'3b', tpl:'His favourite toy is {0}.', ans:['his toy car']}
    ]}
  ]},
  {no:18, sections:[
    {id:'A', kind:'pdf'},
    {id:'B', kind:'text', items:[
      {n:1, tpl:'My favourite toy is a {0}.', ans:[], free:true},
      {n:2, tpl:'It is {0} in colour.', ans:[], free:true}
    ]}
  ]},
  {no:19, sections:[
    {id:'A', kind:'pdf'}
  ]},
  {no:20, sections:[
    {id:'A', kind:'text', items:[
      {n:1, tpl:'tiger / tigers', ans:[]},
      {n:2, tpl:'frog / {0}', ans:['frogs']},
      {n:3, tpl:'spider / {0}', ans:['spiders']},
      {n:4, tpl:'{0} / elephants', ans:['elephant']},
      {n:5, tpl:'{0} / bears', ans:['bear']},
      {n:6, tpl:'dog / {0}', ans:['dogs']},
      {n:7, tpl:'rabbit / {0}', ans:['rabbits']},
      {n:8, tpl:'{0} / parrots', ans:['parrot']}
    ]}
  ]},
  {no:21, sections:[
    {id:'B', kind:'choice', items:[
      {n:1, word:'The rabbits are', opts:['in','on'], post:'the cage.', ans:'in'},
      {n:2, word:'The cat is', opts:['on','under'], post:'the stool.', ans:'on'},
      {n:3, word:'The tortoise is', opts:['in','under'], post:'the stool.', ans:'under'},
      {n:4, word:'The dog is', opts:['in','on'], post:'the kennel.', ans:'in'},
      {n:5, word:'The parrot is', opts:['on','under'], post:'the counter.', ans:'on'}
    ]}
  ]},
  {no:22, sections:[
    {id:'C', kind:'text', wide:true, items:[
      {n:'1a', tpl:'I like {0}.', ans:['dogs']},
      {n:'1b', tpl:"I don't like {0}.", ans:['cats']},
      {n:'2a', tpl:'I like {0}.', ans:['cats']},
      {n:'2b', tpl:"I don't like {0}.", ans:['rabbits']}
    ]}
  ]},
  {no:23, sections:[
    {id:'C', kind:'text', wide:true, items:[
      {n:'3a', tpl:'I like {0}.', ans:['rabbits']},
      {n:'3b', tpl:"I don't like {0}.", ans:['dogs']},
      {n:'4a', tpl:'I like {0}.', ans:['dogs']},
      {n:'4b', tpl:"I don't like {0}.", ans:['rabbits']}
    ]},
    {id:'D', kind:'text', wide:true, items:[
      {n:1, tpl:'Yes, {0}.', ans:['I do']},
      {n:2, tpl:"No, {0}.", ans:["I don't"]},
      {n:3, tpl:'Yes, {0}.', ans:['I do']},
      {n:4, tpl:'No, {0}.', ans:["I don't"]}
    ]}
  ]},
  {no:24, sections:[
    {id:'A', kind:'pdf'}
  ]},
  {no:25, sections:[
    {id:'A', kind:'pdf'}
  ]},
  {no:26, sections:[
    {id:'A', kind:'choice', items:[
      {n:1, word:'', opts:["I've got an apple.","I haven't got an apple."], ans:"I haven't got an apple."},
      {n:2, word:'', opts:["I've got a banana.","I haven't got a banana."], ans:"I haven't got a banana."},
      {n:3, word:'', opts:["I've got a sandwich.","I haven't got a sandwich."], ans:"I've got a sandwich."},
      {n:4, word:'', opts:["I've got a glass of milk.","I haven't got a glass of milk."], ans:"I've got a glass of milk."},
      {n:5, word:'', opts:["I've got a cup of coffee.","I haven't got a cup of coffee."], ans:"I haven't got a cup of coffee."},
      {n:6, word:'', opts:["I've got a bowl of salad.","I haven't got a bowl of salad."], ans:"I've got a bowl of salad."}
    ]}
  ]},
  {no:27, sections:[
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'Nora :', opts:["I've","I haven't"], post:'got a muffin.', ans:"I've"},
      {n:'1b', word:'', opts:["I've","I haven't"], post:'got a pizza.', ans:"I haven't"},
      {n:'2a', word:'Peter :', opts:["I've","I haven't"], post:'got a drumstick.', ans:"I haven't"},
      {n:'2b', word:'', opts:["I've","I haven't"], post:'got a fish.', ans:"I've"},
      {n:'3a', word:'Alice :', opts:["I've","I haven't"], post:'got a bowl of noodles.', ans:"I've"},
      {n:'3b', word:'', opts:["I've","I haven't"], post:'got a plate of rice.', ans:"I haven't"}
    ]}
  ]},
  {no:28, sections:[
    {id:'C', kind:'text', items:[
      {n:1, ans:['Yes, I have.']},
      {n:2, ans:["No, we haven't."]},
      {n:3, ans:['Yes, we have.']},
      {n:4, ans:['Yes, I have.']},
      {n:5, ans:["No, we haven't."]}
    ]}
  ]},
  {no:29, sections:[
    {id:'D', kind:'text', items:[
      {n:1, tpl:"I've got a {0} and a {1}.", ans:['pear','guava']},
      {n:2, ans:["I've got a tart and a doughnut."]},
      {n:3, ans:["I've got a pear and a tart."]},
      {n:4, ans:["I've got a guava and a doughnut."]}
    ]}
  ]},
  {no:30, sections:[
    {id:'A', kind:'text', items:[
      {n:1, tpl:"I've got {0} {1}.", ans:['eleven','apples']},
      {n:2, tpl:"I've got {0} {1}.", ans:['eight','sandwiches']},
      {n:3, tpl:"I've got {0} {1}.", ans:['thirteen','buns']}
    ]}
  ]},
  /* ---- Assessment (Units 1-4), book pages 31-40 (printed pages 29-38) ---- */
  {no:31, sections:[
    {id:'A', kind:'choice', items:[
      {n:'1a', word:'', opts:['This','That'], post:'is a chair.', ans:'This'},
      {n:'1b', word:'', opts:['This','That'], post:'is a desk.', ans:'That'},
      {n:'2a', word:'', opts:['This','That'], post:'is a broom.', ans:'This'},
      {n:'2b', word:'', opts:['This','That'], post:'is a duster.', ans:'This'},
      {n:'3a', word:'', opts:['This','That'], post:'is my bag.', ans:'This'},
      {n:'3b', word:'', opts:['This','That'], post:"is Ivy's bag.", ans:'That'},
      {n:'4a', word:'', opts:['This','That'], post:'is a whiteboard.', ans:'That'},
      {n:'4b', word:'', opts:['This','That'], post:'is a duster.', ans:'This'}
    ]}
  ]},
  {no:32, sections:[
    {id:'B', kind:'choice', items:[
      {n:'1a', word:'', opts:['He','She'], post:'is Danny.', ans:'He'},
      {n:'1b', word:'', opts:['His','Her'], post:'favourite toy is a teddy bear.', ans:'His'},
      {n:'2a', word:'', opts:['He','She'], post:'is Su Lin.', ans:'She'},
      {n:'2b', word:'', opts:['His','Her'], post:'favourite toy is a skipping rope.', ans:'Her'},
      {n:'3a', word:'', opts:['He','She'], post:'is Jack.', ans:'He'},
      {n:'3b', word:'', opts:['His','Her'], post:'favourite toy is a toy plane.', ans:'His'},
      {n:'4a', word:'', opts:['He','She'], post:'is Gina.', ans:'She'},
      {n:'4b', word:'', opts:['His','Her'], post:'favourite toy is a doll.', ans:'Her'},
      {n:'5a', word:'', opts:['He','She'], post:'is Amir.', ans:'He'},
      {n:'5b', word:'', opts:['His','Her'], post:'favourite toy is a computer game.', ans:'His'}
    ]}
  ]},
  {no:33, sections:[
    {id:'C', kind:'text', items:[
      {n:1, tpl:'cat / {0}', ans:['cats']},
      {n:2, tpl:'lion / {0}', ans:['lions']},
      {n:3, tpl:'rat / {0}', ans:['rats']},
      {n:4, tpl:'cock / {0}', ans:['cocks']},
      {n:5, tpl:'horse / {0}', ans:['horses']},
      {n:6, tpl:'parrot / {0}', ans:['parrots']}
    ]}
  ]},
  {no:34, sections:[
    {id:'D', kind:'blank', bank:['ruler','book','chair','desk','pencil','rubber'], items:[
      {n:1, tpl:'This is a {0}.', slots:['pencil'], ans:'pencil'},
      {n:2, tpl:'This is a {0}.', slots:['ruler'], ans:'ruler'},
      {n:3, tpl:'This is a {0}.', slots:['book'], ans:'book'},
      {n:4, tpl:'This is a {0}.', slots:['rubber'], ans:'rubber'},
      {n:5, tpl:'This is a {0}.', slots:['desk'], ans:'desk'},
      {n:6, tpl:'This is a {0}.', slots:['chair'], ans:'chair'}
    ]}
  ]},
  {no:35, sections:[
    {id:'E', kind:'choice', items:[
      {n:1, word:'The frog is', opts:['in','on','under'], post:'the rock.', ans:'on'},
      {n:2, word:'The rat is', opts:['in','on','under'], post:'the cupboard.', ans:'under'},
      {n:3, word:'The dog is', opts:['in','on','under'], post:'the kennel.', ans:'in'},
      {n:4, word:'The monkey is', opts:['in','on','under'], post:'the roof.', ans:'on'},
      {n:5, word:'The cow is', opts:['in','on','under'], post:'the tree.', ans:'under'},
      {n:6, word:'The bird is', opts:['in','on','under'], post:'the cage.', ans:'in'},
      {n:7, word:'The duck is', opts:['in','on','under'], post:'the bridge.', ans:'on'},
      {n:8, word:'The lizard is', opts:['in','on','under'], post:'the stool.', ans:'under'}
    ]}
  ]},
  {no:36, sections:[
    {id:'F', kind:'choice', items:[
      {n:1, word:'Have we got any milk?', opts:['Yes, we have.',"No, we haven't."], ans:'Yes, we have.'},
      {n:2, word:'Have we got any orange juice?', opts:['Yes, we have.',"No, we haven't."], ans:"No, we haven't."},
      {n:3, word:'Have we got any bananas?', opts:['Yes, we have.',"No, we haven't."], ans:'Yes, we have.'},
      {n:4, word:'Have we got any ice cream?', opts:['Yes, we have.',"No, we haven't."], ans:'Yes, we have.'},
      {n:5, word:'Have we got any carrots?', opts:['Yes, we have.',"No, we haven't."], ans:'Yes, we have.'},
      {n:6, word:'Have we got any tomatoes?', opts:['Yes, we have.',"No, we haven't."], ans:"No, we haven't."}
    ]}
  ]},
  {no:37, sections:[
    {id:'G', kind:'blank', bank:['Yes, it is.',"No, it isn't."], items:[
      {n:1, pre:'Is it a notebook?', ans:"No, it isn't."},
      {n:2, pre:'Is it a ruler?', ans:"No, it isn't."},
      {n:3, pre:'Is it a desk?', ans:'Yes, it is.'},
      {n:4, pre:'Is it a water bottle?', ans:'Yes, it is.'},
      {n:5, pre:'Is it a bag?', ans:"No, it isn't."},
      {n:6, pre:'Is it a cupboard?', ans:'Yes, it is.'}
    ]}
  ]},
  {no:38, sections:[
    {id:'H', kind:'blank', bank:['beautiful pink','ugly green','small red','long yellow','doll','monster','train','yo-yo'], items:[
      {n:1, tpl:'My favourite toy is my {0} {1}.', slots:['beautiful pink','doll'], ans:'beautiful pink doll'},
      {n:2, tpl:'My favourite toy is my {0} {1}.', slots:['ugly green','monster'], ans:'ugly green monster'},
      {n:3, tpl:'My favourite toy is my {0} {1}.', slots:['long yellow','train'], ans:'long yellow train'},
      {n:4, tpl:'My favourite toy is my {0} {1}.', slots:['small red','yo-yo'], ans:'small red yo-yo'}
    ]}
  ]},
  {no:39, sections:[
    {id:'I', kind:'choice', items:[
      {n:1, word:'', opts:["I've got five cakes in my basket.","I haven't got any cakes in my basket."], ans:"I've got five cakes in my basket."},
      {n:2, word:'', opts:["I've got ten mangoes in my trolley.","I haven't got any mangoes in my trolley."], ans:"I haven't got any mangoes in my trolley."},
      {n:3, word:'', opts:["I've got a sandwich in my lunchbox.","I haven't got any sandwiches in my lunchbox."], ans:"I've got a sandwich in my lunchbox."},
      {n:4, word:'', opts:["I've got chicken on my plate.","I haven't got any chicken on my plate."], ans:"I haven't got any chicken on my plate."}
    ]}
  ]},
  {no:40, sections:[
    {id:'J', kind:'blank', bank:["By bus.","I'm Sharon.","I'm seven years old.","It's a pencil case.","It's a robot.","I'm fine, thank you."], items:[
      {n:1, pre:"What's your name?", ans:"I'm Sharon."},
      {n:2, pre:'How are you?', ans:"I'm fine, thank you."},
      {n:3, pre:'How old are you?', ans:"I'm seven years old."},
      {n:4, pre:"What's your favourite toy?", ans:"It's a robot."},
      {n:5, pre:"What's this?", ans:"It's a pencil case."},
      {n:6, pre:'How do you go to school?', ans:'By bus.'}
    ]}
  ]}
];
