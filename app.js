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
    scoreRight: $("scoreRight"), scoreWrong: $("scoreWrong"), resetScore: $("resetScore")
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
  });

  document.addEventListener("keydown", function (e) {
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  });

  // ---- boot ----
  buildChapterButtons();
  render();
})();
