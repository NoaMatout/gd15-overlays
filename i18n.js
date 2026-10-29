/* GD15 translations. English is the source language; French comes from FR
   below. The language is ?lang=en|fr, else the visitor's last choice, else
   English. Plain ES2017 so the OBS 27 browser source (Chromium 75) runs it.

   In HTML:  data-i18n on an element translates its text,
             data-i18n-placeholder / data-i18n-title translate those attributes,
             a <nav class="lang"> gets the EN / FR switch.
   In JS:    t("Analysing {team}…", { team: name })                          */
(function () {
  var FR = {
    // shared
    "Opposing team": "Équipe adverse",
    "Since": "Depuis",
    "Sources: Leaguepedia, LoL Esports, Oracle's Elixir · icons from Data Dragon.": "Sources : Leaguepedia, LoL Esports, Oracle's Elixir · icônes Data Dragon.",
    "Raw JSON": "JSON brut",
    "GD15 is a fan project, not affiliated with or endorsed by Riot Games. League of Legends and Riot Games are trademarks of Riot Games, Inc.":
      "GD15 est un projet de fans, non affilié à Riot Games et non approuvé par Riot Games. League of Legends et Riot Games sont des marques de Riot Games, Inc.",
    "Error: {message}": "Erreur : {message}",
    "Top": "Top", "Jungle": "Jungle", "Mid": "Mid", "ADC": "ADC", "Support": "Support",

    // bans page
    "Enter a team name to get the bans recommended against it.": "Entre le nom d'une équipe pour obtenir les bans recommandés contre elle.",
    "database": "base de données",
    "Leaguepedia live": "Leaguepedia en direct",
    "CSV file": "fichier CSV",
    "Analysing {team}…": "Analyse de {team}…",
    "The first request can take a few minutes (Leaguepedia rate limit), then it is cached.": "La première requête peut prendre quelques minutes (limite de Leaguepedia), ensuite c'est en cache.",
    "Overlay link:": "Lien de l'overlay :",
    "BAN.RECO · since {date}": "BAN.RECO · depuis le {date}",
    "Top threat": "Top menace",
    "Last series": "Dernière série",
    "not loaded yet": "pas encore chargée",
    "Fearless locked": "Fearless verrouillés",
    "picks of both teams": "picks des 2 équipes",
    "Bans placed": "Bans posés",
    "filter: {player}": "filtre : {player}",
    "click a row to ban": "clique une ligne pour bannir",
    "Filter the bans on this player": "Filtrer les bans sur ce joueur",
    "+ champion played…": "+ champion joué…",
    "Add a champion already played": "Ajouter un champion déjà joué",
    "Searching…": "Recherche…",
    "Refresh": "Actualiser",
    "Load the series": "Charger la série",
    "Re-checks the series regularly and adds the new games": "Revérifie la série régulièrement et ajoute les nouvelles games",
    "Auto follow": "Suivi auto",
    "Transparent overlay to add as a browser source in OBS": "Overlay transparent à ajouter comme source navigateur dans OBS",
    "Link copied ✓": "Lien copié ✓",
    "Copy the link": "Copier le lien",
    "Played in the series": "Joué dans la série",
    "Remove": "Retirer",
    "Remove {champion}": "Retirer {champion}",
    "Ban {champion}": "Bannir {champion}",
    "No champion left to suggest with these filters.": "Plus aucun champion à proposer avec ces filtres.",
    "Recommendations · {player}": "Recommandations · {player}",
    "Recommendations · click to ban": "Recommandations · clique pour bannir",
    "All players": "Tous les joueurs",
    "Clear": "Vider",
    "Roster · click to filter": "Roster · clique pour filtrer",
    "Fearless · series": "Fearless · série",
    "Series: {message}": "Série : {message}",
    "Stop excluding": "Ne plus exclure",
    "Exclude these champions": "Exclure ces champions",
    "last game {ago} ago": "dernière game il y a {ago}",
    "No series in progress ({ago} ago)": "Pas de série en cours (il y a {ago})",
    "flex": "flex",

    // items page
    "Champion": "Champion",
    "Role": "Rôle",
    "Player (optional)": "Joueur (option)",
    "All": "Tous",
    "Pick a champion to see its pro builds, timings and the real effect of each item.": "Choisis un champion pour voir ses builds en compétition, les timings et l'effet réel de chaque item.",
    "Item data unavailable: {message}": "Données d'items indisponibles : {message}",
    "Analysing {champion}…": "Analyse de {champion}…",
    "PRO BUILDS · {games} games": "PRO BUILDS · {games} games",
    "patch {patches}": "patch {patches}",
    "Most frequent build": "Build le plus fréquent",
    "Win rate": "Winrate",
    "{wins}/{decided} finished games": "{wins}/{decided} games terminées",
    "1st item completed": "1er item complété",
    "2nd item completed": "2e item complété",
    "3rd item completed": "3e item complété",
    "same as average": "comme la moyenne",
    "{delta} min vs {champion} average": "{delta} min vs moyenne {champion}",
    "median": "médiane",
    "Not enough games with 3 completed items yet.": "Pas encore assez de games avec 3 items complétés.",
    "{wins}/{decided} W": "{wins}/{decided} V",
    "95% CI: {lo}–{hi}%": "IC 95 % : {lo}–{hi} %",
    "not enough data": "pas assez de données",
    "Timings (median, compared with every player on the champion)": "Timings (médiane, comparés à tous les joueurs du champion)",
    "Timings (median)": "Timings (médiane)",
    "Most frequent builds (first 3 completed items)": "Builds les plus fréquents (3 premiers items complétés)",
    "Completed items": "Items complétés",
    "{n} items": "{n} items",
    "Item": "Item", "Pick": "Pick", "Timing": "Timing",
    "Raw win rate (95% CI)": "Winrate brut (IC 95 %)",
    "Gold-adjusted win rate": "Winrate à or égal",
    "Boots": "Bottes",
    "Players · click to filter": "Joueurs · clique pour filtrer",
    "slot {n}": "slot {n}",
    "Gold-adjusted win rate:": "Winrate à or égal :",
    "compares players who have the item with those who don't, at the same gold difference against their lane opponent at 15 min, so that \"the item wins games\" is not confused with \"players who buy it were already ahead\". Shown from 20 comparable games, with a 95% interval.":
      "compare les joueurs qui ont l'item à ceux qui ne l'ont pas, au même écart d'or avec leur adversaire de lane à 15 min, pour ne pas confondre « l'item fait gagner » et « ceux qui l'achètent étaient déjà devant ». Affiché seulement à partir de 20 games comparables, avec un intervalle à 95 %.",
    "Sources: minute-by-minute timelines of pro games (LoL Esports) since August 2026, winners from Leaguepedia · icons from Data Dragon.":
      "Sources : timelines minute par minute des matchs pros (LoL Esports) depuis août 2026, vainqueurs via Leaguepedia · icônes Data Dragon.",

    // overlay
    "Loading…": "Chargement…",
    // preview overlay
    "Elimination match: the loser goes home": "Match éliminatoire : le perdant rentre chez lui",
    "Qualification match: the winner goes through": "Match qualificatif : le gagnant passe",
    "Decider: win and in, lose and out": "Match décisif : qui gagne passe, qui perd sort",
    "Last {n} games": "{n} dernières games",
    "Ban targets against {team}": "Bans à viser contre {team}",
    "Comfort picks": "Picks de confort",
    "Head to head": "Face-à-face",
    "Pro games: Leaguepedia · schedule: LoL Esports · by GD15 (@gd15gg)": "Games pro : Leaguepedia · calendrier : LoL Esports · par GD15 (@gd15gg)",
    "Add ?team=Team name to the URL (e.g. ?team=Karmine%20Corp).": "Ajoute ?team=Nom de l'équipe à l'URL (ex. ?team=Karmine%20Corp).",
    "No upcoming series for {team}.": "Aucune série à venir pour {team}.",
    "Preview unavailable: {message}": "Preview indisponible : {message}",
    "Add ?team=Team name to the URL (e.g. ?team=G2%20Esports).": "Ajoute ?team=Nom de l'équipe à l'URL (ex. ?team=G2%20Esports).",
    "Series unavailable: {message}": "Série indisponible : {message}",
    "Series": "Série",
    "last game {ago}": "dernière game {ago}",
    "last series": "dernière série",
    "{n} min ago": "il y a {n} min",
    "{n} h ago": "il y a {n} h",
    "In progress": "En cours",
    "Locked champions": "Champions verrouillés",
    "Recommended bans against {team}": "Bans recommandés contre {team}"
  };

  function pickLang() {
    var asked = new URLSearchParams(location.search).get("lang");
    if (asked === "en" || asked === "fr") {
      try { localStorage.setItem("gd15-lang", asked); } catch (e) { /* private mode */ }
      return asked;
    }
    try {
      var saved = localStorage.getItem("gd15-lang");
      if (saved === "en" || saved === "fr") return saved;
    } catch (e) { /* storage blocked */ }
    return "en";
  }

  var lang = pickLang();
  document.documentElement.lang = lang;

  function t(text, vars) {
    var out = (lang === "fr" && FR[text]) || text;
    if (vars) {
      Object.keys(vars).forEach(function (k) { out = out.split("{" + k + "}").join(String(vars[k])); });
    }
    return out;
  }

  function apply(root) {
    var nodes = (root || document).querySelectorAll("[data-i18n], [data-i18n-placeholder], [data-i18n-title]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.hasAttribute("data-i18n")) {
        if (!el.getAttribute("data-i18n")) el.setAttribute("data-i18n", el.textContent.trim());
        el.textContent = t(el.getAttribute("data-i18n"));
      }
      ["placeholder", "title"].forEach(function (attr) {
        var key = el.getAttribute("data-i18n-" + attr);
        if (key) el.setAttribute(attr, t(key));
      });
    }
    var navs = (root || document).querySelectorAll("nav.lang");
    for (var j = 0; j < navs.length; j++) {
      navs[j].textContent = "";
      ["en", "fr"].forEach(function (code) {
        var a = document.createElement("a");
        a.textContent = code.toUpperCase();
        a.href = "#";
        a.className = code === lang ? "on" : "";
        a.setAttribute("aria-current", code === lang ? "true" : "false");
        a.addEventListener("click", function (e) {
          e.preventDefault();
          var url = new URL(location.href);
          url.searchParams.set("lang", code);
          location.href = url.href;
        });
        navs[j].appendChild(a);
      });
    }
  }

  // Dates in the page's language ("26 Oct" / "26 oct.").
  function date(iso, opts) {
    return new Date(iso).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", opts);
  }

  window.GD15_LANG = lang;
  window.t = t;
  window.tDate = date;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { apply(); });
  else apply();
})();
