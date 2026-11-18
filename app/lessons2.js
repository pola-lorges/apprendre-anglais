LESSONS[10] = {
  theme: "Poser des questions poliment",
  goal: "Faire des demandes et des questions indirectes polies (Could you tell me…? Do you mind if…?).",
  sections: [
    { h: "Questions indirectes", p: "Après <b>Could you tell me…? / Do you know…?</b> l'ordre des mots devient celui d'une phrase affirmative : <b>sujet + verbe</b>, sans do/does. Pour une question oui/non, on utilise <b>if</b> ou <b>whether</b>.<br><i>Where is the station? → Could you tell me where the station is?</i>",
      ex: [["Could you tell me what time it is, please?", "Pouvez-vous me dire l'heure, s'il vous plaît ?"], ["Could you tell me if you have this jacket in blue?", "Pourriez-vous me dire si vous avez cette veste en bleu ?"]] },
    { h: "Demander la permission", p: "<b>Do you mind if I + verbe ?</b> — <i>No, not at all. / Of course not.</i> <b>Would you mind + -ing ?</b> pour demander à quelqu'un de faire quelque chose.",
      ex: [["Do you mind if I borrow your pen?", "Ça vous dérange si j'emprunte votre stylo ?"], ["Would you mind closing the door?", "Cela vous dérangerait-il de fermer la porte ?"]] }
  ],
  vocab: [["borrow", "emprunter"], ["a return ticket", "un aller-retour"], ["stamps", "timbres"], ["Excuse me", "Excusez-moi"], ["not at all", "pas du tout"], ["Could you…?", "Pourriez-vous… ?"], ["customer", "client"]],
  task: "Écoute la piste 31 (à la gare) : quelles formules polies entends-tu ?",
  ex: [
    M("Could you tell me ___ it is?", ["what time", "what time is", "what is time"], 0, "Ordre affirmatif : what time it is."),
    M("Could you tell me where ___?", ["is the station", "the station is", "does the station is"], 1, "the station is."),
    M("Do you mind if I ___ your pen?", ["borrow", "borrowing", "to borrow"], 0, "if I + base."),
    M("Quelle phrase est la plus polie ?", ["Give me a ticket.", "Can I have a ticket, please?", "I want a ticket."], 1, "Can I have… please ?"),
    F("Could you tell me ___ you have this jacket in blue?", "if|whether", "Question oui/non indirecte : if."),
    M("Excuse me, do you know ___ the bank is?", ["where", "where is", "where does"], 0, "where + sujet + verbe."),
    F("Would you mind ___ (close) the door?", "closing", "mind + -ing.")
  ]
};

LESSONS[11] = {
  theme: "Conseils et obligations : should, must, have to",
  goal: "Donner un conseil, exprimer une obligation et une interdiction.",
  sections: [
    { h: "Conseil", p: "<b>should / shouldn't + base</b> : <i>You should go to bed early.</i> <b>Why don't you…?</b> est aussi un conseil.",
      ex: [["You shouldn't sit around doing nothing.", "Tu ne devrais pas rester là à ne rien faire."], ["You should go to bed early.", "Tu devrais te coucher tôt."]] },
    { h: "Obligation, absence d'obligation, interdiction", p: "<b>must / have to</b> = obligation. <b>don't have to</b> = ce n'est pas nécessaire (optionnel). <b>mustn't / can't</b> = interdit.<br>Attention : <i>You don't have to come</i> (pas obligé) ≠ <i>You mustn't come</i> (interdit).",
      ex: [["You can't go out every night.", "Tu ne peux pas sortir tous les soirs."], ["I have to get up early on weekdays.", "Je dois me lever tôt en semaine."], ["You mustn't smoke here.", "Il est interdit de fumer ici."], ["You don't have to wear a uniform.", "Tu n'es pas obligé de porter un uniforme."]] }
  ],
  vocab: [["should", "devoir (conseil)"], ["must", "devoir (obligation)"], ["have to", "devoir"], ["forbidden", "interdit"], ["optional", "facultatif"], ["rule", "règle"], ["advice", "conseil(s)"]],
  task: "Écoute la piste 35 : quels conseils sont donnés pour le week-end ?",
  ex: [
    M("You ___ smoke here. It's forbidden.", ["mustn't", "don't have to", "shouldn't to"], 0, "Interdiction : mustn't."),
    M("You ___ wear a uniform; it's optional.", ["mustn't", "don't have to", "can't"], 1, "Pas obligatoire : don't have to."),
    M("You look tired. You ___ go to bed early.", ["should", "must to", "have"], 0, "Conseil : should."),
    F("You ___ eat too much sugar. (conseil négatif)", "shouldn't|should not", "shouldn't + base."),
    M("I ___ get up early on weekdays.", ["have to", "must to", "should to"], 0, "have to = obligation."),
    M("« You can't park here » signifie :", ["C'est interdit", "C'est optionnel", "C'est conseillé"], 0, "can't = interdit."),
    F("He ___ to wear a tie. (il n'est pas obligé)", "doesn't have|does not have", "3e personne : doesn't have to.")
  ]
};

