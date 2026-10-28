import { useEffect, useState } from 'react'
import { generateQR, type QRCodeData } from '../lib/qr'

/** Genera el QR cada vez que cambia la URL (con un pequeño debounce). */
export function useQR(url: string) {
  const [data, setData] = useState<QRCodeData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) {
      setData(null)
      return
    }

    let active = true
    const timer = setTimeout(() => {
      generateQR(url)
        .then((next) => {
          if (!active) return
          setData(next)
          setError(false)
        })
        .catch(() => {
          if (active) setError(true)
        })
    }, 120)

    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [url])

  return { data, error }
}
