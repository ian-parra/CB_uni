import { BookOpen } from 'lucide-react'
import { principles } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Fundamentacion() {
  return (
    <section id="fundamentacion" className="border-t border-white/8 py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          kicker="Por qué esta propuesta"
          title={
            <>
              La tecnología no es
              <br />
              el premio. Es el soporte.
            </>
          }
          description="Tres ideas ordenan el diseño: la inclusión genuina de la tecnología, la diversidad de estrategias y la enseñanza de habilidades para habitar plataformas. La fundamentación completa se entrega por campus."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.concept} delay={index * 0.07}>
              <article className="card flex h-full flex-col p-6">
                <p className="mono-label text-violet">{principle.author}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {principle.concept}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-surface p-6 sm:flex-row sm:items-start">
            <BookOpen aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-violet" />
            <div>
              <h3 className="text-sm font-semibold text-white">La pregunta que ordena el diseño</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                ¿Cómo enseñar hoy un contenido de la disciplina aprovechando una tendencia cultural
                contemporánea de manera crítica y genuina? La búsqueda del tesoro con QR no se elige
                porque “engancha”: se elige porque obliga a leer, decidir, discutir y producir con
                otros. Si el juego se pudiera resolver sin entender el ciberbullying, el diseño
                estaría fallando.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
