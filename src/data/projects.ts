// ─────────────────────────────────────────────
// data/projects.ts — Semua data proyek
// ─────────────────────────────────────────────

export type ProjectCategory = 'web' | 'fullstack' | 'ai';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  githubUrl: string;
  image: string;
  featured?: boolean;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'AeroBallistics Physics',
    description:
      'Simulasi fisika balistik dan aerodinamika berbasis web. Visualisasi pergerakan proyektil dengan pengaruh gravitasi, resistansi udara, dan sudut tembak yang interaktif.',
    tags: ['#JavaScript', '#Physics', '#Canvas'],
    category: 'web',
    githubUrl: 'https://github.com/ndhika/AeroBallistics_Physics',
    liveUrl: 'https://aero-ballistics-physics.vercel.app',
    image: '/assets/aero.png',
    featured: true,
  },
  {
    title: 'Tjmx Travel',
    description:
      'Website travel agency modern yang menampilkan destinasi wisata, paket perjalanan, dan booking online. Didesain dengan tampilan yang elegan dan responsif.',
    tags: ['#HTML', '#CSS', '#JavaScript'],
    category: 'web',
    githubUrl: 'https://github.com/ndhika/Tjmx_travel',
    liveUrl: 'https://tjmx-travel.vercel.app',
    image: '/assets/tmjx.png',
    featured: true,
  },
   {
    title: 'EVENT IMPHNEN — Hekaton',
    description:
      'Website event hackathon komunitas IMPHNEN "Mega-W AI Hackathon". Menampilkan informasi event, pendaftaran tim, dan leaderboard peserta. Dibangun dengan TypeScript dan di-deploy ke Vercel.',
    tags: ['#TypeScript', '#React', '#Hackathon'],
    category: 'web',
    githubUrl: 'https://github.com/ndhika/EVENT-IMPHNEN-HEKATON',
    liveUrl: 'https://imphnen-hekaton.vercel.app',
    image: '/assets/hackthon.png',
    featured: true,
  },
  {
    title: 'Gadiza Food — E-Commerce Pastry',
    description:
      'Website e-commerce untuk penjualan makanan ringan seperti brownies dan kue kering. Tersedia fitur katalog produk, pemesanan online, dan detail produk.',
    tags: ['#Laravel', '#JavaScript', '#Bootstrap', '#MySQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/ndhika/gadiza_food',
    image: '/assets/gadiza.png',
  },
  {
    title: 'Nufaisyah Store — E-Commerce Fashion',
    description:
      'Website toko online untuk produk outfit, tas, dan kacamata. Tersedia fitur galeri produk, deskripsi barang, dan integrasi ke sistem checkout.',
    tags: ['#Laravel', '#JavaScript', '#Tailwind', '#LiveWire', '#Filament', '#MySQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/ndhika/Nufaisyastore',
    image: '/assets/nufaisyah.png',
  },
  {
    title: 'Zicare — Sistem EMR',
    description:
      'Sistem manajemen data rekam medis elektronik yang dikembangkan saat magang. Mendukung fitur pencatatan pasien, rekam medis, dan akses data klinik secara digital.',
    tags: ['#Phalcon', '#Vue.js', '#PHP', '#MySQL'],
    category: 'fullstack',
    githubUrl: '',
    image: '/assets/zicare.png',
  },
  {
    title: 'Hand Tracking',
    description:
      'Sistem pelacakan tangan menggunakan computer vision dan Python. Mendeteksi gerakan tangan secara real-time menggunakan MediaPipe dan OpenCV.',
    tags: ['#Python', '#OpenCV', '#MediaPipe'],
    category: 'ai',
    githubUrl: 'https://github.com/ndhika/hand_tracking',
    image: '/assets/tangan.png',
  },
  {
    title: 'Cuaks Team — Dokumentasi Kelas',
    description:
      'Website dokumentasi kelas yang memuat tugas-tugas, jadwal, serta foto kegiatan siswa. Dibuat sebagai tugas dari guru untuk mengorganisir pembelajaran secara online.',
    tags: ['#HTML', '#CSS', '#JavaScript'],
    category: 'web',
    githubUrl: 'https://github.com/ndhika/CuakzTV',
    image: '/assets/cuaks.png',
  },
  {
    title: 'Ceritaku — Buku Digital',
    description:
      'Platform buku online tempat pengguna bisa membaca cerita atau menulis kisah mereka sendiri. Desain bersih dan interaktif seperti buku digital modern.',
    tags: ['#HTML', '#CSS', '#Bootstrap'],
    category: 'web',
    githubUrl: 'https://github.com/ndhika/ceritaku',
    image: '/assets/ceritaku.png',
  },
  {
    title: 'OOTS — Portofolio Web Developer',
    description:
      'Portofolio pribadi yang menampilkan pengalaman, skill, dan project sebagai Web Developer. Dibuat dalam rangka tugas kuliah OOTS di Universitas Dian Nuswantoro.',
    tags: ['#Tailwind', '#HTML'],
    category: 'web',
    githubUrl: 'https://github.com/ndhika/OOTS2024_dhika.github.io',
    image: '/assets/oots.png',
  },
];
