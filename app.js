'use strict';

// ── Theme Toggle ──
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
  this.textContent = document.body.classList.contains('dark-theme') ? 'Light' : 'Dark';
});

// ── SPA Router ──
const pages = {
  'home':        document.getElementById('page-home'),
  'circular-game-simulator': document.getElementById('page-circular-game-simulator'),
  'spm':         document.getElementById('page-spm'),
  'lipo':        document.getElementById('page-lipo'),
  'srt':         document.getElementById('page-srt'),
  'pinger':      document.getElementById('page-pinger'),
};

function showPage(id) {
  const target = pages[id] || pages['home'];
  Object.values(pages).forEach(p => p.classList.remove('active'));
  target.classList.add('active');
  window.scrollTo(0, 0);
}

// Handle hash-based navigation
function handleHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  showPage(hash);
}

window.addEventListener('hashchange', handleHash);
handleHash(); // run on load

// Intercept all internal anchor clicks
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  e.preventDefault();
  const hash = link.getAttribute('href').replace('#', '') || 'home';
  history.pushState(null, '', '#' + hash);
  showPage(hash);
});
