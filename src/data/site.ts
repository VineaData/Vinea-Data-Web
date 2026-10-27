// Datos de contacto y contenido editable en un solo lugar.
// Completar todo lo que dice TODO antes de publicar.

export const contacto = {
  // Número en formato internacional, sin + ni espacios. Ej: 5492611234567
  whatsapp: '549XXXXXXXXXX', // TODO
  mensajeWhatsapp: 'Hola VineaData, quiero consultar por un proyecto.',
  email: 'hola@vineadata.com', // TODO: confirmar dominio
  instagram: '', // TODO opcional
  ciudad: 'Mendoza, Argentina',
};

export const whatsappUrl = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.mensajeWhatsapp)}`;

export const seo = {
  tituloDefault: 'VineaData · Software y automatización en Mendoza',
  descripcionDefault: 'Ordenamos tus procesos y los convertimos en software que trabaja por vos. Presupuestado con datos, entregado en semanas.',
  siteName: 'VineaData',
  ogImagen: '/og.png',
  ogAlt: 'VineaData · Innovación concreta para empresas de Mendoza',
  frasePreview: 'Innovación concreta para empresas de Mendoza',
};

// Rutas publicadas, usadas para generar el sitemap.
export const rutas = ['/'];

export const servicios = [
  {
    titulo: 'Landing pages de alta conversión',
    texto: 'Una página rápida, pensada para el celular, que convierte visitas en consultas por WhatsApp.',
    patron: [5, 6, 7, 8, 9],
  },
  {
    titulo: 'Webs con suscripciones',
    texto: 'Socios, planes, cobro recurrente y agenda en un solo lugar, con panel de autogestión.',
    patron: [1, 2, 3, 9, 13, 12, 11, 5],
  },
  {
    titulo: 'Paneles de operaciones',
    texto: 'Pedidos, stock y clientes en un sistema simple, sin el costo ni la complejidad de un ERP.',
    patron: [10, 11, 6, 12, 7, 2, 13, 8, 14, 9, 4],
  },
  {
    titulo: 'Automatizaciones e integraciones',
    texto: 'Bots, avisos automáticos y sistemas conectados entre sí, que trabajan solos.',
    patron: [0, 6, 12, 8, 4],
  },
];

export const pasos = [
  { titulo: 'Charla de descubrimiento', texto: 'Una reunión para entender cómo funciona tu negocio, no solo lo que pedís.' },
  { titulo: 'Presupuesto con datos', texto: 'Dividimos el proyecto en tareas y simulamos miles de escenarios de plazo. Te damos un precio cerrado y una fecha realista.' },
  { titulo: 'Construcción sobre bloques probados', texto: 'Reutilizamos piezas que ya funcionan (usuarios, pagos, paneles) y diseñamos el resto a tu medida.' },
  { titulo: 'Entrega y soporte', texto: 'Probás todo antes de publicar. Después, un abono mensual cubre hosting, copias de seguridad y cambios menores.' },
];

export const casos = [
  {
    nombre: 'Sprinters',
    tag: 'Web con suscripciones',
    texto: 'Social run club. Registro de socios, planes, agenda de eventos y panel de administración, en uso con socios reales.',
    url: 'https://sprinters-nu.vercel.app/',
    imagen: '', // TODO: poner captura en /public/casos/sprinters.webp y escribir '/casos/sprinters.webp'
  },
  {
    nombre: 'Marcos Romo',
    tag: 'Landing de alta conversión',
    texto: 'Página para captar prospectos y llevarlos directo a una conversación.',
    url: '', // TODO
    imagen: '', // TODO
  },
];

export const equipo = [
  {
    nombre: 'Nicolás Farina',
    rol: 'Co-founder · Procesos y clientes',
    texto: 'Ingeniero industrial. Antes de escribir una línea de código, mira cómo trabaja tu negocio y dónde se pierde tiempo. Diseña las pantallas y es tu contacto durante todo el proyecto.',
    tags: ['Lean', 'Procesos', 'UI/UX', 'Pruebas de aceptación'],
    foto: '', // TODO: /public/equipo/nico.webp
  },
  {
    nombre: 'Emanuel',
    rol: 'Co-founder · Arquitectura y desarrollo',
    texto: 'Desarrollador full-stack. Arma la arquitectura, las bases de datos, los pagos y las integraciones, y se encarga de que todo siga funcionando después de la entrega.',
    tags: ['Supabase', 'React', 'APIs y webhooks', 'Pagos'],
    foto: '', // TODO: /public/equipo/ema.webp
  },
];

export const principios = [
  { titulo: 'Primero el proceso', texto: 'Ordenamos cómo trabajás antes de automatizarlo. Así el software resuelve el problema de verdad.' },
  { titulo: 'Precio cerrado, con datos', texto: 'Sabés cuánto cuesta y cuándo está antes de arrancar.' },
  { titulo: 'Bloques probados', texto: 'Lo que ya funciona se reutiliza; lo tuyo se diseña a tu medida.' },
];
