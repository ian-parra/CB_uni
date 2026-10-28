import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

/** Aparece con un desplazamiento suave al entrar en pantalla. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

type SectionTitleProps = {
  kicker: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  kicker,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <p className="mono-label text-accent">{kicker}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
