import { ArrowDown, Phone, Play } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { site } from '../content'

export function Hero() {
  const reduce = useReducedMotion()
  const lines = [...site.headline.lines, site.headline.accent]

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-20" />
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -top-40 left-1/4 -z-10 size-[46rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.18),transparent_65%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute -top-24 right-0 -z-10 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.14),transparent_65%)] blur-3xl [animation-delay:-9s]"
      />

      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/75"
        >
          <span className="size-1.5 rounded-full bg-coral" aria-hidden="true" />
          {site.badge}
        </motion.p>

        {/* Título y acceso directo desde el celular */}
        <h1 className="mt-10 text-[3.1rem] font-semibold leading-[0.95] text-white sm:text-[4.2rem] lg:text-[4.7rem]">
          {lines.map((line, index) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${index === lines.length - 1 ? 'text-violet' : ''}`}
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.2 + index * 0.08,
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
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 font-display text-lg font-medium text-violet-soft sm:text-xl"
        >
          {site.subtitle}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
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
            href="#juego"
            className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-violet-soft"
          >
            <Play aria-hidden="true" className="size-4" />
            Jugar la experiencia
          </a>
          <a
            href="#propuesta"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-violet/60 hover:text-violet"
          >
            Ver la propuesta
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="mt-5 inline-flex items-center gap-2 text-xs text-coral-soft"
        >
          <Phone aria-hidden="true" className="size-3.5" />
          Si estás atravesando una situación de acoso, llamá al 137 (24 h) o al 102.
        </motion.p>

        <motion.dl
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/8 pt-6 text-sm"
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
