// ─────────────────────────────────────────────
// components/footer.ts — Redesigned footer
// ─────────────────────────────────────────────

export function renderFooter(): string {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="footer-inner">

        <!-- Brand -->
        <div class="footer-brand">
          <span class="footer-logo">Andhika Rafi</span>
          <p class="footer-tagline">Fullstack Developer · AI Enthusiast · IT Student</p>
        </div>

        <!-- Social Links -->
        <div class="footer-socials">
          <a href="https://github.com/ndhika" target="_blank" aria-label="GitHub"
             class="footer-social-link">
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/andhika-hisyam-muhammad-rafi-221532263"
             target="_blank" aria-label="LinkedIn" class="footer-social-link">
            <i class="fa-brands fa-linkedin-in"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/azuma_rafi" target="_blank" aria-label="Instagram"
             class="footer-social-link">
            <i class="fa-brands fa-instagram"></i>
            <span>Instagram</span>
          </a>
        </div>

      </div>

      <!-- Divider + Copyright -->
      <div class="footer-bottom">
        <p>&copy; ${year} Andhika Rafi. Made with <span class="footer-heart">❤️</span></p>
      </div>
    </footer>`;
}
