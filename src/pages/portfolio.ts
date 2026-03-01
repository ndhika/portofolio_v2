// ─────────────────────────────────────────────
// pages/portfolio.ts — Render halaman Portfolio
// ─────────────────────────────────────────────
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/portfolio.css';
import { projects, type ProjectCategory } from '../data/projects';
import { renderNavbar, initNavbarScroll } from '../components/navbar';
import { renderFooter } from '../components/footer';

type FilterValue = 'all' | ProjectCategory;

function buildCard(p: (typeof projects)[0], delay: number): string {
  const tags = p.tags.map(t => `<span>${t}</span>`).join('');

  const ghBtn = p.githubUrl
    ? `<a href="${p.githubUrl}" target="_blank" class="btn-github">
         <i class="fa-brands fa-github"></i> GitHub
       </a>`
    : `<span class="btn-disabled"><i class="fa-brands fa-github"></i> Private</span>`;

  const liveBtn = p.liveUrl
    ? `<a href="${p.liveUrl}" target="_blank" class="btn-live">
         <i class="fa-solid fa-arrow-up-right-from-square"></i> Live
       </a>`
    : '';

  return `
    <div class="project-card${p.featured ? ' featured' : ''}"
         data-aos="fade-up" data-aos-delay="${delay}">
      <div class="project-img-wrap">
        <img src="${p.image}" alt="${p.title}" class="project-img"
             onerror="this.src='/assets/placeholder.png'" />
        ${p.featured ? '<span class="badge-featured">⭐ Featured</span>' : ''}
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="tags">${tags}</div>
        <div class="project-links">${ghBtn}${liveBtn}</div>
      </div>
    </div>`;
}

function renderGrid(filter: FilterValue): void {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => buildCard(p, i * 60)).join('');
  AOS.refresh();
}

function initFilters(): void {
  document.querySelectorAll<HTMLButtonElement>('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid((btn.dataset['filter'] ?? 'all') as FilterValue);
    });
  });
}

function initCounters(): void {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      const target = parseInt(el.dataset['target'] ?? '0', 10);
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count === target ? `${target}+` : String(count);
        if (count >= target) clearInterval(timer);
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll<HTMLElement>('.counter').forEach(c => observer.observe(c));
}

export function mountPortfolio(container: HTMLElement): void {
  container.innerHTML = `
    ${renderNavbar('portfolio')}

    <section class="portfolio-hero" data-aos="fade-up">
      <h2>My <span class="highlight">Projects</span></h2>
      <p>Kumpulan proyek — dari web, fullstack, hingga AI.</p>
      <div class="stats-row">
        <div class="stat-item">
          <span class="counter" data-target="16">0</span>
          <span class="stat-label">Repositories</span>
        </div>
        <div class="stat-item">
          <span class="counter" data-target="10">0</span>
          <span class="stat-label">Projects</span>
        </div>
        <div class="stat-item">
          <span class="counter" data-target="6">0</span>
          <span class="stat-label">Tech Stacks</span>
        </div>
        <div class="stat-item">
          <a href="https://github.com/ndhika" target="_blank" class="github-profile-link">
            <i class="fa-brands fa-github"></i> @ndhika
          </a>
        </div>
      </div>
    </section>

    <div class="portfolio-content">
      <div class="filter-bar">
        <button class="filter-btn active" data-filter="all">🌐 All</button>
        <button class="filter-btn" data-filter="web">🎨 Web</button>
        <button class="filter-btn" data-filter="fullstack">⚙️ Fullstack</button>
        <button class="filter-btn" data-filter="ai">🤖 AI / ML</button>
      </div>
      <div class="project-grid" id="project-grid"></div>
    </div>

    ${renderFooter()}`;

  AOS.init({ once: true, duration: 700 });
  initNavbarScroll();
  renderGrid('all');
  initFilters();
  initCounters();
}
