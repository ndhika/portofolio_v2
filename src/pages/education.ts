// ─────────────────────────────────────────────
// pages/education.ts — Halaman Education (redesign)
// ─────────────────────────────────────────────
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/education.css';
import { renderNavbar, initNavbarScroll } from '../components/navbar';
import { renderFooter } from '../components/footer';

interface EducationItem {
  school: string;
  major: string;
  year: string;
  icon: string;
  desc: string;
}

interface Certificate {
  title: string;
  org: string;
  year: string;
  icon: string;
  color: string;
}

interface SkillBar {
  name: string;
  level: number;
  icon: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
}

const education: EducationItem[] = [
  {
    school: 'SMK 8 Semarang',
    major: 'Pengembangan Perangkat Lunak dan Gim (PPLG)',
    year: '2022 – 2024',
    icon: 'fa-solid fa-school',
    desc: 'Belajar dasar-dasar programming, web development, dan pengembangan perangkat lunak secara terstruktur.',
  },
  {
    school: 'Universitas Dian Nuswantoro',
    major: 'S1 Teknik Informatika',
    year: '2024 – Sekarang',
    icon: 'fa-solid fa-graduation-cap',
    desc: 'Fokus pada software engineering, algoritma, sistem basis data, dan fullstack web development.',
  },
];

const experiences: Experience[] = [
  {
    role: 'Fullstack Developer Intern',
    company: 'Zi.Care',
    period: 'Jan – Jun 2024',
    type: 'Magang',
    points: [
      'Membangun fitur EMR (Electronic Medical Record) menggunakan Phalcon & Vue.js',
      'Integrasi REST API dengan database MySQL untuk data pasien',
      'Optimasi performa query dan refactor kode legacy',
    ],
  },
  {
    role: 'IoT Teaching Assistant',
    company: 'Unika Soegijapranata',
    period: '2023',
    type: 'Part-time',
    points: [
      'Membantu mahasiswa dalam proyek IoT berbasis Arduino',
    ],
  },
];

const certificates: Certificate[] = [
  {
    title: 'Zi.Care Internship Certificate',
    org: 'Fullstack Developer Intern — Zi.Care',
    year: '2024',
    icon: 'fa-solid fa-briefcase',
    color: '#38bdf8',
  },
  {
    title: 'Unika Teaching Assistant Certificate',
    org: 'IoT Project & Teaching Assistant — Unika',
    year: '2023',
    icon: 'fa-solid fa-chalkboard-teacher',
    color: '#a78bfa',
  },
];

const skillBars: SkillBar[] = [
  { name: 'HTML & CSS', level: 95, icon: 'fa-brands fa-html5' },
  { name: 'JavaScript', level: 75, icon: 'fa-brands fa-js' },
  { name: 'PHP / Laravel', level: 72, icon: 'fa-brands fa-php' },
  { name: 'MySQL', level: 80, icon: 'fa-solid fa-database' },
  { name: 'Vue.js', level: 65, icon: 'fa-brands fa-vuejs' },
  { name: 'TypeScript', level: 60, icon: 'fa-brands fa-js' },
];

// ── Renderers ──────────────────────────────

function renderTimeline(): string {
  return education.map((e, i) => `
    <div class="timeline-item" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="timeline-icon"><i class="${e.icon}"></i></div>
      <div class="timeline-body">
        <div class="timeline-header">
          <h3>${e.school}</h3>
          <span class="timeline-badge">${e.year}</span>
        </div>
        <p class="timeline-major">${e.major}</p>
        <p class="timeline-desc">${e.desc}</p>
      </div>
    </div>`).join('');
}

function renderExperience(): string {
  return experiences.map((ex, i) => `
    <div class="exp-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="exp-header">
        <div>
          <h3 class="exp-role">${ex.role}</h3>
          <span class="exp-company"><i class="fa-solid fa-building"></i> ${ex.company}</span>
        </div>
        <div class="exp-meta">
          <span class="exp-badge">${ex.type}</span>
          <span class="exp-period"><i class="fa-regular fa-calendar"></i> ${ex.period}</span>
        </div>
      </div>
      <ul class="exp-points">
        ${ex.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>`).join('');
}

function renderCerts(): string {
  return certificates.map((c, i) => `
    <div class="cert-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="cert-icon-wrap" style="color:${c.color}">
        <i class="${c.icon}"></i>
      </div>
      <div class="cert-body">
        <div class="cert-title">${c.title}</div>
        <div class="cert-org">${c.org}</div>
        <div class="cert-year">${c.year}</div>
      </div>
    </div>`).join('');
}

function renderSkillBars(): string {
  return skillBars.map((s, i) => `
    <div class="skill-bar-item" data-aos="fade-up" data-aos-delay="${i * 60}">
      <div class="skill-bar-label">
        <span><i class="${s.icon}"></i> ${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" data-level="${s.level}"></div>
      </div>
    </div>`).join('');
}

function animateSkillBars(): void {
  setTimeout(() => {
    document.querySelectorAll<HTMLElement>('.skill-fill').forEach(bar => {
      bar.style.width = `${bar.dataset['level'] ?? 0}%`;
    });
  }, 500);
}

// ── Mount ──────────────────────────────────

export function mountEducation(container: HTMLElement): void {
  container.innerHTML = `
    ${renderNavbar('education')}

    <!-- Page Hero -->
    <section class="edu-hero" data-aos="fade-up">
      <h2 class="edu-hero-title">Education & <span class="highlight">Experience</span></h2>
    </section>

    <!-- Two-column layout -->
    <div class="edu-main">

      <!-- LEFT: Education Timeline + Experience -->
      <div class="edu-left">

        <div class="edu-block" data-aos="fade-up">
          <h2 class="block-title"><i class="fa-solid fa-book-open-reader"></i> Education</h2>
          <div class="timeline">${renderTimeline()}</div>
        </div>

        <div class="edu-block" data-aos="fade-up">
          <h2 class="block-title"><i class="fa-solid fa-briefcase"></i> Experience</h2>
          <div class="exp-list">${renderExperience()}</div>
        </div>

      </div>

      <!-- RIGHT: Skills + Certificates -->
      <div class="edu-right">

        <div class="edu-block" data-aos="fade-up">
          <h2 class="block-title"><i class="fa-solid fa-code"></i> Tech Skills</h2>
          <div class="skill-bars">${renderSkillBars()}</div>
        </div>

        <div class="edu-block" data-aos="fade-up">
          <h2 class="block-title"><i class="fa-solid fa-certificate"></i> Certificates</h2>
          <div class="cert-list">${renderCerts()}</div>
        </div>

      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-content" data-aos="fade-up">
        <h2>Let's Build Something Great Together</h2>
        <p>Terbuka untuk kolaborasi, project freelance, maupun kesempatan kerja.</p>
        <a href="https://wa.me/6287765282028" target="_blank" class="cta-button">
          <i class="fa-brands fa-whatsapp"></i> Get Started
        </a>
      </div>
    </section>

    ${renderFooter()}`;

  AOS.init({ once: true, duration: 650 });
  initNavbarScroll();
  animateSkillBars();
}