LESSONS[12] = {
  theme: "Souvenirs d'enfance : used to",
  goal: "Parler d'habitudes et d'états passés qui n'existent plus.",
  sections: [
    { h: "used to + verbe", p: "<b>used to + base</b> décrit une habitude ou un état du passé qui n'est plus vrai. Négatif : <b>didn't use to</b>. Question : <b>Did you use to…?</b> (sans -d après did). On ne l'utilise pas pour un événement unique.",
      ex: [["Every summer, I used to go to the beach.", "Chaque été, j'allais à la plage."], ["She didn't use to like fish.", "Elle n'aimait pas le poisson avant."], ["Did you use to live in a village?", "Habitais-tu dans un village avant ?"]] },
    { h: "Parler de son enfance", p: "<b>When I was a child… / Growing up… / Back then…</b> introduisent un souvenir.",
      ex: [["Back then, we didn't have a computer.", "À l'époque, nous n'avions pas d'ordinateur."]] }
  ],
  vocab: [["childhood", "enfance"], ["growing up", "en grandissant"], ["back then", "à l'époque"], ["every summer", "chaque été"], ["used to", "avoir l'habitude de (passé)"], ["memory", "souvenir"], ["village", "village"]],
  task: "Écoute la piste 39 : quels trois souvenirs d'enfance sont cités ?",
  ex: [
    M("I ___ play outside every summer.", ["use to", "used to", "was use to"], 1, "used to (affirmatif)."),
    F("She didn't ___ to like fish.", "use", "Après didn't : use to (sans d)."),
    M("Did you ___ live in a village?", ["used to", "use to", "using to"], 1, "did + use to."),
    M("« I used to smoke » signifie :", ["Je fume maintenant", "Je fumais avant (plus maintenant)", "Je vais fumer"], 1, "Habitude passée."),
    F("When I was a child, I used to ___ (go) to the beach.", "go", "used to + base."),
    M("Avec used to, on ne peut PAS parler :", ["d'une habitude passée", "d'un état passé", "d'un événement unique"], 2, "Pas pour un événement unique."),
    F("He ___ use to wear glasses. (négatif)", "didn't|did not", "Négatif : didn't use to.")
  ]
};

LESSONS[13] = {
  theme: "Prédire l'avenir : will / won't",
  goal: "Faire des prévisions et exprimer son opinion sur l'avenir.",
  sections: [
    { h: "will + base", p: "<b>will / won't + verbe de base</b> pour une prévision ou une opinion : <i>I think tourism will change the island.</i> Question : <b>Will + sujet + base ?</b> Réponse courte : <i>Yes, it will. / No, it won't.</i> Contraction : <b>'ll</b>.",
      ex: [["Yes, I think it'll change it a lot.", "Oui, je pense que ça le changera beaucoup."], ["Where will you live?", "Où habiteras-tu ?"], ["I don't think it will be easy.", "Je ne pense pas que ce sera facile."]] },
    { h: "Expressions d'opinion", p: "<b>I think… / I don't think… / I'm sure… / probably</b>. En français on dit « je ne pense pas que ce sera » ; en anglais on place la négation sur <i>think</i>.",
      ex: [["I'm sure he'll pass the test.", "Je suis sûr qu'il réussira l'examen."]] }
  ],
  vocab: [["tourism", "tourisme"], ["island", "île"], ["change", "changer"], ["I'm sure", "je suis sûr"], ["probably", "probablement"], ["in the future", "dans le futur"], ["prediction", "prédiction"]],
  task: "Écoute la piste 41 (Tourism Today) : l'île va-t-elle changer ?",
  ex: [
    M("I think tourism ___ the island.", ["will change", "is change", "changes will"], 0, "will + base."),
    F("I don't think it ___ (be) easy.", "will be|'ll be", "will + be."),
    M("Négatif de will :", ["willn't", "won't", "don't will"], 1, "won't."),
    M("Will she come? Réponse courte « oui » :", ["Yes, she will.", "Yes, she does.", "Yes, she is."], 0, "Réponse avec will."),
    M("Quelle phrase est une prévision ?", ["I think it will rain.", "I rain tomorrow.", "I'm rain."], 0, "will + base."),
    F("___ you be at home tonight?", "Will", "Question avec will."),
    M("will est suivi de :", ["verbe + -ing", "verbe de base", "to + verbe"], 1, "Toujours la base.")
  ]
};

