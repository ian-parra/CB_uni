import { Download, Loader2 } from 'lucide-react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import type { PointerEvent } from 'react'
import { download, svgDataURL, type QRCodeData } from '../lib/qr'

type QRCardProps = {
  data: QRCodeData | null
  url: string
  error: boolean
}

/** Tarjeta con el QR real, inclinación 3D sutil y descarga en PNG / SVG. */
export function QRCard({ data, url, error }: QRCardProps) {
  const reduce = useReducedMotion()
  const rotateX = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 })

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(x * 9)
    rotateX.set(-y * 9)
  }

  function handlePointerLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-accent/12 blur-3xl"
      />

      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="glass relative rounded-[28px] p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="mono-label flex items-center gap-2 text-white/70">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Acceso directo
          </span>
          <span className="mono-label text-white/55">QR</span>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-white p-4">
          {data ? (
            <img
              src={svgDataURL(data.svg)}
              alt={`Código QR que abre ${url}`}
              width={1024}
              height={1024}
              className="aspect-square w-full"
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center">
              {error ? (
                <p className="px-6 text-center text-sm text-neutral-600">
                  No se pudo generar el QR. Revisa la URL.
                </p>
              ) : (
                <Loader2
                  className="size-7 animate-spin text-neutral-400"
                  aria-label="Generando código QR…"
                />
              )}
            </div>
          )}
        </div>

        <p className="mt-4 text-center text-sm text-white/70">
          Apunta la cámara del móvil al código
        </p>
        <p className="mt-1 truncate text-center font-mono text-xs text-white/55">{url}</p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => data && download(data.png, 'qr-proyecto.png')}
            disabled={!data}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-3 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent-soft disabled:opacity-40"
          >
            <Download aria-hidden="true" className="size-4" />
            PNG
          </button>
          <button
            type="button"
            onClick={() => {
              if (!data) return
              const blob = new Blob([data.svg], { type: 'image/svg+xml' })
              download(URL.createObjectURL(blob), 'qr-proyecto.svg')
            }}
            disabled={!data}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-3 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-accent/60 hover:text-accent disabled:opacity-40"
          >
            <Download aria-hidden="true" className="size-4" />
            SVG
          </button>
        </div>
      </motion.div>
    </div>
  )
}
