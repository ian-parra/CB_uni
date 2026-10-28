import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { stats } from '../content'
import { Reveal } from './Reveal'

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
      duration: 1.4,
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

export function Stats() {
  return (
    <section aria-labelledby="datos" className="border-y border-white/8 bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <h2 id="datos" className="mono-label text-violet">
            Los datos
          </h2>
        </Reveal>

        <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.07}
              className="flex flex-col-reverse lg:border-l lg:border-white/10 lg:pl-6"
            >
              <dt className="mt-2 max-w-[22ch] text-sm leading-snug text-white/75">
                {stat.label}
                <span className="mt-1 block text-xs text-white/60">{stat.source}</span>
              </dt>
              <dd className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
