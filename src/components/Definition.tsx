import { Quote } from 'lucide-react'
import { definition } from '../content'
import { PhoneChat } from './PhoneChat'
import { Reveal, SectionTitle } from './Reveal'

export function Definition() {
  return (
    <section id="que-es" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionTitle
              kicker="¿Qué es?"
              title={definition.title}
              description={definition.intro}
            />

            <Reveal delay={0.1}>
              <blockquote className="mt-8 rounded-2xl border border-violet/25 bg-violet/5 p-6">
                <Quote aria-hidden="true" className="size-5 text-violet" />
                <p className="mt-3 font-display text-lg leading-relaxed text-white">
                  {definition.quote}
                </p>
                <footer className="mt-3 text-xs text-white/50">{definition.quoteSource}</footer>
              </blockquote>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {definition.criteria.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={0.12 + index * 0.05}
                  className="flex gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet"
                  />
                  <p className="text-sm leading-relaxed text-muted">
                    <strong className="font-semibold text-white">{item.title}:</strong>{' '}
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.15}>
            <PhoneChat />
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div className="rounded-2xl border border-coral/25 bg-coral/5 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-white">
              No es “una broma entre chicos”
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              {definition.notAJoke}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
