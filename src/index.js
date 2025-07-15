import './components/career-card.js';
import './components/career-selector.js';

window.addEventListener('DOMContentLoaded', () => {
  const selector = document.querySelector('career-selector');
  const card = document.querySelector('career-card');

  selector.addEventListener('career-selected', (event) => {
    card.career = event.detail;
  });
});
