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
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Reveal>
          <h2 id="datos" className="mono-label text-violet">
            Los datos
          </h2>
        </Reveal>

        <dl className="mt-6 grid grid-cols-2 gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-6">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.07}
              className="flex flex-col-reverse border-t border-white/10 pt-4 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-6 lg:pt-0"
            >
              <dt className="mt-2 max-w-[22ch] text-xs leading-snug text-white/75 sm:text-sm">
                {stat.label}
                <span className="mt-1 block text-[0.65rem] text-white/60 sm:text-xs">{stat.source}</span>
              </dt>
              <dd className="font-display text-2xl font-semibold text-white sm:text-4xl lg:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
