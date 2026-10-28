import { recorrido } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Recorrido() {
  return (
    <section id="recorrido" className="border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionTitle
              kicker="El recorrido"
              title={
                <>
                  Ochenta minutos
                  <br />
                  para desarmar la cadena.
                </>
              }
              description="La secuencia alterna trabajo en grupos, lectura de datos y producción escrita. Cada momento tiene una consigna clara y un producto que se ve."
            />

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-white/8 bg-surface p-5">
                <p className="mono-label text-white/50">Sobre la fundamentación</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Las decisiones didácticas se sostienen en Maggio (2023), Libedinsky (2020) y Lion
                  (2020). El resumen está en{' '}
                  <a
                    href="#fundamentacion"
                    className="font-medium text-violet underline underline-offset-4 hover:text-violet-soft"
                  >
                    Por qué esta propuesta
                  </a>
                  ; la versión completa se entrega por campus.
                </p>
              </div>
            </Reveal>
          </div>

          <ol className="relative space-y-2 border-l border-white/10 pl-6 sm:pl-8">
            {recorrido.map((stage, index) => (
              <Reveal
                as="li"
                key={stage.title}
                delay={index * 0.05}
                className="group relative py-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.72rem] top-7 size-2.5 rounded-full border-2 border-ink bg-violet transition-transform duration-300 group-hover:scale-125 sm:-left-[2.22rem]"
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="mono-label text-violet">{stage.moment}</span>
                  <span aria-hidden="true" className="text-xs text-white/40">
                    ·
                  </span>
                  <span className="text-xs text-white/55">{stage.minutes}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {stage.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {stage.description}
                </p>
                <p className="mt-3 border-l-2 border-violet/30 pl-3 text-xs leading-relaxed text-white/55">
                  {stage.strategy}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
