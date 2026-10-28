import type { QRCodeToDataURLOptions, QRCodeToStringOptions } from 'qrcode'

export type QRCodeData = {
  png: string
  svg: string
}

/**
 * Genera el QR en dos formatos:
 * - PNG (1024px) listo para pegar en un póster o diapositiva.
 * - SVG vectorial, para imprimir en cualquier tamaño sin perder nitidez.
 *
 * La librería se carga de forma diferida: no pesa en la primera visita.
 */
export async function generateQR(url: string): Promise<QRCodeData> {
  const { default: QRCode } = await import('qrcode')

  const options: QRCodeToDataURLOptions = {
    errorCorrectionLevel: 'H',
    margin: 2,
    width: 1024,
    color: { dark: '#07080a', light: '#ffffff' },
  }

  const [png, svg] = await Promise.all([
    QRCode.toDataURL(url, options),
    QRCode.toString(url, { ...options, type: 'svg' } as QRCodeToStringOptions),
  ])

  return { png, svg }
}

/** Versión del SVG lista para usar en un <img> (nítida en pantallas retina). */
export function svgDataURL(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export function download(href: string, filename: string) {
  const link = document.createElement('a')
  link.href = href
  link.download = filename
  document.body.append(link)
  link.click()
  link.remove()
}

export function isLocalPreview(): boolean {
  return /^(localhost|127\.|0\.0\.0\.0|192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(
    window.location.hostname,
  )
}

/**
 * URL de la página actual. En local no sirve para el móvil, así que se
 * devuelve un marcador de ejemplo que el usuario puede editar.
 */
export function getPageURL(): string {
  const { origin, pathname } = window.location
  return isLocalPreview() ? 'https://tu-proyecto.pages.dev' : `${origin}${pathname}`
}

/** Última URL guardada por el usuario, o la de esta página. */
export function getDefaultURL(): string {
  return localStorage.getItem('qr-target-url') ?? getPageURL()
}
