import { BookOpen, LibraryBig } from 'lucide-react'
import { principles, references } from '../content'
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
          description="Tres ideas de la bibliografía de la cátedra ordenan el diseño: la inclusión genuina de la tecnología, el repertorio de estrategias y la enseñanza de habilidades para habitar plataformas. No son un marco decorativo: cada una se traduce en una decisión concreta sobre las estaciones."
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

        <div id="referencias" className="mt-16 scroll-mt-24 sm:mt-24">
          <Reveal>
            <h3 className="mono-label flex items-center gap-2 text-violet">
              <LibraryBig aria-hidden="true" className="size-3.5" />
              Referencias bibliográficas
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Materiales de la cátedra que sostienen las decisiones didácticas. Los datos
              editoriales completos se consignan en la versión escrita del trabajo.
            </p>
          </Reveal>

          <ul className="mt-6 space-y-3">
            {references.map((reference, index) => (
              <Reveal as="li" key={reference.author} delay={index * 0.06}>
                <article className="rounded-2xl border border-white/8 bg-surface p-5 sm:p-6">
                  <p className="font-display text-base font-semibold text-white">
                    {reference.author} <span className="text-white/60">({reference.year})</span>
                  </p>
                  <p className="mt-1 text-xs text-violet-soft">{reference.work}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{reference.contribution}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
