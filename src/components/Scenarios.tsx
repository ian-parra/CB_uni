import { scenarios } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Scenarios() {
  return (
    <section aria-labelledby="situaciones" className="border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Tres situaciones reales"
          title={
            <>
              Así se ve
              <br />
              cuando pasa.
            </>
          }
          description="Ninguna de estas escenas incluye golpes ni insultos a la cara. Todas son ciberbullying, y todas se resuelven mejor cuando alguien interviene a tiempo."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <Reveal key={scenario.title} delay={index * 0.08}>
              <article className="card flex h-full flex-col overflow-hidden">
                <div className="border-b border-white/8 bg-surface-2/60 p-4">
                  <p className="mono-label text-coral">{scenario.tag}</p>
                  <h3 className="mt-2 text-base font-semibold text-white">{scenario.title}</h3>
                </div>

                <div className="flex-1 space-y-2 p-4">
                  {scenario.messages.map((message) => (
                    <p
                      key={message.text}
                      className={`max-w-[92%] rounded-xl px-3 py-2 text-[0.78rem] leading-snug ${
                        message.from === 'me'
                          ? 'ml-auto rounded-br-sm bg-violet/85 text-ink'
                          : 'rounded-bl-sm bg-white/8 text-white/80'
                      }`}
                    >
                      {message.text}
                    </p>
                  ))}
                </div>

                <div className="border-t border-white/8 bg-coral/5 p-4">
                  <p className="text-xs leading-relaxed text-white/70">
                    <span className="font-semibold text-coral-soft">Por qué es ciberbullying: </span>
                    {scenario.why}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
