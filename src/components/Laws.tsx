import { Scale } from 'lucide-react'
import { laws } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Laws() {
  return (
    <section id="leyes" className="border-t border-white/8 py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          kicker="Marco legal · Argentina"
          title={
            <>
              No todo lo que pasa
              <br />
              en internet queda impune.
            </>
          }
          description={laws.intro}
        />

        <ul className="mt-12 divide-y divide-white/8 border-y border-white/8">
          {laws.items.map((law, index) => (
            <Reveal
              as="li"
              key={law.number}
              delay={index * 0.04}
              className="grid gap-2 py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
            >
              <span className="mono-label flex items-start gap-2 pt-1 text-violet">
                <Scale aria-hidden="true" className="mt-0.5 size-3.5" />
                {law.number}
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">{law.title}</h3>
                <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted">
                  {law.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8">
          <p className="text-xs leading-relaxed text-white/50">{laws.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
