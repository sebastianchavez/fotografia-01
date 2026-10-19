// ============================================
// DATOS MOCKEADOS - AUREA STUDIO
// Contactos y dirección de ejemplo para Chile; reemplazar antes de publicar.
// ============================================

const STUDIO = {
  name: "Aurea Studio",
  tagline: "Capturamos momentos que perduran",
  description: "Estudio fotográfico profesional con más de 12 años de experiencia creando recuerdos inolvidables.",
  email: "contacto@aureastudio.cl",
  phone: "+56 9 1234 5678",
  phone2: "+56 2 2345 6789",
  address: "Av. Providencia 1234, Oficina 502",
  city: "Providencia, Santiago, Chile",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
    behance: "https://behance.net"
  }
};

// Precios de ejemplo en pesos chilenos (CLP).
function formatCLP(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  }).format(value) + " CLP";
}

// SERVICIOS
const SERVICES = [
  {
    id: "bodas",
    title: "Bodas & Eventos",
    description: "Cobertura completa de tu día especial con un estilo cinematográfico y emotivo.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    priceFrom: 1200000,
    featured: true
  },
  {
    id: "retratos",
    title: "Retratos",
    description: "Sesiones personalizadas en estudio o exteriores para capturar tu esencia.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    priceFrom: 180000,
    featured: true
  },
  {
    id: "corporativo",
    title: "Corporativo",
    description: "Imágenes profesionales para equipos, branding y comunicación empresarial.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    priceFrom: 350000
  },
  {
    id: "producto",
    title: "Fotografía de Producto",
    description: "Imágenes comerciales de alta calidad para e-commerce y catálogos.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    priceFrom: 90000
  },
  {
    id: "eventos",
    title: "Eventos Sociales",
    description: "Cobertura de cumpleaños, bautismos, aniversarios y reuniones.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    priceFrom: 280000
  },
  {
    id: "maternidad",
    title: "Maternidad & Bebés",
    description: "Sesiones tiernas y delicadas para celebrar la llegada de una nueva vida.",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&q=80",
    priceFrom: 220000,
    featured: true
  },
  {
    id: "editorial",
    title: "Editorial & Moda",
    description: "Producción editorial para revistas, marcas y diseñadores.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    priceFrom: 600000
  },
  {
    id: "inmuebles",
    title: "Arquitectura & Inmuebles",
    description: "Fotografía arquitectónica para房产, hoteles y espacios comerciales.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    priceFrom: 240000
  }
];