LESSONS[14] = {
  theme: "Les vacances : possibilités avec may / might",
  goal: "Exprimer une possibilité et parler de lieux de vacances.",
  sections: [
    { h: "may / might", p: "<b>may / might + base</b> = peut-être (une possibilité, moins sûr que will). Négatif : <b>may not / might not</b>. <i>It might rain tomorrow.</i> (il se peut qu'il pleuve).",
      ex: [["We might go to Spain this summer.", "Nous irons peut-être en Espagne cet été."], ["She may be late.", "Elle sera peut-être en retard."], ["He might not come.", "Il ne viendra peut-être pas."]] },
    { h: "Décrire un lieu", p: "<b>unspoilt</b> (préservé), <b>romantic</b>, <b>a coast town</b> (ville côtière), <b>mountain, lake, tour guide</b>. Le son /eə/ dans <i>hair, where</i> et /ɪə/ dans <i>year, near</i> : écoute la piste 44.",
      ex: [["It's an unspoilt island with beautiful beaches.", "C'est une île préservée avec de belles plages."]] }
  ],
  vocab: [["unspoilt", "préservé"], ["coast", "côte"], ["mountain", "montagne"], ["lake", "lac"], ["tour guide", "guide touristique"], ["romantic", "romantique"], ["holiday", "vacances"]],
  task: "Écoute les pistes 43 à 45 : où partait-on en vacances enfant ?",
  ex: [
    M("It ___ rain tomorrow. (peut-être)", ["might", "mights", "is might"], 0, "might + base."),
    F("We ___ go to Spain. (possibilité)", "might|may", "may / might."),
    M("« She may be late » signifie :", ["Elle est sûrement en retard", "Elle sera peut-être en retard", "Elle n'est pas en retard"], 1, "Possibilité."),
    M("An unspoilt beach is…", ["préservée", "bondée", "chère"], 0, "unspoilt = non abîmé."),
    M("A coast town is by…", ["the sea", "a mountain", "a lake"], 0, "coast = côte."),
    F("He ___ come. (peut-être pas)", "might not|may not", "Négatif : might not."),
    M("A tour guide is someone who…", ["shows tourists around", "drives a taxi", "sells tickets only"], 0, "guide touristique.")
  ]
};

LESSONS[15] = {
  theme: "Si… alors : la condition réelle (first conditional)",
  goal: "Parler de conséquences probables avec if + présent, will + base.",
  sections: [
    { h: "Structure", p: "<b>If + présent simple, will + base</b>. On ne met <u>jamais</u> will après if. On peut inverser les deux parties. <b>unless</b> = if not.<br><i>If you eat junk food, you'll put on weight.</i>",
      ex: [["If you eat a lot of junk food, you'll put on weight.", "Si tu manges beaucoup de malbouffe, tu prendras du poids."], ["If she continues to spend it all, she won't have any money left.", "Si elle continue de tout dépenser, elle n'aura plus d'argent."], ["I'll call you if I have time.", "Je t'appellerai si j'ai le temps."]] },
    { h: "Unless", p: "<b>Unless you start eating well, you'll get ill</b> = <i>If you don't start eating well…</i>",
      ex: [["Unless it rains, we'll go to the beach.", "À moins qu'il pleuve, nous irons à la plage."]] }
  ],
  vocab: [["junk food", "malbouffe"], ["put on weight", "prendre du poids"], ["unless", "à moins que"], ["money left", "argent restant"], ["get ill", "tomber malade"], ["healthy", "sain"], ["if", "si"]],
  task: "Écoute les pistes 4 et 5 : repère les phrases avec « If ».",
  ex: [
    M("If you eat junk food, you ___ put on weight.", ["will", "would", "are"], 0, "if + présent, will + base."),
    F("If it rains, we ___ (stay) home.", "will stay|'ll stay", "will + base."),
    M("If she ___, she won't have money.", ["spends it all", "will spend it all", "spent it all"], 0, "Après if : présent simple."),
    F("If you don't start eating well, you ___ get ill.", "will|'ll", "Conséquence : will."),
    M("Structure : If + ___, will + base", ["présent simple", "futur", "prétérit"], 0, "Présent simple."),
    M("Unless signifie :", ["if not", "if", "because"], 0, "unless = if not."),
    F("I'll call you if I ___ (have) time.", "have", "Présent après if."),
    M("Quelle phrase est correcte ?", ["If I will see him, I'll tell him.", "If I see him, I'll tell him.", "If I saw him, I'll tell him."], 1, "if + présent.")
  ]
};

LESSONS[16] = {
  theme: "Décrire la personnalité : les adjectifs de caractère",
  goal: "Décrire quelqu'un et former des contraires avec les préfixes.",
  sections: [
    { h: "Adjectifs de personnalité", p: "<b>ambitious</b> (ambitieux), <b>chatty</b> (bavard), <b>easy-going</b> (décontracté), <b>hard-working</b> (travailleur), <b>lazy</b> (paresseux), <b>open</b> (ouvert), <b>organised</b> (organisé), <b>reserved</b> (réservé), <b>sensitive</b> (sensible), <b>unreliable</b> (pas fiable). On dit : <i>She is ambitious.</i> / <i>I'm quite organised.</i>",
      ex: [["Are you ambitious?", "Es-tu ambitieux ?"], ["Are you more open or more reserved?", "Es-tu plutôt ouvert ou réservé ?"], ["He's very unreliable; he's always late.", "Il n'est pas fiable ; il est toujours en retard."]] },
    { h: "Les contraires", p: "Préfixes : <b>un-</b> (unhappy, unreliable), <b>dis-</b> (dishonest, disorganised), <b>im-</b> devant p/m (impatient, impolite), <b>in-</b> (insecure).",
      ex: [["She's impatient.", "Elle est impatiente."], ["He's dishonest.", "Il est malhonnête."]] }
  ],
  vocab: [["ambitious", "ambitieux"], ["chatty", "bavard"], ["easy-going", "décontracté"], ["hard-working", "travailleur"], ["lazy", "paresseux"], ["reserved", "réservé"], ["sensitive", "sensible"]],
  task: "Écoute la piste 6 : répète chaque adjectif en respectant l'accent de mot.",
  ex: [
    M("A « lazy » person doesn't like…", ["working", "sleeping", "eating"], 0, "lazy = paresseux."),
    M("Someone who talks a lot is…", ["chatty", "reserved", "lazy"], 0, "chatty = bavard."),
    M("« Easy-going » means…", ["décontracté", "nerveux", "strict"], 0, "easy-going."),
    M("You can't rely on an ___ person.", ["unreliable", "organised", "ambitious"], 0, "unreliable."),
    F("Contraire de reliable : ___", "unreliable", "Préfixe un-."),
    M("Préfixe pour le contraire de « patient » :", ["un", "dis", "im"], 2, "impatient."),
    M("A reserved person…", ["is shy and keeps feelings private", "talks all the time", "never works"], 0, "reserved = réservé."),
    M("An ambitious person wants…", ["success", "silence", "holidays only"], 0, "ambition = réussite.")
  ]
};

