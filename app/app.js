(() => {
  const DAYS = window.DAYS;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (w) => w.toLowerCase().replace(/[’‘]/g, "'").replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, "");
  const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

  // ---------- Progression (localStorage) ----------
  const KEY = "perfect-english-v1";
  const store = Object.assign({ done: {}, scores: {}, known: {}, active: [], evals: {}, tabs: {} }, JSON.parse(localStorage.getItem(KEY) || "{}"));
  const save = () => localStorage.setItem(KEY, JSON.stringify(store));
  const today = () => new Date().toISOString().slice(0, 10);
  function touch() {
    if (!store.active.includes(today())) { store.active.push(today()); save(); renderStats(); }
  }
  function streak() {
    let n = 0;
    const d = new Date();
    if (!store.active.includes(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
    while (store.active.includes(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  // ---------- Données ----------
  DAYS.forEach((day) => {
    day.tracks.forEach((tr) => {
      tr.segs.forEach((s, i) => {
        const words = s.x.split(" ").length;
        s.e = tr.segs[i + 1] ? tr.segs[i + 1].t : s.t + Math.max(3, words * 0.45 + 1.5);
      });
    });
  });
  const dayTitle = (d) => (d.kind === "workbook" ? "Workbook" : `${d.tracks[0].label.replace("piste ", "p.")} → ${d.tracks.at(-1).label.replace(/^CD\d piste /, "p.")}`);

  function sentencesOf(day) {
    const out = [];
    day.tracks.forEach((tr) => tr.segs.forEach((s) => {
      const n = s.x.split(" ").length;
      if (n >= 4 && n <= 16 && /[a-z]/i.test(s.x) && !/^\(|extract/i.test(s.x)) {
        out.push({ tr, text: s.x, start: s.t, end: s.e });
      }
    }));
    return out;
  }

  function rng(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const shuffle = (arr, rand) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const seeds = {};
  const seedFor = (key) => (seeds[key] ??= [...key].reduce((a, c) => a * 31 + c.charCodeAt(0), 7));

  // ---------- Audio ----------
  const audio = $("#audio");
  let stopAt = null, loopFrom = null, currentSrc = "", onTick = null;

  function playRange(tr, start, end, loop) {
    if (currentSrc !== tr.src) { audio.src = tr.src; currentSrc = tr.src; }
    const go = () => { audio.currentTime = start; stopAt = end; loopFrom = loop ? start : null; audio.play(); };
    if (audio.readyState >= 1) go(); else audio.addEventListener("loadedmetadata", go, { once: true });
  }
  function playTrack(tr) {
    if (currentSrc !== tr.src) { audio.src = tr.src; currentSrc = tr.src; }
    stopAt = null; loopFrom = null;
    audio.play();
  }
  setInterval(() => {
    if (!audio.paused && stopAt !== null && audio.currentTime >= stopAt) {
      if (loopFrom !== null) audio.currentTime = loopFrom; else { audio.pause(); stopAt = null; }
    }
    if (onTick) onTick();
  }, 80);

  // ---------- Navigation ----------
  let current = 1, tab = "lesson", view = { type: "day", n: 1 };
  const TABS = [["lesson", "Leçon"], ["quiz", "Exercices"], ["listen", "Écouter"], ["cloze", "Texte à trous"], ["order", "Ordre des mots"], ["dictation", "Dictée"], ["vocab", "Mots de l'audio"]];
  const WB_TABS = TABS.slice(0, 3);
  const DICTATION_HELP = "<b>À quoi sert la dictée ?</b> Tu écoutes une phrase de l'audio et tu l'écris en entier : tu travailles la compréhension orale et l'orthographe.<br><b>Comment faire :</b> clique sur 🔊 pour écouter (🐢 pour une lecture plus lente), écris ce que tu entends, puis clique sur « Vérifier ». Les mots justes s'affichent en vert, les mots manqués ou faux en rouge. Cet exercice est un entraînement : il ne compte pas dans la validation du jour.";

  // Une évaluation toutes les 5 leçons ; la dernière est l'évaluation finale.
  const PASS = 70;
  const CHECKPOINTS = [
    { id: 1, from: 1, after: 5 }, { id: 2, from: 6, after: 10 }, { id: 3, from: 11, after: 15 },
    { id: 4, from: 16, after: 20 }, { id: 5, from: 21, after: 25 }, { id: 6, from: 26, after: 30 },
    { id: 7, from: 31, after: 34, final: true }
  ];
  const STEPS = [];
  DAYS.forEach((d) => {
    STEPS.push({ type: "day", n: d.n });
    const c = CHECKPOINTS.find((c) => c.after === d.n);
    if (c) STEPS.push({ type: "eval", id: c.id });
  });
  const evalPassed = (id) => (store.evals[id] || 0) >= PASS;
  const stepKey = (s) => (s.type === "day" ? `day-${s.n}` : `eval-${s.id}`);
  const isLocked = (s) => {
    const upto = s.type === "day" ? s.n : CHECKPOINTS.find((c) => c.id === s.id).from;
    return CHECKPOINTS.some((c) => c.after < upto && !evalPassed(c.id));
  };
  const blockingEval = (s) => {
    const upto = s.type === "day" ? s.n : CHECKPOINTS.find((c) => c.id === s.id).from;
    return CHECKPOINTS.find((c) => c.after < upto && !evalPassed(c.id));
  };
  const evalName = (c) => (c.final ? "Évaluation finale" : `Évaluation ${c.id}`);
  const viewIndex = () => STEPS.findIndex((s) => stepKey(s) === (view.type === "day" ? `day-${view.n}` : `eval-${view.id}`));

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3500);
  }

  function renderStats() {
    const done = DAYS.filter((d) => store.done[d.n]).length;
    const evals = CHECKPOINTS.filter((c) => evalPassed(c.id)).length;
    $("#streak").textContent = `🔥 ${streak()} j`;
    $("#doneCount").textContent = `${done}/${DAYS.length} jours · ${evals}/${CHECKPOINTS.length} éval.`;
    $("#progressBar").style.width = `${((done + evals) / (DAYS.length + CHECKPOINTS.length)) * 100}%`;
  }

  function renderSidebar() {
    const cur = viewIndex();
    $("#dayList").innerHTML = STEPS.map((s, i) => {
      const locked = isLocked(s);
      if (s.type === "day") {
        const d = DAYS[s.n - 1];
        return `<button class="day-item ${i === cur ? "active" : ""} ${locked ? "locked" : ""}" data-step="${i}">
          <span>Jour ${d.n} · ${esc(LESSONS[d.n].theme)}</span>
          <span class="badge">${locked ? "🔒" : store.done[d.n] ? "✓" : ""}</span></button>`;
      }
      const c = CHECKPOINTS.find((c) => c.id === s.id);
      return `<button class="day-item eval ${i === cur ? "active" : ""} ${locked ? "locked" : ""}" data-step="${i}">
        <span>📝 ${evalName(c)}</span>
        <span class="badge">${locked ? "🔒" : store.evals[c.id] != null ? (evalPassed(c.id) ? "✓ " : "") + store.evals[c.id] + "%" : ""}</span></button>`;
    }).join("");
  }

  function goStep(i) {
    const s = STEPS[i];
    if (!s) return;
    const b = blockingEval(s);
    if (b) { toast(`Réussis d'abord l'${evalName(b).toLowerCase()} (${PASS} % minimum) pour continuer.`); return; }
    audio.pause(); onTick = null;
    if (s.type === "day") { current = s.n; tab = "lesson"; view = { type: "day", n: s.n }; } else view = { type: "eval", id: s.id };
    history.replaceState(null, "", `#${stepKey(s)}`);
    $("#sidebar").classList.remove("open");
    renderSidebar(); renderView();
    window.scrollTo(0, 0);
  }

  function stepNav() {
    const i = viewIndex();
    return `<div style="display:flex;justify-content:space-between;margin-top:8px">
      <button class="btn" id="prevStep" ${i === 0 ? "disabled" : ""}>← Précédent</button>
      <button class="btn" id="nextStep" ${i === STEPS.length - 1 ? "disabled" : ""}>Suivant →</button></div>`;
  }
  function bindStepNav() {
    const i = viewIndex();
    $("#prevStep").onclick = () => goStep(i - 1);
    $("#nextStep").onclick = () => goStep(i + 1);
  }

  function renderView() { if (view.type === "day") renderDay(); else renderEval(); }

  function renderDay() {
    const day = DAYS[current - 1], L = LESSONS[day.n];
    const tabs = day.kind === "workbook" ? WB_TABS : TABS;
    $("#main").innerHTML = `
      <div class="day-head">
        <h2>Jour ${day.n} <small class="sub">· ${esc(L.theme)}</small></h2>
        ${store.done[day.n] ? '<span class="chip ok">✓ Jour validé</span>' : `<span class="chip">Réussis les exercices à ${PASS} % pour valider</span>`}
      </div>
      <div class="day-progress"><div class="bar"><div id="dayBar"></div></div><span id="dayProgText"></span></div>
      <div class="tabs">${tabs.map(([k, l]) => `<button class="tab ${k === tab ? "active" : ""}" data-tab="${k}">${l}<span class="tick"></span></button>`).join("")}</div>
      <div id="content"></div>
      ${stepNav()}`;
    bindStepNav();
    document.querySelectorAll(".tab").forEach((b) => (b.onclick = () => { audio.pause(); onTick = null; tab = b.dataset.tab; renderDay(); }));
    const render = { lesson: renderLesson, quiz: renderDayQuiz, listen: renderListen, cloze: renderCloze, order: renderOrder, dictation: renderDictation, vocab: renderVocab }[tab];
    render(day, $("#content"));
    refreshProgress();
  }

  // Onglet terminé : leçon lue, exercices réussis, écoute lancée, entraînement vérifié, vocabulaire utilisé.
  function markTab(key) {
    const k = `${current}:${key}`;
    if (store.tabs[k]) return;
    store.tabs[k] = true; save(); refreshProgress();
  }
  function refreshProgress() {
    if (view.type !== "day" || !$("#dayBar")) return;
    const day = DAYS[current - 1];
    const tabs = day.kind === "workbook" ? WB_TABS : TABS;
    let n = 0;
    document.querySelectorAll(".tab").forEach((b) => {
      const ok = !!store.tabs[`${current}:${b.dataset.tab}`];
      b.classList.toggle("complete", ok);
      b.querySelector(".tick").textContent = ok ? " ✓" : "";
      if (ok) n++;
    });
    $("#dayBar").style.width = `${(n / tabs.length) * 100}%`;
    $("#dayProgText").textContent = n === tabs.length ? "Tous les onglets sont terminés ✓" : `${n}/${tabs.length} onglets terminés`;
  }

  // ---------- Leçon ----------
  function speak(text) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB"; u.rate = 0.9;
    speechSynthesis.speak(u);
  }

  function renderLesson(day, box) {
    const L = LESSONS[day.n];
    box.innerHTML = `
      <div class="card goal"><strong>Objectif :</strong> ${esc(L.goal)}</div>
      ${L.sections.map((s) => `
        <div class="card">
          <h2>${esc(s.h)}</h2>
          <p class="explain">${s.p}</p>
          <div class="examples">${s.ex.map(([en, fr]) => `
            <div class="example"><button class="btn small say" data-t="${esc(en)}" aria-label="Écouter">🔊</button>
              <div><div class="en">${esc(en)}</div><div class="fr">${esc(fr)}</div></div></div>`).join("")}</div>
        </div>`).join("")}
      <div class="card">
        <h2>Vocabulaire clé</h2>
        <div class="vocab-table">${L.vocab.map(([en, fr]) => `
          <div class="vrow"><button class="btn small say" data-t="${esc(en)}" aria-label="Écouter">🔊</button><strong>${esc(en)}</strong><span>${esc(fr)}</span></div>`).join("")}</div>
      </div>
      <div class="card">
        <h2>À faire avec l'audio</h2>
        <p class="explain">${esc(L.task)}</p>
        <button class="btn" id="toListen">Aller à l'écoute</button>
      </div>
      <div style="text-align:center;margin:18px 0"><button class="btn primary" id="toQuiz">Passer aux exercices →</button></div>`;
    box.querySelectorAll(".say").forEach((b) => (b.onclick = () => speak(b.dataset.t)));
    $("#toListen").onclick = () => { tab = "listen"; renderDay(); };
    $("#toQuiz").onclick = () => { tab = "quiz"; renderDay(); };
    touch();
    markTab("lesson");
  }

  // ---------- Moteur de quiz (exercices + évaluations) ----------
  const normAns = (s) => s.toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?]+$/, "");

  function runQuiz(box, qs, { submitLabel = "Valider", onSubmit, onRetry }) {
    const items = qs.map((q) => ({ q, order: q.t === "m" ? shuffle(q.o.map((_, i) => i), Math.random) : null }));
    box.innerHTML = `<div class="card">${items.map((it, k) => {
      const q = it.q;
      const text = esc(q.q).replace("___", q.t === "f" ? `<input class="blank" data-k="${k}" autocomplete="off" autocapitalize="off" spellcheck="false">` : "<b>___</b>");
      const opts = q.t === "m" ? `<div class="opts">${it.order.map((i) => `<label class="opt"><input type="radio" name="q${k}" value="${i}"><span>${esc(q.o[i])}</span></label>`).join("")}</div>` : "";
      return `<div class="ex" data-k="${k}"><div class="ex-row"><span class="num">${k + 1}.</span><div class="ex-body"><div>${text}</div>${opts}<div class="feedback"></div></div></div></div>`;
    }).join("")}
      <div style="display:flex;gap:8px;margin-top:12px"><button class="btn primary" id="qSubmit">${submitLabel}</button></div>
      <div id="qResult"></div></div>`;
    $("#qSubmit").onclick = () => {
      let ok = 0;
      const wrong = new Set();
      items.forEach((it, k) => {
        const q = it.q, ex = box.querySelector(`.ex[data-k="${k}"]`), fb = ex.querySelector(".feedback");
        let good, shown;
        if (q.t === "m") {
          const sel = ex.querySelector("input:checked");
          good = !!sel && +sel.value === q.a;
          shown = q.o[q.a];
        } else {
          const inp = ex.querySelector("input.blank");
          good = q.a.some((a) => normAns(a) === normAns(inp.value));
          shown = q.a[0];
          inp.classList.toggle("ok", good); inp.classList.toggle("bad", !good);
        }
        ex.querySelectorAll("input").forEach((i) => (i.disabled = true));
        ex.querySelectorAll(".opt").forEach((o) => {
          const v = +o.querySelector("input").value;
          if (v === q.a) o.classList.add("ok");
          else if (o.querySelector("input").checked) o.classList.add("bad");
        });
        fb.innerHTML = good ? `<span class="w-ok">✓ Correct</span>` : `<span class="w-miss">✗ Réponse : ${esc(shown)}</span> ${esc(q.e)}${q.d ? ` <em>(à revoir : jour ${q.d})</em>` : ""}`;
        if (good) ok++; else if (q.d) wrong.add(q.d);
      });
      const pct = Math.round((ok / items.length) * 100);
      $("#qSubmit").disabled = true;
      $("#qResult").innerHTML = `<div class="score ${pct >= PASS ? "pass" : "fail"}">Score : ${ok}/${items.length} (${pct} %)</div><div id="qAfter"></div>`;
      onSubmit(pct, [...wrong].sort((a, b) => a - b), $("#qAfter"));
      $("#qResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
  }

  function renderDayQuiz(day, box) {
    const qs = LESSONS[day.n].ex.map((q) => ({ ...q }));
    const draw = () => runQuiz(box, qs, {
      onSubmit(pct, _w, after) {
        store.scores[`${day.n}:quiz`] = Math.max(store.scores[`${day.n}:quiz`] || 0, pct);
        touch();
        if (pct >= PASS) markTab("quiz");
        const passed = pct >= PASS, was = store.done[day.n];
        if (passed) store.done[day.n] = true;
        save(); renderStats(); renderSidebar();
        const i = viewIndex(), next = STEPS[i + 1];
        after.innerHTML = passed
          ? `<p>Bravo, jour validé ! ${next && next.type === "eval" ? "L'évaluation est maintenant disponible." : ""}</p><button class="btn ok" id="again">Refaire</button> <button class="btn primary" id="goNext">${next ? (next.type === "eval" ? "Passer l'évaluation →" : "Jour suivant →") : "Terminer"}</button>`
          : `<p>Il faut ${PASS} % pour valider le jour. Relis la leçon puis réessaie.</p><button class="btn" id="again">Réessayer</button> <button class="btn" id="back">Relire la leçon</button>`;
        $("#again").onclick = draw;
        if ($("#goNext")) $("#goNext").onclick = () => next && goStep(i + 1);
        if ($("#back")) $("#back").onclick = () => { tab = "lesson"; renderDay(); };
        if (passed && !was) document.querySelector(".day-head .chip").outerHTML = '<span class="chip ok">✓ Jour validé</span>';
      }
    });
    draw();
  }

  // ---------- Évaluation ----------
  let attempt = 0;
  function renderEval() {
    const c = CHECKPOINTS.find((c) => c.id === view.id);
    const days = c.final ? DAYS.map((d) => d.n) : DAYS.filter((d) => d.n >= c.from && d.n <= c.after).map((d) => d.n);
    const count = c.final ? 15 : 10;
    $("#main").innerHTML = `
      <div class="day-head"><h2>📝 ${evalName(c)}</h2>${evalPassed(c.id) ? `<span class="chip ok">✓ Réussie (${store.evals[c.id]} %)</span>` : ""}</div>
      <div id="content">
        <div class="card">
          <h2>${c.final ? "Bilan de tout le programme" : `Jours ${c.from} à ${c.after}`}</h2>
          <p class="explain">${count} questions tirées des leçons ${c.final ? "de tous les jours" : `des jours ${c.from} à ${c.after}`}. Il faut au moins <b>${PASS} %</b> pour débloquer la suite. Tu peux recommencer autant de fois que nécessaire (les questions changent).</p>
          <ul class="explain">${days.map((n) => `<li>Jour ${n} : ${esc(LESSONS[n].theme)}</li>`).join("")}</ul>
          <button class="btn primary" id="startEval">${store.evals[c.id] != null ? "Recommencer l'évaluation" : "Commencer l'évaluation"}</button>
        </div>
      </div>
      ${stepNav()}`;
    bindStepNav();
    $("#startEval").onclick = () => {
      attempt++;
      const r = rng(Date.now() + attempt);
      const pool = days.flatMap((n) => LESSONS[n].ex.map((q) => ({ ...q, d: n })));
      const qs = shuffle(pool, r).slice(0, count);
      const box = $("#content");
      runQuiz(box, qs, {
        submitLabel: "Terminer l'évaluation",
        onSubmit(pct, wrongDays, after) {
          store.evals[c.id] = Math.max(store.evals[c.id] || 0, pct);
          touch(); save(); renderStats(); renderSidebar();
          const i = viewIndex(), next = STEPS[i + 1];
          if (pct >= PASS) {
            after.innerHTML = `<p>Évaluation réussie !${next ? " La suite du programme est débloquée." : " Tu as terminé tout le programme, félicitations !"}</p>${next ? '<button class="btn primary" id="goNext">Continuer →</button>' : ""}`;
            if (next) $("#goNext").onclick = () => goStep(i + 1);
          } else {
            after.innerHTML = `<p>Score insuffisant (${PASS} % requis). ${wrongDays.length ? `Revois les jours : ${wrongDays.join(", ")}.` : ""}</p><button class="btn primary" id="retry">Réessayer</button>`;
            $("#retry").onclick = renderEval;
          }
        }
      });
      window.scrollTo(0, 0);
    };
  }

  const newSetBtn = (key) => `<button class="btn small" id="newSet" data-key="${key}">↻ Nouvelle série</button>`;
  function bindNewSet(rerender) {
    const b = $("#newSet");
    if (b) b.onclick = () => { seeds[b.dataset.key] = Math.floor(Math.random() * 1e9); rerender(); };
  }
  function saveScore(key, pct) {
    store.scores[`${current}:${key}`] = Math.max(store.scores[`${current}:${key}`] || 0, pct);
    touch(); save(); markTab(key);
  }
  const bestScore = (key) => (store.scores[`${current}:${key}`] != null ? ` · meilleur score : ${store.scores[`${current}:${key}`]}%` : "");

  // ---------- Onglet : Écouter ----------
  function renderListen(day, box) {
    let ti = 0, hidden = true, loop = false, rate = 1;
    const draw = () => {
      const tr = day.tracks[ti];
      box.innerHTML = `
        <div class="card">
          <h2>Écoute</h2>
          <p class="hint">${day.kind === "workbook"
            ? "Pas de transcription pour le Workbook : écoute la piste puis fais l'exercice correspondant dans le PDF."
            : "Le texte est flouté : écoute d'abord sans lire, puis clique sur « Afficher le texte ». Clique sur une phrase pour la réécouter."}</p>
          <div class="track-select">${day.tracks.map((t, i) => `<button class="btn small ${i === ti ? "on" : ""}" data-ti="${i}">${esc(t.label)}</button>`).join("")}</div>
          <div class="player">
            <button class="btn primary" id="pp">▶ Lecture</button>
            <input type="range" id="seek" min="0" max="1000" value="0" style="flex:1;min-width:120px">
            <span id="time">0:00</span>
          </div>
          <div class="player">
            ${[0.75, 1, 1.25].map((r) => `<button class="btn small rate ${r === rate ? "on" : ""}" data-rate="${r}">×${r}</button>`).join("")}
            ${tr.segs.length ? `<button class="btn small ${loop ? "on" : ""}" id="loop">🔁 Répéter la phrase</button>
            <button class="btn small ${hidden ? "on" : ""}" id="hide">${hidden ? "Afficher" : "Masquer"} le texte</button>` : ""}
          </div>
          <div class="transcript ${hidden ? "hidden" : ""}" id="tx">
            ${tr.segs.length ? tr.segs.map((s, i) => `
              <div class="seg" data-i="${i}">
                <span class="time">${fmt(s.t)}</span>
                <span class="who">${esc(s.s)}</span>
                <span class="seg-text">${esc(s.x)}</span>
              </div>`).join("") : '<div class="empty">Audio seul</div>'}
          </div>
        </div>`;
      const pp = $("#pp"), seek = $("#seek");
      const isThis = () => currentSrc === tr.src;
      const lastIdx = (t) => tr.segs.reduce((a, s, i) => (s.t <= t ? i : a), -1);
      let shown = -2;
      audio.playbackRate = rate;
      const playing = () => isThis() && !audio.paused;
      onTick = () => {
        pp.textContent = playing() ? "⏸ Pause" : "▶ Lecture";
        if (!isThis() || !audio.duration) return;
        if (document.activeElement !== seek) seek.value = (audio.currentTime / audio.duration) * 1000;
        $("#time").textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
        const i = lastIdx(audio.currentTime);
        if (i !== shown) {
          shown = i;
          box.querySelectorAll(".seg.current").forEach((e) => e.classList.remove("current"));
          const el = box.querySelector(`.seg[data-i="${i}"]`);
          if (el) { el.classList.add("current"); const tx = $("#tx"); tx.scrollTop = el.offsetTop - tx.offsetTop - tx.clientHeight / 3; }
        }
      };
      pp.onclick = () => {
        if (playing()) { audio.pause(); return; }
        if (isThis()) { stopAt = null; loopFrom = null; audio.play(); } else playTrack(tr);
        audio.playbackRate = rate; touch(); markTab("listen");
      };
      seek.oninput = () => {
        if (!isThis()) { audio.src = tr.src; currentSrc = tr.src; audio.addEventListener("loadedmetadata", () => (audio.currentTime = (seek.value / 1000) * audio.duration), { once: true }); }
        else if (audio.duration) audio.currentTime = (seek.value / 1000) * audio.duration;
        stopAt = null; loopFrom = null;
      };
      box.querySelectorAll("[data-ti]").forEach((b) => (b.onclick = () => { audio.pause(); ti = +b.dataset.ti; draw(); }));
      box.querySelectorAll(".rate").forEach((b) => (b.onclick = () => { rate = +b.dataset.rate; audio.playbackRate = rate; draw(); }));
      const l = $("#loop"); if (l) l.onclick = () => { loop = !loop; if (!loop) loopFrom = null; draw(); };
      const h = $("#hide"); if (h) h.onclick = () => { hidden = !hidden; draw(); };
      box.querySelectorAll(".seg").forEach((el) => (el.onclick = () => {
        const s = tr.segs[+el.dataset.i];
        playRange(tr, s.t, s.e, loop); audio.playbackRate = rate; touch(); markTab("listen");
      }));
    };
    draw();
  }

  // ---------- Onglet : Texte à trous ----------
  function renderCloze(day, box) {
    const key = `${day.n}:cloze`;
    const items = shuffle(sentencesOf(day), rng(seedFor(key))).slice(0, 8);
    const r = rng(seedFor(key) + 1);
    const model = items.map((it) => {
      const tokens = it.text.match(/[A-Za-z’'-]+|[^A-Za-z’'-]+/g) || [];
      const cand = tokens.map((t, i) => [t, i]).filter(([t, i]) => i > 0 && /^[A-Za-z’'-]{4,}$/.test(t));
      const blanks = new Set(shuffle(cand, r).slice(0, cand.length > 6 ? 2 : 1).map(([, i]) => i));
      return { it, tokens, blanks };
    });
    box.innerHTML = `
      <div class="card">
        <h2>Texte à trous</h2>
        <p class="tab-help"><b>À quoi sert cet exercice ?</b> Tu écoutes des phrases de l'audio et tu retrouves les mots manquants : tu travailles la compréhension orale, l'orthographe et le repérage des mots clés.<br><b>Comment faire :</b> clique sur 🔊 pour écouter la phrase, puis écris le mot qui manque dans chaque case (la touche Entrée passe à la case suivante). Clique sur « Vérifier » : vert = bon mot, rouge = à corriger. « Voir les réponses » affiche les mots attendus. C'est un entraînement : il ne compte pas dans la validation du jour.</p>
        <p class="hint">${newSetBtn(key)}</p>
        ${items.length ? model.map((m, k) => `
          <div class="ex"><div class="ex-row"><span class="num">${k + 1}.</span>
            <div class="ex-body">${m.tokens.map((t, i) => (m.blanks.has(i) ? `<input class="blank" data-k="${k}" data-i="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${Math.max(70, t.length * 13)}px">` : esc(t))).join("")}</div>
            <button class="btn small play" data-k="${k}">🔊</button></div></div>`).join("") : '<div class="empty">Pas assez de phrases ce jour-là.</div>'}
        <div style="display:flex;gap:8px;margin-top:12px"><button class="btn primary" id="check">Vérifier</button><button class="btn" id="reveal">Voir les réponses</button></div>
        <div class="score" id="score"></div>
      </div>`;
    bindNewSet(() => renderDay());
    box.querySelectorAll(".play").forEach((b) => (b.onclick = () => { const it = model[+b.dataset.k].it; playRange(it.tr, it.start, it.end); audio.playbackRate = 1; }));
    const inputs = [...box.querySelectorAll("input.blank")];
    const answer = (inp) => model[+inp.dataset.k].tokens[+inp.dataset.i];
    inputs.forEach((inp, idx) => (inp.onkeydown = (e) => { if (e.key === "Enter") (inputs[idx + 1] || $("#check")).focus(); }));
    $("#check") && ($("#check").onclick = () => {
      let ok = 0;
      inputs.forEach((inp) => {
        const good = norm(inp.value) === norm(answer(inp));
        inp.classList.toggle("ok", good); inp.classList.toggle("bad", !good);
        if (good) ok++;
      });
      const pct = Math.round((ok / inputs.length) * 100);
      $("#score").textContent = `Score : ${ok}/${inputs.length} (${pct}%)${bestScore("cloze")}`;
      saveScore("cloze", pct);
    });
    $("#reveal") && ($("#reveal").onclick = () => inputs.forEach((inp) => { inp.value = answer(inp); inp.classList.remove("bad"); inp.classList.add("ok"); }));
  }

  // ---------- Onglet : Ordre des mots ----------
  function renderOrder(day, box) {
    const key = `${day.n}:order`;
    const r = rng(seedFor(key));
    const items = shuffle(sentencesOf(day).filter((s) => s.text.split(" ").length <= 10), r).slice(0, 6);
    const model = items.map((it) => {
      const words = it.text.split(" ");
      let bank = shuffle(words.map((w, i) => ({ w, i })), r);
      if (words.length > 1 && bank.every((b, i) => b.i === i)) bank.reverse();
      return { it, words, bank, answer: [] };
    });
    const draw = () => {
      box.innerHTML = `
        <div class="card">
          <h2>Remets les mots dans l'ordre</h2>
          <p class="tab-help"><b>À quoi sert cet exercice ?</b> Il t'entraîne à construire des phrases anglaises correctes : l'ordre des mots (sujet + verbe + complément, place des adverbes…) n'est pas toujours le même qu'en français.<br><b>Comment faire :</b> clique sur les mots mélangés (en bas) pour les placer dans l'ordre dans la zone en pointillés (en haut). Clique sur un mot placé pour le remettre en bas. Le bouton 🔊 joue la phrase pour t'aider. Puis clique sur « Vérifier » : vert = bonne phrase, rouge = à corriger. C'est un entraînement : il ne compte pas dans la validation du jour.</p>
          <p class="hint">${newSetBtn(key)}</p>
          ${items.length ? model.map((m, k) => `
            <div class="ex" data-k="${k}">
              <div class="ex-row"><span class="num">${k + 1}.</span>
                <div class="ex-body">
                  <div class="words answer">${m.answer.map((b, j) => `<button class="word" data-from="answer" data-j="${j}">${esc(b.w)}</button>`).join("")}</div>
                  <div class="words">${m.bank.map((b, j) => `<button class="word" data-from="bank" data-j="${j}">${esc(b.w)}</button>`).join("")}</div>
                </div>
                <button class="btn small play">🔊</button>
              </div>
            </div>`).join("") : '<div class="empty">Pas assez de phrases ce jour-là.</div>'}
          <div style="display:flex;gap:8px;margin-top:12px"><button class="btn primary" id="check">Vérifier</button></div>
          <div class="score" id="score"></div>
        </div>`;
      bindNewSet(() => renderDay());
      box.querySelectorAll(".ex").forEach((ex) => {
        const m = model[+ex.dataset.k];
        ex.querySelector(".play").onclick = () => { playRange(m.it.tr, m.it.start, m.it.end); audio.playbackRate = 1; };
        ex.querySelectorAll(".word").forEach((b) => (b.onclick = () => {
          const j = +b.dataset.j;
          if (b.dataset.from === "bank") m.answer.push(m.bank.splice(j, 1)[0]); else m.bank.push(m.answer.splice(j, 1)[0]);
          draw();
        }));
      });
      $("#check") && ($("#check").onclick = () => {
        let ok = 0;
        box.querySelectorAll(".ex").forEach((ex) => {
          const m = model[+ex.dataset.k];
          const good = m.answer.length === m.words.length && m.answer.every((a, i) => norm(a.w) === norm(m.words[i]));
          if (good) ok++;
          const a = ex.querySelector(".words.answer");
          a.classList.toggle("ok", good); a.classList.toggle("bad", !good);
        });
        const pct = Math.round((ok / model.length) * 100);
        $("#score").textContent = `Score : ${ok}/${model.length} (${pct}%)${bestScore("order")}`;
        saveScore("order", pct);
      });
    };
    draw();
  }

  // ---------- Onglet : Dictée ----------
  function diffWords(ref, got) {
    const n = ref.length, m = got.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
      dp[i][j] = norm(ref[i]) === norm(got[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const out = []; let i = 0, j = 0, ok = 0;
    while (i < n) {
      if (j < m && norm(ref[i]) === norm(got[j])) { out.push(`<span class="w-ok">${esc(ref[i])}</span>`); i++; j++; ok++; }
      else if (j < m && dp[i][j + 1] >= dp[i + 1][j]) j++;
      else { out.push(`<span class="w-miss">${esc(ref[i])}</span>`); i++; }
    }
    return { html: out.join(" "), ok, total: n };
  }

  function renderDictation(day, box) {
    const key = `${day.n}:dictation`;
    const items = shuffle(sentencesOf(day), rng(seedFor(key))).slice(0, 5);
    box.innerHTML = `
      <div class="card">
        <h2>Dictée</h2>
        <p class="tab-help">${DICTATION_HELP}</p>
        <p class="hint">${newSetBtn(key)}</p>
        ${items.length ? items.map((it, k) => `
          <div class="ex" data-k="${k}">
            <div class="ex-row"><span class="num">${k + 1}.</span>
              <div class="ex-body"><textarea spellcheck="false" autocapitalize="off" placeholder="Écris la phrase…"></textarea><div class="feedback"></div></div>
              <div style="display:flex;flex-direction:column;gap:6px">
                <button class="btn small play">🔊</button><button class="btn small slow">🐢</button>
              </div>
            </div>
          </div>`).join("") : '<div class="empty">Pas assez de phrases ce jour-là.</div>'}
        <div style="display:flex;gap:8px;margin-top:12px"><button class="btn primary" id="check">Vérifier</button></div>
        <div class="score" id="score"></div>
      </div>`;
    bindNewSet(() => renderDay());
    box.querySelectorAll(".ex").forEach((ex) => {
      const it = items[+ex.dataset.k];
      ex.querySelector(".play").onclick = () => { playRange(it.tr, it.start, it.end); audio.playbackRate = 1; };
      ex.querySelector(".slow").onclick = () => { playRange(it.tr, it.start, it.end); audio.playbackRate = 0.7; };
    });
    $("#check") && ($("#check").onclick = () => {
      let ok = 0, total = 0;
      box.querySelectorAll(".ex").forEach((ex) => {
        const it = items[+ex.dataset.k];
        const ta = ex.querySelector("textarea");
        const d = diffWords(it.text.split(" ").filter((w) => norm(w)), ta.value.split(/\s+/).filter(Boolean));
        ex.querySelector(".feedback").innerHTML = d.html;
        ta.classList.toggle("ok", d.ok === d.total); ta.classList.toggle("bad", d.ok !== d.total);
        ok += d.ok; total += d.total;
      });
      const pct = total ? Math.round((ok / total) * 100) : 0;
      $("#score").textContent = `Score : ${ok}/${total} mots (${pct}%)${bestScore("dictation")}`;
      saveScore("dictation", pct);
    });
  }

  // ---------- Onglet : Vocabulaire ----------
  const STOP = "about,because,before,really,something,think,would,should,could,there,their,where,which,people,going,little,another,probably,actually,together,always,never,every,thing,things,maybe,anything,everything,nothing,through,these,those,still,while,other,after,first".split(",");
  function renderVocab(day, box) {
    const freq = new Map();
    day.tracks.forEach((tr) => tr.segs.forEach((s) => {
      if (/extract/i.test(s.x)) return;
      (s.x.match(/[A-Za-z]{6,}/g) || []).forEach((w) => {
        const lw = w.toLowerCase();
        if (STOP.includes(lw)) return;
        const e = freq.get(lw) || { w: lw, n: 0, seg: null, tr };
        e.n++; if (!e.seg) e.seg = s;
        freq.set(lw, e);
      });
    }));
    const words = [...freq.values()].sort((a, b) => b.n - a.n || b.w.length - a.w.length).slice(0, 18);
    box.innerHTML = `
      <div class="card">
        <h2>Vocabulaire du jour</h2>
        <p class="hint">Clique sur 🔊 pour entendre le mot dans sa phrase, sur « Traduire » pour la traduction et les contextes d'usage, puis marque ceux que tu connais.</p>
        <div class="vocab">${words.map((v) => `
          <div class="vcard ${store.known[v.w] ? "known" : ""}" data-w="${esc(v.w)}">
            <strong>${esc(v.w)}</strong>
            <p>« ${esc(v.seg.x)} »</p>
            <div class="actions">
              <button class="btn small play">🔊</button>
              <button class="btn small tr">Traduire</button>
              <button class="btn small know">${store.known[v.w] ? "✓ Connu" : "Je connais"}</button>
            </div>
            <div class="tr-panel" hidden></div>
          </div>`).join("") || '<div class="empty">Pas de vocabulaire ce jour-là.</div>'}</div>
      </div>`;
    box.querySelectorAll(".vcard").forEach((c) => {
      const v = freq.get(c.dataset.w);
      c.querySelector(".play").onclick = () => { playRange(v.tr, v.seg.t, v.seg.e); audio.playbackRate = 1; touch(); markTab("vocab"); };
      c.querySelector(".know").onclick = (e) => {
        markTab("vocab");
        if (store.known[v.w]) delete store.known[v.w]; else store.known[v.w] = true;
        save();
        c.classList.toggle("known", !!store.known[v.w]);
        e.target.textContent = store.known[v.w] ? "✓ Connu" : "Je connais";
      };
      const panel = c.querySelector(".tr-panel");
      c.querySelector(".tr").onclick = async () => {
        panel.hidden = !panel.hidden;
        markTab("vocab");
        if (panel.hidden || panel.dataset.loaded) return;
        panel.dataset.loaded = "1";
        panel.textContent = "Chargement…";
        try { panel.innerHTML = await explainWord(v.w, v.seg.x); }
        catch { panel.dataset.loaded = ""; panel.innerHTML = `Traduction indisponible (connexion requise). <a target="_blank" rel="noopener noreferrer" href="https://www.wordreference.com/enfr/${encodeURIComponent(v.w)}">Ouvrir WordReference</a>`; }
      };
    });
  }

  // Traduction (MyMemory) et définitions (dictionaryapi.dev) : API publiques, connexion requise.
  const apiCache = {};
  const decode = (s) => new DOMParser().parseFromString(s, "text/html").documentElement.textContent;
  async function translate(text) {
    const r = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|fr`);
    if (!r.ok) throw new Error("translate");
    const j = await r.json();
    const main = decode(j.responseData.translatedText);
    const alts = [...new Set((j.matches || []).map((m) => decode(m.translation).toLowerCase()))].filter((t) => t && t !== main.toLowerCase()).slice(0, 3);
    return { main, alts };
  }
  async function definitions(word) {
    const r = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!r.ok) return [];
    const entries = await r.json();
    const out = [];
    entries.forEach((en) => en.meanings.forEach((m) => {
      const d = m.definitions[0];
      if (d && out.length < 4 && !out.some((o) => o.pos === m.partOfSpeech)) out.push({ pos: m.partOfSpeech, def: d.definition, ex: d.example || "" });
    }));
    return out;
  }
  async function explainWord(word, sentence) {
    if (apiCache[word]) return apiCache[word];
    const [wt, st, defs] = await Promise.all([translate(word), translate(sentence), definitions(word).catch(() => [])]);
    const hl = esc(sentence).replace(new RegExp(`(${word})`, "i"), "<mark>$1</mark>");
    const defsFr = await Promise.all(defs.map((d) => translate(d.def).then((t) => t.main).catch(() => "")));
    const html = `
      <div class="tr-block"><b>Traduction :</b> ${esc(wt.main)}${wt.alts.length ? ` <span class="alt">(aussi : ${wt.alts.map(esc).join(", ")})</span>` : ""}</div>
      <div class="tr-block"><b>Dans l'audio :</b> ${hl}<br><span class="alt">→ ${esc(st.main)}</span><br><span class="alt">Ici, « ${esc(word)} » prend le sens qui correspond à cette phrase.</span></div>
      ${defs.length ? `<div class="tr-block"><b>Autres contextes :</b><ul>${defs.map((d, i) => `<li><i>${esc(d.pos)}</i> — ${esc(d.def)}${defsFr[i] ? `<br><span class="alt">${esc(defsFr[i])}</span>` : ""}${d.ex ? `<br><span class="alt">Ex. : « ${esc(d.ex)} »</span>` : ""}</li>`).join("")}</ul></div>` : '<div class="tr-block alt">Pas d\'autre contexte trouvé pour ce mot.</div>'}`;
    apiCache[word] = html;
    return html;
  }

  // ---------- Démarrage ----------
  $("#dayList").addEventListener("click", (e) => { const b = e.target.closest("[data-step]"); if (b) goStep(+b.dataset.step); });
  $("#menuBtn").onclick = () => $("#sidebar").classList.toggle("open");
  const wanted = STEPS.findIndex((s) => `#${stepKey(s)}` === location.hash);
  const firstTodo = STEPS.findIndex((s) => !isLocked(s) && (s.type === "day" ? !store.done[s.n] : !evalPassed(s.id)));
  let start = wanted >= 0 && !isLocked(STEPS[wanted]) ? wanted : Math.max(firstTodo, 0);
  const s0 = STEPS[start];
  if (s0.type === "day") { current = s0.n; view = { type: "day", n: s0.n }; } else view = { type: "eval", id: s0.id };
  renderStats(); renderSidebar(); renderView();
})();
