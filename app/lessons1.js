LESSONS[1] = {
  theme: "Dire ce qu'on aime et ce qu'on n'aime pas",
  goal: "Exprimer ses goûts avec love / like / hate + verbe en -ing, et faire une offre poliment.",
  sections: [
    { h: "Verbes de goût + -ing", p: "Après <b>love, like, enjoy, hate, don't mind</b>, le verbe suivant se met en <b>-ing</b>. On renforce ou on adoucit avec <b>absolutely, really, quite</b>.<br>Échelle : <b>hate &lt; don't like &lt; don't mind &lt; quite like &lt; like &lt; really like &lt; love</b>. À la 3e personne du singulier : <b>he/she likes</b>.",
      ex: [["I absolutely love going to the cinema.", "J'adore aller au cinéma."], ["He quite likes going for a walk.", "Il aime assez aller se promener."], ["He really hates going to the gym.", "Il déteste vraiment aller à la salle de sport."]] },
    { h: "Proposer quelque chose : Would you like…?", p: "<b>Would you like + nom</b> propose quelque chose. <b>I'd like + to + verbe</b> exprime ce que vous voulez (poli). Réponses : <i>Yes, please. / No, thanks.</i>",
      ex: [["Would you like some coffee?", "Voulez-vous du café ?"], ["I'd like to have a tea, please.", "Je voudrais un thé, s'il vous plaît."]] }
  ],
  vocab: [["love", "adorer"], ["hate", "détester"], ["enjoy", "apprécier"], ["I don't mind", "ça ne me dérange pas"], ["go for a walk", "aller se promener"], ["absolutely", "absolument"], ["quite", "assez"]],
  task: "Écoute la piste 2 : note les verbes de goût et les adverbes (really, absolutely, quite).",
  ex: [
    M("I really ___ watching television.", ["like", "likes", "to like"], 0, "Après I, pas de -s : I like."),
    M("He ___ going to the gym. (il déteste)", ["hate", "hates", "hating"], 1, "3e personne : hates."),
    F("I absolutely love ___ (go) to the cinema.", "going", "Après love : verbe + -ing."),
    F("She quite likes ___ (walk) in the park.", "walking", "like + -ing."),
    M("Quelle phrase est la plus forte ?", ["I quite like jazz.", "I like jazz.", "I absolutely love jazz."], 2, "absolutely love = le plus fort."),
    M("Quelle phrase est une offre polie ?", ["Do you like coffee now?", "Would you like some coffee?", "You want coffee?"], 1, "Would you like… ? pour proposer."),
    F("I don't ___ doing the washing-up. (ça ne me dérange pas)", "mind", "I don't mind + -ing."),
    M("I'd like ___ a coffee, please.", ["have", "to have", "having"], 1, "I'd like + to + verbe.")
  ]
};

LESSONS[2] = {
  theme: "La routine quotidienne : le présent simple",
  goal: "Parler de ses habitudes avec le présent simple et les adverbes de fréquence.",
  sections: [
    { h: "Forme du présent simple", p: "Affirmatif : <b>I get up</b> / <b>he gets up</b> (-s à la 3e personne). Négatif : <b>don't / doesn't + verbe de base</b>. Question : <b>Do / Does + sujet + verbe de base</b>.<br>Attention : <i>go → goes, watch → watches, study → studies</i>.",
      ex: [["I get up at seven.", "Je me lève à sept heures."], ["She doesn't like getting up early.", "Elle n'aime pas se lever tôt."], ["What time do you start work?", "À quelle heure commences-tu le travail ?"], ["Does your brother go to the gym? Yes, he does.", "Ton frère va à la salle de sport ? Oui."]] },
    { h: "Adverbes de fréquence", p: "<b>always, usually, often, sometimes, never</b>. Ils se placent <b>avant le verbe</b> mais <b>après be</b> : <i>I usually walk to work. / She is always late.</i>",
      ex: [["I never drink coffee in the evening.", "Je ne bois jamais de café le soir."], ["He is always happy.", "Il est toujours content."]] }
  ],
  vocab: [["get up", "se lever"], ["have breakfast", "prendre le petit-déjeuner"], ["go to work", "aller travailler"], ["go to bed", "aller se coucher"], ["usually", "habituellement"], ["sometimes", "parfois"], ["never", "jamais"]],
  task: "Écoute la piste 4 (« a typical day ») et note l'heure de chaque activité.",
  ex: [
    M("My brother ___ to the gym on Mondays.", ["go", "goes", "going"], 1, "3e personne : goes."),
    F("What time ___ you get up? (do / does)", "do", "Sujet you → do."),
    F("She ___ (not / like) getting up early.", "doesn't like|does not like", "3e personne négative : doesn't + base."),
    M("Where does she ___?", ["work", "works", "working"], 0, "Après does : verbe de base."),
    M("I ___ drink coffee in the evening. (jamais)", ["never", "ever", "always"], 0, "never = jamais."),
    M("Quelle phrase est correcte ?", ["She always is happy.", "She is always happy.", "She is happy always."], 1, "Après be : is always."),
    F("___ your sister work in a bank?", "Does", "Question 3e personne : Does."),
    F("He ___ (watch) TV every evening.", "watches", "watch → watches.")
  ]
};