LESSONS[17] = {
  theme: "La santé : symptômes et conseils",
  goal: "Dire où on a mal et donner des conseils.",
  sections: [
    { h: "Décrire un problème", p: "<b>I've got a headache / stomachache / sore throat / temperature</b>. <b>I feel sick / ill / tired</b>. <b>What's the matter?</b> = qu'est-ce qui ne va pas ? Verbes utiles : <b>cough</b> (tousser), <b>sneeze</b> (éternuer).",
      ex: [["What's the matter? — I feel sick and I've got stomachache.", "Qu'y a-t-il ? — Je me sens mal et j'ai mal au ventre."], ["I can't stop coughing!", "Je n'arrête pas de tousser !"]] },
    { h: "Donner un conseil", p: "<b>You should + base</b> / <b>Why don't you + base ?</b> / <b>Try + -ing</b>. <i>Why don't you try hot water with honey and lemon?</i>",
      ex: [["You should see a doctor.", "Tu devrais voir un médecin."], ["Why don't you try hot water with honey?", "Pourquoi n'essaies-tu pas de l'eau chaude avec du miel ?"]] }
  ],
  vocab: [["headache", "mal de tête"], ["stomachache", "mal au ventre"], ["sore throat", "mal de gorge"], ["cough", "tousser / toux"], ["temperature", "fièvre"], ["feel sick", "avoir la nausée"], ["see a doctor", "consulter un médecin"]],
  task: "Écoute la piste 10 : quels remèdes sont proposés à Georgia ?",
  ex: [
    M("Why don't you ___ some honey?", ["try", "to try", "trying"], 0, "Why don't you + base."),
    M("You ___ see a doctor.", ["should", "shoulds", "are"], 0, "should + base."),
    F("I can't stop ___ (cough).", "coughing", "stop + -ing."),
    M("Quelle phrase est un conseil ?", ["Why don't you rest?", "I rest.", "You rested."], 0, "Why don't you…?"),
    F("You ___ (not) work so hard.", "shouldn't|should not", "Conseil négatif."),
    M("« Sore throat » =", ["mal à la gorge", "mal au ventre", "mal au dos"], 0, "sore throat."),
    M("What's the matter? — ___", ["I've got a headache.", "I'm Monday.", "It's a doctor."], 0, "Réponse logique.")
  ]
};

LESSONS[18] = {
  theme: "Décider et prévoir : will ou going to ?",
  goal: "Choisir entre will (décision spontanée, opinion) et going to (plan, indice).",
  sections: [
    { h: "Choisir la bonne forme", p: "<b>will</b> : décision prise <u>au moment de parler</u>, offre, promesse, opinion (<i>I think…</i>). <b>be going to</b> : plan déjà décidé, ou prévision avec un indice visible.",
      ex: [["The phone's ringing. I'll answer it!", "Le téléphone sonne. Je réponds !"], ["I've decided. I'm going to learn Spanish.", "J'ai décidé. Je vais apprendre l'espagnol."], ["Look! That man is going to fall!", "Regarde ! Cet homme va tomber !"], ["I think it will be sunny tomorrow.", "Je pense qu'il fera beau demain."]] },
    { h: "Dans l'audio", p: "« I'll stop to get some honey at the supermarket » = décision <b>spontanée</b> (will). « I'm going to try to sleep for a bit » = <b>intention</b> (going to).",
      ex: [["I can't carry this. — I'll help you.", "Je n'arrive pas à porter ça. — Je t'aide."]] }
  ],
  vocab: [["decide", "décider"], ["offer", "proposer"], ["promise", "promettre"], ["plan", "plan"], ["spontaneous", "spontané"], ["stress", "stress / accent"], ["answer the phone", "répondre au téléphone"]],
  task: "Écoute les pistes 11 et 12 : will ou going to ? Justifie chaque phrase.",
  ex: [
    M("(The phone rings) I ___ answer it!", ["will", "am going to", "go to"], 0, "Décision spontanée."),
    M("I've decided: I ___ learn Spanish next year.", ["will", "am going to", "go"], 1, "Plan décidé."),
    M("Look! That man ___ fall.", ["will", "is going to", "goes"], 1, "Indice visible."),
    F("« I can't carry this. » « I ___ help you. »", "will|'ll", "Offre spontanée."),
    M("I think it ___ be sunny tomorrow.", ["will", "is going", "goes"], 0, "Opinion : will."),
    M("Quelle phrase exprime un plan déjà décidé ?", ["I'll have the soup.", "We're going to buy a house.", "I'll open the door."], 1, "going to = plan."),
    F("I ___ stop to get some honey. (décision spontanée)", "will|'ll", "will.")
  ]
};

