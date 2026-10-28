import { Plus } from 'lucide-react'
import { myths } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Myths() {
  return (
    <section id="mitos" className="border-t border-white/8 py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionTitle
            kicker="Mitos"
            title={
              <>
                Lo que se dice
                <br />
                no siempre es cierto.
              </>
            }
            description="Las creencias más repetidas son también las que más silencian a quien lo sufre."
          />

          <div className="divide-y divide-white/8 border-y border-white/8">
            {myths.map((item, index) => (
              <Reveal key={item.myth} delay={index * 0.04}>
                <details className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-white marker:hidden hover:text-violet-soft">
                    <span>
                      <span className="text-white/60">“{item.myth}”</span>
                    </span>
                    <Plus
                      aria-hidden="true"
                      className="size-4 shrink-0 text-white/40 transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">{item.reality}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
