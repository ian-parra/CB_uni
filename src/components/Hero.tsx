import { ArrowDown, Phone, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { site } from '../content'

export function Hero() {
  const reduce = useReducedMotion()
  const lines = [...site.headline.lines, site.headline.accent]

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-48 sm:pb-32">
      {/* Fondo decorativo animado */}
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -top-60 left-[-10%] -z-10 size-[60rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.25),transparent_70%)] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -bottom-40 right-[-10%] -z-10 size-[50rem] rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.2),transparent_70%)] blur-[100px] [animation-delay:-8s]"
      />
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute top-[30%] left-[20%] -z-10 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.15),transparent_70%)] blur-[90px] [animation-delay:-4s]"
      />

      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm"
        >
          <span className="size-1.5 rounded-full bg-coral animate-pulse" aria-hidden="true" />
          {site.badge}
        </motion.p>

        <h1 className="mt-8 text-[2.6rem] sm:text-[4rem] lg:text-[5rem] font-black leading-[0.95] text-white tracking-tight">
          {lines.map((line, index) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${index === lines.length - 1 ? 'text-coral' : ''}`}
                initial={reduce ? false : { y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + index * 0.09,
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
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 font-display text-lg font-medium text-violet-soft sm:text-xl"
        >
          {site.subtitle}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#juego"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-violet to-coral px-7 py-3 text-sm font-bold text-ink shadow-[0_0_20px_rgba(167,139,250,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,250,0.6)] hover:scale-105 active:scale-95"
          >
            <Play aria-hidden="true" className="size-4" />
            Jugar la experiencia
          </a>
          <Link
            to="/propuesta"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-violet/60 hover:bg-white/10 hover:text-violet hover:scale-105"
          >
            Ver la propuesta
            <ArrowDown aria-hidden="true" className="size-4" />
          </Link>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-6 inline-flex items-center gap-2 text-xs text-coral-soft"
        >
          <Phone aria-hidden="true" className="size-3.5" />
          Si estás atravesando una situación de acoso, llamá al 137 (24 h) o al 102.
        </motion.p>

        <motion.dl
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/8 pt-8 text-sm"
        >
          <div>
            <dt className="mono-label text-white/50">Institución</dt>
            <dd className="mt-1 text-white/80">{site.university}</dd>
          </div>
          <div>
            <dt className="mono-label text-white/50">Espacio</dt>
            <dd className="mt-1 text-white/80">{site.space}</dd>
          </div>
          <div>
            <dt className="mono-label text-white/50">Año</dt>
            <dd className="mt-1 text-white/80">{site.year}</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  )
}