LESSONS[3] = {
  theme: "Films et expériences : le present perfect",
  goal: "Parler d'expériences de vie avec have/has + participe passé, ever et never.",
  sections: [
    { h: "Have you ever…?", p: "Le <b>present perfect</b> (have/has + participe passé) parle d'une expérience sans dire quand. On utilise <b>ever</b> (dans les questions) et <b>never</b> (dans les négations).<br>Réponses courtes : <i>Yes, I have. / No, he hasn't.</i>",
      ex: [["Have you ever won a competition? Yes, I have.", "As-tu déjà gagné un concours ? Oui."], ["Has he ever met Shakira? Yes, he has.", "A-t-il déjà rencontré Shakira ? Oui."], ["I have never seen a Bond film.", "Je n'ai jamais vu de film de James Bond."]] },
    { h: "been ou gone ?", p: "<b>I've been to Spain</b> = j'y suis allé(e) et je suis revenu(e). <b>He has gone to Spain</b> = il y est parti (il n'est pas encore revenu). Si on précise <b>quand</b> (yesterday, in 2010), on utilise le <b>prétérit</b>.",
      ex: [["I saw that film yesterday.", "J'ai vu ce film hier."]] }
  ],
  vocab: [["win", "gagner"], ["meet", "rencontrer"], ["theme song", "chanson de film"], ["soundtrack", "bande originale"], ["successful", "qui a du succès"], ["flop", "échec"], ["ever / never", "déjà / jamais"]],
  task: "Écoute la piste 10 (James Bond) : quelles chansons sont citées et en quelle année ?",
  ex: [
    M("Have you ___ a competition?", ["win", "won", "winning"], 1, "Participe passé de win : won."),
    F("She has never ___ (meet) a famous person.", "met", "meet → met."),
    M("Has he ever met Shakira? Yes, he ___.", ["has", "have", "did"], 0, "Réponse courte : has."),
    F("I ___ (see) that film three times.", "have seen|'ve seen", "have + seen."),
    M("I've ___ to Spain. (j'y suis allé et revenu)", ["been", "went", "gone"], 0, "been to = aller et revenir."),
    M("Quelle phrase est correcte ?", ["I have seen it yesterday.", "I saw it yesterday.", "I have saw it yesterday."], 1, "Avec yesterday : prétérit."),
    F("Have you ___ been to London?", "ever", "ever dans une question d'expérience.")
  ]
};

