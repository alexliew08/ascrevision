/* Shared student layer, loaded by index.html and every exercise page.
   1. Show-answer buttons are visible only when logged in as Alex.
   2. Check-answer gives a praise / try-again popup. It never shows the answers.
   3. Progress is saved per student in this browser. A check marks the exercise done.
      The test student's next login goes to the first exercise not yet done. */
(function () {
  var SESS_KEY = "asc_student";
  var PROG_KEY = "asc_lesson_progress_v1";

  // Exercise order for the test student (same files as the index menu).
  var ORDER = [
    "year1-tatabahasa-bahagian-a.html", "year1-pemahaman.html", "year1-tatabahasa-bahagian-b.html",
    "year1-isi-tempat-kosong.html", "year1-english.html", "year1-science.html",
    "year1-chinese.html", "year1-chinese-2.html",
    "year2-tatabahasa.html?part=A", "year2-tatabahasa.html?part=B", "year2-pemahaman.html",
    "year2-english-sentence.html", "year2-science.html", "year2-chinese.html", "year2-chinese-2.html",
    "year3-chinese-2.html", "year3-exercise-3A.html", "year3-composition-fill.html",
    "year3-chinesefill-3A.html", "year3-chinesefill-3B.html", "year3-bm.html", "year3-english-writing.html",
    "year4-chinesefill-4A.html", "year4-chinesefill-4B.html", "year4-chinesefill-4C.html", "year4-sentence-reorder.html"
  ];

  function sess() { try { return JSON.parse(sessionStorage.getItem(SESS_KEY) || "null"); } catch (e) { return null; } }
  var s = sess() || {};
  var who = s.name || "";
  var isAlex = who.toLowerCase() === "alex";

  // 1. Show-answer buttons: hidden unless Alex is logged in.
  document.documentElement.classList.toggle("is-alex", isAlex);
  var css = document.createElement("style");
  css.textContent =
    'html:not(.is-alex) #showBtn,html:not(.is-alex) #revealBtn,html:not(.is-alex) [data-act="show"],' +
    'html:not(.is-alex) [data-reveal],html:not(.is-alex) [data-model],html:not(.is-alex) button[data-toggle]{display:none!important}' +
    '#lsn-toast{position:fixed;left:50%;top:18px;transform:translateX(-50%) translateY(-20px);z-index:9999;max-width:90vw;' +
    'padding:14px 22px;border-radius:14px;font:600 16px/1.4 system-ui,"Microsoft YaHei",sans-serif;color:#1f2d1f;' +
    'background:#fff8e1;border:2px solid #f2c94c;box-shadow:0 10px 30px rgba(0,0,0,.18);opacity:0;transition:all .3s;pointer-events:none;text-align:center}' +
    '#lsn-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}' +
    '#lsn-toast.good{background:#e8f8ee;border-color:#2e9e5b}' +
    '#lsn-toast.retry{background:#fdecec;border-color:#e0605e}';
  document.head.appendChild(css);

  // 3. Progress storage (this browser only).
  function loadP() { try { return JSON.parse(localStorage.getItem(PROG_KEY) || "{}"); } catch (e) { return {}; } }
  function saveP(p) { try { localStorage.setItem(PROG_KEY, JSON.stringify(p)); } catch (e) {} }
  function pageKey() {
    var f = location.pathname.split("/").pop() || "index.html";
    var part = new URLSearchParams(location.search).get("part");
    return part ? f + "?part=" + part : f;
  }
  function nextFor(name) {
    var pages = ((loadP()[name] || {}).pages) || {};
    for (var i = 0; i < ORDER.length; i++) {
      if (!(pages[ORDER[i]] || {}).done) return ORDER[i];
    }
    return null;
  }
  window.LessonFlow = { nextFor: nextFor, ORDER: ORDER };

  // 2. Check-answer feedback.
  function toast(msg, cls) {
    var t = document.getElementById("lsn-toast");
    if (!t) { t = document.createElement("div"); t.id = "lsn-toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.className = cls || "";
    void t.offsetWidth;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove("show"); }, 3200);
  }
  function parseScore(txt) {
    var m = /(\d+)\s*\/\s*(\d+)/.exec(txt || "");
    return m ? { r: +m[1], t: +m[2] } : null;
  }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  function onChecked(scoreEl) {
    var sc = parseScore(scoreEl ? scoreEl.textContent : "");
    var key = pageKey();
    var u = who || "guest";
    var p = loadP();
    p[u] = p[u] || {};
    p[u].pages = p[u].pages || {};
    var rec = p[u].pages[key] || { tries: 0, firstTry: null, done: false };
    rec.tries++;
    var scored = !!(sc && sc.t > 0);
    if (rec.tries === 1 && scored) rec.firstTry = sc.r === sc.t;
    rec.done = true; // checked = done
    if (scored) { rec.right = sc.r; rec.total = sc.t; }
    p[u].pages[key] = rec;
    saveP(p);

    if (!scored) {
      toast(pick(["✅ Checked! Keep going. 已检查，继续加油！", "✅ Submitted. Well done for finishing! 已提交，做得好！"]), "good");
    } else if (sc.r === sc.t) {
      if (rec.firstTry) toast(pick(["🌟 Well done! All correct on the first try! 太棒了，一次全对！", "🏆 Excellent! Perfect first time! 完美！", "👏 Brilliant work! 你真厉害！"]), "good");
      else toast(pick(["🎉 Great job! All correct now. 做得好！", "👍 Well done, you got it all right now! 很好！"]), "good");
    } else {
      toast(pick([
        "💪 Try again! " + sc.r + " of " + sc.t + " right. 再试一次吧！",
        "🔍 Almost there — " + sc.r + " out of " + sc.t + " correct. Check again! 再检查一下！",
        "🙂 Not quite. " + sc.r + " / " + sc.t + " correct. Have another go! 再想想！"
      ]), "retry");
    }
  }

  var CHECK_SEL = '#checkBtn,#checkAll,[data-act="check"],[data-act="wcheck"],button.check';
  document.addEventListener("click", function (e) {
    var b = e.target && e.target.closest ? e.target.closest(CHECK_SEL) : null;
    if (!b || b.disabled) return;
    setTimeout(function () {
      onChecked(document.getElementById("score") || document.querySelector(".score"));
    }, 80);
  }, true);
})();
