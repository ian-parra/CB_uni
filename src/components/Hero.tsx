import { ArrowDown, Phone, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { site } from '../content'

export function Hero() {
  const reduce = useReducedMotion()
  const lines = [...site.headline.lines, site.headline.accent]
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax: las burbujas se mueven a distintas velocidades
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '30%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-20%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '15%'])

  return (
    <section ref={ref} id="inicio" className="relative overflow-hidden pt-24 pb-16 sm:pt-48 sm:pb-32">
      {/* Fondo decorativo con parallax — más compacto en móvil */}
      <motion.div
        aria-hidden="true"
        style={{ y: y1 }}
        className="animate-aurora pointer-events-none absolute -top-40 left-[-20%] -z-10 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.2),transparent_70%)] blur-[80px] sm:-top-60 sm:left-[-10%] sm:size-[60rem] sm:blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: y2 }}
        className="animate-aurora pointer-events-none absolute -bottom-32 right-[-20%] -z-10 size-[25rem] rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.15),transparent_70%)] blur-[70px] sm:-bottom-40 sm:right-[-10%] sm:size-[50rem] sm:blur-[100px] [animation-delay:-8s]"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: y3 }}
        className="animate-aurora pointer-events-none absolute top-[30%] left-[10%] -z-10 size-[20rem] rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.1),transparent_70%)] blur-[60px] sm:top-[30%] sm:left-[20%] sm:size-[40rem] sm:blur-[90px] [animation-delay:-4s]"
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

        <h1 className="mt-6 text-[2.2rem] font-black leading-[0.95] text-white tracking-tight sm:mt-8 sm:text-[4rem] lg:text-[5rem]">
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
          initial={reduce ? false : { opacity: 0, filter: 'blur(8px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.4 }}
          className="mt-4 font-display text-base font-medium text-violet-soft sm:mt-6 sm:text-xl"
        >
          {site.subtitle}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, filter: 'blur(8px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.5 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.6 }}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a
            href="#juego"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-violet to-coral px-7 py-3.5 text-sm font-bold text-ink shadow-[0_0_20px_rgba(167,139,250,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,250,0.6)] hover:scale-105 active:scale-95 sm:py-3"
          >
            <Play aria-hidden="true" className="size-4" />
            Jugar la experiencia
          </a>
          <Link
            to="/propuesta"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-violet/60 hover:bg-white/10 hover:text-violet hover:scale-105 sm:py-3"
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
          className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/8 pt-6 text-sm sm:mt-12 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-4 sm:pt-8"
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