LESSONS[4] = {
  theme: "La musique : savoir faire (can / could)",
  goal: "Dire ce qu'on sait ou ne sait pas faire, et parler de musique.",
  sections: [
    { h: "can / can't", p: "<b>can</b> exprime la capacité. Il est suivi du <b>verbe de base</b> (pas de -s, pas de to). Négatif : <b>can't / cannot</b>. Question : <b>Can + sujet + verbe ?</b> Au passé : <b>could / couldn't</b>.",
      ex: [["She can play the piano.", "Elle sait jouer du piano."], ["Can you play the guitar? No, I can't.", "Sais-tu jouer de la guitare ? Non."], ["When I was five, I could ride a bike.", "À cinq ans, je savais faire du vélo."]] },
    { h: "Parler de musique", p: "<b>What kind of music do you like?</b> — <i>I like rock / jazz / classical music.</i> La musique peut nous faire ressentir quelque chose : <b>make + sujet + feel + adjectif</b>.",
      ex: [["Music makes me feel happy.", "La musique me rend heureux."], ["It reminds me of school.", "Ça me rappelle l'école."]] }
  ],
  vocab: [["kind of music", "genre de musique"], ["play an instrument", "jouer d'un instrument"], ["sing", "chanter"], ["relaxed", "détendu"], ["memories", "souvenirs"], ["remind me of", "me rappelle"], ["catchy", "entêtant"]],
  task: "Écoute la piste 13 (l'effet Mozart) : la musique peut-elle changer l'humeur ?",
  ex: [
    M("She ___ play the piano.", ["cans", "can", "is can"], 1, "can ne prend jamais de -s."),
    F("I ___ swim. (négatif)", "can't|cannot", "Négatif de can : can't."),
    M("___ you play the guitar?", ["Do", "Can", "Are"], 1, "Capacité → Can."),
    M("Can he sing? No, he ___.", ["can't", "doesn't", "isn't"], 0, "Réponse courte avec can."),
    M("Music makes me feel ___.", ["relax", "relaxed", "relaxing"], 1, "feel + adjectif en -ed."),
    F("When I was five, I ___ ride a bike. (je savais)", "could", "Passé de can : could."),
    M("What kind of music do you like?", ["I like rock.", "I can rock.", "I am rock."], 0, "Réponse naturelle.")
  ]
};

LESSONS[5] = {
  theme: "La nourriture : dénombrable et indénombrable",
  goal: "Utiliser some / any / much / many et exprimer une préférence au restaurant.",
  sections: [
    { h: "Dénombrable ou non ?", p: "<b>Dénombrable</b> (on peut compter) : <i>an egg, two apples</i>. <b>Indénombrable</b> : <i>water, bread, sugar, meat</i>.<br><b>some</b> = affirmatif/offre ; <b>any</b> = négatif/question ; <b>much</b> + indénombrable, <b>many</b> + dénombrable (surtout en question/négation) ; <b>a lot of</b> = les deux.",
      ex: [["I'd like some water.", "Je voudrais de l'eau."], ["Do we have any eggs?", "A-t-on des œufs ?"], ["How much sugar do you take?", "Combien de sucre prends-tu ?"], ["How many apples do you want?", "Combien de pommes veux-tu ?"]] },
    { h: "Exprimer une préférence", p: "<b>Would you prefer A or B?</b> — <i>I'd prefer A.</i> / <b>I prefer A to B.</b> (on dit <i>to</i>, pas <i>than</i>).",
      ex: [["Would you prefer spaghetti or vegetable soup?", "Préférez-vous les spaghettis ou la soupe de légumes ?"], ["I prefer tea to coffee.", "Je préfère le thé au café."]] }
  ],
  vocab: [["lamb", "agneau"], ["vegetable", "légume"], ["yoghurt", "yaourt"], ["spaghetti", "spaghettis"], ["meat / fish", "viande / poisson"], ["restaurant", "restaurant"], ["receipt", "reçu, ticket"]],
  task: "Écoute la piste 25 : que mangent-elles et que préfèrent-elles ?",
  ex: [
    M("I'd like ___ water.", ["a", "some", "many"], 1, "Water est indénombrable : some."),
    M("Do we have ___ eggs?", ["any", "some", "much"], 0, "Question + dénombrable : any."),
    M("How ___ sugar do you take?", ["many", "much", "a"], 1, "Sugar est indénombrable : much."),
    M("How ___ apples?", ["much", "many", "some"], 1, "Apples est dénombrable : many."),
    F("There isn't ___ milk.", "any", "Négatif : any."),
    M("Lequel est indénombrable ?", ["egg", "bread", "apple"], 1, "On ne dit pas « a bread »."),
    M("Would you prefer pasta ___ soup?", ["than", "or", "to"], 1, "Would you prefer A or B ?"),
    F("I prefer tea ___ coffee.", "to", "prefer A to B.")
  ]
};

