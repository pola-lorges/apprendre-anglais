// Aides de rédaction des leçons : M = QCM (bonne réponse = index), F = texte à compléter (réponses séparées par |).
window.LESSONS = {};
window.M = (q, o, a, e = "") => ({ t: "m", q, o, a, e });
window.F = (q, a, e = "") => ({ t: "f", q, a: a.split("|"), e });
