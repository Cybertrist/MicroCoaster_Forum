// Traductions
const translations = {
  en: {
    title: 'MicroCoaster Forum',
    status: 'Under Construction',
    description: 'We are working hard to bring you an exceptional community platform.<br>The forum will be available very soon!',
    launching: 'Launching in',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    'stay-connected': 'Stay connected to not miss the launch!',
    website: 'Website',
    app: 'Application',
    docs: 'Documentation',
    launched: 'The Forum is now available!',
    welcome: 'Welcome to the MicroCoaster Forum!'
  },
  fr: {
    title: 'MicroCoaster Forum',
    status: 'En Construction',
    description: 'Nous travaillons dur pour vous offrir une plateforme d\'échange exceptionnelle.<br>Le forum sera disponible très bientôt !',
    launching: 'Lancement dans',
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
    'stay-connected': 'Restez connectés pour ne rien manquer du lancement !',
    website: 'Site Web',
    app: 'Application',
    docs: 'Documentation',
    launched: 'Le Forum est maintenant disponible !',
    welcome: 'Bienvenue sur le forum MicroCoaster !'
  }
};

// Langue par défaut : Anglais
let currentLang = 'en';

// Fonction pour détecter la langue du navigateur
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  // Priorité à l'anglais, sauf si le navigateur est explicitement en français
  if (browserLang.startsWith('fr')) {
    return 'fr';
  }
  return 'en'; // Par défaut anglais
}

// Fonction pour changer la langue
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  // Mise à jour de l'attribut lang du HTML
  document.documentElement.lang = lang;
  
  // Mise à jour de tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Mise à jour du meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = lang === 'fr' 
      ? 'Forum MicroCoaster - Bientôt disponible'
      : 'MicroCoaster Forum - Coming Soon';
  }
  
  // Mise à jour du titre de la page
  document.title = lang === 'fr'
    ? '🎢 MicroCoaster Forum - En Construction'
    : '🎢 MicroCoaster Forum - Under Construction';
}

// Export pour countdown.js
window.getCurrentLang = () => currentLang;
window.getTranslation = (key) => translations[currentLang][key] || key;

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Vérifier si une langue est sauvegardée, sinon détecter
  const savedLang = localStorage.getItem('preferredLang');
  const initialLang = savedLang || detectBrowserLanguage();
  
  setLanguage(initialLang);
});