LESSONS[6] = {
  theme: "Projets et intentions : be going to",
  goal: "Parler de ses projets avec be going to + verbe.",
  sections: [
    { h: "Forme", p: "<b>am / is / are + going to + verbe de base</b>. Négatif : <i>I'm not going to…</i>. Question : <i>What are you going to do?</i> On l'emploie pour les <b>projets décidés</b> et pour les <b>prévisions basées sur ce qu'on voit</b>.",
      ex: [["I'm going to get a job.", "Je vais trouver un travail."], ["What are you going to do this year?", "Qu'allez-vous faire cette année ?"], ["Look at the clouds! It's going to rain.", "Regarde les nuages ! Il va pleuvoir."]] },
    { h: "Expressions de temps", p: "<b>tomorrow, next week, next year, in two years, this summer, soon</b>. Pour parler de souhaits : <b>I want to / I'd like to / I hope to</b>.",
      ex: [["I want to work in a restaurant as a chef.", "Je veux travailler comme chef dans un restaurant."]] }
  ],
  vocab: [["plan", "projet"], ["get a job", "trouver un travail"], ["chef", "cuisinier"], ["next year", "l'année prochaine"], ["in two years", "dans deux ans"], ["hope", "espérer"], ["soon", "bientôt"]],
  task: "Écoute la piste 20 : note les projets de chacun.",
  ex: [
    M("I ___ going to get a job.", ["am", "is", "are"], 0, "I → am."),
    F("She is going to ___ (study) medicine.", "study", "going to + verbe de base."),
    M("What ___ you going to do this year?", ["are", "do", "will"], 0, "you → are."),
    F("They ___ (not / go) to travel.", "aren't going to|are not going to", "Négatif : aren't going to."),
    M("Quelle phrase est un projet ?", ["I went to Paris.", "I'm going to learn Japanese.", "I learn Japanese."], 1, "be going to = projet."),
    M("Look at those clouds! It ___ rain.", ["is going to", "goes to", "will to"], 0, "Prévision basée sur un indice."),
    F("Is he going ___ be a chef?", "to", "going TO + verbe.")
  ]
};

LESSONS[7] = {
  theme: "Rendez-vous et arrangements : le présent continu pour le futur",
  goal: "Parler d'arrangements déjà fixés avec be + -ing.",
  sections: [
    { h: "Présent continu = arrangement futur", p: "On utilise <b>am / is / are + verbe-ing</b> pour un rendez-vous ou une organisation <b>déjà fixés</b>, avec une indication de temps : <i>next Thursday, tonight, on Saturday</i>.",
      ex: [["What are you doing next Thursday?", "Que fais-tu jeudi prochain ?"], ["I'm meeting my brother tonight.", "Je retrouve mon frère ce soir."], ["Tom is flying to Rome on Saturday.", "Tom prend l'avion pour Rome samedi."]] },
    { h: "Proposer et répondre", p: "<b>Are you free on…? / Are you around?</b> (es-tu dispo ?). Répondre : <i>I'm afraid I can't. I'm working. / Sure, that sounds great!</i>",
      ex: [["Are you free on Friday?", "Es-tu libre vendredi ?"], ["I'm afraid I'm working that day.", "Je crains de travailler ce jour-là."]] }
  ],
  vocab: [["arrangement", "arrangement, rendez-vous"], ["be free", "être libre"], ["be around", "être dans les parages"], ["next Thursday", "jeudi prochain"], ["tonight", "ce soir"], ["I'm afraid", "je crains que"], ["sounds great", "ça me va"]],
  task: "Écoute les pistes 21 à 23 : que font Marin et Marcos jeudi prochain ?",
  ex: [
    M("What ___ you doing next Thursday?", ["are", "do", "will"], 0, "Présent continu : are + -ing."),
    F("I ___ (meet) my brother tonight.", "am meeting|'m meeting|’m meeting", "I'm meeting."),
    M("« I'm going to the cinema on Friday (j'ai les billets) » est…", ["un arrangement", "une habitude", "un événement passé"], 0, "Futur organisé."),
    M("Tom ___ to Rome on Saturday.", ["flies", "is flying", "fly"], 1, "Arrangement : is flying."),
    F("We ___ (not / work) tomorrow.", "aren't working|are not working", "Négatif présent continu."),
    M("I'm meeting Anna ___.", ["last night", "next Monday", "every day"], 1, "Futur : next Monday."),
    M("Are you ___ anything this weekend?", ["do", "doing", "to do"], 1, "are + doing.")
  ]
};

