// ─────────────────────────────────────────────
// router.ts — Hash-based SPA router
// Routes: #about | #portfolio | #education
// Default (empty hash) → about
// ─────────────────────────────────────────────
import { mountAbout } from './pages/about';
import { mountPortfolio } from './pages/portfolio';
import { mountEducation } from './pages/education';

type Route = 'about' | 'portfolio' | 'education';

const routes: Record<Route, (el: HTMLElement) => void> = {
  about: mountAbout,
  portfolio: mountPortfolio,
  education: mountEducation,
};

function getRoute(): Route {
  const hash = window.location.hash.replace('#', '').trim();
  if (hash === 'portfolio' || hash === 'education') return hash;
  return 'about';
}

function navigate(): void {
  const app = document.getElementById('app');
  if (!app) return;

  const route = getRoute();
  const mount = routes[route];

  // Scroll back to top on page change
  window.scrollTo({ top: 0, behavior: 'instant' });

  mount(app);

  // Re-add page-enter animation class
  app.classList.remove('page-enter');
  void app.offsetWidth; // force reflow
  app.classList.add('page-enter');
}

export function initRouter(): void {
  // Initial render
  navigate();

  // Hash changes (navbar clicks)
  window.addEventListener('hashchange', navigate);
}
