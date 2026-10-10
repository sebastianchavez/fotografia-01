// ============================================
// MAIN.JS - Funcionalidades globales
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initContactForm();
  // Renderizar contenido dinámico PRIMERO
  renderServices();
  renderGalleryPreview();
  renderTestimonials();
  renderStats();
  renderBenefits();
  // Observer DESPUÉS (para que encuentre todos los .fade-in)
  initScrollAnimations();
  // Fallback: si por algún motivo el observer no dispara, mostrar todo tras 1.5s
  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => el.classList.add('visible'));
  }, 1500);
});

// ==== NAVBAR SCROLL ====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Marcar link activo según página actual
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ==== MENÚ MÓVIL ====
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-menu-close');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => menu.classList.add('open'));
  if (close) close.addEventListener('click', () => menu.classList.remove('open'));

  // Cerrar al clickear un link
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ==== SCROLL ANIMATIONS ====
function initScrollAnimations() {
  if (!globalObserver) {
    globalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          globalObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
  }
  document.querySelectorAll('.fade-in').forEach(el => globalObserver.observe(el));
}

// ==== FORMULARIO DE CONTACTO ====
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      showToast('¡Mensaje enviado! Te responderemos en menos de 24h.');
      form.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1200);
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
    background: #d4af37; color: #0a0a0a; padding: 1rem 2rem;
    border-radius: 9999px; font-weight: 600; z-index: 1000;
    box-shadow: 0 10px 30px rgba(212,175,55,0.4);
    animation: slideUp 0.3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ==== RENDER: SERVICIOS DESTACADOS (HOME) ====
function renderServices() {
  const container = document.querySelector('#services-grid');
  if (!container || !window.STUDIO_DATA) return;

  const featured = window.STUDIO_DATA.SERVICES.filter(s => s.featured).slice(0, 3);
  container.innerHTML = featured.map((s, i) => `
    <article class="card-service fade-in visible fade-in-delay-${i+1}">
      <div class="card-image h-56 overflow-hidden">
        <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover" loading="lazy">
      </div>
      <div class="p-6">
        <h3 class="font-display text-xl mb-2">${s.title}</h3>
        <p class="text-muted text-sm mb-4">${s.description}</p>
        <div class="flex items-center justify-between">
          <span class="gold-text font-semibold">Desde €${s.priceFrom}</span>
          <a href="servicios.html" class="text-sm gold-text hover:underline">Ver más →</a>
        </div>
      </div>
    </article>
  `).join('');
}

// ==== RENDER: GALERÍA PREVIEW (HOME) ====
function renderGalleryPreview() {
  const container = document.querySelector('#gallery-preview');
  if (!container) return;

  const items = window.STUDIO_DATA.GALLERY.slice(0, 8);
  container.innerHTML = items.map((item, i) => `
    <div class="gallery-item fade-in visible fade-in-delay-${(i % 4) + 1}">
      <img src="${item.src}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="text-sm">${item.title}</span>
      </div>
    </div>
  `).join('');
}

// ==== RENDER: TESTIMONIOS ====
function renderTestimonials() {
  const container = document.querySelector('#testimonials-grid');
  if (!container) return;

  container.innerHTML = window.STUDIO_DATA.TESTIMONIALS.map((t, i) => `
    <div class="testimonial-card fade-in visible fade-in-delay-${i+1}">
      <div class="flex gap-1 mb-4">
        ${'★'.repeat(t.rating).split('').map(() => '<span class="star">★</span>').join('')}
      </div>
      <p class="text-muted mb-6 italic">"${t.text}"</p>
      <div class="flex items-center gap-3">
        <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover">
        <div>
          <div class="font-semibold">${t.name}</div>
          <div class="text-xs text-muted">${t.service}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ==== RENDER: ESTADÍSTICAS ====
function renderStats() {
  const container = document.querySelector('#stats-grid');
  if (!container) return;

  container.innerHTML = window.STUDIO_DATA.STATS.map((s, i) => `
    <div class="stat-card fade-in visible fade-in-delay-${i+1}">
      <div class="stat-number">${s.number}</div>
      <div class="text-muted uppercase text-xs tracking-widest mt-2">${s.label}</div>
    </div>
  `).join('');
}

// ==== RENDER: BENEFICIOS ====
function renderBenefits() {
  const container = document.querySelector('#benefits-grid');
  if (!container) return;

  const icons = {
    camera: '<path d="M9 2L7 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1h-4l-2-2H9zm3 5a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>',
    sparkles: '<path d="M12 0l2.5 7.5L22 10l-7.5 2.5L12 20l-2.5-7.5L2 10l7.5-2.5L12 0z"/>',
    heart: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
    clock: '<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.5 5h-2v6l5 3 .75-1.23-3.75-2.25V7z"/>'
  };

  container.innerHTML = window.STUDIO_DATA.BENEFITS.map((b, i) => `
    <div class="text-center fade-in visible fade-in-delay-${i+1}">
      <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-dark-3 flex items-center justify-center border border-yellow-700/30">
        <svg class="w-6 h-6 gold-text" viewBox="0 0 24 24" fill="currentColor">${icons[b.icon]}</svg>
      </div>
      <h3 class="font-display text-lg mb-2">${b.title}</h3>
      <p class="text-muted text-sm">${b.description}</p>
    </div>
  `).join('');
}

// ==== OBSERVAR NUEVOS ELEMENTOS FADE-IN ====
let globalObserver = null;
function observeNewFadeIns(parent) {
  if (!globalObserver) {
    globalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          globalObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
  }
  parent.querySelectorAll('.fade-in').forEach(el => globalObserver.observe(el));
}