LESSONS[19] = {
  theme: "Communication : present perfect avec for, since, just, yet, already",
  goal: "Parler de durée et de situations récentes.",
  sections: [
    { h: "for et since", p: "<b>for + durée</b> (for five years, for two weeks). <b>since + point de départ</b> (since 2010, since last year). Question : <b>How long have you…?</b>",
      ex: [["She's been single since she split up with her boyfriend last year.", "Elle est célibataire depuis qu'elle a rompu l'an dernier."], ["I've lived here for five years.", "J'habite ici depuis cinq ans."]] },
    { h: "just, already, yet", p: "<b>just</b> = à l'instant : <i>I've just got back.</i> <b>already</b> = déjà (affirmatif). <b>yet</b> = déjà / pas encore (question et négation, en fin de phrase).",
      ex: [["I've already seen that film.", "J'ai déjà vu ce film."], ["Have you finished yet? — Not yet.", "As-tu fini ? — Pas encore."]] }
  ],
  vocab: [["since", "depuis (date)"], ["for", "pendant, depuis (durée)"], ["just", "à l'instant"], ["already", "déjà"], ["yet", "encore / déjà (question)"], ["single", "célibataire"], ["split up", "rompre"]],
  task: "Écoute les pistes 14 à 16 : quels moyens de communication sont cités ?",
  ex: [
    M("She has been single ___ last year.", ["for", "since", "during"], 1, "since + date."),
    M("I've lived here ___ five years.", ["for", "since", "from"], 0, "for + durée."),
    M("I've ___ got back from holiday.", ["just", "yet", "since"], 0, "just = à l'instant."),
    F("Have you finished? — Not ___.", "yet", "not yet."),
    M("I've ___ seen that film. (déjà)", ["already", "yet", "ever"], 0, "already en affirmatif."),
    F("He has worked here ___ 2019.", "since", "since + année."),
    M("yet s'utilise surtout dans…", ["les négations et questions", "les affirmations seulement", "le passé simple"], 0, "Négatif/question."),
    M("How long ___ you known him?", ["have", "did", "do"], 0, "How long have you…?")
  ]
};

LESSONS[20] = {
  theme: "Les relations : les verbes à particule (phrasal verbs)",
  goal: "Comprendre et utiliser les phrasal verbs des relations.",
  sections: [
    { h: "Phrasal verbs essentiels", p: "<b>ask (someone) out</b> inviter à sortir · <b>go out with</b> sortir avec · <b>split up / break up</b> rompre · <b>get on with</b> bien s'entendre · <b>fall in love</b> tomber amoureux · <b>get married</b> se marier · <b>meet up</b> se retrouver.",
      ex: [["He asked me out yesterday and I said yes.", "Il m'a invitée à sortir hier et j'ai dit oui."], ["They split up last year.", "Ils ont rompu l'an dernier."], ["I get on well with my sister.", "Je m'entends bien avec ma sœur."]] },
    { h: "Placement du pronom", p: "Avec un pronom, il se place <b>entre</b> le verbe et la particule : <i>He asked <u>me</u> out</i> (pas « asked out me »).",
      ex: [["She asked him out.", "Elle l'a invité à sortir."]] }
  ],
  vocab: [["ask out", "inviter à sortir"], ["go out with", "sortir avec"], ["split up", "rompre"], ["get on with", "s'entendre avec"], ["fall in love", "tomber amoureux"], ["get married", "se marier"], ["Valentine's Day", "Saint-Valentin"]],
  task: "Écoute les pistes 18 et 19 : pourquoi la Saint-Valentin existe-t-elle ?",
  ex: [
    M("« He asked me out » signifie…", ["Il m'a invitée à sortir", "Il m'a quittée", "Il m'a menti"], 0, "ask out."),
    M("They split ___ last year.", ["up", "on", "in"], 0, "split up."),
    F("I get ___ well with my sister.", "on", "get on with."),
    M("« go out with » =", ["avoir une relation avec", "sortir dehors", "oublier"], 0, "Relation amoureuse."),
    M("They ___ in love at first sight.", ["fell", "felt", "fall"], 0, "fall → fell."),
    F("They got ___ in June. (mariés)", "married", "get married."),
    M("break up =", ["rompre", "réparer", "construire"], 0, "break up.")
  ]
};

