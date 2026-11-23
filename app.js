/* =========================================================================
   THE SPICE LEDGER — app logic
   ========================================================================= */
(function () {
  "use strict";

  var BANK = window.QUESTION_BANK || { homework: [], hard: [] };
  var LS_GRADED = "spiceledger.graded.v1";

  var state = {
    difficulty: "easy",     // easy | medium | hard
    chapter: "all",         // all | 1 | 2
    index: 0,
    list: [],
    graded: loadGraded()    // { questionId: "right" | "wrong" }
  };

  // ---- element refs ----
  var $ = function (id) { return document.getElementById(id); };
  var el = {
    difficulty: $("difficulty"), chapter: $("chapter"),
    card: $("card"), empty: $("empty"),
    qCode: $("qCode"), qTopic: $("qTopic"), qCounter: $("qCounter"),
    qTitle: $("qTitle"), qPrompt: $("qPrompt"),
    selfcheck: $("selfcheck"), checkToggle: $("checkToggle"), checkBody: $("checkBody"),
    tipBtn: $("tipBtn"), revealBtn: $("revealBtn"),
    tipPanel: $("tipPanel"), tipBody: $("tipBody"),
    solnPanel: $("solnPanel"), solnBody: $("solnBody"),
    gradeRight: $("gradeRight"), gradeWrong: $("gradeWrong"),
    prevBtn: $("prevBtn"), nextBtn: $("nextBtn"), shuffleBtn: $("shuffleBtn"),
    scoreRight: $("scoreRight"), scoreWrong: $("scoreWrong"), resetScore: $("resetScore"),
    reportBtn: $("reportBtn"), reportModal: $("reportModal"), reportBody: $("reportBody"),
    reportClose: $("reportClose"), reportBackdrop: $("reportBackdrop"), printReport: $("printReport")
  };

  var CHAPTER_NAMES = {
    1: "Managerial Accounting Intro", 2: "Job-Order Costing", 3: "Process Costing",
    4: "Cost-Volume-Profit", 5: "Variable Costing", 6: "Cost Allocation",
    7: "Decision Making (Relevant Costs)", 8: "Pricing & Customer Profitability",
    9: "Capital Budgeting", 10: "Budgetary Planning", 11: "Standard Costs & Variances",
    12: "Decentralization (ROI/EVA)", 13: "Statement of Cash Flows",
    14: "Financial Statement Analysis"
  };

  // ---- persistence (safe) ----
  function loadGraded() {
    try { return JSON.parse(localStorage.getItem(LS_GRADED)) || {}; }
    catch (e) { return {}; }
  }
  function saveGraded() {
    try { localStorage.setItem(LS_GRADED, JSON.stringify(state.graded)); }
    catch (e) { /* private mode / blocked — ignore */ }
  }

  // ---- data ----
  function pool() {
    return state.difficulty === "hard" ? (BANK.hard || []) : (BANK.homework || []);
  }
  function allChapters() {
    var set = {};
    (BANK.homework || []).concat(BANK.hard || []).forEach(function (q) { set[q.chapter] = true; });
    return Object.keys(set).map(Number).sort(function (a, b) { return a - b; });
  }
  function buildChapterButtons() {
    var chaps = allChapters();
    var html = '<button data-chap="all" class="is-active">All</button>';
    chaps.forEach(function (c) { html += '<button data-chap="' + c + '">' + c + "</button>"; });
    el.chapter.innerHTML = html;
  }
  function buildList() {
    state.list = pool().filter(function (q) {
      return state.chapter === "all" || String(q.chapter) === String(state.chapter);
    });
    if (state.index >= state.list.length) state.index = 0;
    if (state.index < 0) state.index = 0;
  }

  // ---- rendering ----
  function render() {
    buildList();
    updateScore();

    if (!state.list.length) {
      el.card.hidden = true;
      el.empty.hidden = false;
      el.prevBtn.disabled = el.nextBtn.disabled = el.shuffleBtn.disabled = true;
      return;
    }
    el.card.hidden = false;
    el.empty.hidden = true;
    el.prevBtn.disabled = el.nextBtn.disabled = el.shuffleBtn.disabled = false;

    var q = state.list[state.index];

    el.qCode.textContent = q.code;
    el.qTopic.textContent = q.topic || "";
    el.qCounter.textContent = (state.index + 1) + " / " + state.list.length;
    el.qTitle.textContent = q.title;
    el.qPrompt.innerHTML = q.prompt;

    // tip button — EASY only, and only if a tip exists
    var showTip = state.difficulty === "easy" && q.tip;
    el.tipBtn.hidden = !showTip;

    // reset panels
    el.tipPanel.hidden = true;
    el.solnPanel.hidden = true;
    el.tipBody.innerHTML = q.tip || "";
    el.solnBody.innerHTML = q.solution || "";

    // self-check
    renderChecks(q);

    // reflect prior grade on buttons
    reflectGrade(q.id);

    // scroll card into view on navigation (not first paint)
    if (render._painted) el.card.scrollIntoView({ behavior: "smooth", block: "start" });
    render._painted = true;
  }

  function renderChecks(q) {
    var checks = q.checks || [];
    el.checkBody.innerHTML = "";
    if (!checks.length) { el.selfcheck.hidden = true; return; }
    el.selfcheck.hidden = false;
    el.checkToggle.setAttribute("aria-expanded", "false");
    el.checkBody.hidden = true;

    checks.forEach(function (c, i) {
      var row = document.createElement("div");
      row.className = "check-row";

      var label = document.createElement("label");
      label.setAttribute("for", "chk-" + i);
      label.textContent = c.label;

      var field = document.createElement("div");
      field.className = "field";

      var input = document.createElement("input");
      input.type = "text";
      input.id = "chk-" + i;
      input.inputMode = "decimal";
      input.setAttribute("autocomplete", "off");
      input.placeholder = c.fmt === "money" ? "$ …" : "…";

      var verdict = document.createElement("span");
      verdict.className = "verdict";
      verdict.textContent = "";

      input.addEventListener("input", function () {
        evaluate(input, c, verdict);
      });

      field.appendChild(input);
      field.appendChild(verdict);
      row.appendChild(label);
      row.appendChild(field);
      el.checkBody.appendChild(row);
    });
  }

  function parseNum(raw) {
    if (raw == null) return NaN;
    var s = String(raw).trim();
    if (!s) return NaN;
    var neg = /^\(.*\)$/.test(s) || /-/.test(s);   // (1,234) or -1,234 => negative
    s = s.replace(/[(),$%\s]/g, "").replace(/-/g, "");
    var n = parseFloat(s);
    if (isNaN(n)) return NaN;
    return neg ? -n : n;
  }

  function evaluate(input, c, verdict) {
    var v = parseNum(input.value);
    if (isNaN(v)) { verdict.textContent = ""; verdict.className = "verdict"; return; }
    var tol = (c.tol != null) ? c.tol : 0.01;
    if (Math.abs(v - c.answer) <= tol) {
      verdict.textContent = "✓"; verdict.className = "verdict ok";
    } else {
      verdict.textContent = "✗"; verdict.className = "verdict no";
    }
  }

  // ---- grading / score ----
  function reflectGrade(id) {
    var g = state.graded[id];
    el.gradeRight.style.opacity = (g === "right") ? "1" : ".75";
    el.gradeWrong.style.opacity = (g === "wrong") ? "1" : ".75";
    el.gradeRight.style.outline = (g === "right") ? "1px solid var(--ok)" : "none";
    el.gradeWrong.style.outline = (g === "wrong") ? "1px solid var(--warn)" : "none";
  }
  function setGrade(status) {
    var q = state.list[state.index];
    if (!q) return;
    state.graded[q.id] = status;
    saveGraded();
    updateScore();
    reflectGrade(q.id);
  }
  function updateScore() {
    var right = 0, wrong = 0;
    for (var k in state.graded) {
      if (state.graded[k] === "right") right++;
      else if (state.graded[k] === "wrong") wrong++;
    }
    el.scoreRight.textContent = right;
    el.scoreWrong.textContent = wrong;
  }

  // ---- navigation ----
  function go(delta) {
    if (!state.list.length) return;
    state.index = (state.index + delta + state.list.length) % state.list.length;
    render();
  }
  function shuffle() {
    if (state.list.length < 2) return;
    var n;
    do { n = Math.floor(Math.random() * state.list.length); } while (n === state.index);
    state.index = n;
    render();
  }

  // ---- cheat-sheet report ----
  function questionLookup() {
    var map = {};
    (BANK.homework || []).concat(BANK.hard || []).forEach(function (q) { map[q.id] = q; });
    return map;
  }
  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return c === "&" ? "&amp;" : c === "<" ? "&lt;" : "&gt;";
    });
  }
  function renderReport() {
    var lookup = questionLookup();
    // total questions available per chapter
    var totalByCh = {};
    for (var id in lookup) { var c = lookup[id].chapter; totalByCh[c] = (totalByCh[c] || 0) + 1; }

    // graded, grouped by chapter
    var byCh = {}, totRight = 0, totWrong = 0;
    for (var gid in state.graded) {
      var q = lookup[gid]; if (!q) continue;
      var ch = q.chapter;
      byCh[ch] = byCh[ch] || { right: [], wrong: [] };
      byCh[ch][state.graded[gid]].push(q);
      if (state.graded[gid] === "right") totRight++; else totWrong++;
    }
    var graded = totRight + totWrong;

    if (!graded) {
      el.reportBody.innerHTML =
        '<p class="rep-empty">No questions graded yet.<br>' +
        'Reveal a solution, then tap <strong>Got it</strong> or <strong>Review again</strong>. ' +
        'Once you\'ve marked a few, this report shows what to put on your cheat sheet.</p>';
      return;
    }

    var html = "";
    // summary tiles
    var acc = Math.round((totRight / graded) * 100);
    html += '<div class="rep-summary">' +
      '<div class="rep-stat"><span class="num">' + graded + '</span><span class="lbl">Graded</span></div>' +
      '<div class="rep-stat"><span class="num">' + totRight + '</span><span class="lbl">Got it</span></div>' +
      '<div class="rep-stat"><span class="num">' + totWrong + '</span><span class="lbl">To review</span></div>' +
      '<div class="rep-stat"><span class="num">' + acc + '%</span><span class="lbl">Accuracy</span></div>' +
      '</div>';

    // weaknesses: chapters with any "wrong", sorted by wrong desc, then accuracy asc
    var weak = Object.keys(byCh).filter(function (c) { return byCh[c].wrong.length > 0; });
    weak.sort(function (a, b) {
      if (byCh[b].wrong.length !== byCh[a].wrong.length) return byCh[b].wrong.length - byCh[a].wrong.length;
      var accA = byCh[a].right.length / (byCh[a].right.length + byCh[a].wrong.length);
      var accB = byCh[b].right.length / (byCh[b].right.length + byCh[b].wrong.length);
      return accA - accB;
    });

    html += '<div class="rep-section rep-weak"><h3>&#9888; Put these on your cheat sheet</h3>' +
      '<p class="rep-hint">Topics you marked &ldquo;review again&rdquo; &mdash; your weak spots, ranked worst first.</p>';
    if (!weak.length) {
      html += '<p class="rep-hint">Nothing marked for review yet &mdash; nice.</p>';
    }
    weak.forEach(function (c) {
      html += chapterBlock(c, byCh[c], totalByCh[c], true);
    });
    html += '</div>';

    // strengths: chapters with right>0 and wrong==0
    var strong = Object.keys(byCh).filter(function (c) {
      return byCh[c].wrong.length === 0 && byCh[c].right.length > 0;
    }).sort(function (a, b) { return a - b; });
    if (strong.length) {
      html += '<div class="rep-section rep-strong"><h3>&#10003; You can skip these</h3>' +
        '<p class="rep-hint">All graded questions correct &mdash; don\'t waste cheat-sheet space here.</p>' +
        '<div class="rep-chips">';
      strong.forEach(function (c) {
        html += '<span class="rep-chip">Ch ' + c + ' &middot; ' + esc(CHAPTER_NAMES[c] || "") +
          ' (' + byCh[c].right.length + '/' + totalByCh[c] + ')</span>';
      });
      html += '</div></div>';
    }

    // not practiced: chapters with available questions but nothing graded
    var todo = Object.keys(totalByCh).filter(function (c) { return !byCh[c]; })
      .map(Number).sort(function (a, b) { return a - b; });
    if (todo.length) {
      html += '<div class="rep-section rep-todo"><h3>&#9675; Not practiced yet</h3>' +
        '<p class="rep-hint">Grade some of these before trusting the report.</p><div class="rep-chips">';
      todo.forEach(function (c) {
        html += '<span class="rep-chip">Ch ' + c + ' &middot; ' + esc(CHAPTER_NAMES[c] || "") + '</span>';
      });
      html += '</div></div>';
    }

    html += '<p class="rep-note">Tip: a cheat sheet is best spent on formula-heavy, easy-to-forget ' +
      'procedures &mdash; exactly the ones you keep missing above. What you already know, leave off.</p>';

    el.reportBody.innerHTML = html;
  }
  function chapterBlock(c, g, total, showTopics) {
    var done = g.right.length + g.wrong.length;
    var accPct = Math.round((g.right.length / done) * 100);
    var s = '<div class="rep-chapter"><div class="rep-chapter-top">' +
      '<span class="rep-chapter-name">Ch ' + c + ' &middot; ' + esc(CHAPTER_NAMES[c] || "") + '</span>' +
      '<span class="rep-chapter-meta">' + g.wrong.length + ' to review &middot; ' +
      accPct + '% of ' + done + ' graded</span></div>';
    var barColor = accPct >= 70 ? "var(--ok)" : accPct >= 40 ? "var(--spice)" : "var(--warn)";
    s += '<div class="rep-bar"><span style="width:' + accPct + '%;background:' + barColor + '"></span></div>';
    if (showTopics) {
      // list the specific questions marked wrong (dedup by code)
      var seen = {};
      s += '<ul class="rep-topics">';
      g.wrong.forEach(function (q) {
        if (seen[q.code]) return; seen[q.code] = 1;
        s += '<li><span class="code">' + esc(q.code) + '</span><span>' +
          esc(q.topic || q.title) + '</span></li>';
      });
      s += '</ul>';
    }
    return s + '</div>';
  }
  function openReport() { renderReport(); el.reportModal.hidden = false; }
  function closeReport() { el.reportModal.hidden = true; }

  // ---- segmented control wiring ----
  function wireSegmented(container, attr, onPick) {
    container.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn || !container.contains(btn)) return;
      Array.prototype.forEach.call(container.querySelectorAll("button"), function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");
      onPick(btn.getAttribute(attr));
    });
  }

  // ---- events ----
  wireSegmented(el.difficulty, "data-diff", function (v) {
    state.difficulty = v; state.index = 0; render();
  });
  wireSegmented(el.chapter, "data-chap", function (v) {
    state.chapter = v; state.index = 0; render();
  });

  el.checkToggle.addEventListener("click", function () {
    var open = el.checkBody.hidden;
    el.checkBody.hidden = !open;
    el.checkToggle.setAttribute("aria-expanded", String(open));
  });

  el.tipBtn.addEventListener("click", function () {
    el.tipPanel.hidden = !el.tipPanel.hidden;
  });
  el.revealBtn.addEventListener("click", function () {
    el.solnPanel.hidden = false;
    el.solnPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  el.gradeRight.addEventListener("click", function () { setGrade("right"); });
  el.gradeWrong.addEventListener("click", function () { setGrade("wrong"); });

  el.prevBtn.addEventListener("click", function () { go(-1); });
  el.nextBtn.addEventListener("click", function () { go(1); });
  el.shuffleBtn.addEventListener("click", shuffle);

  el.resetScore.addEventListener("click", function () {
    state.graded = {}; saveGraded(); updateScore(); reflectGrade(null);
    if (!el.reportModal.hidden) renderReport();
  });

  el.reportBtn.addEventListener("click", openReport);
  el.reportClose.addEventListener("click", closeReport);
  el.reportBackdrop.addEventListener("click", closeReport);
  el.printReport.addEventListener("click", function () { window.print(); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !el.reportModal.hidden) { closeReport(); return; }
    if (!el.reportModal.hidden) return;                      // modal open: ignore nav keys
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  });

  // ---- boot ----
  buildChapterButtons();
  render();
})();
