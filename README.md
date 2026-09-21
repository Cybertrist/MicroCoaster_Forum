<div align="center">

# MicroCoaster — Forum

Page d'attente du forum communautaire MicroCoaster : compte à rebours, bascule de langue et rien de superflu.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Licence](https://img.shields.io/badge/Licence-MIT-1F6FEB?style=flat-square)](LICENSE)

</div>

---

## À quoi ça sert

Le forum n'est pas encore ouvert. En attendant, cette page tient la place : elle affiche le temps restant avant le lancement, explique ce qui arrive et parle français ou anglais selon le visiteur.

C'est volontairement minuscule — un serveur Express qui sert du statique. Pas de framework front, pas d'étape de build, un `npm start` et c'est en ligne.

## Contenu

| Fichier | Rôle |
|:--|:--|
| `server.js` | Serveur Express, sert `public/` et répond sur `/` |
| `public/index.html` | La page |
| `public/css/style.css` | Styles |
| `public/js/countdown.js` | Compte à rebours jusqu'à la date de lancement |
| `public/js/i18n.js` | Traduction FR/EN par attributs `data-i18n` |

## Lancer en local

```bash
npm install
npm start
```

Le serveur écoute sur `http://localhost:3000`, ou sur `PORT` si la variable est définie.

## Changer la date de lancement

Elle est définie dans `public/js/countdown.js`. Le message de démarrage dans `server.js` l'affiche aussi — pensez à mettre les deux d'accord.

## Ajouter une langue

`public/js/i18n.js` contient un dictionnaire par code de langue. Ajoutez une entrée, reprenez les mêmes clés que celles portées par les attributs `data-i18n` du HTML, et la bascule la prendra en compte.

---

<sub>Projet MicroCoaster · voir aussi <a href="https://github.com/Cybertrist/MicroCoaster_Docs">MicroCoaster_Docs</a> et <a href="https://github.com/Cybertrist/Microcoaster">Microcoaster</a> (bot Discord de support).</sub>
