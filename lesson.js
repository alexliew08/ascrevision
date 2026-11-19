/* Shared student layer, loaded by index.html and every exercise page.
   1. Show-answer buttons are visible only when logged in as Alex.
   2. Check-answer gives a praise / try-again popup. It never shows the answers.
   3. Progress is saved per student in this browser. A check marks the exercise done.
      The test student's next login goes to the first exercise not yet done. */
(function () {
  var SESS_KEY = "asc_student";
  var PROG_KEY = "asc_lesson_progress_v1";
  // Paste the Google Apps Script web app URL here (see sheet-script\Code.gs). Leave as is to keep progress on this device only.
  var SHEET_URL = "https://script.google.com/macros/s/AKfycbwfpSs2biONcgBbbWnG5WW3QKec1ShM9c5LUCrb7TtI5jeKlGUm0sHvH5odTN1l8oSV/exec";
  var SHEET_ON = !!SHEET_URL && SHEET_URL.indexOf("PASTE_") !== 0;

  // Exercise order for the test student (same files as the index menu).
  var ORDER = [
    "year1-tatabahasa-bahagian-a.html", "year1-pemahaman.html", "year1-tatabahasa-bahagian-b.html",
    "year1-isi-tempat-kosong.html", "year1-english-tester.html", "year1-science-tester.html",
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
  // Next exercise not yet done, only from the student's own year (e.g. Year 3 gets year3-* files).
  function nextFor(name, year) {
    var pages = ((loadP()[name] || {}).pages) || {};
    var prefix = year ? "year" + year + "-" : "";
    for (var i = 0; i < ORDER.length; i++) {
      if (prefix && ORDER[i].indexOf(prefix) !== 0) continue;
      if (!(pages[ORDER[i]] || {}).done) return ORDER[i];
    }
    return null;
  }
  window.LessonFlow = { nextFor: nextFor, ORDER: ORDER };
  // Only Alex can call this (from the reset panel on Alex's menu).
  // Resets one exercise (page) or all ('*') for a student: on this device, and on the sheet as a RESET row,
  // so the student's other devices clear it the next time they open a page.
  function clearAnswers(page) {
    var removed = false;
    try {
      Object.keys(localStorage).forEach(function (k) {
        if (k.indexOf("form-state-") === 0 || k.indexOf("fill-state-") === 0) {
          var pg = k.replace(/^(form|fill)-state-/, "");
          if (page === "*" || pg === page) { localStorage.removeItem(k); removed = true; }
        }
      });
      if (window.LESSON_STATE_KEY && (page === "*" || page === pageKey()) && localStorage.getItem(window.LESSON_STATE_KEY) !== null) {
        localStorage.removeItem(window.LESSON_STATE_KEY); removed = true;
      }
    } catch (e) {}
    return removed;
  }
  window.LessonFlow.resetPage = function (name, page) {
    name = name || "Test"; page = page || "*";
    var p = loadP();
    if (page === "*") delete p[name];
    else if (p[name] && p[name].pages) delete p[name].pages[page];
    saveP(p);
    clearAnswers(page);
    if (SHEET_ON) {
      try {
        fetch(SHEET_URL, {
          method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ at: new Date().toISOString(), student: name, page: page,
            right: "", total: "", tries: 0, state: "RESET" })
        });
      } catch (e) {}
    }
  };
  window.LessonFlow.resetTest = function (name) { window.LessonFlow.resetPage(name || "Test", "*"); };
  // The exercises a student has checked, from the sheet (and this device), leaving out ones reset since.
  window.LessonFlow.donePages = function (name) {
    var local = Object.keys(((loadP()[name] || {}).pages) || {});
    if (!SHEET_ON) return Promise.resolve(local);
    return fetch(SHEET_URL + "?student=" + encodeURIComponent(name))
      .then(function (r) { return r.json(); })
      .then(function (rows) {
        var resets = {}, latest = {};
        rows.forEach(function (row) {
          var t = new Date(row.at).getTime();
          if (row.state === "RESET") { if (!resets[row.page] || t > resets[row.page]) resets[row.page] = t; }
          else if (!latest[row.page] || t > latest[row.page]) latest[row.page] = t;
        });
        var resetTime = function (page) { return Math.max(resets[page] || 0, resets["*"] || 0); };
        var pages = {};
        Object.keys(latest).forEach(function (page) { if (latest[page] > resetTime(page)) pages[page] = true; });
        local.forEach(function (page) { pages[page] = true; });
        return Object.keys(pages);
      })
      .catch(function () { return local; });
  };

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
    // Send this check to the shared sheet, so other devices can see it.
    if (SHEET_ON && who) {
      try {
        fetch(SHEET_URL, {
          method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ at: new Date().toISOString(), student: who, page: key,
            right: sc ? sc.r : "", total: sc ? sc.t : "", tries: rec.tries,
            state: (saveForm(), savedAnswers()) })
        });
      } catch (err) {}
    }

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

  // Answers of the current page (saved by the page itself under fill-state-<file>), as text.
  // Every answer box on the page (dropdowns, typed boxes, tick boxes), kept in order and saved on this device.
  function formKey() { return "form-state-" + pageKey(); }
  function formControls() {
    // Never on the login page (it would save the password), and never password boxes.
    if (/(^|\/)index\.html$/.test(location.pathname) || /\/$/.test(location.pathname)) return [];
    return Array.prototype.slice.call(document.querySelectorAll(
      "select:not([data-nosave]), textarea, input:not([type=button]):not([type=submit]):not([type=hidden]):not([type=password])"));
  }
  var restoring = false;
  function saveForm() {
    if (restoring) return;
    try {
      var list = formControls().map(function (el) {
        return (el.type === "checkbox" || el.type === "radio") ? { c: el.checked } : { v: el.value };
      });
      if (list.length) localStorage.setItem(formKey(), JSON.stringify({ f: list, d: dropSnapshot() }));
    } catch (e) {}
  }
  // Pages that keep their own answers set window.LESSON_STATE_KEY; otherwise the shared form snapshot is used.
  function stateKeyNow() { return window.LESSON_STATE_KEY || formKey(); }
  function savedAnswers() {
    try { return localStorage.getItem(stateKeyNow()) || ""; } catch (e) { return ""; }
  }
  // Put the saved answers back into the boxes, then let the page's own handlers see each change.
  function restoreFormAnswers() {
    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(formKey()) || "null"); } catch (e) {}
    var f = Array.isArray(saved) ? saved : (saved && saved.f) || [];
    var d = Array.isArray(saved) ? [] : (saved && saved.d) || [];
    if (!f.length && !d.length) return;
    var tries = 0;
    (function run() {
      if (!formControls().length && tries++ < 25) return setTimeout(run, 200); // wait for the page to draw its boxes
      restoring = true;
      try {
        f.forEach(function (s, i) {
          var el = formControls()[i];
          if (!el) return;
          if (s.c !== undefined) {
            if (el.checked !== s.c) { el.checked = s.c; el.dispatchEvent(new Event("change", { bubbles: true })); }
          } else if (s.v !== undefined && el.value !== s.v) {
            el.value = s.v;
            el.dispatchEvent(new Event("input", { bubbles: true }));
            el.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });
        // Drag-and-drop answers: put each word back into its box by sending the same drop the page listens for.
        d.forEach(function (x) {
          if (!x.w) return;
          var el = document.querySelectorAll(".drop")[x.i];
          if (!el || el.dataset.drop !== x.k) return;
          var dt = new DataTransfer();
          dt.setData("text/plain", x.w);
          el.dispatchEvent(new DragEvent("drop", { bubbles: true, cancelable: true, dataTransfer: dt }));
        });
      } finally { restoring = false; }
      saveForm();
    })();
  }
  // Drag-and-drop boxes: which word is in each box, in order.
  function dropSnapshot() {
    return Array.prototype.slice.call(document.querySelectorAll(".drop")).map(function (el, i) {
      var t = (el.textContent || "").trim();
      var empty = el.classList.contains("empty") || t === "" || t === "seret ke sini";
      return { i: i, k: el.dataset.drop || "", w: empty ? "" : t };
    });
  }
  document.addEventListener("drop", function () { setTimeout(saveForm, 150); }, true);
  document.addEventListener("click", function () { setTimeout(saveForm, 150); }, true);
  document.addEventListener("change", saveForm, true);
  document.addEventListener("input", saveForm, true);

  // On load, restore this student's progress and answers saved on the sheet (any device).
  // If something new was restored, reload once so the page shows it.
  if (SHEET_ON && who) {
    fetch(SHEET_URL + "?student=" + encodeURIComponent(who))
      .then(function (r) { return r.json(); })
      .then(function (rows) {
        var p = loadP();
        p[who] = p[who] || {};
        p[who].pages = p[who].pages || {};
        var changed = false, latestAnswers = {};
        // The last reset time for each page ("*" = all pages), from RESET rows on the sheet.
        var resets = {};
        rows.forEach(function (row) {
          if (row.state !== "RESET") return;
          var t = new Date(row.at).getTime();
          if (!resets[row.page] || t > resets[row.page]) resets[row.page] = t;
        });
        var resetTime = function (page) { return Math.max(resets[page] || 0, resets["*"] || 0); };
        // 1. Apply resets on this device: clear progress and saved answers for those pages.
        Object.keys(resets).forEach(function (page) {
          if (page === "*") {
            if (Object.keys(p[who].pages).length) { p[who].pages = {}; changed = true; }
          } else if (p[who].pages[page]) { delete p[who].pages[page]; changed = true; }
          if (clearAnswers(page)) changed = true;
        });
        // 2. Progress rows after the last reset for their page.
        rows.forEach(function (row) {
          if (row.state === "RESET") return;
          if (new Date(row.at).getTime() <= resetTime(row.page)) return;
          var local = p[who].pages[row.page];
          if (!local || !local.done) {
            p[who].pages[row.page] = { tries: row.tries || 1, done: true, right: row.right, total: row.total };
            changed = true;
          }
          // Rows are in time order, so the last non-empty answer set wins. An empty "{}" must never overwrite real answers.
          if (row.state && row.state !== "{}") latestAnswers[row.page] = row.state;
        });
        Object.keys(latestAnswers).forEach(function (page) {
          var k = (page === pageKey() && window.LESSON_STATE_KEY) ? window.LESSON_STATE_KEY : "form-state-" + page;
          var cur = null;
          try { cur = localStorage.getItem(k); } catch (e) {}
          if (cur !== latestAnswers[page]) {
            try { localStorage.setItem(k, latestAnswers[page]); changed = true; } catch (e) {}
          }
        });
        saveP(p);
        var flag = "asc_synced_" + location.pathname;
        if (changed && !sessionStorage.getItem(flag)) {
          sessionStorage.setItem(flag, "1");
          location.reload();
        } else if (!changed) {
          sessionStorage.removeItem(flag);
        }
      })
      .catch(function () {});
  }

  var CHECK_SEL = '#checkBtn,#checkAll,[data-act="check"],[data-act="wcheck"],[data-act="icheck"],button.check,.pgbtn.chk';
  document.addEventListener("click", function (e) {
    var b = e.target && e.target.closest ? e.target.closest(CHECK_SEL) : null;
    if (!b || b.disabled) return;
    // Score only the exercise (练习) whose button was clicked, not the whole page.
    var keys = ["data-ex", "data-s", "data-es", "data-card", "data-j"].filter(function (a) { return b.hasAttribute(a); });
    var selector = keys.map(function (a) { return "[" + a + '="' + b.getAttribute(a) + '"]'; }).join("");
    setTimeout(function () {
      var cur = keys.length ? document.querySelector(selector) : null;
      var box = cur && cur.closest ? cur.closest("section, .card, .qcard") : null;
      var own = box ? box.querySelector(".muted, .fbline") : null;
      onChecked(own || document.getElementById("score") || document.querySelector(".score"));
    }, 80);
  }, true);

  restoreFormAnswers();

  // Open the page at the first exercise (练习) not yet checked, instead of the top.
  function scrollToNext() {
    var cards = document.querySelectorAll("section.card");
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      if (!c.querySelector('button[data-act="check"]')) continue;
      if (c.querySelector(".muted")) continue;
      c.scrollIntoView({ block: "start" });
      return;
    }
  }
  if (document.querySelector("section.card")) setTimeout(scrollToNext, 300);
})();
