<div align="center">

<p>
  <a href="README.md"><img src="docs/langues/fr-off.png" alt="Lire cette page en français" width="150" /></a>
  <img src="docs/langues/en-on.png" alt="English, page shown" width="150" />
</p>

<img src="docs/en/banniere.png" alt="MicroCoaster Forum, the holding page for the community forum" width="100%">

</div>

**The holding page for the MicroCoaster community forum: a countdown, a language switch, and nothing surplus.**

<img src="docs/en/sections/s01.png" alt="01 What it is for" width="100%">

The forum is not open yet. In the meantime, this page holds the spot: it shows the time left before launch, explains what is coming, and speaks French or English depending on the visitor.

It is deliberately tiny. An Express server serving static files, no client-side framework, no build step. One `npm start` and it is live.

<img src="docs/en/sections/s02.png" alt="02 Contents" width="100%">

<img src="docs/en/schemas/contenu.png" alt="server.js: an Express server, it serves the public folder and answers on the root. public/index.html: the page itself. public/css/style.css: the styles. public/js/countdown.js: the countdown to the launch date. public/js/i18n.js: the French to English translation, through data-i18n attributes." width="100%">

<img src="docs/en/sections/s03.png" alt="03 Running it locally" width="100%">

```bash
npm install
npm start
```

The server listens on `http://localhost:3000`, or on `PORT` if the variable is set.

<img src="docs/en/sections/s04.png" alt="04 Changing the date" width="100%">

The launch date is set in `public/js/countdown.js`. The startup message in `server.js` prints it too: remember to keep the two in step, otherwise the console announces one date while the page counts down to another.

<img src="docs/en/sections/s05.png" alt="05 Adding a language" width="100%">

`public/js/i18n.js` holds one dictionary per language code. Add an entry, reuse the same keys as the `data-i18n` attributes in the HTML, and the switch will pick it up.

A missing key breaks nothing, it simply leaves the original text where it is. That is deliberate: a half-translated holding page beats an empty one.

Written in Node.js 18 and Express 4.18. MIT licence.

---

<sub>MicroCoaster · Author: Cybertrist</sub>
