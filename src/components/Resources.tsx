import { ExternalLink, Phone, Siren } from 'lucide-react'
import { resources } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Resources() {
  return (
    <section id="ayuda" className="relative border-t border-white/8 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(251,113,133,0.12),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Pedir ayuda"
          title={
            <>
              No tenés que
              <br />
              resolverlo solo.
            </>
          }
          description="Estos canales son gratuitos y confidenciales. Si hay riesgo inmediato, llamá al 911 antes que nada."
        />

        <Reveal className="mt-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-coral/40 bg-coral/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <Siren aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-coral" />
              <div>
                <h3 className="font-display text-base font-semibold text-white">
                  Emergencia en curso
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  Amenazas, riesgo de vida o alguien que está siendo agredido en este momento.
                </p>
              </div>
            </div>
            <a
              href="tel:911"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-bold text-ink transition-colors duration-200 hover:bg-coral-soft"
            >
              <Phone aria-hidden="true" className="size-4" />
              Llamar al 911
            </a>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Reveal key={resource.name} delay={index * 0.06}>
              <article className="card flex h-full flex-col p-6">
                <p className="mono-label text-white/60">{resource.kind}</p>
                <h3 className="mt-3 text-sm font-semibold text-white">{resource.name}</h3>

                {resource.contact ? (
                  <a
                    href={resource.href}
                    className="mt-3 font-display text-3xl font-semibold text-violet transition-colors duration-200 hover:text-violet-soft"
                  >
                    {resource.contact}
                  </a>
                ) : null}

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {resource.description}
                </p>

                <p className="mt-4 text-xs text-white/50">{resource.hours}</p>

                {resource.contact ? null : (
                  <a
                    href={resource.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-violet transition-colors duration-200 hover:text-violet-soft"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Ver sitio
                    <ExternalLink aria-hidden="true" className="size-3.5" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
