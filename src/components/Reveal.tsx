import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  /** Etiqueta a renderizar. Usar `li` para no romper la semántica de listas. */
  as?: 'div' | 'li'
}

/**
 * Aparece con blur + escala reducida + spring sutil.
 * Efecto premium estilo Linear / Vercel / Stripe.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = as === 'li' ? motion.li : motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.95, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 110, damping: 18, mass: 0.85, delay }}
    >
      {children}
    </MotionTag>
  )
}

type SectionTitleProps = {
  kicker: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
}

/**
 * Título de sección con stagger: kicker desliza, título aparece con blur,
 * descripción entra al final.
 */
export function SectionTitle({
  kicker,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const reduce = useReducedMotion()
  const center = align === 'center'

  return (
    <div className={center ? 'text-center' : ''}>
      <motion.p
        className="mono-label text-violet"
        initial={reduce ? false : { opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {kicker}
      </motion.p>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-3xl font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${
              center ? 'mx-auto' : ''
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