// GALERÍA
const GALLERY = [
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80", category: "bodas", title: "Boda en la Toscana" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80", category: "bodas", title: "Ceremonia al atardecer" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80", category: "eventos", title: "Celebración íntima" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80", category: "retratos", title: "Retrato en exteriores" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&q=80", category: "retratos", title: "Mirada natural" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80", category: "retratos", title: "Estudio blanco" },
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80", category: "producto", title: "Reloj de diseño" },
  { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80", category: "producto", title: "Producto en estudio" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80", category: "corporativo", title: "Equipo de trabajo" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80", category: "corporativo", title: "Reunión ejecutiva" },
  { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80", category: "editorial", title: "Editorial de moda" },
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80", category: "editorial", title: "Editorial urbana" },
  { src: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=1200&q=80", category: "maternidad", title: "Esperando bebé" },
  { src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80", category: "maternidad", title: "Sesión newborn" },
  { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80", category: "arquitectura", title: "Arquitectura moderna" },
  { src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&q=80", category: "arquitectura", title: "Espacio minimalista" }
];

// EQUIPO
const TEAM = [
  {
    name: "Lucía Mendoza",
    specialty: "Directora & Fotógrafa Principal",
    bio: "Con más de 15 años de experiencia, Lucía es la fundadora y alma creativa del estudio.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
  },
  {
    name: "Andrés Castro",
    specialty: "Fotógrafo de Bodas",
    bio: "Especialista en capturar la emoción y los detalles únicos de las celebraciones.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
  },
  {
    name: "María Vidal",
    specialty: "Retrato & Editorial",
    bio: "Su estilo íntimo y natural ha sido publicado en revistas internacionales.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
  },
  {
    name: "Diego Ramírez",
    specialty: "Producto & Comercial",
    bio: "Experto en iluminación y postproducción de imágenes para marcas premium.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80"
  }
];

// TESTIMONIOS
const TESTIMONIALS = [
  {
    name: "Carolina & Martín",
    service: "Boda",
    text: "Aurea Studio capturó cada momento de nuestra boda con una sensibilidad única. Las fotos son simplemente mágicas, cada vez que las vemos revivimos ese día.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5
  },
  {
    name: "Patricia López",
    service: "Retrato Corporativo",
    text: "Necesitaba fotos profesionales para mi LinkedIn y página web. El resultado superó mis expectativas: elegantes, naturales y muy bien producidas.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5
  },
  {
    name: "Familia Rodríguez",
    service: "Maternidad",
    text: "La sesión de maternidad fue una experiencia hermosa. Nos sentimos súper cómodos y las fotos tienen una luz y ternura increíbles.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5
  }
];

// CURSOS / CLASES
const COURSES = [
  {
    title: "Fotografía Básica",
    level: "Principiante",
    duration: "4 semanas",
    description: "Aprende los fundamentos: composición, exposición, iluminación natural y manejo de cámara.",
    price: 220000,
    schedule: "Sábados 10:00 - 12:30"
  },
  {
    title: "Fotografía de Retrato",
    level: "Intermedio",
    duration: "6 semanas",
    description: "Técnicas avanzadas de retrato: posing, dirección de modelos, iluminación de estudio.",
    price: 380000,
    schedule: "Martes y Jueves 18:30 - 20:30"
  },
  {
    title: "Iluminación Profesional",
    level: "Intermedio",
    duration: "5 semanas",
    description: "Domina esquemas de luz, modificadores, flashes y técnicas de estudio.",
    price: 420000,
    schedule: "Miércoles 19:00 - 21:30"
  },
  {
    title: "Postproducción & Lightroom",
    level: "Todos los niveles",
    duration: "4 semanas",
    description: "Edición profesional con Lightroom y Photoshop: revelado, color y exportación.",
    price: 260000,
    schedule: "Lunes 19:00 - 21:00"
  },
  {
    title: "Fotografía de Bodas",
    level: "Avanzado",
    duration: "8 semanas",
    description: "Especialízate en fotografía de bodas: narrativa visual, cobertura y entrega final.",
    price: 680000,
    schedule: "Sábados 16:00 - 19:00"
  }
];

// HORARIO DE ATENCIÓN
const BUSINESS_HOURS = [
  { day: "Lunes", hours: "10:00 - 20:00", open: true },
  { day: "Martes", hours: "10:00 - 20:00", open: true },
  { day: "Miércoles", hours: "10:00 - 20:00", open: true },
  { day: "Jueves", hours: "10:00 - 20:00", open: true },
  { day: "Viernes", hours: "10:00 - 21:00", open: true },
  { day: "Sábado", hours: "09:00 - 18:00", open: true },
  { day: "Domingo", hours: "Cerrado", open: false }
];

// ESTADÍSTICAS
const STATS = [
  { number: "12+", label: "Años de experiencia" },
  { number: "2.5K+", label: "Sesiones realizadas" },
  { number: "850+", label: "Clientes felices" },
  { number: "15", label: "Premios obtenidos" }
];

// BENEFICIOS / POR QUÉ ELEGIRNOS
const BENEFITS = [
  {
    icon: "camera",
    title: "Equipo Profesional",
    description: "Trabajamos con cámaras y ópticas de última generación para garantizar la máxima calidad."
  },
  {
    icon: "sparkles",
    title: "Edición Premium",
    description: "Cada imagen pasa por un proceso de postproducción profesional para un acabado impecable."
  },
  {
    icon: "heart",
    title: "Atención Personalizada",
    description: "Cada cliente es único. Escuchamos tu visión y la transformamos en imágenes reales."
  },
  {
    icon: "clock",
    title: "Entrega Rápida",
    description: "Tus fotos editadas listas en un máximo de 7 días hábiles según el paquete elegido."
  }
];

// Exponer globalmente
window.STUDIO_DATA = {
  STUDIO,
  SERVICES,
  GALLERY,
  TEAM,
  TESTIMONIALS,
  COURSES,
  BUSINESS_HOURS,
  STATS,
  BENEFITS
};