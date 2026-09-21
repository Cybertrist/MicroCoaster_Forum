<div align="center">

<img src="docs/banniere.png" alt="MicroCoaster Forum, page d'attente du forum communautaire" width="100%">

</div>

**Page d'attente du forum communautaire MicroCoaster : compte à rebours, bascule de langue, et rien de superflu.**

<img src="docs/sections/s01.png" alt="01 À quoi ça sert" width="100%">

Le forum n'est pas encore ouvert. En attendant, cette page tient la place : elle affiche le temps restant avant le lancement, explique ce qui arrive, et parle français ou anglais selon le visiteur.

C'est volontairement minuscule. Un serveur Express qui sert du statique, pas de framework côté client, pas d'étape de build. Un `npm start` et c'est en ligne.

<img src="docs/sections/s02.png" alt="02 Contenu" width="100%">

<img src="docs/schemas/contenu.png" alt="server.js : serveur Express, il sert le dossier public et répond sur la racine. public/index.html : la page elle-même. public/css/style.css : les styles. public/js/countdown.js : le compte à rebours jusqu'à la date de lancement. public/js/i18n.js : la traduction français-anglais, par attributs data-i18n." width="100%">

<img src="docs/sections/s03.png" alt="03 Lancer en local" width="100%">

```bash
npm install
npm start
```

Le serveur écoute sur `http://localhost:3000`, ou sur `PORT` si la variable est définie.

<img src="docs/sections/s04.png" alt="04 Changer la date" width="100%">

La date de lancement est définie dans `public/js/countdown.js`. Le message de démarrage de `server.js` l'affiche aussi : pensez à mettre les deux d'accord, sinon la console annonce une date et la page en compte une autre.

<img src="docs/sections/s05.png" alt="05 Ajouter une langue" width="100%">

`public/js/i18n.js` contient un dictionnaire par code de langue. Ajoutez une entrée, reprenez les mêmes clés que celles portées par les attributs `data-i18n` du HTML, et la bascule la prendra en compte.

Une clé oubliée ne casse rien, elle laisse simplement le texte d'origine à sa place. C'est voulu : une page d'attente à moitié traduite vaut mieux qu'une page vide.

Écrit en Node.js 18 et Express 4.18. Licence MIT.

---

<sub>Projet MicroCoaster · voir aussi <a href="https://github.com/Cybertrist/MicroCoaster_Docs">MicroCoaster_Docs</a> et l'organisation <a href="https://github.com/Microcoaster">MicroCoaster</a>, qui héberge l'application de pilotage et les firmwares des modules.</sub>