LESSONS[8] = {
  theme: "Raconter une expérience passée : le prétérit",
  goal: "Raconter ce qui s'est passé avec le prétérit (verbes réguliers et irréguliers).",
  sections: [
    { h: "Verbes réguliers et irréguliers", p: "Réguliers : <b>verbe + -ed</b> (<i>work → worked</i>). Irréguliers à apprendre : <i>go → went, buy → bought, see → saw, have → had, be → was/were</i>.<br>Négatif : <b>didn't + base</b>. Question : <b>Did + sujet + base ?</b> (le verbe reste à la base !).",
      ex: [["It was a few months ago. I was really nervous.", "C'était il y a quelques mois. J'étais très nerveux."], ["She went to Paris last year.", "Elle est allée à Paris l'année dernière."], ["He didn't see me.", "Il ne m'a pas vu."], ["Did you enjoy the film?", "As-tu aimé le film ?"]] },
    { h: "Raconter : connecteurs", p: "<b>first, then, after that, in the end, suddenly, a few months ago</b> aident à raconter une histoire dans l'ordre.",
      ex: [["First I applied for the job, then I had an interview.", "D'abord j'ai postulé, puis j'ai passé un entretien."]] }
  ],
  vocab: [["nervous", "nerveux"], ["scared", "effrayé"], ["promotion", "promotion"], ["a few months ago", "il y a quelques mois"], ["suddenly", "soudain"], ["in the end", "à la fin"], ["apply for a job", "postuler"]],
  task: "Écoute la piste 27 : quelle expérience la personne raconte-t-elle ?",
  ex: [
    M("I ___ nervous yesterday.", ["was", "were", "am"], 0, "I → was."),
    F("She ___ (go) to Paris last year.", "went", "go → went."),
    M("___ you enjoy the film?", ["Did", "Do", "Were"], 0, "Question au prétérit : Did."),
    F("He didn't ___ (see) me.", "see", "Après didn't : base."),
    M("Prétérit de buy :", ["buyed", "bought", "boughted"], 1, "buy → bought."),
    F("We ___ (watch) a match last night.", "watched", "watch → watched."),
    M("They ___ the exam.", ["didn't passed", "didn't pass", "not passed"], 1, "didn't + base."),
    F("When ___ you start working here?", "did", "Question : did.")
  ]
};

LESSONS[9] = {
  theme: "Comparer : comparatifs et superlatifs",
  goal: "Comparer des personnes et des choses.",
  sections: [
    { h: "Comparatifs", p: "Adjectif court : <b>adj + -er than</b> (<i>tall → taller than</i>, <i>fit → fitter</i>). Adjectif long : <b>more + adj + than</b> (<i>more motivated</i>). Irréguliers : <b>good → better, bad → worse</b>.<br>Égalité : <b>as + adj + as</b> ; infériorité : <b>not as + adj + as</b>. On nuance avec <b>much, a bit, a lot</b>.",
      ex: [["Carla is much more motivated than Louisa.", "Carla est bien plus motivée que Louisa."], ["Louisa isn't as motivated as Carla.", "Louisa n'est pas aussi motivée que Carla."], ["Louisa is a bit fitter.", "Louisa est un peu plus en forme."]] },
    { h: "Superlatifs", p: "<b>the + adj + -est</b> / <b>the most + adj</b> : <i>the tallest, the most interesting</i>. Irréguliers : <b>the best, the worst</b>.",
      ex: [["She's the smartest student in the class.", "C'est l'étudiante la plus intelligente de la classe."]] }
  ],
  vocab: [["motivated", "motivé"], ["fit", "en forme"], ["a bit", "un peu"], ["much", "beaucoup (plus)"], ["hold your breath", "retenir son souffle"], ["the best", "le meilleur"], ["the worst", "le pire"]],
  task: "Écoute les pistes 28 et 29 : relève les comparatifs.",
  ex: [
    M("Carla is ___ than Louisa.", ["more motivated", "most motivated", "motivateder"], 0, "Adjectif long : more…than."),
    F("Tom is ___ (tall) than Ben.", "taller", "tall → taller."),
    M("She's the ___ student in the class.", ["smartest", "smarter", "most smart"], 0, "the + -est."),
    F("This book is ___ (interesting) than that one.", "more interesting", "Adjectif long."),
    M("Louisa isn't ___ motivated as Carla.", ["more", "as", "than"], 1, "not as … as."),
    M("Comparatif de good :", ["gooder", "better", "more good"], 1, "good → better."),
    F("He's a bit ___ (fit) than me.", "fitter", "On double le t."),
    M("Superlatif de bad :", ["baddest", "worst", "worse"], 1, "bad → the worst.")
  ]
};
