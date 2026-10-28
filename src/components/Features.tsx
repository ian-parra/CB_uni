import { Layers, QrCode, Smartphone, Zap } from 'lucide-react'
import type { ComponentType } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { features, site, stats } from '../content'
import { Reveal, SectionTitle } from './Reveal'

const icons: Record<string, ComponentType<{ className?: string }>> = {
  layers: Layers,
  smartphone: Smartphone,
  zap: Zap,
  qr: QrCode,
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.3,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value, reduce])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

export function Features() {
  return (
    <section id="proyecto" className="relative border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Sobre el proyecto"
          title={
            <>
              Menos fricción,
              <br />
              más tiempo para aprender.
            </>
          }
          description={`${site.fullName}. Nace de un problema concreto: la información académica está repartida en demasiados sitios y nadie sabe dónde mirar.`}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon] ?? Layers
            return (
              <Reveal key={feature.title} delay={index * 0.07}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-surface p-6 transition-colors duration-300 hover:border-accent/30">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent/6 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <Icon className="size-5 text-accent" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-16">
          <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-white/8 bg-surface px-6 py-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mono-label mt-2 text-white/55">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
