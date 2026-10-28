/**
 * ─────────────────────────────────────────────────────────────
 *  TODO EL TEXTO DE LA WEB ESTÁ AQUÍ.
 *  Cambia estos valores y la página entera se actualiza.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** Nombre corto del proyecto (aparece en el logo y el título). */
  name: 'Nexus',
  /** Nombre completo / título del trabajo. */
  fullName: 'Nexus — Sistema de Gestión Académica',
  /** Línea pequeña sobre el título grande. */
  badge: 'Proyecto Final · Ingeniería 2026',
  /** Frase principal del hero: líneas normales + línea destacada en color. */
  headline: {
    lines: ['Diseñado para', 'usarse en el'],
    accent: 'mundo real.',
  },
  /** Texto de apoyo bajo el titular. */
  description:
    'Plataforma que centraliza la información académica del estudiante: horarios, notas y avisos en un solo lugar. Desarrollada como proyecto de grado, con foco en accesibilidad y rendimiento.',

  /** Datos de la universidad / materia. */
  university: 'Universidad Nacional',
  course: 'Proyecto de Grado II',
  year: 2026,

  /** Enlaces: cambia por los tuyos (o deja "#" si todavía no existen). */
  links: {
    repo: '#',
    demo: '#',
    docs: '#',
  },
}

export const stats = [
  { value: 4, suffix: '', label: 'Integrantes' },
  { value: 12, suffix: 'sem', label: 'De desarrollo' },
  { value: 100, suffix: '%', label: 'Código abierto' },
  { value: 0, suffix: '€', label: 'Costo de hosting' },
]

export const features = [
  {
    icon: 'layers',
    title: 'Todo en un lugar',
    description:
      'Horarios, calificaciones y avisos unificados en una sola vista, sin saltar entre plataformas.',
  },
  {
    icon: 'smartphone',
    title: 'Pensado para el móvil',
    description:
      'Interfaz responsive con navegación táctil, tipografía legible y modo oscuro automático.',
  },
  {
    icon: 'zap',
    title: 'Rápido por diseño',
    description:
      'Sitio estático servido desde CDN. Sin base de datos, sin tiempos de espera, sin costo mensual.',
  },
  {
    icon: 'qr',
    title: 'Acceso con QR',
    description:
      'Un código QR impreso abre la aplicación al instante. Sin instalar nada, sin escribir URLs.',
  },
] as const

export const steps = [
  {
    number: '01',
    title: 'Apunta la cámara',
    description: 'Abre la cámara del teléfono y apunta al código QR del póster o la presentación.',
  },
  {
    number: '02',
    title: 'Toca la notificación',
    description: 'El sistema reconoce el enlace y te propone abrirlo. Un toque y estás dentro.',
  },
  {
    number: '03',
    title: 'Explora el proyecto',
    description: 'La web carga al instante, sin descargas ni registros previos.',
  },
]

export const team = [
  { name: 'Nombre Apellido', role: 'Desarrollo frontend', initials: 'NA' },
  { name: 'Nombre Apellido', role: 'Backend & datos', initials: 'NA' },
  { name: 'Nombre Apellido', role: 'Diseño & documentación', initials: 'NA' },
]