LESSONS[21] = {
  theme: "Les grands nombres et l'action en cours dans le passé",
  goal: "Dire les nombres et utiliser le past continuous.",
  sections: [
    { h: "Dire les grands nombres", p: "1 500 = <b>one thousand, five hundred</b> ; 8 880 = <b>eight thousand, eight hundred and eighty</b> ; 3 235 000 = <b>three million, two hundred and thirty-five thousand</b>. On ne met pas de -s à hundred/thousand/million après un nombre.",
      ex: [["eight thousand, eight hundred and eighty", "8 880"], ["three million, two hundred and thirty-five thousand", "3 235 000"]] },
    { h: "Past continuous", p: "<b>was / were + -ing</b> : une action en cours à un moment du passé. <b>while</b> + action longue ; <b>when</b> + action courte qui interrompt. <i>I was cooking when the phone rang.</i>",
      ex: [["Was he training when you last saw him? Yes, he was.", "Était-il à l'entraînement quand tu l'as vu ? Oui."], ["Were they watching the race? Yes, they were.", "Regardaient-ils la course ? Oui."]] }
  ],
  vocab: [["thousand", "mille"], ["million", "million"], ["hundred", "cent"], ["while", "pendant que"], ["when", "quand"], ["race", "course"], ["train", "s'entraîner"]],
  task: "Écoute la piste 20 : écris en chiffres chaque nombre entendu.",
  ex: [
    M("3,235,000 se dit :", ["three million, two hundred and thirty-five thousand", "three thousand, two hundred", "three billion"], 0, "million → thousand."),
    M("1,500 =", ["one thousand, five hundred", "fifteen hundred thousand", "one five hundred"], 0, "one thousand, five hundred."),
    M("He ___ training when I saw him.", ["was", "were", "is"], 0, "He → was."),
    F("They ___ (watch) the race.", "were watching", "were + -ing."),
    M("I was cooking ___ the phone rang.", ["when", "while", "during"], 0, "when + action courte."),
    M("___ I was walking, it started to rain.", ["While", "Then", "Because"], 0, "While + action longue."),
    F("What ___ you doing at 8 last night?", "were", "you → were."),
    M("Le past continuous se forme avec :", ["was/were + -ing", "did + verbe", "had + pp"], 0, "was/were + -ing.")
  ]
};

LESSONS[22] = {
  theme: "Le travail : vocabulaire et dérivation de mots",
  goal: "Former des noms de métiers et préparer une présentation.",
  sections: [
    { h: "Employer / employee", p: "Suffixe <b>-er / -or</b> = la personne qui <u>fait</u> l'action ; <b>-ee</b> = la personne qui <u>reçoit</u> l'action. <i>employ → employer (celui qui emploie) / employee (l'employé)</i> ; <i>interview → interviewer / interviewee</i> ; <i>apply → applicant</i>.",
      ex: [["The interviewer asked the interviewee a question.", "L'intervieweur a posé une question à l'interviewé."], ["The employer hired three new employees.", "L'employeur a embauché trois nouveaux employés."]] },
    { h: "Structurer une présentation", p: "<b>The topic of my presentation is… / The main points are… / First(ly), Second(ly), Finally… / To sum up… / Thank you for listening.</b>",
      ex: [["The topic of my presentation is the benefits of technology.", "Le sujet de ma présentation est les avantages de la technologie."], ["Firstly, I'd like to talk about work.", "Tout d'abord, je voudrais parler du travail."]] }
  ],
  vocab: [["employer", "employeur"], ["employee", "employé"], ["interview", "entretien"], ["applicant", "candidat"], ["benefit", "avantage"], ["firstly", "tout d'abord"], ["to sum up", "pour résumer"]],
  task: "Écoute la piste 23 (présentation) : relève les mots qui structurent le discours.",
  ex: [
    M("Une personne qui donne un emploi :", ["employer", "employee", "applicant"], 0, "-er = celui qui fait."),
    M("La personne interviewée :", ["interviewer", "interviewee", "employer"], 1, "-ee = celui qui reçoit."),
    F("Quelqu'un qui postule (apply) est un ___.", "applicant", "applicant."),
    M("Le suffixe -er indique…", ["la personne qui fait l'action", "un lieu", "un contraire"], 0, "agent."),
    M("Le suffixe -ee indique…", ["la personne qui reçoit l'action", "la personne qui fait", "un lieu"], 0, "-ee."),
    F("___ I'd like to talk about work. (d'abord)", "Firstly|First", "Connecteur d'ordre."),
    M("« To sum up » sert à…", ["conclure", "commencer", "interrompre"], 0, "pour résumer."),
    M("In a job interview you should ___ on time.", ["arrive", "arrives", "arriving"], 0, "should + base.")
  ]
};

