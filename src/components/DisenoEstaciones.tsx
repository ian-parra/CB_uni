import { ArrowRight } from 'lucide-react'
import { stationDesign } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function DisenoEstaciones() {
  return (
    <section id="diseno-estaciones" className="border-t border-white/8 py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          kicker="Materiales y estaciones"
          title={
            <>
              Cada estación tiene
              <br />
              una decisión didáctica detrás.
            </>
          }
          description="El juego no elige la búsqueda del tesoro porque “engancha”: cada estación pone en juego una estrategia distinta y cada estrategia se sostiene en un concepto de la bibliografía de la cátedra. Esta es la correspondencia, estación por estación."
        />

        <ol className="mt-10 space-y-3">
          {stationDesign.map((row, index) => (
            <Reveal as="li" key={row.station} delay={index * 0.05}>
              <article className="grid gap-4 rounded-2xl border border-white/8 bg-surface p-5 sm:grid-cols-[0.9fr_1.4fr_1.1fr] sm:items-start sm:gap-6 sm:p-6">
                <div>
                  <p className="mono-label text-violet">Estación</p>
                  <h3 className="mt-2 font-display text-base font-semibold text-white">
                    {row.station}
                  </h3>
                </div>

                <div>
                  <p className="mono-label text-white/50">Decisión que se pide</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{row.decision}</p>
                </div>

                <div className="rounded-xl border border-white/8 bg-ink/40 p-4">
                  <p className="mono-label text-white/50">Concepto que la sostiene</p>
                  <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-white/85">
                    <ArrowRight aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-coral" />
                    {row.concept}
                  </p>
                  <p className="mt-2 text-xs text-violet-soft">{row.source}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-6">
          <p className="rounded-2xl border border-white/8 bg-surface/60 p-5 text-sm leading-relaxed text-muted">
            La secuencia completa —apertura, cinco estaciones y cierre— está arriba, en{' '}
            <a
              href="#recorrido"
              className="font-medium text-violet underline underline-offset-4 hover:text-violet-soft"
            >
              el recorrido
            </a>
            . Las referencias completas, en{' '}
            <a
              href="#referencias"
              className="font-medium text-violet underline underline-offset-4 hover:text-violet-soft"
            >
              referencias bibliográficas
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
