import { ArrowUpRight, QrCode } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { site } from '../content'
import type { QRCodeData } from '../lib/qr'
import { QRCard } from './QRCard'

type HeroProps = {
  data: QRCodeData | null
  url: string
  error: boolean
}

export function Hero({ data, url, error }: HeroProps) {
  const reduce = useReducedMotion()
  const lines = [...site.headline.lines, site.headline.accent]

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Fondo: cuadrícula + halos de color */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-20" />
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -top-40 left-1/4 -z-10 size-[46rem] rounded-full bg-[radial-gradient(circle,rgba(215,255,62,0.16),transparent_65%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -top-20 right-0 -z-10 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(88,120,255,0.18),transparent_65%)] blur-3xl [animation-delay:-8s]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/70"
          >
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {site.badge}
          </motion.p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.03] text-white sm:text-[3.5rem] lg:text-[4.15rem]">
            {lines.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block ${index === lines.length - 1 ? 'text-accent' : ''}`}
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.1 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#qr"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent-soft"
            >
              <QrCode aria-hidden="true" className="size-4" />
              Obtener el QR
            </a>
            <a
              href="#proyecto"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/5"
            >
              Ver el proyecto
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/8 pt-6 text-sm"
          >
            <div>
              <dt className="mono-label text-white/55">Institución</dt>
              <dd className="mt-1 text-white/80">{site.university}</dd>
            </div>
            <div>
              <dt className="mono-label text-white/55">Materia</dt>
              <dd className="mt-1 text-white/80">{site.course}</dd>
            </div>
            <div>
              <dt className="mono-label text-white/55">Año</dt>
              <dd className="mt-1 text-white/80">{site.year}</dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <QRCard data={data} url={url} error={error} />
        </motion.div>
      </div>
    </section>
  )
}