LESSONS[23] = {
  theme: "Demander, proposer, demander la permission au travail",
  goal: "Utiliser Can/Could/May I, Shall I et I'd like.",
  sections: [
    { h: "Demander la permission", p: "<b>Can I…?</b> (informel) · <b>Could I…?</b> (poli) · <b>May I…?</b> (très formel). Pour dire ce qu'on veut : <b>I'd like to…</b>. <i>If possible, I'd like to have Friday off.</i>",
      ex: [["Could I take Friday off, please?", "Pourrais-je prendre vendredi, s'il vous plaît ?"], ["May I leave early?", "Puis-je partir tôt ?"], ["I'd like to have the day off.", "J'aimerais avoir ma journée."]] },
    { h: "Proposer son aide", p: "<b>Shall I + base ?</b> (voulez-vous que je…) · <b>Can I help you?</b> · <b>Would you like me to…?</b> Réponses : <i>Sure, here you are. / Yes, please. / I'm afraid not.</i>",
      ex: [["Shall I open the window?", "Je peux ouvrir la fenêtre ?"], ["Could you send me the file?", "Pourriez-vous m'envoyer le fichier ?"]] }
  ],
  vocab: [["take a day off", "prendre un jour de congé"], ["leave early", "partir tôt"], ["if possible", "si possible"], ["boss", "patron"], ["Shall I…?", "Dois-je… ?"], ["here you are", "tenez, voilà"], ["I'm afraid not", "je crains que non"]],
  task: "Écoute la piste 26 : que demande l'employé à son patron ?",
  ex: [
    M("___ I take Friday off?", ["Could", "Do", "Am"], 0, "Could I…?"),
    M("I'd like ___ the day off.", ["to have", "having", "have"], 0, "I'd like to + base."),
    M("Shall I ___ the window?", ["open", "opening", "to open"], 0, "Shall I + base."),
    M("___ I leave early? (très formel)", ["May", "Do", "Will"], 0, "May I."),
    F("Could you ___ (send) me the file?", "send", "Could you + base."),
    M("« Can I borrow your pen? » Réponse polie :", ["Sure, here you are.", "Yes, I borrow.", "No, I'm borrowing."], 0, "Réponse naturelle."),
    M("« If possible, I'd like… » est…", ["poli", "impoli", "agressif"], 0, "If possible = poli.")
  ]
};

LESSONS[24] = {
  theme: "Voyager : present perfect ou prétérit ?",
  goal: "Choisir entre présent perfect (lien avec le présent) et prétérit (moment précis).",
  sections: [
    { h: "Deux temps, deux usages", p: "<b>Prétérit</b> : action terminée à un moment précis (<i>yesterday, last night, in 2019, ago</i>). <b>Present perfect</b> : expérience, résultat actuel, action très récente (<i>ever, never, just, already, since, for</i>).",
      ex: [["I arrived last night, so I'm really tired.", "Je suis arrivé hier soir, donc je suis très fatigué."], ["I've just got back from holiday.", "Je viens de rentrer de vacances."], ["Have you ever been to Japan?", "Es-tu déjà allé au Japon ?"], ["I visited Rome in 2019.", "J'ai visité Rome en 2019."]] },
    { h: "Participes passés irréguliers", p: "<b>fly → flown, go → gone / been, get → got, see → seen, write → written, take → taken</b>.",
      ex: [["We have never flown first class.", "Nous n'avons jamais voyagé en première classe."]] }
  ],
  vocab: [["get back", "rentrer"], ["flight", "vol"], ["journey", "voyage (trajet)"], ["trip", "voyage / sortie"], ["sponsored", "parrainé"], ["travel", "voyager"], ["jet lag", "décalage horaire"]],
  task: "Écoute la piste 31 (Travellers' Tales) : quels voyages ont été faits ?",
  ex: [
    M("I ___ last night.", ["arrived", "have arrived", "arrive"], 0, "last night → prétérit."),
    M("I've just ___ back.", ["got", "get", "getting"], 0, "have just got."),
    M("Have you ever ___ to Japan?", ["been", "was", "go"], 0, "have + been."),
    F("I ___ (visit) Rome in 2019.", "visited", "Date précise → prétérit."),
    M("Quelle phrase utilise un moment fini ?", ["I lost my keys yesterday.", "I've lost my keys yesterday.", "I lose my keys yesterday."], 0, "yesterday → prétérit."),
    M("She has lived here ___ 2010.", ["since", "for", "ago"], 0, "since + date."),
    F("We have never ___ (fly) first class.", "flown", "fly → flown."),
    M("When ___ you arrive?", ["did", "have", "do"], 0, "When + did.")
  ]
};

LESSONS[25] = {
  theme: "Ce qui s'était passé avant : le plus-que-parfait",
  goal: "Raconter un événement antérieur à un autre dans le passé.",
  sections: [
    { h: "Past perfect", p: "<b>had + participe passé</b> pour une action <u>antérieure</u> à une autre action passée. Négatif : <b>hadn't + pp</b>. Souvent avec <b>before, after, when, already, by the time</b>.",
      ex: [["Before he arrived in Cuba, he had lived in Argentina.", "Avant d'arriver à Cuba, il avait vécu en Argentine."], ["When I got to the station, the train had left.", "Quand je suis arrivé à la gare, le train était parti."], ["They hadn't bought their tickets.", "Ils n'avaient pas acheté leurs billets."]] },
    { h: "Raconter une histoire", p: "On alterne <b>prétérit</b> (événements principaux) et <b>past perfect</b> (ce qui s'était passé avant) : <i>I'd got a really good last-minute deal, so I went to Paris.</i>",
      ex: [["After I had eaten, I went out.", "Après avoir mangé, je suis sorti."]] }
  ],
  vocab: [["before", "avant"], ["after", "après"], ["by the time", "au moment où"], ["last-minute deal", "offre de dernière minute"], ["frightening", "effrayant"], ["role model", "modèle"], ["influence", "influencer"]],
  task: "Écoute la piste 33 : quel événement effrayant la personne raconte-t-elle ?",
  ex: [
    M("Before he arrived, he ___ in Argentina.", ["had lived", "has lived", "lived had"], 0, "had + pp."),
    M("When I got to the station, the train ___.", ["had left", "has left", "leaves"], 0, "Action antérieure."),
    F("She ___ (already / leave) when I called.", "had already left", "had already left."),
    M("Le past perfect se forme avec :", ["had + participe passé", "was + -ing", "have + pp"], 0, "had + pp."),
    M("« After I had eaten, I went out. » Qu'est-ce qui s'est passé en premier ?", ["I ate", "I went out", "En même temps"], 0, "had eaten = avant."),
    F("I'd ___ a good deal before the trip. (find)", "found", "find → found."),
    M("They hadn't ___ their tickets.", ["bought", "buy", "buying"], 0, "hadn't + pp."),
    M("Pourquoi utiliser le past perfect ?", ["montrer qu'une action est antérieure", "parler du futur", "décrire une habitude"], 0, "Antériorité.")
  ]
};

