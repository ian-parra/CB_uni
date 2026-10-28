import { AlertTriangle, Check } from 'lucide-react'
import { signs } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Signs() {
  return (
    <section id="senales" className="relative border-t border-white/8 py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionTitle
              kicker="Señales de alerta"
              title={
                <>
                  El daño no siempre
                  <br />
                  deja marcas visibles.
                </>
              }
              description="Los cambios de conducta son la primera pista. Ninguna señal aislada confirma un caso, pero varias juntas ameritan una conversación."
            />

            <Reveal delay={0.1}>
              <div className="mt-8 flex gap-4 rounded-2xl border border-coral/25 bg-coral/5 p-5">
                <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-coral" />
                <p className="text-sm leading-relaxed text-white/75">
                  Si alguien está en peligro inmediato o habla de lastimarse, no esperes: llamá al{' '}
                  <a href="#ayuda" className="font-semibold text-coral-soft underline underline-offset-4">
                    911 o a la línea 137
                  </a>
                  . Esta guía no reemplaza la ayuda profesional.
                </p>
              </div>
            </Reveal>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {signs.map((sign, index) => (
              <Reveal
                as="li"
                key={sign.title}
                delay={index * 0.04}
                className="card h-full p-5"
              >
                <Check aria-hidden="true" className="size-4 text-mint" />
                <h3 className="mt-3 text-sm font-semibold text-white">{sign.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{sign.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
