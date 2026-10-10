// ============================================
// GALLERY.JS - Galería completa con filtros + lightbox
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initLightbox();
});

function initGallery() {
  const container = document.querySelector('#full-gallery');
  const filtersContainer = document.querySelector('#gallery-filters');
  if (!container || !window.STUDIO_DATA) return;

  // Obtener categorías únicas
  const categories = ['todos', ...new Set(window.STUDIO_DATA.GALLERY.map(g => g.category))];

  const categoryLabels = {
    todos: 'Todos',
    bodas: 'Bodas',
    retratos: 'Retratos',
    eventos: 'Eventos',
    producto: 'Producto',
    corporativo: 'Corporativo',
    editorial: 'Editorial',
    maternidad: 'Maternidad',
    arquitectura: 'Arquitectura'
  };

  // Renderizar filtros
  filtersContainer.innerHTML = categories.map((cat, i) => `
    <button class="filter-btn ${i === 0 ? 'active' : ''}" data-category="${cat}">
      ${categoryLabels[cat] || cat}
    </button>
  `).join('');

  // Renderizar galería inicial
  renderGalleryItems('todos');

  // Eventos de filtro
  filtersContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderGalleryItems(btn.dataset.category);
  });

  function renderGalleryItems(category) {
    const items = category === 'todos'
      ? window.STUDIO_DATA.GALLERY
      : window.STUDIO_DATA.GALLERY.filter(g => g.category === category);

    container.innerHTML = items.map((item, i) => `
      <div class="gallery-item fade-in visible" data-src="${item.src}" data-title="${item.title}" style="animation-delay: ${i * 0.05}s">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <div>
            <div class="text-xs uppercase tracking-wider gold-text mb-1">${categoryLabels[item.category]}</div>
            <span class="text-sm">${item.title}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Re-aplicar eventos de lightbox a los nuevos items
    container.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => openLightbox(item.dataset.src, item.dataset.title));
    });
  }
}

// ==== LIGHTBOX ====
function initLightbox() {
  const lightbox = document.querySelector('#lightbox');
  if (!lightbox) return;

  const closeBtn = lightbox.querySelector('.lightbox-close');
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

function openLightbox(src, title) {
  const lightbox = document.querySelector('#lightbox');
  if (!lightbox) return;
  lightbox.querySelector('img').src = src;
  lightbox.querySelector('img').alt = title || '';
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.querySelector('#lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}