LESSONS[26] = {
  theme: "La publicité : la voix passive",
  goal: "Utiliser la voix passive pour parler de produits et d'actions.",
  sections: [
    { h: "Forme", p: "<b>be + participe passé</b>. Présent : <i>Cars are sold.</i> Prétérit : <i>The ad was made by a famous actor.</i> <b>by</b> introduit l'agent (facultatif).<br>On l'utilise quand l'action ou l'objet est plus important que celui qui agit.",
      ex: [["Millions of cars are sold every year.", "Des millions de voitures sont vendues chaque année."], ["The advert was made by a famous director.", "La publicité a été réalisée par un célèbre réalisateur."], ["These products are made in Italy.", "Ces produits sont fabriqués en Italie."]] },
    { h: "Du vocabulaire de la pub", p: "<b>advert / commercial, brand, competitor, slogan, influence, target</b>. <i>The aim of any company is to sell more than other companies.</i>",
      ex: [["The slogan was written by a student.", "Le slogan a été écrit par un étudiant."]] }
  ],
  vocab: [["advert", "publicité"], ["brand", "marque"], ["competitor", "concurrent"], ["slogan", "slogan"], ["sell", "vendre"], ["influence", "influence"], ["aim", "but"]],
  task: "Écoute la piste 35 : quels sont les objectifs d'une publicité ?",
  ex: [
    M("Millions of cars ___ every year.", ["are sold", "sell", "are selling"], 0, "Passif présent."),
    M("The ad ___ by a famous actor.", ["was made", "made", "is make"], 0, "Passif prétérit."),
    F("These products ___ (make) in Italy.", "are made", "are made."),
    M("Passif = be + ___", ["participe passé", "base verbale", "-ing"], 0, "be + pp."),
    M("« They sell cars. » au passif :", ["Cars are sold.", "Cars sell.", "Cars are selling."], 0, "Cars are sold."),
    F("This advert ___ (show) last night.", "was shown", "was shown."),
    M("« by » introduit…", ["l'agent", "le temps", "le lieu"], 0, "by + agent."),
    M("On utilise le passif pour…", ["mettre l'action/l'objet en avant", "parler d'habitudes passées", "parler du futur"], 0, "Focus sur l'objet.")
  ]
};

LESSONS[27] = {
  theme: "L'argent : la condition irréelle (second conditional)",
  goal: "Parler de situations imaginaires avec if + prétérit, would + base.",
  sections: [
    { h: "Structure", p: "<b>If + prétérit, would + base</b> pour une situation imaginaire ou peu probable. <b>If I were you…</b> sert à donner un conseil. Contraction : <b>'d</b>.",
      ex: [["If I had a million, I would travel the world.", "Si j'avais un million, je voyagerais autour du monde."], ["If I were you, I'd save some money.", "À ta place, j'économiserais."], ["What would you do if you won the lottery?", "Que ferais-tu si tu gagnais au loto ?"]] },
    { h: "Parler d'argent", p: "<b>save / spend / earn / borrow / lend / afford</b>. <i>I can't afford a new car.</i> (je n'ai pas les moyens).",
      ex: [["I'd never spend all my money.", "Je ne dépenserais jamais tout mon argent."]] }
  ],
  vocab: [["save money", "économiser"], ["spend", "dépenser"], ["earn", "gagner (salaire)"], ["borrow", "emprunter"], ["lend", "prêter"], ["afford", "avoir les moyens"], ["lottery", "loterie"]],
  task: "Écoute les pistes 38 et 41 : que pense-t-on de l'argent ?",
  ex: [
    M("If I ___ a million, I would travel.", ["had", "have", "will have"], 0, "if + prétérit."),
    F("If I were rich, I ___ (buy) a house.", "would buy|'d buy", "would + base."),
    M("If she ___ more money, she'd go out more.", ["had", "has", "would have"], 0, "if + prétérit."),
    M("Le second conditionnel exprime…", ["l'imaginaire ou l'improbable", "un futur certain", "le passé"], 0, "Imaginaire."),
    M("If I ___ you, I'd save money.", ["was", "were", "am"], 1, "If I were you."),
    F("What ___ you do if you won the lottery?", "would", "would."),
    M("Quelle phrase est correcte ?", ["If I would have time, I'd help.", "If I had time, I'd help.", "If I have time, I'd help."], 1, "if + prétérit."),
    M("« I'd » ici signifie…", ["I would", "I had", "I should"], 0, "I would.")
  ]
};
