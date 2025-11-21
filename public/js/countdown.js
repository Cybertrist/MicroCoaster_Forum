// Date de lancement : 1er janvier 2026 à minuit
const launchDate = new Date('2026-01-01T00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  // Calcul du temps restant
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mise à jour de l'affichage
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  // Si le compte à rebours est terminé
  if (distance < 0) {
    clearInterval(countdownInterval);
    const launched = window.getTranslation ? window.getTranslation('launched') : '🎉 The Forum is now available! 🎉';
    const welcome = window.getTranslation ? window.getTranslation('welcome') : 'Welcome to the MicroCoaster Forum!';
    
    document.querySelector('.countdown-container').innerHTML = `
      <h2 class="countdown-title" style="font-size: 36px; color: var(--accent);">
        ${launched}
      </h2>
      <p style="margin-top: 20px; font-size: 18px;">
        ${welcome}
      </p>
    `;
  }
}

// Mise à jour initiale
updateCountdown();

// Mise à jour chaque seconde
const countdownInterval = setInterval(updateCountdown, 1000);
