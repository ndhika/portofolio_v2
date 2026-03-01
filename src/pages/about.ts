// ─────────────────────────────────────────────
// pages/about.ts — Halaman About (redesign)
// ─────────────────────────────────────────────
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/about.css';
import { renderNavbar, initNavbarScroll } from '../components/navbar';
import { renderFooter } from '../components/footer';

interface Skill {
  icon: string;
  name: string;
  desc: string;
  tag: string;
}

interface Hobby {
  img: string;
  alt: string;
  emoji: string;
  name: string;
  desc: string;
}

const skills: Skill[] = [
  {
    icon: 'fa-brands fa-html5',
    name: 'HTML & CSS',
    desc: 'Membangun layout web yang responsif, semantik, dan accessible menggunakan HTML5 & CSS3 modern.',
    tag: 'Frontend',
  },
  {
    icon: 'fa-brands fa-bootstrap',
    name: 'Bootstrap & Tailwind',
    desc: 'Memanfaatkan CSS framework untuk membangun UI yang konsisten dan menarik secara cepat.',
    tag: 'UI Framework',
  },
  {
    icon: 'fa-brands fa-vuejs',
    name: 'Vue.js',
    desc: 'Mengembangkan antarmuka dinamis dan reaktif menggunakan komponen-based Vue 3.',
    tag: 'Frontend',
  },
  {
    icon: 'fa-brands fa-laravel',
    name: 'Laravel',
    desc: 'Membangun backend yang solid dan aman menggunakan ekosistem Laravel PHP yang ekspresif.',
    tag: 'Backend',
  },
  {
    icon: 'fa-solid fa-database',
    name: 'MySQL',
    desc: 'Merancang, mengelola, dan mengoptimasi basis data relasional untuk aplikasi web.',
    tag: 'Database',
  },
  {
    icon: 'fa-solid fa-feather',
    name: 'Phalcon PHP',
    desc: 'Membuat aplikasi web high-performance menggunakan framework Phalcon yang ringan dan cepat.',
    tag: 'Backend',
  },
];

const hobbies: Hobby[] = [
  {
    img: '/assets/valorant.png',
    alt: 'Gaming',
    emoji: '🎮',
    name: 'Playing Games',
    desc: 'Menghabiskan waktu luang bermain Valorant untuk relaksasi dan melatih strategi berpikir cepat.',
  },
  {
    img: '/assets/aftereffect.png',
    alt: 'Video Editing',
    emoji: '🎬',
    name: 'Video Editing',
    desc: 'Eksplorasi tipografi, VFX, dan animasi menggunakan After Effects dan tools kreatif lainnya.',
  },
  {
    img: '/assets/netflix.png',
    alt: 'Movies',
    emoji: '🍿',
    name: 'Watching Movies',
    desc: 'Menonton film dan series, terutama di Netflix, sebagai cara inspirasi dan relaksasi.',
  },
  {
    img: '/assets/bersepeda.jpg',
    alt: 'Cycling',
    emoji: '🚴',
    name: 'Cycling',
    desc: 'Bersepeda pagi atau sore hari untuk menjaga kesehatan dan menikmati udara segar.',
  },
];

function renderSkills(): string {
  return skills.map(s => `
    <div class="skill-card" data-aos="fade-up">
      <div class="skill-icon-wrap"><i class="${s.icon}"></i></div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <span class="skill-tag">${s.tag}</span>
    </div>`).join('');
}

function renderHobbies(): string {
  return hobbies.map(h => `
    <div class="hobby-card">
      <img src="${h.img}" alt="${h.alt}" class="hobby-bg"
           onerror="this.style.display='none'" />
      <div class="hobby-overlay"></div>
      <div class="hobby-body">
        <span class="hobby-emoji">${h.emoji}</span>
        <h3>${h.name}</h3>
        <p>${h.desc}</p>
      </div>
    </div>`).join('');
}

export function mountAbout(container: HTMLElement): void {
  container.innerHTML = `
    ${renderNavbar('about')}

    <!-- HERO — 100vh fullscreen video -->
    <section class="hero">
      <video autoplay muted loop playsinline class="bg-video">
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>
      <div class="hero-content" data-aos="fade-up">
        <h2>Hi, I am <span class="highlight">Andhika Rafi</span></h2>
        <p class="hero-sub">Gamer &nbsp;|&nbsp; Developer &nbsp;|&nbsp; IT Enthusiast</p>
        <div class="social-icons">
          <a href="https://www.instagram.com/azuma_rafi?igsh=dDU2ZTBnYnoxMTI=" target="_blank" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/ndhika" target="_blank" aria-label="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/andhika-hisyam-muhammad-rafi-221532263" target="_blank" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div class="scroll-hint">
        <i class="fa-solid fa-chevron-down"></i>
        <span>Scroll</span>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about">
      <div class="about-container">
        <img src="/assets/profile.png" alt="Andhika Rafi" class="profile-img" data-aos="fade-right" />
        <div class="about-text" data-aos="fade-left">
          <h2 id="typewriter-name"></h2>
          <p class="role">Fullstack Developer</p>
          <p class="bio">
            Antusias di bidang web development, UI/UX, dan computer vision.
          </p>
          <ul class="about-meta">
            <li><i class="fa-solid fa-envelope"></i><span>azumarafi@gmail.com</span></li>
            <li><i class="fa-solid fa-location-dot"></i><span>Semarang, Indonesia</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="skills">
      <div class="section-header" data-aos="fade-up">
        <h2 class="section-title">My <span>Skill-Set</span></h2>
      </div>
      <div class="skill-grid">${renderSkills()}</div>
    </section>

    <!-- HOBBIES -->
    <section class="hobby">
      <div class="section-header" data-aos="fade-up">
        <h2 class="section-title">My <span>Hobbies</span></h2>
        <p class="section-sub">Di luar coding</p>
      </div>
      <div class="hobby-grid">${renderHobbies()}</div>
    </section>

    ${renderFooter()}`;

  AOS.init({ once: true, duration: 700, offset: 60 });
  initNavbarScroll();
  initTypewriter();
}

function initTypewriter(): void {
  const el = document.getElementById('typewriter-name');
  if (!el) return;

  const name = 'Andhika Hisyam M Rafi';
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';

  let i = 0;
  el.textContent = '';
  el.appendChild(cursor);

  const timer = setInterval(() => {
    el.insertBefore(document.createTextNode(name[i]), cursor);
    i++;
    if (i >= name.length) clearInterval(timer);
  }, 110);
}
