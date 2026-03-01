// ─────────────────────────────────────────────
// components/navbar.ts
// ─────────────────────────────────────────────

export type NavPage = 'about' | 'portfolio' | 'education';

export function renderNavbar(active: NavPage): string {
  const links: { id: NavPage; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'education', label: 'Education' },
  ];

  const items = links
    .map(
      ({ id, label }) =>
        `<li><a href="#${id}" class="${active === id ? 'active' : ''}">${label}</a></li>`
    )
    .join('');

  return `
    <header>
      <nav class="navbar" id="navbar">
        <h1 class="logo">Andhika Rafi</h1>
        <ul class="nav-links">${items}</ul>
      </nav>
    </header>`;
}

export function initNavbarScroll(): void {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}
